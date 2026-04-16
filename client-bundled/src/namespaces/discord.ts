import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * Sets a clickable button to be displayed in a player's Discord rich presence.
 * 
 * Hash: 0xCBBC3FAC | Since: unknown | API-Set: client
 */
export function setAction(index: number, label: string, url: string): void {
    SetDiscordRichPresenceAction(index, label, url);
}

/**
 * This native sets the app id for the discord rich presence implementation.
 * 
 * Hash: 0x6A02254D | Since: unknown | API-Set: client
 */
export function setAppId(appId: string): void {
    SetDiscordAppId(appId);
}

/**
 * This native sets the image asset for the discord rich presence implementation.
 * 
 * Hash: 0x53DFD530 | Since: unknown | API-Set: client
 */
export function setAsset(assetName: string): void {
    SetDiscordRichPresenceAsset(assetName);
}

/**
 * This native sets the small image asset for the discord rich presence implementation.
 * 
 * Hash: 0xF61D04C4 | Since: unknown | API-Set: client
 */
export function setAssetSmall(assetName: string): void {
    SetDiscordRichPresenceAssetSmall(assetName);
}

/**
 * This native sets the hover text of the small image asset for the discord rich presence implementation.
 * 
 * Hash: 0x35E62B6A | Since: unknown | API-Set: client
 */
export function setAssetSmallText(text: string): void {
    SetDiscordRichPresenceAssetSmallText(text);
}

/**
 * This native sets the hover text of the image asset for the discord rich presence implementation.
 * 
 * Hash: 0xB029D2FA | Since: unknown | API-Set: client
 */
export function setAssetText(text: string): void {
    SetDiscordRichPresenceAssetText(text);
}

/**
 * Sets the player's rich presence detail state for social platform providers to a specified string.
 * 
 * Hash: 0x7BDCBD45 | Since: unknown | API-Set: client
 */
export function setDetailState(presenceState: string): void {
    SetRichPresence(presenceState);
}

