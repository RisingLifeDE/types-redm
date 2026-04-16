import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x901E0DC25080C8B9 | Since: 1207
 */
export function networkGetId(player: number | string | IPlayer): any {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetGangId(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x4BE6C13A45CCA8EC | Since: 1207
 */
export function networkGetLeader(gangId: any): number | string {
    return NetworkGetGangLeader(gangId);
}

/**
 * No comment provided
 * 
 * Hash: 0x149A2751AB66AC02 | Since: 1207
 */
export function networkGetNumMembers(gangId: any): number {
    return NetworkGetNumGangMembers(gangId);
}

/**
 * No comment provided
 * 
 * Hash: 0x0F99F6436528A089 | Since: 1207
 */
export function networkIsActive(gangId: any): boolean {
    return NetworkIsGangActive(gangId);
}

/**
 * No comment provided
 * 
 * Hash: 0xD6F6ACF4392187FB | Since: 1207
 */
export function networkIsIdValid(gangId: any): boolean {
    return NetworkIsGangIdValid(gangId);
}

/**
 * No comment provided
 * 
 * Hash: 0x93A91A351A07360E | Since: 1207
 */
export function networkIsInSession(gangId: any): boolean {
    return NetworkIsGangInSession(gangId);
}

/**
 * No comment provided
 * 
 * Hash: 0x424B17A7DC5C90BC | Since: 1207
 */
export function networkIsLeader(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsGangLeader(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x3F59FE6F37869576 | Since: 1207
 */
export function networkIsInSame(player1: number | string | IPlayer, player2: number | string | IPlayer): boolean {
    const _player1 = player1 instanceof IPlayer ? player1.playerId() : player1;
    const _player2 = player2 instanceof IPlayer ? player2.playerId() : player2;
    return NetworkIsInSameGang(_player1, _player2);
}

/**
 * No comment provided
 * 
 * Hash: 0x0E5C9FB9ED5DFF1C | Since: 1207
 */
export function _0x0E5C9FB9ED5DFF1C(): any {
    return Citizen.invokeNative('0x0E5C9FB9ED5DFF1C', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1F11702DDBD915C6 | Since: 1207
 */
export function _0x1F11702DDBD915C6(): any {
    return Citizen.invokeNative('0x1F11702DDBD915C6', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2F7EB8B6F6AFE79C | Since: 1207
 */
export function _0x2F7EB8B6F6AFE79C(): any {
    return Citizen.invokeNative('0x2F7EB8B6F6AFE79C', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3ADC71A66356D706 | Since: 1207
 */
export function _0x3ADC71A66356D706(): any {
    return Citizen.invokeNative('0x3ADC71A66356D706');
}

/**
 * No comment provided
 * 
 * Hash: 0x48D82C83987E18E4 | Since: 1207
 */
export function _0x48D82C83987E18E4(): any {
    return Citizen.invokeNative('0x48D82C83987E18E4', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x51C5EF47086AA0D7 | Since: 1207
 */
export function _0x51C5EF47086AA0D7(): any {
    return Citizen.invokeNative('0x51C5EF47086AA0D7');
}

/**
 * No comment provided
 * 
 * Hash: 0x53A94294FDDCF98C | Since: 1207
 */
export function _0x53A94294FDDCF98C(): any {
    return Citizen.invokeNative('0x53A94294FDDCF98C', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6102830F764B3DE1 | Since: 1207
 */
export function _0x6102830F764B3DE1(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x6102830F764B3DE1', _player);
}

/**
 * No comment provided
 * 
 * Hash: 0x644E02F24F9D4E98 | Since: 1207
 */
export function _0x644E02F24F9D4E98(): any {
    return Citizen.invokeNative('0x644E02F24F9D4E98', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7933754F260B428A | Since: 1207
 */
export function _0x7933754F260B428A(player: number | string | IPlayer): any {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x7933754F260B428A', _player);
}

/**
 * No comment provided
 * 
 * Hash: 0x7BAA30C9BBE8AEE7 | Since: 1207
 */
export function _0x7BAA30C9BBE8AEE7(): any {
    return Citizen.invokeNative('0x7BAA30C9BBE8AEE7', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA9CEAE8D6637FBAD | Since: 1207
 */
export function _0xA9CEAE8D6637FBAD(): void {
    Citizen.invokeNative('0xA9CEAE8D6637FBAD', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xAD22AB64FA428DF3 | Since: 1207
 */
export function _0xAD22AB64FA428DF3(): void {
    Citizen.invokeNative('0xAD22AB64FA428DF3', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xAFD3599A3CC5637D | Since: 1207
 */
export function _0xAFD3599A3CC5637D(): any {
    return Citizen.invokeNative('0xAFD3599A3CC5637D');
}

/**
 * No comment provided
 * 
 * Hash: 0xB22B1D9F74095382 | Since: 1207
 */
export function _0xB22B1D9F74095382(): void {
    Citizen.invokeNative('0xB22B1D9F74095382', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB38C256498748413 | Since: 1207
 */
export function _0xB38C256498748413(): void {
    Citizen.invokeNative('0xB38C256498748413');
}

/**
 * No comment provided
 * 
 * Hash: 0xC81A9E2C8EFD28D5 | Since: 1207
 */
export function _0xC81A9E2C8EFD28D5(): void {
    Citizen.invokeNative('0xC81A9E2C8EFD28D5', undefined);
}

/**
 * _NETWORK_GET_* or _NETWORK_IS_*
 * 
 * Hash: 0xDA801F7F6A5278D3 | Since: 1207
 */
export function _0xDA801F7F6A5278D3(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xDA801F7F6A5278D3', _player);
}

/**
 * No comment provided
 * 
 * Hash: 0xE4C64CD37CB176AA | Since: 1207
 */
export function _0xE4C64CD37CB176AA(): any {
    return Citizen.invokeNative('0xE4C64CD37CB176AA', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xEE4F20004D0288B7 | Since: 1207
 */
export function _0xEE4F20004D0288B7(): void {
    Citizen.invokeNative('0xEE4F20004D0288B7');
}

/**
 * No comment provided
 * 
 * Hash: 0xFA7C5B7E087A4CEB | Since: 1207
 */
export function _0xFA7C5B7E087A4CEB(): any {
    return Citizen.invokeNative('0xFA7C5B7E087A4CEB');
}

/**
 * No comment provided
 * 
 * Hash: 0xCE88A261DCBBA0D9 | Since: 1207
 */
export function networkGetLeaderHandle(gangId: any): [boolean, any] {
    return NetworkGetGangLeaderHandle(gangId);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1BF325C8252A982 | Since: 1207
 */
export function networkGetMembers(gangId: any): [number, any] {
    return NetworkGetGangMembers(gangId);
}

/**
 * No comment provided
 * 
 * Hash: 0x9970AE8C3D706139 | Since: 1207
 */
export function networkGetPrivacy(): number {
    return NetworkGetGangPrivacy();
}

/**
 * No comment provided
 * 
 * Hash: 0x853B0FA4D8732C57 | Since: 1207
 */
export function networkGetSize(gangId: any): number {
    return NetworkGetGangSize(gangId);
}

/**
 * No comment provided
 * 
 * Hash: 0x9BE7DCB22D32CCBE | Since: 1207
 */
export function networkIsMember(gangId: any, player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsGangMember(gangId, _player);
}

/**
 * No comment provided
 * 
 * Hash: 0xFCF96CCBD81B24C8 | Since: 1207
 */
export function networkIsOpen(gangId: any): boolean {
    return NetworkIsGangOpen(gangId);
}

/**
 * No comment provided
 * 
 * Hash: 0x81FB74C83C2ED69F | Since: 1207
 */
export function networkIsInMy(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsInMyGang(_player);
}

/**
 * banTimeSeconds is 120 in R* Scripts
 * 
 * Hash: 0xCD9E2D9BC52FD80F | Since: 1207
 */
export function networkKickMember(player: number | string | IPlayer, banTimeSeconds: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    NetworkKickGangMember(_player, banTimeSeconds);
}

/**
 * No comment provided
 * 
 * Hash: 0x0A04A07BC3074EDB | Since: 1207
 */
export function networkLeave(disband: boolean): void {
    NetworkLeaveGang(disband);
}

/**
 * Returns true if join succeeded, false if failed.
 * 
 * Hash: 0xC0474C8BCF6787AD | Since: 1207
 */
export function networkRequestJoin(gangId: any): boolean {
    return NetworkRequestGangJoin(gangId);
}

/**
 * No comment provided
 * 
 * Hash: 0xC5BF29F4035277C2 | Since: 1207
 */
export function networkSetPrivacy(privacyType: number): boolean {
    return NetworkSetGangPrivacy(privacyType);
}

/**
 * No comment provided
 * 
 * Hash: 0x833D8268D51B4522 | Since: 1207
 */
export function networkSetSize(size: number): boolean {
    return NetworkSetGangSize(size);
}

/**
 * openStatus = true -> sets privacyType = 2 (PUBLIC_ADVERTISED)
 * openStatus = false -> sets privacyType = 1 (INVITE_ONLY)
 * 
 * campSize: NET_CAMP_SIZE_SMALLEST = 4, NET_CAMP_SIZE_LARGEST = 7
 * 
 * Hash: 0xD1A226F2E05E58FC | Since: 1207
 */
export function networkStart(openStatus: boolean, campSize: number): void {
    NetworkStartGang(openStatus, campSize);
}

