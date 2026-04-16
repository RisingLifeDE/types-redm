import { Vector3, IEntity, IPed, IPlayer } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x134549B388167CBF | Since: 1207
 */
export declare function absf(value: number): number;
/**
 * No comment provided
 *
 * Hash: 0x0C214D5B8A38C828 | Since: 1207
 */
export declare function absi(value: number): number;
/**
 * No comment provided
 *
 * Hash: 0x586690F0176DC575 | Since: 1207
 */
export declare function acos(): number;
/**
 * Appears to remove stealth kill action from memory (?)
 *
 * Hash: 0x7ACF124C12A2B045 | Since: 1207
 */
export declare function actionManagerEnableAction(hash: number | string, enable: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xFD0759658268FD8E | Since: 1207
 */
export declare function actionManagerIsActionEnabled(hash: number | string): boolean;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x91D657230BC208D2 | Since: 1207
 */
export declare function activityFeedActionStartWithCommandLine(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x1694A053DFB61A34 | Since: 1207
 */
export declare function activityFeedActionStartWithCommandLineAdd(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x9935F76407C32539 | Since: 1207
 */
export declare function activityFeedAddSubstringToCaption(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xCC7FC854B956A128 | Since: 1207
 */
export declare function activityFeedCreate(): [string, string];
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xB16FC7B364D86585 | Since: 1207
 */
export declare function activityFeedPost(): void;
/**
 * No comment provided
 *
 * Hash: 0x5EBDA1A3B8CB5EF7 | Since: 1207
 */
export declare function addPopMultiplierArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, pedDensity: number, trafficDensity: number): number;
/**
 * Params: p3 is 0 in R* Script utopia2
 *
 * Hash: 0xE4EE55E63FA9AF45 | Since: 1207
 */
export declare function addTacticalNavMeshPoint(pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xD3852F22AB713A1F | Since: 1207
 */
export declare function areStringsEqual(): [boolean, string, string];
/**
 * No comment provided
 *
 * Hash: 0x6E3C15D296C15583 | Since: 1207
 */
export declare function asin(): number;
/**
 * No comment provided
 *
 * Hash: 0x503054DED0B78027 | Since: 1207
 */
export declare function atan(): number;
/**
 * No comment provided
 *
 * Hash: 0x965B220A066E3F07 | Since: 1207
 */
export declare function atan2(): number;
/**
 * dispatchService: see ENABLE_DISPATCH_SERVICE
 *
 * Hash: 0x66947E61A44DE2C6 | Since: 1207
 */
export declare function blockDispatchServiceResourceCreation(dispatchService: number, toggle: boolean): void;
/**
 * Old name: _CANCEL_ONSCREEN_KEYBOARD
 *
 * Hash: 0x58A39BE597CE99CD | Since: 1207
 */
export declare function cancelOnscreenKeyboard(): void;
/**
 * No comment provided
 *
 * Hash: 0xA4D83115C1E02F8A | Since: 1207
 */
export declare function clearAngledAreaOfVehicles(): void;
/**
 * Possible flag names:
 * ALL_BASE = 0,
 * PROJECTILES = 1,
 * BROADCAST = 524288,
 * AMBIENT_POPULATION = 1048576
 *
 * Hash: 0x3B882A96EA77D5B1 | Since: 1207
 */
export declare function clearArea(pos: Vector3, radius: number, flag: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7D1D4A3602B6AD4E | Since: 1207
 */
export declare function clearBit(offset: number): number;
/**
 * No comment provided
 *
 * Hash: 0x80A398F16FFE3CC3 | Since: 1207
 */
export declare function clearOverrideWeather(): void;
/**
 * No comment provided
 *
 * Hash: 0xD93B6516C6878267 | Since: 1207
 */
export declare function clearTacticalNavMeshPoints(): void;
/**
 * No comment provided
 *
 * Hash: 0xD85DFE5C131E4AE9 | Since: 1207
 */
export declare function clearWeatherTypePersist(): void;
/**
 * No comment provided
 *
 * Hash: 0xBFBB74A15EFC149B | Since: 1207
 */
export declare function compareStrings(matchCase: boolean, maxLength: number): [number, string, string];
/**
 * Old name: _COPY_MEMORY
 *
 * Hash: 0xF7AC7DC0DEE7C9BE | Since: 1207
 */
export declare function copyScriptStruct(size: number): [any, any];
/**
 * dispatchService: see ENABLE_DISPATCH_SERVICE
 *
 * Hash: 0x3F892CAF67444AE7 | Since: 1207
 */
export declare function createIncident(dispatchService: number, pos: Vector3, numUnits: number, radius: number): [boolean, number];
/**
 * Delete an incident with a given id.
 *
 * Hash: 0x5CFD0F0D6AAE0AEE | Since: 1207
 */
export declare function deleteIncident(incidentId: number): void;
/**
 * disables prompt eat
 *
 * Hash: 0x40D72189F46D2E15 | Since: 1207
 */
export declare function disableLootingCompositeLootableThisFrame(compositeId: number, disable: boolean): void;
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
export declare function displayOnscreenKeyboard(textType: number, maxInputLength: number): [string, string, string, string, string, string];
/**
 * No comment provided
 *
 * Hash: 0x03BA619C81A646B3 | Since: 1207
 */
export declare function doesPopMultiplierAreaExist(id: number): boolean;
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
export declare function enableDispatchService(dispatchService: number, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xCBC9A21F6A2A679C | Since: 1207
 */
export declare function fireSingleBullet(): any;
/**
 * creates single lightning+thunder at random position
 *
 * Hash: 0x369DB5B2510FA080 | Since: 1207
 */
export declare function forceLightningFlash(): void;
/**
 * No comment provided
 *
 * Hash: 0x4CABE596D632E4B0 | Since: 1207
 */
export declare function gameFrameworkManagerInit(transitionMode: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD0DFE1C486097BBB | Since: 1207
 */
export declare function getAngleBetween2dVectors(x1: number, y1: number, x2: number, y2: number): number;
/**
 * Returns value of the '-benchmarkIterations' command line option.
 *
 * Old name: _GET_BENCHMARK_ITERATIONS_FROM_COMMAND_LINE
 *
 * Hash: 0x22FC52CF470CC98D | Since: 1207
 */
export declare function getBenchmarkIterations(): number;
/**
 * Returns value of the '-benchmarkPass' command line option.
 *
 * Old name: _GET_BENCHMARK_PASS_FROM_COMMAND_LINE
 *
 * Hash: 0x9297DACF3A2CDFF7 | Since: 1207
 */
export declare function getBenchmarkPass(): number;
/**
 * No comment provided
 *
 * Hash: 0x68E1352AF48F905D | Since: 1207
 */
export declare function getBitsInRange(_var: number, rangeStart: number, rangeEnd: number): number;
/**
 * No comment provided
 *
 * Hash: 0x83ACC65D9ACEC5EF | Since: 1207
 */
export declare function getClosestPointOnLine(): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xD73C960A681052DF | Since: 1207
 */
export declare function getCoordsOfProjectileTypeWithinDistance(ped: number | IPed, weaponHash: number | string, distance: number, mustBeOwnedByThisPed: boolean): [boolean, Vector3];
/**
 * Params: percentWeather2: 0f - 0.75f in R* Scripts
 *
 * Old name: _GET_WEATHER_TYPE_TRANSITION
 *
 * Hash: 0x0AC679B2342F14F2 | Since: 1207
 */
export declare function getCurrWeatherState(): [number, number, number];
/**
 * If useZ is false, only the 2D plane (X-Y) will be considered for calculating the distance.
 *
 * `Consider using this faster native instead: BUILTIN::VDIST - DVIST always takes in consideration the 3D coordinates.`
 *
 * Hash: 0x0BE7F4E3CDBAFB28 | Since: 1207
 */
export declare function getDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0x77DFA958FCF100C1 | Since: 1207
 */
export declare function getFrameCount(): number;
/**
 * No comment provided
 *
 * Hash: 0x5E72022914CE3C38 | Since: 1207
 */
export declare function getFrameTime(): number;
/**
 * No comment provided
 *
 * Hash: 0x4F67E8ECA7D3F667 | Since: 1207
 */
export declare function getGameTimer(): number;
/**
 * No comment provided
 *
 * Hash: 0x2A29CA9A6319E6AB | Since: 1207
 */
export declare function getGroundZAndNormalFor3dCoord(pos: Vector3): [boolean, number, Vector3];
/**
 * No comment provided
 *
 * Hash: 0x24FA4267BB8D2431 | Since: 1207
 */
export declare function getGroundZFor3dCoord(pos: Vector3): [boolean, number];
/**
 * Computes a hash for the given string. It is hashed using Jenkins' One-at-a-Time hash algorithm (https://en.wikipedia.org/wiki/Jenkins_hash_function)
 * Note: this implementation is case-insensitive.
 *
 * Hash: 0xFD340785ADF8CFB7 | Since: 1207
 */
export declare function getHashKey(): [number, string];
/**
 * dx = x1 - x2
 * dy = y1 - y2
 *
 * Hash: 0x38D5202FF9271C62 | Since: 1207
 */
export declare function getHeadingFromVector2d(dx: number, dy: number): number;
/**
 * No comment provided
 *
 * Hash: 0xAB6A04CEC428258B | Since: 1207
 */
export declare function getLinePlaneIntersection(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xB15CD1CF58771DE1 | Since: 1207
 */
export declare function getMissionFlag(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDCB8DDD5D054A7E7 | Since: 1207
 */
export declare function getModelDimensions(modelHash: number | string): [Vector3, Vector3];
/**
 * No comment provided
 *
 * Hash: 0x40DC2907A9697EF7 | Since: 1207
 */
export declare function getNumberOfFreeStacksOfThisSize(stackSize: number): number;
/**
 * No comment provided
 *
 * Hash: 0xB0CE5E5ED8BB3581 | Since: 1207
 */
export declare function getNumberOfMicrosecondsSinceLastCall(): number;
/**
 * Returns NULL unless UPDATE_ONSCREEN_KEYBOARD() returns 1 in the same tick.
 *
 * Hash: 0xAFB4CF58A4A292B1 | Since: 1207
 */
export declare function getOnscreenKeyboardResult(): string;
/**
 * No comment provided
 *
 * Hash: 0x9578986A6105A6AD | Since: 1207
 */
export declare function getProjectileOfProjectileTypeWithinDistance(ped: number | IPed, weaponHash: number | string, distance: number, mustBeOwnedByThisPed: boolean): [boolean, Vector3, number];
/**
 * No comment provided
 *
 * Hash: 0x931B5F4CC130224B | Since: 1207
 */
export declare function getRainLevel(): number;
/**
 * No comment provided
 *
 * Hash: 0x924D54E5698AE3E0 | Since: 1207
 */
export declare function getRandomEventFlag(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE29F927A961F8AAA | Since: 1207
 */
export declare function getRandomFloatInRange(startRange: number, endRange: number): number;
/**
 * No comment provided
 *
 * Hash: 0xD53343AA4FB7DD28 | Since: 1207
 */
export declare function getRandomIntInRange(startRange: number, endRange: number): number;
/**
 * Returns GET_GAME_TIMER() / 1000
 * Only used in rcm_pearson1.ysc
 *
 * Hash: 0x2E036F0480B8BF02 | Since: 1207
 */
export declare function getRealWorldTime(): number;
/**
 * No comment provided
 *
 * Hash: 0x63219768C586667C | Since: 1207
 */
export declare function getScriptTimeWithinFrameInMicroseconds(): number;
/**
 * No comment provided
 *
 * Hash: 0x1E5D727041BE1709 | Since: 1207
 */
export declare function getSnowLevel(): number;
/**
 * No comment provided
 *
 * Hash: 0xBE7F225417E35A7C | Since: 1207
 */
export declare function getSystemTime(): number;
/**
 * Old name: _GET_BENCHMARK_TIME
 *
 * Hash: 0x3F3172FEAE3AFE1C | Since: 1207
 */
export declare function getSystemTimeStep(): number;
/**
 * No comment provided
 *
 * Hash: 0xF703E82F3FE14A5F | Since: 1207
 */
export declare function getWindDirection(): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xFFB7E74E041150A4 | Since: 1207
 */
export declare function getWindSpeed(): number;
/**
 * p3 - possibly radius?
 *
 * Hash: 0xC153E5BCCF411814 | Since: 1207
 */
export declare function hasBulletImpactedInArea(pos: Vector3): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3B6A4C05FB2B33AC | Since: 1207
 */
export declare function hasBulletImpactedInBox(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6C9FF40FF1B69F8F | Since: 1207
 */
export declare function ignoreNextRestart(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x708DF841B8F27AA2 | Since: 1207
 */
export declare function informCodeOfContentIdOfCurrentUgcMission(): void;
/**
 * No comment provided
 *
 * Hash: 0x4ED6CFDFE8D4131A | Since: 1207
 */
export declare function isBitSet(address: number, offset: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9D09D8493747CF02 | Since: 1207
 */
export declare function isBulletInAngledArea(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC652FD308772D79E | Since: 1207
 */
export declare function isBulletInArea(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC128137C52152741 | Since: 1207
 */
export declare function isBulletInBox(): boolean;
/**
 * Hardcoded to return false.
 * Checks for XBOXONE Game Build.
 *
 * Hash: 0xD1CCC2A2639D325F | Since: 1207
 */
export declare function isDurangoVersion(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF9E7DBB39080640B | Since: 1207
 */
export declare function isGameSessionStateMachineIdle(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x39F2B1BAD412246A | Since: 1207
 */
export declare function isIncidentValid(incidentId: number): boolean;
/**
 * magdemo = magazine demo, i. e. for magazines such as IGN, pre play phases to prepare articles etc. - example 2012 builds for V
 * Hardcoded to return false.
 *
 * Hash: 0x5FC9357C26DAEFCE | Since: 1207
 */
export declare function isMagDemo1Active(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF4D8BCD052E7EA1B | Since: 1207
 */
export declare function isMinigameInProgress(): boolean;
/**
 * Hardcoded to return false.
 * Checks for PS4 Game Build.
 *
 * Hash: 0x88CFAE250D3E0C71 | Since: 1207
 */
export declare function isOrbisVersion(): boolean;
/**
 * Hardcoded to return true.
 *
 * Hash: 0xB0FB6CFAA5A1C833 | Since: 1207
 */
export declare function isPcVersion(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x825CA3ED43831015 | Since: 1207
 */
export declare function isPositionOccupied(pos: Vector3, range: number): boolean;
/**
 * Determines whether there is a projectile within the specified coordinates. The coordinates form a rectangle.
 *
 * ownedByPlayer = only projectiles fired by the player will be detected.
 *
 * Hash: 0x05B0061EFDFC8941 | Since: 1207
 */
export declare function isProjectileInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x928431F4133CD3D4 | Since: 1207
 */
export declare function isProjectileTypeInAngledArea(): boolean;
/**
 * Determines whether there is a projectile of a specific type within the specified coordinates. The coordinates form a rectangle.
 *
 * Hash: 0x04965FB9E14235C7 | Since: 1207
 */
export declare function isProjectileTypeInArea(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, weaponType: number | string, isPlayer: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF51C9BAAD9ED64C4 | Since: 1207
 */
export declare function isProjectileTypeWithinDistance(): boolean;
/**
 * Hardcoded to return false.
 *
 * Hash: 0x268AB8420A9E4ED7 | Since: 1207
 */
export declare function isStadiaVersion(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x602102324604D96B | Since: 1207
 */
export declare function isStringNull(_string: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2CF12F9ACF18F048 | Since: 1207
 */
export declare function isStringNullOrEmpty(_string: string): boolean;
/**
 * Returns true if the entire string consists only of space characters.
 *
 * Hash: 0x375F5870A7B8BEC1 | Since: 1207
 */
export declare function isStringNullOrEmptyOrSpaces(_string: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3D0EAC6385DD6100 | Since: 1207
 */
export declare function networkSetScriptIsSafeForNetworkGame(): void;
/**
 * No comment provided
 *
 * Hash: 0x5CB71EAA1429A358 | Since: 1207
 */
export declare function nextOnscreenKeyboardResultWillDisplayUsingTheseFonts(fontBitField: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB2C69E11A37B5AF0 | Since: 1207
 */
export declare function overrideSaveHouse(override: boolean, pos: Vector3, heading: number, isAutosave: boolean): [boolean, Vector3, number];
/**
 * No comment provided
 *
 * Hash: 0x66AB6B6C7E72F393 | Since: 1207
 */
export declare function pauseDeathArrestRestart(toggle: boolean): void;
/**
 * spawns a few distant/out-of-sight peds, vehicles, animals etc each time it is called
 *
 * Hash: 0xEA6DC3A8ADD2005F | Since: 1207
 */
export declare function populateNow(): void;
/**
 * p3 is usually the same value of radius
 * p8 determines whether the ILO prompt is a lock on prompt with RMB
 *
 * Hash: 0x870708A6E147A9AD | Since: 1207
 */
export declare function registerInteractionLockonPrompt(entity: number | IEntity, text: string, radius: number, flag: number, prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x49F751F6868DDC5B | Since: 1207
 */
export declare function removeDispatchSpawnBlockingArea(): void;
/**
 * No comment provided
 *
 * Hash: 0x88CB484364EFB37A | Since: 1207
 */
export declare function removePopMultiplierArea(id: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC7817264BC4B6377 | Since: 1207
 */
export declare function resetDispatchIdealSpawnDistance(): void;
/**
 * Begins with RESET_*. Next character in the name is either D or E.
 *
 * Old name: _RESET_BENCHMARK_RECORDING
 *
 * Hash: 0xECBABD0307FB216F | Since: 1207
 */
export declare function resetEndUserBenchmark(): void;
/**
 * No comment provided
 *
 * Hash: 0x1411A7CBC3A6EB7B | Since: 1207
 */
export declare function resetScriptTimeWithinFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0xEF42F56F69877125 | Since: 1207
 */
export declare function resetWantedResponseNumPedsToSpawn(): void;
/**
 * Saves the benchmark recording to %USERPROFILE%\Documents\Rockstar Games\Red Dead Redemption 2\Benchmarks and submits some metrics.
 *
 * Old name: _SAVE_BENCHMARK_RECORDING
 *
 * Hash: 0xF4743E2ECC02B3DA | Since: 1207
 */
export declare function saveEndUserBenchmark(): void;
/**
 * No comment provided
 *
 * Hash: 0x769E848C66E3C2BB | Since: 1207
 */
export declare function scriptRaceGetPlayerSplitTime(): [boolean, any, any];
/**
 * No comment provided
 *
 * Hash: 0x8AE059F47158417E | Since: 1207
 */
export declare function scriptRaceInit(numCheckpoints: number, numLaps: number, numPlayers: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBA62B4D80FA66BD6 | Since: 1207
 */
export declare function scriptRacePlayerHitCheckpoint(part: number, checkpoint: number, lap: number, time: number): void;
/**
 * No comment provided
 *
 * Hash: 0x334CE0DA4FAF330C | Since: 1207
 */
export declare function scriptRaceShutdown(): void;
/**
 * No comment provided
 *
 * Hash: 0xF73FBE4845C43B5B | Since: 1207
 */
export declare function setBit(offset: number): number;
/**
 * No comment provided
 *
 * Hash: 0x324DC1CEF57F31E6 | Since: 1207
 */
export declare function setBitsInRange(rangeStart: number, rangeEnd: number): number;
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
export declare function setCheatActive(cheatId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD37BECF862DA726F | Since: 1207
 */
export declare function setCreditsActive(toggle: boolean): void;
/**
 * Params: BOOL p3 is always true
 *
 * Old name: _SET_WEATHER_TYPE_TRANSITION
 *
 * Hash: 0xFA3E3CA8A1DE6D5D | Since: 1207
 */
export declare function setCurrWeatherState(weatherType1: number | string, weatherType2: number | string, percentWeather2: number, enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xEAB6823B82FBD283 | Since: 1207
 */
export declare function setDispatchIdealSpawnDistance(fIdealSpawnDistance: number): void;
/**
 * Sets whether the game should fade in after the player dies or is arrested.
 *
 * Hash: 0xDF3B5846DE5904AF | Since: 1207
 */
export declare function setFadeInAfterDeathArrest(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xAC806C4CAB973517 | Since: 1207
 */
export declare function setFadeInAfterLoad(toggle: boolean): void;
/**
 * Make sure to call this from the correct thread if you're using multiple threads because all other threads except the one which is calling SET_GAME_PAUSED will be paused.
 *
 * Hash: 0xFAEC088D28B1DE4A | Since: 1207
 */
export declare function setGamePaused(toggle: boolean): void;
/**
 * If true, the player can't save the game.
 *
 * Hash: 0x36694B456BE80D0A | Since: 1207
 */
export declare function setMissionFlag(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x674B90BE1115846D | Since: 1207
 */
export declare function setPedDecomposed(ped: number | IPed, toggle: boolean): void;
/**
 * Old name: _SET_RAIN_LEVEL
 *
 * Hash: 0x193DFC0526830FD6 | Since: 1207
 */
export declare function setRain(intensity: number): void;
/**
 * If the parameter is true, sets the random event flag to true, if the parameter is false, the function does nothing at all.
 * Does nothing if the mission flag is set.
 *
 * Hash: 0xB1ADCCC4150C6473 | Since: 1207
 */
export declare function setRandomEventFlag(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x5CD7A49104AFCB6B | Since: 1207
 */
export declare function setRandomSeed(seed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6E5A7FBEECAB3C72 | Since: 1207
 */
export declare function setRandomWeatherType(): void;
/**
 * No comment provided
 *
 * Hash: 0xB3E9BE963F10C445 | Since: 1207
 */
export declare function setSuperJumpThisFrame(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x3215376E79F6EA18 | Since: 1207
 */
export declare function setThisScriptCanBePaused(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8ABD939C2E5D00ED | Since: 1207
 */
export declare function setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean): void;
/**
 * Maximum value is 1.0f
 * At a value of 0.0f the game will still run at a minimum time scale.
 *
 * Hash: 0x9682AF6050854856 | Since: 1207
 */
export declare function setTimeScale(timeScale: number): void;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/weather/weather_types.lua
 *
 * Hash: 0x59174F1AFE095B5A | Since: 1207
 */
export declare function setWeatherType(weatherType: number | string, transition: boolean, transitionTime: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB56C4F5F57A45600 | Since: 1207
 */
export declare function setWindDirection(direction: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD00C2D82DC04A99F | Since: 1207
 */
export declare function setWindSpeed(speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x867654CBC7606F2C | Since: 1207
 */
export declare function shootSingleBulletBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, weaponHash: number | string, ownerPed: number | IPed, isAudible: boolean, isInvisible: boolean, speed: number): void;
/**
 * Returns whether the game's measurement system is set to metric.
 *
 * Hash: 0x4FB556ACEFA93098 | Since: 1207
 */
export declare function shouldUseMetricMeasurements(): boolean;
/**
 * Begins with START_*. Next character in the name is either D or E.
 *
 * Old name: _START_BENCHMARK_RECORDING
 *
 * Hash: 0x29D1F6DF864A094E | Since: 1207
 */
export declare function startEndUserBenchmark(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xA565FAC215CBC77D | Since: 1207
 */
export declare function stopCurrentLoadingProgressTimer(): void;
/**
 * Begins with STOP_*. Next character in the name is either D or E.
 *
 * Old name: _STOP_BENCHMARK_RECORDING
 *
 * Hash: 0xB89AEC71AFF2B599 | Since: 1207
 */
export declare function stopEndUserBenchmark(): void;
/**
 * Returns false if it's a null or empty string or if the string is too long. outInteger will be set to -999 in that case.
 *
 * Hash: 0xF2DD2298B3AF23E2 | Since: 1207
 */
export declare function stringToInt(_string: string): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x8C13DB96497B7ABF | Since: 1207
 */
export declare function tan(): number;
/**
 * Hardcoded to return false.
 *
 * Old name: _UI_IS_SINGLEPLAYER_PAUSE_MENU_ACTIVE
 *
 * Hash: 0x4FFA0386A6216113 | Since: 1207
 */
export declare function uiStartedEndUserBenchmark(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE98D55C5983F2509 | Since: 1207
 */
export declare function unregisterInteractionLockonPrompt(entity: number | IEntity): boolean;
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
export declare function updateOnscreenKeyboard(): number;
/**
 * Note: The first bit in 'flags' must not be set.
 * It is also required to pass at least one extra argument (this must be a text label string or hash).
 * When passing a hash, flags should be 0.
 *
 * Hash: 0xFA925AC00EB830B9 | Since: 1207
 */
export declare function varString(flags: number, ...params: string[]): string;
/**
 * Only used in smuggler2 script
 *
 * Hash: 0xF06C5B66DE20B2B8 | Since: 1207
 */
export declare function waterOverrideSetOceanwavemaxamplitude(maxAmplitude: number): void;
/**
 * Only used in smuggler2 script
 *
 * Hash: 0x55123D5A7D9D3C42 | Since: 1207
 */
export declare function waterOverrideSetShorewaveamplitude(amplitude: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0358B8A41916C613 | Since: 1207
 */
export declare function _0x0358B8A41916C613(): any;
/**
 * No comment provided
 *
 * Hash: 0x0730E518486DEEC3 | Since: 1207
 */
export declare function _0x0730E518486DEEC3(): void;
/**
 * No comment provided
 *
 * Hash: 0x0A487CC74A517FB5 | Since: 1207
 */
export declare function _0x0A487CC74A517FB5(): void;
/**
 * No comment provided
 *
 * Hash: 0x0D0AE5081F88CFE1 | Since: 1207
 */
export declare function _0x0D0AE5081F88CFE1(p0: number | string): boolean;
/**
 * _SET_MISSION_NAME_*(FOR_ACTIVITY?/MINIGAME?)
 *
 * Hash: 0x1096603B519C905F | Since: 1207
 */
export declare function _0x1096603B519C905F(name: string): void;
/**
 * No comment provided
 *
 * Hash: 0x154340E87D8CC178 | Since: 1207
 */
export declare function _0x154340E87D8CC178(): void;
/**
 * No comment provided
 *
 * Hash: 0x183672FE838A661B | Since: 1207
 */
export declare function _0x183672FE838A661B(): any;
/**
 * No comment provided
 *
 * Hash: 0x243CEDE8F916B994 | Since: 1207
 */
export declare function _0x243CEDE8F916B994(): void;
/**
 * No comment provided
 *
 * Hash: 0x2916B30DC6C41179 | Since: 1207
 */
export declare function _0x2916B30DC6C41179(weatherType: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x33982467B1E349EF | Since: 1207
 */
export declare function _0x33982467B1E349EF(): any;
/**
 * No comment provided
 *
 * Hash: 0x35165C658077CD0B | Since: 1207
 */
export declare function _0x35165C658077CD0B(): any;
/**
 * No comment provided
 *
 * Hash: 0x38C0C9CAE1544500 | Since: 1207
 */
export declare function _0x38C0C9CAE1544500(p0: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x38C2BF94D15F464D | Since: 1207
 */
export declare function _0x38C2BF94D15F464D(): any;
/**
 * No comment provided
 *
 * Hash: 0x3A87FDA8F1B6CDFB | Since: 1207
 */
export declare function _0x3A87FDA8F1B6CDFB(): void;
/**
 * No comment provided
 *
 * Hash: 0x3C3C7B1B5EC08764 | Since: 1207
 */
export declare function _0x3C3C7B1B5EC08764(): void;
/**
 * No comment provided
 *
 * Hash: 0x4647842FE8F31C1E | Since: 1207
 */
export declare function _0x4647842FE8F31C1E(): void;
/**
 * No comment provided
 *
 * Hash: 0x49C44FE78A135A1D | Since: 1207
 */
export declare function _0x49C44FE78A135A1D(): void;
/**
 * No comment provided
 *
 * Hash: 0x49F3241C28EBBFBC | Since: 1207
 */
export declare function _0x49F3241C28EBBFBC(): void;
/**
 * No comment provided
 *
 * Hash: 0x4B0501A468B749F8 | Since: 1207
 */
export declare function _0x4B0501A468B749F8(): void;
/**
 * No comment provided
 *
 * Hash: 0x4B101DBCC9482F2D | Since: 1207
 */
export declare function _0x4B101DBCC9482F2D(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4D5C9CC7E7E23E09 | Since: 1207
 */
export declare function _0x4D5C9CC7E7E23E09(): void;
/**
 * UPDATE_PICKUP_COLLECTIBLE: set Eagle Eye fountain
 * _J*, _K*, _L*
 *
 * Hash: 0x553D67295DDD2309 | Since: 1207
 */
export declare function _0x553D67295DDD2309(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x5801BE2DF2AF07EC | Since: 1207
 */
export declare function _0x5801BE2DF2AF07EC(): void;
/**
 * No comment provided
 *
 * Hash: 0x5B4A8121A47D844D | Since: 1207
 */
export declare function _0x5B4A8121A47D844D(): any;
/**
 * No comment provided
 *
 * Hash: 0x627B68D9CE6EE8DE | Since: 1207
 */
export declare function _0x627B68D9CE6EE8DE(): any;
/**
 * No comment provided
 *
 * Hash: 0x68319452C5064ABA | Since: 1207
 */
export declare function _0x68319452C5064ABA(): void;
/**
 * _SET_DISPATCH_*, unused
 *
 * Hash: 0x6BCF7B5CD338281A | Since: 1207
 */
export declare function _0x6BCF7B5CD338281A(): void;
/**
 * No comment provided
 *
 * Hash: 0x6BED40493A1AFDB8 | Since: 1207
 */
export declare function _0x6BED40493A1AFDB8(): any;
/**
 * No comment provided
 *
 * Hash: 0x6C7B68D3CE60E8DE | Since: 1207
 */
export declare function _0x6C7B68D3CE60E8DE(): any;
/**
 * No comment provided
 *
 * Hash: 0x6F02B5E50511721E | Since: 1207
 */
export declare function _0x6F02B5E50511721E(): any;
/**
 * No comment provided
 *
 * Hash: 0x745808BB01CEC6B9 | Since: 1207
 */
export declare function _0x745808BB01CEC6B9(): void;
/**
 * No comment provided
 *
 * Hash: 0x74ACA66484CEBAF0 | Since: 1207
 */
export declare function _0x74ACA66484CEBAF0(): void;
/**
 * No comment provided
 *
 * Hash: 0x7A76104CC2CC69E8 | Since: 1207
 */
export declare function _0x7A76104CC2CC69E8(entity: number | IEntity): any;
/**
 * No comment provided
 *
 * Hash: 0x7CF96F1250EF3221 | Since: 1207
 */
export declare function _0x7CF96F1250EF3221(): any;
/**
 * No comment provided
 *
 * Hash: 0x7FA58CED69405F9A | Since: 1207
 */
export declare function _0x7FA58CED69405F9A(): void;
/**
 * No comment provided
 *
 * Hash: 0x8314FC2013ECE2DA | Since: 1207
 */
export declare function _0x8314FC2013ECE2DA(): any;
/**
 * No comment provided
 *
 * Hash: 0x8BB99B85444544D9 | Since: 1207
 */
export declare function _0x8BB99B85444544D9(): any;
/**
 * No comment provided
 *
 * Hash: 0x8C0F6A3D7236DEEB | Since: 1207
 */
export declare function _0x8C0F6A3D7236DEEB(): void;
/**
 * No comment provided
 *
 * Hash: 0x8DB104CCEBCD58C5 | Since: 1207
 */
export declare function _0x8DB104CCEBCD58C5(): any;
/**
 * No comment provided
 *
 * Hash: 0x94FCADCF9F0C368E | Since: 1207
 */
export declare function _0x94FCADCF9F0C368E(): void;
/**
 * No comment provided
 *
 * Hash: 0x96282005C5C6801F | Since: 1311
 */
export declare function _0x96282005C5C6801F(): void;
/**
 * No comment provided
 *
 * Hash: 0x970339EFA4FDE518 | Since: 1207
 */
export declare function _0x970339EFA4FDE518(): any;
/**
 * No comment provided
 *
 * Hash: 0x9A252AA23D7098F2 | Since: 1207
 */
export declare function _0x9A252AA23D7098F2(): void;
/**
 * No comment provided
 *
 * Hash: 0x9BF2C0C568C61641 | Since: 1207
 */
export declare function _0x9BF2C0C568C61641(): void;
/**
 * _CLEAR*
 *
 * Hash: 0xA08111B053D84B4D | Since: 1207
 */
export declare function _0xA08111B053D84B4D(): void;
/**
 * No comment provided
 *
 * Hash: 0xA3A8926951471C82 | Since: 1207
 */
export declare function _0xA3A8926951471C82(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xA9342743B634A462 | Since: 1207
 */
export declare function _0xA9342743B634A462(): void;
/**
 * No comment provided
 *
 * Hash: 0xAB26DEEE120FD3FD | Since: 1207
 */
export declare function _0xAB26DEEE120FD3FD(): void;
/**
 * No comment provided
 *
 * Hash: 0xAD44856A1CD29635 | Since: 1207
 */
export declare function _0xAD44856A1CD29635(): void;
/**
 * No comment provided
 *
 * Hash: 0xAF3A84C7DE6A1DC5 | Since: 1207
 */
export declare function _0xAF3A84C7DE6A1DC5(): void;
/**
 * Hardcoded to return one/true.
 *
 * Hash: 0xAF530E56505D1BD6 | Since: 1207
 */
export declare function _0xAF530E56505D1BD6(): any;
/**
 * No comment provided
 *
 * Hash: 0xB08C4FA25BC29DB9 | Since: 1207
 */
export declare function _0xB08C4FA25BC29DB9(): void;
/**
 * No comment provided
 *
 * Hash: 0xB1F6665AA54DCD5C | Since: 1207
 */
export declare function _0xB1F6665AA54DCD5C(p0: number | string): any;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xB711EB4BC8D06013 | Since: 1207
 */
export declare function _0xB711EB4BC8D06013(): void;
/**
 * No comment provided
 *
 * Hash: 0xBB282CF5D2333FB8 | Since: 1207
 */
export declare function _0xBB282CF5D2333FB8(): void;
/**
 * No comment provided
 *
 * Hash: 0xCC1BAF72D571DB8D | Since: 1207
 */
export declare function _0xCC1BAF72D571DB8D(): any;
/**
 * No comment provided
 *
 * Hash: 0xCC3EDC5614B03F61 | Since: 1207
 */
export declare function _0xCC3EDC5614B03F61(): void;
/**
 * No comment provided
 *
 * Hash: 0xD3F943B88F55376A | Since: 1207
 */
export declare function _0xD3F943B88F55376A(weatherType: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xDA4D8EB04E8E2928 | Since: 1207
 */
export declare function _0xDA4D8EB04E8E2928(): void;
/**
 * No comment provided
 *
 * Hash: 0xDBDA48EC456ED908 | Since: 1436
 */
export declare function _0xDBDA48EC456ED908(): void;
/**
 * Hardcoded to return one/true.
 *
 * Hash: 0xDC057B86FC157031 | Since: 1207
 */
export declare function _0xDC057B86FC157031(): any;
/**
 * No comment provided
 *
 * Hash: 0xDC416CA762BC4F43 | Since: 1207
 */
export declare function _0xDC416CA762BC4F43(): any;
/**
 * No comment provided
 *
 * Hash: 0xDE2C3B74D2B3705C | Since: 1207
 */
export declare function _0xDE2C3B74D2B3705C(): void;
/**
 * Not implemented.
 *
 * Hash: 0xEB946B9E579729AD | Since: 1207
 */
export declare function _0xEB946B9E579729AD(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xF569E33FB72ED28E | Since: 1207
 */
export declare function _0xF569E33FB72ED28E(): void;
/**
 * No comment provided
 *
 * Hash: 0xF63FA29D4A9ACA86 | Since: 1207
 */
export declare function _0xF63FA29D4A9ACA86(): void;
/**
 * No comment provided
 *
 * Hash: 0xF650DCF5D6F312C1 | Since: 1232
 */
export declare function _0xF650DCF5D6F312C1(): void;
/**
 * No comment provided
 *
 * Hash: 0xF81C53561D15F330 | Since: 1207
 */
export declare function _0xF81C53561D15F330(): string;
/**
 * No comment provided
 *
 * Hash: 0xFC6ECB9170145ECE | Since: 1207
 */
export declare function _0xFC6ECB9170145ECE(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xFF252E2BAFB7330F | Since: 1207
 */
export declare function _0xFF252E2BAFB7330F(): void;
/**
 * No comment provided
 *
 * Hash: 0xA2D5A26208421426 | Since: 1207
 */
export declare function addDispatchSpawnBlockingArea(volume: number): any;
/**
 * Only used in script function PROCESS_ZONE_CREATION
 * Returns Pop multiplier volume ID
 *
 * Hash: 0x3233C4EC0514C7EC | Since: 1207
 */
export declare function addPopMultiplierVolume(volume: number, pedDensity: number, vehicleDensity: number): number;
/**
 * No comment provided
 *
 * Hash: 0xD2D74F89DF844A50 | Since: 1207
 */
export declare function clearAllBitFlags(): any;
/**
 * No comment provided
 *
 * Hash: 0xB909149F2BB5F6DA | Since: 1207
 */
export declare function clearBitFlag(flag: number): any;
/**
 * No comment provided
 *
 * Hash: 0x2FCD528A397E5C88 | Since: 1207
 */
export declare function clearVolumeArea(volume: number, flag: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCE7690C0A0D1C36D | Since: 1207
 */
export declare function clearWeatherTypePersistOvertime(milliseconds: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0E71C80FA4EC8147 | Since: 1207
 */
export declare function clearWeatherVariation(weatherType: string): void;
/**
 * No comment provided
 *
 * Hash: 0xE704838F36F93B7B | Since: 1355
 */
export declare function countBitFlags(): [number, any];
/**
 * aiMemoryType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/_CREATE_AI_MEMORY
 *
 * Hash: 0x88BC5F4AEF77FC4E | Since: 1207
 */
export declare function createAiMemory(aiMemoryType: number): any;
/**
 * Returns a formatted string (0x%x)
 *
 * Hash: 0xBCC2CFADEA1AEA6C | Since: 1207
 */
export declare function createColorString(rgb: number): string;
/**
 * dispatchService: see ENABLE_DISPATCH_SERVICE
 *
 * The entities must be added to itemSet.
 *
 * Hash: 0xAB3D3F45436DB1D8 | Since: 1207
 */
export declare function createIncidentWithEntities(dispatchService: number, pos: Vector3, itemSet: any, radius: number): [boolean, number];
/**
 * disables composite Pick prompt
 *
 * Hash: 0x082C043C7AFC3747 | Since: 1207
 */
export declare function disableCompositePickPromptThisFrame(compositeId: number, disable: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xBDC6E364C9C78178 | Since: 1207
 */
export declare function doesItemHaveValidBase(item: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x39D6DACE323A20B6 | Since: 1207
 */
export declare function doesPopMultiplierAreaExistForVolume(volume: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9382D5D43D2AA6FF | Since: 1207
 */
export declare function doesStringExistInString(): [boolean, string, string];
/**
 * p3 is always -1.0f in the scripts
 *
 * Hash: 0x67943537D179597C | Since: 1207
 */
export declare function forceLightningFlashAtCoords(pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xFAED234C7F53ABEB | Since: 1207
 */
export declare function gameFrameworkManagerGetMode(): number;
/**
 * No comment provided
 *
 * Hash: 0xAFF2FD8ADD927585 | Since: 1207
 */
export declare function gameFrameworkManagerShutdown(): void;
/**
 * No comment provided
 *
 * Hash: 0xFDF38E2B711BF78E | Since: 1207
 */
export declare function getAiPedDoesHaveEventMemory(): [boolean, any];
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
export declare function getEasingCurveValue(t: number, b: number, d: number, easingCurveType: number): number;
/**
 * No comment provided
 *
 * Hash: 0xEE04C0AFD4EFAF0E | Since: 1207
 */
export declare function getEntityFromItem(item: number): number;
/**
 * Returns the weather type that has been set by a script
 *
 * Hash: 0xDD560ABEF5D3784C | Since: 1207
 */
export declare function getForcedWeather(): [number, number];
/**
 * `Returns rage::fwTimer::sm_nonScaledClippedTime`
 *
 * Hash: 0x483B8C542103AD72 | Since: 1207
 */
export declare function getGameTimerNonScaledClipped(): number;
/**
 * Outputs the ground Z axis, its material and flags.Input flags are 17, 129 or 3423 in R* scripts.similar to flags of shapes test native
 *
 * Hash: 0xBBE5B63EFFB08E68 | Since: 1207
 */
export declare function getGroundZAndMaterialFor3dCoord(coords: any, flags: number): [boolean, number, number, number];
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
export declare function getItemType(handle: number): number;
/**
 * Event names in the scripts: MGBegin, MGEnd, ReadyForCut
 *
 * Hash: 0xF9B91C5129EABC08 | Since: 1207
 */
export declare function getLootingEventHasFired(ped: number | IPed): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xC43CD2668B204419 | Since: 1207
 */
export declare function getMaxNumInstructions(): number;
/**
 * No comment provided
 *
 * Hash: 0x51021D36F62AAA83 | Since: 1207
 */
export declare function getNextWeatherTypeHashName(): number;
/**
 * No comment provided
 *
 * Hash: 0x72904D3D62AF5839 | Since: 1207
 */
export declare function getNumberOfInstructions(): number;
/**
 * No comment provided
 *
 * Hash: 0x18013392501CE5DC | Since: 1207
 */
export declare function getObjectFromIndexedItem(item: number): number;
/**
 * No comment provided
 *
 * Hash: 0x3FFB15534067DCD4 | Since: 1207
 */
export declare function getPedFromIndexedItem(item: number): number;
/**
 * No comment provided
 *
 * Hash: 0x4BEB42AEBCA732E9 | Since: 1207
 */
export declare function getPrevWeatherTypeHashName(): number;
/**
 * No comment provided
 *
 * Hash: 0x1359C181BC625503 | Since: 1207
 */
export declare function getRandomWeatherType(): number;
/**
 * No comment provided
 *
 * Hash: 0x7F4CE164D9A11DFE | Since: 1207
 */
export declare function getRandomWeatherTypeIndex(): number;
/**
 * Only 0 and 1 are valid for p0, higher values causes the native to return 2.
 *
 * Hash: 0x1B065A2BF7953815 | Since: 1207
 */
export declare function getStatusOfSavegameOperation(): number;
/**
 * No comment provided
 *
 * Hash: 0xF216F74101968DB0 | Since: 1207
 */
export declare function getStringFromBool(value: boolean): string;
/**
 * No comment provided
 *
 * Hash: 0x2B6846401D68E563 | Since: 1207
 */
export declare function getStringFromFloat(value: number, digits: number): string;
/**
 * Returns a string in the following format: <<%.4f,%.4f,%.4f>>
 *
 * Hash: 0x6C4DBF553885F9EB | Since: 1207
 */
export declare function getStringFromVector(pos: Vector3): string;
/**
 * No comment provided
 *
 * Hash: 0xB98B78C3768AF6E0 | Since: 1207
 */
export declare function getTemperatureAtCoords(pos: Vector3): number;
/**
 * No comment provided
 *
 * Hash: 0xE578C8AE173719B3 | Since: 1207
 */
export declare function getVehicleFromIndexedItem(item: number): number;
/**
 * No comment provided
 *
 * Hash: 0xF18AF483DF70BBDE | Since: 1207
 */
export declare function getVolumeFromIndexedItem(item: number): number;
/**
 * Note: the buffer should be exactly 32 bytes long
 *
 * Hash: 0xCF11C0CEB40C401B | Since: 1207
 */
export declare function intToString(value: number, format: string): string;
/**
 * No comment provided
 *
 * Hash: 0x80E9C316EF84DD81 | Since: 1207
 */
export declare function isAnyBitFlagSet(): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xFEC1D4B5C82C176F | Since: 1207
 */
export declare function isBaseACoverPoint(handle: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x716F17F8A0419F95 | Since: 1207
 */
export declare function isBaseAPersistentCharacter(handle: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8F4F050054005C27 | Since: 1207
 */
export declare function isBitFlagSet(flag: number): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xACB7E1418A8B6E32 | Since: 1207
 */
export declare function isGlobalBlockValid(index: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF236C84C6ADFCB2F | Since: 1207
 */
export declare function isMissionCreatorActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5170DDA6D63ACAAA | Since: 1207
 */
export declare function isPedDecomposed(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x36040772DF5E59A0 | Since: 1355
 */
export declare function isPlayerOwningStandaloneSp(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x48E4D50F87A96AA5 | Since: 1207
 */
export declare function lootTablesGetInfo(ped: number | IPed, lootTableKey: number | string): any;
/**
 * p0 must be < 2
 *
 * Hash: 0x279B0696DA4657EB | Since: 1207
 */
export declare function queueSavegameOperation(): boolean;
/**
 * Reads the passed value as floating point value and returns it.
 * Example: _READ_INT_AS_FLOAT(0x3F800000) returns 1.0f because 0x3F800000 is the hexadecimal representation of 1.0f.
 *
 * Hash: 0xD2C9126410DFA1B2 | Since: 1207
 */
export declare function readIntAsFloat(value: number): number;
/**
 * No comment provided
 *
 * Hash: 0xBD090F5B1DB82189 | Since: 1207
 */
export declare function removePopMultiplierAreaForVolume(volume: number): void;
/**
 * No comment provided
 *
 * Hash: 0x54EC7B6BC72BAD69 | Since: 1207
 */
export declare function resetDispatchMaxSpawnDistance(): void;
/**
 * No comment provided
 *
 * Hash: 0x96498D922D8D0D0A | Since: 1207
 */
export declare function resetDispatchMinSpawnDistance(): void;
/**
 * Used in CAIConditionAmbientAIMemoryReactionsEnabled
 *
 * Hash: 0x6AC4AF46A6B8DFB2 | Since: 1207
 */
export declare function setAiMemoryReactionsEnabled(enabled: boolean): void;
/**
 * Similar to SET_BIT but specifically designed for large (>32 flags) bit flag sets.
 * The flags are stored in an int array where each int has the ability to hold 32 flags.
 * Flags 0-31 would be stored in the first int, flags 32-63 in the second int, etc.
 *
 * Hash: 0xE84AAC1B22A73E99 | Since: 1207
 */
export declare function setBitFlag(flag: number): any;
/**
 * No comment provided
 *
 * Hash: 0x89314FB3463E28DE | Since: 1207
 */
export declare function setDispatchMaxSpawnDistance(maxSpawnDistance: number): void;
/**
 * No comment provided
 *
 * Hash: 0x27A1B170AA8AF84C | Since: 1207
 */
export declare function setDispatchMinSpawnDistance(minSpawnDistance: number): void;
/**
 * Note: this native was added in build 1232.56
 *
 * Hash: 0x550F05CFFBD63C8C | Since: 1232
 */
export declare function setGameLogicPaused(): void;
/**
 * No comment provided
 *
 * Hash: 0xE97240065406CB80 | Since: 1207
 */
export declare function setGlobalBlockIsLoaded(index: number, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x9617B6E5F6537B63 | Since: 1207
 */
export declare function setIncidentUnk(incidentId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9B47971234169990 | Since: 1207
 */
export declare function setLootPeltSatchelItem(ped: number | IPed, item: any): void;
/**
 * No comment provided
 *
 * Hash: 0xBE83CAE8ED77A94F | Since: 1207
 */
export declare function setOverrideWeather(weatherType: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xF6BEE7E80EC5CA40 | Since: 1207
 */
export declare function setSnowLevel(level: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2C6A07AF9AEDABD8 | Since: 1207
 */
export declare function setWeatherType2(weatherType: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xD74ACDF7DB8114AF | Since: 1207
 */
export declare function setWeatherTypeFrozen(toggle: boolean): void;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/weather/weather_variations.lua
 *
 * Hash: 0x3373779BAF7CAF48 | Since: 1207
 */
export declare function setWeatherVariation(): [string, string];
/**
 * No comment provided
 *
 * Hash: 0x0177CF20345F44DD | Since: 1207
 */
export declare function shouldUse24HourClock(): boolean;
/**
 * Same as SHOULD_USE_METRIC_MEASUREMENTS
 *
 * Hash: 0x58BCDC75BA52110A | Since: 1207
 */
export declare function shouldUseMetricMeasurements2(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFF4AAF3275BAAB4F | Since: 1207
 */
export declare function shouldUseMetricTemperature(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8F24157FEDB85EA2 | Since: 1207
 */
export declare function shouldUseMetricWeight(): boolean;
/**
 * Not officially named
 * , Counts the number of segments in a string that are separated by specified delimiter characters, ignoring consecutive delimiters.
 *
 * Hash: 0x94E8CA3DEE952789 | Since: 1207
 */
export declare function stringSplitAndCountSegments(): [number, string, string];
