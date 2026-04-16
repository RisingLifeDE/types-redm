/**
 * No comment provided
 *
 * Hash: 0xC4B660C7B6040E75 | Since: 1207
 */
export function isUnlocked(unlockHash) {
    if (typeof unlockHash === 'string')
        unlockHash = GetHashKey(unlockHash);
    return UnlockIsUnlocked(unlockHash);
}
/**
 * No comment provided
 *
 * Hash: 0x8588A14B75AF096B | Since: 1207
 */
export function isVisible(unlockHash) {
    if (typeof unlockHash === 'string')
        unlockHash = GetHashKey(unlockHash);
    return UnlockIsVisible(unlockHash);
}
/**
 * No comment provided
 *
 * Hash: 0x1B7C5ADA8A6910A0 | Since: 1207
 */
export function setUnlocked(unlockHash, toggle) {
    if (typeof unlockHash === 'string')
        unlockHash = GetHashKey(unlockHash);
    UnlockSetUnlocked(unlockHash, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x46B901A8ECDB5A61 | Since: 1207
 */
export function setVisible(unlockHash, toggle) {
    if (typeof unlockHash === 'string')
        unlockHash = GetHashKey(unlockHash);
    UnlockSetVisible(unlockHash, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x7C1C2062CFAD06FE | Since: 1207
 */
export function getItemRoleUnlockInfo(unlockHash) {
    if (typeof unlockHash === 'string')
        unlockHash = GetHashKey(unlockHash);
    return UnlockGetItemRoleUnlockInfo(unlockHash);
}
/**
 * No comment provided
 *
 * Hash: 0x66BF197E066050DE | Since: 1207
 */
export function isLootable(unlockHash) {
    if (typeof unlockHash === 'string')
        unlockHash = GetHashKey(unlockHash);
    return UnlockIsLootable(unlockHash);
}
/**
 * No comment provided
 *
 * Hash: 0x644166BA7AA49DEA | Since: 1207
 */
export function isNew(unlockHash) {
    if (typeof unlockHash === 'string')
        unlockHash = GetHashKey(unlockHash);
    return UnlockIsNew(unlockHash);
}
/**
 * No comment provided
 *
 * Hash: 0x6B6369647F26F09F | Since: 1207
 */
export function isUnlockFlagSet(unlockHash, flag) {
    if (typeof unlockHash === 'string')
        unlockHash = GetHashKey(unlockHash);
    return UnlockIsUnlockFlagSet(unlockHash, flag);
}
/**
 * No comment provided
 *
 * Hash: 0xA6D79C7AEF870A99 | Since: 1207
 */
export function setNew(unlockHash, toggle) {
    if (typeof unlockHash === 'string')
        unlockHash = GetHashKey(unlockHash);
    UnlockSetNew(unlockHash, toggle);
}
