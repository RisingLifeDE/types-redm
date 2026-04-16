import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x2A4765812202E671 | Since: 1207
 */
export function _0x2A4765812202E671(): any {
    return Citizen.invokeNative('0x2A4765812202E671');
}

/**
 * No comment provided
 * 
 * Hash: 0x763637F9B838B0A7 | Since: 1207
 */
export function _0x763637F9B838B0A7(p1: number | string): void {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    Citizen.invokeNative('0x763637F9B838B0A7', 0, p1, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA20398536B7F1134 | Since: 1207
 */
export function _0xA20398536B7F1134(): void {
    Citizen.invokeNative('0xA20398536B7F1134', undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA49D6D503E3EA847 | Since: 1207
 */
export function _0xA49D6D503E3EA847(): void {
    Citizen.invokeNative('0xA49D6D503E3EA847', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDA0A30153FCC0FFD | Since: 1207
 */
export function _0xDA0A30153FCC0FFD(): void {
    Citizen.invokeNative('0xDA0A30153FCC0FFD');
}

/**
 * No comment provided
 * 
 * Hash: 0x69D5479982355D8F | Since: 1207
 */
export function addEntryHash(pos: Vector3, p5: number | string, p6: number | string): void {
    if (typeof p5 === 'string') p5 = GetHashKey(p5)
    if (typeof p6 === 'string') p6 = GetHashKey(p6)
    UilogAddEntryHash(0, 0, pos.x, pos.y, pos.z, p5, p6, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x49C63FDF69744A27 | Since: 1207
 */
export function addItemToTaskList(): void {
    UilogAddItemToTaskList(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB43163388484CC87 | Since: 1207
 */
export function addOrUpdateObjective(p1: number | string, p2: number | string): void {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    if (typeof p2 === 'string') p2 = GetHashKey(p2)
    UilogAddOrUpdateObjective(0, p1, p2, undefined, false, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x60C59968E8E87E6B | Since: 1207
 */
export function addTotalTakeEntry(p0: number | string, p1: number | string, p4: number | string): void {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    if (typeof p4 === 'string') p4 = GetHashKey(p4)
    UilogAddTotalTakeEntry(p0, p1, undefined, undefined, p4);
}

/**
 * No comment provided
 * 
 * Hash: 0xB95B4EA6B1EDF035 | Since: 1207
 */
export function clearAllEntries(): void {
    UilogClearAllEntries();
}

/**
 * No comment provided
 * 
 * Hash: 0xDFF0D417277B41F8 | Since: 1207
 */
export function clearCachedObjective(): void {
    UilogClearCachedObjective();
}

/**
 * No comment provided
 * 
 * Hash: 0xA3108D6981A5CADB | Since: 1207
 */
export function clearHasDisplayedCachedObjective(): void {
    UilogClearHasDisplayedCachedObjective();
}

/**
 * No comment provided
 * 
 * Hash: 0x15A4461BEB788096 | Since: 1207
 */
export function getCachedObjective(): string {
    return UilogGetCachedObjective();
}

/**
 * No comment provided
 * 
 * Hash: 0xCC48FFBB45B54F71 | Since: 1207
 */
export function hasDisplayedCachedObjective(): boolean {
    return UilogHasDisplayedCachedObjective();
}

/**
 * No comment provided
 * 
 * Hash: 0xB8188CCF52202475 | Since: 1207
 */
export function isEntryRegistered(p1: number | string): boolean {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    return UilogIsEntryRegistered(0, p1);
}

/**
 * No comment provided
 * 
 * Hash: 0x3920574CF0A2B7B6 | Since: 1207
 */
export function markAllEntriesAvailability(): void {
    UilogMarkAllEntriesAvailability(0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x13E8D7DD08543482 | Since: 1207
 */
export function markEntryAvailability(p1: number | string): void {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    UilogMarkEntryAvailability(0, p1, 0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDE31D66D1E54C471 | Since: 1207
 */
export function markMissionCompleted(p0: number | string): void {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    UilogMarkMissionCompleted(p0);
}

/**
 * No comment provided
 * 
 * Hash: 0x49E58FE6EF40B987 | Since: 1207
 */
export function postNotification(): [number, any] {
    return UilogPostNotification();
}

/**
 * No comment provided
 * 
 * Hash: 0xE9990552DEC71600 | Since: 1207
 */
export function printCachedObjective(): void {
    UilogPrintCachedObjective();
}

/**
 * No comment provided
 * 
 * Hash: 0xD594A19BE09A75C6 | Since: 1207
 */
export function removeEntry(p1: number | string): void {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    UilogRemoveEntry(0, p1);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA233F8FE190514C | Since: 1207
 */
export function setCachedObjective(): void {
    UilogSetCachedObjective(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA31013798FADCADC | Since: 1207
 */
export function setDisplayCompletionRating(logEntryType: number, p1: number | string): void {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    UilogSetDisplayCompletionRating(logEntryType, p1, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x69684D9936958D8F | Since: 1207
 */
export function setEntryBriefTexture(p1: number | string, texture: number | string, textureDictionary: number | string): void {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    if (typeof texture === 'string') texture = GetHashKey(texture)
    if (typeof textureDictionary === 'string') textureDictionary = GetHashKey(textureDictionary)
    UilogSetEntryBriefTexture(0, p1, texture, textureDictionary);
}

/**
 * No comment provided
 * 
 * Hash: 0x6965469934958D8F | Since: 1207
 */
export function setEntryIconTexture(p1: number | string, icon: number | string, iconDictionary: number | string): void {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    if (typeof icon === 'string') icon = GetHashKey(icon)
    if (typeof iconDictionary === 'string') iconDictionary = GetHashKey(iconDictionary)
    UilogSetEntryIconTexture(0, p1, icon, iconDictionary);
}

/**
 * No comment provided
 * 
 * Hash: 0x72A5CD214B342568 | Since: 1207
 */
export function setEntryPinned(p1: number | string): void {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    UilogSetEntryPinned(0, p1, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xA3108D6981A5CADC | Since: 1207
 */
export function setHasDisplayedCachedObjective(): void {
    UilogSetHasDisplayedCachedObjective();
}

/**
 * No comment provided
 * 
 * Hash: 0x136A027CF37B0A4F | Since: 1207
 */
export function setPendingDetailsId(p1: number | string): any {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    return UilogSetPendingDetailsId(0, p1);
}

/**
 * No comment provided
 * 
 * Hash: 0xD106B211EF1B8F04 | Since: 1207
 */
export function setTotalTakeSummary(): void {
    UilogSetTotalTakeSummary(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x80D6524190258C3E | Since: 1207
 */
export function updateEntrySubheader(p1: number | string): string {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    return UilogUpdateEntrySubheader(0, p1);
}

