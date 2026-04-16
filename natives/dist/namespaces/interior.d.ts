import { Vector3, IEntity } from '@risinglife/redm-shared';
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/interiors/interior_sets
 *
 * Hash: 0x174D0AAB11CED739 | Since: 1207
 */
export declare function activateEntitySet(interior: number, entitySetName: string): void;
/**
 * No comment provided
 *
 * Hash: 0xA1762D5BBFCA13A8 | Since: 1207
 */
export declare function clearRoomForEntity(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x951A049765E0D450 | Since: 1207
 */
export declare function clearRoomForGameViewport(): void;
/**
 * No comment provided
 *
 * Hash: 0x33B81A2C07A51FFF | Since: 1207
 */
export declare function deactivateEntitySet(interior: number, entitySetName: string): void;
/**
 * No comment provided
 *
 * Hash: 0x3C2B92A1A07D4FCE | Since: 1207
 */
export declare function disable(interior: number, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xBC29A9894C976945 | Since: 1207
 */
export declare function forceRoomForEntity(entity: number | IEntity, interior: number, roomHashKey: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x115B4AA8FB28AB43 | Since: 1207
 */
export declare function forceRoomForGameViewport(interiorID: number, roomHashKey: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xCDD36C9E5C469070 | Since: 1207
 */
export declare function getAtCoords(pos: Vector3): number;
/**
 * No comment provided
 *
 * Hash: 0xAAD6170AA33B13C0 | Since: 1207
 */
export declare function getAtCoordsWithType(pos: Vector3, interiorType: string): number;
/**
 * Hashed version of GET_INTERIOR_AT_COORDS_WITH_TYPE
 *
 * Hash: 0x3543AEA1816D1D2B | Since: 1207
 */
export declare function getAtCoordsWithTypehash(pos: Vector3, typeHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x5054D1A5218FA696 | Since: 1207
 */
export declare function getFromCollision(pos: Vector3): number;
/**
 * Returns the handle of the interior that the entity is in. Returns 0 if outside.
 *
 * Hash: 0xB417689857646F61 | Since: 1207
 */
export declare function getFromEntity(entity: number | IEntity): number;
/**
 * No comment provided
 *
 * Hash: 0xBC8A281FF125C655 | Since: 1207
 */
export declare function getFromPrimaryView(): number;
/**
 * No comment provided
 *
 * Hash: 0x8451E87D3C2B0286 | Since: 1207
 */
export declare function getLocationAndNamehash(interior: number): [Vector3, number];
/**
 * `Seems to do the exact same as INTERIOR::GET_ROOM_KEY_FROM_ENTITY`
 *
 * Hash: 0x27D7B6F79E1F4603 | Since: 1207
 */
export declare function getKeyForEntityInRoom(entity: number | IEntity): number;
/**
 * Gets the room hash key from the room that the specified entity is in. Each room in every interior has a unique key. Returns 0 if the entity is outside.
 *
 * Hash: 0x076E46E0EB52AFC6 | Since: 1207
 */
export declare function getRoomKeyFromEntity(entity: number | IEntity): number;
/**
 * Returns true if the collision at the specified coords is marked as being outside (false if there's an interior)
 *
 * Hash: 0xF291396B517E25B2 | Since: 1207
 */
export declare function isCollisionMarkedOutside(pos: Vector3): boolean;
/**
 * No comment provided
 *
 * Hash: 0x32810CA2125F5842 | Since: 1207
 */
export declare function isEntitySetActive(interior: number, entitySetName: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x941560D2D45DBFC8 | Since: 1207
 */
export declare function isReady(interior: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4200F14D6F840A9A | Since: 1207
 */
export declare function isScene(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x017C1B3159F79F6C | Since: 1207
 */
export declare function isValid(interior: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBD3D33EABF680168 | Since: 1207
 */
export declare function pinInMemory(interior: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5BD616735F16BF5C | Since: 1207
 */
export declare function retainEntityIn(entity: number | IEntity, interior: number): void;
/**
 * Actually returns void in IDA but the script header defines a BOOL return type
 *
 * Hash: 0xB5EF6FEF2DC9EBED | Since: 1207
 */
export declare function setInUse(interior: number): boolean;
/**
 * `Does something similar to INTERIOR::DISABLE_INTERIOR.`
 *
 * `You don't fall through the floor but everything is invisible inside and looks the same as when INTERIOR::DISABLE_INTERIOR is used. Peds behaves normally inside.`
 *
 * Hash: 0x07FD1A0B814F6055 | Since: 1207
 */
export declare function unpin(interior: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2533F2AB0EB9C6F9 | Since: 1207
 */
export declare function _0x2533F2AB0EB9C6F9(): void;
/**
 * No comment provided
 *
 * Hash: 0xFE2B3D5500B1B2E4 | Since: 1207
 */
export declare function _0xFE2B3D5500B1B2E4(): void;
/**
 * No comment provided
 *
 * Hash: 0x3039BE60B3749716 | Since: 1207
 */
export declare function getMinimapHash(interior: number): number;
/**
 * No comment provided
 *
 * Hash: 0x2C9746D0CA15BE1C | Since: 1207
 */
export declare function getPosition(interior: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xD56FF170710FC826 | Since: 1207
 */
export declare function isEntitySetValid(interior: number, entitySetName: string): boolean;
