import { Vector3, IEntity, IPed, IVehicle, IObject } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x45C597097DD7CB81 | Since: 1207
 */
export function addCoverBlockingArea(playerX, playerY, playerZ, radiusX, radiusY, radiusZ) {
    AddCoverBlockingArea(playerX, playerY, playerZ, radiusX, radiusY, radiusZ, false, false, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xD5C12A75C7B9497F | Since: 1207
 */
export function addCoverPoint() {
    return AddCoverPoint(0, 0, 0, 0, undefined, undefined, undefined, false);
}
/**
 * Params: p2 is always -1.f in R* Scripts
 *
 * Hash: 0x3923EC958249657D | Since: 1207
 */
export function addFleeTargetPed(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    AddFleeTargetPed(_ped, _targetPed, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x23083260DEC3A551 | Since: 1207
 */
export function addPatrolRouteLink(node1, node2) {
    AddPatrolRouteLink(node1, node2);
}
/**
 * No comment provided
 *
 * Hash: 0x8EDF950167586B7C | Since: 1207
 */
export function addPatrolRouteNode(nodeId, pos, lookPosX, lookPosY, lookPosZ, duration) {
    return AddPatrolRouteNode(nodeId, pos.x, pos.y, pos.z, lookPosX, lookPosY, lookPosZ, duration, false);
}
/**
 * Returns true when requested asset is loaded
 *
 * Hash: 0x5E5D96BE25E9DF68 | Since: 1207
 */
export function areCompositeLootableEntityDefAssetsLoaded(asset) {
    if (typeof asset === 'string')
        asset = GetHashKey(asset);
    return AreCompositeLootableEntityDefAssetsLoaded(asset);
}
/**
 * No comment provided
 *
 * Hash: 0x60F9A4393A21F741 | Since: 1207
 */
export function assistedMovementIsRouteLoaded() {
    return AssistedMovementIsRouteLoaded();
}
/**
 * No comment provided
 *
 * Hash: 0x3548536485DD792B | Since: 1207
 */
export function assistedMovementRemoveRoute() {
    return AssistedMovementRemoveRoute();
}
/**
 * No comment provided
 *
 * Hash: 0xD5002D78B7162E1B | Since: 1207
 */
export function assistedMovementSetRouteProperties(props) {
    return AssistedMovementSetRouteProperties(props);
}
/**
 * No comment provided
 *
 * Hash: 0x2D19BC4DF626CBE7 | Since: 1207
 */
export function canStartItemInteraction(ped, itemHash, interactionAnimHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof itemHash === 'string')
        itemHash = GetHashKey(itemHash);
    if (typeof interactionAnimHash === 'string')
        interactionAnimHash = GetHashKey(interactionAnimHash);
    return CanStartItemInteraction(_ped, itemHash, interactionAnimHash, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xC35B5CDB2824CF69 | Since: 1207
 */
export function clearDrivebyUnderneathDrivingTask(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearDrivebyTaskUnderneathDrivingTask(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x176CECF6F920D707 | Since: 1207
 */
export function clearPedSecondary(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedSecondaryTask(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xE1EF3C1216AFF2CD | Since: 1207
 */
export function clearPeds(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedTasks(_ped, false, false);
}
/**
 * Immediately stops the pedestrian from whatever it's doing. They stop fighting, animations, etc. they forget what they were doing.
 *
 * resetCrouch TRUE = ped will stand up if crouching, FALSE = ped will remain crouching if crouched
 *
 * Hash: 0xAAA34F8A7CB32098 | Since: 1207
 */
export function clearPedsImmediately(ped, resetCrouch) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedTasksImmediately(_ped, false, resetCrouch);
}
/**
 * No comment provided
 *
 * Hash: 0x3841422E9C488D8C | Since: 1207
 */
export function clearSequence() {
    return ClearSequenceTask();
}
/**
 * No comment provided
 *
 * Hash: 0xB043ECA801B8CBC1 | Since: 1207
 */
export function closePatrolRoute() {
    ClosePatrolRoute();
}
/**
 * No comment provided
 *
 * Hash: 0x39E72BC99E6360CB | Since: 1207
 */
export function closeSequence(taskSequenceId) {
    CloseSequenceTask(taskSequenceId);
}
/**
 * No comment provided
 *
 * Hash: 0xAF8A443CCC8018DC | Since: 1207
 */
export function createPatrolRoute() {
    CreatePatrolRoute();
}
/**
 * Returns scenario
 *
 * Hash: 0x94B745CE41DB58A1 | Since: 1207
 */
export function createScenarioPointHash(scenarioHash, pos, heading) {
    if (typeof scenarioHash === 'string')
        scenarioHash = GetHashKey(scenarioHash);
    return CreateScenarioPointHash(scenarioHash, pos.x, pos.y, pos.z, heading, undefined, undefined, false);
}
/**
 * Returns scenario
 *
 * Hash: 0x794AB1379A74064D | Since: 1207
 */
export function createScenarioPointHashAttachedToEntity(entity, scenarioHash, pos, heading) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof scenarioHash === 'string')
        scenarioHash = GetHashKey(scenarioHash);
    return CreateScenarioPointHashAttachedToEntity(_entity, scenarioHash, pos.x, pos.y, pos.z, heading, undefined, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x7767DD9D65E91319 | Since: 1207
 */
export function deletePatrolRoute() {
    return DeletePatrolRoute();
}
/**
 * No comment provided
 *
 * Hash: 0x5A59271FFADD33C1 | Since: 1207
 */
export function doesScenarioExistInArea(pos, radius) {
    return DoesScenarioExistInArea(pos.x, pos.y, pos.z, radius, false, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0xF9034C136C9E00D3 | Since: 1207
 */
export function doesScenarioGroupExist() {
    return DoesScenarioGroupExist();
}
/**
 * No comment provided
 *
 * Hash: 0x6EEAD6AF637DA752 | Since: 1207
 */
export function doesScenarioOfTypeExistInAreaHash(pos, typeHash, radius) {
    if (typeof typeHash === 'string')
        typeHash = GetHashKey(typeHash);
    return DoesScenarioOfTypeExistInAreaHash(pos.x, pos.y, pos.z, typeHash, radius, false);
}
/**
 * No comment provided
 *
 * Hash: 0x841475AC96E794D1 | Since: 1207
 */
export function doesScenarioPointExist(scenario) {
    return DoesScenarioPointExist(scenario);
}
/**
 * Checks if there is a cover point at position
 *
 * Hash: 0xA98B8E3C088E5A31 | Since: 1207
 */
export function doesScriptedCoverPointExistAtCoords() {
    return DoesScriptedCoverPointExistAtCoords(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEED08A3A98B847E2 | Since: 1207
 */
export function endDuel(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    EndDuel(_ped, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xF533D68FF970D190 | Since: 1207
 */
export function findScenarioOfTypeHash(pos, scenarioType, distance) {
    if (typeof scenarioType === 'string')
        scenarioType = GetHashKey(scenarioType);
    return FindScenarioOfTypeHash(pos.x, pos.y, pos.z, scenarioType, distance, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x444C910A5058E568 | Since: 1207
 */
export function forceScenarioGroupPriority() {
    ForceScenarioGroupPriority(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x534AEBA6E5ED4CAB | Since: 1207
 */
export function getActiveVehicleMissionType(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetActiveVehicleMissionType(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x0CCFE72B43C9CF96 | Since: 1207
 */
export function getIsCarriableEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetIsCarriableEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x8785E6E40C7A8819 | Since: 1207
 */
export function getIsPedAimingInTheAir(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetIsPedAimingInTheAir(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xB0760331C7AA4155 | Since: 1207
 */
export function getIsActive(ped, taskIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetIsTaskActive(_ped, taskIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xCB4E8BE8A0063C5D | Since: 1207
 */
export function getIsWaypointRecordingLoaded() {
    return GetIsWaypointRecordingLoaded();
}
/**
 * No comment provided
 *
 * Hash: 0x804425C4BBD00883 | Since: 1207
 */
export function getItemInteractionItemId(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetItemInteractionItemId(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xBC864A70AD55E0C1 | Since: 1207
 */
export function getItemInteractionPromptProgress(ped, inputContext) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof inputContext === 'string')
        inputContext = GetHashKey(inputContext);
    return GetItemInteractionPromptProgress(_ped, inputContext);
}
/**
 * No comment provided
 *
 * Hash: 0x6AA3DCA2C6F5EB6D | Since: 1207
 */
export function getItemInteractionState(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetItemInteractionState(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x8517D4A6CA8513ED | Since: 1207
 */
export function getPedDesiredMoveBlendRatio(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedDesiredMoveBlendRatio(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xE6A877C64CAF1BC5 | Since: 1207
 */
export function getPedWaypointDistance(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedWaypointDistance(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xD39A2F3E7FCAFF08 | Since: 1207
 */
export function getPedWaypointOverrideSpeed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedWaypointOverrideSpeed(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x2720AAA75001E094 | Since: 1207
 */
export function getPedWaypointProgress(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedWaypointProgress(_ped);
}
/**
 * Old name: _GET_SCENARIO_POINT_ENTITY
 *
 * Hash: 0x295514F198EFD0CA | Since: 1207
 */
export function getPropForScenarioPoint(scenarioPoint) {
    return GetPropForScenarioPoint(scenarioPoint);
}
/**
 * No comment provided
 *
 * Hash: 0xD04241BBF6D03A5E | Since: 1207
 */
export function getRansackScenarioPointPedIsUsing(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetRansackScenarioPointPedIsUsing(_ped);
}
/**
 * Note: scenariosInRadius is an array, and its size and values should be aligned to 8 bytes.
 *
 * Hash: 0x345EC3B7EBDE1CB5 | Since: 1207
 */
export function getScenarioPointsInArea(pos, radius, scenariosInRadius, size) {
    return GetScenarioPointsInArea(pos.x, pos.y, pos.z, radius, scenariosInRadius, size);
}
/**
 * No comment provided
 *
 * Hash: 0x594A1028FC2A3E85 | Since: 1207
 */
export function getScriptedCoverPointCoords(coverpoint) {
    return new Vector3(GetScriptedCoverPointCoords(coverpoint));
}
/**
 * Gets the status of a script-assigned task, and returns an int between 0-8
 * taskHash: https://alloc8or.re/rdr3/doc/enums/eScriptTaskHash.txt
 *
 * WAITING_TO_START_TASK = 0,
 * PERFORMING_TASK
 * DORMANT_TASK
 * VACANT_STAGE
 * GROUP_TASK_STAGE
 * ATTRACTOR_SCRIPT_TASK_STAGE
 * SECONDARY_TASK_STAGE
 * TASK_NOT_FOUND
 * FINISHED_TASK
 *
 * Hash: 0x77F1BEB8863288D5 | Since: 1207
 */
export function getScriptStatus(ped, taskHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof taskHash === 'string')
        taskHash = GetHashKey(taskHash);
    return GetScriptTaskStatus(_ped, taskHash, false);
}
/**
 * returned values:
 * 0 to 7 = task that's currently in progress, 0 meaning the first one.
 * -1 no task sequence in progress.
 *
 * Hash: 0x00A9010CFE1E3533 | Since: 1207
 */
export function getSequenceProgress(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetSequenceProgress(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xB4F47213DF45A64C | Since: 1207
 */
export function getMoveNetworkEvent(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetTaskMoveNetworkEvent(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x717E4D1F2048376D | Since: 1207
 */
export function getMoveNetworkState(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetTaskMoveNetworkState(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x3DC971EB22F73447 | Since: 1207
 */
export function getVehicleWaypointPlaybackOverrideSpeed() {
    return GetVehicleWaypointPlaybackOverrideSpeed(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9824CFF8FC66E159 | Since: 1207
 */
export function getVehicleWaypointProgress(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWaypointProgress(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x416B62AC8B9E5BBD | Since: 1207
 */
export function getVehicleWaypointTargetPoint(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWaypointTargetPoint(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xA5B769058763E497 | Since: 1207
 */
export function getWaypointDistanceAlongRoute() {
    return GetWaypointDistanceAlongRoute(0);
}
/**
 * No comment provided
 *
 * Hash: 0x8785E6E40C7A8818 | Since: 1207
 */
export function isDrivebyUnderneathDrivingTask(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsDrivebyTaskUnderneathDrivingTask(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xCF9B71C0AF824036 | Since: 1355
 */
export function isEmoteRunning(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsEmoteTaskRunning(_ped, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA320EF046186FA3B | Since: 1207
 */
export function isMountedWeaponUnderneathDrivingTask(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsMountedWeaponTaskUnderneathDrivingTask(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xD4D8636C0199A939 | Since: 1207
 */
export function isMoveBlendRatioRunning(moveBlendRatio) {
    return IsMoveBlendRatioRunning(moveBlendRatio);
}
/**
 * No comment provided
 *
 * Hash: 0x24A2AD74FA9814E2 | Since: 1207
 */
export function isMoveBlendRatioSprinting(moveBlendRatio) {
    return IsMoveBlendRatioSprinting(moveBlendRatio);
}
/**
 * No comment provided
 *
 * Hash: 0x349CE7B56DAFD95C | Since: 1207
 */
export function isMoveBlendRatioStill(moveBlendRatio) {
    return IsMoveBlendRatioStill(moveBlendRatio);
}
/**
 * No comment provided
 *
 * Hash: 0xF133BBBE91E1691F | Since: 1207
 */
export function isMoveBlendRatioWalking(moveBlendRatio) {
    return IsMoveBlendRatioWalking(moveBlendRatio);
}
/**
 * No comment provided
 *
 * Hash: 0xAA135F9482C82CC3 | Since: 1207
 */
export function isPedActiveInScenario(ped, scenario) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedActiveInScenario(_ped, scenario);
}
/**
 * This function is hard-coded to always return false.
 *
 * Hash: 0x90A09F3A45FED688 | Since: 1207
 */
export function isPedBeingArrested(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedBeingArrested(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x74E559B3BC910685 | Since: 1207
 */
export function isPedCuffed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedCuffed(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x0C3CB2E600C8977D | Since: 1207
 */
export function isPedExitingScenario(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedExitingScenario(_ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x2A74E1D5F2F00EEC | Since: 1207
 */
export function isPedGettingUp(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedGettingUp(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xF330A5C062B29BED | Since: 1207
 */
export function isPedInHitReact(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInHitReact(_ped);
}
/**
 * This native checks if a ped is on the ground, in pain from a (gunshot) wound.
 *
 * Hash: 0xDEB6D52126E7D640 | Since: 1207
 */
export function isPedInWrithe(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedInWrithe(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xC5286FFC176F28A2 | Since: 1207
 */
export function isPedRunning(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedRunning(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x038B1F1674F0E242 | Since: 1207
 */
export function isPedRunningInspection(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedRunningInspectionTask(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEC7E480FF8BD0BED | Since: 1207
 */
export function isPedRunningItemInteraction(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedRunningTaskItemInteraction(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x916B8E075ABC8B4E | Since: 1207
 */
export function isPedScenarioReactLooking(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedScenarioReactLooking(_ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x57E457CD2C0FC168 | Since: 1207
 */
export function isPedSprinting(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedSprinting(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xAC29253EEF8F0180 | Since: 1207
 */
export function isPedStill(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedStill(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xDE4C184B2B9B071A | Since: 1207
 */
export function isPedWalking(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedWalking(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x367A09DED4E05B99 | Since: 1207
 */
export function isScenarioGroupEnabled() {
    return IsScenarioGroupEnabled();
}
/**
 * No comment provided
 *
 * Hash: 0x788756D73AC2E07C | Since: 1207
 */
export function isScenarioOccupied() {
    return IsScenarioOccupied(0, 0, 0, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0x3A815DB3EA088722 | Since: 1207
 */
export function isScenarioTypeEnabled() {
    return IsScenarioTypeEnabled();
}
/**
 * No comment provided
 *
 * Hash: 0x921CE12C489C4C41 | Since: 1207
 */
export function isMoveNetworkActive(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsTaskMoveNetworkActive(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x30ED88D5E0C56A37 | Since: 1207
 */
export function isMoveNetworkReadyForTransition(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsTaskMoveNetworkReadyForTransition(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x559A6F8C5133B4EE | Since: 1207
 */
export function isTeamCarriableEntity() {
    return IsTeamCarriableEntity(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE03B3F2D3DC59B64 | Since: 1207
 */
export function isWaypointPlaybackGoingOnForPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsWaypointPlaybackGoingOnForPed(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xF5134943EA29868C | Since: 1207
 */
export function isWaypointPlaybackGoingOnForVehicle() {
    return IsWaypointPlaybackGoingOnForVehicle(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x67BFCED22909834D | Since: 1207
 */
export function makeObjectNotCarriable(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    MakeObjectNotCarriable(__object);
}
/**
 * Note: patrolRoute must be prefixed with 'miss_' for it to be valid
 *
 * Hash: 0xA36BFB5EE89F3D82 | Since: 1207
 */
export function openPatrolRoute() {
    return OpenPatrolRoute();
}
/**
 * No comment provided
 *
 * Hash: 0xE8854A4326B9E12B | Since: 1207
 */
export function openSequence() {
    return OpenSequenceTask();
}
/**
 * No comment provided
 *
 * Hash: 0x295E3CCEC879CCD7 | Since: 1207
 */
export function pedHasUseScenario(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return PedHasUseScenarioTask(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x748040460F8DF5DC | Since: 1207
 */
export function playAnimOnRunningScenario(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return PlayAnimOnRunningScenario(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x77A1EEC547E7FCF1 | Since: 1207
 */
export function playEntityScriptedAnim(entity, args) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    PlayEntityScriptedAnim(_entity, args);
}
/**
 * lookIntensity: see SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT
 *
 * exitAnimation: LOOK_RETURN_GENERIC = 1,
 * LOOK_RETURN_DISMISSIVE = 2,
 * LOOK_RETURN_RELIEVED = 3
 *
 * Hash: 0xE7FA07624574B79A | Since: 1207
 */
export function reactLookAt(ped, targetPed, lookIntensity, exitAnimation, duration, targetPed2) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    const _targetPed2 = targetPed2 instanceof IPed ? targetPed2.handle() : targetPed2;
    ReactLookAt(_ped, _targetPed, lookIntensity, exitAnimation, duration, 0, _targetPed2, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x541E5B41DCA45828 | Since: 1207
 */
export function reactLookAtEnd(ped, exitAnimation) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ReactLookAtEnd(_ped, exitAnimation, false);
}
/**
 * No comment provided
 *
 * Hash: 0xDB6708C0B46F56D8 | Since: 1207
 */
export function removeAllCoverBlockingAreas() {
    RemoveAllCoverBlockingAreas();
}
/**
 * No comment provided
 *
 * Hash: 0xAE287C923D891715 | Since: 1207
 */
export function removeCoverPoint(coverpoint) {
    RemoveCoverPoint(coverpoint);
}
/**
 * No comment provided
 *
 * Hash: 0xFF1B8B4AA1C25DC8 | Since: 1207
 */
export function removeWaypointRecording() {
    return RemoveWaypointRecording();
}
/**
 * No comment provided
 *
 * Hash: 0xD01015C7316AE176 | Since: 1207
 */
export function requestMoveNetworkStateTransition(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return RequestTaskMoveNetworkStateTransition(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9EEFB62EB27B5792 | Since: 1207
 */
export function requestWaypointRecording() {
    return RequestWaypointRecording();
}
/**
 * No comment provided
 *
 * Hash: 0xDD902D0349AFAD3A | Since: 1207
 */
export function resetScenarioGroupsEnabled() {
    ResetScenarioGroupsEnabled();
}
/**
 * No comment provided
 *
 * Hash: 0x0D40EE2A7F2B2D6D | Since: 1207
 */
export function resetScenarioTypesEnabled() {
    ResetScenarioTypesEnabled();
}
/**
 * No comment provided
 *
 * Hash: 0x87B66D77D545DB66 | Since: 1207
 */
export function setAnimFilter(entity, priority, secondary) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return SetAnimFilter(_entity, priority, secondary);
}
/**
 * No comment provided
 *
 * Hash: 0x032D49C5E359C847 | Since: 1207
 */
export function setAnimRate() {
    SetAnimRate(undefined, 0, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0xE5B302114D8162EE | Since: 1207
 */
export function setDrivebyTarget(shootingPed, targetPed, targetVehicle, pos) {
    const _shootingPed = shootingPed instanceof IPed ? shootingPed.handle() : shootingPed;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    const _targetVehicle = targetVehicle instanceof IVehicle ? targetVehicle.handle() : targetVehicle;
    SetDrivebyTaskTarget(_shootingPed, _targetPed, _targetVehicle, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x5C9B84BD7D31D908 | Since: 1207
 */
export function setDriveCruiseSpeed(driver, cruiseSpeed) {
    const _driver = driver instanceof IPed ? driver.handle() : driver;
    SetDriveTaskCruiseSpeed(_driver, cruiseSpeed);
}
/**
 * Not implemented.
 *
 * Hash: 0x404A5AA9B9F0B746 | Since: 1207
 */
export function setDriveMaxCruiseSpeed(ped, maxCruiseSpeed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetDriveTaskMaxCruiseSpeed(_ped, maxCruiseSpeed);
}
/**
 * No comment provided
 *
 * Hash: 0x295F03DC97BEEBC1 | Since: 1207
 */
export function setEnableSpeedRestrainForWaypointRecordingLeader() {
    SetEnableSpeedRestrainForWaypointRecordingLeader(undefined, undefined);
}
/**
 * clipset: CLIPSET@MECH_HOGTIE@HUMAN@BREAKOUT_MG@GROUND, CLIPSET@MECH_HOGTIE@HUMAN@BREAKOUT_MG@SHOULDER, CLIPSET@MECH_HOGTIE@HUMAN@BREAKOUT_MG@MOUNT
 * clipset can also be 0
 *
 * Hash: 0x1BF9D36A5EAFFBAE | Since: 1207
 */
export function setEnhancedBreakFree(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetEnhancedBreakFree(_ped, false);
}
/**
 * Makes the ped ragdoll like when falling from a great height
 *
 * Hash: 0x8C825BDC7741D37C | Since: 1207
 */
export function setHighFall(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetHighFallTask(_ped, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x1E982AC8716912C5 | Since: 1207
 */
export function setPedDesiredMoveBlendRatio(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedDesiredMoveBlendRatio(_ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x4455517B28441E60 | Since: 1207
 */
export function setPedPathAvoidFire(ped, avoidFire) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathAvoidFire(_ped, avoidFire);
}
/**
 * No comment provided
 *
 * Hash: 0xE361C5C71C431A4F | Since: 1207
 */
export function setPedPathCanDropFromHeight(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathCanDropFromHeight(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x8E06A6FE76C9EFF4 | Since: 1207
 */
export function setPedPathCanUseClimbovers(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathCanUseClimbovers(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x77A5B103C87F476E | Since: 1207
 */
export function setPedPathCanUseLadders(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathCanUseLadders(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x88E32DB8C1A4AA4B | Since: 1207
 */
export function setPedPathClimbCostModifier(ped, modifier) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathClimbCostModifier(_ped, modifier);
}
/**
 * No comment provided
 *
 * Hash: 0xE8C296B75EACC357 | Since: 1207
 */
export function setPedPathDeepSnowCostModifier(ped, modifier) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathDeepSnowCostModifier(_ped, modifier);
}
/**
 * No comment provided
 *
 * Hash: 0x3AD8EFF9703BE657 | Since: 1207
 */
export function setPedPathFoliageCostModifier(ped, modifier) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathFoliageCostModifier(_ped, modifier);
}
/**
 * No comment provided
 *
 * Hash: 0xF35425A4204367EC | Since: 1207
 */
export function setPedPathMayEnterWater(ped, mayEnterWater) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathMayEnterWater(_ped, mayEnterWater);
}
/**
 * No comment provided
 *
 * Hash: 0x38FE1EC73743793C | Since: 1207
 */
export function setPedPathPreferToAvoidWater(ped, avoidWater) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathPreferToAvoidWater(_ped, avoidWater, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xED98E10B0AFCE4B4 | Since: 1207
 */
export function setPedWaypointRouteOffset(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetPedWaypointRouteOffset(_ped, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x02C8E5B49848664E | Since: 1207
 */
export function setScenarioGroupEnabled(toggle) {
    return SetScenarioGroupEnabled(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xEB47EC4E34FB7EE1 | Since: 1207
 */
export function setScenarioTypeEnabled(toggle) {
    return SetScenarioTypeEnabled(toggle);
}
/**
 * repeatMode: 0 = REPEAT_NOT; 1 = REPEAT_FOREVER
 *
 * Hash: 0x58C70CF3A41E4AE7 | Since: 1207
 */
export function setSequenceToRepeat(taskSequenceId, repeatMode) {
    SetSequenceToRepeat(taskSequenceId, repeatMode);
}
/**
 * No comment provided
 *
 * Hash: 0xB0A6CFD2C69C1088 | Since: 1207
 */
export function setMoveNetworkSignalBool(ped, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetTaskMoveNetworkSignalBool(_ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0xD5BB4025AE449A4E | Since: 1207
 */
export function setMoveNetworkSignalFloat(ped, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetTaskMoveNetworkSignalFloat(_ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0x545BF19F86E80F11 | Since: 1207
 */
export function setTeamCarriableEntity() {
    SetTeamCarriableEntity(undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB5C51DD544F14F58 | Since: 1207
 */
export function setUpSpeedRestrainInformationForPlayerFollower() {
    SetUpSpeedRestrainInformationForPlayerFollower(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * Params: p3 = 0, 1; p5 = 0.0f, -1.0f
 * https://github.com/femga/rdr3_discoveries/tree/master/tasks/TASK_ITEM_INTERACTION
 *
 * Hash: 0xAE72E7DF013AAA61 | Since: 1207
 */
export function startItemInteraction(ped, itemHash, interactionAnimHash, flag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof itemHash === 'string')
        itemHash = GetHashKey(itemHash);
    if (typeof interactionAnimHash === 'string')
        interactionAnimHash = GetHashKey(interactionAnimHash);
    StartTaskItemInteraction(_ped, itemHash, interactionAnimHash, 0, flag, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xEE08C992D238C5D1 | Since: 1207
 */
export function stopAnimPlayback(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    StopAnimPlayback(_ped, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0x97FF36A1D40EA00A | Since: 1207
 */
export function stopAnim(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return StopAnimTask(_ped, 0);
}
/**
 * Makes the specified ped achieve the specified heading.
 *
 * pedHandle: The handle of the ped to assign the task to.
 * heading: The desired heading.
 * timeout: The time, in milliseconds, to allow the task to complete. If the task times out, it is canceled, and the ped will stay at the heading it managed to reach in the time.
 *
 * Hash: 0x93B93A37987F1F3D | Since: 1207
 */
export function achieveHeading(ped, heading, timeout) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskAchieveHeading(_ped, heading, timeout);
}
/**
 * No comment provided
 *
 * Hash: 0x4AF1D73861212F52 | Since: 1207
 */
export function aimAtCoord(ped, pos, time) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskAimAtCoord(_ped, pos.x, pos.y, pos.z, time, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCF7569BD0FB480A0 | Since: 1207
 */
export function aimAtEntity(ped, targetEntity, time) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetEntity = targetEntity instanceof IEntity ? targetEntity.handle() : targetEntity;
    TaskAimAtEntity(_ped, _targetEntity, time, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6671F3EEC681BDA1 | Since: 1207
 */
export function aimGunAtCoord(ped, pos, time) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskAimGunAtCoord(_ped, pos.x, pos.y, pos.z, time, false, false);
}
/**
 * duration: the amount of time in milliseconds to do the task.  -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped
 *
 * Hash: 0x9B53BB6E8943AF53 | Since: 1207
 */
export function aimGunAtEntity(ped, targetEntity, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetEntity = targetEntity instanceof IEntity ? targetEntity.handle() : targetEntity;
    TaskAimGunAtEntity(_ped, _targetEntity, duration, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x4B39D8F9D0FE7749 | Since: 1207
 */
export function ambientAnimalHunt(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskAmbientAnimalHunt(_ped, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x37C13863ABA1B4A3 | Since: 1207
 */
export function ambientAnimalStalk(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskAmbientAnimalStalk(_ped, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x979D93372FC8C565 | Since: 1207
 */
export function animalAlerted(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskAnimalAlerted(_ped, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA899B61C66F09134 | Since: 1207
 */
export function animalFlee(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskAnimalFlee(_ped, _targetPed, undefined);
}
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/tasks/TASK_ANIMAL_INTERACTION
 *
 * Hash: 0xCD181A959CFDD7F4 | Since: 1207
 */
export function animalInteraction(ped, targetPed, interactionType, interactionModel, skipIdleAnimationClip) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    if (typeof interactionType === 'string')
        interactionType = GetHashKey(interactionType);
    if (typeof interactionModel === 'string')
        interactionModel = GetHashKey(interactionModel);
    TaskAnimalInteraction(_ped, _targetPed, interactionType, interactionModel, skipIdleAnimationClip);
}
/**
 * No comment provided
 *
 * Hash: 0x21FDF9A25CFE1CE5 | Since: 1207
 */
export function animalUnalerted(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskAnimalUnalerted(_ped, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8C038A39C4A4B6D6 | Since: 1207
 */
export function animalWrithe(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskAnimalWrithe(_ped, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF3B9A78A178572B1 | Since: 1207
 */
export function arrestPed(ped, target) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IPed ? target.handle() : target;
    TaskArrestPed(_ped, _target);
}
/**
 * No comment provided
 *
 * Hash: 0x83BFC1F836B2F3F2 | Since: 1207
 */
export function bark(ped, barkAtTarget, mood) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _barkAtTarget = barkAtTarget instanceof IPed ? barkAtTarget.handle() : barkAtTarget;
    if (typeof mood === 'string')
        mood = GetHashKey(mood);
    TaskBark(_ped, _barkAtTarget, mood);
}
/**
 * No comment provided
 *
 * Hash: 0x15C86013127CE63F | Since: 1207
 */
export function boatMission(pedDriver, boat, pos, maxSpeed, drivingStyle) {
    const _pedDriver = pedDriver instanceof IPed ? pedDriver.handle() : pedDriver;
    const _boat = boat instanceof IVehicle ? boat.handle() : boat;
    TaskBoatMission(_pedDriver, _boat, undefined, undefined, pos.x, pos.y, pos.z, undefined, maxSpeed, drivingStyle, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBB28D1BC9EA8A6A5 | Since: 1207
 */
export function breakVehicleDoorLock(ped, vehicle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskBreakVehicleDoorLock(_ped, _vehicle);
}
/**
 * carriableSlot:
 * 7 > Back of a horse
 * 6 > Right side of a horse
 * 5 > Left side of a horse
 * flags:
 * 512: enables the prompt being the name of the item when using a generic item
 *
 * Hash: 0xF0B4F759F35CC7F5 | Since: 1207
 */
export function carriable(entity, carryConfig, carrier, carriableSlot, flags) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _carrier = carrier instanceof IPed ? carrier.handle() : carrier;
    if (typeof carryConfig === 'string')
        carryConfig = GetHashKey(carryConfig);
    TaskCarriable(_entity, carryConfig, _carrier, carriableSlot, flags);
}
/**
 * No comment provided
 *
 * Hash: 0x95A6C46A31D1917D | Since: 1207
 */
export function clearDefensiveArea(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskClearDefensiveArea(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x0F804F1DB19B9689 | Since: 1207
 */
export function clearLookAt(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskClearLookAt(_ped);
}
/**
 * Climbs or vaults the nearest thing.
 *
 * Hash: 0x89D9FCC2435112F1 | Since: 1207
 */
export function climb(ped, unused) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskClimb(_ped, unused);
}
/**
 * No comment provided
 *
 * Hash: 0xB6C987F9285A3814 | Since: 1207
 */
export function climbLadder(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskClimbLadder(_ped, 0, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xEE3AA414CF99F368 | Since: 1207
 */
export function combatAnimalChargePed(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskCombatAnimalChargePed(_ped, _targetPed, false, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF960F3D57B660E96 | Since: 1207
 */
export function combatAnimalWarn(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskCombatAnimalWarn(_ped, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8182B561A29BD597 | Since: 1207
 */
export function combatHatedTargets(ped, radius) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskCombatHatedTargets(_ped, radius);
}
/**
 * Despite its name, it only attacks ONE hated target. The one closest hated target.
 *
 * Hash: 0x7BF835BB9E2698C8 | Since: 1207
 */
export function combatHatedTargetsAroundPed(ped, radius, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskCombatHatedTargetsAroundPed(_ped, radius, flags, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2BBA30B854534A0C | Since: 1207
 */
export function combatHatedTargetsAroundPedTimed(ped, radius, time, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskCombatHatedTargetsAroundPedTimed(_ped, radius, time, flags);
}
/**
 * Despite its name, it only attacks ONE hated target. The one closest to the specified position.
 *
 * Hash: 0x4CF5F55DAC3280A0 | Since: 1207
 */
export function combatHatedTargetsInArea(ped, pos, radius, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskCombatHatedTargetsInArea(_ped, pos.x, pos.y, pos.z, radius, flags, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB5BC69D9C4060BC3 | Since: 1207
 */
export function combatHatedTargetsNoLosTest(ped, radius) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskCombatHatedTargetsNoLosTest(_ped, radius);
}
/**
 * No comment provided
 *
 * Hash: 0xF166E48407BAC484 | Since: 1207
 */
export function combatPed(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskCombatPed(_ped, _targetPed, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x944F30DCB7096BDE | Since: 1207
 */
export function combatPedTimed(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskCombatPedTimed(_ped, _targetPed, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE017CF6E2527FE4F | Since: 1207
 */
export function companionAmbient(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskCompanionAmbient(_ped, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3A2A2071DF5CC569 | Since: 1207
 */
export function confront(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    return TaskConfront(_ped, _targetPed, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x3EB1FE9E8E908E15 | Since: 1207
 */
export function cower(ped, duration, pedToCowerFrom) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _pedToCowerFrom = pedToCowerFrom instanceof IPed ? pedToCowerFrom.handle() : pedToCowerFrom;
    return TaskCower(_ped, duration, _pedToCowerFrom);
}
/**
 * flags: See TASK_ENTER_VEHICLE
 *
 * Hash: 0x0A11F3BDEC03ED5F | Since: 1207
 */
export function disembarkNearestTrainCarriage(ped, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskDisembarkNearestTrainCarriage(_ped, 0, flags);
}
/**
 * Dismounts the ped from the animal it's mounted on. taskFlag affects what side the rider gets off. p2-p5 are almost always 0.
 * flags: See TASK_ENTER_VEHICLE
 *
 * Hash: 0x48E92D3DDE23C23A | Since: 1207
 */
export function dismountAnimal(rider, taskFlag, targetPed) {
    const _rider = rider instanceof IPed ? rider.handle() : rider;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskDismountAnimal(_rider, taskFlag, undefined, undefined, undefined, _targetPed);
}
/**
 * No comment provided
 *
 * Hash: 0x2F8AF0E82773A171 | Since: 1207
 */
export function driveBy(driverPed, targetPed, targetVehicle, targetX, targetY, targetZ, distanceToShoot, pedAccuracy, firingPattern) {
    const _driverPed = driverPed instanceof IPed ? driverPed.handle() : driverPed;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    const _targetVehicle = targetVehicle instanceof IVehicle ? targetVehicle.handle() : targetVehicle;
    if (typeof firingPattern === 'string')
        firingPattern = GetHashKey(firingPattern);
    TaskDriveBy(_driverPed, _targetPed, _targetVehicle, targetX, targetY, targetZ, distanceToShoot, pedAccuracy, false, firingPattern);
}
/**
 * No comment provided
 *
 * Hash: 0xA14B5FBF986BAC23 | Since: 1207
 */
export function duck(ped, time) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskDuck(_ped, time);
}
/**
 * Params: p4 either 0.2f, 0.25f, 0.31f, 0.4f
 *
 * Hash: 0x5D5B0D5BC3626E5A | Since: 1207
 */
export function duel(ped, entity, vPosOpponentX, vPosOpponentY, vPosOpponentZ, fOpponentHead) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskDuel(_ped, undefined, 0, _entity, 0, 0, vPosOpponentX, vPosOpponentY, vPosOpponentZ, fOpponentHead, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x17CA98707B15926A | Since: 1207
 */
export function dumpCarriableFromParent(ped, ped2, entity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskDumpCarriableFromParent(_ped, _ped2, _entity);
}
/**
 * No comment provided
 *
 * Hash: 0xBD7949BD07299672 | Since: 1207
 */
export function eat(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskEat(_ped, undefined, undefined);
}
/**
 * flags:
 * MOVE_WHILST_WAITING_FOR_PATH = (1 << 0),
 * DO_NOT_STAND_STILL_AT_END_OF_PATH = (1 << 1),
 * SKIP_NAVIGATION = (1 << 2),
 * TEASF_AUTO_START_ANIM_SCENE = (1 << 3),
 * FORCE_STAND_STILL_AT_END_OF_PATH = (1 << 6),
 * ENTER_ANIM_SCENE_DONT_FOLLOW_NAVMESH = (1 << 7)
 *
 * Hash: 0xC2329B0206426644 | Since: 1207
 */
export function enterAnimScene(ped, animScene, enterSpeed, bAutoStart, flag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskEnterAnimScene(_ped, animScene, enterSpeed, bAutoStart, flag, 0, 0);
}
/**
 * flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eEnterExitVehicleFlags
 *
 * Hash: 0xC20E50AA46D09CA8 | Since: 1207
 */
export function enterVehicle(ped, vehicle, timeout, seat, speed, flag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskEnterVehicle(_ped, _vehicle, timeout, seat, speed, flag, undefined);
}
/**
 * `Params: p2 is returned by BUILTIN::SHIFT_LEFT`
 *
 * Hash: 0x5F22926E1BCE9B08 | Since: 1207
 */
export function evasiveAnim(ped1, ped2) {
    const _ped1 = ped1 instanceof IPed ? ped1.handle() : ped1;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    TaskEvasiveAnim(_ped1, _ped2, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x6F1C49F275BD25B3 | Since: 1207
 */
export function everyoneLeaveVehicleInOrder(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskEveryoneLeaveVehicleInOrder(_vehicle, false);
}
/**
 * Adds a new point to the current point route. Call TASK_FLUSH_ROUTE before the first call to this. Call TASK_FOLLOW_POINT_ROUTE to make the Ped go the route.
 *
 * A maximum of 8 points can be added.
 *
 * Hash: 0x1E7889778264843A | Since: 1207
 */
export function extendRoute(pos) {
    TaskExtendRoute(pos.x, pos.y, pos.z);
}
/**
 * Params: p5 = some flag?, p6 = -1.0f, p8 = 0 in R* Scripts
 * fleeStyle: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eFleeStyle
 *
 * Hash: 0x58428248BF4B64E4 | Since: 1207
 */
export function fleeCoord(ped, pos, fleeStyle, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskFleeCoord(_ped, pos.x, pos.y, pos.z, fleeStyle, 0, 0, duration, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x390E0B697D25EAF5 | Since: 1207
 */
export function fleeCoordVia() {
    TaskFleeCoordVia(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * Params: p4 = -1.0f, p5 = -1, p6 = 0 in R* Scripts
 * fleeStyle: see TASK_FLEE_COORD
 *
 * Hash: 0xFD45175A6DFD7CE9 | Since: 1207
 */
export function fleePed(ped, fleeFromTarget, fleeStyle, flag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _fleeFromTarget = fleeFromTarget instanceof IPed ? fleeFromTarget.handle() : fleeFromTarget;
    TaskFleePed(_ped, _fleeFromTarget, fleeStyle, flag, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x5802E0F910E4CF1D | Since: 1207
 */
export function fleePedVia() {
    TaskFleePedVia(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * Clears the current point route. Call this before TASK_EXTEND_ROUTE and TASK_FOLLOW_POINT_ROUTE.
 *
 * Hash: 0x841142A1376E9006 | Since: 1207
 */
export function flushRoute() {
    TaskFlushRoute();
}
/**
 * No comment provided
 *
 * Hash: 0x72997893BFB8ECCC | Since: 1207
 */
export function flyingCircle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskFlyingCircle(_ped, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE86A537B5A3C297C | Since: 1207
 */
export function flyAway(ped, fleeFromTarget) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _fleeFromTarget = fleeFromTarget instanceof IPed ? fleeFromTarget.handle() : fleeFromTarget;
    TaskFlyAway(_ped, _fleeFromTarget);
}
/**
 * No comment provided
 *
 * Hash: 0xD6CFC2D59DA72042 | Since: 1207
 */
export function flyToCoord(ped, travelMbr, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskFlyToCoord(_ped, travelMbr, pos.x, pos.y, pos.z, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x489FFCCCE7392B55 | Since: 1207
 */
export function followAndConverseWithPed(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskFollowAndConverseWithPed(_ped, _targetPed, undefined, undefined, 0, 0, 0, undefined, undefined, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x4D2B787BAE9AB760 | Since: 1207
 */
export function followEntityAlongWaypointRecordingAtOffset(ped0, ped1) {
    const _ped0 = ped0 instanceof IPed ? ped0.handle() : ped0;
    const _ped1 = ped1 instanceof IPed ? ped1.handle() : ped1;
    return TaskFollowEntityAlongWaypointRecordingAtOffset(_ped0, _ped1, 0, 0, 0, 0, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0x2D532EAA142CF83F | Since: 1207
 */
export function followEntityWhileAimingAtEntity(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskFollowEntityWhileAimingAtEntity(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * If no timeout, set timeout to -1.
 *
 * Hash: 0x15D3A79D4E44B913 | Since: 1207
 */
export function followNavMeshToCoord(ped, pos, speedMultiplier, timeout, stoppingRange, flags, heading) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskFollowNavMeshToCoord(_ped, pos.x, pos.y, pos.z, speedMultiplier, timeout, stoppingRange, flags, heading);
}
/**
 * No comment provided
 *
 * Hash: 0x17F58B88D085DBAC | Since: 1207
 */
export function followNavMeshToCoordAdvanced(ped, pos, speedMultiplier, timeout, stoppingRange, flags, entity, unk) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskFollowNavMeshToCoordAdvanced(_ped, pos.x, pos.y, pos.z, speedMultiplier, timeout, stoppingRange, flags, 0, 0, 0, _entity, unk);
}
/**
 * No comment provided
 *
 * Hash: 0x1B1475414E70DD8E | Since: 1207
 */
export function followPavementToCoord(ped, args) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskFollowPavementToCoord(_ped, args);
}
/**
 * No comment provided
 *
 * Hash: 0x0E14C5550DC3CD1D | Since: 1207
 */
export function followPointRoute(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskFollowPointRoute(_ped, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2E3676282C18A692 | Since: 1207
 */
export function followToOffsetOfCoord(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskFollowToOffsetOfCoord(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x304AE42E357B8C7E | Since: 1207
 */
export function followToOffsetOfEntity(ped, entity, offsetX, offsetY, offsetZ, movementSpeed, timeout, stoppingRange, persistFollowing, walkOnly) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskFollowToOffsetOfEntity(_ped, _entity, offsetX, offsetY, offsetZ, movementSpeed, timeout, stoppingRange, persistFollowing, false, walkOnly, false, false, false);
}
/**
 * Orders ped to follow a waypoint recording with control over start/end node indices, optional patrol (back-and-forth) behavior,aiming stance, and total traversal duration
 * NOTES:The recording must be requested and loaded using `REQUEST_WAYPOINT_RECORDING`.
 * The indices (startIndex, endIndex) restrict which part of the route is used.
 * patrol controls whether the ped returns to the start after reaching the end.
 * aimWeapon only affects stance — no firing occurs.
 * duration determines total task time before snapping to the end node
 * https://www.youtube.com/watch?v=RIsXDJSmeGU
 *
 * Hash: 0x0759591819534F7B | Since: 1207
 */
export function followWaypointRecording(ped, startIndex, flag, endIndex, patrol, aimWeapon, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskFollowWaypointRecording(_ped, startIndex, flag, endIndex, patrol, aimWeapon, duration);
}
/**
 * No comment provided
 *
 * Hash: 0x0CFC13EBC19BCA52 | Since: 1207
 */
export function followWaypointRecordingAdvanced(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskFollowWaypointRecordingAdvanced(_ped, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBE9B0520BD7C445B | Since: 1207
 */
export function followWaypointRecordingAtOffset(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskFollowWaypointRecordingAtOffset(_ped, 0, 0, 0, 0, false);
}
/**
 * Force a ped that is already attacking to aim directly at the specified world coordinates
 *
 * Hash: 0x41323F4E0C4AE94B | Since: 1207
 */
export function forceAimAtCoord(ped, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x41323F4E0C4AE94B', _ped, pos.x, pos.y, pos.z, 0, false, false);
}
/**
 * motionStateHash: see FORCE_PED_MOTION_STATE
 *
 * Hash: 0x4F056E1AFFEF17AB | Since: 1207
 */
export function forceMotionState(ped, motionStateHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof motionStateHash === 'string')
        motionStateHash = GetHashKey(motionStateHash);
    TaskForceMotionState(_ped, motionStateHash, false);
}
/**
 * ped = Ped you want to perform this task.
 * target = the Entity they should aim at.
 * distanceToStopAt = distance from the target, where the ped should stop to aim.
 * StartAimingDist = distance where the ped should start to aim.
 *
 * Hash: 0xA9DA48FAB8A76C12 | Since: 1207
 */
export function gotoEntityAiming(ped, target, distanceToStopAt, StartAimingDist) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IEntity ? target.handle() : target;
    TaskGotoEntityAiming(_ped, _target, distanceToStopAt, StartAimingDist);
}
/**
 * No comment provided
 *
 * Hash: 0xE39B4FF4FDEBDE27 | Since: 1207
 */
export function gotoEntityOffset(ped, entity, pos, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskGotoEntityOffset(_ped, _entity, undefined, pos.x, pos.y, pos.z, duration);
}
/**
 * No comment provided
 *
 * Hash: 0x338E7EF52B6095A9 | Since: 1207
 */
export function gotoEntityOffsetXy(ped, entity, duration, targetRadius, xOffset, yOffset, moveBlendRatio, offsetFlags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskGotoEntityOffsetXy(_ped, _entity, duration, targetRadius, xOffset, yOffset, moveBlendRatio, offsetFlags);
}
/**
 * No comment provided
 *
 * Hash: 0xFA6DA9D151769392 | Since: 1311
 */
export function gotoEntityOffsetXyz(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGotoEntityOffsetXyz(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x41B0832CA96B5351 | Since: 1207
 */
export function gotoEntityOffsetXyzAiming(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGotoEntityOffsetXyzAiming(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x901BD69984400F62 | Since: 1207
 */
export function gotoEntityOffsetXyAiming(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGotoEntityOffsetXyAiming(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * Tells the ped to go to a coord, without using the navemesh. if timeBeforeTeleport is -1 the ped will never warp, p8 is always 0 or 1 still unknown
 *
 * Hash: 0xD76B57B44F1E6F8B | Since: 1207
 */
export function goStraightToCoord(ped, pos, moveBlendSpeedY, timeBeforeTeleport, finalHeading, targetRadius) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGoStraightToCoord(_ped, pos.x, pos.y, pos.z, moveBlendSpeedY, timeBeforeTeleport, finalHeading, targetRadius, 0);
}
/**
 * Tells the ped to go to an offset coord from an entity, without using the navmesh. if timeBeforeTeleport is -1 the ped will never warp, p7 is 1 or 0 still unknown param
 *
 * Hash: 0x61E360B7E040D12E | Since: 1207
 */
export function goStraightToCoordRelativeToEntity(ped, entity, xOffset, Yoffset, zOffset, moveBlendRatio, timeBeforeTeleport) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskGoStraightToCoordRelativeToEntity(_ped, _entity, xOffset, Yoffset, zOffset, moveBlendRatio, timeBeforeTeleport, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xA55547801EB331FC | Since: 1207
 */
export function goToCoordAndAimAtHatedEntitiesNearCoord(ped, goToLocationX, goToLocationY, goToLocationZ, focusLocationX, focusLocationY, focusLocationZ, speed, shootAtEnemies, distanceToStopAt, noRoadsDistance, unkTrue, unkFlag, aimingFlag, firingPattern) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof firingPattern === 'string')
        firingPattern = GetHashKey(firingPattern);
    TaskGoToCoordAndAimAtHatedEntitiesNearCoord(_ped, goToLocationX, goToLocationY, goToLocationZ, focusLocationX, focusLocationY, focusLocationZ, speed, shootAtEnemies, distanceToStopAt, noRoadsDistance, unkTrue, unkFlag, aimingFlag, firingPattern);
}
/**
 * No comment provided
 *
 * Hash: 0x87BD711FC31EA273 | Since: 1207
 */
export function goToCoordAndAimAtHatedEntitiesNearCoordUsingCombatStyle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGoToCoordAndAimAtHatedEntitiesNearCoordUsingCombatStyle(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5BC448CB78FA3E88 | Since: 1207
 */
export function goToCoordAnyMeans(ped, pos, speed, entity, walkingStyle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskGoToCoordAnyMeans(_ped, pos.x, pos.y, pos.z, speed, _entity, false, walkingStyle, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x1DD45F9ECFDB1BC9 | Since: 1207
 */
export function goToCoordAnyMeansExtraParams(ped, pos, speed, walkingStyle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGoToCoordAnyMeansExtraParams(_ped, pos.x, pos.y, pos.z, speed, undefined, false, walkingStyle, 0, undefined, undefined, undefined, undefined);
}
/**
 * This native allows to control the cruise speed of where you want the ped to go
 * 3rd param might be the entity ped is in? like boat or wagon, 12th param might be the cruiseSpeed of the entity ped is in?
 * EXAMPLE: TaskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(PlayerPedId(), vector3(x, y, z), 3.0, entity, 1, 0, -1082130432, 0, 101004800, 520, 3.0, 1082130432, 0)
 *
 * Hash: 0xB8ECD61F531A7B02 | Since: 1207
 */
export function goToCoordAnyMeansExtraParamsWithCruiseSpeed(ped, cruiseSpeed, entity, cruiseSpeed_2) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return TaskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(_ped, cruiseSpeed, _entity, 0, 0, undefined, undefined, undefined, undefined, undefined, undefined, cruiseSpeed_2, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x11315AB3385B8AC0 | Since: 1207
 */
export function goToCoordWhileAimingAtCoord(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGoToCoordWhileAimingAtCoord(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x639C0425A0B4E77E | Since: 1207
 */
export function goToCoordWhileAimingAtCoordUsingCombatStyle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGoToCoordWhileAimingAtCoordUsingCombatStyle(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB2A16444EAD9AE47 | Since: 1207
 */
export function goToCoordWhileAimingAtEntity(ped1, pos, ped2, firingPattern) {
    const _ped1 = ped1 instanceof IPed ? ped1.handle() : ped1;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    if (typeof firingPattern === 'string')
        firingPattern = GetHashKey(firingPattern);
    TaskGoToCoordWhileAimingAtEntity(_ped1, pos.x, pos.y, pos.z, _ped2, 0, undefined, 0, 0, undefined, undefined, undefined, firingPattern, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x78426D0982D083C9 | Since: 1207
 */
export function goToCoordWhileAimingAtEntityUsingCombatStyle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGoToCoordWhileAimingAtEntityUsingCombatStyle(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6A071245EB0D1882 | Since: 1207
 */
export function goToEntity(ped, target, duration, distance, speed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IEntity ? target.handle() : target;
    TaskGoToEntity(_ped, _target, duration, distance, speed, 0, 0);
}
/**
 * shootatEntity:
 * If true, peds will shoot at Entity till it is dead.
 * If false, peds will just walk till they reach the entity and will cease shooting.
 *
 * Hash: 0x97465886D35210E9 | Since: 1207
 */
export function goToEntityWhileAimingAtEntity(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGoToEntityWhileAimingAtEntity(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCEF0117C233026AD | Since: 1207
 */
export function goToEntityWhileAimingAtEntityUsingCombatStyle(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGoToEntityWhileAimingAtEntityUsingCombatStyle(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * enum eWhistleType
 * {
 * WHISTLE_MAIN,
 * WHISTLE_SECONDARY,
 * WHISTLE_DOUBLE,
 * WHISTLE_URGENT,
 * WHISTLE_LONG
 * };
 *
 * Hash: 0xBAD6545608CECA6E | Since: 1207
 */
export function goToWhistle(ped, p1, whistleType) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _p1 = p1 instanceof IPed ? p1.handle() : p1;
    TaskGoToWhistle(_ped, _p1, whistleType);
}
/**
 * grappleStyle: AR_GRAPPLE_MOUNT_STANDING_FROM_FRONT, AR_GRAPPLE_MOUNT_STANDING_FROM_RIGHT, AR_GRAPPLE_MOUNT_STANDING_FROM_BACK, AR_GRAPPLE_MOUNT_STANDING_FROM_LEFT, AR_GRAPPLE_MOUNT_FROM_FRONT, AR_WOLF_EXECUTION_ENTER_FROM_BACK, AR_GRAPPLE_DRAG_FRONT_ON_ASS, AR_GRAPPLE_FRONT_FROM_LEFT_FAR, AR_BEAR_CHALLENGE_FRONT, AR_GRAPPLE_FRONT_FROM_FRONT, AR_GRAPPLE_MOUNT_FACEUP_FROM_FRONT
 *
 * Hash: 0x779A2FFACEFAEA7B | Since: 1207
 */
export function grapple(ped, targetPed, grappleStyle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    if (typeof grappleStyle === 'string')
        grappleStyle = GetHashKey(grappleStyle);
    return TaskGrapple(_ped, _targetPed, grappleStyle, 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xB9FB242EACCAF30F | Since: 1207
 */
export function guard(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGuard(_ped, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD2A207EEBDF9889B | Since: 1207
 */
export function guardAssignedDefensiveArea(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGuardAssignedDefensiveArea(_ped, 0, 0, 0, 0, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4A58A47A72E3FCB4 | Since: 1207
 */
export function guardCurrentPosition(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGuardCurrentPosition(_ped, 0, 0, false);
}
/**
 * flags: 0 = HANDS_UP_NOTHING; 1 = HANDS_UP_STRAIGHT_TO_LOOP
 *
 * Hash: 0xF2EAB31979A7F910 | Since: 1207
 */
export function handsUp(ped, duration, facingPed, timeToFacePed, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _facingPed = facingPed instanceof IPed ? facingPed.handle() : facingPed;
    TaskHandsUp(_ped, duration, _facingPed, timeToFacePed, flags);
}
/**
 * No comment provided
 *
 * Hash: 0x9030AD4B6207BFE8 | Since: 1207
 */
export function hitchAnimal(ped, scenarioPoint, flag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskHitchAnimal(_ped, scenarioPoint, flag);
}
/**
 * No comment provided
 *
 * Hash: 0x6AFD8FE0D723328F | Since: 1207
 */
export function hogtieable(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskHogtieable(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x27829AFD3E03AC1A | Since: 1207
 */
export function hogtieTargetPed(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskHogtieTargetPed(_ped, _targetPed);
}
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/tasks/TASK_HORSE_ACTION
 * Params: p2, p3 are set to 0 in R* Scripts
 *
 * Hash: 0xA09CFD29100F06C3 | Since: 1207
 */
export function horseAction(ped, action, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskHorseAction(_ped, action, _targetPed, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5C8514540D27FBFB | Since: 1207
 */
export function investigate(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskInvestigate(_ped, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0AE4086104E067B1 | Since: 1207
 */
export function jump(ped, unused) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskJump(_ped, unused);
}
/**
 * Puts the ped into a knocked out state for a specified duration. If 'permanently' is set to true, the ped will remain knocked out until mainually reset. Duration in seconds.
 *
 * Hash: 0xF90427F00A495A28 | Since: 1207
 */
export function knockedOut(ped, permanently) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskKnockedOut(_ped, 0, permanently);
}
/**
 * koTimeOffset (seconds): offset applied to the knockout timer—positive delays recovery (longer KO), negative brings recovery sooner, 0.0 initializes with no extension (immediate baseline).
 * flags (bitmask): 1 = default variant (forwarded to the KO task ctor; R* commonly uses 1), 2 = sets an unk internal synced toggle for this task, 4 = sets another unk internal synced toggle.
 *
 * Hash: 0x42AC6401ABB8C7E5 | Since: 1207
 */
export function knockedOutAndHogtied(ped, koTimeOffset, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskKnockedOutAndHogtied(_ped, koTimeOffset, flags);
}
/**
 * No comment provided
 *
 * Hash: 0xC716EB2BD16370A3 | Since: 1207
 */
export function lassoPed(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskLassoPed(_ped, _targetPed);
}
/**
 * No comment provided
 *
 * Hash: 0xAA19711D33C6708C | Since: 1207
 */
export function leadAndConverse(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskLeadAndConverse(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9A7A4A54596FE09D | Since: 1207
 */
export function leadHorse(ped, horse) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _horse = horse instanceof IPed ? horse.handle() : horse;
    TaskLeadHorse(_ped, _horse);
}
/**
 * flags: See TASK_ENTER_VEHICLE
 *
 * Hash: 0x504D54DF3F6F2247 | Since: 1207
 */
export function leaveAnyVehicle(ped, taskFlag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskLeaveAnyVehicle(_ped, 0, taskFlag);
}
/**
 * flags: See TASK_ENTER_VEHICLE
 *
 * Hash: 0xD3DBCE61A490BE02 | Since: 1207
 */
export function leaveVehicle(ped, vehicle, flags, unkPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _unkPed = unkPed instanceof IPed ? unkPed.handle() : unkPed;
    TaskLeaveVehicle(_ped, _vehicle, flags, _unkPed);
}
/**
 * No comment provided
 *
 * Hash: 0x6FA46612594F7973 | Since: 1207
 */
export function lookAtCoord(ped, pos, duration, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskLookAtCoord(_ped, pos.x, pos.y, pos.z, duration, flags, 0, false);
}
/**
 * param3: duration in ms, use -1 to look forever
 * param4: using 2048 is fine
 * param5: using 3 is fine
 *
 * Hash: 0x69F4BE8C8CC4796C | Since: 1207
 */
export function lookAtEntity(ped, lookAtTarget, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _lookAtTarget = lookAtTarget instanceof IEntity ? lookAtTarget.handle() : lookAtTarget;
    TaskLookAtEntity(_ped, _lookAtTarget, duration, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x48FAE038401A2888 | Since: 1207
 */
export function lootEntity(ped, entity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskLootEntity(_ped, _entity);
}
/**
 * No comment provided
 *
 * Hash: 0xCF1501CBC4059412 | Since: 1207
 */
export function lootNearestEntity(ped, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskLootNearestEntity(_ped, pos.x, pos.y, pos.z, 0, 0);
}
/**
 * Params: p2: AR_TAKEDOWN_FRONT, AR_EXECUTION_FRONT, 0 in R* Scripts
 *
 * Hash: 0x482C99D0B38D1B0A | Since: 1207
 */
export function melee(ped, targetPed, p2) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    if (typeof p2 === 'string')
        p2 = GetHashKey(p2);
    return TaskMelee(_ped, _targetPed, p2, undefined, undefined, 0, undefined, 0);
}
/**
 * timer: in ms, if it reaches 0 it will auto warp the ped on the horse
 * mountStyle: See TASK_ENTER_VEHICLE
 * Flags will still apply to mountStyle
 *
 * Hash: 0x92DB0739813C5186 | Since: 1207
 */
export function mountAnimal(ped, mount, timer, seatIndex, pedSpeed, mountStyle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    TaskMountAnimal(_ped, _mount, timer, seatIndex, pedSpeed, mountStyle, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4AA5AA97C65E4A2F | Since: 1207
 */
export function moveBeInFormation(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskMoveBeInFormation(_ped, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * Params: moveBlendRatio commonly 1.25f, p5 is always 0 in R* Scripts
 *
 * Hash: 0x79482C12482A860D | Since: 1207
 */
export function moveFollowRoadUsingNavmesh(ped, moveBlendRatio, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskMoveFollowRoadUsingNavmesh(_ped, moveBlendRatio, pos.x, pos.y, pos.z, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8AA1593AEC087A29 | Since: 1207
 */
export function moveInTraffic(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskMoveInTraffic(_ped, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x13DED0BC45600FE1 | Since: 1207
 */
export function moveInTrafficAwayFromEntity(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskMoveInTrafficAwayFromEntity(_ped, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDCA3A13F7A45338B | Since: 1207
 */
export function moveInTrafficToDestination(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskMoveInTrafficToDestination(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7B6A04F98BBAFB2C | Since: 1207
 */
export function moveNetworkAdvancedByNameWithInitParams(ped, taskData, pos, rot, flag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskMoveNetworkAdvancedByNameWithInitParams(_ped, taskData, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, 0, 0, 0, 0, flag, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xF92171093BCABED4 | Since: 1207
 */
export function moveNetworkAdvancedByNameWithInitParamsAttached(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskMoveNetworkAdvancedByNameWithInitParamsAttached(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2D537BA194896636 | Since: 1207
 */
export function moveNetworkByName(ped, multiplier, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskMoveNetworkByName(_ped, multiplier, false, flags);
}
/**
 * No comment provided
 *
 * Hash: 0x139805C2A67C4795 | Since: 1207
 */
export function moveNetworkByNameWithInitParams(ped, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskMoveNetworkByNameWithInitParams(_ped, 0, false, flags);
}
/**
 * No comment provided
 *
 * Hash: 0xBDA5DF49D080FE4E | Since: 1207
 */
export function patrol(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskPatrol(_ped, undefined, false, false);
}
/**
 * This tasks the ped to do nothing for the specified amount of milliseconds.
 * This is useful if you want to add a delay between tasks when using a sequence task.
 *
 * Hash: 0xE73A266DB0CA9042 | Since: 1207
 */
export function pause(ped, ms) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPause(_ped, ms);
}
/**
 * No comment provided
 *
 * Hash: 0xD04FE6765D990A06 | Since: 1207
 */
export function pedSlideToCoord(ped, pos, heading) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPedSlideToCoord(_ped, pos.x, pos.y, pos.z, heading, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x5ABA3986D90D8A3B | Since: 1207
 */
export function performSequence(ped, taskSequenceId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPerformSequence(_ped, taskSequenceId);
}
/**
 * No comment provided
 *
 * Hash: 0x89221B16730234F0 | Since: 1207
 */
export function performSequenceFromProgress(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPerformSequenceFromProgress(_ped, undefined, undefined, undefined);
}
/**
 * Old name: _TASK_PERFORM_SEQUENCE_2
 *
 * Hash: 0x4FC0AF869D6E309D | Since: 1207
 */
export function performSequenceLocally() {
    TaskPerformSequence2(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4391700CBD89C3D8 | Since: 1207
 */
export function persistentCharacter(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPersistentCharacter(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x502EC17B1BED4BFA | Since: 1207
 */
export function pickupCarriableEntity(ped, entity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskPickupCarriableEntity(_ped, _entity);
}
/**
 * No comment provided
 *
 * Hash: 0x55B0ECFD98596624 | Since: 1207
 */
export function pickUpWeapon(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPickUpWeapon(_ped, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC7F0B43DCDC57E3D | Since: 1207
 */
export function placeCarriedEntityAtCoord(ped, entity, pos, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskPlaceCarriedEntityAtCoord(_ped, _entity, pos.x, pos.y, pos.z, 0, flags);
}
/**
 * No comment provided
 *
 * Hash: 0x6D3D87C57B3D52C7 | Since: 1207
 */
export function placeCarriedEntityOnMount(ped, entity, mount) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    TaskPlaceCarriedEntityOnMount(_ped, _entity, _mount, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x965FEC691D55E9BF | Since: 1207
 */
export function plantBomb(ped, pos, heading) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPlantBomb(_ped, pos.x, pos.y, pos.z, heading);
}
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/animations
 *
 * flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eScriptedAnimFlags
 *
 * ikFlags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eIkControlFlags
 *
 * animFilters: https://pastebin.com/1sGhKVvS
 *
 * Hash: 0xEA47FE3719165B94 | Since: 1207
 */
export function playAnim(ped, speed, speedMultiplier, duration, flags, playbackRate, ikFlags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskPlayAnim(_ped, speed, speedMultiplier, duration, flags, playbackRate, false, ikFlags, false, false);
}
/**
 * flags: see TASK_PLAY_ANIM
 * ikFlags: see TASK_PLAY_ANIM
 *
 * Hash: 0x83CDB10EA29B370B | Since: 1207
 */
export function playAnimAdvanced(ped, pos, rot, speed, speedMultiplier, duration, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskPlayAnimAdvanced(_ped, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, speed, speedMultiplier, duration, flags, 0, 0, 0, 0);
}
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/animations/kit_emotes_list.lua
 * emote: https://alloc8or.re/rdr3/doc/enums/eEmote.txt
 *
 * enum eEmoteType
 * {
 * EMOTE_TYPE_INVALID = -1,
 * EMOTE_TYPE_REACT,
 * EMOTE_TYPE_ACTION,
 * EMOTE_TYPE_TAUNT,
 * EMOTE_TYPE_GREET,
 * EMOTE_TYPE_TWIRL_GUN,
 * EMOTE_TYPE_DANCE_FLOOR
 * };
 *
 * enum eEmotePlaybackMode
 * {
 * EMOTE_PM_INVALID = -1,
 * EMOTE_PM_UPPERBODY,
 * EMOTE_PM_UPPERBODY_LOOP,
 * EMOTE_PM_FULLBODY,
 * };
 *
 * Hash: 0xB31A277C1AC7B7FF | Since: 1207
 */
export function playEmoteWithHash(ped, emoteType, playbackMode, emote, isSecondaryTask, canBreakOut, disableEarlyOutAnimTag, ignoreInvalidMainTask, destroyProps) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof emote === 'string')
        emote = GetHashKey(emote);
    TaskPlayEmoteWithHash(_ped, emoteType, playbackMode, emote, isSecondaryTask, canBreakOut, disableEarlyOutAnimTag, ignoreInvalidMainTask, destroyProps);
}
/**
 * No comment provided
 *
 * Hash: 0xAD67214236AB1CFE | Since: 1207
 */
export function playUpperAnimFacingEntity(ped, entity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return TaskPlayUpperAnimFacingEntity(_ped, _entity, 0, 0, 0, 0, 0, false, false, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x87BE56724650408E | Since: 1207
 */
export function police(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskPolice(_ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x4172393E6BE1FECE | Since: 1207
 */
export function putPedDirectlyIntoCover(ped, pos, timeout, coverpoint) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPutPedDirectlyIntoCover(_ped, pos.x, pos.y, pos.z, timeout, false, 0, undefined, undefined, coverpoint, false, false, undefined);
}
/**
 * grappleStyle: AR_GRAPPLE_STRUGGLE, AR_ALLIGATOR_LEG_GRAB_CHALLENGE_FAIL, AR_GRAPPLE_BACK_FROM_BACK, AR_GRAPPLE_BACK_DEFEND, AR_GRAPPLE_FRONT_FROM_FRONT
 *
 * Hash: 0xA05F3F20889D7A5B | Since: 1207
 */
export function putPedDirectlyIntoGrapple(ped, grappleTarget, grappleStyle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _grappleTarget = grappleTarget instanceof IPed ? grappleTarget.handle() : grappleTarget;
    if (typeof grappleStyle === 'string')
        grappleStyle = GetHashKey(grappleStyle);
    TaskPutPedDirectlyIntoGrapple(_ped, _grappleTarget, grappleStyle, 0, 0, false, 0);
}
/**
 * meleeStyles: AR_GRAPPLE_BACK_FROM_BACK, AR_GRAPPLE_MOUNT_FACEDOWN_FROM_FRONT, AR_ALLIGATOR_LEAPKILL, AR_ALLIGATOR_WAIST_AUTOKILL_FRONT
 *
 * Hash: 0x1C6CD14A876FFE39 | Since: 1207
 */
export function putPedDirectlyIntoMelee(ped, meleeTarget, meleeStyle, animBlendRatio) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _meleeTarget = meleeTarget instanceof IPed ? meleeTarget.handle() : meleeTarget;
    if (typeof meleeStyle === 'string')
        meleeStyle = GetHashKey(meleeStyle);
    TaskPutPedDirectlyIntoMelee(_ped, _meleeTarget, meleeStyle, 0, animBlendRatio, false, 0);
}
/**
 * Makes a ped react to an entity.
 * Params: reactingTo Entity can be 0, p8 is always 4
 *
 * Hash: 0xC4C32C31920E1B70 | Since: 1207
 */
export function react(ped, reactingTo, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _reactingTo = reactingTo instanceof IEntity ? reactingTo.handle() : reactingTo;
    return TaskReact(_ped, _reactingTo, pos.x, pos.y, pos.z, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x62D2916F56B9CD2D | Since: 1207
 */
export function reloadWeapon(ped, unused) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskReloadWeapon(_ped, unused);
}
/**
 * No comment provided
 *
 * Hash: 0x356088527D9EBAAD | Since: 1207
 */
export function reviveTarget(ped, reviver, tool) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _reviver = reviver instanceof IPed ? reviver.handle() : reviver;
    if (typeof tool === 'string')
        tool = GetHashKey(tool);
    TaskReviveTarget(_ped, _reviver, tool);
}
/**
 * No comment provided
 *
 * Hash: 0x37FB1C870E2EC2C6 | Since: 1207
 */
export function rideTrain(ped, train, scenarioPoint, scenarioHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _train = train instanceof IVehicle ? train.handle() : train;
    if (typeof scenarioHash === 'string')
        scenarioHash = GetHashKey(scenarioHash);
    TaskRideTrain(_ped, _train, scenarioPoint, scenarioHash);
}
/**
 * No comment provided
 *
 * Hash: 0x7BB967F85D8CCBDB | Since: 1207
 */
export function robPed(ped, target, flag) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskRobPed(_ped, target, undefined, flag, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x126EF75F1E17ABE5 | Since: 1207
 */
export function scriptedAnimation(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskScriptedAnimation(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x8D7F2A63688C20A4 | Since: 1207
 */
export function seekClearLosToEntity(ped, entity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskSeekClearLosToEntity(_ped, _entity, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x84D32B3BEC531324 | Since: 1207
 */
export function seekCoverFromPed(ped, fromPed, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _fromPed = fromPed instanceof IPed ? fromPed.handle() : fromPed;
    TaskSeekCoverFromPed(_ped, _fromPed, duration, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x75AC2B60386D89F2 | Since: 1207
 */
export function seekCoverFromPos(ped, pos, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSeekCoverFromPos(_ped, pos.x, pos.y, pos.z, duration, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x39246A6958EF072C | Since: 1207
 */
export function seekCoverToCoords(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSeekCoverToCoords(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD43D95C7A869447F | Since: 1207
 */
export function seekCoverToCoverPoint(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSeekCoverToCoverPoint(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x90D2156198831D69 | Since: 1207
 */
export function setBlockingOfNonTemporaryEvents(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSetBlockingOfNonTemporaryEvents(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x17293C633C8AC019 | Since: 1207
 */
export function setCrouchMovement(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSetCrouchMovement(_ped, false, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x933C06518B52A9A4 | Since: 1207
 */
export function setSphereDefensiveArea(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSetSphereDefensiveArea(_ped, 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x4C3FA937B44A90FA | Since: 1207
 */
export function setStealthMovement(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSetStealthMovement(_ped, false, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x452419CBD838065B | Since: 1207
 */
export function shockingEventReact(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskShockingEventReact(_ped, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x46A6CC01E0826106 | Since: 1207
 */
export function shootAtCoord(ped, pos, duration, firingPattern) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof firingPattern === 'string')
        firingPattern = GetHashKey(firingPattern);
    TaskShootAtCoord(_ped, pos.x, pos.y, pos.z, duration, firingPattern, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x08DA95E8298AE772 | Since: 1207
 */
export function shootAtEntity(entity, targetEntity, duration, firingPattern, affectCockedState) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _targetEntity = targetEntity instanceof IEntity ? targetEntity.handle() : targetEntity;
    if (typeof firingPattern === 'string')
        firingPattern = GetHashKey(firingPattern);
    TaskShootAtEntity(_entity, _targetEntity, duration, firingPattern, affectCockedState);
}
/**
 * No comment provided
 *
 * Hash: 0x08AA95E8298AE772 | Since: 1207
 */
export function shootWithWeapon(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskShootWithWeapon(_ped);
}
/**
 * Makes the specified ped shuffle to the next vehicle seat.
 * The ped MUST be in a vehicle and the vehicle parameter MUST be the ped's current vehicle.
 *
 * Hash: 0x7AA80209BDA643EB | Since: 1207
 */
export function shuffleToNextVehicleSeat(ped, vehicle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskShuffleToNextVehicleSeat(_ped, _vehicle);
}
/**
 * Makes the specified ped flee the specified distance from the specified position.
 * fleeType: see TASK_FLEE_COORD
 *
 * Hash: 0x94587F17E9C365D5 | Since: 1207
 */
export function smartFleeCoord(ped, pos, distance, time, fleeType, fleeSpeed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSmartFleeCoord(_ped, pos.x, pos.y, pos.z, distance, time, fleeType, fleeSpeed);
}
/**
 * Makes a ped run away from another ped (fleeFromTarget)
 *
 * fleeDistance = ped will flee this distance
 * fleeTime = ped will flee for this amount of time, set to "-1" to flee forever
 * fleeType = see TASK_FLEE_COORD, can be 0, R* Scripts: fm_mission/race_controller: 66048; fme_escaped_convicts: 2260992, 2523136, 2359296; la_alligator/fox: 2097152; net_fetch: 17301536; net_stable_mount: 540928
 * fleeSpeed = mostly 3f, rarely 1f in R* Scripts
 *
 * Hash: 0x22B0D0E37CCB840D | Since: 1207
 */
export function smartFleePed(ped, fleeFromTarget, fleeDistance, fleeTime, fleeType, fleeSpeed, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _fleeFromTarget = fleeFromTarget instanceof IPed ? fleeFromTarget.handle() : fleeFromTarget;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskSmartFleePed(_ped, _fleeFromTarget, fleeDistance, fleeTime, fleeType, fleeSpeed, _targetPed);
}
/**
 * No comment provided
 *
 * Hash: 0xAE032F8BBA959E90 | Since: 1207
 */
export function standGuard(ped, pos, heading) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskStandGuard(_ped, pos.x, pos.y, pos.z, heading);
}
/**
 * Makes the specified ped stand still for (time) milliseconds.
 *
 * Hash: 0x919BE13EED931959 | Since: 1207
 */
export function standStill(ped, time) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskStandStill(_ped, time);
}
/**
 * No comment provided
 *
 * Hash: 0x4D1F61FC34AF3CD1 | Since: 1207
 */
export function startScenarioAtPosition(ped, scenarioHash, pos, heading, duration, sittingScenario, teleport) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof scenarioHash === 'string')
        scenarioHash = GetHashKey(scenarioHash);
    return TaskStartScenarioAtPosition(_ped, scenarioHash, pos.x, pos.y, pos.z, heading, duration, sittingScenario, teleport, 0, false);
}
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/animations/scenarios
 * Params: duration in milliseconds
 *
 * conditionalHash (optionally):
 * 0 = play random conditional anim.
 * Every conditional anim has requirements to play it.
 * If requirements are not met, ped plays random allowed conditional anim or can be stuck.
 * For example, this scenario type has possible conditional anim WORLD_HUMAN_LEAN_BACK_WALL_SMOKING_MALE_D, but it can not be played by player, because condition is set to NOT be CAIConditionIsPlayer (check file amb_rest.meta and amb_rest_CA.meta with OPENIV to clarify requirements).
 *
 * Hash: 0x524B54361229154F | Since: 1207
 */
export function startScenarioInPlaceHash(ped, scenarioHash, duration, playEnterAnim, conditionalHash, heading, idleForever) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof scenarioHash === 'string')
        scenarioHash = GetHashKey(scenarioHash);
    if (typeof conditionalHash === 'string')
        conditionalHash = GetHashKey(conditionalHash);
    TaskStartScenarioInPlaceHash(_ped, scenarioHash, duration, playEnterAnim, conditionalHash, heading, idleForever);
}
/**
 * Makes the ped run to take cover
 *
 * Hash: 0xE5DA8615A6180789 | Since: 1207
 */
export function stayInCover(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskStayInCover(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xED27560703F37258 | Since: 1207
 */
export function stopLeadingHorse(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskStopLeadingHorse(_ped);
}
/**
 * Baits: see 0x9B0C7FA063E67629
 *
 * Hash: 0x2C28AC30A72722DA | Since: 1207
 */
export function swapFishingBait(ped, withoutBuoy) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskSwapFishingBait(_ped, withoutBuoy);
}
/**
 * No comment provided
 *
 * Hash: 0xA21C51255B205245 | Since: 1207
 */
export function swapWeapon(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskSwapWeapon(_ped, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7285951DBF6B5A51 | Since: 1207
 */
export function throwProjectile(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskThrowProjectile(_ped, undefined, undefined, undefined);
}
/**
 * duration in milliseconds
 *
 * Hash: 0x1DDA930A0AC38571 | Since: 1207
 */
export function turnPedToFaceCoord(ped, pos, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskTurnPedToFaceCoord(_ped, pos.x, pos.y, pos.z, duration);
}
/**
 * duration: the amount of time in milliseconds to do the task. -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped
 *
 * Hash: 0x5AD23D40115353AC | Since: 1207
 */
export function turnPedToFaceEntity(ped, targetEntity, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetEntity = targetEntity instanceof IEntity ? targetEntity.handle() : targetEntity;
    TaskTurnPedToFaceEntity(_ped, _targetEntity, duration, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x84179419DBDD36F2 | Since: 1207
 */
export function turnToFaceClosestPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskTurnToFaceClosestPed(_ped, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x9FDA1B3D7E7028B3 | Since: 1207
 */
export function useNearestScenarioChainToCoord(ped, pos, distance) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskUseNearestScenarioChainToCoord(_ped, pos.x, pos.y, pos.z, distance, false, false, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x97A28E63F0BA5631 | Since: 1207
 */
export function useNearestScenarioChainToCoordWarp(ped, pos, distance) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskUseNearestScenarioChainToCoordWarp(_ped, pos.x, pos.y, pos.z, distance, false, false, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x58E2E0F23F6B76C3 | Since: 1207
 */
export function useNearestScenarioToCoordWarp(ped, pos, distance, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskUseNearestScenarioToCoordWarp(_ped, pos.x, pos.y, pos.z, distance, duration, false, false, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x3774B03456DD6106 | Since: 1207
 */
export function useNearestTrainScenarioToCoordWarp(ped, pos, distance) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskUseNearestTrainScenarioToCoordWarp(_ped, pos.x, pos.y, pos.z, distance);
}
/**
 * No comment provided
 *
 * Hash: 0x14747F4A5971DE4E | Since: 1207
 */
export function useRandomScenarioInGroup(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskUseRandomScenarioInGroup(_ped, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCCDAE6324B6A821C | Since: 1207
 */
export function useScenarioPoint(ped, scenario, conditionalAnim, p6) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof p6 === 'string')
        p6 = GetHashKey(p6);
    TaskUseScenarioPoint(_ped, scenario, conditionalAnim, 0, false, false, p6, false, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0x447C1E9EF844BC0F | Since: 1207
 */
export function vehicleAimAtCoord(ped, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskVehicleAimAtCoord(_ped, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xE41885592B08B097 | Since: 1207
 */
export function vehicleAimAtPed(ped, target) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IPed ? target.handle() : target;
    TaskVehicleAimAtPed(_ped, _target);
}
/**
 * Old name: _TASK_VEHICLE_DRIVE_TO_POINT
 * flag: 524419 and 0 in shop_horse_shop R* Script
 *
 * Hash: 0x089FF2FB965F0A29 | Since: 1207
 */
export function vehicleDriveStraightToPoint(driver, vehicle, pos, flag) {
    const _driver = driver instanceof IPed ? driver.handle() : driver;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskVehicleDriveStraightToPoint(_driver, _vehicle, pos.x, pos.y, pos.z, 0, 0, flag);
}
/**
 * stopRange: how close vehicle will get to destination before stopping, default 4.0
 * straightLineDist: distance at which AI switches to heading for target directly instead of following nodes, default -1
 *
 * Hash: 0xE2A2AA2F659D77A7 | Since: 1207
 */
export function vehicleDriveToCoord(ped, vehicle, pos, speed, style, vehicleModel, drivingMode, stopRange, straightLineDist) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    if (typeof vehicleModel === 'string')
        vehicleModel = GetHashKey(vehicleModel);
    TaskVehicleDriveToCoord(_ped, _vehicle, pos.x, pos.y, pos.z, speed, style, vehicleModel, drivingMode, stopRange, straightLineDist);
}
/**
 * flags: 67108864, 2097152, 524564, 524675 (eDrivingFlags)
 * p7 = 6 or 3
 * p8 = x coordinate
 * p9 - 8.f
 * p10 = false
 *
 * Hash: 0x7F241A0D14354583 | Since: 1207
 */
export function vehicleDriveToDestination(driver, vehicle, pos, speed, drivingFlags, stoppingRange1, stoppingRange2) {
    const _driver = driver instanceof IPed ? driver.handle() : driver;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskVehicleDriveToDestination(_driver, _vehicle, pos.x, pos.y, pos.z, speed, drivingFlags, 0, stoppingRange1, stoppingRange2, false);
}
/**
 * No comment provided
 *
 * Hash: 0x480142959D337D00 | Since: 1207
 */
export function vehicleDriveWander(ped, vehicle, speed, drivingStyle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskVehicleDriveWander(_ped, _vehicle, speed, drivingStyle);
}
/**
 * No comment provided
 *
 * Hash: 0x0FA6E4B75F302400 | Since: 1207
 */
export function vehicleEscort(ped, vehicle, targetVehicle, mode, speed, drivingStyle, minDistance, noRoadsDistance) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _targetVehicle = targetVehicle instanceof IVehicle ? targetVehicle.handle() : targetVehicle;
    TaskVehicleEscort(_ped, _vehicle, _targetVehicle, mode, speed, drivingStyle, minDistance, 0, noRoadsDistance);
}
/**
 * No comment provided
 *
 * Hash: 0x3123FAA6DB1CF7ED | Since: 1207
 */
export function vehicleFollowWaypointRecording(ped, vehicle, drivingMode, eWaypoint, flag, stoppingDist) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return TaskVehicleFollowWaypointRecording(_ped, _vehicle, drivingMode, undefined, eWaypoint, flag, 0, false, stoppingDist, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x195AEEB13CEFE2EE | Since: 1207
 */
export function vehicleGotoNavmesh(ped, vehicle, pos, speed, behaviorFlag, stoppingRange) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskVehicleGotoNavmesh(_ped, _vehicle, pos.x, pos.y, pos.z, speed, behaviorFlag, stoppingRange);
}
/**
 * No comment provided
 *
 * Hash: 0x659427E0EF36BCDE | Since: 1207
 */
export function vehicleMission(driver, vehicle, vehicleTarget, missionType, DriveAgainstTraffic) {
    const _driver = driver instanceof IPed ? driver.handle() : driver;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _vehicleTarget = vehicleTarget instanceof IVehicle ? vehicleTarget.handle() : vehicleTarget;
    TaskVehicleMission(_driver, _vehicle, _vehicleTarget, missionType, 0, undefined, 0, 0, DriveAgainstTraffic);
}
/**
 * See TASK_VEHICLE_MISSION
 *
 * Hash: 0x9454528DF15D657A | Since: 1207
 */
export function vehicleMissionPedTarget(ped, vehicle, pedTarget, mode, maxSpeed, drivingStyle, minDistance, DriveAgainstTraffic) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _pedTarget = pedTarget instanceof IPed ? pedTarget.handle() : pedTarget;
    TaskVehicleMissionPedTarget(_ped, _vehicle, _pedTarget, mode, maxSpeed, drivingStyle, minDistance, 0, DriveAgainstTraffic);
}
/**
 * No comment provided
 *
 * Hash: 0x5190796ED39C9B6D | Since: 1207
 */
export function vehicleShootAtCoord(ped, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskVehicleShootAtCoord(_ped, pos.x, pos.y, pos.z, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x10AB107B887214D8 | Since: 1207
 */
export function vehicleShootAtPed(ped, target) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _target = target instanceof IPed ? target.handle() : target;
    TaskVehicleShootAtPed(_ped, _target, 0);
}
/**
 * Documentation from GTA V, might be the same in RDR:
 *
 * '1 - brake
 * '3 - brake + reverse
 * '4 - turn left 90 + braking
 * '5 - turn right 90 + braking
 * '6 - brake strong (handbrake?) until time ends
 * '7 - turn left + accelerate
 * '7 - turn right + accelerate
 * '9 - weak acceleration
 * '10 - turn left + restore wheel pos to center in the end
 * '11 - turn right + restore wheel pos to center in the end
 * '13 - turn left + go reverse
 * '14 - turn left + go reverse
 * '16 - crash the game after like 2 seconds :)
 * '17 - keep actual state, game crashed after few tries
 * '18 - game crash
 * '19 - strong brake + turn left/right
 * '20 - weak brake + turn left then turn right
 * '21 - weak brake + turn right then turn left
 * '22 - brake + reverse
 * '23 - accelerate fast
 * '24 - brake
 * '25 - brake turning left then when almost stopping it turns left more
 * '26 - brake turning right then when almost stopping it turns right more
 * '27 - brake until car stop or until time ends
 * '28 - brake + strong reverse acceleration
 * '30 - performs a burnout (brake until stop + brake and accelerate)
 * '31 - accelerate + handbrake
 * '32 - accelerate very strong
 *
 * Seems to be this:
 * Works on NPCs, but overrides their current task. If inside a task sequence (and not being the last task), "time" will work, otherwise the task will be performed forever until tasked with something else
 *
 * Hash: 0xC429DCEEB339E129 | Since: 1207
 */
export function vehicleTempAction(driver, vehicle, action, time) {
    const _driver = driver instanceof IPed ? driver.handle() : driver;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskVehicleTempAction(_driver, _vehicle, action, time);
}
/**
 * No comment provided
 *
 * Hash: 0x04ACFAC71E6858F9 | Since: 1207
 */
export function walkAway(ped, entity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskWalkAway(_ped, _entity);
}
/**
 * No comment provided
 *
 * Hash: 0x8AC76D1408731732 | Since: 1207
 */
export function wanderAndConverseWithPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskWanderAndConverseWithPed(_ped, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE054346CA3A0F315 | Since: 1207
 */
export function wanderInArea(ped, pos, radius) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskWanderInArea(_ped, pos.x, pos.y, pos.z, radius, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x9FDA168777B28424 | Since: 1207
 */
export function wanderInVolume(ped, volume) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskWanderInVolume(_ped, volume, 0, 0, 0);
}
/**
 * Makes ped walk around the area the params p1 p2 seems to not affect anything but p2 is either 0 or 1 and p1 is mostly 1.0 or ped heading
 *
 * Hash: 0xBB9CE077274F6A1B | Since: 1207
 */
export function wanderStandard(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskWanderStandard(_ped, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x527EA3DB8BC7F03B | Since: 1207
 */
export function wanderSwim(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskWanderSwim(_ped, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9A7D091411C5F684 | Since: 1207
 */
export function warpPedIntoVehicle(ped, vehicle, seat) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskWarpPedIntoVehicle(_ped, _vehicle, seat);
}
/**
 * No comment provided
 *
 * Hash: 0x7157B82D60E4BC46 | Since: 1207
 */
export function weapon(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskWeapon(_ped);
}
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/AI/EVENTS/aud_ped_whistle_types.lua
 * p2: UNSPECIFIED
 *
 * Hash: 0xD6401A1B2F63BED6 | Since: 1207
 */
export function whistleAnim(ped, audPedWhistleType, p2) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof audPedWhistleType === 'string')
        audPedWhistleType = GetHashKey(audPedWhistleType);
    if (typeof p2 === 'string')
        p2 = GetHashKey(p2);
    TaskWhistleAnim(_ped, audPedWhistleType, p2);
}
/**
 * No comment provided
 *
 * Hash: 0x67406F2C8F87FC4F | Since: 1207
 */
export function uncuffPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    UncuffPed(_ped);
}
/**
 * getupSetHash: see nm_blend_out_sets.meta
 *
 * Hash: 0x79559BAD83CCD038 | Since: 1207
 */
export function unhogtiePed(ped, flags, getupSetHash) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof getupSetHash === 'string')
        getupSetHash = GetHashKey(getupSetHash);
    return UnhogtiePed(_ped, flags, getupSetHash, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xA98FCAFD7893C834 | Since: 1207
 */
export function updateHandsUpDuration(ped, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    UpdateTaskHandsUpDuration(_ped, duration);
}
/**
 * No comment provided
 *
 * Hash: 0x5A353B8E6B1095B5 | Since: 1207
 */
export function useWaypointRecordingAsAssistedMovementRoute() {
    return UseWaypointRecordingAsAssistedMovementRoute(false, 0, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0x4D6D30AB18B0B089 | Since: 1207
 */
export function vehicleWaypointPlaybackGetIsPaused() {
    return VehicleWaypointPlaybackGetIsPaused(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x121F0593E0A431D7 | Since: 1207
 */
export function vehicleWaypointPlaybackOverrideSpeed(vehicle, speed) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    VehicleWaypointPlaybackOverrideSpeed(_vehicle, speed);
}
/**
 * No comment provided
 *
 * Hash: 0x8A4E6AC373666BC5 | Since: 1207
 */
export function vehicleWaypointPlaybackPause(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    VehicleWaypointPlaybackPause(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xDC04FCAA7839D492 | Since: 1207
 */
export function vehicleWaypointPlaybackResume(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    VehicleWaypointPlaybackResume(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x5CEB25A7D2848963 | Since: 1207
 */
export function vehicleWaypointPlaybackUseDefaultSpeed(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    VehicleWaypointPlaybackUseDefaultSpeed(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xD73A5D1F0325C71C | Since: 1207
 */
export function waypointPlaybackGetIsAiming(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return WaypointPlaybackGetIsAiming(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x701375A7D43F01CB | Since: 1207
 */
export function waypointPlaybackGetIsPaused(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return WaypointPlaybackGetIsPaused(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xA5B94DF8AF058F46 | Since: 1207
 */
export function waypointPlaybackGetIsShooting(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return WaypointPlaybackGetIsShooting(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x7D7D2B47FA788E85 | Since: 1207
 */
export function waypointPlaybackOverrideSpeed(ped, speed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    WaypointPlaybackOverrideSpeed(_ped, speed, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0F342546AA06FED5 | Since: 1207
 */
export function waypointPlaybackPause(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    WaypointPlaybackPause(_ped, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x244F70C84C547D2D | Since: 1207
 */
export function waypointPlaybackResume(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    WaypointPlaybackResume(_ped, false, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x8968400D900ED8B3 | Since: 1207
 */
export function waypointPlaybackStartAimingAtCoord() {
    WaypointPlaybackStartAimingAtCoord(undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4F158205E0C74385 | Since: 1207
 */
export function waypointPlaybackStartAimingAtEntity() {
    WaypointPlaybackStartAimingAtEntity(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x20E330937C399D29 | Since: 1207
 */
export function waypointPlaybackStartAimingAtPed() {
    WaypointPlaybackStartAimingAtPed(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x057A25CFCC9DB671 | Since: 1207
 */
export function waypointPlaybackStartShootingAtCoord() {
    WaypointPlaybackStartShootingAtCoord(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4AF458F71C1196D2 | Since: 1207
 */
export function waypointPlaybackStartShootingAtEntity() {
    WaypointPlaybackStartShootingAtEntity(undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE70BA7B90F8390DC | Since: 1207
 */
export function waypointPlaybackStartShootingAtPed() {
    WaypointPlaybackStartShootingAtPed(undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x47EFA040EBB8E2EA | Since: 1207
 */
export function waypointPlaybackStopAimingOrShooting() {
    WaypointPlaybackStopAimingOrShooting(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6599D834B12D0800 | Since: 1207
 */
export function waypointPlaybackUseDefaultSpeed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    WaypointPlaybackUseDefaultSpeed(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xB629A298081F876F | Since: 1207
 */
export function waypointRecordingGetClosestWaypoint(pos, point) {
    return WaypointRecordingGetClosestWaypoint(pos.x, pos.y, pos.z, point);
}
/**
 * No comment provided
 *
 * Hash: 0x2FB897405C90B361 | Since: 1207
 */
export function waypointRecordingGetCoord(point) {
    return WaypointRecordingGetCoord(point);
}
/**
 * No comment provided
 *
 * Hash: 0x5343532C01A07234 | Since: 1207
 */
export function waypointRecordingGetNumPoints(points) {
    return WaypointRecordingGetNumPoints(points);
}
/**
 * No comment provided
 *
 * Hash: 0x005622AEBC33ACA9 | Since: 1207
 */
export function waypointRecordingGetSpeedAtPoint(point) {
    return WaypointRecordingGetSpeedAtPoint(point);
}
/**
 * No comment provided
 *
 * Hash: 0x0000A8ACDC2E1B6A | Since: 1207
 */
export function _0x0000A8ACDC2E1B6A() {
    Citizen.invokeNative('0x0000A8ACDC2E1B6A', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x00FFE0F85253C572 | Since: 1207
 */
export function _0x00FFE0F85253C572() {
    return Citizen.invokeNative('0x00FFE0F85253C572', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0365000D8BF86531 | Since: 1207
 */
export function _0x0365000D8BF86531() {
    return Citizen.invokeNative('0x0365000D8BF86531', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x098036CAB8373D36 | Since: 1207
 */
export function _0x098036CAB8373D36() {
    Citizen.invokeNative('0x098036CAB8373D36', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x098CAA6DBE7D8D82 | Since: 1207
 */
export function _0x098CAA6DBE7D8D82() {
    Citizen.invokeNative('0x098CAA6DBE7D8D82', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0A98A362C5A19A43 | Since: 1207
 */
export function _0x0A98A362C5A19A43() {
    return Citizen.invokeNative('0x0A98A362C5A19A43', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0D322AEF8878B8FE | Since: 1207
 */
export function _0x0D322AEF8878B8FE() {
    Citizen.invokeNative('0x0D322AEF8878B8FE', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0E184495B27BB57D | Since: 1207
 */
export function _0x0E184495B27BB57D() {
    Citizen.invokeNative('0x0E184495B27BB57D');
}
/**
 * No comment provided
 *
 * Hash: 0x0F4F6C4CE471259D | Since: 1207
 */
export function _0x0F4F6C4CE471259D() {
    Citizen.invokeNative('0x0F4F6C4CE471259D', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x10ADFDF07B7DFFBA | Since: 1207
 */
export function _0x10ADFDF07B7DFFBA() {
    return Citizen.invokeNative('0x10ADFDF07B7DFFBA', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x10C44F633E2D6D9E | Since: 1207
 */
export function _0x10C44F633E2D6D9E() {
    Citizen.invokeNative('0x10C44F633E2D6D9E', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x11C7CE1AE38911B5 | Since: 1207
 */
export function _0x11C7CE1AE38911B5() {
    return Citizen.invokeNative('0x11C7CE1AE38911B5', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x152664AA3188B193 | Since: 1207
 */
export function _0x152664AA3188B193() {
    return Citizen.invokeNative('0x152664AA3188B193', undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1632EB9386CDBE64 | Since: 1207
 */
export function _0x1632EB9386CDBE64() {
    Citizen.invokeNative('0x1632EB9386CDBE64', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x19BC99C678FBA139 | Since: 1207
 */
export function _0x19BC99C678FBA139() {
    Citizen.invokeNative('0x19BC99C678FBA139', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1A7D63CB1B0BB223 | Since: 1207
 */
export function _0x1A7D63CB1B0BB223() {
    Citizen.invokeNative('0x1A7D63CB1B0BB223', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1AC5A8AB50CFAA33 | Since: 1207
 */
export function _0x1AC5A8AB50CFAA33() {
    return Citizen.invokeNative('0x1AC5A8AB50CFAA33', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1F298C7BD30D1240 | Since: 1207
 */
export function _0x1F298C7BD30D1240(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x1F298C7BD30D1240', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x1F7A9A9C38C13A56 | Since: 1207
 */
export function _0x1F7A9A9C38C13A56() {
    return Citizen.invokeNative('0x1F7A9A9C38C13A56', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2064B33F6E6B92D4 | Since: 1207
 */
export function _0x2064B33F6E6B92D4() {
    Citizen.invokeNative('0x2064B33F6E6B92D4', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x22CD2C33ED4467A1 | Since: 1207
 */
export function _0x22CD2C33ED4467A1() {
    return Citizen.invokeNative('0x22CD2C33ED4467A1', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x22CDBF317C40A122 | Since: 1207
 */
export function _0x22CDBF317C40A122(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x22CDBF317C40A122', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x23767D80C7EED7C6 | Since: 1311
 */
export function _0x23767D80C7EED7C6() {
    Citizen.invokeNative('0x23767D80C7EED7C6', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x28EF780BDEA8A639 | Since: 1207
 */
export function _0x28EF780BDEA8A639(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x28EF780BDEA8A639', _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x2948235DB2058E99 | Since: 1207
 */
export function _0x2948235DB2058E99() {
    Citizen.invokeNative('0x2948235DB2058E99', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2A10538D0A005E81 | Since: 1207
 */
export function _0x2A10538D0A005E81() {
    Citizen.invokeNative('0x2A10538D0A005E81', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2B8AF29A78024BD3 | Since: 1207
 */
export function _0x2B8AF29A78024BD3() {
    Citizen.invokeNative('0x2B8AF29A78024BD3', undefined);
}
/**
 * _GET_ANIM_SCENE_FROM_PED_*
 *
 * Hash: 0x2C497BDEF897C6DF | Since: 1207
 */
export function _0x2C497BDEF897C6DF() {
    return Citizen.invokeNative('0x2C497BDEF897C6DF', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2D657B10F211C572 | Since: 1207
 */
export function _0x2D657B10F211C572(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x2D657B10F211C572', _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x2E1D6D87346BB7D2 | Since: 1207
 */
export function _0x2E1D6D87346BB7D2() {
    Citizen.invokeNative('0x2E1D6D87346BB7D2', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2EB977293923C723 | Since: 1207
 */
export function _0x2EB977293923C723() {
    Citizen.invokeNative('0x2EB977293923C723', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x30146C25686B7836 | Since: 1207
 */
export function _0x30146C25686B7836() {
    return Citizen.invokeNative('0x30146C25686B7836', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x30B391915538EBE2 | Since: 1207
 */
export function _0x30B391915538EBE2() {
    Citizen.invokeNative('0x30B391915538EBE2', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x31BB338F64D5C861 | Since: 1207
 */
export function _0x31BB338F64D5C861(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x31BB338F64D5C861', _ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x358A1A751B335A11 | Since: 1207
 */
export function _0x358A1A751B335A11() {
    Citizen.invokeNative('0x358A1A751B335A11', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x370F57C47F68EBCA | Since: 1207
 */
export function _0x370F57C47F68EBCA() {
    return Citizen.invokeNative('0x370F57C47F68EBCA', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3BBEECC5B8F35318 | Since: 1207
 */
export function _0x3BBEECC5B8F35318() {
    Citizen.invokeNative('0x3BBEECC5B8F35318', undefined, undefined);
}
/**
 * Used for HORSE_REVIVE
 *
 * Hash: 0x3F8387DB1B9F31B7 | Since: 1207
 */
export function _0x3F8387DB1B9F31B7() {
    return Citizen.invokeNative('0x3F8387DB1B9F31B7', false);
}
/**
 * No comment provided
 *
 * Hash: 0x3FEB770D8ED9047A | Since: 1207
 */
export function _0x3FEB770D8ED9047A() {
    return Citizen.invokeNative('0x3FEB770D8ED9047A', undefined);
}
/**
 * _SET_PED_*
 *
 * Hash: 0x41D1331AFAD5A091 | Since: 1207
 */
export function _0x41D1331AFAD5A091(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x41D1331AFAD5A091', _ped, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x450080DDEDB91258 | Since: 1207
 */
export function _0x450080DDEDB91258() {
    Citizen.invokeNative('0x450080DDEDB91258', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4A7D73989F52EB37 | Since: 1207
 */
export function _0x4A7D73989F52EB37() {
    Citizen.invokeNative('0x4A7D73989F52EB37', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4E806A395D43A458 | Since: 1207
 */
export function _0x4E806A395D43A458() {
    Citizen.invokeNative('0x4E806A395D43A458', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4F57397388E1DFF8 | Since: 1207
 */
export function _0x4F57397388E1DFF8() {
    Citizen.invokeNative('0x4F57397388E1DFF8');
}
/**
 * Only used in R* SP Scripts
 * Params: p4 = 1.0f - 30.0f
 *
 * Hash: 0x508F5053E3F6F0C4 | Since: 1207
 */
export function _0x508F5053E3F6F0C4(ped, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x508F5053E3F6F0C4', _ped, pos.x, pos.y, pos.z, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x50AA09A0DA64E73C | Since: 1207
 */
export function _0x50AA09A0DA64E73C() {
    Citizen.invokeNative('0x50AA09A0DA64E73C', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5217B7B6DB78E1F3 | Since: 1207
 */
export function _0x5217B7B6DB78E1F3() {
    Citizen.invokeNative('0x5217B7B6DB78E1F3', undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x59AE5CA4FFB4E378 | Since: 1207
 */
export function _0x59AE5CA4FFB4E378() {
    return Citizen.invokeNative('0x59AE5CA4FFB4E378', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x59AEA4DC640814B9 | Since: 1207
 */
export function _0x59AEA4DC640814B9() {
    Citizen.invokeNative('0x59AEA4DC640814B9', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5B68D0007D9C92EB | Since: 1207
 */
export function _0x5B68D0007D9C92EB() {
    Citizen.invokeNative('0x5B68D0007D9C92EB', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5D9B0BAAF04CF65B | Since: 1207
 */
export function _0x5D9B0BAAF04CF65B() {
    Citizen.invokeNative('0x5D9B0BAAF04CF65B', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5EA655F01D93667A | Since: 1207
 */
export function _0x5EA655F01D93667A() {
    return Citizen.invokeNative('0x5EA655F01D93667A', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x615DC4A82E90BB48 | Since: 1207
 */
export function _0x615DC4A82E90BB48() {
    Citizen.invokeNative('0x615DC4A82E90BB48', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x643FD1556F621772 | Since: 1207
 */
export function _0x643FD1556F621772() {
    return Citizen.invokeNative('0x643FD1556F621772', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x651F0530083C0E5A | Since: 1207
 */
export function _0x651F0530083C0E5A() {
    Citizen.invokeNative('0x651F0530083C0E5A', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x65D281985F2BDFC2 | Since: 1207
 */
export function _0x65D281985F2BDFC2() {
    Citizen.invokeNative('0x65D281985F2BDFC2', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x673A8779D229BA5A | Since: 1207
 */
export function _0x673A8779D229BA5A() {
    Citizen.invokeNative('0x673A8779D229BA5A', undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * Only used in R* SP Script beat_washed_ashore
 * `Returns Object prop for TASK::_TASK_ITEM_INTERACTION_2`
 *
 * Hash: 0x678D3226CF70B9C8 | Since: 1207
 */
export function _0x678D3226CF70B9C8(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x678D3226CF70B9C8', _ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x6C269F673C47031E | Since: 1207
 */
export function _0x6C269F673C47031E() {
    return Citizen.invokeNative('0x6C269F673C47031E', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6DAC799857EF3F11 | Since: 1311
 */
export function _0x6DAC799857EF3F11() {
    return Citizen.invokeNative('0x6DAC799857EF3F11', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x722D6A49200174FE | Since: 1207
 */
export function _0x722D6A49200174FE() {
    Citizen.invokeNative('0x722D6A49200174FE', undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x748D5E0D2A1A4C61 | Since: 1207
 */
export function _0x748D5E0D2A1A4C61() {
    Citizen.invokeNative('0x748D5E0D2A1A4C61', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x74F0209674864CBD | Since: 1207
 */
export function _0x74F0209674864CBD() {
    return Citizen.invokeNative('0x74F0209674864CBD');
}
/**
 * No comment provided
 *
 * Hash: 0x764DB5A48390FBAD | Since: 1207
 */
export function _0x764DB5A48390FBAD() {
    Citizen.invokeNative('0x764DB5A48390FBAD', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x76610D12A838EBDE | Since: 1311
 */
export function _0x76610D12A838EBDE() {
    return Citizen.invokeNative('0x76610D12A838EBDE', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7FB78B2199C10E92 | Since: 1207
 */
export function _0x7FB78B2199C10E92() {
    Citizen.invokeNative('0x7FB78B2199C10E92', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x801BD27403F3CBA0 | Since: 1207
 */
export function _0x801BD27403F3CBA0() {
    Citizen.invokeNative('0x801BD27403F3CBA0', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x827A58CED9D4D5B4 | Since: 1207
 */
export function _0x827A58CED9D4D5B4() {
    Citizen.invokeNative('0x827A58CED9D4D5B4', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x82ED59F095056550 | Since: 1207
 */
export function _0x82ED59F095056550() {
    Citizen.invokeNative('0x82ED59F095056550', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x865732725536EE39 | Since: 1207
 */
export function _0x865732725536EE39() {
    return new Vector3(Citizen.invokeNative('0x865732725536EE39', undefined));
}
/**
 * No comment provided
 *
 * Hash: 0x8798CF6815B8FE0F | Since: 1207
 */
export function _0x8798CF6815B8FE0F() {
    Citizen.invokeNative('0x8798CF6815B8FE0F', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x885D19AC2B6FBFF4 | Since: 1207
 */
export function _0x885D19AC2B6FBFF4() {
    Citizen.invokeNative('0x885D19AC2B6FBFF4', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x88FD60D846D9CD63 | Since: 1207
 */
export function _0x88FD60D846D9CD63(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x88FD60D846D9CD63', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x8E1DDE26D270CC5E | Since: 1207
 */
export function _0x8E1DDE26D270CC5E() {
    Citizen.invokeNative('0x8E1DDE26D270CC5E', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8F8C84363810691A | Since: 1207
 */
export function _0x8F8C84363810691A() {
    Citizen.invokeNative('0x8F8C84363810691A', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9050DF2C53801208 | Since: 1207
 */
export function _0x9050DF2C53801208(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x9050DF2C53801208', _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x908BB14BCE85C80E | Since: 1207
 */
export function _0x908BB14BCE85C80E() {
    return Citizen.invokeNative('0x908BB14BCE85C80E', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x91CB5E431F579BA1 | Since: 1207
 */
export function _0x91CB5E431F579BA1() {
    return new Vector3(Citizen.invokeNative('0x91CB5E431F579BA1', undefined));
}
/**
 * No comment provided
 *
 * Hash: 0x920684BE432875B1 | Since: 1311
 */
export function _0x920684BE432875B1() {
    return Citizen.invokeNative('0x920684BE432875B1', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x954451EA2D2120FB | Since: 1207
 */
export function _0x954451EA2D2120FB() {
    Citizen.invokeNative('0x954451EA2D2120FB', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9585FF23C4B8EDE0 | Since: 1207
 */
export function _0x9585FF23C4B8EDE0() {
    Citizen.invokeNative('0x9585FF23C4B8EDE0', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9667CCE29BFA0780 | Since: 1207
 */
export function _0x9667CCE29BFA0780() {
    Citizen.invokeNative('0x9667CCE29BFA0780', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x974DA3408DEC4E79 | Since: 1207
 */
export function _0x974DA3408DEC4E79() {
    return Citizen.invokeNative('0x974DA3408DEC4E79', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9B6A58FDB0024F12 | Since: 1207
 */
export function _0x9B6A58FDB0024F12() {
    Citizen.invokeNative('0x9B6A58FDB0024F12', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9C8F42A5D1859DC1 | Since: 1207
 */
export function _0x9C8F42A5D1859DC1() {
    Citizen.invokeNative('0x9C8F42A5D1859DC1', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA052608A12559BBB | Since: 1207
 */
export function _0xA052608A12559BBB() {
    Citizen.invokeNative('0xA052608A12559BBB', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA263ADBBC8056214 | Since: 1207
 */
export function _0xA263ADBBC8056214() {
    Citizen.invokeNative('0xA263ADBBC8056214', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA42DC7919159CCCF | Since: 1207
 */
export function _0xA42DC7919159CCCF() {
    Citizen.invokeNative('0xA42DC7919159CCCF', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA6A76D666A281F2D | Since: 1207
 */
export function _0xA6A76D666A281F2D(item) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    Citizen.invokeNative('0xA6A76D666A281F2D', undefined, item);
}
/**
 * _SET_SCENARIO_*
 *
 * Hash: 0xA7479FB665361EDB | Since: 1207
 */
export function _0xA7479FB665361EDB() {
    Citizen.invokeNative('0xA7479FB665361EDB', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA9E7672F8C6C6F74 | Since: 1207
 */
export function _0xA9E7672F8C6C6F74() {
    return Citizen.invokeNative('0xA9E7672F8C6C6F74', undefined);
}
/**
 * _SET_SCENARIO_POINT_*
 *
 * Hash: 0xADC45010BC17AF0E | Since: 1207
 */
export function _0xADC45010BC17AF0E() {
    Citizen.invokeNative('0xADC45010BC17AF0E', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB2D15D3551FE4FAE | Since: 1311
 */
export function _0xB2D15D3551FE4FAE() {
    Citizen.invokeNative('0xB2D15D3551FE4FAE', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB2F47A1AFDFCC595 | Since: 1207
 */
export function _0xB2F47A1AFDFCC595() {
    Citizen.invokeNative('0xB2F47A1AFDFCC595', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB79817DB31FF72B9 | Since: 1207
 */
export function _0xB79817DB31FF72B9() {
    Citizen.invokeNative('0xB79817DB31FF72B9', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB8E3486D107F4194 | Since: 1207
 */
export function _0xB8E3486D107F4194() {
    Citizen.invokeNative('0xB8E3486D107F4194', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBC3F847AE2C3DC65 | Since: 1207
 */
export function _0xBC3F847AE2C3DC65() {
    Citizen.invokeNative('0xBC3F847AE2C3DC65', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBD70108D01875299 | Since: 1207
 */
export function _0xBD70108D01875299() {
    return Citizen.invokeNative('0xBD70108D01875299', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBEDBE39B5FD98FD6 | Since: 1207
 */
export function _0xBEDBE39B5FD98FD6(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xBEDBE39B5FD98FD6', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xBEEFBB608D2AA68A | Since: 1207
 */
export function _0xBEEFBB608D2AA68A() {
    Citizen.invokeNative('0xBEEFBB608D2AA68A', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCE4E669400E5F8AA | Since: 1207
 */
export function _0xCE4E669400E5F8AA() {
    Citizen.invokeNative('0xCE4E669400E5F8AA', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD0ABC4EA3B5E21A0 | Since: 1311
 */
export function _0xD0ABC4EA3B5E21A0() {
    return Citizen.invokeNative('0xD0ABC4EA3B5E21A0', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD999E379265A4501 | Since: 1207
 */
export function _0xD999E379265A4501() {
    Citizen.invokeNative('0xD999E379265A4501', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDE0C8B145EA466FF | Since: 1207
 */
export function _0xDE0C8B145EA466FF() {
    Citizen.invokeNative('0xDE0C8B145EA466FF', undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDF56A2B50C04DEA4 | Since: 1207
 */
export function _0xDF56A2B50C04DEA4() {
    return Citizen.invokeNative('0xDF56A2B50C04DEA4', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDF94844D474F31E5 | Since: 1207
 */
export function _0xDF94844D474F31E5(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xDF94844D474F31E5', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xE01C8DC8EDD28D31 | Since: 1207
 */
export function _0xE01C8DC8EDD28D31() {
    Citizen.invokeNative('0xE01C8DC8EDD28D31', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE05A5D39BE6E93AF | Since: 1207
 */
export function _0xE05A5D39BE6E93AF() {
    Citizen.invokeNative('0xE05A5D39BE6E93AF', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE116F6F2DA2D777E | Since: 1207
 */
export function _0xE116F6F2DA2D777E() {
    return new Vector3(Citizen.invokeNative('0xE116F6F2DA2D777E', undefined));
}
/**
 * No comment provided
 *
 * Hash: 0xE1C105E6BBA48270 | Since: 1207
 */
export function _0xE1C105E6BBA48270() {
    return Citizen.invokeNative('0xE1C105E6BBA48270');
}
/**
 * No comment provided
 *
 * Hash: 0xE55478C5EDF70AC2 | Since: 1207
 */
export function _0xE55478C5EDF70AC2() {
    return Citizen.invokeNative('0xE55478C5EDF70AC2', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE5831AA1E2FD147C | Since: 1207
 */
export function _0xE5831AA1E2FD147C() {
    Citizen.invokeNative('0xE5831AA1E2FD147C', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE69FDA40AAC3EFC0 | Since: 1207
 */
export function _0xE69FDA40AAC3EFC0() {
    Citizen.invokeNative('0xE69FDA40AAC3EFC0', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE6A151364C600B24 | Since: 1207
 */
export function _0xE6A151364C600B24() {
    return Citizen.invokeNative('0xE6A151364C600B24', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE9225354FB7437A7 | Since: 1207
 */
export function _0xE9225354FB7437A7() {
    Citizen.invokeNative('0xE9225354FB7437A7', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE9A6400D1A0E7A55 | Since: 1207
 */
export function _0xE9A6400D1A0E7A55() {
    return Citizen.invokeNative('0xE9A6400D1A0E7A55', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEAF87DA2BE78A15B | Since: 1207
 */
export function _0xEAF87DA2BE78A15B() {
    Citizen.invokeNative('0xEAF87DA2BE78A15B', undefined, undefined);
}
/**
 * in the decompiles seems to always be paired with _CLEAR_VEHICLE_TASKS
 *
 * Hash: 0xEBA2081E0A5F4D17 | Since: 1207
 */
export function _0xEBA2081E0A5F4D17(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xEBA2081E0A5F4D17', _entity);
}
/**
 * No comment provided
 *
 * Hash: 0xEC516FE805D2CB2D | Since: 1207
 */
export function _0xEC516FE805D2CB2D() {
    Citizen.invokeNative('0xEC516FE805D2CB2D', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEFD875C2791EBEFD | Since: 1207
 */
export function _0xEFD875C2791EBEFD() {
    return Citizen.invokeNative('0xEFD875C2791EBEFD', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF718931A82EEB898 | Since: 1207
 */
export function _0xF718931A82EEB898() {
    Citizen.invokeNative('0xF718931A82EEB898');
}
/**
 * No comment provided
 *
 * Hash: 0xF948F4356F010F11 | Since: 1207
 */
export function _0xF948F4356F010F11() {
    Citizen.invokeNative('0xF948F4356F010F11', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF97F462779B31786 | Since: 1207
 */
export function _0xF97F462779B31786() {
    return Citizen.invokeNative('0xF97F462779B31786', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFA30E2254461ADEB | Since: 1207
 */
export function _0xFA30E2254461ADEB() {
    Citizen.invokeNative('0xFA30E2254461ADEB', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFDECCA06E8B81346 | Since: 1207
 */
export function _0xFDECCA06E8B81346(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xFDECCA06E8B81346', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xFE5D28B9B7837CC1 | Since: 1207
 */
export function _0xFE5D28B9B7837CC1() {
    return Citizen.invokeNative('0xFE5D28B9B7837CC1', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFF8AFCA532B500D4 | Since: 1207
 */
export function _0xFF8AFCA532B500D4() {
    Citizen.invokeNative('0xFF8AFCA532B500D4', undefined, undefined);
}
/**
 * Returns the entity coverpoint with offset.
 *
 * Hash: 0x59872EA4CBD11C56 | Since: 1207
 */
export function addCoverpointForEntity(entity, xOffset, yOffset, zOffset, heading) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x59872EA4CBD11C56', _entity, xOffset, yOffset, zOffset, heading, 0, 0, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xEB2ED1DC3AEC0654 | Since: 1207
 */
export function addCoverBlockingVolume(volume) {
    AddCoverBlockingVolume(volume, false, false, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xE8F1A5B4CED3725A | Since: 1207
 */
export function addFleeTargetCoords(ped, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    AddFleeTargetCoords(_ped, pos.x, pos.y, pos.z, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x8360C47380B6F351 | Since: 1207
 */
export function associatePropWithScenario(scenario, entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return AssociatePropWithScenario(scenario, _entity, false);
}
/**
 * Returns the signed distance along the waypoint recording from its start (first node) to the point on the recording that corresponds to coords
 * need `REQUEST_WAYPOINT_RECORDING`
 *
 * Hash: 0x3ACC128510142B9D | Since: 1207
 */
export function calculateWaypointDistanceFromStart(pos) {
    return Citizen.invokeNative('0x3ACC128510142B9D', pos.x, pos.y, pos.z);
}
/**
 * Cancels the hogtie state of a ped, releasing them from ropes or restraints.If the ped is currently hogtied on the ground, carried on a shoulder,lassoed, or tied to a horse, this native will clear the hogtie state andreturn the ped to free/normal behavior.
 *
 * Hash: 0xE2CF104ADD49D4BF | Since: 1207
 */
export function cancelPedHogtie(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xE2CF104ADD49D4BF', _ped);
}
/**
 * Clears all active tasks assigned to the specified vehicle This cancels ongoing behaviors such as TASK_VEHICLE_DRIVE_TO_DESTINATION_2, or even tasks triggered by horses pulling the vehicle when they start moving due to gunfire etc. in the decompiles seems to always be paired with `0xEBA2081E0A5F4D17`
 *
 * Hash: 0x141BC64C8D7C5529 | Since: 1207
 */
export function clearVehicles(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x141BC64C8D7C5529', _vehicle);
}
/**
 * groundSetting: 0: spawn on ground, 2 (1?): do not spawn on ground
 * p7: -1 in R* Scripts
 * Returns compositeId
 *
 * Hash: 0x5B4BBE80AD5972DC | Since: 1207
 */
export function createHerbComposites(asset, pos, heading, groundSetting) {
    if (typeof asset === 'string')
        asset = GetHashKey(asset);
    return CreateHerbComposites(asset, pos.x, pos.y, pos.z, heading, groundSetting, undefined, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x5C885E0978B6AD60 | Since: 1207
 */
export function createWaypointPath(nodes) {
    return CreateWaypointPath(undefined, nodes, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x7981037A96E7D174 | Since: 1207
 */
export function cuffPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    CuffPed(_ped);
}
/**
 * Params: p1 is always false except in script nb_egg_protector
 *
 * Hash: 0x5758B1EE0C3FD4AC | Since: 1207
 */
export function deletePatchObjectsFromHerbComposites(compositeId) {
    DeletePatchObjectsFromHerbComposites(compositeId, false);
}
/**
 * No comment provided
 *
 * Hash: 0x81948DFE4F5A0283 | Since: 1207
 */
export function deleteScenarioPoint(scenario) {
    DeleteScenarioPoint(scenario);
}
/**
 * No comment provided
 *
 * Hash: 0x36D188AECB26094B | Since: 1207
 */
export function detachCarriablePed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    DetachCarriablePed(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6EF4E31B4D5D2DA0 | Since: 1207
 */
export function disassociatePropFromScenario(scenario) {
    return DisassociatePropFromScenario(scenario);
}
/**
 * No comment provided
 *
 * Hash: 0x76E98B52369A289C | Since: 1207
 */
export function doesScenarioGroupExistHash(scenarioGroup) {
    if (typeof scenarioGroup === 'string')
        scenarioGroup = GetHashKey(scenarioGroup);
    return DoesScenarioGroupExistHash(scenarioGroup);
}
/**
 * No comment provided
 *
 * Hash: 0xEA31F199A73801D3 | Since: 1207
 */
export function doesScenarioPointHaveProps(scenario) {
    return DoesScenarioPointHaveProps(scenario);
}
/**
 * No comment provided
 *
 * Hash: 0x1ECF56C040FD839C | Since: 1207
 */
export function emitPedCarriableStruggleDirection(ped, direction) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x1ECF56C040FD839C', _ped, direction);
}
/**
 * No comment provided
 *
 * Hash: 0xBD1C3C0F271C39D3 | Since: 1207
 */
export function emitPedCarriableStruggleIntensity(ped, intensity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xBD1C3C0F271C39D3', _ped, intensity);
}
/**
 * No comment provided
 *
 * Hash: 0x6AFD84AEAA3EA538 | Since: 1207
 */
export function evaluatePedCarriableStruggleAvailable(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x6AFD84AEAA3EA538', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xE47DD64B9F02677D | Since: 1207
 */
export function findModelForItem(item) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    return FindModelForItem(item);
}
/**
 * Finds the nearest ped around the specified originPed, with optional filters for life state and predator/fish behavior
 * (all false) returns the nearest ped regardless of alive/dead state
 *
 * Hash: 0x244430C13BA5258E | Since: 1207
 */
export function findNearestPedAroundAnimal(animalPed, aliveOnly, deadOnly, preferDeadPredators) {
    const _animalPed = animalPed instanceof IPed ? animalPed.handle() : animalPed;
    return Citizen.invokeNative('0x244430C13BA5258E', _animalPed, aliveOnly, deadOnly, preferDeadPredators);
}
/**
 * Finds all scenario points of a given type that lie inside a Volume and writes them into an Itemset Typically used with `CREATE_ITEMSET` Iterate results with `GET_ITEMSET_SIZE` and `GET_INDEXED_SCENARIO_POINT_INDEX_IN_ITEMSET`
 *
 * Hash: 0xB8E213D02F37947D | Since: 1207
 */
export function findScenarioAllPointsInVolumeOfType(volume, itemset, scenarioType) {
    if (typeof scenarioType === 'string')
        scenarioType = GetHashKey(scenarioType);
    return Citizen.invokeNative('0xB8E213D02F37947D', volume, itemset, scenarioType, 0, 0, 0, 0);
}
/**
 * Returns a scenario point handle of the given scenario type that is associated with / found near the specified object. Useful for attached scenarios (e.g., ransackable lockboxes on a prop)
 *
 * Hash: 0xD508FA229F1C4900 | Since: 1207
 */
export function findScenarioAtObjectOfType(_object, pos, scenarioType, radius) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    if (typeof scenarioType === 'string')
        scenarioType = GetHashKey(scenarioType);
    return Citizen.invokeNative('0xD508FA229F1C4900', __object, pos.x, pos.y, pos.z, scenarioType, radius);
}
/**
 * Attempts to finish/advance a ped’s ongoing scenario transition (between scenario clips/anims). Returns true if the ped is in a scenario transition and the given value pushes it forward, otherwise returns false
 *
 * Hash: 0x90703A8F75EE4ABD | Since: 1207
 */
export function finishScenarioTransition(ped, phaseOrDelta) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x90703A8F75EE4ABD', _ped, phaseOrDelta);
}
/**
 * Forces the specified animal/ped to have (or not have) its sampled state flag set.Acts as the setter counterpart to:_HAS_PED_ANIMAL_SAMPLED
 *
 * Hash: 0xF3C3503276F4A034 | Since: 1436
 */
export function forceAnimalSampled(animal, toggle) {
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    Citizen.invokeNative('0xF3C3503276F4A034', _animal, toggle);
}
/**
 * Returns the seat index currently set as the driving seat for the specified vehicle vehicle: The vehicle to query. Returns: Seat index (default = -1 for driver seat, custom index if changed with SET_DRIVING_SEAT)
 *
 * Hash: 0xE62754D09354F6CF | Since: 1207
 */
export function getDrivingSeat(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0xE62754D09354F6CF', _vehicle);
}
/**
 * Flowers, Stalks or whatever the composite has
 *
 * Hash: 0x96C6ED22FB742C3E | Since: 1207
 */
export function getHerbCompositeNumEntities(compositeId) {
    return GetHerbCompositeNumEntities(compositeId);
}
/**
 * No comment provided
 *
 * Hash: 0x4687E69D258BBE41 | Since: 1207
 */
export function getHogtieEscapeTimer(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetHogtieEscapeTimer(_ped);
}
/**
 * returns an int in decompiles usually 0 or 1
 *
 * Hash: 0x5952DFA38FA529FE | Since: 1232
 */
export function getHoldToReelSettingEnabled() {
    return Citizen.invokeNative('0x5952DFA38FA529FE');
}
/**
 * Returns the horse entity currently in a revivable state and within the revive prompt range (if any)
 *
 * Hash: 0x351F74ED6177EBE7 | Since: 1207
 */
export function getHorseInRevivalState() {
    return Citizen.invokeNative('0x351F74ED6177EBE7');
}
/**
 * item hashes: PRIMARYITEM, P_MUGCOFFEE01X_PH_R_HAND, P_BOTTLEBEER01X_PH_R_HAND
 * http://prntscr.com/1qtp3bz
 * https://github.com/femga/rdr3_discoveries/tree/master/tasks/TASK_ITEM_INTERACTION
 *
 * Hash: 0x05A0100EA714DB68 | Since: 1207
 */
export function getItemInteractionEntityFromPed(ped, item) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof item === 'string')
        item = GetHashKey(item);
    return GetItemInteractionEntityFromPed(_ped, item);
}
/**
 * No comment provided
 *
 * Hash: 0xED1F514AF4732258 | Since: 1207
 */
export function getLedHorseFromPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetLedHorseFromPed(_ped);
}
/**
 * Fills an output array with scenario points linked (chained) to a given parent scenario point. Returns the number of linked points found. Writes up to maxPoints and zeroes remaining entries. Useful for flows like chained put-down scenarios.
 *
 * Hash: 0xE7BBC4E56B989449 | Since: 1207
 */
export function getLinkedScenarioPoints(scenarioPoint, outPoints, maxPoints) {
    return Citizen.invokeNative('0xE7BBC4E56B989449', scenarioPoint, outPoints, maxPoints);
}
/**
 * Returns the current progress of the (Break Free) prompt when the specified ped is hogtied or knocked out.  The value increases as the player spams the prompt key until it reaches 1.0, at which point the ped breaks free.
 *
 * Hash: 0x03D741CB4052E26C | Since: 1232
 */
export function getPedBreakFreeProgress(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x03D741CB4052E26C', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x1948BBE561A2375A | Since: 1207
 */
export function getPedIsIgnoringDeadBodies(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedIsIgnoringDeadBodies(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x5BA659955369B0E2 | Since: 1207
 */
export function getPedUsingScenarioPoint(scenario) {
    return GetPedUsingScenarioPoint(scenario);
}
/**
 * returns the total number of compartments (drawers, lids, etc.) the specified scenario container entity has for example, a chest has 1 compartment, while a cabinet with 3 drawers returns 3.
 *
 * Hash: 0x640A602946A8C972 | Since: 1207
 */
export function getScenarioContainerNumCompartments(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x640A602946A8C972', _entity);
}
/**
 * Returns the number of currently open compartments for the specified scenario container entity if the container has closeable compartments (like drawers), this will return how many of them are currently open  if the container is not closeable (like a chest or safe that cannot be closed again), it will return 0
 *
 * Hash: 0x849791EBBDBA0362 | Since: 1207
 */
export function getScenarioContainerNumOpenCompartments(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x849791EBBDBA0362', _entity);
}
/**
 * Returns m_eContainerState
 *
 * Hash: 0xB219612B5568E9EC | Since: 1207
 */
export function getScenarioContainerOpeningState(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetScenarioContainerOpeningState(_entity);
}
/**
 * Returns the total number of lootable items currently inside the specified scenario container entity.This value decreases as items are looted. Before opening, it may return 0 because contents are not always loaded until the container is opened
 *
 * Hash: 0x01AF8A3729231A43 | Since: 1207
 */
export function getScenarioContainerRemainingLootCount(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x01AF8A3729231A43', _entity);
}
/**
 * Params: p1 is always true in R* Scripts
 *
 * Hash: 0xA8452DD321607029 | Since: 1207
 */
export function getScenarioPointCoords(scenario) {
    return new Vector3(GetScenarioPointCoords(scenario, false));
}
/**
 * Note: The current name for this native is the old name of 0x295514F198EFD0CA
 * Old name for this native: _GET_ENTITY_SCENARIO_POINT_IS_ATTACHED_TO
 *
 * Hash: 0x7467165EE97D3C68 | Since: 1207
 */
export function getScenarioPointEntity(scenario) {
    return GetScenarioPointEntity(scenario);
}
/**
 * Params: p1 is always true in R* Scripts
 *
 * Hash: 0xB93EA7184BAA85C3 | Since: 1207
 */
export function getScenarioPointHeading(scenario) {
    return GetScenarioPointHeading(scenario, false);
}
/**
 * No comment provided
 *
 * Hash: 0xDF7993356F52359A | Since: 1207
 */
export function getScenarioPointPedIsUsing(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetScenarioPointPedIsUsing(_ped, false);
}
/**
 * No comment provided
 *
 * Hash: 0x6718F40313A2B5A6 | Since: 1207
 */
export function getScenarioPointRadius(scenario) {
    return GetScenarioPointRadius(scenario);
}
/**
 * No comment provided
 *
 * Hash: 0xA92450B5AE687AAF | Since: 1207
 */
export function getScenarioPointType(scenario) {
    return GetScenarioPointType(scenario);
}
/**
 * No comment provided
 *
 * Hash: 0x2D0571BB55879DA2 | Since: 1207
 */
export function getScenarioPointTypePedIsUsing(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetScenarioPointTypePedIsUsing(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xA710DC5D25F8B942 | Since: 1207
 */
export function getScriptActionTime(ped, task) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof task === 'string')
        task = GetHashKey(task);
    return GetScriptTaskActionTime(_ped, task);
}
/**
 * Fishing Research: https://pastebin.com/NmK5ZLVs
 * Only used in R* Scripts fishing_core and av_fishing_river
 *
 * Hash: 0xF3735ACD11ACD500 | Since: 1207
 */
export function getFishing(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetTaskFishing(_ped);
}
/**
 * Returns hash of the underlying move network def, see move_networks.xml
 * https://alloc8or.re/rdr3/doc/misc/move_networks.txt
 *
 * Hash: 0xCACC2F9D994504B7 | Since: 1207
 */
export function getMoveNetworkId(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetTaskMoveNetworkId(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x844CEEE428EA35B0 | Since: 1207
 */
export function getMoveNetworkPhaseFloat(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetTaskMoveNetworkPhaseFloat(_ped);
}
/**
 * Returns 0.0-1.0 progress for the current mount-leap task, or -1.0f if no leap is active.
 *
 * Hash: 0x6BA606AB3A83BC4D | Since: 1207
 */
export function getPedMountLeapProgress(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x6BA606AB3A83BC4D', _ped);
}
/**
 * Returns a coarse state for the mount-leap task (jumping from your mount onto another mount/wagon/train).
 * -1 = no task; 0 = in-air/ongoing; 1 = boarded/mounted; 2 = boarded rear train trailer
 * Use with _GET_TASK_PED_MOUNT_LEAP_PROGRESS for timing
 *
 * Hash: 0x9420FB11B8D77948 | Since: 1207
 */
export function getPedMountLeapState(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x9420FB11B8D77948', _ped);
}
/**
 * Returns the maximum (target) whistle/call distance associated with the next horse bonding level.
 * Used together with the current level's minimum to derive an effective whistle range based on the horse's bonding progress toward the next rank
 *
 * Hash: 0x78D8C1D4EB80C588 | Since: 1207
 */
export function getWhistleRangeMaxForBondingLevel(bondingLevel) {
    return Citizen.invokeNative('0x78D8C1D4EB80C588', bondingLevel);
}
/**
 * Returns the minimum (baseline) whistle/call distance for the given horse bonding level.
 * This value represents the lower bound used when computing whether a horse is considered near or far relative to the player, and is interpolated against the next level's max.
 *
 * Hash: 0xEB67D4E056C85A81 | Since: 1207
 */
export function getWhistleRangeMinForBondingLevel(bondingLevel) {
    return Citizen.invokeNative('0xEB67D4E056C85A81', bondingLevel);
}
/**
 * list of carriable configs  https://gist.github.com/outsider31000/6272561fb992ccff80efbd130e0e9b9f
 *
 * Hash: 0xB8F52A3F84A7CC59 | Since: 1207
 */
export function hasCarriableConfigHashLoaded(carriableConfig) {
    if (typeof carriableConfig === 'string')
        carriableConfig = GetHashKey(carriableConfig);
    return Citizen.invokeNative('0xB8F52A3F84A7CC59', carriableConfig);
}
/**
 * Returns true if the specified ped (animal) has been flagged as sampled. This is presumed to read a boolean flag set by:`_FORCE_ANIMAL_SAMPLED`
 *
 * Hash: 0x7CB99FADDE73CD1B | Since: 1311
 */
export function hasPedAnimalBeenSampled(animal) {
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    return Citizen.invokeNative('0x7CB99FADDE73CD1B', _animal);
}
/**
 * Returns true if the given entity currently has an active directed task that is, a task with a specific external objective (coordinate, entity, vehicle, or combat target)
 * Known to return true for:
 * TaskGoToCoordAnyMeans(ped, ...)
 * TaskGoToEntity(ped, target, ...)
 * TaskCombatPed(ped, targetPed, ...)
 * TaskWarpPedIntoVehicle(ped, vehicle)
 *
 * Hash: 0x9FF5F9B24E870748 | Since: 1207
 */
export function hasPedDirectedActive(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x9FF5F9B24E870748', _entity);
}
/**
 * old name _IS_HAT_BEING_PICKED_UP_2
 * Returns whether a carriable hat equip request is currently active Usually becomes true right after `_REQUEST_CARRIABLE_HAT_EQUIP_TO_PED` is called
 *
 * Hash: 0x4ECCC2815CA79AE2 | Since: 1207
 */
export function isCarriableHatPickupRequestActive(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return IsHatBeingPickedUp2(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x6C50B9DCCCA70023 | Since: 1207
 */
export function isEntityRevivable(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x6C50B9DCCCA70023', _ped);
}
/**
 * new name _IS_CARRIABLE_HAT_PICKUP_AVAILABLE, Checks if a carriable hat object on the ground can currently be picked up
 *
 * Hash: 0x11CD066F54DA0133 | Since: 1207
 */
export function isHatBeingPickedUp(hatObject) {
    const _hatObject = hatObject instanceof IObject ? hatObject.handle() : hatObject;
    return IsHatBeingPickedUp(_hatObject);
}
/**
 * No comment provided
 *
 * Hash: 0xA9CC7856D52DBD25 | Since: 1207
 */
export function isPedArrestingAnyPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedArrestingAnyPed(_ped);
}
/**
 * returns true if the specified mount (horse) is currently being led by the player, otherwise false.
 *
 * Hash: 0xAC5045AB7F1A34FD | Since: 1207
 */
export function isPedBeingLed(mount) {
    const _mount = mount instanceof IEntity ? mount.handle() : mount;
    return Citizen.invokeNative('0xAC5045AB7F1A34FD', _mount);
}
/**
 * No comment provided
 *
 * Hash: 0xC8B29D18022EA2B7 | Since: 1207
 */
export function isPedDuelling(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedDuelling(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xEFC4303DDC6E60D3 | Since: 1207
 */
export function isPedLeadingHorse(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedLeadingHorse(_ped);
}
/**
 * Returns true while the ped has cast the fishing line and is waiting for a fish to bite Once the ped hooks a fish and enters the struggle/reeled-in phase, this returns false.
 *
 * Hash: 0xB520DBDA7FCF573F | Since: 1207
 */
export function isPedWaitingOnFishToBite(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0xB520DBDA7FCF573F', _ped);
}
/**
 * Returns true if a revivable horse prompt is currently visibled (i.e., visible and interactable) near the player.This indicates that there is a downed horse nearby which can be revived
 *
 * Hash: 0x756C7B4C43DF0422 | Since: 1207
 */
export function isReviveHorsePromptVisible() {
    return Citizen.invokeNative('0x756C7B4C43DF0422', false);
}
/**
 * No comment provided
 *
 * Hash: 0xDCC374913DE6AAA6 | Since: 1207
 */
export function isScenarioGroupEnabledHash(scenarioGroup) {
    if (typeof scenarioGroup === 'string')
        scenarioGroup = GetHashKey(scenarioGroup);
    return IsScenarioGroupEnabledHash(scenarioGroup);
}
/**
 * Checks whether a specified scenario is currently being used (actively played) by any entity (player or ped). Returns true if the scenario is already occupied, otherwise false.
 *
 * Hash: 0x1ACBC313966C21F3 | Since: 1436
 */
export function isScenarioInUse(scenarioHash) {
    if (typeof scenarioHash === 'string')
        scenarioHash = GetHashKey(scenarioHash);
    return Citizen.invokeNative('0x1ACBC313966C21F3', scenarioHash);
}
/**
 * No comment provided
 *
 * Hash: 0x0CC36D4156006509 | Since: 1207
 */
export function isScenarioPointActive(scenario) {
    return IsScenarioPointActive(scenario);
}
/**
 * No comment provided
 *
 * Hash: 0x8569C38D2FB80650 | Since: 1207
 */
export function isScenarioPointFlagSet(scenario, flag) {
    return IsScenarioPointFlagSet(scenario, flag);
}
/**
 * https://gist.github.com/outsider31000/6272561fb992ccff80efbd130e0e9b9f carriable config list
 *
 * Hash: 0xFF745B0346E19E2C | Since: 1207
 */
export function loadCarriableConfigHash(hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    Citizen.invokeNative('0xFF745B0346E19E2C', hash);
}
/**
 * No comment provided
 *
 * Hash: 0x78B4567E18B54480 | Since: 1207
 */
export function makeObjectCarriable(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    MakeObjectCarriable(__object);
}
/**
 * Sets the AI travel speed for a mount (horse). Affects how fast the horse's AI will move when being controlled by AI logic (not player input), e.g. during escorts, flee, wander, or scripted tasks
 * https://youtu.be/aupII2O9vT8
 *
 * Hash: 0xBAAB791AA72C2821 | Since: 1207
 */
export function pedApplyFollowRoadSpeedOverride(ped, speed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xBAAB791AA72C2821', _ped, speed);
}
/**
 * No comment provided
 *
 * Hash: 0x1A52076D26E09004 | Since: 1207
 */
export function pedFishingrodHookEntity(ped, entity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    PedFishingrodHookEntity(_ped, _entity);
}
/**
 * Used with 'P_BODYPARTARMFLOAT02X' model in fishing_core.c
 *
 * Hash: 0xCE71C2F9BAA3F975 | Since: 1207
 */
export function pedFishingrodHookObject(ped, _object) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const __object = _object instanceof IObject ? _object.handle() : _object;
    PedFishingrodHookObject(_ped, __object);
}
/**
 * No comment provided
 *
 * Hash: 0x02EBBB3989B7E695 | Since: 1207
 */
export function pedIsInScenarioBase(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return PedIsInScenarioBase(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x6AFDA2264925BD11 | Since: 1207
 */
export function removeCarriableConfig(carriableConfig) {
    if (typeof carriableConfig === 'string')
        carriableConfig = GetHashKey(carriableConfig);
    Citizen.invokeNative('0x6AFDA2264925BD11', carriableConfig);
}
/**
 * Removes the TaskCarriable association for the given entity. If a ped is currently carrying this entity, it will be **dropped** immediately. If it is not being carried, the carriable link/state created via TaskCarriable(...) is cleared
 *
 * Hash: 0x9EBD34958AB6F824 | Since: 1207
 */
export function removeCarriable(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x9EBD34958AB6F824', _entity);
}
/**
 * Requests that the given carriable hat be assigned for equip by the ped. After success, `_IS_CARRIABLE_HAT_PICKUP_REQUEST_ACTIVE` will return true
 *
 * Hash: 0x9ADDBB9242179D56 | Since: 1207
 */
export function requestCarriableHatEquipToPed(_object, ped) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x9ADDBB9242179D56', __object, _ped);
}
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/objects/composites
 *
 * Hash: 0x73F0D0327BFA0812 | Since: 1207
 */
export function requestHerbCompositeAsset(asset) {
    if (typeof asset === 'string')
        asset = GetHashKey(asset);
    return RequestHerbCompositeAsset(asset);
}
/**
 * No comment provided
 *
 * Hash: 0x2E20878FD208A68E | Since: 1207
 */
export function resetScenarioForEntity(scenario, entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ResetScenarioForEntity(scenario, _entity);
}
/**
 * Resets/clears all scenario entities within the given spherical area
 *
 * Hash: 0x4161648394262FDF | Since: 1207
 */
export function resetScenarioPointsInArea(pos, radius) {
    Citizen.invokeNative('0x4161648394262FDF', pos.x, pos.y, pos.z, radius);
}
/**
 * No comment provided
 *
 * Hash: 0x5A40040BB5AE3EA2 | Since: 1207
 */
export function resetScenarioScript(scenario) {
    ResetScenarioScript(scenario);
}
/**
 * Set a ped's boat-local offset and/or facing (degrees). Boats only. Flags: 0=apply both; 1=heading only (lock offset); 2=offset only (lock heading); 3=apply neither.
 *
 * Hash: 0x517D01BF27B682D1 | Since: 1207
 */
export function setAboardPedBoatPose(ped, boat, offsetX, offsetY, offsetZ, heading, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _boat = boat instanceof IEntity ? boat.handle() : boat;
    Citizen.invokeNative('0x517D01BF27B682D1', _ped, _boat, offsetX, offsetY, offsetZ, heading, flags);
}
/**
 * Enables or disables the interaction prompt for a given carriable config (e.g. DEAD_CARRIABLE_HUMAN).
 *
 * Hash: 0x816A3ACD265E2297 | Since: 1207
 */
export function setCarriableConfigPromptEnabled(carriableConfig, toggle) {
    if (typeof carriableConfig === 'string')
        carriableConfig = GetHashKey(carriableConfig);
    Citizen.invokeNative('0x816A3ACD265E2297', carriableConfig, toggle);
}
/**
 * Enables or disables the contextual Pick Up prompt for a carriable entity
 * object — A carriable entity (animal carcass, pelt bundle, sack/crate flagged as carriable, etc.)
 *
 * Hash: 0xA21AA2F0C2180125 | Since: 1207
 */
export function setCarriablePickupPromptEnabled(_object, enabled) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0xA21AA2F0C2180125', __object, enabled);
}
/**
 * Sets which seat index acts as the driver seat for driving tasks
 *
 * Hash: 0x4BA972D0E5AD8122 | Since: 1207
 */
export function setDrivingSeat(vehicle, seatIndex) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x4BA972D0E5AD8122', _vehicle, seatIndex);
}
/**
 * Baits: p_fishHook02x, p_baitBread01x, p_baitCorn01x, p_baitCheese01x, p_baitWorm01x, p_baitCricket01x, p_crawdad01x, p_finisheDragonfly01x, p_finisdFishlure01x, p_finishdCrawd01x, p_finisheDragonflyLegendary01x, p_finisdFishlureLegendary01x, p_finishdCrawdLegendary01x, p_lgoc_spinner_v4
 *
 * Hash: 0x9B0C7FA063E67629 | Since: 1207
 */
export function setFishingBait(ped, withoutBuoy, instantly) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetFishingBait(_ped, withoutBuoy, instantly);
}
/**
 * Sets the time it takes for a hogtied ped to escape
 * -1.0f for ped to never escape
 *
 * Hash: 0xAB591AE6B48B913E | Since: 1207
 */
export function setHogtieEscapeTimer(ped, time) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetHogtieEscapeTimer(_ped, time);
}
/**
 * Configures how an intimidated/hogtied ped faces the player If useLimits is false (0), the ped always fully faces the player.If useLimits is true (1), the ped’s facing is restricted within the given angle range [minAngle, maxAngle]
 *
 * Hash: 0x0FE797DD9F70DFA6 | Since: 1207
 */
export function setIntimidatedFacingAngle(ped, useLimits, minAngle, maxAngle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x0FE797DD9F70DFA6', _ped, useLimits, minAngle, maxAngle);
}
/**
 * All Interaction states
 * https://github.com/femga/rdr3_discoveries/tree/master/tasks/TASK_ITEM_INTERACTION#-4-item_interaction_state_name--item_interaction_propid--1
 *
 * Hash: 0xB35370D5353995CB | Since: 1207
 */
export function setItemInteractionState(ped, itemInteractionState) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof itemInteractionState === 'string')
        itemInteractionState = GetHashKey(itemInteractionState);
    Citizen.invokeNative('0xB35370D5353995CB', _ped, itemInteractionState, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x34C0010188D7C54A | Since: 1207
 */
export function setPedClearAimingInTheAir(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedClearAimingInTheAir(_ped, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x013A7BA5015C1372 | Since: 1207
 */
export function setPedIgnoreDeadBodies(ped, toggle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedIgnoreDeadBodies(_ped, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x7C015D8BCEC72CF4 | Since: 1207
 */
export function setPedPathAvoidTraffic(ped, avoidTraffic) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x7C015D8BCEC72CF4', _ped, avoidTraffic);
}
/**
 * _SET_PED_PATH_P*
 *
 * Hash: 0x70F7A1EAB1AE3AA8 | Since: 1232
 */
export function setPedPathLadderCostModifier(ped, modifier) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathLadderCostModifier(_ped, modifier);
}
/**
 * No comment provided
 *
 * Hash: 0x9DE63896B176EA94 | Since: 1207
 */
export function setPedPathMayEnterDeepWater(ped, mayEnterDeepWater) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPathMayEnterDeepWater(_ped, mayEnterDeepWater);
}
/**
 * No comment provided
 *
 * Hash: 0x06ECF3925BC2ABAE | Since: 1311
 */
export function setPedPathMayUseSlidingSurfaces(ped, useSlidingSurfaces) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x06ECF3925BC2ABAE', _ped, useSlidingSurfaces);
}
/**
 * No comment provided
 *
 * Hash: 0x42CFD8FD8CC8DC69 | Since: 1207
 */
export function setPedPathNeverUseInteriors(ped, neverUseInteriors) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x42CFD8FD8CC8DC69', _ped, neverUseInteriors);
}
/**
 * No comment provided
 *
 * Hash: 0x216343750545A486 | Since: 1207
 */
export function setPedPathPreferHorseWalkable(ped, preferHorseWalkable) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x216343750545A486', _ped, preferHorseWalkable, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xC6170856E54557B2 | Since: 1207
 */
export function setPedPathPreferStayInWater(ped, preferStayInWater) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xC6170856E54557B2', _ped, preferStayInWater, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x12990818C1D35886 | Since: 1207
 */
export function setPedPathPreferToAvoidFoliage(ped, preferAvoidFoliage) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x12990818C1D35886', _ped, preferAvoidFoliage, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x8BB283A7888AD1AD | Since: 1207
 */
export function setPedPathPreferToAvoidMud(ped, preferAvoidMud) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x8BB283A7888AD1AD', _ped, preferAvoidMud, 0);
}
/**
 * Opens/closes containers: ChestDugUp
 *
 * Hash: 0x188F8071F244B9B8 | Since: 1207
 */
export function setScenarioContainerOpeningState(entity, open) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetScenarioContainerOpeningState(_entity, open);
}
/**
 * No comment provided
 *
 * Hash: 0x9925EDDB6EAB88CD | Since: 1207
 */
export function setScenarioGroupEnabledHash(scenarioGroup, toggle) {
    if (typeof scenarioGroup === 'string')
        scenarioGroup = GetHashKey(scenarioGroup);
    SetScenarioGroupEnabledHash(scenarioGroup, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xEEE4829304F93EEE | Since: 1207
 */
export function setScenarioPointActive(scenario, active) {
    SetScenarioPointActive(scenario, active);
}
/**
 * No comment provided
 *
 * Hash: 0x2056AB38DF06825C | Since: 1207
 */
export function setScenarioPointCoords(scenario, pos) {
    SetScenarioPointCoords(scenario, pos.x, pos.y, pos.z, false);
}
/**
 * flag: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CScenarioPointFlags__Flags
 *
 * Hash: 0x5AF19B6CC2115D34 | Since: 1207
 */
export function setScenarioPointFlag(scenario, flag, value) {
    SetScenarioPointFlag(scenario, flag, value);
}
/**
 * No comment provided
 *
 * Hash: 0xD3A0DA8F91612C6E | Since: 1207
 */
export function setScenarioPointHeading(scenario, heading) {
    SetScenarioPointHeading(scenario, heading, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC47D9080A9A8856A | Since: 1207
 */
export function setScenarioPointRadius(scenario, radius) {
    SetScenarioPointRadius(scenario, radius);
}
/**
 * No comment provided
 *
 * Hash: 0xD00E50E673802D71 | Since: 1207
 */
export function setScenarioTypeEnabledHash(scenarioType, toggle) {
    if (typeof scenarioType === 'string')
        scenarioType = GetHashKey(scenarioType);
    SetScenarioTypeEnabledHash(scenarioType, toggle);
}
/**
 * Only used in R* Scripts fishing_core and av_fishing_river
 *
 * Hash: 0xF3735ACD11ACD501 | Since: 1207
 */
export function setFishing(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetTaskFishing(_ped, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x099D4A855D53B03B | Since: 1207
 */
export function setMoveNetworkSignalFloat2(ped, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetTaskMoveNetworkSignalFloat2(_ped, value);
}
/**
 * No comment provided
 *
 * Hash: 0x4662BFE01938D98D | Since: 1207
 */
export function setMoveNetworkSignalVector(ped, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return SetTaskMoveNetworkSignalVector(_ped, pos.x, pos.y, pos.z);
}
/**
 * Swaps the horse drawn wagon/coach reings control between the ped and their adjacent front-seat partner
 *
 * Hash: 0xFC7F71CF49F70B6B | Since: 1207
 */
export function swapReinsForPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xFC7F71CF49F70B6B', _ped);
}
/**
 * Transfers the driving reins/control of a vehicle (e.g., wagon/coach) to another occupant when there is more than one ped inside. If instant is true, the handover happens instantly
 *
 * Hash: 0xE01F55B2896F6B37 | Since: 1207
 */
export function swapReinsForVehicle(vehicle, instant) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xE01F55B2896F6B37', _vehicle, instant);
}
/**
 * No comment provided
 *
 * Hash: 0x30A768C30D385EC5 | Since: 1207
 */
export function animalBleedOut(ped, killer, flee, weaponHash, boneId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _killer = killer instanceof IPed ? killer.handle() : killer;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    TaskAnimalBleedOut(_ped, _killer, flee, weaponHash, 0, boneId);
}
/**
 * No comment provided
 *
 * Hash: 0xE53D17AD837CBF7C | Since: 1207
 */
export function boardVehicle(ped, vehicle, speed, boardingFlags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskBoardVehicle(_ped, _vehicle, undefined, undefined, speed, boardingFlags);
}
/**
 * No comment provided
 *
 * Hash: 0xE41A09C8DDFF7AA4 | Since: 1207
 */
export function boardVehicle2(ped, speed, boardingFlags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskBoardVehicle2(_ped, undefined, undefined, speed, boardingFlags);
}
/**
 * No comment provided
 *
 * Hash: 0xDF1D85BCAF60D537 | Since: 1207
 */
export function climb2(ped, heading) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskClimb2(_ped, heading);
}
/**
 * Coords: volume coords used in R* Script smuggler2
 * p4/p5 = 0 in R* Scripts previous name TASK_COMBAT_PED_3
 *
 * Hash: 0xC624414FA748B9BA | Since: 1207
 */
export function combatPedAtCoords(ped, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskCombatPed3(_ped, pos.x, pos.y, pos.z, 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x81D16C4FF3A77ADF | Since: 1207
 */
export function cutFreeHogtiedTargetPed(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskCutFreeHogtiedTargetPed(_ped, _targetPed);
}
/**
 * No comment provided
 *
 * Hash: 0x525421A507216084 | Since: 1207
 */
export function cutFreeHogtiedTargetPed2(ped, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskCutFreeHogtiedTargetPed2(_ped, _targetPed, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xA7C6854BB5A4192A | Since: 1207
 */
export function disembarkVehicle(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskDisembarkVehicle(undefined, _vehicle, 0, undefined, 0, undefined);
}
/**
 * Triggers the 'action / flourish' sub-clip of the ped's currently playing emote.
 *
 * Hash: 0x6A1AF481407BF6E9 | Since: 1207
 */
export function emoteAction(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x6A1AF481407BF6E9', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xBDFEEB7600BCD938 | Since: 1207
 */
export function emoteOutro(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskEmoteOutro(_ped);
}
/**
 * Immediately applies the given hat to the ped’s head without any animation Directly equips the hat, skipping the pickup anim flow
 *
 * Hash: 0xAA0AF6025160243A | Since: 1207
 */
export function equipHat(_object, ped) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskEquipHat(__object, _ped);
}
/**
 * fleeType: see TASK_FLEE_COORD
 *
 * Hash: 0x6879FF208ED87F2A | Since: 1207
 */
export function fleeFromCoord() {
    TaskFleeFromCoord(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * fleeType: see TASK_FLEE_COORD
 *
 * Hash: 0x7B74D8EEDE9B5727 | Since: 1207
 */
export function fleeFromPed(ped, fleeFromTarget, pos, distance, targetPed) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _fleeFromTarget = fleeFromTarget instanceof IPed ? fleeFromTarget.handle() : fleeFromTarget;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskFleeFromPed(_ped, _fleeFromTarget, pos.x, pos.y, pos.z, distance, 0, 0, 0, _targetPed);
}
/**
 * Forces a ped to attack a target with throwable or projectile weapons (like bows, throwing knives, tomahawks, dynamite) for a specified duration while aiming
 * With a bow: the ped keeps firing arrows continuously until durationMs expires (as long as the aiming condition is maintained).With other throwables: throws are generally single-use (one per animation cycle).Excluded weapons: lasso and bolas
 *
 * Hash: 0x2416EC2F31F75266 | Since: 1207
 */
export function forceThrowableAtEntityWhileAiming(ped, targetEntity, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetEntity = targetEntity instanceof IEntity ? targetEntity.handle() : targetEntity;
    Citizen.invokeNative('0x2416EC2F31F75266', _ped, _targetEntity, duration, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x1FC9B33976BACD6C | Since: 1207
 */
export function guardAssignedDefensiveArea2(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGuardAssignedDefensiveArea2(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x648B75D44930D6BD | Since: 1207
 */
export function intimidated(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskIntimidated(undefined, _ped, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x933ACC1A1771A288 | Since: 1207
 */
export function intimidated2(victim, attacker, everyFrame, flag) {
    const _victim = victim instanceof IPed ? victim.handle() : victim;
    const _attacker = attacker instanceof IPed ? attacker.handle() : attacker;
    return TaskIntimidated2(_victim, _attacker, 0, false, false, everyFrame, false, false, flag);
}
/**
 * No comment provided
 *
 * Hash: 0x72F52AA2D2B172CC | Since: 1207
 */
export function itemInteraction2(ped, propNameGxt, prop, propId, itemInteractionState) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _prop = prop instanceof IObject ? prop.handle() : prop;
    if (typeof propNameGxt === 'string')
        propNameGxt = GetHashKey(propNameGxt);
    if (typeof propId === 'string')
        propId = GetHashKey(propId);
    if (typeof itemInteractionState === 'string')
        itemInteractionState = GetHashKey(itemInteractionState);
    TaskItemInteraction2(_ped, propNameGxt, _prop, propId, itemInteractionState, 0, undefined, 0);
}
/**
 * Params: p3, p4, p5, p6: 0, 0, 0, -1.0f in R* Scripts
 *
 * Hash: 0xD61D5E1AD9876DEB | Since: 1207
 */
export function itemInteraction3(ped, item) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof item === 'string')
        item = GetHashKey(item);
    return TaskItemInteraction3(_ped, item, undefined, undefined, undefined, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x91083103137D7254 | Since: 1207
 */
export function jump2(ped, pos, entity) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    TaskJump2(_ped, pos.x, pos.y, pos.z, _entity);
}
/**
 * Sets the knockout timer for a ped that is currently knocked out (See Task_Knocked_Out or Task_Knocked_Out_And_Hogtied). p1 is the duration in seconds.
 *
 * Hash: 0xFFB520A3E16F7B7B | Since: 1207
 */
export function knockedOutSetDuration(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xFFB520A3E16F7B7B', _ped, 0);
}
/**
 * Sets an unknown float tuning setting for a ped that is currently in the knocked-out state.
 *
 * Hash: 0x8B1FDF63C3193EDA | Since: 1207
 */
export function knockedOutSetTuning(ped, tuning) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x8B1FDF63C3193EDA', _ped, tuning);
}
/**
 * No comment provided
 *
 * Hash: 0x964B06C88E4C86DB | Since: 1207
 */
export function patrol2() {
    TaskPatrol2(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * Similar to 0xB31A277C1AC7B7FF but checks if the ped's inventory contains the specified emote kit.
 *
 * Hash: 0x884E3436CC1F41DD | Since: 1207
 */
export function playEmote(ped, emoteType, playbackMode, emote, isSecondaryTask, canBreakOut, disableEarlyOutAnimTag, ignoreInvalidMainTask, destroyProps) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof emote === 'string')
        emote = GetHashKey(emote);
    TaskPlayEmote(_ped, emoteType, playbackMode, emote, isSecondaryTask, canBreakOut, disableEarlyOutAnimTag, ignoreInvalidMainTask, destroyProps);
}
/**
 * Orders the ped to point at the given entity (finger/upper-body point), similar to task point entity
 *
 * Hash: 0xF40A109B4B79A848 | Since: 1207
 */
export function pointAtEntity(ped, targetEntity, durationMs) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetEntity = targetEntity instanceof IEntity ? targetEntity.handle() : targetEntity;
    Citizen.invokeNative('0xF40A109B4B79A848', _ped, _targetEntity, durationMs);
}
/**
 * No comment provided
 *
 * Hash: 0xDF8A5855B9F9A97B | Since: 1207
 */
export function putPedDirectlyIntoCoverFromCoords(ped, pos, fromX, fromY, fromZ, timeout) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPutPedDirectlyIntoCoverFromCoords(_ped, pos.x, pos.y, pos.z, fromX, fromY, fromZ, timeout, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * Takes scenario point handle instead of hash
 *
 * Hash: 0xA917E39F2CEFD215 | Since: 1207
 */
export function startScenarioInPlace2(ped, scenarioPoint, idleForever) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return TaskStartScenarioInPlace2(_ped, scenarioPoint, 0, false, 0, idleForever);
}
/**
 * No comment provided
 *
 * Hash: 0x7282356DFF6B5A51 | Since: 1207
 */
export function throwProjectile2() {
    TaskThrowProjectile2(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x322BFDEA666E2B0E | Since: 1207
 */
export function useNearestScenarioToCoord(ped, pos, distance, duration) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskUseNearestScenarioToCoord(_ped, pos.x, pos.y, pos.z, distance, duration, false, false, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x0F6641449DD86FBE | Since: 1207
 */
export function useScenarioPoint2(ped, ped2, p5) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    if (typeof p5 === 'string')
        p5 = GetHashKey(p5);
    return TaskUseScenarioPoint2(_ped, _ped2, undefined, 0, p5, 0, false);
}
/**
 * Adds a waypoint to an AI vehicle's active drive-to-destination task; only the last 3 points are kept (ignored if no such task).
 *
 * Hash: 0x1D125814EBC517EB | Since: 1207
 */
export function vehicleAddNextDestination(vehicle, pos) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x1D125814EBC517EB', _vehicle, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xF0108F01FB105DA2 | Since: 1207
 */
export function vehicleDriveToCoord2(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskVehicleDriveToCoord2(_ped, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * Tasks vehicle towards owner
 *
 * Hash: 0x391073B9D3CCE2BA | Since: 1207
 */
export function vehicleDriveToDestination2(vehicle, pos, speed) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskVehicleDriveToDestination2(_vehicle, pos.x, pos.y, pos.z, speed, 0, 0, 0, 0);
}
/**
 * Params: p4 = 3.f or 8.f, p5 = 0.25f, p6 = 0 in R* Scripts
 *
 * Hash: 0x6524A8981E8BE7C9 | Since: 1207
 */
export function vehicleDriveToPoint2(vehicle, pos) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskVehicleDriveToPoint2(_vehicle, pos.x, pos.y, pos.z, 0, 0, undefined);
}
/**
 * Vehicle Auto Drive (?)
 * p1/p2/p3: usually 1f, 1f, 0f or 0f, 0f, 0f
 * Speed: usually 8f
 * Types: 1148979456 (task with flee), 1148979587 (dismissing the vehicle)
 *
 * Hash: 0x55CD5FDDD4335C1E | Since: 1207
 */
export function vehicleFleeOnCleanup(vehicle, speed, _type) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    if (typeof _type === 'string')
        _type = GetHashKey(_type);
    TaskVehicleFleeOnCleanup(_vehicle, 0, 0, 0, speed, _type);
}
/**
 * No comment provided
 *
 * Hash: 0x041D17A9E221AE30 | Since: 1207
 */
export function vehicleFollowWaypointRecording2() {
    TaskVehicleFollowWaypointRecording2(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * Returns true if the vehicle’s has a destination set previously set with `_TASK_VEHICLE_DRIVE_TO_DESTINATION_2` clear using `_CLEAR_VEHICLE_TASKS`
 *
 * Hash: 0x583AE9AF9CEE0958 | Since: 1207
 */
export function vehicleHasDestination(vehicle, pos) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0x583AE9AF9CEE0958', _vehicle, pos.x, pos.y, pos.z);
}
/**
 * Smoothly transitions an active scenario actor (ped) into a specific conditional / clipset defined in the scenario's conditional-anim graph, breaking or restarting the scenario.
 * Returns `true` if the transition was successfully triggered, or `false` if it failed
 *
 * Hash: 0x79197F7D2BB5E73A | Since: 1207
 */
export function transitionScenarioToConditionalAnim(ped, scenarioPoint, flags) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x79197F7D2BB5E73A', _ped, scenarioPoint, flags);
}
/**
 * In-place update for a running follow-to-offset/go-to task: sets new target coords + local offset, with speed and arrival tolerance (foot or mount; no effect if no compatible task)
 *
 * Hash: 0x3FFCD7BBA074CC80 | Since: 1207
 */
export function updateGoToCoordWithOffset(ped, targetX, targetY, targetZ, offsetX, offsetY, offsetZ, speed, tolerance) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x3FFCD7BBA074CC80', _ped, targetX, targetY, targetZ, offsetX, offsetY, offsetZ, speed, tolerance);
}
/**
 * Updates the target coordinate of an ongoing SCRIPT_TASK_VEHICLE_SHOOT_AT_COORD for the given ped This lets you retarget the shooting point in real time without restarting the task
 * Has effect only while the ped’s task status for `SCRIPT_TASK_VEHICLE_SHOOT_AT_COORD` is `TASK_STATUS_ONGOING` (commonly 1) If the task hasn’t started yet (status 0 or not running), use `TASK_VEHICLE_SHOOT_AT_COORD` first; after it becomes active, call this to update the aim point Compared to `TASK_VEHICLE_SHOOT_AT_COORD`: the latter starts (or re-queues) the task with an initial target; this native *only* updates the active task’s target coordinate.
 *
 * Hash: 0xAF2EF28CE3084505 | Since: 1207
 */
export function updateVehicleShootAtCoord(ped, pos) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xAF2EF28CE3084505', _ped, pos.x, pos.y, pos.z);
}
