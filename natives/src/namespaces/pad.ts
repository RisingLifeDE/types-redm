import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xCB0360EFEFB2580D | Since: 1207
 */
export function clearControlLightEffect(control: number): void {
    ClearControlLightEffect(control);
}

/**
 * Old name: _CLEAR_SUPPRESSED_PAD_RUMBLE
 * 
 * Hash: 0xA0CEFCEA390AAB9B | Since: 1207
 */
export function clearControlShakeSuppressedId(control: number): void {
    ClearControlShakeSuppressedId(control);
}

/**
 * No comment provided
 * 
 * Hash: 0x5F4B6931816E599B | Since: 1207
 */
export function disableAllControlActions(control: number): void {
    DisableAllControlActions(control);
}

/**
 * No comment provided
 * 
 * Hash: 0xFE99B66D079CF6BC | Since: 1207
 */
export function disableControlAction(control: number, action: number | string, disableRelatedActions: boolean): void {
    if (typeof action === 'string') action = GetHashKey(action)
    DisableControlAction(control, action, disableRelatedActions);
}

/**
 * No comment provided
 * 
 * Hash: 0x351220255D64C155 | Since: 1207
 */
export function enableControlAction(control: number, action: number | string, enableRelatedActions: boolean): void {
    if (typeof action === 'string') action = GetHashKey(action)
    EnableControlAction(control, action, enableRelatedActions);
}

/**
 * Returns time in ms since last input.
 * 
 * Hash: 0xD7D22F5592AED8BA | Since: 1207
 */
export function getControlHowLongAgo(control: number): number {
    return GetControlHowLongAgo(control);
}

/**
 * No comment provided
 * 
 * Hash: 0xEC3C9B8D5327B563 | Since: 1207
 */
export function getControlNormal(control: number, action: number | string): number {
    if (typeof action === 'string') action = GetHashKey(action)
    return GetControlNormal(control, action);
}

/**
 * No comment provided
 * 
 * Hash: 0x5B84D09CEC5209C5 | Since: 1207
 */
export function getControlUnboundNormal(control: number, action: number | string): number {
    if (typeof action === 'string') action = GetHashKey(action)
    return GetControlUnboundNormal(control, action);
}

/**
 * No comment provided
 * 
 * Hash: 0xD95E79E8686D2C27 | Since: 1207
 */
export function getControlValue(control: number, action: number | string): number {
    if (typeof action === 'string') action = GetHashKey(action)
    return GetControlValue(control, action);
}

/**
 * No comment provided
 * 
 * Hash: 0x11E65974A982637C | Since: 1207
 */
export function getDisabledControlNormal(control: number, action: number | string): number {
    if (typeof action === 'string') action = GetHashKey(action)
    return GetDisabledControlNormal(control, action);
}

/**
 * No comment provided
 * 
 * Hash: 0x4F8A26A890FD62FB | Since: 1207
 */
export function getDisabledControlUnboundNormal(control: number, action: number | string): number {
    if (typeof action === 'string') action = GetHashKey(action)
    return GetDisabledControlUnboundNormal(control, action);
}

/**
 * No comment provided
 * 
 * Hash: 0x6CD79468A1E595C6 | Since: 1207
 */
export function haveControlsChanged(control: number): boolean {
    return HaveControlsChanged(control);
}

/**
 * No comment provided
 * 
 * Hash: 0x1CEA6BFDF248E5D9 | Since: 1207
 */
export function isControlEnabled(control: number, action: number | string): boolean {
    if (typeof action === 'string') action = GetHashKey(action)
    return IsControlEnabled(control, action);
}

/**
 * No comment provided
 * 
 * Hash: 0x580417101DDB492F | Since: 1207
 */
export function isControlJustPressed(control: number, action: number | string): boolean {
    if (typeof action === 'string') action = GetHashKey(action)
    return IsControlJustPressed(control, action);
}

/**
 * No comment provided
 * 
 * Hash: 0x50F940259D3841E6 | Since: 1207
 */
export function isControlJustReleased(control: number, action: number | string): boolean {
    if (typeof action === 'string') action = GetHashKey(action)
    return IsControlJustReleased(control, action);
}

/**
 * No comment provided
 * 
 * Hash: 0xF3A21BCD95725A4A | Since: 1207
 */
export function isControlPressed(control: number, action: number | string): boolean {
    if (typeof action === 'string') action = GetHashKey(action)
    return IsControlPressed(control, action);
}

/**
 * No comment provided
 * 
 * Hash: 0x648EE3E7F38877DD | Since: 1207
 */
export function isControlReleased(control: number, action: number | string): boolean {
    if (typeof action === 'string') action = GetHashKey(action)
    return IsControlReleased(control, action);
}

/**
 * No comment provided
 * 
 * Hash: 0x91AEF906BCA88877 | Since: 1207
 */
export function isDisabledControlJustPressed(control: number, action: number | string): boolean {
    if (typeof action === 'string') action = GetHashKey(action)
    return IsDisabledControlJustPressed(control, action);
}

/**
 * No comment provided
 * 
 * Hash: 0x305C8DCD79DA8B0F | Since: 1207
 */
export function isDisabledControlJustReleased(control: number, action: number | string): boolean {
    if (typeof action === 'string') action = GetHashKey(action)
    return IsDisabledControlJustReleased(control, action);
}

/**
 * No comment provided
 * 
 * Hash: 0xE2587F8CBBD87B1D | Since: 1207
 */
export function isDisabledControlPressed(control: number, action: number | string): boolean {
    if (typeof action === 'string') action = GetHashKey(action)
    return IsDisabledControlPressed(control, action);
}

/**
 * No comment provided
 * 
 * Hash: 0x77B612531280010D | Since: 1207
 */
export function isLookInverted(): boolean {
    return IsLookInverted();
}

/**
 * padIndex is not used
 * 
 * Old name: _IS_USING_KEYBOARD
 * 
 * Hash: 0xA571D46727E2B718 | Since: 1207
 */
export function isUsingKeyboardAndMouse(control: number): boolean {
    return IsUsingKeyboardAndMouse(control);
}

/**
 * nullsub, doesn't do anything
 * 
 * Old name: _SET_CONTROL_GROUP_COLOR
 * 
 * Hash: 0x8290252FFF36ACB5 | Since: 1207
 */
export function setControlLightEffectColor(control: number, red: number, green: number, blue: number): void {
    SetControlLightEffectColor(control, red, green, blue);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xA45884DB10EC7EE3 | Since: 1207
 */
export function setControlLightEffectFlashingColor(control: number, red: number, green: number, blue: number): void {
    SetControlLightEffectFlashingColor(control, red, green, blue);
}

/**
 * Old name: SET_PAD_SHAKE
 * 
 * Hash: 0x48B3886C1358D0D5 | Since: 1207
 */
export function setControlShake(control: number, duration: number, frequency: number): void {
    SetControlShake(control, duration, frequency);
}

/**
 * Old name: SET_PAD_SHAKE_SUPPRESSED_ID
 * 
 * Hash: 0xF239400E16C23E08 | Since: 1207
 */
export function setControlShakeSuppressedId(control: number, uniqueId: number): void {
    SetControlShakeSuppressedId(control, uniqueId);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x14D29BB12D47F68C | Since: 1207
 */
export function setControlTriggerShake(control: number, leftDuration: number, leftFrequency: number, rightDuration: number, rightFrequency: number): void {
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
 * Hash: 0xE8A25867FBA3B05E | Since: 1207
 */
export function setControlValueNextFrame(control: number, action: number | string, value: number): boolean {
    if (typeof action === 'string') action = GetHashKey(action)
    return SetControlValueNextFrame(control, action, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xEDE476E5EE29EDB1 | Since: 1207
 */
export function setInputExclusive(control: number, action: number | string): void {
    if (typeof action === 'string') action = GetHashKey(action)
    SetInputExclusive(control, action);
}

/**
 * Old name: STOP_PAD_SHAKE
 * 
 * Hash: 0x38C16A305E8CDC8D | Since: 1207
 */
export function stopControlShake(control: number): void {
    StopControlShake(control);
}

/**
 * _IS_R* - _IS_S*
 * 
 * Hash: 0x1252C029FC8EBB4D | Since: 1207
 */
export function _0x1252C029FC8EBB4D(): boolean {
    return Citizen.invokeNative('0x1252C029FC8EBB4D');
}

/**
 * No comment provided
 * 
 * Hash: 0x43F35DDB2905D945 | Since: 1207
 */
export function _0x43F35DDB2905D945(): any {
    return Citizen.invokeNative('0x43F35DDB2905D945', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x52C68E92D6E23ADD | Since: 1311
 */
export function _0x52C68E92D6E23ADD(): void {
    Citizen.invokeNative('0x52C68E92D6E23ADD', undefined);
}

/**
 * rumbleCurve: common_0/data/rumblecurves.meta
 * 
 * Hash: 0x5F217BC1190503D8 | Since: 1207
 */
export function _0x5F217BC1190503D8(): string {
    return Citizen.invokeNative('0x5F217BC1190503D8', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x709BA8C08C5C008D | Since: 1207
 */
export function _0x709BA8C08C5C008D(): void {
    Citizen.invokeNative('0x709BA8C08C5C008D');
}

/**
 * No comment provided
 * 
 * Hash: 0xBD629C1C4F501C80 | Since: 1207
 */
export function _0xBD629C1C4F501C80(): any {
    return Citizen.invokeNative('0xBD629C1C4F501C80', undefined);
}

/**
 * Gets the current control context. See: _SET_CONTROL_CONTEXT
 * 
 * Hash: 0xDDCEB0F26C89C00F | Since: 1207
 */
export function getCurrentControlContext(control: number): number {
    return GetCurrentControlContext(control);
}

/**
 * No comment provided
 * 
 * Hash: 0x771DFCB24D19C2F6 | Since: 1207
 */
export function getDisabledControlHowLongAgo(control: number): number {
    return GetDisabledControlHowLongAgo(control);
}

/**
 * No comment provided
 * 
 * Hash: 0xBC0884BC590951C7 | Since: 1207
 */
export function isControlActionValid(action: number | string, control: number): boolean {
    if (typeof action === 'string') action = GetHashKey(action)
    return IsControlActionValid(action, control);
}

/**
 * Sets the current control context. Must be called every frame.
 * 
 * context: https://alloc8or.re/rdr3/doc/misc/input_contexts.txt
 * For more information, see common:/data/control/settings.meta
 * https://github.com/femga/rdr3_discoveries/tree/master/Controls
 * 
 * Hash: 0x2804658EB7D8A50B | Since: 1207
 */
export function setControlContext(control: number, context: number | string): void {
    if (typeof context === 'string') context = GetHashKey(context)
    SetControlContext(control, context);
}

