/**
 * No comment provided
 *
 * Hash: 0x71D4BF5890659B0C | Since: 1207 | API-Set: unknown
 */
export function getIsLoadingScreenActive() {
    return GetIsLoadingScreenActive();
}
/**
 * No comment provided
 *
 * Hash: 0x2763DC12BBE2BB6F | Since: 1207 | API-Set: unknown
 */
export function isPresent(dlcHash) {
    if (typeof dlcHash === 'string')
        dlcHash = GetHashKey(dlcHash);
    return IsDlcPresent(dlcHash);
}
/**
 * No comment provided
 *
 * Hash: 0x1DB9D61E505AE3FC | Since: 1207 | API-Set: unknown
 */
export function getSpecialEditionCashCampBonusEnabled() {
    return GetSpecialEditionCashCampBonusEnabled();
}
/**
 * No comment provided
 *
 * Hash: 0xA16B4FBA7887D7BA | Since: 1207 | API-Set: unknown
 */
export function getSpecialEditionCoreStatsBonusEnabled() {
    return GetSpecialEditionCoreStatsBonusEnabled();
}
