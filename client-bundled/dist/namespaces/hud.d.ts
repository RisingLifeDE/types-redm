import { Vector3, IEntity, IPed, IPlayer } from '@risinglife/redm-shared';
/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 *
 * Hash: 0xCD949E20 | Since: unknown | API-Set: client
 */
export declare function getComponentAlign(id: number): [number, number];
/**
 * No comment provided
 *
 * Hash: 0xA91866BC | Since: unknown | API-Set: client
 */
export declare function getComponentName(id: number): string;
/**
 * No comment provided
 *
 * Hash: 0x12217D33 | Since: unknown | API-Set: client
 */
export declare function getComponentSize(id: number): Vector3;
/**
 * Returns the zoom level data by index from mapzoomdata.meta file.
 *
 * Hash: 0x1363A998 | Since: unknown | API-Set: client
 */
export declare function getMapZoomDataLevel(index: number): [boolean, number, number, number, number, number];
/**
 * Returns true if the minimap is currently expanded. False if it's the normal minimap state.
 * Use [`IsBigmapFull`](#\_0x66EE14B2) to check if the full map is currently revealed on the minimap.
 *
 * Hash: 0xFFF65C63 | Since: unknown | API-Set: client
 */
export declare function isBigmapActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x66EE14B2 | Since: unknown | API-Set: client
 */
export declare function isBigmapFull(): boolean;
/**
 * Resets values from the zoom level data by index to defaults from mapzoomdata.meta.
 *
 * Hash: 0x11A5B7ED | Since: unknown | API-Set: client
 */
export declare function resetMapZoomDataLevel(index: number): void;
/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 *
 * Hash: 0xEED219F2 | Since: unknown | API-Set: client
 */
export declare function setComponentAlign(id: number, horizontalAlign: number, verticalAlign: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7644A9FA | Since: unknown | API-Set: client
 */
export declare function setComponentSize(id: number, x: number, y: number): void;
/**
 * Sets values to the zoom level data by index.
 *
 * Hash: 0x447C718E | Since: unknown | API-Set: client
 */
export declare function setMapZoomDataLevel(index: number, zoomScale: number, zoomSpeed: number, scrollSpeed: number, tilesX: number, tilesY: number): void;
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
export declare function getMinimapType(): number;
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
export declare function setMinimapType(_type: number): void;
/**
 * Old name: _ALLOW_PAUSE_MENU_WHEN_DEAD_THIS_FRAME
 *
 * Hash: 0x30996422DF1EE561 | Since: 1207 | API-Set: unknown
 */
export declare function allowPauseWhenNotInStateOfPlayThisFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0x823BF7B1DF613A21 | Since: 1207 | API-Set: unknown
 */
export declare function busyspinnerIsOn(): boolean;
/**
 * Removes the loading prompt at the bottom right of the screen.
 *
 * Hash: 0x58F441B90EA84D06 | Since: 1207 | API-Set: unknown
 */
export declare function busyspinnerOff(): void;
/**
 * No comment provided
 *
 * Hash: 0x916ED8321F087059 | Since: 1207 | API-Set: unknown
 */
export declare function clearAllHelpMessages(): void;
/**
 * No comment provided
 *
 * Hash: 0x53CB4B502E1C57EA | Since: 1207 | API-Set: unknown
 */
export declare function createFakeMpGamerTag(ped: number | IPed, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, clanFlag: number): number;
/**
 * No comment provided
 *
 * Hash: 0x56CE42A528156A67 | Since: 1207 | API-Set: unknown
 */
export declare function disableFrontendThisFrame(): void;
/**
 * If Hud should be displayed
 *
 * Hash: 0xD63FE3AF9FB3D53F | Since: 1207 | API-Set: unknown
 */
export declare function display(toggle: boolean): void;
/**
 * Checks if the passed gxt name exists in the game files.
 *
 * Hash: 0x73C258C68D6F55B6 | Since: 1207 | API-Set: unknown
 */
export declare function doesTextLabelExist(label: string): boolean;
/**
 * Note: you must use VAR_STRING. Byte code very similar to TEXT_COMMAND_DISPLAY_TEXT in V
 * Old name: _GET_TEXT_SUBSTRING
 *
 * Hash: 0x9D7E12EC6A1EE4E5 | Since: 1207 | API-Set: unknown
 */
export declare function getCharacterFromAudioConversationFilename(text: string, position: number, length: number): string;
/**
 * Gets a string literal from a label name.
 *
 * Old name: _GET_LABEL_TEXT
 *
 * Hash: 0xCFEDCCAD3C5BA90D | Since: 1207 | API-Set: unknown
 */
export declare function getFilenameForAudioConversation(labelName: string): string;
/**
 * No comment provided
 *
 * Hash: 0xB39C81628EF10B42 | Since: 1207 | API-Set: unknown
 */
export declare function getScreenPositionFromWorldPosition(worldPos: Vector3): [number, number, number];
/**
 * Returns the length of the string passed (much like strlen).
 *
 * Hash: 0x481FBF588B0B76DB | Since: 1207 | API-Set: unknown
 */
export declare function getLengthOfLiteralString(_string: string): number;
/**
 * No comment provided
 *
 * Hash: 0xDC5AD6B7AB8184F5 | Since: 1207 | API-Set: unknown
 */
export declare function getLengthOfLiteralStringInBytes(_string: string): number;
/**
 * No comment provided
 *
 * Hash: 0xB6762A85EE29AA60 | Since: 1207 | API-Set: unknown
 */
export declare function getNamedRendertargetRenderId(name: string): number;
/**
 * Returns the label text given the hash.
 *
 * Old name: _GET_LABEL_TEXT_BY_HASH
 *
 * Hash: 0xBD5DD5EAE2B6CE14 | Since: 1207 | API-Set: unknown
 */
export declare function getStringFromHashKey(labelHash: number | string): string;
/**
 * No comment provided
 *
 * Hash: 0x36CDD81627A6FCD2 | Since: 1207 | API-Set: unknown
 */
export declare function hideAndRadarThisFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0xEA600AABAF4B9084 | Since: 1207 | API-Set: unknown
 */
export declare function hideLoadingOnFadeThisFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0x71B72B478F8189DC | Since: 1207 | API-Set: unknown
 */
export declare function isHidden(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6E1C31E14C7A5F97 | Since: 1207 | API-Set: unknown
 */
export declare function isMpGamerTagActive(gamerTagId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x707032835FF09AE7 | Since: 1207 | API-Set: unknown
 */
export declare function isNamedRendertargetLinked(modelHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3EE32F7964C40FE6 | Since: 1207 | API-Set: unknown
 */
export declare function isNamedRendertargetRegistered(name: string): boolean;
/**
 * Returns true when either Pause Menu, a Frontend Menu, Online Policies menu or Social Club menu is active.
 *
 * Hash: 0x535384D6067BA42E | Since: 1207 | API-Set: unknown
 */
export declare function isPauseMenuActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1B82FD5FFA4D666E | Since: 1207 | API-Set: unknown
 */
export declare function isRadarHidden(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x66F35DD9D2B58579 | Since: 1207 | API-Set: unknown
 */
export declare function isRadarHiddenByScript(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x81E47F0EE1F2B21E | Since: 1207 | API-Set: unknown
 */
export declare function isRadarPreferenceSwitchedOn(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7C4AC9573587F2DF | Since: 1355 | API-Set: unknown
 */
export declare function isSubtitlePreferenceSwitchedOn(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2F506B8556242DDB | Since: 1207 | API-Set: unknown
 */
export declare function linkNamedRendertarget(modelHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x98AF2BB6F62BD588 | Since: 1207 | API-Set: unknown
 */
export declare function registerNamedRendertarget(name: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0E692EE61761361F | Since: 1207 | API-Set: unknown
 */
export declare function releaseNamedRendertarget(name: string): boolean;
/**
 * only works by invoking and passing as pointer value Citizen.InvokeNative(0x839BFD7D7E49FE09, Citizen.PointerValueIntInitialized(gamerTagId))
 *
 * Hash: 0x839BFD7D7E49FE09 | Since: 1207 | API-Set: unknown
 */
export declare function removeMpGamerTag(gamerTagId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCE47C21C0687EBC2 | Since: 1207 | API-Set: unknown
 */
export declare function setFrontendActive(active: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x402669A4BDAA72DA | Since: 1207 | API-Set: unknown
 */
export declare function setMissionName(name: string): void;
/**
 * No comment provided
 *
 * Hash: 0xD98630CE73C61E98 | Since: 1207 | API-Set: unknown
 */
export declare function setMissionNameForUgcMission(name: string): void;
/**
 * No comment provided
 *
 * Hash: 0xA0D7CE5F83259663 | Since: 1207 | API-Set: unknown
 */
export declare function setMpGamerTagBigText(gamerTagId: number, _string: string): void;
/**
 * No comment provided
 *
 * Hash: 0xEA6F4B8D4B4B5B3E | Since: 1207 | API-Set: unknown
 */
export declare function setMpGamerTagName(gamerTagId: number, _string: string): void;
/**
 * No comment provided
 *
 * Hash: 0xE550CDE128D56757 | Since: 1207 | API-Set: unknown
 */
export declare function setTextRenderId(renderId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD0976CC34002DB57 | Since: 1207 | API-Set: unknown
 */
export declare function textBlockIsLoaded(textBlock: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF66090013DE648D5 | Since: 1207 | API-Set: unknown
 */
export declare function textBlockRequest(textBlock: string): void;
/**
 * No comment provided
 *
 * Hash: 0xBE1067CD1C9570F6 | Since: 1207 | API-Set: unknown
 */
export declare function uiGetSceneUiobject(): any;
/**
 * No comment provided
 *
 * Hash: 0x51DE09A2196BD951 | Since: 1207 | API-Set: unknown
 */
export declare function uiMovieviewSetRenderTarget(): void;
/**
 * No comment provided
 *
 * Hash: 0x1BE19185B8AFE299 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptIsControlActionActive(controlAction: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB6857100F8FD433C | Since: 1207 | API-Set: unknown
 */
export declare function uiRequestScene(): any;
/**
 * No comment provided
 *
 * Hash: 0x052D4AC0922AF91A | Since: 1207 | API-Set: unknown
 */
export declare function _0x052D4AC0922AF91A(): void;
/**
 * No comment provided
 *
 * Hash: 0x066725A9D52B3641 | Since: 1232 | API-Set: unknown
 */
export declare function _0x066725A9D52B3641(): any;
/**
 * No comment provided
 *
 * Hash: 0x100157D6D7FE32CA | Since: 1207 | API-Set: unknown
 */
export declare function _0x100157D6D7FE32CA(): any;
/**
 * No comment provided
 *
 * Hash: 0x160825DADF1B04B3 | Since: 1207 | API-Set: unknown
 */
export declare function _0x160825DADF1B04B3(): void;
/**
 * No comment provided
 *
 * Hash: 0x28AE29D909C8FDCE | Since: 1207 | API-Set: unknown
 */
export declare function _0x28AE29D909C8FDCE(): any;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x2F7BB105144ACF30 | Since: 1207 | API-Set: unknown
 */
export declare function _0x2F7BB105144ACF30(): void;
/**
 * No comment provided
 *
 * Hash: 0x3FE4FB41EF7D2196 | Since: 1207 | API-Set: unknown
 */
export declare function _0x3FE4FB41EF7D2196(): void;
/**
 * No comment provided
 *
 * Hash: 0x53CE46C01A089DA1 | Since: 1207 | API-Set: unknown
 */
export declare function _0x53CE46C01A089DA1(prompt: any): void;
/**
 * No comment provided
 *
 * Hash: 0x5651516D947ABC53 | Since: 1207 | API-Set: unknown
 */
export declare function _0x5651516D947ABC53(): void;
/**
 * No comment provided
 *
 * Hash: 0x8A59D44189AF2BC5 | Since: 1207 | API-Set: unknown
 */
export declare function _0x8A59D44189AF2BC5(): void;
/**
 * No comment provided
 *
 * Hash: 0x8B55B324A9123F6B | Since: 1232 | API-Set: unknown
 */
export declare function _0x8B55B324A9123F6B(groupId: number, volume: number): any;
/**
 * No comment provided
 *
 * Hash: 0x958278B97C4AFFD8 | Since: 1232 | API-Set: unknown
 */
export declare function _0x958278B97C4AFFD8(): void;
/**
 * No comment provided
 *
 * Hash: 0x9D37EB5003E0F2CF | Since: 1207 | API-Set: unknown
 */
export declare function _0x9D37EB5003E0F2CF(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xBFFF81E12A745A5F | Since: 1207 | API-Set: unknown
 */
export declare function _0xBFFF81E12A745A5F(): void;
/**
 * No comment provided
 *
 * Hash: 0xD6BD313CFA41E57A | Since: 1207 | API-Set: unknown
 */
export declare function _0xD6BD313CFA41E57A(): any;
/**
 * No comment provided
 *
 * Hash: 0xF1E6979C0B779985 | Since: 1207 | API-Set: unknown
 */
export declare function _0xF1E6979C0B779985(uiscene: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7F78CD75CC4539E4 | Since: 1207 | API-Set: unknown
 */
export declare function busyspinnerSetText(text: string): void;
/**
 * No comment provided
 *
 * Hash: 0xD877AF112AD2B41B | Since: 1207 | API-Set: unknown
 */
export declare function createMpGamerTag(player: number | string | IPlayer, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, clanFlag: number): number;
/**
 * No comment provided
 *
 * Hash: 0xE961BF23EAB76B12 | Since: 1207 | API-Set: unknown
 */
export declare function createMpGamerTagOnEntity(entity: number | IEntity, text: string): number;
/**
 * https://gist.github.com/outsider31000/c640961d17b2e4fb0435a413710e1930 list of presets
 * Old name: _DISPLAY_HUD_COMPONENT
 *
 * Hash: 0x8BC7C1F929D07BF3 | Since: 1207 | API-Set: unknown
 */
export declare function disableContext(component: number | string): void;
/**
 * Disables reduced time scale while menus such as weapon wheel and satchel are open.
 *
 * Hash: 0xC5C7A2F6567FCCBC | Since: 1207 | API-Set: unknown
 */
export declare function disableReducedMenuTimeScale(): void;
/**
 * nullsub, this native does nothing since build 1436, use _BG_DISPLAY_TEXT (0x16794E044C9EFB58) instead.
 *
 * Hash: 0xD79334A4BB99BAD1 | Since: 1207 | API-Set: unknown
 */
export declare function displayText(text: string, xPos: number, yPos: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2C729F2B94CEA911 | Since: 1207 | API-Set: unknown
 */
export declare function doesTextBlockExist(textDatabase: string): boolean;
/**
 * https://gist.github.com/outsider31000/c640961d17b2e4fb0435a413710e1930 list of presets
 * Old name: _HIDE_HUD_COMPONENT
 *
 * Hash: 0x4CC5F2FC1332577F | Since: 1207 | API-Set: unknown
 */
export declare function enableContext(component: number | string): void;
/**
 * https://gist.github.com/outsider31000/c640961d17b2e4fb0435a413710e1930 list of presets
 *
 * Hash: 0xC9CAEAEEC1256E54 | Since: 1207 | API-Set: unknown
 */
export declare function enableContextThisFrame(component: number | string): void;
/**
 * Enables reduced time scale while menus such as weapon wheel and satchel are open.
 *
 * Hash: 0x26F6BBEA2CE3E3DC | Since: 1207 | API-Set: unknown
 */
export declare function enableReducedMenuTimeScale(): void;
/**
 * colorNameHash: https://alloc8or.re/rdr3/doc/enums/eColor.txt
 *
 * Hash: 0xB981DD2DFAF9B1C9 | Since: 1207 | API-Set: unknown
 */
export declare function getColorFromName(colorNameHash: number | string): [number, number, number, number];
/**
 * Returns the state of a specific HUD Component
 * eHudVisibilitySlotType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eHudVisibilitySlotType
 *
 * Hash: 0x7EC0D68233E391AC | Since: 1207 | API-Set: unknown
 */
export declare function getState(hudComponent: number): number;
/**
 * No comment provided
 *
 * Hash: 0x3429670F9B9EF2D3 | Since: 1207 | API-Set: unknown
 */
export declare function getLabelText2(label: string): string;
/**
 * This native accepts 1 as parameter in the decompiles
 * returns the nearest horse handle if within 2 3 meters of the player, if not close enough returns false
 *
 * NOTE: if type is 0 returns PlayerPedId always?
 *
 * Hash: 0x0501D52D24EA8934 | Since: 1207 | API-Set: unknown
 */
export declare function getNearHorse(): number;
/**
 * Similar to 0x9D7E12EC6A1EE4E5(GET_TEXT_SUBSTRING) but starts at the beginning of the string
 *
 * Hash: 0xD8402B858F4DDD88 | Since: 1207 | API-Set: unknown
 */
export declare function getTextSubstring2(text: string, length: number): string;
/**
 * `Example: HUD::_0x806862E5D266CF38(&string1, 0, HUD::GET_LENGTH_OF_LITERAL_STRING(&string1) - HUD::GET_LENGTH_OF_LITERAL_STRING("_DUALWIELD"))`
 *
 * Hash: 0x806862E5D266CF38 | Since: 1207 | API-Set: unknown
 */
export declare function getTextSubstring3(begin: number, length: number): [any, string];
/**
 * No comment provided
 *
 * Hash: 0xBF4F34A85CA2970D | Since: 1207 | API-Set: unknown
 */
export declare function hideThisFrame(): void;
/**
 * Returns the hash of the currently highlighted item in the weapon wheel.
 * Only works while the wheel is open otherwise will return false
 *
 * Use in conjunction with IS_CONTROL_JUST_RELEASED(0, 'INPUT_OPEN_WHEEL_MENU') to detect item selection/usage.
 *
 * Hash: 0x9C409BBC492CB5B1 | Since: 1207 | API-Set: unknown
 */
export declare function weaponWheelGetSelectedItemHash(): number;
/**
 * No comment provided
 *
 * Hash: 0x502E1591A504F843 | Since: 1207 | API-Set: unknown
 */
export declare function isMpGamerTagActiveOnEntity(gamerTagId: number, entity: number | IEntity): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCF782691D91F270E | Since: 1207 | API-Set: unknown
 */
export declare function journalCanWriteEntry(): any;
/**
 * No comment provided
 *
 * Hash: 0xF402978DE6F88D6E | Since: 1207 | API-Set: unknown
 */
export declare function journalClearAllProgress(): void;
/**
 * No comment provided
 *
 * Hash: 0x3D16ABD7A1FD8C96 | Since: 1207 | API-Set: unknown
 */
export declare function journalGetEntryAtIndex(): any;
/**
 * No comment provided
 *
 * Hash: 0xE65B5DE53351BE22 | Since: 1207 | API-Set: unknown
 */
export declare function journalGetEntryCount(): any;
/**
 * No comment provided
 *
 * Hash: 0x5514C3E60673530F | Since: 1207 | API-Set: unknown
 */
export declare function journalGetEntryInfo(): any;
/**
 * No comment provided
 *
 * Hash: 0xCB5945E1B855852F | Since: 1207 | API-Set: unknown
 */
export declare function journalGetGrimeAtIndex(): any;
/**
 * No comment provided
 *
 * Hash: 0x62CC549B3B8EA2AA | Since: 1207 | API-Set: unknown
 */
export declare function journalGetTextureWithLayout(): any;
/**
 * No comment provided
 *
 * Hash: 0xE4509BABE59BD24E | Since: 1207 | API-Set: unknown
 */
export declare function journalMarkRead(): void;
/**
 * No comment provided
 *
 * Hash: 0x6DFDD665E416B093 | Since: 1207 | API-Set: unknown
 */
export declare function journalWriteEntry(): void;
/**
 * No comment provided
 *
 * Hash: 0x1F9A64C2804B3471 | Since: 1207 | API-Set: unknown
 */
export declare function mpGamerTagDisableReviveTopIcon(gamerTagId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFFF6579CF0139FCE | Since: 1207 | API-Set: unknown
 */
export declare function mpGamerTagEnableReviveTopIcon(gamerTagId: number): void;
/**
 * string1 is the only string used in the scripts, the others are null (0)
 *
 * Hash: 0xCE0D2F5586627CCE | Since: 1207 | API-Set: unknown
 */
export declare function setCurrentUgcMissionDescription(active: boolean, string1: string, string2: string, string3: string, string4: string): void;
/**
 * No comment provided
 *
 * Hash: 0x84BD27DDF9575816 | Since: 1207 | API-Set: unknown
 */
export declare function setMpGamerTagColour(gamerTagId: number, colour: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x1EA716E0628A6F44 | Since: 1207 | API-Set: unknown
 */
export declare function setMpGamerTagNamePosse(gamerTagId: number, text: string): void;
/**
 * Found icons: SPEAKER, THROPY
 *
 * Hash: 0x95384C6CE1526EFF | Since: 1207 | API-Set: unknown
 */
export declare function setMpGamerTagSecondaryIcon(gamerTagId: number, icon: number | string): void;
/**
 * Found icons: https://pastebin.com/xx6rEgiG
 *
 * Hash: 0x5F57522BC1EB9D9D | Since: 1207 | API-Set: unknown
 */
export declare function setMpGamerTagTopIcon(gamerTagId: number, icon: number | string): void;
/**
 * Found types: GENERIC_PLAYER, DEADDROP, HOTPROPERTY, MINIGAMES
 *
 * Hash: 0x25B9C78A25105C35 | Since: 1207 | API-Set: unknown
 */
export declare function setMpGamerTagType(gamerTagId: number, _type: number | string): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xEF7AB1A0E8C86170 | Since: 1207 | API-Set: unknown
 */
export declare function setMpGamerTagUnkAllowLocalized(gamerTagId: number, allow: boolean): void;
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
export declare function setMpGamerTagVisibility(gamerTagId: number, visibility: number): void;
/**
 * This native does nothing since build 1436, use _BG_SET_TEXT_COLOR (0x16FA5CE47F184F1E) instead.
 *
 * Hash: 0x50A41AD966910F03 | Since: 1207 | API-Set: unknown
 */
export declare function setTextColor(r: number, g: number, b: number, a: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD4EE21B7CC7FD350 | Since: 1207 | API-Set: unknown
 */
export declare function showHorseCores(state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x50C803A4CD5932C5 | Since: 1207 | API-Set: unknown
 */
export declare function showPlayerCores(state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xAA03F130A637D923 | Since: 1207 | API-Set: unknown
 */
export declare function textBlockDelete(textBlock: string): void;
/**
 * No comment provided
 *
 * Hash: 0x3CF96E16265B7DC8 | Since: 1207 | API-Set: unknown
 */
export declare function textBlockIsStreamed(textBlock: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x684C96CC7C66E8EF | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptAddGroupLink(prompt: any): void;
/**
 * No comment provided
 *
 * Hash: 0x837972ED28159536 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptAddGroupReturnLink(prompt: any): void;
/**
 * id is the return value from 0xD9459157EB22C895.
 *
 * Hash: 0x6095358C4142932A | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptClearHorizontalOrientation(id: number): void;
/**
 * No comment provided
 *
 * Hash: 0x51259AE5C72D4A1B | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptClearPromptPriorityPreference(): void;
/**
 * No comment provided
 *
 * Hash: 0xAE84C5EE2C384FB3 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptContextSetPoint(prompt: any, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x0C718001B77CA468 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptContextSetRadius(prompt: any, radius: number): void;
/**
 * Attaches a Volume
 *
 * Hash: 0x4D107406667423BE | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptContextSetVolume(prompt: any, volume: number): void;
/**
 * No comment provided
 *
 * Hash: 0x29FA7910726C3889 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptCreate(inputHash: number | string, labelName: string): any;
/**
 * No comment provided
 *
 * Hash: 0x00EDE88D4D13CF59 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptDelete(prompt: any): void;
/**
 * No comment provided
 *
 * Hash: 0xF1622CE88A1946FB | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptDisablePromptsThisFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0xFC094EF26DD153FA | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptDisablePromptTypeThisFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0xEB550B927B34A1BB | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptDoesAmbientGroupExist(hash: number | string): boolean;
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/graphics/HUD/prompts/prompt_types
 *
 * Hash: 0x06565032897BA861 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptEnablePromptTypeThisFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0x6A2F820452017EA2 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptFilterClear(): void;
/**
 * No comment provided
 *
 * Hash: 0xC1FCC36C3F7286C8 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptGetGroupActivePage(hash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xCB73D7521E7103F0 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptGetGroupIdForScenarioPoint(): number;
/**
 * No comment provided
 *
 * Hash: 0xB796970BD125FCE8 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptGetGroupIdForTargetEntity(entity: number | IEntity): number;
/**
 * No comment provided
 *
 * Hash: 0x8A9585293863B8A5 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptGetMashModeProgress(prompt: any): number;
/**
 * No comment provided
 *
 * Hash: 0x81801291806DBC50 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptGetProgress(prompt: any): number;
/**
 * No comment provided
 *
 * Hash: 0x1FBA0DABECDDB52B | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptGetUrgentPulsingEnabled(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8010BEBD0D5ED5BC | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptHasHoldAutoFillMode(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB60C9F9ED47ABB76 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptHasHoldMode(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE0F65F0640EF0617 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptHasHoldModeCompleted(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA6C6A4ADB3BAC409 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptHasManualMashMode(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCD072523791DDC1B | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptHasMashMode(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x845CE958416DC473 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptHasMashModeCompleted(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x25B18E530CF39D6F | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptHasMashModeFailed(prompt: any): boolean;
/**
 * returns true if the mash mode have just been pressed
 *
 * Hash: 0xB0E8599243B3F568 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptHasMashModeJustPressed(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3CE854D250A88DAF | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptHasPressedTimedModeCompleted(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1A17B9ECFF617562 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptHasPressedTimedModeFailed(prompt: any): boolean;
/**
 * Params: p1 is 0
 *
 * Hash: 0xC92AC953F0A982AE | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptHasStandardModeCompleted(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x546E342E01DE71CF | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptIsActive(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0D00EDDFB58B7F28 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptIsEnabled(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC7D70EAEF92EFF48 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptIsHoldModeRunning(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2787CC611D3FACC5 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptIsJustPressed(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x635CC82FA297A827 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptIsJustReleased(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x21E60E230086697F | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptIsPressed(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAFC887BA7A7756D6 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptIsReleased(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x347469FBDD1589A9 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptIsValid(prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x04F97DE45A519419 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptRegisterBegin(): any;
/**
 * No comment provided
 *
 * Hash: 0xF7AA2696A22AD8B9 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptRegisterEnd(prompt: any): void;
/**
 * No comment provided
 *
 * Hash: 0x4E52C800A28F7BE8 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptRemoveGroup(prompt: any): void;
/**
 * No comment provided
 *
 * Hash: 0xDC6C55DFA2C24EE5 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptRestartModes(prompt: any): void;
/**
 * Note: you must use VAR_STRING for p1 if string is not part of text database
 * tabAmount: specifies number of tabs in prompt group
 * tabDefaultIndex: specifies starting index
 * p3 if is set > 3 you can no longer press Q to change tab if there are more than one tab set in tabAmount
 *
 * Hash: 0xC65A45D4453C2627 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetActiveGroupThisFrame(hash: number | string, name: string, tabAmount: number, tabDefaultIndex: number, prompt: any): any;
/**
 * No comment provided
 *
 * Hash: 0x565C1CE183CB0EAF | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetAllowedAction(prompt: any, action: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x315C81D760609108 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetAmbientGroupThisFrame(entity: number | IEntity, p4: number | string, name: string): any;
/**
 * attribute: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eUIPromptAttribute
 *
 * Hash: 0x560E76D5E2E1803F | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetAttribute(prompt: any, attribute: number, enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xF957A1654C6322FE | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetBeatMode(prompt: any, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xB487A4936FBF40AC | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetBeatModeGrayedOut(prompt: any): void;
/**
 * No comment provided
 *
 * Hash: 0xB5352B7494A08258 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetControlAction(prompt: any, action: number | string): any;
/**
 * No comment provided
 *
 * Hash: 0x8A0FB4D03A630D21 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetEnabled(prompt: any, toggle: boolean): void;
/**
 * tabIndex: specifies tab of prompt
 *
 * Hash: 0x2F11D3A254169EA4 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetGroup(prompt: any, groupId: number, tabIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3CE932E737C145D6 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetHoldAutoFillMode(prompt: any, autoFillTimeMs: number, holdTimeMs: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA3F2149AA24F3D8E | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetHoldAutoFillWithDecayMode(prompt: any, autoFillTimeMs: number, holdTimeMs: number): void;
/**
 * No comment provided
 *
 * Hash: 0xEA5CCF4EEB2F82D1 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetHoldIndefinitelyMode(prompt: any): void;
/**
 * Params: p2 is 304000 in R* SP Script coachrobberies
 *
 * Hash: 0x94073D5CA3F16B7B | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetHoldMode(prompt: any, holdTimeMs: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA520C7B05FA4EB2A | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetManualResolved(prompt: any): void;
/**
 * No comment provided
 *
 * Hash: 0x6C39587D7CC66801 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetMashAutoFillMode(prompt: any, autoFillTimeMs: number, mashes: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7B66E89312727274 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetMashIndefinitelyMode(prompt: any): void;
/**
 * No comment provided
 *
 * Hash: 0x179DCF71F705DA20 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetMashManualCanFailMode(prompt: any): void;
/**
 * No comment provided
 *
 * Hash: 0x32DF729D8BD3C1C6 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetMashManualMode(prompt: any): void;
/**
 * standard (prompt not held) rate: 0.035f
 * fast (prompt held) rate: 0.015f
 * punitive (been hit) rate: 0.14f
 *
 * Hash: 0x7D393C247FB9B431 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetMashManualModeDecaySpeed(prompt: any, speed: number): void;
/**
 * standard (prompt not held) rate: (1f / 128f)
 * fast (prompt held) rate: (1f / 64f)
 * punitive (been hit) rate: (1f / 128f)
 *
 * Hash: 0xA0D1D79C6036A855 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetMashManualModeIncreasePerPress(prompt: any, rate: number): void;
/**
 * No comment provided
 *
 * Hash: 0x56DBB26F98582C29 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetMashManualModePressedGrowthSpeed(prompt: any, speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDF6423BF071C7F71 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetMashMode(prompt: any, mashes: number): void;
/**
 * For startProgress, 0.0f - 1.0f is a percentage value, so 0.5f = 50% progress. Range: 0.0f - 1.0f
 * For decreaseSpeed, 0.0f will result in the prompt not showing the mash progress at all. 0.01f - ?.0f. At speeds around 7.0f to 8.0f the prompt basically fails immediately if you don't start mashing right away.
 *
 * Hash: 0xDC0CB602DEADBA53 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetMashWithResistanceCanFailMode(prompt: any, mashes: number, decreaseSpeed: number, startProgress: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCD1BDFF15EFA79F5 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetMashWithResistanceMode(prompt: any, mashes: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2F385ECC5200938D | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetOrderingAsInputType(prompt: any): void;
/**
 * No comment provided
 *
 * Hash: 0x1473D3AF51D54276 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetPressedTimedMode(prompt: any, depletionTimeMs: number): void;
/**
 * priority: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePromptPriority
 *
 * Hash: 0xCA24F528D0D16289 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetPriority(prompt: any, priority: number): void;
/**
 * No comment provided
 *
 * Hash: 0x530A428705BE5DEF | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetPromptPriorityPreference(ped: number | IPed): void;
/**
 * This returns an id that can be used with 0x6095358C4142932A.
 *
 * Hash: 0xD9459157EB22C895 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetRegisterHorizontalOrientation(): number;
/**
 * Used for controllers
 *
 * Hash: 0x7ABE7095FB3D2581 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetRotateMode(prompt: any, counterclockwise: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x832CB510DE546282 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetSpinnerPosition(prompt: any): void;
/**
 * No comment provided
 *
 * Hash: 0xAC6586A7FDCD4B68 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetSpinnerSpeed(prompt: any): void;
/**
 * HoldType Hashes: SHORT_TIMED_EVENT_MP, SHORT_TIMED_EVENT, MEDIUM_TIMED_EVENT, LONG_TIMED_EVENT, RUSTLING_CALM_TIMING, PLAYER_FOCUS_TIMING, PLAYER_REACTION_TIMING
 *
 * Hash: 0x74C7D7B72ED0D3CF | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetStandardizedHoldMode(prompt: any, holdType: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xCC6656799977741B | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetStandardMode(prompt: any, releaseMode: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xDEC85C174751292B | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetTag(prompt: any): void;
/**
 * No comment provided
 *
 * Hash: 0x5F6503D9CD2754EB | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetTargetMode(prompt: any): void;
/**
 * No comment provided
 *
 * Hash: 0x00123054BEC8A30F | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetTargetModeProgress(prompt: any, progress: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5E019C45DD3B6A14 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetTargetModeTarget(prompt: any): void;
/**
 * No comment provided
 *
 * Hash: 0x5DD02A8318420DD7 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetText(prompt: any, text: string): void;
/**
 * TM_ANY = 0,
 * TM_ON_FOOT,
 * TM_IN_VEHICLE
 *
 * Hash: 0x876E4A35C73A6655 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetTransportMode(prompt: any, mode: number): void;
/**
 * Params: type = mostly 0, 6 (net_mission_intro_story_gvo), 7 (fm_mission_controller), 14 (net_ugc_end_flow_transition_online), 15 (net_main_[tlg_]offline)
 *
 * Hash: 0xF4A5C4509BF923B1 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetType(prompt: any, _type: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC5F428EE08FA7F2C | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetUrgentPulsingEnabled(prompt: any, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x71215ACCFDE075EE | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptSetVisible(prompt: any, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1FE4788AB1430C55 | Since: 1207 | API-Set: unknown
 */
export declare function uiPromptWasBeatModePressedInTimeWindow(prompt: any): boolean;
