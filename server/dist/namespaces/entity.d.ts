import { Vector3, IEntity, IVehicle, IObject } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x91B38FB6
 */
export declare function getRemoteSyncedScenesAllowed(entity: number | IEntity): boolean;
/**
 * Enables or disables the owner check for the specified entity in network-synchronized scenes. When set to `false`, the entity cannot participate in synced scenes initiated by clients that do not own the entity.
 *
 * By default, this is `false` for all entities, meaning only the entity's owner can include it in networked synchronized scenes.
 *
 * Hash: 0xD3FC9D88
 */
export declare function setRemoteSyncedScenesAllowed(entity: number | IEntity, allow: boolean): void;
/**
 * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
 *
 * Hash: 0xEDBE6ADD
 */
export declare function isPositionFrozen(entity: number | IEntity): boolean;
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
export declare function applyForceTo(entity: number | IEntity, forceType: number, pos: Vector3, offX: number, offY: number, offZ: number, nComponent: number, bLocalForce: boolean, bLocalOffset: boolean, bScaleByMass: boolean, bPlayAudio: boolean, bScaleByTimeWarp: boolean): void;
/**
 * Deletes the specified entity.
 *
 * **NOTE**: For trains this will only work if called on the train engine, it will not work on its carriages.
 *
 * Hash: 0xFAA3D236
 */
export declare function deleteEntity(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x3AC90869
 */
export declare function doesExist(entity: number | IObject): boolean;
/**
 * Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using [`SET_ENTITY_COORDS`](#\_0x06843DA7060A026B).
 *
 * <strong>This is the server-side RPC native equivalent of the client native [FREEZE_ENTITY_POSITION](?\_0x428CA6DBD1094446).</strong>
 *
 * Hash: 0x65C16D57
 */
export declare function freezePosition(entity: number | IEntity, toggle: boolean): void;
/**
 * Gets the entity that this entity is attached to.
 *
 * Hash: 0xFE1589F9
 */
export declare function getAttachedTo(entity: number | IEntity): number;
/**
 * No comment provided
 *
 * Hash: 0xE8C0C629
 */
export declare function getCollisionDisabled(entity: number | IEntity): boolean;
/**
 * Gets the current coordinates for a specified entity. This native is used server side when using OneSync.
 *
 * See [GET_ENTITY_COORDS](#\_0x3FEF770D40960D5A) for client side.
 *
 * Hash: 0x1647F1CB
 */
export declare function getCoords(entity: number | IEntity): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x972CC383
 */
export declare function getHeading(entity: number | IEntity): number;
/**
 * Only works for vehicle and peds
 *
 * Hash: 0x8E3222B7
 */
export declare function getHealth(entity: number | IEntity): number;
/**
 * Currently it only works with peds.
 *
 * Hash: 0xC7AE6AA1
 */
export declare function getMaxHealth(entity: number | IEntity): number;
/**
 * No comment provided
 *
 * Hash: 0xDAFCB3EC
 */
export declare function getModel(entity: number | IEntity): number;
/**
 * No comment provided
 *
 * Hash: 0xD16EA02F
 */
export declare function getOrphanMode(entity: number | IEntity): number;
/**
 * This native gets an entity's population type.
 *
 * Hash: 0xFC30DDFF
 */
export declare function getPopulationType(entity: number | IEntity): number;
/**
 * No comment provided
 *
 * Hash: 0x8FF45B04
 */
export declare function getRotation(entity: number | IEntity): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x9BF8A73F
 */
export declare function getRotationVelocity(entity: number | IEntity): Vector3;
/**
 * Gets the routing bucket for the specified entity.
 *
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 *
 * Hash: 0xED4B0486
 */
export declare function getRoutingBucket(entity: number | IEntity): number;
/**
 * No comment provided
 *
 * Hash: 0xB7F70784
 */
export declare function getScript(entity: number | IEntity): string;
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
export declare function getSpeed(entity: number | IEntity): number;
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
export declare function getType(entity: number | IEntity): number;
/**
 * No comment provided
 *
 * Hash: 0xC14C9B6B
 */
export declare function getVelocity(entity: number | IEntity): Vector3;
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
export declare function getNetTypeFrom(entity: number | IEntity): number;
/**
 * No comment provided
 *
 * Hash: 0x9C9A3BE0
 */
export declare function hasBeenMarkedAsNoLongerNeeded(vehicle: number | IVehicle): boolean;
/**
 * This native checks if the given entity is visible.
 *
 * Hash: 0x120B4ED5
 */
export declare function isVisible(entity: number | IEntity): boolean;
/**
 * Sets the coordinates (world position) for a specified entity, offset by the radius of the entity on the Z axis.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_COORDS](?\_0x06843DA7060A026B).</strong>
 *
 * Hash: 0xDF70B41B
 */
export declare function setCoords(entity: number | IEntity, pos: Vector3, alive: boolean, deadFlag: boolean, ragdollFlag: boolean, clearArea: boolean): void;
/**
 * It overrides the default distance culling radius of an entity. Set to `0.0` to reset.
 * If you want to interact with an entity outside of your players' scopes set the radius to a huge number.
 *
 * **WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
 *
 * Hash: 0xD3A183A3
 */
export declare function setDistanceCullingRadius(entity: number | IEntity, radius: number): void;
/**
 * Set the heading of an entity in degrees also known as "Yaw".
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_HEADING](?\_0x8E2530AA8ADA980E).</strong>
 *
 * Hash: 0xE0FF064D
 */
export declare function setHeading(entity: number | IEntity, heading: number): void;
/**
 * It allows to flag an entity to ignore the request control filter policy.
 *
 * Hash: 0x9F7F8D36
 */
export declare function setIgnoreRequestControlFilter(entity: number | IEntity, ignore: boolean): void;
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
export declare function setOrphanMode(entity: number | IEntity, orphanMode: number): void;
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
export declare function setRotation(entity: number | IEntity, pitch: number, roll: number, yaw: number, rotationOrder: number, bDeadCheck: boolean): void;
/**
 * Sets the routing bucket for the specified entity.
 *
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 *
 * Hash: 0x635E5289
 */
export declare function setRoutingBucket(entity: number | IEntity, bucket: number): void;
/**
 * ```
 * Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_VELOCITY](?\_0x1C99BB7B6E96D16F).</strong>
 *
 * Hash: 0xFF5A1988
 */
export declare function setVelocity(entity: number | IEntity, pos: Vector3): void;
/**
 * Internal function for ensuring an entity has a state bag.
 *
 * Hash: 0x3BB78F05
 */
export declare function ensureStateBag(entity: number | IEntity): void;
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
export declare function getEntitiesInRadius(pos: Vector3, radius: number, entityType: number, sortByDistance: boolean, models: number | IObject): number;
/**
 * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](#\_0x5BA35AAF).
 *
 * Hash: 0x4BDF1867
 */
export declare function getFromStateBagName(bagName: string): number;
