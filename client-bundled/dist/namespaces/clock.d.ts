/**
 * No comment provided
 *
 * Hash: 0xAB7C251C7701D336 | Since: 1207 | API-Set: unknown
 */
export declare function addToTime(hours: number, minutes: number, seconds: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0184750AE88D0B1D | Since: 1207 | API-Set: unknown
 */
export declare function advanceTimeTo(hour: number, minute: number, second: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDF2FD796C54480A5 | Since: 1207 | API-Set: unknown
 */
export declare function getDayOfMonth(): number;
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
 * Hash: 0x4DD02D4C7FB30076 | Since: 1207 | API-Set: unknown
 */
export declare function getDayOfWeek(): number;
/**
 * Gets the current ingame hour, expressed without zeros. (09:34 will be represented as 9)
 *
 * Hash: 0xC82CF208C2B19199 | Since: 1207 | API-Set: unknown
 */
export declare function getHours(): number;
/**
 * Gets the current ingame clock minute.
 *
 * Hash: 0x4E162231B823DBBF | Since: 1207 | API-Set: unknown
 */
export declare function getMinutes(): number;
/**
 * No comment provided
 *
 * Hash: 0x2D44E8FC79EAB1AC | Since: 1207 | API-Set: unknown
 */
export declare function getMonth(): number;
/**
 * Gets the current ingame clock second. Note that ingame clock seconds change really fast since a day in RDR is only 48 minutes in real life.
 *
 * Hash: 0xB6101ABE62B5F080 | Since: 1207 | API-Set: unknown
 */
export declare function getSeconds(): number;
/**
 * No comment provided
 *
 * Hash: 0xE136DCA28C4A48BA | Since: 1207 | API-Set: unknown
 */
export declare function getYear(): number;
/**
 * No comment provided
 *
 * Hash: 0xE4CB8D126501EC52 | Since: 1207 | API-Set: unknown
 */
export declare function getMillisecondsPerGameMinute(): number;
/**
 * No comment provided
 *
 * Hash: 0x90338AD4A784E455 | Since: 1207 | API-Set: unknown
 */
export declare function getPosixTime(): [number, number, number, number, number, number];
/**
 * No comment provided
 *
 * Hash: 0x4D1A590C92BF377E | Since: 1207 | API-Set: unknown
 */
export declare function pause(toggle: boolean, unused: any): void;
/**
 * No comment provided
 *
 * Hash: 0x02AD3092562941E2 | Since: 1207 | API-Set: unknown
 */
export declare function setDate(day: number, month: number, year: number): void;
/**
 * SET_CLOCK_TIME(12, 34, 56);
 *
 * Hash: 0x3A52C59FFB2DEED8 | Since: 1207 | API-Set: unknown
 */
export declare function setTime(hour: number, minute: number, second: number): void;
/**
 * No comment provided
 *
 * Hash: 0x28EEACE9B43D9597 | Since: 1207 | API-Set: unknown
 */
export declare function addTimeToDateTime(): [any, any, any];
/**
 * Same as GET_POSIX_TIME except that it takes a single pointer to a struct.
 *
 * Hash: 0x86A68E84E5884951 | Since: 1207 | API-Set: unknown
 */
export declare function getPosixTimeStruct(): any;
/**
 * Base year is 1898.
 *
 * Hash: 0x78FD8BE812E436B2 | Since: 1207 | API-Set: unknown
 */
export declare function getSecondsSinceBaseYear(): number;
/**
 * No comment provided
 *
 * Hash: 0x568D998A9FF96774 | Since: 1207 | API-Set: unknown
 */
export declare function pauseThisFrame(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x04EEDB3848DACF68 | Since: 1207 | API-Set: unknown
 */
export declare function setMillisecondsPerGameMinute(ms: number): void;
