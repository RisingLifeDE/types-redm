import { Vector3, IEntity, IPed, IPlayer, IVehicle } from '@risinglife/redm-shared';
/**
 * Unlike [GET_PLAYER_INVINCIBLE](#\_0xB721981B2B939E07) this native gets both [SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED](#\_0x6BC97F4F4BB3C04B) and [SET_PLAYER_INVINCIBLE](#\_0x239528EACDC3E7DE) invincibility state.
 *
 * Hash: 0xF2E3912B | Since: unknown | API-Set: client
 */
export declare function getInvincible2(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD014AB79 | Since: unknown | API-Set: client
 */
export declare function getMaxStamina(playerId: number | string | IPlayer): number;
/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER](#\_0xAE540335B4ABC4E2).
 *
 * Hash: 0x27E94EF8 | Since: unknown | API-Set: client
 */
export declare function getMeleeWeaponDefenseModifier(playerId: number | string | IPlayer): number;
/**
 * A getter for [SET_PLAYER_VEHICLE_DAMAGE_MODIFIER](#\_0xA50E117CDDF82F0C).
 *
 * Hash: 0x78F27B1F | Since: unknown | API-Set: client
 */
export declare function getVehicleDamageModifier(playerId: number | string | IPlayer): number;
/**
 * A getter for [SET_PLAYER_VEHICLE_DEFENSE_MODIFIER](#\_0x4C60E6EFDAFF2462).
 *
 * Hash: 0x8326E7CD | Since: unknown | API-Set: client
 */
export declare function getVehicleDefenseModifier(playerId: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0x35594F67 | Since: unknown | API-Set: client
 */
export declare function setMaxStamina(playerId: number | string | IPlayer, maxStamina: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA9EC16C7 | Since: unknown | API-Set: client
 */
export declare function setStamina(playerId: number | string | IPlayer, stamina: number): boolean;
/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
 *
 * Hash: 0x8689A825 | Since: unknown | API-Set: shared
 */
export declare function getMeleeWeaponDamageModifier(playerId: number | string | IPlayer): number;
/**
 * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
 *
 * Hash: 0x2A3D7CDA | Since: unknown | API-Set: shared
 */
export declare function getWeaponDamageModifier(playerId: number | string | IPlayer): number;
/**
 * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
 *
 * Hash: 0xF1543251 | Since: unknown | API-Set: shared
 */
export declare function getWeaponDefenseModifier(playerId: number | string | IPlayer): number;
/**
 * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
 *
 * Hash: 0x986B65FF | Since: unknown | API-Set: shared
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
 * Hash: 0xCF143FB9 | Since: unknown | API-Set: client
 */
export declare function getActives(): number;
/**
 * Gets a local client's Player ID from its server ID counterpart, assuming the passed `serverId` exists on the client.
 *
 * If no matching client is found, or an invalid value is passed over as the `serverId` native's parameter, the native result will be `-1`.
 *
 * It's worth noting that this native method can only retrieve information about clients that are culled to the connected client.
 *
 * Hash: 0x344EA166 | Since: unknown | API-Set: client
 */
export declare function getFromServerId(serverId: number): number | string;
/**
 * No comment provided
 *
 * Hash: 0x4D97BCC7 | Since: unknown | API-Set: client
 */
export declare function getServerId(player: number | string | IPlayer): number;
/**
 * the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.
 * This function doesn't need to be called every frame, it works like a switcher.
 *
 * Hash: 0xFC02CAF6 | Since: unknown | API-Set: client
 */
export declare function setTalkingOverride(player: number | string | IPlayer, state: boolean): void;
/**
 * On the server this will return the players source, on the client it will return the player handle.
 *
 * Hash: 0xA56135E0 | Since: unknown | API-Set: shared
 */
export declare function getFromStateBagName(bagName: string): number;
/**
 * No comment provided
 *
 * Hash: 0x09C28F828EE674FA | Since: 1207 | API-Set: unknown
 */
export declare function boostHorseSpeedForTime(player: number | string | IPlayer, speedBoost: number, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2DF170B1185AF777 | Since: 1207 | API-Set: unknown
 */
export declare function canStartMission(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0361096D6CE4372C | Since: 1207 | API-Set: unknown
 */
export declare function clearHasDamagedAtLeastOneNonAnimalPed(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x270B63A641BE32F2 | Since: 1207 | API-Set: unknown
 */
export declare function clearHasDamagedAtLeastOnePed(player: number | string | IPlayer): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x4E4B996C928C7AA6 | Since: 1207 | API-Set: unknown
 */
export declare function clearWantedLevel(player: number | string | IPlayer): void;
/**
 * Inhibits the player from using any method of combat including melee and firearms.
 *
 * NOTE: Only disables the firing for one frame
 *
 * Hash: 0x2970929FD5F9FC89 | Since: 1207 | API-Set: unknown
 */
export declare function disableFiring(player: number | string | IPlayer, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x62ED71E133B6C9F1 | Since: 1207 | API-Set: unknown
 */
export declare function eagleEyeSetCustomEntityTint(entity: number | IEntity, red: number, green: number, blue: number): void;
/**
 * No comment provided
 *
 * Hash: 0x768C017FB878E4F4 | Since: 1207 | API-Set: unknown
 */
export declare function forceCleanup(cleanupFlags: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDAACAF8B687F2353 | Since: 1207 | API-Set: unknown
 */
export declare function forceCleanupForAllThreadsWithThisName(cleanupFlags: number): string;
/**
 * No comment provided
 *
 * Hash: 0xF4C9512A2F0A3031 | Since: 1207 | API-Set: unknown
 */
export declare function forceCleanupForThreadWithThisId(id: number, cleanupFlags: number): void;
/**
 * No comment provided
 *
 * Hash: 0x84E8E29EBD4A46D2 | Since: 1207 | API-Set: unknown
 */
export declare function getCauseOfMostRecentForceCleanup(): number;
/**
 * Returns name hash (name) and outHash includes the type.
 *
 * Hash: 0x0139637A3BFF8B6D | Since: 1207 | API-Set: unknown
 */
export declare function getDiscoverableNameHashAndTypeForEntity(entity: number | IEntity): [number, number];
/**
 * No comment provided
 *
 * Hash: 0xA6817C110B830EAD | Since: 1207 | API-Set: unknown
 */
export declare function getEntityIsFreeAimingAt(player: number | string | IPlayer): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x354F689C4FFAAB37 | Since: 1207 | API-Set: unknown
 */
export declare function getHasDiscoveredCharacterNameMp(discoveryHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x51BEA356B1C60225 | Since: 1207 | API-Set: unknown
 */
export declare function getIsUiPromptActive(player: number | string | IPlayer): boolean;
/**
 * Gets the maximum wanted level the player can get.
 * Ranges from 0 to 5.
 *
 * Hash: 0xD04CFAD1E2B7984A | Since: 1207 | API-Set: unknown
 */
export declare function getMaxWantedLevel(): number;
/**
 * No comment provided
 *
 * Hash: 0xF49F14462F0AE27C | Since: 1207 | API-Set: unknown
 */
export declare function getMountOwnedBy(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0x2F96E7720B0B19EA | Since: 1207 | API-Set: unknown
 */
export declare function getsLastVehicle(): number;
/**
 * No comment provided
 *
 * Hash: 0xD7ECC25E176ECBA5 | Since: 1207 | API-Set: unknown
 */
export declare function getCurrentStealthNoise(player: number | string | IPlayer): number;
/**
 * Returns the group ID the player is member of.
 *
 * Hash: 0x9BAB31815159ABCF | Since: 1207 | API-Set: unknown
 */
export declare function getGroup(player: number | string | IPlayer): number;
/**
 * Returns the same as PLAYER_ID and NETWORK_PLAYER_ID_TO_INT
 *
 * Hash: 0x47E385B0D957C8D4 | Since: 1207 | API-Set: unknown
 */
export declare function getIndex(): number | string;
/**
 * No comment provided
 *
 * Hash: 0x3EE1F7A8C32F24E1 | Since: 1207 | API-Set: unknown
 */
export declare function getInteractionTargetEntity(player: number | string | IPlayer): [boolean, number];
/**
 * Returns the player's invincibility status.
 *
 * Hash: 0x0CBBCB2CCFA7DC4E | Since: 1207 | API-Set: unknown
 */
export declare function getInvincible(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7124FD9AC0E01BA0 | Since: 1207 | API-Set: unknown
 */
export declare function getName(player: number | string | IPlayer): string;
/**
 * No comment provided
 *
 * Hash: 0x275F255ED201B937 | Since: 1207 | API-Set: unknown
 */
export declare function getPed(player: number | string | IPlayer): number;
/**
 * `Does the same like PLAYER::GET_PLAYER_PED`
 *
 * Hash: 0x5C880F9056D784C8 | Since: 1207 | API-Set: unknown
 */
export declare function getPedScriptIndex(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0xFB6EB8785F808551 | Since: 1207 | API-Set: unknown
 */
export declare function getReceivedBattleEventRecently(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAE663DDD99C8A670 | Since: 1207 | API-Set: unknown
 */
export declare function getTargetEntity(player: number | string | IPlayer): [boolean, number];
/**
 * Gets the player's team.
 * Returns -1 in singleplayer.
 *
 * Hash: 0xB464EB6A40C7975B | Since: 1207 | API-Set: unknown
 */
export declare function getTeam(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0xABC532F9098BFD9D | Since: 1207 | API-Set: unknown
 */
export declare function getWantedLevel(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0x36E3D8B5A6552FE8 | Since: 1207 | API-Set: unknown
 */
export declare function getTargetCharacterNameForLocal(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x0335106F3ACABBED | Since: 1207 | API-Set: unknown
 */
export declare function getTargetCharacterNameScriptOverrideHash(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x755E08680F21EF30 | Since: 1207 | API-Set: unknown
 */
export declare function getTargetCharacterNameScriptOverrideRawString(ped: number | IPed): string;
/**
 * No comment provided
 *
 * Hash: 0x80B00EB26D9521C7 | Since: 1207 | API-Set: unknown
 */
export declare function getWantedLevelRadius(): number;
/**
 * No comment provided
 *
 * Hash: 0x1B1A3B358F7D8F07 | Since: 1207 | API-Set: unknown
 */
export declare function getWantedLevelThreshold(wantedLevel: number): number;
/**
 * No comment provided
 *
 * Hash: 0xC11469DCA6FC3BB5 | Since: 1207 | API-Set: unknown
 */
export declare function hasForceCleanupOccurred(cleanupFlags: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC932F57F31EA9152 | Since: 1207 | API-Set: unknown
 */
export declare function hasBeenSpottedInStolenVehicle(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0x16C8D205DD5A2E90 | Since: 1207 | API-Set: unknown
 */
export declare function hasDamagedAtLeastOneNonAnimalPed(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDA4A4B9B96E20092 | Since: 1207 | API-Set: unknown
 */
export declare function hasDamagedAtLeastOnePed(player: number | string | IPlayer): boolean;
/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 *
 * Hash: 0x58FF971FC8F2702C | Since: 1207 | API-Set: unknown
 */
export declare function intToParticipantindex(value: number): number;
/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 *
 * Hash: 0x748B3A65C2604C33 | Since: 1207 | API-Set: unknown
 */
export declare function intToindex(value: number): number | string;
/**
 * Return true while player is being arrested / busted.
 *
 * If atArresting is set to 1, this function will return 1 when player is being arrested (while player is putting his hand up, but still have control)
 *
 * If atArresting is set to 0, this function will return 1 only when the busted screen is shown.
 *
 * Hash: 0xC8183AE963C58374 | Since: 1207 | API-Set: unknown
 */
export declare function isBeingArrested(player: number | string | IPlayer, atArresting: boolean): boolean;
/**
 * Returns TRUE if the player ('s ped) is climbing at the moment.
 *
 * Hash: 0xB8A70C22FD48197A | Since: 1207 | API-Set: unknown
 */
export declare function isClimbing(player: number | string | IPlayer): boolean;
/**
 * Returns whether the player can control himself.
 *
 * Hash: 0x7964097FCE4C244B | Since: 1207 | API-Set: unknown
 */
export declare function isControlOn(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2E9C3FCB6798F397 | Since: 1207 | API-Set: unknown
 */
export declare function isDead(player: number | string | IPlayer): boolean;
/**
 * Gets a value indicating whether the specified player is currently aiming freely.
 *
 * Hash: 0x936F967D4BE1CE9D | Since: 1207 | API-Set: unknown
 */
export declare function isFreeAiming(player: number | string | IPlayer): boolean;
/**
 * Gets a value indicating whether the specified player is currently aiming freely at the specified entity.
 *
 * Hash: 0x8C67C11C68713D25 | Since: 1207 | API-Set: unknown
 */
export declare function isFreeAimingAtEntity(player: number | string | IPlayer, entity: number | IEntity): boolean;
/**
 * Checks whether the specified player has a Ped, the Ped is not dead, is not injured and is not arrested.
 *
 * Hash: 0xBFFB35986CAAE58C | Since: 1207 | API-Set: unknown
 */
export declare function isPlaying(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAA67BCB0097F2FA3 | Since: 1207 | API-Set: unknown
 */
export declare function isReadyForCutscene(player: number | string | IPlayer): boolean;
/**
 * Returns true if the player is riding a train.
 *
 * Hash: 0x2FB0ACADA6A238DD | Since: 1207 | API-Set: unknown
 */
export declare function isRidingTrain(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB78350754157C00F | Since: 1207 | API-Set: unknown
 */
export declare function isScriptControlOn(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4605C66E0F935F83 | Since: 1207 | API-Set: unknown
 */
export declare function isTargettingAnything(player: number | string | IPlayer): boolean;
/**
 * p2 will return true if player is targetting entity with a weapon if false will return true if player is targetting entity without a weapon
 *
 * Hash: 0x27F89FDC16688A7A | Since: 1207 | API-Set: unknown
 */
export declare function isTargettingEntity(player: number | string | IPlayer, entity: number | IEntity, withWeapon: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x085EEAEB8783FEB5 | Since: 1207 | API-Set: unknown
 */
export declare function isTeleportActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE1C0AD4C24324C36 | Since: 1207 | API-Set: unknown
 */
export declare function isWantedLevelGreater(player: number | string | IPlayer, wantedLevel: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x908258B6209E71F7 | Since: 1207 | API-Set: unknown
 */
export declare function isSystemUiBeingDisplayed(): boolean;
/**
 * Does exactly the same thing as PLAYER_ID()
 *
 * Hash: 0x8A9386F0749A17FA | Since: 1207 | API-Set: unknown
 */
export declare function networkIdToInt(): number;
/**
 * This returns YOUR 'identity' as a Player type.
 *
 * Always returns 0 in story mode.
 *
 * Hash: 0x217E9DC48139933D | Since: 1207 | API-Set: unknown
 */
export declare function id(): number | string;
/**
 * Returns current player ped
 *
 * Hash: 0x096275889B8E0EE0 | Since: 1207 | API-Set: unknown
 */
export declare function pedId(): number;
/**
 * No comment provided
 *
 * Hash: 0xCBCCF73FFA69CC6B | Since: 1207 | API-Set: unknown
 */
export declare function reportPoliceSpotted(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x5CE5CACC01D0F985 | Since: 1207 | API-Set: unknown
 */
export declare function resetLawResponseDelayOverride(): void;
/**
 * No comment provided
 *
 * Hash: 0x12917931C31F1750 | Since: 1207 | API-Set: unknown
 */
export declare function resetArrestState(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x61A2EECAB274829B | Since: 1207 | API-Set: unknown
 */
export declare function resetInputGait(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x062D14F18E8B0CAE | Since: 1207 | API-Set: unknown
 */
export declare function resetWantedLevelDifficulty(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0xC41F4B6E23FE6A4A | Since: 1207 | API-Set: unknown
 */
export declare function restoreStamina(player: number | string | IPlayer): void;
/**
 * This can be between 1.0f - 50.0f
 *
 * Hash: 0x5DA6500FE849DA16 | Since: 1207 | API-Set: unknown
 */
export declare function setAirDragMultiplierForsVehicle(player: number | string | IPlayer, multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x16752DAA7E6D3F72 | Since: 1207 | API-Set: unknown
 */
export declare function setAllNeutralRandomPedsFleeThisFrame(player: number | string | IPlayer): void;
/**
 * Sets whether all random peds will run away from player if they are agitated (threatened) (bool=true), or some peds can stand up for themselves (bool=false).
 *
 * Hash: 0xE705309B8C6445A4 | Since: 1207 | API-Set: unknown
 */
export declare function setAllRandomPedsFlee(player: number | string | IPlayer, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xD5C198A62F1DEB0A | Since: 1207 | API-Set: unknown
 */
export declare function setAllRandomPedsFleeThisFrame(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x34630A768925B852 | Since: 1207 | API-Set: unknown
 */
export declare function setEveryoneIgnore(player: number | string | IPlayer, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xD2DFC9CCA5596A11 | Since: 1207 | API-Set: unknown
 */
export declare function setLawResponseDelayOverride(): void;
/**
 * No comment provided
 *
 * Hash: 0x4A056257802DD3E5 | Since: 1207 | API-Set: unknown
 */
export declare function setLockonToFriendlys(player: number | string | IPlayer, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x28A4BD2CEE236E19 | Since: 1207 | API-Set: unknown
 */
export declare function setMaxWantedLevel(maxWantedLevel: number): void;
/**
 * No comment provided
 *
 * Hash: 0x506CE71FB6E8CF5E | Since: 1207 | API-Set: unknown
 */
export declare function setMinTimeBeforeHorseBucking(mount: number | IPed, iMinBuckTime: number): void;
/**
 * No comment provided
 *
 * Hash: 0x227B06324234FB09 | Since: 1207 | API-Set: unknown
 */
export declare function setPedAsTempHorse(player: number | string | IPlayer, horse: number | IPed): boolean;
/**
 * Sets whether this player can be hassled by gangs.
 *
 * Hash: 0xC7FE774412046825 | Since: 1207 | API-Set: unknown
 */
export declare function setCanBeHassledByGangs(player: number | string | IPlayer, toggle: boolean): void;
/**
 * Sets whether this player can take cover.
 *
 * Hash: 0x5EDA520F7A3BAF4E | Since: 1207 | API-Set: unknown
 */
export declare function setCanUseCover(player: number | string | IPlayer, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xD0D9317DFEEF9A66 | Since: 1207 | API-Set: unknown
 */
export declare function setClothPinFrames(ped: number | IPed): void;
/**
 * flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eSetPlayerControlFlags
 *
 * Hash: 0x4D51E59243281D80 | Since: 1207 | API-Set: unknown
 */
export declare function setControl(player: number | string | IPlayer, toggle: boolean, flags: number, bPreventHeadingChange: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xD5FCC166AEB2FD0F | Since: 1207 | API-Set: unknown
 */
export declare function setForcedAim(player: number | string | IPlayer, toggle: boolean, ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x8899C244EBCF70DE | Since: 1207 | API-Set: unknown
 */
export declare function setHealthRechargeMultiplier(player: number | string | IPlayer, regenRate: number): void;
/**
 * Simply sets you as invincible (Health will not deplete).
 *
 * Hash: 0xFEBEEBC9CBDF4B12 | Since: 1207 | API-Set: unknown
 */
export declare function setInvincible(player: number | string | IPlayer, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x462AA1973CBBA75E | Since: 1207 | API-Set: unknown
 */
export declare function setLockon(player: number | string | IPlayer, toggle: boolean): void;
/**
 * Affects the range of auto aim target.
 *
 * Hash: 0x3A3CD06597388322 | Since: 1207 | API-Set: unknown
 */
export declare function setLockonRangeOverride(player: number | string | IPlayer, range: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBEC463B3A11C909E | Since: 1207 | API-Set: unknown
 */
export declare function setMayNotEnterAnyVehicle(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0xDA35A134038557EC | Since: 1207 | API-Set: unknown
 */
export declare function setMayOnlyEnterThisVehicle(player: number | string | IPlayer, vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xE4CB5A3F18170381 | Since: 1207 | API-Set: unknown
 */
export declare function setMeleeWeaponDamageModifier(player: number | string | IPlayer, modifier: number): void;
/**
 * Make sure to request the model first and wait until it has loaded.
 *
 * Hash: 0xED40380076A31506 | Since: 1207 | API-Set: unknown
 */
export declare function setModel(player: number | string | IPlayer, modelHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xB5EC6BDAEBCA454C | Since: 1207 | API-Set: unknown
 */
export declare function setNoiseMultiplier(player: number | string | IPlayer, multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE0447DEF81CCDFD2 | Since: 1207 | API-Set: unknown
 */
export declare function setSimulateAiming(player: number | string | IPlayer, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x4DE44FA389DCA565 | Since: 1207 | API-Set: unknown
 */
export declare function setSneakingNoiseMultiplier(player: number | string | IPlayer, multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFECA17CF3343694B | Since: 1207 | API-Set: unknown
 */
export declare function setStaminaRechargeMultiplier(player: number | string | IPlayer, multiplier: number): void;
/**
 * Sets your targeting mode for when you're on foot.
 * enum eTargetingMode
 * {
 * TARGETING_MODE_INVALID = -1,
 * TARGETING_MODE_CAUSAL, (Wide)
 * TARGETING_MODE_NORMAL,
 * TARGETING_MODE_HARD, (Narrow)
 * TARGETING_MODE_EXPERT (Free Aim)
 * };
 *
 * Hash: 0xD66A941F401E7302 | Since: 1207 | API-Set: unknown
 */
export declare function setTargetingMode(targetMode: number): void;
/**
 * Sets the player's team.
 *
 * Hash: 0xE8DD8536F01DE600 | Since: 1207 | API-Set: unknown
 */
export declare function setTeam(player: number | string | IPlayer, team: number, bRestrictToThisScript: boolean): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x384D4765395E006C | Since: 1207 | API-Set: unknown
 */
export declare function setWantedLevel(player: number | string | IPlayer, wantedLevel: number, disableNoMission: boolean): void;
/**
 * This modifies the damage value of your weapon. Whether it is a multiplier or base damage is unknown.
 *
 * Hash: 0x94D529F7B73D7A85 | Since: 1207 | API-Set: unknown
 */
export declare function setWeaponDamageModifier(player: number | string | IPlayer, modifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD15CC2D493160BE3 | Since: 1207 | API-Set: unknown
 */
export declare function setWeaponDefenseModifier(player: number | string | IPlayer, modifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD04AD186CE8BB129 | Since: 1207 | API-Set: unknown
 */
export declare function setWeaponTypeDamageModifier(player: number | string | IPlayer, weaponHash: number | string, damageModifier: number): void;
/**
 * If toggle is set to false:
 * The police won't be shown on the (mini)map
 *
 * If toggle is set to true:
 * The police will be shown on the (mini)map
 *
 * Hash: 0x6FD7DD6B63F2820E | Since: 1207 | API-Set: unknown
 */
export declare function setPoliceRadarBlips(toggle: boolean): void;
/**
 * Swim speed multiplier.
 * Multiplier goes up to 1.49f
 *
 * Hash: 0xBFCEABDE34DA5085 | Since: 1207 | API-Set: unknown
 */
export declare function setSwimMultiplierFor(player: number | string | IPlayer, multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD7FA719CB54866C2 | Since: 1207 | API-Set: unknown
 */
export declare function setWantedLevelMultiplier(multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFA0C063C422C4355 | Since: 1207 | API-Set: unknown
 */
export declare function simulateInputGait(player: number | string | IPlayer, speed: number, duration: number, heading: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDF8822C55EDDA65B | Since: 1207 | API-Set: unknown
 */
export declare function startTeleport(player: number | string | IPlayer, pos: Vector3, heading: number): void;
/**
 * Disables the player's teleportation
 *
 * Hash: 0x0858B86146601BE8 | Since: 1207 | API-Set: unknown
 */
export declare function stopTeleport(): void;
/**
 * No comment provided
 *
 * Hash: 0x96722257E5381E00 | Since: 1207 | API-Set: unknown
 */
export declare function suppressWitnessesCallingPoliceThisFrame(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0xC39DCE4672CBFBC1 | Since: 1207 | API-Set: unknown
 */
export declare function updateTeleport(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD0B0B044112BF424 | Since: 1207 | API-Set: unknown
 */
export declare function updateWantedPositionThisFrame(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x00B156AFEBCC5AE0 | Since: 1207 | API-Set: unknown
 */
export declare function _0x00B156AFEBCC5AE0(): void;
/**
 * No comment provided
 *
 * Hash: 0x03B4B759A8990505 | Since: 1207 | API-Set: unknown
 */
export declare function _0x03B4B759A8990505(): any;
/**
 * No comment provided
 *
 * Hash: 0x06E1FB78B1E59CA5 | Since: 1207 | API-Set: unknown
 */
export declare function _0x06E1FB78B1E59CA5(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x086549F3B0381CB1 | Since: 1207 | API-Set: unknown
 */
export declare function _0x086549F3B0381CB1(): void;
/**
 * No comment provided
 *
 * Hash: 0x0869D499A7848309 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0869D499A7848309(): void;
/**
 * _SET_PLAYER_*? some multiplier or modifier for health or statmina ?
 *
 * Hash: 0x08E22898A6AF4905 | Since: 1207 | API-Set: unknown
 */
export declare function _0x08E22898A6AF4905(player: number | string | IPlayer): void;
/**
 * Hardcoded to return zero/false.
 *
 * Hash: 0x0B7803F6F7BB43E0 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0B7803F6F7BB43E0(): any;
/**
 * No comment provided
 *
 * Hash: 0x0F4EAF69DA41AF43 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0F4EAF69DA41AF43(): any;
/**
 * No comment provided
 *
 * Hash: 0x0F9CF06986300875 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0F9CF06986300875(): void;
/**
 * No comment provided
 *
 * Hash: 0x107F2A66E1C4C83A | Since: 1207 | API-Set: unknown
 */
export declare function _0x107F2A66E1C4C83A(): void;
/**
 * No comment provided
 *
 * Hash: 0x113EF458AB6CDA67 | Since: 1207 | API-Set: unknown
 */
export declare function _0x113EF458AB6CDA67(): void;
/**
 * No comment provided
 *
 * Hash: 0x12E09E278C6C29B7 | Since: 1207 | API-Set: unknown
 */
export declare function _0x12E09E278C6C29B7(): void;
/**
 * No comment provided
 *
 * Hash: 0x14E57F88BA0A07FC | Since: 1207 | API-Set: unknown
 */
export declare function _0x14E57F88BA0A07FC(location: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x19B2C7A6C34FAD54 | Since: 1207 | API-Set: unknown
 */
export declare function _0x19B2C7A6C34FAD54(): any;
/**
 * No comment provided
 *
 * Hash: 0x1AD8AD999C27F44A | Since: 1311 | API-Set: unknown
 */
export declare function _0x1AD8AD999C27F44A(): void;
/**
 * No comment provided
 *
 * Hash: 0x1D256EED194F5B58 | Since: 1207 | API-Set: unknown
 */
export declare function _0x1D256EED194F5B58(): void;
/**
 * No comment provided
 *
 * Hash: 0x1E8099F449ABB0BA | Since: 1207 | API-Set: unknown
 */
export declare function _0x1E8099F449ABB0BA(): any;
/**
 * _RESET_PLAYER_A* - _RESET_PLAYER_I*
 *
 * Hash: 0x1F488807BC8E0630 | Since: 1207 | API-Set: unknown
 */
export declare function _0x1F488807BC8E0630(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x1FDA57E8908F2609 | Since: 1207 | API-Set: unknown
 */
export declare function _0x1FDA57E8908F2609(player: number | string | IPlayer, ped: number | IPed, useSteerassist: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x21091B4BEB6376EE | Since: 1207 | API-Set: unknown
 */
export declare function _0x21091B4BEB6376EE(): any;
/**
 * No comment provided
 *
 * Hash: 0x216BC0D3D2E413D2 | Since: 1207 | API-Set: unknown
 */
export declare function _0x216BC0D3D2E413D2(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x22B3CABEDDB538B2 | Since: 1207 | API-Set: unknown
 */
export declare function _0x22B3CABEDDB538B2(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x263D69767F76059C | Since: 1207 | API-Set: unknown
 */
export declare function _0x263D69767F76059C(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x2BB8D58E88777499 | Since: 1207 | API-Set: unknown
 */
export declare function _0x2BB8D58E88777499(): void;
/**
 * No comment provided
 *
 * Hash: 0x2BEED53B912537D0 | Since: 1207 | API-Set: unknown
 */
export declare function _0x2BEED53B912537D0(): void;
/**
 * No comment provided
 *
 * Hash: 0x2C2D287748E8E9B7 | Since: 1207 | API-Set: unknown
 */
export declare function _0x2C2D287748E8E9B7(): void;
/**
 * No comment provided
 *
 * Hash: 0x2E1ABE627C95ED9B | Since: 1207 | API-Set: unknown
 */
export declare function _0x2E1ABE627C95ED9B(): any;
/**
 * No comment provided
 *
 * Hash: 0x2E67707BEC52CA4B | Since: 1207 | API-Set: unknown
 */
export declare function _0x2E67707BEC52CA4B(): void;
/**
 * No comment provided
 *
 * Hash: 0x310CE349E0C0EC4B | Since: 1207 | API-Set: unknown
 */
export declare function _0x310CE349E0C0EC4B(player: number | string | IPlayer, ped: number | IPed): void;
/**
 * Only used in script function UPDATE_PLAYER_JUST_DIED_STATE
 *
 * Hash: 0x325434C68358D282 | Since: 1207 | API-Set: unknown
 */
export declare function _0x325434C68358D282(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x35A33783EC3C3448 | Since: 1311 | API-Set: unknown
 */
export declare function _0x35A33783EC3C3448(): void;
/**
 * No comment provided
 *
 * Hash: 0x39D8D7082BC34B72 | Since: 1311 | API-Set: unknown
 */
export declare function _0x39D8D7082BC34B72(): void;
/**
 * No comment provided
 *
 * Hash: 0x3A8611BD7BDE84F7 | Since: 1207 | API-Set: unknown
 */
export declare function _0x3A8611BD7BDE84F7(): void;
/**
 * Used in script function INIT_DEADEYE_SLOWDOWN
 *
 * Hash: 0x3ACAC8832E77BC93 | Since: 1207 | API-Set: unknown
 */
export declare function _0x3ACAC8832E77BC93(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x3AD212429E095EFB | Since: 1207 | API-Set: unknown
 */
export declare function _0x3AD212429E095EFB(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x3B296934DB026873 | Since: 1207 | API-Set: unknown
 */
export declare function _0x3B296934DB026873(): void;
/**
 * No comment provided
 *
 * Hash: 0x3BB84F812E052C90 | Since: 1207 | API-Set: unknown
 */
export declare function _0x3BB84F812E052C90(): void;
/**
 * No comment provided
 *
 * Hash: 0x3C4AE8506638C7E2 | Since: 1207 | API-Set: unknown
 */
export declare function _0x3C4AE8506638C7E2(): void;
/**
 * No comment provided
 *
 * Hash: 0x3D9DA5C9EFD20D88 | Since: 1207 | API-Set: unknown
 */
export declare function _0x3D9DA5C9EFD20D88(): void;
/**
 * No comment provided
 *
 * Hash: 0x3DAABE78A23694BC | Since: 1207 | API-Set: unknown
 */
export declare function _0x3DAABE78A23694BC(): void;
/**
 * No comment provided
 *
 * Hash: 0x45EF176B532CA851 | Since: 1207 | API-Set: unknown
 */
export declare function _0x45EF176B532CA851(): void;
/**
 * No comment provided
 *
 * Hash: 0x497A18F8F88AA9D8 | Since: 1207 | API-Set: unknown
 */
export declare function _0x497A18F8F88AA9D8(): void;
/**
 * _SET_SPECIAL_ABILITY_*
 *
 * Hash: 0x4D1699543B1C023C | Since: 1207 | API-Set: unknown
 */
export declare function _0x4D1699543B1C023C(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x4DBC4873707E8FD6 | Since: 1207 | API-Set: unknown
 */
export declare function _0x4DBC4873707E8FD6(): void;
/**
 * No comment provided
 *
 * Hash: 0x4EC8BE63B8A5D4EF | Since: 1207 | API-Set: unknown
 */
export declare function _0x4EC8BE63B8A5D4EF(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x4F0D2256AAE94EDA | Since: 1207 | API-Set: unknown
 */
export declare function _0x4F0D2256AAE94EDA(): void;
/**
 * No comment provided
 *
 * Hash: 0x51139D8C17B16FBC | Since: 1207 | API-Set: unknown
 */
export declare function _0x51139D8C17B16FBC(): any;
/**
 * _IS_PLAYER_D* - _IS_PLAYER_F*
 *
 * Hash: 0x57028FD99886F6F9 | Since: 1232 | API-Set: unknown
 */
export declare function _0x57028FD99886F6F9(): boolean;
/**
 * Used in script function INIT_DEADEYE_SLOWDOWN
 *
 * Hash: 0x570A13A4CA2799BB | Since: 1207 | API-Set: unknown
 */
export declare function _0x570A13A4CA2799BB(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x57D9991DC1334151 | Since: 1207 | API-Set: unknown
 */
export declare function _0x57D9991DC1334151(): any;
/**
 * No comment provided
 *
 * Hash: 0x585CE159DB46FADB | Since: 1207 | API-Set: unknown
 */
export declare function _0x585CE159DB46FADB(): void;
/**
 * No comment provided
 *
 * Hash: 0x5B7B97E99F84138B | Since: 1207 | API-Set: unknown
 */
export declare function _0x5B7B97E99F84138B(): any;
/**
 * No comment provided
 *
 * Hash: 0x5C2E5E3CAEEB1F58 | Since: 1207 | API-Set: unknown
 */
export declare function _0x5C2E5E3CAEEB1F58(): void;
/**
 * _IS_PLAYER_S* - _IS_PLAYER_T*
 *
 * Hash: 0x621D1B289CAF5978 | Since: 1207 | API-Set: unknown
 */
export declare function _0x621D1B289CAF5978(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0x628E742FE1F79C4A | Since: 1207 | API-Set: unknown
 */
export declare function _0x628E742FE1F79C4A(): void;
/**
 * No comment provided
 *
 * Hash: 0x65887EAC535A0B0C | Since: 1207 | API-Set: unknown
 */
export declare function _0x65887EAC535A0B0C(): void;
/**
 * No comment provided
 *
 * Hash: 0x67659A8F248E0141 | Since: 1207 | API-Set: unknown
 */
export declare function _0x67659A8F248E0141(): void;
/**
 * No comment provided
 *
 * Hash: 0x6852288340B43239 | Since: 1207 | API-Set: unknown
 */
export declare function _0x6852288340B43239(): any;
/**
 * No comment provided
 *
 * Hash: 0x694FFA4308060CD1 | Since: 1207 | API-Set: unknown
 */
export declare function _0x694FFA4308060CD1(): void;
/**
 * No comment provided
 *
 * Hash: 0x6C54E69516CC56BD | Since: 1207 | API-Set: unknown
 */
export declare function _0x6C54E69516CC56BD(): any;
/**
 * No comment provided
 *
 * Hash: 0x6EDB5D08CB03E763 | Since: 1207 | API-Set: unknown
 */
export declare function _0x6EDB5D08CB03E763(): void;
/**
 * No comment provided
 *
 * Hash: 0x73EB2EF2E92D23BF | Since: 1207 | API-Set: unknown
 */
export declare function _0x73EB2EF2E92D23BF(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x747257807B8721CE | Since: 1207 | API-Set: unknown
 */
export declare function _0x747257807B8721CE(): any;
/**
 * No comment provided
 *
 * Hash: 0x76F7E1BCD623A429 | Since: 1207 | API-Set: unknown
 */
export declare function _0x76F7E1BCD623A429(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x77B0B6D17A3AC9AA | Since: 1207 | API-Set: unknown
 */
export declare function _0x77B0B6D17A3AC9AA(): void;
/**
 * No comment provided
 *
 * Hash: 0x77E83C315A3B31CA | Since: 1207 | API-Set: unknown
 */
export declare function _0x77E83C315A3B31CA(): void;
/**
 * Only used in script function PROCESS_PED_INTERRUPT_DIALOGUE
 * _GET_PLAYER_*
 *
 * Hash: 0x7AE93C45EC14A166 | Since: 1207 | API-Set: unknown
 */
export declare function _0x7AE93C45EC14A166(player: number | string | IPlayer): [boolean, number];
/**
 * _SET_PLAYER_DAMAGE_* - _SET_PLAYER_DEFENSE_*
 *
 * Hash: 0x818241B3EDA84191 | Since: 1207 | API-Set: unknown
 */
export declare function _0x818241B3EDA84191(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x83C989D5B5B5B466 | Since: 1207 | API-Set: unknown
 */
export declare function _0x83C989D5B5B5B466(): void;
/**
 * No comment provided
 *
 * Hash: 0x84481018E668E1B8 | Since: 1207 | API-Set: unknown
 */
export declare function _0x84481018E668E1B8(player: number | string | IPlayer, ped: number | IPed): void;
/**
 * SET_PLAYER_S/T*
 *
 * Hash: 0x8591EE69CC3ED257 | Since: 1207 | API-Set: unknown
 */
export declare function _0x8591EE69CC3ED257(player: number | string | IPlayer, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8702D9150D9FBB3D | Since: 1207 | API-Set: unknown
 */
export declare function _0x8702D9150D9FBB3D(): any;
/**
 * No comment provided
 *
 * Hash: 0x8F44EBB3BA8F6D44 | Since: 1207 | API-Set: unknown
 */
export declare function _0x8F44EBB3BA8F6D44(): void;
/**
 * No comment provided
 *
 * Hash: 0x9044835BE9D9DBFE | Since: 1207 | API-Set: unknown
 */
export declare function _0x9044835BE9D9DBFE(): void;
/**
 * No comment provided
 *
 * Hash: 0x9073EC5456651A90 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9073EC5456651A90(): void;
/**
 * No comment provided
 *
 * Hash: 0x908D4B72854C8F62 | Since: 1207 | API-Set: unknown
 */
export declare function _0x908D4B72854C8F62(): void;
/**
 * _GET_A* - _GET_C*
 *
 * Hash: 0x927861B2C08DBEA5 | Since: 1207 | API-Set: unknown
 */
export declare function _0x927861B2C08DBEA5(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0x929DDD5538F3DF1F | Since: 1232 | API-Set: unknown
 */
export declare function _0x929DDD5538F3DF1F(): void;
/**
 * No comment provided
 *
 * Hash: 0x93624B36E8851B42 | Since: 1207 | API-Set: unknown
 */
export declare function _0x93624B36E8851B42(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x9422743A5BA50E10 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9422743A5BA50E10(): any;
/**
 * No comment provided
 *
 * Hash: 0x9461A8FAB0378E5B | Since: 1207 | API-Set: unknown
 */
export declare function _0x9461A8FAB0378E5B(): void;
/**
 * No comment provided
 *
 * Hash: 0x9AFCF9FE1884BF62 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9AFCF9FE1884BF62(): void;
/**
 * No comment provided
 *
 * Hash: 0x9FC5A003FB76EDBD | Since: 1207 | API-Set: unknown
 */
export declare function _0x9FC5A003FB76EDBD(): void;
/**
 * No comment provided
 *
 * Hash: 0xA28056CD1B04B250 | Since: 1232 | API-Set: unknown
 */
export declare function _0xA28056CD1B04B250(): void;
/**
 * No comment provided
 *
 * Hash: 0xA342495F93B7B838 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA342495F93B7B838(): void;
/**
 * No comment provided
 *
 * Hash: 0xA54000D4BFD90BDE | Since: 1207 | API-Set: unknown
 */
export declare function _0xA54000D4BFD90BDE(): any;
/**
 * No comment provided
 *
 * Hash: 0xAAED694CE814817F | Since: 1207 | API-Set: unknown
 */
export declare function _0xAAED694CE814817F(): any;
/**
 * No comment provided
 *
 * Hash: 0xB15CD2F9932C9AB5 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB15CD2F9932C9AB5(): any;
/**
 * _IS_PLAYER_I* - _IS_PLAYER_P*
 *
 * Hash: 0xB331D8A73F9D2BDF | Since: 1207 | API-Set: unknown
 */
export declare function _0xB331D8A73F9D2BDF(player: number | string | IPlayer): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xBA5CA1FEB5DE0DF6 | Since: 1207 | API-Set: unknown
 */
export declare function _0xBA5CA1FEB5DE0DF6(): void;
/**
 * NPEW__ENUM__EMOTE_CATEGORY_INVALID = -1
 * NPEW__ENUM__EMOTE_CATEGORY_ACTIONS
 * NPEW__ENUM__EMOTE_CATEGORY_ANTAGONIZE
 * NPEW__ENUM__EMOTE_CATEGORY_REACTIONS
 * NPEW__ENUM__EMOTE_CATEGORY_GREET
 * NPEW__ENUM__NUM_EMOTE_CATEGORIES
 * NPEW__ENUM__NUM_DISPLAY_TEXTURES
 *
 * Hash: 0xBB6EA5D59E926095 | Since: 1207 | API-Set: unknown
 */
export declare function _0xBB6EA5D59E926095(category: number, emote: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xBD96185264DDAAEA | Since: 1207 | API-Set: unknown
 */
export declare function _0xBD96185264DDAAEA(): void;
/**
 * _GET_PLAYER_I*
 *
 * Hash: 0xBEA3A6E5F5F79A6F | Since: 1207 | API-Set: unknown
 */
export declare function _0xBEA3A6E5F5F79A6F(): any;
/**
 * No comment provided
 *
 * Hash: 0xBED386157F65942C | Since: 1207 | API-Set: unknown
 */
export declare function _0xBED386157F65942C(): void;
/**
 * No comment provided
 *
 * Hash: 0xBEFED69CE8317F91 | Since: 1207 | API-Set: unknown
 */
export declare function _0xBEFED69CE8317F91(): any;
/**
 * No comment provided
 *
 * Hash: 0xC177C827CEFC0AA4 | Since: 1207 | API-Set: unknown
 */
export declare function _0xC177C827CEFC0AA4(): void;
/**
 * No comment provided
 *
 * Hash: 0xC4873B053054C04B | Since: 1207 | API-Set: unknown
 */
export declare function _0xC4873B053054C04B(): void;
/**
 * No comment provided
 *
 * Hash: 0xC58CE6824E604DEC | Since: 1207 | API-Set: unknown
 */
export declare function _0xC58CE6824E604DEC(): void;
/**
 * No comment provided
 *
 * Hash: 0xC71D07C96946E263 | Since: 1207 | API-Set: unknown
 */
export declare function _0xC71D07C96946E263(): void;
/**
 * Hardcoded to return zero/false.
 *
 * Hash: 0xC74EB3F2EC169F6B | Since: 1232 | API-Set: unknown
 */
export declare function _0xC74EB3F2EC169F6B(): any;
/**
 * No comment provided
 *
 * Hash: 0xC900A465364A85D6 | Since: 1207 | API-Set: unknown
 */
export declare function _0xC900A465364A85D6(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0xC93A9A45430D484E | Since: 1207 | API-Set: unknown
 */
export declare function _0xC93A9A45430D484E(): any;
/**
 * No comment provided
 *
 * Hash: 0xCA59808E51FD67C4 | Since: 1207 | API-Set: unknown
 */
export declare function _0xCA59808E51FD67C4(): void;
/**
 * No comment provided
 *
 * Hash: 0xCB0B9506BC91E441 | Since: 1207 | API-Set: unknown
 */
export declare function _0xCB0B9506BC91E441(): void;
/**
 * No comment provided
 *
 * Hash: 0xCB61A63AA53D7D22 | Since: 1207 | API-Set: unknown
 */
export declare function _0xCB61A63AA53D7D22(): void;
/**
 * No comment provided
 *
 * Hash: 0xCD7CA3013FD12749 | Since: 1232 | API-Set: unknown
 */
export declare function _0xCD7CA3013FD12749(): void;
/**
 * No comment provided
 *
 * Hash: 0xCDDD4B74660E2335 | Since: 1207 | API-Set: unknown
 */
export declare function _0xCDDD4B74660E2335(): void;
/**
 * No comment provided
 *
 * Hash: 0xCEDC16930526F728 | Since: 1207 | API-Set: unknown
 */
export declare function _0xCEDC16930526F728(): void;
/**
 * No comment provided
 *
 * Hash: 0xCFB2EED4FCB7BD77 | Since: 1207 | API-Set: unknown
 */
export declare function _0xCFB2EED4FCB7BD77(): void;
/**
 * No comment provided
 *
 * Hash: 0xD1F6B912785BFD35 | Since: 1207 | API-Set: unknown
 */
export declare function _0xD1F6B912785BFD35(): any;
/**
 * No comment provided
 *
 * Hash: 0xD288E02E364972D2 | Since: 1311 | API-Set: unknown
 */
export declare function _0xD288E02E364972D2(): void;
/**
 * No comment provided
 *
 * Hash: 0xDA9D7BE231FE865F | Since: 1207 | API-Set: unknown
 */
export declare function _0xDA9D7BE231FE865F(): any;
/**
 * No comment provided
 *
 * Hash: 0xDAB6A2FC56B7DE65 | Since: 1207 | API-Set: unknown
 */
export declare function _0xDAB6A2FC56B7DE65(): any;
/**
 * No comment provided
 *
 * Hash: 0xDD33A82352C4652F | Since: 1207 | API-Set: unknown
 */
export declare function _0xDD33A82352C4652F(player: number | string | IPlayer, ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xE1D356F5A66D0FFA | Since: 1232 | API-Set: unknown
 */
export declare function _0xE1D356F5A66D0FFA(emote: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE50A67C33514A390 | Since: 1207 | API-Set: unknown
 */
export declare function _0xE50A67C33514A390(): any;
/**
 * _IS_PLAYER_A* - _IS_PLAYER_BE*
 *
 * Hash: 0xE7F8707269544B29 | Since: 1207 | API-Set: unknown
 */
export declare function _0xE7F8707269544B29(player: number | string | IPlayer, ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE956C2340A76272E | Since: 1207 | API-Set: unknown
 */
export declare function _0xE956C2340A76272E(): any;
/**
 * No comment provided
 *
 * Hash: 0xEACEBAAE0A33FB3F | Since: 1207 | API-Set: unknown
 */
export declare function _0xEACEBAAE0A33FB3F(): void;
/**
 * No comment provided
 *
 * Hash: 0xEBB6E27AC2FF32DA | Since: 1207 | API-Set: unknown
 */
export declare function _0xEBB6E27AC2FF32DA(): void;
/**
 * No comment provided
 *
 * Hash: 0xEBFF94328FF7A18A | Since: 1207 | API-Set: unknown
 */
export declare function _0xEBFF94328FF7A18A(): void;
/**
 * _CLEAR_FACIAL_* - _CLEAR_PED_BLOOD*
 *
 * Hash: 0xF21C7A3F3FFBA629 | Since: 1207 | API-Set: unknown
 */
export declare function _0xF21C7A3F3FFBA629(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0xF4CB347D7B5EB0FD | Since: 1207 | API-Set: unknown
 */
export declare function _0xF4CB347D7B5EB0FD(): any;
/**
 * No comment provided
 *
 * Hash: 0xF993373285053D77 | Since: 1207 | API-Set: unknown
 */
export declare function _0xF993373285053D77(): void;
/**
 * Params: p1, p2, p3, p4 = 1.f, 0, 0, 0 in R* Scripts
 * _SPECIAL_ABILITY*
 *
 * Hash: 0xFA437FA0738C370C | Since: 1207 | API-Set: unknown
 */
export declare function _0xFA437FA0738C370C(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0xFA7DAAE3959E6C7B | Since: 1207 | API-Set: unknown
 */
export declare function _0xFA7DAAE3959E6C7B(): void;
/**
 * Associates a specific interactive focus mode preset between a player and a ped, with a specified location and target entity.
 * To access all available presets, refer to the file located at: `/update_1.rpf/common/data/interactive_focus_mode_presets.meta`
 *
 * Hash: 0x3946FC742AC305CD | Since: 1207 | API-Set: unknown
 */
export declare function addAmbientInteractiveFocusPreset(player: number | string | IPlayer, ped: number | IPed, pos: Vector3, targetEntity: number | IEntity): [string, string];
/**
 * Adds an interactive focus mode preset between a player and a specific set of coordinates with a target entity.
 * To access all available presets, refer to the file located at:update_1.rpf.common.data.interactive_focus_mode_presets.meta
 *
 *
 * Hash: 0xD48227263E3D06AE | Since: 1232 | API-Set: unknown
 */
export declare function addAmbientInteractiveFocusPresetAtCoords(player: number | string | IPlayer, pos: Vector3, targetEntity: number | IEntity): [Vector3, string, string];
/**
 * Used in script function: NET_AUTO_FOLLOW_UPDATE_LEADER_VALUES
 * followMode:
 * HORSEFOLLOWMODE_AUTO = 0,
 * HORSEFOLLOWMODE_SIDE_ONLY,
 * HORSEFOLLOWMODE_BEHIND_ONLY,
 * HORSEFOLLOWMODE_BEHIND_AND_SIDE,
 * HORSEFOLLOWMODE_BEHIND_CLOSE
 * followPriority:
 * HORSEFOLLOWPRIORITY_STEER_ASSIST = 0,
 * HORSEFOLLOWPRIORITY_AMBIENT,
 * HORSEFOLLOWPRIORITY_NORMAL,
 * HORSEFOLLOWPRIORITY_HIGH
 *
 * Hash: 0xAC22AA6DF4D1C1DE | Since: 1207 | API-Set: unknown
 */
export declare function addAsFollowTarget(player: number | string | IPlayer, ped: number | IPed, followMode: number, followPriority: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8F2A81C09DA9124A | Since: 1207 | API-Set: unknown
 */
export declare function clearBountyTarget(player: number | string | IPlayer): void;
/**
 * Clears the intensity of aura effects applied to entities for a specific player in Deadeye mode based on a flag parameter. This function is used to reset any intensity modifications set by `_SET_DEADEYE_ENTITY_AURA_INTENSITY_WITH_FLAG - 0x131E294EF60160DF`, restoring affected entities' aura intensity to their default state.
 *
 * Hash: 0x0E9057A9DA78D0F8 | Since: 1207 | API-Set: unknown
 */
export declare function clearDeadeyeAuraIntensity(player: number | string | IPlayer, bitflag: number): void;
/**
 * Disables the previously set interactive focus mode preset for a given player. see `_SET_PLAYER_INTERACTIVE_FOCUS_PRESET - 0x3C1B1807C7A415D6`
 *
 * Hash: 0xC67A4910425F11F1 | Since: 1207 | API-Set: unknown
 */
export declare function disableInteractiveFocusPreset(player: number | string | IPlayer): string;
/**
 * Sets the behavior of sprinting while the Eagleeye feature is active, determining whether sprinting cancels the effect based on the specified parameter.
 * old name was _EAGLE_EYE_SET_PLUS_FLAG_DISABLED this native can still be used as its declared.
 *
 * Hash: 0xCE285A4413B00B7F | Since: 1207 | API-Set: unknown
 */
export declare function eagleeyeSetSprintBehavior(player: number | string | IPlayer, disabled: boolean): void;
/**
 * Add a yellow particle to the entity.
 * entity: entity to apply yellow particle
 * entity2: same entity as entit
 * p2: always
 * p3: always 0
 *
 * Hash: 0x6ECFC621A168424C | Since: 1207 | API-Set: unknown
 */
export declare function eagleEyeAddParticleEffectToEntity(entity1: number | IEntity, entity2: number | IEntity, heading: number): void;
/**
 * Retrieves whether all trails are currently hidden during Eagle Eye mode for the specified player.
 *
 * Hash: 0xA62BBAAE67A05BB0 | Since: 1207 | API-Set: unknown
 */
export declare function eagleEyeAreAllTrailsHidden(player: number | string | IPlayer): boolean;
/**
 * Checks if the player can focus on tracks while in Eagle Eye mode. Returns true if the player is able to focus on a track, otherwise false.
 *
 * Hash: 0x1DA5C5B0923E1B85 | Since: 1207 | API-Set: unknown
 */
export declare function eagleEyeCanFocusOnTrack(player: number | string | IPlayer): boolean;
/**
 * Clears all Eagle Eye trails that were registered for entities associated with the specified player.
 *
 * Hash: 0xE5D3EB37ABC1EB03 | Since: 1207 | API-Set: unknown
 */
export declare function eagleEyeClearRegisteredTrails(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x40AB73092C95B5F5 | Since: 1207 | API-Set: unknown
 */
export declare function eagleEyeDisableTrackingTrail(entity: number | IEntity): string;
/**
 * Retrieves the ID of the ped that the specified player is currently tracking while in Eagle Eye mode.
 *
 * Hash: 0x3813E11A378958A5 | Since: 1207 | API-Set: unknown
 */
export declare function eagleEyeGetTrackedPedId(player: number | string | IPlayer): number;
/**
 * Remove yellow particle from the entity when it was set using `0x6ECFC621A168424C`
 * entity: entity to remove yellow particles
 * entity2: same entity as entity
 * p2: always 0
 *
 * Hash: 0xDC5E09D012D759C4 | Since: 1207 | API-Set: unknown
 */
export declare function eagleEyeRemoveParticleEffectFromEntity(entity1: number | IEntity, entity2: number | IEntity): void;
/**
 * false: default eagleeye color
 * true: green eagleeye color
 *
 * Hash: 0x2C41D93F550D5E37 | Since: 1207 | API-Set: unknown
 */
export declare function eagleEyeSetColor(player: number | string | IPlayer): any;
/**
 * No comment provided
 *
 * Hash: 0x907B16B3834C69E2 | Since: 1207 | API-Set: unknown
 */
export declare function eagleEyeSetCustomDistance(entity: number | IEntity, distance: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE0D6C2A146A5C993 | Since: 1207 | API-Set: unknown
 */
export declare function eagleEyeSetDrainRateModifier(player: number | string | IPlayer, modifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2AF423D6ECB2C485 | Since: 1207 | API-Set: unknown
 */
export declare function eagleEyeSetFocusOnAssociatedClueTrail(player: number | string | IPlayer, linkedWaypointPed: number | IEntity): void;
/**
 * Sets whether all trails are hidden during Eagle Eye mode.
 *
 * Hash: 0x330CA55A3647FA1C | Since: 1207 | API-Set: unknown
 */
export declare function eagleEyeSetHideAllTrails(player: number | string | IPlayer, hide: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x22C8B10802301381 | Since: 1207 | API-Set: unknown
 */
export declare function eagleEyeSetRange(player: number | string | IPlayer, range: number): void;
/**
 * Enable/disable a color on the entity in eagle eye mode.
 *
 * Hash: 0xBC02B3D151D3859F | Since: 1207 | API-Set: unknown
 */
export declare function eagleEyeSetRegisteredEntityGlow(entity: number | IEntity, enable: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xDFC85C5199045026 | Since: 1207 | API-Set: unknown
 */
export declare function eagleEyeSetTrackingUpgrade(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x6FA957D1B55941C1 | Since: 1311 | API-Set: unknown
 */
export declare function eagleEyeSetTrackingUpgrade2(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x95EE1DEE1DCD9070 | Since: 1207 | API-Set: unknown
 */
export declare function enableCustomDeadeyeAbility(player: number | string | IPlayer, enable: boolean): void;
/**
 * (Un)lock Eagle Eye functionality
 *
 * Hash: 0xA63FCAD3A6FEC6D2 | Since: 1207 | API-Set: unknown
 */
export declare function enableEagleeye(player: number | string | IPlayer, enable: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xE5A3DD2FF84E1A4B | Since: 1232 | API-Set: unknown
 */
export declare function forceRestScenario(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x5B6193813E03E4E9 | Since: 1207 | API-Set: unknown
 */
export declare function formatNameString(): [string, string];
/**
 * No comment provided
 *
 * Hash: 0x46FA0AE18F4C7FA9 | Since: 1207 | API-Set: unknown
 */
export declare function getActiveHorseFor(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0x2E78D822208E740A | Since: 1207 | API-Set: unknown
 */
export declare function getAiDefenseModifierAgainstAi(player: number | string | IPlayer): number;
/**
 * p0: mostly Ped Hashes
 *
 * Hash: 0x8E84119A23C16623 | Since: 1207 | API-Set: unknown
 */
export declare function getConstructedDiscoveredCharacterName(p0: number | string, model: boolean, outfit: boolean): number;
/**
 * Returns the depletion delay value for the Deadeye ability that was previously set using `SetDeadeyeAbilityDepletionDelay - 0x870634493CB4372C`
 *
 * Hash: 0xE92261BD28C0878F | Since: 1207 | API-Set: unknown
 */
export declare function getDeadeyeAbilityDepletionDelay(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0xCCE7C695C164C35F | Since: 1207 | API-Set: unknown
 */
export declare function getDeadeyeAbilityLevel(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0x0772F87D7B07719A | Since: 1207 | API-Set: unknown
 */
export declare function getHasDiscoveredCharacterNameSp(player: number | string | IPlayer, discoveryHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x32348719DCED2969 | Since: 1207 | API-Set: unknown
 */
export declare function getIsDeadeyeTaggingEnabled(player: number | string | IPlayer): boolean;
/**
 * Retrieves the number of marks placed on a PED when Deadeye mode is active for the specified player.
 *
 * Hash: 0x27AD7162D3FED01E | Since: 1207 | API-Set: unknown
 */
export declare function getNumDeadeyeMarksOnPed(player: number | string | IPlayer, ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xCCD9B77F70D31C9D | Since: 1207 | API-Set: unknown
 */
export declare function getNumMarkedDeadeyeTargets(player: number | string | IPlayer): number;
/**
 * it is used to check for that period of time if player damaged any peds only returns the last 3 hits with the entity ids so if you hit the same entity 3 times it will return the same entity id 3 times, if you hit 4 different entities within that time it will return the last 3 entity ids
 * only stores the last 3 hits in the data view buffer
 * duration is in miliseconds
 * you need dataview
 *
 * Hash: 0x1A6E84F13C952094 | Since: 1207 | API-Set: unknown
 */
export declare function getPedsDamagedByRecently(player: number | string | IPlayer, duration: number): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xDF66A37936D5F3D9 | Since: 1207 | API-Set: unknown
 */
export declare function getCachedDeadEyeAmount(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0xA81D24AE0AF99A5E | Since: 1207 | API-Set: unknown
 */
export declare function getDeadEye(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0x3A6AE4EEE30370FE | Since: 1207 | API-Set: unknown
 */
export declare function getDeadEyeMeterLevel(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0x0317C947D062854E | Since: 1207 | API-Set: unknown
 */
export declare function getHealth(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0x22CD23BB0C45E0CD | Since: 1207 | API-Set: unknown
 */
export declare function getHealthRechargeMultiplier(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0x5CA6BBD4A7D8145E | Since: 1207 | API-Set: unknown
 */
export declare function getHuntingWagon(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0x592F58BC4D2A2CF3 | Since: 1207 | API-Set: unknown
 */
export declare function getMaxDeadEye(player: number | string | IPlayer): number;
/**
 * See _SET_PLAYER_MOOD
 *
 * Hash: 0x054473164C012699 | Since: 1207 | API-Set: unknown
 */
export declare function getMood(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0xAD03B03737CE6810 | Since: 1207 | API-Set: unknown
 */
export declare function getOwnerOfMount(mount: number | IPed): number | string;
/**
 * No comment provided
 *
 * Hash: 0x7C803BDC8343228D | Since: 1207 | API-Set: unknown
 */
export declare function getOwnerOfVehicle(vehicle: number | IVehicle): number | string;
/**
 * No comment provided
 *
 * Hash: 0x5EBE38A20BC51C27 | Since: 1207 | API-Set: unknown
 */
export declare function getPed2(player: number | string | IPlayer): number;
/**
 * If player has less Dead Eye than required, Dead Eye cant be triggered.
 *
 * Hash: 0x811A748B1BE231BA | Since: 1207 | API-Set: unknown
 */
export declare function getRequiredDeadEyeAmount(player: number | string | IPlayer): number;
/**
 * playerResetFlag: See 0x9F9A829C6751F3C7
 *
 * Hash: 0xFE691E89C08937B6 | Since: 1207 | API-Set: unknown
 */
export declare function getResetFlag(player: number | string | IPlayer, playerResetFlag: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAB3773E7AA1E9DCC | Since: 1207 | API-Set: unknown
 */
export declare function getSpecialAbilityMultiplier(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0x68A0389E0718AC8F | Since: 1207 | API-Set: unknown
 */
export declare function getStaminaDepletionMultiplier(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0x617D3494AD58200F | Since: 1207 | API-Set: unknown
 */
export declare function getStaminaRechargeMultiplier(player: number | string | IPlayer): number;
/**
 * Returns true if PromptType is enabled for ped (mount)
 * Params: See 0x0751D461F06E41CE
 *
 * Hash: 0xEA8F168A76A0B9BC | Since: 1207 | API-Set: unknown
 */
export declare function getUiPromptForPedIsEnabled(player: number | string | IPlayer, ped: number | IPed, promptType: number, promptMode: number): boolean;
/**
 * Returns false if PromptType is enabled
 * Params: See 0x0751D461F06E41CE
 *
 * Hash: 0x6614F9039BD31931 | Since: 1207 | API-Set: unknown
 */
export declare function getUiPromptIsDisabled(player: number | string | IPlayer, promptType: number, promptMode: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFE0304050261442C | Since: 1207 | API-Set: unknown
 */
export declare function getWeaponDamage(player: number | string | IPlayer, weaponHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xB48050D326E9A2F3 | Since: 1207 | API-Set: unknown
 */
export declare function getSaddleHorseFor(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0xD3F7445CEA2E5035 | Since: 1207 | API-Set: unknown
 */
export declare function getTempHorse(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0xB9050A97594C8832 | Since: 1207 | API-Set: unknown
 */
export declare function getVehicleOwnedBy(player: number | string | IPlayer): number;
/**
 * Returns -1.0f if no multiplier has been set
 *
 * Hash: 0xA82964B9D8D6A983 | Since: 1207 | API-Set: unknown
 */
export declare function getWantedLevelMultiplier(): number;
/**
 * this native checks if the player has damaged or killed any ped human/animal recently within the duration passed, either by shooting or even using melee
 * duration is in miliseconds
 *
 * Hash: 0x72AD59F7B7FB6E24 | Since: 1207 | API-Set: unknown
 */
export declare function hasDamagedAnyPedRecently(player: number | string | IPlayer, duration: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8A0643B0B4CA276B | Since: 1207 | API-Set: unknown
 */
export declare function isDeadeyeAbilityLocked(player: number | string | IPlayer, abilityType: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0E6846476906C9DD | Since: 1207 | API-Set: unknown
 */
export declare function isEagleEyeRegisteredForEntity(player: number | string | IPlayer, entity: number | IEntity): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE24C64D9ADED2EF5 | Since: 1207 | API-Set: unknown
 */
export declare function isFollowingTarget(player: number | string | IPlayer, ped: number | IPed): boolean;
/**
 * Checks if player is focused on any entity
 *
 * Hash: 0x1A51BFE60708E482 | Since: 1207 | API-Set: unknown
 */
export declare function isFreeFocusing(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0x04D7F33640662FA2 | Since: 1207 | API-Set: unknown
 */
export declare function isInScope(player: number | string | IPlayer): boolean;
/**
 * returns true if the player is on a road while riding a horse but at a certain speed, if you go off road then it returns false or if you go too slow like walking state it also returns false
 *
 * Hash: 0xE631EAF35828FA67 | Since: 1207 | API-Set: unknown
 */
export declare function isMountOnRoad(player: number | string | IPlayer): boolean;
/**
 * This native is used to determine if the player has an active lockon an entity while riding a horse.
 *
 * Hash: 0x2009F8AB7A5E9D6D | Since: 1207 | API-Set: unknown
 */
export declare function isOnMountLockonEntity(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0x45AB66D02B601FA7 | Since: 1207 | API-Set: unknown
 */
export declare function isSecondarySpecialAbilityActive(player: number | string | IPlayer): boolean;
/**
 * Returns true if eagle eye is enabled for the player
 *
 * Hash: 0xE022CC1B545F1D9F | Since: 1207 | API-Set: unknown
 */
export declare function isSecondarySpecialAbilityEnabled(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB16223CB7DA965F0 | Since: 1207 | API-Set: unknown
 */
export declare function isSpecialAbilityActive(player: number | string | IPlayer): boolean;
/**
 * Checks if the player's Deadeye ability is enabled.
 *
 * Hash: 0xDE6C85975F9D4894 | Since: 1207 | API-Set: unknown
 */
export declare function isSpecialAbilityEnabled(player: number | string | IPlayer): boolean;
/**
 * Toggle handles wether Deadeye and Eagleeye are infinite or not.
 *
 * Hash: 0x28A13BF6B05C3D83 | Since: 1207 | API-Set: unknown
 */
export declare function modifyInfiniteTrailVision(player: number | string | IPlayer, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xFB0E622B401884D3 | Since: 1207 | API-Set: unknown
 */
export declare function modifyDiscoveredCharacterNameMpSetUndiscovered(discoveryHash: number | string): void;
/**
 * Params: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePromptType
 * promptType is mostly 34 (PP_TRACK_ANIMAL), promptMode = 0 (PP_MODE_BLOCK) in R* Scripts
 *
 * Hash: 0x0751D461F06E41CE | Since: 1207 | API-Set: unknown
 */
export declare function modifyUiPrompt(player: number | string | IPlayer, promptType: number, promptMode: number, disabled: boolean): void;
/**
 * Params: See 0x0751D461F06E41CE
 *
 * Hash: 0xA3DB37EDF9A74635 | Since: 1207 | API-Set: unknown
 */
export declare function modifyUiPromptForPed(player: number | string | IPlayer, ped: number | IPed, promptType: number, promptMode: number, enabled: boolean): void;
/**
 * Returns true if the given player has a valid ped.
 *
 * Hash: 0x0760D6F70EBCC05C | Since: 1207 | API-Set: unknown
 */
export declare function networkHasValidPed(player: number | string | IPlayer): boolean;
/**
 * Used for setting up eagle eye for entity
 * Params: p2 = re-register or not?
 *
 * Hash: 0x543DFE14BE720027 | Since: 1207 | API-Set: unknown
 */
export declare function registerEagleEyeForEntity(player: number | string | IPlayer, entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xAC67098A1E54ABB0 | Since: 1207 | API-Set: unknown
 */
export declare function registerEagleEyeTrailsForEntity(player: number | string | IPlayer, entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x0C6B89876262A99D | Since: 1207 | API-Set: unknown
 */
export declare function removeAsFollowTarget(player: number | string | IPlayer, ped: number | IPed): void;
/**
 * Resets any aura effects applied to entities for a specific player in Deadeye mode, returning all aura-related visuals to their default state. This function is primarily used to remove any highlighting or aura effects set by `_SET_DEADEYE_ENTITY_AURA - 0x2B12B6FC8B8772AB` and `_SET_DEADEYE_ENTITY_AURA_INTENSITY - 0x131E294EF60160DF`
 *
 * Hash: 0xE910932F4B30BE23 | Since: 1207 | API-Set: unknown
 */
export declare function resetDeadeyeAuraEffect(player: number | string | IPlayer): void;
/**
 * Activates EagleEye, called together with 0x28A13BF6B05C3D83
 *
 * Hash: 0x1710BC33CFB83634 | Since: 1207 | API-Set: unknown
 */
export declare function secondarySpecialAbilitySetActive(player: number | string | IPlayer): void;
/**
 * Deactivates EagleEye, called together with 0xC0B21F235C02139C
 *
 * Hash: 0x64FF4BF9AF59E139 | Since: 1207 | API-Set: unknown
 */
export declare function secondarySpecialAbilitySetDisabled(player: number | string | IPlayer, disabled: boolean): void;
/**
 * Sets Player's Defense against AI modifier
 *
 * Hash: 0x914071FF93AF2692 | Since: 1207 | API-Set: unknown
 */
export declare function setAiDefenseModifierAgainstAi(player: number | string | IPlayer, modifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6ADF821FBF21920E | Since: 1207 | API-Set: unknown
 */
export declare function setBountyTarget(player: number | string | IPlayer, target: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0xBE0C524970892D41 | Since: 1207 | API-Set: unknown
 */
export declare function setBowDrawReductionTimeInDeadeye(player: number | string | IPlayer, drawReductionTime: number): void;
/**
 * Decreases Stamina bar drain speed by % when drawing a bow.
 *
 * Hash: 0xFE7C9CF376D23342 | Since: 1207 | API-Set: unknown
 */
export declare function setBowStaminaDrainSpeed(player: number | string | IPlayer, staminaDrain: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7761A30432C91297 | Since: 1207 | API-Set: unknown
 */
export declare function setDamageCloseDistanceBonus(player: number | string | IPlayer, closeRangeLowerBound: number, closeRangeUpperBound: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5006C36652D6EC56 | Since: 1207 | API-Set: unknown
 */
export declare function setDamageCloseDistanceBonusTotal(player: number | string | IPlayer, closeDamageBonus: number): void;
/**
 * No comment provided
 *
 * Hash: 0xED591CB17C8BA216 | Since: 1207 | API-Set: unknown
 */
export declare function setDamageFarDistanceBonus(player: number | string | IPlayer, farRangeLowerBound: number, farRangeUpperBound: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1F0E3A4434565F8F | Since: 1207 | API-Set: unknown
 */
export declare function setDamageFarDistanceBonusTotal(player: number | string | IPlayer, farDamageBonus: number): void;
/**
 * Only used in R* SP Script short_update
 *
 * Hash: 0x870634493CB4372C | Since: 1207 | API-Set: unknown
 */
export declare function setDeadeyeAbilityDepletionDelay(player: number | string | IPlayer, delay: number): void;
/**
 * Max level is 5.
 *
 * Hash: 0xF0FE8E790BFEB5BB | Since: 1207 | API-Set: unknown
 */
export declare function setDeadeyeAbilityLevel(player: number | string | IPlayer, level: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2797B8D66DD0EBB8 | Since: 1207 | API-Set: unknown
 */
export declare function setDeadeyeAbilityLocked(player: number | string | IPlayer, abilityType: number, toggle: boolean): void;
/**
 * Applies a aura effect to nearby entities when Deadeye is active, based on a flag parameter. This includes humans, animals, vehicles, and horses pulling those vehicles. Additionally, depending on the flag value, the player's appearance may change (e.g., turning gray).
 * - flag (int): A flag that determines the behavior of the aura effect. 2 means people 4 means animal etc.
 *
 * Hash: 0x2B12B6FC8B8772AB | Since: 1207 | API-Set: unknown
 */
export declare function setDeadeyeEntityAura(player: number | string | IPlayer, flag: number): void;
/**
 * Applies a customizable aura effect to nearby entities when Deadeye is active, with control over aura intensity and additional behavior based on a flag parameter.
 * - flag (int): A flag that determines the behavior of the aura effect and which entities are affected. 2: Applies aura to humans. 4: Applies aura to animals.
 *
 * Hash: 0x131E294EF60160DF | Since: 1207 | API-Set: unknown
 */
export declare function setDeadeyeEntityAuraIntensityWithFlag(player: number | string | IPlayer, intensity: number, flag: number): void;
/**
 * No comment provided
 *
 * Hash: 0x83FCD6921FC8FD05 | Since: 1207 | API-Set: unknown
 */
export declare function setDeadeyeTaggingConfig(player: number | string | IPlayer, filter: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6B5DDFB967E5073D | Since: 1207 | API-Set: unknown
 */
export declare function setDeadeyeTaggingEnabled(player: number | string | IPlayer, toggle: boolean): void;
/**
 * Disables the players ability to be wanted by lawmen
 *
 * Hash: 0x8674D138391FFB1B | Since: 1207 | API-Set: unknown
 */
export declare function setDisableWantedLevel(player: number | string | IPlayer, disable: boolean): void;
/**
 * see personaabilities.meta
 * enum ePersonaAbilityFlag
 * {
 * PERSONA_CAN_AUTOESCAPE_FROM_LASSO,
 * PERSONA_HAT_BLOCKS_FIRST_HEADSHOT,
 * PERSONA_FULL_AUTO_FOR_ALL_WEAPONS,
 * PERSONA_MIGHT_LIVE_AFTER_DEADLY_DAMAGE,
 * PERSONA_IGNORE_AIM_BEFORE_FIRING_RESTRICTIONS,
 * PERSONA_DEADEYE_INSTANT_RELOAD,
 * PERSONA_USE_PHOSPHOROUS_ROUNDS,
 * PERSONA_CONT_DEADEYE_ON_TAKING_COVER,
 * PERSONA_CONT_DEADEYE_ON_RELOAD,
 * PERSONA_CONT_DEADEYE_ON_SHOOTING,
 * PERSONA_CONT_DEADEYE_ON_EXITING_AIM,
 * PERSONA_DISABLE_PLAYER_CANCELLING_DEADEYE,
 * PERSONA_CONT_DEADEYE_ON_RAGDOLL,
 * PERSONA_USE_EXPLOSIVE_ROUNDS,
 * PERSONA_EXIT_DEADEYE_ON_TAKING_DAMAGE,
 * PERSONA_CARRY_TWO_MONEYBAGS,
 * PERSONA_ABILITY_LONG_PICK_HERBS,
 * PERSONA_ABILITY_UNBREAKABLE_LASSO,
 * PERSONA_CONT_DEADEYE_ON_SPRINTING,
 * PERSONA_CANT_DEAL_HEADSHOTS,
 * PERSONA_HANGMAN,
 * PERSONA_ALLOW_DEADEYE_WITH_MELEE_WEAPONS,
 * PERSONA_ALLOW_DEADEYE_WHILE_UNARMED,
 * PERSONA_DISABLE_DEADEYE_PERFECT_ACCURACY,
 * PERSONA_CANT_DEAL_HEADSHOTS_TO_PLAYERS,
 * PERSONA_CANT_DEAL_CRITICAL_DAMAGE,
 * PERSONA_CANT_DEAL_CRITICAL_DAMAGE_TO_PLAYERS,
 * PERSONA_ALLOW_EAGLEEYE_IN_COMBAT,
 * PERSONA_CONT_EAGLEEYE_ON_SPRINT,
 * PERSONA_SUPPRESS_LENGENDARY_EAGLEEYE_TRAIL_COLOR
 * };
 *
 * Hash: 0x7146CF430965927C | Since: 1207 | API-Set: unknown
 */
export declare function setLocalPersonaAbilityFlag(flagId: number, toggle: boolean): void;
/**
 * Focus Fire VFX start for player: p1 = focusfire
 *
 * Hash: 0x5F8E0303C229C84B | Since: 1207 | API-Set: unknown
 */
export declare function setLockonFocusFireVfx(player: number | string | IPlayer): string;
/**
 * No comment provided
 *
 * Hash: 0xEA6DE0CD15AECBE2 | Since: 1207 | API-Set: unknown
 */
export declare function setMaxWantedLevel2(maxWantedLevel: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5B9813ECF7633FE8 | Since: 1207 | API-Set: unknown
 */
export declare function setMountPromptDisabled(disabled: boolean): void;
/**
 * Seems to work similar to 0xD2CB0FB0FDCB473D
 *
 * Hash: 0x8FBF9EDB378CCB8C | Since: 1207 | API-Set: unknown
 */
export declare function setPedActiveHorse(player: number | string | IPlayer, horse: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xD2CB0FB0FDCB473D | Since: 1207 | API-Set: unknown
 */
export declare function setPedAsSaddleHorseFor(player: number | string | IPlayer, mount: number | IPed): void;
/**
 * Sets the weapon that the specified player will aim with. The weapon must already be assigned to the PED. This also determines the weapon order, specifying which weapon the player will automatically switch to when the current weapon runs out of ammo.
 *
 * Hash: 0xCFFC3ECCD7A5CCEB | Since: 1207 | API-Set: unknown
 */
export declare function setAimWeapon(player: number | string | IPlayer, weapon: number | string, weaponDrawOrder: number): void;
/**
 * No comment provided
 *
 * Hash: 0x39363DFD04E91496 | Since: 1311 | API-Set: unknown
 */
export declare function setCanMercyKill(player: number | string | IPlayer, toggle: boolean): void;
/**
 * Enables or disables the Pick Up prompt for a hat on the ground for the specified player. When set to true, the player will see a prompt to pick up the hat if they are near it.
 *
 * Hash: 0xACA45DDCEF6071C4 | Since: 1207 | API-Set: unknown
 */
export declare function setCanPickupHat(player: number | string | IPlayer, canPickup: boolean): void;
/**
 * Activates the Surrender prompt for the specified player in the current frame.
 *
 * Hash: 0xCBB54CC7FFFFAB86 | Since: 1207 | API-Set: unknown
 */
export declare function setCooperatePromptThisFrame(player: number | string | IPlayer, targetPed: number | IPed, promptOrder: number): void;
/**
 * damageInfo: STANDARD_PED_DAMAGE, STANDARD_FEMALE_PED_DAMAGE, STANDARD_PLAYER_PED_DAMAGE_MP, STANDARD_FEMALE_PLAYER_PED_DAMAGE_MP
 *
 * Hash: 0x78B3D19AF6391A55 | Since: 1207 | API-Set: unknown
 */
export declare function setDamageInfoOverride(player: number | string | IPlayer): string;
/**
 * Sets the aura color for entities that the player can target in Deadeye mode, based on a specific hash value. This Native was previously named `SetPlayerStatFlagHash`, but it has been re-evaluated and renamed to better reflect its function in controlling the Deadeye aura color for targeted entities
 * some colors
 * 0: Default aura
 * 1014693585
 * 1936842089
 * 1979474018
 *
 * Hash: 0x768E81AE285A4B67 | Since: 1207 | API-Set: unknown
 */
export declare function setDeadEyeAuraByHash(player: number | string | IPlayer, auraColorHash: number | string): void;
/**
 * Sets stamina core drains peed using ranged damage scale and melee damage scale
 *
 * Hash: 0x497A6539BB0E8787 | Since: 1207 | API-Set: unknown
 */
export declare function setDefenseModifier(player: number | string | IPlayer, weaponDefenseMod: number, meleeDefenseMod: number): void;
/**
 * bullet damage modifier: type = 4
 * explosive damage Defense mod: type = 7
 * fire damage Defense mod: type = 8, 15
 *
 * Hash: 0x93F499CAE53FCD05 | Since: 1207 | API-Set: unknown
 */
export declare function setDefenseTypeModifier(player: number | string | IPlayer, _type: number, defenseModifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2D3ACE3DE0A2B622 | Since: 1207 | API-Set: unknown
 */
export declare function setExplosiveWeaponDamageModifier(player: number | string | IPlayer, modifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7C32191D9FB2BDEA | Since: 1207 | API-Set: unknown
 */
export declare function setHasDiscoveredCharacterNameMp(discoveryHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x946D46CD6DFB9742 | Since: 1207 | API-Set: unknown
 */
export declare function setHasDiscoveredCharacterNameSp(player: number | string | IPlayer, discoveryHash: number | string): void;
/**
 * Sets the player's ability to wear hats based on the specified flag. The flag value determines whether the player can wear all hats or only the ones they own.
 * If the flag is set to 15 and `allow` is true, the player can wear all available hats. However, if you want to restrict the player to wearing only their owned hats (flag 1), you **must first** disable flag 15 by setting it to false, and then set flag 1 to true.
 *
 * Hash: 0xA0C683284DF027C7 | Since: 1207 | API-Set: unknown
 */
export declare function setHatAccess(player: number | string | IPlayer, flag: number, allow: boolean): void;
/**
 * Setting player's Health recharge time to zero forces immediate health regen
 *
 * Hash: 0x535ED4605F89AB6E | Since: 1207 | API-Set: unknown
 */
export declare function setHealthRechargeTimeModifier(player: number | string | IPlayer, modifier: number): void;
/**
 * Only applies to HUNTERCART01
 *
 * Hash: 0x6A4404BDFA62CE2C | Since: 1207 | API-Set: unknown
 */
export declare function setHuntingWagon(player: number | string | IPlayer, wagon: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x98CD760DE43B612E | Since: 1207 | API-Set: unknown
 */
export declare function setInteractionNegativeResponse(player: number | string | IPlayer): string;
/**
 * No comment provided
 *
 * Hash: 0xC6366A585659D15C | Since: 1207 | API-Set: unknown
 */
export declare function setInteractionPositiveResponse(player: number | string | IPlayer): string;
/**
 * Sets your targeting mode for when you're in a vehicle (perhaps a mount/horse).
 * see SET_PLAYER_TARGETING_MODE for eTargetingMode
 *
 * Hash: 0x19B4F71703902238 | Since: 1207 | API-Set: unknown
 */
export declare function setInVehicleTargetingMode(targetMode: number): void;
/**
 * _SET_PLAYER_A* - _SET_PLAYER_C*
 *
 * Hash: 0x43F50A7CD2482156 | Since: 1207 | API-Set: unknown
 */
export declare function setLassoDamagePerSecond(player: number | string | IPlayer, damage: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4EA69188FBCE6A7D | Since: 1207 | API-Set: unknown
 */
export declare function setLocalAccuracyFloorModifier(player: number | string | IPlayer, accuracy: number): void;
/**
 * No comment provided
 *
 * Hash: 0x292F0B6EDC82E3A4 | Since: 1207 | API-Set: unknown
 */
export declare function setManageBuffSuperJump(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0xE133C1EC5300F740 | Since: 1207 | API-Set: unknown
 */
export declare function setMaxAmmoOverrideForAmmoType(player: number | string | IPlayer, ammoType: number | string, amount: number): void;
/**
 * Sets the melee combat prompt for a specific player using a predefined text entry. use game string or
 * AddTextEntry("custom_text", "Throw a punch") and use custom_text in the native
 *
 * Hash: 0x0FAF95D71ED67ADE | Since: 1207 | API-Set: unknown
 */
export declare function setMeleePromptText(player: number | string | IPlayer): string;
/**
 * mood: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePedMood
 *
 * Hash: 0x39BED552DB46FFA9 | Since: 1207 | API-Set: unknown
 */
export declare function setMood(player: number | string | IPlayer, mood: number): void;
/**
 * Name could potentially be inaccurate.
 * Used in Script Function HORSE_SETUP_PLAYER_HORSE_ATTRIBUTES (p1 = true)
 * _SET_PLAYER_L* - _SET_PLAYER_M*
 *
 * Hash: 0xDF93973251FB2CA5 | Since: 1207 | API-Set: unknown
 */
export declare function setMountStateActive(player: number | string | IPlayer, active: boolean): void;
/**
 * Seems to enable active horse equipment prompt when being near it and enables the control that opens the inventory as well
 *
 * Hash: 0xE6D4E435B56D5BD0 | Since: 1207 | API-Set: unknown
 */
export declare function setOwnsMount(player: number | string | IPlayer, mount: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xD0E02AA618020D17 | Since: 1207 | API-Set: unknown
 */
export declare function setOwnsVehicle(player: number | string | IPlayer, vehicle: number | IVehicle): void;
/**
 * Shows or hides all Pick Up prompts for the specified player, including the prompt for picking up hats from the ground. When set to true, the player will see Pick Up prompts for all nearby items. If set to false, all Pick Up prompts will be hidden.
 *
 * Hash: 0xD1A70C1E8D1031FE | Since: 1207 | API-Set: unknown
 */
export declare function setPickupPromptVisible(player: number | string | IPlayer, enable: boolean): void;
/**
 * Sets the stand prompt for a specific player using a predefined text entry. use AddTextEntry for promptTextKey for custom names
 *
 * Hash: 0x06C3DB00B69D5435 | Since: 1232 | API-Set: unknown
 */
export declare function setPromptLeaveText(player: number | string | IPlayer): string;
/**
 * No comment provided
 *
 * Hash: 0xDEE80FEDFDD43C9B | Since: 1207 | API-Set: unknown
 */
export declare function setRemoteAccuracyFloorModifier(player: number | string | IPlayer, accuracy: number): void;
/**
 * https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePlayerResetFlags
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/PLAYER_RESET_FLAGS
 *
 * Hash: 0x9F9A829C6751F3C7 | Since: 1207 | API-Set: unknown
 */
export declare function setResetFlag(player: number | string | IPlayer, playerResetFlag: number): void;
/**
 * Sets the sit prompt for a specific player using a predefined text entry. use game strings like PLAYER_SIT or use custom with
 * AddTextEntry("sit_custom", "Take a seat")
 * this native must be invoked
 * https://imgur.com/gallery/0x988c9045531b9fce-9bTHgkv
 *
 * Hash: 0x988C9045531B9FCE | Since: 1232 | API-Set: unknown
 */
export declare function setSitPromptText(player: number | string | IPlayer): string;
/**
 * No comment provided
 *
 * Hash: 0xBBADFB5E5E5766FB | Since: 1207 | API-Set: unknown
 */
export declare function setStaminaSprintDepletionMultiplier(player: number | string | IPlayer, multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x967FF5BC0CFE6D26 | Since: 1207 | API-Set: unknown
 */
export declare function setTotalAccuracyModifier(player: number | string | IPlayer, accuracy: number): void;
/**
 * No comment provided
 *
 * Hash: 0xAF341032E97FB061 | Since: 1207 | API-Set: unknown
 */
export declare function setTrampleDamageModifier(player: number | string | IPlayer, modifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x00EB5A760638DB55 | Since: 1207 | API-Set: unknown
 */
export declare function setWeaponDrawSpeed(player: number | string | IPlayer, weapon: number | string, speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x59F0AFF3E0A1B019 | Since: 1207 | API-Set: unknown
 */
export declare function setWeaponGroupAsInstantKill(player: number | string | IPlayer, weaponGroup: number | string, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xFC79DCC94D0A5897 | Since: 1207 | API-Set: unknown
 */
export declare function setWeaponGroupDamageModifier(player: number | string | IPlayer, weaponGroup: number | string, modifier: number): void;
/**
 * Decreases the damage the player receives while on horseback
 * Previous name: _SET_RECEIVED_HORSEBACK_DAMAGE_DECREASE
 *
 * Hash: 0xB427911EA6DFFEF3 | Since: 1207 | API-Set: unknown
 */
export declare function setReceivedDamageTakenOnHorsebackModifier(player: number | string | IPlayer, damageDecrease: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDC68829BB3F37023 | Since: 1207 | API-Set: unknown
 */
export declare function setShowInfoCard(player: number | string | IPlayer, showingInfoCard: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xAE4BCC79C587EBBF | Since: 1207 | API-Set: unknown
 */
export declare function setSpecialAbilityActivationCost(player: number | string | IPlayer, activationCost: number): void;
/**
 * Only used in R* SP Script short_update
 *
 * Hash: 0xC0B1C05B313693D1 | Since: 1207 | API-Set: unknown
 */
export declare function setSpecialAbilityDisableTimer(player: number | string | IPlayer, timer: number): void;
/**
 * durationCost: per second
 *
 * Hash: 0xB783F75940B23014 | Since: 1207 | API-Set: unknown
 */
export declare function setSpecialAbilityDurationCost(player: number | string | IPlayer, durationCost: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5A498FCA232F71E1 | Since: 1207 | API-Set: unknown
 */
export declare function setSpecialAbilityMultiplier(player: number | string | IPlayer, multiplier: number): void;
/**
 * SPECIAL_ABILITY_NONE = -1,
 * SPECIAL_ABILITY_CAR_SLOWDOWN,
 * SPECIAL_ABILITY_RAGE,
 * SPECIAL_ABILITY_BULLET_TIME,
 * SPECIAL_ABILITY_SNAPSHOT,
 * SPECIAL_ABILITY_INSULT,
 * SPECIAL_ABILITY_DEADEYE,
 * SPECIAL_ABILITY_REVIVE
 *
 * Hash: 0x00BA333DA05ADC23 | Since: 1207 | API-Set: unknown
 */
export declare function setSpecialAbilityType(player: number | string | IPlayer, _type: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0E1DB1F8F5B561DC | Since: 1207 | API-Set: unknown
 */
export declare function setUsedItemEffect(health: number, stamina: number, deadeye: number, healthCore: number, staminaCore: number, deadeyeCore: number): void;
/**
 * No comment provided
 *
 * Hash: 0x11A7FF918EF6BC66 | Since: 1207 | API-Set: unknown
 */
export declare function setWeaponDegradationModifier(player: number | string | IPlayer, modifier: number): void;
/**
 * Drains Deadeye by given amount.
 *
 * Hash: 0x200114E99552462B | Since: 1207 | API-Set: unknown
 */
export declare function specialAbilityDrainByAmount(player: number | string | IPlayer, amount: number): void;
/**
 * Returns Deadeye value from player
 *
 * Hash: 0x029884FB65821B07 | Since: 1207 | API-Set: unknown
 */
export declare function specialAbilityGetAmountCached(player: number | string | IPlayer): number;
/**
 * Restores Deadeye by given amount.
 * Params: p2, p3, p4 = 0, 0, 1 in R* Scripts
 *
 * Hash: 0x51345AE20F22C261 | Since: 1207 | API-Set: unknown
 */
export declare function specialAbilityRestoreByAmount(player: number | string | IPlayer, amount: number): void;
/**
 * Only used in R* SP Script short_update
 * Restores Deadeye Outer Ring
 *
 * Hash: 0x2498035289B5688F | Since: 1207 | API-Set: unknown
 */
export declare function specialAbilityRestoreOuterRing(player: number | string | IPlayer, amount: number): void;
/**
 * Activates the special ability for the specified player.
 *
 * Hash: 0xBBA140062B15A8AC | Since: 1207 | API-Set: unknown
 */
export declare function specialAbilitySetActivate(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0xAE637BB8EF017875 | Since: 1207 | API-Set: unknown
 */
export declare function specialAbilitySetDisabled(player: number | string | IPlayer, disabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC0B21F235C02139C | Since: 1207 | API-Set: unknown
 */
export declare function specialAbilitySetEagleEyeDisabled(player: number | string | IPlayer): void;
/**
 * Params: p1 = -1 in R* Scripts
 *
 * Hash: 0x1D77B47AFA584E90 | Since: 1207 | API-Set: unknown
 */
export declare function specialAbilityStartRestore(player: number | string | IPlayer, abilityType: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9DAE1380CC5C6451 | Since: 1207 | API-Set: unknown
 */
export declare function unregisterEagleEyeForEntity(player: number | string | IPlayer, entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x9A957912CE2EABD1 | Since: 1207 | API-Set: unknown
 */
export declare function unregisterEagleEyeTrailsForEntity(player: number | string | IPlayer, entity: number | IEntity): void;
