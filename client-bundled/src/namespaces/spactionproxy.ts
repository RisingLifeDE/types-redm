import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x1F471B79ACC98BEF | Since: 1207 | API-Set: unknown
 */
export function getNextPendingBuyAction(): [boolean, any] {
    return SpactionproxyGetNextPendingBuyAction();
}

/**
 * No comment provided
 * 
 * Hash: 0x1F471B79ACC97BEF | Since: 1207 | API-Set: unknown
 */
export function getNextPendingCraftingAction(): [boolean, any] {
    return SpactionproxyGetNextPendingCraftingAction();
}

/**
 * No comment provided
 * 
 * Hash: 0x1F471B79ACC91BEC | Since: 1207 | API-Set: unknown
 */
export function managerIsFailed(): boolean {
    return SpactionproxyManagerIsFailed();
}

/**
 * No comment provided
 * 
 * Hash: 0x1F471B79ACC91BED | Since: 1207 | API-Set: unknown
 */
export function managerIsReady(): boolean {
    return SpactionproxyManagerIsReady();
}

/**
 * No comment provided
 * 
 * Hash: 0x1F471B79ACC94BEF | Since: 1207 | API-Set: unknown
 */
export function processAction(): boolean {
    return SpactionproxyProcessAction(undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x1F471B79ACC91BEE | Since: 1207 | API-Set: unknown
 */
export function startManager(): boolean {
    return SpactionproxyStartManager();
}

