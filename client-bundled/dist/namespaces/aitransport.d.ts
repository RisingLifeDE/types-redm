import { IEntity, IPed } from '@risinglife/redm-shared';
/**
 * flagId: see SET_TRANSPORT_CONFIG_FLAG
 *
 * Hash: 0xF382C92CCC1CCDBC | Since: 1207 | API-Set: unknown
 */
export declare function getTransportConfigFlag(transportEntity: number | IEntity, flagId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x619E63980BFC0096 | Since: 1207 | API-Set: unknown
 */
export declare function isPedEnteringTransport(ped: number | IPed, transportEntity: number | IEntity): boolean;
/**
 * No comment provided
 *
 * Hash: 0x660639BC60157048 | Since: 1207 | API-Set: unknown
 */
export declare function isPedExitingTransport(ped: number | IPed, transportEntity: number | IEntity): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8886D83A430537FD | Since: 1207 | API-Set: unknown
 */
export declare function setPedOffTransportSeat(ped: number | IPed, flags: number): void;
/**
 * seat: see CREATE_PED_INSIDE_VEHICLE
 *
 * Hash: 0xE588B5A8A005CB5E | Since: 1207 | API-Set: unknown
 */
export declare function setPedOnTransportSeat(ped: number | IPed, transportEntity: number | IEntity, seat: number, flags: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDD0660C997DE94FD | Since: 1207 | API-Set: unknown
 */
export declare function setTransportAccessibleSeatFlags(transportEntity: number | IEntity, flags: number): void;
/**
 * flagId:
 * enum eTransportConfigFlags
 * {
 * TCF_NotConsideredForEntryByLocalPlayer,
 * TCF_0xB78D6624,
 * TCF_0xA9700425,
 * TCF_0x8D7E4641,
 * TCF_0xF24BAA1F,
 * TCF_0x63B77935,
 * TCF_NotConsideredForEntryByAllPlayers,
 * TCF_0xD17A2AFD,
 * TCF_0xD4E4FDD5,
 * TCF_0x8227C929,
 * TCF_0x812C1070,
 * TCF_0x0E1AB26F,
 * TCF_0xBF4EC863,
 * TCF_0x75660C36,
 * TCF_0xA2539E20,
 * TCF_0x9162C633,
 * TCF_DisableHonorModifiers,
 * TCF_0xF9E71CB6,
 * TCF_0x933ECD3F,
 * TCF_0x18513A34
 * };
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/TRANSPORT_CONFIG_FLAGS
 *
 * Hash: 0xBA8818212633500A | Since: 1207 | API-Set: unknown
 */
export declare function setTransportConfigFlag(transportEntity: number | IEntity, flagId: number, value: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xAEE3ADD08829CB6F | Since: 1207 | API-Set: unknown
 */
export declare function taskEnterTransport(): any;
/**
 * No comment provided
 *
 * Hash: 0xC273A5B8488F7838 | Since: 1207 | API-Set: unknown
 */
export declare function taskExitTransport(): any;
/**
 * Used for ROWBOAT and ROWBOATSWAMP in R* Scripts
 *
 * Hash: 0x4B6C9A43F7D9109B | Since: 1207 | API-Set: unknown
 */
export declare function _0x4B6C9A43F7D9109B(transportEntity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x5639FBEA922788DA | Since: 1207 | API-Set: unknown
 */
export declare function clearAllSeatPreferenceSlots(transportEntity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xF8C20282B237E3F7 | Since: 1207 | API-Set: unknown
 */
export declare function clearTransportExitBlendRatio(ped: number | IPed): void;
/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 *
 * Hash: 0xFFEC4B0A1A3ED515 | Since: 1207 | API-Set: unknown
 */
export declare function getPedInTransportSeat(transportEntity: number | IEntity, seatIndex: number): number;
/**
 * See _SET_TRANSPORT_USAGE_FLAGS
 *
 * Hash: 0xE195C5A82156321D | Since: 1207 | API-Set: unknown
 */
export declare function getTransportUsageFlags(transportEntity: number | IEntity): [any, number];
/**
 * Checks if ped is placed on target transportEntity
 *
 * Hash: 0x159EF5B6EDCE00E8 | Since: 1207 | API-Set: unknown
 */
export declare function isPedOnTransportEntity(ped: number | IPed, transportEntity: number | IEntity): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDC44F405A6B98D03 | Since: 1207 | API-Set: unknown
 */
export declare function isPedOnTransportSeat(ped: number | IPed): boolean;
/**
 * Called together with IS_VEHICLE_SEAT_FREE
 *
 * Hash: 0x43FF27FC1829C202 | Since: 1207 | API-Set: unknown
 */
export declare function isTransportSeatFree(transportEntity: number | IEntity, seatIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2E2E06023D07631E | Since: 1207 | API-Set: unknown
 */
export declare function isTransportSeatOccupied(transportEntity: number | IEntity, seatIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x67F7CEAC2391E114 | Since: 1207 | API-Set: unknown
 */
export declare function setAiCanUseTransport(transportEntity: number | IEntity, state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xB7079F4C72896756 | Since: 1207 | API-Set: unknown
 */
export declare function setPedUseTransportSeatPreference(ped: number | IPed, transportEntity: number | IEntity, preferenceSlot: number, seatIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4248AB2EEB3C75AD | Since: 1207 | API-Set: unknown
 */
export declare function setTransportExclusiveDriver(transportEntity: number | IEntity, ped: number | IPed, seatIndex: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8C8371EDFAF014A0 | Since: 1207 | API-Set: unknown
 */
export declare function setTransportExitBlendRatio(ped: number | IPed, ratio: number): void;
/**
 * No comment provided
 *
 * Hash: 0x13F138225C202F66 | Since: 1207 | API-Set: unknown
 */
export declare function setTransportPrioritySeat(transportEntity: number | IEntity, seatIndex: number): void;
/**
 * enum eTransportUsageFlags
 * {
 * TUF_INVALID = 0,
 * TUF_ALLOW_DRIVER_ME = (1 << 0),
 * TUF_ALLOW_DRIVER_GANG = (1 << 1),
 * TUF_ALLOW_DRIVER_CREW = (1 << 2),
 * TUF_ALLOW_DRIVER_FRIENDS = (1 << 3),
 * TUF_ALLOW_DRIVER_ANYONE = (1 << 4),
 * TUF_ALLOW_PASSENGER_ME = (1 << 5),
 * TUF_ALLOW_PASSENGER_GANG = (1 << 6),
 * TUF_ALLOW_PASSENGER_CREW = (1 << 7),
 * TUF_ALLOW_PASSENGER_FRIENDS = (1 << 8),
 * TUF_ALLOW_PASSENGER_ANYONE = (1 << 9),
 * TUF_ALLOW_ACCESS_AI = (1 << 10)
 * };
 *
 * Hash: 0xE2487779957FE897 | Since: 1207 | API-Set: unknown
 */
export declare function setTransportUsageFlags(transportEntity: number | IEntity, flags: number): void;
