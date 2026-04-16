import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * Clear a ped's tasks. Stop animations and other tasks created by scripts.
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_TASKS](?\_0xE1EF3C1216AFF2CD).</strong>
 * 
 * Hash: 0xDE3316AB
 */
export function clearPeds(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedTasks(_ped);
}

/**
 * Immediately stops the pedestrian from whatever it's doing. The difference between this and [CLEAR_PED_TASKS](#\_0xE1EF3C1216AFF2CD) is that this one teleports the ped but does not change the position of the ped.
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_TASKS_IMMEDIATELY](?\_0xAAA34F8A7CB32098).</strong>
 * 
 * Hash: 0xBC045625
 */
export function clearPedsImmediately(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedTasksImmediately(_ped);
}

/**
 * ```
 * Makes the specified ped attack the target ped.
 * p2 should be 0
 * p3 should be 16
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_COMBAT_PED](?\_0xF166E48407BAC484).</strong>
 * 
 * Hash: 0xCB0D8932
 */
export function combatPed(ped: number | IPed, targetPed: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    TaskCombatPed(_ped, _targetPed, 0, 0);
}

/**
 * ```
 * Example:
 * `TASK::TASK_DRIVE_BY(l_467[1\/\*22\*\/], PLAYER::PLAYER_PED_ID(), 0, 0.0, 0.0, 2.0, 300.0, 100, 0, ${firing_pattern_burst_fire_driveby});`
 * Needs working example. Doesn't seem to do anything.
 * I marked p2 as targetVehicle as all these shooting related tasks seem to have that in common.
 * I marked p6 as distanceToShoot as if you think of GTA's Logic with the native SET_VEHICLE_SHOOT natives, it won't shoot till it gets within a certain distance of the target.
 * I marked p7 as pedAccuracy as it seems it's mostly 100 (Completely Accurate), 75, 90, etc. Although this could be the ammo count within the gun, but I highly doubt it. I will change this comment once I find out if it's ammo count or not.
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_DRIVE_BY](?\_0x2F8AF0E82773A171).</strong>
 * 
 * Hash: 0x2B84D1C4
 */
export function driveBy(driverPed: number | IPed, targetPed: number | IPed, targetVehicle: number | IVehicle, targetX: number, targetY: number, targetZ: number, distanceToShoot: number, pedAccuracy: number, firingPattern: number | string): void {
    const _driverPed = driverPed instanceof IPed ? driverPed.handle() : driverPed;
    const _targetPed = targetPed instanceof IPed ? targetPed.handle() : targetPed;
    const _targetVehicle = targetVehicle instanceof IVehicle ? targetVehicle.handle() : targetVehicle;
    if (typeof firingPattern === 'string') firingPattern = GetHashKey(firingPattern)
    TaskDriveBy(_driverPed, _targetPed, _targetVehicle, targetX, targetY, targetZ, distanceToShoot, pedAccuracy, false, firingPattern);
}

/**
 * ```
 * speed 1.0 = walk, 2.0 = run
 * p5 1 = normal, 3 = teleport to vehicle, 8 = normal/carjack ped from seat, 16 = teleport directly into vehicle
 * p6 is always 0
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_ENTER_VEHICLE](?\_0xC20E50AA46D09CA8).</strong>
 * 
 * Hash: 0xB8689B4E
 */
export function enterVehicle(ped: number | IPed, vehicle: number | IVehicle, timeout: number, seatIndex: number, speed: number, flag: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskEnterVehicle(_ped, _vehicle, timeout, seatIndex, speed, flag, undefined);
}

/**
 * TASK_EVERYONE_LEAVE_VEHICLE
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_EVERYONE_LEAVE_VEHICLE](?\_0x7F93691AB4B92272).</strong>
 * 
 * Hash: 0xC1971F30
 */
export function everyoneLeaveVehicle(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskEveryoneLeaveVehicle(_vehicle);
}

/**
 * TASK_GO_STRAIGHT_TO_COORD
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_GO_STRAIGHT_TO_COORD](?\_0xD76B57B44F1E6F8B).</strong>
 * 
 * Hash: 0x80A9E7A7
 */
export function goStraightToCoord(ped: number | IPed, pos: Vector3, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskGoStraightToCoord(_ped, pos.x, pos.y, pos.z, speed, timeout, targetHeading, distanceToSlide);
}

/**
 * Tells a ped to go to a coord by any means.
 * 
 * ```cpp
 * enum eDrivingMode {
 * DF_StopForCars = 1,
 * DF_StopForPeds = 2,
 * DF_SwerveAroundAllCars = 4,
 * DF_SteerAroundStationaryCars = 8,
 * DF_SteerAroundPeds = 16,
 * DF_SteerAroundObjects = 32,
 * DF_DontSteerAroundPlayerPed = 64,
 * DF_StopAtLights = 128,
 * DF_GoOffRoadWhenAvoiding = 256,
 * DF_DriveIntoOncomingTraffic = 512,
 * DF_DriveInReverse = 1024,
 * // If pathfinding fails, cruise randomly instead of going on a straight line
 * DF_UseWanderFallbackInsteadOfStraightLine = 2048,
 * DF_AvoidRestrictedAreas = 4096,
 * // These only work on MISSION_CRUISE
 * DF_PreventBackgroundPathfinding = 8192,
 * DF_AdjustCruiseSpeedBasedOnRoadSpeed = 16384,
 * DF_UseShortCutLinks =  262144,
 * DF_ChangeLanesAroundObstructions = 524288,
 * // cruise tasks ignore this anyway--only used for goto's
 * DF_UseSwitchedOffNodes =  2097152,
 * // if you're going to be primarily driving off road
 * DF_PreferNavmeshRoute =  4194304,
 * // Only works for planes using MISSION_GOTO, will cause them to drive along the ground instead of fly
 * DF_PlaneTaxiMode =  8388608,
 * DF_ForceStraightLine = 16777216,
 * DF_UseStringPullingAtJunctions = 33554432,
 * DF_AvoidHighways = 536870912,
 * DF_ForceJoinInRoadDirection = 1073741824,
 * // Standard driving mode. stops for cars, peds, and lights, goes around stationary obstructions
 * DRIVINGMODE_STOPFORCARS = 786603, // DF_StopForCars|DF_StopForPeds|DF_SteerAroundObjects|DF_SteerAroundStationaryCars|DF_StopAtLights|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,		// Obey lights too
 * // Like the above, but doesn't steer around anything in its way - will only wait instead.
 * DRIVINGMODE_STOPFORCARS_STRICT = 262275, // DF_StopForCars|DF_StopForPeds|DF_StopAtLights|DF_UseShortCutLinks, // Doesn't deviate an inch.
 * // Default "alerted" driving mode. drives around everything, doesn't obey lights
 * DRIVINGMODE_AVOIDCARS = 786469, // DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars,
 * // Very erratic driving. difference between this and AvoidCars is that it doesn't use the brakes at ALL to help with steering
 * DRIVINGMODE_AVOIDCARS_RECKLESS = 786468, // DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,
 * // Smashes through everything
 * DRIVINGMODE_PLOUGHTHROUGH = 262144, // DF_UseShortCutLinks
 * // Drives normally except for the fact that it ignores lights
 * DRIVINGMODE_STOPFORCARS_IGNORELIGHTS = 786475, // DF_StopForCars|DF_SteerAroundStationaryCars|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions
 * // Try to swerve around everything, but stop for lights if necessary
 * DRIVINGMODE_AVOIDCARS_OBEYLIGHTS = 786597, // DF_SwerveAroundAllCars|DF_StopAtLights|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
 * // Swerve around cars, be careful around peds, and stop for lights
 * DRIVINGMODE_AVOIDCARS_STOPFORPEDS_OBEYLIGHTS = 786599 // DF_SwerveAroundAllCars|DF_StopAtLights|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
 * };
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_GO_TO_COORD_ANY_MEANS](?\_0x5BC448CB78FA3E88).</strong>
 * 
 * Hash: 0xF91DF93B
 */
export function goToCoordAnyMeans(ped: number | IPed, pos: Vector3, fMoveBlendRatio: number, vehicle: number | IVehicle, bUseLongRangeVehiclePathing: boolean, drivingFlags: number, fMaxRangeToShootTargets: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskGoToCoordAnyMeans(_ped, pos.x, pos.y, pos.z, fMoveBlendRatio, _vehicle, bUseLongRangeVehiclePathing, drivingFlags, fMaxRangeToShootTargets);
}

/**
 * ```
 * The entity will move towards the target until time is over (duration) or get in target's range (distance). p5 and p6 are unknown, but you could leave p5 = 1073741824 or 100 or even 0 (didn't see any difference but on the decompiled scripts, they use 1073741824 mostly) and p6 = 0
 * Note: I've only tested it on entity -> ped and target -> vehicle. It could work differently on other entities, didn't try it yet.
 * `Example: TASK::TASK_GO_TO_ENTITY(pedHandle, vehicleHandle, 5000, 4.0, 100, 1073741824, 0)`
 * Ped will run towards the vehicle for 5 seconds and stop when time is over or when he gets 4 meters(?) around the vehicle (with duration = -1, the task duration will be ignored).
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_GO_TO_ENTITY](?\_0x6A071245EB0D1882).</strong>
 * 
 * Hash: 0x374827C2
 */
export function goToEntity(entity: number | IEntity, target: number | IEntity, duration: number, distance: number, speed: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _target = target instanceof IEntity ? target.handle() : target;
    TaskGoToEntity(_entity, _target, duration, distance, speed, 0, 0);
}

/**
 * ```
 * In the scripts, p3 was always -1.
 * p3 seems to be duration or timeout of turn animation.
 * Also facingPed can be 0 or -1 so ped will just raise hands up.
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_HANDS_UP](?\_0xF2EAB31979A7F910).</strong>
 * 
 * Hash: 0x8DCC19C5
 */
export function handsUp(ped: number | IPed, duration: number, facingPed: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _facingPed = facingPed instanceof IPed ? facingPed.handle() : facingPed;
    TaskHandsUp(_ped, duration, _facingPed, 0, false);
}

/**
 * Flags are the same flags used in [`TASK_LEAVE_VEHICLE`](#\_0xD3DBCE61A490BE02)
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_LEAVE_ANY_VEHICLE](?\_0x504D54DF3F6F2247).</strong>
 * 
 * Hash: 0xDBDD79FA
 */
export function leaveAnyVehicle(ped: number | IPed, flags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskLeaveAnyVehicle(_ped, 0, flags);
}

/**
 * ```
 * Flags from decompiled scripts:
 * 0 = normal exit and closes door.
 * 1 = normal exit and closes door.
 * 16 = teleports outside, door kept closed.  (This flag does not seem to work for the front seats in buses, NPCs continue to exit normally)
 * 64 = normal exit and closes door, maybe a bit slower animation than 0.
 * 256 = normal exit but does not close the door.
 * 4160 = ped is throwing himself out, even when the vehicle is still.
 * 262144 = ped moves to passenger seat first, then exits normally
 * Others to be tried out: 320, 512, 131072.
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_LEAVE_VEHICLE](?\_0xD3DBCE61A490BE02).</strong>
 * 
 * Hash: 0x7B1141C6
 */
export function leaveVehicle(ped: number | IPed, vehicle: number | IVehicle, flags: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskLeaveVehicle(_ped, _vehicle, flags);
}

/**
 * [Animations list](https://alexguirre.github.io/animations-list/)
 * 
 * ```cpp
 * enum eScriptedAnimFlags
 * {
 * AF_LOOPING = 1,
 * AF_HOLD_LAST_FRAME = 2,
 * AF_REPOSITION_WHEN_FINISHED = 4,
 * AF_NOT_INTERRUPTABLE = 8,
 * AF_UPPERBODY = 16,
 * AF_SECONDARY = 32,
 * AF_REORIENT_WHEN_FINISHED = 64,
 * AF_ABORT_ON_PED_MOVEMENT = 128,
 * AF_ADDITIVE = 256,
 * AF_TURN_OFF_COLLISION = 512,
 * AF_OVERRIDE_PHYSICS = 1024,
 * AF_IGNORE_GRAVITY = 2048,
 * AF_EXTRACT_INITIAL_OFFSET = 4096,
 * AF_EXIT_AFTER_INTERRUPTED = 8192,
 * AF_TAG_SYNC_IN = 16384,
 * AF_TAG_SYNC_OUT = 32768,
 * AF_TAG_SYNC_CONTINUOUS = 65536,
 * AF_FORCE_START = 131072,
 * AF_USE_KINEMATIC_PHYSICS = 262144,
 * AF_USE_MOVER_EXTRACTION = 524288,
 * AF_HIDE_WEAPON = 1048576,
 * AF_ENDS_IN_DEAD_POSE = 2097152,
 * AF_ACTIVATE_RAGDOLL_ON_COLLISION = 4194304,
 * AF_DONT_EXIT_ON_DEATH = 8388608,
 * AF_ABORT_ON_WEAPON_DAMAGE = 16777216,
 * AF_DISABLE_FORCED_PHYSICS_UPDATE = 33554432,
 * AF_PROCESS_ATTACHMENTS_ON_START = 67108864,
 * AF_EXPAND_PED_CAPSULE_FROM_SKELETON = 134217728,
 * AF_USE_ALTERNATIVE_FP_ANIM = 268435456,
 * AF_BLENDOUT_WRT_LAST_FRAME = 536870912,
 * AF_USE_FULL_BLENDING = 1073741824
 * }
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_PLAY_ANIM](?\_0xEA47FE3719165B94).</strong>
 * 
 * Hash: 0x5AB552C6
 */
export function playAnim(ped: number | IPed, animDictionary: string, animationName: string, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: number, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPlayAnim(_ped, animDictionary, animationName, blendInSpeed, blendOutSpeed, duration, flag, playbackRate, lockX, lockY, lockZ);
}

/**
 * Similar in functionality to [`TASK_PLAY_ANIM`](#\_0xEA47FE3719165B94), except the position and rotation parameters let you specify the initial position and rotation of the task. The ped is teleported to the position specified.
 * [Animations list](https://alexguirre.github.io/animations-list/)
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_PLAY_ANIM_ADVANCED](?\_0x83CDB10EA29B370B).</strong>
 * 
 * Hash: 0x3DDEB0E6
 */
export function playAnimAdvanced(ped: number | IPed, animDictionary: string, animationName: string, pos: Vector3, rot: Vector3, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: any, animTime: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskPlayAnimAdvanced(_ped, animDictionary, animationName, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, blendInSpeed, blendOutSpeed, duration, flag, animTime, undefined, undefined);
}

/**
 * TASK_REACT_AND_FLEE_PED
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_REACT_AND_FLEE_PED](?\_0x72C896464915D1B1).</strong>
 * 
 * Hash: 0x8A632BD8
 */
export function reactAndFleePed(ped: number | IPed, fleeTarget: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _fleeTarget = fleeTarget instanceof IPed ? fleeTarget.handle() : fleeTarget;
    TaskReactAndFleePed(_ped, _fleeTarget);
}

/**
 * ```
 * Firing Pattern Hash Information: https://pastebin.com/Px036isB
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_SHOOT_AT_COORD](?\_0x46A6CC01E0826106).</strong>
 * 
 * Hash: 0x601C22E3
 */
export function shootAtCoord(ped: number | IPed, pos: Vector3, duration: number, firingPattern: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof firingPattern === 'string') firingPattern = GetHashKey(firingPattern)
    TaskShootAtCoord(_ped, pos.x, pos.y, pos.z, duration, firingPattern);
}

/**
 * ```
 * //this part of the code is to determine at which entity the player is aiming, for example if you want to create a mod where you give orders to peds
 * Entity aimedentity;
 * `Player player = PLAYER::PLAYER_ID();`
 * `PLAYER::_GET_AIMED_ENTITY(player, &aimedentity);`
 * //bg is an array of peds
 * `TASK::TASK_SHOOT_AT_ENTITY(bg[i], aimedentity, 5000, MISC::GET_HASH_KEY("FIRING_PATTERN_FULL_AUTO"));`
 * in practical usage, getting the entity the player is aiming at and then task the peds to shoot at the entity, at a button press event would be better.
 * Firing Pattern Hash Information: https://pastebin.com/Px036isB
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_SHOOT_AT_ENTITY](?\_0x08DA95E8298AE772).</strong>
 * 
 * Hash: 0xAC0631C9
 */
export function shootAtEntity(entity: number | IEntity, target: number | IEntity, duration: number, firingPattern: number | string): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _target = target instanceof IEntity ? target.handle() : target;
    if (typeof firingPattern === 'string') firingPattern = GetHashKey(firingPattern)
    TaskShootAtEntity(_entity, _target, duration, firingPattern);
}

/**
 * ```
 * NativeDB Introduced: v323
 * ```
 * 
 * Warp a ped into a vehicle.
 * **Note**: It's better to use [`TASK_ENTER_VEHICLE`](#\_0xC20E50AA46D09CA8) with the flag "warp" flag instead of this native.
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_WARP_PED_INTO_VEHICLE](?\_0x9A7D091411C5F684).</strong>
 * 
 * Hash: 0x65D4A35D
 */
export function warpPedIntoVehicle(ped: number | IPed, vehicle: number | IVehicle, seatIndex: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    TaskWarpPedIntoVehicle(_ped, _vehicle, seatIndex);
}

