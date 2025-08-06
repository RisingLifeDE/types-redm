import { Vector3, Entity, Ped, Player, Vehicle, Object } from '@risinglife/fivem-shared';
/**
 * Creates an audio submix with the specified name, or gets the existing audio submix by that name.
 *
 * Hash: 0x658D2BC8 | Since: client
 */
export function createAudioSubmix() {
    return CreateAudioSubmix();
}
/**
 * Removes vehicle xenon lights custom RGB color.
 *
 * Hash: 0x2867ED8C | Since: client
 */
export function clearVehicleXenonLightsCustomColor(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    ClearVehicleXenonLightsCustomColor(_vehicle);
}
/**
 * Cancels the currently executing event.
 *
 * Hash: 0xFA29D35D | Since: shared
 */
export function cancelEvent() {
    CancelEvent();
}
/**
 * Destroys a DUI browser.
 *
 * Hash: 0xA085CB10 | Since: client
 */
export function destroyDui(duiObject) {
    DestroyDui(duiObject);
}
/**
 * No comment provided
 *
 * Hash: 0x32CA01C3 | Since: client
 */
export function addTextEntry() {
    return AddTextEntry();
}
/**
 * Adds the given model name hash to the list of valid models for the player ped's parachute pack.
 *
 * Hash: 0x2E86DEA5 | Since: client
 */
export function addAuthorizedParachutePackModel(modelNameHash) {
    AddAuthorizedParachutePackModel(modelNameHash);
}
/**
 * Commits the backing pixels to the specified runtime texture.
 *
 * Hash: 0x19D81F4E | Since: client
 */
export function commitRuntimeTexture(tex) {
    CommitRuntimeTexture(tex);
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
 * Hash: 0xAB7F7241 | Since: shared
 */
export function addConvarChangeListener(handler) {
    return AddConvarChangeListener(handler);
}
/**
 * Activates built-in timecycle editing tool.
 *
 * Hash: 0xEEB9B76A | Since: client
 */
export function activateTimecycleEditor() {
    ActivateTimecycleEditor();
}
/**
 * Loads a minimap overlay from a GFx file in the current resource.
 *
 * Hash: 0xED0935B5 | Since: client
 */
export function addMinimapOverlayWithDepth(depth) {
    return AddMinimapOverlayWithDepth(depth);
}
/**
 * No comment provided
 *
 * Hash: 0x1E86F206 | Since: shared
 */
export function deleteFunctionReference() {
    return DeleteFunctionReference();
}
/**
 * Resets the screen's draw-origin which was changed by the function [`SET_DRAW_ORIGIN`](#\_0xE10198D5) back to `x=0, y=0`. See [`SET_DRAW_ORIGIN`](#\_0xE10198D5) for further information.
 *
 * Hash: 0xDD76B263 | Since: client
 */
export function clearDrawOrigin() {
    ClearDrawOrigin();
}
/**
 * Creates a blank runtime texture.
 *
 * Hash: 0xFEC3766D | Since: client
 */
export function createRuntimeTexture(txd, width, height) {
    return CreateRuntimeTexture(txd, width, height);
}
/**
 * Creates a runtime texture from a DUI handle.
 *
 * Hash: 0xB135472B | Since: client
 */
export function createRuntimeTextureFromDuiHandle(txd) {
    return CreateRuntimeTextureFromDuiHandle(txd);
}
/**
 * Creates a runtime texture from the specified file in the current resource or a base64 data URL.
 *
 * Hash: 0x786D8BC3 | Since: client
 */
export function createRuntimeTextureFromImage(txd) {
    return CreateRuntimeTextureFromImage(txd);
}
/**
 * No comment provided
 *
 * Hash: 0x289DA860 | Since: client
 */
export function addTextEntryByHash(entryKey) {
    if (typeof entryKey === 'string')
        entryKey = game.getHashKey(entryKey);
    return AddTextEntryByHash(entryKey);
}
/**
 * Adds the given model name hash to the list of valid models for the player ped's parachute.
 *
 * Hash: 0x8AC7AE9 | Since: client
 */
export function addAuthorizedParachuteModel(modelNameHash) {
    AddAuthorizedParachuteModel(modelNameHash);
}
/**
 * Loads a minimap overlay from a GFx file in the current resource.
 *
 * If you need to control the depth of overlay use [`ADD_MINIMAP_OVERLAY_WITH_DEPTH`](#\_0xED0935B5).
 *
 * Hash: 0x4AFD2499 | Since: client
 */
export function addMinimapOverlay() {
    return AddMinimapOverlay();
}
/**
 * Adds an output for the specified audio submix.
 *
 * Hash: 0xAC6E290D | Since: client
 */
export function addAudioSubmixOutput(submixId, outputSubmixId) {
    AddAudioSubmixOutput(submixId, outputSubmixId);
}
/**
 * Create a clean timecycle modifier. See [`SET_TIMECYCLE_MODIFIER_VAR`](#\_0x6E0A422B) to add variables.
 *
 * Hash: 0x70FA2AFA | Since: client
 */
export function createTimecycleModifier() {
    return CreateTimecycleModifier();
}
/**
 * No comment provided
 *
 * Hash: 0x54D636B3 | Since: client
 */
export function cloneTimecycleModifier() {
    return CloneTimecycleModifier();
}
/**
 * Experimental natives, please do not use in a live environment.
 *
 * Hash: 0xA66F8F75 | Since: client
 */
export function addReplaceTexture() {
    return AddReplaceTexture();
}
/**
 * No comment provided
 *
 * Hash: 0x3422291C | Since: client
 */
export function applyWeatherCycles(numEntries, msPerCycle) {
    return ApplyWeatherCycles(numEntries, msPerCycle);
}
/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 *
 * Hash: 0x4C89C0ED | Since: client
 */
export function callMinimapScaleformFunction(miniMap) {
    return CallMinimapScaleformFunction(miniMap);
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
 * Hash: 0x5BA35AAF | Since: shared
 */
export function addStateBagChangeHandler(handler) {
    return AddStateBagChangeHandler(handler);
}
/**
 * Creates a runtime texture dictionary with the specified name.
 * Example:
 *
 * ```lua
 * local txd = CreateRuntimeTxd('meow')
 * ```
 *
 * Hash: 0x1F3AC778 | Since: client
 */
export function createRuntimeTxd() {
    return CreateRuntimeTxd();
}
/**
 * Creates a DUI browser. This can be used to draw on a runtime texture using CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
 *
 * Hash: 0x23EAF899 | Since: client
 */
export function createDui(width, height) {
    return CreateDui(width, height);
}
/**
 * Break off vehicle wheel by index. The `leaveDebrisTrail` flag requires `putOnFire` to be true.
 *
 * Hash: 0xA274CADB | Since: client
 */
export function breakOffVehicleWheel(vehicle, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag, putOnFire) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    BreakOffVehicleWheel(_vehicle, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag, putOnFire);
}
/**
 * Creates a volume where water effects do not apply.
 * Useful for preventing water collisions from flooding areas underneath them.
 * This has no effect on waterquads, only water created from drawables and collisions.
 * Don't create volumes when your local ped is swimming (e.g. use IS_PED_SWIMMING in your scripts before you call this)
 *
 * Hash: 0xEB1C6DD | Since: client
 */
export function createDryVolume(xMin, yMin, zMin, xMax, yMax, zMax) {
    return CreateDryVolume(xMin, yMin, zMin, xMax, yMax, zMax);
}
/**
 * Internal function for ensuring an entity has a state bag.
 *
 * Hash: 0x3BB78F05 | Since: shared
 */
export function ensureEntityStateBag(entity) {
    const _entity = entity instanceof Entity ? entity.handle() : entity;
    EnsureEntityStateBag(_entity);
}
/**
 * Draw a glow sphere this frame. Up to 256 per single frame.
 *
 * Hash: 0xBD25EC89 | Since: client
 */
export function drawGlowSphere(pos, radius, colorR, colorG, colorB, intensity, invert, marker) {
    DrawGlowSphere(pos.x, pos.y, pos.z, radius, colorR, colorG, colorB, intensity, invert, marker);
}
/**
 * No comment provided
 *
 * Hash: 0xDEDA4E50 | Since: client
 */
export function endFindObject(findHandle) {
    EndFindObject(findHandle);
}
/**
 * Returns a list of door system entries: a door system hash (see [ADD_DOOR_TO_SYSTEM](#\_0x6F8838D03D1DC226)) and its object handle.
 *
 * The data returned adheres to the following layout:
 *
 * ```
 * [{doorHash1, doorHandle1}, ..., {doorHashN, doorHandleN}]
 * ```
 *
 * Hash: 0xF65BBA4B | Since: client
 */
export function doorSystemGetActive() {
    return DoorSystemGetActive();
}
/**
 * No comment provided
 *
 * Hash: 0x9227415A | Since: client
 */
export function endFindVehicle(findHandle) {
    EndFindVehicle(findHandle);
}
/**
 * Allows drawing advanced light effects, known as coronas, which support flares, volumetric lighting, and customizable glow properties.
 *
 * Hash: 0xFF44780E | Since: client
 */
export function drawCorona(pos, size, red, green, blue, alpha, intensity, zBias, dirX, dirY, dirZ, viewThreshold, innerAngle, outerAngle, flags) {
    DrawCorona(pos.x, pos.y, pos.z, size, red, green, blue, alpha, intensity, zBias, dirX, dirY, dirZ, viewThreshold, innerAngle, outerAngle, flags);
}
/**
 * No comment provided
 *
 * Hash: 0x77CC80DC | Since: shared
 */
export function doesTrainStopAtStations(train) {
    const _train = train instanceof Vehicle ? train.localId() : train;
    return DoesTrainStopAtStations(_train);
}
/**
 * Disables the specified `rawKeyIndex`, making it not trigger the regular `IS_RAW_KEY_*` natives.
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x8BCF0014 | Since: client
 */
export function disableRawKeyThisFrame(rawKeyIndex) {
    return DisableRawKeyThisFrame(rawKeyIndex);
}
/**
 * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
 *
 * Hash: 0x561C060B | Since: shared
 */
export function executeCommand() {
    return ExecuteCommand();
}
/**
 * No comment provided
 *
 * Hash: 0xABD19253 | Since: client
 */
export function drawPoly(x1, y1, z1, x2, y2, z2, x3, y3, z3, red, green, blue, alpha) {
    DrawPoly(x1, y1, z1, x2, y2, z2, x3, y3, z3, red, green, blue, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0x9615C2AD | Since: client
 */
export function endFindPed(findHandle) {
    EndFindPed(findHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x3C407D53 | Since: client
 */
export function endFindPickup(findHandle) {
    EndFindPickup(findHandle);
}
/**
 * Disables the game's world horizon lods rendering (see `farlods.#dd`).
 * Using the island hopper natives might also affect this state.
 *
 * Hash: 0xA9C92CDC | Since: client
 */
export function disableWorldhorizonRendering(state) {
    DisableWorldhorizonRendering(state);
}
/**
 * In compare to `0x31DC8D3F216D8509` return true if texture its created when `0x31DC8D3F216D8509` return true if you put there any id in valid range
 *
 * Hash: 0x8B25BC20 | Since: client
 */
export function doesTextureExist(textureId) {
    return DoesTextureExist(textureId);
}
/**
 * Like DRAW_RECT, but it's a line.
 *
 * Hash: 0xB856A90 | Since: client
 */
export function drawLine2d(x1, y1, x2, y2, width, r, g, b, a) {
    DrawLine2d(x1, y1, x2, y2, width, r, g, b, a);
}
/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity(While riding in a car as a passenger)
 *
 * Hash: 0x5C140555 | Since: client
 */
export function disableVehiclePassengerIdleCamera(state) {
    DisableVehiclePassengerIdleCamera(state);
}
/**
 * No comment provided
 *
 * Hash: 0xF4E2079D | Since: shared
 */
export function duplicateFunctionReference() {
    return DuplicateFunctionReference();
}
/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity.
 *
 * Hash: 0x3D5AB7F0 | Since: client
 */
export function disableIdleCamera(state) {
    DisableIdleCamera(state);
}
/**
 * No comment provided
 *
 * Hash: 0x237613B3 | Since: client
 */
export function doorSystemGetSize() {
    return DoorSystemGetSize();
}
/**
 * Checks whether the vehicle consumes fuel. The check is done based on petrol tank volume and vehicle type. Bicycles and vehicles with petrol tank volume equal to zero (only bicycles by default) do not use fuel. All other vehicles do.
 *
 * You can customize petrol tank volume using [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolTankVolume`.
 *
 * Hash: 0xEF30A696 | Since: client
 */
export function doesVehicleUseFuel(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return DoesVehicleUseFuel(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xB3426BCC | Since: client
 */
export function drawLine(x1, y1, z1, x2, y2, z2, red, green, blue, alpha) {
    DrawLine(x1, y1, z1, x2, y2, z2, red, green, blue, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0xCD4D9DD5 | Since: client
 */
export function drawBox(x1, y1, z1, x2, y2, z2, red, green, blue, alpha) {
    DrawBox(x1, y1, z1, x2, y2, z2, red, green, blue, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0x4E129DBF | Since: client
 */
export function findNextObject(findHandle) {
    return FindNextObject(findHandle);
}
/**
 * No comment provided
 *
 * Hash: 0xC53BB6D3 | Since: client
 */
export function doesTimecycleModifierHasVar() {
    return DoesTimecycleModifierHasVar();
}
/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 *
 * Hash: 0x8F57A89D | Since: client
 */
export function getCamMatrix(camera) {
    const _camera = camera instanceof Camera ? camera.handle() : camera;
    return GetCamMatrix(_camera);
}
/**
 * DRAW_RECT, but with a rotation. Seems to be broken.
 *
 * Hash: 0xEC37C168 | Since: client
 */
export function drawRectRotated(x, y, width, height, rotation, r, g, b, a) {
    DrawRectRotated(x, y, width, height, rotation, r, g, b, a);
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
 * Hash: 0xD7531645 | Since: client
 */
export function getAllVehicleModels() {
    return GetAllVehicleModels();
}
/**
 * No comment provided
 *
 * Hash: 0xFF60E63 | Since: client
 */
export function getCalmingQuadBounds(waterQuad) {
    return GetCalmingQuadBounds(waterQuad);
}
/**
 * Returns all rope handles. The data returned adheres to the following layout:
 *
 * ```
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 *
 * Hash: 0x760A2D67 | Since: client
 */
export function getAllRopes() {
    return GetAllRopes();
}
/**
 * No comment provided
 *
 * Hash: 0x15E55694 | Since: client
 */
export function findFirstVehicle() {
    return FindFirstVehicle();
}
/**
 * This native returns the index of a calming quad if the given point is inside its bounds.
 *
 * Hash: 0x870E8B40 | Since: client
 */
export function getCalmingQuadAtCoords(x, y) {
    return GetCalmingQuadAtCoords(x, y);
}
/**
 * No comment provided
 *
 * Hash: 0x8839120D | Since: client
 */
export function findNextVehicle(findHandle) {
    return FindNextVehicle(findHandle);
}
/**
 * This native is not implemented.
 *
 * Hash: 0x9D65CAD2 | Since: client
 */
export function experimentalSaveCloneCreate(entity) {
    const _entity = entity instanceof Entity ? entity.handle() : entity;
    return ExperimentalSaveCloneCreate(_entity);
}
/**
 * Get all track nodes and their track ids within the radius of the specified coordinates.
 *
 * Hash: 0x59FC24A7 | Since: client
 */
export function getClosestTrackNodes(position, radius) {
    return GetClosestTrackNodes(position, radius);
}
/**
 * A getter for [SET_AMBIENT_VEHICLE_RANGE_MULTIPLIER_THIS_FRAME](#\_0x90B6DA738A9A25DA).
 *
 * Hash: 0x667EC929 | Since: client
 */
export function getAmbientVehicleRangeMultiplier() {
    return GetAmbientVehicleRangeMultiplier();
}
/**
 * This native is not implemented.
 *
 * Hash: 0x38D19210 | Since: client
 */
export function experimentalSaveCloneSync(entity) {
    const _entity = entity instanceof Entity ? entity.handle() : entity;
    return ExperimentalSaveCloneSync(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xFB012961 | Since: client
 */
export function findFirstPed() {
    return FindFirstPed();
}
/**
 * This native is not implemented.
 *
 * Hash: 0x6BC189AC | Since: client
 */
export function experimentalLoadCloneSync(entity) {
    const _entity = entity instanceof Entity ? entity.handle() : entity;
    return ExperimentalLoadCloneSync(_entity);
}
/**
 * Returns all player indices for 'active' physical players known to the client.
 * The data returned adheres to the following layout:
 *
 * ```
 * [127, 42, 13, 37]
 * ```
 *
 * Hash: 0xCF143FB9 | Since: client
 */
export function getActivePlayers() {
    return GetActivePlayers();
}
/**
 * No comment provided
 *
 * Hash: 0xCEBFC42 | Since: client
 */
export function getCalmingQuadCount() {
    return GetCalmingQuadCount();
}
/**
 * Gets the current aspect ratio
 *
 * ```lua
 * local ratio = GetAspectRatio()
 * print(string.format("%.2f", ratio))
 * ```
 *
 * Hash: 0x2CA8F641 | Since: client
 */
export function getAspectRatio() {
    return GetAspectRatio();
}
/**
 * An internal function for converting a stack trace object to a string.
 *
 * Hash: 0xD70C3BCA | Since: shared
 */
export function formatStackTrace(traceData) {
    const _traceData = traceData instanceof Object ? traceData.handle() : traceData;
    return FormatStackTrace(_traceData);
}
/**
 * No comment provided
 *
 * Hash: 0xB0E3A058 | Since: client
 */
export function getCalmingQuadDampening(waterQuad) {
    return GetCalmingQuadDampening(waterQuad);
}
/**
 * This native is not implemented.
 *
 * Hash: 0xD2CB95A3 | Since: client
 */
export function experimentalLoadCloneCreate(objectId) {
    return ExperimentalLoadCloneCreate(objectId);
}
/**
 * No comment provided
 *
 * Hash: 0xFAA6CB5D | Since: client
 */
export function findFirstObject() {
    return FindFirstObject();
}
/**
 * No comment provided
 *
 * Hash: 0x3FF9D340 | Since: client
 */
export function findFirstPickup() {
    return FindFirstPickup();
}
/**
 * Returns all track junctions on the client
 * The data returned adheres to the following structure:
 *
 * ```
 * [1, 2, 4, 6, 69, 420]
 * ```
 *
 * Hash: 0x81A08523 | Since: client
 */
export function getAllTrackJunctions() {
    return GetAllTrackJunctions();
}
/**
 * Forces the game snow pass to render.
 *
 * Hash: 0xE6E16170 | Since: client
 */
export function forceSnowPass(enabled) {
    ForceSnowPass(enabled);
}
/**
 * No comment provided
 *
 * Hash: 0x4107EF0F | Since: client
 */
export function findNextPickup(findHandle) {
    return FindNextPickup(findHandle);
}
/**
 * A getter for [SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME](#\_0x0B919E1FB47CC4E0).
 *
 * Hash: 0xB550232D | Since: client
 */
export function getAmbientPedRangeMultiplier() {
    return GetAmbientPedRangeMultiplier();
}
/**
 * No comment provided
 *
 * Hash: 0xAB09B548 | Since: client
 */
export function findNextPed(findHandle) {
    return FindNextPed(findHandle);
}
/**
 * Returns the peer address of the remote game server that the user is currently connected to.
 *
 * Hash: 0xEA11BFBA | Since: client
 */
export function getCurrentServerEndpoint() {
    return GetCurrentServerEndpoint();
}
/**
 * No comment provided
 *
 * Hash: 0xC66CD90C | Since: client
 */
export function getFuelConsumptionState() {
    return GetFuelConsumptionState();
}
/**
 * No comment provided
 *
 * Hash: 0x5550BF9F | Since: client
 */
export function getFuelConsumptionRateMultiplier() {
    return GetFuelConsumptionRateMultiplier();
}
/**
 * No comment provided
 *
 * Hash: 0x12217D33 | Since: client
 */
export function getHudComponentSize(id) {
    return new Vector3(GetHudComponentSize(id));
}
/**
 * This will have floating point inaccuracy.
 *
 * Hash: 0x9E666D | Since: shared
 */
export function getConvarFloat(defaultValue) {
    return GetConvarFloat(defaultValue);
}
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Returns the memory address of an entity.
 *
 * This native is intended for singleplayer debugging, and may not be available during multiplayer.
 *
 * Hash: 0x9A3144BC | Since: client
 */
export function getEntityAddress(entity) {
    const _entity = entity instanceof Entity ? entity.handle() : entity;
    return GetEntityAddress(_entity);
}
/**
 * Returns the name of the currently executing resource.
 *
 * Hash: 0xE5E9EBBB | Since: shared
 */
export function getCurrentResourceName() {
    return GetCurrentResourceName();
}
/**
 * This native returns the currently used game's name.
 *
 * Hash: 0xACA18ECD | Since: client
 */
export function getCurrentGameName() {
    return GetCurrentGameName();
}
/**
 * Can be used to get a console variable casted back to `int` (an integer value).
 *
 * Hash: 0x935C0AB2 | Since: shared
 */
export function getConvarInt(default_) {
    return GetConvarInt(default_);
}
/**
 * Can be used to get a console variable casted back to `bool`.
 *
 * Hash: 0x7E8EBFE5 | Since: shared
 */
export function getConvarBool(defaultValue) {
    return GetConvarBool(defaultValue);
}
/**
 * Can be used to get a console variable of type `char*`, for example a string.
 *
 * Hash: 0x6CCD2564 | Since: shared
 */
export function getConvar() {
    return GetConvar();
}
/**
 * Gets the current screen resolution.
 *
 * ```lua
 * local  width, height = GetCurrentScreenResolution()
 * print(string.format("Current screen resolution: %dx%d", width, height))
 *
 * ```
 *
 * Hash: 0x337F0116 | Since: client
 */
export function getCurrentScreenResolution() {
    return GetCurrentScreenResolution();
}
/**
 * A getter for [SET_GLOBAL_PASSENGER_MASS_MULTIPLIER](#\_0x3422291C).
 *
 * Hash: 0x78951816 | Since: client
 */
export function getGlobalPassengerMassMultiplier() {
    return GetGlobalPassengerMassMultiplier();
}
/**
 * No comment provided
 *
 * Hash: 0xC68021B | Since: client
 */
export function getInteriorPortalEntityCount(interiorId, portalIndex) {
    return GetInteriorPortalEntityCount(interiorId, portalIndex);
}
/**
 * Returns the NUI window handle for a specified DUI browser object.
 *
 * Hash: 0x1655D41D | Since: client
 */
export function getDuiHandle(duiObject) {
    return GetDuiHandle(duiObject);
}
/**
 * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](#\_0x5BA35AAF).
 *
 * Hash: 0x4BDF1867 | Since: shared
 */
export function getEntityFromStateBagName() {
    return GetEntityFromStateBagName();
}
/**
 * ### Supported types
 *
 * *   \[1] : Peds (including animals) and players.
 * *   \[2] : Vehicles.
 * *   \[3] : Objects (props), doors, and projectiles.
 *
 * ### Coordinates need to be send unpacked (x,y,z)
 *
 * ```lua
 *
 * -- Define the allowed model hashes
 * local allowedModelHashes = { GetHashKey("p_crate03x"), GetHashKey("p_crate22x") }
 *
 * -- Get the player's current coordinates
 * local playerCoords = GetEntityCoords(PlayerPedId())
 *
 * -- Retrieve all entities of type Object (type 3) within a radius of 10.0 units
 * -- that match the allowed model hashes
 * -- and sort output entities by distance
 * local entities = GetEntitiesInRadius(playerCoords.x, playerCoords.y, playerCoords.z, 10.0, 3, true, allowedModelHashes)
 *
 * -- Iterate through the list of entities and print their ids
 * for i = 1, #entities do
 * local entity = entities[i]
 * print(entity)
 * end
 *
 * ```
 *
 * Hash: 0xDFFBA12F | Since: shared
 */
export function getEntitiesInRadius(pos, radius, entityType, sortByDistance, models) {
    const _models = models instanceof Object ? models.handle() : models;
    return GetEntitiesInRadius(pos.x, pos.y, pos.z, radius, entityType, sortByDistance, _models);
}
/**
 * Returns entity's archetype name, if available.
 *
 * Hash: 0x47B870F5 | Since: client
 */
export function getEntityArchetypeName(entity) {
    const _entity = entity instanceof Entity ? entity.handle() : entity;
    return GetEntityArchetypeName(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x9A0E1700 | Since: client
 */
export function getInteriorPortalEntityArchetype(interiorId, portalIndex, entityIndex) {
    return GetInteriorPortalEntityArchetype(interiorId, portalIndex, entityIndex);
}
/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 *
 * Hash: 0xCD949E20 | Since: client
 */
export function getHudComponentAlign(id) {
    return GetHudComponentAlign(id);
}
/**
 * No comment provided
 *
 * Hash: 0xF772BB2C | Since: client
 */
export function getInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex) {
    return GetInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xD05BB8B1 | Since: client
 */
export function getInteriorPortalCount(interiorId) {
    return GetInteriorPortalCount(interiorId);
}
/**
 * No comment provided
 *
 * Hash: 0x9F1C4383 | Since: shared
 */
export function getInstanceId() {
    return GetInstanceId();
}
/**
 * No comment provided
 *
 * Hash: 0xF9E795DD | Since: client
 */
export function getInteriorRoomExtents(interiorId, roomIndex) {
    return GetInteriorRoomExtents(interiorId, roomIndex);
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
 * Hash: 0xE8EAA18B | Since: shared
 */
export function getGameName() {
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
 * Hash: 0x2B9D4F50 | Since: shared
 */
export function getGamePool(pool) {
    return GetGamePool(pool);
}
/**
 * No comment provided
 *
 * Hash: 0xA91866BC | Since: client
 */
export function getHudComponentName(id) {
    return GetHudComponentName(id);
}
/**
 * No comment provided
 *
 * Hash: 0xA2737C2C | Since: client
 */
export function getInteriorRoomCount(interiorId) {
    return GetInteriorRoomCount(interiorId);
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
 * Hash: 0x804B9F7B | Since: shared
 */
export function getGameBuildNumber() {
    return GetGameBuildNumber();
}
/**
 * No comment provided
 *
 * Hash: 0x322B1192 | Since: client
 */
export function getInteriorEntitiesExtents(interiorId) {
    return GetInteriorEntitiesExtents(interiorId);
}
/**
 * An alternative to [GET_NUMBER_OF_PED_TEXTURE_VARIATIONS](#\_0x8F7156A3142A6BAD) that uses local collection indexing instead of the global one.
 *
 * Hash: 0xD2C15D7 | Since: client
 */
export function getNumberOfPedCollectionTextureVariations(ped, componentId, drawableId) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetNumberOfPedCollectionTextureVariations(_ped, componentId, drawableId);
}
/**
 * No comment provided
 *
 * Hash: 0xC74DA47C | Since: client
 */
export function getInteriorPortalFlag(interiorId, portalIndex) {
    return GetInteriorPortalFlag(interiorId, portalIndex);
}
/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection name instead of the global drawable index.
 *
 * Should be used together with [GET_PED_DRAWABLE_VARIATION_COLLECTION_LOCAL_INDEX](#\_0x9970386F).
 *
 * Hash: 0xBCE0AB63 | Since: client
 */
export function getPedDrawableVariationCollectionName(ped, componentId) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedDrawableVariationCollectionName(_ped, componentId);
}
/**
 * No comment provided
 *
 * Hash: 0x6B7AF743 | Since: client
 */
export function getInteriorRoomFlag(interiorId, roomIndex) {
    return GetInteriorRoomFlag(interiorId, roomIndex);
}
/**
 * A getter for [SET_PED_HEAD_OVERLAY](#\_0x48F44967FA05CC1E) and [\_SET_PED_HEAD_OVERLAY_COLOR](#\_0x497BF74A7B9CB952) natives.
 *
 * Hash: 0xC46EE605 | Since: client
 */
export function getPedHeadOverlayData(ped, index) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedHeadOverlayData(_ped, index);
}
/**
 * No comment provided
 *
 * Hash: 0x2CAFD5E9 | Since: client
 */
export function getNetworkWalkMode() {
    return GetNetworkWalkMode();
}
/**
 * No comment provided
 *
 * Hash: 0x9F9CEB63 | Since: client
 */
export function getInteriorPortalEntityRotation(interiorId, portalIndex, entityIndex) {
    return GetInteriorPortalEntityRotation(interiorId, portalIndex, entityIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xAA9C141D | Since: client
 */
export function getInteriorPortalRoomFrom(interiorId, portalIndex) {
    return GetInteriorPortalRoomFrom(interiorId, portalIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xBDBA226F | Since: client
 */
export function getNuiCursorPosition() {
    return GetNuiCursorPosition();
}
/**
 * No comment provided
 *
 * Hash: 0x4D52FE5B | Since: shared
 */
export function getInvokingResource() {
    return GetInvokingResource();
}
/**
 * No comment provided
 *
 * Hash: 0x3F47F0E8 | Since: client
 */
export function getInteriorPortalRoomTo(interiorId, portalIndex) {
    return GetInteriorPortalRoomTo(interiorId, portalIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x77A435B0 | Since: client
 */
export function getInteriorPosition(interiorId) {
    return GetInteriorPosition(interiorId);
}
/**
 * No comment provided
 *
 * Hash: 0x9B7AB83C | Since: client
 */
export function getInteriorPortalEntityPosition(interiorId, portalIndex, entityIndex) {
    return GetInteriorPortalEntityPosition(interiorId, portalIndex, entityIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x9DA2E811 | Since: client
 */
export function getInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex) {
    return GetInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x5A039998 | Since: client
 */
export function getInteriorRotation(interiorId) {
    return GetInteriorRotation(interiorId);
}
/**
 * No comment provided
 *
 * Hash: 0xE0EE05F8 | Since: client
 */
export function getInteriorRoomIndexByHash(interiorId, roomHash) {
    return GetInteriorRoomIndexByHash(interiorId, roomHash);
}
/**
 * No comment provided
 *
 * Hash: 0x11755DF2 | Since: client
 */
export function getInteriorRoomName(interiorId, roomIndex) {
    return GetInteriorRoomName(interiorId, roomIndex);
}
/**
 * An analogue of [GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS](#\_0x27561561732A7842) that returns number of drawable variations inside a single collection instead of the total number across all collections.
 *
 * Hash: 0x310D0271 | Since: client
 */
export function getNumberOfPedCollectionDrawableVariations(ped, componentId) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetNumberOfPedCollectionDrawableVariations(_ped, componentId);
}
/**
 * Get the minimap type:
 *
 * ```
 * 0 = Off,
 * 1 = Regular,
 * 2 = Expanded,
 * 3 = Simple,
 * ```
 *
 * Hash: 0xA6FF71C9 | Since: client
 */
export function getMinimapType() {
    return GetMinimapType();
}
/**
 * An analogue of [GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS](#\_0x5FAF9754E789FB47) that returns number of prop variations inside a single collection instead of the total number across all collections.
 *
 * Hash: 0x3B6A13E1 | Since: client
 */
export function getNumberOfPedCollectionPropDrawableVariations(ped, anchorPoint) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetNumberOfPedCollectionPropDrawableVariations(_ped, anchorPoint);
}
/**
 * An alternative to [GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS](#\_0xA6E7F1CEB523E171) that uses local collection indexing instead of the global one.
 *
 * Hash: 0x75CAF9CC | Since: client
 */
export function getNumberOfPedCollectionPropTextureVariations(ped, anchorPoint, propIndex) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetNumberOfPedCollectionPropTextureVariations(_ped, anchorPoint, propIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x82BA3F88 | Since: client
 */
export function getInteriorRoomTimecycle(interiorId, roomIndex) {
    return GetInteriorRoomTimecycle(interiorId, roomIndex);
}
/**
 * A getter for [SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xEAE6DCC7EEE3DB1D).
 *
 * Hash: 0xFF72DF84 | Since: client
 */
export function getParkedVehicleDensityMultiplier() {
    return GetParkedVehicleDensityMultiplier();
}
/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B)) for the given global drawable ID. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 *
 * Hash: 0x94EB1FE4 | Since: client
 */
export function getPedCollectionLocalIndexFromDrawable(ped, componentId, drawableId) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedCollectionLocalIndexFromDrawable(_ped, componentId, drawableId);
}
/**
 * Returns the zoom level data by index from mapzoomdata.meta file.
 *
 * Hash: 0x1363A998 | Since: client
 */
export function getMapZoomDataLevel(index) {
    return GetMapZoomDataLevel(index);
}
/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER](#\_0xAE540335B4ABC4E2).
 *
 * Hash: 0x27E94EF8 | Since: client
 */
export function getPlayerMeleeWeaponDefenseModifier(playerId) {
    const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
    return GetPlayerMeleeWeaponDefenseModifier(_playerId);
}
/**
 * Returns name of collection under given index for the given Ped.
 *
 * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
 *
 * `GET_PED_COLLECTION_NAME` can be used together with [GET_PED_COLLECTIONS_COUNT](#\_0x45946359) to list all collections attached to Ped.
 *
 * Hash: 0xFED5D83A | Since: client
 */
export function getPedCollectionName(ped, index) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedCollectionName(_ped, index);
}
/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17)) for the given global prop index. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 *
 * Hash: 0xFBDB885F | Since: client
 */
export function getPedCollectionLocalIndexFromProp(ped, anchorPoint, propIndex) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedCollectionLocalIndexFromProp(_ped, anchorPoint, propIndex);
}
/**
 * A getter for [\_SET_PED_FACE_FEATURE](#\_0x71A5C1DBA060049E). Returns 0.0 if fails to get.
 *
 * Hash: 0xBA352ADD | Since: client
 */
export function getPedFaceFeature(ped, index) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedFaceFeature(_ped, index);
}
/**
 * Returns the world position the pointer is hovering on the pause map.
 *
 * Hash: 0xE5AF7A82 | Since: client
 */
export function getPauseMapPointerWorldPosition() {
    return new Vector3(GetPauseMapPointerWorldPosition());
}
/**
 * No comment provided
 *
 * Hash: 0x863F27B | Since: shared
 */
export function getNumResources() {
    return GetNumResources();
}
/**
 * No comment provided
 *
 * Hash: 0x4D97BCC7 | Since: client
 */
export function getPlayerServerId(player) {
    const _player = player instanceof Player ? player.localId() : player;
    return GetPlayerServerId(_player);
}
/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 *
 * Hash: 0x776E864 | Since: shared
 */
export function getNumResourceMetadata() {
    return GetNumResourceMetadata();
}
/**
 * A getter for [\_SET_PED_EYE_COLOR](#\_0x50B56988B170AFDF). Returns -1 if fails to get.
 *
 * Hash: 0xA47B860F | Since: client
 */
export function getPedEyeColor(ped) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedEyeColor(_ped);
}
/**
 * Returns a list of decorations applied to a ped.
 *
 * The data returned adheres to the following layout:
 *
 * ```
 * [ [ collectionHash1, overlayHash1 ], ..., [c ollectionHashN, overlayHashN ] ]
 * ```
 *
 * This command will return undefined data if invoked on a remote player ped.
 *
 * Hash: 0x7CCE1163 | Since: client
 */
export function getPedDecorations(ped) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedDecorations(_ped);
}
/**
 * A getter for [SET_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x95E3D6257B166CF2).
 *
 * Hash: 0xF5A904F9 | Since: client
 */
export function getPedDensityMultiplier() {
    return GetPedDensityMultiplier();
}
/**
 * No comment provided
 *
 * Hash: 0x69E81E3D | Since: client
 */
export function getPedMovementClipset(ped) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedMovementClipset(_ped);
}
/**
 * Returns number of variation collections available for the given Ped.
 *
 * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
 *
 * `GET_PED_COLLECTIONS_COUNT` can be used together with [GET_PED_COLLECTION_NAME](#\_0xFED5D83A) to list all collections attached to Ped.
 *
 * Hash: 0x45946359 | Since: client
 */
export function getPedCollectionsCount(ped) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedCollectionsCount(_ped);
}
/**
 * Gets a ped model's personality type.
 *
 * Hash: 0xFE08CAD6 | Since: client
 */
export function getPedModelPersonality(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = game.getHashKey(modelHash);
    return GetPedModelPersonality(modelHash);
}
/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 *
 * Hash: 0x964BAB1D | Since: shared
 */
export function getResourceMetadata(index) {
    return GetResourceMetadata(index);
}
/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection local drawable index (inside [GET_PED_DRAWABLE_VARIATION_COLLECTION_NAME](#\_0xBCE0AB63) collection) instead of the global drawable index.
 *
 * Hash: 0x9970386F | Since: client
 */
export function getPedDrawableVariationCollectionLocalIndex(ped, componentId) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedDrawableVariationCollectionLocalIndex(_ped, componentId);
}
/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 *
 * Hash: 0xA3EA2893 | Since: client
 */
export function getPedHairColor(ped) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedHairColor(_ped);
}
/**
 * Gets collection name for the given global drawable ID. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) is used to get collection and local index (inside the given collection) of the drawable. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 *
 * Hash: 0xD6BBA48B | Since: client
 */
export function getPedCollectionNameFromDrawable(ped, componentId, drawableId) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedCollectionNameFromDrawable(_ped, componentId, drawableId);
}
/**
 * Gets the width of the specified runtime texture.
 *
 * Hash: 0xC9F55558 | Since: client
 */
export function getRuntimeTextureWidth(tex) {
    return GetRuntimeTextureWidth(tex);
}
/**
 * Returns global drawable index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Drawables are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
 *
 * If all drawables from all collections are placed into one continuous array - the global index will correspond to the index of drawable in such array. Local index is index of drawable in this array relative to the start of the given collection.
 *
 * Hash: 0x280F1FC3 | Since: client
 */
export function getPedDrawableGlobalIndexFromCollection(ped, componentId, drawableId) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedDrawableGlobalIndexFromCollection(_ped, componentId, drawableId);
}
/**
 * Returns global prop index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Props are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
 *
 * If all props from all collections are placed into one continuous array - the global index will correspond to the index of the prop in such array. Local index is index of the prop in this array relative to the start of the given collection.
 *
 * Hash: 0x2CB45CDC | Since: client
 */
export function getPedPropGlobalIndexFromCollection(ped, anchorPoint, propIndex) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedPropGlobalIndexFromCollection(_ped, anchorPoint, propIndex);
}
/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 *
 * Hash: 0x4B087305 | Since: client
 */
export function getPedHairHighlightColor(ped) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedHairHighlightColor(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xD014AB79 | Since: client
 */
export function getPlayerMaxStamina(playerId) {
    const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
    return GetPlayerMaxStamina(_playerId);
}
/**
 * Unlike [GET_PLAYER_INVINCIBLE](#\_0xB721981B2B939E07) this native gets both [SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED](#\_0x6BC97F4F4BB3C04B) and [SET_PLAYER_INVINCIBLE](#\_0x239528EACDC3E7DE) invincibility state.
 *
 * Hash: 0xF2E3912B | Since: client
 */
export function getPlayerInvincible2(player) {
    const _player = player instanceof Player ? player.localId() : player;
    return GetPlayerInvincible2(_player);
}
/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection local prop index (inside [GET_PED_PROP_COLLECTION_NAME](#\_0x6B5653E4) collection) instead of the global prop index.
 *
 * Hash: 0xCD420AD1 | Since: client
 */
export function getPedPropCollectionLocalIndex(ped, anchorPoint) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedPropCollectionLocalIndex(_ped, anchorPoint);
}
/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection name instead of the global drawable index.
 *
 * Should be used together with [GET_PED_PROP_COLLECTION_LOCAL_INDEX](#\_0xCD420AD1).
 *
 * Hash: 0x6B5653E4 | Since: client
 */
export function getPedPropCollectionName(ped, anchorPoint) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedPropCollectionName(_ped, anchorPoint);
}
/**
 * Returns the bone matrix of the specified bone id. usefull for entity attachment
 *
 * Hash: 0x9C5E7C9C | Since: client
 */
export function getPedBoneMatrix(ped, boneId) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedBoneMatrix(_ped, boneId);
}
/**
 * Gets collection name for the given global prop index. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) is used to get collection and local index (inside the given collection) of the prop. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 *
 * Hash: 0x8ED0C17 | Since: client
 */
export function getPedCollectionNameFromProp(ped, anchorPoint, propIndex) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedCollectionNameFromProp(_ped, anchorPoint, propIndex);
}
/**
 * A getter for [SET_PED_SWEAT](#\_0x27B0405F59637D1F).
 *
 * Hash: 0x44B91E94 | Since: client
 */
export function getPedSweat(ped) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetPedSweat(_ped);
}
/**
 * Gets the trains desired speed.
 *
 * Hash: 0xA4921EF5 | Since: shared
 */
export function getTrainCruiseSpeed(train) {
    const _train = train instanceof Vehicle ? train.localId() : train;
    return GetTrainCruiseSpeed(_train);
}
/**
 * No comment provided
 *
 * Hash: 0xC62AAC98 | Since: client
 */
export function getVehicleAlarmTimeLeft(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleAlarmTimeLeft(_vehicle);
}
/**
 * On the server this will return the players source, on the client it will return the player handle.
 *
 * Hash: 0xA56135E0 | Since: shared
 */
export function getPlayerFromStateBagName() {
    return GetPlayerFromStateBagName();
}
/**
 * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
 *
 * Hash: 0x2A3D7CDA | Since: shared
 */
export function getPlayerWeaponDamageModifier(playerId) {
    const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
    return GetPlayerWeaponDamageModifier(_playerId);
}
/**
 * A getter for [SET_PLAYER_VEHICLE_DEFENSE_MODIFIER](#\_0x4C60E6EFDAFF2462).
 *
 * Hash: 0x8326E7CD | Since: client
 */
export function getPlayerVehicleDefenseModifier(playerId) {
    const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
    return GetPlayerVehicleDefenseModifier(_playerId);
}
/**
 * Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.
 *
 * Hash: 0xCA0A085F | Since: client
 */
export function getRuntimeTexturePitch(tex) {
    return GetRuntimeTexturePitch(tex);
}
/**
 * Gets a local client's Player ID from its server ID counterpart, assuming the passed `serverId` exists on the client.
 *
 * If no matching client is found, or an invalid value is passed over as the `serverId` native's parameter, the native result will be `-1`.
 *
 * It's worth noting that this native method can only retrieve information about clients that are culled to the connected client.
 *
 * Hash: 0x344EA166 | Since: client
 */
export function getPlayerFromServerId(serverId) {
    return GetPlayerFromServerId(serverId);
}
/**
 * Returns the value of a state bag key.
 *
 * Hash: 0x637F4C75 | Since: shared
 */
export function getStateBagValue() {
    return GetStateBagValue();
}
/**
 * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
 *
 * Hash: 0xF1543251 | Since: shared
 */
export function getPlayerWeaponDefenseModifier(playerId) {
    const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
    return GetPlayerWeaponDefenseModifier(_playerId);
}
/**
 * A getter for [SET_PLAYER_VEHICLE_DAMAGE_MODIFIER](#\_0xA50E117CDDF82F0C).
 *
 * Hash: 0x78F27B1F | Since: client
 */
export function getPlayerVehicleDamageModifier(playerId) {
    const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
    return GetPlayerVehicleDamageModifier(_playerId);
}
/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
 *
 * Hash: 0x8689A825 | Since: shared
 */
export function getPlayerMeleeWeaponDamageModifier(playerId) {
    const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
    return GetPlayerMeleeWeaponDamageModifier(_playerId);
}
/**
 * No comment provided
 *
 * Hash: 0x1DAD4583 | Since: client
 */
export function getVehicleClutch(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleClutch(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xE415EC5C | Since: client
 */
export function getPlayerStamina(playerId) {
    const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
    return GetPlayerStamina(_playerId);
}
/**
 * Returns the current state of the specified resource.
 *
 * Hash: 0x4039B485 | Since: shared
 */
export function getResourceState() {
    return GetResourceState();
}
/**
 * Gets the height of the specified runtime texture.
 *
 * Hash: 0x3574AACE | Since: client
 */
export function getRuntimeTextureHeight(tex) {
    return GetRuntimeTextureHeight(tex);
}
/**
 * ```cpp
 * enum eRopeFlags
 * {
 * DrawShadowEnabled = 2,
 * Breakable = 4,
 * RopeUnwindingFront = 8,
 * RopeWinding = 32
 * }
 * ```
 *
 * Hash: 0xA80FFE99 | Since: client
 */
export function getRopeFlags(rope) {
    return GetRopeFlags(rope);
}
/**
 * No comment provided
 *
 * Hash: 0x66D70EA3 | Since: client
 */
export function getRopeLengthChangeRate(rope) {
    return GetRopeLengthChangeRate(rope);
}
/**
 * No comment provided
 *
 * Hash: 0xE7B12B54 | Since: client
 */
export function getVehicleCurrentRpm(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleCurrentRpm(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x387246B7 | Since: shared
 */
export function getResourceByFindIndex(findIndex) {
    return GetResourceByFindIndex(findIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x9AAD420E | Since: client
 */
export function getVehicleDashboardSpeed(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleDashboardSpeed(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x78D864C7 | Since: shared
 */
export function getStateBagKeys() {
    return GetStateBagKeys();
}
/**
 * A getter for [SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xB3B3359379FE77D3).
 * Same as vehicle density multiplier.
 *
 * Hash: 0x7B0D00C5 | Since: client
 */
export function getRandomVehicleDensityMultiplier() {
    return GetRandomVehicleDensityMultiplier();
}
/**
 * Returns all commands registered by the specified resource.
 * The data returned adheres to the following layout:
 *
 * ```
 * [
 * {
 * "name": "cmdlist",
 * "resource": "example_resource",
 * "arity" = -1,
 * },
 * {
 * "name": "command1"
 * "resource": "example_resource2",
 * "arity" = -1,
 * }
 * ]
 * ```
 *
 * Hash: 0x97628584 | Since: shared
 */
export function getResourceCommands() {
    return GetResourceCommands();
}
/**
 * No comment provided
 *
 * Hash: 0x5F4CD0E2 | Since: client
 */
export function getTimecycleModifierIndexByName() {
    return GetTimecycleModifierIndexByName();
}
/**
 * Returns the amount of variables available to be applied on timecycle modifiers.
 *
 * Hash: 0x838B34D8 | Since: client
 */
export function getTimecycleVarCount() {
    return GetTimecycleVarCount();
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
 * Hash: 0xD4BEF069 | Since: shared
 */
export function getRegisteredCommands() {
    return GetRegisteredCommands();
}
/**
 * Gets the door count for the specified train.
 *
 * Hash: 0x99974721 | Since: client
 */
export function getTrainDoorCount(train) {
    const _train = train instanceof Vehicle ? train.localId() : train;
    return GetTrainDoorCount(_train);
}
/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 *
 * Hash: 0x3B90238 | Since: client
 */
export function getTimecycleVarDefaultValueByIndex(varIndex) {
    return GetTimecycleVarDefaultValueByIndex(varIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xB4F4E566 | Since: client
 */
export function getVehicleCurrentGear(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleCurrentGear(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x60FB60FE | Since: client
 */
export function getTimecycleModifierVarCount() {
    return GetTimecycleModifierVarCount();
}
/**
 * No comment provided
 *
 * Hash: 0x2AB2E0F6 | Since: client
 */
export function getRopeUpdateOrder(rope) {
    return GetRopeUpdateOrder(rope);
}
/**
 * No comment provided
 *
 * Hash: 0xFE2A1D4D | Since: client
 */
export function getTimecycleModifierCount() {
    return GetTimecycleModifierCount();
}
/**
 * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
 *
 * Hash: 0x986B65FF | Since: shared
 */
export function getPlayerWeaponDefenseModifier2(playerId) {
    const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
    return GetPlayerWeaponDefenseModifier2(_playerId);
}
/**
 * No comment provided
 *
 * Hash: 0x28CB8608 | Since: client
 */
export function getTimecycleModifierNameByIndex(modifierIndex) {
    return GetTimecycleModifierNameByIndex(modifierIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xE874AB1D | Since: client
 */
export function getTimecycleModifierVarNameByIndex(modifierVarIndex) {
    return GetTimecycleModifierVarNameByIndex(modifierVarIndex);
}
/**
 * A getter for [SET_TIMECYCLE_MODIFIER_STRENGTH](#\_0x82E7FFCD5B2326B3).
 *
 * Hash: 0xBE54124A | Since: client
 */
export function getTimecycleModifierStrength() {
    return GetTimecycleModifierStrength();
}
/**
 * A getter for [SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x7A556143A1C03898).
 *
 * Hash: 0x77C598B2 | Since: client
 */
export function getScenarioPedDensityMultiplier() {
    return GetScenarioPedDensityMultiplier();
}
/**
 * Gets the speed the train is currently going.
 *
 * Hash: 0x428668B7 | Since: client
 */
export function getTrainSpeed(train) {
    const _train = train instanceof Vehicle ? train.localId() : train;
    return GetTrainSpeed(_train);
}
/**
 * No comment provided
 *
 * Hash: 0xF1D1D689 | Since: client
 */
export function getVehicleHighGear(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleHighGear(_vehicle);
}
/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 *
 * Hash: 0x83070354 | Since: client
 */
export function getVehicleIndicatorLights(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleIndicatorLights(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xF341E6CA | Since: client
 */
export function getRopeTimeMultiplier(rope) {
    return GetRopeTimeMultiplier(rope);
}
/**
 * No comment provided
 *
 * Hash: 0x9AA339D | Since: shared
 */
export function getTrainTrackIndex(train) {
    const _train = train instanceof Vehicle ? train.localId() : train;
    return GetTrainTrackIndex(_train);
}
/**
 * No comment provided
 *
 * Hash: 0xE015E854 | Since: client
 */
export function getTrainCurrentTrackNode(train) {
    const _train = train instanceof Vehicle ? train.localId() : train;
    return GetTrainCurrentTrackNode(_train);
}
/**
 * Returns the result of a shape test, also returning the material of any touched surface.
 *
 * When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.
 *
 * Unless the return value is 2, the other return values are undefined.
 *
 * Hash: 0x4301E10C | Since: client
 */
export function getShapeTestResultIncludingMaterial(shapeTestHandle) {
    return GetShapeTestResultIncludingMaterial(shapeTestHandle);
}
/**
 * No comment provided
 *
 * Hash: 0xA7109E12 | Since: client
 */
export function getTimecycleModifierVar() {
    return GetTimecycleModifierVar();
}
/**
 * No comment provided
 *
 * Hash: 0x34EE2BF3 | Since: client
 */
export function getTrackMaxSpeed(track) {
    return GetTrackMaxSpeed(track);
}
/**
 * Gets the coordinates of a specific track node.
 *
 * Hash: 0x1628548E | Since: client
 */
export function getTrackNodeCoords(trackIndex, trackNode) {
    return GetTrackNodeCoords(trackIndex, trackNode);
}
/**
 * No comment provided
 *
 * Hash: 0xBF482A5E | Since: client
 */
export function getTrackBrakingDistance(track) {
    return GetTrackBrakingDistance(track);
}
/**
 * No comment provided
 *
 * Hash: 0x3856D767 | Since: client
 */
export function getVehicleDashboardOilPressure() {
    return GetVehicleDashboardOilPressure();
}
/**
 * No comment provided
 *
 * Hash: 0x1F5996AA | Since: client
 */
export function getVehicleDashboardOilTemp() {
    return GetVehicleDashboardOilTemp();
}
/**
 * Gets the specified tracks node count.
 *
 * Hash: 0x896A0C11 | Since: client
 */
export function getTrackNodeCount(trackIndex) {
    return GetTrackNodeCount(trackIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x6B6ADAFA | Since: client
 */
export function getVehicleDashboardTemp() {
    return GetVehicleDashboardTemp();
}
/**
 * Gets a vehicle's multiplier used with a wheel's GET_VEHICLE_WHEEL_STEERING_ANGLE to determine the angle the wheel is rendered.
 *
 * Hash: 0x21C1DA8E | Since: client
 */
export function getVehicleDrawnWheelAngleMult(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleDrawnWheelAngleMult(_vehicle);
}
/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 *
 * Hash: 0xC6C55AAF | Since: client
 */
export function getTimecycleVarNameByIndex(varIndex) {
    return GetTimecycleVarNameByIndex(varIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xFABE67A9 | Since: client
 */
export function getVehicleDashboardVacuum() {
    return GetVehicleDashboardVacuum();
}
/**
 * No comment provided
 *
 * Hash: 0x81B50033 | Since: shared
 */
export function getTrainState(train) {
    const _train = train instanceof Vehicle ? train.localId() : train;
    return GetTrainState(_train);
}
/**
 * A getter for [SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x245A6883D966D537).
 *
 * Hash: 0xEF7C6538 | Since: client
 */
export function getVehicleDensityMultiplier() {
    return GetVehicleDensityMultiplier();
}
/**
 * Gets the ratio that a door is open for on a train.
 *
 * Hash: 0x40B16551 | Since: client
 */
export function getTrainDoorOpenRatio(train, doorIndex) {
    const _train = train instanceof Vehicle ? train.localId() : train;
    return GetTrainDoorOpenRatio(_train, doorIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xB48A1292 | Since: client
 */
export function getVehicleGravityAmount(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleGravityAmount(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xF4F495CB | Since: client
 */
export function getVehicleEngineTemperature(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleEngineTemperature(_vehicle);
}
/**
 * Gets whether the wheel is powered.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in GET_VEHICLE_WHEEL_FLAGS.
 *
 * Hash: 0x3CCF1B49 | Since: client
 */
export function getVehicleWheelIsPowered(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelIsPowered(_vehicle, wheelIndex);
}
/**
 * A getter for [SET_VEHICLE_CHEAT_POWER_INCREASE](#\_0xB59E4BD37AE292DB).
 *
 * Hash: 0xC3C93F28 | Since: client
 */
export function getVehicleCheatPowerIncrease(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleCheatPowerIncrease(_vehicle);
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
 * Hash: 0x137260D1 | Since: client
 */
export function getVehicleWheelieState(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelieState(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x5F739BB8 | Since: client
 */
export function getVehicleFuelLevel(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleFuelLevel(_vehicle);
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
 * Hash: 0x500FFE9D | Since: client
 */
export function getVehicleDashboardLights() {
    return GetVehicleDashboardLights();
}
/**
 * No comment provided
 *
 * Hash: 0xDFFABA2A | Since: client
 */
export function getVehicleDashboardBoost() {
    return GetVehicleDashboardBoost();
}
/**
 * Gets the direction the train is facing
 *
 * Hash: 0x8DAF79B6 | Since: shared
 */
export function getTrainDirection(train) {
    const _train = train instanceof Vehicle ? train.localId() : train;
    return GetTrainDirection(_train);
}
/**
 * No comment provided
 *
 * Hash: 0x954465DE | Since: client
 */
export function getVehicleSteeringScale(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleSteeringScale(_vehicle);
}
/**
 * Retrieves the current gear displayed on the dashboard of the vehicle the player is in, returned as a float. This value represents the gear shown in the instrument cluster, such as "R" (0.0) or positive values (e.g., 1.0, 2.0, etc.) for drive gears.
 *
 * Hash: 0x435C86F4 | Since: client
 */
export function getVehicleDashboardCurrentGear() {
    return GetVehicleDashboardCurrentGear();
}
/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 *
 * Hash: 0x27396C75 | Since: client
 */
export function getVehicleHandlingInt(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleHandlingInt(_vehicle);
}
/**
 * Gets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f when braking.
 *
 * Hash: 0x70FE2EFF | Since: client
 */
export function getVehicleWheelBrakePressure(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelBrakePressure(_vehicle, wheelIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x7E6E219C | Since: client
 */
export function getVehicleLightMultiplier(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleLightMultiplier(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xDDB298AE | Since: client
 */
export function getVehicleNextGear(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleNextGear(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x19B0B2CE | Since: client
 */
export function getVehicleDashboardFuel() {
    return GetVehicleDashboardFuel();
}
/**
 * No comment provided
 *
 * Hash: 0xF9716A11 | Since: client
 */
export function getVehicleDashboardRpm() {
    return GetVehicleDashboardRpm();
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
 * Hash: 0xDE73BC10 | Since: client
 */
export function getVehicleTypeRaw(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleTypeRaw(_vehicle);
}
/**
 * **Note**: Flags are not the same based on your `gamebuild`. Please see [here](https://docs.fivem.net/docs/game-references/vehicle-references/vehicle-flags) to see a complete list of all vehicle flags.
 *
 * Get vehicle.meta flag by index. Useful examples include `FLAG_LAW_ENFORCEMENT` (31), `FLAG_RICH_CAR` (36), `FLAG_IS_ELECTRIC` (43), `FLAG_IS_OFFROAD_VEHICLE` (48).
 *
 * Hash: 0xD85C9F57 | Since: client
 */
export function getVehicleHasFlag(vehicle, flagIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleHasFlag(_vehicle, flagIndex);
}
/**
 * Gets vehicles gear ratio on choosen gear.
 *
 * Hash: 0x82E794B7 | Since: client
 */
export function getVehicleGearRatio(vehicle, gear) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleGearRatio(_vehicle, gear);
}
/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 *
 * Hash: 0xFB341304 | Since: client
 */
export function getVehicleHandlingVector(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return new Vector3(GetVehicleHandlingVector(_vehicle));
}
/**
 * No comment provided
 *
 * Hash: 0x22EA3BD8 | Since: client
 */
export function getWaterQuadHasLimitedDepth(waterQuad) {
    return GetWaterQuadHasLimitedDepth(waterQuad);
}
/**
 * A getter for [MODIFY_VEHICLE_TOP_SPEED](#\_0x93A3996368C94158). Returns -1.0 if a modifier is not set.
 *
 * Hash: 0x998B7FEE | Since: client
 */
export function getVehicleTopSpeedModifier(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleTopSpeedModifier(_vehicle);
}
/**
 * Gets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x3BCFEE14 | Since: client
 */
export function getVehicleWheelTractionVectorLength(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelTractionVectorLength(_vehicle, wheelIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xA7F04022 | Since: client
 */
export function getVehicleWheelSurfaceMaterial(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelSurfaceMaterial(_vehicle, wheelIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x483B013C | Since: shared
 */
export function getVehicleHandbrake(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleHandbrake(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xFC7F8EF4 | Since: client
 */
export function getVehicleOilLevel(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleOilLevel(_vehicle);
}
/**
 * Returns the effective handling data of a vehicle as a floating-point value.
 * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 *
 * Hash: 0x642FC12F | Since: client
 */
export function getVehicleHandlingFloat(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleHandlingFloat(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xE02B51D7 | Since: client
 */
export function getVehicleTurboPressure(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleTurboPressure(_vehicle);
}
/**
 * Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 *
 * Hash: 0x4046B66 | Since: client
 */
export function getVehicleWheelSize(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelSize(_vehicle);
}
/**
 * This native returns the index of a wave quad if the given point is inside its bounds.
 *
 * Hash: 0x3F5A61A7 | Since: client
 */
export function getWaveQuadAtCoords(x, y) {
    return GetWaveQuadAtCoords(x, y);
}
/**
 * No comment provided
 *
 * Hash: 0xD1D07351 | Since: client
 */
export function getVehicleThrottleOffset(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleThrottleOffset(_vehicle);
}
/**
 * Gets the rotation speed of a wheel.
 * This is used internally to calcuate GET_VEHICLE_WHEEL_SPEED.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xEA1859E5 | Since: client
 */
export function getVehicleWheelRotationSpeed(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelRotationSpeed(_vehicle, wheelIndex);
}
/**
 * Gets steering angle of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xA0867448 | Since: client
 */
export function getVehicleWheelSteeringAngle(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelSteeringAngle(_vehicle, wheelIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xEDF4B0FC | Since: client
 */
export function getVehicleNumberOfWheels(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleNumberOfWheels(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x1DEDBD77 | Since: client
 */
export function getWaterQuadIsInvisible(waterQuad) {
    return GetWaterQuadIsInvisible(waterQuad);
}
/**
 * Gets the current suspension compression of a wheel.
 * Returns a positive value. 0 means the suspension is fully extended, the wheel is off the ground.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x2B48175B | Since: client
 */
export function getVehicleWheelSuspensionCompression(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelSuspensionCompression(_vehicle, wheelIndex);
}
/**
 * Gets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xD203287 | Since: client
 */
export function getVehicleWheelPower(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelPower(_vehicle, wheelIndex);
}
/**
 * A getter for [SET_WEAPON_ANIMATION_OVERRIDE](#\_0x1055AC3A667F09D9).
 *
 * Hash: 0x63ED2E7 | Since: client
 */
export function getWeaponAnimationOverride(ped) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return GetWeaponAnimationOverride(_ped);
}
/**
 * A getter for `CWeaponAccuracyModifier` in a weapon component.
 *
 * Hash: 0xC693E278 | Since: client
 */
export function getWeaponComponentAccuracyModifier(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = game.getHashKey(componentHash);
    return GetWeaponComponentAccuracyModifier(componentHash);
}
/**
 * No comment provided
 *
 * Hash: 0x54A677F5 | Since: client
 */
export function getVehicleWheelHealth(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelHealth(_vehicle, wheelIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xCEE21AB2 | Since: client
 */
export function getVehicleWheelRimColliderSize(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelRimColliderSize(_vehicle, wheelIndex);
}
/**
 * A getter for [SET_VEHICLE_XMAS_SNOW_FACTOR](#\_0x80CC4C9E).
 *
 * Hash: 0x16605B30 | Since: client
 */
export function getVehicleXmasSnowFactor() {
    return GetVehicleXmasSnowFactor();
}
/**
 * Returns vehicle xenon lights custom RGB color values. Do note this native doesn't return non-RGB colors that was set with [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07).
 *
 * Hash: 0xC715F730 | Since: client
 */
export function getVehicleXenonLightsCustomColor(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleXenonLightsCustomColor(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x1382FCEA | Since: shared
 */
export function getVehicleSteeringAngle(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleSteeringAngle(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x9250C76 | Since: client
 */
export function getWaveQuadCount() {
    return GetWaveQuadCount();
}
/**
 * No comment provided
 *
 * Hash: 0xE0BA9FE6 | Since: client
 */
export function getVehicleWheelTireColliderSize(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelTireColliderSize(_vehicle, wheelIndex);
}
/**
 * *level is defined as "z" in water.xml*
 *
 * Hash: 0x6523816B | Since: client
 */
export function getWaterQuadLevel(waterQuad) {
    return GetWaterQuadLevel(waterQuad);
}
/**
 * A getter for `ReticuleHash` in a weapon scope component.
 *
 * Hash: 0xF9AB9297 | Since: client
 */
export function getWeaponComponentReticuleHash(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = game.getHashKey(componentHash);
    return GetWeaponComponentReticuleHash(componentHash);
}
/**
 * No comment provided
 *
 * Hash: 0x2EA4AFFE | Since: client
 */
export function getVehicleWheelYRotation(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelYRotation(_vehicle, wheelIndex);
}
/**
 * A getter for `CameraHash` in a weapon scope component.
 *
 * Hash: 0xACB7E68F | Since: client
 */
export function getWeaponComponentCameraHash(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = game.getHashKey(componentHash);
    return GetWeaponComponentCameraHash(componentHash);
}
/**
 * No comment provided
 *
 * Hash: 0x14088095 | Since: client
 */
export function getWaterQuadAlpha(waterQuad) {
    return GetWaterQuadAlpha(waterQuad);
}
/**
 * No comment provided
 *
 * Hash: 0xEF65929C | Since: client
 */
export function getVehicleWheelTireColliderWidth(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelTireColliderWidth(_vehicle, wheelIndex);
}
/**
 * Gets speed of a wheel at the tyre.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x149C9DA0 | Since: client
 */
export function getVehicleWheelSpeed(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelSpeed(_vehicle, wheelIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xCCE49A1C | Since: client
 */
export function getWaveQuadDirection(waveQuad) {
    return GetWaveQuadDirection(waveQuad);
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
 * Hash: 0xA273060E | Since: shared
 */
export function getVehicleType(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleType(_vehicle);
}
/**
 * This native returns the index of a water quad if the given point is inside its bounds.
 *
 * *If you also want to check for water level, check out [`GetWaterQuadAtCoords_3d`](#\_0xF8E03DB8)*
 *
 * Hash: 0x17321452 | Since: client
 */
export function getWaterQuadAtCoords(x, y) {
    return GetWaterQuadAtCoords(x, y);
}
/**
 * No comment provided
 *
 * Hash: 0x42E9A06A | Since: client
 */
export function getWaterQuadBounds(waterQuad) {
    return GetWaterQuadBounds(waterQuad);
}
/**
 * Gets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xC70FA0C7 | Since: client
 */
export function getVehicleWheelFlags(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelFlags(_vehicle, wheelIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x6F4ACBA | Since: client
 */
export function getWaterQuadNoStencil(waterQuad) {
    return GetWaterQuadNoStencil(waterQuad);
}
/**
 * A getter for [\_SET_WEAPON_DAMAGE_MODIFIER](#\_0x4757F00BC6323CFE).
 *
 * Hash: 0xD979143 | Since: client
 */
export function getWeaponDamageModifier(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = game.getHashKey(weaponHash);
    return GetWeaponDamageModifier(weaponHash);
}
/**
 * Returns the offset of the specified wheel relative to the wheel's axle center.
 *
 * Hash: 0xCC90CBCA | Since: client
 */
export function getVehicleWheelXOffset(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelXOffset(_vehicle, wheelIndex);
}
/**
 * A getter for [SET_VISUAL_SETTING_FLOAT](#\_0xD1D31681).
 *
 * Hash: 0x15346B4D | Since: client
 */
export function getVisualSettingFloat() {
    return GetVisualSettingFloat();
}
/**
 * Returns true if the minimap is currently expanded. False if it's the normal minimap state.
 * Use [`IsBigmapFull`](#\_0x66EE14B2) to check if the full map is currently revealed on the minimap.
 *
 * Hash: 0xFFF65C63 | Since: client
 */
export function isBigmapActive() {
    return IsBigmapActive();
}
/**
 * No comment provided
 *
 * Hash: 0x66EE14B2 | Since: client
 */
export function isBigmapFull() {
    return IsBigmapFull();
}
/**
 * A getter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x5E1AF5F | Since: client
 */
export function getWeaponRecoilShakeAmplitude(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = game.getHashKey(weaponHash);
    return GetWeaponRecoilShakeAmplitude(weaponHash);
}
/**
 * No comment provided
 *
 * Hash: 0xB1884159 | Since: client
 */
export function getWaterQuadCount() {
    return GetWaterQuadCount();
}
/**
 * An alternative to [IS_PED_COMPONENT_VARIATION_VALID](#\_0xE825F6B6CEA7671D) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0xCA63A52A | Since: client
 */
export function isPedCollectionComponentVariationValid(ped, componentId, drawableId, textureId) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return IsPedCollectionComponentVariationValid(_ped, componentId, drawableId, textureId);
}
/**
 * A getter for the accuracy spread of a weapon.
 *
 * Hash: 0x5343721 | Since: client
 */
export function getWeaponAccuracySpread(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = game.getHashKey(weaponHash);
    return GetWeaponAccuracySpread(weaponHash);
}
/**
 * No comment provided
 *
 * Hash: 0xF86136DB | Since: client
 */
export function getWaveQuadBounds(waveQuad) {
    return GetWaveQuadBounds(waveQuad);
}
/**
 * A getter for `CWeaponFallOffModifier` damage modifier value in a weapon component.
 *
 * Hash: 0xE134FB8D | Since: client
 */
export function getWeaponComponentRangeDamageModifier(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = game.getHashKey(componentHash);
    return GetWeaponComponentRangeDamageModifier(componentHash);
}
/**
 * Returns the current NUI focus state previously set with `SET_NUI_FOCUS`.
 *
 * Hash: 0x98545E6D | Since: client
 */
export function isNuiFocused() {
    return IsNuiFocused();
}
/**
 * Valid type definitions:
 *
 * *   **0** Square
 * *   **1** Right triangle where the 90 degree angle is at maxX, minY
 * *   **2** Right triangle where the 90 degree angle is at minX, minY
 * *   **3** Right triangle where the 90 degree angle is at minX, maxY
 * *   **4** Right triangle where the 90 degree angle is at maxY, maxY
 *
 * Hash: 0xE2501B8B | Since: client
 */
export function getWaterQuadType(waterQuad) {
    return GetWaterQuadType(waterQuad);
}
/**
 * Returns whether or not a browser is created for a specified DUI browser object.
 *
 * Hash: 0x7AAC3B4C | Since: client
 */
export function isDuiAvailable(duiObject) {
    return IsDuiAvailable(duiObject);
}
/**
 * Returns whether or not the specific minimap overlay has loaded.
 *
 * Hash: 0xF7535F32 | Since: client
 */
export function hasMinimapOverlayLoaded(id) {
    return HasMinimapOverlayLoaded(id);
}
/**
 * Gets if the specified `rawKeyIndex` was released, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x72B66C09 | Since: client
 */
export function isDisabledRawKeyReleased(rawKeyIndex) {
    return IsDisabledRawKeyReleased(rawKeyIndex);
}
/**
 * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
 *
 * Hash: 0xEDBE6ADD | Since: shared
 */
export function isEntityPositionFrozen(entity) {
    const _entity = entity instanceof Entity ? entity.handle() : entity;
    return IsEntityPositionFrozen(_entity);
}
/**
 * Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 *
 * Hash: 0x9C7B59F9 | Since: client
 */
export function getVehicleWheelWidth(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return GetVehicleWheelWidth(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x865139A3 | Since: client
 */
export function getWaveQuadAmplitude(waveQuad) {
    return GetWaveQuadAmplitude(waveQuad);
}
/**
 * Gets whether or not this is the CitizenFX server.
 *
 * Hash: 0xCF24C52E | Since: shared
 */
export function isDuplicityVersion() {
    return IsDuplicityVersion();
}
/**
 * This alternative implementation of [`GetWaterQuadAtCoords`](#\_0x17321452) also checks the height of the water level.
 *
 * Hash: 0xF8E03DB8 | Since: client
 */
export function getWaterQuadAtCoords3d(pos) {
    return GetWaterQuadAtCoords3d(pos.x, pos.y, pos.z);
}
/**
 * A getter for `CWeaponDamageModifier` in a weapon component.
 *
 * Hash: 0x4A0E3855 | Since: client
 */
export function getWeaponComponentDamageModifier(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = game.getHashKey(componentHash);
    return GetWeaponComponentDamageModifier(componentHash);
}
/**
 * No comment provided
 *
 * Hash: 0xC767B581 | Since: client
 */
export function isPedComponentVariationGen9Exclusive(ped, componentId, drawableId) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return IsPedComponentVariationGen9Exclusive(_ped, componentId, drawableId);
}
/**
 * A getter for `ClipSize` in a weapon component.
 *
 * Hash: 0xE14CF665 | Since: client
 */
export function getWeaponComponentClipSize(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = game.getHashKey(componentHash);
    return GetWeaponComponentClipSize(componentHash);
}
/**
 * Converts a screen coordinate into its relative world coordinate.
 *
 * Hash: 0xC81D0659 | Since: client
 */
export function getWorldCoordFromScreenCoord(screenSize) {
    return GetWorldCoordFromScreenCoord(screenSize.x, screenSize.y);
}
/**
 * Gets if the specified `rawKeyIndex` is up, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x2C033875 | Since: client
 */
export function isDisabledRawKeyUp(rawKeyIndex) {
    return IsDisabledRawKeyUp(rawKeyIndex);
}
/**
 * An alternative to [IS_PED_COMPONENT_VARIATION_GEN9\_EXCLUSIVE](#\_0xC767B581) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x33B2AFA2 | Since: client
 */
export function isPedCollectionComponentVariationGen9Exclusive(ped, componentId, drawableId) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return IsPedCollectionComponentVariationGen9Exclusive(_ped, componentId, drawableId);
}
/**
 * No comment provided
 *
 * Hash: 0x37CF52CE | Since: shared
 */
export function isPrincipalAceAllowed() {
    return IsPrincipalAceAllowed();
}
/**
 * No comment provided
 *
 * Hash: 0xBB340D04 | Since: shared
 */
export function isVehicleEngineStarting(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return IsVehicleEngineStarting(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0xA7DAF7C | Since: client
 */
export function isVehicleWanted(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return IsVehicleWanted(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x7EBB9929 | Since: shared
 */
export function isAceAllowed() {
    return IsAceAllowed();
}
/**
 * Gets if the specified `rawKeyIndex` is pressed on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x69F7C29E | Since: client
 */
export function isRawKeyPressed(rawKeyIndex) {
    return IsRawKeyPressed(rawKeyIndex);
}
/**
 * Checks if keyboard input is enabled during NUI focus using `SET_NUI_FOCUS_KEEP_INPUT`.
 *
 * Hash: 0x39C9DC92 | Since: client
 */
export function isNuiFocusKeepingInput() {
    return IsNuiFocusKeepingInput();
}
/**
 * Gets if the specified `rawKeyIndex` is pressed, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x1F7CBBAA | Since: client
 */
export function isDisabledRawKeyPressed(rawKeyIndex) {
    return IsDisabledRawKeyPressed(rawKeyIndex);
}
/**
 * A getter for `CWeaponFallOffModifier` range modifier value in a weapon component.
 *
 * Hash: 0x2FD0BC1B | Since: client
 */
export function getWeaponComponentRangeModifier(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = game.getHashKey(componentHash);
    return GetWeaponComponentRangeModifier(componentHash);
}
/**
 * Getter for [SET_TRACK_ENABLED](#\_0x4B41E84C)
 *
 * Hash: 0x31E695CB | Since: client
 */
export function isTrackEnabled(track) {
    return IsTrackEnabled(track);
}
/**
 * Gets if the specified `rawKeyIndex` was just released on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0xEAA50861 | Since: client
 */
export function isRawKeyReleased(rawKeyIndex) {
    return IsRawKeyReleased(rawKeyIndex);
}
/**
 * Check whether specified channel exists on the Mumble server.
 *
 * Hash: 0xCC8CA25 | Since: client
 */
export function mumbleDoesChannelExist(channel) {
    return MumbleDoesChannelExist(channel);
}
/**
 * Getter for [BREAK_OFF_VEHICLE_WHEEL](?\_0xA274CADB).
 *
 * Hash: 0xCF1BC668 | Since: client
 */
export function isVehicleWheelBrokenOff(vehicle, wheelIndex) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return IsVehicleWheelBrokenOff(_vehicle, wheelIndex);
}
/**
 * Gets if the specified `rawKeyIndex` is pressed down, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x36366EC3 | Since: client
 */
export function isDisabledRawKeyDown(rawKeyIndex) {
    return IsDisabledRawKeyDown(rawKeyIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xF849ED67 | Since: client
 */
export function isVehiclePreviouslyOwnedByPlayer(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return IsVehiclePreviouslyOwnedByPlayer(_vehicle);
}
/**
 * Removes the specified voice channel from the user's voice targets.
 *
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_CHANNEL](#\_0x4D386C9E)
 *
 * Hash: 0x268DB867 | Since: client
 */
export function mumbleRemoveVoiceTargetChannel(targetId, channel) {
    MumbleRemoveVoiceTargetChannel(targetId, channel);
}
/**
 * No comment provided
 *
 * Hash: 0xF9933BF4 | Since: client
 */
export function isVehicleNeedsToBeHotwired(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return IsVehicleNeedsToBeHotwired(_vehicle);
}
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Returns whether an asynchronous streaming file registration completed.
 *
 * Hash: 0xA194934D | Since: client
 */
export function isStreamingFileReady() {
    return IsStreamingFileReady();
}
/**
 * Getter for [SWITCH_TRAIN_TRACK](#\_0xFD813BB7DB977F20). Determines if ambient trains are able to spawn on this track.
 *
 * Hash: 0xE0C53765 | Since: client
 */
export function isTrackSwitchedOff(track) {
    return IsTrackSwitchedOff(track);
}
/**
 * Starts listening to the specified channel, when available.
 *
 * Hash: 0xC79F44BF | Since: client
 */
export function mumbleAddVoiceChannelListen(channel) {
    MumbleAddVoiceChannelListen(channel);
}
/**
 * Sets the current Mumble voice target ID to broadcast voice to.
 *
 * Hash: 0x960A4A95 | Since: client
 */
export function mumbleSetVoiceTarget(targetId) {
    MumbleSetVoiceTarget(targetId);
}
/**
 * Clears channels from the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x5EA72E76 | Since: client
 */
export function mumbleClearVoiceTargetChannels(targetId) {
    MumbleClearVoiceTargetChannels(targetId);
}
/**
 * Gets if the specified `rawKeyIndex` is pressed down on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0xD95A7387 | Since: client
 */
export function isRawKeyDown(rawKeyIndex) {
    return IsRawKeyDown(rawKeyIndex);
}
/**
 * Adds the specified channel to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x4D386C9E | Since: client
 */
export function mumbleAddVoiceTargetChannel(targetId, channel) {
    MumbleAddVoiceTargetChannel(targetId, channel);
}
/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x32C5355A | Since: client
 */
export function mumbleAddVoiceTargetPlayer(targetId, player) {
    const _player = player instanceof Player ? player.localId() : player;
    MumbleAddVoiceTargetPlayer(targetId, _player);
}
/**
 * Use this native to disable noise suppression and high pass filters.
 *
 * The possible intents for this are as follows (backticks are used to represent hashes):
 *
 * | Index | Description |
 * |-|-|
 * | \`speech\` | Default intent |
 * | \`music\` | Disable noise suppression and high pass filter |
 *
 * Hash: 0x6383526B | Since: client
 */
export function mumbleSetAudioInputIntent(intentHash) {
    if (typeof intentHash === 'string')
        intentHash = game.getHashKey(intentHash);
    MumbleSetAudioInputIntent(intentHash);
}
/**
 * No comment provided
 *
 * Hash: 0xA411F72C | Since: client
 */
export function isVehicleInteriorLightOn(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return IsVehicleInteriorLightOn(_vehicle);
}
/**
 * Clears the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x8555DCBA | Since: client
 */
export function mumbleClearVoiceTarget(targetId) {
    MumbleClearVoiceTarget(targetId);
}
/**
 * Gets if the specified `rawKeyIndex` is up  on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x36F4E505 | Since: client
 */
export function isRawKeyUp(rawKeyIndex) {
    return IsRawKeyUp(rawKeyIndex);
}
/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 *
 * Hash: 0x76A9EE1F | Since: shared
 */
export function loadResourceFile(resource, path) {
    return LoadResourceFile(resource, path);
}
/**
 * No comment provided
 *
 * Hash: 0xE820BC10 | Since: client
 */
export function mumbleIsActive() {
    return MumbleIsActive();
}
/**
 * No comment provided
 *
 * Hash: 0x33EEF97F | Since: client
 */
export function mumbleIsPlayerTalking(player) {
    const _player = player instanceof Player ? player.localId() : player;
    return MumbleIsPlayerTalking(_player);
}
/**
 * Overrides the output volume for a particular player on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 *
 * Set to -1.0 to reset the Volume override.
 *
 * Hash: 0x61C309E3 | Since: client
 */
export function mumbleSetVolumeOverride(player, volume) {
    const _player = player instanceof Player ? player.localId() : player;
    MumbleSetVolumeOverride(_player, volume);
}
/**
 * Changes the Mumble server address to connect to, and reconnects to the new address.
 *
 * Setting the address to an empty string and the port to -1 will reset to the built in FXServer Mumble Implementation.
 *
 * Hash: 0xE6EB2CD8 | Since: client
 */
export function mumbleSetServerAddress(host, port) {
    MumbleSetServerAddress(host, port);
}
/**
 * No comment provided
 *
 * Hash: 0x84E02A32 | Since: client
 */
export function mumbleGetTalkerProximity() {
    return MumbleGetTalkerProximity();
}
/**
 * No comment provided
 *
 * Hash: 0x74E927B0 | Since: client
 */
export function mumbleSetTalkerProximity(value) {
    MumbleSetTalkerProximity(value);
}
/**
 * Sets the current output distance. The player will be able to hear other players talking within this distance.
 *
 * Hash: 0x74C597D9 | Since: client
 */
export function mumbleSetAudioOutputDistance(distance) {
    MumbleSetAudioOutputDistance(distance);
}
/**
 * Sets the current input distance. The player will be able to talk to other players within this distance.
 *
 * Hash: 0x1B1052E2 | Since: client
 */
export function mumbleSetAudioInputDistance(distance) {
    MumbleSetAudioInputDistance(distance);
}
/**
 * Returns the owner ID of the specified entity.
 *
 * Hash: 0x526FEE31 | Since: shared
 */
export function networkGetEntityOwner(entity) {
    const _entity = entity instanceof Entity ? entity.handle() : entity;
    return NetworkGetEntityOwner(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xBF847807 | Since: client
 */
export function mumbleClearVoiceChannel() {
    MumbleClearVoiceChannel();
}
/**
 * Clears players from the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x912E21DA | Since: client
 */
export function mumbleClearVoiceTargetPlayers(targetId) {
    MumbleClearVoiceTargetPlayers(targetId);
}
/**
 * No comment provided
 *
 * Hash: 0xDC921211 | Since: client
 */
export function isVehicleAlarmSet(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return IsVehicleAlarmSet(_vehicle);
}
/**
 * Returns the mumble voice channel from a player's server id.
 *
 * Hash: 0x221C09F1 | Since: client
 */
export function mumbleGetVoiceChannelFromServerId(serverId) {
    return MumbleGetVoiceChannelFromServerId(serverId);
}
/**
 * Removes the specified player from the user's voice targets.
 *
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER](#\_0x32C5355A)
 *
 * Hash: 0x88CD646F | Since: client
 */
export function mumbleRemoveVoiceTargetPlayer(targetId, player) {
    const _player = player instanceof Player ? player.localId() : player;
    MumbleRemoveVoiceTargetPlayer(targetId, _player);
}
/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x25F2B65F | Since: client
 */
export function mumbleAddVoiceTargetPlayerByServerId(targetId, serverId) {
    MumbleAddVoiceTargetPlayerByServerId(targetId, serverId);
}
/**
 * No comment provided
 *
 * Hash: 0x8737EEE8 | Since: client
 */
export function mumbleSetVoiceChannel(channel) {
    MumbleSetVoiceChannel(channel);
}
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a set of archetypes with the game engine. These should match `CBaseArchetypeDef` class information from the game.
 *
 * Hash: 0x3C2F9037 | Since: client
 */
export function registerArchetypes(factory) {
    RegisterArchetypes(factory);
}
/**
 * Sets whether peds can stand on top of *all* vehicles without falling off.
 *
 * Note this flag is not replicated automatically, you will have to manually do so.
 *
 * Hash: 0x90A9E0B2 | Since: client
 */
export function overridePedsCanStandOnTopFlag(flag) {
    OverridePedsCanStandOnTopFlag(flag);
}
/**
 * Scope exit for profiler.
 *
 * Hash: 0xB39CA35C | Since: shared
 */
export function profilerExitScope() {
    ProfilerExitScope();
}
/**
 * Registers a specified font name for use with text draw commands.
 *
 * Hash: 0xACF6D8EE | Since: client
 */
export function registerFontId() {
    return RegisterFontId();
}
/**
 * No comment provided
 *
 * Hash: 0xD932A3F3 | Since: client
 */
export function mumbleSetActive(state) {
    MumbleSetActive(state);
}
/**
 * Define the xml in a resources fxmanifest, under the file(s) section.
 *
 * Hash: 0xF5102568 | Since: client
 */
export function loadWaterFromPath() {
    return LoadWaterFromPath();
}
/**
 * Registers a key mapping for the current resource.
 *
 * See the related [cookbook post](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/) for more information.
 *
 * Below you can find some examples on how to create these keybindings as well as the alternate keybinding syntax, which is preceded by `~!` to indicate that it's an alternate key.
 *
 * Hash: 0xD7664FD1 | Since: client
 */
export function registerKeyMapping(commandString, description, defaultMapper, defaultParameter) {
    RegisterKeyMapping(commandString, description, defaultMapper, defaultParameter);
}
/**
 * Overrides whether or not peds can stand on top of the specified vehicle.
 *
 * Note this flag is not replicated automatically, you will have to manually do so.
 *
 * Hash: 0x7FA03E76 | Since: client
 */
export function overrideVehiclePedsCanStandOnTopFlag(vehicle, can) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    OverrideVehiclePedsCanStandOnTopFlag(_vehicle, can);
}
/**
 * Stops listening to the specified channel.
 *
 * Hash: 0x231523B7 | Since: client
 */
export function mumbleRemoveVoiceChannelListen(channel) {
    MumbleRemoveVoiceChannelListen(channel);
}
/**
 * Removes the specified player from the user's voice targets.
 *
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID](#\_0x25F2B65F)
 *
 * Hash: 0x930BD34B | Since: client
 */
export function mumbleRemoveVoiceTargetPlayerByServerId(targetId, serverId) {
    MumbleRemoveVoiceTargetPlayerByServerId(targetId, serverId);
}
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a KVP value as an asset with the GTA streaming module system. This function currently won't work.
 *
 * Hash: 0x1493DCC1 | Since: client
 */
export function registerStreamingFileFromKvs() {
    return RegisterStreamingFileFromKvs();
}
/**
 * No comment provided
 *
 * Hash: 0xC59B980C | Since: client
 */
export function registerNuiCallback(key, callback) {
    RegisterNuiCallback(key, callback);
}
/**
 * Removes a dry volume from the game session.
 * See CREATE_DRY_VOLUME for more info
 *
 * Hash: 0x7BCAA6E7 | Since: client
 */
export function removeDryVolume(handle) {
    RemoveDryVolume(handle);
}
/**
 * Replaces the `popgroups` (CPopGroupList) meta file with the file in the specified path.
 *
 * Hash: 0xD3BC438F | Since: client
 */
export function overridePopGroups() {
    return OverridePopGroups();
}
/**
 * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
 *
 * Hash: 0xD233A168 | Since: shared
 */
export function registerResourceAsEventHandler() {
    return RegisterResourceAsEventHandler();
}
/**
 * This native will return true if the user succesfully connected to the voice server.
 * If the user disabled the voice-chat setting it will return false.
 *
 * Hash: 0xB816370A | Since: client
 */
export function mumbleIsConnected() {
    return MumbleIsConnected();
}
/**
 * No comment provided
 *
 * Hash: 0xA8AE9C2F | Since: client
 */
export function registerRawNuiCallback(callback) {
    return RegisterRawNuiCallback(callback);
}
/**
 * Removes the specified texture and remove it from the ped.
 * Unlike `0x6BEFAA907B076859` which only marks the texture as "can be reused" (and keeps it until will be reused), this function deletes it right away. Can fix some sync issues. `DOES_TEXTURE_EXIST` can be use to wait until fully unloaded by game
 *
 * ```lua
 * RemoveTexture(textureId)
 * while DoesTextureExist(textureId) do
 * Wait(0)
 * end
 * ```
 *
 * Hash: 0x1582C7F2 | Since: client
 */
export function removeTexture(textureId) {
    RemoveTexture(textureId);
}
/**
 * Sets the audio submix ID for a specified player using Mumble 'Native Audio' functionality.
 *
 * Hash: 0xFE3A3054 | Since: client
 */
export function mumbleSetSubmixForServerId(serverId, submixId) {
    MumbleSetSubmixForServerId(serverId, submixId);
}
/**
 * No comment provided
 *
 * Hash: 0x1E2E3177 | Since: client
 */
export function networkDoesEntityExistWithNetworkId(netId) {
    return NetworkDoesEntityExistWithNetworkId(netId);
}
/**
 * No comment provided
 *
 * Hash: 0xEAC49841 | Since: shared
 */
export function removeConvarChangeListener(cookie) {
    RemoveConvarChangeListener(cookie);
}
/**
 * Overrides the output volume for a particular player with the specified server id and player name on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 *
 * Hash: 0xCE8E25B4 | Since: client
 */
export function mumbleSetVolumeOverrideByServerId(serverId, volume) {
    MumbleSetVolumeOverrideByServerId(serverId, volume);
}
/**
 * Allows the bypassing of default game behavior that prevents the use of [SET_PED_DRIVE_BY_CLIPSET_OVERRIDE](#\_0xED34AB6C5CB36520) in certain scenarios to avoid clipping issues (e.g., when there is more than one Ped in a vehicle).
 *
 * Note: This flag and the overridden clipset are not replicated values and require synchronization through user scripts. Additionally, current game behavior also restricts applying this clipset locally when in first-person mode and will require a temporary workaround.
 *
 * Hash: 0xB14F8EAD | Since: client
 */
export function overridePedsUseDefaultDriveByClipset(flag) {
    OverridePedsUseDefaultDriveByClipset(flag);
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
 * Hash: 0x3F3EB3F7 | Since: client
 */
export function overrideReactionToVehicleSiren(state, reaction) {
    OverrideReactionToVehicleSiren(state, reaction);
}
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a file from an URL as a streaming asset in the GTA streaming subsystem. This will asynchronously register the asset, and caching is done based on the URL itself - cache headers are ignored.
 *
 * Use `IS_STREAMING_FILE_READY` to check if the asset has been registered successfully.
 *
 * Hash: 0xF44BFB95 | Since: client
 */
export function registerStreamingFileFromUrl() {
    return RegisterStreamingFileFromUrl();
}
/**
 * Registers a custom rope data with the game. For guidance on what these values should be use common:/data/ropedata.xml as a reference.
 * Returns a rope type which can be passed into [ADD_ROPE](#\_0xE832D760399EB220) to use a custom rope design.
 * Once a rope data is registered it can be used indefinitely and you should take caution not too register too many as to exceed the games limit.
 *
 * Hash: 0xF213AE8D | Since: client
 */
export function registerRopeData(numSections, radius, distanceMappingScale, uvScaleX, uvScaleY, specularFresnel, specularFalloff, specularIntensity, bumpiness, color) {
    return RegisterRopeData(numSections, radius, distanceMappingScale, uvScaleX, uvScaleY, specularFresnel, specularFalloff, specularIntensity, bumpiness, color);
}
/**
 * Toggles a check that prevents attaching (networked) entities to remotely owned peds. This is disabled by default.
 *
 * Hash: 0x30CE39D8 | Since: client
 */
export function onesyncEnableRemoteAttachmentSanitization(enable) {
    OnesyncEnableRemoteAttachmentSanitization(enable);
}
/**
 * Remaps the keymap bound to `keymapName` to `newRawKeyIndex`
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x6E38C1B9 | Since: client
 */
export function remapRawKeymap(newRawKeyIndex) {
    return RemapRawKeymap(newRawKeyIndex);
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
 * Hash: 0xE7490533 | Since: client
 */
export function requestResourceFileSet() {
    return RequestResourceFileSet();
}
/**
 * Scope entry for profiler.
 *
 * Hash: 0xC795A4A9 | Since: shared
 */
export function profilerEnterScope() {
    return ProfilerEnterScope();
}
/**
 * Experimental natives, please do not use in a live environment.
 *
 * Hash: 0xA896B20A | Since: client
 */
export function removeReplaceTexture() {
    return RemoveReplaceTexture();
}
/**
 * Removes the specified track junction.
 *
 * Hash: 0x4F3D2B2A | Since: client
 */
export function removeTrackJunction(junctionIndex) {
    return RemoveTrackJunction(junctionIndex);
}
/**
 * Registers a track junction that when enabled will cause a train on the defined trackIndex, node and direction to change its current track index and begin traveling on the new node
 *
 * Hash: 0x35F743B5 | Since: client
 */
export function registerTrackJunction(trackIndex, trackNode, newIndex, newNode, direction) {
    return RegisterTrackJunction(trackIndex, trackNode, newIndex, newNode, direction);
}
/**
 * No comment provided
 *
 * Hash: 0x78608ACB | Since: client
 */
export function sendNuiMessage(message) {
    return SendNuiMessage(message);
}
/**
 * Returns true if the profiler is active.
 *
 * Hash: 0xF8B7D7BB | Since: shared
 */
export function profilerIsRecording() {
    return ProfilerIsRecording();
}
/**
 * Resets whether or not peds can stand on top of the specified vehicle.
 *
 * Note this flag is not replicated automatically, you will have to manually do so.
 *
 * Hash: 0xDF62CFE2 | Since: client
 */
export function resetVehiclePedsCanStandOnTopFlag(vehicle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    ResetVehiclePedsCanStandOnTopFlag(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x5A5E0D05 | Since: client
 */
export function removeTimecycleModifierVar() {
    return RemoveTimecycleModifierVar();
}
/**
 * Sets the volumes for the sound channels in a submix effect.
 * Values can be between 0.0 and 1.0.
 * Channel 5 and channel 6 are not used in voice chat but are believed to be center and LFE channels.
 * Output slot starts at 0 for the first ADD_AUDIO_SUBMIX_OUTPUT call then incremented by 1 on each subsequent call.
 *
 * Hash: 0x825DC0D1 | Since: client
 */
export function setAudioSubmixOutputVolumes(submixId, outputSlot, frontLeftVolume, frontRightVolume, rearLeftVolume, rearRightVolume, channel5Volume, channel6Volume) {
    SetAudioSubmixOutputVolumes(submixId, outputSlot, frontLeftVolume, frontRightVolume, rearLeftVolume, rearRightVolume, channel5Volume, channel6Volume);
}
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a dynamic streaming asset from the server with the GTA streaming module system.
 *
 * Hash: 0xCEAD2D4B | Since: client
 */
export function registerStreamingFileFromCache() {
    return RegisterStreamingFileFromCache();
}
/**
 * Injects a 'mouse down' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 *
 * Hash: 0x5D01F191 | Since: client
 */
export function sendDuiMouseDown(duiObject) {
    return SendDuiMouseDown(duiObject);
}
/**
 * Injects a 'mouse up' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 *
 * Hash: 0x1D735B93 | Since: client
 */
export function sendDuiMouseUp(duiObject) {
    return SendDuiMouseUp(duiObject);
}
/**
 * Resets parameters which is used by the game for checking is ped needs to fly through windscreen after a crash to default values.
 *
 * Hash: 0x6D712937 | Since: client
 */
export function resetFlyThroughWindscreenParams() {
    ResetFlyThroughWindscreenParams();
}
/**
 * Sets an integer parameter for a submix effect.
 *
 * Hash: 0x77FAE2B8 | Since: client
 */
export function setAudioSubmixEffectParamInt(submixId, effectSlot, paramIndex, paramValue) {
    SetAudioSubmixEffectParamInt(submixId, effectSlot, paramIndex, paramValue);
}
/**
 * Injects a 'mouse move' event for a DUI object. Coordinates are in browser space.
 *
 * Hash: 0xD9D7A0AA | Since: client
 */
export function sendDuiMouseMove(duiObject, x, y) {
    SendDuiMouseMove(duiObject, x, y);
}
/**
 * Sets the on-screen drawing origin for draw-functions in world coordinates.
 *
 * The effect can be reset by calling [`CLEAR_DRAW_ORIGIN`](#\_0xDD76B263) and is limited to 32 different origins each frame.
 *
 * Hash: 0xE10198D5 | Since: client
 */
export function setDrawOrigin(pos, is2d) {
    SetDrawOrigin(pos.x, pos.y, pos.z, is2d);
}
/**
 * No comment provided
 *
 * Hash: 0xC44C2F44 | Since: client
 */
export function setBackfaceculling(toggle) {
    SetBackfaceculling(toggle);
}
/**
 * Registers a specified .gfx file as GFx font library.
 * The .gfx file has to be registered with the streamer already.
 *
 * Hash: 0x1B3A363 | Since: client
 */
export function registerFontFile() {
    return RegisterFontFile();
}
/**
 * Adds a cooldown between instances of moving and then aiming.
 * Can be optionally used to hinder 'speedboosting'
 * To turn off, set value to 0
 *
 * Hash: 0xA42A3DBF | Since: client
 */
export function setAimCooldown(value) {
    SetAimCooldown(value);
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
 * Hash: 0x49C1F6DC | Since: client
 */
export function registerRawKeymap(onKeyDown, onKeyUp, rawKeyIndex, canBeDisabled) {
    return RegisterRawKeymap(onKeyDown, onKeyUp, rawKeyIndex, canBeDisabled);
}
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Removes a handler for changes to a state bag.
 *
 * Hash: 0xD36BE661 | Since: shared
 */
export function removeStateBagChangeHandler(cookie) {
    RemoveStateBagChangeHandler(cookie);
}
/**
 * No comment provided
 *
 * Hash: 0xCD03CDA9 | Since: client
 */
export function registerNuiCallbackType() {
    return RegisterNuiCallbackType();
}
/**
 * This native sets the small image asset for the discord rich presence implementation.
 *
 * Hash: 0xF61D04C4 | Since: client
 */
export function setDiscordRichPresenceAssetSmall() {
    return SetDiscordRichPresenceAssetSmall();
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
 * Hash: 0x5FA79B0F | Since: shared
 */
export function registerCommand(name, handler, restricted) {
    return RegisterCommand(name, handler, restricted);
}
/**
 * Resets values from the zoom level data by index to defaults from mapzoomdata.meta.
 *
 * Hash: 0x11A5B7ED | Since: client
 */
export function resetMapZoomDataLevel(index) {
    ResetMapZoomDataLevel(index);
}
/**
 * Restores an overridden ped model personality type to the default value.
 *
 * Hash: 0x79A12861 | Since: client
 */
export function resetPedModelPersonality(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = game.getHashKey(modelHash);
    ResetPedModelPersonality(modelHash);
}
/**
 * Resets the water to the games default water.xml.
 *
 * Hash: 0x1DA4791 | Since: client
 */
export function resetWater() {
    ResetWater();
}
/**
 * Sets a floating-point parameter for a submix effect.
 *
 * Hash: 0x9A209B3C | Since: client
 */
export function setAudioSubmixEffectParamFloat(submixId, effectSlot, paramIndex, paramValue) {
    SetAudioSubmixEffectParamFloat(submixId, effectSlot, paramIndex, paramValue);
}
/**
 * Sets whether or not ownership checks should be performed while trying to stow a carriable on a hunting wagon.
 *
 * Hash: 0x85A10FFD | Since: client
 */
export function setIgnoreVehicleOwnershipForStowing(ignore) {
    SetIgnoreVehicleOwnershipForStowing(ignore);
}
/**
 * This native sets the app id for the discord rich presence implementation.
 *
 * Hash: 0x6A02254D | Since: client
 */
export function setDiscordAppId() {
    return SetDiscordAppId();
}
/**
 * Injects a 'mouse wheel' event for a DUI object.
 *
 * Hash: 0x2D62133A | Since: client
 */
export function sendDuiMouseWheel(duiObject, deltaY, deltaX) {
    SendDuiMouseWheel(duiObject, deltaY, deltaX);
}
/**
 * Sets a clickable button to be displayed in a player's Discord rich presence.
 *
 * Hash: 0xCBBC3FAC | Since: client
 */
export function setDiscordRichPresenceAction(index) {
    return SetDiscordRichPresenceAction(index);
}
/**
 * Sets some in-game parameters which is used for checks is ped needs to fly through windscreen after a crash.
 *
 * Hash: 0x4D3118ED | Since: client
 */
export function setFlyThroughWindscreenParams(vehMinSpeed, unkMinSpeed, unkModifier, minDamage) {
    return SetFlyThroughWindscreenParams(vehMinSpeed, unkMinSpeed, unkModifier, minDamage);
}
/**
 * Allows Weapon-Flashlight beams to stay visible while moving. Normally it only stays on while aiming.
 *
 * Hash: 0x7635B349 | Since: client
 */
export function setFlashLightKeepOnWhileMoving(state) {
    SetFlashLightKeepOnWhileMoving(state);
}
/**
 * No comment provided
 *
 * Hash: 0x36DF8612 | Since: client
 */
export function removeTimecycleModifier() {
    return RemoveTimecycleModifier();
}
/**
 * No comment provided
 *
 * Hash: 0x87F43553 | Since: client
 */
export function setInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex, pos) {
    SetInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex, pos.x, pos.y, pos.z);
}
/**
 * Sets fuel consumption rate multiplier for all vehicles operated by a player. This is a way to slow down or speed up fuel consumption for all vehicles at a time. If 0 - it practically means that fuel will not be consumed. By default is set to 1.
 *
 * When the multiplier is set to 1 a default 65 litre gas tank car with average fuel consumption can stay idle for ~16.67 hours or run with max RPM for ~2.5 hours.
 *
 * To customize fuel consumption per vehicle / vehicle class use [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolConsumptionRate`. By default it is set to 0.5 for all vehicles.
 *
 * Hash: 0x845F3E5C | Since: client
 */
export function setFuelConsumptionRateMultiplier(multiplier) {
    SetFuelConsumptionRateMultiplier(multiplier);
}
/**
 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
 * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 *
 * Hash: 0x1722C938 | Since: client
 */
export function setManualShutdownLoadingScreenNui(manualShutdown) {
    SetManualShutdownLoadingScreenNui(manualShutdown);
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
 * Hash: 0x79780FD2 | Since: client
 */
export function setDefaultVehicleNumberPlateTextPattern(plateIndex) {
    return SetDefaultVehicleNumberPlateTextPattern(plateIndex);
}
/**
 * This native sets the hover text of the small image asset for the discord rich presence implementation.
 *
 * Hash: 0x35E62B6A | Since: client
 */
export function setDiscordRichPresenceAssetSmallText() {
    return SetDiscordRichPresenceAssetSmallText();
}
/**
 * This native sets the image asset for the discord rich presence implementation.
 *
 * Hash: 0x53DFD530 | Since: client
 */
export function setDiscordRichPresenceAsset() {
    return SetDiscordRichPresenceAsset();
}
/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0xFE8064E3 | Since: client
 */
export function setHandlingField(value) {
    return SetHandlingField(value);
}
/**
 * No comment provided
 *
 * Hash: 0xC5945BD9 | Since: client
 */
export function setCalmingQuadBounds(waterQuad, minX, minY, maxX, maxY) {
    return SetCalmingQuadBounds(waterQuad, minX, minY, maxX, maxY);
}
/**
 * No comment provided
 *
 * Hash: 0x88B2355E | Since: client
 */
export function setInteriorPortalFlag(interiorId, portalIndex, flag) {
    SetInteriorPortalFlag(interiorId, portalIndex, flag);
}
/**
 * Assigns a RadioFX effect to a submix effect slot.
 *
 * The parameter values for this effect are as follows (backticks are used to represent hashes):
 *
 * | Index | Type | Description |
 * |-|-|-|
 * | \`enabled\` | int | Enables or disables RadioFX on this DSP. |
 * | \`default\` | int | Sets default parameters for the RadioFX DSP and enables it. |
 * | \`freq_low\` | float |  |
 * | \`freq_hi\` | float |  |
 * | \`fudge\` | float |  |
 * | \`rm_mod_freq\` | float |  |
 * | \`rm_mix\` | float |  |
 * | \`o_freq_lo\` | float |  |
 * | \`o_freq_hi\` | float |  |
 *
 * Hash: 0xAAA94D53 | Since: client
 */
export function setAudioSubmixEffectRadioFx(submixId, effectSlot) {
    SetAudioSubmixEffectRadioFx(submixId, effectSlot);
}
/**
 * Sends a message to the specific DUI root page. This is similar to SEND_NUI_MESSAGE.
 *
 * Hash: 0xCD380DA9 | Since: client
 */
export function sendDuiMessage(duiObject) {
    return SendDuiMessage(duiObject);
}
/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0x90DD01C | Since: client
 */
export function setHandlingFloat(value) {
    return SetHandlingFloat(value);
}
/**
 * This native sets the hover text of the image asset for the discord rich presence implementation.
 *
 * Hash: 0xB029D2FA | Since: client
 */
export function setDiscordRichPresenceAssetText() {
    return SetDiscordRichPresenceAssetText();
}
/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 *
 * Hash: 0x8BBE6CC0 | Since: client
 */
export function sendLoadingScreenMessage() {
    return SendLoadingScreenMessage();
}
/**
 * Navigates the specified DUI browser to a different URL.
 *
 * Hash: 0xF761D9F3 | Since: client
 */
export function setDuiUrl(duiObject) {
    return SetDuiUrl(duiObject);
}
/**
 * Sets values to the zoom level data by index.
 *
 * Hash: 0x447C718E | Since: client
 */
export function setMapZoomDataLevel(index, zoomScale, zoomSpeed, scrollSpeed, tilesX, tilesY) {
    SetMapZoomDataLevel(index, zoomScale, zoomSpeed, scrollSpeed, tilesX, tilesY);
}
/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 *
 * Hash: 0xEED219F2 | Since: client
 */
export function setHudComponentAlign(id, horizontalAlign, verticalAlign) {
    SetHudComponentAlign(id, horizontalAlign, verticalAlign);
}
/**
 * Overwrite the games default CPortalTracker interior detection range.
 * This fixes potentially unwanted behaviour in the base game and allows you to build custom interiors with larger ceiling heights without running into graphical glitches.
 *
 * By default CPortalTracker will probe 4 units downward trying to reach collisions that are part of the interior the entity is in.
 * If no collision can be found 16 units are used in some circumstances.
 *
 * There are 30+ hard coded special cases, only some of them exposed via script (for example `ENABLE_STADIUM_PROBES_THIS_FRAME`).
 *
 * This native allows you to extend the probe range up to 150 units which is the same value the game uses for the `xs_arena_interior`
 *
 * Hash: 0x423F7E39 | Since: client
 */
export function setInteriorProbeLength(probeLength) {
    SetInteriorProbeLength(probeLength);
}
/**
 * Allows StaticEmitter's without a linked entity to make use of environment features like occlusion and reverb even if they are located higher than 20.0 units above any static collision inside interiors.
 *
 * This native allows you to extend the probe range up to 150.0 units.
 *
 * Hash: 0x8AA1F3C2 | Since: client
 */
export function setEmitterProbeLength(probeLength) {
    SetEmitterProbeLength(probeLength);
}
/**
 * No comment provided
 *
 * Hash: 0x67977501 | Since: client
 */
export function setCalmingQuadDampening(calmingQuad, dampening) {
    return SetCalmingQuadDampening(calmingQuad, dampening);
}
/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 *
 * Hash: 0x8AB3F46C | Since: client
 */
export function setHandlingInt(value) {
    return SetHandlingInt(value);
}
/**
 * No comment provided
 *
 * Hash: 0x8A7A8DAC | Since: client
 */
export function setCursorLocation(x, y) {
    return SetCursorLocation(x, y);
}
/**
 * No comment provided
 *
 * Hash: 0x7644A9FA | Since: client
 */
export function setHudComponentSize(id, x, y) {
    SetHudComponentSize(id, x, y);
}
/**
 * Possible Types:
 *
 * ```
 * 0 = Off,
 * 1 = Regular,
 * 2 = Expanded,
 * 3 = Simple,
 * ```
 *
 * Hash: 0x5FB53015 | Since: client
 */
export function setMinimapType(_type) {
    SetMinimapType(_type);
}
/**
 * Sets the type for the minimap blip clipping object to be either rectangular or rounded.
 *
 * Hash: 0xB8B4490C | Since: client
 */
export function setMinimapClipType(_type) {
    SetMinimapClipType(_type);
}
/**
 * No comment provided
 *
 * Hash: 0x5518D60B | Since: client
 */
export function setInteriorRoomFlag(interiorId, roomIndex, flag) {
    SetInteriorRoomFlag(interiorId, roomIndex, flag);
}
/**
 * Overrides how many real ms are equal to one game minute.
 * A setter for [`GetMillisecondsPerGameMinute`](#\_0x2F8B4D1C595B11DB).
 *
 * Hash: 0x36CA2554 | Since: client
 */
export function setMillisecondsPerGameMinute(value) {
    SetMillisecondsPerGameMinute(value);
}
/**
 * No comment provided
 *
 * Hash: 0x8349CD76 | Since: client
 */
export function setInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex, flag) {
    SetInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex, flag);
}
/**
 * Toggles the visibility of resource names in the FiveM key mapping page.
 *
 * Hash: 0xCB0241B5 | Since: client
 */
export function setKeyMappingHideResources(hide) {
    SetKeyMappingHideResources(hide);
}
/**
 * Replaces the pixel data in a runtime texture with the image data from a file in the current resource, or a data URL.
 *
 * If the bitmap is a different size compared to the existing texture, it will be resampled.
 *
 * This command may end up executed asynchronously, and only update the texture data at a later time.
 *
 * Hash: 0x28FC4ECB | Since: client
 */
export function setRuntimeTextureImage(tex) {
    return SetRuntimeTextureImage(tex);
}
/**
 * No comment provided
 *
 * Hash: 0x58982680 | Since: client
 */
export function setInteriorPortalRoomTo(interiorId, portalIndex, roomTo) {
    SetInteriorPortalRoomTo(interiorId, portalIndex, roomTo);
}
/**
 * An alternative to [SET_PED_PROP_INDEX](#\_0x93376B65A266EB5F) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Hash: 0x75240BCB | Since: client
 */
export function setPedCollectionPropIndex(ped, anchorPoint, propIndex, textureId, attach) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return SetPedCollectionPropIndex(_ped, anchorPoint, propIndex, textureId, attach);
}
/**
 * No comment provided
 *
 * Hash: 0x4FDCF51E | Since: client
 */
export function setInteriorRoomExtents(interiorId, roomIndex, bbMinX, bbMinY, bbMinZ, bbMaxX, bbMaxY, bbMaxZ) {
    SetInteriorRoomExtents(interiorId, roomIndex, bbMinX, bbMinY, bbMinZ, bbMaxX, bbMaxY, bbMaxZ);
}
/**
 * Set's the ropes length change rate, which is the speed that rope should wind if started.
 *
 * Hash: 0x69B680A7 | Since: client
 */
export function setRopeLengthChangeRate(rope, lengthChangeRate) {
    SetRopeLengthChangeRate(rope, lengthChangeRate);
}
/**
 * No comment provided
 *
 * Hash: 0x1C47F6AC | Since: client
 */
export function setGlobalPassengerMassMultiplier(massMul) {
    SetGlobalPassengerMassMultiplier(massMul);
}
/**
 * Overrides the minimap component data (from `common:/data/ui/frontend.xml`) for a specified component.
 *
 * Hash: 0x3E882B23 | Since: client
 */
export function setMinimapComponentPosition(posX, posY, sizeX, sizeY) {
    return SetMinimapComponentPosition(posX, posY, sizeX, sizeY);
}
/**
 * Sets the display info for a minimap overlay.
 *
 * Hash: 0x6A48B3CA | Since: client
 */
export function setMinimapOverlayDisplay(miniMap, x, y, xScale, yScale, alpha) {
    SetMinimapOverlayDisplay(miniMap, x, y, xScale, yScale, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0x31C9A848 | Since: client
 */
export function setInteriorRoomTimecycle(interiorId, roomIndex, timecycleHash) {
    SetInteriorRoomTimecycle(interiorId, roomIndex, timecycleHash);
}
/**
 * No comment provided
 *
 * Hash: 0xA9EC16C7 | Since: client
 */
export function setPlayerStamina(playerId, stamina) {
    const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
    return SetPlayerStamina(_playerId, stamina);
}
/**
 * Toggles whether the usage of [ADD_ROPE](#\_0xE832D760399EB220) should create an underlying CNetworkRopeWorldStateData. By default this is set to false.
 *
 * Hash: 0xE62FC73 | Since: client
 */
export function setRopesCreateNetworkWorldState(shouldCreate) {
    SetRopesCreateNetworkWorldState(shouldCreate);
}
/**
 * Overrides a ped model personality type.
 *
 * Hash: 0x46F6B38B | Since: client
 */
export function setPedModelPersonality(modelHash, personalityHash) {
    if (typeof modelHash === 'string')
        modelHash = game.getHashKey(modelHash);
    if (typeof personalityHash === 'string')
        personalityHash = game.getHashKey(personalityHash);
    SetPedModelPersonality(modelHash, personalityHash);
}
/**
 * Sets whether all tags should group (normal game behavior) or should remain independent and above each ped's respective head when in a vehicle.
 *
 * Hash: 0x7A27BC93 | Since: client
 */
export function setMpGamerTagsUseVehicleBehavior(enabled) {
    SetMpGamerTagsUseVehicleBehavior(enabled);
}
/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 *
 * Hash: 0x7F9D543 | Since: client
 */
export function setHandlingVector(value) {
    return SetHandlingVector(value);
}
/**
 * An alternative to [SET_PED_COMPONENT_VARIATION](#\_0x262B14F48D29DE80) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x88711BBA | Since: client
 */
export function setPedCollectionComponentVariation(ped, componentId, drawableId, textureId, paletteId) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return SetPedCollectionComponentVariation(_ped, componentId, drawableId, textureId, paletteId);
}
/**
 * <strong>This native is deprecated and does nothing!</strong>
 *
 * Hash: 0x7F6B8D75 | Since: client
 */
export function setModelHeadlightConfiguration(modelHash, ratePerSecond, headlightRotation, invertRotation) {
    if (typeof modelHash === 'string')
        modelHash = game.getHashKey(modelHash);
    SetModelHeadlightConfiguration(modelHash, ratePerSecond, headlightRotation, invertRotation);
}
/**
 * An alternative to [SET_PED_PRELOAD_VARIATION_DATA](#\_0x39D55A620FCB6A3A) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x3EC75558 | Since: client
 */
export function setPedCollectionPreloadVariationData(ped, componentId, drawableId, textureId) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return SetPedCollectionPreloadVariationData(_ped, componentId, drawableId, textureId);
}
/**
 * No comment provided
 *
 * Hash: 0x298FC783 | Since: client
 */
export function setInteriorPortalRoomFrom(interiorId, portalIndex, roomFrom) {
    SetInteriorPortalRoomFrom(interiorId, portalIndex, roomFrom);
}
/**
 * Sets the maximum distance at which all tags will be visible and which beyond will not be displayed. Distance is measured from the camera position.
 *
 * Hash: 0xD61676B3 | Since: client
 */
export function setMpGamerTagsVisibleDistance(distance) {
    SetMpGamerTagsVisibleDistance(distance);
}
/**
 * Turns on and off fuel consumption in all vehicles operated by a player. NPC operated vehicles will not consume fuel to avoid traffic disruptions.
 *
 * The default Gta5 behaviour is fuel consumption turned off.
 *
 * Hash: 0x81DAD03E | Since: client
 */
export function setFuelConsumptionState(state) {
    SetFuelConsumptionState(state);
}
/**
 * No comment provided
 *
 * Hash: 0x35594F67 | Since: client
 */
export function setPlayerMaxStamina(playerId, maxStamina) {
    const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
    return SetPlayerMaxStamina(_playerId, maxStamina);
}
/**
 * No comment provided
 *
 * Hash: 0x3FF5E5F8 | Since: client
 */
export function setNuiFocusKeepInput(keepInput) {
    SetNuiFocusKeepInput(keepInput);
}
/**
 * No comment provided
 *
 * Hash: 0xA7DD3209 | Since: client
 */
export function setSnakeoilForEntry() {
    return SetSnakeoilForEntry();
}
/**
 * No comment provided
 *
 * Hash: 0x5B98AE30 | Since: client
 */
export function setNuiFocus(hasFocus, hasCursor) {
    SetNuiFocus(hasFocus, hasCursor);
}
/**
 * No comment provided
 *
 * Hash: 0x55188D2D | Since: client
 */
export function setNetworkWalkMode(enabled) {
    SetNetworkWalkMode(enabled);
}
/**
 * Toggles the track being active. If disabled mission trains will not be able to spawn on this track and will look for the next closest track to spawn
 *
 * Hash: 0x4B41E84C | Since: client
 */
export function setTrackEnabled(track, enabled) {
    SetTrackEnabled(track, enabled);
}
/**
 * Set the z-index of the NUI resource.
 *
 * Hash: 0x3734AAFF | Since: client
 */
export function setNuiZindex(zIndex) {
    SetNuiZindex(zIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x8923DD42 | Since: client
 */
export function setVehicleCurrentGear(vehicle, gear) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleCurrentGear(_vehicle, gear);
}
/**
 * No comment provided
 *
 * Hash: 0x68CDFA60 | Since: client
 */
export function setTextJustification(justifyType) {
    SetTextJustification(justifyType);
}
/**
 * Sets the player's rich presence detail state for social platform providers to a specified string.
 *
 * Hash: 0x7BDCBD45 | Since: client
 */
export function setRichPresence() {
    return SetRichPresence();
}
/**
 * Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.
 *
 * Hash: 0xAB65ACEE | Since: client
 */
export function setRuntimeTexturePixel(tex, x, y, r, g, b, a) {
    SetRuntimeTexturePixel(tex, x, y, r, g, b, a);
}
/**
 * No comment provided
 *
 * Hash: 0xC108EE6F | Since: client
 */
export function setVehicleAlarmTimeLeft(vehicle, time) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleAlarmTimeLeft(_vehicle, time);
}
/**
 * No comment provided
 *
 * Hash: 0x3963D527 | Since: client
 */
export function setRuntimeTextureArgbData(tex, length) {
    return SetRuntimeTextureArgbData(tex, length);
}
/**
 * This completely disables pedestrian vehicles from reacting to sirens. They will not try to do any maneuver to evade.
 *
 * Hash: 0xB90BBC6E | Since: client
 */
export function setReactionToVehicleWithSirenDisabled(state) {
    SetReactionToVehicleWithSirenDisabled(state);
}
/**
 * No comment provided
 *
 * Hash: 0x97B2F9F8 | Since: client
 */
export function setTextChatEnabled(enabled) {
    return SetTextChatEnabled(enabled);
}
/**
 * No comment provided
 *
 * Hash: 0x6E0A422B | Since: client
 */
export function setTimecycleModifierVar(value1, value2) {
    return SetTimecycleModifierVar(value1, value2);
}
/**
 * No comment provided
 *
 * Hash: 0x1A963E58 | Since: client
 */
export function setVehicleGravityAmount(vehicle, gravity) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleGravityAmount(_vehicle, gravity);
}
/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 *
 * Hash: 0xC37F4CF9 | Since: client
 */
export function setVehicleHandlingInt(vehicle, value) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return SetVehicleHandlingInt(_vehicle, value);
}
/**
 * Sets the text font for the current text drawing command.
 *
 * Hash: 0xADA9255D | Since: client
 */
export function setTextFontForCurrentCommand(fontId) {
    SetTextFontForCurrentCommand(fontId);
}
/**
 * Override the limits on the number and types of melee combatants. The game is limited to at most ten combatants among the three types: primary, secondary, and observers.
 *
 * This native infers the number of observers based on the primary and secondary counts.
 *
 * Hash: 0x8E51EC29 | Since: client
 */
export function setPedMeleeCombatLimits(primaryCount, secondaryCount, populationPedCount) {
    SetPedMeleeCombatLimits(primaryCount, secondaryCount, populationPedCount);
}
/**
 * No comment provided
 *
 * Hash: 0x3A4566F4 | Since: client
 */
export function setVehicleNextGear(vehicle, nextGear) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleNextGear(_vehicle, nextGear);
}
/**
 * No comment provided
 *
 * Hash: 0x6F60AB54 | Since: client
 */
export function setTextWrap(start, end) {
    SetTextWrap(start, end);
}
/**
 * the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.
 * This function doesn't need to be called every frame, it works like a switcher.
 *
 * Hash: 0xFC02CAF6 | Since: client
 */
export function setPlayerTalkingOverride(player, state) {
    const _player = player instanceof Player ? player.localId() : player;
    SetPlayerTalkingOverride(_player, state);
}
/**
 * Sets the state of a track junction.
 *
 * Hash: 0x537B449D | Since: client
 */
export function setTrackJunctionActive(junctionIndex, state) {
    return SetTrackJunctionActive(junctionIndex, state);
}
/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 *
 * Hash: 0x12497890 | Since: client
 */
export function setVehicleHandlingVector(vehicle, value) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return SetVehicleHandlingVector(_vehicle, value);
}
/**
 * No comment provided
 *
 * Hash: 0x61CB74A0 | Since: client
 */
export function setTrainState(train, state) {
    const _train = train instanceof Vehicle ? train.localId() : train;
    SetTrainState(_train, state);
}
/**
 * Internal function for setting a state bag value.
 *
 * Hash: 0x8D50E33A | Since: shared
 */
export function setStateBagValue(valueLength, replicated) {
    return SetStateBagValue(valueLength, replicated);
}
/**
 * An alternative to [SET_PED_PRELOAD_PROP_DATA](#\_0x2B16A3BFF1FBCE49) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Hash: 0x14B5BBE0 | Since: client
 */
export function setPedCollectionPreloadPropData(ped, anchorPoint, propIndex, textureId) {
    const _ped = ped instanceof Ped ? ped.handle() : ped;
    return SetPedCollectionPreloadPropData(_ped, anchorPoint, propIndex, textureId);
}
/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0x488C86D2 | Since: client
 */
export function setVehicleHandlingFloat(vehicle, value) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return SetVehicleHandlingFloat(_vehicle, value);
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
 * Hash: 0xEAB8DB65 | Since: client
 */
export function setVehicleWheelieState(vehicle, state) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleWheelieState(_vehicle, state);
}
/**
 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 *
 * Hash: 0x5F3A3574 | Since: client
 */
export function setVehicleAutoRepairDisabled(vehicle, value) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleAutoRepairDisabled(_vehicle, value);
}
/**
 * Enables or disables whether train doors should be forced open whilst a player is inside the train. This is enabled by default in multiplayer.
 *
 * Hash: 0xD4D1BA63 | Since: client
 */
export function setTrainsForceDoorsOpen(forceOpen) {
    SetTrainsForceDoorsOpen(forceOpen);
}
/**
 * Purpose: The game's default values for these make shooting while traveling Left quite a bit slower than shooting while traveling right (This could be a game-balance thing?)
 *
 * Default Min: -45 Degrees
 * Default Max: 135 Degrees
 *
 * ```
 * \ ,- ~ ||~ - ,
 * , ' \    x   x    ' ,
 * ```
 *
 * ,      \    x    x   x  ,
 * ,         \  x     x      ,
 * ,            \     x    x  ,
 * ,              \      x    ,
 * ,                \   x     ,
 * ,                 \   x x ,
 * ,                  \  x ,
 * ,                 , '
 * ' - , \_ \_ \_ ,  '  \\
 *
 * If the transition angle is within the shaded portion (x), there will be no transition(Quicker)
 * The angle corresponds to where you are looking(North on the circle) vs. the heading of your Ped.
 * Note: For some reason,
 *
 * You can set these values to whatever you'd like with this native, but keep in mind that the transitional spin is only clockwise for some reason.
 *
 * I'd personally recommend something like -135/135
 *
 * Hash: 0xB300F03 | Since: client
 */
export function setPedTurningThresholds(min, max) {
    SetPedTurningThresholds(min, max);
}
/**
 * Sets the max speed for the train tracks. Used by ambient trains and for station calculations
 *
 * Hash: 0x37BFC732 | Since: client
 */
export function setTrackMaxSpeed(track, newSpeed) {
    SetTrackMaxSpeed(track, newSpeed);
}
/**
 * No comment provided
 *
 * Hash: 0x90D1CAD1 | Since: client
 */
export function setVehicleOilLevel(vehicle, level) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleOilLevel(_vehicle, level);
}
/**
 * No comment provided
 *
 * Hash: 0x2F70ACED | Since: client
 */
export function setVehicleClutch(vehicle, clutch) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleClutch(_vehicle, clutch);
}
/**
 * No comment provided
 *
 * Hash: 0xFFCCC2EA | Since: client
 */
export function setVehicleSteeringAngle(vehicle, angle) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleSteeringAngle(_vehicle, angle);
}
/**
 * No comment provided
 *
 * Hash: 0x6485615E | Since: client
 */
export function setVehicleTurboPressure(vehicle, pressure) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleTurboPressure(_vehicle, pressure);
}
/**
 * Sets the ratio that a door is open for on a train.
 *
 * Hash: 0x2468DBE8 | Since: client
 */
export function setTrainDoorOpenRatio(train, doorIndex, ratio) {
    const _train = train instanceof Vehicle ? train.localId() : train;
    SetTrainDoorOpenRatio(_train, doorIndex, ratio);
}
/**
 * Not sure what this changes, probably determines physical rim size in case the tire is blown.
 *
 * Hash: 0xF380E184 | Since: client
 */
export function setVehicleWheelRimColliderSize(vehicle, wheelIndex, value) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleWheelRimColliderSize(_vehicle, wheelIndex, value);
}
/**
 * Sets the maximum distance in which [\_SET_VEHICLE_NITRO_ENABLED](#\_0xC8E9B6B71B8E660D) PTFX are rendered. Distance is measured from the camera position.
 *
 * Hash: 0xA40CB822 | Since: client
 */
export function setVehicleNitroPtfxRange(range) {
    SetVehicleNitroPtfxRange(range);
}
/**
 * Set the vehicle's pitch bias. Only works on planes.
 *
 * Hash: 0x2A6CC9F2 | Since: client
 */
export function setVehiclePitchBias(vehicle, value) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehiclePitchBias(_vehicle, value);
}
/**
 * Toggles a train's ability to stop at stations
 *
 * Hash: 0xECB8B577 | Since: client
 */
export function setTrainStopAtStations(train, state) {
    const _train = train instanceof Vehicle ? train.localId() : train;
    SetTrainStopAtStations(_train, state);
}
/**
 * Set the vehicle's roll bias. Only works on planes.
 *
 * Hash: 0x264B45DE | Since: client
 */
export function setVehicleRollBias(vehicle, value) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleRollBias(_vehicle, value);
}
/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0x2BA40795 | Since: client
 */
export function setVehicleHandlingField(vehicle, value) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return SetVehicleHandlingField(_vehicle, value);
}
/**
 * No comment provided
 *
 * Hash: 0xEB46596F | Since: client
 */
export function setVehicleSteeringScale(vehicle, scale) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleSteeringScale(_vehicle, scale);
}
/**
 * Sets the rotation speed of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x35ED100D | Since: client
 */
export function setVehicleWheelRotationSpeed(vehicle, wheelIndex, speed) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleWheelRotationSpeed(_vehicle, wheelIndex, speed);
}
/**
 * No comment provided
 *
 * Hash: 0x20B1B3E6 | Since: client
 */
export function setVehicleHighGear(vehicle, gear) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleHighGear(_vehicle, gear);
}
/**
 * No comment provided
 *
 * Hash: 0xBA970511 | Since: client
 */
export function setVehicleFuelLevel(vehicle, level) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleFuelLevel(_vehicle, level);
}
/**
 * No comment provided
 *
 * Hash: 0x2A01A8FC | Since: client
 */
export function setVehicleCurrentRpm(vehicle, rpm) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleCurrentRpm(_vehicle, rpm);
}
/**
 * Sets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x85C85A3A | Since: client
 */
export function setVehicleWheelTractionVectorLength(vehicle, wheelIndex, length) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleWheelTractionVectorLength(_vehicle, wheelIndex, length);
}
/**
 * Sets custom vehicle xenon lights color, allowing to use RGB palette. The game will ignore lights color set by [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07) when custom color is active. This native is not synced between players. Requires xenon lights mod to be set on vehicle.
 *
 * Hash: 0x1683E7F0 | Since: client
 */
export function setVehicleXenonLightsCustomColor(vehicle, red, green, blue) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleXenonLightsCustomColor(_vehicle, red, green, blue);
}
/**
 * Sets the height of the vehicle's suspension.
 * This changes the same value set by Suspension in the mod shop.
 * Negatives values raise the car. Positive values lower the car.
 *
 * This is change is visual only. The collision of the vehicle will not move.
 *
 * Hash: 0xB3439A01 | Since: client
 */
export function setVehicleSuspensionHeight(vehicle, newHeight) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleSuspensionHeight(_vehicle, newHeight);
}
/**
 * No comment provided
 *
 * Hash: 0xA387D917 | Since: client
 */
export function setWaterQuadIsInvisible(waterQuad, isInvisible) {
    return SetWaterQuadIsInvisible(waterQuad, isInvisible);
}
/**
 * Sets whether the wheel is powered.
 * On all wheel drive cars this works to change which wheels receive power, but if a car's fDriveBiasFront doesn't send power to that wheel, it won't get power anyway. This can be fixed by changing the fDriveBiasFront with SET_VEHICLE_HANDLING_FLOAT.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in SET_VEHICLE_WHEEL_FLAGS.
 *
 * Hash: 0xBD5291A0 | Since: client
 */
export function setVehicleWheelIsPowered(vehicle, wheelIndex, powered) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleWheelIsPowered(_vehicle, wheelIndex, powered);
}
/**
 * Sets the vehicles gear ratio on choosen gear, reverse gear needs to be a negative float and forward moving gear needs to be a positive float. Refer to the examples if confused.
 *
 * Hash: 0x496EF2F2 | Since: client
 */
export function setVehicleGearRatio(vehicle, gear, ratio) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleGearRatio(_vehicle, gear, ratio);
}
/**
 * This native is a setter for [`GET_VEHICLE_HAS_FLAG`](#\_0xD85C9F57).
 *
 * Hash: 0x63AE1A34 | Since: client
 */
export function setVehicleFlag(vehicle, flagIndex, value) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return SetVehicleFlag(_vehicle, flagIndex, value);
}
/**
 * Sets the braking distance of the track. Used by trains to determine the point to slow down when entering a station.
 *
 * Hash: 0x77EB78D0 | Since: client
 */
export function setTrackBrakingDistance(track, brakingDistance) {
    SetTrackBrakingDistance(track, brakingDistance);
}
/**
 * Sets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xD2B9E90D | Since: client
 */
export function setVehicleWheelFlags(vehicle, wheelIndex, flags) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleWheelFlags(_vehicle, wheelIndex, flags);
}
/**
 * This native allows you to update the bounds of a specified water quad index.
 *
 * Hash: 0x80AD144C | Since: client
 */
export function setWaterQuadBounds(waterQuad, minX, minY, maxX, maxY) {
    return SetWaterQuadBounds(waterQuad, minX, minY, maxX, maxY);
}
/**
 * Disables autoswapping to another weapon when the current weapon runs out of ammo.
 *
 * Hash: 0x2A7B50E | Since: client
 */
export function setWeaponsNoAutoswap(state) {
    SetWeaponsNoAutoswap(state);
}
/**
 * Use along with SetVehicleWheelWidth to resize the wheels (this native sets the collider width affecting physics while SetVehicleWheelWidth will change visual width).
 *
 * Hash: 0x47BD0270 | Since: client
 */
export function setVehicleWheelTireColliderWidth(vehicle, wheelIndex, value) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleWheelTireColliderWidth(_vehicle, wheelIndex, value);
}
/**
 * Sets vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set size for non-default wheels).
 *
 * Hash: 0x53AB5C35 | Since: client
 */
export function setVehicleWheelSize(vehicle, size) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return SetVehicleWheelSize(_vehicle, size);
}
/**
 * Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).
 *
 * Hash: 0xB962D05C | Since: client
 */
export function setVehicleWheelTireColliderSize(vehicle, wheelIndex, value) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleWheelTireColliderSize(_vehicle, wheelIndex, value);
}
/**
 * No comment provided
 *
 * Hash: 0x6C93C4A9 | Since: client
 */
export function setVehicleEngineTemperature(vehicle, temperature) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleEngineTemperature(_vehicle, temperature);
}
/**
 * Sets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f
 *
 * Hash: 0xE80F4E31 | Since: client
 */
export function setVehicleWheelBrakePressure(vehicle, wheelIndex, pressure) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleWheelBrakePressure(_vehicle, wheelIndex, pressure);
}
/**
 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 *
 * Hash: 0xB9234AFB | Since: client
 */
export function shutdownLoadingScreenNui() {
    ShutdownLoadingScreenNui();
}
/**
 * No comment provided
 *
 * Hash: 0xB22ECEFD | Since: client
 */
export function setVehicleWheelHealth(vehicle, wheelIndex, health) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleWheelHealth(_vehicle, wheelIndex, health);
}
/**
 * directionX/Y should be constrained between -1.0 and 1.0
 * A positive value will create the wave starting at min and rolling towards max
 * A negative value will create the wave starting at max and rolling towards min
 * Applying both values allows you to make diagonal waves
 *
 * Hash: 0xFC9341A3 | Since: client
 */
export function setWaveQuadDirection(waveQuad, directionX, directionY) {
    return SetWaveQuadDirection(waveQuad, directionX, directionY);
}
/**
 * This native allows you to update the bounds of a specified water quad index.
 *
 * Hash: 0x1FCC1FAF | Since: client
 */
export function setWaveQuadBounds(waveQuad, minX, minY, maxX, maxY) {
    return SetWaveQuadBounds(waveQuad, minX, minY, maxX, maxY);
}
/**
 * Overrides a floating point value from `visualsettings.dat` temporarily.
 *
 * Hash: 0xD1D31681 | Since: client
 */
export function setVisualSettingFloat(value) {
    return SetVisualSettingFloat(value);
}
/**
 * Sets vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set width for non-default wheels).
 *
 * Hash: 0x64C3F1C0 | Since: client
 */
export function setVehicleWheelWidth(vehicle, width) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    return SetVehicleWheelWidth(_vehicle, width);
}
/**
 * Sets whether or not the weather should be owned by the network subsystem.
 *
 * To be able to use [\_SET_WEATHER_TYPE_TRANSITION](#\_0x578C752848ECFA0C), this has to be set to false.
 *
 * Hash: 0x2703D582 | Since: client
 */
export function setWeatherOwnedByNetwork(network) {
    SetWeatherOwnedByNetwork(network);
}
/**
 * Sets world clip boundaries for water quads file (water.xml, water_heistisland.xml)
 * Used internally by LOAD_GLOBAL_WATER_FILE
 *
 * Hash: 0x9FCD2EE6 | Since: client
 */
export function setWaterAreaClipRect(minX, minY, maxX, maxY) {
    SetWaterAreaClipRect(minX, minY, maxX, maxY);
}
/**
 * This native allows you to update the water quad type.
 *
 * Valid type definitions:
 *
 * *   **0** Square
 * *   **1** Right triangle where the 90 degree angle is at maxX, minY
 * *   **2** Right triangle where the 90 degree angle is at minX, minY
 * *   **3** Right triangle where the 90 degree angle is at minX, maxY
 * *   **4** Right triangle where the 90 degree angle is at maxY, maxY
 *
 * Hash: 0x50131EB2 | Since: client
 */
export function setWaterQuadType(waterQuad, _type) {
    return SetWaterQuadType(waterQuad, _type);
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
 * Hash: 0xBD6357D | Since: client
 */
export function setVehicleWheelXOffset(vehicle, wheelIndex, offset) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleWheelXOffset(_vehicle, wheelIndex, offset);
}
/**
 * No comment provided
 *
 * Hash: 0x80CC4C9E | Since: client
 */
export function setVehicleXmasSnowFactor(gripFactor) {
    SetVehicleXmasSnowFactor(gripFactor);
}
/**
 * Modifies the radius scale used in the simulation of wet cloth physics.
 * This affects how cloth behaves when wet, changing how it sticks or reacts to movement.
 *
 * Hash: 0xF1BD2CEF | Since: client
 */
export function setWetClothPinRadiusScale(scale) {
    SetWetClothPinRadiusScale(scale);
}
/**
 * No comment provided
 *
 * Hash: 0xF49797EB | Since: client
 */
export function setWaterQuadAlpha(waterQuad, a0, a1, a2, a3) {
    return SetWaterQuadAlpha(waterQuad, a0, a1, a2, a3);
}
/**
 * A setter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x9864312F | Since: client
 */
export function setWeaponRecoilShakeAmplitude(weaponHash, amplitude) {
    if (typeof weaponHash === 'string')
        weaponHash = game.getHashKey(weaponHash);
    SetWeaponRecoilShakeAmplitude(weaponHash, amplitude);
}
/**
 * A setter for the accuracy spread of a weapon.
 *
 * Hash: 0x598DD6AE | Since: client
 */
export function setWeaponAccuracySpread(weaponHash, spread) {
    if (typeof weaponHash === 'string')
        weaponHash = game.getHashKey(weaponHash);
    SetWeaponAccuracySpread(weaponHash, spread);
}
/**
 * No comment provided
 *
 * Hash: 0xE4174B7B | Since: client
 */
export function setWaveQuadAmplitude(waveQuad, amplitude) {
    return SetWaveQuadAmplitude(waveQuad, amplitude);
}
/**
 * No comment provided
 *
 * Hash: 0xC6C2171F | Since: client
 */
export function setVehicleWheelYRotation(vehicle, wheelIndex, value) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleWheelYRotation(_vehicle, wheelIndex, value);
}
/**
 * Will unregister and cleanup a registered NUI callback handler.
 *
 * Use along side the REGISTER_RAW_NUI_CALLBACK native.
 *
 * Hash: 0x7FB46432 | Since: client
 */
export function unregisterRawNuiCallback() {
    return UnregisterRawNuiCallback();
}
/**
 * No comment provided
 *
 * Hash: 0xC3FF42FF | Since: client
 */
export function setWaterQuadNoStencil(waterQuad, noStencil) {
    return SetWaterQuadNoStencil(waterQuad, noStencil);
}
/**
 * No comment provided
 *
 * Hash: 0x6292F7A8 | Since: client
 */
export function setWaterQuadLevel(waterQuad, level) {
    return SetWaterQuadLevel(waterQuad, level);
}
/**
 * This function undoes changes made by [`SET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE`](#\_0x68DFF2DD), restoring the original outline rendering behavior. The default render technique group is `unlit`.
 *
 * Hash: 0x8EB6EC38 | Since: client
 */
export function resetEntityDrawOutlineRenderTechnique() {
    ResetEntityDrawOutlineRenderTechnique();
}
/**
 * Sets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xC6146043 | Since: client
 */
export function setVehicleWheelPower(vehicle, wheelIndex, power) {
    const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
    SetVehicleWheelPower(_vehicle, wheelIndex, power);
}
/**
 * Disables the game's built-in auto-reloading.
 *
 * Hash: 0x311150E5 | Since: client
 */
export function setWeaponsNoAutoreload(state) {
    SetWeaponsNoAutoreload(state);
}
/**
 * No comment provided
 *
 * Hash: 0x12A330 | Since: shared
 */
export function stateBagHasKey() {
    return StateBagHasKey();
}
/**
 * No comment provided
 *
 * Hash: 0xD1FDCFC1 | Since: client
 */
export function setWaterQuadHasLimitedDepth(waterQuad, hasLimitedDepth) {
    return SetWaterQuadHasLimitedDepth(waterQuad, hasLimitedDepth);
}
/**
 * Returns whether or not the currently executing event was canceled.
 *
 * Hash: 0x58382A19 | Since: shared
 */
export function wasEventCanceled() {
    return WasEventCanceled();
}
/**
 * The backing function for TriggerServerEvent.
 *
 * Hash: 0x7FDD1128 | Since: client
 */
export function triggerServerEventInternal(payloadLength) {
    return TriggerServerEventInternal(payloadLength);
}
/**
 * Disables weapons aim blocking due to environment for local player.
 * For non-player peds [SET_PED_ENABLE_WEAPON_BLOCKING](#\_0x97A790315D3831FD) can be used.
 *
 * Hash: 0xDFD8F6DE | Since: client
 */
export function setWeaponsNoAimBlocking(state) {
    SetWeaponsNoAimBlocking(state);
}
/**
 * Leaves cursor mode. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xADECF19E | Since: client
 */
export function leaveCursorMode() {
    LeaveCursorMode();
}
/**
 * Enables the editor runtime mode, changing game behavior to track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xC383871D | Since: client
 */
export function enableEditorRuntime() {
    EnableEditorRuntime();
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
 * Hash: 0x2C3CDA93 | Since: client
 */
export function getMapdataEntityMatrix(mapDataHash, entityInternalIdx, matrixPtr) {
    return GetMapdataEntityMatrix(mapDataHash, entityInternalIdx, matrixPtr);
}
/**
 * Sets the render technique for drawing an entity's outline. This function allows you to specify a technique group name to control how the entity's outline is rendered in the game.
 *
 * List of known technique group's:
 *
 * ```
 * alt0
 * alt1
 * alt2
 * alt3
 * alt4
 * alt5
 * alt6
 * alt7
 * alt8
 * blit
 * cube
 * default
 * geometry
 * imposter
 * imposterdeferred
 * lightweight0
 * lightweight0CutOut
 * lightweight0CutOutTint
 * lightweight0WaterRefractionAlpha
 * lightweight4
 * lightweight4CutOut
 * lightweight4CutOutTint
 * lightweight4WaterRefractionAlpha
 * lightweight8
 * lightweight8CutOut
 * lightweight8CutOutTint
 * lightweight8WaterRefractionAlpha
 * lightweightHighQuality0
 * lightweightHighQuality0CutOut
 * lightweightHighQuality0WaterRefractionAlpha
 * lightweightHighQuality4
 * lightweightHighQuality4CutOut
 * lightweightHighQuality4WaterRefractionAlpha
 * lightweightHighQuality8
 * lightweightHighQuality8CutOut
 * lightweightHighQuality8WaterRefractionAlpha
 * lightweightNoCapsule4
 * lightweightNoCapsule8
 * multilight
 * tessellate
 * ui
 * unlit
 * waterreflection
 * waterreflectionalphaclip
 * waterreflectionalphacliptint
 * wdcascade
 * ```
 *
 * Hash: 0x68DFF2DD | Since: client
 */
export function setEntityDrawOutlineRenderTechnique() {
    return SetEntityDrawOutlineRenderTechnique();
}
/**
 * Returns the transient entity index for a specified mapdata/entity pair.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xEE43540D | Since: client
 */
export function getEntityIndexFromMapdata(mapdata, entity) {
    return GetEntityIndexFromMapdata(mapdata, entity);
}
/**
 * No comment provided
 *
 * Hash: 0xD264D4E1 | Since: client
 */
export function setWeatherCycleEntry(index, timeMult) {
    return SetWeatherCycleEntry(index, timeMult);
}
/**
 * Retrieves the map data entity handle.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x30AA6911 | Since: client
 */
export function getMapdataEntityHandle(mapDataHash, entityInternalIdx) {
    return GetMapdataEntityHandle(mapDataHash, entityInternalIdx);
}
/**
 * Sets an entity's matrix. Arguments are in the same order as with GET_ENTITY_MATRIX.
 *
 * Hash: 0xFB0639B | Since: client
 */
export function setEntityMatrix(entity, forwardX, forwardY, forwardZ, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ) {
    const _entity = entity instanceof Entity ? entity.handle() : entity;
    SetEntityMatrix(_entity, forwardX, forwardY, forwardZ, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ);
}
/**
 * Draws an outline around a given entity. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x76180407 | Since: client
 */
export function setEntityDrawOutline(entity, enabled) {
    const _entity = entity instanceof Entity ? entity.handle() : entity;
    SetEntityDrawOutline(_entity, enabled);
}
/**
 * Resets mapdata entity transform matrix to its original state.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x8143FA4F | Since: client
 */
export function resetMapdataEntityMatrix(mapDataHash, entityInternalIdx) {
    return ResetMapdataEntityMatrix(mapDataHash, entityInternalIdx);
}
/**
 * Sets variant of shader that will be used to draw entity outline.
 *
 * Variants are:
 *
 * *   **0**: Default value, gauss shader.
 * *   **1**: 2px wide solid color outline.
 * *   **2**: Fullscreen solid color except for entity.
 *
 * Hash: 0x5261A01A | Since: client
 */
export function setEntityDrawOutlineShader(shader) {
    SetEntityDrawOutlineShader(shader);
}
/**
 * The backing function for TriggerEvent.
 *
 * Hash: 0x91310870 | Since: shared
 */
export function triggerEventInternal(payloadLength) {
    return TriggerEventInternal(payloadLength);
}
/**
 * Draws a gizmo. This function supports SDK infrastructure and is not intended to be used directly from your code.
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
 * Hash: 0xEB2EDCA2 | Since: client
 */
export function drawGizmo(matrixPtr) {
    return DrawGizmo(matrixPtr);
}
/**
 * Gets the selected entity at the specified mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xAFE8D405 | Since: client
 */
export function selectEntityAtPos(fracX, fracY, hitFlags, precise) {
    return SelectEntityAtPos(fracX, fracY, hitFlags, precise);
}
/**
 * Retrieves the map data and entity handles from a specific entity.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xF6B815C5 | Since: client
 */
export function getEntityMapdataOwner(entity) {
    const _entity = entity instanceof Entity ? entity.handle() : entity;
    return GetEntityMapdataOwner(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xB3210203 | Since: shared
 */
export function endFindKvp(handle) {
    EndFindKvp(handle);
}
/**
 * The backing function for TriggerLatentServerEvent.
 *
 * Hash: 0x128737EA | Since: client
 */
export function triggerLatentServerEventInternal(payloadLength, bps) {
    return TriggerLatentServerEventInternal(payloadLength, bps);
}
/**
 * Returns the transient map data index for a specified hash.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xD29D8EDD | Since: client
 */
export function getMapdataFromHashKey(mapdataHandle) {
    if (typeof mapdataHandle === 'string')
        mapdataHandle = game.getHashKey(mapdataHandle);
    return GetMapdataFromHashKey(mapdataHandle);
}
/**
 * Gets the selected entity at the current mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x3DD8130F | Since: client
 */
export function selectEntityAtCursor(hitFlags, precise) {
    return SelectEntityAtCursor(hitFlags, precise);
}
/**
 * No comment provided
 *
 * Hash: 0xBD7BEBC5 | Since: shared
 */
export function findKvp(handle) {
    return FindKvp(handle);
}
/**
 * Disables the editor runtime mode, changing game behavior to not track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xB1622B17 | Since: client
 */
export function disableEditorRuntime() {
    DisableEditorRuntime();
}
/**
 * A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).
 *
 * Hash: 0x9ADD2938 | Since: shared
 */
export function setResourceKvpFloat(key, value) {
    return SetResourceKvpFloat(key, value);
}
/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
 *
 * Hash: 0x35BDCEEA | Since: shared
 */
export function getResourceKvpFloat(key) {
    return GetResourceKvpFloat(key);
}
/**
 * Enters cursor mode, suppressing mouse movement to the game and displaying a mouse cursor instead. This function supports
 * SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x780DA86 | Since: client
 */
export function enterCursorMode() {
    EnterCursorMode();
}
/**
 * Equivalent of [START_FIND_KVP](#\_0xDD379006), but for another resource than the current one.
 *
 * Hash: 0x8F2EECC3 | Since: client
 */
export function startFindExternalKvp(resource, prefix) {
    StartFindExternalKvp(resource, prefix);
}
/**
 * No comment provided
 *
 * Hash: 0x7389B5DF | Since: shared
 */
export function deleteResourceKvp(key) {
    DeleteResourceKvp(key);
}
/**
 * Nonsynchronous [DELETE_RESOURCE_KVP](#\_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x4152C90 | Since: shared
 */
export function deleteResourceKvpNoSync(key) {
    DeleteResourceKvpNoSync(key);
}
/**
 * Transiently updates the entity with the specified mapdata index and entity index.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xFC52CB91 | Since: client
 */
export function updateMapdataEntity(mapdata, entity, entityDef) {
    const _entityDef = entityDef instanceof Object ? entityDef.handle() : entityDef;
    UpdateMapdataEntity(mapdata, entity, _entityDef);
}
/**
 * Sets color for entity outline. `255, 0, 255, 255` by default.
 *
 * Hash: 0xB41A56C2 | Since: client
 */
export function setEntityDrawOutlineColor(red, green, blue, alpha) {
    SetEntityDrawOutlineColor(red, green, blue, alpha);
}
/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
 *
 * Hash: 0x557B586A | Since: shared
 */
export function getResourceKvpInt(key) {
    return GetResourceKvpInt(key);
}
/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938), but for a specified resource.
 *
 * Hash: 0x3CC98B25 | Since: client
 */
export function getExternalKvpFloat(resource, key) {
    return GetExternalKvpFloat(resource, key);
}
/**
 * Nonsynchronous [SET_RESOURCE_KVP](#\_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0xCF9A2FF | Since: shared
 */
export function setResourceKvpNoSync(key, value) {
    SetResourceKvpNoSync(key, value);
}
/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
 *
 * Hash: 0x5240DA5A | Since: shared
 */
export function getResourceKvpString(key) {
    return GetResourceKvpString(key);
}
/**
 * Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x3517BFBE | Since: shared
 */
export function setResourceKvpFloatNoSync(key, value) {
    SetResourceKvpFloatNoSync(key, value);
}
/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8), but for a specified resource.
 *
 * Hash: 0x12B8D689 | Since: client
 */
export function getExternalKvpInt(resource, key) {
    return GetExternalKvpInt(resource, key);
}
/**
 * No comment provided
 *
 * Hash: 0xDD379006 | Since: shared
 */
export function startFindKvp(prefix) {
    return StartFindKvp(prefix);
}
/**
 * A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).
 *
 * Hash: 0x21C7A35B | Since: shared
 */
export function setResourceKvp(key, value) {
    SetResourceKvp(key, value);
}
/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B), but for a specified resource.
 *
 * Hash: 0x9080363A | Since: client
 */
export function getExternalKvpString(resource, key) {
    return GetExternalKvpString(resource, key);
}
/**
 * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
 *
 * Hash: 0x6A2B1E8 | Since: shared
 */
export function setResourceKvpInt(key, value) {
    SetResourceKvpInt(value);
}
/**
 * Nonsynchronous [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x26AEB707 | Since: shared
 */
export function setResourceKvpIntNoSync(key, value) {
    SetResourceKvpIntNoSync(key, value);
}
export * from "@risinglife/fivem-shared";
