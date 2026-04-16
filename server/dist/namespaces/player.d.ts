import { Vector3, IPed, IPlayer } from '@risinglife/redm-shared';
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
 * Returns whether or not the specified player has enough information to start a commerce session for.
 *
 * Hash: 0x429461C3
 */
export declare function canStartCommerceSession(playerSrc: string): boolean;
/**
 * ```
 * `This executes at the same as speed as PLAYER::SET_PLAYER_WANTED_LEVEL(player, 0, false);`
 * `PLAYER::GET_PLAYER_WANTED_LEVEL(player); executes in less than half the time. Which means that it's worth first checking if the wanted level needs to be cleared before clearing. However, this is mostly about good code practice and can important in other situations. The difference in time in this example is negligible.`
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PLAYER_WANTED_LEVEL](?\_0xB302540597885499).</strong>
 *
 * Hash: 0x54EA5BCC
 */
export declare function clearWantedLevel(player: number | string | IPlayer): void;
/**
 * Returns whether or not the player exists
 *
 * Hash: 0x12038599
 */
export declare function doesExist(playerSrc: string): boolean;
/**
 * Requests whether or not the player owns the specified SKU.
 *
 * Hash: 0x167ABA27
 */
export declare function doesOwnSku(playerSrc: string, skuId: number): boolean;
/**
 * Requests whether or not the player owns the specified package.
 *
 * Hash: 0xDEF0480B
 */
export declare function doesOwnSkuExt(playerSrc: string, skuId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBA0613E1
 */
export declare function drop(playerSrc: string, reason: string): void;
/**
 * No comment provided
 *
 * Hash: 0x62FC38D0
 */
export declare function getAirDragMultiplierForsVehicle(playerSrc: string): number;
/**
 * No comment provided
 *
 * Hash: 0xFF7F66AB
 */
export declare function getNumIdentifiers(playerSrc: string): number;
/**
 * No comment provided
 *
 * Hash: 0x63D13184
 */
export declare function getNumIndices(): number;
/**
 * No comment provided
 *
 * Hash: 0x619E4A3D
 */
export declare function getNumTokens(playerSrc: string): number;
/**
 * Gets the current camera rotation for a specified player. This native is used server side when using OneSync.
 *
 * Hash: 0x433C765D
 */
export declare function getCameraRotation(playerSrc: string): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xFEE404F9
 */
export declare function getEndpoint(playerSrc: string): string;
/**
 * Gets the current fake wanted level for a specified player. This native is used server side when using OneSync.
 *
 * Hash: 0x98D244
 */
export declare function getFakeWantedLevel(playerSrc: string): number;
/**
 * Gets the focus position (i.e. the position of the active camera in the game world) of a player.
 *
 * Hash: 0x586F80FF
 */
export declare function getFocusPos(playerSrc: string): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xC8A9CE08
 */
export declare function getFromIndex(index: number): string;
/**
 * No comment provided
 *
 * Hash: 0xE52D9680
 */
export declare function getGuid(playerSrc: string): string;
/**
 * To get the number of identifiers, use [GET_NUM_PLAYER_IDENTIFIERS](#\_0xFF7F66AB)
 *
 * To get a specific type of identifier, use [GET_PLAYER_IDENTIFIER_BY_TYPE](#\_0xA61C8FC6)
 *
 * Hash: 0x7302DBCF
 */
export declare function getIdentifier(playerSrc: string, identiferIndex: number): string;
/**
 * Get an identifier from a player by the type of the identifier.
 * Known [Identifiers](https://docs.fivem.net/docs/scripting-reference/runtimes/lua/functions/GetPlayerIdentifiers/#identifier-types)
 *
 * Hash: 0xA61C8FC6
 */
export declare function getIdentifierByType(playerSrc: string, identifierType: string): string;
/**
 * No comment provided
 *
 * Hash: 0x680C90EE
 */
export declare function getInvincible(playerSrc: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x427E8E6A
 */
export declare function getLastMsg(playerSrc: string): number;
/**
 * No comment provided
 *
 * Hash: 0x2A50657
 */
export declare function getMaxArmour(playerSrc: string): number;
/**
 * No comment provided
 *
 * Hash: 0x8154E470
 */
export declare function getMaxHealth(playerSrc: string): number;
/**
 * No comment provided
 *
 * Hash: 0x406B4B20
 */
export declare function getName(playerSrc: string): string;
/**
 * Used to get the player's Ped Entity ID when a valid `playerSrc` is passed.
 *
 * Hash: 0x6E31E993
 */
export declare function getPed(playerSrc: string): number;
/**
 * ```cpp
 * const int ENET_PACKET_LOSS_SCALE = 65536;
 *
 * enum PeerStatistics
 * {
 * // PacketLoss will only update once every 10 seconds, use PacketLossEpoch if you want the time
 * // since the last time the packet loss was updated.
 *
 * // the amount of packet loss the player has, needs to be scaled with PACKET_LOSS_SCALE
 * PacketLoss = 0,
 * // The variance in the packet loss
 * PacketLossVariance = 1,
 * // The time since the last packet update in ms, relative to the peers connection time
 * PacketLossEpoch = 2,
 * // The mean amount of time it takes for a packet to get to the client (ping)
 * RoundTripTime = 3,
 * // The variance in the round trip time
 * RoundTripTimeVariance = 4,
 * // Despite their name, these are only updated once every 5 seconds, you can get the last time this was updated with PacketThrottleEpoch
 * // The last recorded round trip time of a packet
 * LastRoundTripTime = 5,
 * // The last round trip time variance
 * LastRoundTripTimeVariance = 6,
 * // The time since the last packet throttle update, relative to the peers connection time
 * PacketThrottleEpoch = 7,
 * };
 * ```
 *
 * These statistics only update once every 10 seconds.
 *
 * Hash: 0x9A928294
 */
export declare function getPeerStatistics(playerSrc: string, peerStatistic: number): number;
/**
 * See [GET_PLAYER_PEER_STATISTICS](#\_0x9A928294) if you want more detailed information, like packet loss, and packet/rtt variance
 *
 * Hash: 0xFF1290D4
 */
export declare function getPing(playerSrc: string): number;
/**
 * Gets the routing bucket for the specified player.
 *
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 *
 * Hash: 0x52441C34
 */
export declare function getRoutingBucket(playerSrc: string): number;
/**
 * No comment provided
 *
 * Hash: 0x9873E404
 */
export declare function getTeam(playerSrc: string): number;
/**
 * ```
 * Gets the amount of time player has spent evading the cops.
 * Counter starts and increments only when cops are chasing the player.
 * If the player is evading, the timer will pause.
 * ```
 *
 * Hash: 0x7ADE63E1
 */
export declare function getTimeInPursuit(playerSrc: string, lastPursuit: boolean): number;
/**
 * Gets the current time online for a specified player.
 *
 * Hash: 0x67D2E605
 */
export declare function getTimeOnline(playerSrc: string): number;
/**
 * Gets a player's token. Tokens can be used to enhance banning logic, however are specific to a server.
 *
 * Hash: 0x54C06897
 */
export declare function getToken(playerSrc: string, index: number): string;
/**
 * Gets the current known coordinates for the specified player from cops perspective. This native is used server side when using OneSync.
 *
 * Hash: 0x821F2D2C
 */
export declare function getWantedCentrePosition(playerSrc: string): Vector3;
/**
 * ```
 * Returns given players wanted level server-side.
 * ```
 *
 * Hash: 0xBDCDD163
 */
export declare function getWantedLevel(playerSrc: string): number;
/**
 * This native checks if the given ped is a player.
 *
 * Hash: 0x404794CA
 */
export declare function isPedA(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDEDAE23D
 */
export declare function isAceAllowed(playerSrc: string, _object: string): boolean;
/**
 * Requests whether or not the commerce data for the specified player has loaded.
 *
 * Hash: 0xBEFE93F4
 */
export declare function isCommerceInfoLoaded(playerSrc: string): boolean;
/**
 * Requests whether or not the commerce data for the specified player has loaded from Tebex.
 *
 * Hash: 0x1D14F4FE
 */
export declare function isCommerceInfoLoadedExt(playerSrc: string): boolean;
/**
 * ```
 * This will return true if the player is evading wanted level, meaning that the wanted level stars are blink.
 * Otherwise will return false.
 *
 * If the player is not wanted, it simply returns false.
 * ```
 *
 * Hash: 0x89A3881A
 */
export declare function isEvadingWantedLevel(playerSrc: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1F14F2AC
 */
export declare function isInFreeCamMode(playerSrc: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC7D2C20C
 */
export declare function isUsingSuperJump(playerSrc: string): boolean;
/**
 * Requests the commerce data for the specified player, including the owned SKUs. Use `IS_PLAYER_COMMERCE_INFO_LOADED` to check if it has loaded.
 *
 * Hash: 0xA8F63EAB
 */
export declare function loadCommerceData(playerSrc: string): void;
/**
 * Requests the commerce data from Tebex for the specified player, including the owned SKUs.
 *
 * Use [`IS_PLAYER_COMMERCE_INFO_LOADED_EXT`](#\_0x1D14F4FE) to check if it has loaded.
 *
 * This will not automatically update whenever a client purchases a package, if you want to fetch new purchases you will need to call this native again.
 *
 * This native will temporarily cache the players commerce data for 10 seconds, a call to this native after 10 seconds will re-fetch the players commerce data.
 *
 * Hash: 0x7995539E
 */
export declare function loadCommerceDataExt(playerSrc: string): void;
/**
 * Requests the specified player to buy the passed SKU. This'll pop up a prompt on the client, which upon acceptance
 * will open the browser prompting further purchase details.
 *
 * Hash: 0x96F93CCE
 */
export declare function requestCommerceSession(playerSrc: string, skuId: number): void;
/**
 * ```
 * Flags:
 * SPC_AMBIENT_SCRIPT = (1 << 1),
 * SPC_CLEAR_TASKS = (1 << 2),
 * SPC_REMOVE_FIRES = (1 << 3),
 * SPC_REMOVE_EXPLOSIONS = (1 << 4),
 * SPC_REMOVE_PROJECTILES = (1 << 5),
 * SPC_DEACTIVATE_GADGETS = (1 << 6),
 * SPC_REENABLE_CONTROL_ON_DEATH = (1 << 7),
 * SPC_LEAVE_CAMERA_CONTROL_ON = (1 << 8),
 * SPC_ALLOW_PLAYER_DAMAGE = (1 << 9),
 * SPC_DONT_STOP_OTHER_CARS_AROUND_PLAYER = (1 << 10),
 * SPC_PREVENT_EVERYBODY_BACKOFF = (1 << 11),
 * SPC_ALLOW_PAD_SHAKE = (1 << 12)
 * See: https://alloc8or.re/gta5/doc/enums/eSetPlayerControlFlag.txt
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_CONTROL](?\_0x8D32347D6D4C40A2).</strong>
 *
 * Hash: 0xD17AFCD8
 */
export declare function setControl(player: number | string | IPlayer, bHasControl: boolean, flags: number): void;
/**
 * Sets the culling radius for the specified player.
 * Set to `0.0` to reset.
 *
 * **WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
 *
 * Hash: 0x8A2FBAD4
 */
export declare function setCullingRadius(playerSrc: string, radius: number): void;
/**
 * Make the player impervious to all forms of damage.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_INVINCIBLE](?\_0x239528EACDC3E7DE).</strong>
 *
 * Hash: 0xDFB9A2A2
 */
export declare function setInvincible(player: number | string | IPlayer, bInvincible: boolean): void;
/**
 * Set the model for a specific Player. Note that this will destroy the current Ped for the Player and create a new one, any reference to the old ped will be invalid after calling this.
 * As per usual, make sure to request the model first and wait until it has loaded.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_MODEL](?\_0x00A1CADD00108836).</strong>
 *
 * Hash: 0x774A4C54
 */
export declare function setModel(player: number | string | IPlayer, model: number | string): void;
/**
 * Sets the routing bucket for the specified player.
 *
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 *
 * Hash: 0x6504EB38
 */
export declare function setRoutingBucket(playerSrc: string, bucket: number): void;
/**
 * SET_PLAYER_WANTED_LEVEL
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_WANTED_LEVEL](?\_0x39FF19C64EF7DA5B).</strong>
 *
 * Hash: 0xB7A0914B
 */
export declare function setWantedLevel(player: number | string | IPlayer, wantedLevel: number, delayedResponse: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1E35DBBA
 */
export declare function tempBan(playerSrc: string, reason: string): void;
/**
 * On the server this will return the players source, on the client it will return the player handle.
 *
 * Hash: 0xA56135E0
 */
export declare function getFromStateBagName(bagName: string): number;
