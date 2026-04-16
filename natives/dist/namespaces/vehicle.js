import { Vector3, IEntity, IPed, IPlayer, IVehicle } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x4C221BAC54D735C3 | Since: 1207
 */
export function addRoadNodeSpeedZone() {
    return AddRoadNodeSpeedZone(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * Returns false if every seat is occupied.
 *
 * Hash: 0xA0A424505A1B6429 | Since: 1207
 */
export function areAnySeatsFree(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return AreAnyVehicleSeatsFree(_vehicle);
}
/**
 * This native makes the vehicle stop immediately
 *
 * distance defines how far it will travel until stopping.
 *
 * Hash: 0x260BE8F09E326A20 | Since: 1207
 */
export function bringToHalt(vehicle, distance, duration, _unknown) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    BringVehicleToHalt(_vehicle, distance, duration, _unknown);
}
/**
 * No comment provided
 *
 * Hash: 0xC075176CFB8B4128 | Since: 1207
 */
export function canAnchorBoatHere(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return CanAnchorBoatHere(_vehicle);
}
/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 *
 * Hash: 0xF8B2D32A2231FD24 | Since: 1207
 */
export function canShuffleSeat(vehicle, seatIndex) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return CanShuffleSeat(_vehicle, seatIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x0EFC5DC62E67609B | Since: 1207
 */
export function clearLastDriven() {
    ClearLastDrivenVehicle();
}
/**
 * Copies sourceVehicle's damage (broken bumpers, broken lights, etc.) to targetVehicle.
 *
 * Hash: 0xDBC28A8C683CD80B | Since: 1207
 */
export function copyDamages(sourceVehicle, targetVehicle) {
    const _sourceVehicle = sourceVehicle instanceof IVehicle ? sourceVehicle.handle() : sourceVehicle;
    const _targetVehicle = targetVehicle instanceof IVehicle ? targetVehicle.handle() : targetVehicle;
    CopyVehicleDamages(_sourceVehicle, _targetVehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xAF35D0D2583051B0 | Since: 1207
 */
export function create(modelHash, pos, heading, isNetwork, bScriptHostVeh, bDontAutoCreateDraftAnimals) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreateVehicle(modelHash, pos.x, pos.y, pos.z, heading, isNetwork, bScriptHostVeh, bDontAutoCreateDraftAnimals, false);
}
/**
 * No comment provided
 *
 * Hash: 0xA3120A1385F17FF7 | Since: 1207
 */
export function deleteAllTrains() {
    DeleteAllTrains();
}
/**
 * No comment provided
 *
 * Hash: 0x0D3630FB07E8B570 | Since: 1207
 */
export function deleteMissionTrain() {
    return DeleteMissionTrain();
}
/**
 * Deletes a vehicle.
 * The vehicle must be a mission entity to delete, so call this before deleting: SET_ENTITY_AS_MISSION_ENTITY(vehicle, true, true);
 *
 * eg how to use:
 * SET_ENTITY_AS_MISSION_ENTITY(vehicle, true, true);
 * DELETE_VEHICLE(&vehicle);
 *
 * Deletes the specified vehicle, then sets the handle pointed to by the pointer to NULL.
 *
 * Hash: 0xE20A909D8C4A70F8 | Since: 1207
 */
export function deleteVehicle() {
    return DeleteVehicle();
}
/**
 * No comment provided
 *
 * Hash: 0x94B1E71B144356A5 | Since: 1207
 */
export function disableWeapon(disabled, weaponHash, vehicle, owner) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _owner = owner instanceof IPed ? owner.handle() : owner;
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    DisableVehicleWeapon(disabled, weaponHash, _vehicle, _owner);
}
/**
 * No comment provided
 *
 * Hash: 0xAF5E7E9A7620FFB5 | Since: 1207
 */
export function doesExtraExist(vehicle, extraId) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return DoesExtraExist(_vehicle, extraId);
}
/**
 * Explodes a selected vehicle.
 *
 * Vehicle vehicle = Vehicle you want to explode.
 * BOOL isAudible = If explosion makes a sound.
 * BOOL isInvisible = If the explosion is invisible or not.
 *
 * First BOOL does not give any visual explosion, the vehicle just falls apart completely but slowly and starts to burn.
 *
 * Hash: 0x75DCED9EEC5769D7 | Since: 1207
 */
export function explode(vehicle, isAudible, isInvisible) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ExplodeVehicle(_vehicle, isAudible, isInvisible, undefined, undefined);
}
/**
 * Often called after START_PLAYBACK_RECORDED_VEHICLE and SKIP_TIME_IN_PLAYBACK_RECORDED_VEHICLE; similar in use to FORCE_ENTITY_AI_AND_ANIMATION_UPDATE.
 *
 * Hash: 0x59ECA796021B0539 | Since: 1207
 */
export function forcePlaybackRecordedUpdate(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ForcePlaybackRecordedVehicleUpdate(_vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0x52F45D033645181B | Since: 1207
 */
export function getClosest(pos, radius, modelHash, flags) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetClosestVehicle(pos.x, pos.y, pos.z, radius, modelHash, flags);
}
/**
 * Returns p1 for 0xBA958F68031DDBFC (stationIndex)
 *
 * Hash: 0x86FA6D8B48667D75 | Since: 1207
 */
export function getCurrentStationForTrain(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetCurrentStationForTrain(_train);
}
/**
 * No comment provided
 *
 * Hash: 0xA19447D83294E29F | Since: 1207
 */
export function getDraftAnimalCount(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetDraftAnimalCount(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x2963B5C1637E8A27 | Since: 1207
 */
export function getDriverOf(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetDriverOfVehicle(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xA94F3E0AB9695E19 | Since: 1207
 */
export function getLastDriven() {
    return GetLastDrivenVehicle();
}
/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 *
 * Hash: 0x74583B19FEEAFDA7 | Since: 1207
 */
export function getLastPedInSeat(vehicle, seatIndex) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetLastPedInVehicleSeat(_vehicle, seatIndex);
}
/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 *
 * Hash: 0xBB40DD2270B65366 | Since: 1207
 */
export function getPedInSeat(vehicle, seatIndex) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetPedInVehicleSeat(_vehicle, seatIndex);
}
/**
 * This native does no interpolation between pathpoints. The same position will be returned for all times up to the next pathpoint in the recording.
 *
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0x1A00961A1BE94E5E | Since: 1207
 */
export function getPositionOfRecordingAtTime(recording, time) {
    return new Vector3(GetPositionOfVehicleRecordingAtTime(recording, time));
}
/**
 * This native does no interpolation between pathpoints. The same rotation will be returned for all times up to the next pathpoint in the recording.
 *
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0x61787DD28B8CC0D5 | Since: 1207
 */
export function getRotationOfRecordingAtTime(recording, time) {
    return new Vector3(GetRotationOfVehicleRecordingAtTime(recording, time));
}
/**
 * No comment provided
 *
 * Hash: 0x233B51C7913FA031 | Since: 1207
 */
export function getTimePositionInRecording(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetTimePositionInRecording(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x865FEC2FA899F29C | Since: 1207
 */
export function getTrackIndexOfTrain(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrackIndexOfTrain(_train);
}
/**
 * No comment provided
 *
 * Hash: 0xD0FB093A4CDB932C | Since: 1207
 */
export function getTrainCarriage(train, trailerNumber) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainCarriage(_train, trailerNumber);
}
/**
 * Seems related to vehicle health, like the one in IV.
 * Max 1000, min 0.
 * Vehicle does not necessarily explode or become undrivable at 0.
 *
 * Hash: 0x42113B857E33C16E | Since: 1207
 */
export function getBodyHealth(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleBodyHealth(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xFA2CDDFEB8BC898B | Since: 1207
 */
export function getDoorsLockedForPlayer(vehicle, player) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetVehicleDoorsLockedForPlayer(_vehicle, _player);
}
/**
 * No comment provided
 *
 * Hash: 0xC867FD144F2469D3 | Since: 1207
 */
export function getDoorLockStatus(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleDoorLockStatus(_vehicle);
}
/**
 * Returns 1000.0 if the function is unable to get the address of the specified vehicle or if it's not a vehicle.
 *
 * Minimum: -4000
 * Maximum: 1000
 *
 * -4000: Engine is destroyed
 * 0 and below: Engine catches fire and health rapidly declines
 * 300: Engine is smoking and losing functionality
 * 1000: Engine is perfect
 *
 * Hash: 0x90DBFFAC43B22081 | Since: 1207
 */
export function getEngineHealth(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleEngineHealth(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xFE52F34491529F0B | Since: 1207
 */
export function getEstimatedMaxSpeed(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleEstimatedMaxSpeed(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xA9C55F1C15E62E06 | Since: 1207
 */
export function getMaxNumberOfPassengers(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleMaxNumberOfPassengers(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x9A578736FF3A17C3 | Since: 1207
 */
export function getModelNumberOfSeats(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetVehicleModelNumberOfSeats(modelHash);
}
/**
 * Gets the number of passengers, NOT including the driver. Use IS_VEHICLE_SEAT_FREE(Vehicle, -1) to also check for the driver
 *
 * Hash: 0x59F3F16577CD79B2 | Since: 1207
 */
export function getNumberOfPassengers(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleNumberOfPassengers(_vehicle);
}
/**
 * 1000 is max health
 *
 * Hash: 0x1E5A9B356D5098BE | Since: 1207
 */
export function getPetrolTankHealth(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehiclePetrolTankHealth(_vehicle);
}
/**
 * Gets the trailer of a vehicle and puts it into the trailer parameter.
 *
 * Hash: 0xCF867A239EC30741 | Since: 1207
 */
export function getTrailerVehicle(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleTrailerVehicle(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x2701D01D5E18FC31 | Since: 1207
 */
export function hasInstantFillPopulationFinished() {
    return HasInstantFillVehiclePopulationFinished();
}
/**
 * No comment provided
 *
 * Hash: 0xB935F3154BC913C8 | Since: 1207
 */
export function hasAssetLoaded(vehicleAsset) {
    if (typeof vehicleAsset === 'string')
        vehicleAsset = GetHashKey(vehicleAsset);
    return HasVehicleAssetLoaded(vehicleAsset);
}
/**
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0xBA9325BE372AB6EA | Since: 1207
 */
export function hasRecordingBeenLoaded(recording) {
    return HasVehicleRecordingBeenLoaded(recording);
}
/**
 * No comment provided
 *
 * Hash: 0x1FF00DB43026B12F | Since: 1207
 */
export function instantlyFillPopulation() {
    InstantlyFillVehiclePopulation();
}
/**
 * No comment provided
 *
 * Hash: 0x5698BA4FD04D39C4 | Since: 1207
 */
export function isAnyNearPoint(pos, radius) {
    return IsAnyVehicleNearPoint(pos.x, pos.y, pos.z, radius);
}
/**
 * No comment provided
 *
 * Hash: 0xEA44E97849E9F3DD | Since: 1207
 */
export function isDraft(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsDraftVehicle(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x80DDCCB2F4A3EB57 | Since: 1207
 */
export function isEntryPointForSeatClear(ped, vehicle, seatIndex, side, onEnter) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsEntryPointForSeatClear(_ped, _vehicle, seatIndex, side, onEnter);
}
/**
 * No comment provided
 *
 * Hash: 0x02774B3A9034278F | Since: 1207
 */
export function isPlaybackGoingOnFor(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsPlaybackGoingOnForVehicle(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x5A7472606EC5B7C1 | Since: 1207
 */
export function isPlaybackUsingAiGoingOnFor(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsPlaybackUsingAiGoingOnForVehicle(_vehicle);
}
/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 *
 * Hash: 0x7892685BF6D9775E | Since: 1207
 */
export function isSeatWarpOnly(vehicle, seatIndex) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsSeatWarpOnly(_vehicle, seatIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x799CFC7C5B743B15 | Since: 1207
 */
export function isThisModelABoat(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return IsThisModelABoat(model);
}
/**
 * No comment provided
 *
 * Hash: 0xFC08C8F8C1EDF174 | Since: 1207
 */
export function isThisModelATrain(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return IsThisModelATrain(model);
}
/**
 * No comment provided
 *
 * Hash: 0xE887BD31D97793F6 | Since: 1207
 */
export function isTrainWaitingAtStation(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return IsTrainWaitingAtStation(_train);
}
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0x7AE191143C7A9107 | Since: 1207
 */
export function isDoorFullyOpen(vehicle, doorId) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleDoorFullyOpen(_vehicle, doorId);
}
/**
 * No comment provided
 *
 * Hash: 0xB86D29B10F627379 | Since: 1207
 */
export function isDriveable(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleDriveable(_vehicle, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xFA9A55D9C4351625 | Since: 1207
 */
export function isExtraTurnedOn(vehicle, extraId) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleExtraTurnedOn(_vehicle, extraId);
}
/**
 * No comment provided
 *
 * Hash: 0x3F5029A8FC060C48 | Since: 1207
 */
export function isInBurnout(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleInBurnout(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x0045A54EC7A22455 | Since: 1207
 */
export function isModel(vehicle, model) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    if (typeof model === 'string')
        model = GetHashKey(model);
    return IsVehicleModel(_vehicle, model);
}
/**
 * No comment provided
 *
 * Hash: 0x0D5D119529654EE0 | Since: 1207
 */
export function isOnAllWheels(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleOnAllWheels(_vehicle);
}
/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 * Use GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS(vehicle) - 1 for last seat index.
 *
 * Hash: 0xE052C1B1CAA4ECE4 | Since: 1207
 */
export function isSeatFree(vehicle, seatIndex) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleSeatFree(_vehicle, seatIndex);
}
/**
 * Returns true if the vehicle's current speed is less than, or equal to 0.0025f.
 *
 * For some vehicles it returns true if the current speed is <= 0.00039999999.
 *
 * Hash: 0x78C3311A73135241 | Since: 1207
 */
export function isStopped(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleStopped(_vehicle);
}
/**
 * VEH_STUCK_ON_ROOF = 0,
 * VEH_STUCK_ON_SIDE,
 * VEH_STUCK_HUNG_UP,
 * VEH_STUCK_JAMMED
 *
 * Hash: 0x1ABA9753939503C5 | Since: 1207
 */
export function isStuckTimerUp(vehicle, stuckType, ms) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleStuckTimerUp(_vehicle, stuckType, ms);
}
/**
 * Requires a visibility tracker on the vehicle (TRACK_VEHICLE_VISIBILITY)
 *
 * Hash: 0x424910CD5DE8C246 | Since: 1207
 */
export function isVisible(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleVisible(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x0E7910A63E05B12C | Since: 1436
 */
export function isWindowIntact(vehicle, windowIndex) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleWindowIntact(_vehicle, windowIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xDDBEA5506C848227 | Since: 1207
 */
export function isWrecked(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleWrecked(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x1EF36558FBDE2DAA | Since: 1207
 */
export function lockDoorsWhenNoLongerNeeded(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    LockDoorsWhenNoLongerNeeded(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x35AD938C74CACD6A | Since: 1207
 */
export function modifyTopSpeed(vehicle, value) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ModifyVehicleTopSpeed(_vehicle, value);
}
/**
 * No comment provided
 *
 * Hash: 0xFE9AB3354ACE6C9C | Since: 1207
 */
export function removeRoadNodeSpeedZone(speedzone) {
    return RemoveRoadNodeSpeedZone(speedzone);
}
/**
 * No comment provided
 *
 * Hash: 0xC619A44639BC0CB4 | Since: 1207
 */
export function removesFromGeneratorsInArea() {
    RemoveVehiclesFromGeneratorsInArea(undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x888A4E675B38F5AD | Since: 1207
 */
export function removeAsset(vehicleAsset) {
    if (typeof vehicleAsset === 'string')
        vehicleAsset = GetHashKey(vehicleAsset);
    RemoveVehicleAsset(vehicleAsset);
}
/**
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0x139E35755418F6AA | Since: 1207
 */
export function removeRecording() {
    return RemoveVehicleRecording(undefined);
}
/**
 * windowIndex:
 * 0 = Front Right Window
 * 1 = Front Left Window
 * 2 = Back Right Window
 * 3 = Back Left Window
 *
 * Hash: 0x745F15A215F2DDF1 | Since: 1207
 */
export function removeWindow(vehicle, windowIndex) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    RemoveVehicleWindow(_vehicle, windowIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x81A15811460FAB3A | Since: 1207
 */
export function requestAsset(vehicleHash, vehicleAsset) {
    if (typeof vehicleHash === 'string')
        vehicleHash = GetHashKey(vehicleHash);
    RequestVehicleAsset(vehicleHash, vehicleAsset);
}
/**
 * No comment provided
 *
 * Hash: 0x84B81EF78BD22357 | Since: 1207
 */
export function requestHighDetailModel(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    RequestVehicleHighDetailModel(_vehicle);
}
/**
 * Request the vehicle recording defined by the lowercase format string "%s%03d.yvr". For example, REQUEST_VEHICLE_RECORDING(1, "FBIs1UBER") corresponds to fbis1uber001.yvr.
 * For all vehicle recording/playback natives, "script" is a common prefix that usually corresponds to the script/mission the recording is used in, "recording" is its int suffix, and "id" corresponds to a unique identifier within the recording streaming module.
 * (GTA) Note that only 24 recordings (hardcoded in multiple places) can ever active at a given time before clobbering begins.
 *
 * Hash: 0xC474CF16EDA45DC9 | Since: 1207
 */
export function requestRecording(recording) {
    return RequestVehicleRecording(recording);
}
/**
 * No comment provided
 *
 * Hash: 0x23298B468F7D88B6 | Since: 1207
 */
export function resetStuckTimer(vehicle, nullAttributes) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ResetVehicleStuckTimer(_vehicle, nullAttributes);
}
/**
 * No comment provided
 *
 * Hash: 0x8D3230A0ED7DE39F | Since: 1207
 */
export function setAllowExplodesOnContact(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetAllowVehicleExplodesOnContact(_vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0x3D596E6E88A02C24 | Since: 1207
 */
export function setAllGeneratorsActive() {
    SetAllVehicleGeneratorsActive();
}
/**
 * No comment provided
 *
 * Hash: 0xBBB134FB9D50C0CC | Since: 1207
 */
export function setAllGeneratorsActiveInArea(x1, y1, z1, x2, y2, z2) {
    SetAllVehicleGeneratorsActiveInArea(x1, y1, z1, x2, y2, z2, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0xAEAB044F05B92659 | Since: 1207
 */
export function setBoatAnchor(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetBoatAnchor(_vehicle, toggle);
}
/**
 * Value: mostly 99999.9f
 *
 * Old name: _SET_BOAT_MOVEMENT_RESISTANCE
 *
 * Hash: 0xE3261532550D6A9F | Since: 1207
 */
export function setBoatLowLodAnchorDistance(vehicle, value) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetBoatLowLodAnchorDistance(_vehicle, value);
}
/**
 * Old name: _SET_BOAT_FROZEN_WHEN_ANCHORED
 *
 * Hash: 0x286771F3059A37A7 | Since: 1207
 */
export function setBoatRemainsAnchoredWhilePlayerIsDriver(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetBoatRemainsAnchoredWhilePlayerIsDriver(_vehicle, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x62A6D317A011EA1D | Since: 1207
 */
export function setBoatSinksWhenWrecked(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetBoatSinksWhenWrecked(_vehicle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xBC4735F48CD983EF | Since: 1207
 */
export function setBreakableLocksUnbreakable(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetBreakableVehicleLocksUnbreakable(_vehicle, toggle);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xD4288603E8766FF7 | Since: 1207
 */
export function setDisableRandomTrainsThisFrame(toggle) {
    SetDisableRandomTrainsThisFrame(toggle);
}
/**
 * Old name: _SET_DISABLE_SUPERDUMMY_MODE
 *
 * Hash: 0x1716D787D9B94202 | Since: 1232
 */
export function setDisableSuperdummy(vehicle, disable) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDisableSuperdummy(_vehicle, disable);
}
/**
 * No comment provided
 *
 * Hash: 0xD146EE5F2B06B95E | Since: 1207
 */
export function setDisableEngineFires(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDisableVehicleEngineFires(_vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5795FBE7A2001C14 | Since: 1207
 */
export function setDisablePetrolTankDamage(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDisableVehiclePetrolTankDamage(_vehicle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xB70986AB19B04AFF | Since: 1207
 */
export function setDisablePetrolTankFires(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDisableVehiclePetrolTankFires(_vehicle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x63DC1F22C903B709 | Since: 1207
 */
export function setDontAllowPlayerToEnterIfLockedForPlayer(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDontAllowPlayerToEnterVehicleIfLockedForPlayer(_vehicle, false);
}
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Old name: _SET_VEHICLE_DOOR_CAN_BREAK
 *
 * Hash: 0x081FB9D6422F804C | Since: 1207
 */
export function setDoorAllowedToBeBrokenOff(vehicle, doorId, isBreakable) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDoorAllowedToBeBrokenOff(_vehicle, doorId, isBreakable);
}
/**
 * No comment provided
 *
 * Hash: 0x73F1E4F6DF26FE30 | Since: 1207
 */
export function setEnableSlipstreaming() {
    SetEnableVehicleSlipstreaming(false);
}
/**
 * No comment provided
 *
 * Hash: 0x373CB1283308BD7B | Since: 1207
 */
export function setForceHd(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetForceHdVehicle(_vehicle, toggle);
}
/**
 * Sets boat to be anchored on spawn, called together with SET_BOAT_ANCHOR and _SET_BOAT_ANCHOR_BUOYANCY_COEFFICIENT
 *
 * Hash: 0x75B49ACD73617437 | Since: 1207
 */
export function setForceLowLodAnchorMode(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetForceLowLodAnchorMode(_vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0x7F8E2B131E1DCA6C | Since: 1207
 */
export function setForceEngineDamageByBullet(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetForceVehicleEngineDamageByBullet(_vehicle, toggle);
}
/**
 * flags = 0: DEFAULT; 1: KEEP_OLD_SPEED
 *
 * Hash: 0xBBE7648349B49BE8 | Since: 1207
 */
export function setMissionTrainAsNoLongerNeeded(flags) {
    return SetMissionTrainAsNoLongerNeeded(flags);
}
/**
 * No comment provided
 *
 * Hash: 0x7632755962AB9922 | Since: 1207
 */
export function setMissionTrainCoords(train, pos) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetMissionTrainCoords(_train, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xFEDFA97638D61D4A | Since: 1207
 */
export function setParkedDensityMultiplierThisFrame(multiplier) {
    SetParkedVehicleDensityMultiplierThisFrame(multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0x838C216C2B05A009 | Since: 1207
 */
export function setPedOwns(ped, vehicle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetPedOwnsVehicle(_ped, _vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xD78084EED4CD94C6 | Since: 1207
 */
export function setPlaybackSpeed(vehicle, speed) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetPlaybackSpeed(_vehicle, speed);
}
/**
 * No comment provided
 *
 * Hash: 0xF44D446D4E36DB87 | Since: 1207
 */
export function setRandomBoats(toggle) {
    SetRandomBoats(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x1156C6EE7E82A98A | Since: 1207
 */
export function setRandomTrains(toggle) {
    SetRandomTrains(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x1F91D44490E1EA0C | Since: 1207
 */
export function setRandomDensityMultiplierThisFrame(multiplier) {
    SetRandomVehicleDensityMultiplierThisFrame(multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0x01021EB2E96B793C | Since: 1207
 */
export function setTrainCruiseSpeed(train, speed) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainCruiseSpeed(_train, speed);
}
/**
 * No comment provided
 *
 * Hash: 0x8EC47DD4300BF063 | Since: 1207
 */
export function setTrainOffsetFromStation(train, offset) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainOffsetFromStation(_train, offset);
}
/**
 * No comment provided
 *
 * Hash: 0xDFBA6BBFF7CCAFBB | Since: 1207
 */
export function setTrainSpeed(train, speed) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainSpeed(_train, speed);
}
/**
 * Used to be incorrectly named SET_VEHICLE_EXCLUSIVE_DRIVER
 *
 * Hash: 0x0893DAFBFA67110E | Since: 1207
 */
export function setAiCanUseExclusiveSeats(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleAiCanUseExclusiveSeats(_vehicle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x1240E8596A8308B9 | Since: 1207
 */
export function setAllowHomingMissleLockon(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleAllowHomingMissleLockon(_vehicle, toggle);
}
/**
 * Makes the vehicle accept no passengers.
 *
 * Hash: 0xECB9E9BC887E8060 | Since: 1207
 */
export function setAllowNoPassengersLockon(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleAllowNoPassengersLockon(_vehicle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x501354951CD942DE | Since: 1207
 */
export function setAutomaticallyAttaches(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return SetVehicleAutomaticallyAttaches(_vehicle, false, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x55CCAAE4F28C67A0 | Since: 1207
 */
export function setBodyHealth(vehicle, value) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleBodyHealth(_vehicle, value);
}
/**
 * No comment provided
 *
 * Hash: 0xCEC4CA2CAB8FA98C | Since: 1207
 */
export function setBrokenPartsDontAffectAiHandling(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleBrokenPartsDontAffectAiHandling(_vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0x05254BA0B44ADC16 | Since: 1207
 */
export function setCanBeTargetted(vehicle, state) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleCanBeTargetted(_vehicle, state);
}
/**
 * No comment provided
 *
 * Hash: 0xE42952510F84AFDB | Since: 1207
 */
export function setCanBeUsedByFleeingPeds(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleCanBeUsedByFleeingPeds(_vehicle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x4BF8131AE811541C | Since: 1207
 */
export function setCanBeVisiblyDamaged(vehicle, state) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleCanBeVisiblyDamaged(_vehicle, state);
}
/**
 * No comment provided
 *
 * Hash: 0xC5ED9D59B4646611 | Since: 1207
 */
export function setCanBreak(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleCanBreak(_vehicle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x065D03A9D6B2C6B5 | Since: 1207
 */
export function setCanEjectPassengersIfLocked(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleCanEjectPassengersIfLocked(_vehicle, false);
}
/**
 * Apply damage to vehicle at a location. Location is relative to vehicle model (not world).
 *
 * Radius of effect damage applied in a sphere at impact location
 *
 * Hash: 0x1D7678F81452BB41 | Since: 1207
 */
export function setDamage(vehicle, xOffset, yOffset, zOffset, damage, radius) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDamage(_vehicle, xOffset, yOffset, zOffset, damage, radius, false);
}
/**
 * No comment provided
 *
 * Hash: 0x606374EBFC27B133 | Since: 1207
 */
export function setDensityMultiplierThisFrame(multiplier) {
    SetVehicleDensityMultiplierThisFrame(multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0x758C3460EE915D0A | Since: 1207
 */
export function setDirtLevel(vehicle, dirtLevel) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDirtLevel(_vehicle, dirtLevel);
}
/**
 * No comment provided
 *
 * Hash: 0x96F78A6A075D55D9 | Since: 1207
 */
export function setDoorsLocked(vehicle, doorLockStatus) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorsLocked(_vehicle, doorLockStatus);
}
/**
 * No comment provided
 *
 * Hash: 0x2381977DA948F8DC | Since: 1207
 */
export function setDoorsLockedForAllPlayers(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorsLockedForAllPlayers(_vehicle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x359A8EA1FB8D6F0F | Since: 1207
 */
export function setDoorsLockedForPlayer(vehicle, player, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetVehicleDoorsLockedForPlayer(_vehicle, _player, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xE712BC978770F105 | Since: 1207
 */
export function setDoorsLockedForTeam(vehicle, team, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorsLockedForTeam(_vehicle, team, toggle);
}
/**
 * Closes all doors of a vehicle:
 *
 * Hash: 0xA4FFCD645B11F25A | Since: 1207
 */
export function setDoorsShut(vehicle, closeInstantly) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorsShut(_vehicle, closeInstantly);
}
/**
 * No comment provided
 *
 * Hash: 0x362CEDD2A41E0747 | Since: 1232
 */
export function setDoorsToOpenAtAnyDistance(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorsToOpenAtAnyDistance(_vehicle, toggle);
}
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0x9666CF20A1C6D780 | Since: 1207
 */
export function setDoorBroken(vehicle, doorId, deleteDoor) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorBroken(_vehicle, doorId, deleteDoor);
}
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0xD57F10EBBA814ECF | Since: 1207
 */
export function setDoorControl(vehicle, doorId, speed, angle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorControl(_vehicle, doorId, speed, angle);
}
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0x06F8A202EB312A3C | Since: 1207
 */
export function setDoorLatched(vehicle, doorId) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorLatched(_vehicle, doorId, false, false, false);
}
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * Can also be used on trains and its wagons
 *
 * Hash: 0x550CE392A4672412 | Since: 1207
 */
export function setDoorOpen(vehicle, doorId, loose, openInstantly) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorOpen(_vehicle, doorId, loose, openInstantly);
}
/**
 * doorId: enum eDoorId
 * {
 * VEH_EXT_DOOR_INVALID_ID = -1,
 * VEH_EXT_DOOR_DSIDE_F,
 * VEH_EXT_DOOR_DSIDE_M,
 * VEH_EXT_DOOR_DSIDE_M1,
 * VEH_EXT_DOOR_DSIDE_M2,
 * VEH_EXT_DOOR_DSIDE_R,
 * VEH_EXT_DOOR_PSIDE_F,
 * VEH_EXT_DOOR_PSIDE_M,
 * VEH_EXT_DOOR_PSIDE_M1,
 * VEH_EXT_DOOR_PSIDE_M2,
 * VEH_EXT_DOOR_PSIDE_R,
 * VEH_EXT_BONNET,
 * VEH_EXT_BOOT
 * };
 *
 * Hash: 0x6A3C24B91FD0EA09 | Since: 1207
 */
export function setDoorShut(vehicle, doorId, closeInstantly) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorShut(_vehicle, doorId, closeInstantly);
}
/**
 * No comment provided
 *
 * Hash: 0x48E4C137A71C2688 | Since: 1207
 */
export function setEngineCanDegrade(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleEngineCanDegrade(_vehicle, toggle);
}
/**
 * 1000 is max health
 * Begins leaking gas at around 650 health
 * -999.90002441406 appears to be minimum health, although nothing special occurs <- false statement
 *
 * -------------------------
 * Minimum: -4000
 * Maximum: 1000
 *
 * -4000: Engine is destroyed
 * 0 and below: Engine catches fire and health rapidly declines
 * 300: Engine is smoking and losing functionality
 * 1000: Engine is perfect
 *
 * Hash: 0x8BDC5B998B4654EF | Since: 1207
 */
export function setEngineHealth(vehicle, health) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleEngineHealth(_vehicle, health);
}
/**
 * Starts or stops the engine on the specified vehicle.
 *
 * vehicle: The vehicle to start or stop the engine on.
 * value: true to turn the vehicle on; false to turn it off.
 * instantly: if true, the vehicle will be set to the state immediately; otherwise, the current driver will physically turn on or off the engine.
 *
 * Hash: 0xB64CFA14CB9A2E78 | Since: 1207
 */
export function setEngineOn(vehicle, value, instantly) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleEngineOn(_vehicle, value, instantly);
}
/**
 * index: 0 - 1
 *
 * Used to be incorrectly named _SET_VEHICLE_EXCLUSIVE_DRIVER_2
 *
 * Hash: 0xC6B9BF123B9463B6 | Since: 1207
 */
export function setExclusiveDriver(vehicle, ped, index) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetVehicleExclusiveDriver(_vehicle, _ped, index);
}
/**
 * Sets a vehicle to be strongly resistant to explosions. p0 is the vehicle; set p1 to false to toggle the effect on/off.
 *
 * Hash: 0xA402939C6761E1A3 | Since: 1207
 */
export function setExplodesOnHighExplosionDamage(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleExplodesOnHighExplosionDamage(_vehicle, toggle);
}
/**
 * Note: only some vehicle have extras
 * https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_extras.lua
 *
 * Hash: 0xBB6F89150BC9D16B | Since: 1207
 */
export function setExtra(vehicle, extraId, disable) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleExtra(_vehicle, extraId, disable);
}
/**
 * This fixes a vehicle.
 * If the vehicle's engine's broken then you cannot fix it with this native.
 *
 * Hash: 0x79811282A9D1AE56 | Since: 1207
 */
export function setFixed(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleFixed(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xF9F92AF49F12F6E7 | Since: 1207
 */
export function setForwardSpeed(vehicle, speed) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleForwardSpeed(_vehicle, speed);
}
/**
 * No comment provided
 *
 * Hash: 0x91BE51AEC4E99710 | Since: 1207
 */
export function setHandbrake(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHandbrake(_vehicle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xBB5A3FA8ED3979C5 | Since: 1207
 */
export function setHasBeenOwnedByPlayer(vehicle, owned) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHasBeenOwnedByPlayer(_vehicle, owned);
}
/**
 * if true, axles won't bend.
 *
 * Hash: 0x252253C8A45AA1FC | Since: 1207
 */
export function setHasStrongAxles(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHasStrongAxles(_vehicle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xC903855E028A05F2 | Since: 1207
 */
export function setHasUnbreakableLights(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHasUnbreakableLights(_vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0x4EA71B4C9DB3C3F1 | Since: 1207
 */
export function setInactiveDuringPlayback(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleInactiveDuringPlayback(_vehicle, toggle);
}
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0xA9F1D75195CC40F6 | Since: 1207
 */
export function setIndividualDoorsLocked(vehicle, doorId, doorLockStatus) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleIndividualDoorsLocked(_vehicle, doorId, doorLockStatus);
}
/**
 * No comment provided
 *
 * Hash: 0xC1842F40FD501DA2 | Since: 1207
 */
export function setInfluencesWantedLevel(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleInfluencesWantedLevel(_vehicle, toggle);
}
/**
 * Setting this to false, makes the specified vehicle to where if you press Y your character doesn't even attempt the animation to enter the vehicle. Hence it's not considered aka ignored.
 *
 * Hash: 0x54800D386C5825E5 | Since: 1207
 */
export function setIsConsideredByPlayer(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleIsConsideredByPlayer(_vehicle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x6C32FC81DFF25C9A | Since: 1207
 */
export function setIsStolen(vehicle, isStolen) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleIsStolen(_vehicle, isStolen);
}
/**
 * No comment provided
 *
 * Hash: 0x1549BA7FE83A2383 | Since: 1207
 */
export function setKeepEngineOnWhenAbandoned(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleKeepEngineOnWhenAbandoned(_vehicle, toggle);
}
/**
 * Sets the vehicle's lights state.
 *
 * Hash: 0x629F0A0E952CAE7D | Since: 1207
 */
export function setLights(vehicle, state) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleLights(_vehicle, state);
}
/**
 * _SET_VEHICLE_LI*
 *
 * Hash: 0x8F75941C86EEBFCA | Since: 1207
 */
export function setLimitSpeedWhenPlayerInactive(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleLimitSpeedWhenPlayerInactive(_vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0x5F5E2B1B9EAECC0F | Since: 1207
 */
export function setLodMultiplier(vehicle, multiplier) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleLodMultiplier(_vehicle, multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0x7549B9E841940695 | Since: 1207
 */
export function setMayBeUsedByGotoPointAnyMeans(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleMayBeUsedByGotoPointAnyMeans(_vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0x09C970AE59ABF6B2 | Since: 1207
 */
export function setNotStealableAmbiently(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleNotStealableAmbiently(_vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0x7263332501E07F52 | Since: 1207
 */
export function setOnGroundProperly(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return SetVehicleOnGroundProperly(_vehicle, false);
}
/**
 * 1000 is max health
 *
 * Hash: 0x6AB2918EE3BEC94C | Since: 1207
 */
export function setPetrolTankHealth(vehicle, health) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehiclePetrolTankHealth(_vehicle, health);
}
/**
 * No comment provided
 *
 * Hash: 0x652712478F1721F4 | Since: 1207
 */
export function setProvidesCover(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleProvidesCover(_vehicle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x33992A808DF1C1BA | Since: 1207
 */
export function setRespectsLocksWhenHasDriver(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleRespectsLocksWhenHasDriver(_vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0xB79BE78C665B3E6D | Since: 1207
 */
export function setShootAtTarget() {
    SetVehicleShootAtTarget(undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x23A3AB86E0807721 | Since: 1207
 */
export function setStaysFrozenWhenCleanedUp(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleStaysFrozenWhenCleanedUp(_vehicle, toggle);
}
/**
 * Locks the vehicle's steering to the desired angle, explained below.
 *
 * Requires to be called onTick. Steering is unlocked the moment the function stops being called on the vehicle.
 *
 * Steer bias:
 * -1.0 = full right
 * 0.0 = centered steering
 * 1.0 = full left
 *
 * Hash: 0x84DAAE11E9EE4FC3 | Since: 1207
 */
export function setSteerBias(vehicle, value) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleSteerBias(_vehicle, value);
}
/**
 * No comment provided
 *
 * Hash: 0xC84E138448507567 | Since: 1207
 */
export function setStopInstantlyWhenPlayerInactive(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleStopInstantlyWhenPlayerInactive(_vehicle, false);
}
/**
 * If set to true, vehicle will not take crash damage, but is still susceptible to damage from bullets and explosives
 *
 * Hash: 0xAB315515C9F8803D | Since: 1207
 */
export function setStrong(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleStrong(_vehicle, toggle);
}
/**
 * Allows you to toggle bulletproof tires.
 *
 * Hash: 0xEBD0A4E935106FE5 | Since: 1207
 */
export function setTyresCanBurst(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleTyresCanBurst(_vehicle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x6E884BAB713A2A94 | Since: 1207
 */
export function setUndriveable(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleUndriveable(_vehicle, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x839137C40275FB77 | Since: 1207
 */
export function setWheelsCanBreak(vehicle, enabled) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelsCanBreak(_vehicle, enabled);
}
/**
 * No comment provided
 *
 * Hash: 0xC462C79379ABBCB1 | Since: 1207
 */
export function setWheelsCanBreakOffWhenBlowUp(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelsCanBreakOffWhenBlowUp(_vehicle, toggle);
}
/**
 * SET_TIME_POSITION_IN_RECORDING can be emulated by: desired_time - GET_TIME_POSITION_IN_RECORDING(vehicle)
 *
 * Hash: 0x5F5E6379C59EFC56 | Since: 1207
 */
export function skipTimeInPlaybackRecorded(vehicle, time) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SkipTimeInPlaybackRecordedVehicle(_vehicle, time);
}
/**
 * `p3 is some flag related to 'trailers' (invokes CVehicle::GetTrailer).`
 *
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0x4932B84E3276508E | Since: 1207
 */
export function startPlaybackRecorded(vehicle, recording) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return StartPlaybackRecordedVehicle(_vehicle, recording, false);
}
/**
 * Sounds the horn for the specified vehicle.
 *
 * vehicle: The vehicle to activate the horn for.
 * mode: The hash of "NORMAL" or "HELDDOWN". Can be 0.
 * duration: The duration to sound the horn, in milliseconds.
 *
 * Note: If a player is in the vehicle, it will only sound briefly.
 *
 * Hash: 0xB4E3BFC39CA16057 | Since: 1207
 */
export function startHorn(vehicle, duration, mode, forever) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    if (typeof mode === 'string')
        mode = GetHashKey(mode);
    StartVehicleHorn(_vehicle, duration, mode, forever);
}
/**
 * Old name: _STOP_BRING_VEHICLE_TO_HALT
 *
 * Hash: 0x7C06330BFDDA182E | Since: 1207
 */
export function stopBringingToHalt(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    StopBringingVehicleToHalt(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xBF9B4D6267E8C26D | Since: 1207
 */
export function stopPlaybackRecorded(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    StopPlaybackRecordedVehicle(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x1F3969B140DEE157 | Since: 1207
 */
export function trackVisibility(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TrackVehicleVisibility(_vehicle);
}
/**
 * Only used in SP Scripts.
 * Related to Vehicle Speed.
 *
 * Hash: 0x012701ED938B85DE | Since: 1207
 */
export function _0x012701ED938B85DE() {
    Citizen.invokeNative('0x012701ED938B85DE', 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x0355FE37240E2C77 | Since: 1207
 */
export function _0x0355FE37240E2C77() {
    Citizen.invokeNative('0x0355FE37240E2C77', undefined, undefined);
}
/**
 * _SET_VEHICLE_*
 *
 * Hash: 0x04F0579DBDD32F34 | Since: 1207
 */
export function _0x04F0579DBDD32F34(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x04F0579DBDD32F34', _vehicle);
}
/**
 * Takes value returned from 0x45853F4E17D847D5
 *
 * Hash: 0x0516FAE561276EFC | Since: 1207
 */
export function _0x0516FAE561276EFC(trackIndex) {
    return Citizen.invokeNative('0x0516FAE561276EFC', trackIndex);
}
/**
 * _SET_TRAIN_*
 *
 * Hash: 0x06A09A6E0C6D2A84 | Since: 1207
 */
export function _0x06A09A6E0C6D2A84(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0x06A09A6E0C6D2A84', _train, false);
}
/**
 * _SET_VEHICLE_S*
 *
 * Hash: 0x0794199B25E499E1 | Since: 1207
 */
export function _0x0794199B25E499E1(wagon) {
    const _wagon = wagon instanceof IVehicle ? wagon.handle() : wagon;
    Citizen.invokeNative('0x0794199B25E499E1', _wagon, false);
}
/**
 * No comment provided
 *
 * Hash: 0x0CD7914D17A970AB | Since: 1207
 */
export function _0x0CD7914D17A970AB() {
    Citizen.invokeNative('0x0CD7914D17A970AB', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0D5FDF0D36FA10CD | Since: 1207
 */
export function _0x0D5FDF0D36FA10CD(trackIndex) {
    Citizen.invokeNative('0x0D5FDF0D36FA10CD', trackIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x0F7F603BDE08C4D3 | Since: 1207
 */
export function _0x0F7F603BDE08C4D3() {
    Citizen.invokeNative('0x0F7F603BDE08C4D3', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x0FDDEE66E3465726 | Since: 1207
 */
export function _0x0FDDEE66E3465726() {
    return Citizen.invokeNative('0x0FDDEE66E3465726', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x104D9A7B1C0D0783 | Since: 1207
 */
export function _0x104D9A7B1C0D0783(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x104D9A7B1C0D0783', _vehicle, 0);
}
/**
 * Returns p1 for 0xBA958F68031DDBFC (stationIndex)
 * _GET_N* (NEAREST_STATION_FOR_TRAIN?)
 *
 * Hash: 0x1180A2974D251B7B | Since: 1207
 */
export function _0x1180A2974D251B7B(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return Citizen.invokeNative('0x1180A2974D251B7B', _train);
}
/**
 * Params: coords = GET_ENTITY_VELOCITY
 * _SET_VELOCITY*
 *
 * Hash: 0x12F6C6ED3EFF42DE | Since: 1207
 */
export function _0x12F6C6ED3EFF42DE(vehicle, pos) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x12F6C6ED3EFF42DE', _vehicle, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x13EB275BF81636D1 | Since: 1207
 */
export function _0x13EB275BF81636D1() {
    Citizen.invokeNative('0x13EB275BF81636D1', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x14DA8C4BC2CCD90A | Since: 1207
 */
export function _0x14DA8C4BC2CCD90A() {
    return Citizen.invokeNative('0x14DA8C4BC2CCD90A', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x15206E88FF7617DF | Since: 1207
 */
export function _0x15206E88FF7617DF(trackIndex) {
    Citizen.invokeNative('0x15206E88FF7617DF', trackIndex, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x15CC8C33D7FFCC4A | Since: 1436
 */
export function _0x15CC8C33D7FFCC4A(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x15CC8C33D7FFCC4A', _vehicle, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x160C1B5AB48AB87C | Since: 1207
 */
export function _0x160C1B5AB48AB87C(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0x160C1B5AB48AB87C', _train, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x165BE2001E5E4B75 | Since: 1207
 */
export function _0x165BE2001E5E4B75() {
    Citizen.invokeNative('0x165BE2001E5E4B75', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x16B86A49E072AA85 | Since: 1207
 */
export function _0x16B86A49E072AA85() {
    Citizen.invokeNative('0x16B86A49E072AA85');
}
/**
 * No comment provided
 *
 * Hash: 0x172E9DD35858DCD7 | Since: 1207
 */
export function _0x172E9DD35858DCD7() {
    Citizen.invokeNative('0x172E9DD35858DCD7', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1A861F899EBBE17C | Since: 1207
 */
export function _0x1A861F899EBBE17C(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0x1A861F899EBBE17C', _train, false);
}
/**
 * No comment provided
 *
 * Hash: 0x2045429505158D1A | Since: 1207
 */
export function _0x2045429505158D1A() {
    return Citizen.invokeNative('0x2045429505158D1A', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2200AB13CBD10F4E | Since: 1207
 */
export function _0x2200AB13CBD10F4E(vehicle, pos) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x2200AB13CBD10F4E', _vehicle, pos.x, pos.y, pos.z, false, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x23F66C36F8E5EAAB | Since: 1207
 */
export function _0x23F66C36F8E5EAAB() {
    Citizen.invokeNative('0x23F66C36F8E5EAAB', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x27E3F2B57209FA54 | Since: 1207
 */
export function _0x27E3F2B57209FA54() {
    Citizen.invokeNative('0x27E3F2B57209FA54', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2A7413168F6CD5A8 | Since: 1207
 */
export function _0x2A7413168F6CD5A8() {
    Citizen.invokeNative('0x2A7413168F6CD5A8');
}
/**
 * No comment provided
 *
 * Hash: 0x2BB2B5BCF0DF8008 | Since: 1207
 */
export function _0x2BB2B5BCF0DF8008() {
    Citizen.invokeNative('0x2BB2B5BCF0DF8008', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2C46D2A591D8C322 | Since: 1207
 */
export function _0x2C46D2A591D8C322() {
    return Citizen.invokeNative('0x2C46D2A591D8C322', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3053064F909B5F42 | Since: 1207
 */
export function _0x3053064F909B5F42() {
    Citizen.invokeNative('0x3053064F909B5F42', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3137EDC899E6DAE4 | Since: 1355
 */
export function _0x3137EDC899E6DAE4() {
    Citizen.invokeNative('0x3137EDC899E6DAE4', undefined, undefined);
}
/**
 * Returns trackIndex
 *
 * Hash: 0x331CBD247FC5DAA8 | Since: 1207
 */
export function _0x331CBD247FC5DAA8(configHash, pos, direction) {
    if (typeof configHash === 'string')
        configHash = GetHashKey(configHash);
    return Citizen.invokeNative('0x331CBD247FC5DAA8', configHash, pos.x, pos.y, pos.z, direction, false);
}
/**
 * No comment provided
 *
 * Hash: 0x34BCF6209B9668A7 | Since: 1207
 */
export function _0x34BCF6209B9668A7(trackIndex) {
    Citizen.invokeNative('0x34BCF6209B9668A7', trackIndex, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x37D238BE69F7378A | Since: 1207
 */
export function _0x37D238BE69F7378A(trackIndex) {
    return Citizen.invokeNative('0x37D238BE69F7378A', trackIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x38E7DD70A242D5CB | Since: 1207
 */
export function _0x38E7DD70A242D5CB(trackIndex) {
    Citizen.invokeNative('0x38E7DD70A242D5CB', trackIndex, 0);
}
/**
 * Called together with 0xE6C5E2125EB210C1 in R* Script medium_update
 *
 * Hash: 0x3ABFA128F5BF5A70 | Since: 1207
 */
export function _0x3ABFA128F5BF5A70(trainTrack, junctionIndex, enabled) {
    if (typeof trainTrack === 'string')
        trainTrack = GetHashKey(trainTrack);
    Citizen.invokeNative('0x3ABFA128F5BF5A70', trainTrack, junctionIndex, enabled);
}
/**
 * No comment provided
 *
 * Hash: 0x3D86997A86FEEF0D | Since: 1207
 */
export function _0x3D86997A86FEEF0D() {
    Citizen.invokeNative('0x3D86997A86FEEF0D', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x41365DB586CD9E8E | Since: 1207
 */
export function _0x41365DB586CD9E8E(trackIndex) {
    Citizen.invokeNative('0x41365DB586CD9E8E', trackIndex, 0);
}
/**
 * _H*
 *
 * Hash: 0x41F0B254DDF71473 | Since: 1207
 */
export function _0x41F0B254DDF71473(wagon) {
    const _wagon = wagon instanceof IVehicle ? wagon.handle() : wagon;
    Citizen.invokeNative('0x41F0B254DDF71473', _wagon);
}
/**
 * No comment provided
 *
 * Hash: 0x427C919E9809E370 | Since: 1207
 */
export function _0x427C919E9809E370(trackIndex) {
    Citizen.invokeNative('0x427C919E9809E370', trackIndex, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x485B05EF05B9AEE9 | Since: 1207
 */
export function _0x485B05EF05B9AEE9() {
    Citizen.invokeNative('0x485B05EF05B9AEE9', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4C05B42A8D937796 | Since: 1207
 */
export function _0x4C05B42A8D937796() {
    Citizen.invokeNative('0x4C05B42A8D937796');
}
/**
 * Params: p1 usually true in R* Scripts
 * _SET_DRAFT_VEHICLE_*
 *
 * Hash: 0x4C60C333F9CCA2B6 | Since: 1207
 */
export function _0x4C60C333F9CCA2B6(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x4C60C333F9CCA2B6', _vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0x51C7694E140FAE43 | Since: 1207
 */
export function _0x51C7694E140FAE43() {
    return Citizen.invokeNative('0x51C7694E140FAE43', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5AADC7BBBB1BCEEB | Since: 1207
 */
export function _0x5AADC7BBBB1BCEEB() {
    Citizen.invokeNative('0x5AADC7BBBB1BCEEB', undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x615B3B8E73634509 | Since: 1207
 */
export function _0x615B3B8E73634509(trackIndex) {
    Citizen.invokeNative('0x615B3B8E73634509', trackIndex, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x63509DDF102E08E8 | Since: 1207
 */
export function _0x63509DDF102E08E8(trackIndex) {
    Citizen.invokeNative('0x63509DDF102E08E8', trackIndex, 0);
}
/**
 * Only used in R* Script beat_train_holdup: p1 = 1
 *
 * Hash: 0x6355602C02EDC6DF | Since: 1207
 */
export function _0x6355602C02EDC6DF(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x6355602C02EDC6DF', _entity, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6703872EC09BC158 | Since: 1207
 */
export function _0x6703872EC09BC158() {
    Citizen.invokeNative('0x6703872EC09BC158', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6835AFEA10E186F4 | Since: 1207
 */
export function _0x6835AFEA10E186F4() {
    Citizen.invokeNative('0x6835AFEA10E186F4', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x68830738A6BFB370 | Since: 1207
 */
export function _0x68830738A6BFB370() {
    Citizen.invokeNative('0x68830738A6BFB370', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x697DF68F3A761A50 | Since: 1207
 */
export function _0x697DF68F3A761A50() {
    Citizen.invokeNative('0x697DF68F3A761A50', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6B34BE961F639E21 | Since: 1207
 */
export function _0x6B34BE961F639E21(trackIndex) {
    Citizen.invokeNative('0x6B34BE961F639E21', trackIndex, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x6B53F4B811E583D2 | Since: 1207
 */
export function _0x6B53F4B811E583D2(vehicle, toggle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x6B53F4B811E583D2', _vehicle, toggle);
}
/**
 * Returns trackIndex
 *
 * Hash: 0x6C87F49BFA181DB5 | Since: 1207
 */
export function _0x6C87F49BFA181DB5(pos) {
    return Citizen.invokeNative('0x6C87F49BFA181DB5', pos.x, pos.y, pos.z);
}
/**
 * _SET_INSTANTLY_* - _SET_MISSION_TRAIN*
 *
 * Hash: 0x6DE072AC8A95FFC1 | Since: 1207
 */
export function _0x6DE072AC8A95FFC1(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x6DE072AC8A95FFC1', _vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0x6EA1273D525427F4 | Since: 1207
 */
export function _0x6EA1273D525427F4() {
    Citizen.invokeNative('0x6EA1273D525427F4', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6FD7BDF10304363A | Since: 1207
 */
export function _0x6FD7BDF10304363A() {
    Citizen.invokeNative('0x6FD7BDF10304363A', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x703D4FB366DA4452 | Since: 1207
 */
export function _0x703D4FB366DA4452() {
    Citizen.invokeNative('0x703D4FB366DA4452', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x718EB706B6E998A0 | Since: 1207
 */
export function _0x718EB706B6E998A0(trackIndex) {
    Citizen.invokeNative('0x718EB706B6E998A0', trackIndex);
}
/**
 * _SET_VEHICLE_WHEELS_*
 *
 * Hash: 0x73118A3EE9C9B6DB | Since: 1207
 */
export function _0x73118A3EE9C9B6DB(wagon) {
    const _wagon = wagon instanceof IVehicle ? wagon.handle() : wagon;
    Citizen.invokeNative('0x73118A3EE9C9B6DB', _wagon, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0x7408B5C66BA31ADB | Since: 1207
 */
export function _0x7408B5C66BA31ADB() {
    Citizen.invokeNative('0x7408B5C66BA31ADB', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x750D42C013F64AE7 | Since: 1207
 */
export function _0x750D42C013F64AE7() {
    Citizen.invokeNative('0x750D42C013F64AE7', undefined, undefined);
}
/**
 * Seems to be related while setting a (door) state of specific trains (midlandboxcar05x, privateboxcar01x, privateboxcar02x, midlandrefrigeratorCar, privateArmoured, armoredCar01x)
 *
 * Hash: 0x762FDC4C19E5A981 | Since: 1207
 */
export function _0x762FDC4C19E5A981(trainCarriage) {
    const _trainCarriage = trainCarriage instanceof IEntity ? trainCarriage.handle() : trainCarriage;
    Citizen.invokeNative('0x762FDC4C19E5A981', _trainCarriage, false);
}
/**
 * No comment provided
 *
 * Hash: 0x7840576C50A13DBA | Since: 1207
 */
export function _0x7840576C50A13DBA(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0x7840576C50A13DBA', _train, false);
}
/**
 * No comment provided
 *
 * Hash: 0x7BE0746539DEF0C8 | Since: 1207
 */
export function _0x7BE0746539DEF0C8() {
    return Citizen.invokeNative('0x7BE0746539DEF0C8', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8379E05871AD24E0 | Since: 1207
 */
export function _0x8379E05871AD24E0() {
    Citizen.invokeNative('0x8379E05871AD24E0');
}
/**
 * No comment provided
 *
 * Hash: 0x850CE59DEC2028F3 | Since: 1207
 */
export function _0x850CE59DEC2028F3(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x850CE59DEC2028F3', _vehicle, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x873AAF600CC36DAC | Since: 1207
 */
export function _0x873AAF600CC36DAC() {
    Citizen.invokeNative('0x873AAF600CC36DAC', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x877EA24EB1614495 | Since: 1207
 */
export function _0x877EA24EB1614495() {
    return Citizen.invokeNative('0x877EA24EB1614495', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x87B974E54C71BA7B | Since: 1207
 */
export function _0x87B974E54C71BA7B(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x87B974E54C71BA7B', _vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0x8878FF3EEE2868A9 | Since: 1207
 */
export function _0x8878FF3EEE2868A9() {
    Citizen.invokeNative('0x8878FF3EEE2868A9', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8DECD262602548B9 | Since: 1207
 */
export function _0x8DECD262602548B9() {
    Citizen.invokeNative('0x8DECD262602548B9', undefined, undefined);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x9868C0D0134855F7 | Since: 1207
 */
export function _0x9868C0D0134855F7() {
    Citizen.invokeNative('0x9868C0D0134855F7', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x98A7598C579EE871 | Since: 1207
 */
export function _0x98A7598C579EE871() {
    Citizen.invokeNative('0x98A7598C579EE871', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9D12796EF4BF9EA9 | Since: 1207
 */
export function _0x9D12796EF4BF9EA9() {
    Citizen.invokeNative('0x9D12796EF4BF9EA9', undefined);
}
/**
 * Forcing high LOD buoyancy for vehicle: p1 = false
 * _SET_A*
 *
 * Hash: 0x9E8711C81AA17876 | Since: 1207
 */
export function _0x9E8711C81AA17876(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x9E8711C81AA17876', _vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0xA13028E22564A1BD | Since: 1207
 */
export function _0xA13028E22564A1BD() {
    Citizen.invokeNative('0xA13028E22564A1BD', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA230A5DDE12ED374 | Since: 1207
 */
export function _0xA230A5DDE12ED374() {
    Citizen.invokeNative('0xA230A5DDE12ED374', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA72B1BF3857B94D7 | Since: 1207
 */
export function _0xA72B1BF3857B94D7(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0xA72B1BF3857B94D7', _train, false);
}
/**
 * No comment provided
 *
 * Hash: 0xA7966807953A18EE | Since: 1207
 */
export function _0xA7966807953A18EE(trackIndex) {
    Citizen.invokeNative('0xA7966807953A18EE', trackIndex, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xA9E185D498B9AC67 | Since: 1207
 */
export function _0xA9E185D498B9AC67() {
    return Citizen.invokeNative('0xA9E185D498B9AC67', undefined, undefined);
}
/**
 * _SET_TRAIN_*
 *
 * Hash: 0xAE7E66A61E7C17A5 | Since: 1207
 */
export function _0xAE7E66A61E7C17A5(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0xAE7E66A61E7C17A5', _train, false);
}
/**
 * No comment provided
 *
 * Hash: 0xB4241AD8F5AEE9ED | Since: 1207
 */
export function _0xB4241AD8F5AEE9ED(trackIndex) {
    return Citizen.invokeNative('0xB4241AD8F5AEE9ED', trackIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xB42C87521D1BDD2F | Since: 1207
 */
export function _0xB42C87521D1BDD2F(vehicle, pos) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xB42C87521D1BDD2F', _vehicle, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xB961DD799A837BD7 | Since: 1207
 */
export function _0xB961DD799A837BD7() {
    Citizen.invokeNative('0xB961DD799A837BD7');
}
/**
 * Used in Script Function MC_LOCAL_SETUP_VEH - enabling transitions
 *
 * Hash: 0xC325A6BAA62CF8A2 | Since: 1207
 */
export function _0xC325A6BAA62CF8A2(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xC325A6BAA62CF8A2', _vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0xC351394B932A6A50 | Since: 1207
 */
export function _0xC351394B932A6A50() {
    Citizen.invokeNative('0xC351394B932A6A50', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC399CC89FBA05DA0 | Since: 1207
 */
export function _0xC399CC89FBA05DA0(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xC399CC89FBA05DA0', _vehicle, false);
}
/**
 * _SET_DRAFT_VEHICLE_(STOP?)*
 *
 * Hash: 0xC4A2C11FC0D41916 | Since: 1207
 */
export function _0xC4A2C11FC0D41916(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xC4A2C11FC0D41916', _vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0xCACAB2B123BBDBD6 | Since: 1207
 */
export function _0xCACAB2B123BBDBD6() {
    return Citizen.invokeNative('0xCACAB2B123BBDBD6', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCAFF2C9747103C02 | Since: 1207
 */
export function _0xCAFF2C9747103C02() {
    return Citizen.invokeNative('0xCAFF2C9747103C02', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCBC7B6F9A56B79F6 | Since: 1207
 */
export function _0xCBC7B6F9A56B79F6() {
    Citizen.invokeNative('0xCBC7B6F9A56B79F6', undefined, undefined);
}
/**
 * Used in Script Function MC_LOCAL_SETUP_VEH - enabling transitions
 *
 * Hash: 0xCBF88256E44D5D39 | Since: 1207
 */
export function _0xCBF88256E44D5D39(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xCBF88256E44D5D39', _vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0xCEB1F1EED484A5B4 | Since: 1207
 */
export function _0xCEB1F1EED484A5B4() {
    Citizen.invokeNative('0xCEB1F1EED484A5B4', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCF342503CA4C8DF1 | Since: 1207
 */
export function _0xCF342503CA4C8DF1(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xCF342503CA4C8DF1', _vehicle, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xD0116DF21E6C7B36 | Since: 1207
 */
export function _0xD0116DF21E6C7B36() {
    return Citizen.invokeNative('0xD0116DF21E6C7B36', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD0AABE5B9F8FA589 | Since: 1207
 */
export function _0xD0AABE5B9F8FA589(trackIndex) {
    Citizen.invokeNative('0xD0AABE5B9F8FA589', trackIndex, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xD0BA1853D76683C8 | Since: 1207
 */
export function _0xD0BA1853D76683C8(trackIndex, pos) {
    Citizen.invokeNative('0xD0BA1853D76683C8', trackIndex, pos.x, pos.y, pos.z, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD1DF5E54F4ACBE1A | Since: 1207
 */
export function _0xD1DF5E54F4ACBE1A() {
    return Citizen.invokeNative('0xD1DF5E54F4ACBE1A', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD21A3D421E7F09F7 | Since: 1207
 */
export function _0xD21A3D421E7F09F7() {
    Citizen.invokeNative('0xD21A3D421E7F09F7', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD4907EF4334C7602 | Since: 1207
 */
export function _0xD4907EF4334C7602() {
    Citizen.invokeNative('0xD4907EF4334C7602', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD826690B5CF3BEFF | Since: 1207
 */
export function _0xD826690B5CF3BEFF(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xD826690B5CF3BEFF', _vehicle, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD9BF3ED8EFB67EA3 | Since: 1207
 */
export function _0xD9BF3ED8EFB67EA3() {
    return Citizen.invokeNative('0xD9BF3ED8EFB67EA3', undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDC0556D0F484ECAA | Since: 1207
 */
export function _0xDC0556D0F484ECAA() {
    Citizen.invokeNative('0xDC0556D0F484ECAA', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDC69F6913CCA0B99 | Since: 1207
 */
export function _0xDC69F6913CCA0B99() {
    Citizen.invokeNative('0xDC69F6913CCA0B99', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDD100CE1EBBF37E3 | Since: 1207
 */
export function _0xDD100CE1EBBF37E3() {
    Citizen.invokeNative('0xDD100CE1EBBF37E3', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDE8C5B9F65017FA1 | Since: 1207
 */
export function _0xDE8C5B9F65017FA1(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return Citizen.invokeNative('0xDE8C5B9F65017FA1', _train);
}
/**
 * No comment provided
 *
 * Hash: 0xE12F5ED49F44D40D | Since: 1207
 */
export function _0xE12F5ED49F44D40D() {
    Citizen.invokeNative('0xE12F5ED49F44D40D', undefined);
}
/**
 * Only used in R* SP Script rcm_abigail31: p1 = 5
 * _GET_VEHICLE_T* - _GET_VO*
 *
 * Hash: 0xE1C0F8781BF130C2 | Since: 1207
 */
export function _0xE1C0F8781BF130C2(wagon) {
    const _wagon = wagon instanceof IVehicle ? wagon.handle() : wagon;
    return Citizen.invokeNative('0xE1C0F8781BF130C2', _wagon, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xE682002DB1F30669 | Since: 1207
 */
export function _0xE682002DB1F30669() {
    Citizen.invokeNative('0xE682002DB1F30669', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE6BD7DD3FD474415 | Since: 1207
 */
export function _0xE6BD7DD3FD474415(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0xE6BD7DD3FD474415', _train, false);
}
/**
 * No comment provided
 *
 * Hash: 0xE777DDF3E78397E8 | Since: 1207
 */
export function _0xE777DDF3E78397E8() {
    return Citizen.invokeNative('0xE777DDF3E78397E8', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE78993FF9022C064 | Since: 1207
 */
export function _0xE78993FF9022C064() {
    Citizen.invokeNative('0xE78993FF9022C064', undefined);
}
/**
 * _SET_TRAIN_*
 *
 * Hash: 0xEF28A614B4B264B8 | Since: 1207
 */
export function _0xEF28A614B4B264B8(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0xEF28A614B4B264B8', _train, false);
}
/**
 * _IS_* (related to CREATE_MISSION_TRAIN)
 *
 * Hash: 0xF05DFAF1ADFEF2CD | Since: 1207
 */
export function _0xF05DFAF1ADFEF2CD(trainConfig, pos, direction) {
    if (typeof trainConfig === 'string')
        trainConfig = GetHashKey(trainConfig);
    return Citizen.invokeNative('0xF05DFAF1ADFEF2CD', trainConfig, pos.x, pos.y, pos.z, direction, false);
}
/**
 * No comment provided
 *
 * Hash: 0xF57DB8E83DCD8349 | Since: 1207
 */
export function _0xF57DB8E83DCD8349() {
    return Citizen.invokeNative('0xF57DB8E83DCD8349', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF5EA41C1408695FB | Since: 1207
 */
export function _0xF5EA41C1408695FB() {
    return Citizen.invokeNative('0xF5EA41C1408695FB', undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF6E3D38869D0F7AD | Since: 1207
 */
export function _0xF6E3D38869D0F7AD() {
    Citizen.invokeNative('0xF6E3D38869D0F7AD', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF8F7DA13CFBD4532 | Since: 1207
 */
export function _0xF8F7DA13CFBD4532(trackIndex) {
    Citizen.invokeNative('0xF8F7DA13CFBD4532', trackIndex, false);
}
/**
 * _SET_DRAFT_VEHICLE_*
 *
 * Hash: 0xFC4F15A7DDDC47B1 | Since: 1207
 */
export function _0xFC4F15A7DDDC47B1(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xFC4F15A7DDDC47B1', _vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0xFF2B1F59FB892F14 | Since: 1207
 */
export function _0xFF2B1F59FB892F14() {
    Citizen.invokeNative('0xFF2B1F59FB892F14', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFFFE15B433300B8C | Since: 1207
 */
export function _0xFFFE15B433300B8C() {
    Citizen.invokeNative('0xFFFE15B433300B8C', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x41503629D1139ABC | Since: 1207
 */
export function addTrainTemporaryStop(train, trackIndex, pos) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    AddTrainTemporaryStop(_train, trackIndex, pos.x, pos.y, pos.z);
}
/**
 * returns true if any wheel is destroyed/detached
 *
 * Hash: 0x18714953CCED17D3 | Since: 1207
 */
export function areAnyWheelsDestroyed(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0x18714953CCED17D3', _vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x316CDB5B6E8F4110 | Since: 1207
 */
export function attachDraftHarnessPed(mount, draft, harnessId) {
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    const _draft = draft instanceof IVehicle ? draft.handle() : draft;
    return AttachDraftVehicleHarnessPed(_mount, _draft, harnessId);
}
/**
 * Params: destroyingForce is usually 100f in R* Scripts
 * Similar to 0xD4F5EFB55769D272, _A*
 *
 * Hash: 0xC372B6A88F6E4AD8 | Since: 1207
 */
export function breakOffDraftWheel(vehicle, wheelIndex, destroyingForce) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    BreakOffDraftWheel(_vehicle, wheelIndex, destroyingForce);
}
/**
 * wheelIndex 0: left, wheelIndex 1: right, 4 & 5: unknown
 *
 * Hash: 0xD4F5EFB55769D272 | Since: 1207
 */
export function breakOffWheel(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return BreakOffVehicleWheel(_vehicle, wheelIndex);
}
/**
 * Only used to break draft vehicle log straps. Coords is always equal to the vehicle coords.
 *
 * Hash: 0xD1EFA8D68BF5D63D | Since: 1207
 */
export function breakStraps(vehicle, pos) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xD1EFA8D68BF5D63D', _vehicle, pos.x, pos.y, pos.z);
}
/**
 * Identical to CREATE_VEHICLE but allows to set draftAnimalPopGroup (see popgroups.#mt for DRAFT_HORSES_*)
 *
 * Hash: 0x214651FB1DFEBA89 | Since: 1207
 */
export function createDraft(modelHash, pos, heading, isNetwork, bScriptHostVeh, bDontAutoCreateDraftAnimals, draftAnimalPopGroup) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    if (typeof draftAnimalPopGroup === 'string')
        draftAnimalPopGroup = GetHashKey(draftAnimalPopGroup);
    return CreateDraftVehicle(modelHash, pos.x, pos.y, pos.z, heading, isNetwork, bScriptHostVeh, bDontAutoCreateDraftAnimals, draftAnimalPopGroup, false);
}
/**
 * configHash: https://alloc8or.re/rdr3/doc/enums/eTrainConfig.txt
 * For more information, see trainconfigs.ymt
 * To make the train AI controlled, set conductor to true and set the speed once.
 *
 * Hash: 0xC239DBD9A57D2A71 | Since: 1207
 */
export function createMissionTrain(configHash, pos, direction, passengers, conductor) {
    if (typeof configHash === 'string')
        configHash = GetHashKey(configHash);
    return CreateMissionTrain(configHash, pos.x, pos.y, pos.z, direction, passengers, false, conductor);
}
/**
 * Spawn without lanterns set
 *
 * Hash: 0xE1A83D4A3B5D7938 | Since: 1207
 */
export function deleteLanterns(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return DeleteVehicleLanterns(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x4402960666000E62 | Since: 1207
 */
export function detachDraftHarnessFromIndex(draft, harnessId) {
    const _draft = draft instanceof IVehicle ? draft.handle() : draft;
    return DetachDraftVehicleHarnessFromIndex(_draft, harnessId);
}
/**
 * No comment provided
 *
 * Hash: 0xB36D3EC70963BE60 | Since: 1207
 */
export function detachDraftHarnessPed(draft, ped) {
    const _draft = draft instanceof IVehicle ? draft.handle() : draft;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return DetachDraftVehicleHarnessPed(_draft, _ped);
}
/**
 * Only used in train_robbery4 R* Script
 * _C* - _DEL*
 *
 * Hash: 0x54CBDD6E1B4CB4DF | Since: 1207
 */
export function detachWagonEntityFromTrain(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    DetachWagonEntityFromTrain(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xC29996A337BDD099 | Since: 1207
 */
export function doesTrainExistOnTrack(trackIndex) {
    return DoesTrainExistOnTrack(trackIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x35DC1877312FBA0F | Since: 1207
 */
export function fadeAndDestroy(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    FadeAndDestroyVehicle(_vehicle);
}
/**
 * Collects all passenger peds (excluding the driver) from the specified wagon-type vehicle and adds them as indexed items to the provided itemset.
 * Notes:
 * - Always clear the itemset before calling.
 * - Returns 0 if the wagon is empty or auto-population is disabled
 * `(ENTITY::_0x119A5714578F4E05(wagon, false)).`
 * - Itemset may contain dead peds; filter with IS_ENTITY_DEAD if needed.
 * - Often used alongside wagon auto-population management.
 *
 * Hash: 0x0E558D3A49D759D6 | Since: 1207
 */
export function getAllTrainWagonPassengers(train, itemset) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return Citizen.invokeNative('0x0E558D3A49D759D6', _train, itemset);
}
/**
 * Returns the balloon object attached to a hot air balloon vehicle.
 *
 * If the input vehicle is a hot air balloon, the native returns the object entity
 * that represents the balloon itself (the inflated top part).
 * If the vehicle is not balloon-type or the balloon object does not exist,the function returns 0.
 * `Always validate the returned handle with ENTITY::DOES_ENTITY_EXIST.`
 * Notes:
 * - Only useful for hot air balloon vehicles.
 * - The returned handle is typically an OBJECT, not a PED or VEHICLE.
 *
 * Hash: 0x0BA4250D20007C2E | Since: 1207
 */
export function getBalloonObjectFrom(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0x0BA4250D20007C2E', _vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xE015CF1F2C0959D8 | Since: 1207
 */
export function getBreakableLocksState(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetBreakableVehicleLocksState(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x58F2244C1286D09A | Since: 1207
 */
export function getBreakableLockObject(vehicle, index) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetBreakableVehicleLockObject(_vehicle, index);
}
/**
 * No comment provided
 *
 * Hash: 0x35D302397E524939 | Since: 1207
 */
export function getCheckpointTrainSpawnLocation(trackIndex, pos, distance, direction) {
    return new Vector3(GetCheckpointTrainSpawnLocation(trackIndex, pos.x, pos.y, pos.z, distance, direction));
}
/**
 * Returns p0 for 0xBA958F68031DDBFC (trackIndex)
 *
 * Hash: 0xAF787E081AC4A8EE | Since: 1207
 */
export function getCurrentTrackForTrain(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetCurrentTrackForTrain(_train);
}
/**
 * `Returns rage::NumericLimits<float>::kMax (3.402823466e+38) if vehicle is not a valid vehicle of type VEHICLE_TYPE_DRAFT.`
 *
 * Hash: 0xC6D7DDC843176701 | Since: 1207
 */
export function getDraftDesiredSpeed(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetDraftVehicleDesiredSpeed(_vehicle);
}
/**
 * Returns the world coordinates of a junction node for the given train track configuration. trainTrack: see _RETURN_TRAIN_INFO_FROM_HANDLE.
 *
 * Hash: 0x785639D89F8451AB | Since: 1207
 */
export function getJunctionCoordsForTrainTrack(trainTrack, junctionIndex) {
    if (typeof trainTrack === 'string')
        trainTrack = GetHashKey(trainTrack);
    return new Vector3(Citizen.invokeNative('0x785639D89F8451AB', trainTrack, junctionIndex));
}
/**
 * No comment provided
 *
 * Hash: 0x6DE03BCC15E81710 | Since: 1207
 */
export function getNearestTrainTrackPosition(pos) {
    return new Vector3(GetNearestTrainTrackPosition(pos.x, pos.y, pos.z));
}
/**
 * No comment provided
 *
 * Hash: 0x2FA86833E3617E2D | Since: 1207
 */
export function getNumBreakableLockObjects(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetNumBreakableVehicleLockObjects(_vehicle);
}
/**
 * Returns amount for CAN_REGISTER_MISSION_VEHICLES
 *
 * Hash: 0x635423D55CA84FC8 | Since: 1207
 */
export function getNumCarsFromTrainConfig(trainConfig) {
    if (typeof trainConfig === 'string')
        trainConfig = GetHashKey(trainConfig);
    return GetNumCarsFromTrainConfig(trainConfig);
}
/**
 * Returns number of horses a wagon can have
 *
 * Hash: 0x5B1A26BB18E7D451 | Since: 1207
 */
export function getNumDraftHarnessPed(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetNumDraftVehicleHarnessPed(modelHash);
}
/**
 * Return the number of logs on a draft vehicle.
 *
 * Hash: 0x288CBB414C3C2FBB | Since: 1207
 */
export function getNumDraftLogs(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0x288CBB414C3C2FBB', _vehicle);
}
/**
 * Return the number of straps that hold the logs of a draft vehicle.
 *
 * Hash: 0x1121B07088ED3013 | Since: 1207
 */
export function getNumDraftStraps(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0x1121B07088ED3013', _vehicle);
}
/**
 * enum eDraftHarness
 * {
 * DRAFT_HARNESS_LR,
 * DRAFT_HARNESS_RR,
 * DRAFT_HARNESS_LM,
 * DRAFT_HARNESS_RM,
 * DRAFT_HARNESS_LF,
 * DRAFT_HARNESS_RF,
 * DRAFT_HARNESS_COUNT
 * };
 *
 * Hash: 0xA8BA0BAE0173457B | Since: 1207
 */
export function getPedInDraftHarness(vehicle, harnessId) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetPedInDraftHarness(_vehicle, harnessId);
}
/**
 * Returns handles of boat paddles entities.
 *
 * Hash: 0xA6E210FB4283B767 | Since: 1207
 */
export function getRowingOars(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetRowingOars(_vehicle);
}
/**
 * Returns Coords of vStation
 * p0 - NET_TRAIN_MANAGER_GET_TRAIN_STATION_DATA
 * _GET_P* - _GET_T*
 *
 * Hash: 0xBA958F68031DDBFC | Since: 1207
 */
export function getStationCoordsFromTrainStationData(trackIndex, stationIndex) {
    return new Vector3(GetStationCoordsFromTrainStationData(trackIndex, stationIndex));
}
/**
 * Returns the station hash for a track and station index.
 * - trackIndex: int — From 0 to 24
 * - stationIndex: int — From 0 to 7
 *
 * Hash: 0x9CC94A948EAF5372 | Since: 1207
 */
export function getStationFromTrainStationIndex(trackIndex, stationIndex) {
    return Citizen.invokeNative('0x9CC94A948EAF5372', trackIndex, stationIndex);
}
/**
 * Requires a visibility tracker on the vehicle (TRACK_VEHICLE_VISIBILITY)
 *
 * Hash: 0x13C190302369308B | Since: 1207
 */
export function getTrackAmountOfVisiblePixels(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0x13C190302369308B', _vehicle);
}
/**
 * Returns trackIndex
 * _E* - _F*
 *
 * Hash: 0x85D39F5E3B6D7EB0 | Since: 1207
 */
export function getTrackIndexFromCoords(pos) {
    return GetTrackIndexFromCoords(pos.x, pos.y, pos.z);
}
/**
 * Returns train car, use GET_TRAIN_CARRIAGE when trailerNumber is bigger than 0
 *
 * Hash: 0x671A07C9A1CD50A5 | Since: 1207
 */
export function getTrainCar(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainCar(_train);
}
/**
 * Returns iNumCars - to be used with GET_TRAIN_CARRIAGE (trailerNumber)
 * _C* (O, P, Q, R)
 *
 * Hash: 0x60B7D1DCC312697D | Since: 1207
 */
export function getTrainCarriageTrailerNumber(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainCarriageTrailerNumber(_train);
}
/**
 * No comment provided
 *
 * Hash: 0x3C9628A811CBD724 | Since: 1207
 */
export function getTrainDirection(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainDirection(_train);
}
/**
 * https://i.imgur.com/1rHibjW.jpg
 *
 * Hash: 0x67995318F5FAA496 | Since: 1207
 */
export function getTrainDirectionFromIndex(trackIndex) {
    return GetTrainDirectionFromIndex(trackIndex);
}
/**
 * Returns modelHash
 *
 * Hash: 0x8DF5F6A19F99F0D5 | Since: 1207
 */
export function getTrainModelFromTrainConfigByCarIndex(trainConfig, trainCarIndex) {
    if (typeof trainConfig === 'string')
        trainConfig = GetHashKey(trainConfig);
    return GetTrainModelFromTrainConfigByCarIndex(trainConfig, trainCarIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x1E8A921112891651 | Since: 1207
 */
export function getTrainPositionOnTrack(trackIndex) {
    return new Vector3(GetTrainPositionOnTrack(trackIndex));
}
/**
 * Returns trackIndex
 *
 * Hash: 0x45853F4E17D847D5 | Since: 1207
 */
export function getTrainTrackFromTrain(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainTrackFromTrainVehicle(_train);
}
/**
 * Outputs junctionIndex, to be used with 0xE6C5E2125EB210C1
 *
 * Hash: 0x86AFC343CF7F0B34 | Since: 1207
 */
export function getTrainTrackJunctionAtCoords(trainTrack, pos) {
    if (typeof trainTrack === 'string')
        trainTrack = GetHashKey(trainTrack);
    return GetTrainTrackJunctionAtCoords(trainTrack, pos.x, pos.y, pos.z);
}
/**
 * Returns train
 *
 * Hash: 0x6E585A616ABB8401 | Since: 1207
 */
export function getTrainFromTrackIndex(trackIndex) {
    return GetTrainVehicleFromTrackIndex(trackIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xDD1E1393D966D39A | Since: 1207
 */
export function getDoorsLockedForTeam(vehicle, team) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleDoorsLockedForTeam(_vehicle, team);
}
/**
 * No comment provided
 *
 * Hash: 0xD798DF5DB67B1659 | Since: 1207
 */
export function getIsPropSetApplied(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleIsPropSetApplied(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xBB765B8FD49A796C | Since: 1207
 */
export function getLivery(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleLivery(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xB729679356A889AE | Since: 1207
 */
export function getOwner(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleOwner(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xA44D65E6C624526F | Since: 1207
 */
export function getTint(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleTint(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xFF5791B7639C2A46 | Since: 1207
 */
export function getTurretSeat(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleTurretSeat(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xBD3C4A2ED509205E | Since: 1207
 */
export function hasTrainLoaded(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return HasTrainLoaded(_train);
}
/**
 * No comment provided
 *
 * Hash: 0x201B8ED4FF7FE9F5 | Since: 1207
 */
export function hideHorseReins(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    HideHorseReins(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x30D86B2B7622D0EB | Since: 1207
 */
export function isBoatGrounded(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsBoatGrounded(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xB213D2A560B2E48B | Since: 1207
 */
export function isPedExclusiveDriverOf(ped, vehicle) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsPedExclusiveDriverOfVehicle(_ped, _vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xB9D5BDDA88E1BB66 | Since: 1207
 */
export function isThisModelADraft(model) {
    if (typeof model === 'string')
        model = GetHashKey(model);
    return IsThisModelADraftVehicle(model);
}
/**
 * Only returns true if BRING_VEHICLE_TO_HALT is called on vehicle beforehand
 *
 * Hash: 0x404527BC03DA0E6C | Since: 1207
 */
export function isBroughtToHalt(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleBroughtToHalt(_vehicle);
}
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0xE979BB5602AD3402 | Since: 1207
 */
export function isDoorBroken(vehicle, doorId) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleDoorBroken(_vehicle, doorId);
}
/**
 * No comment provided
 *
 * Hash: 0x5136B284B67B35C7 | Since: 1207
 */
export function isFadingOut(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleFadingOut(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x0E3BF7ED4169EC43 | Since: 1207
 */
export function isOnFire(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleOnFire(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xCB2CA620C48BC875 | Since: 1207
 */
export function isWheelDestroyed(vehicle, wheel) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleWheelDestroyed(_vehicle, wheel);
}
/**
 * Returns the log prop entity that is currently detaching/falling from a draft (log) wagon. Returns 0 if no log is in the falling phase. R* scripts call this repeatedly to fetch each fallen piece, then apply forces to it.
 *
 * Hash: 0x42404D57D621601A | Since: 1207
 */
export function recoverDraftFallingLog(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0x42404D57D621601A', _vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xCF9DA72002FC16BF | Since: 1207
 */
export function requestAssetAnims(ped, entity, vehicleAsset) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xCF9DA72002FC16BF', _ped, _entity, vehicleAsset);
}
/**
 * Outputs track hash and junction index on given train vehicle handle.
 * _RESET_VEHICLE_* (?)
 *
 * Hash: 0x09034479E6E3E269 | Since: 1207
 */
export function returnTrainInfoFromHandle(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return Citizen.invokeNative('0x09034479E6E3E269', _train);
}
/**
 * No comment provided
 *
 * Hash: 0x138398153824E332 | Since: 1207
 */
export function setAllJunctionsCleared() {
    SetAllJunctionsCleared();
}
/**
 * No comment provided
 *
 * Hash: 0x424FFCB9F0D2D4B5 | Since: 1207
 */
export function setAllGeneratorsDisabledForVolume(volume, toggle) {
    SetAllVehicleGeneratorsDisabledForVolume(volume, toggle);
}
/**
 * Params: 1.0f will make balloon hover
 *
 * Hash: 0x7C9E45A4CED2E8DA | Since: 1207
 */
export function setBalloonHoverState(balloon) {
    const _balloon = balloon instanceof IVehicle ? balloon.handle() : balloon;
    SetBalloonHoverState(_balloon, 0);
}
/**
 * Total height is calculated using: cargo ratio + pelt ratio (by pelt count)
 * Screenshot: https://imgur.com/a/nsomtiv
 *
 * Hash: 0x31F343383F19C987 | Since: 1207
 */
export function setBatchTarpHeight(vehicle, height, immediately) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetBatchTarpHeight(_vehicle, height, immediately);
}
/**
 * No comment provided
 *
 * Hash: 0x8C6D9A399126C194 | Since: 1207
 */
export function setDraftAnimalRandomSeed(vehicle, seed) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDraftAnimalRandomSeed(_vehicle, seed);
}
/**
 * No comment provided
 *
 * Hash: 0x87344305778E5415 | Since: 1207
 */
export function setDraftAllowDraftAnimalAutoCreation(vehicle, allow) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDraftVehicleAllowDraftAnimalAutoCreation(_vehicle, allow);
}
/**
 * No comment provided
 *
 * Hash: 0x6090A031C69F384E | Since: 1207
 */
export function setDraftAnimalsCanDetach(draft, canDetach) {
    const _draft = draft instanceof IVehicle ? draft.handle() : draft;
    SetDraftVehicleAnimalsCanDetach(_draft, canDetach);
}
/**
 * No comment provided
 *
 * Hash: 0x0C3F0F7F92CA847C | Since: 1207
 */
export function setDraftDesiredSpeed(vehicle, speed) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDraftVehicleDesiredSpeed(_vehicle, speed);
}
/**
 * No comment provided
 *
 * Hash: 0x226C6A4E3346D288 | Since: 1207
 */
export function setDraftYokeCanBreak(draft, canBreak) {
    const _draft = draft instanceof IVehicle ? draft.handle() : draft;
    SetDraftVehicleYokeCanBreak(_draft, canBreak);
}
/**
 * Hashes: COACH2_BOOT_LOOT_ITEMS_COACHROB_RSC, COACH2_BOOT_LOOT_ITEMS_COACHROB, COACH2_MARY3
 *
 * Hash: 0xF489F94BFEE12BB0 | Since: 1207
 */
export function setForceCoachRobberyLoot(vehicle, coachrobberyLoot) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    if (typeof coachrobberyLoot === 'string')
        coachrobberyLoot = GetHashKey(coachrobberyLoot);
    SetForceCoachRobberyLoot(_vehicle, coachrobberyLoot);
}
/**
 * No comment provided
 *
 * Hash: 0x1098CDA477890165 | Since: 1207
 */
export function setForceHighLod(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetForceHighLodVehicle(_vehicle, false);
}
/**
 * No comment provided
 *
 * Hash: 0xF5FFB08976911B50 | Since: 1207
 */
export function setHorseTrafficGroupingDistribution() {
    SetHorseTrafficGroupingDistribution(undefined, undefined, undefined, undefined);
}
/**
 * Notice: BOOL p4 was wrongly named takePassengers (?)
 * Can be used to rotate the train by setting the BOOL direction
 *
 * Hash: 0xC9EA26893C9E4024 | Since: 1207
 */
export function setMissionTrainWarpToCoords(train, pos, direction) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetMissionTrainWarpToCoords(_train, pos.x, pos.y, pos.z, direction);
}
/**
 * No comment provided
 *
 * Hash: 0x1BFBAFCC6760FF02 | Since: 1207
 */
export function setRandomTrainsWhistleEnabled(train, enabled) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0x1BFBAFCC6760FF02', _train, enabled);
}
/**
 * Enables/disables damage/explosion flags on the engine and all attached cars; typically set true before EXPLODE_VEHICLE.
 *
 * Hash: 0x07E2E21E799080A0 | Since: 1207
 */
export function setTrainDestructionEnabled(train, enabled) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0x07E2E21E799080A0', _train, enabled);
}
/**
 * No comment provided
 *
 * Hash: 0x3660BCAB3A6BB734 | Since: 1207
 */
export function setTrainHalt(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainHalt(_train);
}
/**
 * Restarts the train
 *
 * Hash: 0x787E43477746876F | Since: 1207
 */
export function setTrainLeaveStation(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainLeaveStation(_train);
}
/**
 * Maximum possible speed is 30.0 (108 km/h)
 *
 * Hash: 0x9F29999DFDF2AEB8 | Since: 1207
 */
export function setTrainMaxSpeed(train, speed) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainMaxSpeed(_train, speed);
}
/**
 * No comment provided
 *
 * Hash: 0x4182C037AA1F0091 | Since: 1207
 */
export function setTrainStopsForStations(train, toggle) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainStopsForStations(_train, toggle);
}
/**
 * trainTrack: FREIGHT_GROUP, TRAINS3, BRAITHWAITES2_TRACK_CONFIG, TRAINS_OLD_WEST01, TRAINS_OLD_WEST03, TRAINS_NB1, TRAINS_INTERSECTION1_ANN
 *
 * Hash: 0xE6C5E2125EB210C1 | Since: 1207
 */
export function setTrainTrackJunctionSwitch(trainTrack, junctionIndex, enabled) {
    if (typeof trainTrack === 'string')
        trainTrack = GetHashKey(trainTrack);
    SetTrainTrackJunctionSwitch(trainTrack, junctionIndex, enabled);
}
/**
 * No comment provided
 *
 * Hash: 0x8E5DA070BAD3279E | Since: 1207
 */
export function setDeterioration(vehicle, amount) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDeterioration(_vehicle, amount, 0, false);
}
/**
 * dirtLevel: 0.0 - 1.0
 *
 * Hash: 0xBAE0EEDF93F05EAA | Since: 1207
 */
export function setDirtLevel2(vehicle, dirtLevel) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDirtLevel2(_vehicle, dirtLevel);
}
/**
 * No comment provided
 *
 * Hash: 0xCE1531927AD6C9F8 | Since: 1207
 */
export function setIsInHurry(vehicle, enabled) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleIsInHurry(_vehicle, enabled);
}
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_liveries.lua
 *
 * Hash: 0xF89D82A0582E46ED | Since: 1207
 */
export function setLivery(vehicle, liveryIndex) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleLivery(_vehicle, liveryIndex);
}
/**
 * Ranges from -1 to 2? (internal type is int8)
 * https://imgur.com/a/bPzHcft
 *
 * Hash: 0x3FA7D7D1E0EA809E | Since: 1207
 */
export function setLodLevel(vehicle, lodLevel) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleLodLevel(_vehicle, lodLevel);
}
/**
 * mudLevel: 0.0 - 1.0
 *
 * Hash: 0x4D15E49764CB328A | Since: 1207
 */
export function setMudLevel(vehicle, mudLevel) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleMudLevel(_vehicle, mudLevel);
}
/**
 * Picks the road/path link nearest (start to end) and stores it on the vehicle's driving component (used by R* Scripts to choose an exit link).
 *
 * Hash: 0xC2E62678D602853C | Since: 1207
 */
export function setRoadLinkForced(vehicle, startX, startY, startZ, endX, endY, endZ) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xC2E62678D602853C', _vehicle, startX, startY, startZ, endX, endY, endZ);
}
/**
 * snowLevel: 0.0 - 1.0
 *
 * Hash: 0x6F73EFAB11651D7F | Since: 1207
 */
export function setSnowLevel(vehicle, snowLevel) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleSnowLevel(_vehicle, snowLevel);
}
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_tints.lua
 *
 * Hash: 0x8268B098F6FCA4E2 | Since: 1207
 */
export function setTint(vehicle, tintId) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleTint(_vehicle, tintId);
}
/**
 * wetLevel: 0.0 - 1.0
 *
 * Hash: 0x5AABB09F6FBD1F87 | Since: 1207
 */
export function setWetLevel(vehicle, wetLevel) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWetLevel(_vehicle, wetLevel);
}
/**
 * No comment provided
 *
 * Hash: 0x41CDA90EE3450921 | Since: 1207
 */
export function showHorseReins(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ShowHorseReins(_vehicle);
}
/**
 * whistleSequence: ACKNOWLEDGE, BACKING_UP, CROSSING, DANGER, MOVING, NEXT_STATION, PASSING, STOPPED
 * p2 = true seems to mute the sound
 *
 * Hash: 0xCFE122EC635CC2B2 | Since: 1207
 */
export function triggerTrainWhistle(train) {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return TriggerTrainWhistle(_train, false, false);
}
