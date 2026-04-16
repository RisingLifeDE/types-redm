import {IEntity} from '@risinglife/redm-shared'
import * as entity from './namespaces/entity';
import * as hud from './namespaces/hud';
import * as misc from './namespaces/misc';
import * as ped from './namespaces/ped';
import * as player from './namespaces/player';
import * as vehicle from './namespaces/vehicle';
import * as weapon from './namespaces/weapon';
import * as network from './namespaces/network';
import * as mumble from './namespaces/mumble';
import * as object from './namespaces/object';
import * as resource from './namespaces/resource';
import * as task from './namespaces/task';
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
        private static parseArgument(arg: any): any {
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
     * Registers a listener for a client emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    export function onClient(key: string, callback: (...args: any[]) => void): void {
        RemoteEventUtils.registerEvent(key, callback);
    }

    /**
     * Registers a onetime listener for a client emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    export function onceClient(key: string, callback: (...args: any[]) => void): void {
        RemoteEventUtils.registerEventOnce(key, callback);
    }

    /**
     * Removes a listener for a client emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    export function offClient(key: string, callback: (...args: any[]) => void): void {
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
     * Sends data to a client, which can be listened by any resource
     * @param key The event key
     * @param target The target client
     * @param args All parameters
     */
    export function emitClient(key: string, target: number | string, ...args: any[]): void {
        RemoteEventUtils.send(key, target, ...args)
    }

    // Implementations

    /**
     * Will be triggered when the resource list was refreshed
     */
    export function onResourceListRefresh(callback: () => void) {
        on("onResourceListRefresh", () => {
            callback()
        });
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
     * Will be triggered when an entity is being created.
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    export function onEntityCreating(callback: (handle: number) => void) {
        on("entityCreating", (handle: number) => {
            callback(handle)
        });
    }

    /**
     * Will be triggered when an entity has been created.
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    export function onEntityCreated(callback: (handle: number) => void) {
        on("entityCreated", (handle: number) => {
            callback(handle)
        });
    }

    /**
     * Will be triggered when an entity is removed on the server.
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    export function onEntityRemoved(callback: (handle: number) => void) {
        on("entityRemoved", (handle: number) => {
            callback(handle)
        });
    }

    /**
     * Will be triggered when a player connects
     */
    export function onPlayerConnecting(callback: (playerName: string, setKickReason: (reason: string) => void, deferrals: {
        defer: any;
        done: any;
        handover: any;
        presentCard: any;
        update: any
    }, source: string) => void) {
        on("playerConnecting", (playerName: string, setKickReason: (reason: string) => void, deferrals: {
            defer: any;
            done: any;
            handover: any;
            presentCard: any;
            update: any
        }, source: string) => {
            callback(playerName, setKickReason, deferrals, source)
        });
    }

    /**
     * Will be triggered when a player joins
     */
    export function onPlayerJoining(callback: (source: string, oldID: string) => void) {
        on("playerJoining", (source: string, oldID: string) => {
            callback(source, oldID)
        });
    }

    /**
     * Will be triggered when a player enters a scope
     */
    export function onPlayerEnteredScope(callback: (data: { for: string; player: string }) => void) {
        on('playerEnteredScope', (data: { for: string; player: string }) => {
            callback(data)
        });
    }

    /**
     * Will be triggered when a player left a scope
     */
    export function onPlayerLeftScope(callback: (data: { for: string; player: string }) => void) {
        on("playerLeftScope", (data: { for: string; player: string }) => {
            callback(data)
        });
    }

    /**
     * Will be triggered when a particle fx (ptFx) is created.
     */
    export function onPtFxEvent(callback: (sender: number, data: {
        assetHash: number;
        axisBitset: number;
        effectHash: number;
        entityNetId: number;
        f100: number;
        f105: number;
        f106: number;
        f107: number;
        f109: boolean;
        f110: boolean;
        f111: boolean;
        f92: number;
        isOnEntity: boolean;
        offsetX: number;
        offsetY: number;
        offsetZ: number;
        posX: number;
        posY: number;
        posZ: number;
        rotX: number;
        rotY: number;
        rotZ: number;
        scale: number
    }) => void) {
        on("ptFxEvent", (sender: number, data: {
            assetHash: number;
            axisBitset: number;
            effectHash: number;
            entityNetId: number;
            f100: number;
            f105: number;
            f106: number;
            f107: number;
            f109: boolean;
            f110: boolean;
            f111: boolean;
            f92: number;
            isOnEntity: boolean;
            offsetX: number;
            offsetY: number;
            offsetZ: number;
            posX: number;
            posY: number;
            posZ: number;
            rotX: number;
            rotY: number;
            rotZ: number;
            scale: number
        }) => {
            callback(sender, data)
        });
    }

    /**
     * Will be triggered when a player removes all weapons from a ped owned by another player.
     */
    export function onRemoveAllWeaponsEvent(callback: (sender: number, data: { pedId: number }) => void) {
        on("removeAllWeaponsEvent", (sender: number, data: { pedId: number }) => {
            callback(sender, data)
        });
    }

    /**
     * Will be triggered when a projectile is created.
     */
    export function onStartProjectileEvent(callback: (sender: number, data: {
        commandFireSingleBullet: boolean;
        effectGroup: number;
        firePositionX: number;
        firePositionY: number;
        firePositionZ: number;
        initialPositionX: number;
        initialPositionY: number;
        initialPositionZ: number;
        ownerId: number;
        projectileHash: number;
        targetEntity: number;
        throwTaskSequence: number;
        unk10: number;
        unk11: number;
        unk12: number;
        unk13: number;
        unk14: number;
        unk15: number;
        unk16: number;
        unk3: number;
        unk4: number;
        unk5: number;
        unk6: number;
        unk7: number;
        unk9: number;
        unkX8: number;
        unkY8: number;
        unkZ8: number;
        weaponHash: number
    }) => void) {
        on("startProjectileEvent", (sender: number, data: {
            commandFireSingleBullet: boolean;
            effectGroup: number;
            firePositionX: number;
            firePositionY: number;
            firePositionZ: number;
            initialPositionX: number;
            initialPositionY: number;
            initialPositionZ: number;
            ownerId: number;
            projectileHash: number;
            targetEntity: number;
            throwTaskSequence: number;
            unk10: number;
            unk11: number;
            unk12: number;
            unk13: number;
            unk14: number;
            unk15: number;
            unk16: number;
            unk3: number;
            unk4: number;
            unk5: number;
            unk6: number;
            unk7: number;
            unk9: number;
            unkX8: number;
            unkY8: number;
            unkZ8: number;
            weaponHash: number
        }) => {
            callback(sender, data)
        });
    }

    /**
     * Will be triggered when a client wants to apply damage to a remotely-owned entity.
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    export function onWeaponDamageEvent(callback: (sender: number, data: {
        actionResultId: number;
        actionResultName: number;
        damageFlags: number;
        damageTime: number;
        damageType: number;
        f104: number;
        f112: boolean;
        f112_1: number;
        f120: number;
        f133: boolean;
        hasActionResult: boolean;
        hasImpactDir: boolean;
        hasVehicleData: boolean;
        hitComponent: number;
        hitEntityWeapon: boolean;
        hitGlobalId: number;
        hitGlobalIds: number[];
        hitWeaponAmmoAttachment: boolean;
        impactDirX: number;
        impactDirY: number;
        impactDirZ: number;
        isNetTargetPos: boolean;
        localPosX: number;
        localPosY: number;
        localPosZ: number;
        overrideDefaultDamage: boolean;
        parentGlobalId: number;
        silenced: boolean;
        suspensionIndex: number;
        tyreIndex: number;
        weaponDamage: number;
        weaponType: number;
        willKill: boolean
    }) => void) {
        on("weaponDamageEvent", (sender: number, data: {
            actionResultId: number;
            actionResultName: number;
            damageFlags: number;
            damageTime: number;
            damageType: number;
            f104: number;
            f112: boolean;
            f112_1: number;
            f120: number;
            f133: boolean;
            hasActionResult: boolean;
            hasImpactDir: boolean;
            hasVehicleData: boolean;
            hitComponent: number;
            hitEntityWeapon: boolean;
            hitGlobalId: number;
            hitGlobalIds: number[];
            hitWeaponAmmoAttachment: boolean;
            impactDirX: number;
            impactDirY: number;
            impactDirZ: number;
            isNetTargetPos: boolean;
            localPosX: number;
            localPosY: number;
            localPosZ: number;
            overrideDefaultDamage: boolean;
            parentGlobalId: number;
            silenced: boolean;
            suspensionIndex: number;
            tyreIndex: number;
            weaponDamage: number;
            weaponType: number;
            willKill: boolean
        }) => {
            callback(sender, data)
        });
    }
}

// All below is auto-generated code

export { entity, hud, misc, ped, player, vehicle, weapon, network, mumble, object, resource, task, profiler };

export * from '@risinglife/redm-shared';