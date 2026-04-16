import { Vector3, IEntity, IPed } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x0360710033BE60D9 | Since: 1207
 */
export declare function beginSrl(): void;
/**
 * No comment provided
 *
 * Hash: 0x86CCAF7CE493EFBE | Since: 1207
 */
export declare function clearFocus(): void;
/**
 * No comment provided
 *
 * Hash: 0xD83B22434E52728D | Since: 1207
 */
export declare function clearHdArea(): void;
/**
 * No comment provided
 *
 * Hash: 0x537F44CB0D7F150D | Since: 1207
 */
export declare function doesAnimDictExist(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x1CE71FB33CA079FE | Since: 1207
 */
export declare function endSrl(): void;
/**
 * No comment provided
 *
 * Hash: 0x30CCCC4D88E654CA | Since: 1207
 */
export declare function getNumberOfRequests(): number;
/**
 * No comment provided
 *
 * Hash: 0x8A3945405B31048F | Since: 1207
 */
export declare function getPopulationBudgetMultiplier(): number;
/**
 * No comment provided
 *
 * Hash: 0x27FF6FE8009B40CA | Since: 1207
 */
export declare function hasAnimDictLoaded(): [boolean, string];
/**
 * Alias for HAS_ANIM_SET_LOADED.
 *
 * Hash: 0x1F23D6B6DA1CC3B2 | Since: 1207
 */
export declare function hasClipSetLoaded(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x210A79C9EC89778F | Since: 1207
 */
export declare function hasCollisionForModelLoaded(model: number | string): boolean;
/**
 * Checks if the specified model has loaded into memory.
 *
 * Hash: 0x1283B8B89DD5D1B6 | Since: 1207
 */
export declare function hasModelLoaded(model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2C04D89A0FB4E244 | Since: 1207
 */
export declare function hasMoveNetworkDefLoaded(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x65BB72F29138F5D6 | Since: 1207
 */
export declare function hasNamedPtfxAssetLoaded(fxNameHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x13A3F30A9ED0BC31 | Since: 1207
 */
export declare function hasPtfxAssetLoaded(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x31108BB5715D035F | Since: 1207
 */
export declare function iplGroupSwapCancel(): void;
/**
 * No comment provided
 *
 * Hash: 0x040EE319EFD1D3B5 | Since: 1207
 */
export declare function iplGroupSwapFinish(): void;
/**
 * No comment provided
 *
 * Hash: 0xFC464598F6EE97B0 | Since: 1207
 */
export declare function iplGroupSwapIsActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC2C05DEFE85A0B64 | Since: 1207
 */
export declare function iplGroupSwapIsReady(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x20D504994FDC4412 | Since: 1207
 */
export declare function iplGroupSwapStart(): [string, string];
/**
 * No comment provided
 *
 * Hash: 0xF87DE697E9A06EC6 | Since: 1207
 */
export declare function isEntityFocus(entity: number | IEntity): boolean;
/**
 * Old name: _IS_IMAP_ACTIVE_2
 *
 * Hash: 0x93AC1B91CB6D9913 | Since: 1207
 */
export declare function isIplActiveByHash(iplHash: number | string): boolean;
/**
 * Old name: _IS_IMAP_ACTIVE
 *
 * Hash: 0xD779B9B910BD3B7C | Since: 1207
 */
export declare function isIplActiveHash(iplHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCF45DF50C7775F2A | Since: 1207
 */
export declare function isLoadSceneActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0909F71B5C070797 | Since: 1207
 */
export declare function isLoadSceneLoaded(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC3F09DE9D6D17DDA | Since: 1207
 */
export declare function isModelAPed(model: number | string): boolean;
/**
 * Returns whether the specified model represents a vehicle.
 *
 * Hash: 0x354F62672DE7DB0A | Since: 1207
 */
export declare function isModelAVehicle(model: number | string): boolean;
/**
 * Returns whether the specified model exists in the game.
 *
 * Hash: 0xD6F3B6D7716CFF8E | Since: 1207
 */
export declare function isModelInCdimage(model: number | string): boolean;
/**
 * Returns whether the specified model is valid
 *
 * Hash: 0x392C8D8E07B70EFC | Since: 1207
 */
export declare function isModelValid(model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xED20CB1F5297791D | Since: 1207
 */
export declare function isPlayerSwitchInProgress(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x45BF3A6239A576B7 | Since: 1207
 */
export declare function isRenderedSceneLoaded(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5C2C88512CF6DAFB | Since: 1207
 */
export declare function isSrlLoaded(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x387AD749E3B69B70 | Since: 1207
 */
export declare function loadSceneStart(pos: Vector3, offsetX: number, offsetY: number, offsetZ: number, radius: number, controlFlags: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x513F8AA5BF2F17CF | Since: 1207
 */
export declare function loadSceneStartSphere(pos: Vector3, radius: number, controlFlags: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5A8B01199C3E79C3 | Since: 1207
 */
export declare function loadSceneStop(): void;
/**
 * No comment provided
 *
 * Hash: 0x354837E5A5BAA5AF | Since: 1207
 */
export declare function prefetchSrl(): string;
/**
 * No comment provided
 *
 * Hash: 0x4763145053A33D46 | Since: 1207
 */
export declare function removeAnimDict(): string;
/**
 * Alias for REMOVE_ANIM_SET.
 *
 * Hash: 0x817FA1B1EE7CD6F0 | Since: 1207
 */
export declare function removeClipSet(): string;
/**
 * Old name: _REMOVE_IMAP_2
 *
 * Hash: 0x431E3AB760629B34 | Since: 1207
 */
export declare function removeIplByHash(iplHash: number | string): void;
/**
 * Old name: _REMOVE_IMAP
 *
 * Hash: 0x5A3E5CF7B4014B96 | Since: 1207
 */
export declare function removeIplHash(iplHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x57A197AD83F66BBF | Since: 1207
 */
export declare function removeMoveNetworkDef(): string;
/**
 * No comment provided
 *
 * Hash: 0xF20866829E1C81A2 | Since: 1207
 */
export declare function removeNamedPtfxAsset(fxNameHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x042F9049EA419E86 | Since: 1207
 */
export declare function removePtfxAsset(): void;
/**
 * No comment provided
 *
 * Hash: 0x83A8D71650D1894F | Since: 1311
 */
export declare function requestAdditionalCollisionAtCoord(pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xA862A2AD321F94B4 | Since: 1207
 */
export declare function requestAnimDict(): string;
/**
 * No comment provided
 *
 * Hash: 0xEF7611B57A820126 | Since: 1207
 */
export declare function requestClipSet(): string;
/**
 * No comment provided
 *
 * Hash: 0x0A3720F162A033C9 | Since: 1207
 */
export declare function requestCollisionAtCoord(pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xF1767BE37F661551 | Since: 1207
 */
export declare function requestCollisionForModel(model: number | string): void;
/**
 * Old name: _REQUEST_IMAP_2
 *
 * Hash: 0x9E211A378F95C97C | Since: 1207
 */
export declare function requestIplByHash(iplHash: number | string): void;
/**
 * Old name: _REQUEST_IMAP
 *
 * Hash: 0x59767C5A7A9AE6DA | Since: 1207
 */
export declare function requestIplHash(iplHash: number | string): void;
/**
 * Request a model to be loaded into memory.
 *
 * Hash: 0xFA28FE3A6246FC30 | Since: 1207
 */
export declare function requestModel(model: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x2B6529C54D29037A | Since: 1207
 */
export declare function requestMoveNetworkDef(): string;
/**
 * No comment provided
 *
 * Hash: 0xF2B2353BBC0D4E8F | Since: 1207
 */
export declare function requestNamedPtfxAsset(fxNameHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x001FF43843028E0C | Since: 1207
 */
export declare function requestPtfxAsset(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x19ABCC581D28E6F9 | Since: 1207
 */
export declare function setAllMapdataCulled(): void;
/**
 * It seems to make the entity's coords mark the point from which LOD-distances are measured. In my testing, setting a vehicle as the focus entity and moving that vehicle more than 300 distance units away from the player will make the level of detail around the player go down drastically (shadows disappear, textures go extremely low res, etc). The player seems to be the default focus entity.
 *
 * Hash: 0x955AEDD58F4BD309 | Since: 1207
 */
export declare function setFocusEntity(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x25F6EF88664540E2 | Since: 1207
 */
export declare function setFocusPosAndVel(pos: Vector3, offsetX: number, offsetY: number, offsetZ: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB3BC8250F4FE8B63 | Since: 1207
 */
export declare function setGamePausesFor(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xB88B905AFA35CB4D | Since: 1207
 */
export declare function setHdArea(pos: Vector3, radius: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3CACC83F6FED837C | Since: 1207
 */
export declare function setMapdatacullboxEnabled(toggle: boolean): string;
/**
 * Marks the model as no longer needed.
 *
 * Hash: 0x4AD96EF928BD4F9A | Since: 1207
 */
export declare function setModelAsNoLongerNeeded(model: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x2F9AC754FE179D58 | Since: 1207
 */
export declare function setPopulationBudgetMultiplier(fBudgetMultiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA03A6812529AD9C8 | Since: 1207
 */
export declare function setSceneTracksCamPosThisFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0x7C907E8A725E5FD2 | Since: 1207
 */
export declare function setSrlLongJumpMode(): void;
/**
 * No comment provided
 *
 * Hash: 0xD346248C1DCE0D76 | Since: 1207
 */
export declare function setSrlReadaheadTimes(): void;
/**
 * No comment provided
 *
 * Hash: 0x18231AEF458BCFF2 | Since: 1207
 */
export declare function setSrlTime(): void;
/**
 * _SET_E* or _SET_F*
 *
 * Hash: 0x032A14D082A9B269 | Since: 1207
 */
export declare function _0x032A14D082A9B269(p0: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x05DD384F39DE1C8C | Since: 1207
 */
export declare function _0x05DD384F39DE1C8C(): any;
/**
 * No comment provided
 *
 * Hash: 0x071769BCB24379E5 | Since: 1207
 */
export declare function _0x071769BCB24379E5(): any;
/**
 * No comment provided
 *
 * Hash: 0x07559B29950301FF | Since: 1207
 */
export declare function _0x07559B29950301FF(): void;
/**
 * No comment provided
 *
 * Hash: 0x09FBF15D73EFC900 | Since: 1207
 */
export declare function _0x09FBF15D73EFC900(): void;
/**
 * No comment provided
 *
 * Hash: 0x198B85CC3C7A4593 | Since: 1207
 */
export declare function _0x198B85CC3C7A4593(): any;
/**
 * No comment provided
 *
 * Hash: 0x27AF48C62B281341 | Since: 1207
 */
export declare function _0x27AF48C62B281341(): any;
/**
 * No comment provided
 *
 * Hash: 0x2A6D1DAAB9EBB262 | Since: 1207
 */
export declare function _0x2A6D1DAAB9EBB262(): any;
/**
 * No comment provided
 *
 * Hash: 0x2E24C27B112B5B12 | Since: 1311
 */
export declare function _0x2E24C27B112B5B12(): void;
/**
 * No comment provided
 *
 * Hash: 0x2F4D53023F826FF0 | Since: 1207
 */
export declare function _0x2F4D53023F826FF0(): any;
/**
 * No comment provided
 *
 * Hash: 0x5288B7F0690F7C1F | Since: 1207
 */
export declare function _0x5288B7F0690F7C1F(): any;
/**
 * No comment provided
 *
 * Hash: 0x53764309C4618087 | Since: 1207
 */
export declare function _0x53764309C4618087(): any;
/**
 * No comment provided
 *
 * Hash: 0x5D5E2102B174B8D2 | Since: 1207
 */
export declare function _0x5D5E2102B174B8D2(): any;
/**
 * No comment provided
 *
 * Hash: 0x62D5F0588915B277 | Since: 1207
 */
export declare function _0x62D5F0588915B277(): void;
/**
 * No comment provided
 *
 * Hash: 0x6A6E79FBE8678C98 | Since: 1207
 */
export declare function _0x6A6E79FBE8678C98(): void;
/**
 * No comment provided
 *
 * Hash: 0x7B8C2B846C05E5AD | Since: 1207
 */
export declare function _0x7B8C2B846C05E5AD(): any;
/**
 * No comment provided
 *
 * Hash: 0x80B3E0597366ADF1 | Since: 1207
 */
export declare function _0x80B3E0597366ADF1(): void;
/**
 * No comment provided
 *
 * Hash: 0x8D56BDA343D9519F | Since: 1207
 */
export declare function _0x8D56BDA343D9519F(): any;
/**
 * No comment provided
 *
 * Hash: 0x99F92061EFE908BA | Since: 1207
 */
export declare function _0x99F92061EFE908BA(): any;
/**
 * No comment provided
 *
 * Hash: 0xAE00387E53B1E9FC | Since: 1207
 */
export declare function _0xAE00387E53B1E9FC(): void;
/**
 * No comment provided
 *
 * Hash: 0xAFA87A7D41EE346A | Since: 1207
 */
export declare function _0xAFA87A7D41EE346A(): void;
/**
 * Sorts some unknown data.
 *
 * Likely SORT_*
 *
 * Hash: 0xB9B9E47EDB9D63DB | Since: 1207
 */
export declare function _0xB9B9E47EDB9D63DB(): void;
/**
 * No comment provided
 *
 * Hash: 0xBE8DAA9D8D01DA6A | Since: 1207
 */
export declare function _0xBE8DAA9D8D01DA6A(): void;
/**
 * No comment provided
 *
 * Hash: 0xCC61D8D6C19D9F14 | Since: 1207
 */
export declare function _0xCC61D8D6C19D9F14(): void;
/**
 * No comment provided
 *
 * Hash: 0xD6E39DC5D46DF4AB | Since: 1207
 */
export declare function _0xD6E39DC5D46DF4AB(): any;
/**
 * No comment provided
 *
 * Hash: 0xD840C130D7AACFA5 | Since: 1207
 */
export declare function _0xD840C130D7AACFA5(): void;
/**
 * No comment provided
 *
 * Hash: 0xD9F2FF4AF394D926 | Since: 1207
 */
export declare function _0xD9F2FF4AF394D926(): void;
/**
 * No comment provided
 *
 * Hash: 0xDA7FDEFF4DE86839 | Since: 1207
 */
export declare function _0xDA7FDEFF4DE86839(): any;
/**
 * No comment provided
 *
 * Hash: 0xDABFE48BA0D457AA | Since: 1207
 */
export declare function _0xDABFE48BA0D457AA(): any;
/**
 * No comment provided
 *
 * Hash: 0xDEEE1F265B7ECEF5 | Since: 1311
 */
export declare function _0xDEEE1F265B7ECEF5(): void;
/**
 * No comment provided
 *
 * Hash: 0xE5B76E5B56CD77DD | Since: 1207
 */
export declare function _0xE5B76E5B56CD77DD(): any;
/**
 * No comment provided
 *
 * Hash: 0xEF1A8A484118735E | Since: 1207
 */
export declare function _0xEF1A8A484118735E(): void;
/**
 * No comment provided
 *
 * Hash: 0xF01D21DF39554115 | Since: 1207
 */
export declare function _0xF01D21DF39554115(): void;
/**
 * No comment provided
 *
 * Hash: 0xF11D7CB962FCD747 | Since: 1207
 */
export declare function _0xF11D7CB962FCD747(): void;
/**
 * Outputs IPL position and radius (previously wrongly named heading)
 * https://github.com/femga/rdr3_discoveries/blob/master/imaps/imaps_with_coords_and_heading.lua
 *
 * Hash: 0x9C77964B0E07B633 | Since: 1207
 */
export declare function getIplBoundingSphere(iplHash: number | string): [boolean, Vector3, number];
/**
 * No comment provided
 *
 * Hash: 0x85B8F04555AB49B8 | Since: 1207
 */
export declare function hasClipSetLoaded2(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xDA8B2EAF29E872E2 | Since: 1207
 */
export declare function hasCollisionLoadedAtCoord(pos: Vector3): boolean;
/**
 * returns 1 if the scenario type for ped is loaded using the id returned by `_REQUEST_SCENARIO_TYPE_FOR_PED` or false
 *
 * Hash: 0xA0AE7653E8181725 | Since: 1207
 */
export declare function hasScenarioTypeForPedLoaded(scenarioTypeId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9427C94D2E4094A4 | Since: 1207
 */
export declare function hasScenarioTypeLoaded(scenarioType: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x274EE1B90CFA669E | Since: 1207
 */
export declare function isModelAnObject(model: number | string): boolean;
/**
 * Returns true if IPL is streamed in (?)
 *
 * Hash: 0x73B40D97D7BAAD77 | Since: 1207
 */
export declare function isPositionInsideIplExtents(iplHash: number | string, pos: Vector3): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9F348DE670423460 | Since: 1207
 */
export declare function removeClipSet2(): string;
/**
 * No comment provided
 *
 * Hash: 0x4EDDD9E9CA5AF985 | Since: 1207
 */
export declare function removeScenarioAsset(scenarioType: number | string): any;
/**
 * removes the requested scenario type for ped using the id returned by `_REQUEST_SCENARIO_TYPE_FOR_PED`
 *
 * Hash: 0x66BC28E50E85270E | Since: 1207
 */
export declare function removeScenarioTypeForPed(scenarioTypeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x03DDBF2D73799F9E | Since: 1207
 */
export declare function requestClipSet2(): string;
/**
 * No comment provided
 *
 * Hash: 0xAC37644A538F7524 | Since: 1207
 */
export declare function requestClipSetByHash(clipSetHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xA8432A14D4DC2101 | Since: 1207
 */
export declare function requestMetadataAtCoord(pos: Vector3): void;
/**
 * p1 seems to be some kind of flag? p2 can be 0 or entity model accepts hash joaat("a_c_bear_01") or with GetEntityModel(entity) p3 can be 0 or pass the conditional anim or using _GET_ACTIVE_DYNAMIC_SCENARIO
 *
 * Hash: 0x19A6BE7D9C6884D3 | Since: 1207
 */
export declare function requestScenarioType(scenarioType: number | string, entityModel: number | string, conditionalAnim: number | string): number;
/**
 * requests a scenario type just like _REQUEST_SCENARIO_TYPE but for a specifc ped p2 is a flag unknown
 *
 * Hash: 0xB223249B7798EEED | Since: 1207
 */
export declare function requestScenarioTypeForPed(ped: number | IPed, scenarioType: number | string, flag: number, consitionalAnim: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x74E2261D2A66849A | Since: 1207
 */
export declare function setGuarmaWorldhorizonActive(toggle: boolean): void;
