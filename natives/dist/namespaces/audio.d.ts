import { Vector3, IEntity, IPed, IVehicle } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x153973AB99FE8980 | Since: 1207
 */
export declare function addEntityToMixGroup(entity: number | IEntity): string;
/**
 * No comment provided
 *
 * Hash: 0x95D9F4BC443956E7 | Since: 1207
 */
export declare function addPedToConversation(ped: number | IPed): [string, string];
/**
 * Old name: AUDIO_IS_SCRIPTED_MUSIC_PLAYING
 *
 * Hash: 0x845FFC3A4FEEFA3E | Since: 1207
 */
export declare function isMusicPlaying(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x374F0E716BFCDE82 | Since: 1207
 */
export declare function triggerExplosion(pos: Vector3): string;
/**
 * No comment provided
 *
 * Hash: 0x5B17A90291133DA5 | Since: 1207
 */
export declare function cancelMusicEvent(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x120C48C614909FA4 | Since: 1207
 */
export declare function clearAmbientZoneListState(): string;
/**
 * No comment provided
 *
 * Hash: 0x218DD44AAAC964FF | Since: 1207
 */
export declare function clearAmbientZoneState(): string;
/**
 * No comment provided
 *
 * Hash: 0x33D51F801CB16E4F | Since: 1207
 */
export declare function clearConversationHistory(): void;
/**
 * No comment provided
 *
 * Hash: 0xD2C91A0B572AAE56 | Since: 1207
 */
export declare function createNewScriptedConversation(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xA9A41C1E940FB0E8 | Since: 1207
 */
export declare function disablePedPain(ped: number | IPed, toggle: boolean): void;
/**
 * Checks if the ped can play the speech or has the speech file, last parameter is usually false.
 *
 * Hash: 0x49B99BF3FDA89A7A | Since: 1207
 */
export declare function doesContextExistForThisPed(ped: number | IPed, unk: boolean): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x062D5EAD4DA2FA6A | Since: 1207
 */
export declare function forcePedPanicWalla(): void;
/**
 * Old name: _FORCE_VEHICLE_ENGINE_AUDIO
 *
 * Hash: 0x4F0C413926060B38 | Since: 1207
 */
export declare function forceUseGameObject(vehicle: number | IVehicle): string;
/**
 * No comment provided
 *
 * Hash: 0x480357EE890C295A | Since: 1207
 */
export declare function getCurrentScriptedConversationLine(): [number, string];
/**
 * No comment provided
 *
 * Hash: 0xE7A0D23DC414507B | Since: 1207
 */
export declare function getMusicPlaytime(): number;
/**
 * No comment provided
 *
 * Hash: 0x430386FE9BF80B45 | Since: 1207
 */
export declare function getSoundId(): number;
/**
 * No comment provided
 *
 * Hash: 0x932C2D096A2C3FFF | Since: 1207
 */
export declare function isAmbientSpeechDisabled(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9072C8B49907BFAD | Since: 1207
 */
export declare function isAmbientSpeechPlaying(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC265DF9FB44A9FBD | Since: 1207
 */
export declare function isAnimalVocalizationPlaying(pedHandle: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x729072355FA39EC9 | Since: 1207
 */
export declare function isAnySpeechPlaying(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB65B60556E2A9225 | Since: 1207
 */
export declare function isSceneActive(): [boolean, string];
/**
 * Checks whether the horn of a vehicle is currently played.
 *
 * Hash: 0x9D6BFC12B05C6121 | Since: 1207
 */
export declare function isHornActive(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x049E937F18F4020C | Since: 1207
 */
export declare function isPedInCurrentConversation(ped: number | IPed): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xDF0D54BE7A776737 | Since: 1207
 */
export declare function isScriptedConversationLoaded(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x1ECC76792F661CF5 | Since: 1207
 */
export declare function isScriptedConversationPlaying(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xCC9AA18DCC7084F4 | Since: 1207
 */
export declare function isScriptedSpeechPlaying(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD11FA52EB849D978 | Since: 1207
 */
export declare function isStreamPlaying(streamId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1F1F957154EC51DF | Since: 1207
 */
export declare function loadStream(): [boolean, string, string];
/**
 * No comment provided
 *
 * Hash: 0x8530AD776CD72B12 | Since: 1207
 */
export declare function pauseScriptedConversation(): string;
/**
 * Old name: _PLAY_AMBIENT_SPEECH_AT_COORDS
 *
 * Hash: 0xED640017ED337E45 | Since: 1207
 */
export declare function playAmbientSpeechFromPositionNative(pos: Vector3): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xEE066C7006C49C0A | Since: 1207
 */
export declare function playAnimalVocalization(ped: number | IPed): string;
/**
 * No comment provided
 *
 * Hash: 0xCD536C4D33DCC900 | Since: 1207
 */
export declare function playEndCreditsMusic(play: boolean): void;
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
export declare function playPain(ped: number | IPed, painId: number, isNetwork: boolean): void;
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
export declare function playPedAmbientSpeechNative(speaker: number | IPed): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0x7FF4944CC209192D | Since: 1207
 */
export declare function playSound(): [string, string];
/**
 * Old name: _PLAY_SOUND_FROM_POSITION
 *
 * Hash: 0xCCE219C922737BFA | Since: 1207
 */
export declare function playSoundFromCoord(positionX: number, positionY: number, positionZ: number, bOverNetwork: boolean, nNetworkRange: number, isExteriorLoc: boolean): [string, string];
/**
 * No comment provided
 *
 * Hash: 0x6FB1DA3CA9DA7D90 | Since: 1207
 */
export declare function playSoundFromEntity(entity: number | IEntity, isNetwork: boolean): [string, string];
/**
 * see a list of frontend sounds here: https://github.com/femga/rdr3_discoveries/tree/master/audio/frontend_soundsets
 *
 * Hash: 0x67C540AA08E4A6F5 | Since: 1207
 */
export declare function playSoundFrontend(): [string, string];
/**
 * No comment provided
 *
 * Hash: 0x89049DD63C08B5D1 | Since: 1207
 */
export declare function playStreamFromPed(ped: number | IPed, streamId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x21442F412E8DE56B | Since: 1207
 */
export declare function playStreamFromPosition(pos: Vector3, streamId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x58FCE43488F9F5F4 | Since: 1207
 */
export declare function playStreamFrontend(streamId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3B3CAD6166916D87 | Since: 1207
 */
export declare function preloadScriptConversation(clone: boolean): string;
/**
 * No comment provided
 *
 * Hash: 0x1E5185B72EF5158A | Since: 1207
 */
export declare function prepareMusicEvent(): [boolean, string];
/**
 * soundId maybe be incorrect name for param p2, in the decompiles is always -2
 *
 * Hash: 0xE368E8422C860BA7 | Since: 1207
 */
export declare function prepareSound(soundId: number): [boolean, string, string];
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/audio/soundsets
 *
 * Hash: 0xD9130842D7226045 | Since: 1207
 */
export declare function prepareSoundset(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x4AD019591E94C064 | Since: 1207
 */
export declare function prepareSoundWithEntity(entity: number | IEntity, soundId: number): [boolean, string, string];
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xC6ED9D5092438D91 | Since: 1207
 */
export declare function registerScriptWith(): void;
/**
 * No comment provided
 *
 * Hash: 0x77ED170667F50170 | Since: 1207
 */
export declare function releaseNamedScriptBank(): string;
/**
 * No comment provided
 *
 * Hash: 0x7A2D8AD0A9EB9C3F | Since: 1207
 */
export declare function releaseScriptBank(): void;
/**
 * No comment provided
 *
 * Hash: 0x353FC880830B88FA | Since: 1207
 */
export declare function releaseSoundId(soundId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x18EB48CFC41F2EA0 | Since: 1207
 */
export declare function removeEntityFromMixGroup(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xB4BBFD9CD8B3922B | Since: 1207
 */
export declare function removePortalSettingsOverride(): string;
/**
 * No comment provided
 *
 * Hash: 0x2F844A8B08D76685 | Since: 1207
 */
export declare function requestScriptBank(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x9AEB285D1818C9AC | Since: 1207
 */
export declare function restartScriptedConversation(): string;
/**
 * No comment provided
 *
 * Hash: 0x6C8065A3B780185B | Since: 1207
 */
export declare function setAmbientVoiceName(ped: number | IPed): string;
/**
 * No comment provided
 *
 * Hash: 0x9748FA4DE50CCE3E | Since: 1207
 */
export declare function setAmbientZoneListState(enabled: boolean, forceUpdate: boolean): string;
/**
 * No comment provided
 *
 * Hash: 0xF3638DAE8C4045E1 | Since: 1207
 */
export declare function setAmbientZoneListStatePersistent(enabled: boolean, forceUpdate: boolean): string;
/**
 * No comment provided
 *
 * Hash: 0xBDA07E5950085E46 | Since: 1207
 */
export declare function setAmbientZoneState(enabled: boolean, forceUpdate: boolean): string;
/**
 * No comment provided
 *
 * Hash: 0x1D6650420CEC9D3B | Since: 1207
 */
export declare function setAmbientZoneStatePersistent(enabled: boolean, forceUpdate: boolean): string;
/**
 * Not implemented.
 *
 * Hash: 0xCC97B29285B1DC3B | Since: 1207
 */
export declare function setAnimalMood(animal: number | IPed, mood: number): void;
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/audio/audio_flags
 *
 * Hash: 0xB9EFD5C25018725A | Since: 1207
 */
export declare function setFlag(toggle: boolean): string;
/**
 * No comment provided
 *
 * Hash: 0x9B1FC259187C97C0 | Since: 1207
 */
export declare function setOnlineTransitionStage(): string;
/**
 * No comment provided
 *
 * Hash: 0xEF21A9EF089A2668 | Since: 1207
 */
export declare function setSceneVariable(value: number): [string, string];
/**
 * No comment provided
 *
 * Hash: 0xE5564483E407F914 | Since: 1207
 */
export declare function setVehiclePriority(vehicle: number | IVehicle): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x3BD3F52BA9B1E4E8 | Since: 1207
 */
export declare function setGpsActive(active: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x76D683C108594D0E | Since: 1207
 */
export declare function setHornEnabled(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xB2DE3AEBE31150E2 | Since: 1207
 */
export declare function setIsScriptedSpeechDisabled(ped: number | IPed, disabled: boolean): any;
/**
 * No comment provided
 *
 * Hash: 0x8BF907833BE275DE | Since: 1207
 */
export declare function setPedInteriorWallaDensity(): void;
/**
 * No comment provided
 *
 * Hash: 0x95D2D383D5396B8A | Since: 1207
 */
export declare function setPedIsDrunk(ped: number | IPed, toggle: boolean): void;
/**
 * https://en.m.wikipedia.org/wiki/Walla
 *
 * Hash: 0x149AEE66F0CB3A99 | Since: 1207
 */
export declare function setPedWallaDensity(): void;
/**
 * No comment provided
 *
 * Hash: 0x044DBAD7A7FA2BE5 | Since: 1207
 */
export declare function setPortalSettingsOverride(): [string, string];
/**
 * No comment provided
 *
 * Hash: 0x399D2D3B33F1B8EB | Since: 1207
 */
export declare function setStaticEmitterEnabled(toggle: boolean): string;
/**
 * Old Name: _SET_VARIABLE_ON_SOUND_WITH_ID
 *
 * Hash: 0x503703EC1781B7D6 | Since: 1207
 */
export declare function setVariableOnSound(soundId: number, variableValue: number): string;
/**
 * No comment provided
 *
 * Hash: 0x9663FE6B7A61EB00 | Since: 1207
 */
export declare function skipToNextScriptedConversationLine(): string;
/**
 * No comment provided
 *
 * Hash: 0x013A80FC08F6E4F2 | Since: 1207
 */
export declare function startScene(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x23641AFE870AF385 | Since: 1207
 */
export declare function startPreloadedConversation(): string;
/**
 * No comment provided
 *
 * Hash: 0x6B17C62C9635D2DC | Since: 1207
 */
export declare function startScriptConversation(clone: boolean): string;
/**
 * No comment provided
 *
 * Hash: 0xDFE8422B3B94E688 | Since: 1207
 */
export declare function stopScene(): string;
/**
 * No comment provided
 *
 * Hash: 0xBAC7FC81A75EC1A1 | Since: 1207
 */
export declare function stopScenes(): void;
/**
 * No comment provided
 *
 * Hash: 0xB8BEC0CA6F0EDB0F | Since: 1207
 */
export declare function stopCurrentPlayingAmbientSpeech(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x79D2F0E66F81D90D | Since: 1207
 */
export declare function stopCurrentPlayingSpeech(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x9D64D7405520E3D3 | Since: 1207
 */
export declare function stopPedSpeaking(ped: number | IPed, shaking: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xD79DEEFB53455EBA | Since: 1207
 */
export declare function stopScriptedConversation(): [number, string];
/**
 * Old Name: _STOP_SOUND_WITH_ID
 *
 * Hash: 0x3210BCB36AF7621B | Since: 1207
 */
export declare function stopSound(soundId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA4718A1419D18151 | Since: 1207
 */
export declare function stopStream(streamId: number): void;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/audio/music_events/music_events.lua
 *
 * Hash: 0x706D57B0F50DA710 | Since: 1207
 */
export declare function triggerMusicEvent(): [boolean, string];
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xA8638BE228D4751A | Since: 1207
 */
export declare function unregisterScriptWith(): void;
/**
 * Only used in R* SP Scripts
 * Old Name: _UPDATE_SOUND_POSITION
 *
 * Hash: 0x0286617C8FC50A53 | Since: 1207
 */
export declare function updateSoundCoord(soundId: number, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xBF4DC1784BE94DFA | Since: 1207
 */
export declare function useFootstepScriptSweeteners(ped: number | IPed, hash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x017492B2201E3428 | Since: 1207
 */
export declare function _0x017492B2201E3428(): void;
/**
 * _RESET_PED_* hash used is MOONSHINE_BAND used along side 0xBC07CA8FD710E7FD
 *
 * Hash: 0x018ABE833CA64D2A | Since: 1232
 */
export declare function _0x018ABE833CA64D2A(ped: number | IPed, hash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x06C5DF5EE444BC6B | Since: 1207
 */
export declare function _0x06C5DF5EE444BC6B(): void;
/**
 * No comment provided
 *
 * Hash: 0x078F77FD1A43EAB3 | Since: 1207
 */
export declare function _0x078F77FD1A43EAB3(): void;
/**
 * No comment provided
 *
 * Hash: 0x0CB3D1919E8D7CBA | Since: 1207
 */
export declare function _0x0CB3D1919E8D7CBA(convoRoot: string): boolean;
/**
 * speechEventType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/naSpeechEventType
 * p1 is possibly naSpeechAudibility, naSpeechType, or naSpeechEventTypeRequestPriority
 * SKIP_* - START_*
 *
 * Hash: 0x0D7FD6A55FD63AEF | Since: 1207
 */
export declare function _0x0D7FD6A55FD63AEF(speechEventType: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0FAF7171BF613B80 | Since: 1207
 */
export declare function _0x0FAF7171BF613B80(): void;
/**
 * No comment provided
 *
 * Hash: 0x131EC9247E7A2903 | Since: 1207
 */
export declare function _0x131EC9247E7A2903(): any;
/**
 * No comment provided
 *
 * Hash: 0x138ADB94F8B90616 | Since: 1207
 */
export declare function _0x138ADB94F8B90616(): void;
/**
 * p1 is an int seems to be a duration returned from 0x886657C5B3D8EDE3
 *
 * Hash: 0x139A4B9DF2D26CBF | Since: 1232
 */
export declare function _0x139A4B9DF2D26CBF(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x152ED1B56E8F1F50 | Since: 1207
 */
export declare function _0x152ED1B56E8F1F50(currentScriptedConvoLine: number): number;
/**
 * No comment provided
 *
 * Hash: 0x1E6F9A9FE1A99F36 | Since: 1207
 */
export declare function _0x1E6F9A9FE1A99F36(audSpeechEvent: string): void;
/**
 * No comment provided
 *
 * Hash: 0x254B0241E964B450 | Since: 1207
 */
export declare function _0x254B0241E964B450(currentScriptedConvoLine: number): number;
/**
 * No comment provided
 *
 * Hash: 0x259ACC5B52A2B2D9 | Since: 1207
 */
export declare function _0x259ACC5B52A2B2D9(): void;
/**
 * No comment provided
 *
 * Hash: 0x2651DDC0EA269073 | Since: 1207
 */
export declare function _0x2651DDC0EA269073(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x295859EB18F48D82 | Since: 1207
 */
export declare function _0x295859EB18F48D82(): number;
/**
 * No comment provided
 *
 * Hash: 0x2B101AD9F651243A | Since: 1207
 */
export declare function _0x2B101AD9F651243A(): any;
/**
 * No comment provided
 *
 * Hash: 0x2B9C37C01BF25EDB | Since: 1207
 */
export declare function _0x2B9C37C01BF25EDB(): any;
/**
 * No comment provided
 *
 * Hash: 0x2FFF4A78384AFFDF | Since: 1436
 */
export declare function _0x2FFF4A78384AFFDF(entity: number | IEntity): any;
/**
 * No comment provided
 *
 * Hash: 0x341CDD17EFC2472E | Since: 1207
 */
export declare function _0x341CDD17EFC2472E(): void;
/**
 * No comment provided
 *
 * Hash: 0x35B8C070E0C16E2F | Since: 1207
 */
export declare function _0x35B8C070E0C16E2F(): void;
/**
 * No comment provided
 *
 * Hash: 0x380A2E353AD30917 | Since: 1207
 */
export declare function _0x380A2E353AD30917(): void;
/**
 * No comment provided
 *
 * Hash: 0x3A00D87B20A2A5E4 | Since: 1207
 */
export declare function _0x3A00D87B20A2A5E4(): void;
/**
 * No comment provided
 *
 * Hash: 0x3A3BE6B920525237 | Since: 1207
 */
export declare function _0x3A3BE6B920525237(): void;
/**
 * No comment provided
 *
 * Hash: 0x3D0BBCCF401B5FDB | Since: 1207
 */
export declare function _0x3D0BBCCF401B5FDB(): void;
/**
 * No comment provided
 *
 * Hash: 0x3E93DDDCBB6111E4 | Since: 1207
 */
export declare function _0x3E93DDDCBB6111E4(): void;
/**
 * No comment provided
 *
 * Hash: 0x3E98AC9D8C56C62C | Since: 1207
 */
export declare function _0x3E98AC9D8C56C62C(): void;
/**
 * No comment provided
 *
 * Hash: 0x40CA665AB9D8D505 | Since: 1207
 */
export declare function _0x40CA665AB9D8D505(convoRoot: string, singleLineIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x43037ABFE214A851 | Since: 1207
 */
export declare function _0x43037ABFE214A851(): void;
/**
 * _SET_PED_PLAY_GESTURE_ANIMS? p2 seems to be a flag string used example
 * AI_GESTURES@INSTRUMENTS@FIDDLE@STANDING@MALE@NORMAL
 *
 * Hash: 0x448F2647DD6F2E27 | Since: 1232
 */
export declare function _0x448F2647DD6F2E27(ped: number | IPed, hash: number | string): string;
/**
 * No comment provided
 *
 * Hash: 0x44A5EEF54F62E823 | Since: 1207
 */
export declare function _0x44A5EEF54F62E823(): any;
/**
 * Gets the hash for the currently playing speech line.
 *
 * Hash: 0x4A98E228A936DBCC | Since: 1207
 */
export declare function _0x4A98E228A936DBCC(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x4BE3EC91C01F0FE8 | Since: 1207
 */
export declare function _0x4BE3EC91C01F0FE8(): void;
/**
 * No comment provided
 *
 * Hash: 0x569ABC36E28DDEAA | Since: 1207
 */
export declare function _0x569ABC36E28DDEAA(): void;
/**
 * _IS_SOUND_RUNNING(?)
 *
 * Hash: 0x580D71DFE0088E34 | Since: 1207
 */
export declare function _0x580D71DFE0088E34(audioName: string, audioRef: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5A13586A9447931F | Since: 1207
 */
export declare function _0x5A13586A9447931F(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5AE0CB5F35F034FD | Since: 1207
 */
export declare function _0x5AE0CB5F35F034FD(): void;
/**
 * No comment provided
 *
 * Hash: 0x5BC885EBD75FAA7D | Since: 1207
 */
export declare function _0x5BC885EBD75FAA7D(): void;
/**
 * No comment provided
 *
 * Hash: 0x5E3CCF03995388B5 | Since: 1207
 */
export declare function _0x5E3CCF03995388B5(): void;
/**
 * No comment provided
 *
 * Hash: 0x62377977E4F08668 | Since: 1436
 */
export declare function _0x62377977E4F08668(entity: number | IEntity): any;
/**
 * No comment provided
 *
 * Hash: 0x64B956F4E761DF5C | Since: 1207
 */
export declare function _0x64B956F4E761DF5C(): void;
/**
 * speechEventType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/naSpeechEventType
 * SKIP_* - START_*
 *
 * Hash: 0x660A8F876DF1D4F8 | Since: 1207
 */
export declare function _0x660A8F876DF1D4F8(speechEventType: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6652B0C8F3D414D0 | Since: 1207
 */
export declare function _0x6652B0C8F3D414D0(): void;
/**
 * _STOP_AUDIO_*
 *
 * Hash: 0x6AB944DF68B512D3 | Since: 1207
 */
export declare function _0x6AB944DF68B512D3(): void;
/**
 * No comment provided
 *
 * Hash: 0x6B7A88A61B41E589 | Since: 1207
 */
export declare function _0x6B7A88A61B41E589(): void;
/**
 * No comment provided
 *
 * Hash: 0x6DA15746D5CC1A92 | Since: 1207
 */
export declare function _0x6DA15746D5CC1A92(): void;
/**
 * _AUDIO_IS_* - _AUDIO_TRIGGER*
 *
 * Hash: 0x7455CD705F7E933E | Since: 1207
 */
export declare function _0x7455CD705F7E933E(): void;
/**
 * No comment provided
 *
 * Hash: 0x7678FE0455ED1145 | Since: 1207
 */
export declare function _0x7678FE0455ED1145(): any;
/**
 * Only used in R* SP Script cv_mus_shared
 *
 * Hash: 0x79F9C57B8D0DFE90 | Since: 1207
 */
export declare function _0x79F9C57B8D0DFE90(convoRoot: string, animScene: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7E176C676F8652A9 | Since: 1207
 */
export declare function _0x7E176C676F8652A9(): void;
/**
 * No comment provided
 *
 * Hash: 0x821C32C728B24477 | Since: 1207
 */
export declare function _0x821C32C728B24477(): void;
/**
 * No comment provided
 *
 * Hash: 0x839C9F124BE74D94 | Since: 1207
 */
export declare function _0x839C9F124BE74D94(): void;
/**
 * No comment provided
 *
 * Hash: 0x847748AE5D7B1071 | Since: 1207
 */
export declare function _0x847748AE5D7B1071(): boolean;
/**
 * Not implemented.
 *
 * Hash: 0x864A842B86993851 | Since: 1207
 */
export declare function _0x864A842B86993851(ped: number | IPed): void;
/**
 * seems to return a duration to be used in 0x139A4B9DF2D26CBF
 *
 * Hash: 0x886657C5B3D8EDE3 | Since: 1232
 */
export declare function _0x886657C5B3D8EDE3(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x8D29FDF565DED9AE | Since: 1232
 */
export declare function _0x8D29FDF565DED9AE(): void;
/**
 * No comment provided
 *
 * Hash: 0x8E901B65206C2D3E | Since: 1207
 */
export declare function _0x8E901B65206C2D3E(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x935DBD96D4A3DA1F | Since: 1207
 */
export declare function _0x935DBD96D4A3DA1F(currentScriptedConvoLine: number): number;
/**
 * Returns true or false if the ped can say a specific speech line with PLAY_PED_AMBIENT_SPEECH_NATIVE, similar to DOES_CONTEXT_EXIST_FOR_THIS_PED
 *
 * Hash: 0x9D6DEC9791A4E501 | Since: 1207
 */
export declare function _0x9D6DEC9791A4E501(ped: number | IPed): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x9EB779765E68C52E | Since: 1207
 */
export declare function _0x9EB779765E68C52E(): void;
/**
 * No comment provided
 *
 * Hash: 0xA2323A2EAE32A290 | Since: 1207
 */
export declare function _0xA2323A2EAE32A290(listeningToPed: number | IPed, ped: number | IPed, listenerName: string): void;
/**
 * No comment provided
 *
 * Hash: 0xA2B851605748AD0E | Since: 1207
 */
export declare function _0xA2B851605748AD0E(): void;
/**
 * No comment provided
 *
 * Hash: 0xA6847BBA4FCDD13F | Since: 1207
 */
export declare function _0xA6847BBA4FCDD13F(): void;
/**
 * No comment provided
 *
 * Hash: 0xA6A3A3F96B8B030E | Since: 1207
 */
export declare function _0xA6A3A3F96B8B030E(): any;
/**
 * No comment provided
 *
 * Hash: 0xABDB4863D3D72021 | Since: 1207
 */
export declare function _0xABDB4863D3D72021(entity: number | IEntity): void;
/**
 * seems to be for moonshine_band stuff heres some hashes it accepts
 * 1949731019, -1542215752, 978192019 == moonshine_band, 533120, 1180906091, 1260094407, 1057811885, -1044357807,487746791,51469403
 *
 * Hash: 0xB93A769B8B726950 | Since: 1207
 */
export declare function _0xB93A769B8B726950(ped: number | IPed, p1: number | string): void;
/**
 * _RESET_PED_* hash used is MOONSHINE_BAND used along side 0x018ABE833CA64D2A
 *
 * Hash: 0xBC07CA8FD710E7FD | Since: 1232
 */
export declare function _0xBC07CA8FD710E7FD(ped: number | IPed, hash: number | string): void;
/**
 * Checks if ped  has moonshine_band _GET_PED_*
 *
 * Hash: 0xBE28DB99556FF8D9 | Since: 1207
 */
export declare function _0xBE28DB99556FF8D9(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xC369E2234E34A0CA | Since: 1207
 */
export declare function _0xC369E2234E34A0CA(): any;
/**
 * No comment provided
 *
 * Hash: 0xC4CFCE4C656EF480 | Since: 1207
 */
export declare function _0xC4CFCE4C656EF480(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xC68C02DE259C927C | Since: 1232
 */
export declare function _0xC68C02DE259C927C(): any;
/**
 * No comment provided
 *
 * Hash: 0xC886CD666ADD42E1 | Since: 1207
 */
export declare function _0xC886CD666ADD42E1(): void;
/**
 * No comment provided
 *
 * Hash: 0xCBF2BEBB468A34F3 | Since: 1207
 */
export declare function _0xCBF2BEBB468A34F3(): void;
/**
 * No comment provided
 *
 * Hash: 0xCFAD2C8CD1054523 | Since: 1207
 */
export declare function _0xCFAD2C8CD1054523(): void;
/**
 * No comment provided
 *
 * Hash: 0xD05A460328560477 | Since: 1232
 */
export declare function _0xD05A460328560477(): any;
/**
 * _IS_SCRIPTED_CONVERSATION_*
 *
 * Hash: 0xD0730C1FA40348D9 | Since: 1207
 */
export declare function _0xD0730C1FA40348D9(convoRoot: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD47D47EFBF103FB8 | Since: 1207
 */
export declare function _0xD47D47EFBF103FB8(): void;
/**
 * No comment provided
 *
 * Hash: 0xD733528B6C35647A | Since: 1207
 */
export declare function _0xD733528B6C35647A(): void;
/**
 * No comment provided
 *
 * Hash: 0xDAD6CD07CAA4F382 | Since: 1207
 */
export declare function _0xDAD6CD07CAA4F382(): void;
/**
 * No comment provided
 *
 * Hash: 0xDC2F83A0612CA34D | Since: 1207
 */
export declare function _0xDC2F83A0612CA34D(): any;
/**
 * No comment provided
 *
 * Hash: 0xDC93F0948F2C28F4 | Since: 1207
 */
export declare function _0xDC93F0948F2C28F4(): void;
/**
 * No comment provided
 *
 * Hash: 0xDF947FE0D551684E | Since: 1207
 */
export declare function _0xDF947FE0D551684E(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE600F61F54A444A6 | Since: 1207
 */
export declare function _0xE600F61F54A444A6(): any;
/**
 * No comment provided
 *
 * Hash: 0xE7E6CB8B713ED190 | Since: 1207
 */
export declare function _0xE7E6CB8B713ED190(): void;
/**
 * No comment provided
 *
 * Hash: 0xE891504B2F0E2DBA | Since: 1207
 */
export declare function _0xE891504B2F0E2DBA(): void;
/**
 * seems to be a _SET_PED_* that accepts p1 from GET_PED_SONG_INDEX_HOST
 *
 * Hash: 0xE9694B2D6CB87B06 | Since: 1232
 */
export declare function _0xE9694B2D6CB87B06(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xEA546C31FD45F8CD | Since: 1207
 */
export declare function _0xEA546C31FD45F8CD(): void;
/**
 * No comment provided
 *
 * Hash: 0xEB4D592620B8C209 | Since: 1207
 */
export declare function _0xEB4D592620B8C209(): void;
/**
 * Name: ROPE_SETTINGS_DEFAULT
 *
 * Hash: 0xF092B6030D6FD49C | Since: 1207
 */
export declare function _0xF092B6030D6FD49C(ropeId: number, name: string): void;
/**
 * No comment provided
 *
 * Hash: 0xF0EE69F500952FA5 | Since: 1207
 */
export declare function _0xF0EE69F500952FA5(): any;
/**
 * No comment provided
 *
 * Hash: 0xF232C2C546AC16D0 | Since: 1207
 */
export declare function _0xF232C2C546AC16D0(): void;
/**
 * No comment provided
 *
 * Hash: 0xF336E9F989B3518F | Since: 1207
 */
export declare function _0xF336E9F989B3518F(): number;
/**
 * No comment provided
 *
 * Hash: 0xF64034D533CE8AAC | Since: 1207
 */
export declare function _0xF64034D533CE8AAC(): void;
/**
 * No comment provided
 *
 * Hash: 0xFCDEC42B1C78B7F8 | Since: 1207
 */
export declare function _0xFCDEC42B1C78B7F8(): void;
/**
 * No comment provided
 *
 * Hash: 0xFD461D0ABA5559B1 | Since: 1207
 */
export declare function _0xFD461D0ABA5559B1(): void;
/**
 * No comment provided
 *
 * Hash: 0xFE5C6177064BD390 | Since: 1207
 */
export declare function _0xFE5C6177064BD390(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFFE9C53DEEA3DB0B | Since: 1207
 */
export declare function _0xFFE9C53DEEA3DB0B(pos: Vector3, isSrlLoaded: boolean): any;
/**
 * No comment provided
 *
 * Hash: 0x6378A235374B852F | Since: 1207
 */
export declare function blockSpeechContext(block: boolean): string;
/**
 * No comment provided
 *
 * Hash: 0xEF51242E35242B47 | Since: 1207
 */
export declare function clearConversationHistoryForScriptedConversation(): string;
/**
 * Create a scripted speech to control speech. If handle is less than 0, it's invalid.
 * params struct for ScriptedSpeechParams see: PLAY_PED_AMBIENT_SPEECH_NATIVE
 * Returns scriptedSpeech handle.
 *
 * Hash: 0x72E4D1C4639BC465 | Since: 1207
 */
export declare function createNewScriptedSpeech(ped: number | IPed, params: any): number;
/**
 * No comment provided
 *
 * Hash: 0x8B25A18E390F75BF | Since: 1207
 */
export declare function getEntityMixGroup(entity: number | IEntity): number;
/**
 * Gets the hash for the last played speech line.
 *
 * Hash: 0x6BFFB7C276866996 | Since: 1207
 */
export declare function getLastPlayedSpeechForPed(ped: number | IPed): number;
/**
 * Creates stream and returns streamId handle to be used with PLAY_STREAM_* natives
 * https://github.com/femga/rdr3_discoveries/tree/master/audio/create_stream
 *
 * Hash: 0x0556C784FA056628 | Since: 1207
 */
export declare function getLoadedStreamIdFromCreation(): [number, string, string];
/**
 * seems to be used for  0xE9694B2D6CB87B06
 *
 * Hash: 0x2DBBF0C5E19383EE | Since: 1232
 */
export declare function getPedSongIndexHost(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x714A0EA7DE1167BE | Since: 1207
 */
export declare function hasSoundNameFinished(): [boolean, string, string];
/**
 * No comment provided
 *
 * Hash: 0x84848E1C0FC67DBB | Since: 1207
 */
export declare function hasSoundIdFinished(soundId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA2CAC9DEF0195E6F | Since: 1207
 */
export declare function isAnyConversationPlaying(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x54B187F111D9C6F8 | Since: 1207
 */
export declare function isPedInAnyConversation(ped: number | IPed): boolean;
/**
 * item: FUSE, value returned from 0x2E1CDC1FF3B8473E
 * soundSet: HUD_SHOP_SOUNDSET, COMPANIONS_ROBBERIES_SOUNDSET
 *
 * Hash: 0x6DF942C4179BE5AB | Since: 1207
 */
export declare function isScriptedCustom(item: number | string, soundSet: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD89504D9D7D5057D | Since: 1207
 */
export declare function isScriptedConversationCreated(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xF01C570E0A0A1E67 | Since: 1207
 */
export declare function isScriptedConversionOngoing(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x0E53530D9B2DB01D | Since: 1311
 */
export declare function playAnimalVocalizationPheromoneVialResponse(ped: number | IPed, p1: number | string): void;
/**
 * Params: p5 seems to be always 0
 *
 * Hash: 0xF1C5310FEAA36B48 | Since: 1207
 */
export declare function playSoundFromEntityWithSet(soundId: number, entity: number | IEntity): [string, string];
/**
 * item: value returned from 0x2E1CDC1FF3B8473E
 * soundSet: HUD_SHOP_SOUNDSET, COMPANIONS_ROBBERIES_SOUNDSET
 *
 * Hash: 0xE8EAFF7B41EDD291 | Since: 1207
 */
export declare function playSoundFromItem(item: number | string, soundSet: number | string): void;
/**
 * Starts Audio Loop
 * _PLAY_SOUND_FROM_ENTITY* - _PLAY_SOUND_FRONTEND*
 *
 * Hash: 0xDCF5BA95BBF0FABA | Since: 1207
 */
export declare function playSoundFromPositionWithId(soundId: number, pos: Vector3): [string, string];
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
export declare function playSoundFromScriptedSpeech(scriptedSpeech: number): any;
/**
 * No comment provided
 *
 * Hash: 0xCE5D0FFE83939AF1 | Since: 1207
 */
export declare function playSoundFrontendWithSoundId(soundId: number): [string, string];
/**
 * No comment provided
 *
 * Hash: 0x9D746964E0CF2C5F | Since: 1207
 */
export declare function releaseShardSounds(): [string, string];
/**
 * No comment provided
 *
 * Hash: 0x531A78D6BF27014B | Since: 1207
 */
export declare function releaseSoundset(): string;
/**
 * No comment provided
 *
 * Hash: 0x3743CE6948194349 | Since: 1207
 */
export declare function setAmbientZonePosition(pos: Vector3, heading: number): string;
/**
 * No comment provided
 *
 * Hash: 0xAC84686C06184B0D | Since: 1207
 */
export declare function setSceneset(): [boolean, string, string];
/**
 * p1: Entity.Relationship
 * p2: Player, Enemy, Teammate, Neutral
 *
 * Hash: 0x2E31ACA7477CF00F | Since: 1207
 */
export declare function setSoundRelationshipOnPed(ped: number | IPed): [string, string];
/**
 * No comment provided
 *
 * Hash: 0x9821B68CD3E05F2B | Since: 1207
 */
export declare function setVariableOnSoundWithName(variableValue: number): [string, string, string];
/**
 * Hashes: VOFX_PLAYER_MALE01, VOFX_PLAYER_MALE02, VOFX_PLAYER_MALE03, VOFX_PLAYER_FEMALE01, VOFX_PLAYER_FEMALE02, VOFX_PLAYER_FEMALE03
 *
 * Hash: 0x2703EFB583F0949A | Since: 1207
 */
export declare function setVofxPedVoice(ped: number | IPed, voice: number | string): void;
/**
 * whistleConfig: Ped.WhistlePitch (0.0 - 1.0), Ped.WhistleClarity (0.0 - 1.0), Ped.WhistleShape (0.0 - 10.0)
 *
 * Hash: 0x9963681A8BC69BF3 | Since: 1207
 */
export declare function setWhistleConfigForPed(ped: number | IPed, value: number): string;
/**
 * No comment provided
 *
 * Hash: 0x6339C1EA3979B5F7 | Since: 1207
 */
export declare function startSceneset(): [boolean, string, string];
/**
 * No comment provided
 *
 * Hash: 0x2E399EAFBEEA74D5 | Since: 1207
 */
export declare function stopAllScriptedSounds(): void;
/**
 * No comment provided
 *
 * Hash: 0x36559148B78853B3 | Since: 1207
 */
export declare function stopAllScriptedConversions(): void;
/**
 * No comment provided
 *
 * Hash: 0x9428447DED71FC7E | Since: 1207
 */
export declare function stopSceneset(): string;
/**
 * No comment provided
 *
 * Hash: 0x0F2A2175734926D8 | Since: 1207
 */
export declare function stopSoundWithName(): [string, string];
/**
 * No comment provided
 *
 * Hash: 0x05D6195FB4D428F4 | Since: 1207
 */
export declare function triggerMusicEventWithHash(eventName: number | string): any;
/**
 * _UNLOAD_[A-C]* - USE_*
 *
 * Hash: 0x87E6302FC61208CC | Since: 1207
 */
export declare function unloadSpeechContext(): string;
