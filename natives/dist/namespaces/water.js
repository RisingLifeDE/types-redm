import { IEntity, IPed } from '@risinglife/redm-shared';
/**
 * Must be called every frame to take full effect.
 *
 * Hash: 0x754616EC6965D1FB | Since: 1207
 */
export function disableLookup() {
    DisableWaterLookup();
}
/**
 * No comment provided
 *
 * Hash: 0x754616EC6965D1BF | Since: 1207
 */
export function enableLookup() {
    EnableWaterLookup();
}
/**
 * Checks against a global variable that is set by _SET_WORLD_WATER_TYPE. If that is set to one it will fail. Likely not the only issue but part of it.
 *
 * Hash: 0xFCA8B23F28813F69 | Since: 1207
 */
export function getHeight(pos) {
    return GetWaterHeight(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xDCF3690AA262C03F | Since: 1207
 */
export function getHeightNoWaves(pos) {
    return GetWaterHeightNoWaves(pos.x, pos.y, pos.z);
}
/**
 * Only used in rcm_crackpot1 R* Script: p0 = 0
 *
 * Hash: 0x4BEF8DD75AF6C71C | Since: 1207
 */
export function removeExtraCalmingQuad(index) {
    RemoveExtraCalmingQuad(index);
}
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
export function testProbeAgainstAll(x1, y1, z1, x2, y2, z2, flags) {
    return TestProbeAgainstAllWater(x1, y1, z1, x2, y2, z2, flags);
}
/**
 * Checks against a global variable that is set by _SET_WORLD_WATER_TYPE. If it's set to 1 (Guarma) it will fail.
 *
 * See TEST_PROBE_AGAINST_ALL_WATER.
 *
 * Hash: 0x2B3451FA1E3142E2 | Since: 1207
 */
export function testVerticalProbeAgainstAll(pos, flags) {
    return TestVerticalProbeAgainstAllWater(pos.x, pos.y, pos.z, flags);
}
/**
 * Called together with REMOVE_EXTRA_CALMING_QUAD in rcm_crackpot1 R* Script: p0 = 0
 * _REMOVE_*
 *
 * Hash: 0x09A1C7DFDCE54FBC | Since: 1207
 */
export function _0x09A1C7DFDCE54FBC() {
    Citizen.invokeNative('0x09A1C7DFDCE54FBC', 0);
}
/**
 * Only used in native_son1 R* Script: p1 = 1
 *
 * Hash: 0x0DCEC6A92E497E17 | Since: 1207
 */
export function _0x0DCEC6A92E497E17(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x0DCEC6A92E497E17', _entity, 0);
}
/**
 * Only used in fishing_core R* Script
 *
 * Hash: 0xA33F5069B0CB89B8 | Since: 1207
 */
export function _0xA33F5069B0CB89B8() {
    Citizen.invokeNative('0xA33F5069B0CB89B8');
}
/**
 * Used in bounty1, fanale3, sean1 R* Scripts
 *
 * Hash: 0xB34A6009A0DB80B8 | Since: 1207
 */
export function _0xB34A6009A0DB80B8(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xB34A6009A0DB80B8', _entity);
}
/**
 * Only used in fussar1 / train_robbery2 R* Script
 *
 * Hash: 0xE8126623008372AA | Since: 1207
 */
export function _0xE8126623008372AA() {
    Citizen.invokeNative('0xE8126623008372AA');
}
/**
 * Only used in fishing_core R* Script
 *
 * Hash: 0xF0FBF193F1F5C0EA | Since: 1207
 */
export function _0xF0FBF193F1F5C0EA(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xF0FBF193F1F5C0EA', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x189739A7631C1867 | Since: 1207
 */
export function getWorldType() {
    return GetWorldWaterType();
}
/**
 * Only used in guama1 / guama3 R* Script
 * _REQUEST_* or _RESET_*
 *
 * Hash: 0xC63540AEF8384769 | Since: 1207
 */
export function resetGuarmaState() {
    ResetGuarmaWaterState();
}
/**
 * Only used in R* Script guama1 this native allows to modify the ocean water in the guarma island. wave direction accepts 0, 1 and 2 values.
 *
 * Hash: 0xC63540AEF8384732 | Since: 1207
 */
export function setOceanGuarmaQuadrant(wavesHeight, waveDirection, waveAmmount, waveSpeed, wavesStrength, ignoreHeight) {
    SetOceanGuarmaWaterQuadrant(wavesHeight, 0, waveDirection, 0, waveAmmount, 0, waveSpeed, wavesStrength, ignoreHeight);
}
/**
 * 0 = World
 * 1 = Guarma
 *
 * Hash: 0xE8770EE02AEE45C2 | Since: 1207
 */
export function setWorldType(waterType) {
    SetWorldWaterType(waterType);
}
