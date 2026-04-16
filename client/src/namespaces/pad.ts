import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * Disables the specified `rawKeyIndex`, making it not trigger the regular `IS_RAW_KEY_*` natives.
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x8BCF0014
 */
export function disableRawKeyThisFrame(rawKeyIndex: number): boolean {
    return DisableRawKeyThisFrame(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is pressed down, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x36366EC3
 */
export function isDisabledRawKeyDown(rawKeyIndex: number): boolean {
    return IsDisabledRawKeyDown(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is pressed, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x1F7CBBAA
 */
export function isDisabledRawKeyPressed(rawKeyIndex: number): boolean {
    return IsDisabledRawKeyPressed(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` was released, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x72B66C09
 */
export function isDisabledRawKeyReleased(rawKeyIndex: number): boolean {
    return IsDisabledRawKeyReleased(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is up, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x2C033875
 */
export function isDisabledRawKeyUp(rawKeyIndex: number): boolean {
    return IsDisabledRawKeyUp(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is pressed down on the keyboard.
 * 
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0xD95A7387
 */
export function isRawKeyDown(rawKeyIndex: number): boolean {
    return IsRawKeyDown(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is pressed on the keyboard.
 * 
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x69F7C29E
 */
export function isRawKeyPressed(rawKeyIndex: number): boolean {
    return IsRawKeyPressed(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` was just released on the keyboard.
 * 
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0xEAA50861
 */
export function isRawKeyReleased(rawKeyIndex: number): boolean {
    return IsRawKeyReleased(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is up  on the keyboard.
 * 
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x36F4E505
 */
export function isRawKeyUp(rawKeyIndex: number): boolean {
    return IsRawKeyUp(rawKeyIndex);
}

