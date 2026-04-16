import { Vector3, IEntity, IPed, IVehicle } from '@risinglife/redm-shared';
/**
 * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
 *
 * Hash: 0xA886495D
 */
export declare function getHeliBodyHealth(heli: number | IVehicle): number;
/**
 * This is a getter for [SET_DISABLE_HELI_EXPLODE_FROM_BODY_DAMAGE](#\_0xEDBC8405B3895CC9)
 *
 * Hash: 0x82AFC0A3
 */
export declare function getHeliDisableExplodeFromBodyDamage(heli: number | IVehicle): boolean;
/**
 * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
 *
 * Hash: 0xA0FA0354
 */
export declare function getHeliEngineHealth(heli: number | IVehicle): number;
/**
 * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
 *
 * Hash: 0xD4EC7858
 */
export declare function getHeliGasTankHealth(heli: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xC37D668
 */
export declare function getHeliMainRotorDamageScale(heli: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x1944AC95
 */
export declare function getHeliPitchControl(heli: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xC40161E2
 */
export declare function getHeliRearRotorDamageScale(heli: number | IVehicle): number;
/**
 * This native is a getter for [SET_HELI_TAIL_ROTOR_HEALTH](#\_0xFE205F38AAA58E5B)
 *
 * Hash: 0x33EE6E2B
 */
export declare function getHeliRearRotorHealth(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x12948DE9
 */
export declare function getHeliRollControl(heli: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x22239130
 */
export declare function getHeliTailRotorDamageScale(heli: number | IVehicle): number;
/**
 * **Note**: This native is deprecated, please use [`GET_HELI_REAR_ROTOR_HEALTH`](#\_0x33EE6E2B) instead.
 *
 * Hash: 0xA41BC13D
 */
export declare function getHeliTailRotorHealth(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x8E86238D
 */
export declare function getHeliThrottleControl(heli: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x8FDC0768
 */
export declare function getHeliYawControl(heli: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x3EFE38D1
 */
export declare function getIsHeliEngineRunning(heli: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1C939E87
 */
export declare function getThrusterSideRcsThrottle(jetpack: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x94E24C96
 */
export declare function getThrusterThrottle(jetpack: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x456E34A
 */
export declare function getTrainBackwardCarriage(train: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x24DC88D9
 */
export declare function getTrainForwardCarriage(train: number | IVehicle): number;
/**
 * This is a getter for the client-side native [`START_VEHICLE_HORN`](#\_0x9C8C6504B5B63D2C), which allows you to return the horn type of the vehicle.
 *
 * **Note**: This native only gets the hash value set with `START_VEHICLE_HORN`. If a wrong hash is passed into `START_VEHICLE_HORN`, it will return this wrong hash.
 *
 * ```cpp
 * enum eHornTypes
 * {
 * NORMAL = 1330140148,
 * HELDDOWN = -2087385909,
 * AGGRESSIVE = -92810745
 * }
 * ```
 *
 * Hash: 0xDEA49773
 */
export declare function getHornType(vehicle: number | IVehicle): number;
/**
 * This is a getter for [SET_HELI_TAIL_EXPLODE_THROW_DASHBOARD](#\_0x3EC8BF18AA453FE9)
 *
 * Hash: 0x23E46BD7
 */
export declare function isHeliTailBoomBreakable(heli: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2C59F987
 */
export declare function isHeliTailBoomBroken(heli: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFA9336E5
 */
export declare function isTrainCaboose(train: number | IVehicle): boolean;
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
 * Creates a vehicle with the specified model at the specified position. This vehicle will initially be owned by the creating
 * script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
 *
 * ```
 * NativeDB Added Parameter 8: BOOL p7
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CREATE_VEHICLE](?\_0xAF35D0D2583051B0).</strong>
 *
 * Hash: 0xDD75460A
 */
export declare function create(modelHash: number | string, pos: Vector3, heading: number, isNetwork: boolean, netMissionEntity: boolean): number;
/**
 * Equivalent to CREATE_VEHICLE, but it uses 'server setter' logic (like the former CREATE_AUTOMOBILE) as a workaround for
 * reliability concerns regarding entity creation RPC.
 *
 * Unlike CREATE_AUTOMOBILE, this supports other vehicle types as well.
 *
 * Hash: 0x6AE51D4B
 */
export declare function createServerSetter(modelHash: number | string, _type: string, pos: Vector3, heading: number): number;
/**
 * Deletes the specified `entity` and any carriage its attached to, or that is attached to it.
 *
 * Hash: 0x523BA3DA
 */
export declare function deleteTrain(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x43F15989
 */
export declare function doesBoatSinkWhenWrecked(vehicle: number | IVehicle): boolean;
/**
 * Returns all vehicle handles known to the server.
 * The data returned adheres to the following layout:
 *
 * ```
 * [127, 42, 13, 37]
 * ```
 *
 * Hash: 0x332169F5
 */
export declare function getAlls(): number;
/**
 * No comment provided
 *
 * Hash: 0x7DC6D022
 */
export declare function getIsEngineRunning(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD7EC8760
 */
export declare function getIsPrimaryColourCustom(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x288AD228
 */
export declare function getIsSecondaryColourCustom(vehicle: number | IVehicle): boolean;
/**
 * See the client-side [GET_LANDING_GEAR_STATE](#\_0x9B0F3DCA3DB0F4CD) native for a description of landing gear states.
 *
 * Hash: 0xA6F02670
 */
export declare function getLandingGearState(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x95070FA
 */
export declare function getTrainCarriageEngine(train: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x4B8285CF
 */
export declare function getTrainCarriageIndex(train: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x2B2FCC28
 */
export declare function getBodyHealth(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x40D82D88
 */
export declare function getColours(vehicle: number | IVehicle): [number, number];
/**
 * No comment provided
 *
 * Hash: 0x1C2B9FEF
 */
export declare function getCustomPrimaryColour(vehicle: number | IVehicle): [number, number, number];
/**
 * No comment provided
 *
 * Hash: 0x3FF247A2
 */
export declare function getCustomSecondaryColour(vehicle: number | IVehicle): [number, number, number];
/**
 * No comment provided
 *
 * Hash: 0xA0DBD08D
 */
export declare function getDashboardColour(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xFD15C065
 */
export declare function getDirtLevel(vehicle: number | IVehicle): number;
/**
 * Currently it only works when set to "all players".
 *
 * Hash: 0x1DC50247
 */
export declare function getDoorsLockedForPlayer(vehicle: number | IVehicle): number;
/**
 * ```lua
 * enum_VehicleLockStatus = {
 * None = 0,
 * Locked = 2,
 * LockedForPlayer = 3,
 * StickPlayerInside = 4, -- Doesn't allow players to exit the vehicle with the exit vehicle key.
 * CanBeBrokenInto = 7, -- Can be broken into the car. If the glass is broken, the value will be set to 1
 * CanBeBrokenIntoPersist = 8, -- Can be broken into persist
 * CannotBeTriedToEnter = 10, -- Cannot be tried to enter (Nothing happens when you press the vehicle enter key).
 * }
 * ```
 *
 * It should be [noted](https://forum.cfx.re/t/4863241) that while the [client-side command](#\_0x25BC98A59C2EA962) and its
 * setter distinguish between states 0 (unset) and 1 (unlocked), the game will synchronize both as state 0, so the server-side
 * command will return only '0' if unlocked.
 *
 * Hash: 0xD72CEF2
 */
export declare function getDoorLockStatus(vehicle: number | IVehicle): number;
/**
 * Returns the open position of the specified door on the target vehicle.
 *
 * Hash: 0x6E35C49C
 */
export declare function getDoorStatus(vehicle: number | IVehicle, doorIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x8880038A
 */
export declare function getEngineHealth(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x80E4659B
 */
export declare function getExtraColours(vehicle: number | IVehicle): [number, number];
/**
 * Gets the flight nozzel position for the specified vehicle. See the client-side [\_GET_VEHICLE_FLIGHT_NOZZLE_POSITION](#\_0xDA62027C8BDB326E) native for usage examples.
 *
 * Hash: 0xAD40AD55
 */
export declare function getFlightNozzlePosition(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xD7147656
 */
export declare function getHeadlightsColour(vehicle: number | IVehicle): number;
/**
 * Gets the lock on state for the specified vehicle. See the client-side [GET_VEHICLE_HOMING_LOCKON_STATE](#\_0xE6B0E8CFC3633BF0) native for a description of lock on states.
 *
 * Hash: 0xFBDE9FD8
 */
export declare function getHomingLockonState(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xCCFF3B6E
 */
export declare function getInteriorColour(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x7C278621
 */
export declare function getLightsState(vehicle: number | IVehicle): [boolean, boolean, boolean];
/**
 * No comment provided
 *
 * Hash: 0xEC82A51D
 */
export declare function getLivery(vehicle: number | IVehicle): number;
/**
 * Gets the vehicle that is locked on to for the specified vehicle.
 *
 * Hash: 0x4A557117
 */
export declare function getLockOnTarget(vehicle: number | IVehicle): number;
/**
 * Getter to check the neon colour of a vehicle. This native is the server side getter of [GET_VEHICLE_NEON_LIGHTS_COLOUR](#\_0x7619EEE8C886757F).
 *
 * Hash: 0xD9319DCB
 */
export declare function getNeonColour(vehicle: number | IVehicle): [number, number, number];
/**
 * Getter to check if one of the neon lights of a vehicle is enabled. This native is the server side getter of [IS_VEHICLE_NEON_LIGHT_ENABLED](#\_0x8C4B92553E4766A5).
 *
 * ```cpp
 * enum neonIndex
 * {
 * NEON_BACK = 0,   // Back neon
 * NEON_RIGHT = 1,  // Right neon
 * NEON_LEFT = 2,   // Left neon
 * NEON_FRONT = 3   // Front neon
 * };
 * ```
 *
 * Hash: 0x684BDBF2
 */
export declare function getNeonEnabled(vehicle: number | IVehicle, neonIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE8522D58
 */
export declare function getNumberPlateText(vehicle: number | IVehicle): string;
/**
 * No comment provided
 *
 * Hash: 0x499747B6
 */
export declare function getNumberPlateTextIndex(vehicle: number | IVehicle): number;
/**
 * Gets the vehicle the specified Ped is/was in depending on bool value. This native is used server side when using OneSync.
 *
 * Hash: 0xAFE92319
 */
export declare function getPedIsIn(ped: number | IPed, lastVehicle: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0xE41595CE
 */
export declare function getPetrolTankHealth(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x57037960
 */
export declare function getRadioStationIndex(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x872CF42
 */
export declare function getRoofLivery(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x9963D5F9
 */
export declare function getTotalRepairs(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x75280015
 */
export declare function getTyreSmokeColor(vehicle: number | IVehicle): [number, number, number];
/**
 * No comment provided
 *
 * Hash: 0xDA58D7AE
 */
export declare function getWheelType(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x13D53892
 */
export declare function getWindowTint(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xB8AF3137
 */
export declare function hasBeenDamagedByBullets(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE4E83A5B
 */
export declare function hasBeenOwnedByPlayer(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD5C39EE6
 */
export declare function isBoatAnchoredAndFrozen(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9049DB44
 */
export declare function isBoatWrecked(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x42098B5
 */
export declare function isExtraTurnedOn(vehicle: number | IVehicle, extraId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x25EB5873
 */
export declare function isSirenOn(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x48C80210
 */
export declare function isTyreBurst(vehicle: number | IVehicle, wheelID: number, completely: boolean): boolean;
/**
 * See the client-side [IS_VEHICLE_WINDOW_INTACT](#\_0x46E571A0E20D01F1) for a window indexes list.
 *
 * Hash: 0xAC4EF23D
 */
export declare function isWindowIntact(vehicle: number | IVehicle, windowIndex: number): boolean;
/**
 * SET_VEHICLE_ALARM
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_ALARM](?\_0xCDE5E70C1DDB954C).</strong>
 *
 * Hash: 0x24877D84
 */
export declare function setAlarm(vehicle: number | IVehicle, state: boolean): void;
/**
 * ```
 * p2 often set to 1000.0 in the decompiled scripts.
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_BODY_HEALTH](?\_0xB77D05AC8C78AADB).</strong>
 *
 * Hash: 0x920C2517
 */
export declare function setBodyHealth(vehicle: number | IVehicle, value: number): void;
/**
 * colorPrimary & colorSecondary are the paint indexes for the vehicle.
 * For a list of valid paint indexes, view: pastebin.com/pwHci0xK
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_COLOURS](?\_0x4F1D4BE3A7F24601).</strong>
 *
 * Hash: 0x57F24253
 */
export declare function setColours(vehicle: number | IVehicle, colorPrimary: number, colorSecondary: number): void;
/**
 * Sets the selected vehicle's colors to their default value (specific variant specified using the colorCombination parameter).
 * Range of possible values for colorCombination is currently unknown, I couldn't find where these values are stored either (Disquse's guess was vehicles.meta but I haven't seen it in there.)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_COLOUR_COMBINATION](?\_0x33E8CD3322E2FE31).</strong>
 *
 * Hash: 0xA557AEAD
 */
export declare function setColourCombination(vehicle: number | IVehicle, colorCombination: number): void;
/**
 * ```
 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_CUSTOM_PRIMARY_COLOUR](?\_0x7141766F91D15BEA).</strong>
 *
 * Hash: 0x8DF9F9BC
 */
export declare function setCustomPrimaryColour(vehicle: number | IVehicle, r: number, g: number, b: number): void;
/**
 * ```
 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_CUSTOM_SECONDARY_COLOUR](?\_0x36CED73BFED89754).</strong>
 *
 * Hash: 0x9D77259E
 */
export declare function setCustomSecondaryColour(vehicle: number | IVehicle, r: number, g: number, b: number): void;
/**
 * Sets the dirt level of the passed vehicle.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DIRT_LEVEL](?\_0x79D3B596FE44EE8B).</strong>
 *
 * Hash: 0x2B39128B
 */
export declare function setDirtLevel(vehicle: number | IVehicle, dirtLevel: number): void;
/**
 * Locks the doors of a specified vehicle to a defined lock state, affecting how players and NPCs can interact with the vehicle.
 *
 * ```
 * NativeDB Introduced: v323
 * ```
 *
 * ```cpp
 * enum eVehicleLockState {
 * // No specific lock state, vehicle behaves according to the game's default settings.
 * VEHICLELOCK_NONE = 0,
 * // Vehicle is fully unlocked, allowing free entry by players and NPCs.
 * VEHICLELOCK_UNLOCKED = 1,
 * // Vehicle is locked, preventing entry by players and NPCs.
 * VEHICLELOCK_LOCKED = 2,
 * // Vehicle locks out only players, allowing NPCs to enter.
 * VEHICLELOCK_LOCKOUT_PLAYER_ONLY = 3,
 * // Vehicle is locked once a player enters, preventing others from entering.
 * VEHICLELOCK_LOCKED_PLAYER_INSIDE = 4,
 * // Vehicle starts in a locked state, but may be unlocked through game events.
 * VEHICLELOCK_LOCKED_INITIALLY = 5,
 * // Forces the vehicle's doors to shut and lock.
 * VEHICLELOCK_FORCE_SHUT_DOORS = 6,
 * // Vehicle is locked but can still be damaged.
 * VEHICLELOCK_LOCKED_BUT_CAN_BE_DAMAGED = 7,
 * // Vehicle is locked, but its trunk/boot remains unlocked.
 * VEHICLELOCK_LOCKED_BUT_BOOT_UNLOCKED = 8,
 * // Vehicle is locked and does not allow passengers, except for the driver.
 * VEHICLELOCK_LOCKED_NO_PASSENGERS = 9,
 * // Vehicle is completely locked, preventing entry entirely, even if previously inside.
 * VEHICLELOCK_CANNOT_ENTER = 10
 * };
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DOORS_LOCKED](?\_0xB664292EAECF7FA6).</strong>
 *
 * Hash: 0x4CDD35D0
 */
export declare function setDoorsLocked(vehicle: number | IVehicle, doorLockStatus: number): void;
/**
 * See eDoorId declared in [`SET_VEHICLE_DOOR_SHUT`](#\_0x93D9BD300D7789E5)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DOOR_BROKEN](?\_0xD4D4F6A4AB575A33).</strong>
 *
 * Hash: 0x8147FEA7
 */
export declare function setDoorBroken(vehicle: number | IVehicle, doorIndex: number, deleteDoor: boolean): void;
/**
 * SET_VEHICLE_NUMBER_PLATE_TEXT
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_NUMBER_PLATE_TEXT](?\_0x95A88F0B409CDA47).</strong>
 *
 * Hash: 0x400F9556
 */
export declare function setNumberPlateText(vehicle: number | IVehicle, plateText: string): void;
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
