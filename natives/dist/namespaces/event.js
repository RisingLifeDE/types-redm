import { IEntity, IPed, IObject } from '@risinglife/redm-shared';
/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 * https://github.com/femga/rdr3_discoveries/blob/master/AI/EVENTS
 *
 * Hash: 0xD9F8455409B525E9 | Since: 1207
 */
export function addShockingAtPosition(eventType, pos) {
    if (typeof eventType === 'string')
        eventType = GetHashKey(eventType);
    return AddShockingEventAtPosition(eventType, pos.x, pos.y, pos.z, 0, 0, 0, 0, 0, 0, 0);
}
/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 *
 * Hash: 0x7FD8F3BE76F89422 | Since: 1207
 */
export function addShockingForEntity(eventType, entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof eventType === 'string')
        eventType = GetHashKey(eventType);
    return AddShockingEventForEntity(eventType, _entity, 0, 0, 0, 0, 0, 0, false, false, 0, 0);
}
/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 *
 * Hash: 0x9DB47E16060D6354 | Since: 1207
 */
export function isShockingInSphere(eventType, pos, radius) {
    if (typeof eventType === 'string')
        eventType = GetHashKey(eventType);
    return IsShockingEventInSphere(eventType, pos.x, pos.y, pos.z, radius);
}
/**
 * No comment provided
 *
 * Hash: 0xD47A168C2AB90DC4 | Since: 1207
 */
export function removeAllShockings() {
    RemoveAllShockingEvents(false);
}
/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 *
 * Hash: 0x118873DD538490B4 | Since: 1207
 */
export function removeAllShockingsOfType(eventType, scriptCreatedOnly) {
    if (typeof eventType === 'string')
        eventType = GetHashKey(eventType);
    RemoveAllShockingEventsOfType(eventType, scriptCreatedOnly);
}
/**
 * No comment provided
 *
 * Hash: 0xE8BB3CC253A34559 | Since: 1207
 */
export function removeShocking(event) {
    return RemoveShockingEvent(event);
}
/**
 * No comment provided
 *
 * Hash: 0xDB249021652420C5 | Since: 1207
 */
export function removeShockingSpawnBlockingAreas() {
    RemoveShockingEventSpawnBlockingAreas();
}
/**
 * No comment provided
 *
 * Hash: 0x8AE2F981CDDB8FA4 | Since: 1207
 */
export function setDecisionMaker(ped, name) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof name === 'string')
        name = GetHashKey(name);
    SetDecisionMaker(_ped, name);
}
/**
 * No comment provided
 *
 * Hash: 0x6B9C5C38838FB6E6 | Since: 1207
 */
export function setDecisionMakerToDefault(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetDecisionMakerToDefault(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x84994FAD4E4E4E69 | Since: 1207
 */
export function suppressShockingsNextFrame() {
    SuppressShockingEventsNextFrame();
}
/**
 * Only used in R* SP Script beat_rat_infestation and homeinvasion
 *
 * Hash: 0x18E93EBFC1FCFA48 | Since: 1207
 */
export function _0x18E93EBFC1FCFA48(volume) {
    return Citizen.invokeNative('0x18E93EBFC1FCFA48', volume, false, false);
}
/**
 * AGGRO_CHECK_PROPERTY_DAMAGE: Property damage found with event
 *
 * Hash: 0x1A5C5D350068A673 | Since: 1207
 */
export function _0x1A5C5D350068A673(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x1A5C5D350068A673', _ped, 0);
}
/**
 * _GET*
 *
 * Hash: 0x1D1B448D719415AB | Since: 1207
 */
export function _0x1D1B448D719415AB(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x1D1B448D719415AB', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x26054EB81AC0893B | Since: 1207
 */
export function _0x26054EB81AC0893B(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return Citizen.invokeNative('0x26054EB81AC0893B', __object);
}
/**
 * No comment provided
 *
 * Hash: 0x2DD42FAD06E6F19E | Since: 1207
 */
export function _0x2DD42FAD06E6F19E(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return Citizen.invokeNative('0x2DD42FAD06E6F19E', __object, false, false);
}
/**
 * _ADD* (_ADD_SHOCKING_EVENT_* ?)
 *
 * Hash: 0x36D0F2BA2C0D9BDE | Since: 1207
 */
export function _0x36D0F2BA2C0D9BDE(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x36D0F2BA2C0D9BDE', _entity, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x4465C3D1475BD3FD | Since: 1207
 */
export function _0x4465C3D1475BD3FD(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    Citizen.invokeNative('0x4465C3D1475BD3FD', model);
}
/**
 * Only used in R* SP Script coachrobberies
 * _SET_S*
 *
 * Hash: 0x4B2B1A891D437CA7 | Since: 1207
 */
export function _0x4B2B1A891D437CA7() {
    Citizen.invokeNative('0x4B2B1A891D437CA7', 0);
}
/**
 * Only used in R* SP Script beat_rat_infestation
 * Params: p0 = value returned by 0x18E93EBFC1FCFA48
 *
 * Hash: 0x56B3410626A473E7 | Since: 1207
 */
export function _0x56B3410626A473E7() {
    Citizen.invokeNative('0x56B3410626A473E7', undefined);
}
/**
 * Only used in R* SP Scripts
 * Hash only used in R* Script mob3.ysc: ROBBERY
 * _ADD_PED*
 *
 * Hash: 0x7C511E91738A0828 | Since: 1207
 */
export function _0x7C511E91738A0828(ped1, ped2, p3) {
    const _ped1 = ped1 instanceof IPed ? ped1.handle() : ped1;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    if (typeof p3 === 'string')
        p3 = GetHashKey(p3);
    Citizen.invokeNative('0x7C511E91738A0828', _ped1, _ped2, 0, p3);
}
/**
 * _GET*
 *
 * Hash: 0x83D43F0FD5276E4D | Since: 1207
 */
export function _0x83D43F0FD5276E4D(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x83D43F0FD5276E4D', _entity, 0);
}
/**
 * _SET_P*
 *
 * Hash: 0x9520175B35E2268D | Since: 1207
 */
export function _0x9520175B35E2268D(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x9520175B35E2268D', _ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0xA86B0EE9B39D15D6 | Since: 1207
 */
export function _0xA86B0EE9B39D15D6(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0xA86B0EE9B39D15D6', __object);
}
/**
 * Might return time since some (?) event.
 *
 * Hash: 0xAD17A18215DD23D6 | Since: 1207
 */
export function _0xAD17A18215DD23D6(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0xAD17A18215DD23D6', _entity, 0, 0);
}
/**
 * _S* (_SUPPRESS_EVENTS_NEXT_FRAME?)
 *
 * Hash: 0xB6F4825153920582 | Since: 1207
 */
export function _0xB6F4825153920582() {
    Citizen.invokeNative('0xB6F4825153920582');
}
/**
 * HAS_ACTOR_RECEIVED_TRACKED_EVENT_THAT_SHOULD_ALERT - iTimeSinceEvent >= iTimeLimitMS
 *
 * Hash: 0xE28D7FC9FD32ABEB | Since: 1311
 */
export function _0xE28D7FC9FD32ABEB(entity, eventType) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof eventType === 'string')
        eventType = GetHashKey(eventType);
    Citizen.invokeNative('0xE28D7FC9FD32ABEB', _entity, eventType, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xE2C2FBB7825FFC66 | Since: 1207
 */
export function _0xE2C2FBB7825FFC66() {
    Citizen.invokeNative('0xE2C2FBB7825FFC66');
}
/**
 * Models used in the scripts: P_REGISTER05X, P_REGISTER06X, P_REGISTER03X, PLAYER_ZERO, PLAYER_THREE, A_C_HORSE_MORGAN_FLAXENCHESTNUT
 *
 * Hash: 0x608AD36A644A97FE | Since: 1207
 */
export function addModelToMonitor(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    AddModelToEventMonitor(model, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xCA1315C33B9A2847 | Since: 1207
 */
export function createShocking() {
    return CreateShockingEvent();
}
/**
 * No comment provided
 *
 * Hash: 0xAD8F2424C6E1E3A8 | Since: 1207
 */
export function flushAllEventTrackers(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    EventFlushAllEventTrackers(_ped);
}
/**
 * Returns eventType
 *
 * Hash: 0x796EECFF0C6D39BE | Since: 1207
 */
export function getRecentEvent(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return EventGetRecentEvent(_entity, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x822A001BCEA5BD81 | Since: 1207
 */
export function getSourceEntityFromEvent(entity, eventType) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof eventType === 'string')
        eventType = GetHashKey(eventType);
    return EventGetSourceEntityFromEvent(_entity, eventType, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x38497F139981C5C9 | Since: 1207
 */
export function getTargetEntityFromEvent(entity, eventType) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof eventType === 'string')
        eventType = GetHashKey(eventType);
    return EventGetTargetEntityFromEvent(_entity, eventType, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xC6A7DC546E94FED5 | Since: 1207
 */
export function getTimeSinceEvent(entity, eventType) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof eventType === 'string')
        eventType = GetHashKey(eventType);
    return EventGetTimeSinceEvent(_entity, eventType, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x797B3D4D92E56094 | Since: 1207
 */
export function isTrackerActive(eventName, shockingEvent) {
    if (typeof shockingEvent === 'string')
        shockingEvent = GetHashKey(shockingEvent);
    return IsEventTrackerActive(eventName, shockingEvent);
}
/**
 * No comment provided
 *
 * Hash: 0xB4C71BA9CAB097BD | Since: 1207
 */
export function removeAllShockingsInArea(pos, radius) {
    RemoveAllShockingEventsInArea(pos.x, pos.y, pos.z, radius, false);
}
/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 *
 * Hash: 0x6A648D42BF271DC7 | Since: 1207
 */
export function removeAllShockingsOfTypeInArea(eventType, pos, radius) {
    if (typeof eventType === 'string')
        eventType = GetHashKey(eventType);
    RemoveAllShockingEventsOfTypeInArea(eventType, pos.x, pos.y, pos.z, radius, false);
}
/**
 * No comment provided
 *
 * Hash: 0xBB1E41DD3D3C6250 | Since: 1207
 */
export function setTrackerForPed(ped, eventName) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetEventTrackerForPed(_ped, eventName, 0);
}
