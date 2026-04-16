import { Vector3 } from '@risinglife/redm-shared';
/**
 * Rounds a float value up to the next whole number
 *
 * Hash: 0x11E019C8F43ACC8A | Since: 1207
 */
export declare function ceil(value: number): number;
/**
 * No comment provided
 *
 * Hash: 0xD0FFB162F40A139C | Since: 1207
 */
export declare function cos(value: number): number;
/**
 * Rounds a float value down to the next whole number
 *
 * Hash: 0xF34EE736CF047844 | Since: 1207
 */
export declare function floor(value: number): number;
/**
 * Old name: _LOG10
 *
 * Hash: 0xE816E655DE37FE20 | Since: 1232
 */
export declare function log10(value: number): number;
/**
 * No comment provided
 *
 * Hash: 0xE3621CC40F31FE2E | Since: 1207
 */
export declare function pow(base: number, exponent: number): number;
/**
 * No comment provided
 *
 * Hash: 0xF2DB717A73826179 | Since: 1207
 */
export declare function round(value: number): number;
/**
 * No comment provided
 *
 * Hash: 0xC1B1E9A034A63A62 | Since: 1207
 */
export declare function settimera(value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5AE11BC36633DE4E | Since: 1207
 */
export declare function settimerb(value: number): void;
/**
 * THREAD_PRIO_HIGHEST = 0
 * THREAD_PRIO_NORMAL = 1
 * THREAD_PRIO_LOWEST = 2
 * THREAD_PRIO_MANUAL_UPDATE = 100
 *
 * Hash: 0x42B65DEEF2EDF2A1 | Since: 1207
 */
export declare function setThisThreadPriority(priority: number): void;
/**
 * No comment provided
 *
 * Hash: 0xEDD95A39E5544DE8 | Since: 1207
 */
export declare function shiftLeft(value: number, bitShift: number): number;
/**
 * No comment provided
 *
 * Hash: 0x97EF1E5BCE9DC075 | Since: 1207
 */
export declare function shiftRight(value: number, bitShift: number): number;
/**
 * No comment provided
 *
 * Hash: 0x0BADBFA3B172435F | Since: 1207
 */
export declare function sin(value: number): number;
/**
 * No comment provided
 *
 * Hash: 0x71D93B57D07F9804 | Since: 1207
 */
export declare function sqrt(value: number): number;
/**
 * Counts up. Every 1000 is 1 real-time second. Use SETTIMERA(int value) to set the timer (e.g.: SETTIMERA(0)).
 *
 * Hash: 0x83666F9FB8FEBD4B | Since: 1207
 */
export declare function timera(): number;
/**
 * No comment provided
 *
 * Hash: 0xC9D9444186B5A374 | Since: 1207
 */
export declare function timerb(): number;
/**
 * Gets the current frame time.
 *
 * Hash: 0x0000000050597EE2 | Since: 1207
 */
export declare function timestep(): number;
/**
 * No comment provided
 *
 * Hash: 0xBBDA792448DB5A89 | Since: 1207
 */
export declare function toFloat(value: number): number;
/**
 * Calculates distance between vectors.
 * The value returned will be in meters.
 *
 * Hash: 0x2A488C176D52CCA5 | Since: 1207
 */
export declare function vdist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
/**
 * Calculates distance between vectors but does not perform Sqrt operations. (Its way faster)
 * The value returned will be in RAGE units.
 *
 * Hash: 0xB7A628320EFF8E47 | Since: 1207
 */
export declare function vdist2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
/**
 * Calculates the magnitude of a vector.
 *
 * Hash: 0x652D2EEEF1D3E62C | Since: 1207
 */
export declare function vmag(pos: Vector3): number;
/**
 * Calculates the magnitude of a vector but does not perform Sqrt operations. (Its way faster)
 *
 * Hash: 0xA8CEACB4F35AE058 | Since: 1207
 */
export declare function vmag2(pos: Vector3): number;
/**
 * No comment provided
 *
 * Hash: 0x4EDE34FBADD967A6 | Since: 1207
 */
export declare function wait(ms: number): void;
