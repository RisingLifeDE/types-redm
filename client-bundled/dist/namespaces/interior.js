import { Vector3, IEntity } from '@risinglife/redm-shared';
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/interiors/interior_sets
 *
 * Hash: 0x174D0AAB11CED739 | Since: 1207 | API-Set: unknown
 */
export function activateEntitySet(interior, entitySetName) {
    ActivateInteriorEntitySet(interior, entitySetName, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xA1762D5BBFCA13A8 | Since: 1207 | API-Set: unknown
 */
export function clearRoomForEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ClearRoomForEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x951A049765E0D450 | Since: 1207 | API-Set: unknown
 */
export function clearRoomForGameViewport() {
    ClearRoomForGameViewport();
}
/**
 * No comment provided
 *
 * Hash: 0x33B81A2C07A51FFF | Since: 1207 | API-Set: unknown
 */
export function deactivateEntitySet(interior, entitySetName) {
    DeactivateInteriorEntitySet(interior, entitySetName, false);
}
/**
 * No comment provided
 *
 * Hash: 0x3C2B92A1A07D4FCE | Since: 1207 | API-Set: unknown
 */
export function disable(interior, toggle) {
    DisableInterior(interior, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xBC29A9894C976945 | Since: 1207 | API-Set: unknown
 */
export function forceRoomForEntity(entity, interior, roomHashKey) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof roomHashKey === 'string')
        roomHashKey = GetHashKey(roomHashKey);
    ForceRoomForEntity(_entity, interior, roomHashKey);
}
/**
 * No comment provided
 *
 * Hash: 0x115B4AA8FB28AB43 | Since: 1207 | API-Set: unknown
 */
export function forceRoomForGameViewport(interiorID, roomHashKey) {
    if (typeof roomHashKey === 'string')
        roomHashKey = GetHashKey(roomHashKey);
    ForceRoomForGameViewport(interiorID, roomHashKey);
}
/**
 * No comment provided
 *
 * Hash: 0xCDD36C9E5C469070 | Since: 1207 | API-Set: unknown
 */
export function getAtCoords(pos) {
    return GetInteriorAtCoords(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xAAD6170AA33B13C0 | Since: 1207 | API-Set: unknown
 */
export function getAtCoordsWithType(pos, interiorType) {
    return GetInteriorAtCoordsWithType(pos.x, pos.y, pos.z, interiorType);
}
/**
 * Hashed version of GET_INTERIOR_AT_COORDS_WITH_TYPE
 *
 * Hash: 0x3543AEA1816D1D2B | Since: 1207 | API-Set: unknown
 */
export function getAtCoordsWithTypehash(pos, typeHash) {
    if (typeof typeHash === 'string')
        typeHash = GetHashKey(typeHash);
    return GetInteriorAtCoordsWithTypehash(pos.x, pos.y, pos.z, typeHash);
}
/**
 * No comment provided
 *
 * Hash: 0x5054D1A5218FA696 | Since: 1207 | API-Set: unknown
 */
export function getFromCollision(pos) {
    return GetInteriorFromCollision(pos.x, pos.y, pos.z);
}
/**
 * Returns the handle of the interior that the entity is in. Returns 0 if outside.
 *
 * Hash: 0xB417689857646F61 | Since: 1207 | API-Set: unknown
 */
export function getFromEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetInteriorFromEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xBC8A281FF125C655 | Since: 1207 | API-Set: unknown
 */
export function getFromPrimaryView() {
    return GetInteriorFromPrimaryView();
}
/**
 * No comment provided
 *
 * Hash: 0x8451E87D3C2B0286 | Since: 1207 | API-Set: unknown
 */
export function getLocationAndNamehash(interior) {
    return GetInteriorLocationAndNamehash(interior);
}
/**
 * `Seems to do the exact same as INTERIOR::GET_ROOM_KEY_FROM_ENTITY`
 *
 * Hash: 0x27D7B6F79E1F4603 | Since: 1207 | API-Set: unknown
 */
export function getKeyForEntityInRoom(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetKeyForEntityInRoom(_entity);
}
/**
 * Gets the room hash key from the room that the specified entity is in. Each room in every interior has a unique key. Returns 0 if the entity is outside.
 *
 * Hash: 0x076E46E0EB52AFC6 | Since: 1207 | API-Set: unknown
 */
export function getRoomKeyFromEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetRoomKeyFromEntity(_entity);
}
/**
 * Returns true if the collision at the specified coords is marked as being outside (false if there's an interior)
 *
 * Hash: 0xF291396B517E25B2 | Since: 1207 | API-Set: unknown
 */
export function isCollisionMarkedOutside(pos) {
    return IsCollisionMarkedOutside(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x32810CA2125F5842 | Since: 1207 | API-Set: unknown
 */
export function isEntitySetActive(interior, entitySetName) {
    return IsInteriorEntitySetActive(interior, entitySetName);
}
/**
 * No comment provided
 *
 * Hash: 0x941560D2D45DBFC8 | Since: 1207 | API-Set: unknown
 */
export function isReady(interior) {
    return IsInteriorReady(interior);
}
/**
 * No comment provided
 *
 * Hash: 0x4200F14D6F840A9A | Since: 1207 | API-Set: unknown
 */
export function isScene() {
    return IsInteriorScene();
}
/**
 * No comment provided
 *
 * Hash: 0x017C1B3159F79F6C | Since: 1207 | API-Set: unknown
 */
export function isValid(interior) {
    return IsValidInterior(interior);
}
/**
 * No comment provided
 *
 * Hash: 0xBD3D33EABF680168 | Since: 1207 | API-Set: unknown
 */
export function pinInMemory(interior) {
    PinInteriorInMemory(interior);
}
/**
 * No comment provided
 *
 * Hash: 0x5BD616735F16BF5C | Since: 1207 | API-Set: unknown
 */
export function retainEntityIn(entity, interior) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    RetainEntityInInterior(_entity, interior);
}
/**
 * Actually returns void in IDA but the script header defines a BOOL return type
 *
 * Hash: 0xB5EF6FEF2DC9EBED | Since: 1207 | API-Set: unknown
 */
export function setInUse(interior) {
    return SetInteriorInUse(interior);
}
/**
 * `Does something similar to INTERIOR::DISABLE_INTERIOR.`
 *
 * `You don't fall through the floor but everything is invisible inside and looks the same as when INTERIOR::DISABLE_INTERIOR is used. Peds behaves normally inside.`
 *
 * Hash: 0x07FD1A0B814F6055 | Since: 1207 | API-Set: unknown
 */
export function unpin(interior) {
    UnpinInterior(interior);
}
/**
 * No comment provided
 *
 * Hash: 0x2533F2AB0EB9C6F9 | Since: 1207 | API-Set: unknown
 */
export function _0x2533F2AB0EB9C6F9() {
    Citizen.invokeNative('0x2533F2AB0EB9C6F9', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFE2B3D5500B1B2E4 | Since: 1207 | API-Set: unknown
 */
export function _0xFE2B3D5500B1B2E4() {
    Citizen.invokeNative('0xFE2B3D5500B1B2E4', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3039BE60B3749716 | Since: 1207 | API-Set: unknown
 */
export function getMinimapHash(interior) {
    return GetInteriorMinimapHash(interior);
}
/**
 * No comment provided
 *
 * Hash: 0x2C9746D0CA15BE1C | Since: 1207 | API-Set: unknown
 */
export function getPosition(interior) {
    return new Vector3(GetInteriorPosition(interior));
}
/**
 * No comment provided
 *
 * Hash: 0xD56FF170710FC826 | Since: 1207 | API-Set: unknown
 */
export function isEntitySetValid(interior, entitySetName) {
    return IsInteriorEntitySetValid(interior, entitySetName);
}
