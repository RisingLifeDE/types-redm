import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0xF7C180F57F85D0B8 | Since: 1207
 */
export function canRequestTransition(): any {
    return UiStateMachineCanRequestTransition(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4C6F2C4B7A03A266 | Since: 1207
 */
export function create(): any {
    return UiStateMachineCreate(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4EB122210A90E2D8 | Since: 1207
 */
export function destroy(): void {
    UiStateMachineDestroy(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2738D68D2B4E09E7 | Since: 1207
 */
export function destroyAndClear(): any {
    return UiStateMachineDestroyAndClear();
}

/**
 * No comment provided
 * 
 * Hash: 0x5D15569C0FEBF757 | Since: 1207
 */
export function exists(): any {
    return UiStateMachineExists(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6B9FE4F0BA521A19 | Since: 1207
 */
export function requestExit(): void {
    UiStateMachineRequestExit(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7EA9C3547E80350E | Since: 1207
 */
export function requestTransition(): any {
    return UiStateMachineRequestTransition(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3B7519720C9DCB45 | Since: 1207
 */
export function uiflowblockEnter(): any {
    return UiflowblockEnter(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x10A93C057B6BD944 | Since: 1207
 */
export function uiflowblockIsLoaded(): any {
    return UiflowblockIsLoaded(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF320A77DD5F781DF | Since: 1207
 */
export function uiflowblockRelease(): void {
    UiflowblockRelease(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC0081B34E395CE48 | Since: 1207
 */
export function uiflowblockRequest(): any {
    return UiflowblockRequest(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x11E73195E735B25B | Since: 1207
 */
export function isExited(p0: number | string): boolean {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    return UiStateMachineIsExited(p0);
}

