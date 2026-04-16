import { IEntity, IPed, IPlayer } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x0E3BDEED21BEB945 | Since: 1207
 */
export function addBounty(player, itemValueAmount) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    AddBounty(_player, itemValueAmount);
}
/**
 * No comment provided
 *
 * Hash: 0x69E181772886F48B | Since: 1207
 */
export function areWitnessesActive(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return AreWitnessesActive(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xC76F252371150D9A | Since: 1207
 */
export function clearBounty(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ClearBounty(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xBCC6DC59E32A2BDC | Since: 1207
 */
export function clearPlayerPastCrimes(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ClearPlayerPastCrimes(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x062B4A4A3396351D | Since: 1207
 */
export function clearWantedScore(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ClearWantedScore(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x54310AAB97B92816 | Since: 1207
 */
export function getBounty(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetBounty(_player);
}
/**
 * Returns the player registed crime data at the index
 *
 * Hash: 0x532C5FDDB986EE5C | Since: 1207
 */
export function getPlayerRegisteredCrime(player, index) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerRegisteredCrime(_player, index);
}
/**
 * No comment provided
 *
 * Hash: 0xDD5FD601481F648B | Since: 1207
 */
export function getWantedScore(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetWantedScore(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xAD401C63158ACBAA | Since: 1207
 */
export function isIncidentActive(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsLawIncidentActive(_player);
}
/**
 * Returns amount of suppressed crimes to be used later in the function MPINTRO_CRIME_MONITOR_MAINTAIN
 *
 * Hash: 0xC08E804C91F47C80 | Since: 1207
 */
export function numCrimesSuppressed(player, crimeType) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof crimeType === 'string')
        crimeType = GetHashKey(crimeType);
    return NumCrimesSuppressed(_player, crimeType);
}
/**
 * No comment provided
 *
 * Hash: 0x2728C77FBC4B9796 | Since: 1207
 */
export function resetWantedForNewIncident(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ResetWantedForNewIncident(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x093A9D1F72DF0D19 | Since: 1207
 */
export function setBounty(player, amount) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetBounty(_player, amount);
}
/**
 * No comment provided
 *
 * Hash: 0xDE5FAA741A781F73 | Since: 1207
 */
export function setDisableDisturbanceCrimes(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetDisableDisturbanceCrimes(_player, false);
}
/**
 * Default range is 1.0f
 *
 * Hash: 0xFEC85339AACA2A35 | Since: 1207
 */
export function setSenseRangeModifier(player, range) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetLawSenseRangeModifier(_player, range);
}
/**
 * No comment provided
 *
 * Hash: 0xE0FA74AA3CCE650B | Since: 1207
 */
export function setPlayerArrestedInRegion(player, lawRegionHash) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof lawRegionHash === 'string')
        lawRegionHash = GetHashKey(lawRegionHash);
    SetPlayerArrestedInRegion(_player, lawRegionHash);
}
/**
 * No comment provided
 *
 * Hash: 0x73BAD7B2F2DB50DE | Since: 1207
 */
export function setPlayerTurnedInBountyInRegion(player, lawRegionHash) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof lawRegionHash === 'string')
        lawRegionHash = GetHashKey(lawRegionHash);
    SetPlayerTurnedInBountyInRegion(_player, lawRegionHash);
}
/**
 * No comment provided
 *
 * Hash: 0x362086B911657B1A | Since: 1207
 */
export function setPostponeDisturbanceCrimesDuringCombat(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPostponeDisturbanceCrimesDuringCombat(_player, false);
}
/**
 * No comment provided
 *
 * Hash: 0xA80FF73F772ACF6A | Since: 1207
 */
export function setWantedScore(player, intensity) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetWantedScore(_player, intensity);
}
/**
 * crimeType: see _REPORT_CRIME
 *
 * Hash: 0x785177E4D57D7389 | Since: 1207
 */
export function suppressCrimeThisFrame(player, crimeType) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof crimeType === 'string')
        crimeType = GetHashKey(crimeType);
    SuppressCrimeThisFrame(_player, crimeType, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x00DB0BC05E3FAA4E | Since: 1207
 */
export function _0x00DB0BC05E3FAA4E(ped, bitset) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x00DB0BC05E3FAA4E', _ped, bitset);
}
/**
 * No comment provided
 *
 * Hash: 0x018F30D762E62DF8 | Since: 1207
 */
export function _0x018F30D762E62DF8(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x018F30D762E62DF8', _ped);
}
/**
 * Used in SP only, called together with 0x55F37F5F3F2475E1 & CLEAR_WANTED_SCORE
 * _REPORT_*
 *
 * Hash: 0x07E8B8B20570271C | Since: 1207
 */
export function _0x07E8B8B20570271C(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x07E8B8B20570271C', _player);
}
/**
 * Only used in net_fetch R* Script
 *
 * Hash: 0x0BDFEBCF40A5F7E3 | Since: 1207
 */
export function _0x0BDFEBCF40A5F7E3(crimeType) {
    if (typeof crimeType === 'string')
        crimeType = GetHashKey(crimeType);
    return Citizen.invokeNative('0x0BDFEBCF40A5F7E3', crimeType);
}
/**
 * No comment provided
 *
 * Hash: 0x0C392DB374655176 | Since: 1207
 */
export function _0x0C392DB374655176(pos, itemSet) {
    Citizen.invokeNative('0x0C392DB374655176', pos.x, pos.y, pos.z, 0, itemSet);
}
/**
 * Only used in sisikapenitentiary R* Script: name = SISIKA
 * _IS_G* or _IS_H*
 *
 * Hash: 0x0DBACA9C38C9A686 | Since: 1207
 */
export function _0x0DBACA9C38C9A686(name) {
    return Citizen.invokeNative('0x0DBACA9C38C9A686', name);
}
/**
 * No comment provided
 *
 * Hash: 0x0EAF918F751F27BA | Since: 1207
 */
export function _0x0EAF918F751F27BA(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x0EAF918F751F27BA', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x0F230DE0DDBE3649 | Since: 1207
 */
export function _0x0F230DE0DDBE3649(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x0F230DE0DDBE3649', _player);
}
/**
 * Params: p0 either 0, 1 or -1 in R* Scripts
 * Set to 0 called together with _SUPPRESS_CRIME
 *
 * Hash: 0x15ABD5004CAD2D99 | Since: 1207
 */
export function _0x15ABD5004CAD2D99() {
    Citizen.invokeNative('0x15ABD5004CAD2D99', 0);
}
/**
 * Only used in resapwn_dump_body R* Script
 *
 * Hash: 0x2001687F9562FD9D | Since: 1207
 */
export function _0x2001687F9562FD9D() {
    Citizen.invokeNative('0x2001687F9562FD9D', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x21213B833EF4DAE7 | Since: 1207
 */
export function _0x21213B833EF4DAE7(player, ped) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x21213B833EF4DAE7', _player, _ped);
}
/**
 * Used in SP only
 * _REPORT_*
 *
 * Hash: 0x22741652985C84D0 | Since: 1207
 */
export function _0x22741652985C84D0(player, lawRegionHash) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof lawRegionHash === 'string')
        lawRegionHash = GetHashKey(lawRegionHash);
    Citizen.invokeNative('0x22741652985C84D0', _player, lawRegionHash);
}
/**
 * No comment provided
 *
 * Hash: 0x26934083D3F2579C | Since: 1207
 */
export function _0x26934083D3F2579C(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x26934083D3F2579C', _player);
}
/**
 * Only used in R* Script fm_mission_controller
 * _CLEAR_WANTED_*
 *
 * Hash: 0x292AD61A33A7A485 | Since: 1207
 */
export function _0x292AD61A33A7A485() {
    Citizen.invokeNative('0x292AD61A33A7A485');
}
/**
 * No comment provided
 *
 * Hash: 0x29CD4896ECB66C12 | Since: 1207
 */
export function _0x29CD4896ECB66C12() {
    Citizen.invokeNative('0x29CD4896ECB66C12');
}
/**
 * Only used in R* SP Script av_amb_camp_robbery
 *
 * Hash: 0x318F0F9A4426CFA2 | Since: 1207
 */
export function _0x318F0F9A4426CFA2(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x318F0F9A4426CFA2', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x331D349E0380B097 | Since: 1207
 */
export function _0x331D349E0380B097() {
    Citizen.invokeNative('0x331D349E0380B097', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3738B784DDD35CC6 | Since: 1207
 */
export function _0x3738B784DDD35CC6(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x3738B784DDD35CC6', _player, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x3852237A3D9DF145 | Since: 1207
 */
export function _0x3852237A3D9DF145() {
    Citizen.invokeNative('0x3852237A3D9DF145', 0);
}
/**
 * _CLEAR*
 *
 * Hash: 0x390710D2DAFA6BFF | Since: 1207
 */
export function _0x390710D2DAFA6BFF(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x390710D2DAFA6BFF', _player, false);
}
/**
 * No comment provided
 *
 * Hash: 0x3D2674828A4E6B3C | Since: 1207
 */
export function _0x3D2674828A4E6B3C() {
    return Citizen.invokeNative('0x3D2674828A4E6B3C');
}
/**
 * No comment provided
 *
 * Hash: 0x40851BCC33ACD9AB | Since: 1207
 */
export function _0x40851BCC33ACD9AB(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x40851BCC33ACD9AB', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x522F74636DF10201 | Since: 1207
 */
export function _0x522F74636DF10201(player, itemSet) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x522F74636DF10201', _player, itemSet);
}
/**
 * Only used in R* SP Scripts
 *
 * Hash: 0x5E6F375CA101C108 | Since: 1207
 */
export function _0x5E6F375CA101C108(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x5E6F375CA101C108', _player, false);
}
/**
 * No comment provided
 *
 * Hash: 0x61B98367D93F012F | Since: 1207
 */
export function _0x61B98367D93F012F(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x61B98367D93F012F', _player);
}
/**
 * No comment provided
 *
 * Hash: 0x6ABC50979655BEE7 | Since: 1207
 */
export function _0x6ABC50979655BEE7(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x6ABC50979655BEE7', _player, undefined);
}
/**
 * Only used in shoprobberies
 *
 * Hash: 0x7351DA734F989F4E | Since: 1207
 */
export function _0x7351DA734F989F4E(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x7351DA734F989F4E', _entity);
}
/**
 * No comment provided
 *
 * Hash: 0x7803436E68C32B26 | Since: 1207
 */
export function _0x7803436E68C32B26() {
    Citizen.invokeNative('0x7803436E68C32B26');
}
/**
 * _SET_DISPATCH_*
 *
 * Hash: 0x7EF2A2FE38D74456 | Since: 1207
 */
export function _0x7EF2A2FE38D74456(flag) {
    Citizen.invokeNative('0x7EF2A2FE38D74456', flag, false);
}
/**
 * Only used in R* Script long_update
 * Returns a value thats being subtracted from GET_GAME_TIMER
 *
 * Hash: 0x7FC667F6DDFBCDCC | Since: 1207
 */
export function _0x7FC667F6DDFBCDCC(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x7FC667F6DDFBCDCC', _player);
}
/**
 * Only used in rcm_gunslinger1_1 R* Script: p0 = 0
 *
 * Hash: 0x82F11E1296996574 | Since: 1207
 */
export function _0x82F11E1296996574() {
    Citizen.invokeNative('0x82F11E1296996574', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x856CE8FDE2416602 | Since: 1207
 */
export function _0x856CE8FDE2416602(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x856CE8FDE2416602', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x89E005B1662F6E48 | Since: 1207
 */
export function _0x89E005B1662F6E48(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x89E005B1662F6E48', _player, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x95878B13E272EF1F | Since: 1207
 */
export function _0x95878B13E272EF1F(entity, ped, pos, crimeType) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof crimeType === 'string')
        crimeType = GetHashKey(crimeType);
    return Citizen.invokeNative('0x95878B13E272EF1F', _entity, _ped, false, pos.x, pos.y, pos.z, crimeType);
}
/**
 * Only used in loanshark_miner1 R* Script: name = ANNESBURG_MINES
 *
 * Hash: 0x9772395CC73E8D1F | Since: 1207
 */
export function _0x9772395CC73E8D1F(ped, name) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x9772395CC73E8D1F', _ped, name);
}
/**
 * No comment provided
 *
 * Hash: 0x987BE590FB9D41E5 | Since: 1207
 */
export function _0x987BE590FB9D41E5() {
    Citizen.invokeNative('0x987BE590FB9D41E5', false);
}
/**
 * No comment provided
 *
 * Hash: 0x9945A3E2528A02E8 | Since: 1207
 */
export function _0x9945A3E2528A02E8(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x9945A3E2528A02E8', _player);
}
/**
 * No comment provided
 *
 * Hash: 0x9B4C564BFA7CFF37 | Since: 1207
 */
export function _0x9B4C564BFA7CFF37() {
    Citizen.invokeNative('0x9B4C564BFA7CFF37', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x9C5BD8C562565CE6 | Since: 1207
 */
export function _0x9C5BD8C562565CE6() {
    return Citizen.invokeNative('0x9C5BD8C562565CE6');
}
/**
 * Only used in act_bankrobbery01 R* Script
 *
 * Hash: 0x9C8A2BF37E966464 | Since: 1207
 */
export function _0x9C8A2BF37E966464(player, itemSet) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x9C8A2BF37E966464', _player, itemSet);
}
/**
 * No comment provided
 *
 * Hash: 0x9D5C9A5A3321B128 | Since: 1207
 */
export function _0x9D5C9A5A3321B128(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x9D5C9A5A3321B128', _player);
}
/**
 * Only used in shoprobberies R* Scripts
 *
 * Hash: 0x9EF07CFBB19A9733 | Since: 1207
 */
export function _0x9EF07CFBB19A9733() {
    return Citizen.invokeNative('0x9EF07CFBB19A9733');
}
/**
 * No comment provided
 *
 * Hash: 0xB527099D1E1EED49 | Since: 1207
 */
export function _0xB527099D1E1EED49(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xB527099D1E1EED49', _player, 0);
}
/**
 * Called together with REPORT_POLICE_SPOTTED_PLAYER
 *
 * Hash: 0xBD944A3D36E992DE | Since: 1207
 */
export function _0xBD944A3D36E992DE() {
    Citizen.invokeNative('0xBD944A3D36E992DE');
}
/**
 * Only used in rcm_serial_killer1 R* Script
 *
 * Hash: 0xC0DF161950FB101E | Since: 1207
 */
export function _0xC0DF161950FB101E(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xC0DF161950FB101E', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xC310239ACCCF5579 | Since: 1207
 */
export function _0xC310239ACCCF5579() {
    Citizen.invokeNative('0xC310239ACCCF5579');
}
/**
 * No comment provided
 *
 * Hash: 0xC5EB2755FA25F1E9 | Since: 1207
 */
export function _0xC5EB2755FA25F1E9() {
    Citizen.invokeNative('0xC5EB2755FA25F1E9', false);
}
/**
 * No comment provided
 *
 * Hash: 0xC687A23E166DCF68 | Since: 1207
 */
export function _0xC687A23E166DCF68() {
    return Citizen.invokeNative('0xC687A23E166DCF68');
}
/**
 * _GET_DISPATCH_*
 *
 * Hash: 0xC7DC5A0A7DF608CB | Since: 1207
 */
export function _0xC7DC5A0A7DF608CB(flag) {
    return Citizen.invokeNative('0xC7DC5A0A7DF608CB', flag);
}
/**
 * No comment provided
 *
 * Hash: 0xCBFB4951F2E3934C | Since: 1207
 */
export function _0xCBFB4951F2E3934C(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xCBFB4951F2E3934C', _player);
}
/**
 * No comment provided
 *
 * Hash: 0xD6C0A8C7C0B2F82C | Since: 1207
 */
export function _0xD6C0A8C7C0B2F82C(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xD6C0A8C7C0B2F82C', _player, false);
}
/**
 * Only used in R* SP Scripts
 * Params: p2 either 1 or 2
 *
 * Hash: 0xD7494DED50C6EF52 | Since: 1207
 */
export function _0xD7494DED50C6EF52(player, crimeType) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof crimeType === 'string')
        crimeType = GetHashKey(crimeType);
    Citizen.invokeNative('0xD7494DED50C6EF52', _player, crimeType, 0);
}
/**
 * Only used in R* SP Scripts
 * Params: p1 = true, p2 = false
 *
 * Hash: 0xDA1A9ADC4E3D4B16 | Since: 1207
 */
export function _0xDA1A9ADC4E3D4B16(itemSet) {
    Citizen.invokeNative('0xDA1A9ADC4E3D4B16', itemSet, false, false);
}
/**
 * crimeType: see _REPORT_CRIME
 *
 * Hash: 0xDAEFDFDB2AEECE37 | Since: 1207
 */
export function _0xDAEFDFDB2AEECE37(crimeType) {
    if (typeof crimeType === 'string')
        crimeType = GetHashKey(crimeType);
    return Citizen.invokeNative('0xDAEFDFDB2AEECE37', crimeType, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDCF12B89624AAC96 | Since: 1207
 */
export function _0xDCF12B89624AAC96() {
    Citizen.invokeNative('0xDCF12B89624AAC96', false);
}
/**
 * No comment provided
 *
 * Hash: 0xDEA083C16BB91345 | Since: 1207
 */
export function _0xDEA083C16BB91345() {
    Citizen.invokeNative('0xDEA083C16BB91345');
}
/**
 * No comment provided
 *
 * Hash: 0xE083BEDA81709891 | Since: 1207
 */
export function _0xE083BEDA81709891(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xE083BEDA81709891', _player);
}
/**
 * No comment provided
 *
 * Hash: 0xE4D6E45F491A66CB | Since: 1207
 */
export function _0xE4D6E45F491A66CB(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xE4D6E45F491A66CB', _player, 0);
}
/**
 * Seems to disable lawmen guarding behaviors (like during a region lockdown). Must be called every frame.
 * Only used in R* SP Scripts, mostly used in train_fast_travel_core
 *
 * Hash: 0xE94B5E938619712E | Since: 1207
 */
export function _0xE94B5E938619712E() {
    Citizen.invokeNative('0xE94B5E938619712E');
}
/**
 * Only used in R* SP Scripts
 * Params: p1 = 0
 *
 * Hash: 0xE9AC8466ABE484BB | Since: 1207
 */
export function _0xE9AC8466ABE484BB() {
    Citizen.invokeNative('0xE9AC8466ABE484BB', false, undefined);
}
/**
 * Returns p1 value for 0xE4D6E45F491A66CB
 *
 * Hash: 0xE9EB79CBF9C0F58A | Since: 1207
 */
export function _0xE9EB79CBF9C0F58A(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xE9EB79CBF9C0F58A', _player);
}
/**
 * _SET_C* - _SET_D*
 *
 * Hash: 0xEDFC6C1FD1C964F5 | Since: 1207
 */
export function _0xEDFC6C1FD1C964F5(player, crimeType, bounty) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof crimeType === 'string')
        crimeType = GetHashKey(crimeType);
    Citizen.invokeNative('0xEDFC6C1FD1C964F5', _player, crimeType, bounty, 0, 0, false, 0, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF46108C50A22B029 | Since: 1207
 */
export function _0xF46108C50A22B029() {
    return Citizen.invokeNative('0xF46108C50A22B029');
}
/**
 * No comment provided
 *
 * Hash: 0xF611DE44AEB36A1D | Since: 1207
 */
export function _0xF611DE44AEB36A1D(crimeType) {
    if (typeof crimeType === 'string')
        crimeType = GetHashKey(crimeType);
    Citizen.invokeNative('0xF611DE44AEB36A1D', crimeType, false);
}
/**
 * No comment provided
 *
 * Hash: 0xFFEBE5AA96BC2E4E | Since: 1207
 */
export function _0xFFEBE5AA96BC2E4E(ped, crimeType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof crimeType === 'string')
        crimeType = GetHashKey(crimeType);
    return Citizen.invokeNative('0xFFEBE5AA96BC2E4E', _ped, crimeType, false);
}
/**
 * No comment provided
 *
 * Hash: 0x10827B5A0AAC56A7 | Since: 1207
 */
export function addWitnessResponse(player, crimeType, pedGroup) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _pedGroup = pedGroup instanceof IPed ? pedGroup.handle() : pedGroup;
    if (typeof crimeType === 'string')
        crimeType = GetHashKey(crimeType);
    AddWitnessResponse(_player, crimeType, _pedGroup);
}
/**
 * Only used in rcm_homerob00 R* Script
 *
 * Hash: 0xECE3C34B270428D5 | Since: 1207
 */
export function areAnyPedsInvestigating() {
    return AreAnyLawPedsInvestigating();
}
/**
 * No comment provided
 *
 * Hash: 0xF0FBFB9AB15F7734 | Since: 1207
 */
export function areInvestigatorsActive(player, areInvestigatorsActive) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return AreInvestigatorsActive(_player, areInvestigatorsActive, undefined);
}
/**
 * Only used in trainrobbery_ambient R* Script
 *
 * Hash: 0xA22C46F16359471C | Since: 1207
 */
export function arePedsEnabledForTrain() {
    return AreLawPedsEnabledForTrain();
}
/**
 * No comment provided
 *
 * Hash: 0x0BB6DE7D23C60626 | Since: 1207
 */
export function areWitnessesPending(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return AreWitnessesPending(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x8F9DE75680275C9F | Since: 1207
 */
export function createGuardZone(name) {
    CreateGuardZone(name);
}
/**
 * Returns true when investigation creation was successful
 *
 * Hash: 0x0D4B77E862475ED3 | Since: 1311
 */
export function createGuardZoneForEntity(guardZoneName, entity, pos) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return CreateGuardZoneForEntity(guardZoneName, _entity, pos.x, pos.y, pos.z);
}
/**
 * dispatchResponseHash: see common/data/dispatchresponses/..
 *
 * Hash: 0x75CBF20BA47E4F89 | Since: 1207
 */
export function createDispatchResponseForCoords(pos, dispatchResponseHash) {
    if (typeof dispatchResponseHash === 'string')
        dispatchResponseHash = GetHashKey(dispatchResponseHash);
    return CreateLawDispatchResponseForCoords(pos.x, pos.y, pos.z, dispatchResponseHash);
}
/**
 * No comment provided
 *
 * Hash: 0x26D558692B25DD95 | Since: 1207
 */
export function disableGuardZone(name) {
    DisableGuardZone(name);
}
/**
 * No comment provided
 *
 * Hash: 0xC805EB785824F712 | Since: 1207
 */
export function enableDispatch(toggle) {
    EnableDispatchLaw(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x710448D44A64C213 | Since: 1207
 */
export function enableDispatch2(toggle) {
    EnableDispatchLaw2(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x956510F8C36B5C64 | Since: 1207
 */
export function forceOnLocalPlayerImmediately() {
    ForceLawOnLocalPlayerImmediately();
}
/**
 * p0 is always BOUNTYHUNTERSGLOBALCOOLDOWN in R* scripts
 *
 * Hash: 0x76CF93D4B416B288 | Since: 1207
 */
export function getBountyHunterGlobalCooldown(p0) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    return GetBountyHunterGlobalCooldown(p0);
}
/**
 * Returns bounty (increment) value
 *
 * Hash: 0x35E5E21F9159849C | Since: 1207
 */
export function getCrimeBountyAmountByType(crimeType) {
    if (typeof crimeType === 'string')
        crimeType = GetHashKey(crimeType);
    return GetCrimeBountyAmountByType(crimeType);
}
/**
 * No comment provided
 *
 * Hash: 0x148E7AC8141C9E64 | Since: 1207
 */
export function getCrimeDispatchTypeForPlayer(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x148E7AC8141C9E64', _player);
}
/**
 * See _REPORT_CRIME
 *
 * Hash: 0x259CE340A8738814 | Since: 1207
 */
export function getHudPlayerCrimeType(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetHudPlayerCrimeType(_player);
}
/**
 * Returns the amount of time (probably in game minutes) since last seen by the law / left the wanted radius
 *
 * Hash: 0x717DA2281DF90855 | Since: 1207
 */
export function getTimeSinceLastSeenBy(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetTimeSinceLastSeenByLaw(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xD743C4293F47AFAD | Since: 1207
 */
export function isGuardPedInvestigating(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsGuardPedInvestigating(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xF0B67BAD53C35BD9 | Since: 1207
 */
export function witnessResponseTask(pedGroup1, ped, pedGroup2, pos, crimeType) {
    const _pedGroup1 = pedGroup1 instanceof IPed ? pedGroup1.handle() : pedGroup1;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _pedGroup2 = pedGroup2 instanceof IPed ? pedGroup2.handle() : pedGroup2;
    if (typeof crimeType === 'string')
        crimeType = GetHashKey(crimeType);
    return LawWitnessResponseTask(_pedGroup1, _ped, _pedGroup2, pos.x, pos.y, pos.z, crimeType);
}
/**
 * p0 is always BOUNTYHUNTERSGLOBALCOOLDOWN in R* scripts
 *
 * Hash: 0xC61EDEBF16CD9668 | Since: 1207
 */
export function pauseBountyHunterCooldown(p0) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    PauseBountyHunterCooldown(p0, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x67EBDD958835956C | Since: 1207
 */
export function removeGuardZone(name) {
    RemoveGuardZone(name);
}
/**
 * crimeType:
 * enum eCrimeType : Hash
 * {
 * CRIME_ACCOMPLICE = 0xAF074F6D,
 * CRIME_ARSON = 0x68134DC7,
 * CRIME_ASSAULT = 0x0BADC882,
 * CRIME_ASSAULT_ANIMAL = 0x18DA55EE,
 * CRIME_ASSAULT_CORPSE = 0x4E5F23F2,
 * CRIME_ASSAULT_HORSE = 0xC4736181,
 * CRIME_ASSAULT_LAW = 0xD7466D7C,
 * CRIME_ASSAULT_LIVESTOCK = 0xCCE1CCBD,
 * CRIME_BANK_ROBBERY = 0x6A1ADE3D,
 * CRIME_BURGLARY = 0xA54C77E0,
 * CRIME_CHEATING = 0xA2FF1145,
 * CRIME_DISTURBANCE = 0x5011F613,
 * CRIME_EXPLOSION = 0x3EBA7A37,
 * CRIME_EXPLOSION_POISON = 0x91D0A0E1,
 * CRIME_GRAVE_ROBBERY = 0x971EA5AF,
 * CRIME_HASSLE = 0x58488776,
 * CRIME_HIT_AND_RUN = 0xFF0A3CC4,
 * CRIME_HIT_AND_RUN_LAW = 0x064814AF,
 * CRIME_INTIMIDATION = 0x8319FBAB,
 * CRIME_JACK_HORSE = 0x82F7E4A2,
 * CRIME_JACK_VEHICLE = 0x6B981F4C,
 * CRIME_JAIL_BREAK = 0x12C1D589,
 * CRIME_KIDNAPPING = 0x98F908DB,
 * CRIME_KIDNAPPING_LAW = 0xFD72A7EA,
 * CRIME_LASSO_ASSAULT = 0x56EE5D5A,
 * CRIME_LAW_IS_THREATENED = 0x1CB91DF0,
 * CRIME_LOITERING = 0x6629D2F4,
 * CRIME_LOOTING = 0x55AD2BEB,
 * CRIME_MURDER = 0xE28ECE7E,
 * CRIME_MURDER_ANIMAL = 0x48F59A66,
 * CRIME_MURDER_HORSE = 0xC7261D79,
 * CRIME_MURDER_LAW = 0x7797FCE7,
 * CRIME_MURDER_LIVESTOCK = 0x9569C546,
 * CRIME_MURDER_PLAYER = 0xF5ABD6C9,
 * CRIME_MURDER_PLAYER_HORSE = 0xD55C6A79,
 * CRIME_PROPERTY_DESTRUCTION = 0x533B003D,
 * CRIME_RESIST_ARREST = 0xDF577BA5,
 * CRIME_ROBBERY = 0xA3BEDE4C,
 * CRIME_SELF_DEFENCE = 0xBD6A0AA3,
 * CRIME_STAGECOACH_ROBBERY = 0xFC738E61,
 * CRIME_STOLEN_GOODS = 0x9A949C79,
 * CRIME_THEFT = 0x72ADE410,
 * CRIME_THEFT_HORSE = 0xBE3A5838,
 * CRIME_THEFT_LIVESTOCK = 0x85BA08FD,
 * CRIME_THEFT_VEHICLE = 0x43A9ECA1,
 * CRIME_THREATEN = 0x941C985A,
 * CRIME_THREATEN_LAW = 0x7F908566,
 * CRIME_TRAIN_ROBBERY = 0x647D2A5A,
 * CRIME_TRAMPLE = 0x45DB39D8,
 * CRIME_TRAMPLE_LAW = 0xF00F266B,
 * CRIME_TRAMPLE_PLAYER = 0x75970C15,
 * CRIME_TRESPASSING = 0xAEDE8E35,
 * CRIME_UNARMED_ASSAULT = 0x5098CC5A,
 * CRIME_VANDALISM = 0x80FDC759,
 * CRIME_VANDALISM_VEHICLE = 0xF9E7ECE4,
 * CRIME_VEHICLE_DESTRUCTION = 0x54A85DDC,
 * CRIME_WANTED_LEVEL_UP_DEBUG_HIGH = 0x99C52FF5,
 * CRIME_WANTED_LEVEL_UP_DEBUG_LOW = 0xD891890F
 * };
 *
 * Hash: 0xF60386770878A98F | Since: 1207
 */
export function reportCrime(player, crimeType, bounty, entity, isKnownSuspect) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof crimeType === 'string')
        crimeType = GetHashKey(crimeType);
    ReportCrime(_player, crimeType, bounty, _entity, isKnownSuspect);
}
/**
 * No comment provided
 *
 * Hash: 0x9C4352134B2835FB | Since: 1207
 */
export function reportPlayerDispatchResponseOverride(player, dispatchResponseHash) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof dispatchResponseHash === 'string')
        dispatchResponseHash = GetHashKey(dispatchResponseHash);
    ReportPlayerLawDispatchResponseOverride(_player, dispatchResponseHash);
}
/**
 * No comment provided
 *
 * Hash: 0x4B52BF96E225D230 | Since: 1207
 */
export function setAllowDisabledResponses(toggle) {
    SetAllowDisabledLawResponses(toggle);
}
/**
 * p0 is always BOUNTYHUNTERSGLOBALCOOLDOWN in R* scripts
 *
 * Hash: 0xF19706B1F8FFA88F | Since: 1207
 */
export function setBountyHunterGlobalCooldown(p0) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    SetBountyHunterGlobalCooldown(p0, 0);
}
/**
 * Force clears local player's wanted level
 *
 * Hash: 0x55F37F5F3F2475E1 | Since: 1207
 */
export function setBountyHunterPursuitCleared() {
    SetBountyHunterPursuitCleared();
}
/**
 * No comment provided
 *
 * Hash: 0xDDCE8E960D1DE240 | Since: 1207
 */
export function setCantLoseThisResponse(enable) {
    Citizen.invokeNative('0xDDCE8E960D1DE240', enable);
}
/**
 * Note: This native is only used in multiplayer scripts
 * dispatchResponseHash: see update1/common/data/dispatchresponses/..
 *
 * Hash: 0x009CF9A29972C298 | Since: 1207
 */
export function setCustomDispatchResponse(dispatchResponseHash) {
    if (typeof dispatchResponseHash === 'string')
        dispatchResponseHash = GetHashKey(dispatchResponseHash);
    SetCustomLawDispatchResponse(dispatchResponseHash);
}
/**
 * No comment provided
 *
 * Hash: 0x002BABE0B7D53136 | Since: 1207
 */
export function setDispatchMultiplierOverride(multiplier) {
    SetDispatchMultiplierOverride(multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0x7E7BF59F89FC6C6D | Since: 1207
 */
export function setGuardZonePosition(name, pos) {
    SetGuardZonePosition(name, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x2F9005E2EA4E5EE4 | Since: 1207
 */
export function setGuardZonePosition2(name, pos) {
    SetGuardZonePosition2(name, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xA8A74AA79FB67159 | Since: 1207
 */
export function setGuardZoneVolumeRegistrationEnd(name, volume) {
    SetGuardZoneVolumeRegistrationEnd(name, volume);
}
/**
 * No comment provided
 *
 * Hash: 0x8C598A930F471938 | Since: 1207
 */
export function setGuardZoneVolumeRegistrationStart(name, volume) {
    SetGuardZoneVolumeRegistrationStart(name, volume);
}
/**
 * No comment provided
 *
 * Hash: 0x35815F372D43E1E5 | Since: 1207
 */
export function setGuardZoneVolumeRestricted(name, volume) {
    SetGuardZoneVolumeRestricted(name, volume);
}
/**
 * No comment provided
 *
 * Hash: 0xA1B0E6301E2E02A6 | Since: 1207
 */
export function setGuardZoneVolumeThreat(volume) {
    return SetGuardZoneVolumeThreat(volume);
}
/**
 * No comment provided
 *
 * Hash: 0xAD3E07C37A7C1ADC | Since: 1207
 */
export function setGuardZoneVolumeWarning(volume) {
    return SetGuardZoneVolumeWarning(volume);
}
/**
 * No comment provided
 *
 * Hash: 0x8DE82BC774F3B862 | Since: 1207
 */
export function setDisabled(toggle) {
    SetLawDisabled(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x9BBDCB8DF789EBC1 | Since: 1207
 */
export function setRbsVolume(player, p1) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    SetLawRbsVolume(_player, p1);
}
/**
 * enum eLawRegion : Hash
 * {
 * LAW_DISPATCH_REGION_NONE = 0,
 * LAW_REGION_AGUASDULCES = 0x2F573EBE,
 * LAW_REGION_ANNESBURG = 0x68CAFD50,
 * LAW_REGION_ARMADILLO = 0xF0B90756,
 * LAW_REGION_BAYOU_NWA = 0x80966B1C,
 * LAW_REGION_BEECHERS_HOPE = 0xE2544977,
 * LAW_REGION_BIG_VALLEY = 0x3DF1559A,
 * LAW_REGION_BLACKWATER = 0x60D4886D,
 * LAW_REGION_BLACKWATER_MAINGAME = 0x66553576,
 * LAW_REGION_BLUEGILL_MARSH = 0x1D6AED8E,
 * LAW_REGION_BRAITHWAITE_MANOR = 0x3D71E7FF,
 * LAW_REGION_BUTCHER_CREEK = 0x2B3E1822,
 * LAW_REGION_CALIGA_HALL = 0xF3FE5080,
 * LAW_REGION_CORNWALL = 0xCC4672FA,
 * LAW_REGION_CUMBERLAND_FOREST = 0x81A78306,
 * LAW_REGION_EMERALD_RANCH = 0x5C069DF3,
 * LAW_REGION_FORT_WALLACE = 0x0AF25192,
 * LAW_REGION_GREAT_PLAINS = 0xB20573FA,
 * LAW_REGION_GREAT_PLAINS_MAINGAME = 0x9862FF7C,
 * LAW_REGION_GRIZZLIES = 0xBB936031,
 * LAW_REGION_GUAMA = 0x200DFF42,
 * LAW_REGION_HEARTLANDS = 0xAD14DA65,
 * LAW_REGION_LAGRAS = 0xC64808D3,
 * LAW_REGION_MACFARLANES_RANCH = 0x396A7D5F,
 * LAW_REGION_MANICATO = 0x039DB6BF,
 * LAW_REGION_MANZANITA_POST = 0x895E580E,
 * LAW_REGION_MANZANITA_POST_MAINGAME = 0x9BDD6A38,
 * LAW_REGION_OCCUPIED_CARAVAN_CAMP = 0x7EBABB01,
 * LAW_REGION_OLD_MAP_WILDERNESS = 0xCBB45950,
 * LAW_REGION_OLD_MAP_WILDERNESS_MAINGAME = 0x9F839BE7,
 * LAW_REGION_OUTLAW3 = 0x97A02FC1,
 * LAW_REGION_PRONGHORN_RANCH = 0x398E4BFC,
 * LAW_REGION_RHODES = 0x89222928,
 * LAW_REGION_RHODES_LOCKDOWN = 0xB1181671,
 * LAW_REGION_RIDGEWOOD_FARM = 0x635C3028,
 * LAW_REGION_ROANOKE_RIDGE = 0x46386A9A,
 * LAW_REGION_SAINT_DENIS = 0x5CF7C268,
 * LAW_REGION_SAINT_DENIS_RURAL = 0x4FD5331A,
 * LAW_REGION_SCARLETT_MEADOWS = 0x5FDD9717,
 * LAW_REGION_SISIKA = 0x2B6BBA52,
 * LAW_REGION_STRAWBERRY = 0xDD932620,
 * LAW_REGION_TALL_TREES = 0xD939B758,
 * LAW_REGION_TALL_TREES_MAINGAME = 0x084B17DF,
 * LAW_REGION_THIEVES_LANDING = 0x3D0C2EB6,
 * LAW_REGION_THIEVES_LANDING_MAINGAME = 0x61C450F3,
 * LAW_REGION_TUMBLEWEED = 0x0EFAF8DC,
 * LAW_REGION_VALENTINE = 0xA7A3F0C3,
 * LAW_REGION_VALENTINE_LOCKDOWN = 0x123582FE,
 * LAW_REGION_VAN_HORN = 0x619B528E,
 * LAW_REGION_WAPITI = 0x7A976E02
 * };
 *
 * Hash: 0x4752F68EB7F2D280 | Since: 1207
 */
export function setRegion(player, lawRegionHash, stateHash) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof lawRegionHash === 'string')
        lawRegionHash = GetHashKey(lawRegionHash);
    if (typeof stateHash === 'string')
        stateHash = GetHashKey(stateHash);
    SetLawRegion(_player, lawRegionHash, stateHash);
}
/**
 * behaviour: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CLawBehavior__Flags
 *
 * Hash: 0x819ADD5EF1742F47 | Since: 1207
 */
export function setPedBehaviour(ped, behaviour) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedLawBehaviour(_ped, behaviour);
}
