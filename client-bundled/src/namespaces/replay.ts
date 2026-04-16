import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * Hardcoded to return true.
 * 
 * Hash: 0xCEEC64BD27A59312 | Since: 1207 | API-Set: unknown
 */
export function closeVideoEditor(): boolean {
    return CloseVideoEditor(undefined);
}

/**
 * Hardcoded to return false.
 * 
 * Hash: 0x9EEB007317FA3B9C | Since: 1207 | API-Set: unknown
 */
export function isVideoEditorRunning(): boolean {
    return IsVideoEditorRunning();
}

/**
 * Hardcoded to return true.
 * 
 * Hash: 0xB3F2829907403C13 | Since: 1207 | API-Set: unknown
 */
export function openVideoEditor(): boolean {
    return OpenVideoEditor();
}

/**
 * Hardcoded to return false.
 * 
 * Old name: _IS_INTERIOR_RENDERING_DISABLED
 * 
 * Hash: 0x0F838D47DE58EDB2 | Since: 1207 | API-Set: unknown
 */
export function systemHasRequestedAScriptCleanup(): boolean {
    return ReplaySystemHasRequestedAScriptCleanup();
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x57C6525034E76EB0 | Since: 1207 | API-Set: unknown
 */
export function setScriptsHaveCleanedUpForSystem(): void {
    SetScriptsHaveCleanedUpForReplaySystem();
}

