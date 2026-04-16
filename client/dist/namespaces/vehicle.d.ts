import { Vector3, IVehicle } from '@risinglife/redm-shared';
/**
 * Break off vehicle wheel by index. The `leaveDebrisTrail` flag requires `putOnFire` to be true.
 *
 * Hash: 0xA274CADB
 */
export declare function breakOffWheel(vehicle: number | IVehicle, wheelIndex: number, leaveDebrisTrail: boolean, deleteWheel: boolean, unknownFlag: boolean, putOnFire: boolean): void;
/**
 * Removes vehicle xenon lights custom RGB color.
 *
 * Hash: 0x2867ED8C
 */
export declare function clearXenonLightsCustomColor(vehicle: number | IVehicle): void;
/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity(While riding in a car as a passenger)
 *
 * Hash: 0x5C140555
 */
export declare function disablePassengerIdleCamera(state: boolean): void;
/**
 * Checks whether the vehicle consumes fuel. The check is done based on petrol tank volume and vehicle type. Bicycles and vehicles with petrol tank volume equal to zero (only bicycles by default) do not use fuel. All other vehicles do.
 *
 * You can customize petrol tank volume using [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolTankVolume`.
 *
 * Hash: 0xEF30A696
 */
export declare function doesUseFuel(vehicle: number | IVehicle): boolean;
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
export declare function getAllModels(): number;
/**
 * A getter for [SET_AMBIENT_VEHICLE_RANGE_MULTIPLIER_THIS_FRAME](#\_0x90B6DA738A9A25DA).
 *
 * Hash: 0x667EC929
 */
export declare function getAmbientRangeMultiplier(): number;
/**
 * No comment provided
 *
 * Hash: 0xE015E854
 */
export declare function getTrainCurrentTrackNode(train: number | IVehicle): number;
/**
 * Gets the door count for the specified train.
 *
 * Hash: 0x99974721
 */
export declare function getTrainDoorCount(train: number | IVehicle): number;
/**
 * Gets the ratio that a door is open for on a train.
 *
 * Hash: 0x40B16551
 */
export declare function getTrainDoorOpenRatio(train: number | IVehicle, doorIndex: number): number;
/**
 * Gets the speed the train is currently going.
 *
 * Hash: 0x428668B7
 */
export declare function getTrainSpeed(train: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xC62AAC98
 */
export declare function getAlarmTimeLeft(vehicle: number | IVehicle): number;
/**
 * A getter for [SET_VEHICLE_CHEAT_POWER_INCREASE](#\_0xB59E4BD37AE292DB).
 *
 * Hash: 0xC3C93F28
 */
export declare function getCheatPowerIncrease(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x1DAD4583
 */
export declare function getClutch(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xB4F4E566
 */
export declare function getCurrentGear(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xE7B12B54
 */
export declare function getCurrentRpm(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xDFFABA2A
 */
export declare function getDashboardBoost(): number;
/**
 * Retrieves the current gear displayed on the dashboard of the vehicle the player is in, returned as a float. This value represents the gear shown in the instrument cluster, such as "R" (0.0) or positive values (e.g., 1.0, 2.0, etc.) for drive gears.
 *
 * Hash: 0x435C86F4
 */
export declare function getDashboardCurrentGear(): number;
/**
 * No comment provided
 *
 * Hash: 0x19B0B2CE
 */
export declare function getDashboardFuel(): number;
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
export declare function getDashboardLights(): number;
/**
 * No comment provided
 *
 * Hash: 0x3856D767
 */
export declare function getDashboardOilPressure(): number;
/**
 * No comment provided
 *
 * Hash: 0x1F5996AA
 */
export declare function getDashboardOilTemp(): number;
/**
 * No comment provided
 *
 * Hash: 0xF9716A11
 */
export declare function getDashboardRpm(): number;
/**
 * No comment provided
 *
 * Hash: 0x9AAD420E
 */
export declare function getDashboardSpeed(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x6B6ADAFA
 */
export declare function getDashboardTemp(): number;
/**
 * No comment provided
 *
 * Hash: 0xFABE67A9
 */
export declare function getDashboardVacuum(): number;
/**
 * A getter for [SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x245A6883D966D537).
 *
 * Hash: 0xEF7C6538
 */
export declare function getDensityMultiplier(): number;
/**
 * Gets a vehicle's multiplier used with a wheel's GET_VEHICLE_WHEEL_STEERING_ANGLE to determine the angle the wheel is rendered.
 *
 * Hash: 0x21C1DA8E
 */
export declare function getDrawnWheelAngleMult(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xF4F495CB
 */
export declare function getEngineTemperature(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x5F739BB8
 */
export declare function getFuelLevel(vehicle: number | IVehicle): number;
/**
 * Gets vehicles gear ratio on choosen gear.
 *
 * Hash: 0x82E794B7
 */
export declare function getGearRatio(vehicle: number | IVehicle, gear: number): number;
/**
 * No comment provided
 *
 * Hash: 0xB48A1292
 */
export declare function getGravityAmount(vehicle: number | IVehicle): number;
/**
 * Returns the effective handling data of a vehicle as a floating-point value.
 * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 *
 * Hash: 0x642FC12F
 */
export declare function getHandlingFloat(vehicle: number | IVehicle, class_: string, fieldName: string): number;
/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 *
 * Hash: 0x27396C75
 */
export declare function getHandlingInt(vehicle: number | IVehicle, class_: string, fieldName: string): number;
/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 *
 * Hash: 0xFB341304
 */
export declare function getHandlingVector(vehicle: number | IVehicle, class_: string, fieldName: string): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xF1D1D689
 */
export declare function getHighGear(vehicle: number | IVehicle): number;
/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 *
 * Hash: 0x83070354
 */
export declare function getIndicatorLights(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x7E6E219C
 */
export declare function getLightMultiplier(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xDDB298AE
 */
export declare function getNextGear(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xEDF4B0FC
 */
export declare function getNumberOfWheels(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xFC7F8EF4
 */
export declare function getOilLevel(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x954465DE
 */
export declare function getSteeringScale(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xD1D07351
 */
export declare function getThrottleOffset(vehicle: number | IVehicle): number;
/**
 * A getter for [MODIFY_VEHICLE_TOP_SPEED](#\_0x93A3996368C94158). Returns -1.0 if a modifier is not set.
 *
 * Hash: 0x998B7FEE
 */
export declare function getTopSpeedModifier(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xE02B51D7
 */
export declare function getTurboPressure(vehicle: number | IVehicle): number;
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
export declare function getWheelieState(vehicle: number | IVehicle): number;
/**
 * Gets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f when braking.
 *
 * Hash: 0x70FE2EFF
 */
export declare function getWheelBrakePressure(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * Gets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xC70FA0C7
 */
export declare function getWheelFlags(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x54A677F5
 */
export declare function getWheelHealth(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * Gets whether the wheel is powered.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in GET_VEHICLE_WHEEL_FLAGS.
 *
 * Hash: 0x3CCF1B49
 */
export declare function getWheelIsPowered(vehicle: number | IVehicle, wheelIndex: number): boolean;
/**
 * Gets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xD203287
 */
export declare function getWheelPower(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xCEE21AB2
 */
export declare function getWheelRimColliderSize(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * Gets the rotation speed of a wheel.
 * This is used internally to calcuate GET_VEHICLE_WHEEL_SPEED.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xEA1859E5
 */
export declare function getWheelRotationSpeed(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 *
 * Hash: 0x4046B66
 */
export declare function getWheelSize(vehicle: number | IVehicle): number;
/**
 * Gets speed of a wheel at the tyre.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x149C9DA0
 */
export declare function getWheelSpeed(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * Gets steering angle of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xA0867448
 */
export declare function getWheelSteeringAngle(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xA7F04022
 */
export declare function getWheelSurfaceMaterial(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * Gets the current suspension compression of a wheel.
 * Returns a positive value. 0 means the suspension is fully extended, the wheel is off the ground.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x2B48175B
 */
export declare function getWheelSuspensionCompression(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xE0BA9FE6
 */
export declare function getWheelTireColliderSize(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xEF65929C
 */
export declare function getWheelTireColliderWidth(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * Gets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x3BCFEE14
 */
export declare function getWheelTractionVectorLength(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 *
 * Hash: 0x9C7B59F9
 */
export declare function getWheelWidth(vehicle: number | IVehicle): number;
/**
 * Returns the offset of the specified wheel relative to the wheel's axle center.
 *
 * Hash: 0xCC90CBCA
 */
export declare function getWheelXOffset(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x2EA4AFFE
 */
export declare function getWheelYRotation(vehicle: number | IVehicle, wheelIndex: number): number;
/**
 * Returns vehicle xenon lights custom RGB color values. Do note this native doesn't return non-RGB colors that was set with [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07).
 *
 * Hash: 0xC715F730
 */
export declare function getXenonLightsCustomColor(vehicle: number | IVehicle): [boolean, number, number, number];
/**
 * A getter for [SET_VEHICLE_XMAS_SNOW_FACTOR](#\_0x80CC4C9E).
 *
 * Hash: 0x16605B30
 */
export declare function getXmasSnowFactor(): number;
/**
 * No comment provided
 *
 * Hash: 0xDC921211
 */
export declare function isAlarmSet(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA411F72C
 */
export declare function isInteriorLightOn(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF9933BF4
 */
export declare function isNeedsToBeHotwired(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF849ED67
 */
export declare function isPreviouslyOwnedByPlayer(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA7DAF7C
 */
export declare function isWanted(vehicle: number | IVehicle): boolean;
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
export declare function overrideReactionToSiren(state: boolean, reaction: number): void;
/**
 * Overrides whether or not peds can stand on top of the specified vehicle.
 *
 * Note this flag is not replicated automatically, you will have to manually do so.
 *
 * Hash: 0x7FA03E76
 */
export declare function overridePedsCanStandOnTopFlag(vehicle: number | IVehicle, can: boolean): void;
/**
 * Resets whether or not peds can stand on top of the specified vehicle.
 *
 * Note this flag is not replicated automatically, you will have to manually do so.
 *
 * Hash: 0xDF62CFE2
 */
export declare function resetPedsCanStandOnTopFlag(vehicle: number | IVehicle): void;
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
export declare function setDefaultNumberPlateTextPattern(plateIndex: number, pattern: string): void;
/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0xFE8064E3
 */
export declare function setHandlingField(vehicle: string, class_: string, fieldName: string, value: any): void;
/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0x90DD01C
 */
export declare function setHandlingFloat(vehicle: string, class_: string, fieldName: string, value: number): void;
/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 *
 * Hash: 0x8AB3F46C
 */
export declare function setHandlingInt(vehicle: string, class_: string, fieldName: string, value: number): void;
/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 *
 * Hash: 0x7F9D543
 */
export declare function setHandlingVector(vehicle: string, class_: string, fieldName: string, value: Vector3): void;
/**
 * This completely disables pedestrian vehicles from reacting to sirens. They will not try to do any maneuver to evade.
 *
 * Hash: 0xB90BBC6E
 */
export declare function setReactionToWithSirenDisabled(state: boolean): void;
/**
 * Enables or disables whether train doors should be forced open whilst a player is inside the train. This is enabled by default in multiplayer.
 *
 * Hash: 0xD4D1BA63
 */
export declare function setTrainsForceDoorsOpen(forceOpen: boolean): void;
/**
 * Sets the ratio that a door is open for on a train.
 *
 * Hash: 0x2468DBE8
 */
export declare function setTrainDoorOpenRatio(train: number | IVehicle, doorIndex: number, ratio: number): void;
/**
 * No comment provided
 *
 * Hash: 0x61CB74A0
 */
export declare function setTrainState(train: number | IVehicle, state: number): void;
/**
 * Toggles a train's ability to stop at stations
 *
 * Hash: 0xECB8B577
 */
export declare function setTrainStopAtStations(train: number | IVehicle, state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC108EE6F
 */
export declare function setAlarmTimeLeft(vehicle: number | IVehicle, time: number): void;
/**
 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 *
 * Hash: 0x5F3A3574
 */
export declare function setAutoRepairDisabled(vehicle: number | IVehicle, value: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x2F70ACED
 */
export declare function setClutch(vehicle: number | IVehicle, clutch: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2A01A8FC
 */
export declare function setCurrentRpm(vehicle: number | IVehicle, rpm: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6C93C4A9
 */
export declare function setEngineTemperature(vehicle: number | IVehicle, temperature: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBA970511
 */
export declare function setFuelLevel(vehicle: number | IVehicle, level: number): void;
/**
 * Sets the vehicles gear ratio on choosen gear, reverse gear needs to be a negative float and forward moving gear needs to be a positive float. Refer to the examples if confused.
 *
 * Hash: 0x496EF2F2
 */
export declare function setGearRatio(vehicle: number | IVehicle, gear: number, ratio: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1A963E58
 */
export declare function setGravityAmount(vehicle: number | IVehicle, gravity: number): void;
/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0x2BA40795
 */
export declare function setVehicleHandlingField(vehicle: number | IVehicle, class_: string, fieldName: string, value: any): void;
/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0x488C86D2
 */
export declare function setVehicleHandlingFloat(vehicle: number | IVehicle, class_: string, fieldName: string, value: number): void;
/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 *
 * Hash: 0xC37F4CF9
 */
export declare function setVehicleHandlingInt(vehicle: number | IVehicle, class_: string, fieldName: string, value: number): void;
/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 *
 * Hash: 0x12497890
 */
export declare function setVehicleHandlingVector(vehicle: number | IVehicle, class_: string, fieldName: string, value: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x20B1B3E6
 */
export declare function setHighGear(vehicle: number | IVehicle, gear: number): void;
/**
 * Sets the maximum distance in which [\_SET_VEHICLE_NITRO_ENABLED](#\_0xC8E9B6B71B8E660D) PTFX are rendered. Distance is measured from the camera position.
 *
 * Hash: 0xA40CB822
 */
export declare function setNitroPtfxRange(range: number): void;
/**
 * No comment provided
 *
 * Hash: 0x90D1CAD1
 */
export declare function setOilLevel(vehicle: number | IVehicle, level: number): void;
/**
 * Set the vehicle's pitch bias. Only works on planes.
 *
 * Hash: 0x2A6CC9F2
 */
export declare function setPitchBias(vehicle: number | IVehicle, value: number): void;
/**
 * Set the vehicle's roll bias. Only works on planes.
 *
 * Hash: 0x264B45DE
 */
export declare function setRollBias(vehicle: number | IVehicle, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFFCCC2EA
 */
export declare function setSteeringAngle(vehicle: number | IVehicle, angle: number): void;
/**
 * No comment provided
 *
 * Hash: 0xEB46596F
 */
export declare function setSteeringScale(vehicle: number | IVehicle, scale: number): void;
/**
 * Sets the height of the vehicle's suspension.
 * This changes the same value set by Suspension in the mod shop.
 * Negatives values raise the car. Positive values lower the car.
 *
 * This is change is visual only. The collision of the vehicle will not move.
 *
 * Hash: 0xB3439A01
 */
export declare function setSuspensionHeight(vehicle: number | IVehicle, newHeight: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6485615E
 */
export declare function setTurboPressure(vehicle: number | IVehicle, pressure: number): void;
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
export declare function setWheelieState(vehicle: number | IVehicle, state: number): void;
/**
 * Sets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f
 *
 * Hash: 0xE80F4E31
 */
export declare function setWheelBrakePressure(vehicle: number | IVehicle, wheelIndex: number, pressure: number): void;
/**
 * Sets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xD2B9E90D
 */
export declare function setWheelFlags(vehicle: number | IVehicle, wheelIndex: number, flags: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB22ECEFD
 */
export declare function setWheelHealth(vehicle: number | IVehicle, wheelIndex: number, health: number): void;
/**
 * Sets whether the wheel is powered.
 * On all wheel drive cars this works to change which wheels receive power, but if a car's fDriveBiasFront doesn't send power to that wheel, it won't get power anyway. This can be fixed by changing the fDriveBiasFront with SET_VEHICLE_HANDLING_FLOAT.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in SET_VEHICLE_WHEEL_FLAGS.
 *
 * Hash: 0xBD5291A0
 */
export declare function setWheelIsPowered(vehicle: number | IVehicle, wheelIndex: number, powered: boolean): void;
/**
 * Sets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xC6146043
 */
export declare function setWheelPower(vehicle: number | IVehicle, wheelIndex: number, power: number): void;
/**
 * Not sure what this changes, probably determines physical rim size in case the tire is blown.
 *
 * Hash: 0xF380E184
 */
export declare function setWheelRimColliderSize(vehicle: number | IVehicle, wheelIndex: number, value: number): void;
/**
 * Sets the rotation speed of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x35ED100D
 */
export declare function setWheelRotationSpeed(vehicle: number | IVehicle, wheelIndex: number, speed: number): void;
/**
 * Sets vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set size for non-default wheels).
 *
 * Hash: 0x53AB5C35
 */
export declare function setWheelSize(vehicle: number | IVehicle, size: number): boolean;
/**
 * Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).
 *
 * Hash: 0xB962D05C
 */
export declare function setWheelTireColliderSize(vehicle: number | IVehicle, wheelIndex: number, value: number): void;
/**
 * Use along with SetVehicleWheelWidth to resize the wheels (this native sets the collider width affecting physics while SetVehicleWheelWidth will change visual width).
 *
 * Hash: 0x47BD0270
 */
export declare function setWheelTireColliderWidth(vehicle: number | IVehicle, wheelIndex: number, value: number): void;
/**
 * Sets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x85C85A3A
 */
export declare function setWheelTractionVectorLength(vehicle: number | IVehicle, wheelIndex: number, length: number): void;
/**
 * Sets vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set width for non-default wheels).
 *
 * Hash: 0x64C3F1C0
 */
export declare function setWheelWidth(vehicle: number | IVehicle, width: number): boolean;
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
export declare function setWheelXOffset(vehicle: number | IVehicle, wheelIndex: number, offset: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC6C2171F
 */
export declare function setWheelYRotation(vehicle: number | IVehicle, wheelIndex: number, value: number): void;
/**
 * Sets custom vehicle xenon lights color, allowing to use RGB palette. The game will ignore lights color set by [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07) when custom color is active. This native is not synced between players. Requires xenon lights mod to be set on vehicle.
 *
 * Hash: 0x1683E7F0
 */
export declare function setXenonLightsCustomColor(vehicle: number | IVehicle, red: number, green: number, blue: number): void;
/**
 * No comment provided
 *
 * Hash: 0x80CC4C9E
 */
export declare function setXmasSnowFactor(gripFactor: number): void;
/**
 * No comment provided
 *
 * Hash: 0x77CC80DC
 */
export declare function doesTrainStopAtStations(train: number | IVehicle): boolean;
/**
 * Gets the trains desired speed.
 *
 * Hash: 0xA4921EF5
 */
export declare function getTrainCruiseSpeed(train: number | IVehicle): number;
/**
 * Gets the direction the train is facing
 *
 * Hash: 0x8DAF79B6
 */
export declare function getTrainDirection(train: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x81B50033
 */
export declare function getTrainState(train: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x9AA339D
 */
export declare function getTrainTrackIndex(train: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x483B013C
 */
export declare function getHandbrake(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1382FCEA
 */
export declare function getSteeringAngle(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xBB340D04
 */
export declare function isEngineStarting(vehicle: number | IVehicle): boolean;
/**
 * **Note**: Flags are not the same based on your `gamebuild`. Please see [here](https://docs.fivem.net/docs/game-references/vehicle-references/vehicle-flags) to see a complete list of all vehicle flags.
 *
 * Get vehicle.meta flag by index. Useful examples include `FLAG_LAW_ENFORCEMENT` (31), `FLAG_RICH_CAR` (36), `FLAG_IS_ELECTRIC` (43), `FLAG_IS_OFFROAD_VEHICLE` (48).
 *
 * Hash: 0xD85C9F57
 */
export declare function getHasFlag(vehicle: number | IVehicle, flagIndex: number): boolean;
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
export declare function getTypeRaw(vehicle: number | IVehicle): number;
/**
 * Getter for [BREAK_OFF_VEHICLE_WHEEL](?\_0xA274CADB).
 *
 * Hash: 0xCF1BC668
 */
export declare function isWheelBrokenOff(vehicle: number | IVehicle, wheelIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8923DD42
 */
export declare function setCurrentGear(vehicle: number | IVehicle, gear: number): void;
/**
 * This native is a setter for [`GET_VEHICLE_HAS_FLAG`](#\_0xD85C9F57).
 *
 * Hash: 0x63AE1A34
 */
export declare function setFlag(vehicle: number | IVehicle, flagIndex: number, value: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3A4566F4
 */
export declare function setNextGear(vehicle: number | IVehicle, nextGear: number): void;
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
export declare function getType(vehicle: number | IVehicle): string;
