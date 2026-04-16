import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0xABE74510883C7950 | Since: 1207 | API-Set: unknown
 */
export function addTo(entity: number | IEntity, itemset: any): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return AddToItemset(_entity, itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0x85F3A86CA9021FB0 | Since: 1207 | API-Set: unknown
 */
export function clean(itemset: any): void {
    CleanItemset(itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0xA1AF16083320065A | Since: 1207 | API-Set: unknown
 */
export function create(): any {
    return CreateItemset(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x712BC69F10549B92 | Since: 1207 | API-Set: unknown
 */
export function destroy(itemset: any): void {
    DestroyItemset(itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0x275A2E2C0FAB7612 | Since: 1207 | API-Set: unknown
 */
export function getIndexedItemIn(index: number, itemset: any): number {
    return GetIndexedItemInItemset(index, itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0x9FC3CDB5CE815901 | Since: 1207 | API-Set: unknown
 */
export function getIndexedScenarioPointIndexIn(index: number, itemset: any): any {
    return GetIndexedScenarioPointIndexInItemset(index, itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0x55F2E375AC6018A9 | Since: 1207 | API-Set: unknown
 */
export function getSize(itemset: any): number {
    return GetItemsetSize(itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1503C2EE2FE688C | Since: 1207 | API-Set: unknown
 */
export function isIn(entity: number | IEntity, itemset: any): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsInItemset(_entity, itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0xD30765D153EF5C76 | Since: 1207 | API-Set: unknown
 */
export function isValid(itemset: any): boolean {
    return IsItemsetValid(itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0xC5BAA432B429DC24 | Since: 1207 | API-Set: unknown
 */
export function removeFrom(entity: number | IEntity, itemset: any): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    RemoveFromItemset(_entity, itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0x20A4BF0E09BEE146 | Since: 1207 | API-Set: unknown
 */
export function clear(itemset: any): void {
    ClearItemset(itemset);
}

