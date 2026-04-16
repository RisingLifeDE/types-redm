/**
 * No comment provided
 *
 * Hash: 0x57E798B65C45EE17 | Since: 1232
 */
export function getCatagory(missionId) {
    if (typeof missionId === 'string')
        missionId = GetHashKey(missionId);
    return MissiondataGetCatagory(missionId);
}
/**
 * No comment provided
 *
 * Hash: 0x9AABABF8313C3516 | Since: 1207
 */
export function getHighScore(missionId) {
    if (typeof missionId === 'string')
        missionId = GetHashKey(missionId);
    return MissiondataGetHighScore(missionId);
}
/**
 * No comment provided
 *
 * Hash: 0x57E798B54C45EE1A | Since: 1207
 */
export function getRating(missionId) {
    if (typeof missionId === 'string')
        missionId = GetHashKey(missionId);
    return MissiondataGetRating(missionId);
}
/**
 * No comment provided
 *
 * Hash: 0x8C32D86E9556ED86 | Since: 1207
 */
export function getReplayState() {
    return MissiondataGetReplayState(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x57E798B56C45EE15 | Since: 1207
 */
export function getTextureName(missionId) {
    if (typeof missionId === 'string')
        missionId = GetHashKey(missionId);
    return MissiondataGetTextureName(missionId);
}
/**
 * No comment provided
 *
 * Hash: 0x57E798B57C45EE16 | Since: 1207
 */
export function getTextureTxd(missionId) {
    if (typeof missionId === 'string')
        missionId = GetHashKey(missionId);
    return MissiondataGetTextureTxd(missionId);
}
/**
 * No comment provided
 *
 * Hash: 0xE824CE7D13FCB35E | Since: 1207
 */
export function isRequiredStoryMission(missionId) {
    if (typeof missionId === 'string')
        missionId = GetHashKey(missionId);
    return MissiondataIsRequiredStoryMission(missionId);
}
/**
 * No comment provided
 *
 * Hash: 0xE54DC27571D5EDC5 | Since: 1207
 */
export function isValid() {
    return MissiondataIsValid(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3A04F0169DA87A9D | Since: 1207
 */
export function setHighScore(missionId, score) {
    if (typeof missionId === 'string')
        missionId = GetHashKey(missionId);
    MissiondataSetHighScore(missionId, score);
}
/**
 * No comment provided
 *
 * Hash: 0x12F65317708749A5 | Since: 1207
 */
export function setRatingScores(missionId, bronzeScore, silverScore, goldScore) {
    if (typeof missionId === 'string')
        missionId = GetHashKey(missionId);
    MissiondataSetRatingScores(missionId, bronzeScore, silverScore, goldScore);
}
/**
 * No comment provided
 *
 * Hash: 0x957A830C9B4B99EA | Since: 1232
 */
export function setReplayLockedForCategory(category, locked) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    MissiondataSetReplayLockedForCategory(category, locked);
}
/**
 * see: missions.meta
 *
 * Hash: 0xE54DC27571D5EDC4 | Since: 1207
 */
export function wasCompleted(missionId) {
    if (typeof missionId === 'string')
        missionId = GetHashKey(missionId);
    return MissiondataWasCompleted(missionId);
}
/**
 * No comment provided
 *
 * Hash: 0xE145864DECC34219 | Since: 1232
 */
export function isReplayCategoryLocked(category) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    return MissiondataIsReplayCategoryLocked(category);
}
/**
 * MISSION_RATING_INCOMPLETE = 0,
 * MISSION_RATING_SKIPPED,
 * MISSION_RATING_COMPLETE,
 * MISSION_RATING_BRONZE,
 * MISSION_RATING_SILVER,
 * MISSION_RATING_GOLD,
 *
 * Hash: 0xE824CE7D13FCB300 | Since: 1207
 */
export function setMissionRating(missionId, rating) {
    if (typeof missionId === 'string')
        missionId = GetHashKey(missionId);
    MissiondataSetMissionRating(missionId, rating);
}
/**
 * replayState: MISSIONDATA_GET_REPLAY_STATE
 *
 * Hash: 0xE4E2C581F127A11C | Since: 1207
 */
export function setReplayStateLocked(missionId, replayState) {
    if (typeof missionId === 'string')
        missionId = GetHashKey(missionId);
    MissiondataSetReplayStateLocked(missionId, replayState);
}
/**
 * No comment provided
 *
 * Hash: 0x7F89E15A8FB8DE97 | Since: 1207
 */
export function timecycleBoxDelete() {
    MissiondataTimecycleBoxDelete();
}
/**
 * No comment provided
 *
 * Hash: 0x7E8F86A4FA33033C | Since: 1207
 */
export function timecycleBoxExists() {
    return MissiondataTimecycleBoxExists();
}
/**
 * No comment provided
 *
 * Hash: 0x25855B1574BF8CD5 | Since: 1207
 */
export function timecycleBoxSetModifier(timecycleName) {
    MissiondataTimecycleBoxSetModifier(timecycleName);
}
