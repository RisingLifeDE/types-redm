/**
 * Creates a DUI browser. This can be used to draw on a runtime texture using CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
 *
 * Hash: 0x23EAF899 | Since: unknown | API-Set: client
 */
export function create(url, width, height) {
    return CreateDui(url, width, height);
}
/**
 * Destroys a DUI browser.
 *
 * Hash: 0xA085CB10 | Since: unknown | API-Set: client
 */
export function destroy(duiObject) {
    DestroyDui(duiObject);
}
/**
 * Returns the NUI window handle for a specified DUI browser object.
 *
 * Hash: 0x1655D41D | Since: unknown | API-Set: client
 */
export function getHandle(duiObject) {
    return GetDuiHandle(duiObject);
}
/**
 * Returns whether or not a browser is created for a specified DUI browser object.
 *
 * Hash: 0x7AAC3B4C | Since: unknown | API-Set: client
 */
export function isAvailable(duiObject) {
    return IsDuiAvailable(duiObject);
}
/**
 * Sends a message to the specific DUI root page. This is similar to SEND_NUI_MESSAGE.
 *
 * Hash: 0xCD380DA9 | Since: unknown | API-Set: client
 */
export function sendMessage(duiObject, jsonString) {
    SendDuiMessage(duiObject, jsonString);
}
/**
 * Injects a 'mouse down' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 *
 * Hash: 0x5D01F191 | Since: unknown | API-Set: client
 */
export function sendMouseDown(duiObject, button) {
    SendDuiMouseDown(duiObject, button);
}
/**
 * Injects a 'mouse move' event for a DUI object. Coordinates are in browser space.
 *
 * Hash: 0xD9D7A0AA | Since: unknown | API-Set: client
 */
export function sendMouseMove(duiObject, x, y) {
    SendDuiMouseMove(duiObject, x, y);
}
/**
 * Injects a 'mouse up' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 *
 * Hash: 0x1D735B93 | Since: unknown | API-Set: client
 */
export function sendMouseUp(duiObject, button) {
    SendDuiMouseUp(duiObject, button);
}
/**
 * Injects a 'mouse wheel' event for a DUI object.
 *
 * Hash: 0x2D62133A | Since: unknown | API-Set: client
 */
export function sendMouseWheel(duiObject, deltaY, deltaX) {
    SendDuiMouseWheel(duiObject, deltaY, deltaX);
}
/**
 * Navigates the specified DUI browser to a different URL.
 *
 * Hash: 0xF761D9F3 | Since: unknown | API-Set: client
 */
export function setUrl(duiObject, url) {
    SetDuiUrl(duiObject, url);
}
