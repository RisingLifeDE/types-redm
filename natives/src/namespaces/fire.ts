import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

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
export function addExplosion(pos: Vector3, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void {
    AddExplosion(pos.x, pos.y, pos.z, explosionType, damageScale, isAudible, isInvisible, cameraShake);
}

/**
 * explosionType: see ADD_EXPLOSION
 * Change explosionFx (Visual Effect) for specified explosionType
 * 
 * Hash: 0x53BA259F3A67A99E | Since: 1207
 */
export function addExplosionWithUserVfx(pos: Vector3, explosionType: number, explosionFx: number | string, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void {
    if (typeof explosionFx === 'string') explosionFx = GetHashKey(explosionFx)
    AddExplosionWithUserVfx(pos.x, pos.y, pos.z, explosionType, explosionFx, damageScale, isAudible, isInvisible, cameraShake);
}

/**
 * explosionType: see ADD_EXPLOSION
 * 
 * Hash: 0xD84A917A64D4D016 | Since: 1207
 */
export function addOwnedExplosion(ped: number | IPed, pos: Vector3, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    AddOwnedExplosion(_ped, pos.x, pos.y, pos.z, explosionType, damageScale, isAudible, isInvisible, cameraShake);
}

/**
 * No comment provided
 * 
 * Hash: 0xB646FB657F448261 | Since: 1207
 */
export function getClosestPos(pos: Vector3): [boolean, Vector3] {
    return GetClosestFirePos(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xF9617BC6FAE61E08 | Since: 1207
 */
export function getNumberOfsInRange(pos: Vector3, radius: number): number {
    return GetNumberOfFiresInRange(pos.x, pos.y, pos.z, radius);
}

/**
 * explosionType: see ADD_EXPLOSION
 * 
 * Hash: 0x8002DDAB58594D78 | Since: 1207
 */
export function getOwnerOfExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number): number {
    return GetOwnerOfExplosionInAngledArea(explosionType, x1, y1, z1, x2, y2, z2, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0x1BD7C371CE257C3E | Since: 1207
 */
export function isEntityOn(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityOnFire(_entity);
}

/**
 * explosionType: see ADD_EXPLOSION
 * 
 * Hash: 0xD96E82AEBFFAAFF0 | Since: 1207
 */
export function isExplosionActiveInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean {
    return IsExplosionActiveInArea(explosionType, x1, y1, z1, x2, y2, z2);
}

/**
 * explosionType: see ADD_EXPLOSION
 * 
 * Hash: 0x5AE661ECD18524C9 | Since: 1207
 */
export function isExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, angle: number): boolean {
    return IsExplosionInAngledArea(explosionType, x1, y1, z1, x2, y2, z2, angle);
}

/**
 * explosionType: see ADD_EXPLOSION
 * 
 * Hash: 0x8391BA4313A25AD3 | Since: 1207
 */
export function isExplosionInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean {
    return IsExplosionInArea(explosionType, x1, y1, z1, x2, y2, z2);
}

/**
 * explosionType: see ADD_EXPLOSION
 * 
 * Hash: 0xD62DD846D82CBB90 | Since: 1207
 */
export function isExplosionInSphere(explosionType: number, pos: Vector3, radius: number): boolean {
    return IsExplosionInSphere(explosionType, pos.x, pos.y, pos.z, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0x790125C36E194069 | Since: 1207
 */
export function removeScript(fireHandle: number): void {
    RemoveScriptFire(fireHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0xC4DC7418A44D6822 | Since: 1207
 */
export function startEntity(entity: number | IEntity, intensity: number, boneIndex: number, fireFlags: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    StartEntityFire(_entity, intensity, boneIndex, fireFlags);
}

/**
 * Starts a fire:
 * 
 * xyz: Location of fire
 * maxChildren: The max amount of times a fire can spread to other objects. Must be 25 or less, or the function will do nothing.
 * isGasFire: Whether or not the fire is powered by gasoline.
 * 
 * Hash: 0x6B83617E04503888 | Since: 1207
 */
export function startScript(pos: Vector3, soundsetName: string): number {
    return StartScriptFire(pos.x, pos.y, pos.z, 0, 0, false, soundsetName, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x8390751DC40C1E98 | Since: 1207
 */
export function stopEntity(): void {
    StopEntityFire(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDB38F247BD421708 | Since: 1207
 */
export function stopInRange(pos: Vector3, radius: number): void {
    StopFireInRange(pos.x, pos.y, pos.z, radius);
}

/**
 * Only used in R* SP Related Camp Scripts
 * 
 * Hash: 0x24DB6B9F2B719043 | Since: 1207
 */
export function _0x24DB6B9F2B719043(): void {
    Citizen.invokeNative('0x24DB6B9F2B719043', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x41B87A6495EE13DD | Since: 1232
 */
export function _0x41B87A6495EE13DD(): any {
    return Citizen.invokeNative('0x41B87A6495EE13DD', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x68F6A75FDF5A70D6 | Since: 1207
 */
export function _0x68F6A75FDF5A70D6(pos: Vector3): void {
    Citizen.invokeNative('0x68F6A75FDF5A70D6', pos.x, pos.y, pos.z, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x754937C28271BC65 | Since: 1207
 */
export function _0x754937C28271BC65(): void {
    Citizen.invokeNative('0x754937C28271BC65', undefined);
}

/**
 * Add explosion with and assign an entity as damage causer.
 * explosionType: https://github.com/femga/rdr3_discoveries/blob/master/graphics/explosions/README.md
 * 
 * Hash: 0xB7DF150605EEDC9B | Since: 1207
 */
export function addExplosionWithDamageCauser(entity: number | IEntity, pos: Vector3, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xB7DF150605EEDC9B', _entity, 0, pos.x, pos.y, pos.z, explosionType, damageScale, isAudible, isInvisible, cameraShake);
}

/**
 * Add explosion with vfx and assign an entity as damage causer.
 * explosionType: https://github.com/femga/rdr3_discoveries/blob/master/graphics/explosions/README.md
 * explosionFx: https://github.com/femga/rdr3_discoveries/blob/master/graphics/explosions/explosion_vfxTags.lua
 * 
 * Hash: 0x34AE85C7CA4857AA | Since: 1207
 */
export function addExplosionWithUserVfxAndDamageCauser(entity: number | IEntity, pos: Vector3, explosionType: number, explosionFx: number | string, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof explosionFx === 'string') explosionFx = GetHashKey(explosionFx)
    Citizen.invokeNative('0x34AE85C7CA4857AA', _entity, false, pos.x, pos.y, pos.z, explosionType, explosionFx, damageScale, isAudible, isInvisible, cameraShake);
}

/**
 * No comment provided
 * 
 * Hash: 0x559FC1D310813031 | Since: 1232
 */
export function getClosestPosInVolume(pos: Vector3, rot: Vector3, scale: Vector3): [boolean, Vector3] {
    return Citizen.invokeNative('0x559FC1D310813031', pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xCDC25355C0D65963 | Since: 1207
 */
export function isEntityConsumedBy(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityConsumedByFire(_entity);
}

/**
 * this natives only returns true if entity is damaged by fire , once damaged caused to entity by fire (like burned appearance) has cleared (they clear over time) then returns false
 * 
 * Hash: 0xA4454592DCF7C992 | Since: 1207
 */
export function isEntityDamagedBy(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0xA4454592DCF7C992', _entity);
}

/**
 * explosionType: see ADD_EXPLOSION
 * 
 * Hash: 0xE24822A4CFC9107A | Since: 1207
 */
export function isExplosionInVolume(explosionType: number, volume: number): boolean {
    return IsExplosionInVolume(explosionType, volume);
}

/**
 * Tested with fire & dynamite. Only returns true using value p1 = 1 and when the ped is affected by fire.
 * 
 * Hash: 0xAB7993BA61A4674F | Since: 1232
 */
export function isPedShockingEventActive(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedShockingEventActive(_ped, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xB7C7BDC375AEA9A4 | Since: 1207
 */
export function stopInBox(pos: Vector3, rot: Vector3, scale: Vector3): void {
    StopFireInBox(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z);
}

