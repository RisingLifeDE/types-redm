import { IPed } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x217A54DE2D200305 | Since: 1207 | API-Set: unknown
 */
export function clearSpawnerInfoPriority(p0, p1) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    ClearSpawnerInfoPriority(p0, p1);
}
/**
 * No comment provided
 *
 * Hash: 0xC6DCC2A3A8825C85 | Since: 1207 | API-Set: unknown
 */
export function disableAmbientRoad(unk) {
    DisableAmbientRoadPopulation(unk);
}
/**
 * No comment provided
 *
 * Hash: 0xBC90BDF4E5228EA1 | Since: 1207 | API-Set: unknown
 */
export function enableAmbientRoad() {
    EnableAmbientRoadPopulation();
}
/**
 * No comment provided
 *
 * Hash: 0xA1E3171ED0E47564 | Since: 1207 | API-Set: unknown
 */
export function getNumModelsInSet(popSetHash) {
    if (typeof popSetHash === 'string')
        popSetHash = GetHashKey(popSetHash);
    return GetNumModelsInPopulationSet(popSetHash);
}
/**
 * No comment provided
 *
 * Hash: 0x3EAFA1C533B7139E | Since: 1207 | API-Set: unknown
 */
export function getPedModelNameInSet(popSetHash, index) {
    if (typeof popSetHash === 'string')
        popSetHash = GetHashKey(popSetHash);
    return GetPedModelNameInPopulationSet(popSetHash, index);
}
/**
 * No comment provided
 *
 * Hash: 0x6B12ED8C77E8567B | Since: 1207 | API-Set: unknown
 */
export function getRandomModelFromSet(popSetHash, flags, p2, pos) {
    if (typeof popSetHash === 'string')
        popSetHash = GetHashKey(popSetHash);
    if (typeof p2 === 'string')
        p2 = GetHashKey(p2);
    return GetRandomModelFromPopulationSet(popSetHash, flags, p2, false, false, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x3E6A49D9B519E85C | Since: 1207 | API-Set: unknown
 */
export function setPopzoneSet(popZone, populationSetHash) {
    if (typeof populationSetHash === 'string')
        populationSetHash = GetHashKey(populationSetHash);
    SetPopzonePopulationSet(popZone, populationSetHash);
}
/**
 * No comment provided
 *
 * Hash: 0x60CDE717A6D47769 | Since: 1207 | API-Set: unknown
 */
export function setSpawnerInfoPriority(p0, p1, priority) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    SetSpawnerInfoPriority(p0, p1, priority);
}
/**
 * No comment provided
 *
 * Hash: 0x08892122769770D5 | Since: 1207 | API-Set: unknown
 */
export function _0x08892122769770D5(popZone) {
    Citizen.invokeNative('0x08892122769770D5', popZone, false);
}
/**
 * No comment provided
 *
 * Hash: 0x0F1861101C9A9944 | Since: 1207 | API-Set: unknown
 */
export function _0x0F1861101C9A9944(popZone) {
    Citizen.invokeNative('0x0F1861101C9A9944', popZone, false);
}
/**
 * No comment provided
 *
 * Hash: 0x2161278C6322F740 | Since: 1207 | API-Set: unknown
 */
export function _0x2161278C6322F740(includeFlags, excludeFlags, p3, volume) {
    if (typeof p3 === 'string')
        p3 = GetHashKey(p3);
    Citizen.invokeNative('0x2161278C6322F740', includeFlags, excludeFlags, 0, p3, 0, volume);
}
/**
 * No comment provided
 *
 * Hash: 0x247F86595D396344 | Since: 1207 | API-Set: unknown
 */
export function _0x247F86595D396344() {
    Citizen.invokeNative('0x247F86595D396344', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2660E7720EDC4BD0 | Since: 1311 | API-Set: unknown
 */
export function _0x2660E7720EDC4BD0() {
    Citizen.invokeNative('0x2660E7720EDC4BD0', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x324AB2A68AD8AEE5 | Since: 1207 | API-Set: unknown
 */
export function _0x324AB2A68AD8AEE5() {
    Citizen.invokeNative('0x324AB2A68AD8AEE5');
}
/**
 * No comment provided
 *
 * Hash: 0x578E2FA64E847C60 | Since: 1207 | API-Set: unknown
 */
export function _0x578E2FA64E847C60(popZone) {
    Citizen.invokeNative('0x578E2FA64E847C60', popZone, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x638FCFC6042A9473 | Since: 1207 | API-Set: unknown
 */
export function _0x638FCFC6042A9473() {
    Citizen.invokeNative('0x638FCFC6042A9473', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7E6BC0B94F5928F0 | Since: 1207 | API-Set: unknown
 */
export function _0x7E6BC0B94F5928F0(popZone) {
    Citizen.invokeNative('0x7E6BC0B94F5928F0', popZone, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x8EC7CD701F872F87 | Since: 1207 | API-Set: unknown
 */
export function _0x8EC7CD701F872F87() {
    Citizen.invokeNative('0x8EC7CD701F872F87', undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC4533E3E87125C9E | Since: 1207 | API-Set: unknown
 */
export function _0xC4533E3E87125C9E() {
    Citizen.invokeNative('0xC4533E3E87125C9E', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDBBF12EA7C1029B2 | Since: 1207 | API-Set: unknown
 */
export function _0xDBBF12EA7C1029B2() {
    Citizen.invokeNative('0xDBBF12EA7C1029B2', undefined, undefined);
}
/**
 * Only used for Special Event (XMAS).
 * _SET_P*
 *
 * Hash: 0xEC116EDB683AD479 | Since: 1207 | API-Set: unknown
 */
export function _0xEC116EDB683AD479() {
    Citizen.invokeNative('0xEC116EDB683AD479', false);
}
/**
 * No comment provided
 *
 * Hash: 0xF45E46DEECF7DF6E | Since: 1207 | API-Set: unknown
 */
export function _0xF45E46DEECF7DF6E(bitFlag) {
    Citizen.invokeNative('0xF45E46DEECF7DF6E', bitFlag, undefined, undefined, undefined, undefined);
}
/**
 * flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/PedFilterFlags
 *
 * Hash: 0xB56D41A694E42E86 | Since: 1207 | API-Set: unknown
 */
export function addAmbientAvoidanceRestriction(volume, includeFlags, excludeFlags, p3, p4, p5) {
    if (typeof p3 === 'string')
        p3 = GetHashKey(p3);
    if (typeof p4 === 'string')
        p4 = GetHashKey(p4);
    if (typeof p5 === 'string')
        p5 = GetHashKey(p5);
    AddAmbientAvoidanceRestriction(volume, includeFlags, excludeFlags, p3, p4, p5, 0);
}
/**
 * flags: see 0xB56D41A694E42E86
 *
 * Hash: 0x18262CAFEBB5FBE1 | Since: 1207 | API-Set: unknown
 */
export function addAmbientSpawnRestriction(volume, includeFlags, excludeFlags, p3, p4, p5) {
    if (typeof p3 === 'string')
        p3 = GetHashKey(p3);
    if (typeof p4 === 'string')
        p4 = GetHashKey(p4);
    if (typeof p5 === 'string')
        p5 = GetHashKey(p5);
    AddAmbientSpawnRestriction(volume, includeFlags, excludeFlags, p3, p4, p5, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x9AC1C64FE46B6D09 | Since: 1207 | API-Set: unknown
 */
export function createPopzoneFromVolume(volume) {
    return CreatePopzoneFromVolume(volume);
}
/**
 * No comment provided
 *
 * Hash: 0xA6E6A66FC4CA4224 | Since: 1207 | API-Set: unknown
 */
export function deleteScriptPopzone(popZone) {
    DeleteScriptPopzone(popZone);
}
/**
 * Returns model hash of the closest fish
 *
 * Hash: 0x595478B3BBC3076D | Since: 1207 | API-Set: unknown
 */
export function getRandomFishTypeForLocation() {
    return GetRandomFishTypeForLocation();
}
/**
 * No comment provided
 *
 * Hash: 0xA5BD585005EFCAD4 | Since: 1207 | API-Set: unknown
 */
export function isPopzoneValid(popZone) {
    return IsPopzoneValid(popZone);
}
/**
 * flags: see 0xB56D41A694E42E86
 *
 * Hash: 0x74C2B3DC0B294102 | Since: 1207 | API-Set: unknown
 */
export function removeAmbientAvoidanceRestriction(volume) {
    RemoveAmbientAvoidanceRestriction(volume);
}
/**
 * No comment provided
 *
 * Hash: 0xA1CFB35069D23C23 | Since: 1207 | API-Set: unknown
 */
export function removeAmbientSpawnRestriction(volume) {
    RemoveAmbientSpawnRestriction(volume);
}
/**
 * Params: p1 = 1 & 2 in R* Scripts, 0 = Disable avoidance, 1 = Enabled avoidance, 2 = Enabled avoidance (?)
 *
 * Hash: 0xF74E134F40192884 | Since: 1207 | API-Set: unknown
 */
export function setPedShouldIgnoreAvoidanceVolumes(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedShouldIgnoreAvoidanceVolumes(_ped, 0);
}
