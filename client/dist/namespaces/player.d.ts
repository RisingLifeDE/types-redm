import { IPlayer } from '@risinglife/redm-shared';
/**
 * Unlike [GET_PLAYER_INVINCIBLE](#\_0xB721981B2B939E07) this native gets both [SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED](#\_0x6BC97F4F4BB3C04B) and [SET_PLAYER_INVINCIBLE](#\_0x239528EACDC3E7DE) invincibility state.
 *
 * Hash: 0xF2E3912B
 */
export declare function getInvincible2(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD014AB79
 */
export declare function getMaxStamina(playerId: number | string | IPlayer): number;
/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER](#\_0xAE540335B4ABC4E2).
 *
 * Hash: 0x27E94EF8
 */
export declare function getMeleeWeaponDefenseModifier(playerId: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0xE415EC5C
 */
export declare function getStamina(playerId: number | string | IPlayer): number;
/**
 * A getter for [SET_PLAYER_VEHICLE_DAMAGE_MODIFIER](#\_0xA50E117CDDF82F0C).
 *
 * Hash: 0x78F27B1F
 */
export declare function getVehicleDamageModifier(playerId: number | string | IPlayer): number;
/**
 * A getter for [SET_PLAYER_VEHICLE_DEFENSE_MODIFIER](#\_0x4C60E6EFDAFF2462).
 *
 * Hash: 0x8326E7CD
 */
export declare function getVehicleDefenseModifier(playerId: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0x35594F67
 */
export declare function setMaxStamina(playerId: number | string | IPlayer, maxStamina: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA9EC16C7
 */
export declare function setStamina(playerId: number | string | IPlayer, stamina: number): boolean;
/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
 *
 * Hash: 0x8689A825
 */
export declare function getMeleeWeaponDamageModifier(playerId: number | string | IPlayer): number;
/**
 * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
 *
 * Hash: 0x2A3D7CDA
 */
export declare function getWeaponDamageModifier(playerId: number | string | IPlayer): number;
/**
 * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
 *
 * Hash: 0xF1543251
 */
export declare function getWeaponDefenseModifier(playerId: number | string | IPlayer): number;
/**
 * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
 *
 * Hash: 0x986B65FF
 */
export declare function getWeaponDefenseModifier2(playerId: number | string | IPlayer): number;
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
export declare function getActives(): number;
/**
 * Gets a local client's Player ID from its server ID counterpart, assuming the passed `serverId` exists on the client.
 *
 * If no matching client is found, or an invalid value is passed over as the `serverId` native's parameter, the native result will be `-1`.
 *
 * It's worth noting that this native method can only retrieve information about clients that are culled to the connected client.
 *
 * Hash: 0x344EA166
 */
export declare function getFromServerId(serverId: number): number | string;
/**
 * No comment provided
 *
 * Hash: 0x4D97BCC7
 */
export declare function getServerId(player: number | string | IPlayer): number;
/**
 * the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.
 * This function doesn't need to be called every frame, it works like a switcher.
 *
 * Hash: 0xFC02CAF6
 */
export declare function setTalkingOverride(player: number | string | IPlayer, state: boolean): void;
/**
 * On the server this will return the players source, on the client it will return the player handle.
 *
 * Hash: 0xA56135E0
 */
export declare function getFromStateBagName(bagName: string): number;
