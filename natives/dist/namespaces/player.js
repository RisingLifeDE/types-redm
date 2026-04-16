import { IEntity, IPed, IPlayer, IVehicle } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x09C28F828EE674FA | Since: 1207
 */
export function boostHorseSpeedForTime(player, speedBoost, duration) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    BoostPlayerHorseSpeedForTime(_player, speedBoost, duration);
}
/**
 * No comment provided
 *
 * Hash: 0x2DF170B1185AF777 | Since: 1207
 */
export function canStartMission(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return CanPlayerStartMission(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x0361096D6CE4372C | Since: 1207
 */
export function clearHasDamagedAtLeastOneNonAnimalPed(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ClearPlayerHasDamagedAtLeastOneNonAnimalPed(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x270B63A641BE32F2 | Since: 1207
 */
export function clearHasDamagedAtLeastOnePed(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ClearPlayerHasDamagedAtLeastOnePed(_player);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x4E4B996C928C7AA6 | Since: 1207
 */
export function clearWantedLevel(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ClearPlayerWantedLevel(_player);
}
/**
 * Inhibits the player from using any method of combat including melee and firearms.
 *
 * NOTE: Only disables the firing for one frame
 *
 * Hash: 0x2970929FD5F9FC89 | Since: 1207
 */
export function disableFiring(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    DisablePlayerFiring(_player, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x62ED71E133B6C9F1 | Since: 1207
 */
export function eagleEyeSetCustomEntityTint(entity, red, green, blue) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    EagleEyeSetCustomEntityTint(_entity, red, green, blue);
}
/**
 * No comment provided
 *
 * Hash: 0x768C017FB878E4F4 | Since: 1207
 */
export function forceCleanup(cleanupFlags) {
    ForceCleanup(cleanupFlags);
}
/**
 * No comment provided
 *
 * Hash: 0xDAACAF8B687F2353 | Since: 1207
 */
export function forceCleanupForAllThreadsWithThisName(cleanupFlags) {
    return ForceCleanupForAllThreadsWithThisName(cleanupFlags);
}
/**
 * No comment provided
 *
 * Hash: 0xF4C9512A2F0A3031 | Since: 1207
 */
export function forceCleanupForThreadWithThisId(id, cleanupFlags) {
    ForceCleanupForThreadWithThisId(id, cleanupFlags);
}
/**
 * No comment provided
 *
 * Hash: 0x84E8E29EBD4A46D2 | Since: 1207
 */
export function getCauseOfMostRecentForceCleanup() {
    return GetCauseOfMostRecentForceCleanup();
}
/**
 * Returns name hash (name) and outHash includes the type.
 *
 * Hash: 0x0139637A3BFF8B6D | Since: 1207
 */
export function getDiscoverableNameHashAndTypeForEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetDiscoverableNameHashAndTypeForEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xA6817C110B830EAD | Since: 1207
 */
export function getEntityIsFreeAimingAt(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetEntityPlayerIsFreeAimingAt(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x354F689C4FFAAB37 | Since: 1207
 */
export function getHasDiscoveredCharacterNameMp(discoveryHash) {
    if (typeof discoveryHash === 'string')
        discoveryHash = GetHashKey(discoveryHash);
    return GetHasPlayerDiscoveredCharacterNameMp(discoveryHash);
}
/**
 * No comment provided
 *
 * Hash: 0x51BEA356B1C60225 | Since: 1207
 */
export function getIsUiPromptActive(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetIsPlayerUiPromptActive(_player, 0);
}
/**
 * Gets the maximum wanted level the player can get.
 * Ranges from 0 to 5.
 *
 * Hash: 0xD04CFAD1E2B7984A | Since: 1207
 */
export function getMaxWantedLevel() {
    return GetMaxWantedLevel();
}
/**
 * No comment provided
 *
 * Hash: 0xF49F14462F0AE27C | Since: 1207
 */
export function getMountOwnedBy(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetMountOwnedByPlayer(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x2F96E7720B0B19EA | Since: 1207
 */
export function getsLastVehicle() {
    return GetPlayersLastVehicle();
}
/**
 * No comment provided
 *
 * Hash: 0xD7ECC25E176ECBA5 | Since: 1207
 */
export function getCurrentStealthNoise(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerCurrentStealthNoise(_player);
}
/**
 * Returns the group ID the player is member of.
 *
 * Hash: 0x9BAB31815159ABCF | Since: 1207
 */
export function getGroup(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerGroup(_player);
}
/**
 * Returns the same as PLAYER_ID and NETWORK_PLAYER_ID_TO_INT
 *
 * Hash: 0x47E385B0D957C8D4 | Since: 1207
 */
export function getIndex() {
    return GetPlayerIndex();
}
/**
 * No comment provided
 *
 * Hash: 0x3EE1F7A8C32F24E1 | Since: 1207
 */
export function getInteractionTargetEntity(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerInteractionTargetEntity(_player, false, false);
}
/**
 * Returns the player's invincibility status.
 *
 * Hash: 0x0CBBCB2CCFA7DC4E | Since: 1207
 */
export function getInvincible(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerInvincible(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x7124FD9AC0E01BA0 | Since: 1207
 */
export function getName(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerName(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x275F255ED201B937 | Since: 1207
 */
export function getPed(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerPed(_player);
}
/**
 * `Does the same like PLAYER::GET_PLAYER_PED`
 *
 * Hash: 0x5C880F9056D784C8 | Since: 1207
 */
export function getPedScriptIndex(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerPedScriptIndex(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xFB6EB8785F808551 | Since: 1207
 */
export function getReceivedBattleEventRecently(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerReceivedBattleEventRecently(_player, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0xAE663DDD99C8A670 | Since: 1207
 */
export function getTargetEntity(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerTargetEntity(_player);
}
/**
 * Gets the player's team.
 * Returns -1 in singleplayer.
 *
 * Hash: 0xB464EB6A40C7975B | Since: 1207
 */
export function getTeam(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerTeam(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xABC532F9098BFD9D | Since: 1207
 */
export function getWantedLevel(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerWantedLevel(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x36E3D8B5A6552FE8 | Since: 1207
 */
export function getTargetCharacterNameForLocal(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetTargetCharacterNameForLocalPlayer(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x0335106F3ACABBED | Since: 1207
 */
export function getTargetCharacterNameScriptOverrideHash(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetTargetCharacterNameScriptOverrideHash(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x755E08680F21EF30 | Since: 1207
 */
export function getTargetCharacterNameScriptOverrideRawString(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetTargetCharacterNameScriptOverrideRawString(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x80B00EB26D9521C7 | Since: 1207
 */
export function getWantedLevelRadius() {
    return GetWantedLevelRadius(0);
}
/**
 * No comment provided
 *
 * Hash: 0x1B1A3B358F7D8F07 | Since: 1207
 */
export function getWantedLevelThreshold(wantedLevel) {
    return GetWantedLevelThreshold(wantedLevel);
}
/**
 * No comment provided
 *
 * Hash: 0xC11469DCA6FC3BB5 | Since: 1207
 */
export function hasForceCleanupOccurred(cleanupFlags) {
    return HasForceCleanupOccurred(cleanupFlags);
}
/**
 * No comment provided
 *
 * Hash: 0xC932F57F31EA9152 | Since: 1207
 */
export function hasBeenSpottedInStolenVehicle(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return HasPlayerBeenSpottedInStolenVehicle(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x16C8D205DD5A2E90 | Since: 1207
 */
export function hasDamagedAtLeastOneNonAnimalPed(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return HasPlayerDamagedAtLeastOneNonAnimalPed(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xDA4A4B9B96E20092 | Since: 1207
 */
export function hasDamagedAtLeastOnePed(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return HasPlayerDamagedAtLeastOnePed(_player);
}
/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 *
 * Hash: 0x58FF971FC8F2702C | Since: 1207
 */
export function intToParticipantindex(value) {
    return IntToParticipantindex(value);
}
/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 *
 * Hash: 0x748B3A65C2604C33 | Since: 1207
 */
export function intToindex(value) {
    return IntToPlayerindex(value);
}
/**
 * Return true while player is being arrested / busted.
 *
 * If atArresting is set to 1, this function will return 1 when player is being arrested (while player is putting his hand up, but still have control)
 *
 * If atArresting is set to 0, this function will return 1 only when the busted screen is shown.
 *
 * Hash: 0xC8183AE963C58374 | Since: 1207
 */
export function isBeingArrested(player, atArresting) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerBeingArrested(_player, atArresting);
}
/**
 * Returns TRUE if the player ('s ped) is climbing at the moment.
 *
 * Hash: 0xB8A70C22FD48197A | Since: 1207
 */
export function isClimbing(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerClimbing(_player);
}
/**
 * Returns whether the player can control himself.
 *
 * Hash: 0x7964097FCE4C244B | Since: 1207
 */
export function isControlOn(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerControlOn(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x2E9C3FCB6798F397 | Since: 1207
 */
export function isDead(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerDead(_player);
}
/**
 * Gets a value indicating whether the specified player is currently aiming freely.
 *
 * Hash: 0x936F967D4BE1CE9D | Since: 1207
 */
export function isFreeAiming(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerFreeAiming(_player);
}
/**
 * Gets a value indicating whether the specified player is currently aiming freely at the specified entity.
 *
 * Hash: 0x8C67C11C68713D25 | Since: 1207
 */
export function isFreeAimingAtEntity(player, entity) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsPlayerFreeAimingAtEntity(_player, _entity);
}
/**
 * Checks whether the specified player has a Ped, the Ped is not dead, is not injured and is not arrested.
 *
 * Hash: 0xBFFB35986CAAE58C | Since: 1207
 */
export function isPlaying(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerPlaying(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xAA67BCB0097F2FA3 | Since: 1207
 */
export function isReadyForCutscene(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerReadyForCutscene(_player);
}
/**
 * Returns true if the player is riding a train.
 *
 * Hash: 0x2FB0ACADA6A238DD | Since: 1207
 */
export function isRidingTrain(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerRidingTrain(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xB78350754157C00F | Since: 1207
 */
export function isScriptControlOn(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerScriptControlOn(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x4605C66E0F935F83 | Since: 1207
 */
export function isTargettingAnything(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerTargettingAnything(_player);
}
/**
 * p2 will return true if player is targetting entity with a weapon if false will return true if player is targetting entity without a weapon
 *
 * Hash: 0x27F89FDC16688A7A | Since: 1207
 */
export function isTargettingEntity(player, entity, withWeapon) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsPlayerTargettingEntity(_player, _entity, withWeapon);
}
/**
 * No comment provided
 *
 * Hash: 0x085EEAEB8783FEB5 | Since: 1207
 */
export function isTeleportActive() {
    return IsPlayerTeleportActive();
}
/**
 * No comment provided
 *
 * Hash: 0xE1C0AD4C24324C36 | Since: 1207
 */
export function isWantedLevelGreater(player, wantedLevel) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerWantedLevelGreater(_player, wantedLevel);
}
/**
 * No comment provided
 *
 * Hash: 0x908258B6209E71F7 | Since: 1207
 */
export function isSystemUiBeingDisplayed() {
    return IsSystemUiBeingDisplayed();
}
/**
 * Does exactly the same thing as PLAYER_ID()
 *
 * Hash: 0x8A9386F0749A17FA | Since: 1207
 */
export function networkIdToInt() {
    return NetworkPlayerIdToInt();
}
/**
 * This returns YOUR 'identity' as a Player type.
 *
 * Always returns 0 in story mode.
 *
 * Hash: 0x217E9DC48139933D | Since: 1207
 */
export function id() {
    return PlayerId();
}
/**
 * Returns current player ped
 *
 * Hash: 0x096275889B8E0EE0 | Since: 1207
 */
export function pedId() {
    return PlayerPedId();
}
/**
 * No comment provided
 *
 * Hash: 0xCBCCF73FFA69CC6B | Since: 1207
 */
export function reportPoliceSpotted(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ReportPoliceSpottedPlayer(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x5CE5CACC01D0F985 | Since: 1207
 */
export function resetLawResponseDelayOverride() {
    ResetLawResponseDelayOverride();
}
/**
 * No comment provided
 *
 * Hash: 0x12917931C31F1750 | Since: 1207
 */
export function resetArrestState(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ResetPlayerArrestState(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x61A2EECAB274829B | Since: 1207
 */
export function resetInputGait(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ResetPlayerInputGait(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x062D14F18E8B0CAE | Since: 1207
 */
export function resetWantedLevelDifficulty(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ResetWantedLevelDifficulty(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xC41F4B6E23FE6A4A | Since: 1207
 */
export function restoreStamina(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    RestorePlayerStamina(_player, 0);
}
/**
 * This can be between 1.0f - 50.0f
 *
 * Hash: 0x5DA6500FE849DA16 | Since: 1207
 */
export function setAirDragMultiplierForsVehicle(player, multiplier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetAirDragMultiplierForPlayersVehicle(_player, multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0x16752DAA7E6D3F72 | Since: 1207
 */
export function setAllNeutralRandomPedsFleeThisFrame(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetAllNeutralRandomPedsFleeThisFrame(_player);
}
/**
 * Sets whether all random peds will run away from player if they are agitated (threatened) (bool=true), or some peds can stand up for themselves (bool=false).
 *
 * Hash: 0xE705309B8C6445A4 | Since: 1207
 */
export function setAllRandomPedsFlee(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetAllRandomPedsFlee(_player, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xD5C198A62F1DEB0A | Since: 1207
 */
export function setAllRandomPedsFleeThisFrame(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetAllRandomPedsFleeThisFrame(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x34630A768925B852 | Since: 1207
 */
export function setEveryoneIgnore(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetEveryoneIgnorePlayer(_player, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xD2DFC9CCA5596A11 | Since: 1207
 */
export function setLawResponseDelayOverride() {
    SetLawResponseDelayOverride(0);
}
/**
 * No comment provided
 *
 * Hash: 0x4A056257802DD3E5 | Since: 1207
 */
export function setLockonToFriendlys(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetLockonToFriendlyPlayers(_player, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x28A4BD2CEE236E19 | Since: 1207
 */
export function setMaxWantedLevel(maxWantedLevel) {
    SetMaxWantedLevel(maxWantedLevel);
}
/**
 * No comment provided
 *
 * Hash: 0x506CE71FB6E8CF5E | Since: 1207
 */
export function setMinTimeBeforeHorseBucking(mount, iMinBuckTime) {
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    SetMinTimeBeforeHorseBucking(_mount, iMinBuckTime);
}
/**
 * No comment provided
 *
 * Hash: 0x227B06324234FB09 | Since: 1207
 */
export function setPedAsTempHorse(player, horse) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _horse = horse instanceof IPed ? horse.handle() : horse;
    return SetPedAsTempPlayerHorse(_player, _horse);
}
/**
 * Sets whether this player can be hassled by gangs.
 *
 * Hash: 0xC7FE774412046825 | Since: 1207
 */
export function setCanBeHassledByGangs(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerCanBeHassledByGangs(_player, toggle);
}
/**
 * Sets whether this player can take cover.
 *
 * Hash: 0x5EDA520F7A3BAF4E | Since: 1207
 */
export function setCanUseCover(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerCanUseCover(_player, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xD0D9317DFEEF9A66 | Since: 1207
 */
export function setClothPinFrames(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPlayerClothPinFrames(_ped, 0);
}
/**
 * flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eSetPlayerControlFlags
 *
 * Hash: 0x4D51E59243281D80 | Since: 1207
 */
export function setControl(player, toggle, flags, bPreventHeadingChange) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerControl(_player, toggle, flags, bPreventHeadingChange);
}
/**
 * No comment provided
 *
 * Hash: 0xD5FCC166AEB2FD0F | Since: 1207
 */
export function setForcedAim(player, toggle, ped) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPlayerForcedAim(_player, toggle, _ped, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0x8899C244EBCF70DE | Since: 1207
 */
export function setHealthRechargeMultiplier(player, regenRate) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerHealthRechargeMultiplier(_player, regenRate);
}
/**
 * Simply sets you as invincible (Health will not deplete).
 *
 * Hash: 0xFEBEEBC9CBDF4B12 | Since: 1207
 */
export function setInvincible(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerInvincible(_player, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x462AA1973CBBA75E | Since: 1207
 */
export function setLockon(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerLockon(_player, toggle);
}
/**
 * Affects the range of auto aim target.
 *
 * Hash: 0x3A3CD06597388322 | Since: 1207
 */
export function setLockonRangeOverride(player, range) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerLockonRangeOverride(_player, range);
}
/**
 * No comment provided
 *
 * Hash: 0xBEC463B3A11C909E | Since: 1207
 */
export function setMayNotEnterAnyVehicle(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerMayNotEnterAnyVehicle(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xDA35A134038557EC | Since: 1207
 */
export function setMayOnlyEnterThisVehicle(player, vehicle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetPlayerMayOnlyEnterThisVehicle(_player, _vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xE4CB5A3F18170381 | Since: 1207
 */
export function setMeleeWeaponDamageModifier(player, modifier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerMeleeWeaponDamageModifier(_player, modifier);
}
/**
 * Make sure to request the model first and wait until it has loaded.
 *
 * Hash: 0xED40380076A31506 | Since: 1207
 */
export function setModel(player, modelHash) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    SetPlayerModel(_player, modelHash, false);
}
/**
 * No comment provided
 *
 * Hash: 0xB5EC6BDAEBCA454C | Since: 1207
 */
export function setNoiseMultiplier(player, multiplier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerNoiseMultiplier(_player, multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0xE0447DEF81CCDFD2 | Since: 1207
 */
export function setSimulateAiming(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerSimulateAiming(_player, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x4DE44FA389DCA565 | Since: 1207
 */
export function setSneakingNoiseMultiplier(player, multiplier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerSneakingNoiseMultiplier(_player, multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0xFECA17CF3343694B | Since: 1207
 */
export function setStaminaRechargeMultiplier(player, multiplier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerStaminaRechargeMultiplier(_player, multiplier);
}
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
 * Hash: 0xD66A941F401E7302 | Since: 1207
 */
export function setTargetingMode(targetMode) {
    SetPlayerTargetingMode(targetMode);
}
/**
 * Sets the player's team.
 *
 * Hash: 0xE8DD8536F01DE600 | Since: 1207
 */
export function setTeam(player, team, bRestrictToThisScript) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerTeam(_player, team, bRestrictToThisScript);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x384D4765395E006C | Since: 1207
 */
export function setWantedLevel(player, wantedLevel, disableNoMission) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerWantedLevel(_player, wantedLevel, disableNoMission);
}
/**
 * This modifies the damage value of your weapon. Whether it is a multiplier or base damage is unknown.
 *
 * Hash: 0x94D529F7B73D7A85 | Since: 1207
 */
export function setWeaponDamageModifier(player, modifier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerWeaponDamageModifier(_player, modifier);
}
/**
 * No comment provided
 *
 * Hash: 0xD15CC2D493160BE3 | Since: 1207
 */
export function setWeaponDefenseModifier(player, modifier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerWeaponDefenseModifier(_player, modifier);
}
/**
 * No comment provided
 *
 * Hash: 0xD04AD186CE8BB129 | Since: 1207
 */
export function setWeaponTypeDamageModifier(player, weaponHash, damageModifier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetPlayerWeaponTypeDamageModifier(_player, weaponHash, damageModifier);
}
/**
 * If toggle is set to false:
 * The police won't be shown on the (mini)map
 *
 * If toggle is set to true:
 * The police will be shown on the (mini)map
 *
 * Hash: 0x6FD7DD6B63F2820E | Since: 1207
 */
export function setPoliceRadarBlips(toggle) {
    SetPoliceRadarBlips(toggle);
}
/**
 * Swim speed multiplier.
 * Multiplier goes up to 1.49f
 *
 * Hash: 0xBFCEABDE34DA5085 | Since: 1207
 */
export function setSwimMultiplierFor(player, multiplier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetSwimMultiplierForPlayer(_player, multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0xD7FA719CB54866C2 | Since: 1207
 */
export function setWantedLevelMultiplier(multiplier) {
    SetWantedLevelMultiplier(multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0xFA0C063C422C4355 | Since: 1207
 */
export function simulateInputGait(player, speed, duration, heading) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SimulatePlayerInputGait(_player, speed, duration, heading, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xDF8822C55EDDA65B | Since: 1207
 */
export function startTeleport(player, pos, heading) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    StartPlayerTeleport(_player, pos.x, pos.y, pos.z, heading, false, false, false, false);
}
/**
 * Disables the player's teleportation
 *
 * Hash: 0x0858B86146601BE8 | Since: 1207
 */
export function stopTeleport() {
    StopPlayerTeleport();
}
/**
 * No comment provided
 *
 * Hash: 0x96722257E5381E00 | Since: 1207
 */
export function suppressWitnessesCallingPoliceThisFrame(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SuppressWitnessesCallingPoliceThisFrame(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xC39DCE4672CBFBC1 | Since: 1207
 */
export function updateTeleport(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return UpdatePlayerTeleport(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xD0B0B044112BF424 | Since: 1207
 */
export function updateWantedPositionThisFrame(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    UpdateWantedPositionThisFrame(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x00B156AFEBCC5AE0 | Since: 1207
 */
export function _0x00B156AFEBCC5AE0() {
    Citizen.invokeNative('0x00B156AFEBCC5AE0', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x03B4B759A8990505 | Since: 1207
 */
export function _0x03B4B759A8990505() {
    return Citizen.invokeNative('0x03B4B759A8990505', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x06E1FB78B1E59CA5 | Since: 1207
 */
export function _0x06E1FB78B1E59CA5(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x06E1FB78B1E59CA5', _ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x086549F3B0381CB1 | Since: 1207
 */
export function _0x086549F3B0381CB1() {
    Citizen.invokeNative('0x086549F3B0381CB1', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0869D499A7848309 | Since: 1207
 */
export function _0x0869D499A7848309() {
    Citizen.invokeNative('0x0869D499A7848309', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * _SET_PLAYER_*? some multiplier or modifier for health or statmina ?
 *
 * Hash: 0x08E22898A6AF4905 | Since: 1207
 */
export function _0x08E22898A6AF4905(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x08E22898A6AF4905', _player, 0);
}
/**
 * Hardcoded to return zero/false.
 *
 * Hash: 0x0B7803F6F7BB43E0 | Since: 1207
 */
export function _0x0B7803F6F7BB43E0() {
    return Citizen.invokeNative('0x0B7803F6F7BB43E0');
}
/**
 * No comment provided
 *
 * Hash: 0x0F4EAF69DA41AF43 | Since: 1207
 */
export function _0x0F4EAF69DA41AF43() {
    return Citizen.invokeNative('0x0F4EAF69DA41AF43', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0F9CF06986300875 | Since: 1207
 */
export function _0x0F9CF06986300875() {
    Citizen.invokeNative('0x0F9CF06986300875', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x107F2A66E1C4C83A | Since: 1207
 */
export function _0x107F2A66E1C4C83A() {
    Citizen.invokeNative('0x107F2A66E1C4C83A', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x113EF458AB6CDA67 | Since: 1207
 */
export function _0x113EF458AB6CDA67() {
    Citizen.invokeNative('0x113EF458AB6CDA67', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x12E09E278C6C29B7 | Since: 1207
 */
export function _0x12E09E278C6C29B7() {
    Citizen.invokeNative('0x12E09E278C6C29B7', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x14E57F88BA0A07FC | Since: 1207
 */
export function _0x14E57F88BA0A07FC(location) {
    if (typeof location === 'string')
        location = GetHashKey(location);
    Citizen.invokeNative('0x14E57F88BA0A07FC', location);
}
/**
 * No comment provided
 *
 * Hash: 0x19B2C7A6C34FAD54 | Since: 1207
 */
export function _0x19B2C7A6C34FAD54() {
    return Citizen.invokeNative('0x19B2C7A6C34FAD54', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1AD8AD999C27F44A | Since: 1311
 */
export function _0x1AD8AD999C27F44A() {
    Citizen.invokeNative('0x1AD8AD999C27F44A', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1D256EED194F5B58 | Since: 1207
 */
export function _0x1D256EED194F5B58() {
    Citizen.invokeNative('0x1D256EED194F5B58', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1E8099F449ABB0BA | Since: 1207
 */
export function _0x1E8099F449ABB0BA() {
    return Citizen.invokeNative('0x1E8099F449ABB0BA', undefined);
}
/**
 * _RESET_PLAYER_A* - _RESET_PLAYER_I*
 *
 * Hash: 0x1F488807BC8E0630 | Since: 1207
 */
export function _0x1F488807BC8E0630(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x1F488807BC8E0630', _player);
}
/**
 * No comment provided
 *
 * Hash: 0x1FDA57E8908F2609 | Since: 1207
 */
export function _0x1FDA57E8908F2609(player, ped, useSteerassist) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x1FDA57E8908F2609', _player, _ped, useSteerassist);
}
/**
 * No comment provided
 *
 * Hash: 0x21091B4BEB6376EE | Since: 1207
 */
export function _0x21091B4BEB6376EE() {
    return Citizen.invokeNative('0x21091B4BEB6376EE', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x216BC0D3D2E413D2 | Since: 1207
 */
export function _0x216BC0D3D2E413D2(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x216BC0D3D2E413D2', _player, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x22B3CABEDDB538B2 | Since: 1207
 */
export function _0x22B3CABEDDB538B2(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x22B3CABEDDB538B2', _player, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x263D69767F76059C | Since: 1207
 */
export function _0x263D69767F76059C(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x263D69767F76059C', _player, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x2BB8D58E88777499 | Since: 1207
 */
export function _0x2BB8D58E88777499() {
    Citizen.invokeNative('0x2BB8D58E88777499', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2BEED53B912537D0 | Since: 1207
 */
export function _0x2BEED53B912537D0() {
    Citizen.invokeNative('0x2BEED53B912537D0', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2C2D287748E8E9B7 | Since: 1207
 */
export function _0x2C2D287748E8E9B7() {
    Citizen.invokeNative('0x2C2D287748E8E9B7', false);
}
/**
 * No comment provided
 *
 * Hash: 0x2E1ABE627C95ED9B | Since: 1207
 */
export function _0x2E1ABE627C95ED9B() {
    return Citizen.invokeNative('0x2E1ABE627C95ED9B');
}
/**
 * No comment provided
 *
 * Hash: 0x2E67707BEC52CA4B | Since: 1207
 */
export function _0x2E67707BEC52CA4B() {
    Citizen.invokeNative('0x2E67707BEC52CA4B', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x310CE349E0C0EC4B | Since: 1207
 */
export function _0x310CE349E0C0EC4B(player, ped) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x310CE349E0C0EC4B', _player, _ped, 0);
}
/**
 * Only used in script function UPDATE_PLAYER_JUST_DIED_STATE
 *
 * Hash: 0x325434C68358D282 | Since: 1207
 */
export function _0x325434C68358D282(toggle) {
    Citizen.invokeNative('0x325434C68358D282', toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x35A33783EC3C3448 | Since: 1311
 */
export function _0x35A33783EC3C3448() {
    Citizen.invokeNative('0x35A33783EC3C3448', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x39D8D7082BC34B72 | Since: 1311
 */
export function _0x39D8D7082BC34B72() {
    Citizen.invokeNative('0x39D8D7082BC34B72', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3A8611BD7BDE84F7 | Since: 1207
 */
export function _0x3A8611BD7BDE84F7() {
    Citizen.invokeNative('0x3A8611BD7BDE84F7', undefined, undefined);
}
/**
 * Used in script function INIT_DEADEYE_SLOWDOWN
 *
 * Hash: 0x3ACAC8832E77BC93 | Since: 1207
 */
export function _0x3ACAC8832E77BC93(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x3ACAC8832E77BC93', _player, false);
}
/**
 * No comment provided
 *
 * Hash: 0x3AD212429E095EFB | Since: 1207
 */
export function _0x3AD212429E095EFB() {
    Citizen.invokeNative('0x3AD212429E095EFB', undefined, undefined);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x3B296934DB026873 | Since: 1207
 */
export function _0x3B296934DB026873() {
    Citizen.invokeNative('0x3B296934DB026873', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3BB84F812E052C90 | Since: 1207
 */
export function _0x3BB84F812E052C90() {
    Citizen.invokeNative('0x3BB84F812E052C90', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3C4AE8506638C7E2 | Since: 1207
 */
export function _0x3C4AE8506638C7E2() {
    Citizen.invokeNative('0x3C4AE8506638C7E2', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3D9DA5C9EFD20D88 | Since: 1207
 */
export function _0x3D9DA5C9EFD20D88() {
    Citizen.invokeNative('0x3D9DA5C9EFD20D88', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3DAABE78A23694BC | Since: 1207
 */
export function _0x3DAABE78A23694BC() {
    Citizen.invokeNative('0x3DAABE78A23694BC', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x45EF176B532CA851 | Since: 1207
 */
export function _0x45EF176B532CA851() {
    Citizen.invokeNative('0x45EF176B532CA851', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x497A18F8F88AA9D8 | Since: 1207
 */
export function _0x497A18F8F88AA9D8() {
    Citizen.invokeNative('0x497A18F8F88AA9D8');
}
/**
 * _SET_SPECIAL_ABILITY_*
 *
 * Hash: 0x4D1699543B1C023C | Since: 1207
 */
export function _0x4D1699543B1C023C(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x4D1699543B1C023C', _player, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x4DBC4873707E8FD6 | Since: 1207
 */
export function _0x4DBC4873707E8FD6() {
    Citizen.invokeNative('0x4DBC4873707E8FD6', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4EC8BE63B8A5D4EF | Since: 1207
 */
export function _0x4EC8BE63B8A5D4EF(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x4EC8BE63B8A5D4EF', _player, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x4F0D2256AAE94EDA | Since: 1207
 */
export function _0x4F0D2256AAE94EDA() {
    Citizen.invokeNative('0x4F0D2256AAE94EDA', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x51139D8C17B16FBC | Since: 1207
 */
export function _0x51139D8C17B16FBC() {
    return Citizen.invokeNative('0x51139D8C17B16FBC', undefined);
}
/**
 * _IS_PLAYER_D* - _IS_PLAYER_F*
 *
 * Hash: 0x57028FD99886F6F9 | Since: 1232
 */
export function _0x57028FD99886F6F9() {
    return Citizen.invokeNative('0x57028FD99886F6F9');
}
/**
 * Used in script function INIT_DEADEYE_SLOWDOWN
 *
 * Hash: 0x570A13A4CA2799BB | Since: 1207
 */
export function _0x570A13A4CA2799BB(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x570A13A4CA2799BB', _player, false);
}
/**
 * No comment provided
 *
 * Hash: 0x57D9991DC1334151 | Since: 1207
 */
export function _0x57D9991DC1334151() {
    return Citizen.invokeNative('0x57D9991DC1334151', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x585CE159DB46FADB | Since: 1207
 */
export function _0x585CE159DB46FADB() {
    Citizen.invokeNative('0x585CE159DB46FADB', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5B7B97E99F84138B | Since: 1207
 */
export function _0x5B7B97E99F84138B() {
    return Citizen.invokeNative('0x5B7B97E99F84138B', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5C2E5E3CAEEB1F58 | Since: 1207
 */
export function _0x5C2E5E3CAEEB1F58() {
    Citizen.invokeNative('0x5C2E5E3CAEEB1F58', undefined, undefined, undefined);
}
/**
 * _IS_PLAYER_S* - _IS_PLAYER_T*
 *
 * Hash: 0x621D1B289CAF5978 | Since: 1207
 */
export function _0x621D1B289CAF5978(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x621D1B289CAF5978', _player);
}
/**
 * No comment provided
 *
 * Hash: 0x628E742FE1F79C4A | Since: 1207
 */
export function _0x628E742FE1F79C4A() {
    Citizen.invokeNative('0x628E742FE1F79C4A', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x65887EAC535A0B0C | Since: 1207
 */
export function _0x65887EAC535A0B0C() {
    Citizen.invokeNative('0x65887EAC535A0B0C', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x67659A8F248E0141 | Since: 1207
 */
export function _0x67659A8F248E0141() {
    Citizen.invokeNative('0x67659A8F248E0141', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6852288340B43239 | Since: 1207
 */
export function _0x6852288340B43239() {
    return Citizen.invokeNative('0x6852288340B43239', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x694FFA4308060CD1 | Since: 1207
 */
export function _0x694FFA4308060CD1() {
    Citizen.invokeNative('0x694FFA4308060CD1', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6C54E69516CC56BD | Since: 1207
 */
export function _0x6C54E69516CC56BD() {
    return Citizen.invokeNative('0x6C54E69516CC56BD', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6EDB5D08CB03E763 | Since: 1207
 */
export function _0x6EDB5D08CB03E763() {
    Citizen.invokeNative('0x6EDB5D08CB03E763', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x73EB2EF2E92D23BF | Since: 1207
 */
export function _0x73EB2EF2E92D23BF() {
    return Citizen.invokeNative('0x73EB2EF2E92D23BF');
}
/**
 * No comment provided
 *
 * Hash: 0x747257807B8721CE | Since: 1207
 */
export function _0x747257807B8721CE() {
    return Citizen.invokeNative('0x747257807B8721CE', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x76F7E1BCD623A429 | Since: 1207
 */
export function _0x76F7E1BCD623A429() {
    Citizen.invokeNative('0x76F7E1BCD623A429', undefined);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x77B0B6D17A3AC9AA | Since: 1207
 */
export function _0x77B0B6D17A3AC9AA() {
    Citizen.invokeNative('0x77B0B6D17A3AC9AA', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x77E83C315A3B31CA | Since: 1207
 */
export function _0x77E83C315A3B31CA() {
    Citizen.invokeNative('0x77E83C315A3B31CA', undefined);
}
/**
 * Only used in script function PROCESS_PED_INTERRUPT_DIALOGUE
 * _GET_PLAYER_*
 *
 * Hash: 0x7AE93C45EC14A166 | Since: 1207
 */
export function _0x7AE93C45EC14A166(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x7AE93C45EC14A166', _player);
}
/**
 * _SET_PLAYER_DAMAGE_* - _SET_PLAYER_DEFENSE_*
 *
 * Hash: 0x818241B3EDA84191 | Since: 1207
 */
export function _0x818241B3EDA84191(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x818241B3EDA84191', _player, false);
}
/**
 * No comment provided
 *
 * Hash: 0x83C989D5B5B5B466 | Since: 1207
 */
export function _0x83C989D5B5B5B466() {
    Citizen.invokeNative('0x83C989D5B5B5B466', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x84481018E668E1B8 | Since: 1207
 */
export function _0x84481018E668E1B8(player, ped) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x84481018E668E1B8', _player, _ped, undefined);
}
/**
 * SET_PLAYER_S/T*
 *
 * Hash: 0x8591EE69CC3ED257 | Since: 1207
 */
export function _0x8591EE69CC3ED257(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x8591EE69CC3ED257', _player, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x8702D9150D9FBB3D | Since: 1207
 */
export function _0x8702D9150D9FBB3D() {
    return Citizen.invokeNative('0x8702D9150D9FBB3D', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8F44EBB3BA8F6D44 | Since: 1207
 */
export function _0x8F44EBB3BA8F6D44() {
    Citizen.invokeNative('0x8F44EBB3BA8F6D44', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9044835BE9D9DBFE | Since: 1207
 */
export function _0x9044835BE9D9DBFE() {
    Citizen.invokeNative('0x9044835BE9D9DBFE', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9073EC5456651A90 | Since: 1207
 */
export function _0x9073EC5456651A90() {
    Citizen.invokeNative('0x9073EC5456651A90', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x908D4B72854C8F62 | Since: 1207
 */
export function _0x908D4B72854C8F62() {
    Citizen.invokeNative('0x908D4B72854C8F62', undefined);
}
/**
 * _GET_A* - _GET_C*
 *
 * Hash: 0x927861B2C08DBEA5 | Since: 1207
 */
export function _0x927861B2C08DBEA5(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x927861B2C08DBEA5', _player);
}
/**
 * No comment provided
 *
 * Hash: 0x929DDD5538F3DF1F | Since: 1232
 */
export function _0x929DDD5538F3DF1F() {
    Citizen.invokeNative('0x929DDD5538F3DF1F', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x93624B36E8851B42 | Since: 1207
 */
export function _0x93624B36E8851B42(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x93624B36E8851B42', _player);
}
/**
 * No comment provided
 *
 * Hash: 0x9422743A5BA50E10 | Since: 1207
 */
export function _0x9422743A5BA50E10() {
    return Citizen.invokeNative('0x9422743A5BA50E10', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9461A8FAB0378E5B | Since: 1207
 */
export function _0x9461A8FAB0378E5B() {
    Citizen.invokeNative('0x9461A8FAB0378E5B', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9AFCF9FE1884BF62 | Since: 1207
 */
export function _0x9AFCF9FE1884BF62() {
    Citizen.invokeNative('0x9AFCF9FE1884BF62', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9FC5A003FB76EDBD | Since: 1207
 */
export function _0x9FC5A003FB76EDBD() {
    Citizen.invokeNative('0x9FC5A003FB76EDBD', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA28056CD1B04B250 | Since: 1232
 */
export function _0xA28056CD1B04B250() {
    Citizen.invokeNative('0xA28056CD1B04B250', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA342495F93B7B838 | Since: 1207
 */
export function _0xA342495F93B7B838() {
    Citizen.invokeNative('0xA342495F93B7B838', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA54000D4BFD90BDE | Since: 1207
 */
export function _0xA54000D4BFD90BDE() {
    return Citizen.invokeNative('0xA54000D4BFD90BDE', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xAAED694CE814817F | Since: 1207
 */
export function _0xAAED694CE814817F() {
    return Citizen.invokeNative('0xAAED694CE814817F', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB15CD2F9932C9AB5 | Since: 1207
 */
export function _0xB15CD2F9932C9AB5() {
    return Citizen.invokeNative('0xB15CD2F9932C9AB5', undefined);
}
/**
 * _IS_PLAYER_I* - _IS_PLAYER_P*
 *
 * Hash: 0xB331D8A73F9D2BDF | Since: 1207
 */
export function _0xB331D8A73F9D2BDF(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xB331D8A73F9D2BDF', _player);
}
/**
 * No comment provided
 *
 * Hash: 0xBA5CA1FEB5DE0DF6 | Since: 1207
 */
export function _0xBA5CA1FEB5DE0DF6() {
    Citizen.invokeNative('0xBA5CA1FEB5DE0DF6', undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * NPEW__ENUM__EMOTE_CATEGORY_INVALID = -1
 * NPEW__ENUM__EMOTE_CATEGORY_ACTIONS
 * NPEW__ENUM__EMOTE_CATEGORY_ANTAGONIZE
 * NPEW__ENUM__EMOTE_CATEGORY_REACTIONS
 * NPEW__ENUM__EMOTE_CATEGORY_GREET
 * NPEW__ENUM__NUM_EMOTE_CATEGORIES
 * NPEW__ENUM__NUM_DISPLAY_TEXTURES
 *
 * Hash: 0xBB6EA5D59E926095 | Since: 1207
 */
export function _0xBB6EA5D59E926095(category, emote) {
    if (typeof emote === 'string')
        emote = GetHashKey(emote);
    Citizen.invokeNative('0xBB6EA5D59E926095', category, emote);
}
/**
 * No comment provided
 *
 * Hash: 0xBD96185264DDAAEA | Since: 1207
 */
export function _0xBD96185264DDAAEA() {
    Citizen.invokeNative('0xBD96185264DDAAEA', undefined, undefined);
}
/**
 * _GET_PLAYER_I*
 *
 * Hash: 0xBEA3A6E5F5F79A6F | Since: 1207
 */
export function _0xBEA3A6E5F5F79A6F() {
    return Citizen.invokeNative('0xBEA3A6E5F5F79A6F', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBED386157F65942C | Since: 1207
 */
export function _0xBED386157F65942C() {
    Citizen.invokeNative('0xBED386157F65942C', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBEFED69CE8317F91 | Since: 1207
 */
export function _0xBEFED69CE8317F91() {
    return Citizen.invokeNative('0xBEFED69CE8317F91', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC177C827CEFC0AA4 | Since: 1207
 */
export function _0xC177C827CEFC0AA4() {
    Citizen.invokeNative('0xC177C827CEFC0AA4', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC4873B053054C04B | Since: 1207
 */
export function _0xC4873B053054C04B() {
    Citizen.invokeNative('0xC4873B053054C04B', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC58CE6824E604DEC | Since: 1207
 */
export function _0xC58CE6824E604DEC() {
    Citizen.invokeNative('0xC58CE6824E604DEC', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC71D07C96946E263 | Since: 1207
 */
export function _0xC71D07C96946E263() {
    Citizen.invokeNative('0xC71D07C96946E263', undefined, undefined);
}
/**
 * Hardcoded to return zero/false.
 *
 * Hash: 0xC74EB3F2EC169F6B | Since: 1232
 */
export function _0xC74EB3F2EC169F6B() {
    return Citizen.invokeNative('0xC74EB3F2EC169F6B', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC900A465364A85D6 | Since: 1207
 */
export function _0xC900A465364A85D6(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xC900A465364A85D6', _player);
}
/**
 * No comment provided
 *
 * Hash: 0xC93A9A45430D484E | Since: 1207
 */
export function _0xC93A9A45430D484E() {
    return Citizen.invokeNative('0xC93A9A45430D484E', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCA59808E51FD67C4 | Since: 1207
 */
export function _0xCA59808E51FD67C4() {
    Citizen.invokeNative('0xCA59808E51FD67C4', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCB0B9506BC91E441 | Since: 1207
 */
export function _0xCB0B9506BC91E441() {
    Citizen.invokeNative('0xCB0B9506BC91E441', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCB61A63AA53D7D22 | Since: 1207
 */
export function _0xCB61A63AA53D7D22() {
    Citizen.invokeNative('0xCB61A63AA53D7D22', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCD7CA3013FD12749 | Since: 1232
 */
export function _0xCD7CA3013FD12749() {
    Citizen.invokeNative('0xCD7CA3013FD12749', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCDDD4B74660E2335 | Since: 1207
 */
export function _0xCDDD4B74660E2335() {
    Citizen.invokeNative('0xCDDD4B74660E2335', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCEDC16930526F728 | Since: 1207
 */
export function _0xCEDC16930526F728() {
    Citizen.invokeNative('0xCEDC16930526F728', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCFB2EED4FCB7BD77 | Since: 1207
 */
export function _0xCFB2EED4FCB7BD77() {
    Citizen.invokeNative('0xCFB2EED4FCB7BD77', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD1F6B912785BFD35 | Since: 1207
 */
export function _0xD1F6B912785BFD35() {
    return Citizen.invokeNative('0xD1F6B912785BFD35', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD288E02E364972D2 | Since: 1311
 */
export function _0xD288E02E364972D2() {
    Citizen.invokeNative('0xD288E02E364972D2', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDA9D7BE231FE865F | Since: 1207
 */
export function _0xDA9D7BE231FE865F() {
    return Citizen.invokeNative('0xDA9D7BE231FE865F', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDAB6A2FC56B7DE65 | Since: 1207
 */
export function _0xDAB6A2FC56B7DE65() {
    return Citizen.invokeNative('0xDAB6A2FC56B7DE65', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDD33A82352C4652F | Since: 1207
 */
export function _0xDD33A82352C4652F(player, ped) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xDD33A82352C4652F', _player, _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xE1D356F5A66D0FFA | Since: 1232
 */
export function _0xE1D356F5A66D0FFA(emote) {
    if (typeof emote === 'string')
        emote = GetHashKey(emote);
    return Citizen.invokeNative('0xE1D356F5A66D0FFA', emote);
}
/**
 * No comment provided
 *
 * Hash: 0xE50A67C33514A390 | Since: 1207
 */
export function _0xE50A67C33514A390() {
    return Citizen.invokeNative('0xE50A67C33514A390', undefined, undefined);
}
/**
 * _IS_PLAYER_A* - _IS_PLAYER_BE*
 *
 * Hash: 0xE7F8707269544B29 | Since: 1207
 */
export function _0xE7F8707269544B29(player, ped) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xE7F8707269544B29', _player, _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xE956C2340A76272E | Since: 1207
 */
export function _0xE956C2340A76272E() {
    return Citizen.invokeNative('0xE956C2340A76272E', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEACEBAAE0A33FB3F | Since: 1207
 */
export function _0xEACEBAAE0A33FB3F() {
    Citizen.invokeNative('0xEACEBAAE0A33FB3F', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEBB6E27AC2FF32DA | Since: 1207
 */
export function _0xEBB6E27AC2FF32DA() {
    Citizen.invokeNative('0xEBB6E27AC2FF32DA', undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEBFF94328FF7A18A | Since: 1207
 */
export function _0xEBFF94328FF7A18A() {
    Citizen.invokeNative('0xEBFF94328FF7A18A', undefined, undefined);
}
/**
 * _CLEAR_FACIAL_* - _CLEAR_PED_BLOOD*
 *
 * Hash: 0xF21C7A3F3FFBA629 | Since: 1207
 */
export function _0xF21C7A3F3FFBA629(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xF21C7A3F3FFBA629', _player);
}
/**
 * No comment provided
 *
 * Hash: 0xF4CB347D7B5EB0FD | Since: 1207
 */
export function _0xF4CB347D7B5EB0FD() {
    return Citizen.invokeNative('0xF4CB347D7B5EB0FD');
}
/**
 * No comment provided
 *
 * Hash: 0xF993373285053D77 | Since: 1207
 */
export function _0xF993373285053D77() {
    Citizen.invokeNative('0xF993373285053D77', undefined, undefined, undefined);
}
/**
 * Params: p1, p2, p3, p4 = 1.f, 0, 0, 0 in R* Scripts
 * _SPECIAL_ABILITY*
 *
 * Hash: 0xFA437FA0738C370C | Since: 1207
 */
export function _0xFA437FA0738C370C(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xFA437FA0738C370C', _player, 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xFA7DAAE3959E6C7B | Since: 1207
 */
export function _0xFA7DAAE3959E6C7B() {
    Citizen.invokeNative('0xFA7DAAE3959E6C7B', undefined, undefined);
}
/**
 * Associates a specific interactive focus mode preset between a player and a ped, with a specified location and target entity.
 * To access all available presets, refer to the file located at: `/update_1.rpf/common/data/interactive_focus_mode_presets.meta`
 *
 * Hash: 0x3946FC742AC305CD | Since: 1207
 */
export function addAmbientInteractiveFocusPreset(player, ped, pos, targetEntity) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetEntity = targetEntity instanceof IEntity ? targetEntity.handle() : targetEntity;
    return Citizen.invokeNative('0x3946FC742AC305CD', _player, _ped, pos.x, pos.y, pos.z, _targetEntity);
}
/**
 * Adds an interactive focus mode preset between a player and a specific set of coordinates with a target entity.
 * To access all available presets, refer to the file located at:update_1.rpf.common.data.interactive_focus_mode_presets.meta
 *
 *
 * Hash: 0xD48227263E3D06AE | Since: 1232
 */
export function addAmbientInteractiveFocusPresetAtCoords(player, pos, targetEntity) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _targetEntity = targetEntity instanceof IEntity ? targetEntity.handle() : targetEntity;
    return Citizen.invokeNative('0xD48227263E3D06AE', _player, pos.x, pos.y, pos.z, _targetEntity);
}
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
 * Hash: 0xAC22AA6DF4D1C1DE | Since: 1207
 */
export function addAsFollowTarget(player, ped, followMode, followPriority) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    AddPlayerAsFollowTarget(_player, _ped, 0, 0, followMode, followPriority, false);
}
/**
 * No comment provided
 *
 * Hash: 0x8F2A81C09DA9124A | Since: 1207
 */
export function clearBountyTarget(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ClearBountyTarget(_player);
}
/**
 * Clears the intensity of aura effects applied to entities for a specific player in Deadeye mode based on a flag parameter. This function is used to reset any intensity modifications set by `_SET_DEADEYE_ENTITY_AURA_INTENSITY_WITH_FLAG - 0x131E294EF60160DF`, restoring affected entities' aura intensity to their default state.
 *
 * Hash: 0x0E9057A9DA78D0F8 | Since: 1207
 */
export function clearDeadeyeAuraIntensity(player, bitflag) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x0E9057A9DA78D0F8', _player, bitflag);
}
/**
 * Disables the previously set interactive focus mode preset for a given player. see `_SET_PLAYER_INTERACTIVE_FOCUS_PRESET - 0x3C1B1807C7A415D6`
 *
 * Hash: 0xC67A4910425F11F1 | Since: 1207
 */
export function disableInteractiveFocusPreset(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xC67A4910425F11F1', _player);
}
/**
 * Sets the behavior of sprinting while the Eagleeye feature is active, determining whether sprinting cancels the effect based on the specified parameter.
 * old name was _EAGLE_EYE_SET_PLUS_FLAG_DISABLED this native can still be used as its declared.
 *
 * Hash: 0xCE285A4413B00B7F | Since: 1207
 */
export function eagleeyeSetSprintBehavior(player, disabled) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    EagleEyeSetPlusFlagDisabled(_player, disabled);
}
/**
 * Add a yellow particle to the entity.
 * entity: entity to apply yellow particle
 * entity2: same entity as entit
 * p2: always
 * p3: always 0
 *
 * Hash: 0x6ECFC621A168424C | Since: 1207
 */
export function eagleEyeAddParticleEffectToEntity(entity1, entity2, heading) {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    Citizen.invokeNative('0x6ECFC621A168424C', _entity1, _entity2, 0, heading);
}
/**
 * Retrieves whether all trails are currently hidden during Eagle Eye mode for the specified player.
 *
 * Hash: 0xA62BBAAE67A05BB0 | Since: 1207
 */
export function eagleEyeAreAllTrailsHidden(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xA62BBAAE67A05BB0', _player);
}
/**
 * Checks if the player can focus on tracks while in Eagle Eye mode. Returns true if the player is able to focus on a track, otherwise false.
 *
 * Hash: 0x1DA5C5B0923E1B85 | Since: 1207
 */
export function eagleEyeCanFocusOnTrack(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x1DA5C5B0923E1B85', _player);
}
/**
 * Clears all Eagle Eye trails that were registered for entities associated with the specified player.
 *
 * Hash: 0xE5D3EB37ABC1EB03 | Since: 1207
 */
export function eagleEyeClearRegisteredTrails(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xE5D3EB37ABC1EB03', _player);
}
/**
 * No comment provided
 *
 * Hash: 0x40AB73092C95B5F5 | Since: 1207
 */
export function eagleEyeDisableTrackingTrail(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return EagleEyeDisableTrackingTrail(_entity, undefined, undefined);
}
/**
 * Retrieves the ID of the ped that the specified player is currently tracking while in Eagle Eye mode.
 *
 * Hash: 0x3813E11A378958A5 | Since: 1207
 */
export function eagleEyeGetTrackedPedId(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x3813E11A378958A5', _player);
}
/**
 * Remove yellow particle from the entity when it was set using `0x6ECFC621A168424C`
 * entity: entity to remove yellow particles
 * entity2: same entity as entity
 * p2: always 0
 *
 * Hash: 0xDC5E09D012D759C4 | Since: 1207
 */
export function eagleEyeRemoveParticleEffectFromEntity(entity1, entity2) {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    Citizen.invokeNative('0xDC5E09D012D759C4', _entity1, _entity2, 0);
}
/**
 * false: default eagleeye color
 * true: green eagleeye color
 *
 * Hash: 0x2C41D93F550D5E37 | Since: 1207
 */
export function eagleEyeSetColor(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return EagleEyeSetColor(_player, false);
}
/**
 * No comment provided
 *
 * Hash: 0x907B16B3834C69E2 | Since: 1207
 */
export function eagleEyeSetCustomDistance(entity, distance) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    EagleEyeSetCustomDistance(_entity, distance);
}
/**
 * No comment provided
 *
 * Hash: 0xE0D6C2A146A5C993 | Since: 1207
 */
export function eagleEyeSetDrainRateModifier(player, modifier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    EagleEyeSetDrainRateModifier(_player, modifier);
}
/**
 * No comment provided
 *
 * Hash: 0x2AF423D6ECB2C485 | Since: 1207
 */
export function eagleEyeSetFocusOnAssociatedClueTrail(player, linkedWaypointPed) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _linkedWaypointPed = linkedWaypointPed instanceof IEntity ? linkedWaypointPed.handle() : linkedWaypointPed;
    EagleEyeSetFocusOnAssociatedClueTrail(_player, _linkedWaypointPed);
}
/**
 * Sets whether all trails are hidden during Eagle Eye mode.
 *
 * Hash: 0x330CA55A3647FA1C | Since: 1207
 */
export function eagleEyeSetHideAllTrails(player, hide) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x330CA55A3647FA1C', _player, hide);
}
/**
 * No comment provided
 *
 * Hash: 0x22C8B10802301381 | Since: 1207
 */
export function eagleEyeSetRange(player, range) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x22C8B10802301381', _player, range);
}
/**
 * Enable/disable a color on the entity in eagle eye mode.
 *
 * Hash: 0xBC02B3D151D3859F | Since: 1207
 */
export function eagleEyeSetRegisteredEntityGlow(entity, enable) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xBC02B3D151D3859F', _entity, enable);
}
/**
 * No comment provided
 *
 * Hash: 0xDFC85C5199045026 | Since: 1207
 */
export function eagleEyeSetTrackingUpgrade(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    EagleEyeSetTrackingUpgrade(_player, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x6FA957D1B55941C1 | Since: 1311
 */
export function eagleEyeSetTrackingUpgrade2(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    EagleEyeSetTrackingUpgrade2(_player, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x95EE1DEE1DCD9070 | Since: 1207
 */
export function enableCustomDeadeyeAbility(player, enable) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    EnableCustomDeadeyeAbility(_player, enable);
}
/**
 * (Un)lock Eagle Eye functionality
 *
 * Hash: 0xA63FCAD3A6FEC6D2 | Since: 1207
 */
export function enableEagleeye(player, enable) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    EnableEagleeye(_player, enable);
}
/**
 * No comment provided
 *
 * Hash: 0xE5A3DD2FF84E1A4B | Since: 1232
 */
export function forceRestScenario(toggle) {
    ForceRestScenario(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x5B6193813E03E4E9 | Since: 1207
 */
export function formatNameString() {
    return FormatPlayerNameString();
}
/**
 * No comment provided
 *
 * Hash: 0x46FA0AE18F4C7FA9 | Since: 1207
 */
export function getActiveHorseFor(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetActiveHorseForPlayer(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x2E78D822208E740A | Since: 1207
 */
export function getAiDefenseModifierAgainstAi(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetAiPlayerDefenseModifierAgainstAi(_player);
}
/**
 * p0: mostly Ped Hashes
 *
 * Hash: 0x8E84119A23C16623 | Since: 1207
 */
export function getConstructedDiscoveredCharacterName(p0, model, outfit) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    return GetConstructedDiscoveredCharacterName(p0, model, outfit);
}
/**
 * Returns the depletion delay value for the Deadeye ability that was previously set using `SetDeadeyeAbilityDepletionDelay - 0x870634493CB4372C`
 *
 * Hash: 0xE92261BD28C0878F | Since: 1207
 */
export function getDeadeyeAbilityDepletionDelay(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xE92261BD28C0878F', _player);
}
/**
 * No comment provided
 *
 * Hash: 0xCCE7C695C164C35F | Since: 1207
 */
export function getDeadeyeAbilityLevel(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetDeadeyeAbilityLevel(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x0772F87D7B07719A | Since: 1207
 */
export function getHasDiscoveredCharacterNameSp(player, discoveryHash) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof discoveryHash === 'string')
        discoveryHash = GetHashKey(discoveryHash);
    return GetHasPlayerDiscoveredCharacterNameSp(_player, 0, discoveryHash);
}
/**
 * No comment provided
 *
 * Hash: 0x32348719DCED2969 | Since: 1207
 */
export function getIsDeadeyeTaggingEnabled(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetIsDeadeyeTaggingEnabled(_player);
}
/**
 * Retrieves the number of marks placed on a PED when Deadeye mode is active for the specified player.
 *
 * Hash: 0x27AD7162D3FED01E | Since: 1207
 */
export function getNumDeadeyeMarksOnPed(player, ped) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x27AD7162D3FED01E', _player, _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xCCD9B77F70D31C9D | Since: 1207
 */
export function getNumMarkedDeadeyeTargets(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetNumMarkedDeadeyeTargets(_player);
}
/**
 * it is used to check for that period of time if player damaged any peds only returns the last 3 hits with the entity ids so if you hit the same entity 3 times it will return the same entity id 3 times, if you hit 4 different entities within that time it will return the last 3 entity ids
 * only stores the last 3 hits in the data view buffer
 * duration is in miliseconds
 * you need dataview
 *
 * Hash: 0x1A6E84F13C952094 | Since: 1207
 */
export function getPedsDamagedByRecently(player, duration) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x1A6E84F13C952094', _player, duration);
}
/**
 * No comment provided
 *
 * Hash: 0xDF66A37936D5F3D9 | Since: 1207
 */
export function getCachedDeadEyeAmount(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerCachedDeadEyeAmount(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xA81D24AE0AF99A5E | Since: 1207
 */
export function getDeadEye(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerDeadEye(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x3A6AE4EEE30370FE | Since: 1207
 */
export function getDeadEyeMeterLevel(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerDeadEyeMeterLevel(_player, false);
}
/**
 * No comment provided
 *
 * Hash: 0x0317C947D062854E | Since: 1207
 */
export function getHealth(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerHealth(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x22CD23BB0C45E0CD | Since: 1207
 */
export function getHealthRechargeMultiplier(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerHealthRechargeMultiplier(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x5CA6BBD4A7D8145E | Since: 1207
 */
export function getHuntingWagon(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerHuntingWagon(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x592F58BC4D2A2CF3 | Since: 1207
 */
export function getMaxDeadEye(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerMaxDeadEye(_player, undefined);
}
/**
 * See _SET_PLAYER_MOOD
 *
 * Hash: 0x054473164C012699 | Since: 1207
 */
export function getMood(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerMood(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xAD03B03737CE6810 | Since: 1207
 */
export function getOwnerOfMount(mount) {
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    return GetPlayerOwnerOfMount(_mount);
}
/**
 * No comment provided
 *
 * Hash: 0x7C803BDC8343228D | Since: 1207
 */
export function getOwnerOfVehicle(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetPlayerOwnerOfVehicle(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x5EBE38A20BC51C27 | Since: 1207
 */
export function getPed2(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerPed2(_player);
}
/**
 * If player has less Dead Eye than required, Dead Eye cant be triggered.
 *
 * Hash: 0x811A748B1BE231BA | Since: 1207
 */
export function getRequiredDeadEyeAmount(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerRequiredDeadEyeAmount(_player);
}
/**
 * playerResetFlag: See 0x9F9A829C6751F3C7
 *
 * Hash: 0xFE691E89C08937B6 | Since: 1207
 */
export function getResetFlag(player, playerResetFlag) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerResetFlag(_player, playerResetFlag);
}
/**
 * No comment provided
 *
 * Hash: 0xAB3773E7AA1E9DCC | Since: 1207
 */
export function getSpecialAbilityMultiplier(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerSpecialAbilityMultiplier(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x0FF421E467373FCF | Since: 1207
 */
export function getStamina(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerStamina(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x68A0389E0718AC8F | Since: 1207
 */
export function getStaminaDepletionMultiplier(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerStaminaDepletionMultiplier(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x617D3494AD58200F | Since: 1207
 */
export function getStaminaRechargeMultiplier(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerStaminaRechargeMultiplier(_player);
}
/**
 * Returns true if PromptType is enabled for ped (mount)
 * Params: See 0x0751D461F06E41CE
 *
 * Hash: 0xEA8F168A76A0B9BC | Since: 1207
 */
export function getUiPromptForPedIsEnabled(player, ped, promptType, promptMode) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPlayerUiPromptForPedIsEnabled(_player, _ped, promptType, promptMode);
}
/**
 * Returns false if PromptType is enabled
 * Params: See 0x0751D461F06E41CE
 *
 * Hash: 0x6614F9039BD31931 | Since: 1207
 */
export function getUiPromptIsDisabled(player, promptType, promptMode) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerUiPromptIsDisabled(_player, promptType, promptMode);
}
/**
 * No comment provided
 *
 * Hash: 0xFE0304050261442C | Since: 1207
 */
export function getWeaponDamage(player, weaponHash) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetPlayerWeaponDamage(_player, weaponHash);
}
/**
 * No comment provided
 *
 * Hash: 0xB48050D326E9A2F3 | Since: 1207
 */
export function getSaddleHorseFor(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetSaddleHorseForPlayer(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xD3F7445CEA2E5035 | Since: 1207
 */
export function getTempHorse(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetTempPlayerHorse(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xB9050A97594C8832 | Since: 1207
 */
export function getVehicleOwnedBy(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetVehicleOwnedByPlayer(_player);
}
/**
 * Returns -1.0f if no multiplier has been set
 *
 * Hash: 0xA82964B9D8D6A983 | Since: 1207
 */
export function getWantedLevelMultiplier() {
    return GetWantedLevelMultiplier();
}
/**
 * this native checks if the player has damaged or killed any ped human/animal recently within the duration passed, either by shooting or even using melee
 * duration is in miliseconds
 *
 * Hash: 0x72AD59F7B7FB6E24 | Since: 1207
 */
export function hasDamagedAnyPedRecently(player, duration) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x72AD59F7B7FB6E24', _player, duration);
}
/**
 * No comment provided
 *
 * Hash: 0x8A0643B0B4CA276B | Since: 1207
 */
export function isDeadeyeAbilityLocked(player, abilityType) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsDeadeyeAbilityLocked(_player, abilityType);
}
/**
 * No comment provided
 *
 * Hash: 0x0E6846476906C9DD | Since: 1207
 */
export function isEagleEyeRegisteredForEntity(player, entity) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEagleEyeRegisteredForEntity(_player, _entity);
}
/**
 * No comment provided
 *
 * Hash: 0xE24C64D9ADED2EF5 | Since: 1207
 */
export function isFollowingTarget(player, ped) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPlayerFollowingTarget(_player, _ped);
}
/**
 * Checks if player is focused on any entity
 *
 * Hash: 0x1A51BFE60708E482 | Since: 1207
 */
export function isFreeFocusing(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerFreeFocusing(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x04D7F33640662FA2 | Since: 1207
 */
export function isInScope(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsPlayerInScope(_player);
}
/**
 * returns true if the player is on a road while riding a horse but at a certain speed, if you go off road then it returns false or if you go too slow like walking state it also returns false
 *
 * Hash: 0xE631EAF35828FA67 | Since: 1207
 */
export function isMountOnRoad(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xE631EAF35828FA67', _player);
}
/**
 * This native is used to determine if the player has an active lockon an entity while riding a horse.
 *
 * Hash: 0x2009F8AB7A5E9D6D | Since: 1207
 */
export function isOnMountLockonEntity(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x2009F8AB7A5E9D6D', _player);
}
/**
 * No comment provided
 *
 * Hash: 0x45AB66D02B601FA7 | Since: 1207
 */
export function isSecondarySpecialAbilityActive(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsSecondarySpecialAbilityActive(_player);
}
/**
 * Returns true if eagle eye is enabled for the player
 *
 * Hash: 0xE022CC1B545F1D9F | Since: 1207
 */
export function isSecondarySpecialAbilityEnabled(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsSecondarySpecialAbilityEnabled(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xB16223CB7DA965F0 | Since: 1207
 */
export function isSpecialAbilityActive(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return IsSpecialAbilityActive(_player);
}
/**
 * Checks if the player's Deadeye ability is enabled.
 *
 * Hash: 0xDE6C85975F9D4894 | Since: 1207
 */
export function isSpecialAbilityEnabled(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xDE6C85975F9D4894', _player);
}
/**
 * Toggle handles wether Deadeye and Eagleeye are infinite or not.
 *
 * Hash: 0x28A13BF6B05C3D83 | Since: 1207
 */
export function modifyInfiniteTrailVision(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ModifyInfiniteTrailVision(_player, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xFB0E622B401884D3 | Since: 1207
 */
export function modifyDiscoveredCharacterNameMpSetUndiscovered(discoveryHash) {
    if (typeof discoveryHash === 'string')
        discoveryHash = GetHashKey(discoveryHash);
    ModifyPlayerDiscoveredCharacterNameMpSetUndiscovered(discoveryHash);
}
/**
 * Params: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePromptType
 * promptType is mostly 34 (PP_TRACK_ANIMAL), promptMode = 0 (PP_MODE_BLOCK) in R* Scripts
 *
 * Hash: 0x0751D461F06E41CE | Since: 1207
 */
export function modifyUiPrompt(player, promptType, promptMode, disabled) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ModifyPlayerUiPrompt(_player, promptType, promptMode, disabled);
}
/**
 * Params: See 0x0751D461F06E41CE
 *
 * Hash: 0xA3DB37EDF9A74635 | Since: 1207
 */
export function modifyUiPromptForPed(player, ped, promptType, promptMode, enabled) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ModifyPlayerUiPromptForPed(_player, _ped, promptType, promptMode, enabled);
}
/**
 * Returns true if the given player has a valid ped.
 *
 * Hash: 0x0760D6F70EBCC05C | Since: 1207
 */
export function networkHasValidPed(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkHasPlayerValidPed(_player);
}
/**
 * Used for setting up eagle eye for entity
 * Params: p2 = re-register or not?
 *
 * Hash: 0x543DFE14BE720027 | Since: 1207
 */
export function registerEagleEyeForEntity(player, entity) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    RegisterEagleEyeForEntity(_player, _entity, false);
}
/**
 * No comment provided
 *
 * Hash: 0xAC67098A1E54ABB0 | Since: 1207
 */
export function registerEagleEyeTrailsForEntity(player, entity) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    RegisterEagleEyeTrailsForEntity(_player, _entity, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0C6B89876262A99D | Since: 1207
 */
export function removeAsFollowTarget(player, ped) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RemovePlayerAsFollowTarget(_player, _ped);
}
/**
 * Resets any aura effects applied to entities for a specific player in Deadeye mode, returning all aura-related visuals to their default state. This function is primarily used to remove any highlighting or aura effects set by `_SET_DEADEYE_ENTITY_AURA - 0x2B12B6FC8B8772AB` and `_SET_DEADEYE_ENTITY_AURA_INTENSITY - 0x131E294EF60160DF`
 *
 * Hash: 0xE910932F4B30BE23 | Since: 1207
 */
export function resetDeadeyeAuraEffect(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xE910932F4B30BE23', _player);
}
/**
 * Activates EagleEye, called together with 0x28A13BF6B05C3D83
 *
 * Hash: 0x1710BC33CFB83634 | Since: 1207
 */
export function secondarySpecialAbilitySetActive(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SecondarySpecialAbilitySetActive(_player);
}
/**
 * Deactivates EagleEye, called together with 0xC0B21F235C02139C
 *
 * Hash: 0x64FF4BF9AF59E139 | Since: 1207
 */
export function secondarySpecialAbilitySetDisabled(player, disabled) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SecondarySpecialAbilitySetDisabled(_player, disabled);
}
/**
 * Sets Player's Defense against AI modifier
 *
 * Hash: 0x914071FF93AF2692 | Since: 1207
 */
export function setAiDefenseModifierAgainstAi(player, modifier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetAiPlayerDefenseModifierAgainstAi(_player, modifier);
}
/**
 * No comment provided
 *
 * Hash: 0x6ADF821FBF21920E | Since: 1207
 */
export function setBountyTarget(player, target) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _target = target instanceof IPlayer ? target.playerId() : target;
    SetBountyTarget(_player, _target);
}
/**
 * No comment provided
 *
 * Hash: 0xBE0C524970892D41 | Since: 1207
 */
export function setBowDrawReductionTimeInDeadeye(player, drawReductionTime) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetBowDrawReductionTimeInDeadeye(_player, drawReductionTime);
}
/**
 * Decreases Stamina bar drain speed by % when drawing a bow.
 *
 * Hash: 0xFE7C9CF376D23342 | Since: 1207
 */
export function setBowStaminaDrainSpeed(player, staminaDrain) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetBowStaminaDrainSpeed(_player, staminaDrain);
}
/**
 * No comment provided
 *
 * Hash: 0x7761A30432C91297 | Since: 1207
 */
export function setDamageCloseDistanceBonus(player, closeRangeLowerBound, closeRangeUpperBound) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetDamageCloseDistanceBonus(_player, closeRangeLowerBound, closeRangeUpperBound);
}
/**
 * No comment provided
 *
 * Hash: 0x5006C36652D6EC56 | Since: 1207
 */
export function setDamageCloseDistanceBonusTotal(player, closeDamageBonus) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetDamageCloseDistanceBonusTotal(_player, closeDamageBonus);
}
/**
 * No comment provided
 *
 * Hash: 0xED591CB17C8BA216 | Since: 1207
 */
export function setDamageFarDistanceBonus(player, farRangeLowerBound, farRangeUpperBound) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetDamageFarDistanceBonus(_player, farRangeLowerBound, farRangeUpperBound);
}
/**
 * No comment provided
 *
 * Hash: 0x1F0E3A4434565F8F | Since: 1207
 */
export function setDamageFarDistanceBonusTotal(player, farDamageBonus) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetDamageFarDistanceBonusTotal(_player, farDamageBonus);
}
/**
 * Only used in R* SP Script short_update
 *
 * Hash: 0x870634493CB4372C | Since: 1207
 */
export function setDeadeyeAbilityDepletionDelay(player, delay) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetDeadeyeAbilityDepletionDelay(_player, delay);
}
/**
 * Max level is 5.
 *
 * Hash: 0xF0FE8E790BFEB5BB | Since: 1207
 */
export function setDeadeyeAbilityLevel(player, level) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetDeadeyeAbilityLevel(_player, level);
}
/**
 * No comment provided
 *
 * Hash: 0x2797B8D66DD0EBB8 | Since: 1207
 */
export function setDeadeyeAbilityLocked(player, abilityType, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetDeadeyeAbilityLocked(_player, abilityType, toggle);
}
/**
 * Applies a aura effect to nearby entities when Deadeye is active, based on a flag parameter. This includes humans, animals, vehicles, and horses pulling those vehicles. Additionally, depending on the flag value, the player's appearance may change (e.g., turning gray).
 * - flag (int): A flag that determines the behavior of the aura effect. 2 means people 4 means animal etc.
 *
 * Hash: 0x2B12B6FC8B8772AB | Since: 1207
 */
export function setDeadeyeEntityAura(player, flag) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x2B12B6FC8B8772AB', _player, flag);
}
/**
 * Applies a customizable aura effect to nearby entities when Deadeye is active, with control over aura intensity and additional behavior based on a flag parameter.
 * - flag (int): A flag that determines the behavior of the aura effect and which entities are affected. 2: Applies aura to humans. 4: Applies aura to animals.
 *
 * Hash: 0x131E294EF60160DF | Since: 1207
 */
export function setDeadeyeEntityAuraIntensityWithFlag(player, intensity, flag) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x131E294EF60160DF', _player, 0, 0, 0, intensity, flag);
}
/**
 * No comment provided
 *
 * Hash: 0x83FCD6921FC8FD05 | Since: 1207
 */
export function setDeadeyeTaggingConfig(player, filter) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetDeadeyeTaggingConfig(_player, filter);
}
/**
 * No comment provided
 *
 * Hash: 0x6B5DDFB967E5073D | Since: 1207
 */
export function setDeadeyeTaggingEnabled(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetDeadeyeTaggingEnabled(_player, toggle);
}
/**
 * Disables the players ability to be wanted by lawmen
 *
 * Hash: 0x8674D138391FFB1B | Since: 1207
 */
export function setDisableWantedLevel(player, disable) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetDisablePlayerWantedLevel(_player, disable);
}
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
 * Hash: 0x7146CF430965927C | Since: 1207
 */
export function setLocalPersonaAbilityFlag(flagId, toggle) {
    SetLocalPlayerPersonaAbilityFlag(flagId, toggle);
}
/**
 * Focus Fire VFX start for player: p1 = focusfire
 *
 * Hash: 0x5F8E0303C229C84B | Since: 1207
 */
export function setLockonFocusFireVfx(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return SetLockonFocusFireVfx(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xEA6DE0CD15AECBE2 | Since: 1207
 */
export function setMaxWantedLevel2(maxWantedLevel) {
    SetMaxWantedLevel2(maxWantedLevel);
}
/**
 * No comment provided
 *
 * Hash: 0x5B9813ECF7633FE8 | Since: 1207
 */
export function setMountPromptDisabled(disabled) {
    SetMountPromptDisabled(disabled);
}
/**
 * Seems to work similar to 0xD2CB0FB0FDCB473D
 *
 * Hash: 0x8FBF9EDB378CCB8C | Since: 1207
 */
export function setPedActiveHorse(player, horse) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _horse = horse instanceof IPed ? horse.handle() : horse;
    SetPedActivePlayerHorse(_player, _horse);
}
/**
 * No comment provided
 *
 * Hash: 0xD2CB0FB0FDCB473D | Since: 1207
 */
export function setPedAsSaddleHorseFor(player, mount) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    SetPedAsSaddleHorseForPlayer(_player, _mount);
}
/**
 * Sets the weapon that the specified player will aim with. The weapon must already be assigned to the PED. This also determines the weapon order, specifying which weapon the player will automatically switch to when the current weapon runs out of ammo.
 *
 * Hash: 0xCFFC3ECCD7A5CCEB | Since: 1207
 */
export function setAimWeapon(player, weapon, weaponDrawOrder) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof weapon === 'string')
        weapon = GetHashKey(weapon);
    Citizen.invokeNative('0xCFFC3ECCD7A5CCEB', _player, weapon, weaponDrawOrder);
}
/**
 * No comment provided
 *
 * Hash: 0x39363DFD04E91496 | Since: 1311
 */
export function setCanMercyKill(player, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerCanMercyKill(_player, toggle);
}
/**
 * Enables or disables the Pick Up prompt for a hat on the ground for the specified player. When set to true, the player will see a prompt to pick up the hat if they are near it.
 *
 * Hash: 0xACA45DDCEF6071C4 | Since: 1207
 */
export function setCanPickupHat(player, canPickup) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xACA45DDCEF6071C4', _player, canPickup);
}
/**
 * Activates the Surrender prompt for the specified player in the current frame.
 *
 * Hash: 0xCBB54CC7FFFFAB86 | Since: 1207
 */
export function setCooperatePromptThisFrame(player, targetPed, promptOrder) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    Citizen.invokeNative('0xCBB54CC7FFFFAB86', _player, _targetPed, promptOrder, false);
}
/**
 * damageInfo: STANDARD_PED_DAMAGE, STANDARD_FEMALE_PED_DAMAGE, STANDARD_PLAYER_PED_DAMAGE_MP, STANDARD_FEMALE_PLAYER_PED_DAMAGE_MP
 *
 * Hash: 0x78B3D19AF6391A55 | Since: 1207
 */
export function setDamageInfoOverride(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return SetPlayerDamageInfoOverride(_player);
}
/**
 * Sets the aura color for entities that the player can target in Deadeye mode, based on a specific hash value. This Native was previously named `SetPlayerStatFlagHash`, but it has been re-evaluated and renamed to better reflect its function in controlling the Deadeye aura color for targeted entities
 * some colors
 * 0: Default aura
 * 1014693585
 * 1936842089
 * 1979474018
 *
 * Hash: 0x768E81AE285A4B67 | Since: 1207
 */
export function setDeadEyeAuraByHash(player, auraColorHash) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof auraColorHash === 'string')
        auraColorHash = GetHashKey(auraColorHash);
    SetPlayerStatFlagHash(_player, auraColorHash);
}
/**
 * Sets stamina core drains peed using ranged damage scale and melee damage scale
 *
 * Hash: 0x497A6539BB0E8787 | Since: 1207
 */
export function setDefenseModifier(player, weaponDefenseMod, meleeDefenseMod) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerDefenseModifier(_player, weaponDefenseMod, meleeDefenseMod);
}
/**
 * bullet damage modifier: type = 4
 * explosive damage Defense mod: type = 7
 * fire damage Defense mod: type = 8, 15
 *
 * Hash: 0x93F499CAE53FCD05 | Since: 1207
 */
export function setDefenseTypeModifier(player, _type, defenseModifier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerDefenseTypeModifier(_player, _type, defenseModifier);
}
/**
 * No comment provided
 *
 * Hash: 0x2D3ACE3DE0A2B622 | Since: 1207
 */
export function setExplosiveWeaponDamageModifier(player, modifier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerExplosiveWeaponDamageModifier(_player, modifier);
}
/**
 * No comment provided
 *
 * Hash: 0x7C32191D9FB2BDEA | Since: 1207
 */
export function setHasDiscoveredCharacterNameMp(discoveryHash) {
    if (typeof discoveryHash === 'string')
        discoveryHash = GetHashKey(discoveryHash);
    SetPlayerHasDiscoveredCharacterNameMp(discoveryHash);
}
/**
 * No comment provided
 *
 * Hash: 0x946D46CD6DFB9742 | Since: 1207
 */
export function setHasDiscoveredCharacterNameSp(player, discoveryHash) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof discoveryHash === 'string')
        discoveryHash = GetHashKey(discoveryHash);
    SetPlayerHasDiscoveredCharacterNameSp(_player, 0, discoveryHash);
}
/**
 * Sets the player's ability to wear hats based on the specified flag. The flag value determines whether the player can wear all hats or only the ones they own.
 * If the flag is set to 15 and `allow` is true, the player can wear all available hats. However, if you want to restrict the player to wearing only their owned hats (flag 1), you **must first** disable flag 15 by setting it to false, and then set flag 1 to true.
 *
 * Hash: 0xA0C683284DF027C7 | Since: 1207
 */
export function setHatAccess(player, flag, allow) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xA0C683284DF027C7', _player, flag, allow);
}
/**
 * Setting player's Health recharge time to zero forces immediate health regen
 *
 * Hash: 0x535ED4605F89AB6E | Since: 1207
 */
export function setHealthRechargeTimeModifier(player, modifier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerHealthRechargeTimeModifier(_player, modifier);
}
/**
 * Only applies to HUNTERCART01
 *
 * Hash: 0x6A4404BDFA62CE2C | Since: 1207
 */
export function setHuntingWagon(player, wagon) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _wagon = wagon instanceof IVehicle ? wagon.handle() : wagon;
    SetPlayerHuntingWagon(_player, _wagon);
}
/**
 * No comment provided
 *
 * Hash: 0x98CD760DE43B612E | Since: 1207
 */
export function setInteractionNegativeResponse(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return SetPlayerInteractionNegativeResponse(_player);
}
/**
 * No comment provided
 *
 * Hash: 0xC6366A585659D15C | Since: 1207
 */
export function setInteractionPositiveResponse(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return SetPlayerInteractionPositiveResponse(_player);
}
/**
 * Sets your targeting mode for when you're in a vehicle (perhaps a mount/horse).
 * see SET_PLAYER_TARGETING_MODE for eTargetingMode
 *
 * Hash: 0x19B4F71703902238 | Since: 1207
 */
export function setInVehicleTargetingMode(targetMode) {
    SetPlayerInVehicleTargetingMode(targetMode);
}
/**
 * _SET_PLAYER_A* - _SET_PLAYER_C*
 *
 * Hash: 0x43F50A7CD2482156 | Since: 1207
 */
export function setLassoDamagePerSecond(player, damage) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerLassoDamagePerSecond(_player, damage);
}
/**
 * No comment provided
 *
 * Hash: 0x4EA69188FBCE6A7D | Since: 1207
 */
export function setLocalAccuracyFloorModifier(player, accuracy) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerLocalAccuracyFloorModifier(_player, accuracy);
}
/**
 * No comment provided
 *
 * Hash: 0x292F0B6EDC82E3A4 | Since: 1207
 */
export function setManageBuffSuperJump(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerManageBuffSuperJump(_player, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xE133C1EC5300F740 | Since: 1207
 */
export function setMaxAmmoOverrideForAmmoType(player, ammoType, amount) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof ammoType === 'string')
        ammoType = GetHashKey(ammoType);
    SetPlayerMaxAmmoOverrideForAmmoType(_player, ammoType, amount);
}
/**
 * Sets the melee combat prompt for a specific player using a predefined text entry. use game string or
 * AddTextEntry("custom_text", "Throw a punch") and use custom_text in the native
 *
 * Hash: 0x0FAF95D71ED67ADE | Since: 1207
 */
export function setMeleePromptText(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x0FAF95D71ED67ADE', _player);
}
/**
 * mood: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePedMood
 *
 * Hash: 0x39BED552DB46FFA9 | Since: 1207
 */
export function setMood(player, mood) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerMood(_player, mood);
}
/**
 * Name could potentially be inaccurate.
 * Used in Script Function HORSE_SETUP_PLAYER_HORSE_ATTRIBUTES (p1 = true)
 * _SET_PLAYER_L* - _SET_PLAYER_M*
 *
 * Hash: 0xDF93973251FB2CA5 | Since: 1207
 */
export function setMountStateActive(player, active) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerMountStateActive(_player, active);
}
/**
 * Seems to enable active horse equipment prompt when being near it and enables the control that opens the inventory as well
 *
 * Hash: 0xE6D4E435B56D5BD0 | Since: 1207
 */
export function setOwnsMount(player, mount) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    SetPlayerOwnsMount(_player, _mount);
}
/**
 * No comment provided
 *
 * Hash: 0xD0E02AA618020D17 | Since: 1207
 */
export function setOwnsVehicle(player, vehicle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetPlayerOwnsVehicle(_player, _vehicle);
}
/**
 * Shows or hides all Pick Up prompts for the specified player, including the prompt for picking up hats from the ground. When set to true, the player will see Pick Up prompts for all nearby items. If set to false, all Pick Up prompts will be hidden.
 *
 * Hash: 0xD1A70C1E8D1031FE | Since: 1207
 */
export function setPickupPromptVisible(player, enable) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xD1A70C1E8D1031FE', _player, enable);
}
/**
 * Sets the stand prompt for a specific player using a predefined text entry. use AddTextEntry for promptTextKey for custom names
 *
 * Hash: 0x06C3DB00B69D5435 | Since: 1232
 */
export function setPromptLeaveText(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x06C3DB00B69D5435', _player);
}
/**
 * No comment provided
 *
 * Hash: 0xDEE80FEDFDD43C9B | Since: 1207
 */
export function setRemoteAccuracyFloorModifier(player, accuracy) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerRemoteAccuracyFloorModifier(_player, accuracy);
}
/**
 * https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePlayerResetFlags
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/PLAYER_RESET_FLAGS
 *
 * Hash: 0x9F9A829C6751F3C7 | Since: 1207
 */
export function setResetFlag(player, playerResetFlag) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerResetFlag(_player, playerResetFlag, false);
}
/**
 * Sets the sit prompt for a specific player using a predefined text entry. use game strings like PLAYER_SIT or use custom with
 * AddTextEntry("sit_custom", "Take a seat")
 * this native must be invoked
 * https://imgur.com/gallery/0x988c9045531b9fce-9bTHgkv
 *
 * Hash: 0x988C9045531B9FCE | Since: 1232
 */
export function setSitPromptText(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x988C9045531B9FCE', _player);
}
/**
 * No comment provided
 *
 * Hash: 0xBBADFB5E5E5766FB | Since: 1207
 */
export function setStaminaSprintDepletionMultiplier(player, multiplier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerStaminaSprintDepletionMultiplier(_player, multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0x967FF5BC0CFE6D26 | Since: 1207
 */
export function setTotalAccuracyModifier(player, accuracy) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerTotalAccuracyModifier(_player, accuracy);
}
/**
 * No comment provided
 *
 * Hash: 0xAF341032E97FB061 | Since: 1207
 */
export function setTrampleDamageModifier(player, modifier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerTrampleDamageModifier(_player, modifier);
}
/**
 * No comment provided
 *
 * Hash: 0x00EB5A760638DB55 | Since: 1207
 */
export function setWeaponDrawSpeed(player, weapon, speed) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof weapon === 'string')
        weapon = GetHashKey(weapon);
    Citizen.invokeNative('0x00EB5A760638DB55', _player, weapon, speed);
}
/**
 * No comment provided
 *
 * Hash: 0x59F0AFF3E0A1B019 | Since: 1207
 */
export function setWeaponGroupAsInstantKill(player, weaponGroup, toggle) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof weaponGroup === 'string')
        weaponGroup = GetHashKey(weaponGroup);
    SetPlayerWeaponGroupAsInstantKill(_player, weaponGroup, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xFC79DCC94D0A5897 | Since: 1207
 */
export function setWeaponGroupDamageModifier(player, weaponGroup, modifier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof weaponGroup === 'string')
        weaponGroup = GetHashKey(weaponGroup);
    SetPlayerWeaponGroupDamageModifier(_player, weaponGroup, modifier);
}
/**
 * Decreases the damage the player receives while on horseback
 * Previous name: _SET_RECEIVED_HORSEBACK_DAMAGE_DECREASE
 *
 * Hash: 0xB427911EA6DFFEF3 | Since: 1207
 */
export function setReceivedDamageTakenOnHorsebackModifier(player, damageDecrease) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetReceivedHorsebackDamageDecrease(_player, damageDecrease);
}
/**
 * No comment provided
 *
 * Hash: 0xDC68829BB3F37023 | Since: 1207
 */
export function setShowInfoCard(player, showingInfoCard) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetShowInfoCard(_player, showingInfoCard);
}
/**
 * No comment provided
 *
 * Hash: 0xAE4BCC79C587EBBF | Since: 1207
 */
export function setSpecialAbilityActivationCost(player, activationCost) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetSpecialAbilityActivationCost(_player, activationCost, 0);
}
/**
 * Only used in R* SP Script short_update
 *
 * Hash: 0xC0B1C05B313693D1 | Since: 1207
 */
export function setSpecialAbilityDisableTimer(player, timer) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetSpecialAbilityDisableTimer(_player, timer);
}
/**
 * durationCost: per second
 *
 * Hash: 0xB783F75940B23014 | Since: 1207
 */
export function setSpecialAbilityDurationCost(player, durationCost) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetSpecialAbilityDurationCost(_player, durationCost);
}
/**
 * No comment provided
 *
 * Hash: 0x5A498FCA232F71E1 | Since: 1207
 */
export function setSpecialAbilityMultiplier(player, multiplier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetSpecialAbilityMultiplier(_player, multiplier);
}
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
 * Hash: 0x00BA333DA05ADC23 | Since: 1207
 */
export function setSpecialAbilityType(player, _type) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetSpecialAbilityType(_player, _type);
}
/**
 * No comment provided
 *
 * Hash: 0x0E1DB1F8F5B561DC | Since: 1207
 */
export function setUsedItemEffect(health, stamina, deadeye, healthCore, staminaCore, deadeyeCore) {
    SetUsedItemEffect(health, stamina, deadeye, healthCore, staminaCore, deadeyeCore);
}
/**
 * No comment provided
 *
 * Hash: 0x11A7FF918EF6BC66 | Since: 1207
 */
export function setWeaponDegradationModifier(player, modifier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetWeaponDegradationModifier(_player, modifier);
}
/**
 * Drains Deadeye by given amount.
 *
 * Hash: 0x200114E99552462B | Since: 1207
 */
export function specialAbilityDrainByAmount(player, amount) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityDrainByAmount(_player, amount, undefined);
}
/**
 * Returns Deadeye value from player
 *
 * Hash: 0x029884FB65821B07 | Since: 1207
 */
export function specialAbilityGetAmountCached(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return SpecialAbilityGetAmountCached(_player);
}
/**
 * Restores Deadeye by given amount.
 * Params: p2, p3, p4 = 0, 0, 1 in R* Scripts
 *
 * Hash: 0x51345AE20F22C261 | Since: 1207
 */
export function specialAbilityRestoreByAmount(player, amount) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityRestoreByAmount(_player, amount, 0, 0, 0);
}
/**
 * Only used in R* SP Script short_update
 * Restores Deadeye Outer Ring
 *
 * Hash: 0x2498035289B5688F | Since: 1207
 */
export function specialAbilityRestoreOuterRing(player, amount) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityRestoreOuterRing(_player, amount);
}
/**
 * Activates the special ability for the specified player.
 *
 * Hash: 0xBBA140062B15A8AC | Since: 1207
 */
export function specialAbilitySetActivate(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xBBA140062B15A8AC', _player);
}
/**
 * No comment provided
 *
 * Hash: 0xAE637BB8EF017875 | Since: 1207
 */
export function specialAbilitySetDisabled(player, disabled) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilitySetDisabled(_player, disabled);
}
/**
 * No comment provided
 *
 * Hash: 0xC0B21F235C02139C | Since: 1207
 */
export function specialAbilitySetEagleEyeDisabled(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilitySetEagleEyeDisabled(_player);
}
/**
 * Params: p1 = -1 in R* Scripts
 *
 * Hash: 0x1D77B47AFA584E90 | Since: 1207
 */
export function specialAbilityStartRestore(player, abilityType) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SpecialAbilityStartRestore(_player, abilityType, false);
}
/**
 * No comment provided
 *
 * Hash: 0x9DAE1380CC5C6451 | Since: 1207
 */
export function unregisterEagleEyeForEntity(player, entity) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    UnregisterEagleEyeForEntity(_player, _entity);
}
/**
 * No comment provided
 *
 * Hash: 0x9A957912CE2EABD1 | Since: 1207
 */
export function unregisterEagleEyeTrailsForEntity(player, entity) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    UnregisterEagleEyeTrailsForEntity(_player, _entity, undefined);
}
