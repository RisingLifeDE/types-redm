import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * ```
 * Applies an Item from a PedDecorationCollection to a ped. These include tattoos and shirt decals.
 * collection - PedDecorationCollection filename hash
 * overlay - Item name hash
 * Example:
 * Entry inside "mpbeach_overlays.xml" -
 * <Item>
 * <uvPos x="0.500000" y="0.500000" />
 * <scale x="0.600000" y="0.500000" />
 * <rotation value="0.000000" />
 * <nameHash>FM_Hair_Fuzz</nameHash>
 * <txdHash>mp_hair_fuzz</txdHash>
 * <txtHash>mp_hair_fuzz</txtHash>
 * <zone>ZONE_HEAD</zone>
 * <type>TYPE_TATTOO</type>
 * <faction>FM</faction>
 * <garment>All</garment>
 * <gender>GENDER_DONTCARE</gender>
 * <award />
 * <awardLevel />
 * </Item>
 * Code:
 * `PED::_0x5F5D1665E352A839(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("mpbeach_overlays"), MISC::GET_HASH_KEY("fm_hair_fuzz"))`
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [ADD_PED_DECORATION_FROM_HASHES](?\_0x5F5D1665E352A839).</strong>
 * 
 * Hash: 0x70559AC7
 */
export function addDecorationFromHashes(ped: number | IPed, collection: number | string, overlay: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof collection === 'string') collection = GetHashKey(collection)
    if (typeof overlay === 'string') overlay = GetHashKey(overlay)
    AddPedDecorationFromHashes(_ped, collection, overlay);
}

/**
 * CLEAR_PED_PROP
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_PROP](?\_0x0943E5B8E078E76E).</strong>
 * 
 * Hash: 0x2D23D743
 */
export function clearProp(ped: number | IPed, propId: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedProp(_ped, propId);
}

/**
 * CLEAR_PED_SECONDARY_TASK
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_SECONDARY_TASK](?\_0x176CECF6F920D707).</strong>
 * 
 * Hash: 0xA635F451
 */
export function clearSecondaryTask(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    ClearPedSecondaryTask(_ped);
}

/**
 * Creates a ped (biped character, pedestrian, actor) with the specified model at the specified position and heading.
 * This ped will initially be owned by the creating script as a mission entity, and the model should be loaded already
 * (e.g. using REQUEST_MODEL).
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [CREATE_PED](?\_0xD49F9B0955C367DE).</strong>
 * 
 * Hash: 0x389EF71
 */
export function create(pedType: number, modelHash: number | string, pos: Vector3, heading: number, isNetwork: boolean, bScriptHostPed: boolean): number {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return CreatePed(pedType, modelHash, pos.x, pos.y, pos.z, heading, isNetwork, bScriptHostPed);
}

/**
 * CREATE_PED_INSIDE_VEHICLE
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [CREATE_PED_INSIDE_VEHICLE](?\_0x7DD959874C1FD534).</strong>
 * 
 * Hash: 0x3000F092
 */
export function createInsideVehicle(vehicle: number | IVehicle, pedType: number, modelHash: number | string, seat: number, isNetwork: boolean, bScriptHostPed: boolean): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return CreatePedInsideVehicle(_vehicle, pedType, modelHash, seat, isNetwork, bScriptHostPed);
}

/**
 * Returns all peds handles known to the server.
 * The data returned adheres to the following layout:
 * 
 * ```
 * [127, 42, 13, 37]
 * ```
 * 
 * Hash: 0xB8584FEF
 */
export function getAlls(): number {
    return GetAllPeds();
}

/**
 * Returns the hash of weapon the Ped is currently using.
 * 
 * Hash: 0xB0237302
 */
export function getCurrentWeapon(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetCurrentPedWeapon(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xF7C6792D
 */
export function getLastInVehicleSeat(vehicle: number | IVehicle, seatIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetLastPedInVehicleSeat(_vehicle, seatIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x2CE311A7
 */
export function getArmour(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedArmour(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x63458C27
 */
export function getCauseOfDeath(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedCauseOfDeath(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xC182F76E
 */
export function getDesiredHeading(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedDesiredHeading(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x388FDE9A
 */
export function getInVehicleSeat(vehicle: number | IVehicle, seatIndex: number): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetPedInVehicleSeat(_vehicle, seatIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xA45B6C8D
 */
export function getMaxHealth(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedMaxHealth(_ped);
}

/**
 * Gets the current relationship group hash of a ped.
 * 
 * Hash: 0x354F283C
 */
export function getRelationshipGroupHash(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedRelationshipGroupHash(_ped);
}

/**
 * Gets the script task command currently assigned to the ped.
 * 
 * Hash: 0x84FE084
 */
export function getScriptTaskCommand(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedScriptTaskCommand(_ped);
}

/**
 * Gets the stage of the peds scripted task.
 * 
 * Hash: 0x44B0E5E2
 */
export function getScriptTaskStage(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedScriptTaskStage(_ped);
}

/**
 * Get the last entity that damaged the ped. This native is used server side when using OneSync.
 * 
 * Hash: 0x535DB43F
 */
export function getSourceOfDamage(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedSourceOfDamage(_ped);
}

/**
 * Get the entity that killed the ped. This native is used server side when using OneSync.
 * 
 * Hash: 0x84ADF9EB
 */
export function getSourceOfDeath(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedSourceOfDeath(_ped);
}

/**
 * Gets the type of a ped's specific task given an index of the CPedTaskSpecificDataNode nodes.
 * A ped will typically have a task at index 0, if a ped has multiple tasks at once they will be in the order 0, 1, 2, etc.
 * 
 * Hash: 0x7F4563D3
 */
export function getSpecificTaskType(ped: number | IPed, index: number): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedSpecificTaskType(_ped, index);
}

/**
 * No comment provided
 * 
 * Hash: 0x40321B83
 */
export function getStealthMovement(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedStealthMovement(_ped);
}

/**
 * An alias of [GET_CURRENT_PED_WEAPON](#\_0xB0237302).
 * 
 * Note, the client-side [GET_SELECTED_PED_WEAPON](#\_0x0A6DB4965674D243) native returns the weapon selected via the HUD (weapon wheel). This data is not available to FXServer.
 * 
 * Hash: 0xD240123E
 */
export function getSelectedWeapon(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetSelectedPedWeapon(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x25865633
 */
export function isHandcuffed(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedHandcuffed(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xC833BBE1
 */
export function isRagdoll(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedRagdoll(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xEFEED13C
 */
export function isStrafing(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedStrafing(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x5AE7EDA2
 */
export function isUsingActionMode(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedUsingActionMode(_ped);
}

/**
 * SET_CURRENT_PED_WEAPON
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_CURRENT_PED_WEAPON](?\_0xADF692B254977C0C).</strong>
 * 
 * Hash: 0xB8278882
 */
export function setCurrentWeapon(ped: number | IPed, weaponHash: number | string, bForceInHand: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string') weaponHash = GetHashKey(weaponHash)
    SetCurrentPedWeapon(_ped, weaponHash, bForceInHand);
}

/**
 * ```
 * NativeDB Added Parameter 4: BOOL p3
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_AMMO](?\_0x14E56BC5B5DB6A19).</strong>
 * 
 * Hash: 0xBF90DF1A
 */
export function setAmmo(ped: number | IPed, weaponHash: number | string, ammo: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string') weaponHash = GetHashKey(weaponHash)
    SetPedAmmo(_ped, weaponHash, ammo);
}

/**
 * ```
 * Sets the armor of the specified ped.
 * ped: The Ped to set the armor of.
 * amount: A value between 0 and 100 indicating the value to set the Ped's armor to.
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_ARMOUR](?\_0xCEA04D83135264CC).</strong>
 * 
 * Hash: 0x4E3A0CC4
 */
export function setArmour(ped: number | IPed, amount: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedArmour(_ped, amount);
}

/**
 * SET_PED_CAN_RAGDOLL
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_CAN_RAGDOLL](?\_0xB128377056A54E2A).</strong>
 * 
 * Hash: 0xCF1384C4
 */
export function setCanRagdoll(ped: number | IPed, toggle: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCanRagdoll(_ped, toggle);
}

/**
 * This native is used to set component variation on a ped. Components, drawables and textures IDs are related to the ped model.
 * 
 * ### MP Freemode list of components
 * 
 * **0**: Face
 * **1**: Mask
 * **2**: Hair
 * **3**: Torso
 * **4**: Leg
 * **5**: Parachute / bag
 * **6**: Shoes
 * **7**: Accessory
 * **8**: Undershirt
 * **9**: Kevlar
 * **10**: Badge
 * **11**: Torso 2
 * List of Component IDs
 * 
 * ```cpp
 * // Components
 * enum ePedVarComp
 * {
 * PV_COMP_INVALID = 0xFFFFFFFF,
 * PV_COMP_HEAD = 0, // "HEAD"
 * PV_COMP_BERD = 1, // "BEARD"
 * PV_COMP_HAIR = 2, // "HAIR"
 * PV_COMP_UPPR = 3, // "UPPER"
 * PV_COMP_LOWR = 4, // "LOWER"
 * PV_COMP_HAND = 5, // "HAND"
 * PV_COMP_FEET = 6, // "FEET"
 * PV_COMP_TEEF = 7, // "TEETH"
 * PV_COMP_ACCS = 8, // "ACCESSORIES"
 * PV_COMP_TASK = 9, // "TASK"
 * PV_COMP_DECL = 10, // "DECL"
 * PV_COMP_JBIB = 11, // "JBIB"
 * PV_COMP_MAX = 12,
 * };
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_COMPONENT_VARIATION](?\_0x262B14F48D29DE80).</strong>
 * 
 * Hash: 0xD4F7B05C
 */
export function setComponentVariation(ped: number | IPed, componentId: number, drawableId: number, textureId: number, paletteId: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedComponentVariation(_ped, componentId, drawableId, textureId, paletteId);
}

/**
 * ```cpp
 * // Potential names and hash collisions included as comments
 * enum ePedConfigFlags {
 * CPED_CONFIG_FLAG_CreatedByFactory = 0,
 * CPED_CONFIG_FLAG_CanBeShotInVehicle = 1,
 * CPED_CONFIG_FLAG_NoCriticalHits = 2,
 * CPED_CONFIG_FLAG_DrownsInWater = 3,
 * CPED_CONFIG_FLAG_DrownsInSinkingVehicle = 4,
 * CPED_CONFIG_FLAG_DiesInstantlyWhenSwimming = 5,
 * CPED_CONFIG_FLAG_HasBulletProofVest = 6,
 * CPED_CONFIG_FLAG_UpperBodyDamageAnimsOnly = 7,
 * CPED_CONFIG_FLAG_NeverFallOffSkis = 8,
 * CPED_CONFIG_FLAG_NeverEverTargetThisPed = 9,
 * CPED_CONFIG_FLAG_ThisPedIsATargetPriority = 10,
 * CPED_CONFIG_FLAG_TargettableWithNoLos = 11,
 * CPED_CONFIG_FLAG_DoesntListenToPlayerGroupCommands = 12,
 * CPED_CONFIG_FLAG_NeverLeavesGroup = 13,
 * CPED_CONFIG_FLAG_DoesntDropWeaponsWhenDead = 14,
 * CPED_CONFIG_FLAG_SetDelayedWeaponAsCurrent = 15,
 * CPED_CONFIG_FLAG_KeepTasksAfterCleanUp = 16,
 * CPED_CONFIG_FLAG_BlockNonTemporaryEvents = 17,
 * CPED_CONFIG_FLAG_HasAScriptBrain = 18,
 * CPED_CONFIG_FLAG_WaitingForScriptBrainToLoad = 19,
 * CPED_CONFIG_FLAG_AllowMedicsToReviveMe = 20,
 * CPED_CONFIG_FLAG_MoneyHasBeenGivenByScript = 21,
 * CPED_CONFIG_FLAG_NotAllowedToCrouch = 22,
 * CPED_CONFIG_FLAG_DeathPickupsPersist = 23,
 * CPED_CONFIG_FLAG_IgnoreSeenMelee = 24,
 * CPED_CONFIG_FLAG_ForceDieIfInjured = 25,
 * CPED_CONFIG_FLAG_DontDragMeOutCar = 26,
 * CPED_CONFIG_FLAG_StayInCarOnJack = 27,
 * CPED_CONFIG_FLAG_ForceDieInCar = 28,
 * CPED_CONFIG_FLAG_GetOutUndriveableVehicle = 29,
 * CPED_CONFIG_FLAG_WillRemainOnBoatAfterMissionEnds = 30,
 * CPED_CONFIG_FLAG_DontStoreAsPersistent = 31,
 * CPED_CONFIG_FLAG_WillFlyThroughWindscreen = 32,
 * CPED_CONFIG_FLAG_DieWhenRagdoll = 33,
 * CPED_CONFIG_FLAG_HasHelmet = 34,
 * CPED_CONFIG_FLAG_UseHelmet = 35,
 * CPED_CONFIG_FLAG_DontTakeOffHelmet = 36,
 * CPED_CONFIG_FLAG_HideInCutscene = 37,
 * CPED_CONFIG_FLAG_PedIsEnemyToPlayer = 38,
 * CPED_CONFIG_FLAG_DisableEvasiveDives = 39,
 * CPED_CONFIG_FLAG_PedGeneratesDeadBodyEvents = 40,
 * CPED_CONFIG_FLAG_DontAttackPlayerWithoutWantedLevel = 41,
 * CPED_CONFIG_FLAG_DontInfluenceWantedLevel = 42,
 * CPED_CONFIG_FLAG_DisablePlayerLockon = 43,
 * CPED_CONFIG_FLAG_DisableLockonToRandomPeds = 44,
 * CPED_CONFIG_FLAG_AllowLockonToFriendlyPlayers = 45,
 * _0xDB115BFA = 46,
 * CPED_CONFIG_FLAG_PedBeingDeleted = 47,
 * CPED_CONFIG_FLAG_BlockWeaponSwitching = 48,
 * CPED_CONFIG_FLAG_BlockGroupPedAimedAtResponse = 49,
 * CPED_CONFIG_FLAG_WillFollowLeaderAnyMeans = 50,
 * CPED_CONFIG_FLAG_BlippedByScript = 51,
 * CPED_CONFIG_FLAG_DrawRadarVisualField = 52,
 * CPED_CONFIG_FLAG_StopWeaponFiringOnImpact = 53,
 * CPED_CONFIG_FLAG_DissableAutoFallOffTests = 54,
 * CPED_CONFIG_FLAG_SteerAroundDeadBodies = 55,
 * CPED_CONFIG_FLAG_ConstrainToNavMesh = 56,
 * CPED_CONFIG_FLAG_SyncingAnimatedProps = 57,
 * CPED_CONFIG_FLAG_IsFiring = 58,
 * CPED_CONFIG_FLAG_WasFiring = 59,
 * CPED_CONFIG_FLAG_IsStanding = 60,
 * CPED_CONFIG_FLAG_WasStanding = 61,
 * CPED_CONFIG_FLAG_InVehicle = 62,
 * CPED_CONFIG_FLAG_OnMount = 63,
 * CPED_CONFIG_FLAG_AttachedToVehicle = 64,
 * CPED_CONFIG_FLAG_IsSwimming = 65,
 * CPED_CONFIG_FLAG_WasSwimming = 66,
 * CPED_CONFIG_FLAG_IsSkiing = 67,
 * CPED_CONFIG_FLAG_IsSitting = 68,
 * CPED_CONFIG_FLAG_KilledByStealth = 69,
 * CPED_CONFIG_FLAG_KilledByTakedown = 70,
 * CPED_CONFIG_FLAG_Knockedout = 71,
 * CPED_CONFIG_FLAG_ClearRadarBlipOnDeath = 72,
 * CPED_CONFIG_FLAG_JustGotOffTrain = 73,
 * CPED_CONFIG_FLAG_JustGotOnTrain = 74,
 * CPED_CONFIG_FLAG_UsingCoverPoint = 75,
 * CPED_CONFIG_FLAG_IsInTheAir = 76,
 * CPED_CONFIG_FLAG_KnockedUpIntoAir = 77,
 * CPED_CONFIG_FLAG_IsAimingGun = 78,
 * CPED_CONFIG_FLAG_HasJustLeftCar = 79,
 * CPED_CONFIG_FLAG_TargetWhenInjuredAllowed = 80,
 * CPED_CONFIG_FLAG_CurrLeftFootCollNM = 81,
 * CPED_CONFIG_FLAG_PrevLeftFootCollNM = 82,
 * CPED_CONFIG_FLAG_CurrRightFootCollNM = 83,
 * CPED_CONFIG_FLAG_PrevRightFootCollNM = 84,
 * CPED_CONFIG_FLAG_HasBeenBumpedInCar = 85,
 * CPED_CONFIG_FLAG_InWaterTaskQuitToClimbLadder = 86,
 * CPED_CONFIG_FLAG_NMTwoHandedWeaponBothHandsConstrained = 87,
 * CPED_CONFIG_FLAG_CreatedBloodPoolTimer = 88,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromAnyPedImpact = 89,
 * CPED_CONFIG_FLAG_GroupPedFailedToEnterCover = 90,
 * CPED_CONFIG_FLAG_AlreadyChattedOnPhone = 91,
 * CPED_CONFIG_FLAG_AlreadyReactedToPedOnRoof = 92,
 * CPED_CONFIG_FLAG_ForcePedLoadCover = 93,
 * CPED_CONFIG_FLAG_BlockCoweringInCover = 94,
 * CPED_CONFIG_FLAG_BlockPeekingInCover = 95,
 * CPED_CONFIG_FLAG_JustLeftCarNotCheckedForDoors = 96,
 * CPED_CONFIG_FLAG_VaultFromCover = 97,
 * CPED_CONFIG_FLAG_AutoConversationLookAts = 98,
 * CPED_CONFIG_FLAG_UsingCrouchedPedCapsule = 99,
 * CPED_CONFIG_FLAG_HasDeadPedBeenReported = 100,
 * CPED_CONFIG_FLAG_ForcedAim = 101,
 * CPED_CONFIG_FLAG_SteersAroundPeds = 102,
 * CPED_CONFIG_FLAG_SteersAroundObjects = 103,
 * CPED_CONFIG_FLAG_OpenDoorArmIK = 104,
 * CPED_CONFIG_FLAG_ForceReload = 105,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromVehicleImpact = 106,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromBulletImpact = 107,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromExplosions = 108,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromFire = 109,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromElectrocution = 110,
 * CPED_CONFIG_FLAG_IsBeingDraggedToSafety = 111,
 * CPED_CONFIG_FLAG_HasBeenDraggedToSafety = 112,
 * CPED_CONFIG_FLAG_KeepWeaponHolsteredUnlessFired = 113,
 * CPED_CONFIG_FLAG_ForceScriptControlledKnockout = 114,
 * CPED_CONFIG_FLAG_FallOutOfVehicleWhenKilled = 115,
 * CPED_CONFIG_FLAG_GetOutBurningVehicle = 116,
 * CPED_CONFIG_FLAG_BumpedByPlayer = 117,
 * CPED_CONFIG_FLAG_RunFromFiresAndExplosions = 118,
 * CPED_CONFIG_FLAG_TreatAsPlayerDuringTargeting = 119,
 * CPED_CONFIG_FLAG_IsHandCuffed = 120,
 * CPED_CONFIG_FLAG_IsAnkleCuffed = 121,
 * CPED_CONFIG_FLAG_DisableMelee = 122,
 * CPED_CONFIG_FLAG_DisableUnarmedDrivebys = 123,
 * CPED_CONFIG_FLAG_JustGetsPulledOutWhenElectrocuted = 124,
 * CPED_CONFIG_FLAG_UNUSED_REPLACE_ME = 125,
 * CPED_CONFIG_FLAG_WillNotHotwireLawEnforcementVehicle = 126,
 * CPED_CONFIG_FLAG_WillCommandeerRatherThanJack = 127,
 * CPED_CONFIG_FLAG_CanBeAgitated = 128,
 * CPED_CONFIG_FLAG_ForcePedToFaceLeftInCover = 129,
 * CPED_CONFIG_FLAG_ForcePedToFaceRightInCover = 130,
 * CPED_CONFIG_FLAG_BlockPedFromTurningInCover = 131,
 * CPED_CONFIG_FLAG_KeepRelationshipGroupAfterCleanUp = 132,
 * CPED_CONFIG_FLAG_ForcePedToBeDragged = 133,
 * CPED_CONFIG_FLAG_PreventPedFromReactingToBeingJacked = 134,
 * CPED_CONFIG_FLAG_IsScuba = 135,
 * CPED_CONFIG_FLAG_WillArrestRatherThanJack = 136,
 * CPED_CONFIG_FLAG_RemoveDeadExtraFarAway = 137,
 * CPED_CONFIG_FLAG_RidingTrain = 138,
 * CPED_CONFIG_FLAG_ArrestResult = 139,
 * CPED_CONFIG_FLAG_CanAttackFriendly = 140,
 * CPED_CONFIG_FLAG_WillJackAnyPlayer = 141,
 * CPED_CONFIG_FLAG_BumpedByPlayerVehicle = 142,
 * CPED_CONFIG_FLAG_DodgedPlayerVehicle = 143,
 * CPED_CONFIG_FLAG_WillJackWantedPlayersRatherThanStealCar = 144,
 * CPED_CONFIG_FLAG_NoCopWantedAggro = 145,
 * CPED_CONFIG_FLAG_DisableLadderClimbing = 146,
 * CPED_CONFIG_FLAG_StairsDetected = 147,
 * CPED_CONFIG_FLAG_SlopeDetected = 148,
 * CPED_CONFIG_FLAG_HelmetHasBeenShot = 149,
 * CPED_CONFIG_FLAG_CowerInsteadOfFlee = 150,
 * CPED_CONFIG_FLAG_CanActivateRagdollWhenVehicleUpsideDown = 151,
 * CPED_CONFIG_FLAG_AlwaysRespondToCriesForHelp = 152,
 * CPED_CONFIG_FLAG_DisableBloodPoolCreation = 153,
 * CPED_CONFIG_FLAG_ShouldFixIfNoCollision = 154,
 * CPED_CONFIG_FLAG_CanPerformArrest = 155,
 * CPED_CONFIG_FLAG_CanPerformUncuff = 156,
 * CPED_CONFIG_FLAG_CanBeArrested = 157,
 * CPED_CONFIG_FLAG_MoverConstrictedByOpposingCollisions = 158,
 * CPED_CONFIG_FLAG_PlayerPreferFrontSeatMP = 159,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromImpactObject = 160,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromMelee = 161,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromWaterJet = 162,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromDrowning = 163,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromFalling = 164,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromRubberBullet = 165,
 * CPED_CONFIG_FLAG_IsInjured = 166,
 * CPED_CONFIG_FLAG_DontEnterVehiclesInPlayersGroup = 167,
 * CPED_CONFIG_FLAG_SwimmingTasksRunning = 168,
 * CPED_CONFIG_FLAG_PreventAllMeleeTaunts = 169,
 * CPED_CONFIG_FLAG_ForceDirectEntry = 170,
 * CPED_CONFIG_FLAG_AlwaysSeeApproachingVehicles = 171,
 * CPED_CONFIG_FLAG_CanDiveAwayFromApproachingVehicles = 172,
 * CPED_CONFIG_FLAG_AllowPlayerToInterruptVehicleEntryExit = 173,
 * CPED_CONFIG_FLAG_OnlyAttackLawIfPlayerIsWanted = 174,
 * CPED_CONFIG_FLAG_PlayerInContactWithKinematicPed = 175,
 * CPED_CONFIG_FLAG_PlayerInContactWithSomethingOtherThanKinematicPed = 176,
 * CPED_CONFIG_FLAG_PedsJackingMeDontGetIn = 177,
 * CPED_CONFIG_FLAG_AdditionalRappellingPed = 178,
 * CPED_CONFIG_FLAG_PedIgnoresAnimInterruptEvents = 179,
 * CPED_CONFIG_FLAG_IsInCustody = 180,
 * CPED_CONFIG_FLAG_ForceStandardBumpReactionThresholds = 181,
 * CPED_CONFIG_FLAG_LawWillOnlyAttackIfPlayerIsWanted = 182,
 * CPED_CONFIG_FLAG_IsAgitated = 183,
 * CPED_CONFIG_FLAG_PreventAutoShuffleToDriversSeat = 184,
 * CPED_CONFIG_FLAG_UseKinematicModeWhenStationary = 185,
 * CPED_CONFIG_FLAG_EnableWeaponBlocking = 186,
 * CPED_CONFIG_FLAG_HasHurtStarted = 187,
 * CPED_CONFIG_FLAG_DisableHurt = 188,
 * CPED_CONFIG_FLAG_PlayerIsWeird = 189,
 * CPED_CONFIG_FLAG_PedHadPhoneConversation = 190,
 * CPED_CONFIG_FLAG_BeganCrossingRoad = 191,
 * CPED_CONFIG_FLAG_WarpIntoLeadersVehicle = 192,
 * CPED_CONFIG_FLAG_DoNothingWhenOnFootByDefault = 193,
 * CPED_CONFIG_FLAG_UsingScenario = 194,
 * CPED_CONFIG_FLAG_VisibleOnScreen = 195,
 * CPED_CONFIG_FLAG_DontCollideWithKinematic = 196,
 * CPED_CONFIG_FLAG_ActivateOnSwitchFromLowPhysicsLod = 197,
 * CPED_CONFIG_FLAG_DontActivateRagdollOnPedCollisionWhenDead = 198,
 * CPED_CONFIG_FLAG_DontActivateRagdollOnVehicleCollisionWhenDead = 199,
 * CPED_CONFIG_FLAG_HasBeenInArmedCombat = 200,
 * CPED_CONFIG_FLAG_UseDiminishingAmmoRate = 201,
 * CPED_CONFIG_FLAG_Avoidance_Ignore_All = 202,
 * CPED_CONFIG_FLAG_Avoidance_Ignored_by_All = 203,
 * CPED_CONFIG_FLAG_Avoidance_Ignore_Group1 = 204,
 * CPED_CONFIG_FLAG_Avoidance_Member_of_Group1 = 205,
 * CPED_CONFIG_FLAG_ForcedToUseSpecificGroupSeatIndex = 206,
 * CPED_CONFIG_FLAG_LowPhysicsLodMayPlaceOnNavMesh = 207,
 * CPED_CONFIG_FLAG_DisableExplosionReactions = 208,
 * CPED_CONFIG_FLAG_DodgedPlayer = 209,
 * CPED_CONFIG_FLAG_WaitingForPlayerControlInterrupt = 210,
 * CPED_CONFIG_FLAG_ForcedToStayInCover = 211,
 * CPED_CONFIG_FLAG_GeneratesSoundEvents = 212,
 * CPED_CONFIG_FLAG_ListensToSoundEvents = 213,
 * CPED_CONFIG_FLAG_AllowToBeTargetedInAVehicle = 214,
 * CPED_CONFIG_FLAG_WaitForDirectEntryPointToBeFreeWhenExiting = 215,
 * CPED_CONFIG_FLAG_OnlyRequireOnePressToExitVehicle = 216,
 * CPED_CONFIG_FLAG_ForceExitToSkyDive = 217,
 * CPED_CONFIG_FLAG_SteersAroundVehicles = 218,
 * CPED_CONFIG_FLAG_AllowPedInVehiclesOverrideTaskFlags = 219,
 * CPED_CONFIG_FLAG_DontEnterLeadersVehicle = 220,
 * CPED_CONFIG_FLAG_DisableExitToSkyDive = 221,
 * CPED_CONFIG_FLAG_ScriptHasDisabledCollision = 222,
 * CPED_CONFIG_FLAG_UseAmbientModelScaling = 223,
 * CPED_CONFIG_FLAG_DontWatchFirstOnNextHurryAway = 224,
 * CPED_CONFIG_FLAG_DisablePotentialToBeWalkedIntoResponse = 225,
 * CPED_CONFIG_FLAG_DisablePedAvoidance = 226,
 * CPED_CONFIG_FLAG_ForceRagdollUponDeath = 227,
 * CPED_CONFIG_FLAG_CanLosePropsOnDamage = 228,
 * CPED_CONFIG_FLAG_DisablePanicInVehicle = 229,
 * CPED_CONFIG_FLAG_AllowedToDetachTrailer = 230,
 * CPED_CONFIG_FLAG_HasShotBeenReactedToFromFront = 231,
 * CPED_CONFIG_FLAG_HasShotBeenReactedToFromBack = 232,
 * CPED_CONFIG_FLAG_HasShotBeenReactedToFromLeft = 233,
 * CPED_CONFIG_FLAG_HasShotBeenReactedToFromRight = 234,
 * CPED_CONFIG_FLAG_AllowBlockDeadPedRagdollActivation = 235,
 * CPED_CONFIG_FLAG_IsHoldingProp = 236,
 * CPED_CONFIG_FLAG_BlocksPathingWhenDead = 237,
 * CPED_CONFIG_FLAG_ForcePlayNormalScenarioExitOnNextScriptCommand = 238,
 * CPED_CONFIG_FLAG_ForcePlayImmediateScenarioExitOnNextScriptCommand = 239,
 * CPED_CONFIG_FLAG_ForceSkinCharacterCloth = 240,
 * CPED_CONFIG_FLAG_LeaveEngineOnWhenExitingVehicles = 241,
 * CPED_CONFIG_FLAG_PhoneDisableTextingAnimations = 242,
 * CPED_CONFIG_FLAG_PhoneDisableTalkingAnimations = 243,
 * CPED_CONFIG_FLAG_PhoneDisableCameraAnimations = 244,
 * CPED_CONFIG_FLAG_DisableBlindFiringInShotReactions = 245,
 * CPED_CONFIG_FLAG_AllowNearbyCoverUsage = 246,
 * CPED_CONFIG_FLAG_InStrafeTransition = 247,
 * CPED_CONFIG_FLAG_CanPlayInCarIdles = 248,
 * CPED_CONFIG_FLAG_CanAttackNonWantedPlayerAsLaw = 249,
 * CPED_CONFIG_FLAG_WillTakeDamageWhenVehicleCrashes = 250,
 * CPED_CONFIG_FLAG_AICanDrivePlayerAsRearPassenger = 251,
 * CPED_CONFIG_FLAG_PlayerCanJackFriendlyPlayers = 252,
 * CPED_CONFIG_FLAG_OnStairs = 253,
 * CPED_CONFIG_FLAG_SimulatingAiming = 254,
 * CPED_CONFIG_FLAG_AIDriverAllowFriendlyPassengerSeatEntry = 255,
 * CPED_CONFIG_FLAG_ParentCarIsBeingRemoved = 256,
 * CPED_CONFIG_FLAG_AllowMissionPedToUseInjuredMovement = 257,
 * CPED_CONFIG_FLAG_CanLoseHelmetOnDamage = 258,
 * CPED_CONFIG_FLAG_NeverDoScenarioExitProbeChecks = 259,
 * CPED_CONFIG_FLAG_SuppressLowLODRagdollSwitchWhenCorpseSettles = 260,
 * CPED_CONFIG_FLAG_PreventUsingLowerPrioritySeats = 261,
 * CPED_CONFIG_FLAG_JustLeftVehicleNeedsReset = 262,
 * CPED_CONFIG_FLAG_TeleportIfCantReachPlayer = 263,
 * CPED_CONFIG_FLAG_PedsInVehiclePositionNeedsReset = 264,
 * CPED_CONFIG_FLAG_PedsFullyInSeat = 265,
 * CPED_CONFIG_FLAG_AllowPlayerLockOnIfFriendly = 266,
 * CPED_CONFIG_FLAG_UseCameraHeadingForDesiredDirectionLockOnTest = 267,
 * CPED_CONFIG_FLAG_TeleportToLeaderVehicle = 268,
 * CPED_CONFIG_FLAG_Avoidance_Ignore_WeirdPedBuffer = 269,
 * CPED_CONFIG_FLAG_OnStairSlope = 270,
 * CPED_CONFIG_FLAG_HasPlayedNMGetup = 271,
 * CPED_CONFIG_FLAG_DontBlipCop = 272,
 * CPED_CONFIG_FLAG_SpawnedAtExtendedRangeScenario = 273,
 * CPED_CONFIG_FLAG_WalkAlongsideLeaderWhenClose = 274,
 * CPED_CONFIG_FLAG_KillWhenTrapped = 275,
 * CPED_CONFIG_FLAG_EdgeDetected = 276,
 * CPED_CONFIG_FLAG_AlwaysWakeUpPhysicsOfIntersectedPeds = 277,
 * CPED_CONFIG_FLAG_EquippedAmbientLoadOutWeapon = 278,
 * CPED_CONFIG_FLAG_AvoidTearGas = 279,
 * CPED_CONFIG_FLAG_StoppedSpeechUponFreezing = 280,
 * CPED_CONFIG_FLAG_DisableGoToWritheWhenInjured = 281,
 * CPED_CONFIG_FLAG_OnlyUseForcedSeatWhenEnteringHeliInGroup = 282,
 * CPED_CONFIG_FLAG_ThrownFromVehicleDueToExhaustion = 283,
 * CPED_CONFIG_FLAG_UpdateEnclosedSearchRegion = 284,
 * CPED_CONFIG_FLAG_DisableWeirdPedEvents = 285,
 * CPED_CONFIG_FLAG_ShouldChargeNow = 286,
 * CPED_CONFIG_FLAG_RagdollingOnBoat = 287,
 * CPED_CONFIG_FLAG_HasBrandishedWeapon = 288,
 * CPED_CONFIG_FLAG_AllowMinorReactionsAsMissionPed = 289,
 * CPED_CONFIG_FLAG_BlockDeadBodyShockingEventsWhenDead = 290,
 * CPED_CONFIG_FLAG_PedHasBeenSeen = 291,
 * CPED_CONFIG_FLAG_PedIsInReusePool = 292,
 * CPED_CONFIG_FLAG_PedWasReused = 293,
 * CPED_CONFIG_FLAG_DisableShockingEvents = 294,
 * CPED_CONFIG_FLAG_MovedUsingLowLodPhysicsSinceLastActive = 295,
 * CPED_CONFIG_FLAG_NeverReactToPedOnRoof = 296,
 * CPED_CONFIG_FLAG_ForcePlayFleeScenarioExitOnNextScriptCommand = 297,
 * CPED_CONFIG_FLAG_JustBumpedIntoVehicle = 298,
 * CPED_CONFIG_FLAG_DisableShockingDrivingOnPavementEvents = 299,
 * CPED_CONFIG_FLAG_ShouldThrowSmokeNow = 300,
 * CPED_CONFIG_FLAG_DisablePedConstraints = 301,
 * CPED_CONFIG_FLAG_ForceInitialPeekInCover = 302,
 * CPED_CONFIG_FLAG_CreatedByDispatch = 303,
 * CPED_CONFIG_FLAG_PointGunLeftHandSupporting = 304,
 * CPED_CONFIG_FLAG_DisableJumpingFromVehiclesAfterLeader = 305,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromPlayerPedImpact = 306,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromAiRagdollImpact = 307,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromPlayerRagdollImpact = 308,
 * CPED_CONFIG_FLAG_DisableQuadrupedSpring = 309,
 * CPED_CONFIG_FLAG_IsInCluster = 310,
 * CPED_CONFIG_FLAG_ShoutToGroupOnPlayerMelee = 311,
 * CPED_CONFIG_FLAG_IgnoredByAutoOpenDoors = 312,
 * CPED_CONFIG_FLAG_PreferInjuredGetup = 313,
 * CPED_CONFIG_FLAG_ForceIgnoreMeleeActiveCombatant = 314,
 * CPED_CONFIG_FLAG_CheckLoSForSoundEvents = 315,
 * CPED_CONFIG_FLAG_JackedAbandonedCar = 316,
 * CPED_CONFIG_FLAG_CanSayFollowedByPlayerAudio = 317,
 * CPED_CONFIG_FLAG_ActivateRagdollFromMinorPlayerContact = 318,
 * CPED_CONFIG_FLAG_HasPortablePickupAttached = 319,
 * CPED_CONFIG_FLAG_ForcePoseCharacterCloth = 320,
 * CPED_CONFIG_FLAG_HasClothCollisionBounds = 321,
 * CPED_CONFIG_FLAG_HasHighHeels = 322,
 * CPED_CONFIG_FLAG_TreatAsAmbientPedForDriverLockOn = 323,
 * CPED_CONFIG_FLAG_DontBehaveLikeLaw = 324,
 * CPED_CONFIG_FLAG_SpawnedAtScenario = 325,
 * CPED_CONFIG_FLAG_DisablePoliceInvestigatingBody = 326,
 * CPED_CONFIG_FLAG_DisableWritheShootFromGround = 327,
 * CPED_CONFIG_FLAG_LowerPriorityOfWarpSeats = 328,
 * CPED_CONFIG_FLAG_DisableTalkTo = 329,
 * CPED_CONFIG_FLAG_DontBlip = 330,
 * CPED_CONFIG_FLAG_IsSwitchingWeapon = 331,
 * CPED_CONFIG_FLAG_IgnoreLegIkRestrictions = 332,
 * CPED_CONFIG_FLAG_ScriptForceNoTimesliceIntelligenceUpdate = 333,
 * CPED_CONFIG_FLAG_JackedOutOfMyVehicle = 334,
 * CPED_CONFIG_FLAG_WentIntoCombatAfterBeingJacked = 335,
 * CPED_CONFIG_FLAG_DontActivateRagdollForVehicleGrab = 336,
 * CPED_CONFIG_FLAG_ForcePackageCharacterCloth = 337,
 * CPED_CONFIG_FLAG_DontRemoveWithValidOrder = 338,
 * CPED_CONFIG_FLAG_AllowTaskDoNothingTimeslicing = 339,
 * CPED_CONFIG_FLAG_ForcedToStayInCoverDueToPlayerSwitch = 340,
 * CPED_CONFIG_FLAG_ForceProneCharacterCloth = 341,
 * CPED_CONFIG_FLAG_NotAllowedToJackAnyPlayers = 342,
 * CPED_CONFIG_FLAG_InToStrafeTransition = 343,
 * CPED_CONFIG_FLAG_KilledByStandardMelee = 344,
 * CPED_CONFIG_FLAG_AlwaysLeaveTrainUponArrival = 345,
 * CPED_CONFIG_FLAG_ForcePlayDirectedNormalScenarioExitOnNextScriptCommand = 346,
 * CPED_CONFIG_FLAG_OnlyWritheFromWeaponDamage = 347,
 * CPED_CONFIG_FLAG_UseSloMoBloodVfx = 348,
 * CPED_CONFIG_FLAG_EquipJetpack = 349,
 * CPED_CONFIG_FLAG_PreventDraggedOutOfCarThreatResponse = 350,
 * CPED_CONFIG_FLAG_ScriptHasCompletelyDisabledCollision = 351,
 * CPED_CONFIG_FLAG_NeverDoScenarioNavChecks = 352,
 * CPED_CONFIG_FLAG_ForceSynchronousScenarioExitChecking = 353,
 * CPED_CONFIG_FLAG_ThrowingGrenadeWhileAiming = 354,
 * CPED_CONFIG_FLAG_HeadbobToRadioEnabled = 355,
 * CPED_CONFIG_FLAG_ForceDeepSurfaceCheck = 356,
 * CPED_CONFIG_FLAG_DisableDeepSurfaceAnims = 357,
 * CPED_CONFIG_FLAG_DontBlipNotSynced = 358,
 * CPED_CONFIG_FLAG_IsDuckingInVehicle = 359,
 * CPED_CONFIG_FLAG_PreventAutoShuffleToTurretSeat = 360,
 * CPED_CONFIG_FLAG_DisableEventInteriorStatusCheck = 361,
 * CPED_CONFIG_FLAG_HasReserveParachute = 362,
 * CPED_CONFIG_FLAG_UseReserveParachute = 363,
 * CPED_CONFIG_FLAG_TreatDislikeAsHateWhenInCombat = 364,
 * CPED_CONFIG_FLAG_OnlyUpdateTargetWantedIfSeen = 365,
 * CPED_CONFIG_FLAG_AllowAutoShuffleToDriversSeat = 366,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromSmokeGrenade = 367,
 * CPED_CONFIG_FLAG_LinkMBRToOwnerOnChain = 368,
 * CPED_CONFIG_FLAG_AmbientFriendBumpedByPlayer = 369,
 * CPED_CONFIG_FLAG_AmbientFriendBumpedByPlayerVehicle = 370,
 * CPED_CONFIG_FLAG_InFPSUnholsterTransition = 371,
 * CPED_CONFIG_FLAG_PreventReactingToSilencedCloneBullets = 372,
 * CPED_CONFIG_FLAG_DisableInjuredCryForHelpEvents = 373,
 * CPED_CONFIG_FLAG_NeverLeaveTrain = 374,
 * CPED_CONFIG_FLAG_DontDropJetpackOnDeath = 375,
 * CPED_CONFIG_FLAG_UseFPSUnholsterTransitionDuringCombatRoll = 376,
 * CPED_CONFIG_FLAG_ExitingFPSCombatRoll = 377,
 * CPED_CONFIG_FLAG_ScriptHasControlOfPlayer = 378,
 * CPED_CONFIG_FLAG_PlayFPSIdleFidgetsForProjectile = 379,
 * CPED_CONFIG_FLAG_DisableAutoEquipHelmetsInBikes = 380,
 * CPED_CONFIG_FLAG_DisableAutoEquipHelmetsInAircraft = 381,
 * CPED_CONFIG_FLAG_WasPlayingFPSGetup = 382,
 * CPED_CONFIG_FLAG_WasPlayingFPSMeleeActionResult = 383,
 * CPED_CONFIG_FLAG_PreferNoPriorityRemoval = 384,
 * CPED_CONFIG_FLAG_FPSFidgetsAbortedOnFire = 385,
 * CPED_CONFIG_FLAG_ForceFPSIKWithUpperBodyAnim = 386,
 * CPED_CONFIG_FLAG_SwitchingCharactersInFirstPerson = 387,
 * CPED_CONFIG_FLAG_IsClimbingLadder = 388,
 * CPED_CONFIG_FLAG_HasBareFeet = 389,
 * CPED_CONFIG_FLAG_UNUSED_REPLACE_ME_2 = 390,
 * CPED_CONFIG_FLAG_GoOnWithoutVehicleIfItIsUnableToGetBackToRoad = 391,
 * CPED_CONFIG_FLAG_BlockDroppingHealthSnacksOnDeath = 392,
 * CPED_CONFIG_FLAG_ResetLastVehicleOnVehicleExit = 393,
 * CPED_CONFIG_FLAG_ForceThreatResponseToNonFriendToFriendMeleeActions = 394,
 * CPED_CONFIG_FLAG_DontRespondToRandomPedsDamage = 395,
 * CPED_CONFIG_FLAG_AllowContinuousThreatResponseWantedLevelUpdates = 396,
 * CPED_CONFIG_FLAG_KeepTargetLossResponseOnCleanup = 397,
 * CPED_CONFIG_FLAG_PlayersDontDragMeOutOfCar = 398,
 * CPED_CONFIG_FLAG_BroadcastRepondedToThreatWhenGoingToPointShooting = 399,
 * CPED_CONFIG_FLAG_IgnorePedTypeForIsFriendlyWith = 400,
 * CPED_CONFIG_FLAG_TreatNonFriendlyAsHateWhenInCombat = 401,
 * CPED_CONFIG_FLAG_DontLeaveVehicleIfLeaderNotInVehicle = 402,
 * CPED_CONFIG_FLAG_ChangeFromPermanentToAmbientPopTypeOnMigration = 403,
 * CPED_CONFIG_FLAG_AllowMeleeReactionIfMeleeProofIsOn = 404,
 * CPED_CONFIG_FLAG_UsingLowriderLeans = 405,
 * CPED_CONFIG_FLAG_UsingAlternateLowriderLeans = 406,
 * CPED_CONFIG_FLAG_UseNormalExplosionDamageWhenBlownUpInVehicle = 407,
 * CPED_CONFIG_FLAG_DisableHomingMissileLockForVehiclePedInside = 408,
 * CPED_CONFIG_FLAG_DisableTakeOffScubaGear = 409,
 * CPED_CONFIG_FLAG_IgnoreMeleeFistWeaponDamageMult = 410,
 * CPED_CONFIG_FLAG_LawPedsCanFleeFromNonWantedPlayer = 411,
 * CPED_CONFIG_FLAG_ForceBlipSecurityPedsIfPlayerIsWanted = 412,
 * CPED_CONFIG_FLAG_IsHolsteringWeapon = 413,
 * CPED_CONFIG_FLAG_UseGoToPointForScenarioNavigation = 414,
 * CPED_CONFIG_FLAG_DontClearLocalPassengersWantedLevel = 415,
 * CPED_CONFIG_FLAG_BlockAutoSwapOnWeaponPickups = 416,
 * CPED_CONFIG_FLAG_ThisPedIsATargetPriorityForAI = 417,
 * CPED_CONFIG_FLAG_IsSwitchingHelmetVisor = 418,
 * CPED_CONFIG_FLAG_ForceHelmetVisorSwitch = 419,
 * CPED_CONFIG_FLAG_IsPerformingVehicleMelee = 420,
 * CPED_CONFIG_FLAG_UseOverrideFootstepPtFx = 421,
 * CPED_CONFIG_FLAG_DisableVehicleCombat = 422,
 * CPED_CONFIG_FLAG_TreatAsFriendlyForTargetingAndDamage = 423,
 * CPED_CONFIG_FLAG_AllowBikeAlternateAnimations = 424,
 * CPED_CONFIG_FLAG_TreatAsFriendlyForTargetingAndDamageNonSynced = 425,
 * CPED_CONFIG_FLAG_UseLockpickVehicleEntryAnimations = 426,
 * CPED_CONFIG_FLAG_IgnoreInteriorCheckForSprinting = 427,
 * CPED_CONFIG_FLAG_SwatHeliSpawnWithinLastSpottedLocation = 428,
 * CPED_CONFIG_FLAG_DisableStartEngine = 429,
 * CPED_CONFIG_FLAG_IgnoreBeingOnFire = 430,
 * CPED_CONFIG_FLAG_DisableTurretOrRearSeatPreference = 431,
 * CPED_CONFIG_FLAG_DisableWantedHelicopterSpawning = 432,
 * CPED_CONFIG_FLAG_UseTargetPerceptionForCreatingAimedAtEvents = 433,
 * CPED_CONFIG_FLAG_DisableHomingMissileLockon = 434,
 * CPED_CONFIG_FLAG_ForceIgnoreMaxMeleeActiveSupportCombatants = 435,
 * CPED_CONFIG_FLAG_StayInDefensiveAreaWhenInVehicle = 436,
 * CPED_CONFIG_FLAG_DontShoutTargetPosition = 437,
 * CPED_CONFIG_FLAG_DisableHelmetArmor = 438,
 * CPED_CONFIG_FLAG_CreatedByConcealedPlayer = 439,
 * CPED_CONFIG_FLAG_PermanentlyDisablePotentialToBeWalkedIntoResponse = 440,
 * CPED_CONFIG_FLAG_PreventVehExitDueToInvalidWeapon = 441,
 * CPED_CONFIG_FLAG_IgnoreNetSessionFriendlyFireCheckForAllowDamage = 442,
 * CPED_CONFIG_FLAG_DontLeaveCombatIfTargetPlayerIsAttackedByPolice = 443,
 * CPED_CONFIG_FLAG_CheckLockedBeforeWarp = 444,
 * CPED_CONFIG_FLAG_DontShuffleInVehicleToMakeRoom = 445,
 * CPED_CONFIG_FLAG_GiveWeaponOnGetup = 446,
 * CPED_CONFIG_FLAG_DontHitVehicleWithProjectiles = 447,
 * CPED_CONFIG_FLAG_DisableForcedEntryForOpenVehiclesFromTryLockedDoor = 448,
 * CPED_CONFIG_FLAG_FiresDummyRockets = 449,
 * CPED_CONFIG_FLAG_PedIsArresting = 450,
 * CPED_CONFIG_FLAG_IsDecoyPed = 451,
 * CPED_CONFIG_FLAG_HasEstablishedDecoy = 452,
 * CPED_CONFIG_FLAG_BlockDispatchedHelicoptersFromLanding = 453,
 * CPED_CONFIG_FLAG_DontCryForHelpOnStun = 454,
 * CPED_CONFIG_FLAG_HitByTranqWeapon = 455,
 * CPED_CONFIG_FLAG_CanBeIncapacitated = 456,
 * CPED_CONFIG_FLAG_ForcedAimFromArrest = 457,
 * CPED_CONFIG_FLAG_DontChangeTargetFromMelee = 458,
 * _0x4376ABF2 = 459,
 * CPED_CONFIG_FLAG_RagdollFloatsIndefinitely = 460,
 * CPED_CONFIG_FLAG_BlockElectricWeaponDamage = 461,
 * _0x262A3B8E = 462,
 * _0x1AA79A25 = 463,
 * }
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_CONFIG_FLAG](?\_0x1913FE4CBF41C463).</strong>
 * 
 * Hash: 0x9CFBE10D
 */
export function setConfigFlag(ped: number | IPed, flagId: number, value: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedConfigFlag(_ped, flagId, value);
}

/**
 * ```
 * Sets Ped Default Clothes
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_DEFAULT_COMPONENT_VARIATION](?\_0x45EEE61580806D63).</strong>
 * 
 * Hash: 0xC866A984
 */
export function setDefaultComponentVariation(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedDefaultComponentVariation(_ped);
}

/**
 * Sets the tint index for the hair on the specified ped.
 * 
 * ```
 * NativeDB Introduced: v323
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_HAIR_TINT](?\_0x4CFFC65454C93A49).</strong>
 * 
 * Hash: 0xA23FE32C
 */
export function setHairTint(ped: number | IPed, colorID: number, highlightColorID: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedHairTint(_ped, colorID, highlightColorID);
}

/**
 * For more info please refer to [this](https://gtaforums.com/topic/858970-all-gtao-face-ids-pedset-ped-head-blend-data-explained) topic.
 * <strong>Other information:</strong>
 * IDs start at zero and go Male Non-DLC, Female Non-DLC, Male DLC, and Female DLC.</br>
 * This native function is often called prior to calling natives such as:
 * 
 * *   [`SetPedHairColor`](#\_0xA23FE32C)
 * *   [`SetPedHeadOverlayColor`](#\_0x78935A27)
 * *   [`SetPedHeadOverlay`](#\_0xD28DBA90)
 * *   [`SetPedFaceFeature`](#\_0x6C8D4458)
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_HEAD_BLEND_DATA](?\_0x9414E18B9434C2FE).</strong>
 * 
 * Hash: 0x60746B88
 */
export function setHeadBlendData(ped: number | IPed, shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedHeadBlendData(_ped, shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent);
}

/**
 * ```
 * OverlayID ranges from 0 to 12, index from 0 to _GET_NUM_OVERLAY_VALUES(overlayID)-1, and opacity from 0.0 to 1.0.
 * overlayID       Part                  Index, to disable
 * 0               Blemishes             0 - 23, 255
 * 1               Facial Hair           0 - 28, 255
 * 2               Eyebrows              0 - 33, 255
 * 3               Ageing                0 - 14, 255
 * 4               Makeup                0 - 74, 255
 * 5               Blush                 0 - 6, 255
 * 6               Complexion            0 - 11, 255
 * 7               Sun Damage            0 - 10, 255
 * 8               Lipstick              0 - 9, 255
 * 9               Moles/Freckles        0 - 17, 255
 * 10              Chest Hair            0 - 16, 255
 * 11              Body Blemishes        0 - 11, 255
 * 12              Add Body Blemishes    0 - 1, 255
 * ```
 * 
 * <strong>Note:</strong>
 * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_HEAD_OVERLAY](?\_0x48F44967FA05CC1E).</strong>
 * 
 * Hash: 0xD28DBA90
 */
export function setHeadOverlay(ped: number | IPed, overlayID: number, index: number, opacity: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedHeadOverlay(_ped, overlayID, index, opacity);
}

/**
 * SET_PED_INTO_VEHICLE
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_INTO_VEHICLE](?\_0xF75B0D629E1C063D).</strong>
 * 
 * Hash: 0x7500C79
 */
export function setIntoVehicle(ped: number | IPed, vehicle: number | IVehicle, seatIndex: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    SetPedIntoVehicle(_ped, _vehicle, seatIndex);
}

/**
 * This native is used to set prop variation on a ped. Components, drawables and textures IDs are related to the ped model.
 * 
 * ### MP Freemode list of props
 * 
 * **0**: Hats
 * **1**: Glasses
 * **2**: Ears
 * **6**: Watches
 * **7**: Bracelets
 * List of Prop IDs
 * 
 * ```cpp
 * enum eAnchorPoints
 * {
 * ANCHOR_HEAD = 0, // "p_head"
 * ANCHOR_EYES = 1, // "p_eyes"
 * ANCHOR_EARS = 2, // "p_ears"
 * ANCHOR_MOUTH = 3, // "p_mouth"
 * ANCHOR_LEFT_HAND = 4, // "p_lhand"
 * ANCHOR_RIGHT_HAND = 5, // "p_rhand"
 * ANCHOR_LEFT_WRIST = 6, // "p_lwrist"
 * ANCHOR_RIGHT_WRIST = 7, // "p_rwrist"
 * ANCHOR_HIP = 8, // "p_lhip"
 * ANCHOR_LEFT_FOOT = 9, // "p_lfoot"
 * ANCHOR_RIGHT_FOOT = 10, // "p_rfoot"
 * ANCHOR_PH_L_HAND = 11, // "ph_lhand"
 * ANCHOR_PH_R_HAND = 12, // "ph_rhand"
 * NUM_ANCHORS = 13,
 * };
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_PROP_INDEX](?\_0x93376B65A266EB5F).</strong>
 * 
 * Hash: 0x829F2E2
 */
export function setPropIndex(ped: number | IPed, componentId: number, drawableId: number, textureId: number, attach: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedPropIndex(_ped, componentId, drawableId, textureId, attach);
}

/**
 * ```
 * p1 is always 0 in R* scripts; and a quick disassembly seems to indicate that p1 is unused.
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RANDOM_COMPONENT_VARIATION](?\_0xC8A9481A01E63C28).</strong>
 * 
 * Hash: 0x4111BA46
 */
export function setRandomComponentVariation(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedRandomComponentVariation(_ped, 0);
}

/**
 * SET_PED_RANDOM_PROPS
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RANDOM_PROPS](?\_0xC44AA05345C992C6).</strong>
 * 
 * Hash: 0xE3318E0E
 */
export function setRandomProps(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedRandomProps(_ped);
}

/**
 * `PED::SET_PED_RESET_FLAG(PLAYER::PLAYER_PED_ID(), 240, 1);`
 * Known values:
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RESET_FLAG](?\_0xC1E8A365BF3B29F2).</strong>
 * 
 * Hash: 0xCFF6FF66
 */
export function setResetFlag(ped: number | IPed, flagId: number, doReset: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedResetFlag(_ped, flagId, doReset);
}

/**
 * p4/p5: Unusued in TU27
 * 
 * ### Ragdoll Types
 * 
 * **0**: CTaskNMRelax
 * **1**: CTaskNMScriptControl: Hardcoded not to work in networked environments.
 * **Else**: CTaskNMBalance
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_TO_RAGDOLL](?\_0xAE99FB955581844A).</strong>
 * 
 * Hash: 0x83CB5052
 */
export function setToRagdoll(ped: number | IPed, minTime: number, maxTime: number, ragdollType: number, bAbortIfInjured: boolean, bAbortIfDead: boolean, bForceScriptControl: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedToRagdoll(_ped, minTime, maxTime, ragdollType, bAbortIfInjured, bAbortIfDead, bForceScriptControl);
}

/**
 * ```cpp
 * enum eNMFallType {
 * TYPE_FROM_HIGH = 0,
 * TYPE_OVER_WALL = 1,
 * TYPE_DOWN_STAIRS = 2,
 * TYPE_DIE_TYPES = 3,
 * TYPE_DIE_FROM_HIGH = 4,
 * TYPE_DIE_OVER_WALL = 5,
 * TYPE_DIE_DOWN_STAIRS = 6
 * }
 * ```
 * 
 * ```
 * Return variable is never used in R*'s scripts.
 * Not sure what p2 does. It seems like it would be a time judging by it's usage in R*'s scripts, but didn't seem to affect anything in my testings.
 * x, y, and z are coordinates, most likely to where the ped will fall.
 * p7 is probably the force of the fall, but untested, so I left the variable name the same.
 * p8 to p13 are always 0f in R*'s scripts.
 * (Simplified) Example of the usage of the function from R*'s scripts:
 * `ped::set_ped_to_ragdoll_with_fall(ped, 1500, 2000, 1, -entity::get_entity_forward_vector(ped), 1f, 0f, 0f, 0f, 0f, 0f, 0f);`
 * ```
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_TO_RAGDOLL_WITH_FALL](?\_0xD76632D99E4966C8).</strong>
 * 
 * Hash: 0xFA12E286
 */
export function setToRagdollWithFall(ped: number | IPed, minTime: number, maxTime: number, nFallType: number, dirX: number, dirY: number, dirZ: number, fGroundHeight: number, grab1X: number, grab1Y: number, grab1Z: number, grab2X: number, grab2Y: number, grab2Z: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedToRagdollWithFall(_ped, minTime, maxTime, nFallType, dirX, dirY, dirZ, fGroundHeight, grab1X, grab1Y, grab1Z, grab2X, grab2Y, grab2Z);
}

/**
 * Used for freemode (online) characters.
 * Indices:
 * 
 * 1.  black
 * 2.  very light blue/green
 * 3.  dark blue
 * 4.  brown
 * 5.  darker brown
 * 6.  light brown
 * 7.  blue
 * 8.  light blue
 * 9.  pink
 * 10. yellow
 * 11. purple
 * 12. black
 * 13. dark green
 * 14. light brown
 * 15. yellow/black pattern
 * 16. light colored spiral pattern
 * 17. shiny red
 * 18. shiny half blue/half red
 * 19. half black/half light blue
 * 20. white/red perimter
 * 21. green snake
 * 22. red snake
 * 23. dark blue snake
 * 24. dark yellow
 * 25. bright yellow
 * 26. all black
 * 27. red small pupil
 * 28. devil blue/black
 * 29. white small pupil
 * 30. glossed over
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [\_SET_PED_EYE_COLOR](?\_0x50B56988B170AFDF).</strong>
 * 
 * Hash: 0xEC09DB1B
 */
export function setEyeColor(ped: number | IPed, index: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedEyeColor(_ped, index);
}

/**
 * Sets the various freemode face features, e.g. nose length, chin shape.
 * <strong>Indexes (From 0 to 19):</strong>
 * Parentheses indicate morph scale/direction as in (-1.0 to 1.0)
 * 
 * *   **0**: Nose Width (Thin/Wide)
 * *   **1**: Nose Peak (Up/Down)
 * *   **2**: Nose Length (Long/Short)
 * *   **3**: Nose Bone Curveness (Crooked/Curved)
 * *   **4**: Nose Tip (Up/Down)
 * *   **5**: Nose Bone Twist (Left/Right)
 * *   **6**: Eyebrow (Up/Down)
 * *   **7**: Eyebrow (In/Out)
 * *   **8**: Cheek Bones (Up/Down)
 * *   **9**: Cheek Sideways Bone Size (In/Out)
 * *   **10**: Cheek Bones Width (Puffed/Gaunt)
 * *   **11**: Eye Opening (Both) (Wide/Squinted)
 * *   **12**: Lip Thickness (Both) (Fat/Thin)
 * *   **13**: Jaw Bone Width (Narrow/Wide)
 * *   **14**: Jaw Bone Shape (Round/Square)
 * *   **15**: Chin Bone (Up/Down)
 * *   **16**: Chin Bone Length (In/Out or Backward/Forward)
 * *   **17**: Chin Bone Shape (Pointed/Square)
 * *   **18**: Chin Hole (Chin Bum)
 * *   **19**: Neck Thickness (Thin/Thick)
 * <strong>Note:</strong>
 * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [\_SET_PED_FACE_FEATURE](?\_0x71A5C1DBA060049E).</strong>
 * 
 * Hash: 0x6C8D4458
 */
export function setFaceFeature(ped: number | IPed, index: number, scale: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedFaceFeature(_ped, index, scale);
}

/**
 * ```
 * Used for freemode (online) characters.
 * Called after SET_PED_HEAD_OVERLAY().
 * ```
 * 
 * <strong>Note:</strong>
 * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
 * 
 * <strong>This is the server-side RPC native equivalent of the client native [\_SET_PED_HEAD_OVERLAY_COLOR](?\_0x497BF74A7B9CB952).</strong>
 * 
 * Hash: 0x78935A27
 */
export function setHeadOverlayColor(ped: number | IPed, overlayID: number, colorType: number, colorID: number, secondColorID: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedHeadOverlayColor(_ped, overlayID, colorType, colorID, secondColorID);
}

