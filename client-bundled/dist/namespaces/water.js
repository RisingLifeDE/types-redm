import { IEntity, IPed } from '@risinglife/redm-shared';
/**
 * Creates a volume where water effects do not apply.
 * Useful for preventing water collisions from flooding areas underneath them.
 * This has no effect on waterquads, only water created from drawables and collisions.
 * Don't create volumes when your local ped is swimming (e.g. use IS_PED_SWIMMING in your scripts before you call this)
 *
 * Hash: 0xEB1C6DD | Since: unknown | API-Set: client
 */
export function createDryVolume(xMin, yMin, zMin, xMax, yMax, zMax) {
    return CreateDryVolume(xMin, yMin, zMin, xMax, yMax, zMax);
}
/**
 * No comment provided
 *
 * Hash: 0x14088095 | Since: unknown | API-Set: client
 */
export function getQuadAlpha(waterQuad) {
    return GetWaterQuadAlpha(waterQuad);
}
/**
 * This native returns the index of a water quad if the given point is inside its bounds.
 *
 * *If you also want to check for water level, check out [`GetWaterQuadAtCoords_3d`](#\_0xF8E03DB8)*
 *
 * Hash: 0x17321452 | Since: unknown | API-Set: client
 */
export function getQuadAtCoords(x, y) {
    return GetWaterQuadAtCoords(x, y);
}
/**
 * This alternative implementation of [`GetWaterQuadAtCoords`](#\_0x17321452) also checks the height of the water level.
 *
 * Hash: 0xF8E03DB8 | Since: unknown | API-Set: client
 */
export function getQuadAtCoords3d(pos) {
    return GetWaterQuadAtCoords3d(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x42E9A06A | Since: unknown | API-Set: client
 */
export function getQuadBounds(waterQuad) {
    return GetWaterQuadBounds(waterQuad);
}
/**
 * No comment provided
 *
 * Hash: 0xB1884159 | Since: unknown | API-Set: client
 */
export function getQuadCount() {
    return GetWaterQuadCount();
}
/**
 * No comment provided
 *
 * Hash: 0x22EA3BD8 | Since: unknown | API-Set: client
 */
export function getQuadHasLimitedDepth(waterQuad) {
    return GetWaterQuadHasLimitedDepth(waterQuad);
}
/**
 * No comment provided
 *
 * Hash: 0x1DEDBD77 | Since: unknown | API-Set: client
 */
export function getQuadIsInvisible(waterQuad) {
    return GetWaterQuadIsInvisible(waterQuad);
}
/**
 * *level is defined as "z" in water.xml*
 *
 * Hash: 0x6523816B | Since: unknown | API-Set: client
 */
export function getQuadLevel(waterQuad) {
    return GetWaterQuadLevel(waterQuad);
}
/**
 * No comment provided
 *
 * Hash: 0x6F4ACBA | Since: unknown | API-Set: client
 */
export function getQuadNoStencil(waterQuad) {
    return GetWaterQuadNoStencil(waterQuad);
}
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
export function getQuadType(waterQuad) {
    return GetWaterQuadType(waterQuad);
}
/**
 * No comment provided
 *
 * Hash: 0x865139A3 | Since: unknown | API-Set: client
 */
export function getWaveQuadAmplitude(waveQuad) {
    return GetWaveQuadAmplitude(waveQuad);
}
/**
 * This native returns the index of a wave quad if the given point is inside its bounds.
 *
 * Hash: 0x3F5A61A7 | Since: unknown | API-Set: client
 */
export function getWaveQuadAtCoords(x, y) {
    return GetWaveQuadAtCoords(x, y);
}
/**
 * No comment provided
 *
 * Hash: 0xF86136DB | Since: unknown | API-Set: client
 */
export function getWaveQuadBounds(waveQuad) {
    return GetWaveQuadBounds(waveQuad);
}
/**
 * No comment provided
 *
 * Hash: 0x9250C76 | Since: unknown | API-Set: client
 */
export function getWaveQuadCount() {
    return GetWaveQuadCount();
}
/**
 * No comment provided
 *
 * Hash: 0xCCE49A1C | Since: unknown | API-Set: client
 */
export function getWaveQuadDirection(waveQuad) {
    return GetWaveQuadDirection(waveQuad);
}
/**
 * Define the xml in a resources fxmanifest, under the file(s) section.
 *
 * Hash: 0xF5102568 | Since: unknown | API-Set: client
 */
export function loadFromPath(resourceName, fileName) {
    return LoadWaterFromPath(resourceName, fileName);
}
/**
 * Removes a dry volume from the game session.
 * See CREATE_DRY_VOLUME for more info
 *
 * Hash: 0x7BCAA6E7 | Since: unknown | API-Set: client
 */
export function removeDryVolume(handle) {
    RemoveDryVolume(handle);
}
/**
 * Resets the water to the games default water.xml.
 *
 * Hash: 0x1DA4791 | Since: unknown | API-Set: client
 */
export function reset() {
    ResetWater();
}
/**
 * Sets world clip boundaries for water quads file (water.xml, water_heistisland.xml)
 * Used internally by LOAD_GLOBAL_WATER_FILE
 *
 * Hash: 0x9FCD2EE6 | Since: unknown | API-Set: client
 */
export function setAreaClipRect(minX, minY, maxX, maxY) {
    SetWaterAreaClipRect(minX, minY, maxX, maxY);
}
/**
 * No comment provided
 *
 * Hash: 0xF49797EB | Since: unknown | API-Set: client
 */
export function setQuadAlpha(waterQuad, a0, a1, a2, a3) {
    return SetWaterQuadAlpha(waterQuad, a0, a1, a2, a3);
}
/**
 * This native allows you to update the bounds of a specified water quad index.
 *
 * Hash: 0x80AD144C | Since: unknown | API-Set: client
 */
export function setQuadBounds(waterQuad, minX, minY, maxX, maxY) {
    return SetWaterQuadBounds(waterQuad, minX, minY, maxX, maxY);
}
/**
 * No comment provided
 *
 * Hash: 0xD1FDCFC1 | Since: unknown | API-Set: client
 */
export function setQuadHasLimitedDepth(waterQuad, hasLimitedDepth) {
    return SetWaterQuadHasLimitedDepth(waterQuad, hasLimitedDepth);
}
/**
 * No comment provided
 *
 * Hash: 0xA387D917 | Since: unknown | API-Set: client
 */
export function setQuadIsInvisible(waterQuad, isInvisible) {
    return SetWaterQuadIsInvisible(waterQuad, isInvisible);
}
/**
 * No comment provided
 *
 * Hash: 0x6292F7A8 | Since: unknown | API-Set: client
 */
export function setQuadLevel(waterQuad, level) {
    return SetWaterQuadLevel(waterQuad, level);
}
/**
 * No comment provided
 *
 * Hash: 0xC3FF42FF | Since: unknown | API-Set: client
 */
export function setQuadNoStencil(waterQuad, noStencil) {
    return SetWaterQuadNoStencil(waterQuad, noStencil);
}
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
export function setQuadType(waterQuad, _type) {
    return SetWaterQuadType(waterQuad, _type);
}
/**
 * No comment provided
 *
 * Hash: 0xE4174B7B | Since: unknown | API-Set: client
 */
export function setWaveQuadAmplitude(waveQuad, amplitude) {
    return SetWaveQuadAmplitude(waveQuad, amplitude);
}
/**
 * This native allows you to update the bounds of a specified water quad index.
 *
 * Hash: 0x1FCC1FAF | Since: unknown | API-Set: client
 */
export function setWaveQuadBounds(waveQuad, minX, minY, maxX, maxY) {
    return SetWaveQuadBounds(waveQuad, minX, minY, maxX, maxY);
}
/**
 * directionX/Y should be constrained between -1.0 and 1.0
 * A positive value will create the wave starting at min and rolling towards max
 * A negative value will create the wave starting at max and rolling towards min
 * Applying both values allows you to make diagonal waves
 *
 * Hash: 0xFC9341A3 | Since: unknown | API-Set: client
 */
export function setWaveQuadDirection(waveQuad, directionX, directionY) {
    return SetWaveQuadDirection(waveQuad, directionX, directionY);
}
/**
 * Must be called every frame to take full effect.
 *
 * Hash: 0x754616EC6965D1FB | Since: 1207 | API-Set: unknown
 */
export function disableLookup() {
    DisableWaterLookup();
}
/**
 * No comment provided
 *
 * Hash: 0x754616EC6965D1BF | Since: 1207 | API-Set: unknown
 */
export function enableLookup() {
    EnableWaterLookup();
}
/**
 * Checks against a global variable that is set by _SET_WORLD_WATER_TYPE. If that is set to one it will fail. Likely not the only issue but part of it.
 *
 * Hash: 0xFCA8B23F28813F69 | Since: 1207 | API-Set: unknown
 */
export function getHeight(pos) {
    return GetWaterHeight(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xDCF3690AA262C03F | Since: 1207 | API-Set: unknown
 */
export function getHeightNoWaves(pos) {
    return GetWaterHeightNoWaves(pos.x, pos.y, pos.z);
}
/**
 * Only used in rcm_crackpot1 R* Script: p0 = 0
 *
 * Hash: 0x4BEF8DD75AF6C71C | Since: 1207 | API-Set: unknown
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
 * Hash: 0x8974647ED222EA5F | Since: 1207 | API-Set: unknown
 */
export function testProbeAgainstAll(x1, y1, z1, x2, y2, z2, flags) {
    return TestProbeAgainstAllWater(x1, y1, z1, x2, y2, z2, flags);
}
/**
 * Checks against a global variable that is set by _SET_WORLD_WATER_TYPE. If it's set to 1 (Guarma) it will fail.
 *
 * See TEST_PROBE_AGAINST_ALL_WATER.
 *
 * Hash: 0x2B3451FA1E3142E2 | Since: 1207 | API-Set: unknown
 */
export function testVerticalProbeAgainstAll(pos, flags) {
    return TestVerticalProbeAgainstAllWater(pos.x, pos.y, pos.z, flags);
}
/**
 * Called together with REMOVE_EXTRA_CALMING_QUAD in rcm_crackpot1 R* Script: p0 = 0
 * _REMOVE_*
 *
 * Hash: 0x09A1C7DFDCE54FBC | Since: 1207 | API-Set: unknown
 */
export function _0x09A1C7DFDCE54FBC() {
    Citizen.invokeNative('0x09A1C7DFDCE54FBC', 0);
}
/**
 * Only used in native_son1 R* Script: p1 = 1
 *
 * Hash: 0x0DCEC6A92E497E17 | Since: 1207 | API-Set: unknown
 */
export function _0x0DCEC6A92E497E17(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x0DCEC6A92E497E17', _entity, 0);
}
/**
 * Only used in fishing_core R* Script
 *
 * Hash: 0xA33F5069B0CB89B8 | Since: 1207 | API-Set: unknown
 */
export function _0xA33F5069B0CB89B8() {
    Citizen.invokeNative('0xA33F5069B0CB89B8');
}
/**
 * Used in bounty1, fanale3, sean1 R* Scripts
 *
 * Hash: 0xB34A6009A0DB80B8 | Since: 1207 | API-Set: unknown
 */
export function _0xB34A6009A0DB80B8(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xB34A6009A0DB80B8', _entity);
}
/**
 * Only used in fussar1 / train_robbery2 R* Script
 *
 * Hash: 0xE8126623008372AA | Since: 1207 | API-Set: unknown
 */
export function _0xE8126623008372AA() {
    Citizen.invokeNative('0xE8126623008372AA');
}
/**
 * Only used in fishing_core R* Script
 *
 * Hash: 0xF0FBF193F1F5C0EA | Since: 1207 | API-Set: unknown
 */
export function _0xF0FBF193F1F5C0EA(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xF0FBF193F1F5C0EA', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x189739A7631C1867 | Since: 1207 | API-Set: unknown
 */
export function getWorldType() {
    return GetWorldWaterType();
}
/**
 * Only used in guama1 / guama3 R* Script
 * _REQUEST_* or _RESET_*
 *
 * Hash: 0xC63540AEF8384769 | Since: 1207 | API-Set: unknown
 */
export function resetGuarmaState() {
    ResetGuarmaWaterState();
}
/**
 * Only used in R* Script guama1 this native allows to modify the ocean water in the guarma island. wave direction accepts 0, 1 and 2 values.
 *
 * Hash: 0xC63540AEF8384732 | Since: 1207 | API-Set: unknown
 */
export function setOceanGuarmaQuadrant(wavesHeight, waveDirection, waveAmmount, waveSpeed, wavesStrength, ignoreHeight) {
    SetOceanGuarmaWaterQuadrant(wavesHeight, 0, waveDirection, 0, waveAmmount, 0, waveSpeed, wavesStrength, ignoreHeight);
}
/**
 * 0 = World
 * 1 = Guarma
 *
 * Hash: 0xE8770EE02AEE45C2 | Since: 1207 | API-Set: unknown
 */
export function setWorldType(waterType) {
    SetWorldWaterType(waterType);
}
