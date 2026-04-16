import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * Break off vehicle wheel by index. The `leaveDebrisTrail` flag requires `putOnFire` to be true.
 * 
 * Hash: 0xA274CADB
 */
export function breakOffWheel(vehicle: number | IVehicle, wheelIndex: number, leaveDebrisTrail: boolean, deleteWheel: boolean, unknownFlag: boolean, putOnFire: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    BreakOffVehicleWheel(_vehicle, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag, putOnFire);
}

/**
 * Removes vehicle xenon lights custom RGB color.
 * 
 * Hash: 0x2867ED8C
 */
export function clearXenonLightsCustomColor(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ClearVehicleXenonLightsCustomColor(_vehicle);
}

/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity(While riding in a car as a passenger)
 * 
 * Hash: 0x5C140555
 */
export function disablePassengerIdleCamera(state: boolean): void {
    DisableVehiclePassengerIdleCamera(state);
}

/**
 * Checks whether the vehicle consumes fuel. The check is done based on petrol tank volume and vehicle type. Bicycles and vehicles with petrol tank volume equal to zero (only bicycles by default) do not use fuel. All other vehicles do.
 * 
 * You can customize petrol tank volume using [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolTankVolume`.
 * 
 * Hash: 0xEF30A696
 */
export function doesUseFuel(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return DoesVehicleUseFuel(_vehicle);
}

/**
 * Returns all registered vehicle model names, including non-dlc vehicles and custom vehicles in no particular order.
 * 
 * <strong>Example output</strong>
 * 
 * ```
 * ["dubsta", "dubsta2", "dubsta3", "myverycoolcar", "sultan", "sultanrs", ...]
 * ```
 * 
 * This native will not return vehicles that are unregistered (i.e from a resource being stopped) during runtime.
 * 
 * Hash: 0xD7531645
 */
export function getAllModels(): number {
    return GetAllVehicleModels();
}

/**
 * A getter for [SET_AMBIENT_VEHICLE_RANGE_MULTIPLIER_THIS_FRAME](#\_0x90B6DA738A9A25DA).
 * 
 * Hash: 0x667EC929
 */
export function getAmbientRangeMultiplier(): number {
    return GetAmbientVehicleRangeMultiplier();
}

/**
 * No comment provided
 * 
 * Hash: 0xE015E854
 */
export function getTrainCurrentTrackNode(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainCurrentTrackNode(_train);
}

/**
 * Gets the door count for the specified train.
 * 
 * Hash: 0x99974721
 */
export function getTrainDoorCount(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainDoorCount(_train);
}

/**
 * Gets the ratio that a door is open for on a train.
 * 
 * Hash: 0x40B16551
 */
export function getTrainDoorOpenRatio(train: number | IVehicle, doorIndex: number): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainDoorOpenRatio(_train, doorIndex);
}

/**
 * Gets the speed the train is currently going.
 * 
 * Hash: 0x428668B7
 */
export function getTrainSpeed(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainSpeed(_train);
}

/**
 * No comment provided
 * 
 * Hash: 0xC62AAC98
 */
export function getAlarmTimeLeft(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleAlarmTimeLeft(_vehicle);
}

/**
 * A getter for [SET_VEHICLE_CHEAT_POWER_INCREASE](#\_0xB59E4BD37AE292DB).
 * 
 * Hash: 0xC3C93F28
 */
export function getCheatPowerIncrease(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleCheatPowerIncrease(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1DAD4583
 */
export function getClutch(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleClutch(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB4F4E566
 */
export function getCurrentGear(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleCurrentGear(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE7B12B54
 */
export function getCurrentRpm(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleCurrentRpm(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xDFFABA2A
 */
export function getDashboardBoost(): number {
    return GetVehicleDashboardBoost();
}

/**
 * Retrieves the current gear displayed on the dashboard of the vehicle the player is in, returned as a float. This value represents the gear shown in the instrument cluster, such as "R" (0.0) or positive values (e.g., 1.0, 2.0, etc.) for drive gears.
 * 
 * Hash: 0x435C86F4
 */
export function getDashboardCurrentGear(): number {
    return GetVehicleDashboardCurrentGear();
}

/**
 * No comment provided
 * 
 * Hash: 0x19B0B2CE
 */
export function getDashboardFuel(): number {
    return GetVehicleDashboardFuel();
}

/**
 * Gets the state of the player vehicle's dashboard lights as a bit set
 * indicator_left = 1
 * indicator_right = 2
 * handbrakeLight = 4
 * engineLight = 8
 * ABSLight = 16
 * gasLight = 32
 * oilLight = 64
 * headlights = 128
 * highBeam = 256
 * batteryLight = 512
 * 
 * Hash: 0x500FFE9D
 */
export function getDashboardLights(): number {
    return GetVehicleDashboardLights();
}

/**
 * No comment provided
 * 
 * Hash: 0x3856D767
 */
export function getDashboardOilPressure(): number {
    return GetVehicleDashboardOilPressure();
}

/**
 * No comment provided
 * 
 * Hash: 0x1F5996AA
 */
export function getDashboardOilTemp(): number {
    return GetVehicleDashboardOilTemp();
}

/**
 * No comment provided
 * 
 * Hash: 0xF9716A11
 */
export function getDashboardRpm(): number {
    return GetVehicleDashboardRpm();
}

/**
 * No comment provided
 * 
 * Hash: 0x9AAD420E
 */
export function getDashboardSpeed(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleDashboardSpeed(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x6B6ADAFA
 */
export function getDashboardTemp(): number {
    return GetVehicleDashboardTemp();
}

/**
 * No comment provided
 * 
 * Hash: 0xFABE67A9
 */
export function getDashboardVacuum(): number {
    return GetVehicleDashboardVacuum();
}

/**
 * A getter for [SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x245A6883D966D537).
 * 
 * Hash: 0xEF7C6538
 */
export function getDensityMultiplier(): number {
    return GetVehicleDensityMultiplier();
}

/**
 * Gets a vehicle's multiplier used with a wheel's GET_VEHICLE_WHEEL_STEERING_ANGLE to determine the angle the wheel is rendered.
 * 
 * Hash: 0x21C1DA8E
 */
export function getDrawnWheelAngleMult(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleDrawnWheelAngleMult(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF4F495CB
 */
export function getEngineTemperature(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleEngineTemperature(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x5F739BB8
 */
export function getFuelLevel(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleFuelLevel(_vehicle);
}

/**
 * Gets vehicles gear ratio on choosen gear.
 * 
 * Hash: 0x82E794B7
 */
export function getGearRatio(vehicle: number | IVehicle, gear: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleGearRatio(_vehicle, gear);
}

/**
 * No comment provided
 * 
 * Hash: 0xB48A1292
 */
export function getGravityAmount(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleGravityAmount(_vehicle);
}

/**
 * Returns the effective handling data of a vehicle as a floating-point value.
 * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 * 
 * Hash: 0x642FC12F
 */
export function getHandlingFloat(vehicle: number | IVehicle, class_: string, fieldName: string): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleHandlingFloat(_vehicle, class_, fieldName);
}

/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 * 
 * Hash: 0x27396C75
 */
export function getHandlingInt(vehicle: number | IVehicle, class_: string, fieldName: string): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleHandlingInt(_vehicle, class_, fieldName);
}

/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 * 
 * Hash: 0xFB341304
 */
export function getHandlingVector(vehicle: number | IVehicle, class_: string, fieldName: string): Vector3 {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return new Vector3(GetVehicleHandlingVector(_vehicle, class_, fieldName));
}

/**
 * No comment provided
 * 
 * Hash: 0xF1D1D689
 */
export function getHighGear(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleHighGear(_vehicle);
}

/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 * 
 * Hash: 0x83070354
 */
export function getIndicatorLights(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleIndicatorLights(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x7E6E219C
 */
export function getLightMultiplier(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleLightMultiplier(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xDDB298AE
 */
export function getNextGear(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleNextGear(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xEDF4B0FC
 */
export function getNumberOfWheels(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleNumberOfWheels(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFC7F8EF4
 */
export function getOilLevel(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleOilLevel(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x954465DE
 */
export function getSteeringScale(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleSteeringScale(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1D07351
 */
export function getThrottleOffset(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleThrottleOffset(_vehicle);
}

/**
 * A getter for [MODIFY_VEHICLE_TOP_SPEED](#\_0x93A3996368C94158). Returns -1.0 if a modifier is not set.
 * 
 * Hash: 0x998B7FEE
 */
export function getTopSpeedModifier(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleTopSpeedModifier(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE02B51D7
 */
export function getTurboPressure(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleTurboPressure(_vehicle);
}

/**
 * List of known states:
 * 
 * ```
 * 1: Not wheeling.
 * 65: Vehicle is ready to do wheelie (burnouting).
 * 129: Vehicle is doing wheelie.
 * ```
 * 
 * Hash: 0x137260D1
 */
export function getWheelieState(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelieState(_vehicle);
}

/**
 * Gets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f when braking.
 * 
 * Hash: 0x70FE2EFF
 */
export function getWheelBrakePressure(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelBrakePressure(_vehicle, wheelIndex);
}

/**
 * Gets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0xC70FA0C7
 */
export function getWheelFlags(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelFlags(_vehicle, wheelIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x54A677F5
 */
export function getWheelHealth(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelHealth(_vehicle, wheelIndex);
}

/**
 * Gets whether the wheel is powered.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in GET_VEHICLE_WHEEL_FLAGS.
 * 
 * Hash: 0x3CCF1B49
 */
export function getWheelIsPowered(vehicle: number | IVehicle, wheelIndex: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelIsPowered(_vehicle, wheelIndex);
}

/**
 * Gets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0xD203287
 */
export function getWheelPower(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelPower(_vehicle, wheelIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xCEE21AB2
 */
export function getWheelRimColliderSize(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelRimColliderSize(_vehicle, wheelIndex);
}

/**
 * Gets the rotation speed of a wheel.
 * This is used internally to calcuate GET_VEHICLE_WHEEL_SPEED.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0xEA1859E5
 */
export function getWheelRotationSpeed(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelRotationSpeed(_vehicle, wheelIndex);
}

/**
 * Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 * 
 * Hash: 0x4046B66
 */
export function getWheelSize(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelSize(_vehicle);
}

/**
 * Gets speed of a wheel at the tyre.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0x149C9DA0
 */
export function getWheelSpeed(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelSpeed(_vehicle, wheelIndex);
}

/**
 * Gets steering angle of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0xA0867448
 */
export function getWheelSteeringAngle(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelSteeringAngle(_vehicle, wheelIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xA7F04022
 */
export function getWheelSurfaceMaterial(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelSurfaceMaterial(_vehicle, wheelIndex);
}

/**
 * Gets the current suspension compression of a wheel.
 * Returns a positive value. 0 means the suspension is fully extended, the wheel is off the ground.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0x2B48175B
 */
export function getWheelSuspensionCompression(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelSuspensionCompression(_vehicle, wheelIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xE0BA9FE6
 */
export function getWheelTireColliderSize(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelTireColliderSize(_vehicle, wheelIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xEF65929C
 */
export function getWheelTireColliderWidth(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelTireColliderWidth(_vehicle, wheelIndex);
}

/**
 * Gets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0x3BCFEE14
 */
export function getWheelTractionVectorLength(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelTractionVectorLength(_vehicle, wheelIndex);
}

/**
 * Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 * 
 * Hash: 0x9C7B59F9
 */
export function getWheelWidth(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelWidth(_vehicle);
}

/**
 * Returns the offset of the specified wheel relative to the wheel's axle center.
 * 
 * Hash: 0xCC90CBCA
 */
export function getWheelXOffset(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelXOffset(_vehicle, wheelIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x2EA4AFFE
 */
export function getWheelYRotation(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelYRotation(_vehicle, wheelIndex);
}

/**
 * Returns vehicle xenon lights custom RGB color values. Do note this native doesn't return non-RGB colors that was set with [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07).
 * 
 * Hash: 0xC715F730
 */
export function getXenonLightsCustomColor(vehicle: number | IVehicle): [boolean, number, number, number] {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleXenonLightsCustomColor(_vehicle);
}

/**
 * A getter for [SET_VEHICLE_XMAS_SNOW_FACTOR](#\_0x80CC4C9E).
 * 
 * Hash: 0x16605B30
 */
export function getXmasSnowFactor(): number {
    return GetVehicleXmasSnowFactor();
}

/**
 * No comment provided
 * 
 * Hash: 0xDC921211
 */
export function isAlarmSet(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleAlarmSet(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xA411F72C
 */
export function isInteriorLightOn(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleInteriorLightOn(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF9933BF4
 */
export function isNeedsToBeHotwired(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleNeedsToBeHotwired(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF849ED67
 */
export function isPreviouslyOwnedByPlayer(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehiclePreviouslyOwnedByPlayer(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xA7DAF7C
 */
export function isWanted(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleWanted(_vehicle);
}

/**
 * Setting the state to true and a value between 0 and 2 will cause pedestrian vehicles to react accordingly to sirens.
 * 
 * ```cpp
 * enum Reactions {
 * Left = 0,
 * Right = 1,
 * Stop = 2
 * }
 * ```
 * 
 * Hash: 0x3F3EB3F7
 */
export function overrideReactionToSiren(state: boolean, reaction: number): void {
    OverrideReactionToVehicleSiren(state, reaction);
}

/**
 * Overrides whether or not peds can stand on top of the specified vehicle.
 * 
 * Note this flag is not replicated automatically, you will have to manually do so.
 * 
 * Hash: 0x7FA03E76
 */
export function overridePedsCanStandOnTopFlag(vehicle: number | IVehicle, can: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    OverrideVehiclePedsCanStandOnTopFlag(_vehicle, can);
}

/**
 * Resets whether or not peds can stand on top of the specified vehicle.
 * 
 * Note this flag is not replicated automatically, you will have to manually do so.
 * 
 * Hash: 0xDF62CFE2
 */
export function resetPedsCanStandOnTopFlag(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ResetVehiclePedsCanStandOnTopFlag(_vehicle);
}

/**
 * Sets the default number plate text pattern for vehicles seen on the local client with the specified plate index as their *default* index (`plateProbabilities` from carvariations).
 * 
 * For consistency, this should be used with the same value on all clients, since vehicles *without* custom text will use a seeded random number generator with this pattern to determine the default plate text.
 * 
 * The default value is `11AAA111`, and using this or a NULL string will revert to the default game RNG.
 * 
 * ### Pattern string format
 * 
 * *   `1` will lead to a random number from 0-9.
 * *   `A` will lead to a random letter from A-Z.
 * *   `.` will lead to a random letter *or* number, with 50% probability of being either.
 * *   `^1` will lead to a literal `1` being emitted.
 * *   `^A` will lead to a literal `A` being emitted.
 * *   Any other character will lead to said character being emitted.
 * *   A string shorter than 8 characters will be padded on the right.
 * 
 * Hash: 0x79780FD2
 */
export function setDefaultNumberPlateTextPattern(plateIndex: number, pattern: string): void {
    SetDefaultVehicleNumberPlateTextPattern(plateIndex, pattern);
}

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * 
 * Hash: 0xFE8064E3
 */
export function setHandlingField(vehicle: string, class_: string, fieldName: string, value: any): void {
    SetHandlingField(vehicle, class_, fieldName, value);
}

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * 
 * Hash: 0x90DD01C
 */
export function setHandlingFloat(vehicle: string, class_: string, fieldName: string, value: number): void {
    SetHandlingFloat(vehicle, class_, fieldName, value);
}

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * 
 * Hash: 0x8AB3F46C
 */
export function setHandlingInt(vehicle: string, class_: string, fieldName: string, value: number): void {
    SetHandlingInt(vehicle, class_, fieldName, value);
}

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 * 
 * Hash: 0x7F9D543
 */
export function setHandlingVector(vehicle: string, class_: string, fieldName: string, value: Vector3): void {
    SetHandlingVector(vehicle, class_, fieldName, value);
}

/**
 * This completely disables pedestrian vehicles from reacting to sirens. They will not try to do any maneuver to evade.
 * 
 * Hash: 0xB90BBC6E
 */
export function setReactionToWithSirenDisabled(state: boolean): void {
    SetReactionToVehicleWithSirenDisabled(state);
}

/**
 * Enables or disables whether train doors should be forced open whilst a player is inside the train. This is enabled by default in multiplayer.
 * 
 * Hash: 0xD4D1BA63
 */
export function setTrainsForceDoorsOpen(forceOpen: boolean): void {
    SetTrainsForceDoorsOpen(forceOpen);
}

/**
 * Sets the ratio that a door is open for on a train.
 * 
 * Hash: 0x2468DBE8
 */
export function setTrainDoorOpenRatio(train: number | IVehicle, doorIndex: number, ratio: number): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainDoorOpenRatio(_train, doorIndex, ratio);
}

/**
 * No comment provided
 * 
 * Hash: 0x61CB74A0
 */
export function setTrainState(train: number | IVehicle, state: number): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainState(_train, state);
}

/**
 * Toggles a train's ability to stop at stations
 * 
 * Hash: 0xECB8B577
 */
export function setTrainStopAtStations(train: number | IVehicle, state: boolean): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainStopAtStations(_train, state);
}

/**
 * No comment provided
 * 
 * Hash: 0xC108EE6F
 */
export function setAlarmTimeLeft(vehicle: number | IVehicle, time: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleAlarmTimeLeft(_vehicle, time);
}

/**
 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 * 
 * Hash: 0x5F3A3574
 */
export function setAutoRepairDisabled(vehicle: number | IVehicle, value: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleAutoRepairDisabled(_vehicle, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x2F70ACED
 */
export function setClutch(vehicle: number | IVehicle, clutch: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleClutch(_vehicle, clutch);
}

/**
 * No comment provided
 * 
 * Hash: 0x2A01A8FC
 */
export function setCurrentRpm(vehicle: number | IVehicle, rpm: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleCurrentRpm(_vehicle, rpm);
}

/**
 * No comment provided
 * 
 * Hash: 0x6C93C4A9
 */
export function setEngineTemperature(vehicle: number | IVehicle, temperature: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleEngineTemperature(_vehicle, temperature);
}

/**
 * No comment provided
 * 
 * Hash: 0xBA970511
 */
export function setFuelLevel(vehicle: number | IVehicle, level: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleFuelLevel(_vehicle, level);
}

/**
 * Sets the vehicles gear ratio on choosen gear, reverse gear needs to be a negative float and forward moving gear needs to be a positive float. Refer to the examples if confused.
 * 
 * Hash: 0x496EF2F2
 */
export function setGearRatio(vehicle: number | IVehicle, gear: number, ratio: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleGearRatio(_vehicle, gear, ratio);
}

/**
 * No comment provided
 * 
 * Hash: 0x1A963E58
 */
export function setGravityAmount(vehicle: number | IVehicle, gravity: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleGravityAmount(_vehicle, gravity);
}

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * 
 * Hash: 0x2BA40795
 */
export function setVehicleHandlingField(vehicle: number | IVehicle, class_: string, fieldName: string, value: any): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHandlingField(_vehicle, class_, fieldName, value);
}

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * 
 * Hash: 0x488C86D2
 */
export function setVehicleHandlingFloat(vehicle: number | IVehicle, class_: string, fieldName: string, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHandlingFloat(_vehicle, class_, fieldName, value);
}

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 * 
 * Hash: 0xC37F4CF9
 */
export function setVehicleHandlingInt(vehicle: number | IVehicle, class_: string, fieldName: string, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHandlingInt(_vehicle, class_, fieldName, value);
}

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 * 
 * Hash: 0x12497890
 */
export function setVehicleHandlingVector(vehicle: number | IVehicle, class_: string, fieldName: string, value: Vector3): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHandlingVector(_vehicle, class_, fieldName, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x20B1B3E6
 */
export function setHighGear(vehicle: number | IVehicle, gear: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHighGear(_vehicle, gear);
}

/**
 * Sets the maximum distance in which [\_SET_VEHICLE_NITRO_ENABLED](#\_0xC8E9B6B71B8E660D) PTFX are rendered. Distance is measured from the camera position.
 * 
 * Hash: 0xA40CB822
 */
export function setNitroPtfxRange(range: number): void {
    SetVehicleNitroPtfxRange(range);
}

/**
 * No comment provided
 * 
 * Hash: 0x90D1CAD1
 */
export function setOilLevel(vehicle: number | IVehicle, level: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleOilLevel(_vehicle, level);
}

/**
 * Set the vehicle's pitch bias. Only works on planes.
 * 
 * Hash: 0x2A6CC9F2
 */
export function setPitchBias(vehicle: number | IVehicle, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehiclePitchBias(_vehicle, value);
}

/**
 * Set the vehicle's roll bias. Only works on planes.
 * 
 * Hash: 0x264B45DE
 */
export function setRollBias(vehicle: number | IVehicle, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleRollBias(_vehicle, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xFFCCC2EA
 */
export function setSteeringAngle(vehicle: number | IVehicle, angle: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleSteeringAngle(_vehicle, angle);
}

/**
 * No comment provided
 * 
 * Hash: 0xEB46596F
 */
export function setSteeringScale(vehicle: number | IVehicle, scale: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleSteeringScale(_vehicle, scale);
}

/**
 * Sets the height of the vehicle's suspension.
 * This changes the same value set by Suspension in the mod shop.
 * Negatives values raise the car. Positive values lower the car.
 * 
 * This is change is visual only. The collision of the vehicle will not move.
 * 
 * Hash: 0xB3439A01
 */
export function setSuspensionHeight(vehicle: number | IVehicle, newHeight: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleSuspensionHeight(_vehicle, newHeight);
}

/**
 * No comment provided
 * 
 * Hash: 0x6485615E
 */
export function setTurboPressure(vehicle: number | IVehicle, pressure: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleTurboPressure(_vehicle, pressure);
}

/**
 * Example script: https://pastebin.com/J6XGbkCW
 * 
 * List of known states:
 * 
 * ```
 * 1: Not wheeling.
 * 65: Vehicle is ready to do wheelie (burnouting).
 * 129: Vehicle is doing wheelie.
 * ```
 * 
 * Hash: 0xEAB8DB65
 */
export function setWheelieState(vehicle: number | IVehicle, state: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelieState(_vehicle, state);
}

/**
 * Sets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f
 * 
 * Hash: 0xE80F4E31
 */
export function setWheelBrakePressure(vehicle: number | IVehicle, wheelIndex: number, pressure: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelBrakePressure(_vehicle, wheelIndex, pressure);
}

/**
 * Sets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0xD2B9E90D
 */
export function setWheelFlags(vehicle: number | IVehicle, wheelIndex: number, flags: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelFlags(_vehicle, wheelIndex, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0xB22ECEFD
 */
export function setWheelHealth(vehicle: number | IVehicle, wheelIndex: number, health: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelHealth(_vehicle, wheelIndex, health);
}

/**
 * Sets whether the wheel is powered.
 * On all wheel drive cars this works to change which wheels receive power, but if a car's fDriveBiasFront doesn't send power to that wheel, it won't get power anyway. This can be fixed by changing the fDriveBiasFront with SET_VEHICLE_HANDLING_FLOAT.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in SET_VEHICLE_WHEEL_FLAGS.
 * 
 * Hash: 0xBD5291A0
 */
export function setWheelIsPowered(vehicle: number | IVehicle, wheelIndex: number, powered: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelIsPowered(_vehicle, wheelIndex, powered);
}

/**
 * Sets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0xC6146043
 */
export function setWheelPower(vehicle: number | IVehicle, wheelIndex: number, power: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelPower(_vehicle, wheelIndex, power);
}

/**
 * Not sure what this changes, probably determines physical rim size in case the tire is blown.
 * 
 * Hash: 0xF380E184
 */
export function setWheelRimColliderSize(vehicle: number | IVehicle, wheelIndex: number, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelRimColliderSize(_vehicle, wheelIndex, value);
}

/**
 * Sets the rotation speed of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0x35ED100D
 */
export function setWheelRotationSpeed(vehicle: number | IVehicle, wheelIndex: number, speed: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelRotationSpeed(_vehicle, wheelIndex, speed);
}

/**
 * Sets vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set size for non-default wheels).
 * 
 * Hash: 0x53AB5C35
 */
export function setWheelSize(vehicle: number | IVehicle, size: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return SetVehicleWheelSize(_vehicle, size);
}

/**
 * Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).
 * 
 * Hash: 0xB962D05C
 */
export function setWheelTireColliderSize(vehicle: number | IVehicle, wheelIndex: number, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelTireColliderSize(_vehicle, wheelIndex, value);
}

/**
 * Use along with SetVehicleWheelWidth to resize the wheels (this native sets the collider width affecting physics while SetVehicleWheelWidth will change visual width).
 * 
 * Hash: 0x47BD0270
 */
export function setWheelTireColliderWidth(vehicle: number | IVehicle, wheelIndex: number, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelTireColliderWidth(_vehicle, wheelIndex, value);
}

/**
 * Sets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0x85C85A3A
 */
export function setWheelTractionVectorLength(vehicle: number | IVehicle, wheelIndex: number, length: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelTractionVectorLength(_vehicle, wheelIndex, length);
}

/**
 * Sets vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set width for non-default wheels).
 * 
 * Hash: 0x64C3F1C0
 */
export function setWheelWidth(vehicle: number | IVehicle, width: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return SetVehicleWheelWidth(_vehicle, width);
}

/**
 * Adjusts the offset of the specified wheel relative to the wheel's axle center.
 * Needs to be called every frame in order to function properly, as GTA will reset the offset otherwise.
 * This function can be especially useful to set the track width of a vehicle, for example:
 * 
 * ```
 * function SetVehicleFrontTrackWidth(vehicle, width)
 * SetVehicleWheelXOffset(vehicle, 0, -width/2)
 * SetVehicleWheelXOffset(vehicle, 1, width/2)
 * end
 * ```
 * 
 * Hash: 0xBD6357D
 */
export function setWheelXOffset(vehicle: number | IVehicle, wheelIndex: number, offset: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelXOffset(_vehicle, wheelIndex, offset);
}

/**
 * No comment provided
 * 
 * Hash: 0xC6C2171F
 */
export function setWheelYRotation(vehicle: number | IVehicle, wheelIndex: number, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelYRotation(_vehicle, wheelIndex, value);
}

/**
 * Sets custom vehicle xenon lights color, allowing to use RGB palette. The game will ignore lights color set by [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07) when custom color is active. This native is not synced between players. Requires xenon lights mod to be set on vehicle.
 * 
 * Hash: 0x1683E7F0
 */
export function setXenonLightsCustomColor(vehicle: number | IVehicle, red: number, green: number, blue: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleXenonLightsCustomColor(_vehicle, red, green, blue);
}

/**
 * No comment provided
 * 
 * Hash: 0x80CC4C9E
 */
export function setXmasSnowFactor(gripFactor: number): void {
    SetVehicleXmasSnowFactor(gripFactor);
}

/**
 * No comment provided
 * 
 * Hash: 0x77CC80DC
 */
export function doesTrainStopAtStations(train: number | IVehicle): boolean {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return DoesTrainStopAtStations(_train);
}

/**
 * Gets the trains desired speed.
 * 
 * Hash: 0xA4921EF5
 */
export function getTrainCruiseSpeed(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainCruiseSpeed(_train);
}

/**
 * Gets the direction the train is facing
 * 
 * Hash: 0x8DAF79B6
 */
export function getTrainDirection(train: number | IVehicle): boolean {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainDirection(_train);
}

/**
 * No comment provided
 * 
 * Hash: 0x81B50033
 */
export function getTrainState(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainState(_train);
}

/**
 * No comment provided
 * 
 * Hash: 0x9AA339D
 */
export function getTrainTrackIndex(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainTrackIndex(_train);
}

/**
 * No comment provided
 * 
 * Hash: 0x483B013C
 */
export function getHandbrake(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleHandbrake(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1382FCEA
 */
export function getSteeringAngle(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleSteeringAngle(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xBB340D04
 */
export function isEngineStarting(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleEngineStarting(_vehicle);
}

/**
 * **Note**: Flags are not the same based on your `gamebuild`. Please see [here](https://docs.fivem.net/docs/game-references/vehicle-references/vehicle-flags) to see a complete list of all vehicle flags.
 * 
 * Get vehicle.meta flag by index. Useful examples include `FLAG_LAW_ENFORCEMENT` (31), `FLAG_RICH_CAR` (36), `FLAG_IS_ELECTRIC` (43), `FLAG_IS_OFFROAD_VEHICLE` (48).
 * 
 * Hash: 0xD85C9F57
 */
export function getHasFlag(vehicle: number | IVehicle, flagIndex: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleHasFlag(_vehicle, flagIndex);
}

/**
 * Returns the model type of the vehicle as defined by:
 * 
 * ```cpp
 * enum VehicleType
 * {
 * VEHICLE_TYPE_NONE = -1,
 * VEHICLE_TYPE_CAR = 0,
 * VEHICLE_TYPE_PLANE = 1,
 * VEHICLE_TYPE_TRAILER = 2,
 * VEHICLE_TYPE_QUADBIKE = 3,
 * VEHICLE_TYPE_DRAFT = 4,
 * VEHICLE_TYPE_SUBMARINECAR = 5,
 * VEHICLE_TYPE_AMPHIBIOUS_AUTOMOBILE = 6,
 * VEHICLE_TYPE_AMPHIBIOUS_QUADBIKE = 7,
 * VEHICLE_TYPE_HELI = 8,
 * VEHICLE_TYPE_BLIMP = 9,
 * VEHICLE_TYPE_AUTOGYRO = 10,
 * VEHICLE_TYPE_BIKE = 11,
 * VEHICLE_TYPE_BICYCLE = 12,
 * VEHICLE_TYPE_BOAT = 13,
 * VEHICLE_TYPE_TRAIN = 14,
 * VEHICLE_TYPE_SUBMARINE = 15,
 * };
 * ```
 * 
 * Hash: 0xDE73BC10
 */
export function getTypeRaw(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleTypeRaw(_vehicle);
}

/**
 * Getter for [BREAK_OFF_VEHICLE_WHEEL](?\_0xA274CADB).
 * 
 * Hash: 0xCF1BC668
 */
export function isWheelBrokenOff(vehicle: number | IVehicle, wheelIndex: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleWheelBrokenOff(_vehicle, wheelIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x8923DD42
 */
export function setCurrentGear(vehicle: number | IVehicle, gear: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleCurrentGear(_vehicle, gear);
}

/**
 * This native is a setter for [`GET_VEHICLE_HAS_FLAG`](#\_0xD85C9F57).
 * 
 * Hash: 0x63AE1A34
 */
export function setFlag(vehicle: number | IVehicle, flagIndex: number, value: boolean): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return SetVehicleFlag(_vehicle, flagIndex, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x3A4566F4
 */
export function setNextGear(vehicle: number | IVehicle, nextGear: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleNextGear(_vehicle, nextGear);
}

/**
 * Returns the type of the passed vehicle.
 * 
 * For client scripts, reference the more detailed [GET_VEHICLE_TYPE_RAW](#\_0xDE73BC10) native.
 * 
 * ### Vehicle types
 * 
 * *   automobile
 * *   bike
 * *   boat
 * *   heli
 * *   plane
 * *   submarine
 * *   trailer
 * *   train
 * 
 * Hash: 0xA273060E
 */
export function getType(vehicle: number | IVehicle): string {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleType(_vehicle);
}

