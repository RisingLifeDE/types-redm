import { Vector3, IEntity, IPed } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x718CF1328D20C2B3 | Since: 1207
 */
export declare function abort(animScene: any): void;
/**
 * No comment provided
 *
 * Hash: 0xDC418495DBA327A1 | Since: 1207
 */
export declare function attachToEntity(animScene: any, entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x1C0B105C3F30B88D | Since: 1207
 */
export declare function attachToEntityPreservingLocation(animScene: any, entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x1B70811D3BF75DB9 | Since: 1207
 */
export declare function blockFadingNextFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0x661B8683611B9B97 | Since: 1207
 */
export declare function checkOwnershipOf(animScene: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x73616E64696C616E | Since: 1207
 */
export declare function couldEntityReachExitNextFrame(animScene: any): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x6843A1AA3A336DFF | Since: 1207
 */
export declare function detach(animScene: any): void;
/**
 * No comment provided
 *
 * Hash: 0xA2507C4948C83D2E | Since: 1207
 */
export declare function detachPreservingLocation(animScene: any): void;
/**
 * No comment provided
 *
 * Hash: 0x25557E324489393C | Since: 1207
 */
export declare function doesExist(animScene: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA41351EA2A18A0AD | Since: 1207
 */
export declare function fadeAudioIn(animScene: any): void;
/**
 * No comment provided
 *
 * Hash: 0x323E3AD772BA5D57 | Since: 1207
 */
export declare function fadeAudioOut(animScene: any): void;
/**
 * No comment provided
 *
 * Hash: 0x07A6F6447ECA9B64 | Since: 1207
 */
export declare function getBool(animScene: any): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x4822A65D5AF64E69 | Since: 1207
 */
export declare function getCurrentActiveCameraCount(animScene: any): number;
/**
 * No comment provided
 *
 * Hash: 0x8398438D8F14F56D | Since: 1207
 */
export declare function getEntityLocationData(animScene: any): [boolean, string, Vector3, string];
/**
 * No comment provided
 *
 * Hash: 0xCC24CB07F60B496E | Since: 1207
 */
export declare function getFloat(animScene: any): [number, string];
/**
 * No comment provided
 *
 * Hash: 0x2B7277484CC095FD | Since: 1207
 */
export declare function getInt(animScene: any): [number, string];
/**
 * No comment provided
 *
 * Hash: 0xADF1D53F3B1FE0A7 | Since: 1207
 */
export declare function getOrigin(animScene: any, order: number): [Vector3, Vector3];
/**
 * No comment provided
 *
 * Hash: 0x3FBC3F51BF12DFBF | Since: 1207
 */
export declare function getPhase(animScene: any): number;
/**
 * No comment provided
 *
 * Hash: 0xF94692EB9DC15D74 | Since: 1207
 */
export declare function hasExited(animScene: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB89FCFF19DAFFF28 | Since: 1207
 */
export declare function hasEntityExited(animScene: any): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xCDC5512A407CF08D | Since: 1207
 */
export declare function isExitingThisFrame(animScene: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD8254CB2C586412B | Since: 1207
 */
export declare function isFinished(animScene: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8D81E7824B7753F7 | Since: 1207
 */
export declare function isInSection(animScene: any): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x477122B8D05E7968 | Since: 1207
 */
export declare function isLoaded(animScene: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x95531A4A20CCE7BC | Since: 1207
 */
export declare function isMetadataLoaded(animScene: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCBFC7725DE6CE2E0 | Since: 1207
 */
export declare function isRunning(animScene: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x005E6F28DD7ED58D | Since: 1207
 */
export declare function isEntityExitingThisFrame(animScene: any): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x3AB6C7B0BB0DF4B1 | Since: 1207
 */
export declare function isEntityPlaying(entity: number | IEntity, animScene: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAF068580194D9DC7 | Since: 1207
 */
export declare function load(animScene: any): void;
/**
 * No comment provided
 *
 * Hash: 0x2BF96692C67F3E53 | Since: 1207
 */
export declare function removeEntity(animScene: any, entity: number | IEntity): string;
/**
 * No comment provided
 *
 * Hash: 0xDF7B5144E25CD3FE | Since: 1207
 */
export declare function requestPlayList(animScene: any): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x8FDF221F13537936 | Since: 1207
 */
export declare function reset(animScene: any): string;
/**
 * No comment provided
 *
 * Hash: 0x8E1BA705F63C1925 | Since: 1207
 */
export declare function resumeFromLastCheckpoint(animScene: any): void;
/**
 * No comment provided
 *
 * Hash: 0x519E96C2C68B404B | Since: 1207
 */
export declare function setBool(animScene: any, value: boolean): string;
/**
 * No comment provided
 *
 * Hash: 0x8B720AD451CA2AB3 | Since: 1207
 */
export declare function setEntity(animScene: any, entity: number | IEntity, flags: number): string;
/**
 * No comment provided
 *
 * Hash: 0x6BC5104E68CBEFE8 | Since: 1207
 */
export declare function setFloat(animScene: any, value: number): string;
/**
 * No comment provided
 *
 * Hash: 0x3A379D2166CF5B92 | Since: 1207
 */
export declare function setInt(animScene: any, value: number): string;
/**
 * No comment provided
 *
 * Hash: 0x020894BF17A02EF2 | Since: 1207
 */
export declare function setOrigin(animScene: any, pos: Vector3, rot: Vector3, order: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD6824B7D24DC0CE0 | Since: 1207
 */
export declare function setPaused(animScene: any, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xAB5E7CAB074D6B84 | Since: 1207
 */
export declare function setPlaybackList(animScene: any): string;
/**
 * No comment provided
 *
 * Hash: 0x15598CFB25F3DC7E | Since: 1207
 */
export declare function setPlayList(animScene: any): string;
/**
 * No comment provided
 *
 * Hash: 0x75820B801CFF262A | Since: 1207
 */
export declare function setRate(animScene: any, rate: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF4D94AF761768700 | Since: 1207
 */
export declare function start(animScene: any): void;
/**
 * No comment provided
 *
 * Hash: 0xF7A4C571E572D237 | Since: 1207
 */
export declare function takeOwnershipOf(animScene: any): void;
/**
 * No comment provided
 *
 * Hash: 0x4B85B3CF9197AEDF | Since: 1207
 */
export declare function triggerSkip(animScene: any): void;
/**
 * No comment provided
 *
 * Hash: 0xEF324E9550A394D5 | Since: 1207
 */
export declare function wasSkipped(animScene: any): boolean;
/**
 * Used in SP R* Scripts only
 * Params: p1 = 2B-LowHonor, 2A-HighHonor
 *
 * Hash: 0x1407F5115FB9583E | Since: 1207
 */
export declare function _0x1407F5115FB9583E(animScene: any): boolean;
/**
 * Used in braithwaites2 SP R* Scripts only
 * _A*
 *
 * Hash: 0x1AD896BF43619551 | Since: 1207
 */
export declare function _0x1AD896BF43619551(): void;
/**
 * Used in SP R* Scripts only
 * _IS_ANIM_SCENE_P*
 *
 * Hash: 0x1C5D33A4293E6DDE | Since: 1207
 */
export declare function _0x1C5D33A4293E6DDE(animScene: any, phaseName: string): boolean;
/**
 * Used in SP R* Scripts only
 * _IS_PED_* - _IS_SC*
 *
 * Hash: 0x2DB524750DC41ED4 | Since: 1207
 */
export declare function _0x2DB524750DC41ED4(): boolean;
/**
 * p2: MINIGAME_GET_SECONDARY_VOICE_STRING
 * _SET_*
 *
 * Hash: 0x3641FCD53E59B335 | Since: 1207
 */
export declare function _0x3641FCD53E59B335(mgmHandle: number, ped: number | IPed, secondaryVoiceString: string): void;
/**
 * Used in SP R* Scripts only
 * _IS_*
 *
 * Hash: 0x3B393716C3FD8237 | Since: 1207
 */
export declare function _0x3B393716C3FD8237(ped: number | IPed): boolean;
/**
 * Used in Script Function CUTSCENE_MANAGE_SKIP
 * _CHECK_* (?)
 *
 * Hash: 0x4B85B3CF91972222 | Since: 1207
 */
export declare function _0x4B85B3CF91972222(animScene: any): boolean;
/**
 * Used in SP R* Scripts only
 * _IS_ANIM_SCENE_R* - _IS_ANIM_SCENE_S*
 *
 * Hash: 0x5D7BFDA2290B4E39 | Since: 1207
 */
export declare function _0x5D7BFDA2290B4E39(): [boolean, string];
/**
 * Only used in tg_p R* Script
 * Returns true when mgm event success
 * _PREPARE_* - _REGISTER_*
 *
 * Hash: 0x61B2AAEF645DDAF0 | Since: 1207
 */
export declare function _0x61B2AAEF645DDAF0(mgmEventHandle: number, seatId: number): boolean;
/**
 * Used in SP R* Scripts only
 * _CO* - _CR*
 *
 * Hash: 0x73616E64696C132E | Since: 1207
 */
export declare function _0x73616E64696C132E(animScene: any): boolean;
/**
 * Used in SP R* Scripts only
 * _IS_ANIM_SCENE_*
 *
 * Hash: 0x9AAE3C1148A09BCA | Since: 1207
 */
export declare function _0x9AAE3C1148A09BCA(animScene: any): boolean;
/**
 * Used in SP R* Scripts only
 * _WAS_ANIM_SCENE_*
 *
 * Hash: 0xA96619FE85159ED2 | Since: 1207
 */
export declare function _0xA96619FE85159ED2(animScene: any): boolean;
/**
 * _UNLOAD_* - _WAS_ANIM_SCENE_*
 *
 * Hash: 0xAE6DE22DE0ED4554 | Since: 1207
 */
export declare function _0xAE6DE22DE0ED4554(mgmHandle: number, ped: number | IPed): void;
/**
 * _PREPARE_* - _REGISTER_*
 *
 * Hash: 0xB1A196BAFE650402 | Since: 1207
 */
export declare function _0xB1A196BAFE650402(mgmHandle: number, ped: number | IPed): void;
/**
 * Used in SP R* Scripts only
 * _RESUME_* - _SET_A*
 *
 * Hash: 0xC1193521E3B9FADD | Since: 1207
 */
export declare function _0xC1193521E3B9FADD(entity: number | IEntity): void;
/**
 * Used in SP R* Scripts only
 * _SET_P*
 *
 * Hash: 0xCDCD7B2D49AEE73A | Since: 1207
 */
export declare function _0xCDCD7B2D49AEE73A(): void;
/**
 * Used in SP R* Scripts only
 * _IS_ANIM_SCENE_*
 *
 * Hash: 0xD70C7A30412F8FA0 | Since: 1207
 */
export declare function _0xD70C7A30412F8FA0(animScene: any): boolean;
/**
 * Used in SP R* Scripts only
 * _SET_B* - _SET_C*
 *
 * Hash: 0xE12D7B4B959644CD | Since: 1207
 */
export declare function _0xE12D7B4B959644CD(): void;
/**
 * Used in SP R* Scripts only
 * _PAUSE_* - _PLAY_*
 *
 * Hash: 0xEA41D44A8D42057B | Since: 1207
 */
export declare function _0xEA41D44A8D42057B(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8A8208AE92BF87A5 | Since: 1207
 */
export declare function clearWasSkipped(animScene: any): void;
/**
 * No comment provided
 *
 * Hash: 0xBC781D24AA11F179 | Since: 1207
 */
export declare function clearBreakoutArchetype(ped: number | IPed): void;
/**
 * flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eAnimSceneFlag
 *
 * Hash: 0x1FCA98E33C1437B3 | Since: 1207
 */
export declare function create(flags: number): [any, string, string];
/**
 * Returns mgmHandle
 *
 * Hash: 0xA1300DE03E5D1973 | Since: 1207
 */
export declare function createMgmSystem(): [number, string];
/**
 * No comment provided
 *
 * Hash: 0x84EEDB2C6E650000 | Since: 1207
 */
export declare function deleteAnimScene(animScene: any): void;
/**
 * No comment provided
 *
 * Hash: 0x53CB3970BA02E3CC | Since: 1207
 */
export declare function deleteMgmSystem(mgmHandle: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9D1ECA9337BE9FC3 | Since: 1207
 */
export declare function doesOwnershipOfEntityExist(animScene: any): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xA9016536015DE29D | Since: 1207
 */
export declare function doesPlayListExist(animScene: any): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x6F1F0B17109309DA | Since: 1207
 */
export declare function doesEntityWithIdExistIn(animScene: any): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xAE5ADA4FE3E21ADC | Since: 1207
 */
export declare function getDict(animScene: any): number;
/**
 * No comment provided
 *
 * Hash: 0x49F1D143ADE32656 | Since: 1207
 */
export declare function getDuration(animScene: any): number;
/**
 * No comment provided
 *
 * Hash: 0xFB5674687A1B2814 | Since: 1207
 */
export declare function getObject(animScene: any, isNetwork: boolean): [number, string];
/**
 * No comment provided
 *
 * Hash: 0xE5822422197BBBA3 | Since: 1207
 */
export declare function getPed(animScene: any, isNetwork: boolean): [number, string];
/**
 * No comment provided
 *
 * Hash: 0x9E036D5204FFBBC8 | Since: 1207
 */
export declare function getPlaybackListPhaseAudioLoadStress(animScene: any): [number, string];
/**
 * No comment provided
 *
 * Hash: 0x43C21623E42B821B | Since: 1207
 */
export declare function getRate(animScene: any): number;
/**
 * No comment provided
 *
 * Hash: 0x61BE7D6186260002 | Since: 1207
 */
export declare function getTime(animScene: any): number;
/**
 * No comment provided
 *
 * Hash: 0x430EE0A19BC5A287 | Since: 1207
 */
export declare function getVehicle(animScene: any, isNetwork: boolean): [number, string];
/**
 * _HAS_L* (?)
 *
 * Hash: 0x337F1CC8EE895601 | Since: 1207
 */
export declare function hasEntityEntered(animScene: any): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x34A0671BE613D3D0 | Since: 1207
 */
export declare function isAborted(animScene: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x59606519FF9D3EC2 | Since: 1207
 */
export declare function isLoading(animScene: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF8D1D2DAB6007EEF | Since: 1207
 */
export declare function isMetadataAssetInRangeLoading(animScene: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4B4038796F0D6566 | Since: 1207
 */
export declare function isPaused(animScene: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1F0E401031E20146 | Since: 1207
 */
export declare function isPlaybackListPhaseActive(animScene: any): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x23E33CB9F4A3F547 | Since: 1207
 */
export declare function isPlaybackListPhaseLoaded(animScene: any): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x0DF57F86FE71DBE5 | Since: 1207
 */
export declare function isPlaybackListPhaseLoading(animScene: any): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x4CDFFE3189EBDBD0 | Since: 1207
 */
export declare function isSkippable(animScene: any): boolean;
/**
 * MGM stands for MiniGameMoments.
 *
 * Hash: 0xFDFC14799373283F | Since: 1207
 */
export declare function isMgmSystemLoaded(): [boolean, string];
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
 * Hash: 0xB727A847862CB00A | Since: 1207
 */
export declare function loadMgmAssets(): [boolean, string];
/**
 * Pauses all script threads except the one that called it.
 *
 * Hash: 0x37C1257849DEF24A | Since: 1207
 */
export declare function pauseScriptThreads(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xAE6ADA8FE7E84ACC | Since: 1207
 */
export declare function releasePlayList(animScene: any): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x41AFA5F228B0B6B0 | Since: 1207
 */
export declare function requestPhotoModeDefreeze(): void;
/**
 * No comment provided
 *
 * Hash: 0x7C709C01D43D94CD | Since: 1207
 */
export declare function requestPhotoModeFreeze(): void;
/**
 * No comment provided
 *
 * Hash: 0x99B2A2E3655DEAF1 | Since: 1207
 */
export declare function setBreakoutArchetype(ped: number | IPed): string;
/**
 * No comment provided
 *
 * Hash: 0x07706C4CC9C6CC9E | Since: 1207
 */
export declare function setMgmEvent(mgmEventHandle: number, seatId: any): string;
