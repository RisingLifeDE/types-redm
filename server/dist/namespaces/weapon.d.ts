import { IPed } from '@risinglife/redm-shared';
/**
 * GIVE_WEAPON_COMPONENT_TO_PED
 *
 * <strong>This is the server-side RPC native equivalent of the client native [GIVE_WEAPON_COMPONENT_TO_PED](?\_0xD966D51AA5B28BB9).</strong>
 *
 * Hash: 0x3E1E286D
 */
export declare function giveComponentToPed(ped: number | IPed, weaponHash: number | string, componentHash: number | string): void;
/**
 * GIVE_WEAPON_TO_PED
 *
 * <strong>This is the server-side RPC native equivalent of the client native [GIVE_WEAPON_TO_PED](?\_0xBF0FD6E56C964FCB).</strong>
 *
 * Hash: 0xC4D88A85
 */
export declare function giveToPed(ped: number | IPed, weaponHash: number | string, ammoCount: number, isHidden: boolean, bForceInHand: boolean): void;
/**
 * Parameter `p1` does not seem to be used or referenced in game binaries.\
 * **Note:** When called for networked entities, a `CRemoveAllWeaponsEvent` will be created per request.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_ALL_PED_WEAPONS](?\_0xF25DF915FA38C5F3).</strong>
 *
 * Hash: 0xA44CE817
 */
export declare function removeAllPeds(ped: number | IPed): void;
/**
 * REMOVE_WEAPON_COMPONENT_FROM_PED
 *
 * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_WEAPON_COMPONENT_FROM_PED](?\_0x1E8BE90C74FB4C09).</strong>
 *
 * Hash: 0x412AA00D
 */
export declare function removeComponentFromPed(ped: number | IPed, weaponHash: number | string, componentHash: number | string): void;
/**
 * ```
 * This native removes a specified weapon from your selected ped.
 * Weapon Hashes: pastebin.com/0wwDZgkF
 * Example:
 * C#:
 * Function.Call(Hash.REMOVE_WEAPON_FROM_PED, Game.Player.Character, 0x99B507EA);
 * C++:
 * `WEAPON::REMOVE_WEAPON_FROM_PED(PLAYER::PLAYER_PED_ID(), 0x99B507EA);`
 * The code above removes the knife from the player.
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_WEAPON_FROM_PED](?\_0x4899CB088EDF59B8).</strong>
 *
 * Hash: 0x9C37F220
 */
export declare function removeFromPed(ped: number | IPed, weaponHash: number | string): void;
