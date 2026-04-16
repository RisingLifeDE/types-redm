/**
 * Disables the specified `rawKeyIndex`, making it not trigger the regular `IS_RAW_KEY_*` natives.
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x8BCF0014 | Since: unknown | API-Set: client
 */
export function disableRawKeyThisFrame(rawKeyIndex) {
    return DisableRawKeyThisFrame(rawKeyIndex);
}
/**
 * Gets if the specified `rawKeyIndex` is pressed down, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x36366EC3 | Since: unknown | API-Set: client
 */
export function isDisabledRawKeyDown(rawKeyIndex) {
    return IsDisabledRawKeyDown(rawKeyIndex);
}
/**
 * Gets if the specified `rawKeyIndex` is pressed, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x1F7CBBAA | Since: unknown | API-Set: client
 */
export function isDisabledRawKeyPressed(rawKeyIndex) {
    return IsDisabledRawKeyPressed(rawKeyIndex);
}
/**
 * Gets if the specified `rawKeyIndex` was released, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x72B66C09 | Since: unknown | API-Set: client
 */
export function isDisabledRawKeyReleased(rawKeyIndex) {
    return IsDisabledRawKeyReleased(rawKeyIndex);
}
/**
 * Gets if the specified `rawKeyIndex` is up, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x2C033875 | Since: unknown | API-Set: client
 */
export function isDisabledRawKeyUp(rawKeyIndex) {
    return IsDisabledRawKeyUp(rawKeyIndex);
}
/**
 * Gets if the specified `rawKeyIndex` is pressed down on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0xD95A7387 | Since: unknown | API-Set: client
 */
export function isRawKeyDown(rawKeyIndex) {
    return IsRawKeyDown(rawKeyIndex);
}
/**
 * Gets if the specified `rawKeyIndex` is pressed on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x69F7C29E | Since: unknown | API-Set: client
 */
export function isRawKeyPressed(rawKeyIndex) {
    return IsRawKeyPressed(rawKeyIndex);
}
/**
 * Gets if the specified `rawKeyIndex` was just released on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0xEAA50861 | Since: unknown | API-Set: client
 */
export function isRawKeyReleased(rawKeyIndex) {
    return IsRawKeyReleased(rawKeyIndex);
}
/**
 * Gets if the specified `rawKeyIndex` is up  on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x36F4E505 | Since: unknown | API-Set: client
 */
export function isRawKeyUp(rawKeyIndex) {
    return IsRawKeyUp(rawKeyIndex);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xCB0360EFEFB2580D | Since: 1207 | API-Set: unknown
 */
export function clearControlLightEffect(control) {
    ClearControlLightEffect(control);
}
/**
 * Old name: _CLEAR_SUPPRESSED_PAD_RUMBLE
 *
 * Hash: 0xA0CEFCEA390AAB9B | Since: 1207 | API-Set: unknown
 */
export function clearControlShakeSuppressedId(control) {
    ClearControlShakeSuppressedId(control);
}
/**
 * No comment provided
 *
 * Hash: 0x5F4B6931816E599B | Since: 1207 | API-Set: unknown
 */
export function disableAllControlActions(control) {
    DisableAllControlActions(control);
}
/**
 * No comment provided
 *
 * Hash: 0xFE99B66D079CF6BC | Since: 1207 | API-Set: unknown
 */
export function disableControlAction(control, action, disableRelatedActions) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    DisableControlAction(control, action, disableRelatedActions);
}
/**
 * No comment provided
 *
 * Hash: 0x351220255D64C155 | Since: 1207 | API-Set: unknown
 */
export function enableControlAction(control, action, enableRelatedActions) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    EnableControlAction(control, action, enableRelatedActions);
}
/**
 * Returns time in ms since last input.
 *
 * Hash: 0xD7D22F5592AED8BA | Since: 1207 | API-Set: unknown
 */
export function getControlHowLongAgo(control) {
    return GetControlHowLongAgo(control);
}
/**
 * No comment provided
 *
 * Hash: 0xEC3C9B8D5327B563 | Since: 1207 | API-Set: unknown
 */
export function getControlNormal(control, action) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    return GetControlNormal(control, action);
}
/**
 * No comment provided
 *
 * Hash: 0x5B84D09CEC5209C5 | Since: 1207 | API-Set: unknown
 */
export function getControlUnboundNormal(control, action) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    return GetControlUnboundNormal(control, action);
}
/**
 * No comment provided
 *
 * Hash: 0xD95E79E8686D2C27 | Since: 1207 | API-Set: unknown
 */
export function getControlValue(control, action) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    return GetControlValue(control, action);
}
/**
 * No comment provided
 *
 * Hash: 0x11E65974A982637C | Since: 1207 | API-Set: unknown
 */
export function getDisabledControlNormal(control, action) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    return GetDisabledControlNormal(control, action);
}
/**
 * No comment provided
 *
 * Hash: 0x4F8A26A890FD62FB | Since: 1207 | API-Set: unknown
 */
export function getDisabledControlUnboundNormal(control, action) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    return GetDisabledControlUnboundNormal(control, action);
}
/**
 * No comment provided
 *
 * Hash: 0x6CD79468A1E595C6 | Since: 1207 | API-Set: unknown
 */
export function haveControlsChanged(control) {
    return HaveControlsChanged(control);
}
/**
 * No comment provided
 *
 * Hash: 0x1CEA6BFDF248E5D9 | Since: 1207 | API-Set: unknown
 */
export function isControlEnabled(control, action) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    return IsControlEnabled(control, action);
}
/**
 * No comment provided
 *
 * Hash: 0x580417101DDB492F | Since: 1207 | API-Set: unknown
 */
export function isControlJustPressed(control, action) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    return IsControlJustPressed(control, action);
}
/**
 * No comment provided
 *
 * Hash: 0x50F940259D3841E6 | Since: 1207 | API-Set: unknown
 */
export function isControlJustReleased(control, action) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    return IsControlJustReleased(control, action);
}
/**
 * No comment provided
 *
 * Hash: 0xF3A21BCD95725A4A | Since: 1207 | API-Set: unknown
 */
export function isControlPressed(control, action) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    return IsControlPressed(control, action);
}
/**
 * No comment provided
 *
 * Hash: 0x648EE3E7F38877DD | Since: 1207 | API-Set: unknown
 */
export function isControlReleased(control, action) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    return IsControlReleased(control, action);
}
/**
 * No comment provided
 *
 * Hash: 0x91AEF906BCA88877 | Since: 1207 | API-Set: unknown
 */
export function isDisabledControlJustPressed(control, action) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    return IsDisabledControlJustPressed(control, action);
}
/**
 * No comment provided
 *
 * Hash: 0x305C8DCD79DA8B0F | Since: 1207 | API-Set: unknown
 */
export function isDisabledControlJustReleased(control, action) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    return IsDisabledControlJustReleased(control, action);
}
/**
 * No comment provided
 *
 * Hash: 0xE2587F8CBBD87B1D | Since: 1207 | API-Set: unknown
 */
export function isDisabledControlPressed(control, action) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    return IsDisabledControlPressed(control, action);
}
/**
 * No comment provided
 *
 * Hash: 0x77B612531280010D | Since: 1207 | API-Set: unknown
 */
export function isLookInverted() {
    return IsLookInverted();
}
/**
 * padIndex is not used
 *
 * Old name: _IS_USING_KEYBOARD
 *
 * Hash: 0xA571D46727E2B718 | Since: 1207 | API-Set: unknown
 */
export function isUsingKeyboardAndMouse(control) {
    return IsUsingKeyboardAndMouse(control);
}
/**
 * nullsub, doesn't do anything
 *
 * Old name: _SET_CONTROL_GROUP_COLOR
 *
 * Hash: 0x8290252FFF36ACB5 | Since: 1207 | API-Set: unknown
 */
export function setControlLightEffectColor(control, red, green, blue) {
    SetControlLightEffectColor(control, red, green, blue);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xA45884DB10EC7EE3 | Since: 1207 | API-Set: unknown
 */
export function setControlLightEffectFlashingColor(control, red, green, blue) {
    SetControlLightEffectFlashingColor(control, red, green, blue);
}
/**
 * Old name: SET_PAD_SHAKE
 *
 * Hash: 0x48B3886C1358D0D5 | Since: 1207 | API-Set: unknown
 */
export function setControlShake(control, duration, frequency) {
    SetControlShake(control, duration, frequency);
}
/**
 * Old name: SET_PAD_SHAKE_SUPPRESSED_ID
 *
 * Hash: 0xF239400E16C23E08 | Since: 1207 | API-Set: unknown
 */
export function setControlShakeSuppressedId(control, uniqueId) {
    SetControlShakeSuppressedId(control, uniqueId);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x14D29BB12D47F68C | Since: 1207 | API-Set: unknown
 */
export function setControlTriggerShake(control, leftDuration, leftFrequency, rightDuration, rightFrequency) {
    SetControlTriggerShake(control, leftDuration, leftFrequency, rightDuration, rightFrequency);
}
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
export function setControlValueNextFrame(control, action, value) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    return SetControlValueNextFrame(control, action, value);
}
/**
 * No comment provided
 *
 * Hash: 0xEDE476E5EE29EDB1 | Since: 1207 | API-Set: unknown
 */
export function setInputExclusive(control, action) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    SetInputExclusive(control, action);
}
/**
 * Old name: STOP_PAD_SHAKE
 *
 * Hash: 0x38C16A305E8CDC8D | Since: 1207 | API-Set: unknown
 */
export function stopControlShake(control) {
    StopControlShake(control);
}
/**
 * _IS_R* - _IS_S*
 *
 * Hash: 0x1252C029FC8EBB4D | Since: 1207 | API-Set: unknown
 */
export function _0x1252C029FC8EBB4D() {
    return Citizen.invokeNative('0x1252C029FC8EBB4D');
}
/**
 * No comment provided
 *
 * Hash: 0x43F35DDB2905D945 | Since: 1207 | API-Set: unknown
 */
export function _0x43F35DDB2905D945() {
    return Citizen.invokeNative('0x43F35DDB2905D945', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x52C68E92D6E23ADD | Since: 1311 | API-Set: unknown
 */
export function _0x52C68E92D6E23ADD() {
    Citizen.invokeNative('0x52C68E92D6E23ADD', undefined);
}
/**
 * rumbleCurve: common_0/data/rumblecurves.meta
 *
 * Hash: 0x5F217BC1190503D8 | Since: 1207 | API-Set: unknown
 */
export function _0x5F217BC1190503D8() {
    return Citizen.invokeNative('0x5F217BC1190503D8', 0);
}
/**
 * No comment provided
 *
 * Hash: 0x709BA8C08C5C008D | Since: 1207 | API-Set: unknown
 */
export function _0x709BA8C08C5C008D() {
    Citizen.invokeNative('0x709BA8C08C5C008D');
}
/**
 * No comment provided
 *
 * Hash: 0xBD629C1C4F501C80 | Since: 1207 | API-Set: unknown
 */
export function _0xBD629C1C4F501C80() {
    return Citizen.invokeNative('0xBD629C1C4F501C80', undefined);
}
/**
 * Gets the current control context. See: _SET_CONTROL_CONTEXT
 *
 * Hash: 0xDDCEB0F26C89C00F | Since: 1207 | API-Set: unknown
 */
export function getCurrentControlContext(control) {
    return GetCurrentControlContext(control);
}
/**
 * No comment provided
 *
 * Hash: 0x771DFCB24D19C2F6 | Since: 1207 | API-Set: unknown
 */
export function getDisabledControlHowLongAgo(control) {
    return GetDisabledControlHowLongAgo(control);
}
/**
 * No comment provided
 *
 * Hash: 0xBC0884BC590951C7 | Since: 1207 | API-Set: unknown
 */
export function isControlActionValid(action, control) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    return IsControlActionValid(action, control);
}
/**
 * Sets the current control context. Must be called every frame.
 *
 * context: https://alloc8or.re/rdr3/doc/misc/input_contexts.txt
 * For more information, see common:/data/control/settings.meta
 * https://github.com/femga/rdr3_discoveries/tree/master/Controls
 *
 * Hash: 0x2804658EB7D8A50B | Since: 1207 | API-Set: unknown
 */
export function setControlContext(control, context) {
    if (typeof context === 'string')
        context = GetHashKey(context);
    SetControlContext(control, context);
}
