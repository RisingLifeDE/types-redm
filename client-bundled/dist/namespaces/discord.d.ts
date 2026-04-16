/**
 * Sets a clickable button to be displayed in a player's Discord rich presence.
 *
 * Hash: 0xCBBC3FAC | Since: unknown | API-Set: client
 */
export declare function setAction(index: number, label: string, url: string): void;
/**
 * This native sets the app id for the discord rich presence implementation.
 *
 * Hash: 0x6A02254D | Since: unknown | API-Set: client
 */
export declare function setAppId(appId: string): void;
/**
 * This native sets the image asset for the discord rich presence implementation.
 *
 * Hash: 0x53DFD530 | Since: unknown | API-Set: client
 */
export declare function setAsset(assetName: string): void;
/**
 * This native sets the small image asset for the discord rich presence implementation.
 *
 * Hash: 0xF61D04C4 | Since: unknown | API-Set: client
 */
export declare function setAssetSmall(assetName: string): void;
/**
 * This native sets the hover text of the small image asset for the discord rich presence implementation.
 *
 * Hash: 0x35E62B6A | Since: unknown | API-Set: client
 */
export declare function setAssetSmallText(text: string): void;
/**
 * This native sets the hover text of the image asset for the discord rich presence implementation.
 *
 * Hash: 0xB029D2FA | Since: unknown | API-Set: client
 */
export declare function setAssetText(text: string): void;
/**
 * Sets the player's rich presence detail state for social platform providers to a specified string.
 *
 * Hash: 0x7BDCBD45 | Since: unknown | API-Set: client
 */
export declare function setDetailState(presenceState: string): void;
