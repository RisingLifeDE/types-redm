import { IEntity, IPed } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x0360710033BE60D9 | Since: 1207
 */
export function beginSrl() {
    BeginSrl();
}
/**
 * No comment provided
 *
 * Hash: 0x86CCAF7CE493EFBE | Since: 1207
 */
export function clearFocus() {
    ClearFocus();
}
/**
 * No comment provided
 *
 * Hash: 0xD83B22434E52728D | Since: 1207
 */
export function clearHdArea() {
    ClearHdArea();
}
/**
 * No comment provided
 *
 * Hash: 0x537F44CB0D7F150D | Since: 1207
 */
export function doesAnimDictExist() {
    return DoesAnimDictExist();
}
/**
 * No comment provided
 *
 * Hash: 0x1CE71FB33CA079FE | Since: 1207
 */
export function endSrl() {
    EndSrl();
}
/**
 * No comment provided
 *
 * Hash: 0x30CCCC4D88E654CA | Since: 1207
 */
export function getNumberOfRequests() {
    return GetNumberOfStreamingRequests();
}
/**
 * No comment provided
 *
 * Hash: 0x8A3945405B31048F | Since: 1207
 */
export function getPopulationBudgetMultiplier() {
    return GetPopulationBudgetMultiplier();
}
/**
 * No comment provided
 *
 * Hash: 0x27FF6FE8009B40CA | Since: 1207
 */
export function hasAnimDictLoaded() {
    return HasAnimDictLoaded();
}
/**
 * Alias for HAS_ANIM_SET_LOADED.
 *
 * Hash: 0x1F23D6B6DA1CC3B2 | Since: 1207
 */
export function hasClipSetLoaded() {
    return HasClipSetLoaded();
}
/**
 * No comment provided
 *
 * Hash: 0x210A79C9EC89778F | Since: 1207
 */
export function hasCollisionForModelLoaded(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return HasCollisionForModelLoaded(model);
}
/**
 * Checks if the specified model has loaded into memory.
 *
 * Hash: 0x1283B8B89DD5D1B6 | Since: 1207
 */
export function hasModelLoaded(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return HasModelLoaded(model);
}
/**
 * No comment provided
 *
 * Hash: 0x2C04D89A0FB4E244 | Since: 1207
 */
export function hasMoveNetworkDefLoaded() {
    return HasMoveNetworkDefLoaded();
}
/**
 * No comment provided
 *
 * Hash: 0x65BB72F29138F5D6 | Since: 1207
 */
export function hasNamedPtfxAssetLoaded(fxNameHash) {
    if (typeof fxNameHash === 'string')
        fxNameHash = GetHashKey(fxNameHash);
    return HasNamedPtfxAssetLoaded(fxNameHash);
}
/**
 * No comment provided
 *
 * Hash: 0x13A3F30A9ED0BC31 | Since: 1207
 */
export function hasPtfxAssetLoaded() {
    return HasPtfxAssetLoaded();
}
/**
 * No comment provided
 *
 * Hash: 0x31108BB5715D035F | Since: 1207
 */
export function iplGroupSwapCancel() {
    IplGroupSwapCancel();
}
/**
 * No comment provided
 *
 * Hash: 0x040EE319EFD1D3B5 | Since: 1207
 */
export function iplGroupSwapFinish() {
    IplGroupSwapFinish();
}
/**
 * No comment provided
 *
 * Hash: 0xFC464598F6EE97B0 | Since: 1207
 */
export function iplGroupSwapIsActive() {
    return IplGroupSwapIsActive();
}
/**
 * No comment provided
 *
 * Hash: 0xC2C05DEFE85A0B64 | Since: 1207
 */
export function iplGroupSwapIsReady() {
    return IplGroupSwapIsReady();
}
/**
 * No comment provided
 *
 * Hash: 0x20D504994FDC4412 | Since: 1207
 */
export function iplGroupSwapStart() {
    return IplGroupSwapStart();
}
/**
 * No comment provided
 *
 * Hash: 0xF87DE697E9A06EC6 | Since: 1207
 */
export function isEntityFocus(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityFocus(_entity);
}
/**
 * Old name: _IS_IMAP_ACTIVE_2
 *
 * Hash: 0x93AC1B91CB6D9913 | Since: 1207
 */
export function isIplActiveByHash(iplHash) {
    if (typeof iplHash === 'string')
        iplHash = GetHashKey(iplHash);
    return IsIplActiveByHash(iplHash);
}
/**
 * Old name: _IS_IMAP_ACTIVE
 *
 * Hash: 0xD779B9B910BD3B7C | Since: 1207
 */
export function isIplActiveHash(iplHash) {
    if (typeof iplHash === 'string')
        iplHash = GetHashKey(iplHash);
    return IsIplActiveHash(iplHash);
}
/**
 * No comment provided
 *
 * Hash: 0xCF45DF50C7775F2A | Since: 1207
 */
export function isLoadSceneActive() {
    return IsLoadSceneActive();
}
/**
 * No comment provided
 *
 * Hash: 0x0909F71B5C070797 | Since: 1207
 */
export function isLoadSceneLoaded() {
    return IsLoadSceneLoaded();
}
/**
 * No comment provided
 *
 * Hash: 0xC3F09DE9D6D17DDA | Since: 1207
 */
export function isModelAPed(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return IsModelAPed(model);
}
/**
 * Returns whether the specified model represents a vehicle.
 *
 * Hash: 0x354F62672DE7DB0A | Since: 1207
 */
export function isModelAVehicle(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return IsModelAVehicle(model);
}
/**
 * Returns whether the specified model exists in the game.
 *
 * Hash: 0xD6F3B6D7716CFF8E | Since: 1207
 */
export function isModelInCdimage(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return IsModelInCdimage(model);
}
/**
 * Returns whether the specified model is valid
 *
 * Hash: 0x392C8D8E07B70EFC | Since: 1207
 */
export function isModelValid(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return IsModelValid(model);
}
/**
 * No comment provided
 *
 * Hash: 0xED20CB1F5297791D | Since: 1207
 */
export function isPlayerSwitchInProgress() {
    return IsPlayerSwitchInProgress();
}
/**
 * No comment provided
 *
 * Hash: 0x45BF3A6239A576B7 | Since: 1207
 */
export function isRenderedSceneLoaded() {
    return IsRenderedSceneLoaded();
}
/**
 * No comment provided
 *
 * Hash: 0x5C2C88512CF6DAFB | Since: 1207
 */
export function isSrlLoaded() {
    return IsSrlLoaded();
}
/**
 * No comment provided
 *
 * Hash: 0x387AD749E3B69B70 | Since: 1207
 */
export function loadSceneStart(pos, offsetX, offsetY, offsetZ, radius, controlFlags) {
    return LoadSceneStart(pos.x, pos.y, pos.z, offsetX, offsetY, offsetZ, radius, controlFlags);
}
/**
 * No comment provided
 *
 * Hash: 0x513F8AA5BF2F17CF | Since: 1207
 */
export function loadSceneStartSphere(pos, radius, controlFlags) {
    return LoadSceneStartSphere(pos.x, pos.y, pos.z, radius, controlFlags);
}
/**
 * No comment provided
 *
 * Hash: 0x5A8B01199C3E79C3 | Since: 1207
 */
export function loadSceneStop() {
    LoadSceneStop();
}
/**
 * No comment provided
 *
 * Hash: 0x354837E5A5BAA5AF | Since: 1207
 */
export function prefetchSrl() {
    return PrefetchSrl();
}
/**
 * No comment provided
 *
 * Hash: 0x4763145053A33D46 | Since: 1207
 */
export function removeAnimDict() {
    return RemoveAnimDict();
}
/**
 * Alias for REMOVE_ANIM_SET.
 *
 * Hash: 0x817FA1B1EE7CD6F0 | Since: 1207
 */
export function removeClipSet() {
    return RemoveClipSet();
}
/**
 * Old name: _REMOVE_IMAP_2
 *
 * Hash: 0x431E3AB760629B34 | Since: 1207
 */
export function removeIplByHash(iplHash) {
    if (typeof iplHash === 'string')
        iplHash = GetHashKey(iplHash);
    RemoveIplByHash(iplHash);
}
/**
 * Old name: _REMOVE_IMAP
 *
 * Hash: 0x5A3E5CF7B4014B96 | Since: 1207
 */
export function removeIplHash(iplHash) {
    if (typeof iplHash === 'string')
        iplHash = GetHashKey(iplHash);
    RemoveIplHash(iplHash);
}
/**
 * No comment provided
 *
 * Hash: 0x57A197AD83F66BBF | Since: 1207
 */
export function removeMoveNetworkDef() {
    return RemoveMoveNetworkDef();
}
/**
 * No comment provided
 *
 * Hash: 0xF20866829E1C81A2 | Since: 1207
 */
export function removeNamedPtfxAsset(fxNameHash) {
    if (typeof fxNameHash === 'string')
        fxNameHash = GetHashKey(fxNameHash);
    RemoveNamedPtfxAsset(fxNameHash);
}
/**
 * No comment provided
 *
 * Hash: 0x042F9049EA419E86 | Since: 1207
 */
export function removePtfxAsset() {
    RemovePtfxAsset();
}
/**
 * No comment provided
 *
 * Hash: 0x83A8D71650D1894F | Since: 1311
 */
export function requestAdditionalCollisionAtCoord(pos) {
    RequestAdditionalCollisionAtCoord(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xA862A2AD321F94B4 | Since: 1207
 */
export function requestAnimDict() {
    return RequestAnimDict();
}
/**
 * No comment provided
 *
 * Hash: 0xEF7611B57A820126 | Since: 1207
 */
export function requestClipSet() {
    return RequestClipSet();
}
/**
 * No comment provided
 *
 * Hash: 0x0A3720F162A033C9 | Since: 1207
 */
export function requestCollisionAtCoord(pos) {
    RequestCollisionAtCoord(pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xF1767BE37F661551 | Since: 1207
 */
export function requestCollisionForModel(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    RequestCollisionForModel(model);
}
/**
 * Old name: _REQUEST_IMAP_2
 *
 * Hash: 0x9E211A378F95C97C | Since: 1207
 */
export function requestIplByHash(iplHash) {
    if (typeof iplHash === 'string')
        iplHash = GetHashKey(iplHash);
    RequestIplByHash(iplHash);
}
/**
 * Old name: _REQUEST_IMAP
 *
 * Hash: 0x59767C5A7A9AE6DA | Since: 1207
 */
export function requestIplHash(iplHash) {
    if (typeof iplHash === 'string')
        iplHash = GetHashKey(iplHash);
    RequestIplHash(iplHash);
}
/**
 * Request a model to be loaded into memory.
 *
 * Hash: 0xFA28FE3A6246FC30 | Since: 1207
 */
export function requestModel(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    RequestModel(model, false);
}
/**
 * No comment provided
 *
 * Hash: 0x2B6529C54D29037A | Since: 1207
 */
export function requestMoveNetworkDef() {
    return RequestMoveNetworkDef();
}
/**
 * No comment provided
 *
 * Hash: 0xF2B2353BBC0D4E8F | Since: 1207
 */
export function requestNamedPtfxAsset(fxNameHash) {
    if (typeof fxNameHash === 'string')
        fxNameHash = GetHashKey(fxNameHash);
    RequestNamedPtfxAsset(fxNameHash);
}
/**
 * No comment provided
 *
 * Hash: 0x001FF43843028E0C | Since: 1207
 */
export function requestPtfxAsset() {
    RequestPtfxAsset();
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x19ABCC581D28E6F9 | Since: 1207
 */
export function setAllMapdataCulled() {
    SetAllMapdataCulled(undefined);
}
/**
 * It seems to make the entity's coords mark the point from which LOD-distances are measured. In my testing, setting a vehicle as the focus entity and moving that vehicle more than 300 distance units away from the player will make the level of detail around the player go down drastically (shadows disappear, textures go extremely low res, etc). The player seems to be the default focus entity.
 *
 * Hash: 0x955AEDD58F4BD309 | Since: 1207
 */
export function setFocusEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetFocusEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x25F6EF88664540E2 | Since: 1207
 */
export function setFocusPosAndVel(pos, offsetX, offsetY, offsetZ) {
    SetFocusPosAndVel(pos.x, pos.y, pos.z, offsetX, offsetY, offsetZ);
}
/**
 * No comment provided
 *
 * Hash: 0xB3BC8250F4FE8B63 | Since: 1207
 */
export function setGamePausesFor(toggle) {
    SetGamePausesForStreaming(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xB88B905AFA35CB4D | Since: 1207
 */
export function setHdArea(pos, radius) {
    SetHdArea(pos.x, pos.y, pos.z, radius);
}
/**
 * No comment provided
 *
 * Hash: 0x3CACC83F6FED837C | Since: 1207
 */
export function setMapdatacullboxEnabled(toggle) {
    return SetMapdatacullboxEnabled(toggle);
}
/**
 * Marks the model as no longer needed.
 *
 * Hash: 0x4AD96EF928BD4F9A | Since: 1207
 */
export function setModelAsNoLongerNeeded(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    SetModelAsNoLongerNeeded(model);
}
/**
 * No comment provided
 *
 * Hash: 0x2F9AC754FE179D58 | Since: 1207
 */
export function setPopulationBudgetMultiplier(fBudgetMultiplier) {
    SetPopulationBudgetMultiplier(fBudgetMultiplier);
}
/**
 * No comment provided
 *
 * Hash: 0xA03A6812529AD9C8 | Since: 1207
 */
export function setSceneTracksCamPosThisFrame() {
    SetSceneStreamingTracksCamPosThisFrame();
}
/**
 * No comment provided
 *
 * Hash: 0x7C907E8A725E5FD2 | Since: 1207
 */
export function setSrlLongJumpMode() {
    SetSrlLongJumpMode(false);
}
/**
 * No comment provided
 *
 * Hash: 0xD346248C1DCE0D76 | Since: 1207
 */
export function setSrlReadaheadTimes() {
    SetSrlReadaheadTimes(0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x18231AEF458BCFF2 | Since: 1207
 */
export function setSrlTime() {
    SetSrlTime(0);
}
/**
 * _SET_E* or _SET_F*
 *
 * Hash: 0x032A14D082A9B269 | Since: 1207
 */
export function _0x032A14D082A9B269(p0) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    Citizen.invokeNative('0x032A14D082A9B269', p0);
}
/**
 * No comment provided
 *
 * Hash: 0x05DD384F39DE1C8C | Since: 1207
 */
export function _0x05DD384F39DE1C8C() {
    return Citizen.invokeNative('0x05DD384F39DE1C8C', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x071769BCB24379E5 | Since: 1207
 */
export function _0x071769BCB24379E5() {
    return Citizen.invokeNative('0x071769BCB24379E5');
}
/**
 * No comment provided
 *
 * Hash: 0x07559B29950301FF | Since: 1207
 */
export function _0x07559B29950301FF() {
    Citizen.invokeNative('0x07559B29950301FF', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x09FBF15D73EFC900 | Since: 1207
 */
export function _0x09FBF15D73EFC900() {
    Citizen.invokeNative('0x09FBF15D73EFC900');
}
/**
 * No comment provided
 *
 * Hash: 0x198B85CC3C7A4593 | Since: 1207
 */
export function _0x198B85CC3C7A4593() {
    return Citizen.invokeNative('0x198B85CC3C7A4593', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x27AF48C62B281341 | Since: 1207
 */
export function _0x27AF48C62B281341() {
    return Citizen.invokeNative('0x27AF48C62B281341');
}
/**
 * No comment provided
 *
 * Hash: 0x2A6D1DAAB9EBB262 | Since: 1207
 */
export function _0x2A6D1DAAB9EBB262() {
    return Citizen.invokeNative('0x2A6D1DAAB9EBB262', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2E24C27B112B5B12 | Since: 1311
 */
export function _0x2E24C27B112B5B12() {
    Citizen.invokeNative('0x2E24C27B112B5B12', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2F4D53023F826FF0 | Since: 1207
 */
export function _0x2F4D53023F826FF0() {
    return Citizen.invokeNative('0x2F4D53023F826FF0');
}
/**
 * No comment provided
 *
 * Hash: 0x5288B7F0690F7C1F | Since: 1207
 */
export function _0x5288B7F0690F7C1F() {
    return Citizen.invokeNative('0x5288B7F0690F7C1F', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x53764309C4618087 | Since: 1207
 */
export function _0x53764309C4618087() {
    return Citizen.invokeNative('0x53764309C4618087', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5D5E2102B174B8D2 | Since: 1207
 */
export function _0x5D5E2102B174B8D2() {
    return Citizen.invokeNative('0x5D5E2102B174B8D2');
}
/**
 * No comment provided
 *
 * Hash: 0x62D5F0588915B277 | Since: 1207
 */
export function _0x62D5F0588915B277() {
    Citizen.invokeNative('0x62D5F0588915B277');
}
/**
 * No comment provided
 *
 * Hash: 0x6A6E79FBE8678C98 | Since: 1207
 */
export function _0x6A6E79FBE8678C98() {
    Citizen.invokeNative('0x6A6E79FBE8678C98');
}
/**
 * No comment provided
 *
 * Hash: 0x7B8C2B846C05E5AD | Since: 1207
 */
export function _0x7B8C2B846C05E5AD() {
    return Citizen.invokeNative('0x7B8C2B846C05E5AD');
}
/**
 * No comment provided
 *
 * Hash: 0x80B3E0597366ADF1 | Since: 1207
 */
export function _0x80B3E0597366ADF1() {
    Citizen.invokeNative('0x80B3E0597366ADF1');
}
/**
 * No comment provided
 *
 * Hash: 0x8D56BDA343D9519F | Since: 1207
 */
export function _0x8D56BDA343D9519F() {
    return Citizen.invokeNative('0x8D56BDA343D9519F', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x99F92061EFE908BA | Since: 1207
 */
export function _0x99F92061EFE908BA() {
    return Citizen.invokeNative('0x99F92061EFE908BA');
}
/**
 * No comment provided
 *
 * Hash: 0xAE00387E53B1E9FC | Since: 1207
 */
export function _0xAE00387E53B1E9FC() {
    Citizen.invokeNative('0xAE00387E53B1E9FC');
}
/**
 * No comment provided
 *
 * Hash: 0xAFA87A7D41EE346A | Since: 1207
 */
export function _0xAFA87A7D41EE346A() {
    Citizen.invokeNative('0xAFA87A7D41EE346A', undefined);
}
/**
 * Sorts some unknown data.
 *
 * Likely SORT_*
 *
 * Hash: 0xB9B9E47EDB9D63DB | Since: 1207
 */
export function _0xB9B9E47EDB9D63DB() {
    Citizen.invokeNative('0xB9B9E47EDB9D63DB');
}
/**
 * No comment provided
 *
 * Hash: 0xBE8DAA9D8D01DA6A | Since: 1207
 */
export function _0xBE8DAA9D8D01DA6A() {
    Citizen.invokeNative('0xBE8DAA9D8D01DA6A', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCC61D8D6C19D9F14 | Since: 1207
 */
export function _0xCC61D8D6C19D9F14() {
    Citizen.invokeNative('0xCC61D8D6C19D9F14', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD6E39DC5D46DF4AB | Since: 1207
 */
export function _0xD6E39DC5D46DF4AB() {
    return Citizen.invokeNative('0xD6E39DC5D46DF4AB', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD840C130D7AACFA5 | Since: 1207
 */
export function _0xD840C130D7AACFA5() {
    Citizen.invokeNative('0xD840C130D7AACFA5', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD9F2FF4AF394D926 | Since: 1207
 */
export function _0xD9F2FF4AF394D926() {
    Citizen.invokeNative('0xD9F2FF4AF394D926');
}
/**
 * No comment provided
 *
 * Hash: 0xDA7FDEFF4DE86839 | Since: 1207
 */
export function _0xDA7FDEFF4DE86839() {
    return Citizen.invokeNative('0xDA7FDEFF4DE86839');
}
/**
 * No comment provided
 *
 * Hash: 0xDABFE48BA0D457AA | Since: 1207
 */
export function _0xDABFE48BA0D457AA() {
    return Citizen.invokeNative('0xDABFE48BA0D457AA');
}
/**
 * No comment provided
 *
 * Hash: 0xDEEE1F265B7ECEF5 | Since: 1311
 */
export function _0xDEEE1F265B7ECEF5() {
    Citizen.invokeNative('0xDEEE1F265B7ECEF5');
}
/**
 * No comment provided
 *
 * Hash: 0xE5B76E5B56CD77DD | Since: 1207
 */
export function _0xE5B76E5B56CD77DD() {
    return Citizen.invokeNative('0xE5B76E5B56CD77DD');
}
/**
 * No comment provided
 *
 * Hash: 0xEF1A8A484118735E | Since: 1207
 */
export function _0xEF1A8A484118735E() {
    Citizen.invokeNative('0xEF1A8A484118735E');
}
/**
 * No comment provided
 *
 * Hash: 0xF01D21DF39554115 | Since: 1207
 */
export function _0xF01D21DF39554115() {
    Citizen.invokeNative('0xF01D21DF39554115', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF11D7CB962FCD747 | Since: 1207
 */
export function _0xF11D7CB962FCD747() {
    Citizen.invokeNative('0xF11D7CB962FCD747', undefined);
}
/**
 * Outputs IPL position and radius (previously wrongly named heading)
 * https://github.com/femga/rdr3_discoveries/blob/master/imaps/imaps_with_coords_and_heading.lua
 *
 * Hash: 0x9C77964B0E07B633 | Since: 1207
 */
export function getIplBoundingSphere(iplHash) {
    if (typeof iplHash === 'string')
        iplHash = GetHashKey(iplHash);
    return GetIplBoundingSphere(iplHash);
}
/**
 * No comment provided
 *
 * Hash: 0x85B8F04555AB49B8 | Since: 1207
 */
export function hasClipSetLoaded2() {
    return Citizen.invokeNative('0x85B8F04555AB49B8');
}
/**
 * No comment provided
 *
 * Hash: 0xDA8B2EAF29E872E2 | Since: 1207
 */
export function hasCollisionLoadedAtCoord(pos) {
    return HasCollisionLoadedAtCoord(pos.x, pos.y, pos.z);
}
/**
 * returns 1 if the scenario type for ped is loaded using the id returned by `_REQUEST_SCENARIO_TYPE_FOR_PED` or false
 *
 * Hash: 0xA0AE7653E8181725 | Since: 1207
 */
export function hasScenarioTypeForPedLoaded(scenarioTypeId) {
    return Citizen.invokeNative('0xA0AE7653E8181725', scenarioTypeId);
}
/**
 * No comment provided
 *
 * Hash: 0x9427C94D2E4094A4 | Since: 1207
 */
export function hasScenarioTypeLoaded(scenarioType) {
    if (typeof scenarioType === 'string')
        scenarioType = GetHashKey(scenarioType);
    return HasScenarioTypeLoaded(scenarioType, false);
}
/**
 * No comment provided
 *
 * Hash: 0x274EE1B90CFA669E | Since: 1207
 */
export function isModelAnObject(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return IsModelAnObject(model);
}
/**
 * Returns true if IPL is streamed in (?)
 *
 * Hash: 0x73B40D97D7BAAD77 | Since: 1207
 */
export function isPositionInsideIplExtents(iplHash, pos) {
    if (typeof iplHash === 'string')
        iplHash = GetHashKey(iplHash);
    return IsPositionInsideIplStreamingExtents(iplHash, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x9F348DE670423460 | Since: 1207
 */
export function removeClipSet2() {
    return Citizen.invokeNative('0x9F348DE670423460');
}
/**
 * No comment provided
 *
 * Hash: 0x4EDDD9E9CA5AF985 | Since: 1207
 */
export function removeScenarioAsset(scenarioType) {
    if (typeof scenarioType === 'string')
        scenarioType = GetHashKey(scenarioType);
    return RemoveScenarioAsset(scenarioType);
}
/**
 * removes the requested scenario type for ped using the id returned by `_REQUEST_SCENARIO_TYPE_FOR_PED`
 *
 * Hash: 0x66BC28E50E85270E | Since: 1207
 */
export function removeScenarioTypeForPed(scenarioTypeId) {
    Citizen.invokeNative('0x66BC28E50E85270E', scenarioTypeId);
}
/**
 * No comment provided
 *
 * Hash: 0x03DDBF2D73799F9E | Since: 1207
 */
export function requestClipSet2() {
    return Citizen.invokeNative('0x03DDBF2D73799F9E');
}
/**
 * No comment provided
 *
 * Hash: 0xAC37644A538F7524 | Since: 1207
 */
export function requestClipSetByHash(clipSetHash) {
    if (typeof clipSetHash === 'string')
        clipSetHash = GetHashKey(clipSetHash);
    RequestClipSetByHash(clipSetHash);
}
/**
 * No comment provided
 *
 * Hash: 0xA8432A14D4DC2101 | Since: 1207
 */
export function requestMetadataAtCoord(pos) {
    RequestMetadataAtCoord(pos.x, pos.y, pos.z);
}
/**
 * p1 seems to be some kind of flag? p2 can be 0 or entity model accepts hash joaat("a_c_bear_01") or with GetEntityModel(entity) p3 can be 0 or pass the conditional anim or using _GET_ACTIVE_DYNAMIC_SCENARIO
 *
 * Hash: 0x19A6BE7D9C6884D3 | Since: 1207
 */
export function requestScenarioType(scenarioType, entityModel, conditionalAnim) {
    if (typeof scenarioType === 'string')
        scenarioType = GetHashKey(scenarioType);
    if (typeof entityModel === 'string')
        entityModel = GetHashKey(entityModel);
    if (typeof conditionalAnim === 'string')
        conditionalAnim = GetHashKey(conditionalAnim);
    return RequestScenarioType(scenarioType, 0, entityModel, conditionalAnim);
}
/**
 * requests a scenario type just like _REQUEST_SCENARIO_TYPE but for a specifc ped p2 is a flag unknown
 *
 * Hash: 0xB223249B7798EEED | Since: 1207
 */
export function requestScenarioTypeForPed(ped, scenarioType, flag, consitionalAnim) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof scenarioType === 'string')
        scenarioType = GetHashKey(scenarioType);
    if (typeof consitionalAnim === 'string')
        consitionalAnim = GetHashKey(consitionalAnim);
    return Citizen.invokeNative('0xB223249B7798EEED', _ped, scenarioType, flag, consitionalAnim);
}
/**
 * No comment provided
 *
 * Hash: 0x74E2261D2A66849A | Since: 1207
 */
export function setGuarmaWorldhorizonActive(toggle) {
    SetGuarmaWorldhorizonActive(toggle);
}
