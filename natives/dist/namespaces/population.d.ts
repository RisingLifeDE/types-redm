import { Vector3, IPed } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x217A54DE2D200305 | Since: 1207
 */
export declare function clearSpawnerInfoPriority(p0: number | string, p1: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xC6DCC2A3A8825C85 | Since: 1207
 */
export declare function disableAmbientRoad(unk: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xBC90BDF4E5228EA1 | Since: 1207
 */
export declare function enableAmbientRoad(): void;
/**
 * No comment provided
 *
 * Hash: 0xA1E3171ED0E47564 | Since: 1207
 */
export declare function getNumModelsInSet(popSetHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x3EAFA1C533B7139E | Since: 1207
 */
export declare function getPedModelNameInSet(popSetHash: number | string, index: number): number;
/**
 * No comment provided
 *
 * Hash: 0x6B12ED8C77E8567B | Since: 1207
 */
export declare function getRandomModelFromSet(popSetHash: number | string, flags: number, p2: number | string, pos: Vector3): number;
/**
 * No comment provided
 *
 * Hash: 0x3E6A49D9B519E85C | Since: 1207
 */
export declare function setPopzoneSet(popZone: any, populationSetHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x60CDE717A6D47769 | Since: 1207
 */
export declare function setSpawnerInfoPriority(p0: number | string, p1: number | string, priority: number): void;
/**
 * No comment provided
 *
 * Hash: 0x08892122769770D5 | Since: 1207
 */
export declare function _0x08892122769770D5(popZone: any): void;
/**
 * No comment provided
 *
 * Hash: 0x0F1861101C9A9944 | Since: 1207
 */
export declare function _0x0F1861101C9A9944(popZone: any): void;
/**
 * No comment provided
 *
 * Hash: 0x2161278C6322F740 | Since: 1207
 */
export declare function _0x2161278C6322F740(includeFlags: number, excludeFlags: number, p3: number | string, volume: number): void;
/**
 * No comment provided
 *
 * Hash: 0x247F86595D396344 | Since: 1207
 */
export declare function _0x247F86595D396344(): void;
/**
 * No comment provided
 *
 * Hash: 0x2660E7720EDC4BD0 | Since: 1311
 */
export declare function _0x2660E7720EDC4BD0(): void;
/**
 * No comment provided
 *
 * Hash: 0x324AB2A68AD8AEE5 | Since: 1207
 */
export declare function _0x324AB2A68AD8AEE5(): void;
/**
 * No comment provided
 *
 * Hash: 0x578E2FA64E847C60 | Since: 1207
 */
export declare function _0x578E2FA64E847C60(popZone: any): void;
/**
 * No comment provided
 *
 * Hash: 0x638FCFC6042A9473 | Since: 1207
 */
export declare function _0x638FCFC6042A9473(): void;
/**
 * No comment provided
 *
 * Hash: 0x7E6BC0B94F5928F0 | Since: 1207
 */
export declare function _0x7E6BC0B94F5928F0(popZone: any): void;
/**
 * No comment provided
 *
 * Hash: 0x8EC7CD701F872F87 | Since: 1207
 */
export declare function _0x8EC7CD701F872F87(): void;
/**
 * No comment provided
 *
 * Hash: 0xC4533E3E87125C9E | Since: 1207
 */
export declare function _0xC4533E3E87125C9E(): void;
/**
 * No comment provided
 *
 * Hash: 0xDBBF12EA7C1029B2 | Since: 1207
 */
export declare function _0xDBBF12EA7C1029B2(): void;
/**
 * Only used for Special Event (XMAS).
 * _SET_P*
 *
 * Hash: 0xEC116EDB683AD479 | Since: 1207
 */
export declare function _0xEC116EDB683AD479(): void;
/**
 * No comment provided
 *
 * Hash: 0xF45E46DEECF7DF6E | Since: 1207
 */
export declare function _0xF45E46DEECF7DF6E(bitFlag: number): void;
/**
 * flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/PedFilterFlags
 *
 * Hash: 0xB56D41A694E42E86 | Since: 1207
 */
export declare function addAmbientAvoidanceRestriction(volume: number, includeFlags: number, excludeFlags: number, p3: number | string, p4: number | string, p5: number | string): void;
/**
 * flags: see 0xB56D41A694E42E86
 *
 * Hash: 0x18262CAFEBB5FBE1 | Since: 1207
 */
export declare function addAmbientSpawnRestriction(volume: number, includeFlags: number, excludeFlags: number, p3: number | string, p4: number | string, p5: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x9AC1C64FE46B6D09 | Since: 1207
 */
export declare function createPopzoneFromVolume(volume: number): any;
/**
 * No comment provided
 *
 * Hash: 0xA6E6A66FC4CA4224 | Since: 1207
 */
export declare function deleteScriptPopzone(popZone: any): void;
/**
 * Returns model hash of the closest fish
 *
 * Hash: 0x595478B3BBC3076D | Since: 1207
 */
export declare function getRandomFishTypeForLocation(): number;
/**
 * No comment provided
 *
 * Hash: 0xA5BD585005EFCAD4 | Since: 1207
 */
export declare function isPopzoneValid(popZone: any): boolean;
/**
 * flags: see 0xB56D41A694E42E86
 *
 * Hash: 0x74C2B3DC0B294102 | Since: 1207
 */
export declare function removeAmbientAvoidanceRestriction(volume: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA1CFB35069D23C23 | Since: 1207
 */
export declare function removeAmbientSpawnRestriction(volume: number): void;
/**
 * Params: p1 = 1 & 2 in R* Scripts, 0 = Disable avoidance, 1 = Enabled avoidance, 2 = Enabled avoidance (?)
 *
 * Hash: 0xF74E134F40192884 | Since: 1207
 */
export declare function setPedShouldIgnoreAvoidanceVolumes(ped: number | IPed): void;
