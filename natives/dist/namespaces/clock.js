/**
 * No comment provided
 *
 * Hash: 0xAB7C251C7701D336 | Since: 1207
 */
export function addToTime(hours, minutes, seconds) {
    AddToClockTime(hours, minutes, seconds);
}
/**
 * No comment provided
 *
 * Hash: 0x0184750AE88D0B1D | Since: 1207
 */
export function advanceTimeTo(hour, minute, second) {
    AdvanceClockTimeTo(hour, minute, second);
}
/**
 * No comment provided
 *
 * Hash: 0xDF2FD796C54480A5 | Since: 1207
 */
export function getDayOfMonth() {
    return GetClockDayOfMonth();
}
/**
 * Gets the current day of the week.
 *
 * 0: Sunday
 * 1: Monday
 * 2: Tuesday
 * 3: Wednesday
 * 4: Thursday
 * 5: Friday
 * 6: Saturday
 *
 * Hash: 0x4DD02D4C7FB30076 | Since: 1207
 */
export function getDayOfWeek() {
    return GetClockDayOfWeek();
}
/**
 * Gets the current ingame hour, expressed without zeros. (09:34 will be represented as 9)
 *
 * Hash: 0xC82CF208C2B19199 | Since: 1207
 */
export function getHours() {
    return GetClockHours();
}
/**
 * Gets the current ingame clock minute.
 *
 * Hash: 0x4E162231B823DBBF | Since: 1207
 */
export function getMinutes() {
    return GetClockMinutes();
}
/**
 * No comment provided
 *
 * Hash: 0x2D44E8FC79EAB1AC | Since: 1207
 */
export function getMonth() {
    return GetClockMonth();
}
/**
 * Gets the current ingame clock second. Note that ingame clock seconds change really fast since a day in RDR is only 48 minutes in real life.
 *
 * Hash: 0xB6101ABE62B5F080 | Since: 1207
 */
export function getSeconds() {
    return GetClockSeconds();
}
/**
 * No comment provided
 *
 * Hash: 0xE136DCA28C4A48BA | Since: 1207
 */
export function getYear() {
    return GetClockYear();
}
/**
 * No comment provided
 *
 * Hash: 0xE4CB8D126501EC52 | Since: 1207
 */
export function getMillisecondsPerGameMinute() {
    return GetMillisecondsPerGameMinute();
}
/**
 * No comment provided
 *
 * Hash: 0x90338AD4A784E455 | Since: 1207
 */
export function getPosixTime() {
    return GetPosixTime();
}
/**
 * No comment provided
 *
 * Hash: 0x4D1A590C92BF377E | Since: 1207
 */
export function pause(toggle, unused) {
    PauseClock(toggle, unused);
}
/**
 * No comment provided
 *
 * Hash: 0x02AD3092562941E2 | Since: 1207
 */
export function setDate(day, month, year) {
    SetClockDate(day, month, year);
}
/**
 * SET_CLOCK_TIME(12, 34, 56);
 *
 * Hash: 0x3A52C59FFB2DEED8 | Since: 1207
 */
export function setTime(hour, minute, second) {
    SetClockTime(hour, minute, second);
}
/**
 * No comment provided
 *
 * Hash: 0x28EEACE9B43D9597 | Since: 1207
 */
export function addTimeToDateTime() {
    return AddTimeToDateTime();
}
/**
 * Same as GET_POSIX_TIME except that it takes a single pointer to a struct.
 *
 * Hash: 0x86A68E84E5884951 | Since: 1207
 */
export function getPosixTimeStruct() {
    return GetPosixTimeStruct();
}
/**
 * Base year is 1898.
 *
 * Hash: 0x78FD8BE812E436B2 | Since: 1207
 */
export function getSecondsSinceBaseYear() {
    return GetSecondsSinceBaseYear();
}
/**
 * No comment provided
 *
 * Hash: 0x568D998A9FF96774 | Since: 1207
 */
export function pauseThisFrame(toggle) {
    PauseClockThisFrame(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x04EEDB3848DACF68 | Since: 1207
 */
export function setMillisecondsPerGameMinute(ms) {
    SetMillisecondsPerGameMinute(ms);
}
