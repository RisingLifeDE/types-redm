import {IEntity, Vector3} from '@risinglife/redm-shared'
import * as audio from './namespaces/audio';
import * as entity from './namespaces/entity';
import * as graphics from './namespaces/graphics';
import * as hud from './namespaces/hud';
import * as misc from './namespaces/misc';
import * as ped from './namespaces/ped';
import * as physics from './namespaces/physics';
import * as player from './namespaces/player';
import * as streaming from './namespaces/streaming';
import * as track from './namespaces/track';
import * as vehicle from './namespaces/vehicle';
import * as water from './namespaces/water';
import * as weapon from './namespaces/weapon';
import * as network from './namespaces/network';
import * as shapetest from './namespaces/shapetest';
import * as camera from './namespaces/camera';
import * as discord from './namespaces/discord';
import * as dui from './namespaces/dui';
import * as mumble from './namespaces/mumble';
import * as nui from './namespaces/nui';
import * as object from './namespaces/object';
import * as pad from './namespaces/pad';
import * as resource from './namespaces/resource';
import * as profiler from './namespaces/profiler';

export function invokeNative<T = void>(hash: string, ...args: any[]): T {
    return Citizen.invokeNative<T>(hash, ...args)
}

export function startProfiling(name?: string): void {
    Citizen.startProfiling(name);
}

export function stopProfiling(name?: string): {} {
    return Citizen.stopProfiling(name);
}

export namespace events {
    interface api {
        onNet: (eventName: string, handler: Function) => void;
        emitNet: (eventName: string, ...args: any[]) => void;
        on: (eventName: string, handler: Function) => void;
        emit: (eventName: string, ...args: any[]) => void;
    }

    class EventEmitter {
        private listeners: Map<string, Set<(...args: any[]) => void>> = new Map();

        on(eventName: string, callback: (...args: any[]) => void): void {
            let callbacks = this.listeners.get(eventName);
            if (!callbacks) {
                callbacks = new Set();
                this.listeners.set(eventName, callbacks);
            }
            callbacks.add(callback);
        }

        once(eventName: string, callback: (...args: any[]) => void): void {
            const onceWrapper = (...args: any[]) => {
                this.listeners.get(eventName)?.delete(onceWrapper);
                callback(...args);
            };
            this.on(eventName, onceWrapper);
        }

        emit(eventName: string, ...args: any[]): void {
            const callbacks = this.listeners.get(eventName);
            if (!callbacks) return;
            for (const callback of callbacks) {
                try {
                    callback(...args);
                } catch (error) {
                    EventLogger.logError(eventName, error);
                }
            }
        }

        off(eventName: string, callback: (...args: any[]) => void): void {
            this.listeners.get(eventName)?.delete(callback);
        }

        removeAllListeners(eventName?: string): void {
            if (eventName) {
                this.listeners.delete(eventName);
            } else {
                this.listeners.clear();
            }
        }
    }

    class EventParsingUtils {
        static parseArgument(arg: any): any {
            if (typeof arg === 'string') {
                try {
                    return JSON.parse(arg);
                } catch {
                    return arg;
                }
            }

            if (Array.isArray(arg)) {
                return arg.map((item) => this.parseArgument(item));
            }

            if (arg && typeof arg === 'object') {
                const result: any = {};
                for (const [key, value] of Object.entries(arg)) {
                    result[key] = this.parseArgument(value);
                }
                return result;
            }

            return arg;
        }

        static parseAllArguments(args: any[]): any[] {
            return args.map((arg) => this.parseArgument(arg));
        }

        static assignFields(target: any, source: any): any {
            if (typeof target === 'object' && target !== null && typeof source === 'object' && source !== null) {
                return Object.assign(target, source);
            }
            return source;
        }
    }

    class EventRegistry {
        private static networkEvents = new Set<string>();
        private static localEvents = new Set<string>();
        private static networkEmitter = new EventEmitter();
        private static localEmitter = new EventEmitter();

        static getNetworkRegistry() {
            return {
                events: this.networkEvents,
                emitter: this.networkEmitter
            };
        }

        static getLocalRegistry() {
            return {
                events: this.localEvents,
                emitter: this.localEmitter
            };
        }
    }

    class EventLogger {

        static logErrors: boolean = true;
        static logEvents: boolean = false;

        static logEvent(type: 'NETWORK' | 'LOCAL', eventName: string, ...args: any[]): void {
            if (this.logEvents) console.log(`[${type}] ${eventName}`, ...args);
        }

        static logError(eventName: string, error: any): void {
            if (this.logErrors) console.error(`Error in event handler for "${eventName}":`, error);
        }
    }

    class RemoteEventUtils {
        private static api: api = {
            // @ts-ignore
            onNet: (eventName: string, handler: Function) => onNet(eventName, handler),
            // @ts-ignore
            emitNet: (eventName: string, ...args: any[]) => emitNet(eventName, ...args),
            // @ts-ignore
            on: (eventName: string, handler: Function) => addEventListener(eventName, handler),
            // @ts-ignore
            emit: (eventName: string, ...args: any[]) => TriggerEvent(eventName, ...args),
        };

        private static getNetworkEventName(eventName: string): string {
            return eventName.startsWith('net::') ? eventName : `net::${eventName}`;
        }

        private static setupListener(eventName: string): void {
            const {events, emitter} = EventRegistry.getNetworkRegistry();
            const networkEventName = this.getNetworkEventName(eventName);

            if (!events.has(eventName)) {
                events.add(eventName);

                const handler = (...args: any[]) => {
                    const parsedArgs = EventParsingUtils.parseAllArguments(args);
                    emitter.emit(eventName, ...parsedArgs);
                    EventLogger.logEvent('NETWORK', eventName, ...args);
                };

                this.api.onNet(networkEventName, handler);
            }
        }

        static registerEvent<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
            this.setupListener(eventName);
            const {emitter} = EventRegistry.getNetworkRegistry();
            emitter.on(eventName, callback);
        }

        static registerEventOnce<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
            this.setupListener(eventName);
            const {emitter} = EventRegistry.getNetworkRegistry();
            emitter.once(eventName, callback);
        }

        static removeListener<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
            const {emitter} = EventRegistry.getNetworkRegistry();
            emitter.off(eventName, callback);
        }

        static removeAllListeners(eventName?: string): void {
            const {emitter} = EventRegistry.getNetworkRegistry();
            emitter.removeAllListeners(eventName);
        }

        static send(eventName: string, ...args: any[]): void {
            const networkEventName = this.getNetworkEventName(eventName);
            const parsedArgs = args.map((arg) => {
                if (arg instanceof IEntity) {
                    return arg.remoteId();
                }
                return arg;
            });

            EventLogger.logEvent('NETWORK', eventName, ...parsedArgs);
            this.api.emitNet(networkEventName, ...parsedArgs);
        }
    }

    class LocalEventUtils {
        private static api: api = {
            // @ts-ignore
            onNet: (eventName: string, handler: Function) => onNet(eventName, handler),
            // @ts-ignore
            emitNet: (eventName: string, ...args: any[]) => emitNet(eventName, ...args),
            // @ts-ignore
            on: (eventName: string, handler: Function) => addEventListener(eventName, handler),
            // @ts-ignore
            emit: (eventName: string, ...args: any[]) => TriggerEvent(eventName, ...args),
        };

        private static setupListener(eventName: string): void {
            const {events, emitter} = EventRegistry.getLocalRegistry();

            if (!events.has(eventName)) {
                events.add(eventName);

                const handler = (...args: any[]) => {
                    const parsedArgs = EventParsingUtils.parseAllArguments(args);
                    emitter.emit(eventName, ...parsedArgs);
                    EventLogger.logEvent('LOCAL', eventName, ...args);
                };

                this.api.on(eventName, handler);
            }
        }

        static registerEvent<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
            this.setupListener(eventName);
            const {emitter} = EventRegistry.getLocalRegistry();
            emitter.on(eventName, callback);
        }

        static registerEventOnce<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
            this.setupListener(eventName);
            const {emitter} = EventRegistry.getLocalRegistry();
            emitter.once(eventName, callback);
        }

        static removeListener<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
            const {emitter} = EventRegistry.getLocalRegistry();
            emitter.off(eventName, callback);
        }

        static removeAllListeners(eventName?: string): void {
            const {emitter} = EventRegistry.getLocalRegistry();
            emitter.removeAllListeners(eventName);
        }

        static send(eventName: string, ...args: any[]): void {
            const parsedArgs = args.map((arg) => {
                if (arg instanceof IEntity) {
                    return arg.remoteId();
                }
                return arg;
            });

            EventLogger.logEvent('LOCAL', eventName, ...parsedArgs);
            this.api.emit(eventName, ...parsedArgs);
        }
    }

    export function removeAllListeners(key?: string): void {
        LocalEventUtils.removeAllListeners(key)
        RemoteEventUtils.removeAllListeners(key)
    }

    /**
     * Enable or disable the error event logging.
     * Default state: true
     *
     * @param value Is the new state
     */
    export function setLogEventErrors(value: boolean): void {
        EventLogger.logErrors = value;
    }

    /**
     * Enable or disable the event logging.
     * This could be helpful when you have to debug some errors.
     *
     * Default state: false
     *
     * @param value Is the new state
     */
    export function setLogEvents(value: boolean): void {
        EventLogger.logEvents = value;
    }

    /**
     * Registers a listener for a local emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    export function on(key: string, callback: (...args: any[]) => void): void {
        LocalEventUtils.registerEvent(key, callback);
    }

    /**
     * Registers a onetime listener for a local emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    export function once(key: string, callback: (...args: any[]) => void): void {
        LocalEventUtils.registerEventOnce(key, callback);
    }

    /**
     * Removes a listener for a local emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    export function off(key: string, callback: (...args: any[]) => void): void {
        LocalEventUtils.removeListener(key, callback);
    }

    /**
     * Registers a listener for the server emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    export function onServer(key: string, callback: (...args: any[]) => void): void {
        RemoteEventUtils.registerEvent(key, callback);
    }

    /**
     * Registers a onetime listener for the server emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    export function onceServer(key: string, callback: (...args: any[]) => void): void {
        RemoteEventUtils.registerEventOnce(key, callback);
    }

    /**
     * Removes a listener for the server emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    export function offServer(key: string, callback: (...args: any[]) => void): void {
        RemoteEventUtils.removeListener(key, callback);
    }

    /**
     * Sends data local, which can be listened by any resource
     * @param key The event key
     * @param args All parameters
     */
    export function emit(key: string, ...args: any[]): void {
        LocalEventUtils.send(key, ...args)
    }

    /**
     * Sends data to the server, which can be listened by any resource
     * @param key The event key
     * @param args All parameters
     */
    export function emitServer(key: string, ...args: any[]): void {
        RemoteEventUtils.send(key, ...args)
    }

    // Implementations

    /**
     * Will be triggered when the current resource nui sends a message
     */
    export function onNui(name: string, callback: (data: any, cb: (key: any) => void) => void) {
        nui.registerCallback(name, callback)
    }

    /**
     * Will be triggered when a resource is started
     */
    export function onResourceStart(callback: (name: string) => void) {
        on("onResourceStart", (name) => {
            callback(name)
        });
    }

    /**
     * Will be triggered when a resource is being starting
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    export function onResourceStarting(callback: (name: string) => void) {
        on("onResourceStarting", (name) => {
            callback(name)
        });
    }

    /**
     * Will be triggered when a resource is being stopped
     */
    export function onResourceStop(callback: (name: string) => void) {
        on("onResourceStop", (name) => {
            callback(name)
        });
    }

    /**
     * Will be triggered when a game event is fired.
     * You can find a list of all game events here: https://docs.fivem.net/docs/game-references/game-events/
     */
    export function onGameEvent(callback: (name: string, ...args: any[]) => void) {
        on("gameEventTriggered", (name, args) => {
            callback(name, args)
        });
    }

    /**
     * Will be triggered when a population ped is being creating.
     * You can use {@link misc.cancelEvent()} to cancel this event.
     */
    export function onPopulationPedCreating(callback: (position: Vector3, model: number, setters: {
        setModel: (model: string) => void,
        setPosition: (x: number, y: number, z: number) => void
    }) => void) {
        on('populationPedCreating', (x, y, z, model, setters) => {
            callback(new Vector3(x, y, z), model, setters)
        })
    }

    /**
     * Will be triggered when an Entity got damage
     */
    export function onEntityDamaged(callback: (victim: number, culprit: number, weapon: number, baseDamage: number) => void) {
        on('entityDamaged', (victim: number, culprit: number, weapon: number, baseDamage: number) => {
            callback(victim, culprit, weapon, baseDamage)
        })
    }

    /**
     * Will be triggered when mumble is connected
     */
    export function onMumbleConnected(callback: (address: string, reconnecting: boolean) => void) {
        on('mumbleConnected', (address: string, reconnecting: boolean) => {
            callback(address, reconnecting)
        })
    }

    /**
     * Will be triggered when mumble is disconnected
     */
    export function onMumbleDisconnected(callback: (address: string) => void) {
        on('mumbleDisconnected', (address: string) => {
            callback(address)
        })
    }
}

// All below is auto-generated code

export { audio, entity, graphics, hud, misc, ped, physics, player, streaming, track, vehicle, water, weapon, network, shapetest, camera, discord, dui, mumble, nui, object, pad, resource, profiler };

export * from '@risinglife/redm-shared';