/**
 * No comment provided
 *
 * Hash: 0x3CF46F55C6585590 | Since: 1207
 */
export function gameIsSavePending() {
    return SavegameIsSavePending();
}
/**
 * See SAVEGAME_SAVE_SP
 *
 * Hash: 0x1840F3B30ED0105F | Since: 1207
 */
export function gameSaveMp(savegameType) {
    if (typeof savegameType === 'string')
        savegameType = GetHashKey(savegameType);
    return SavegameSaveMp(savegameType);
}
/**
 * enum eSavegameType : Hash
 * {
 * SAVEGAMETYPE_AMBIENT = 0x3CA4E1F8,
 * SAVEGAMETYPE_DEFAULT = 0xCB6ED080,
 * SAVEGAMETYPE_DELETE_CHAR = 0xCD35F947,
 * SAVEGAMETYPE_END_CREATE_NEWCHAR = 0x4C50A3CE,
 * SAVEGAMETYPE_END_MATCH = 0xE470ED50,
 * SAVEGAMETYPE_END_MISSION = 0x9A444E54,
 * SAVEGAMETYPE_END_SESSION = 0x6D23956C,
 * SAVEGAMETYPE_END_SHOPPING = 0xA311A6C4,
 * SAVEGAMETYPE_RANKUP = 0xE25F8017,
 * SAVEGAMETYPE_SCRIPT_MP_GLOBALS = 0xAFF30AD4,
 * SAVEGAMETYPE_SP_AUTOSAVE = 0xF4AE69EC,
 * SAVEGAMETYPE_SP_DEBUG = 0x6A8122FD,
 * SAVEGAMETYPE_SP_PROPERTY = 0xAE0AB38E
 * };
 *
 * Hash: 0x62C9EB51656D68CE | Since: 1207
 */
export function gameSaveSp(savegameType) {
    if (typeof savegameType === 'string')
        savegameType = GetHashKey(savegameType);
    return SavegameSaveSp(savegameType);
}
/**
 * No comment provided
 *
 * Hash: 0x443174C20B8B9E7F | Since: 1207
 */
export function _0x443174C20B8B9E7F() {
    Citizen.invokeNative('0x443174C20B8B9E7F', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4FB5869E2B37FC00 | Since: 1207
 */
export function _0x4FB5869E2B37FC00() {
    Citizen.invokeNative('0x4FB5869E2B37FC00');
}
/**
 * No comment provided
 *
 * Hash: 0x81F4E92BE3958364 | Since: 1207
 */
export function _0x81F4E92BE3958364() {
    Citizen.invokeNative('0x81F4E92BE3958364', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8E8FFB9E4AD051D2 | Since: 1207
 */
export function _0x8E8FFB9E4AD051D2() {
    Citizen.invokeNative('0x8E8FFB9E4AD051D2', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9BB83C4DD7BE0802 | Since: 1207
 */
export function _0x9BB83C4DD7BE0802() {
    Citizen.invokeNative('0x9BB83C4DD7BE0802', undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA7ECEBAFBAF997A5 | Since: 1436
 */
export function _0xA7ECEBAFBAF997A5(savegameType) {
    if (typeof savegameType === 'string')
        savegameType = GetHashKey(savegameType);
    return Citizen.invokeNative('0xA7ECEBAFBAF997A5', savegameType);
}
/**
 * No comment provided
 *
 * Hash: 0xA844FEB5C22C2C74 | Since: 1207
 */
export function _0xA844FEB5C22C2C74() {
    Citizen.invokeNative('0xA844FEB5C22C2C74');
}
/**
 * No comment provided
 *
 * Hash: 0xB00CE33465B5406D | Since: 1207
 */
export function _0xB00CE33465B5406D() {
    return Citizen.invokeNative('0xB00CE33465B5406D', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC0ABF784590798A9 | Since: 1207
 */
export function _0xC0ABF784590798A9() {
    Citizen.invokeNative('0xC0ABF784590798A9', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE0B45E983BFC0768 | Since: 1207
 */
export function _0xE0B45E983BFC0768() {
    Citizen.invokeNative('0xE0B45E983BFC0768');
}
/**
 * No comment provided
 *
 * Hash: 0xE8346E62FD7FB962 | Since: 1207
 */
export function _0xE8346E62FD7FB962() {
    Citizen.invokeNative('0xE8346E62FD7FB962');
}
/**
 * No comment provided
 *
 * Hash: 0xED4B0C1057892B2E | Since: 1207
 */
export function _0xED4B0C1057892B2E() {
    Citizen.invokeNative('0xED4B0C1057892B2E', undefined, undefined, undefined, undefined);
}
/**
 * Does the exact same as 0x529B9CCD0972AF4E
 *
 * Hash: 0xBB7F4273C186BC4B | Since: 1207
 */
export function gameGetBool() {
    return SavegameGetBool();
}
/**
 * No comment provided
 *
 * Hash: 0x35DEFECAE36D4FAE | Since: 1207
 */
export function gameGetFloat(variableName) {
    return SavegameGetFloat(variableName);
}
/**
 * No comment provided
 *
 * Hash: 0x529B9CCD0972AF4E | Since: 1207
 */
export function gameGetInt(variableName) {
    return SavegameGetInt(variableName);
}
/**
 * Does the exact same as 0x529B9CCD0972AF4E
 * Commonly used with time/timestamps
 *
 * Hash: 0x529B9CCD0972AF4D | Since: 1207
 */
export function gameGetInt2(variableName) {
    return SavegameGetInt2(variableName);
}
/**
 * Does the exact same as 0x529B9CCD0972AF4E
 * Commonly used with enums and flags
 *
 * Hash: 0xB25B5A375BE5BE26 | Since: 1207
 */
export function gameGetInt3(variableName) {
    return SavegameGetInt3(variableName);
}
/**
 * No comment provided
 *
 * Hash: 0x5A10D6506B2F2C63 | Since: 1207
 */
export function gameGetTextLabel23(variableName) {
    return SavegameGetTextLabel23(variableName);
}
/**
 * No comment provided
 *
 * Hash: 0x4845E7E7643A908C | Since: 1207
 */
export function gameGetTextLabel31(variableName) {
    return SavegameGetTextLabel31(variableName);
}
/**
 * No comment provided
 *
 * Hash: 0x186608A2AC6F9E88 | Since: 1207
 */
export function gameGetTextLabel63(variableName) {
    return SavegameGetTextLabel63(variableName);
}
/**
 * No comment provided
 *
 * Hash: 0x1431540BCA1A1BD2 | Since: 1207
 */
export function gameHasSaveFailed() {
    return Citizen.invokeNative('0x1431540BCA1A1BD2');
}
