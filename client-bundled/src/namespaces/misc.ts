import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * Adds the given model name hash to the list of valid models for the player ped's parachute.
 * 
 * Hash: 0x8AC7AE9 | Since: unknown | API-Set: client
 */
export function addAuthorizedParachuteModel(modelNameHash: number): void {
    AddAuthorizedParachuteModel(modelNameHash);
}

/**
 * Adds the given model name hash to the list of valid models for the player ped's parachute pack.
 * 
 * Hash: 0x2E86DEA5 | Since: unknown | API-Set: client
 */
export function addAuthorizedParachutePackModel(modelNameHash: number): void {
    AddAuthorizedParachutePackModel(modelNameHash);
}

/**
 * Adds new health config.
 * 
 * Hash: 0x9CBFD5C1 | Since: unknown | API-Set: client
 */
export function addHealthConfig(configName: string, defaultHealth: number, defaultArmor: number, defaultEndurance: number, fatiguedHealthThreshold: number, injuredHealthThreshold: number, dyingHealthThreshold: number, hurtHealthThreshold: number, dogTakedownThreshold: number, writheFromBulletThreshold: number, meleeCardinalFatalAttack: boolean, invincible: boolean): void {
    AddHealthConfig(configName, defaultHealth, defaultArmor, defaultEndurance, fatiguedHealthThreshold, injuredHealthThreshold, dyingHealthThreshold, hurtHealthThreshold, dogTakedownThreshold, writheFromBulletThreshold, meleeCardinalFatalAttack, invincible);
}

/**
 * Disables the editor runtime mode, changing game behavior to not track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0xB1622B17 | Since: unknown | API-Set: client
 */
export function disableEditorRuntime(): void {
    DisableEditorRuntime();
}

/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity.
 * 
 * Hash: 0x3D5AB7F0 | Since: unknown | API-Set: client
 */
export function disableIdleCamera(state: boolean): void {
    DisableIdleCamera(state);
}

/**
 * Enables the editor runtime mode, changing game behavior to track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0xC383871D | Since: unknown | API-Set: client
 */
export function enableEditorRuntime(): void {
    EnableEditorRuntime();
}

/**
 * Enters cursor mode, suppressing mouse movement to the game and displaying a mouse cursor instead. This function supports
 * SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0x780DA86 | Since: unknown | API-Set: client
 */
export function enterCursorMode(): void {
    EnterCursorMode();
}

/**
 * A getter for [SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME](#\_0x0B919E1FB47CC4E0).
 * 
 * Hash: 0xB550232D | Since: unknown | API-Set: client
 */
export function getAmbientPedRangeMultiplier(): number {
    return GetAmbientPedRangeMultiplier();
}

/**
 * This native returns the index of a calming quad if the given point is inside its bounds.
 * 
 * Hash: 0x870E8B40 | Since: unknown | API-Set: client
 */
export function getCalmingQuadAtCoords(x: number, y: number): number {
    return GetCalmingQuadAtCoords(x, y);
}

/**
 * No comment provided
 * 
 * Hash: 0xFF60E63 | Since: unknown | API-Set: client
 */
export function getCalmingQuadBounds(waterQuad: number): [boolean, number, number, number, number] {
    return GetCalmingQuadBounds(waterQuad);
}

/**
 * No comment provided
 * 
 * Hash: 0xCEBFC42 | Since: unknown | API-Set: client
 */
export function getCalmingQuadCount(): number {
    return GetCalmingQuadCount();
}

/**
 * No comment provided
 * 
 * Hash: 0xB0E3A058 | Since: unknown | API-Set: client
 */
export function getCalmingQuadDampening(waterQuad: number): [boolean, number] {
    return GetCalmingQuadDampening(waterQuad);
}

/**
 * No comment provided
 * 
 * Hash: 0x5550BF9F | Since: unknown | API-Set: client
 */
export function getFuelConsumptionRateMultiplier(): number {
    return GetFuelConsumptionRateMultiplier();
}

/**
 * No comment provided
 * 
 * Hash: 0xC66CD90C | Since: unknown | API-Set: client
 */
export function getFuelConsumptionState(): boolean {
    return GetFuelConsumptionState();
}

/**
 * A getter for [SET_GLOBAL_PASSENGER_MASS_MULTIPLIER](#\_0x3422291C).
 * 
 * Hash: 0x78951816 | Since: unknown | API-Set: client
 */
export function getGlobalPassengerMassMultiplier(): number {
    return GetGlobalPassengerMassMultiplier();
}

/**
 * Retrieves the map data entity handle.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0x30AA6911 | Since: unknown | API-Set: client
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
 * Hash: 0x2C3CDA93 | Since: unknown | API-Set: client
 */
export function getMapdataEntityMatrix(mapDataHash: number, entityInternalIdx: number, matrixPtr: number): boolean {
    return GetMapdataEntityMatrix(mapDataHash, entityInternalIdx, matrixPtr);
}

/**
 * Returns the transient map data index for a specified hash.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0xD29D8EDD | Since: unknown | API-Set: client
 */
export function getMapdataFromHashKey(mapdataHandle: number | string): number {
    if (typeof mapdataHandle === 'string') mapdataHandle = GetHashKey(mapdataHandle)
    return GetMapdataFromHashKey(mapdataHandle);
}

/**
 * A getter for [SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xEAE6DCC7EEE3DB1D).
 * 
 * Hash: 0xFF72DF84 | Since: unknown | API-Set: client
 */
export function getParkedVehicleDensityMultiplier(): number {
    return GetParkedVehicleDensityMultiplier();
}

/**
 * A getter for [SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xB3B3359379FE77D3).
 * Same as vehicle density multiplier.
 * 
 * Hash: 0x7B0D00C5 | Since: unknown | API-Set: client
 */
export function getRandomVehicleDensityMultiplier(): number {
    return GetRandomVehicleDensityMultiplier();
}

/**
 * A getter for [SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x7A556143A1C03898).
 * 
 * Hash: 0x77C598B2 | Since: unknown | API-Set: client
 */
export function getScenarioPedDensityMultiplier(): number {
    return GetScenarioPedDensityMultiplier();
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Returns whether an asynchronous streaming file registration completed.
 * 
 * Hash: 0xA194934D | Since: unknown | API-Set: client
 */
export function isStreamingFileReady(registerAs: string): boolean {
    return IsStreamingFileReady(registerAs);
}

/**
 * Leaves cursor mode. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0xADECF19E | Since: unknown | API-Set: client
 */
export function leaveCursorMode(): void {
    LeaveCursorMode();
}

/**
 * Toggles a check that prevents attaching (networked) entities to remotely owned peds. This is disabled by default.
 * 
 * Hash: 0x30CE39D8 | Since: unknown | API-Set: client
 */
export function onesyncEnableRemoteAttachmentSanitization(enable: boolean): void {
    OnesyncEnableRemoteAttachmentSanitization(enable);
}

/**
 * Replaces the `popgroups` (CPopGroupList) meta file with the file in the specified path.
 * 
 * Hash: 0xD3BC438F | Since: unknown | API-Set: client
 */
export function overridePopGroups(path: string): void {
    OverridePopGroups(path);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a set of archetypes with the game engine. These should match `CBaseArchetypeDef` class information from the game.
 * 
 * Hash: 0x3C2F9037 | Since: unknown | API-Set: client
 */
export function registerArchetypes(factory: Function): void {
    RegisterArchetypes(factory);
}

/**
 * Registers a specified .gfx file as GFx font library.
 * The .gfx file has to be registered with the streamer already.
 * 
 * Hash: 0x1B3A363 | Since: unknown | API-Set: client
 */
export function registerFontFile(fileName: string): void {
    RegisterFontFile(fileName);
}

/**
 * Registers a specified font name for use with text draw commands.
 * 
 * Hash: 0xACF6D8EE | Since: unknown | API-Set: client
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
 * Hash: 0xD7664FD1 | Since: unknown | API-Set: client
 */
export function registerKeyMapping(commandString: string, description: string, defaultMapper: string, defaultParameter: string): void {
    RegisterKeyMapping(commandString, description, defaultMapper, defaultParameter);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a dynamic streaming asset from the server with the GTA streaming module system.
 * 
 * Hash: 0xCEAD2D4B | Since: unknown | API-Set: client
 */
export function registerStreamingFileFromCache(resourceName: string, fileName: string, cacheString: string): void {
    RegisterStreamingFileFromCache(resourceName, fileName, cacheString);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a KVP value as an asset with the GTA streaming module system. This function currently won't work.
 * 
 * Hash: 0x1493DCC1 | Since: unknown | API-Set: client
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
 * Hash: 0xF44BFB95 | Since: unknown | API-Set: client
 */
export function registerStreamingFileFromUrl(registerAs: string, url: string): void {
    RegisterStreamingFileFromUrl(registerAs, url);
}

/**
 * Removes health config.
 * 
 * Hash: 0xE0ED5FB | Since: unknown | API-Set: client
 */
export function removeHealthConfig(configName: string): void {
    RemoveHealthConfig(configName);
}

/**
 * Adds a cooldown between instances of moving and then aiming.
 * Can be optionally used to hinder 'speedboosting'
 * To turn off, set value to 0
 * 
 * Hash: 0xA42A3DBF | Since: unknown | API-Set: client
 */
export function setAimCooldown(value: number): void {
    SetAimCooldown(value);
}

/**
 * No comment provided
 * 
 * Hash: 0xC5945BD9 | Since: unknown | API-Set: client
 */
export function setCalmingQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean {
    return SetCalmingQuadBounds(waterQuad, minX, minY, maxX, maxY);
}

/**
 * No comment provided
 * 
 * Hash: 0x67977501 | Since: unknown | API-Set: client
 */
export function setCalmingQuadDampening(calmingQuad: number, dampening: number): boolean {
    return SetCalmingQuadDampening(calmingQuad, dampening);
}

/**
 * Allows Weapon-Flashlight beams to stay visible while moving. Normally it only stays on while aiming.
 * 
 * Hash: 0x7635B349 | Since: unknown | API-Set: client
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
 * Hash: 0x845F3E5C | Since: unknown | API-Set: client
 */
export function setFuelConsumptionRateMultiplier(multiplier: number): void {
    SetFuelConsumptionRateMultiplier(multiplier);
}

/**
 * Turns on and off fuel consumption in all vehicles operated by a player. NPC operated vehicles will not consume fuel to avoid traffic disruptions.
 * 
 * The default Gta5 behaviour is fuel consumption turned off.
 * 
 * Hash: 0x81DAD03E | Since: unknown | API-Set: client
 */
export function setFuelConsumptionState(state: boolean): void {
    SetFuelConsumptionState(state);
}

/**
 * No comment provided
 * 
 * Hash: 0x1C47F6AC | Since: unknown | API-Set: client
 */
export function setGlobalPassengerMassMultiplier(massMul: number): void {
    SetGlobalPassengerMassMultiplier(massMul);
}

/**
 * Sets default armor value for specific health config.
 * 
 * Hash: 0x20A1E6A2 | Since: unknown | API-Set: client
 */
export function setHealthConfigDefaultArmor(configName: string, newValue: number): void {
    SetHealthConfigDefaultArmor(configName, newValue);
}

/**
 * Sets default endurance value for specific health config.
 * 
 * Hash: 0x60F20B81 | Since: unknown | API-Set: client
 */
export function setHealthConfigDefaultEndurance(configName: string, newValue: number): void {
    SetHealthConfigDefaultEndurance(configName, newValue);
}

/**
 * Sets default health value for specific health config.
 * 
 * Hash: 0xC705C778 | Since: unknown | API-Set: client
 */
export function setHealthConfigDefaultHealth(configName: string, newValue: number): void {
    SetHealthConfigDefaultHealth(configName, newValue);
}

/**
 * Sets default dog takedown threshold value for specific health config.
 * 
 * Hash: 0x9A995E96 | Since: unknown | API-Set: client
 */
export function setHealthConfigDogTakedownThreshold(configName: string, newValue: number): void {
    SetHealthConfigDogTakedownThreshold(configName, newValue);
}

/**
 * Sets default dying health threshold value for specific health config.
 * 
 * Hash: 0x9B00FD77 | Since: unknown | API-Set: client
 */
export function setHealthConfigDyingThreshold(configName: string, newValue: number): void {
    SetHealthConfigDyingThreshold(configName, newValue);
}

/**
 * Sets default fatigued health threshold value for specific health config.
 * 
 * Hash: 0xC58953FD | Since: unknown | API-Set: client
 */
export function setHealthConfigFatiguedThreshold(configName: string, newValue: number): void {
    SetHealthConfigFatiguedThreshold(configName, newValue);
}

/**
 * Sets default hurt health threshold value for specific health config.
 * 
 * Hash: 0x98DF1A83 | Since: unknown | API-Set: client
 */
export function setHealthConfigHurtThreshold(configName: string, newValue: number): void {
    SetHealthConfigHurtThreshold(configName, newValue);
}

/**
 * Sets default injured health threshold value for specific health config.
 * 
 * Hash: 0xF9D9B647 | Since: unknown | API-Set: client
 */
export function setHealthConfigInjuredThreshold(configName: string, newValue: number): void {
    SetHealthConfigInjuredThreshold(configName, newValue);
}

/**
 * Sets default invincible value for specific health config.
 * 
 * Hash: 0x4A9EEDE6 | Since: unknown | API-Set: client
 */
export function setHealthConfigInvincible(configName: string, newValue: boolean): void {
    SetHealthConfigInvincible(configName, newValue);
}

/**
 * Sets default melee cardinal fatal attack value for specific health config.
 * 
 * Hash: 0xDD443E53 | Since: unknown | API-Set: client
 */
export function setHealthConfigMeleeFatalAttack(configName: string, newValue: boolean): void {
    SetHealthConfigMeleeFatalAttack(configName, newValue);
}

/**
 * Sets default writhe from bullet threshold value for specific health config.
 * 
 * Hash: 0xE97633CB | Since: unknown | API-Set: client
 */
export function setHealthConfigWritheFromBulletThreshold(configName: string, newValue: number): void {
    SetHealthConfigWritheFromBulletThreshold(configName, newValue);
}

/**
 * Overrides how many real ms are equal to one game minute.
 * A setter for [`GetMillisecondsPerGameMinute`](#\_0x2F8B4D1C595B11DB).
 * 
 * Hash: 0x36CA2554 | Since: unknown | API-Set: client
 */
export function setMillisecondsPerGameMinute(value: number): void {
    SetMillisecondsPerGameMinute(value);
}

/**
 * <strong>This native is deprecated and does nothing!</strong>
 * 
 * Hash: 0x7F6B8D75 | Since: unknown | API-Set: client
 */
export function setModelHeadlightConfiguration(modelHash: number | string, ratePerSecond: number, headlightRotation: number, invertRotation: boolean): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    SetModelHeadlightConfiguration(modelHash, ratePerSecond, headlightRotation, invertRotation);
}

/**
 * Sets whether all tags should group (normal game behavior) or should remain independent and above each ped's respective head when in a vehicle.
 * 
 * Hash: 0x7A27BC93 | Since: unknown | API-Set: client
 */
export function setMpGamerTagsUseVehicleBehavior(enabled: boolean): void {
    SetMpGamerTagsUseVehicleBehavior(enabled);
}

/**
 * Sets the maximum distance at which all tags will be visible and which beyond will not be displayed. Distance is measured from the camera position.
 * 
 * Hash: 0xD61676B3 | Since: unknown | API-Set: client
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
 * Hash: 0x49C1F6DC | Since: unknown | API-Set: client
 */
export function registerRawKeymap(keymapName: string, onKeyDown: Function, onKeyUp: Function, rawKeyIndex: number, canBeDisabled: boolean): void {
    RegisterRawKeymap(keymapName, onKeyDown, onKeyUp, rawKeyIndex, canBeDisabled);
}

/**
 * Remaps the keymap bound to `keymapName` to `newRawKeyIndex`
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * Hash: 0x6E38C1B9 | Since: unknown | API-Set: client
 */
export function remapRawKeymap(keymapName: string, newRawKeyIndex: number): void {
    RemapRawKeymap(keymapName, newRawKeyIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xC44C2F44 | Since: unknown | API-Set: client
 */
export function setBackfaceculling(toggle: boolean): void {
    SetBackfaceculling(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8A7A8DAC | Since: unknown | API-Set: client
 */
export function setCursorLocation(x: number, y: number): boolean {
    return SetCursorLocation(x, y);
}

/**
 * Sets whether or not ownership checks should be performed while trying to stow a carriable on a hunting wagon.
 * 
 * Hash: 0x85A10FFD | Since: unknown | API-Set: client
 */
export function setIgnoreVehicleOwnershipForStowing(ignore: boolean): void {
    SetIgnoreVehicleOwnershipForStowing(ignore);
}

/**
 * Activates built-in timecycle editing tool.
 * 
 * Hash: 0xEEB9B76A | Since: unknown | API-Set: client
 */
export function activateTimecycleEditor(): void {
    ActivateTimecycleEditor();
}

/**
 * No comment provided
 * 
 * Hash: 0x3422291C | Since: unknown | API-Set: client
 */
export function applyWeatherCycles(numEntries: number, msPerCycle: number): boolean {
    return ApplyWeatherCycles(numEntries, msPerCycle);
}

/**
 * No comment provided
 * 
 * Hash: 0x54D636B3 | Since: unknown | API-Set: client
 */
export function cloneTimecycleModifier(sourceModifierName: string, clonedModifierName: string): number {
    return CloneTimecycleModifier(sourceModifierName, clonedModifierName);
}

/**
 * Create a clean timecycle modifier. See [`SET_TIMECYCLE_MODIFIER_VAR`](#\_0x6E0A422B) to add variables.
 * 
 * Hash: 0x70FA2AFA | Since: unknown | API-Set: client
 */
export function createTimecycleModifier(modifierName: string): number {
    return CreateTimecycleModifier(modifierName);
}

/**
 * Disables the game's world horizon lods rendering (see `farlods.#dd`).
 * Using the island hopper natives might also affect this state.
 * 
 * Hash: 0xA9C92CDC | Since: unknown | API-Set: client
 */
export function disableWorldhorizonRendering(state: boolean): void {
    DisableWorldhorizonRendering(state);
}

/**
 * No comment provided
 * 
 * Hash: 0xC53BB6D3 | Since: unknown | API-Set: client
 */
export function doesTimecycleModifierHasVar(modifierName: string, varName: string): boolean {
    return DoesTimecycleModifierHasVar(modifierName, varName);
}

/**
 * No comment provided
 * 
 * Hash: 0xDEDA4E50 | Since: unknown | API-Set: client
 */
export function endFindObject(findHandle: number): void {
    EndFindObject(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9615C2AD | Since: unknown | API-Set: client
 */
export function endFindPed(findHandle: number): void {
    EndFindPed(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x3C407D53 | Since: unknown | API-Set: client
 */
export function endFindPickup(findHandle: number): void {
    EndFindPickup(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9227415A | Since: unknown | API-Set: client
 */
export function endFindVehicle(findHandle: number): void {
    EndFindVehicle(findHandle);
}

/**
 * This native is not implemented.
 * 
 * Hash: 0xD2CB95A3 | Since: unknown | API-Set: client
 */
export function experimentalLoadCloneCreate(data: string, objectId: number, tree: string): number {
    return ExperimentalLoadCloneCreate(data, objectId, tree);
}

/**
 * This native is not implemented.
 * 
 * Hash: 0x6BC189AC | Since: unknown | API-Set: client
 */
export function experimentalLoadCloneSync(entity: number | IEntity, data: string): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    ExperimentalLoadCloneSync(_entity, data);
}

/**
 * This native is not implemented.
 * 
 * Hash: 0x9D65CAD2 | Since: unknown | API-Set: client
 */
export function experimentalSaveCloneCreate(entity: number | IEntity): string {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return ExperimentalSaveCloneCreate(_entity);
}

/**
 * This native is not implemented.
 * 
 * Hash: 0x38D19210 | Since: unknown | API-Set: client
 */
export function experimentalSaveCloneSync(entity: number | IEntity): string {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return ExperimentalSaveCloneSync(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xFAA6CB5D | Since: unknown | API-Set: client
 */
export function findFirstObject(): [number, number] {
    return FindFirstObject();
}

/**
 * No comment provided
 * 
 * Hash: 0xFB012961 | Since: unknown | API-Set: client
 */
export function findFirstPed(): [number, number] {
    return FindFirstPed();
}

/**
 * No comment provided
 * 
 * Hash: 0x3FF9D340 | Since: unknown | API-Set: client
 */
export function findFirstPickup(): [number, number] {
    return FindFirstPickup();
}

/**
 * No comment provided
 * 
 * Hash: 0x15E55694 | Since: unknown | API-Set: client
 */
export function findFirstVehicle(): [number, number] {
    return FindFirstVehicle();
}

/**
 * No comment provided
 * 
 * Hash: 0x4E129DBF | Since: unknown | API-Set: client
 */
export function findNextObject(findHandle: number): [boolean, number] {
    return FindNextObject(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0xAB09B548 | Since: unknown | API-Set: client
 */
export function findNextPed(findHandle: number): [boolean, number] {
    return FindNextPed(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x4107EF0F | Since: unknown | API-Set: client
 */
export function findNextPickup(findHandle: number): [boolean, number] {
    return FindNextPickup(findHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8839120D | Since: unknown | API-Set: client
 */
export function findNextVehicle(findHandle: number): [boolean, number] {
    return FindNextVehicle(findHandle);
}

/**
 * This native returns the currently used game's name.
 * 
 * Hash: 0xACA18ECD | Since: unknown | API-Set: client
 */
export function getCurrentGameName(): string {
    return GetCurrentGameName();
}

/**
 * Returns the peer address of the remote game server that the user is currently connected to.
 * 
 * Hash: 0xEA11BFBA | Since: unknown | API-Set: client
 */
export function getCurrentServerEndpoint(): string {
    return GetCurrentServerEndpoint();
}

/**
 * No comment provided
 * 
 * Hash: 0xFE2A1D4D | Since: unknown | API-Set: client
 */
export function getTimecycleModifierCount(): number {
    return GetTimecycleModifierCount();
}

/**
 * No comment provided
 * 
 * Hash: 0x5F4CD0E2 | Since: unknown | API-Set: client
 */
export function getTimecycleModifierIndexByName(modifierName: string): number {
    return GetTimecycleModifierIndexByName(modifierName);
}

/**
 * No comment provided
 * 
 * Hash: 0x28CB8608 | Since: unknown | API-Set: client
 */
export function getTimecycleModifierNameByIndex(modifierIndex: number): string {
    return GetTimecycleModifierNameByIndex(modifierIndex);
}

/**
 * A getter for [SET_TIMECYCLE_MODIFIER_STRENGTH](#\_0x82E7FFCD5B2326B3).
 * 
 * Hash: 0xBE54124A | Since: unknown | API-Set: client
 */
export function getTimecycleModifierStrength(): number {
    return GetTimecycleModifierStrength();
}

/**
 * No comment provided
 * 
 * Hash: 0xA7109E12 | Since: unknown | API-Set: client
 */
export function getTimecycleModifierVar(modifierName: string, varName: string): [boolean, number, number] {
    return GetTimecycleModifierVar(modifierName, varName);
}

/**
 * No comment provided
 * 
 * Hash: 0x60FB60FE | Since: unknown | API-Set: client
 */
export function getTimecycleModifierVarCount(modifierName: string): number {
    return GetTimecycleModifierVarCount(modifierName);
}

/**
 * No comment provided
 * 
 * Hash: 0xE874AB1D | Since: unknown | API-Set: client
 */
export function getTimecycleModifierVarNameByIndex(modifierName: string, modifierVarIndex: number): string {
    return GetTimecycleModifierVarNameByIndex(modifierName, modifierVarIndex);
}

/**
 * Returns the amount of variables available to be applied on timecycle modifiers.
 * 
 * Hash: 0x838B34D8 | Since: unknown | API-Set: client
 */
export function getTimecycleVarCount(): number {
    return GetTimecycleVarCount();
}

/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 * 
 * Hash: 0x3B90238 | Since: unknown | API-Set: client
 */
export function getTimecycleVarDefaultValueByIndex(varIndex: number): number {
    return GetTimecycleVarDefaultValueByIndex(varIndex);
}

/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 * 
 * Hash: 0xC6C55AAF | Since: unknown | API-Set: client
 */
export function getTimecycleVarNameByIndex(varIndex: number): string {
    return GetTimecycleVarNameByIndex(varIndex);
}

/**
 * Converts a screen coordinate into its relative world coordinate.
 * 
 * Hash: 0xC81D0659 | Since: unknown | API-Set: client
 */
export function getWorldCoordFromScreenCoord(screenSize: Vector2): [Vector3, Vector3] {
    return GetWorldCoordFromScreenCoord(screenSize.x, screenSize.y);
}

/**
 * No comment provided
 * 
 * Hash: 0x36DF8612 | Since: unknown | API-Set: client
 */
export function removeTimecycleModifier(modifierName: string): void {
    RemoveTimecycleModifier(modifierName);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A5E0D05 | Since: unknown | API-Set: client
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
 * Hash: 0xE7490533 | Since: unknown | API-Set: client
 */
export function requestResourceFileSet(setName: string): boolean {
    return RequestResourceFileSet(setName);
}

/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 * 
 * Hash: 0x8BBE6CC0 | Since: unknown | API-Set: client
 */
export function sendLoadingScreenMessage(jsonString: string): boolean {
    return SendLoadingScreenMessage(jsonString);
}

/**
 * Toggles the visibility of resource names in the FiveM key mapping page.
 * 
 * Hash: 0xCB0241B5 | Since: unknown | API-Set: client
 */
export function setKeyMappingHideResources(hide: boolean): void {
    SetKeyMappingHideResources(hide);
}

/**
 * No comment provided
 * 
 * Hash: 0xA7DD3209 | Since: unknown | API-Set: client
 */
export function setSnakeoilForEntry(name: string, path: string, data: string): void {
    SetSnakeoilForEntry(name, path, data);
}

/**
 * No comment provided
 * 
 * Hash: 0x97B2F9F8 | Since: unknown | API-Set: client
 */
export function setTextChatEnabled(enabled: boolean): boolean {
    return SetTextChatEnabled(enabled);
}

/**
 * No comment provided
 * 
 * Hash: 0x6E0A422B | Since: unknown | API-Set: client
 */
export function setTimecycleModifierVar(modifierName: string, varName: string, value1: number, value2: number): void {
    SetTimecycleModifierVar(modifierName, varName, value1, value2);
}

/**
 * No comment provided
 * 
 * Hash: 0xD264D4E1 | Since: unknown | API-Set: client
 */
export function setWeatherCycleEntry(index: number, typeName: string, timeMult: number): boolean {
    return SetWeatherCycleEntry(index, typeName, timeMult);
}

/**
 * Sets whether or not the weather should be owned by the network subsystem.
 * 
 * To be able to use [\_SET_WEATHER_TYPE_TRANSITION](#\_0x578C752848ECFA0C), this has to be set to false.
 * 
 * Hash: 0x2703D582 | Since: unknown | API-Set: client
 */
export function setWeatherOwnedByNetwork(network: boolean): void {
    SetWeatherOwnedByNetwork(network);
}

/**
 * The backing function for TriggerLatentServerEvent.
 * 
 * Hash: 0x128737EA | Since: unknown | API-Set: client
 */
export function triggerLatentServerEventInternal(eventName: string, eventPayload: string, payloadLength: number, bps: number): void {
    TriggerLatentServerEventInternal(eventName, eventPayload, payloadLength, bps);
}

/**
 * The backing function for TriggerServerEvent.
 * 
 * Hash: 0x7FDD1128 | Since: unknown | API-Set: client
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
 * Hash: 0xAB7F7241 | Since: unknown | API-Set: shared
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
 * Hash: 0x5BA35AAF | Since: unknown | API-Set: shared
 */
export function addStateBagChangeHandler(keyFilter: string, bagFilter: string, handler: Function): number {
    return AddStateBagChangeHandler(keyFilter, bagFilter, handler);
}

/**
 * Cancels the currently executing event.
 * 
 * Hash: 0xFA29D35D | Since: unknown | API-Set: shared
 */
export function cancelEvent(): void {
    CancelEvent();
}

/**
 * No comment provided
 * 
 * Hash: 0x1E86F206 | Since: unknown | API-Set: shared
 */
export function deleteFunctionReference(referenceIdentity: string): void {
    DeleteFunctionReference(referenceIdentity);
}

/**
 * No comment provided
 * 
 * Hash: 0xF4E2079D | Since: unknown | API-Set: shared
 */
export function duplicateFunctionReference(referenceIdentity: string): string {
    return DuplicateFunctionReference(referenceIdentity);
}

/**
 * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
 * 
 * Hash: 0x561C060B | Since: unknown | API-Set: shared
 */
export function executeCommand(commandString: string): void {
    ExecuteCommand(commandString);
}

/**
 * An internal function for converting a stack trace object to a string.
 * 
 * Hash: 0xD70C3BCA | Since: unknown | API-Set: shared
 */
export function formatStackTrace(traceData: number | IObject): string {
    const _traceData = traceData instanceof IObject ? traceData.handle() : traceData;
    return FormatStackTrace(_traceData);
}

/**
 * Can be used to get a console variable of type `char*`, for example a string.
 * 
 * Hash: 0x6CCD2564 | Since: unknown | API-Set: shared
 */
export function getConvar(varName: string, default_: string): string {
    return GetConvar(varName, default_);
}

/**
 * Can be used to get a console variable casted back to `bool`.
 * 
 * Hash: 0x7E8EBFE5 | Since: unknown | API-Set: shared
 */
export function getConvarBool(varName: string, defaultValue: boolean): boolean {
    return GetConvarBool(varName, defaultValue);
}

/**
 * This will have floating point inaccuracy.
 * 
 * Hash: 0x9E666D | Since: unknown | API-Set: shared
 */
export function getConvarFloat(varName: string, defaultValue: number): number {
    return GetConvarFloat(varName, defaultValue);
}

/**
 * Can be used to get a console variable casted back to `int` (an integer value).
 * 
 * Hash: 0x935C0AB2 | Since: unknown | API-Set: shared
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
 * Hash: 0x804B9F7B | Since: unknown | API-Set: shared
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
 * Hash: 0xE8EAA18B | Since: unknown | API-Set: shared
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
 * Hash: 0x2B9D4F50 | Since: unknown | API-Set: shared
 */
export function getGamePool(poolName: string): number {
    return GetGamePool(poolName);
}

/**
 * No comment provided
 * 
 * Hash: 0x9F1C4383 | Since: unknown | API-Set: shared
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
 * Hash: 0xD4BEF069 | Since: unknown | API-Set: shared
 */
export function getRegisteredCommands(): number {
    return GetRegisteredCommands();
}

/**
 * No comment provided
 * 
 * Hash: 0x78D864C7 | Since: unknown | API-Set: shared
 */
export function getStateBagKeys(bagName: string): number {
    return GetStateBagKeys(bagName);
}

/**
 * Returns the value of a state bag key.
 * 
 * Hash: 0x637F4C75 | Since: unknown | API-Set: shared
 */
export function getStateBagValue(bagName: string, key: string): number {
    return GetStateBagValue(bagName, key);
}

/**
 * No comment provided
 * 
 * Hash: 0x7EBB9929 | Since: unknown | API-Set: shared
 */
export function isAceAllowed(_object: string): boolean {
    return IsAceAllowed(_object);
}

/**
 * Gets whether or not this is the CitizenFX server.
 * 
 * Hash: 0xCF24C52E | Since: unknown | API-Set: shared
 */
export function isDuplicityVersion(): boolean {
    return IsDuplicityVersion();
}

/**
 * No comment provided
 * 
 * Hash: 0x37CF52CE | Since: unknown | API-Set: shared
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
 * Hash: 0x5FA79B0F | Since: unknown | API-Set: shared
 */
export function registerCommand(commandName: string, handler: Function, restricted: boolean): void {
    RegisterCommand(commandName, handler, restricted);
}

/**
 * No comment provided
 * 
 * Hash: 0xEAC49841 | Since: unknown | API-Set: shared
 */
export function removeConvarChangeListener(cookie: number): void {
    RemoveConvarChangeListener(cookie);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Removes a handler for changes to a state bag.
 * 
 * Hash: 0xD36BE661 | Since: unknown | API-Set: shared
 */
export function removeStateBagChangeHandler(cookie: number): void {
    RemoveStateBagChangeHandler(cookie);
}

/**
 * Internal function for setting a state bag value.
 * 
 * Hash: 0x8D50E33A | Since: unknown | API-Set: shared
 */
export function setStateBagValue(bagName: string, keyName: string, valueData: string, valueLength: number, replicated: boolean): void {
    SetStateBagValue(bagName, keyName, valueData, valueLength, replicated);
}

/**
 * No comment provided
 * 
 * Hash: 0x12A330 | Since: unknown | API-Set: shared
 */
export function stateBagHasKey(bagName: string, key: string): boolean {
    return StateBagHasKey(bagName, key);
}

/**
 * The backing function for TriggerEvent.
 * 
 * Hash: 0x91310870 | Since: unknown | API-Set: shared
 */
export function triggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void {
    TriggerEventInternal(eventName, eventPayload, payloadLength);
}

/**
 * Returns whether or not the currently executing event was canceled.
 * 
 * Hash: 0x58382A19 | Since: unknown | API-Set: shared
 */
export function wasEventCanceled(): boolean {
    return WasEventCanceled();
}

/**
 * No comment provided
 * 
 * Hash: 0x134549B388167CBF | Since: 1207 | API-Set: unknown
 */
export function absf(value: number): number {
    return Absf(value);
}

/**
 * No comment provided
 * 
 * Hash: 0x0C214D5B8A38C828 | Since: 1207 | API-Set: unknown
 */
export function absi(value: number): number {
    return Absi(value);
}

/**
 * No comment provided
 * 
 * Hash: 0x586690F0176DC575 | Since: 1207 | API-Set: unknown
 */
export function acos(): number {
    return Acos(0);
}

/**
 * Appears to remove stealth kill action from memory (?)
 * 
 * Hash: 0x7ACF124C12A2B045 | Since: 1207 | API-Set: unknown
 */
export function actionManagerEnableAction(hash: number | string, enable: boolean): void {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    ActionManagerEnableAction(hash, enable);
}

/**
 * No comment provided
 * 
 * Hash: 0xFD0759658268FD8E | Since: 1207 | API-Set: unknown
 */
export function actionManagerIsActionEnabled(hash: number | string): boolean {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return ActionManagerIsActionEnabled(hash);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x91D657230BC208D2 | Since: 1207 | API-Set: unknown
 */
export function activityFeedActionStartWithCommandLine(): void {
    ActivityFeedActionStartWithCommandLine(undefined, undefined);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x1694A053DFB61A34 | Since: 1207 | API-Set: unknown
 */
export function activityFeedActionStartWithCommandLineAdd(): void {
    ActivityFeedActionStartWithCommandLineAdd(undefined);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x9935F76407C32539 | Since: 1207 | API-Set: unknown
 */
export function activityFeedAddSubstringToCaption(): void {
    ActivityFeedAddSubstringToCaption(undefined);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xCC7FC854B956A128 | Since: 1207 | API-Set: unknown
 */
export function activityFeedCreate(): [string, string] {
    return ActivityFeedCreate();
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xB16FC7B364D86585 | Since: 1207 | API-Set: unknown
 */
export function activityFeedPost(): void {
    ActivityFeedPost();
}

/**
 * No comment provided
 * 
 * Hash: 0x5EBDA1A3B8CB5EF7 | Since: 1207 | API-Set: unknown
 */
export function addPopMultiplierArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, pedDensity: number, trafficDensity: number): number {
    return AddPopMultiplierArea(x1, y1, z1, x2, y2, z2, pedDensity, trafficDensity, false, false);
}

/**
 * Params: p3 is 0 in R* Script utopia2
 * 
 * Hash: 0xE4EE55E63FA9AF45 | Since: 1207 | API-Set: unknown
 */
export function addTacticalNavMeshPoint(pos: Vector3): void {
    AddTacticalNavMeshPoint(pos.x, pos.y, pos.z, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD3852F22AB713A1F | Since: 1207 | API-Set: unknown
 */
export function areStringsEqual(): [boolean, string, string] {
    return AreStringsEqual();
}

/**
 * No comment provided
 * 
 * Hash: 0x6E3C15D296C15583 | Since: 1207 | API-Set: unknown
 */
export function asin(): number {
    return Asin(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x503054DED0B78027 | Since: 1207 | API-Set: unknown
 */
export function atan(): number {
    return Atan(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x965B220A066E3F07 | Since: 1207 | API-Set: unknown
 */
export function atan2(): number {
    return Atan2(0, 0);
}

/**
 * dispatchService: see ENABLE_DISPATCH_SERVICE
 * 
 * Hash: 0x66947E61A44DE2C6 | Since: 1207 | API-Set: unknown
 */
export function blockDispatchServiceResourceCreation(dispatchService: number, toggle: boolean): void {
    BlockDispatchServiceResourceCreation(dispatchService, toggle);
}

/**
 * Old name: _CANCEL_ONSCREEN_KEYBOARD
 * 
 * Hash: 0x58A39BE597CE99CD | Since: 1207 | API-Set: unknown
 */
export function cancelOnscreenKeyboard(): void {
    CancelOnscreenKeyboard();
}

/**
 * No comment provided
 * 
 * Hash: 0xA4D83115C1E02F8A | Since: 1207 | API-Set: unknown
 */
export function clearAngledAreaOfVehicles(): void {
    ClearAngledAreaOfVehicles(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * Possible flag names:
 * ALL_BASE = 0,
 * PROJECTILES = 1,
 * BROADCAST = 524288,
 * AMBIENT_POPULATION = 1048576
 * 
 * Hash: 0x3B882A96EA77D5B1 | Since: 1207 | API-Set: unknown
 */
export function clearArea(pos: Vector3, radius: number, flag: number): void {
    ClearArea(pos.x, pos.y, pos.z, radius, flag);
}

/**
 * No comment provided
 * 
 * Hash: 0x7D1D4A3602B6AD4E | Since: 1207 | API-Set: unknown
 */
export function clearBit(offset: number): number {
    return ClearBit(offset);
}

/**
 * No comment provided
 * 
 * Hash: 0x80A398F16FFE3CC3 | Since: 1207 | API-Set: unknown
 */
export function clearOverrideWeather(): void {
    ClearOverrideWeather();
}

/**
 * No comment provided
 * 
 * Hash: 0xD93B6516C6878267 | Since: 1207 | API-Set: unknown
 */
export function clearTacticalNavMeshPoints(): void {
    ClearTacticalNavMeshPoints();
}

/**
 * No comment provided
 * 
 * Hash: 0xD85DFE5C131E4AE9 | Since: 1207 | API-Set: unknown
 */
export function clearWeatherTypePersist(): void {
    ClearWeatherTypePersist();
}

/**
 * No comment provided
 * 
 * Hash: 0xBFBB74A15EFC149B | Since: 1207 | API-Set: unknown
 */
export function compareStrings(matchCase: boolean, maxLength: number): [number, string, string] {
    return CompareStrings(matchCase, maxLength);
}

/**
 * Old name: _COPY_MEMORY
 * 
 * Hash: 0xF7AC7DC0DEE7C9BE | Since: 1207 | API-Set: unknown
 */
export function copyScriptStruct(size: number): [any, any] {
    return CopyScriptStruct(size);
}

/**
 * dispatchService: see ENABLE_DISPATCH_SERVICE
 * 
 * Hash: 0x3F892CAF67444AE7 | Since: 1207 | API-Set: unknown
 */
export function createIncident(dispatchService: number, pos: Vector3, numUnits: number, radius: number): [boolean, number] {
    return CreateIncident(dispatchService, pos.x, pos.y, pos.z, numUnits, radius, undefined, undefined);
}

/**
 * Delete an incident with a given id.
 * 
 * Hash: 0x5CFD0F0D6AAE0AEE | Since: 1207 | API-Set: unknown
 */
export function deleteIncident(incidentId: number): void {
    DeleteIncident(incidentId);
}

/**
 * disables prompt eat
 * 
 * Hash: 0x40D72189F46D2E15 | Since: 1207 | API-Set: unknown
 */
export function disableLootingCompositeLootableThisFrame(compositeId: number, disable: boolean): void {
    DisableLootingCompositeLootableThisFrame(compositeId, disable);
}

/**
 * enum eOnscreenKeyboardTextType
 * {
 * KTEXTTYPE_INVALID = -1,
 * KTEXTTYPE_DEFAULT,
 * KTEXTTYPE_EMAIL,
 * KTEXTTYPE_PASSWORD,
 * KTEXTTYPE_NUMERIC,
 * KTEXTTYPE_ALPHABET,
 * KTEXTTYPE_GAMERTAG,
 * KTEXTTYPE_FILENAME,
 * KTEXTTYPE_COUNT
 * };
 * 
 * Hash: 0x044131118D8DB3CD | Since: 1207 | API-Set: unknown
 */
export function displayOnscreenKeyboard(textType: number, maxInputLength: number): [string, string, string, string, string, string] {
    return DisplayOnscreenKeyboard(textType, maxInputLength);
}

/**
 * No comment provided
 * 
 * Hash: 0x03BA619C81A646B3 | Since: 1207 | API-Set: unknown
 */
export function doesPopMultiplierAreaExist(id: number): boolean {
    return DoesPopMultiplierAreaExist(id);
}

/**
 * enum DispatchType
 * {
 * DT_Invalid,
 * DT_PoliceAutomobile,
 * DT_PoliceHelicopter,
 * DT_FireDepartment,
 * DT_SwatAutomobile,
 * DT_AmbulanceDepartment,
 * DT_PoliceRiders,
 * DT_PoliceVehicleRequest,
 * DT_PoliceRoadBlock,
 * DT_PoliceAutomobileWaitPulledOver,
 * DT_PoliceAutomobileWaitCruising,
 * DT_Gangs,
 * DT_SwatHelicopter,
 * DT_PoliceBoat,
 * DT_ArmyVehicle,
 * DT_OnFoot,
 * DT_PoliceDogs
 * };
 * 
 * Hash: 0x50E52637EF70EF77 | Since: 1207 | API-Set: unknown
 */
export function enableDispatchService(dispatchService: number, toggle: boolean): void {
    EnableDispatchService(dispatchService, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xCBC9A21F6A2A679C | Since: 1207 | API-Set: unknown
 */
export function fireSingleBullet(): any {
    return FireSingleBullet();
}

/**
 * creates single lightning+thunder at random position
 * 
 * Hash: 0x369DB5B2510FA080 | Since: 1207 | API-Set: unknown
 */
export function forceLightningFlash(): void {
    ForceLightningFlash();
}

/**
 * No comment provided
 * 
 * Hash: 0x4CABE596D632E4B0 | Since: 1207 | API-Set: unknown
 */
export function gameFrameworkManagerInit(transitionMode: number | string): boolean {
    if (typeof transitionMode === 'string') transitionMode = GetHashKey(transitionMode)
    return GameFrameworkManagerInit(transitionMode);
}

/**
 * No comment provided
 * 
 * Hash: 0xD0DFE1C486097BBB | Since: 1207 | API-Set: unknown
 */
export function getAngleBetween2dVectors(x1: number, y1: number, x2: number, y2: number): number {
    return GetAngleBetween2dVectors(x1, y1, x2, y2);
}

/**
 * Returns value of the '-benchmarkIterations' command line option.
 * 
 * Old name: _GET_BENCHMARK_ITERATIONS_FROM_COMMAND_LINE
 * 
 * Hash: 0x22FC52CF470CC98D | Since: 1207 | API-Set: unknown
 */
export function getBenchmarkIterations(): number {
    return GetBenchmarkIterations();
}

/**
 * Returns value of the '-benchmarkPass' command line option.
 * 
 * Old name: _GET_BENCHMARK_PASS_FROM_COMMAND_LINE
 * 
 * Hash: 0x9297DACF3A2CDFF7 | Since: 1207 | API-Set: unknown
 */
export function getBenchmarkPass(): number {
    return GetBenchmarkPass();
}

/**
 * No comment provided
 * 
 * Hash: 0x68E1352AF48F905D | Since: 1207 | API-Set: unknown
 */
export function getBitsInRange(_var: number, rangeStart: number, rangeEnd: number): number {
    return GetBitsInRange(_var, rangeStart, rangeEnd);
}

/**
 * No comment provided
 * 
 * Hash: 0x83ACC65D9ACEC5EF | Since: 1207 | API-Set: unknown
 */
export function getClosestPointOnLine(): Vector3 {
    return new Vector3(GetClosestPointOnLine(0, 0, 0, 0, 0, 0, 0, 0, 0, false));
}

/**
 * No comment provided
 * 
 * Hash: 0xD73C960A681052DF | Since: 1207 | API-Set: unknown
 */
export function getCoordsOfProjectileTypeWithinDistance(ped: number | IPed, weaponHash: number | string, distance: number, mustBeOwnedByThisPed: boolean): [boolean, Vector3] {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string') weaponHash = GetHashKey(weaponHash)
    return GetCoordsOfProjectileTypeWithinDistance(_ped, weaponHash, distance, false, mustBeOwnedByThisPed);
}

/**
 * Params: percentWeather2: 0f - 0.75f in R* Scripts
 * 
 * Old name: _GET_WEATHER_TYPE_TRANSITION
 * 
 * Hash: 0x0AC679B2342F14F2 | Since: 1207 | API-Set: unknown
 */
export function getCurrWeatherState(): [number, number, number] {
    return GetCurrWeatherState();
}

/**
 * If useZ is false, only the 2D plane (X-Y) will be considered for calculating the distance.
 * 
 * `Consider using this faster native instead: BUILTIN::VDIST - DVIST always takes in consideration the 3D coordinates.`
 * 
 * Hash: 0x0BE7F4E3CDBAFB28 | Since: 1207 | API-Set: unknown
 */
export function getDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: boolean): number {
    return GetDistanceBetweenCoords(x1, y1, z1, x2, y2, z2, useZ);
}

/**
 * No comment provided
 * 
 * Hash: 0x77DFA958FCF100C1 | Since: 1207 | API-Set: unknown
 */
export function getFrameCount(): number {
    return GetFrameCount();
}

/**
 * No comment provided
 * 
 * Hash: 0x5E72022914CE3C38 | Since: 1207 | API-Set: unknown
 */
export function getFrameTime(): number {
    return GetFrameTime();
}

/**
 * No comment provided
 * 
 * Hash: 0x4F67E8ECA7D3F667 | Since: 1207 | API-Set: unknown
 */
export function getGameTimer(): number {
    return GetGameTimer();
}

/**
 * No comment provided
 * 
 * Hash: 0x2A29CA9A6319E6AB | Since: 1207 | API-Set: unknown
 */
export function getGroundZAndNormalFor3dCoord(pos: Vector3): [boolean, number, Vector3] {
    return GetGroundZAndNormalFor3dCoord(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x24FA4267BB8D2431 | Since: 1207 | API-Set: unknown
 */
export function getGroundZFor3dCoord(pos: Vector3): [boolean, number] {
    return GetGroundZFor3dCoord(pos.x, pos.y, pos.z, false);
}

/**
 * Computes a hash for the given string. It is hashed using Jenkins' One-at-a-Time hash algorithm (https://en.wikipedia.org/wiki/Jenkins_hash_function)
 * Note: this implementation is case-insensitive.
 * 
 * Hash: 0xFD340785ADF8CFB7 | Since: 1207 | API-Set: unknown
 */
export function getHashKey(): [number, string] {
    return GetHashKey();
}

/**
 * dx = x1 - x2
 * dy = y1 - y2
 * 
 * Hash: 0x38D5202FF9271C62 | Since: 1207 | API-Set: unknown
 */
export function getHeadingFromVector2d(dx: number, dy: number): number {
    return GetHeadingFromVector2d(dx, dy);
}

/**
 * No comment provided
 * 
 * Hash: 0xAB6A04CEC428258B | Since: 1207 | API-Set: unknown
 */
export function getLinePlaneIntersection(): [boolean, number] {
    return GetLinePlaneIntersection(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xB15CD1CF58771DE1 | Since: 1207 | API-Set: unknown
 */
export function getMissionFlag(): boolean {
    return GetMissionFlag();
}

/**
 * No comment provided
 * 
 * Hash: 0xDCB8DDD5D054A7E7 | Since: 1207 | API-Set: unknown
 */
export function getModelDimensions(modelHash: number | string): [Vector3, Vector3] {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return GetModelDimensions(modelHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x40DC2907A9697EF7 | Since: 1207 | API-Set: unknown
 */
export function getNumberOfFreeStacksOfThisSize(stackSize: number): number {
    return GetNumberOfFreeStacksOfThisSize(stackSize);
}

/**
 * No comment provided
 * 
 * Hash: 0xB0CE5E5ED8BB3581 | Since: 1207 | API-Set: unknown
 */
export function getNumberOfMicrosecondsSinceLastCall(): number {
    return GetNumberOfMicrosecondsSinceLastCall();
}

/**
 * Returns NULL unless UPDATE_ONSCREEN_KEYBOARD() returns 1 in the same tick.
 * 
 * Hash: 0xAFB4CF58A4A292B1 | Since: 1207 | API-Set: unknown
 */
export function getOnscreenKeyboardResult(): string {
    return GetOnscreenKeyboardResult();
}

/**
 * No comment provided
 * 
 * Hash: 0x9578986A6105A6AD | Since: 1207 | API-Set: unknown
 */
export function getProjectileOfProjectileTypeWithinDistance(ped: number | IPed, weaponHash: number | string, distance: number, mustBeOwnedByThisPed: boolean): [boolean, Vector3, number] {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weaponHash === 'string') weaponHash = GetHashKey(weaponHash)
    return GetProjectileOfProjectileTypeWithinDistance(_ped, weaponHash, distance, false, mustBeOwnedByThisPed);
}

/**
 * No comment provided
 * 
 * Hash: 0x931B5F4CC130224B | Since: 1207 | API-Set: unknown
 */
export function getRainLevel(): number {
    return GetRainLevel();
}

/**
 * No comment provided
 * 
 * Hash: 0x924D54E5698AE3E0 | Since: 1207 | API-Set: unknown
 */
export function getRandomEventFlag(): boolean {
    return GetRandomEventFlag();
}

/**
 * No comment provided
 * 
 * Hash: 0xE29F927A961F8AAA | Since: 1207 | API-Set: unknown
 */
export function getRandomFloatInRange(startRange: number, endRange: number): number {
    return GetRandomFloatInRange(startRange, endRange);
}

/**
 * No comment provided
 * 
 * Hash: 0xD53343AA4FB7DD28 | Since: 1207 | API-Set: unknown
 */
export function getRandomIntInRange(startRange: number, endRange: number): number {
    return GetRandomIntInRange(startRange, endRange);
}

/**
 * Returns GET_GAME_TIMER() / 1000
 * Only used in rcm_pearson1.ysc
 * 
 * Hash: 0x2E036F0480B8BF02 | Since: 1207 | API-Set: unknown
 */
export function getRealWorldTime(): number {
    return GetRealWorldTime();
}

/**
 * No comment provided
 * 
 * Hash: 0x63219768C586667C | Since: 1207 | API-Set: unknown
 */
export function getScriptTimeWithinFrameInMicroseconds(): number {
    return GetScriptTimeWithinFrameInMicroseconds();
}

/**
 * No comment provided
 * 
 * Hash: 0x1E5D727041BE1709 | Since: 1207 | API-Set: unknown
 */
export function getSnowLevel(): number {
    return GetSnowLevel();
}

/**
 * No comment provided
 * 
 * Hash: 0xBE7F225417E35A7C | Since: 1207 | API-Set: unknown
 */
export function getSystemTime(): number {
    return GetSystemTime();
}

/**
 * Old name: _GET_BENCHMARK_TIME
 * 
 * Hash: 0x3F3172FEAE3AFE1C | Since: 1207 | API-Set: unknown
 */
export function getSystemTimeStep(): number {
    return GetSystemTimeStep();
}

/**
 * No comment provided
 * 
 * Hash: 0xF703E82F3FE14A5F | Since: 1207 | API-Set: unknown
 */
export function getWindDirection(): Vector3 {
    return new Vector3(GetWindDirection());
}

/**
 * No comment provided
 * 
 * Hash: 0xFFB7E74E041150A4 | Since: 1207 | API-Set: unknown
 */
export function getWindSpeed(): number {
    return GetWindSpeed();
}

/**
 * p3 - possibly radius?
 * 
 * Hash: 0xC153E5BCCF411814 | Since: 1207 | API-Set: unknown
 */
export function hasBulletImpactedInArea(pos: Vector3): boolean {
    return HasBulletImpactedInArea(pos.x, pos.y, pos.z, 0, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x3B6A4C05FB2B33AC | Since: 1207 | API-Set: unknown
 */
export function hasBulletImpactedInBox(): boolean {
    return HasBulletImpactedInBox(0, 0, 0, 0, 0, 0, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x6C9FF40FF1B69F8F | Since: 1207 | API-Set: unknown
 */
export function ignoreNextRestart(toggle: boolean): void {
    IgnoreNextRestart(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x708DF841B8F27AA2 | Since: 1207 | API-Set: unknown
 */
export function informCodeOfContentIdOfCurrentUgcMission(): void {
    InformCodeOfContentIdOfCurrentUgcMission(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4ED6CFDFE8D4131A | Since: 1207 | API-Set: unknown
 */
export function isBitSet(address: number, offset: number): boolean {
    return IsBitSet(address, offset);
}

/**
 * No comment provided
 * 
 * Hash: 0x9D09D8493747CF02 | Since: 1207 | API-Set: unknown
 */
export function isBulletInAngledArea(): boolean {
    return IsBulletInAngledArea(0, 0, 0, 0, 0, 0, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC652FD308772D79E | Since: 1207 | API-Set: unknown
 */
export function isBulletInArea(): boolean {
    return IsBulletInArea(0, 0, 0, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC128137C52152741 | Since: 1207 | API-Set: unknown
 */
export function isBulletInBox(): boolean {
    return IsBulletInBox(0, 0, 0, 0, 0, 0, false);
}

/**
 * Hardcoded to return false.
 * Checks for XBOXONE Game Build.
 * 
 * Hash: 0xD1CCC2A2639D325F | Since: 1207 | API-Set: unknown
 */
export function isDurangoVersion(): boolean {
    return IsDurangoVersion();
}

/**
 * No comment provided
 * 
 * Hash: 0xF9E7DBB39080640B | Since: 1207 | API-Set: unknown
 */
export function isGameSessionStateMachineIdle(): boolean {
    return IsGameSessionStateMachineIdle();
}

/**
 * No comment provided
 * 
 * Hash: 0x39F2B1BAD412246A | Since: 1207 | API-Set: unknown
 */
export function isIncidentValid(incidentId: number): boolean {
    return IsIncidentValid(incidentId);
}

/**
 * magdemo = magazine demo, i. e. for magazines such as IGN, pre play phases to prepare articles etc. - example 2012 builds for V
 * Hardcoded to return false.
 * 
 * Hash: 0x5FC9357C26DAEFCE | Since: 1207 | API-Set: unknown
 */
export function isMagDemo1Active(): boolean {
    return IsMagDemo1Active();
}

/**
 * No comment provided
 * 
 * Hash: 0xF4D8BCD052E7EA1B | Since: 1207 | API-Set: unknown
 */
export function isMinigameInProgress(): boolean {
    return IsMinigameInProgress();
}

/**
 * Hardcoded to return false.
 * Checks for PS4 Game Build.
 * 
 * Hash: 0x88CFAE250D3E0C71 | Since: 1207 | API-Set: unknown
 */
export function isOrbisVersion(): boolean {
    return IsOrbisVersion();
}

/**
 * Hardcoded to return true.
 * 
 * Hash: 0xB0FB6CFAA5A1C833 | Since: 1207 | API-Set: unknown
 */
export function isPcVersion(): boolean {
    return IsPcVersion();
}

/**
 * No comment provided
 * 
 * Hash: 0x825CA3ED43831015 | Since: 1207 | API-Set: unknown
 */
export function isPositionOccupied(pos: Vector3, range: number): boolean {
    return IsPositionOccupied(pos.x, pos.y, pos.z, range, false, false, false, false, false, undefined, false);
}

/**
 * Determines whether there is a projectile within the specified coordinates. The coordinates form a rectangle.
 * 
 * ownedByPlayer = only projectiles fired by the player will be detected.
 * 
 * Hash: 0x05B0061EFDFC8941 | Since: 1207 | API-Set: unknown
 */
export function isProjectileInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean {
    return IsProjectileInArea(x1, y1, z1, x2, y2, z2, ownedByPlayer);
}

/**
 * No comment provided
 * 
 * Hash: 0x928431F4133CD3D4 | Since: 1207 | API-Set: unknown
 */
export function isProjectileTypeInAngledArea(): boolean {
    return IsProjectileTypeInAngledArea(0, 0, 0, 0, 0, 0, 0, undefined, false);
}

/**
 * Determines whether there is a projectile of a specific type within the specified coordinates. The coordinates form a rectangle.
 * 
 * Hash: 0x04965FB9E14235C7 | Since: 1207 | API-Set: unknown
 */
export function isProjectileTypeInArea(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, weaponType: number | string, isPlayer: boolean): boolean {
    if (typeof weaponType === 'string') weaponType = GetHashKey(weaponType)
    return IsProjectileTypeInArea(xMin, yMin, zMin, xMax, yMax, zMax, weaponType, isPlayer);
}

/**
 * No comment provided
 * 
 * Hash: 0xF51C9BAAD9ED64C4 | Since: 1207 | API-Set: unknown
 */
export function isProjectileTypeWithinDistance(): boolean {
    return IsProjectileTypeWithinDistance(0, 0, 0, undefined, 0, false);
}

/**
 * Hardcoded to return false.
 * 
 * Hash: 0x268AB8420A9E4ED7 | Since: 1207 | API-Set: unknown
 */
export function isStadiaVersion(): boolean {
    return IsStadiaVersion();
}

/**
 * No comment provided
 * 
 * Hash: 0x602102324604D96B | Since: 1207 | API-Set: unknown
 */
export function isStringNull(_string: string): boolean {
    return IsStringNull(_string);
}

/**
 * No comment provided
 * 
 * Hash: 0x2CF12F9ACF18F048 | Since: 1207 | API-Set: unknown
 */
export function isStringNullOrEmpty(_string: string): boolean {
    return IsStringNullOrEmpty(_string);
}

/**
 * Returns true if the entire string consists only of space characters.
 * 
 * Hash: 0x375F5870A7B8BEC1 | Since: 1207 | API-Set: unknown
 */
export function isStringNullOrEmptyOrSpaces(_string: string): boolean {
    return IsStringNullOrEmptyOrSpaces(_string);
}

/**
 * No comment provided
 * 
 * Hash: 0x3D0EAC6385DD6100 | Since: 1207 | API-Set: unknown
 */
export function networkSetScriptIsSafeForNetworkGame(): void {
    NetworkSetScriptIsSafeForNetworkGame();
}

/**
 * No comment provided
 * 
 * Hash: 0x5CB71EAA1429A358 | Since: 1207 | API-Set: unknown
 */
export function nextOnscreenKeyboardResultWillDisplayUsingTheseFonts(fontBitField: number): void {
    NextOnscreenKeyboardResultWillDisplayUsingTheseFonts(fontBitField);
}

/**
 * No comment provided
 * 
 * Hash: 0xB2C69E11A37B5AF0 | Since: 1207 | API-Set: unknown
 */
export function overrideSaveHouse(override: boolean, pos: Vector3, heading: number, isAutosave: boolean): [boolean, Vector3, number] {
    return OverrideSaveHouse(override, pos.x, pos.y, pos.z, heading, isAutosave);
}

/**
 * No comment provided
 * 
 * Hash: 0x66AB6B6C7E72F393 | Since: 1207 | API-Set: unknown
 */
export function pauseDeathArrestRestart(toggle: boolean): void {
    PauseDeathArrestRestart(toggle);
}

/**
 * spawns a few distant/out-of-sight peds, vehicles, animals etc each time it is called
 * 
 * Hash: 0xEA6DC3A8ADD2005F | Since: 1207 | API-Set: unknown
 */
export function populateNow(): void {
    PopulateNow();
}

/**
 * p3 is usually the same value of radius
 * p8 determines whether the ILO prompt is a lock on prompt with RMB
 * 
 * Hash: 0x870708A6E147A9AD | Since: 1207 | API-Set: unknown
 */
export function registerInteractionLockonPrompt(entity: number | IEntity, text: string, radius: number, flag: number, prompt: any): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return RegisterInteractionLockonPrompt(_entity, text, radius, 0, flag, 0, 0, prompt, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x49F751F6868DDC5B | Since: 1207 | API-Set: unknown
 */
export function removeDispatchSpawnBlockingArea(): void {
    RemoveDispatchSpawnBlockingArea(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x88CB484364EFB37A | Since: 1207 | API-Set: unknown
 */
export function removePopMultiplierArea(id: number): void {
    RemovePopMultiplierArea(id, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC7817264BC4B6377 | Since: 1207 | API-Set: unknown
 */
export function resetDispatchIdealSpawnDistance(): void {
    ResetDispatchIdealSpawnDistance();
}

/**
 * Begins with RESET_*. Next character in the name is either D or E.
 * 
 * Old name: _RESET_BENCHMARK_RECORDING
 * 
 * Hash: 0xECBABD0307FB216F | Since: 1207 | API-Set: unknown
 */
export function resetEndUserBenchmark(): void {
    ResetEndUserBenchmark();
}

/**
 * No comment provided
 * 
 * Hash: 0x1411A7CBC3A6EB7B | Since: 1207 | API-Set: unknown
 */
export function resetScriptTimeWithinFrame(): void {
    ResetScriptTimeWithinFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0xEF42F56F69877125 | Since: 1207 | API-Set: unknown
 */
export function resetWantedResponseNumPedsToSpawn(): void {
    ResetWantedResponseNumPedsToSpawn();
}

/**
 * Saves the benchmark recording to %USERPROFILE%\Documents\Rockstar Games\Red Dead Redemption 2\Benchmarks and submits some metrics.
 * 
 * Old name: _SAVE_BENCHMARK_RECORDING
 * 
 * Hash: 0xF4743E2ECC02B3DA | Since: 1207 | API-Set: unknown
 */
export function saveEndUserBenchmark(): void {
    SaveEndUserBenchmark();
}

/**
 * No comment provided
 * 
 * Hash: 0x769E848C66E3C2BB | Since: 1207 | API-Set: unknown
 */
export function scriptRaceGetPlayerSplitTime(): [boolean, any, any] {
    return ScriptRaceGetPlayerSplitTime(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8AE059F47158417E | Since: 1207 | API-Set: unknown
 */
export function scriptRaceInit(numCheckpoints: number, numLaps: number, numPlayers: number): void {
    ScriptRaceInit(numCheckpoints, numLaps, numPlayers, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBA62B4D80FA66BD6 | Since: 1207 | API-Set: unknown
 */
export function scriptRacePlayerHitCheckpoint(part: number, checkpoint: number, lap: number, time: number): void {
    ScriptRacePlayerHitCheckpoint(part, checkpoint, lap, time);
}

/**
 * No comment provided
 * 
 * Hash: 0x334CE0DA4FAF330C | Since: 1207 | API-Set: unknown
 */
export function scriptRaceShutdown(): void {
    ScriptRaceShutdown();
}

/**
 * No comment provided
 * 
 * Hash: 0xF73FBE4845C43B5B | Since: 1207 | API-Set: unknown
 */
export function setBit(offset: number): number {
    return SetBit(offset);
}

/**
 * No comment provided
 * 
 * Hash: 0x324DC1CEF57F31E6 | Since: 1207 | API-Set: unknown
 */
export function setBitsInRange(rangeStart: number, rangeEnd: number): number {
    return SetBitsInRange(rangeStart, rangeEnd, 0);
}

/**
 * Cheats are GTA IV cheats:
 * 
 * 0 = unknown
 * 1 = unknown (same as 0)
 * 2 = Max Health and Armor
 * 3 = Raise Wanted Level
 * 4 = Lower Wanted Level
 * 5 = unknown (does nothing)
 * 6 = Change Weather
 * 7 = Spawn Annihilator
 * 8 = Spawn NRG 900
 * 9 = Spawn FBI
 * 10 = Spawn Jetmax
 * 11 = Spawn Comet
 * 12 = Spawn Turismo
 * 13 = Spawn Cognoscenti
 * 14 = Spawn Super GT
 * 15 = Spawn Sanchez
 * 
 * Initially used in Max Payne 3, that's why we know the name.
 * 
 * Hash: 0xD4958E8CF0DE0DD0 | Since: 1207 | API-Set: unknown
 */
export function setCheatActive(cheatId: number): void {
    SetCheatActive(cheatId);
}

/**
 * No comment provided
 * 
 * Hash: 0xD37BECF862DA726F | Since: 1207 | API-Set: unknown
 */
export function setCreditsActive(toggle: boolean): void {
    SetCreditsActive(toggle);
}

/**
 * Params: BOOL p3 is always true
 * 
 * Old name: _SET_WEATHER_TYPE_TRANSITION
 * 
 * Hash: 0xFA3E3CA8A1DE6D5D | Since: 1207 | API-Set: unknown
 */
export function setCurrWeatherState(weatherType1: number | string, weatherType2: number | string, percentWeather2: number, enabled: boolean): void {
    if (typeof weatherType1 === 'string') weatherType1 = GetHashKey(weatherType1)
    if (typeof weatherType2 === 'string') weatherType2 = GetHashKey(weatherType2)
    SetCurrWeatherState(weatherType1, weatherType2, percentWeather2, enabled);
}

/**
 * No comment provided
 * 
 * Hash: 0xEAB6823B82FBD283 | Since: 1207 | API-Set: unknown
 */
export function setDispatchIdealSpawnDistance(fIdealSpawnDistance: number): void {
    SetDispatchIdealSpawnDistance(fIdealSpawnDistance);
}

/**
 * Sets whether the game should fade in after the player dies or is arrested.
 * 
 * Hash: 0xDF3B5846DE5904AF | Since: 1207 | API-Set: unknown
 */
export function setFadeInAfterDeathArrest(toggle: boolean): void {
    SetFadeInAfterDeathArrest(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xAC806C4CAB973517 | Since: 1207 | API-Set: unknown
 */
export function setFadeInAfterLoad(toggle: boolean): void {
    SetFadeInAfterLoad(toggle);
}

/**
 * Make sure to call this from the correct thread if you're using multiple threads because all other threads except the one which is calling SET_GAME_PAUSED will be paused.
 * 
 * Hash: 0xFAEC088D28B1DE4A | Since: 1207 | API-Set: unknown
 */
export function setGamePaused(toggle: boolean): void {
    SetGamePaused(toggle);
}

/**
 * If true, the player can't save the game.
 * 
 * Hash: 0x36694B456BE80D0A | Since: 1207 | API-Set: unknown
 */
export function setMissionFlag(toggle: boolean): void {
    SetMissionFlag(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x674B90BE1115846D | Since: 1207 | API-Set: unknown
 */
export function setPedDecomposed(ped: number | IPed, toggle: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedDecomposed(_ped, toggle);
}

/**
 * Old name: _SET_RAIN_LEVEL
 * 
 * Hash: 0x193DFC0526830FD6 | Since: 1207 | API-Set: unknown
 */
export function setRain(intensity: number): void {
    SetRain(intensity);
}

/**
 * If the parameter is true, sets the random event flag to true, if the parameter is false, the function does nothing at all.
 * Does nothing if the mission flag is set.
 * 
 * Hash: 0xB1ADCCC4150C6473 | Since: 1207 | API-Set: unknown
 */
export function setRandomEventFlag(toggle: boolean): void {
    SetRandomEventFlag(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x5CD7A49104AFCB6B | Since: 1207 | API-Set: unknown
 */
export function setRandomSeed(seed: number): void {
    SetRandomSeed(seed);
}

/**
 * No comment provided
 * 
 * Hash: 0x6E5A7FBEECAB3C72 | Since: 1207 | API-Set: unknown
 */
export function setRandomWeatherType(): void {
    SetRandomWeatherType(false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xB3E9BE963F10C445 | Since: 1207 | API-Set: unknown
 */
export function setSuperJumpThisFrame(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetSuperJumpThisFrame(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x3215376E79F6EA18 | Since: 1207 | API-Set: unknown
 */
export function setThisScriptCanBePaused(toggle: boolean): void {
    SetThisScriptCanBePaused(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8ABD939C2E5D00ED | Since: 1207 | API-Set: unknown
 */
export function setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean): void {
    SetThisScriptCanRemoveBlipsCreatedByAnyScript(toggle);
}

/**
 * Maximum value is 1.0f
 * At a value of 0.0f the game will still run at a minimum time scale.
 * 
 * Hash: 0x9682AF6050854856 | Since: 1207 | API-Set: unknown
 */
export function setTimeScale(timeScale: number): void {
    SetTimeScale(timeScale);
}

/**
 * https://github.com/femga/rdr3_discoveries/blob/master/weather/weather_types.lua
 * 
 * Hash: 0x59174F1AFE095B5A | Since: 1207 | API-Set: unknown
 */
export function setWeatherType(weatherType: number | string, transition: boolean, transitionTime: number): void {
    if (typeof weatherType === 'string') weatherType = GetHashKey(weatherType)
    SetWeatherType(weatherType, false, false, transition, transitionTime, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xB56C4F5F57A45600 | Since: 1207 | API-Set: unknown
 */
export function setWindDirection(direction: number): void {
    SetWindDirection(direction);
}

/**
 * No comment provided
 * 
 * Hash: 0xD00C2D82DC04A99F | Since: 1207 | API-Set: unknown
 */
export function setWindSpeed(speed: number): void {
    SetWindSpeed(speed);
}

/**
 * No comment provided
 * 
 * Hash: 0x867654CBC7606F2C | Since: 1207 | API-Set: unknown
 */
export function shootSingleBulletBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, weaponHash: number | string, ownerPed: number | IPed, isAudible: boolean, isInvisible: boolean, speed: number): void {
    const _ownerPed = ownerPed instanceof IPed ? ownerPed.handle() : ownerPed;
    if (typeof weaponHash === 'string') weaponHash = GetHashKey(weaponHash)
    ShootSingleBulletBetweenCoords(x1, y1, z1, x2, y2, z2, damage, false, weaponHash, _ownerPed, isAudible, isInvisible, speed, false);
}

/**
 * Returns whether the game's measurement system is set to metric.
 * 
 * Hash: 0x4FB556ACEFA93098 | Since: 1207 | API-Set: unknown
 */
export function shouldUseMetricMeasurements(): boolean {
    return ShouldUseMetricMeasurements();
}

/**
 * Begins with START_*. Next character in the name is either D or E.
 * 
 * Old name: _START_BENCHMARK_RECORDING
 * 
 * Hash: 0x29D1F6DF864A094E | Since: 1207 | API-Set: unknown
 */
export function startEndUserBenchmark(): void {
    StartEndUserBenchmark();
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xA565FAC215CBC77D | Since: 1207 | API-Set: unknown
 */
export function stopCurrentLoadingProgressTimer(): void {
    StopCurrentLoadingProgressTimer();
}

/**
 * Begins with STOP_*. Next character in the name is either D or E.
 * 
 * Old name: _STOP_BENCHMARK_RECORDING
 * 
 * Hash: 0xB89AEC71AFF2B599 | Since: 1207 | API-Set: unknown
 */
export function stopEndUserBenchmark(): void {
    StopEndUserBenchmark();
}

/**
 * Returns false if it's a null or empty string or if the string is too long. outInteger will be set to -999 in that case.
 * 
 * Hash: 0xF2DD2298B3AF23E2 | Since: 1207 | API-Set: unknown
 */
export function stringToInt(_string: string): [boolean, number] {
    return StringToInt(_string);
}

/**
 * No comment provided
 * 
 * Hash: 0x8C13DB96497B7ABF | Since: 1207 | API-Set: unknown
 */
export function tan(): number {
    return Tan(0);
}

/**
 * Hardcoded to return false.
 * 
 * Old name: _UI_IS_SINGLEPLAYER_PAUSE_MENU_ACTIVE
 * 
 * Hash: 0x4FFA0386A6216113 | Since: 1207 | API-Set: unknown
 */
export function uiStartedEndUserBenchmark(): boolean {
    return UiStartedEndUserBenchmark();
}

/**
 * No comment provided
 * 
 * Hash: 0xE98D55C5983F2509 | Since: 1207 | API-Set: unknown
 */
export function unregisterInteractionLockonPrompt(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return UnregisterInteractionLockonPrompt(_entity);
}

/**
 * Returns the current status of the onscreen keyboard, and updates the output.
 * 
 * Status Codes:
 * 
 * 0 - User still editing
 * 1 - User has finished editing
 * 2 - User has canceled editing
 * 3 - Keyboard isn't active
 * 
 * Hash: 0x37DF360F235A3893 | Since: 1207 | API-Set: unknown
 */
export function updateOnscreenKeyboard(): number {
    return UpdateOnscreenKeyboard();
}

/**
 * Note: The first bit in 'flags' must not be set.
 * It is also required to pass at least one extra argument (this must be a text label string or hash).
 * When passing a hash, flags should be 0.
 * 
 * Hash: 0xFA925AC00EB830B9 | Since: 1207 | API-Set: unknown
 */
export function varString(flags: number, ...params: string[]): string {
    return VarString(flags, ...params);
}

/**
 * Only used in smuggler2 script
 * 
 * Hash: 0xF06C5B66DE20B2B8 | Since: 1207 | API-Set: unknown
 */
export function waterOverrideSetOceanwavemaxamplitude(maxAmplitude: number): void {
    WaterOverrideSetOceanwavemaxamplitude(maxAmplitude);
}

/**
 * Only used in smuggler2 script
 * 
 * Hash: 0x55123D5A7D9D3C42 | Since: 1207 | API-Set: unknown
 */
export function waterOverrideSetShorewaveamplitude(amplitude: number): void {
    WaterOverrideSetShorewaveamplitude(amplitude);
}

/**
 * No comment provided
 * 
 * Hash: 0x0358B8A41916C613 | Since: 1207 | API-Set: unknown
 */
export function _0x0358B8A41916C613(): any {
    return Citizen.invokeNative('0x0358B8A41916C613', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0730E518486DEEC3 | Since: 1207 | API-Set: unknown
 */
export function _0x0730E518486DEEC3(): void {
    Citizen.invokeNative('0x0730E518486DEEC3', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0A487CC74A517FB5 | Since: 1207 | API-Set: unknown
 */
export function _0x0A487CC74A517FB5(): void {
    Citizen.invokeNative('0x0A487CC74A517FB5', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0D0AE5081F88CFE1 | Since: 1207 | API-Set: unknown
 */
export function _0x0D0AE5081F88CFE1(p0: number | string): boolean {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    return Citizen.invokeNative('0x0D0AE5081F88CFE1', p0);
}

/**
 * _SET_MISSION_NAME_*(FOR_ACTIVITY?/MINIGAME?)
 * 
 * Hash: 0x1096603B519C905F | Since: 1207 | API-Set: unknown
 */
export function _0x1096603B519C905F(name: string): void {
    Citizen.invokeNative('0x1096603B519C905F', name);
}

/**
 * No comment provided
 * 
 * Hash: 0x154340E87D8CC178 | Since: 1207 | API-Set: unknown
 */
export function _0x154340E87D8CC178(): void {
    Citizen.invokeNative('0x154340E87D8CC178', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x183672FE838A661B | Since: 1207 | API-Set: unknown
 */
export function _0x183672FE838A661B(): any {
    return Citizen.invokeNative('0x183672FE838A661B');
}

/**
 * No comment provided
 * 
 * Hash: 0x243CEDE8F916B994 | Since: 1207 | API-Set: unknown
 */
export function _0x243CEDE8F916B994(): void {
    Citizen.invokeNative('0x243CEDE8F916B994');
}

/**
 * No comment provided
 * 
 * Hash: 0x2916B30DC6C41179 | Since: 1207 | API-Set: unknown
 */
export function _0x2916B30DC6C41179(weatherType: number | string): void {
    if (typeof weatherType === 'string') weatherType = GetHashKey(weatherType)
    Citizen.invokeNative('0x2916B30DC6C41179', weatherType);
}

/**
 * No comment provided
 * 
 * Hash: 0x33982467B1E349EF | Since: 1207 | API-Set: unknown
 */
export function _0x33982467B1E349EF(): any {
    return Citizen.invokeNative('0x33982467B1E349EF', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x35165C658077CD0B | Since: 1207 | API-Set: unknown
 */
export function _0x35165C658077CD0B(): any {
    return Citizen.invokeNative('0x35165C658077CD0B');
}

/**
 * No comment provided
 * 
 * Hash: 0x38C0C9CAE1544500 | Since: 1207 | API-Set: unknown
 */
export function _0x38C0C9CAE1544500(p0: number | string): void {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    Citizen.invokeNative('0x38C0C9CAE1544500', p0);
}

/**
 * No comment provided
 * 
 * Hash: 0x38C2BF94D15F464D | Since: 1207 | API-Set: unknown
 */
export function _0x38C2BF94D15F464D(): any {
    return Citizen.invokeNative('0x38C2BF94D15F464D', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3A87FDA8F1B6CDFB | Since: 1207 | API-Set: unknown
 */
export function _0x3A87FDA8F1B6CDFB(): void {
    Citizen.invokeNative('0x3A87FDA8F1B6CDFB', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3C3C7B1B5EC08764 | Since: 1207 | API-Set: unknown
 */
export function _0x3C3C7B1B5EC08764(): void {
    Citizen.invokeNative('0x3C3C7B1B5EC08764');
}

/**
 * No comment provided
 * 
 * Hash: 0x4647842FE8F31C1E | Since: 1207 | API-Set: unknown
 */
export function _0x4647842FE8F31C1E(): void {
    Citizen.invokeNative('0x4647842FE8F31C1E', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x49C44FE78A135A1D | Since: 1207 | API-Set: unknown
 */
export function _0x49C44FE78A135A1D(): void {
    Citizen.invokeNative('0x49C44FE78A135A1D', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x49F3241C28EBBFBC | Since: 1207 | API-Set: unknown
 */
export function _0x49F3241C28EBBFBC(): void {
    Citizen.invokeNative('0x49F3241C28EBBFBC', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x4B0501A468B749F8 | Since: 1207 | API-Set: unknown
 */
export function _0x4B0501A468B749F8(): void {
    Citizen.invokeNative('0x4B0501A468B749F8');
}

/**
 * No comment provided
 * 
 * Hash: 0x4B101DBCC9482F2D | Since: 1207 | API-Set: unknown
 */
export function _0x4B101DBCC9482F2D(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x4B101DBCC9482F2D', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x4D5C9CC7E7E23E09 | Since: 1207 | API-Set: unknown
 */
export function _0x4D5C9CC7E7E23E09(): void {
    Citizen.invokeNative('0x4D5C9CC7E7E23E09');
}

/**
 * UPDATE_PICKUP_COLLECTIBLE: set Eagle Eye fountain
 * _J*, _K*, _L*
 * 
 * Hash: 0x553D67295DDD2309 | Since: 1207 | API-Set: unknown
 */
export function _0x553D67295DDD2309(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x553D67295DDD2309', _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x5801BE2DF2AF07EC | Since: 1207 | API-Set: unknown
 */
export function _0x5801BE2DF2AF07EC(): void {
    Citizen.invokeNative('0x5801BE2DF2AF07EC', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5B4A8121A47D844D | Since: 1207 | API-Set: unknown
 */
export function _0x5B4A8121A47D844D(): any {
    return Citizen.invokeNative('0x5B4A8121A47D844D', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x627B68D9CE6EE8DE | Since: 1207 | API-Set: unknown
 */
export function _0x627B68D9CE6EE8DE(): any {
    return Citizen.invokeNative('0x627B68D9CE6EE8DE', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x68319452C5064ABA | Since: 1207 | API-Set: unknown
 */
export function _0x68319452C5064ABA(): void {
    Citizen.invokeNative('0x68319452C5064ABA', undefined, undefined);
}

/**
 * _SET_DISPATCH_*, unused
 * 
 * Hash: 0x6BCF7B5CD338281A | Since: 1207 | API-Set: unknown
 */
export function _0x6BCF7B5CD338281A(): void {
    Citizen.invokeNative('0x6BCF7B5CD338281A', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6BED40493A1AFDB8 | Since: 1207 | API-Set: unknown
 */
export function _0x6BED40493A1AFDB8(): any {
    return Citizen.invokeNative('0x6BED40493A1AFDB8', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x6C7B68D3CE60E8DE | Since: 1207 | API-Set: unknown
 */
export function _0x6C7B68D3CE60E8DE(): any {
    return Citizen.invokeNative('0x6C7B68D3CE60E8DE', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6F02B5E50511721E | Since: 1207 | API-Set: unknown
 */
export function _0x6F02B5E50511721E(): any {
    return Citizen.invokeNative('0x6F02B5E50511721E', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x745808BB01CEC6B9 | Since: 1207 | API-Set: unknown
 */
export function _0x745808BB01CEC6B9(): void {
    Citizen.invokeNative('0x745808BB01CEC6B9', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x74ACA66484CEBAF0 | Since: 1207 | API-Set: unknown
 */
export function _0x74ACA66484CEBAF0(): void {
    Citizen.invokeNative('0x74ACA66484CEBAF0', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7A76104CC2CC69E8 | Since: 1207 | API-Set: unknown
 */
export function _0x7A76104CC2CC69E8(entity: number | IEntity): any {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x7A76104CC2CC69E8', _entity, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x7CF96F1250EF3221 | Since: 1207 | API-Set: unknown
 */
export function _0x7CF96F1250EF3221(): any {
    return Citizen.invokeNative('0x7CF96F1250EF3221', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7FA58CED69405F9A | Since: 1207 | API-Set: unknown
 */
export function _0x7FA58CED69405F9A(): void {
    Citizen.invokeNative('0x7FA58CED69405F9A', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8314FC2013ECE2DA | Since: 1207 | API-Set: unknown
 */
export function _0x8314FC2013ECE2DA(): any {
    return Citizen.invokeNative('0x8314FC2013ECE2DA', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8BB99B85444544D9 | Since: 1207 | API-Set: unknown
 */
export function _0x8BB99B85444544D9(): any {
    return Citizen.invokeNative('0x8BB99B85444544D9', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8C0F6A3D7236DEEB | Since: 1207 | API-Set: unknown
 */
export function _0x8C0F6A3D7236DEEB(): void {
    Citizen.invokeNative('0x8C0F6A3D7236DEEB', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8DB104CCEBCD58C5 | Since: 1207 | API-Set: unknown
 */
export function _0x8DB104CCEBCD58C5(): any {
    return Citizen.invokeNative('0x8DB104CCEBCD58C5', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x94FCADCF9F0C368E | Since: 1207 | API-Set: unknown
 */
export function _0x94FCADCF9F0C368E(): void {
    Citizen.invokeNative('0x94FCADCF9F0C368E', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x96282005C5C6801F | Since: 1311 | API-Set: unknown
 */
export function _0x96282005C5C6801F(): void {
    Citizen.invokeNative('0x96282005C5C6801F', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x970339EFA4FDE518 | Since: 1207 | API-Set: unknown
 */
export function _0x970339EFA4FDE518(): any {
    return Citizen.invokeNative('0x970339EFA4FDE518', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9A252AA23D7098F2 | Since: 1207 | API-Set: unknown
 */
export function _0x9A252AA23D7098F2(): void {
    Citizen.invokeNative('0x9A252AA23D7098F2');
}

/**
 * No comment provided
 * 
 * Hash: 0x9BF2C0C568C61641 | Since: 1207 | API-Set: unknown
 */
export function _0x9BF2C0C568C61641(): void {
    Citizen.invokeNative('0x9BF2C0C568C61641', undefined);
}

/**
 * _CLEAR*
 * 
 * Hash: 0xA08111B053D84B4D | Since: 1207 | API-Set: unknown
 */
export function _0xA08111B053D84B4D(): void {
    Citizen.invokeNative('0xA08111B053D84B4D', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA3A8926951471C82 | Since: 1207 | API-Set: unknown
 */
export function _0xA3A8926951471C82(): void {
    Citizen.invokeNative('0xA3A8926951471C82');
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xA9342743B634A462 | Since: 1207 | API-Set: unknown
 */
export function _0xA9342743B634A462(): void {
    Citizen.invokeNative('0xA9342743B634A462', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xAB26DEEE120FD3FD | Since: 1207 | API-Set: unknown
 */
export function _0xAB26DEEE120FD3FD(): void {
    Citizen.invokeNative('0xAB26DEEE120FD3FD', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xAD44856A1CD29635 | Since: 1207 | API-Set: unknown
 */
export function _0xAD44856A1CD29635(): void {
    Citizen.invokeNative('0xAD44856A1CD29635', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xAF3A84C7DE6A1DC5 | Since: 1207 | API-Set: unknown
 */
export function _0xAF3A84C7DE6A1DC5(): void {
    Citizen.invokeNative('0xAF3A84C7DE6A1DC5', undefined, undefined);
}

/**
 * Hardcoded to return one/true.
 * 
 * Hash: 0xAF530E56505D1BD6 | Since: 1207 | API-Set: unknown
 */
export function _0xAF530E56505D1BD6(): any {
    return Citizen.invokeNative('0xAF530E56505D1BD6', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB08C4FA25BC29DB9 | Since: 1207 | API-Set: unknown
 */
export function _0xB08C4FA25BC29DB9(): void {
    Citizen.invokeNative('0xB08C4FA25BC29DB9', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB1F6665AA54DCD5C | Since: 1207 | API-Set: unknown
 */
export function _0xB1F6665AA54DCD5C(p0: number | string): any {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    return Citizen.invokeNative('0xB1F6665AA54DCD5C', p0);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xB711EB4BC8D06013 | Since: 1207 | API-Set: unknown
 */
export function _0xB711EB4BC8D06013(): void {
    Citizen.invokeNative('0xB711EB4BC8D06013');
}

/**
 * No comment provided
 * 
 * Hash: 0xBB282CF5D2333FB8 | Since: 1207 | API-Set: unknown
 */
export function _0xBB282CF5D2333FB8(): void {
    Citizen.invokeNative('0xBB282CF5D2333FB8', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCC1BAF72D571DB8D | Since: 1207 | API-Set: unknown
 */
export function _0xCC1BAF72D571DB8D(): any {
    return Citizen.invokeNative('0xCC1BAF72D571DB8D', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCC3EDC5614B03F61 | Since: 1207 | API-Set: unknown
 */
export function _0xCC3EDC5614B03F61(): void {
    Citizen.invokeNative('0xCC3EDC5614B03F61', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD3F943B88F55376A | Since: 1207 | API-Set: unknown
 */
export function _0xD3F943B88F55376A(weatherType: number | string): void {
    if (typeof weatherType === 'string') weatherType = GetHashKey(weatherType)
    Citizen.invokeNative('0xD3F943B88F55376A', weatherType);
}

/**
 * No comment provided
 * 
 * Hash: 0xDA4D8EB04E8E2928 | Since: 1207 | API-Set: unknown
 */
export function _0xDA4D8EB04E8E2928(): void {
    Citizen.invokeNative('0xDA4D8EB04E8E2928', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDBDA48EC456ED908 | Since: 1436 | API-Set: unknown
 */
export function _0xDBDA48EC456ED908(): void {
    Citizen.invokeNative('0xDBDA48EC456ED908');
}

/**
 * Hardcoded to return one/true.
 * 
 * Hash: 0xDC057B86FC157031 | Since: 1207 | API-Set: unknown
 */
export function _0xDC057B86FC157031(): any {
    return Citizen.invokeNative('0xDC057B86FC157031');
}

/**
 * No comment provided
 * 
 * Hash: 0xDC416CA762BC4F43 | Since: 1207 | API-Set: unknown
 */
export function _0xDC416CA762BC4F43(): any {
    return Citizen.invokeNative('0xDC416CA762BC4F43', undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDE2C3B74D2B3705C | Since: 1207 | API-Set: unknown
 */
export function _0xDE2C3B74D2B3705C(): void {
    Citizen.invokeNative('0xDE2C3B74D2B3705C', undefined, undefined);
}

/**
 * Not implemented.
 * 
 * Hash: 0xEB946B9E579729AD | Since: 1207 | API-Set: unknown
 */
export function _0xEB946B9E579729AD(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xEB946B9E579729AD', _ped, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF569E33FB72ED28E | Since: 1207 | API-Set: unknown
 */
export function _0xF569E33FB72ED28E(): void {
    Citizen.invokeNative('0xF569E33FB72ED28E');
}

/**
 * No comment provided
 * 
 * Hash: 0xF63FA29D4A9ACA86 | Since: 1207 | API-Set: unknown
 */
export function _0xF63FA29D4A9ACA86(): void {
    Citizen.invokeNative('0xF63FA29D4A9ACA86', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF650DCF5D6F312C1 | Since: 1232 | API-Set: unknown
 */
export function _0xF650DCF5D6F312C1(): void {
    Citizen.invokeNative('0xF650DCF5D6F312C1', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF81C53561D15F330 | Since: 1207 | API-Set: unknown
 */
export function _0xF81C53561D15F330(): string {
    return Citizen.invokeNative('0xF81C53561D15F330');
}

/**
 * No comment provided
 * 
 * Hash: 0xFC6ECB9170145ECE | Since: 1207 | API-Set: unknown
 */
export function _0xFC6ECB9170145ECE(): void {
    Citizen.invokeNative('0xFC6ECB9170145ECE');
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xFF252E2BAFB7330F | Since: 1207 | API-Set: unknown
 */
export function _0xFF252E2BAFB7330F(): void {
    Citizen.invokeNative('0xFF252E2BAFB7330F', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA2D5A26208421426 | Since: 1207 | API-Set: unknown
 */
export function addDispatchSpawnBlockingArea(volume: number): any {
    return AddDispatchSpawnBlockingArea(volume);
}

/**
 * Only used in script function PROCESS_ZONE_CREATION
 * Returns Pop multiplier volume ID
 * 
 * Hash: 0x3233C4EC0514C7EC | Since: 1207 | API-Set: unknown
 */
export function addPopMultiplierVolume(volume: number, pedDensity: number, vehicleDensity: number): number {
    return AddPopMultiplierVolume(volume, pedDensity, vehicleDensity, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xD2D74F89DF844A50 | Since: 1207 | API-Set: unknown
 */
export function clearAllBitFlags(): any {
    return ClearAllBitFlags();
}

/**
 * No comment provided
 * 
 * Hash: 0xB909149F2BB5F6DA | Since: 1207 | API-Set: unknown
 */
export function clearBitFlag(flag: number): any {
    return ClearBitFlag(flag);
}

/**
 * No comment provided
 * 
 * Hash: 0x2FCD528A397E5C88 | Since: 1207 | API-Set: unknown
 */
export function clearVolumeArea(volume: number, flag: number): void {
    ClearVolumeArea(volume, flag);
}

/**
 * No comment provided
 * 
 * Hash: 0xCE7690C0A0D1C36D | Since: 1207 | API-Set: unknown
 */
export function clearWeatherTypePersistOvertime(milliseconds: number): void {
    ClearWeatherTypePersistOvertime(milliseconds);
}

/**
 * No comment provided
 * 
 * Hash: 0x0E71C80FA4EC8147 | Since: 1207 | API-Set: unknown
 */
export function clearWeatherVariation(weatherType: string): void {
    ClearWeatherVariation(weatherType, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xE704838F36F93B7B | Since: 1355 | API-Set: unknown
 */
export function countBitFlags(): [number, any] {
    return CountBitFlags();
}

/**
 * aiMemoryType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/_CREATE_AI_MEMORY
 * 
 * Hash: 0x88BC5F4AEF77FC4E | Since: 1207 | API-Set: unknown
 */
export function createAiMemory(aiMemoryType: number): any {
    return CreateAiMemory(aiMemoryType);
}

/**
 * Returns a formatted string (0x%x)
 * 
 * Hash: 0xBCC2CFADEA1AEA6C | Since: 1207 | API-Set: unknown
 */
export function createColorString(rgb: number): string {
    return CreateColorString(rgb);
}

/**
 * dispatchService: see ENABLE_DISPATCH_SERVICE
 * 
 * The entities must be added to itemSet.
 * 
 * Hash: 0xAB3D3F45436DB1D8 | Since: 1207 | API-Set: unknown
 */
export function createIncidentWithEntities(dispatchService: number, pos: Vector3, itemSet: any, radius: number): [boolean, number] {
    return CreateIncidentWithEntities(dispatchService, pos.x, pos.y, pos.z, itemSet, radius);
}

/**
 * disables composite Pick prompt
 * 
 * Hash: 0x082C043C7AFC3747 | Since: 1207 | API-Set: unknown
 */
export function disableCompositePickPromptThisFrame(compositeId: number, disable: boolean): void {
    Citizen.invokeNative('0x082C043C7AFC3747', compositeId, disable);
}

/**
 * No comment provided
 * 
 * Hash: 0xBDC6E364C9C78178 | Since: 1207 | API-Set: unknown
 */
export function doesItemHaveValidBase(item: number): boolean {
    return DoesItemHaveValidBase(item);
}

/**
 * No comment provided
 * 
 * Hash: 0x39D6DACE323A20B6 | Since: 1207 | API-Set: unknown
 */
export function doesPopMultiplierAreaExistForVolume(volume: number): boolean {
    return DoesPopMultiplierAreaExistForVolume(volume);
}

/**
 * No comment provided
 * 
 * Hash: 0x9382D5D43D2AA6FF | Since: 1207 | API-Set: unknown
 */
export function doesStringExistInString(): [boolean, string, string] {
    return DoesStringExistInString();
}

/**
 * p3 is always -1.0f in the scripts
 * 
 * Hash: 0x67943537D179597C | Since: 1207 | API-Set: unknown
 */
export function forceLightningFlashAtCoords(pos: Vector3): void {
    ForceLightningFlashAtCoords(pos.x, pos.y, pos.z, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xFAED234C7F53ABEB | Since: 1207 | API-Set: unknown
 */
export function gameFrameworkManagerGetMode(): number {
    return GameFrameworkManagerGetMode();
}

/**
 * No comment provided
 * 
 * Hash: 0xAFF2FD8ADD927585 | Since: 1207 | API-Set: unknown
 */
export function gameFrameworkManagerShutdown(): void {
    GameFrameworkManagerShutdown();
}

/**
 * No comment provided
 * 
 * Hash: 0xFDF38E2B711BF78E | Since: 1207 | API-Set: unknown
 */
export function getAiPedDoesHaveEventMemory(): [boolean, any] {
    return GetAiPedDoesHaveEventMemory(0);
}

/**
 * https://easings.net/
 * 
 * enum class eEasingCurveType
 * {
 * TYPE_LINEAR,
 * TYPE_QUADRATIC_IN,
 * TYPE_QUADRATIC_OUT,
 * TYPE_QUADRATIC_INOUT,
 * TYPE_CUBIC_IN,
 * TYPE_CUBIC_OUT,
 * TYPE_CUBIC_INOUT,
 * TYPE_QUARTIC_IN,
 * TYPE_QUARTIC_OUT,
 * TYPE_QUARTIC_INOUT,
 * TYPE_QUINTIC_IN,
 * TYPE_QUINTIC_OUT,
 * TYPE_QUINTIC_INOUT,
 * TYPE_EXPONENTIAL_IN,
 * TYPE_EXPONENTIAL_OUT,
 * TYPE_EXPONENTIAL_INOUT,
 * TYPE_SINE_IN,
 * TYPE_SINE_OUT,
 * TYPE_SINE_INOUT,
 * TYPE_CIRCULAR_IN,
 * TYPE_CIRCULAR_OUT,
 * TYPE_CIRCULAR_INOUT,
 * TYPE_BOUNCE_IN,
 * TYPE_BOUNCE_OUT,
 * TYPE_BOUNCE_INOUT,
 * TYPE_CUSTOM
 * };
 * 
 * Hash: 0xEF50E344A8F93784 | Since: 1207 | API-Set: unknown
 */
export function getEasingCurveValue(t: number, b: number, d: number, easingCurveType: number): number {
    return GetEasingCurveValue(t, b, d, easingCurveType);
}

/**
 * No comment provided
 * 
 * Hash: 0xEE04C0AFD4EFAF0E | Since: 1207 | API-Set: unknown
 */
export function getEntityFromItem(item: number): number {
    return GetEntityFromItem(item);
}

/**
 * Returns the weather type that has been set by a script
 * 
 * Hash: 0xDD560ABEF5D3784C | Since: 1207 | API-Set: unknown
 */
export function getForcedWeather(): [number, number] {
    return GetForcedWeather();
}

/**
 * `Returns rage::fwTimer::sm_nonScaledClippedTime`
 * 
 * Hash: 0x483B8C542103AD72 | Since: 1207 | API-Set: unknown
 */
export function getGameTimerNonScaledClipped(): number {
    return GetGameTimerNonScaledClipped();
}

/**
 * Outputs the ground Z axis, its material and flags.Input flags are 17, 129 or 3423 in R* scripts.similar to flags of shapes test native
 * 
 * Hash: 0xBBE5B63EFFB08E68 | Since: 1207 | API-Set: unknown
 */
export function getGroundZAndMaterialFor3dCoord(coords: any, flags: number): [boolean, number, number, number] {
    return Citizen.invokeNative('0xBBE5B63EFFB08E68', coords, flags);
}

/**
 * 0 = invalid
 * 1 = CEntity
 * `2 = rage::volBase`
 * `3 = rage::volSphere`
 * `4 = rage::volBox`
 * `5 = rage::volAggregate`
 * `6 = rage::volCylinder`
 * 7 = CScriptedCoverPoint
 * `8 = rage::ptfxScriptInfo`
 * 9 = CPed
 * 10 = CVehicle
 * 11 = CObject
 * 12 = CItemSet
 * 13 = CPersistentCharacter
 * 
 * Hash: 0xDC8D2FF478DF9553 | Since: 1207 | API-Set: unknown
 */
export function getItemType(handle: number): number {
    return GetItemType(handle);
}

/**
 * Event names in the scripts: MGBegin, MGEnd, ReadyForCut
 * 
 * Hash: 0xF9B91C5129EABC08 | Since: 1207 | API-Set: unknown
 */
export function getLootingEventHasFired(ped: number | IPed): [boolean, string] {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetLootingEventHasFired(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xC43CD2668B204419 | Since: 1207 | API-Set: unknown
 */
export function getMaxNumInstructions(): number {
    return GetMaxNumInstructions();
}

/**
 * No comment provided
 * 
 * Hash: 0x51021D36F62AAA83 | Since: 1207 | API-Set: unknown
 */
export function getNextWeatherTypeHashName(): number {
    return GetNextWeatherTypeHashName();
}

/**
 * No comment provided
 * 
 * Hash: 0x72904D3D62AF5839 | Since: 1207 | API-Set: unknown
 */
export function getNumberOfInstructions(): number {
    return GetNumberOfInstructions();
}

/**
 * No comment provided
 * 
 * Hash: 0x18013392501CE5DC | Since: 1207 | API-Set: unknown
 */
export function getObjectFromIndexedItem(item: number): number {
    return GetObjectFromIndexedItem(item);
}

/**
 * No comment provided
 * 
 * Hash: 0x3FFB15534067DCD4 | Since: 1207 | API-Set: unknown
 */
export function getPedFromIndexedItem(item: number): number {
    return GetPedFromIndexedItem(item);
}

/**
 * No comment provided
 * 
 * Hash: 0x4BEB42AEBCA732E9 | Since: 1207 | API-Set: unknown
 */
export function getPrevWeatherTypeHashName(): number {
    return GetPrevWeatherTypeHashName();
}

/**
 * No comment provided
 * 
 * Hash: 0x1359C181BC625503 | Since: 1207 | API-Set: unknown
 */
export function getRandomWeatherType(): number {
    return GetRandomWeatherType();
}

/**
 * No comment provided
 * 
 * Hash: 0x7F4CE164D9A11DFE | Since: 1207 | API-Set: unknown
 */
export function getRandomWeatherTypeIndex(): number {
    return GetRandomWeatherTypeIndex();
}

/**
 * Only 0 and 1 are valid for p0, higher values causes the native to return 2.
 * 
 * Hash: 0x1B065A2BF7953815 | Since: 1207 | API-Set: unknown
 */
export function getStatusOfSavegameOperation(): number {
    return GetStatusOfSavegameOperation(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xF216F74101968DB0 | Since: 1207 | API-Set: unknown
 */
export function getStringFromBool(value: boolean): string {
    return GetStringFromBool(value);
}

/**
 * No comment provided
 * 
 * Hash: 0x2B6846401D68E563 | Since: 1207 | API-Set: unknown
 */
export function getStringFromFloat(value: number, digits: number): string {
    return GetStringFromFloat(value, digits);
}

/**
 * Returns a string in the following format: <<%.4f,%.4f,%.4f>>
 * 
 * Hash: 0x6C4DBF553885F9EB | Since: 1207 | API-Set: unknown
 */
export function getStringFromVector(pos: Vector3): string {
    return GetStringFromVector(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xB98B78C3768AF6E0 | Since: 1207 | API-Set: unknown
 */
export function getTemperatureAtCoords(pos: Vector3): number {
    return GetTemperatureAtCoords(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xE578C8AE173719B3 | Since: 1207 | API-Set: unknown
 */
export function getVehicleFromIndexedItem(item: number): number {
    return GetVehicleFromIndexedItem(item);
}

/**
 * No comment provided
 * 
 * Hash: 0xF18AF483DF70BBDE | Since: 1207 | API-Set: unknown
 */
export function getVolumeFromIndexedItem(item: number): number {
    return GetVolumeFromIndexedItem(item);
}

/**
 * Note: the buffer should be exactly 32 bytes long
 * 
 * Hash: 0xCF11C0CEB40C401B | Since: 1207 | API-Set: unknown
 */
export function intToString(value: number, format: string): string {
    return IntToString(value, format);
}

/**
 * No comment provided
 * 
 * Hash: 0x80E9C316EF84DD81 | Since: 1207 | API-Set: unknown
 */
export function isAnyBitFlagSet(): [boolean, any] {
    return IsAnyBitFlagSet();
}

/**
 * No comment provided
 * 
 * Hash: 0xFEC1D4B5C82C176F | Since: 1207 | API-Set: unknown
 */
export function isBaseACoverPoint(handle: number): boolean {
    return IsBaseACoverPoint(handle);
}

/**
 * No comment provided
 * 
 * Hash: 0x716F17F8A0419F95 | Since: 1207 | API-Set: unknown
 */
export function isBaseAPersistentCharacter(handle: number): boolean {
    return IsBaseAPersistentCharacter(handle);
}

/**
 * No comment provided
 * 
 * Hash: 0x8F4F050054005C27 | Since: 1207 | API-Set: unknown
 */
export function isBitFlagSet(flag: number): [boolean, any] {
    return IsBitFlagSet(flag);
}

/**
 * No comment provided
 * 
 * Hash: 0xACB7E1418A8B6E32 | Since: 1207 | API-Set: unknown
 */
export function isGlobalBlockValid(index: number): boolean {
    return IsGlobalBlockValid(index);
}

/**
 * No comment provided
 * 
 * Hash: 0xF236C84C6ADFCB2F | Since: 1207 | API-Set: unknown
 */
export function isMissionCreatorActive(): boolean {
    return IsMissionCreatorActive();
}

/**
 * No comment provided
 * 
 * Hash: 0x5170DDA6D63ACAAA | Since: 1207 | API-Set: unknown
 */
export function isPedDecomposed(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedDecomposed(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x36040772DF5E59A0 | Since: 1355 | API-Set: unknown
 */
export function isPlayerOwningStandaloneSp(): boolean {
    return IsPlayerOwningStandaloneSp();
}

/**
 * No comment provided
 * 
 * Hash: 0x48E4D50F87A96AA5 | Since: 1207 | API-Set: unknown
 */
export function lootTablesGetInfo(ped: number | IPed, lootTableKey: number | string): any {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof lootTableKey === 'string') lootTableKey = GetHashKey(lootTableKey)
    return LootTablesGetInfo(_ped, false, false, lootTableKey, undefined);
}

/**
 * p0 must be < 2
 * 
 * Hash: 0x279B0696DA4657EB | Since: 1207 | API-Set: unknown
 */
export function queueSavegameOperation(): boolean {
    return QueueSavegameOperation(0);
}

/**
 * Reads the passed value as floating point value and returns it.
 * Example: _READ_INT_AS_FLOAT(0x3F800000) returns 1.0f because 0x3F800000 is the hexadecimal representation of 1.0f.
 * 
 * Hash: 0xD2C9126410DFA1B2 | Since: 1207 | API-Set: unknown
 */
export function readIntAsFloat(value: number): number {
    return ReadIntAsFloat(value);
}

/**
 * No comment provided
 * 
 * Hash: 0xBD090F5B1DB82189 | Since: 1207 | API-Set: unknown
 */
export function removePopMultiplierAreaForVolume(volume: number): void {
    RemovePopMultiplierAreaForVolume(volume, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x54EC7B6BC72BAD69 | Since: 1207 | API-Set: unknown
 */
export function resetDispatchMaxSpawnDistance(): void {
    ResetDispatchMaxSpawnDistance();
}

/**
 * No comment provided
 * 
 * Hash: 0x96498D922D8D0D0A | Since: 1207 | API-Set: unknown
 */
export function resetDispatchMinSpawnDistance(): void {
    ResetDispatchMinSpawnDistance();
}

/**
 * Used in CAIConditionAmbientAIMemoryReactionsEnabled
 * 
 * Hash: 0x6AC4AF46A6B8DFB2 | Since: 1207 | API-Set: unknown
 */
export function setAiMemoryReactionsEnabled(enabled: boolean): void {
    SetAiMemoryReactionsEnabled(enabled);
}

/**
 * Similar to SET_BIT but specifically designed for large (>32 flags) bit flag sets.
 * The flags are stored in an int array where each int has the ability to hold 32 flags.
 * Flags 0-31 would be stored in the first int, flags 32-63 in the second int, etc.
 * 
 * Hash: 0xE84AAC1B22A73E99 | Since: 1207 | API-Set: unknown
 */
export function setBitFlag(flag: number): any {
    return SetBitFlag(flag);
}

/**
 * No comment provided
 * 
 * Hash: 0x89314FB3463E28DE | Since: 1207 | API-Set: unknown
 */
export function setDispatchMaxSpawnDistance(maxSpawnDistance: number): void {
    SetDispatchMaxSpawnDistance(maxSpawnDistance);
}

/**
 * No comment provided
 * 
 * Hash: 0x27A1B170AA8AF84C | Since: 1207 | API-Set: unknown
 */
export function setDispatchMinSpawnDistance(minSpawnDistance: number): void {
    SetDispatchMinSpawnDistance(minSpawnDistance);
}

/**
 * Note: this native was added in build 1232.56
 * 
 * Hash: 0x550F05CFFBD63C8C | Since: 1232 | API-Set: unknown
 */
export function setGameLogicPaused(): void {
    SetGameLogicPaused();
}

/**
 * No comment provided
 * 
 * Hash: 0xE97240065406CB80 | Since: 1207 | API-Set: unknown
 */
export function setGlobalBlockIsLoaded(index: number, toggle: boolean): void {
    SetGlobalBlockIsLoaded(index, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9617B6E5F6537B63 | Since: 1207 | API-Set: unknown
 */
export function setIncidentUnk(incidentId: number): void {
    SetIncidentUnk(incidentId);
}

/**
 * No comment provided
 * 
 * Hash: 0x9B47971234169990 | Since: 1207 | API-Set: unknown
 */
export function setLootPeltSatchelItem(ped: number | IPed, item: any): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetLootPeltSatchelItem(_ped, item);
}

/**
 * No comment provided
 * 
 * Hash: 0xBE83CAE8ED77A94F | Since: 1207 | API-Set: unknown
 */
export function setOverrideWeather(weatherType: number | string): void {
    if (typeof weatherType === 'string') weatherType = GetHashKey(weatherType)
    SetOverrideWeather(weatherType);
}

/**
 * No comment provided
 * 
 * Hash: 0xF6BEE7E80EC5CA40 | Since: 1207 | API-Set: unknown
 */
export function setSnowLevel(level: number): void {
    SetSnowLevel(level);
}

/**
 * No comment provided
 * 
 * Hash: 0x2C6A07AF9AEDABD8 | Since: 1207 | API-Set: unknown
 */
export function setWeatherType2(weatherType: number | string): void {
    if (typeof weatherType === 'string') weatherType = GetHashKey(weatherType)
    SetWeatherType2(weatherType, 0, 0, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xD74ACDF7DB8114AF | Since: 1207 | API-Set: unknown
 */
export function setWeatherTypeFrozen(toggle: boolean): void {
    SetWeatherTypeFrozen(toggle);
}

/**
 * https://github.com/femga/rdr3_discoveries/blob/master/weather/weather_variations.lua
 * 
 * Hash: 0x3373779BAF7CAF48 | Since: 1207 | API-Set: unknown
 */
export function setWeatherVariation(): [string, string] {
    return SetWeatherVariation();
}

/**
 * No comment provided
 * 
 * Hash: 0x0177CF20345F44DD | Since: 1207 | API-Set: unknown
 */
export function shouldUse24HourClock(): boolean {
    return ShouldUse24HourClock();
}

/**
 * Same as SHOULD_USE_METRIC_MEASUREMENTS
 * 
 * Hash: 0x58BCDC75BA52110A | Since: 1207 | API-Set: unknown
 */
export function shouldUseMetricMeasurements2(): boolean {
    return ShouldUseMetricMeasurements2();
}

/**
 * No comment provided
 * 
 * Hash: 0xFF4AAF3275BAAB4F | Since: 1207 | API-Set: unknown
 */
export function shouldUseMetricTemperature(): boolean {
    return ShouldUseMetricTemperature();
}

/**
 * No comment provided
 * 
 * Hash: 0x8F24157FEDB85EA2 | Since: 1207 | API-Set: unknown
 */
export function shouldUseMetricWeight(): boolean {
    return ShouldUseMetricWeight();
}

/**
 * Not officially named
 * , Counts the number of segments in a string that are separated by specified delimiter characters, ignoring consecutive delimiters.
 * 
 * Hash: 0x94E8CA3DEE952789 | Since: 1207 | API-Set: unknown
 */
export function stringSplitAndCountSegments(): [number, string, string] {
    return Citizen.invokeNative('0x94E8CA3DEE952789');
}

