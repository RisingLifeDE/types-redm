import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0xF15E8F5D333F09C4 | Since: 1207
 */
export function applyForceTo(entity: number | IEntity, forceFlags: number, pos: Vector3, offX: number, offY: number, offZ: number, boneIndex: number, isDirectionRel: boolean, ignoreUpVec: boolean, isForceRel: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ApplyForceToEntity(_entity, forceFlags, pos.x, pos.y, pos.z, offX, offY, offZ, boneIndex, isDirectionRel, ignoreUpVec, isForceRel, false, false);
}

/**
 * p6/relative - makes the xyz force not relative to world coords, but to something else
 * p7/highForce - setting false will make the force really low
 * 
 * Hash: 0x31DA7CEC5334DB37 | Since: 1207
 */
export function applyForceToCenterOfMass(entity: number | IEntity, forceType: number, pos: Vector3, component: number, isDirectionRel: boolean, isForceRel: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ApplyForceToEntityCenterOfMass(_entity, forceType, pos.x, pos.y, pos.z, component, isDirectionRel, isForceRel, false);
}

/**
 * Attaches entity1 to bone (boneIndex) of entity2.
 * 
 * boneIndex - this is different to boneID, use GET_PED_BONE_INDEX to get the index from the ID. use the index for attaching to specific bones. entity1 will be attached to entity2's centre if bone index given doesn't correspond to bone indexes for that entity type.
 * https://github.com/femga/rdr3_discoveries/tree/master/boneNames
 * 
 * useSoftPinning - if set to false attached entity will not detach when fixed
 * collision - controls collision between the two entities (FALSE disables collision).
 * isPed - pitch doesn't work when false and roll will only work on negative numbers (only peds)
 * vertexIndex - position of vertex
 * fixedRot - if false it ignores entity vector
 * 
 * Hash: 0x6B9BBD38AB0796DF | Since: 1207
 */
export function attachToEntity(entity1: number | IEntity, entity2: number | IEntity, boneIndex: number, pos: Vector3, rot: Vector3, useSoftPinning: boolean, collision: boolean, isPed: boolean, vertexIndex: number, fixedRot: boolean): void {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    AttachEntityToEntity(_entity1, _entity2, boneIndex, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, false, useSoftPinning, collision, isPed, vertexIndex, fixedRot, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xB629A43CA1643481 | Since: 1207
 */
export function attachToEntityPhysically(entity1: number | IEntity, entity2: number | IEntity, boneIndex: number, offsetX: number, offsetY: number, offsetZ: number): void {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    AttachEntityToEntityPhysically(_entity1, _entity2, 0, boneIndex, offsetX, offsetY, offsetZ, 0, 0, 0, 0, 0, 0, 0, false, false, false, false, 0, false, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xBB19AC7D4DCEFD0F | Since: 1207
 */
export function clearLastDamageEntity(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ClearEntityLastDamageEntity(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x0961A905AFBC34C7 | Since: 1207
 */
export function createForcedObject(pos: Vector3, modelHash: number | string): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    CreateForcedObject(pos.x, pos.y, pos.z, undefined, modelHash, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x069848B3FB3C4426 | Since: 1207
 */
export function createModelHide(pos: Vector3, radius: number, model: number | string): void {
    if (typeof model === 'string') model = GetHashKey(model)
    CreateModelHide(pos.x, pos.y, pos.z, radius, model, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xD136090A9AAAB17D | Since: 1207
 */
export function createModelHideExcludingScriptObjects(pos: Vector3, radius: number, model: number | string): void {
    if (typeof model === 'string') model = GetHashKey(model)
    CreateModelHideExcludingScriptObjects(pos.x, pos.y, pos.z, radius, model, false);
}

/**
 * Only works with objects!
 * 
 * Hash: 0x10B2218320B6F5AC | Since: 1207
 */
export function createModelSwap(pos: Vector3, radius: number, originalModel: number | string, newModel: number | string): void {
    if (typeof originalModel === 'string') originalModel = GetHashKey(originalModel)
    if (typeof newModel === 'string') newModel = GetHashKey(newModel)
    CreateModelSwap(pos.x, pos.y, pos.z, radius, originalModel, newModel, false);
}

/**
 * Deletes the specified entity, then sets the handle pointed to by the pointer to NULL.
 * 
 * Hash: 0x4CD38C78BD19A497 | Since: 1207
 */
export function deleteEntity(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    DeleteEntity(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x64CDE9D6BF8ECAD3 | Since: 1207
 */
export function detach(entity: number | IEntity, collision: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    DetachEntity(_entity, false, collision);
}

/**
 * No comment provided
 * 
 * Hash: 0x622B1980CBE13332 | Since: 1207
 */
export function doesBelongToThisScript(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DoesEntityBelongToThisScript(_entity, false);
}

/**
 * Checks if the Entity exists
 * 
 * Hash: 0xD42BD6EB2E0F1677 | Since: 1207
 */
export function doesExist(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DoesEntityExist(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x20487F0DA9AF164A | Since: 1207
 */
export function doesHaveDrawable(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DoesEntityHaveDrawable(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xA512B3F1B2A0B51C | Since: 1207
 */
export function doesHavePhysics(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DoesEntityHavePhysics(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x42718CC559BD7776 | Since: 1207
 */
export function findAnimEventPhase(animDictionary: string, animName: string): [boolean, any, any] {
    return FindAnimEventPhase(animDictionary, animName, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4C9E96473D4F1A88 | Since: 1207
 */
export function forceAiAndAnimationUpdate(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ForceEntityAiAndAnimationUpdate(_entity, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x7D9EFB7AD6B19754 | Since: 1207
 */
export function freezePosition(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    FreezeEntityPosition(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9FFAF4940A54CC09 | Since: 1207
 */
export function getAnimDuration(animDict: string, animName: string): number {
    return GetAnimDuration(animDict, animName);
}

/**
 * enum eCarriableState
 * {
 * CARRIABLE_STATE_NONE,
 * CARRIABLE_STATE_TRANSITIONING_TO_HOGTIED,
 * CARRIABLE_STATE_CARRIABLE_INTRO,
 * CARRIABLE_STATE_CARRIABLE,
 * CARRIABLE_STATE_BEING_PICKED_UP_FROM_GROUND,
 * CARRIABLE_STATE_CARRIED_BY_HUMAN,
 * CARRIABLE_STATE_BEING_PLACED_ON_GROUND,
 * CARRIABLE_STATE_CARRIED_BY_MOUNT,
 * CARRIABLE_STATE_BEING_PLACED_ON_MOUNT,
 * CARRIABLE_STATE_BEING_PICKED_UP_FROM_MOUNT,
 * CARRIABLE_STATE_BEING_CUT_FREE,
 * CARRIABLE_STATE_BEING_PLACED_ON_GROUND_ESCAPE,
 * CARRIABLE_STATE_BEING_PLACED_IN_VEHICLE
 * };
 * 
 * Hash: 0x61914209C36EFDDB | Since: 1207
 */
export function getCarriableState(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetCarriableEntityState(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x1BB501624FAF2BEA | Since: 1207
 */
export function getAlpha(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityAlpha(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x56D713888A566481 | Since: 1207
 */
export function getAttachedTo(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityAttachedTo(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xBACA8FE9C76C124E | Since: 1207
 */
export function getBoneIndexByName(entity: number | IEntity, boneName: string): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityBoneIndexByName(_entity, boneName);
}

/**
 * Old name: _GET_ENTITY_CAN_BE_DAMAGED
 * 
 * Hash: 0x75DF9E73F2F005FD | Since: 1207
 */
export function getCanBeDamaged(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityCanBeDamaged(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xAA2FADD30F45A9DA | Since: 1207
 */
export function getCollisionDisabled(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityCollisionDisabled(_entity);
}

/**
 * Gets the current coordinates for a specified entity.
 * `entity` = The entity to get the coordinates from.
 * `alive` = Unused by the game, potentially used by debug builds in order to assert whether or not an entity was alive.
 * 
 * If entity is a ped and it's in a vehicle or on a mount the coords of that entity are returned. Set 'realCoords' to true when you need the true ped coords.
 * 
 * Hash: 0xA86D5F069399F44D | Since: 1207
 */
export function getCoords(entity: number | IEntity, alive: boolean, realCoords: boolean): Vector3 {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntityCoords(_entity, alive, realCoords));
}

/**
 * Gets the entity's forward vector in XY(Z) eulers.
 * 
 * Hash: 0x2412D9C05BB09B97 | Since: 1207
 */
export function getForwardVector(entity: number | IEntity): Vector3 {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntityForwardVector(_entity));
}

/**
 * Gets the X-component of the entity's forward vector.
 * 
 * Hash: 0xDB0954E9960F6457 | Since: 1207
 */
export function getForwardX(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityForwardX(_entity);
}

/**
 * Gets the Y-component of the entity's forward vector.
 * 
 * Hash: 0x9A5C073ECBDA7EE7 | Since: 1207
 */
export function getForwardY(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityForwardY(_entity);
}

/**
 * Returns the heading of the entity in degrees. Also know as the "Yaw" of an entity.
 * 
 * Hash: 0xC230DD956E2F5507 | Since: 1207
 */
export function getHeading(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityHeading(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x82368787EA73C0F7 | Since: 1207
 */
export function getHealth(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityHealth(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x296DEBC84474B375 | Since: 1207
 */
export function getHeight(entity: number | IEntity, pos: Vector3, atTop: boolean, inWorldCoords: boolean): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityHeight(_entity, pos.x, pos.y, pos.z, atTop, inWorldCoords);
}

/**
 * No comment provided
 * 
 * Hash: 0x0D3B5BAEA08F63E9 | Since: 1207
 */
export function getHeightAboveGround(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityHeightAboveGround(_entity);
}

/**
 * Returns the LOD distance of an entity.
 * 
 * Hash: 0xDF240D0C2A948683 | Since: 1207
 */
export function getLodDist(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityLodDist(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x3A9B1120AF13FBF2 | Since: 1207
 */
export function getMatrix(entity: number | IEntity): [Vector3, Vector3, Vector3, Vector3] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityMatrix(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x15D757606D170C3C | Since: 1207
 */
export function getMaxHealth(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityMaxHealth(_entity, false);
}

/**
 * Returns the model hash from the entity
 * 
 * Hash: 0xDA76A9F39210D365 | Since: 1207
 */
export function getModel(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityModel(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xEF355ABEFF7F5005 | Since: 1207
 */
export function getPitch(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityPitch(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xADE28862B6D7B85B | Since: 1207
 */
export function getPopulationType(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityPopulationType(_entity);
}

/**
 * Note: this native was removed in 1232 but added back in 1311
 * Old name: _GET_ENTITY_PROOFS
 * 
 * Hash: 0x6CF0DAD7FA1088EA | Since: 1207
 */
export function getProofs(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityProofs(_entity);
}

/**
 * Displays the current ROLL axis of the entity [-180.0000/180.0000+]
 * (Sideways Roll) such as a vehicle tipped on its side
 * 
 * Hash: 0xBF966536FA8B6879 | Since: 1207
 */
export function getRoll(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityRoll(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xE09CAF86C32CB48F | Since: 1207
 */
export function getRotation(entity: number | IEntity, rotationOrder: number): Vector3 {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntityRotation(_entity, rotationOrder));
}

/**
 * Result is in meters per second (m/s)
 * 
 * Hash: 0xFB6BA510A533DF81 | Since: 1207
 */
export function getSpeed(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntitySpeed(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xF2DB09816A419DC5 | Since: 1207
 */
export function getSpeedVector(entity: number | IEntity, relative: boolean): Vector3 {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntitySpeedVector(_entity, relative));
}

/**
 * Get how much of the entity is submerged.  1.0f is whole entity.
 * 
 * Hash: 0x4A77C3F73FD9E831 | Since: 1207
 */
export function getSubmergedLevel(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntitySubmergedLevel(_entity);
}

/**
 * Returns entityType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eEntityType
 * 
 * Hash: 0x97F696ACA466B4E0 | Since: 1207
 */
export function getType(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityType(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x56398BE65160C3BE | Since: 1207
 */
export function getUprightValue(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityUprightValue(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x4805D2B1D8CF94A9 | Since: 1207
 */
export function getVelocity(entity: number | IEntity): Vector3 {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntityVelocity(_entity, 0));
}

/**
 * No comment provided
 * 
 * Hash: 0x9A100F1CF4546629 | Since: 1207
 */
export function getIsAnimal(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetIsAnimal(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x84CCF9A12942C83D | Since: 1207
 */
export function getMatchingEntities(volume: number, itemSet: any, entityType: number, p4: number | string): number {
    if (typeof p4 === 'string') p4 = GetHashKey(p4)
    return GetMatchingEntities(volume, itemSet, entityType, undefined, p4, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6888A43C35A5F630 | Since: 1207
 */
export function getNearestParticipantTo(entity: number | IEntity): number | string {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetNearestParticipantToEntity(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x990E294FC387FB88 | Since: 1207
 */
export function getNearestPlayerTo(entity: number | IEntity, playerPedToIgnore: number | IPed, flags: number): number | string {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _playerPedToIgnore = playerPedToIgnore instanceof IPed ? playerPedToIgnore.handle() : playerPedToIgnore;
    return GetNearestPlayerToEntity(_entity, _playerPedToIgnore, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0xB2C30C3B4AFF718C | Since: 1207
 */
export function getNearestPlayerToOnTeam(entity: number | IEntity, team: number, playerPedToIgnore: number | IPed, flags: number): number | string {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _playerPedToIgnore = playerPedToIgnore instanceof IPed ? playerPedToIgnore.handle() : playerPedToIgnore;
    return GetNearestPlayerToEntityOnTeam(_entity, team, _playerPedToIgnore, flags);
}

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 * 
 * Hash: 0x280BBE5601EAA983 | Since: 1207
 */
export function getObjectIndexFromIndex(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetObjectIndexFromEntityIndex(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x497C6B1A2C9AE69C | Since: 1207
 */
export function getOffsetFromGivenWorldCoords(entity: number | IEntity, pos: Vector3): Vector3 {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetOffsetFromEntityGivenWorldCoords(_entity, pos.x, pos.y, pos.z));
}

/**
 * Offset values are relative to the entity.
 * 
 * x = left/right
 * y = forward/backward
 * z = up/down
 * 
 * Hash: 0x1899F328B0E12848 | Since: 1207
 */
export function getOffsetFromInWorldCoords(entity: number | IEntity, offsetX: number, offsetY: number, offsetZ: number): Vector3 {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetOffsetFromEntityInWorldCoords(_entity, offsetX, offsetY, offsetZ));
}

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 * 
 * Hash: 0x0F16D042BD640EA3 | Since: 1207
 */
export function getPedIndexFromIndex(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetPedIndexFromEntityIndex(_entity);
}

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 * 
 * Hash: 0xDF1E5AAC561AFC59 | Since: 1207
 */
export function getVehicleIndexFromIndex(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetVehicleIndexFromEntityIndex(_entity);
}

/**
 * Returns the coordinates of an entity-bone.
 * https://github.com/femga/rdr3_discoveries/tree/master/boneNames
 * 
 * Hash: 0x82CFA50E34681CA5 | Since: 1207
 */
export function getWorldPositionOfBone(entity: number | IEntity, boneIndex: number): Vector3 {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetWorldPositionOfEntityBone(_entity, boneIndex));
}

/**
 * No comment provided
 * 
 * Hash: 0x5851CC48405F4A07 | Since: 1207
 */
export function hasAnimEventFired(entity: number | IEntity, actionHash: number | string): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof actionHash === 'string') actionHash = GetHashKey(actionHash)
    return HasAnimEventFired(_entity, actionHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xBEB1600952B9CF5C | Since: 1207
 */
export function hasCollisionLoadedAround(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return HasCollisionLoadedAroundEntity(_entity);
}

/**
 * Old name: _HAS_COLLISION_LOADED_AT_COORDS
 * 
 * Hash: 0x6BFBDC46139C45AB | Since: 1207
 */
export function hasCollisionLoadedAroundPosition(pos: Vector3): boolean {
    return HasCollisionLoadedAroundPosition(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xAEB40615337EF1E3 | Since: 1207
 */
export function hasAnimFinished(entity: number | IEntity, animDict: string, animName: string): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return HasEntityAnimFinished(_entity, animDict, animName, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x73BB763880CD23A6 | Since: 1207
 */
export function hasBeenDamagedByAnyObject(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return HasEntityBeenDamagedByAnyObject(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x9934E9C42D52D87E | Since: 1207
 */
export function hasBeenDamagedByAnyPed(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return HasEntityBeenDamagedByAnyPed(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x695D7C26DE65C423 | Since: 1207
 */
export function hasBeenDamagedByAnyVehicle(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return HasEntityBeenDamagedByAnyVehicle(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x7B6E7BEC1143AC86 | Since: 1207
 */
export function hasBeenDamagedByEntity(entity1: number | IEntity, entity2: number | IEntity): boolean {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    return HasEntityBeenDamagedByEntity(_entity1, _entity2, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x0C9DBF48C6BA6E4C | Since: 1207
 */
export function hasClearLosToCoord(entity: number | IEntity, pos: Vector3, flags: number): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return HasEntityClearLosToCoord(_entity, pos.x, pos.y, pos.z, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0xFCDFF7B72D23A1AC | Since: 1207
 */
export function hasClearLosToEntity(entity1: number | IEntity, entity2: number | IEntity, traceType: number): boolean {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    return HasEntityClearLosToEntity(_entity1, _entity2, traceType);
}

/**
 * Has the entity1 got a clear line of sight to the other entity2 from the direction entity1 is facing.
 * 
 * Hash: 0xE88F19660651D566 | Since: 1207
 */
export function hasClearLosToEntityInFront(entity1: number | IEntity, entity2: number | IEntity, traceType: number): boolean {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    return HasEntityClearLosToEntityInFront(_entity1, _entity2, traceType);
}

/**
 * No comment provided
 * 
 * Hash: 0xDF18751EC74F90FF | Since: 1207
 */
export function hasCollidedWithAnything(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return HasEntityCollidedWithAnything(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x27CFF3E5A286D3DF | Since: 1207
 */
export function isAn(handle: number): boolean {
    return IsAnEntity(handle);
}

/**
 * No comment provided
 * 
 * Hash: 0x0A27A546A375FDEF | Since: 1207
 */
export function isAnObject(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAnObject(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xEE6AD63ABF59C0B7 | Since: 1207
 */
export function isAttached(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAttached(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x306C1F6178F01AB3 | Since: 1207
 */
export function isAttachedToAnyObject(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAttachedToAnyObject(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xC841153DED2CA89A | Since: 1207
 */
export function isAttachedToAnyPed(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAttachedToAnyPed(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x12DF6E0D2E736749 | Since: 1207
 */
export function isAttachedToAnyVehicle(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAttachedToAnyVehicle(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x154A3C529497053E | Since: 1207
 */
export function isAttachedToEntity(_from: number | IEntity, to: number | IEntity): boolean {
    const __from = _from instanceof IEntity ? _from.handle() : _from;
    const _to = to instanceof IEntity ? to.handle() : to;
    return IsEntityAttachedToEntity(__from, _to);
}

/**
 * Checks if entity is within x/y/zSize distance of x/y/z.
 * 
 * Last three are unknown ints, almost always p7 = 0, p8 = 1, p9 = 0
 * 
 * Hash: 0x5E58342602E94718 | Since: 1207
 */
export function isAtCoord(entity: number | IEntity, pos: Vector3, xSize: number, ySize: number, zSize: number): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAtCoord(_entity, pos.x, pos.y, pos.z, xSize, ySize, zSize, false, false, 0);
}

/**
 * Checks if entity1 is within the box defined by x/y/zSize of entity2.
 * 
 * Last three parameters are almost always p5 = 0, p6 = 1, p7 = 0
 * 
 * Hash: 0xC057F02B837A27F6 | Since: 1207
 */
export function isAtEntity(entity1: number | IEntity, entity2: number | IEntity, xSize: number, ySize: number, zSize: number): boolean {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    return IsEntityAtEntity(_entity1, _entity2, xSize, ySize, zSize, false, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x138190F64DB4BBD1 | Since: 1207
 */
export function isAMissionEntity(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAMissionEntity(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xCF8176912DDA4EA5 | Since: 1207
 */
export function isAPed(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAPed(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xC3D96AF45FCCEC4C | Since: 1207
 */
export function isAVehicle(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAVehicle(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x7D5B1F88E7504BBA | Since: 1207
 */
export function isDead(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityDead(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x886E37EC497200B6 | Since: 1207
 */
export function isInAir(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityInAir(_entity, undefined);
}

/**
 * Creates a spherical cone at origin that extends to surface with the angle specified. Then returns true if the entity is inside the spherical cone
 * 
 * Angle is measured in degrees.
 * 
 * Hash: 0xD3151E53134595E5 | Since: 1207
 */
export function isInAngledArea(entity: number | IEntity, originX: number, originY: number, originZ: number, edgeX: number, edgeY: number, edgeZ: number, angle: number): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityInAngledArea(_entity, originX, originY, originZ, edgeX, edgeY, edgeZ, angle, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0C2634C40A16193E | Since: 1207
 */
export function isInArea(entity: number | IEntity, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityInArea(_entity, x1, y1, z1, x2, y2, z2, false, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A5526BC09C06623 | Since: 1207
 */
export function isInVolume(entity: number | IEntity, volume: number): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityInVolume(_entity, volume, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xDDE5C125AC446723 | Since: 1207
 */
export function isInWater(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityInWater(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x140188E884645624 | Since: 1207
 */
export function isOccluded(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityOccluded(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x613C15D5D8DB781F | Since: 1207
 */
export function isOnScreen(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityOnScreen(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xDEE49D5CA6C49148 | Since: 1207
 */
export function isPlayingAnim(entity: number | IEntity, animType: number): [boolean, string, string] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityPlayingAnim(_entity, animType);
}

/**
 * No comment provided
 * 
 * Hash: 0x86468ADFA0F6B861 | Since: 1207
 */
export function isStatic(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityStatic(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x9A2304A64C3C8423 | Since: 1207
 */
export function isTouchingEntity(entity: number | IEntity, targetEntity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _targetEntity = targetEntity instanceof IEntity ? targetEntity.handle() : targetEntity;
    return IsEntityTouchingEntity(_entity, _targetEntity);
}

/**
 * No comment provided
 * 
 * Hash: 0x2AE3EBC8DEB9768B | Since: 1207
 */
export function isTouchingModel(entity: number | IEntity, modelHash: number | string): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return IsEntityTouchingModel(_entity, modelHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xF6F6AFD8D4FB2658 | Since: 1207
 */
export function isUpright(entity: number | IEntity, angle: number): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityUpright(_entity, angle);
}

/**
 * No comment provided
 * 
 * Hash: 0x109DE3DA41AAD94A | Since: 1207
 */
export function isUpsidedown(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityUpsidedown(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xFFC96ECB7FA404CA | Since: 1207
 */
export function isVisible(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityVisible(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xF213C724E77F321A | Since: 1207
 */
export function isVisibleToScript(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityVisibleToScript(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x5E1CC2E8DC3111DD | Since: 1207
 */
export function isWaitingForWorldCollision(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityWaitingForWorldCollision(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x1FF441D7954F8709 | Since: 1207
 */
export function isMapPinned(): boolean {
    return IsMapEntityPinned(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6F3068258A499E52 | Since: 1207
 */
export function pinClosestMap(modelHash: number | string, pos: Vector3, flags: number): any {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return PinClosestMapEntity(modelHash, pos.x, pos.y, pos.z, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0x9587913B9E772D29 | Since: 1207
 */
export function placeOnGroundProperly(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return PlaceEntityOnGroundProperly(_entity, false);
}

/**
 * https://github.com/femga/rdr3_discoveries/tree/master/animations
 * 
 * Hash: 0xDC6D22FAB76D4874 | Since: 1207
 */
export function playAnim(entity: number | IEntity, loop: boolean, stayInAnim: boolean, delta: number, bitset: any): [boolean, string, string] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return PlayEntityAnim(_entity, 0, loop, stayInAnim, false, delta, bitset);
}

/**
 * No comment provided
 * 
 * Hash: 0x553FA683F2BCD814 | Since: 1207
 */
export function removeForcedObject(): void {
    RemoveForcedObject(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3F38A98576F6213A | Since: 1207
 */
export function removeModelHide(): void {
    RemoveModelHide(undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x824E1C26A14CB817 | Since: 1207
 */
export function removeModelSwap(pos: Vector3, radius: number, originalModel: number | string, newModel: number | string): void {
    if (typeof originalModel === 'string') originalModel = GetHashKey(originalModel)
    if (typeof newModel === 'string') newModel = GetHashKey(newModel)
    RemoveModelSwap(pos.x, pos.y, pos.z, radius, originalModel, newModel, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x744B9EF44779D9AB | Since: 1207
 */
export function resetAlpha(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ResetEntityAlpha(_entity);
}

/**
 * Sets the loot table an entity will carry. Returns true if loot table has been successfully set. Returns false if entity is not a ped or object.
 * https://github.com/femga/rdr3_discoveries/blob/master/AI/EVENTS/loot_rewards.lua
 * 
 * Hash: 0x8C03CD6B5E0E85E8 | Since: 1207
 */
export function scriptOverrideLootTablePermanent(entity: number | IEntity, lootTable: number | string): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof lootTable === 'string') lootTable = GetHashKey(lootTable)
    return ScriptOverrideEntityLootTablePermanent(_entity, lootTable);
}

/**
 * No comment provided
 * 
 * Hash: 0x80646744FA88F9D7 | Since: 1207
 */
export function setCanAutoVaultOn(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetCanAutoVaultOnEntity(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x24AED2A608F93C4C | Since: 1207
 */
export function setCanClimbOn(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetCanClimbOnEntity(_entity, toggle);
}

/**
 * skin - everything alpha except skin
 * Set entity alpha level. Ranging from 0 to 255 but changes occur after every 20 percent (after every 51).
 * 
 * Hash: 0x0DF7692B1D9E7BA7 | Since: 1207
 */
export function setAlpha(entity: number | IEntity, alphaLevel: number, skin: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityAlpha(_entity, alphaLevel, skin);
}

/**
 * No comment provided
 * 
 * Hash: 0xACAD101E1FB66689 | Since: 1207
 */
export function setAlwaysPrerender(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityAlwaysPrerender(_entity, toggle);
}

/**
 * Makes the specified entity (ped, vehicle or object) persistent. Persistent entities will not automatically be removed by the engine.
 * 
 * Hash: 0xDC19C288082E586E | Since: 1207
 */
export function setAsMissionEntity(entity: number | IEntity, scriptHostObject: boolean, grabFromOtherScript: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityAsMissionEntity(_entity, scriptHostObject, grabFromOtherScript);
}

/**
 * Marks the specified entity (ped, vehicle or object) as no longer needed.
 * Entities marked as no longer needed, will be deleted as the engine sees fit.
 * 
 * Hash: 0x4971D2F8162B9674 | Since: 1207
 */
export function setAsNoLongerNeeded(): number {
    return SetEntityAsNoLongerNeeded();
}

/**
 * No comment provided
 * 
 * Hash: 0x0D06D522B90E861F | Since: 1207
 */
export function setCanBeDamaged(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCanBeDamaged(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x0EF1AFB18649E015 | Since: 1207
 */
export function setCanBeDamagedByRelationshipGroup(entity: number | IEntity, bCanBeDamaged: boolean, relGroup: number | string): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof relGroup === 'string') relGroup = GetHashKey(relGroup)
    SetEntityCanBeDamagedByRelationshipGroup(_entity, bCanBeDamaged, relGroup);
}

/**
 * Sets whether the entity can be targeted without being in line-of-sight.
 * 
 * Hash: 0x6D09F32E284D0FB7 | Since: 1207
 */
export function setCanBeTargetedWithoutLos(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCanBeTargetedWithoutLos(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFF83AF534156B399 | Since: 1207
 */
export function setCanOnlyBeDamagedByScriptParticipants(EntityIndex: number | IEntity, bOnlyDamagedWhenRunningScript: boolean): void {
    const _EntityIndex = EntityIndex instanceof IEntity ? EntityIndex.handle() : EntityIndex;
    Citizen.invokeNative('0xFF83AF534156B399', _EntityIndex, bOnlyDamagedWhenRunningScript);
}

/**
 * No comment provided
 * 
 * Hash: 0xF66F820909453B8C | Since: 1207
 */
export function setCollision(entity: number | IEntity, toggle: boolean, keepPhysics: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCollision(_entity, toggle, keepPhysics);
}

/**
 * No comment provided
 * 
 * Hash: 0xE0580EC84813875A | Since: 1207
 */
export function setCompletelyDisableCollision(entity: number | IEntity, toggle: boolean, keepPhysics: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCompletelyDisableCollision(_entity, toggle, keepPhysics);
}

/**
 * No comment provided
 * 
 * Hash: 0x06843DA7060A026B | Since: 1207
 */
export function setCoords(entity: number | IEntity, pos: Vector3, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCoords(_entity, pos.x, pos.y, pos.z, xAxis, yAxis, zAxis, clearArea);
}

/**
 * Axis - Invert Axis Flags
 * 
 * Hash: 0x239A3351AC1DA385 | Since: 1207
 */
export function setCoordsNoOffset(entity: number | IEntity, pos: Vector3, xAxis: boolean, yAxis: boolean, zAxis: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCoordsNoOffset(_entity, pos.x, pos.y, pos.z, xAxis, yAxis, zAxis);
}

/**
 * No comment provided
 * 
 * Hash: 0xFBFC4473F66CE344 | Since: 1207
 */
export function setDynamic(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityDynamic(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x0CEDB728A1083FA7 | Since: 1207
 */
export function setHasGravity(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityHasGravity(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xCF2B9C0645C4651B | Since: 1207
 */
export function setHeading(entity: number | IEntity, heading: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityHeading(_entity, heading);
}

/**
 * Sets the entity's health. healthAmount sets the health value to that, and sets the maximum health core value. Setting healthAmount to 0 will kill the entity. entityKilledBy parameter can also be 0
 * 
 * Hash: 0xAC2767ED8BDFAB15 | Since: 1207
 */
export function setHealth(entity: number | IEntity, healthAmount: number, entityKilledBy: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _entityKilledBy = entityKilledBy instanceof IEntity ? entityKilledBy.handle() : entityKilledBy;
    SetEntityHealth(_entity, healthAmount, _entityKilledBy);
}

/**
 * Sets a ped or an object totally invincible. It doesn't take any kind of damage. Peds will not ragdoll on explosions.
 * 
 * Hash: 0xA5C38736C426FCB8 | Since: 1207
 */
export function setInvincible(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityInvincible(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x0A5D170C44CB2189 | Since: 1207
 */
export function setIsTargetPriority(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityIsTargetPriority(_entity, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x9B9EE31AED48072E | Since: 1207
 */
export function setLoadCollisionFlag(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityLoadCollisionFlag(_entity, toggle);
}

/**
 * LOD distance can be 0 to 0xFFFF (higher values will result in 0xFFFF) as it is actually stored as a 16-bit value (aka uint16_t).
 * 
 * Hash: 0x5FB407F0A7C877BF | Since: 1207
 */
export function setLodDist(entity: number | IEntity, value: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityLodDist(_entity, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x166E7CF68597D8B5 | Since: 1207
 */
export function setMaxHealth(entity: number | IEntity, value: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityMaxHealth(_entity, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x516C6ABD18322B63 | Since: 1207
 */
export function setMotionBlur(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityMotionBlur(_entity, toggle);
}

/**
 * Old name: _SET_ENTITY_DECALS_DISABLED
 * 
 * Hash: 0xC64E597783BE9A1D | Since: 1207
 */
export function setNoweapondecals(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityNoweapondecals(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE037BF068223C38D | Since: 1207
 */
export function setNoCollisionEntity(entity1: number | IEntity, entity2: number | IEntity, thisFrameOnly: boolean): void {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    SetEntityNoCollisionEntity(_entity1, _entity2, thisFrameOnly);
}

/**
 * No comment provided
 * 
 * Hash: 0x473598683095D430 | Since: 1207
 */
export function setOnlyDamagedByPlayer(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityOnlyDamagedByPlayer(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x6C1F6AA2F0ADD104 | Since: 1207
 */
export function setOnlyDamagedByRelationshipGroup(entity: number | IEntity, relationshipGroup: number | string): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof relationshipGroup === 'string') relationshipGroup = GetHashKey(relationshipGroup)
    SetEntityOnlyDamagedByRelationshipGroup(_entity, false, relationshipGroup);
}

/**
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/ENTITY_PROOFS
 * BOOL p2: handles an additional special proofs flag, so it simply indicates whether it should be enabled or disabled, not sure what exactly it proofs the entity from though
 * 
 * Hash: 0xFAEE099C6F890BB8 | Since: 1207
 */
export function setProofs(entity: number | IEntity, proofsBitset: number, specialFlag: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityProofs(_entity, proofsBitset, specialFlag);
}

/**
 * No comment provided
 * 
 * Hash: 0x100E7007D13E3687 | Since: 1207
 */
export function setQuaternion(entity: number | IEntity, pos: Vector3, w: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityQuaternion(_entity, pos.x, pos.y, pos.z, w);
}

/**
 * No comment provided
 * 
 * Hash: 0x85B8A7534E44BC23 | Since: 1207
 */
export function setRenderScorched(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityRenderScorched(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x850C940EE3E7B8B5 | Since: 1207
 */
export function setRequiresMoreExpensiveRiverCheck(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityRequiresMoreExpensiveRiverCheck(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9CC8314DFEDE441E | Since: 1207
 */
export function setRotation(entity: number | IEntity, pitch: number, roll: number, yaw: number, rotationOrder: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityRotation(_entity, pitch, roll, yaw, rotationOrder, false);
}

/**
 * Old name: _SET_ENTITY_CLEANUP_BY_ENGINE
 * 
 * Hash: 0x740CB4F3F602C9F4 | Since: 1207
 */
export function setShouldFreezeWaitingOnCollision(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityShouldFreezeWaitingOnCollision(_entity, toggle);
}

/**
 * Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
 * 
 * Hash: 0x1C99BB7B6E96D16F | Since: 1207
 */
export function setVelocity(entity: number | IEntity, pos: Vector3): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityVelocity(_entity, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x1794B4FCC84D812F | Since: 1207
 */
export function setVisible(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityVisible(_entity, toggle);
}

/**
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 * 
 * Hash: 0x3AE22DEB5BA5A3E6 | Since: 1207
 */
export function setObjectAsNoLongerNeeded(): number {
    return SetObjectAsNoLongerNeeded();
}

/**
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 * 
 * Hash: 0x2595DD4236549CE3 | Since: 1207
 */
export function setPedAsNoLongerNeeded(): number {
    return SetPedAsNoLongerNeeded();
}

/**
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 * 
 * Hash: 0x629BFA74418D6239 | Since: 1207
 */
export function setVehicleAsNoLongerNeeded(): number {
    return SetVehicleAsNoLongerNeeded();
}

/**
 * No comment provided
 * 
 * Hash: 0x786591D986DE9159 | Since: 1207
 */
export function stopAnim(entity: number | IEntity, animation: string, animGroup: string): any {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StopEntityAnim(_entity, animation, animGroup, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x3546FAB293FF2981 | Since: 1207
 */
export function wouldBeOccluded(entityModelHash: number | string, pos: Vector3): boolean {
    if (typeof entityModelHash === 'string') entityModelHash = GetHashKey(entityModelHash)
    return WouldEntityBeOccluded(entityModelHash, pos.x, pos.y, pos.z, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x002AAC783ED323ED | Since: 1207
 */
export function _0x002AAC783ED323ED(): void {
    Citizen.invokeNative('0x002AAC783ED323ED', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x007AAC783ED323ED | Since: 1207
 */
export function _0x007AAC783ED323ED(): void {
    Citizen.invokeNative('0x007AAC783ED323ED', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0939E773925C4719 | Since: 1207
 */
export function _0x0939E773925C4719(): void {
    Citizen.invokeNative('0x0939E773925C4719');
}

/**
 * No comment provided
 * 
 * Hash: 0x0CCEFC6C2C95DA2A | Since: 1207
 */
export function _0x0CCEFC6C2C95DA2A(): any {
    return Citizen.invokeNative('0x0CCEFC6C2C95DA2A', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0DB41D59E0F1502B | Since: 1207
 */
export function _0x0DB41D59E0F1502B(): void {
    Citizen.invokeNative('0x0DB41D59E0F1502B', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0FD7D7C232876E72 | Since: 1207
 */
export function _0x0FD7D7C232876E72(): void {
    Citizen.invokeNative('0x0FD7D7C232876E72', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x16908E859C3AB698 | Since: 1207
 */
export function _0x16908E859C3AB698(): void {
    Citizen.invokeNative('0x16908E859C3AB698', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x188736456D1DEDE6 | Since: 1207
 */
export function _0x188736456D1DEDE6(): any {
    return Citizen.invokeNative('0x188736456D1DEDE6', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x20FAEE47427A4497 | Since: 1207
 */
export function _0x20FAEE47427A4497(): void {
    Citizen.invokeNative('0x20FAEE47427A4497');
}

/**
 * No comment provided
 * 
 * Hash: 0x2A77EF9BEC8518F4 | Since: 1207
 */
export function _0x2A77EF9BEC8518F4(): any {
    return Citizen.invokeNative('0x2A77EF9BEC8518F4', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2D40BCBFE9305DEA | Since: 1207
 */
export function _0x2D40BCBFE9305DEA(): void {
    Citizen.invokeNative('0x2D40BCBFE9305DEA', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x350E9211074955AF | Since: 1207
 */
export function _0x350E9211074955AF(): any {
    return Citizen.invokeNative('0x350E9211074955AF', undefined, undefined);
}

/**
 * Called if entity is in water and submerged level is larger than 1f. If CARRYING_FLAG_FORCE_ALLOW_WARP_TO_SAFE_GROUND_LOCATION is true, it gets disabled as well.
 * 
 * Hash: 0x371D179701D9C082 | Since: 1436
 */
export function _0x371D179701D9C082(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x371D179701D9C082', _entity);
}

/**
 * Seems to return true if entity is burned / scorched
 * _GET_ENTITY_*
 * 
 * Hash: 0x37B01666BAE8F7EF | Since: 1207
 */
export function _0x37B01666BAE8F7EF(entity: number | IEntity): any {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x37B01666BAE8F7EF', _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x37CEB637BA3B1A47 | Since: 1207
 */
export function _0x37CEB637BA3B1A47(): void {
    Citizen.invokeNative('0x37CEB637BA3B1A47', undefined);
}

/**
 * Used when checking if ped is in water
 * 
 * Hash: 0x383F64263F946E45 | Since: 1207
 */
export function _0x383F64263F946E45(entity: number | IEntity, ped: number | IPed): [boolean, number] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x383F64263F946E45', _entity, 0, _ped, undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x3AB3A77672F6473F | Since: 1207
 */
export function _0x3AB3A77672F6473F(): Vector3 {
    return new Vector3(Citizen.invokeNative('0x3AB3A77672F6473F', undefined, undefined, undefined, undefined));
}

/**
 * Used in Script Function DUELING_DID_PLAYER_DISARM_OPPONENT
 * 
 * Hash: 0x3EC28DA1FFAC9DDD | Since: 1207
 */
export function _0x3EC28DA1FFAC9DDD(entity1: number | IEntity, entity2: number | IEntity): boolean {
    const _entity1 = entity1 instanceof IEntity ? entity1.handle() : entity1;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    return Citizen.invokeNative('0x3EC28DA1FFAC9DDD', _entity1, _entity2, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3F08C6163A4AB1D6 | Since: 1207
 */
export function _0x3F08C6163A4AB1D6(): void {
    Citizen.invokeNative('0x3F08C6163A4AB1D6', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x56E0735D6273B227 | Since: 1207
 */
export function _0x56E0735D6273B227(): void {
    Citizen.invokeNative('0x56E0735D6273B227', undefined, undefined);
}

/**
 * _REMOVE_DECALS_* - _REMOVE_FORCED*
 * 
 * Hash: 0x5826EFD6D73C4DE5 | Since: 1207
 */
export function _0x5826EFD6D73C4DE5(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x5826EFD6D73C4DE5', _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x582F73ACFE969571 | Since: 1207
 */
export function _0x582F73ACFE969571(): any {
    return Citizen.invokeNative('0x582F73ACFE969571', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6C31B06E91518269 | Since: 1207
 */
export function _0x6C31B06E91518269(): void {
    Citizen.invokeNative('0x6C31B06E91518269', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6D58167F62238284 | Since: 1207
 */
export function _0x6D58167F62238284(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0x6D58167F62238284', _vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x7A49D40DE437BC8D | Since: 1207
 */
export function _0x7A49D40DE437BC8D(): void {
    Citizen.invokeNative('0x7A49D40DE437BC8D', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7F20092547B4DDEA | Since: 1207
 */
export function _0x7F20092547B4DDEA(): void {
    Citizen.invokeNative('0x7F20092547B4DDEA', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x80FDEB3A9E9AA578 | Since: 1207
 */
export function _0x80FDEB3A9E9AA578(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x80FDEB3A9E9AA578', _entity, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x898586729DB5221D | Since: 1207
 */
export function _0x898586729DB5221D(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x898586729DB5221D', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x8E10DF0FFA63FB65 | Since: 1207
 */
export function _0x8E10DF0FFA63FB65(): any {
    return Citizen.invokeNative('0x8E10DF0FFA63FB65', undefined, undefined, undefined, undefined, undefined);
}

/**
 * Used in Script Function GENERIC_ITEM_HAS_ANIM_COMPLETED
 * _GET_ENTITY_*
 * 
 * Hash: 0x8E46E18AA828334F | Since: 1207
 */
export function _0x8E46E18AA828334F(entity: number | IEntity, animDict: string, animClip: string): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x8E46E18AA828334F', _entity, animDict, animClip);
}

/**
 * No comment provided
 * 
 * Hash: 0x978AA2323ED32209 | Since: 1207
 */
export function _0x978AA2323ED32209(): void {
    Citizen.invokeNative('0x978AA2323ED32209', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9C6906EF8CB20C5F | Since: 1436
 */
export function _0x9C6906EF8CB20C5F(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x9C6906EF8CB20C5F', _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xA48E4801DEBDF7E4 | Since: 1207
 */
export function _0xA48E4801DEBDF7E4(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xA48E4801DEBDF7E4', _entity, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xA9E6D8F2DDFC4DB9 | Since: 1207
 */
export function _0xA9E6D8F2DDFC4DB9(): void {
    Citizen.invokeNative('0xA9E6D8F2DDFC4DB9', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xAAACB74442C1BED3 | Since: 1207
 */
export function _0xAAACB74442C1BED3(): any {
    return Citizen.invokeNative('0xAAACB74442C1BED3', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xAF72EC7E1B54539B | Since: 1311
 */
export function _0xAF72EC7E1B54539B(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0xAF72EC7E1B54539B', _entity);
}

/**
 * SET_ENTITY_LO*
 * 
 * Hash: 0xAF7F3099B9FEB535 | Since: 1207
 */
export function _0xAF7F3099B9FEB535(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xAF7F3099B9FEB535', _entity, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xB16C780C51E51E2B | Since: 1207
 */
export function _0xB16C780C51E51E2B(): any {
    return Citizen.invokeNative('0xB16C780C51E51E2B', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB38A29CCD5447783 | Since: 1207
 */
export function _0xB38A29CCD5447783(): void {
    Citizen.invokeNative('0xB38A29CCD5447783', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBA2A089E60ED1163 | Since: 1207
 */
export function _0xBA2A089E60ED1163(): any {
    return Citizen.invokeNative('0xBA2A089E60ED1163', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBD94CECFB2D65119 | Since: 1207
 */
export function _0xBD94CECFB2D65119(): void {
    Citizen.invokeNative('0xBD94CECFB2D65119', undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * SET_ENTITY_A*
 * 
 * Hash: 0xC0EDEF16D90661EE | Since: 1207
 */
export function _0xC0EDEF16D90661EE(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xC0EDEF16D90661EE', _entity, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xC2E71D7E0A7B4C89 | Since: 1207
 */
export function _0xC2E71D7E0A7B4C89(): any {
    return Citizen.invokeNative('0xC2E71D7E0A7B4C89', undefined);
}

/**
 * Returns BOOL in ida
 * 
 * Hash: 0xC3ABCFBC7D74AFA5 | Since: 1207
 */
export function _0xC3ABCFBC7D74AFA5(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xC3ABCFBC7D74AFA5', _ped, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC6A1A3D63F122DE7 | Since: 1311
 */
export function _0xC6A1A3D63F122DE7(): void {
    Citizen.invokeNative('0xC6A1A3D63F122DE7', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC76E94A78127412B | Since: 1207
 */
export function _0xC76E94A78127412B(): void {
    Citizen.invokeNative('0xC76E94A78127412B', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCDB682BB47C02F0A | Since: 1207
 */
export function _0xCDB682BB47C02F0A(entity: number | IEntity, p1: number | string): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    Citizen.invokeNative('0xCDB682BB47C02F0A', _entity, p1);
}

/**
 * No comment provided
 * 
 * Hash: 0xD21C7418C590BB40 | Since: 1207
 */
export function _0xD21C7418C590BB40(): any {
    return Citizen.invokeNative('0xD21C7418C590BB40', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD45BB89B53FC0CFD | Since: 1207
 */
export function _0xD45BB89B53FC0CFD(): void {
    Citizen.invokeNative('0xD45BB89B53FC0CFD', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD4636C2EDB0DEA8A | Since: 1207
 */
export function _0xD4636C2EDB0DEA8A(): any {
    return Citizen.invokeNative('0xD4636C2EDB0DEA8A', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD46BF94C4C66FAB0 | Since: 1207
 */
export function _0xD46BF94C4C66FAB0(): any {
    return Citizen.invokeNative('0xD46BF94C4C66FAB0', undefined, undefined, undefined, undefined);
}

/**
 * Hardcoded to return zero/false.
 * 
 * Hash: 0xDF8E49EA89A01DB1 | Since: 1207
 */
export function _0xDF8E49EA89A01DB1(): any {
    return Citizen.invokeNative('0xDF8E49EA89A01DB1', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDFC2B226D56D85F6 | Since: 1207
 */
export function _0xDFC2B226D56D85F6(): number {
    return Citizen.invokeNative('0xDFC2B226D56D85F6', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE19035EB65AB2932 | Since: 1207
 */
export function _0xE19035EB65AB2932(): void {
    Citizen.invokeNative('0xE19035EB65AB2932', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE31FC20319874CB3 | Since: 1207
 */
export function _0xE31FC20319874CB3(): any {
    return Citizen.invokeNative('0xE31FC20319874CB3', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE75EEA8DB59A9F39 | Since: 1207
 */
export function _0xE75EEA8DB59A9F39(): void {
    Citizen.invokeNative('0xE75EEA8DB59A9F39', undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE9E7A0BAC7F57746 | Since: 1207
 */
export function _0xE9E7A0BAC7F57746(): void {
    Citizen.invokeNative('0xE9E7A0BAC7F57746', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEAB3D91D30A344F1 | Since: 1207
 */
export function _0xEAB3D91D30A344F1(): void {
    Citizen.invokeNative('0xEAB3D91D30A344F1', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEF259AA1E097E0AD | Since: 1207
 */
export function _0xEF259AA1E097E0AD(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xEF259AA1E097E0AD', _entity, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF41E2979D5BC5370 | Since: 1207
 */
export function _0xF41E2979D5BC5370(): void {
    Citizen.invokeNative('0xF41E2979D5BC5370', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF59FDE7B4D31A630 | Since: 1207
 */
export function _0xF59FDE7B4D31A630(): any {
    return Citizen.invokeNative('0xF59FDE7B4D31A630', undefined);
}

/**
 * SET_ENTITY_LO*
 * 
 * Hash: 0xFF9965C47FA404DA | Since: 1207
 */
export function _0xFF9965C47FA404DA(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xFF9965C47FA404DA', _entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1AD922AB5038DEF3 | Since: 1207
 */
export function addTrackingTrails(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    AddEntityTrackingTrails(_entity);
}

/**
 * Attach an entity to coordinates physically better name may be perfered? seems to be used with boats `p_skiff02x` ? The last 6 params are always 0 everywhere in the base code. p7 = 500.0 some kind of time? p8 =1
 * 
 * Hash: 0x445D7D8EA66E373E | Since: 1207
 */
export function attachToCoordsPhysically(entity: number | IEntity, pos: Vector3, offsetx: number, offsety: number, offsetz: number, timer: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x445D7D8EA66E373E', _entity, pos.x, pos.y, pos.z, offsetx, offsety, offsetz, timer, false, 0, 0, 0, 0, 0, 0);
}

/**
 * Alters entity's health by 'amount'. Can be negative (to drain health).
 * In the scripts entity2 and weaponHash are unused (zero).
 * 
 * Hash: 0x835F131E7DC8F97A | Since: 1207
 */
export function changeHealth(entity: number | IEntity, amount: number, entity2: number | IEntity, weaponHash: number | string): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _entity2 = entity2 instanceof IEntity ? entity2.handle() : entity2;
    if (typeof weaponHash === 'string') weaponHash = GetHashKey(weaponHash)
    return ChangeEntityHealth(_entity, amount, _entity2, weaponHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x29BA9F78321E5A6C | Since: 1207
 */
export function createFootpathTrail(waypointRecord: string, bUseSnowOffset: boolean, bInit: boolean): any {
    return CreateFootpathTrail(undefined, waypointRecord, bUseSnowOffset, 0, 0, undefined, undefined, undefined, undefined, undefined, undefined, bInit);
}

/**
 * No comment provided
 * 
 * Hash: 0x0D0DB2B6AF19A987 | Since: 1207
 */
export function deleteCarriable(): number {
    return DeleteCarriable();
}

/**
 * Must be called from a background script, otherwise it will do nothing.
 * 
 * Hash: 0x5E94EA09E7207C16 | Since: 1207
 */
export function delete2(): number {
    return DeleteEntity2();
}

/**
 * Returns true if calling script owns specified entity
 * 
 * Hash: 0x88AD6CC10D8D35B2 | Since: 1207
 */
export function doesThreadOwnThis(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DoesThreadOwnThisEntity(_entity);
}

/**
 * Enables or disables automatic passenger population on a specific train wagon (carriage).
 * 
 * When toggle == true, the game keeps this wagon filled with ambient passengers.
 * If a passenger ped is deleted or removed from the wagon, a new ped is spawned almost
 * immediately to occupy that seat.
 * 
 * When toggle == false, the engine stops auto-filling this wagon. After you delete or
 * remove the existing passengers, no new peds will spawn for that wagon until you enable
 * it again with true.
 * 
 * Hash: 0x119A5714578F4E05 | Since: 1207
 */
export function forceTrainWagonPopulation(carriage: number | IEntity, force: boolean): void {
    const _carriage = carriage instanceof IEntity ? carriage.handle() : carriage;
    Citizen.invokeNative('0x119A5714578F4E05', _carriage, force);
}

/**
 * Returns a hash of an entity's name. (Alternative Name: _GET_ENTITY_PROMPT_NAME_HASH)
 * 
 * Hash: 0x31FEF6A20F00B963 | Since: 1207
 */
export function getCarriableFrom(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetCarriableFromEntity(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x886171A12F400B89 | Since: 1207
 */
export function getEntitiesInVolume(volume: number, itemSet: any, entityType: number): number {
    return GetEntitiesInVolume(volume, itemSet, entityType);
}

/**
 * No comment provided
 * 
 * Hash: 0x59B57C4B06531E1E | Since: 1207
 */
export function getEntitiesNearPoint(pos: Vector3, radius: number, itemSet: any): number {
    return GetEntitiesNearPoint(pos.x, pos.y, pos.z, radius, itemSet, 0);
}

/**
 * Returns a normalized value between 0.0f and 1.0f. You can get the actual anim time by multiplying this by GET_ANIM_DURATION
 * 
 * Hash: 0x627520389E288A73 | Since: 1207
 */
export function getAnimCurrentTime(entity: number | IEntity): [number, string, string] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityAnimCurrentTime(_entity);
}

/**
 * Params: p1 = 0 in R* Scripts (GET_DOOR_ENTITY_FROM_ID)
 * https://github.com/femga/rdr3_discoveries/blob/master/doorHashes/doorhashes.lua
 * 
 * Hash: 0xF7424890E4A094C0 | Since: 1207
 */
export function getByDoorhash(doorHash: number | string): number {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    return GetEntityByDoorhash(doorHash, 0);
}

/**
 * flagId: see _SET_ENTITY_CARRYING_FLAG
 * 
 * Hash: 0x808077647856DE62 | Since: 1207
 */
export function getCarryingFlag(entity: number | IEntity, flagId: number): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityCarryingFlag(_entity, flagId);
}

/**
 * Returns zero if the entity is not a carriable
 * 
 * Hash: 0x0FD25587BB306C86 | Since: 1207
 */
export function getCarryConfig(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityCarryConfig(_entity);
}

/**
 * Gets the entity's forward vector in YX(Z) eulers. Similar to GET_ENTITY_FORWARD_VECTOR
 * 
 * Hash: 0x935A30AA88FB1014 | Since: 1207
 */
export function getForwardVectorYx(entity: number | IEntity): Vector3 {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(GetEntityForwardVectorYx(_entity));
}

/**
 * Returns (CUR_HEALTH / MAX_HEALTH)
 * 
 * Hash: 0x96C638784DB4C815 | Since: 1207
 */
export function getHealthFloat(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityHealthFloat(_entity);
}

/**
 * Returns the entity that is looting a ped but only while the looting is active
 * 
 * Hash: 0xEF2D9ED7CE684F08 | Since: 1207
 */
export function getLootingPed(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0xEF2D9ED7CE684F08', _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x2A08A32B6D49906F | Since: 1207
 */
export function getScript(entity: number | IEntity): [number, any] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityScript(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xE12F56CB25D9CE23 | Since: 1207
 */
export function getThreatTier(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityThreatTier(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xF3FDA9A617A15145 | Since: 1207
 */
export function getWorldPositionOfDimensions(entity: number | IEntity): [Vector3, Vector3] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetEntityWorldPositionOfDimensions(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xC346A546612C49A9 | Since: 1207
 */
export function getIsBird(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetIsBird(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x255B6DB4E3AD3C3E | Since: 1207
 */
export function getIsCarriablePelt(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetIsCarriablePelt(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x5594AFE9DE0C01B7 | Since: 1207
 */
export function getIsPredator(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetIsPredator(_entity);
}

/**
 * Return the offset from the entity for the selected bone index
 * 
 * Hash: 0x5E214112806591EA | Since: 1207
 */
export function getOffsetFromBone(entity: number | IEntity, boneIndex: number): Vector3 {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return new Vector3(Citizen.invokeNative('0x5E214112806591EA', _entity, boneIndex));
}

/**
 * Valid indices: 0 - 3
 * Index 1 always returns a `hogtied` config, doesn't matter the entity.
 * It's for humans only and the ped must be resurrected first if it's dead.
 * 
 * Hash: 0x34F008A7E48C496B | Since: 1207
 */
export function getOptimalCarryConfig(entity: number | IEntity, index: number): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetOptimalCarryConfig(_entity, index);
}

/**
 * Returns the ped's animal type hash: https://alloc8or.re/rdr3/doc/enums/eAnimalType.txt
 * Combine this with GET_STRING_FROM_HASH_KEY to display localized entity names
 * 
 * Hash: 0x964000D355219FC0 | Since: 1207
 */
export function getPedAnimalType(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedAnimalType(_ped);
}

/**
 * Get the pelt TXDs by the animal albedo hash, returns: normal map hash, material hash and albedo hash, this native needs dataview to be passed in, then use it to get the pelt TXDs
 * 
 * Hash: 0x5744562E973E33CD | Since: 1207
 */
export function getPeltTexture(albedoHash: number | string, txdAlbedoDV: any, txdNormalMapDV: any, txdMaterialDV: any): boolean {
    if (typeof albedoHash === 'string') albedoHash = GetHashKey(albedoHash)
    return Citizen.invokeNative('0x5744562E973E33CD', albedoHash, txdAlbedoDV, txdNormalMapDV, txdMaterialDV, 0);
}

/**
 * returns the albedo hash by carriable hash, use Citizen.pointerValueInt() as last parameter
 * 
 * Hash: 0x120376C23F019C6C | Since: 1207
 */
export function getPeltTextureByCarriable(carriableHash: number | string): [boolean, number] {
    if (typeof carriableHash === 'string') carriableHash = GetHashKey(carriableHash)
    return Citizen.invokeNative('0x120376C23F019C6C', carriableHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x4735E2A4BB83D9DA | Since: 1207
 */
export function getPinnedMap(): number {
    return GetPinnedMapEntity(undefined);
}

/**
 * Returns false if entity is not a ped or object.
 * 
 * Hash: 0x1E804EA9B12030A4 | Since: 1207
 */
export function getScriptOverrideLootTablePermanent(entity: number | IEntity): [boolean, number] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetScriptOverrideEntityLootTablePermanent(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x5AFFA9DDC87846F8 | Since: 1207
 */
export function isCarriableModel(model: number | string): boolean {
    if (typeof model === 'string') model = GetHashKey(model)
    return IsCarriableModel(model);
}

/**
 * Getter for FREEZE_ENTITY_POSITION
 * 
 * Hash: 0x083D497D57B7400F | Since: 1207
 */
export function isFrozen(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityFrozen(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x8DE41E9902E85756 | Since: 1207
 */
export function isFullyLooted(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityFullyLooted(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x857ACB0AB4BD0D55 | Since: 1207
 */
export function isOnTrainTrack(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityOnTrainTrack(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xA7E51B53309EAC97 | Since: 1207
 */
export function isOwnedByPersistenceSystem(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityOwnedByPersistenceSystem(_entity);
}

/**
 * Params: p1 (probably animType) = 1, 0
 * 
 * Hash: 0x0B7CB1300CBFE19C | Since: 1207
 */
export function isPlayingAnyAnim(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityPlayingAnyAnim(_entity, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD4E5C1E93C466127 | Since: 1207
 */
export function isUnderwater(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityUnderwater(_entity, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC8CCDB712FBCBA92 | Since: 1207
 */
export function isTrackedVisible(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsTrackedEntityVisible(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x36EB4D34D4A092C5 | Since: 1207
 */
export function pauseTracking(entity: number | IEntity, pause: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    PauseEntityTracking(_entity, pause);
}

/**
 * No comment provided
 * 
 * Hash: 0xA88E215CEB0435C0 | Since: 1207
 */
export function requestLootList(mount: number | IPed, visiblelootslotrequestType: number | string, flag: number): [boolean, any] {
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    if (typeof visiblelootslotrequestType === 'string') visiblelootslotrequestType = GetHashKey(visiblelootslotrequestType)
    return RequestEntityLootList(_mount, visiblelootslotrequestType, flag, 0, false);
}

/**
 * Alternative Name: _GET_ENTITY_FROM_MAP_OBJECT; You can get existing objects and manipulate them using this native.
 * 
 * Hash: 0x66B2B83B94B22458 | Since: 1207
 */
export function searchBuildingPoolForWithThisModel(modelHash: number | string): number {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return SearchBuildingPoolForEntityWithThisModel(modelHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x11CDABDC7783B2BC | Since: 1207
 */
export function setAnimCurrentTime(entity: number | IEntity, time: number): [string, string] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return SetEntityAnimCurrentTime(_entity, time);
}

/**
 * No comment provided
 * 
 * Hash: 0xEAA885BA3CEA4E4A | Since: 1207
 */
export function setAnimSpeed(entity: number | IEntity, speedMultiplier: number): [string, string] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return SetEntityAnimSpeed(_entity, speedMultiplier);
}

/**
 * Changes type and quality of skins
 * type hashes: https://pastebin.com/C1WvQjCy
 * 
 * Hash: 0x399657ED871B3A6C | Since: 1207
 */
export function setCarcassType(entity: number | IEntity, _type: number | string): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof _type === 'string') _type = GetHashKey(_type)
    SetEntityCarcassType(_entity, _type);
}

/**
 * flagId: https://github.com/femga/rdr3_discoveries/tree/master/AI/CARRYING_FLAGS
 * https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CCarryingFlags__Flags
 * 
 * enum eCarryingFlag
 * {
 * CARRYING_FLAG_CAN_BE_CUT_FREE = 1,
 * CARRYING_FLAG_CAN_BE_CARRIED_ON_FOOT = 2,
 * CARRYING_FLAG_CAN_BE_DROPPED = 4,
 * CARRYING_FLAG_CAN_BE_CARRIED_WHEN_DEAD = 7,
 * CARRYING_FLAG_CAN_CARRY_ANYTHING = 9,
 * CARRYING_FLAG_DISABLE_PROMPT_LOS_CHECKS = 19,
 * CARRYING_FLAG_FORCE_ALLOW_WARP_TO_SAFE_GROUND_LOCATION = 23,
 * CARRYING_FLAG_PICKUPS_IGNORE_HEIGHT_RESTRICTIONS = 26,
 * CARRYING_FLAG_CLEAN_UP_WHEN_NOT_CARRIED = 27,
 * CARRYING_FLAG_BLOCK_KNOCK_OFF_PED_VARIATIONS_FROM_CARRIABLE_INTERACTIONS = 29,
 * CARRYING_FLAG_HIT_WHEN_CARRIABLE = 31,
 * CARRYING_FLAG_DISABLE_CARRIABLE_INTERACTIONS_ON_THIS_MOUNT = 34,
 * CARRYING_FLAG_FORCE_HIDE_PROMPT_GROUP = 37,
 * };
 * 
 * Hash: 0x18FF3110CF47115D | Since: 1207
 */
export function setCarryingFlag(entity: number | IEntity, flagId: number, value: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCarryingFlag(_entity, flagId, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x203BEFFDBE12E96A | Since: 1207
 */
export function setCoordsAndHeading(entity: number | IEntity, pos: Vector3, heading: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCoordsAndHeading(_entity, pos.x, pos.y, pos.z, heading, xAxis, yAxis, zAxis);
}

/**
 * No comment provided
 * 
 * Hash: 0x0918E3565C20F03C | Since: 1207
 */
export function setCoordsAndHeadingNoOffset(entity: number | IEntity, pos: Vector3, heading: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCoordsAndHeadingNoOffset(_entity, pos.x, pos.y, pos.z, heading, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x482D17E45665DA44 | Since: 1207
 */
export function setCustomPickupRadius(entity: number | IEntity, radius: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityCustomPickupRadius(_entity, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0xA91E6CF94404E8C9 | Since: 1207
 */
export function setFadeIn(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityFadeIn(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x6BCF5F3D8FFE988D | Since: 1207
 */
export function setFullyLooted(entity: number | IEntity, looted: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityFullyLooted(_entity, looted);
}

/**
 * No comment provided
 * 
 * Hash: 0xEBDC12861D079ABA | Since: 1207
 */
export function setLightsEnabled(entity: number | IEntity, enabled: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityLightsEnabled(_entity, enabled);
}

/**
 * tier: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eEntityThreatTier
 * 
 * Hash: 0x4B436BAC8CBE9B07 | Since: 1207
 */
export function setThreatTier(entity: number | IEntity, tier: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityThreatTier(_entity, tier, false);
}

/**
 * sets the fill in state for some objects like for the stew, coffee mug ,poker chips, jugs ? P1 is either 0 or 2 p2 seems to be a label/name p3 is the fill in state, max seems to be for some 3.0 (most is 1.0) - 0.0
 * heres some of the labels/names found
 * tumbler_fill, Canvas, Stew_Fill, from Chip01_Ctrl to Chip10_Ctrl, from empty_jug01_Ctrl to empty_jug20_Ctrl, from full_jug01_Ctrl to full_jug20_Ctrl, CTRL_cupFill, Food_DOF_Fill, from WhiteChip_Ctrl_0 to WhiteChip_Ctrl_10, from BlueChip_Ctrl_0 to BlueChip_Ctrl_10, from BlackChip_Ctrl_0 to BlackChip_Ctrl_10, from RedChip_Ctrl_0 to RedChip_Ctrl_10,
 * 
 * Hash: 0x669655FFB29EF1A9 | Since: 1207
 */
export function setMaterialFillLevelFor(entity: number | IEntity, expressionType: number, fillState: number): string {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x669655FFB29EF1A9', _entity, expressionType, fillState);
}

/**
 * Set the pelt texture to the object, by albedo hash and inventory item hash
 * Examples: object: P_CS_PELT_MEDLARGE  albedo: a_c_boar_01_head_000_c0_000_ab, inventoryItem: PROVISION_BOAR_HIDE_POOR
 * 
 * Hash: 0xDD03FC2089AD093C | Since: 1207
 */
export function setPeltTexture(_object: number | IObject, inventoryItem: number | string, albedo: number | string): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    if (typeof inventoryItem === 'string') inventoryItem = GetHashKey(inventoryItem)
    if (typeof albedo === 'string') albedo = GetHashKey(albedo)
    Citizen.invokeNative('0xDD03FC2089AD093C', __object, inventoryItem, albedo, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD2B9C78537ED5759 | Since: 1207
 */
export function unpinMap(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    UnpinMapEntity(_entity);
}

