import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * Scope entry for profiler.
 * 
 * Hash: 0xC795A4A9 | Since: unknown | API-Set: shared
 */
export function enterScope(scopeName: string): void {
    ProfilerEnterScope(scopeName);
}

/**
 * Scope exit for profiler.
 * 
 * Hash: 0xB39CA35C | Since: unknown | API-Set: shared
 */
export function exitScope(): void {
    ProfilerExitScope();
}

/**
 * Returns true if the profiler is active.
 * 
 * Hash: 0xF8B7D7BB | Since: unknown | API-Set: shared
 */
export function isRecording(): boolean {
    return ProfilerIsRecording();
}

