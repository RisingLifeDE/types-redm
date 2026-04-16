import { IEntity, IPed } from '@risinglife/redm-shared';
/**
 * flagId: see SET_TRANSPORT_CONFIG_FLAG
 *
 * Hash: 0xF382C92CCC1CCDBC | Since: 1207 | API-Set: unknown
 */
export function getTransportConfigFlag(transportEntity, flagId) {
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    return GetTransportConfigFlag(_transportEntity, flagId, false);
}
/**
 * No comment provided
 *
 * Hash: 0x619E63980BFC0096 | Since: 1207 | API-Set: unknown
 */
export function isPedEnteringTransport(ped, transportEntity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    return IsPedEnteringTransport(_ped, _transportEntity, false);
}
/**
 * No comment provided
 *
 * Hash: 0x660639BC60157048 | Since: 1207 | API-Set: unknown
 */
export function isPedExitingTransport(ped, transportEntity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    return IsPedExitingTransport(_ped, _transportEntity);
}
/**
 * No comment provided
 *
 * Hash: 0x8886D83A430537FD | Since: 1207 | API-Set: unknown
 */
export function setPedOffTransportSeat(ped, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedOffTransportSeat(_ped, flags);
}
/**
 * seat: see CREATE_PED_INSIDE_VEHICLE
 *
 * Hash: 0xE588B5A8A005CB5E | Since: 1207 | API-Set: unknown
 */
export function setPedOnTransportSeat(ped, transportEntity, seat, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    SetPedOnTransportSeat(_ped, _transportEntity, seat, flags);
}
/**
 * No comment provided
 *
 * Hash: 0xDD0660C997DE94FD | Since: 1207 | API-Set: unknown
 */
export function setTransportAccessibleSeatFlags(transportEntity, flags) {
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    SetTransportAccessibleSeatFlags(_transportEntity, flags);
}
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
export function setTransportConfigFlag(transportEntity, flagId, value) {
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    SetTransportConfigFlag(_transportEntity, flagId, value);
}
/**
 * No comment provided
 *
 * Hash: 0xAEE3ADD08829CB6F | Since: 1207 | API-Set: unknown
 */
export function taskEnterTransport() {
    return TaskEnterTransport();
}
/**
 * No comment provided
 *
 * Hash: 0xC273A5B8488F7838 | Since: 1207 | API-Set: unknown
 */
export function taskExitTransport() {
    return TaskExitTransport();
}
/**
 * Used for ROWBOAT and ROWBOATSWAMP in R* Scripts
 *
 * Hash: 0x4B6C9A43F7D9109B | Since: 1207 | API-Set: unknown
 */
export function _0x4B6C9A43F7D9109B(transportEntity) {
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    Citizen.invokeNative('0x4B6C9A43F7D9109B', _transportEntity, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5639FBEA922788DA | Since: 1207 | API-Set: unknown
 */
export function clearAllSeatPreferenceSlots(transportEntity) {
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    Citizen.invokeNative('0x5639FBEA922788DA', _transportEntity);
}
/**
 * No comment provided
 *
 * Hash: 0xF8C20282B237E3F7 | Since: 1207 | API-Set: unknown
 */
export function clearTransportExitBlendRatio(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xF8C20282B237E3F7', _ped);
}
/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 *
 * Hash: 0xFFEC4B0A1A3ED515 | Since: 1207 | API-Set: unknown
 */
export function getPedInTransportSeat(transportEntity, seatIndex) {
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    return GetPedInTransportSeat(_transportEntity, seatIndex);
}
/**
 * See _SET_TRANSPORT_USAGE_FLAGS
 *
 * Hash: 0xE195C5A82156321D | Since: 1207 | API-Set: unknown
 */
export function getTransportUsageFlags(transportEntity) {
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    return GetTransportUsageFlags(_transportEntity);
}
/**
 * Checks if ped is placed on target transportEntity
 *
 * Hash: 0x159EF5B6EDCE00E8 | Since: 1207 | API-Set: unknown
 */
export function isPedOnTransportEntity(ped, transportEntity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    return IsPedOnTransportEntity(_ped, _transportEntity);
}
/**
 * No comment provided
 *
 * Hash: 0xDC44F405A6B98D03 | Since: 1207 | API-Set: unknown
 */
export function isPedOnTransportSeat(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedOnTransportSeat(_ped, false);
}
/**
 * Called together with IS_VEHICLE_SEAT_FREE
 *
 * Hash: 0x43FF27FC1829C202 | Since: 1207 | API-Set: unknown
 */
export function isTransportSeatFree(transportEntity, seatIndex) {
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    return IsTransportSeatFree(_transportEntity, seatIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x2E2E06023D07631E | Since: 1207 | API-Set: unknown
 */
export function isTransportSeatOccupied(transportEntity, seatIndex) {
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    return IsTransportSeatOccupied(_transportEntity, seatIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x67F7CEAC2391E114 | Since: 1207 | API-Set: unknown
 */
export function setAiCanUseTransport(transportEntity, state) {
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    SetAiCanUseTransport(_transportEntity, state);
}
/**
 * No comment provided
 *
 * Hash: 0xB7079F4C72896756 | Since: 1207 | API-Set: unknown
 */
export function setPedUseTransportSeatPreference(ped, transportEntity, preferenceSlot, seatIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    SetPedUseTransportSeatPreference(_ped, _transportEntity, preferenceSlot, 0, seatIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x4248AB2EEB3C75AD | Since: 1207 | API-Set: unknown
 */
export function setTransportExclusiveDriver(transportEntity, ped, seatIndex) {
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x4248AB2EEB3C75AD', _transportEntity, _ped, seatIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x8C8371EDFAF014A0 | Since: 1207 | API-Set: unknown
 */
export function setTransportExitBlendRatio(ped, ratio) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x8C8371EDFAF014A0', _ped, ratio);
}
/**
 * No comment provided
 *
 * Hash: 0x13F138225C202F66 | Since: 1207 | API-Set: unknown
 */
export function setTransportPrioritySeat(transportEntity, seatIndex) {
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    SetTransportPrioritySeat(_transportEntity, seatIndex);
}
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
export function setTransportUsageFlags(transportEntity, flags) {
    const _transportEntity = transportEntity instanceof IEntity ? transportEntity.handle() : transportEntity;
    SetTransportUsageFlags(_transportEntity, flags);
}
