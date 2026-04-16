import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * Adds the given model name hash to the list of valid models for the player ped's parachute.
 * 
 * Hash: 0x8AC7AE9
 */
export function addAuthorizedParachuteModel(modelNameHash: number): void {
    AddAuthorizedParachuteModel(modelNameHash);
}

/**
 * Adds the given model name hash to the list of valid models for the player ped's parachute pack.
 * 
 * Hash: 0x2E86DEA5
 */
export function addAuthorizedParachutePackModel(modelNameHash: number): void {
    AddAuthorizedParachutePackModel(modelNameHash);
}

/**
 * Adds new health config.
 * 
 * Hash: 0x9CBFD5C1
 */
export function addHealthConfig(configName: string, defaultHealth: number, defaultArmor: number, defaultEndurance: number, fatiguedHealthThreshold: number, injuredHealthThreshold: number, dyingHealthThreshold: number, hurtHealthThreshold: number, dogTakedownThreshold: number, writheFromBulletThreshold: number, meleeCardinalFatalAttack: boolean, invincible: boolean): void {
    AddHealthConfig(configName, defaultHealth, defaultArmor, defaultEndurance, fatiguedHealthThreshold, injuredHealthThreshold, dyingHealthThreshold, hurtHealthThreshold, dogTakedownThreshold, writheFromBulletThreshold, meleeCardinalFatalAttack, invincible);
}

/**
 * Disables the editor runtime mode, changing game behavior to not track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0xB1622B17
 */
export function disableEditorRuntime(): void {
    DisableEditorRuntime();
}

/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity.
 * 
 * Hash: 0x3D5AB7F0
 */
export function disableIdleCamera(state: boolean): void {
    DisableIdleCamera(state);
}

/**
 * Enables the editor runtime mode, changing game behavior to track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0xC383871D
 */
export function enableEditorRuntime(): void {
    EnableEditorRuntime();
}

/**
 * Enters cursor mode, suppressing mouse movement to the game and displaying a mouse cursor instead. This function supports
 * SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0x780DA86
 */
export function enterCursorMode(): void {
    EnterCursorMode();
}

/**
 * A getter for [SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME](#\_0x0B919E1FB47CC4E0).
 * 
 * Hash: 0xB550232D
 */
export function getAmbientPedRangeMultiplier(): number {
    return GetAmbientPedRangeMultiplier();
}

/**
 * This native returns the index of a calming quad if the given point is inside its bounds.
 * 
 * Hash: 0x870E8B40
 */
export function getCalmingQuadAtCoords(x: number, y: number): number {
    return GetCalmingQuadAtCoords(x, y);
}

/**
 * No comment provided
 * 
 * Hash: 0xFF60E63
 */
export function getCalmingQuadBounds(waterQuad: number): [boolean, number, number, number, number] {
    return GetCalmingQuadBounds(waterQuad);
}

/**
 * No comment provided
 * 
 * Hash: 0xCEBFC42
 */
export function getCalmingQuadCount(): number {
    return GetCalmingQuadCount();
}

/**
 * No comment provided
 * 
 * Hash: 0xB0E3A058
 */
export function getCalmingQuadDampening(waterQuad: number): [boolean, number] {
    return GetCalmingQuadDampening(waterQuad);
}

/**
 * No comment provided
 * 
 * Hash: 0x5550BF9F
 */
export function getFuelConsumptionRateMultiplier(): number {
    return GetFuelConsumptionRateMultiplier();
}

/**
 * No comment provided
 * 
 * Hash: 0xC66CD90C
 */
export function getFuelConsumptionState(): boolean {
    return GetFuelConsumptionState();
}

/**
 * A getter for [SET_GLOBAL_PASSENGER_MASS_MULTIPLIER](#\_0x3422291C).
 * 
 * Hash: 0x78951816
 */
export function getGlobalPassengerMassMultiplier(): number {
    return GetGlobalPassengerMassMultiplier();
}

/**
 * Retrieves the map data entity handle.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0x30AA6911
 */
export function getMapdataEntityHandle(mapDataHash: number, entityInternalIdx: number): [boolean, number] {
    return GetMapdataEntityHandle(mapDataHash, entityInternalIdx);
}

/**
 * Returns mapdata's entity matrix. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * This should be used from JavaScript or another language supporting mutable buffers like ArrayBuffer.
 * 
 * Matrix layout is as follows:
 * 
 * *   Element \[0], \[1] and \[2] should represent the right vector.
 * *   Element \[4], \[5] and \[6] should represent the forward vector.
 * *   Element \[8], \[9] and \[10] should represent the up vector.
 * *   Element \[12], \[13] and \[14] should represent X, Y and Z translation coordinates.
 * *   All other elements should be \[0, 0, 0, 1].
 * 
 * Hash: 0x2C3CDA93
 */
export function getMapdataEntityMatrix(mapDataHash: number, entityInternalIdx: number, matrixPtr: number): boolean {
    return GetMapdataEntityMatrix(mapDataHash, entityInternalIdx, matrixPtr);
}

/**
 * Returns the transient map data index for a specified hash.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0xD29D8EDD
 */
export function getMapdataFromHashKey(mapdataHandle: number | string): number {
    if (typeof mapdataHandle === 'string') mapdataHandle = GetHashKey(mapdataHandle)
    return GetMapdataFromHashKey(mapdataHandle);
}

/**
 * A getter for [SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xEAE6DCC7EEE3DB1D).
 * 
 * Hash: 0xFF72DF84
 */
export function getParkedVehicleDensityMultiplier(): number {
    return GetParkedVehicleDensityMultiplier();
}

/**
 * A getter for [SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xB3B3359379FE77D3).
 * Same as vehicle density multiplier.
 * 
 * Hash: 0x7B0D00C5
 */
export function getRandomVehicleDensityMultiplier(): number {
    return GetRandomVehicleDensityMultiplier();
}

/**
 * A getter for [SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x7A556143A1C03898).
 * 
 * Hash: 0x77C598B2
 */
export function getScenarioPedDensityMultiplier(): number {
    return GetScenarioPedDensityMultiplier();
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Returns whether an asynchronous streaming file registration completed.
 * 
 * Hash: 0xA194934D
 */
export function isStreamingFileReady(registerAs: string): boolean {
    return IsStreamingFileReady(registerAs);
}

/**
 * Leaves cursor mode. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0xADECF19E
 */
export function leaveCursorMode(): void {
    LeaveCursorMode();
}

/**
 * Toggles a check that prevents attaching (networked) entities to remotely owned peds. This is disabled by default.
 * 
 * Hash: 0x30CE39D8
 */
export function onesyncEnableRemoteAttachmentSanitization(enable: boolean): void {
    OnesyncEnableRemoteAttachmentSanitization(enable);
}

/**
 * Replaces the `popgroups` (CPopGroupList) meta file with the file in the specified path.
 * 
 * Hash: 0xD3BC438F
 */
export function overridePopGroups(path: string): void {
    OverridePopGroups(path);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a set of archetypes with the game engine. These should match `CBaseArchetypeDef` class information from the game.
 * 
 * Hash: 0x3C2F9037
 */
export function registerArchetypes(factory: Function): void {
    RegisterArchetypes(factory);
}

/**
 * Registers a specified .gfx file as GFx font library.
 * The .gfx file has to be registered with the streamer already.
 * 
 * Hash: 0x1B3A363
 */
export function registerFontFile(fileName: string): void {
    RegisterFontFile(fileName);
}

/**
 * Registers a specified font name for use with text draw commands.
 * 
 * Hash: 0xACF6D8EE
 */
export function registerFontId(fontName: string): number {
    return RegisterFontId(fontName);
}

/**
 * Registers a key mapping for the current resource.
 * 
 * See the related [cookbook post](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/) for more information.
 * 
 * Below you can find some examples on how to create these keybindings as well as the alternate keybinding syntax, which is preceded by `~!` to indicate that it's an alternate key.
 * 
 * Hash: 0xD7664FD1
 */
export function registerKeyMapping(commandString: string, description: string, defaultMapper: string, defaultParameter: string): void {
    RegisterKeyMapping(commandString, description, defaultMapper, defaultParameter);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a dynamic streaming asset from the server with the GTA streaming module system.
 * 
 * Hash: 0xCEAD2D4B
 */
export function registerStreamingFileFromCache(resourceName: string, fileName: string, cacheString: string): void {
    RegisterStreamingFileFromCache(resourceName, fileName, cacheString);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a KVP value as an asset with the GTA streaming module system. This function currently won't work.
 * 
 * Hash: 0x1493DCC1
 */
export function registerStreamingFileFromKvs(kvsKey: string): void {
    RegisterStreamingFileFromKvs(kvsKey);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a file from an URL as a streaming asset in the GTA streaming subsystem. This will asynchronously register the asset, and caching is done based on the URL itself - cache headers are ignored.
 * 
 * Use `IS_STREAMING_FILE_READY` to check if the asset has been registered successfully.
 * 
 * Hash: 0xF44BFB95
 */
export function registerStreamingFileFromUrl(registerAs: string, url: string): void {
    RegisterStreamingFileFromUrl(registerAs, url);
}

/**
 * Removes health config.
 * 
 * Hash: 0xE0ED5FB
 */
export function removeHealthConfig(configName: string): void {
    RemoveHealthConfig(configName);
}

/**
 * Adds a cooldown between instances of moving and then aiming.
 * Can be optionally used to hinder 'speedboosting'
 * To turn off, set value to 0
 * 
 * Hash: 0xA42A3DBF
 */
export function setAimCooldown(value: number): void {
    SetAimCooldown(value);
}

/**
 * No comment provided
 * 
 * Hash: 0xC5945BD9
 */
export function setCalmingQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean {
    return SetCalmingQuadBounds(waterQuad, minX, minY, maxX, maxY);
}

/**
 * No comment provided
 * 
 * Hash: 0x67977501
 */
export function setCalmingQuadDampening(calmingQuad: number, dampening: number): boolean {
    return SetCalmingQuadDampening(calmingQuad, dampening);
}

/**
 * Allows Weapon-Flashlight beams to stay visible while moving. Normally it only stays on while aiming.
 * 
 * Hash: 0x7635B349
 */
export function setFlashLightKeepOnWhileMoving(state: boolean): void {
    SetFlashLightKeepOnWhileMoving(state);
}

/**
 * Sets fuel consumption rate multiplier for all vehicles operated by a player. This is a way to slow down or speed up fuel consumption for all vehicles at a time. If 0 - it practically means that fuel will not be consumed. By default is set to 1.
 * 
 * When the multiplier is set to 1 a default 65 litre gas tank car with average fuel consumption can stay idle for ~16.67 hours or run with max RPM for ~2.5 hours.
 * 
 * To customize fuel consumption per vehicle / vehicle class use [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolConsumptionRate`. By default it is set to 0.5 for all vehicles.
 * 
 * Hash: 0x845F3E5C
 */
export function setFuelConsumptionRateMultiplier(multiplier: number): void {
    SetFuelConsumptionRateMultiplier(multiplier);
}

/**
 * Turns on and off fuel consumption in all vehicles operated by a player. NPC operated vehicles will not consume fuel to avoid traffic disruptions.
 * 
 * The default Gta5 behaviour is fuel consumption turned off.
 * 
 * Hash: 0x81DAD03E
 */
export function setFuelConsumptionState(state: boolean): void {
    SetFuelConsumptionState(state);
}

/**
 * No comment provided
 * 
 * Hash: 0x1C47F6AC
 */
export function setGlobalPassengerMassMultiplier(massMul: number): void {
    SetGlobalPassengerMassMultiplier(massMul);
}

/**
 * Sets default armor value for specific health config.
 * 
 * Hash: 0x20A1E6A2
 */
export function setHealthConfigDefaultArmor(configName: string, newValue: number): void {
    SetHealthConfigDefaultArmor(configName, newValue);
}

/**
 * Sets default endurance value for specific health config.
 * 
 * Hash: 0x60F20B81
 */
export function setHealthConfigDefaultEndurance(configName: string, newValue: number): void {
    SetHealthConfigDefaultEndurance(configName, newValue);
}

/**
 * Sets default health value for specific health config.
 * 
 * Hash: 0xC705C778
 */
export function setHealthConfigDefaultHealth(configName: string, newValue: number): void {
    SetHealthConfigDefaultHealth(configName, newValue);
}

/**
 * Sets default dog takedown threshold value for specific health config.
 * 
 * Hash: 0x9A995E96
 */
export function setHealthConfigDogTakedownThreshold(configName: string, newValue: number): void {
    SetHealthConfigDogTakedownThreshold(configName, newValue);
}

/**
 * Sets default dying health threshold value for specific health config.
 * 
 * Hash: 0x9B00FD77
 */
export function setHealthConfigDyingThreshold(configName: string, newValue: number): void {
    SetHealthConfigDyingThreshold(configName, newValue);
}

/**
 * Sets default fatigued health threshold value for specific health config.
 * 
 * Hash: 0xC58953FD
 */
export function setHealthConfigFatiguedThreshold(configName: string, newValue: number): void {
    SetHealthConfigFatiguedThreshold(configName, newValue);
}

/**
 * Sets default hurt health threshold value for specific health config.
 * 
 * Hash: 0x98DF1A83
 */
export function setHealthConfigHurtThreshold(configName: string, newValue: number): void {
    SetHealthConfigHurtThreshold(configName, newValue);
}

/**
 * Sets default injured health threshold value for specific health config.
 * 
 * Hash: 0xF9D9B647
 */
export function setHealthConfigInjuredThreshold(configName: string, newValue: number): void {
    SetHealthConfigInjuredThreshold(configName, newValue);
}

/**
 * Sets default invincible value for specific health config.
 * 
 * Hash: 0x4A9EEDE6
 */
export function setHealthConfigInvincible(configName: string, newValue: boolean): void {
    SetHealthConfigInvincible(configName, newValue);
}

/**
 * Sets default melee cardinal fatal attack value for specific health config.
 * 
 * Hash: 0xDD443E53
 */
export function setHealthConfigMeleeFatalAttack(configName: string, newValue: boolean): void {
    SetHealthConfigMeleeFatalAttack(configName, newValue);
}

/**
 * Sets default writhe from bullet threshold value for specific health config.
 * 
 * Hash: 0xE97633CB
 */
export function setHealthConfigWritheFromBulletThreshold(configName: string, newValue: number): void {
    SetHealthConfigWritheFromBulletThreshold(configName, newValue);
}

/**
 * Overrides how many real ms are equal to one game minute.
 * A setter for [`GetMillisecondsPerGameMinute`](#\_0x2F8B4D1C595B11DB).
 * 
 * Hash: 0x36CA2554
 */
export function setMillisecondsPerGameMinute(value: number): void {
    SetMillisecondsPerGameMinute(value);
}

/**
 * <strong>This native is deprecated and does nothing!</strong>
 * 
 * Hash: 0x7F6B8D75
 */
export function setModelHeadlightConfiguration(modelHash: number | string, ratePerSecond: number, headlightRotation: number, invertRotation: boolean): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    SetModelHeadlightConfiguration(modelHash, ratePerSecond, headlightRotation, invertRotation);
}

/**
 * Sets whether all tags should group (normal game behavior) or should remain independent and above each ped's respective head when in a vehicle.
 * 
 * Hash: 0x7A27BC93
 */
export function setMpGamerTagsUseVehicleBehavior(enabled: boolean): void {
    SetMpGamerTagsUseVehicleBehavior(enabled);
}

/**
 * Sets the maximum distance at which all tags will be visible and which beyond will not be displayed. Distance is measured from the camera position.
 * 
 * Hash: 0xD61676B3
 */
export function setMpGamerTagsVisibleDistance(distance: number): void {
    SetMpGamerTagsVisibleDistance(distance);
}

/**
 * Registers a keymap that will be triggered whenever `rawKeyIndex` is pressed or released.
 * 
 * `onKeyUp` and `onKeyDown` will not provide any arguments.
 * 
 * ```ts
 * function onStateChange();
 * ```
 * 
 * Hash: 0x49C1F6DC
 */
export function registerRawKeymap(keymapName: string, onKeyDown: Function, onKeyUp: Function, rawKeyIndex: number, canBeDisabled: boolean): void {
    RegisterRawKeymap(keymapName, onKeyDown, onKeyUp, rawKeyIndex, canBeDisabled);
}

/**
 * Remaps the keymap bound to `keymapName` to `newRawKeyIndex`
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x6E38C1B9
 */
export function remapRawKeymap(keymapName: string, newRawKeyIndex: number): void {
    RemapRawKeymap(keymapName, newRawKeyIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xC44C2F44
 */
export function setBackfaceculling(toggle: boolean): void {
    SetBackfaceculling(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8A7A8DAC
 */
export function setCursorLocation(x: number, y: number): boolean {
    return SetCursorLocation(x, y);
}

/**
 * Sets whether or not ownership checks should be performed while trying to stow a carriable on a hunting wagon.
 * 
 * Hash: 0x85A10FFD
 */
export function setIgnoreVehicleOwnershipForStowing(ignore: boolean): void {
    SetIgnoreVehicleOwnershipForStowing(ignore);
}

/**
 * Activates built-in timecycle editing tool.
 * 
 * Hash: 0xEEB9B76A
 */
export function activateTimecycleEditor(): void {
    ActivateTimecycleEditor();
}

/**
 * No comment provided
 * 
 * Hash: 0x3422291C
 */
export function applyWeatherCycles(numEntries: number, msPerCycle: number): boolean {
    return ApplyWeatherCycles(numEntries, msPerCycle);
}

/**
 * No comment provided
 * 
 * Hash: 0x54D636B3
 */
export function cloneTimecycleModifier(sourceModifierName: string, clonedModifierName: string): number {
    return CloneTimecycleModifier(sourceModifierName, clonedModifierName);
}

/**
 * Create a clean timecycle modifier. See [`SET_TIMECYCLE_MODIFIER_VAR`](#\_0x6E0A422B) to add variables.
 * 
 * Hash: 0x70FA2AFA
 */
export function createTimecycleModifier(modifierName: string): number {
    return CreateTimecycleModifier(modifierName);
}

/**
 * Disables the game's world horizon lods rendering (see `farlods.#dd`).
 * Using the island hopper natives might also affect this state.
 * 
 * Hash: 0xA9C92CDC
 */
export function disableWorldhorizonRendering(state: boolean): void {
    DisableWorldhorizonRendering(state);
}

/**
 * No comment provided
 * 
 * Hash: 0xC53BB6D3
 */
export function doesTimecycleModifierHasVar(modifierName: string, varName: string): boolean {
    return DoesTimecycleModifierHasVar(modifierName, varName);
}

/**
 * No comment provided
 * 
 * Hash: 0xDEDA4E50
 */
export function endFindObject(findHandle: number): void {
    EndFindObject(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9615C2AD
 */
export function endFindPed(findHandle: number): void {
    EndFindPed(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x3C407D53
 */
export function endFindPickup(findHandle: number): void {
    EndFindPickup(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9227415A
 */
export function endFindVehicle(findHandle: number): void {
    EndFindVehicle(findHandle);
}

/**
 * This native is not implemented.
 * 
 * Hash: 0xD2CB95A3
 */
export function experimentalLoadCloneCreate(data: string, objectId: number, tree: string): number {
    return ExperimentalLoadCloneCreate(data, objectId, tree);
}

/**
 * This native is not implemented.
 * 
 * Hash: 0x6BC189AC
 */
export function experimentalLoadCloneSync(entity: number | IEntity, data: string): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ExperimentalLoadCloneSync(_entity, data);
}

/**
 * This native is not implemented.
 * 
 * Hash: 0x9D65CAD2
 */
export function experimentalSaveCloneCreate(entity: number | IEntity): string {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return ExperimentalSaveCloneCreate(_entity);
}

/**
 * This native is not implemented.
 * 
 * Hash: 0x38D19210
 */
export function experimentalSaveCloneSync(entity: number | IEntity): string {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return ExperimentalSaveCloneSync(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xFAA6CB5D
 */
export function findFirstObject(): [number, number] {
    return FindFirstObject();
}

/**
 * No comment provided
 * 
 * Hash: 0xFB012961
 */
export function findFirstPed(): [number, number] {
    return FindFirstPed();
}

/**
 * No comment provided
 * 
 * Hash: 0x3FF9D340
 */
export function findFirstPickup(): [number, number] {
    return FindFirstPickup();
}

/**
 * No comment provided
 * 
 * Hash: 0x15E55694
 */
export function findFirstVehicle(): [number, number] {
    return FindFirstVehicle();
}

/**
 * No comment provided
 * 
 * Hash: 0x4E129DBF
 */
export function findNextObject(findHandle: number): [boolean, number] {
    return FindNextObject(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0xAB09B548
 */
export function findNextPed(findHandle: number): [boolean, number] {
    return FindNextPed(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x4107EF0F
 */
export function findNextPickup(findHandle: number): [boolean, number] {
    return FindNextPickup(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8839120D
 */
export function findNextVehicle(findHandle: number): [boolean, number] {
    return FindNextVehicle(findHandle);
}

/**
 * This native returns the currently used game's name.
 * 
 * Hash: 0xACA18ECD
 */
export function getCurrentGameName(): string {
    return GetCurrentGameName();
}

/**
 * Returns the peer address of the remote game server that the user is currently connected to.
 * 
 * Hash: 0xEA11BFBA
 */
export function getCurrentServerEndpoint(): string {
    return GetCurrentServerEndpoint();
}

/**
 * No comment provided
 * 
 * Hash: 0xFE2A1D4D
 */
export function getTimecycleModifierCount(): number {
    return GetTimecycleModifierCount();
}

/**
 * No comment provided
 * 
 * Hash: 0x5F4CD0E2
 */
export function getTimecycleModifierIndexByName(modifierName: string): number {
    return GetTimecycleModifierIndexByName(modifierName);
}

/**
 * No comment provided
 * 
 * Hash: 0x28CB8608
 */
export function getTimecycleModifierNameByIndex(modifierIndex: number): string {
    return GetTimecycleModifierNameByIndex(modifierIndex);
}

/**
 * A getter for [SET_TIMECYCLE_MODIFIER_STRENGTH](#\_0x82E7FFCD5B2326B3).
 * 
 * Hash: 0xBE54124A
 */
export function getTimecycleModifierStrength(): number {
    return GetTimecycleModifierStrength();
}

/**
 * No comment provided
 * 
 * Hash: 0xA7109E12
 */
export function getTimecycleModifierVar(modifierName: string, varName: string): [boolean, number, number] {
    return GetTimecycleModifierVar(modifierName, varName);
}

/**
 * No comment provided
 * 
 * Hash: 0x60FB60FE
 */
export function getTimecycleModifierVarCount(modifierName: string): number {
    return GetTimecycleModifierVarCount(modifierName);
}

/**
 * No comment provided
 * 
 * Hash: 0xE874AB1D
 */
export function getTimecycleModifierVarNameByIndex(modifierName: string, modifierVarIndex: number): string {
    return GetTimecycleModifierVarNameByIndex(modifierName, modifierVarIndex);
}

/**
 * Returns the amount of variables available to be applied on timecycle modifiers.
 * 
 * Hash: 0x838B34D8
 */
export function getTimecycleVarCount(): number {
    return GetTimecycleVarCount();
}

/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 * 
 * Hash: 0x3B90238
 */
export function getTimecycleVarDefaultValueByIndex(varIndex: number): number {
    return GetTimecycleVarDefaultValueByIndex(varIndex);
}

/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 * 
 * Hash: 0xC6C55AAF
 */
export function getTimecycleVarNameByIndex(varIndex: number): string {
    return GetTimecycleVarNameByIndex(varIndex);
}

/**
 * Converts a screen coordinate into its relative world coordinate.
 * 
 * Hash: 0xC81D0659
 */
export function getWorldCoordFromScreenCoord(screenSize: Vector2): [Vector3, Vector3] {
    return GetWorldCoordFromScreenCoord(screenSize.x, screenSize.y);
}

/**
 * No comment provided
 * 
 * Hash: 0x36DF8612
 */
export function removeTimecycleModifier(modifierName: string): void {
    RemoveTimecycleModifier(modifierName);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A5E0D05
 */
export function removeTimecycleModifierVar(modifierName: string, varName: string): void {
    RemoveTimecycleModifierVar(modifierName, varName);
}

/**
 * Requests a resource file set with the specified name to be downloaded and mounted on top of the current resource.
 * 
 * Resource file sets are specified in `fxmanifest.lua` with the following syntax:
 * 
 * ```lua
 * file_set 'addon_ui' {
 * 'ui/addon/index.html',
 * 'ui/addon\/\**.js',
 * }
 * ```
 * 
 * This command will trigger a script error if the request failed.
 * 
 * Hash: 0xE7490533
 */
export function requestResourceFileSet(setName: string): boolean {
    return RequestResourceFileSet(setName);
}

/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 * 
 * Hash: 0x8BBE6CC0
 */
export function sendLoadingScreenMessage(jsonString: string): boolean {
    return SendLoadingScreenMessage(jsonString);
}

/**
 * Toggles the visibility of resource names in the FiveM key mapping page.
 * 
 * Hash: 0xCB0241B5
 */
export function setKeyMappingHideResources(hide: boolean): void {
    SetKeyMappingHideResources(hide);
}

/**
 * No comment provided
 * 
 * Hash: 0xA7DD3209
 */
export function setSnakeoilForEntry(name: string, path: string, data: string): void {
    SetSnakeoilForEntry(name, path, data);
}

/**
 * No comment provided
 * 
 * Hash: 0x97B2F9F8
 */
export function setTextChatEnabled(enabled: boolean): boolean {
    return SetTextChatEnabled(enabled);
}

/**
 * No comment provided
 * 
 * Hash: 0x6E0A422B
 */
export function setTimecycleModifierVar(modifierName: string, varName: string, value1: number, value2: number): void {
    SetTimecycleModifierVar(modifierName, varName, value1, value2);
}

/**
 * No comment provided
 * 
 * Hash: 0xD264D4E1
 */
export function setWeatherCycleEntry(index: number, typeName: string, timeMult: number): boolean {
    return SetWeatherCycleEntry(index, typeName, timeMult);
}

/**
 * Sets whether or not the weather should be owned by the network subsystem.
 * 
 * To be able to use [\_SET_WEATHER_TYPE_TRANSITION](#\_0x578C752848ECFA0C), this has to be set to false.
 * 
 * Hash: 0x2703D582
 */
export function setWeatherOwnedByNetwork(network: boolean): void {
    SetWeatherOwnedByNetwork(network);
}

/**
 * The backing function for TriggerLatentServerEvent.
 * 
 * Hash: 0x128737EA
 */
export function triggerLatentServerEventInternal(eventName: string, eventPayload: string, payloadLength: number, bps: number): void {
    TriggerLatentServerEventInternal(eventName, eventPayload, payloadLength, bps);
}

/**
 * The backing function for TriggerServerEvent.
 * 
 * Hash: 0x7FDD1128
 */
export function triggerServerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void {
    TriggerServerEventInternal(eventName, eventPayload, payloadLength);
}

/**
 * Adds a listener for Console Variable changes.
 * 
 * The function called expects to match the following signature:
 * 
 * ```ts
 * function ConVarChangeListener(conVarName: string, reserved: any);
 * ```
 * 
 * *   **conVarName**: The ConVar that changed.
 * *   **reserved**: Currently unused.
 * 
 * Hash: 0xAB7F7241
 */
export function addConvarChangeListener(conVarFilter: string, handler: Function): number {
    return AddConvarChangeListener(conVarFilter, handler);
}

/**
 * Adds a handler for changes to a state bag.
 * 
 * The function called expects to match the following signature:
 * 
 * ```ts
 * function StateBagChangeHandler(bagName: string, key: string, value: any, reserved: number, replicated: boolean);
 * ```
 * 
 * *   **bagName**: The internal bag ID for the state bag which changed. This is usually `player:Source`, `entity:NetID`
 * or `localEntity:Handle`.
 * *   **key**: The changed key.
 * *   **value**: The new value stored at key. The old value is still stored in the state bag at the time this callback executes.
 * *   **reserved**: Currently unused.
 * *   **replicated**: Whether the set is meant to be replicated.
 * 
 * At this time, the change handler can't opt to reject changes.
 * 
 * If bagName refers to an entity, use [GET_ENTITY_FROM_STATE_BAG_NAME](#\_0x4BDF1867) to get the entity handle
 * If bagName refers to a player, use [GET_PLAYER_FROM_STATE_BAG_NAME](#\_0xA56135E0) to get the player handle
 * 
 * Hash: 0x5BA35AAF
 */
export function addStateBagChangeHandler(keyFilter: string, bagFilter: string, handler: Function): number {
    return AddStateBagChangeHandler(keyFilter, bagFilter, handler);
}

/**
 * Cancels the currently executing event.
 * 
 * Hash: 0xFA29D35D
 */
export function cancelEvent(): void {
    CancelEvent();
}

/**
 * No comment provided
 * 
 * Hash: 0x1E86F206
 */
export function deleteFunctionReference(referenceIdentity: string): void {
    DeleteFunctionReference(referenceIdentity);
}

/**
 * No comment provided
 * 
 * Hash: 0xF4E2079D
 */
export function duplicateFunctionReference(referenceIdentity: string): string {
    return DuplicateFunctionReference(referenceIdentity);
}

/**
 * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
 * 
 * Hash: 0x561C060B
 */
export function executeCommand(commandString: string): void {
    ExecuteCommand(commandString);
}

/**
 * An internal function for converting a stack trace object to a string.
 * 
 * Hash: 0xD70C3BCA
 */
export function formatStackTrace(traceData: number | IObject): string {
    const _traceData = traceData instanceof IObject ? traceData.handle() : traceData;
    return FormatStackTrace(_traceData);
}

/**
 * Can be used to get a console variable of type `char*`, for example a string.
 * 
 * Hash: 0x6CCD2564
 */
export function getConvar(varName: string, default_: string): string {
    return GetConvar(varName, default_);
}

/**
 * Can be used to get a console variable casted back to `bool`.
 * 
 * Hash: 0x7E8EBFE5
 */
export function getConvarBool(varName: string, defaultValue: boolean): boolean {
    return GetConvarBool(varName, defaultValue);
}

/**
 * This will have floating point inaccuracy.
 * 
 * Hash: 0x9E666D
 */
export function getConvarFloat(varName: string, defaultValue: number): number {
    return GetConvarFloat(varName, defaultValue);
}

/**
 * Can be used to get a console variable casted back to `int` (an integer value).
 * 
 * Hash: 0x935C0AB2
 */
export function getConvarInt(varName: string, default_: number): number {
    return GetConvarInt(varName, default_);
}

/**
 * Returns the internal build number of the current game being executed.
 * 
 * Possible values:
 * 
 * *   FiveM
 * *   1604
 * *   2060
 * *   2189
 * *   2372
 * *   2545
 * *   2612
 * *   2699
 * *   2802
 * *   2944
 * *   3095
 * *   3258
 * *   3323
 * *   3407
 * *   3570
 * *   RedM
 * *   1311
 * *   1355
 * *   1436
 * *   1491
 * *   LibertyM
 * *   43
 * *   FXServer
 * *   0
 * 
 * Hash: 0x804B9F7B
 */
export function getGameBuildNumber(): number {
    return GetGameBuildNumber();
}

/**
 * Returns the current game being executed.
 * 
 * Possible values:
 * 
 * | Return value | Meaning                        |
 * | ------------ | ------------------------------ |
 * | `fxserver`   | Server-side code ('Duplicity') |
 * | `fivem`      | FiveM for GTA V                |
 * | `libertym`   | LibertyM for GTA IV            |
 * | `redm`       | RedM for Red Dead Redemption 2 |
 * 
 * Hash: 0xE8EAA18B
 */
export function getGameName(): string {
    return GetGameName();
}

/**
 * Returns a list of entity handles (script GUID) for all entities in the specified pool - the data returned is an array as
 * follows:
 * 
 * ```json
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 * 
 * ### Supported pools
 * 
 * *   `CPed`: Peds (including animals) and players.
 * *   `CObject`: Objects (props), doors, and projectiles.
 * *   `CNetObject`: Networked objects
 * *   `CVehicle`: Vehicles.
 * *   `CPickup`: Pickups.
 * 
 * Hash: 0x2B9D4F50
 */
export function getGamePool(poolName: string): number {
    return GetGamePool(poolName);
}

/**
 * No comment provided
 * 
 * Hash: 0x9F1C4383
 */
export function getInstanceId(): number {
    return GetInstanceId();
}

/**
 * Returns all commands that are registered in the command system.
 * The data returned adheres to the following layout:
 * 
 * ```
 * [
 * {
 * "name": "cmdlist",
 * "resource": "resource",
 * "arity" = -1,
 * },
 * {
 * "name": "command1"
 * "resource": "resource_2",
 * "arity" = -1,
 * }
 * ]
 * ```
 * 
 * Hash: 0xD4BEF069
 */
export function getRegisteredCommands(): number {
    return GetRegisteredCommands();
}

/**
 * No comment provided
 * 
 * Hash: 0x78D864C7
 */
export function getStateBagKeys(bagName: string): number {
    return GetStateBagKeys(bagName);
}

/**
 * Returns the value of a state bag key.
 * 
 * Hash: 0x637F4C75
 */
export function getStateBagValue(bagName: string, key: string): number {
    return GetStateBagValue(bagName, key);
}

/**
 * No comment provided
 * 
 * Hash: 0x7EBB9929
 */
export function isAceAllowed(_object: string): boolean {
    return IsAceAllowed(_object);
}

/**
 * Gets whether or not this is the CitizenFX server.
 * 
 * Hash: 0xCF24C52E
 */
export function isDuplicityVersion(): boolean {
    return IsDuplicityVersion();
}

/**
 * No comment provided
 * 
 * Hash: 0x37CF52CE
 */
export function isPrincipalAceAllowed(principal: string, _object: string): boolean {
    return IsPrincipalAceAllowed(principal, _object);
}

/**
 * Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). Or by entering them in the server console/through an RCON client (only works for server side registered commands). Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a `/`.
 * 
 * Commands registered using this function can also be executed by resources, using the [`ExecuteCommand` native](#\_0x561C060B).
 * 
 * The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).
 * 
 * **Example result**:
 * 
 * ![](https://i.imgur.com/TaCnG09.png)
 * 
 * Hash: 0x5FA79B0F
 */
export function registerCommand(commandName: string, handler: Function, restricted: boolean): void {
    RegisterCommand(commandName, handler, restricted);
}

/**
 * No comment provided
 * 
 * Hash: 0xEAC49841
 */
export function removeConvarChangeListener(cookie: number): void {
    RemoveConvarChangeListener(cookie);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Removes a handler for changes to a state bag.
 * 
 * Hash: 0xD36BE661
 */
export function removeStateBagChangeHandler(cookie: number): void {
    RemoveStateBagChangeHandler(cookie);
}

/**
 * Internal function for setting a state bag value.
 * 
 * Hash: 0x8D50E33A
 */
export function setStateBagValue(bagName: string, keyName: string, valueData: string, valueLength: number, replicated: boolean): void {
    SetStateBagValue(bagName, keyName, valueData, valueLength, replicated);
}

/**
 * No comment provided
 * 
 * Hash: 0x12A330
 */
export function stateBagHasKey(bagName: string, key: string): boolean {
    return StateBagHasKey(bagName, key);
}

/**
 * The backing function for TriggerEvent.
 * 
 * Hash: 0x91310870
 */
export function triggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void {
    TriggerEventInternal(eventName, eventPayload, payloadLength);
}

/**
 * Returns whether or not the currently executing event was canceled.
 * 
 * Hash: 0x58382A19
 */
export function wasEventCanceled(): boolean {
    return WasEventCanceled();
}

