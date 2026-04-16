/**
 * Sets a clickable button to be displayed in a player's Discord rich presence.
 *
 * Hash: 0xCBBC3FAC
 */
export function setAction(index, label, url) {
    SetAction(index, label, url);
}
/**
 * This native sets the app id for the discord rich presence implementation.
 *
 * Hash: 0x6A02254D
 */
export function setAppId(appId) {
    SetAppId(appId);
}
/**
 * This native sets the image asset for the discord rich presence implementation.
 *
 * Hash: 0x53DFD530
 */
export function setAsset(assetName) {
    SetAsset(assetName);
}
/**
 * This native sets the small image asset for the discord rich presence implementation.
 *
 * Hash: 0xF61D04C4
 */
export function setAssetSmall(assetName) {
    SetAssetSmall(assetName);
}
/**
 * This native sets the hover text of the small image asset for the discord rich presence implementation.
 *
 * Hash: 0x35E62B6A
 */
export function setAssetSmallText(text) {
    SetAssetSmallText(text);
}
/**
 * This native sets the hover text of the image asset for the discord rich presence implementation.
 *
 * Hash: 0xB029D2FA
 */
export function setAssetText(text) {
    SetAssetText(text);
}
/**
 * Sets the player's rich presence detail state for social platform providers to a specified string.
 *
 * Hash: 0x7BDCBD45
 */
export function setDetailState(presenceState) {
    SetDetailState(presenceState);
}
