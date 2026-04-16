import { Vector3, IEntity, IPed, IPlayer } from '@risinglife/redm-shared';
/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 *
 * Hash: 0xCD949E20 | Since: unknown | API-Set: client
 */
export function getComponentAlign(id) {
    return GetHudComponentAlign(id);
}
/**
 * No comment provided
 *
 * Hash: 0xA91866BC | Since: unknown | API-Set: client
 */
export function getComponentName(id) {
    return GetHudComponentName(id);
}
/**
 * No comment provided
 *
 * Hash: 0x12217D33 | Since: unknown | API-Set: client
 */
export function getComponentSize(id) {
    return new Vector3(GetHudComponentSize(id));
}
/**
 * Returns the zoom level data by index from mapzoomdata.meta file.
 *
 * Hash: 0x1363A998 | Since: unknown | API-Set: client
 */
export function getMapZoomDataLevel(index) {
    return GetMapZoomDataLevel(index);
}
/**
 * Returns true if the minimap is currently expanded. False if it's the normal minimap state.
 * Use [`IsBigmapFull`](#\_0x66EE14B2) to check if the full map is currently revealed on the minimap.
 *
 * Hash: 0xFFF65C63 | Since: unknown | API-Set: client
 */
export function isBigmapActive() {
    return IsBigmapActive();
}
/**
 * No comment provided
 *
 * Hash: 0x66EE14B2 | Since: unknown | API-Set: client
 */
export function isBigmapFull() {
    return IsBigmapFull();
}
/**
 * Resets values from the zoom level data by index to defaults from mapzoomdata.meta.
 *
 * Hash: 0x11A5B7ED | Since: unknown | API-Set: client
 */
export function resetMapZoomDataLevel(index) {
    ResetMapZoomDataLevel(index);
}
/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 *
 * Hash: 0xEED219F2 | Since: unknown | API-Set: client
 */
export function setComponentAlign(id, horizontalAlign, verticalAlign) {
    SetHudComponentAlign(id, horizontalAlign, verticalAlign);
}
/**
 * No comment provided
 *
 * Hash: 0x7644A9FA | Since: unknown | API-Set: client
 */
export function setComponentSize(id, x, y) {
    SetHudComponentSize(id, x, y);
}
/**
 * Sets values to the zoom level data by index.
 *
 * Hash: 0x447C718E | Since: unknown | API-Set: client
 */
export function setMapZoomDataLevel(index, zoomScale, zoomSpeed, scrollSpeed, tilesX, tilesY) {
    SetMapZoomDataLevel(index, zoomScale, zoomSpeed, scrollSpeed, tilesX, tilesY);
}
/**
 * Get the minimap type:
 *
 * ```
 * 0 = Off,
 * 1 = Regular,
 * 2 = Expanded,
 * 3 = Simple,
 * ```
 *
 * Hash: 0xA6FF71C9 | Since: unknown | API-Set: client
 */
export function getMinimapType() {
    return GetMinimapType();
}
/**
 * Possible Types:
 *
 * ```
 * 0 = Off,
 * 1 = Regular,
 * 2 = Expanded,
 * 3 = Simple,
 * ```
 *
 * Hash: 0x5FB53015 | Since: unknown | API-Set: client
 */
export function setMinimapType(_type) {
    SetMinimapType(_type);
}
/**
 * Old name: _ALLOW_PAUSE_MENU_WHEN_DEAD_THIS_FRAME
 *
 * Hash: 0x30996422DF1EE561 | Since: 1207 | API-Set: unknown
 */
export function allowPauseWhenNotInStateOfPlayThisFrame() {
    AllowPauseWhenNotInStateOfPlayThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0x823BF7B1DF613A21 | Since: 1207 | API-Set: unknown
 */
export function busyspinnerIsOn() {
    return BusyspinnerIsOn();
}
/**
 * Removes the loading prompt at the bottom right of the screen.
 *
 * Hash: 0x58F441B90EA84D06 | Since: 1207 | API-Set: unknown
 */
export function busyspinnerOff() {
    BusyspinnerOff();
}
/**
 * No comment provided
 *
 * Hash: 0x916ED8321F087059 | Since: 1207 | API-Set: unknown
 */
export function clearAllHelpMessages() {
    ClearAllHelpMessages();
}
/**
 * No comment provided
 *
 * Hash: 0x53CB4B502E1C57EA | Since: 1207 | API-Set: unknown
 */
export function createFakeMpGamerTag(ped, username, pointedClanTag, isRockstarClan, clanTag, clanFlag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return CreateFakeMpGamerTag(_ped, username, pointedClanTag, isRockstarClan, clanTag, clanFlag);
}
/**
 * No comment provided
 *
 * Hash: 0x56CE42A528156A67 | Since: 1207 | API-Set: unknown
 */
export function disableFrontendThisFrame() {
    DisableFrontendThisFrame();
}
/**
 * If Hud should be displayed
 *
 * Hash: 0xD63FE3AF9FB3D53F | Since: 1207 | API-Set: unknown
 */
export function display(toggle) {
    DisplayHud(toggle);
}
/**
 * Checks if the passed gxt name exists in the game files.
 *
 * Hash: 0x73C258C68D6F55B6 | Since: 1207 | API-Set: unknown
 */
export function doesTextLabelExist(label) {
    return DoesTextLabelExist(label);
}
/**
 * Note: you must use VAR_STRING. Byte code very similar to TEXT_COMMAND_DISPLAY_TEXT in V
 * Old name: _GET_TEXT_SUBSTRING
 *
 * Hash: 0x9D7E12EC6A1EE4E5 | Since: 1207 | API-Set: unknown
 */
export function getCharacterFromAudioConversationFilename(text, position, length) {
    return GetCharacterFromAudioConversationFilename(text, position, length);
}
/**
 * Gets a string literal from a label name.
 *
 * Old name: _GET_LABEL_TEXT
 *
 * Hash: 0xCFEDCCAD3C5BA90D | Since: 1207 | API-Set: unknown
 */
export function getFilenameForAudioConversation(labelName) {
    return GetFilenameForAudioConversation(labelName);
}
/**
 * No comment provided
 *
 * Hash: 0xB39C81628EF10B42 | Since: 1207 | API-Set: unknown
 */
export function getScreenPositionFromWorldPosition(worldPos) {
    return GetHudScreenPositionFromWorldPosition(worldPos.x, worldPos.y, worldPos.z);
}
/**
 * Returns the length of the string passed (much like strlen).
 *
 * Hash: 0x481FBF588B0B76DB | Since: 1207 | API-Set: unknown
 */
export function getLengthOfLiteralString(_string) {
    return GetLengthOfLiteralString(_string);
}
/**
 * No comment provided
 *
 * Hash: 0xDC5AD6B7AB8184F5 | Since: 1207 | API-Set: unknown
 */
export function getLengthOfLiteralStringInBytes(_string) {
    return GetLengthOfLiteralStringInBytes(_string);
}
/**
 * No comment provided
 *
 * Hash: 0xB6762A85EE29AA60 | Since: 1207 | API-Set: unknown
 */
export function getNamedRendertargetRenderId(name) {
    return GetNamedRendertargetRenderId(name);
}
/**
 * Returns the label text given the hash.
 *
 * Old name: _GET_LABEL_TEXT_BY_HASH
 *
 * Hash: 0xBD5DD5EAE2B6CE14 | Since: 1207 | API-Set: unknown
 */
export function getStringFromHashKey(labelHash) {
    if (typeof labelHash === 'string')
        labelHash = GetHashKey(labelHash);
    return GetStringFromHashKey(labelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x36CDD81627A6FCD2 | Since: 1207 | API-Set: unknown
 */
export function hideAndRadarThisFrame() {
    HideHudAndRadarThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0xEA600AABAF4B9084 | Since: 1207 | API-Set: unknown
 */
export function hideLoadingOnFadeThisFrame() {
    HideLoadingOnFadeThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0x71B72B478F8189DC | Since: 1207 | API-Set: unknown
 */
export function isHidden() {
    return IsHudHidden();
}
/**
 * No comment provided
 *
 * Hash: 0x6E1C31E14C7A5F97 | Since: 1207 | API-Set: unknown
 */
export function isMpGamerTagActive(gamerTagId) {
    return IsMpGamerTagActive(gamerTagId);
}
/**
 * No comment provided
 *
 * Hash: 0x707032835FF09AE7 | Since: 1207 | API-Set: unknown
 */
export function isNamedRendertargetLinked(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return IsNamedRendertargetLinked(modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x3EE32F7964C40FE6 | Since: 1207 | API-Set: unknown
 */
export function isNamedRendertargetRegistered(name) {
    return IsNamedRendertargetRegistered(name);
}
/**
 * Returns true when either Pause Menu, a Frontend Menu, Online Policies menu or Social Club menu is active.
 *
 * Hash: 0x535384D6067BA42E | Since: 1207 | API-Set: unknown
 */
export function isPauseMenuActive() {
    return IsPauseMenuActive();
}
/**
 * No comment provided
 *
 * Hash: 0x1B82FD5FFA4D666E | Since: 1207 | API-Set: unknown
 */
export function isRadarHidden() {
    return IsRadarHidden();
}
/**
 * No comment provided
 *
 * Hash: 0x66F35DD9D2B58579 | Since: 1207 | API-Set: unknown
 */
export function isRadarHiddenByScript() {
    return IsRadarHiddenByScript();
}
/**
 * No comment provided
 *
 * Hash: 0x81E47F0EE1F2B21E | Since: 1207 | API-Set: unknown
 */
export function isRadarPreferenceSwitchedOn() {
    return IsRadarPreferenceSwitchedOn();
}
/**
 * No comment provided
 *
 * Hash: 0x7C4AC9573587F2DF | Since: 1355 | API-Set: unknown
 */
export function isSubtitlePreferenceSwitchedOn() {
    return IsSubtitlePreferenceSwitchedOn();
}
/**
 * No comment provided
 *
 * Hash: 0x2F506B8556242DDB | Since: 1207 | API-Set: unknown
 */
export function linkNamedRendertarget(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    LinkNamedRendertarget(modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x98AF2BB6F62BD588 | Since: 1207 | API-Set: unknown
 */
export function registerNamedRendertarget(name) {
    return RegisterNamedRendertarget(name, false);
}
/**
 * No comment provided
 *
 * Hash: 0x0E692EE61761361F | Since: 1207 | API-Set: unknown
 */
export function releaseNamedRendertarget(name) {
    return ReleaseNamedRendertarget(name);
}
/**
 * only works by invoking and passing as pointer value Citizen.InvokeNative(0x839BFD7D7E49FE09, Citizen.PointerValueIntInitialized(gamerTagId))
 *
 * Hash: 0x839BFD7D7E49FE09 | Since: 1207 | API-Set: unknown
 */
export function removeMpGamerTag(gamerTagId) {
    RemoveMpGamerTag(gamerTagId);
}
/**
 * No comment provided
 *
 * Hash: 0xCE47C21C0687EBC2 | Since: 1207 | API-Set: unknown
 */
export function setFrontendActive(active) {
    SetFrontendActive(active);
}
/**
 * No comment provided
 *
 * Hash: 0x402669A4BDAA72DA | Since: 1207 | API-Set: unknown
 */
export function setMissionName(name) {
    SetMissionName(false, name);
}
/**
 * No comment provided
 *
 * Hash: 0xD98630CE73C61E98 | Since: 1207 | API-Set: unknown
 */
export function setMissionNameForUgcMission(name) {
    SetMissionNameForUgcMission(false, name);
}
/**
 * No comment provided
 *
 * Hash: 0xA0D7CE5F83259663 | Since: 1207 | API-Set: unknown
 */
export function setMpGamerTagBigText(gamerTagId, _string) {
    SetMpGamerTagBigText(gamerTagId, _string);
}
/**
 * No comment provided
 *
 * Hash: 0xEA6F4B8D4B4B5B3E | Since: 1207 | API-Set: unknown
 */
export function setMpGamerTagName(gamerTagId, _string) {
    SetMpGamerTagName(gamerTagId, _string);
}
/**
 * No comment provided
 *
 * Hash: 0xE550CDE128D56757 | Since: 1207 | API-Set: unknown
 */
export function setTextRenderId(renderId) {
    SetTextRenderId(renderId);
}
/**
 * No comment provided
 *
 * Hash: 0xD0976CC34002DB57 | Since: 1207 | API-Set: unknown
 */
export function textBlockIsLoaded(textBlock) {
    return TextBlockIsLoaded(textBlock);
}
/**
 * No comment provided
 *
 * Hash: 0xF66090013DE648D5 | Since: 1207 | API-Set: unknown
 */
export function textBlockRequest(textBlock) {
    TextBlockRequest(textBlock);
}
/**
 * No comment provided
 *
 * Hash: 0xBE1067CD1C9570F6 | Since: 1207 | API-Set: unknown
 */
export function uiGetSceneUiobject() {
    return UiGetSceneUiobject(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x51DE09A2196BD951 | Since: 1207 | API-Set: unknown
 */
export function uiMovieviewSetRenderTarget() {
    UiMovieviewSetRenderTarget(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1BE19185B8AFE299 | Since: 1207 | API-Set: unknown
 */
export function uiPromptIsControlActionActive(controlAction) {
    if (typeof controlAction === 'string')
        controlAction = GetHashKey(controlAction);
    return UiPromptIsControlActionActive(controlAction);
}
/**
 * No comment provided
 *
 * Hash: 0xB6857100F8FD433C | Since: 1207 | API-Set: unknown
 */
export function uiRequestScene() {
    return UiRequestScene(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x052D4AC0922AF91A | Since: 1207 | API-Set: unknown
 */
export function _0x052D4AC0922AF91A() {
    Citizen.invokeNative('0x052D4AC0922AF91A', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x066725A9D52B3641 | Since: 1232 | API-Set: unknown
 */
export function _0x066725A9D52B3641() {
    return Citizen.invokeNative('0x066725A9D52B3641');
}
/**
 * No comment provided
 *
 * Hash: 0x100157D6D7FE32CA | Since: 1207 | API-Set: unknown
 */
export function _0x100157D6D7FE32CA() {
    return Citizen.invokeNative('0x100157D6D7FE32CA', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x160825DADF1B04B3 | Since: 1207 | API-Set: unknown
 */
export function _0x160825DADF1B04B3() {
    Citizen.invokeNative('0x160825DADF1B04B3');
}
/**
 * No comment provided
 *
 * Hash: 0x28AE29D909C8FDCE | Since: 1207 | API-Set: unknown
 */
export function _0x28AE29D909C8FDCE() {
    return Citizen.invokeNative('0x28AE29D909C8FDCE', undefined);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x2F7BB105144ACF30 | Since: 1207 | API-Set: unknown
 */
export function _0x2F7BB105144ACF30() {
    Citizen.invokeNative('0x2F7BB105144ACF30');
}
/**
 * No comment provided
 *
 * Hash: 0x3FE4FB41EF7D2196 | Since: 1207 | API-Set: unknown
 */
export function _0x3FE4FB41EF7D2196() {
    Citizen.invokeNative('0x3FE4FB41EF7D2196', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x53CE46C01A089DA1 | Since: 1207 | API-Set: unknown
 */
export function _0x53CE46C01A089DA1(prompt) {
    Citizen.invokeNative('0x53CE46C01A089DA1', prompt, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5651516D947ABC53 | Since: 1207 | API-Set: unknown
 */
export function _0x5651516D947ABC53() {
    Citizen.invokeNative('0x5651516D947ABC53');
}
/**
 * No comment provided
 *
 * Hash: 0x8A59D44189AF2BC5 | Since: 1207 | API-Set: unknown
 */
export function _0x8A59D44189AF2BC5() {
    Citizen.invokeNative('0x8A59D44189AF2BC5', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8B55B324A9123F6B | Since: 1232 | API-Set: unknown
 */
export function _0x8B55B324A9123F6B(groupId, volume) {
    return Citizen.invokeNative('0x8B55B324A9123F6B', groupId, volume, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x958278B97C4AFFD8 | Since: 1232 | API-Set: unknown
 */
export function _0x958278B97C4AFFD8() {
    Citizen.invokeNative('0x958278B97C4AFFD8', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9D37EB5003E0F2CF | Since: 1207 | API-Set: unknown
 */
export function _0x9D37EB5003E0F2CF() {
    Citizen.invokeNative('0x9D37EB5003E0F2CF', undefined, undefined);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xBFFF81E12A745A5F | Since: 1207 | API-Set: unknown
 */
export function _0xBFFF81E12A745A5F() {
    Citizen.invokeNative('0xBFFF81E12A745A5F');
}
/**
 * No comment provided
 *
 * Hash: 0xD6BD313CFA41E57A | Since: 1207 | API-Set: unknown
 */
export function _0xD6BD313CFA41E57A() {
    return Citizen.invokeNative('0xD6BD313CFA41E57A', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF1E6979C0B779985 | Since: 1207 | API-Set: unknown
 */
export function _0xF1E6979C0B779985(uiscene) {
    Citizen.invokeNative('0xF1E6979C0B779985', uiscene);
}
/**
 * No comment provided
 *
 * Hash: 0x7F78CD75CC4539E4 | Since: 1207 | API-Set: unknown
 */
export function busyspinnerSetText(text) {
    BusyspinnerSetText(text);
}
/**
 * No comment provided
 *
 * Hash: 0xD877AF112AD2B41B | Since: 1207 | API-Set: unknown
 */
export function createMpGamerTag(player, username, pointedClanTag, isRockstarClan, clanTag, clanFlag) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return CreateMpGamerTag(_player, username, pointedClanTag, isRockstarClan, clanTag, clanFlag);
}
/**
 * No comment provided
 *
 * Hash: 0xE961BF23EAB76B12 | Since: 1207 | API-Set: unknown
 */
export function createMpGamerTagOnEntity(entity, text) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return CreateMpGamerTagOnEntity(_entity, text);
}
/**
 * https://gist.github.com/outsider31000/c640961d17b2e4fb0435a413710e1930 list of presets
 * Old name: _DISPLAY_HUD_COMPONENT
 *
 * Hash: 0x8BC7C1F929D07BF3 | Since: 1207 | API-Set: unknown
 */
export function disableContext(component) {
    if (typeof component === 'string')
        component = GetHashKey(component);
    DisableHudContext(component);
}
/**
 * Disables reduced time scale while menus such as weapon wheel and satchel are open.
 *
 * Hash: 0xC5C7A2F6567FCCBC | Since: 1207 | API-Set: unknown
 */
export function disableReducedMenuTimeScale() {
    DisableReducedMenuTimeScale();
}
/**
 * nullsub, this native does nothing since build 1436, use _BG_DISPLAY_TEXT (0x16794E044C9EFB58) instead.
 *
 * Hash: 0xD79334A4BB99BAD1 | Since: 1207 | API-Set: unknown
 */
export function displayText(text, xPos, yPos) {
    DisplayText(text, xPos, yPos);
}
/**
 * No comment provided
 *
 * Hash: 0x2C729F2B94CEA911 | Since: 1207 | API-Set: unknown
 */
export function doesTextBlockExist(textDatabase) {
    return DoesTextBlockExist(textDatabase);
}
/**
 * https://gist.github.com/outsider31000/c640961d17b2e4fb0435a413710e1930 list of presets
 * Old name: _HIDE_HUD_COMPONENT
 *
 * Hash: 0x4CC5F2FC1332577F | Since: 1207 | API-Set: unknown
 */
export function enableContext(component) {
    if (typeof component === 'string')
        component = GetHashKey(component);
    EnableHudContext(component);
}
/**
 * https://gist.github.com/outsider31000/c640961d17b2e4fb0435a413710e1930 list of presets
 *
 * Hash: 0xC9CAEAEEC1256E54 | Since: 1207 | API-Set: unknown
 */
export function enableContextThisFrame(component) {
    if (typeof component === 'string')
        component = GetHashKey(component);
    EnableHudContextThisFrame(component);
}
/**
 * Enables reduced time scale while menus such as weapon wheel and satchel are open.
 *
 * Hash: 0x26F6BBEA2CE3E3DC | Since: 1207 | API-Set: unknown
 */
export function enableReducedMenuTimeScale() {
    EnableReducedMenuTimeScale();
}
/**
 * colorNameHash: https://alloc8or.re/rdr3/doc/enums/eColor.txt
 *
 * Hash: 0xB981DD2DFAF9B1C9 | Since: 1207 | API-Set: unknown
 */
export function getColorFromName(colorNameHash) {
    if (typeof colorNameHash === 'string')
        colorNameHash = GetHashKey(colorNameHash);
    return GetColorFromName(colorNameHash);
}
/**
 * Returns the state of a specific HUD Component
 * eHudVisibilitySlotType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eHudVisibilitySlotType
 *
 * Hash: 0x7EC0D68233E391AC | Since: 1207 | API-Set: unknown
 */
export function getState(hudComponent) {
    return Citizen.invokeNative('0x7EC0D68233E391AC', hudComponent);
}
/**
 * No comment provided
 *
 * Hash: 0x3429670F9B9EF2D3 | Since: 1207 | API-Set: unknown
 */
export function getLabelText2(label) {
    return GetLabelText2(label);
}
/**
 * This native accepts 1 as parameter in the decompiles
 * returns the nearest horse handle if within 2 3 meters of the player, if not close enough returns false
 *
 * NOTE: if type is 0 returns PlayerPedId always?
 *
 * Hash: 0x0501D52D24EA8934 | Since: 1207 | API-Set: unknown
 */
export function getNearHorse() {
    return Citizen.invokeNative('0x0501D52D24EA8934', 0);
}
/**
 * Similar to 0x9D7E12EC6A1EE4E5(GET_TEXT_SUBSTRING) but starts at the beginning of the string
 *
 * Hash: 0xD8402B858F4DDD88 | Since: 1207 | API-Set: unknown
 */
export function getTextSubstring2(text, length) {
    return GetTextSubstring2(text, length);
}
/**
 * `Example: HUD::_0x806862E5D266CF38(&string1, 0, HUD::GET_LENGTH_OF_LITERAL_STRING(&string1) - HUD::GET_LENGTH_OF_LITERAL_STRING("_DUALWIELD"))`
 *
 * Hash: 0x806862E5D266CF38 | Since: 1207 | API-Set: unknown
 */
export function getTextSubstring3(begin, length) {
    return Citizen.invokeNative('0x806862E5D266CF38', begin, length);
}
/**
 * No comment provided
 *
 * Hash: 0xBF4F34A85CA2970D | Since: 1207 | API-Set: unknown
 */
export function hideThisFrame() {
    HideHudThisFrame();
}
/**
 * Returns the hash of the currently highlighted item in the weapon wheel.
 * Only works while the wheel is open otherwise will return false
 *
 * Use in conjunction with IS_CONTROL_JUST_RELEASED(0, 'INPUT_OPEN_WHEEL_MENU') to detect item selection/usage.
 *
 * Hash: 0x9C409BBC492CB5B1 | Since: 1207 | API-Set: unknown
 */
export function weaponWheelGetSelectedItemHash() {
    return Citizen.invokeNative('0x9C409BBC492CB5B1');
}
/**
 * No comment provided
 *
 * Hash: 0x502E1591A504F843 | Since: 1207 | API-Set: unknown
 */
export function isMpGamerTagActiveOnEntity(gamerTagId, entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsMpGamerTagActiveOnEntity(gamerTagId, _entity);
}
/**
 * No comment provided
 *
 * Hash: 0xCF782691D91F270E | Since: 1207 | API-Set: unknown
 */
export function journalCanWriteEntry() {
    return JournalCanWriteEntry(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF402978DE6F88D6E | Since: 1207 | API-Set: unknown
 */
export function journalClearAllProgress() {
    JournalClearAllProgress();
}
/**
 * No comment provided
 *
 * Hash: 0x3D16ABD7A1FD8C96 | Since: 1207 | API-Set: unknown
 */
export function journalGetEntryAtIndex() {
    return JournalGetEntryAtIndex(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE65B5DE53351BE22 | Since: 1207 | API-Set: unknown
 */
export function journalGetEntryCount() {
    return JournalGetEntryCount();
}
/**
 * No comment provided
 *
 * Hash: 0x5514C3E60673530F | Since: 1207 | API-Set: unknown
 */
export function journalGetEntryInfo() {
    return JournalGetEntryInfo(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCB5945E1B855852F | Since: 1207 | API-Set: unknown
 */
export function journalGetGrimeAtIndex() {
    return JournalGetGrimeAtIndex(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x62CC549B3B8EA2AA | Since: 1207 | API-Set: unknown
 */
export function journalGetTextureWithLayout() {
    return JournalGetTextureWithLayout(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE4509BABE59BD24E | Since: 1207 | API-Set: unknown
 */
export function journalMarkRead() {
    JournalMarkRead(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6DFDD665E416B093 | Since: 1207 | API-Set: unknown
 */
export function journalWriteEntry() {
    JournalWriteEntry(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1F9A64C2804B3471 | Since: 1207 | API-Set: unknown
 */
export function mpGamerTagDisableReviveTopIcon(gamerTagId) {
    MpGamerTagDisableReviveTopIcon(gamerTagId);
}
/**
 * No comment provided
 *
 * Hash: 0xFFF6579CF0139FCE | Since: 1207 | API-Set: unknown
 */
export function mpGamerTagEnableReviveTopIcon(gamerTagId) {
    MpGamerTagEnableReviveTopIcon(gamerTagId);
}
/**
 * string1 is the only string used in the scripts, the others are null (0)
 *
 * Hash: 0xCE0D2F5586627CCE | Since: 1207 | API-Set: unknown
 */
export function setCurrentUgcMissionDescription(active, string1, string2, string3, string4) {
    Citizen.invokeNative('0xCE0D2F5586627CCE', active, string1, string2, string3, string4);
}
/**
 * No comment provided
 *
 * Hash: 0x84BD27DDF9575816 | Since: 1207 | API-Set: unknown
 */
export function setMpGamerTagColour(gamerTagId, colour) {
    if (typeof colour === 'string')
        colour = GetHashKey(colour);
    SetMpGamerTagColour(gamerTagId, colour);
}
/**
 * No comment provided
 *
 * Hash: 0x1EA716E0628A6F44 | Since: 1207 | API-Set: unknown
 */
export function setMpGamerTagNamePosse(gamerTagId, text) {
    SetMpGamerTagNamePosse(gamerTagId, text);
}
/**
 * Found icons: SPEAKER, THROPY
 *
 * Hash: 0x95384C6CE1526EFF | Since: 1207 | API-Set: unknown
 */
export function setMpGamerTagSecondaryIcon(gamerTagId, icon) {
    if (typeof icon === 'string')
        icon = GetHashKey(icon);
    SetMpGamerTagSecondaryIcon(gamerTagId, icon);
}
/**
 * Found icons: https://pastebin.com/xx6rEgiG
 *
 * Hash: 0x5F57522BC1EB9D9D | Since: 1207 | API-Set: unknown
 */
export function setMpGamerTagTopIcon(gamerTagId, icon) {
    if (typeof icon === 'string')
        icon = GetHashKey(icon);
    SetMpGamerTagTopIcon(gamerTagId, icon);
}
/**
 * Found types: GENERIC_PLAYER, DEADDROP, HOTPROPERTY, MINIGAMES
 *
 * Hash: 0x25B9C78A25105C35 | Since: 1207 | API-Set: unknown
 */
export function setMpGamerTagType(gamerTagId, _type) {
    if (typeof _type === 'string')
        _type = GetHashKey(_type);
    SetMpGamerTagType(gamerTagId, _type);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xEF7AB1A0E8C86170 | Since: 1207 | API-Set: unknown
 */
export function setMpGamerTagUnkAllowLocalized(gamerTagId, allow) {
    SetMpGamerTagUnkAllowLocalized(gamerTagId, allow);
}
/**
 * visibility:
 * enum eUIGamertagVisibility
 * {
 * UIGAMERTAGVISIBILITY_NONE,
 * UIGAMERTAGVISIBILITY_ICON,
 * UIGAMERTAGVISIBILITY_SIMPLE,
 * UIGAMERTAGVISIBILITY_COMPLEX
 * };
 *
 * Hash: 0x93171DDDAB274EB8 | Since: 1207 | API-Set: unknown
 */
export function setMpGamerTagVisibility(gamerTagId, visibility) {
    SetMpGamerTagVisibility(gamerTagId, visibility);
}
/**
 * This native does nothing since build 1436, use _BG_SET_TEXT_COLOR (0x16FA5CE47F184F1E) instead.
 *
 * Hash: 0x50A41AD966910F03 | Since: 1207 | API-Set: unknown
 */
export function setTextColor(r, g, b, a) {
    SetTextColor(r, g, b, a);
}
/**
 * No comment provided
 *
 * Hash: 0xD4EE21B7CC7FD350 | Since: 1207 | API-Set: unknown
 */
export function showHorseCores(state) {
    ShowHorseCores(state);
}
/**
 * No comment provided
 *
 * Hash: 0x50C803A4CD5932C5 | Since: 1207 | API-Set: unknown
 */
export function showPlayerCores(state) {
    ShowPlayerCores(state);
}
/**
 * No comment provided
 *
 * Hash: 0xAA03F130A637D923 | Since: 1207 | API-Set: unknown
 */
export function textBlockDelete(textBlock) {
    TextBlockDelete(textBlock);
}
/**
 * No comment provided
 *
 * Hash: 0x3CF96E16265B7DC8 | Since: 1207 | API-Set: unknown
 */
export function textBlockIsStreamed(textBlock) {
    return TextBlockIsStreamed(textBlock);
}
/**
 * No comment provided
 *
 * Hash: 0x684C96CC7C66E8EF | Since: 1207 | API-Set: unknown
 */
export function uiPromptAddGroupLink(prompt) {
    UiPromptAddGroupLink(undefined, prompt, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x837972ED28159536 | Since: 1207 | API-Set: unknown
 */
export function uiPromptAddGroupReturnLink(prompt) {
    UiPromptAddGroupReturnLink(undefined, prompt);
}
/**
 * id is the return value from 0xD9459157EB22C895.
 *
 * Hash: 0x6095358C4142932A | Since: 1207 | API-Set: unknown
 */
export function uiPromptClearHorizontalOrientation(id) {
    UiPromptClearHorizontalOrientation(id);
}
/**
 * No comment provided
 *
 * Hash: 0x51259AE5C72D4A1B | Since: 1207 | API-Set: unknown
 */
export function uiPromptClearPromptPriorityPreference() {
    UiPromptClearPromptPriorityPreference();
}
/**
 * No comment provided
 *
 * Hash: 0xAE84C5EE2C384FB3 | Since: 1207 | API-Set: unknown
 */
export function uiPromptContextSetPoint(prompt, pos) {
    UiPromptContextSetPoint(prompt, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x0C718001B77CA468 | Since: 1207 | API-Set: unknown
 */
export function uiPromptContextSetRadius(prompt, radius) {
    UiPromptContextSetRadius(prompt, radius);
}
/**
 * Attaches a Volume
 *
 * Hash: 0x4D107406667423BE | Since: 1207 | API-Set: unknown
 */
export function uiPromptContextSetVolume(prompt, volume) {
    UiPromptContextSetVolume(prompt, volume);
}
/**
 * No comment provided
 *
 * Hash: 0x29FA7910726C3889 | Since: 1207 | API-Set: unknown
 */
export function uiPromptCreate(inputHash, labelName) {
    if (typeof inputHash === 'string')
        inputHash = GetHashKey(inputHash);
    return UiPromptCreate(inputHash, labelName, undefined, undefined, undefined, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x00EDE88D4D13CF59 | Since: 1207 | API-Set: unknown
 */
export function uiPromptDelete(prompt) {
    UiPromptDelete(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0xF1622CE88A1946FB | Since: 1207 | API-Set: unknown
 */
export function uiPromptDisablePromptsThisFrame() {
    UiPromptDisablePromptsThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0xFC094EF26DD153FA | Since: 1207 | API-Set: unknown
 */
export function uiPromptDisablePromptTypeThisFrame() {
    UiPromptDisablePromptTypeThisFrame(0);
}
/**
 * No comment provided
 *
 * Hash: 0xEB550B927B34A1BB | Since: 1207 | API-Set: unknown
 */
export function uiPromptDoesAmbientGroupExist(hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    return UiPromptDoesAmbientGroupExist(hash);
}
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/graphics/HUD/prompts/prompt_types
 *
 * Hash: 0x06565032897BA861 | Since: 1207 | API-Set: unknown
 */
export function uiPromptEnablePromptTypeThisFrame() {
    UiPromptEnablePromptTypeThisFrame(0);
}
/**
 * No comment provided
 *
 * Hash: 0x6A2F820452017EA2 | Since: 1207 | API-Set: unknown
 */
export function uiPromptFilterClear() {
    UiPromptFilterClear();
}
/**
 * No comment provided
 *
 * Hash: 0xC1FCC36C3F7286C8 | Since: 1207 | API-Set: unknown
 */
export function uiPromptGetGroupActivePage(hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    return UiPromptGetGroupActivePage(hash);
}
/**
 * No comment provided
 *
 * Hash: 0xCB73D7521E7103F0 | Since: 1207 | API-Set: unknown
 */
export function uiPromptGetGroupIdForScenarioPoint() {
    return UiPromptGetGroupIdForScenarioPoint(undefined, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xB796970BD125FCE8 | Since: 1207 | API-Set: unknown
 */
export function uiPromptGetGroupIdForTargetEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return UiPromptGetGroupIdForTargetEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x8A9585293863B8A5 | Since: 1207 | API-Set: unknown
 */
export function uiPromptGetMashModeProgress(prompt) {
    return UiPromptGetMashModeProgress(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0x81801291806DBC50 | Since: 1207 | API-Set: unknown
 */
export function uiPromptGetProgress(prompt) {
    return UiPromptGetProgress(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0x1FBA0DABECDDB52B | Since: 1207 | API-Set: unknown
 */
export function uiPromptGetUrgentPulsingEnabled(prompt) {
    return UiPromptGetUrgentPulsingEnabled(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0x8010BEBD0D5ED5BC | Since: 1207 | API-Set: unknown
 */
export function uiPromptHasHoldAutoFillMode(prompt) {
    return UiPromptHasHoldAutoFillMode(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0xB60C9F9ED47ABB76 | Since: 1207 | API-Set: unknown
 */
export function uiPromptHasHoldMode(prompt) {
    return UiPromptHasHoldMode(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0xE0F65F0640EF0617 | Since: 1207 | API-Set: unknown
 */
export function uiPromptHasHoldModeCompleted(prompt) {
    return UiPromptHasHoldModeCompleted(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0xA6C6A4ADB3BAC409 | Since: 1207 | API-Set: unknown
 */
export function uiPromptHasManualMashMode(prompt) {
    return UiPromptHasManualMashMode(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0xCD072523791DDC1B | Since: 1207 | API-Set: unknown
 */
export function uiPromptHasMashMode(prompt) {
    return UiPromptHasMashMode(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0x845CE958416DC473 | Since: 1207 | API-Set: unknown
 */
export function uiPromptHasMashModeCompleted(prompt) {
    return UiPromptHasMashModeCompleted(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0x25B18E530CF39D6F | Since: 1207 | API-Set: unknown
 */
export function uiPromptHasMashModeFailed(prompt) {
    return UiPromptHasMashModeFailed(prompt);
}
/**
 * returns true if the mash mode have just been pressed
 *
 * Hash: 0xB0E8599243B3F568 | Since: 1207 | API-Set: unknown
 */
export function uiPromptHasMashModeJustPressed(prompt) {
    return Citizen.invokeNative('0xB0E8599243B3F568', prompt);
}
/**
 * No comment provided
 *
 * Hash: 0x3CE854D250A88DAF | Since: 1207 | API-Set: unknown
 */
export function uiPromptHasPressedTimedModeCompleted(prompt) {
    return UiPromptHasPressedTimedModeCompleted(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0x1A17B9ECFF617562 | Since: 1207 | API-Set: unknown
 */
export function uiPromptHasPressedTimedModeFailed(prompt) {
    return UiPromptHasPressedTimedModeFailed(prompt);
}
/**
 * Params: p1 is 0
 *
 * Hash: 0xC92AC953F0A982AE | Since: 1207 | API-Set: unknown
 */
export function uiPromptHasStandardModeCompleted(prompt) {
    return UiPromptHasStandardModeCompleted(prompt, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x546E342E01DE71CF | Since: 1207 | API-Set: unknown
 */
export function uiPromptIsActive(prompt) {
    return UiPromptIsActive(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0x0D00EDDFB58B7F28 | Since: 1207 | API-Set: unknown
 */
export function uiPromptIsEnabled(prompt) {
    return UiPromptIsEnabled(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0xC7D70EAEF92EFF48 | Since: 1207 | API-Set: unknown
 */
export function uiPromptIsHoldModeRunning(prompt) {
    return UiPromptIsHoldModeRunning(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0x2787CC611D3FACC5 | Since: 1207 | API-Set: unknown
 */
export function uiPromptIsJustPressed(prompt) {
    return UiPromptIsJustPressed(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0x635CC82FA297A827 | Since: 1207 | API-Set: unknown
 */
export function uiPromptIsJustReleased(prompt) {
    return UiPromptIsJustReleased(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0x21E60E230086697F | Since: 1207 | API-Set: unknown
 */
export function uiPromptIsPressed(prompt) {
    return UiPromptIsPressed(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0xAFC887BA7A7756D6 | Since: 1207 | API-Set: unknown
 */
export function uiPromptIsReleased(prompt) {
    return UiPromptIsReleased(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0x347469FBDD1589A9 | Since: 1207 | API-Set: unknown
 */
export function uiPromptIsValid(prompt) {
    return UiPromptIsValid(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0x04F97DE45A519419 | Since: 1207 | API-Set: unknown
 */
export function uiPromptRegisterBegin() {
    return UiPromptRegisterBegin();
}
/**
 * No comment provided
 *
 * Hash: 0xF7AA2696A22AD8B9 | Since: 1207 | API-Set: unknown
 */
export function uiPromptRegisterEnd(prompt) {
    UiPromptRegisterEnd(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0x4E52C800A28F7BE8 | Since: 1207 | API-Set: unknown
 */
export function uiPromptRemoveGroup(prompt) {
    UiPromptRemoveGroup(prompt, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDC6C55DFA2C24EE5 | Since: 1207 | API-Set: unknown
 */
export function uiPromptRestartModes(prompt) {
    UiPromptRestartModes(prompt);
}
/**
 * Note: you must use VAR_STRING for p1 if string is not part of text database
 * tabAmount: specifies number of tabs in prompt group
 * tabDefaultIndex: specifies starting index
 * p3 if is set > 3 you can no longer press Q to change tab if there are more than one tab set in tabAmount
 *
 * Hash: 0xC65A45D4453C2627 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetActiveGroupThisFrame(hash, name, tabAmount, tabDefaultIndex, prompt) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    return UiPromptSetActiveGroupThisFrame(hash, name, tabAmount, tabDefaultIndex, 0, prompt);
}
/**
 * No comment provided
 *
 * Hash: 0x565C1CE183CB0EAF | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetAllowedAction(prompt, action) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    UiPromptSetAllowedAction(prompt, action);
}
/**
 * No comment provided
 *
 * Hash: 0x315C81D760609108 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetAmbientGroupThisFrame(entity, p4, name) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof p4 === 'string')
        p4 = GetHashKey(p4);
    return UiPromptSetAmbientGroupThisFrame(_entity, 0, 0, 0, p4, name, 0);
}
/**
 * attribute: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eUIPromptAttribute
 *
 * Hash: 0x560E76D5E2E1803F | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetAttribute(prompt, attribute, enabled) {
    UiPromptSetAttribute(prompt, attribute, enabled);
}
/**
 * No comment provided
 *
 * Hash: 0xF957A1654C6322FE | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetBeatMode(prompt, toggle) {
    UiPromptSetBeatMode(prompt, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xB487A4936FBF40AC | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetBeatModeGrayedOut(prompt) {
    UiPromptSetBeatModeGrayedOut(prompt, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB5352B7494A08258 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetControlAction(prompt, action) {
    if (typeof action === 'string')
        action = GetHashKey(action);
    return UiPromptSetControlAction(prompt, action);
}
/**
 * No comment provided
 *
 * Hash: 0x8A0FB4D03A630D21 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetEnabled(prompt, toggle) {
    UiPromptSetEnabled(prompt, toggle);
}
/**
 * tabIndex: specifies tab of prompt
 *
 * Hash: 0x2F11D3A254169EA4 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetGroup(prompt, groupId, tabIndex) {
    UiPromptSetGroup(prompt, groupId, tabIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x3CE932E737C145D6 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetHoldAutoFillMode(prompt, autoFillTimeMs, holdTimeMs) {
    UiPromptSetHoldAutoFillMode(prompt, autoFillTimeMs, holdTimeMs);
}
/**
 * No comment provided
 *
 * Hash: 0xA3F2149AA24F3D8E | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetHoldAutoFillWithDecayMode(prompt, autoFillTimeMs, holdTimeMs) {
    UiPromptSetHoldAutoFillWithDecayMode(prompt, autoFillTimeMs, holdTimeMs);
}
/**
 * No comment provided
 *
 * Hash: 0xEA5CCF4EEB2F82D1 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetHoldIndefinitelyMode(prompt) {
    UiPromptSetHoldIndefinitelyMode(prompt);
}
/**
 * Params: p2 is 304000 in R* SP Script coachrobberies
 *
 * Hash: 0x94073D5CA3F16B7B | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetHoldMode(prompt, holdTimeMs) {
    UiPromptSetHoldMode(prompt, holdTimeMs);
}
/**
 * No comment provided
 *
 * Hash: 0xA520C7B05FA4EB2A | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetManualResolved(prompt) {
    UiPromptSetManualResolved(prompt, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6C39587D7CC66801 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetMashAutoFillMode(prompt, autoFillTimeMs, mashes) {
    UiPromptSetMashAutoFillMode(prompt, autoFillTimeMs, mashes);
}
/**
 * No comment provided
 *
 * Hash: 0x7B66E89312727274 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetMashIndefinitelyMode(prompt) {
    UiPromptSetMashIndefinitelyMode(prompt);
}
/**
 * No comment provided
 *
 * Hash: 0x179DCF71F705DA20 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetMashManualCanFailMode(prompt) {
    UiPromptSetMashManualCanFailMode(prompt, 0, 0, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x32DF729D8BD3C1C6 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetMashManualMode(prompt) {
    UiPromptSetMashManualMode(prompt, 0, 0, 0, undefined);
}
/**
 * standard (prompt not held) rate: 0.035f
 * fast (prompt held) rate: 0.015f
 * punitive (been hit) rate: 0.14f
 *
 * Hash: 0x7D393C247FB9B431 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetMashManualModeDecaySpeed(prompt, speed) {
    UiPromptSetMashManualModeDecaySpeed(prompt, speed);
}
/**
 * standard (prompt not held) rate: (1f / 128f)
 * fast (prompt held) rate: (1f / 64f)
 * punitive (been hit) rate: (1f / 128f)
 *
 * Hash: 0xA0D1D79C6036A855 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetMashManualModeIncreasePerPress(prompt, rate) {
    UiPromptSetMashManualModeIncreasePerPress(prompt, rate);
}
/**
 * No comment provided
 *
 * Hash: 0x56DBB26F98582C29 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetMashManualModePressedGrowthSpeed(prompt, speed) {
    UiPromptSetMashManualModePressedGrowthSpeed(prompt, speed);
}
/**
 * No comment provided
 *
 * Hash: 0xDF6423BF071C7F71 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetMashMode(prompt, mashes) {
    UiPromptSetMashMode(prompt, mashes);
}
/**
 * For startProgress, 0.0f - 1.0f is a percentage value, so 0.5f = 50% progress. Range: 0.0f - 1.0f
 * For decreaseSpeed, 0.0f will result in the prompt not showing the mash progress at all. 0.01f - ?.0f. At speeds around 7.0f to 8.0f the prompt basically fails immediately if you don't start mashing right away.
 *
 * Hash: 0xDC0CB602DEADBA53 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetMashWithResistanceCanFailMode(prompt, mashes, decreaseSpeed, startProgress) {
    UiPromptSetMashWithResistanceCanFailMode(prompt, mashes, decreaseSpeed, startProgress);
}
/**
 * No comment provided
 *
 * Hash: 0xCD1BDFF15EFA79F5 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetMashWithResistanceMode(prompt, mashes) {
    UiPromptSetMashWithResistanceMode(prompt, mashes, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x2F385ECC5200938D | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetOrderingAsInputType(prompt) {
    UiPromptSetOrderingAsInputType(prompt, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1473D3AF51D54276 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetPressedTimedMode(prompt, depletionTimeMs) {
    UiPromptSetPressedTimedMode(prompt, depletionTimeMs);
}
/**
 * priority: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePromptPriority
 *
 * Hash: 0xCA24F528D0D16289 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetPriority(prompt, priority) {
    UiPromptSetPriority(prompt, priority);
}
/**
 * No comment provided
 *
 * Hash: 0x530A428705BE5DEF | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetPromptPriorityPreference(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    UiPromptSetPromptPriorityPreference(_ped);
}
/**
 * This returns an id that can be used with 0x6095358C4142932A.
 *
 * Hash: 0xD9459157EB22C895 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetRegisterHorizontalOrientation() {
    return UiPromptSetRegisterHorizontalOrientation();
}
/**
 * Used for controllers
 *
 * Hash: 0x7ABE7095FB3D2581 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetRotateMode(prompt, counterclockwise) {
    UiPromptSetRotateMode(prompt, 0, counterclockwise);
}
/**
 * No comment provided
 *
 * Hash: 0x832CB510DE546282 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetSpinnerPosition(prompt) {
    UiPromptSetSpinnerPosition(prompt, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xAC6586A7FDCD4B68 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetSpinnerSpeed(prompt) {
    UiPromptSetSpinnerSpeed(prompt, undefined);
}
/**
 * HoldType Hashes: SHORT_TIMED_EVENT_MP, SHORT_TIMED_EVENT, MEDIUM_TIMED_EVENT, LONG_TIMED_EVENT, RUSTLING_CALM_TIMING, PLAYER_FOCUS_TIMING, PLAYER_REACTION_TIMING
 *
 * Hash: 0x74C7D7B72ED0D3CF | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetStandardizedHoldMode(prompt, holdType) {
    if (typeof holdType === 'string')
        holdType = GetHashKey(holdType);
    UiPromptSetStandardizedHoldMode(prompt, holdType);
}
/**
 * No comment provided
 *
 * Hash: 0xCC6656799977741B | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetStandardMode(prompt, releaseMode) {
    UiPromptSetStandardMode(prompt, releaseMode);
}
/**
 * No comment provided
 *
 * Hash: 0xDEC85C174751292B | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetTag(prompt) {
    UiPromptSetTag(prompt, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5F6503D9CD2754EB | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetTargetMode(prompt) {
    UiPromptSetTargetMode(prompt, 0, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x00123054BEC8A30F | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetTargetModeProgress(prompt, progress) {
    UiPromptSetTargetModeProgress(prompt, progress);
}
/**
 * No comment provided
 *
 * Hash: 0x5E019C45DD3B6A14 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetTargetModeTarget(prompt) {
    UiPromptSetTargetModeTarget(prompt, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x5DD02A8318420DD7 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetText(prompt, text) {
    UiPromptSetText(prompt, text);
}
/**
 * TM_ANY = 0,
 * TM_ON_FOOT,
 * TM_IN_VEHICLE
 *
 * Hash: 0x876E4A35C73A6655 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetTransportMode(prompt, mode) {
    UiPromptSetTransportMode(prompt, mode);
}
/**
 * Params: type = mostly 0, 6 (net_mission_intro_story_gvo), 7 (fm_mission_controller), 14 (net_ugc_end_flow_transition_online), 15 (net_main_[tlg_]offline)
 *
 * Hash: 0xF4A5C4509BF923B1 | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetType(prompt, _type) {
    UiPromptSetType(prompt, _type);
}
/**
 * No comment provided
 *
 * Hash: 0xC5F428EE08FA7F2C | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetUrgentPulsingEnabled(prompt, toggle) {
    UiPromptSetUrgentPulsingEnabled(prompt, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x71215ACCFDE075EE | Since: 1207 | API-Set: unknown
 */
export function uiPromptSetVisible(prompt, toggle) {
    UiPromptSetVisible(prompt, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x1FE4788AB1430C55 | Since: 1207 | API-Set: unknown
 */
export function uiPromptWasBeatModePressedInTimeWindow(prompt) {
    return UiPromptWasBeatModePressedInTimeWindow(prompt);
}
