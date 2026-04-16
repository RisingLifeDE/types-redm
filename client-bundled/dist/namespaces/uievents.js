/**
 * eventData:
 * struct UI_SCRIPT_EVENT
 * {
 * alignas(8) eUIScriptEventType eventType; // https://alloc8or.re/rdr3/doc/enums/eUIScriptEventType.txt
 * alignas(8) int intParam;
 * alignas(8) Hash hashParam;
 * alignas(8) Hash datastoreParam;
 * };
 *
 * Old name: _EVENT_MANAGER_GET_EVENT
 *
 * Hash: 0xE24E957294241444 | Since: 1207 | API-Set: unknown
 */
export function eventsUiGetMessage(hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    return EventsUiGetMessage(hash);
}
/**
 * Old name: _EVENT_MANAGER_IS_EVENT_PENDING
 *
 * Hash: 0x67ED5A7963F2F722 | Since: 1207 | API-Set: unknown
 */
export function eventsUiIsPending(hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    return EventsUiIsPending(hash);
}
/**
 * eventData: see EVENTS_UI_GET_MESSAGE
 *
 * Old name: _EVENT_MANAGER_PEEK_EVENT
 *
 * Hash: 0x90237103F27F7937 | Since: 1207 | API-Set: unknown
 */
export function eventsUiPeekMessage(hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    return EventsUiPeekMessage(hash);
}
/**
 * Old name: _EVENT_MANAGER_POP_EVENT
 *
 * Hash: 0x8E8A2369F48EC839 | Since: 1207 | API-Set: unknown
 */
export function eventsUiPopMessage(hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    EventsUiPopMessage(hash);
}
