/**
 * Rounds a float value up to the next whole number
 *
 * Hash: 0x11E019C8F43ACC8A | Since: 1207 | API-Set: unknown
 */
export function ceil(value) {
    return Ceil(value);
}
/**
 * No comment provided
 *
 * Hash: 0xD0FFB162F40A139C | Since: 1207 | API-Set: unknown
 */
export function cos(value) {
    return Cos(value);
}
/**
 * Rounds a float value down to the next whole number
 *
 * Hash: 0xF34EE736CF047844 | Since: 1207 | API-Set: unknown
 */
export function floor(value) {
    return Floor(value);
}
/**
 * Old name: _LOG10
 *
 * Hash: 0xE816E655DE37FE20 | Since: 1232 | API-Set: unknown
 */
export function log10(value) {
    return Log10(value);
}
/**
 * No comment provided
 *
 * Hash: 0xE3621CC40F31FE2E | Since: 1207 | API-Set: unknown
 */
export function pow(base, exponent) {
    return Pow(base, exponent);
}
/**
 * No comment provided
 *
 * Hash: 0xF2DB717A73826179 | Since: 1207 | API-Set: unknown
 */
export function round(value) {
    return Round(value);
}
/**
 * No comment provided
 *
 * Hash: 0xC1B1E9A034A63A62 | Since: 1207 | API-Set: unknown
 */
export function settimera(value) {
    Settimera(value);
}
/**
 * No comment provided
 *
 * Hash: 0x5AE11BC36633DE4E | Since: 1207 | API-Set: unknown
 */
export function settimerb(value) {
    Settimerb(value);
}
/**
 * THREAD_PRIO_HIGHEST = 0
 * THREAD_PRIO_NORMAL = 1
 * THREAD_PRIO_LOWEST = 2
 * THREAD_PRIO_MANUAL_UPDATE = 100
 *
 * Hash: 0x42B65DEEF2EDF2A1 | Since: 1207 | API-Set: unknown
 */
export function setThisThreadPriority(priority) {
    SetThisThreadPriority(priority);
}
/**
 * No comment provided
 *
 * Hash: 0xEDD95A39E5544DE8 | Since: 1207 | API-Set: unknown
 */
export function shiftLeft(value, bitShift) {
    return ShiftLeft(value, bitShift);
}
/**
 * No comment provided
 *
 * Hash: 0x97EF1E5BCE9DC075 | Since: 1207 | API-Set: unknown
 */
export function shiftRight(value, bitShift) {
    return ShiftRight(value, bitShift);
}
/**
 * No comment provided
 *
 * Hash: 0x0BADBFA3B172435F | Since: 1207 | API-Set: unknown
 */
export function sin(value) {
    return Sin(value);
}
/**
 * No comment provided
 *
 * Hash: 0x71D93B57D07F9804 | Since: 1207 | API-Set: unknown
 */
export function sqrt(value) {
    return Sqrt(value);
}
/**
 * Counts up. Every 1000 is 1 real-time second. Use SETTIMERA(int value) to set the timer (e.g.: SETTIMERA(0)).
 *
 * Hash: 0x83666F9FB8FEBD4B | Since: 1207 | API-Set: unknown
 */
export function timera() {
    return Timera();
}
/**
 * No comment provided
 *
 * Hash: 0xC9D9444186B5A374 | Since: 1207 | API-Set: unknown
 */
export function timerb() {
    return Timerb();
}
/**
 * Gets the current frame time.
 *
 * Hash: 0x0000000050597EE2 | Since: 1207 | API-Set: unknown
 */
export function timestep() {
    return Timestep();
}
/**
 * No comment provided
 *
 * Hash: 0xBBDA792448DB5A89 | Since: 1207 | API-Set: unknown
 */
export function toFloat(value) {
    return ToFloat(value);
}
/**
 * Calculates distance between vectors.
 * The value returned will be in meters.
 *
 * Hash: 0x2A488C176D52CCA5 | Since: 1207 | API-Set: unknown
 */
export function vdist(x1, y1, z1, x2, y2, z2) {
    return Vdist(x1, y1, z1, x2, y2, z2);
}
/**
 * Calculates distance between vectors but does not perform Sqrt operations. (Its way faster)
 * The value returned will be in RAGE units.
 *
 * Hash: 0xB7A628320EFF8E47 | Since: 1207 | API-Set: unknown
 */
export function vdist2(x1, y1, z1, x2, y2, z2) {
    return Vdist2(x1, y1, z1, x2, y2, z2);
}
/**
 * Calculates the magnitude of a vector.
 *
 * Hash: 0x652D2EEEF1D3E62C | Since: 1207 | API-Set: unknown
 */
export function vmag(pos) {
    return Vmag(pos.x, pos.y, pos.z);
}
/**
 * Calculates the magnitude of a vector but does not perform Sqrt operations. (Its way faster)
 *
 * Hash: 0xA8CEACB4F35AE058 | Since: 1207 | API-Set: unknown
 */
export function vmag2(pos) {
    return Vmag2(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x4EDE34FBADD967A6 | Since: 1207 | API-Set: unknown
 */
export function wait(ms) {
    Wait(ms);
}
