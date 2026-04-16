import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * Break off vehicle wheel by index. The `leaveDebrisTrail` flag requires `putOnFire` to be true.
 * 
 * Hash: 0xA274CADB | Since: unknown | API-Set: client
 */
export function breakOffWheel(vehicle: number | IVehicle, wheelIndex: number, leaveDebrisTrail: boolean, deleteWheel: boolean, unknownFlag: boolean, putOnFire: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    BreakOffVehicleWheel(_vehicle, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag, putOnFire);
}

/**
 * Removes vehicle xenon lights custom RGB color.
 * 
 * Hash: 0x2867ED8C | Since: unknown | API-Set: client
 */
export function clearXenonLightsCustomColor(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ClearVehicleXenonLightsCustomColor(_vehicle);
}

/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity(While riding in a car as a passenger)
 * 
 * Hash: 0x5C140555 | Since: unknown | API-Set: client
 */
export function disablePassengerIdleCamera(state: boolean): void {
    DisableVehiclePassengerIdleCamera(state);
}

/**
 * Checks whether the vehicle consumes fuel. The check is done based on petrol tank volume and vehicle type. Bicycles and vehicles with petrol tank volume equal to zero (only bicycles by default) do not use fuel. All other vehicles do.
 * 
 * You can customize petrol tank volume using [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolTankVolume`.
 * 
 * Hash: 0xEF30A696 | Since: unknown | API-Set: client
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
 * Hash: 0xD7531645 | Since: unknown | API-Set: client
 */
export function getAllModels(): number {
    return GetAllVehicleModels();
}

/**
 * A getter for [SET_AMBIENT_VEHICLE_RANGE_MULTIPLIER_THIS_FRAME](#\_0x90B6DA738A9A25DA).
 * 
 * Hash: 0x667EC929 | Since: unknown | API-Set: client
 */
export function getAmbientRangeMultiplier(): number {
    return GetAmbientVehicleRangeMultiplier();
}

/**
 * No comment provided
 * 
 * Hash: 0xE015E854 | Since: unknown | API-Set: client
 */
export function getTrainCurrentTrackNode(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainCurrentTrackNode(_train);
}

/**
 * Gets the door count for the specified train.
 * 
 * Hash: 0x99974721 | Since: unknown | API-Set: client
 */
export function getTrainDoorCount(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainDoorCount(_train);
}

/**
 * Gets the ratio that a door is open for on a train.
 * 
 * Hash: 0x40B16551 | Since: unknown | API-Set: client
 */
export function getTrainDoorOpenRatio(train: number | IVehicle, doorIndex: number): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainDoorOpenRatio(_train, doorIndex);
}

/**
 * Gets the speed the train is currently going.
 * 
 * Hash: 0x428668B7 | Since: unknown | API-Set: client
 */
export function getTrainSpeed(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainSpeed(_train);
}

/**
 * No comment provided
 * 
 * Hash: 0xC62AAC98 | Since: unknown | API-Set: client
 */
export function getAlarmTimeLeft(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleAlarmTimeLeft(_vehicle);
}

/**
 * A getter for [SET_VEHICLE_CHEAT_POWER_INCREASE](#\_0xB59E4BD37AE292DB).
 * 
 * Hash: 0xC3C93F28 | Since: unknown | API-Set: client
 */
export function getCheatPowerIncrease(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleCheatPowerIncrease(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1DAD4583 | Since: unknown | API-Set: client
 */
export function getClutch(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleClutch(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB4F4E566 | Since: unknown | API-Set: client
 */
export function getCurrentGear(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleCurrentGear(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE7B12B54 | Since: unknown | API-Set: client
 */
export function getCurrentRpm(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleCurrentRpm(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xDFFABA2A | Since: unknown | API-Set: client
 */
export function getDashboardBoost(): number {
    return GetVehicleDashboardBoost();
}

/**
 * Retrieves the current gear displayed on the dashboard of the vehicle the player is in, returned as a float. This value represents the gear shown in the instrument cluster, such as "R" (0.0) or positive values (e.g., 1.0, 2.0, etc.) for drive gears.
 * 
 * Hash: 0x435C86F4 | Since: unknown | API-Set: client
 */
export function getDashboardCurrentGear(): number {
    return GetVehicleDashboardCurrentGear();
}

/**
 * No comment provided
 * 
 * Hash: 0x19B0B2CE | Since: unknown | API-Set: client
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
 * Hash: 0x500FFE9D | Since: unknown | API-Set: client
 */
export function getDashboardLights(): number {
    return GetVehicleDashboardLights();
}

/**
 * No comment provided
 * 
 * Hash: 0x3856D767 | Since: unknown | API-Set: client
 */
export function getDashboardOilPressure(): number {
    return GetVehicleDashboardOilPressure();
}

/**
 * No comment provided
 * 
 * Hash: 0x1F5996AA | Since: unknown | API-Set: client
 */
export function getDashboardOilTemp(): number {
    return GetVehicleDashboardOilTemp();
}

/**
 * No comment provided
 * 
 * Hash: 0xF9716A11 | Since: unknown | API-Set: client
 */
export function getDashboardRpm(): number {
    return GetVehicleDashboardRpm();
}

/**
 * No comment provided
 * 
 * Hash: 0x9AAD420E | Since: unknown | API-Set: client
 */
export function getDashboardSpeed(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleDashboardSpeed(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x6B6ADAFA | Since: unknown | API-Set: client
 */
export function getDashboardTemp(): number {
    return GetVehicleDashboardTemp();
}

/**
 * No comment provided
 * 
 * Hash: 0xFABE67A9 | Since: unknown | API-Set: client
 */
export function getDashboardVacuum(): number {
    return GetVehicleDashboardVacuum();
}

/**
 * A getter for [SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x245A6883D966D537).
 * 
 * Hash: 0xEF7C6538 | Since: unknown | API-Set: client
 */
export function getDensityMultiplier(): number {
    return GetVehicleDensityMultiplier();
}

/**
 * Gets a vehicle's multiplier used with a wheel's GET_VEHICLE_WHEEL_STEERING_ANGLE to determine the angle the wheel is rendered.
 * 
 * Hash: 0x21C1DA8E | Since: unknown | API-Set: client
 */
export function getDrawnWheelAngleMult(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleDrawnWheelAngleMult(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF4F495CB | Since: unknown | API-Set: client
 */
export function getEngineTemperature(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleEngineTemperature(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x5F739BB8 | Since: unknown | API-Set: client
 */
export function getFuelLevel(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleFuelLevel(_vehicle);
}

/**
 * Gets vehicles gear ratio on choosen gear.
 * 
 * Hash: 0x82E794B7 | Since: unknown | API-Set: client
 */
export function getGearRatio(vehicle: number | IVehicle, gear: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleGearRatio(_vehicle, gear);
}

/**
 * No comment provided
 * 
 * Hash: 0xB48A1292 | Since: unknown | API-Set: client
 */
export function getGravityAmount(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleGravityAmount(_vehicle);
}

/**
 * Returns the effective handling data of a vehicle as a floating-point value.
 * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 * 
 * Hash: 0x642FC12F | Since: unknown | API-Set: client
 */
export function getHandlingFloat(vehicle: number | IVehicle, class_: string, fieldName: string): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleHandlingFloat(_vehicle, class_, fieldName);
}

/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 * 
 * Hash: 0x27396C75 | Since: unknown | API-Set: client
 */
export function getHandlingInt(vehicle: number | IVehicle, class_: string, fieldName: string): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleHandlingInt(_vehicle, class_, fieldName);
}

/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 * 
 * Hash: 0xFB341304 | Since: unknown | API-Set: client
 */
export function getHandlingVector(vehicle: number | IVehicle, class_: string, fieldName: string): Vector3 {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return new Vector3(GetVehicleHandlingVector(_vehicle, class_, fieldName));
}

/**
 * No comment provided
 * 
 * Hash: 0xF1D1D689 | Since: unknown | API-Set: client
 */
export function getHighGear(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleHighGear(_vehicle);
}

/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 * 
 * Hash: 0x83070354 | Since: unknown | API-Set: client
 */
export function getIndicatorLights(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleIndicatorLights(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x7E6E219C | Since: unknown | API-Set: client
 */
export function getLightMultiplier(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleLightMultiplier(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xDDB298AE | Since: unknown | API-Set: client
 */
export function getNextGear(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleNextGear(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xEDF4B0FC | Since: unknown | API-Set: client
 */
export function getNumberOfWheels(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleNumberOfWheels(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFC7F8EF4 | Since: unknown | API-Set: client
 */
export function getOilLevel(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleOilLevel(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x954465DE | Since: unknown | API-Set: client
 */
export function getSteeringScale(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleSteeringScale(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1D07351 | Since: unknown | API-Set: client
 */
export function getThrottleOffset(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleThrottleOffset(_vehicle);
}

/**
 * A getter for [MODIFY_VEHICLE_TOP_SPEED](#\_0x93A3996368C94158). Returns -1.0 if a modifier is not set.
 * 
 * Hash: 0x998B7FEE | Since: unknown | API-Set: client
 */
export function getTopSpeedModifier(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleTopSpeedModifier(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE02B51D7 | Since: unknown | API-Set: client
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
 * Hash: 0x137260D1 | Since: unknown | API-Set: client
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
 * Hash: 0x70FE2EFF | Since: unknown | API-Set: client
 */
export function getWheelBrakePressure(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelBrakePressure(_vehicle, wheelIndex);
}

/**
 * Gets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0xC70FA0C7 | Since: unknown | API-Set: client
 */
export function getWheelFlags(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelFlags(_vehicle, wheelIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x54A677F5 | Since: unknown | API-Set: client
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
 * Hash: 0x3CCF1B49 | Since: unknown | API-Set: client
 */
export function getWheelIsPowered(vehicle: number | IVehicle, wheelIndex: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelIsPowered(_vehicle, wheelIndex);
}

/**
 * Gets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0xD203287 | Since: unknown | API-Set: client
 */
export function getWheelPower(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelPower(_vehicle, wheelIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xCEE21AB2 | Since: unknown | API-Set: client
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
 * Hash: 0xEA1859E5 | Since: unknown | API-Set: client
 */
export function getWheelRotationSpeed(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelRotationSpeed(_vehicle, wheelIndex);
}

/**
 * Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 * 
 * Hash: 0x4046B66 | Since: unknown | API-Set: client
 */
export function getWheelSize(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelSize(_vehicle);
}

/**
 * Gets speed of a wheel at the tyre.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0x149C9DA0 | Since: unknown | API-Set: client
 */
export function getWheelSpeed(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelSpeed(_vehicle, wheelIndex);
}

/**
 * Gets steering angle of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0xA0867448 | Since: unknown | API-Set: client
 */
export function getWheelSteeringAngle(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelSteeringAngle(_vehicle, wheelIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xA7F04022 | Since: unknown | API-Set: client
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
 * Hash: 0x2B48175B | Since: unknown | API-Set: client
 */
export function getWheelSuspensionCompression(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelSuspensionCompression(_vehicle, wheelIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xE0BA9FE6 | Since: unknown | API-Set: client
 */
export function getWheelTireColliderSize(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelTireColliderSize(_vehicle, wheelIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xEF65929C | Since: unknown | API-Set: client
 */
export function getWheelTireColliderWidth(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelTireColliderWidth(_vehicle, wheelIndex);
}

/**
 * Gets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0x3BCFEE14 | Since: unknown | API-Set: client
 */
export function getWheelTractionVectorLength(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelTractionVectorLength(_vehicle, wheelIndex);
}

/**
 * Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 * 
 * Hash: 0x9C7B59F9 | Since: unknown | API-Set: client
 */
export function getWheelWidth(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelWidth(_vehicle);
}

/**
 * Returns the offset of the specified wheel relative to the wheel's axle center.
 * 
 * Hash: 0xCC90CBCA | Since: unknown | API-Set: client
 */
export function getWheelXOffset(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelXOffset(_vehicle, wheelIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x2EA4AFFE | Since: unknown | API-Set: client
 */
export function getWheelYRotation(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleWheelYRotation(_vehicle, wheelIndex);
}

/**
 * Returns vehicle xenon lights custom RGB color values. Do note this native doesn't return non-RGB colors that was set with [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07).
 * 
 * Hash: 0xC715F730 | Since: unknown | API-Set: client
 */
export function getXenonLightsCustomColor(vehicle: number | IVehicle): [boolean, number, number, number] {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleXenonLightsCustomColor(_vehicle);
}

/**
 * A getter for [SET_VEHICLE_XMAS_SNOW_FACTOR](#\_0x80CC4C9E).
 * 
 * Hash: 0x16605B30 | Since: unknown | API-Set: client
 */
export function getXmasSnowFactor(): number {
    return GetVehicleXmasSnowFactor();
}

/**
 * No comment provided
 * 
 * Hash: 0xDC921211 | Since: unknown | API-Set: client
 */
export function isAlarmSet(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleAlarmSet(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xA411F72C | Since: unknown | API-Set: client
 */
export function isInteriorLightOn(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleInteriorLightOn(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF9933BF4 | Since: unknown | API-Set: client
 */
export function isNeedsToBeHotwired(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleNeedsToBeHotwired(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF849ED67 | Since: unknown | API-Set: client
 */
export function isPreviouslyOwnedByPlayer(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehiclePreviouslyOwnedByPlayer(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xA7DAF7C | Since: unknown | API-Set: client
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
 * Hash: 0x3F3EB3F7 | Since: unknown | API-Set: client
 */
export function overrideReactionToSiren(state: boolean, reaction: number): void {
    OverrideReactionToVehicleSiren(state, reaction);
}

/**
 * Overrides whether or not peds can stand on top of the specified vehicle.
 * 
 * Note this flag is not replicated automatically, you will have to manually do so.
 * 
 * Hash: 0x7FA03E76 | Since: unknown | API-Set: client
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
 * Hash: 0xDF62CFE2 | Since: unknown | API-Set: client
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
 * Hash: 0x79780FD2 | Since: unknown | API-Set: client
 */
export function setDefaultNumberPlateTextPattern(plateIndex: number, pattern: string): void {
    SetDefaultVehicleNumberPlateTextPattern(plateIndex, pattern);
}

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * 
 * Hash: 0xFE8064E3 | Since: unknown | API-Set: client
 */
export function setHandlingField(vehicle: string, class_: string, fieldName: string, value: any): void {
    SetHandlingField(vehicle, class_, fieldName, value);
}

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * 
 * Hash: 0x90DD01C | Since: unknown | API-Set: client
 */
export function setHandlingFloat(vehicle: string, class_: string, fieldName: string, value: number): void {
    SetHandlingFloat(vehicle, class_, fieldName, value);
}

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * 
 * Hash: 0x8AB3F46C | Since: unknown | API-Set: client
 */
export function setHandlingInt(vehicle: string, class_: string, fieldName: string, value: number): void {
    SetHandlingInt(vehicle, class_, fieldName, value);
}

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 * 
 * Hash: 0x7F9D543 | Since: unknown | API-Set: client
 */
export function setHandlingVector(vehicle: string, class_: string, fieldName: string, value: Vector3): void {
    SetHandlingVector(vehicle, class_, fieldName, value);
}

/**
 * This completely disables pedestrian vehicles from reacting to sirens. They will not try to do any maneuver to evade.
 * 
 * Hash: 0xB90BBC6E | Since: unknown | API-Set: client
 */
export function setReactionToWithSirenDisabled(state: boolean): void {
    SetReactionToVehicleWithSirenDisabled(state);
}

/**
 * Enables or disables whether train doors should be forced open whilst a player is inside the train. This is enabled by default in multiplayer.
 * 
 * Hash: 0xD4D1BA63 | Since: unknown | API-Set: client
 */
export function setTrainsForceDoorsOpen(forceOpen: boolean): void {
    SetTrainsForceDoorsOpen(forceOpen);
}

/**
 * Sets the ratio that a door is open for on a train.
 * 
 * Hash: 0x2468DBE8 | Since: unknown | API-Set: client
 */
export function setTrainDoorOpenRatio(train: number | IVehicle, doorIndex: number, ratio: number): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainDoorOpenRatio(_train, doorIndex, ratio);
}

/**
 * No comment provided
 * 
 * Hash: 0x61CB74A0 | Since: unknown | API-Set: client
 */
export function setTrainState(train: number | IVehicle, state: number): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainState(_train, state);
}

/**
 * Toggles a train's ability to stop at stations
 * 
 * Hash: 0xECB8B577 | Since: unknown | API-Set: client
 */
export function setTrainStopAtStations(train: number | IVehicle, state: boolean): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainStopAtStations(_train, state);
}

/**
 * No comment provided
 * 
 * Hash: 0xC108EE6F | Since: unknown | API-Set: client
 */
export function setAlarmTimeLeft(vehicle: number | IVehicle, time: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleAlarmTimeLeft(_vehicle, time);
}

/**
 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 * 
 * Hash: 0x5F3A3574 | Since: unknown | API-Set: client
 */
export function setAutoRepairDisabled(vehicle: number | IVehicle, value: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleAutoRepairDisabled(_vehicle, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x2F70ACED | Since: unknown | API-Set: client
 */
export function setClutch(vehicle: number | IVehicle, clutch: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleClutch(_vehicle, clutch);
}

/**
 * No comment provided
 * 
 * Hash: 0x2A01A8FC | Since: unknown | API-Set: client
 */
export function setCurrentRpm(vehicle: number | IVehicle, rpm: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleCurrentRpm(_vehicle, rpm);
}

/**
 * No comment provided
 * 
 * Hash: 0x6C93C4A9 | Since: unknown | API-Set: client
 */
export function setEngineTemperature(vehicle: number | IVehicle, temperature: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleEngineTemperature(_vehicle, temperature);
}

/**
 * No comment provided
 * 
 * Hash: 0xBA970511 | Since: unknown | API-Set: client
 */
export function setFuelLevel(vehicle: number | IVehicle, level: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleFuelLevel(_vehicle, level);
}

/**
 * Sets the vehicles gear ratio on choosen gear, reverse gear needs to be a negative float and forward moving gear needs to be a positive float. Refer to the examples if confused.
 * 
 * Hash: 0x496EF2F2 | Since: unknown | API-Set: client
 */
export function setGearRatio(vehicle: number | IVehicle, gear: number, ratio: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleGearRatio(_vehicle, gear, ratio);
}

/**
 * No comment provided
 * 
 * Hash: 0x1A963E58 | Since: unknown | API-Set: client
 */
export function setGravityAmount(vehicle: number | IVehicle, gravity: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleGravityAmount(_vehicle, gravity);
}

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * 
 * Hash: 0x2BA40795 | Since: unknown | API-Set: client
 */
export function setVehicleHandlingField(vehicle: number | IVehicle, class_: string, fieldName: string, value: any): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHandlingField(_vehicle, class_, fieldName, value);
}

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * 
 * Hash: 0x488C86D2 | Since: unknown | API-Set: client
 */
export function setVehicleHandlingFloat(vehicle: number | IVehicle, class_: string, fieldName: string, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHandlingFloat(_vehicle, class_, fieldName, value);
}

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 * 
 * Hash: 0xC37F4CF9 | Since: unknown | API-Set: client
 */
export function setVehicleHandlingInt(vehicle: number | IVehicle, class_: string, fieldName: string, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHandlingInt(_vehicle, class_, fieldName, value);
}

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 * 
 * Hash: 0x12497890 | Since: unknown | API-Set: client
 */
export function setVehicleHandlingVector(vehicle: number | IVehicle, class_: string, fieldName: string, value: Vector3): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHandlingVector(_vehicle, class_, fieldName, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x20B1B3E6 | Since: unknown | API-Set: client
 */
export function setHighGear(vehicle: number | IVehicle, gear: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHighGear(_vehicle, gear);
}

/**
 * Sets the maximum distance in which [\_SET_VEHICLE_NITRO_ENABLED](#\_0xC8E9B6B71B8E660D) PTFX are rendered. Distance is measured from the camera position.
 * 
 * Hash: 0xA40CB822 | Since: unknown | API-Set: client
 */
export function setNitroPtfxRange(range: number): void {
    SetVehicleNitroPtfxRange(range);
}

/**
 * No comment provided
 * 
 * Hash: 0x90D1CAD1 | Since: unknown | API-Set: client
 */
export function setOilLevel(vehicle: number | IVehicle, level: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleOilLevel(_vehicle, level);
}

/**
 * Set the vehicle's pitch bias. Only works on planes.
 * 
 * Hash: 0x2A6CC9F2 | Since: unknown | API-Set: client
 */
export function setPitchBias(vehicle: number | IVehicle, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehiclePitchBias(_vehicle, value);
}

/**
 * Set the vehicle's roll bias. Only works on planes.
 * 
 * Hash: 0x264B45DE | Since: unknown | API-Set: client
 */
export function setRollBias(vehicle: number | IVehicle, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleRollBias(_vehicle, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xFFCCC2EA | Since: unknown | API-Set: client
 */
export function setSteeringAngle(vehicle: number | IVehicle, angle: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleSteeringAngle(_vehicle, angle);
}

/**
 * No comment provided
 * 
 * Hash: 0xEB46596F | Since: unknown | API-Set: client
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
 * Hash: 0xB3439A01 | Since: unknown | API-Set: client
 */
export function setSuspensionHeight(vehicle: number | IVehicle, newHeight: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleSuspensionHeight(_vehicle, newHeight);
}

/**
 * No comment provided
 * 
 * Hash: 0x6485615E | Since: unknown | API-Set: client
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
 * Hash: 0xEAB8DB65 | Since: unknown | API-Set: client
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
 * Hash: 0xE80F4E31 | Since: unknown | API-Set: client
 */
export function setWheelBrakePressure(vehicle: number | IVehicle, wheelIndex: number, pressure: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelBrakePressure(_vehicle, wheelIndex, pressure);
}

/**
 * Sets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0xD2B9E90D | Since: unknown | API-Set: client
 */
export function setWheelFlags(vehicle: number | IVehicle, wheelIndex: number, flags: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelFlags(_vehicle, wheelIndex, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0xB22ECEFD | Since: unknown | API-Set: client
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
 * Hash: 0xBD5291A0 | Since: unknown | API-Set: client
 */
export function setWheelIsPowered(vehicle: number | IVehicle, wheelIndex: number, powered: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelIsPowered(_vehicle, wheelIndex, powered);
}

/**
 * Sets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0xC6146043 | Since: unknown | API-Set: client
 */
export function setWheelPower(vehicle: number | IVehicle, wheelIndex: number, power: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelPower(_vehicle, wheelIndex, power);
}

/**
 * Not sure what this changes, probably determines physical rim size in case the tire is blown.
 * 
 * Hash: 0xF380E184 | Since: unknown | API-Set: client
 */
export function setWheelRimColliderSize(vehicle: number | IVehicle, wheelIndex: number, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelRimColliderSize(_vehicle, wheelIndex, value);
}

/**
 * Sets the rotation speed of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0x35ED100D | Since: unknown | API-Set: client
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
 * Hash: 0x53AB5C35 | Since: unknown | API-Set: client
 */
export function setWheelSize(vehicle: number | IVehicle, size: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return SetVehicleWheelSize(_vehicle, size);
}

/**
 * Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).
 * 
 * Hash: 0xB962D05C | Since: unknown | API-Set: client
 */
export function setWheelTireColliderSize(vehicle: number | IVehicle, wheelIndex: number, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelTireColliderSize(_vehicle, wheelIndex, value);
}

/**
 * Use along with SetVehicleWheelWidth to resize the wheels (this native sets the collider width affecting physics while SetVehicleWheelWidth will change visual width).
 * 
 * Hash: 0x47BD0270 | Since: unknown | API-Set: client
 */
export function setWheelTireColliderWidth(vehicle: number | IVehicle, wheelIndex: number, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelTireColliderWidth(_vehicle, wheelIndex, value);
}

/**
 * Sets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * Hash: 0x85C85A3A | Since: unknown | API-Set: client
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
 * Hash: 0x64C3F1C0 | Since: unknown | API-Set: client
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
 * Hash: 0xBD6357D | Since: unknown | API-Set: client
 */
export function setWheelXOffset(vehicle: number | IVehicle, wheelIndex: number, offset: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelXOffset(_vehicle, wheelIndex, offset);
}

/**
 * No comment provided
 * 
 * Hash: 0xC6C2171F | Since: unknown | API-Set: client
 */
export function setWheelYRotation(vehicle: number | IVehicle, wheelIndex: number, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelYRotation(_vehicle, wheelIndex, value);
}

/**
 * Sets custom vehicle xenon lights color, allowing to use RGB palette. The game will ignore lights color set by [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07) when custom color is active. This native is not synced between players. Requires xenon lights mod to be set on vehicle.
 * 
 * Hash: 0x1683E7F0 | Since: unknown | API-Set: client
 */
export function setXenonLightsCustomColor(vehicle: number | IVehicle, red: number, green: number, blue: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleXenonLightsCustomColor(_vehicle, red, green, blue);
}

/**
 * No comment provided
 * 
 * Hash: 0x80CC4C9E | Since: unknown | API-Set: client
 */
export function setXmasSnowFactor(gripFactor: number): void {
    SetVehicleXmasSnowFactor(gripFactor);
}

/**
 * No comment provided
 * 
 * Hash: 0x77CC80DC | Since: unknown | API-Set: shared
 */
export function doesTrainStopAtStations(train: number | IVehicle): boolean {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return DoesTrainStopAtStations(_train);
}

/**
 * Gets the trains desired speed.
 * 
 * Hash: 0xA4921EF5 | Since: unknown | API-Set: shared
 */
export function getTrainCruiseSpeed(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainCruiseSpeed(_train);
}

/**
 * Gets the direction the train is facing
 * 
 * Hash: 0x8DAF79B6 | Since: unknown | API-Set: shared
 */
export function getTrainDirection(train: number | IVehicle): boolean {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainDirection(_train);
}

/**
 * No comment provided
 * 
 * Hash: 0x81B50033 | Since: unknown | API-Set: shared
 */
export function getTrainState(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainState(_train);
}

/**
 * No comment provided
 * 
 * Hash: 0x9AA339D | Since: unknown | API-Set: shared
 */
export function getTrainTrackIndex(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainTrackIndex(_train);
}

/**
 * No comment provided
 * 
 * Hash: 0x483B013C | Since: unknown | API-Set: shared
 */
export function getHandbrake(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleHandbrake(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1382FCEA | Since: unknown | API-Set: shared
 */
export function getSteeringAngle(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleSteeringAngle(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xBB340D04 | Since: unknown | API-Set: shared
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
 * Hash: 0xD85C9F57 | Since: unknown | API-Set: client
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
 * Hash: 0xDE73BC10 | Since: unknown | API-Set: client
 */
export function getTypeRaw(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleTypeRaw(_vehicle);
}

/**
 * Getter for [BREAK_OFF_VEHICLE_WHEEL](?\_0xA274CADB).
 * 
 * Hash: 0xCF1BC668 | Since: unknown | API-Set: client
 */
export function isWheelBrokenOff(vehicle: number | IVehicle, wheelIndex: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleWheelBrokenOff(_vehicle, wheelIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x8923DD42 | Since: unknown | API-Set: client
 */
export function setCurrentGear(vehicle: number | IVehicle, gear: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleCurrentGear(_vehicle, gear);
}

/**
 * This native is a setter for [`GET_VEHICLE_HAS_FLAG`](#\_0xD85C9F57).
 * 
 * Hash: 0x63AE1A34 | Since: unknown | API-Set: client
 */
export function setFlag(vehicle: number | IVehicle, flagIndex: number, value: boolean): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return SetVehicleFlag(_vehicle, flagIndex, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x3A4566F4 | Since: unknown | API-Set: client
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
 * Hash: 0xA273060E | Since: unknown | API-Set: shared
 */
export function getType(vehicle: number | IVehicle): string {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleType(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x4C221BAC54D735C3 | Since: 1207 | API-Set: unknown
 */
export function addRoadNodeSpeedZone(): number {
    return AddRoadNodeSpeedZone(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * Returns false if every seat is occupied.
 * 
 * Hash: 0xA0A424505A1B6429 | Since: 1207 | API-Set: unknown
 */
export function areAnySeatsFree(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return AreAnyVehicleSeatsFree(_vehicle);
}

/**
 * This native makes the vehicle stop immediately
 * 
 * distance defines how far it will travel until stopping.
 * 
 * Hash: 0x260BE8F09E326A20 | Since: 1207 | API-Set: unknown
 */
export function bringToHalt(vehicle: number | IVehicle, distance: number, duration: number, _unknown: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    BringVehicleToHalt(_vehicle, distance, duration, _unknown);
}

/**
 * No comment provided
 * 
 * Hash: 0xC075176CFB8B4128 | Since: 1207 | API-Set: unknown
 */
export function canAnchorBoatHere(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return CanAnchorBoatHere(_vehicle);
}

/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 * 
 * Hash: 0xF8B2D32A2231FD24 | Since: 1207 | API-Set: unknown
 */
export function canShuffleSeat(vehicle: number | IVehicle, seatIndex: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return CanShuffleSeat(_vehicle, seatIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x0EFC5DC62E67609B | Since: 1207 | API-Set: unknown
 */
export function clearLastDriven(): void {
    ClearLastDrivenVehicle();
}

/**
 * Copies sourceVehicle's damage (broken bumpers, broken lights, etc.) to targetVehicle.
 * 
 * Hash: 0xDBC28A8C683CD80B | Since: 1207 | API-Set: unknown
 */
export function copyDamages(sourceVehicle: number | IVehicle, targetVehicle: number | IVehicle): void {
    const _sourceVehicle = sourceVehicle instanceof IVehicle ? sourceVehicle.handle() : sourceVehicle;
    const _targetVehicle = targetVehicle instanceof IVehicle ? targetVehicle.handle() : targetVehicle;
    CopyVehicleDamages(_sourceVehicle, _targetVehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xAF35D0D2583051B0 | Since: 1207 | API-Set: unknown
 */
export function create(modelHash: number | string, pos: Vector3, heading: number, isNetwork: boolean, bScriptHostVeh: boolean, bDontAutoCreateDraftAnimals: boolean): number {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return CreateVehicle(modelHash, pos.x, pos.y, pos.z, heading, isNetwork, bScriptHostVeh, bDontAutoCreateDraftAnimals, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xA3120A1385F17FF7 | Since: 1207 | API-Set: unknown
 */
export function deleteAllTrains(): void {
    DeleteAllTrains();
}

/**
 * No comment provided
 * 
 * Hash: 0x0D3630FB07E8B570 | Since: 1207 | API-Set: unknown
 */
export function deleteMissionTrain(): number {
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
 * Hash: 0xE20A909D8C4A70F8 | Since: 1207 | API-Set: unknown
 */
export function deleteVehicle(): number {
    return DeleteVehicle();
}

/**
 * No comment provided
 * 
 * Hash: 0x94B1E71B144356A5 | Since: 1207 | API-Set: unknown
 */
export function disableWeapon(disabled: boolean, weaponHash: number | string, vehicle: number | IVehicle, owner: number | IPed): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _owner = owner instanceof IPed ? owner.handle() : owner;
    if (typeof weaponHash === 'string') weaponHash = GetHashKey(weaponHash)
    DisableVehicleWeapon(disabled, weaponHash, _vehicle, _owner);
}

/**
 * No comment provided
 * 
 * Hash: 0xAF5E7E9A7620FFB5 | Since: 1207 | API-Set: unknown
 */
export function doesExtraExist(vehicle: number | IVehicle, extraId: number): boolean {
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
 * Hash: 0x75DCED9EEC5769D7 | Since: 1207 | API-Set: unknown
 */
export function explode(vehicle: number | IVehicle, isAudible: boolean, isInvisible: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ExplodeVehicle(_vehicle, isAudible, isInvisible, undefined, undefined);
}

/**
 * Often called after START_PLAYBACK_RECORDED_VEHICLE and SKIP_TIME_IN_PLAYBACK_RECORDED_VEHICLE; similar in use to FORCE_ENTITY_AI_AND_ANIMATION_UPDATE.
 * 
 * Hash: 0x59ECA796021B0539 | Since: 1207 | API-Set: unknown
 */
export function forcePlaybackRecordedUpdate(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ForcePlaybackRecordedVehicleUpdate(_vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x52F45D033645181B | Since: 1207 | API-Set: unknown
 */
export function getClosest(pos: Vector3, radius: number, modelHash: number | string, flags: number): number {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return GetClosestVehicle(pos.x, pos.y, pos.z, radius, modelHash, flags);
}

/**
 * Returns p1 for 0xBA958F68031DDBFC (stationIndex)
 * 
 * Hash: 0x86FA6D8B48667D75 | Since: 1207 | API-Set: unknown
 */
export function getCurrentStationForTrain(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetCurrentStationForTrain(_train);
}

/**
 * No comment provided
 * 
 * Hash: 0xA19447D83294E29F | Since: 1207 | API-Set: unknown
 */
export function getDraftAnimalCount(vehicle: number | IVehicle): [boolean, number, number] {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetDraftAnimalCount(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x2963B5C1637E8A27 | Since: 1207 | API-Set: unknown
 */
export function getDriverOf(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetDriverOfVehicle(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xA94F3E0AB9695E19 | Since: 1207 | API-Set: unknown
 */
export function getLastDriven(): number {
    return GetLastDrivenVehicle();
}

/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 * 
 * Hash: 0x74583B19FEEAFDA7 | Since: 1207 | API-Set: unknown
 */
export function getLastPedInSeat(vehicle: number | IVehicle, seatIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetLastPedInVehicleSeat(_vehicle, seatIndex);
}

/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 * 
 * Hash: 0xBB40DD2270B65366 | Since: 1207 | API-Set: unknown
 */
export function getPedInSeat(vehicle: number | IVehicle, seatIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetPedInVehicleSeat(_vehicle, seatIndex);
}

/**
 * This native does no interpolation between pathpoints. The same position will be returned for all times up to the next pathpoint in the recording.
 * 
 * See REQUEST_VEHICLE_RECORDING
 * 
 * Hash: 0x1A00961A1BE94E5E | Since: 1207 | API-Set: unknown
 */
export function getPositionOfRecordingAtTime(recording: number, time: number): [Vector3, string] {
    return new Vector3(GetPositionOfVehicleRecordingAtTime(recording, time));
}

/**
 * This native does no interpolation between pathpoints. The same rotation will be returned for all times up to the next pathpoint in the recording.
 * 
 * See REQUEST_VEHICLE_RECORDING
 * 
 * Hash: 0x61787DD28B8CC0D5 | Since: 1207 | API-Set: unknown
 */
export function getRotationOfRecordingAtTime(recording: number, time: number): [Vector3, string] {
    return new Vector3(GetRotationOfVehicleRecordingAtTime(recording, time));
}

/**
 * No comment provided
 * 
 * Hash: 0x233B51C7913FA031 | Since: 1207 | API-Set: unknown
 */
export function getTimePositionInRecording(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetTimePositionInRecording(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x865FEC2FA899F29C | Since: 1207 | API-Set: unknown
 */
export function getTrackIndexOfTrain(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrackIndexOfTrain(_train);
}

/**
 * No comment provided
 * 
 * Hash: 0xD0FB093A4CDB932C | Since: 1207 | API-Set: unknown
 */
export function getTrainCarriage(train: number | IVehicle, trailerNumber: number): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainCarriage(_train, trailerNumber);
}

/**
 * Seems related to vehicle health, like the one in IV.
 * Max 1000, min 0.
 * Vehicle does not necessarily explode or become undrivable at 0.
 * 
 * Hash: 0x42113B857E33C16E | Since: 1207 | API-Set: unknown
 */
export function getBodyHealth(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleBodyHealth(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA2CDDFEB8BC898B | Since: 1207 | API-Set: unknown
 */
export function getDoorsLockedForPlayer(vehicle: number | IVehicle, player: number | string | IPlayer): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetVehicleDoorsLockedForPlayer(_vehicle, _player);
}

/**
 * No comment provided
 * 
 * Hash: 0xC867FD144F2469D3 | Since: 1207 | API-Set: unknown
 */
export function getDoorLockStatus(vehicle: number | IVehicle): number {
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
 * Hash: 0x90DBFFAC43B22081 | Since: 1207 | API-Set: unknown
 */
export function getEngineHealth(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleEngineHealth(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFE52F34491529F0B | Since: 1207 | API-Set: unknown
 */
export function getEstimatedMaxSpeed(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleEstimatedMaxSpeed(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xA9C55F1C15E62E06 | Since: 1207 | API-Set: unknown
 */
export function getMaxNumberOfPassengers(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleMaxNumberOfPassengers(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9A578736FF3A17C3 | Since: 1207 | API-Set: unknown
 */
export function getModelNumberOfSeats(modelHash: number | string): number {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return GetVehicleModelNumberOfSeats(modelHash);
}

/**
 * Gets the number of passengers, NOT including the driver. Use IS_VEHICLE_SEAT_FREE(Vehicle, -1) to also check for the driver
 * 
 * Hash: 0x59F3F16577CD79B2 | Since: 1207 | API-Set: unknown
 */
export function getNumberOfPassengers(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleNumberOfPassengers(_vehicle);
}

/**
 * 1000 is max health
 * 
 * Hash: 0x1E5A9B356D5098BE | Since: 1207 | API-Set: unknown
 */
export function getPetrolTankHealth(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehiclePetrolTankHealth(_vehicle);
}

/**
 * Gets the trailer of a vehicle and puts it into the trailer parameter.
 * 
 * Hash: 0xCF867A239EC30741 | Since: 1207 | API-Set: unknown
 */
export function getTrailerVehicle(vehicle: number | IVehicle): [boolean, number] {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleTrailerVehicle(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x2701D01D5E18FC31 | Since: 1207 | API-Set: unknown
 */
export function hasInstantFillPopulationFinished(): boolean {
    return HasInstantFillVehiclePopulationFinished();
}

/**
 * No comment provided
 * 
 * Hash: 0xB935F3154BC913C8 | Since: 1207 | API-Set: unknown
 */
export function hasAssetLoaded(vehicleAsset: number | string): boolean {
    if (typeof vehicleAsset === 'string') vehicleAsset = GetHashKey(vehicleAsset)
    return HasVehicleAssetLoaded(vehicleAsset);
}

/**
 * See REQUEST_VEHICLE_RECORDING
 * 
 * Hash: 0xBA9325BE372AB6EA | Since: 1207 | API-Set: unknown
 */
export function hasRecordingBeenLoaded(recording: number): [boolean, string] {
    return HasVehicleRecordingBeenLoaded(recording);
}

/**
 * No comment provided
 * 
 * Hash: 0x1FF00DB43026B12F | Since: 1207 | API-Set: unknown
 */
export function instantlyFillPopulation(): void {
    InstantlyFillVehiclePopulation();
}

/**
 * No comment provided
 * 
 * Hash: 0x5698BA4FD04D39C4 | Since: 1207 | API-Set: unknown
 */
export function isAnyNearPoint(pos: Vector3, radius: number): boolean {
    return IsAnyVehicleNearPoint(pos.x, pos.y, pos.z, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0xEA44E97849E9F3DD | Since: 1207 | API-Set: unknown
 */
export function isDraft(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsDraftVehicle(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x80DDCCB2F4A3EB57 | Since: 1207 | API-Set: unknown
 */
export function isEntryPointForSeatClear(ped: number | IPed, vehicle: number | IVehicle, seatIndex: number, side: boolean, onEnter: boolean): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsEntryPointForSeatClear(_ped, _vehicle, seatIndex, side, onEnter);
}

/**
 * No comment provided
 * 
 * Hash: 0x02774B3A9034278F | Since: 1207 | API-Set: unknown
 */
export function isPlaybackGoingOnFor(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsPlaybackGoingOnForVehicle(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A7472606EC5B7C1 | Since: 1207 | API-Set: unknown
 */
export function isPlaybackUsingAiGoingOnFor(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsPlaybackUsingAiGoingOnForVehicle(_vehicle);
}

/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 * 
 * Hash: 0x7892685BF6D9775E | Since: 1207 | API-Set: unknown
 */
export function isSeatWarpOnly(vehicle: number | IVehicle, seatIndex: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsSeatWarpOnly(_vehicle, seatIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x799CFC7C5B743B15 | Since: 1207 | API-Set: unknown
 */
export function isThisModelABoat(model: number | string): boolean {
    if (typeof model === 'string') model = GetHashKey(model)
    return IsThisModelABoat(model);
}

/**
 * No comment provided
 * 
 * Hash: 0xFC08C8F8C1EDF174 | Since: 1207 | API-Set: unknown
 */
export function isThisModelATrain(model: number | string): boolean {
    if (typeof model === 'string') model = GetHashKey(model)
    return IsThisModelATrain(model);
}

/**
 * No comment provided
 * 
 * Hash: 0xE887BD31D97793F6 | Since: 1207 | API-Set: unknown
 */
export function isTrainWaitingAtStation(train: number | IVehicle): boolean {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return IsTrainWaitingAtStation(_train);
}

/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * Hash: 0x7AE191143C7A9107 | Since: 1207 | API-Set: unknown
 */
export function isDoorFullyOpen(vehicle: number | IVehicle, doorId: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleDoorFullyOpen(_vehicle, doorId);
}

/**
 * No comment provided
 * 
 * Hash: 0xB86D29B10F627379 | Since: 1207 | API-Set: unknown
 */
export function isDriveable(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleDriveable(_vehicle, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA9A55D9C4351625 | Since: 1207 | API-Set: unknown
 */
export function isExtraTurnedOn(vehicle: number | IVehicle, extraId: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleExtraTurnedOn(_vehicle, extraId);
}

/**
 * No comment provided
 * 
 * Hash: 0x3F5029A8FC060C48 | Since: 1207 | API-Set: unknown
 */
export function isInBurnout(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleInBurnout(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x0045A54EC7A22455 | Since: 1207 | API-Set: unknown
 */
export function isModel(vehicle: number | IVehicle, model: number | string): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    if (typeof model === 'string') model = GetHashKey(model)
    return IsVehicleModel(_vehicle, model);
}

/**
 * No comment provided
 * 
 * Hash: 0x0D5D119529654EE0 | Since: 1207 | API-Set: unknown
 */
export function isOnAllWheels(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleOnAllWheels(_vehicle);
}

/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 * Use GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS(vehicle) - 1 for last seat index.
 * 
 * Hash: 0xE052C1B1CAA4ECE4 | Since: 1207 | API-Set: unknown
 */
export function isSeatFree(vehicle: number | IVehicle, seatIndex: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleSeatFree(_vehicle, seatIndex);
}

/**
 * Returns true if the vehicle's current speed is less than, or equal to 0.0025f.
 * 
 * For some vehicles it returns true if the current speed is <= 0.00039999999.
 * 
 * Hash: 0x78C3311A73135241 | Since: 1207 | API-Set: unknown
 */
export function isStopped(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleStopped(_vehicle);
}

/**
 * VEH_STUCK_ON_ROOF = 0,
 * VEH_STUCK_ON_SIDE,
 * VEH_STUCK_HUNG_UP,
 * VEH_STUCK_JAMMED
 * 
 * Hash: 0x1ABA9753939503C5 | Since: 1207 | API-Set: unknown
 */
export function isStuckTimerUp(vehicle: number | IVehicle, stuckType: number, ms: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleStuckTimerUp(_vehicle, stuckType, ms);
}

/**
 * Requires a visibility tracker on the vehicle (TRACK_VEHICLE_VISIBILITY)
 * 
 * Hash: 0x424910CD5DE8C246 | Since: 1207 | API-Set: unknown
 */
export function isVisible(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleVisible(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x0E7910A63E05B12C | Since: 1436 | API-Set: unknown
 */
export function isWindowIntact(vehicle: number | IVehicle, windowIndex: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleWindowIntact(_vehicle, windowIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xDDBEA5506C848227 | Since: 1207 | API-Set: unknown
 */
export function isWrecked(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleWrecked(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1EF36558FBDE2DAA | Since: 1207 | API-Set: unknown
 */
export function lockDoorsWhenNoLongerNeeded(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    LockDoorsWhenNoLongerNeeded(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x35AD938C74CACD6A | Since: 1207 | API-Set: unknown
 */
export function modifyTopSpeed(vehicle: number | IVehicle, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ModifyVehicleTopSpeed(_vehicle, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xFE9AB3354ACE6C9C | Since: 1207 | API-Set: unknown
 */
export function removeRoadNodeSpeedZone(speedzone: number): boolean {
    return RemoveRoadNodeSpeedZone(speedzone);
}

/**
 * No comment provided
 * 
 * Hash: 0xC619A44639BC0CB4 | Since: 1207 | API-Set: unknown
 */
export function removesFromGeneratorsInArea(): void {
    RemoveVehiclesFromGeneratorsInArea(undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x888A4E675B38F5AD | Since: 1207 | API-Set: unknown
 */
export function removeAsset(vehicleAsset: number | string): void {
    if (typeof vehicleAsset === 'string') vehicleAsset = GetHashKey(vehicleAsset)
    RemoveVehicleAsset(vehicleAsset);
}

/**
 * See REQUEST_VEHICLE_RECORDING
 * 
 * Hash: 0x139E35755418F6AA | Since: 1207 | API-Set: unknown
 */
export function removeRecording(): any {
    return RemoveVehicleRecording(undefined);
}

/**
 * windowIndex:
 * 0 = Front Right Window
 * 1 = Front Left Window
 * 2 = Back Right Window
 * 3 = Back Left Window
 * 
 * Hash: 0x745F15A215F2DDF1 | Since: 1207 | API-Set: unknown
 */
export function removeWindow(vehicle: number | IVehicle, windowIndex: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    RemoveVehicleWindow(_vehicle, windowIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x81A15811460FAB3A | Since: 1207 | API-Set: unknown
 */
export function requestAsset(vehicleHash: number | string, vehicleAsset: number): void {
    if (typeof vehicleHash === 'string') vehicleHash = GetHashKey(vehicleHash)
    RequestVehicleAsset(vehicleHash, vehicleAsset);
}

/**
 * No comment provided
 * 
 * Hash: 0x84B81EF78BD22357 | Since: 1207 | API-Set: unknown
 */
export function requestHighDetailModel(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    RequestVehicleHighDetailModel(_vehicle);
}

/**
 * Request the vehicle recording defined by the lowercase format string "%s%03d.yvr". For example, REQUEST_VEHICLE_RECORDING(1, "FBIs1UBER") corresponds to fbis1uber001.yvr.
 * For all vehicle recording/playback natives, "script" is a common prefix that usually corresponds to the script/mission the recording is used in, "recording" is its int suffix, and "id" corresponds to a unique identifier within the recording streaming module.
 * (GTA) Note that only 24 recordings (hardcoded in multiple places) can ever active at a given time before clobbering begins.
 * 
 * Hash: 0xC474CF16EDA45DC9 | Since: 1207 | API-Set: unknown
 */
export function requestRecording(recording: number): string {
    return RequestVehicleRecording(recording);
}

/**
 * No comment provided
 * 
 * Hash: 0x23298B468F7D88B6 | Since: 1207 | API-Set: unknown
 */
export function resetStuckTimer(vehicle: number | IVehicle, nullAttributes: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ResetVehicleStuckTimer(_vehicle, nullAttributes);
}

/**
 * No comment provided
 * 
 * Hash: 0x8D3230A0ED7DE39F | Since: 1207 | API-Set: unknown
 */
export function setAllowExplodesOnContact(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetAllowVehicleExplodesOnContact(_vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x3D596E6E88A02C24 | Since: 1207 | API-Set: unknown
 */
export function setAllGeneratorsActive(): void {
    SetAllVehicleGeneratorsActive();
}

/**
 * No comment provided
 * 
 * Hash: 0xBBB134FB9D50C0CC | Since: 1207 | API-Set: unknown
 */
export function setAllGeneratorsActiveInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void {
    SetAllVehicleGeneratorsActiveInArea(x1, y1, z1, x2, y2, z2, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xAEAB044F05B92659 | Since: 1207 | API-Set: unknown
 */
export function setBoatAnchor(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetBoatAnchor(_vehicle, toggle);
}

/**
 * Value: mostly 99999.9f
 * 
 * Old name: _SET_BOAT_MOVEMENT_RESISTANCE
 * 
 * Hash: 0xE3261532550D6A9F | Since: 1207 | API-Set: unknown
 */
export function setBoatLowLodAnchorDistance(vehicle: number | IVehicle, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetBoatLowLodAnchorDistance(_vehicle, value);
}

/**
 * Old name: _SET_BOAT_FROZEN_WHEN_ANCHORED
 * 
 * Hash: 0x286771F3059A37A7 | Since: 1207 | API-Set: unknown
 */
export function setBoatRemainsAnchoredWhilePlayerIsDriver(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetBoatRemainsAnchoredWhilePlayerIsDriver(_vehicle, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x62A6D317A011EA1D | Since: 1207 | API-Set: unknown
 */
export function setBoatSinksWhenWrecked(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetBoatSinksWhenWrecked(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xBC4735F48CD983EF | Since: 1207 | API-Set: unknown
 */
export function setBreakableLocksUnbreakable(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetBreakableVehicleLocksUnbreakable(_vehicle, toggle);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xD4288603E8766FF7 | Since: 1207 | API-Set: unknown
 */
export function setDisableRandomTrainsThisFrame(toggle: boolean): void {
    SetDisableRandomTrainsThisFrame(toggle);
}

/**
 * Old name: _SET_DISABLE_SUPERDUMMY_MODE
 * 
 * Hash: 0x1716D787D9B94202 | Since: 1232 | API-Set: unknown
 */
export function setDisableSuperdummy(vehicle: number | IVehicle, disable: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDisableSuperdummy(_vehicle, disable);
}

/**
 * No comment provided
 * 
 * Hash: 0xD146EE5F2B06B95E | Since: 1207 | API-Set: unknown
 */
export function setDisableEngineFires(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDisableVehicleEngineFires(_vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x5795FBE7A2001C14 | Since: 1207 | API-Set: unknown
 */
export function setDisablePetrolTankDamage(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDisableVehiclePetrolTankDamage(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB70986AB19B04AFF | Since: 1207 | API-Set: unknown
 */
export function setDisablePetrolTankFires(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDisableVehiclePetrolTankFires(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x63DC1F22C903B709 | Since: 1207 | API-Set: unknown
 */
export function setDontAllowPlayerToEnterIfLockedForPlayer(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDontAllowPlayerToEnterVehicleIfLockedForPlayer(_vehicle, false);
}

/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * Old name: _SET_VEHICLE_DOOR_CAN_BREAK
 * 
 * Hash: 0x081FB9D6422F804C | Since: 1207 | API-Set: unknown
 */
export function setDoorAllowedToBeBrokenOff(vehicle: number | IVehicle, doorId: number, isBreakable: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDoorAllowedToBeBrokenOff(_vehicle, doorId, isBreakable);
}

/**
 * No comment provided
 * 
 * Hash: 0x73F1E4F6DF26FE30 | Since: 1207 | API-Set: unknown
 */
export function setEnableSlipstreaming(): void {
    SetEnableVehicleSlipstreaming(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x373CB1283308BD7B | Since: 1207 | API-Set: unknown
 */
export function setForceHd(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetForceHdVehicle(_vehicle, toggle);
}

/**
 * Sets boat to be anchored on spawn, called together with SET_BOAT_ANCHOR and _SET_BOAT_ANCHOR_BUOYANCY_COEFFICIENT
 * 
 * Hash: 0x75B49ACD73617437 | Since: 1207 | API-Set: unknown
 */
export function setForceLowLodAnchorMode(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetForceLowLodAnchorMode(_vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x7F8E2B131E1DCA6C | Since: 1207 | API-Set: unknown
 */
export function setForceEngineDamageByBullet(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetForceVehicleEngineDamageByBullet(_vehicle, toggle);
}

/**
 * flags = 0: DEFAULT; 1: KEEP_OLD_SPEED
 * 
 * Hash: 0xBBE7648349B49BE8 | Since: 1207 | API-Set: unknown
 */
export function setMissionTrainAsNoLongerNeeded(flags: number): number {
    return SetMissionTrainAsNoLongerNeeded(flags);
}

/**
 * No comment provided
 * 
 * Hash: 0x7632755962AB9922 | Since: 1207 | API-Set: unknown
 */
export function setMissionTrainCoords(train: number | IVehicle, pos: Vector3): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetMissionTrainCoords(_train, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xFEDFA97638D61D4A | Since: 1207 | API-Set: unknown
 */
export function setParkedDensityMultiplierThisFrame(multiplier: number): void {
    SetParkedVehicleDensityMultiplierThisFrame(multiplier);
}

/**
 * No comment provided
 * 
 * Hash: 0x838C216C2B05A009 | Since: 1207 | API-Set: unknown
 */
export function setPedOwns(ped: number | IPed, vehicle: number | IVehicle): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetPedOwnsVehicle(_ped, _vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xD78084EED4CD94C6 | Since: 1207 | API-Set: unknown
 */
export function setPlaybackSpeed(vehicle: number | IVehicle, speed: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetPlaybackSpeed(_vehicle, speed);
}

/**
 * No comment provided
 * 
 * Hash: 0xF44D446D4E36DB87 | Since: 1207 | API-Set: unknown
 */
export function setRandomBoats(toggle: boolean): void {
    SetRandomBoats(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1156C6EE7E82A98A | Since: 1207 | API-Set: unknown
 */
export function setRandomTrains(toggle: boolean): void {
    SetRandomTrains(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1F91D44490E1EA0C | Since: 1207 | API-Set: unknown
 */
export function setRandomDensityMultiplierThisFrame(multiplier: number): void {
    SetRandomVehicleDensityMultiplierThisFrame(multiplier);
}

/**
 * No comment provided
 * 
 * Hash: 0x01021EB2E96B793C | Since: 1207 | API-Set: unknown
 */
export function setTrainCruiseSpeed(train: number | IVehicle, speed: number): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainCruiseSpeed(_train, speed);
}

/**
 * No comment provided
 * 
 * Hash: 0x8EC47DD4300BF063 | Since: 1207 | API-Set: unknown
 */
export function setTrainOffsetFromStation(train: number | IVehicle, offset: number): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainOffsetFromStation(_train, offset);
}

/**
 * No comment provided
 * 
 * Hash: 0xDFBA6BBFF7CCAFBB | Since: 1207 | API-Set: unknown
 */
export function setTrainSpeed(train: number | IVehicle, speed: number): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainSpeed(_train, speed);
}

/**
 * Used to be incorrectly named SET_VEHICLE_EXCLUSIVE_DRIVER
 * 
 * Hash: 0x0893DAFBFA67110E | Since: 1207 | API-Set: unknown
 */
export function setAiCanUseExclusiveSeats(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleAiCanUseExclusiveSeats(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1240E8596A8308B9 | Since: 1207 | API-Set: unknown
 */
export function setAllowHomingMissleLockon(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleAllowHomingMissleLockon(_vehicle, toggle);
}

/**
 * Makes the vehicle accept no passengers.
 * 
 * Hash: 0xECB9E9BC887E8060 | Since: 1207 | API-Set: unknown
 */
export function setAllowNoPassengersLockon(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleAllowNoPassengersLockon(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x501354951CD942DE | Since: 1207 | API-Set: unknown
 */
export function setAutomaticallyAttaches(vehicle: number | IVehicle): any {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return SetVehicleAutomaticallyAttaches(_vehicle, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x55CCAAE4F28C67A0 | Since: 1207 | API-Set: unknown
 */
export function setBodyHealth(vehicle: number | IVehicle, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleBodyHealth(_vehicle, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xCEC4CA2CAB8FA98C | Since: 1207 | API-Set: unknown
 */
export function setBrokenPartsDontAffectAiHandling(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleBrokenPartsDontAffectAiHandling(_vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x05254BA0B44ADC16 | Since: 1207 | API-Set: unknown
 */
export function setCanBeTargetted(vehicle: number | IVehicle, state: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleCanBeTargetted(_vehicle, state);
}

/**
 * No comment provided
 * 
 * Hash: 0xE42952510F84AFDB | Since: 1207 | API-Set: unknown
 */
export function setCanBeUsedByFleeingPeds(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleCanBeUsedByFleeingPeds(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x4BF8131AE811541C | Since: 1207 | API-Set: unknown
 */
export function setCanBeVisiblyDamaged(vehicle: number | IVehicle, state: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleCanBeVisiblyDamaged(_vehicle, state);
}

/**
 * No comment provided
 * 
 * Hash: 0xC5ED9D59B4646611 | Since: 1207 | API-Set: unknown
 */
export function setCanBreak(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleCanBreak(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x065D03A9D6B2C6B5 | Since: 1207 | API-Set: unknown
 */
export function setCanEjectPassengersIfLocked(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleCanEjectPassengersIfLocked(_vehicle, false);
}

/**
 * Apply damage to vehicle at a location. Location is relative to vehicle model (not world).
 * 
 * Radius of effect damage applied in a sphere at impact location
 * 
 * Hash: 0x1D7678F81452BB41 | Since: 1207 | API-Set: unknown
 */
export function setDamage(vehicle: number | IVehicle, xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDamage(_vehicle, xOffset, yOffset, zOffset, damage, radius, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x606374EBFC27B133 | Since: 1207 | API-Set: unknown
 */
export function setDensityMultiplierThisFrame(multiplier: number): void {
    SetVehicleDensityMultiplierThisFrame(multiplier);
}

/**
 * No comment provided
 * 
 * Hash: 0x758C3460EE915D0A | Since: 1207 | API-Set: unknown
 */
export function setDirtLevel(vehicle: number | IVehicle, dirtLevel: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDirtLevel(_vehicle, dirtLevel);
}

/**
 * No comment provided
 * 
 * Hash: 0x96F78A6A075D55D9 | Since: 1207 | API-Set: unknown
 */
export function setDoorsLocked(vehicle: number | IVehicle, doorLockStatus: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorsLocked(_vehicle, doorLockStatus);
}

/**
 * No comment provided
 * 
 * Hash: 0x2381977DA948F8DC | Since: 1207 | API-Set: unknown
 */
export function setDoorsLockedForAllPlayers(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorsLockedForAllPlayers(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x359A8EA1FB8D6F0F | Since: 1207 | API-Set: unknown
 */
export function setDoorsLockedForPlayer(vehicle: number | IVehicle, player: number | string | IPlayer, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetVehicleDoorsLockedForPlayer(_vehicle, _player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE712BC978770F105 | Since: 1207 | API-Set: unknown
 */
export function setDoorsLockedForTeam(vehicle: number | IVehicle, team: number, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorsLockedForTeam(_vehicle, team, toggle);
}

/**
 * Closes all doors of a vehicle:
 * 
 * Hash: 0xA4FFCD645B11F25A | Since: 1207 | API-Set: unknown
 */
export function setDoorsShut(vehicle: number | IVehicle, closeInstantly: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorsShut(_vehicle, closeInstantly);
}

/**
 * No comment provided
 * 
 * Hash: 0x362CEDD2A41E0747 | Since: 1232 | API-Set: unknown
 */
export function setDoorsToOpenAtAnyDistance(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorsToOpenAtAnyDistance(_vehicle, toggle);
}

/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * Hash: 0x9666CF20A1C6D780 | Since: 1207 | API-Set: unknown
 */
export function setDoorBroken(vehicle: number | IVehicle, doorId: number, deleteDoor: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorBroken(_vehicle, doorId, deleteDoor);
}

/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * Hash: 0xD57F10EBBA814ECF | Since: 1207 | API-Set: unknown
 */
export function setDoorControl(vehicle: number | IVehicle, doorId: number, speed: number, angle: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorControl(_vehicle, doorId, speed, angle);
}

/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * Hash: 0x06F8A202EB312A3C | Since: 1207 | API-Set: unknown
 */
export function setDoorLatched(vehicle: number | IVehicle, doorId: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorLatched(_vehicle, doorId, false, false, false);
}

/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * Can also be used on trains and its wagons
 * 
 * Hash: 0x550CE392A4672412 | Since: 1207 | API-Set: unknown
 */
export function setDoorOpen(vehicle: number | IVehicle, doorId: number, loose: boolean, openInstantly: boolean): void {
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
 * Hash: 0x6A3C24B91FD0EA09 | Since: 1207 | API-Set: unknown
 */
export function setDoorShut(vehicle: number | IVehicle, doorId: number, closeInstantly: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDoorShut(_vehicle, doorId, closeInstantly);
}

/**
 * No comment provided
 * 
 * Hash: 0x48E4C137A71C2688 | Since: 1207 | API-Set: unknown
 */
export function setEngineCanDegrade(vehicle: number | IVehicle, toggle: boolean): void {
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
 * Hash: 0x8BDC5B998B4654EF | Since: 1207 | API-Set: unknown
 */
export function setEngineHealth(vehicle: number | IVehicle, health: number): void {
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
 * Hash: 0xB64CFA14CB9A2E78 | Since: 1207 | API-Set: unknown
 */
export function setEngineOn(vehicle: number | IVehicle, value: boolean, instantly: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleEngineOn(_vehicle, value, instantly);
}

/**
 * index: 0 - 1
 * 
 * Used to be incorrectly named _SET_VEHICLE_EXCLUSIVE_DRIVER_2
 * 
 * Hash: 0xC6B9BF123B9463B6 | Since: 1207 | API-Set: unknown
 */
export function setExclusiveDriver(vehicle: number | IVehicle, ped: number | IPed, index: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetVehicleExclusiveDriver(_vehicle, _ped, index);
}

/**
 * Sets a vehicle to be strongly resistant to explosions. p0 is the vehicle; set p1 to false to toggle the effect on/off.
 * 
 * Hash: 0xA402939C6761E1A3 | Since: 1207 | API-Set: unknown
 */
export function setExplodesOnHighExplosionDamage(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleExplodesOnHighExplosionDamage(_vehicle, toggle);
}

/**
 * Note: only some vehicle have extras
 * https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_extras.lua
 * 
 * Hash: 0xBB6F89150BC9D16B | Since: 1207 | API-Set: unknown
 */
export function setExtra(vehicle: number | IVehicle, extraId: number, disable: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleExtra(_vehicle, extraId, disable);
}

/**
 * This fixes a vehicle.
 * If the vehicle's engine's broken then you cannot fix it with this native.
 * 
 * Hash: 0x79811282A9D1AE56 | Since: 1207 | API-Set: unknown
 */
export function setFixed(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleFixed(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF9F92AF49F12F6E7 | Since: 1207 | API-Set: unknown
 */
export function setForwardSpeed(vehicle: number | IVehicle, speed: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleForwardSpeed(_vehicle, speed);
}

/**
 * No comment provided
 * 
 * Hash: 0x91BE51AEC4E99710 | Since: 1207 | API-Set: unknown
 */
export function setHandbrake(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHandbrake(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xBB5A3FA8ED3979C5 | Since: 1207 | API-Set: unknown
 */
export function setHasBeenOwnedByPlayer(vehicle: number | IVehicle, owned: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHasBeenOwnedByPlayer(_vehicle, owned);
}

/**
 * if true, axles won't bend.
 * 
 * Hash: 0x252253C8A45AA1FC | Since: 1207 | API-Set: unknown
 */
export function setHasStrongAxles(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHasStrongAxles(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xC903855E028A05F2 | Since: 1207 | API-Set: unknown
 */
export function setHasUnbreakableLights(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleHasUnbreakableLights(_vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x4EA71B4C9DB3C3F1 | Since: 1207 | API-Set: unknown
 */
export function setInactiveDuringPlayback(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleInactiveDuringPlayback(_vehicle, toggle);
}

/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * Hash: 0xA9F1D75195CC40F6 | Since: 1207 | API-Set: unknown
 */
export function setIndividualDoorsLocked(vehicle: number | IVehicle, doorId: number, doorLockStatus: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleIndividualDoorsLocked(_vehicle, doorId, doorLockStatus);
}

/**
 * No comment provided
 * 
 * Hash: 0xC1842F40FD501DA2 | Since: 1207 | API-Set: unknown
 */
export function setInfluencesWantedLevel(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleInfluencesWantedLevel(_vehicle, toggle);
}

/**
 * Setting this to false, makes the specified vehicle to where if you press Y your character doesn't even attempt the animation to enter the vehicle. Hence it's not considered aka ignored.
 * 
 * Hash: 0x54800D386C5825E5 | Since: 1207 | API-Set: unknown
 */
export function setIsConsideredByPlayer(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleIsConsideredByPlayer(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x6C32FC81DFF25C9A | Since: 1207 | API-Set: unknown
 */
export function setIsStolen(vehicle: number | IVehicle, isStolen: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleIsStolen(_vehicle, isStolen);
}

/**
 * No comment provided
 * 
 * Hash: 0x1549BA7FE83A2383 | Since: 1207 | API-Set: unknown
 */
export function setKeepEngineOnWhenAbandoned(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleKeepEngineOnWhenAbandoned(_vehicle, toggle);
}

/**
 * Sets the vehicle's lights state.
 * 
 * Hash: 0x629F0A0E952CAE7D | Since: 1207 | API-Set: unknown
 */
export function setLights(vehicle: number | IVehicle, state: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleLights(_vehicle, state);
}

/**
 * _SET_VEHICLE_LI*
 * 
 * Hash: 0x8F75941C86EEBFCA | Since: 1207 | API-Set: unknown
 */
export function setLimitSpeedWhenPlayerInactive(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleLimitSpeedWhenPlayerInactive(_vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x5F5E2B1B9EAECC0F | Since: 1207 | API-Set: unknown
 */
export function setLodMultiplier(vehicle: number | IVehicle, multiplier: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleLodMultiplier(_vehicle, multiplier);
}

/**
 * No comment provided
 * 
 * Hash: 0x7549B9E841940695 | Since: 1207 | API-Set: unknown
 */
export function setMayBeUsedByGotoPointAnyMeans(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleMayBeUsedByGotoPointAnyMeans(_vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x09C970AE59ABF6B2 | Since: 1207 | API-Set: unknown
 */
export function setNotStealableAmbiently(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleNotStealableAmbiently(_vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x7263332501E07F52 | Since: 1207 | API-Set: unknown
 */
export function setOnGroundProperly(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return SetVehicleOnGroundProperly(_vehicle, false);
}

/**
 * 1000 is max health
 * 
 * Hash: 0x6AB2918EE3BEC94C | Since: 1207 | API-Set: unknown
 */
export function setPetrolTankHealth(vehicle: number | IVehicle, health: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehiclePetrolTankHealth(_vehicle, health);
}

/**
 * No comment provided
 * 
 * Hash: 0x652712478F1721F4 | Since: 1207 | API-Set: unknown
 */
export function setProvidesCover(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleProvidesCover(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x33992A808DF1C1BA | Since: 1207 | API-Set: unknown
 */
export function setRespectsLocksWhenHasDriver(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleRespectsLocksWhenHasDriver(_vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xB79BE78C665B3E6D | Since: 1207 | API-Set: unknown
 */
export function setShootAtTarget(): void {
    SetVehicleShootAtTarget(undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x23A3AB86E0807721 | Since: 1207 | API-Set: unknown
 */
export function setStaysFrozenWhenCleanedUp(vehicle: number | IVehicle, toggle: boolean): void {
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
 * Hash: 0x84DAAE11E9EE4FC3 | Since: 1207 | API-Set: unknown
 */
export function setSteerBias(vehicle: number | IVehicle, value: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleSteerBias(_vehicle, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xC84E138448507567 | Since: 1207 | API-Set: unknown
 */
export function setStopInstantlyWhenPlayerInactive(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleStopInstantlyWhenPlayerInactive(_vehicle, false);
}

/**
 * If set to true, vehicle will not take crash damage, but is still susceptible to damage from bullets and explosives
 * 
 * Hash: 0xAB315515C9F8803D | Since: 1207 | API-Set: unknown
 */
export function setStrong(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleStrong(_vehicle, toggle);
}

/**
 * Allows you to toggle bulletproof tires.
 * 
 * Hash: 0xEBD0A4E935106FE5 | Since: 1207 | API-Set: unknown
 */
export function setTyresCanBurst(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleTyresCanBurst(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x6E884BAB713A2A94 | Since: 1207 | API-Set: unknown
 */
export function setUndriveable(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleUndriveable(_vehicle, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x839137C40275FB77 | Since: 1207 | API-Set: unknown
 */
export function setWheelsCanBreak(vehicle: number | IVehicle, enabled: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelsCanBreak(_vehicle, enabled);
}

/**
 * No comment provided
 * 
 * Hash: 0xC462C79379ABBCB1 | Since: 1207 | API-Set: unknown
 */
export function setWheelsCanBreakOffWhenBlowUp(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWheelsCanBreakOffWhenBlowUp(_vehicle, toggle);
}

/**
 * SET_TIME_POSITION_IN_RECORDING can be emulated by: desired_time - GET_TIME_POSITION_IN_RECORDING(vehicle)
 * 
 * Hash: 0x5F5E6379C59EFC56 | Since: 1207 | API-Set: unknown
 */
export function skipTimeInPlaybackRecorded(vehicle: number | IVehicle, time: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SkipTimeInPlaybackRecordedVehicle(_vehicle, time);
}

/**
 * `p3 is some flag related to 'trailers' (invokes CVehicle::GetTrailer).`
 * 
 * See REQUEST_VEHICLE_RECORDING
 * 
 * Hash: 0x4932B84E3276508E | Since: 1207 | API-Set: unknown
 */
export function startPlaybackRecorded(vehicle: number | IVehicle, recording: number): string {
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
 * Hash: 0xB4E3BFC39CA16057 | Since: 1207 | API-Set: unknown
 */
export function startHorn(vehicle: number | IVehicle, duration: number, mode: number | string, forever: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    if (typeof mode === 'string') mode = GetHashKey(mode)
    StartVehicleHorn(_vehicle, duration, mode, forever);
}

/**
 * Old name: _STOP_BRING_VEHICLE_TO_HALT
 * 
 * Hash: 0x7C06330BFDDA182E | Since: 1207 | API-Set: unknown
 */
export function stopBringingToHalt(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    StopBringingVehicleToHalt(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF9B4D6267E8C26D | Since: 1207 | API-Set: unknown
 */
export function stopPlaybackRecorded(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    StopPlaybackRecordedVehicle(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1F3969B140DEE157 | Since: 1207 | API-Set: unknown
 */
export function trackVisibility(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TrackVehicleVisibility(_vehicle);
}

/**
 * Only used in SP Scripts.
 * Related to Vehicle Speed.
 * 
 * Hash: 0x012701ED938B85DE | Since: 1207 | API-Set: unknown
 */
export function _0x012701ED938B85DE(): void {
    Citizen.invokeNative('0x012701ED938B85DE', 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x0355FE37240E2C77 | Since: 1207 | API-Set: unknown
 */
export function _0x0355FE37240E2C77(): void {
    Citizen.invokeNative('0x0355FE37240E2C77', undefined, undefined);
}

/**
 * _SET_VEHICLE_*
 * 
 * Hash: 0x04F0579DBDD32F34 | Since: 1207 | API-Set: unknown
 */
export function _0x04F0579DBDD32F34(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x04F0579DBDD32F34', _vehicle);
}

/**
 * Takes value returned from 0x45853F4E17D847D5
 * 
 * Hash: 0x0516FAE561276EFC | Since: 1207 | API-Set: unknown
 */
export function _0x0516FAE561276EFC(trackIndex: number): boolean {
    return Citizen.invokeNative('0x0516FAE561276EFC', trackIndex);
}

/**
 * _SET_TRAIN_*
 * 
 * Hash: 0x06A09A6E0C6D2A84 | Since: 1207 | API-Set: unknown
 */
export function _0x06A09A6E0C6D2A84(train: number | IVehicle): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0x06A09A6E0C6D2A84', _train, false);
}

/**
 * _SET_VEHICLE_S*
 * 
 * Hash: 0x0794199B25E499E1 | Since: 1207 | API-Set: unknown
 */
export function _0x0794199B25E499E1(wagon: number | IVehicle): void {
    const _wagon = wagon instanceof IVehicle ? wagon.handle() : wagon;
    Citizen.invokeNative('0x0794199B25E499E1', _wagon, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x0CD7914D17A970AB | Since: 1207 | API-Set: unknown
 */
export function _0x0CD7914D17A970AB(): void {
    Citizen.invokeNative('0x0CD7914D17A970AB', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0D5FDF0D36FA10CD | Since: 1207 | API-Set: unknown
 */
export function _0x0D5FDF0D36FA10CD(trackIndex: number): void {
    Citizen.invokeNative('0x0D5FDF0D36FA10CD', trackIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x0F7F603BDE08C4D3 | Since: 1207 | API-Set: unknown
 */
export function _0x0F7F603BDE08C4D3(): void {
    Citizen.invokeNative('0x0F7F603BDE08C4D3', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0FDDEE66E3465726 | Since: 1207 | API-Set: unknown
 */
export function _0x0FDDEE66E3465726(): any {
    return Citizen.invokeNative('0x0FDDEE66E3465726', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x104D9A7B1C0D0783 | Since: 1207 | API-Set: unknown
 */
export function _0x104D9A7B1C0D0783(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x104D9A7B1C0D0783', _vehicle, 0);
}

/**
 * Returns p1 for 0xBA958F68031DDBFC (stationIndex)
 * _GET_N* (NEAREST_STATION_FOR_TRAIN?)
 * 
 * Hash: 0x1180A2974D251B7B | Since: 1207 | API-Set: unknown
 */
export function _0x1180A2974D251B7B(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return Citizen.invokeNative('0x1180A2974D251B7B', _train);
}

/**
 * Params: coords = GET_ENTITY_VELOCITY
 * _SET_VELOCITY*
 * 
 * Hash: 0x12F6C6ED3EFF42DE | Since: 1207 | API-Set: unknown
 */
export function _0x12F6C6ED3EFF42DE(vehicle: number | IVehicle, pos: Vector3): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x12F6C6ED3EFF42DE', _vehicle, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x13EB275BF81636D1 | Since: 1207 | API-Set: unknown
 */
export function _0x13EB275BF81636D1(): void {
    Citizen.invokeNative('0x13EB275BF81636D1', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x14DA8C4BC2CCD90A | Since: 1207 | API-Set: unknown
 */
export function _0x14DA8C4BC2CCD90A(): any {
    return Citizen.invokeNative('0x14DA8C4BC2CCD90A', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x15206E88FF7617DF | Since: 1207 | API-Set: unknown
 */
export function _0x15206E88FF7617DF(trackIndex: number): void {
    Citizen.invokeNative('0x15206E88FF7617DF', trackIndex, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x15CC8C33D7FFCC4A | Since: 1436 | API-Set: unknown
 */
export function _0x15CC8C33D7FFCC4A(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x15CC8C33D7FFCC4A', _vehicle, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x160C1B5AB48AB87C | Since: 1207 | API-Set: unknown
 */
export function _0x160C1B5AB48AB87C(train: number | IVehicle): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0x160C1B5AB48AB87C', _train, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x165BE2001E5E4B75 | Since: 1207 | API-Set: unknown
 */
export function _0x165BE2001E5E4B75(): void {
    Citizen.invokeNative('0x165BE2001E5E4B75', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x16B86A49E072AA85 | Since: 1207 | API-Set: unknown
 */
export function _0x16B86A49E072AA85(): void {
    Citizen.invokeNative('0x16B86A49E072AA85');
}

/**
 * No comment provided
 * 
 * Hash: 0x172E9DD35858DCD7 | Since: 1207 | API-Set: unknown
 */
export function _0x172E9DD35858DCD7(): void {
    Citizen.invokeNative('0x172E9DD35858DCD7', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1A861F899EBBE17C | Since: 1207 | API-Set: unknown
 */
export function _0x1A861F899EBBE17C(train: number | IVehicle): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0x1A861F899EBBE17C', _train, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x2045429505158D1A | Since: 1207 | API-Set: unknown
 */
export function _0x2045429505158D1A(): any {
    return Citizen.invokeNative('0x2045429505158D1A', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2200AB13CBD10F4E | Since: 1207 | API-Set: unknown
 */
export function _0x2200AB13CBD10F4E(vehicle: number | IVehicle, pos: Vector3): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x2200AB13CBD10F4E', _vehicle, pos.x, pos.y, pos.z, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x23F66C36F8E5EAAB | Since: 1207 | API-Set: unknown
 */
export function _0x23F66C36F8E5EAAB(): void {
    Citizen.invokeNative('0x23F66C36F8E5EAAB', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x27E3F2B57209FA54 | Since: 1207 | API-Set: unknown
 */
export function _0x27E3F2B57209FA54(): void {
    Citizen.invokeNative('0x27E3F2B57209FA54', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2A7413168F6CD5A8 | Since: 1207 | API-Set: unknown
 */
export function _0x2A7413168F6CD5A8(): void {
    Citizen.invokeNative('0x2A7413168F6CD5A8');
}

/**
 * No comment provided
 * 
 * Hash: 0x2BB2B5BCF0DF8008 | Since: 1207 | API-Set: unknown
 */
export function _0x2BB2B5BCF0DF8008(): void {
    Citizen.invokeNative('0x2BB2B5BCF0DF8008', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2C46D2A591D8C322 | Since: 1207 | API-Set: unknown
 */
export function _0x2C46D2A591D8C322(): any {
    return Citizen.invokeNative('0x2C46D2A591D8C322', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3053064F909B5F42 | Since: 1207 | API-Set: unknown
 */
export function _0x3053064F909B5F42(): void {
    Citizen.invokeNative('0x3053064F909B5F42', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3137EDC899E6DAE4 | Since: 1355 | API-Set: unknown
 */
export function _0x3137EDC899E6DAE4(): void {
    Citizen.invokeNative('0x3137EDC899E6DAE4', undefined, undefined);
}

/**
 * Returns trackIndex
 * 
 * Hash: 0x331CBD247FC5DAA8 | Since: 1207 | API-Set: unknown
 */
export function _0x331CBD247FC5DAA8(configHash: number | string, pos: Vector3, direction: boolean): number {
    if (typeof configHash === 'string') configHash = GetHashKey(configHash)
    return Citizen.invokeNative('0x331CBD247FC5DAA8', configHash, pos.x, pos.y, pos.z, direction, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x34BCF6209B9668A7 | Since: 1207 | API-Set: unknown
 */
export function _0x34BCF6209B9668A7(trackIndex: number): void {
    Citizen.invokeNative('0x34BCF6209B9668A7', trackIndex, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x37D238BE69F7378A | Since: 1207 | API-Set: unknown
 */
export function _0x37D238BE69F7378A(trackIndex: number): boolean {
    return Citizen.invokeNative('0x37D238BE69F7378A', trackIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x38E7DD70A242D5CB | Since: 1207 | API-Set: unknown
 */
export function _0x38E7DD70A242D5CB(trackIndex: number): void {
    Citizen.invokeNative('0x38E7DD70A242D5CB', trackIndex, 0);
}

/**
 * Called together with 0xE6C5E2125EB210C1 in R* Script medium_update
 * 
 * Hash: 0x3ABFA128F5BF5A70 | Since: 1207 | API-Set: unknown
 */
export function _0x3ABFA128F5BF5A70(trainTrack: number | string, junctionIndex: number, enabled: boolean): void {
    if (typeof trainTrack === 'string') trainTrack = GetHashKey(trainTrack)
    Citizen.invokeNative('0x3ABFA128F5BF5A70', trainTrack, junctionIndex, enabled);
}

/**
 * No comment provided
 * 
 * Hash: 0x3D86997A86FEEF0D | Since: 1207 | API-Set: unknown
 */
export function _0x3D86997A86FEEF0D(): void {
    Citizen.invokeNative('0x3D86997A86FEEF0D', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x41365DB586CD9E8E | Since: 1207 | API-Set: unknown
 */
export function _0x41365DB586CD9E8E(trackIndex: number): void {
    Citizen.invokeNative('0x41365DB586CD9E8E', trackIndex, 0);
}

/**
 * _H*
 * 
 * Hash: 0x41F0B254DDF71473 | Since: 1207 | API-Set: unknown
 */
export function _0x41F0B254DDF71473(wagon: number | IVehicle): void {
    const _wagon = wagon instanceof IVehicle ? wagon.handle() : wagon;
    Citizen.invokeNative('0x41F0B254DDF71473', _wagon);
}

/**
 * No comment provided
 * 
 * Hash: 0x427C919E9809E370 | Since: 1207 | API-Set: unknown
 */
export function _0x427C919E9809E370(trackIndex: number): void {
    Citizen.invokeNative('0x427C919E9809E370', trackIndex, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x485B05EF05B9AEE9 | Since: 1207 | API-Set: unknown
 */
export function _0x485B05EF05B9AEE9(): void {
    Citizen.invokeNative('0x485B05EF05B9AEE9', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4C05B42A8D937796 | Since: 1207 | API-Set: unknown
 */
export function _0x4C05B42A8D937796(): void {
    Citizen.invokeNative('0x4C05B42A8D937796');
}

/**
 * Params: p1 usually true in R* Scripts
 * _SET_DRAFT_VEHICLE_*
 * 
 * Hash: 0x4C60C333F9CCA2B6 | Since: 1207 | API-Set: unknown
 */
export function _0x4C60C333F9CCA2B6(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x4C60C333F9CCA2B6', _vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x51C7694E140FAE43 | Since: 1207 | API-Set: unknown
 */
export function _0x51C7694E140FAE43(): any {
    return Citizen.invokeNative('0x51C7694E140FAE43', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5AADC7BBBB1BCEEB | Since: 1207 | API-Set: unknown
 */
export function _0x5AADC7BBBB1BCEEB(): void {
    Citizen.invokeNative('0x5AADC7BBBB1BCEEB', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x615B3B8E73634509 | Since: 1207 | API-Set: unknown
 */
export function _0x615B3B8E73634509(trackIndex: number): void {
    Citizen.invokeNative('0x615B3B8E73634509', trackIndex, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x63509DDF102E08E8 | Since: 1207 | API-Set: unknown
 */
export function _0x63509DDF102E08E8(trackIndex: number): void {
    Citizen.invokeNative('0x63509DDF102E08E8', trackIndex, 0);
}

/**
 * Only used in R* Script beat_train_holdup: p1 = 1
 * 
 * Hash: 0x6355602C02EDC6DF | Since: 1207 | API-Set: unknown
 */
export function _0x6355602C02EDC6DF(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x6355602C02EDC6DF', _entity, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6703872EC09BC158 | Since: 1207 | API-Set: unknown
 */
export function _0x6703872EC09BC158(): void {
    Citizen.invokeNative('0x6703872EC09BC158', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6835AFEA10E186F4 | Since: 1207 | API-Set: unknown
 */
export function _0x6835AFEA10E186F4(): void {
    Citizen.invokeNative('0x6835AFEA10E186F4', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x68830738A6BFB370 | Since: 1207 | API-Set: unknown
 */
export function _0x68830738A6BFB370(): void {
    Citizen.invokeNative('0x68830738A6BFB370', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x697DF68F3A761A50 | Since: 1207 | API-Set: unknown
 */
export function _0x697DF68F3A761A50(): void {
    Citizen.invokeNative('0x697DF68F3A761A50', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6B34BE961F639E21 | Since: 1207 | API-Set: unknown
 */
export function _0x6B34BE961F639E21(trackIndex: number): void {
    Citizen.invokeNative('0x6B34BE961F639E21', trackIndex, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x6B53F4B811E583D2 | Since: 1207 | API-Set: unknown
 */
export function _0x6B53F4B811E583D2(vehicle: number | IVehicle, toggle: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x6B53F4B811E583D2', _vehicle, toggle);
}

/**
 * Returns trackIndex
 * 
 * Hash: 0x6C87F49BFA181DB5 | Since: 1207 | API-Set: unknown
 */
export function _0x6C87F49BFA181DB5(pos: Vector3): number {
    return Citizen.invokeNative('0x6C87F49BFA181DB5', pos.x, pos.y, pos.z);
}

/**
 * _SET_INSTANTLY_* - _SET_MISSION_TRAIN*
 * 
 * Hash: 0x6DE072AC8A95FFC1 | Since: 1207 | API-Set: unknown
 */
export function _0x6DE072AC8A95FFC1(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x6DE072AC8A95FFC1', _vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x6EA1273D525427F4 | Since: 1207 | API-Set: unknown
 */
export function _0x6EA1273D525427F4(): void {
    Citizen.invokeNative('0x6EA1273D525427F4', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6FD7BDF10304363A | Since: 1207 | API-Set: unknown
 */
export function _0x6FD7BDF10304363A(): void {
    Citizen.invokeNative('0x6FD7BDF10304363A', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x703D4FB366DA4452 | Since: 1207 | API-Set: unknown
 */
export function _0x703D4FB366DA4452(): void {
    Citizen.invokeNative('0x703D4FB366DA4452', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x718EB706B6E998A0 | Since: 1207 | API-Set: unknown
 */
export function _0x718EB706B6E998A0(trackIndex: number): void {
    Citizen.invokeNative('0x718EB706B6E998A0', trackIndex);
}

/**
 * _SET_VEHICLE_WHEELS_*
 * 
 * Hash: 0x73118A3EE9C9B6DB | Since: 1207 | API-Set: unknown
 */
export function _0x73118A3EE9C9B6DB(wagon: number | IVehicle): void {
    const _wagon = wagon instanceof IVehicle ? wagon.handle() : wagon;
    Citizen.invokeNative('0x73118A3EE9C9B6DB', _wagon, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x7408B5C66BA31ADB | Since: 1207 | API-Set: unknown
 */
export function _0x7408B5C66BA31ADB(): void {
    Citizen.invokeNative('0x7408B5C66BA31ADB', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x750D42C013F64AE7 | Since: 1207 | API-Set: unknown
 */
export function _0x750D42C013F64AE7(): void {
    Citizen.invokeNative('0x750D42C013F64AE7', undefined, undefined);
}

/**
 * Seems to be related while setting a (door) state of specific trains (midlandboxcar05x, privateboxcar01x, privateboxcar02x, midlandrefrigeratorCar, privateArmoured, armoredCar01x)
 * 
 * Hash: 0x762FDC4C19E5A981 | Since: 1207 | API-Set: unknown
 */
export function _0x762FDC4C19E5A981(trainCarriage: number | IEntity): void {
    const _trainCarriage = trainCarriage instanceof IEntity ? trainCarriage.handle() : trainCarriage;
    Citizen.invokeNative('0x762FDC4C19E5A981', _trainCarriage, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x7840576C50A13DBA | Since: 1207 | API-Set: unknown
 */
export function _0x7840576C50A13DBA(train: number | IVehicle): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0x7840576C50A13DBA', _train, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x7BE0746539DEF0C8 | Since: 1207 | API-Set: unknown
 */
export function _0x7BE0746539DEF0C8(): any {
    return Citizen.invokeNative('0x7BE0746539DEF0C8', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8379E05871AD24E0 | Since: 1207 | API-Set: unknown
 */
export function _0x8379E05871AD24E0(): void {
    Citizen.invokeNative('0x8379E05871AD24E0');
}

/**
 * No comment provided
 * 
 * Hash: 0x850CE59DEC2028F3 | Since: 1207 | API-Set: unknown
 */
export function _0x850CE59DEC2028F3(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x850CE59DEC2028F3', _vehicle, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x873AAF600CC36DAC | Since: 1207 | API-Set: unknown
 */
export function _0x873AAF600CC36DAC(): void {
    Citizen.invokeNative('0x873AAF600CC36DAC', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x877EA24EB1614495 | Since: 1207 | API-Set: unknown
 */
export function _0x877EA24EB1614495(): any {
    return Citizen.invokeNative('0x877EA24EB1614495', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x87B974E54C71BA7B | Since: 1207 | API-Set: unknown
 */
export function _0x87B974E54C71BA7B(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x87B974E54C71BA7B', _vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x8878FF3EEE2868A9 | Since: 1207 | API-Set: unknown
 */
export function _0x8878FF3EEE2868A9(): void {
    Citizen.invokeNative('0x8878FF3EEE2868A9', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8DECD262602548B9 | Since: 1207 | API-Set: unknown
 */
export function _0x8DECD262602548B9(): void {
    Citizen.invokeNative('0x8DECD262602548B9', undefined, undefined);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x9868C0D0134855F7 | Since: 1207 | API-Set: unknown
 */
export function _0x9868C0D0134855F7(): void {
    Citizen.invokeNative('0x9868C0D0134855F7', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x98A7598C579EE871 | Since: 1207 | API-Set: unknown
 */
export function _0x98A7598C579EE871(): void {
    Citizen.invokeNative('0x98A7598C579EE871', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9D12796EF4BF9EA9 | Since: 1207 | API-Set: unknown
 */
export function _0x9D12796EF4BF9EA9(): void {
    Citizen.invokeNative('0x9D12796EF4BF9EA9', undefined);
}

/**
 * Forcing high LOD buoyancy for vehicle: p1 = false
 * _SET_A*
 * 
 * Hash: 0x9E8711C81AA17876 | Since: 1207 | API-Set: unknown
 */
export function _0x9E8711C81AA17876(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0x9E8711C81AA17876', _vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xA13028E22564A1BD | Since: 1207 | API-Set: unknown
 */
export function _0xA13028E22564A1BD(): void {
    Citizen.invokeNative('0xA13028E22564A1BD', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA230A5DDE12ED374 | Since: 1207 | API-Set: unknown
 */
export function _0xA230A5DDE12ED374(): void {
    Citizen.invokeNative('0xA230A5DDE12ED374', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA72B1BF3857B94D7 | Since: 1207 | API-Set: unknown
 */
export function _0xA72B1BF3857B94D7(train: number | IVehicle): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0xA72B1BF3857B94D7', _train, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xA7966807953A18EE | Since: 1207 | API-Set: unknown
 */
export function _0xA7966807953A18EE(trackIndex: number): void {
    Citizen.invokeNative('0xA7966807953A18EE', trackIndex, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xA9E185D498B9AC67 | Since: 1207 | API-Set: unknown
 */
export function _0xA9E185D498B9AC67(): any {
    return Citizen.invokeNative('0xA9E185D498B9AC67', undefined, undefined);
}

/**
 * _SET_TRAIN_*
 * 
 * Hash: 0xAE7E66A61E7C17A5 | Since: 1207 | API-Set: unknown
 */
export function _0xAE7E66A61E7C17A5(train: number | IVehicle): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0xAE7E66A61E7C17A5', _train, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xB4241AD8F5AEE9ED | Since: 1207 | API-Set: unknown
 */
export function _0xB4241AD8F5AEE9ED(trackIndex: number): boolean {
    return Citizen.invokeNative('0xB4241AD8F5AEE9ED', trackIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xB42C87521D1BDD2F | Since: 1207 | API-Set: unknown
 */
export function _0xB42C87521D1BDD2F(vehicle: number | IVehicle, pos: Vector3): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xB42C87521D1BDD2F', _vehicle, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xB961DD799A837BD7 | Since: 1207 | API-Set: unknown
 */
export function _0xB961DD799A837BD7(): void {
    Citizen.invokeNative('0xB961DD799A837BD7');
}

/**
 * Used in Script Function MC_LOCAL_SETUP_VEH - enabling transitions
 * 
 * Hash: 0xC325A6BAA62CF8A2 | Since: 1207 | API-Set: unknown
 */
export function _0xC325A6BAA62CF8A2(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xC325A6BAA62CF8A2', _vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC351394B932A6A50 | Since: 1207 | API-Set: unknown
 */
export function _0xC351394B932A6A50(): void {
    Citizen.invokeNative('0xC351394B932A6A50', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC399CC89FBA05DA0 | Since: 1207 | API-Set: unknown
 */
export function _0xC399CC89FBA05DA0(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xC399CC89FBA05DA0', _vehicle, false);
}

/**
 * _SET_DRAFT_VEHICLE_(STOP?)*
 * 
 * Hash: 0xC4A2C11FC0D41916 | Since: 1207 | API-Set: unknown
 */
export function _0xC4A2C11FC0D41916(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xC4A2C11FC0D41916', _vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xCACAB2B123BBDBD6 | Since: 1207 | API-Set: unknown
 */
export function _0xCACAB2B123BBDBD6(): any {
    return Citizen.invokeNative('0xCACAB2B123BBDBD6', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCAFF2C9747103C02 | Since: 1207 | API-Set: unknown
 */
export function _0xCAFF2C9747103C02(): any {
    return Citizen.invokeNative('0xCAFF2C9747103C02', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCBC7B6F9A56B79F6 | Since: 1207 | API-Set: unknown
 */
export function _0xCBC7B6F9A56B79F6(): void {
    Citizen.invokeNative('0xCBC7B6F9A56B79F6', undefined, undefined);
}

/**
 * Used in Script Function MC_LOCAL_SETUP_VEH - enabling transitions
 * 
 * Hash: 0xCBF88256E44D5D39 | Since: 1207 | API-Set: unknown
 */
export function _0xCBF88256E44D5D39(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xCBF88256E44D5D39', _vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xCEB1F1EED484A5B4 | Since: 1207 | API-Set: unknown
 */
export function _0xCEB1F1EED484A5B4(): void {
    Citizen.invokeNative('0xCEB1F1EED484A5B4', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCF342503CA4C8DF1 | Since: 1207 | API-Set: unknown
 */
export function _0xCF342503CA4C8DF1(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xCF342503CA4C8DF1', _vehicle, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD0116DF21E6C7B36 | Since: 1207 | API-Set: unknown
 */
export function _0xD0116DF21E6C7B36(): any {
    return Citizen.invokeNative('0xD0116DF21E6C7B36', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD0AABE5B9F8FA589 | Since: 1207 | API-Set: unknown
 */
export function _0xD0AABE5B9F8FA589(trackIndex: number): void {
    Citizen.invokeNative('0xD0AABE5B9F8FA589', trackIndex, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD0BA1853D76683C8 | Since: 1207 | API-Set: unknown
 */
export function _0xD0BA1853D76683C8(trackIndex: number, pos: Vector3): void {
    Citizen.invokeNative('0xD0BA1853D76683C8', trackIndex, pos.x, pos.y, pos.z, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1DF5E54F4ACBE1A | Since: 1207 | API-Set: unknown
 */
export function _0xD1DF5E54F4ACBE1A(): any {
    return Citizen.invokeNative('0xD1DF5E54F4ACBE1A', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD21A3D421E7F09F7 | Since: 1207 | API-Set: unknown
 */
export function _0xD21A3D421E7F09F7(): void {
    Citizen.invokeNative('0xD21A3D421E7F09F7', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD4907EF4334C7602 | Since: 1207 | API-Set: unknown
 */
export function _0xD4907EF4334C7602(): void {
    Citizen.invokeNative('0xD4907EF4334C7602', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD826690B5CF3BEFF | Since: 1207 | API-Set: unknown
 */
export function _0xD826690B5CF3BEFF(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xD826690B5CF3BEFF', _vehicle, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD9BF3ED8EFB67EA3 | Since: 1207 | API-Set: unknown
 */
export function _0xD9BF3ED8EFB67EA3(): any {
    return Citizen.invokeNative('0xD9BF3ED8EFB67EA3', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDC0556D0F484ECAA | Since: 1207 | API-Set: unknown
 */
export function _0xDC0556D0F484ECAA(): void {
    Citizen.invokeNative('0xDC0556D0F484ECAA', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDC69F6913CCA0B99 | Since: 1207 | API-Set: unknown
 */
export function _0xDC69F6913CCA0B99(): void {
    Citizen.invokeNative('0xDC69F6913CCA0B99', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDD100CE1EBBF37E3 | Since: 1207 | API-Set: unknown
 */
export function _0xDD100CE1EBBF37E3(): void {
    Citizen.invokeNative('0xDD100CE1EBBF37E3', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDE8C5B9F65017FA1 | Since: 1207 | API-Set: unknown
 */
export function _0xDE8C5B9F65017FA1(train: number | IVehicle): any {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return Citizen.invokeNative('0xDE8C5B9F65017FA1', _train);
}

/**
 * No comment provided
 * 
 * Hash: 0xE12F5ED49F44D40D | Since: 1207 | API-Set: unknown
 */
export function _0xE12F5ED49F44D40D(): void {
    Citizen.invokeNative('0xE12F5ED49F44D40D', undefined);
}

/**
 * Only used in R* SP Script rcm_abigail31: p1 = 5
 * _GET_VEHICLE_T* - _GET_VO*
 * 
 * Hash: 0xE1C0F8781BF130C2 | Since: 1207 | API-Set: unknown
 */
export function _0xE1C0F8781BF130C2(wagon: number | IVehicle): boolean {
    const _wagon = wagon instanceof IVehicle ? wagon.handle() : wagon;
    return Citizen.invokeNative('0xE1C0F8781BF130C2', _wagon, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xE682002DB1F30669 | Since: 1207 | API-Set: unknown
 */
export function _0xE682002DB1F30669(): void {
    Citizen.invokeNative('0xE682002DB1F30669', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE6BD7DD3FD474415 | Since: 1207 | API-Set: unknown
 */
export function _0xE6BD7DD3FD474415(train: number | IVehicle): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0xE6BD7DD3FD474415', _train, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xE777DDF3E78397E8 | Since: 1207 | API-Set: unknown
 */
export function _0xE777DDF3E78397E8(): any {
    return Citizen.invokeNative('0xE777DDF3E78397E8', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE78993FF9022C064 | Since: 1207 | API-Set: unknown
 */
export function _0xE78993FF9022C064(): void {
    Citizen.invokeNative('0xE78993FF9022C064', undefined);
}

/**
 * _SET_TRAIN_*
 * 
 * Hash: 0xEF28A614B4B264B8 | Since: 1207 | API-Set: unknown
 */
export function _0xEF28A614B4B264B8(train: number | IVehicle): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0xEF28A614B4B264B8', _train, false);
}

/**
 * _IS_* (related to CREATE_MISSION_TRAIN)
 * 
 * Hash: 0xF05DFAF1ADFEF2CD | Since: 1207 | API-Set: unknown
 */
export function _0xF05DFAF1ADFEF2CD(trainConfig: number | string, pos: Vector3, direction: boolean): boolean {
    if (typeof trainConfig === 'string') trainConfig = GetHashKey(trainConfig)
    return Citizen.invokeNative('0xF05DFAF1ADFEF2CD', trainConfig, pos.x, pos.y, pos.z, direction, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xF57DB8E83DCD8349 | Since: 1207 | API-Set: unknown
 */
export function _0xF57DB8E83DCD8349(): any {
    return Citizen.invokeNative('0xF57DB8E83DCD8349', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF5EA41C1408695FB | Since: 1207 | API-Set: unknown
 */
export function _0xF5EA41C1408695FB(): any {
    return Citizen.invokeNative('0xF5EA41C1408695FB', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF6E3D38869D0F7AD | Since: 1207 | API-Set: unknown
 */
export function _0xF6E3D38869D0F7AD(): void {
    Citizen.invokeNative('0xF6E3D38869D0F7AD', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF8F7DA13CFBD4532 | Since: 1207 | API-Set: unknown
 */
export function _0xF8F7DA13CFBD4532(trackIndex: number): void {
    Citizen.invokeNative('0xF8F7DA13CFBD4532', trackIndex, false);
}

/**
 * _SET_DRAFT_VEHICLE_*
 * 
 * Hash: 0xFC4F15A7DDDC47B1 | Since: 1207 | API-Set: unknown
 */
export function _0xFC4F15A7DDDC47B1(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xFC4F15A7DDDC47B1', _vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xFF2B1F59FB892F14 | Since: 1207 | API-Set: unknown
 */
export function _0xFF2B1F59FB892F14(): void {
    Citizen.invokeNative('0xFF2B1F59FB892F14', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFFFE15B433300B8C | Since: 1207 | API-Set: unknown
 */
export function _0xFFFE15B433300B8C(): void {
    Citizen.invokeNative('0xFFFE15B433300B8C', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x41503629D1139ABC | Since: 1207 | API-Set: unknown
 */
export function addTrainTemporaryStop(train: number | IVehicle, trackIndex: number, pos: Vector3): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    AddTrainTemporaryStop(_train, trackIndex, pos.x, pos.y, pos.z);
}

/**
 * returns true if any wheel is destroyed/detached
 * 
 * Hash: 0x18714953CCED17D3 | Since: 1207 | API-Set: unknown
 */
export function areAnyWheelsDestroyed(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0x18714953CCED17D3', _vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x316CDB5B6E8F4110 | Since: 1207 | API-Set: unknown
 */
export function attachDraftHarnessPed(mount: number | IPed, draft: number | IVehicle, harnessId: number): boolean {
    const _mount = mount instanceof IPed ? mount.handle() : mount;
    const _draft = draft instanceof IVehicle ? draft.handle() : draft;
    return AttachDraftVehicleHarnessPed(_mount, _draft, harnessId);
}

/**
 * Params: destroyingForce is usually 100f in R* Scripts
 * Similar to 0xD4F5EFB55769D272, _A*
 * 
 * Hash: 0xC372B6A88F6E4AD8 | Since: 1207 | API-Set: unknown
 */
export function breakOffDraftWheel(vehicle: number | IVehicle, wheelIndex: number, destroyingForce: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    BreakOffDraftWheel(_vehicle, wheelIndex, destroyingForce);
}

/**
 * wheelIndex 0: left, wheelIndex 1: right, 4 & 5: unknown
 * 
 * Hash: 0xD4F5EFB55769D272 | Since: 1207 | API-Set: unknown
 */
export function breakOffWheel(vehicle: number | IVehicle, wheelIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return BreakOffVehicleWheel(_vehicle, wheelIndex);
}

/**
 * Only used to break draft vehicle log straps. Coords is always equal to the vehicle coords.
 * 
 * Hash: 0xD1EFA8D68BF5D63D | Since: 1207 | API-Set: unknown
 */
export function breakStraps(vehicle: number | IVehicle, pos: Vector3): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xD1EFA8D68BF5D63D', _vehicle, pos.x, pos.y, pos.z);
}

/**
 * Identical to CREATE_VEHICLE but allows to set draftAnimalPopGroup (see popgroups.#mt for DRAFT_HORSES_*)
 * 
 * Hash: 0x214651FB1DFEBA89 | Since: 1207 | API-Set: unknown
 */
export function createDraft(modelHash: number | string, pos: Vector3, heading: number, isNetwork: boolean, bScriptHostVeh: boolean, bDontAutoCreateDraftAnimals: boolean, draftAnimalPopGroup: number | string): number {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    if (typeof draftAnimalPopGroup === 'string') draftAnimalPopGroup = GetHashKey(draftAnimalPopGroup)
    return CreateDraftVehicle(modelHash, pos.x, pos.y, pos.z, heading, isNetwork, bScriptHostVeh, bDontAutoCreateDraftAnimals, draftAnimalPopGroup, false);
}

/**
 * configHash: https://alloc8or.re/rdr3/doc/enums/eTrainConfig.txt
 * For more information, see trainconfigs.ymt
 * To make the train AI controlled, set conductor to true and set the speed once.
 * 
 * Hash: 0xC239DBD9A57D2A71 | Since: 1207 | API-Set: unknown
 */
export function createMissionTrain(configHash: number | string, pos: Vector3, direction: boolean, passengers: boolean, conductor: boolean): number {
    if (typeof configHash === 'string') configHash = GetHashKey(configHash)
    return CreateMissionTrain(configHash, pos.x, pos.y, pos.z, direction, passengers, false, conductor);
}

/**
 * Spawn without lanterns set
 * 
 * Hash: 0xE1A83D4A3B5D7938 | Since: 1207 | API-Set: unknown
 */
export function deleteLanterns(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return DeleteVehicleLanterns(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x4402960666000E62 | Since: 1207 | API-Set: unknown
 */
export function detachDraftHarnessFromIndex(draft: number | IVehicle, harnessId: number): boolean {
    const _draft = draft instanceof IVehicle ? draft.handle() : draft;
    return DetachDraftVehicleHarnessFromIndex(_draft, harnessId);
}

/**
 * No comment provided
 * 
 * Hash: 0xB36D3EC70963BE60 | Since: 1207 | API-Set: unknown
 */
export function detachDraftHarnessPed(draft: number | IVehicle, ped: number | IPed): boolean {
    const _draft = draft instanceof IVehicle ? draft.handle() : draft;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return DetachDraftVehicleHarnessPed(_draft, _ped);
}

/**
 * Only used in train_robbery4 R* Script
 * _C* - _DEL*
 * 
 * Hash: 0x54CBDD6E1B4CB4DF | Since: 1207 | API-Set: unknown
 */
export function detachWagonEntityFromTrain(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    DetachWagonEntityFromTrain(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xC29996A337BDD099 | Since: 1207 | API-Set: unknown
 */
export function doesTrainExistOnTrack(trackIndex: number): boolean {
    return DoesTrainExistOnTrack(trackIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x35DC1877312FBA0F | Since: 1207 | API-Set: unknown
 */
export function fadeAndDestroy(vehicle: number | IVehicle): void {
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
 * Hash: 0x0E558D3A49D759D6 | Since: 1207 | API-Set: unknown
 */
export function getAllTrainWagonPassengers(train: number | IVehicle, itemset: any): number {
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
 * Hash: 0x0BA4250D20007C2E | Since: 1207 | API-Set: unknown
 */
export function getBalloonObjectFrom(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0x0BA4250D20007C2E', _vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE015CF1F2C0959D8 | Since: 1207 | API-Set: unknown
 */
export function getBreakableLocksState(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetBreakableVehicleLocksState(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x58F2244C1286D09A | Since: 1207 | API-Set: unknown
 */
export function getBreakableLockObject(vehicle: number | IVehicle, index: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetBreakableVehicleLockObject(_vehicle, index);
}

/**
 * No comment provided
 * 
 * Hash: 0x35D302397E524939 | Since: 1207 | API-Set: unknown
 */
export function getCheckpointTrainSpawnLocation(trackIndex: number, pos: Vector3, distance: number, direction: boolean): Vector3 {
    return new Vector3(GetCheckpointTrainSpawnLocation(trackIndex, pos.x, pos.y, pos.z, distance, direction));
}

/**
 * Returns p0 for 0xBA958F68031DDBFC (trackIndex)
 * 
 * Hash: 0xAF787E081AC4A8EE | Since: 1207 | API-Set: unknown
 */
export function getCurrentTrackForTrain(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetCurrentTrackForTrain(_train);
}

/**
 * `Returns rage::NumericLimits<float>::kMax (3.402823466e+38) if vehicle is not a valid vehicle of type VEHICLE_TYPE_DRAFT.`
 * 
 * Hash: 0xC6D7DDC843176701 | Since: 1207 | API-Set: unknown
 */
export function getDraftDesiredSpeed(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetDraftVehicleDesiredSpeed(_vehicle);
}

/**
 * Returns the world coordinates of a junction node for the given train track configuration. trainTrack: see _RETURN_TRAIN_INFO_FROM_HANDLE.
 * 
 * Hash: 0x785639D89F8451AB | Since: 1207 | API-Set: unknown
 */
export function getJunctionCoordsForTrainTrack(trainTrack: number | string, junctionIndex: number): Vector3 {
    if (typeof trainTrack === 'string') trainTrack = GetHashKey(trainTrack)
    return new Vector3(Citizen.invokeNative('0x785639D89F8451AB', trainTrack, junctionIndex));
}

/**
 * No comment provided
 * 
 * Hash: 0x6DE03BCC15E81710 | Since: 1207 | API-Set: unknown
 */
export function getNearestTrainTrackPosition(pos: Vector3): Vector3 {
    return new Vector3(GetNearestTrainTrackPosition(pos.x, pos.y, pos.z));
}

/**
 * No comment provided
 * 
 * Hash: 0x2FA86833E3617E2D | Since: 1207 | API-Set: unknown
 */
export function getNumBreakableLockObjects(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetNumBreakableVehicleLockObjects(_vehicle);
}

/**
 * Returns amount for CAN_REGISTER_MISSION_VEHICLES
 * 
 * Hash: 0x635423D55CA84FC8 | Since: 1207 | API-Set: unknown
 */
export function getNumCarsFromTrainConfig(trainConfig: number | string): number {
    if (typeof trainConfig === 'string') trainConfig = GetHashKey(trainConfig)
    return GetNumCarsFromTrainConfig(trainConfig);
}

/**
 * Returns number of horses a wagon can have
 * 
 * Hash: 0x5B1A26BB18E7D451 | Since: 1207 | API-Set: unknown
 */
export function getNumDraftHarnessPed(modelHash: number | string): number {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return GetNumDraftVehicleHarnessPed(modelHash);
}

/**
 * Return the number of logs on a draft vehicle.
 * 
 * Hash: 0x288CBB414C3C2FBB | Since: 1207 | API-Set: unknown
 */
export function getNumDraftLogs(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0x288CBB414C3C2FBB', _vehicle);
}

/**
 * Return the number of straps that hold the logs of a draft vehicle.
 * 
 * Hash: 0x1121B07088ED3013 | Since: 1207 | API-Set: unknown
 */
export function getNumDraftStraps(vehicle: number | IVehicle): number {
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
 * Hash: 0xA8BA0BAE0173457B | Since: 1207 | API-Set: unknown
 */
export function getPedInDraftHarness(vehicle: number | IVehicle, harnessId: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetPedInDraftHarness(_vehicle, harnessId);
}

/**
 * Returns handles of boat paddles entities.
 * 
 * Hash: 0xA6E210FB4283B767 | Since: 1207 | API-Set: unknown
 */
export function getRowingOars(vehicle: number | IVehicle): [number, number] {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetRowingOars(_vehicle);
}

/**
 * Returns Coords of vStation
 * p0 - NET_TRAIN_MANAGER_GET_TRAIN_STATION_DATA
 * _GET_P* - _GET_T*
 * 
 * Hash: 0xBA958F68031DDBFC | Since: 1207 | API-Set: unknown
 */
export function getStationCoordsFromTrainStationData(trackIndex: number, stationIndex: number): Vector3 {
    return new Vector3(GetStationCoordsFromTrainStationData(trackIndex, stationIndex));
}

/**
 * Returns the station hash for a track and station index.
 * - trackIndex: int — From 0 to 24
 * - stationIndex: int — From 0 to 7
 * 
 * Hash: 0x9CC94A948EAF5372 | Since: 1207 | API-Set: unknown
 */
export function getStationFromTrainStationIndex(trackIndex: number, stationIndex: number): number {
    return Citizen.invokeNative('0x9CC94A948EAF5372', trackIndex, stationIndex);
}

/**
 * Requires a visibility tracker on the vehicle (TRACK_VEHICLE_VISIBILITY)
 * 
 * Hash: 0x13C190302369308B | Since: 1207 | API-Set: unknown
 */
export function getTrackAmountOfVisiblePixels(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0x13C190302369308B', _vehicle);
}

/**
 * Returns trackIndex
 * _E* - _F*
 * 
 * Hash: 0x85D39F5E3B6D7EB0 | Since: 1207 | API-Set: unknown
 */
export function getTrackIndexFromCoords(pos: Vector3): number {
    return GetTrackIndexFromCoords(pos.x, pos.y, pos.z);
}

/**
 * Returns train car, use GET_TRAIN_CARRIAGE when trailerNumber is bigger than 0
 * 
 * Hash: 0x671A07C9A1CD50A5 | Since: 1207 | API-Set: unknown
 */
export function getTrainCar(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainCar(_train);
}

/**
 * Returns iNumCars - to be used with GET_TRAIN_CARRIAGE (trailerNumber)
 * _C* (O, P, Q, R)
 * 
 * Hash: 0x60B7D1DCC312697D | Since: 1207 | API-Set: unknown
 */
export function getTrainCarriageTrailerNumber(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainCarriageTrailerNumber(_train);
}

/**
 * No comment provided
 * 
 * Hash: 0x3C9628A811CBD724 | Since: 1207 | API-Set: unknown
 */
export function getTrainDirection(train: number | IVehicle): boolean {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainDirection(_train);
}

/**
 * https://i.imgur.com/1rHibjW.jpg
 * 
 * Hash: 0x67995318F5FAA496 | Since: 1207 | API-Set: unknown
 */
export function getTrainDirectionFromIndex(trackIndex: number): boolean {
    return GetTrainDirectionFromIndex(trackIndex);
}

/**
 * Returns modelHash
 * 
 * Hash: 0x8DF5F6A19F99F0D5 | Since: 1207 | API-Set: unknown
 */
export function getTrainModelFromTrainConfigByCarIndex(trainConfig: number | string, trainCarIndex: number): number {
    if (typeof trainConfig === 'string') trainConfig = GetHashKey(trainConfig)
    return GetTrainModelFromTrainConfigByCarIndex(trainConfig, trainCarIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x1E8A921112891651 | Since: 1207 | API-Set: unknown
 */
export function getTrainPositionOnTrack(trackIndex: number): Vector3 {
    return new Vector3(GetTrainPositionOnTrack(trackIndex));
}

/**
 * Returns trackIndex
 * 
 * Hash: 0x45853F4E17D847D5 | Since: 1207 | API-Set: unknown
 */
export function getTrainTrackFromTrain(train: number | IVehicle): number {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return GetTrainTrackFromTrainVehicle(_train);
}

/**
 * Outputs junctionIndex, to be used with 0xE6C5E2125EB210C1
 * 
 * Hash: 0x86AFC343CF7F0B34 | Since: 1207 | API-Set: unknown
 */
export function getTrainTrackJunctionAtCoords(trainTrack: number | string, pos: Vector3): [boolean, number] {
    if (typeof trainTrack === 'string') trainTrack = GetHashKey(trainTrack)
    return GetTrainTrackJunctionAtCoords(trainTrack, pos.x, pos.y, pos.z);
}

/**
 * Returns train
 * 
 * Hash: 0x6E585A616ABB8401 | Since: 1207 | API-Set: unknown
 */
export function getTrainFromTrackIndex(trackIndex: number): number {
    return GetTrainVehicleFromTrackIndex(trackIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xDD1E1393D966D39A | Since: 1207 | API-Set: unknown
 */
export function getDoorsLockedForTeam(vehicle: number | IVehicle, team: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleDoorsLockedForTeam(_vehicle, team);
}

/**
 * No comment provided
 * 
 * Hash: 0xD798DF5DB67B1659 | Since: 1207 | API-Set: unknown
 */
export function getIsPropSetApplied(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleIsPropSetApplied(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xBB765B8FD49A796C | Since: 1207 | API-Set: unknown
 */
export function getLivery(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleLivery(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB729679356A889AE | Since: 1207 | API-Set: unknown
 */
export function getOwner(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleOwner(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xA44D65E6C624526F | Since: 1207 | API-Set: unknown
 */
export function getTint(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleTint(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFF5791B7639C2A46 | Since: 1207 | API-Set: unknown
 */
export function getTurretSeat(vehicle: number | IVehicle): [boolean, number] {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleTurretSeat(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xBD3C4A2ED509205E | Since: 1207 | API-Set: unknown
 */
export function hasTrainLoaded(train: number | IVehicle): boolean {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return HasTrainLoaded(_train);
}

/**
 * No comment provided
 * 
 * Hash: 0x201B8ED4FF7FE9F5 | Since: 1207 | API-Set: unknown
 */
export function hideHorseReins(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    HideHorseReins(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x30D86B2B7622D0EB | Since: 1207 | API-Set: unknown
 */
export function isBoatGrounded(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsBoatGrounded(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB213D2A560B2E48B | Since: 1207 | API-Set: unknown
 */
export function isPedExclusiveDriverOf(ped: number | IPed, vehicle: number | IVehicle): [boolean, number] {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsPedExclusiveDriverOfVehicle(_ped, _vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB9D5BDDA88E1BB66 | Since: 1207 | API-Set: unknown
 */
export function isThisModelADraft(model: number | string): boolean {
    if (typeof model === 'string') model = GetHashKey(model)
    return IsThisModelADraftVehicle(model);
}

/**
 * Only returns true if BRING_VEHICLE_TO_HALT is called on vehicle beforehand
 * 
 * Hash: 0x404527BC03DA0E6C | Since: 1207 | API-Set: unknown
 */
export function isBroughtToHalt(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleBroughtToHalt(_vehicle);
}

/**
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * Hash: 0xE979BB5602AD3402 | Since: 1207 | API-Set: unknown
 */
export function isDoorBroken(vehicle: number | IVehicle, doorId: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleDoorBroken(_vehicle, doorId);
}

/**
 * No comment provided
 * 
 * Hash: 0x5136B284B67B35C7 | Since: 1207 | API-Set: unknown
 */
export function isFadingOut(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleFadingOut(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x0E3BF7ED4169EC43 | Since: 1207 | API-Set: unknown
 */
export function isOnFire(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleOnFire(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xCB2CA620C48BC875 | Since: 1207 | API-Set: unknown
 */
export function isWheelDestroyed(vehicle: number | IVehicle, wheel: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleWheelDestroyed(_vehicle, wheel);
}

/**
 * Returns the log prop entity that is currently detaching/falling from a draft (log) wagon. Returns 0 if no log is in the falling phase. R* scripts call this repeatedly to fetch each fallen piece, then apply forces to it.
 * 
 * Hash: 0x42404D57D621601A | Since: 1207 | API-Set: unknown
 */
export function recoverDraftFallingLog(vehicle: number | IVehicle): any {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return Citizen.invokeNative('0x42404D57D621601A', _vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xCF9DA72002FC16BF | Since: 1207 | API-Set: unknown
 */
export function requestAssetAnims(ped: number | IPed, entity: number | IEntity, vehicleAsset: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xCF9DA72002FC16BF', _ped, _entity, vehicleAsset);
}

/**
 * Outputs track hash and junction index on given train vehicle handle.
 * _RESET_VEHICLE_* (?)
 * 
 * Hash: 0x09034479E6E3E269 | Since: 1207 | API-Set: unknown
 */
export function returnTrainInfoFromHandle(train: number | IVehicle): [boolean, number, number] {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return Citizen.invokeNative('0x09034479E6E3E269', _train);
}

/**
 * No comment provided
 * 
 * Hash: 0x138398153824E332 | Since: 1207 | API-Set: unknown
 */
export function setAllJunctionsCleared(): void {
    SetAllJunctionsCleared();
}

/**
 * No comment provided
 * 
 * Hash: 0x424FFCB9F0D2D4B5 | Since: 1207 | API-Set: unknown
 */
export function setAllGeneratorsDisabledForVolume(volume: number, toggle: boolean): void {
    SetAllVehicleGeneratorsDisabledForVolume(volume, toggle);
}

/**
 * Params: 1.0f will make balloon hover
 * 
 * Hash: 0x7C9E45A4CED2E8DA | Since: 1207 | API-Set: unknown
 */
export function setBalloonHoverState(balloon: number | IVehicle): void {
    const _balloon = balloon instanceof IVehicle ? balloon.handle() : balloon;
    SetBalloonHoverState(_balloon, 0);
}

/**
 * Total height is calculated using: cargo ratio + pelt ratio (by pelt count)
 * Screenshot: https://imgur.com/a/nsomtiv
 * 
 * Hash: 0x31F343383F19C987 | Since: 1207 | API-Set: unknown
 */
export function setBatchTarpHeight(vehicle: number | IVehicle, height: number, immediately: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetBatchTarpHeight(_vehicle, height, immediately);
}

/**
 * No comment provided
 * 
 * Hash: 0x8C6D9A399126C194 | Since: 1207 | API-Set: unknown
 */
export function setDraftAnimalRandomSeed(vehicle: number | IVehicle, seed: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDraftAnimalRandomSeed(_vehicle, seed);
}

/**
 * No comment provided
 * 
 * Hash: 0x87344305778E5415 | Since: 1207 | API-Set: unknown
 */
export function setDraftAllowDraftAnimalAutoCreation(vehicle: number | IVehicle, allow: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDraftVehicleAllowDraftAnimalAutoCreation(_vehicle, allow);
}

/**
 * No comment provided
 * 
 * Hash: 0x6090A031C69F384E | Since: 1207 | API-Set: unknown
 */
export function setDraftAnimalsCanDetach(draft: number | IVehicle, canDetach: boolean): void {
    const _draft = draft instanceof IVehicle ? draft.handle() : draft;
    SetDraftVehicleAnimalsCanDetach(_draft, canDetach);
}

/**
 * No comment provided
 * 
 * Hash: 0x0C3F0F7F92CA847C | Since: 1207 | API-Set: unknown
 */
export function setDraftDesiredSpeed(vehicle: number | IVehicle, speed: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetDraftVehicleDesiredSpeed(_vehicle, speed);
}

/**
 * No comment provided
 * 
 * Hash: 0x226C6A4E3346D288 | Since: 1207 | API-Set: unknown
 */
export function setDraftYokeCanBreak(draft: number | IVehicle, canBreak: boolean): void {
    const _draft = draft instanceof IVehicle ? draft.handle() : draft;
    SetDraftVehicleYokeCanBreak(_draft, canBreak);
}

/**
 * Hashes: COACH2_BOOT_LOOT_ITEMS_COACHROB_RSC, COACH2_BOOT_LOOT_ITEMS_COACHROB, COACH2_MARY3
 * 
 * Hash: 0xF489F94BFEE12BB0 | Since: 1207 | API-Set: unknown
 */
export function setForceCoachRobberyLoot(vehicle: number | IVehicle, coachrobberyLoot: number | string): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    if (typeof coachrobberyLoot === 'string') coachrobberyLoot = GetHashKey(coachrobberyLoot)
    SetForceCoachRobberyLoot(_vehicle, coachrobberyLoot);
}

/**
 * No comment provided
 * 
 * Hash: 0x1098CDA477890165 | Since: 1207 | API-Set: unknown
 */
export function setForceHighLod(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetForceHighLodVehicle(_vehicle, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xF5FFB08976911B50 | Since: 1207 | API-Set: unknown
 */
export function setHorseTrafficGroupingDistribution(): void {
    SetHorseTrafficGroupingDistribution(undefined, undefined, undefined, undefined);
}

/**
 * Notice: BOOL p4 was wrongly named takePassengers (?)
 * Can be used to rotate the train by setting the BOOL direction
 * 
 * Hash: 0xC9EA26893C9E4024 | Since: 1207 | API-Set: unknown
 */
export function setMissionTrainWarpToCoords(train: number | IVehicle, pos: Vector3, direction: boolean): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetMissionTrainWarpToCoords(_train, pos.x, pos.y, pos.z, direction);
}

/**
 * No comment provided
 * 
 * Hash: 0x1BFBAFCC6760FF02 | Since: 1207 | API-Set: unknown
 */
export function setRandomTrainsWhistleEnabled(train: number | IVehicle, enabled: boolean): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0x1BFBAFCC6760FF02', _train, enabled);
}

/**
 * Enables/disables damage/explosion flags on the engine and all attached cars; typically set true before EXPLODE_VEHICLE.
 * 
 * Hash: 0x07E2E21E799080A0 | Since: 1207 | API-Set: unknown
 */
export function setTrainDestructionEnabled(train: number | IVehicle, enabled: boolean): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    Citizen.invokeNative('0x07E2E21E799080A0', _train, enabled);
}

/**
 * No comment provided
 * 
 * Hash: 0x3660BCAB3A6BB734 | Since: 1207 | API-Set: unknown
 */
export function setTrainHalt(train: number | IVehicle): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainHalt(_train);
}

/**
 * Restarts the train
 * 
 * Hash: 0x787E43477746876F | Since: 1207 | API-Set: unknown
 */
export function setTrainLeaveStation(train: number | IVehicle): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainLeaveStation(_train);
}

/**
 * Maximum possible speed is 30.0 (108 km/h)
 * 
 * Hash: 0x9F29999DFDF2AEB8 | Since: 1207 | API-Set: unknown
 */
export function setTrainMaxSpeed(train: number | IVehicle, speed: number): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainMaxSpeed(_train, speed);
}

/**
 * No comment provided
 * 
 * Hash: 0x4182C037AA1F0091 | Since: 1207 | API-Set: unknown
 */
export function setTrainStopsForStations(train: number | IVehicle, toggle: boolean): void {
    const _train = train instanceof IVehicle ? train.handle() : train;
    SetTrainStopsForStations(_train, toggle);
}

/**
 * trainTrack: FREIGHT_GROUP, TRAINS3, BRAITHWAITES2_TRACK_CONFIG, TRAINS_OLD_WEST01, TRAINS_OLD_WEST03, TRAINS_NB1, TRAINS_INTERSECTION1_ANN
 * 
 * Hash: 0xE6C5E2125EB210C1 | Since: 1207 | API-Set: unknown
 */
export function setTrainTrackJunctionSwitch(trainTrack: number | string, junctionIndex: number, enabled: boolean): void {
    if (typeof trainTrack === 'string') trainTrack = GetHashKey(trainTrack)
    SetTrainTrackJunctionSwitch(trainTrack, junctionIndex, enabled);
}

/**
 * No comment provided
 * 
 * Hash: 0x8E5DA070BAD3279E | Since: 1207 | API-Set: unknown
 */
export function setDeterioration(vehicle: number | IVehicle, amount: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDeterioration(_vehicle, amount, 0, false);
}

/**
 * dirtLevel: 0.0 - 1.0
 * 
 * Hash: 0xBAE0EEDF93F05EAA | Since: 1207 | API-Set: unknown
 */
export function setDirtLevel2(vehicle: number | IVehicle, dirtLevel: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleDirtLevel2(_vehicle, dirtLevel);
}

/**
 * No comment provided
 * 
 * Hash: 0xCE1531927AD6C9F8 | Since: 1207 | API-Set: unknown
 */
export function setIsInHurry(vehicle: number | IVehicle, enabled: boolean): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleIsInHurry(_vehicle, enabled);
}

/**
 * https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_liveries.lua
 * 
 * Hash: 0xF89D82A0582E46ED | Since: 1207 | API-Set: unknown
 */
export function setLivery(vehicle: number | IVehicle, liveryIndex: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleLivery(_vehicle, liveryIndex);
}

/**
 * Ranges from -1 to 2? (internal type is int8)
 * https://imgur.com/a/bPzHcft
 * 
 * Hash: 0x3FA7D7D1E0EA809E | Since: 1207 | API-Set: unknown
 */
export function setLodLevel(vehicle: number | IVehicle, lodLevel: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleLodLevel(_vehicle, lodLevel);
}

/**
 * mudLevel: 0.0 - 1.0
 * 
 * Hash: 0x4D15E49764CB328A | Since: 1207 | API-Set: unknown
 */
export function setMudLevel(vehicle: number | IVehicle, mudLevel: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleMudLevel(_vehicle, mudLevel);
}

/**
 * Picks the road/path link nearest (start to end) and stores it on the vehicle's driving component (used by R* Scripts to choose an exit link).
 * 
 * Hash: 0xC2E62678D602853C | Since: 1207 | API-Set: unknown
 */
export function setRoadLinkForced(vehicle: number | IVehicle, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    Citizen.invokeNative('0xC2E62678D602853C', _vehicle, startX, startY, startZ, endX, endY, endZ);
}

/**
 * snowLevel: 0.0 - 1.0
 * 
 * Hash: 0x6F73EFAB11651D7F | Since: 1207 | API-Set: unknown
 */
export function setSnowLevel(vehicle: number | IVehicle, snowLevel: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleSnowLevel(_vehicle, snowLevel);
}

/**
 * https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_tints.lua
 * 
 * Hash: 0x8268B098F6FCA4E2 | Since: 1207 | API-Set: unknown
 */
export function setTint(vehicle: number | IVehicle, tintId: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleTint(_vehicle, tintId);
}

/**
 * wetLevel: 0.0 - 1.0
 * 
 * Hash: 0x5AABB09F6FBD1F87 | Since: 1207 | API-Set: unknown
 */
export function setWetLevel(vehicle: number | IVehicle, wetLevel: number): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetVehicleWetLevel(_vehicle, wetLevel);
}

/**
 * No comment provided
 * 
 * Hash: 0x41CDA90EE3450921 | Since: 1207 | API-Set: unknown
 */
export function showHorseReins(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    ShowHorseReins(_vehicle);
}

/**
 * whistleSequence: ACKNOWLEDGE, BACKING_UP, CROSSING, DANGER, MOVING, NEXT_STATION, PASSING, STOPPED
 * p2 = true seems to mute the sound
 * 
 * Hash: 0xCFE122EC635CC2B2 | Since: 1207 | API-Set: unknown
 */
export function triggerTrainWhistle(train: number | IVehicle): string {
    const _train = train instanceof IVehicle ? train.handle() : train;
    return TriggerTrainWhistle(_train, false, false);
}

