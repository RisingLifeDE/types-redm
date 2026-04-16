import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x8245C1F3262F4AC2 | Since: 1207 | API-Set: unknown
 */
export function addScenarioLooted(scenario: number): void {
    PersistenceAddScenarioLooted(scenario);
}

/**
 * No comment provided
 * 
 * Hash: 0x9D16896F0DBE78A2 | Since: 1207 | API-Set: unknown
 */
export function removeAllEntitiesInArea(pos: Vector3, radius: number): void {
    PersistenceRemoveAllEntitiesInArea(pos.x, pos.y, pos.z, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0x065887B694359799 | Since: 1207 | API-Set: unknown
 */
export function _0x065887B694359799(): void {
    Citizen.invokeNative('0x065887B694359799', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1F56FB3FDB4EAF65 | Since: 1207 | API-Set: unknown
 */
export function _0x1F56FB3FDB4EAF65(): any {
    return Citizen.invokeNative('0x1F56FB3FDB4EAF65', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x291CC21D1FB6790E | Since: 1207 | API-Set: unknown
 */
export function _0x291CC21D1FB6790E(): void {
    Citizen.invokeNative('0x291CC21D1FB6790E', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2E545965DF98D476 | Since: 1207 | API-Set: unknown
 */
export function _0x2E545965DF98D476(): any {
    return Citizen.invokeNative('0x2E545965DF98D476', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3CA5E58C9731A16B | Since: 1207 | API-Set: unknown
 */
export function _0x3CA5E58C9731A16B(): void {
    Citizen.invokeNative('0x3CA5E58C9731A16B', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A79220F6D38D7C3 | Since: 1207 | API-Set: unknown
 */
export function _0x5A79220F6D38D7C3(): any {
    return Citizen.invokeNative('0x5A79220F6D38D7C3', undefined);
}

/**
 * _PERSISTENCE_*
 * 
 * Hash: 0x66DAA3A9274E8E82 | Since: 1232 | API-Set: unknown
 */
export function _0x66DAA3A9274E8E82(): void {
    Citizen.invokeNative('0x66DAA3A9274E8E82');
}

/**
 * No comment provided
 * 
 * Hash: 0x7A1BD123E5CDB6E5 | Since: 1207 | API-Set: unknown
 */
export function _0x7A1BD123E5CDB6E5(): void {
    Citizen.invokeNative('0x7A1BD123E5CDB6E5');
}

/**
 * No comment provided
 * 
 * Hash: 0x8DE104BEC243A73B | Since: 1207 | API-Set: unknown
 */
export function _0x8DE104BEC243A73B(): void {
    Citizen.invokeNative('0x8DE104BEC243A73B', undefined);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xB03140014ACA6C40 | Since: 1207 | API-Set: unknown
 */
export function _0xB03140014ACA6C40(): void {
    Citizen.invokeNative('0xB03140014ACA6C40', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBA2C49EA6A8D24FF | Since: 1207 | API-Set: unknown
 */
export function _0xBA2C49EA6A8D24FF(): any {
    return Citizen.invokeNative('0xBA2C49EA6A8D24FF', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCFDA2518F322D836 | Since: 1207 | API-Set: unknown
 */
export function _0xCFDA2518F322D836(): any {
    return Citizen.invokeNative('0xCFDA2518F322D836', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDC0A1F0ECEC9F0C0 | Since: 1207 | API-Set: unknown
 */
export function _0xDC0A1F0ECEC9F0C0(): void {
    Citizen.invokeNative('0xDC0A1F0ECEC9F0C0', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE225CEF1901F6108 | Since: 1207 | API-Set: unknown
 */
export function _0xE225CEF1901F6108(): void {
    Citizen.invokeNative('0xE225CEF1901F6108', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF5622FA6ACFCA7DB | Since: 1207 | API-Set: unknown
 */
export function _0xF5622FA6ACFCA7DB(): void {
    Citizen.invokeNative('0xF5622FA6ACFCA7DB', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFC9806DA9A460093 | Since: 1207 | API-Set: unknown
 */
export function _0xFC9806DA9A460093(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void {
    Citizen.invokeNative('0xFC9806DA9A460093', x1, y1, z1, x2, y2, z2);
}

/**
 * No comment provided
 * 
 * Hash: 0xFB7CF1DE938A3E22 | Since: 1207 | API-Set: unknown
 */
export function isScenarioMarkedAsLooted(scenario: number): boolean {
    return PersistenceIsScenarioMarkedAsLooted(scenario);
}

/**
 * No comment provided
 * 
 * Hash: 0xB6E1A185C2B9319A | Since: 1207 | API-Set: unknown
 */
export function isScenarioMarkedAsLootedAtCoords(pos: Vector3): boolean {
    return PersistenceIsScenarioMarkedAsLootedAtCoords(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x188313616D184213 | Since: 1207 | API-Set: unknown
 */
export function isScenarioMarkedAsLootedAtCoordsWithModel(pos: Vector3, model: number | string): boolean {
    if (typeof model === 'string') model = GetHashKey(model)
    return PersistenceIsScenarioMarkedAsLootedAtCoordsWithModel(pos.x, pos.y, pos.z, model);
}

/**
 * Only used in R* script long_update.ysc in script function REFRESH_CLOSEST_TOWN
 * 
 * Hash: 0xEFB5F34CC0953B27 | Since: 1207 | API-Set: unknown
 */
export function refreshTownVolume(volume: number): void {
    PersistenceRefreshTownVolume(volume);
}

