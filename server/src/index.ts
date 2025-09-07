import {Vector3,Vector2,Entity,Ped,Player,Vehicle,Object,Blip,Camera} from '@risinglife/redm-shared'

export namespace events {
    interface api {
        onNet: (eventName: string, handler: Function) => void;
        emitNet: (eventName: string, ...args: any[]) => void;
        on: (eventName: string, handler: Function) => void;
        emit: (eventName: string, ...args: any[]) => void;
    }
    class EventEmitter {
        private listeners: Map<string, Array<(...args: any[]) => void>> = new Map();

        on(eventName: string, callback: (...args: any[]) => void): void {
            if (!this.listeners.has(eventName)) {
                this.listeners.set(eventName, []);
            }
            this.listeners.get(eventName)!.push(callback);
        }

        once(eventName: string, callback: (...args: any[]) => void): void {
            const onceWrapper = (...args: any[]) => {
                this.off(eventName, onceWrapper);
                callback(...args);
            };
            this.on(eventName, onceWrapper);
        }

        emit(eventName: string, ...args: any[]): void {
            const callbacks = this.listeners.get(eventName);
            if (callbacks) {
                callbacks.forEach((callback) => {
                    try {
                        callback(...args);
                    } catch (error) {
                        EventLogger.logError(eventName, error);
                    }
                });
            }
        }

        off(eventName: string, callback: (...args: any[]) => void): void {
            const callbacks = this.listeners.get(eventName);
            if (callbacks) {
                const index = callbacks.indexOf(callback);
                if (index !== -1) {
                    callbacks.splice(index, 1);
                }
            }
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

    class NetworkEventUtils {
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
        NetworkEventUtils.removeAllListeners(key)
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
        NetworkEventUtils.registerEvent(key, callback);
    }
    /**
     * Registers a onetime listener for a client emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    export function onceClient(key: string, callback: (...args: any[]) => void): void {
        NetworkEventUtils.registerEventOnce(key, callback);
    }
    /**
     * Removes a listener for a client emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    export function offClient(key: string, callback: (...args: any[]) => void): void {
        NetworkEventUtils.removeListener(key, callback);
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
        NetworkEventUtils.send(key, target, ...args)
    }
}

// All below is auto-generated code

export namespace entity {
    /**
     * No comment provided
     *
     * Hash: 0x91B38FB6
     */
    export function getRemoteSyncedScenesAllowed(entity: number | Entity): boolean {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetEntityRemoteSyncedScenesAllowed(_entity);
    }

    /**
     * Enables or disables the owner check for the specified entity in network-synchronized scenes. When set to `false`, the entity cannot participate in synced scenes initiated by clients that do not own the entity.
     *
     * By default, this is `false` for all entities, meaning only the entity's owner can include it in networked synchronized scenes.
     *
     * Hash: 0xD3FC9D88
     */
    export function setRemoteSyncedScenesAllowed(entity: number | Entity, allow: boolean): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        SetEntityRemoteSyncedScenesAllowed(_entity, allow);
    }

    /**
     * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
     *
     * Hash: 0xEDBE6ADD
     */
    export function isPositionFrozen(entity: number | Entity): boolean {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return IsEntityPositionFrozen(_entity);
    }

    /**
     * ```cpp
     * enum eApplyForceTypes {
     * APPLY_TYPE_FORCE = 0,
     * APPLY_TYPE_IMPULSE = 1,
     * APPLY_TYPE_EXTERNAL_FORCE = 2,
     * APPLY_TYPE_EXTERNAL_IMPULSE = 3,
     * APPLY_TYPE_TORQUE = 4,
     * APPLY_TYPE_ANGULAR_IMPULSE = 5
     * }
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [APPLY_FORCE_TO_ENTITY](?\_0xC5F68BE9613E2D18).</strong>
     *
     * Hash: 0xC1C0855A
     */
    export function applyForceTo(entity: number | Entity, forceType: number, pos: Vector3, offX: number, offY: number, offZ: number, nComponent: number, bLocalForce: boolean, bLocalOffset: boolean, bScaleByMass: boolean, bPlayAudio: boolean, bScaleByTimeWarp: boolean): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        ApplyForceToEntity(_entity, forceType, pos.x, pos.y, pos.z, offX, offY, offZ, nComponent, bLocalForce, bLocalOffset, bScaleByMass, bPlayAudio, bScaleByTimeWarp);
    }

    /**
     * Deletes the specified entity.
     *
     * **NOTE**: For trains this will only work if called on the train engine, it will not work on its carriages.
     *
     * Hash: 0xFAA3D236
     */
    export function deleteEntity(entity: number | Entity): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        DeleteEntity(_entity);
    }

    /**
     * No comment provided
     *
     * Hash: 0x3AC90869
     */
    export function doesExist(entity: number | Object): boolean {
        const _entity = entity instanceof Object ? entity.handle() : entity;
        return DoesEntityExist(_entity);
    }

    /**
     * Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using [`SET_ENTITY_COORDS`](#\_0x06843DA7060A026B).
     *
     * <strong>This is the server-side RPC native equivalent of the client native [FREEZE_ENTITY_POSITION](?\_0x428CA6DBD1094446).</strong>
     *
     * Hash: 0x65C16D57
     */
    export function freezePosition(entity: number | Entity, toggle: boolean): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        FreezeEntityPosition(_entity, toggle);
    }

    /**
     * Gets the entity that this entity is attached to.
     *
     * Hash: 0xFE1589F9
     */
    export function getAttachedTo(entity: number | Entity): number {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetEntityAttachedTo(_entity);
    }

    /**
     * No comment provided
     *
     * Hash: 0xE8C0C629
     */
    export function getCollisionDisabled(entity: number | Entity): boolean {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetEntityCollisionDisabled(_entity);
    }

    /**
     * Gets the current coordinates for a specified entity. This native is used server side when using OneSync.
     *
     * See [GET_ENTITY_COORDS](#\_0x3FEF770D40960D5A) for client side.
     *
     * Hash: 0x1647F1CB
     */
    export function getCoords(entity: number | Entity): Vector3 {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return new Vector3(GetEntityCoords(_entity));
    }

    /**
     * No comment provided
     *
     * Hash: 0x972CC383
     */
    export function getHeading(entity: number | Entity): number {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetEntityHeading(_entity);
    }

    /**
     * Only works for vehicle and peds
     *
     * Hash: 0x8E3222B7
     */
    export function getHealth(entity: number | Entity): number {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetEntityHealth(_entity);
    }

    /**
     * Currently it only works with peds.
     *
     * Hash: 0xC7AE6AA1
     */
    export function getMaxHealth(entity: number | Entity): number {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetEntityMaxHealth(_entity);
    }

    /**
     * No comment provided
     *
     * Hash: 0xDAFCB3EC
     */
    export function getModel(entity: number | Entity): number {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetEntityModel(_entity);
    }

    /**
     * No comment provided
     *
     * Hash: 0xD16EA02F
     */
    export function getOrphanMode(entity: number | Entity): number {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetEntityOrphanMode(_entity);
    }

    /**
     * This native gets an entity's population type.
     *
     * Hash: 0xFC30DDFF
     */
    export function getPopulationType(entity: number | Entity): number {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetEntityPopulationType(_entity);
    }

    /**
     * No comment provided
     *
     * Hash: 0x8FF45B04
     */
    export function getRotation(entity: number | Entity): Vector3 {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return new Vector3(GetEntityRotation(_entity));
    }

    /**
     * No comment provided
     *
     * Hash: 0x9BF8A73F
     */
    export function getRotationVelocity(entity: number | Entity): Vector3 {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return new Vector3(GetEntityRotationVelocity(_entity));
    }

    /**
     * Gets the routing bucket for the specified entity.
     *
     * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
     *
     * Hash: 0xED4B0486
     */
    export function getRoutingBucket(entity: number | Entity): number {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetEntityRoutingBucket(_entity);
    }

    /**
     * No comment provided
     *
     * Hash: 0xB7F70784
     */
    export function getScript(entity: number | Entity): string {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetEntityScript(_entity);
    }

    /**
     * Gets the current speed of the entity in meters per second.
     *
     * ```
     * To convert to MPH: speed * 2.236936
     * To convert to KPH: speed * 3.6
     * ```
     *
     * Hash: 0x9E1E4798
     */
    export function getSpeed(entity: number | Entity): number {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetEntitySpeed(_entity);
    }

    /**
     * Gets the entity type (as an integer), which can be one of the following defined down below:
     *
     * <strong>The following entities will return type `1`:</strong>
     *
     * *   Ped
     * *   Player
     * *   Animal (Red Dead Redemption 2)
     * *   Horse (Red Dead Redemption 2)
     *
     * <strong>The following entities will return type `2`:</strong>
     *
     * *   Automobile
     * *   Bike
     * *   Boat
     * *   Heli
     * *   Plane
     * *   Submarine
     * *   Trailer
     * *   Train
     * *   DraftVeh (Red Dead Redemption 2)
     *
     * <strong>The following entities will return type `3`:</strong>
     *
     * *   Object
     * *   Door
     * *   Pickup
     *
     * Otherwise, a value of `0` will be returned.
     *
     * Hash: 0xB1BD08D
     */
    export function getType(entity: number | Entity): number {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetEntityType(_entity);
    }

    /**
     * No comment provided
     *
     * Hash: 0xC14C9B6B
     */
    export function getVelocity(entity: number | Entity): Vector3 {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return new Vector3(GetEntityVelocity(_entity));
    }

    /**
     * Gets the specific entity type (as an integer), which can be one of the following defined down below:
     *
     * #### FiveM:
     *
     * ```cpp
     * enum eNetObjEntityType
     * {
     * Automobile = 0,
     * Bike = 1,
     * Boat = 2,
     * Door = 3,
     * Heli = 4,
     * Object = 5,
     * Ped = 6,
     * Pickup = 7,
     * PickupPlacement = 8,
     * Plane = 9,
     * Submarine = 10,
     * Player = 11,
     * Trailer = 12,
     * Train = 13
     * };
     * ```
     *
     * #### RedM:
     *
     * ```cpp
     * enum eNetObjEntityType
     * {
     * Animal = 0,
     * Automobile = 1,
     * Bike = 2,
     * Boat = 3,
     * Door = 4,
     * Heli = 5,
     * Object = 6,
     * Ped = 7,
     * Pickup = 8,
     * PickupPlacement = 9,
     * Plane = 10,
     * Submarine = 11,
     * Player = 12,
     * Trailer = 13,
     * Train = 14,
     * DraftVeh = 15,
     * StatsTracker = 16,
     * PropSet = 17,
     * AnimScene = 18,
     * GroupScenario = 19,
     * Herd = 20,
     * Horse = 21,
     * WorldState = 22,
     * WorldProjectile = 23,
     * Incident = 24,
     * Guardzone = 25,
     * PedGroup = 26,
     * CombatDirector = 27,
     * PedSharedTargeting = 28,
     * Persistent = 29
     * };
     * ```
     *
     * Hash: 0x23B2A641
     */
    export function getNetTypeFrom(entity: number | Entity): number {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetNetTypeFromEntity(_entity);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9C9A3BE0
     */
    export function hasBeenMarkedAsNoLongerNeeded(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return HasEntityBeenMarkedAsNoLongerNeeded(_vehicle);
    }

    /**
     * This native checks if the given entity is visible.
     *
     * Hash: 0x120B4ED5
     */
    export function isVisible(entity: number | Entity): boolean {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return IsEntityVisible(_entity);
    }

    /**
     * Sets the coordinates (world position) for a specified entity, offset by the radius of the entity on the Z axis.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_COORDS](?\_0x06843DA7060A026B).</strong>
     *
     * Hash: 0xDF70B41B
     */
    export function setCoords(entity: number | Entity, pos: Vector3, alive: boolean, deadFlag: boolean, ragdollFlag: boolean, clearArea: boolean): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        SetEntityCoords(_entity, pos.x, pos.y, pos.z, alive, deadFlag, ragdollFlag, clearArea);
    }

    /**
     * It overrides the default distance culling radius of an entity. Set to `0.0` to reset.
     * If you want to interact with an entity outside of your players' scopes set the radius to a huge number.
     *
     * **WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
     *
     * Hash: 0xD3A183A3
     */
    export function setDistanceCullingRadius(entity: number | Entity, radius: number): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        SetEntityDistanceCullingRadius(_entity, radius);
    }

    /**
     * Set the heading of an entity in degrees also known as "Yaw".
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_HEADING](?\_0x8E2530AA8ADA980E).</strong>
     *
     * Hash: 0xE0FF064D
     */
    export function setHeading(entity: number | Entity, heading: number): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        SetEntityHeading(_entity, heading);
    }

    /**
     * It allows to flag an entity to ignore the request control filter policy.
     *
     * Hash: 0x9F7F8D36
     */
    export function setIgnoreRequestControlFilter(entity: number | Entity, ignore: boolean): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        SetEntityIgnoreRequestControlFilter(_entity, ignore);
    }

    /**
     * ```cpp
     * enum EntityOrphanMode {
     * // Default, this will delete the entity when it isn't relevant to any players
     * // NOTE: this *doesn't* mean when they're no longer in scope
     * DeleteWhenNotRelevant = 0,
     * // The entity will be deleted whenever its original owner disconnects
     * // NOTE: if this is set when the entities original owner has already left it will be
     * // marked for deletion (similar to just calling DELETE_ENTITY)
     * DeleteOnOwnerDisconnect = 1,
     * // The entity will never be deleted by the server when it does relevancy checks
     * // you should only use this on entities that need to be relatively persistent
     * KeepEntity = 2
     * }
     * ```
     *
     * Sets what the server will do when the entity no longer has its original owner. By default the server will cleanup entities that it considers "no longer relevant".
     *
     * When used on trains, this native will recursively call onto all attached carriages.
     *
     * **NOTE**: When used with `KeepEntity` (2) this native only guarantees that the ***server*** will not delete the entity, client requests to delete the entity will still work perfectly fine.
     *
     * Hash: 0x489E9162
     */
    export function setOrphanMode(entity: number | Entity, orphanMode: number): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        SetEntityOrphanMode(_entity, orphanMode);
    }

    /**
     * Sets the rotation of a specified entity in the game world.
     *
     * ```
     * NativeDB Introduced: v323
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_ROTATION](?\_0x8524A8B0171D5E07).</strong>
     *
     * Hash: 0xA345EFE
     */
    export function setRotation(entity: number | Entity, pitch: number, roll: number, yaw: number, rotationOrder: number, bDeadCheck: boolean): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        SetEntityRotation(_entity, pitch, roll, yaw, rotationOrder, bDeadCheck);
    }

    /**
     * Sets the routing bucket for the specified entity.
     *
     * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
     *
     * Hash: 0x635E5289
     */
    export function setRoutingBucket(entity: number | Entity, bucket: number): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        SetEntityRoutingBucket(_entity, bucket);
    }

    /**
     * ```
     * Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_VELOCITY](?\_0x1C99BB7B6E96D16F).</strong>
     *
     * Hash: 0xFF5A1988
     */
    export function setVelocity(entity: number | Entity, pos: Vector3): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        SetEntityVelocity(_entity, pos.x, pos.y, pos.z);
    }

    /**
     * Internal function for ensuring an entity has a state bag.
     *
     * Hash: 0x3BB78F05
     */
    export function ensureStateBag(entity: number | Entity): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        EnsureEntityStateBag(_entity);
    }

    /**
     * ### Supported types
     *
     * *   \[1] : Peds (including animals) and players.
     * *   \[2] : Vehicles.
     * *   \[3] : Objects (props), doors, and projectiles.
     *
     * ### Coordinates need to be send unpacked (x,y,z)
     *
     * ```lua
     *
     * -- Define the allowed model hashes
     * local allowedModelHashes = { GetHashKey("p_crate03x"), GetHashKey("p_crate22x") }
     *
     * -- Get the player's current coordinates
     * local playerCoords = GetEntityCoords(PlayerPedId())
     *
     * -- Retrieve all entities of type Object (type 3) within a radius of 10.0 units
     * -- that match the allowed model hashes
     * -- and sort output entities by distance
     * local entities = GetEntitiesInRadius(playerCoords.x, playerCoords.y, playerCoords.z, 10.0, 3, true, allowedModelHashes)
     *
     * -- Iterate through the list of entities and print their ids
     * for i = 1, #entities do
     * local entity = entities[i]
     * print(entity)
     * end
     *
     * ```
     *
     * Hash: 0xDFFBA12F
     */
    export function getEntitiesInRadius(pos: Vector3, radius: number, entityType: number, sortByDistance: boolean, models: number | Object): number {
        const _models = models instanceof Object ? models.handle() : models;
        return GetEntitiesInRadius(pos.x, pos.y, pos.z, radius, entityType, sortByDistance, _models);
    }

    /**
     * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](#\_0x5BA35AAF).
     *
     * Hash: 0x4BDF1867
     */
    export function getFromStateBagName(bagName: string): number {
        return GetEntityFromStateBagName(bagName);
    }

}


export namespace hud {
    /**
     * Creates a blip for the specified coordinates. You can use `SET_BLIP_` natives to change the blip.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_COORD](?\_0x5A039BB0BCA604B6).</strong>
     *
     * Hash: 0xC6F43D0E
     */
    export function addBlipForCoord(pos: Vector3): number {
        return AddBlipForCoord(pos.x, pos.y, pos.z);
    }

    /**
     * Create a blip that by default is red (enemy), you can use [SET_BLIP_AS_FRIENDLY](#\_0xC6F43D0E) to make it blue (friend).\
     * Can be used for objects, vehicles and peds.
     * Example of enemy:
     * ![enemy](https://i.imgur.com/fl78svv.png)
     * Example of friend:
     * ![friend](https://i.imgur.com/Q16ho5d.png)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_ENTITY](?\_0x5CDE92C702A8FCE7).</strong>
     *
     * Hash: 0x30822554
     */
    export function addBlipForEntity(entity: number | Entity): number {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return AddBlipForEntity(_entity);
    }

    /**
     * Create a blip with a radius for the specified coordinates (it doesnt create the blip sprite, so you need to use [AddBlipCoords](#\_0xC6F43D0E))
     * Example image:
     * ![example](https://i.imgur.com/9hQl3DB.png)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_RADIUS](?\_0x46818D79B1F7499A).</strong>
     *
     * Hash: 0x4626756C
     */
    export function addBlipForRadius(pos: Vector3, radius: number): number {
        return AddBlipForRadius(pos.x, pos.y, pos.z, radius);
    }

    /**
     * Removes the blip from your map.
     * **Note:** This function only works on the script that created the blip, if you wish to remove blips created by other scripts, see [`SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT`](#\_0x86A652570E5F25DD).
     *
     * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_BLIP](?\_0x86A652570E5F25DD).</strong>
     *
     * Hash: 0xD8C3C1CD
     */
    export function removeBlip(blip: number | Blip): void {
        const _blip = blip instanceof Blip ? blip.handle() : blip;
        RemoveBlip(_blip);
    }

    /**
     * Sets the displayed sprite for a specific blip.
     * There's a [list of sprites](https://docs.fivem.net/game-references/blips/) on the FiveM documentation site.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_BLIP_SPRITE](?\_0xDF735600A4696DAF).</strong>
     *
     * Hash: 0x8DBBB0B9
     */
    export function setBlipSprite(blip: number | Blip, spriteId: number): void {
        const _blip = blip instanceof Blip ? blip.handle() : blip;
        SetBlipSprite(_blip, spriteId);
    }

    /**
     * Adds a rectangular blip for the specified coordinates/area.
     * It is recommended to use [SET_BLIP_ROTATION](#\_0xF87683CDF73C3F6E) and [SET_BLIP_COLOUR](#\_0x03D7FB09E75D6B7E) to make the blip not rotate along with the camera.
     * By default, the blip will show as a *regular* blip with the specified color/sprite if it is outside of the minimap view.
     * Example image:
     * ![minimap](https://i.imgur.com/qLbXWcQ.png)
     * ![big map](https://i.imgur.com/0j7O7Rh.png)
     * (Native name is *likely* to actually be ADD_BLIP_FOR_AREA, but due to the usual reasons this can't be confirmed)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [\_ADD_BLIP_FOR_AREA](?\_0xCE5D0E5E315DB238).</strong>
     *
     * Hash: 0x6228F159
     */
    export function addBlipForArea(pos: Vector3, width: number, height: number): number {
        return AddBlipForArea(pos.x, pos.y, pos.z, width, height);
    }

}


export namespace misc {
    /**
     * No comment provided
     *
     * Hash: 0xF97B1C93
     */
    export function enableEnhancedHostSupport(enabled: boolean): void {
        EnableEnhancedHostSupport(enabled);
    }

    /**
     * No comment provided
     *
     * Hash: 0x13B6855D
     */
    export function flagServerAsPrivate(private_: boolean): void {
        FlagServerAsPrivate(private_);
    }

    /**
     * Returns the current console output buffer.
     *
     * Hash: 0xE57429FA
     */
    export function getConsoleBuffer(): string {
        return GetConsoleBuffer();
    }

    /**
     * Gets the current game timer in milliseconds.
     *
     * Hash: 0xA4EA0691
     */
    export function getGameTimer(): number {
        return GetGameTimer();
    }

    /**
     * This native converts the passed string to a hash.
     *
     * Hash: 0x98EFF6F1
     */
    export function getHashKey(model: string): number {
        return GetHashKey(model);
    }

    /**
     * No comment provided
     *
     * Hash: 0xF01E2AAB
     */
    export function getHeliMainRotorHealth(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetHeliMainRotorHealth(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x5F70F5A3
     */
    export function getHostId(): string {
        return GetHostId();
    }

    /**
     * No comment provided
     *
     * Hash: 0x23473EA4
     */
    export function getPasswordHash(password: string): string {
        return GetPasswordHash(password);
    }

    /**
     * No comment provided
     *
     * Hash: 0x76876154
     */
    export function isFlashLightOn(ped: number | Ped): boolean {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return IsFlashLightOn(_ped);
    }

    /**
     * No comment provided
     *
     * Hash: 0x8E8CC653
     */
    export function performHttpRequestInternal(requestData: string, requestDataLength: number): number {
        return PerformHttpRequestInternal(requestData, requestDataLength);
    }

    /**
     * No comment provided
     *
     * Hash: 0x6B171E87
     */
    export function performHttpRequestInternalEx(requestData: number | Object): number {
        const _requestData = requestData instanceof Object ? requestData.handle() : requestData;
        return PerformHttpRequestInternalEx(_requestData);
    }

    /**
     * Prints 'structured trace' data to the server `file descriptor 3` channel. This is not generally useful outside of
     * server monitoring utilities.
     *
     * Hash: 0x90892DED
     */
    export function printStructuredTrace(jsonString: string): void {
        PrintStructuredTrace(jsonString);
    }

    /**
     * Registers a listener for console output messages.
     *
     * Hash: 0x281B5448
     */
    export function registerConsoleListener(listener: Function): void {
        RegisterConsoleListener(listener);
    }

    /**
     * No comment provided
     *
     * Hash: 0x341B16D2
     */
    export function setConvar(varName: string, value: string): void {
        SetConvar(varName, value);
    }

    /**
     * Used to replicate a server variable onto clients.
     *
     * Hash: 0xF292858C
     */
    export function setConvarReplicated(varName: string, value: string): void {
        SetConvarReplicated(varName, value);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9338D547
     */
    export function setConvarServerInfo(varName: string, value: string): void {
        SetConvarServerInfo(varName, value);
    }

    /**
     * No comment provided
     *
     * Hash: 0xF90B7469
     */
    export function setGameType(gametypeName: string): void {
        SetGameType(gametypeName);
    }

    /**
     * Sets the handler for HTTP requests made to the executing resource.
     *
     * Example request URL: `http://localhost:30120/http-test/ping` - this request will be sent to the `http-test` resource with the `/ping` path.
     *
     * The handler function assumes the following signature:
     *
     * ```ts
     * function HttpHandler(
     * request: {
     * address: string;
     * headers: Record<string, string>;
     * method: string;
     * path: string;
     * setDataHandler(handler: (data: string) => void): void;
     * setDataHandler(handler: (data: ArrayBuffer) => void, binary: 'binary'): void;
     * setCancelHandler(handler: () => void): void;
     * },
     * response: {
     * writeHead(code: number, headers?: Record<string, string | string[]>): void;
     * write(data: string): void;
     * send(data?: string): void;
     * }
     * ): void;
     * ```
     *
     * *   **request**: The request object.
     * *   **address**: The IP address of the request sender.
     * *   **path**: The path to where the request was sent.
     * *   **headers**: The headers sent with the request.
     * *   **method**: The request method.
     * *   **setDataHandler**: Sets the handler for when a data body is passed with the request. Additionally you can pass the `'binary'` argument to receive a `BufferArray` in JavaScript or `System.Byte[]` in C# (has no effect in Lua).
     * *   **setCancelHandler**: Sets the handler for when the request is cancelled.
     * *   **response**: An object to control the response.
     * *   **writeHead**: Sets the status code & headers of the response. Can be only called once and won't work if called after running other response functions.
     * *   **write**: Writes to the response body without sending it. Can be called multiple times.
     * *   **send**: Writes to the response body and then sends it along with the status code & headers, finishing the request.
     *
     * Hash: 0xF5C6330C
     */
    export function setHttpHandler(handler: Function): void {
        SetHttpHandler(handler);
    }

    /**
     * No comment provided
     *
     * Hash: 0xB7BA82DC
     */
    export function setMapName(mapName: string): void {
        SetMapName(mapName);
    }

    /**
     * Sets the entity lockdown mode for a specific routing bucket.
     *
     * Lockdown modes are:
     *
     * | Mode       | Meaning                                                    |
     * | ---------- | ---------------------------------------------------------- |
     * | `strict`   | No entities can be created by clients at all.              |
     * | `relaxed`  | Only script-owned entities created by clients are blocked. |
     * | `inactive` | Clients can create any entity they want.                   |
     *
     * Hash: 0xA0F2201F
     */
    export function setRoutingBucketEntityLockdownMode(bucketId: number, mode: string): void {
        SetRoutingBucketEntityLockdownMode(bucketId, mode);
    }

    /**
     * Sets whether or not the specified routing bucket has automatically-created population enabled.
     *
     * Hash: 0xCE51AC2C
     */
    export function setRoutingBucketPopulationEnabled(bucketId: number, mode: boolean): void {
        SetRoutingBucketPopulationEnabled(bucketId, mode);
    }

    /**
     * The backing function for TriggerClientEvent.
     *
     * Hash: 0x2F7A49E6
     */
    export function triggerClientEventInternal(eventName: string, eventTarget: string, eventPayload: string, payloadLength: number): void {
        TriggerClientEventInternal(eventName, eventTarget, eventPayload, payloadLength);
    }

    /**
     * The backing function for TriggerLatentClientEvent.
     *
     * Hash: 0x70B35890
     */
    export function triggerLatentClientEventInternal(eventName: string, eventTarget: string, eventPayload: string, payloadLength: number, bps: number): void {
        TriggerLatentClientEventInternal(eventName, eventTarget, eventPayload, payloadLength, bps);
    }

    /**
     * No comment provided
     *
     * Hash: 0x2E310ACD
     */
    export function verifyPasswordHash(password: string, hash: string): boolean {
        return VerifyPasswordHash(password, hash);
    }

    /**
     * Adds a listener for Console Variable changes.
     *
     * The function called expects to match the following signature:
     *
     * ```ts
     * function ConVarChangeListener(conVarName: string, reserved: any);
     * ```
     *
     * *   **conVarName**: The ConVar that changed.
     * *   **reserved**: Currently unused.
     *
     * Hash: 0xAB7F7241
     */
    export function addConvarChangeListener(conVarFilter: string, handler: Function): number {
        return AddConvarChangeListener(conVarFilter, handler);
    }

    /**
     * Adds a handler for changes to a state bag.
     *
     * The function called expects to match the following signature:
     *
     * ```ts
     * function StateBagChangeHandler(bagName: string, key: string, value: any, reserved: number, replicated: boolean);
     * ```
     *
     * *   **bagName**: The internal bag ID for the state bag which changed. This is usually `player:Source`, `entity:NetID`
     * or `localEntity:Handle`.
     * *   **key**: The changed key.
     * *   **value**: The new value stored at key. The old value is still stored in the state bag at the time this callback executes.
     * *   **reserved**: Currently unused.
     * *   **replicated**: Whether the set is meant to be replicated.
     *
     * At this time, the change handler can't opt to reject changes.
     *
     * If bagName refers to an entity, use [GET_ENTITY_FROM_STATE_BAG_NAME](#\_0x4BDF1867) to get the entity handle
     * If bagName refers to a player, use [GET_PLAYER_FROM_STATE_BAG_NAME](#\_0xA56135E0) to get the player handle
     *
     * Hash: 0x5BA35AAF
     */
    export function addStateBagChangeHandler(keyFilter: string, bagFilter: string, handler: Function): number {
        return AddStateBagChangeHandler(keyFilter, bagFilter, handler);
    }

    /**
     * Cancels the currently executing event.
     *
     * Hash: 0xFA29D35D
     */
    export function cancelEvent(): void {
        CancelEvent();
    }

    /**
     * No comment provided
     *
     * Hash: 0x1E86F206
     */
    export function deleteFunctionReference(referenceIdentity: string): void {
        DeleteFunctionReference(referenceIdentity);
    }

    /**
     * No comment provided
     *
     * Hash: 0xF4E2079D
     */
    export function duplicateFunctionReference(referenceIdentity: string): string {
        return DuplicateFunctionReference(referenceIdentity);
    }

    /**
     * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
     *
     * Hash: 0x561C060B
     */
    export function executeCommand(commandString: string): void {
        ExecuteCommand(commandString);
    }

    /**
     * An internal function for converting a stack trace object to a string.
     *
     * Hash: 0xD70C3BCA
     */
    export function formatStackTrace(traceData: number | Object): string {
        const _traceData = traceData instanceof Object ? traceData.handle() : traceData;
        return FormatStackTrace(_traceData);
    }

    /**
     * Can be used to get a console variable of type `char*`, for example a string.
     *
     * Hash: 0x6CCD2564
     */
    export function getConvar(varName: string, default_: string): string {
        return GetConvar(varName, default_);
    }

    /**
     * Can be used to get a console variable casted back to `bool`.
     *
     * Hash: 0x7E8EBFE5
     */
    export function getConvarBool(varName: string, defaultValue: boolean): boolean {
        return GetConvarBool(varName, defaultValue);
    }

    /**
     * This will have floating point inaccuracy.
     *
     * Hash: 0x9E666D
     */
    export function getConvarFloat(varName: string, defaultValue: number): number {
        return GetConvarFloat(varName, defaultValue);
    }

    /**
     * Can be used to get a console variable casted back to `int` (an integer value).
     *
     * Hash: 0x935C0AB2
     */
    export function getConvarInt(varName: string, default_: number): number {
        return GetConvarInt(varName, default_);
    }

    /**
     * Returns the internal build number of the current game being executed.
     *
     * Possible values:
     *
     * *   FiveM
     * *   1604
     * *   2060
     * *   2189
     * *   2372
     * *   2545
     * *   2612
     * *   2699
     * *   2802
     * *   2944
     * *   3095
     * *   3258
     * *   3323
     * *   3407
     * *   3570
     * *   RedM
     * *   1311
     * *   1355
     * *   1436
     * *   1491
     * *   LibertyM
     * *   43
     * *   FXServer
     * *   0
     *
     * Hash: 0x804B9F7B
     */
    export function getGameBuildNumber(): number {
        return GetGameBuildNumber();
    }

    /**
     * Returns the current game being executed.
     *
     * Possible values:
     *
     * | Return value | Meaning                        |
     * | ------------ | ------------------------------ |
     * | `fxserver`   | Server-side code ('Duplicity') |
     * | `fivem`      | FiveM for GTA V                |
     * | `libertym`   | LibertyM for GTA IV            |
     * | `redm`       | RedM for Red Dead Redemption 2 |
     *
     * Hash: 0xE8EAA18B
     */
    export function getGameName(): string {
        return GetGameName();
    }

    /**
     * Returns a list of entity handles (script GUID) for all entities in the specified pool - the data returned is an array as
     * follows:
     *
     * ```json
     * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
     * ```
     *
     * ### Supported pools
     *
     * *   `CPed`: Peds (including animals) and players.
     * *   `CObject`: Objects (props), doors, and projectiles.
     * *   `CNetObject`: Networked objects
     * *   `CVehicle`: Vehicles.
     * *   `CPickup`: Pickups.
     *
     * Hash: 0x2B9D4F50
     */
    export function getGamePool(poolName: string): number {
        return GetGamePool(poolName);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9F1C4383
     */
    export function getInstanceId(): number {
        return GetInstanceId();
    }

    /**
     * Returns all commands that are registered in the command system.
     * The data returned adheres to the following layout:
     *
     * ```
     * [
     * {
     * "name": "cmdlist",
     * "resource": "resource",
     * "arity" = -1,
     * },
     * {
     * "name": "command1"
     * "resource": "resource_2",
     * "arity" = -1,
     * }
     * ]
     * ```
     *
     * Hash: 0xD4BEF069
     */
    export function getRegisteredCommands(): number {
        return GetRegisteredCommands();
    }

    /**
     * No comment provided
     *
     * Hash: 0x78D864C7
     */
    export function getStateBagKeys(bagName: string): number {
        return GetStateBagKeys(bagName);
    }

    /**
     * Returns the value of a state bag key.
     *
     * Hash: 0x637F4C75
     */
    export function getStateBagValue(bagName: string, key: string): number {
        return GetStateBagValue(bagName, key);
    }

    /**
     * No comment provided
     *
     * Hash: 0x7EBB9929
     */
    export function isAceAllowed(_object: string): boolean {
        return IsAceAllowed(_object);
    }

    /**
     * Gets whether or not this is the CitizenFX server.
     *
     * Hash: 0xCF24C52E
     */
    export function isDuplicityVersion(): boolean {
        return IsDuplicityVersion();
    }

    /**
     * No comment provided
     *
     * Hash: 0x37CF52CE
     */
    export function isPrincipalAceAllowed(principal: string, _object: string): boolean {
        return IsPrincipalAceAllowed(principal, _object);
    }

    /**
     * Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). Or by entering them in the server console/through an RCON client (only works for server side registered commands). Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a `/`.
     *
     * Commands registered using this function can also be executed by resources, using the [`ExecuteCommand` native](#\_0x561C060B).
     *
     * The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).
     *
     * **Example result**:
     *
     * ![](https://i.imgur.com/TaCnG09.png)
     *
     * Hash: 0x5FA79B0F
     */
    export function registerCommand(commandName: string, handler: Function, restricted: boolean): void {
        RegisterCommand(commandName, handler, restricted);
    }

    /**
     * No comment provided
     *
     * Hash: 0xEAC49841
     */
    export function removeConvarChangeListener(cookie: number): void {
        RemoveConvarChangeListener(cookie);
    }

    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Removes a handler for changes to a state bag.
     *
     * Hash: 0xD36BE661
     */
    export function removeStateBagChangeHandler(cookie: number): void {
        RemoveStateBagChangeHandler(cookie);
    }

    /**
     * Internal function for setting a state bag value.
     *
     * Hash: 0x8D50E33A
     */
    export function setStateBagValue(bagName: string, keyName: string, valueData: string, valueLength: number, replicated: boolean): void {
        SetStateBagValue(bagName, keyName, valueData, valueLength, replicated);
    }

    /**
     * No comment provided
     *
     * Hash: 0x12A330
     */
    export function stateBagHasKey(bagName: string, key: string): boolean {
        return StateBagHasKey(bagName, key);
    }

    /**
     * The backing function for TriggerEvent.
     *
     * Hash: 0x91310870
     */
    export function triggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void {
        TriggerEventInternal(eventName, eventPayload, payloadLength);
    }

    /**
     * Returns whether or not the currently executing event was canceled.
     *
     * Hash: 0x58382A19
     */
    export function wasEventCanceled(): boolean {
        return WasEventCanceled();
    }

}


export namespace ped {
    /**
     * ```
     * Applies an Item from a PedDecorationCollection to a ped. These include tattoos and shirt decals.
     * collection - PedDecorationCollection filename hash
     * overlay - Item name hash
     * Example:
     * Entry inside "mpbeach_overlays.xml" -
     * <Item>
     * <uvPos x="0.500000" y="0.500000" />
     * <scale x="0.600000" y="0.500000" />
     * <rotation value="0.000000" />
     * <nameHash>FM_Hair_Fuzz</nameHash>
     * <txdHash>mp_hair_fuzz</txdHash>
     * <txtHash>mp_hair_fuzz</txtHash>
     * <zone>ZONE_HEAD</zone>
     * <type>TYPE_TATTOO</type>
     * <faction>FM</faction>
     * <garment>All</garment>
     * <gender>GENDER_DONTCARE</gender>
     * <award />
     * <awardLevel />
     * </Item>
     * Code:
     * `PED::_0x5F5D1665E352A839(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("mpbeach_overlays"), MISC::GET_HASH_KEY("fm_hair_fuzz"))`
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [ADD_PED_DECORATION_FROM_HASHES](?\_0x5F5D1665E352A839).</strong>
     *
     * Hash: 0x70559AC7
     */
    export function addDecorationFromHashes(ped: number | Ped, collection: number | string, overlay: number | string): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        if (typeof collection === 'string') collection = misc.getHashKey(collection)
        if (typeof overlay === 'string') overlay = misc.getHashKey(overlay)
        AddPedDecorationFromHashes(_ped, collection, overlay);
    }

    /**
     * CLEAR_PED_PROP
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_PROP](?\_0x0943E5B8E078E76E).</strong>
     *
     * Hash: 0x2D23D743
     */
    export function clearProp(ped: number | Ped, propId: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        ClearPedProp(_ped, propId);
    }

    /**
     * CLEAR_PED_SECONDARY_TASK
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_SECONDARY_TASK](?\_0x176CECF6F920D707).</strong>
     *
     * Hash: 0xA635F451
     */
    export function clearSecondaryTask(ped: number | Ped): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        ClearPedSecondaryTask(_ped);
    }

    /**
     * Creates a ped (biped character, pedestrian, actor) with the specified model at the specified position and heading.
     * This ped will initially be owned by the creating script as a mission entity, and the model should be loaded already
     * (e.g. using REQUEST_MODEL).
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CREATE_PED](?\_0xD49F9B0955C367DE).</strong>
     *
     * Hash: 0x389EF71
     */
    export function create(pedType: number, modelHash: number | string, pos: Vector3, heading: number, isNetwork: boolean, bScriptHostPed: boolean): number {
        if (typeof modelHash === 'string') modelHash = misc.getHashKey(modelHash)
        return CreatePed(pedType, modelHash, pos.x, pos.y, pos.z, heading, isNetwork, bScriptHostPed);
    }

    /**
     * CREATE_PED_INSIDE_VEHICLE
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CREATE_PED_INSIDE_VEHICLE](?\_0x7DD959874C1FD534).</strong>
     *
     * Hash: 0x3000F092
     */
    export function createInsideVehicle(vehicle: number | Vehicle, pedType: number, modelHash: number | string, seat: number, isNetwork: boolean, bScriptHostPed: boolean): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        if (typeof modelHash === 'string') modelHash = misc.getHashKey(modelHash)
        return CreatePedInsideVehicle(_vehicle, pedType, modelHash, seat, isNetwork, bScriptHostPed);
    }

    /**
     * Returns all peds handles known to the server.
     * The data returned adheres to the following layout:
     *
     * ```
     * [127, 42, 13, 37]
     * ```
     *
     * Hash: 0xB8584FEF
     */
    export function getAlls(): number {
        return GetAllPeds();
    }

    /**
     * Returns the hash of weapon the Ped is currently using.
     *
     * Hash: 0xB0237302
     */
    export function getCurrentWeapon(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetCurrentPedWeapon(_ped);
    }

    /**
     * No comment provided
     *
     * Hash: 0xF7C6792D
     */
    export function getLastInVehicleSeat(vehicle: number | Vehicle, seatIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetLastPedInVehicleSeat(_vehicle, seatIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0x2CE311A7
     */
    export function getArmour(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedArmour(_ped);
    }

    /**
     * No comment provided
     *
     * Hash: 0x63458C27
     */
    export function getCauseOfDeath(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedCauseOfDeath(_ped);
    }

    /**
     * No comment provided
     *
     * Hash: 0xC182F76E
     */
    export function getDesiredHeading(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedDesiredHeading(_ped);
    }

    /**
     * No comment provided
     *
     * Hash: 0x388FDE9A
     */
    export function getInVehicleSeat(vehicle: number | Vehicle, seatIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetPedInVehicleSeat(_vehicle, seatIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0xA45B6C8D
     */
    export function getMaxHealth(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedMaxHealth(_ped);
    }

    /**
     * Gets the current relationship group hash of a ped.
     *
     * Hash: 0x354F283C
     */
    export function getRelationshipGroupHash(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedRelationshipGroupHash(_ped);
    }

    /**
     * Gets the script task command currently assigned to the ped.
     *
     * Hash: 0x84FE084
     */
    export function getScriptTaskCommand(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedScriptTaskCommand(_ped);
    }

    /**
     * Gets the stage of the peds scripted task.
     *
     * Hash: 0x44B0E5E2
     */
    export function getScriptTaskStage(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedScriptTaskStage(_ped);
    }

    /**
     * Get the last entity that damaged the ped. This native is used server side when using OneSync.
     *
     * Hash: 0x535DB43F
     */
    export function getSourceOfDamage(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedSourceOfDamage(_ped);
    }

    /**
     * Get the entity that killed the ped. This native is used server side when using OneSync.
     *
     * Hash: 0x84ADF9EB
     */
    export function getSourceOfDeath(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedSourceOfDeath(_ped);
    }

    /**
     * Gets the type of a ped's specific task given an index of the CPedTaskSpecificDataNode nodes.
     * A ped will typically have a task at index 0, if a ped has multiple tasks at once they will be in the order 0, 1, 2, etc.
     *
     * Hash: 0x7F4563D3
     */
    export function getSpecificTaskType(ped: number | Ped, index: number): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedSpecificTaskType(_ped, index);
    }

    /**
     * No comment provided
     *
     * Hash: 0x40321B83
     */
    export function getStealthMovement(ped: number | Ped): boolean {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedStealthMovement(_ped);
    }

    /**
     * An alias of [GET_CURRENT_PED_WEAPON](#\_0xB0237302).
     *
     * Note, the client-side [GET_SELECTED_PED_WEAPON](#\_0x0A6DB4965674D243) native returns the weapon selected via the HUD (weapon wheel). This data is not available to FXServer.
     *
     * Hash: 0xD240123E
     */
    export function getSelectedWeapon(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetSelectedPedWeapon(_ped);
    }

    /**
     * No comment provided
     *
     * Hash: 0x25865633
     */
    export function isHandcuffed(ped: number | Ped): boolean {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return IsPedHandcuffed(_ped);
    }

    /**
     * No comment provided
     *
     * Hash: 0xC833BBE1
     */
    export function isRagdoll(ped: number | Ped): boolean {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return IsPedRagdoll(_ped);
    }

    /**
     * No comment provided
     *
     * Hash: 0xEFEED13C
     */
    export function isStrafing(ped: number | Ped): boolean {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return IsPedStrafing(_ped);
    }

    /**
     * No comment provided
     *
     * Hash: 0x5AE7EDA2
     */
    export function isUsingActionMode(ped: number | Ped): boolean {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return IsPedUsingActionMode(_ped);
    }

    /**
     * SET_CURRENT_PED_WEAPON
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_CURRENT_PED_WEAPON](?\_0xADF692B254977C0C).</strong>
     *
     * Hash: 0xB8278882
     */
    export function setCurrentWeapon(ped: number | Ped, weaponHash: number | string, bForceInHand: boolean): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        if (typeof weaponHash === 'string') weaponHash = misc.getHashKey(weaponHash)
        SetCurrentPedWeapon(_ped, weaponHash, bForceInHand);
    }

    /**
     * ```
     * NativeDB Added Parameter 4: BOOL p3
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_AMMO](?\_0x14E56BC5B5DB6A19).</strong>
     *
     * Hash: 0xBF90DF1A
     */
    export function setAmmo(ped: number | Ped, weaponHash: number | string, ammo: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        if (typeof weaponHash === 'string') weaponHash = misc.getHashKey(weaponHash)
        SetPedAmmo(_ped, weaponHash, ammo);
    }

    /**
     * ```
     * Sets the armor of the specified ped.
     * ped: The Ped to set the armor of.
     * amount: A value between 0 and 100 indicating the value to set the Ped's armor to.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_ARMOUR](?\_0xCEA04D83135264CC).</strong>
     *
     * Hash: 0x4E3A0CC4
     */
    export function setArmour(ped: number | Ped, amount: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedArmour(_ped, amount);
    }

    /**
     * SET_PED_CAN_RAGDOLL
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_CAN_RAGDOLL](?\_0xB128377056A54E2A).</strong>
     *
     * Hash: 0xCF1384C4
     */
    export function setCanRagdoll(ped: number | Ped, toggle: boolean): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedCanRagdoll(_ped, toggle);
    }

    /**
     * This native is used to set component variation on a ped. Components, drawables and textures IDs are related to the ped model.
     *
     * ### MP Freemode list of components
     *
     * **0**: Face
     * **1**: Mask
     * **2**: Hair
     * **3**: Torso
     * **4**: Leg
     * **5**: Parachute / bag
     * **6**: Shoes
     * **7**: Accessory
     * **8**: Undershirt
     * **9**: Kevlar
     * **10**: Badge
     * **11**: Torso 2
     * List of Component IDs
     *
     * ```cpp
     * // Components
     * enum ePedVarComp
     * {
     * PV_COMP_INVALID = 0xFFFFFFFF,
     * PV_COMP_HEAD = 0, // "HEAD"
     * PV_COMP_BERD = 1, // "BEARD"
     * PV_COMP_HAIR = 2, // "HAIR"
     * PV_COMP_UPPR = 3, // "UPPER"
     * PV_COMP_LOWR = 4, // "LOWER"
     * PV_COMP_HAND = 5, // "HAND"
     * PV_COMP_FEET = 6, // "FEET"
     * PV_COMP_TEEF = 7, // "TEETH"
     * PV_COMP_ACCS = 8, // "ACCESSORIES"
     * PV_COMP_TASK = 9, // "TASK"
     * PV_COMP_DECL = 10, // "DECL"
     * PV_COMP_JBIB = 11, // "JBIB"
     * PV_COMP_MAX = 12,
     * };
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_COMPONENT_VARIATION](?\_0x262B14F48D29DE80).</strong>
     *
     * Hash: 0xD4F7B05C
     */
    export function setComponentVariation(ped: number | Ped, componentId: number, drawableId: number, textureId: number, paletteId: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedComponentVariation(_ped, componentId, drawableId, textureId, paletteId);
    }

    /**
     * ```cpp
     * // Potential names and hash collisions included as comments
     * enum ePedConfigFlags {
     * CPED_CONFIG_FLAG_CreatedByFactory = 0,
     * CPED_CONFIG_FLAG_CanBeShotInVehicle = 1,
     * CPED_CONFIG_FLAG_NoCriticalHits = 2,
     * CPED_CONFIG_FLAG_DrownsInWater = 3,
     * CPED_CONFIG_FLAG_DrownsInSinkingVehicle = 4,
     * CPED_CONFIG_FLAG_DiesInstantlyWhenSwimming = 5,
     * CPED_CONFIG_FLAG_HasBulletProofVest = 6,
     * CPED_CONFIG_FLAG_UpperBodyDamageAnimsOnly = 7,
     * CPED_CONFIG_FLAG_NeverFallOffSkis = 8,
     * CPED_CONFIG_FLAG_NeverEverTargetThisPed = 9,
     * CPED_CONFIG_FLAG_ThisPedIsATargetPriority = 10,
     * CPED_CONFIG_FLAG_TargettableWithNoLos = 11,
     * CPED_CONFIG_FLAG_DoesntListenToPlayerGroupCommands = 12,
     * CPED_CONFIG_FLAG_NeverLeavesGroup = 13,
     * CPED_CONFIG_FLAG_DoesntDropWeaponsWhenDead = 14,
     * CPED_CONFIG_FLAG_SetDelayedWeaponAsCurrent = 15,
     * CPED_CONFIG_FLAG_KeepTasksAfterCleanUp = 16,
     * CPED_CONFIG_FLAG_BlockNonTemporaryEvents = 17,
     * CPED_CONFIG_FLAG_HasAScriptBrain = 18,
     * CPED_CONFIG_FLAG_WaitingForScriptBrainToLoad = 19,
     * CPED_CONFIG_FLAG_AllowMedicsToReviveMe = 20,
     * CPED_CONFIG_FLAG_MoneyHasBeenGivenByScript = 21,
     * CPED_CONFIG_FLAG_NotAllowedToCrouch = 22,
     * CPED_CONFIG_FLAG_DeathPickupsPersist = 23,
     * CPED_CONFIG_FLAG_IgnoreSeenMelee = 24,
     * CPED_CONFIG_FLAG_ForceDieIfInjured = 25,
     * CPED_CONFIG_FLAG_DontDragMeOutCar = 26,
     * CPED_CONFIG_FLAG_StayInCarOnJack = 27,
     * CPED_CONFIG_FLAG_ForceDieInCar = 28,
     * CPED_CONFIG_FLAG_GetOutUndriveableVehicle = 29,
     * CPED_CONFIG_FLAG_WillRemainOnBoatAfterMissionEnds = 30,
     * CPED_CONFIG_FLAG_DontStoreAsPersistent = 31,
     * CPED_CONFIG_FLAG_WillFlyThroughWindscreen = 32,
     * CPED_CONFIG_FLAG_DieWhenRagdoll = 33,
     * CPED_CONFIG_FLAG_HasHelmet = 34,
     * CPED_CONFIG_FLAG_UseHelmet = 35,
     * CPED_CONFIG_FLAG_DontTakeOffHelmet = 36,
     * CPED_CONFIG_FLAG_HideInCutscene = 37,
     * CPED_CONFIG_FLAG_PedIsEnemyToPlayer = 38,
     * CPED_CONFIG_FLAG_DisableEvasiveDives = 39,
     * CPED_CONFIG_FLAG_PedGeneratesDeadBodyEvents = 40,
     * CPED_CONFIG_FLAG_DontAttackPlayerWithoutWantedLevel = 41,
     * CPED_CONFIG_FLAG_DontInfluenceWantedLevel = 42,
     * CPED_CONFIG_FLAG_DisablePlayerLockon = 43,
     * CPED_CONFIG_FLAG_DisableLockonToRandomPeds = 44,
     * CPED_CONFIG_FLAG_AllowLockonToFriendlyPlayers = 45,
     * _0xDB115BFA = 46,
     * CPED_CONFIG_FLAG_PedBeingDeleted = 47,
     * CPED_CONFIG_FLAG_BlockWeaponSwitching = 48,
     * CPED_CONFIG_FLAG_BlockGroupPedAimedAtResponse = 49,
     * CPED_CONFIG_FLAG_WillFollowLeaderAnyMeans = 50,
     * CPED_CONFIG_FLAG_BlippedByScript = 51,
     * CPED_CONFIG_FLAG_DrawRadarVisualField = 52,
     * CPED_CONFIG_FLAG_StopWeaponFiringOnImpact = 53,
     * CPED_CONFIG_FLAG_DissableAutoFallOffTests = 54,
     * CPED_CONFIG_FLAG_SteerAroundDeadBodies = 55,
     * CPED_CONFIG_FLAG_ConstrainToNavMesh = 56,
     * CPED_CONFIG_FLAG_SyncingAnimatedProps = 57,
     * CPED_CONFIG_FLAG_IsFiring = 58,
     * CPED_CONFIG_FLAG_WasFiring = 59,
     * CPED_CONFIG_FLAG_IsStanding = 60,
     * CPED_CONFIG_FLAG_WasStanding = 61,
     * CPED_CONFIG_FLAG_InVehicle = 62,
     * CPED_CONFIG_FLAG_OnMount = 63,
     * CPED_CONFIG_FLAG_AttachedToVehicle = 64,
     * CPED_CONFIG_FLAG_IsSwimming = 65,
     * CPED_CONFIG_FLAG_WasSwimming = 66,
     * CPED_CONFIG_FLAG_IsSkiing = 67,
     * CPED_CONFIG_FLAG_IsSitting = 68,
     * CPED_CONFIG_FLAG_KilledByStealth = 69,
     * CPED_CONFIG_FLAG_KilledByTakedown = 70,
     * CPED_CONFIG_FLAG_Knockedout = 71,
     * CPED_CONFIG_FLAG_ClearRadarBlipOnDeath = 72,
     * CPED_CONFIG_FLAG_JustGotOffTrain = 73,
     * CPED_CONFIG_FLAG_JustGotOnTrain = 74,
     * CPED_CONFIG_FLAG_UsingCoverPoint = 75,
     * CPED_CONFIG_FLAG_IsInTheAir = 76,
     * CPED_CONFIG_FLAG_KnockedUpIntoAir = 77,
     * CPED_CONFIG_FLAG_IsAimingGun = 78,
     * CPED_CONFIG_FLAG_HasJustLeftCar = 79,
     * CPED_CONFIG_FLAG_TargetWhenInjuredAllowed = 80,
     * CPED_CONFIG_FLAG_CurrLeftFootCollNM = 81,
     * CPED_CONFIG_FLAG_PrevLeftFootCollNM = 82,
     * CPED_CONFIG_FLAG_CurrRightFootCollNM = 83,
     * CPED_CONFIG_FLAG_PrevRightFootCollNM = 84,
     * CPED_CONFIG_FLAG_HasBeenBumpedInCar = 85,
     * CPED_CONFIG_FLAG_InWaterTaskQuitToClimbLadder = 86,
     * CPED_CONFIG_FLAG_NMTwoHandedWeaponBothHandsConstrained = 87,
     * CPED_CONFIG_FLAG_CreatedBloodPoolTimer = 88,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromAnyPedImpact = 89,
     * CPED_CONFIG_FLAG_GroupPedFailedToEnterCover = 90,
     * CPED_CONFIG_FLAG_AlreadyChattedOnPhone = 91,
     * CPED_CONFIG_FLAG_AlreadyReactedToPedOnRoof = 92,
     * CPED_CONFIG_FLAG_ForcePedLoadCover = 93,
     * CPED_CONFIG_FLAG_BlockCoweringInCover = 94,
     * CPED_CONFIG_FLAG_BlockPeekingInCover = 95,
     * CPED_CONFIG_FLAG_JustLeftCarNotCheckedForDoors = 96,
     * CPED_CONFIG_FLAG_VaultFromCover = 97,
     * CPED_CONFIG_FLAG_AutoConversationLookAts = 98,
     * CPED_CONFIG_FLAG_UsingCrouchedPedCapsule = 99,
     * CPED_CONFIG_FLAG_HasDeadPedBeenReported = 100,
     * CPED_CONFIG_FLAG_ForcedAim = 101,
     * CPED_CONFIG_FLAG_SteersAroundPeds = 102,
     * CPED_CONFIG_FLAG_SteersAroundObjects = 103,
     * CPED_CONFIG_FLAG_OpenDoorArmIK = 104,
     * CPED_CONFIG_FLAG_ForceReload = 105,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromVehicleImpact = 106,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromBulletImpact = 107,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromExplosions = 108,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromFire = 109,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromElectrocution = 110,
     * CPED_CONFIG_FLAG_IsBeingDraggedToSafety = 111,
     * CPED_CONFIG_FLAG_HasBeenDraggedToSafety = 112,
     * CPED_CONFIG_FLAG_KeepWeaponHolsteredUnlessFired = 113,
     * CPED_CONFIG_FLAG_ForceScriptControlledKnockout = 114,
     * CPED_CONFIG_FLAG_FallOutOfVehicleWhenKilled = 115,
     * CPED_CONFIG_FLAG_GetOutBurningVehicle = 116,
     * CPED_CONFIG_FLAG_BumpedByPlayer = 117,
     * CPED_CONFIG_FLAG_RunFromFiresAndExplosions = 118,
     * CPED_CONFIG_FLAG_TreatAsPlayerDuringTargeting = 119,
     * CPED_CONFIG_FLAG_IsHandCuffed = 120,
     * CPED_CONFIG_FLAG_IsAnkleCuffed = 121,
     * CPED_CONFIG_FLAG_DisableMelee = 122,
     * CPED_CONFIG_FLAG_DisableUnarmedDrivebys = 123,
     * CPED_CONFIG_FLAG_JustGetsPulledOutWhenElectrocuted = 124,
     * CPED_CONFIG_FLAG_UNUSED_REPLACE_ME = 125,
     * CPED_CONFIG_FLAG_WillNotHotwireLawEnforcementVehicle = 126,
     * CPED_CONFIG_FLAG_WillCommandeerRatherThanJack = 127,
     * CPED_CONFIG_FLAG_CanBeAgitated = 128,
     * CPED_CONFIG_FLAG_ForcePedToFaceLeftInCover = 129,
     * CPED_CONFIG_FLAG_ForcePedToFaceRightInCover = 130,
     * CPED_CONFIG_FLAG_BlockPedFromTurningInCover = 131,
     * CPED_CONFIG_FLAG_KeepRelationshipGroupAfterCleanUp = 132,
     * CPED_CONFIG_FLAG_ForcePedToBeDragged = 133,
     * CPED_CONFIG_FLAG_PreventPedFromReactingToBeingJacked = 134,
     * CPED_CONFIG_FLAG_IsScuba = 135,
     * CPED_CONFIG_FLAG_WillArrestRatherThanJack = 136,
     * CPED_CONFIG_FLAG_RemoveDeadExtraFarAway = 137,
     * CPED_CONFIG_FLAG_RidingTrain = 138,
     * CPED_CONFIG_FLAG_ArrestResult = 139,
     * CPED_CONFIG_FLAG_CanAttackFriendly = 140,
     * CPED_CONFIG_FLAG_WillJackAnyPlayer = 141,
     * CPED_CONFIG_FLAG_BumpedByPlayerVehicle = 142,
     * CPED_CONFIG_FLAG_DodgedPlayerVehicle = 143,
     * CPED_CONFIG_FLAG_WillJackWantedPlayersRatherThanStealCar = 144,
     * CPED_CONFIG_FLAG_NoCopWantedAggro = 145,
     * CPED_CONFIG_FLAG_DisableLadderClimbing = 146,
     * CPED_CONFIG_FLAG_StairsDetected = 147,
     * CPED_CONFIG_FLAG_SlopeDetected = 148,
     * CPED_CONFIG_FLAG_HelmetHasBeenShot = 149,
     * CPED_CONFIG_FLAG_CowerInsteadOfFlee = 150,
     * CPED_CONFIG_FLAG_CanActivateRagdollWhenVehicleUpsideDown = 151,
     * CPED_CONFIG_FLAG_AlwaysRespondToCriesForHelp = 152,
     * CPED_CONFIG_FLAG_DisableBloodPoolCreation = 153,
     * CPED_CONFIG_FLAG_ShouldFixIfNoCollision = 154,
     * CPED_CONFIG_FLAG_CanPerformArrest = 155,
     * CPED_CONFIG_FLAG_CanPerformUncuff = 156,
     * CPED_CONFIG_FLAG_CanBeArrested = 157,
     * CPED_CONFIG_FLAG_MoverConstrictedByOpposingCollisions = 158,
     * CPED_CONFIG_FLAG_PlayerPreferFrontSeatMP = 159,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromImpactObject = 160,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromMelee = 161,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromWaterJet = 162,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromDrowning = 163,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromFalling = 164,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromRubberBullet = 165,
     * CPED_CONFIG_FLAG_IsInjured = 166,
     * CPED_CONFIG_FLAG_DontEnterVehiclesInPlayersGroup = 167,
     * CPED_CONFIG_FLAG_SwimmingTasksRunning = 168,
     * CPED_CONFIG_FLAG_PreventAllMeleeTaunts = 169,
     * CPED_CONFIG_FLAG_ForceDirectEntry = 170,
     * CPED_CONFIG_FLAG_AlwaysSeeApproachingVehicles = 171,
     * CPED_CONFIG_FLAG_CanDiveAwayFromApproachingVehicles = 172,
     * CPED_CONFIG_FLAG_AllowPlayerToInterruptVehicleEntryExit = 173,
     * CPED_CONFIG_FLAG_OnlyAttackLawIfPlayerIsWanted = 174,
     * CPED_CONFIG_FLAG_PlayerInContactWithKinematicPed = 175,
     * CPED_CONFIG_FLAG_PlayerInContactWithSomethingOtherThanKinematicPed = 176,
     * CPED_CONFIG_FLAG_PedsJackingMeDontGetIn = 177,
     * CPED_CONFIG_FLAG_AdditionalRappellingPed = 178,
     * CPED_CONFIG_FLAG_PedIgnoresAnimInterruptEvents = 179,
     * CPED_CONFIG_FLAG_IsInCustody = 180,
     * CPED_CONFIG_FLAG_ForceStandardBumpReactionThresholds = 181,
     * CPED_CONFIG_FLAG_LawWillOnlyAttackIfPlayerIsWanted = 182,
     * CPED_CONFIG_FLAG_IsAgitated = 183,
     * CPED_CONFIG_FLAG_PreventAutoShuffleToDriversSeat = 184,
     * CPED_CONFIG_FLAG_UseKinematicModeWhenStationary = 185,
     * CPED_CONFIG_FLAG_EnableWeaponBlocking = 186,
     * CPED_CONFIG_FLAG_HasHurtStarted = 187,
     * CPED_CONFIG_FLAG_DisableHurt = 188,
     * CPED_CONFIG_FLAG_PlayerIsWeird = 189,
     * CPED_CONFIG_FLAG_PedHadPhoneConversation = 190,
     * CPED_CONFIG_FLAG_BeganCrossingRoad = 191,
     * CPED_CONFIG_FLAG_WarpIntoLeadersVehicle = 192,
     * CPED_CONFIG_FLAG_DoNothingWhenOnFootByDefault = 193,
     * CPED_CONFIG_FLAG_UsingScenario = 194,
     * CPED_CONFIG_FLAG_VisibleOnScreen = 195,
     * CPED_CONFIG_FLAG_DontCollideWithKinematic = 196,
     * CPED_CONFIG_FLAG_ActivateOnSwitchFromLowPhysicsLod = 197,
     * CPED_CONFIG_FLAG_DontActivateRagdollOnPedCollisionWhenDead = 198,
     * CPED_CONFIG_FLAG_DontActivateRagdollOnVehicleCollisionWhenDead = 199,
     * CPED_CONFIG_FLAG_HasBeenInArmedCombat = 200,
     * CPED_CONFIG_FLAG_UseDiminishingAmmoRate = 201,
     * CPED_CONFIG_FLAG_Avoidance_Ignore_All = 202,
     * CPED_CONFIG_FLAG_Avoidance_Ignored_by_All = 203,
     * CPED_CONFIG_FLAG_Avoidance_Ignore_Group1 = 204,
     * CPED_CONFIG_FLAG_Avoidance_Member_of_Group1 = 205,
     * CPED_CONFIG_FLAG_ForcedToUseSpecificGroupSeatIndex = 206,
     * CPED_CONFIG_FLAG_LowPhysicsLodMayPlaceOnNavMesh = 207,
     * CPED_CONFIG_FLAG_DisableExplosionReactions = 208,
     * CPED_CONFIG_FLAG_DodgedPlayer = 209,
     * CPED_CONFIG_FLAG_WaitingForPlayerControlInterrupt = 210,
     * CPED_CONFIG_FLAG_ForcedToStayInCover = 211,
     * CPED_CONFIG_FLAG_GeneratesSoundEvents = 212,
     * CPED_CONFIG_FLAG_ListensToSoundEvents = 213,
     * CPED_CONFIG_FLAG_AllowToBeTargetedInAVehicle = 214,
     * CPED_CONFIG_FLAG_WaitForDirectEntryPointToBeFreeWhenExiting = 215,
     * CPED_CONFIG_FLAG_OnlyRequireOnePressToExitVehicle = 216,
     * CPED_CONFIG_FLAG_ForceExitToSkyDive = 217,
     * CPED_CONFIG_FLAG_SteersAroundVehicles = 218,
     * CPED_CONFIG_FLAG_AllowPedInVehiclesOverrideTaskFlags = 219,
     * CPED_CONFIG_FLAG_DontEnterLeadersVehicle = 220,
     * CPED_CONFIG_FLAG_DisableExitToSkyDive = 221,
     * CPED_CONFIG_FLAG_ScriptHasDisabledCollision = 222,
     * CPED_CONFIG_FLAG_UseAmbientModelScaling = 223,
     * CPED_CONFIG_FLAG_DontWatchFirstOnNextHurryAway = 224,
     * CPED_CONFIG_FLAG_DisablePotentialToBeWalkedIntoResponse = 225,
     * CPED_CONFIG_FLAG_DisablePedAvoidance = 226,
     * CPED_CONFIG_FLAG_ForceRagdollUponDeath = 227,
     * CPED_CONFIG_FLAG_CanLosePropsOnDamage = 228,
     * CPED_CONFIG_FLAG_DisablePanicInVehicle = 229,
     * CPED_CONFIG_FLAG_AllowedToDetachTrailer = 230,
     * CPED_CONFIG_FLAG_HasShotBeenReactedToFromFront = 231,
     * CPED_CONFIG_FLAG_HasShotBeenReactedToFromBack = 232,
     * CPED_CONFIG_FLAG_HasShotBeenReactedToFromLeft = 233,
     * CPED_CONFIG_FLAG_HasShotBeenReactedToFromRight = 234,
     * CPED_CONFIG_FLAG_AllowBlockDeadPedRagdollActivation = 235,
     * CPED_CONFIG_FLAG_IsHoldingProp = 236,
     * CPED_CONFIG_FLAG_BlocksPathingWhenDead = 237,
     * CPED_CONFIG_FLAG_ForcePlayNormalScenarioExitOnNextScriptCommand = 238,
     * CPED_CONFIG_FLAG_ForcePlayImmediateScenarioExitOnNextScriptCommand = 239,
     * CPED_CONFIG_FLAG_ForceSkinCharacterCloth = 240,
     * CPED_CONFIG_FLAG_LeaveEngineOnWhenExitingVehicles = 241,
     * CPED_CONFIG_FLAG_PhoneDisableTextingAnimations = 242,
     * CPED_CONFIG_FLAG_PhoneDisableTalkingAnimations = 243,
     * CPED_CONFIG_FLAG_PhoneDisableCameraAnimations = 244,
     * CPED_CONFIG_FLAG_DisableBlindFiringInShotReactions = 245,
     * CPED_CONFIG_FLAG_AllowNearbyCoverUsage = 246,
     * CPED_CONFIG_FLAG_InStrafeTransition = 247,
     * CPED_CONFIG_FLAG_CanPlayInCarIdles = 248,
     * CPED_CONFIG_FLAG_CanAttackNonWantedPlayerAsLaw = 249,
     * CPED_CONFIG_FLAG_WillTakeDamageWhenVehicleCrashes = 250,
     * CPED_CONFIG_FLAG_AICanDrivePlayerAsRearPassenger = 251,
     * CPED_CONFIG_FLAG_PlayerCanJackFriendlyPlayers = 252,
     * CPED_CONFIG_FLAG_OnStairs = 253,
     * CPED_CONFIG_FLAG_SimulatingAiming = 254,
     * CPED_CONFIG_FLAG_AIDriverAllowFriendlyPassengerSeatEntry = 255,
     * CPED_CONFIG_FLAG_ParentCarIsBeingRemoved = 256,
     * CPED_CONFIG_FLAG_AllowMissionPedToUseInjuredMovement = 257,
     * CPED_CONFIG_FLAG_CanLoseHelmetOnDamage = 258,
     * CPED_CONFIG_FLAG_NeverDoScenarioExitProbeChecks = 259,
     * CPED_CONFIG_FLAG_SuppressLowLODRagdollSwitchWhenCorpseSettles = 260,
     * CPED_CONFIG_FLAG_PreventUsingLowerPrioritySeats = 261,
     * CPED_CONFIG_FLAG_JustLeftVehicleNeedsReset = 262,
     * CPED_CONFIG_FLAG_TeleportIfCantReachPlayer = 263,
     * CPED_CONFIG_FLAG_PedsInVehiclePositionNeedsReset = 264,
     * CPED_CONFIG_FLAG_PedsFullyInSeat = 265,
     * CPED_CONFIG_FLAG_AllowPlayerLockOnIfFriendly = 266,
     * CPED_CONFIG_FLAG_UseCameraHeadingForDesiredDirectionLockOnTest = 267,
     * CPED_CONFIG_FLAG_TeleportToLeaderVehicle = 268,
     * CPED_CONFIG_FLAG_Avoidance_Ignore_WeirdPedBuffer = 269,
     * CPED_CONFIG_FLAG_OnStairSlope = 270,
     * CPED_CONFIG_FLAG_HasPlayedNMGetup = 271,
     * CPED_CONFIG_FLAG_DontBlipCop = 272,
     * CPED_CONFIG_FLAG_SpawnedAtExtendedRangeScenario = 273,
     * CPED_CONFIG_FLAG_WalkAlongsideLeaderWhenClose = 274,
     * CPED_CONFIG_FLAG_KillWhenTrapped = 275,
     * CPED_CONFIG_FLAG_EdgeDetected = 276,
     * CPED_CONFIG_FLAG_AlwaysWakeUpPhysicsOfIntersectedPeds = 277,
     * CPED_CONFIG_FLAG_EquippedAmbientLoadOutWeapon = 278,
     * CPED_CONFIG_FLAG_AvoidTearGas = 279,
     * CPED_CONFIG_FLAG_StoppedSpeechUponFreezing = 280,
     * CPED_CONFIG_FLAG_DisableGoToWritheWhenInjured = 281,
     * CPED_CONFIG_FLAG_OnlyUseForcedSeatWhenEnteringHeliInGroup = 282,
     * CPED_CONFIG_FLAG_ThrownFromVehicleDueToExhaustion = 283,
     * CPED_CONFIG_FLAG_UpdateEnclosedSearchRegion = 284,
     * CPED_CONFIG_FLAG_DisableWeirdPedEvents = 285,
     * CPED_CONFIG_FLAG_ShouldChargeNow = 286,
     * CPED_CONFIG_FLAG_RagdollingOnBoat = 287,
     * CPED_CONFIG_FLAG_HasBrandishedWeapon = 288,
     * CPED_CONFIG_FLAG_AllowMinorReactionsAsMissionPed = 289,
     * CPED_CONFIG_FLAG_BlockDeadBodyShockingEventsWhenDead = 290,
     * CPED_CONFIG_FLAG_PedHasBeenSeen = 291,
     * CPED_CONFIG_FLAG_PedIsInReusePool = 292,
     * CPED_CONFIG_FLAG_PedWasReused = 293,
     * CPED_CONFIG_FLAG_DisableShockingEvents = 294,
     * CPED_CONFIG_FLAG_MovedUsingLowLodPhysicsSinceLastActive = 295,
     * CPED_CONFIG_FLAG_NeverReactToPedOnRoof = 296,
     * CPED_CONFIG_FLAG_ForcePlayFleeScenarioExitOnNextScriptCommand = 297,
     * CPED_CONFIG_FLAG_JustBumpedIntoVehicle = 298,
     * CPED_CONFIG_FLAG_DisableShockingDrivingOnPavementEvents = 299,
     * CPED_CONFIG_FLAG_ShouldThrowSmokeNow = 300,
     * CPED_CONFIG_FLAG_DisablePedConstraints = 301,
     * CPED_CONFIG_FLAG_ForceInitialPeekInCover = 302,
     * CPED_CONFIG_FLAG_CreatedByDispatch = 303,
     * CPED_CONFIG_FLAG_PointGunLeftHandSupporting = 304,
     * CPED_CONFIG_FLAG_DisableJumpingFromVehiclesAfterLeader = 305,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromPlayerPedImpact = 306,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromAiRagdollImpact = 307,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromPlayerRagdollImpact = 308,
     * CPED_CONFIG_FLAG_DisableQuadrupedSpring = 309,
     * CPED_CONFIG_FLAG_IsInCluster = 310,
     * CPED_CONFIG_FLAG_ShoutToGroupOnPlayerMelee = 311,
     * CPED_CONFIG_FLAG_IgnoredByAutoOpenDoors = 312,
     * CPED_CONFIG_FLAG_PreferInjuredGetup = 313,
     * CPED_CONFIG_FLAG_ForceIgnoreMeleeActiveCombatant = 314,
     * CPED_CONFIG_FLAG_CheckLoSForSoundEvents = 315,
     * CPED_CONFIG_FLAG_JackedAbandonedCar = 316,
     * CPED_CONFIG_FLAG_CanSayFollowedByPlayerAudio = 317,
     * CPED_CONFIG_FLAG_ActivateRagdollFromMinorPlayerContact = 318,
     * CPED_CONFIG_FLAG_HasPortablePickupAttached = 319,
     * CPED_CONFIG_FLAG_ForcePoseCharacterCloth = 320,
     * CPED_CONFIG_FLAG_HasClothCollisionBounds = 321,
     * CPED_CONFIG_FLAG_HasHighHeels = 322,
     * CPED_CONFIG_FLAG_TreatAsAmbientPedForDriverLockOn = 323,
     * CPED_CONFIG_FLAG_DontBehaveLikeLaw = 324,
     * CPED_CONFIG_FLAG_SpawnedAtScenario = 325,
     * CPED_CONFIG_FLAG_DisablePoliceInvestigatingBody = 326,
     * CPED_CONFIG_FLAG_DisableWritheShootFromGround = 327,
     * CPED_CONFIG_FLAG_LowerPriorityOfWarpSeats = 328,
     * CPED_CONFIG_FLAG_DisableTalkTo = 329,
     * CPED_CONFIG_FLAG_DontBlip = 330,
     * CPED_CONFIG_FLAG_IsSwitchingWeapon = 331,
     * CPED_CONFIG_FLAG_IgnoreLegIkRestrictions = 332,
     * CPED_CONFIG_FLAG_ScriptForceNoTimesliceIntelligenceUpdate = 333,
     * CPED_CONFIG_FLAG_JackedOutOfMyVehicle = 334,
     * CPED_CONFIG_FLAG_WentIntoCombatAfterBeingJacked = 335,
     * CPED_CONFIG_FLAG_DontActivateRagdollForVehicleGrab = 336,
     * CPED_CONFIG_FLAG_ForcePackageCharacterCloth = 337,
     * CPED_CONFIG_FLAG_DontRemoveWithValidOrder = 338,
     * CPED_CONFIG_FLAG_AllowTaskDoNothingTimeslicing = 339,
     * CPED_CONFIG_FLAG_ForcedToStayInCoverDueToPlayerSwitch = 340,
     * CPED_CONFIG_FLAG_ForceProneCharacterCloth = 341,
     * CPED_CONFIG_FLAG_NotAllowedToJackAnyPlayers = 342,
     * CPED_CONFIG_FLAG_InToStrafeTransition = 343,
     * CPED_CONFIG_FLAG_KilledByStandardMelee = 344,
     * CPED_CONFIG_FLAG_AlwaysLeaveTrainUponArrival = 345,
     * CPED_CONFIG_FLAG_ForcePlayDirectedNormalScenarioExitOnNextScriptCommand = 346,
     * CPED_CONFIG_FLAG_OnlyWritheFromWeaponDamage = 347,
     * CPED_CONFIG_FLAG_UseSloMoBloodVfx = 348,
     * CPED_CONFIG_FLAG_EquipJetpack = 349,
     * CPED_CONFIG_FLAG_PreventDraggedOutOfCarThreatResponse = 350,
     * CPED_CONFIG_FLAG_ScriptHasCompletelyDisabledCollision = 351,
     * CPED_CONFIG_FLAG_NeverDoScenarioNavChecks = 352,
     * CPED_CONFIG_FLAG_ForceSynchronousScenarioExitChecking = 353,
     * CPED_CONFIG_FLAG_ThrowingGrenadeWhileAiming = 354,
     * CPED_CONFIG_FLAG_HeadbobToRadioEnabled = 355,
     * CPED_CONFIG_FLAG_ForceDeepSurfaceCheck = 356,
     * CPED_CONFIG_FLAG_DisableDeepSurfaceAnims = 357,
     * CPED_CONFIG_FLAG_DontBlipNotSynced = 358,
     * CPED_CONFIG_FLAG_IsDuckingInVehicle = 359,
     * CPED_CONFIG_FLAG_PreventAutoShuffleToTurretSeat = 360,
     * CPED_CONFIG_FLAG_DisableEventInteriorStatusCheck = 361,
     * CPED_CONFIG_FLAG_HasReserveParachute = 362,
     * CPED_CONFIG_FLAG_UseReserveParachute = 363,
     * CPED_CONFIG_FLAG_TreatDislikeAsHateWhenInCombat = 364,
     * CPED_CONFIG_FLAG_OnlyUpdateTargetWantedIfSeen = 365,
     * CPED_CONFIG_FLAG_AllowAutoShuffleToDriversSeat = 366,
     * CPED_CONFIG_FLAG_DontActivateRagdollFromSmokeGrenade = 367,
     * CPED_CONFIG_FLAG_LinkMBRToOwnerOnChain = 368,
     * CPED_CONFIG_FLAG_AmbientFriendBumpedByPlayer = 369,
     * CPED_CONFIG_FLAG_AmbientFriendBumpedByPlayerVehicle = 370,
     * CPED_CONFIG_FLAG_InFPSUnholsterTransition = 371,
     * CPED_CONFIG_FLAG_PreventReactingToSilencedCloneBullets = 372,
     * CPED_CONFIG_FLAG_DisableInjuredCryForHelpEvents = 373,
     * CPED_CONFIG_FLAG_NeverLeaveTrain = 374,
     * CPED_CONFIG_FLAG_DontDropJetpackOnDeath = 375,
     * CPED_CONFIG_FLAG_UseFPSUnholsterTransitionDuringCombatRoll = 376,
     * CPED_CONFIG_FLAG_ExitingFPSCombatRoll = 377,
     * CPED_CONFIG_FLAG_ScriptHasControlOfPlayer = 378,
     * CPED_CONFIG_FLAG_PlayFPSIdleFidgetsForProjectile = 379,
     * CPED_CONFIG_FLAG_DisableAutoEquipHelmetsInBikes = 380,
     * CPED_CONFIG_FLAG_DisableAutoEquipHelmetsInAircraft = 381,
     * CPED_CONFIG_FLAG_WasPlayingFPSGetup = 382,
     * CPED_CONFIG_FLAG_WasPlayingFPSMeleeActionResult = 383,
     * CPED_CONFIG_FLAG_PreferNoPriorityRemoval = 384,
     * CPED_CONFIG_FLAG_FPSFidgetsAbortedOnFire = 385,
     * CPED_CONFIG_FLAG_ForceFPSIKWithUpperBodyAnim = 386,
     * CPED_CONFIG_FLAG_SwitchingCharactersInFirstPerson = 387,
     * CPED_CONFIG_FLAG_IsClimbingLadder = 388,
     * CPED_CONFIG_FLAG_HasBareFeet = 389,
     * CPED_CONFIG_FLAG_UNUSED_REPLACE_ME_2 = 390,
     * CPED_CONFIG_FLAG_GoOnWithoutVehicleIfItIsUnableToGetBackToRoad = 391,
     * CPED_CONFIG_FLAG_BlockDroppingHealthSnacksOnDeath = 392,
     * CPED_CONFIG_FLAG_ResetLastVehicleOnVehicleExit = 393,
     * CPED_CONFIG_FLAG_ForceThreatResponseToNonFriendToFriendMeleeActions = 394,
     * CPED_CONFIG_FLAG_DontRespondToRandomPedsDamage = 395,
     * CPED_CONFIG_FLAG_AllowContinuousThreatResponseWantedLevelUpdates = 396,
     * CPED_CONFIG_FLAG_KeepTargetLossResponseOnCleanup = 397,
     * CPED_CONFIG_FLAG_PlayersDontDragMeOutOfCar = 398,
     * CPED_CONFIG_FLAG_BroadcastRepondedToThreatWhenGoingToPointShooting = 399,
     * CPED_CONFIG_FLAG_IgnorePedTypeForIsFriendlyWith = 400,
     * CPED_CONFIG_FLAG_TreatNonFriendlyAsHateWhenInCombat = 401,
     * CPED_CONFIG_FLAG_DontLeaveVehicleIfLeaderNotInVehicle = 402,
     * CPED_CONFIG_FLAG_ChangeFromPermanentToAmbientPopTypeOnMigration = 403,
     * CPED_CONFIG_FLAG_AllowMeleeReactionIfMeleeProofIsOn = 404,
     * CPED_CONFIG_FLAG_UsingLowriderLeans = 405,
     * CPED_CONFIG_FLAG_UsingAlternateLowriderLeans = 406,
     * CPED_CONFIG_FLAG_UseNormalExplosionDamageWhenBlownUpInVehicle = 407,
     * CPED_CONFIG_FLAG_DisableHomingMissileLockForVehiclePedInside = 408,
     * CPED_CONFIG_FLAG_DisableTakeOffScubaGear = 409,
     * CPED_CONFIG_FLAG_IgnoreMeleeFistWeaponDamageMult = 410,
     * CPED_CONFIG_FLAG_LawPedsCanFleeFromNonWantedPlayer = 411,
     * CPED_CONFIG_FLAG_ForceBlipSecurityPedsIfPlayerIsWanted = 412,
     * CPED_CONFIG_FLAG_IsHolsteringWeapon = 413,
     * CPED_CONFIG_FLAG_UseGoToPointForScenarioNavigation = 414,
     * CPED_CONFIG_FLAG_DontClearLocalPassengersWantedLevel = 415,
     * CPED_CONFIG_FLAG_BlockAutoSwapOnWeaponPickups = 416,
     * CPED_CONFIG_FLAG_ThisPedIsATargetPriorityForAI = 417,
     * CPED_CONFIG_FLAG_IsSwitchingHelmetVisor = 418,
     * CPED_CONFIG_FLAG_ForceHelmetVisorSwitch = 419,
     * CPED_CONFIG_FLAG_IsPerformingVehicleMelee = 420,
     * CPED_CONFIG_FLAG_UseOverrideFootstepPtFx = 421,
     * CPED_CONFIG_FLAG_DisableVehicleCombat = 422,
     * CPED_CONFIG_FLAG_TreatAsFriendlyForTargetingAndDamage = 423,
     * CPED_CONFIG_FLAG_AllowBikeAlternateAnimations = 424,
     * CPED_CONFIG_FLAG_TreatAsFriendlyForTargetingAndDamageNonSynced = 425,
     * CPED_CONFIG_FLAG_UseLockpickVehicleEntryAnimations = 426,
     * CPED_CONFIG_FLAG_IgnoreInteriorCheckForSprinting = 427,
     * CPED_CONFIG_FLAG_SwatHeliSpawnWithinLastSpottedLocation = 428,
     * CPED_CONFIG_FLAG_DisableStartEngine = 429,
     * CPED_CONFIG_FLAG_IgnoreBeingOnFire = 430,
     * CPED_CONFIG_FLAG_DisableTurretOrRearSeatPreference = 431,
     * CPED_CONFIG_FLAG_DisableWantedHelicopterSpawning = 432,
     * CPED_CONFIG_FLAG_UseTargetPerceptionForCreatingAimedAtEvents = 433,
     * CPED_CONFIG_FLAG_DisableHomingMissileLockon = 434,
     * CPED_CONFIG_FLAG_ForceIgnoreMaxMeleeActiveSupportCombatants = 435,
     * CPED_CONFIG_FLAG_StayInDefensiveAreaWhenInVehicle = 436,
     * CPED_CONFIG_FLAG_DontShoutTargetPosition = 437,
     * CPED_CONFIG_FLAG_DisableHelmetArmor = 438,
     * CPED_CONFIG_FLAG_CreatedByConcealedPlayer = 439,
     * CPED_CONFIG_FLAG_PermanentlyDisablePotentialToBeWalkedIntoResponse = 440,
     * CPED_CONFIG_FLAG_PreventVehExitDueToInvalidWeapon = 441,
     * CPED_CONFIG_FLAG_IgnoreNetSessionFriendlyFireCheckForAllowDamage = 442,
     * CPED_CONFIG_FLAG_DontLeaveCombatIfTargetPlayerIsAttackedByPolice = 443,
     * CPED_CONFIG_FLAG_CheckLockedBeforeWarp = 444,
     * CPED_CONFIG_FLAG_DontShuffleInVehicleToMakeRoom = 445,
     * CPED_CONFIG_FLAG_GiveWeaponOnGetup = 446,
     * CPED_CONFIG_FLAG_DontHitVehicleWithProjectiles = 447,
     * CPED_CONFIG_FLAG_DisableForcedEntryForOpenVehiclesFromTryLockedDoor = 448,
     * CPED_CONFIG_FLAG_FiresDummyRockets = 449,
     * CPED_CONFIG_FLAG_PedIsArresting = 450,
     * CPED_CONFIG_FLAG_IsDecoyPed = 451,
     * CPED_CONFIG_FLAG_HasEstablishedDecoy = 452,
     * CPED_CONFIG_FLAG_BlockDispatchedHelicoptersFromLanding = 453,
     * CPED_CONFIG_FLAG_DontCryForHelpOnStun = 454,
     * CPED_CONFIG_FLAG_HitByTranqWeapon = 455,
     * CPED_CONFIG_FLAG_CanBeIncapacitated = 456,
     * CPED_CONFIG_FLAG_ForcedAimFromArrest = 457,
     * CPED_CONFIG_FLAG_DontChangeTargetFromMelee = 458,
     * _0x4376ABF2 = 459,
     * CPED_CONFIG_FLAG_RagdollFloatsIndefinitely = 460,
     * CPED_CONFIG_FLAG_BlockElectricWeaponDamage = 461,
     * _0x262A3B8E = 462,
     * _0x1AA79A25 = 463,
     * }
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_CONFIG_FLAG](?\_0x1913FE4CBF41C463).</strong>
     *
     * Hash: 0x9CFBE10D
     */
    export function setConfigFlag(ped: number | Ped, flagId: number, value: boolean): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedConfigFlag(_ped, flagId, value);
    }

    /**
     * ```
     * Sets Ped Default Clothes
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_DEFAULT_COMPONENT_VARIATION](?\_0x45EEE61580806D63).</strong>
     *
     * Hash: 0xC866A984
     */
    export function setDefaultComponentVariation(ped: number | Ped): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedDefaultComponentVariation(_ped);
    }

    /**
     * Sets the tint index for the hair on the specified ped.
     *
     * ```
     * NativeDB Introduced: v323
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_HAIR_TINT](?\_0x4CFFC65454C93A49).</strong>
     *
     * Hash: 0xA23FE32C
     */
    export function setHairTint(ped: number | Ped, colorID: number, highlightColorID: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedHairTint(_ped, colorID, highlightColorID);
    }

    /**
     * For more info please refer to [this](https://gtaforums.com/topic/858970-all-gtao-face-ids-pedset-ped-head-blend-data-explained) topic.
     * <strong>Other information:</strong>
     * IDs start at zero and go Male Non-DLC, Female Non-DLC, Male DLC, and Female DLC.</br>
     * This native function is often called prior to calling natives such as:
     *
     * *   [`SetPedHairColor`](#\_0xA23FE32C)
     * *   [`SetPedHeadOverlayColor`](#\_0x78935A27)
     * *   [`SetPedHeadOverlay`](#\_0xD28DBA90)
     * *   [`SetPedFaceFeature`](#\_0x6C8D4458)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_HEAD_BLEND_DATA](?\_0x9414E18B9434C2FE).</strong>
     *
     * Hash: 0x60746B88
     */
    export function setHeadBlendData(ped: number | Ped, shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedHeadBlendData(_ped, shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent);
    }

    /**
     * ```
     * OverlayID ranges from 0 to 12, index from 0 to _GET_NUM_OVERLAY_VALUES(overlayID)-1, and opacity from 0.0 to 1.0.
     * overlayID       Part                  Index, to disable
     * 0               Blemishes             0 - 23, 255
     * 1               Facial Hair           0 - 28, 255
     * 2               Eyebrows              0 - 33, 255
     * 3               Ageing                0 - 14, 255
     * 4               Makeup                0 - 74, 255
     * 5               Blush                 0 - 6, 255
     * 6               Complexion            0 - 11, 255
     * 7               Sun Damage            0 - 10, 255
     * 8               Lipstick              0 - 9, 255
     * 9               Moles/Freckles        0 - 17, 255
     * 10              Chest Hair            0 - 16, 255
     * 11              Body Blemishes        0 - 11, 255
     * 12              Add Body Blemishes    0 - 1, 255
     * ```
     *
     * <strong>Note:</strong>
     * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_HEAD_OVERLAY](?\_0x48F44967FA05CC1E).</strong>
     *
     * Hash: 0xD28DBA90
     */
    export function setHeadOverlay(ped: number | Ped, overlayID: number, index: number, opacity: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedHeadOverlay(_ped, overlayID, index, opacity);
    }

    /**
     * SET_PED_INTO_VEHICLE
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_INTO_VEHICLE](?\_0xF75B0D629E1C063D).</strong>
     *
     * Hash: 0x7500C79
     */
    export function setIntoVehicle(ped: number | Ped, vehicle: number | Vehicle, seatIndex: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetPedIntoVehicle(_ped, _vehicle, seatIndex);
    }

    /**
     * This native is used to set prop variation on a ped. Components, drawables and textures IDs are related to the ped model.
     *
     * ### MP Freemode list of props
     *
     * **0**: Hats
     * **1**: Glasses
     * **2**: Ears
     * **6**: Watches
     * **7**: Bracelets
     * List of Prop IDs
     *
     * ```cpp
     * enum eAnchorPoints
     * {
     * ANCHOR_HEAD = 0, // "p_head"
     * ANCHOR_EYES = 1, // "p_eyes"
     * ANCHOR_EARS = 2, // "p_ears"
     * ANCHOR_MOUTH = 3, // "p_mouth"
     * ANCHOR_LEFT_HAND = 4, // "p_lhand"
     * ANCHOR_RIGHT_HAND = 5, // "p_rhand"
     * ANCHOR_LEFT_WRIST = 6, // "p_lwrist"
     * ANCHOR_RIGHT_WRIST = 7, // "p_rwrist"
     * ANCHOR_HIP = 8, // "p_lhip"
     * ANCHOR_LEFT_FOOT = 9, // "p_lfoot"
     * ANCHOR_RIGHT_FOOT = 10, // "p_rfoot"
     * ANCHOR_PH_L_HAND = 11, // "ph_lhand"
     * ANCHOR_PH_R_HAND = 12, // "ph_rhand"
     * NUM_ANCHORS = 13,
     * };
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_PROP_INDEX](?\_0x93376B65A266EB5F).</strong>
     *
     * Hash: 0x829F2E2
     */
    export function setPropIndex(ped: number | Ped, componentId: number, drawableId: number, textureId: number, attach: boolean): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedPropIndex(_ped, componentId, drawableId, textureId, attach);
    }

    /**
     * ```
     * p1 is always 0 in R* scripts; and a quick disassembly seems to indicate that p1 is unused.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RANDOM_COMPONENT_VARIATION](?\_0xC8A9481A01E63C28).</strong>
     *
     * Hash: 0x4111BA46
     */
    export function setRandomComponentVariation(ped: number | Ped): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedRandomComponentVariation(_ped, 0);
    }

    /**
     * SET_PED_RANDOM_PROPS
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RANDOM_PROPS](?\_0xC44AA05345C992C6).</strong>
     *
     * Hash: 0xE3318E0E
     */
    export function setRandomProps(ped: number | Ped): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedRandomProps(_ped);
    }

    /**
     * `PED::SET_PED_RESET_FLAG(PLAYER::PLAYER_PED_ID(), 240, 1);`
     * Known values:
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RESET_FLAG](?\_0xC1E8A365BF3B29F2).</strong>
     *
     * Hash: 0xCFF6FF66
     */
    export function setResetFlag(ped: number | Ped, flagId: number, doReset: boolean): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedResetFlag(_ped, flagId, doReset);
    }

    /**
     * p4/p5: Unusued in TU27
     *
     * ### Ragdoll Types
     *
     * **0**: CTaskNMRelax
     * **1**: CTaskNMScriptControl: Hardcoded not to work in networked environments.
     * **Else**: CTaskNMBalance
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_TO_RAGDOLL](?\_0xAE99FB955581844A).</strong>
     *
     * Hash: 0x83CB5052
     */
    export function setToRagdoll(ped: number | Ped, minTime: number, maxTime: number, ragdollType: number, bAbortIfInjured: boolean, bAbortIfDead: boolean, bForceScriptControl: boolean): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedToRagdoll(_ped, minTime, maxTime, ragdollType, bAbortIfInjured, bAbortIfDead, bForceScriptControl);
    }

    /**
     * ```cpp
     * enum eNMFallType {
     * TYPE_FROM_HIGH = 0,
     * TYPE_OVER_WALL = 1,
     * TYPE_DOWN_STAIRS = 2,
     * TYPE_DIE_TYPES = 3,
     * TYPE_DIE_FROM_HIGH = 4,
     * TYPE_DIE_OVER_WALL = 5,
     * TYPE_DIE_DOWN_STAIRS = 6
     * }
     * ```
     *
     * ```
     * Return variable is never used in R*'s scripts.
     * Not sure what p2 does. It seems like it would be a time judging by it's usage in R*'s scripts, but didn't seem to affect anything in my testings.
     * x, y, and z are coordinates, most likely to where the ped will fall.
     * p7 is probably the force of the fall, but untested, so I left the variable name the same.
     * p8 to p13 are always 0f in R*'s scripts.
     * (Simplified) Example of the usage of the function from R*'s scripts:
     * `ped::set_ped_to_ragdoll_with_fall(ped, 1500, 2000, 1, -entity::get_entity_forward_vector(ped), 1f, 0f, 0f, 0f, 0f, 0f, 0f);`
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_TO_RAGDOLL_WITH_FALL](?\_0xD76632D99E4966C8).</strong>
     *
     * Hash: 0xFA12E286
     */
    export function setToRagdollWithFall(ped: number | Ped, minTime: number, maxTime: number, nFallType: number, dirX: number, dirY: number, dirZ: number, fGroundHeight: number, grab1X: number, grab1Y: number, grab1Z: number, grab2X: number, grab2Y: number, grab2Z: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedToRagdollWithFall(_ped, minTime, maxTime, nFallType, dirX, dirY, dirZ, fGroundHeight, grab1X, grab1Y, grab1Z, grab2X, grab2Y, grab2Z);
    }

    /**
     * Used for freemode (online) characters.
     * Indices:
     *
     * 1.  black
     * 2.  very light blue/green
     * 3.  dark blue
     * 4.  brown
     * 5.  darker brown
     * 6.  light brown
     * 7.  blue
     * 8.  light blue
     * 9.  pink
     * 10. yellow
     * 11. purple
     * 12. black
     * 13. dark green
     * 14. light brown
     * 15. yellow/black pattern
     * 16. light colored spiral pattern
     * 17. shiny red
     * 18. shiny half blue/half red
     * 19. half black/half light blue
     * 20. white/red perimter
     * 21. green snake
     * 22. red snake
     * 23. dark blue snake
     * 24. dark yellow
     * 25. bright yellow
     * 26. all black
     * 27. red small pupil
     * 28. devil blue/black
     * 29. white small pupil
     * 30. glossed over
     *
     * <strong>This is the server-side RPC native equivalent of the client native [\_SET_PED_EYE_COLOR](?\_0x50B56988B170AFDF).</strong>
     *
     * Hash: 0xEC09DB1B
     */
    export function setEyeColor(ped: number | Ped, index: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedEyeColor(_ped, index);
    }

    /**
     * Sets the various freemode face features, e.g. nose length, chin shape.
     * <strong>Indexes (From 0 to 19):</strong>
     * Parentheses indicate morph scale/direction as in (-1.0 to 1.0)
     *
     * *   **0**: Nose Width (Thin/Wide)
     * *   **1**: Nose Peak (Up/Down)
     * *   **2**: Nose Length (Long/Short)
     * *   **3**: Nose Bone Curveness (Crooked/Curved)
     * *   **4**: Nose Tip (Up/Down)
     * *   **5**: Nose Bone Twist (Left/Right)
     * *   **6**: Eyebrow (Up/Down)
     * *   **7**: Eyebrow (In/Out)
     * *   **8**: Cheek Bones (Up/Down)
     * *   **9**: Cheek Sideways Bone Size (In/Out)
     * *   **10**: Cheek Bones Width (Puffed/Gaunt)
     * *   **11**: Eye Opening (Both) (Wide/Squinted)
     * *   **12**: Lip Thickness (Both) (Fat/Thin)
     * *   **13**: Jaw Bone Width (Narrow/Wide)
     * *   **14**: Jaw Bone Shape (Round/Square)
     * *   **15**: Chin Bone (Up/Down)
     * *   **16**: Chin Bone Length (In/Out or Backward/Forward)
     * *   **17**: Chin Bone Shape (Pointed/Square)
     * *   **18**: Chin Hole (Chin Bum)
     * *   **19**: Neck Thickness (Thin/Thick)
     * <strong>Note:</strong>
     * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [\_SET_PED_FACE_FEATURE](?\_0x71A5C1DBA060049E).</strong>
     *
     * Hash: 0x6C8D4458
     */
    export function setFaceFeature(ped: number | Ped, index: number, scale: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedFaceFeature(_ped, index, scale);
    }

    /**
     * ```
     * Used for freemode (online) characters.
     * Called after SET_PED_HEAD_OVERLAY().
     * ```
     *
     * <strong>Note:</strong>
     * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [\_SET_PED_HEAD_OVERLAY_COLOR](?\_0x497BF74A7B9CB952).</strong>
     *
     * Hash: 0x78935A27
     */
    export function setHeadOverlayColor(ped: number | Ped, overlayID: number, colorType: number, colorID: number, secondColorID: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedHeadOverlayColor(_ped, overlayID, colorType, colorID, secondColorID);
    }

}


export namespace player {
    /**
     * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
     *
     * Hash: 0x8689A825
     */
    export function getMeleeWeaponDamageModifier(playerId: number | string | Player): number {
        const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
        return GetPlayerMeleeWeaponDamageModifier(_playerId);
    }

    /**
     * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
     *
     * Hash: 0x2A3D7CDA
     */
    export function getWeaponDamageModifier(playerId: number | string | Player): number {
        const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
        return GetPlayerWeaponDamageModifier(_playerId);
    }

    /**
     * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
     *
     * Hash: 0xF1543251
     */
    export function getWeaponDefenseModifier(playerId: number | string | Player): number {
        const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
        return GetPlayerWeaponDefenseModifier(_playerId);
    }

    /**
     * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
     *
     * Hash: 0x986B65FF
     */
    export function getWeaponDefenseModifier2(playerId: number | string | Player): number {
        const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
        return GetPlayerWeaponDefenseModifier2(_playerId);
    }

    /**
     * Returns whether or not the specified player has enough information to start a commerce session for.
     *
     * Hash: 0x429461C3
     */
    export function canStartCommerceSession(playerSrc: string): boolean {
        return CanPlayerStartCommerceSession(playerSrc);
    }

    /**
     * ```
     * `This executes at the same as speed as PLAYER::SET_PLAYER_WANTED_LEVEL(player, 0, false);`
     * `PLAYER::GET_PLAYER_WANTED_LEVEL(player); executes in less than half the time. Which means that it's worth first checking if the wanted level needs to be cleared before clearing. However, this is mostly about good code practice and can important in other situations. The difference in time in this example is negligible.`
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PLAYER_WANTED_LEVEL](?\_0xB302540597885499).</strong>
     *
     * Hash: 0x54EA5BCC
     */
    export function clearWantedLevel(player: number | string | Player): void {
        const _player = player instanceof Player ? player.localId() : player;
        ClearPlayerWantedLevel(_player);
    }

    /**
     * Returns whether or not the player exists
     *
     * Hash: 0x12038599
     */
    export function doesExist(playerSrc: string): boolean {
        return DoesPlayerExist(playerSrc);
    }

    /**
     * Requests whether or not the player owns the specified SKU.
     *
     * Hash: 0x167ABA27
     */
    export function doesOwnSku(playerSrc: string, skuId: number): boolean {
        return DoesPlayerOwnSku(playerSrc, skuId);
    }

    /**
     * Requests whether or not the player owns the specified package.
     *
     * Hash: 0xDEF0480B
     */
    export function doesOwnSkuExt(playerSrc: string, skuId: number): boolean {
        return DoesPlayerOwnSkuExt(playerSrc, skuId);
    }

    /**
     * No comment provided
     *
     * Hash: 0xBA0613E1
     */
    export function drop(playerSrc: string, reason: string): void {
        DropPlayer(playerSrc, reason);
    }

    /**
     * No comment provided
     *
     * Hash: 0x62FC38D0
     */
    export function getAirDragMultiplierForsVehicle(playerSrc: string): number {
        return GetAirDragMultiplierForPlayersVehicle(playerSrc);
    }

    /**
     * No comment provided
     *
     * Hash: 0xFF7F66AB
     */
    export function getNumIdentifiers(playerSrc: string): number {
        return GetNumPlayerIdentifiers(playerSrc);
    }

    /**
     * No comment provided
     *
     * Hash: 0x63D13184
     */
    export function getNumIndices(): number {
        return GetNumPlayerIndices();
    }

    /**
     * No comment provided
     *
     * Hash: 0x619E4A3D
     */
    export function getNumTokens(playerSrc: string): number {
        return GetNumPlayerTokens(playerSrc);
    }

    /**
     * Gets the current camera rotation for a specified player. This native is used server side when using OneSync.
     *
     * Hash: 0x433C765D
     */
    export function getCameraRotation(playerSrc: string): Vector3 {
        return new Vector3(GetPlayerCameraRotation(playerSrc));
    }

    /**
     * No comment provided
     *
     * Hash: 0xFEE404F9
     */
    export function getEndpoint(playerSrc: string): string {
        return GetPlayerEndpoint(playerSrc);
    }

    /**
     * Gets the current fake wanted level for a specified player. This native is used server side when using OneSync.
     *
     * Hash: 0x98D244
     */
    export function getFakeWantedLevel(playerSrc: string): number {
        return GetPlayerFakeWantedLevel(playerSrc);
    }

    /**
     * Gets the focus position (i.e. the position of the active camera in the game world) of a player.
     *
     * Hash: 0x586F80FF
     */
    export function getFocusPos(playerSrc: string): Vector3 {
        return new Vector3(GetPlayerFocusPos(playerSrc));
    }

    /**
     * No comment provided
     *
     * Hash: 0xC8A9CE08
     */
    export function getFromIndex(index: number): string {
        return GetPlayerFromIndex(index);
    }

    /**
     * No comment provided
     *
     * Hash: 0xE52D9680
     */
    export function getGuid(playerSrc: string): string {
        return GetPlayerGuid(playerSrc);
    }

    /**
     * To get the number of identifiers, use [GET_NUM_PLAYER_IDENTIFIERS](#\_0xFF7F66AB)
     *
     * To get a specific type of identifier, use [GET_PLAYER_IDENTIFIER_BY_TYPE](#\_0xA61C8FC6)
     *
     * Hash: 0x7302DBCF
     */
    export function getIdentifier(playerSrc: string, identiferIndex: number): string {
        return GetPlayerIdentifier(playerSrc, identiferIndex);
    }

    /**
     * Get an identifier from a player by the type of the identifier.
     * Known [Identifiers](https://docs.fivem.net/docs/scripting-reference/runtimes/lua/functions/GetPlayerIdentifiers/#identifier-types)
     *
     * Hash: 0xA61C8FC6
     */
    export function getIdentifierByType(playerSrc: string, identifierType: string): string {
        return GetPlayerIdentifierByType(playerSrc, identifierType);
    }

    /**
     * No comment provided
     *
     * Hash: 0x680C90EE
     */
    export function getInvincible(playerSrc: string): boolean {
        return GetPlayerInvincible(playerSrc);
    }

    /**
     * No comment provided
     *
     * Hash: 0x427E8E6A
     */
    export function getLastMsg(playerSrc: string): number {
        return GetPlayerLastMsg(playerSrc);
    }

    /**
     * No comment provided
     *
     * Hash: 0x2A50657
     */
    export function getMaxArmour(playerSrc: string): number {
        return GetPlayerMaxArmour(playerSrc);
    }

    /**
     * No comment provided
     *
     * Hash: 0x8154E470
     */
    export function getMaxHealth(playerSrc: string): number {
        return GetPlayerMaxHealth(playerSrc);
    }

    /**
     * No comment provided
     *
     * Hash: 0x406B4B20
     */
    export function getName(playerSrc: string): string {
        return GetPlayerName(playerSrc);
    }

    /**
     * Used to get the player's Ped Entity ID when a valid `playerSrc` is passed.
     *
     * Hash: 0x6E31E993
     */
    export function getPed(playerSrc: string): number {
        return GetPlayerPed(playerSrc);
    }

    /**
     * ```cpp
     * const int ENET_PACKET_LOSS_SCALE = 65536;
     *
     * enum PeerStatistics
     * {
     * // PacketLoss will only update once every 10 seconds, use PacketLossEpoch if you want the time
     * // since the last time the packet loss was updated.
     *
     * // the amount of packet loss the player has, needs to be scaled with PACKET_LOSS_SCALE
     * PacketLoss = 0,
     * // The variance in the packet loss
     * PacketLossVariance = 1,
     * // The time since the last packet update in ms, relative to the peers connection time
     * PacketLossEpoch = 2,
     * // The mean amount of time it takes for a packet to get to the client (ping)
     * RoundTripTime = 3,
     * // The variance in the round trip time
     * RoundTripTimeVariance = 4,
     * // Despite their name, these are only updated once every 5 seconds, you can get the last time this was updated with PacketThrottleEpoch
     * // The last recorded round trip time of a packet
     * LastRoundTripTime = 5,
     * // The last round trip time variance
     * LastRoundTripTimeVariance = 6,
     * // The time since the last packet throttle update, relative to the peers connection time
     * PacketThrottleEpoch = 7,
     * };
     * ```
     *
     * These statistics only update once every 10 seconds.
     *
     * Hash: 0x9A928294
     */
    export function getPeerStatistics(playerSrc: string, peerStatistic: number): number {
        return GetPlayerPeerStatistics(playerSrc, peerStatistic);
    }

    /**
     * See [GET_PLAYER_PEER_STATISTICS](#\_0x9A928294) if you want more detailed information, like packet loss, and packet/rtt variance
     *
     * Hash: 0xFF1290D4
     */
    export function getPing(playerSrc: string): number {
        return GetPlayerPing(playerSrc);
    }

    /**
     * Gets the routing bucket for the specified player.
     *
     * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
     *
     * Hash: 0x52441C34
     */
    export function getRoutingBucket(playerSrc: string): number {
        return GetPlayerRoutingBucket(playerSrc);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9873E404
     */
    export function getTeam(playerSrc: string): number {
        return GetPlayerTeam(playerSrc);
    }

    /**
     * ```
     * Gets the amount of time player has spent evading the cops.
     * Counter starts and increments only when cops are chasing the player.
     * If the player is evading, the timer will pause.
     * ```
     *
     * Hash: 0x7ADE63E1
     */
    export function getTimeInPursuit(playerSrc: string, lastPursuit: boolean): number {
        return GetPlayerTimeInPursuit(playerSrc, lastPursuit);
    }

    /**
     * Gets the current time online for a specified player.
     *
     * Hash: 0x67D2E605
     */
    export function getTimeOnline(playerSrc: string): number {
        return GetPlayerTimeOnline(playerSrc);
    }

    /**
     * Gets a player's token. Tokens can be used to enhance banning logic, however are specific to a server.
     *
     * Hash: 0x54C06897
     */
    export function getToken(playerSrc: string, index: number): string {
        return GetPlayerToken(playerSrc, index);
    }

    /**
     * Gets the current known coordinates for the specified player from cops perspective. This native is used server side when using OneSync.
     *
     * Hash: 0x821F2D2C
     */
    export function getWantedCentrePosition(playerSrc: string): Vector3 {
        return new Vector3(GetPlayerWantedCentrePosition(playerSrc));
    }

    /**
     * ```
     * Returns given players wanted level server-side.
     * ```
     *
     * Hash: 0xBDCDD163
     */
    export function getWantedLevel(playerSrc: string): number {
        return GetPlayerWantedLevel(playerSrc);
    }

    /**
     * This native checks if the given ped is a player.
     *
     * Hash: 0x404794CA
     */
    export function isPedA(ped: number | Ped): boolean {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return IsPedAPlayer(_ped);
    }

    /**
     * No comment provided
     *
     * Hash: 0xDEDAE23D
     */
    export function isAceAllowed(playerSrc: string, _object: string): boolean {
        return IsPlayerAceAllowed(playerSrc, _object);
    }

    /**
     * Requests whether or not the commerce data for the specified player has loaded.
     *
     * Hash: 0xBEFE93F4
     */
    export function isCommerceInfoLoaded(playerSrc: string): boolean {
        return IsPlayerCommerceInfoLoaded(playerSrc);
    }

    /**
     * Requests whether or not the commerce data for the specified player has loaded from Tebex.
     *
     * Hash: 0x1D14F4FE
     */
    export function isCommerceInfoLoadedExt(playerSrc: string): boolean {
        return IsPlayerCommerceInfoLoadedExt(playerSrc);
    }

    /**
     * ```
     * This will return true if the player is evading wanted level, meaning that the wanted level stars are blink.
     * Otherwise will return false.
     *
     * If the player is not wanted, it simply returns false.
     * ```
     *
     * Hash: 0x89A3881A
     */
    export function isEvadingWantedLevel(playerSrc: string): boolean {
        return IsPlayerEvadingWantedLevel(playerSrc);
    }

    /**
     * No comment provided
     *
     * Hash: 0x1F14F2AC
     */
    export function isInFreeCamMode(playerSrc: string): boolean {
        return IsPlayerInFreeCamMode(playerSrc);
    }

    /**
     * No comment provided
     *
     * Hash: 0xC7D2C20C
     */
    export function isUsingSuperJump(playerSrc: string): boolean {
        return IsPlayerUsingSuperJump(playerSrc);
    }

    /**
     * Requests the commerce data for the specified player, including the owned SKUs. Use `IS_PLAYER_COMMERCE_INFO_LOADED` to check if it has loaded.
     *
     * Hash: 0xA8F63EAB
     */
    export function loadCommerceData(playerSrc: string): void {
        LoadPlayerCommerceData(playerSrc);
    }

    /**
     * Requests the commerce data from Tebex for the specified player, including the owned SKUs.
     *
     * Use [`IS_PLAYER_COMMERCE_INFO_LOADED_EXT`](#\_0x1D14F4FE) to check if it has loaded.
     *
     * This will not automatically update whenever a client purchases a package, if you want to fetch new purchases you will need to call this native again.
     *
     * This native will temporarily cache the players commerce data for 10 seconds, a call to this native after 10 seconds will re-fetch the players commerce data.
     *
     * Hash: 0x7995539E
     */
    export function loadCommerceDataExt(playerSrc: string): void {
        LoadPlayerCommerceDataExt(playerSrc);
    }

    /**
     * Requests the specified player to buy the passed SKU. This'll pop up a prompt on the client, which upon acceptance
     * will open the browser prompting further purchase details.
     *
     * Hash: 0x96F93CCE
     */
    export function requestCommerceSession(playerSrc: string, skuId: number): void {
        RequestPlayerCommerceSession(playerSrc, skuId);
    }

    /**
     * ```
     * Flags:
     * SPC_AMBIENT_SCRIPT = (1 << 1),
     * SPC_CLEAR_TASKS = (1 << 2),
     * SPC_REMOVE_FIRES = (1 << 3),
     * SPC_REMOVE_EXPLOSIONS = (1 << 4),
     * SPC_REMOVE_PROJECTILES = (1 << 5),
     * SPC_DEACTIVATE_GADGETS = (1 << 6),
     * SPC_REENABLE_CONTROL_ON_DEATH = (1 << 7),
     * SPC_LEAVE_CAMERA_CONTROL_ON = (1 << 8),
     * SPC_ALLOW_PLAYER_DAMAGE = (1 << 9),
     * SPC_DONT_STOP_OTHER_CARS_AROUND_PLAYER = (1 << 10),
     * SPC_PREVENT_EVERYBODY_BACKOFF = (1 << 11),
     * SPC_ALLOW_PAD_SHAKE = (1 << 12)
     * See: https://alloc8or.re/gta5/doc/enums/eSetPlayerControlFlag.txt
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_CONTROL](?\_0x8D32347D6D4C40A2).</strong>
     *
     * Hash: 0xD17AFCD8
     */
    export function setControl(player: number | string | Player, bHasControl: boolean, flags: number): void {
        const _player = player instanceof Player ? player.localId() : player;
        SetPlayerControl(_player, bHasControl, flags);
    }

    /**
     * Sets the culling radius for the specified player.
     * Set to `0.0` to reset.
     *
     * **WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
     *
     * Hash: 0x8A2FBAD4
     */
    export function setCullingRadius(playerSrc: string, radius: number): void {
        SetPlayerCullingRadius(playerSrc, radius);
    }

    /**
     * Make the player impervious to all forms of damage.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_INVINCIBLE](?\_0x239528EACDC3E7DE).</strong>
     *
     * Hash: 0xDFB9A2A2
     */
    export function setInvincible(player: number | string | Player, bInvincible: boolean): void {
        const _player = player instanceof Player ? player.localId() : player;
        SetPlayerInvincible(_player, bInvincible);
    }

    /**
     * Set the model for a specific Player. Note that this will destroy the current Ped for the Player and create a new one, any reference to the old ped will be invalid after calling this.
     * As per usual, make sure to request the model first and wait until it has loaded.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_MODEL](?\_0x00A1CADD00108836).</strong>
     *
     * Hash: 0x774A4C54
     */
    export function setModel(player: number | string | Player, model: number | string): void {
        const _player = player instanceof Player ? player.localId() : player;
        if (typeof model === 'string') model = misc.getHashKey(model)
        SetPlayerModel(_player, model);
    }

    /**
     * Sets the routing bucket for the specified player.
     *
     * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
     *
     * Hash: 0x6504EB38
     */
    export function setRoutingBucket(playerSrc: string, bucket: number): void {
        SetPlayerRoutingBucket(playerSrc, bucket);
    }

    /**
     * SET_PLAYER_WANTED_LEVEL
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_WANTED_LEVEL](?\_0x39FF19C64EF7DA5B).</strong>
     *
     * Hash: 0xB7A0914B
     */
    export function setWantedLevel(player: number | string | Player, wantedLevel: number, delayedResponse: boolean): void {
        const _player = player instanceof Player ? player.localId() : player;
        SetPlayerWantedLevel(_player, wantedLevel, delayedResponse);
    }

    /**
     * No comment provided
     *
     * Hash: 0x1E35DBBA
     */
    export function tempBan(playerSrc: string, reason: string): void {
        TempBanPlayer(playerSrc, reason);
    }

    /**
     * On the server this will return the players source, on the client it will return the player handle.
     *
     * Hash: 0xA56135E0
     */
    export function getFromStateBagName(bagName: string): number {
        return GetPlayerFromStateBagName(bagName);
    }

}


export namespace vehicle {
    /**
     * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
     *
     * Hash: 0xA886495D
     */
    export function getHeliBodyHealth(heli: number | Vehicle): number {
        const _heli = heli instanceof Vehicle ? heli.localId() : heli;
        return GetHeliBodyHealth(_heli);
    }

    /**
     * This is a getter for [SET_DISABLE_HELI_EXPLODE_FROM_BODY_DAMAGE](#\_0xEDBC8405B3895CC9)
     *
     * Hash: 0x82AFC0A3
     */
    export function getHeliDisableExplodeFromBodyDamage(heli: number | Vehicle): boolean {
        const _heli = heli instanceof Vehicle ? heli.localId() : heli;
        return GetHeliDisableExplodeFromBodyDamage(_heli);
    }

    /**
     * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
     *
     * Hash: 0xA0FA0354
     */
    export function getHeliEngineHealth(heli: number | Vehicle): number {
        const _heli = heli instanceof Vehicle ? heli.localId() : heli;
        return GetHeliEngineHealth(_heli);
    }

    /**
     * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
     *
     * Hash: 0xD4EC7858
     */
    export function getHeliGasTankHealth(heli: number | Vehicle): number {
        const _heli = heli instanceof Vehicle ? heli.localId() : heli;
        return GetHeliGasTankHealth(_heli);
    }

    /**
     * No comment provided
     *
     * Hash: 0xC37D668
     */
    export function getHeliMainRotorDamageScale(heli: number | Vehicle): number {
        const _heli = heli instanceof Vehicle ? heli.localId() : heli;
        return GetHeliMainRotorDamageScale(_heli);
    }

    /**
     * No comment provided
     *
     * Hash: 0x1944AC95
     */
    export function getHeliPitchControl(heli: number | Vehicle): number {
        const _heli = heli instanceof Vehicle ? heli.localId() : heli;
        return GetHeliPitchControl(_heli);
    }

    /**
     * No comment provided
     *
     * Hash: 0xC40161E2
     */
    export function getHeliRearRotorDamageScale(heli: number | Vehicle): number {
        const _heli = heli instanceof Vehicle ? heli.localId() : heli;
        return GetHeliRearRotorDamageScale(_heli);
    }

    /**
     * This native is a getter for [SET_HELI_TAIL_ROTOR_HEALTH](#\_0xFE205F38AAA58E5B)
     *
     * Hash: 0x33EE6E2B
     */
    export function getHeliRearRotorHealth(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetHeliRearRotorHealth(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x12948DE9
     */
    export function getHeliRollControl(heli: number | Vehicle): number {
        const _heli = heli instanceof Vehicle ? heli.localId() : heli;
        return GetHeliRollControl(_heli);
    }

    /**
     * No comment provided
     *
     * Hash: 0x22239130
     */
    export function getHeliTailRotorDamageScale(heli: number | Vehicle): number {
        const _heli = heli instanceof Vehicle ? heli.localId() : heli;
        return GetHeliTailRotorDamageScale(_heli);
    }

    /**
     * **Note**: This native is deprecated, please use [`GET_HELI_REAR_ROTOR_HEALTH`](#\_0x33EE6E2B) instead.
     *
     * Hash: 0xA41BC13D
     */
    export function getHeliTailRotorHealth(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetHeliTailRotorHealth(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x8E86238D
     */
    export function getHeliThrottleControl(heli: number | Vehicle): number {
        const _heli = heli instanceof Vehicle ? heli.localId() : heli;
        return GetHeliThrottleControl(_heli);
    }

    /**
     * No comment provided
     *
     * Hash: 0x8FDC0768
     */
    export function getHeliYawControl(heli: number | Vehicle): number {
        const _heli = heli instanceof Vehicle ? heli.localId() : heli;
        return GetHeliYawControl(_heli);
    }

    /**
     * No comment provided
     *
     * Hash: 0x3EFE38D1
     */
    export function getIsHeliEngineRunning(heli: number | Vehicle): boolean {
        const _heli = heli instanceof Vehicle ? heli.localId() : heli;
        return GetIsHeliEngineRunning(_heli);
    }

    /**
     * No comment provided
     *
     * Hash: 0x1C939E87
     */
    export function getThrusterSideRcsThrottle(jetpack: number | Vehicle): number {
        const _jetpack = jetpack instanceof Vehicle ? jetpack.localId() : jetpack;
        return GetThrusterSideRcsThrottle(_jetpack);
    }

    /**
     * No comment provided
     *
     * Hash: 0x94E24C96
     */
    export function getThrusterThrottle(jetpack: number | Vehicle): number {
        const _jetpack = jetpack instanceof Vehicle ? jetpack.localId() : jetpack;
        return GetThrusterThrottle(_jetpack);
    }

    /**
     * No comment provided
     *
     * Hash: 0x456E34A
     */
    export function getTrainBackwardCarriage(train: number | Vehicle): number {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return GetTrainBackwardCarriage(_train);
    }

    /**
     * No comment provided
     *
     * Hash: 0x24DC88D9
     */
    export function getTrainForwardCarriage(train: number | Vehicle): number {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return GetTrainForwardCarriage(_train);
    }

    /**
     * This is a getter for the client-side native [`START_VEHICLE_HORN`](#\_0x9C8C6504B5B63D2C), which allows you to return the horn type of the vehicle.
     *
     * **Note**: This native only gets the hash value set with `START_VEHICLE_HORN`. If a wrong hash is passed into `START_VEHICLE_HORN`, it will return this wrong hash.
     *
     * ```cpp
     * enum eHornTypes
     * {
     * NORMAL = 1330140148,
     * HELDDOWN = -2087385909,
     * AGGRESSIVE = -92810745
     * }
     * ```
     *
     * Hash: 0xDEA49773
     */
    export function getHornType(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleHornType(_vehicle);
    }

    /**
     * This is a getter for [SET_HELI_TAIL_EXPLODE_THROW_DASHBOARD](#\_0x3EC8BF18AA453FE9)
     *
     * Hash: 0x23E46BD7
     */
    export function isHeliTailBoomBreakable(heli: number | Vehicle): boolean {
        const _heli = heli instanceof Vehicle ? heli.localId() : heli;
        return IsHeliTailBoomBreakable(_heli);
    }

    /**
     * No comment provided
     *
     * Hash: 0x2C59F987
     */
    export function isHeliTailBoomBroken(heli: number | Vehicle): boolean {
        const _heli = heli instanceof Vehicle ? heli.localId() : heli;
        return IsHeliTailBoomBroken(_heli);
    }

    /**
     * No comment provided
     *
     * Hash: 0xFA9336E5
     */
    export function isTrainCaboose(train: number | Vehicle): boolean {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return IsTrainCaboose(_train);
    }

    /**
     * No comment provided
     *
     * Hash: 0x77CC80DC
     */
    export function doesTrainStopAtStations(train: number | Vehicle): boolean {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return DoesTrainStopAtStations(_train);
    }

    /**
     * Gets the trains desired speed.
     *
     * Hash: 0xA4921EF5
     */
    export function getTrainCruiseSpeed(train: number | Vehicle): number {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return GetTrainCruiseSpeed(_train);
    }

    /**
     * Gets the direction the train is facing
     *
     * Hash: 0x8DAF79B6
     */
    export function getTrainDirection(train: number | Vehicle): boolean {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return GetTrainDirection(_train);
    }

    /**
     * No comment provided
     *
     * Hash: 0x81B50033
     */
    export function getTrainState(train: number | Vehicle): number {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return GetTrainState(_train);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9AA339D
     */
    export function getTrainTrackIndex(train: number | Vehicle): number {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return GetTrainTrackIndex(_train);
    }

    /**
     * No comment provided
     *
     * Hash: 0x483B013C
     */
    export function getHandbrake(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleHandbrake(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x1382FCEA
     */
    export function getSteeringAngle(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleSteeringAngle(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xBB340D04
     */
    export function isEngineStarting(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return IsVehicleEngineStarting(_vehicle);
    }

    /**
     * Creates a vehicle with the specified model at the specified position. This vehicle will initially be owned by the creating
     * script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
     *
     * ```
     * NativeDB Added Parameter 8: BOOL p7
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CREATE_VEHICLE](?\_0xAF35D0D2583051B0).</strong>
     *
     * Hash: 0xDD75460A
     */
    export function create(modelHash: number | string, pos: Vector3, heading: number, isNetwork: boolean, netMissionEntity: boolean): number {
        if (typeof modelHash === 'string') modelHash = misc.getHashKey(modelHash)
        return CreateVehicle(modelHash, pos.x, pos.y, pos.z, heading, isNetwork, netMissionEntity);
    }

    /**
     * Equivalent to CREATE_VEHICLE, but it uses 'server setter' logic (like the former CREATE_AUTOMOBILE) as a workaround for
     * reliability concerns regarding entity creation RPC.
     *
     * Unlike CREATE_AUTOMOBILE, this supports other vehicle types as well.
     *
     * Hash: 0x6AE51D4B
     */
    export function createServerSetter(modelHash: number | string, _type: string, pos: Vector3, heading: number): number {
        if (typeof modelHash === 'string') modelHash = misc.getHashKey(modelHash)
        return CreateVehicleServerSetter(modelHash, _type, pos.x, pos.y, pos.z, heading);
    }

    /**
     * Deletes the specified `entity` and any carriage its attached to, or that is attached to it.
     *
     * Hash: 0x523BA3DA
     */
    export function deleteTrain(entity: number | Entity): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        DeleteTrain(_entity);
    }

    /**
     * No comment provided
     *
     * Hash: 0x43F15989
     */
    export function doesBoatSinkWhenWrecked(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return DoesBoatSinkWhenWrecked(_vehicle);
    }

    /**
     * Returns all vehicle handles known to the server.
     * The data returned adheres to the following layout:
     *
     * ```
     * [127, 42, 13, 37]
     * ```
     *
     * Hash: 0x332169F5
     */
    export function getAlls(): number {
        return GetAllVehicles();
    }

    /**
     * No comment provided
     *
     * Hash: 0x7DC6D022
     */
    export function getIsEngineRunning(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetIsVehicleEngineRunning(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xD7EC8760
     */
    export function getIsPrimaryColourCustom(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetIsVehiclePrimaryColourCustom(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x288AD228
     */
    export function getIsSecondaryColourCustom(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetIsVehicleSecondaryColourCustom(_vehicle);
    }

    /**
     * See the client-side [GET_LANDING_GEAR_STATE](#\_0x9B0F3DCA3DB0F4CD) native for a description of landing gear states.
     *
     * Hash: 0xA6F02670
     */
    export function getLandingGearState(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetLandingGearState(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x95070FA
     */
    export function getTrainCarriageEngine(train: number | Vehicle): number {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return GetTrainCarriageEngine(_train);
    }

    /**
     * No comment provided
     *
     * Hash: 0x4B8285CF
     */
    export function getTrainCarriageIndex(train: number | Vehicle): number {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return GetTrainCarriageIndex(_train);
    }

    /**
     * No comment provided
     *
     * Hash: 0x2B2FCC28
     */
    export function getBodyHealth(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleBodyHealth(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x40D82D88
     */
    export function getColours(vehicle: number | Vehicle): [number, number] {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleColours(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x1C2B9FEF
     */
    export function getCustomPrimaryColour(vehicle: number | Vehicle): [number, number, number] {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleCustomPrimaryColour(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x3FF247A2
     */
    export function getCustomSecondaryColour(vehicle: number | Vehicle): [number, number, number] {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleCustomSecondaryColour(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xA0DBD08D
     */
    export function getDashboardColour(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleDashboardColour(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xFD15C065
     */
    export function getDirtLevel(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleDirtLevel(_vehicle);
    }

    /**
     * Currently it only works when set to "all players".
     *
     * Hash: 0x1DC50247
     */
    export function getDoorsLockedForPlayer(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleDoorsLockedForPlayer(_vehicle);
    }

    /**
     * ```lua
     * enum_VehicleLockStatus = {
     * None = 0,
     * Locked = 2,
     * LockedForPlayer = 3,
     * StickPlayerInside = 4, -- Doesn't allow players to exit the vehicle with the exit vehicle key.
     * CanBeBrokenInto = 7, -- Can be broken into the car. If the glass is broken, the value will be set to 1
     * CanBeBrokenIntoPersist = 8, -- Can be broken into persist
     * CannotBeTriedToEnter = 10, -- Cannot be tried to enter (Nothing happens when you press the vehicle enter key).
     * }
     * ```
     *
     * It should be [noted](https://forum.cfx.re/t/4863241) that while the [client-side command](#\_0x25BC98A59C2EA962) and its
     * setter distinguish between states 0 (unset) and 1 (unlocked), the game will synchronize both as state 0, so the server-side
     * command will return only '0' if unlocked.
     *
     * Hash: 0xD72CEF2
     */
    export function getDoorLockStatus(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleDoorLockStatus(_vehicle);
    }

    /**
     * Returns the open position of the specified door on the target vehicle.
     *
     * Hash: 0x6E35C49C
     */
    export function getDoorStatus(vehicle: number | Vehicle, doorIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleDoorStatus(_vehicle, doorIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0x8880038A
     */
    export function getEngineHealth(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleEngineHealth(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x80E4659B
     */
    export function getExtraColours(vehicle: number | Vehicle): [number, number] {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleExtraColours(_vehicle);
    }

    /**
     * Gets the flight nozzel position for the specified vehicle. See the client-side [\_GET_VEHICLE_FLIGHT_NOZZLE_POSITION](#\_0xDA62027C8BDB326E) native for usage examples.
     *
     * Hash: 0xAD40AD55
     */
    export function getFlightNozzlePosition(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleFlightNozzlePosition(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xD7147656
     */
    export function getHeadlightsColour(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleHeadlightsColour(_vehicle);
    }

    /**
     * Gets the lock on state for the specified vehicle. See the client-side [GET_VEHICLE_HOMING_LOCKON_STATE](#\_0xE6B0E8CFC3633BF0) native for a description of lock on states.
     *
     * Hash: 0xFBDE9FD8
     */
    export function getHomingLockonState(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleHomingLockonState(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xCCFF3B6E
     */
    export function getInteriorColour(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleInteriorColour(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x7C278621
     */
    export function getLightsState(vehicle: number | Vehicle): [boolean, boolean, boolean] {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleLightsState(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xEC82A51D
     */
    export function getLivery(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleLivery(_vehicle);
    }

    /**
     * Gets the vehicle that is locked on to for the specified vehicle.
     *
     * Hash: 0x4A557117
     */
    export function getLockOnTarget(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleLockOnTarget(_vehicle);
    }

    /**
     * Getter to check the neon colour of a vehicle. This native is the server side getter of [GET_VEHICLE_NEON_LIGHTS_COLOUR](#\_0x7619EEE8C886757F).
     *
     * Hash: 0xD9319DCB
     */
    export function getNeonColour(vehicle: number | Vehicle): [number, number, number] {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleNeonColour(_vehicle);
    }

    /**
     * Getter to check if one of the neon lights of a vehicle is enabled. This native is the server side getter of [IS_VEHICLE_NEON_LIGHT_ENABLED](#\_0x8C4B92553E4766A5).
     *
     * ```cpp
     * enum neonIndex
     * {
     * NEON_BACK = 0,   // Back neon
     * NEON_RIGHT = 1,  // Right neon
     * NEON_LEFT = 2,   // Left neon
     * NEON_FRONT = 3   // Front neon
     * };
     * ```
     *
     * Hash: 0x684BDBF2
     */
    export function getNeonEnabled(vehicle: number | Vehicle, neonIndex: number): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleNeonEnabled(_vehicle, neonIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0xE8522D58
     */
    export function getNumberPlateText(vehicle: number | Vehicle): string {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleNumberPlateText(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x499747B6
     */
    export function getNumberPlateTextIndex(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleNumberPlateTextIndex(_vehicle);
    }

    /**
     * Gets the vehicle the specified Ped is/was in depending on bool value. This native is used server side when using OneSync.
     *
     * Hash: 0xAFE92319
     */
    export function getPedIsIn(ped: number | Ped, lastVehicle: boolean): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetVehiclePedIsIn(_ped, lastVehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xE41595CE
     */
    export function getPetrolTankHealth(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehiclePetrolTankHealth(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x57037960
     */
    export function getRadioStationIndex(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleRadioStationIndex(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x872CF42
     */
    export function getRoofLivery(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleRoofLivery(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9963D5F9
     */
    export function getTotalRepairs(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleTotalRepairs(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x75280015
     */
    export function getTyreSmokeColor(vehicle: number | Vehicle): [number, number, number] {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleTyreSmokeColor(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xDA58D7AE
     */
    export function getWheelType(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelType(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x13D53892
     */
    export function getWindowTint(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWindowTint(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xB8AF3137
     */
    export function hasBeenDamagedByBullets(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return HasVehicleBeenDamagedByBullets(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xE4E83A5B
     */
    export function hasBeenOwnedByPlayer(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return HasVehicleBeenOwnedByPlayer(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xD5C39EE6
     */
    export function isBoatAnchoredAndFrozen(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return IsBoatAnchoredAndFrozen(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9049DB44
     */
    export function isBoatWrecked(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return IsBoatWrecked(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x42098B5
     */
    export function isExtraTurnedOn(vehicle: number | Vehicle, extraId: number): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return IsVehicleExtraTurnedOn(_vehicle, extraId);
    }

    /**
     * No comment provided
     *
     * Hash: 0x25EB5873
     */
    export function isSirenOn(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return IsVehicleSirenOn(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x48C80210
     */
    export function isTyreBurst(vehicle: number | Vehicle, wheelID: number, completely: boolean): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return IsVehicleTyreBurst(_vehicle, wheelID, completely);
    }

    /**
     * See the client-side [IS_VEHICLE_WINDOW_INTACT](#\_0x46E571A0E20D01F1) for a window indexes list.
     *
     * Hash: 0xAC4EF23D
     */
    export function isWindowIntact(vehicle: number | Vehicle, windowIndex: number): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return IsVehicleWindowIntact(_vehicle, windowIndex);
    }

    /**
     * SET_VEHICLE_ALARM
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_ALARM](?\_0xCDE5E70C1DDB954C).</strong>
     *
     * Hash: 0x24877D84
     */
    export function setAlarm(vehicle: number | Vehicle, state: boolean): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleAlarm(_vehicle, state);
    }

    /**
     * ```
     * p2 often set to 1000.0 in the decompiled scripts.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_BODY_HEALTH](?\_0xB77D05AC8C78AADB).</strong>
     *
     * Hash: 0x920C2517
     */
    export function setBodyHealth(vehicle: number | Vehicle, value: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleBodyHealth(_vehicle, value);
    }

    /**
     * colorPrimary & colorSecondary are the paint indexes for the vehicle.
     * For a list of valid paint indexes, view: pastebin.com/pwHci0xK
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_COLOURS](?\_0x4F1D4BE3A7F24601).</strong>
     *
     * Hash: 0x57F24253
     */
    export function setColours(vehicle: number | Vehicle, colorPrimary: number, colorSecondary: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleColours(_vehicle, colorPrimary, colorSecondary);
    }

    /**
     * Sets the selected vehicle's colors to their default value (specific variant specified using the colorCombination parameter).
     * Range of possible values for colorCombination is currently unknown, I couldn't find where these values are stored either (Disquse's guess was vehicles.meta but I haven't seen it in there.)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_COLOUR_COMBINATION](?\_0x33E8CD3322E2FE31).</strong>
     *
     * Hash: 0xA557AEAD
     */
    export function setColourCombination(vehicle: number | Vehicle, colorCombination: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleColourCombination(_vehicle, colorCombination);
    }

    /**
     * ```
     * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_CUSTOM_PRIMARY_COLOUR](?\_0x7141766F91D15BEA).</strong>
     *
     * Hash: 0x8DF9F9BC
     */
    export function setCustomPrimaryColour(vehicle: number | Vehicle, r: number, g: number, b: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleCustomPrimaryColour(_vehicle, r, g, b);
    }

    /**
     * ```
     * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_CUSTOM_SECONDARY_COLOUR](?\_0x36CED73BFED89754).</strong>
     *
     * Hash: 0x9D77259E
     */
    export function setCustomSecondaryColour(vehicle: number | Vehicle, r: number, g: number, b: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleCustomSecondaryColour(_vehicle, r, g, b);
    }

    /**
     * Sets the dirt level of the passed vehicle.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DIRT_LEVEL](?\_0x79D3B596FE44EE8B).</strong>
     *
     * Hash: 0x2B39128B
     */
    export function setDirtLevel(vehicle: number | Vehicle, dirtLevel: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleDirtLevel(_vehicle, dirtLevel);
    }

    /**
     * Locks the doors of a specified vehicle to a defined lock state, affecting how players and NPCs can interact with the vehicle.
     *
     * ```
     * NativeDB Introduced: v323
     * ```
     *
     * ```cpp
     * enum eVehicleLockState {
     * // No specific lock state, vehicle behaves according to the game's default settings.
     * VEHICLELOCK_NONE = 0,
     * // Vehicle is fully unlocked, allowing free entry by players and NPCs.
     * VEHICLELOCK_UNLOCKED = 1,
     * // Vehicle is locked, preventing entry by players and NPCs.
     * VEHICLELOCK_LOCKED = 2,
     * // Vehicle locks out only players, allowing NPCs to enter.
     * VEHICLELOCK_LOCKOUT_PLAYER_ONLY = 3,
     * // Vehicle is locked once a player enters, preventing others from entering.
     * VEHICLELOCK_LOCKED_PLAYER_INSIDE = 4,
     * // Vehicle starts in a locked state, but may be unlocked through game events.
     * VEHICLELOCK_LOCKED_INITIALLY = 5,
     * // Forces the vehicle's doors to shut and lock.
     * VEHICLELOCK_FORCE_SHUT_DOORS = 6,
     * // Vehicle is locked but can still be damaged.
     * VEHICLELOCK_LOCKED_BUT_CAN_BE_DAMAGED = 7,
     * // Vehicle is locked, but its trunk/boot remains unlocked.
     * VEHICLELOCK_LOCKED_BUT_BOOT_UNLOCKED = 8,
     * // Vehicle is locked and does not allow passengers, except for the driver.
     * VEHICLELOCK_LOCKED_NO_PASSENGERS = 9,
     * // Vehicle is completely locked, preventing entry entirely, even if previously inside.
     * VEHICLELOCK_CANNOT_ENTER = 10
     * };
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DOORS_LOCKED](?\_0xB664292EAECF7FA6).</strong>
     *
     * Hash: 0x4CDD35D0
     */
    export function setDoorsLocked(vehicle: number | Vehicle, doorLockStatus: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleDoorsLocked(_vehicle, doorLockStatus);
    }

    /**
     * See eDoorId declared in [`SET_VEHICLE_DOOR_SHUT`](#\_0x93D9BD300D7789E5)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DOOR_BROKEN](?\_0xD4D4F6A4AB575A33).</strong>
     *
     * Hash: 0x8147FEA7
     */
    export function setDoorBroken(vehicle: number | Vehicle, doorIndex: number, deleteDoor: boolean): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleDoorBroken(_vehicle, doorIndex, deleteDoor);
    }

    /**
     * SET_VEHICLE_NUMBER_PLATE_TEXT
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_NUMBER_PLATE_TEXT](?\_0x95A88F0B409CDA47).</strong>
     *
     * Hash: 0x400F9556
     */
    export function setNumberPlateText(vehicle: number | Vehicle, plateText: string): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleNumberPlateText(_vehicle, plateText);
    }

    /**
     * Returns the type of the passed vehicle.
     *
     * For client scripts, reference the more detailed [GET_VEHICLE_TYPE_RAW](#\_0xDE73BC10) native.
     *
     * ### Vehicle types
     *
     * *   automobile
     * *   bike
     * *   boat
     * *   heli
     * *   plane
     * *   submarine
     * *   trailer
     * *   train
     *
     * Hash: 0xA273060E
     */
    export function getType(vehicle: number | Vehicle): string {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleType(_vehicle);
    }

}


export namespace weapon {
    /**
     * GIVE_WEAPON_COMPONENT_TO_PED
     *
     * <strong>This is the server-side RPC native equivalent of the client native [GIVE_WEAPON_COMPONENT_TO_PED](?\_0xD966D51AA5B28BB9).</strong>
     *
     * Hash: 0x3E1E286D
     */
    export function giveComponentToPed(ped: number | Ped, weaponHash: number | string, componentHash: number | string): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        if (typeof weaponHash === 'string') weaponHash = misc.getHashKey(weaponHash)
        if (typeof componentHash === 'string') componentHash = misc.getHashKey(componentHash)
        GiveWeaponComponentToPed(_ped, weaponHash, componentHash);
    }

    /**
     * GIVE_WEAPON_TO_PED
     *
     * <strong>This is the server-side RPC native equivalent of the client native [GIVE_WEAPON_TO_PED](?\_0xBF0FD6E56C964FCB).</strong>
     *
     * Hash: 0xC4D88A85
     */
    export function giveToPed(ped: number | Ped, weaponHash: number | string, ammoCount: number, isHidden: boolean, bForceInHand: boolean): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        if (typeof weaponHash === 'string') weaponHash = misc.getHashKey(weaponHash)
        GiveWeaponToPed(_ped, weaponHash, ammoCount, isHidden, bForceInHand);
    }

    /**
     * Parameter `p1` does not seem to be used or referenced in game binaries.\
     * **Note:** When called for networked entities, a `CRemoveAllWeaponsEvent` will be created per request.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_ALL_PED_WEAPONS](?\_0xF25DF915FA38C5F3).</strong>
     *
     * Hash: 0xA44CE817
     */
    export function removeAllPeds(ped: number | Ped): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        RemoveAllPedWeapons(_ped, false);
    }

    /**
     * REMOVE_WEAPON_COMPONENT_FROM_PED
     *
     * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_WEAPON_COMPONENT_FROM_PED](?\_0x1E8BE90C74FB4C09).</strong>
     *
     * Hash: 0x412AA00D
     */
    export function removeComponentFromPed(ped: number | Ped, weaponHash: number | string, componentHash: number | string): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        if (typeof weaponHash === 'string') weaponHash = misc.getHashKey(weaponHash)
        if (typeof componentHash === 'string') componentHash = misc.getHashKey(componentHash)
        RemoveWeaponComponentFromPed(_ped, weaponHash, componentHash);
    }

    /**
     * ```
     * This native removes a specified weapon from your selected ped.
     * Weapon Hashes: pastebin.com/0wwDZgkF
     * Example:
     * C#:
     * Function.Call(Hash.REMOVE_WEAPON_FROM_PED, Game.Player.Character, 0x99B507EA);
     * C++:
     * `WEAPON::REMOVE_WEAPON_FROM_PED(PLAYER::PLAYER_PED_ID(), 0x99B507EA);`
     * The code above removes the knife from the player.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_WEAPON_FROM_PED](?\_0x4899CB088EDF59B8).</strong>
     *
     * Hash: 0x9C37F220
     */
    export function removeFromPed(ped: number | Ped, weaponHash: number | string): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        if (typeof weaponHash === 'string') weaponHash = misc.getHashKey(weaponHash)
        RemoveWeaponFromPed(_ped, weaponHash);
    }

}


export namespace network {
    /**
     * No comment provided
     *
     * Hash: 0x5B912C3F
     */
    export function getEntityFromNetworkId(netId: number): number {
        return NetworkGetEntityFromNetworkId(netId);
    }

    /**
     * Returns the first owner ID of the specified entity.
     *
     * Hash: 0x1E546224
     */
    export function getFirstEntityOwner(entity: number | Entity): number {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return NetworkGetFirstEntityOwner(_entity);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9E35DAB6
     */
    export function getNetworkIdFromEntity(entity: number | Entity): number {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return NetworkGetNetworkIdFromEntity(_entity);
    }

    /**
     * No comment provided
     *
     * Hash: 0xFFEEF513
     */
    export function getVoiceProximityOverrideForPlayer(playerSrc: string): Vector3 {
        return new Vector3(NetworkGetVoiceProximityOverrideForPlayer(playerSrc));
    }

    /**
     * Returns the owner ID of the specified entity.
     *
     * Hash: 0x526FEE31
     */
    export function getEntityOwner(entity: number | Entity): number {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return NetworkGetEntityOwner(_entity);
    }

}


export namespace kvp {
    /**
     * No comment provided
     *
     * Hash: 0xB3210203
     */
    export function endFind(handle: number): void {
        EndFindKvp(handle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xBD7BEBC5
     */
    export function find(handle: number): string {
        return FindKvp(handle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xDD379006
     */
    export function startFind(prefix: string): number {
        return StartFindKvp(prefix);
    }

}


export namespace mumble {
    /**
     * Create a permanent voice channel.
     *
     * Hash: 0x262663C5
     */
    export function createChannel(id: number): void {
        MumbleCreateChannel(id);
    }

    /**
     * Checks if the player is currently muted
     *
     * Hash: 0x1D5D50C2
     */
    export function isPlayerMuted(playerSrc: number): boolean {
        return MumbleIsPlayerMuted(playerSrc);
    }

    /**
     * Mutes or unmutes the specified player
     *
     * Hash: 0xCC6C2EB1
     */
    export function setPlayerMuted(playerSrc: number, toggle: boolean): void {
        MumbleSetPlayerMuted(playerSrc, toggle);
    }

}


export namespace object {
    /**
     * Creates an object (prop) with the specified model at the specified position, offset on the Z axis by the radius of the object's model.
     * This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CREATE_OBJECT](?\_0x509D5878EB39E842).</strong>
     *
     * Hash: 0x2F7AA05C
     */
    export function create(modelHash: number | string, pos: Vector3, isNetwork: boolean, netMissionEntity: boolean, doorFlag: boolean): number {
        if (typeof modelHash === 'string') modelHash = misc.getHashKey(modelHash)
        return CreateObject(modelHash, pos.x, pos.y, pos.z, isNetwork, netMissionEntity, doorFlag);
    }

    /**
     * Creates an object (prop) with the specified model centered at the specified position.
     * This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CREATE_OBJECT_NO_OFFSET](?\_0x9A294B2138ABB884).</strong>
     *
     * Hash: 0x58040420
     */
    export function createNoOffset(modelHash: number | string, pos: Vector3, isNetwork: boolean, netMissionEntity: boolean, doorFlag: boolean): number {
        if (typeof modelHash === 'string') modelHash = misc.getHashKey(modelHash)
        return CreateObjectNoOffset(modelHash, pos.x, pos.y, pos.z, isNetwork, netMissionEntity, doorFlag);
    }

    /**
     * Returns all object handles known to the server.
     * The data returned adheres to the following layout:
     *
     * ```
     * [127, 42, 13, 37]
     * ```
     *
     * Hash: 0x6886C3FE
     */
    export function getAlls(): number {
        return GetAllObjects();
    }

}


export namespace resource {
    /**
     * Nonsynchronous operations will not wait for a disk/filesystem flush before returning from a write or delete call. They will be much faster than their synchronous counterparts (e.g., bulk operations), however, a system crash may lose the data to some recent operations.
     *
     * This native ensures all `_NO_SYNC` operations are synchronized with the disk/filesystem.
     *
     * Hash: 0xE27C97A0
     */
    export function flushKvp(): void {
        FlushResourceKvp();
    }

    /**
     * Returns the physical on-disk path of the specified resource.
     *
     * Hash: 0x61DCF017
     */
    export function getPath(resourceName: string): string {
        return GetResourcePath(resourceName);
    }

    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Registers a cached resource asset with the resource system, similar to the automatic scanning of the `stream/` folder.
     *
     * Hash: 0x9862B266
     */
    export function registerAsset(resourceName: string, fileName: string): string {
        return RegisterResourceAsset(resourceName, fileName);
    }

    /**
     * Registers a build task factory for resources.
     * The function should return an object (msgpack map) with the following fields:
     *
     * ```
     * {
     * // returns whether the specific resource should be built
     * shouldBuild = func(resourceName: string): bool,
     *
     * // asynchronously start building the specific resource.
     * // call cb when completed
     * build = func(resourceName: string, cb: func(success: bool, status: string): void): void
     * }
     * ```
     *
     * Hash: 0x285B43CA
     */
    export function registerBuildTaskFactory(factoryId: string, factoryFn: Function): void {
        RegisterResourceBuildTaskFactory(factoryId, factoryFn);
    }

    /**
     * Writes the specified data to a file in the specified resource.
     * Using a length of `-1` will automatically detect the length assuming the data is a C string.
     *
     * Hash: 0xA09E7E7B
     */
    export function saveFile(resourceName: string, fileName: string, data: string, dataLength: number): boolean {
        return SaveResourceFile(resourceName, fileName, data, dataLength);
    }

    /**
     * Scans the resources in the specified resource root. This function is only available in the 'monitor mode' process and is
     * not available for user resources.
     *
     * Hash: 0x636F097F
     */
    export function scanRoot(rootPath: string, callback: Function): void {
        ScanResourceRoot(rootPath, callback);
    }

    /**
     * Schedules the specified resource to run a tick as soon as possible, bypassing the server's fixed tick rate.
     *
     * Hash: 0xB88A73AD
     */
    export function scheduleTick(resourceName: string): void {
        ScheduleResourceTick(resourceName);
    }

    /**
     * No comment provided
     *
     * Hash: 0x29B440DC
     */
    export function start(resourceName: string): boolean {
        return StartResource(resourceName);
    }

    /**
     * No comment provided
     *
     * Hash: 0x21783161
     */
    export function stop(resourceName: string): boolean {
        return StopResource(resourceName);
    }

    /**
     * No comment provided
     *
     * Hash: 0x7389B5DF
     */
    export function deleteKvp(key: string): void {
        DeleteResourceKvp(key);
    }

    /**
     * Nonsynchronous [DELETE_RESOURCE_KVP](#\_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0x4152C90
     */
    export function deleteKvpNoSync(key: string): void {
        DeleteResourceKvpNoSync(key);
    }

    /**
     * Returns the name of the currently executing resource.
     *
     * Hash: 0xE5E9EBBB
     */
    export function getCurrentName(): string {
        return GetCurrentResourceName();
    }

    /**
     * No comment provided
     *
     * Hash: 0x4D52FE5B
     */
    export function getInvoking(): string {
        return GetInvokingResource();
    }

    /**
     * No comment provided
     *
     * Hash: 0x863F27B
     */
    export function getNums(): number {
        return GetNumResources();
    }

    /**
     * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
     * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
     *
     * Hash: 0x776E864
     */
    export function getNumMetadata(resourceName: string, metadataKey: string): number {
        return GetNumResourceMetadata(resourceName, metadataKey);
    }

    /**
     * No comment provided
     *
     * Hash: 0x387246B7
     */
    export function getByFindIndex(findIndex: number): string {
        return GetResourceByFindIndex(findIndex);
    }

    /**
     * Returns all commands registered by the specified resource.
     * The data returned adheres to the following layout:
     *
     * ```
     * [
     * {
     * "name": "cmdlist",
     * "resource": "example_resource",
     * "arity" = -1,
     * },
     * {
     * "name": "command1"
     * "resource": "example_resource2",
     * "arity" = -1,
     * }
     * ]
     * ```
     *
     * Hash: 0x97628584
     */
    export function getCommands(resource: string): number {
        return GetResourceCommands(resource);
    }

    /**
     * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
     *
     * Hash: 0x35BDCEEA
     */
    export function getKvpFloat(key: string): number {
        return GetResourceKvpFloat(key);
    }

    /**
     * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
     *
     * Hash: 0x557B586A
     */
    export function getKvpInt(key: string): number {
        return GetResourceKvpInt(key);
    }

    /**
     * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
     *
     * Hash: 0x5240DA5A
     */
    export function getKvpString(key: string): string {
        return GetResourceKvpString(key);
    }

    /**
     * Gets the metadata value at a specified key/index from a resource's manifest.
     * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
     *
     * Hash: 0x964BAB1D
     */
    export function getMetadata(resourceName: string, metadataKey: string, index: number): string {
        return GetResourceMetadata(resourceName, metadataKey, index);
    }

    /**
     * Returns the current state of the specified resource.
     *
     * Hash: 0x4039B485
     */
    export function getState(resourceName: string): string {
        return GetResourceState(resourceName);
    }

    /**
     * Reads the contents of a text file in a specified resource.
     * If executed on the client, this file has to be included in `files` in the resource manifest.
     * Example: `local data = LoadResourceFile("devtools", "data.json")`
     *
     * Hash: 0x76A9EE1F
     */
    export function loadFile(resourceName: string, fileName: string): string {
        return LoadResourceFile(resourceName, fileName);
    }

    /**
     * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
     *
     * Hash: 0xD233A168
     */
    export function registerAsEventHandler(eventName: string): void {
        RegisterResourceAsEventHandler(eventName);
    }

    /**
     * A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).
     *
     * Hash: 0x21C7A35B
     */
    export function setKvp(key: string, value: string): void {
        SetResourceKvp(key, value);
    }

    /**
     * A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).
     *
     * Hash: 0x9ADD2938
     */
    export function setKvpFloat(key: string, value: number): void {
        SetResourceKvpFloat(key, value);
    }

    /**
     * Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0x3517BFBE
     */
    export function setKvpFloatNoSync(key: string, value: number): void {
        SetResourceKvpFloatNoSync(key, value);
    }

    /**
     * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
     *
     * Hash: 0x6A2B1E8
     */
    export function setKvpInt(key: string, value: number): void {
        SetResourceKvpInt(key, value);
    }

    /**
     * Nonsynchronous [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0x26AEB707
     */
    export function setKvpIntNoSync(key: string, value: number): void {
        SetResourceKvpIntNoSync(key, value);
    }

    /**
     * Nonsynchronous [SET_RESOURCE_KVP](#\_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0xCF9A2FF
     */
    export function setKvpNoSync(key: string, value: string): void {
        SetResourceKvpNoSync(key, value);
    }

}


export namespace task {
    /**
     * Clear a ped's tasks. Stop animations and other tasks created by scripts.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_TASKS](?\_0xE1EF3C1216AFF2CD).</strong>
     *
     * Hash: 0xDE3316AB
     */
    export function clearPeds(ped: number | Ped): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        ClearPedTasks(_ped);
    }

    /**
     * Immediately stops the pedestrian from whatever it's doing. The difference between this and [CLEAR_PED_TASKS](#\_0xE1EF3C1216AFF2CD) is that this one teleports the ped but does not change the position of the ped.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_TASKS_IMMEDIATELY](?\_0xAAA34F8A7CB32098).</strong>
     *
     * Hash: 0xBC045625
     */
    export function clearPedsImmediately(ped: number | Ped): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        ClearPedTasksImmediately(_ped);
    }

    /**
     * ```
     * Makes the specified ped attack the target ped.
     * p2 should be 0
     * p3 should be 16
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_COMBAT_PED](?\_0xF166E48407BAC484).</strong>
     *
     * Hash: 0xCB0D8932
     */
    export function combatPed(ped: number | Ped, targetPed: number | Ped): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        const _targetPed = targetPed instanceof Ped ? targetPed.handle() : targetPed;
        TaskCombatPed(_ped, _targetPed, 0, 0);
    }

    /**
     * ```
     * Example:
     * `TASK::TASK_DRIVE_BY(l_467[1\/\*22\*\/], PLAYER::PLAYER_PED_ID(), 0, 0.0, 0.0, 2.0, 300.0, 100, 0, ${firing_pattern_burst_fire_driveby});`
     * Needs working example. Doesn't seem to do anything.
     * I marked p2 as targetVehicle as all these shooting related tasks seem to have that in common.
     * I marked p6 as distanceToShoot as if you think of GTA's Logic with the native SET_VEHICLE_SHOOT natives, it won't shoot till it gets within a certain distance of the target.
     * I marked p7 as pedAccuracy as it seems it's mostly 100 (Completely Accurate), 75, 90, etc. Although this could be the ammo count within the gun, but I highly doubt it. I will change this comment once I find out if it's ammo count or not.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_DRIVE_BY](?\_0x2F8AF0E82773A171).</strong>
     *
     * Hash: 0x2B84D1C4
     */
    export function driveBy(driverPed: number | Ped, targetPed: number | Ped, targetVehicle: number | Vehicle, targetX: number, targetY: number, targetZ: number, distanceToShoot: number, pedAccuracy: number, firingPattern: number | string): void {
        const _driverPed = driverPed instanceof Ped ? driverPed.handle() : driverPed;
        const _targetPed = targetPed instanceof Ped ? targetPed.handle() : targetPed;
        const _targetVehicle = targetVehicle instanceof Vehicle ? targetVehicle.localId() : targetVehicle;
        if (typeof firingPattern === 'string') firingPattern = misc.getHashKey(firingPattern)
        TaskDriveBy(_driverPed, _targetPed, _targetVehicle, targetX, targetY, targetZ, distanceToShoot, pedAccuracy, false, firingPattern);
    }

    /**
     * ```
     * speed 1.0 = walk, 2.0 = run
     * p5 1 = normal, 3 = teleport to vehicle, 8 = normal/carjack ped from seat, 16 = teleport directly into vehicle
     * p6 is always 0
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_ENTER_VEHICLE](?\_0xC20E50AA46D09CA8).</strong>
     *
     * Hash: 0xB8689B4E
     */
    export function enterVehicle(ped: number | Ped, vehicle: number | Vehicle, timeout: number, seatIndex: number, speed: number, flag: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        TaskEnterVehicle(_ped, _vehicle, timeout, seatIndex, speed, flag, undefined);
    }

    /**
     * TASK_EVERYONE_LEAVE_VEHICLE
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_EVERYONE_LEAVE_VEHICLE](?\_0x7F93691AB4B92272).</strong>
     *
     * Hash: 0xC1971F30
     */
    export function everyoneLeaveVehicle(vehicle: number | Vehicle): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        TaskEveryoneLeaveVehicle(_vehicle);
    }

    /**
     * TASK_GO_STRAIGHT_TO_COORD
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_GO_STRAIGHT_TO_COORD](?\_0xD76B57B44F1E6F8B).</strong>
     *
     * Hash: 0x80A9E7A7
     */
    export function goStraightToCoord(ped: number | Ped, pos: Vector3, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        TaskGoStraightToCoord(_ped, pos.x, pos.y, pos.z, speed, timeout, targetHeading, distanceToSlide);
    }

    /**
     * Tells a ped to go to a coord by any means.
     *
     * ```cpp
     * enum eDrivingMode {
     * DF_StopForCars = 1,
     * DF_StopForPeds = 2,
     * DF_SwerveAroundAllCars = 4,
     * DF_SteerAroundStationaryCars = 8,
     * DF_SteerAroundPeds = 16,
     * DF_SteerAroundObjects = 32,
     * DF_DontSteerAroundPlayerPed = 64,
     * DF_StopAtLights = 128,
     * DF_GoOffRoadWhenAvoiding = 256,
     * DF_DriveIntoOncomingTraffic = 512,
     * DF_DriveInReverse = 1024,
     * // If pathfinding fails, cruise randomly instead of going on a straight line
     * DF_UseWanderFallbackInsteadOfStraightLine = 2048,
     * DF_AvoidRestrictedAreas = 4096,
     * // These only work on MISSION_CRUISE
     * DF_PreventBackgroundPathfinding = 8192,
     * DF_AdjustCruiseSpeedBasedOnRoadSpeed = 16384,
     * DF_UseShortCutLinks =  262144,
     * DF_ChangeLanesAroundObstructions = 524288,
     * // cruise tasks ignore this anyway--only used for goto's
     * DF_UseSwitchedOffNodes =  2097152,
     * // if you're going to be primarily driving off road
     * DF_PreferNavmeshRoute =  4194304,
     * // Only works for planes using MISSION_GOTO, will cause them to drive along the ground instead of fly
     * DF_PlaneTaxiMode =  8388608,
     * DF_ForceStraightLine = 16777216,
     * DF_UseStringPullingAtJunctions = 33554432,
     * DF_AvoidHighways = 536870912,
     * DF_ForceJoinInRoadDirection = 1073741824,
     * // Standard driving mode. stops for cars, peds, and lights, goes around stationary obstructions
     * DRIVINGMODE_STOPFORCARS = 786603, // DF_StopForCars|DF_StopForPeds|DF_SteerAroundObjects|DF_SteerAroundStationaryCars|DF_StopAtLights|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,		// Obey lights too
     * // Like the above, but doesn't steer around anything in its way - will only wait instead.
     * DRIVINGMODE_STOPFORCARS_STRICT = 262275, // DF_StopForCars|DF_StopForPeds|DF_StopAtLights|DF_UseShortCutLinks, // Doesn't deviate an inch.
     * // Default "alerted" driving mode. drives around everything, doesn't obey lights
     * DRIVINGMODE_AVOIDCARS = 786469, // DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars,
     * // Very erratic driving. difference between this and AvoidCars is that it doesn't use the brakes at ALL to help with steering
     * DRIVINGMODE_AVOIDCARS_RECKLESS = 786468, // DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,
     * // Smashes through everything
     * DRIVINGMODE_PLOUGHTHROUGH = 262144, // DF_UseShortCutLinks
     * // Drives normally except for the fact that it ignores lights
     * DRIVINGMODE_STOPFORCARS_IGNORELIGHTS = 786475, // DF_StopForCars|DF_SteerAroundStationaryCars|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions
     * // Try to swerve around everything, but stop for lights if necessary
     * DRIVINGMODE_AVOIDCARS_OBEYLIGHTS = 786597, // DF_SwerveAroundAllCars|DF_StopAtLights|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
     * // Swerve around cars, be careful around peds, and stop for lights
     * DRIVINGMODE_AVOIDCARS_STOPFORPEDS_OBEYLIGHTS = 786599 // DF_SwerveAroundAllCars|DF_StopAtLights|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
     * };
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_GO_TO_COORD_ANY_MEANS](?\_0x5BC448CB78FA3E88).</strong>
     *
     * Hash: 0xF91DF93B
     */
    export function goToCoordAnyMeans(ped: number | Ped, pos: Vector3, fMoveBlendRatio: number, vehicle: number | Vehicle, bUseLongRangeVehiclePathing: boolean, drivingFlags: number, fMaxRangeToShootTargets: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        TaskGoToCoordAnyMeans(_ped, pos.x, pos.y, pos.z, fMoveBlendRatio, _vehicle, bUseLongRangeVehiclePathing, drivingFlags, fMaxRangeToShootTargets);
    }

    /**
     * ```
     * The entity will move towards the target until time is over (duration) or get in target's range (distance). p5 and p6 are unknown, but you could leave p5 = 1073741824 or 100 or even 0 (didn't see any difference but on the decompiled scripts, they use 1073741824 mostly) and p6 = 0
     * Note: I've only tested it on entity -> ped and target -> vehicle. It could work differently on other entities, didn't try it yet.
     * `Example: TASK::TASK_GO_TO_ENTITY(pedHandle, vehicleHandle, 5000, 4.0, 100, 1073741824, 0)`
     * Ped will run towards the vehicle for 5 seconds and stop when time is over or when he gets 4 meters(?) around the vehicle (with duration = -1, the task duration will be ignored).
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_GO_TO_ENTITY](?\_0x6A071245EB0D1882).</strong>
     *
     * Hash: 0x374827C2
     */
    export function goToEntity(entity: number | Entity, target: number | Entity, duration: number, distance: number, speed: number): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        const _target = target instanceof Entity ? target.handle() : target;
        TaskGoToEntity(_entity, _target, duration, distance, speed, 0, 0);
    }

    /**
     * ```
     * In the scripts, p3 was always -1.
     * p3 seems to be duration or timeout of turn animation.
     * Also facingPed can be 0 or -1 so ped will just raise hands up.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_HANDS_UP](?\_0xF2EAB31979A7F910).</strong>
     *
     * Hash: 0x8DCC19C5
     */
    export function handsUp(ped: number | Ped, duration: number, facingPed: number | Ped): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        const _facingPed = facingPed instanceof Ped ? facingPed.handle() : facingPed;
        TaskHandsUp(_ped, duration, _facingPed, 0, false);
    }

    /**
     * Flags are the same flags used in [`TASK_LEAVE_VEHICLE`](#\_0xD3DBCE61A490BE02)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_LEAVE_ANY_VEHICLE](?\_0x504D54DF3F6F2247).</strong>
     *
     * Hash: 0xDBDD79FA
     */
    export function leaveAnyVehicle(ped: number | Ped, flags: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        TaskLeaveAnyVehicle(_ped, 0, flags);
    }

    /**
     * ```
     * Flags from decompiled scripts:
     * 0 = normal exit and closes door.
     * 1 = normal exit and closes door.
     * 16 = teleports outside, door kept closed.  (This flag does not seem to work for the front seats in buses, NPCs continue to exit normally)
     * 64 = normal exit and closes door, maybe a bit slower animation than 0.
     * 256 = normal exit but does not close the door.
     * 4160 = ped is throwing himself out, even when the vehicle is still.
     * 262144 = ped moves to passenger seat first, then exits normally
     * Others to be tried out: 320, 512, 131072.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_LEAVE_VEHICLE](?\_0xD3DBCE61A490BE02).</strong>
     *
     * Hash: 0x7B1141C6
     */
    export function leaveVehicle(ped: number | Ped, vehicle: number | Vehicle, flags: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        TaskLeaveVehicle(_ped, _vehicle, flags);
    }

    /**
     * [Animations list](https://alexguirre.github.io/animations-list/)
     *
     * ```cpp
     * enum eScriptedAnimFlags
     * {
     * AF_LOOPING = 1,
     * AF_HOLD_LAST_FRAME = 2,
     * AF_REPOSITION_WHEN_FINISHED = 4,
     * AF_NOT_INTERRUPTABLE = 8,
     * AF_UPPERBODY = 16,
     * AF_SECONDARY = 32,
     * AF_REORIENT_WHEN_FINISHED = 64,
     * AF_ABORT_ON_PED_MOVEMENT = 128,
     * AF_ADDITIVE = 256,
     * AF_TURN_OFF_COLLISION = 512,
     * AF_OVERRIDE_PHYSICS = 1024,
     * AF_IGNORE_GRAVITY = 2048,
     * AF_EXTRACT_INITIAL_OFFSET = 4096,
     * AF_EXIT_AFTER_INTERRUPTED = 8192,
     * AF_TAG_SYNC_IN = 16384,
     * AF_TAG_SYNC_OUT = 32768,
     * AF_TAG_SYNC_CONTINUOUS = 65536,
     * AF_FORCE_START = 131072,
     * AF_USE_KINEMATIC_PHYSICS = 262144,
     * AF_USE_MOVER_EXTRACTION = 524288,
     * AF_HIDE_WEAPON = 1048576,
     * AF_ENDS_IN_DEAD_POSE = 2097152,
     * AF_ACTIVATE_RAGDOLL_ON_COLLISION = 4194304,
     * AF_DONT_EXIT_ON_DEATH = 8388608,
     * AF_ABORT_ON_WEAPON_DAMAGE = 16777216,
     * AF_DISABLE_FORCED_PHYSICS_UPDATE = 33554432,
     * AF_PROCESS_ATTACHMENTS_ON_START = 67108864,
     * AF_EXPAND_PED_CAPSULE_FROM_SKELETON = 134217728,
     * AF_USE_ALTERNATIVE_FP_ANIM = 268435456,
     * AF_BLENDOUT_WRT_LAST_FRAME = 536870912,
     * AF_USE_FULL_BLENDING = 1073741824
     * }
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_PLAY_ANIM](?\_0xEA47FE3719165B94).</strong>
     *
     * Hash: 0x5AB552C6
     */
    export function playAnim(ped: number | Ped, animDictionary: string, animationName: string, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: number, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        TaskPlayAnim(_ped, animDictionary, animationName, blendInSpeed, blendOutSpeed, duration, flag, playbackRate, lockX, lockY, lockZ);
    }

    /**
     * Similar in functionality to [`TASK_PLAY_ANIM`](#\_0xEA47FE3719165B94), except the position and rotation parameters let you specify the initial position and rotation of the task. The ped is teleported to the position specified.
     * [Animations list](https://alexguirre.github.io/animations-list/)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_PLAY_ANIM_ADVANCED](?\_0x83CDB10EA29B370B).</strong>
     *
     * Hash: 0x3DDEB0E6
     */
    export function playAnimAdvanced(ped: number | Ped, animDictionary: string, animationName: string, pos: Vector3, rot: Vector3, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: any, animTime: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        TaskPlayAnimAdvanced(_ped, animDictionary, animationName, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, blendInSpeed, blendOutSpeed, duration, flag, animTime, undefined, undefined);
    }

    /**
     * TASK_REACT_AND_FLEE_PED
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_REACT_AND_FLEE_PED](?\_0x72C896464915D1B1).</strong>
     *
     * Hash: 0x8A632BD8
     */
    export function reactAndFleePed(ped: number | Ped, fleeTarget: number | Ped): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        const _fleeTarget = fleeTarget instanceof Ped ? fleeTarget.handle() : fleeTarget;
        TaskReactAndFleePed(_ped, _fleeTarget);
    }

    /**
     * ```
     * Firing Pattern Hash Information: https://pastebin.com/Px036isB
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_SHOOT_AT_COORD](?\_0x46A6CC01E0826106).</strong>
     *
     * Hash: 0x601C22E3
     */
    export function shootAtCoord(ped: number | Ped, pos: Vector3, duration: number, firingPattern: number | string): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        if (typeof firingPattern === 'string') firingPattern = misc.getHashKey(firingPattern)
        TaskShootAtCoord(_ped, pos.x, pos.y, pos.z, duration, firingPattern);
    }

    /**
     * ```
     * //this part of the code is to determine at which entity the player is aiming, for example if you want to create a mod where you give orders to peds
     * Entity aimedentity;
     * `Player player = PLAYER::PLAYER_ID();`
     * `PLAYER::_GET_AIMED_ENTITY(player, &aimedentity);`
     * //bg is an array of peds
     * `TASK::TASK_SHOOT_AT_ENTITY(bg[i], aimedentity, 5000, MISC::GET_HASH_KEY("FIRING_PATTERN_FULL_AUTO"));`
     * in practical usage, getting the entity the player is aiming at and then task the peds to shoot at the entity, at a button press event would be better.
     * Firing Pattern Hash Information: https://pastebin.com/Px036isB
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_SHOOT_AT_ENTITY](?\_0x08DA95E8298AE772).</strong>
     *
     * Hash: 0xAC0631C9
     */
    export function shootAtEntity(entity: number | Entity, target: number | Entity, duration: number, firingPattern: number | string): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        const _target = target instanceof Entity ? target.handle() : target;
        if (typeof firingPattern === 'string') firingPattern = misc.getHashKey(firingPattern)
        TaskShootAtEntity(_entity, _target, duration, firingPattern);
    }

    /**
     * ```
     * NativeDB Introduced: v323
     * ```
     *
     * Warp a ped into a vehicle.
     * **Note**: It's better to use [`TASK_ENTER_VEHICLE`](#\_0xC20E50AA46D09CA8) with the flag "warp" flag instead of this native.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_WARP_PED_INTO_VEHICLE](?\_0x9A7D091411C5F684).</strong>
     *
     * Hash: 0x65D4A35D
     */
    export function warpPedIntoVehicle(ped: number | Ped, vehicle: number | Vehicle, seatIndex: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        TaskWarpPedIntoVehicle(_ped, _vehicle, seatIndex);
    }

}


export namespace profiler {
    /**
     * Scope entry for profiler.
     *
     * Hash: 0xC795A4A9
     */
    export function enterScope(scopeName: string): void {
        ProfilerEnterScope(scopeName);
    }

    /**
     * Scope exit for profiler.
     *
     * Hash: 0xB39CA35C
     */
    export function exitScope(): void {
        ProfilerExitScope();
    }

    /**
     * Returns true if the profiler is active.
     *
     * Hash: 0xF8B7D7BB
     */
    export function isRecording(): boolean {
        return ProfilerIsRecording();
    }

}


// Deprecated root-level access - use namespaced functions instead
/**
 * No comment provided
 *
 * Hash: 0x91B38FB6
 * @deprecated Use entity.getRemoteSyncedScenesAllowed(entity1) instead
 */
export function getEntityRemoteSyncedScenesAllowed(entity1: number | Entity): boolean {
    return entity.getRemoteSyncedScenesAllowed(entity1);
}

/**
 * Enables or disables the owner check for the specified entity in network-synchronized scenes. When set to `false`, the entity cannot participate in synced scenes initiated by clients that do not own the entity.
 *
 * By default, this is `false` for all entities, meaning only the entity's owner can include it in networked synchronized scenes.
 *
 * Hash: 0xD3FC9D88
 * @deprecated Use entity.setRemoteSyncedScenesAllowed(entity1, allow) instead
 */
export function setEntityRemoteSyncedScenesAllowed(entity1: number | Entity, allow: boolean): void {
    return entity.setRemoteSyncedScenesAllowed(entity1, allow);
}

/**
 * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
 *
 * Hash: 0xEDBE6ADD
 * @deprecated Use entity.isPositionFrozen(entity1) instead
 */
export function isEntityPositionFrozen(entity1: number | Entity): boolean {
    return entity.isPositionFrozen(entity1);
}

/**
 * ```cpp
 * enum eApplyForceTypes {
 * APPLY_TYPE_FORCE = 0,
 * APPLY_TYPE_IMPULSE = 1,
 * APPLY_TYPE_EXTERNAL_FORCE = 2,
 * APPLY_TYPE_EXTERNAL_IMPULSE = 3,
 * APPLY_TYPE_TORQUE = 4,
 * APPLY_TYPE_ANGULAR_IMPULSE = 5
 * }
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [APPLY_FORCE_TO_ENTITY](?\_0xC5F68BE9613E2D18).</strong>
 *
 * Hash: 0xC1C0855A
 * @deprecated Use entity.applyForceTo(entity1, forceType, pos, offX, offY, offZ, nComponent, bLocalForce, bLocalOffset, bScaleByMass, bPlayAudio, bScaleByTimeWarp) instead
 */
export function applyForceToEntity(entity1: number | Entity, forceType: number, pos: Vector3, offX: number, offY: number, offZ: number, nComponent: number, bLocalForce: boolean, bLocalOffset: boolean, bScaleByMass: boolean, bPlayAudio: boolean, bScaleByTimeWarp: boolean): void {
    return entity.applyForceTo(entity1, forceType, pos, offX, offY, offZ, nComponent, bLocalForce, bLocalOffset, bScaleByMass, bPlayAudio, bScaleByTimeWarp);
}

/**
 * Deletes the specified entity.
 *
 * **NOTE**: For trains this will only work if called on the train engine, it will not work on its carriages.
 *
 * Hash: 0xFAA3D236
 * @deprecated Use entity.deleteEntity(entity1) instead
 */
export function deleteEntity(entity1: number | Entity): void {
    return entity.deleteEntity(entity1);
}

/**
 * No comment provided
 *
 * Hash: 0x3AC90869
 * @deprecated Use entity.doesExist(entity1) instead
 */
export function doesEntityExist(entity1: number | Object): boolean {
    return entity.doesExist(entity1);
}

/**
 * Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using [`SET_ENTITY_COORDS`](#\_0x06843DA7060A026B).
 *
 * <strong>This is the server-side RPC native equivalent of the client native [FREEZE_ENTITY_POSITION](?\_0x428CA6DBD1094446).</strong>
 *
 * Hash: 0x65C16D57
 * @deprecated Use entity.freezePosition(entity1, toggle) instead
 */
export function freezeEntityPosition(entity1: number | Entity, toggle: boolean): void {
    return entity.freezePosition(entity1, toggle);
}

/**
 * Gets the entity that this entity is attached to.
 *
 * Hash: 0xFE1589F9
 * @deprecated Use entity.getAttachedTo(entity1) instead
 */
export function getEntityAttachedTo(entity1: number | Entity): number {
    return entity.getAttachedTo(entity1);
}

/**
 * No comment provided
 *
 * Hash: 0xE8C0C629
 * @deprecated Use entity.getCollisionDisabled(entity1) instead
 */
export function getEntityCollisionDisabled(entity1: number | Entity): boolean {
    return entity.getCollisionDisabled(entity1);
}

/**
 * Gets the current coordinates for a specified entity. This native is used server side when using OneSync.
 *
 * See [GET_ENTITY_COORDS](#\_0x3FEF770D40960D5A) for client side.
 *
 * Hash: 0x1647F1CB
 * @deprecated Use entity.getCoords(entity1) instead
 */
export function getEntityCoords(entity1: number | Entity): Vector3 {
    return entity.getCoords(entity1);
}

/**
 * No comment provided
 *
 * Hash: 0x972CC383
 * @deprecated Use entity.getHeading(entity1) instead
 */
export function getEntityHeading(entity1: number | Entity): number {
    return entity.getHeading(entity1);
}

/**
 * Only works for vehicle and peds
 *
 * Hash: 0x8E3222B7
 * @deprecated Use entity.getHealth(entity1) instead
 */
export function getEntityHealth(entity1: number | Entity): number {
    return entity.getHealth(entity1);
}

/**
 * Currently it only works with peds.
 *
 * Hash: 0xC7AE6AA1
 * @deprecated Use entity.getMaxHealth(entity1) instead
 */
export function getEntityMaxHealth(entity1: number | Entity): number {
    return entity.getMaxHealth(entity1);
}

/**
 * No comment provided
 *
 * Hash: 0xDAFCB3EC
 * @deprecated Use entity.getModel(entity1) instead
 */
export function getEntityModel(entity1: number | Entity): number {
    return entity.getModel(entity1);
}

/**
 * No comment provided
 *
 * Hash: 0xD16EA02F
 * @deprecated Use entity.getOrphanMode(entity1) instead
 */
export function getEntityOrphanMode(entity1: number | Entity): number {
    return entity.getOrphanMode(entity1);
}

/**
 * This native gets an entity's population type.
 *
 * Hash: 0xFC30DDFF
 * @deprecated Use entity.getPopulationType(entity1) instead
 */
export function getEntityPopulationType(entity1: number | Entity): number {
    return entity.getPopulationType(entity1);
}

/**
 * No comment provided
 *
 * Hash: 0x8FF45B04
 * @deprecated Use entity.getRotation(entity1) instead
 */
export function getEntityRotation(entity1: number | Entity): Vector3 {
    return entity.getRotation(entity1);
}

/**
 * No comment provided
 *
 * Hash: 0x9BF8A73F
 * @deprecated Use entity.getRotationVelocity(entity1) instead
 */
export function getEntityRotationVelocity(entity1: number | Entity): Vector3 {
    return entity.getRotationVelocity(entity1);
}

/**
 * Gets the routing bucket for the specified entity.
 *
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 *
 * Hash: 0xED4B0486
 * @deprecated Use entity.getRoutingBucket(entity1) instead
 */
export function getEntityRoutingBucket(entity1: number | Entity): number {
    return entity.getRoutingBucket(entity1);
}

/**
 * No comment provided
 *
 * Hash: 0xB7F70784
 * @deprecated Use entity.getScript(entity1) instead
 */
export function getEntityScript(entity1: number | Entity): string {
    return entity.getScript(entity1);
}

/**
 * Gets the current speed of the entity in meters per second.
 *
 * ```
 * To convert to MPH: speed * 2.236936
 * To convert to KPH: speed * 3.6
 * ```
 *
 * Hash: 0x9E1E4798
 * @deprecated Use entity.getSpeed(entity1) instead
 */
export function getEntitySpeed(entity1: number | Entity): number {
    return entity.getSpeed(entity1);
}

/**
 * Gets the entity type (as an integer), which can be one of the following defined down below:
 *
 * <strong>The following entities will return type `1`:</strong>
 *
 * *   Ped
 * *   Player
 * *   Animal (Red Dead Redemption 2)
 * *   Horse (Red Dead Redemption 2)
 *
 * <strong>The following entities will return type `2`:</strong>
 *
 * *   Automobile
 * *   Bike
 * *   Boat
 * *   Heli
 * *   Plane
 * *   Submarine
 * *   Trailer
 * *   Train
 * *   DraftVeh (Red Dead Redemption 2)
 *
 * <strong>The following entities will return type `3`:</strong>
 *
 * *   Object
 * *   Door
 * *   Pickup
 *
 * Otherwise, a value of `0` will be returned.
 *
 * Hash: 0xB1BD08D
 * @deprecated Use entity.getType(entity1) instead
 */
export function getEntityType(entity1: number | Entity): number {
    return entity.getType(entity1);
}

/**
 * No comment provided
 *
 * Hash: 0xC14C9B6B
 * @deprecated Use entity.getVelocity(entity1) instead
 */
export function getEntityVelocity(entity1: number | Entity): Vector3 {
    return entity.getVelocity(entity1);
}

/**
 * Gets the specific entity type (as an integer), which can be one of the following defined down below:
 *
 * #### FiveM:
 *
 * ```cpp
 * enum eNetObjEntityType
 * {
 * Automobile = 0,
 * Bike = 1,
 * Boat = 2,
 * Door = 3,
 * Heli = 4,
 * Object = 5,
 * Ped = 6,
 * Pickup = 7,
 * PickupPlacement = 8,
 * Plane = 9,
 * Submarine = 10,
 * Player = 11,
 * Trailer = 12,
 * Train = 13
 * };
 * ```
 *
 * #### RedM:
 *
 * ```cpp
 * enum eNetObjEntityType
 * {
 * Animal = 0,
 * Automobile = 1,
 * Bike = 2,
 * Boat = 3,
 * Door = 4,
 * Heli = 5,
 * Object = 6,
 * Ped = 7,
 * Pickup = 8,
 * PickupPlacement = 9,
 * Plane = 10,
 * Submarine = 11,
 * Player = 12,
 * Trailer = 13,
 * Train = 14,
 * DraftVeh = 15,
 * StatsTracker = 16,
 * PropSet = 17,
 * AnimScene = 18,
 * GroupScenario = 19,
 * Herd = 20,
 * Horse = 21,
 * WorldState = 22,
 * WorldProjectile = 23,
 * Incident = 24,
 * Guardzone = 25,
 * PedGroup = 26,
 * CombatDirector = 27,
 * PedSharedTargeting = 28,
 * Persistent = 29
 * };
 * ```
 *
 * Hash: 0x23B2A641
 * @deprecated Use entity.getNetTypeFrom(entity1) instead
 */
export function getNetTypeFromEntity(entity1: number | Entity): number {
    return entity.getNetTypeFrom(entity1);
}

/**
 * No comment provided
 *
 * Hash: 0x9C9A3BE0
 * @deprecated Use entity.hasBeenMarkedAsNoLongerNeeded(vehicle) instead
 */
export function hasEntityBeenMarkedAsNoLongerNeeded(vehicle: number | Vehicle): boolean {
    return entity.hasBeenMarkedAsNoLongerNeeded(vehicle);
}

/**
 * This native checks if the given entity is visible.
 *
 * Hash: 0x120B4ED5
 * @deprecated Use entity.isVisible(entity1) instead
 */
export function isEntityVisible(entity1: number | Entity): boolean {
    return entity.isVisible(entity1);
}

/**
 * Sets the coordinates (world position) for a specified entity, offset by the radius of the entity on the Z axis.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_COORDS](?\_0x06843DA7060A026B).</strong>
 *
 * Hash: 0xDF70B41B
 * @deprecated Use entity.setCoords(entity1, pos, alive, deadFlag, ragdollFlag, clearArea) instead
 */
export function setEntityCoords(entity1: number | Entity, pos: Vector3, alive: boolean, deadFlag: boolean, ragdollFlag: boolean, clearArea: boolean): void {
    return entity.setCoords(entity1, pos, alive, deadFlag, ragdollFlag, clearArea);
}

/**
 * It overrides the default distance culling radius of an entity. Set to `0.0` to reset.
 * If you want to interact with an entity outside of your players' scopes set the radius to a huge number.
 *
 * **WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
 *
 * Hash: 0xD3A183A3
 * @deprecated Use entity.setDistanceCullingRadius(entity1, radius) instead
 */
export function setEntityDistanceCullingRadius(entity1: number | Entity, radius: number): void {
    return entity.setDistanceCullingRadius(entity1, radius);
}

/**
 * Set the heading of an entity in degrees also known as "Yaw".
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_HEADING](?\_0x8E2530AA8ADA980E).</strong>
 *
 * Hash: 0xE0FF064D
 * @deprecated Use entity.setHeading(entity1, heading) instead
 */
export function setEntityHeading(entity1: number | Entity, heading: number): void {
    return entity.setHeading(entity1, heading);
}

/**
 * It allows to flag an entity to ignore the request control filter policy.
 *
 * Hash: 0x9F7F8D36
 * @deprecated Use entity.setIgnoreRequestControlFilter(entity1, ignore) instead
 */
export function setEntityIgnoreRequestControlFilter(entity1: number | Entity, ignore: boolean): void {
    return entity.setIgnoreRequestControlFilter(entity1, ignore);
}

/**
 * ```cpp
 * enum EntityOrphanMode {
 * // Default, this will delete the entity when it isn't relevant to any players
 * // NOTE: this *doesn't* mean when they're no longer in scope
 * DeleteWhenNotRelevant = 0,
 * // The entity will be deleted whenever its original owner disconnects
 * // NOTE: if this is set when the entities original owner has already left it will be
 * // marked for deletion (similar to just calling DELETE_ENTITY)
 * DeleteOnOwnerDisconnect = 1,
 * // The entity will never be deleted by the server when it does relevancy checks
 * // you should only use this on entities that need to be relatively persistent
 * KeepEntity = 2
 * }
 * ```
 *
 * Sets what the server will do when the entity no longer has its original owner. By default the server will cleanup entities that it considers "no longer relevant".
 *
 * When used on trains, this native will recursively call onto all attached carriages.
 *
 * **NOTE**: When used with `KeepEntity` (2) this native only guarantees that the ***server*** will not delete the entity, client requests to delete the entity will still work perfectly fine.
 *
 * Hash: 0x489E9162
 * @deprecated Use entity.setOrphanMode(entity1, orphanMode) instead
 */
export function setEntityOrphanMode(entity1: number | Entity, orphanMode: number): void {
    return entity.setOrphanMode(entity1, orphanMode);
}

/**
 * Sets the rotation of a specified entity in the game world.
 *
 * ```
 * NativeDB Introduced: v323
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_ROTATION](?\_0x8524A8B0171D5E07).</strong>
 *
 * Hash: 0xA345EFE
 * @deprecated Use entity.setRotation(entity1, pitch, roll, yaw, rotationOrder, bDeadCheck) instead
 */
export function setEntityRotation(entity1: number | Entity, pitch: number, roll: number, yaw: number, rotationOrder: number, bDeadCheck: boolean): void {
    return entity.setRotation(entity1, pitch, roll, yaw, rotationOrder, bDeadCheck);
}

/**
 * Sets the routing bucket for the specified entity.
 *
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 *
 * Hash: 0x635E5289
 * @deprecated Use entity.setRoutingBucket(entity1, bucket) instead
 */
export function setEntityRoutingBucket(entity1: number | Entity, bucket: number): void {
    return entity.setRoutingBucket(entity1, bucket);
}

/**
 * ```
 * Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_VELOCITY](?\_0x1C99BB7B6E96D16F).</strong>
 *
 * Hash: 0xFF5A1988
 * @deprecated Use entity.setVelocity(entity1, pos) instead
 */
export function setEntityVelocity(entity1: number | Entity, pos: Vector3): void {
    return entity.setVelocity(entity1, pos);
}

/**
 * Internal function for ensuring an entity has a state bag.
 *
 * Hash: 0x3BB78F05
 * @deprecated Use entity.ensureStateBag(entity1) instead
 */
export function ensureEntityStateBag(entity1: number | Entity): void {
    return entity.ensureStateBag(entity1);
}

/**
 * ### Supported types
 *
 * *   \[1] : Peds (including animals) and players.
 * *   \[2] : Vehicles.
 * *   \[3] : Objects (props), doors, and projectiles.
 *
 * ### Coordinates need to be send unpacked (x,y,z)
 *
 * ```lua
 *
 * -- Define the allowed model hashes
 * local allowedModelHashes = { GetHashKey("p_crate03x"), GetHashKey("p_crate22x") }
 *
 * -- Get the player's current coordinates
 * local playerCoords = GetEntityCoords(PlayerPedId())
 *
 * -- Retrieve all entities of type Object (type 3) within a radius of 10.0 units
 * -- that match the allowed model hashes
 * -- and sort output entities by distance
 * local entities = GetEntitiesInRadius(playerCoords.x, playerCoords.y, playerCoords.z, 10.0, 3, true, allowedModelHashes)
 *
 * -- Iterate through the list of entities and print their ids
 * for i = 1, #entities do
 * local entity = entities[i]
 * print(entity)
 * end
 *
 * ```
 *
 * Hash: 0xDFFBA12F
 * @deprecated Use entity.getEntitiesInRadius(pos, radius, entityType, sortByDistance, models) instead
 */
export function getEntitiesInRadius(pos: Vector3, radius: number, entityType: number, sortByDistance: boolean, models: number | Object): number {
    return entity.getEntitiesInRadius(pos, radius, entityType, sortByDistance, models);
}

/**
 * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](#\_0x5BA35AAF).
 *
 * Hash: 0x4BDF1867
 * @deprecated Use entity.getFromStateBagName(bagName) instead
 */
export function getEntityFromStateBagName(bagName: string): number {
    return entity.getFromStateBagName(bagName);
}

/**
 * Creates a blip for the specified coordinates. You can use `SET_BLIP_` natives to change the blip.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_COORD](?\_0x5A039BB0BCA604B6).</strong>
 *
 * Hash: 0xC6F43D0E
 * @deprecated Use hud.addBlipForCoord(pos) instead
 */
export function addBlipForCoord(pos: Vector3): number {
    return hud.addBlipForCoord(pos);
}

/**
 * Create a blip that by default is red (enemy), you can use [SET_BLIP_AS_FRIENDLY](#\_0xC6F43D0E) to make it blue (friend).\
 * Can be used for objects, vehicles and peds.
 * Example of enemy:
 * ![enemy](https://i.imgur.com/fl78svv.png)
 * Example of friend:
 * ![friend](https://i.imgur.com/Q16ho5d.png)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_ENTITY](?\_0x5CDE92C702A8FCE7).</strong>
 *
 * Hash: 0x30822554
 * @deprecated Use hud.addBlipForEntity(entity) instead
 */
export function addBlipForEntity(entity: number | Entity): number {
    return hud.addBlipForEntity(entity);
}

/**
 * Create a blip with a radius for the specified coordinates (it doesnt create the blip sprite, so you need to use [AddBlipCoords](#\_0xC6F43D0E))
 * Example image:
 * ![example](https://i.imgur.com/9hQl3DB.png)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_RADIUS](?\_0x46818D79B1F7499A).</strong>
 *
 * Hash: 0x4626756C
 * @deprecated Use hud.addBlipForRadius(pos, radius) instead
 */
export function addBlipForRadius(pos: Vector3, radius: number): number {
    return hud.addBlipForRadius(pos, radius);
}

/**
 * Removes the blip from your map.
 * **Note:** This function only works on the script that created the blip, if you wish to remove blips created by other scripts, see [`SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT`](#\_0x86A652570E5F25DD).
 *
 * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_BLIP](?\_0x86A652570E5F25DD).</strong>
 *
 * Hash: 0xD8C3C1CD
 * @deprecated Use hud.removeBlip(blip) instead
 */
export function removeBlip(blip: number | Blip): void {
    return hud.removeBlip(blip);
}

/**
 * Sets the displayed sprite for a specific blip.
 * There's a [list of sprites](https://docs.fivem.net/game-references/blips/) on the FiveM documentation site.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_BLIP_SPRITE](?\_0xDF735600A4696DAF).</strong>
 *
 * Hash: 0x8DBBB0B9
 * @deprecated Use hud.setBlipSprite(blip, spriteId) instead
 */
export function setBlipSprite(blip: number | Blip, spriteId: number): void {
    return hud.setBlipSprite(blip, spriteId);
}

/**
 * Adds a rectangular blip for the specified coordinates/area.
 * It is recommended to use [SET_BLIP_ROTATION](#\_0xF87683CDF73C3F6E) and [SET_BLIP_COLOUR](#\_0x03D7FB09E75D6B7E) to make the blip not rotate along with the camera.
 * By default, the blip will show as a *regular* blip with the specified color/sprite if it is outside of the minimap view.
 * Example image:
 * ![minimap](https://i.imgur.com/qLbXWcQ.png)
 * ![big map](https://i.imgur.com/0j7O7Rh.png)
 * (Native name is *likely* to actually be ADD_BLIP_FOR_AREA, but due to the usual reasons this can't be confirmed)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [\_ADD_BLIP_FOR_AREA](?\_0xCE5D0E5E315DB238).</strong>
 *
 * Hash: 0x6228F159
 * @deprecated Use hud.addBlipForArea(pos, width, height) instead
 */
export function addBlipForArea(pos: Vector3, width: number, height: number): number {
    return hud.addBlipForArea(pos, width, height);
}

/**
 * No comment provided
 *
 * Hash: 0xF97B1C93
 * @deprecated Use misc.enableEnhancedHostSupport(enabled) instead
 */
export function enableEnhancedHostSupport(enabled: boolean): void {
    return misc.enableEnhancedHostSupport(enabled);
}

/**
 * No comment provided
 *
 * Hash: 0x13B6855D
 * @deprecated Use misc.flagServerAsPrivate(private_) instead
 */
export function flagServerAsPrivate(private_: boolean): void {
    return misc.flagServerAsPrivate(private_);
}

/**
 * Returns the current console output buffer.
 *
 * Hash: 0xE57429FA
 * @deprecated Use misc.getConsoleBuffer() instead
 */
export function getConsoleBuffer(): string {
    return misc.getConsoleBuffer();
}

/**
 * Gets the current game timer in milliseconds.
 *
 * Hash: 0xA4EA0691
 * @deprecated Use misc.getGameTimer() instead
 */
export function getGameTimer(): number {
    return misc.getGameTimer();
}

/**
 * This native converts the passed string to a hash.
 *
 * Hash: 0x98EFF6F1
 * @deprecated Use misc.getHashKey(model) instead
 */
export function getHashKey(model: string): number {
    return misc.getHashKey(model);
}

/**
 * No comment provided
 *
 * Hash: 0xF01E2AAB
 * @deprecated Use misc.getHeliMainRotorHealth(vehicle) instead
 */
export function getHeliMainRotorHealth(vehicle: number | Vehicle): number {
    return misc.getHeliMainRotorHealth(vehicle);
}

/**
 * No comment provided
 *
 * Hash: 0x5F70F5A3
 * @deprecated Use misc.getHostId() instead
 */
export function getHostId(): string {
    return misc.getHostId();
}

/**
 * No comment provided
 *
 * Hash: 0x23473EA4
 * @deprecated Use misc.getPasswordHash(password) instead
 */
export function getPasswordHash(password: string): string {
    return misc.getPasswordHash(password);
}

/**
 * No comment provided
 *
 * Hash: 0x76876154
 * @deprecated Use misc.isFlashLightOn(ped) instead
 */
export function isFlashLightOn(ped: number | Ped): boolean {
    return misc.isFlashLightOn(ped);
}

/**
 * No comment provided
 *
 * Hash: 0x8E8CC653
 * @deprecated Use misc.performHttpRequestInternal(requestData, requestDataLength) instead
 */
export function performHttpRequestInternal(requestData: string, requestDataLength: number): number {
    return misc.performHttpRequestInternal(requestData, requestDataLength);
}

/**
 * No comment provided
 *
 * Hash: 0x6B171E87
 * @deprecated Use misc.performHttpRequestInternalEx(requestData) instead
 */
export function performHttpRequestInternalEx(requestData: number | Object): number {
    return misc.performHttpRequestInternalEx(requestData);
}

/**
 * Prints 'structured trace' data to the server `file descriptor 3` channel. This is not generally useful outside of
 * server monitoring utilities.
 *
 * Hash: 0x90892DED
 * @deprecated Use misc.printStructuredTrace(jsonString) instead
 */
export function printStructuredTrace(jsonString: string): void {
    return misc.printStructuredTrace(jsonString);
}

/**
 * Registers a listener for console output messages.
 *
 * Hash: 0x281B5448
 * @deprecated Use misc.registerConsoleListener(listener) instead
 */
export function registerConsoleListener(listener: Function): void {
    return misc.registerConsoleListener(listener);
}

/**
 * No comment provided
 *
 * Hash: 0x341B16D2
 * @deprecated Use misc.setConvar(varName, value) instead
 */
export function setConvar(varName: string, value: string): void {
    return misc.setConvar(varName, value);
}

/**
 * Used to replicate a server variable onto clients.
 *
 * Hash: 0xF292858C
 * @deprecated Use misc.setConvarReplicated(varName, value) instead
 */
export function setConvarReplicated(varName: string, value: string): void {
    return misc.setConvarReplicated(varName, value);
}

/**
 * No comment provided
 *
 * Hash: 0x9338D547
 * @deprecated Use misc.setConvarServerInfo(varName, value) instead
 */
export function setConvarServerInfo(varName: string, value: string): void {
    return misc.setConvarServerInfo(varName, value);
}

/**
 * No comment provided
 *
 * Hash: 0xF90B7469
 * @deprecated Use misc.setGameType(gametypeName) instead
 */
export function setGameType(gametypeName: string): void {
    return misc.setGameType(gametypeName);
}

/**
 * Sets the handler for HTTP requests made to the executing resource.
 *
 * Example request URL: `http://localhost:30120/http-test/ping` - this request will be sent to the `http-test` resource with the `/ping` path.
 *
 * The handler function assumes the following signature:
 *
 * ```ts
 * function HttpHandler(
 * request: {
 * address: string;
 * headers: Record<string, string>;
 * method: string;
 * path: string;
 * setDataHandler(handler: (data: string) => void): void;
 * setDataHandler(handler: (data: ArrayBuffer) => void, binary: 'binary'): void;
 * setCancelHandler(handler: () => void): void;
 * },
 * response: {
 * writeHead(code: number, headers?: Record<string, string | string[]>): void;
 * write(data: string): void;
 * send(data?: string): void;
 * }
 * ): void;
 * ```
 *
 * *   **request**: The request object.
 * *   **address**: The IP address of the request sender.
 * *   **path**: The path to where the request was sent.
 * *   **headers**: The headers sent with the request.
 * *   **method**: The request method.
 * *   **setDataHandler**: Sets the handler for when a data body is passed with the request. Additionally you can pass the `'binary'` argument to receive a `BufferArray` in JavaScript or `System.Byte[]` in C# (has no effect in Lua).
 * *   **setCancelHandler**: Sets the handler for when the request is cancelled.
 * *   **response**: An object to control the response.
 * *   **writeHead**: Sets the status code & headers of the response. Can be only called once and won't work if called after running other response functions.
 * *   **write**: Writes to the response body without sending it. Can be called multiple times.
 * *   **send**: Writes to the response body and then sends it along with the status code & headers, finishing the request.
 *
 * Hash: 0xF5C6330C
 * @deprecated Use misc.setHttpHandler(handler) instead
 */
export function setHttpHandler(handler: Function): void {
    return misc.setHttpHandler(handler);
}

/**
 * No comment provided
 *
 * Hash: 0xB7BA82DC
 * @deprecated Use misc.setMapName(mapName) instead
 */
export function setMapName(mapName: string): void {
    return misc.setMapName(mapName);
}

/**
 * Sets the entity lockdown mode for a specific routing bucket.
 *
 * Lockdown modes are:
 *
 * | Mode       | Meaning                                                    |
 * | ---------- | ---------------------------------------------------------- |
 * | `strict`   | No entities can be created by clients at all.              |
 * | `relaxed`  | Only script-owned entities created by clients are blocked. |
 * | `inactive` | Clients can create any entity they want.                   |
 *
 * Hash: 0xA0F2201F
 * @deprecated Use misc.setRoutingBucketEntityLockdownMode(bucketId, mode) instead
 */
export function setRoutingBucketEntityLockdownMode(bucketId: number, mode: string): void {
    return misc.setRoutingBucketEntityLockdownMode(bucketId, mode);
}

/**
 * Sets whether or not the specified routing bucket has automatically-created population enabled.
 *
 * Hash: 0xCE51AC2C
 * @deprecated Use misc.setRoutingBucketPopulationEnabled(bucketId, mode) instead
 */
export function setRoutingBucketPopulationEnabled(bucketId: number, mode: boolean): void {
    return misc.setRoutingBucketPopulationEnabled(bucketId, mode);
}

/**
 * The backing function for TriggerClientEvent.
 *
 * Hash: 0x2F7A49E6
 * @deprecated Use misc.triggerClientEventInternal(eventName, eventTarget, eventPayload, payloadLength) instead
 */
export function triggerClientEventInternal(eventName: string, eventTarget: string, eventPayload: string, payloadLength: number): void {
    return misc.triggerClientEventInternal(eventName, eventTarget, eventPayload, payloadLength);
}

/**
 * The backing function for TriggerLatentClientEvent.
 *
 * Hash: 0x70B35890
 * @deprecated Use misc.triggerLatentClientEventInternal(eventName, eventTarget, eventPayload, payloadLength, bps) instead
 */
export function triggerLatentClientEventInternal(eventName: string, eventTarget: string, eventPayload: string, payloadLength: number, bps: number): void {
    return misc.triggerLatentClientEventInternal(eventName, eventTarget, eventPayload, payloadLength, bps);
}

/**
 * No comment provided
 *
 * Hash: 0x2E310ACD
 * @deprecated Use misc.verifyPasswordHash(password, hash) instead
 */
export function verifyPasswordHash(password: string, hash: string): boolean {
    return misc.verifyPasswordHash(password, hash);
}

/**
 * Adds a listener for Console Variable changes.
 *
 * The function called expects to match the following signature:
 *
 * ```ts
 * function ConVarChangeListener(conVarName: string, reserved: any);
 * ```
 *
 * *   **conVarName**: The ConVar that changed.
 * *   **reserved**: Currently unused.
 *
 * Hash: 0xAB7F7241
 * @deprecated Use misc.addConvarChangeListener(conVarFilter, handler) instead
 */
export function addConvarChangeListener(conVarFilter: string, handler: Function): number {
    return misc.addConvarChangeListener(conVarFilter, handler);
}

/**
 * Adds a handler for changes to a state bag.
 *
 * The function called expects to match the following signature:
 *
 * ```ts
 * function StateBagChangeHandler(bagName: string, key: string, value: any, reserved: number, replicated: boolean);
 * ```
 *
 * *   **bagName**: The internal bag ID for the state bag which changed. This is usually `player:Source`, `entity:NetID`
 * or `localEntity:Handle`.
 * *   **key**: The changed key.
 * *   **value**: The new value stored at key. The old value is still stored in the state bag at the time this callback executes.
 * *   **reserved**: Currently unused.
 * *   **replicated**: Whether the set is meant to be replicated.
 *
 * At this time, the change handler can't opt to reject changes.
 *
 * If bagName refers to an entity, use [GET_ENTITY_FROM_STATE_BAG_NAME](#\_0x4BDF1867) to get the entity handle
 * If bagName refers to a player, use [GET_PLAYER_FROM_STATE_BAG_NAME](#\_0xA56135E0) to get the player handle
 *
 * Hash: 0x5BA35AAF
 * @deprecated Use misc.addStateBagChangeHandler(keyFilter, bagFilter, handler) instead
 */
export function addStateBagChangeHandler(keyFilter: string, bagFilter: string, handler: Function): number {
    return misc.addStateBagChangeHandler(keyFilter, bagFilter, handler);
}

/**
 * Cancels the currently executing event.
 *
 * Hash: 0xFA29D35D
 * @deprecated Use misc.cancelEvent() instead
 */
export function cancelEvent(): void {
    return misc.cancelEvent();
}

/**
 * No comment provided
 *
 * Hash: 0x1E86F206
 * @deprecated Use misc.deleteFunctionReference(referenceIdentity) instead
 */
export function deleteFunctionReference(referenceIdentity: string): void {
    return misc.deleteFunctionReference(referenceIdentity);
}

/**
 * No comment provided
 *
 * Hash: 0xF4E2079D
 * @deprecated Use misc.duplicateFunctionReference(referenceIdentity) instead
 */
export function duplicateFunctionReference(referenceIdentity: string): string {
    return misc.duplicateFunctionReference(referenceIdentity);
}

/**
 * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
 *
 * Hash: 0x561C060B
 * @deprecated Use misc.executeCommand(commandString) instead
 */
export function executeCommand(commandString: string): void {
    return misc.executeCommand(commandString);
}

/**
 * An internal function for converting a stack trace object to a string.
 *
 * Hash: 0xD70C3BCA
 * @deprecated Use misc.formatStackTrace(traceData) instead
 */
export function formatStackTrace(traceData: number | Object): string {
    return misc.formatStackTrace(traceData);
}

/**
 * Can be used to get a console variable of type `char*`, for example a string.
 *
 * Hash: 0x6CCD2564
 * @deprecated Use misc.getConvar(varName, default_) instead
 */
export function getConvar(varName: string, default_: string): string {
    return misc.getConvar(varName, default_);
}

/**
 * Can be used to get a console variable casted back to `bool`.
 *
 * Hash: 0x7E8EBFE5
 * @deprecated Use misc.getConvarBool(varName, defaultValue) instead
 */
export function getConvarBool(varName: string, defaultValue: boolean): boolean {
    return misc.getConvarBool(varName, defaultValue);
}

/**
 * This will have floating point inaccuracy.
 *
 * Hash: 0x9E666D
 * @deprecated Use misc.getConvarFloat(varName, defaultValue) instead
 */
export function getConvarFloat(varName: string, defaultValue: number): number {
    return misc.getConvarFloat(varName, defaultValue);
}

/**
 * Can be used to get a console variable casted back to `int` (an integer value).
 *
 * Hash: 0x935C0AB2
 * @deprecated Use misc.getConvarInt(varName, default_) instead
 */
export function getConvarInt(varName: string, default_: number): number {
    return misc.getConvarInt(varName, default_);
}

/**
 * Returns the internal build number of the current game being executed.
 *
 * Possible values:
 *
 * *   FiveM
 * *   1604
 * *   2060
 * *   2189
 * *   2372
 * *   2545
 * *   2612
 * *   2699
 * *   2802
 * *   2944
 * *   3095
 * *   3258
 * *   3323
 * *   3407
 * *   3570
 * *   RedM
 * *   1311
 * *   1355
 * *   1436
 * *   1491
 * *   LibertyM
 * *   43
 * *   FXServer
 * *   0
 *
 * Hash: 0x804B9F7B
 * @deprecated Use misc.getGameBuildNumber() instead
 */
export function getGameBuildNumber(): number {
    return misc.getGameBuildNumber();
}

/**
 * Returns the current game being executed.
 *
 * Possible values:
 *
 * | Return value | Meaning                        |
 * | ------------ | ------------------------------ |
 * | `fxserver`   | Server-side code ('Duplicity') |
 * | `fivem`      | FiveM for GTA V                |
 * | `libertym`   | LibertyM for GTA IV            |
 * | `redm`       | RedM for Red Dead Redemption 2 |
 *
 * Hash: 0xE8EAA18B
 * @deprecated Use misc.getGameName() instead
 */
export function getGameName(): string {
    return misc.getGameName();
}

/**
 * Returns a list of entity handles (script GUID) for all entities in the specified pool - the data returned is an array as
 * follows:
 *
 * ```json
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 *
 * ### Supported pools
 *
 * *   `CPed`: Peds (including animals) and players.
 * *   `CObject`: Objects (props), doors, and projectiles.
 * *   `CNetObject`: Networked objects
 * *   `CVehicle`: Vehicles.
 * *   `CPickup`: Pickups.
 *
 * Hash: 0x2B9D4F50
 * @deprecated Use misc.getGamePool(poolName) instead
 */
export function getGamePool(poolName: string): number {
    return misc.getGamePool(poolName);
}

/**
 * No comment provided
 *
 * Hash: 0x9F1C4383
 * @deprecated Use misc.getInstanceId() instead
 */
export function getInstanceId(): number {
    return misc.getInstanceId();
}

/**
 * Returns all commands that are registered in the command system.
 * The data returned adheres to the following layout:
 *
 * ```
 * [
 * {
 * "name": "cmdlist",
 * "resource": "resource",
 * "arity" = -1,
 * },
 * {
 * "name": "command1"
 * "resource": "resource_2",
 * "arity" = -1,
 * }
 * ]
 * ```
 *
 * Hash: 0xD4BEF069
 * @deprecated Use misc.getRegisteredCommands() instead
 */
export function getRegisteredCommands(): number {
    return misc.getRegisteredCommands();
}

/**
 * No comment provided
 *
 * Hash: 0x78D864C7
 * @deprecated Use misc.getStateBagKeys(bagName) instead
 */
export function getStateBagKeys(bagName: string): number {
    return misc.getStateBagKeys(bagName);
}

/**
 * Returns the value of a state bag key.
 *
 * Hash: 0x637F4C75
 * @deprecated Use misc.getStateBagValue(bagName, key) instead
 */
export function getStateBagValue(bagName: string, key: string): number {
    return misc.getStateBagValue(bagName, key);
}

/**
 * No comment provided
 *
 * Hash: 0x7EBB9929
 * @deprecated Use misc.isAceAllowed(_object) instead
 */
export function isAceAllowed(_object: string): boolean {
    return misc.isAceAllowed(_object);
}

/**
 * Gets whether or not this is the CitizenFX server.
 *
 * Hash: 0xCF24C52E
 * @deprecated Use misc.isDuplicityVersion() instead
 */
export function isDuplicityVersion(): boolean {
    return misc.isDuplicityVersion();
}

/**
 * No comment provided
 *
 * Hash: 0x37CF52CE
 * @deprecated Use misc.isPrincipalAceAllowed(principal, _object) instead
 */
export function isPrincipalAceAllowed(principal: string, _object: string): boolean {
    return misc.isPrincipalAceAllowed(principal, _object);
}

/**
 * Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). Or by entering them in the server console/through an RCON client (only works for server side registered commands). Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a `/`.
 *
 * Commands registered using this function can also be executed by resources, using the [`ExecuteCommand` native](#\_0x561C060B).
 *
 * The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).
 *
 * **Example result**:
 *
 * ![](https://i.imgur.com/TaCnG09.png)
 *
 * Hash: 0x5FA79B0F
 * @deprecated Use misc.registerCommand(commandName, handler, restricted) instead
 */
export function registerCommand(commandName: string, handler: Function, restricted: boolean): void {
    return misc.registerCommand(commandName, handler, restricted);
}

/**
 * No comment provided
 *
 * Hash: 0xEAC49841
 * @deprecated Use misc.removeConvarChangeListener(cookie) instead
 */
export function removeConvarChangeListener(cookie: number): void {
    return misc.removeConvarChangeListener(cookie);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Removes a handler for changes to a state bag.
 *
 * Hash: 0xD36BE661
 * @deprecated Use misc.removeStateBagChangeHandler(cookie) instead
 */
export function removeStateBagChangeHandler(cookie: number): void {
    return misc.removeStateBagChangeHandler(cookie);
}

/**
 * Internal function for setting a state bag value.
 *
 * Hash: 0x8D50E33A
 * @deprecated Use misc.setStateBagValue(bagName, keyName, valueData, valueLength, replicated) instead
 */
export function setStateBagValue(bagName: string, keyName: string, valueData: string, valueLength: number, replicated: boolean): void {
    return misc.setStateBagValue(bagName, keyName, valueData, valueLength, replicated);
}

/**
 * No comment provided
 *
 * Hash: 0x12A330
 * @deprecated Use misc.stateBagHasKey(bagName, key) instead
 */
export function stateBagHasKey(bagName: string, key: string): boolean {
    return misc.stateBagHasKey(bagName, key);
}

/**
 * The backing function for TriggerEvent.
 *
 * Hash: 0x91310870
 * @deprecated Use misc.triggerEventInternal(eventName, eventPayload, payloadLength) instead
 */
export function triggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void {
    return misc.triggerEventInternal(eventName, eventPayload, payloadLength);
}

/**
 * Returns whether or not the currently executing event was canceled.
 *
 * Hash: 0x58382A19
 * @deprecated Use misc.wasEventCanceled() instead
 */
export function wasEventCanceled(): boolean {
    return misc.wasEventCanceled();
}

/**
 * ```
 * Applies an Item from a PedDecorationCollection to a ped. These include tattoos and shirt decals.
 * collection - PedDecorationCollection filename hash
 * overlay - Item name hash
 * Example:
 * Entry inside "mpbeach_overlays.xml" -
 * <Item>
 * <uvPos x="0.500000" y="0.500000" />
 * <scale x="0.600000" y="0.500000" />
 * <rotation value="0.000000" />
 * <nameHash>FM_Hair_Fuzz</nameHash>
 * <txdHash>mp_hair_fuzz</txdHash>
 * <txtHash>mp_hair_fuzz</txtHash>
 * <zone>ZONE_HEAD</zone>
 * <type>TYPE_TATTOO</type>
 * <faction>FM</faction>
 * <garment>All</garment>
 * <gender>GENDER_DONTCARE</gender>
 * <award />
 * <awardLevel />
 * </Item>
 * Code:
 * `PED::_0x5F5D1665E352A839(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("mpbeach_overlays"), MISC::GET_HASH_KEY("fm_hair_fuzz"))`
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [ADD_PED_DECORATION_FROM_HASHES](?\_0x5F5D1665E352A839).</strong>
 *
 * Hash: 0x70559AC7
 * @deprecated Use ped.addDecorationFromHashes(ped1, collection, overlay) instead
 */
export function addPedDecorationFromHashes(ped1: number | Ped, collection: number | string, overlay: number | string): void {
    return ped.addDecorationFromHashes(ped1, collection, overlay);
}

/**
 * CLEAR_PED_PROP
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_PROP](?\_0x0943E5B8E078E76E).</strong>
 *
 * Hash: 0x2D23D743
 * @deprecated Use ped.clearProp(ped1, propId) instead
 */
export function clearPedProp(ped1: number | Ped, propId: number): void {
    return ped.clearProp(ped1, propId);
}

/**
 * CLEAR_PED_SECONDARY_TASK
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_SECONDARY_TASK](?\_0x176CECF6F920D707).</strong>
 *
 * Hash: 0xA635F451
 * @deprecated Use ped.clearSecondaryTask(ped1) instead
 */
export function clearPedSecondaryTask(ped1: number | Ped): void {
    return ped.clearSecondaryTask(ped1);
}

/**
 * Creates a ped (biped character, pedestrian, actor) with the specified model at the specified position and heading.
 * This ped will initially be owned by the creating script as a mission entity, and the model should be loaded already
 * (e.g. using REQUEST_MODEL).
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CREATE_PED](?\_0xD49F9B0955C367DE).</strong>
 *
 * Hash: 0x389EF71
 * @deprecated Use ped.create(pedType, modelHash, pos, heading, isNetwork, bScriptHostPed) instead
 */
export function createPed(pedType: number, modelHash: number | string, pos: Vector3, heading: number, isNetwork: boolean, bScriptHostPed: boolean): number {
    return ped.create(pedType, modelHash, pos, heading, isNetwork, bScriptHostPed);
}

/**
 * CREATE_PED_INSIDE_VEHICLE
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CREATE_PED_INSIDE_VEHICLE](?\_0x7DD959874C1FD534).</strong>
 *
 * Hash: 0x3000F092
 * @deprecated Use ped.createInsideVehicle(vehicle, pedType, modelHash, seat, isNetwork, bScriptHostPed) instead
 */
export function createPedInsideVehicle(vehicle: number | Vehicle, pedType: number, modelHash: number | string, seat: number, isNetwork: boolean, bScriptHostPed: boolean): number {
    return ped.createInsideVehicle(vehicle, pedType, modelHash, seat, isNetwork, bScriptHostPed);
}

/**
 * Returns all peds handles known to the server.
 * The data returned adheres to the following layout:
 *
 * ```
 * [127, 42, 13, 37]
 * ```
 *
 * Hash: 0xB8584FEF
 * @deprecated Use ped.getAlls() instead
 */
export function getAllPeds(): number {
    return ped.getAlls();
}

/**
 * Returns the hash of weapon the Ped is currently using.
 *
 * Hash: 0xB0237302
 * @deprecated Use ped.getCurrentWeapon(ped1) instead
 */
export function getCurrentPedWeapon(ped1: number | Ped): number {
    return ped.getCurrentWeapon(ped1);
}

/**
 * No comment provided
 *
 * Hash: 0xF7C6792D
 * @deprecated Use ped.getLastInVehicleSeat(vehicle, seatIndex) instead
 */
export function getLastPedInVehicleSeat(vehicle: number | Vehicle, seatIndex: number): number {
    return ped.getLastInVehicleSeat(vehicle, seatIndex);
}

/**
 * No comment provided
 *
 * Hash: 0x2CE311A7
 * @deprecated Use ped.getArmour(ped1) instead
 */
export function getPedArmour(ped1: number | Ped): number {
    return ped.getArmour(ped1);
}

/**
 * No comment provided
 *
 * Hash: 0x63458C27
 * @deprecated Use ped.getCauseOfDeath(ped1) instead
 */
export function getPedCauseOfDeath(ped1: number | Ped): number {
    return ped.getCauseOfDeath(ped1);
}

/**
 * No comment provided
 *
 * Hash: 0xC182F76E
 * @deprecated Use ped.getDesiredHeading(ped1) instead
 */
export function getPedDesiredHeading(ped1: number | Ped): number {
    return ped.getDesiredHeading(ped1);
}

/**
 * No comment provided
 *
 * Hash: 0x388FDE9A
 * @deprecated Use ped.getInVehicleSeat(vehicle, seatIndex) instead
 */
export function getPedInVehicleSeat(vehicle: number | Vehicle, seatIndex: number): number {
    return ped.getInVehicleSeat(vehicle, seatIndex);
}

/**
 * No comment provided
 *
 * Hash: 0xA45B6C8D
 * @deprecated Use ped.getMaxHealth(ped1) instead
 */
export function getPedMaxHealth(ped1: number | Ped): number {
    return ped.getMaxHealth(ped1);
}

/**
 * Gets the current relationship group hash of a ped.
 *
 * Hash: 0x354F283C
 * @deprecated Use ped.getRelationshipGroupHash(ped1) instead
 */
export function getPedRelationshipGroupHash(ped1: number | Ped): number {
    return ped.getRelationshipGroupHash(ped1);
}

/**
 * Gets the script task command currently assigned to the ped.
 *
 * Hash: 0x84FE084
 * @deprecated Use ped.getScriptTaskCommand(ped1) instead
 */
export function getPedScriptTaskCommand(ped1: number | Ped): number {
    return ped.getScriptTaskCommand(ped1);
}

/**
 * Gets the stage of the peds scripted task.
 *
 * Hash: 0x44B0E5E2
 * @deprecated Use ped.getScriptTaskStage(ped1) instead
 */
export function getPedScriptTaskStage(ped1: number | Ped): number {
    return ped.getScriptTaskStage(ped1);
}

/**
 * Get the last entity that damaged the ped. This native is used server side when using OneSync.
 *
 * Hash: 0x535DB43F
 * @deprecated Use ped.getSourceOfDamage(ped1) instead
 */
export function getPedSourceOfDamage(ped1: number | Ped): number {
    return ped.getSourceOfDamage(ped1);
}

/**
 * Get the entity that killed the ped. This native is used server side when using OneSync.
 *
 * Hash: 0x84ADF9EB
 * @deprecated Use ped.getSourceOfDeath(ped1) instead
 */
export function getPedSourceOfDeath(ped1: number | Ped): number {
    return ped.getSourceOfDeath(ped1);
}

/**
 * Gets the type of a ped's specific task given an index of the CPedTaskSpecificDataNode nodes.
 * A ped will typically have a task at index 0, if a ped has multiple tasks at once they will be in the order 0, 1, 2, etc.
 *
 * Hash: 0x7F4563D3
 * @deprecated Use ped.getSpecificTaskType(ped1, index) instead
 */
export function getPedSpecificTaskType(ped1: number | Ped, index: number): number {
    return ped.getSpecificTaskType(ped1, index);
}

/**
 * No comment provided
 *
 * Hash: 0x40321B83
 * @deprecated Use ped.getStealthMovement(ped1) instead
 */
export function getPedStealthMovement(ped1: number | Ped): boolean {
    return ped.getStealthMovement(ped1);
}

/**
 * An alias of [GET_CURRENT_PED_WEAPON](#\_0xB0237302).
 *
 * Note, the client-side [GET_SELECTED_PED_WEAPON](#\_0x0A6DB4965674D243) native returns the weapon selected via the HUD (weapon wheel). This data is not available to FXServer.
 *
 * Hash: 0xD240123E
 * @deprecated Use ped.getSelectedWeapon(ped1) instead
 */
export function getSelectedPedWeapon(ped1: number | Ped): number {
    return ped.getSelectedWeapon(ped1);
}

/**
 * No comment provided
 *
 * Hash: 0x25865633
 * @deprecated Use ped.isHandcuffed(ped1) instead
 */
export function isPedHandcuffed(ped1: number | Ped): boolean {
    return ped.isHandcuffed(ped1);
}

/**
 * No comment provided
 *
 * Hash: 0xC833BBE1
 * @deprecated Use ped.isRagdoll(ped1) instead
 */
export function isPedRagdoll(ped1: number | Ped): boolean {
    return ped.isRagdoll(ped1);
}

/**
 * No comment provided
 *
 * Hash: 0xEFEED13C
 * @deprecated Use ped.isStrafing(ped1) instead
 */
export function isPedStrafing(ped1: number | Ped): boolean {
    return ped.isStrafing(ped1);
}

/**
 * No comment provided
 *
 * Hash: 0x5AE7EDA2
 * @deprecated Use ped.isUsingActionMode(ped1) instead
 */
export function isPedUsingActionMode(ped1: number | Ped): boolean {
    return ped.isUsingActionMode(ped1);
}

/**
 * SET_CURRENT_PED_WEAPON
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_CURRENT_PED_WEAPON](?\_0xADF692B254977C0C).</strong>
 *
 * Hash: 0xB8278882
 * @deprecated Use ped.setCurrentWeapon(ped1, weaponHash, bForceInHand) instead
 */
export function setCurrentPedWeapon(ped1: number | Ped, weaponHash: number | string, bForceInHand: boolean): void {
    return ped.setCurrentWeapon(ped1, weaponHash, bForceInHand);
}

/**
 * ```
 * NativeDB Added Parameter 4: BOOL p3
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_AMMO](?\_0x14E56BC5B5DB6A19).</strong>
 *
 * Hash: 0xBF90DF1A
 * @deprecated Use ped.setAmmo(ped1, weaponHash, ammo) instead
 */
export function setPedAmmo(ped1: number | Ped, weaponHash: number | string, ammo: number): void {
    return ped.setAmmo(ped1, weaponHash, ammo);
}

/**
 * ```
 * Sets the armor of the specified ped.
 * ped: The Ped to set the armor of.
 * amount: A value between 0 and 100 indicating the value to set the Ped's armor to.
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_ARMOUR](?\_0xCEA04D83135264CC).</strong>
 *
 * Hash: 0x4E3A0CC4
 * @deprecated Use ped.setArmour(ped1, amount) instead
 */
export function setPedArmour(ped1: number | Ped, amount: number): void {
    return ped.setArmour(ped1, amount);
}

/**
 * SET_PED_CAN_RAGDOLL
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_CAN_RAGDOLL](?\_0xB128377056A54E2A).</strong>
 *
 * Hash: 0xCF1384C4
 * @deprecated Use ped.setCanRagdoll(ped1, toggle) instead
 */
export function setPedCanRagdoll(ped1: number | Ped, toggle: boolean): void {
    return ped.setCanRagdoll(ped1, toggle);
}

/**
 * This native is used to set component variation on a ped. Components, drawables and textures IDs are related to the ped model.
 *
 * ### MP Freemode list of components
 *
 * **0**: Face
 * **1**: Mask
 * **2**: Hair
 * **3**: Torso
 * **4**: Leg
 * **5**: Parachute / bag
 * **6**: Shoes
 * **7**: Accessory
 * **8**: Undershirt
 * **9**: Kevlar
 * **10**: Badge
 * **11**: Torso 2
 * List of Component IDs
 *
 * ```cpp
 * // Components
 * enum ePedVarComp
 * {
 * PV_COMP_INVALID = 0xFFFFFFFF,
 * PV_COMP_HEAD = 0, // "HEAD"
 * PV_COMP_BERD = 1, // "BEARD"
 * PV_COMP_HAIR = 2, // "HAIR"
 * PV_COMP_UPPR = 3, // "UPPER"
 * PV_COMP_LOWR = 4, // "LOWER"
 * PV_COMP_HAND = 5, // "HAND"
 * PV_COMP_FEET = 6, // "FEET"
 * PV_COMP_TEEF = 7, // "TEETH"
 * PV_COMP_ACCS = 8, // "ACCESSORIES"
 * PV_COMP_TASK = 9, // "TASK"
 * PV_COMP_DECL = 10, // "DECL"
 * PV_COMP_JBIB = 11, // "JBIB"
 * PV_COMP_MAX = 12,
 * };
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_COMPONENT_VARIATION](?\_0x262B14F48D29DE80).</strong>
 *
 * Hash: 0xD4F7B05C
 * @deprecated Use ped.setComponentVariation(ped1, componentId, drawableId, textureId, paletteId) instead
 */
export function setPedComponentVariation(ped1: number | Ped, componentId: number, drawableId: number, textureId: number, paletteId: number): void {
    return ped.setComponentVariation(ped1, componentId, drawableId, textureId, paletteId);
}

/**
 * ```cpp
 * // Potential names and hash collisions included as comments
 * enum ePedConfigFlags {
 * CPED_CONFIG_FLAG_CreatedByFactory = 0,
 * CPED_CONFIG_FLAG_CanBeShotInVehicle = 1,
 * CPED_CONFIG_FLAG_NoCriticalHits = 2,
 * CPED_CONFIG_FLAG_DrownsInWater = 3,
 * CPED_CONFIG_FLAG_DrownsInSinkingVehicle = 4,
 * CPED_CONFIG_FLAG_DiesInstantlyWhenSwimming = 5,
 * CPED_CONFIG_FLAG_HasBulletProofVest = 6,
 * CPED_CONFIG_FLAG_UpperBodyDamageAnimsOnly = 7,
 * CPED_CONFIG_FLAG_NeverFallOffSkis = 8,
 * CPED_CONFIG_FLAG_NeverEverTargetThisPed = 9,
 * CPED_CONFIG_FLAG_ThisPedIsATargetPriority = 10,
 * CPED_CONFIG_FLAG_TargettableWithNoLos = 11,
 * CPED_CONFIG_FLAG_DoesntListenToPlayerGroupCommands = 12,
 * CPED_CONFIG_FLAG_NeverLeavesGroup = 13,
 * CPED_CONFIG_FLAG_DoesntDropWeaponsWhenDead = 14,
 * CPED_CONFIG_FLAG_SetDelayedWeaponAsCurrent = 15,
 * CPED_CONFIG_FLAG_KeepTasksAfterCleanUp = 16,
 * CPED_CONFIG_FLAG_BlockNonTemporaryEvents = 17,
 * CPED_CONFIG_FLAG_HasAScriptBrain = 18,
 * CPED_CONFIG_FLAG_WaitingForScriptBrainToLoad = 19,
 * CPED_CONFIG_FLAG_AllowMedicsToReviveMe = 20,
 * CPED_CONFIG_FLAG_MoneyHasBeenGivenByScript = 21,
 * CPED_CONFIG_FLAG_NotAllowedToCrouch = 22,
 * CPED_CONFIG_FLAG_DeathPickupsPersist = 23,
 * CPED_CONFIG_FLAG_IgnoreSeenMelee = 24,
 * CPED_CONFIG_FLAG_ForceDieIfInjured = 25,
 * CPED_CONFIG_FLAG_DontDragMeOutCar = 26,
 * CPED_CONFIG_FLAG_StayInCarOnJack = 27,
 * CPED_CONFIG_FLAG_ForceDieInCar = 28,
 * CPED_CONFIG_FLAG_GetOutUndriveableVehicle = 29,
 * CPED_CONFIG_FLAG_WillRemainOnBoatAfterMissionEnds = 30,
 * CPED_CONFIG_FLAG_DontStoreAsPersistent = 31,
 * CPED_CONFIG_FLAG_WillFlyThroughWindscreen = 32,
 * CPED_CONFIG_FLAG_DieWhenRagdoll = 33,
 * CPED_CONFIG_FLAG_HasHelmet = 34,
 * CPED_CONFIG_FLAG_UseHelmet = 35,
 * CPED_CONFIG_FLAG_DontTakeOffHelmet = 36,
 * CPED_CONFIG_FLAG_HideInCutscene = 37,
 * CPED_CONFIG_FLAG_PedIsEnemyToPlayer = 38,
 * CPED_CONFIG_FLAG_DisableEvasiveDives = 39,
 * CPED_CONFIG_FLAG_PedGeneratesDeadBodyEvents = 40,
 * CPED_CONFIG_FLAG_DontAttackPlayerWithoutWantedLevel = 41,
 * CPED_CONFIG_FLAG_DontInfluenceWantedLevel = 42,
 * CPED_CONFIG_FLAG_DisablePlayerLockon = 43,
 * CPED_CONFIG_FLAG_DisableLockonToRandomPeds = 44,
 * CPED_CONFIG_FLAG_AllowLockonToFriendlyPlayers = 45,
 * _0xDB115BFA = 46,
 * CPED_CONFIG_FLAG_PedBeingDeleted = 47,
 * CPED_CONFIG_FLAG_BlockWeaponSwitching = 48,
 * CPED_CONFIG_FLAG_BlockGroupPedAimedAtResponse = 49,
 * CPED_CONFIG_FLAG_WillFollowLeaderAnyMeans = 50,
 * CPED_CONFIG_FLAG_BlippedByScript = 51,
 * CPED_CONFIG_FLAG_DrawRadarVisualField = 52,
 * CPED_CONFIG_FLAG_StopWeaponFiringOnImpact = 53,
 * CPED_CONFIG_FLAG_DissableAutoFallOffTests = 54,
 * CPED_CONFIG_FLAG_SteerAroundDeadBodies = 55,
 * CPED_CONFIG_FLAG_ConstrainToNavMesh = 56,
 * CPED_CONFIG_FLAG_SyncingAnimatedProps = 57,
 * CPED_CONFIG_FLAG_IsFiring = 58,
 * CPED_CONFIG_FLAG_WasFiring = 59,
 * CPED_CONFIG_FLAG_IsStanding = 60,
 * CPED_CONFIG_FLAG_WasStanding = 61,
 * CPED_CONFIG_FLAG_InVehicle = 62,
 * CPED_CONFIG_FLAG_OnMount = 63,
 * CPED_CONFIG_FLAG_AttachedToVehicle = 64,
 * CPED_CONFIG_FLAG_IsSwimming = 65,
 * CPED_CONFIG_FLAG_WasSwimming = 66,
 * CPED_CONFIG_FLAG_IsSkiing = 67,
 * CPED_CONFIG_FLAG_IsSitting = 68,
 * CPED_CONFIG_FLAG_KilledByStealth = 69,
 * CPED_CONFIG_FLAG_KilledByTakedown = 70,
 * CPED_CONFIG_FLAG_Knockedout = 71,
 * CPED_CONFIG_FLAG_ClearRadarBlipOnDeath = 72,
 * CPED_CONFIG_FLAG_JustGotOffTrain = 73,
 * CPED_CONFIG_FLAG_JustGotOnTrain = 74,
 * CPED_CONFIG_FLAG_UsingCoverPoint = 75,
 * CPED_CONFIG_FLAG_IsInTheAir = 76,
 * CPED_CONFIG_FLAG_KnockedUpIntoAir = 77,
 * CPED_CONFIG_FLAG_IsAimingGun = 78,
 * CPED_CONFIG_FLAG_HasJustLeftCar = 79,
 * CPED_CONFIG_FLAG_TargetWhenInjuredAllowed = 80,
 * CPED_CONFIG_FLAG_CurrLeftFootCollNM = 81,
 * CPED_CONFIG_FLAG_PrevLeftFootCollNM = 82,
 * CPED_CONFIG_FLAG_CurrRightFootCollNM = 83,
 * CPED_CONFIG_FLAG_PrevRightFootCollNM = 84,
 * CPED_CONFIG_FLAG_HasBeenBumpedInCar = 85,
 * CPED_CONFIG_FLAG_InWaterTaskQuitToClimbLadder = 86,
 * CPED_CONFIG_FLAG_NMTwoHandedWeaponBothHandsConstrained = 87,
 * CPED_CONFIG_FLAG_CreatedBloodPoolTimer = 88,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromAnyPedImpact = 89,
 * CPED_CONFIG_FLAG_GroupPedFailedToEnterCover = 90,
 * CPED_CONFIG_FLAG_AlreadyChattedOnPhone = 91,
 * CPED_CONFIG_FLAG_AlreadyReactedToPedOnRoof = 92,
 * CPED_CONFIG_FLAG_ForcePedLoadCover = 93,
 * CPED_CONFIG_FLAG_BlockCoweringInCover = 94,
 * CPED_CONFIG_FLAG_BlockPeekingInCover = 95,
 * CPED_CONFIG_FLAG_JustLeftCarNotCheckedForDoors = 96,
 * CPED_CONFIG_FLAG_VaultFromCover = 97,
 * CPED_CONFIG_FLAG_AutoConversationLookAts = 98,
 * CPED_CONFIG_FLAG_UsingCrouchedPedCapsule = 99,
 * CPED_CONFIG_FLAG_HasDeadPedBeenReported = 100,
 * CPED_CONFIG_FLAG_ForcedAim = 101,
 * CPED_CONFIG_FLAG_SteersAroundPeds = 102,
 * CPED_CONFIG_FLAG_SteersAroundObjects = 103,
 * CPED_CONFIG_FLAG_OpenDoorArmIK = 104,
 * CPED_CONFIG_FLAG_ForceReload = 105,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromVehicleImpact = 106,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromBulletImpact = 107,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromExplosions = 108,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromFire = 109,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromElectrocution = 110,
 * CPED_CONFIG_FLAG_IsBeingDraggedToSafety = 111,
 * CPED_CONFIG_FLAG_HasBeenDraggedToSafety = 112,
 * CPED_CONFIG_FLAG_KeepWeaponHolsteredUnlessFired = 113,
 * CPED_CONFIG_FLAG_ForceScriptControlledKnockout = 114,
 * CPED_CONFIG_FLAG_FallOutOfVehicleWhenKilled = 115,
 * CPED_CONFIG_FLAG_GetOutBurningVehicle = 116,
 * CPED_CONFIG_FLAG_BumpedByPlayer = 117,
 * CPED_CONFIG_FLAG_RunFromFiresAndExplosions = 118,
 * CPED_CONFIG_FLAG_TreatAsPlayerDuringTargeting = 119,
 * CPED_CONFIG_FLAG_IsHandCuffed = 120,
 * CPED_CONFIG_FLAG_IsAnkleCuffed = 121,
 * CPED_CONFIG_FLAG_DisableMelee = 122,
 * CPED_CONFIG_FLAG_DisableUnarmedDrivebys = 123,
 * CPED_CONFIG_FLAG_JustGetsPulledOutWhenElectrocuted = 124,
 * CPED_CONFIG_FLAG_UNUSED_REPLACE_ME = 125,
 * CPED_CONFIG_FLAG_WillNotHotwireLawEnforcementVehicle = 126,
 * CPED_CONFIG_FLAG_WillCommandeerRatherThanJack = 127,
 * CPED_CONFIG_FLAG_CanBeAgitated = 128,
 * CPED_CONFIG_FLAG_ForcePedToFaceLeftInCover = 129,
 * CPED_CONFIG_FLAG_ForcePedToFaceRightInCover = 130,
 * CPED_CONFIG_FLAG_BlockPedFromTurningInCover = 131,
 * CPED_CONFIG_FLAG_KeepRelationshipGroupAfterCleanUp = 132,
 * CPED_CONFIG_FLAG_ForcePedToBeDragged = 133,
 * CPED_CONFIG_FLAG_PreventPedFromReactingToBeingJacked = 134,
 * CPED_CONFIG_FLAG_IsScuba = 135,
 * CPED_CONFIG_FLAG_WillArrestRatherThanJack = 136,
 * CPED_CONFIG_FLAG_RemoveDeadExtraFarAway = 137,
 * CPED_CONFIG_FLAG_RidingTrain = 138,
 * CPED_CONFIG_FLAG_ArrestResult = 139,
 * CPED_CONFIG_FLAG_CanAttackFriendly = 140,
 * CPED_CONFIG_FLAG_WillJackAnyPlayer = 141,
 * CPED_CONFIG_FLAG_BumpedByPlayerVehicle = 142,
 * CPED_CONFIG_FLAG_DodgedPlayerVehicle = 143,
 * CPED_CONFIG_FLAG_WillJackWantedPlayersRatherThanStealCar = 144,
 * CPED_CONFIG_FLAG_NoCopWantedAggro = 145,
 * CPED_CONFIG_FLAG_DisableLadderClimbing = 146,
 * CPED_CONFIG_FLAG_StairsDetected = 147,
 * CPED_CONFIG_FLAG_SlopeDetected = 148,
 * CPED_CONFIG_FLAG_HelmetHasBeenShot = 149,
 * CPED_CONFIG_FLAG_CowerInsteadOfFlee = 150,
 * CPED_CONFIG_FLAG_CanActivateRagdollWhenVehicleUpsideDown = 151,
 * CPED_CONFIG_FLAG_AlwaysRespondToCriesForHelp = 152,
 * CPED_CONFIG_FLAG_DisableBloodPoolCreation = 153,
 * CPED_CONFIG_FLAG_ShouldFixIfNoCollision = 154,
 * CPED_CONFIG_FLAG_CanPerformArrest = 155,
 * CPED_CONFIG_FLAG_CanPerformUncuff = 156,
 * CPED_CONFIG_FLAG_CanBeArrested = 157,
 * CPED_CONFIG_FLAG_MoverConstrictedByOpposingCollisions = 158,
 * CPED_CONFIG_FLAG_PlayerPreferFrontSeatMP = 159,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromImpactObject = 160,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromMelee = 161,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromWaterJet = 162,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromDrowning = 163,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromFalling = 164,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromRubberBullet = 165,
 * CPED_CONFIG_FLAG_IsInjured = 166,
 * CPED_CONFIG_FLAG_DontEnterVehiclesInPlayersGroup = 167,
 * CPED_CONFIG_FLAG_SwimmingTasksRunning = 168,
 * CPED_CONFIG_FLAG_PreventAllMeleeTaunts = 169,
 * CPED_CONFIG_FLAG_ForceDirectEntry = 170,
 * CPED_CONFIG_FLAG_AlwaysSeeApproachingVehicles = 171,
 * CPED_CONFIG_FLAG_CanDiveAwayFromApproachingVehicles = 172,
 * CPED_CONFIG_FLAG_AllowPlayerToInterruptVehicleEntryExit = 173,
 * CPED_CONFIG_FLAG_OnlyAttackLawIfPlayerIsWanted = 174,
 * CPED_CONFIG_FLAG_PlayerInContactWithKinematicPed = 175,
 * CPED_CONFIG_FLAG_PlayerInContactWithSomethingOtherThanKinematicPed = 176,
 * CPED_CONFIG_FLAG_PedsJackingMeDontGetIn = 177,
 * CPED_CONFIG_FLAG_AdditionalRappellingPed = 178,
 * CPED_CONFIG_FLAG_PedIgnoresAnimInterruptEvents = 179,
 * CPED_CONFIG_FLAG_IsInCustody = 180,
 * CPED_CONFIG_FLAG_ForceStandardBumpReactionThresholds = 181,
 * CPED_CONFIG_FLAG_LawWillOnlyAttackIfPlayerIsWanted = 182,
 * CPED_CONFIG_FLAG_IsAgitated = 183,
 * CPED_CONFIG_FLAG_PreventAutoShuffleToDriversSeat = 184,
 * CPED_CONFIG_FLAG_UseKinematicModeWhenStationary = 185,
 * CPED_CONFIG_FLAG_EnableWeaponBlocking = 186,
 * CPED_CONFIG_FLAG_HasHurtStarted = 187,
 * CPED_CONFIG_FLAG_DisableHurt = 188,
 * CPED_CONFIG_FLAG_PlayerIsWeird = 189,
 * CPED_CONFIG_FLAG_PedHadPhoneConversation = 190,
 * CPED_CONFIG_FLAG_BeganCrossingRoad = 191,
 * CPED_CONFIG_FLAG_WarpIntoLeadersVehicle = 192,
 * CPED_CONFIG_FLAG_DoNothingWhenOnFootByDefault = 193,
 * CPED_CONFIG_FLAG_UsingScenario = 194,
 * CPED_CONFIG_FLAG_VisibleOnScreen = 195,
 * CPED_CONFIG_FLAG_DontCollideWithKinematic = 196,
 * CPED_CONFIG_FLAG_ActivateOnSwitchFromLowPhysicsLod = 197,
 * CPED_CONFIG_FLAG_DontActivateRagdollOnPedCollisionWhenDead = 198,
 * CPED_CONFIG_FLAG_DontActivateRagdollOnVehicleCollisionWhenDead = 199,
 * CPED_CONFIG_FLAG_HasBeenInArmedCombat = 200,
 * CPED_CONFIG_FLAG_UseDiminishingAmmoRate = 201,
 * CPED_CONFIG_FLAG_Avoidance_Ignore_All = 202,
 * CPED_CONFIG_FLAG_Avoidance_Ignored_by_All = 203,
 * CPED_CONFIG_FLAG_Avoidance_Ignore_Group1 = 204,
 * CPED_CONFIG_FLAG_Avoidance_Member_of_Group1 = 205,
 * CPED_CONFIG_FLAG_ForcedToUseSpecificGroupSeatIndex = 206,
 * CPED_CONFIG_FLAG_LowPhysicsLodMayPlaceOnNavMesh = 207,
 * CPED_CONFIG_FLAG_DisableExplosionReactions = 208,
 * CPED_CONFIG_FLAG_DodgedPlayer = 209,
 * CPED_CONFIG_FLAG_WaitingForPlayerControlInterrupt = 210,
 * CPED_CONFIG_FLAG_ForcedToStayInCover = 211,
 * CPED_CONFIG_FLAG_GeneratesSoundEvents = 212,
 * CPED_CONFIG_FLAG_ListensToSoundEvents = 213,
 * CPED_CONFIG_FLAG_AllowToBeTargetedInAVehicle = 214,
 * CPED_CONFIG_FLAG_WaitForDirectEntryPointToBeFreeWhenExiting = 215,
 * CPED_CONFIG_FLAG_OnlyRequireOnePressToExitVehicle = 216,
 * CPED_CONFIG_FLAG_ForceExitToSkyDive = 217,
 * CPED_CONFIG_FLAG_SteersAroundVehicles = 218,
 * CPED_CONFIG_FLAG_AllowPedInVehiclesOverrideTaskFlags = 219,
 * CPED_CONFIG_FLAG_DontEnterLeadersVehicle = 220,
 * CPED_CONFIG_FLAG_DisableExitToSkyDive = 221,
 * CPED_CONFIG_FLAG_ScriptHasDisabledCollision = 222,
 * CPED_CONFIG_FLAG_UseAmbientModelScaling = 223,
 * CPED_CONFIG_FLAG_DontWatchFirstOnNextHurryAway = 224,
 * CPED_CONFIG_FLAG_DisablePotentialToBeWalkedIntoResponse = 225,
 * CPED_CONFIG_FLAG_DisablePedAvoidance = 226,
 * CPED_CONFIG_FLAG_ForceRagdollUponDeath = 227,
 * CPED_CONFIG_FLAG_CanLosePropsOnDamage = 228,
 * CPED_CONFIG_FLAG_DisablePanicInVehicle = 229,
 * CPED_CONFIG_FLAG_AllowedToDetachTrailer = 230,
 * CPED_CONFIG_FLAG_HasShotBeenReactedToFromFront = 231,
 * CPED_CONFIG_FLAG_HasShotBeenReactedToFromBack = 232,
 * CPED_CONFIG_FLAG_HasShotBeenReactedToFromLeft = 233,
 * CPED_CONFIG_FLAG_HasShotBeenReactedToFromRight = 234,
 * CPED_CONFIG_FLAG_AllowBlockDeadPedRagdollActivation = 235,
 * CPED_CONFIG_FLAG_IsHoldingProp = 236,
 * CPED_CONFIG_FLAG_BlocksPathingWhenDead = 237,
 * CPED_CONFIG_FLAG_ForcePlayNormalScenarioExitOnNextScriptCommand = 238,
 * CPED_CONFIG_FLAG_ForcePlayImmediateScenarioExitOnNextScriptCommand = 239,
 * CPED_CONFIG_FLAG_ForceSkinCharacterCloth = 240,
 * CPED_CONFIG_FLAG_LeaveEngineOnWhenExitingVehicles = 241,
 * CPED_CONFIG_FLAG_PhoneDisableTextingAnimations = 242,
 * CPED_CONFIG_FLAG_PhoneDisableTalkingAnimations = 243,
 * CPED_CONFIG_FLAG_PhoneDisableCameraAnimations = 244,
 * CPED_CONFIG_FLAG_DisableBlindFiringInShotReactions = 245,
 * CPED_CONFIG_FLAG_AllowNearbyCoverUsage = 246,
 * CPED_CONFIG_FLAG_InStrafeTransition = 247,
 * CPED_CONFIG_FLAG_CanPlayInCarIdles = 248,
 * CPED_CONFIG_FLAG_CanAttackNonWantedPlayerAsLaw = 249,
 * CPED_CONFIG_FLAG_WillTakeDamageWhenVehicleCrashes = 250,
 * CPED_CONFIG_FLAG_AICanDrivePlayerAsRearPassenger = 251,
 * CPED_CONFIG_FLAG_PlayerCanJackFriendlyPlayers = 252,
 * CPED_CONFIG_FLAG_OnStairs = 253,
 * CPED_CONFIG_FLAG_SimulatingAiming = 254,
 * CPED_CONFIG_FLAG_AIDriverAllowFriendlyPassengerSeatEntry = 255,
 * CPED_CONFIG_FLAG_ParentCarIsBeingRemoved = 256,
 * CPED_CONFIG_FLAG_AllowMissionPedToUseInjuredMovement = 257,
 * CPED_CONFIG_FLAG_CanLoseHelmetOnDamage = 258,
 * CPED_CONFIG_FLAG_NeverDoScenarioExitProbeChecks = 259,
 * CPED_CONFIG_FLAG_SuppressLowLODRagdollSwitchWhenCorpseSettles = 260,
 * CPED_CONFIG_FLAG_PreventUsingLowerPrioritySeats = 261,
 * CPED_CONFIG_FLAG_JustLeftVehicleNeedsReset = 262,
 * CPED_CONFIG_FLAG_TeleportIfCantReachPlayer = 263,
 * CPED_CONFIG_FLAG_PedsInVehiclePositionNeedsReset = 264,
 * CPED_CONFIG_FLAG_PedsFullyInSeat = 265,
 * CPED_CONFIG_FLAG_AllowPlayerLockOnIfFriendly = 266,
 * CPED_CONFIG_FLAG_UseCameraHeadingForDesiredDirectionLockOnTest = 267,
 * CPED_CONFIG_FLAG_TeleportToLeaderVehicle = 268,
 * CPED_CONFIG_FLAG_Avoidance_Ignore_WeirdPedBuffer = 269,
 * CPED_CONFIG_FLAG_OnStairSlope = 270,
 * CPED_CONFIG_FLAG_HasPlayedNMGetup = 271,
 * CPED_CONFIG_FLAG_DontBlipCop = 272,
 * CPED_CONFIG_FLAG_SpawnedAtExtendedRangeScenario = 273,
 * CPED_CONFIG_FLAG_WalkAlongsideLeaderWhenClose = 274,
 * CPED_CONFIG_FLAG_KillWhenTrapped = 275,
 * CPED_CONFIG_FLAG_EdgeDetected = 276,
 * CPED_CONFIG_FLAG_AlwaysWakeUpPhysicsOfIntersectedPeds = 277,
 * CPED_CONFIG_FLAG_EquippedAmbientLoadOutWeapon = 278,
 * CPED_CONFIG_FLAG_AvoidTearGas = 279,
 * CPED_CONFIG_FLAG_StoppedSpeechUponFreezing = 280,
 * CPED_CONFIG_FLAG_DisableGoToWritheWhenInjured = 281,
 * CPED_CONFIG_FLAG_OnlyUseForcedSeatWhenEnteringHeliInGroup = 282,
 * CPED_CONFIG_FLAG_ThrownFromVehicleDueToExhaustion = 283,
 * CPED_CONFIG_FLAG_UpdateEnclosedSearchRegion = 284,
 * CPED_CONFIG_FLAG_DisableWeirdPedEvents = 285,
 * CPED_CONFIG_FLAG_ShouldChargeNow = 286,
 * CPED_CONFIG_FLAG_RagdollingOnBoat = 287,
 * CPED_CONFIG_FLAG_HasBrandishedWeapon = 288,
 * CPED_CONFIG_FLAG_AllowMinorReactionsAsMissionPed = 289,
 * CPED_CONFIG_FLAG_BlockDeadBodyShockingEventsWhenDead = 290,
 * CPED_CONFIG_FLAG_PedHasBeenSeen = 291,
 * CPED_CONFIG_FLAG_PedIsInReusePool = 292,
 * CPED_CONFIG_FLAG_PedWasReused = 293,
 * CPED_CONFIG_FLAG_DisableShockingEvents = 294,
 * CPED_CONFIG_FLAG_MovedUsingLowLodPhysicsSinceLastActive = 295,
 * CPED_CONFIG_FLAG_NeverReactToPedOnRoof = 296,
 * CPED_CONFIG_FLAG_ForcePlayFleeScenarioExitOnNextScriptCommand = 297,
 * CPED_CONFIG_FLAG_JustBumpedIntoVehicle = 298,
 * CPED_CONFIG_FLAG_DisableShockingDrivingOnPavementEvents = 299,
 * CPED_CONFIG_FLAG_ShouldThrowSmokeNow = 300,
 * CPED_CONFIG_FLAG_DisablePedConstraints = 301,
 * CPED_CONFIG_FLAG_ForceInitialPeekInCover = 302,
 * CPED_CONFIG_FLAG_CreatedByDispatch = 303,
 * CPED_CONFIG_FLAG_PointGunLeftHandSupporting = 304,
 * CPED_CONFIG_FLAG_DisableJumpingFromVehiclesAfterLeader = 305,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromPlayerPedImpact = 306,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromAiRagdollImpact = 307,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromPlayerRagdollImpact = 308,
 * CPED_CONFIG_FLAG_DisableQuadrupedSpring = 309,
 * CPED_CONFIG_FLAG_IsInCluster = 310,
 * CPED_CONFIG_FLAG_ShoutToGroupOnPlayerMelee = 311,
 * CPED_CONFIG_FLAG_IgnoredByAutoOpenDoors = 312,
 * CPED_CONFIG_FLAG_PreferInjuredGetup = 313,
 * CPED_CONFIG_FLAG_ForceIgnoreMeleeActiveCombatant = 314,
 * CPED_CONFIG_FLAG_CheckLoSForSoundEvents = 315,
 * CPED_CONFIG_FLAG_JackedAbandonedCar = 316,
 * CPED_CONFIG_FLAG_CanSayFollowedByPlayerAudio = 317,
 * CPED_CONFIG_FLAG_ActivateRagdollFromMinorPlayerContact = 318,
 * CPED_CONFIG_FLAG_HasPortablePickupAttached = 319,
 * CPED_CONFIG_FLAG_ForcePoseCharacterCloth = 320,
 * CPED_CONFIG_FLAG_HasClothCollisionBounds = 321,
 * CPED_CONFIG_FLAG_HasHighHeels = 322,
 * CPED_CONFIG_FLAG_TreatAsAmbientPedForDriverLockOn = 323,
 * CPED_CONFIG_FLAG_DontBehaveLikeLaw = 324,
 * CPED_CONFIG_FLAG_SpawnedAtScenario = 325,
 * CPED_CONFIG_FLAG_DisablePoliceInvestigatingBody = 326,
 * CPED_CONFIG_FLAG_DisableWritheShootFromGround = 327,
 * CPED_CONFIG_FLAG_LowerPriorityOfWarpSeats = 328,
 * CPED_CONFIG_FLAG_DisableTalkTo = 329,
 * CPED_CONFIG_FLAG_DontBlip = 330,
 * CPED_CONFIG_FLAG_IsSwitchingWeapon = 331,
 * CPED_CONFIG_FLAG_IgnoreLegIkRestrictions = 332,
 * CPED_CONFIG_FLAG_ScriptForceNoTimesliceIntelligenceUpdate = 333,
 * CPED_CONFIG_FLAG_JackedOutOfMyVehicle = 334,
 * CPED_CONFIG_FLAG_WentIntoCombatAfterBeingJacked = 335,
 * CPED_CONFIG_FLAG_DontActivateRagdollForVehicleGrab = 336,
 * CPED_CONFIG_FLAG_ForcePackageCharacterCloth = 337,
 * CPED_CONFIG_FLAG_DontRemoveWithValidOrder = 338,
 * CPED_CONFIG_FLAG_AllowTaskDoNothingTimeslicing = 339,
 * CPED_CONFIG_FLAG_ForcedToStayInCoverDueToPlayerSwitch = 340,
 * CPED_CONFIG_FLAG_ForceProneCharacterCloth = 341,
 * CPED_CONFIG_FLAG_NotAllowedToJackAnyPlayers = 342,
 * CPED_CONFIG_FLAG_InToStrafeTransition = 343,
 * CPED_CONFIG_FLAG_KilledByStandardMelee = 344,
 * CPED_CONFIG_FLAG_AlwaysLeaveTrainUponArrival = 345,
 * CPED_CONFIG_FLAG_ForcePlayDirectedNormalScenarioExitOnNextScriptCommand = 346,
 * CPED_CONFIG_FLAG_OnlyWritheFromWeaponDamage = 347,
 * CPED_CONFIG_FLAG_UseSloMoBloodVfx = 348,
 * CPED_CONFIG_FLAG_EquipJetpack = 349,
 * CPED_CONFIG_FLAG_PreventDraggedOutOfCarThreatResponse = 350,
 * CPED_CONFIG_FLAG_ScriptHasCompletelyDisabledCollision = 351,
 * CPED_CONFIG_FLAG_NeverDoScenarioNavChecks = 352,
 * CPED_CONFIG_FLAG_ForceSynchronousScenarioExitChecking = 353,
 * CPED_CONFIG_FLAG_ThrowingGrenadeWhileAiming = 354,
 * CPED_CONFIG_FLAG_HeadbobToRadioEnabled = 355,
 * CPED_CONFIG_FLAG_ForceDeepSurfaceCheck = 356,
 * CPED_CONFIG_FLAG_DisableDeepSurfaceAnims = 357,
 * CPED_CONFIG_FLAG_DontBlipNotSynced = 358,
 * CPED_CONFIG_FLAG_IsDuckingInVehicle = 359,
 * CPED_CONFIG_FLAG_PreventAutoShuffleToTurretSeat = 360,
 * CPED_CONFIG_FLAG_DisableEventInteriorStatusCheck = 361,
 * CPED_CONFIG_FLAG_HasReserveParachute = 362,
 * CPED_CONFIG_FLAG_UseReserveParachute = 363,
 * CPED_CONFIG_FLAG_TreatDislikeAsHateWhenInCombat = 364,
 * CPED_CONFIG_FLAG_OnlyUpdateTargetWantedIfSeen = 365,
 * CPED_CONFIG_FLAG_AllowAutoShuffleToDriversSeat = 366,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromSmokeGrenade = 367,
 * CPED_CONFIG_FLAG_LinkMBRToOwnerOnChain = 368,
 * CPED_CONFIG_FLAG_AmbientFriendBumpedByPlayer = 369,
 * CPED_CONFIG_FLAG_AmbientFriendBumpedByPlayerVehicle = 370,
 * CPED_CONFIG_FLAG_InFPSUnholsterTransition = 371,
 * CPED_CONFIG_FLAG_PreventReactingToSilencedCloneBullets = 372,
 * CPED_CONFIG_FLAG_DisableInjuredCryForHelpEvents = 373,
 * CPED_CONFIG_FLAG_NeverLeaveTrain = 374,
 * CPED_CONFIG_FLAG_DontDropJetpackOnDeath = 375,
 * CPED_CONFIG_FLAG_UseFPSUnholsterTransitionDuringCombatRoll = 376,
 * CPED_CONFIG_FLAG_ExitingFPSCombatRoll = 377,
 * CPED_CONFIG_FLAG_ScriptHasControlOfPlayer = 378,
 * CPED_CONFIG_FLAG_PlayFPSIdleFidgetsForProjectile = 379,
 * CPED_CONFIG_FLAG_DisableAutoEquipHelmetsInBikes = 380,
 * CPED_CONFIG_FLAG_DisableAutoEquipHelmetsInAircraft = 381,
 * CPED_CONFIG_FLAG_WasPlayingFPSGetup = 382,
 * CPED_CONFIG_FLAG_WasPlayingFPSMeleeActionResult = 383,
 * CPED_CONFIG_FLAG_PreferNoPriorityRemoval = 384,
 * CPED_CONFIG_FLAG_FPSFidgetsAbortedOnFire = 385,
 * CPED_CONFIG_FLAG_ForceFPSIKWithUpperBodyAnim = 386,
 * CPED_CONFIG_FLAG_SwitchingCharactersInFirstPerson = 387,
 * CPED_CONFIG_FLAG_IsClimbingLadder = 388,
 * CPED_CONFIG_FLAG_HasBareFeet = 389,
 * CPED_CONFIG_FLAG_UNUSED_REPLACE_ME_2 = 390,
 * CPED_CONFIG_FLAG_GoOnWithoutVehicleIfItIsUnableToGetBackToRoad = 391,
 * CPED_CONFIG_FLAG_BlockDroppingHealthSnacksOnDeath = 392,
 * CPED_CONFIG_FLAG_ResetLastVehicleOnVehicleExit = 393,
 * CPED_CONFIG_FLAG_ForceThreatResponseToNonFriendToFriendMeleeActions = 394,
 * CPED_CONFIG_FLAG_DontRespondToRandomPedsDamage = 395,
 * CPED_CONFIG_FLAG_AllowContinuousThreatResponseWantedLevelUpdates = 396,
 * CPED_CONFIG_FLAG_KeepTargetLossResponseOnCleanup = 397,
 * CPED_CONFIG_FLAG_PlayersDontDragMeOutOfCar = 398,
 * CPED_CONFIG_FLAG_BroadcastRepondedToThreatWhenGoingToPointShooting = 399,
 * CPED_CONFIG_FLAG_IgnorePedTypeForIsFriendlyWith = 400,
 * CPED_CONFIG_FLAG_TreatNonFriendlyAsHateWhenInCombat = 401,
 * CPED_CONFIG_FLAG_DontLeaveVehicleIfLeaderNotInVehicle = 402,
 * CPED_CONFIG_FLAG_ChangeFromPermanentToAmbientPopTypeOnMigration = 403,
 * CPED_CONFIG_FLAG_AllowMeleeReactionIfMeleeProofIsOn = 404,
 * CPED_CONFIG_FLAG_UsingLowriderLeans = 405,
 * CPED_CONFIG_FLAG_UsingAlternateLowriderLeans = 406,
 * CPED_CONFIG_FLAG_UseNormalExplosionDamageWhenBlownUpInVehicle = 407,
 * CPED_CONFIG_FLAG_DisableHomingMissileLockForVehiclePedInside = 408,
 * CPED_CONFIG_FLAG_DisableTakeOffScubaGear = 409,
 * CPED_CONFIG_FLAG_IgnoreMeleeFistWeaponDamageMult = 410,
 * CPED_CONFIG_FLAG_LawPedsCanFleeFromNonWantedPlayer = 411,
 * CPED_CONFIG_FLAG_ForceBlipSecurityPedsIfPlayerIsWanted = 412,
 * CPED_CONFIG_FLAG_IsHolsteringWeapon = 413,
 * CPED_CONFIG_FLAG_UseGoToPointForScenarioNavigation = 414,
 * CPED_CONFIG_FLAG_DontClearLocalPassengersWantedLevel = 415,
 * CPED_CONFIG_FLAG_BlockAutoSwapOnWeaponPickups = 416,
 * CPED_CONFIG_FLAG_ThisPedIsATargetPriorityForAI = 417,
 * CPED_CONFIG_FLAG_IsSwitchingHelmetVisor = 418,
 * CPED_CONFIG_FLAG_ForceHelmetVisorSwitch = 419,
 * CPED_CONFIG_FLAG_IsPerformingVehicleMelee = 420,
 * CPED_CONFIG_FLAG_UseOverrideFootstepPtFx = 421,
 * CPED_CONFIG_FLAG_DisableVehicleCombat = 422,
 * CPED_CONFIG_FLAG_TreatAsFriendlyForTargetingAndDamage = 423,
 * CPED_CONFIG_FLAG_AllowBikeAlternateAnimations = 424,
 * CPED_CONFIG_FLAG_TreatAsFriendlyForTargetingAndDamageNonSynced = 425,
 * CPED_CONFIG_FLAG_UseLockpickVehicleEntryAnimations = 426,
 * CPED_CONFIG_FLAG_IgnoreInteriorCheckForSprinting = 427,
 * CPED_CONFIG_FLAG_SwatHeliSpawnWithinLastSpottedLocation = 428,
 * CPED_CONFIG_FLAG_DisableStartEngine = 429,
 * CPED_CONFIG_FLAG_IgnoreBeingOnFire = 430,
 * CPED_CONFIG_FLAG_DisableTurretOrRearSeatPreference = 431,
 * CPED_CONFIG_FLAG_DisableWantedHelicopterSpawning = 432,
 * CPED_CONFIG_FLAG_UseTargetPerceptionForCreatingAimedAtEvents = 433,
 * CPED_CONFIG_FLAG_DisableHomingMissileLockon = 434,
 * CPED_CONFIG_FLAG_ForceIgnoreMaxMeleeActiveSupportCombatants = 435,
 * CPED_CONFIG_FLAG_StayInDefensiveAreaWhenInVehicle = 436,
 * CPED_CONFIG_FLAG_DontShoutTargetPosition = 437,
 * CPED_CONFIG_FLAG_DisableHelmetArmor = 438,
 * CPED_CONFIG_FLAG_CreatedByConcealedPlayer = 439,
 * CPED_CONFIG_FLAG_PermanentlyDisablePotentialToBeWalkedIntoResponse = 440,
 * CPED_CONFIG_FLAG_PreventVehExitDueToInvalidWeapon = 441,
 * CPED_CONFIG_FLAG_IgnoreNetSessionFriendlyFireCheckForAllowDamage = 442,
 * CPED_CONFIG_FLAG_DontLeaveCombatIfTargetPlayerIsAttackedByPolice = 443,
 * CPED_CONFIG_FLAG_CheckLockedBeforeWarp = 444,
 * CPED_CONFIG_FLAG_DontShuffleInVehicleToMakeRoom = 445,
 * CPED_CONFIG_FLAG_GiveWeaponOnGetup = 446,
 * CPED_CONFIG_FLAG_DontHitVehicleWithProjectiles = 447,
 * CPED_CONFIG_FLAG_DisableForcedEntryForOpenVehiclesFromTryLockedDoor = 448,
 * CPED_CONFIG_FLAG_FiresDummyRockets = 449,
 * CPED_CONFIG_FLAG_PedIsArresting = 450,
 * CPED_CONFIG_FLAG_IsDecoyPed = 451,
 * CPED_CONFIG_FLAG_HasEstablishedDecoy = 452,
 * CPED_CONFIG_FLAG_BlockDispatchedHelicoptersFromLanding = 453,
 * CPED_CONFIG_FLAG_DontCryForHelpOnStun = 454,
 * CPED_CONFIG_FLAG_HitByTranqWeapon = 455,
 * CPED_CONFIG_FLAG_CanBeIncapacitated = 456,
 * CPED_CONFIG_FLAG_ForcedAimFromArrest = 457,
 * CPED_CONFIG_FLAG_DontChangeTargetFromMelee = 458,
 * _0x4376ABF2 = 459,
 * CPED_CONFIG_FLAG_RagdollFloatsIndefinitely = 460,
 * CPED_CONFIG_FLAG_BlockElectricWeaponDamage = 461,
 * _0x262A3B8E = 462,
 * _0x1AA79A25 = 463,
 * }
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_CONFIG_FLAG](?\_0x1913FE4CBF41C463).</strong>
 *
 * Hash: 0x9CFBE10D
 * @deprecated Use ped.setConfigFlag(ped1, flagId, value) instead
 */
export function setPedConfigFlag(ped1: number | Ped, flagId: number, value: boolean): void {
    return ped.setConfigFlag(ped1, flagId, value);
}

/**
 * ```
 * Sets Ped Default Clothes
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_DEFAULT_COMPONENT_VARIATION](?\_0x45EEE61580806D63).</strong>
 *
 * Hash: 0xC866A984
 * @deprecated Use ped.setDefaultComponentVariation(ped1) instead
 */
export function setPedDefaultComponentVariation(ped1: number | Ped): void {
    return ped.setDefaultComponentVariation(ped1);
}

/**
 * Sets the tint index for the hair on the specified ped.
 *
 * ```
 * NativeDB Introduced: v323
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_HAIR_TINT](?\_0x4CFFC65454C93A49).</strong>
 *
 * Hash: 0xA23FE32C
 * @deprecated Use ped.setHairTint(ped1, colorID, highlightColorID) instead
 */
export function setPedHairTint(ped1: number | Ped, colorID: number, highlightColorID: number): void {
    return ped.setHairTint(ped1, colorID, highlightColorID);
}

/**
 * For more info please refer to [this](https://gtaforums.com/topic/858970-all-gtao-face-ids-pedset-ped-head-blend-data-explained) topic.
 * <strong>Other information:</strong>
 * IDs start at zero and go Male Non-DLC, Female Non-DLC, Male DLC, and Female DLC.</br>
 * This native function is often called prior to calling natives such as:
 *
 * *   [`SetPedHairColor`](#\_0xA23FE32C)
 * *   [`SetPedHeadOverlayColor`](#\_0x78935A27)
 * *   [`SetPedHeadOverlay`](#\_0xD28DBA90)
 * *   [`SetPedFaceFeature`](#\_0x6C8D4458)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_HEAD_BLEND_DATA](?\_0x9414E18B9434C2FE).</strong>
 *
 * Hash: 0x60746B88
 * @deprecated Use ped.setHeadBlendData(ped1, shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent) instead
 */
export function setPedHeadBlendData(ped1: number | Ped, shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean): void {
    return ped.setHeadBlendData(ped1, shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent);
}

/**
 * ```
 * OverlayID ranges from 0 to 12, index from 0 to _GET_NUM_OVERLAY_VALUES(overlayID)-1, and opacity from 0.0 to 1.0.
 * overlayID       Part                  Index, to disable
 * 0               Blemishes             0 - 23, 255
 * 1               Facial Hair           0 - 28, 255
 * 2               Eyebrows              0 - 33, 255
 * 3               Ageing                0 - 14, 255
 * 4               Makeup                0 - 74, 255
 * 5               Blush                 0 - 6, 255
 * 6               Complexion            0 - 11, 255
 * 7               Sun Damage            0 - 10, 255
 * 8               Lipstick              0 - 9, 255
 * 9               Moles/Freckles        0 - 17, 255
 * 10              Chest Hair            0 - 16, 255
 * 11              Body Blemishes        0 - 11, 255
 * 12              Add Body Blemishes    0 - 1, 255
 * ```
 *
 * <strong>Note:</strong>
 * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_HEAD_OVERLAY](?\_0x48F44967FA05CC1E).</strong>
 *
 * Hash: 0xD28DBA90
 * @deprecated Use ped.setHeadOverlay(ped1, overlayID, index, opacity) instead
 */
export function setPedHeadOverlay(ped1: number | Ped, overlayID: number, index: number, opacity: number): void {
    return ped.setHeadOverlay(ped1, overlayID, index, opacity);
}

/**
 * SET_PED_INTO_VEHICLE
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_INTO_VEHICLE](?\_0xF75B0D629E1C063D).</strong>
 *
 * Hash: 0x7500C79
 * @deprecated Use ped.setIntoVehicle(ped1, vehicle, seatIndex) instead
 */
export function setPedIntoVehicle(ped1: number | Ped, vehicle: number | Vehicle, seatIndex: number): void {
    return ped.setIntoVehicle(ped1, vehicle, seatIndex);
}

/**
 * This native is used to set prop variation on a ped. Components, drawables and textures IDs are related to the ped model.
 *
 * ### MP Freemode list of props
 *
 * **0**: Hats
 * **1**: Glasses
 * **2**: Ears
 * **6**: Watches
 * **7**: Bracelets
 * List of Prop IDs
 *
 * ```cpp
 * enum eAnchorPoints
 * {
 * ANCHOR_HEAD = 0, // "p_head"
 * ANCHOR_EYES = 1, // "p_eyes"
 * ANCHOR_EARS = 2, // "p_ears"
 * ANCHOR_MOUTH = 3, // "p_mouth"
 * ANCHOR_LEFT_HAND = 4, // "p_lhand"
 * ANCHOR_RIGHT_HAND = 5, // "p_rhand"
 * ANCHOR_LEFT_WRIST = 6, // "p_lwrist"
 * ANCHOR_RIGHT_WRIST = 7, // "p_rwrist"
 * ANCHOR_HIP = 8, // "p_lhip"
 * ANCHOR_LEFT_FOOT = 9, // "p_lfoot"
 * ANCHOR_RIGHT_FOOT = 10, // "p_rfoot"
 * ANCHOR_PH_L_HAND = 11, // "ph_lhand"
 * ANCHOR_PH_R_HAND = 12, // "ph_rhand"
 * NUM_ANCHORS = 13,
 * };
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_PROP_INDEX](?\_0x93376B65A266EB5F).</strong>
 *
 * Hash: 0x829F2E2
 * @deprecated Use ped.setPropIndex(ped1, componentId, drawableId, textureId, attach) instead
 */
export function setPedPropIndex(ped1: number | Ped, componentId: number, drawableId: number, textureId: number, attach: boolean): void {
    return ped.setPropIndex(ped1, componentId, drawableId, textureId, attach);
}

/**
 * ```
 * p1 is always 0 in R* scripts; and a quick disassembly seems to indicate that p1 is unused.
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RANDOM_COMPONENT_VARIATION](?\_0xC8A9481A01E63C28).</strong>
 *
 * Hash: 0x4111BA46
 * @deprecated Use ped.setRandomComponentVariation(ped1) instead
 */
export function setPedRandomComponentVariation(ped1: number | Ped): void {
    return ped.setRandomComponentVariation(ped1);
}

/**
 * SET_PED_RANDOM_PROPS
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RANDOM_PROPS](?\_0xC44AA05345C992C6).</strong>
 *
 * Hash: 0xE3318E0E
 * @deprecated Use ped.setRandomProps(ped1) instead
 */
export function setPedRandomProps(ped1: number | Ped): void {
    return ped.setRandomProps(ped1);
}

/**
 * `PED::SET_PED_RESET_FLAG(PLAYER::PLAYER_PED_ID(), 240, 1);`
 * Known values:
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RESET_FLAG](?\_0xC1E8A365BF3B29F2).</strong>
 *
 * Hash: 0xCFF6FF66
 * @deprecated Use ped.setResetFlag(ped1, flagId, doReset) instead
 */
export function setPedResetFlag(ped1: number | Ped, flagId: number, doReset: boolean): void {
    return ped.setResetFlag(ped1, flagId, doReset);
}

/**
 * p4/p5: Unusued in TU27
 *
 * ### Ragdoll Types
 *
 * **0**: CTaskNMRelax
 * **1**: CTaskNMScriptControl: Hardcoded not to work in networked environments.
 * **Else**: CTaskNMBalance
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_TO_RAGDOLL](?\_0xAE99FB955581844A).</strong>
 *
 * Hash: 0x83CB5052
 * @deprecated Use ped.setToRagdoll(ped1, minTime, maxTime, ragdollType, bAbortIfInjured, bAbortIfDead, bForceScriptControl) instead
 */
export function setPedToRagdoll(ped1: number | Ped, minTime: number, maxTime: number, ragdollType: number, bAbortIfInjured: boolean, bAbortIfDead: boolean, bForceScriptControl: boolean): void {
    return ped.setToRagdoll(ped1, minTime, maxTime, ragdollType, bAbortIfInjured, bAbortIfDead, bForceScriptControl);
}

/**
 * ```cpp
 * enum eNMFallType {
 * TYPE_FROM_HIGH = 0,
 * TYPE_OVER_WALL = 1,
 * TYPE_DOWN_STAIRS = 2,
 * TYPE_DIE_TYPES = 3,
 * TYPE_DIE_FROM_HIGH = 4,
 * TYPE_DIE_OVER_WALL = 5,
 * TYPE_DIE_DOWN_STAIRS = 6
 * }
 * ```
 *
 * ```
 * Return variable is never used in R*'s scripts.
 * Not sure what p2 does. It seems like it would be a time judging by it's usage in R*'s scripts, but didn't seem to affect anything in my testings.
 * x, y, and z are coordinates, most likely to where the ped will fall.
 * p7 is probably the force of the fall, but untested, so I left the variable name the same.
 * p8 to p13 are always 0f in R*'s scripts.
 * (Simplified) Example of the usage of the function from R*'s scripts:
 * `ped::set_ped_to_ragdoll_with_fall(ped, 1500, 2000, 1, -entity::get_entity_forward_vector(ped), 1f, 0f, 0f, 0f, 0f, 0f, 0f);`
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_TO_RAGDOLL_WITH_FALL](?\_0xD76632D99E4966C8).</strong>
 *
 * Hash: 0xFA12E286
 * @deprecated Use ped.setToRagdollWithFall(ped1, minTime, maxTime, nFallType, dirX, dirY, dirZ, fGroundHeight, grab1X, grab1Y, grab1Z, grab2X, grab2Y, grab2Z) instead
 */
export function setPedToRagdollWithFall(ped1: number | Ped, minTime: number, maxTime: number, nFallType: number, dirX: number, dirY: number, dirZ: number, fGroundHeight: number, grab1X: number, grab1Y: number, grab1Z: number, grab2X: number, grab2Y: number, grab2Z: number): void {
    return ped.setToRagdollWithFall(ped1, minTime, maxTime, nFallType, dirX, dirY, dirZ, fGroundHeight, grab1X, grab1Y, grab1Z, grab2X, grab2Y, grab2Z);
}

/**
 * Used for freemode (online) characters.
 * Indices:
 *
 * 1.  black
 * 2.  very light blue/green
 * 3.  dark blue
 * 4.  brown
 * 5.  darker brown
 * 6.  light brown
 * 7.  blue
 * 8.  light blue
 * 9.  pink
 * 10. yellow
 * 11. purple
 * 12. black
 * 13. dark green
 * 14. light brown
 * 15. yellow/black pattern
 * 16. light colored spiral pattern
 * 17. shiny red
 * 18. shiny half blue/half red
 * 19. half black/half light blue
 * 20. white/red perimter
 * 21. green snake
 * 22. red snake
 * 23. dark blue snake
 * 24. dark yellow
 * 25. bright yellow
 * 26. all black
 * 27. red small pupil
 * 28. devil blue/black
 * 29. white small pupil
 * 30. glossed over
 *
 * <strong>This is the server-side RPC native equivalent of the client native [\_SET_PED_EYE_COLOR](?\_0x50B56988B170AFDF).</strong>
 *
 * Hash: 0xEC09DB1B
 * @deprecated Use ped.setEyeColor(ped1, index) instead
 */
export function setPedEyeColor(ped1: number | Ped, index: number): void {
    return ped.setEyeColor(ped1, index);
}

/**
 * Sets the various freemode face features, e.g. nose length, chin shape.
 * <strong>Indexes (From 0 to 19):</strong>
 * Parentheses indicate morph scale/direction as in (-1.0 to 1.0)
 *
 * *   **0**: Nose Width (Thin/Wide)
 * *   **1**: Nose Peak (Up/Down)
 * *   **2**: Nose Length (Long/Short)
 * *   **3**: Nose Bone Curveness (Crooked/Curved)
 * *   **4**: Nose Tip (Up/Down)
 * *   **5**: Nose Bone Twist (Left/Right)
 * *   **6**: Eyebrow (Up/Down)
 * *   **7**: Eyebrow (In/Out)
 * *   **8**: Cheek Bones (Up/Down)
 * *   **9**: Cheek Sideways Bone Size (In/Out)
 * *   **10**: Cheek Bones Width (Puffed/Gaunt)
 * *   **11**: Eye Opening (Both) (Wide/Squinted)
 * *   **12**: Lip Thickness (Both) (Fat/Thin)
 * *   **13**: Jaw Bone Width (Narrow/Wide)
 * *   **14**: Jaw Bone Shape (Round/Square)
 * *   **15**: Chin Bone (Up/Down)
 * *   **16**: Chin Bone Length (In/Out or Backward/Forward)
 * *   **17**: Chin Bone Shape (Pointed/Square)
 * *   **18**: Chin Hole (Chin Bum)
 * *   **19**: Neck Thickness (Thin/Thick)
 * <strong>Note:</strong>
 * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [\_SET_PED_FACE_FEATURE](?\_0x71A5C1DBA060049E).</strong>
 *
 * Hash: 0x6C8D4458
 * @deprecated Use ped.setFaceFeature(ped1, index, scale) instead
 */
export function setPedFaceFeature(ped1: number | Ped, index: number, scale: number): void {
    return ped.setFaceFeature(ped1, index, scale);
}

/**
 * ```
 * Used for freemode (online) characters.
 * Called after SET_PED_HEAD_OVERLAY().
 * ```
 *
 * <strong>Note:</strong>
 * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [\_SET_PED_HEAD_OVERLAY_COLOR](?\_0x497BF74A7B9CB952).</strong>
 *
 * Hash: 0x78935A27
 * @deprecated Use ped.setHeadOverlayColor(ped1, overlayID, colorType, colorID, secondColorID) instead
 */
export function setPedHeadOverlayColor(ped1: number | Ped, overlayID: number, colorType: number, colorID: number, secondColorID: number): void {
    return ped.setHeadOverlayColor(ped1, overlayID, colorType, colorID, secondColorID);
}

/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
 *
 * Hash: 0x8689A825
 * @deprecated Use player.getMeleeWeaponDamageModifier(playerId) instead
 */
export function getPlayerMeleeWeaponDamageModifier(playerId: number | string | Player): number {
    return player.getMeleeWeaponDamageModifier(playerId);
}

/**
 * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
 *
 * Hash: 0x2A3D7CDA
 * @deprecated Use player.getWeaponDamageModifier(playerId) instead
 */
export function getPlayerWeaponDamageModifier(playerId: number | string | Player): number {
    return player.getWeaponDamageModifier(playerId);
}

/**
 * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
 *
 * Hash: 0xF1543251
 * @deprecated Use player.getWeaponDefenseModifier(playerId) instead
 */
export function getPlayerWeaponDefenseModifier(playerId: number | string | Player): number {
    return player.getWeaponDefenseModifier(playerId);
}

/**
 * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
 *
 * Hash: 0x986B65FF
 * @deprecated Use player.getWeaponDefenseModifier2(playerId) instead
 */
export function getPlayerWeaponDefenseModifier2(playerId: number | string | Player): number {
    return player.getWeaponDefenseModifier2(playerId);
}

/**
 * Returns whether or not the specified player has enough information to start a commerce session for.
 *
 * Hash: 0x429461C3
 * @deprecated Use player.canStartCommerceSession(playerSrc) instead
 */
export function canPlayerStartCommerceSession(playerSrc: string): boolean {
    return player.canStartCommerceSession(playerSrc);
}

/**
 * ```
 * `This executes at the same as speed as PLAYER::SET_PLAYER_WANTED_LEVEL(player, 0, false);`
 * `PLAYER::GET_PLAYER_WANTED_LEVEL(player); executes in less than half the time. Which means that it's worth first checking if the wanted level needs to be cleared before clearing. However, this is mostly about good code practice and can important in other situations. The difference in time in this example is negligible.`
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PLAYER_WANTED_LEVEL](?\_0xB302540597885499).</strong>
 *
 * Hash: 0x54EA5BCC
 * @deprecated Use player.clearWantedLevel(player1) instead
 */
export function clearPlayerWantedLevel(player1: number | string | Player): void {
    return player.clearWantedLevel(player1);
}

/**
 * Returns whether or not the player exists
 *
 * Hash: 0x12038599
 * @deprecated Use player.doesExist(playerSrc) instead
 */
export function doesPlayerExist(playerSrc: string): boolean {
    return player.doesExist(playerSrc);
}

/**
 * Requests whether or not the player owns the specified SKU.
 *
 * Hash: 0x167ABA27
 * @deprecated Use player.doesOwnSku(playerSrc, skuId) instead
 */
export function doesPlayerOwnSku(playerSrc: string, skuId: number): boolean {
    return player.doesOwnSku(playerSrc, skuId);
}

/**
 * Requests whether or not the player owns the specified package.
 *
 * Hash: 0xDEF0480B
 * @deprecated Use player.doesOwnSkuExt(playerSrc, skuId) instead
 */
export function doesPlayerOwnSkuExt(playerSrc: string, skuId: number): boolean {
    return player.doesOwnSkuExt(playerSrc, skuId);
}

/**
 * No comment provided
 *
 * Hash: 0xBA0613E1
 * @deprecated Use player.drop(playerSrc, reason) instead
 */
export function dropPlayer(playerSrc: string, reason: string): void {
    return player.drop(playerSrc, reason);
}

/**
 * No comment provided
 *
 * Hash: 0x62FC38D0
 * @deprecated Use player.getAirDragMultiplierForsVehicle(playerSrc) instead
 */
export function getAirDragMultiplierForPlayersVehicle(playerSrc: string): number {
    return player.getAirDragMultiplierForsVehicle(playerSrc);
}

/**
 * No comment provided
 *
 * Hash: 0xFF7F66AB
 * @deprecated Use player.getNumIdentifiers(playerSrc) instead
 */
export function getNumPlayerIdentifiers(playerSrc: string): number {
    return player.getNumIdentifiers(playerSrc);
}

/**
 * No comment provided
 *
 * Hash: 0x63D13184
 * @deprecated Use player.getNumIndices() instead
 */
export function getNumPlayerIndices(): number {
    return player.getNumIndices();
}

/**
 * No comment provided
 *
 * Hash: 0x619E4A3D
 * @deprecated Use player.getNumTokens(playerSrc) instead
 */
export function getNumPlayerTokens(playerSrc: string): number {
    return player.getNumTokens(playerSrc);
}

/**
 * Gets the current camera rotation for a specified player. This native is used server side when using OneSync.
 *
 * Hash: 0x433C765D
 * @deprecated Use player.getCameraRotation(playerSrc) instead
 */
export function getPlayerCameraRotation(playerSrc: string): Vector3 {
    return player.getCameraRotation(playerSrc);
}

/**
 * No comment provided
 *
 * Hash: 0xFEE404F9
 * @deprecated Use player.getEndpoint(playerSrc) instead
 */
export function getPlayerEndpoint(playerSrc: string): string {
    return player.getEndpoint(playerSrc);
}

/**
 * Gets the current fake wanted level for a specified player. This native is used server side when using OneSync.
 *
 * Hash: 0x98D244
 * @deprecated Use player.getFakeWantedLevel(playerSrc) instead
 */
export function getPlayerFakeWantedLevel(playerSrc: string): number {
    return player.getFakeWantedLevel(playerSrc);
}

/**
 * Gets the focus position (i.e. the position of the active camera in the game world) of a player.
 *
 * Hash: 0x586F80FF
 * @deprecated Use player.getFocusPos(playerSrc) instead
 */
export function getPlayerFocusPos(playerSrc: string): Vector3 {
    return player.getFocusPos(playerSrc);
}

/**
 * No comment provided
 *
 * Hash: 0xC8A9CE08
 * @deprecated Use player.getFromIndex(index) instead
 */
export function getPlayerFromIndex(index: number): string {
    return player.getFromIndex(index);
}

/**
 * No comment provided
 *
 * Hash: 0xE52D9680
 * @deprecated Use player.getGuid(playerSrc) instead
 */
export function getPlayerGuid(playerSrc: string): string {
    return player.getGuid(playerSrc);
}

/**
 * To get the number of identifiers, use [GET_NUM_PLAYER_IDENTIFIERS](#\_0xFF7F66AB)
 *
 * To get a specific type of identifier, use [GET_PLAYER_IDENTIFIER_BY_TYPE](#\_0xA61C8FC6)
 *
 * Hash: 0x7302DBCF
 * @deprecated Use player.getIdentifier(playerSrc, identiferIndex) instead
 */
export function getPlayerIdentifier(playerSrc: string, identiferIndex: number): string {
    return player.getIdentifier(playerSrc, identiferIndex);
}

/**
 * Get an identifier from a player by the type of the identifier.
 * Known [Identifiers](https://docs.fivem.net/docs/scripting-reference/runtimes/lua/functions/GetPlayerIdentifiers/#identifier-types)
 *
 * Hash: 0xA61C8FC6
 * @deprecated Use player.getIdentifierByType(playerSrc, identifierType) instead
 */
export function getPlayerIdentifierByType(playerSrc: string, identifierType: string): string {
    return player.getIdentifierByType(playerSrc, identifierType);
}

/**
 * No comment provided
 *
 * Hash: 0x680C90EE
 * @deprecated Use player.getInvincible(playerSrc) instead
 */
export function getPlayerInvincible(playerSrc: string): boolean {
    return player.getInvincible(playerSrc);
}

/**
 * No comment provided
 *
 * Hash: 0x427E8E6A
 * @deprecated Use player.getLastMsg(playerSrc) instead
 */
export function getPlayerLastMsg(playerSrc: string): number {
    return player.getLastMsg(playerSrc);
}

/**
 * No comment provided
 *
 * Hash: 0x2A50657
 * @deprecated Use player.getMaxArmour(playerSrc) instead
 */
export function getPlayerMaxArmour(playerSrc: string): number {
    return player.getMaxArmour(playerSrc);
}

/**
 * No comment provided
 *
 * Hash: 0x8154E470
 * @deprecated Use player.getMaxHealth(playerSrc) instead
 */
export function getPlayerMaxHealth(playerSrc: string): number {
    return player.getMaxHealth(playerSrc);
}

/**
 * No comment provided
 *
 * Hash: 0x406B4B20
 * @deprecated Use player.getName(playerSrc) instead
 */
export function getPlayerName(playerSrc: string): string {
    return player.getName(playerSrc);
}

/**
 * Used to get the player's Ped Entity ID when a valid `playerSrc` is passed.
 *
 * Hash: 0x6E31E993
 * @deprecated Use player.getPed(playerSrc) instead
 */
export function getPlayerPed(playerSrc: string): number {
    return player.getPed(playerSrc);
}

/**
 * ```cpp
 * const int ENET_PACKET_LOSS_SCALE = 65536;
 *
 * enum PeerStatistics
 * {
 * // PacketLoss will only update once every 10 seconds, use PacketLossEpoch if you want the time
 * // since the last time the packet loss was updated.
 *
 * // the amount of packet loss the player has, needs to be scaled with PACKET_LOSS_SCALE
 * PacketLoss = 0,
 * // The variance in the packet loss
 * PacketLossVariance = 1,
 * // The time since the last packet update in ms, relative to the peers connection time
 * PacketLossEpoch = 2,
 * // The mean amount of time it takes for a packet to get to the client (ping)
 * RoundTripTime = 3,
 * // The variance in the round trip time
 * RoundTripTimeVariance = 4,
 * // Despite their name, these are only updated once every 5 seconds, you can get the last time this was updated with PacketThrottleEpoch
 * // The last recorded round trip time of a packet
 * LastRoundTripTime = 5,
 * // The last round trip time variance
 * LastRoundTripTimeVariance = 6,
 * // The time since the last packet throttle update, relative to the peers connection time
 * PacketThrottleEpoch = 7,
 * };
 * ```
 *
 * These statistics only update once every 10 seconds.
 *
 * Hash: 0x9A928294
 * @deprecated Use player.getPeerStatistics(playerSrc, peerStatistic) instead
 */
export function getPlayerPeerStatistics(playerSrc: string, peerStatistic: number): number {
    return player.getPeerStatistics(playerSrc, peerStatistic);
}

/**
 * See [GET_PLAYER_PEER_STATISTICS](#\_0x9A928294) if you want more detailed information, like packet loss, and packet/rtt variance
 *
 * Hash: 0xFF1290D4
 * @deprecated Use player.getPing(playerSrc) instead
 */
export function getPlayerPing(playerSrc: string): number {
    return player.getPing(playerSrc);
}

/**
 * Gets the routing bucket for the specified player.
 *
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 *
 * Hash: 0x52441C34
 * @deprecated Use player.getRoutingBucket(playerSrc) instead
 */
export function getPlayerRoutingBucket(playerSrc: string): number {
    return player.getRoutingBucket(playerSrc);
}

/**
 * No comment provided
 *
 * Hash: 0x9873E404
 * @deprecated Use player.getTeam(playerSrc) instead
 */
export function getPlayerTeam(playerSrc: string): number {
    return player.getTeam(playerSrc);
}

/**
 * ```
 * Gets the amount of time player has spent evading the cops.
 * Counter starts and increments only when cops are chasing the player.
 * If the player is evading, the timer will pause.
 * ```
 *
 * Hash: 0x7ADE63E1
 * @deprecated Use player.getTimeInPursuit(playerSrc, lastPursuit) instead
 */
export function getPlayerTimeInPursuit(playerSrc: string, lastPursuit: boolean): number {
    return player.getTimeInPursuit(playerSrc, lastPursuit);
}

/**
 * Gets the current time online for a specified player.
 *
 * Hash: 0x67D2E605
 * @deprecated Use player.getTimeOnline(playerSrc) instead
 */
export function getPlayerTimeOnline(playerSrc: string): number {
    return player.getTimeOnline(playerSrc);
}

/**
 * Gets a player's token. Tokens can be used to enhance banning logic, however are specific to a server.
 *
 * Hash: 0x54C06897
 * @deprecated Use player.getToken(playerSrc, index) instead
 */
export function getPlayerToken(playerSrc: string, index: number): string {
    return player.getToken(playerSrc, index);
}

/**
 * Gets the current known coordinates for the specified player from cops perspective. This native is used server side when using OneSync.
 *
 * Hash: 0x821F2D2C
 * @deprecated Use player.getWantedCentrePosition(playerSrc) instead
 */
export function getPlayerWantedCentrePosition(playerSrc: string): Vector3 {
    return player.getWantedCentrePosition(playerSrc);
}

/**
 * ```
 * Returns given players wanted level server-side.
 * ```
 *
 * Hash: 0xBDCDD163
 * @deprecated Use player.getWantedLevel(playerSrc) instead
 */
export function getPlayerWantedLevel(playerSrc: string): number {
    return player.getWantedLevel(playerSrc);
}

/**
 * This native checks if the given ped is a player.
 *
 * Hash: 0x404794CA
 * @deprecated Use player.isPedA(ped) instead
 */
export function isPedAPlayer(ped: number | Ped): boolean {
    return player.isPedA(ped);
}

/**
 * No comment provided
 *
 * Hash: 0xDEDAE23D
 * @deprecated Use player.isAceAllowed(playerSrc, _object) instead
 */
export function isPlayerAceAllowed(playerSrc: string, _object: string): boolean {
    return player.isAceAllowed(playerSrc, _object);
}

/**
 * Requests whether or not the commerce data for the specified player has loaded.
 *
 * Hash: 0xBEFE93F4
 * @deprecated Use player.isCommerceInfoLoaded(playerSrc) instead
 */
export function isPlayerCommerceInfoLoaded(playerSrc: string): boolean {
    return player.isCommerceInfoLoaded(playerSrc);
}

/**
 * Requests whether or not the commerce data for the specified player has loaded from Tebex.
 *
 * Hash: 0x1D14F4FE
 * @deprecated Use player.isCommerceInfoLoadedExt(playerSrc) instead
 */
export function isPlayerCommerceInfoLoadedExt(playerSrc: string): boolean {
    return player.isCommerceInfoLoadedExt(playerSrc);
}

/**
 * ```
 * This will return true if the player is evading wanted level, meaning that the wanted level stars are blink.
 * Otherwise will return false.
 *
 * If the player is not wanted, it simply returns false.
 * ```
 *
 * Hash: 0x89A3881A
 * @deprecated Use player.isEvadingWantedLevel(playerSrc) instead
 */
export function isPlayerEvadingWantedLevel(playerSrc: string): boolean {
    return player.isEvadingWantedLevel(playerSrc);
}

/**
 * No comment provided
 *
 * Hash: 0x1F14F2AC
 * @deprecated Use player.isInFreeCamMode(playerSrc) instead
 */
export function isPlayerInFreeCamMode(playerSrc: string): boolean {
    return player.isInFreeCamMode(playerSrc);
}

/**
 * No comment provided
 *
 * Hash: 0xC7D2C20C
 * @deprecated Use player.isUsingSuperJump(playerSrc) instead
 */
export function isPlayerUsingSuperJump(playerSrc: string): boolean {
    return player.isUsingSuperJump(playerSrc);
}

/**
 * Requests the commerce data for the specified player, including the owned SKUs. Use `IS_PLAYER_COMMERCE_INFO_LOADED` to check if it has loaded.
 *
 * Hash: 0xA8F63EAB
 * @deprecated Use player.loadCommerceData(playerSrc) instead
 */
export function loadPlayerCommerceData(playerSrc: string): void {
    return player.loadCommerceData(playerSrc);
}

/**
 * Requests the commerce data from Tebex for the specified player, including the owned SKUs.
 *
 * Use [`IS_PLAYER_COMMERCE_INFO_LOADED_EXT`](#\_0x1D14F4FE) to check if it has loaded.
 *
 * This will not automatically update whenever a client purchases a package, if you want to fetch new purchases you will need to call this native again.
 *
 * This native will temporarily cache the players commerce data for 10 seconds, a call to this native after 10 seconds will re-fetch the players commerce data.
 *
 * Hash: 0x7995539E
 * @deprecated Use player.loadCommerceDataExt(playerSrc) instead
 */
export function loadPlayerCommerceDataExt(playerSrc: string): void {
    return player.loadCommerceDataExt(playerSrc);
}

/**
 * Requests the specified player to buy the passed SKU. This'll pop up a prompt on the client, which upon acceptance
 * will open the browser prompting further purchase details.
 *
 * Hash: 0x96F93CCE
 * @deprecated Use player.requestCommerceSession(playerSrc, skuId) instead
 */
export function requestPlayerCommerceSession(playerSrc: string, skuId: number): void {
    return player.requestCommerceSession(playerSrc, skuId);
}

/**
 * ```
 * Flags:
 * SPC_AMBIENT_SCRIPT = (1 << 1),
 * SPC_CLEAR_TASKS = (1 << 2),
 * SPC_REMOVE_FIRES = (1 << 3),
 * SPC_REMOVE_EXPLOSIONS = (1 << 4),
 * SPC_REMOVE_PROJECTILES = (1 << 5),
 * SPC_DEACTIVATE_GADGETS = (1 << 6),
 * SPC_REENABLE_CONTROL_ON_DEATH = (1 << 7),
 * SPC_LEAVE_CAMERA_CONTROL_ON = (1 << 8),
 * SPC_ALLOW_PLAYER_DAMAGE = (1 << 9),
 * SPC_DONT_STOP_OTHER_CARS_AROUND_PLAYER = (1 << 10),
 * SPC_PREVENT_EVERYBODY_BACKOFF = (1 << 11),
 * SPC_ALLOW_PAD_SHAKE = (1 << 12)
 * See: https://alloc8or.re/gta5/doc/enums/eSetPlayerControlFlag.txt
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_CONTROL](?\_0x8D32347D6D4C40A2).</strong>
 *
 * Hash: 0xD17AFCD8
 * @deprecated Use player.setControl(player1, bHasControl, flags) instead
 */
export function setPlayerControl(player1: number | string | Player, bHasControl: boolean, flags: number): void {
    return player.setControl(player1, bHasControl, flags);
}

/**
 * Sets the culling radius for the specified player.
 * Set to `0.0` to reset.
 *
 * **WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
 *
 * Hash: 0x8A2FBAD4
 * @deprecated Use player.setCullingRadius(playerSrc, radius) instead
 */
export function setPlayerCullingRadius(playerSrc: string, radius: number): void {
    return player.setCullingRadius(playerSrc, radius);
}

/**
 * Make the player impervious to all forms of damage.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_INVINCIBLE](?\_0x239528EACDC3E7DE).</strong>
 *
 * Hash: 0xDFB9A2A2
 * @deprecated Use player.setInvincible(player1, bInvincible) instead
 */
export function setPlayerInvincible(player1: number | string | Player, bInvincible: boolean): void {
    return player.setInvincible(player1, bInvincible);
}

/**
 * Set the model for a specific Player. Note that this will destroy the current Ped for the Player and create a new one, any reference to the old ped will be invalid after calling this.
 * As per usual, make sure to request the model first and wait until it has loaded.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_MODEL](?\_0x00A1CADD00108836).</strong>
 *
 * Hash: 0x774A4C54
 * @deprecated Use player.setModel(player1, model) instead
 */
export function setPlayerModel(player1: number | string | Player, model: number | string): void {
    return player.setModel(player1, model);
}

/**
 * Sets the routing bucket for the specified player.
 *
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 *
 * Hash: 0x6504EB38
 * @deprecated Use player.setRoutingBucket(playerSrc, bucket) instead
 */
export function setPlayerRoutingBucket(playerSrc: string, bucket: number): void {
    return player.setRoutingBucket(playerSrc, bucket);
}

/**
 * SET_PLAYER_WANTED_LEVEL
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_WANTED_LEVEL](?\_0x39FF19C64EF7DA5B).</strong>
 *
 * Hash: 0xB7A0914B
 * @deprecated Use player.setWantedLevel(player1, wantedLevel, delayedResponse) instead
 */
export function setPlayerWantedLevel(player1: number | string | Player, wantedLevel: number, delayedResponse: boolean): void {
    return player.setWantedLevel(player1, wantedLevel, delayedResponse);
}

/**
 * No comment provided
 *
 * Hash: 0x1E35DBBA
 * @deprecated Use player.tempBan(playerSrc, reason) instead
 */
export function tempBanPlayer(playerSrc: string, reason: string): void {
    return player.tempBan(playerSrc, reason);
}

/**
 * On the server this will return the players source, on the client it will return the player handle.
 *
 * Hash: 0xA56135E0
 * @deprecated Use player.getFromStateBagName(bagName) instead
 */
export function getPlayerFromStateBagName(bagName: string): number {
    return player.getFromStateBagName(bagName);
}

/**
 * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
 *
 * Hash: 0xA886495D
 * @deprecated Use vehicle.getHeliBodyHealth(heli) instead
 */
export function getHeliBodyHealth(heli: number | Vehicle): number {
    return vehicle.getHeliBodyHealth(heli);
}

/**
 * This is a getter for [SET_DISABLE_HELI_EXPLODE_FROM_BODY_DAMAGE](#\_0xEDBC8405B3895CC9)
 *
 * Hash: 0x82AFC0A3
 * @deprecated Use vehicle.getHeliDisableExplodeFromBodyDamage(heli) instead
 */
export function getHeliDisableExplodeFromBodyDamage(heli: number | Vehicle): boolean {
    return vehicle.getHeliDisableExplodeFromBodyDamage(heli);
}

/**
 * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
 *
 * Hash: 0xA0FA0354
 * @deprecated Use vehicle.getHeliEngineHealth(heli) instead
 */
export function getHeliEngineHealth(heli: number | Vehicle): number {
    return vehicle.getHeliEngineHealth(heli);
}

/**
 * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
 *
 * Hash: 0xD4EC7858
 * @deprecated Use vehicle.getHeliGasTankHealth(heli) instead
 */
export function getHeliGasTankHealth(heli: number | Vehicle): number {
    return vehicle.getHeliGasTankHealth(heli);
}

/**
 * No comment provided
 *
 * Hash: 0xC37D668
 * @deprecated Use vehicle.getHeliMainRotorDamageScale(heli) instead
 */
export function getHeliMainRotorDamageScale(heli: number | Vehicle): number {
    return vehicle.getHeliMainRotorDamageScale(heli);
}

/**
 * No comment provided
 *
 * Hash: 0x1944AC95
 * @deprecated Use vehicle.getHeliPitchControl(heli) instead
 */
export function getHeliPitchControl(heli: number | Vehicle): number {
    return vehicle.getHeliPitchControl(heli);
}

/**
 * No comment provided
 *
 * Hash: 0xC40161E2
 * @deprecated Use vehicle.getHeliRearRotorDamageScale(heli) instead
 */
export function getHeliRearRotorDamageScale(heli: number | Vehicle): number {
    return vehicle.getHeliRearRotorDamageScale(heli);
}

/**
 * This native is a getter for [SET_HELI_TAIL_ROTOR_HEALTH](#\_0xFE205F38AAA58E5B)
 *
 * Hash: 0x33EE6E2B
 * @deprecated Use vehicle.getHeliRearRotorHealth(vehicle1) instead
 */
export function getHeliRearRotorHealth(vehicle1: number | Vehicle): number {
    return vehicle.getHeliRearRotorHealth(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x12948DE9
 * @deprecated Use vehicle.getHeliRollControl(heli) instead
 */
export function getHeliRollControl(heli: number | Vehicle): number {
    return vehicle.getHeliRollControl(heli);
}

/**
 * No comment provided
 *
 * Hash: 0x22239130
 * @deprecated Use vehicle.getHeliTailRotorDamageScale(heli) instead
 */
export function getHeliTailRotorDamageScale(heli: number | Vehicle): number {
    return vehicle.getHeliTailRotorDamageScale(heli);
}

/**
 * **Note**: This native is deprecated, please use [`GET_HELI_REAR_ROTOR_HEALTH`](#\_0x33EE6E2B) instead.
 *
 * Hash: 0xA41BC13D
 * @deprecated Use vehicle.getHeliTailRotorHealth(vehicle1) instead
 */
export function getHeliTailRotorHealth(vehicle1: number | Vehicle): number {
    return vehicle.getHeliTailRotorHealth(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x8E86238D
 * @deprecated Use vehicle.getHeliThrottleControl(heli) instead
 */
export function getHeliThrottleControl(heli: number | Vehicle): number {
    return vehicle.getHeliThrottleControl(heli);
}

/**
 * No comment provided
 *
 * Hash: 0x8FDC0768
 * @deprecated Use vehicle.getHeliYawControl(heli) instead
 */
export function getHeliYawControl(heli: number | Vehicle): number {
    return vehicle.getHeliYawControl(heli);
}

/**
 * No comment provided
 *
 * Hash: 0x3EFE38D1
 * @deprecated Use vehicle.getIsHeliEngineRunning(heli) instead
 */
export function getIsHeliEngineRunning(heli: number | Vehicle): boolean {
    return vehicle.getIsHeliEngineRunning(heli);
}

/**
 * No comment provided
 *
 * Hash: 0x1C939E87
 * @deprecated Use vehicle.getThrusterSideRcsThrottle(jetpack) instead
 */
export function getThrusterSideRcsThrottle(jetpack: number | Vehicle): number {
    return vehicle.getThrusterSideRcsThrottle(jetpack);
}

/**
 * No comment provided
 *
 * Hash: 0x94E24C96
 * @deprecated Use vehicle.getThrusterThrottle(jetpack) instead
 */
export function getThrusterThrottle(jetpack: number | Vehicle): number {
    return vehicle.getThrusterThrottle(jetpack);
}

/**
 * No comment provided
 *
 * Hash: 0x456E34A
 * @deprecated Use vehicle.getTrainBackwardCarriage(train) instead
 */
export function getTrainBackwardCarriage(train: number | Vehicle): number {
    return vehicle.getTrainBackwardCarriage(train);
}

/**
 * No comment provided
 *
 * Hash: 0x24DC88D9
 * @deprecated Use vehicle.getTrainForwardCarriage(train) instead
 */
export function getTrainForwardCarriage(train: number | Vehicle): number {
    return vehicle.getTrainForwardCarriage(train);
}

/**
 * This is a getter for the client-side native [`START_VEHICLE_HORN`](#\_0x9C8C6504B5B63D2C), which allows you to return the horn type of the vehicle.
 *
 * **Note**: This native only gets the hash value set with `START_VEHICLE_HORN`. If a wrong hash is passed into `START_VEHICLE_HORN`, it will return this wrong hash.
 *
 * ```cpp
 * enum eHornTypes
 * {
 * NORMAL = 1330140148,
 * HELDDOWN = -2087385909,
 * AGGRESSIVE = -92810745
 * }
 * ```
 *
 * Hash: 0xDEA49773
 * @deprecated Use vehicle.getHornType(vehicle1) instead
 */
export function getVehicleHornType(vehicle1: number | Vehicle): number {
    return vehicle.getHornType(vehicle1);
}

/**
 * This is a getter for [SET_HELI_TAIL_EXPLODE_THROW_DASHBOARD](#\_0x3EC8BF18AA453FE9)
 *
 * Hash: 0x23E46BD7
 * @deprecated Use vehicle.isHeliTailBoomBreakable(heli) instead
 */
export function isHeliTailBoomBreakable(heli: number | Vehicle): boolean {
    return vehicle.isHeliTailBoomBreakable(heli);
}

/**
 * No comment provided
 *
 * Hash: 0x2C59F987
 * @deprecated Use vehicle.isHeliTailBoomBroken(heli) instead
 */
export function isHeliTailBoomBroken(heli: number | Vehicle): boolean {
    return vehicle.isHeliTailBoomBroken(heli);
}

/**
 * No comment provided
 *
 * Hash: 0xFA9336E5
 * @deprecated Use vehicle.isTrainCaboose(train) instead
 */
export function isTrainCaboose(train: number | Vehicle): boolean {
    return vehicle.isTrainCaboose(train);
}

/**
 * No comment provided
 *
 * Hash: 0x77CC80DC
 * @deprecated Use vehicle.doesTrainStopAtStations(train) instead
 */
export function doesTrainStopAtStations(train: number | Vehicle): boolean {
    return vehicle.doesTrainStopAtStations(train);
}

/**
 * Gets the trains desired speed.
 *
 * Hash: 0xA4921EF5
 * @deprecated Use vehicle.getTrainCruiseSpeed(train) instead
 */
export function getTrainCruiseSpeed(train: number | Vehicle): number {
    return vehicle.getTrainCruiseSpeed(train);
}

/**
 * Gets the direction the train is facing
 *
 * Hash: 0x8DAF79B6
 * @deprecated Use vehicle.getTrainDirection(train) instead
 */
export function getTrainDirection(train: number | Vehicle): boolean {
    return vehicle.getTrainDirection(train);
}

/**
 * No comment provided
 *
 * Hash: 0x81B50033
 * @deprecated Use vehicle.getTrainState(train) instead
 */
export function getTrainState(train: number | Vehicle): number {
    return vehicle.getTrainState(train);
}

/**
 * No comment provided
 *
 * Hash: 0x9AA339D
 * @deprecated Use vehicle.getTrainTrackIndex(train) instead
 */
export function getTrainTrackIndex(train: number | Vehicle): number {
    return vehicle.getTrainTrackIndex(train);
}

/**
 * No comment provided
 *
 * Hash: 0x483B013C
 * @deprecated Use vehicle.getHandbrake(vehicle1) instead
 */
export function getVehicleHandbrake(vehicle1: number | Vehicle): boolean {
    return vehicle.getHandbrake(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x1382FCEA
 * @deprecated Use vehicle.getSteeringAngle(vehicle1) instead
 */
export function getVehicleSteeringAngle(vehicle1: number | Vehicle): number {
    return vehicle.getSteeringAngle(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xBB340D04
 * @deprecated Use vehicle.isEngineStarting(vehicle1) instead
 */
export function isVehicleEngineStarting(vehicle1: number | Vehicle): boolean {
    return vehicle.isEngineStarting(vehicle1);
}

/**
 * Creates a vehicle with the specified model at the specified position. This vehicle will initially be owned by the creating
 * script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
 *
 * ```
 * NativeDB Added Parameter 8: BOOL p7
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CREATE_VEHICLE](?\_0xAF35D0D2583051B0).</strong>
 *
 * Hash: 0xDD75460A
 * @deprecated Use vehicle.create(modelHash, pos, heading, isNetwork, netMissionEntity) instead
 */
export function createVehicle(modelHash: number | string, pos: Vector3, heading: number, isNetwork: boolean, netMissionEntity: boolean): number {
    return vehicle.create(modelHash, pos, heading, isNetwork, netMissionEntity);
}

/**
 * Equivalent to CREATE_VEHICLE, but it uses 'server setter' logic (like the former CREATE_AUTOMOBILE) as a workaround for
 * reliability concerns regarding entity creation RPC.
 *
 * Unlike CREATE_AUTOMOBILE, this supports other vehicle types as well.
 *
 * Hash: 0x6AE51D4B
 * @deprecated Use vehicle.createServerSetter(modelHash, _type, pos, heading) instead
 */
export function createVehicleServerSetter(modelHash: number | string, _type: string, pos: Vector3, heading: number): number {
    return vehicle.createServerSetter(modelHash, _type, pos, heading);
}

/**
 * Deletes the specified `entity` and any carriage its attached to, or that is attached to it.
 *
 * Hash: 0x523BA3DA
 * @deprecated Use vehicle.deleteTrain(entity) instead
 */
export function deleteTrain(entity: number | Entity): void {
    return vehicle.deleteTrain(entity);
}

/**
 * No comment provided
 *
 * Hash: 0x43F15989
 * @deprecated Use vehicle.doesBoatSinkWhenWrecked(vehicle1) instead
 */
export function doesBoatSinkWhenWrecked(vehicle1: number | Vehicle): boolean {
    return vehicle.doesBoatSinkWhenWrecked(vehicle1);
}

/**
 * Returns all vehicle handles known to the server.
 * The data returned adheres to the following layout:
 *
 * ```
 * [127, 42, 13, 37]
 * ```
 *
 * Hash: 0x332169F5
 * @deprecated Use vehicle.getAlls() instead
 */
export function getAllVehicles(): number {
    return vehicle.getAlls();
}

/**
 * No comment provided
 *
 * Hash: 0x7DC6D022
 * @deprecated Use vehicle.getIsEngineRunning(vehicle1) instead
 */
export function getIsVehicleEngineRunning(vehicle1: number | Vehicle): boolean {
    return vehicle.getIsEngineRunning(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xD7EC8760
 * @deprecated Use vehicle.getIsPrimaryColourCustom(vehicle1) instead
 */
export function getIsVehiclePrimaryColourCustom(vehicle1: number | Vehicle): boolean {
    return vehicle.getIsPrimaryColourCustom(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x288AD228
 * @deprecated Use vehicle.getIsSecondaryColourCustom(vehicle1) instead
 */
export function getIsVehicleSecondaryColourCustom(vehicle1: number | Vehicle): boolean {
    return vehicle.getIsSecondaryColourCustom(vehicle1);
}

/**
 * See the client-side [GET_LANDING_GEAR_STATE](#\_0x9B0F3DCA3DB0F4CD) native for a description of landing gear states.
 *
 * Hash: 0xA6F02670
 * @deprecated Use vehicle.getLandingGearState(vehicle1) instead
 */
export function getLandingGearState(vehicle1: number | Vehicle): number {
    return vehicle.getLandingGearState(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x95070FA
 * @deprecated Use vehicle.getTrainCarriageEngine(train) instead
 */
export function getTrainCarriageEngine(train: number | Vehicle): number {
    return vehicle.getTrainCarriageEngine(train);
}

/**
 * No comment provided
 *
 * Hash: 0x4B8285CF
 * @deprecated Use vehicle.getTrainCarriageIndex(train) instead
 */
export function getTrainCarriageIndex(train: number | Vehicle): number {
    return vehicle.getTrainCarriageIndex(train);
}

/**
 * No comment provided
 *
 * Hash: 0x2B2FCC28
 * @deprecated Use vehicle.getBodyHealth(vehicle1) instead
 */
export function getVehicleBodyHealth(vehicle1: number | Vehicle): number {
    return vehicle.getBodyHealth(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x40D82D88
 * @deprecated Use vehicle.getColours(vehicle1) instead
 */
export function getVehicleColours(vehicle1: number | Vehicle): [number, number] {
    return vehicle.getColours(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x1C2B9FEF
 * @deprecated Use vehicle.getCustomPrimaryColour(vehicle1) instead
 */
export function getVehicleCustomPrimaryColour(vehicle1: number | Vehicle): [number, number, number] {
    return vehicle.getCustomPrimaryColour(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x3FF247A2
 * @deprecated Use vehicle.getCustomSecondaryColour(vehicle1) instead
 */
export function getVehicleCustomSecondaryColour(vehicle1: number | Vehicle): [number, number, number] {
    return vehicle.getCustomSecondaryColour(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xA0DBD08D
 * @deprecated Use vehicle.getDashboardColour(vehicle1) instead
 */
export function getVehicleDashboardColour(vehicle1: number | Vehicle): number {
    return vehicle.getDashboardColour(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xFD15C065
 * @deprecated Use vehicle.getDirtLevel(vehicle1) instead
 */
export function getVehicleDirtLevel(vehicle1: number | Vehicle): number {
    return vehicle.getDirtLevel(vehicle1);
}

/**
 * Currently it only works when set to "all players".
 *
 * Hash: 0x1DC50247
 * @deprecated Use vehicle.getDoorsLockedForPlayer(vehicle1) instead
 */
export function getVehicleDoorsLockedForPlayer(vehicle1: number | Vehicle): number {
    return vehicle.getDoorsLockedForPlayer(vehicle1);
}

/**
 * ```lua
 * enum_VehicleLockStatus = {
 * None = 0,
 * Locked = 2,
 * LockedForPlayer = 3,
 * StickPlayerInside = 4, -- Doesn't allow players to exit the vehicle with the exit vehicle key.
 * CanBeBrokenInto = 7, -- Can be broken into the car. If the glass is broken, the value will be set to 1
 * CanBeBrokenIntoPersist = 8, -- Can be broken into persist
 * CannotBeTriedToEnter = 10, -- Cannot be tried to enter (Nothing happens when you press the vehicle enter key).
 * }
 * ```
 *
 * It should be [noted](https://forum.cfx.re/t/4863241) that while the [client-side command](#\_0x25BC98A59C2EA962) and its
 * setter distinguish between states 0 (unset) and 1 (unlocked), the game will synchronize both as state 0, so the server-side
 * command will return only '0' if unlocked.
 *
 * Hash: 0xD72CEF2
 * @deprecated Use vehicle.getDoorLockStatus(vehicle1) instead
 */
export function getVehicleDoorLockStatus(vehicle1: number | Vehicle): number {
    return vehicle.getDoorLockStatus(vehicle1);
}

/**
 * Returns the open position of the specified door on the target vehicle.
 *
 * Hash: 0x6E35C49C
 * @deprecated Use vehicle.getDoorStatus(vehicle1, doorIndex) instead
 */
export function getVehicleDoorStatus(vehicle1: number | Vehicle, doorIndex: number): number {
    return vehicle.getDoorStatus(vehicle1, doorIndex);
}

/**
 * No comment provided
 *
 * Hash: 0x8880038A
 * @deprecated Use vehicle.getEngineHealth(vehicle1) instead
 */
export function getVehicleEngineHealth(vehicle1: number | Vehicle): number {
    return vehicle.getEngineHealth(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x80E4659B
 * @deprecated Use vehicle.getExtraColours(vehicle1) instead
 */
export function getVehicleExtraColours(vehicle1: number | Vehicle): [number, number] {
    return vehicle.getExtraColours(vehicle1);
}

/**
 * Gets the flight nozzel position for the specified vehicle. See the client-side [\_GET_VEHICLE_FLIGHT_NOZZLE_POSITION](#\_0xDA62027C8BDB326E) native for usage examples.
 *
 * Hash: 0xAD40AD55
 * @deprecated Use vehicle.getFlightNozzlePosition(vehicle1) instead
 */
export function getVehicleFlightNozzlePosition(vehicle1: number | Vehicle): number {
    return vehicle.getFlightNozzlePosition(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xD7147656
 * @deprecated Use vehicle.getHeadlightsColour(vehicle1) instead
 */
export function getVehicleHeadlightsColour(vehicle1: number | Vehicle): number {
    return vehicle.getHeadlightsColour(vehicle1);
}

/**
 * Gets the lock on state for the specified vehicle. See the client-side [GET_VEHICLE_HOMING_LOCKON_STATE](#\_0xE6B0E8CFC3633BF0) native for a description of lock on states.
 *
 * Hash: 0xFBDE9FD8
 * @deprecated Use vehicle.getHomingLockonState(vehicle1) instead
 */
export function getVehicleHomingLockonState(vehicle1: number | Vehicle): number {
    return vehicle.getHomingLockonState(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xCCFF3B6E
 * @deprecated Use vehicle.getInteriorColour(vehicle1) instead
 */
export function getVehicleInteriorColour(vehicle1: number | Vehicle): number {
    return vehicle.getInteriorColour(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x7C278621
 * @deprecated Use vehicle.getLightsState(vehicle1) instead
 */
export function getVehicleLightsState(vehicle1: number | Vehicle): [boolean, boolean, boolean] {
    return vehicle.getLightsState(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xEC82A51D
 * @deprecated Use vehicle.getLivery(vehicle1) instead
 */
export function getVehicleLivery(vehicle1: number | Vehicle): number {
    return vehicle.getLivery(vehicle1);
}

/**
 * Gets the vehicle that is locked on to for the specified vehicle.
 *
 * Hash: 0x4A557117
 * @deprecated Use vehicle.getLockOnTarget(vehicle1) instead
 */
export function getVehicleLockOnTarget(vehicle1: number | Vehicle): number {
    return vehicle.getLockOnTarget(vehicle1);
}

/**
 * Getter to check the neon colour of a vehicle. This native is the server side getter of [GET_VEHICLE_NEON_LIGHTS_COLOUR](#\_0x7619EEE8C886757F).
 *
 * Hash: 0xD9319DCB
 * @deprecated Use vehicle.getNeonColour(vehicle1) instead
 */
export function getVehicleNeonColour(vehicle1: number | Vehicle): [number, number, number] {
    return vehicle.getNeonColour(vehicle1);
}

/**
 * Getter to check if one of the neon lights of a vehicle is enabled. This native is the server side getter of [IS_VEHICLE_NEON_LIGHT_ENABLED](#\_0x8C4B92553E4766A5).
 *
 * ```cpp
 * enum neonIndex
 * {
 * NEON_BACK = 0,   // Back neon
 * NEON_RIGHT = 1,  // Right neon
 * NEON_LEFT = 2,   // Left neon
 * NEON_FRONT = 3   // Front neon
 * };
 * ```
 *
 * Hash: 0x684BDBF2
 * @deprecated Use vehicle.getNeonEnabled(vehicle1, neonIndex) instead
 */
export function getVehicleNeonEnabled(vehicle1: number | Vehicle, neonIndex: number): boolean {
    return vehicle.getNeonEnabled(vehicle1, neonIndex);
}

/**
 * No comment provided
 *
 * Hash: 0xE8522D58
 * @deprecated Use vehicle.getNumberPlateText(vehicle1) instead
 */
export function getVehicleNumberPlateText(vehicle1: number | Vehicle): string {
    return vehicle.getNumberPlateText(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x499747B6
 * @deprecated Use vehicle.getNumberPlateTextIndex(vehicle1) instead
 */
export function getVehicleNumberPlateTextIndex(vehicle1: number | Vehicle): number {
    return vehicle.getNumberPlateTextIndex(vehicle1);
}

/**
 * Gets the vehicle the specified Ped is/was in depending on bool value. This native is used server side when using OneSync.
 *
 * Hash: 0xAFE92319
 * @deprecated Use vehicle.getPedIsIn(ped, lastVehicle) instead
 */
export function getVehiclePedIsIn(ped: number | Ped, lastVehicle: boolean): number {
    return vehicle.getPedIsIn(ped, lastVehicle);
}

/**
 * No comment provided
 *
 * Hash: 0xE41595CE
 * @deprecated Use vehicle.getPetrolTankHealth(vehicle1) instead
 */
export function getVehiclePetrolTankHealth(vehicle1: number | Vehicle): number {
    return vehicle.getPetrolTankHealth(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x57037960
 * @deprecated Use vehicle.getRadioStationIndex(vehicle1) instead
 */
export function getVehicleRadioStationIndex(vehicle1: number | Vehicle): number {
    return vehicle.getRadioStationIndex(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x872CF42
 * @deprecated Use vehicle.getRoofLivery(vehicle1) instead
 */
export function getVehicleRoofLivery(vehicle1: number | Vehicle): number {
    return vehicle.getRoofLivery(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x9963D5F9
 * @deprecated Use vehicle.getTotalRepairs(vehicle1) instead
 */
export function getVehicleTotalRepairs(vehicle1: number | Vehicle): number {
    return vehicle.getTotalRepairs(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x75280015
 * @deprecated Use vehicle.getTyreSmokeColor(vehicle1) instead
 */
export function getVehicleTyreSmokeColor(vehicle1: number | Vehicle): [number, number, number] {
    return vehicle.getTyreSmokeColor(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xDA58D7AE
 * @deprecated Use vehicle.getWheelType(vehicle1) instead
 */
export function getVehicleWheelType(vehicle1: number | Vehicle): number {
    return vehicle.getWheelType(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x13D53892
 * @deprecated Use vehicle.getWindowTint(vehicle1) instead
 */
export function getVehicleWindowTint(vehicle1: number | Vehicle): number {
    return vehicle.getWindowTint(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xB8AF3137
 * @deprecated Use vehicle.hasBeenDamagedByBullets(vehicle1) instead
 */
export function hasVehicleBeenDamagedByBullets(vehicle1: number | Vehicle): boolean {
    return vehicle.hasBeenDamagedByBullets(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xE4E83A5B
 * @deprecated Use vehicle.hasBeenOwnedByPlayer(vehicle1) instead
 */
export function hasVehicleBeenOwnedByPlayer(vehicle1: number | Vehicle): boolean {
    return vehicle.hasBeenOwnedByPlayer(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xD5C39EE6
 * @deprecated Use vehicle.isBoatAnchoredAndFrozen(vehicle1) instead
 */
export function isBoatAnchoredAndFrozen(vehicle1: number | Vehicle): boolean {
    return vehicle.isBoatAnchoredAndFrozen(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x9049DB44
 * @deprecated Use vehicle.isBoatWrecked(vehicle1) instead
 */
export function isBoatWrecked(vehicle1: number | Vehicle): boolean {
    return vehicle.isBoatWrecked(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x42098B5
 * @deprecated Use vehicle.isExtraTurnedOn(vehicle1, extraId) instead
 */
export function isVehicleExtraTurnedOn(vehicle1: number | Vehicle, extraId: number): boolean {
    return vehicle.isExtraTurnedOn(vehicle1, extraId);
}

/**
 * No comment provided
 *
 * Hash: 0x25EB5873
 * @deprecated Use vehicle.isSirenOn(vehicle1) instead
 */
export function isVehicleSirenOn(vehicle1: number | Vehicle): boolean {
    return vehicle.isSirenOn(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x48C80210
 * @deprecated Use vehicle.isTyreBurst(vehicle1, wheelID, completely) instead
 */
export function isVehicleTyreBurst(vehicle1: number | Vehicle, wheelID: number, completely: boolean): boolean {
    return vehicle.isTyreBurst(vehicle1, wheelID, completely);
}

/**
 * See the client-side [IS_VEHICLE_WINDOW_INTACT](#\_0x46E571A0E20D01F1) for a window indexes list.
 *
 * Hash: 0xAC4EF23D
 * @deprecated Use vehicle.isWindowIntact(vehicle1, windowIndex) instead
 */
export function isVehicleWindowIntact(vehicle1: number | Vehicle, windowIndex: number): boolean {
    return vehicle.isWindowIntact(vehicle1, windowIndex);
}

/**
 * SET_VEHICLE_ALARM
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_ALARM](?\_0xCDE5E70C1DDB954C).</strong>
 *
 * Hash: 0x24877D84
 * @deprecated Use vehicle.setAlarm(vehicle1, state) instead
 */
export function setVehicleAlarm(vehicle1: number | Vehicle, state: boolean): void {
    return vehicle.setAlarm(vehicle1, state);
}

/**
 * ```
 * p2 often set to 1000.0 in the decompiled scripts.
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_BODY_HEALTH](?\_0xB77D05AC8C78AADB).</strong>
 *
 * Hash: 0x920C2517
 * @deprecated Use vehicle.setBodyHealth(vehicle1, value) instead
 */
export function setVehicleBodyHealth(vehicle1: number | Vehicle, value: number): void {
    return vehicle.setBodyHealth(vehicle1, value);
}

/**
 * colorPrimary & colorSecondary are the paint indexes for the vehicle.
 * For a list of valid paint indexes, view: pastebin.com/pwHci0xK
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_COLOURS](?\_0x4F1D4BE3A7F24601).</strong>
 *
 * Hash: 0x57F24253
 * @deprecated Use vehicle.setColours(vehicle1, colorPrimary, colorSecondary) instead
 */
export function setVehicleColours(vehicle1: number | Vehicle, colorPrimary: number, colorSecondary: number): void {
    return vehicle.setColours(vehicle1, colorPrimary, colorSecondary);
}

/**
 * Sets the selected vehicle's colors to their default value (specific variant specified using the colorCombination parameter).
 * Range of possible values for colorCombination is currently unknown, I couldn't find where these values are stored either (Disquse's guess was vehicles.meta but I haven't seen it in there.)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_COLOUR_COMBINATION](?\_0x33E8CD3322E2FE31).</strong>
 *
 * Hash: 0xA557AEAD
 * @deprecated Use vehicle.setColourCombination(vehicle1, colorCombination) instead
 */
export function setVehicleColourCombination(vehicle1: number | Vehicle, colorCombination: number): void {
    return vehicle.setColourCombination(vehicle1, colorCombination);
}

/**
 * ```
 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_CUSTOM_PRIMARY_COLOUR](?\_0x7141766F91D15BEA).</strong>
 *
 * Hash: 0x8DF9F9BC
 * @deprecated Use vehicle.setCustomPrimaryColour(vehicle1, r, g, b) instead
 */
export function setVehicleCustomPrimaryColour(vehicle1: number | Vehicle, r: number, g: number, b: number): void {
    return vehicle.setCustomPrimaryColour(vehicle1, r, g, b);
}

/**
 * ```
 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_CUSTOM_SECONDARY_COLOUR](?\_0x36CED73BFED89754).</strong>
 *
 * Hash: 0x9D77259E
 * @deprecated Use vehicle.setCustomSecondaryColour(vehicle1, r, g, b) instead
 */
export function setVehicleCustomSecondaryColour(vehicle1: number | Vehicle, r: number, g: number, b: number): void {
    return vehicle.setCustomSecondaryColour(vehicle1, r, g, b);
}

/**
 * Sets the dirt level of the passed vehicle.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DIRT_LEVEL](?\_0x79D3B596FE44EE8B).</strong>
 *
 * Hash: 0x2B39128B
 * @deprecated Use vehicle.setDirtLevel(vehicle1, dirtLevel) instead
 */
export function setVehicleDirtLevel(vehicle1: number | Vehicle, dirtLevel: number): void {
    return vehicle.setDirtLevel(vehicle1, dirtLevel);
}

/**
 * Locks the doors of a specified vehicle to a defined lock state, affecting how players and NPCs can interact with the vehicle.
 *
 * ```
 * NativeDB Introduced: v323
 * ```
 *
 * ```cpp
 * enum eVehicleLockState {
 * // No specific lock state, vehicle behaves according to the game's default settings.
 * VEHICLELOCK_NONE = 0,
 * // Vehicle is fully unlocked, allowing free entry by players and NPCs.
 * VEHICLELOCK_UNLOCKED = 1,
 * // Vehicle is locked, preventing entry by players and NPCs.
 * VEHICLELOCK_LOCKED = 2,
 * // Vehicle locks out only players, allowing NPCs to enter.
 * VEHICLELOCK_LOCKOUT_PLAYER_ONLY = 3,
 * // Vehicle is locked once a player enters, preventing others from entering.
 * VEHICLELOCK_LOCKED_PLAYER_INSIDE = 4,
 * // Vehicle starts in a locked state, but may be unlocked through game events.
 * VEHICLELOCK_LOCKED_INITIALLY = 5,
 * // Forces the vehicle's doors to shut and lock.
 * VEHICLELOCK_FORCE_SHUT_DOORS = 6,
 * // Vehicle is locked but can still be damaged.
 * VEHICLELOCK_LOCKED_BUT_CAN_BE_DAMAGED = 7,
 * // Vehicle is locked, but its trunk/boot remains unlocked.
 * VEHICLELOCK_LOCKED_BUT_BOOT_UNLOCKED = 8,
 * // Vehicle is locked and does not allow passengers, except for the driver.
 * VEHICLELOCK_LOCKED_NO_PASSENGERS = 9,
 * // Vehicle is completely locked, preventing entry entirely, even if previously inside.
 * VEHICLELOCK_CANNOT_ENTER = 10
 * };
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DOORS_LOCKED](?\_0xB664292EAECF7FA6).</strong>
 *
 * Hash: 0x4CDD35D0
 * @deprecated Use vehicle.setDoorsLocked(vehicle1, doorLockStatus) instead
 */
export function setVehicleDoorsLocked(vehicle1: number | Vehicle, doorLockStatus: number): void {
    return vehicle.setDoorsLocked(vehicle1, doorLockStatus);
}

/**
 * See eDoorId declared in [`SET_VEHICLE_DOOR_SHUT`](#\_0x93D9BD300D7789E5)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DOOR_BROKEN](?\_0xD4D4F6A4AB575A33).</strong>
 *
 * Hash: 0x8147FEA7
 * @deprecated Use vehicle.setDoorBroken(vehicle1, doorIndex, deleteDoor) instead
 */
export function setVehicleDoorBroken(vehicle1: number | Vehicle, doorIndex: number, deleteDoor: boolean): void {
    return vehicle.setDoorBroken(vehicle1, doorIndex, deleteDoor);
}

/**
 * SET_VEHICLE_NUMBER_PLATE_TEXT
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_NUMBER_PLATE_TEXT](?\_0x95A88F0B409CDA47).</strong>
 *
 * Hash: 0x400F9556
 * @deprecated Use vehicle.setNumberPlateText(vehicle1, plateText) instead
 */
export function setVehicleNumberPlateText(vehicle1: number | Vehicle, plateText: string): void {
    return vehicle.setNumberPlateText(vehicle1, plateText);
}

/**
 * Returns the type of the passed vehicle.
 *
 * For client scripts, reference the more detailed [GET_VEHICLE_TYPE_RAW](#\_0xDE73BC10) native.
 *
 * ### Vehicle types
 *
 * *   automobile
 * *   bike
 * *   boat
 * *   heli
 * *   plane
 * *   submarine
 * *   trailer
 * *   train
 *
 * Hash: 0xA273060E
 * @deprecated Use vehicle.getType(vehicle1) instead
 */
export function getVehicleType(vehicle1: number | Vehicle): string {
    return vehicle.getType(vehicle1);
}

/**
 * GIVE_WEAPON_COMPONENT_TO_PED
 *
 * <strong>This is the server-side RPC native equivalent of the client native [GIVE_WEAPON_COMPONENT_TO_PED](?\_0xD966D51AA5B28BB9).</strong>
 *
 * Hash: 0x3E1E286D
 * @deprecated Use weapon.giveComponentToPed(ped, weaponHash, componentHash) instead
 */
export function giveWeaponComponentToPed(ped: number | Ped, weaponHash: number | string, componentHash: number | string): void {
    return weapon.giveComponentToPed(ped, weaponHash, componentHash);
}

/**
 * GIVE_WEAPON_TO_PED
 *
 * <strong>This is the server-side RPC native equivalent of the client native [GIVE_WEAPON_TO_PED](?\_0xBF0FD6E56C964FCB).</strong>
 *
 * Hash: 0xC4D88A85
 * @deprecated Use weapon.giveToPed(ped, weaponHash, ammoCount, isHidden, bForceInHand) instead
 */
export function giveWeaponToPed(ped: number | Ped, weaponHash: number | string, ammoCount: number, isHidden: boolean, bForceInHand: boolean): void {
    return weapon.giveToPed(ped, weaponHash, ammoCount, isHidden, bForceInHand);
}

/**
 * Parameter `p1` does not seem to be used or referenced in game binaries.\
 * **Note:** When called for networked entities, a `CRemoveAllWeaponsEvent` will be created per request.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_ALL_PED_WEAPONS](?\_0xF25DF915FA38C5F3).</strong>
 *
 * Hash: 0xA44CE817
 * @deprecated Use weapon.removeAllPeds(ped) instead
 */
export function removeAllPedWeapons(ped: number | Ped): void {
    return weapon.removeAllPeds(ped);
}

/**
 * REMOVE_WEAPON_COMPONENT_FROM_PED
 *
 * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_WEAPON_COMPONENT_FROM_PED](?\_0x1E8BE90C74FB4C09).</strong>
 *
 * Hash: 0x412AA00D
 * @deprecated Use weapon.removeComponentFromPed(ped, weaponHash, componentHash) instead
 */
export function removeWeaponComponentFromPed(ped: number | Ped, weaponHash: number | string, componentHash: number | string): void {
    return weapon.removeComponentFromPed(ped, weaponHash, componentHash);
}

/**
 * ```
 * This native removes a specified weapon from your selected ped.
 * Weapon Hashes: pastebin.com/0wwDZgkF
 * Example:
 * C#:
 * Function.Call(Hash.REMOVE_WEAPON_FROM_PED, Game.Player.Character, 0x99B507EA);
 * C++:
 * `WEAPON::REMOVE_WEAPON_FROM_PED(PLAYER::PLAYER_PED_ID(), 0x99B507EA);`
 * The code above removes the knife from the player.
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_WEAPON_FROM_PED](?\_0x4899CB088EDF59B8).</strong>
 *
 * Hash: 0x9C37F220
 * @deprecated Use weapon.removeFromPed(ped, weaponHash) instead
 */
export function removeWeaponFromPed(ped: number | Ped, weaponHash: number | string): void {
    return weapon.removeFromPed(ped, weaponHash);
}

/**
 * No comment provided
 *
 * Hash: 0x5B912C3F
 * @deprecated Use network.getEntityFromNetworkId(netId) instead
 */
export function networkGetEntityFromNetworkId(netId: number): number {
    return network.getEntityFromNetworkId(netId);
}

/**
 * Returns the first owner ID of the specified entity.
 *
 * Hash: 0x1E546224
 * @deprecated Use network.getFirstEntityOwner(entity) instead
 */
export function networkGetFirstEntityOwner(entity: number | Entity): number {
    return network.getFirstEntityOwner(entity);
}

/**
 * No comment provided
 *
 * Hash: 0x9E35DAB6
 * @deprecated Use network.getNetworkIdFromEntity(entity) instead
 */
export function networkGetNetworkIdFromEntity(entity: number | Entity): number {
    return network.getNetworkIdFromEntity(entity);
}

/**
 * No comment provided
 *
 * Hash: 0xFFEEF513
 * @deprecated Use network.getVoiceProximityOverrideForPlayer(playerSrc) instead
 */
export function networkGetVoiceProximityOverrideForPlayer(playerSrc: string): Vector3 {
    return network.getVoiceProximityOverrideForPlayer(playerSrc);
}

/**
 * Returns the owner ID of the specified entity.
 *
 * Hash: 0x526FEE31
 * @deprecated Use network.getEntityOwner(entity) instead
 */
export function networkGetEntityOwner(entity: number | Entity): number {
    return network.getEntityOwner(entity);
}

/**
 * No comment provided
 *
 * Hash: 0xB3210203
 * @deprecated Use kvp.endFind(handle) instead
 */
export function endFindKvp(handle: number): void {
    return kvp.endFind(handle);
}

/**
 * No comment provided
 *
 * Hash: 0xBD7BEBC5
 * @deprecated Use kvp.find(handle) instead
 */
export function findKvp(handle: number): string {
    return kvp.find(handle);
}

/**
 * No comment provided
 *
 * Hash: 0xDD379006
 * @deprecated Use kvp.startFind(prefix) instead
 */
export function startFindKvp(prefix: string): number {
    return kvp.startFind(prefix);
}

/**
 * Create a permanent voice channel.
 *
 * Hash: 0x262663C5
 * @deprecated Use mumble.createChannel(id) instead
 */
export function mumbleCreateChannel(id: number): void {
    return mumble.createChannel(id);
}

/**
 * Checks if the player is currently muted
 *
 * Hash: 0x1D5D50C2
 * @deprecated Use mumble.isPlayerMuted(playerSrc) instead
 */
export function mumbleIsPlayerMuted(playerSrc: number): boolean {
    return mumble.isPlayerMuted(playerSrc);
}

/**
 * Mutes or unmutes the specified player
 *
 * Hash: 0xCC6C2EB1
 * @deprecated Use mumble.setPlayerMuted(playerSrc, toggle) instead
 */
export function mumbleSetPlayerMuted(playerSrc: number, toggle: boolean): void {
    return mumble.setPlayerMuted(playerSrc, toggle);
}

/**
 * Creates an object (prop) with the specified model at the specified position, offset on the Z axis by the radius of the object's model.
 * This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CREATE_OBJECT](?\_0x509D5878EB39E842).</strong>
 *
 * Hash: 0x2F7AA05C
 * @deprecated Use object.create(modelHash, pos, isNetwork, netMissionEntity, doorFlag) instead
 */
export function createObject(modelHash: number | string, pos: Vector3, isNetwork: boolean, netMissionEntity: boolean, doorFlag: boolean): number {
    return object.create(modelHash, pos, isNetwork, netMissionEntity, doorFlag);
}

/**
 * Creates an object (prop) with the specified model centered at the specified position.
 * This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CREATE_OBJECT_NO_OFFSET](?\_0x9A294B2138ABB884).</strong>
 *
 * Hash: 0x58040420
 * @deprecated Use object.createNoOffset(modelHash, pos, isNetwork, netMissionEntity, doorFlag) instead
 */
export function createObjectNoOffset(modelHash: number | string, pos: Vector3, isNetwork: boolean, netMissionEntity: boolean, doorFlag: boolean): number {
    return object.createNoOffset(modelHash, pos, isNetwork, netMissionEntity, doorFlag);
}

/**
 * Returns all object handles known to the server.
 * The data returned adheres to the following layout:
 *
 * ```
 * [127, 42, 13, 37]
 * ```
 *
 * Hash: 0x6886C3FE
 * @deprecated Use object.getAlls() instead
 */
export function getAllObjects(): number {
    return object.getAlls();
}

/**
 * Nonsynchronous operations will not wait for a disk/filesystem flush before returning from a write or delete call. They will be much faster than their synchronous counterparts (e.g., bulk operations), however, a system crash may lose the data to some recent operations.
 *
 * This native ensures all `_NO_SYNC` operations are synchronized with the disk/filesystem.
 *
 * Hash: 0xE27C97A0
 * @deprecated Use resource.flushKvp() instead
 */
export function flushResourceKvp(): void {
    return resource.flushKvp();
}

/**
 * Returns the physical on-disk path of the specified resource.
 *
 * Hash: 0x61DCF017
 * @deprecated Use resource.getPath(resourceName) instead
 */
export function getResourcePath(resourceName: string): string {
    return resource.getPath(resourceName);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a cached resource asset with the resource system, similar to the automatic scanning of the `stream/` folder.
 *
 * Hash: 0x9862B266
 * @deprecated Use resource.registerAsset(resourceName, fileName) instead
 */
export function registerResourceAsset(resourceName: string, fileName: string): string {
    return resource.registerAsset(resourceName, fileName);
}

/**
 * Registers a build task factory for resources.
 * The function should return an object (msgpack map) with the following fields:
 *
 * ```
 * {
 * // returns whether the specific resource should be built
 * shouldBuild = func(resourceName: string): bool,
 *
 * // asynchronously start building the specific resource.
 * // call cb when completed
 * build = func(resourceName: string, cb: func(success: bool, status: string): void): void
 * }
 * ```
 *
 * Hash: 0x285B43CA
 * @deprecated Use resource.registerBuildTaskFactory(factoryId, factoryFn) instead
 */
export function registerResourceBuildTaskFactory(factoryId: string, factoryFn: Function): void {
    return resource.registerBuildTaskFactory(factoryId, factoryFn);
}

/**
 * Writes the specified data to a file in the specified resource.
 * Using a length of `-1` will automatically detect the length assuming the data is a C string.
 *
 * Hash: 0xA09E7E7B
 * @deprecated Use resource.saveFile(resourceName, fileName, data, dataLength) instead
 */
export function saveResourceFile(resourceName: string, fileName: string, data: string, dataLength: number): boolean {
    return resource.saveFile(resourceName, fileName, data, dataLength);
}

/**
 * Scans the resources in the specified resource root. This function is only available in the 'monitor mode' process and is
 * not available for user resources.
 *
 * Hash: 0x636F097F
 * @deprecated Use resource.scanRoot(rootPath, callback) instead
 */
export function scanResourceRoot(rootPath: string, callback: Function): void {
    return resource.scanRoot(rootPath, callback);
}

/**
 * Schedules the specified resource to run a tick as soon as possible, bypassing the server's fixed tick rate.
 *
 * Hash: 0xB88A73AD
 * @deprecated Use resource.scheduleTick(resourceName) instead
 */
export function scheduleResourceTick(resourceName: string): void {
    return resource.scheduleTick(resourceName);
}

/**
 * No comment provided
 *
 * Hash: 0x29B440DC
 * @deprecated Use resource.start(resourceName) instead
 */
export function startResource(resourceName: string): boolean {
    return resource.start(resourceName);
}

/**
 * No comment provided
 *
 * Hash: 0x21783161
 * @deprecated Use resource.stop(resourceName) instead
 */
export function stopResource(resourceName: string): boolean {
    return resource.stop(resourceName);
}

/**
 * No comment provided
 *
 * Hash: 0x7389B5DF
 * @deprecated Use resource.deleteKvp(key) instead
 */
export function deleteResourceKvp(key: string): void {
    return resource.deleteKvp(key);
}

/**
 * Nonsynchronous [DELETE_RESOURCE_KVP](#\_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x4152C90
 * @deprecated Use resource.deleteKvpNoSync(key) instead
 */
export function deleteResourceKvpNoSync(key: string): void {
    return resource.deleteKvpNoSync(key);
}

/**
 * Returns the name of the currently executing resource.
 *
 * Hash: 0xE5E9EBBB
 * @deprecated Use resource.getCurrentName() instead
 */
export function getCurrentResourceName(): string {
    return resource.getCurrentName();
}

/**
 * No comment provided
 *
 * Hash: 0x4D52FE5B
 * @deprecated Use resource.getInvoking() instead
 */
export function getInvokingResource(): string {
    return resource.getInvoking();
}

/**
 * No comment provided
 *
 * Hash: 0x863F27B
 * @deprecated Use resource.getNums() instead
 */
export function getNumResources(): number {
    return resource.getNums();
}

/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 *
 * Hash: 0x776E864
 * @deprecated Use resource.getNumMetadata(resourceName, metadataKey) instead
 */
export function getNumResourceMetadata(resourceName: string, metadataKey: string): number {
    return resource.getNumMetadata(resourceName, metadataKey);
}

/**
 * No comment provided
 *
 * Hash: 0x387246B7
 * @deprecated Use resource.getByFindIndex(findIndex) instead
 */
export function getResourceByFindIndex(findIndex: number): string {
    return resource.getByFindIndex(findIndex);
}

/**
 * Returns all commands registered by the specified resource.
 * The data returned adheres to the following layout:
 *
 * ```
 * [
 * {
 * "name": "cmdlist",
 * "resource": "example_resource",
 * "arity" = -1,
 * },
 * {
 * "name": "command1"
 * "resource": "example_resource2",
 * "arity" = -1,
 * }
 * ]
 * ```
 *
 * Hash: 0x97628584
 * @deprecated Use resource.getCommands(resource1) instead
 */
export function getResourceCommands(resource1: string): number {
    return resource.getCommands(resource1);
}

/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
 *
 * Hash: 0x35BDCEEA
 * @deprecated Use resource.getKvpFloat(key) instead
 */
export function getResourceKvpFloat(key: string): number {
    return resource.getKvpFloat(key);
}

/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
 *
 * Hash: 0x557B586A
 * @deprecated Use resource.getKvpInt(key) instead
 */
export function getResourceKvpInt(key: string): number {
    return resource.getKvpInt(key);
}

/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
 *
 * Hash: 0x5240DA5A
 * @deprecated Use resource.getKvpString(key) instead
 */
export function getResourceKvpString(key: string): string {
    return resource.getKvpString(key);
}

/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 *
 * Hash: 0x964BAB1D
 * @deprecated Use resource.getMetadata(resourceName, metadataKey, index) instead
 */
export function getResourceMetadata(resourceName: string, metadataKey: string, index: number): string {
    return resource.getMetadata(resourceName, metadataKey, index);
}

/**
 * Returns the current state of the specified resource.
 *
 * Hash: 0x4039B485
 * @deprecated Use resource.getState(resourceName) instead
 */
export function getResourceState(resourceName: string): string {
    return resource.getState(resourceName);
}

/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 *
 * Hash: 0x76A9EE1F
 * @deprecated Use resource.loadFile(resourceName, fileName) instead
 */
export function loadResourceFile(resourceName: string, fileName: string): string {
    return resource.loadFile(resourceName, fileName);
}

/**
 * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
 *
 * Hash: 0xD233A168
 * @deprecated Use resource.registerAsEventHandler(eventName) instead
 */
export function registerResourceAsEventHandler(eventName: string): void {
    return resource.registerAsEventHandler(eventName);
}

/**
 * A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).
 *
 * Hash: 0x21C7A35B
 * @deprecated Use resource.setKvp(key, value) instead
 */
export function setResourceKvp(key: string, value: string): void {
    return resource.setKvp(key, value);
}

/**
 * A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).
 *
 * Hash: 0x9ADD2938
 * @deprecated Use resource.setKvpFloat(key, value) instead
 */
export function setResourceKvpFloat(key: string, value: number): void {
    return resource.setKvpFloat(key, value);
}

/**
 * Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x3517BFBE
 * @deprecated Use resource.setKvpFloatNoSync(key, value) instead
 */
export function setResourceKvpFloatNoSync(key: string, value: number): void {
    return resource.setKvpFloatNoSync(key, value);
}

/**
 * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
 *
 * Hash: 0x6A2B1E8
 * @deprecated Use resource.setKvpInt(key, value) instead
 */
export function setResourceKvpInt(key: string, value: number): void {
    return resource.setKvpInt(key, value);
}

/**
 * Nonsynchronous [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x26AEB707
 * @deprecated Use resource.setKvpIntNoSync(key, value) instead
 */
export function setResourceKvpIntNoSync(key: string, value: number): void {
    return resource.setKvpIntNoSync(key, value);
}

/**
 * Nonsynchronous [SET_RESOURCE_KVP](#\_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0xCF9A2FF
 * @deprecated Use resource.setKvpNoSync(key, value) instead
 */
export function setResourceKvpNoSync(key: string, value: string): void {
    return resource.setKvpNoSync(key, value);
}

/**
 * Clear a ped's tasks. Stop animations and other tasks created by scripts.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_TASKS](?\_0xE1EF3C1216AFF2CD).</strong>
 *
 * Hash: 0xDE3316AB
 * @deprecated Use task.clearPeds(ped) instead
 */
export function clearPedTasks(ped: number | Ped): void {
    return task.clearPeds(ped);
}

/**
 * Immediately stops the pedestrian from whatever it's doing. The difference between this and [CLEAR_PED_TASKS](#\_0xE1EF3C1216AFF2CD) is that this one teleports the ped but does not change the position of the ped.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_TASKS_IMMEDIATELY](?\_0xAAA34F8A7CB32098).</strong>
 *
 * Hash: 0xBC045625
 * @deprecated Use task.clearPedsImmediately(ped) instead
 */
export function clearPedTasksImmediately(ped: number | Ped): void {
    return task.clearPedsImmediately(ped);
}

/**
 * ```
 * Makes the specified ped attack the target ped.
 * p2 should be 0
 * p3 should be 16
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_COMBAT_PED](?\_0xF166E48407BAC484).</strong>
 *
 * Hash: 0xCB0D8932
 * @deprecated Use task.combatPed(ped, targetPed) instead
 */
export function taskCombatPed(ped: number | Ped, targetPed: number | Ped): void {
    return task.combatPed(ped, targetPed);
}

/**
 * ```
 * Example:
 * `TASK::TASK_DRIVE_BY(l_467[1\/\*22\*\/], PLAYER::PLAYER_PED_ID(), 0, 0.0, 0.0, 2.0, 300.0, 100, 0, ${firing_pattern_burst_fire_driveby});`
 * Needs working example. Doesn't seem to do anything.
 * I marked p2 as targetVehicle as all these shooting related tasks seem to have that in common.
 * I marked p6 as distanceToShoot as if you think of GTA's Logic with the native SET_VEHICLE_SHOOT natives, it won't shoot till it gets within a certain distance of the target.
 * I marked p7 as pedAccuracy as it seems it's mostly 100 (Completely Accurate), 75, 90, etc. Although this could be the ammo count within the gun, but I highly doubt it. I will change this comment once I find out if it's ammo count or not.
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_DRIVE_BY](?\_0x2F8AF0E82773A171).</strong>
 *
 * Hash: 0x2B84D1C4
 * @deprecated Use task.driveBy(driverPed, targetPed, targetVehicle, targetX, targetY, targetZ, distanceToShoot, pedAccuracy, firingPattern) instead
 */
export function taskDriveBy(driverPed: number | Ped, targetPed: number | Ped, targetVehicle: number | Vehicle, targetX: number, targetY: number, targetZ: number, distanceToShoot: number, pedAccuracy: number, firingPattern: number | string): void {
    return task.driveBy(driverPed, targetPed, targetVehicle, targetX, targetY, targetZ, distanceToShoot, pedAccuracy, firingPattern);
}

/**
 * ```
 * speed 1.0 = walk, 2.0 = run
 * p5 1 = normal, 3 = teleport to vehicle, 8 = normal/carjack ped from seat, 16 = teleport directly into vehicle
 * p6 is always 0
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_ENTER_VEHICLE](?\_0xC20E50AA46D09CA8).</strong>
 *
 * Hash: 0xB8689B4E
 * @deprecated Use task.enterVehicle(ped, vehicle, timeout, seatIndex, speed, flag) instead
 */
export function taskEnterVehicle(ped: number | Ped, vehicle: number | Vehicle, timeout: number, seatIndex: number, speed: number, flag: number): void {
    return task.enterVehicle(ped, vehicle, timeout, seatIndex, speed, flag);
}

/**
 * TASK_EVERYONE_LEAVE_VEHICLE
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_EVERYONE_LEAVE_VEHICLE](?\_0x7F93691AB4B92272).</strong>
 *
 * Hash: 0xC1971F30
 * @deprecated Use task.everyoneLeaveVehicle(vehicle) instead
 */
export function taskEveryoneLeaveVehicle(vehicle: number | Vehicle): void {
    return task.everyoneLeaveVehicle(vehicle);
}

/**
 * TASK_GO_STRAIGHT_TO_COORD
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_GO_STRAIGHT_TO_COORD](?\_0xD76B57B44F1E6F8B).</strong>
 *
 * Hash: 0x80A9E7A7
 * @deprecated Use task.goStraightToCoord(ped, pos, speed, timeout, targetHeading, distanceToSlide) instead
 */
export function taskGoStraightToCoord(ped: number | Ped, pos: Vector3, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void {
    return task.goStraightToCoord(ped, pos, speed, timeout, targetHeading, distanceToSlide);
}

/**
 * Tells a ped to go to a coord by any means.
 *
 * ```cpp
 * enum eDrivingMode {
 * DF_StopForCars = 1,
 * DF_StopForPeds = 2,
 * DF_SwerveAroundAllCars = 4,
 * DF_SteerAroundStationaryCars = 8,
 * DF_SteerAroundPeds = 16,
 * DF_SteerAroundObjects = 32,
 * DF_DontSteerAroundPlayerPed = 64,
 * DF_StopAtLights = 128,
 * DF_GoOffRoadWhenAvoiding = 256,
 * DF_DriveIntoOncomingTraffic = 512,
 * DF_DriveInReverse = 1024,
 * // If pathfinding fails, cruise randomly instead of going on a straight line
 * DF_UseWanderFallbackInsteadOfStraightLine = 2048,
 * DF_AvoidRestrictedAreas = 4096,
 * // These only work on MISSION_CRUISE
 * DF_PreventBackgroundPathfinding = 8192,
 * DF_AdjustCruiseSpeedBasedOnRoadSpeed = 16384,
 * DF_UseShortCutLinks =  262144,
 * DF_ChangeLanesAroundObstructions = 524288,
 * // cruise tasks ignore this anyway--only used for goto's
 * DF_UseSwitchedOffNodes =  2097152,
 * // if you're going to be primarily driving off road
 * DF_PreferNavmeshRoute =  4194304,
 * // Only works for planes using MISSION_GOTO, will cause them to drive along the ground instead of fly
 * DF_PlaneTaxiMode =  8388608,
 * DF_ForceStraightLine = 16777216,
 * DF_UseStringPullingAtJunctions = 33554432,
 * DF_AvoidHighways = 536870912,
 * DF_ForceJoinInRoadDirection = 1073741824,
 * // Standard driving mode. stops for cars, peds, and lights, goes around stationary obstructions
 * DRIVINGMODE_STOPFORCARS = 786603, // DF_StopForCars|DF_StopForPeds|DF_SteerAroundObjects|DF_SteerAroundStationaryCars|DF_StopAtLights|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,		// Obey lights too
 * // Like the above, but doesn't steer around anything in its way - will only wait instead.
 * DRIVINGMODE_STOPFORCARS_STRICT = 262275, // DF_StopForCars|DF_StopForPeds|DF_StopAtLights|DF_UseShortCutLinks, // Doesn't deviate an inch.
 * // Default "alerted" driving mode. drives around everything, doesn't obey lights
 * DRIVINGMODE_AVOIDCARS = 786469, // DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars,
 * // Very erratic driving. difference between this and AvoidCars is that it doesn't use the brakes at ALL to help with steering
 * DRIVINGMODE_AVOIDCARS_RECKLESS = 786468, // DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,
 * // Smashes through everything
 * DRIVINGMODE_PLOUGHTHROUGH = 262144, // DF_UseShortCutLinks
 * // Drives normally except for the fact that it ignores lights
 * DRIVINGMODE_STOPFORCARS_IGNORELIGHTS = 786475, // DF_StopForCars|DF_SteerAroundStationaryCars|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions
 * // Try to swerve around everything, but stop for lights if necessary
 * DRIVINGMODE_AVOIDCARS_OBEYLIGHTS = 786597, // DF_SwerveAroundAllCars|DF_StopAtLights|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
 * // Swerve around cars, be careful around peds, and stop for lights
 * DRIVINGMODE_AVOIDCARS_STOPFORPEDS_OBEYLIGHTS = 786599 // DF_SwerveAroundAllCars|DF_StopAtLights|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
 * };
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_GO_TO_COORD_ANY_MEANS](?\_0x5BC448CB78FA3E88).</strong>
 *
 * Hash: 0xF91DF93B
 * @deprecated Use task.goToCoordAnyMeans(ped, pos, fMoveBlendRatio, vehicle, bUseLongRangeVehiclePathing, drivingFlags, fMaxRangeToShootTargets) instead
 */
export function taskGoToCoordAnyMeans(ped: number | Ped, pos: Vector3, fMoveBlendRatio: number, vehicle: number | Vehicle, bUseLongRangeVehiclePathing: boolean, drivingFlags: number, fMaxRangeToShootTargets: number): void {
    return task.goToCoordAnyMeans(ped, pos, fMoveBlendRatio, vehicle, bUseLongRangeVehiclePathing, drivingFlags, fMaxRangeToShootTargets);
}

/**
 * ```
 * The entity will move towards the target until time is over (duration) or get in target's range (distance). p5 and p6 are unknown, but you could leave p5 = 1073741824 or 100 or even 0 (didn't see any difference but on the decompiled scripts, they use 1073741824 mostly) and p6 = 0
 * Note: I've only tested it on entity -> ped and target -> vehicle. It could work differently on other entities, didn't try it yet.
 * `Example: TASK::TASK_GO_TO_ENTITY(pedHandle, vehicleHandle, 5000, 4.0, 100, 1073741824, 0)`
 * Ped will run towards the vehicle for 5 seconds and stop when time is over or when he gets 4 meters(?) around the vehicle (with duration = -1, the task duration will be ignored).
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_GO_TO_ENTITY](?\_0x6A071245EB0D1882).</strong>
 *
 * Hash: 0x374827C2
 * @deprecated Use task.goToEntity(entity, target, duration, distance, speed) instead
 */
export function taskGoToEntity(entity: number | Entity, target: number | Entity, duration: number, distance: number, speed: number): void {
    return task.goToEntity(entity, target, duration, distance, speed);
}

/**
 * ```
 * In the scripts, p3 was always -1.
 * p3 seems to be duration or timeout of turn animation.
 * Also facingPed can be 0 or -1 so ped will just raise hands up.
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_HANDS_UP](?\_0xF2EAB31979A7F910).</strong>
 *
 * Hash: 0x8DCC19C5
 * @deprecated Use task.handsUp(ped, duration, facingPed) instead
 */
export function taskHandsUp(ped: number | Ped, duration: number, facingPed: number | Ped): void {
    return task.handsUp(ped, duration, facingPed);
}

/**
 * Flags are the same flags used in [`TASK_LEAVE_VEHICLE`](#\_0xD3DBCE61A490BE02)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_LEAVE_ANY_VEHICLE](?\_0x504D54DF3F6F2247).</strong>
 *
 * Hash: 0xDBDD79FA
 * @deprecated Use task.leaveAnyVehicle(ped, flags) instead
 */
export function taskLeaveAnyVehicle(ped: number | Ped, flags: number): void {
    return task.leaveAnyVehicle(ped, flags);
}

/**
 * ```
 * Flags from decompiled scripts:
 * 0 = normal exit and closes door.
 * 1 = normal exit and closes door.
 * 16 = teleports outside, door kept closed.  (This flag does not seem to work for the front seats in buses, NPCs continue to exit normally)
 * 64 = normal exit and closes door, maybe a bit slower animation than 0.
 * 256 = normal exit but does not close the door.
 * 4160 = ped is throwing himself out, even when the vehicle is still.
 * 262144 = ped moves to passenger seat first, then exits normally
 * Others to be tried out: 320, 512, 131072.
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_LEAVE_VEHICLE](?\_0xD3DBCE61A490BE02).</strong>
 *
 * Hash: 0x7B1141C6
 * @deprecated Use task.leaveVehicle(ped, vehicle, flags) instead
 */
export function taskLeaveVehicle(ped: number | Ped, vehicle: number | Vehicle, flags: number): void {
    return task.leaveVehicle(ped, vehicle, flags);
}

/**
 * [Animations list](https://alexguirre.github.io/animations-list/)
 *
 * ```cpp
 * enum eScriptedAnimFlags
 * {
 * AF_LOOPING = 1,
 * AF_HOLD_LAST_FRAME = 2,
 * AF_REPOSITION_WHEN_FINISHED = 4,
 * AF_NOT_INTERRUPTABLE = 8,
 * AF_UPPERBODY = 16,
 * AF_SECONDARY = 32,
 * AF_REORIENT_WHEN_FINISHED = 64,
 * AF_ABORT_ON_PED_MOVEMENT = 128,
 * AF_ADDITIVE = 256,
 * AF_TURN_OFF_COLLISION = 512,
 * AF_OVERRIDE_PHYSICS = 1024,
 * AF_IGNORE_GRAVITY = 2048,
 * AF_EXTRACT_INITIAL_OFFSET = 4096,
 * AF_EXIT_AFTER_INTERRUPTED = 8192,
 * AF_TAG_SYNC_IN = 16384,
 * AF_TAG_SYNC_OUT = 32768,
 * AF_TAG_SYNC_CONTINUOUS = 65536,
 * AF_FORCE_START = 131072,
 * AF_USE_KINEMATIC_PHYSICS = 262144,
 * AF_USE_MOVER_EXTRACTION = 524288,
 * AF_HIDE_WEAPON = 1048576,
 * AF_ENDS_IN_DEAD_POSE = 2097152,
 * AF_ACTIVATE_RAGDOLL_ON_COLLISION = 4194304,
 * AF_DONT_EXIT_ON_DEATH = 8388608,
 * AF_ABORT_ON_WEAPON_DAMAGE = 16777216,
 * AF_DISABLE_FORCED_PHYSICS_UPDATE = 33554432,
 * AF_PROCESS_ATTACHMENTS_ON_START = 67108864,
 * AF_EXPAND_PED_CAPSULE_FROM_SKELETON = 134217728,
 * AF_USE_ALTERNATIVE_FP_ANIM = 268435456,
 * AF_BLENDOUT_WRT_LAST_FRAME = 536870912,
 * AF_USE_FULL_BLENDING = 1073741824
 * }
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_PLAY_ANIM](?\_0xEA47FE3719165B94).</strong>
 *
 * Hash: 0x5AB552C6
 * @deprecated Use task.playAnim(ped, animDictionary, animationName, blendInSpeed, blendOutSpeed, duration, flag, playbackRate, lockX, lockY, lockZ) instead
 */
export function taskPlayAnim(ped: number | Ped, animDictionary: string, animationName: string, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: number, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void {
    return task.playAnim(ped, animDictionary, animationName, blendInSpeed, blendOutSpeed, duration, flag, playbackRate, lockX, lockY, lockZ);
}

/**
 * Similar in functionality to [`TASK_PLAY_ANIM`](#\_0xEA47FE3719165B94), except the position and rotation parameters let you specify the initial position and rotation of the task. The ped is teleported to the position specified.
 * [Animations list](https://alexguirre.github.io/animations-list/)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_PLAY_ANIM_ADVANCED](?\_0x83CDB10EA29B370B).</strong>
 *
 * Hash: 0x3DDEB0E6
 * @deprecated Use task.playAnimAdvanced(ped, animDictionary, animationName, pos, rot, blendInSpeed, blendOutSpeed, duration, flag, animTime) instead
 */
export function taskPlayAnimAdvanced(ped: number | Ped, animDictionary: string, animationName: string, pos: Vector3, rot: Vector3, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: any, animTime: number): void {
    return task.playAnimAdvanced(ped, animDictionary, animationName, pos, rot, blendInSpeed, blendOutSpeed, duration, flag, animTime);
}

/**
 * TASK_REACT_AND_FLEE_PED
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_REACT_AND_FLEE_PED](?\_0x72C896464915D1B1).</strong>
 *
 * Hash: 0x8A632BD8
 * @deprecated Use task.reactAndFleePed(ped, fleeTarget) instead
 */
export function taskReactAndFleePed(ped: number | Ped, fleeTarget: number | Ped): void {
    return task.reactAndFleePed(ped, fleeTarget);
}

/**
 * ```
 * Firing Pattern Hash Information: https://pastebin.com/Px036isB
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_SHOOT_AT_COORD](?\_0x46A6CC01E0826106).</strong>
 *
 * Hash: 0x601C22E3
 * @deprecated Use task.shootAtCoord(ped, pos, duration, firingPattern) instead
 */
export function taskShootAtCoord(ped: number | Ped, pos: Vector3, duration: number, firingPattern: number | string): void {
    return task.shootAtCoord(ped, pos, duration, firingPattern);
}

/**
 * ```
 * //this part of the code is to determine at which entity the player is aiming, for example if you want to create a mod where you give orders to peds
 * Entity aimedentity;
 * `Player player = PLAYER::PLAYER_ID();`
 * `PLAYER::_GET_AIMED_ENTITY(player, &aimedentity);`
 * //bg is an array of peds
 * `TASK::TASK_SHOOT_AT_ENTITY(bg[i], aimedentity, 5000, MISC::GET_HASH_KEY("FIRING_PATTERN_FULL_AUTO"));`
 * in practical usage, getting the entity the player is aiming at and then task the peds to shoot at the entity, at a button press event would be better.
 * Firing Pattern Hash Information: https://pastebin.com/Px036isB
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_SHOOT_AT_ENTITY](?\_0x08DA95E8298AE772).</strong>
 *
 * Hash: 0xAC0631C9
 * @deprecated Use task.shootAtEntity(entity, target, duration, firingPattern) instead
 */
export function taskShootAtEntity(entity: number | Entity, target: number | Entity, duration: number, firingPattern: number | string): void {
    return task.shootAtEntity(entity, target, duration, firingPattern);
}

/**
 * ```
 * NativeDB Introduced: v323
 * ```
 *
 * Warp a ped into a vehicle.
 * **Note**: It's better to use [`TASK_ENTER_VEHICLE`](#\_0xC20E50AA46D09CA8) with the flag "warp" flag instead of this native.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_WARP_PED_INTO_VEHICLE](?\_0x9A7D091411C5F684).</strong>
 *
 * Hash: 0x65D4A35D
 * @deprecated Use task.warpPedIntoVehicle(ped, vehicle, seatIndex) instead
 */
export function taskWarpPedIntoVehicle(ped: number | Ped, vehicle: number | Vehicle, seatIndex: number): void {
    return task.warpPedIntoVehicle(ped, vehicle, seatIndex);
}

/**
 * Scope entry for profiler.
 *
 * Hash: 0xC795A4A9
 * @deprecated Use profiler.enterScope(scopeName) instead
 */
export function profilerEnterScope(scopeName: string): void {
    return profiler.enterScope(scopeName);
}

/**
 * Scope exit for profiler.
 *
 * Hash: 0xB39CA35C
 * @deprecated Use profiler.exitScope() instead
 */
export function profilerExitScope(): void {
    return profiler.exitScope();
}

/**
 * Returns true if the profiler is active.
 *
 * Hash: 0xF8B7D7BB
 * @deprecated Use profiler.isRecording() instead
 */
export function profilerIsRecording(): boolean {
    return profiler.isRecording();
}


export * from "@risinglife/redm-shared";