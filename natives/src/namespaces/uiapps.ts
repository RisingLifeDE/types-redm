import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0xE555EC27D65EDE80 | Since: 1207
 */
export function canLaunchUiappByHash(appNameHash: number | string): boolean {
    if (typeof appNameHash === 'string') appNameHash = GetHashKey(appNameHash)
    return CanLaunchUiappByHash(appNameHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x16F47D434B6086BF | Since: 1207
 */
export function canLaunchUiappByHashWithEntry(appNameHash: number | string, entryHash: number | string): boolean {
    if (typeof appNameHash === 'string') appNameHash = GetHashKey(appNameHash)
    if (typeof entryHash === 'string') entryHash = GetHashKey(entryHash)
    return CanLaunchUiappByHashWithEntry(appNameHash, entryHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xAC959AB99AAF3D9F | Since: 1207
 */
export function isAnyUiappActive(): boolean {
    return IsAnyUiappActive();
}

/**
 * No comment provided
 * 
 * Hash: 0xDB30BEC7A7A5CBD3 | Since: 1207
 */
export function isAnyUiappRunning(): boolean {
    return IsAnyUiappRunning();
}

/**
 * No comment provided
 * 
 * Hash: 0x25B7A0206BDFAC76 | Since: 1207
 */
export function isUiappActiveByHash(appNameHash: number | string): boolean {
    if (typeof appNameHash === 'string') appNameHash = GetHashKey(appNameHash)
    return IsUiappActiveByHash(appNameHash);
}

/**
 * Returns true if the Native UI Application is running.
 * 
 * Hash: 0xDE4A9B35D028979F | Since: 1232
 */
export function isUiappRunning(): [boolean, string] {
    return IsUiappRunning();
}

/**
 * Checks to see if the specified UI app is currently running by its hash.
 * 
 * Hash: 0x4E511D093A86AD49 | Since: 1207
 */
export function isUiappRunningByHash(appNameHash: number | string): boolean {
    if (typeof appNameHash === 'string') appNameHash = GetHashKey(appNameHash)
    return IsUiappRunningByHash(appNameHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x42095B886D30DE66 | Since: 1232
 */
export function isUiappTransitioningByHash(appNameHash: number | string): boolean {
    if (typeof appNameHash === 'string') appNameHash = GetHashKey(appNameHash)
    return IsUiappTransitioningByHash(appNameHash);
}

/**
 * Lauches the specified UI app by its hash.
 * 
 * Hash: 0xC8FC7F4E4CF4F581 | Since: 1207
 */
export function launchUiappByHash(appNameHash: number | string): number {
    if (typeof appNameHash === 'string') appNameHash = GetHashKey(appNameHash)
    return LaunchUiappByHash(appNameHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xC1BCF31E975B3195 | Since: 1207
 */
export function launchUiappByHashWithEntry(appNameHash: number | string, entryHash: number | string): number {
    if (typeof appNameHash === 'string') appNameHash = GetHashKey(appNameHash)
    if (typeof entryHash === 'string') entryHash = GetHashKey(entryHash)
    return LaunchUiappByHashWithEntry(appNameHash, entryHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x7B2027BAC5C8EC89 | Since: 1207
 */
export function launchUiappWithEntry(): [number, string, string] {
    return LaunchUiappWithEntry();
}

/**
 * No comment provided
 * 
 * Hash: 0x7689CD255655BFD7 | Since: 1207
 */
export function requestUiappTransitionByHash(appNameHash: number | string, transitionHash: number | string): boolean {
    if (typeof appNameHash === 'string') appNameHash = GetHashKey(appNameHash)
    if (typeof transitionHash === 'string') transitionHash = GetHashKey(transitionHash)
    return RequestUiappTransitionByHash(appNameHash, transitionHash);
}

/**
 * Closes All UI Apps with transition
 * 
 * Hash: 0xAD7B70F7230C5A12 | Since: 1207
 */
export function closeAll(): void {
    CloseAllUiapps();
}

/**
 * Immediately Closes all Native UI Apps
 * 
 * Hash: 0x12769EEB8DBD7A7B | Since: 1207
 */
export function closeAllImmediate(): void {
    CloseAllUiappsImmediate();
}

/**
 * No comment provided
 * 
 * Hash: 0x818C6CA9B659E8EC | Since: 1207
 */
export function closeUiapp(): string {
    return CloseUiapp();
}

/**
 * Closes Ui App by hash
 * 
 * Hash: 0x2FF10C9C3F92277E | Since: 1207
 */
export function closeUiappByHash(appNameHash: number | string): void {
    if (typeof appNameHash === 'string') appNameHash = GetHashKey(appNameHash)
    CloseUiappByHash(appNameHash);
}

/**
 * Immediately closes the specified UI app by its hash.
 * 
 * Hash: 0x04428420A248A354 | Since: 1207
 */
export function closeUiappByHashImmediate(appNameHash: number | string): void {
    if (typeof appNameHash === 'string') appNameHash = GetHashKey(appNameHash)
    CloseUiappByHashImmediate(appNameHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x3015635426D1B17C | Since: 1207
 */
export function closeUiappImmediate(): string {
    return CloseUiappImmediate();
}

/**
 * No comment provided
 * 
 * Hash: 0x96FD694FE5BE55DC | Since: 1207
 */
export function getUiappCurrentActivityByHash(appNameHash: number | string): number {
    if (typeof appNameHash === 'string') appNameHash = GetHashKey(appNameHash)
    return GetUiappCurrentActivityByHash(appNameHash);
}

