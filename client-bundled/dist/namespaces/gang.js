import { IPlayer } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x901E0DC25080C8B9 | Since: 1207 | API-Set: unknown
 */
export function networkGetId(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetGangId(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x4BE6C13A45CCA8EC | Since: 1207 | API-Set: unknown
 */
export function networkGetLeader(gangId) {
    return NetworkGetGangLeader(gangId);
}
/**
 * No comment provided
 *
 * Hash: 0x149A2751AB66AC02 | Since: 1207 | API-Set: unknown
 */
export function networkGetNumMembers(gangId) {
    return NetworkGetNumGangMembers(gangId);
}
/**
 * No comment provided
 *
 * Hash: 0x0F99F6436528A089 | Since: 1207 | API-Set: unknown
 */
export function networkIsActive(gangId) {
    return NetworkIsGangActive(gangId);
}
/**
 * No comment provided
 *
 * Hash: 0xD6F6ACF4392187FB | Since: 1207 | API-Set: unknown
 */
export function networkIsIdValid(gangId) {
    return NetworkIsGangIdValid(gangId);
}
/**
 * No comment provided
 *
 * Hash: 0x93A91A351A07360E | Since: 1207 | API-Set: unknown
 */
export function networkIsInSession(gangId) {
    return NetworkIsGangInSession(gangId);
}
/**
 * No comment provided
 *
 * Hash: 0x424B17A7DC5C90BC | Since: 1207 | API-Set: unknown
 */
export function networkIsLeader(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsGangLeader(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x3F59FE6F37869576 | Since: 1207 | API-Set: unknown
 */
export function networkIsInSame(player1, player2) {
    const _player1 = player1 instanceof IPlayer ? player1.playerId() : player1;
    const _player2 = player2 instanceof IPlayer ? player2.playerId() : player2;
    return NetworkIsInSameGang(_player1, _player2);
}
/**
 * No comment provided
 *
 * Hash: 0x0E5C9FB9ED5DFF1C | Since: 1207 | API-Set: unknown
 */
export function _0x0E5C9FB9ED5DFF1C() {
    return Citizen.invokeNative('0x0E5C9FB9ED5DFF1C', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1F11702DDBD915C6 | Since: 1207 | API-Set: unknown
 */
export function _0x1F11702DDBD915C6() {
    return Citizen.invokeNative('0x1F11702DDBD915C6', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2F7EB8B6F6AFE79C | Since: 1207 | API-Set: unknown
 */
export function _0x2F7EB8B6F6AFE79C() {
    return Citizen.invokeNative('0x2F7EB8B6F6AFE79C', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3ADC71A66356D706 | Since: 1207 | API-Set: unknown
 */
export function _0x3ADC71A66356D706() {
    return Citizen.invokeNative('0x3ADC71A66356D706');
}
/**
 * No comment provided
 *
 * Hash: 0x48D82C83987E18E4 | Since: 1207 | API-Set: unknown
 */
export function _0x48D82C83987E18E4() {
    return Citizen.invokeNative('0x48D82C83987E18E4', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x51C5EF47086AA0D7 | Since: 1207 | API-Set: unknown
 */
export function _0x51C5EF47086AA0D7() {
    return Citizen.invokeNative('0x51C5EF47086AA0D7');
}
/**
 * No comment provided
 *
 * Hash: 0x53A94294FDDCF98C | Since: 1207 | API-Set: unknown
 */
export function _0x53A94294FDDCF98C() {
    return Citizen.invokeNative('0x53A94294FDDCF98C', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6102830F764B3DE1 | Since: 1207 | API-Set: unknown
 */
export function _0x6102830F764B3DE1(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x6102830F764B3DE1', _player);
}
/**
 * No comment provided
 *
 * Hash: 0x644E02F24F9D4E98 | Since: 1207 | API-Set: unknown
 */
export function _0x644E02F24F9D4E98() {
    return Citizen.invokeNative('0x644E02F24F9D4E98', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7933754F260B428A | Since: 1207 | API-Set: unknown
 */
export function _0x7933754F260B428A(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x7933754F260B428A', _player);
}
/**
 * No comment provided
 *
 * Hash: 0x7BAA30C9BBE8AEE7 | Since: 1207 | API-Set: unknown
 */
export function _0x7BAA30C9BBE8AEE7() {
    return Citizen.invokeNative('0x7BAA30C9BBE8AEE7', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA9CEAE8D6637FBAD | Since: 1207 | API-Set: unknown
 */
export function _0xA9CEAE8D6637FBAD() {
    Citizen.invokeNative('0xA9CEAE8D6637FBAD', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xAD22AB64FA428DF3 | Since: 1207 | API-Set: unknown
 */
export function _0xAD22AB64FA428DF3() {
    Citizen.invokeNative('0xAD22AB64FA428DF3', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xAFD3599A3CC5637D | Since: 1207 | API-Set: unknown
 */
export function _0xAFD3599A3CC5637D() {
    return Citizen.invokeNative('0xAFD3599A3CC5637D');
}
/**
 * No comment provided
 *
 * Hash: 0xB22B1D9F74095382 | Since: 1207 | API-Set: unknown
 */
export function _0xB22B1D9F74095382() {
    Citizen.invokeNative('0xB22B1D9F74095382', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB38C256498748413 | Since: 1207 | API-Set: unknown
 */
export function _0xB38C256498748413() {
    Citizen.invokeNative('0xB38C256498748413');
}
/**
 * No comment provided
 *
 * Hash: 0xC81A9E2C8EFD28D5 | Since: 1207 | API-Set: unknown
 */
export function _0xC81A9E2C8EFD28D5() {
    Citizen.invokeNative('0xC81A9E2C8EFD28D5', undefined);
}
/**
 * _NETWORK_GET_* or _NETWORK_IS_*
 *
 * Hash: 0xDA801F7F6A5278D3 | Since: 1207 | API-Set: unknown
 */
export function _0xDA801F7F6A5278D3(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xDA801F7F6A5278D3', _player);
}
/**
 * No comment provided
 *
 * Hash: 0xE4C64CD37CB176AA | Since: 1207 | API-Set: unknown
 */
export function _0xE4C64CD37CB176AA() {
    return Citizen.invokeNative('0xE4C64CD37CB176AA', 0);
}
/**
 * No comment provided
 *
 * Hash: 0xEE4F20004D0288B7 | Since: 1207 | API-Set: unknown
 */
export function _0xEE4F20004D0288B7() {
    Citizen.invokeNative('0xEE4F20004D0288B7');
}
/**
 * No comment provided
 *
 * Hash: 0xFA7C5B7E087A4CEB | Since: 1207 | API-Set: unknown
 */
export function _0xFA7C5B7E087A4CEB() {
    return Citizen.invokeNative('0xFA7C5B7E087A4CEB');
}
/**
 * No comment provided
 *
 * Hash: 0xCE88A261DCBBA0D9 | Since: 1207 | API-Set: unknown
 */
export function networkGetLeaderHandle(gangId) {
    return NetworkGetGangLeaderHandle(gangId);
}
/**
 * No comment provided
 *
 * Hash: 0xD1BF325C8252A982 | Since: 1207 | API-Set: unknown
 */
export function networkGetMembers(gangId) {
    return NetworkGetGangMembers(gangId);
}
/**
 * No comment provided
 *
 * Hash: 0x9970AE8C3D706139 | Since: 1207 | API-Set: unknown
 */
export function networkGetPrivacy() {
    return NetworkGetGangPrivacy();
}
/**
 * No comment provided
 *
 * Hash: 0x853B0FA4D8732C57 | Since: 1207 | API-Set: unknown
 */
export function networkGetSize(gangId) {
    return NetworkGetGangSize(gangId);
}
/**
 * No comment provided
 *
 * Hash: 0x9BE7DCB22D32CCBE | Since: 1207 | API-Set: unknown
 */
export function networkIsMember(gangId, player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsGangMember(gangId, _player);
}
/**
 * No comment provided
 *
 * Hash: 0xFCF96CCBD81B24C8 | Since: 1207 | API-Set: unknown
 */
export function networkIsOpen(gangId) {
    return NetworkIsGangOpen(gangId);
}
/**
 * No comment provided
 *
 * Hash: 0x81FB74C83C2ED69F | Since: 1207 | API-Set: unknown
 */
export function networkIsInMy(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsInMyGang(_player);
}
/**
 * banTimeSeconds is 120 in R* Scripts
 *
 * Hash: 0xCD9E2D9BC52FD80F | Since: 1207 | API-Set: unknown
 */
export function networkKickMember(player, banTimeSeconds) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    NetworkKickGangMember(_player, banTimeSeconds);
}
/**
 * No comment provided
 *
 * Hash: 0x0A04A07BC3074EDB | Since: 1207 | API-Set: unknown
 */
export function networkLeave(disband) {
    NetworkLeaveGang(disband);
}
/**
 * Returns true if join succeeded, false if failed.
 *
 * Hash: 0xC0474C8BCF6787AD | Since: 1207 | API-Set: unknown
 */
export function networkRequestJoin(gangId) {
    return NetworkRequestGangJoin(gangId);
}
/**
 * No comment provided
 *
 * Hash: 0xC5BF29F4035277C2 | Since: 1207 | API-Set: unknown
 */
export function networkSetPrivacy(privacyType) {
    return NetworkSetGangPrivacy(privacyType);
}
/**
 * No comment provided
 *
 * Hash: 0x833D8268D51B4522 | Since: 1207 | API-Set: unknown
 */
export function networkSetSize(size) {
    return NetworkSetGangSize(size);
}
/**
 * openStatus = true -> sets privacyType = 2 (PUBLIC_ADVERTISED)
 * openStatus = false -> sets privacyType = 1 (INVITE_ONLY)
 *
 * campSize: NET_CAMP_SIZE_SMALLEST = 4, NET_CAMP_SIZE_LARGEST = 7
 *
 * Hash: 0xD1A226F2E05E58FC | Since: 1207 | API-Set: unknown
 */
export function networkStart(openStatus, campSize) {
    NetworkStartGang(openStatus, campSize);
}
