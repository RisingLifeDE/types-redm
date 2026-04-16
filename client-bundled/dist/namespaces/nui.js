/**
 * No comment provided
 *
 * Hash: 0xBDBA226F | Since: unknown | API-Set: client
 */
export function getCursorPosition() {
    return GetNuiCursorPosition();
}
/**
 * Returns the current NUI focus state previously set with `SET_NUI_FOCUS`.
 *
 * Hash: 0x98545E6D | Since: unknown | API-Set: client
 */
export function isFocused() {
    return IsNuiFocused();
}
/**
 * Checks if keyboard input is enabled during NUI focus using `SET_NUI_FOCUS_KEEP_INPUT`.
 *
 * Hash: 0x39C9DC92 | Since: unknown | API-Set: client
 */
export function isFocusKeepingInput() {
    return IsNuiFocusKeepingInput();
}
/**
 * No comment provided
 *
 * Hash: 0xC59B980C | Since: unknown | API-Set: client
 */
export function registerCallback(callbackType, callback) {
    RegisterNuiCallback(callbackType, callback);
}
/**
 * No comment provided
 *
 * Hash: 0xCD03CDA9 | Since: unknown | API-Set: client
 */
export function registerCallbackType(callbackType) {
    RegisterNuiCallbackType(callbackType);
}
/**
 * No comment provided
 *
 * Hash: 0xA8AE9C2F | Since: unknown | API-Set: client
 */
export function registerRawCallback(callbackType, callback) {
    RegisterRawNuiCallback(callbackType, callback);
}
/**
 * No comment provided
 *
 * Hash: 0x78608ACB | Since: unknown | API-Set: client
 */
export function sendMessage(jsonString) {
    return SendNuiMessage(jsonString);
}
/**
 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
 * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 *
 * Hash: 0x1722C938 | Since: unknown | API-Set: client
 */
export function setManualShutdownLoadingScreen(manualShutdown) {
    SetManualShutdownLoadingScreenNui(manualShutdown);
}
/**
 * No comment provided
 *
 * Hash: 0x5B98AE30 | Since: unknown | API-Set: client
 */
export function setFocus(hasFocus, hasCursor) {
    SetNuiFocus(hasFocus, hasCursor);
}
/**
 * No comment provided
 *
 * Hash: 0x3FF5E5F8 | Since: unknown | API-Set: client
 */
export function setFocusKeepInput(keepInput) {
    SetNuiFocusKeepInput(keepInput);
}
/**
 * Set the z-index of the NUI resource.
 *
 * Hash: 0x3734AAFF | Since: unknown | API-Set: client
 */
export function setZindex(zIndex) {
    SetNuiZindex(zIndex);
}
/**
 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 *
 * Hash: 0xB9234AFB | Since: unknown | API-Set: client
 */
export function shutdownLoadingScreen() {
    ShutdownLoadingScreenNui();
}
/**
 * Will unregister and cleanup a registered NUI callback handler.
 *
 * Use along side the REGISTER_RAW_NUI_CALLBACK native.
 *
 * Hash: 0x7FB46432 | Since: unknown | API-Set: client
 */
export function unregisterRawCallback(callbackType) {
    UnregisterRawNuiCallback(callbackType);
}
