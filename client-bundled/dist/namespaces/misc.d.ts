import { Vector3, Vector2, IEntity, IPed, IPlayer, IObject } from '@risinglife/redm-shared';
/**
 * Adds the given model name hash to the list of valid models for the player ped's parachute.
 *
 * Hash: 0x8AC7AE9 | Since: unknown | API-Set: client
 */
export declare function addAuthorizedParachuteModel(modelNameHash: number): void;
/**
 * Adds the given model name hash to the list of valid models for the player ped's parachute pack.
 *
 * Hash: 0x2E86DEA5 | Since: unknown | API-Set: client
 */
export declare function addAuthorizedParachutePackModel(modelNameHash: number): void;
/**
 * Adds new health config.
 *
 * Hash: 0x9CBFD5C1 | Since: unknown | API-Set: client
 */
export declare function addHealthConfig(configName: string, defaultHealth: number, defaultArmor: number, defaultEndurance: number, fatiguedHealthThreshold: number, injuredHealthThreshold: number, dyingHealthThreshold: number, hurtHealthThreshold: number, dogTakedownThreshold: number, writheFromBulletThreshold: number, meleeCardinalFatalAttack: boolean, invincible: boolean): void;
/**
 * Disables the editor runtime mode, changing game behavior to not track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xB1622B17 | Since: unknown | API-Set: client
 */
export declare function disableEditorRuntime(): void;
/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity.
 *
 * Hash: 0x3D5AB7F0 | Since: unknown | API-Set: client
 */
export declare function disableIdleCamera(state: boolean): void;
/**
 * Enables the editor runtime mode, changing game behavior to track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xC383871D | Since: unknown | API-Set: client
 */
export declare function enableEditorRuntime(): void;
/**
 * Enters cursor mode, suppressing mouse movement to the game and displaying a mouse cursor instead. This function supports
 * SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x780DA86 | Since: unknown | API-Set: client
 */
export declare function enterCursorMode(): void;
/**
 * A getter for [SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME](#\_0x0B919E1FB47CC4E0).
 *
 * Hash: 0xB550232D | Since: unknown | API-Set: client
 */
export declare function getAmbientPedRangeMultiplier(): number;
/**
 * This native returns the index of a calming quad if the given point is inside its bounds.
 *
 * Hash: 0x870E8B40 | Since: unknown | API-Set: client
 */
export declare function getCalmingQuadAtCoords(x: number, y: number): number;
/**
 * No comment provided
 *
 * Hash: 0xFF60E63 | Since: unknown | API-Set: client
 */
export declare function getCalmingQuadBounds(waterQuad: number): [boolean, number, number, number, number];
/**
 * No comment provided
 *
 * Hash: 0xCEBFC42 | Since: unknown | API-Set: client
 */
export declare function getCalmingQuadCount(): number;
/**
 * No comment provided
 *
 * Hash: 0xB0E3A058 | Since: unknown | API-Set: client
 */
export declare function getCalmingQuadDampening(waterQuad: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x5550BF9F | Since: unknown | API-Set: client
 */
export declare function getFuelConsumptionRateMultiplier(): number;
/**
 * No comment provided
 *
 * Hash: 0xC66CD90C | Since: unknown | API-Set: client
 */
export declare function getFuelConsumptionState(): boolean;
/**
 * A getter for [SET_GLOBAL_PASSENGER_MASS_MULTIPLIER](#\_0x3422291C).
 *
 * Hash: 0x78951816 | Since: unknown | API-Set: client
 */
export declare function getGlobalPassengerMassMultiplier(): number;
/**
 * Retrieves the map data entity handle.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x30AA6911 | Since: unknown | API-Set: client
 */
export declare function getMapdataEntityHandle(mapDataHash: number, entityInternalIdx: number): [boolean, number];
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
export declare function getMapdataEntityMatrix(mapDataHash: number, entityInternalIdx: number, matrixPtr: number): boolean;
/**
 * Returns the transient map data index for a specified hash.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xD29D8EDD | Since: unknown | API-Set: client
 */
export declare function getMapdataFromHashKey(mapdataHandle: number | string): number;
/**
 * A getter for [SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xEAE6DCC7EEE3DB1D).
 *
 * Hash: 0xFF72DF84 | Since: unknown | API-Set: client
 */
export declare function getParkedVehicleDensityMultiplier(): number;
/**
 * A getter for [SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xB3B3359379FE77D3).
 * Same as vehicle density multiplier.
 *
 * Hash: 0x7B0D00C5 | Since: unknown | API-Set: client
 */
export declare function getRandomVehicleDensityMultiplier(): number;
/**
 * A getter for [SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x7A556143A1C03898).
 *
 * Hash: 0x77C598B2 | Since: unknown | API-Set: client
 */
export declare function getScenarioPedDensityMultiplier(): number;
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Returns whether an asynchronous streaming file registration completed.
 *
 * Hash: 0xA194934D | Since: unknown | API-Set: client
 */
export declare function isStreamingFileReady(registerAs: string): boolean;
/**
 * Leaves cursor mode. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xADECF19E | Since: unknown | API-Set: client
 */
export declare function leaveCursorMode(): void;
/**
 * Toggles a check that prevents attaching (networked) entities to remotely owned peds. This is disabled by default.
 *
 * Hash: 0x30CE39D8 | Since: unknown | API-Set: client
 */
export declare function onesyncEnableRemoteAttachmentSanitization(enable: boolean): void;
/**
 * Replaces the `popgroups` (CPopGroupList) meta file with the file in the specified path.
 *
 * Hash: 0xD3BC438F | Since: unknown | API-Set: client
 */
export declare function overridePopGroups(path: string): void;
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a set of archetypes with the game engine. These should match `CBaseArchetypeDef` class information from the game.
 *
 * Hash: 0x3C2F9037 | Since: unknown | API-Set: client
 */
export declare function registerArchetypes(factory: Function): void;
/**
 * Registers a specified .gfx file as GFx font library.
 * The .gfx file has to be registered with the streamer already.
 *
 * Hash: 0x1B3A363 | Since: unknown | API-Set: client
 */
export declare function registerFontFile(fileName: string): void;
/**
 * Registers a specified font name for use with text draw commands.
 *
 * Hash: 0xACF6D8EE | Since: unknown | API-Set: client
 */
export declare function registerFontId(fontName: string): number;
/**
 * Registers a key mapping for the current resource.
 *
 * See the related [cookbook post](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/) for more information.
 *
 * Below you can find some examples on how to create these keybindings as well as the alternate keybinding syntax, which is preceded by `~!` to indicate that it's an alternate key.
 *
 * Hash: 0xD7664FD1 | Since: unknown | API-Set: client
 */
export declare function registerKeyMapping(commandString: string, description: string, defaultMapper: string, defaultParameter: string): void;
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a dynamic streaming asset from the server with the GTA streaming module system.
 *
 * Hash: 0xCEAD2D4B | Since: unknown | API-Set: client
 */
export declare function registerStreamingFileFromCache(resourceName: string, fileName: string, cacheString: string): void;
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a KVP value as an asset with the GTA streaming module system. This function currently won't work.
 *
 * Hash: 0x1493DCC1 | Since: unknown | API-Set: client
 */
export declare function registerStreamingFileFromKvs(kvsKey: string): void;
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a file from an URL as a streaming asset in the GTA streaming subsystem. This will asynchronously register the asset, and caching is done based on the URL itself - cache headers are ignored.
 *
 * Use `IS_STREAMING_FILE_READY` to check if the asset has been registered successfully.
 *
 * Hash: 0xF44BFB95 | Since: unknown | API-Set: client
 */
export declare function registerStreamingFileFromUrl(registerAs: string, url: string): void;
/**
 * Removes health config.
 *
 * Hash: 0xE0ED5FB | Since: unknown | API-Set: client
 */
export declare function removeHealthConfig(configName: string): void;
/**
 * Adds a cooldown between instances of moving and then aiming.
 * Can be optionally used to hinder 'speedboosting'
 * To turn off, set value to 0
 *
 * Hash: 0xA42A3DBF | Since: unknown | API-Set: client
 */
export declare function setAimCooldown(value: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC5945BD9 | Since: unknown | API-Set: client
 */
export declare function setCalmingQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x67977501 | Since: unknown | API-Set: client
 */
export declare function setCalmingQuadDampening(calmingQuad: number, dampening: number): boolean;
/**
 * Allows Weapon-Flashlight beams to stay visible while moving. Normally it only stays on while aiming.
 *
 * Hash: 0x7635B349 | Since: unknown | API-Set: client
 */
export declare function setFlashLightKeepOnWhileMoving(state: boolean): void;
/**
 * Sets fuel consumption rate multiplier for all vehicles operated by a player. This is a way to slow down or speed up fuel consumption for all vehicles at a time. If 0 - it practically means that fuel will not be consumed. By default is set to 1.
 *
 * When the multiplier is set to 1 a default 65 litre gas tank car with average fuel consumption can stay idle for ~16.67 hours or run with max RPM for ~2.5 hours.
 *
 * To customize fuel consumption per vehicle / vehicle class use [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolConsumptionRate`. By default it is set to 0.5 for all vehicles.
 *
 * Hash: 0x845F3E5C | Since: unknown | API-Set: client
 */
export declare function setFuelConsumptionRateMultiplier(multiplier: number): void;
/**
 * Turns on and off fuel consumption in all vehicles operated by a player. NPC operated vehicles will not consume fuel to avoid traffic disruptions.
 *
 * The default Gta5 behaviour is fuel consumption turned off.
 *
 * Hash: 0x81DAD03E | Since: unknown | API-Set: client
 */
export declare function setFuelConsumptionState(state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1C47F6AC | Since: unknown | API-Set: client
 */
export declare function setGlobalPassengerMassMultiplier(massMul: number): void;
/**
 * Sets default armor value for specific health config.
 *
 * Hash: 0x20A1E6A2 | Since: unknown | API-Set: client
 */
export declare function setHealthConfigDefaultArmor(configName: string, newValue: number): void;
/**
 * Sets default endurance value for specific health config.
 *
 * Hash: 0x60F20B81 | Since: unknown | API-Set: client
 */
export declare function setHealthConfigDefaultEndurance(configName: string, newValue: number): void;
/**
 * Sets default health value for specific health config.
 *
 * Hash: 0xC705C778 | Since: unknown | API-Set: client
 */
export declare function setHealthConfigDefaultHealth(configName: string, newValue: number): void;
/**
 * Sets default dog takedown threshold value for specific health config.
 *
 * Hash: 0x9A995E96 | Since: unknown | API-Set: client
 */
export declare function setHealthConfigDogTakedownThreshold(configName: string, newValue: number): void;
/**
 * Sets default dying health threshold value for specific health config.
 *
 * Hash: 0x9B00FD77 | Since: unknown | API-Set: client
 */
export declare function setHealthConfigDyingThreshold(configName: string, newValue: number): void;
/**
 * Sets default fatigued health threshold value for specific health config.
 *
 * Hash: 0xC58953FD | Since: unknown | API-Set: client
 */
export declare function setHealthConfigFatiguedThreshold(configName: string, newValue: number): void;
/**
 * Sets default hurt health threshold value for specific health config.
 *
 * Hash: 0x98DF1A83 | Since: unknown | API-Set: client
 */
export declare function setHealthConfigHurtThreshold(configName: string, newValue: number): void;
/**
 * Sets default injured health threshold value for specific health config.
 *
 * Hash: 0xF9D9B647 | Since: unknown | API-Set: client
 */
export declare function setHealthConfigInjuredThreshold(configName: string, newValue: number): void;
/**
 * Sets default invincible value for specific health config.
 *
 * Hash: 0x4A9EEDE6 | Since: unknown | API-Set: client
 */
export declare function setHealthConfigInvincible(configName: string, newValue: boolean): void;
/**
 * Sets default melee cardinal fatal attack value for specific health config.
 *
 * Hash: 0xDD443E53 | Since: unknown | API-Set: client
 */
export declare function setHealthConfigMeleeFatalAttack(configName: string, newValue: boolean): void;
/**
 * Sets default writhe from bullet threshold value for specific health config.
 *
 * Hash: 0xE97633CB | Since: unknown | API-Set: client
 */
export declare function setHealthConfigWritheFromBulletThreshold(configName: string, newValue: number): void;
/**
 * Overrides how many real ms are equal to one game minute.
 * A setter for [`GetMillisecondsPerGameMinute`](#\_0x2F8B4D1C595B11DB).
 *
 * Hash: 0x36CA2554 | Since: unknown | API-Set: client
 */
export declare function setMillisecondsPerGameMinute(value: number): void;
/**
 * <strong>This native is deprecated and does nothing!</strong>
 *
 * Hash: 0x7F6B8D75 | Since: unknown | API-Set: client
 */
export declare function setModelHeadlightConfiguration(modelHash: number | string, ratePerSecond: number, headlightRotation: number, invertRotation: boolean): void;
/**
 * Sets whether all tags should group (normal game behavior) or should remain independent and above each ped's respective head when in a vehicle.
 *
 * Hash: 0x7A27BC93 | Since: unknown | API-Set: client
 */
export declare function setMpGamerTagsUseVehicleBehavior(enabled: boolean): void;
/**
 * Sets the maximum distance at which all tags will be visible and which beyond will not be displayed. Distance is measured from the camera position.
 *
 * Hash: 0xD61676B3 | Since: unknown | API-Set: client
 */
export declare function setMpGamerTagsVisibleDistance(distance: number): void;
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
export declare function registerRawKeymap(keymapName: string, onKeyDown: Function, onKeyUp: Function, rawKeyIndex: number, canBeDisabled: boolean): void;
/**
 * Remaps the keymap bound to `keymapName` to `newRawKeyIndex`
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x6E38C1B9 | Since: unknown | API-Set: client
 */
export declare function remapRawKeymap(keymapName: string, newRawKeyIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC44C2F44 | Since: unknown | API-Set: client
 */
export declare function setBackfaceculling(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8A7A8DAC | Since: unknown | API-Set: client
 */
export declare function setCursorLocation(x: number, y: number): boolean;
/**
 * Sets whether or not ownership checks should be performed while trying to stow a carriable on a hunting wagon.
 *
 * Hash: 0x85A10FFD | Since: unknown | API-Set: client
 */
export declare function setIgnoreVehicleOwnershipForStowing(ignore: boolean): void;
/**
 * Activates built-in timecycle editing tool.
 *
 * Hash: 0xEEB9B76A | Since: unknown | API-Set: client
 */
export declare function activateTimecycleEditor(): void;
/**
 * No comment provided
 *
 * Hash: 0x3422291C | Since: unknown | API-Set: client
 */
export declare function applyWeatherCycles(numEntries: number, msPerCycle: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x54D636B3 | Since: unknown | API-Set: client
 */
export declare function cloneTimecycleModifier(sourceModifierName: string, clonedModifierName: string): number;
/**
 * Create a clean timecycle modifier. See [`SET_TIMECYCLE_MODIFIER_VAR`](#\_0x6E0A422B) to add variables.
 *
 * Hash: 0x70FA2AFA | Since: unknown | API-Set: client
 */
export declare function createTimecycleModifier(modifierName: string): number;
/**
 * Disables the game's world horizon lods rendering (see `farlods.#dd`).
 * Using the island hopper natives might also affect this state.
 *
 * Hash: 0xA9C92CDC | Since: unknown | API-Set: client
 */
export declare function disableWorldhorizonRendering(state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC53BB6D3 | Since: unknown | API-Set: client
 */
export declare function doesTimecycleModifierHasVar(modifierName: string, varName: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDEDA4E50 | Since: unknown | API-Set: client
 */
export declare function endFindObject(findHandle: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9615C2AD | Since: unknown | API-Set: client
 */
export declare function endFindPed(findHandle: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3C407D53 | Since: unknown | API-Set: client
 */
export declare function endFindPickup(findHandle: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9227415A | Since: unknown | API-Set: client
 */
export declare function endFindVehicle(findHandle: number): void;
/**
 * This native is not implemented.
 *
 * Hash: 0xD2CB95A3 | Since: unknown | API-Set: client
 */
export declare function experimentalLoadCloneCreate(data: string, objectId: number, tree: string): number;
/**
 * This native is not implemented.
 *
 * Hash: 0x6BC189AC | Since: unknown | API-Set: client
 */
export declare function experimentalLoadCloneSync(entity: number | IEntity, data: string): void;
/**
 * This native is not implemented.
 *
 * Hash: 0x9D65CAD2 | Since: unknown | API-Set: client
 */
export declare function experimentalSaveCloneCreate(entity: number | IEntity): string;
/**
 * This native is not implemented.
 *
 * Hash: 0x38D19210 | Since: unknown | API-Set: client
 */
export declare function experimentalSaveCloneSync(entity: number | IEntity): string;
/**
 * No comment provided
 *
 * Hash: 0xFAA6CB5D | Since: unknown | API-Set: client
 */
export declare function findFirstObject(): [number, number];
/**
 * No comment provided
 *
 * Hash: 0xFB012961 | Since: unknown | API-Set: client
 */
export declare function findFirstPed(): [number, number];
/**
 * No comment provided
 *
 * Hash: 0x3FF9D340 | Since: unknown | API-Set: client
 */
export declare function findFirstPickup(): [number, number];
/**
 * No comment provided
 *
 * Hash: 0x15E55694 | Since: unknown | API-Set: client
 */
export declare function findFirstVehicle(): [number, number];
/**
 * No comment provided
 *
 * Hash: 0x4E129DBF | Since: unknown | API-Set: client
 */
export declare function findNextObject(findHandle: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xAB09B548 | Since: unknown | API-Set: client
 */
export declare function findNextPed(findHandle: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x4107EF0F | Since: unknown | API-Set: client
 */
export declare function findNextPickup(findHandle: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x8839120D | Since: unknown | API-Set: client
 */
export declare function findNextVehicle(findHandle: number): [boolean, number];
/**
 * This native returns the currently used game's name.
 *
 * Hash: 0xACA18ECD | Since: unknown | API-Set: client
 */
export declare function getCurrentGameName(): string;
/**
 * Returns the peer address of the remote game server that the user is currently connected to.
 *
 * Hash: 0xEA11BFBA | Since: unknown | API-Set: client
 */
export declare function getCurrentServerEndpoint(): string;
/**
 * No comment provided
 *
 * Hash: 0xFE2A1D4D | Since: unknown | API-Set: client
 */
export declare function getTimecycleModifierCount(): number;
/**
 * No comment provided
 *
 * Hash: 0x5F4CD0E2 | Since: unknown | API-Set: client
 */
export declare function getTimecycleModifierIndexByName(modifierName: string): number;
/**
 * No comment provided
 *
 * Hash: 0x28CB8608 | Since: unknown | API-Set: client
 */
export declare function getTimecycleModifierNameByIndex(modifierIndex: number): string;
/**
 * A getter for [SET_TIMECYCLE_MODIFIER_STRENGTH](#\_0x82E7FFCD5B2326B3).
 *
 * Hash: 0xBE54124A | Since: unknown | API-Set: client
 */
export declare function getTimecycleModifierStrength(): number;
/**
 * No comment provided
 *
 * Hash: 0xA7109E12 | Since: unknown | API-Set: client
 */
export declare function getTimecycleModifierVar(modifierName: string, varName: string): [boolean, number, number];
/**
 * No comment provided
 *
 * Hash: 0x60FB60FE | Since: unknown | API-Set: client
 */
export declare function getTimecycleModifierVarCount(modifierName: string): number;
/**
 * No comment provided
 *
 * Hash: 0xE874AB1D | Since: unknown | API-Set: client
 */
export declare function getTimecycleModifierVarNameByIndex(modifierName: string, modifierVarIndex: number): string;
/**
 * Returns the amount of variables available to be applied on timecycle modifiers.
 *
 * Hash: 0x838B34D8 | Since: unknown | API-Set: client
 */
export declare function getTimecycleVarCount(): number;
/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 *
 * Hash: 0x3B90238 | Since: unknown | API-Set: client
 */
export declare function getTimecycleVarDefaultValueByIndex(varIndex: number): number;
/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 *
 * Hash: 0xC6C55AAF | Since: unknown | API-Set: client
 */
export declare function getTimecycleVarNameByIndex(varIndex: number): string;
/**
 * Converts a screen coordinate into its relative world coordinate.
 *
 * Hash: 0xC81D0659 | Since: unknown | API-Set: client
 */
export declare function getWorldCoordFromScreenCoord(screenSize: Vector2): [Vector3, Vector3];
/**
 * No comment provided
 *
 * Hash: 0x36DF8612 | Since: unknown | API-Set: client
 */
export declare function removeTimecycleModifier(modifierName: string): void;
/**
 * No comment provided
 *
 * Hash: 0x5A5E0D05 | Since: unknown | API-Set: client
 */
export declare function removeTimecycleModifierVar(modifierName: string, varName: string): void;
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
export declare function requestResourceFileSet(setName: string): boolean;
/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 *
 * Hash: 0x8BBE6CC0 | Since: unknown | API-Set: client
 */
export declare function sendLoadingScreenMessage(jsonString: string): boolean;
/**
 * Toggles the visibility of resource names in the FiveM key mapping page.
 *
 * Hash: 0xCB0241B5 | Since: unknown | API-Set: client
 */
export declare function setKeyMappingHideResources(hide: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xA7DD3209 | Since: unknown | API-Set: client
 */
export declare function setSnakeoilForEntry(name: string, path: string, data: string): void;
/**
 * No comment provided
 *
 * Hash: 0x97B2F9F8 | Since: unknown | API-Set: client
 */
export declare function setTextChatEnabled(enabled: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6E0A422B | Since: unknown | API-Set: client
 */
export declare function setTimecycleModifierVar(modifierName: string, varName: string, value1: number, value2: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD264D4E1 | Since: unknown | API-Set: client
 */
export declare function setWeatherCycleEntry(index: number, typeName: string, timeMult: number): boolean;
/**
 * Sets whether or not the weather should be owned by the network subsystem.
 *
 * To be able to use [\_SET_WEATHER_TYPE_TRANSITION](#\_0x578C752848ECFA0C), this has to be set to false.
 *
 * Hash: 0x2703D582 | Since: unknown | API-Set: client
 */
export declare function setWeatherOwnedByNetwork(network: boolean): void;
/**
 * The backing function for TriggerLatentServerEvent.
 *
 * Hash: 0x128737EA | Since: unknown | API-Set: client
 */
export declare function triggerLatentServerEventInternal(eventName: string, eventPayload: string, payloadLength: number, bps: number): void;
/**
 * The backing function for TriggerServerEvent.
 *
 * Hash: 0x7FDD1128 | Since: unknown | API-Set: client
 */
export declare function triggerServerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void;
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
export declare function addConvarChangeListener(conVarFilter: string, handler: Function): number;
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
export declare function addStateBagChangeHandler(keyFilter: string, bagFilter: string, handler: Function): number;
/**
 * Cancels the currently executing event.
 *
 * Hash: 0xFA29D35D | Since: unknown | API-Set: shared
 */
export declare function cancelEvent(): void;
/**
 * No comment provided
 *
 * Hash: 0x1E86F206 | Since: unknown | API-Set: shared
 */
export declare function deleteFunctionReference(referenceIdentity: string): void;
/**
 * No comment provided
 *
 * Hash: 0xF4E2079D | Since: unknown | API-Set: shared
 */
export declare function duplicateFunctionReference(referenceIdentity: string): string;
/**
 * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
 *
 * Hash: 0x561C060B | Since: unknown | API-Set: shared
 */
export declare function executeCommand(commandString: string): void;
/**
 * An internal function for converting a stack trace object to a string.
 *
 * Hash: 0xD70C3BCA | Since: unknown | API-Set: shared
 */
export declare function formatStackTrace(traceData: number | IObject): string;
/**
 * Can be used to get a console variable of type `char*`, for example a string.
 *
 * Hash: 0x6CCD2564 | Since: unknown | API-Set: shared
 */
export declare function getConvar(varName: string, default_: string): string;
/**
 * Can be used to get a console variable casted back to `bool`.
 *
 * Hash: 0x7E8EBFE5 | Since: unknown | API-Set: shared
 */
export declare function getConvarBool(varName: string, defaultValue: boolean): boolean;
/**
 * This will have floating point inaccuracy.
 *
 * Hash: 0x9E666D | Since: unknown | API-Set: shared
 */
export declare function getConvarFloat(varName: string, defaultValue: number): number;
/**
 * Can be used to get a console variable casted back to `int` (an integer value).
 *
 * Hash: 0x935C0AB2 | Since: unknown | API-Set: shared
 */
export declare function getConvarInt(varName: string, default_: number): number;
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
export declare function getGameBuildNumber(): number;
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
export declare function getGameName(): string;
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
export declare function getGamePool(poolName: string): number;
/**
 * No comment provided
 *
 * Hash: 0x9F1C4383 | Since: unknown | API-Set: shared
 */
export declare function getInstanceId(): number;
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
export declare function getRegisteredCommands(): number;
/**
 * No comment provided
 *
 * Hash: 0x78D864C7 | Since: unknown | API-Set: shared
 */
export declare function getStateBagKeys(bagName: string): number;
/**
 * Returns the value of a state bag key.
 *
 * Hash: 0x637F4C75 | Since: unknown | API-Set: shared
 */
export declare function getStateBagValue(bagName: string, key: string): number;
/**
 * No comment provided
 *
 * Hash: 0x7EBB9929 | Since: unknown | API-Set: shared
 */
export declare function isAceAllowed(_object: string): boolean;
/**
 * Gets whether or not this is the CitizenFX server.
 *
 * Hash: 0xCF24C52E | Since: unknown | API-Set: shared
 */
export declare function isDuplicityVersion(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x37CF52CE | Since: unknown | API-Set: shared
 */
export declare function isPrincipalAceAllowed(principal: string, _object: string): boolean;
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
export declare function registerCommand(commandName: string, handler: Function, restricted: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xEAC49841 | Since: unknown | API-Set: shared
 */
export declare function removeConvarChangeListener(cookie: number): void;
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Removes a handler for changes to a state bag.
 *
 * Hash: 0xD36BE661 | Since: unknown | API-Set: shared
 */
export declare function removeStateBagChangeHandler(cookie: number): void;
/**
 * Internal function for setting a state bag value.
 *
 * Hash: 0x8D50E33A | Since: unknown | API-Set: shared
 */
export declare function setStateBagValue(bagName: string, keyName: string, valueData: string, valueLength: number, replicated: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x12A330 | Since: unknown | API-Set: shared
 */
export declare function stateBagHasKey(bagName: string, key: string): boolean;
/**
 * The backing function for TriggerEvent.
 *
 * Hash: 0x91310870 | Since: unknown | API-Set: shared
 */
export declare function triggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void;
/**
 * Returns whether or not the currently executing event was canceled.
 *
 * Hash: 0x58382A19 | Since: unknown | API-Set: shared
 */
export declare function wasEventCanceled(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x134549B388167CBF | Since: 1207 | API-Set: unknown
 */
export declare function absf(value: number): number;
/**
 * No comment provided
 *
 * Hash: 0x0C214D5B8A38C828 | Since: 1207 | API-Set: unknown
 */
export declare function absi(value: number): number;
/**
 * No comment provided
 *
 * Hash: 0x586690F0176DC575 | Since: 1207 | API-Set: unknown
 */
export declare function acos(): number;
/**
 * Appears to remove stealth kill action from memory (?)
 *
 * Hash: 0x7ACF124C12A2B045 | Since: 1207 | API-Set: unknown
 */
export declare function actionManagerEnableAction(hash: number | string, enable: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xFD0759658268FD8E | Since: 1207 | API-Set: unknown
 */
export declare function actionManagerIsActionEnabled(hash: number | string): boolean;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x91D657230BC208D2 | Since: 1207 | API-Set: unknown
 */
export declare function activityFeedActionStartWithCommandLine(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x1694A053DFB61A34 | Since: 1207 | API-Set: unknown
 */
export declare function activityFeedActionStartWithCommandLineAdd(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x9935F76407C32539 | Since: 1207 | API-Set: unknown
 */
export declare function activityFeedAddSubstringToCaption(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xCC7FC854B956A128 | Since: 1207 | API-Set: unknown
 */
export declare function activityFeedCreate(): [string, string];
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xB16FC7B364D86585 | Since: 1207 | API-Set: unknown
 */
export declare function activityFeedPost(): void;
/**
 * No comment provided
 *
 * Hash: 0x5EBDA1A3B8CB5EF7 | Since: 1207 | API-Set: unknown
 */
export declare function addPopMultiplierArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, pedDensity: number, trafficDensity: number): number;
/**
 * Params: p3 is 0 in R* Script utopia2
 *
 * Hash: 0xE4EE55E63FA9AF45 | Since: 1207 | API-Set: unknown
 */
export declare function addTacticalNavMeshPoint(pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xD3852F22AB713A1F | Since: 1207 | API-Set: unknown
 */
export declare function areStringsEqual(): [boolean, string, string];
/**
 * No comment provided
 *
 * Hash: 0x6E3C15D296C15583 | Since: 1207 | API-Set: unknown
 */
export declare function asin(): number;
/**
 * No comment provided
 *
 * Hash: 0x503054DED0B78027 | Since: 1207 | API-Set: unknown
 */
export declare function atan(): number;
/**
 * No comment provided
 *
 * Hash: 0x965B220A066E3F07 | Since: 1207 | API-Set: unknown
 */
export declare function atan2(): number;
/**
 * dispatchService: see ENABLE_DISPATCH_SERVICE
 *
 * Hash: 0x66947E61A44DE2C6 | Since: 1207 | API-Set: unknown
 */
export declare function blockDispatchServiceResourceCreation(dispatchService: number, toggle: boolean): void;
/**
 * Old name: _CANCEL_ONSCREEN_KEYBOARD
 *
 * Hash: 0x58A39BE597CE99CD | Since: 1207 | API-Set: unknown
 */
export declare function cancelOnscreenKeyboard(): void;
/**
 * No comment provided
 *
 * Hash: 0xA4D83115C1E02F8A | Since: 1207 | API-Set: unknown
 */
export declare function clearAngledAreaOfVehicles(): void;
/**
 * Possible flag names:
 * ALL_BASE = 0,
 * PROJECTILES = 1,
 * BROADCAST = 524288,
 * AMBIENT_POPULATION = 1048576
 *
 * Hash: 0x3B882A96EA77D5B1 | Since: 1207 | API-Set: unknown
 */
export declare function clearArea(pos: Vector3, radius: number, flag: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7D1D4A3602B6AD4E | Since: 1207 | API-Set: unknown
 */
export declare function clearBit(offset: number): number;
/**
 * No comment provided
 *
 * Hash: 0x80A398F16FFE3CC3 | Since: 1207 | API-Set: unknown
 */
export declare function clearOverrideWeather(): void;
/**
 * No comment provided
 *
 * Hash: 0xD93B6516C6878267 | Since: 1207 | API-Set: unknown
 */
export declare function clearTacticalNavMeshPoints(): void;
/**
 * No comment provided
 *
 * Hash: 0xD85DFE5C131E4AE9 | Since: 1207 | API-Set: unknown
 */
export declare function clearWeatherTypePersist(): void;
/**
 * No comment provided
 *
 * Hash: 0xBFBB74A15EFC149B | Since: 1207 | API-Set: unknown
 */
export declare function compareStrings(matchCase: boolean, maxLength: number): [number, string, string];
/**
 * Old name: _COPY_MEMORY
 *
 * Hash: 0xF7AC7DC0DEE7C9BE | Since: 1207 | API-Set: unknown
 */
export declare function copyScriptStruct(size: number): [any, any];
/**
 * dispatchService: see ENABLE_DISPATCH_SERVICE
 *
 * Hash: 0x3F892CAF67444AE7 | Since: 1207 | API-Set: unknown
 */
export declare function createIncident(dispatchService: number, pos: Vector3, numUnits: number, radius: number): [boolean, number];
/**
 * Delete an incident with a given id.
 *
 * Hash: 0x5CFD0F0D6AAE0AEE | Since: 1207 | API-Set: unknown
 */
export declare function deleteIncident(incidentId: number): void;
/**
 * disables prompt eat
 *
 * Hash: 0x40D72189F46D2E15 | Since: 1207 | API-Set: unknown
 */
export declare function disableLootingCompositeLootableThisFrame(compositeId: number, disable: boolean): void;
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
export declare function displayOnscreenKeyboard(textType: number, maxInputLength: number): [string, string, string, string, string, string];
/**
 * No comment provided
 *
 * Hash: 0x03BA619C81A646B3 | Since: 1207 | API-Set: unknown
 */
export declare function doesPopMultiplierAreaExist(id: number): boolean;
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
export declare function enableDispatchService(dispatchService: number, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xCBC9A21F6A2A679C | Since: 1207 | API-Set: unknown
 */
export declare function fireSingleBullet(): any;
/**
 * creates single lightning+thunder at random position
 *
 * Hash: 0x369DB5B2510FA080 | Since: 1207 | API-Set: unknown
 */
export declare function forceLightningFlash(): void;
/**
 * No comment provided
 *
 * Hash: 0x4CABE596D632E4B0 | Since: 1207 | API-Set: unknown
 */
export declare function gameFrameworkManagerInit(transitionMode: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD0DFE1C486097BBB | Since: 1207 | API-Set: unknown
 */
export declare function getAngleBetween2dVectors(x1: number, y1: number, x2: number, y2: number): number;
/**
 * Returns value of the '-benchmarkIterations' command line option.
 *
 * Old name: _GET_BENCHMARK_ITERATIONS_FROM_COMMAND_LINE
 *
 * Hash: 0x22FC52CF470CC98D | Since: 1207 | API-Set: unknown
 */
export declare function getBenchmarkIterations(): number;
/**
 * Returns value of the '-benchmarkPass' command line option.
 *
 * Old name: _GET_BENCHMARK_PASS_FROM_COMMAND_LINE
 *
 * Hash: 0x9297DACF3A2CDFF7 | Since: 1207 | API-Set: unknown
 */
export declare function getBenchmarkPass(): number;
/**
 * No comment provided
 *
 * Hash: 0x68E1352AF48F905D | Since: 1207 | API-Set: unknown
 */
export declare function getBitsInRange(_var: number, rangeStart: number, rangeEnd: number): number;
/**
 * No comment provided
 *
 * Hash: 0x83ACC65D9ACEC5EF | Since: 1207 | API-Set: unknown
 */
export declare function getClosestPointOnLine(): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xD73C960A681052DF | Since: 1207 | API-Set: unknown
 */
export declare function getCoordsOfProjectileTypeWithinDistance(ped: number | IPed, weaponHash: number | string, distance: number, mustBeOwnedByThisPed: boolean): [boolean, Vector3];
/**
 * Params: percentWeather2: 0f - 0.75f in R* Scripts
 *
 * Old name: _GET_WEATHER_TYPE_TRANSITION
 *
 * Hash: 0x0AC679B2342F14F2 | Since: 1207 | API-Set: unknown
 */
export declare function getCurrWeatherState(): [number, number, number];
/**
 * If useZ is false, only the 2D plane (X-Y) will be considered for calculating the distance.
 *
 * `Consider using this faster native instead: BUILTIN::VDIST - DVIST always takes in consideration the 3D coordinates.`
 *
 * Hash: 0x0BE7F4E3CDBAFB28 | Since: 1207 | API-Set: unknown
 */
export declare function getDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0x77DFA958FCF100C1 | Since: 1207 | API-Set: unknown
 */
export declare function getFrameCount(): number;
/**
 * No comment provided
 *
 * Hash: 0x5E72022914CE3C38 | Since: 1207 | API-Set: unknown
 */
export declare function getFrameTime(): number;
/**
 * No comment provided
 *
 * Hash: 0x4F67E8ECA7D3F667 | Since: 1207 | API-Set: unknown
 */
export declare function getGameTimer(): number;
/**
 * No comment provided
 *
 * Hash: 0x2A29CA9A6319E6AB | Since: 1207 | API-Set: unknown
 */
export declare function getGroundZAndNormalFor3dCoord(pos: Vector3): [boolean, number, Vector3];
/**
 * No comment provided
 *
 * Hash: 0x24FA4267BB8D2431 | Since: 1207 | API-Set: unknown
 */
export declare function getGroundZFor3dCoord(pos: Vector3): [boolean, number];
/**
 * Computes a hash for the given string. It is hashed using Jenkins' One-at-a-Time hash algorithm (https://en.wikipedia.org/wiki/Jenkins_hash_function)
 * Note: this implementation is case-insensitive.
 *
 * Hash: 0xFD340785ADF8CFB7 | Since: 1207 | API-Set: unknown
 */
export declare function getHashKey(): [number, string];
/**
 * dx = x1 - x2
 * dy = y1 - y2
 *
 * Hash: 0x38D5202FF9271C62 | Since: 1207 | API-Set: unknown
 */
export declare function getHeadingFromVector2d(dx: number, dy: number): number;
/**
 * No comment provided
 *
 * Hash: 0xAB6A04CEC428258B | Since: 1207 | API-Set: unknown
 */
export declare function getLinePlaneIntersection(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xB15CD1CF58771DE1 | Since: 1207 | API-Set: unknown
 */
export declare function getMissionFlag(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDCB8DDD5D054A7E7 | Since: 1207 | API-Set: unknown
 */
export declare function getModelDimensions(modelHash: number | string): [Vector3, Vector3];
/**
 * No comment provided
 *
 * Hash: 0x40DC2907A9697EF7 | Since: 1207 | API-Set: unknown
 */
export declare function getNumberOfFreeStacksOfThisSize(stackSize: number): number;
/**
 * No comment provided
 *
 * Hash: 0xB0CE5E5ED8BB3581 | Since: 1207 | API-Set: unknown
 */
export declare function getNumberOfMicrosecondsSinceLastCall(): number;
/**
 * Returns NULL unless UPDATE_ONSCREEN_KEYBOARD() returns 1 in the same tick.
 *
 * Hash: 0xAFB4CF58A4A292B1 | Since: 1207 | API-Set: unknown
 */
export declare function getOnscreenKeyboardResult(): string;
/**
 * No comment provided
 *
 * Hash: 0x9578986A6105A6AD | Since: 1207 | API-Set: unknown
 */
export declare function getProjectileOfProjectileTypeWithinDistance(ped: number | IPed, weaponHash: number | string, distance: number, mustBeOwnedByThisPed: boolean): [boolean, Vector3, number];
/**
 * No comment provided
 *
 * Hash: 0x931B5F4CC130224B | Since: 1207 | API-Set: unknown
 */
export declare function getRainLevel(): number;
/**
 * No comment provided
 *
 * Hash: 0x924D54E5698AE3E0 | Since: 1207 | API-Set: unknown
 */
export declare function getRandomEventFlag(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE29F927A961F8AAA | Since: 1207 | API-Set: unknown
 */
export declare function getRandomFloatInRange(startRange: number, endRange: number): number;
/**
 * No comment provided
 *
 * Hash: 0xD53343AA4FB7DD28 | Since: 1207 | API-Set: unknown
 */
export declare function getRandomIntInRange(startRange: number, endRange: number): number;
/**
 * Returns GET_GAME_TIMER() / 1000
 * Only used in rcm_pearson1.ysc
 *
 * Hash: 0x2E036F0480B8BF02 | Since: 1207 | API-Set: unknown
 */
export declare function getRealWorldTime(): number;
/**
 * No comment provided
 *
 * Hash: 0x63219768C586667C | Since: 1207 | API-Set: unknown
 */
export declare function getScriptTimeWithinFrameInMicroseconds(): number;
/**
 * No comment provided
 *
 * Hash: 0x1E5D727041BE1709 | Since: 1207 | API-Set: unknown
 */
export declare function getSnowLevel(): number;
/**
 * No comment provided
 *
 * Hash: 0xBE7F225417E35A7C | Since: 1207 | API-Set: unknown
 */
export declare function getSystemTime(): number;
/**
 * Old name: _GET_BENCHMARK_TIME
 *
 * Hash: 0x3F3172FEAE3AFE1C | Since: 1207 | API-Set: unknown
 */
export declare function getSystemTimeStep(): number;
/**
 * No comment provided
 *
 * Hash: 0xF703E82F3FE14A5F | Since: 1207 | API-Set: unknown
 */
export declare function getWindDirection(): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xFFB7E74E041150A4 | Since: 1207 | API-Set: unknown
 */
export declare function getWindSpeed(): number;
/**
 * p3 - possibly radius?
 *
 * Hash: 0xC153E5BCCF411814 | Since: 1207 | API-Set: unknown
 */
export declare function hasBulletImpactedInArea(pos: Vector3): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3B6A4C05FB2B33AC | Since: 1207 | API-Set: unknown
 */
export declare function hasBulletImpactedInBox(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6C9FF40FF1B69F8F | Since: 1207 | API-Set: unknown
 */
export declare function ignoreNextRestart(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x708DF841B8F27AA2 | Since: 1207 | API-Set: unknown
 */
export declare function informCodeOfContentIdOfCurrentUgcMission(): void;
/**
 * No comment provided
 *
 * Hash: 0x4ED6CFDFE8D4131A | Since: 1207 | API-Set: unknown
 */
export declare function isBitSet(address: number, offset: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9D09D8493747CF02 | Since: 1207 | API-Set: unknown
 */
export declare function isBulletInAngledArea(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC652FD308772D79E | Since: 1207 | API-Set: unknown
 */
export declare function isBulletInArea(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC128137C52152741 | Since: 1207 | API-Set: unknown
 */
export declare function isBulletInBox(): boolean;
/**
 * Hardcoded to return false.
 * Checks for XBOXONE Game Build.
 *
 * Hash: 0xD1CCC2A2639D325F | Since: 1207 | API-Set: unknown
 */
export declare function isDurangoVersion(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF9E7DBB39080640B | Since: 1207 | API-Set: unknown
 */
export declare function isGameSessionStateMachineIdle(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x39F2B1BAD412246A | Since: 1207 | API-Set: unknown
 */
export declare function isIncidentValid(incidentId: number): boolean;
/**
 * magdemo = magazine demo, i. e. for magazines such as IGN, pre play phases to prepare articles etc. - example 2012 builds for V
 * Hardcoded to return false.
 *
 * Hash: 0x5FC9357C26DAEFCE | Since: 1207 | API-Set: unknown
 */
export declare function isMagDemo1Active(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF4D8BCD052E7EA1B | Since: 1207 | API-Set: unknown
 */
export declare function isMinigameInProgress(): boolean;
/**
 * Hardcoded to return false.
 * Checks for PS4 Game Build.
 *
 * Hash: 0x88CFAE250D3E0C71 | Since: 1207 | API-Set: unknown
 */
export declare function isOrbisVersion(): boolean;
/**
 * Hardcoded to return true.
 *
 * Hash: 0xB0FB6CFAA5A1C833 | Since: 1207 | API-Set: unknown
 */
export declare function isPcVersion(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x825CA3ED43831015 | Since: 1207 | API-Set: unknown
 */
export declare function isPositionOccupied(pos: Vector3, range: number): boolean;
/**
 * Determines whether there is a projectile within the specified coordinates. The coordinates form a rectangle.
 *
 * ownedByPlayer = only projectiles fired by the player will be detected.
 *
 * Hash: 0x05B0061EFDFC8941 | Since: 1207 | API-Set: unknown
 */
export declare function isProjectileInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x928431F4133CD3D4 | Since: 1207 | API-Set: unknown
 */
export declare function isProjectileTypeInAngledArea(): boolean;
/**
 * Determines whether there is a projectile of a specific type within the specified coordinates. The coordinates form a rectangle.
 *
 * Hash: 0x04965FB9E14235C7 | Since: 1207 | API-Set: unknown
 */
export declare function isProjectileTypeInArea(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, weaponType: number | string, isPlayer: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF51C9BAAD9ED64C4 | Since: 1207 | API-Set: unknown
 */
export declare function isProjectileTypeWithinDistance(): boolean;
/**
 * Hardcoded to return false.
 *
 * Hash: 0x268AB8420A9E4ED7 | Since: 1207 | API-Set: unknown
 */
export declare function isStadiaVersion(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x602102324604D96B | Since: 1207 | API-Set: unknown
 */
export declare function isStringNull(_string: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2CF12F9ACF18F048 | Since: 1207 | API-Set: unknown
 */
export declare function isStringNullOrEmpty(_string: string): boolean;
/**
 * Returns true if the entire string consists only of space characters.
 *
 * Hash: 0x375F5870A7B8BEC1 | Since: 1207 | API-Set: unknown
 */
export declare function isStringNullOrEmptyOrSpaces(_string: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3D0EAC6385DD6100 | Since: 1207 | API-Set: unknown
 */
export declare function networkSetScriptIsSafeForNetworkGame(): void;
/**
 * No comment provided
 *
 * Hash: 0x5CB71EAA1429A358 | Since: 1207 | API-Set: unknown
 */
export declare function nextOnscreenKeyboardResultWillDisplayUsingTheseFonts(fontBitField: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB2C69E11A37B5AF0 | Since: 1207 | API-Set: unknown
 */
export declare function overrideSaveHouse(override: boolean, pos: Vector3, heading: number, isAutosave: boolean): [boolean, Vector3, number];
/**
 * No comment provided
 *
 * Hash: 0x66AB6B6C7E72F393 | Since: 1207 | API-Set: unknown
 */
export declare function pauseDeathArrestRestart(toggle: boolean): void;
/**
 * spawns a few distant/out-of-sight peds, vehicles, animals etc each time it is called
 *
 * Hash: 0xEA6DC3A8ADD2005F | Since: 1207 | API-Set: unknown
 */
export declare function populateNow(): void;
/**
 * p3 is usually the same value of radius
 * p8 determines whether the ILO prompt is a lock on prompt with RMB
 *
 * Hash: 0x870708A6E147A9AD | Since: 1207 | API-Set: unknown
 */
export declare function registerInteractionLockonPrompt(entity: number | IEntity, text: string, radius: number, flag: number, prompt: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x49F751F6868DDC5B | Since: 1207 | API-Set: unknown
 */
export declare function removeDispatchSpawnBlockingArea(): void;
/**
 * No comment provided
 *
 * Hash: 0x88CB484364EFB37A | Since: 1207 | API-Set: unknown
 */
export declare function removePopMultiplierArea(id: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC7817264BC4B6377 | Since: 1207 | API-Set: unknown
 */
export declare function resetDispatchIdealSpawnDistance(): void;
/**
 * Begins with RESET_*. Next character in the name is either D or E.
 *
 * Old name: _RESET_BENCHMARK_RECORDING
 *
 * Hash: 0xECBABD0307FB216F | Since: 1207 | API-Set: unknown
 */
export declare function resetEndUserBenchmark(): void;
/**
 * No comment provided
 *
 * Hash: 0x1411A7CBC3A6EB7B | Since: 1207 | API-Set: unknown
 */
export declare function resetScriptTimeWithinFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0xEF42F56F69877125 | Since: 1207 | API-Set: unknown
 */
export declare function resetWantedResponseNumPedsToSpawn(): void;
/**
 * Saves the benchmark recording to %USERPROFILE%\Documents\Rockstar Games\Red Dead Redemption 2\Benchmarks and submits some metrics.
 *
 * Old name: _SAVE_BENCHMARK_RECORDING
 *
 * Hash: 0xF4743E2ECC02B3DA | Since: 1207 | API-Set: unknown
 */
export declare function saveEndUserBenchmark(): void;
/**
 * No comment provided
 *
 * Hash: 0x769E848C66E3C2BB | Since: 1207 | API-Set: unknown
 */
export declare function scriptRaceGetPlayerSplitTime(): [boolean, any, any];
/**
 * No comment provided
 *
 * Hash: 0x8AE059F47158417E | Since: 1207 | API-Set: unknown
 */
export declare function scriptRaceInit(numCheckpoints: number, numLaps: number, numPlayers: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBA62B4D80FA66BD6 | Since: 1207 | API-Set: unknown
 */
export declare function scriptRacePlayerHitCheckpoint(part: number, checkpoint: number, lap: number, time: number): void;
/**
 * No comment provided
 *
 * Hash: 0x334CE0DA4FAF330C | Since: 1207 | API-Set: unknown
 */
export declare function scriptRaceShutdown(): void;
/**
 * No comment provided
 *
 * Hash: 0xF73FBE4845C43B5B | Since: 1207 | API-Set: unknown
 */
export declare function setBit(offset: number): number;
/**
 * No comment provided
 *
 * Hash: 0x324DC1CEF57F31E6 | Since: 1207 | API-Set: unknown
 */
export declare function setBitsInRange(rangeStart: number, rangeEnd: number): number;
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
export declare function setCheatActive(cheatId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD37BECF862DA726F | Since: 1207 | API-Set: unknown
 */
export declare function setCreditsActive(toggle: boolean): void;
/**
 * Params: BOOL p3 is always true
 *
 * Old name: _SET_WEATHER_TYPE_TRANSITION
 *
 * Hash: 0xFA3E3CA8A1DE6D5D | Since: 1207 | API-Set: unknown
 */
export declare function setCurrWeatherState(weatherType1: number | string, weatherType2: number | string, percentWeather2: number, enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xEAB6823B82FBD283 | Since: 1207 | API-Set: unknown
 */
export declare function setDispatchIdealSpawnDistance(fIdealSpawnDistance: number): void;
/**
 * Sets whether the game should fade in after the player dies or is arrested.
 *
 * Hash: 0xDF3B5846DE5904AF | Since: 1207 | API-Set: unknown
 */
export declare function setFadeInAfterDeathArrest(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xAC806C4CAB973517 | Since: 1207 | API-Set: unknown
 */
export declare function setFadeInAfterLoad(toggle: boolean): void;
/**
 * Make sure to call this from the correct thread if you're using multiple threads because all other threads except the one which is calling SET_GAME_PAUSED will be paused.
 *
 * Hash: 0xFAEC088D28B1DE4A | Since: 1207 | API-Set: unknown
 */
export declare function setGamePaused(toggle: boolean): void;
/**
 * If true, the player can't save the game.
 *
 * Hash: 0x36694B456BE80D0A | Since: 1207 | API-Set: unknown
 */
export declare function setMissionFlag(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x674B90BE1115846D | Since: 1207 | API-Set: unknown
 */
export declare function setPedDecomposed(ped: number | IPed, toggle: boolean): void;
/**
 * Old name: _SET_RAIN_LEVEL
 *
 * Hash: 0x193DFC0526830FD6 | Since: 1207 | API-Set: unknown
 */
export declare function setRain(intensity: number): void;
/**
 * If the parameter is true, sets the random event flag to true, if the parameter is false, the function does nothing at all.
 * Does nothing if the mission flag is set.
 *
 * Hash: 0xB1ADCCC4150C6473 | Since: 1207 | API-Set: unknown
 */
export declare function setRandomEventFlag(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x5CD7A49104AFCB6B | Since: 1207 | API-Set: unknown
 */
export declare function setRandomSeed(seed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6E5A7FBEECAB3C72 | Since: 1207 | API-Set: unknown
 */
export declare function setRandomWeatherType(): void;
/**
 * No comment provided
 *
 * Hash: 0xB3E9BE963F10C445 | Since: 1207 | API-Set: unknown
 */
export declare function setSuperJumpThisFrame(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x3215376E79F6EA18 | Since: 1207 | API-Set: unknown
 */
export declare function setThisScriptCanBePaused(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8ABD939C2E5D00ED | Since: 1207 | API-Set: unknown
 */
export declare function setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean): void;
/**
 * Maximum value is 1.0f
 * At a value of 0.0f the game will still run at a minimum time scale.
 *
 * Hash: 0x9682AF6050854856 | Since: 1207 | API-Set: unknown
 */
export declare function setTimeScale(timeScale: number): void;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/weather/weather_types.lua
 *
 * Hash: 0x59174F1AFE095B5A | Since: 1207 | API-Set: unknown
 */
export declare function setWeatherType(weatherType: number | string, transition: boolean, transitionTime: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB56C4F5F57A45600 | Since: 1207 | API-Set: unknown
 */
export declare function setWindDirection(direction: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD00C2D82DC04A99F | Since: 1207 | API-Set: unknown
 */
export declare function setWindSpeed(speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x867654CBC7606F2C | Since: 1207 | API-Set: unknown
 */
export declare function shootSingleBulletBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, weaponHash: number | string, ownerPed: number | IPed, isAudible: boolean, isInvisible: boolean, speed: number): void;
/**
 * Returns whether the game's measurement system is set to metric.
 *
 * Hash: 0x4FB556ACEFA93098 | Since: 1207 | API-Set: unknown
 */
export declare function shouldUseMetricMeasurements(): boolean;
/**
 * Begins with START_*. Next character in the name is either D or E.
 *
 * Old name: _START_BENCHMARK_RECORDING
 *
 * Hash: 0x29D1F6DF864A094E | Since: 1207 | API-Set: unknown
 */
export declare function startEndUserBenchmark(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xA565FAC215CBC77D | Since: 1207 | API-Set: unknown
 */
export declare function stopCurrentLoadingProgressTimer(): void;
/**
 * Begins with STOP_*. Next character in the name is either D or E.
 *
 * Old name: _STOP_BENCHMARK_RECORDING
 *
 * Hash: 0xB89AEC71AFF2B599 | Since: 1207 | API-Set: unknown
 */
export declare function stopEndUserBenchmark(): void;
/**
 * Returns false if it's a null or empty string or if the string is too long. outInteger will be set to -999 in that case.
 *
 * Hash: 0xF2DD2298B3AF23E2 | Since: 1207 | API-Set: unknown
 */
export declare function stringToInt(_string: string): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x8C13DB96497B7ABF | Since: 1207 | API-Set: unknown
 */
export declare function tan(): number;
/**
 * Hardcoded to return false.
 *
 * Old name: _UI_IS_SINGLEPLAYER_PAUSE_MENU_ACTIVE
 *
 * Hash: 0x4FFA0386A6216113 | Since: 1207 | API-Set: unknown
 */
export declare function uiStartedEndUserBenchmark(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE98D55C5983F2509 | Since: 1207 | API-Set: unknown
 */
export declare function unregisterInteractionLockonPrompt(entity: number | IEntity): boolean;
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
export declare function updateOnscreenKeyboard(): number;
/**
 * Note: The first bit in 'flags' must not be set.
 * It is also required to pass at least one extra argument (this must be a text label string or hash).
 * When passing a hash, flags should be 0.
 *
 * Hash: 0xFA925AC00EB830B9 | Since: 1207 | API-Set: unknown
 */
export declare function varString(flags: number, ...params: string[]): string;
/**
 * Only used in smuggler2 script
 *
 * Hash: 0xF06C5B66DE20B2B8 | Since: 1207 | API-Set: unknown
 */
export declare function waterOverrideSetOceanwavemaxamplitude(maxAmplitude: number): void;
/**
 * Only used in smuggler2 script
 *
 * Hash: 0x55123D5A7D9D3C42 | Since: 1207 | API-Set: unknown
 */
export declare function waterOverrideSetShorewaveamplitude(amplitude: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0358B8A41916C613 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0358B8A41916C613(): any;
/**
 * No comment provided
 *
 * Hash: 0x0730E518486DEEC3 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0730E518486DEEC3(): void;
/**
 * No comment provided
 *
 * Hash: 0x0A487CC74A517FB5 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0A487CC74A517FB5(): void;
/**
 * No comment provided
 *
 * Hash: 0x0D0AE5081F88CFE1 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0D0AE5081F88CFE1(p0: number | string): boolean;
/**
 * _SET_MISSION_NAME_*(FOR_ACTIVITY?/MINIGAME?)
 *
 * Hash: 0x1096603B519C905F | Since: 1207 | API-Set: unknown
 */
export declare function _0x1096603B519C905F(name: string): void;
/**
 * No comment provided
 *
 * Hash: 0x154340E87D8CC178 | Since: 1207 | API-Set: unknown
 */
export declare function _0x154340E87D8CC178(): void;
/**
 * No comment provided
 *
 * Hash: 0x183672FE838A661B | Since: 1207 | API-Set: unknown
 */
export declare function _0x183672FE838A661B(): any;
/**
 * No comment provided
 *
 * Hash: 0x243CEDE8F916B994 | Since: 1207 | API-Set: unknown
 */
export declare function _0x243CEDE8F916B994(): void;
/**
 * No comment provided
 *
 * Hash: 0x2916B30DC6C41179 | Since: 1207 | API-Set: unknown
 */
export declare function _0x2916B30DC6C41179(weatherType: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x33982467B1E349EF | Since: 1207 | API-Set: unknown
 */
export declare function _0x33982467B1E349EF(): any;
/**
 * No comment provided
 *
 * Hash: 0x35165C658077CD0B | Since: 1207 | API-Set: unknown
 */
export declare function _0x35165C658077CD0B(): any;
/**
 * No comment provided
 *
 * Hash: 0x38C0C9CAE1544500 | Since: 1207 | API-Set: unknown
 */
export declare function _0x38C0C9CAE1544500(p0: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x38C2BF94D15F464D | Since: 1207 | API-Set: unknown
 */
export declare function _0x38C2BF94D15F464D(): any;
/**
 * No comment provided
 *
 * Hash: 0x3A87FDA8F1B6CDFB | Since: 1207 | API-Set: unknown
 */
export declare function _0x3A87FDA8F1B6CDFB(): void;
/**
 * No comment provided
 *
 * Hash: 0x3C3C7B1B5EC08764 | Since: 1207 | API-Set: unknown
 */
export declare function _0x3C3C7B1B5EC08764(): void;
/**
 * No comment provided
 *
 * Hash: 0x4647842FE8F31C1E | Since: 1207 | API-Set: unknown
 */
export declare function _0x4647842FE8F31C1E(): void;
/**
 * No comment provided
 *
 * Hash: 0x49C44FE78A135A1D | Since: 1207 | API-Set: unknown
 */
export declare function _0x49C44FE78A135A1D(): void;
/**
 * No comment provided
 *
 * Hash: 0x49F3241C28EBBFBC | Since: 1207 | API-Set: unknown
 */
export declare function _0x49F3241C28EBBFBC(): void;
/**
 * No comment provided
 *
 * Hash: 0x4B0501A468B749F8 | Since: 1207 | API-Set: unknown
 */
export declare function _0x4B0501A468B749F8(): void;
/**
 * No comment provided
 *
 * Hash: 0x4B101DBCC9482F2D | Since: 1207 | API-Set: unknown
 */
export declare function _0x4B101DBCC9482F2D(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4D5C9CC7E7E23E09 | Since: 1207 | API-Set: unknown
 */
export declare function _0x4D5C9CC7E7E23E09(): void;
/**
 * UPDATE_PICKUP_COLLECTIBLE: set Eagle Eye fountain
 * _J*, _K*, _L*
 *
 * Hash: 0x553D67295DDD2309 | Since: 1207 | API-Set: unknown
 */
export declare function _0x553D67295DDD2309(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x5801BE2DF2AF07EC | Since: 1207 | API-Set: unknown
 */
export declare function _0x5801BE2DF2AF07EC(): void;
/**
 * No comment provided
 *
 * Hash: 0x5B4A8121A47D844D | Since: 1207 | API-Set: unknown
 */
export declare function _0x5B4A8121A47D844D(): any;
/**
 * No comment provided
 *
 * Hash: 0x627B68D9CE6EE8DE | Since: 1207 | API-Set: unknown
 */
export declare function _0x627B68D9CE6EE8DE(): any;
/**
 * No comment provided
 *
 * Hash: 0x68319452C5064ABA | Since: 1207 | API-Set: unknown
 */
export declare function _0x68319452C5064ABA(): void;
/**
 * _SET_DISPATCH_*, unused
 *
 * Hash: 0x6BCF7B5CD338281A | Since: 1207 | API-Set: unknown
 */
export declare function _0x6BCF7B5CD338281A(): void;
/**
 * No comment provided
 *
 * Hash: 0x6BED40493A1AFDB8 | Since: 1207 | API-Set: unknown
 */
export declare function _0x6BED40493A1AFDB8(): any;
/**
 * No comment provided
 *
 * Hash: 0x6C7B68D3CE60E8DE | Since: 1207 | API-Set: unknown
 */
export declare function _0x6C7B68D3CE60E8DE(): any;
/**
 * No comment provided
 *
 * Hash: 0x6F02B5E50511721E | Since: 1207 | API-Set: unknown
 */
export declare function _0x6F02B5E50511721E(): any;
/**
 * No comment provided
 *
 * Hash: 0x745808BB01CEC6B9 | Since: 1207 | API-Set: unknown
 */
export declare function _0x745808BB01CEC6B9(): void;
/**
 * No comment provided
 *
 * Hash: 0x74ACA66484CEBAF0 | Since: 1207 | API-Set: unknown
 */
export declare function _0x74ACA66484CEBAF0(): void;
/**
 * No comment provided
 *
 * Hash: 0x7A76104CC2CC69E8 | Since: 1207 | API-Set: unknown
 */
export declare function _0x7A76104CC2CC69E8(entity: number | IEntity): any;
/**
 * No comment provided
 *
 * Hash: 0x7CF96F1250EF3221 | Since: 1207 | API-Set: unknown
 */
export declare function _0x7CF96F1250EF3221(): any;
/**
 * No comment provided
 *
 * Hash: 0x7FA58CED69405F9A | Since: 1207 | API-Set: unknown
 */
export declare function _0x7FA58CED69405F9A(): void;
/**
 * No comment provided
 *
 * Hash: 0x8314FC2013ECE2DA | Since: 1207 | API-Set: unknown
 */
export declare function _0x8314FC2013ECE2DA(): any;
/**
 * No comment provided
 *
 * Hash: 0x8BB99B85444544D9 | Since: 1207 | API-Set: unknown
 */
export declare function _0x8BB99B85444544D9(): any;
/**
 * No comment provided
 *
 * Hash: 0x8C0F6A3D7236DEEB | Since: 1207 | API-Set: unknown
 */
export declare function _0x8C0F6A3D7236DEEB(): void;
/**
 * No comment provided
 *
 * Hash: 0x8DB104CCEBCD58C5 | Since: 1207 | API-Set: unknown
 */
export declare function _0x8DB104CCEBCD58C5(): any;
/**
 * No comment provided
 *
 * Hash: 0x94FCADCF9F0C368E | Since: 1207 | API-Set: unknown
 */
export declare function _0x94FCADCF9F0C368E(): void;
/**
 * No comment provided
 *
 * Hash: 0x96282005C5C6801F | Since: 1311 | API-Set: unknown
 */
export declare function _0x96282005C5C6801F(): void;
/**
 * No comment provided
 *
 * Hash: 0x970339EFA4FDE518 | Since: 1207 | API-Set: unknown
 */
export declare function _0x970339EFA4FDE518(): any;
/**
 * No comment provided
 *
 * Hash: 0x9A252AA23D7098F2 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9A252AA23D7098F2(): void;
/**
 * No comment provided
 *
 * Hash: 0x9BF2C0C568C61641 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9BF2C0C568C61641(): void;
/**
 * _CLEAR*
 *
 * Hash: 0xA08111B053D84B4D | Since: 1207 | API-Set: unknown
 */
export declare function _0xA08111B053D84B4D(): void;
/**
 * No comment provided
 *
 * Hash: 0xA3A8926951471C82 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA3A8926951471C82(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xA9342743B634A462 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA9342743B634A462(): void;
/**
 * No comment provided
 *
 * Hash: 0xAB26DEEE120FD3FD | Since: 1207 | API-Set: unknown
 */
export declare function _0xAB26DEEE120FD3FD(): void;
/**
 * No comment provided
 *
 * Hash: 0xAD44856A1CD29635 | Since: 1207 | API-Set: unknown
 */
export declare function _0xAD44856A1CD29635(): void;
/**
 * No comment provided
 *
 * Hash: 0xAF3A84C7DE6A1DC5 | Since: 1207 | API-Set: unknown
 */
export declare function _0xAF3A84C7DE6A1DC5(): void;
/**
 * Hardcoded to return one/true.
 *
 * Hash: 0xAF530E56505D1BD6 | Since: 1207 | API-Set: unknown
 */
export declare function _0xAF530E56505D1BD6(): any;
/**
 * No comment provided
 *
 * Hash: 0xB08C4FA25BC29DB9 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB08C4FA25BC29DB9(): void;
/**
 * No comment provided
 *
 * Hash: 0xB1F6665AA54DCD5C | Since: 1207 | API-Set: unknown
 */
export declare function _0xB1F6665AA54DCD5C(p0: number | string): any;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xB711EB4BC8D06013 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB711EB4BC8D06013(): void;
/**
 * No comment provided
 *
 * Hash: 0xBB282CF5D2333FB8 | Since: 1207 | API-Set: unknown
 */
export declare function _0xBB282CF5D2333FB8(): void;
/**
 * No comment provided
 *
 * Hash: 0xCC1BAF72D571DB8D | Since: 1207 | API-Set: unknown
 */
export declare function _0xCC1BAF72D571DB8D(): any;
/**
 * No comment provided
 *
 * Hash: 0xCC3EDC5614B03F61 | Since: 1207 | API-Set: unknown
 */
export declare function _0xCC3EDC5614B03F61(): void;
/**
 * No comment provided
 *
 * Hash: 0xD3F943B88F55376A | Since: 1207 | API-Set: unknown
 */
export declare function _0xD3F943B88F55376A(weatherType: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xDA4D8EB04E8E2928 | Since: 1207 | API-Set: unknown
 */
export declare function _0xDA4D8EB04E8E2928(): void;
/**
 * No comment provided
 *
 * Hash: 0xDBDA48EC456ED908 | Since: 1436 | API-Set: unknown
 */
export declare function _0xDBDA48EC456ED908(): void;
/**
 * Hardcoded to return one/true.
 *
 * Hash: 0xDC057B86FC157031 | Since: 1207 | API-Set: unknown
 */
export declare function _0xDC057B86FC157031(): any;
/**
 * No comment provided
 *
 * Hash: 0xDC416CA762BC4F43 | Since: 1207 | API-Set: unknown
 */
export declare function _0xDC416CA762BC4F43(): any;
/**
 * No comment provided
 *
 * Hash: 0xDE2C3B74D2B3705C | Since: 1207 | API-Set: unknown
 */
export declare function _0xDE2C3B74D2B3705C(): void;
/**
 * Not implemented.
 *
 * Hash: 0xEB946B9E579729AD | Since: 1207 | API-Set: unknown
 */
export declare function _0xEB946B9E579729AD(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xF569E33FB72ED28E | Since: 1207 | API-Set: unknown
 */
export declare function _0xF569E33FB72ED28E(): void;
/**
 * No comment provided
 *
 * Hash: 0xF63FA29D4A9ACA86 | Since: 1207 | API-Set: unknown
 */
export declare function _0xF63FA29D4A9ACA86(): void;
/**
 * No comment provided
 *
 * Hash: 0xF650DCF5D6F312C1 | Since: 1232 | API-Set: unknown
 */
export declare function _0xF650DCF5D6F312C1(): void;
/**
 * No comment provided
 *
 * Hash: 0xF81C53561D15F330 | Since: 1207 | API-Set: unknown
 */
export declare function _0xF81C53561D15F330(): string;
/**
 * No comment provided
 *
 * Hash: 0xFC6ECB9170145ECE | Since: 1207 | API-Set: unknown
 */
export declare function _0xFC6ECB9170145ECE(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0xFF252E2BAFB7330F | Since: 1207 | API-Set: unknown
 */
export declare function _0xFF252E2BAFB7330F(): void;
/**
 * No comment provided
 *
 * Hash: 0xA2D5A26208421426 | Since: 1207 | API-Set: unknown
 */
export declare function addDispatchSpawnBlockingArea(volume: number): any;
/**
 * Only used in script function PROCESS_ZONE_CREATION
 * Returns Pop multiplier volume ID
 *
 * Hash: 0x3233C4EC0514C7EC | Since: 1207 | API-Set: unknown
 */
export declare function addPopMultiplierVolume(volume: number, pedDensity: number, vehicleDensity: number): number;
/**
 * No comment provided
 *
 * Hash: 0xD2D74F89DF844A50 | Since: 1207 | API-Set: unknown
 */
export declare function clearAllBitFlags(): any;
/**
 * No comment provided
 *
 * Hash: 0xB909149F2BB5F6DA | Since: 1207 | API-Set: unknown
 */
export declare function clearBitFlag(flag: number): any;
/**
 * No comment provided
 *
 * Hash: 0x2FCD528A397E5C88 | Since: 1207 | API-Set: unknown
 */
export declare function clearVolumeArea(volume: number, flag: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCE7690C0A0D1C36D | Since: 1207 | API-Set: unknown
 */
export declare function clearWeatherTypePersistOvertime(milliseconds: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0E71C80FA4EC8147 | Since: 1207 | API-Set: unknown
 */
export declare function clearWeatherVariation(weatherType: string): void;
/**
 * No comment provided
 *
 * Hash: 0xE704838F36F93B7B | Since: 1355 | API-Set: unknown
 */
export declare function countBitFlags(): [number, any];
/**
 * aiMemoryType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/_CREATE_AI_MEMORY
 *
 * Hash: 0x88BC5F4AEF77FC4E | Since: 1207 | API-Set: unknown
 */
export declare function createAiMemory(aiMemoryType: number): any;
/**
 * Returns a formatted string (0x%x)
 *
 * Hash: 0xBCC2CFADEA1AEA6C | Since: 1207 | API-Set: unknown
 */
export declare function createColorString(rgb: number): string;
/**
 * dispatchService: see ENABLE_DISPATCH_SERVICE
 *
 * The entities must be added to itemSet.
 *
 * Hash: 0xAB3D3F45436DB1D8 | Since: 1207 | API-Set: unknown
 */
export declare function createIncidentWithEntities(dispatchService: number, pos: Vector3, itemSet: any, radius: number): [boolean, number];
/**
 * disables composite Pick prompt
 *
 * Hash: 0x082C043C7AFC3747 | Since: 1207 | API-Set: unknown
 */
export declare function disableCompositePickPromptThisFrame(compositeId: number, disable: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xBDC6E364C9C78178 | Since: 1207 | API-Set: unknown
 */
export declare function doesItemHaveValidBase(item: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x39D6DACE323A20B6 | Since: 1207 | API-Set: unknown
 */
export declare function doesPopMultiplierAreaExistForVolume(volume: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9382D5D43D2AA6FF | Since: 1207 | API-Set: unknown
 */
export declare function doesStringExistInString(): [boolean, string, string];
/**
 * p3 is always -1.0f in the scripts
 *
 * Hash: 0x67943537D179597C | Since: 1207 | API-Set: unknown
 */
export declare function forceLightningFlashAtCoords(pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xFAED234C7F53ABEB | Since: 1207 | API-Set: unknown
 */
export declare function gameFrameworkManagerGetMode(): number;
/**
 * No comment provided
 *
 * Hash: 0xAFF2FD8ADD927585 | Since: 1207 | API-Set: unknown
 */
export declare function gameFrameworkManagerShutdown(): void;
/**
 * No comment provided
 *
 * Hash: 0xFDF38E2B711BF78E | Since: 1207 | API-Set: unknown
 */
export declare function getAiPedDoesHaveEventMemory(): [boolean, any];
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
export declare function getEasingCurveValue(t: number, b: number, d: number, easingCurveType: number): number;
/**
 * No comment provided
 *
 * Hash: 0xEE04C0AFD4EFAF0E | Since: 1207 | API-Set: unknown
 */
export declare function getEntityFromItem(item: number): number;
/**
 * Returns the weather type that has been set by a script
 *
 * Hash: 0xDD560ABEF5D3784C | Since: 1207 | API-Set: unknown
 */
export declare function getForcedWeather(): [number, number];
/**
 * `Returns rage::fwTimer::sm_nonScaledClippedTime`
 *
 * Hash: 0x483B8C542103AD72 | Since: 1207 | API-Set: unknown
 */
export declare function getGameTimerNonScaledClipped(): number;
/**
 * Outputs the ground Z axis, its material and flags.Input flags are 17, 129 or 3423 in R* scripts.similar to flags of shapes test native
 *
 * Hash: 0xBBE5B63EFFB08E68 | Since: 1207 | API-Set: unknown
 */
export declare function getGroundZAndMaterialFor3dCoord(coords: any, flags: number): [boolean, number, number, number];
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
export declare function getItemType(handle: number): number;
/**
 * Event names in the scripts: MGBegin, MGEnd, ReadyForCut
 *
 * Hash: 0xF9B91C5129EABC08 | Since: 1207 | API-Set: unknown
 */
export declare function getLootingEventHasFired(ped: number | IPed): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xC43CD2668B204419 | Since: 1207 | API-Set: unknown
 */
export declare function getMaxNumInstructions(): number;
/**
 * No comment provided
 *
 * Hash: 0x51021D36F62AAA83 | Since: 1207 | API-Set: unknown
 */
export declare function getNextWeatherTypeHashName(): number;
/**
 * No comment provided
 *
 * Hash: 0x72904D3D62AF5839 | Since: 1207 | API-Set: unknown
 */
export declare function getNumberOfInstructions(): number;
/**
 * No comment provided
 *
 * Hash: 0x18013392501CE5DC | Since: 1207 | API-Set: unknown
 */
export declare function getObjectFromIndexedItem(item: number): number;
/**
 * No comment provided
 *
 * Hash: 0x3FFB15534067DCD4 | Since: 1207 | API-Set: unknown
 */
export declare function getPedFromIndexedItem(item: number): number;
/**
 * No comment provided
 *
 * Hash: 0x4BEB42AEBCA732E9 | Since: 1207 | API-Set: unknown
 */
export declare function getPrevWeatherTypeHashName(): number;
/**
 * No comment provided
 *
 * Hash: 0x1359C181BC625503 | Since: 1207 | API-Set: unknown
 */
export declare function getRandomWeatherType(): number;
/**
 * No comment provided
 *
 * Hash: 0x7F4CE164D9A11DFE | Since: 1207 | API-Set: unknown
 */
export declare function getRandomWeatherTypeIndex(): number;
/**
 * Only 0 and 1 are valid for p0, higher values causes the native to return 2.
 *
 * Hash: 0x1B065A2BF7953815 | Since: 1207 | API-Set: unknown
 */
export declare function getStatusOfSavegameOperation(): number;
/**
 * No comment provided
 *
 * Hash: 0xF216F74101968DB0 | Since: 1207 | API-Set: unknown
 */
export declare function getStringFromBool(value: boolean): string;
/**
 * No comment provided
 *
 * Hash: 0x2B6846401D68E563 | Since: 1207 | API-Set: unknown
 */
export declare function getStringFromFloat(value: number, digits: number): string;
/**
 * Returns a string in the following format: <<%.4f,%.4f,%.4f>>
 *
 * Hash: 0x6C4DBF553885F9EB | Since: 1207 | API-Set: unknown
 */
export declare function getStringFromVector(pos: Vector3): string;
/**
 * No comment provided
 *
 * Hash: 0xB98B78C3768AF6E0 | Since: 1207 | API-Set: unknown
 */
export declare function getTemperatureAtCoords(pos: Vector3): number;
/**
 * No comment provided
 *
 * Hash: 0xE578C8AE173719B3 | Since: 1207 | API-Set: unknown
 */
export declare function getVehicleFromIndexedItem(item: number): number;
/**
 * No comment provided
 *
 * Hash: 0xF18AF483DF70BBDE | Since: 1207 | API-Set: unknown
 */
export declare function getVolumeFromIndexedItem(item: number): number;
/**
 * Note: the buffer should be exactly 32 bytes long
 *
 * Hash: 0xCF11C0CEB40C401B | Since: 1207 | API-Set: unknown
 */
export declare function intToString(value: number, format: string): string;
/**
 * No comment provided
 *
 * Hash: 0x80E9C316EF84DD81 | Since: 1207 | API-Set: unknown
 */
export declare function isAnyBitFlagSet(): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xFEC1D4B5C82C176F | Since: 1207 | API-Set: unknown
 */
export declare function isBaseACoverPoint(handle: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x716F17F8A0419F95 | Since: 1207 | API-Set: unknown
 */
export declare function isBaseAPersistentCharacter(handle: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8F4F050054005C27 | Since: 1207 | API-Set: unknown
 */
export declare function isBitFlagSet(flag: number): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xACB7E1418A8B6E32 | Since: 1207 | API-Set: unknown
 */
export declare function isGlobalBlockValid(index: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF236C84C6ADFCB2F | Since: 1207 | API-Set: unknown
 */
export declare function isMissionCreatorActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5170DDA6D63ACAAA | Since: 1207 | API-Set: unknown
 */
export declare function isPedDecomposed(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x36040772DF5E59A0 | Since: 1355 | API-Set: unknown
 */
export declare function isPlayerOwningStandaloneSp(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x48E4D50F87A96AA5 | Since: 1207 | API-Set: unknown
 */
export declare function lootTablesGetInfo(ped: number | IPed, lootTableKey: number | string): any;
/**
 * p0 must be < 2
 *
 * Hash: 0x279B0696DA4657EB | Since: 1207 | API-Set: unknown
 */
export declare function queueSavegameOperation(): boolean;
/**
 * Reads the passed value as floating point value and returns it.
 * Example: _READ_INT_AS_FLOAT(0x3F800000) returns 1.0f because 0x3F800000 is the hexadecimal representation of 1.0f.
 *
 * Hash: 0xD2C9126410DFA1B2 | Since: 1207 | API-Set: unknown
 */
export declare function readIntAsFloat(value: number): number;
/**
 * No comment provided
 *
 * Hash: 0xBD090F5B1DB82189 | Since: 1207 | API-Set: unknown
 */
export declare function removePopMultiplierAreaForVolume(volume: number): void;
/**
 * No comment provided
 *
 * Hash: 0x54EC7B6BC72BAD69 | Since: 1207 | API-Set: unknown
 */
export declare function resetDispatchMaxSpawnDistance(): void;
/**
 * No comment provided
 *
 * Hash: 0x96498D922D8D0D0A | Since: 1207 | API-Set: unknown
 */
export declare function resetDispatchMinSpawnDistance(): void;
/**
 * Used in CAIConditionAmbientAIMemoryReactionsEnabled
 *
 * Hash: 0x6AC4AF46A6B8DFB2 | Since: 1207 | API-Set: unknown
 */
export declare function setAiMemoryReactionsEnabled(enabled: boolean): void;
/**
 * Similar to SET_BIT but specifically designed for large (>32 flags) bit flag sets.
 * The flags are stored in an int array where each int has the ability to hold 32 flags.
 * Flags 0-31 would be stored in the first int, flags 32-63 in the second int, etc.
 *
 * Hash: 0xE84AAC1B22A73E99 | Since: 1207 | API-Set: unknown
 */
export declare function setBitFlag(flag: number): any;
/**
 * No comment provided
 *
 * Hash: 0x89314FB3463E28DE | Since: 1207 | API-Set: unknown
 */
export declare function setDispatchMaxSpawnDistance(maxSpawnDistance: number): void;
/**
 * No comment provided
 *
 * Hash: 0x27A1B170AA8AF84C | Since: 1207 | API-Set: unknown
 */
export declare function setDispatchMinSpawnDistance(minSpawnDistance: number): void;
/**
 * Note: this native was added in build 1232.56
 *
 * Hash: 0x550F05CFFBD63C8C | Since: 1232 | API-Set: unknown
 */
export declare function setGameLogicPaused(): void;
/**
 * No comment provided
 *
 * Hash: 0xE97240065406CB80 | Since: 1207 | API-Set: unknown
 */
export declare function setGlobalBlockIsLoaded(index: number, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x9617B6E5F6537B63 | Since: 1207 | API-Set: unknown
 */
export declare function setIncidentUnk(incidentId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9B47971234169990 | Since: 1207 | API-Set: unknown
 */
export declare function setLootPeltSatchelItem(ped: number | IPed, item: any): void;
/**
 * No comment provided
 *
 * Hash: 0xBE83CAE8ED77A94F | Since: 1207 | API-Set: unknown
 */
export declare function setOverrideWeather(weatherType: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xF6BEE7E80EC5CA40 | Since: 1207 | API-Set: unknown
 */
export declare function setSnowLevel(level: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2C6A07AF9AEDABD8 | Since: 1207 | API-Set: unknown
 */
export declare function setWeatherType2(weatherType: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xD74ACDF7DB8114AF | Since: 1207 | API-Set: unknown
 */
export declare function setWeatherTypeFrozen(toggle: boolean): void;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/weather/weather_variations.lua
 *
 * Hash: 0x3373779BAF7CAF48 | Since: 1207 | API-Set: unknown
 */
export declare function setWeatherVariation(): [string, string];
/**
 * No comment provided
 *
 * Hash: 0x0177CF20345F44DD | Since: 1207 | API-Set: unknown
 */
export declare function shouldUse24HourClock(): boolean;
/**
 * Same as SHOULD_USE_METRIC_MEASUREMENTS
 *
 * Hash: 0x58BCDC75BA52110A | Since: 1207 | API-Set: unknown
 */
export declare function shouldUseMetricMeasurements2(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFF4AAF3275BAAB4F | Since: 1207 | API-Set: unknown
 */
export declare function shouldUseMetricTemperature(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8F24157FEDB85EA2 | Since: 1207 | API-Set: unknown
 */
export declare function shouldUseMetricWeight(): boolean;
/**
 * Not officially named
 * , Counts the number of segments in a string that are separated by specified delimiter characters, ignoring consecutive delimiters.
 *
 * Hash: 0x94E8CA3DEE952789 | Since: 1207 | API-Set: unknown
 */
export declare function stringSplitAndCountSegments(): [number, string, string];
