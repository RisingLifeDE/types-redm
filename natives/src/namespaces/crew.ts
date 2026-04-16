import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x1F471B79ACC90BEF | Since: 1207
 */
export function networkClanGetLocalMembershipsCount(): number {
    return NetworkClanGetLocalMembershipsCount();
}

/**
 * No comment provided
 * 
 * Hash: 0x48DE78AF2C8885B8 | Since: 1207
 */
export function networkClanGetMembershipDesc(): [boolean, any] {
    return NetworkClanGetMembershipDesc(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xA134777FF7F33331 | Since: 1207
 */
export function networkClanIsEmblemReady(): [boolean, any] {
    return NetworkClanIsEmblemReady(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEEE6EACBE8874FBA | Since: 1207
 */
export function networkClanPlayerGetDesc(bufferSize: number): [boolean, any, any] {
    return NetworkClanPlayerGetDesc(bufferSize);
}

/**
 * No comment provided
 * 
 * Hash: 0xB124B57F571D8F18 | Since: 1207
 */
export function networkClanPlayerIsActive(): [boolean, any] {
    return NetworkClanPlayerIsActive();
}

/**
 * No comment provided
 * 
 * Hash: 0x113E6E3E50E286B0 | Since: 1207
 */
export function networkClanReleaseEmblem(): void {
    NetworkClanReleaseEmblem(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x13518FF1C6B28938 | Since: 1207
 */
export function networkClanRequestEmblem(): boolean {
    return NetworkClanRequestEmblem(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x579CCED0265D4896 | Since: 1207
 */
export function networkClanServiceIsValid(): boolean {
    return NetworkClanServiceIsValid();
}

/**
 * No comment provided
 * 
 * Hash: 0xE532D6811B3A4D2A | Since: 1207
 */
export function networkFindGamersIn(crewId: number): boolean {
    return NetworkFindGamersInCrew(crewId);
}

/**
 * No comment provided
 * 
 * Hash: 0x9AA46BADAD0E27ED | Since: 1207
 */
export function networkGetPrimaryClanDataClear(): any {
    return NetworkGetPrimaryClanDataClear();
}

/**
 * No comment provided
 * 
 * Hash: 0xC080FF658B2E41DA | Since: 1207
 */
export function networkGetPrimaryClanDataNew(): [boolean, any, any] {
    return NetworkGetPrimaryClanDataNew();
}

/**
 * No comment provided
 * 
 * Hash: 0xB5074DB804E28CE7 | Since: 1207
 */
export function networkGetPrimaryClanDataPending(): any {
    return NetworkGetPrimaryClanDataPending();
}

/**
 * No comment provided
 * 
 * Hash: 0xCE86D8191B762107 | Since: 1207
 */
export function networkGetPrimaryClanDataStart(): [boolean, any] {
    return NetworkGetPrimaryClanDataStart(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5B4F04F19376A0BA | Since: 1207
 */
export function networkGetPrimaryClanDataSuccess(): any {
    return NetworkGetPrimaryClanDataSuccess();
}

/**
 * No comment provided
 * 
 * Hash: 0x58D378AF2C8765B7 | Since: 1207
 */
export function _0x58D378AF2C8765B7(): boolean {
    return Citizen.invokeNative('0x58D378AF2C8765B7', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8E2143144B8E188D | Since: 1207
 */
export function networkAcceptClanInvite(crewInviteIndex: number): boolean {
    return NetworkAcceptClanInvite(crewInviteIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xC685B014CE3D988B | Since: 1207
 */
export function networkClanInvitePlayer(): boolean {
    return NetworkClanInvitePlayer(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC080FF658B2E51DA | Since: 1207
 */
export function networkClanSetActive(): any {
    return NetworkClanSetActive(undefined);
}

