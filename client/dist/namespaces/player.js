import { IPlayer } from '@risinglife/redm-shared';
/**
 * Unlike [GET_PLAYER_INVINCIBLE](#\_0xB721981B2B939E07) this native gets both [SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED](#\_0x6BC97F4F4BB3C04B) and [SET_PLAYER_INVINCIBLE](#\_0x239528EACDC3E7DE) invincibility state.
 *
 * Hash: 0xF2E3912B
 */
export function getInvincible2(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerInvincible2(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xD014AB79
 */
export function getMaxStamina(playerId) {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerMaxStamina(_playerId);
}
/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER](#\_0xAE540335B4ABC4E2).
 *
 * Hash: 0x27E94EF8
 */
export function getMeleeWeaponDefenseModifier(playerId) {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerMeleeWeaponDefenseModifier(_playerId);
}
/**
 * No comment provided
 *
 * Hash: 0xE415EC5C
 */
export function getStamina(playerId) {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerStamina(_playerId);
}
/**
 * A getter for [SET_PLAYER_VEHICLE_DAMAGE_MODIFIER](#\_0xA50E117CDDF82F0C).
 *
 * Hash: 0x78F27B1F
 */
export function getVehicleDamageModifier(playerId) {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerVehicleDamageModifier(_playerId);
}
/**
 * A getter for [SET_PLAYER_VEHICLE_DEFENSE_MODIFIER](#\_0x4C60E6EFDAFF2462).
 *
 * Hash: 0x8326E7CD
 */
export function getVehicleDefenseModifier(playerId) {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerVehicleDefenseModifier(_playerId);
}
/**
 * No comment provided
 *
 * Hash: 0x35594F67
 */
export function setMaxStamina(playerId, maxStamina) {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return SetPlayerMaxStamina(_playerId, maxStamina);
}
/**
 * No comment provided
 *
 * Hash: 0xA9EC16C7
 */
export function setStamina(playerId, stamina) {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return SetPlayerStamina(_playerId, stamina);
}
/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
 *
 * Hash: 0x8689A825
 */
export function getMeleeWeaponDamageModifier(playerId) {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerMeleeWeaponDamageModifier(_playerId);
}
/**
 * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
 *
 * Hash: 0x2A3D7CDA
 */
export function getWeaponDamageModifier(playerId) {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerWeaponDamageModifier(_playerId);
}
/**
 * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
 *
 * Hash: 0xF1543251
 */
export function getWeaponDefenseModifier(playerId) {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerWeaponDefenseModifier(_playerId);
}
/**
 * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
 *
 * Hash: 0x986B65FF
 */
export function getWeaponDefenseModifier2(playerId) {
    const _playerId = playerId instanceof IPlayer ? playerId.playerId() : playerId;
    return GetPlayerWeaponDefenseModifier2(_playerId);
}
/**
 * Returns all player indices for 'active' physical players known to the client.
 * The data returned adheres to the following layout:
 *
 * ```
 * [127, 42, 13, 37]
 * ```
 *
 * Hash: 0xCF143FB9
 */
export function getActives() {
    return GetActivePlayers();
}
/**
 * Gets a local client's Player ID from its server ID counterpart, assuming the passed `serverId` exists on the client.
 *
 * If no matching client is found, or an invalid value is passed over as the `serverId` native's parameter, the native result will be `-1`.
 *
 * It's worth noting that this native method can only retrieve information about clients that are culled to the connected client.
 *
 * Hash: 0x344EA166
 */
export function getFromServerId(serverId) {
    return GetPlayerFromServerId(serverId);
}
/**
 * No comment provided
 *
 * Hash: 0x4D97BCC7
 */
export function getServerId(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerServerId(_player);
}
/**
 * the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.
 * This function doesn't need to be called every frame, it works like a switcher.
 *
 * Hash: 0xFC02CAF6
 */
export function setTalkingOverride(player, state) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerTalkingOverride(_player, state);
}
/**
 * On the server this will return the players source, on the client it will return the player handle.
 *
 * Hash: 0xA56135E0
 */
export function getFromStateBagName(bagName) {
    return GetPlayerFromStateBagName(bagName);
}
