import { Vector3, IEntity, IPed, IObject } from '@risinglife/redm-shared';
/**
 * Returns all rope handles. The data returned adheres to the following layout:
 *
 * ```
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 *
 * Hash: 0x760A2D67 | Since: unknown | API-Set: client
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
 * Hash: 0xA80FFE99 | Since: unknown | API-Set: client
 */
export declare function getRopeFlags(rope: number): number;
/**
 * No comment provided
 *
 * Hash: 0x66D70EA3 | Since: unknown | API-Set: client
 */
export declare function getRopeLengthChangeRate(rope: number): number;
/**
 * No comment provided
 *
 * Hash: 0xF341E6CA | Since: unknown | API-Set: client
 */
export declare function getRopeTimeMultiplier(rope: number): number;
/**
 * No comment provided
 *
 * Hash: 0x2AB2E0F6 | Since: unknown | API-Set: client
 */
export declare function getRopeUpdateOrder(rope: number): number;
/**
 * Registers a custom rope data with the game. For guidance on what these values should be use common:/data/ropedata.xml as a reference.
 * Returns a rope type which can be passed into [ADD_ROPE](#\_0xE832D760399EB220) to use a custom rope design.
 * Once a rope data is registered it can be used indefinitely and you should take caution not too register too many as to exceed the games limit.
 *
 * Hash: 0xF213AE8D | Since: unknown | API-Set: client
 */
export declare function registerRopeData(numSections: number, radius: number, diffuseTextureName: string, normalMapName: string, distanceMappingScale: number, uvScaleX: number, uvScaleY: number, specularFresnel: number, specularFalloff: number, specularIntensity: number, bumpiness: number, color: number): number;
/**
 * Resets parameters which is used by the game for checking is ped needs to fly through windscreen after a crash to default values.
 *
 * Hash: 0x6D712937 | Since: unknown | API-Set: client
 */
export declare function resetFlyThroughWindscreenParams(): void;
/**
 * Sets some in-game parameters which is used for checks is ped needs to fly through windscreen after a crash.
 *
 * Hash: 0x4D3118ED | Since: unknown | API-Set: client
 */
export declare function setFlyThroughWindscreenParams(vehMinSpeed: number, unkMinSpeed: number, unkModifier: number, minDamage: number): boolean;
/**
 * Toggles whether the usage of [ADD_ROPE](#\_0xE832D760399EB220) should create an underlying CNetworkRopeWorldStateData. By default this is set to false.
 *
 * Hash: 0xE62FC73 | Since: unknown | API-Set: client
 */
export declare function setRopesCreateNetworkWorldState(shouldCreate: boolean): void;
/**
 * Set's the ropes length change rate, which is the speed that rope should wind if started.
 *
 * Hash: 0x69B680A7 | Since: unknown | API-Set: client
 */
export declare function setRopeLengthChangeRate(rope: number, lengthChangeRate: number): void;
/**
 * No comment provided
 *
 * Hash: 0x710311ADF0E20730 | Since: 1207 | API-Set: unknown
 */
export declare function activate(entity: number | IEntity): void;
/**
 * There are 19 types of rope, from type = 0 to type = 18
 * Rope definitions are stored in ropedata.xml
 * Rope types 0, 15 and 18 have proper physics for hanging objects (taut, do not sag, small to medium diameter, good aspect for a rope)
 *
 * Hash: 0xE832D760399EB220 | Since: 1207 | API-Set: unknown
 */
export declare function addRope(pos: Vector3, rot: Vector3, length: number, ropeType: number, maxLength: number, minLength: number, rigid: boolean, breakWhenShot: boolean): [number, any];
/**
 * Attaches entity 1 to entity 2.
 * If you use a boneName (p12/p13) make sure boneId (p15/p16) is set to -1.
 *
 * Hash: 0x3D95EC8B6D940AC3 | Since: 1207 | API-Set: unknown
 */
export declare function attachEntitiesToRope(ropeId: number, entity1: number | IEntity, entity2: number | IEntity, ent1X: number, ent1Y: number, ent1Z: number, ent2X: number, ent2Y: number, ent2Z: number, length: number, alwaysZero1: number, alwaysZero2: number, boneId1: number, boneId2: number, alwaysZero3: number, alwaysZero4: number): [string, string];
/**
 * No comment provided
 *
 * Hash: 0x2E648D16F6E308F3 | Since: 1207 | API-Set: unknown
 */
export declare function breakEntityGlass(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xAA5D6B1888E4DB20 | Since: 1207 | API-Set: unknown
 */
export declare function deleteChildRope(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x52B4829281364649 | Since: 1207 | API-Set: unknown
 */
export declare function deleteRope(): number;
/**
 * No comment provided
 *
 * Hash: 0xBCF3026912A8647D | Since: 1207 | API-Set: unknown
 */
export declare function detachRopeFromEntity(ropeId: number, entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xFD5448BE3111ED96 | Since: 1207 | API-Set: unknown
 */
export declare function doesRopeExist(ropeId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x21BB0FBD3E217C2D | Since: 1207 | API-Set: unknown
 */
export declare function getRopeLastVertexCoord(ropeId: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xEA61CA8E80F09E4D | Since: 1207 | API-Set: unknown
 */
export declare function getRopeVertexCoord(ropeId: number, vertex: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x3655F544CD30F0B5 | Since: 1207 | API-Set: unknown
 */
export declare function getRopeVertexCount(ropeId: number): number;
/**
 * No comment provided
 *
 * Hash: 0xF159A63806BB5BA8 | Since: 1207 | API-Set: unknown
 */
export declare function ropeDrawShadowEnabled(toggle: boolean): number;
/**
 * Forces a rope to a certain length.
 *
 * Hash: 0xD009F759A723DB1B | Since: 1207 | API-Set: unknown
 */
export declare function ropeForceLength(ropeId: number, length: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDC57A637A20006ED | Since: 1207 | API-Set: unknown
 */
export declare function ropeSetUpdateOrder(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xEEA3B200A6FEB65B | Since: 1207 | API-Set: unknown
 */
export declare function setDamping(entity: number | IEntity, vertex: number, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5CEC1A84620E7D5B | Since: 1207 | API-Set: unknown
 */
export declare function setDisableBreaking(_object: number | IObject, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x01BA3AED21C16CFB | Since: 1207 | API-Set: unknown
 */
export declare function setDisableFragDamage(_object: number | IObject, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x538D1179EC1AA9A9 | Since: 1207 | API-Set: unknown
 */
export declare function startRopeUnwindingFront(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1461C72C889E343E | Since: 1207 | API-Set: unknown
 */
export declare function startRopeWinding(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFFF3A50779EFBBB3 | Since: 1207 | API-Set: unknown
 */
export declare function stopRopeUnwindingFront(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCB2D4AB84A19AA7C | Since: 1207 | API-Set: unknown
 */
export declare function stopRopeWinding(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0CB16D05E03FB525 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0CB16D05E03FB525(): void;
/**
 * No comment provided
 *
 * Hash: 0x1D97DA8ACB5D2582 | Since: 1207 | API-Set: unknown
 */
export declare function _0x1D97DA8ACB5D2582(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1FC92BDBA1106BD2 | Since: 1207 | API-Set: unknown
 */
export declare function _0x1FC92BDBA1106BD2(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x21D0890D88DFB0B0 | Since: 1207 | API-Set: unknown
 */
export declare function _0x21D0890D88DFB0B0(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x31160EC47E7C9549 | Since: 1207 | API-Set: unknown
 */
export declare function _0x31160EC47E7C9549(): void;
/**
 * No comment provided
 *
 * Hash: 0x32F4DBFDFCCCC735 | Since: 1207 | API-Set: unknown
 */
export declare function _0x32F4DBFDFCCCC735(): void;
/**
 * No comment provided
 *
 * Hash: 0x3900491C0D61ED4B | Since: 1207 | API-Set: unknown
 */
export declare function _0x3900491C0D61ED4B(): void;
/**
 * No comment provided
 *
 * Hash: 0x423C6B1F3786D28B | Since: 1207 | API-Set: unknown
 */
export declare function _0x423C6B1F3786D28B(): void;
/**
 * No comment provided
 *
 * Hash: 0x461FCBDEB4D06717 | Since: 1207 | API-Set: unknown
 */
export declare function _0x461FCBDEB4D06717(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x483D4E917B0D35A9 | Since: 1207 | API-Set: unknown
 */
export declare function _0x483D4E917B0D35A9(): void;
/**
 * No comment provided
 *
 * Hash: 0x522FA3F490E2F7AC | Since: 1207 | API-Set: unknown
 */
export declare function _0x522FA3F490E2F7AC(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5A989B7EE3672A56 | Since: 1207 | API-Set: unknown
 */
export declare function _0x5A989B7EE3672A56(): void;
/**
 * No comment provided
 *
 * Hash: 0x5BD7457221CC5FF4 | Since: 1207 | API-Set: unknown
 */
export declare function _0x5BD7457221CC5FF4(): void;
/**
 * No comment provided
 *
 * Hash: 0x5E981C764DF33117 | Since: 1207 | API-Set: unknown
 */
export declare function _0x5E981C764DF33117(): void;
/**
 * No comment provided
 *
 * Hash: 0x69C810B72291D831 | Since: 1207 | API-Set: unknown
 */
export declare function _0x69C810B72291D831(): void;
/**
 * No comment provided
 *
 * Hash: 0x6EA0E93CFFA472CC | Since: 1207 | API-Set: unknown
 */
export declare function _0x6EA0E93CFFA472CC(): void;
/**
 * No comment provided
 *
 * Hash: 0x751DF00EEFF122E3 | Since: 1207 | API-Set: unknown
 */
export declare function _0x751DF00EEFF122E3(): void;
/**
 * No comment provided
 *
 * Hash: 0x76BAD9D538BCA1AA | Since: 1207 | API-Set: unknown
 */
export declare function _0x76BAD9D538BCA1AA(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x814D453FCFDF119F | Since: 1207 | API-Set: unknown
 */
export declare function _0x814D453FCFDF119F(): void;
/**
 * _ROPE_SET_*
 *
 * Hash: 0x8D59079C37C21D78 | Since: 1207 | API-Set: unknown
 */
export declare function _0x8D59079C37C21D78(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8EEDFD8921389928 | Since: 1207 | API-Set: unknown
 */
export declare function _0x8EEDFD8921389928(): void;
/**
 * No comment provided
 *
 * Hash: 0x9C24846D0A4A2776 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9C24846D0A4A2776(): void;
/**
 * No comment provided
 *
 * Hash: 0xB40EA9E0D2E2F7F3 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB40EA9E0D2E2F7F3(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB7469CB9AC3C0FD4 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB7469CB9AC3C0FD4(): void;
/**
 * No comment provided
 *
 * Hash: 0xBB3E9B073E66C3C9 | Since: 1207 | API-Set: unknown
 */
export declare function _0xBB3E9B073E66C3C9(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBDDA142759307528 | Since: 1207 | API-Set: unknown
 */
export declare function _0xBDDA142759307528(): void;
/**
 * No comment provided
 *
 * Hash: 0xC64E7A62632AD2FE | Since: 1207 | API-Set: unknown
 */
export declare function _0xC64E7A62632AD2FE(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC89E7410A93AC19A | Since: 1207 | API-Set: unknown
 */
export declare function _0xC89E7410A93AC19A(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD699E688B49C0FD2 | Since: 1207 | API-Set: unknown
 */
export declare function _0xD699E688B49C0FD2(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDEDE679ED29DD4E7 | Since: 1207 | API-Set: unknown
 */
export declare function _0xDEDE679ED29DD4E7(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE54BF2CE6C7D23A9 | Since: 1207 | API-Set: unknown
 */
export declare function _0xE54BF2CE6C7D23A9(ropeId: number, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xEAF529446488EB18 | Since: 1207 | API-Set: unknown
 */
export declare function _0xEAF529446488EB18(): void;
/**
 * No comment provided
 *
 * Hash: 0xF1EA2A881EB7F2CD | Since: 1207 | API-Set: unknown
 */
export declare function _0xF1EA2A881EB7F2CD(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF27F1A8DE4F50A1B | Since: 1207 | API-Set: unknown
 */
export declare function _0xF27F1A8DE4F50A1B(): void;
/**
 * No comment provided
 *
 * Hash: 0xF8CA39D5C0D1D9A1 | Since: 1207 | API-Set: unknown
 */
export declare function _0xF8CA39D5C0D1D9A1(): void;
/**
 * No comment provided
 *
 * Hash: 0xFB9153A54AC713E8 | Since: 1207 | API-Set: unknown
 */
export declare function _0xFB9153A54AC713E8(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE9C59F6809373A99 | Since: 1207 | API-Set: unknown
 */
export declare function addRope2(pos: Vector3, rot: Vector3, length: number, ropeType: number, isNetworked: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0xE9CD9A67834985A7 | Since: 1207 | API-Set: unknown
 */
export declare function attachEntitesToRope3(ropeId: number, entity1: number | IEntity, entity2: number | IEntity): void;
/**
 * Attaches a rope to two entities: binds two bones from two entities; one entity can be an object, i.e. a suspension point, the other an NPC bone
 *
 * Hash: 0x462FF2A432733A44 | Since: 1207 | API-Set: unknown
 */
export declare function attachEntitiesToRope2(ropeId: number, entity1: number | IEntity, entity2: number | IEntity, ent1X: number, ent1Y: number, ent1Z: number, ent2X: number, ent2Y: number, ent2Z: number): [string, string];
/**
 * ropeTop returns top half of rope, ropeBottom returns bottom half of rope
 *
 * Hash: 0x4CFA2B7FAE115ECB | Since: 1207 | API-Set: unknown
 */
export declare function breakRope(offsetX: number, offsetY: number, offsetZ: number): [number, number, number];
/**
 * Combining this with ADD_ROPE enables winding
 * p1: mostly empty (0)
 * ropeModelType: RB_L_Wrist02, RB_R_Wrist02, ropeAttach, noose01x_Rope_03, SKEL_Neck0, SKEL_L_FOOT, SKEL_Neck1, Root_s_meatbit_Chunck_Xlarge01x
 * _CREATE_*
 *
 * Hash: 0x3C6490D940FF5D0B | Since: 1207 | API-Set: unknown
 */
export declare function createRopeWindingAbility(ropeId: number, length: number): [string, string];
/**
 * No comment provided
 *
 * Hash: 0x06AADE17334F7A40 | Since: 1207 | API-Set: unknown
 */
export declare function hitchHorse(horse: number | IPed, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x9B4F7E3E4F9C77B3 | Since: 1207 | API-Set: unknown
 */
export declare function isRopeAttachedToEntity(ropeId: number, entity: number | IEntity): boolean;
/**
 * No comment provided
 *
 * Hash: 0x79C2BEC82CFD7F7F | Since: 1207 | API-Set: unknown
 */
export declare function isRopeBroken(ropeId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6076213101A47B3B | Since: 1207 | API-Set: unknown
 */
export declare function releaseRope(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7A54D82227A139DB | Since: 1207 | API-Set: unknown
 */
export declare function ropeChangeVisibility(visible: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0xEE360CFC80C8B2BC | Since: 1311 | API-Set: unknown
 */
export declare function ropeGetBreakerOfRope(ropeId: number): number | string;
/**
 * No comment provided
 *
 * Hash: 0x3D69537039F8D824 | Since: 1207 | API-Set: unknown
 */
export declare function ropeGetForcedLength(ropeId: number): number;
/**
 * No comment provided
 *
 * Hash: 0x00F611A794A3C36E | Since: 1207 | API-Set: unknown
 */
export declare function startRopeUnwindingBack(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x10DAA76CB8A201A1 | Since: 1207 | API-Set: unknown
 */
export declare function stopRopeUnwindingBack(ropeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0348469DAA17576C | Since: 1207 | API-Set: unknown
 */
export declare function unhitchHorse(horse: number | IPed): void;
