/**
 * No comment provided
 *
 * Hash: 0xE555EC27D65EDE80 | Since: 1207 | API-Set: unknown
 */
export declare function canLaunchUiappByHash(appNameHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x16F47D434B6086BF | Since: 1207 | API-Set: unknown
 */
export declare function canLaunchUiappByHashWithEntry(appNameHash: number | string, entryHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAC959AB99AAF3D9F | Since: 1207 | API-Set: unknown
 */
export declare function isAnyUiappActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDB30BEC7A7A5CBD3 | Since: 1207 | API-Set: unknown
 */
export declare function isAnyUiappRunning(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x25B7A0206BDFAC76 | Since: 1207 | API-Set: unknown
 */
export declare function isUiappActiveByHash(appNameHash: number | string): boolean;
/**
 * Returns true if the Native UI Application is running.
 *
 * Hash: 0xDE4A9B35D028979F | Since: 1232 | API-Set: unknown
 */
export declare function isUiappRunning(): [boolean, string];
/**
 * Checks to see if the specified UI app is currently running by its hash.
 *
 * Hash: 0x4E511D093A86AD49 | Since: 1207 | API-Set: unknown
 */
export declare function isUiappRunningByHash(appNameHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x42095B886D30DE66 | Since: 1232 | API-Set: unknown
 */
export declare function isUiappTransitioningByHash(appNameHash: number | string): boolean;
/**
 * Lauches the specified UI app by its hash.
 *
 * Hash: 0xC8FC7F4E4CF4F581 | Since: 1207 | API-Set: unknown
 */
export declare function launchUiappByHash(appNameHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xC1BCF31E975B3195 | Since: 1207 | API-Set: unknown
 */
export declare function launchUiappByHashWithEntry(appNameHash: number | string, entryHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x7B2027BAC5C8EC89 | Since: 1207 | API-Set: unknown
 */
export declare function launchUiappWithEntry(): [number, string, string];
/**
 * No comment provided
 *
 * Hash: 0x7689CD255655BFD7 | Since: 1207 | API-Set: unknown
 */
export declare function requestUiappTransitionByHash(appNameHash: number | string, transitionHash: number | string): boolean;
/**
 * Closes All UI Apps with transition
 *
 * Hash: 0xAD7B70F7230C5A12 | Since: 1207 | API-Set: unknown
 */
export declare function closeAll(): void;
/**
 * Immediately Closes all Native UI Apps
 *
 * Hash: 0x12769EEB8DBD7A7B | Since: 1207 | API-Set: unknown
 */
export declare function closeAllImmediate(): void;
/**
 * No comment provided
 *
 * Hash: 0x818C6CA9B659E8EC | Since: 1207 | API-Set: unknown
 */
export declare function closeUiapp(): string;
/**
 * Closes Ui App by hash
 *
 * Hash: 0x2FF10C9C3F92277E | Since: 1207 | API-Set: unknown
 */
export declare function closeUiappByHash(appNameHash: number | string): void;
/**
 * Immediately closes the specified UI app by its hash.
 *
 * Hash: 0x04428420A248A354 | Since: 1207 | API-Set: unknown
 */
export declare function closeUiappByHashImmediate(appNameHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x3015635426D1B17C | Since: 1207 | API-Set: unknown
 */
export declare function closeUiappImmediate(): string;
/**
 * No comment provided
 *
 * Hash: 0x96FD694FE5BE55DC | Since: 1207 | API-Set: unknown
 */
export declare function getUiappCurrentActivityByHash(appNameHash: number | string): number;
