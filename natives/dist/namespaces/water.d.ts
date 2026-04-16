import { Vector3, IEntity, IPed } from '@risinglife/redm-shared';
/**
 * Must be called every frame to take full effect.
 *
 * Hash: 0x754616EC6965D1FB | Since: 1207
 */
export declare function disableLookup(): void;
/**
 * No comment provided
 *
 * Hash: 0x754616EC6965D1BF | Since: 1207
 */
export declare function enableLookup(): void;
/**
 * Checks against a global variable that is set by _SET_WORLD_WATER_TYPE. If that is set to one it will fail. Likely not the only issue but part of it.
 *
 * Hash: 0xFCA8B23F28813F69 | Since: 1207
 */
export declare function getHeight(pos: Vector3): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xDCF3690AA262C03F | Since: 1207
 */
export declare function getHeightNoWaves(pos: Vector3): [boolean, number];
/**
 * Only used in rcm_crackpot1 R* Script: p0 = 0
 *
 * Hash: 0x4BEF8DD75AF6C71C | Since: 1207
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
 * Hash: 0x8974647ED222EA5F | Since: 1207
 */
export declare function testProbeAgainstAll(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number): [number, Vector3];
/**
 * Checks against a global variable that is set by _SET_WORLD_WATER_TYPE. If it's set to 1 (Guarma) it will fail.
 *
 * See TEST_PROBE_AGAINST_ALL_WATER.
 *
 * Hash: 0x2B3451FA1E3142E2 | Since: 1207
 */
export declare function testVerticalProbeAgainstAll(pos: Vector3, flags: number): [number, number];
/**
 * Called together with REMOVE_EXTRA_CALMING_QUAD in rcm_crackpot1 R* Script: p0 = 0
 * _REMOVE_*
 *
 * Hash: 0x09A1C7DFDCE54FBC | Since: 1207
 */
export declare function _0x09A1C7DFDCE54FBC(): void;
/**
 * Only used in native_son1 R* Script: p1 = 1
 *
 * Hash: 0x0DCEC6A92E497E17 | Since: 1207
 */
export declare function _0x0DCEC6A92E497E17(entity: number | IEntity): void;
/**
 * Only used in fishing_core R* Script
 *
 * Hash: 0xA33F5069B0CB89B8 | Since: 1207
 */
export declare function _0xA33F5069B0CB89B8(): void;
/**
 * Used in bounty1, fanale3, sean1 R* Scripts
 *
 * Hash: 0xB34A6009A0DB80B8 | Since: 1207
 */
export declare function _0xB34A6009A0DB80B8(entity: number | IEntity): void;
/**
 * Only used in fussar1 / train_robbery2 R* Script
 *
 * Hash: 0xE8126623008372AA | Since: 1207
 */
export declare function _0xE8126623008372AA(): void;
/**
 * Only used in fishing_core R* Script
 *
 * Hash: 0xF0FBF193F1F5C0EA | Since: 1207
 */
export declare function _0xF0FBF193F1F5C0EA(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x189739A7631C1867 | Since: 1207
 */
export declare function getWorldType(): number;
/**
 * Only used in guama1 / guama3 R* Script
 * _REQUEST_* or _RESET_*
 *
 * Hash: 0xC63540AEF8384769 | Since: 1207
 */
export declare function resetGuarmaState(): void;
/**
 * Only used in R* Script guama1 this native allows to modify the ocean water in the guarma island. wave direction accepts 0, 1 and 2 values.
 *
 * Hash: 0xC63540AEF8384732 | Since: 1207
 */
export declare function setOceanGuarmaQuadrant(wavesHeight: number, waveDirection: number, waveAmmount: number, waveSpeed: number, wavesStrength: number, ignoreHeight: number): void;
/**
 * 0 = World
 * 1 = Guarma
 *
 * Hash: 0xE8770EE02AEE45C2 | Since: 1207
 */
export declare function setWorldType(waterType: number): void;
