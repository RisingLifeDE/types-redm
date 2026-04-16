import { Vector3, IEntity, IPed, IPlayer } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x134549B388167CBF | Since: 1207
 */
export function absf(value) {
    return Absf(value);
}
/**
 * No comment provided
 *
 * Hash: 0x0C214D5B8A38C828 | Since: 1207
 */
export function absi(value) {
    return Absi(value);
}
/**
 * No comment provided
 *
 * Hash: 0x586690F0176DC575 | Since: 1207
 */
export function acos() {
    return Acos(0);
}
/**
 * Appears to remove stealth kill action from memory (?)
 *
 * Hash: 0x7ACF124C12A2B045 | Since: 1207
 */
export function actionManagerEnableAction(hash, enable) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    ActionManagerEnableAction(hash, enable);
}
/**
 * No comment provided
 *
 * Hash: 0xFD0759658268FD8E | Since: 1207
 */
export function actionManagerIsActionEnabled(hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    return ActionManagerIsActionEnabled(hash);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x91D657230BC208D2 | Since: 1207
 */
export function activityFeedActionStartWithCommandLine() {
    ActivityFeedActionStartWithCommandLine(undefined, undefined);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x1694A053DFB61A34 | Since: 1207
 */
export function activityFeedActionStartWithCommandLineAdd() {
    ActivityFeedActionStartWithCommandLineAdd(undefined);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x9935F76407C32539 | Since: 1207
 */
export function activityFeedAddSubstringToCaption() {
    ActivityFeedAddSubstringToCaption(undefined);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xCC7FC854B956A128 | Since: 1207
 */
export function activityFeedCreate() {
    return ActivityFeedCreate();
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xB16FC7B364D86585 | Since: 1207
 */
export function activityFeedPost() {
    ActivityFeedPost();
}
/**
 * No comment provided
 *
 * Hash: 0x5EBDA1A3B8CB5EF7 | Since: 1207
 */
export function addPopMultiplierArea(x1, y1, z1, x2, y2, z2, pedDensity, trafficDensity) {
    return AddPopMultiplierArea(x1, y1, z1, x2, y2, z2, pedDensity, trafficDensity, false, false);
}
/**
 * Params: p3 is 0 in R* Script utopia2
 *
 * Hash: 0xE4EE55E63FA9AF45 | Since: 1207
 */
export function addTacticalNavMeshPoint(pos) {
    AddTacticalNavMeshPoint(pos.x, pos.y, pos.z, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xD3852F22AB713A1F | Since: 1207
 */
export function areStringsEqual() {
    return AreStringsEqual();
}
/**
 * No comment provided
 *
 * Hash: 0x6E3C15D296C15583 | Since: 1207
 */
export function asin() {
    return Asin(0);
}
/**
 * No comment provided
 *
 * Hash: 0x503054DED0B78027 | Since: 1207
 */
export function atan() {
    return Atan(0);
}
/**
 * No comment provided
 *
 * Hash: 0x965B220A066E3F07 | Since: 1207
 */
export function atan2() {
    return Atan2(0, 0);
}
/**
 * dispatchService: see ENABLE_DISPATCH_SERVICE
 *
 * Hash: 0x66947E61A44DE2C6 | Since: 1207
 */
export function blockDispatchServiceResourceCreation(dispatchService, toggle) {
    BlockDispatchServiceResourceCreation(dispatchService, toggle);
}
/**
 * Old name: _CANCEL_ONSCREEN_KEYBOARD
 *
 * Hash: 0x58A39BE597CE99CD | Since: 1207
 */
export function cancelOnscreenKeyboard() {
    CancelOnscreenKeyboard();
}
/**
 * No comment provided
 *
 * Hash: 0xA4D83115C1E02F8A | Since: 1207
 */
export function clearAngledAreaOfVehicles() {
    ClearAngledAreaOfVehicles(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * Possible flag names:
 * ALL_BASE = 0,
 * PROJECTILES = 1,
 * BROADCAST = 524288,
 * AMBIENT_POPULATION = 1048576
 *
 * Hash: 0x3B882A96EA77D5B1 | Since: 1207
 */
export function clearArea(pos, radius, flag) {
    ClearArea(pos.x, pos.y, pos.z, radius, flag);
}
/**
 * No comment provided
 *
 * Hash: 0x7D1D4A3602B6AD4E | Since: 1207
 */
export function clearBit(offset) {
    return ClearBit(offset);
}
/**
 * No comment provided
 *
 * Hash: 0x80A398F16FFE3CC3 | Since: 1207
 */
export function clearOverrideWeather() {
    ClearOverrideWeather();
}
/**
 * No comment provided
 *
 * Hash: 0xD93B6516C6878267 | Since: 1207
 */
export function clearTacticalNavMeshPoints() {
    ClearTacticalNavMeshPoints();
}
/**
 * No comment provided
 *
 * Hash: 0xD85DFE5C131E4AE9 | Since: 1207
 */
export function clearWeatherTypePersist() {
    ClearWeatherTypePersist();
}
/**
 * No comment provided
 *
 * Hash: 0xBFBB74A15EFC149B | Since: 1207
 */
export function compareStrings(matchCase, maxLength) {
    return CompareStrings(matchCase, maxLength);
}
/**
 * Old name: _COPY_MEMORY
 *
 * Hash: 0xF7AC7DC0DEE7C9BE | Since: 1207
 */
export function copyScriptStruct(size) {
    return CopyScriptStruct(size);
}
/**
 * dispatchService: see ENABLE_DISPATCH_SERVICE
 *
 * Hash: 0x3F892CAF67444AE7 | Since: 1207
 */
export function createIncident(dispatchService, pos, numUnits, radius) {
    return CreateIncident(dispatchService, pos.x, pos.y, pos.z, numUnits, radius, undefined, undefined);
}
/**
 * Delete an incident with a given id.
 *
 * Hash: 0x5CFD0F0D6AAE0AEE | Since: 1207
 */
export function deleteIncident(incidentId) {
    DeleteIncident(incidentId);
}
/**
 * disables prompt eat
 *
 * Hash: 0x40D72189F46D2E15 | Since: 1207
 */
export function disableLootingCompositeLootableThisFrame(compositeId, disable) {
    DisableLootingCompositeLootableThisFrame(compositeId, disable);
}
/**
 * enum eOnscreenKeyboardTextType
 * {
 * KTEXTTYPE_INVALID = -1,
 * KTEXTTYPE_DEFAULT,
 * KTEXTTYPE_EMAIL,
 * KTEXTTYPE_PASSWORD,
 * KTEXTTYPE_NUMERIC,
 * KTEXTTYPE_ALPHABET,
 * KTEXTTYPE_GAMERTAG,
 * KTEXTTYPE_FILENAME,
 * KTEXTTYPE_COUNT
 * };
 *
 * Hash: 0x044131118D8DB3CD | Since: 1207
 */
export function displayOnscreenKeyboard(textType, maxInputLength) {
    return DisplayOnscreenKeyboard(textType, maxInputLength);
}
/**
 * No comment provided
 *
 * Hash: 0x03BA619C81A646B3 | Since: 1207
 */
export function doesPopMultiplierAreaExist(id) {
    return DoesPopMultiplierAreaExist(id);
}
/**
 * enum DispatchType
 * {
 * DT_Invalid,
 * DT_PoliceAutomobile,
 * DT_PoliceHelicopter,
 * DT_FireDepartment,
 * DT_SwatAutomobile,
 * DT_AmbulanceDepartment,
 * DT_PoliceRiders,
 * DT_PoliceVehicleRequest,
 * DT_PoliceRoadBlock,
 * DT_PoliceAutomobileWaitPulledOver,
 * DT_PoliceAutomobileWaitCruising,
 * DT_Gangs,
 * DT_SwatHelicopter,
 * DT_PoliceBoat,
 * DT_ArmyVehicle,
 * DT_OnFoot,
 * DT_PoliceDogs
 * };
 *
 * Hash: 0x50E52637EF70EF77 | Since: 1207
 */
export function enableDispatchService(dispatchService, toggle) {
    EnableDispatchService(dispatchService, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xCBC9A21F6A2A679C | Since: 1207
 */
export function fireSingleBullet() {
    return FireSingleBullet();
}
/**
 * creates single lightning+thunder at random position
 *
 * Hash: 0x369DB5B2510FA080 | Since: 1207
 */
export function forceLightningFlash() {
    ForceLightningFlash();
}
/**
 * No comment provided
 *
 * Hash: 0x4CABE596D632E4B0 | Since: 1207
 */
export function gameFrameworkManagerInit(transitionMode) {
    if (typeof transitionMode === 'string')
        transitionMode = GetHashKey(transitionMode);
    return GameFrameworkManagerInit(transitionMode);
}
/**
 * No comment provided
 *
 * Hash: 0xD0DFE1C486097BBB | Since: 1207
 */
export function getAngleBetween2dVectors(x1, y1, x2, y2) {
    return GetAngleBetween2dVectors(x1, y1, x2, y2);
}
/**
 * Returns value of the '-benchmarkIterations' command line option.
 *
 * Old name: _GET_BENCHMARK_ITERATIONS_FROM_COMMAND_LINE
 *
 * Hash: 0x22FC52CF470CC98D | Since: 1207
 */
export function getBenchmarkIterations() {
    return GetBenchmarkIterations();
}
/**
 * Returns value of the '-benchmarkPass' command line option.
 *
 * Old name: _GET_BENCHMARK_PASS_FROM_COMMAND_LINE
 *
 * Hash: 0x9297DACF3A2CDFF7 | Since: 1207
 */
export function getBenchmarkPass() {
    return GetBenchmarkPass();
}
/**
 * No comment provided
 *
 * Hash: 0x68E1352AF48F905D | Since: 1207
 */
export function getBitsInRange(_var, rangeStart, rangeEnd) {
    return GetBitsInRange(_var, rangeStart, rangeEnd);
}
/**
 * No comment provided
 *
 * Hash: 0x83ACC65D9ACEC5EF | Since: 1207
 */
export function getClosestPointOnLine() {
    return new Vector3(GetClosestPointOnLine(0, 0, 0, 0, 0, 0, 0, 0, 0, false));
}
/**
 * No comment provided
 *
 * Hash: 0xD73C960A681052DF | Since: 1207
 */
export function getCoordsOfProjectileTypeWithinDistance(ped, weaponHash, distance, mustBeOwnedByThisPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetCoordsOfProjectileTypeWithinDistance(_ped, weaponHash, distance, false, mustBeOwnedByThisPed);
}
/**
 * Params: percentWeather2: 0f - 0.75f in R* Scripts
 *
 * Old name: _GET_WEATHER_TYPE_TRANSITION
 *
 * Hash: 0x0AC679B2342F14F2 | Since: 1207
 */
export function getCurrWeatherState() {
    return GetCurrWeatherState();
}
/**
 * If useZ is false, only the 2D plane (X-Y) will be considered for calculating the distance.
 *
 * `Consider using this faster native instead: BUILTIN::VDIST - DVIST always takes in consideration the 3D coordinates.`
 *
 * Hash: 0x0BE7F4E3CDBAFB28 | Since: 1207
 */
export function getDistanceBetweenCoords(x1, y1, z1, x2, y2, z2, useZ) {
    return GetDistanceBetweenCoords(x1, y1, z1, x2, y2, z2, useZ);
}
/**
 * No comment provided
 *
 * Hash: 0x77DFA958FCF100C1 | Since: 1207
 */
export function getFrameCount() {
    return GetFrameCount();
}
/**
 * No comment provided
 *
 * Hash: 0x5E72022914CE3C38 | Since: 1207
 */
export function getFrameTime() {
    return GetFrameTime();
}
/**
 * No comment provided
 *
 * Hash: 0x4F67E8ECA7D3F667 | Since: 1207
 */
export function getGameTimer() {
    return GetGameTimer();
}
/**
 * No comment provided
 *
 * Hash: 0x2A29CA9A6319E6AB | Since: 1207
 */
export function getGroundZAndNormalFor3dCoord(pos) {
    return GetGroundZAndNormalFor3dCoord(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x24FA4267BB8D2431 | Since: 1207
 */
export function getGroundZFor3dCoord(pos) {
    return GetGroundZFor3dCoord(pos.x, pos.y, pos.z, false);
}
/**
 * Computes a hash for the given string. It is hashed using Jenkins' One-at-a-Time hash algorithm (https://en.wikipedia.org/wiki/Jenkins_hash_function)
 * Note: this implementation is case-insensitive.
 *
 * Hash: 0xFD340785ADF8CFB7 | Since: 1207
 */
export function getHashKey() {
    return GetHashKey();
}
/**
 * dx = x1 - x2
 * dy = y1 - y2
 *
 * Hash: 0x38D5202FF9271C62 | Since: 1207
 */
export function getHeadingFromVector2d(dx, dy) {
    return GetHeadingFromVector2d(dx, dy);
}
/**
 * No comment provided
 *
 * Hash: 0xAB6A04CEC428258B | Since: 1207
 */
export function getLinePlaneIntersection() {
    return GetLinePlaneIntersection(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xB15CD1CF58771DE1 | Since: 1207
 */
export function getMissionFlag() {
    return GetMissionFlag();
}
/**
 * No comment provided
 *
 * Hash: 0xDCB8DDD5D054A7E7 | Since: 1207
 */
export function getModelDimensions(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetModelDimensions(modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x40DC2907A9697EF7 | Since: 1207
 */
export function getNumberOfFreeStacksOfThisSize(stackSize) {
    return GetNumberOfFreeStacksOfThisSize(stackSize);
}
/**
 * No comment provided
 *
 * Hash: 0xB0CE5E5ED8BB3581 | Since: 1207
 */
export function getNumberOfMicrosecondsSinceLastCall() {
    return GetNumberOfMicrosecondsSinceLastCall();
}
/**
 * Returns NULL unless UPDATE_ONSCREEN_KEYBOARD() returns 1 in the same tick.
 *
 * Hash: 0xAFB4CF58A4A292B1 | Since: 1207
 */
export function getOnscreenKeyboardResult() {
    return GetOnscreenKeyboardResult();
}
/**
 * No comment provided
 *
 * Hash: 0x9578986A6105A6AD | Since: 1207
 */
export function getProjectileOfProjectileTypeWithinDistance(ped, weaponHash, distance, mustBeOwnedByThisPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetProjectileOfProjectileTypeWithinDistance(_ped, weaponHash, distance, false, mustBeOwnedByThisPed);
}
/**
 * No comment provided
 *
 * Hash: 0x931B5F4CC130224B | Since: 1207
 */
export function getRainLevel() {
    return GetRainLevel();
}
/**
 * No comment provided
 *
 * Hash: 0x924D54E5698AE3E0 | Since: 1207
 */
export function getRandomEventFlag() {
    return GetRandomEventFlag();
}
/**
 * No comment provided
 *
 * Hash: 0xE29F927A961F8AAA | Since: 1207
 */
export function getRandomFloatInRange(startRange, endRange) {
    return GetRandomFloatInRange(startRange, endRange);
}
/**
 * No comment provided
 *
 * Hash: 0xD53343AA4FB7DD28 | Since: 1207
 */
export function getRandomIntInRange(startRange, endRange) {
    return GetRandomIntInRange(startRange, endRange);
}
/**
 * Returns GET_GAME_TIMER() / 1000
 * Only used in rcm_pearson1.ysc
 *
 * Hash: 0x2E036F0480B8BF02 | Since: 1207
 */
export function getRealWorldTime() {
    return GetRealWorldTime();
}
/**
 * No comment provided
 *
 * Hash: 0x63219768C586667C | Since: 1207
 */
export function getScriptTimeWithinFrameInMicroseconds() {
    return GetScriptTimeWithinFrameInMicroseconds();
}
/**
 * No comment provided
 *
 * Hash: 0x1E5D727041BE1709 | Since: 1207
 */
export function getSnowLevel() {
    return GetSnowLevel();
}
/**
 * No comment provided
 *
 * Hash: 0xBE7F225417E35A7C | Since: 1207
 */
export function getSystemTime() {
    return GetSystemTime();
}
/**
 * Old name: _GET_BENCHMARK_TIME
 *
 * Hash: 0x3F3172FEAE3AFE1C | Since: 1207
 */
export function getSystemTimeStep() {
    return GetSystemTimeStep();
}
/**
 * No comment provided
 *
 * Hash: 0xF703E82F3FE14A5F | Since: 1207
 */
export function getWindDirection() {
    return new Vector3(GetWindDirection());
}
/**
 * No comment provided
 *
 * Hash: 0xFFB7E74E041150A4 | Since: 1207
 */
export function getWindSpeed() {
    return GetWindSpeed();
}
/**
 * p3 - possibly radius?
 *
 * Hash: 0xC153E5BCCF411814 | Since: 1207
 */
export function hasBulletImpactedInArea(pos) {
    return HasBulletImpactedInArea(pos.x, pos.y, pos.z, 0, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x3B6A4C05FB2B33AC | Since: 1207
 */
export function hasBulletImpactedInBox() {
    return HasBulletImpactedInBox(0, 0, 0, 0, 0, 0, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x6C9FF40FF1B69F8F | Since: 1207
 */
export function ignoreNextRestart(toggle) {
    IgnoreNextRestart(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x708DF841B8F27AA2 | Since: 1207
 */
export function informCodeOfContentIdOfCurrentUgcMission() {
    InformCodeOfContentIdOfCurrentUgcMission(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4ED6CFDFE8D4131A | Since: 1207
 */
export function isBitSet(address, offset) {
    return IsBitSet(address, offset);
}
/**
 * No comment provided
 *
 * Hash: 0x9D09D8493747CF02 | Since: 1207
 */
export function isBulletInAngledArea() {
    return IsBulletInAngledArea(0, 0, 0, 0, 0, 0, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC652FD308772D79E | Since: 1207
 */
export function isBulletInArea() {
    return IsBulletInArea(0, 0, 0, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC128137C52152741 | Since: 1207
 */
export function isBulletInBox() {
    return IsBulletInBox(0, 0, 0, 0, 0, 0, false);
}
/**
 * Hardcoded to return false.
 * Checks for XBOXONE Game Build.
 *
 * Hash: 0xD1CCC2A2639D325F | Since: 1207
 */
export function isDurangoVersion() {
    return IsDurangoVersion();
}
/**
 * No comment provided
 *
 * Hash: 0xF9E7DBB39080640B | Since: 1207
 */
export function isGameSessionStateMachineIdle() {
    return IsGameSessionStateMachineIdle();
}
/**
 * No comment provided
 *
 * Hash: 0x39F2B1BAD412246A | Since: 1207
 */
export function isIncidentValid(incidentId) {
    return IsIncidentValid(incidentId);
}
/**
 * magdemo = magazine demo, i. e. for magazines such as IGN, pre play phases to prepare articles etc. - example 2012 builds for V
 * Hardcoded to return false.
 *
 * Hash: 0x5FC9357C26DAEFCE | Since: 1207
 */
export function isMagDemo1Active() {
    return IsMagDemo1Active();
}
/**
 * No comment provided
 *
 * Hash: 0xF4D8BCD052E7EA1B | Since: 1207
 */
export function isMinigameInProgress() {
    return IsMinigameInProgress();
}
/**
 * Hardcoded to return false.
 * Checks for PS4 Game Build.
 *
 * Hash: 0x88CFAE250D3E0C71 | Since: 1207
 */
export function isOrbisVersion() {
    return IsOrbisVersion();
}
/**
 * Hardcoded to return true.
 *
 * Hash: 0xB0FB6CFAA5A1C833 | Since: 1207
 */
export function isPcVersion() {
    return IsPcVersion();
}
/**
 * No comment provided
 *
 * Hash: 0x825CA3ED43831015 | Since: 1207
 */
export function isPositionOccupied(pos, range) {
    return IsPositionOccupied(pos.x, pos.y, pos.z, range, false, false, false, false, false, undefined, false);
}
/**
 * Determines whether there is a projectile within the specified coordinates. The coordinates form a rectangle.
 *
 * ownedByPlayer = only projectiles fired by the player will be detected.
 *
 * Hash: 0x05B0061EFDFC8941 | Since: 1207
 */
export function isProjectileInArea(x1, y1, z1, x2, y2, z2, ownedByPlayer) {
    return IsProjectileInArea(x1, y1, z1, x2, y2, z2, ownedByPlayer);
}
/**
 * No comment provided
 *
 * Hash: 0x928431F4133CD3D4 | Since: 1207
 */
export function isProjectileTypeInAngledArea() {
    return IsProjectileTypeInAngledArea(0, 0, 0, 0, 0, 0, 0, undefined, false);
}
/**
 * Determines whether there is a projectile of a specific type within the specified coordinates. The coordinates form a rectangle.
 *
 * Hash: 0x04965FB9E14235C7 | Since: 1207
 */
export function isProjectileTypeInArea(xMin, yMin, zMin, xMax, yMax, zMax, weaponType, isPlayer) {
    if (typeof weaponType === 'string')
        weaponType = GetHashKey(weaponType);
    return IsProjectileTypeInArea(xMin, yMin, zMin, xMax, yMax, zMax, weaponType, isPlayer);
}
/**
 * No comment provided
 *
 * Hash: 0xF51C9BAAD9ED64C4 | Since: 1207
 */
export function isProjectileTypeWithinDistance() {
    return IsProjectileTypeWithinDistance(0, 0, 0, undefined, 0, false);
}
/**
 * Hardcoded to return false.
 *
 * Hash: 0x268AB8420A9E4ED7 | Since: 1207
 */
export function isStadiaVersion() {
    return IsStadiaVersion();
}
/**
 * No comment provided
 *
 * Hash: 0x602102324604D96B | Since: 1207
 */
export function isStringNull(_string) {
    return IsStringNull(_string);
}
/**
 * No comment provided
 *
 * Hash: 0x2CF12F9ACF18F048 | Since: 1207
 */
export function isStringNullOrEmpty(_string) {
    return IsStringNullOrEmpty(_string);
}
/**
 * Returns true if the entire string consists only of space characters.
 *
 * Hash: 0x375F5870A7B8BEC1 | Since: 1207
 */
export function isStringNullOrEmptyOrSpaces(_string) {
    return IsStringNullOrEmptyOrSpaces(_string);
}
/**
 * No comment provided
 *
 * Hash: 0x3D0EAC6385DD6100 | Since: 1207
 */
export function networkSetScriptIsSafeForNetworkGame() {
    NetworkSetScriptIsSafeForNetworkGame();
}
/**
 * No comment provided
 *
 * Hash: 0x5CB71EAA1429A358 | Since: 1207
 */
export function nextOnscreenKeyboardResultWillDisplayUsingTheseFonts(fontBitField) {
    NextOnscreenKeyboardResultWillDisplayUsingTheseFonts(fontBitField);
}
/**
 * No comment provided
 *
 * Hash: 0xB2C69E11A37B5AF0 | Since: 1207
 */
export function overrideSaveHouse(override, pos, heading, isAutosave) {
    return OverrideSaveHouse(override, pos.x, pos.y, pos.z, heading, isAutosave);
}
/**
 * No comment provided
 *
 * Hash: 0x66AB6B6C7E72F393 | Since: 1207
 */
export function pauseDeathArrestRestart(toggle) {
    PauseDeathArrestRestart(toggle);
}
/**
 * spawns a few distant/out-of-sight peds, vehicles, animals etc each time it is called
 *
 * Hash: 0xEA6DC3A8ADD2005F | Since: 1207
 */
export function populateNow() {
    PopulateNow();
}
/**
 * p3 is usually the same value of radius
 * p8 determines whether the ILO prompt is a lock on prompt with RMB
 *
 * Hash: 0x870708A6E147A9AD | Since: 1207
 */
export function registerInteractionLockonPrompt(entity, text, radius, flag, prompt) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return RegisterInteractionLockonPrompt(_entity, text, radius, 0, flag, 0, 0, prompt, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x49F751F6868DDC5B | Since: 1207
 */
export function removeDispatchSpawnBlockingArea() {
    RemoveDispatchSpawnBlockingArea(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x88CB484364EFB37A | Since: 1207
 */
export function removePopMultiplierArea(id) {
    RemovePopMultiplierArea(id, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC7817264BC4B6377 | Since: 1207
 */
export function resetDispatchIdealSpawnDistance() {
    ResetDispatchIdealSpawnDistance();
}
/**
 * Begins with RESET_*. Next character in the name is either D or E.
 *
 * Old name: _RESET_BENCHMARK_RECORDING
 *
 * Hash: 0xECBABD0307FB216F | Since: 1207
 */
export function resetEndUserBenchmark() {
    ResetEndUserBenchmark();
}
/**
 * No comment provided
 *
 * Hash: 0x1411A7CBC3A6EB7B | Since: 1207
 */
export function resetScriptTimeWithinFrame() {
    ResetScriptTimeWithinFrame();
}
/**
 * No comment provided
 *
 * Hash: 0xEF42F56F69877125 | Since: 1207
 */
export function resetWantedResponseNumPedsToSpawn() {
    ResetWantedResponseNumPedsToSpawn();
}
/**
 * Saves the benchmark recording to %USERPROFILE%\Documents\Rockstar Games\Red Dead Redemption 2\Benchmarks and submits some metrics.
 *
 * Old name: _SAVE_BENCHMARK_RECORDING
 *
 * Hash: 0xF4743E2ECC02B3DA | Since: 1207
 */
export function saveEndUserBenchmark() {
    SaveEndUserBenchmark();
}
/**
 * No comment provided
 *
 * Hash: 0x769E848C66E3C2BB | Since: 1207
 */
export function scriptRaceGetPlayerSplitTime() {
    return ScriptRaceGetPlayerSplitTime(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8AE059F47158417E | Since: 1207
 */
export function scriptRaceInit(numCheckpoints, numLaps, numPlayers) {
    ScriptRaceInit(numCheckpoints, numLaps, numPlayers, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBA62B4D80FA66BD6 | Since: 1207
 */
export function scriptRacePlayerHitCheckpoint(part, checkpoint, lap, time) {
    ScriptRacePlayerHitCheckpoint(part, checkpoint, lap, time);
}
/**
 * No comment provided
 *
 * Hash: 0x334CE0DA4FAF330C | Since: 1207
 */
export function scriptRaceShutdown() {
    ScriptRaceShutdown();
}
/**
 * No comment provided
 *
 * Hash: 0xF73FBE4845C43B5B | Since: 1207
 */
export function setBit(offset) {
    return SetBit(offset);
}
/**
 * No comment provided
 *
 * Hash: 0x324DC1CEF57F31E6 | Since: 1207
 */
export function setBitsInRange(rangeStart, rangeEnd) {
    return SetBitsInRange(rangeStart, rangeEnd, 0);
}
/**
 * Cheats are GTA IV cheats:
 *
 * 0 = unknown
 * 1 = unknown (same as 0)
 * 2 = Max Health and Armor
 * 3 = Raise Wanted Level
 * 4 = Lower Wanted Level
 * 5 = unknown (does nothing)
 * 6 = Change Weather
 * 7 = Spawn Annihilator
 * 8 = Spawn NRG 900
 * 9 = Spawn FBI
 * 10 = Spawn Jetmax
 * 11 = Spawn Comet
 * 12 = Spawn Turismo
 * 13 = Spawn Cognoscenti
 * 14 = Spawn Super GT
 * 15 = Spawn Sanchez
 *
 * Initially used in Max Payne 3, that's why we know the name.
 *
 * Hash: 0xD4958E8CF0DE0DD0 | Since: 1207
 */
export function setCheatActive(cheatId) {
    SetCheatActive(cheatId);
}
/**
 * No comment provided
 *
 * Hash: 0xD37BECF862DA726F | Since: 1207
 */
export function setCreditsActive(toggle) {
    SetCreditsActive(toggle);
}
/**
 * Params: BOOL p3 is always true
 *
 * Old name: _SET_WEATHER_TYPE_TRANSITION
 *
 * Hash: 0xFA3E3CA8A1DE6D5D | Since: 1207
 */
export function setCurrWeatherState(weatherType1, weatherType2, percentWeather2, enabled) {
    if (typeof weatherType1 === 'string')
        weatherType1 = GetHashKey(weatherType1);
    if (typeof weatherType2 === 'string')
        weatherType2 = GetHashKey(weatherType2);
    SetCurrWeatherState(weatherType1, weatherType2, percentWeather2, enabled);
}
/**
 * No comment provided
 *
 * Hash: 0xEAB6823B82FBD283 | Since: 1207
 */
export function setDispatchIdealSpawnDistance(fIdealSpawnDistance) {
    SetDispatchIdealSpawnDistance(fIdealSpawnDistance);
}
/**
 * Sets whether the game should fade in after the player dies or is arrested.
 *
 * Hash: 0xDF3B5846DE5904AF | Since: 1207
 */
export function setFadeInAfterDeathArrest(toggle) {
    SetFadeInAfterDeathArrest(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xAC806C4CAB973517 | Since: 1207
 */
export function setFadeInAfterLoad(toggle) {
    SetFadeInAfterLoad(toggle);
}
/**
 * Make sure to call this from the correct thread if you're using multiple threads because all other threads except the one which is calling SET_GAME_PAUSED will be paused.
 *
 * Hash: 0xFAEC088D28B1DE4A | Since: 1207
 */
export function setGamePaused(toggle) {
    SetGamePaused(toggle);
}
/**
 * If true, the player can't save the game.
 *
 * Hash: 0x36694B456BE80D0A | Since: 1207
 */
export function setMissionFlag(toggle) {
    SetMissionFlag(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x674B90BE1115846D | Since: 1207
 */
export function setPedDecomposed(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedDecomposed(_ped, toggle);
}
/**
 * Old name: _SET_RAIN_LEVEL
 *
 * Hash: 0x193DFC0526830FD6 | Since: 1207
 */
export function setRain(intensity) {
    SetRain(intensity);
}
/**
 * If the parameter is true, sets the random event flag to true, if the parameter is false, the function does nothing at all.
 * Does nothing if the mission flag is set.
 *
 * Hash: 0xB1ADCCC4150C6473 | Since: 1207
 */
export function setRandomEventFlag(toggle) {
    SetRandomEventFlag(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x5CD7A49104AFCB6B | Since: 1207
 */
export function setRandomSeed(seed) {
    SetRandomSeed(seed);
}
/**
 * No comment provided
 *
 * Hash: 0x6E5A7FBEECAB3C72 | Since: 1207
 */
export function setRandomWeatherType() {
    SetRandomWeatherType(false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xB3E9BE963F10C445 | Since: 1207
 */
export function setSuperJumpThisFrame(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetSuperJumpThisFrame(_player);
}
/**
 * No comment provided
 *
 * Hash: 0x3215376E79F6EA18 | Since: 1207
 */
export function setThisScriptCanBePaused(toggle) {
    SetThisScriptCanBePaused(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x8ABD939C2E5D00ED | Since: 1207
 */
export function setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle) {
    SetThisScriptCanRemoveBlipsCreatedByAnyScript(toggle);
}
/**
 * Maximum value is 1.0f
 * At a value of 0.0f the game will still run at a minimum time scale.
 *
 * Hash: 0x9682AF6050854856 | Since: 1207
 */
export function setTimeScale(timeScale) {
    SetTimeScale(timeScale);
}
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/weather/weather_types.lua
 *
 * Hash: 0x59174F1AFE095B5A | Since: 1207
 */
export function setWeatherType(weatherType, transition, transitionTime) {
    if (typeof weatherType === 'string')
        weatherType = GetHashKey(weatherType);
    SetWeatherType(weatherType, false, false, transition, transitionTime, false);
}
/**
 * No comment provided
 *
 * Hash: 0xB56C4F5F57A45600 | Since: 1207
 */
export function setWindDirection(direction) {
    SetWindDirection(direction);
}
/**
 * No comment provided
 *
 * Hash: 0xD00C2D82DC04A99F | Since: 1207
 */
export function setWindSpeed(speed) {
    SetWindSpeed(speed);
}
/**
 * No comment provided
 *
 * Hash: 0x867654CBC7606F2C | Since: 1207
 */
export function shootSingleBulletBetweenCoords(x1, y1, z1, x2, y2, z2, damage, weaponHash, ownerPed, isAudible, isInvisible, speed) {
    const _ownerPed = ownerPed instanceof IPed ? ownerPed.handle() : ownerPed;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    ShootSingleBulletBetweenCoords(x1, y1, z1, x2, y2, z2, damage, false, weaponHash, _ownerPed, isAudible, isInvisible, speed, false);
}
/**
 * Returns whether the game's measurement system is set to metric.
 *
 * Hash: 0x4FB556ACEFA93098 | Since: 1207
 */
export function shouldUseMetricMeasurements() {
    return ShouldUseMetricMeasurements();
}
/**
 * Begins with START_*. Next character in the name is either D or E.
 *
 * Old name: _START_BENCHMARK_RECORDING
 *
 * Hash: 0x29D1F6DF864A094E | Since: 1207
 */
export function startEndUserBenchmark() {
    StartEndUserBenchmark();
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xA565FAC215CBC77D | Since: 1207
 */
export function stopCurrentLoadingProgressTimer() {
    StopCurrentLoadingProgressTimer();
}
/**
 * Begins with STOP_*. Next character in the name is either D or E.
 *
 * Old name: _STOP_BENCHMARK_RECORDING
 *
 * Hash: 0xB89AEC71AFF2B599 | Since: 1207
 */
export function stopEndUserBenchmark() {
    StopEndUserBenchmark();
}
/**
 * Returns false if it's a null or empty string or if the string is too long. outInteger will be set to -999 in that case.
 *
 * Hash: 0xF2DD2298B3AF23E2 | Since: 1207
 */
export function stringToInt(_string) {
    return StringToInt(_string);
}
/**
 * No comment provided
 *
 * Hash: 0x8C13DB96497B7ABF | Since: 1207
 */
export function tan() {
    return Tan(0);
}
/**
 * Hardcoded to return false.
 *
 * Old name: _UI_IS_SINGLEPLAYER_PAUSE_MENU_ACTIVE
 *
 * Hash: 0x4FFA0386A6216113 | Since: 1207
 */
export function uiStartedEndUserBenchmark() {
    return UiStartedEndUserBenchmark();
}
/**
 * No comment provided
 *
 * Hash: 0xE98D55C5983F2509 | Since: 1207
 */
export function unregisterInteractionLockonPrompt(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return UnregisterInteractionLockonPrompt(_entity);
}
/**
 * Returns the current status of the onscreen keyboard, and updates the output.
 *
 * Status Codes:
 *
 * 0 - User still editing
 * 1 - User has finished editing
 * 2 - User has canceled editing
 * 3 - Keyboard isn't active
 *
 * Hash: 0x37DF360F235A3893 | Since: 1207
 */
export function updateOnscreenKeyboard() {
    return UpdateOnscreenKeyboard();
}
/**
 * Note: The first bit in 'flags' must not be set.
 * It is also required to pass at least one extra argument (this must be a text label string or hash).
 * When passing a hash, flags should be 0.
 *
 * Hash: 0xFA925AC00EB830B9 | Since: 1207
 */
export function varString(flags, ...params) {
    return VarString(flags, ...params);
}
/**
 * Only used in smuggler2 script
 *
 * Hash: 0xF06C5B66DE20B2B8 | Since: 1207
 */
export function waterOverrideSetOceanwavemaxamplitude(maxAmplitude) {
    WaterOverrideSetOceanwavemaxamplitude(maxAmplitude);
}
/**
 * Only used in smuggler2 script
 *
 * Hash: 0x55123D5A7D9D3C42 | Since: 1207
 */
export function waterOverrideSetShorewaveamplitude(amplitude) {
    WaterOverrideSetShorewaveamplitude(amplitude);
}
/**
 * No comment provided
 *
 * Hash: 0x0358B8A41916C613 | Since: 1207
 */
export function _0x0358B8A41916C613() {
    return Citizen.invokeNative('0x0358B8A41916C613', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0730E518486DEEC3 | Since: 1207
 */
export function _0x0730E518486DEEC3() {
    Citizen.invokeNative('0x0730E518486DEEC3', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0A487CC74A517FB5 | Since: 1207
 */
export function _0x0A487CC74A517FB5() {
    Citizen.invokeNative('0x0A487CC74A517FB5', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0D0AE5081F88CFE1 | Since: 1207
 */
export function _0x0D0AE5081F88CFE1(p0) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    return Citizen.invokeNative('0x0D0AE5081F88CFE1', p0);
}
/**
 * _SET_MISSION_NAME_*(FOR_ACTIVITY?/MINIGAME?)
 *
 * Hash: 0x1096603B519C905F | Since: 1207
 */
export function _0x1096603B519C905F(name) {
    Citizen.invokeNative('0x1096603B519C905F', name);
}
/**
 * No comment provided
 *
 * Hash: 0x154340E87D8CC178 | Since: 1207
 */
export function _0x154340E87D8CC178() {
    Citizen.invokeNative('0x154340E87D8CC178', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x183672FE838A661B | Since: 1207
 */
export function _0x183672FE838A661B() {
    return Citizen.invokeNative('0x183672FE838A661B');
}
/**
 * No comment provided
 *
 * Hash: 0x243CEDE8F916B994 | Since: 1207
 */
export function _0x243CEDE8F916B994() {
    Citizen.invokeNative('0x243CEDE8F916B994');
}
/**
 * No comment provided
 *
 * Hash: 0x2916B30DC6C41179 | Since: 1207
 */
export function _0x2916B30DC6C41179(weatherType) {
    if (typeof weatherType === 'string')
        weatherType = GetHashKey(weatherType);
    Citizen.invokeNative('0x2916B30DC6C41179', weatherType);
}
/**
 * No comment provided
 *
 * Hash: 0x33982467B1E349EF | Since: 1207
 */
export function _0x33982467B1E349EF() {
    return Citizen.invokeNative('0x33982467B1E349EF', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x35165C658077CD0B | Since: 1207
 */
export function _0x35165C658077CD0B() {
    return Citizen.invokeNative('0x35165C658077CD0B');
}
/**
 * No comment provided
 *
 * Hash: 0x38C0C9CAE1544500 | Since: 1207
 */
export function _0x38C0C9CAE1544500(p0) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    Citizen.invokeNative('0x38C0C9CAE1544500', p0);
}
/**
 * No comment provided
 *
 * Hash: 0x38C2BF94D15F464D | Since: 1207
 */
export function _0x38C2BF94D15F464D() {
    return Citizen.invokeNative('0x38C2BF94D15F464D', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3A87FDA8F1B6CDFB | Since: 1207
 */
export function _0x3A87FDA8F1B6CDFB() {
    Citizen.invokeNative('0x3A87FDA8F1B6CDFB', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3C3C7B1B5EC08764 | Since: 1207
 */
export function _0x3C3C7B1B5EC08764() {
    Citizen.invokeNative('0x3C3C7B1B5EC08764');
}
/**
 * No comment provided
 *
 * Hash: 0x4647842FE8F31C1E | Since: 1207
 */
export function _0x4647842FE8F31C1E() {
    Citizen.invokeNative('0x4647842FE8F31C1E', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x49C44FE78A135A1D | Since: 1207
 */
export function _0x49C44FE78A135A1D() {
    Citizen.invokeNative('0x49C44FE78A135A1D', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x49F3241C28EBBFBC | Since: 1207
 */
export function _0x49F3241C28EBBFBC() {
    Citizen.invokeNative('0x49F3241C28EBBFBC', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x4B0501A468B749F8 | Since: 1207
 */
export function _0x4B0501A468B749F8() {
    Citizen.invokeNative('0x4B0501A468B749F8');
}
/**
 * No comment provided
 *
 * Hash: 0x4B101DBCC9482F2D | Since: 1207
 */
export function _0x4B101DBCC9482F2D(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x4B101DBCC9482F2D', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x4D5C9CC7E7E23E09 | Since: 1207
 */
export function _0x4D5C9CC7E7E23E09() {
    Citizen.invokeNative('0x4D5C9CC7E7E23E09');
}
/**
 * UPDATE_PICKUP_COLLECTIBLE: set Eagle Eye fountain
 * _J*, _K*, _L*
 *
 * Hash: 0x553D67295DDD2309 | Since: 1207
 */
export function _0x553D67295DDD2309(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x553D67295DDD2309', _entity);
}
/**
 * No comment provided
 *
 * Hash: 0x5801BE2DF2AF07EC | Since: 1207
 */
export function _0x5801BE2DF2AF07EC() {
    Citizen.invokeNative('0x5801BE2DF2AF07EC', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5B4A8121A47D844D | Since: 1207
 */
export function _0x5B4A8121A47D844D() {
    return Citizen.invokeNative('0x5B4A8121A47D844D', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x627B68D9CE6EE8DE | Since: 1207
 */
export function _0x627B68D9CE6EE8DE() {
    return Citizen.invokeNative('0x627B68D9CE6EE8DE', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x68319452C5064ABA | Since: 1207
 */
export function _0x68319452C5064ABA() {
    Citizen.invokeNative('0x68319452C5064ABA', undefined, undefined);
}
/**
 * _SET_DISPATCH_*, unused
 *
 * Hash: 0x6BCF7B5CD338281A | Since: 1207
 */
export function _0x6BCF7B5CD338281A() {
    Citizen.invokeNative('0x6BCF7B5CD338281A', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6BED40493A1AFDB8 | Since: 1207
 */
export function _0x6BED40493A1AFDB8() {
    return Citizen.invokeNative('0x6BED40493A1AFDB8', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x6C7B68D3CE60E8DE | Since: 1207
 */
export function _0x6C7B68D3CE60E8DE() {
    return Citizen.invokeNative('0x6C7B68D3CE60E8DE', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6F02B5E50511721E | Since: 1207
 */
export function _0x6F02B5E50511721E() {
    return Citizen.invokeNative('0x6F02B5E50511721E', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x745808BB01CEC6B9 | Since: 1207
 */
export function _0x745808BB01CEC6B9() {
    Citizen.invokeNative('0x745808BB01CEC6B9', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x74ACA66484CEBAF0 | Since: 1207
 */
export function _0x74ACA66484CEBAF0() {
    Citizen.invokeNative('0x74ACA66484CEBAF0', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7A76104CC2CC69E8 | Since: 1207
 */
export function _0x7A76104CC2CC69E8(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x7A76104CC2CC69E8', _entity, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x7CF96F1250EF3221 | Since: 1207
 */
export function _0x7CF96F1250EF3221() {
    return Citizen.invokeNative('0x7CF96F1250EF3221', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7FA58CED69405F9A | Since: 1207
 */
export function _0x7FA58CED69405F9A() {
    Citizen.invokeNative('0x7FA58CED69405F9A', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8314FC2013ECE2DA | Since: 1207
 */
export function _0x8314FC2013ECE2DA() {
    return Citizen.invokeNative('0x8314FC2013ECE2DA', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8BB99B85444544D9 | Since: 1207
 */
export function _0x8BB99B85444544D9() {
    return Citizen.invokeNative('0x8BB99B85444544D9', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8C0F6A3D7236DEEB | Since: 1207
 */
export function _0x8C0F6A3D7236DEEB() {
    Citizen.invokeNative('0x8C0F6A3D7236DEEB', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8DB104CCEBCD58C5 | Since: 1207
 */
export function _0x8DB104CCEBCD58C5() {
    return Citizen.invokeNative('0x8DB104CCEBCD58C5', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x94FCADCF9F0C368E | Since: 1207
 */
export function _0x94FCADCF9F0C368E() {
    Citizen.invokeNative('0x94FCADCF9F0C368E', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x96282005C5C6801F | Since: 1311
 */
export function _0x96282005C5C6801F() {
    Citizen.invokeNative('0x96282005C5C6801F', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x970339EFA4FDE518 | Since: 1207
 */
export function _0x970339EFA4FDE518() {
    return Citizen.invokeNative('0x970339EFA4FDE518', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9A252AA23D7098F2 | Since: 1207
 */
export function _0x9A252AA23D7098F2() {
    Citizen.invokeNative('0x9A252AA23D7098F2');
}
/**
 * No comment provided
 *
 * Hash: 0x9BF2C0C568C61641 | Since: 1207
 */
export function _0x9BF2C0C568C61641() {
    Citizen.invokeNative('0x9BF2C0C568C61641', undefined);
}
/**
 * _CLEAR*
 *
 * Hash: 0xA08111B053D84B4D | Since: 1207
 */
export function _0xA08111B053D84B4D() {
    Citizen.invokeNative('0xA08111B053D84B4D', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA3A8926951471C82 | Since: 1207
 */
export function _0xA3A8926951471C82() {
    Citizen.invokeNative('0xA3A8926951471C82');
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xA9342743B634A462 | Since: 1207
 */
export function _0xA9342743B634A462() {
    Citizen.invokeNative('0xA9342743B634A462', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xAB26DEEE120FD3FD | Since: 1207
 */
export function _0xAB26DEEE120FD3FD() {
    Citizen.invokeNative('0xAB26DEEE120FD3FD', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xAD44856A1CD29635 | Since: 1207
 */
export function _0xAD44856A1CD29635() {
    Citizen.invokeNative('0xAD44856A1CD29635', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xAF3A84C7DE6A1DC5 | Since: 1207
 */
export function _0xAF3A84C7DE6A1DC5() {
    Citizen.invokeNative('0xAF3A84C7DE6A1DC5', undefined, undefined);
}
/**
 * Hardcoded to return one/true.
 *
 * Hash: 0xAF530E56505D1BD6 | Since: 1207
 */
export function _0xAF530E56505D1BD6() {
    return Citizen.invokeNative('0xAF530E56505D1BD6', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB08C4FA25BC29DB9 | Since: 1207
 */
export function _0xB08C4FA25BC29DB9() {
    Citizen.invokeNative('0xB08C4FA25BC29DB9', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB1F6665AA54DCD5C | Since: 1207
 */
export function _0xB1F6665AA54DCD5C(p0) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    return Citizen.invokeNative('0xB1F6665AA54DCD5C', p0);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xB711EB4BC8D06013 | Since: 1207
 */
export function _0xB711EB4BC8D06013() {
    Citizen.invokeNative('0xB711EB4BC8D06013');
}
/**
 * No comment provided
 *
 * Hash: 0xBB282CF5D2333FB8 | Since: 1207
 */
export function _0xBB282CF5D2333FB8() {
    Citizen.invokeNative('0xBB282CF5D2333FB8', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCC1BAF72D571DB8D | Since: 1207
 */
export function _0xCC1BAF72D571DB8D() {
    return Citizen.invokeNative('0xCC1BAF72D571DB8D', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCC3EDC5614B03F61 | Since: 1207
 */
export function _0xCC3EDC5614B03F61() {
    Citizen.invokeNative('0xCC3EDC5614B03F61', 0);
}
/**
 * No comment provided
 *
 * Hash: 0xD3F943B88F55376A | Since: 1207
 */
export function _0xD3F943B88F55376A(weatherType) {
    if (typeof weatherType === 'string')
        weatherType = GetHashKey(weatherType);
    Citizen.invokeNative('0xD3F943B88F55376A', weatherType);
}
/**
 * No comment provided
 *
 * Hash: 0xDA4D8EB04E8E2928 | Since: 1207
 */
export function _0xDA4D8EB04E8E2928() {
    Citizen.invokeNative('0xDA4D8EB04E8E2928', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDBDA48EC456ED908 | Since: 1436
 */
export function _0xDBDA48EC456ED908() {
    Citizen.invokeNative('0xDBDA48EC456ED908');
}
/**
 * Hardcoded to return one/true.
 *
 * Hash: 0xDC057B86FC157031 | Since: 1207
 */
export function _0xDC057B86FC157031() {
    return Citizen.invokeNative('0xDC057B86FC157031');
}
/**
 * No comment provided
 *
 * Hash: 0xDC416CA762BC4F43 | Since: 1207
 */
export function _0xDC416CA762BC4F43() {
    return Citizen.invokeNative('0xDC416CA762BC4F43', undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDE2C3B74D2B3705C | Since: 1207
 */
export function _0xDE2C3B74D2B3705C() {
    Citizen.invokeNative('0xDE2C3B74D2B3705C', undefined, undefined);
}
/**
 * Not implemented.
 *
 * Hash: 0xEB946B9E579729AD | Since: 1207
 */
export function _0xEB946B9E579729AD(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xEB946B9E579729AD', _ped, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF569E33FB72ED28E | Since: 1207
 */
export function _0xF569E33FB72ED28E() {
    Citizen.invokeNative('0xF569E33FB72ED28E');
}
/**
 * No comment provided
 *
 * Hash: 0xF63FA29D4A9ACA86 | Since: 1207
 */
export function _0xF63FA29D4A9ACA86() {
    Citizen.invokeNative('0xF63FA29D4A9ACA86', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF650DCF5D6F312C1 | Since: 1232
 */
export function _0xF650DCF5D6F312C1() {
    Citizen.invokeNative('0xF650DCF5D6F312C1', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF81C53561D15F330 | Since: 1207
 */
export function _0xF81C53561D15F330() {
    return Citizen.invokeNative('0xF81C53561D15F330');
}
/**
 * No comment provided
 *
 * Hash: 0xFC6ECB9170145ECE | Since: 1207
 */
export function _0xFC6ECB9170145ECE() {
    Citizen.invokeNative('0xFC6ECB9170145ECE');
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xFF252E2BAFB7330F | Since: 1207
 */
export function _0xFF252E2BAFB7330F() {
    Citizen.invokeNative('0xFF252E2BAFB7330F', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA2D5A26208421426 | Since: 1207
 */
export function addDispatchSpawnBlockingArea(volume) {
    return AddDispatchSpawnBlockingArea(volume);
}
/**
 * Only used in script function PROCESS_ZONE_CREATION
 * Returns Pop multiplier volume ID
 *
 * Hash: 0x3233C4EC0514C7EC | Since: 1207
 */
export function addPopMultiplierVolume(volume, pedDensity, vehicleDensity) {
    return AddPopMultiplierVolume(volume, pedDensity, vehicleDensity, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xD2D74F89DF844A50 | Since: 1207
 */
export function clearAllBitFlags() {
    return ClearAllBitFlags();
}
/**
 * No comment provided
 *
 * Hash: 0xB909149F2BB5F6DA | Since: 1207
 */
export function clearBitFlag(flag) {
    return ClearBitFlag(flag);
}
/**
 * No comment provided
 *
 * Hash: 0x2FCD528A397E5C88 | Since: 1207
 */
export function clearVolumeArea(volume, flag) {
    ClearVolumeArea(volume, flag);
}
/**
 * No comment provided
 *
 * Hash: 0xCE7690C0A0D1C36D | Since: 1207
 */
export function clearWeatherTypePersistOvertime(milliseconds) {
    ClearWeatherTypePersistOvertime(milliseconds);
}
/**
 * No comment provided
 *
 * Hash: 0x0E71C80FA4EC8147 | Since: 1207
 */
export function clearWeatherVariation(weatherType) {
    ClearWeatherVariation(weatherType, false);
}
/**
 * No comment provided
 *
 * Hash: 0xE704838F36F93B7B | Since: 1355
 */
export function countBitFlags() {
    return CountBitFlags();
}
/**
 * aiMemoryType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/_CREATE_AI_MEMORY
 *
 * Hash: 0x88BC5F4AEF77FC4E | Since: 1207
 */
export function createAiMemory(aiMemoryType) {
    return CreateAiMemory(aiMemoryType);
}
/**
 * Returns a formatted string (0x%x)
 *
 * Hash: 0xBCC2CFADEA1AEA6C | Since: 1207
 */
export function createColorString(rgb) {
    return CreateColorString(rgb);
}
/**
 * dispatchService: see ENABLE_DISPATCH_SERVICE
 *
 * The entities must be added to itemSet.
 *
 * Hash: 0xAB3D3F45436DB1D8 | Since: 1207
 */
export function createIncidentWithEntities(dispatchService, pos, itemSet, radius) {
    return CreateIncidentWithEntities(dispatchService, pos.x, pos.y, pos.z, itemSet, radius);
}
/**
 * disables composite Pick prompt
 *
 * Hash: 0x082C043C7AFC3747 | Since: 1207
 */
export function disableCompositePickPromptThisFrame(compositeId, disable) {
    Citizen.invokeNative('0x082C043C7AFC3747', compositeId, disable);
}
/**
 * No comment provided
 *
 * Hash: 0xBDC6E364C9C78178 | Since: 1207
 */
export function doesItemHaveValidBase(item) {
    return DoesItemHaveValidBase(item);
}
/**
 * No comment provided
 *
 * Hash: 0x39D6DACE323A20B6 | Since: 1207
 */
export function doesPopMultiplierAreaExistForVolume(volume) {
    return DoesPopMultiplierAreaExistForVolume(volume);
}
/**
 * No comment provided
 *
 * Hash: 0x9382D5D43D2AA6FF | Since: 1207
 */
export function doesStringExistInString() {
    return DoesStringExistInString();
}
/**
 * p3 is always -1.0f in the scripts
 *
 * Hash: 0x67943537D179597C | Since: 1207
 */
export function forceLightningFlashAtCoords(pos) {
    ForceLightningFlashAtCoords(pos.x, pos.y, pos.z, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xFAED234C7F53ABEB | Since: 1207
 */
export function gameFrameworkManagerGetMode() {
    return GameFrameworkManagerGetMode();
}
/**
 * No comment provided
 *
 * Hash: 0xAFF2FD8ADD927585 | Since: 1207
 */
export function gameFrameworkManagerShutdown() {
    GameFrameworkManagerShutdown();
}
/**
 * No comment provided
 *
 * Hash: 0xFDF38E2B711BF78E | Since: 1207
 */
export function getAiPedDoesHaveEventMemory() {
    return GetAiPedDoesHaveEventMemory(0);
}
/**
 * https://easings.net/
 *
 * enum class eEasingCurveType
 * {
 * TYPE_LINEAR,
 * TYPE_QUADRATIC_IN,
 * TYPE_QUADRATIC_OUT,
 * TYPE_QUADRATIC_INOUT,
 * TYPE_CUBIC_IN,
 * TYPE_CUBIC_OUT,
 * TYPE_CUBIC_INOUT,
 * TYPE_QUARTIC_IN,
 * TYPE_QUARTIC_OUT,
 * TYPE_QUARTIC_INOUT,
 * TYPE_QUINTIC_IN,
 * TYPE_QUINTIC_OUT,
 * TYPE_QUINTIC_INOUT,
 * TYPE_EXPONENTIAL_IN,
 * TYPE_EXPONENTIAL_OUT,
 * TYPE_EXPONENTIAL_INOUT,
 * TYPE_SINE_IN,
 * TYPE_SINE_OUT,
 * TYPE_SINE_INOUT,
 * TYPE_CIRCULAR_IN,
 * TYPE_CIRCULAR_OUT,
 * TYPE_CIRCULAR_INOUT,
 * TYPE_BOUNCE_IN,
 * TYPE_BOUNCE_OUT,
 * TYPE_BOUNCE_INOUT,
 * TYPE_CUSTOM
 * };
 *
 * Hash: 0xEF50E344A8F93784 | Since: 1207
 */
export function getEasingCurveValue(t, b, d, easingCurveType) {
    return GetEasingCurveValue(t, b, d, easingCurveType);
}
/**
 * No comment provided
 *
 * Hash: 0xEE04C0AFD4EFAF0E | Since: 1207
 */
export function getEntityFromItem(item) {
    return GetEntityFromItem(item);
}
/**
 * Returns the weather type that has been set by a script
 *
 * Hash: 0xDD560ABEF5D3784C | Since: 1207
 */
export function getForcedWeather() {
    return GetForcedWeather();
}
/**
 * `Returns rage::fwTimer::sm_nonScaledClippedTime`
 *
 * Hash: 0x483B8C542103AD72 | Since: 1207
 */
export function getGameTimerNonScaledClipped() {
    return GetGameTimerNonScaledClipped();
}
/**
 * Outputs the ground Z axis, its material and flags.Input flags are 17, 129 or 3423 in R* scripts.similar to flags of shapes test native
 *
 * Hash: 0xBBE5B63EFFB08E68 | Since: 1207
 */
export function getGroundZAndMaterialFor3dCoord(coords, flags) {
    return Citizen.invokeNative('0xBBE5B63EFFB08E68', coords, flags);
}
/**
 * 0 = invalid
 * 1 = CEntity
 * `2 = rage::volBase`
 * `3 = rage::volSphere`
 * `4 = rage::volBox`
 * `5 = rage::volAggregate`
 * `6 = rage::volCylinder`
 * 7 = CScriptedCoverPoint
 * `8 = rage::ptfxScriptInfo`
 * 9 = CPed
 * 10 = CVehicle
 * 11 = CObject
 * 12 = CItemSet
 * 13 = CPersistentCharacter
 *
 * Hash: 0xDC8D2FF478DF9553 | Since: 1207
 */
export function getItemType(handle) {
    return GetItemType(handle);
}
/**
 * Event names in the scripts: MGBegin, MGEnd, ReadyForCut
 *
 * Hash: 0xF9B91C5129EABC08 | Since: 1207
 */
export function getLootingEventHasFired(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetLootingEventHasFired(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xC43CD2668B204419 | Since: 1207
 */
export function getMaxNumInstructions() {
    return GetMaxNumInstructions();
}
/**
 * No comment provided
 *
 * Hash: 0x51021D36F62AAA83 | Since: 1207
 */
export function getNextWeatherTypeHashName() {
    return GetNextWeatherTypeHashName();
}
/**
 * No comment provided
 *
 * Hash: 0x72904D3D62AF5839 | Since: 1207
 */
export function getNumberOfInstructions() {
    return GetNumberOfInstructions();
}
/**
 * No comment provided
 *
 * Hash: 0x18013392501CE5DC | Since: 1207
 */
export function getObjectFromIndexedItem(item) {
    return GetObjectFromIndexedItem(item);
}
/**
 * No comment provided
 *
 * Hash: 0x3FFB15534067DCD4 | Since: 1207
 */
export function getPedFromIndexedItem(item) {
    return GetPedFromIndexedItem(item);
}
/**
 * No comment provided
 *
 * Hash: 0x4BEB42AEBCA732E9 | Since: 1207
 */
export function getPrevWeatherTypeHashName() {
    return GetPrevWeatherTypeHashName();
}
/**
 * No comment provided
 *
 * Hash: 0x1359C181BC625503 | Since: 1207
 */
export function getRandomWeatherType() {
    return GetRandomWeatherType();
}
/**
 * No comment provided
 *
 * Hash: 0x7F4CE164D9A11DFE | Since: 1207
 */
export function getRandomWeatherTypeIndex() {
    return GetRandomWeatherTypeIndex();
}
/**
 * Only 0 and 1 are valid for p0, higher values causes the native to return 2.
 *
 * Hash: 0x1B065A2BF7953815 | Since: 1207
 */
export function getStatusOfSavegameOperation() {
    return GetStatusOfSavegameOperation(0);
}
/**
 * No comment provided
 *
 * Hash: 0xF216F74101968DB0 | Since: 1207
 */
export function getStringFromBool(value) {
    return GetStringFromBool(value);
}
/**
 * No comment provided
 *
 * Hash: 0x2B6846401D68E563 | Since: 1207
 */
export function getStringFromFloat(value, digits) {
    return GetStringFromFloat(value, digits);
}
/**
 * Returns a string in the following format: <<%.4f,%.4f,%.4f>>
 *
 * Hash: 0x6C4DBF553885F9EB | Since: 1207
 */
export function getStringFromVector(pos) {
    return GetStringFromVector(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xB98B78C3768AF6E0 | Since: 1207
 */
export function getTemperatureAtCoords(pos) {
    return GetTemperatureAtCoords(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xE578C8AE173719B3 | Since: 1207
 */
export function getVehicleFromIndexedItem(item) {
    return GetVehicleFromIndexedItem(item);
}
/**
 * No comment provided
 *
 * Hash: 0xF18AF483DF70BBDE | Since: 1207
 */
export function getVolumeFromIndexedItem(item) {
    return GetVolumeFromIndexedItem(item);
}
/**
 * Note: the buffer should be exactly 32 bytes long
 *
 * Hash: 0xCF11C0CEB40C401B | Since: 1207
 */
export function intToString(value, format) {
    return IntToString(value, format);
}
/**
 * No comment provided
 *
 * Hash: 0x80E9C316EF84DD81 | Since: 1207
 */
export function isAnyBitFlagSet() {
    return IsAnyBitFlagSet();
}
/**
 * No comment provided
 *
 * Hash: 0xFEC1D4B5C82C176F | Since: 1207
 */
export function isBaseACoverPoint(handle) {
    return IsBaseACoverPoint(handle);
}
/**
 * No comment provided
 *
 * Hash: 0x716F17F8A0419F95 | Since: 1207
 */
export function isBaseAPersistentCharacter(handle) {
    return IsBaseAPersistentCharacter(handle);
}
/**
 * No comment provided
 *
 * Hash: 0x8F4F050054005C27 | Since: 1207
 */
export function isBitFlagSet(flag) {
    return IsBitFlagSet(flag);
}
/**
 * No comment provided
 *
 * Hash: 0xACB7E1418A8B6E32 | Since: 1207
 */
export function isGlobalBlockValid(index) {
    return IsGlobalBlockValid(index);
}
/**
 * No comment provided
 *
 * Hash: 0xF236C84C6ADFCB2F | Since: 1207
 */
export function isMissionCreatorActive() {
    return IsMissionCreatorActive();
}
/**
 * No comment provided
 *
 * Hash: 0x5170DDA6D63ACAAA | Since: 1207
 */
export function isPedDecomposed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedDecomposed(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x36040772DF5E59A0 | Since: 1355
 */
export function isPlayerOwningStandaloneSp() {
    return IsPlayerOwningStandaloneSp();
}
/**
 * No comment provided
 *
 * Hash: 0x48E4D50F87A96AA5 | Since: 1207
 */
export function lootTablesGetInfo(ped, lootTableKey) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof lootTableKey === 'string')
        lootTableKey = GetHashKey(lootTableKey);
    return LootTablesGetInfo(_ped, false, false, lootTableKey, undefined);
}
/**
 * p0 must be < 2
 *
 * Hash: 0x279B0696DA4657EB | Since: 1207
 */
export function queueSavegameOperation() {
    return QueueSavegameOperation(0);
}
/**
 * Reads the passed value as floating point value and returns it.
 * Example: _READ_INT_AS_FLOAT(0x3F800000) returns 1.0f because 0x3F800000 is the hexadecimal representation of 1.0f.
 *
 * Hash: 0xD2C9126410DFA1B2 | Since: 1207
 */
export function readIntAsFloat(value) {
    return ReadIntAsFloat(value);
}
/**
 * No comment provided
 *
 * Hash: 0xBD090F5B1DB82189 | Since: 1207
 */
export function removePopMultiplierAreaForVolume(volume) {
    RemovePopMultiplierAreaForVolume(volume, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x54EC7B6BC72BAD69 | Since: 1207
 */
export function resetDispatchMaxSpawnDistance() {
    ResetDispatchMaxSpawnDistance();
}
/**
 * No comment provided
 *
 * Hash: 0x96498D922D8D0D0A | Since: 1207
 */
export function resetDispatchMinSpawnDistance() {
    ResetDispatchMinSpawnDistance();
}
/**
 * Used in CAIConditionAmbientAIMemoryReactionsEnabled
 *
 * Hash: 0x6AC4AF46A6B8DFB2 | Since: 1207
 */
export function setAiMemoryReactionsEnabled(enabled) {
    SetAiMemoryReactionsEnabled(enabled);
}
/**
 * Similar to SET_BIT but specifically designed for large (>32 flags) bit flag sets.
 * The flags are stored in an int array where each int has the ability to hold 32 flags.
 * Flags 0-31 would be stored in the first int, flags 32-63 in the second int, etc.
 *
 * Hash: 0xE84AAC1B22A73E99 | Since: 1207
 */
export function setBitFlag(flag) {
    return SetBitFlag(flag);
}
/**
 * No comment provided
 *
 * Hash: 0x89314FB3463E28DE | Since: 1207
 */
export function setDispatchMaxSpawnDistance(maxSpawnDistance) {
    SetDispatchMaxSpawnDistance(maxSpawnDistance);
}
/**
 * No comment provided
 *
 * Hash: 0x27A1B170AA8AF84C | Since: 1207
 */
export function setDispatchMinSpawnDistance(minSpawnDistance) {
    SetDispatchMinSpawnDistance(minSpawnDistance);
}
/**
 * Note: this native was added in build 1232.56
 *
 * Hash: 0x550F05CFFBD63C8C | Since: 1232
 */
export function setGameLogicPaused() {
    SetGameLogicPaused();
}
/**
 * No comment provided
 *
 * Hash: 0xE97240065406CB80 | Since: 1207
 */
export function setGlobalBlockIsLoaded(index, toggle) {
    SetGlobalBlockIsLoaded(index, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x9617B6E5F6537B63 | Since: 1207
 */
export function setIncidentUnk(incidentId) {
    SetIncidentUnk(incidentId);
}
/**
 * No comment provided
 *
 * Hash: 0x9B47971234169990 | Since: 1207
 */
export function setLootPeltSatchelItem(ped, item) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetLootPeltSatchelItem(_ped, item);
}
/**
 * No comment provided
 *
 * Hash: 0xBE83CAE8ED77A94F | Since: 1207
 */
export function setOverrideWeather(weatherType) {
    if (typeof weatherType === 'string')
        weatherType = GetHashKey(weatherType);
    SetOverrideWeather(weatherType);
}
/**
 * No comment provided
 *
 * Hash: 0xF6BEE7E80EC5CA40 | Since: 1207
 */
export function setSnowLevel(level) {
    SetSnowLevel(level);
}
/**
 * No comment provided
 *
 * Hash: 0x2C6A07AF9AEDABD8 | Since: 1207
 */
export function setWeatherType2(weatherType) {
    if (typeof weatherType === 'string')
        weatherType = GetHashKey(weatherType);
    SetWeatherType2(weatherType, 0, 0, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0xD74ACDF7DB8114AF | Since: 1207
 */
export function setWeatherTypeFrozen(toggle) {
    SetWeatherTypeFrozen(toggle);
}
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/weather/weather_variations.lua
 *
 * Hash: 0x3373779BAF7CAF48 | Since: 1207
 */
export function setWeatherVariation() {
    return SetWeatherVariation();
}
/**
 * No comment provided
 *
 * Hash: 0x0177CF20345F44DD | Since: 1207
 */
export function shouldUse24HourClock() {
    return ShouldUse24HourClock();
}
/**
 * Same as SHOULD_USE_METRIC_MEASUREMENTS
 *
 * Hash: 0x58BCDC75BA52110A | Since: 1207
 */
export function shouldUseMetricMeasurements2() {
    return ShouldUseMetricMeasurements2();
}
/**
 * No comment provided
 *
 * Hash: 0xFF4AAF3275BAAB4F | Since: 1207
 */
export function shouldUseMetricTemperature() {
    return ShouldUseMetricTemperature();
}
/**
 * No comment provided
 *
 * Hash: 0x8F24157FEDB85EA2 | Since: 1207
 */
export function shouldUseMetricWeight() {
    return ShouldUseMetricWeight();
}
/**
 * Not officially named
 * , Counts the number of segments in a string that are separated by specified delimiter characters, ignoring consecutive delimiters.
 *
 * Hash: 0x94E8CA3DEE952789 | Since: 1207
 */
export function stringSplitAndCountSegments() {
    return Citizen.invokeNative('0x94E8CA3DEE952789');
}
