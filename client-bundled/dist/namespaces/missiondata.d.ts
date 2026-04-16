/**
 * No comment provided
 *
 * Hash: 0x57E798B65C45EE17 | Since: 1232 | API-Set: unknown
 */
export declare function getCatagory(missionId: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x9AABABF8313C3516 | Since: 1207 | API-Set: unknown
 */
export declare function getHighScore(missionId: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x57E798B54C45EE1A | Since: 1207 | API-Set: unknown
 */
export declare function getRating(missionId: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x8C32D86E9556ED86 | Since: 1207 | API-Set: unknown
 */
export declare function getReplayState(): number;
/**
 * No comment provided
 *
 * Hash: 0x57E798B56C45EE15 | Since: 1207 | API-Set: unknown
 */
export declare function getTextureName(missionId: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x57E798B57C45EE16 | Since: 1207 | API-Set: unknown
 */
export declare function getTextureTxd(missionId: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xE824CE7D13FCB35E | Since: 1207 | API-Set: unknown
 */
export declare function isRequiredStoryMission(missionId: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE54DC27571D5EDC5 | Since: 1207 | API-Set: unknown
 */
export declare function isValid(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3A04F0169DA87A9D | Since: 1207 | API-Set: unknown
 */
export declare function setHighScore(missionId: number | string, score: number): void;
/**
 * No comment provided
 *
 * Hash: 0x12F65317708749A5 | Since: 1207 | API-Set: unknown
 */
export declare function setRatingScores(missionId: number | string, bronzeScore: number, silverScore: number, goldScore: number): void;
/**
 * No comment provided
 *
 * Hash: 0x957A830C9B4B99EA | Since: 1232 | API-Set: unknown
 */
export declare function setReplayLockedForCategory(category: number | string, locked: boolean): void;
/**
 * see: missions.meta
 *
 * Hash: 0xE54DC27571D5EDC4 | Since: 1207 | API-Set: unknown
 */
export declare function wasCompleted(missionId: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE145864DECC34219 | Since: 1232 | API-Set: unknown
 */
export declare function isReplayCategoryLocked(category: number | string): boolean;
/**
 * MISSION_RATING_INCOMPLETE = 0,
 * MISSION_RATING_SKIPPED,
 * MISSION_RATING_COMPLETE,
 * MISSION_RATING_BRONZE,
 * MISSION_RATING_SILVER,
 * MISSION_RATING_GOLD,
 *
 * Hash: 0xE824CE7D13FCB300 | Since: 1207 | API-Set: unknown
 */
export declare function setMissionRating(missionId: number | string, rating: number): void;
/**
 * replayState: MISSIONDATA_GET_REPLAY_STATE
 *
 * Hash: 0xE4E2C581F127A11C | Since: 1207 | API-Set: unknown
 */
export declare function setReplayStateLocked(missionId: number | string, replayState: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7F89E15A8FB8DE97 | Since: 1207 | API-Set: unknown
 */
export declare function timecycleBoxDelete(): void;
/**
 * No comment provided
 *
 * Hash: 0x7E8F86A4FA33033C | Since: 1207 | API-Set: unknown
 */
export declare function timecycleBoxExists(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x25855B1574BF8CD5 | Since: 1207 | API-Set: unknown
 */
export declare function timecycleBoxSetModifier(timecycleName: string): void;
