import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * https://github.com/femga/rdr3_discoveries/tree/master/interiors/interior_sets
 * 
 * Hash: 0x174D0AAB11CED739 | Since: 1207
 */
export function activateEntitySet(interior: number, entitySetName: string): void {
    ActivateInteriorEntitySet(interior, entitySetName, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xA1762D5BBFCA13A8 | Since: 1207
 */
export function clearRoomForEntity(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ClearRoomForEntity(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x951A049765E0D450 | Since: 1207
 */
export function clearRoomForGameViewport(): void {
    ClearRoomForGameViewport();
}

/**
 * No comment provided
 * 
 * Hash: 0x33B81A2C07A51FFF | Since: 1207
 */
export function deactivateEntitySet(interior: number, entitySetName: string): void {
    DeactivateInteriorEntitySet(interior, entitySetName, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x3C2B92A1A07D4FCE | Since: 1207
 */
export function disable(interior: number, toggle: boolean): void {
    DisableInterior(interior, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xBC29A9894C976945 | Since: 1207
 */
export function forceRoomForEntity(entity: number | IEntity, interior: number, roomHashKey: number | string): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof roomHashKey === 'string') roomHashKey = GetHashKey(roomHashKey)
    ForceRoomForEntity(_entity, interior, roomHashKey);
}

/**
 * No comment provided
 * 
 * Hash: 0x115B4AA8FB28AB43 | Since: 1207
 */
export function forceRoomForGameViewport(interiorID: number, roomHashKey: number | string): void {
    if (typeof roomHashKey === 'string') roomHashKey = GetHashKey(roomHashKey)
    ForceRoomForGameViewport(interiorID, roomHashKey);
}

/**
 * No comment provided
 * 
 * Hash: 0xCDD36C9E5C469070 | Since: 1207
 */
export function getAtCoords(pos: Vector3): number {
    return GetInteriorAtCoords(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xAAD6170AA33B13C0 | Since: 1207
 */
export function getAtCoordsWithType(pos: Vector3, interiorType: string): number {
    return GetInteriorAtCoordsWithType(pos.x, pos.y, pos.z, interiorType);
}

/**
 * Hashed version of GET_INTERIOR_AT_COORDS_WITH_TYPE
 * 
 * Hash: 0x3543AEA1816D1D2B | Since: 1207
 */
export function getAtCoordsWithTypehash(pos: Vector3, typeHash: number | string): number {
    if (typeof typeHash === 'string') typeHash = GetHashKey(typeHash)
    return GetInteriorAtCoordsWithTypehash(pos.x, pos.y, pos.z, typeHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x5054D1A5218FA696 | Since: 1207
 */
export function getFromCollision(pos: Vector3): number {
    return GetInteriorFromCollision(pos.x, pos.y, pos.z);
}

/**
 * Returns the handle of the interior that the entity is in. Returns 0 if outside.
 * 
 * Hash: 0xB417689857646F61 | Since: 1207
 */
export function getFromEntity(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetInteriorFromEntity(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xBC8A281FF125C655 | Since: 1207
 */
export function getFromPrimaryView(): number {
    return GetInteriorFromPrimaryView();
}

/**
 * No comment provided
 * 
 * Hash: 0x8451E87D3C2B0286 | Since: 1207
 */
export function getLocationAndNamehash(interior: number): [Vector3, number] {
    return GetInteriorLocationAndNamehash(interior);
}

/**
 * `Seems to do the exact same as INTERIOR::GET_ROOM_KEY_FROM_ENTITY`
 * 
 * Hash: 0x27D7B6F79E1F4603 | Since: 1207
 */
export function getKeyForEntityInRoom(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetKeyForEntityInRoom(_entity);
}

/**
 * Gets the room hash key from the room that the specified entity is in. Each room in every interior has a unique key. Returns 0 if the entity is outside.
 * 
 * Hash: 0x076E46E0EB52AFC6 | Since: 1207
 */
export function getRoomKeyFromEntity(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetRoomKeyFromEntity(_entity);
}

/**
 * Returns true if the collision at the specified coords is marked as being outside (false if there's an interior)
 * 
 * Hash: 0xF291396B517E25B2 | Since: 1207
 */
export function isCollisionMarkedOutside(pos: Vector3): boolean {
    return IsCollisionMarkedOutside(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x32810CA2125F5842 | Since: 1207
 */
export function isEntitySetActive(interior: number, entitySetName: string): boolean {
    return IsInteriorEntitySetActive(interior, entitySetName);
}

/**
 * No comment provided
 * 
 * Hash: 0x941560D2D45DBFC8 | Since: 1207
 */
export function isReady(interior: number): boolean {
    return IsInteriorReady(interior);
}

/**
 * No comment provided
 * 
 * Hash: 0x4200F14D6F840A9A | Since: 1207
 */
export function isScene(): boolean {
    return IsInteriorScene();
}

/**
 * No comment provided
 * 
 * Hash: 0x017C1B3159F79F6C | Since: 1207
 */
export function isValid(interior: number): boolean {
    return IsValidInterior(interior);
}

/**
 * No comment provided
 * 
 * Hash: 0xBD3D33EABF680168 | Since: 1207
 */
export function pinInMemory(interior: number): void {
    PinInteriorInMemory(interior);
}

/**
 * No comment provided
 * 
 * Hash: 0x5BD616735F16BF5C | Since: 1207
 */
export function retainEntityIn(entity: number | IEntity, interior: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    RetainEntityInInterior(_entity, interior);
}

/**
 * Actually returns void in IDA but the script header defines a BOOL return type
 * 
 * Hash: 0xB5EF6FEF2DC9EBED | Since: 1207
 */
export function setInUse(interior: number): boolean {
    return SetInteriorInUse(interior);
}

/**
 * `Does something similar to INTERIOR::DISABLE_INTERIOR.`
 * 
 * `You don't fall through the floor but everything is invisible inside and looks the same as when INTERIOR::DISABLE_INTERIOR is used. Peds behaves normally inside.`
 * 
 * Hash: 0x07FD1A0B814F6055 | Since: 1207
 */
export function unpin(interior: number): void {
    UnpinInterior(interior);
}

/**
 * No comment provided
 * 
 * Hash: 0x2533F2AB0EB9C6F9 | Since: 1207
 */
export function _0x2533F2AB0EB9C6F9(): void {
    Citizen.invokeNative('0x2533F2AB0EB9C6F9', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFE2B3D5500B1B2E4 | Since: 1207
 */
export function _0xFE2B3D5500B1B2E4(): void {
    Citizen.invokeNative('0xFE2B3D5500B1B2E4', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3039BE60B3749716 | Since: 1207
 */
export function getMinimapHash(interior: number): number {
    return GetInteriorMinimapHash(interior);
}

/**
 * No comment provided
 * 
 * Hash: 0x2C9746D0CA15BE1C | Since: 1207
 */
export function getPosition(interior: number): Vector3 {
    return new Vector3(GetInteriorPosition(interior));
}

/**
 * No comment provided
 * 
 * Hash: 0xD56FF170710FC826 | Since: 1207
 */
export function isEntitySetValid(interior: number, entitySetName: string): boolean {
    return IsInteriorEntitySetValid(interior, entitySetName);
}

