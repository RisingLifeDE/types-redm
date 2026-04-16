import { IEntity, IObject } from '@risinglife/redm-shared';
/**
 * Returns entity's archetype name, if available.
 *
 * Hash: 0x47B870F5
 */
export function getArchetypeName(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityArchetypeName(_entity);
}
/**
 * Returns the transient entity index for a specified mapdata/entity pair.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xEE43540D
 */
export function getIndexFromMapdata(mapdata, entity) {
    return GetEntityIndexFromMapdata(mapdata, entity);
}
/**
 * Retrieves the map data and entity handles from a specific entity.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xF6B815C5
 */
export function getMapdataOwner(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityMapdataOwner(_entity);
}
/**
 * Resets mapdata entity transform matrix to its original state.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x8143FA4F
 */
export function resetMapdataMatrix(mapDataHash, entityInternalIdx) {
    return ResetMapdataEntityMatrix(mapDataHash, entityInternalIdx);
}
/**
 * Gets the selected entity at the current mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x3DD8130F
 */
export function selectAtCursor(hitFlags, precise) {
    return SelectEntityAtCursor(hitFlags, precise);
}
/**
 * Gets the selected entity at the specified mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xAFE8D405
 */
export function selectAtPos(fracX, fracY, hitFlags, precise) {
    return SelectEntityAtPos(fracX, fracY, hitFlags, precise);
}
/**
 * Sets an entity's matrix. Arguments are in the same order as with GET_ENTITY_MATRIX.
 *
 * Hash: 0xFB0639B
 */
export function setMatrix(entity, forwardX, forwardY, forwardZ, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityMatrix(_entity, forwardX, forwardY, forwardZ, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ);
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
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Returns the memory address of an entity.
 *
 * This native is intended for singleplayer debugging, and may not be available during multiplayer.
 *
 * Hash: 0x9A3144BC
 */
export function getAddress(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityAddress(_entity);
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
