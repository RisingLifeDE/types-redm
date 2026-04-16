import { Vector3, IEntity, IPed, IPlayer, IVehicle, IObject } from '@risinglife/redm-shared';
/**
 * Same as SET_PED_ARMOUR, but ADDS 'amount' to the armor the Ped already has.
 *
 * Hash: 0x5BA652A0CD14DF2F | Since: 1207
 */
export function addArmourTo(ped, amount) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    AddArmourToPed(_ped, amount);
}
/**
 * No comment provided
 *
 * Hash: 0x4E23CD07BD161E06 | Since: 1207
 */
export function addCustomFormationLocation(groupId, pos, position) {
    AddCustomFormationLocation(groupId, pos.x, pos.y, pos.z, position);
}
/**
 * No comment provided
 *
 * Hash: 0xB05945C1E9E60D91 | Since: 1207
 */
export function addFormationLocation(groupId) {
    return AddFormationLocation(groupId, 0, 0, 0);
}
/**
 * The hash of the created relationship group is output in the second parameter.
 *
 * Hash: 0xF372BC22FCB88606 | Since: 1207
 */
export function addRelationshipGroup(groupHash) {
    if (typeof groupHash === 'string')
        groupHash = GetHashKey(groupHash);
    return AddRelationshipGroup(groupHash);
}
/**
 * blockingFlags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eScenarioBlockingFlags
 *
 * Hash: 0x1B5C85C612E5256E | Since: 1207
 */
export function addScenarioBlockingArea(x1, y1, z1, x2, y2, z2, blockingFlags) {
    return AddScenarioBlockingArea(x1, y1, z1, x2, y2, z2, false, blockingFlags);
}
/**
 * damages a ped with the given amount
 *
 * Hash: 0x697157CED63F18D4 | Since: 1207
 */
export function applyDamageTo(ped, damageAmount, damageArmour, boneId, pedKiller) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _pedKiller = pedKiller instanceof IPed ? pedKiller.handle() : pedKiller;
    ApplyDamageToPed(_ped, damageAmount, damageArmour, boneId, _pedKiller);
}
/**
 * No comment provided
 *
 * Hash: 0xEF0D582CBF2D9B0F | Since: 1207
 */
export function applyBloodSpecific(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return ApplyPedBloodSpecific(_ped, undefined, 0, 0, 0, 0, undefined, 0);
}
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/peds_customization/ped_decals.lua
 *
 * Hash: 0x46DF918788CB093F | Since: 1207
 */
export function applyDamagePack(ped, damage, mult) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return ApplyPedDamagePack(_ped, damage, mult);
}
/**
 * No comment provided
 *
 * Hash: 0x51AC07A44D4F5B8A | Since: 1207
 */
export function canKnockOffVehicle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return CanKnockPedOffVehicle(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x2D64376CF437363E | Since: 1207
 */
export function canBeMounted(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return CanPedBeMounted(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEAD42DE3610D0721 | Since: 1207
 */
export function canInCombatSeeTarget(ped, target) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IPed ? target.handle() : target;
    return CanPedInCombatSeeTarget(_ped, _target);
}
/**
 * No comment provided
 *
 * Hash: 0x128F79EDCECE4FD5 | Since: 1207
 */
export function canRagdoll(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return CanPedRagdoll(_ped);
}
/**
 * Returns:
 * 0 - CTR_CANNOT_TARGET
 * 1 - CTR_CAN_TARGET
 * 2 - CTR_NOT_SURE_YET
 *
 * Hash: 0x7F9B9791D4CB71F6 | Since: 1207
 */
export function canSeeEntity(ped, targetEntity, doFoliageCheck) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetEntity = targetEntity instanceof IEntity ? targetEntity.handle() : targetEntity;
    return CanPedSeeEntity(_ped, _targetEntity, false, doFoliageCheck);
}
/**
 * No comment provided
 *
 * Hash: 0x9D9473CB82D83A30 | Since: 1207
 */
export function canSeePedCached(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    return CanPedSeePedCached(_ped, _targetPed, false);
}
/**
 * No comment provided
 *
 * Hash: 0x726256CC1EEB182F | Since: 1207
 */
export function clearFacialIdleAnimOverride(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearFacialIdleAnimOverride(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x8FE22675A5A45817 | Since: 1207
 */
export function clearBloodDamage(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedBloodDamage(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x56E3B78C5408D9F4 | Since: 1207
 */
export function clearBloodDamageByZone(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedBloodDamageByZone(_ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x523C79AEEFCC4A2A | Since: 1207
 */
export function clearDamageDecalByZone(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return ClearPedDamageDecalByZone(_ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x0E5173C163976E38 | Since: 1207
 */
export function clearDecorations(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedDecorations(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6585D955A68452A5 | Since: 1207
 */
export function clearEnvDirt(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedEnvDirt(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x8EF6B7AC68E2F01B | Since: 1207
 */
export function clearLastDamageBone(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedLastDamageBone(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x2E05208086BA0651 | Since: 1207
 */
export function clearNonCreationArea() {
    ClearPedNonCreationArea();
}
/**
 * It clears the wetness of the selected Ped/Player. Clothes have to be wet to notice the difference.
 *
 * Hash: 0x9C720776DAA43E7E | Since: 1207
 */
export function clearWetness(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedWetness(_ped);
}
/**
 * flags: see SET_RAGDOLL_BLOCKING_FLAGS
 *
 * Hash: 0xD86D101FCFD00A4B | Since: 1207
 */
export function clearRagdollBlockingFlags(ped, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearRagdollBlockingFlags(_ped, flags);
}
/**
 * No comment provided
 *
 * Hash: 0x5E29243FB56FC6D4 | Since: 1207
 */
export function clearRelationshipBetweenGroups(relationship, group1, group2) {
    if (typeof group1 === 'string')
        group1 = GetHashKey(group1);
    if (typeof group2 === 'string')
        group2 = GetHashKey(group2);
    ClearRelationshipBetweenGroups(relationship, group1, group2);
}
/**
 * No comment provided
 *
 * Hash: 0xEF29A16337FACADB | Since: 1207
 */
export function clone(ped, isNetwork, bScriptHostPed, copyHeadBlendFlag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return ClonePed(_ped, isNetwork, bScriptHostPed, copyHeadBlendFlag);
}
/**
 * Copies ped's components and props to targetPed.
 * Can be used to clear anything from a ped by cloning it, including bullet holes.
 *
 * Hash: 0xE952D6431689AD9A | Since: 1207
 */
export function cloneToTarget(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    ClonePedToTarget(_ped, _targetPed);
}
/**
 * No comment provided
 *
 * Hash: 0x9E7738B291706746 | Since: 1207
 */
export function computeSatchelItemForDamage(pedAttached, damageCleanliness) {
    const _pedAttached = pedAttached instanceof IPed ? pedAttached.handle() : pedAttached;
    return ComputeSatchelItemForPedDamage(undefined, _pedAttached, damageCleanliness);
}
/**
 * No comment provided
 *
 * Hash: 0x5407B7288D0478B7 | Since: 1207
 */
export function countsInCombatWithTarget(ped, flag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return CountPedsInCombatWithTarget(_ped, flag);
}
/**
 * No comment provided
 *
 * Hash: 0x336B3D200AB007CB | Since: 1207
 */
export function countsInCombatWithTargetWithinRadius(ped, pos, radius, flag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return CountPedsInCombatWithTargetWithinRadius(_ped, pos.x, pos.y, pos.z, radius, flag);
}
/**
 * Creates a new ped group.
 * Groups can contain up to 8 peds.
 *
 * The parameter is unused.
 *
 * Returns a handle to the created group, or 0 if a group couldn't be created.
 *
 * Hash: 0x90370EBE0FEE1A3D | Since: 1207
 */
export function createGroup(taskAllocator) {
    return CreateGroup(taskAllocator);
}
/**
 * No comment provided
 *
 * Hash: 0xD49F9B0955C367DE | Since: 1207
 */
export function create(modelHash, pos, heading, isNetwork, bScriptHostPed) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreatePed(modelHash, pos.x, pos.y, pos.z, heading, isNetwork, bScriptHostPed, false, false);
}
/**
 * seatIndex:
 * enum eVehicleSeat
 * {
 * VS_ANY_PASSENGER = -2,
 * VS_DRIVER,
 * VS_FRONT_RIGHT,
 * VS_BACK_LEFT,
 * VS_BACK_RIGHT,
 * VS_EXTRA_LEFT_1,
 * VS_EXTRA_RIGHT_1,
 * VS_EXTRA_LEFT_2,
 * VS_EXTRA_RIGHT_2,
 * VS_EXTRA_LEFT_3,
 * VS_EXTRA_RIGHT_3,
 * VS_NUM_SEATS
 * };
 *
 * Hash: 0x7DD959874C1FD534 | Since: 1207
 */
export function createInsideVehicle(vehicle, modelHash, seatIndex) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreatePedInsideVehicle(_vehicle, modelHash, seatIndex, false, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xF89AA2BD01FC06B7 | Since: 1207
 */
export function createOnMount(mount, modelHash, index) {
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreatePedOnMount(_mount, modelHash, index, false, false, false, false);
}
/**
 * Deletes the specified ped, then sets the handle pointed to by the pointer to NULL.
 *
 * Hash: 0xCC0EF140F99365C5 | Since: 1207
 */
export function deletePed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    DeletePed(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xED00D72F81CF7278 | Since: 1207
 */
export function detachCarriableEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    DetachCarriableEntity(_entity, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x733C87D4CE22BEA2 | Since: 1207
 */
export function disableInjuredOnGroundBehaviour(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    DisablePedInjuredOnGroundBehaviour(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x7C6B0C22F9F40BBE | Since: 1207
 */
export function doesGroupExist(groupId) {
    return DoesGroupExist(groupId);
}
/**
 * Forces the ped to fall back and kills it.
 *
 * It doesn't really explode the ped's head but it kills the ped
 *
 * Hash: 0x2D05CED3A38D0F3A | Since: 1207
 */
export function explodeHead(ped, weaponHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    ExplodePedHead(_ped, weaponHash);
}
/**
 * No comment provided
 *
 * Hash: 0x7043D0681285BA2D | Since: 1207
 */
export function fadeAndDestroy() {
    return FadeAndDestroyPed();
}
/**
 * No comment provided
 *
 * Hash: 0xB5ACE8B23A438EC0 | Since: 1207
 */
export function findAllAttachedCarriableEntities(ped, itemset) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    FindAllAttachedCarriableEntities(_ped, itemset);
}
/**
 * Old name: _FREEZE_PED_CAMERA_ROTATION
 *
 * Hash: 0xFF287323B0E2C69A | Since: 1207
 */
export function forceAllHeadingValuesToAlign(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ForceAllHeadingValuesToAlign(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x2208438012482A1A | Since: 1207
 */
export function forceAiAndAnimationUpdate(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ForcePedAiAndAnimationUpdate(_ped, false, false);
}
/**
 * motionStateHash: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CPedMotionStates__eMotionState
 *
 * Hash: 0xF28965D04F570DCA | Since: 1207
 */
export function forceMotionState(ped, motionStateHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof motionStateHash === 'string')
        motionStateHash = GetHashKey(motionStateHash);
    return ForcePedMotionState(_ped, motionStateHash, false, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0xBE22B26DD764C040 | Since: 1207
 */
export function getAnimInitialOffsetPosition(pos, rot) {
    return new Vector3(GetAnimInitialOffsetPosition(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, 0, 0));
}
/**
 * No comment provided
 *
 * Hash: 0x4B805E6046EE9E47 | Since: 1207
 */
export function getAnimInitialOffsetRotation(pos, rot) {
    return new Vector3(GetAnimInitialOffsetRotation(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, 0, 0));
}
/**
 * Outputs carriable infos for selected ped carriable slot.
 *
 * Parameters:
 * - outData: Any* — A structure of 4 explained below
 * - ped: Ped to check
 * - carriableSlot: int See TASK_CARRIABLE for available slots
 * - p3: int always 0 in R* scripts
 *
 * Hash: 0x608BC6A6AACD5036 | Since: 1207
 */
export function getCarriedAttachedInfoForSlot(ped, carriableSlot) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetCarriedAttachedInfoForSlot(_ped, carriableSlot, 0);
}
/**
 * Gets the closest ped in a radius.
 *
 * Hash: 0xC33AB876A77F8164 | Since: 1207
 */
export function getClosest(pos, radius, pedType) {
    return GetClosestPed(pos.x, pos.y, pos.z, radius, false, false, false, false, false, pedType);
}
/**
 * No comment provided
 *
 * Hash: 0x52DFF8A10508090A | Since: 1207
 */
export function getCombatFloat(ped, combatType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetCombatFloat(_ped, combatType);
}
/**
 * No comment provided
 *
 * Hash: 0xCD66FEA29400A0B5 | Since: 1207
 */
export function getCurrentTargetFor(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetCurrentTargetForPed(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xCD5003B097200F36 | Since: 1207
 */
export function getDeadPickupCoords(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return new Vector3(GetDeadPedPickupCoords(_ped, 0, 0));
}
/**
 * No comment provided
 *
 * Hash: 0x8DE69FE35CA09A45 | Since: 1207
 */
export function getGroupSize(groupId) {
    return GetGroupSize(groupId);
}
/**
 * No comment provided
 *
 * Hash: 0xA454D234E45BB6E5 | Since: 1207
 */
export function getIsRespondingToNegativeInteraction(ped, player) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetIsPedRespondingToNegativeInteraction(_ped, _player);
}
/**
 * No comment provided
 *
 * Hash: 0x9337183FDA2E9035 | Since: 1207
 */
export function getIsRespondingToPositiveInteraction(ped, player) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetIsPedRespondingToPositiveInteraction(_ped, _player);
}
/**
 * No comment provided
 *
 * Hash: 0x5486A79D9FBD342D | Since: 1207
 */
export function getJackTarget(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetJackTarget(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x14169FA823679E41 | Since: 1207
 */
export function getLootingPickupTargetEntity(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetLootingPickupTargetEntity(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x18A3E9EE1297FD39 | Since: 1207
 */
export function getMeleeTargetFor(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetMeleeTargetForPed(_ped);
}
/**
 * This is a way to get what drawables a ped has equipped
 * Example: you are able to tell if the ped has the drawable PLAYER_ZERO_HAT_017 attached
 * Note: this works with non shop components, direct .ydd files.
 *
 * Hash: 0xA9C28516A6DC9D56 | Since: 1207
 */
export function getMetaAssetGuids(ped, index) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetMetaPedAssetGuids(_ped, index);
}
/**
 * No comment provided
 *
 * Hash: 0xE7998FEC53A33BBE | Since: 1207
 */
export function getMetaAssetTint(ped, index) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetMetaPedAssetTint(_ped, index);
}
/**
 * No comment provided
 *
 * Hash: 0xE7E11B8DCBED1058 | Since: 1207
 */
export function getMount(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetMount(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x10C70A515BC03707 | Since: 1207
 */
export function getNumMetaOutfits(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetNumMetaPedOutfits(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9B128DC36C1E04CF | Since: 1207
 */
export function getsJacker(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedsJacker(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x37F4AD56ECBC0CD6 | Since: 1207
 */
export function getAccuracy(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedAccuracy(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x5CCE68DBD5FE93EC | Since: 1207
 */
export function getAsGroupLeader(groupID) {
    return GetPedAsGroupLeader(groupID);
}
/**
 * No comment provided
 *
 * Hash: 0x51455483CF23ED97 | Since: 1207
 */
export function getAsGroupMember(groupID, memberNumber) {
    return GetPedAsGroupMember(groupID, memberNumber);
}
/**
 * No comment provided
 *
 * Hash: 0x4912DFE492DB98CD | Since: 1207
 */
export function getBlackboardScriptBool(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedBlackboardScriptBool(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xA29FD00D45311EB7 | Since: 1207
 */
export function getBlackboardScriptFloat(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedBlackboardScriptFloat(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xB71B91B398F8F067 | Since: 1207
 */
export function getBlackboardScriptInt(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedBlackboardScriptInt(_ped);
}
/**
 * Gets the position of the specified bone of the specified ped.
 *
 * ped: The ped to get the position of a bone from.
 * boneId: The ID of the bone to get the position from. This is NOT the index.
 * offsetX: The X-component of the offset to add to the position relative to the bone's rotation.
 * offsetY: The Y-component of the offset to add to the position relative to the bone's rotation.
 * offsetZ: The Z-component of the offset to add to the position relative to the bone's rotation.
 *
 * Hash: 0x17C07FC640E86B4E | Since: 1207
 */
export function getBoneCoords(ped, boneId, offsetX, offsetY, offsetZ) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return new Vector3(GetPedBoneCoords(_ped, boneId, offsetX, offsetY, offsetZ));
}
/**
 * no bone = -1
 *
 * Hash: 0x3F428D08BE5AAE31 | Since: 1207
 */
export function getBoneIndex(ped, boneId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedBoneIndex(_ped, boneId);
}
/**
 * Returns the hash of the weapon/model/object that killed the ped.
 *
 * Hash: 0x16FFE42AB2D2DC59 | Since: 1207
 */
export function getCauseOfDeath(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedCauseOfDeath(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xDEA92412FCAEB3F5 | Since: 1207
 */
export function getCombatMovement(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedCombatMovement(_ped);
}
/**
 * flagId: see SET_PED_CONFIG_FLAG
 *
 * Hash: 0x7EE53118C892B513 | Since: 1207
 */
export function getConfigFlag(ped, flagId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedConfigFlag(_ped, flagId, false);
}
/**
 * No comment provided
 *
 * Hash: 0xD5FE956C70FF370B | Since: 1207
 */
export function getCrouchMovement(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedCrouchMovement(_ped);
}
/**
 * Old name: _GET_PED_CURRENT_MOVEMENT_SPEED
 *
 * Hash: 0xF60165E1D2C5370B | Since: 1207
 */
export function getCurrentMoveBlendRatio(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedCurrentMoveBlendRatio(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x3C06B8786DD94CD1 | Since: 1207
 */
export function getDefensiveAreaPosition(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return new Vector3(GetPedDefensiveAreaPosition(_ped, false));
}
/**
 * No comment provided
 *
 * Hash: 0x2311F15D971AA680 | Since: 1207
 */
export function getGrappleState(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedGrappleState(_ped);
}
/**
 * Returns the groupId of which the specified ped is a member of.
 *
 * Hash: 0xF162E133B4E7A675 | Since: 1207
 */
export function getGroupIndex(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedGroupIndex(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x3BDFCF25B58B0415 | Since: 1207
 */
export function getIsBeingGrappled(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedIsBeingGrappled(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xC48A9EB0D499B3E5 | Since: 1207
 */
export function getIsDoingCombatRoll(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedIsDoingCombatRoll(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x0E99E3BF11BB6367 | Since: 1207
 */
export function getIsGrappling(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedIsGrappling(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xD75960F6BD9EA49C | Since: 1207
 */
export function getLastDamageBone(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedLastDamageBone(_ped);
}
/**
 * enum ePedLootStatus
 * {
 * PLS_NONE,
 * PLS_PRE_LOOT,
 * PLS_SAMPLING,
 * PLS_SKINNING
 * };
 *
 * Hash: 0xC737697C41628340 | Since: 1311
 */
export function getLootStatusMp(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedLootStatusMp(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x4700A416E8324EF3 | Since: 1207
 */
export function getMaxHealth(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedMaxHealth(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x3F69145BBA87BAE7 | Since: 1207
 */
export function getMoney(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedMoney(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x243E1B4607040057 | Since: 1207
 */
export function getMotionFocusEntity(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedMotionFocusEntity(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x23F8F5FC7E8C4A6B | Since: 1207
 */
export function getNearbyPeds(ped, ignoredPedType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedNearbyPeds(_ped, ignoredPedType, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xCFF869CBFA210D82 | Since: 1207
 */
export function getNearbyVehicles(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedNearbyVehicles(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x42FDD0F017B1E38E | Since: 1207
 */
export function getRelationshipGroupDefaultHash(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedRelationshipGroupDefaultHash(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x7DBDD04862D95F04 | Since: 1207
 */
export function getRelationshipGroupHash(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedRelationshipGroupHash(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xAF9E59B1B1FBF2A0 | Since: 1207
 */
export function getResetFlag(ped, flagId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedResetFlag(_ped, flagId);
}
/**
 * Returns the entity that killed the ped
 *
 * It is best to check if the Ped is dead before asking for its killer.
 *
 * Hash: 0x93C8B64DEB84728C | Since: 1207
 */
export function getSourceOfDeath(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedSourceOfDeath(_ped);
}
/**
 * Returns whether the entity is in stealth mode
 *
 * Hash: 0x7C2AC9CA66575FBF | Since: 1207
 */
export function getStealthMovement(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedStealthMovement(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x1E98817B311AE98A | Since: 1207
 */
export function getTimeOfDeath(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedTimeOfDeath(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x936E7CAD0AE2EE14 | Since: 1207
 */
export function getToPlayerWeaponDamageModifier(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedToPlayerWeaponDamageModifier(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xFF059E1E4C01E63C | Since: 1207
 */
export function getType(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedType(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6A3975DEA89F9A17 | Since: 1207
 */
export function getPlayerIsFollowing(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPlayerPedIsFollowing(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9E6B70061662AE5C | Since: 1207
 */
export function getRelationshipBetweenGroups(group1, group2) {
    if (typeof group1 === 'string')
        group1 = GetHashKey(group1);
    if (typeof group2 === 'string')
        group2 = GetHashKey(group2);
    return GetRelationshipBetweenGroups(group1, group2);
}
/**
 * No comment provided
 *
 * Hash: 0xEBA5AD3A0EAF7121 | Since: 1207
 */
export function getRelationshipBetweens(ped1, ped2) {
    const _ped1 = ped1 instanceof IPed ? ped1.handle() : ped1;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    return GetRelationshipBetweenPeds(_ped1, _ped2);
}
/**
 * No comment provided
 *
 * Hash: 0x6F4C85ACD641BCD2 | Since: 1207
 */
export function getSeatIsTryingToEnter(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetSeatPedIsTryingToEnter(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x4E76CB57222A00E5 | Since: 1207
 */
export function getSeatIsUsing(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetSeatPedIsUsing(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x511F1A683387C7E2 | Since: 1207
 */
export function getTrackedPixelcount(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetTrackedPedPixelcount(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xF92691AED837A5FC | Since: 1207
 */
export function getVehicleIsEntering(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetVehiclePedIsEntering(_ped);
}
/**
 * Gets the vehicle the specified Ped is in.
 *
 * If the Ped is not in a vehicle and includeLastVehicle is true, the vehicle they were last in is returned.
 *
 * Hash: 0x9A9112A0FE9A4713 | Since: 1207
 */
export function getVehicleIsIn(ped, lastVehicle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetVehiclePedIsIn(_ped, lastVehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x6094AD011A2EA87D | Since: 1207
 */
export function getVehicleIsUsing(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetVehiclePedIsUsing(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x2B02DB082258625F | Since: 1207
 */
export function giveHashScenarioProp(ped, _object, scenarioType, p4) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const __object = _object instanceof IObject ? _object.handle() : _object;
    if (typeof scenarioType === 'string')
        scenarioType = GetHashKey(scenarioType);
    if (typeof p4 === 'string')
        p4 = GetHashKey(p4);
    return GivePedHashScenarioProp(_ped, __object, scenarioType, p4, false);
}
/**
 * No comment provided
 *
 * Hash: 0x854BC9B1A1CCD034 | Since: 1207
 */
export function hasMotionTypeAssetLoaded(nameHash, ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof nameHash === 'string')
        nameHash = GetHashKey(nameHash);
    return HasMotionTypeAssetLoaded(nameHash, _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x7DD7FB3480D8083E | Since: 1207
 */
export function initDefaultHealth(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    InitPedDefaultHealth(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x4759CC730F947C81 | Since: 1207
 */
export function instantlyFillPopulation() {
    InstantlyFillPedPopulation();
}
/**
 * No comment provided
 *
 * Hash: 0xD543D3A8FDE4F185 | Since: 1207
 */
export function isAnimalInteractionPossible(ped, animal) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    return IsAnimalInteractionPossible(_ped, _animal);
}
/**
 * No comment provided
 *
 * Hash: 0x68772DB2B2526F9F | Since: 1311
 */
export function isAnyHostileNearPoint(ped, pos, radius) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsAnyHostilePedNearPoint(_ped, pos.x, pos.y, pos.z, radius);
}
/**
 * No comment provided
 *
 * Hash: 0x083961498679DC9F | Since: 1207
 */
export function isAnyNearPoint(pos, radius) {
    return IsAnyPedNearPoint(pos.x, pos.y, pos.z, radius);
}
/**
 * No comment provided
 *
 * Hash: 0xA0D3D71EA1086C55 | Since: 1207
 */
export function isAnyShootingInArea(x1, y1, z1, x2, y2, z2) {
    return IsAnyPedShootingInArea(x1, y1, z1, x2, y2, z2, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC8D523BF5BBD3808 | Since: 1207
 */
export function isEventInQueue(ped, eventType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof eventType === 'string')
        eventType = GetHashKey(eventType);
    return IsEventInQueue(_ped, eventType);
}
/**
 * No comment provided
 *
 * Hash: 0x909AD9E9A92A10DF | Since: 1207
 */
export function isGroupLocallyControlled(groupId) {
    return IsGroupLocallyControlled(groupId);
}
/**
 * No comment provided
 *
 * Hash: 0x0EE3F0D7FECCC54F | Since: 1207
 */
export function isInstantlyFillPopulationFinished() {
    return IsInstantlyFillPedPopulationFinished();
}
/**
 * No comment provided
 *
 * Hash: 0xFB1E7998B8595825 | Since: 1207
 */
export function isLocationSpawnSafe(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsLocationSpawnSafe(_ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x3998B1276A3300E5 | Since: 1207
 */
export function isAimingFromCover(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedAimingFromCover(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x12534C348C6CB68B | Since: 1207
 */
export function isAPlayer(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedAPlayer(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEF3A8772F085B4AA | Since: 1207
 */
export function isBeingDragged(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedBeingDragged(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xD453BB601D4A606E | Since: 1207
 */
export function isBeingHogtied(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedBeingHogtied(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9A497FE2DF198913 | Since: 1207
 */
export function isBeingJacked(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedBeingJacked(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x863B23EFDE9C5DF2 | Since: 1207
 */
export function isBeingStealthKilled(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedBeingStealthKilled(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x4FBACCE3B4138EE8 | Since: 1207
 */
export function isBeingStunned(ped, weaponType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponType === 'string')
        weaponType = GetHashKey(weaponType);
    return IsPedBeingStunned(_ped, weaponType);
}
/**
 * No comment provided
 *
 * Hash: 0xA911EE21EDF69DAF | Since: 1207
 */
export function isCarryingSomething(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedCarryingSomething(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x53E8CB4F48BFE623 | Since: 1207
 */
export function isClimbing(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedClimbing(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x3317DEDB88C95038 | Since: 1207
 */
export function isDeadOrDying(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedDeadOrDying(_ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0xBA63D9FE45412247 | Since: 1207
 */
export function isDefensiveAreaActive(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedDefensiveAreaActive(_ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5527B8246FEF9B11 | Since: 1207
 */
export function isDiving(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedDiving(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x1D46B417F926D34D | Since: 1207
 */
export function isEnteringAnyTransport(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedEnteringAnyTransport(_ped);
}
/**
 * Presumably returns the Entity that the Ped is currently diving out of the way of.
 *
 * Hash: 0x414641C26E105898 | Since: 1207
 */
export function isEvasiveDiving(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedEvasiveDiving(_ped);
}
/**
 * angle is ped's view cone
 *
 * Hash: 0xD71649DB0A545AA3 | Since: 1207
 */
export function isFacingPed(ped, otherPed, angle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _otherPed = otherPed instanceof IPed ? otherPed.handle() : otherPed;
    return IsPedFacingPed(_ped, _otherPed, angle);
}
/**
 * No comment provided
 *
 * Hash: 0xFB92A102F1C4DFA3 | Since: 1207
 */
export function isFalling(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedFalling(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x3E592D0486DEC0F6 | Since: 1207
 */
export function isFallingOver(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedFallingOver(_ped);
}
/**
 * Gets a value indicating whether this ped's health is below its fatally injured threshold. The default threshold is 100.
 * If the handle is invalid, the function returns true.
 *
 * Hash: 0xD839450756ED5A80 | Since: 1207
 */
export function isFatallyInjured(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedFatallyInjured(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xBBCCE00B381F8482 | Since: 1207
 */
export function isFleeing(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedFleeing(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x95CBC65780DE7EB1 | Since: 1207
 */
export function isFullyOnMount(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedFullyOnMount(_ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0xBB062B2B5722478E | Since: 1207
 */
export function isGettingIntoAVehicle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedGettingIntoAVehicle(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9F65DBC537E59AD5 | Since: 1207
 */
export function isGoingIntoCover(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedGoingIntoCover(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x878B68960C1C2A35 | Since: 1207
 */
export function isGroupLeader(ped, groupId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedGroupLeader(_ped, groupId);
}
/**
 * No comment provided
 *
 * Hash: 0x9BB01E3834671191 | Since: 1207
 */
export function isGroupMember(ped, groupId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedGroupMember(_ped, groupId, false);
}
/**
 * No comment provided
 *
 * Hash: 0x1C86D8AEF8254B78 | Since: 1207
 */
export function isHangingOnToVehicle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedHangingOnToVehicle(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xFCF37A457CB96DC0 | Since: 1207
 */
export function isHeadingTowardsPosition(ped, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedHeadingTowardsPosition(_ped, pos.x, pos.y, pos.z, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x813A0A7C9D2E831F | Since: 1207
 */
export function isHeadtrackingEntity(ped, entity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsPedHeadtrackingEntity(_ped, _entity);
}
/**
 * No comment provided
 *
 * Hash: 0x5CD3CB88A7F8850D | Since: 1207
 */
export function isHeadtrackingPed(ped1, ped2) {
    const _ped1 = ped1 instanceof IPed ? ped1.handle() : ped1;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    return IsPedHeadtrackingPed(_ped1, _ped2);
}
/**
 * No comment provided
 *
 * Hash: 0x3AA24CCC0D451379 | Since: 1207
 */
export function isHogtied(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedHogtied(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x42429C674B61238B | Since: 1207
 */
export function isHogtying(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedHogtying(_ped);
}
/**
 * Returns true/false if the ped is/isn't humanoid.
 *
 * Hash: 0xB980061DA992779D | Since: 1207
 */
export function isHuman(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedHuman(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xB655DB7582AEC805 | Since: 1207
 */
export function isIncapacitated(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedIncapacitated(_ped);
}
/**
 * Gets a value indicating whether this ped's health is below its injured threshold.
 *
 * The default threshold is 100.
 *
 * Hash: 0x84A2DD9AC37C35C1 | Since: 1207
 */
export function isInjured(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInjured(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x2E0E1C2B4F6CB339 | Since: 1207
 */
export function isInAnyBoat(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInAnyBoat(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x298B91AE825E5705 | Since: 1207
 */
export function isInAnyHeli(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInAnyHeli(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x5FFF4CFC74D8FB80 | Since: 1207
 */
export function isInAnyPlane(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInAnyPlane(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6E575D6A898AB852 | Since: 1207
 */
export function isInAnyTaxi(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInAnyTaxi(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6F972C1AB75A1ED0 | Since: 1207
 */
export function isInAnyTrain(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInAnyTrain(_ped);
}
/**
 * Gets a value indicating whether the specified ped is in any vehicle.
 *
 * Hash: 0x997ABD671D25CA0B | Since: 1207
 */
export function isInAnyVehicle(ped, atGetIn) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInAnyVehicle(_ped, atGetIn);
}
/**
 * No comment provided
 *
 * Hash: 0x4859F1FC66A6278E | Since: 1207
 */
export function isInCombat(ped, target) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IPed ? target.handle() : target;
    return IsPedInCombat(_ped, _target);
}
/**
 * No comment provided
 *
 * Hash: 0x60DFD0691A170B88 | Since: 1207
 */
export function isInCover(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInCover(_ped, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x845333B3150583AB | Since: 1207
 */
export function isInCoverFacingLeft(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInCoverFacingLeft(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9134873537FA419C | Since: 1207
 */
export function isInFlyingVehicle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInFlyingVehicle(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x5891CAC5D4ACFF74 | Since: 1207
 */
export function isInGroup(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInGroup(_ped);
}
/**
 * Notes: The function only returns true while the ped is:
 * A.) Swinging a random melee attack (including pistol-whipping)
 *
 * B.) Reacting to being hit by a melee attack (including pistol-whipping)
 *
 * C.) Is locked-on to an enemy (arms up, strafing/skipping in the default fighting-stance, ready to dodge+counter).
 *
 * You don't have to be holding the melee-targeting button to be in this stance; you stay in it by default for a few seconds after swinging at someone. If you do a sprinting punch, it returns true for the duration of the punch animation and then returns false again, even if you've punched and made-angry many peds
 *
 * Hash: 0x4E209B2C1EAD5159 | Since: 1207
 */
export function isInMeleeCombat(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInMeleeCombat(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x796D90EFB19AA332 | Since: 1207
 */
export function isInModel(ped, modelHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return IsPedInModel(_ped, modelHash);
}
/**
 * Gets a value indicating whether the specified ped is in the specified vehicle.
 *
 * Hash: 0xA3EE4A07279BB9DB | Since: 1207
 */
export function isInVehicle(ped, vehicle, atGetIn) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsPedInVehicle(_ped, _vehicle, atGetIn);
}
/**
 * No comment provided
 *
 * Hash: 0x4AE4FF911DFB61DA | Since: 1207
 */
export function isJacking(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedJacking(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xCEDABC5900A0BF97 | Since: 1207
 */
export function isJumping(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedJumping(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9682F850056C9ADE | Since: 1207
 */
export function isLassoed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedLassoed(_ped);
}
/**
 * Returns true/false if the ped is/isn't male.
 *
 * Hash: 0x6D9F5FAA7488BA46 | Since: 1207
 */
export function isMale(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedMale(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xC9D55B1A358A5BF7 | Since: 1207
 */
export function isModel(ped, modelHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return IsPedModel(_ped, modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x01FEE67DB37F59B2 | Since: 1207
 */
export function isOnFoot(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedOnFoot(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x460BC76A0E10655E | Since: 1207
 */
export function isOnMount(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedOnMount(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEC5F66E459AF3BB2 | Since: 1207
 */
export function isOnSpecificVehicle(ped, vehicle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsPedOnSpecificVehicle(_ped, _vehicle);
}
/**
 * Gets a value indicating whether the specified ped is on top of any vehicle.
 *
 * Return 1 when ped is on vehicle.
 * Return 0 when ped is not on a vehicle.
 *
 * Hash: 0x67722AEB798E5FAB | Since: 1207
 */
export function isOnVehicle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedOnVehicle(_ped, false);
}
/**
 * Returns true if the ped is currently opening a door (CTaskOpenDoor).
 *
 * Old name: _IS_PED_OPENING_A_DOOR
 *
 * Hash: 0x26AF0E8E30BD2A2C | Since: 1207
 */
export function isOpeningDoor(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedOpeningDoor(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xDCCA191DF9980FD7 | Since: 1207
 */
export function isPerformingMeleeAction(ped, p2) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p2 === 'string')
        p2 = GetHashKey(p2);
    return IsPedPerformingMeleeAction(_ped, 0, p2);
}
/**
 * No comment provided
 *
 * Hash: 0xC70B5FAE151982D8 | Since: 1207
 */
export function isPlantingBomb(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedPlantingBomb(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xD6A86331A537A7B9 | Since: 1207
 */
export function isProne(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedProne(_ped);
}
/**
 * If the ped handle passed through the parenthesis is in a ragdoll state this will return true.
 *
 * Hash: 0x47E4E977581C5B55 | Since: 1207
 */
export function isRagdoll(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedRagdoll(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xA0BC8FAED8CFEB3C | Since: 1207
 */
export function isReadyToRender(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedReadyToRender(_ped);
}
/**
 * Returns whether the specified ped is reloading.
 *
 * Hash: 0x24B100C68C645951 | Since: 1207
 */
export function isReloading(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedReloading(_ped);
}
/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 *
 * Hash: 0x625B774D75C87068 | Since: 1207
 */
export function isRespondingToEvent(ped, eventType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof eventType === 'string')
        eventType = GetHashKey(eventType);
    return IsPedRespondingToEvent(_ped, eventType);
}
/**
 * No comment provided
 *
 * Hash: 0x77525BBF433F2CD6 | Since: 1207
 */
export function isRespondingToThreat(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedRespondingToThreat(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x2AFE52F782F25775 | Since: 1207
 */
export function isRunningMobilePhoneTask(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedRunningMobilePhoneTask(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xE3B6097CC25AA69E | Since: 1207
 */
export function isRunningRagdollTask(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedRunningRagdollTask(_ped);
}
/**
 * Returns whether the specified ped is shooting.
 *
 * Hash: 0x34616828CD07F1A1 | Since: 1207
 */
export function isShooting(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedShooting(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x84D0BF2B21862059 | Since: 1207
 */
export function isSitting(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedSitting(_ped);
}
/**
 * Detect if ped is in any vehicle
 * [True/False]
 *
 * Hash: 0x826AA586EDB9FEF8 | Since: 1207
 */
export function isSittingInAnyVehicle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedSittingInAnyVehicle(_ped);
}
/**
 * Detect if ped is sitting in the specified vehicle
 * [True/False]
 *
 * Hash: 0xA808AA1D79230FC2 | Since: 1207
 */
export function isSittingInVehicle(ped, vehicle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsPedSittingInVehicle(_ped, _vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x530944F6F4B8A214 | Since: 1207
 */
export function isStopped(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedStopped(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9DE327631295B4C2 | Since: 1207
 */
export function isSwimming(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedSwimming(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xC024869A53992F34 | Since: 1207
 */
export function isSwimmingUnderWater(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedSwimmingUnderWater(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x00E73468D085F745 | Since: 1207
 */
export function isUsingActionMode(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedUsingActionMode(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x57AB4A3080F85143 | Since: 1207
 */
export function isUsingAnyScenario(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedUsingAnyScenario(_ped);
}
/**
 * Equivalent to IS_PED_USING_SCENARIO from V but takes a hash instead of a string.
 *
 * Hash: 0x34D6AC1157C8226C | Since: 1207
 */
export function isUsingScenarioHash(ped, scenarioHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof scenarioHash === 'string')
        scenarioHash = GetHashKey(scenarioHash);
    return IsPedUsingScenarioHash(_ped, scenarioHash);
}
/**
 * No comment provided
 *
 * Hash: 0x9C54041BB66BCF9E | Since: 1207
 */
export function isUsingThisScenario(ped, scenario) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedUsingThisScenario(_ped, scenario);
}
/**
 * No comment provided
 *
 * Hash: 0x117C70D1F5730B5E | Since: 1207
 */
export function isVaulting(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedVaulting(_ped);
}
/**
 * Returns true if ped is in perception (focused and looking at target ped)
 * Most float params are -1.f in R* Scripts
 *
 * Hash: 0x06087579E7AA85A9 | Since: 1207
 */
export function isTargetInPerceptionArea(ped, targetPed, customDistance) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    return IsTargetPedInPerceptionArea(_ped, _targetPed, 0, customDistance, 0, 0);
}
/**
 * Returns whether or not a ped is visible within your FOV, not this check auto's to false after a certain distance.
 * Target needs to be tracked first, won't work otherwise.
 *
 * Hash: 0x91C8E617F64188AC | Since: 1207
 */
export function isTrackedVisible(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsTrackedPedVisible(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6FD7816A36615F48 | Since: 1207
 */
export function knockOffProp(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    KnockOffPedProp(_ped, false, false, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x45BBCBA77C29A841 | Since: 1207
 */
export function knockOffVehicle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    KnockPedOffVehicle(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xF6E1E9F47A7686F8 | Since: 1207
 */
export function cowerInPlace(ped, ped2) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    PedCowerInPlace(_ped, _ped2);
}
/**
 * No comment provided
 *
 * Hash: 0x1E4C940233FC0C6F | Since: 1207
 */
export function cowerMoveToPoint(ped, ped2) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    PedCowerMoveToPoint(_ped, 0, 0, 0, _ped2, 0);
}
/**
 * Based on TASK_COMBAT_HATED_TARGETS_AROUND_PED, the parameters are likely similar (PedHandle, and area to attack in).
 *
 * Hash: 0x9222F300BF8354FE | Since: 1207
 */
export function registerHatedTargetsAround(ped, radius) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RegisterHatedTargetsAroundPed(_ped, radius);
}
/**
 * No comment provided
 *
 * Hash: 0x2F25D9AEFA34FBA2 | Since: 1207
 */
export function registerTarget(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    RegisterTarget(_ped, _targetPed, false);
}
/**
 * No comment provided
 *
 * Hash: 0x3088634CF8C819CF | Since: 1207
 */
export function releaseVisibilityTracking(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ReleasePedVisibilityTracking(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x8EB2F69076AF7053 | Since: 1207
 */
export function removeGroup(groupId) {
    RemoveGroup(groupId);
}
/**
 * Ped will no longer get angry when you stay near him.
 *
 * Hash: 0x74D4E028107450A9 | Since: 1207
 */
export function removeDefensiveArea(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RemovePedDefensiveArea(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xED74007FFB146BC2 | Since: 1207
 */
export function removeFromGroup(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RemovePedFromGroup(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xB6BA2444AB393DA2 | Since: 1207
 */
export function removeRelationshipGroup(groupHash) {
    if (typeof groupHash === 'string')
        groupHash = GetHashKey(groupHash);
    RemoveRelationshipGroup(groupHash);
}
/**
 * No comment provided
 *
 * Hash: 0x31D16B74C6E29D66 | Since: 1207
 */
export function removeScenarioBlockingArea() {
    RemoveScenarioBlockingArea(undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0xD37401D78A929A49 | Since: 1207
 */
export function removeScenarioBlockingAreas() {
    RemoveScenarioBlockingAreas();
}
/**
 * Params: p2, p3 usually 0 in R* Scripts
 *
 * Hash: 0xDF631E4BCE1B1FC4 | Since: 1207
 */
export function removeShopItemFromByCategory(ped, componentCategory) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof componentCategory === 'string')
        componentCategory = GetHashKey(componentCategory);
    RemoveShopItemFromPedByCategory(_ped, componentCategory, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0xD710A5007C2AC539 | Since: 1207
 */
export function removeTagFromMeta(ped, component) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof component === 'string')
        component = GetHashKey(component);
    RemoveTagFromMetaPed(_ped, component, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x75BA1CB3B7D40CAF | Since: 1207
 */
export function requestUseSmallBboxVisibilityTracking(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RequestPedUseSmallBboxVisibilityTracking(_ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x2BC338A7B21F4608 | Since: 1207
 */
export function requestVehicleVisibilityTracking(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RequestPedVehicleVisibilityTracking(_ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x7D7A2E43E74E2EB8 | Since: 1207
 */
export function requestVisibilityTracking(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RequestPedVisibilityTracking(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEA16670E7BA4743C | Since: 1207
 */
export function resetAiWeaponDamageModifier() {
    ResetAiWeaponDamageModifier();
}
/**
 * No comment provided
 *
 * Hash: 0x63DAB4CCB3273205 | Since: 1207
 */
export function resetGroupFormationDefaultSpacing(groupId) {
    ResetGroupFormationDefaultSpacing(groupId);
}
/**
 * No comment provided
 *
 * Hash: 0x2A5AFD2B8381A6E1 | Since: 1207
 */
export function resetHorseAvoidanceLevelToDefault(horse) {
    const _horse = horse instanceof IPed ? horse.handle() : horse;
    ResetHorseAvoidanceLevelToDefault(_horse);
}
/**
 * No comment provided
 *
 * Hash: 0x22EF8FF8778030EB | Since: 1207
 */
export function resetInVehicleContext(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ResetPedInVehicleContext(_ped);
}
/**
 * Resets the value for the last vehicle driven by the Ped.
 *
 * Hash: 0xBB8DE8CF6A8DD8BB | Since: 1207
 */
export function resetLastVehicle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ResetPedLastVehicle(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9FA4664CF62E47E8 | Since: 1207
 */
export function resetRagdollTimer(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ResetPedRagdollTimer(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x97B0DB5B4AA74E77 | Since: 1207
 */
export function resetWeaponMovementClipset(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ResetPedWeaponMovementClipset(_ped);
}
/**
 * This function will simply bring the dead ped back to life.
 *
 * Before calling this function, you may want to declare the position, where your Resurrected ped to be spawn at because theres a chance the ped will fall through the map
 *
 * Also, disabling any assigned task immediately helped in the number of scenarios, where If you want peds to perform certain decided tasks.
 *
 * Hash: 0x71BC8E838B9C6035 | Since: 1207
 */
export function resurrect(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ResurrectPed(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x8D8ACD8388CD99CE | Since: 1207
 */
export function reviveInjured(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ReviveInjuredPed(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x66460DEDDD417254 | Since: 1207
 */
export function setAiMeleeWeaponDamageModifier(modifier) {
    SetAiMeleeWeaponDamageModifier(modifier);
}
/**
 * No comment provided
 *
 * Hash: 0x1B1E2A40A65B8521 | Since: 1207
 */
export function setAiWeaponDamageModifier(value) {
    SetAiWeaponDamageModifier(value);
}
/**
 * No comment provided
 *
 * Hash: 0x9F8AA94D6D97DBF4 | Since: 1207
 */
export function setBlockingOfNonTemporaryEvents(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetBlockingOfNonTemporaryEvents(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x9911F4A24485F653 | Since: 1207
 */
export function setBlockingOfNonTemporaryEventsForAmbientsThisFrame() {
    SetBlockingOfNonTemporaryEventsForAmbientPedsThisFrame(false);
}
/**
 * combatType can be between 0-14. See GET_COMBAT_FLOAT below for a list of possible parameters.
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/COMBAT_FLOATS
 * https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eCombatAttributeFloats
 *
 * Hash: 0xFF41B4B141ED981C | Since: 1207
 */
export function setCombatFloat(ped, combatType, newValue) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetCombatFloat(_ped, combatType, newValue);
}
/**
 * No comment provided
 *
 * Hash: 0x102E68B2024D536D | Since: 1207
 */
export function setCreateRandomCops(toggle) {
    SetCreateRandomCops(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xC52E0F855C58FC2E | Since: 1207
 */
export function setEnableBoundAnkles(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetEnableBoundAnkles(_ped, toggle);
}
/**
 * Ped can not pull out a weapon when true
 *
 * Hash: 0xDF1AF8B5D56542FA | Since: 1207
 */
export function setEnableHandcuffs(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetEnableHandcuffs(_ped, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xFFC24B988B938B38 | Since: 1207
 */
export function setFacialIdleAnimOverride(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetFacialIdleAnimOverride(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x7CC7D3B7AF7FB71F | Since: 1207
 */
export function setFormationPositionsTargetRadius(groupId, radius) {
    return SetFormationPositionsTargetRadius(groupId, radius);
}
/**
 * eFormationType
 *
 * 0: Default
 * 1: Circle Around Leader
 * 2: Alternative Circle Around Leader
 * 3: Line, with Leader at center
 *
 * Hash: 0xCE2F5FC3AF7E8C1E | Since: 1207
 */
export function setGroupFormation(groupId, formationType) {
    SetGroupFormation(groupId, formationType);
}
/**
 * No comment provided
 *
 * Hash: 0x1D9D45004C28C916 | Since: 1207
 */
export function setGroupFormationSpacing(groupId) {
    SetGroupFormationSpacing(groupId, 0, 0, 0);
}
/**
 * Sets the range at which members will automatically leave the group.
 *
 * Hash: 0x4102C7858CFEE4E4 | Since: 1207
 */
export function setGroupSeparationRange(groupId, separationRange) {
    SetGroupSeparationRange(groupId, separationRange);
}
/**
 * -1 - HORSE_ASSIST__NO_CHANGE
 * 0 - HORSE_ASSIST__MANUAL
 * 1 - HORSE_ASSIST__SEMIASSIST
 * 2 - HORSE_ASSIST__FULLASSIST
 *
 * Hash: 0xDDCF6FEA5D7ACC17 | Since: 1207
 */
export function setHorseAvoidanceLevel(horse, avoidanceLevel) {
    const _horse = horse instanceof IPed ? horse.handle() : horse;
    SetHorseAvoidanceLevel(_horse, avoidanceLevel);
}
/**
 * No comment provided
 *
 * Hash: 0xC32779C16FCEECD9 | Since: 1207
 */
export function setIkTarget(ped, ikIndex, entityLookAt, boneLookAt, offsetX, offsetY, offsetZ, blendInDuration, blendOutDuration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entityLookAt = entityLookAt instanceof IEntity ? entityLookAt.handle() : entityLookAt;
    SetIkTarget(_ped, ikIndex, _entityLookAt, boneLookAt, offsetX, offsetY, offsetZ, undefined, blendInDuration, blendOutDuration);
}
/**
 * https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CLootingFlags__Flags
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/LOOTING_FLAGS
 *
 * lootFlag:
 * enum eLootFlag
 * {
 * LOOT_FLAG_IS_CRITICAL_LOOT_TARGET = 7,
 * LOOT_FLAG_IGNORE_WATER_CHECKS = 8,
 * LOOT_FLAG_ANIMAL_FLAGGED_FOR_TAGGING = 23,
 * };
 *
 * Hash: 0x6569F31A01B4C097 | Since: 1207
 */
export function setLootingFlag(ped, lootFlag, enabled) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetLootingFlag(_ped, lootFlag, enabled);
}
/**
 * No comment provided
 *
 * Hash: 0x925A160133003AC6 | Since: 1207
 */
export function setPauseWritheBleedout(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPausePedWritheBleedout(_ped, toggle);
}
/**
 * accuracy = 0-100, 100 being perfectly accurate
 *
 * Hash: 0x7AEFB85C1D49DEB6 | Since: 1207
 */
export function setAccuracy(ped, accuracy) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedAccuracy(_ped, accuracy);
}
/**
 * Turns the desired ped into a cop. If you use this on the player ped, you will become almost invisible to cops dispatched for you. You will also report your own crimes, get a generic cop voice, get a cop-vision-cone on the radar, and you will be unable to shoot at other cops. Toggling ped as "false" has no effect; you must change p0's ped model to disable the effect.
 * toggle = bSetRelGroup
 *
 * Hash: 0xBB03C38DD3FB7FFD | Since: 1207
 */
export function setAsCop(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedAsCop(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x2A7819605465FBCE | Since: 1207
 */
export function setAsGroupLeader(ped, groupId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedAsGroupLeader(_ped, groupId, false);
}
/**
 * No comment provided
 *
 * Hash: 0x9F3480FE65DB31B5 | Since: 1207
 */
export function setAsGroupMember(ped, groupId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedAsGroupMember(_ped, groupId);
}
/**
 * No comment provided
 *
 * Hash: 0x6C3B4D6D13B4C841 | Since: 1207
 */
export function setCanArmIk(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanArmIk(_ped, toggle);
}
/**
 * When set on a player ped, its just like when you die in RDO
 *
 * Hash: 0x5240864E847C691C | Since: 1207
 */
export function setCanBeIncapacitated(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanBeIncapacitated(_ped, toggle);
}
/**
 * state:
 * enum eKnockOffVehicle
 * {
 * KNOCKOFFVEHICLE_DEFAULT,
 * KNOCKOFFVEHICLE_NEVER,
 * KNOCKOFFVEHICLE_EASY,
 * KNOCKOFFVEHICLE_HARD
 * };
 *
 * Hash: 0x7A6535691B477C48 | Since: 1207
 */
export function setCanBeKnockedOffVehicle(ped, state) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanBeKnockedOffVehicle(_ped, state);
}
/**
 * No comment provided
 *
 * Hash: 0x63F58F7C80513AAD | Since: 1207
 */
export function setCanBeTargetted(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanBeTargetted(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x66B57B72E0836A76 | Since: 1207
 */
export function setCanBeTargettedByPlayer(ped, player, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPedCanBeTargettedByPlayer(_ped, _player, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xBF1CA77833E58F2C | Since: 1207
 */
export function setCanBeTargettedByTeam(ped, team, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanBeTargettedByTeam(_ped, team, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xEE9DF765990E8D1D | Since: 1207
 */
export function setCanBodyRecoilIk(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanUnkBodypartIk(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xC11C18092C5530DC | Since: 1207
 */
export function setCanHeadIk(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanHeadIk(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x73518ECE2485412B | Since: 1207
 */
export function setCanLegIk(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanLegIk(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x6373D1349925A70E | Since: 1207
 */
export function setCanPlayAmbientAnims(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanPlayAmbientAnims(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x0EB0585D15254740 | Since: 1207
 */
export function setCanPlayAmbientBaseAnims(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanPlayAmbientBaseAnims(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xBAF20C5432058024 | Since: 1207
 */
export function setCanPlayGestureAnims(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanPlayGestureAnims(_ped, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB128377056A54E2A | Since: 1207
 */
export function setCanRagdoll(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanRagdoll(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xDF993EE5E90ABA25 | Since: 1207
 */
export function setCanRagdollFromPlayerImpact(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanRagdollFromPlayerImpact(_ped, toggle);
}
/**
 * This only will teleport the ped to the group leader if the group leader teleports (sets coords).
 *
 * Only works in singleplayer
 *
 * Hash: 0x2E2F4240B3F24647 | Since: 1207
 */
export function setCanTeleportToGroupLeader(pedHandle, groupId, toggle) {
    const _pedHandle = pedHandle instanceof IPed ? pedHandle.handle() : pedHandle;
    SetPedCanTeleportToGroupLeader(_pedHandle, groupId, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xF2B7106D37947CE0 | Since: 1207
 */
export function setCanTorsoIk(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanTorsoIk(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xF5846EDB26A98A24 | Since: 1207
 */
export function setCanTorsoReactIk(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanTorsoReactIk(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x6647C5F6F5792496 | Since: 1207
 */
export function setCanTorsoVehicleIk(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanTorsoVehicleIk(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xEC4686EC06434678 | Since: 1207
 */
export function setCanUseAutoConversationLookat(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanUseAutoConversationLookat(_ped, toggle);
}
/**
 * Overrides the ped's collision capsule radius for the current tick.
 * Must be called every tick to be effective.
 *
 * Setting this to 0.001 will allow warping through some objects.
 *
 * Hash: 0x364DF566EC833DE2 | Since: 1207
 */
export function setCapsule(ped, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCapsule(_ped, value);
}
/**
 * Old name: SET_PED_CLOTH_PACKAGE_INDEX
 *
 * Hash: 0x78C4E9961DB3EB5B | Since: 1207
 */
export function setClothPinFrames(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedClothPinFrames(_ped, false);
}
/**
 * abilityLevel:
 * enum eCombatAbilityLevel
 * {
 * CAL_POOR,
 * CAL_AVERAGE,
 * CAL_PROFESSIONAL
 * };
 *
 * Hash: 0xC7622C0D36B2FDA8 | Since: 1207
 */
export function setCombatAbility(ped, abilityLevel) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCombatAbility(_ped, abilityLevel);
}
/**
 * attributeIndex: https://alloc8or.re/rdr3/doc/enums/eCombatAttribute.txt
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/COMBAT_ATTRIBUTES
 *
 * Hash: 0x9F7794730795E019 | Since: 1207
 */
export function setCombatAttributes(ped, attributeIndex, enabled) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCombatAttributes(_ped, attributeIndex, enabled);
}
/**
 * 0 - Stationary (Will just stand in place)
 * 1 - Defensive (Will try to find cover and very likely to blind fire)
 * 2 - Offensive (Will attempt to charge at enemy but take cover as well)
 * 3 - Suicidal Offensive (Will try to flank enemy in a suicidal attack)
 *
 * Hash: 0x4D9CA1009AFBD057 | Since: 1207
 */
export function setCombatMovement(ped, combatMovement) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCombatMovement(_ped, combatMovement);
}
/**
 * range:
 * enum eCombatRange
 * {
 * CR_NEAR,
 * CR_MEDIUM,
 * CR_FAR,
 * CR_VERY_FAR
 * };
 *
 * Hash: 0x3C606747B23E497B | Since: 1207
 */
export function setCombatRange(ped, range) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCombatRange(_ped, range);
}
/**
 * flagId: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePedScriptConfigFlags
 * https://alloc8or.re/rdr3/doc/enums/ePedScriptConfigFlags.txt
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/CPED_CONFIG_FLAGS
 *
 * Hash: 0x1913FE4CBF41C463 | Since: 1207
 */
export function setConfigFlag(ped, flagId, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedConfigFlag(_ped, flagId, value);
}
/**
 * No comment provided
 *
 * Hash: 0x413C6C763A4AFFAD | Since: 1207
 */
export function setDefensiveAreaDirection(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedDefensiveAreaDirection(_ped, 0, 0, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0xFC3DB99C8144CD81 | Since: 1207
 */
export function setDefensiveAreaVolume(ped, volume) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedDefensiveAreaVolume(_ped, volume, false, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xAA5A7ECE2AA8FE70 | Since: 1207
 */
export function setDesiredHeading(ped, heading) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedDesiredHeading(_ped, heading);
}
/**
 * Used in various R* MP & SP Scripts
 *
 * Hash: 0x9AC577F5A12AD8A9 | Since: 1207
 */
export function setFiringPattern(ped, patternHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof patternHash === 'string')
        patternHash = GetHashKey(patternHash);
    SetPedFiringPattern(_ped, patternHash);
}
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/FLEE_ATTRIBUTES
 *
 * attributeFlags:
 * enum eFleeAttribute
 * {
 * FA_FORCE_EXIT_VEHICLE = (1 << 16),
 * FA_DISABLE_MOUNT_USAGE = (1 << 20),
 * FA_DISABLE_ENTER_VEHICLES = (1 << 22),
 * };
 *
 * Hash: 0x70A2D1137C8ED7C9 | Since: 1207
 */
export function setFleeAttributes(ped, attributeFlags, enable) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedFleeAttributes(_ped, attributeFlags, enable);
}
/**
 * No comment provided
 *
 * Hash: 0xDDF803377F94AAA8 | Since: 1207
 */
export function setGestureGroup(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedGestureGroup(_ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x9FF447B6B6AD960A | Since: 1207
 */
export function setGravity(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedGravity(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x0BDDB8D9EC6BCF3C | Since: 1207
 */
export function setGroupMemberPassengerIndex(ped, index) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedGroupMemberPassengerIndex(_ped, index);
}
/**
 * No comment provided
 *
 * Hash: 0x33A8F7F7D5F7F33C | Since: 1207
 */
export function setHearingRange(ped, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedHearingRange(_ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0x52D59AB61DDC05DD | Since: 1207
 */
export function setHighlyPerceptive(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedHighlyPerceptive(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xF107E836A70DCE05 | Since: 1207
 */
export function setIdRange(ped, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedIdRange(_ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0xEC4B4B3B9908052A | Since: 1311
 */
export function setInjuredOnGroundBehaviour(ped, unk) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedInjuredOnGroundBehaviour(_ped, unk);
}
/**
 * Ped: The ped to warp.
 * vehicle: The vehicle to warp the ped into.
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 *
 * Hash: 0xF75B0D629E1C063D | Since: 1207
 */
export function setIntoVehicle(ped, vehicle, seatIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetPedIntoVehicle(_ped, _vehicle, seatIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x971D38760FBC02EF | Since: 1207
 */
export function setKeepTask(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedKeepTask(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xAE6004120C18DF97 | Since: 1207
 */
export function setLassoHogtieFlag(ped, flagId, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedLassoHogtieFlag(_ped, flagId, value);
}
/**
 * No comment provided
 *
 * Hash: 0xC396F5B86FF9FEBD | Since: 1207
 */
export function setLegIkMode(ped, mode) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedLegIkMode(_ped, mode);
}
/**
 * No comment provided
 *
 * Hash: 0xDC2C5C242AAC342B | Since: 1207
 */
export function setLodMultiplier(ped, multiplier) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedLodMultiplier(_ped, multiplier);
}
/**
 * Sets the maximum health of a ped.
 *
 * Hash: 0xF5F6378C4F3419D3 | Since: 1207
 */
export function setMaxHealth(ped, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedMaxHealth(_ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0x433083750C5E064A | Since: 1207
 */
export function setMaxMoveBlendRatio(ped, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedMaxMoveBlendRatio(_ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0x43C851690662113D | Since: 1207
 */
export function setMaxTimeInWater(ped, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedMaxTimeInWater(_ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0x6BA428C528D9E522 | Since: 1207
 */
export function setMaxTimeUnderwater(ped, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedMaxTimeUnderwater(_ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0x01A898D26E2333DD | Since: 1207
 */
export function setMinMoveBlendRatio(ped, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedMinMoveBlendRatio(_ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0xE163A4BCE4DE6F11 | Since: 1207
 */
export function setModelIsSuppressed(model, toggle) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    SetPedModelIsSuppressed(model, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xA9C8960E8684C1B5 | Since: 1207
 */
export function setMoney(ped, amount) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedMoney(_ped, amount);
}
/**
 * No comment provided
 *
 * Hash: 0x9E8C908F41584ECD | Since: 1207
 */
export function setMoveAnimsBlendOut(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedMoveAnimsBlendOut(_ped);
}
/**
 * Min: 0.0f
 * Max: 1.15f
 *
 * Hash: 0x085BF80FA50A39D1 | Since: 1207
 */
export function setMoveRateOverride(ped, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedMoveRateOverride(_ped, value);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x98EFA132A4117BE1 | Since: 1207
 */
export function setNameDebug(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedNameDebug(_ped);
}
/**
 * The distance between these points, is the diagonal of a box (remember it's 3D).
 *
 * Hash: 0xEE01041D559983EA | Since: 1207
 */
export function setNonCreationArea(x1, y1, z1, x2, y2, z2) {
    SetPedNonCreationArea(x1, y1, z1, x2, y2, z2);
}
/**
 * No comment provided
 *
 * Hash: 0x028F76B6E78246EB | Since: 1207
 */
export function setOntoMount(ped, mount, seatIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    SetPedOntoMount(_ped, _mount, seatIndex, false);
}
/**
 * No comment provided
 *
 * Hash: 0x931B241409216C1F | Since: 1207
 */
export function setOwnsAnimal(ped, animal) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    SetPedOwnsAnimal(_ped, _animal, false);
}
/**
 * No comment provided
 *
 * Hash: 0xFE07FF6495D52E2A | Since: 1207
 */
export function setPanicExitScenario(ped, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedPanicExitScenario(_ped, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x01F6594B923B9251 | Since: 1207
 */
export function setRagdollForceFall(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedRagdollForceFall(_ped);
}
/**
 * Causes Ped to ragdoll on collision with any object (e.g Running into trashcan). If applied to player you will sometimes trip on the sidewalk.
 *
 * Hash: 0xF0A4F1BBF4FA7497 | Since: 1207
 */
export function setRagdollOnCollision(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedRagdollOnCollision(_ped, toggle, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC8A9481A01E63C28 | Since: 1207
 */
export function setRandomComponentVariation(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedRandomComponentVariation(_ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xADB3F206518799E8 | Since: 1207
 */
export function setRelationshipGroupDefaultHash(ped, hash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    SetPedRelationshipGroupDefaultHash(_ped, hash);
}
/**
 * No comment provided
 *
 * Hash: 0xC80A74AC829DDD92 | Since: 1207
 */
export function setRelationshipGroupHash(ped, relationshipGroup) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof relationshipGroup === 'string')
        relationshipGroup = GetHashKey(relationshipGroup);
    SetPedRelationshipGroupHash(_ped, relationshipGroup);
}
/**
 * Needs to be called every frame
 *
 * flagid:https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePedScriptResetFlags
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/CPED_RESET_FLAGS
 *
 * Hash: 0xC1E8A365BF3B29F2 | Since: 1207
 */
export function setResetFlag(ped, flagId, doReset) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedResetFlag(_ped, flagId, doReset);
}
/**
 * No comment provided
 *
 * Hash: 0xF29CF591C4BF6CEE | Since: 1207
 */
export function setSeeingRange(ped, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedSeeingRange(_ped, value);
}
/**
 * Params: shootRate = 0 - 1000
 *
 * Hash: 0x614DA022990752DC | Since: 1207
 */
export function setShootRate(ped, shootRate) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedShootRate(_ped, shootRate);
}
/**
 * lookIntensity: see SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT
 *
 * Hash: 0x802092B07E3B1EEA | Since: 1207
 */
export function setShouldPlayCombatScenarioExit(ped, pos, lookIntensity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedShouldPlayCombatScenarioExit(_ped, pos.x, pos.y, pos.z, lookIntensity);
}
/**
 * Old name: _SET_PED_SHOULD_PLAY_DIRECTED_SCENARIO_EXIT
 *
 * Hash: 0xEC6935EBE0847B90 | Since: 1207
 */
export function setShouldPlayDirectedNormalScenarioExit(ped, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedShouldPlayDirectedNormalScenarioExit(_ped, pos.x, pos.y, pos.z);
}
/**
 * lookIntensity: see SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT
 *
 * Hash: 0x62FDAD5E01D2DD47 | Since: 1207
 */
export function setShouldPlayEmotionalScenarioExit(ped, pos, lookIntensity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedShouldPlayEmotionalScenarioExit(_ped, pos.x, pos.y, pos.z, lookIntensity, false);
}
/**
 * lookIntensity:
 * 0 - REACT_LOOK_NONE
 * 1 - REACT_LOOK_LOW
 * 2 - REACT_LOOK_MEDIUM
 * 3 - REACT_LOOK_HIGH
 *
 * Hash: 0xEEED8FAFEC331A70 | Since: 1207
 */
export function setShouldPlayFleeScenarioExit(ped, pos, lookIntensity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedShouldPlayFleeScenarioExit(_ped, pos.x, pos.y, pos.z, lookIntensity);
}
/**
 * No comment provided
 *
 * Hash: 0xF1C03A5352243A30 | Since: 1207
 */
export function setShouldPlayImmediateScenarioExit(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedShouldPlayImmediateScenarioExit(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xA3A9299C4F2ADB98 | Since: 1207
 */
export function setShouldPlayNormalScenarioExit(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedShouldPlayNormalScenarioExit(_ped);
}
/**
 * lookIntensity: see SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT
 *
 * Hash: 0x463803429297117C | Since: 1207
 */
export function setShouldPlayQuickScenarioExit(ped, pos, lookIntensity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedShouldPlayQuickScenarioExit(_ped, pos.x, pos.y, pos.z, lookIntensity, false);
}
/**
 * No comment provided
 *
 * Hash: 0x9D3151A373974804 | Since: 1207
 */
export function setSphereDefensiveArea(ped, pos, radius) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedSphereDefensiveArea(_ped, pos.x, pos.y, pos.z, radius, false, false, false);
}
/**
 * Not implemented.
 *
 * Hash: 0x88CBB5CEB96B7BD2 | Since: 1207
 */
export function setStealthMovement(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedStealthMovement(_ped, toggle, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x27B0405F59637D1F | Since: 1207
 */
export function setSweat(ped, sweat) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedSweat(_ped, sweat);
}
/**
 * TLR_ExitTask = 0,
 * TLR_NeverLoseTarget,
 * TLR_SearchForTarget
 *
 * Hash: 0x0703B9079823DA4A | Since: 1207
 */
export function setTargetLossResponse(ped, responseType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedTargetLossResponse(_ped, responseType);
}
/**
 * No comment provided
 *
 * Hash: 0x112942C6E708F70B | Since: 1207
 */
export function setToInformRespectedFriends(ped, radius, maxFriends) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedToInformRespectedFriends(_ped, radius, maxFriends);
}
/**
 * Old name: _SET_PED_DAMAGE_MODIFIER
 *
 * Hash: 0xD77AE48611B7B10A | Since: 1207
 */
export function setToPlayerWeaponDamageModifier(ped, damageModifier) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedToPlayerWeaponDamageModifier(_ped, damageModifier);
}
/**
 * nmTaskMessageParameterName: See physicstasks.ymt. Search for DraggedByCart or 0xD00820D7 (Used in R* SP Script marston8)
 *
 * Hash: 0xAE99FB955581844A | Since: 1207
 */
export function setToRagdoll(ped, timeMin, timeMax, ragdollType, abortIfInjured, abortIfDead) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedToRagdoll(_ped, timeMin, timeMax, ragdollType, abortIfInjured, abortIfDead);
}
/**
 * No comment provided
 *
 * Hash: 0xD76632D99E4966C8 | Since: 1207
 */
export function setToRagdollWithFall(ped, timeMin, timeMax, ragdollType, falldirX, falldirY, falldirZ) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedToRagdollWithFall(_ped, timeMin, timeMax, ragdollType, falldirX, falldirY, falldirZ, 0, 0, 0, 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xD75ACCF5E0FB5367 | Since: 1207
 */
export function setUsingActionMode(ped, bActionModeEnabled) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedUsingActionMode(_ped, bActionModeEnabled, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x3B6405E8AB34A907 | Since: 1207
 */
export function setVisualFieldCenterAngle(ped, angle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedVisualFieldCenterAngle(_ped, angle);
}
/**
 * No comment provided
 *
 * Hash: 0x70793BDCA1E854D4 | Since: 1207
 */
export function setVisualFieldMaxAngle(ped, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedVisualFieldMaxAngle(_ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0x2DB492222FB21E26 | Since: 1207
 */
export function setVisualFieldMinAngle(ped, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedVisualFieldMinAngle(_ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0x9C74B0BC831B753A | Since: 1207
 */
export function setVisualFieldPeripheralRange(ped, range) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedVisualFieldPeripheralRange(_ped, range);
}
/**
 * `combined with PED::SET_PED_WETNESS_HEIGHT(), this native makes the ped drenched in water up to the height specified in the other function`
 *
 * Hash: 0xB5485E4907B53019 | Since: 1207
 */
export function setWetnessEnabledThisFrame(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedWetnessEnabledThisFrame(_ped);
}
/**
 * It adds the wetness level to the player clothing/outfit. As if player just got out from water surface.
 *
 * Hash: 0x44CB6447D2571AA0 | Since: 1207
 */
export function setWetnessHeight(ped, height) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedWetnessHeight(_ped, height);
}
/**
 * No comment provided
 *
 * Hash: 0xD8C3BE3EE94CAF2D | Since: 1207
 */
export function setPopControlSphereThisFrame() {
    SetPopControlSphereThisFrame(undefined, undefined, undefined, undefined, undefined);
}
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/RAGDOLL_BLOCKING_FLAGS
 *
 * flags:
 * enum eRagdollBlockingFlags
 * {
 * RBF_BULLET_IMPACT = (1 << 0),
 * RBF_VEHICLE_IMPACT = (1 << 1),
 * RBF_FIRE = (1 << 2),
 * RBF_ELECTROCUTION = (1 << 3),
 * RBF_PLAYER_IMPACT = (1 << 4),
 * RBF_EXPLOSION = (1 << 5),
 * RBF_IMPACT_OBJECT = (1 << 6),
 * RBF_MELEE = (1 << 7),
 * RBF_RUBBER_BULLET = (1 << 8),
 * RBF_FALLING = (1 << 9),
 * RBF_WATER_JET = (1 << 10),
 * RBF_DROWNING = (1 << 11),
 * RBF_0x9F52E2C4 = (1 << 12),
 * RBF_PLAYER_BUMP = (1 << 13),
 * RBF_PLAYER_RAGDOLL_BUMP = (1 << 14),
 * RBF_PED_RAGDOLL_BUMP = (1 << 15),
 * RBF_VEHICLE_GRAB = (1 << 16),
 * RBF_SMOKE_GRENADE = (1 << 17),
 * RBF_HORSE_BUMP = (1 << 18),
 * RBF_ACTIVATE_ON_COLLISION = (1 << 19)
 * };
 *
 * Hash: 0x26695EC767728D84 | Since: 1207
 */
export function setRagdollBlockingFlags(ped, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetRagdollBlockingFlags(_ped, flags);
}
/**
 * enum eRelationType
 * {
 * ACQUAINTANCE_TYPE_PED_NONE = 0,
 * ACQUAINTANCE_TYPE_PED_RESPECT = 1,
 * ACQUAINTANCE_TYPE_PED_LIKE = 2,
 * ACQUAINTANCE_TYPE_PED_IGNORE = 3,
 * ACQUAINTANCE_TYPE_PED_DISLIKE = 4,
 * ACQUAINTANCE_TYPE_PED_WANTED = 5,
 * ACQUAINTANCE_TYPE_PED_HATE = 6,
 * ACQUAINTANCE_TYPE_PED_DEAD = 7,
 * ACQUAINTANCE_TYPE_PED_DISGUISE = 8,
 * ACQUAINTANCE_TYPE_PED_THIEF = 9,
 * };
 *
 * https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eRelationType
 *
 * Hash: 0xBF25EB89375A37AD | Since: 1207
 */
export function setRelationshipBetweenGroups(relationship, group1, group2) {
    if (typeof group1 === 'string')
        group1 = GetHashKey(group1);
    if (typeof group2 === 'string')
        group2 = GetHashKey(group2);
    SetRelationshipBetweenGroups(relationship, group1, group2);
}
/**
 * No comment provided
 *
 * Hash: 0x7A556143A1C03898 | Since: 1207
 */
export function setScenarioDensityMultiplierThisFrame(multiplier) {
    SetScenarioPedDensityMultiplierThisFrame(multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0xFEE4A5459472A9F8 | Since: 1207
 */
export function spawnpointsCancelSearch() {
    SpawnpointsCancelSearch();
}
/**
 * No comment provided
 *
 * Hash: 0xA635C11B8C44AFC2 | Since: 1207
 */
export function spawnpointsGetNumSearchResults() {
    return SpawnpointsGetNumSearchResults();
}
/**
 * No comment provided
 *
 * Hash: 0x280C7E3AC7F56E90 | Since: 1207
 */
export function spawnpointsGetSearchResult(randomInt) {
    return SpawnpointsGetSearchResult(randomInt);
}
/**
 * No comment provided
 *
 * Hash: 0xB782F8238512BAD5 | Since: 1207
 */
export function spawnpointsGetSearchResultFlags() {
    return SpawnpointsGetSearchResultFlags(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3C67506996001F5E | Since: 1207
 */
export function spawnpointsIsSearchActive() {
    return SpawnpointsIsSearchActive();
}
/**
 * No comment provided
 *
 * Hash: 0xA586FBEB32A53DBB | Since: 1207
 */
export function spawnpointsIsSearchComplete() {
    return SpawnpointsIsSearchComplete();
}
/**
 * No comment provided
 *
 * Hash: 0xF445DE8DA80A1792 | Since: 1207
 */
export function spawnpointsIsSearchFailed() {
    return SpawnpointsIsSearchFailed();
}
/**
 * Params: p4 = 35.f, duration = 5000 in R* Scripts
 *
 * Hash: 0x2DF9038C90AD5264 | Since: 1207
 */
export function spawnpointsStartSearch(pos, width, spawnpointsFlag, duration) {
    SpawnpointsStartSearch(pos.x, pos.y, pos.z, width, 0, spawnpointsFlag, 0, duration, 0);
}
/**
 * Searching area between coords 1 and 2
 *
 * Hash: 0xB2AFF10216DEFA2F | Since: 1207
 */
export function spawnpointsStartSearchInAngledArea(x1, y1, z1, x2, y2, z2, width, spawnpointsFlag, duration) {
    SpawnpointsStartSearchInAngledArea(x1, y1, z1, x2, y2, z2, width, spawnpointsFlag, 0, duration, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xF9ACF4A08098EA25 | Since: 1207
 */
export function specialFunctionDoNotUse(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SpecialFunctionDoNotUse(_ped, false);
}
/**
 * Returns time since the specified ped last shot, in seconds. (fPlayerJustShotTime)
 *
 * Hash: 0x285D36C5C72B0569 | Since: 1207
 */
export function timeSinceLastShot(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TimeSincePedLastShot(_ped);
}
/**
 * If toggle is true, when the ped is using a scenario he will stop it and become scared
 * If toggle is false, the ped will not be scared anymore and continue his scenario
 *
 * Old name: _SET_PED_SCARED_WHEN_USING_SCENARIO
 *
 * Hash: 0x9A77DFD295E29B09 | Since: 1207
 */
export function toggleScenarioCowerInPlace(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ToggleScenarioPedCowerInPlace(_ped, toggle);
}
/**
 * Despite this function's name, it simply returns whether the specified handle is a Ped.
 *
 * Hash: 0x11B499C1E0FF8559 | Since: 1207
 */
export function wasSkeletonUpdated(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return WasPedSkeletonUpdated(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x00B380FF2DF6AB7A | Since: 1207
 */
export function _0x00B380FF2DF6AB7A() {
    Citizen.invokeNative('0x00B380FF2DF6AB7A', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x024EC9B649111915 | Since: 1207
 */
export function _0x024EC9B649111915(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x024EC9B649111915', _ped, false);
}
/**
 * _SET_PLAYER_SN* - _SET_PLAYER_STAMINA*
 *
 * Hash: 0x02E741E19E39628C | Since: 1207
 */
export function _0x02E741E19E39628C(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x02E741E19E39628C', _ped, 0);
}
/**
 * _DOES_GROUP_* - _DOES_N*
 *
 * Hash: 0x0455546F23FF08E4 | Since: 1207
 */
export function _0x0455546F23FF08E4(groupId) {
    return Citizen.invokeNative('0x0455546F23FF08E4', groupId);
}
/**
 * _GET_PED_D*
 *
 * Hash: 0x06A10B4D7F50B0C3 | Since: 1207
 */
export function _0x06A10B4D7F50B0C3(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x06A10B4D7F50B0C3', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x070A3841406C43D5 | Since: 1207
 */
export function _0x070A3841406C43D5() {
    Citizen.invokeNative('0x070A3841406C43D5', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x07EA5B053FA60AC7 | Since: 1207
 */
export function _0x07EA5B053FA60AC7(groupId) {
    Citizen.invokeNative('0x07EA5B053FA60AC7', groupId, false);
}
/**
 * No comment provided
 *
 * Hash: 0x09171A6F8FDE5DC1 | Since: 1207
 */
export function _0x09171A6F8FDE5DC1() {
    Citizen.invokeNative('0x09171A6F8FDE5DC1', undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x095C2277FED731DB | Since: 1207
 */
export function _0x095C2277FED731DB() {
    return Citizen.invokeNative('0x095C2277FED731DB', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x09D7AFD3716DA8E1 | Since: 1207
 */
export function _0x09D7AFD3716DA8E1(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x09D7AFD3716DA8E1', _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x0A4618FFD517E24D | Since: 1207
 */
export function _0x0A4618FFD517E24D() {
    Citizen.invokeNative('0x0A4618FFD517E24D', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0ADA3EC589E1736E | Since: 1207
 */
export function _0x0ADA3EC589E1736E() {
    Citizen.invokeNative('0x0ADA3EC589E1736E');
}
/**
 * No comment provided
 *
 * Hash: 0x0B787A37EEDD226F | Since: 1311
 */
export function _0x0B787A37EEDD226F() {
    Citizen.invokeNative('0x0B787A37EEDD226F', undefined, undefined);
}
/**
 * _IS_PED_M*
 *
 * Hash: 0x0D3B1568917EBDA0 | Since: 1207
 */
export function _0x0D3B1568917EBDA0(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x0D3B1568917EBDA0', _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x0D497AA69059FE40 | Since: 1207
 */
export function _0x0D497AA69059FE40() {
    Citizen.invokeNative('0x0D497AA69059FE40', undefined, undefined);
}
/**
 * _IS_PED_L* - _IS_PED_M*
 *
 * Hash: 0x0EEF7A81C17679DB | Since: 1207
 */
export function _0x0EEF7A81C17679DB(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x0EEF7A81C17679DB', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x0F967019CC853BCC | Since: 1207
 */
export function _0x0F967019CC853BCC() {
    Citizen.invokeNative('0x0F967019CC853BCC', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0FB1BA7FF73B41E1 | Since: 1207
 */
export function _0x0FB1BA7FF73B41E1() {
    Citizen.invokeNative('0x0FB1BA7FF73B41E1', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0FFDF937E5C11382 | Since: 1207
 */
export function _0x0FFDF937E5C11382() {
    Citizen.invokeNative('0x0FFDF937E5C11382', undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x101B45C5F56D970F | Since: 1207
 */
export function _0x101B45C5F56D970F(ped, damageCleanliness) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x101B45C5F56D970F', _ped, damageCleanliness, 0);
}
/**
 * NB_CUSTOM_CLIENT_ON_CREATE_COMPLETE - set legendary to not avoid prey
 *
 * Hash: 0x10F96086123B939F | Since: 1207
 */
export function _0x10F96086123B939F(legendaryPed, preyPed) {
    const _legendaryPed = legendaryPed instanceof IPed ? legendaryPed.handle() : legendaryPed;
    const _preyPed = preyPed instanceof IPed ? preyPed.handle() : preyPed;
    Citizen.invokeNative('0x10F96086123B939F', _legendaryPed, _preyPed, 0);
}
/**
 * _CAN_PED_SEE* - _CAN_PED_USE_(SCENARIO_HASH?)*
 *
 * Hash: 0x1148F706CF4EBDDA | Since: 1207
 */
export function _0x1148F706CF4EBDDA(ped, p1) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    return Citizen.invokeNative('0x1148F706CF4EBDDA', _ped, p1, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x1298B3D8E4C2409F | Since: 1207
 */
export function _0x1298B3D8E4C2409F() {
    Citizen.invokeNative('0x1298B3D8E4C2409F', undefined);
}
/**
 * _GET_IS_PED_(BLEEDING_OUT?)*
 *
 * Hash: 0x12EB4E31F092C9B3 | Since: 1207
 */
export function _0x12EB4E31F092C9B3(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x12EB4E31F092C9B3', _ped);
}
/**
 * _SET_A* - _SET_B*
 *
 * Hash: 0x12F2D161BF4031FC | Since: 1207
 */
export function _0x12F2D161BF4031FC(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x12F2D161BF4031FC', _ped, 0);
}
/**
 * _GET_PED_M*
 *
 * Hash: 0x134775B093AD5C38 | Since: 1207
 */
export function _0x134775B093AD5C38(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x134775B093AD5C38', _ped);
}
/**
 * _SET_SCENARIO_PED_* - _SET_SPAWNER_*
 *
 * Hash: 0x154B7E841AC7412F | Since: 1207
 */
export function _0x154B7E841AC7412F(groupId) {
    Citizen.invokeNative('0x154B7E841AC7412F', groupId, false);
}
/**
 * No comment provided
 *
 * Hash: 0x15F4732C357B1D6D | Since: 1207
 */
export function _0x15F4732C357B1D6D() {
    Citizen.invokeNative('0x15F4732C357B1D6D', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x16802C32B2FCA06B | Since: 1207
 */
export function _0x16802C32B2FCA06B() {
    Citizen.invokeNative('0x16802C32B2FCA06B', undefined, undefined, undefined, undefined);
}
/**
 * _PED_COWER_M*
 *
 * Hash: 0x16F798A05BB9E3B5 | Since: 1207
 */
export function _0x16F798A05BB9E3B5(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x16F798A05BB9E3B5', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x1D23D3F70606D788 | Since: 1207
 */
export function _0x1D23D3F70606D788() {
    Citizen.invokeNative('0x1D23D3F70606D788', undefined, undefined);
}
/**
 * _SET_PED_CA* - _SET_PED_CO*
 *
 * Hash: 0x1D4636C90BBEFACB | Since: 1207
 */
export function _0x1D4636C90BBEFACB(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x1D4636C90BBEFACB', _ped, 0);
}
/**
 * Only used in SP R* Scripts
 * Params: p2 = same as p2 of 0x3C529A827998F9B3
 * _SET_PED_TA* - _SET_PED_TO_*
 *
 * Hash: 0x1F44B7E283C09EDE | Since: 1207
 */
export function _0x1F44B7E283C09EDE(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x1F44B7E283C09EDE', _ped, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x2371C39D4F91C288 | Since: 1207
 */
export function _0x2371C39D4F91C288(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x2371C39D4F91C288', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x23BDE06596A22CEC | Since: 1207
 */
export function _0x23BDE06596A22CEC(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x23BDE06596A22CEC', _ped, 0, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x242EDF85D4E87B65 | Since: 1207
 */
export function _0x242EDF85D4E87B65() {
    return Citizen.invokeNative('0x242EDF85D4E87B65', undefined);
}
/**
 * _IS_PED_FL* - _IS_PED_FU*
 *
 * Hash: 0x256EDD55C6BE1482 | Since: 1207
 */
export function _0x256EDD55C6BE1482(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x256EDD55C6BE1482', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x273915CE30780986 | Since: 1207
 */
export function _0x273915CE30780986() {
    return Citizen.invokeNative('0x273915CE30780986', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x27E8A84C12B0B7D1 | Since: 1207
 */
export function _0x27E8A84C12B0B7D1() {
    return Citizen.invokeNative('0x27E8A84C12B0B7D1', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x28508173C6A7CC18 | Since: 1311
 */
export function _0x28508173C6A7CC18() {
    Citizen.invokeNative('0x28508173C6A7CC18', undefined);
}
/**
 * _IS_PED_L* - _IS_PED_M*
 *
 * Hash: 0x290B2E6CCDE532E1 | Since: 1207
 */
export function _0x290B2E6CCDE532E1(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x290B2E6CCDE532E1', _ped);
}
/**
 * _SET_PED_K* or _SET_PED_L*
 *
 * Hash: 0x29924EB8EE9DB926 | Since: 1207
 */
export function _0x29924EB8EE9DB926(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x29924EB8EE9DB926', _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x29F3539189D3E277 | Since: 1207
 */
export function _0x29F3539189D3E277() {
    Citizen.invokeNative('0x29F3539189D3E277', undefined, undefined);
}
/**
 * Used in Script Function CHECK_IS_PLAYER_SEEN
 * _GET_PED_*
 *
 * Hash: 0x2BA9D7BF629F920C | Since: 1207
 */
export function _0x2BA9D7BF629F920C(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x2BA9D7BF629F920C', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x2D976DBDC731DF80 | Since: 1207
 */
export function _0x2D976DBDC731DF80(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x2D976DBDC731DF80', _ped);
}
/**
 * _IS_PED_D*
 *
 * Hash: 0x2DC0E8DCBD3546E9 | Since: 1207
 */
export function _0x2DC0E8DCBD3546E9(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x2DC0E8DCBD3546E9', _ped);
}
/**
 * _IS_PED_M* - _IS_PED_O*
 *
 * Hash: 0x2DD4E0E26DFAD97D | Since: 1207
 */
export function _0x2DD4E0E26DFAD97D(ped1, ped2) {
    const _ped1 = ped1 instanceof IPed ? ped1.handle() : ped1;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    return Citizen.invokeNative('0x2DD4E0E26DFAD97D', _ped1, _ped2, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x2E5B5D1F1453E08E | Since: 1207
 */
export function _0x2E5B5D1F1453E08E(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x2E5B5D1F1453E08E', _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x2FA568BFA725F8D6 | Since: 1207
 */
export function _0x2FA568BFA725F8D6() {
    Citizen.invokeNative('0x2FA568BFA725F8D6', undefined, undefined, undefined, undefined);
}
/**
 * _GET_SHOP_ITEM_NUM_*? returns a number of ? p1 seems to be always joaat("base")
 *
 * Hash: 0x31B2E7F2E3C58B89 | Since: 1207
 */
export function _0x31B2E7F2E3C58B89(componentHash, p1, metapedType, isMP) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    return Citizen.invokeNative('0x31B2E7F2E3C58B89', componentHash, p1, metapedType, isMP);
}
/**
 * No comment provided
 *
 * Hash: 0x32417CB860A3BDC4 | Since: 1207
 */
export function _0x32417CB860A3BDC4() {
    return Citizen.invokeNative('0x32417CB860A3BDC4', undefined, undefined);
}
/**
 * Only used in R* SP Script short_update
 * _GET_TARGET_* - _GET_TRACKED*
 *
 * Hash: 0x326F7951EF0D7F75 | Since: 1207
 */
export function _0x326F7951EF0D7F75(ped, eventType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof eventType === 'string')
        eventType = GetHashKey(eventType);
    return Citizen.invokeNative('0x326F7951EF0D7F75', _ped, eventType);
}
/**
 * _SET_PED_P* - _SET_PED_R*
 *
 * Hash: 0x329772C47DBB2FBC | Since: 1207
 */
export function _0x329772C47DBB2FBC(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x329772C47DBB2FBC', _ped);
}
/**
 * _STOP_(?)*
 *
 * Hash: 0x32CCAD8A981B53D3 | Since: 1207
 */
export function _0x32CCAD8A981B53D3(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x32CCAD8A981B53D3', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x32CEDA9A0AB4CEF7 | Since: 1207
 */
export function _0x32CEDA9A0AB4CEF7(ped, p1) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    Citizen.invokeNative('0x32CEDA9A0AB4CEF7', _ped, p1, false);
}
/**
 * No comment provided
 *
 * Hash: 0x34B5CEAC180A5D6E | Since: 1207
 */
export function _0x34B5CEAC180A5D6E(ped, p1) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    Citizen.invokeNative('0x34B5CEAC180A5D6E', _ped, p1, false);
}
/**
 * No comment provided
 *
 * Hash: 0x34C11114887150FD | Since: 1207
 */
export function _0x34C11114887150FD() {
    Citizen.invokeNative('0x34C11114887150FD', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x34EDDD59364AD74A | Since: 1207
 */
export function _0x34EDDD59364AD74A(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x34EDDD59364AD74A', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x354CA4DDDEEC397A | Since: 1207
 */
export function _0x354CA4DDDEEC397A(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x354CA4DDDEEC397A', _ped);
}
/**
 * _RESET_PED_*
 *
 * Hash: 0x370A973252741AC4 | Since: 1207
 */
export function _0x370A973252741AC4(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x370A973252741AC4', _ped, false);
}
/**
 * _SET_PED_MO*
 *
 * Hash: 0x3A5697B80FED5EBE | Since: 1207
 */
export function _0x3A5697B80FED5EBE(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x3A5697B80FED5EBE', _ped, 0, 0, 0, 0);
}
/**
 * Used in R* Script net_fetch (NET_FETCH_UPDATE_RECIPIENT_PROP_ILO_IN_COMBAT) and various SP Scripts
 * Params: p1 = 4/5/6, p5 = 40.f/100.f, coords = Player ped
 * Perhaps returns some distance (Clearing that the local player is able to use ILO while in combat because they are near the recipient but also near hated peds)
 * _GET_NUM_M* - _GET_PEDS_J*
 *
 * Hash: 0x3ACCE14DFA6BA8C2 | Since: 1207
 */
export function _0x3ACCE14DFA6BA8C2(ped, pos, itemset) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x3ACCE14DFA6BA8C2', _ped, 0, pos.x, pos.y, pos.z, 0, itemset);
}
/**
 * _IS_PED_R*
 *
 * Hash: 0x3AEC4A410ECAF30D | Since: 1207
 */
export function _0x3AEC4A410ECAF30D(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x3AEC4A410ECAF30D', _ped);
}
/**
 * _SET_PED_TA* - _SET_PED_TO_*
 *
 * Hash: 0x3C529A827998F9B3 | Since: 1207
 */
export function _0x3C529A827998F9B3(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x3C529A827998F9B3', _ped, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x3EFED081B4834BA1 | Since: 1232
 */
export function _0x3EFED081B4834BA1() {
    Citizen.invokeNative('0x3EFED081B4834BA1', undefined);
}
/**
 * Used for script function PROCESS_PLAYER_HAT_EVENT
 * Returns requestId to be used with 0x13E7320C762F0477
 *
 * Hash: 0x3FCBB5FCFD968698 | Since: 1207
 */
export function _0x3FCBB5FCFD968698(drawable, albedo, normal, material) {
    if (typeof drawable === 'string')
        drawable = GetHashKey(drawable);
    if (typeof albedo === 'string')
        albedo = GetHashKey(albedo);
    if (typeof normal === 'string')
        normal = GetHashKey(normal);
    if (typeof material === 'string')
        material = GetHashKey(material);
    return Citizen.invokeNative('0x3FCBB5FCFD968698', drawable, albedo, normal, material, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3FDBB99EFD8CE4AF | Since: 1207
 */
export function _0x3FDBB99EFD8CE4AF() {
    Citizen.invokeNative('0x3FDBB99EFD8CE4AF', undefined, undefined, undefined);
}
/**
 * Changes health bar around heart core icon
 * INITIALISE_NEW_ROLE - Applying Super Jump buffs: p1 = 10, p2 = 0.0f
 * INITIALISE_NEW_ROLE - Clearing up Super Jump buffs: p1 = 10, p2 = 1.0f
 * _SET_D*
 *
 * Hash: 0x3FDCC1F8C17E303E | Since: 1207
 */
export function _0x3FDCC1F8C17E303E(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x3FDCC1F8C17E303E', _ped, 0, 0);
}
/**
 * _SET_PED_A*
 *
 * Hash: 0x405180B14DA5A935 | Since: 1207
 */
export function _0x405180B14DA5A935(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x405180B14DA5A935', _ped, false);
}
/**
 * _SET_SCENARIO_PED_* - _SET_SPAWNER_*
 *
 * Hash: 0x40C3524D4ED83554 | Since: 1207
 */
export function _0x40C3524D4ED83554(groupId) {
    Citizen.invokeNative('0x40C3524D4ED83554', groupId, false);
}
/**
 * _IS_PED_RE*
 *
 * Hash: 0x40C9155AF8BC13F3 | Since: 1207
 */
export function _0x40C9155AF8BC13F3(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x40C9155AF8BC13F3', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x413697EC260AABBF | Since: 1207
 */
export function _0x413697EC260AABBF() {
    Citizen.invokeNative('0x413697EC260AABBF', undefined, undefined, undefined);
}
/**
 * _SET_PED_IN*
 *
 * Hash: 0x41C23A8E6B344867 | Since: 1207
 */
export function _0x41C23A8E6B344867(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x41C23A8E6B344867', _ped, undefined);
}
/**
 * _SET_PED_IN*
 *
 * Hash: 0x45FEA6D5539BD474 | Since: 1207
 */
export function _0x45FEA6D5539BD474(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x45FEA6D5539BD474', _ped, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x49DADFC4CD808B0A | Since: 1207
 */
export function _0x49DADFC4CD808B0A() {
    Citizen.invokeNative('0x49DADFC4CD808B0A', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4B19F171450E0D4F | Since: 1207
 */
export function _0x4B19F171450E0D4F(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x4B19F171450E0D4F', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x4E68C7EF706DF35D | Since: 1207
 */
export function _0x4E68C7EF706DF35D(ped, pos, relationshipGroup) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof relationshipGroup === 'string')
        relationshipGroup = GetHashKey(relationshipGroup);
    Citizen.invokeNative('0x4E68C7EF706DF35D', _ped, pos.x, pos.y, pos.z, 0, relationshipGroup);
}
/**
 * _SET_PED_A*
 *
 * Hash: 0x4EC4EA2F72B36358 | Since: 1207
 */
export function _0x4EC4EA2F72B36358(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x4EC4EA2F72B36358', _ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x4F27603E44A8E4C0 | Since: 1207
 */
export function _0x4F27603E44A8E4C0(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x4F27603E44A8E4C0', _ped, 0, false);
}
/**
 * Only used in R* Script shop_harriet
 * _SET_PED_F*
 *
 * Hash: 0x4F63433CE3C08230 | Since: 1311
 */
export function _0x4F63433CE3C08230(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x4F63433CE3C08230', _ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5203038FF8BAE577 | Since: 1207
 */
export function _0x5203038FF8BAE577(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x5203038FF8BAE577', _ped, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x52250B92EA70BE3D | Since: 1207
 */
export function _0x52250B92EA70BE3D() {
    return Citizen.invokeNative('0x52250B92EA70BE3D', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x52A24D8A1DA89658 | Since: 1207
 */
export function _0x52A24D8A1DA89658(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x52A24D8A1DA89658', _ped, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0x53BA7D96B9A421D9 | Since: 1207
 */
export function _0x53BA7D96B9A421D9() {
    Citizen.invokeNative('0x53BA7D96B9A421D9', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x54D3CD482742C482 | Since: 1355
 */
export function _0x54D3CD482742C482(animal) {
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    Citizen.invokeNative('0x54D3CD482742C482', _animal, 0);
}
/**
 * _HAS_PED_*
 *
 * Hash: 0x550CB89DD7F4FA3D | Since: 1207
 */
export function _0x550CB89DD7F4FA3D(ped1, ped2) {
    const _ped1 = ped1 instanceof IPed ? ped1.handle() : ped1;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    return Citizen.invokeNative('0x550CB89DD7F4FA3D', _ped1, _ped2);
}
/**
 * No comment provided
 *
 * Hash: 0x55546004A244302A | Since: 1207
 */
export function _0x55546004A244302A() {
    Citizen.invokeNative('0x55546004A244302A', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x56076667E7C2DCD6 | Since: 1311
 */
export function _0x56076667E7C2DCD6() {
    Citizen.invokeNative('0x56076667E7C2DCD6', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x56E4BAD93D33453C | Since: 1207
 */
export function _0x56E4BAD93D33453C() {
    return Citizen.invokeNative('0x56E4BAD93D33453C', undefined, undefined);
}
/**
 * _IS_PED_C* - _IS_PED_D*
 *
 * Hash: 0x577C60BA06D0EA64 | Since: 1207
 */
export function _0x577C60BA06D0EA64(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x577C60BA06D0EA64', _ped);
}
/**
 * _SET_PED_M*
 *
 * Hash: 0x57F35552E771BE9D | Since: 1207
 */
export function _0x57F35552E771BE9D(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x57F35552E771BE9D', _ped, 0);
}
/**
 * _C*
 *
 * Hash: 0x5A1A929C8B729B4A | Since: 1207
 */
export function _0x5A1A929C8B729B4A(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x5A1A929C8B729B4A', _ped);
}
/**
 * _SET_C*
 *
 * Hash: 0x5AF24CA9C974E51A | Since: 1207
 */
export function _0x5AF24CA9C974E51A(ped1, ped2) {
    const _ped1 = ped1 instanceof IPed ? ped1.handle() : ped1;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    Citizen.invokeNative('0x5AF24CA9C974E51A', _ped1, _ped2);
}
/**
 * No comment provided
 *
 * Hash: 0x5B73975B4F12F7F3 | Since: 1207
 */
export function _0x5B73975B4F12F7F3() {
    Citizen.invokeNative('0x5B73975B4F12F7F3', undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5BB04BC74A474B47 | Since: 1207
 */
export function _0x5BB04BC74A474B47() {
    Citizen.invokeNative('0x5BB04BC74A474B47', undefined, undefined);
}
/**
 * _IS_PED_B* - _IS_PED_C*
 *
 * Hash: 0x5BF0B9D9A8E227A0 | Since: 1207
 */
export function _0x5BF0B9D9A8E227A0(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x5BF0B9D9A8E227A0', _ped);
}
/**
 * _IS_PED_IN*
 *
 * Hash: 0x5C6C7C70CA302801 | Since: 1207
 */
export function _0x5C6C7C70CA302801(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x5C6C7C70CA302801', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x5C90E20C25E6D83C | Since: 1207
 */
export function _0x5C90E20C25E6D83C() {
    Citizen.invokeNative('0x5C90E20C25E6D83C', undefined);
}
/**
 * Used in Script Function MP_MAIN_OFFLINE__INITIALIZE_FLOW & PROCESS_GENERIC_PLAYER_INITIALIZATION
 *
 * Hash: 0x5CA20FBE49891BBD | Since: 1207
 */
export function _0x5CA20FBE49891BBD(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x5CA20FBE49891BBD', _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x5CB2EBB467BE3ED6 | Since: 1355
 */
export function _0x5CB2EBB467BE3ED6(animal) {
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    Citizen.invokeNative('0x5CB2EBB467BE3ED6', _animal, 0);
}
/**
 * Related to ped hat
 * _SET_PED_LA* - _SET_PED_LE*
 *
 * Hash: 0x5D4CD22A8C82A81A | Since: 1207
 */
export function _0x5D4CD22A8C82A81A(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x5D4CD22A8C82A81A', _ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5DA36CCCB63C0895 | Since: 1207
 */
export function _0x5DA36CCCB63C0895() {
    return Citizen.invokeNative('0x5DA36CCCB63C0895', undefined, undefined, undefined);
}
/**
 * Only used in R* SP Scripts
 * _GET_PED_IN*
 *
 * Hash: 0x5E9FAF6C513347B4 | Since: 1207
 */
export function _0x5E9FAF6C513347B4(ped, eventType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof eventType === 'string')
        eventType = GetHashKey(eventType);
    return Citizen.invokeNative('0x5E9FAF6C513347B4', _ped, eventType);
}
/**
 * No comment provided
 *
 * Hash: 0x5EFA8A3D8A60D662 | Since: 1207
 */
export function _0x5EFA8A3D8A60D662() {
    return Citizen.invokeNative('0x5EFA8A3D8A60D662', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5FCF25D584065BFD | Since: 1207
 */
export function _0x5FCF25D584065BFD() {
    Citizen.invokeNative('0x5FCF25D584065BFD', undefined, undefined, undefined, undefined);
}
/**
 * Not implemented.
 *
 * Hash: 0x600BBDD29820370C | Since: 1207
 */
export function _0x600BBDD29820370C(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x600BBDD29820370C', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x604E1010E3162E86 | Since: 1207
 */
export function _0x604E1010E3162E86() {
    Citizen.invokeNative('0x604E1010E3162E86', undefined, undefined, undefined);
}
/**
 * Not implemented.
 *
 * Hash: 0x606D529DADA3C940 | Since: 1207
 */
export function _0x606D529DADA3C940(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x606D529DADA3C940', _ped, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x633F83B301C87994 | Since: 1207
 */
export function _0x633F83B301C87994() {
    Citizen.invokeNative('0x633F83B301C87994', undefined, undefined);
}
/**
 * _SET_PED_M*
 *
 * Hash: 0x642720D8D69328B6 | Since: 1207
 */
export function _0x642720D8D69328B6(ped, p1) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    Citizen.invokeNative('0x642720D8D69328B6', _ped, p1);
}
/**
 * _IS_N* - _IS_P*
 *
 * Hash: 0x6507AC3BD7C99009 | Since: 1207
 */
export function _0x6507AC3BD7C99009(pos) {
    return Citizen.invokeNative('0x6507AC3BD7C99009', pos.x, pos.y, pos.z, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x6734F0A6A52C371C | Since: 1207
 */
export function _0x6734F0A6A52C371C(player, horseSlot) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x6734F0A6A52C371C', _player, horseSlot);
}
/**
 * No comment provided
 *
 * Hash: 0x6A190B94C2541A99 | Since: 1207
 */
export function _0x6A190B94C2541A99() {
    Citizen.invokeNative('0x6A190B94C2541A99', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6A489892E813951A | Since: 1207
 */
export function _0x6A489892E813951A() {
    Citizen.invokeNative('0x6A489892E813951A', undefined);
}
/**
 * Only used in SP R* Script train_robbery3: p1 = CLIPSET@VEH_TRAIN@HANDCART@BASE_PANIC & CLIPSET@VEH_TRAIN@HANDCART@BASE_PANIC_JOHN
 *
 * Hash: 0x6E8B87139854022D | Since: 1207
 */
export function _0x6E8B87139854022D(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x6E8B87139854022D', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6F46F8ACB44C4FC1 | Since: 1207
 */
export function _0x6F46F8ACB44C4FC1() {
    return Citizen.invokeNative('0x6F46F8ACB44C4FC1', undefined);
}
/**
 * _HAS_*
 *
 * Hash: 0x7020839C7302D8AC | Since: 1207
 */
export function _0x7020839C7302D8AC(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x7020839C7302D8AC', _ped);
}
/**
 * _CLEAR*
 *
 * Hash: 0x704C908E9C405136 | Since: 1207
 */
export function _0x704C908E9C405136(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x704C908E9C405136', _ped);
}
/**
 * _SET_PED_MO*
 *
 * Hash: 0x712B2C2B2471B493 | Since: 1207
 */
export function _0x712B2C2B2471B493(ped, p1) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    Citizen.invokeNative('0x712B2C2B2471B493', _ped, p1);
}
/**
 * _SET_PED_F*
 *
 * Hash: 0x735662994E60A710 | Since: 1207
 */
export function _0x735662994E60A710(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x735662994E60A710', _ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x7406C71F4AC2FFCC | Since: 1207
 */
export function _0x7406C71F4AC2FFCC() {
    Citizen.invokeNative('0x7406C71F4AC2FFCC', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x758F081DB204DDDE | Since: 1207
 */
export function _0x758F081DB204DDDE(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x758F081DB204DDDE', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x75A082563B4452E5 | Since: 1207
 */
export function _0x75A082563B4452E5() {
    Citizen.invokeNative('0x75A082563B4452E5', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x75D3333409CD33CE | Since: 1207
 */
export function _0x75D3333409CD33CE() {
    Citizen.invokeNative('0x75D3333409CD33CE', undefined, undefined, undefined);
}
/**
 * Used in Script Function NB_EVENT_OVERRIDE__HANDLE__EVENT_DAMAGE_ENTITY
 *
 * Hash: 0x763FA8A9D76EE3A7 | Since: 1311
 */
export function _0x763FA8A9D76EE3A7(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x763FA8A9D76EE3A7', _ped);
}
/**
 * _IS_I* - _IS_L*
 *
 * Hash: 0x77243ED4F7CAAA55 | Since: 1207
 */
export function _0x77243ED4F7CAAA55(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x77243ED4F7CAAA55', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x7ABBD9E449E0DB00 | Since: 1207
 */
export function _0x7ABBD9E449E0DB00(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x7ABBD9E449E0DB00', _ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x7B5C293238EE4F20 | Since: 1207
 */
export function _0x7B5C293238EE4F20() {
    return Citizen.invokeNative('0x7B5C293238EE4F20', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7BB810E8B343AC7B | Since: 1207
 */
export function _0x7BB810E8B343AC7B() {
    return Citizen.invokeNative('0x7BB810E8B343AC7B', undefined);
}
/**
 * Only used in SP
 * _SET_REMOVE_PED*
 *
 * Hash: 0x7C08E7CB8D951B70 | Since: 1207
 */
export function _0x7C08E7CB8D951B70(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x7C08E7CB8D951B70', _ped, 0);
}
/**
 * _CLEAR_PED_M*
 *
 * Hash: 0x7C10221CE718AA72 | Since: 1207
 */
export function _0x7C10221CE718AA72(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x7C10221CE718AA72', _ped, 0);
}
/**
 * _SET_FORMATION_P*
 *
 * Hash: 0x7E5185B979706210 | Since: 1207
 */
export function _0x7E5185B979706210(groupId) {
    Citizen.invokeNative('0x7E5185B979706210', groupId, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x7E8F9949B7AABBF0 | Since: 1207
 */
export function _0x7E8F9949B7AABBF0() {
    Citizen.invokeNative('0x7E8F9949B7AABBF0', undefined, undefined, undefined);
}
/**
 * Only used in R* Script net_moonshine_property
 * _A* - _B*
 *
 * Hash: 0x7EDB3C766B0D073F | Since: 1232
 */
export function _0x7EDB3C766B0D073F(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x7EDB3C766B0D073F', _ped);
}
/**
 * _IS_PED_H* - _IS_PED_I*
 *
 * Hash: 0x7EE3A8660F38797E | Since: 1207
 */
export function _0x7EE3A8660F38797E(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x7EE3A8660F38797E', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x7F090958AE95B61B | Since: 1207
 */
export function _0x7F090958AE95B61B(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x7F090958AE95B61B', _ped, 0);
}
/**
 * _ATTACH_*
 *
 * Hash: 0x8101BA1C0B462412 | Since: 1207
 */
export function _0x8101BA1C0B462412(ped, ropeId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x8101BA1C0B462412', _ped, ropeId);
}
/**
 * _SET_PED_COMBAT_R - _SET_PED_C*
 *
 * Hash: 0x815C0074A1BC0D93 | Since: 1207
 */
export function _0x815C0074A1BC0D93(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x815C0074A1BC0D93', _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x82CB0F3F0C7785E5 | Since: 1207
 */
export function _0x82CB0F3F0C7785E5() {
    return Citizen.invokeNative('0x82CB0F3F0C7785E5', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x851966E1E35AF491 | Since: 1207
 */
export function _0x851966E1E35AF491() {
    Citizen.invokeNative('0x851966E1E35AF491', undefined, undefined);
}
/**
 * Used in Script Function SKCS_PLAYER_ROBBING
 * _SET_PED_A*
 *
 * Hash: 0x85F500F4E24CA43E | Since: 1207
 */
export function _0x85F500F4E24CA43E(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x85F500F4E24CA43E', _ped, 0);
}
/**
 * _SET_PED_*
 *
 * Hash: 0x86F0B6730C32AC14 | Since: 1207
 */
export function _0x86F0B6730C32AC14(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x86F0B6730C32AC14', _ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x86FAFC18E3D4380C | Since: 1207
 */
export function _0x86FAFC18E3D4380C(groupId) {
    Citizen.invokeNative('0x86FAFC18E3D4380C', groupId, false);
}
/**
 * No comment provided
 *
 * Hash: 0x878E8104FA27CDAE | Since: 1207
 */
export function _0x878E8104FA27CDAE(vehicle, p1) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    Citizen.invokeNative('0x878E8104FA27CDAE', _vehicle, p1);
}
/**
 * _CLEAR_PED_E* - _CLEAR_PED_L*
 *
 * Hash: 0x87C2724A56F66020 | Since: 1207
 */
export function _0x87C2724A56F66020(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x87C2724A56F66020', _ped);
}
/**
 * Only used in R* Script train_robbery4
 * _SET_PED_D*
 *
 * Hash: 0x8822F124788B8D0A | Since: 1207
 */
export function _0x8822F124788B8D0A(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x8822F124788B8D0A', _ped, false);
}
/**
 * If returned true, SET_ENABLE_BOUND_ANKLES is called in R* Script guama2
 * _GET_D* - _GET_E*
 *
 * Hash: 0x8822F139408B8D0A | Since: 1207
 */
export function _0x8822F139408B8D0A(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x8822F139408B8D0A', _ped);
}
/**
 * Used in R* Script generic_weight_control_item
 * _CLEAR_PED_E* - CLEAR_PED_(G?)L*
 *
 * Hash: 0x88A95BB640FC186F | Since: 1207
 */
export function _0x88A95BB640FC186F(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x88A95BB640FC186F', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x88B2026A3B0BE33D | Since: 1207
 */
export function _0x88B2026A3B0BE33D(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x88B2026A3B0BE33D', _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x897934E868EDDD6C | Since: 1207
 */
export function _0x897934E868EDDD6C(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x897934E868EDDD6C', _ped, 0, 0, 0, 0);
}
/**
 * _GET_PED_B* - _GET_PED_C*
 *
 * Hash: 0x89816B58C3466262 | Since: 1207
 */
export function _0x89816B58C3466262(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x89816B58C3466262', _ped);
}
/**
 * _SET_PED_O*
 *
 * Hash: 0x899DFA0009AC93DE | Since: 1207
 */
export function _0x899DFA0009AC93DE(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x899DFA0009AC93DE', _ped, 0);
}
/**
 * _SET_C*
 *
 * Hash: 0x89E59DBD15E21177 | Since: 1207
 */
export function _0x89E59DBD15E21177(groupId) {
    Citizen.invokeNative('0x89E59DBD15E21177', groupId, 0);
}
/**
 * _SET_PED_IN*
 *
 * Hash: 0x8AF46E5159A5B620 | Since: 1207
 */
export function _0x8AF46E5159A5B620(ped, speechParams) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof speechParams === 'string')
        speechParams = GetHashKey(speechParams);
    Citizen.invokeNative('0x8AF46E5159A5B620', _ped, speechParams);
}
/**
 * `Returns offset (0 < 32) to be used with MISC::SET_BIT`
 * _GET_PED_CR*
 *
 * Hash: 0x8AF8E647D6B2A649 | Since: 1207
 */
export function _0x8AF8E647D6B2A649(groupId, ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x8AF8E647D6B2A649', groupId, _ped);
}
/**
 * _SET_FORMATION_*
 *
 * Hash: 0x8AFCCC0F18D70018 | Since: 1207
 */
export function _0x8AFCCC0F18D70018(groupId) {
    Citizen.invokeNative('0x8AFCCC0F18D70018', groupId, false);
}
/**
 * No comment provided
 *
 * Hash: 0x8BA0C65AC15A7D33 | Since: 1207
 */
export function _0x8BA0C65AC15A7D33() {
    Citizen.invokeNative('0x8BA0C65AC15A7D33', undefined, undefined, undefined, undefined);
}
/**
 * Used in Script Function NET_CAMP_DOG_CLIENT_HANDLE_ANIMAL_INTERACTION
 *
 * Hash: 0x8BE24D74D74C6E9B | Since: 1207
 */
export function _0x8BE24D74D74C6E9B(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x8BE24D74D74C6E9B', _ped);
}
/**
 * _SET_PED_T* - SET_PED_U*
 *
 * Hash: 0x8CB2553C559102C1 | Since: 1207
 */
export function _0x8CB2553C559102C1(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x8CB2553C559102C1', _ped, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0x8D9DB115FBA8E23D | Since: 1207
 */
export function _0x8D9DB115FBA8E23D() {
    Citizen.invokeNative('0x8D9DB115FBA8E23D', undefined);
}
/**
 * Used in Script Function AGGRO_SHOULD_PED_HEAR_DEATH
 * _GET_PED_*
 *
 * Hash: 0x900CA00CE703E1E2 | Since: 1207
 */
export function _0x900CA00CE703E1E2(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x900CA00CE703E1E2', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9078FB0557364099 | Since: 1207
 */
export function _0x9078FB0557364099() {
    Citizen.invokeNative('0x9078FB0557364099', undefined);
}
/**
 * _IS_PED_S* - _IS_PED_U*
 *
 * Hash: 0x913D04A5176F84C9 | Since: 1207
 */
export function _0x913D04A5176F84C9(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x913D04A5176F84C9', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9184788BFF1EDAD7 | Since: 1207
 */
export function _0x9184788BFF1EDAD7() {
    Citizen.invokeNative('0x9184788BFF1EDAD7', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x91BAB9E064F036CD | Since: 1207
 */
export function _0x91BAB9E064F036CD() {
    Citizen.invokeNative('0x91BAB9E064F036CD', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x92A1B55A59720395 | Since: 1207
 */
export function _0x92A1B55A59720395() {
    Citizen.invokeNative('0x92A1B55A59720395', undefined, undefined);
}
/**
 * _GET_IS_PED_*
 *
 * Hash: 0x94132D7C8D3575C4 | Since: 1207
 */
export function _0x94132D7C8D3575C4(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x94132D7C8D3575C4', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9629FAF6460D35CB | Since: 1207
 */
export function _0x9629FAF6460D35CB(group) {
    if (typeof group === 'string')
        group = GetHashKey(group);
    Citizen.invokeNative('0x9629FAF6460D35CB', group, false);
}
/**
 * Only used in R* Script mob4 combined with SET_ANIMAL_TUNING_BOOL_PARAM
 * _SET_PED_S* - _SET_PED_TARGET_*
 *
 * Hash: 0x96595B36D6A2279B | Since: 1207
 */
export function _0x96595B36D6A2279B(animal, toggle) {
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    Citizen.invokeNative('0x96595B36D6A2279B', _animal, toggle);
}
/**
 * _SET_FORMATION_P*
 *
 * Hash: 0x966DE09688A1DE39 | Since: 1207
 */
export function _0x966DE09688A1DE39(groupId) {
    Citizen.invokeNative('0x966DE09688A1DE39', groupId, 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x96C7B659854DE629 | Since: 1207
 */
export function _0x96C7B659854DE629() {
    Citizen.invokeNative('0x96C7B659854DE629', undefined, undefined);
}
/**
 * _SET_PED_D*
 *
 * Hash: 0x97A38B65EBDA3D50 | Since: 1207
 */
export function _0x97A38B65EBDA3D50(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x97A38B65EBDA3D50', _ped, false);
}
/**
 * _CLEAR*
 *
 * Hash: 0x97B06669AC569003 | Since: 1207
 */
export function _0x97B06669AC569003(ped1, ped2) {
    const _ped1 = ped1 instanceof IPed ? ped1.handle() : ped1;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    Citizen.invokeNative('0x97B06669AC569003', _ped1, _ped2);
}
/**
 * _SET_SCENARIO_PED_* - _SET_SPAWNER_*
 *
 * Hash: 0x97C475212B327666 | Since: 1207
 */
export function _0x97C475212B327666(groupId) {
    Citizen.invokeNative('0x97C475212B327666', groupId, false);
}
/**
 * No comment provided
 *
 * Hash: 0x9851DE7AEC10B4E1 | Since: 1207
 */
export function _0x9851DE7AEC10B4E1(pos) {
    Citizen.invokeNative('0x9851DE7AEC10B4E1', pos.x, pos.y, pos.z, 0, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x992187D975635DF5 | Since: 1311
 */
export function _0x992187D975635DF5() {
    Citizen.invokeNative('0x992187D975635DF5', undefined, undefined);
}
/**
 * _CAN_PED_*
 *
 * Hash: 0x99DF2639DA76C1DC | Since: 1232
 */
export function _0x99DF2639DA76C1DC(ped1, ped2) {
    const _ped1 = ped1 instanceof IPed ? ped1.handle() : ped1;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    return Citizen.invokeNative('0x99DF2639DA76C1DC', _ped1, _ped2, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x9A4AC116CC1EEE14 | Since: 1207
 */
export function _0x9A4AC116CC1EEE14() {
    Citizen.invokeNative('0x9A4AC116CC1EEE14', undefined);
}
/**
 * _SET_PED_M*
 *
 * Hash: 0x9AB33CB5834885B3 | Since: 1207
 */
export function _0x9AB33CB5834885B3(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x9AB33CB5834885B3', _ped, 0, 0, 0, 0);
}
/**
 * Only used in SP R* Script winter1: p1 = Winter1Mount
 *
 * Hash: 0x9B65444C07B782BF | Since: 1207
 */
export function _0x9B65444C07B782BF(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x9B65444C07B782BF', _ped, undefined);
}
/**
 * Used in Script Function SKCS_PLAYER_ROBBING
 * _SET_PED_SHOULD_PLAY_* - _SET_PED_SW*
 *
 * Hash: 0x9B9B9FA0EA283E3D | Since: 1207
 */
export function _0x9B9B9FA0EA283E3D(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x9B9B9FA0EA283E3D', _ped, 0);
}
/**
 * _SET_PLAYER_CAN_B* - _SET_PLAYER_CAN_U*
 *
 * Hash: 0x9BBEAF8B0C007F1E | Since: 1207
 */
export function _0x9BBEAF8B0C007F1E(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x9BBEAF8B0C007F1E', _ped, false);
}
/**
 * _RESET_PED_*
 *
 * Hash: 0x9D8DFE2DE9CB4DFC | Since: 1207
 */
export function _0x9D8DFE2DE9CB4DFC(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x9D8DFE2DE9CB4DFC', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9E66708B2B41F14A | Since: 1207
 */
export function _0x9E66708B2B41F14A() {
    Citizen.invokeNative('0x9E66708B2B41F14A', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9F0F28B42C4EE80A | Since: 1355
 */
export function _0x9F0F28B42C4EE80A(animal) {
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    Citizen.invokeNative('0x9F0F28B42C4EE80A', _animal, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x9F933E0985E12C51 | Since: 1207
 */
export function _0x9F933E0985E12C51(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x9F933E0985E12C51', _ped, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xA064BBABB064446F | Since: 1207
 */
export function _0xA064BBABB064446F() {
    Citizen.invokeNative('0xA064BBABB064446F', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA180FBD502A03125 | Since: 1207
 */
export function _0xA180FBD502A03125() {
    return Citizen.invokeNative('0xA180FBD502A03125', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA1FBAC56D38563E2 | Since: 1207
 */
export function _0xA1FBAC56D38563E2(volume) {
    return Citizen.invokeNative('0xA1FBAC56D38563E2', volume);
}
/**
 * _SET_PED_*
 *
 * Hash: 0xA2116C1E4ED85C24 | Since: 1207
 */
export function _0xA2116C1E4ED85C24(ped, inverted) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xA2116C1E4ED85C24', _ped, inverted);
}
/**
 * No comment provided
 *
 * Hash: 0xA218D2BBCAA7388C | Since: 1207
 */
export function _0xA218D2BBCAA7388C() {
    return Citizen.invokeNative('0xA218D2BBCAA7388C', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA274F51EF7E34B95 | Since: 1207
 */
export function _0xA274F51EF7E34B95() {
    return Citizen.invokeNative('0xA274F51EF7E34B95', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA2B8E47442C76CEC | Since: 1207
 */
export function _0xA2B8E47442C76CEC() {
    Citizen.invokeNative('0xA2B8E47442C76CEC', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA2F8B3B5FEDFC100 | Since: 1207
 */
export function _0xA2F8B3B5FEDFC100() {
    Citizen.invokeNative('0xA2F8B3B5FEDFC100', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA31D350D66FA1855 | Since: 1207
 */
export function _0xA31D350D66FA1855() {
    return Citizen.invokeNative('0xA31D350D66FA1855', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA405BF9F01960C16 | Since: 1207
 */
export function _0xA405BF9F01960C16() {
    Citizen.invokeNative('0xA405BF9F01960C16', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA4AC05B1A364EBC5 | Since: 1207
 */
export function _0xA4AC05B1A364EBC5() {
    return Citizen.invokeNative('0xA4AC05B1A364EBC5', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA4B6432E3880F2F9 | Since: 1311
 */
export function _0xA4B6432E3880F2F9(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xA4B6432E3880F2F9', _ped);
}
/**
 * _DELETE_*
 *
 * Hash: 0xA6D6F03095C88F59 | Since: 1207
 */
export function _0xA6D6F03095C88F59(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xA6D6F03095C88F59', _ped);
}
/**
 * Washing player's face/hands now
 * _CLEAR_PED_E* - _CLEAR_PED_L*
 *
 * Hash: 0xA7A806677F8DE138 | Since: 1207
 */
export function _0xA7A806677F8DE138(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xA7A806677F8DE138', _ped);
}
/**
 * _CLEAR_PED_B* - _CLEAR_PED_C*
 *
 * Hash: 0xA7DC9266ED6A4E51 | Since: 1207
 */
export function _0xA7DC9266ED6A4E51(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xA7DC9266ED6A4E51', _ped);
}
/**
 * _SET_ENABLE_B* - _SET_ENABLE_H*
 *
 * Hash: 0xA8A95CECB1906EA2 | Since: 1207
 */
export function _0xA8A95CECB1906EA2(groupId) {
    Citizen.invokeNative('0xA8A95CECB1906EA2', groupId, false);
}
/**
 * Only used in R* Script mob4 and rcm_mason4
 * _SET_PED_DEFENSIVE_* - _SET_PED_DESIRED_*
 *
 * Hash: 0xA90684ED185CCB4B | Since: 1207
 */
export function _0xA90684ED185CCB4B(animal) {
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    Citizen.invokeNative('0xA90684ED185CCB4B', _animal, false, 0, 0);
}
/**
 * _SET_PED_P* - _SET_PED_R*
 *
 * Hash: 0xA967D6A8ED2D713B | Since: 1207
 */
export function _0xA967D6A8ED2D713B(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xA967D6A8ED2D713B', _ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0xAA6C49AE90A32299 | Since: 1207
 */
export function _0xAA6C49AE90A32299(ped, p1) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    Citizen.invokeNative('0xAA6C49AE90A32299', _ped, p1);
}
/**
 * No comment provided
 *
 * Hash: 0xAAC0EE3B4999ABB5 | Since: 1207
 */
export function _0xAAC0EE3B4999ABB5(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    Citizen.invokeNative('0xAAC0EE3B4999ABB5', _ped, _targetPed);
}
/**
 * No comment provided
 *
 * Hash: 0xAD3330E3C3E98007 | Since: 1207
 */
export function _0xAD3330E3C3E98007() {
    Citizen.invokeNative('0xAD3330E3C3E98007', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xAE6B68A83ABBE7C0 | Since: 1207
 */
export function _0xAE6B68A83ABBE7C0() {
    Citizen.invokeNative('0xAE6B68A83ABBE7C0', undefined);
}
/**
 * _CLEAR_PED_D*
 *
 * Hash: 0xAF041C10756C30FB | Since: 1207
 */
export function _0xAF041C10756C30FB(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xAF041C10756C30FB', _ped, false, false, false);
}
/**
 * Used to set up bad guy groups in nb_kidnapped R* Script (MP_RE_KIDNAPPED): p1 = 4.f
 * _SET_FORMATION_*
 *
 * Hash: 0xB05CC690CDE8A4A9 | Since: 1207
 */
export function _0xB05CC690CDE8A4A9(groupId) {
    return Citizen.invokeNative('0xB05CC690CDE8A4A9', groupId, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xB06F5F1DEF417216 | Since: 1207
 */
export function _0xB06F5F1DEF417216() {
    Citizen.invokeNative('0xB06F5F1DEF417216', undefined, undefined, undefined, undefined);
}
/**
 * Used in Script Function SATCHEL_COUNT_BREAKDOWN_COMPONENTS
 *
 * Hash: 0xB29C553BA582D09E | Since: 1207
 */
export function _0xB29C553BA582D09E(model, damageCleanliness) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return Citizen.invokeNative('0xB29C553BA582D09E', model, damageCleanliness, 0);
}
/**
 * _RESET_PED_C*
 *
 * Hash: 0xB4B7C92FCE7347B7 | Since: 1207
 */
export function _0xB4B7C92FCE7347B7(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xB4B7C92FCE7347B7', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xB65927F861E7AE39 | Since: 1207
 */
export function _0xB65927F861E7AE39(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xB65927F861E7AE39', _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xB8E2D655E1D5BD39 | Since: 1207
 */
export function _0xB8E2D655E1D5BD39() {
    return Citizen.invokeNative('0xB8E2D655E1D5BD39', undefined);
}
/**
 * _IS_PED_J* - _IS_PED_L*
 *
 * Hash: 0xB91AB3BE7F655D49 | Since: 1207
 */
export function _0xB91AB3BE7F655D49(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xB91AB3BE7F655D49', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xB9BDFAE609DFB7C5 | Since: 1207
 */
export function _0xB9BDFAE609DFB7C5() {
    Citizen.invokeNative('0xB9BDFAE609DFB7C5', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBB3E5370EBB6BE28 | Since: 1207
 */
export function _0xBB3E5370EBB6BE28() {
    return Citizen.invokeNative('0xBB3E5370EBB6BE28', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBC1DC48270468444 | Since: 1207
 */
export function _0xBC1DC48270468444() {
    Citizen.invokeNative('0xBC1DC48270468444', undefined);
}
/**
 * _IS_PED_M* - _IS_PED_O*
 *
 * Hash: 0xBD0E4F52F6D95242 | Since: 1207
 */
export function _0xBD0E4F52F6D95242(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xBD0E4F52F6D95242', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xBF567DF2BEF211A6 | Since: 1207
 */
export function _0xBF567DF2BEF211A6() {
    Citizen.invokeNative('0xBF567DF2BEF211A6', undefined, undefined);
}
/**
 * Only used in R* Script tg_p (CLIENT__AMBIENT_POPULATION - Player starts the populate in region)
 *
 * Hash: 0xBFA6B7731C3BAF02 | Since: 1207
 */
export function _0xBFA6B7731C3BAF02() {
    Citizen.invokeNative('0xBFA6B7731C3BAF02');
}
/**
 * _SET_PED_P* - _SET_PED_R*
 *
 * Hash: 0xC17A94CC8FC3C61A | Since: 1207
 */
export function _0xC17A94CC8FC3C61A(entity, boneId) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xC17A94CC8FC3C61A', _entity, boneId, 0, 0, 0);
}
/**
 * _FORCE_PED_*
 *
 * Hash: 0xC2722B252C79E641 | Since: 1232
 */
export function _0xC2722B252C79E641(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xC2722B252C79E641', _ped, undefined, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC2EF407645BEECDC | Since: 1207
 */
export function _0xC2EF407645BEECDC() {
    return Citizen.invokeNative('0xC2EF407645BEECDC', undefined);
}
/**
 * _SET_PED_M*
 *
 * Hash: 0xC48AF420371C7407 | Since: 1207
 */
export function _0xC48AF420371C7407(ped, grapple) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof grapple === 'string')
        grapple = GetHashKey(grapple);
    return Citizen.invokeNative('0xC48AF420371C7407', _ped, grapple);
}
/**
 * _SET_H* - _SET_I*
 *
 * Hash: 0xC5B78E41DCF8227C | Since: 1207
 */
export function _0xC5B78E41DCF8227C(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xC5B78E41DCF8227C', _ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC6136B40FFFB778B | Since: 1207
 */
export function _0xC6136B40FFFB778B() {
    Citizen.invokeNative('0xC6136B40FFFB778B', false);
}
/**
 * No comment provided
 *
 * Hash: 0xC6981AFF6D2A71C2 | Since: 1207
 */
export function _0xC6981AFF6D2A71C2() {
    Citizen.invokeNative('0xC6981AFF6D2A71C2', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC6C4E15CF7D52FEA | Since: 1207
 */
export function _0xC6C4E15CF7D52FEA() {
    Citizen.invokeNative('0xC6C4E15CF7D52FEA', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC9151483CC06A414 | Since: 1207
 */
export function _0xC9151483CC06A414(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xC9151483CC06A414', _ped);
}
/**
 * Not implemented.
 *
 * Hash: 0xC991EF46FE323867 | Since: 1207
 */
export function _0xC991EF46FE323867(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xC991EF46FE323867', _ped, undefined);
}
/**
 * _SET_PLAYER_N* - _SET_PLAYER_S*
 *
 * Hash: 0xC99F104BDF8C7F5A | Since: 1207
 */
export function _0xC99F104BDF8C7F5A(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xC99F104BDF8C7F5A', _ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0xCA95C156C14B2054 | Since: 1207
 */
export function _0xCA95C156C14B2054() {
    Citizen.invokeNative('0xCA95C156C14B2054', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCAC43D060099EA72 | Since: 1207
 */
export function _0xCAC43D060099EA72(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xCAC43D060099EA72', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xCB1A3864C524F784 | Since: 1207
 */
export function _0xCB1A3864C524F784() {
    Citizen.invokeNative('0xCB1A3864C524F784', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCB86D3E3E3708901 | Since: 1207
 */
export function _0xCB86D3E3E3708901() {
    return Citizen.invokeNative('0xCB86D3E3E3708901', undefined, undefined, undefined, undefined, undefined);
}
/**
 * Only used in R* SP Scripts
 * _GET_PLAYER_W* - _GET_RANDOM_*
 *
 * Hash: 0xCB8F4C9343EBE240 | Since: 1207
 */
export function _0xCB8F4C9343EBE240(ped, eventType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof eventType === 'string')
        eventType = GetHashKey(eventType);
    return Citizen.invokeNative('0xCB8F4C9343EBE240', _ped, eventType);
}
/**
 * No comment provided
 *
 * Hash: 0xCBDE59C48F2B06F5 | Since: 1207
 */
export function _0xCBDE59C48F2B06F5() {
    Citizen.invokeNative('0xCBDE59C48F2B06F5', undefined, undefined, undefined);
}
/**
 * _SET_PED_R* - _SET_PED_S*
 *
 * Hash: 0xCD9E5F94A2F38683 | Since: 1207
 */
export function _0xCD9E5F94A2F38683(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xCD9E5F94A2F38683', _ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0xCDFB8C04D4C95D9B | Since: 1207
 */
export function _0xCDFB8C04D4C95D9B() {
    Citizen.invokeNative('0xCDFB8C04D4C95D9B', undefined, undefined, undefined, undefined);
}
/**
 * _SET_PED_COMBAT_*
 *
 * Hash: 0xCF0B19806473D324 | Since: 1207
 */
export function _0xCF0B19806473D324(ped, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xCF0B19806473D324', _ped, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xD049920CD29F6CC8 | Since: 1207
 */
export function _0xD049920CD29F6CC8() {
    Citizen.invokeNative('0xD049920CD29F6CC8', undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD049FDAF089FDDB0 | Since: 1207
 */
export function _0xD049FDAF089FDDB0(ped, p1) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    Citizen.invokeNative('0xD049FDAF089FDDB0', _ped, p1, 0);
}
/**
 * Params: p1 either a 1 or 0, so perhaps BOOL
 * _SET_PED_A*
 *
 * Hash: 0xD103F6DBB5442BE8 | Since: 1207
 */
export function _0xD103F6DBB5442BE8(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xD103F6DBB5442BE8', _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xD2F0FE8805D91647 | Since: 1207
 */
export function _0xD2F0FE8805D91647() {
    Citizen.invokeNative('0xD2F0FE8805D91647', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD355E2F1BB41087E | Since: 1207
 */
export function _0xD355E2F1BB41087E(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xD355E2F1BB41087E', _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xD4D403EA031F351C | Since: 1207
 */
export function _0xD4D403EA031F351C(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xD4D403EA031F351C', _ped);
}
/**
 * Used in Script Function LA_CHECK_ALERTED
 * _GET_IS_PED_*
 *
 * Hash: 0xD55DB4466D00A258 | Since: 1207
 */
export function _0xD55DB4466D00A258(legendaryAnimal) {
    const _legendaryAnimal = legendaryAnimal instanceof IPed ? legendaryAnimal.handle() : legendaryAnimal;
    return Citizen.invokeNative('0xD55DB4466D00A258', _legendaryAnimal);
}
/**
 * _SET_FORMATION_*
 *
 * Hash: 0xD5BD1B5318A81994 | Since: 1207
 */
export function _0xD5BD1B5318A81994(groupId) {
    Citizen.invokeNative('0xD5BD1B5318A81994', groupId, false);
}
/**
 * No comment provided
 *
 * Hash: 0xD61FCF9FCFD515B7 | Since: 1207
 */
export function _0xD61FCF9FCFD515B7() {
    Citizen.invokeNative('0xD61FCF9FCFD515B7', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD7D2F45C56A4F4DF | Since: 1207
 */
export function _0xD7D2F45C56A4F4DF() {
    Citizen.invokeNative('0xD7D2F45C56A4F4DF', undefined, undefined, undefined);
}
/**
 * METAPED_PLAYER_COMPONENTS_SET_META_TYPE_TO_BE_BYPASSED: Setting visibility
 * p1 is mostly 10
 * _CLEAR_PED_N* - _CLEAR_PED_W*
 *
 * Hash: 0xD8544F6260F5F01E | Since: 1232
 */
export function _0xD8544F6260F5F01E(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xD8544F6260F5F01E', _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xD8CEEED54C672B5D | Since: 1207
 */
export function _0xD8CEEED54C672B5D() {
    Citizen.invokeNative('0xD8CEEED54C672B5D', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD97BC27AC039F681 | Since: 1311
 */
export function _0xD97BC27AC039F681() {
    return Citizen.invokeNative('0xD97BC27AC039F681', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDD9540E7B1C9714F | Since: 1207
 */
export function _0xDD9540E7B1C9714F(ped, p1, r, g, b) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    Citizen.invokeNative('0xDD9540E7B1C9714F', _ped, p1, r, g, b);
}
/**
 * _SET_FORMATION_P*
 *
 * Hash: 0xDDFAD4DEAA7FA362 | Since: 1207
 */
export function _0xDDFAD4DEAA7FA362(groupId) {
    Citizen.invokeNative('0xDDFAD4DEAA7FA362', groupId, 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xDEDBED3020DA49DC | Since: 1207
 */
export function _0xDEDBED3020DA49DC() {
    Citizen.invokeNative('0xDEDBED3020DA49DC', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDEE8D30AA5C2E28D | Since: 1207
 */
export function _0xDEE8D30AA5C2E28D(ped, p1) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    Citizen.invokeNative('0xDEE8D30AA5C2E28D', _ped, p1, false);
}
/**
 * No comment provided
 *
 * Hash: 0xE0FE107AB174D64A | Since: 1207
 */
export function _0xE0FE107AB174D64A() {
    Citizen.invokeNative('0xE0FE107AB174D64A', undefined, undefined);
}
/**
 * _SET_FORMATION_P*
 *
 * Hash: 0xE1103300F3456DE7 | Since: 1207
 */
export function _0xE1103300F3456DE7(groupId) {
    Citizen.invokeNative('0xE1103300F3456DE7', groupId, 0, 0);
}
/**
 * _C*
 *
 * Hash: 0xE1AADD0055D76603 | Since: 1207
 */
export function _0xE1AADD0055D76603(ped, entity, boneIndex1, boneIndex2, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xE1AADD0055D76603', _ped, _entity, boneIndex1, boneIndex2, pos.x, pos.y, pos.z, 0, false, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xE1B3BE07D3AADDED | Since: 1207
 */
export function _0xE1B3BE07D3AADDED(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xE1B3BE07D3AADDED', _ped, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0xE20027B414BFE6C7 | Since: 1207
 */
export function _0xE20027B414BFE6C7() {
    Citizen.invokeNative('0xE20027B414BFE6C7', undefined, undefined);
}
/**
 * _SET_PED_R* -_SET_PED_S*
 *
 * Hash: 0xE29D8CD66553DBAA | Since: 1207
 */
export function _0xE29D8CD66553DBAA(horse) {
    const _horse = horse instanceof IPed ? horse.handle() : horse;
    Citizen.invokeNative('0xE29D8CD66553DBAA', _horse);
}
/**
 * _SET_PED_IN*
 *
 * Hash: 0xE37ACEE15AC50C7E | Since: 1207
 */
export function _0xE37ACEE15AC50C7E(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xE37ACEE15AC50C7E', _ped, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE4C95E0AE31C6512 | Since: 1207
 */
export function _0xE4C95E0AE31C6512(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xE4C95E0AE31C6512', _ped, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE4EF4382E22C780C | Since: 1207
 */
export function _0xE4EF4382E22C780C() {
    Citizen.invokeNative('0xE4EF4382E22C780C', undefined);
}
/**
 * _SET_D*
 *
 * Hash: 0xE50C9816B3F22D8B | Since: 1311
 */
export function _0xE50C9816B3F22D8B(ped, p1) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    Citizen.invokeNative('0xE50C9816B3F22D8B', _ped, p1, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xE6CB36F43A95D75F | Since: 1207
 */
export function _0xE6CB36F43A95D75F() {
    Citizen.invokeNative('0xE6CB36F43A95D75F', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE735A7DA22E88359 | Since: 1207
 */
export function _0xE735A7DA22E88359() {
    Citizen.invokeNative('0xE735A7DA22E88359', undefined);
}
/**
 * Only used in R* Script nb_animal_attack: p2 = 120000
 * _SET_PED_SH* - _SET_PED_SP*
 *
 * Hash: 0xE737D5F14304A2EC | Since: 1207
 */
export function _0xE737D5F14304A2EC(ped, player) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xE737D5F14304A2EC', _ped, _player, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xE8ABE3B73FC7FE17 | Since: 1207
 */
export function _0xE8ABE3B73FC7FE17() {
    Citizen.invokeNative('0xE8ABE3B73FC7FE17', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE9E06EA514A69061 | Since: 1207
 */
export function _0xE9E06EA514A69061() {
    Citizen.invokeNative('0xE9E06EA514A69061', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEA8763E505AFD49A | Since: 1207
 */
export function _0xEA8763E505AFD49A() {
    Citizen.invokeNative('0xEA8763E505AFD49A', undefined, undefined, undefined);
}
/**
 * Washing player's face/hands now
 * _FA* - _FI*
 *
 * Hash: 0xEB8886E1065654CD | Since: 1207
 */
export function _0xEB8886E1065654CD(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xEB8886E1065654CD', _ped, 0, undefined, 0);
}
/**
 * If returned true: PROCESS_RESIZING_TRACKING_BOUNDS_VOLUME - Scaling UP the bounds due to tracking
 * If returned false: PROCESS_RESIZING_TRACKING_BOUNDS_VOLUME - Scaling DOWN the bounds due to tracking
 * _IS_PED_T* - _IS_PED_U*
 *
 * Hash: 0xEBAAC9A750E7563B | Since: 1207
 */
export function _0xEBAAC9A750E7563B(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xEBAAC9A750E7563B', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEBD49472BCCF7642 | Since: 1207
 */
export function _0xEBD49472BCCF7642() {
    Citizen.invokeNative('0xEBD49472BCCF7642', undefined, undefined);
}
/**
 * _SET_C*
 *
 * Hash: 0xEC60D1D225BC50AA | Since: 1207
 */
export function _0xEC60D1D225BC50AA(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xEC60D1D225BC50AA', _ped, 0);
}
/**
 * Only used in R* Script nb_stalking_hunter
 *
 * Hash: 0xED1C764997A86D5A | Since: 1207
 */
export function _0xED1C764997A86D5A(ped1, ped2) {
    const _ped1 = ped1 instanceof IPed ? ped1.handle() : ped1;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    Citizen.invokeNative('0xED1C764997A86D5A', _ped1, _ped2);
}
/**
 * No comment provided
 *
 * Hash: 0xEEDC9B29314B2733 | Since: 1207
 */
export function _0xEEDC9B29314B2733() {
    Citizen.invokeNative('0xEEDC9B29314B2733', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * _ADD_*
 *
 * Hash: 0xEF371232BC6053E1 | Since: 1207
 */
export function _0xEF371232BC6053E1(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xEF371232BC6053E1', _ped);
}
/**
 * Used in Script Function MOONSHINE_BAND_CLIENT_PATRON_UPDATE
 *
 * Hash: 0xF47D54B986F0A346 | Since: 1232
 */
export function _0xF47D54B986F0A346(ped, danceIntensity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xF47D54B986F0A346', _ped, danceIntensity);
}
/**
 * Only used in SP Scripts
 * Returns count / index
 * _C*
 *
 * Hash: 0xF4860514AD354226 | Since: 1207
 */
export function _0xF4860514AD354226(shockingEvent, pos) {
    return Citizen.invokeNative('0xF4860514AD354226', shockingEvent, pos.x, pos.y, pos.z, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xF634E2892220EF34 | Since: 1207
 */
export function _0xF634E2892220EF34(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xF634E2892220EF34', _ped, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF6A8C4B4A11AE89C | Since: 1207
 */
export function _0xF6A8C4B4A11AE89C() {
    return Citizen.invokeNative('0xF6A8C4B4A11AE89C', undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF7327ACC7A89AEF1 | Since: 1207
 */
export function _0xF7327ACC7A89AEF1() {
    return Citizen.invokeNative('0xF7327ACC7A89AEF1', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF917F92BF22ECBAB | Since: 1207
 */
export function _0xF917F92BF22ECBAB() {
    Citizen.invokeNative('0xF917F92BF22ECBAB', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF9331B3A314EB49D | Since: 1207
 */
export function _0xF9331B3A314EB49D(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xF9331B3A314EB49D', _ped);
}
/**
 * Used in Script Function PLAYER_HEAD_TRACKING_MAINTAIN
 *
 * Hash: 0xF9CBD46433E36713 | Since: 1207
 */
export function _0xF9CBD46433E36713(ped, targetEntity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetEntity = targetEntity instanceof IEntity ? targetEntity.handle() : targetEntity;
    Citizen.invokeNative('0xF9CBD46433E36713', _ped, _targetEntity, 0, 0, 0, 0, 0, 0, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFA0D206B489A6846 | Since: 1207
 */
export function _0xFA0D206B489A6846() {
    Citizen.invokeNative('0xFA0D206B489A6846', undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFA742B82D093D848 | Since: 1207
 */
export function _0xFA742B82D093D848() {
    Citizen.invokeNative('0xFA742B82D093D848', undefined, undefined, undefined);
}
/**
 * _HAS_PED_*
 *
 * Hash: 0xFA8C10DCE0706D43 | Since: 1207
 */
export function _0xFA8C10DCE0706D43(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xFA8C10DCE0706D43', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xFC23348F0F4E245F | Since: 1207
 */
export function _0xFC23348F0F4E245F() {
    Citizen.invokeNative('0xFC23348F0F4E245F', undefined, undefined, undefined, undefined);
}
/**
 * _DISABLE_A* - _DISABLE_C*
 *
 * Hash: 0xFD3C31A2E45671E7 | Since: 1207
 */
export function _0xFD3C31A2E45671E7(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xFD3C31A2E45671E7', _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xFD8E853F0BC2E942 | Since: 1207
 */
export function _0xFD8E853F0BC2E942() {
    Citizen.invokeNative('0xFD8E853F0BC2E942', undefined, undefined);
}
/**
 * METAPED_PLAYER_COMPONENTS_SET_META_TYPE_TO_BE_BYPASSED: Setting visibility
 * _SET_M* - _SET_P*
 *
 * Hash: 0xFEA6126C34DF2532 | Since: 1207
 */
export function _0xFEA6126C34DF2532(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xFEA6126C34DF2532', _ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0xFFA1594703ED27CA | Since: 1207
 */
export function _0xFFA1594703ED27CA(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xFFA1594703ED27CA', _ped, 0);
}
/**
 * _GET_PED_COMBAT_M* - _GET_PED_C*
 *
 * Hash: 0xFFDE295662405B25 | Since: 1207
 */
export function _0xFFDE295662405B25(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xFFDE295662405B25', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xE9B168527B337BF0 | Since: 1207
 */
export function addStayOutVolume(ped, volume) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return AddPedStayOutVolume(_ped, volume);
}
/**
 * No comment provided
 *
 * Hash: 0xE37287EE358939C3 | Since: 1311
 */
export function addSubscribeToLegendaryBlips(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return AddPedSubscribeToLegendaryBlips(_ped);
}
/**
 * flag: see ADD_SCENARIO_BLOCKING_AREA
 *
 * Hash: 0x4C39C95AE5DB1329 | Since: 1207
 */
export function addScenarioBlockingVolume(volume, flag) {
    return AddScenarioBlockingVolume(volume, false, flag);
}
/**
 * Forces transition now, called together with 0xD65FDC686A031C83
 *
 * Hash: 0x6D07B371E9439019 | Since: 1207
 */
export function addScenarioTransition(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    AddScenarioTransition(_ped);
}
/**
 * Creates ped overlay in texture override data and returns it's index.
 * This index are used for further overlay editing.
 *
 * albedoHash: a hash of overlay's albedo texture
 * colorType: a color type(from 0 to 2). 0 is used for overlays with RGB colors usually.
 *
 * Hash: 0x86BB5FF45F193A02 | Since: 1207
 */
export function addTextureLayer(textureId, albedoHash, normalHash, materialHash, blendType, texAlpha, sheetGridIndex) {
    if (typeof albedoHash === 'string')
        albedoHash = GetHashKey(albedoHash);
    if (typeof normalHash === 'string')
        normalHash = GetHashKey(normalHash);
    if (typeof materialHash === 'string')
        materialHash = GetHashKey(materialHash);
    return AddTextureLayer(textureId, albedoHash, normalHash, materialHash, blendType, texAlpha, sheetGridIndex);
}
/**
 * Apply cold intensity to ped from 0.0 to 1.0
 *
 * Hash: 0x1F8215D0E446F593 | Since: 1207
 */
export function applyColdTo(ped, intensity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x1F8215D0E446F593', _ped, intensity, 0);
}
/**
 * seems to only work with PD_Vomit ?
 *
 * Hash: 0x58D32261AE0F0843 | Since: 1207
 */
export function applyDamagePackToBone(ped, boneId, xOffset, yOffset, zOffset, rot, damagePack) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x58D32261AE0F0843', _ped, boneId, xOffset, yOffset, zOffset, rot.x, rot.y, rot.z, damagePack);
}
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/clothes/metaped_outfits.lua
 *
 * Hash: 0x74F512E29CB717E2 | Since: 1207
 */
export function applyMetaPedOutfit(requestId, ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return ApplyPedMetaPedOutfit(requestId, _ped, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xD3A7B003ED343FD9 | Since: 1207
 */
export function applyShopItemTo(ped, componentHash, immediately, isMp) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    ApplyShopItemToPed(_ped, componentHash, immediately, isMp, false);
}
/**
 * No comment provided
 *
 * Hash: 0x0B46E25761519058 | Since: 1207
 */
export function applyTextureOn(ped, componentHash, textureId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    ApplyTextureOnPed(_ped, componentHash, textureId);
}
/**
 * No comment provided
 *
 * Hash: 0x5E420FF293EE5472 | Since: 1207
 */
export function areAllAmbientReservationsReady() {
    return AreAllAmbientPedReservationsReady();
}
/**
 * No comment provided
 *
 * Hash: 0x7C00CFC48A782DC0 | Since: 1207
 */
export function attachVolumeToEntity(volume, entity, offsetX, offsetY, offsetZ, rot) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    AttachVolumeToEntity(volume, _entity, offsetX, offsetY, offsetZ, rot.x, rot.y, rot.z, 0, false);
}
/**
 * Returns true if `listener` can hear `source`.
 * If `includeNoiseBoost` is true, the source's noise radius is applied (easier to hear).
 * It treats the source as louder—its current noise expands the effective hearing range (by subtracting noiseRadius² from dist²), while false uses the baseline distance-only check (stealth).
 *
 * Hash: 0x0EA9EACBA3B01601 | Since: 1207
 */
export function canHearTargetPed(source, listener, includeNoiseBoost) {
    const _source = source instanceof IPed ? source.handle() : source;
    const _listener = listener instanceof IPed ? listener.handle() : listener;
    return Citizen.invokeNative('0x0EA9EACBA3B01601', _source, _listener, includeNoiseBoost);
}
/**
 * p2 is always 0, p3 is always 0, p4 is always 1
 *
 * Hash: 0xAB643407D0B26F07 | Since: 1207
 */
export function canUseScenarioPoint(ped, scenario) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return CanPedUseScenarioPoint(_ped, scenario, undefined, undefined, undefined);
}
/**
 * Alters entity's stamina by 'amount'. Can be negative (to drain stamina). float amount: -1000.0 - 1000.0
 *
 * Hash: 0xC3D4B754C0E86B9E | Since: 1207
 */
export function changeStamina(ped, amount) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return ChangePedStamina(_ped, amount);
}
/**
 * Used in Script Functions PLAYER_HORSE_RELEASE_HORSE_TO_AMBIENT_WORLD (p1 = true), HORSE_SETUP_PLAYER_HORSE_ATTRIBUTES (p1 = false)
 * Set to false for player horse in scripts and seems it's only true when releasing/changing a player horse? Cannot determine what effect it has, but it doesn't seem to affect _GET_HORSE_TAMING_STATE
 *
 * Hash: 0xBCC76708E5677E1D | Since: 1207
 */
export function clearActiveAnimalOwner(horse, clear) {
    const _horse = horse instanceof IPed ? horse.handle() : horse;
    ClearActiveAnimalOwner(_horse, clear);
}
/**
 * No comment provided
 *
 * Hash: 0x949B2F9ED2917F5D | Since: 1207
 */
export function clearActionDisableFlag(ped, actionDisableFlag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedActionDisableFlag(_ped, actionDisableFlag);
}
/**
 * No comment provided
 *
 * Hash: 0x7F5D88333EE8A86F | Since: 1207
 */
export function clearBloodDamageFacial(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedBloodDamageFacial(_ped, 0);
}
/**
 * Params: p1 = 1 in R* Scripts
 *
 * Hash: 0x78815FC52832B690 | Since: 1207
 */
export function clearCombatStyle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedCombatStyle(_ped, 0);
}
/**
 * _CLEAR_PED_COMBAT_*
 *
 * Hash: 0x1FA132CBCD7CB239 | Since: 1207
 */
export function clearCombatStyleMod(ped, combatStyleModHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof combatStyleModHash === 'string')
        combatStyleModHash = GetHashKey(combatStyleModHash);
    ClearPedCombatStyleMod(_ped, combatStyleModHash);
}
/**
 * Clears locomotion archetype
 *
 * Hash: 0x4FD80C3DD84B817B | Since: 1207
 */
export function clearDesiredLocoForModel(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedDesiredLocoForModel(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x58F7DB5BD8FA2288 | Since: 1207
 */
export function clearDesiredLocoMotionType(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedDesiredLocoMotionType(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEAE3B5B019C8D23F | Since: 1207
 */
export function clearGrappleFlag(ped, flag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedGrappleFlag(_ped, flag);
}
/**
 * No comment provided
 *
 * Hash: 0xBBF6D1D07C02D00A | Since: 1207
 */
export function clearTargetActionDisableFlag(ped, actionDisableFlag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedTargetActionDisableFlag(_ped, actionDisableFlag);
}
/**
 * Removes every texture layer
 * Old Name: _RESET_PED_TEXTURE_2
 *
 * Hash: 0xB63B9178D0F58D82 | Since: 1207
 */
export function clearTexture(textureId) {
    ClearPedTexture(textureId);
}
/**
 * No comment provided
 *
 * Hash: 0x627F7F3A0C4C51FF | Since: 1207
 */
export function clearPeltFromHorse(horse, peltId) {
    const _horse = horse instanceof IPed ? horse.handle() : horse;
    ClearPeltFromHorse(_horse, peltId);
}
/**
 * Returns vehicle (desired) speed
 * _COMPUTE_(VEHICLE_SPEED_USING_BLEND_RATIO?)*
 *
 * Hash: 0x46BF2A810679D6E6 | Since: 1207
 */
export function computeMoveBlendRatioForMaxSpeed(ped, maxMoveBlendRatio) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x46BF2A810679D6E6', _ped, maxMoveBlendRatio);
}
/**
 * Related to dead animals items/loots
 * Notice: skinningQuality is partially calculated using pedQuality
 *
 * Hash: 0x6B89FAA36FC909A3 | Since: 1207
 */
export function computeSatchelItemForCarcass(ped, damageCleanliness, skinningQuality) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return ComputeSatchelItemForPedCarcass(_ped, damageCleanliness, skinningQuality);
}
/**
 * Returns vehicle speed
 *
 * Hash: 0xCA95924C893A0C91 | Since: 1207
 */
export function computeSpeedForMoveBlendRatio(ped, speed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xCA95924C893A0C91', _ped, speed);
}
/**
 * Creates a handle to an instance of "CScriptResource_GravityWell", this system forces local ped to target specified position when moving, however player still can interrupt this.
 * Can be useful to "point" player at some specific position.
 * Only works while on-foot.
 *
 * _CREATE_[P-Z]
 *
 * Hash: 0x4F5EBE70081E5A20 | Since: 1207
 */
export function createGravityWell(pos, heading, radius, stopAtDestination) {
    return CreateGravityWell(pos.x, pos.y, pos.z, heading, radius, 0, 0, 0, stopAtDestination);
}
/**
 * Only used in SP scripts, for example odriscolls1: BOOLS: true, true, true, false, false
 *
 * Hash: 0x0BCD4091C8EABA42 | Since: 1207
 */
export function createMeta(requestId, pos, heading) {
    return CreateMetaPed(requestId, pos.x, pos.y, pos.z, heading, false, false, false, false, false);
}
/**
 * Creates prop from metaped asset bundle
 * https://github.com/femga/rdr3_discoveries/blob/master/objects/metaped_asset_bundles_list.lua
 * Creates a pickup-able metaped component. asset doesn't seems to be related to component hashes. Hash example : 0xD20354AB (https ://i.imgur.com/dzHkcDb.png)
 *
 * Hash: 0x9641A9A20310F6B8 | Since: 1207
 */
export function createMetaAsset(asset, pos, rot) {
    if (typeof asset === 'string')
        asset = GetHashKey(asset);
    return CreateMetaPedAsset(asset, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, false, false, false);
}
/**
 * Creates metaped from ped outfit requestId. See _REQUEST_METAPED_OUTFIT
 *
 * Hash: 0xEAF682A14F8E5F53 | Since: 1207
 */
export function createMetaOutfitPed(requestId, pos, heading) {
    return CreateMetaPedOutfitPed(requestId, pos.x, pos.y, pos.z, heading, false, false, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x19C975B81BE53C28 | Since: 1207
 */
export function detachVolumeFromEntity(volume, entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    DetachVolumeFromEntity(volume, _entity);
}
/**
 * No comment provided
 *
 * Hash: 0xE1965A380342BE1F | Since: 1355
 */
export function disableAllLookAtRequests(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    DisableAllLookAtRequests(_ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x80038740C96AD17F | Since: 1207
 */
export function disableAmbientLookAtRequests() {
    DisableAmbientLookAtRequests(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC0E880B7A441164D | Since: 1207
 */
export function doesMetaOutfitExistForPedModel(outfit, model) {
    if (typeof outfit === 'string')
        outfit = GetHashKey(outfit);
    if (typeof model === 'string')
        model = GetHashKey(model);
    return DoesMetaPedOutfitExistForPedModel(outfit, model);
}
/**
 * No comment provided
 *
 * Hash: 0x4FF3C2B4E6A196C1 | Since: 1207
 */
export function doesMetaSuboutfitExistForPedModel(outfit, suboutfit, model) {
    if (typeof outfit === 'string')
        outfit = GetHashKey(outfit);
    if (typeof suboutfit === 'string')
        suboutfit = GetHashKey(suboutfit);
    if (typeof model === 'string')
        model = GetHashKey(model);
    return DoesMetaPedSuboutfitExistForPedModel(outfit, suboutfit, model);
}
/**
 * Note: you have to update your ped's variation after calling (using 0xCC8CA3E88256E58F)
 *
 * Body Types:
 * MPCREATOR_NEUTRAL
 * MPCREATOR_SKINNY
 * MPCREATOR_SKINNY_MUSCULAR
 * MPCREATOR_HEAVY
 * MPCREATOR_HEAVY_MUSCULAR
 *
 * eBodyWeightOutfit (pedattributes.ymt):
 * -2045421226 (smallest)
 * -1745814259
 * -325933489
 * -1065791927
 * -844699484
 * -1273449080
 * 927185840
 * 149872391
 * 399015098
 * -644349862
 * 1745919061 (default)
 * 1004225511
 * 1278600348
 * 502499352
 * -2093198664
 * -1837436619
 * 1736416063
 * 2040610690
 * -1173634986
 * -867801909
 * 1960266524 (biggest)
 *
 * https://github.com/femga/rdr3_discoveries/blob/master/peds_customization/ped_outfits.lua
 *
 * Alt name: _EQUIP_META_PED_OUTFIT_COMPONENT
 *
 * Hash: 0x1902C4CFCC5BE57C | Since: 1207
 */
export function equipMetaOutfit(ped, hash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    EquipMetaPedOutfit(_ped, hash);
}
/**
 * Changes Multiplayer ped face and body type components, they can be stacked
 * Params: p3 = 1
 * Body shape for mp_male from 124 - 128, 110 - 115 for mp_female
 * Face shape for mp_male from 110 - 123, 96 - 109 for mp_female
 * Cloth type for mp_male from 0 - 109, 0 - 95 for mp_female
 *
 * Hash: 0xA5BAE410B03E7371 | Since: 1207
 */
export function equipMetaOutfitExtra(ped, component) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    EquipMetaPedOutfitExtra(_ped, component, undefined, undefined);
}
/**
 * Sets the outfit preset for the ped. The presetId is an index which determines its preset outfit. p2 is always false in the scripts.
 * If p2 is true as player, then certain components like facial hair and hair will not be removed.
 * Old name: _SET_PED_OUTFIT_PRESET
 *
 * Hash: 0x77FF8D35EEC6BBC4 | Since: 1207
 */
export function equipMetaOutfitPreset(ped, presetId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    EquipMetaPedOutfitPreset(_ped, presetId, false);
}
/**
 * No comment provided
 *
 * Hash: 0x66FF395445A88A6E | Since: 1207
 */
export function equipMetaSuboutfit(ped, suboutfit) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof suboutfit === 'string')
        suboutfit = GetHashKey(suboutfit);
    EquipMetaPedSuboutfit(_ped, suboutfit, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x8B3CB08158E98481 | Since: 1207
 */
export function fakeSetLocoInjured(ped, enabled) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    FakeSetPedLocoInjured(_ped, enabled);
}
/**
 * No comment provided
 *
 * Hash: 0x1CE875505D45338A | Since: 1207
 */
export function forceDeath(ped, pedKiller, weapon) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _pedKiller = pedKiller instanceof IPed ? pedKiller.handle() : pedKiller;
    if (typeof weapon === 'string')
        weapon = GetHashKey(weapon);
    ForcePedDeath(_ped, _pedKiller, weapon);
}
/**
 * No comment provided
 *
 * Hash: 0xDC9273D95976BA22 | Since: 1207
 */
export function getAccuracyAgainstLocalPlayerModifier(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetAccuracyAgainstLocalPlayerModifier(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xF103823FFE72BB49 | Since: 1207
 */
export function getActiveAnimalOwner(animal) {
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    return GetActiveAnimalOwner(_animal);
}
/**
 * Returns kneeling, sitting, squating, and sleeping scenario hashes
 *
 * Hash: 0x569F1E1237508DEB | Since: 1207
 */
export function getActiveDynamicScenario(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetActiveDynamicScenario(_ped);
}
/**
 * Returns kneeling, sitting, squating, and sleeping scenario hashes
 *
 * Hash: 0xC22AA08A8ADB87D4 | Since: 1207
 */
export function getActiveDynamicScenario2(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetActiveDynamicScenario2(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x268B3AEBF032A88D | Since: 1207
 */
export function getBlockingOfNonTemporaryEvents(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetBlockingOfNonTemporaryEvents(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6F43C351A5D51E2F | Since: 1207
 */
export function getCarriedPeltSkins(mount) {
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    return Citizen.invokeNative('0x6F43C351A5D51E2F', _mount);
}
/**
 * No comment provided
 *
 * Hash: 0x79443D56C8DF45EE | Since: 1207
 */
export function getCarrierAsHuman(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetCarrierAsHuman(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xA033D7E4BBF9844D | Since: 1207
 */
export function getCarrierAsMount(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetCarrierAsMount(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x09B83E68DE004CD4 | Since: 1207
 */
export function getCarrierAs(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetCarrierAsPed(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x9B90842304C938A7 | Since: 1207
 */
export function getCategoryOfComponentAtIndex(ped, componentIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x9B90842304C938A7', _ped, componentIndex, undefined);
}
/**
 * Gets MetaPedExpression at index specified
 *
 * For index, see: _SET_CHAR_EXPRESSION
 *
 * Old name: _GET_PED_FACE_FEATURE
 *
 * Hash: 0xFD1BA1EEF7985BB8 | Since: 1207
 */
export function getCharExpression(ped, index) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetCharExpression(_ped, index);
}
/**
 * No comment provided
 *
 * Hash: 0x3CC4A718C258BDD0 | Since: 1207
 */
export function getDefaultRelationshipGroupHash(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetDefaultRelationshipGroupHash(modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0xD806CD2A4F2C2996 | Since: 1207
 */
export function getFirstEntityIsCarrying(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetFirstEntityPedIsCarrying(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x13A1B061007C906B | Since: 1207
 */
export function getGroupFormation(groupId) {
    return GetGroupFormation(groupId);
}
/**
 * No comment provided
 *
 * Hash: 0x95B8E397B8F4360F | Since: 1207
 */
export function getHealthRechargeMultiplier(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetHealthRechargeMultiplier(_ped);
}
/**
 * Returns an int based on enum eTamingState
 *
 * enum eTamingState
 * {
 * ATS_INVALID = 0,
 * ATS_INACTIVE,
 * ATS_TARGET_DETECTED,
 * ATS_CALLED_OUT,
 * ATS_MOUNTABLE,
 * ATS_BEING_PATTED,
 * ATS_BREAKING_ACTIVE,
 * ATS_SPOOKED,
 * ATS_RETREATING,
 * ATS_FLEEING
 * };
 *
 * Hash: 0x454AD4DA6C41B5BD | Since: 1207
 */
export function getHorseTamingState(horse) {
    const _horse = horse instanceof IPed ? horse.handle() : horse;
    return GetHorseTamingState(_horse);
}
/**
 * No comment provided
 *
 * Hash: 0x88D9D76D78065487 | Since: 1207
 */
export function getIncapacitationTimeRemaining(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetIncapacitationTimeRemaining(_ped);
}
/**
 * If p2 is false, then this native will return true until the interaction is complete. If true, the native will return true until player pockets robbery item.
 * _GET_IS_PED_[M-R]*
 *
 * Hash: 0xE33F98BD76490ABC | Since: 1207
 */
export function getIsBeingRobbed(ped, player, trueUntilPlayerPocketsItem) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetIsPedBeingRobbed(_ped, _player, trueUntilPlayerPocketsItem);
}
/**
 * No comment provided
 *
 * Hash: 0x68821369A2CEADD5 | Since: 1207
 */
export function getIsCommandHashPresent(ped, commandHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof commandHash === 'string')
        commandHash = GetHashKey(commandHash);
    return GetIsPedCommandHashPresent(_ped, commandHash);
}
/**
 * Returns true if ped is in a dispute another ped (pedInDisputeWith can also be 0)
 *
 * Hash: 0x331550B212014B92 | Since: 1207
 */
export function getIsInDisputeWithPed(ped, pedInDisputeWith) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _pedInDisputeWith = pedInDisputeWith instanceof IPed ? pedInDisputeWith.handle() : pedInDisputeWith;
    return GetIsPedInDisputeWithPed(_ped, _pedInDisputeWith);
}
/**
 * motivationState: see _SET_PED_MOTIVATION
 *
 * Hash: 0x33FA048675821DA7 | Since: 1207
 */
export function getIsMotivationStateEnabled(ped, motivationState) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetIsPedMotivationStateEnabled(_ped, motivationState);
}
/**
 * No comment provided
 *
 * Hash: 0x0C31C51168E80365 | Since: 1207
 */
export function getLassoedLassoer(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetLassoedLassoer(_ped);
}
/**
 * _IS_PED_S* - _IS_PED_U*
 *
 * Hash: 0x833F0053340EF413 | Since: 1207
 */
export function getLassoerOf(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetLassoerOfPed(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xB65A4DAB460A19BD | Since: 1207
 */
export function getLassoTarget(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetLassoTarget(_ped);
}
/**
 * Returns last horse the ped was leading
 *
 * Hash: 0x693126B5D0457D0D | Since: 1232
 */
export function getLastLedMount(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetLastLedMount(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x4C8B59171957BCF7 | Since: 1207
 */
export function getLastMount(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetLastMount(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x5064DB5083C29921 | Since: 1207
 */
export function getLastVehicleDraftHorseWasAttachedTo(horse) {
    const _horse = horse instanceof IPed ? horse.handle() : horse;
    return GetLastVehicleDraftHorseWasAttachedTo(_horse);
}
/**
 * lootFlag: see SET_LOOTING_FLAG
 *
 * Hash: 0xE4C11F104620DDCE | Since: 1207
 */
export function getLootingFlag(ped, lootFlag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetLootingFlag(_ped, lootFlag);
}
/**
 * Returns p1 value for 0x8E84119A23C16623,  get index outfit using GET_NUM_META_PED_OUTFITS
 *
 * Hash: 0x62FDF4E678E40CC6 | Since: 1207
 */
export function getMetaOutfitByIndex(entity, index) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x62FDF4E678E40CC6', _entity, index);
}
/**
 * No comment provided
 *
 * Hash: 0xB292203008EBBAAC | Since: 1207
 */
export function getMetaRace(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xB292203008EBBAAC', _ped);
}
/**
 * enum eMetaPedType
 * {
 * MPT_MALE,
 * MPT_FEMALE,
 * MPT_TEEN,
 * MPT_ANIMAL,
 * MPT_NONE
 * };
 *
 * Hash: 0xEC9A1261BF0CE510 | Since: 1207
 */
export function getMetaType(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetMetaPedType(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x90403E8107B60E81 | Since: 1207
 */
export function getNumComponentsIn(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetNumComponentsInPed(_ped);
}
/**
 * Works similar to 0x90403E8107B60E81 (_GET_NUM_COMPONENTS_IN_PED) but is used to get category hashes instead
 *
 * Hash: 0xA622E66EEE92A08D | Since: 1207
 */
export function getNumComponentCategoriesIn(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetNumComponentCategoriesInPed(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x313778EDCA9158E2 | Since: 1207
 */
export function getNumFreeSlotsInPool() {
    return GetNumFreeSlotsInPedPool();
}
/**
 * No comment provided
 *
 * Hash: 0x62DE46F061CAA468 | Since: 1207
 */
export function getNumReservedAmbientsDesired() {
    return GetNumReservedAmbientPedsDesired();
}
/**
 * No comment provided
 *
 * Hash: 0x5C16855277819BBF | Since: 1207
 */
export function getNumReservedAmbientsReady() {
    return GetNumReservedAmbientPedsReady();
}
/**
 * No comment provided
 *
 * Hash: 0x16F2C8C084AB2092 | Since: 1207
 */
export function getNumReservedHealth(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetNumReservedHealth(_ped);
}
/**
 * returns the number of reserved stamina similar to _GET_NUM_RESERVED_HEALTH
 *
 * Hash: 0xFC3B580C4380B5B7 | Since: 1207
 */
export function getNumReservedStamina(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xFC3B580C4380B5B7', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x7BE607DAFF382FD2 | Since: 1207
 */
export function getsInCombatWithTarget(ped, itemset, flag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedsInCombatWithTarget(_ped, itemset, flag);
}
/**
 * AI_ATTITUDE_NEUTRAL = 0,
 * AI_ATTITUDE_FRIENDLY,
 * AI_ATTITUDE_WARY,
 * AI_ATTITUDE_COMBATIVE,
 * AI_ATTITUDE_NEVER_MET
 *
 * Hash: 0x7CC2186C32D3540A | Since: 1207
 */
export function getAttitude(ped, player) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPedAttitude(_ped, _player);
}
/**
 * Can be used to get a peds foliage active status: variableName = FoliageActive
 *
 * Hash: 0x498F2E77982D6945 | Since: 1207
 */
export function getBlackboardBool(ped, variableName) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedBlackboardBool(_ped, variableName);
}
/**
 * Can be used to get a peds foliage raw height: variableName = FoliageHeight
 *
 * Hash: 0x56E58D4D118FB45E | Since: 1207
 */
export function getBlackboardFloat(ped, variableName) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedBlackboardFloat(_ped, variableName);
}
/**
 * No comment provided
 *
 * Hash: 0xBF5E791BBBF90A3C | Since: 1207
 */
export function getBlackboardHash(ped, variableName) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedBlackboardHash(_ped, variableName);
}
/**
 * No comment provided
 *
 * Hash: 0xEC6B59BE445FEC51 | Since: 1207
 */
export function getBrawlingStyle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedBrawlingStyle(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x7A4E00364B5D727B | Since: 1207
 */
export function getCanBeIncapacitatedThisFrame(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedCanBeIncapacitatedThisFrame(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xCC2B20596E29E4E3 | Since: 1207
 */
export function getCombatAttribute(ped, attributeIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedCombatAttribute(_ped, attributeIndex);
}
/**
 * Returns category hash that each ped component has. Hash examples: MASKS, HATS, HEADS, HORSE_MANES
 *
 * Hash: 0xCCB97B51893C662F | Since: 1207
 */
export function getComponentCategoryByIndex(ped, index) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedComponentCategoryByIndex(_ped, index);
}
/**
 * Returns true if _GET_PED_DAMAGE_CLEANLINESS was ever lower than 2
 *
 * Hash: 0x6CFC373008A1EDAF | Since: 1207
 */
export function getDamaged(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedDamaged(_ped);
}
/**
 * enum ePedDamageCleanliness
 * {
 * PED_DAMAGE_CLEANLINESS_POOR,
 * PED_DAMAGE_CLEANLINESS_GOOD,
 * PED_DAMAGE_CLEANLINESS_PERFECT
 * };
 *
 * Hash: 0x88EFFED5FE8B0B4A | Since: 1207
 */
export function getDamageCleanliness(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedDamageCleanliness(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEF2E6F870783369B | Since: 1207
 */
export function getDefensiveVolume(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedDefensiveVolume(_ped, undefined);
}
/**
 * Return the dirt level of the ped (0.0 - 1.0). p1 is always set to 1.
 * The second parameter is treated as a boolean selector (0 or 1). Internally it indexes a 2-slot graphics/appearance bank (base + 0xB8 * index + 0xE4); Rockstar scripts pass 1.
 *
 * Hash: 0x0105FEE8F9091255 | Since: 1207
 */
export function getDirtLevel(ped, useCompositeLayer) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x0105FEE8F9091255', _ped, useCompositeLayer);
}
/**
 * Returns ped drunk level
 * _H* or _I*
 *
 * Hash: 0x6FB76442469ABD68 | Since: 1207
 */
export function getDrunkness(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedDrunkness(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xD0B7AEB56229D317 | Since: 1207
 */
export function getGrappler(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedGrappler(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xF3C873ED0C595109 | Since: 1207
 */
export function getGrappleFlag(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedGrappleFlag(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x753B15AD0FD6F3E3 | Since: 1207
 */
export function getGrappleStyle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedGrappleStyle(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xC3995D396F1D97B6 | Since: 1207
 */
export function getHasSimplePlayerMemoryChanged(ped, memoryType, ms) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xC3995D396F1D97B6', _ped, memoryType, ms);
}
/**
 * No comment provided
 *
 * Hash: 0x1D491CCF7211FB74 | Since: 1207
 */
export function getHeight(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedHeight(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x31167ED4324B758D | Since: 1207
 */
export function getIdRange(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedIdRange(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x89BFDF6D53145545 | Since: 1207
 */
export function getIncapacitationHealth(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedIncapacitationHealth(_ped);
}
/**
 * Used for AUDIO / ANIMSCENE (REFERENCE_REGIONAL_CHARACTER)
 * Params: p1 = 0
 * _GET_PED_IN*
 *
 * Hash: 0xE76687023D8C8505 | Since: 1207
 */
export function getIndexFromPerscharHash(perscharModel) {
    if (typeof perscharModel === 'string')
        perscharModel = GetHashKey(perscharModel);
    return Citizen.invokeNative('0xE76687023D8C8505', perscharModel, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xD7AD3C7EBAF88C92 | Since: 1207
 */
export function getInteractionPersonality(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedInteractionPersonality(_ped);
}
/**
 * https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/Lasso%20Hogtie%20Flags
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/LASSO_HOGTIE_FLAG
 *
 * Hash: 0x2C76FA0E01681F8D | Since: 1207
 */
export function getLassoHogtieFlag(ped, flagId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedLassoHogtieFlag(_ped, flagId);
}
/**
 * No comment provided
 *
 * Hash: 0x1F714E7A9DADFC42 | Since: 1207
 */
export function getLastDroppedHat(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedLastDroppedHat(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x1B710E6F4AB69341 | Since: 1355
 */
export function getLodMultiplier(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedLodMultiplier(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xCB42AFE2B613EE55 | Since: 1207
 */
export function getMaxStamina(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedMaxStamina(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6127F25ED21C533C | Since: 1207
 */
export function getMeleeActionPhase(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedMeleeActionPhase(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x30569F348D126A5A | Since: 1207
 */
export function getMetaOutfitHash(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedMetaOutfitHash(_ped);
}
/**
 * PS_SMALL = 0,
 * PS_MEDIUM,
 * PS_MEDIUM_LARGE,
 * PS_LARGE,
 * PS_EXTRA_LARGE
 *
 * Hash: 0xA65AA1ACE81E5A77 | Since: 1311
 */
export function getModelSizeFromHash(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetPedModelSizeFromHash(modelHash);
}
/**
 * If targetPed is set to 0 the ped motivationState affects everyone
 *
 * Hash: 0x42688E94E96FD9B4 | Since: 1207
 */
export function getMotivation(ped, motivationState, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    return GetPedMotivation(_ped, motivationState, _targetPed);
}
/**
 * Returns Ped Quality to be used to calculate Skinning Quality
 *
 * enum ePedQuality
 * {
 * PQ_INVALID = -1,
 * PQ_LOW,
 * PQ_MEDIUM,
 * PQ_HIGH,
 * PQ_MAX
 * };
 *
 * Hash: 0x7BCC6087D130312A | Since: 1207
 */
export function getQuality(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedQuality(_ped);
}
/**
 * Returns boneIndex
 *
 * Hash: 0xC5303F460A40D21D | Since: 1207
 */
export function getRagdollBoneIndex(ped, boneId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xC5303F460A40D21D', _ped, boneId);
}
/**
 * Gets a registered/attached prop entity for a particular ped. Second parameter will detach the prop entity from the ped if true. Props primarily appear to come from scenarios, such as a broom or hay bale.
 *
 * Known props: https://pastebin.com/ap2NEJqB
 *
 * Hash: 0x4D0D2E3D8BC000EB | Since: 1207
 */
export function getRegisterProp(ped, propName, detachProp) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedRegisterProp(_ped, propName, detachProp);
}
/**
 * normalized / non normalized
 * 0.0        / 1000.0         STARTED IN WRITHE STAGE
 * 1.0        / 0.0            END OF WRITHE, DEAD
 * -1.0                        DEAD
 *
 * Returns some value from AI task 562 (unknown).
 *
 * Hash: 0xEBE89623EB861271 | Since: 1207
 */
export function getRemainingRevivalTime(ped, normalized) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedRemainingRevivalTime(_ped, normalized);
}
/**
 * Returns wether `0x1E017404784AA6A3` was applied on the ped.
 * some hashs MAR2_RIDE1, MAR2_RIDE1, RBCH1_RIDE1, SAD5_RIDE1
 *
 * Hash: 0x7C8AA850617651D9 | Since: 1207
 */
export function getSpeechRelationship(ped, p1) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    return Citizen.invokeNative('0x7C8AA850617651D9', _ped, p1);
}
/**
 * No comment provided
 *
 * Hash: 0x775A1CA7893AA8B5 | Since: 1207
 */
export function getStamina(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedStamina(_ped);
}
/**
 * Returns stamina normalizedValue / normalizedUnlockedMax
 *
 * Hash: 0x22F2A386D43048A9 | Since: 1207
 */
export function getStaminaNormalized(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedStaminaNormalized(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x65C75FDCCAC86464 | Since: 1355
 */
export function getTranquilizer(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedTranquilizer(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x3D9F958834AB9C30 | Since: 1207
 */
export function getWhoHogitiedThisPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x3D9F958834AB9C30', _ped);
}
/**
 * Returns peltId
 *
 * Hash: 0x0CEEB6F4780B1F2F | Since: 1207
 */
export function getPeltFromHorse(horse, index) {
    const _horse = horse instanceof IPed ? horse.handle() : horse;
    return GetPeltFromHorse(_horse, index);
}
/**
 * Returns animal skin quality modifier
 *
 * Hash: 0xEE2D5C819A65BF26 | Since: 1311
 */
export function getPlayerCurrentAnimalDamageModifier(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerCurrentAnimalDamageModifier(_player);
}
/**
 * Returns dismounted timestamp
 *
 * Hash: 0xE8D1CCB9375C101B | Since: 1207
 */
export function getPlayerDismountTimestamp(mount, player) {
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0xE8D1CCB9375C101B', _mount, _player);
}
/**
 * Returns how deep the water is below the ped (if in water)
 * -1.0f = Not in water
 * 10.0f = Max water depth
 *
 * Hash: 0x2942457417A5FD24 | Since: 1207
 */
export function getPlayerWaterDepth(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPlayerPedWaterDepth(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xB676EFDA03DADA52 | Since: 1207
 */
export function getRiderOfMount(mount) {
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    return GetRiderOfMount(_mount, false);
}
/**
 * No comment provided
 *
 * Hash: 0x63342C50EC115CE8 | Since: 1207
 */
export function getShopItemBaseLayers(shopItem, ped, metapedType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof shopItem === 'string')
        shopItem = GetHashKey(shopItem);
    return GetShopItemBaseLayers(shopItem, undefined, _ped, metapedType, false);
}
/**
 * Returns the current shop item component at index and it's wearable state
 *
 * Hash: 0x77BA37622E22023B | Since: 1207
 */
export function getShopItemComponentAtIndex(ped, index) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetShopItemComponentAtIndex(_ped, index, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5FF9A878C3D115B8 | Since: 1207
 */
export function getShopItemComponentCategory(componentHash, metapedType, isMP) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetShopItemComponentCategory(componentHash, metapedType, isMP);
}
/**
 * No comment provided
 *
 * Hash: 0x7E02E4218D916B94 | Since: 1207
 */
export function getShopItemHatComponent(ped, metapedType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetShopItemHatComponent(_ped, metapedType, false);
}
/**
 * Returns the number of wearable states available for a shop item / component. p2 seems to be true in scripts.
 *
 * For use with 0x6243635AF2F1B826 (_GET_SHOP_ITEM_AVAILABLE_WEARABLE_STATE_BY_INDEX)
 *
 * Hash: 0xFFCC2DB2D9953401 | Since: 1207
 */
export function getShopItemNumWearableStates(componentHash, isMpFemale) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetShopItemNumWearableStates(componentHash, isMpFemale, false);
}
/**
 * Gets an available wearable state by index for a shop item / component - it does not retreive what the current state is. p3 seems to be true in scripts.
 *
 * Use 0xFFCC2DB2D9953401 (_GET_SHOP_ITEM_NUM_WEARABLE_STATES) to get the number of available wearable states
 *
 * Hash: 0x6243635AF2F1B826 | Since: 1207
 */
export function getShopItemWearableStateByIndex(componentHash, wearableStateIndex, isMpFemale) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetShopItemWearableStateByIndex(componentHash, wearableStateIndex, isMpFemale, false);
}
/**
 * No comment provided
 *
 * Hash: 0x825F6DD559A0895B | Since: 1207
 */
export function getStaminaDepletionMultiplier(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetStaminaDepletionMultiplier(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xE7687EB2F634ABF0 | Since: 1207
 */
export function getStaminaRechargeMultiplier(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetStaminaRechargeMultiplier(_ped);
}
/**
 * _GET_WA*
 *
 * Hash: 0x92C8EACA29F6BED6 | Since: 1207
 */
export function getTotalDamageFromAi(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetTotalPedDamageFromAi(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x849BD6C6314793D0 | Since: 1207
 */
export function getTransportIsSeatedOn(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetTransportPedIsSeatedOn(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xE4770DA1B8FF4FD1 | Since: 1207
 */
export function getVehicleDraftHorseIsAttachedTo(horse) {
    const _horse = horse instanceof IPed ? horse.handle() : horse;
    return GetVehicleDraftHorseIsAttachedTo(_horse);
}
/**
 * Ped Command Hash are special commands, that can be activated to change conditional anim variations or trigger transitions between conditional anims.
 * https://github.com/femga/rdr3_discoveries/blob/master/animations/scenarios
 *
 * Hash: 0xD65FDC686A031C83 | Since: 1207
 */
export function giveHashCommand(ped, commandHash, activationDuration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof commandHash === 'string')
        commandHash = GetHashKey(commandHash);
    GivePedHashCommand(_ped, commandHash, activationDuration);
}
/**
 * No comment provided
 *
 * Hash: 0x3BBDD6143FF16F98 | Since: 1207
 */
export function giveScenarioProp(ped, _object, conditionalAnim) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return GivePedScenarioProp(_ped, __object, conditionalAnim, undefined, undefined, false);
}
/**
 * Only used in SP R* Script rcm_jack2
 *
 * Hash: 0xA0774E388CE4A679 | Since: 1207
 */
export function giveScenarioPropDynamic(ped, _object) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return GivePedScenarioPropDynamic(_ped, __object, undefined, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0xB0B2C6D170B0E8E5 | Since: 1207
 */
export function hasMetaAssetLoaded(requestId) {
    return HasMetaPedAssetLoaded(requestId);
}
/**
 * No comment provided
 *
 * Hash: 0x610438375E5D1801 | Since: 1207
 */
export function hasMetaOutfitLoaded(requestId) {
    return HasMetaPedOutfitLoaded(requestId);
}
/**
 * No comment provided
 *
 * Hash: 0xC0940AC858C1E126 | Since: 1207
 */
export function hasMetaRequestLoaded(requestId) {
    return HasMetaPedRequestLoaded(requestId);
}
/**
 * this native checks if player has shot a specific ped for the duration passed p2 is in milliseconds
 *
 * Hash: 0x9C81338B2E62CE0A | Since: 1207
 */
export function hasBeenShotByPlayerRecently(player, ped, duration) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x9C81338B2E62CE0A', _player, _ped, duration);
}
/**
 * No comment provided
 *
 * Hash: 0x29FCE825613FEFCA | Since: 1207
 */
export function hasBeenShovedRecently(ped, ms) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return HasPedBeenShovedRecently(_ped, ms);
}
/**
 * See _REQUEST_PED_EMOTIONAL_PRESET
 *
 * Hash: 0xDE3904B22695D9F9 | Since: 1207
 */
export function hasEmotionalPresetLoaded(ped, name) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return HasPedEmotionalPresetLoaded(_ped, name);
}
/**
 * Returns whether a ped has interacted with a player recently.
 * flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/0x947E43F544B6AB34
 *
 * Hash: 0x947E43F544B6AB34 | Since: 1207
 */
export function hasInteractedWithPlayerRecently(ped, player, flag, ms) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x947E43F544B6AB34', _ped, _player, flag, ms);
}
/**
 * No comment provided
 *
 * Hash: 0xB7DBB2986B87E230 | Since: 1207
 */
export function hasShotRecently(ped, seconds) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xB7DBB2986B87E230', _ped, seconds);
}
/**
 * limb: 3 = Left Hand, 4 = Left Arm, 6 = Right Hand, 7 = Right Arm, 9 = Left Foot, 10 = Left Leg, 12 = Right Foot, 13 = Right Leg, 37 = Head
 *
 * Hash: 0xBA208A8D6399A3AC | Since: 1207
 */
export function hasTakenGoreDamage(ped, limb) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return HasPedTakenGoreDamage(_ped, limb);
}
/**
 * _H* - _I*
 *
 * Hash: 0xBAE08F00021BFFB2 | Since: 1207
 */
export function horseAgitate(mount, kickOffRider) {
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    HorseAgitate(_mount, kickOffRider);
}
/**
 * No comment provided
 *
 * Hash: 0xF6262491C7704A63 | Since: 1207
 */
export function incapacitatedRevive(ped, ped2) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    IncapacitatedRevive(_ped, _ped2);
}
/**
 * Returns true only if it's a player ped and an animal as well.
 * _IS_ANY_* - _IS_CONTROL_*
 *
 * Hash: 0x0E2F43516F998269 | Since: 1311
 */
export function isAnimalControlledByAPlayer(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsAnimalControlledByAPlayer(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x7FC84E85D98F063D | Since: 1207
 */
export function isAnimalInteractionRunning(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsAnimalInteractionRunning(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x88A5564B19C15391 | Since: 1207
 */
export function isAnimalSkinned(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x88A5564B19C15391', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x93FFD92F05EC32FD | Since: 1207
 */
export function isMetaAssetValid(requestId) {
    return IsMetaPedAssetValid(requestId);
}
/**
 * Returns true if given ped is a fish.
 * _IS_ME* - _IS_MO*
 *
 * Hash: 0x118D476A6F1A13F1 | Since: 1207
 */
export function isMetaFish(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsMetaPedFish(_ped);
}
/**
 * Used in script function HORSE_IS_META_PED_OUTFIT_SADDLE_EQUIPPED
 *
 * Hash: 0x98082246107A6ACF | Since: 1207
 */
export function isMetaOutfitEquipped(ped, outfit) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof outfit === 'string')
        outfit = GetHashKey(outfit);
    return IsMetaPedOutfitEquipped(_ped, outfit);
}
/**
 * No comment provided
 *
 * Hash: 0xB25E57FC8E37114D | Since: 1207
 */
export function isMetaOutfitRequestValid(requestId) {
    return IsMetaPedOutfitRequestValid(requestId);
}
/**
 * No comment provided
 *
 * Hash: 0x43E4DA469541A9C9 | Since: 1207
 */
export function isMetaRequestValid(requestId) {
    return IsMetaPedRequestValid(requestId);
}
/**
 * checks if a ped is using a component category
 * see component category hashes here https://raw.githubusercontent.com/femga/rdr3_discoveries/refs/heads/master/clothes/cloth_hash_names.lua
 * Old name: _IS_META_PED_USING_COMPONENT
 *
 * Hash: 0xFB4891BD7578CDC1 | Since: 1207
 */
export function isMetaUsingComponentCategory(ped, componentCategory) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof componentCategory === 'string')
        componentCategory = GetHashKey(componentCategory);
    return IsMetaPedUsingComponent(_ped, componentCategory);
}
/**
 * No comment provided
 *
 * Hash: 0xAAB0FE202E9FC9F0 | Since: 1207
 */
export function isMountSeatFree(mount, seat) {
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    return IsMountSeatFree(_mount, seat);
}
/**
 * No comment provided
 *
 * Hash: 0xB346C85D49CC998E | Since: 1207
 */
export function isActionDisableFlagEnabled(ped, actionDisableFlag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedActionDisableFlagEnabled(_ped, actionDisableFlag);
}
/**
 * detects if ped is afloat in water like swimming or in a boat (driving or standing on it)
 *
 * Hash: 0xDC88D06719070C39 | Since: 1207
 */
export function isAfloat(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xDC88D06719070C39', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x137772000DAF42C5 | Since: 1207
 */
export function isChild(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedChild(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x59643424B68D52B5 | Since: 1207
 */
export function isClimbingLadder(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedClimbingLadder(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xB086C8C0F5701D14 | Since: 1207
 */
export function isCowering(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedCowering(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xC488B8C0E52560D8 | Since: 1207
 */
export function isDoingScenarioTransition(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedDoingScenarioTransition(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x226CF9B159E38F42 | Since: 1207
 */
export function isDragging(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedDragging(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x50F124E6EF188B22 | Since: 1207
 */
export function isDrunk(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedDrunk(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x57779B55B83E2BEA | Since: 1207
 */
export function isIntimidated(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedIntimidated(_ped);
}
/**
 * _IS_PED_IN*
 *
 * Hash: 0x7583A9D35248B83F | Since: 1207
 */
export function isInvestigating(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInvestigating(_ped);
}
/**
 * If returned true: There are enemy peds near friendly turn in ped. Going to aggro.
 * If returned false: Moving back to idle as there aren't any remaining enemy peds near ped
 * _IS_PED_IN_*
 *
 * Hash: 0x078076AB50FB117F | Since: 1207
 */
export function isInPoint(ped, pos, radius) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInPoint(_ped, pos.x, pos.y, pos.z, radius, false);
}
/**
 * _IS_PED_L* - _IS_PED_M*
 *
 * Hash: 0x917760CFE7A0E0F1 | Since: 1207
 */
export function isLeadingAnyGroup(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedLeadingAnyGroup(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xAA9F048DCF69B6DC | Since: 1207
 */
export function isModelSuppressed(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return IsPedModelSuppressed(model);
}
/**
 * No comment provided
 *
 * Hash: 0x8D9BFCE3352DE47F | Since: 1207
 */
export function isQueuedForDeletion(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedQueuedForDeletion(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xD6740E14E4CEFC0B | Since: 1207
 */
export function isSliding(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedSliding(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x02AA2096FE00F3E1 | Since: 1207
 */
export function isTargetActionDisableFlagEnabled(ped, actionDisableFlag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedTargetActionDisableFlagEnabled(_ped, actionDisableFlag);
}
/**
 * No comment provided
 *
 * Hash: 0xEBB208D6AE712C03 | Since: 1207
 */
export function isUsingActionMode2(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedUsingActionMode2(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x5102307CE88798EB | Since: 1207
 */
export function isVisibilityTracked(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedVisibilityTracked(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x91A5F9CBEBB9D936 | Since: 1207
 */
export function isScenarioBlockingAreaValid() {
    return IsScenarioBlockingAreaValid(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6E5CBCB3941D7D08 | Since: 1207
 */
export function isTarget(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    return IsTarget(_ped, _targetPed);
}
/**
 * No comment provided
 *
 * Hash: 0x31DC8D3F216D8509 | Since: 1207
 */
export function isTextureValid(textureId) {
    return IsTextureValid(textureId);
}
/**
 * No comment provided
 *
 * Hash: 0x772A1969F649E902 | Since: 1207
 */
export function isThisModelAHorse(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return IsThisModelAHorse(model);
}
/**
 * No comment provided
 *
 * Hash: 0x164CECC59E70DF86 | Since: 1207
 */
export function isTrackedVisibilityPercentageNotLessThan(ped, percent) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsTrackedPedVisibilityPercentageNotLessThan(_ped, percent);
}
/**
 * _IS_TRACKED_* - IS_V*
 *
 * Hash: 0xAF61B3CD8C3B82C3 | Since: 1207
 */
export function isUsingSlipstream(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsUsingSlipstream(_ped);
}
/**
 * something to do with speech lines?
 * some hashs MAR2_RIDE1, MAR2_RIDE1, RBCH1_RIDE1, SAD5_RIDE1
 *
 * Hash: 0x1E017404784AA6A3 | Since: 1207
 */
export function applySpeechRelationship(ped, p1) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    return Citizen.invokeNative('0x1E017404784AA6A3', _ped, p1);
}
/**
 * No comment provided
 *
 * Hash: 0x935CF6E42BAF7F4D | Since: 1207
 */
export function clearLocoMotion(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    PedClearLocoMotion(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xBD6B242B8BD5543A | Since: 1207
 */
export function duelingDidPlayerHeadshotOpponent(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return PedDuelingDidPlayerHeadshotOpponent(_ped);
}
/**
 * target: 0 affects everyone
 * duration: -1 indefinite
 * flag: always 4 in R* Scripts
 *
 * Hash: 0xAAB050DA48B57978 | Since: 1207
 */
export function emotionalPresetLocoMotion(ped, presetName, targetPed, duration, flag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    PedEmotionalPresetLocoMotion(_ped, presetName, _targetPed, duration, flag);
}
/**
 * No comment provided
 *
 * Hash: 0x2B4CE170DE09F346 | Since: 1207
 */
export function removeSpeechRelationship(ped, p1) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    Citizen.invokeNative('0x2B4CE170DE09F346', _ped, p1);
}
/**
 * memoryType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/_PED_SET_SIMPLE_PLAYER_MEMORY
 *
 * Hash: 0xC494C76A34266E82 | Since: 1207
 */
export function setSimplePlayerMemory(ped, memoryType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xC494C76A34266E82', _ped, memoryType);
}
/**
 * No comment provided
 *
 * Hash: 0x06FA94C835787C64 | Since: 1207
 */
export function wasKilledByHeadshot(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return PedWasKilledByHeadshot(_ped);
}
/**
 * Plays a conditional locomotion animation with an attached prop item,commonly used for LOCO attachment interactions (e.g., attaching/carrying a crate) ex conditionalAnimName: LOCO_ATTACH_CRATE_TNT
 *
 * Hash: 0xCE7A6C1D5CDE1F9D | Since: 1207
 */
export function playConditionalAnimWithPropitem(ped, _object) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return Citizen.invokeNative('0xCE7A6C1D5CDE1F9D', _ped, __object);
}
/**
 * Retruns the carried ped
 *
 * Hash: 0x6B67320E0D57856A | Since: 1207
 */
export function refreshCarriedForPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x6B67320E0D57856A', _ped, 0, false);
}
/**
 * Returns loot state
 * enum eLootState
 * {
 * LAP_NONE,
 * LAP_RESUMING,
 * LAP_GETTING_ON_FOOT,
 * LAP_DISTANT_NAV,
 * LAP_CHOOSING_ACTION,
 * LAP_APPROACHING,
 * LAP_ENTERING,
 * LAP_LOOTING,
 * LAP_EXITING
 * };
 *
 * _POSSE_* - _REGISTER_HATED*
 *
 * Hash: 0x5463C962BC7777C3 | Since: 1207
 */
export function refreshLootStateFor(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return RefreshLootStateForPed(_ped, 0, 0, 0);
}
/**
 * p1 is always 1
 *
 * Hash: 0x59BD177A1A48600A | Since: 1207
 */
export function refreshMetaShopItems(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RefreshMetaPedShopItems(_ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xD8736EFDA38EDC5C | Since: 1207
 */
export function registerHatedTargetsInArea(ped, pos, radius) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RegisterHatedTargetsInArea(_ped, pos.x, pos.y, pos.z, radius);
}
/**
 * No comment provided
 *
 * Hash: 0x13E7320C762F0477 | Since: 1207
 */
export function releaseMetaAssetRequest(requestId) {
    ReleaseMetaPedAssetRequest(requestId);
}
/**
 * No comment provided
 *
 * Hash: 0x4592B8B9B0EF5F48 | Since: 1207
 */
export function releaseMetaOutfitRequest(requestId) {
    ReleaseMetaPedOutfitRequest(requestId);
}
/**
 * No comment provided
 *
 * Hash: 0x3972F78A78B5D9DF | Since: 1207
 */
export function releaseMetaRequest(requestId) {
    ReleaseMetaPedRequest(requestId);
}
/**
 * Removes a texture created by 0xC5E7204F322E49EB.
 *
 * Hash: 0x6BEFAA907B076859 | Since: 1207
 */
export function releaseTexture(textureId) {
    ReleaseTexture(textureId);
}
/**
 * Removes gravity well by handle returned from 0x4F5EBE70081E5A20
 *
 * Hash: 0x87247BC60B60BED8 | Since: 1207
 */
export function removeGravityWell(handle) {
    RemoveGravityWell(handle);
}
/**
 * No comment provided
 *
 * Hash: 0xDE7B2B4144906CDF | Since: 1207
 */
export function removeMotionTypeAsset(nameHash, ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof nameHash === 'string')
        nameHash = GetHashKey(nameHash);
    RemoveMotionTypeAsset(nameHash, _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xA6F67BEC53379A32 | Since: 1207
 */
export function removeBlackboardBool(ped, variableName) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RemovePedBlackboardBool(_ped, variableName);
}
/**
 * No comment provided
 *
 * Hash: 0x411189E51B8020BA | Since: 1207
 */
export function removeBlackboardFloat(ped, variableName) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RemovePedBlackboardFloat(_ped, variableName);
}
/**
 * No comment provided
 *
 * Hash: 0x0E17378642156790 | Since: 1207
 */
export function removeBlackboardHash(ped, variableName) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RemovePedBlackboardHash(_ped, variableName);
}
/**
 * No comment provided
 *
 * Hash: 0x81B75428A7813E67 | Since: 1207
 */
export function removeBlackboardInt(ped, variableName) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RemovePedBlackboardInt(_ped, variableName);
}
/**
 * See _REQUEST_PED_EMOTIONAL_PRESET
 *
 * Hash: 0xFC3BAB1801A8255A | Since: 1207
 */
export function removeEmotionalPreset(ped, name) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RemovePedEmotionalPreset(_ped, name);
}
/**
 * No comment provided
 *
 * Hash: 0x5337B721C51883A9 | Since: 1207
 */
export function removeFromMount(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RemovePedFromMount(_ped, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x96C349DE04C49011 | Since: 1207
 */
export function removeOverlay(textureId, overlayId) {
    RemovePedOverlay(textureId, overlayId);
}
/**
 * Stops and clears a running conditional locomotion animation previously started by _PLAY_CONDITIONAL_ANIM_WITH_PROPITEM ex: P_CS_CRATETNT01X_PH_R_HAND
 * This does not remove the physical prop entity itself, but rather ends the active locomotion/conditional animation associated with it.
 *
 * Hash: 0x3A50753042B6891B | Since: 1207
 */
export function removePropitemConditonalAnim(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return RemovePedProp(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x0CAB404CD2DB41F5 | Since: 1207
 */
export function removeStayOutVolume(ped, volume) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return RemovePedStayOutVolume(_ped, volume);
}
/**
 * No comment provided
 *
 * Hash: 0x011A42FD923D41CA | Since: 1311
 */
export function removeSubscribeToLegendaryBlips(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return RemovePedSubscribeToLegendaryBlips(_ped);
}
/**
 * Directly removes a shop item component from a ped
 * Params: p2 and p3 are always 0
 *
 * Hash: 0x0D7FFA1B2F69ED82 | Since: 1355
 */
export function removeShopItemFrom(ped, componentHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    RemoveShopItemFromPed(_ped, componentHash, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0x4707E9C23D8CA3FE | Since: 1207
 */
export function removeTarget(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    RemoveTarget(_ped, _targetPed);
}
/**
 * Returns requestId
 * Params: p1 = 1 in R* Scripts (Used in SP only)
 *
 * Hash: 0xF97C34C33487D569 | Since: 1207
 */
export function requestMeta(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return RequestMetaPed(model, 0);
}
/**
 * Returns requestId
 * Params: p1 = 1 in R* Scripts
 *
 * Hash: 0x91FE941F9FCFB702 | Since: 1207
 */
export function requestMetaAssetBundle(asset) {
    if (typeof asset === 'string')
        asset = GetHashKey(asset);
    return RequestMetaPedAssetBundle(asset, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xF6D9E1F3560CBF8E | Since: 1207
 */
export function requestMetaComponent(metaPedType) {
    return RequestMetaPedComponent(metaPedType, undefined, 0, 0, 0);
}
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/clothes/metaped_outfits.lua
 * Returns requestId, to be used with 0x74F512E29CB717E2
 *
 * Hash: 0x13154A76CE0CF9AB | Since: 1207
 */
export function requestMetaOutfit(model, outfit) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    if (typeof outfit === 'string')
        outfit = GetHashKey(outfit);
    return RequestMetaPedOutfit(model, outfit);
}
/**
 * No comment provided
 *
 * Hash: 0xF7EA250B9A919E03 | Since: 1207
 */
export function requestMotionTypeAsset(nameHash, ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof nameHash === 'string')
        nameHash = GetHashKey(nameHash);
    RequestMotionTypeAsset(nameHash, _ped);
}
/**
 * Return the status of the wanted carrying action of a ped. unk3 is usually 4.You can also get the entity being carried and the entity it was taken from with a buffer.
 *
 * Status:
 * `INVALID = 0,
 * STARTING = 1,
 * PROGRESSING = 2,
 * FINISHING = 3`
 * CARRYING TYPES:
 * `UNK_0 = -1,
 * UNK_1 = 0,
 * UNK_2 = 1,
 * UNK_3 = 2,
 * UNK_4 = 3,
 * CARRYING_FROM_GROUND = 4,
 * CARRYING_FROM_MOUNT = 5,
 * PUTTING_DOWN_GROUND = 6,
 * PUTTING_DOWN_MOUNT = 7,
 * UNK_9 = 8,
 * UNK_10 = 9,
 * UNK_11 = 10`
 * Filters:
 * `ENTITY_ONLY = 0,
 * NOTHING = 1,
 * ENTITY_AND_TAKEN_FROM_ENTITY = 2`
 *
 * Hash: 0x4642182A298187D0 | Since: 1207
 */
export function requestCarryingState(ped, carryingType, outEntsCount, filterFlags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x4642182A298187D0', _ped, carryingType, outEntsCount, filterFlags);
}
/**
 * For more information, see common:/data/emotional_presets.meta
 *
 * Hash: 0x5C3C55EAAD19915F | Since: 1207
 */
export function requestEmotionalPreset(ped, name) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RequestPedEmotionalPreset(_ped, name);
}
/**
 * mood: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/fwFacialAnimRequest__Mood
 * Params: p2 = 6 in R* Scripts
 *
 * Hash: 0x8B3B71C80A29A4BB | Since: 1207
 */
export function requestFacialMoodThisFrame(ped, mood) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof mood === 'string')
        mood = GetHashKey(mood);
    RequestPedFacialMoodThisFrame(_ped, mood, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xBDED916A9F9B0604 | Since: 1207
 */
export function requestForScenarioType(ped, _object, scenarioType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const __object = _object instanceof IObject ? _object.handle() : _object;
    if (typeof scenarioType === 'string')
        scenarioType = GetHashKey(scenarioType);
    return RequestPedForScenarioType(_ped, __object, undefined, scenarioType, undefined, false);
}
/**
 * Known get up animation types: REAR, FRONT
 *
 * Hash: 0xEAA8242C8479C27D | Since: 1207
 */
export function requestGetupAnimation(ped, getUpType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RequestPedGetupAnimation(_ped, getUpType);
}
/**
 * No comment provided
 *
 * Hash: 0xBEC65C6049B3219D | Since: 1207
 */
export function requestPropScenario(ped, _object) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return RequestPropScenarioPed(_ped, __object, false);
}
/**
 * Creates a texture override data for ped and returns it's index.
 * So you can replace any texture of any ped's component.
 * Also, you can add overlays on it, such as aging, lipstick and more.
 * Textures can be reused by multiple peds at once.
 * You can keep only 32 textures at once(including other peds).
 *
 * https://github.com/femga/rdr3_discoveries/blob/master/clothes/change_overlays_script.lua
 * materialHash: https://github.com/femga/rdr3_discoveries/blob/master/clothes/cloth_drawable_albedo_normal_material_TEMPORARY.lua
 *
 * Hash: 0xC5E7204F322E49EB | Since: 1207
 */
export function requestTexture(albedoHash, normalHash, materialHash) {
    if (typeof albedoHash === 'string')
        albedoHash = GetHashKey(albedoHash);
    if (typeof normalHash === 'string')
        normalHash = GetHashKey(normalHash);
    if (typeof materialHash === 'string')
        materialHash = GetHashKey(materialHash);
    return RequestTexture(albedoHash, normalHash, materialHash);
}
/**
 * No comment provided
 *
 * Hash: 0xED9582B3DA8F02B4 | Since: 1207
 */
export function reserveAmbients(numPeds) {
    ReserveAmbientPeds(numPeds);
}
/**
 * No comment provided
 *
 * Hash: 0xF008E0BA1FE1D644 | Since: 1207
 */
export function reserveAmbientsTotal(numPeds) {
    ReserveAmbientPedsTotal(numPeds);
}
/**
 * No comment provided
 *
 * Hash: 0x0BFA1BD465CDFEFD | Since: 1207
 */
export function resetComponents(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ResetPedComponents(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x4B9668DB91DC39B8 | Since: 1207
 */
export function resetIncapacitationBleedOutDuration(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ResetPedIncapacitationBleedOutDuration(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x801917E7D7BCE418 | Since: 1207
 */
export function resetLadderMovementSpeedModifier(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ResetPedLadderMovementSpeedModifier(_ped);
}
/**
 * Seems to set the peds stamina to 30%
 *
 * Hash: 0x36513AFFC703C60D | Since: 1207
 */
export function resetStamina(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x36513AFFC703C60D', _ped);
}
/**
 * Removes every texture layer but the base layer
 * Clearing texture's data: setting params to default values, but keep overlays.
 *
 * Hash: 0x8472A1789478F82F | Since: 1207
 */
export function resetTexture(textureId) {
    ResetPedTexture(textureId);
}
/**
 * 0.0 <= stamina <= 100.0
 *
 * Hash: 0x675680D089BFA21F | Since: 1207
 */
export function restoreStamina(ped, stamina) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RestorePedStamina(_ped, stamina);
}
/**
 * No comment provided
 *
 * Hash: 0xC2266AA617668AD3 | Since: 1207
 */
export function setAccuracyAgainstLocalPlayerModifier(ped, modifier) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetAccuracyAgainstLocalPlayerModifier(_ped, modifier);
}
/**
 * Related to _0x704C908E9C405136 for component loading
 * Can be used to fix missing outfit changes, always paired with _UPDATE_PED_VARIATION
 * _S*
 * Doesn't actually return anything.
 *
 * Hash: 0xAAB86462966168CE | Since: 1207
 */
export function setActiveMetaComponentsUpdated(ped, isMP) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xAAB86462966168CE', _ped, isMP);
}
/**
 * No comment provided
 *
 * Hash: 0xC0258742B034DFAF | Since: 1207
 */
export function setAmbientAnimalDensityMultiplierThisFrame(multiplier) {
    SetAmbientAnimalDensityMultiplierThisFrame(multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0xBA0980B5C0A11924 | Since: 1207
 */
export function setAmbientHumanDensityMultiplierThisFrame(multiplier) {
    SetAmbientHumanDensityMultiplierThisFrame(multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0xAB0D553FE20A6E25 | Since: 1207
 */
export function setAmbientDensityMultiplierThisFrame(multiplier) {
    SetAmbientPedDensityMultiplierThisFrame(multiplier);
}
/**
 * Sets MetaPedExpression at index specified. Morphs components, such as changing body size or facial features.
 *
 * Note: You have to update the ped's variation (using 0xCC8CA3E88256E58F) after calling this native
 *
 * index = MetaPedExpression IDs
 * List of face features: https://pastebin.com/9jb88FXW
 * Full list of MetaPedExpressions: https://pastebin.com/Ld76cAn7
 * value: -1.0 to 1.0 (values beyond this likely won't sync to other clients)
 *
 * This native also allows you to change a horse's gender.
 *
 * Old name: _SET_PED_FACE_FEATURE
 *
 * Hash: 0x5653AB26C82938CF | Since: 1207
 */
export function setCharExpression(ped, index, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetCharExpression(_ped, index, value);
}
/**
 * No comment provided
 *
 * Hash: 0x069EDDF1FD4DEB0A | Since: 1207
 */
export function setCurrentDefenseAgainstPlayersModifier(horse, modifier) {
    const _horse = horse instanceof IPed ? horse.handle() : horse;
    SetCurrentDefenseAgainstPlayersModifier(_horse, modifier);
}
/**
 * No comment provided
 *
 * Hash: 0x9B6808EC46BE849B | Since: 1207
 */
export function setDefenseModifierFor(ped, modifier) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetDefenseModifierForPed(_ped, modifier);
}
/**
 * No comment provided
 *
 * Hash: 0x478F6B9920446CE2 | Since: 1207
 */
export function setFormationAutoAssignPosition(groupId, toggle) {
    SetFormationAutoAssignPosition(groupId, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xDE1B1907A83A1550 | Since: 1207
 */
export function setHealthRechargeMultiplier(ped, multiplier) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetHealthRechargeMultiplier(_ped, multiplier);
}
/**
 * Sets some flag on a horse
 *
 * Hash: 0xB8AB265426CFE6DD | Since: 1207
 */
export function setHorseScriptedFlag(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xB8AB265426CFE6DD', _ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xFECA2081F61ED2CD | Since: 1207
 */
export function setInteractionLockonFlag(ped, player, flag, enable) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetInteractionLockonFlag(_ped, _player, flag, enable);
}
/**
 * Use to apply metaped player components
 * Replaces asset, alternatively you can remove assets using REMOVE_TAG_FROM_META_PED
 *
 * Hash: 0xBC6DF00D7A4A6819 | Since: 1207
 */
export function setMetaTag(ped, drawable, albedo, normal, material, palette, tint0, tint1, tint2) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof drawable === 'string')
        drawable = GetHashKey(drawable);
    if (typeof albedo === 'string')
        albedo = GetHashKey(albedo);
    if (typeof normal === 'string')
        normal = GetHashKey(normal);
    if (typeof material === 'string')
        material = GetHashKey(material);
    if (typeof palette === 'string')
        palette = GetHashKey(palette);
    SetMetaPedTag(_ped, drawable, albedo, normal, material, palette, tint0, tint1, tint2);
}
/**
 * Sets ped eye redness, weariness: 0.f to 1.f
 *
 * Hash: 0x314C5465195F3B30 | Since: 1207
 */
export function setMetaWeariness(ped, weariness) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetMetaPedWeariness(_ped, weariness);
}
/**
 * No comment provided
 *
 * Hash: 0x7883AA809DF43D98 | Since: 1355
 */
export function setMinHealthThreshold(ped, healthAmount) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetMinPedHealthThreshold(_ped, healthAmount);
}
/**
 * No comment provided
 *
 * Hash: 0xA69899995997A63B | Since: 1207
 */
export function setMountBondingLevel(ped, bondingLevel) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetMountBondingLevel(_ped, bondingLevel);
}
/**
 * Note: this native was added in build 1232.40
 *
 * Hash: 0x11E6B9629C46D6EC | Since: 1232
 */
export function setMountSecurityEnabled(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetMountSecurityEnabled(_ped, toggle);
}
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/COMBAT_ACTION_DISABLE_FLAGS
 *
 * Hash: 0xB8DE69D9473B7593 | Since: 1207
 */
export function setActionDisableFlag(ped, actionDisableFlag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedActionDisableFlag(_ped, actionDisableFlag);
}
/**
 * bloodFountainPressure: visible effect from 0.0 till 20.0
 * yaw: visible effect from -3.0 till 3.0
 * bloodFountainDirection: 1.0 left side, -1.0 right side
 * bloodFountainPulse: from 0.1 (low) till 1.0 (fast)
 * make blood fountain from your stomach: _SET_PED_ACTIVATE_WOUND_EFFECT(ped, unk, 2, 14411, 0.0, 0.1, 0.0, 0.0, 3.0, -1.0, 1.0)
 *
 * Hash: 0xFFD54D9FE71B966A | Since: 1207
 */
export function setActivateWoundEffect(ped, boneId, moveWoundLeftRight, bloodFountainPressure, yaw, bloodFountainDirection, bloodFountainPulse) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedActivateWoundEffect(_ped, 0, boneId, moveWoundLeftRight, bloodFountainPressure, yaw, bloodFountainDirection, bloodFountainPulse, 0, 0);
}
/**
 * Params: hash - ARTHUR or JOHN
 * _SET_PED_(A-D)*
 *
 * Hash: 0xB285AD0EC870B2DF | Since: 1207
 */
export function setActivePlayerType(ped, playerType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof playerType === 'string')
        playerType = GetHashKey(playerType);
    SetPedActivePlayerType(_ped, playerType);
}
/**
 * No comment provided
 *
 * Hash: 0x43CA928E892CFDB8 | Since: 1311
 */
export function setAnimalDetectionModifier(ped, modifier) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedAnimalDetectionModifier(_ped, modifier);
}
/**
 * NET_FETCH_CLIENT_UPDATE_PED_FIGHT_PROFICIENCY: Changing parry multiplier for ped
 *
 * Hash: 0x6DBF2D78709AD70B | Since: 1207
 */
export function setBeatMultiplier(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedBeatMultiplier(_ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xCB9401F918CB0F75 | Since: 1207
 */
export function setBlackboardBool(ped, value, removeTimer) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedBlackboardBool(_ped, value, removeTimer);
}
/**
 * No comment provided
 *
 * Hash: 0x437C08DB4FEBE2BD | Since: 1207
 */
export function setBlackboardFloat(ped, value, removeTimer) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedBlackboardFloat(_ped, value, removeTimer);
}
/**
 * p1:
 * BodyPartChained
 * OverloadMostInjuredBodyPart
 *
 * p2:
 * LeftLeg
 * Legs
 * RightArm
 *
 * Hash: 0xA762C9D6CF165E0D | Since: 1207
 */
export function setBlackboardHash(ped, removeTimer) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedBlackboardHash(_ped, removeTimer);
}
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/BLACKBOARDS
 * Blackboard natives allow you to apply and check certain data to/for peds.
 * Blackboard bools, floats and strings are subdivided into 6 sections: "all", "animation", "any", "code", "global" and "script"
 * Most changes are only visible for "script" blackboards, some "script" blackboards change ped motions
 * "removeTimer" is self-removal timer, can be "-1" so your data will not be removed by the game (forever); 100 = 1 second
 *
 * Hash: 0x5F53010C4C3F6BAF | Since: 1207
 */
export function setBlackboardInt(ped, value, removeTimer) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedBlackboardInt(_ped, value, removeTimer);
}
/**
 * Bleedout profiles:
 * Animal_FastBleedout
 * Animal_Generic
 * Human_FastBleedout
 * Human_Generic
 * Human_Mission
 *
 * For more information, see common/data/ai/peddamageinfo.meta
 *
 * Hash: 0x66C047719B0E80E1 | Since: 1207
 */
export function setBleedoutProfile(ped, bleedoutProfile) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof bleedoutProfile === 'string')
        bleedoutProfile = GetHashKey(bleedoutProfile);
    SetPedBleedoutProfile(_ped, bleedoutProfile);
}
/**
 * brawlingStyle:
 * enum eBrawlingStyle : Hash
 * {
 * BS_AI = 0x802C604D,
 * BS_AI_BARBRAWL = 0x4FF5F0C7,
 * BS_AI_DEFENSIVE = 0xD888F2FD,
 * BS_AI_MOONSHINE_BARBRAWL = 0xA01B433A,
 * BS_ALLIGATOR = 0x7A5548ED,
 * BS_ALLIGATOR_LARGE = 0x368EC7CB,
 * BS_ALLY = 0x69C76C14,
 * BS_ANIMAL = 0xD777C754,
 * BS_BADGER = 0x7E7C3F53,
 * BS_BEAR = 0x0BC66E35,
 * BS_BEAVER = 0x4E313783,
 * BS_BOAR = 0x176A5831,
 * BS_BOUNTY_HUNTER = 0x3900654C,
 * BS_BRUISER = 0x4514DB61,
 * BS_BULL = 0x4E50C5D2,
 * BS_COUGAR = 0x9DAA7CCB,
 * BS_COW = 0xB0E91295,
 * BS_COYOTE = 0xA448EB69,
 * BS_DEER = 0xA781E6B3,
 * BS_DOG = 0x5A4155C4,
 * BS_ELK = 0x408697F0,
 * BS_FEMALE = 0x6A3BB2C2,
 * BS_FEMALE_STRONG = 0x4DAFDD84,
 * BS_GANGUP = 0xD0CECFF2,
 * BS_GOAT = 0x078E649F,
 * BS_HORSE = 0xF6B775F3,
 * BS_MICAH_FINALE = 0x1F0BB27A,
 * BS_MOOSE = 0x968917AB,
 * BS_MUSKRAT = 0x1EDC33AC,
 * BS_NO_MELEE = 0x25B5F931,
 * BS_PIG = 0x22EAD110,
 * BS_PLAYER = 0x78BAEF07,
 * BS_PLAYER_FINALE = 0xF9E77D2D,
 * BS_PLAYER_MOONSHINER = 0x687BF19F,
 * BS_PLAYER_WINTER1 = 0x3C6A802F,
 * BS_QUICK = 0xC4CABB1B,
 * BS_RACCOON = 0x505F8917,
 * BS_SHEEP = 0x6827CCCF,
 * BS_SNAKE = 0x82BEBC4B,
 * BS_TIMID = 0x431AEF77,
 * BS_WOLF = 0xA8F023D4
 * };
 *
 * Hash: 0x8BA83CC4288CD56D | Since: 1207
 */
export function setBrawlingStyle(ped, brawlingStyle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof brawlingStyle === 'string')
        brawlingStyle = GetHashKey(brawlingStyle);
    SetPedBrawlingStyle(_ped, brawlingStyle);
}
/**
 * SET_PED_CAN_*
 *
 * Hash: 0xFD6943B6DF77E449 | Since: 1207
 */
export function setCanBeLassoed(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanBeLassoed(_ped, toggle);
}
/**
 * Hashes: GUARD, COMBAT_ANIMAL, LAW, LAW_SHERIFF
 * _SET_PED_COMBAT_A* - _SET_PED_COMBAT_M*
 *
 * Hash: 0xBD75500141E4725C | Since: 1207
 */
export function setCombatAttributeHash(ped, p1) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    SetPedCombatAttributeHash(_ped, p1);
}
/**
 * No comment provided
 *
 * Hash: 0x9238A3D970BBB0A9 | Since: 1207
 */
export function setCombatBehaviour(ped, behaviour) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof behaviour === 'string')
        behaviour = GetHashKey(behaviour);
    SetPedCombatBehaviour(_ped, behaviour);
}
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/COMBAT_STYLES
 * Params: p2 is usually 1, sometimes 0 or 2
 * duration in seconds, -1.0 = forever
 *
 * Hash: 0x8ACC0506743A8A5C | Since: 1207
 */
export function setCombatStyle(ped, combatStyleHash, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof combatStyleHash === 'string')
        combatStyleHash = GetHashKey(combatStyleHash);
    SetPedCombatStyle(_ped, combatStyleHash, 0, duration);
}
/**
 * duration in seconds, -1.0 = forever
 *
 * Hash: 0x8B1E8E35A6E814EA | Since: 1207
 */
export function setCombatStyleMod(ped, combatStyleModHash, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof combatStyleModHash === 'string')
        combatStyleModHash = GetHashKey(combatStyleModHash);
    SetPedCombatStyleMod(_ped, combatStyleModHash, duration);
}
/**
 * No comment provided
 *
 * Hash: 0x7DE9692C6F64CFE8 | Since: 1207
 */
export function setCrouchMovement(ped, state, immediately) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCrouchMovement(_ped, state, 0, immediately);
}
/**
 * The higher the multiplier the less the engine renders culls (https://docs.unity3d.com/Manual/OcclusionCulling.html)
 *
 * Hash: 0x8AC1D721B2097B6E | Since: 1207
 */
export function setCullRange(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCullRange(_ped, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xDACE03C65C6666DB | Since: 1207
 */
export function setDamaged(ped, damaged) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedDamaged(_ped, damaged);
}
/**
 * damageCleanliness: see _GET_PED_DAMAGE_CLEANLINESS
 *
 * Hash: 0x7528720101A807A5 | Since: 1207
 */
export function setDamageCleanliness(ped, damageCleanliness) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedDamageCleanliness(_ped, damageCleanliness);
}
/**
 * _SET_PED_(A?)*
 *
 * Hash: 0xEB2BFE5D009F0331 | Since: 1232
 */
export function setDefensiveAreaToAngledArea(ped, x1, y1, z1, x2, y2, z2, entity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetPedDefensiveAreaToAngledArea(_ped, x1, y1, z1, x2, y2, z2, undefined, false, false, _entity, false);
}
/**
 * No comment provided
 *
 * Hash: 0x1854217C640B39EC | Since: 1207
 */
export function setDefensiveSphereAttachedToEntity(ped, entity, pos, radius) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetPedDefensiveSphereAttachedToEntity(_ped, _entity, pos.x, pos.y, pos.z, radius, 0, false);
}
/**
 * Seems to set the ped's loco type.
 * Values used in the scripts:
 * algie
 * angry_female
 * arthur_healthy
 * cowboy
 * cowboy_f
 * default
 * default_female
 * free_slave_01
 * free_slave_02
 * gold_panner
 * guard_lantern
 * injured_general
 * john_marston
 * lilly_millet
 * lone_prisoner
 * lost_man
 * mp_ova_hunter
 * mp_ova_hunter_female
 * murfree
 * old_female
 * primate
 * rally
 * waiter
 * war_veteran
 *
 * Hash: 0x923583741DC87BCE | Since: 1207
 */
export function setDesiredLocoForModel(ped, locomotionArchetype) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedDesiredLocoForModel(_ped, locomotionArchetype);
}
/**
 * Sets peds motion type
 *
 * Hash: 0x89F5E7ADECCCB49C | Since: 1207
 */
export function setDesiredLocoMotionType(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedDesiredLocoMotionType(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xBAD2A311667A50D7 | Since: 1207
 */
export function setDesiresGroup(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xBAD2A311667A50D7', _ped, toggle);
}
/**
 * Params: ped, 0f, -1, true, true in R* MP Scripts
 * _SET_PED_DE* - _SET_PED_F*
 *
 * Hash: 0xE3144B932DFDFF65 | Since: 1207
 */
export function setDirtCleaned(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedDirtCleaned(_ped, 0, 0, false, false);
}
/**
 * Disables being able to kick move ped.
 *
 * Hash: 0xADD31A5C7A5FAA73 | Since: 1207
 */
export function setDisableKickMove(ped, disable) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedDisableKickMove(_ped, disable);
}
/**
 * SOBER = 0.0f, SLIGHTLY_DRUNK = 0.25f, MODERATELY_DRUNK = 0.5f, VERY_DRUNK = 1.0f
 *
 * Hash: 0x406CCF555B04FAD3 | Since: 1207
 */
export function setDrunkness(ped, enabled, drunknessLevel) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedDrunkness(_ped, enabled, drunknessLevel);
}
/**
 * Used in R* MP Script fm_mission_controller and various R* SP Scripts for ambush*
 *
 * Hash: 0x20E54854DEF6A54A | Since: 1207
 */
export function setFiringPattern2(ped, patternHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof patternHash === 'string')
        patternHash = GetHashKey(patternHash);
    SetPedFiringPattern2(_ped, patternHash);
}
/**
 * Only used in R* MP Script fm_mission_controller
 *
 * Hash: 0x244E8C282188E40F | Since: 1207
 */
export function setFiringPattern3(ped, patternHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof patternHash === 'string')
        patternHash = GetHashKey(patternHash);
    SetPedFiringPattern3(_ped, patternHash);
}
/**
 * No comment provided
 *
 * Hash: 0x0E9E95FDEDCC9D35 | Since: 1207
 */
export function setFormationPosition(ped, position, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedFormationPosition(_ped, position, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x3AE3552E7C207CC5 | Since: 1207
 */
export function setGetupAnimation(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedGetupAnimation(_ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x8301D87B1B89E219 | Since: 1207
 */
export function setGrappleAction(ped, grappleAction) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof grappleAction === 'string')
        grappleAction = GetHashKey(grappleAction);
    SetPedGrappleAction(_ped, grappleAction);
}
/**
 * No comment provided
 *
 * Hash: 0x56E9C26CD29D1ED6 | Since: 1207
 */
export function setGrappleAnimation(ped, grappleAnim) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof grappleAnim === 'string')
        grappleAnim = GetHashKey(grappleAnim);
    SetPedGrappleAnimation(_ped, grappleAnim);
}
/**
 * No comment provided
 *
 * Hash: 0x99A6E246C315BF60 | Since: 1207
 */
export function setGrappleEffectMultiplier(ped, multiplier) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedGrappleEffectMultiplier(_ped, multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0x789DABD18E9024DB | Since: 1207
 */
export function setGrappleFlag(ped, flag, enable) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedGrappleFlag(_ped, flag, enable);
}
/**
 * No comment provided
 *
 * Hash: 0x604190F0CF0DF158 | Since: 1207
 */
export function setGrappleSequence(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedGrappleSequence(_ped);
}
/**
 * Hashes: GS_DRAGGING, GS_FACE_TO_BACK, GS_FACE_TO_FACE, GS_FACE_TO_FACE_WALL, GS_MOUNTED
 *
 * Hash: 0x630E7B01F091A197 | Since: 1207
 */
export function setGrappleStyle(ped, style) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof style === 'string')
        style = GetHashKey(style);
    return SetPedGrappleStyle(_ped, style);
}
/**
 * No comment provided
 *
 * Hash: 0x2BA918C823B8BA56 | Since: 1207
 */
export function setHeadshotDamageMultiplier(ped, multiplier) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedHeadshotDamageMultiplier(_ped, multiplier);
}
/**
 * configHash: see pedhealth.meta
 *
 * Hash: 0xF6B82FCE03B43A37 | Since: 1207
 */
export function setHealthConfig(ped, configHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof configHash === 'string')
        configHash = GetHashKey(configHash);
    SetPedHealthConfig(_ped, configHash);
}
/**
 * Only used in R* Script beat_sharp_shooter
 * Blocks ped from swimming underwater
 *
 * Hash: 0x7FB0088E8769CDDB | Since: 1207
 */
export function setImmersionFlag(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedImmersionFlag(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xD67B6F3BCF81BA47 | Since: 1207
 */
export function setIncapacitationFlags(ped, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedIncapacitationFlags(_ped, flags);
}
/**
 * No comment provided
 *
 * Hash: 0x39ED303390DDEAC7 | Since: 1207
 */
export function setIncapacitationModifiers(ped, canBeIncapacitated, threshold, bleedoutTime) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedIncapacitationModifiers(_ped, canBeIncapacitated, threshold, bleedoutTime, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x2890418B39BC8FFF | Since: 1207
 */
export function setIncapacitationTotalBleedOutDuration(ped, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedIncapacitationTotalBleedOutDuration(_ped, duration);
}
/**
 * No comment provided
 *
 * Hash: 0xA3C53CDE922BC78B | Since: 1207
 */
export function setInteractionNegativeResponse(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedInteractionNegativeResponse(_ped);
}
/**
 * personality (script_mp_rel): NONE, AGGRESSIVE, TIMID (non-aggressive), CRIPPS, SCRIPTEDINTIMIDATION, MAGGIE, MARCEL, SCRIPTEDSALOON
 * personality (script_rel): AVOID, SCRIPTEDOUTLAW, TIMIDGUARDDOG, SCRIPTEDTIMIDROB, AGGRESSIVECAMPER, LAZYDOG, KIERANTIEDUP, SCRIPTEDGALA
 *
 * Hash: 0x24C82EF607105FAA | Since: 1207
 */
export function setInteractionPersonality(ped, personality) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof personality === 'string')
        personality = GetHashKey(personality);
    SetPedInteractionPersonality(_ped, personality);
}
/**
 * No comment provided
 *
 * Hash: 0x20C5459379D75C1C | Since: 1207
 */
export function setInteractionPositiveResponse(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedInteractionPositiveResponse(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x5BCF0B79D4F5DBA3 | Since: 1207
 */
export function setKnockedByOneHit(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedKnockedByOneHit(_ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x05CE6AF4DF071D23 | Since: 1207
 */
export function setLadderMovementSpeedModifier(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedLadderMovementSpeedModifier(_ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x13A210949FCBD92B | Since: 1207
 */
export function setLights(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedLights(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x6DB875AFC584FA32 | Since: 1207
 */
export function setMeleeForcedDuration(ped, durationMs) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x6DB875AFC584FA32', _ped, durationMs);
}
/**
 * enum eMotivationState
 * {
 * TOILET_STATE,
 * FEAR_STATE,
 * ANGRY_STATE,
 * AGITATION_STATE,
 * HUNGRY_STATE,
 * TIRED_STATE,
 * SAD_STATE,
 * BRAVE_STATE,
 * OFFER_ITEM_STATE,
 * SUSPICION,
 * DRUNK_STATE
 * };
 *
 * If targetPed is set to 0 the ped motivationState affects everyone
 *
 * Hash: 0x06D26A96CA1BCA75 | Since: 1207
 */
export function setMotivation(ped, motivationState, threshold, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    SetPedMotivation(_ped, motivationState, threshold, _targetPed);
}
/**
 * The higher the modifier, the slower the motivationState value will decrease
 *
 * Hash: 0xA1EB5D029E0191D3 | Since: 1207
 */
export function setMotivationModifier(ped, motivationState, modifier) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedMotivationModifier(_ped, motivationState, modifier);
}
/**
 * motivationState: see _SET_PED_MOTIVATION
 *
 * Hash: 0x2EB75FB86C41F026 | Since: 1207
 */
export function setMotivationStateOverride(ped, motivationState, enabled) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedMotivationStateOverride(_ped, motivationState, enabled);
}
/**
 * Hashes: STANDARD_PED_AGRO_GUARD, BOUNTY_HUNTER, PLAYER_HORSE, LAW_POLICE, GUARD_DOG, ATTACK_DOG
 * Personalities can also be found in common:/data/ai/interactionpersonalities
 *
 * Hash: 0xB8B6430EAD2D2437 | Since: 1207
 */
export function setPersonality(ped, personality) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof personality === 'string')
        personality = GetHashKey(personality);
    SetPedPersonality(_ped, personality);
}
/**
 * No comment provided
 *
 * Hash: 0x4A48B6E03BABB4AC | Since: 1207
 */
export function setPromptName(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedPromptName(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x19B14E04B009E28B | Since: 1207
 */
export function setPromptName2(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedPromptName2(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xFCA8FB9E15FA80D3 | Since: 1207
 */
export function setPromptNameFromGxtEntry(ped, gxtEntryHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof gxtEntryHash === 'string')
        gxtEntryHash = GetHashKey(gxtEntryHash);
    SetPedPromptNameFromGxtEntry(_ped, gxtEntryHash);
}
/**
 * No comment provided
 *
 * Hash: 0xC2745D9261664901 | Since: 1207
 */
export function setPromptNameFromGxtEntry2(ped, gxtEntryHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof gxtEntryHash === 'string')
        gxtEntryHash = GetHashKey(gxtEntryHash);
    SetPedPromptNameFromGxtEntry2(_ped, gxtEntryHash);
}
/**
 * quality: see _GET_PED_QUALITY
 *
 * Hash: 0xCE6B874286D640BB | Since: 1207
 */
export function setQuality(ped, quality) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedQuality(_ped, quality);
}
/**
 * No comment provided
 *
 * Hash: 0x25ACFC650B65C538 | Since: 1207
 */
export function setScale(ped, scale) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedScale(_ped, scale);
}
/**
 * 0.0 - 1.0
 * Modifies the "scent line" on the ped's body when using Eagle Eye.
 *
 * Hash: 0x01B21B81865E2A1F | Since: 1207
 */
export function setScent(ped, scent) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedScent(_ped, scent);
}
/**
 * No comment provided
 *
 * Hash: 0xC163DAC52AC975D3 | Since: 1207
 */
export function setTargetActionDisableFlag(ped, actionDisableFlag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedTargetActionDisableFlag(_ped, actionDisableFlag);
}
/**
 * No comment provided
 *
 * Hash: 0x36E4B61DC56DE77C | Since: 1207
 */
export function setToBeRemoved(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedToBeRemoved(_ped, 0, 0, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x221F4D9912B7FE86 | Since: 1207
 */
export function setToDisableRagdoll(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedToDisableRagdoll(_ped, toggle);
}
/**
 * duration in seconds
 *
 * Hash: 0xA5950E16B8F31052 | Since: 1207
 */
export function setTrailEffect(ped, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedTrailEffect(_ped, false, duration);
}
/**
 * Doesn't actually return anything.
 *
 * Hash: 0xEB72453B6F5B45B0 | Since: 1232
 */
export function setUseHorseMapCollision(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedUseHorseMapCollision(_ped, toggle);
}
/**
 * _SET_PED_S* - _SET_PED_T*
 *
 * Hash: 0xD05AD61F242C626B | Since: 1207
 */
export function setVoiceVolume(ped, volume) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedVoiceVolume(_ped, volume);
}
/**
 * only works when you use SET_PED_WETNESS_HEIGHT first , if you do 0.0 (it resets) you need to apply again with SET_PED_WETNESS_HEIGHT to see the wetness effects again
 *
 * Hash: 0xF9CFF5BB70E8A2CB | Since: 1207
 */
export function setWetnessAmount(ped, amount) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xF9CFF5BB70E8A2CB', _ped, amount);
}
/**
 * No comment provided
 *
 * Hash: 0x4DB9D03AC4E1FA84 | Since: 1207
 */
export function setWrithingDuration(ped, writhingDuration1, writhingDuration2) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedWrithingDuration(_ped, writhingDuration1, writhingDuration2, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xA73F50E8796150D5 | Since: 1207
 */
export function setPeltForHorse(horse, peltId) {
    const _horse = horse instanceof IPed ? horse.handle() : horse;
    SetPeltForHorse(_horse, peltId);
}
/**
 * Set the pelt of the animal to the back of the horse
 * EXAMPLE:
 * local mount = GetMountOwnedByPlayer(PlayerId())
 * Citizen.InvokeNative(0xC412AA1C73111FE0,mount,GetHashKey('PROVISION_DEER_HIDE_POOR'),GetHashKey('a_c_deer_01_uppr_000_c0_001_ab'),0,0)
 *
 * Hash: 0xC412AA1C73111FE0 | Since: 1207
 */
export function setPeltForHorseByInventoryItem(horse, inventoryItem, albedoHash, normalHash) {
    const _horse = horse instanceof IPed ? horse.handle() : horse;
    if (typeof inventoryItem === 'string')
        inventoryItem = GetHashKey(inventoryItem);
    if (typeof albedoHash === 'string')
        albedoHash = GetHashKey(albedoHash);
    if (typeof normalHash === 'string')
        normalHash = GetHashKey(normalHash);
    Citizen.invokeNative('0xC412AA1C73111FE0', _horse, inventoryItem, albedoHash, normalHash, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5708EDD71B50C008 | Since: 1207
 */
export function setPlayerAntagonizeDisabledFor(ped, player, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerAntagonizeDisabledForPed(_ped, _player, duration);
}
/**
 * Animal Skin Quality Modifier
 * Params: p2 = 2, p3 = 3 in R* Scripts
 *
 * Hash: 0x9EFF3C91DF38304F | Since: 1311
 */
export function setPlayerCurrentAnimalDamageModifier(player, modifier) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return SetPlayerCurrentAnimalDamageModifier(_player, modifier, 0, 0);
}
/**
 * dismountTimer gets called with the data from `_GET_PLAYER_DISMOUNT_TIMESTAMP`
 *
 * Hash: 0xA691C10054275290 | Since: 1207
 */
export function setPlayerDismountTimestamp(mount, player, dismountedTimestamp) {
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xA691C10054275290', _mount, _player, dismountedTimestamp);
}
/**
 * No comment provided
 *
 * Hash: 0x19173C3F15367B54 | Since: 1207
 */
export function setPlayerGreetDisabledFor(ped, player, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerGreetDisabledForPed(_ped, _player, duration);
}
/**
 * No comment provided
 *
 * Hash: 0x283978A15512B2FE | Since: 1207
 */
export function setRandomOutfitVariation(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetRandomOutfitVariation(_ped, false);
}
/**
 * Used in Script Function MP_MAIN_OFFLINE__INITIALIZE_GAME
 * _SET_RELATIONSHIP_*
 *
 * Hash: 0xDC91F22F09BC6C2F | Since: 1207
 */
export function setRelationshipGroupScriptRegistered(group, unregister) {
    if (typeof group === 'string')
        group = GetHashKey(group);
    Citizen.invokeNative('0xDC91F22F09BC6C2F', group, unregister);
}
/**
 * No comment provided
 *
 * Hash: 0x39A2FC5AF55A52B1 | Since: 1207
 */
export function setRemoveNetworked(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetRemovePedNetworked(_ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xDB48E99F8E064E56 | Since: 1207
 */
export function setScenarioAnimalDensityMultiplierThisFrame(multiplier) {
    SetScenarioAnimalDensityMultiplierThisFrame(multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0x28CB6391ACEDD9DB | Since: 1207
 */
export function setScenarioHumanDensityMultiplierThisFrame(multiplier) {
    SetScenarioHumanDensityMultiplierThisFrame(multiplier);
}
/**
 * Sets the scenario ped density to the given config.
 *
 * Valid configs:
 * - BLACKWATER
 * - DEFAULT
 * - NEWBORDEAUX
 * - RHODES
 * - STRAWBERRY
 * - TUMBLEWEED
 * - VALENTINE
 * - VANHORN
 *
 * See common/data/ai/densityscoringconfigs.meta for more information.
 *
 * Hash: 0x95423627A9CA598E | Since: 1207
 */
export function setScenarioDensityThisFrame(configHash) {
    if (typeof configHash === 'string')
        configHash = GetHashKey(configHash);
    SetScenarioPedDensityThisFrame(configHash);
}
/**
 * No comment provided
 *
 * Hash: 0xA77FA7BE9312F8C0 | Since: 1207
 */
export function setScenarioRangeMultiplierThisFrame(multiplier) {
    SetScenarioPedRangeMultiplierThisFrame(multiplier);
}
/**
 * Only used in SP R* Script loanshark_hunter
 *
 * Hash: 0x9E3842E5DAD69F80 | Since: 1207
 */
export function setScenarioVolumeReference(volume) {
    Citizen.invokeNative('0x9E3842E5DAD69F80', volume);
}
/**
 * _SET_ST* - _SET_SW* Sets a ped config flag for the specified ped
 *
 * Hash: 0x028E7B3BBA0BD2FC | Since: 1207
 */
export function setStagedFlag(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x028E7B3BBA0BD2FC', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEF5A3D2285D8924B | Since: 1207
 */
export function setStaminaDepletionMultiplier(ped, multiplier) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetStaminaDepletionMultiplier(_ped, multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0x345C9F993A8AB4A4 | Since: 1207
 */
export function setStaminaRechargeMultiplier(ped, multiplier) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetStaminaRechargeMultiplier(_ped, multiplier);
}
/**
 * Size will be permanent
 *
 * Hash: 0x7FF72DE061DF55E2 | Since: 1207
 */
export function setTankAttributeSize(ped, attributeIndex, size) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetTankAttributeSize(_ped, attributeIndex, size);
}
/**
 * No comment provided
 *
 * Hash: 0x6C76BC24F8BB709A | Since: 1207
 */
export function setTextureLayerAlpha(textureId, layerId, texAlpha) {
    SetTextureLayerAlpha(textureId, layerId, texAlpha);
}
/**
 * No comment provided
 *
 * Hash: 0xF2EA041F1146D75B | Since: 1207
 */
export function setTextureLayerMod(textureId, layerId, modTextureHash, modAlpha, modChannel) {
    if (typeof modTextureHash === 'string')
        modTextureHash = GetHashKey(modTextureHash);
    SetTextureLayerMod(textureId, layerId, modTextureHash, modAlpha, modChannel);
}
/**
 * paletteHash: https://raw.githubusercontent.com/femga/rdr3_discoveries/master/clothes/cloth_color_palletes.lua
 *
 * Hash: 0x1ED8588524AC9BE1 | Since: 1207
 */
export function setTextureLayerPallete(textureId, layerId, paletteHash) {
    if (typeof paletteHash === 'string')
        paletteHash = GetHashKey(paletteHash);
    SetTextureLayerPallete(textureId, layerId, paletteHash);
}
/**
 * No comment provided
 *
 * Hash: 0x057C4F092E2298BE | Since: 1207
 */
export function setTextureLayerRoughness(textureId, layerId, texRough) {
    SetTextureLayerRoughness(textureId, layerId, texRough);
}
/**
 * No comment provided
 *
 * Hash: 0x3329AAE2882FC8E4 | Since: 1207
 */
export function setTextureLayerSheetGridIndex(textureId, layerId, sheetGridIndex) {
    SetTextureLayerSheetGridIndex(textureId, layerId, sheetGridIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x253A63B5BADBC398 | Since: 1207
 */
export function setTextureLayerTextureMap(textureId, layerId, albedoHash, normalHash, materialHash) {
    if (typeof albedoHash === 'string')
        albedoHash = GetHashKey(albedoHash);
    if (typeof normalHash === 'string')
        normalHash = GetHashKey(normalHash);
    if (typeof materialHash === 'string')
        materialHash = GetHashKey(materialHash);
    SetTextureLayerTextureMap(textureId, layerId, albedoHash, normalHash, materialHash);
}
/**
 * Seem color is not RGB or HSV
 *
 * Hash: 0x2DF59FFE6FFD6044 | Since: 1207
 */
export function setTextureLayerTint(textureId, layerId, tint0, tint1, tint2) {
    SetTextureLayerTint(textureId, layerId, tint0, tint1, tint2);
}
/**
 * Used in script function METAPED_CLOTHING__XML__APPLY_OUTFIT_TINTS_TO_PED
 *
 * Hash: 0x4EFC1F8FF1AD94DE | Since: 1207
 */
export function setTextureOutfitTints(ped, componentCategory, palette, tint0, tint1, tint2) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof componentCategory === 'string')
        componentCategory = GetHashKey(componentCategory);
    if (typeof palette === 'string')
        palette = GetHashKey(palette);
    SetTextureOutfitTints(_ped, componentCategory, palette, tint0, tint1, tint2);
}
/**
 * _SET_W(EAPON?)*
 *
 * Hash: 0x932786CE3C76477C | Since: 1207
 */
export function setTotalDamageFalloffBonus(ped, bonus) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetTotalPedDamageFalloffBonus(_ped, bonus);
}
/**
 * _SET_W(EAPON?)*
 *
 * Hash: 0x73B6F907B913C860 | Since: 1207
 */
export function setTotalDamageFromAi(ped, totalDamage) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetTotalPedDamageFromAi(_ped, totalDamage);
}
/**
 * Triggers a gunshot
 * Params: p5 = -1 in R* Scripts
 *
 * Hash: 0x4C57F27D1554E6B0 | Since: 1207
 */
export function shootTriggerAtCoords(ped, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return ShootTriggerAtCoords(_ped, pos.x, pos.y, pos.z, 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x83ED1FC9DF3411F5 | Since: 1311
 */
export function spawnpointsStartSearchWithVolume(volume, spawnpointsFlag, duration) {
    SpawnpointsStartSearchWithVolume(volume, spawnpointsFlag, 0, duration, 0);
}
/**
 * _TOGGLE_S* - _UPDATE_*
 *
 * Hash: 0x09E378C52B1433B5 | Since: 1207
 */
export function togglePlayerFlinch(ped, pos, scale) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x09E378C52B1433B5', _ped, pos.x, pos.y, pos.z, scale);
}
/**
 * No comment provided
 *
 * Hash: 0x7D4E70A67A651C71 | Since: 1207
 */
export function unreserveAmbients(numPeds) {
    UnreserveAmbientPeds(numPeds);
}
/**
 * No comment provided
 *
 * Hash: 0x0F9E754EBE8FDBFA | Since: 1311
 */
export function updateAnimalDamageModifier(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    UpdateAnimalDamageModifier(_player);
}
/**
 * Should be called at least once for any new texture override.
 * Otherwise component textures will be just black.
 * Also needs to be called for updating any ped overlays to apply the changes.
 *
 * Hash: 0x92DAABA2C1C10B0E | Since: 1207
 */
export function updateTexture(textureId) {
    UpdatePedTexture(textureId);
}
/**
 * Update variation on ped, needed after first creation, or when component or texture/overlay is changed
 *
 * Hash: 0xCC8CA3E88256E58F | Since: 1207
 */
export function updateVariation(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    UpdatePedVariation(_ped, false, false, false, false, false);
}
/**
 * Params: 0.0f to remove wound effects
 *
 * Hash: 0x66B1CB778D911F49 | Since: 1207
 */
export function updateWoundEffect(ped, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    UpdatePedWoundEffect(_ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0x66B957AAC2EAAEAB | Since: 1207
 */
export function updateShopItemWearableState(ped, componentHash, wearableState, isMp) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    if (typeof wearableState === 'string')
        wearableState = GetHashKey(wearableState);
    UpdateShopItemWearableState(_ped, componentHash, wearableState, 0, isMp, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xE0B61ED8BB37712F | Since: 1207
 */
export function warpOutOfVehicle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    WarpPedOutOfVehicle(_ped);
}
