/**
 * No comment provided
 *
 * Hash: 0xF7C180F57F85D0B8 | Since: 1207
 */
export function canRequestTransition() {
    return UiStateMachineCanRequestTransition(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4C6F2C4B7A03A266 | Since: 1207
 */
export function create() {
    return UiStateMachineCreate(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4EB122210A90E2D8 | Since: 1207
 */
export function destroy() {
    UiStateMachineDestroy(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2738D68D2B4E09E7 | Since: 1207
 */
export function destroyAndClear() {
    return UiStateMachineDestroyAndClear();
}
/**
 * No comment provided
 *
 * Hash: 0x5D15569C0FEBF757 | Since: 1207
 */
export function exists() {
    return UiStateMachineExists(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6B9FE4F0BA521A19 | Since: 1207
 */
export function requestExit() {
    UiStateMachineRequestExit(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7EA9C3547E80350E | Since: 1207
 */
export function requestTransition() {
    return UiStateMachineRequestTransition(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3B7519720C9DCB45 | Since: 1207
 */
export function uiflowblockEnter() {
    return UiflowblockEnter(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x10A93C057B6BD944 | Since: 1207
 */
export function uiflowblockIsLoaded() {
    return UiflowblockIsLoaded(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF320A77DD5F781DF | Since: 1207
 */
export function uiflowblockRelease() {
    UiflowblockRelease(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC0081B34E395CE48 | Since: 1207
 */
export function uiflowblockRequest() {
    return UiflowblockRequest(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x11E73195E735B25B | Since: 1207
 */
export function isExited(p0) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    return UiStateMachineIsExited(p0);
}
