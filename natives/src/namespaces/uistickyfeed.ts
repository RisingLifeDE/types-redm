import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x00A15B94CBA4F76F | Since: 1207
 */
export function clearMessage(msgId: number): void {
    UiStickyFeedClearMessage(msgId);
}

/**
 * Example: https://pastebin.com/JygJShNU
 * 
 * Hash: 0x815C4065AE6E6071 | Since: 1207
 */
export function createDeathFailMessage(): [number, any, any] {
    return UiStickyFeedCreateDeathFailMessage(false);
}

/**
 * Example: https://pastebin.com/EJD7ytnz
 * 
 * Hash: 0x9F2CC2439A04E7BA | Since: 1207
 */
export function createErrorMessage(): [number, any, any] {
    return UiStickyFeedCreateErrorMessage(false);
}

/**
 * Example: https://pastebin.com/6mLtee2S
 * 
 * Hash: 0x339E16B41780FC35 | Since: 1207
 */
export function createWarningMessage(): [number, any, any] {
    return UiStickyFeedCreateWarningMessage(false);
}

/**
 * Returns state of sticky feed message, see 0x59FA676177DBE4C9
 * 
 * Hash: 0x07954320D77F6A3D | Since: 1207
 */
export function getMessageState(msgId: number): number {
    return UiStickyFeedGetMessageState(msgId);
}

/**
 * No comment provided
 * 
 * Hash: 0xF8806EC3FF840FDC | Since: 1207
 */
export function isAlertScreenActive(): boolean {
    return UiStickyFeedIsAlertScreenActive();
}

/**
 * stickyFeedChannel: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eUIStickyFeedChannel
 * 
 * Hash: 0xC5C395C60B542A3C | Since: 1207
 */
export function isChannelActive(stickyFeedChannel: number): boolean {
    return UiStickyFeedIsChannelActive(stickyFeedChannel);
}

/**
 * Seems to only update _UI_STICKY_FEED_CREATE_ERROR_MESSAGE(0x9F2CC2439A04E7BA) and _UI_STICKY_FEED_CREATE_DEATH_FAIL_MESSAGE(0x815C4065AE6E6071) message.
 * Example: https://pastebin.com/nDrJyWq2
 * 
 * Hash: 0xBC6F454E310124DA | Since: 1207
 */
export function updateMessage(msgId: number): any {
    return UiStickyFeedUpdateMessage(msgId, false);
}

