import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x153973AB99FE8980 | Since: 1207
 */
export function addEntityToMixGroup(entity: number | IEntity): string {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return AddEntityToAudioMixGroup(_entity, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x95D9F4BC443956E7 | Since: 1207
 */
export function addPedToConversation(ped: number | IPed): [string, string] {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return AddPedToConversation(_ped);
}

/**
 * Old name: AUDIO_IS_SCRIPTED_MUSIC_PLAYING
 * 
 * Hash: 0x845FFC3A4FEEFA3E | Since: 1207
 */
export function isMusicPlaying(): boolean {
    return AudioIsMusicPlaying();
}

/**
 * No comment provided
 * 
 * Hash: 0x374F0E716BFCDE82 | Since: 1207
 */
export function triggerExplosion(pos: Vector3): string {
    return AudioTriggerExplosion(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x5B17A90291133DA5 | Since: 1207
 */
export function cancelMusicEvent(): [boolean, string] {
    return CancelMusicEvent();
}

/**
 * No comment provided
 * 
 * Hash: 0x120C48C614909FA4 | Since: 1207
 */
export function clearAmbientZoneListState(): string {
    return ClearAmbientZoneListState(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x218DD44AAAC964FF | Since: 1207
 */
export function clearAmbientZoneState(): string {
    return ClearAmbientZoneState(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x33D51F801CB16E4F | Since: 1207
 */
export function clearConversationHistory(): void {
    ClearConversationHistory();
}

/**
 * No comment provided
 * 
 * Hash: 0xD2C91A0B572AAE56 | Since: 1207
 */
export function createNewScriptedConversation(): [boolean, string] {
    return CreateNewScriptedConversation();
}

/**
 * No comment provided
 * 
 * Hash: 0xA9A41C1E940FB0E8 | Since: 1207
 */
export function disablePedPain(ped: number | IPed, toggle: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    DisablePedPainAudio(_ped, toggle);
}

/**
 * Checks if the ped can play the speech or has the speech file, last parameter is usually false.
 * 
 * Hash: 0x49B99BF3FDA89A7A | Since: 1207
 */
export function doesContextExistForThisPed(ped: number | IPed, unk: boolean): [boolean, string] {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return DoesContextExistForThisPed(_ped, unk);
}

/**
 * No comment provided
 * 
 * Hash: 0x062D5EAD4DA2FA6A | Since: 1207
 */
export function forcePedPanicWalla(): void {
    ForcePedPanicWalla();
}

/**
 * Old name: _FORCE_VEHICLE_ENGINE_AUDIO
 * 
 * Hash: 0x4F0C413926060B38 | Since: 1207
 */
export function forceUseGameObject(vehicle: number | IVehicle): string {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return ForceUseAudioGameObject(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x480357EE890C295A | Since: 1207
 */
export function getCurrentScriptedConversationLine(): [number, string] {
    return GetCurrentScriptedConversationLine();
}

/**
 * No comment provided
 * 
 * Hash: 0xE7A0D23DC414507B | Since: 1207
 */
export function getMusicPlaytime(): number {
    return GetMusicPlaytime();
}

/**
 * No comment provided
 * 
 * Hash: 0x430386FE9BF80B45 | Since: 1207
 */
export function getSoundId(): number {
    return GetSoundId();
}

/**
 * No comment provided
 * 
 * Hash: 0x932C2D096A2C3FFF | Since: 1207
 */
export function isAmbientSpeechDisabled(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsAmbientSpeechDisabled(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x9072C8B49907BFAD | Since: 1207
 */
export function isAmbientSpeechPlaying(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsAmbientSpeechPlaying(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xC265DF9FB44A9FBD | Since: 1207
 */
export function isAnimalVocalizationPlaying(pedHandle: number | IPed): boolean {
    const _pedHandle = pedHandle instanceof IPed ? pedHandle.handle() : pedHandle;
    return IsAnimalVocalizationPlaying(_pedHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x729072355FA39EC9 | Since: 1207
 */
export function isAnySpeechPlaying(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsAnySpeechPlaying(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xB65B60556E2A9225 | Since: 1207
 */
export function isSceneActive(): [boolean, string] {
    return IsAudioSceneActive();
}

/**
 * Checks whether the horn of a vehicle is currently played.
 * 
 * Hash: 0x9D6BFC12B05C6121 | Since: 1207
 */
export function isHornActive(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsHornActive(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x049E937F18F4020C | Since: 1207
 */
export function isPedInCurrentConversation(ped: number | IPed): [boolean, string] {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInCurrentConversation(_ped, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDF0D54BE7A776737 | Since: 1207
 */
export function isScriptedConversationLoaded(): [boolean, string] {
    return IsScriptedConversationLoaded();
}

/**
 * No comment provided
 * 
 * Hash: 0x1ECC76792F661CF5 | Since: 1207
 */
export function isScriptedConversationPlaying(): [boolean, string] {
    return IsScriptedConversationPlaying();
}

/**
 * No comment provided
 * 
 * Hash: 0xCC9AA18DCC7084F4 | Since: 1207
 */
export function isScriptedSpeechPlaying(): boolean {
    return IsScriptedSpeechPlaying(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD11FA52EB849D978 | Since: 1207
 */
export function isStreamPlaying(streamId: number): boolean {
    return IsStreamPlaying(streamId);
}

/**
 * No comment provided
 * 
 * Hash: 0x1F1F957154EC51DF | Since: 1207
 */
export function loadStream(): [boolean, string, string] {
    return LoadStream();
}

/**
 * No comment provided
 * 
 * Hash: 0x8530AD776CD72B12 | Since: 1207
 */
export function pauseScriptedConversation(): string {
    return PauseScriptedConversation(false, false, false, false);
}

/**
 * Old name: _PLAY_AMBIENT_SPEECH_AT_COORDS
 * 
 * Hash: 0xED640017ED337E45 | Since: 1207
 */
export function playAmbientSpeechFromPositionNative(pos: Vector3): [boolean, any] {
    return PlayAmbientSpeechFromPositionNative(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xEE066C7006C49C0A | Since: 1207
 */
export function playAnimalVocalization(ped: number | IPed): string {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return PlayAnimalVocalization(_ped, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xCD536C4D33DCC900 | Since: 1207
 */
export function playEndCreditsMusic(play: boolean): void {
    PlayEndCreditsMusic(play);
}

/**
 * Valid pain IDs: 0..12  these names are not official, but here is a list of the IDs:
 * 1 burning,
 * 2 drowning,
 * 3 coughing,
 * 4 nothing,
 * 5 nothing,
 * 6 coughing_2,
 * 7 nothing,
 * 8 nothing,
 * 9 hurtingSick?,
 * 10 hurtingFall?,
 * 11 nothing,
 * 12 choking
 * 
 * Hash: 0xBC9AE166038A5CEC | Since: 1207
 */
export function playPain(ped: number | IPed, painId: number, isNetwork: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    PlayPain(_ped, painId, 0, false, isNetwork);
}

/**
 * struct ScriptedSpeechParams
 * {
 * const char* speechName;
 * const char* voiceName;
 * alignas(8) int variation;
 * alignas(8) Hash speechParamHash;
 * alignas(8) Ped listenerPed;
 * alignas(8) BOOL syncOverNetwork;
 * alignas(8) int v7;
 * alignas(8) int v8;
 * };
 * 
 * static_assert(sizeof(ScriptedSpeechParams) == 0x40, "incorrect ScriptedSpeechParams size");
 * 
 * 
 * Example:
 * 
 * ScriptedSpeechParams params{"RE_PH_RHD_V3_AGGRO", "0405_U_M_M_RhdSheriff_01", 1, joaat("SPEECH_PARAMS_BEAT_SHOUTED_CLEAR"), 0, true, 1, 1};
 * PLAY_PED_AMBIENT_SPEECH_NATIVE(PLAYER_PED_ID(), (Any*)&params);
 * 
 * Old name: _PLAY_AMBIENT_SPEECH1
 * https://github.com/femga/rdr3_discoveries/tree/master/audio/audio_banks
 * 
 * Hash: 0x8E04FEDD28D42462 | Since: 1207
 */
export function playPedAmbientSpeechNative(speaker: number | IPed): [boolean, any] {
    const _speaker = speaker instanceof IPed ? speaker.handle() : speaker;
    return PlayPedAmbientSpeechNative(_speaker);
}

/**
 * No comment provided
 * 
 * Hash: 0x7FF4944CC209192D | Since: 1207
 */
export function playSound(): [string, string] {
    return PlaySound(false, undefined, false, undefined);
}

/**
 * Old name: _PLAY_SOUND_FROM_POSITION
 * 
 * Hash: 0xCCE219C922737BFA | Since: 1207
 */
export function playSoundFromCoord(positionX: number, positionY: number, positionZ: number, bOverNetwork: boolean, nNetworkRange: number, isExteriorLoc: boolean): [string, string] {
    return PlaySoundFromPosition(positionX, positionY, positionZ, bOverNetwork, nNetworkRange, isExteriorLoc, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x6FB1DA3CA9DA7D90 | Since: 1207
 */
export function playSoundFromEntity(entity: number | IEntity, isNetwork: boolean): [string, string] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return PlaySoundFromEntity(_entity, isNetwork, undefined, undefined);
}

/**
 * see a list of frontend sounds here: https://github.com/femga/rdr3_discoveries/tree/master/audio/frontend_soundsets
 * 
 * Hash: 0x67C540AA08E4A6F5 | Since: 1207
 */
export function playSoundFrontend(): [string, string] {
    return PlaySoundFrontend(false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x89049DD63C08B5D1 | Since: 1207
 */
export function playStreamFromPed(ped: number | IPed, streamId: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    PlayStreamFromPed(_ped, streamId);
}

/**
 * No comment provided
 * 
 * Hash: 0x21442F412E8DE56B | Since: 1207
 */
export function playStreamFromPosition(pos: Vector3, streamId: number): void {
    PlayStreamFromPosition(pos.x, pos.y, pos.z, streamId);
}

/**
 * No comment provided
 * 
 * Hash: 0x58FCE43488F9F5F4 | Since: 1207
 */
export function playStreamFrontend(streamId: number): void {
    PlayStreamFrontend(streamId);
}

/**
 * No comment provided
 * 
 * Hash: 0x3B3CAD6166916D87 | Since: 1207
 */
export function preloadScriptConversation(clone: boolean): string {
    return PreloadScriptConversation(false, false, clone);
}

/**
 * No comment provided
 * 
 * Hash: 0x1E5185B72EF5158A | Since: 1207
 */
export function prepareMusicEvent(): [boolean, string] {
    return PrepareMusicEvent();
}

/**
 * soundId maybe be incorrect name for param p2, in the decompiles is always -2
 * 
 * Hash: 0xE368E8422C860BA7 | Since: 1207
 */
export function prepareSound(soundId: number): [boolean, string, string] {
    return PrepareSound(soundId);
}

/**
 * https://github.com/femga/rdr3_discoveries/tree/master/audio/soundsets
 * 
 * Hash: 0xD9130842D7226045 | Since: 1207
 */
export function prepareSoundset(): [boolean, string] {
    return PrepareSoundset(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x4AD019591E94C064 | Since: 1207
 */
export function prepareSoundWithEntity(entity: number | IEntity, soundId: number): [boolean, string, string] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return PrepareSoundWithEntity(_entity, soundId);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xC6ED9D5092438D91 | Since: 1207
 */
export function registerScriptWith(): void {
    RegisterScriptWithAudio(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x77ED170667F50170 | Since: 1207
 */
export function releaseNamedScriptBank(): string {
    return ReleaseNamedScriptAudioBank();
}

/**
 * No comment provided
 * 
 * Hash: 0x7A2D8AD0A9EB9C3F | Since: 1207
 */
export function releaseScriptBank(): void {
    ReleaseScriptAudioBank();
}

/**
 * No comment provided
 * 
 * Hash: 0x353FC880830B88FA | Since: 1207
 */
export function releaseSoundId(soundId: number): void {
    ReleaseSoundId(soundId);
}

/**
 * No comment provided
 * 
 * Hash: 0x18EB48CFC41F2EA0 | Since: 1207
 */
export function removeEntityFromMixGroup(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    RemoveEntityFromAudioMixGroup(_entity, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xB4BBFD9CD8B3922B | Since: 1207
 */
export function removePortalSettingsOverride(): string {
    return RemovePortalSettingsOverride();
}

/**
 * No comment provided
 * 
 * Hash: 0x2F844A8B08D76685 | Since: 1207
 */
export function requestScriptBank(): [boolean, string] {
    return RequestScriptAudioBank();
}

/**
 * No comment provided
 * 
 * Hash: 0x9AEB285D1818C9AC | Since: 1207
 */
export function restartScriptedConversation(): string {
    return RestartScriptedConversation();
}

/**
 * No comment provided
 * 
 * Hash: 0x6C8065A3B780185B | Since: 1207
 */
export function setAmbientVoiceName(ped: number | IPed): string {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetAmbientVoiceName(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x9748FA4DE50CCE3E | Since: 1207
 */
export function setAmbientZoneListState(enabled: boolean, forceUpdate: boolean): string {
    return SetAmbientZoneListState(enabled, forceUpdate);
}

/**
 * No comment provided
 * 
 * Hash: 0xF3638DAE8C4045E1 | Since: 1207
 */
export function setAmbientZoneListStatePersistent(enabled: boolean, forceUpdate: boolean): string {
    return SetAmbientZoneListStatePersistent(enabled, forceUpdate);
}

/**
 * No comment provided
 * 
 * Hash: 0xBDA07E5950085E46 | Since: 1207
 */
export function setAmbientZoneState(enabled: boolean, forceUpdate: boolean): string {
    return SetAmbientZoneState(enabled, forceUpdate);
}

/**
 * No comment provided
 * 
 * Hash: 0x1D6650420CEC9D3B | Since: 1207
 */
export function setAmbientZoneStatePersistent(enabled: boolean, forceUpdate: boolean): string {
    return SetAmbientZoneStatePersistent(enabled, forceUpdate);
}

/**
 * Not implemented.
 * 
 * Hash: 0xCC97B29285B1DC3B | Since: 1207
 */
export function setAnimalMood(animal: number | IPed, mood: number): void {
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    SetAnimalMood(_animal, mood);
}

/**
 * https://github.com/femga/rdr3_discoveries/tree/master/audio/audio_flags
 * 
 * Hash: 0xB9EFD5C25018725A | Since: 1207
 */
export function setFlag(toggle: boolean): string {
    return SetAudioFlag(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9B1FC259187C97C0 | Since: 1207
 */
export function setOnlineTransitionStage(): string {
    return SetAudioOnlineTransitionStage();
}

/**
 * No comment provided
 * 
 * Hash: 0xEF21A9EF089A2668 | Since: 1207
 */
export function setSceneVariable(value: number): [string, string] {
    return SetAudioSceneVariable(value);
}

/**
 * No comment provided
 * 
 * Hash: 0xE5564483E407F914 | Since: 1207
 */
export function setVehiclePriority(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetAudioVehiclePriority(_vehicle, undefined);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x3BD3F52BA9B1E4E8 | Since: 1207
 */
export function setGpsActive(active: boolean): void {
    SetGpsActive(active);
}

/**
 * No comment provided
 * 
 * Hash: 0x76D683C108594D0E | Since: 1207
 */
export function setHornEnabled(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetHornEnabled(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB2DE3AEBE31150E2 | Since: 1207
 */
export function setIsScriptedSpeechDisabled(ped: number | IPed, disabled: boolean): any {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetIsScriptedSpeechDisabled(_ped, disabled);
}

/**
 * No comment provided
 * 
 * Hash: 0x8BF907833BE275DE | Since: 1207
 */
export function setPedInteriorWallaDensity(): void {
    SetPedInteriorWallaDensity(0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x95D2D383D5396B8A | Since: 1207
 */
export function setPedIsDrunk(ped: number | IPed, toggle: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedIsDrunk(_ped, toggle);
}

/**
 * https://en.m.wikipedia.org/wiki/Walla
 * 
 * Hash: 0x149AEE66F0CB3A99 | Since: 1207
 */
export function setPedWallaDensity(): void {
    SetPedWallaDensity(0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x044DBAD7A7FA2BE5 | Since: 1207
 */
export function setPortalSettingsOverride(): [string, string] {
    return SetPortalSettingsOverride();
}

/**
 * No comment provided
 * 
 * Hash: 0x399D2D3B33F1B8EB | Since: 1207
 */
export function setStaticEmitterEnabled(toggle: boolean): string {
    return SetStaticEmitterEnabled(toggle);
}

/**
 * Old Name: _SET_VARIABLE_ON_SOUND_WITH_ID
 * 
 * Hash: 0x503703EC1781B7D6 | Since: 1207
 */
export function setVariableOnSound(soundId: number, variableValue: number): string {
    return SetVariableOnSoundWithId(soundId, variableValue);
}

/**
 * No comment provided
 * 
 * Hash: 0x9663FE6B7A61EB00 | Since: 1207
 */
export function skipToNextScriptedConversationLine(): string {
    return SkipToNextScriptedConversationLine();
}

/**
 * No comment provided
 * 
 * Hash: 0x013A80FC08F6E4F2 | Since: 1207
 */
export function startScene(): [boolean, string] {
    return StartAudioScene();
}

/**
 * No comment provided
 * 
 * Hash: 0x23641AFE870AF385 | Since: 1207
 */
export function startPreloadedConversation(): string {
    return StartPreloadedConversation();
}

/**
 * No comment provided
 * 
 * Hash: 0x6B17C62C9635D2DC | Since: 1207
 */
export function startScriptConversation(clone: boolean): string {
    return StartScriptConversation(false, false, clone);
}

/**
 * No comment provided
 * 
 * Hash: 0xDFE8422B3B94E688 | Since: 1207
 */
export function stopScene(): string {
    return StopAudioScene();
}

/**
 * No comment provided
 * 
 * Hash: 0xBAC7FC81A75EC1A1 | Since: 1207
 */
export function stopScenes(): void {
    StopAudioScenes();
}

/**
 * No comment provided
 * 
 * Hash: 0xB8BEC0CA6F0EDB0F | Since: 1207
 */
export function stopCurrentPlayingAmbientSpeech(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    StopCurrentPlayingAmbientSpeech(_ped, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x79D2F0E66F81D90D | Since: 1207
 */
export function stopCurrentPlayingSpeech(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    StopCurrentPlayingSpeech(_ped, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9D64D7405520E3D3 | Since: 1207
 */
export function stopPedSpeaking(ped: number | IPed, shaking: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    StopPedSpeaking(_ped, shaking);
}

/**
 * No comment provided
 * 
 * Hash: 0xD79DEEFB53455EBA | Since: 1207
 */
export function stopScriptedConversation(): [number, string] {
    return StopScriptedConversation(false, false);
}

/**
 * Old Name: _STOP_SOUND_WITH_ID
 * 
 * Hash: 0x3210BCB36AF7621B | Since: 1207
 */
export function stopSound(soundId: number): void {
    StopSoundWithId(soundId);
}

/**
 * No comment provided
 * 
 * Hash: 0xA4718A1419D18151 | Since: 1207
 */
export function stopStream(streamId: number): void {
    StopStream(streamId);
}

/**
 * https://github.com/femga/rdr3_discoveries/blob/master/audio/music_events/music_events.lua
 * 
 * Hash: 0x706D57B0F50DA710 | Since: 1207
 */
export function triggerMusicEvent(): [boolean, string] {
    return TriggerMusicEvent();
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xA8638BE228D4751A | Since: 1207
 */
export function unregisterScriptWith(): void {
    UnregisterScriptWithAudio();
}

/**
 * Only used in R* SP Scripts
 * Old Name: _UPDATE_SOUND_POSITION
 * 
 * Hash: 0x0286617C8FC50A53 | Since: 1207
 */
export function updateSoundCoord(soundId: number, pos: Vector3): void {
    UpdateSoundPosition(soundId, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF4DC1784BE94DFA | Since: 1207
 */
export function useFootstepScriptSweeteners(ped: number | IPed, hash: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof hash === 'string') hash = GetHashKey(hash)
    UseFootstepScriptSweeteners(_ped, false, hash);
}

/**
 * No comment provided
 * 
 * Hash: 0x017492B2201E3428 | Since: 1207
 */
export function _0x017492B2201E3428(): void {
    Citizen.invokeNative('0x017492B2201E3428', undefined, undefined, undefined, undefined);
}

/**
 * _RESET_PED_* hash used is MOONSHINE_BAND used along side 0xBC07CA8FD710E7FD
 * 
 * Hash: 0x018ABE833CA64D2A | Since: 1232
 */
export function _0x018ABE833CA64D2A(ped: number | IPed, hash: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof hash === 'string') hash = GetHashKey(hash)
    Citizen.invokeNative('0x018ABE833CA64D2A', _ped, hash);
}

/**
 * No comment provided
 * 
 * Hash: 0x06C5DF5EE444BC6B | Since: 1207
 */
export function _0x06C5DF5EE444BC6B(): void {
    Citizen.invokeNative('0x06C5DF5EE444BC6B', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x078F77FD1A43EAB3 | Since: 1207
 */
export function _0x078F77FD1A43EAB3(): void {
    Citizen.invokeNative('0x078F77FD1A43EAB3', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0CB3D1919E8D7CBA | Since: 1207
 */
export function _0x0CB3D1919E8D7CBA(convoRoot: string): boolean {
    return Citizen.invokeNative('0x0CB3D1919E8D7CBA', convoRoot);
}

/**
 * speechEventType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/naSpeechEventType
 * p1 is possibly naSpeechAudibility, naSpeechType, or naSpeechEventTypeRequestPriority
 * SKIP_* - START_*
 * 
 * Hash: 0x0D7FD6A55FD63AEF | Since: 1207
 */
export function _0x0D7FD6A55FD63AEF(speechEventType: number): void {
    Citizen.invokeNative('0x0D7FD6A55FD63AEF', speechEventType, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x0FAF7171BF613B80 | Since: 1207
 */
export function _0x0FAF7171BF613B80(): void {
    Citizen.invokeNative('0x0FAF7171BF613B80', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x131EC9247E7A2903 | Since: 1207
 */
export function _0x131EC9247E7A2903(): any {
    return Citizen.invokeNative('0x131EC9247E7A2903', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x138ADB94F8B90616 | Since: 1207
 */
export function _0x138ADB94F8B90616(): void {
    Citizen.invokeNative('0x138ADB94F8B90616');
}

/**
 * p1 is an int seems to be a duration returned from 0x886657C5B3D8EDE3
 * 
 * Hash: 0x139A4B9DF2D26CBF | Since: 1232
 */
export function _0x139A4B9DF2D26CBF(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x139A4B9DF2D26CBF', _ped, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x152ED1B56E8F1F50 | Since: 1207
 */
export function _0x152ED1B56E8F1F50(currentScriptedConvoLine: number): number {
    return Citizen.invokeNative('0x152ED1B56E8F1F50', undefined, currentScriptedConvoLine);
}

/**
 * No comment provided
 * 
 * Hash: 0x1E6F9A9FE1A99F36 | Since: 1207
 */
export function _0x1E6F9A9FE1A99F36(audSpeechEvent: string): void {
    Citizen.invokeNative('0x1E6F9A9FE1A99F36', audSpeechEvent);
}

/**
 * No comment provided
 * 
 * Hash: 0x254B0241E964B450 | Since: 1207
 */
export function _0x254B0241E964B450(currentScriptedConvoLine: number): number {
    return Citizen.invokeNative('0x254B0241E964B450', undefined, currentScriptedConvoLine);
}

/**
 * No comment provided
 * 
 * Hash: 0x259ACC5B52A2B2D9 | Since: 1207
 */
export function _0x259ACC5B52A2B2D9(): void {
    Citizen.invokeNative('0x259ACC5B52A2B2D9', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2651DDC0EA269073 | Since: 1207
 */
export function _0x2651DDC0EA269073(ropeId: number): void {
    Citizen.invokeNative('0x2651DDC0EA269073', ropeId, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x295859EB18F48D82 | Since: 1207
 */
export function _0x295859EB18F48D82(): number {
    return Citizen.invokeNative('0x295859EB18F48D82', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2B101AD9F651243A | Since: 1207
 */
export function _0x2B101AD9F651243A(): any {
    return Citizen.invokeNative('0x2B101AD9F651243A');
}

/**
 * No comment provided
 * 
 * Hash: 0x2B9C37C01BF25EDB | Since: 1207
 */
export function _0x2B9C37C01BF25EDB(): any {
    return Citizen.invokeNative('0x2B9C37C01BF25EDB', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2FFF4A78384AFFDF | Since: 1436
 */
export function _0x2FFF4A78384AFFDF(entity: number | IEntity): any {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x2FFF4A78384AFFDF', _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x341CDD17EFC2472E | Since: 1207
 */
export function _0x341CDD17EFC2472E(): void {
    Citizen.invokeNative('0x341CDD17EFC2472E', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x35B8C070E0C16E2F | Since: 1207
 */
export function _0x35B8C070E0C16E2F(): void {
    Citizen.invokeNative('0x35B8C070E0C16E2F', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x380A2E353AD30917 | Since: 1207
 */
export function _0x380A2E353AD30917(): void {
    Citizen.invokeNative('0x380A2E353AD30917', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3A00D87B20A2A5E4 | Since: 1207
 */
export function _0x3A00D87B20A2A5E4(): void {
    Citizen.invokeNative('0x3A00D87B20A2A5E4', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3A3BE6B920525237 | Since: 1207
 */
export function _0x3A3BE6B920525237(): void {
    Citizen.invokeNative('0x3A3BE6B920525237', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3D0BBCCF401B5FDB | Since: 1207
 */
export function _0x3D0BBCCF401B5FDB(): void {
    Citizen.invokeNative('0x3D0BBCCF401B5FDB');
}

/**
 * No comment provided
 * 
 * Hash: 0x3E93DDDCBB6111E4 | Since: 1207
 */
export function _0x3E93DDDCBB6111E4(): void {
    Citizen.invokeNative('0x3E93DDDCBB6111E4', undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x3E98AC9D8C56C62C | Since: 1207
 */
export function _0x3E98AC9D8C56C62C(): void {
    Citizen.invokeNative('0x3E98AC9D8C56C62C', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x40CA665AB9D8D505 | Since: 1207
 */
export function _0x40CA665AB9D8D505(convoRoot: string, singleLineIndex: number): void {
    Citizen.invokeNative('0x40CA665AB9D8D505', convoRoot, singleLineIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x43037ABFE214A851 | Since: 1207
 */
export function _0x43037ABFE214A851(): void {
    Citizen.invokeNative('0x43037ABFE214A851');
}

/**
 * _SET_PED_PLAY_GESTURE_ANIMS? p2 seems to be a flag string used example
 * AI_GESTURES@INSTRUMENTS@FIDDLE@STANDING@MALE@NORMAL
 * 
 * Hash: 0x448F2647DD6F2E27 | Since: 1232
 */
export function _0x448F2647DD6F2E27(ped: number | IPed, hash: number | string): string {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return Citizen.invokeNative('0x448F2647DD6F2E27', _ped, hash, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x44A5EEF54F62E823 | Since: 1207
 */
export function _0x44A5EEF54F62E823(): any {
    return Citizen.invokeNative('0x44A5EEF54F62E823', undefined);
}

/**
 * Gets the hash for the currently playing speech line.
 * 
 * Hash: 0x4A98E228A936DBCC | Since: 1207
 */
export function _0x4A98E228A936DBCC(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x4A98E228A936DBCC', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x4BE3EC91C01F0FE8 | Since: 1207
 */
export function _0x4BE3EC91C01F0FE8(): void {
    Citizen.invokeNative('0x4BE3EC91C01F0FE8');
}

/**
 * No comment provided
 * 
 * Hash: 0x569ABC36E28DDEAA | Since: 1207
 */
export function _0x569ABC36E28DDEAA(): void {
    Citizen.invokeNative('0x569ABC36E28DDEAA');
}

/**
 * _IS_SOUND_RUNNING(?)
 * 
 * Hash: 0x580D71DFE0088E34 | Since: 1207
 */
export function _0x580D71DFE0088E34(audioName: string, audioRef: string): boolean {
    return Citizen.invokeNative('0x580D71DFE0088E34', audioName, audioRef);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A13586A9447931F | Since: 1207
 */
export function _0x5A13586A9447931F(): boolean {
    return Citizen.invokeNative('0x5A13586A9447931F', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x5AE0CB5F35F034FD | Since: 1207
 */
export function _0x5AE0CB5F35F034FD(): void {
    Citizen.invokeNative('0x5AE0CB5F35F034FD', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5BC885EBD75FAA7D | Since: 1207
 */
export function _0x5BC885EBD75FAA7D(): void {
    Citizen.invokeNative('0x5BC885EBD75FAA7D', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5E3CCF03995388B5 | Since: 1207
 */
export function _0x5E3CCF03995388B5(): void {
    Citizen.invokeNative('0x5E3CCF03995388B5', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x62377977E4F08668 | Since: 1436
 */
export function _0x62377977E4F08668(entity: number | IEntity): any {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x62377977E4F08668', _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x64B956F4E761DF5C | Since: 1207
 */
export function _0x64B956F4E761DF5C(): void {
    Citizen.invokeNative('0x64B956F4E761DF5C', undefined);
}

/**
 * speechEventType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/naSpeechEventType
 * SKIP_* - START_*
 * 
 * Hash: 0x660A8F876DF1D4F8 | Since: 1207
 */
export function _0x660A8F876DF1D4F8(speechEventType: number): void {
    Citizen.invokeNative('0x660A8F876DF1D4F8', speechEventType);
}

/**
 * No comment provided
 * 
 * Hash: 0x6652B0C8F3D414D0 | Since: 1207
 */
export function _0x6652B0C8F3D414D0(): void {
    Citizen.invokeNative('0x6652B0C8F3D414D0', undefined);
}

/**
 * _STOP_AUDIO_*
 * 
 * Hash: 0x6AB944DF68B512D3 | Since: 1207
 */
export function _0x6AB944DF68B512D3(): void {
    Citizen.invokeNative('0x6AB944DF68B512D3', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6B7A88A61B41E589 | Since: 1207
 */
export function _0x6B7A88A61B41E589(): void {
    Citizen.invokeNative('0x6B7A88A61B41E589', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6DA15746D5CC1A92 | Since: 1207
 */
export function _0x6DA15746D5CC1A92(): void {
    Citizen.invokeNative('0x6DA15746D5CC1A92', undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * _AUDIO_IS_* - _AUDIO_TRIGGER*
 * 
 * Hash: 0x7455CD705F7E933E | Since: 1207
 */
export function _0x7455CD705F7E933E(): void {
    Citizen.invokeNative('0x7455CD705F7E933E');
}

/**
 * No comment provided
 * 
 * Hash: 0x7678FE0455ED1145 | Since: 1207
 */
export function _0x7678FE0455ED1145(): any {
    return Citizen.invokeNative('0x7678FE0455ED1145', undefined, undefined, undefined);
}

/**
 * Only used in R* SP Script cv_mus_shared
 * 
 * Hash: 0x79F9C57B8D0DFE90 | Since: 1207
 */
export function _0x79F9C57B8D0DFE90(convoRoot: string, animScene: any): boolean {
    return Citizen.invokeNative('0x79F9C57B8D0DFE90', convoRoot, animScene);
}

/**
 * No comment provided
 * 
 * Hash: 0x7E176C676F8652A9 | Since: 1207
 */
export function _0x7E176C676F8652A9(): void {
    Citizen.invokeNative('0x7E176C676F8652A9', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x821C32C728B24477 | Since: 1207
 */
export function _0x821C32C728B24477(): void {
    Citizen.invokeNative('0x821C32C728B24477', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x839C9F124BE74D94 | Since: 1207
 */
export function _0x839C9F124BE74D94(): void {
    Citizen.invokeNative('0x839C9F124BE74D94', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x847748AE5D7B1071 | Since: 1207
 */
export function _0x847748AE5D7B1071(): boolean {
    return Citizen.invokeNative('0x847748AE5D7B1071', false);
}

/**
 * Not implemented.
 * 
 * Hash: 0x864A842B86993851 | Since: 1207
 */
export function _0x864A842B86993851(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x864A842B86993851', _ped);
}

/**
 * seems to return a duration to be used in 0x139A4B9DF2D26CBF
 * 
 * Hash: 0x886657C5B3D8EDE3 | Since: 1232
 */
export function _0x886657C5B3D8EDE3(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x886657C5B3D8EDE3', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x8D29FDF565DED9AE | Since: 1232
 */
export function _0x8D29FDF565DED9AE(): void {
    Citizen.invokeNative('0x8D29FDF565DED9AE', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8E901B65206C2D3E | Since: 1207
 */
export function _0x8E901B65206C2D3E(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x8E901B65206C2D3E', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x935DBD96D4A3DA1F | Since: 1207
 */
export function _0x935DBD96D4A3DA1F(currentScriptedConvoLine: number): number {
    return Citizen.invokeNative('0x935DBD96D4A3DA1F', undefined, currentScriptedConvoLine);
}

/**
 * Returns true or false if the ped can say a specific speech line with PLAY_PED_AMBIENT_SPEECH_NATIVE, similar to DOES_CONTEXT_EXIST_FOR_THIS_PED
 * 
 * Hash: 0x9D6DEC9791A4E501 | Since: 1207
 */
export function _0x9D6DEC9791A4E501(ped: number | IPed): [boolean, string] {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x9D6DEC9791A4E501', _ped, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x9EB779765E68C52E | Since: 1207
 */
export function _0x9EB779765E68C52E(): void {
    Citizen.invokeNative('0x9EB779765E68C52E', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA2323A2EAE32A290 | Since: 1207
 */
export function _0xA2323A2EAE32A290(listeningToPed: number | IPed, ped: number | IPed, listenerName: string): void {
    const _listeningToPed = listeningToPed instanceof IPed ? listeningToPed.handle() : listeningToPed;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xA2323A2EAE32A290', _listeningToPed, _ped, listenerName);
}

/**
 * No comment provided
 * 
 * Hash: 0xA2B851605748AD0E | Since: 1207
 */
export function _0xA2B851605748AD0E(): void {
    Citizen.invokeNative('0xA2B851605748AD0E');
}

/**
 * No comment provided
 * 
 * Hash: 0xA6847BBA4FCDD13F | Since: 1207
 */
export function _0xA6847BBA4FCDD13F(): void {
    Citizen.invokeNative('0xA6847BBA4FCDD13F', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA6A3A3F96B8B030E | Since: 1207
 */
export function _0xA6A3A3F96B8B030E(): any {
    return Citizen.invokeNative('0xA6A3A3F96B8B030E');
}

/**
 * No comment provided
 * 
 * Hash: 0xABDB4863D3D72021 | Since: 1207
 */
export function _0xABDB4863D3D72021(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xABDB4863D3D72021', _entity, undefined, undefined, 0, undefined);
}

/**
 * seems to be for moonshine_band stuff heres some hashes it accepts
 * 1949731019, -1542215752, 978192019 == moonshine_band, 533120, 1180906091, 1260094407, 1057811885, -1044357807,487746791,51469403
 * 
 * Hash: 0xB93A769B8B726950 | Since: 1207
 */
export function _0xB93A769B8B726950(ped: number | IPed, p1: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    Citizen.invokeNative('0xB93A769B8B726950', _ped, p1);
}

/**
 * _RESET_PED_* hash used is MOONSHINE_BAND used along side 0x018ABE833CA64D2A
 * 
 * Hash: 0xBC07CA8FD710E7FD | Since: 1232
 */
export function _0xBC07CA8FD710E7FD(ped: number | IPed, hash: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof hash === 'string') hash = GetHashKey(hash)
    Citizen.invokeNative('0xBC07CA8FD710E7FD', _ped, hash);
}

/**
 * Checks if ped  has moonshine_band _GET_PED_*
 * 
 * Hash: 0xBE28DB99556FF8D9 | Since: 1207
 */
export function _0xBE28DB99556FF8D9(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xBE28DB99556FF8D9', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xC369E2234E34A0CA | Since: 1207
 */
export function _0xC369E2234E34A0CA(): any {
    return Citizen.invokeNative('0xC369E2234E34A0CA', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC4CFCE4C656EF480 | Since: 1207
 */
export function _0xC4CFCE4C656EF480(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xC4CFCE4C656EF480', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xC68C02DE259C927C | Since: 1232
 */
export function _0xC68C02DE259C927C(): any {
    return Citizen.invokeNative('0xC68C02DE259C927C', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC886CD666ADD42E1 | Since: 1207
 */
export function _0xC886CD666ADD42E1(): void {
    Citizen.invokeNative('0xC886CD666ADD42E1', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCBF2BEBB468A34F3 | Since: 1207
 */
export function _0xCBF2BEBB468A34F3(): void {
    Citizen.invokeNative('0xCBF2BEBB468A34F3', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCFAD2C8CD1054523 | Since: 1207
 */
export function _0xCFAD2C8CD1054523(): void {
    Citizen.invokeNative('0xCFAD2C8CD1054523', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD05A460328560477 | Since: 1232
 */
export function _0xD05A460328560477(): any {
    return Citizen.invokeNative('0xD05A460328560477', undefined);
}

/**
 * _IS_SCRIPTED_CONVERSATION_*
 * 
 * Hash: 0xD0730C1FA40348D9 | Since: 1207
 */
export function _0xD0730C1FA40348D9(convoRoot: string): boolean {
    return Citizen.invokeNative('0xD0730C1FA40348D9', convoRoot);
}

/**
 * No comment provided
 * 
 * Hash: 0xD47D47EFBF103FB8 | Since: 1207
 */
export function _0xD47D47EFBF103FB8(): void {
    Citizen.invokeNative('0xD47D47EFBF103FB8', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD733528B6C35647A | Since: 1207
 */
export function _0xD733528B6C35647A(): void {
    Citizen.invokeNative('0xD733528B6C35647A', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDAD6CD07CAA4F382 | Since: 1207
 */
export function _0xDAD6CD07CAA4F382(): void {
    Citizen.invokeNative('0xDAD6CD07CAA4F382');
}

/**
 * No comment provided
 * 
 * Hash: 0xDC2F83A0612CA34D | Since: 1207
 */
export function _0xDC2F83A0612CA34D(): any {
    return Citizen.invokeNative('0xDC2F83A0612CA34D', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDC93F0948F2C28F4 | Since: 1207
 */
export function _0xDC93F0948F2C28F4(): void {
    Citizen.invokeNative('0xDC93F0948F2C28F4', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDF947FE0D551684E | Since: 1207
 */
export function _0xDF947FE0D551684E(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xDF947FE0D551684E', _ped, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE600F61F54A444A6 | Since: 1207
 */
export function _0xE600F61F54A444A6(): any {
    return Citizen.invokeNative('0xE600F61F54A444A6');
}

/**
 * No comment provided
 * 
 * Hash: 0xE7E6CB8B713ED190 | Since: 1207
 */
export function _0xE7E6CB8B713ED190(): void {
    Citizen.invokeNative('0xE7E6CB8B713ED190');
}

/**
 * No comment provided
 * 
 * Hash: 0xE891504B2F0E2DBA | Since: 1207
 */
export function _0xE891504B2F0E2DBA(): void {
    Citizen.invokeNative('0xE891504B2F0E2DBA', undefined, undefined);
}

/**
 * seems to be a _SET_PED_* that accepts p1 from GET_PED_SONG_INDEX_HOST
 * 
 * Hash: 0xE9694B2D6CB87B06 | Since: 1232
 */
export function _0xE9694B2D6CB87B06(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xE9694B2D6CB87B06', _ped, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xEA546C31FD45F8CD | Since: 1207
 */
export function _0xEA546C31FD45F8CD(): void {
    Citizen.invokeNative('0xEA546C31FD45F8CD', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEB4D592620B8C209 | Since: 1207
 */
export function _0xEB4D592620B8C209(): void {
    Citizen.invokeNative('0xEB4D592620B8C209', undefined);
}

/**
 * Name: ROPE_SETTINGS_DEFAULT
 * 
 * Hash: 0xF092B6030D6FD49C | Since: 1207
 */
export function _0xF092B6030D6FD49C(ropeId: number, name: string): void {
    Citizen.invokeNative('0xF092B6030D6FD49C', ropeId, name);
}

/**
 * No comment provided
 * 
 * Hash: 0xF0EE69F500952FA5 | Since: 1207
 */
export function _0xF0EE69F500952FA5(): any {
    return Citizen.invokeNative('0xF0EE69F500952FA5', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF232C2C546AC16D0 | Since: 1207
 */
export function _0xF232C2C546AC16D0(): void {
    Citizen.invokeNative('0xF232C2C546AC16D0', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF336E9F989B3518F | Since: 1207
 */
export function _0xF336E9F989B3518F(): number {
    return Citizen.invokeNative('0xF336E9F989B3518F', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF64034D533CE8AAC | Since: 1207
 */
export function _0xF64034D533CE8AAC(): void {
    Citizen.invokeNative('0xF64034D533CE8AAC', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFCDEC42B1C78B7F8 | Since: 1207
 */
export function _0xFCDEC42B1C78B7F8(): void {
    Citizen.invokeNative('0xFCDEC42B1C78B7F8', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFD461D0ABA5559B1 | Since: 1207
 */
export function _0xFD461D0ABA5559B1(): void {
    Citizen.invokeNative('0xFD461D0ABA5559B1', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFE5C6177064BD390 | Since: 1207
 */
export function _0xFE5C6177064BD390(): boolean {
    return Citizen.invokeNative('0xFE5C6177064BD390', false);
}

/**
 * No comment provided
 * 
 * Hash: 0xFFE9C53DEEA3DB0B | Since: 1207
 */
export function _0xFFE9C53DEEA3DB0B(pos: Vector3, isSrlLoaded: boolean): any {
    return Citizen.invokeNative('0xFFE9C53DEEA3DB0B', undefined, undefined, pos.x, pos.y, pos.z, isSrlLoaded, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6378A235374B852F | Since: 1207
 */
export function blockSpeechContext(block: boolean): string {
    return BlockSpeechContext(block);
}

/**
 * No comment provided
 * 
 * Hash: 0xEF51242E35242B47 | Since: 1207
 */
export function clearConversationHistoryForScriptedConversation(): string {
    return ClearConversationHistoryForScriptedConversation();
}

/**
 * Create a scripted speech to control speech. If handle is less than 0, it's invalid.
 * params struct for ScriptedSpeechParams see: PLAY_PED_AMBIENT_SPEECH_NATIVE
 * Returns scriptedSpeech handle.
 * 
 * Hash: 0x72E4D1C4639BC465 | Since: 1207
 */
export function createNewScriptedSpeech(ped: number | IPed, params: any): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x72E4D1C4639BC465', _ped, params);
}

/**
 * No comment provided
 * 
 * Hash: 0x8B25A18E390F75BF | Since: 1207
 */
export function getEntityMixGroup(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityAudioMixGroup(_entity);
}

/**
 * Gets the hash for the last played speech line.
 * 
 * Hash: 0x6BFFB7C276866996 | Since: 1207
 */
export function getLastPlayedSpeechForPed(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x6BFFB7C276866996', _ped);
}

/**
 * Creates stream and returns streamId handle to be used with PLAY_STREAM_* natives
 * https://github.com/femga/rdr3_discoveries/tree/master/audio/create_stream
 * 
 * Hash: 0x0556C784FA056628 | Since: 1207
 */
export function getLoadedStreamIdFromCreation(): [number, string, string] {
    return GetLoadedStreamIdFromCreation();
}

/**
 * seems to be used for  0xE9694B2D6CB87B06
 * 
 * Hash: 0x2DBBF0C5E19383EE | Since: 1232
 */
export function getPedSongIndexHost(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedSongIndexHost(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x714A0EA7DE1167BE | Since: 1207
 */
export function hasSoundNameFinished(): [boolean, string, string] {
    return HasSoundAudioNameFinished();
}

/**
 * No comment provided
 * 
 * Hash: 0x84848E1C0FC67DBB | Since: 1207
 */
export function hasSoundIdFinished(soundId: number): boolean {
    return HasSoundIdFinished(soundId);
}

/**
 * No comment provided
 * 
 * Hash: 0xA2CAC9DEF0195E6F | Since: 1207
 */
export function isAnyConversationPlaying(): boolean {
    return IsAnyConversationPlaying(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x54B187F111D9C6F8 | Since: 1207
 */
export function isPedInAnyConversation(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInAnyConversation(_ped, false);
}

/**
 * item: FUSE, value returned from 0x2E1CDC1FF3B8473E
 * soundSet: HUD_SHOP_SOUNDSET, COMPANIONS_ROBBERIES_SOUNDSET
 * 
 * Hash: 0x6DF942C4179BE5AB | Since: 1207
 */
export function isScriptedCustom(item: number | string, soundSet: number | string): boolean {
    if (typeof item === 'string') item = GetHashKey(item)
    if (typeof soundSet === 'string') soundSet = GetHashKey(soundSet)
    return IsScriptedAudioCustom(item, soundSet);
}

/**
 * No comment provided
 * 
 * Hash: 0xD89504D9D7D5057D | Since: 1207
 */
export function isScriptedConversationCreated(): [boolean, string] {
    return IsScriptedConversationCreated();
}

/**
 * No comment provided
 * 
 * Hash: 0xF01C570E0A0A1E67 | Since: 1207
 */
export function isScriptedConversionOngoing(): [boolean, string] {
    return IsScriptedConversionOngoing();
}

/**
 * No comment provided
 * 
 * Hash: 0x0E53530D9B2DB01D | Since: 1311
 */
export function playAnimalVocalizationPheromoneVialResponse(ped: number | IPed, p1: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    PlayAnimalVocalizationPheromoneVialResponse(_ped, p1, false);
}

/**
 * Params: p5 seems to be always 0
 * 
 * Hash: 0xF1C5310FEAA36B48 | Since: 1207
 */
export function playSoundFromEntityWithSet(soundId: number, entity: number | IEntity): [string, string] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return PlaySoundFromEntityWithSet(soundId, _entity, false, undefined);
}

/**
 * item: value returned from 0x2E1CDC1FF3B8473E
 * soundSet: HUD_SHOP_SOUNDSET, COMPANIONS_ROBBERIES_SOUNDSET
 * 
 * Hash: 0xE8EAFF7B41EDD291 | Since: 1207
 */
export function playSoundFromItem(item: number | string, soundSet: number | string): void {
    if (typeof item === 'string') item = GetHashKey(item)
    if (typeof soundSet === 'string') soundSet = GetHashKey(soundSet)
    PlaySoundFromItem(item, soundSet, undefined);
}

/**
 * Starts Audio Loop
 * _PLAY_SOUND_FROM_ENTITY* - _PLAY_SOUND_FRONTEND*
 * 
 * Hash: 0xDCF5BA95BBF0FABA | Since: 1207
 */
export function playSoundFromPositionWithId(soundId: number, pos: Vector3): [string, string] {
    return PlaySoundFromPositionWithId(soundId, pos.x, pos.y, pos.z, false, 0, false);
}

/**
 * Play/advance a scripted speech created via _CREATE_NEW_SCRIPTED_PED_AMBIENT_SPEECH and return a status code.
 * Return values:
 * 0 = not ready/invalid/failed
 * 1 = started/playing
 * 2 = finished/consumed (you can drop the handle)
 * Typical usage: poll this in a tick after creating the speech; when it returns 2, clear your handle.
 * 
 * Hash: 0xB18FEC133C7C6C69 | Since: 1207
 */
export function playSoundFromScriptedSpeech(scriptedSpeech: number): any {
    return Citizen.invokeNative('0xB18FEC133C7C6C69', scriptedSpeech);
}

/**
 * No comment provided
 * 
 * Hash: 0xCE5D0FFE83939AF1 | Since: 1207
 */
export function playSoundFrontendWithSoundId(soundId: number): [string, string] {
    return PlaySoundFrontendWithSoundId(soundId, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x9D746964E0CF2C5F | Since: 1207
 */
export function releaseShardSounds(): [string, string] {
    return ReleaseShardSounds();
}

/**
 * No comment provided
 * 
 * Hash: 0x531A78D6BF27014B | Since: 1207
 */
export function releaseSoundset(): string {
    return ReleaseSoundset();
}

/**
 * No comment provided
 * 
 * Hash: 0x3743CE6948194349 | Since: 1207
 */
export function setAmbientZonePosition(pos: Vector3, heading: number): string {
    return SetAmbientZonePosition(pos.x, pos.y, pos.z, heading);
}

/**
 * No comment provided
 * 
 * Hash: 0xAC84686C06184B0D | Since: 1207
 */
export function setSceneset(): [boolean, string, string] {
    return SetAudioSceneset();
}

/**
 * p1: Entity.Relationship
 * p2: Player, Enemy, Teammate, Neutral
 * 
 * Hash: 0x2E31ACA7477CF00F | Since: 1207
 */
export function setSoundRelationshipOnPed(ped: number | IPed): [string, string] {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetSoundRelationshipOnPed(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x9821B68CD3E05F2B | Since: 1207
 */
export function setVariableOnSoundWithName(variableValue: number): [string, string, string] {
    return SetVariableOnSoundWithName(variableValue);
}

/**
 * Hashes: VOFX_PLAYER_MALE01, VOFX_PLAYER_MALE02, VOFX_PLAYER_MALE03, VOFX_PLAYER_FEMALE01, VOFX_PLAYER_FEMALE02, VOFX_PLAYER_FEMALE03
 * 
 * Hash: 0x2703EFB583F0949A | Since: 1207
 */
export function setVofxPedVoice(ped: number | IPed, voice: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof voice === 'string') voice = GetHashKey(voice)
    SetVofxPedVoice(_ped, voice);
}

/**
 * whistleConfig: Ped.WhistlePitch (0.0 - 1.0), Ped.WhistleClarity (0.0 - 1.0), Ped.WhistleShape (0.0 - 10.0)
 * 
 * Hash: 0x9963681A8BC69BF3 | Since: 1207
 */
export function setWhistleConfigForPed(ped: number | IPed, value: number): string {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetWhistleConfigForPed(_ped, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x6339C1EA3979B5F7 | Since: 1207
 */
export function startSceneset(): [boolean, string, string] {
    return StartAudioSceneset();
}

/**
 * No comment provided
 * 
 * Hash: 0x2E399EAFBEEA74D5 | Since: 1207
 */
export function stopAllScriptedSounds(): void {
    StopAllScriptedAudioSounds();
}

/**
 * No comment provided
 * 
 * Hash: 0x36559148B78853B3 | Since: 1207
 */
export function stopAllScriptedConversions(): void {
    StopAllScriptedConversions(false, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x9428447DED71FC7E | Since: 1207
 */
export function stopSceneset(): string {
    return StopAudioSceneset();
}

/**
 * No comment provided
 * 
 * Hash: 0x0F2A2175734926D8 | Since: 1207
 */
export function stopSoundWithName(): [string, string] {
    return StopSoundWithName();
}

/**
 * No comment provided
 * 
 * Hash: 0x05D6195FB4D428F4 | Since: 1207
 */
export function triggerMusicEventWithHash(eventName: number | string): any {
    if (typeof eventName === 'string') eventName = GetHashKey(eventName)
    return TriggerMusicEventWithHash(eventName);
}

/**
 * _UNLOAD_[A-C]* - USE_*
 * 
 * Hash: 0x87E6302FC61208CC | Since: 1207
 */
export function unloadSpeechContext(): string {
    return UnloadSpeechContext();
}

