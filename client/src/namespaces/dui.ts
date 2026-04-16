import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * Creates a DUI browser. This can be used to draw on a runtime texture using CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
 * 
 * Hash: 0x23EAF899
 */
export function create(url: string, width: number, height: number): number {
    return CreateDui(url, width, height);
}

/**
 * Destroys a DUI browser.
 * 
 * Hash: 0xA085CB10
 */
export function destroy(duiObject: number): void {
    DestroyDui(duiObject);
}

/**
 * Returns the NUI window handle for a specified DUI browser object.
 * 
 * Hash: 0x1655D41D
 */
export function getHandle(duiObject: number): string {
    return GetDuiHandle(duiObject);
}

/**
 * Returns whether or not a browser is created for a specified DUI browser object.
 * 
 * Hash: 0x7AAC3B4C
 */
export function isAvailable(duiObject: number): boolean {
    return IsDuiAvailable(duiObject);
}

/**
 * Sends a message to the specific DUI root page. This is similar to SEND_NUI_MESSAGE.
 * 
 * Hash: 0xCD380DA9
 */
export function sendMessage(duiObject: number, jsonString: string): void {
    SendDuiMessage(duiObject, jsonString);
}

/**
 * Injects a 'mouse down' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 * 
 * Hash: 0x5D01F191
 */
export function sendMouseDown(duiObject: number, button: string): void {
    SendDuiMouseDown(duiObject, button);
}

/**
 * Injects a 'mouse move' event for a DUI object. Coordinates are in browser space.
 * 
 * Hash: 0xD9D7A0AA
 */
export function sendMouseMove(duiObject: number, x: number, y: number): void {
    SendDuiMouseMove(duiObject, x, y);
}

/**
 * Injects a 'mouse up' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 * 
 * Hash: 0x1D735B93
 */
export function sendMouseUp(duiObject: number, button: string): void {
    SendDuiMouseUp(duiObject, button);
}

/**
 * Injects a 'mouse wheel' event for a DUI object.
 * 
 * Hash: 0x2D62133A
 */
export function sendMouseWheel(duiObject: number, deltaY: number, deltaX: number): void {
    SendDuiMouseWheel(duiObject, deltaY, deltaX);
}

/**
 * Navigates the specified DUI browser to a different URL.
 * 
 * Hash: 0xF761D9F3
 */
export function setUrl(duiObject: number, url: string): void {
    SetDuiUrl(duiObject, url);
}

