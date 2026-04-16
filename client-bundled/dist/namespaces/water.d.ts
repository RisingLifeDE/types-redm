import { Vector3, IEntity, IPed } from '@risinglife/redm-shared';
/**
 * Creates a volume where water effects do not apply.
 * Useful for preventing water collisions from flooding areas underneath them.
 * This has no effect on waterquads, only water created from drawables and collisions.
 * Don't create volumes when your local ped is swimming (e.g. use IS_PED_SWIMMING in your scripts before you call this)
 *
 * Hash: 0xEB1C6DD | Since: unknown | API-Set: client
 */
export declare function createDryVolume(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): number;
/**
 * No comment provided
 *
 * Hash: 0x14088095 | Since: unknown | API-Set: client
 */
export declare function getQuadAlpha(waterQuad: number): [boolean, number, number, number, number];
/**
 * This native returns the index of a water quad if the given point is inside its bounds.
 *
 * *If you also want to check for water level, check out [`GetWaterQuadAtCoords_3d`](#\_0xF8E03DB8)*
 *
 * Hash: 0x17321452 | Since: unknown | API-Set: client
 */
export declare function getQuadAtCoords(x: number, y: number): number;
/**
 * This alternative implementation of [`GetWaterQuadAtCoords`](#\_0x17321452) also checks the height of the water level.
 *
 * Hash: 0xF8E03DB8 | Since: unknown | API-Set: client
 */
export declare function getQuadAtCoords3d(pos: Vector3): number;
/**
 * No comment provided
 *
 * Hash: 0x42E9A06A | Since: unknown | API-Set: client
 */
export declare function getQuadBounds(waterQuad: number): [boolean, number, number, number, number];
/**
 * No comment provided
 *
 * Hash: 0xB1884159 | Since: unknown | API-Set: client
 */
export declare function getQuadCount(): number;
/**
 * No comment provided
 *
 * Hash: 0x22EA3BD8 | Since: unknown | API-Set: client
 */
export declare function getQuadHasLimitedDepth(waterQuad: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x1DEDBD77 | Since: unknown | API-Set: client
 */
export declare function getQuadIsInvisible(waterQuad: number): [boolean, number];
/**
 * *level is defined as "z" in water.xml*
 *
 * Hash: 0x6523816B | Since: unknown | API-Set: client
 */
export declare function getQuadLevel(waterQuad: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x6F4ACBA | Since: unknown | API-Set: client
 */
export declare function getQuadNoStencil(waterQuad: number): [boolean, number];
/**
 * Valid type definitions:
 *
 * *   **0** Square
 * *   **1** Right triangle where the 90 degree angle is at maxX, minY
 * *   **2** Right triangle where the 90 degree angle is at minX, minY
 * *   **3** Right triangle where the 90 degree angle is at minX, maxY
 * *   **4** Right triangle where the 90 degree angle is at maxY, maxY
 *
 * Hash: 0xE2501B8B | Since: unknown | API-Set: client
 */
export declare function getQuadType(waterQuad: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x865139A3 | Since: unknown | API-Set: client
 */
export declare function getWaveQuadAmplitude(waveQuad: number): [boolean, number];
/**
 * This native returns the index of a wave quad if the given point is inside its bounds.
 *
 * Hash: 0x3F5A61A7 | Since: unknown | API-Set: client
 */
export declare function getWaveQuadAtCoords(x: number, y: number): number;
/**
 * No comment provided
 *
 * Hash: 0xF86136DB | Since: unknown | API-Set: client
 */
export declare function getWaveQuadBounds(waveQuad: number): [boolean, number, number, number, number];
/**
 * No comment provided
 *
 * Hash: 0x9250C76 | Since: unknown | API-Set: client
 */
export declare function getWaveQuadCount(): number;
/**
 * No comment provided
 *
 * Hash: 0xCCE49A1C | Since: unknown | API-Set: client
 */
export declare function getWaveQuadDirection(waveQuad: number): [boolean, number, number];
/**
 * Define the xml in a resources fxmanifest, under the file(s) section.
 *
 * Hash: 0xF5102568 | Since: unknown | API-Set: client
 */
export declare function loadFromPath(resourceName: string, fileName: string): boolean;
/**
 * Removes a dry volume from the game session.
 * See CREATE_DRY_VOLUME for more info
 *
 * Hash: 0x7BCAA6E7 | Since: unknown | API-Set: client
 */
export declare function removeDryVolume(handle: number): void;
/**
 * Resets the water to the games default water.xml.
 *
 * Hash: 0x1DA4791 | Since: unknown | API-Set: client
 */
export declare function reset(): void;
/**
 * Sets world clip boundaries for water quads file (water.xml, water_heistisland.xml)
 * Used internally by LOAD_GLOBAL_WATER_FILE
 *
 * Hash: 0x9FCD2EE6 | Since: unknown | API-Set: client
 */
export declare function setAreaClipRect(minX: number, minY: number, maxX: number, maxY: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF49797EB | Since: unknown | API-Set: client
 */
export declare function setQuadAlpha(waterQuad: number, a0: number, a1: number, a2: number, a3: number): boolean;
/**
 * This native allows you to update the bounds of a specified water quad index.
 *
 * Hash: 0x80AD144C | Since: unknown | API-Set: client
 */
export declare function setQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD1FDCFC1 | Since: unknown | API-Set: client
 */
export declare function setQuadHasLimitedDepth(waterQuad: number, hasLimitedDepth: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA387D917 | Since: unknown | API-Set: client
 */
export declare function setQuadIsInvisible(waterQuad: number, isInvisible: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6292F7A8 | Since: unknown | API-Set: client
 */
export declare function setQuadLevel(waterQuad: number, level: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC3FF42FF | Since: unknown | API-Set: client
 */
export declare function setQuadNoStencil(waterQuad: number, noStencil: boolean): boolean;
/**
 * This native allows you to update the water quad type.
 *
 * Valid type definitions:
 *
 * *   **0** Square
 * *   **1** Right triangle where the 90 degree angle is at maxX, minY
 * *   **2** Right triangle where the 90 degree angle is at minX, minY
 * *   **3** Right triangle where the 90 degree angle is at minX, maxY
 * *   **4** Right triangle where the 90 degree angle is at maxY, maxY
 *
 * Hash: 0x50131EB2 | Since: unknown | API-Set: client
 */
export declare function setQuadType(waterQuad: number, _type: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE4174B7B | Since: unknown | API-Set: client
 */
export declare function setWaveQuadAmplitude(waveQuad: number, amplitude: number): boolean;
/**
 * This native allows you to update the bounds of a specified water quad index.
 *
 * Hash: 0x1FCC1FAF | Since: unknown | API-Set: client
 */
export declare function setWaveQuadBounds(waveQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean;
/**
 * directionX/Y should be constrained between -1.0 and 1.0
 * A positive value will create the wave starting at min and rolling towards max
 * A negative value will create the wave starting at max and rolling towards min
 * Applying both values allows you to make diagonal waves
 *
 * Hash: 0xFC9341A3 | Since: unknown | API-Set: client
 */
export declare function setWaveQuadDirection(waveQuad: number, directionX: number, directionY: number): boolean;
/**
 * Must be called every frame to take full effect.
 *
 * Hash: 0x754616EC6965D1FB | Since: 1207 | API-Set: unknown
 */
export declare function disableLookup(): void;
/**
 * No comment provided
 *
 * Hash: 0x754616EC6965D1BF | Since: 1207 | API-Set: unknown
 */
export declare function enableLookup(): void;
/**
 * Checks against a global variable that is set by _SET_WORLD_WATER_TYPE. If that is set to one it will fail. Likely not the only issue but part of it.
 *
 * Hash: 0xFCA8B23F28813F69 | Since: 1207 | API-Set: unknown
 */
export declare function getHeight(pos: Vector3): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xDCF3690AA262C03F | Since: 1207 | API-Set: unknown
 */
export declare function getHeightNoWaves(pos: Vector3): [boolean, number];
/**
 * Only used in rcm_crackpot1 R* Script: p0 = 0
 *
 * Hash: 0x4BEF8DD75AF6C71C | Since: 1207 | API-Set: unknown
 */
export declare function removeExtraCalmingQuad(index: number): void;
/**
 * enum eScriptWaterTestResult
 * {
 * SCRIPT_WATER_TEST_RESULT_NONE,
 * SCRIPT_WATER_TEST_RESULT_WATER,
 * SCRIPT_WATER_TEST_RESULT_BLOCKED,
 * };
 *
 * Hash: 0x8974647ED222EA5F | Since: 1207 | API-Set: unknown
 */
export declare function testProbeAgainstAll(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number): [number, Vector3];
/**
 * Checks against a global variable that is set by _SET_WORLD_WATER_TYPE. If it's set to 1 (Guarma) it will fail.
 *
 * See TEST_PROBE_AGAINST_ALL_WATER.
 *
 * Hash: 0x2B3451FA1E3142E2 | Since: 1207 | API-Set: unknown
 */
export declare function testVerticalProbeAgainstAll(pos: Vector3, flags: number): [number, number];
/**
 * Called together with REMOVE_EXTRA_CALMING_QUAD in rcm_crackpot1 R* Script: p0 = 0
 * _REMOVE_*
 *
 * Hash: 0x09A1C7DFDCE54FBC | Since: 1207 | API-Set: unknown
 */
export declare function _0x09A1C7DFDCE54FBC(): void;
/**
 * Only used in native_son1 R* Script: p1 = 1
 *
 * Hash: 0x0DCEC6A92E497E17 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0DCEC6A92E497E17(entity: number | IEntity): void;
/**
 * Only used in fishing_core R* Script
 *
 * Hash: 0xA33F5069B0CB89B8 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA33F5069B0CB89B8(): void;
/**
 * Used in bounty1, fanale3, sean1 R* Scripts
 *
 * Hash: 0xB34A6009A0DB80B8 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB34A6009A0DB80B8(entity: number | IEntity): void;
/**
 * Only used in fussar1 / train_robbery2 R* Script
 *
 * Hash: 0xE8126623008372AA | Since: 1207 | API-Set: unknown
 */
export declare function _0xE8126623008372AA(): void;
/**
 * Only used in fishing_core R* Script
 *
 * Hash: 0xF0FBF193F1F5C0EA | Since: 1207 | API-Set: unknown
 */
export declare function _0xF0FBF193F1F5C0EA(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x189739A7631C1867 | Since: 1207 | API-Set: unknown
 */
export declare function getWorldType(): number;
/**
 * Only used in guama1 / guama3 R* Script
 * _REQUEST_* or _RESET_*
 *
 * Hash: 0xC63540AEF8384769 | Since: 1207 | API-Set: unknown
 */
export declare function resetGuarmaState(): void;
/**
 * Only used in R* Script guama1 this native allows to modify the ocean water in the guarma island. wave direction accepts 0, 1 and 2 values.
 *
 * Hash: 0xC63540AEF8384732 | Since: 1207 | API-Set: unknown
 */
export declare function setOceanGuarmaQuadrant(wavesHeight: number, waveDirection: number, waveAmmount: number, waveSpeed: number, wavesStrength: number, ignoreHeight: number): void;
/**
 * 0 = World
 * 1 = Guarma
 *
 * Hash: 0xE8770EE02AEE45C2 | Since: 1207 | API-Set: unknown
 */
export declare function setWorldType(waterType: number): void;
