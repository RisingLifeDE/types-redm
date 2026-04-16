/**
 * Creates a DUI browser. This can be used to draw on a runtime texture using CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
 *
 * Hash: 0x23EAF899 | Since: unknown | API-Set: client
 */
export declare function create(url: string, width: number, height: number): number;
/**
 * Destroys a DUI browser.
 *
 * Hash: 0xA085CB10 | Since: unknown | API-Set: client
 */
export declare function destroy(duiObject: number): void;
/**
 * Returns the NUI window handle for a specified DUI browser object.
 *
 * Hash: 0x1655D41D | Since: unknown | API-Set: client
 */
export declare function getHandle(duiObject: number): string;
/**
 * Returns whether or not a browser is created for a specified DUI browser object.
 *
 * Hash: 0x7AAC3B4C | Since: unknown | API-Set: client
 */
export declare function isAvailable(duiObject: number): boolean;
/**
 * Sends a message to the specific DUI root page. This is similar to SEND_NUI_MESSAGE.
 *
 * Hash: 0xCD380DA9 | Since: unknown | API-Set: client
 */
export declare function sendMessage(duiObject: number, jsonString: string): void;
/**
 * Injects a 'mouse down' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 *
 * Hash: 0x5D01F191 | Since: unknown | API-Set: client
 */
export declare function sendMouseDown(duiObject: number, button: string): void;
/**
 * Injects a 'mouse move' event for a DUI object. Coordinates are in browser space.
 *
 * Hash: 0xD9D7A0AA | Since: unknown | API-Set: client
 */
export declare function sendMouseMove(duiObject: number, x: number, y: number): void;
/**
 * Injects a 'mouse up' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 *
 * Hash: 0x1D735B93 | Since: unknown | API-Set: client
 */
export declare function sendMouseUp(duiObject: number, button: string): void;
/**
 * Injects a 'mouse wheel' event for a DUI object.
 *
 * Hash: 0x2D62133A | Since: unknown | API-Set: client
 */
export declare function sendMouseWheel(duiObject: number, deltaY: number, deltaX: number): void;
/**
 * Navigates the specified DUI browser to a different URL.
 *
 * Hash: 0xF761D9F3 | Since: unknown | API-Set: client
 */
export declare function setUrl(duiObject: number, url: string): void;
