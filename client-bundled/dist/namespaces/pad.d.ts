/**
 * Disables the specified `rawKeyIndex`, making it not trigger the regular `IS_RAW_KEY_*` natives.
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x8BCF0014 | Since: unknown | API-Set: client
 */
export declare function disableRawKeyThisFrame(rawKeyIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` is pressed down, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x36366EC3 | Since: unknown | API-Set: client
 */
export declare function isDisabledRawKeyDown(rawKeyIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` is pressed, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x1F7CBBAA | Since: unknown | API-Set: client
 */
export declare function isDisabledRawKeyPressed(rawKeyIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` was released, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x72B66C09 | Since: unknown | API-Set: client
 */
export declare function isDisabledRawKeyReleased(rawKeyIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` is up, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x2C033875 | Since: unknown | API-Set: client
 */
export declare function isDisabledRawKeyUp(rawKeyIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` is pressed down on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0xD95A7387 | Since: unknown | API-Set: client
 */
export declare function isRawKeyDown(rawKeyIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` is pressed on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x69F7C29E | Since: unknown | API-Set: client
 */
export declare function isRawKeyPressed(rawKeyIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` was just released on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0xEAA50861 | Since: unknown | API-Set: client
 */
export declare function isRawKeyReleased(rawKeyIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` is up  on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x36F4E505 | Since: unknown | API-Set: client
 */
export declare function isRawKeyUp(rawKeyIndex: number): boolean;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xCB0360EFEFB2580D | Since: 1207 | API-Set: unknown
 */
export declare function clearControlLightEffect(control: number): void;
/**
 * Old name: _CLEAR_SUPPRESSED_PAD_RUMBLE
 *
 * Hash: 0xA0CEFCEA390AAB9B | Since: 1207 | API-Set: unknown
 */
export declare function clearControlShakeSuppressedId(control: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5F4B6931816E599B | Since: 1207 | API-Set: unknown
 */
export declare function disableAllControlActions(control: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFE99B66D079CF6BC | Since: 1207 | API-Set: unknown
 */
export declare function disableControlAction(control: number, action: number | string, disableRelatedActions: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x351220255D64C155 | Since: 1207 | API-Set: unknown
 */
export declare function enableControlAction(control: number, action: number | string, enableRelatedActions: boolean): void;
/**
 * Returns time in ms since last input.
 *
 * Hash: 0xD7D22F5592AED8BA | Since: 1207 | API-Set: unknown
 */
export declare function getControlHowLongAgo(control: number): number;
/**
 * No comment provided
 *
 * Hash: 0xEC3C9B8D5327B563 | Since: 1207 | API-Set: unknown
 */
export declare function getControlNormal(control: number, action: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x5B84D09CEC5209C5 | Since: 1207 | API-Set: unknown
 */
export declare function getControlUnboundNormal(control: number, action: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xD95E79E8686D2C27 | Since: 1207 | API-Set: unknown
 */
export declare function getControlValue(control: number, action: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x11E65974A982637C | Since: 1207 | API-Set: unknown
 */
export declare function getDisabledControlNormal(control: number, action: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x4F8A26A890FD62FB | Since: 1207 | API-Set: unknown
 */
export declare function getDisabledControlUnboundNormal(control: number, action: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x6CD79468A1E595C6 | Since: 1207 | API-Set: unknown
 */
export declare function haveControlsChanged(control: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1CEA6BFDF248E5D9 | Since: 1207 | API-Set: unknown
 */
export declare function isControlEnabled(control: number, action: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x580417101DDB492F | Since: 1207 | API-Set: unknown
 */
export declare function isControlJustPressed(control: number, action: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x50F940259D3841E6 | Since: 1207 | API-Set: unknown
 */
export declare function isControlJustReleased(control: number, action: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF3A21BCD95725A4A | Since: 1207 | API-Set: unknown
 */
export declare function isControlPressed(control: number, action: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x648EE3E7F38877DD | Since: 1207 | API-Set: unknown
 */
export declare function isControlReleased(control: number, action: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x91AEF906BCA88877 | Since: 1207 | API-Set: unknown
 */
export declare function isDisabledControlJustPressed(control: number, action: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x305C8DCD79DA8B0F | Since: 1207 | API-Set: unknown
 */
export declare function isDisabledControlJustReleased(control: number, action: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE2587F8CBBD87B1D | Since: 1207 | API-Set: unknown
 */
export declare function isDisabledControlPressed(control: number, action: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x77B612531280010D | Since: 1207 | API-Set: unknown
 */
export declare function isLookInverted(): boolean;
/**
 * padIndex is not used
 *
 * Old name: _IS_USING_KEYBOARD
 *
 * Hash: 0xA571D46727E2B718 | Since: 1207 | API-Set: unknown
 */
export declare function isUsingKeyboardAndMouse(control: number): boolean;
/**
 * nullsub, doesn't do anything
 *
 * Old name: _SET_CONTROL_GROUP_COLOR
 *
 * Hash: 0x8290252FFF36ACB5 | Since: 1207 | API-Set: unknown
 */
export declare function setControlLightEffectColor(control: number, red: number, green: number, blue: number): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xA45884DB10EC7EE3 | Since: 1207 | API-Set: unknown
 */
export declare function setControlLightEffectFlashingColor(control: number, red: number, green: number, blue: number): void;
/**
 * Old name: SET_PAD_SHAKE
 *
 * Hash: 0x48B3886C1358D0D5 | Since: 1207 | API-Set: unknown
 */
export declare function setControlShake(control: number, duration: number, frequency: number): void;
/**
 * Old name: SET_PAD_SHAKE_SUPPRESSED_ID
 *
 * Hash: 0xF239400E16C23E08 | Since: 1207 | API-Set: unknown
 */
export declare function setControlShakeSuppressedId(control: number, uniqueId: number): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x14D29BB12D47F68C | Since: 1207 | API-Set: unknown
 */
export declare function setControlTriggerShake(control: number, leftDuration: number, leftFrequency: number, rightDuration: number, rightFrequency: number): void;
/**
 * This is for simulating player input.
 * value is a float value from 0 - 1
 *
 * control: see IS_CONTROL_ENABLED
 *
 * Old name: _SET_CONTROL_NORMAL
 *
 * Hash: 0xE8A25867FBA3B05E | Since: 1207 | API-Set: unknown
 */
export declare function setControlValueNextFrame(control: number, action: number | string, value: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEDE476E5EE29EDB1 | Since: 1207 | API-Set: unknown
 */
export declare function setInputExclusive(control: number, action: number | string): void;
/**
 * Old name: STOP_PAD_SHAKE
 *
 * Hash: 0x38C16A305E8CDC8D | Since: 1207 | API-Set: unknown
 */
export declare function stopControlShake(control: number): void;
/**
 * _IS_R* - _IS_S*
 *
 * Hash: 0x1252C029FC8EBB4D | Since: 1207 | API-Set: unknown
 */
export declare function _0x1252C029FC8EBB4D(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x43F35DDB2905D945 | Since: 1207 | API-Set: unknown
 */
export declare function _0x43F35DDB2905D945(): any;
/**
 * No comment provided
 *
 * Hash: 0x52C68E92D6E23ADD | Since: 1311 | API-Set: unknown
 */
export declare function _0x52C68E92D6E23ADD(): void;
/**
 * rumbleCurve: common_0/data/rumblecurves.meta
 *
 * Hash: 0x5F217BC1190503D8 | Since: 1207 | API-Set: unknown
 */
export declare function _0x5F217BC1190503D8(): string;
/**
 * No comment provided
 *
 * Hash: 0x709BA8C08C5C008D | Since: 1207 | API-Set: unknown
 */
export declare function _0x709BA8C08C5C008D(): void;
/**
 * No comment provided
 *
 * Hash: 0xBD629C1C4F501C80 | Since: 1207 | API-Set: unknown
 */
export declare function _0xBD629C1C4F501C80(): any;
/**
 * Gets the current control context. See: _SET_CONTROL_CONTEXT
 *
 * Hash: 0xDDCEB0F26C89C00F | Since: 1207 | API-Set: unknown
 */
export declare function getCurrentControlContext(control: number): number;
/**
 * No comment provided
 *
 * Hash: 0x771DFCB24D19C2F6 | Since: 1207 | API-Set: unknown
 */
export declare function getDisabledControlHowLongAgo(control: number): number;
/**
 * No comment provided
 *
 * Hash: 0xBC0884BC590951C7 | Since: 1207 | API-Set: unknown
 */
export declare function isControlActionValid(action: number | string, control: number): boolean;
/**
 * Sets the current control context. Must be called every frame.
 *
 * context: https://alloc8or.re/rdr3/doc/misc/input_contexts.txt
 * For more information, see common:/data/control/settings.meta
 * https://github.com/femga/rdr3_discoveries/tree/master/Controls
 *
 * Hash: 0x2804658EB7D8A50B | Since: 1207 | API-Set: unknown
 */
export declare function setControlContext(control: number, context: number | string): void;
