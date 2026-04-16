/**
 * Returns all rope handles. The data returned adheres to the following layout:
 *
 * ```
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 *
 * Hash: 0x760A2D67
 */
export declare function getAllRopes(): number;
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
export declare function getRopeFlags(rope: number): number;
/**
 * No comment provided
 *
 * Hash: 0x66D70EA3
 */
export declare function getRopeLengthChangeRate(rope: number): number;
/**
 * No comment provided
 *
 * Hash: 0xF341E6CA
 */
export declare function getRopeTimeMultiplier(rope: number): number;
/**
 * No comment provided
 *
 * Hash: 0x2AB2E0F6
 */
export declare function getRopeUpdateOrder(rope: number): number;
/**
 * Registers a custom rope data with the game. For guidance on what these values should be use common:/data/ropedata.xml as a reference.
 * Returns a rope type which can be passed into [ADD_ROPE](#\_0xE832D760399EB220) to use a custom rope design.
 * Once a rope data is registered it can be used indefinitely and you should take caution not too register too many as to exceed the games limit.
 *
 * Hash: 0xF213AE8D
 */
export declare function registerRopeData(numSections: number, radius: number, diffuseTextureName: string, normalMapName: string, distanceMappingScale: number, uvScaleX: number, uvScaleY: number, specularFresnel: number, specularFalloff: number, specularIntensity: number, bumpiness: number, color: number): number;
/**
 * Resets parameters which is used by the game for checking is ped needs to fly through windscreen after a crash to default values.
 *
 * Hash: 0x6D712937
 */
export declare function resetFlyThroughWindscreenParams(): void;
/**
 * Sets some in-game parameters which is used for checks is ped needs to fly through windscreen after a crash.
 *
 * Hash: 0x4D3118ED
 */
export declare function setFlyThroughWindscreenParams(vehMinSpeed: number, unkMinSpeed: number, unkModifier: number, minDamage: number): boolean;
/**
 * Toggles whether the usage of [ADD_ROPE](#\_0xE832D760399EB220) should create an underlying CNetworkRopeWorldStateData. By default this is set to false.
 *
 * Hash: 0xE62FC73
 */
export declare function setRopesCreateNetworkWorldState(shouldCreate: boolean): void;
/**
 * Set's the ropes length change rate, which is the speed that rope should wind if started.
 *
 * Hash: 0x69B680A7
 */
export declare function setRopeLengthChangeRate(rope: number, lengthChangeRate: number): void;
