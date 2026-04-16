import { Vector3, IEntity, IPed, IObject } from '@risinglife/redm-shared';
/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 * https://github.com/femga/rdr3_discoveries/blob/master/AI/EVENTS
 *
 * Hash: 0xD9F8455409B525E9 | Since: 1207 | API-Set: unknown
 */
export declare function addShockingAtPosition(eventType: number | string, pos: Vector3): number;
/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 *
 * Hash: 0x7FD8F3BE76F89422 | Since: 1207 | API-Set: unknown
 */
export declare function addShockingForEntity(eventType: number | string, entity: number | IEntity): number;
/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 *
 * Hash: 0x9DB47E16060D6354 | Since: 1207 | API-Set: unknown
 */
export declare function isShockingInSphere(eventType: number | string, pos: Vector3, radius: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD47A168C2AB90DC4 | Since: 1207 | API-Set: unknown
 */
export declare function removeAllShockings(): void;
/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 *
 * Hash: 0x118873DD538490B4 | Since: 1207 | API-Set: unknown
 */
export declare function removeAllShockingsOfType(eventType: number | string, scriptCreatedOnly: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xE8BB3CC253A34559 | Since: 1207 | API-Set: unknown
 */
export declare function removeShocking(event: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDB249021652420C5 | Since: 1207 | API-Set: unknown
 */
export declare function removeShockingSpawnBlockingAreas(): void;
/**
 * No comment provided
 *
 * Hash: 0x8AE2F981CDDB8FA4 | Since: 1207 | API-Set: unknown
 */
export declare function setDecisionMaker(ped: number | IPed, name: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x6B9C5C38838FB6E6 | Since: 1207 | API-Set: unknown
 */
export declare function setDecisionMakerToDefault(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x84994FAD4E4E4E69 | Since: 1207 | API-Set: unknown
 */
export declare function suppressShockingsNextFrame(): void;
/**
 * Only used in R* SP Script beat_rat_infestation and homeinvasion
 *
 * Hash: 0x18E93EBFC1FCFA48 | Since: 1207 | API-Set: unknown
 */
export declare function _0x18E93EBFC1FCFA48(volume: number): any;
/**
 * AGGRO_CHECK_PROPERTY_DAMAGE: Property damage found with event
 *
 * Hash: 0x1A5C5D350068A673 | Since: 1207 | API-Set: unknown
 */
export declare function _0x1A5C5D350068A673(ped: number | IPed): void;
/**
 * _GET*
 *
 * Hash: 0x1D1B448D719415AB | Since: 1207 | API-Set: unknown
 */
export declare function _0x1D1B448D719415AB(ped: number | IPed): any;
/**
 * No comment provided
 *
 * Hash: 0x26054EB81AC0893B | Since: 1207 | API-Set: unknown
 */
export declare function _0x26054EB81AC0893B(_object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2DD42FAD06E6F19E | Since: 1207 | API-Set: unknown
 */
export declare function _0x2DD42FAD06E6F19E(_object: number | IObject): any;
/**
 * _ADD* (_ADD_SHOCKING_EVENT_* ?)
 *
 * Hash: 0x36D0F2BA2C0D9BDE | Since: 1207 | API-Set: unknown
 */
export declare function _0x36D0F2BA2C0D9BDE(entity: number | IEntity): any;
/**
 * No comment provided
 *
 * Hash: 0x4465C3D1475BD3FD | Since: 1207 | API-Set: unknown
 */
export declare function _0x4465C3D1475BD3FD(model: number | string): void;
/**
 * Only used in R* SP Script coachrobberies
 * _SET_S*
 *
 * Hash: 0x4B2B1A891D437CA7 | Since: 1207 | API-Set: unknown
 */
export declare function _0x4B2B1A891D437CA7(): void;
/**
 * Only used in R* SP Script beat_rat_infestation
 * Params: p0 = value returned by 0x18E93EBFC1FCFA48
 *
 * Hash: 0x56B3410626A473E7 | Since: 1207 | API-Set: unknown
 */
export declare function _0x56B3410626A473E7(): void;
/**
 * Only used in R* SP Scripts
 * Hash only used in R* Script mob3.ysc: ROBBERY
 * _ADD_PED*
 *
 * Hash: 0x7C511E91738A0828 | Since: 1207 | API-Set: unknown
 */
export declare function _0x7C511E91738A0828(ped1: number | IPed, ped2: number | IPed, p3: number | string): void;
/**
 * _GET*
 *
 * Hash: 0x83D43F0FD5276E4D | Since: 1207 | API-Set: unknown
 */
export declare function _0x83D43F0FD5276E4D(entity: number | IEntity): any;
/**
 * _SET_P*
 *
 * Hash: 0x9520175B35E2268D | Since: 1207 | API-Set: unknown
 */
export declare function _0x9520175B35E2268D(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xA86B0EE9B39D15D6 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA86B0EE9B39D15D6(_object: number | IObject): void;
/**
 * Might return time since some (?) event.
 *
 * Hash: 0xAD17A18215DD23D6 | Since: 1207 | API-Set: unknown
 */
export declare function _0xAD17A18215DD23D6(entity: number | IEntity): number;
/**
 * _S* (_SUPPRESS_EVENTS_NEXT_FRAME?)
 *
 * Hash: 0xB6F4825153920582 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB6F4825153920582(): void;
/**
 * HAS_ACTOR_RECEIVED_TRACKED_EVENT_THAT_SHOULD_ALERT - iTimeSinceEvent >= iTimeLimitMS
 *
 * Hash: 0xE28D7FC9FD32ABEB | Since: 1311 | API-Set: unknown
 */
export declare function _0xE28D7FC9FD32ABEB(entity: number | IEntity, eventType: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xE2C2FBB7825FFC66 | Since: 1207 | API-Set: unknown
 */
export declare function _0xE2C2FBB7825FFC66(): void;
/**
 * Models used in the scripts: P_REGISTER05X, P_REGISTER06X, P_REGISTER03X, PLAYER_ZERO, PLAYER_THREE, A_C_HORSE_MORGAN_FLAXENCHESTNUT
 *
 * Hash: 0x608AD36A644A97FE | Since: 1207 | API-Set: unknown
 */
export declare function addModelToMonitor(model: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xCA1315C33B9A2847 | Since: 1207 | API-Set: unknown
 */
export declare function createShocking(): [number, any];
/**
 * No comment provided
 *
 * Hash: 0xAD8F2424C6E1E3A8 | Since: 1207 | API-Set: unknown
 */
export declare function flushAllEventTrackers(ped: number | IPed): void;
/**
 * Returns eventType
 *
 * Hash: 0x796EECFF0C6D39BE | Since: 1207 | API-Set: unknown
 */
export declare function getRecentEvent(entity: number | IEntity): number;
/**
 * No comment provided
 *
 * Hash: 0x822A001BCEA5BD81 | Since: 1207 | API-Set: unknown
 */
export declare function getSourceEntityFromEvent(entity: number | IEntity, eventType: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x38497F139981C5C9 | Since: 1207 | API-Set: unknown
 */
export declare function getTargetEntityFromEvent(entity: number | IEntity, eventType: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xC6A7DC546E94FED5 | Since: 1207 | API-Set: unknown
 */
export declare function getTimeSinceEvent(entity: number | IEntity, eventType: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x797B3D4D92E56094 | Since: 1207 | API-Set: unknown
 */
export declare function isTrackerActive(eventName: string, shockingEvent: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB4C71BA9CAB097BD | Since: 1207 | API-Set: unknown
 */
export declare function removeAllShockingsInArea(pos: Vector3, radius: number): void;
/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 *
 * Hash: 0x6A648D42BF271DC7 | Since: 1207 | API-Set: unknown
 */
export declare function removeAllShockingsOfTypeInArea(eventType: number | string, pos: Vector3, radius: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBB1E41DD3D3C6250 | Since: 1207 | API-Set: unknown
 */
export declare function setTrackerForPed(ped: number | IPed, eventName: string): void;
