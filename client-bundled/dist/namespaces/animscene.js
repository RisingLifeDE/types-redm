import { IEntity, IPed } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x718CF1328D20C2B3 | Since: 1207 | API-Set: unknown
 */
export function abort(animScene) {
    AbortAnimScene(animScene, false);
}
/**
 * No comment provided
 *
 * Hash: 0xDC418495DBA327A1 | Since: 1207 | API-Set: unknown
 */
export function attachToEntity(animScene, entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    AttachAnimSceneToEntity(animScene, _entity, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x1C0B105C3F30B88D | Since: 1207 | API-Set: unknown
 */
export function attachToEntityPreservingLocation(animScene, entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    AttachAnimSceneToEntityPreservingLocation(animScene, _entity, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x1B70811D3BF75DB9 | Since: 1207 | API-Set: unknown
 */
export function blockFadingNextFrame() {
    BlockAnimSceneFadingNextFrame(false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x661B8683611B9B97 | Since: 1207 | API-Set: unknown
 */
export function checkOwnershipOf(animScene) {
    return CheckOwnershipOfAnimScene(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x73616E64696C616E | Since: 1207 | API-Set: unknown
 */
export function couldEntityReachExitNextFrame(animScene) {
    return CouldAnimSceneEntityReachExitNextFrame(animScene, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6843A1AA3A336DFF | Since: 1207 | API-Set: unknown
 */
export function detach(animScene) {
    DetachAnimScene(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0xA2507C4948C83D2E | Since: 1207 | API-Set: unknown
 */
export function detachPreservingLocation(animScene) {
    DetachAnimScenePreservingLocation(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x25557E324489393C | Since: 1207 | API-Set: unknown
 */
export function doesExist(animScene) {
    return DoesAnimSceneExist(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0xA41351EA2A18A0AD | Since: 1207 | API-Set: unknown
 */
export function fadeAudioIn(animScene) {
    FadeAnimSceneAudioIn(animScene, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x323E3AD772BA5D57 | Since: 1207 | API-Set: unknown
 */
export function fadeAudioOut(animScene) {
    FadeAnimSceneAudioOut(animScene, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x07A6F6447ECA9B64 | Since: 1207 | API-Set: unknown
 */
export function getBool(animScene) {
    return GetAnimSceneBool(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x4822A65D5AF64E69 | Since: 1207 | API-Set: unknown
 */
export function getCurrentActiveCameraCount(animScene) {
    return GetAnimSceneCurrentActiveCameraCount(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x8398438D8F14F56D | Since: 1207 | API-Set: unknown
 */
export function getEntityLocationData(animScene) {
    return GetAnimSceneEntityLocationData(animScene, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xCC24CB07F60B496E | Since: 1207 | API-Set: unknown
 */
export function getFloat(animScene) {
    return GetAnimSceneFloat(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x2B7277484CC095FD | Since: 1207 | API-Set: unknown
 */
export function getInt(animScene) {
    return GetAnimSceneInt(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0xADF1D53F3B1FE0A7 | Since: 1207 | API-Set: unknown
 */
export function getOrigin(animScene, order) {
    return GetAnimSceneOrigin(animScene, order);
}
/**
 * No comment provided
 *
 * Hash: 0x3FBC3F51BF12DFBF | Since: 1207 | API-Set: unknown
 */
export function getPhase(animScene) {
    return GetAnimScenePhase(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0xF94692EB9DC15D74 | Since: 1207 | API-Set: unknown
 */
export function hasExited(animScene) {
    return HasAnimSceneExited(animScene, false);
}
/**
 * No comment provided
 *
 * Hash: 0xB89FCFF19DAFFF28 | Since: 1207 | API-Set: unknown
 */
export function hasEntityExited(animScene) {
    return HasEntityExitedAnimScene(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0xCDC5512A407CF08D | Since: 1207 | API-Set: unknown
 */
export function isExitingThisFrame(animScene) {
    return IsAnimSceneExitingThisFrame(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0xD8254CB2C586412B | Since: 1207 | API-Set: unknown
 */
export function isFinished(animScene) {
    return IsAnimSceneFinished(animScene, false);
}
/**
 * No comment provided
 *
 * Hash: 0x8D81E7824B7753F7 | Since: 1207 | API-Set: unknown
 */
export function isInSection(animScene) {
    return IsAnimSceneInSection(animScene, false);
}
/**
 * No comment provided
 *
 * Hash: 0x477122B8D05E7968 | Since: 1207 | API-Set: unknown
 */
export function isLoaded(animScene) {
    return IsAnimSceneLoaded(animScene, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x95531A4A20CCE7BC | Since: 1207 | API-Set: unknown
 */
export function isMetadataLoaded(animScene) {
    return IsAnimSceneMetadataLoaded(animScene, false);
}
/**
 * No comment provided
 *
 * Hash: 0xCBFC7725DE6CE2E0 | Since: 1207 | API-Set: unknown
 */
export function isRunning(animScene) {
    return IsAnimSceneRunning(animScene, false);
}
/**
 * No comment provided
 *
 * Hash: 0x005E6F28DD7ED58D | Since: 1207 | API-Set: unknown
 */
export function isEntityExitingThisFrame(animScene) {
    return IsEntityExitingAnimSceneThisFrame(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x3AB6C7B0BB0DF4B1 | Since: 1207 | API-Set: unknown
 */
export function isEntityPlaying(entity, animScene) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityPlayingAnimScene(_entity, animScene);
}
/**
 * No comment provided
 *
 * Hash: 0xAF068580194D9DC7 | Since: 1207 | API-Set: unknown
 */
export function load(animScene) {
    LoadAnimScene(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x2BF96692C67F3E53 | Since: 1207 | API-Set: unknown
 */
export function removeEntity(animScene, entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return RemoveAnimSceneEntity(animScene, _entity);
}
/**
 * No comment provided
 *
 * Hash: 0xDF7B5144E25CD3FE | Since: 1207 | API-Set: unknown
 */
export function requestPlayList(animScene) {
    return RequestAnimScenePlayList(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x8FDF221F13537936 | Since: 1207 | API-Set: unknown
 */
export function reset(animScene) {
    return ResetAnimScene(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x8E1BA705F63C1925 | Since: 1207 | API-Set: unknown
 */
export function resumeFromLastCheckpoint(animScene) {
    ResumeAnimSceneFromLastCheckpoint(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x519E96C2C68B404B | Since: 1207 | API-Set: unknown
 */
export function setBool(animScene, value) {
    return SetAnimSceneBool(animScene, value, false);
}
/**
 * No comment provided
 *
 * Hash: 0x8B720AD451CA2AB3 | Since: 1207 | API-Set: unknown
 */
export function setEntity(animScene, entity, flags) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return SetAnimSceneEntity(animScene, _entity, flags);
}
/**
 * No comment provided
 *
 * Hash: 0x6BC5104E68CBEFE8 | Since: 1207 | API-Set: unknown
 */
export function setFloat(animScene, value) {
    return SetAnimSceneFloat(animScene, value, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x3A379D2166CF5B92 | Since: 1207 | API-Set: unknown
 */
export function setInt(animScene, value) {
    return SetAnimSceneInt(animScene, value, false);
}
/**
 * No comment provided
 *
 * Hash: 0x020894BF17A02EF2 | Since: 1207 | API-Set: unknown
 */
export function setOrigin(animScene, pos, rot, order) {
    SetAnimSceneOrigin(animScene, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, order);
}
/**
 * No comment provided
 *
 * Hash: 0xD6824B7D24DC0CE0 | Since: 1207 | API-Set: unknown
 */
export function setPaused(animScene, toggle) {
    SetAnimScenePaused(animScene, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xAB5E7CAB074D6B84 | Since: 1207 | API-Set: unknown
 */
export function setPlaybackList(animScene) {
    return SetAnimScenePlaybackList(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x15598CFB25F3DC7E | Since: 1207 | API-Set: unknown
 */
export function setPlayList(animScene) {
    return SetAnimScenePlayList(animScene, false);
}
/**
 * No comment provided
 *
 * Hash: 0x75820B801CFF262A | Since: 1207 | API-Set: unknown
 */
export function setRate(animScene, rate) {
    SetAnimSceneRate(animScene, rate);
}
/**
 * No comment provided
 *
 * Hash: 0xF4D94AF761768700 | Since: 1207 | API-Set: unknown
 */
export function start(animScene) {
    StartAnimScene(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0xF7A4C571E572D237 | Since: 1207 | API-Set: unknown
 */
export function takeOwnershipOf(animScene) {
    TakeOwnershipOfAnimScene(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x4B85B3CF9197AEDF | Since: 1207 | API-Set: unknown
 */
export function triggerSkip(animScene) {
    TriggerAnimSceneSkip(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0xEF324E9550A394D5 | Since: 1207 | API-Set: unknown
 */
export function wasSkipped(animScene) {
    return WasAnimSceneSkipped(animScene);
}
/**
 * Used in SP R* Scripts only
 * Params: p1 = 2B-LowHonor, 2A-HighHonor
 *
 * Hash: 0x1407F5115FB9583E | Since: 1207 | API-Set: unknown
 */
export function _0x1407F5115FB9583E(animScene) {
    return Citizen.invokeNative('0x1407F5115FB9583E', animScene, undefined);
}
/**
 * Used in braithwaites2 SP R* Scripts only
 * _A*
 *
 * Hash: 0x1AD896BF43619551 | Since: 1207 | API-Set: unknown
 */
export function _0x1AD896BF43619551() {
    Citizen.invokeNative('0x1AD896BF43619551');
}
/**
 * Used in SP R* Scripts only
 * _IS_ANIM_SCENE_P*
 *
 * Hash: 0x1C5D33A4293E6DDE | Since: 1207 | API-Set: unknown
 */
export function _0x1C5D33A4293E6DDE(animScene, phaseName) {
    return Citizen.invokeNative('0x1C5D33A4293E6DDE', animScene, phaseName);
}
/**
 * Used in SP R* Scripts only
 * _IS_PED_* - _IS_SC*
 *
 * Hash: 0x2DB524750DC41ED4 | Since: 1207 | API-Set: unknown
 */
export function _0x2DB524750DC41ED4() {
    return Citizen.invokeNative('0x2DB524750DC41ED4');
}
/**
 * p2: MINIGAME_GET_SECONDARY_VOICE_STRING
 * _SET_*
 *
 * Hash: 0x3641FCD53E59B335 | Since: 1207 | API-Set: unknown
 */
export function _0x3641FCD53E59B335(mgmHandle, ped, secondaryVoiceString) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x3641FCD53E59B335', mgmHandle, _ped, secondaryVoiceString);
}
/**
 * Used in SP R* Scripts only
 * _IS_*
 *
 * Hash: 0x3B393716C3FD8237 | Since: 1207 | API-Set: unknown
 */
export function _0x3B393716C3FD8237(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x3B393716C3FD8237', _ped);
}
/**
 * Used in Script Function CUTSCENE_MANAGE_SKIP
 * _CHECK_* (?)
 *
 * Hash: 0x4B85B3CF91972222 | Since: 1207 | API-Set: unknown
 */
export function _0x4B85B3CF91972222(animScene) {
    return Citizen.invokeNative('0x4B85B3CF91972222', animScene);
}
/**
 * Used in SP R* Scripts only
 * _IS_ANIM_SCENE_R* - _IS_ANIM_SCENE_S*
 *
 * Hash: 0x5D7BFDA2290B4E39 | Since: 1207 | API-Set: unknown
 */
export function _0x5D7BFDA2290B4E39() {
    return Citizen.invokeNative('0x5D7BFDA2290B4E39');
}
/**
 * Only used in tg_p R* Script
 * Returns true when mgm event success
 * _PREPARE_* - _REGISTER_*
 *
 * Hash: 0x61B2AAEF645DDAF0 | Since: 1207 | API-Set: unknown
 */
export function _0x61B2AAEF645DDAF0(mgmEventHandle, seatId) {
    return Citizen.invokeNative('0x61B2AAEF645DDAF0', mgmEventHandle, undefined, seatId, 0, false);
}
/**
 * Used in SP R* Scripts only
 * _CO* - _CR*
 *
 * Hash: 0x73616E64696C132E | Since: 1207 | API-Set: unknown
 */
export function _0x73616E64696C132E(animScene) {
    return Citizen.invokeNative('0x73616E64696C132E', animScene, false);
}
/**
 * Used in SP R* Scripts only
 * _IS_ANIM_SCENE_*
 *
 * Hash: 0x9AAE3C1148A09BCA | Since: 1207 | API-Set: unknown
 */
export function _0x9AAE3C1148A09BCA(animScene) {
    return Citizen.invokeNative('0x9AAE3C1148A09BCA', animScene);
}
/**
 * Used in SP R* Scripts only
 * _WAS_ANIM_SCENE_*
 *
 * Hash: 0xA96619FE85159ED2 | Since: 1207 | API-Set: unknown
 */
export function _0xA96619FE85159ED2(animScene) {
    return Citizen.invokeNative('0xA96619FE85159ED2', animScene);
}
/**
 * _UNLOAD_* - _WAS_ANIM_SCENE_*
 *
 * Hash: 0xAE6DE22DE0ED4554 | Since: 1207 | API-Set: unknown
 */
export function _0xAE6DE22DE0ED4554(mgmHandle, ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xAE6DE22DE0ED4554', mgmHandle, _ped);
}
/**
 * _PREPARE_* - _REGISTER_*
 *
 * Hash: 0xB1A196BAFE650402 | Since: 1207 | API-Set: unknown
 */
export function _0xB1A196BAFE650402(mgmHandle, ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xB1A196BAFE650402', mgmHandle, _ped);
}
/**
 * Used in SP R* Scripts only
 * _RESUME_* - _SET_A*
 *
 * Hash: 0xC1193521E3B9FADD | Since: 1207 | API-Set: unknown
 */
export function _0xC1193521E3B9FADD(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xC1193521E3B9FADD', _entity, false);
}
/**
 * Used in SP R* Scripts only
 * _SET_P*
 *
 * Hash: 0xCDCD7B2D49AEE73A | Since: 1207 | API-Set: unknown
 */
export function _0xCDCD7B2D49AEE73A() {
    Citizen.invokeNative('0xCDCD7B2D49AEE73A', false);
}
/**
 * Used in SP R* Scripts only
 * _IS_ANIM_SCENE_*
 *
 * Hash: 0xD70C7A30412F8FA0 | Since: 1207 | API-Set: unknown
 */
export function _0xD70C7A30412F8FA0(animScene) {
    return Citizen.invokeNative('0xD70C7A30412F8FA0', animScene);
}
/**
 * Used in SP R* Scripts only
 * _SET_B* - _SET_C*
 *
 * Hash: 0xE12D7B4B959644CD | Since: 1207 | API-Set: unknown
 */
export function _0xE12D7B4B959644CD() {
    Citizen.invokeNative('0xE12D7B4B959644CD');
}
/**
 * Used in SP R* Scripts only
 * _PAUSE_* - _PLAY_*
 *
 * Hash: 0xEA41D44A8D42057B | Since: 1207 | API-Set: unknown
 */
export function _0xEA41D44A8D42057B() {
    return Citizen.invokeNative('0xEA41D44A8D42057B');
}
/**
 * No comment provided
 *
 * Hash: 0x8A8208AE92BF87A5 | Since: 1207 | API-Set: unknown
 */
export function clearWasSkipped(animScene) {
    ClearAnimSceneWasSkipped(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0xBC781D24AA11F179 | Since: 1207 | API-Set: unknown
 */
export function clearBreakoutArchetype(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearBreakoutArchetype(_ped);
}
/**
 * flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eAnimSceneFlag
 *
 * Hash: 0x1FCA98E33C1437B3 | Since: 1207 | API-Set: unknown
 */
export function create(flags) {
    return CreateAnimScene(flags, false, false);
}
/**
 * Returns mgmHandle
 *
 * Hash: 0xA1300DE03E5D1973 | Since: 1207 | API-Set: unknown
 */
export function createMgmSystem() {
    return CreateMgmSystem();
}
/**
 * No comment provided
 *
 * Hash: 0x84EEDB2C6E650000 | Since: 1207 | API-Set: unknown
 */
export function deleteAnimScene(animScene) {
    DeleteAnimScene(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x53CB3970BA02E3CC | Since: 1207 | API-Set: unknown
 */
export function deleteMgmSystem(mgmHandle) {
    DeleteMgmSystem(mgmHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x9D1ECA9337BE9FC3 | Since: 1207 | API-Set: unknown
 */
export function doesOwnershipOfEntityExist(animScene) {
    return DoesAnimSceneOwnershipOfEntityExist(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0xA9016536015DE29D | Since: 1207 | API-Set: unknown
 */
export function doesPlayListExist(animScene) {
    return DoesAnimScenePlayListExist(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x6F1F0B17109309DA | Since: 1207 | API-Set: unknown
 */
export function doesEntityWithIdExistIn(animScene) {
    return DoesEntityWithIdExistInAnimScene(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0xAE5ADA4FE3E21ADC | Since: 1207 | API-Set: unknown
 */
export function getDict(animScene) {
    return GetAnimSceneDict(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x49F1D143ADE32656 | Since: 1207 | API-Set: unknown
 */
export function getDuration(animScene) {
    return GetAnimSceneDuration(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0xFB5674687A1B2814 | Since: 1207 | API-Set: unknown
 */
export function getObject(animScene, isNetwork) {
    return GetAnimSceneObject(animScene, isNetwork);
}
/**
 * No comment provided
 *
 * Hash: 0xE5822422197BBBA3 | Since: 1207 | API-Set: unknown
 */
export function getPed(animScene, isNetwork) {
    return GetAnimScenePed(animScene, isNetwork);
}
/**
 * No comment provided
 *
 * Hash: 0x9E036D5204FFBBC8 | Since: 1207 | API-Set: unknown
 */
export function getPlaybackListPhaseAudioLoadStress(animScene) {
    return GetAnimScenePlaybackListPhaseAudioLoadStress(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x43C21623E42B821B | Since: 1207 | API-Set: unknown
 */
export function getRate(animScene) {
    return GetAnimSceneRate(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x61BE7D6186260002 | Since: 1207 | API-Set: unknown
 */
export function getTime(animScene) {
    return GetAnimSceneTime(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x430EE0A19BC5A287 | Since: 1207 | API-Set: unknown
 */
export function getVehicle(animScene, isNetwork) {
    return GetAnimSceneVehicle(animScene, isNetwork);
}
/**
 * _HAS_L* (?)
 *
 * Hash: 0x337F1CC8EE895601 | Since: 1207 | API-Set: unknown
 */
export function hasEntityEntered(animScene) {
    return HasEntityEnteredAnimScene(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x34A0671BE613D3D0 | Since: 1207 | API-Set: unknown
 */
export function isAborted(animScene) {
    return IsAnimSceneAborted(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x59606519FF9D3EC2 | Since: 1207 | API-Set: unknown
 */
export function isLoading(animScene) {
    return IsAnimSceneLoading(animScene, false);
}
/**
 * No comment provided
 *
 * Hash: 0xF8D1D2DAB6007EEF | Since: 1207 | API-Set: unknown
 */
export function isMetadataAssetInRangeLoading(animScene) {
    return IsAnimSceneMetadataAssetInRangeLoading(animScene, false);
}
/**
 * No comment provided
 *
 * Hash: 0x4B4038796F0D6566 | Since: 1207 | API-Set: unknown
 */
export function isPaused(animScene) {
    return IsAnimScenePaused(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x1F0E401031E20146 | Since: 1207 | API-Set: unknown
 */
export function isPlaybackListPhaseActive(animScene) {
    return IsAnimScenePlaybackListPhaseActive(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x23E33CB9F4A3F547 | Since: 1207 | API-Set: unknown
 */
export function isPlaybackListPhaseLoaded(animScene) {
    return IsAnimScenePlaybackListPhaseLoaded(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x0DF57F86FE71DBE5 | Since: 1207 | API-Set: unknown
 */
export function isPlaybackListPhaseLoading(animScene) {
    return IsAnimScenePlaybackListPhaseLoading(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x4CDFFE3189EBDBD0 | Since: 1207 | API-Set: unknown
 */
export function isSkippable(animScene) {
    return IsAnimSceneSkippable(animScene);
}
/**
 * MGM stands for MiniGameMoments.
 *
 * Hash: 0xFDFC14799373283F | Since: 1207 | API-Set: unknown
 */
export function isMgmSystemLoaded() {
    return IsMgmSystemLoaded();
}
/**
 * Used to request MiniGameMoments Assets.
 *
 * mgmFilename's:
 * Poker
 * PokerArthur
 * PokerArthurCamp
 * PokerJohn
 * PokerJohnCamp
 *
 * Hash: 0xB727A847862CB00A | Since: 1207 | API-Set: unknown
 */
export function loadMgmAssets() {
    return LoadMgmAssets();
}
/**
 * Pauses all script threads except the one that called it.
 *
 * Hash: 0x37C1257849DEF24A | Since: 1207 | API-Set: unknown
 */
export function pauseScriptThreads(toggle) {
    PauseScriptThreads(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xAE6ADA8FE7E84ACC | Since: 1207 | API-Set: unknown
 */
export function releasePlayList(animScene) {
    return ReleaseAnimScenePlayList(animScene);
}
/**
 * No comment provided
 *
 * Hash: 0x41AFA5F228B0B6B0 | Since: 1207 | API-Set: unknown
 */
export function requestPhotoModeDefreeze() {
    RequestPhotoModeDefreeze();
}
/**
 * No comment provided
 *
 * Hash: 0x7C709C01D43D94CD | Since: 1207 | API-Set: unknown
 */
export function requestPhotoModeFreeze() {
    RequestPhotoModeFreeze();
}
/**
 * No comment provided
 *
 * Hash: 0x99B2A2E3655DEAF1 | Since: 1207 | API-Set: unknown
 */
export function setBreakoutArchetype(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetBreakoutArchetype(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x07706C4CC9C6CC9E | Since: 1207 | API-Set: unknown
 */
export function setMgmEvent(mgmEventHandle, seatId) {
    return SetMgmEvent(mgmEventHandle, seatId, 0, 0);
}
