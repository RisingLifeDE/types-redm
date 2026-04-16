import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * feedChannel: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eUIFeedChannel
 * 
 * Hash: 0xDD1232B332CBB9E7 | Since: 1207
 */
export function clearChannel(feedChannel: number): void {
    UiFeedClearChannel(feedChannel, false, false);
}

/**
 * feedChannel: see UI_FEED_CLEAR_CHANNEL
 * Returns feedMessage
 * 
 * Hash: 0xC17F69E1418CD11F | Since: 1207
 */
export function getCurrentMessage(feedChannel: number): number {
    return UiFeedGetCurrentMessage(feedChannel);
}

/**
 * Only used in R* SP Script beat_animal_attack
 * Returns feedMessage
 * 
 * Hash: 0x0FD07141AD048AAE | Since: 1207
 */
export function _0x0FD07141AD048AAE(): [number, any] {
    return Citizen.invokeNative('0x0FD07141AD048AAE', false);
}

/**
 * Returns feedMessage
 * 
 * Hash: 0x4E88A65968A55C78 | Since: 1207
 */
export function _0x4E88A65968A55C78(): [number, any] {
    return Citizen.invokeNative('0x4E88A65968A55C78', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x6D85126F6CCF02C9 | Since: 1207
 */
export function _0x6D85126F6CCF02C9(feedChannel: number): void {
    Citizen.invokeNative('0x6D85126F6CCF02C9', feedChannel, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xB7223B91CD6B7E07 | Since: 1207
 */
export function _0xB7223B91CD6B7E07(feedChannel: number): boolean {
    return Citizen.invokeNative('0xB7223B91CD6B7E07', feedChannel);
}

/**
 * Hides Toast Notifications
 * 
 * Hash: 0x6035E8FBCA32AC5E | Since: 1207
 */
export function clearAllChannels(): void {
    UiFeedClearAllChannels();
}

/**
 * Clears help text
 * 
 * Hash: 0x2F901291EF177B02 | Since: 1207
 */
export function clearHelpTextFeed(feedMessage: number): void {
    UiFeedClearHelpTextFeed(feedMessage, false);
}

/**
 * Returns messageState, see https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eUIMessageState
 * 
 * Hash: 0x59FA676177DBE4C9 | Since: 1207
 */
export function getMessageState(feedMessage: number): number {
    return UiFeedGetMessageState(feedMessage);
}

/**
 * notification you need dataview
 * 
 * Hash: 0xAFF5BE9BA496CE40 | Since: 1207
 */
export function postCollectorToast(collectableCategory: number | string): [number, any, any] {
    if (typeof collectableCategory === 'string') collectableCategory = GetHashKey(collectableCategory)
    return Citizen.invokeNative('0xAFF5BE9BA496CE40', false, false, collectableCategory);
}

/**
 * Display text on right of the screen, Example : https://pastebin.com/n1YmNe25
 * 
 * Hash: 0xB2920B9760F0F36B | Since: 1207
 */
export function postFeedTicker(): [number, any, any] {
    return UiFeedPostFeedTicker(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x8D1249BD28791878 | Since: 1207
 */
export function postGameUpdateShard(): [number, any, any] {
    return UiFeedPostGameUpdateShard(false);
}

/**
 * Example : https://pastebin.com/GvdBp8Dh
 * 
 * Hash: 0x049D5C615BD38BAD | Since: 1207
 */
export function postHelpText(): [number, any, any] {
    return UiFeedPostHelpText(false);
}

/**
 * notification you need dataview
 * 
 * Hash: 0x18D6869FBFFEC0F8 | Since: 1207
 */
export function postInteractiveToast(): [number, any, any] {
    return Citizen.invokeNative('0x18D6869FBFFEC0F8', false, false);
}

/**
 * Example : https://pastebin.com/h1YzycuR
 * 
 * Hash: 0xD05590C1AB38F068 | Since: 1207
 */
export function postLocationShard(): [number, any, any] {
    return UiFeedPostLocationShard(false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x2024F4F333095FB1 | Since: 1207
 */
export function postMissionName(): [number, any, any] {
    return UiFeedPostMissionName(false);
}

/**
 * Example : https://pastebin.com/13tuRa63
 * 
 * Hash: 0xCEDBF17EFCC0E4A4 | Since: 1207
 */
export function postObjective(): [number, any, any] {
    return UiFeedPostObjective(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x860DDFE97CC94DF0 | Since: 1207
 */
export function postOneTextShard(): [number, any, any] {
    return UiFeedPostOneTextShard(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x3F9FDDBA79117C69 | Since: 1207
 */
export function postRankupToast(): [number, any, any] {
    return UiFeedPostRankupToast(0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x893128CDB4B81FBB | Since: 1207
 */
export function postReticleMessage(): [number, any, any] {
    return UiFeedPostReticleMessage(false);
}

/**
 * Example : https://pastebin.com/kAtEMQTD
 * 
 * Hash: 0xC927890AA64E9661 | Since: 1207
 */
export function postSampleNotification(): [number, any, any] {
    return UiFeedPostSampleNotification(0, 0);
}

/**
 * Example : https://pastebin.com/YZMBkAmW
 * 
 * Hash: 0x26E87218390E6729 | Since: 1207
 */
export function postSampleToast(): [number, any, any] {
    return UiFeedPostSampleToast(false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xB249EBCB30DD88E0 | Since: 1207
 */
export function postSampleToastRight(): [number, any, any] {
    return UiFeedPostSampleToastRight(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x38838A646FB30AAE | Since: 1311
 */
export function postSampleToastWithAppLink(): [number, any, any] {
    return UiFeedPostSampleToastWithAppLink(false, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x02BCC0FE9EBA3529 | Since: 1207
 */
export function postThreeTextShard(): [number, any, any] {
    return UiFeedPostThreeTextShard(false, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xA6F4216AB10EB08E | Since: 1207
 */
export function postTwoTextShard(): [number, any, any] {
    return UiFeedPostTwoTextShard(false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC48152BC6B3E821C | Since: 1207
 */
export function postVoiceChatFeed(): [number, any, any] {
    return UiFeedPostVoiceChatFeed(false);
}

