/**
 * No comment provided
 *
 * Hash: 0x3138582E0A13BFAB | Since: 1207 | API-Set: unknown
 */
export function getTooltipText(hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    return UipinningGetTooltipText(hash);
}
