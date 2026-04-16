import { Vector3, IEntity, IPed } from '@risinglife/redm-shared';
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/graphics/explosions
 *
 * explosionType:
 * enum eExplosionTag
 * {
 * EXP_TAG_DONTCARE = -1,
 * EXP_TAG_GRENADE,
 * EXP_TAG_STICKYBOMB,
 * EXP_TAG_MOLOTOV,
 * EXP_TAG_MOLOTOV_VOLATILE,
 * EXP_TAG_HI_OCTANE,
 * EXP_TAG_CAR,
 * EXP_TAG_PLANE,
 * EXP_TAG_PETROL_PUMP,
 * EXP_TAG_DIR_STEAM,
 * EXP_TAG_DIR_FLAME,
 * EXP_TAG_DIR_WATER_HYDRANT,
 * EXP_TAG_BOAT,
 * EXP_TAG_BULLET,
 * EXP_TAG_SMOKEGRENADE,
 * EXP_TAG_BZGAS,
 * EXP_TAG_GAS_CANISTER,
 * EXP_TAG_EXTINGUISHER,
 * EXP_TAG_TRAIN,
 * EXP_TAG_DIR_FLAME_EXPLODE,
 * EXP_TAG_VEHICLE_BULLET,
 * EXP_TAG_BIRD_CRAP,
 * EXP_TAG_FIREWORK,
 * EXP_TAG_TORPEDO,
 * EXP_TAG_TORPEDO_UNDERWATER,
 * EXP_TAG_LANTERN,
 * EXP_TAG_DYNAMITE,
 * EXP_TAG_DYNAMITESTACK,
 * EXP_TAG_DYNAMITE_VOLATILE,
 * EXP_TAG_RIVER_BLAST,
 * EXP_TAG_PLACED_DYNAMITE,
 * EXP_TAG_FIRE_ARROW,
 * EXP_TAG_DYNAMITE_ARROW,
 * EXP_TAG_PHOSPHOROUS_BULLET,
 * EXP_TAG_LIGHTNING_STRIKE,
 * EXP_TAG_TRACKING_ARROW,
 * EXP_TAG_POISON_BOTTLE
 * };
 *
 * Hash: 0x7D6F58F69DA92530 | Since: 1207
 */
export declare function addExplosion(pos: Vector3, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;
/**
 * explosionType: see ADD_EXPLOSION
 * Change explosionFx (Visual Effect) for specified explosionType
 *
 * Hash: 0x53BA259F3A67A99E | Since: 1207
 */
export declare function addExplosionWithUserVfx(pos: Vector3, explosionType: number, explosionFx: number | string, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;
/**
 * explosionType: see ADD_EXPLOSION
 *
 * Hash: 0xD84A917A64D4D016 | Since: 1207
 */
export declare function addOwnedExplosion(ped: number | IPed, pos: Vector3, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB646FB657F448261 | Since: 1207
 */
export declare function getClosestPos(pos: Vector3): [boolean, Vector3];
/**
 * No comment provided
 *
 * Hash: 0xF9617BC6FAE61E08 | Since: 1207
 */
export declare function getNumberOfsInRange(pos: Vector3, radius: number): number;
/**
 * explosionType: see ADD_EXPLOSION
 *
 * Hash: 0x8002DDAB58594D78 | Since: 1207
 */
export declare function getOwnerOfExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number): number;
/**
 * No comment provided
 *
 * Hash: 0x1BD7C371CE257C3E | Since: 1207
 */
export declare function isEntityOn(entity: number | IEntity): boolean;
/**
 * explosionType: see ADD_EXPLOSION
 *
 * Hash: 0xD96E82AEBFFAAFF0 | Since: 1207
 */
export declare function isExplosionActiveInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
/**
 * explosionType: see ADD_EXPLOSION
 *
 * Hash: 0x5AE661ECD18524C9 | Since: 1207
 */
export declare function isExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, angle: number): boolean;
/**
 * explosionType: see ADD_EXPLOSION
 *
 * Hash: 0x8391BA4313A25AD3 | Since: 1207
 */
export declare function isExplosionInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
/**
 * explosionType: see ADD_EXPLOSION
 *
 * Hash: 0xD62DD846D82CBB90 | Since: 1207
 */
export declare function isExplosionInSphere(explosionType: number, pos: Vector3, radius: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x790125C36E194069 | Since: 1207
 */
export declare function removeScript(fireHandle: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC4DC7418A44D6822 | Since: 1207
 */
export declare function startEntity(entity: number | IEntity, intensity: number, boneIndex: number, fireFlags: number): void;
/**
 * Starts a fire:
 *
 * xyz: Location of fire
 * maxChildren: The max amount of times a fire can spread to other objects. Must be 25 or less, or the function will do nothing.
 * isGasFire: Whether or not the fire is powered by gasoline.
 *
 * Hash: 0x6B83617E04503888 | Since: 1207
 */
export declare function startScript(pos: Vector3, soundsetName: string): number;
/**
 * No comment provided
 *
 * Hash: 0x8390751DC40C1E98 | Since: 1207
 */
export declare function stopEntity(): void;
/**
 * No comment provided
 *
 * Hash: 0xDB38F247BD421708 | Since: 1207
 */
export declare function stopInRange(pos: Vector3, radius: number): void;
/**
 * Only used in R* SP Related Camp Scripts
 *
 * Hash: 0x24DB6B9F2B719043 | Since: 1207
 */
export declare function _0x24DB6B9F2B719043(): void;
/**
 * No comment provided
 *
 * Hash: 0x41B87A6495EE13DD | Since: 1232
 */
export declare function _0x41B87A6495EE13DD(): any;
/**
 * No comment provided
 *
 * Hash: 0x68F6A75FDF5A70D6 | Since: 1207
 */
export declare function _0x68F6A75FDF5A70D6(pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x754937C28271BC65 | Since: 1207
 */
export declare function _0x754937C28271BC65(): void;
/**
 * Add explosion with and assign an entity as damage causer.
 * explosionType: https://github.com/femga/rdr3_discoveries/blob/master/graphics/explosions/README.md
 *
 * Hash: 0xB7DF150605EEDC9B | Since: 1207
 */
export declare function addExplosionWithDamageCauser(entity: number | IEntity, pos: Vector3, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;
/**
 * Add explosion with vfx and assign an entity as damage causer.
 * explosionType: https://github.com/femga/rdr3_discoveries/blob/master/graphics/explosions/README.md
 * explosionFx: https://github.com/femga/rdr3_discoveries/blob/master/graphics/explosions/explosion_vfxTags.lua
 *
 * Hash: 0x34AE85C7CA4857AA | Since: 1207
 */
export declare function addExplosionWithUserVfxAndDamageCauser(entity: number | IEntity, pos: Vector3, explosionType: number, explosionFx: number | string, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;
/**
 * No comment provided
 *
 * Hash: 0x559FC1D310813031 | Since: 1232
 */
export declare function getClosestPosInVolume(pos: Vector3, rot: Vector3, scale: Vector3): [boolean, Vector3];
/**
 * No comment provided
 *
 * Hash: 0xCDC25355C0D65963 | Since: 1207
 */
export declare function isEntityConsumedBy(entity: number | IEntity): boolean;
/**
 * this natives only returns true if entity is damaged by fire , once damaged caused to entity by fire (like burned appearance) has cleared (they clear over time) then returns false
 *
 * Hash: 0xA4454592DCF7C992 | Since: 1207
 */
export declare function isEntityDamagedBy(entity: number | IEntity): boolean;
/**
 * explosionType: see ADD_EXPLOSION
 *
 * Hash: 0xE24822A4CFC9107A | Since: 1207
 */
export declare function isExplosionInVolume(explosionType: number, volume: number): boolean;
/**
 * Tested with fire & dynamite. Only returns true using value p1 = 1 and when the ped is affected by fire.
 *
 * Hash: 0xAB7993BA61A4674F | Since: 1232
 */
export declare function isPedShockingEventActive(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB7C7BDC375AEA9A4 | Since: 1207
 */
export declare function stopInBox(pos: Vector3, rot: Vector3, scale: Vector3): void;
