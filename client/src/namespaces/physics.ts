import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * Returns all rope handles. The data returned adheres to the following layout:
 * 
 * ```
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 * 
 * Hash: 0x760A2D67
 */
export function getAllRopes(): number {
    return GetAllRopes();
}

/**
 * ```cpp
 * enum eRopeFlags
 * {
 * DrawShadowEnabled = 2,
 * Breakable = 4,
 * RopeUnwindingFront = 8,
 * RopeWinding = 32
 * }
 * ```
 * 
 * Hash: 0xA80FFE99
 */
export function getRopeFlags(rope: number): number {
    return GetRopeFlags(rope);
}

/**
 * No comment provided
 * 
 * Hash: 0x66D70EA3
 */
export function getRopeLengthChangeRate(rope: number): number {
    return GetRopeLengthChangeRate(rope);
}

/**
 * No comment provided
 * 
 * Hash: 0xF341E6CA
 */
export function getRopeTimeMultiplier(rope: number): number {
    return GetRopeTimeMultiplier(rope);
}

/**
 * No comment provided
 * 
 * Hash: 0x2AB2E0F6
 */
export function getRopeUpdateOrder(rope: number): number {
    return GetRopeUpdateOrder(rope);
}

/**
 * Registers a custom rope data with the game. For guidance on what these values should be use common:/data/ropedata.xml as a reference.
 * Returns a rope type which can be passed into [ADD_ROPE](#\_0xE832D760399EB220) to use a custom rope design.
 * Once a rope data is registered it can be used indefinitely and you should take caution not too register too many as to exceed the games limit.
 * 
 * Hash: 0xF213AE8D
 */
export function registerRopeData(numSections: number, radius: number, diffuseTextureName: string, normalMapName: string, distanceMappingScale: number, uvScaleX: number, uvScaleY: number, specularFresnel: number, specularFalloff: number, specularIntensity: number, bumpiness: number, color: number): number {
    return RegisterRopeData(numSections, radius, diffuseTextureName, normalMapName, distanceMappingScale, uvScaleX, uvScaleY, specularFresnel, specularFalloff, specularIntensity, bumpiness, color);
}

/**
 * Resets parameters which is used by the game for checking is ped needs to fly through windscreen after a crash to default values.
 * 
 * Hash: 0x6D712937
 */
export function resetFlyThroughWindscreenParams(): void {
    ResetFlyThroughWindscreenParams();
}

/**
 * Sets some in-game parameters which is used for checks is ped needs to fly through windscreen after a crash.
 * 
 * Hash: 0x4D3118ED
 */
export function setFlyThroughWindscreenParams(vehMinSpeed: number, unkMinSpeed: number, unkModifier: number, minDamage: number): boolean {
    return SetFlyThroughWindscreenParams(vehMinSpeed, unkMinSpeed, unkModifier, minDamage);
}

/**
 * Toggles whether the usage of [ADD_ROPE](#\_0xE832D760399EB220) should create an underlying CNetworkRopeWorldStateData. By default this is set to false.
 * 
 * Hash: 0xE62FC73
 */
export function setRopesCreateNetworkWorldState(shouldCreate: boolean): void {
    SetRopesCreateNetworkWorldState(shouldCreate);
}

/**
 * Set's the ropes length change rate, which is the speed that rope should wind if started.
 * 
 * Hash: 0x69B680A7
 */
export function setRopeLengthChangeRate(rope: number, lengthChangeRate: number): void {
    SetRopeLengthChangeRate(rope, lengthChangeRate);
}

