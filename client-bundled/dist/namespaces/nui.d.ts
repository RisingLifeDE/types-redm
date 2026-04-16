/**
 * No comment provided
 *
 * Hash: 0xBDBA226F | Since: unknown | API-Set: client
 */
export declare function getCursorPosition(): [number, number];
/**
 * Returns the current NUI focus state previously set with `SET_NUI_FOCUS`.
 *
 * Hash: 0x98545E6D | Since: unknown | API-Set: client
 */
export declare function isFocused(): boolean;
/**
 * Checks if keyboard input is enabled during NUI focus using `SET_NUI_FOCUS_KEEP_INPUT`.
 *
 * Hash: 0x39C9DC92 | Since: unknown | API-Set: client
 */
export declare function isFocusKeepingInput(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC59B980C | Since: unknown | API-Set: client
 */
export declare function registerCallback(callbackType: string, callback: Function): void;
/**
 * No comment provided
 *
 * Hash: 0xCD03CDA9 | Since: unknown | API-Set: client
 */
export declare function registerCallbackType(callbackType: string): void;
/**
 * No comment provided
 *
 * Hash: 0xA8AE9C2F | Since: unknown | API-Set: client
 */
export declare function registerRawCallback(callbackType: string, callback: Function): void;
/**
 * No comment provided
 *
 * Hash: 0x78608ACB | Since: unknown | API-Set: client
 */
export declare function sendMessage(jsonString: string): boolean;
/**
 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
 * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 *
 * Hash: 0x1722C938 | Since: unknown | API-Set: client
 */
export declare function setManualShutdownLoadingScreen(manualShutdown: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x5B98AE30 | Since: unknown | API-Set: client
 */
export declare function setFocus(hasFocus: boolean, hasCursor: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x3FF5E5F8 | Since: unknown | API-Set: client
 */
export declare function setFocusKeepInput(keepInput: boolean): void;
/**
 * Set the z-index of the NUI resource.
 *
 * Hash: 0x3734AAFF | Since: unknown | API-Set: client
 */
export declare function setZindex(zIndex: number): void;
/**
 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 *
 * Hash: 0xB9234AFB | Since: unknown | API-Set: client
 */
export declare function shutdownLoadingScreen(): void;
/**
 * Will unregister and cleanup a registered NUI callback handler.
 *
 * Use along side the REGISTER_RAW_NUI_CALLBACK native.
 *
 * Hash: 0x7FB46432 | Since: unknown | API-Set: client
 */
export declare function unregisterRawCallback(callbackType: string): void;
