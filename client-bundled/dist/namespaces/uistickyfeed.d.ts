/**
 * No comment provided
 *
 * Hash: 0x00A15B94CBA4F76F | Since: 1207 | API-Set: unknown
 */
export declare function clearMessage(msgId: number): void;
/**
 * Example: https://pastebin.com/JygJShNU
 *
 * Hash: 0x815C4065AE6E6071 | Since: 1207 | API-Set: unknown
 */
export declare function createDeathFailMessage(): [number, any, any];
/**
 * Example: https://pastebin.com/EJD7ytnz
 *
 * Hash: 0x9F2CC2439A04E7BA | Since: 1207 | API-Set: unknown
 */
export declare function createErrorMessage(): [number, any, any];
/**
 * Example: https://pastebin.com/6mLtee2S
 *
 * Hash: 0x339E16B41780FC35 | Since: 1207 | API-Set: unknown
 */
export declare function createWarningMessage(): [number, any, any];
/**
 * Returns state of sticky feed message, see 0x59FA676177DBE4C9
 *
 * Hash: 0x07954320D77F6A3D | Since: 1207 | API-Set: unknown
 */
export declare function getMessageState(msgId: number): number;
/**
 * No comment provided
 *
 * Hash: 0xF8806EC3FF840FDC | Since: 1207 | API-Set: unknown
 */
export declare function isAlertScreenActive(): boolean;
/**
 * stickyFeedChannel: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eUIStickyFeedChannel
 *
 * Hash: 0xC5C395C60B542A3C | Since: 1207 | API-Set: unknown
 */
export declare function isChannelActive(stickyFeedChannel: number): boolean;
/**
 * Seems to only update _UI_STICKY_FEED_CREATE_ERROR_MESSAGE(0x9F2CC2439A04E7BA) and _UI_STICKY_FEED_CREATE_DEATH_FAIL_MESSAGE(0x815C4065AE6E6071) message.
 * Example: https://pastebin.com/nDrJyWq2
 *
 * Hash: 0xBC6F454E310124DA | Since: 1207 | API-Set: unknown
 */
export declare function updateMessage(msgId: number): any;
