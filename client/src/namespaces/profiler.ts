import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * Scope entry for profiler.
 * 
 * Hash: 0xC795A4A9
 */
export function enterScope(scopeName: string): void {
    ProfilerEnterScope(scopeName);
}

/**
 * Scope exit for profiler.
 * 
 * Hash: 0xB39CA35C
 */
export function exitScope(): void {
    ProfilerExitScope();
}

/**
 * Returns true if the profiler is active.
 * 
 * Hash: 0xF8B7D7BB
 */
export function isRecording(): boolean {
    return ProfilerIsRecording();
}

