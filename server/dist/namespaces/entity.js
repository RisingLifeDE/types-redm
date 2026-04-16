import { Vector3, IEntity, IVehicle, IObject } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x91B38FB6
 */
export function getRemoteSyncedScenesAllowed(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityRemoteSyncedScenesAllowed(_entity);
}
/**
 * Enables or disables the owner check for the specified entity in network-synchronized scenes. When set to `false`, the entity cannot participate in synced scenes initiated by clients that do not own the entity.
 *
 * By default, this is `false` for all entities, meaning only the entity's owner can include it in networked synchronized scenes.
 *
 * Hash: 0xD3FC9D88
 */
export function setRemoteSyncedScenesAllowed(entity, allow) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityRemoteSyncedScenesAllowed(_entity, allow);
}
/**
 * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
 *
 * Hash: 0xEDBE6ADD
 */
export function isPositionFrozen(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
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
export function applyForceTo(entity, forceType, pos, offX, offY, offZ, nComponent, bLocalForce, bLocalOffset, bScaleByMass, bPlayAudio, bScaleByTimeWarp) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ApplyForceToEntity(_entity, forceType, pos.x, pos.y, pos.z, offX, offY, offZ, nComponent, bLocalForce, bLocalOffset, bScaleByMass, bPlayAudio, bScaleByTimeWarp);
}
/**
 * Deletes the specified entity.
 *
 * **NOTE**: For trains this will only work if called on the train engine, it will not work on its carriages.
 *
 * Hash: 0xFAA3D236
 */
export function deleteEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    DeleteEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x3AC90869
 */
export function doesExist(entity) {
    const _entity = entity instanceof IObject ? entity.handle() : entity;
    return DoesEntityExist(_entity);
}
/**
 * Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using [`SET_ENTITY_COORDS`](#\_0x06843DA7060A026B).
 *
 * <strong>This is the server-side RPC native equivalent of the client native [FREEZE_ENTITY_POSITION](?\_0x428CA6DBD1094446).</strong>
 *
 * Hash: 0x65C16D57
 */
export function freezePosition(entity, toggle) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    FreezeEntityPosition(_entity, toggle);
}
/**
 * Gets the entity that this entity is attached to.
 *
 * Hash: 0xFE1589F9
 */
export function getAttachedTo(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityAttachedTo(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xE8C0C629
 */
export function getCollisionDisabled(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityCollisionDisabled(_entity);
}
/**
 * Gets the current coordinates for a specified entity. This native is used server side when using OneSync.
 *
 * See [GET_ENTITY_COORDS](#\_0x3FEF770D40960D5A) for client side.
 *
 * Hash: 0x1647F1CB
 */
export function getCoords(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntityCoords(_entity));
}
/**
 * No comment provided
 *
 * Hash: 0x972CC383
 */
export function getHeading(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityHeading(_entity);
}
/**
 * Only works for vehicle and peds
 *
 * Hash: 0x8E3222B7
 */
export function getHealth(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityHealth(_entity);
}
/**
 * Currently it only works with peds.
 *
 * Hash: 0xC7AE6AA1
 */
export function getMaxHealth(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityMaxHealth(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xDAFCB3EC
 */
export function getModel(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityModel(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xD16EA02F
 */
export function getOrphanMode(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityOrphanMode(_entity);
}
/**
 * This native gets an entity's population type.
 *
 * Hash: 0xFC30DDFF
 */
export function getPopulationType(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityPopulationType(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x8FF45B04
 */
export function getRotation(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntityRotation(_entity));
}
/**
 * No comment provided
 *
 * Hash: 0x9BF8A73F
 */
export function getRotationVelocity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntityRotationVelocity(_entity));
}
/**
 * Gets the routing bucket for the specified entity.
 *
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 *
 * Hash: 0xED4B0486
 */
export function getRoutingBucket(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityRoutingBucket(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xB7F70784
 */
export function getScript(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
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
export function getSpeed(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
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
export function getType(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityType(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xC14C9B6B
 */
export function getVelocity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
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
export function getNetTypeFrom(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetNetTypeFromEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x9C9A3BE0
 */
export function hasBeenMarkedAsNoLongerNeeded(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return HasEntityBeenMarkedAsNoLongerNeeded(_vehicle);
}
/**
 * This native checks if the given entity is visible.
 *
 * Hash: 0x120B4ED5
 */
export function isVisible(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityVisible(_entity);
}
/**
 * Sets the coordinates (world position) for a specified entity, offset by the radius of the entity on the Z axis.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_COORDS](?\_0x06843DA7060A026B).</strong>
 *
 * Hash: 0xDF70B41B
 */
export function setCoords(entity, pos, alive, deadFlag, ragdollFlag, clearArea) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
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
export function setDistanceCullingRadius(entity, radius) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityDistanceCullingRadius(_entity, radius);
}
/**
 * Set the heading of an entity in degrees also known as "Yaw".
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_HEADING](?\_0x8E2530AA8ADA980E).</strong>
 *
 * Hash: 0xE0FF064D
 */
export function setHeading(entity, heading) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityHeading(_entity, heading);
}
/**
 * It allows to flag an entity to ignore the request control filter policy.
 *
 * Hash: 0x9F7F8D36
 */
export function setIgnoreRequestControlFilter(entity, ignore) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
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
export function setOrphanMode(entity, orphanMode) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
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
export function setRotation(entity, pitch, roll, yaw, rotationOrder, bDeadCheck) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityRotation(_entity, pitch, roll, yaw, rotationOrder, bDeadCheck);
}
/**
 * Sets the routing bucket for the specified entity.
 *
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 *
 * Hash: 0x635E5289
 */
export function setRoutingBucket(entity, bucket) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
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
export function setVelocity(entity, pos) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityVelocity(_entity, pos.x, pos.y, pos.z);
}
/**
 * Internal function for ensuring an entity has a state bag.
 *
 * Hash: 0x3BB78F05
 */
export function ensureStateBag(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
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
export function getEntitiesInRadius(pos, radius, entityType, sortByDistance, models) {
    const _models = models instanceof IObject ? models.handle() : models;
    return GetEntitiesInRadius(pos.x, pos.y, pos.z, radius, entityType, sortByDistance, _models);
}
/**
 * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](#\_0x5BA35AAF).
 *
 * Hash: 0x4BDF1867
 */
export function getFromStateBagName(bagName) {
    return GetEntityFromStateBagName(bagName);
}
