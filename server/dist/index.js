import { IEntity } from '@risinglife/redm-shared';
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
export function invokeNative(hash, ...args) {
    return Citizen.invokeNative(hash, ...args);
}
export function startProfiling(name) {
    Citizen.startProfiling(name);
}
export function stopProfiling(name) {
    return Citizen.stopProfiling(name);
}
export var events;
(function (events_1) {
    class EventEmitter {
        listeners = new Map();
        on(eventName, callback) {
            let callbacks = this.listeners.get(eventName);
            if (!callbacks) {
                callbacks = new Set();
                this.listeners.set(eventName, callbacks);
            }
            callbacks.add(callback);
        }
        once(eventName, callback) {
            const onceWrapper = (...args) => {
                this.listeners.get(eventName)?.delete(onceWrapper);
                callback(...args);
            };
            this.on(eventName, onceWrapper);
        }
        emit(eventName, ...args) {
            const callbacks = this.listeners.get(eventName);
            if (!callbacks)
                return;
            for (const callback of callbacks) {
                try {
                    callback(...args);
                }
                catch (error) {
                    EventLogger.logError(eventName, error);
                }
            }
        }
        off(eventName, callback) {
            this.listeners.get(eventName)?.delete(callback);
        }
        removeAllListeners(eventName) {
            if (eventName) {
                this.listeners.delete(eventName);
            }
            else {
                this.listeners.clear();
            }
        }
    }
    class EventParsingUtils {
        static parseArgument(arg) {
            if (typeof arg === 'string') {
                try {
                    return JSON.parse(arg);
                }
                catch {
                    return arg;
                }
            }
            if (Array.isArray(arg)) {
                return arg.map((item) => this.parseArgument(item));
            }
            if (arg && typeof arg === 'object') {
                const result = {};
                for (const [key, value] of Object.entries(arg)) {
                    result[key] = this.parseArgument(value);
                }
                return result;
            }
            return arg;
        }
        static parseAllArguments(args) {
            return args.map((arg) => this.parseArgument(arg));
        }
    }
    class EventRegistry {
        static networkEvents = new Set();
        static localEvents = new Set();
        static networkEmitter = new EventEmitter();
        static localEmitter = new EventEmitter();
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
        static logErrors = true;
        static logEvents = false;
        static logEvent(type, eventName, ...args) {
            if (this.logEvents)
                console.log(`[${type}] ${eventName}`, ...args);
        }
        static logError(eventName, error) {
            if (this.logErrors)
                console.error(`Error in event handler for "${eventName}":`, error);
        }
    }
    class RemoteEventUtils {
        static api = {
            // @ts-ignore
            onNet: (eventName, handler) => onNet(eventName, handler),
            // @ts-ignore
            emitNet: (eventName, ...args) => emitNet(eventName, ...args),
            // @ts-ignore
            on: (eventName, handler) => addEventListener(eventName, handler),
            // @ts-ignore
            emit: (eventName, ...args) => TriggerEvent(eventName, ...args),
        };
        static getNetworkEventName(eventName) {
            return eventName.startsWith('net::') ? eventName : `net::${eventName}`;
        }
        static setupListener(eventName) {
            const { events, emitter } = EventRegistry.getNetworkRegistry();
            const networkEventName = this.getNetworkEventName(eventName);
            if (!events.has(eventName)) {
                events.add(eventName);
                const handler = (...args) => {
                    const parsedArgs = EventParsingUtils.parseAllArguments(args);
                    emitter.emit(eventName, ...parsedArgs);
                    EventLogger.logEvent('NETWORK', eventName, ...args);
                };
                this.api.onNet(networkEventName, handler);
            }
        }
        static registerEvent(eventName, callback) {
            this.setupListener(eventName);
            const { emitter } = EventRegistry.getNetworkRegistry();
            emitter.on(eventName, callback);
        }
        static registerEventOnce(eventName, callback) {
            this.setupListener(eventName);
            const { emitter } = EventRegistry.getNetworkRegistry();
            emitter.once(eventName, callback);
        }
        static removeListener(eventName, callback) {
            const { emitter } = EventRegistry.getNetworkRegistry();
            emitter.off(eventName, callback);
        }
        static removeAllListeners(eventName) {
            const { emitter } = EventRegistry.getNetworkRegistry();
            emitter.removeAllListeners(eventName);
        }
        static send(eventName, ...args) {
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
        static api = {
            // @ts-ignore
            onNet: (eventName, handler) => onNet(eventName, handler),
            // @ts-ignore
            emitNet: (eventName, ...args) => emitNet(eventName, ...args),
            // @ts-ignore
            on: (eventName, handler) => addEventListener(eventName, handler),
            // @ts-ignore
            emit: (eventName, ...args) => TriggerEvent(eventName, ...args),
        };
        static setupListener(eventName) {
            const { events, emitter } = EventRegistry.getLocalRegistry();
            if (!events.has(eventName)) {
                events.add(eventName);
                const handler = (...args) => {
                    const parsedArgs = EventParsingUtils.parseAllArguments(args);
                    emitter.emit(eventName, ...parsedArgs);
                    EventLogger.logEvent('LOCAL', eventName, ...args);
                };
                this.api.on(eventName, handler);
            }
        }
        static registerEvent(eventName, callback) {
            this.setupListener(eventName);
            const { emitter } = EventRegistry.getLocalRegistry();
            emitter.on(eventName, callback);
        }
        static registerEventOnce(eventName, callback) {
            this.setupListener(eventName);
            const { emitter } = EventRegistry.getLocalRegistry();
            emitter.once(eventName, callback);
        }
        static removeListener(eventName, callback) {
            const { emitter } = EventRegistry.getLocalRegistry();
            emitter.off(eventName, callback);
        }
        static removeAllListeners(eventName) {
            const { emitter } = EventRegistry.getLocalRegistry();
            emitter.removeAllListeners(eventName);
        }
        static send(eventName, ...args) {
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
    function removeAllListeners(key) {
        LocalEventUtils.removeAllListeners(key);
        RemoteEventUtils.removeAllListeners(key);
    }
    events_1.removeAllListeners = removeAllListeners;
    /**
     * Enable or disable the error event logging.
     * Default state: true
     *
     * @param value Is the new state
     */
    function setLogEventErrors(value) {
        EventLogger.logErrors = value;
    }
    events_1.setLogEventErrors = setLogEventErrors;
    /**
     * Enable or disable the event logging.
     * This could be helpful when you have to debug some errors.
     *
     * Default state: false
     *
     * @param value Is the new state
     */
    function setLogEvents(value) {
        EventLogger.logEvents = value;
    }
    events_1.setLogEvents = setLogEvents;
    /**
     * Registers a listener for a local emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function on(key, callback) {
        LocalEventUtils.registerEvent(key, callback);
    }
    events_1.on = on;
    /**
     * Registers a onetime listener for a local emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function once(key, callback) {
        LocalEventUtils.registerEventOnce(key, callback);
    }
    events_1.once = once;
    /**
     * Removes a listener for a local emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    function off(key, callback) {
        LocalEventUtils.removeListener(key, callback);
    }
    events_1.off = off;
    /**
     * Registers a listener for a client emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function onClient(key, callback) {
        RemoteEventUtils.registerEvent(key, callback);
    }
    events_1.onClient = onClient;
    /**
     * Registers a onetime listener for a client emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function onceClient(key, callback) {
        RemoteEventUtils.registerEventOnce(key, callback);
    }
    events_1.onceClient = onceClient;
    /**
     * Removes a listener for a client emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    function offClient(key, callback) {
        RemoteEventUtils.removeListener(key, callback);
    }
    events_1.offClient = offClient;
    /**
     * Sends data local, which can be listened by any resource
     * @param key The event key
     * @param args All parameters
     */
    function emit(key, ...args) {
        LocalEventUtils.send(key, ...args);
    }
    events_1.emit = emit;
    /**
     * Sends data to a client, which can be listened by any resource
     * @param key The event key
     * @param target The target client
     * @param args All parameters
     */
    function emitClient(key, target, ...args) {
        RemoteEventUtils.send(key, target, ...args);
    }
    events_1.emitClient = emitClient;
    // Implementations
    /**
     * Will be triggered when the resource list was refreshed
     */
    function onResourceListRefresh(callback) {
        on("onResourceListRefresh", () => {
            callback();
        });
    }
    events_1.onResourceListRefresh = onResourceListRefresh;
    /**
     * Will be triggered when a resource is started
     */
    function onResourceStart(callback) {
        on("onResourceStart", (name) => {
            callback(name);
        });
    }
    events_1.onResourceStart = onResourceStart;
    /**
     * Will be triggered when a resource is being starting
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    function onResourceStarting(callback) {
        on("onResourceStarting", (name) => {
            callback(name);
        });
    }
    events_1.onResourceStarting = onResourceStarting;
    /**
     * Will be triggered when a resource is being stopped
     */
    function onResourceStop(callback) {
        on("onResourceStop", (name) => {
            callback(name);
        });
    }
    events_1.onResourceStop = onResourceStop;
    /**
     * Will be triggered when an entity is being created.
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    function onEntityCreating(callback) {
        on("entityCreating", (handle) => {
            callback(handle);
        });
    }
    events_1.onEntityCreating = onEntityCreating;
    /**
     * Will be triggered when an entity has been created.
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    function onEntityCreated(callback) {
        on("entityCreated", (handle) => {
            callback(handle);
        });
    }
    events_1.onEntityCreated = onEntityCreated;
    /**
     * Will be triggered when an entity is removed on the server.
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    function onEntityRemoved(callback) {
        on("entityRemoved", (handle) => {
            callback(handle);
        });
    }
    events_1.onEntityRemoved = onEntityRemoved;
    /**
     * Will be triggered when a player connects
     */
    function onPlayerConnecting(callback) {
        on("playerConnecting", (playerName, setKickReason, deferrals, source) => {
            callback(playerName, setKickReason, deferrals, source);
        });
    }
    events_1.onPlayerConnecting = onPlayerConnecting;
    /**
     * Will be triggered when a player joins
     */
    function onPlayerJoining(callback) {
        on("playerJoining", (source, oldID) => {
            callback(source, oldID);
        });
    }
    events_1.onPlayerJoining = onPlayerJoining;
    /**
     * Will be triggered when a player enters a scope
     */
    function onPlayerEnteredScope(callback) {
        on('playerEnteredScope', (data) => {
            callback(data);
        });
    }
    events_1.onPlayerEnteredScope = onPlayerEnteredScope;
    /**
     * Will be triggered when a player left a scope
     */
    function onPlayerLeftScope(callback) {
        on("playerLeftScope", (data) => {
            callback(data);
        });
    }
    events_1.onPlayerLeftScope = onPlayerLeftScope;
    /**
     * Will be triggered when a particle fx (ptFx) is created.
     */
    function onPtFxEvent(callback) {
        on("ptFxEvent", (sender, data) => {
            callback(sender, data);
        });
    }
    events_1.onPtFxEvent = onPtFxEvent;
    /**
     * Will be triggered when a player removes all weapons from a ped owned by another player.
     */
    function onRemoveAllWeaponsEvent(callback) {
        on("removeAllWeaponsEvent", (sender, data) => {
            callback(sender, data);
        });
    }
    events_1.onRemoveAllWeaponsEvent = onRemoveAllWeaponsEvent;
    /**
     * Will be triggered when a projectile is created.
     */
    function onStartProjectileEvent(callback) {
        on("startProjectileEvent", (sender, data) => {
            callback(sender, data);
        });
    }
    events_1.onStartProjectileEvent = onStartProjectileEvent;
    /**
     * Will be triggered when a client wants to apply damage to a remotely-owned entity.
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    function onWeaponDamageEvent(callback) {
        on("weaponDamageEvent", (sender, data) => {
            callback(sender, data);
        });
    }
    events_1.onWeaponDamageEvent = onWeaponDamageEvent;
})(events || (events = {}));
// All below is auto-generated code
export { entity, hud, misc, ped, player, vehicle, weapon, network, mumble, object, resource, task, profiler };
export * from '@risinglife/redm-shared';
