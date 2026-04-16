/**
 * No comment provided
 *
 * Hash: 0xE555EC27D65EDE80 | Since: 1207 | API-Set: unknown
 */
export function canLaunchUiappByHash(appNameHash) {
    if (typeof appNameHash === 'string')
        appNameHash = GetHashKey(appNameHash);
    return CanLaunchUiappByHash(appNameHash);
}
/**
 * No comment provided
 *
 * Hash: 0x16F47D434B6086BF | Since: 1207 | API-Set: unknown
 */
export function canLaunchUiappByHashWithEntry(appNameHash, entryHash) {
    if (typeof appNameHash === 'string')
        appNameHash = GetHashKey(appNameHash);
    if (typeof entryHash === 'string')
        entryHash = GetHashKey(entryHash);
    return CanLaunchUiappByHashWithEntry(appNameHash, entryHash);
}
/**
 * No comment provided
 *
 * Hash: 0xAC959AB99AAF3D9F | Since: 1207 | API-Set: unknown
 */
export function isAnyUiappActive() {
    return IsAnyUiappActive();
}
/**
 * No comment provided
 *
 * Hash: 0xDB30BEC7A7A5CBD3 | Since: 1207 | API-Set: unknown
 */
export function isAnyUiappRunning() {
    return IsAnyUiappRunning();
}
/**
 * No comment provided
 *
 * Hash: 0x25B7A0206BDFAC76 | Since: 1207 | API-Set: unknown
 */
export function isUiappActiveByHash(appNameHash) {
    if (typeof appNameHash === 'string')
        appNameHash = GetHashKey(appNameHash);
    return IsUiappActiveByHash(appNameHash);
}
/**
 * Returns true if the Native UI Application is running.
 *
 * Hash: 0xDE4A9B35D028979F | Since: 1232 | API-Set: unknown
 */
export function isUiappRunning() {
    return IsUiappRunning();
}
/**
 * Checks to see if the specified UI app is currently running by its hash.
 *
 * Hash: 0x4E511D093A86AD49 | Since: 1207 | API-Set: unknown
 */
export function isUiappRunningByHash(appNameHash) {
    if (typeof appNameHash === 'string')
        appNameHash = GetHashKey(appNameHash);
    return IsUiappRunningByHash(appNameHash);
}
/**
 * No comment provided
 *
 * Hash: 0x42095B886D30DE66 | Since: 1232 | API-Set: unknown
 */
export function isUiappTransitioningByHash(appNameHash) {
    if (typeof appNameHash === 'string')
        appNameHash = GetHashKey(appNameHash);
    return IsUiappTransitioningByHash(appNameHash);
}
/**
 * Lauches the specified UI app by its hash.
 *
 * Hash: 0xC8FC7F4E4CF4F581 | Since: 1207 | API-Set: unknown
 */
export function launchUiappByHash(appNameHash) {
    if (typeof appNameHash === 'string')
        appNameHash = GetHashKey(appNameHash);
    return LaunchUiappByHash(appNameHash);
}
/**
 * No comment provided
 *
 * Hash: 0xC1BCF31E975B3195 | Since: 1207 | API-Set: unknown
 */
export function launchUiappByHashWithEntry(appNameHash, entryHash) {
    if (typeof appNameHash === 'string')
        appNameHash = GetHashKey(appNameHash);
    if (typeof entryHash === 'string')
        entryHash = GetHashKey(entryHash);
    return LaunchUiappByHashWithEntry(appNameHash, entryHash);
}
/**
 * No comment provided
 *
 * Hash: 0x7B2027BAC5C8EC89 | Since: 1207 | API-Set: unknown
 */
export function launchUiappWithEntry() {
    return LaunchUiappWithEntry();
}
/**
 * No comment provided
 *
 * Hash: 0x7689CD255655BFD7 | Since: 1207 | API-Set: unknown
 */
export function requestUiappTransitionByHash(appNameHash, transitionHash) {
    if (typeof appNameHash === 'string')
        appNameHash = GetHashKey(appNameHash);
    if (typeof transitionHash === 'string')
        transitionHash = GetHashKey(transitionHash);
    return RequestUiappTransitionByHash(appNameHash, transitionHash);
}
/**
 * Closes All UI Apps with transition
 *
 * Hash: 0xAD7B70F7230C5A12 | Since: 1207 | API-Set: unknown
 */
export function closeAll() {
    CloseAllUiapps();
}
/**
 * Immediately Closes all Native UI Apps
 *
 * Hash: 0x12769EEB8DBD7A7B | Since: 1207 | API-Set: unknown
 */
export function closeAllImmediate() {
    CloseAllUiappsImmediate();
}
/**
 * No comment provided
 *
 * Hash: 0x818C6CA9B659E8EC | Since: 1207 | API-Set: unknown
 */
export function closeUiapp() {
    return CloseUiapp();
}
/**
 * Closes Ui App by hash
 *
 * Hash: 0x2FF10C9C3F92277E | Since: 1207 | API-Set: unknown
 */
export function closeUiappByHash(appNameHash) {
    if (typeof appNameHash === 'string')
        appNameHash = GetHashKey(appNameHash);
    CloseUiappByHash(appNameHash);
}
/**
 * Immediately closes the specified UI app by its hash.
 *
 * Hash: 0x04428420A248A354 | Since: 1207 | API-Set: unknown
 */
export function closeUiappByHashImmediate(appNameHash) {
    if (typeof appNameHash === 'string')
        appNameHash = GetHashKey(appNameHash);
    CloseUiappByHashImmediate(appNameHash);
}
/**
 * No comment provided
 *
 * Hash: 0x3015635426D1B17C | Since: 1207 | API-Set: unknown
 */
export function closeUiappImmediate() {
    return CloseUiappImmediate();
}
/**
 * No comment provided
 *
 * Hash: 0x96FD694FE5BE55DC | Since: 1207 | API-Set: unknown
 */
export function getUiappCurrentActivityByHash(appNameHash) {
    if (typeof appNameHash === 'string')
        appNameHash = GetHashKey(appNameHash);
    return GetUiappCurrentActivityByHash(appNameHash);
}
