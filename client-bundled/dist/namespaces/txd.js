/**
 * No comment provided
 *
 * Hash: 0x7332461FC59EB7EC | Since: 1207 | API-Set: unknown
 */
export function doesStreamedTextureDictExist() {
    return DoesStreamedTextureDictExist();
}
/**
 * No comment provided
 *
 * Hash: 0xBA0163B277C2D2D0 | Since: 1207 | API-Set: unknown
 */
export function doesStreamedExist(txdHash) {
    if (typeof txdHash === 'string')
        txdHash = GetHashKey(txdHash);
    return DoesStreamedTxdExist(txdHash);
}
/**
 * No comment provided
 *
 * Hash: 0x54D6900929CCF162 | Since: 1207 | API-Set: unknown
 */
export function hasStreamedTextureDictLoaded() {
    return HasStreamedTextureDictLoaded();
}
/**
 * No comment provided
 *
 * Hash: 0xBE72591D1509FFE4 | Since: 1207 | API-Set: unknown
 */
export function hasStreamedLoaded(txdHash) {
    if (typeof txdHash === 'string')
        txdHash = GetHashKey(txdHash);
    return HasStreamedTxdLoaded(txdHash);
}
/**
 * No comment provided
 *
 * Hash: 0xC1BA29DF5631B0F8 | Since: 1207 | API-Set: unknown
 */
export function requestStreamedTextureDict() {
    return RequestStreamedTextureDict(false);
}
/**
 * No comment provided
 *
 * Hash: 0xDB1BD07FB464584D | Since: 1207 | API-Set: unknown
 */
export function requestStreamed(txdHash) {
    if (typeof txdHash === 'string')
        txdHash = GetHashKey(txdHash);
    RequestStreamedTxd(txdHash, false);
}
/**
 * No comment provided
 *
 * Hash: 0x4ACA10A91F66F1E2 | Since: 1207 | API-Set: unknown
 */
export function setStreamedTextureDictAsNoLongerNeeded() {
    return SetStreamedTextureDictAsNoLongerNeeded();
}
/**
 * No comment provided
 *
 * Hash: 0x8232F37DF762ACB2 | Since: 1207 | API-Set: unknown
 */
export function setStreamedAsNoLongerNeeded(txdHash) {
    if (typeof txdHash === 'string')
        txdHash = GetHashKey(txdHash);
    SetStreamedTxdAsNoLongerNeeded(txdHash);
}
