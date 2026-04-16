import { Vector3, IEntity, IPed, IPlayer, IVehicle } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x4C221BAC54D735C3 | Since: 1207
 */
export declare function addRoadNodeSpeedZone(): number;
/**
 * Returns false if every seat is occupied.
 *
 * Hash: 0xA0A424505A1B6429 | Since: 1207
 */
export declare function areAnySeatsFree(vehicle: number | IVehicle): boolean;
/**
 * This native makes the vehicle stop immediately
 *
 * distance defines how far it will travel until stopping.
 *
 * Hash: 0x260BE8F09E326A20 | Since: 1207
 */
export declare function bringToHalt(vehicle: number | IVehicle, distance: number, duration: number, _unknown: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC075176CFB8B4128 | Since: 1207
 */
export declare function canAnchorBoatHere(vehicle: number | IVehicle): boolean;
/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 *
 * Hash: 0xF8B2D32A2231FD24 | Since: 1207
 */
export declare function canShuffleSeat(vehicle: number | IVehicle, seatIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0EFC5DC62E67609B | Since: 1207
 */
export declare function clearLastDriven(): void;
/**
 * Copies sourceVehicle's damage (broken bumpers, broken lights, etc.) to targetVehicle.
 *
 * Hash: 0xDBC28A8C683CD80B | Since: 1207
 */
export declare function copyDamages(sourceVehicle: number | IVehicle, targetVehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xAF35D0D2583051B0 | Since: 1207
 */
export declare function create(modelHash: number | string, pos: Vector3, heading: number, isNetwork: boolean, bScriptHostVeh: boolean, bDontAutoCreateDraftAnimals: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0xA3120A1385F17FF7 | Since: 1207
 */
export declare function deleteAllTrains(): void;
/**
 * No comment provided
 *
 * Hash: 0x0D3630FB07E8B570 | Since: 1207
 */
export declare function deleteMissionTrain(): number;
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
export declare function deleteVehicle(): number;
/**
 * No comment provided
 *
 * Hash: 0x94B1E71B144356A5 | Since: 1207
 */
export declare function disableWeapon(disabled: boolean, weaponHash: number | string, vehicle: number | IVehicle, owner: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xAF5E7E9A7620FFB5 | Since: 1207
 */
export declare function doesExtraExist(vehicle: number | IVehicle, extraId: number): boolean;
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
export declare function explode(vehicle: number | IVehicle, isAudible: boolean, isInvisible: boolean): void;
/**
 * Often called after START_PLAYBACK_RECORDED_VEHICLE and SKIP_TIME_IN_PLAYBACK_RECORDED_VEHICLE; similar in use to FORCE_ENTITY_AI_AND_ANIMATION_UPDATE.
 *
 * Hash: 0x59ECA796021B0539 | Since: 1207
 */
export declare function forcePlaybackRecordedUpdate(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x52F45D033645181B | Since: 1207
 */
export declare function getClosest(pos: Vector3, radius: number, modelHash: number | string, flags: number): number;
/**
 * Returns p1 for 0xBA958F68031DDBFC (stationIndex)
 *
 * Hash: 0x86FA6D8B48667D75 | Since: 1207
 */
export declare function getCurrentStationForTrain(train: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xA19447D83294E29F | Since: 1207
 */
export declare function getDraftAnimalCount(vehicle: number | IVehicle): [boolean, number, number];
/**
 * No comment provided
 *
 * Hash: 0x2963B5C1637E8A27 | Since: 1207
 */
export declare function getDriverOf(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xA94F3E0AB9695E19 | Since: 1207
 */
export declare function getLastDriven(): number;
/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 *
 * Hash: 0x74583B19FEEAFDA7 | Since: 1207
 */
export declare function getLastPedInSeat(vehicle: number | IVehicle, seatIndex: number): number;
/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 *
 * Hash: 0xBB40DD2270B65366 | Since: 1207
 */
export declare function getPedInSeat(vehicle: number | IVehicle, seatIndex: number): number;
/**
 * This native does no interpolation between pathpoints. The same position will be returned for all times up to the next pathpoint in the recording.
 *
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0x1A00961A1BE94E5E | Since: 1207
 */
export declare function getPositionOfRecordingAtTime(recording: number, time: number): [Vector3, string];
/**
 * This native does no interpolation between pathpoints. The same rotation will be returned for all times up to the next pathpoint in the recording.
 *
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0x61787DD28B8CC0D5 | Since: 1207
 */
export declare function getRotationOfRecordingAtTime(recording: number, time: number): [Vector3, string];
/**
 * No comment provided
 *
 * Hash: 0x233B51C7913FA031 | Since: 1207
 */
export declare function getTimePositionInRecording(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x865FEC2FA899F29C | Since: 1207
 */
export declare function getTrackIndexOfTrain(train: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xD0FB093A4CDB932C | Since: 1207
 */
export declare function getTrainCarriage(train: number | IVehicle, trailerNumber: number): number;
/**
 * Seems related to vehicle health, like the one in IV.
 * Max 1000, min 0.
 * Vehicle does not necessarily explode or become undrivable at 0.
 *
 * Hash: 0x42113B857E33C16E | Since: 1207
 */
export declare function getBodyHealth(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xFA2CDDFEB8BC898B | Since: 1207
 */
export declare function getDoorsLockedForPlayer(vehicle: number | IVehicle, player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC867FD144F2469D3 | Since: 1207
 */
export declare function getDoorLockStatus(vehicle: number | IVehicle): number;
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
export declare function getEngineHealth(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xFE52F34491529F0B | Since: 1207
 */
export declare function getEstimatedMaxSpeed(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xA9C55F1C15E62E06 | Since: 1207
 */
export declare function getMaxNumberOfPassengers(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x9A578736FF3A17C3 | Since: 1207
 */
export declare function getModelNumberOfSeats(modelHash: number | string): number;
/**
 * Gets the number of passengers, NOT including the driver. Use IS_VEHICLE_SEAT_FREE(Vehicle, -1) to also check for the driver
 *
 * Hash: 0x59F3F16577CD79B2 | Since: 1207
 */
export declare function getNumberOfPassengers(vehicle: number | IVehicle): number;
/**
 * 1000 is max health
 *
 * Hash: 0x1E5A9B356D5098BE | Since: 1207
 */
export declare function getPetrolTankHealth(vehicle: number | IVehicle): number;
/**
 * Gets the trailer of a vehicle and puts it into the trailer parameter.
 *
 * Hash: 0xCF867A239EC30741 | Since: 1207
 */
export declare function getTrailerVehicle(vehicle: number | IVehicle): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x2701D01D5E18FC31 | Since: 1207
 */
export declare function hasInstantFillPopulationFinished(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB935F3154BC913C8 | Since: 1207
 */
export declare function hasAssetLoaded(vehicleAsset: number | string): boolean;
/**
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0xBA9325BE372AB6EA | Since: 1207
 */
export declare function hasRecordingBeenLoaded(recording: number): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x1FF00DB43026B12F | Since: 1207
 */
export declare function instantlyFillPopulation(): void;
/**
 * No comment provided
 *
 * Hash: 0x5698BA4FD04D39C4 | Since: 1207
 */
export declare function isAnyNearPoint(pos: Vector3, radius: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEA44E97849E9F3DD | Since: 1207
 */
export declare function isDraft(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x80DDCCB2F4A3EB57 | Since: 1207
 */
export declare function isEntryPointForSeatClear(ped: number | IPed, vehicle: number | IVehicle, seatIndex: number, side: boolean, onEnter: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x02774B3A9034278F | Since: 1207
 */
export declare function isPlaybackGoingOnFor(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5A7472606EC5B7C1 | Since: 1207
 */
export declare function isPlaybackUsingAiGoingOnFor(vehicle: number | IVehicle): boolean;
/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 *
 * Hash: 0x7892685BF6D9775E | Since: 1207
 */
export declare function isSeatWarpOnly(vehicle: number | IVehicle, seatIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x799CFC7C5B743B15 | Since: 1207
 */
export declare function isThisModelABoat(model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFC08C8F8C1EDF174 | Since: 1207
 */
export declare function isThisModelATrain(model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE887BD31D97793F6 | Since: 1207
 */
export declare function isTrainWaitingAtStation(train: number | IVehicle): boolean;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0x7AE191143C7A9107 | Since: 1207
 */
export declare function isDoorFullyOpen(vehicle: number | IVehicle, doorId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB86D29B10F627379 | Since: 1207
 */
export declare function isDriveable(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFA9A55D9C4351625 | Since: 1207
 */
export declare function isExtraTurnedOn(vehicle: number | IVehicle, extraId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3F5029A8FC060C48 | Since: 1207
 */
export declare function isInBurnout(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0045A54EC7A22455 | Since: 1207
 */
export declare function isModel(vehicle: number | IVehicle, model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0D5D119529654EE0 | Since: 1207
 */
export declare function isOnAllWheels(vehicle: number | IVehicle): boolean;
/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 * Use GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS(vehicle) - 1 for last seat index.
 *
 * Hash: 0xE052C1B1CAA4ECE4 | Since: 1207
 */
export declare function isSeatFree(vehicle: number | IVehicle, seatIndex: number): boolean;
/**
 * Returns true if the vehicle's current speed is less than, or equal to 0.0025f.
 *
 * For some vehicles it returns true if the current speed is <= 0.00039999999.
 *
 * Hash: 0x78C3311A73135241 | Since: 1207
 */
export declare function isStopped(vehicle: number | IVehicle): boolean;
/**
 * VEH_STUCK_ON_ROOF = 0,
 * VEH_STUCK_ON_SIDE,
 * VEH_STUCK_HUNG_UP,
 * VEH_STUCK_JAMMED
 *
 * Hash: 0x1ABA9753939503C5 | Since: 1207
 */
export declare function isStuckTimerUp(vehicle: number | IVehicle, stuckType: number, ms: number): boolean;
/**
 * Requires a visibility tracker on the vehicle (TRACK_VEHICLE_VISIBILITY)
 *
 * Hash: 0x424910CD5DE8C246 | Since: 1207
 */
export declare function isVisible(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0E7910A63E05B12C | Since: 1436
 */
export declare function isWindowIntact(vehicle: number | IVehicle, windowIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDDBEA5506C848227 | Since: 1207
 */
export declare function isWrecked(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1EF36558FBDE2DAA | Since: 1207
 */
export declare function lockDoorsWhenNoLongerNeeded(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x35AD938C74CACD6A | Since: 1207
 */
export declare function modifyTopSpeed(vehicle: number | IVehicle, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFE9AB3354ACE6C9C | Since: 1207
 */
export declare function removeRoadNodeSpeedZone(speedzone: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC619A44639BC0CB4 | Since: 1207
 */
export declare function removesFromGeneratorsInArea(): void;
/**
 * No comment provided
 *
 * Hash: 0x888A4E675B38F5AD | Since: 1207
 */
export declare function removeAsset(vehicleAsset: number | string): void;
/**
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0x139E35755418F6AA | Since: 1207
 */
export declare function removeRecording(): any;
/**
 * windowIndex:
 * 0 = Front Right Window
 * 1 = Front Left Window
 * 2 = Back Right Window
 * 3 = Back Left Window
 *
 * Hash: 0x745F15A215F2DDF1 | Since: 1207
 */
export declare function removeWindow(vehicle: number | IVehicle, windowIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x81A15811460FAB3A | Since: 1207
 */
export declare function requestAsset(vehicleHash: number | string, vehicleAsset: number): void;
/**
 * No comment provided
 *
 * Hash: 0x84B81EF78BD22357 | Since: 1207
 */
export declare function requestHighDetailModel(vehicle: number | IVehicle): void;
/**
 * Request the vehicle recording defined by the lowercase format string "%s%03d.yvr". For example, REQUEST_VEHICLE_RECORDING(1, "FBIs1UBER") corresponds to fbis1uber001.yvr.
 * For all vehicle recording/playback natives, "script" is a common prefix that usually corresponds to the script/mission the recording is used in, "recording" is its int suffix, and "id" corresponds to a unique identifier within the recording streaming module.
 * (GTA) Note that only 24 recordings (hardcoded in multiple places) can ever active at a given time before clobbering begins.
 *
 * Hash: 0xC474CF16EDA45DC9 | Since: 1207
 */
export declare function requestRecording(recording: number): string;
/**
 * No comment provided
 *
 * Hash: 0x23298B468F7D88B6 | Since: 1207
 */
export declare function resetStuckTimer(vehicle: number | IVehicle, nullAttributes: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8D3230A0ED7DE39F | Since: 1207
 */
export declare function setAllowExplodesOnContact(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x3D596E6E88A02C24 | Since: 1207
 */
export declare function setAllGeneratorsActive(): void;
/**
 * No comment provided
 *
 * Hash: 0xBBB134FB9D50C0CC | Since: 1207
 */
export declare function setAllGeneratorsActiveInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
/**
 * No comment provided
 *
 * Hash: 0xAEAB044F05B92659 | Since: 1207
 */
export declare function setBoatAnchor(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Value: mostly 99999.9f
 *
 * Old name: _SET_BOAT_MOVEMENT_RESISTANCE
 *
 * Hash: 0xE3261532550D6A9F | Since: 1207
 */
export declare function setBoatLowLodAnchorDistance(vehicle: number | IVehicle, value: number): void;
/**
 * Old name: _SET_BOAT_FROZEN_WHEN_ANCHORED
 *
 * Hash: 0x286771F3059A37A7 | Since: 1207
 */
export declare function setBoatRemainsAnchoredWhilePlayerIsDriver(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x62A6D317A011EA1D | Since: 1207
 */
export declare function setBoatSinksWhenWrecked(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xBC4735F48CD983EF | Since: 1207
 */
export declare function setBreakableLocksUnbreakable(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xD4288603E8766FF7 | Since: 1207
 */
export declare function setDisableRandomTrainsThisFrame(toggle: boolean): void;
/**
 * Old name: _SET_DISABLE_SUPERDUMMY_MODE
 *
 * Hash: 0x1716D787D9B94202 | Since: 1232
 */
export declare function setDisableSuperdummy(vehicle: number | IVehicle, disable: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xD146EE5F2B06B95E | Since: 1207
 */
export declare function setDisableEngineFires(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x5795FBE7A2001C14 | Since: 1207
 */
export declare function setDisablePetrolTankDamage(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xB70986AB19B04AFF | Since: 1207
 */
export declare function setDisablePetrolTankFires(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x63DC1F22C903B709 | Since: 1207
 */
export declare function setDontAllowPlayerToEnterIfLockedForPlayer(vehicle: number | IVehicle): void;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Old name: _SET_VEHICLE_DOOR_CAN_BREAK
 *
 * Hash: 0x081FB9D6422F804C | Since: 1207
 */
export declare function setDoorAllowedToBeBrokenOff(vehicle: number | IVehicle, doorId: number, isBreakable: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x73F1E4F6DF26FE30 | Since: 1207
 */
export declare function setEnableSlipstreaming(): void;
/**
 * No comment provided
 *
 * Hash: 0x373CB1283308BD7B | Since: 1207
 */
export declare function setForceHd(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Sets boat to be anchored on spawn, called together with SET_BOAT_ANCHOR and _SET_BOAT_ANCHOR_BUOYANCY_COEFFICIENT
 *
 * Hash: 0x75B49ACD73617437 | Since: 1207
 */
export declare function setForceLowLodAnchorMode(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x7F8E2B131E1DCA6C | Since: 1207
 */
export declare function setForceEngineDamageByBullet(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * flags = 0: DEFAULT; 1: KEEP_OLD_SPEED
 *
 * Hash: 0xBBE7648349B49BE8 | Since: 1207
 */
export declare function setMissionTrainAsNoLongerNeeded(flags: number): number;
/**
 * No comment provided
 *
 * Hash: 0x7632755962AB9922 | Since: 1207
 */
export declare function setMissionTrainCoords(train: number | IVehicle, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xFEDFA97638D61D4A | Since: 1207
 */
export declare function setParkedDensityMultiplierThisFrame(multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x838C216C2B05A009 | Since: 1207
 */
export declare function setPedOwns(ped: number | IPed, vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xD78084EED4CD94C6 | Since: 1207
 */
export declare function setPlaybackSpeed(vehicle: number | IVehicle, speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF44D446D4E36DB87 | Since: 1207
 */
export declare function setRandomBoats(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1156C6EE7E82A98A | Since: 1207
 */
export declare function setRandomTrains(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1F91D44490E1EA0C | Since: 1207
 */
export declare function setRandomDensityMultiplierThisFrame(multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x01021EB2E96B793C | Since: 1207
 */
export declare function setTrainCruiseSpeed(train: number | IVehicle, speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8EC47DD4300BF063 | Since: 1207
 */
export declare function setTrainOffsetFromStation(train: number | IVehicle, offset: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDFBA6BBFF7CCAFBB | Since: 1207
 */
export declare function setTrainSpeed(train: number | IVehicle, speed: number): void;
/**
 * Used to be incorrectly named SET_VEHICLE_EXCLUSIVE_DRIVER
 *
 * Hash: 0x0893DAFBFA67110E | Since: 1207
 */
export declare function setAiCanUseExclusiveSeats(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1240E8596A8308B9 | Since: 1207
 */
export declare function setAllowHomingMissleLockon(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Makes the vehicle accept no passengers.
 *
 * Hash: 0xECB9E9BC887E8060 | Since: 1207
 */
export declare function setAllowNoPassengersLockon(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x501354951CD942DE | Since: 1207
 */
export declare function setAutomaticallyAttaches(vehicle: number | IVehicle): any;
/**
 * No comment provided
 *
 * Hash: 0x55CCAAE4F28C67A0 | Since: 1207
 */
export declare function setBodyHealth(vehicle: number | IVehicle, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCEC4CA2CAB8FA98C | Since: 1207
 */
export declare function setBrokenPartsDontAffectAiHandling(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x05254BA0B44ADC16 | Since: 1207
 */
export declare function setCanBeTargetted(vehicle: number | IVehicle, state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xE42952510F84AFDB | Since: 1207
 */
export declare function setCanBeUsedByFleeingPeds(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x4BF8131AE811541C | Since: 1207
 */
export declare function setCanBeVisiblyDamaged(vehicle: number | IVehicle, state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC5ED9D59B4646611 | Since: 1207
 */
export declare function setCanBreak(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x065D03A9D6B2C6B5 | Since: 1207
 */
export declare function setCanEjectPassengersIfLocked(vehicle: number | IVehicle): void;
/**
 * Apply damage to vehicle at a location. Location is relative to vehicle model (not world).
 *
 * Radius of effect damage applied in a sphere at impact location
 *
 * Hash: 0x1D7678F81452BB41 | Since: 1207
 */
export declare function setDamage(vehicle: number | IVehicle, xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number): void;
/**
 * No comment provided
 *
 * Hash: 0x606374EBFC27B133 | Since: 1207
 */
export declare function setDensityMultiplierThisFrame(multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x758C3460EE915D0A | Since: 1207
 */
export declare function setDirtLevel(vehicle: number | IVehicle, dirtLevel: number): void;
/**
 * No comment provided
 *
 * Hash: 0x96F78A6A075D55D9 | Since: 1207
 */
export declare function setDoorsLocked(vehicle: number | IVehicle, doorLockStatus: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2381977DA948F8DC | Since: 1207
 */
export declare function setDoorsLockedForAllPlayers(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x359A8EA1FB8D6F0F | Since: 1207
 */
export declare function setDoorsLockedForPlayer(vehicle: number | IVehicle, player: number | string | IPlayer, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xE712BC978770F105 | Since: 1207
 */
export declare function setDoorsLockedForTeam(vehicle: number | IVehicle, team: number, toggle: boolean): void;
/**
 * Closes all doors of a vehicle:
 *
 * Hash: 0xA4FFCD645B11F25A | Since: 1207
 */
export declare function setDoorsShut(vehicle: number | IVehicle, closeInstantly: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x362CEDD2A41E0747 | Since: 1232
 */
export declare function setDoorsToOpenAtAnyDistance(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0x9666CF20A1C6D780 | Since: 1207
 */
export declare function setDoorBroken(vehicle: number | IVehicle, doorId: number, deleteDoor: boolean): void;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0xD57F10EBBA814ECF | Since: 1207
 */
export declare function setDoorControl(vehicle: number | IVehicle, doorId: number, speed: number, angle: number): void;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0x06F8A202EB312A3C | Since: 1207
 */
export declare function setDoorLatched(vehicle: number | IVehicle, doorId: number): void;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * Can also be used on trains and its wagons
 *
 * Hash: 0x550CE392A4672412 | Since: 1207
 */
export declare function setDoorOpen(vehicle: number | IVehicle, doorId: number, loose: boolean, openInstantly: boolean): void;
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
export declare function setDoorShut(vehicle: number | IVehicle, doorId: number, closeInstantly: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x48E4C137A71C2688 | Since: 1207
 */
export declare function setEngineCanDegrade(vehicle: number | IVehicle, toggle: boolean): void;
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
export declare function setEngineHealth(vehicle: number | IVehicle, health: number): void;
/**
 * Starts or stops the engine on the specified vehicle.
 *
 * vehicle: The vehicle to start or stop the engine on.
 * value: true to turn the vehicle on; false to turn it off.
 * instantly: if true, the vehicle will be set to the state immediately; otherwise, the current driver will physically turn on or off the engine.
 *
 * Hash: 0xB64CFA14CB9A2E78 | Since: 1207
 */
export declare function setEngineOn(vehicle: number | IVehicle, value: boolean, instantly: boolean): void;
/**
 * index: 0 - 1
 *
 * Used to be incorrectly named _SET_VEHICLE_EXCLUSIVE_DRIVER_2
 *
 * Hash: 0xC6B9BF123B9463B6 | Since: 1207
 */
export declare function setExclusiveDriver(vehicle: number | IVehicle, ped: number | IPed, index: number): void;
/**
 * Sets a vehicle to be strongly resistant to explosions. p0 is the vehicle; set p1 to false to toggle the effect on/off.
 *
 * Hash: 0xA402939C6761E1A3 | Since: 1207
 */
export declare function setExplodesOnHighExplosionDamage(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Note: only some vehicle have extras
 * https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_extras.lua
 *
 * Hash: 0xBB6F89150BC9D16B | Since: 1207
 */
export declare function setExtra(vehicle: number | IVehicle, extraId: number, disable: boolean): void;
/**
 * This fixes a vehicle.
 * If the vehicle's engine's broken then you cannot fix it with this native.
 *
 * Hash: 0x79811282A9D1AE56 | Since: 1207
 */
export declare function setFixed(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xF9F92AF49F12F6E7 | Since: 1207
 */
export declare function setForwardSpeed(vehicle: number | IVehicle, speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x91BE51AEC4E99710 | Since: 1207
 */
export declare function setHandbrake(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xBB5A3FA8ED3979C5 | Since: 1207
 */
export declare function setHasBeenOwnedByPlayer(vehicle: number | IVehicle, owned: boolean): void;
/**
 * if true, axles won't bend.
 *
 * Hash: 0x252253C8A45AA1FC | Since: 1207
 */
export declare function setHasStrongAxles(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC903855E028A05F2 | Since: 1207
 */
export declare function setHasUnbreakableLights(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x4EA71B4C9DB3C3F1 | Since: 1207
 */
export declare function setInactiveDuringPlayback(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0xA9F1D75195CC40F6 | Since: 1207
 */
export declare function setIndividualDoorsLocked(vehicle: number | IVehicle, doorId: number, doorLockStatus: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC1842F40FD501DA2 | Since: 1207
 */
export declare function setInfluencesWantedLevel(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Setting this to false, makes the specified vehicle to where if you press Y your character doesn't even attempt the animation to enter the vehicle. Hence it's not considered aka ignored.
 *
 * Hash: 0x54800D386C5825E5 | Since: 1207
 */
export declare function setIsConsideredByPlayer(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x6C32FC81DFF25C9A | Since: 1207
 */
export declare function setIsStolen(vehicle: number | IVehicle, isStolen: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1549BA7FE83A2383 | Since: 1207
 */
export declare function setKeepEngineOnWhenAbandoned(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Sets the vehicle's lights state.
 *
 * Hash: 0x629F0A0E952CAE7D | Since: 1207
 */
export declare function setLights(vehicle: number | IVehicle, state: number): void;
/**
 * _SET_VEHICLE_LI*
 *
 * Hash: 0x8F75941C86EEBFCA | Since: 1207
 */
export declare function setLimitSpeedWhenPlayerInactive(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x5F5E2B1B9EAECC0F | Since: 1207
 */
export declare function setLodMultiplier(vehicle: number | IVehicle, multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7549B9E841940695 | Since: 1207
 */
export declare function setMayBeUsedByGotoPointAnyMeans(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x09C970AE59ABF6B2 | Since: 1207
 */
export declare function setNotStealableAmbiently(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x7263332501E07F52 | Since: 1207
 */
export declare function setOnGroundProperly(vehicle: number | IVehicle): boolean;
/**
 * 1000 is max health
 *
 * Hash: 0x6AB2918EE3BEC94C | Since: 1207
 */
export declare function setPetrolTankHealth(vehicle: number | IVehicle, health: number): void;
/**
 * No comment provided
 *
 * Hash: 0x652712478F1721F4 | Since: 1207
 */
export declare function setProvidesCover(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x33992A808DF1C1BA | Since: 1207
 */
export declare function setRespectsLocksWhenHasDriver(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xB79BE78C665B3E6D | Since: 1207
 */
export declare function setShootAtTarget(): void;
/**
 * No comment provided
 *
 * Hash: 0x23A3AB86E0807721 | Since: 1207
 */
export declare function setStaysFrozenWhenCleanedUp(vehicle: number | IVehicle, toggle: boolean): void;
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
export declare function setSteerBias(vehicle: number | IVehicle, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC84E138448507567 | Since: 1207
 */
export declare function setStopInstantlyWhenPlayerInactive(vehicle: number | IVehicle): void;
/**
 * If set to true, vehicle will not take crash damage, but is still susceptible to damage from bullets and explosives
 *
 * Hash: 0xAB315515C9F8803D | Since: 1207
 */
export declare function setStrong(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Allows you to toggle bulletproof tires.
 *
 * Hash: 0xEBD0A4E935106FE5 | Since: 1207
 */
export declare function setTyresCanBurst(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x6E884BAB713A2A94 | Since: 1207
 */
export declare function setUndriveable(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x839137C40275FB77 | Since: 1207
 */
export declare function setWheelsCanBreak(vehicle: number | IVehicle, enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC462C79379ABBCB1 | Since: 1207
 */
export declare function setWheelsCanBreakOffWhenBlowUp(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * SET_TIME_POSITION_IN_RECORDING can be emulated by: desired_time - GET_TIME_POSITION_IN_RECORDING(vehicle)
 *
 * Hash: 0x5F5E6379C59EFC56 | Since: 1207
 */
export declare function skipTimeInPlaybackRecorded(vehicle: number | IVehicle, time: number): void;
/**
 * `p3 is some flag related to 'trailers' (invokes CVehicle::GetTrailer).`
 *
 * See REQUEST_VEHICLE_RECORDING
 *
 * Hash: 0x4932B84E3276508E | Since: 1207
 */
export declare function startPlaybackRecorded(vehicle: number | IVehicle, recording: number): string;
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
export declare function startHorn(vehicle: number | IVehicle, duration: number, mode: number | string, forever: boolean): void;
/**
 * Old name: _STOP_BRING_VEHICLE_TO_HALT
 *
 * Hash: 0x7C06330BFDDA182E | Since: 1207
 */
export declare function stopBringingToHalt(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xBF9B4D6267E8C26D | Since: 1207
 */
export declare function stopPlaybackRecorded(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x1F3969B140DEE157 | Since: 1207
 */
export declare function trackVisibility(vehicle: number | IVehicle): void;
/**
 * Only used in SP Scripts.
 * Related to Vehicle Speed.
 *
 * Hash: 0x012701ED938B85DE | Since: 1207
 */
export declare function _0x012701ED938B85DE(): void;
/**
 * No comment provided
 *
 * Hash: 0x0355FE37240E2C77 | Since: 1207
 */
export declare function _0x0355FE37240E2C77(): void;
/**
 * _SET_VEHICLE_*
 *
 * Hash: 0x04F0579DBDD32F34 | Since: 1207
 */
export declare function _0x04F0579DBDD32F34(vehicle: number | IVehicle): void;
/**
 * Takes value returned from 0x45853F4E17D847D5
 *
 * Hash: 0x0516FAE561276EFC | Since: 1207
 */
export declare function _0x0516FAE561276EFC(trackIndex: number): boolean;
/**
 * _SET_TRAIN_*
 *
 * Hash: 0x06A09A6E0C6D2A84 | Since: 1207
 */
export declare function _0x06A09A6E0C6D2A84(train: number | IVehicle): void;
/**
 * _SET_VEHICLE_S*
 *
 * Hash: 0x0794199B25E499E1 | Since: 1207
 */
export declare function _0x0794199B25E499E1(wagon: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x0CD7914D17A970AB | Since: 1207
 */
export declare function _0x0CD7914D17A970AB(): void;
/**
 * No comment provided
 *
 * Hash: 0x0D5FDF0D36FA10CD | Since: 1207
 */
export declare function _0x0D5FDF0D36FA10CD(trackIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0F7F603BDE08C4D3 | Since: 1207
 */
export declare function _0x0F7F603BDE08C4D3(): void;
/**
 * No comment provided
 *
 * Hash: 0x0FDDEE66E3465726 | Since: 1207
 */
export declare function _0x0FDDEE66E3465726(): any;
/**
 * No comment provided
 *
 * Hash: 0x104D9A7B1C0D0783 | Since: 1207
 */
export declare function _0x104D9A7B1C0D0783(vehicle: number | IVehicle): void;
/**
 * Returns p1 for 0xBA958F68031DDBFC (stationIndex)
 * _GET_N* (NEAREST_STATION_FOR_TRAIN?)
 *
 * Hash: 0x1180A2974D251B7B | Since: 1207
 */
export declare function _0x1180A2974D251B7B(train: number | IVehicle): number;
/**
 * Params: coords = GET_ENTITY_VELOCITY
 * _SET_VELOCITY*
 *
 * Hash: 0x12F6C6ED3EFF42DE | Since: 1207
 */
export declare function _0x12F6C6ED3EFF42DE(vehicle: number | IVehicle, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x13EB275BF81636D1 | Since: 1207
 */
export declare function _0x13EB275BF81636D1(): void;
/**
 * No comment provided
 *
 * Hash: 0x14DA8C4BC2CCD90A | Since: 1207
 */
export declare function _0x14DA8C4BC2CCD90A(): any;
/**
 * No comment provided
 *
 * Hash: 0x15206E88FF7617DF | Since: 1207
 */
export declare function _0x15206E88FF7617DF(trackIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x15CC8C33D7FFCC4A | Since: 1436
 */
export declare function _0x15CC8C33D7FFCC4A(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x160C1B5AB48AB87C | Since: 1207
 */
export declare function _0x160C1B5AB48AB87C(train: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x165BE2001E5E4B75 | Since: 1207
 */
export declare function _0x165BE2001E5E4B75(): void;
/**
 * No comment provided
 *
 * Hash: 0x16B86A49E072AA85 | Since: 1207
 */
export declare function _0x16B86A49E072AA85(): void;
/**
 * No comment provided
 *
 * Hash: 0x172E9DD35858DCD7 | Since: 1207
 */
export declare function _0x172E9DD35858DCD7(): void;
/**
 * No comment provided
 *
 * Hash: 0x1A861F899EBBE17C | Since: 1207
 */
export declare function _0x1A861F899EBBE17C(train: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x2045429505158D1A | Since: 1207
 */
export declare function _0x2045429505158D1A(): any;
/**
 * No comment provided
 *
 * Hash: 0x2200AB13CBD10F4E | Since: 1207
 */
export declare function _0x2200AB13CBD10F4E(vehicle: number | IVehicle, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x23F66C36F8E5EAAB | Since: 1207
 */
export declare function _0x23F66C36F8E5EAAB(): void;
/**
 * No comment provided
 *
 * Hash: 0x27E3F2B57209FA54 | Since: 1207
 */
export declare function _0x27E3F2B57209FA54(): void;
/**
 * No comment provided
 *
 * Hash: 0x2A7413168F6CD5A8 | Since: 1207
 */
export declare function _0x2A7413168F6CD5A8(): void;
/**
 * No comment provided
 *
 * Hash: 0x2BB2B5BCF0DF8008 | Since: 1207
 */
export declare function _0x2BB2B5BCF0DF8008(): void;
/**
 * No comment provided
 *
 * Hash: 0x2C46D2A591D8C322 | Since: 1207
 */
export declare function _0x2C46D2A591D8C322(): any;
/**
 * No comment provided
 *
 * Hash: 0x3053064F909B5F42 | Since: 1207
 */
export declare function _0x3053064F909B5F42(): void;
/**
 * No comment provided
 *
 * Hash: 0x3137EDC899E6DAE4 | Since: 1355
 */
export declare function _0x3137EDC899E6DAE4(): void;
/**
 * Returns trackIndex
 *
 * Hash: 0x331CBD247FC5DAA8 | Since: 1207
 */
export declare function _0x331CBD247FC5DAA8(configHash: number | string, pos: Vector3, direction: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0x34BCF6209B9668A7 | Since: 1207
 */
export declare function _0x34BCF6209B9668A7(trackIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x37D238BE69F7378A | Since: 1207
 */
export declare function _0x37D238BE69F7378A(trackIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x38E7DD70A242D5CB | Since: 1207
 */
export declare function _0x38E7DD70A242D5CB(trackIndex: number): void;
/**
 * Called together with 0xE6C5E2125EB210C1 in R* Script medium_update
 *
 * Hash: 0x3ABFA128F5BF5A70 | Since: 1207
 */
export declare function _0x3ABFA128F5BF5A70(trainTrack: number | string, junctionIndex: number, enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x3D86997A86FEEF0D | Since: 1207
 */
export declare function _0x3D86997A86FEEF0D(): void;
/**
 * No comment provided
 *
 * Hash: 0x41365DB586CD9E8E | Since: 1207
 */
export declare function _0x41365DB586CD9E8E(trackIndex: number): void;
/**
 * _H*
 *
 * Hash: 0x41F0B254DDF71473 | Since: 1207
 */
export declare function _0x41F0B254DDF71473(wagon: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x427C919E9809E370 | Since: 1207
 */
export declare function _0x427C919E9809E370(trackIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x485B05EF05B9AEE9 | Since: 1207
 */
export declare function _0x485B05EF05B9AEE9(): void;
/**
 * No comment provided
 *
 * Hash: 0x4C05B42A8D937796 | Since: 1207
 */
export declare function _0x4C05B42A8D937796(): void;
/**
 * Params: p1 usually true in R* Scripts
 * _SET_DRAFT_VEHICLE_*
 *
 * Hash: 0x4C60C333F9CCA2B6 | Since: 1207
 */
export declare function _0x4C60C333F9CCA2B6(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x51C7694E140FAE43 | Since: 1207
 */
export declare function _0x51C7694E140FAE43(): any;
/**
 * No comment provided
 *
 * Hash: 0x5AADC7BBBB1BCEEB | Since: 1207
 */
export declare function _0x5AADC7BBBB1BCEEB(): void;
/**
 * No comment provided
 *
 * Hash: 0x615B3B8E73634509 | Since: 1207
 */
export declare function _0x615B3B8E73634509(trackIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x63509DDF102E08E8 | Since: 1207
 */
export declare function _0x63509DDF102E08E8(trackIndex: number): void;
/**
 * Only used in R* Script beat_train_holdup: p1 = 1
 *
 * Hash: 0x6355602C02EDC6DF | Since: 1207
 */
export declare function _0x6355602C02EDC6DF(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x6703872EC09BC158 | Since: 1207
 */
export declare function _0x6703872EC09BC158(): void;
/**
 * No comment provided
 *
 * Hash: 0x6835AFEA10E186F4 | Since: 1207
 */
export declare function _0x6835AFEA10E186F4(): void;
/**
 * No comment provided
 *
 * Hash: 0x68830738A6BFB370 | Since: 1207
 */
export declare function _0x68830738A6BFB370(): void;
/**
 * No comment provided
 *
 * Hash: 0x697DF68F3A761A50 | Since: 1207
 */
export declare function _0x697DF68F3A761A50(): void;
/**
 * No comment provided
 *
 * Hash: 0x6B34BE961F639E21 | Since: 1207
 */
export declare function _0x6B34BE961F639E21(trackIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6B53F4B811E583D2 | Since: 1207
 */
export declare function _0x6B53F4B811E583D2(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * Returns trackIndex
 *
 * Hash: 0x6C87F49BFA181DB5 | Since: 1207
 */
export declare function _0x6C87F49BFA181DB5(pos: Vector3): number;
/**
 * _SET_INSTANTLY_* - _SET_MISSION_TRAIN*
 *
 * Hash: 0x6DE072AC8A95FFC1 | Since: 1207
 */
export declare function _0x6DE072AC8A95FFC1(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x6EA1273D525427F4 | Since: 1207
 */
export declare function _0x6EA1273D525427F4(): void;
/**
 * No comment provided
 *
 * Hash: 0x6FD7BDF10304363A | Since: 1207
 */
export declare function _0x6FD7BDF10304363A(): void;
/**
 * No comment provided
 *
 * Hash: 0x703D4FB366DA4452 | Since: 1207
 */
export declare function _0x703D4FB366DA4452(): void;
/**
 * No comment provided
 *
 * Hash: 0x718EB706B6E998A0 | Since: 1207
 */
export declare function _0x718EB706B6E998A0(trackIndex: number): void;
/**
 * _SET_VEHICLE_WHEELS_*
 *
 * Hash: 0x73118A3EE9C9B6DB | Since: 1207
 */
export declare function _0x73118A3EE9C9B6DB(wagon: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x7408B5C66BA31ADB | Since: 1207
 */
export declare function _0x7408B5C66BA31ADB(): void;
/**
 * No comment provided
 *
 * Hash: 0x750D42C013F64AE7 | Since: 1207
 */
export declare function _0x750D42C013F64AE7(): void;
/**
 * Seems to be related while setting a (door) state of specific trains (midlandboxcar05x, privateboxcar01x, privateboxcar02x, midlandrefrigeratorCar, privateArmoured, armoredCar01x)
 *
 * Hash: 0x762FDC4C19E5A981 | Since: 1207
 */
export declare function _0x762FDC4C19E5A981(trainCarriage: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x7840576C50A13DBA | Since: 1207
 */
export declare function _0x7840576C50A13DBA(train: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x7BE0746539DEF0C8 | Since: 1207
 */
export declare function _0x7BE0746539DEF0C8(): any;
/**
 * No comment provided
 *
 * Hash: 0x8379E05871AD24E0 | Since: 1207
 */
export declare function _0x8379E05871AD24E0(): void;
/**
 * No comment provided
 *
 * Hash: 0x850CE59DEC2028F3 | Since: 1207
 */
export declare function _0x850CE59DEC2028F3(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x873AAF600CC36DAC | Since: 1207
 */
export declare function _0x873AAF600CC36DAC(): void;
/**
 * No comment provided
 *
 * Hash: 0x877EA24EB1614495 | Since: 1207
 */
export declare function _0x877EA24EB1614495(): any;
/**
 * No comment provided
 *
 * Hash: 0x87B974E54C71BA7B | Since: 1207
 */
export declare function _0x87B974E54C71BA7B(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x8878FF3EEE2868A9 | Since: 1207
 */
export declare function _0x8878FF3EEE2868A9(): void;
/**
 * No comment provided
 *
 * Hash: 0x8DECD262602548B9 | Since: 1207
 */
export declare function _0x8DECD262602548B9(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x9868C0D0134855F7 | Since: 1207
 */
export declare function _0x9868C0D0134855F7(): void;
/**
 * No comment provided
 *
 * Hash: 0x98A7598C579EE871 | Since: 1207
 */
export declare function _0x98A7598C579EE871(): void;
/**
 * No comment provided
 *
 * Hash: 0x9D12796EF4BF9EA9 | Since: 1207
 */
export declare function _0x9D12796EF4BF9EA9(): void;
/**
 * Forcing high LOD buoyancy for vehicle: p1 = false
 * _SET_A*
 *
 * Hash: 0x9E8711C81AA17876 | Since: 1207
 */
export declare function _0x9E8711C81AA17876(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xA13028E22564A1BD | Since: 1207
 */
export declare function _0xA13028E22564A1BD(): void;
/**
 * No comment provided
 *
 * Hash: 0xA230A5DDE12ED374 | Since: 1207
 */
export declare function _0xA230A5DDE12ED374(): void;
/**
 * No comment provided
 *
 * Hash: 0xA72B1BF3857B94D7 | Since: 1207
 */
export declare function _0xA72B1BF3857B94D7(train: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xA7966807953A18EE | Since: 1207
 */
export declare function _0xA7966807953A18EE(trackIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA9E185D498B9AC67 | Since: 1207
 */
export declare function _0xA9E185D498B9AC67(): any;
/**
 * _SET_TRAIN_*
 *
 * Hash: 0xAE7E66A61E7C17A5 | Since: 1207
 */
export declare function _0xAE7E66A61E7C17A5(train: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xB4241AD8F5AEE9ED | Since: 1207
 */
export declare function _0xB4241AD8F5AEE9ED(trackIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB42C87521D1BDD2F | Since: 1207
 */
export declare function _0xB42C87521D1BDD2F(vehicle: number | IVehicle, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xB961DD799A837BD7 | Since: 1207
 */
export declare function _0xB961DD799A837BD7(): void;
/**
 * Used in Script Function MC_LOCAL_SETUP_VEH - enabling transitions
 *
 * Hash: 0xC325A6BAA62CF8A2 | Since: 1207
 */
export declare function _0xC325A6BAA62CF8A2(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xC351394B932A6A50 | Since: 1207
 */
export declare function _0xC351394B932A6A50(): void;
/**
 * No comment provided
 *
 * Hash: 0xC399CC89FBA05DA0 | Since: 1207
 */
export declare function _0xC399CC89FBA05DA0(vehicle: number | IVehicle): void;
/**
 * _SET_DRAFT_VEHICLE_(STOP?)*
 *
 * Hash: 0xC4A2C11FC0D41916 | Since: 1207
 */
export declare function _0xC4A2C11FC0D41916(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xCACAB2B123BBDBD6 | Since: 1207
 */
export declare function _0xCACAB2B123BBDBD6(): any;
/**
 * No comment provided
 *
 * Hash: 0xCAFF2C9747103C02 | Since: 1207
 */
export declare function _0xCAFF2C9747103C02(): any;
/**
 * No comment provided
 *
 * Hash: 0xCBC7B6F9A56B79F6 | Since: 1207
 */
export declare function _0xCBC7B6F9A56B79F6(): void;
/**
 * Used in Script Function MC_LOCAL_SETUP_VEH - enabling transitions
 *
 * Hash: 0xCBF88256E44D5D39 | Since: 1207
 */
export declare function _0xCBF88256E44D5D39(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xCEB1F1EED484A5B4 | Since: 1207
 */
export declare function _0xCEB1F1EED484A5B4(): void;
/**
 * No comment provided
 *
 * Hash: 0xCF342503CA4C8DF1 | Since: 1207
 */
export declare function _0xCF342503CA4C8DF1(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xD0116DF21E6C7B36 | Since: 1207
 */
export declare function _0xD0116DF21E6C7B36(): any;
/**
 * No comment provided
 *
 * Hash: 0xD0AABE5B9F8FA589 | Since: 1207
 */
export declare function _0xD0AABE5B9F8FA589(trackIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD0BA1853D76683C8 | Since: 1207
 */
export declare function _0xD0BA1853D76683C8(trackIndex: number, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xD1DF5E54F4ACBE1A | Since: 1207
 */
export declare function _0xD1DF5E54F4ACBE1A(): any;
/**
 * No comment provided
 *
 * Hash: 0xD21A3D421E7F09F7 | Since: 1207
 */
export declare function _0xD21A3D421E7F09F7(): void;
/**
 * No comment provided
 *
 * Hash: 0xD4907EF4334C7602 | Since: 1207
 */
export declare function _0xD4907EF4334C7602(): void;
/**
 * No comment provided
 *
 * Hash: 0xD826690B5CF3BEFF | Since: 1207
 */
export declare function _0xD826690B5CF3BEFF(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xD9BF3ED8EFB67EA3 | Since: 1207
 */
export declare function _0xD9BF3ED8EFB67EA3(): any;
/**
 * No comment provided
 *
 * Hash: 0xDC0556D0F484ECAA | Since: 1207
 */
export declare function _0xDC0556D0F484ECAA(): void;
/**
 * No comment provided
 *
 * Hash: 0xDC69F6913CCA0B99 | Since: 1207
 */
export declare function _0xDC69F6913CCA0B99(): void;
/**
 * No comment provided
 *
 * Hash: 0xDD100CE1EBBF37E3 | Since: 1207
 */
export declare function _0xDD100CE1EBBF37E3(): void;
/**
 * No comment provided
 *
 * Hash: 0xDE8C5B9F65017FA1 | Since: 1207
 */
export declare function _0xDE8C5B9F65017FA1(train: number | IVehicle): any;
/**
 * No comment provided
 *
 * Hash: 0xE12F5ED49F44D40D | Since: 1207
 */
export declare function _0xE12F5ED49F44D40D(): void;
/**
 * Only used in R* SP Script rcm_abigail31: p1 = 5
 * _GET_VEHICLE_T* - _GET_VO*
 *
 * Hash: 0xE1C0F8781BF130C2 | Since: 1207
 */
export declare function _0xE1C0F8781BF130C2(wagon: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE682002DB1F30669 | Since: 1207
 */
export declare function _0xE682002DB1F30669(): void;
/**
 * No comment provided
 *
 * Hash: 0xE6BD7DD3FD474415 | Since: 1207
 */
export declare function _0xE6BD7DD3FD474415(train: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xE777DDF3E78397E8 | Since: 1207
 */
export declare function _0xE777DDF3E78397E8(): any;
/**
 * No comment provided
 *
 * Hash: 0xE78993FF9022C064 | Since: 1207
 */
export declare function _0xE78993FF9022C064(): void;
/**
 * _SET_TRAIN_*
 *
 * Hash: 0xEF28A614B4B264B8 | Since: 1207
 */
export declare function _0xEF28A614B4B264B8(train: number | IVehicle): void;
/**
 * _IS_* (related to CREATE_MISSION_TRAIN)
 *
 * Hash: 0xF05DFAF1ADFEF2CD | Since: 1207
 */
export declare function _0xF05DFAF1ADFEF2CD(trainConfig: number | string, pos: Vector3, direction: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF57DB8E83DCD8349 | Since: 1207
 */
export declare function _0xF57DB8E83DCD8349(): any;
/**
 * No comment provided
 *
 * Hash: 0xF5EA41C1408695FB | Since: 1207
 */
export declare function _0xF5EA41C1408695FB(): any;
/**
 * No comment provided
 *
 * Hash: 0xF6E3D38869D0F7AD | Since: 1207
 */
export declare function _0xF6E3D38869D0F7AD(): void;
/**
 * No comment provided
 *
 * Hash: 0xF8F7DA13CFBD4532 | Since: 1207
 */
export declare function _0xF8F7DA13CFBD4532(trackIndex: number): void;
/**
 * _SET_DRAFT_VEHICLE_*
 *
 * Hash: 0xFC4F15A7DDDC47B1 | Since: 1207
 */
export declare function _0xFC4F15A7DDDC47B1(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xFF2B1F59FB892F14 | Since: 1207
 */
export declare function _0xFF2B1F59FB892F14(): void;
/**
 * No comment provided
 *
 * Hash: 0xFFFE15B433300B8C | Since: 1207
 */
export declare function _0xFFFE15B433300B8C(): void;
/**
 * No comment provided
 *
 * Hash: 0x41503629D1139ABC | Since: 1207
 */
export declare function addTrainTemporaryStop(train: number | IVehicle, trackIndex: number, pos: Vector3): void;
/**
 * returns true if any wheel is destroyed/detached
 *
 * Hash: 0x18714953CCED17D3 | Since: 1207
 */
export declare function areAnyWheelsDestroyed(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x316CDB5B6E8F4110 | Since: 1207
 */
export declare function attachDraftHarnessPed(mount: number | IPed, draft: number | IVehicle, harnessId: number): boolean;
/**
 * Params: destroyingForce is usually 100f in R* Scripts
 * Similar to 0xD4F5EFB55769D272, _A*
 *
 * Hash: 0xC372B6A88F6E4AD8 | Since: 1207
 */
export declare function breakOffDraftWheel(vehicle: number | IVehicle, wheelIndex: number, destroyingForce: number): void;
/**
 * wheelIndex 0: left, wheelIndex 1: right, 4 & 5: unknown
 *
 * Hash: 0xD4F5EFB55769D272 | Since: 1207
 */
export declare function breakOffWheel(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * Only used to break draft vehicle log straps. Coords is always equal to the vehicle coords.
 *
 * Hash: 0xD1EFA8D68BF5D63D | Since: 1207
 */
export declare function breakStraps(vehicle: number | IVehicle, pos: Vector3): void;
/**
 * Identical to CREATE_VEHICLE but allows to set draftAnimalPopGroup (see popgroups.#mt for DRAFT_HORSES_*)
 *
 * Hash: 0x214651FB1DFEBA89 | Since: 1207
 */
export declare function createDraft(modelHash: number | string, pos: Vector3, heading: number, isNetwork: boolean, bScriptHostVeh: boolean, bDontAutoCreateDraftAnimals: boolean, draftAnimalPopGroup: number | string): number;
/**
 * configHash: https://alloc8or.re/rdr3/doc/enums/eTrainConfig.txt
 * For more information, see trainconfigs.ymt
 * To make the train AI controlled, set conductor to true and set the speed once.
 *
 * Hash: 0xC239DBD9A57D2A71 | Since: 1207
 */
export declare function createMissionTrain(configHash: number | string, pos: Vector3, direction: boolean, passengers: boolean, conductor: boolean): number;
/**
 * Spawn without lanterns set
 *
 * Hash: 0xE1A83D4A3B5D7938 | Since: 1207
 */
export declare function deleteLanterns(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4402960666000E62 | Since: 1207
 */
export declare function detachDraftHarnessFromIndex(draft: number | IVehicle, harnessId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB36D3EC70963BE60 | Since: 1207
 */
export declare function detachDraftHarnessPed(draft: number | IVehicle, ped: number | IPed): boolean;
/**
 * Only used in train_robbery4 R* Script
 * _C* - _DEL*
 *
 * Hash: 0x54CBDD6E1B4CB4DF | Since: 1207
 */
export declare function detachWagonEntityFromTrain(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xC29996A337BDD099 | Since: 1207
 */
export declare function doesTrainExistOnTrack(trackIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x35DC1877312FBA0F | Since: 1207
 */
export declare function fadeAndDestroy(vehicle: number | IVehicle): void;
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
export declare function getAllTrainWagonPassengers(train: number | IVehicle, itemset: any): number;
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
export declare function getBalloonObjectFrom(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xE015CF1F2C0959D8 | Since: 1207
 */
export declare function getBreakableLocksState(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x58F2244C1286D09A | Since: 1207
 */
export declare function getBreakableLockObject(vehicle: number | IVehicle, index: number): number;
/**
 * No comment provided
 *
 * Hash: 0x35D302397E524939 | Since: 1207
 */
export declare function getCheckpointTrainSpawnLocation(trackIndex: number, pos: Vector3, distance: number, direction: boolean): Vector3;
/**
 * Returns p0 for 0xBA958F68031DDBFC (trackIndex)
 *
 * Hash: 0xAF787E081AC4A8EE | Since: 1207
 */
export declare function getCurrentTrackForTrain(train: number | IVehicle): number;
/**
 * `Returns rage::NumericLimits<float>::kMax (3.402823466e+38) if vehicle is not a valid vehicle of type VEHICLE_TYPE_DRAFT.`
 *
 * Hash: 0xC6D7DDC843176701 | Since: 1207
 */
export declare function getDraftDesiredSpeed(vehicle: number | IVehicle): number;
/**
 * Returns the world coordinates of a junction node for the given train track configuration. trainTrack: see _RETURN_TRAIN_INFO_FROM_HANDLE.
 *
 * Hash: 0x785639D89F8451AB | Since: 1207
 */
export declare function getJunctionCoordsForTrainTrack(trainTrack: number | string, junctionIndex: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x6DE03BCC15E81710 | Since: 1207
 */
export declare function getNearestTrainTrackPosition(pos: Vector3): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x2FA86833E3617E2D | Since: 1207
 */
export declare function getNumBreakableLockObjects(vehicle: number | IVehicle): number;
/**
 * Returns amount for CAN_REGISTER_MISSION_VEHICLES
 *
 * Hash: 0x635423D55CA84FC8 | Since: 1207
 */
export declare function getNumCarsFromTrainConfig(trainConfig: number | string): number;
/**
 * Returns number of horses a wagon can have
 *
 * Hash: 0x5B1A26BB18E7D451 | Since: 1207
 */
export declare function getNumDraftHarnessPed(modelHash: number | string): number;
/**
 * Return the number of logs on a draft vehicle.
 *
 * Hash: 0x288CBB414C3C2FBB | Since: 1207
 */
export declare function getNumDraftLogs(vehicle: number | IVehicle): number;
/**
 * Return the number of straps that hold the logs of a draft vehicle.
 *
 * Hash: 0x1121B07088ED3013 | Since: 1207
 */
export declare function getNumDraftStraps(vehicle: number | IVehicle): number;
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
export declare function getPedInDraftHarness(vehicle: number | IVehicle, harnessId: number): number;
/**
 * Returns handles of boat paddles entities.
 *
 * Hash: 0xA6E210FB4283B767 | Since: 1207
 */
export declare function getRowingOars(vehicle: number | IVehicle): [number, number];
/**
 * Returns Coords of vStation
 * p0 - NET_TRAIN_MANAGER_GET_TRAIN_STATION_DATA
 * _GET_P* - _GET_T*
 *
 * Hash: 0xBA958F68031DDBFC | Since: 1207
 */
export declare function getStationCoordsFromTrainStationData(trackIndex: number, stationIndex: number): Vector3;
/**
 * Returns the station hash for a track and station index.
 * - trackIndex: int — From 0 to 24
 * - stationIndex: int — From 0 to 7
 *
 * Hash: 0x9CC94A948EAF5372 | Since: 1207
 */
export declare function getStationFromTrainStationIndex(trackIndex: number, stationIndex: number): number;
/**
 * Requires a visibility tracker on the vehicle (TRACK_VEHICLE_VISIBILITY)
 *
 * Hash: 0x13C190302369308B | Since: 1207
 */
export declare function getTrackAmountOfVisiblePixels(vehicle: number | IVehicle): number;
/**
 * Returns trackIndex
 * _E* - _F*
 *
 * Hash: 0x85D39F5E3B6D7EB0 | Since: 1207
 */
export declare function getTrackIndexFromCoords(pos: Vector3): number;
/**
 * Returns train car, use GET_TRAIN_CARRIAGE when trailerNumber is bigger than 0
 *
 * Hash: 0x671A07C9A1CD50A5 | Since: 1207
 */
export declare function getTrainCar(train: number | IVehicle): number;
/**
 * Returns iNumCars - to be used with GET_TRAIN_CARRIAGE (trailerNumber)
 * _C* (O, P, Q, R)
 *
 * Hash: 0x60B7D1DCC312697D | Since: 1207
 */
export declare function getTrainCarriageTrailerNumber(train: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x3C9628A811CBD724 | Since: 1207
 */
export declare function getTrainDirection(train: number | IVehicle): boolean;
/**
 * https://i.imgur.com/1rHibjW.jpg
 *
 * Hash: 0x67995318F5FAA496 | Since: 1207
 */
export declare function getTrainDirectionFromIndex(trackIndex: number): boolean;
/**
 * Returns modelHash
 *
 * Hash: 0x8DF5F6A19F99F0D5 | Since: 1207
 */
export declare function getTrainModelFromTrainConfigByCarIndex(trainConfig: number | string, trainCarIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x1E8A921112891651 | Since: 1207
 */
export declare function getTrainPositionOnTrack(trackIndex: number): Vector3;
/**
 * Returns trackIndex
 *
 * Hash: 0x45853F4E17D847D5 | Since: 1207
 */
export declare function getTrainTrackFromTrain(train: number | IVehicle): number;
/**
 * Outputs junctionIndex, to be used with 0xE6C5E2125EB210C1
 *
 * Hash: 0x86AFC343CF7F0B34 | Since: 1207
 */
export declare function getTrainTrackJunctionAtCoords(trainTrack: number | string, pos: Vector3): [boolean, number];
/**
 * Returns train
 *
 * Hash: 0x6E585A616ABB8401 | Since: 1207
 */
export declare function getTrainFromTrackIndex(trackIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xDD1E1393D966D39A | Since: 1207
 */
export declare function getDoorsLockedForTeam(vehicle: number | IVehicle, team: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD798DF5DB67B1659 | Since: 1207
 */
export declare function getIsPropSetApplied(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBB765B8FD49A796C | Since: 1207
 */
export declare function getLivery(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xB729679356A889AE | Since: 1207
 */
export declare function getOwner(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xA44D65E6C624526F | Since: 1207
 */
export declare function getTint(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xFF5791B7639C2A46 | Since: 1207
 */
export declare function getTurretSeat(vehicle: number | IVehicle): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xBD3C4A2ED509205E | Since: 1207
 */
export declare function hasTrainLoaded(train: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x201B8ED4FF7FE9F5 | Since: 1207
 */
export declare function hideHorseReins(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x30D86B2B7622D0EB | Since: 1207
 */
export declare function isBoatGrounded(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB213D2A560B2E48B | Since: 1207
 */
export declare function isPedExclusiveDriverOf(ped: number | IPed, vehicle: number | IVehicle): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xB9D5BDDA88E1BB66 | Since: 1207
 */
export declare function isThisModelADraft(model: number | string): boolean;
/**
 * Only returns true if BRING_VEHICLE_TO_HALT is called on vehicle beforehand
 *
 * Hash: 0x404527BC03DA0E6C | Since: 1207
 */
export declare function isBroughtToHalt(vehicle: number | IVehicle): boolean;
/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 *
 * Hash: 0xE979BB5602AD3402 | Since: 1207
 */
export declare function isDoorBroken(vehicle: number | IVehicle, doorId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5136B284B67B35C7 | Since: 1207
 */
export declare function isFadingOut(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0E3BF7ED4169EC43 | Since: 1207
 */
export declare function isOnFire(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCB2CA620C48BC875 | Since: 1207
 */
export declare function isWheelDestroyed(vehicle: number | IVehicle, wheel: number): boolean;
/**
 * Returns the log prop entity that is currently detaching/falling from a draft (log) wagon. Returns 0 if no log is in the falling phase. R* scripts call this repeatedly to fetch each fallen piece, then apply forces to it.
 *
 * Hash: 0x42404D57D621601A | Since: 1207
 */
export declare function recoverDraftFallingLog(vehicle: number | IVehicle): any;
/**
 * No comment provided
 *
 * Hash: 0xCF9DA72002FC16BF | Since: 1207
 */
export declare function requestAssetAnims(ped: number | IPed, entity: number | IEntity, vehicleAsset: number): void;
/**
 * Outputs track hash and junction index on given train vehicle handle.
 * _RESET_VEHICLE_* (?)
 *
 * Hash: 0x09034479E6E3E269 | Since: 1207
 */
export declare function returnTrainInfoFromHandle(train: number | IVehicle): [boolean, number, number];
/**
 * No comment provided
 *
 * Hash: 0x138398153824E332 | Since: 1207
 */
export declare function setAllJunctionsCleared(): void;
/**
 * No comment provided
 *
 * Hash: 0x424FFCB9F0D2D4B5 | Since: 1207
 */
export declare function setAllGeneratorsDisabledForVolume(volume: number, toggle: boolean): void;
/**
 * Params: 1.0f will make balloon hover
 *
 * Hash: 0x7C9E45A4CED2E8DA | Since: 1207
 */
export declare function setBalloonHoverState(balloon: number | IVehicle): void;
/**
 * Total height is calculated using: cargo ratio + pelt ratio (by pelt count)
 * Screenshot: https://imgur.com/a/nsomtiv
 *
 * Hash: 0x31F343383F19C987 | Since: 1207
 */
export declare function setBatchTarpHeight(vehicle: number | IVehicle, height: number, immediately: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8C6D9A399126C194 | Since: 1207
 */
export declare function setDraftAnimalRandomSeed(vehicle: number | IVehicle, seed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x87344305778E5415 | Since: 1207
 */
export declare function setDraftAllowDraftAnimalAutoCreation(vehicle: number | IVehicle, allow: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x6090A031C69F384E | Since: 1207
 */
export declare function setDraftAnimalsCanDetach(draft: number | IVehicle, canDetach: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x0C3F0F7F92CA847C | Since: 1207
 */
export declare function setDraftDesiredSpeed(vehicle: number | IVehicle, speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x226C6A4E3346D288 | Since: 1207
 */
export declare function setDraftYokeCanBreak(draft: number | IVehicle, canBreak: boolean): void;
/**
 * Hashes: COACH2_BOOT_LOOT_ITEMS_COACHROB_RSC, COACH2_BOOT_LOOT_ITEMS_COACHROB, COACH2_MARY3
 *
 * Hash: 0xF489F94BFEE12BB0 | Since: 1207
 */
export declare function setForceCoachRobberyLoot(vehicle: number | IVehicle, coachrobberyLoot: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x1098CDA477890165 | Since: 1207
 */
export declare function setForceHighLod(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xF5FFB08976911B50 | Since: 1207
 */
export declare function setHorseTrafficGroupingDistribution(): void;
/**
 * Notice: BOOL p4 was wrongly named takePassengers (?)
 * Can be used to rotate the train by setting the BOOL direction
 *
 * Hash: 0xC9EA26893C9E4024 | Since: 1207
 */
export declare function setMissionTrainWarpToCoords(train: number | IVehicle, pos: Vector3, direction: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1BFBAFCC6760FF02 | Since: 1207
 */
export declare function setRandomTrainsWhistleEnabled(train: number | IVehicle, enabled: boolean): void;
/**
 * Enables/disables damage/explosion flags on the engine and all attached cars; typically set true before EXPLODE_VEHICLE.
 *
 * Hash: 0x07E2E21E799080A0 | Since: 1207
 */
export declare function setTrainDestructionEnabled(train: number | IVehicle, enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x3660BCAB3A6BB734 | Since: 1207
 */
export declare function setTrainHalt(train: number | IVehicle): void;
/**
 * Restarts the train
 *
 * Hash: 0x787E43477746876F | Since: 1207
 */
export declare function setTrainLeaveStation(train: number | IVehicle): void;
/**
 * Maximum possible speed is 30.0 (108 km/h)
 *
 * Hash: 0x9F29999DFDF2AEB8 | Since: 1207
 */
export declare function setTrainMaxSpeed(train: number | IVehicle, speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4182C037AA1F0091 | Since: 1207
 */
export declare function setTrainStopsForStations(train: number | IVehicle, toggle: boolean): void;
/**
 * trainTrack: FREIGHT_GROUP, TRAINS3, BRAITHWAITES2_TRACK_CONFIG, TRAINS_OLD_WEST01, TRAINS_OLD_WEST03, TRAINS_NB1, TRAINS_INTERSECTION1_ANN
 *
 * Hash: 0xE6C5E2125EB210C1 | Since: 1207
 */
export declare function setTrainTrackJunctionSwitch(trainTrack: number | string, junctionIndex: number, enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8E5DA070BAD3279E | Since: 1207
 */
export declare function setDeterioration(vehicle: number | IVehicle, amount: number): void;
/**
 * dirtLevel: 0.0 - 1.0
 *
 * Hash: 0xBAE0EEDF93F05EAA | Since: 1207
 */
export declare function setDirtLevel2(vehicle: number | IVehicle, dirtLevel: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCE1531927AD6C9F8 | Since: 1207
 */
export declare function setIsInHurry(vehicle: number | IVehicle, enabled: boolean): void;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_liveries.lua
 *
 * Hash: 0xF89D82A0582E46ED | Since: 1207
 */
export declare function setLivery(vehicle: number | IVehicle, liveryIndex: number): void;
/**
 * Ranges from -1 to 2? (internal type is int8)
 * https://imgur.com/a/bPzHcft
 *
 * Hash: 0x3FA7D7D1E0EA809E | Since: 1207
 */
export declare function setLodLevel(vehicle: number | IVehicle, lodLevel: number): void;
/**
 * mudLevel: 0.0 - 1.0
 *
 * Hash: 0x4D15E49764CB328A | Since: 1207
 */
export declare function setMudLevel(vehicle: number | IVehicle, mudLevel: number): void;
/**
 * Picks the road/path link nearest (start to end) and stores it on the vehicle's driving component (used by R* Scripts to choose an exit link).
 *
 * Hash: 0xC2E62678D602853C | Since: 1207
 */
export declare function setRoadLinkForced(vehicle: number | IVehicle, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): void;
/**
 * snowLevel: 0.0 - 1.0
 *
 * Hash: 0x6F73EFAB11651D7F | Since: 1207
 */
export declare function setSnowLevel(vehicle: number | IVehicle, snowLevel: number): void;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_tints.lua
 *
 * Hash: 0x8268B098F6FCA4E2 | Since: 1207
 */
export declare function setTint(vehicle: number | IVehicle, tintId: number): void;
/**
 * wetLevel: 0.0 - 1.0
 *
 * Hash: 0x5AABB09F6FBD1F87 | Since: 1207
 */
export declare function setWetLevel(vehicle: number | IVehicle, wetLevel: number): void;
/**
 * No comment provided
 *
 * Hash: 0x41CDA90EE3450921 | Since: 1207
 */
export declare function showHorseReins(vehicle: number | IVehicle): void;
/**
 * whistleSequence: ACKNOWLEDGE, BACKING_UP, CROSSING, DANGER, MOVING, NEXT_STATION, PASSING, STOPPED
 * p2 = true seems to mute the sound
 *
 * Hash: 0xCFE122EC635CC2B2 | Since: 1207
 */
export declare function triggerTrainWhistle(train: number | IVehicle): string;
