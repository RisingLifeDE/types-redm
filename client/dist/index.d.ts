import { Vector3, Entity, Ped, Player, Vehicle, Object } from '@risinglife/redm-shared';
/**
 * Creates an audio submix with the specified name, or gets the existing audio submix by that name.
 *
 * Hash: 0x658D2BC8 | Since: client
 */
export declare function createAudioSubmix(name: string): number;
/**
 * Removes vehicle xenon lights custom RGB color.
 *
 * Hash: 0x2867ED8C | Since: client
 */
export declare function clearVehicleXenonLightsCustomColor(vehicle: number | Vehicle): void;
/**
 * Cancels the currently executing event.
 *
 * Hash: 0xFA29D35D | Since: shared
 */
export declare function cancelEvent(): void;
/**
 * Destroys a DUI browser.
 *
 * Hash: 0xA085CB10 | Since: client
 */
export declare function destroyDui(duiObject: number): void;
/**
 * No comment provided
 *
 * Hash: 0x32CA01C3 | Since: client
 */
export declare function addTextEntry(entryKey: string, entryText: string): void;
/**
 * Adds the given model name hash to the list of valid models for the player ped's parachute pack.
 *
 * Hash: 0x2E86DEA5 | Since: client
 */
export declare function addAuthorizedParachutePackModel(modelNameHash: number): void;
/**
 * Commits the backing pixels to the specified runtime texture.
 *
 * Hash: 0x19D81F4E | Since: client
 */
export declare function commitRuntimeTexture(tex: number): void;
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
export declare function addConvarChangeListener(conVarFilter: string, handler: Function): number;
/**
 * Activates built-in timecycle editing tool.
 *
 * Hash: 0xEEB9B76A | Since: client
 */
export declare function activateTimecycleEditor(): void;
/**
 * Loads a minimap overlay from a GFx file in the current resource.
 *
 * Hash: 0xED0935B5 | Since: client
 */
export declare function addMinimapOverlayWithDepth(name: string, depth: number): number;
/**
 * No comment provided
 *
 * Hash: 0x1E86F206 | Since: shared
 */
export declare function deleteFunctionReference(referenceIdentity: string): void;
/**
 * Resets the screen's draw-origin which was changed by the function [`SET_DRAW_ORIGIN`](#\_0xE10198D5) back to `x=0, y=0`. See [`SET_DRAW_ORIGIN`](#\_0xE10198D5) for further information.
 *
 * Hash: 0xDD76B263 | Since: client
 */
export declare function clearDrawOrigin(): void;
/**
 * Creates a blank runtime texture.
 *
 * Hash: 0xFEC3766D | Since: client
 */
export declare function createRuntimeTexture(txd: number, txn: string, width: number, height: number): number;
/**
 * Creates a runtime texture from a DUI handle.
 *
 * Hash: 0xB135472B | Since: client
 */
export declare function createRuntimeTextureFromDuiHandle(txd: number, txn: string, duiHandle: string): number;
/**
 * Creates a runtime texture from the specified file in the current resource or a base64 data URL.
 *
 * Hash: 0x786D8BC3 | Since: client
 */
export declare function createRuntimeTextureFromImage(txd: number, txn: string, fileName: string): number;
/**
 * No comment provided
 *
 * Hash: 0x289DA860 | Since: client
 */
export declare function addTextEntryByHash(entryKey: number | string, entryText: string): void;
/**
 * Adds the given model name hash to the list of valid models for the player ped's parachute.
 *
 * Hash: 0x8AC7AE9 | Since: client
 */
export declare function addAuthorizedParachuteModel(modelNameHash: number): void;
/**
 * Loads a minimap overlay from a GFx file in the current resource.
 *
 * If you need to control the depth of overlay use [`ADD_MINIMAP_OVERLAY_WITH_DEPTH`](#\_0xED0935B5).
 *
 * Hash: 0x4AFD2499 | Since: client
 */
export declare function addMinimapOverlay(name: string): number;
/**
 * Adds an output for the specified audio submix.
 *
 * Hash: 0xAC6E290D | Since: client
 */
export declare function addAudioSubmixOutput(submixId: number, outputSubmixId: number): void;
/**
 * Create a clean timecycle modifier. See [`SET_TIMECYCLE_MODIFIER_VAR`](#\_0x6E0A422B) to add variables.
 *
 * Hash: 0x70FA2AFA | Since: client
 */
export declare function createTimecycleModifier(modifierName: string): number;
/**
 * No comment provided
 *
 * Hash: 0x54D636B3 | Since: client
 */
export declare function cloneTimecycleModifier(sourceModifierName: string, clonedModifierName: string): number;
/**
 * Experimental natives, please do not use in a live environment.
 *
 * Hash: 0xA66F8F75 | Since: client
 */
export declare function addReplaceTexture(origTxd: string, origTxn: string, newTxd: string, newTxn: string): void;
/**
 * No comment provided
 *
 * Hash: 0x3422291C | Since: client
 */
export declare function applyWeatherCycles(numEntries: number, msPerCycle: number): boolean;
/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 *
 * Hash: 0x4C89C0ED | Since: client
 */
export declare function callMinimapScaleformFunction(miniMap: number, fnName: string): boolean;
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
export declare function addStateBagChangeHandler(keyFilter: string, bagFilter: string, handler: Function): number;
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
export declare function createRuntimeTxd(name: string): number;
/**
 * Creates a DUI browser. This can be used to draw on a runtime texture using CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
 *
 * Hash: 0x23EAF899 | Since: client
 */
export declare function createDui(url: string, width: number, height: number): number;
/**
 * Break off vehicle wheel by index. The `leaveDebrisTrail` flag requires `putOnFire` to be true.
 *
 * Hash: 0xA274CADB | Since: client
 */
export declare function breakOffVehicleWheel(vehicle: number | Vehicle, wheelIndex: number, leaveDebrisTrail: boolean, deleteWheel: boolean, unknownFlag: boolean, putOnFire: boolean): void;
/**
 * Creates a volume where water effects do not apply.
 * Useful for preventing water collisions from flooding areas underneath them.
 * This has no effect on waterquads, only water created from drawables and collisions.
 * Don't create volumes when your local ped is swimming (e.g. use IS_PED_SWIMMING in your scripts before you call this)
 *
 * Hash: 0xEB1C6DD | Since: client
 */
export declare function createDryVolume(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): number;
/**
 * Internal function for ensuring an entity has a state bag.
 *
 * Hash: 0x3BB78F05 | Since: shared
 */
export declare function ensureEntityStateBag(entity: number | Entity): void;
/**
 * Draw a glow sphere this frame. Up to 256 per single frame.
 *
 * Hash: 0xBD25EC89 | Since: client
 */
export declare function drawGlowSphere(pos: Vector3, radius: number, colorR: number, colorG: number, colorB: number, intensity: number, invert: boolean, marker: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xDEDA4E50 | Since: client
 */
export declare function endFindObject(findHandle: number): void;
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
export declare function doorSystemGetActive(): number;
/**
 * No comment provided
 *
 * Hash: 0x9227415A | Since: client
 */
export declare function endFindVehicle(findHandle: number): void;
/**
 * Allows drawing advanced light effects, known as coronas, which support flares, volumetric lighting, and customizable glow properties.
 *
 * Hash: 0xFF44780E | Since: client
 */
export declare function drawCorona(pos: Vector3, size: number, red: number, green: number, blue: number, alpha: number, intensity: number, zBias: number, dirX: number, dirY: number, dirZ: number, viewThreshold: number, innerAngle: number, outerAngle: number, flags: number): void;
/**
 * No comment provided
 *
 * Hash: 0x77CC80DC | Since: shared
 */
export declare function doesTrainStopAtStations(train: number | Vehicle): boolean;
/**
 * Disables the specified `rawKeyIndex`, making it not trigger the regular `IS_RAW_KEY_*` natives.
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x8BCF0014 | Since: client
 */
export declare function disableRawKeyThisFrame(rawKeyIndex: number): boolean;
/**
 * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
 *
 * Hash: 0x561C060B | Since: shared
 */
export declare function executeCommand(commandString: string): void;
/**
 * No comment provided
 *
 * Hash: 0xABD19253 | Since: client
 */
export declare function drawPoly(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, red: number, green: number, blue: number, alpha: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9615C2AD | Since: client
 */
export declare function endFindPed(findHandle: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3C407D53 | Since: client
 */
export declare function endFindPickup(findHandle: number): void;
/**
 * Disables the game's world horizon lods rendering (see `farlods.#dd`).
 * Using the island hopper natives might also affect this state.
 *
 * Hash: 0xA9C92CDC | Since: client
 */
export declare function disableWorldhorizonRendering(state: boolean): void;
/**
 * In compare to `0x31DC8D3F216D8509` return true if texture its created when `0x31DC8D3F216D8509` return true if you put there any id in valid range
 *
 * Hash: 0x8B25BC20 | Since: client
 */
export declare function doesTextureExist(textureId: number): boolean;
/**
 * Like DRAW_RECT, but it's a line.
 *
 * Hash: 0xB856A90 | Since: client
 */
export declare function drawLine2d(x1: number, y1: number, x2: number, y2: number, width: number, r: number, g: number, b: number, a: number): void;
/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity(While riding in a car as a passenger)
 *
 * Hash: 0x5C140555 | Since: client
 */
export declare function disableVehiclePassengerIdleCamera(state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xF4E2079D | Since: shared
 */
export declare function duplicateFunctionReference(referenceIdentity: string): string;
/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity.
 *
 * Hash: 0x3D5AB7F0 | Since: client
 */
export declare function disableIdleCamera(state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x237613B3 | Since: client
 */
export declare function doorSystemGetSize(): number;
/**
 * Checks whether the vehicle consumes fuel. The check is done based on petrol tank volume and vehicle type. Bicycles and vehicles with petrol tank volume equal to zero (only bicycles by default) do not use fuel. All other vehicles do.
 *
 * You can customize petrol tank volume using [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolTankVolume`.
 *
 * Hash: 0xEF30A696 | Since: client
 */
export declare function doesVehicleUseFuel(vehicle: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB3426BCC | Since: client
 */
export declare function drawLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCD4D9DD5 | Since: client
 */
export declare function drawBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4E129DBF | Since: client
 */
export declare function findNextObject(findHandle: number, outEntity: number | Entity): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC53BB6D3 | Since: client
 */
export declare function doesTimecycleModifierHasVar(modifierName: string, varName: string): boolean;
/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 *
 * Hash: 0x8F57A89D | Since: client
 */
export declare function getCamMatrix(camera: number, rightVector: Vector3, forwardVector: Vector3, upVector: Vector3, position: Vector3): void;
/**
 * DRAW_RECT, but with a rotation. Seems to be broken.
 *
 * Hash: 0xEC37C168 | Since: client
 */
export declare function drawRectRotated(x: number, y: number, width: number, height: number, rotation: number, r: number, g: number, b: number, a: number): void;
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
export declare function getAllVehicleModels(): number;
/**
 * No comment provided
 *
 * Hash: 0xFF60E63 | Since: client
 */
export declare function getCalmingQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean;
/**
 * Returns all rope handles. The data returned adheres to the following layout:
 *
 * ```
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 *
 * Hash: 0x760A2D67 | Since: client
 */
export declare function getAllRopes(): number;
/**
 * No comment provided
 *
 * Hash: 0x15E55694 | Since: client
 */
export declare function findFirstVehicle(outEntity: number | Entity): number;
/**
 * This native returns the index of a calming quad if the given point is inside its bounds.
 *
 * Hash: 0x870E8B40 | Since: client
 */
export declare function getCalmingQuadAtCoords(x: number, y: number): number;
/**
 * No comment provided
 *
 * Hash: 0x8839120D | Since: client
 */
export declare function findNextVehicle(findHandle: number, outEntity: number | Entity): boolean;
/**
 * This native is not implemented.
 *
 * Hash: 0x9D65CAD2 | Since: client
 */
export declare function experimentalSaveCloneCreate(entity: number | Entity): string;
/**
 * Get all track nodes and their track ids within the radius of the specified coordinates.
 *
 * Hash: 0x59FC24A7 | Since: client
 */
export declare function getClosestTrackNodes(position: Vector3, radius: number): number;
/**
 * A getter for [SET_AMBIENT_VEHICLE_RANGE_MULTIPLIER_THIS_FRAME](#\_0x90B6DA738A9A25DA).
 *
 * Hash: 0x667EC929 | Since: client
 */
export declare function getAmbientVehicleRangeMultiplier(): number;
/**
 * This native is not implemented.
 *
 * Hash: 0x38D19210 | Since: client
 */
export declare function experimentalSaveCloneSync(entity: number | Entity): string;
/**
 * No comment provided
 *
 * Hash: 0xFB012961 | Since: client
 */
export declare function findFirstPed(outEntity: number | Entity): number;
/**
 * This native is not implemented.
 *
 * Hash: 0x6BC189AC | Since: client
 */
export declare function experimentalLoadCloneSync(entity: number | Entity, data: string): void;
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
export declare function getActivePlayers(): number;
/**
 * No comment provided
 *
 * Hash: 0xCEBFC42 | Since: client
 */
export declare function getCalmingQuadCount(): number;
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
export declare function getAspectRatio(): number;
/**
 * An internal function for converting a stack trace object to a string.
 *
 * Hash: 0xD70C3BCA | Since: shared
 */
export declare function formatStackTrace(traceData: number | Object): string;
/**
 * No comment provided
 *
 * Hash: 0xB0E3A058 | Since: client
 */
export declare function getCalmingQuadDampening(waterQuad: number, calmingQuadDampening: number): boolean;
/**
 * This native is not implemented.
 *
 * Hash: 0xD2CB95A3 | Since: client
 */
export declare function experimentalLoadCloneCreate(data: string, objectId: number, tree: string): number;
/**
 * No comment provided
 *
 * Hash: 0xFAA6CB5D | Since: client
 */
export declare function findFirstObject(outEntity: number | Entity): number;
/**
 * No comment provided
 *
 * Hash: 0x3FF9D340 | Since: client
 */
export declare function findFirstPickup(outEntity: number | Entity): number;
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
export declare function getAllTrackJunctions(): number;
/**
 * Forces the game snow pass to render.
 *
 * Hash: 0xE6E16170 | Since: client
 */
export declare function forceSnowPass(enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x4107EF0F | Since: client
 */
export declare function findNextPickup(findHandle: number, outEntity: number | Entity): boolean;
/**
 * A getter for [SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME](#\_0x0B919E1FB47CC4E0).
 *
 * Hash: 0xB550232D | Since: client
 */
export declare function getAmbientPedRangeMultiplier(): number;
/**
 * No comment provided
 *
 * Hash: 0xAB09B548 | Since: client
 */
export declare function findNextPed(findHandle: number, outEntity: number | Entity): boolean;
/**
 * Returns the peer address of the remote game server that the user is currently connected to.
 *
 * Hash: 0xEA11BFBA | Since: client
 */
export declare function getCurrentServerEndpoint(): string;
/**
 * No comment provided
 *
 * Hash: 0xC66CD90C | Since: client
 */
export declare function getFuelConsumptionState(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5550BF9F | Since: client
 */
export declare function getFuelConsumptionRateMultiplier(): number;
/**
 * No comment provided
 *
 * Hash: 0x12217D33 | Since: client
 */
export declare function getHudComponentSize(id: number): Vector3;
/**
 * This will have floating point inaccuracy.
 *
 * Hash: 0x9E666D | Since: shared
 */
export declare function getConvarFloat(varName: string, defaultValue: number): number;
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Returns the memory address of an entity.
 *
 * This native is intended for singleplayer debugging, and may not be available during multiplayer.
 *
 * Hash: 0x9A3144BC | Since: client
 */
export declare function getEntityAddress(entity: number | Entity): any;
/**
 * Returns the name of the currently executing resource.
 *
 * Hash: 0xE5E9EBBB | Since: shared
 */
export declare function getCurrentResourceName(): string;
/**
 * This native returns the currently used game's name.
 *
 * Hash: 0xACA18ECD | Since: client
 */
export declare function getCurrentGameName(): string;
/**
 * Can be used to get a console variable casted back to `int` (an integer value).
 *
 * Hash: 0x935C0AB2 | Since: shared
 */
export declare function getConvarInt(varName: string, default_: number): number;
/**
 * Can be used to get a console variable casted back to `bool`.
 *
 * Hash: 0x7E8EBFE5 | Since: shared
 */
export declare function getConvarBool(varName: string, defaultValue: boolean): boolean;
/**
 * Can be used to get a console variable of type `char*`, for example a string.
 *
 * Hash: 0x6CCD2564 | Since: shared
 */
export declare function getConvar(varName: string, default_: string): string;
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
export declare function getCurrentScreenResolution(width: number, height: number): void;
/**
 * A getter for [SET_GLOBAL_PASSENGER_MASS_MULTIPLIER](#\_0x3422291C).
 *
 * Hash: 0x78951816 | Since: client
 */
export declare function getGlobalPassengerMassMultiplier(): number;
/**
 * No comment provided
 *
 * Hash: 0xC68021B | Since: client
 */
export declare function getInteriorPortalEntityCount(interiorId: number, portalIndex: number): number;
/**
 * Returns the NUI window handle for a specified DUI browser object.
 *
 * Hash: 0x1655D41D | Since: client
 */
export declare function getDuiHandle(duiObject: number): string;
/**
 * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](#\_0x5BA35AAF).
 *
 * Hash: 0x4BDF1867 | Since: shared
 */
export declare function getEntityFromStateBagName(bagName: string): number;
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
export declare function getEntitiesInRadius(pos: Vector3, radius: number, entityType: number, sortByDistance: boolean, models: number | Object): number;
/**
 * Returns entity's archetype name, if available.
 *
 * Hash: 0x47B870F5 | Since: client
 */
export declare function getEntityArchetypeName(entity: number | Entity): string;
/**
 * No comment provided
 *
 * Hash: 0x9A0E1700 | Since: client
 */
export declare function getInteriorPortalEntityArchetype(interiorId: number, portalIndex: number, entityIndex: number): number;
/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 *
 * Hash: 0xCD949E20 | Since: client
 */
export declare function getHudComponentAlign(id: number, horizontalAlign: number, verticalAlign: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF772BB2C | Since: client
 */
export declare function getInteriorPortalCornerPosition(interiorId: number, portalIndex: number, cornerIndex: number, posX: number, posY: number, posZ: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD05BB8B1 | Since: client
 */
export declare function getInteriorPortalCount(interiorId: number): number;
/**
 * No comment provided
 *
 * Hash: 0x9F1C4383 | Since: shared
 */
export declare function getInstanceId(): number;
/**
 * No comment provided
 *
 * Hash: 0xF9E795DD | Since: client
 */
export declare function getInteriorRoomExtents(interiorId: number, roomIndex: number, bbMinX: number, bbMinY: number, bbMinZ: number, bbMaxX: number, bbMaxY: number, bbMaxZ: number): void;
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
 * Hash: 0x2B9D4F50 | Since: shared
 */
export declare function getGamePool(poolName: string): number;
/**
 * No comment provided
 *
 * Hash: 0xA91866BC | Since: client
 */
export declare function getHudComponentName(id: number): string;
/**
 * No comment provided
 *
 * Hash: 0xA2737C2C | Since: client
 */
export declare function getInteriorRoomCount(interiorId: number): number;
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
export declare function getGameBuildNumber(): number;
/**
 * No comment provided
 *
 * Hash: 0x322B1192 | Since: client
 */
export declare function getInteriorEntitiesExtents(interiorId: number, bbMinX: number, bbMinY: number, bbMinZ: number, bbMaxX: number, bbMaxY: number, bbMaxZ: number): void;
/**
 * An alternative to [GET_NUMBER_OF_PED_TEXTURE_VARIATIONS](#\_0x8F7156A3142A6BAD) that uses local collection indexing instead of the global one.
 *
 * Hash: 0xD2C15D7 | Since: client
 */
export declare function getNumberOfPedCollectionTextureVariations(ped: number | Ped, componentId: number, collection: string, drawableId: number): number;
/**
 * No comment provided
 *
 * Hash: 0xC74DA47C | Since: client
 */
export declare function getInteriorPortalFlag(interiorId: number, portalIndex: number): number;
/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection name instead of the global drawable index.
 *
 * Should be used together with [GET_PED_DRAWABLE_VARIATION_COLLECTION_LOCAL_INDEX](#\_0x9970386F).
 *
 * Hash: 0xBCE0AB63 | Since: client
 */
export declare function getPedDrawableVariationCollectionName(ped: number | Ped, componentId: number): string;
/**
 * No comment provided
 *
 * Hash: 0x6B7AF743 | Since: client
 */
export declare function getInteriorRoomFlag(interiorId: number, roomIndex: number): number;
/**
 * A getter for [SET_PED_HEAD_OVERLAY](#\_0x48F44967FA05CC1E) and [\_SET_PED_HEAD_OVERLAY_COLOR](#\_0x497BF74A7B9CB952) natives.
 *
 * Hash: 0xC46EE605 | Since: client
 */
export declare function getPedHeadOverlayData(ped: number | Ped, index: number, overlayValue: number, colourType: number, firstColour: number, secondColour: number, overlayOpacity: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2CAFD5E9 | Since: client
 */
export declare function getNetworkWalkMode(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9F9CEB63 | Since: client
 */
export declare function getInteriorPortalEntityRotation(interiorId: number, portalIndex: number, entityIndex: number, rotX: number, rotY: number, rotZ: number, rotW: number): void;
/**
 * No comment provided
 *
 * Hash: 0xAA9C141D | Since: client
 */
export declare function getInteriorPortalRoomFrom(interiorId: number, portalIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xBDBA226F | Since: client
 */
export declare function getNuiCursorPosition(x: number, y: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4D52FE5B | Since: shared
 */
export declare function getInvokingResource(): string;
/**
 * No comment provided
 *
 * Hash: 0x3F47F0E8 | Since: client
 */
export declare function getInteriorPortalRoomTo(interiorId: number, portalIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x77A435B0 | Since: client
 */
export declare function getInteriorPosition(interiorId: number, posX: number, posY: number, posZ: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9B7AB83C | Since: client
 */
export declare function getInteriorPortalEntityPosition(interiorId: number, portalIndex: number, entityIndex: number, posX: number, posY: number, posZ: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9DA2E811 | Since: client
 */
export declare function getInteriorPortalEntityFlag(interiorId: number, portalIndex: number, entityIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x5A039998 | Since: client
 */
export declare function getInteriorRotation(interiorId: number, rotx: number, rotY: number, rotZ: number, rotW: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE0EE05F8 | Since: client
 */
export declare function getInteriorRoomIndexByHash(interiorId: number, roomHash: number): number;
/**
 * No comment provided
 *
 * Hash: 0x11755DF2 | Since: client
 */
export declare function getInteriorRoomName(interiorId: number, roomIndex: number): string;
/**
 * An analogue of [GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS](#\_0x27561561732A7842) that returns number of drawable variations inside a single collection instead of the total number across all collections.
 *
 * Hash: 0x310D0271 | Since: client
 */
export declare function getNumberOfPedCollectionDrawableVariations(ped: number | Ped, componentId: number, collection: string): number;
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
export declare function getMinimapType(): number;
/**
 * An analogue of [GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS](#\_0x5FAF9754E789FB47) that returns number of prop variations inside a single collection instead of the total number across all collections.
 *
 * Hash: 0x3B6A13E1 | Since: client
 */
export declare function getNumberOfPedCollectionPropDrawableVariations(ped: number | Ped, anchorPoint: number, collection: string): number;
/**
 * An alternative to [GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS](#\_0xA6E7F1CEB523E171) that uses local collection indexing instead of the global one.
 *
 * Hash: 0x75CAF9CC | Since: client
 */
export declare function getNumberOfPedCollectionPropTextureVariations(ped: number | Ped, anchorPoint: number, collection: string, propIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x82BA3F88 | Since: client
 */
export declare function getInteriorRoomTimecycle(interiorId: number, roomIndex: number): number;
/**
 * A getter for [SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xEAE6DCC7EEE3DB1D).
 *
 * Hash: 0xFF72DF84 | Since: client
 */
export declare function getParkedVehicleDensityMultiplier(): number;
/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B)) for the given global drawable ID. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 *
 * Hash: 0x94EB1FE4 | Since: client
 */
export declare function getPedCollectionLocalIndexFromDrawable(ped: number | Ped, componentId: number, drawableId: number): number;
/**
 * Returns the zoom level data by index from mapzoomdata.meta file.
 *
 * Hash: 0x1363A998 | Since: client
 */
export declare function getMapZoomDataLevel(index: number, zoomScale: number, zoomSpeed: number, scrollSpeed: number, tilesX: number, tilesY: number): boolean;
/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER](#\_0xAE540335B4ABC4E2).
 *
 * Hash: 0x27E94EF8 | Since: client
 */
export declare function getPlayerMeleeWeaponDefenseModifier(playerId: number | string | Player): number;
/**
 * Returns name of collection under given index for the given Ped.
 *
 * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
 *
 * `GET_PED_COLLECTION_NAME` can be used together with [GET_PED_COLLECTIONS_COUNT](#\_0x45946359) to list all collections attached to Ped.
 *
 * Hash: 0xFED5D83A | Since: client
 */
export declare function getPedCollectionName(ped: number | Ped, index: number): string;
/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17)) for the given global prop index. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 *
 * Hash: 0xFBDB885F | Since: client
 */
export declare function getPedCollectionLocalIndexFromProp(ped: number | Ped, anchorPoint: number, propIndex: number): number;
/**
 * A getter for [\_SET_PED_FACE_FEATURE](#\_0x71A5C1DBA060049E). Returns 0.0 if fails to get.
 *
 * Hash: 0xBA352ADD | Since: client
 */
export declare function getPedFaceFeature(ped: number | Ped, index: number): number;
/**
 * Returns the world position the pointer is hovering on the pause map.
 *
 * Hash: 0xE5AF7A82 | Since: client
 */
export declare function getPauseMapPointerWorldPosition(): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x863F27B | Since: shared
 */
export declare function getNumResources(): number;
/**
 * No comment provided
 *
 * Hash: 0x4D97BCC7 | Since: client
 */
export declare function getPlayerServerId(player: number | string | Player): number;
/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 *
 * Hash: 0x776E864 | Since: shared
 */
export declare function getNumResourceMetadata(resourceName: string, metadataKey: string): number;
/**
 * A getter for [\_SET_PED_EYE_COLOR](#\_0x50B56988B170AFDF). Returns -1 if fails to get.
 *
 * Hash: 0xA47B860F | Since: client
 */
export declare function getPedEyeColor(ped: number | Ped): number;
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
export declare function getPedDecorations(ped: number | Ped): number;
/**
 * A getter for [SET_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x95E3D6257B166CF2).
 *
 * Hash: 0xF5A904F9 | Since: client
 */
export declare function getPedDensityMultiplier(): number;
/**
 * No comment provided
 *
 * Hash: 0x69E81E3D | Since: client
 */
export declare function getPedMovementClipset(ped: number | Ped): number;
/**
 * Returns number of variation collections available for the given Ped.
 *
 * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
 *
 * `GET_PED_COLLECTIONS_COUNT` can be used together with [GET_PED_COLLECTION_NAME](#\_0xFED5D83A) to list all collections attached to Ped.
 *
 * Hash: 0x45946359 | Since: client
 */
export declare function getPedCollectionsCount(ped: number | Ped): number;
/**
 * Gets a ped model's personality type.
 *
 * Hash: 0xFE08CAD6 | Since: client
 */
export declare function getPedModelPersonality(modelHash: number | string): number;
/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 *
 * Hash: 0x964BAB1D | Since: shared
 */
export declare function getResourceMetadata(resourceName: string, metadataKey: string, index: number): string;
/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection local drawable index (inside [GET_PED_DRAWABLE_VARIATION_COLLECTION_NAME](#\_0xBCE0AB63) collection) instead of the global drawable index.
 *
 * Hash: 0x9970386F | Since: client
 */
export declare function getPedDrawableVariationCollectionLocalIndex(ped: number | Ped, componentId: number): number;
/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 *
 * Hash: 0xA3EA2893 | Since: client
 */
export declare function getPedHairColor(ped: number | Ped): number;
/**
 * Gets collection name for the given global drawable ID. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) is used to get collection and local index (inside the given collection) of the drawable. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 *
 * Hash: 0xD6BBA48B | Since: client
 */
export declare function getPedCollectionNameFromDrawable(ped: number | Ped, componentId: number, drawableId: number): string;
/**
 * Gets the width of the specified runtime texture.
 *
 * Hash: 0xC9F55558 | Since: client
 */
export declare function getRuntimeTextureWidth(tex: number): number;
/**
 * Returns global drawable index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Drawables are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
 *
 * If all drawables from all collections are placed into one continuous array - the global index will correspond to the index of drawable in such array. Local index is index of drawable in this array relative to the start of the given collection.
 *
 * Hash: 0x280F1FC3 | Since: client
 */
export declare function getPedDrawableGlobalIndexFromCollection(ped: number | Ped, componentId: number, collection: string, drawableId: number): number;
/**
 * Returns global prop index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Props are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
 *
 * If all props from all collections are placed into one continuous array - the global index will correspond to the index of the prop in such array. Local index is index of the prop in this array relative to the start of the given collection.
 *
 * Hash: 0x2CB45CDC | Since: client
 */
export declare function getPedPropGlobalIndexFromCollection(ped: number | Ped, anchorPoint: number, collection: string, propIndex: number): number;
/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 *
 * Hash: 0x4B087305 | Since: client
 */
export declare function getPedHairHighlightColor(ped: number | Ped): number;
/**
 * No comment provided
 *
 * Hash: 0xD014AB79 | Since: client
 */
export declare function getPlayerMaxStamina(playerId: number | string | Player): number;
/**
 * Unlike [GET_PLAYER_INVINCIBLE](#\_0xB721981B2B939E07) this native gets both [SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED](#\_0x6BC97F4F4BB3C04B) and [SET_PLAYER_INVINCIBLE](#\_0x239528EACDC3E7DE) invincibility state.
 *
 * Hash: 0xF2E3912B | Since: client
 */
export declare function getPlayerInvincible2(player: number | string | Player): boolean;
/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection local prop index (inside [GET_PED_PROP_COLLECTION_NAME](#\_0x6B5653E4) collection) instead of the global prop index.
 *
 * Hash: 0xCD420AD1 | Since: client
 */
export declare function getPedPropCollectionLocalIndex(ped: number | Ped, anchorPoint: number): number;
/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection name instead of the global drawable index.
 *
 * Should be used together with [GET_PED_PROP_COLLECTION_LOCAL_INDEX](#\_0xCD420AD1).
 *
 * Hash: 0x6B5653E4 | Since: client
 */
export declare function getPedPropCollectionName(ped: number | Ped, anchorPoint: number): string;
/**
 * Returns the bone matrix of the specified bone id. usefull for entity attachment
 *
 * Hash: 0x9C5E7C9C | Since: client
 */
export declare function getPedBoneMatrix(ped: number | Ped, boneId: number, forwardVector: Vector3, rightVector: Vector3, upVector: Vector3, position: Vector3): void;
/**
 * Gets collection name for the given global prop index. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) is used to get collection and local index (inside the given collection) of the prop. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 *
 * Hash: 0x8ED0C17 | Since: client
 */
export declare function getPedCollectionNameFromProp(ped: number | Ped, anchorPoint: number, propIndex: number): string;
/**
 * A getter for [SET_PED_SWEAT](#\_0x27B0405F59637D1F).
 *
 * Hash: 0x44B91E94 | Since: client
 */
export declare function getPedSweat(ped: number | Ped): number;
/**
 * Gets the trains desired speed.
 *
 * Hash: 0xA4921EF5 | Since: shared
 */
export declare function getTrainCruiseSpeed(train: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xC62AAC98 | Since: client
 */
export declare function getVehicleAlarmTimeLeft(vehicle: number | Vehicle): number;
/**
 * On the server this will return the players source, on the client it will return the player handle.
 *
 * Hash: 0xA56135E0 | Since: shared
 */
export declare function getPlayerFromStateBagName(bagName: string): number;
/**
 * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
 *
 * Hash: 0x2A3D7CDA | Since: shared
 */
export declare function getPlayerWeaponDamageModifier(playerId: number | string | Player): number;
/**
 * A getter for [SET_PLAYER_VEHICLE_DEFENSE_MODIFIER](#\_0x4C60E6EFDAFF2462).
 *
 * Hash: 0x8326E7CD | Since: client
 */
export declare function getPlayerVehicleDefenseModifier(playerId: number | string | Player): number;
/**
 * Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.
 *
 * Hash: 0xCA0A085F | Since: client
 */
export declare function getRuntimeTexturePitch(tex: number): number;
/**
 * Gets a local client's Player ID from its server ID counterpart, assuming the passed `serverId` exists on the client.
 *
 * If no matching client is found, or an invalid value is passed over as the `serverId` native's parameter, the native result will be `-1`.
 *
 * It's worth noting that this native method can only retrieve information about clients that are culled to the connected client.
 *
 * Hash: 0x344EA166 | Since: client
 */
export declare function getPlayerFromServerId(serverId: number): number | string;
/**
 * Returns the value of a state bag key.
 *
 * Hash: 0x637F4C75 | Since: shared
 */
export declare function getStateBagValue(bagName: string, key: string): number;
/**
 * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
 *
 * Hash: 0xF1543251 | Since: shared
 */
export declare function getPlayerWeaponDefenseModifier(playerId: number | string | Player): number;
/**
 * A getter for [SET_PLAYER_VEHICLE_DAMAGE_MODIFIER](#\_0xA50E117CDDF82F0C).
 *
 * Hash: 0x78F27B1F | Since: client
 */
export declare function getPlayerVehicleDamageModifier(playerId: number | string | Player): number;
/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
 *
 * Hash: 0x8689A825 | Since: shared
 */
export declare function getPlayerMeleeWeaponDamageModifier(playerId: number | string | Player): number;
/**
 * No comment provided
 *
 * Hash: 0x1DAD4583 | Since: client
 */
export declare function getVehicleClutch(vehicle: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xE415EC5C | Since: client
 */
export declare function getPlayerStamina(playerId: number | string | Player): number;
/**
 * Returns the current state of the specified resource.
 *
 * Hash: 0x4039B485 | Since: shared
 */
export declare function getResourceState(resourceName: string): string;
/**
 * Gets the height of the specified runtime texture.
 *
 * Hash: 0x3574AACE | Since: client
 */
export declare function getRuntimeTextureHeight(tex: number): number;
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
export declare function getRopeFlags(rope: number): number;
/**
 * No comment provided
 *
 * Hash: 0x66D70EA3 | Since: client
 */
export declare function getRopeLengthChangeRate(rope: number): number;
/**
 * No comment provided
 *
 * Hash: 0xE7B12B54 | Since: client
 */
export declare function getVehicleCurrentRpm(vehicle: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x387246B7 | Since: shared
 */
export declare function getResourceByFindIndex(findIndex: number): string;
/**
 * No comment provided
 *
 * Hash: 0x9AAD420E | Since: client
 */
export declare function getVehicleDashboardSpeed(vehicle: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x78D864C7 | Since: shared
 */
export declare function getStateBagKeys(bagName: string): number;
/**
 * A getter for [SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xB3B3359379FE77D3).
 * Same as vehicle density multiplier.
 *
 * Hash: 0x7B0D00C5 | Since: client
 */
export declare function getRandomVehicleDensityMultiplier(): number;
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
export declare function getResourceCommands(resource: string): number;
/**
 * No comment provided
 *
 * Hash: 0x5F4CD0E2 | Since: client
 */
export declare function getTimecycleModifierIndexByName(modifierName: string): number;
/**
 * Returns the amount of variables available to be applied on timecycle modifiers.
 *
 * Hash: 0x838B34D8 | Since: client
 */
export declare function getTimecycleVarCount(): number;
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
export declare function getRegisteredCommands(): number;
/**
 * Gets the door count for the specified train.
 *
 * Hash: 0x99974721 | Since: client
 */
export declare function getTrainDoorCount(train: number | Vehicle): number;
/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 *
 * Hash: 0x3B90238 | Since: client
 */
export declare function getTimecycleVarDefaultValueByIndex(varIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xB4F4E566 | Since: client
 */
export declare function getVehicleCurrentGear(vehicle: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x60FB60FE | Since: client
 */
export declare function getTimecycleModifierVarCount(modifierName: string): number;
/**
 * No comment provided
 *
 * Hash: 0x2AB2E0F6 | Since: client
 */
export declare function getRopeUpdateOrder(rope: number): number;
/**
 * No comment provided
 *
 * Hash: 0xFE2A1D4D | Since: client
 */
export declare function getTimecycleModifierCount(): number;
/**
 * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
 *
 * Hash: 0x986B65FF | Since: shared
 */
export declare function getPlayerWeaponDefenseModifier2(playerId: number | string | Player): number;
/**
 * No comment provided
 *
 * Hash: 0x28CB8608 | Since: client
 */
export declare function getTimecycleModifierNameByIndex(modifierIndex: number): string;
/**
 * No comment provided
 *
 * Hash: 0xE874AB1D | Since: client
 */
export declare function getTimecycleModifierVarNameByIndex(modifierName: string, modifierVarIndex: number): string;
/**
 * A getter for [SET_TIMECYCLE_MODIFIER_STRENGTH](#\_0x82E7FFCD5B2326B3).
 *
 * Hash: 0xBE54124A | Since: client
 */
export declare function getTimecycleModifierStrength(): number;
/**
 * A getter for [SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x7A556143A1C03898).
 *
 * Hash: 0x77C598B2 | Since: client
 */
export declare function getScenarioPedDensityMultiplier(): number;
/**
 * Gets the speed the train is currently going.
 *
 * Hash: 0x428668B7 | Since: client
 */
export declare function getTrainSpeed(train: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xF1D1D689 | Since: client
 */
export declare function getVehicleHighGear(vehicle: number | Vehicle): number;
/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 *
 * Hash: 0x83070354 | Since: client
 */
export declare function getVehicleIndicatorLights(vehicle: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xF341E6CA | Since: client
 */
export declare function getRopeTimeMultiplier(rope: number): number;
/**
 * No comment provided
 *
 * Hash: 0x9AA339D | Since: shared
 */
export declare function getTrainTrackIndex(train: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xE015E854 | Since: client
 */
export declare function getTrainCurrentTrackNode(train: number | Vehicle): number;
/**
 * Returns the result of a shape test, also returning the material of any touched surface.
 *
 * When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.
 *
 * Unless the return value is 2, the other return values are undefined.
 *
 * Hash: 0x4301E10C | Since: client
 */
export declare function getShapeTestResultIncludingMaterial(shapeTestHandle: number, hit: boolean, endCoords: Vector3, surfaceNormal: Vector3, materialHash: number | string, entityHit: number | Entity): number;
/**
 * No comment provided
 *
 * Hash: 0xA7109E12 | Since: client
 */
export declare function getTimecycleModifierVar(modifierName: string, varName: string, value1: number, value2: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x34EE2BF3 | Since: client
 */
export declare function getTrackMaxSpeed(track: number): number;
/**
 * Gets the coordinates of a specific track node.
 *
 * Hash: 0x1628548E | Since: client
 */
export declare function getTrackNodeCoords(trackIndex: number, trackNode: number, coords: Vector3): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBF482A5E | Since: client
 */
export declare function getTrackBrakingDistance(track: number): number;
/**
 * No comment provided
 *
 * Hash: 0x3856D767 | Since: client
 */
export declare function getVehicleDashboardOilPressure(): number;
/**
 * No comment provided
 *
 * Hash: 0x1F5996AA | Since: client
 */
export declare function getVehicleDashboardOilTemp(): number;
/**
 * Gets the specified tracks node count.
 *
 * Hash: 0x896A0C11 | Since: client
 */
export declare function getTrackNodeCount(trackIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x6B6ADAFA | Since: client
 */
export declare function getVehicleDashboardTemp(): number;
/**
 * Gets a vehicle's multiplier used with a wheel's GET_VEHICLE_WHEEL_STEERING_ANGLE to determine the angle the wheel is rendered.
 *
 * Hash: 0x21C1DA8E | Since: client
 */
export declare function getVehicleDrawnWheelAngleMult(vehicle: number | Vehicle): number;
/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 *
 * Hash: 0xC6C55AAF | Since: client
 */
export declare function getTimecycleVarNameByIndex(varIndex: number): string;
/**
 * No comment provided
 *
 * Hash: 0xFABE67A9 | Since: client
 */
export declare function getVehicleDashboardVacuum(): number;
/**
 * No comment provided
 *
 * Hash: 0x81B50033 | Since: shared
 */
export declare function getTrainState(train: number | Vehicle): number;
/**
 * A getter for [SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x245A6883D966D537).
 *
 * Hash: 0xEF7C6538 | Since: client
 */
export declare function getVehicleDensityMultiplier(): number;
/**
 * Gets the ratio that a door is open for on a train.
 *
 * Hash: 0x40B16551 | Since: client
 */
export declare function getTrainDoorOpenRatio(train: number | Vehicle, doorIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xB48A1292 | Since: client
 */
export declare function getVehicleGravityAmount(vehicle: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xF4F495CB | Since: client
 */
export declare function getVehicleEngineTemperature(vehicle: number | Vehicle): number;
/**
 * Gets whether the wheel is powered.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in GET_VEHICLE_WHEEL_FLAGS.
 *
 * Hash: 0x3CCF1B49 | Since: client
 */
export declare function getVehicleWheelIsPowered(vehicle: number | Vehicle, wheelIndex: number): boolean;
/**
 * A getter for [SET_VEHICLE_CHEAT_POWER_INCREASE](#\_0xB59E4BD37AE292DB).
 *
 * Hash: 0xC3C93F28 | Since: client
 */
export declare function getVehicleCheatPowerIncrease(vehicle: number | Vehicle): number;
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
export declare function getVehicleWheelieState(vehicle: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x5F739BB8 | Since: client
 */
export declare function getVehicleFuelLevel(vehicle: number | Vehicle): number;
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
export declare function getVehicleDashboardLights(): number;
/**
 * No comment provided
 *
 * Hash: 0xDFFABA2A | Since: client
 */
export declare function getVehicleDashboardBoost(): number;
/**
 * Gets the direction the train is facing
 *
 * Hash: 0x8DAF79B6 | Since: shared
 */
export declare function getTrainDirection(train: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x954465DE | Since: client
 */
export declare function getVehicleSteeringScale(vehicle: number | Vehicle): number;
/**
 * Retrieves the current gear displayed on the dashboard of the vehicle the player is in, returned as a float. This value represents the gear shown in the instrument cluster, such as "R" (0.0) or positive values (e.g., 1.0, 2.0, etc.) for drive gears.
 *
 * Hash: 0x435C86F4 | Since: client
 */
export declare function getVehicleDashboardCurrentGear(): number;
/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 *
 * Hash: 0x27396C75 | Since: client
 */
export declare function getVehicleHandlingInt(vehicle: number | Vehicle, class_: string, fieldName: string): number;
/**
 * Gets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f when braking.
 *
 * Hash: 0x70FE2EFF | Since: client
 */
export declare function getVehicleWheelBrakePressure(vehicle: number | Vehicle, wheelIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x7E6E219C | Since: client
 */
export declare function getVehicleLightMultiplier(vehicle: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xDDB298AE | Since: client
 */
export declare function getVehicleNextGear(vehicle: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x19B0B2CE | Since: client
 */
export declare function getVehicleDashboardFuel(): number;
/**
 * No comment provided
 *
 * Hash: 0xF9716A11 | Since: client
 */
export declare function getVehicleDashboardRpm(): number;
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
export declare function getVehicleTypeRaw(vehicle: number | Vehicle): number;
/**
 * **Note**: Flags are not the same based on your `gamebuild`. Please see [here](https://docs.fivem.net/docs/game-references/vehicle-references/vehicle-flags) to see a complete list of all vehicle flags.
 *
 * Get vehicle.meta flag by index. Useful examples include `FLAG_LAW_ENFORCEMENT` (31), `FLAG_RICH_CAR` (36), `FLAG_IS_ELECTRIC` (43), `FLAG_IS_OFFROAD_VEHICLE` (48).
 *
 * Hash: 0xD85C9F57 | Since: client
 */
export declare function getVehicleHasFlag(vehicle: number | Vehicle, flagIndex: number): boolean;
/**
 * Gets vehicles gear ratio on choosen gear.
 *
 * Hash: 0x82E794B7 | Since: client
 */
export declare function getVehicleGearRatio(vehicle: number | Vehicle, gear: number): number;
/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 *
 * Hash: 0xFB341304 | Since: client
 */
export declare function getVehicleHandlingVector(vehicle: number | Vehicle, class_: string, fieldName: string): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x22EA3BD8 | Since: client
 */
export declare function getWaterQuadHasLimitedDepth(waterQuad: number, hasLimitedDepth: number): boolean;
/**
 * A getter for [MODIFY_VEHICLE_TOP_SPEED](#\_0x93A3996368C94158). Returns -1.0 if a modifier is not set.
 *
 * Hash: 0x998B7FEE | Since: client
 */
export declare function getVehicleTopSpeedModifier(vehicle: number | Vehicle): number;
/**
 * Gets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x3BCFEE14 | Since: client
 */
export declare function getVehicleWheelTractionVectorLength(vehicle: number | Vehicle, wheelIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xA7F04022 | Since: client
 */
export declare function getVehicleWheelSurfaceMaterial(vehicle: number | Vehicle, wheelIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x483B013C | Since: shared
 */
export declare function getVehicleHandbrake(vehicle: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFC7F8EF4 | Since: client
 */
export declare function getVehicleOilLevel(vehicle: number | Vehicle): number;
/**
 * Returns the effective handling data of a vehicle as a floating-point value.
 * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 *
 * Hash: 0x642FC12F | Since: client
 */
export declare function getVehicleHandlingFloat(vehicle: number | Vehicle, class_: string, fieldName: string): number;
/**
 * No comment provided
 *
 * Hash: 0xE02B51D7 | Since: client
 */
export declare function getVehicleTurboPressure(vehicle: number | Vehicle): number;
/**
 * Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 *
 * Hash: 0x4046B66 | Since: client
 */
export declare function getVehicleWheelSize(vehicle: number | Vehicle): number;
/**
 * This native returns the index of a wave quad if the given point is inside its bounds.
 *
 * Hash: 0x3F5A61A7 | Since: client
 */
export declare function getWaveQuadAtCoords(x: number, y: number): number;
/**
 * No comment provided
 *
 * Hash: 0xD1D07351 | Since: client
 */
export declare function getVehicleThrottleOffset(vehicle: number | Vehicle): number;
/**
 * Gets the rotation speed of a wheel.
 * This is used internally to calcuate GET_VEHICLE_WHEEL_SPEED.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xEA1859E5 | Since: client
 */
export declare function getVehicleWheelRotationSpeed(vehicle: number | Vehicle, wheelIndex: number): number;
/**
 * Gets steering angle of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xA0867448 | Since: client
 */
export declare function getVehicleWheelSteeringAngle(vehicle: number | Vehicle, wheelIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xEDF4B0FC | Since: client
 */
export declare function getVehicleNumberOfWheels(vehicle: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x1DEDBD77 | Since: client
 */
export declare function getWaterQuadIsInvisible(waterQuad: number, isInvisible: number): boolean;
/**
 * Gets the current suspension compression of a wheel.
 * Returns a positive value. 0 means the suspension is fully extended, the wheel is off the ground.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x2B48175B | Since: client
 */
export declare function getVehicleWheelSuspensionCompression(vehicle: number | Vehicle, wheelIndex: number): number;
/**
 * Gets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xD203287 | Since: client
 */
export declare function getVehicleWheelPower(vehicle: number | Vehicle, wheelIndex: number): number;
/**
 * A getter for [SET_WEAPON_ANIMATION_OVERRIDE](#\_0x1055AC3A667F09D9).
 *
 * Hash: 0x63ED2E7 | Since: client
 */
export declare function getWeaponAnimationOverride(ped: number | Ped): number;
/**
 * A getter for `CWeaponAccuracyModifier` in a weapon component.
 *
 * Hash: 0xC693E278 | Since: client
 */
export declare function getWeaponComponentAccuracyModifier(componentHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x54A677F5 | Since: client
 */
export declare function getVehicleWheelHealth(vehicle: number | Vehicle, wheelIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xCEE21AB2 | Since: client
 */
export declare function getVehicleWheelRimColliderSize(vehicle: number | Vehicle, wheelIndex: number): number;
/**
 * A getter for [SET_VEHICLE_XMAS_SNOW_FACTOR](#\_0x80CC4C9E).
 *
 * Hash: 0x16605B30 | Since: client
 */
export declare function getVehicleXmasSnowFactor(): number;
/**
 * Returns vehicle xenon lights custom RGB color values. Do note this native doesn't return non-RGB colors that was set with [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07).
 *
 * Hash: 0xC715F730 | Since: client
 */
export declare function getVehicleXenonLightsCustomColor(vehicle: number | Vehicle, red: number, green: number, blue: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1382FCEA | Since: shared
 */
export declare function getVehicleSteeringAngle(vehicle: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x9250C76 | Since: client
 */
export declare function getWaveQuadCount(): number;
/**
 * No comment provided
 *
 * Hash: 0xE0BA9FE6 | Since: client
 */
export declare function getVehicleWheelTireColliderSize(vehicle: number | Vehicle, wheelIndex: number): number;
/**
 * *level is defined as "z" in water.xml*
 *
 * Hash: 0x6523816B | Since: client
 */
export declare function getWaterQuadLevel(waterQuad: number, waterQuadLevel: number): boolean;
/**
 * A getter for `ReticuleHash` in a weapon scope component.
 *
 * Hash: 0xF9AB9297 | Since: client
 */
export declare function getWeaponComponentReticuleHash(componentHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x2EA4AFFE | Since: client
 */
export declare function getVehicleWheelYRotation(vehicle: number | Vehicle, wheelIndex: number): number;
/**
 * A getter for `CameraHash` in a weapon scope component.
 *
 * Hash: 0xACB7E68F | Since: client
 */
export declare function getWeaponComponentCameraHash(componentHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x14088095 | Since: client
 */
export declare function getWaterQuadAlpha(waterQuad: number, a0: number, a1: number, a2: number, a3: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEF65929C | Since: client
 */
export declare function getVehicleWheelTireColliderWidth(vehicle: number | Vehicle, wheelIndex: number): number;
/**
 * Gets speed of a wheel at the tyre.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x149C9DA0 | Since: client
 */
export declare function getVehicleWheelSpeed(vehicle: number | Vehicle, wheelIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xCCE49A1C | Since: client
 */
export declare function getWaveQuadDirection(waveQuad: number, directionX: number, directionY: number): boolean;
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
export declare function getVehicleType(vehicle: number | Vehicle): string;
/**
 * This native returns the index of a water quad if the given point is inside its bounds.
 *
 * *If you also want to check for water level, check out [`GetWaterQuadAtCoords_3d`](#\_0xF8E03DB8)*
 *
 * Hash: 0x17321452 | Since: client
 */
export declare function getWaterQuadAtCoords(x: number, y: number): number;
/**
 * No comment provided
 *
 * Hash: 0x42E9A06A | Since: client
 */
export declare function getWaterQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean;
/**
 * Gets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xC70FA0C7 | Since: client
 */
export declare function getVehicleWheelFlags(vehicle: number | Vehicle, wheelIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x6F4ACBA | Since: client
 */
export declare function getWaterQuadNoStencil(waterQuad: number, noStencil: number): boolean;
/**
 * A getter for [\_SET_WEAPON_DAMAGE_MODIFIER](#\_0x4757F00BC6323CFE).
 *
 * Hash: 0xD979143 | Since: client
 */
export declare function getWeaponDamageModifier(weaponHash: number | string): number;
/**
 * Returns the offset of the specified wheel relative to the wheel's axle center.
 *
 * Hash: 0xCC90CBCA | Since: client
 */
export declare function getVehicleWheelXOffset(vehicle: number | Vehicle, wheelIndex: number): number;
/**
 * A getter for [SET_VISUAL_SETTING_FLOAT](#\_0xD1D31681).
 *
 * Hash: 0x15346B4D | Since: client
 */
export declare function getVisualSettingFloat(name: string): number;
/**
 * Returns true if the minimap is currently expanded. False if it's the normal minimap state.
 * Use [`IsBigmapFull`](#\_0x66EE14B2) to check if the full map is currently revealed on the minimap.
 *
 * Hash: 0xFFF65C63 | Since: client
 */
export declare function isBigmapActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x66EE14B2 | Since: client
 */
export declare function isBigmapFull(): boolean;
/**
 * A getter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x5E1AF5F | Since: client
 */
export declare function getWeaponRecoilShakeAmplitude(weaponHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xB1884159 | Since: client
 */
export declare function getWaterQuadCount(): number;
/**
 * An alternative to [IS_PED_COMPONENT_VARIATION_VALID](#\_0xE825F6B6CEA7671D) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0xCA63A52A | Since: client
 */
export declare function isPedCollectionComponentVariationValid(ped: number | Ped, componentId: number, collection: string, drawableId: number, textureId: number): boolean;
/**
 * A getter for the accuracy spread of a weapon.
 *
 * Hash: 0x5343721 | Since: client
 */
export declare function getWeaponAccuracySpread(weaponHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xF86136DB | Since: client
 */
export declare function getWaveQuadBounds(waveQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean;
/**
 * A getter for `CWeaponFallOffModifier` damage modifier value in a weapon component.
 *
 * Hash: 0xE134FB8D | Since: client
 */
export declare function getWeaponComponentRangeDamageModifier(componentHash: number | string): number;
/**
 * Returns the current NUI focus state previously set with `SET_NUI_FOCUS`.
 *
 * Hash: 0x98545E6D | Since: client
 */
export declare function isNuiFocused(): boolean;
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
export declare function getWaterQuadType(waterQuad: number, waterType: number): boolean;
/**
 * Returns whether or not a browser is created for a specified DUI browser object.
 *
 * Hash: 0x7AAC3B4C | Since: client
 */
export declare function isDuiAvailable(duiObject: number): boolean;
/**
 * Returns whether or not the specific minimap overlay has loaded.
 *
 * Hash: 0xF7535F32 | Since: client
 */
export declare function hasMinimapOverlayLoaded(id: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` was released, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x72B66C09 | Since: client
 */
export declare function isDisabledRawKeyReleased(rawKeyIndex: number): boolean;
/**
 * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
 *
 * Hash: 0xEDBE6ADD | Since: shared
 */
export declare function isEntityPositionFrozen(entity: number | Entity): boolean;
/**
 * Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 *
 * Hash: 0x9C7B59F9 | Since: client
 */
export declare function getVehicleWheelWidth(vehicle: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x865139A3 | Since: client
 */
export declare function getWaveQuadAmplitude(waveQuad: number, waveQuadAmplitude: number): boolean;
/**
 * Gets whether or not this is the CitizenFX server.
 *
 * Hash: 0xCF24C52E | Since: shared
 */
export declare function isDuplicityVersion(): boolean;
/**
 * This alternative implementation of [`GetWaterQuadAtCoords`](#\_0x17321452) also checks the height of the water level.
 *
 * Hash: 0xF8E03DB8 | Since: client
 */
export declare function getWaterQuadAtCoords3d(pos: Vector3): number;
/**
 * A getter for `CWeaponDamageModifier` in a weapon component.
 *
 * Hash: 0x4A0E3855 | Since: client
 */
export declare function getWeaponComponentDamageModifier(componentHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xC767B581 | Since: client
 */
export declare function isPedComponentVariationGen9Exclusive(ped: number | Ped, componentId: number, drawableId: number): boolean;
/**
 * A getter for `ClipSize` in a weapon component.
 *
 * Hash: 0xE14CF665 | Since: client
 */
export declare function getWeaponComponentClipSize(componentHash: number | string): number;
/**
 * Converts a screen coordinate into its relative world coordinate.
 *
 * Hash: 0xC81D0659 | Since: client
 */
export declare function getWorldCoordFromScreenCoord(screenX: number, screenY: number, worldVector: Vector3, normalVector: Vector3): void;
/**
 * Gets if the specified `rawKeyIndex` is up, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x2C033875 | Since: client
 */
export declare function isDisabledRawKeyUp(rawKeyIndex: number): boolean;
/**
 * An alternative to [IS_PED_COMPONENT_VARIATION_GEN9\_EXCLUSIVE](#\_0xC767B581) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x33B2AFA2 | Since: client
 */
export declare function isPedCollectionComponentVariationGen9Exclusive(ped: number | Ped, componentId: number, collection: string, drawableId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x37CF52CE | Since: shared
 */
export declare function isPrincipalAceAllowed(principal: string, object: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBB340D04 | Since: shared
 */
export declare function isVehicleEngineStarting(vehicle: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA7DAF7C | Since: client
 */
export declare function isVehicleWanted(vehicle: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7EBB9929 | Since: shared
 */
export declare function isAceAllowed(object: string): boolean;
/**
 * Gets if the specified `rawKeyIndex` is pressed on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x69F7C29E | Since: client
 */
export declare function isRawKeyPressed(rawKeyIndex: number): boolean;
/**
 * Checks if keyboard input is enabled during NUI focus using `SET_NUI_FOCUS_KEEP_INPUT`.
 *
 * Hash: 0x39C9DC92 | Since: client
 */
export declare function isNuiFocusKeepingInput(): boolean;
/**
 * Gets if the specified `rawKeyIndex` is pressed, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x1F7CBBAA | Since: client
 */
export declare function isDisabledRawKeyPressed(rawKeyIndex: number): boolean;
/**
 * A getter for `CWeaponFallOffModifier` range modifier value in a weapon component.
 *
 * Hash: 0x2FD0BC1B | Since: client
 */
export declare function getWeaponComponentRangeModifier(componentHash: number | string): number;
/**
 * Getter for [SET_TRACK_ENABLED](#\_0x4B41E84C)
 *
 * Hash: 0x31E695CB | Since: client
 */
export declare function isTrackEnabled(track: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` was just released on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0xEAA50861 | Since: client
 */
export declare function isRawKeyReleased(rawKeyIndex: number): boolean;
/**
 * Check whether specified channel exists on the Mumble server.
 *
 * Hash: 0xCC8CA25 | Since: client
 */
export declare function mumbleDoesChannelExist(channel: number): boolean;
/**
 * Getter for [BREAK_OFF_VEHICLE_WHEEL](?\_0xA274CADB).
 *
 * Hash: 0xCF1BC668 | Since: client
 */
export declare function isVehicleWheelBrokenOff(vehicle: number | Vehicle, wheelIndex: number): boolean;
/**
 * Gets if the specified `rawKeyIndex` is pressed down, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x36366EC3 | Since: client
 */
export declare function isDisabledRawKeyDown(rawKeyIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF849ED67 | Since: client
 */
export declare function isVehiclePreviouslyOwnedByPlayer(vehicle: number | Vehicle): boolean;
/**
 * Removes the specified voice channel from the user's voice targets.
 *
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_CHANNEL](#\_0x4D386C9E)
 *
 * Hash: 0x268DB867 | Since: client
 */
export declare function mumbleRemoveVoiceTargetChannel(targetId: number, channel: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF9933BF4 | Since: client
 */
export declare function isVehicleNeedsToBeHotwired(vehicle: number | Vehicle): boolean;
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Returns whether an asynchronous streaming file registration completed.
 *
 * Hash: 0xA194934D | Since: client
 */
export declare function isStreamingFileReady(registerAs: string): boolean;
/**
 * Getter for [SWITCH_TRAIN_TRACK](#\_0xFD813BB7DB977F20). Determines if ambient trains are able to spawn on this track.
 *
 * Hash: 0xE0C53765 | Since: client
 */
export declare function isTrackSwitchedOff(track: number): boolean;
/**
 * Starts listening to the specified channel, when available.
 *
 * Hash: 0xC79F44BF | Since: client
 */
export declare function mumbleAddVoiceChannelListen(channel: number): void;
/**
 * Sets the current Mumble voice target ID to broadcast voice to.
 *
 * Hash: 0x960A4A95 | Since: client
 */
export declare function mumbleSetVoiceTarget(targetId: number): void;
/**
 * Clears channels from the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x5EA72E76 | Since: client
 */
export declare function mumbleClearVoiceTargetChannels(targetId: number): void;
/**
 * Gets if the specified `rawKeyIndex` is pressed down on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0xD95A7387 | Since: client
 */
export declare function isRawKeyDown(rawKeyIndex: number): boolean;
/**
 * Adds the specified channel to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x4D386C9E | Since: client
 */
export declare function mumbleAddVoiceTargetChannel(targetId: number, channel: number): void;
/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x32C5355A | Since: client
 */
export declare function mumbleAddVoiceTargetPlayer(targetId: number, player: number | string | Player): void;
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
export declare function mumbleSetAudioInputIntent(intentHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xA411F72C | Since: client
 */
export declare function isVehicleInteriorLightOn(vehicle: number | Vehicle): boolean;
/**
 * Clears the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x8555DCBA | Since: client
 */
export declare function mumbleClearVoiceTarget(targetId: number): void;
/**
 * Gets if the specified `rawKeyIndex` is up  on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x36F4E505 | Since: client
 */
export declare function isRawKeyUp(rawKeyIndex: number): boolean;
/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 *
 * Hash: 0x76A9EE1F | Since: shared
 */
export declare function loadResourceFile(resourceName: string, fileName: string): string;
/**
 * No comment provided
 *
 * Hash: 0xE820BC10 | Since: client
 */
export declare function mumbleIsActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x33EEF97F | Since: client
 */
export declare function mumbleIsPlayerTalking(player: number | string | Player): boolean;
/**
 * Overrides the output volume for a particular player on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 *
 * Set to -1.0 to reset the Volume override.
 *
 * Hash: 0x61C309E3 | Since: client
 */
export declare function mumbleSetVolumeOverride(player: number | string | Player, volume: number): void;
/**
 * Changes the Mumble server address to connect to, and reconnects to the new address.
 *
 * Setting the address to an empty string and the port to -1 will reset to the built in FXServer Mumble Implementation.
 *
 * Hash: 0xE6EB2CD8 | Since: client
 */
export declare function mumbleSetServerAddress(address: string, port: number): void;
/**
 * No comment provided
 *
 * Hash: 0x84E02A32 | Since: client
 */
export declare function mumbleGetTalkerProximity(): number;
/**
 * No comment provided
 *
 * Hash: 0x74E927B0 | Since: client
 */
export declare function mumbleSetTalkerProximity(value: number): void;
/**
 * Sets the current output distance. The player will be able to hear other players talking within this distance.
 *
 * Hash: 0x74C597D9 | Since: client
 */
export declare function mumbleSetAudioOutputDistance(distance: number): void;
/**
 * Sets the current input distance. The player will be able to talk to other players within this distance.
 *
 * Hash: 0x1B1052E2 | Since: client
 */
export declare function mumbleSetAudioInputDistance(distance: number): void;
/**
 * Returns the owner ID of the specified entity.
 *
 * Hash: 0x526FEE31 | Since: shared
 */
export declare function networkGetEntityOwner(entity: number | Entity): number;
/**
 * No comment provided
 *
 * Hash: 0xBF847807 | Since: client
 */
export declare function mumbleClearVoiceChannel(): void;
/**
 * Clears players from the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x912E21DA | Since: client
 */
export declare function mumbleClearVoiceTargetPlayers(targetId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDC921211 | Since: client
 */
export declare function isVehicleAlarmSet(vehicle: number | Vehicle): boolean;
/**
 * Returns the mumble voice channel from a player's server id.
 *
 * Hash: 0x221C09F1 | Since: client
 */
export declare function mumbleGetVoiceChannelFromServerId(serverId: number): number;
/**
 * Removes the specified player from the user's voice targets.
 *
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER](#\_0x32C5355A)
 *
 * Hash: 0x88CD646F | Since: client
 */
export declare function mumbleRemoveVoiceTargetPlayer(targetId: number, player: number | string | Player): void;
/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x25F2B65F | Since: client
 */
export declare function mumbleAddVoiceTargetPlayerByServerId(targetId: number, serverId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8737EEE8 | Since: client
 */
export declare function mumbleSetVoiceChannel(channel: number): void;
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a set of archetypes with the game engine. These should match `CBaseArchetypeDef` class information from the game.
 *
 * Hash: 0x3C2F9037 | Since: client
 */
export declare function registerArchetypes(factory: Function): void;
/**
 * Sets whether peds can stand on top of *all* vehicles without falling off.
 *
 * Note this flag is not replicated automatically, you will have to manually do so.
 *
 * Hash: 0x90A9E0B2 | Since: client
 */
export declare function overridePedsCanStandOnTopFlag(flag: boolean): void;
/**
 * Scope exit for profiler.
 *
 * Hash: 0xB39CA35C | Since: shared
 */
export declare function profilerExitScope(): void;
/**
 * Registers a specified font name for use with text draw commands.
 *
 * Hash: 0xACF6D8EE | Since: client
 */
export declare function registerFontId(fontName: string): number;
/**
 * No comment provided
 *
 * Hash: 0xD932A3F3 | Since: client
 */
export declare function mumbleSetActive(state: boolean): void;
/**
 * Define the xml in a resources fxmanifest, under the file(s) section.
 *
 * Hash: 0xF5102568 | Since: client
 */
export declare function loadWaterFromPath(resourceName: string, fileName: string): boolean;
/**
 * Registers a key mapping for the current resource.
 *
 * See the related [cookbook post](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/) for more information.
 *
 * Below you can find some examples on how to create these keybindings as well as the alternate keybinding syntax, which is preceded by `~!` to indicate that it's an alternate key.
 *
 * Hash: 0xD7664FD1 | Since: client
 */
export declare function registerKeyMapping(commandString: string, description: string, defaultMapper: string, defaultParameter: string): void;
/**
 * Overrides whether or not peds can stand on top of the specified vehicle.
 *
 * Note this flag is not replicated automatically, you will have to manually do so.
 *
 * Hash: 0x7FA03E76 | Since: client
 */
export declare function overrideVehiclePedsCanStandOnTopFlag(vehicle: number | Vehicle, can: boolean): void;
/**
 * Stops listening to the specified channel.
 *
 * Hash: 0x231523B7 | Since: client
 */
export declare function mumbleRemoveVoiceChannelListen(channel: number): void;
/**
 * Removes the specified player from the user's voice targets.
 *
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID](#\_0x25F2B65F)
 *
 * Hash: 0x930BD34B | Since: client
 */
export declare function mumbleRemoveVoiceTargetPlayerByServerId(targetId: number, serverId: number): void;
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a KVP value as an asset with the GTA streaming module system. This function currently won't work.
 *
 * Hash: 0x1493DCC1 | Since: client
 */
export declare function registerStreamingFileFromKvs(kvsKey: string): void;
/**
 * No comment provided
 *
 * Hash: 0xC59B980C | Since: client
 */
export declare function registerNuiCallback(callbackType: string, callback: Function): void;
/**
 * Removes a dry volume from the game session.
 * See CREATE_DRY_VOLUME for more info
 *
 * Hash: 0x7BCAA6E7 | Since: client
 */
export declare function removeDryVolume(handle: number): void;
/**
 * Replaces the `popgroups` (CPopGroupList) meta file with the file in the specified path.
 *
 * Hash: 0xD3BC438F | Since: client
 */
export declare function overridePopGroups(path: string): void;
/**
 * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
 *
 * Hash: 0xD233A168 | Since: shared
 */
export declare function registerResourceAsEventHandler(eventName: string): void;
/**
 * This native will return true if the user succesfully connected to the voice server.
 * If the user disabled the voice-chat setting it will return false.
 *
 * Hash: 0xB816370A | Since: client
 */
export declare function mumbleIsConnected(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA8AE9C2F | Since: client
 */
export declare function registerRawNuiCallback(callbackType: string, callback: Function): void;
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
export declare function removeTexture(textureId: number): void;
/**
 * Sets the audio submix ID for a specified player using Mumble 'Native Audio' functionality.
 *
 * Hash: 0xFE3A3054 | Since: client
 */
export declare function mumbleSetSubmixForServerId(serverId: number, submixId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1E2E3177 | Since: client
 */
export declare function networkDoesEntityExistWithNetworkId(netId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEAC49841 | Since: shared
 */
export declare function removeConvarChangeListener(cookie: number): void;
/**
 * Overrides the output volume for a particular player with the specified server id and player name on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 *
 * Hash: 0xCE8E25B4 | Since: client
 */
export declare function mumbleSetVolumeOverrideByServerId(serverId: number, volume: number): void;
/**
 * Allows the bypassing of default game behavior that prevents the use of [SET_PED_DRIVE_BY_CLIPSET_OVERRIDE](#\_0xED34AB6C5CB36520) in certain scenarios to avoid clipping issues (e.g., when there is more than one Ped in a vehicle).
 *
 * Note: This flag and the overridden clipset are not replicated values and require synchronization through user scripts. Additionally, current game behavior also restricts applying this clipset locally when in first-person mode and will require a temporary workaround.
 *
 * Hash: 0xB14F8EAD | Since: client
 */
export declare function overridePedsUseDefaultDriveByClipset(flag: boolean): void;
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
export declare function overrideReactionToVehicleSiren(state: boolean, reaction: number): void;
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a file from an URL as a streaming asset in the GTA streaming subsystem. This will asynchronously register the asset, and caching is done based on the URL itself - cache headers are ignored.
 *
 * Use `IS_STREAMING_FILE_READY` to check if the asset has been registered successfully.
 *
 * Hash: 0xF44BFB95 | Since: client
 */
export declare function registerStreamingFileFromUrl(registerAs: string, url: string): void;
/**
 * Registers a custom rope data with the game. For guidance on what these values should be use common:/data/ropedata.xml as a reference.
 * Returns a rope type which can be passed into [ADD_ROPE](#\_0xE832D760399EB220) to use a custom rope design.
 * Once a rope data is registered it can be used indefinitely and you should take caution not too register too many as to exceed the games limit.
 *
 * Hash: 0xF213AE8D | Since: client
 */
export declare function registerRopeData(numSections: number, radius: number, diffuseTextureName: string, normalMapName: string, distanceMappingScale: number, uvScaleX: number, uvScaleY: number, specularFresnel: number, specularFalloff: number, specularIntensity: number, bumpiness: number, color: number): number;
/**
 * Toggles a check that prevents attaching (networked) entities to remotely owned peds. This is disabled by default.
 *
 * Hash: 0x30CE39D8 | Since: client
 */
export declare function onesyncEnableRemoteAttachmentSanitization(enable: boolean): void;
/**
 * Remaps the keymap bound to `keymapName` to `newRawKeyIndex`
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x6E38C1B9 | Since: client
 */
export declare function remapRawKeymap(keymapName: string, newRawKeyIndex: number): void;
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
export declare function requestResourceFileSet(setName: string): boolean;
/**
 * Scope entry for profiler.
 *
 * Hash: 0xC795A4A9 | Since: shared
 */
export declare function profilerEnterScope(scopeName: string): void;
/**
 * Experimental natives, please do not use in a live environment.
 *
 * Hash: 0xA896B20A | Since: client
 */
export declare function removeReplaceTexture(origTxd: string, origTxn: string): void;
/**
 * Removes the specified track junction.
 *
 * Hash: 0x4F3D2B2A | Since: client
 */
export declare function removeTrackJunction(junctionIndex: number): boolean;
/**
 * Registers a track junction that when enabled will cause a train on the defined trackIndex, node and direction to change its current track index and begin traveling on the new node
 *
 * Hash: 0x35F743B5 | Since: client
 */
export declare function registerTrackJunction(trackIndex: number, trackNode: number, newIndex: number, newNode: number, direction: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0x78608ACB | Since: client
 */
export declare function sendNuiMessage(jsonString: string): boolean;
/**
 * Returns true if the profiler is active.
 *
 * Hash: 0xF8B7D7BB | Since: shared
 */
export declare function profilerIsRecording(): boolean;
/**
 * Resets whether or not peds can stand on top of the specified vehicle.
 *
 * Note this flag is not replicated automatically, you will have to manually do so.
 *
 * Hash: 0xDF62CFE2 | Since: client
 */
export declare function resetVehiclePedsCanStandOnTopFlag(vehicle: number | Vehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x5A5E0D05 | Since: client
 */
export declare function removeTimecycleModifierVar(modifierName: string, varName: string): void;
/**
 * Sets the volumes for the sound channels in a submix effect.
 * Values can be between 0.0 and 1.0.
 * Channel 5 and channel 6 are not used in voice chat but are believed to be center and LFE channels.
 * Output slot starts at 0 for the first ADD_AUDIO_SUBMIX_OUTPUT call then incremented by 1 on each subsequent call.
 *
 * Hash: 0x825DC0D1 | Since: client
 */
export declare function setAudioSubmixOutputVolumes(submixId: number, outputSlot: number, frontLeftVolume: number, frontRightVolume: number, rearLeftVolume: number, rearRightVolume: number, channel5Volume: number, channel6Volume: number): void;
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a dynamic streaming asset from the server with the GTA streaming module system.
 *
 * Hash: 0xCEAD2D4B | Since: client
 */
export declare function registerStreamingFileFromCache(resourceName: string, fileName: string, cacheString: string): void;
/**
 * Injects a 'mouse down' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 *
 * Hash: 0x5D01F191 | Since: client
 */
export declare function sendDuiMouseDown(duiObject: number, button: string): void;
/**
 * Injects a 'mouse up' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 *
 * Hash: 0x1D735B93 | Since: client
 */
export declare function sendDuiMouseUp(duiObject: number, button: string): void;
/**
 * Resets parameters which is used by the game for checking is ped needs to fly through windscreen after a crash to default values.
 *
 * Hash: 0x6D712937 | Since: client
 */
export declare function resetFlyThroughWindscreenParams(): void;
/**
 * Sets an integer parameter for a submix effect.
 *
 * Hash: 0x77FAE2B8 | Since: client
 */
export declare function setAudioSubmixEffectParamInt(submixId: number, effectSlot: number, paramIndex: number, paramValue: number): void;
/**
 * Injects a 'mouse move' event for a DUI object. Coordinates are in browser space.
 *
 * Hash: 0xD9D7A0AA | Since: client
 */
export declare function sendDuiMouseMove(duiObject: number, x: number, y: number): void;
/**
 * Sets the on-screen drawing origin for draw-functions in world coordinates.
 *
 * The effect can be reset by calling [`CLEAR_DRAW_ORIGIN`](#\_0xDD76B263) and is limited to 32 different origins each frame.
 *
 * Hash: 0xE10198D5 | Since: client
 */
export declare function setDrawOrigin(pos: Vector3, is2d: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC44C2F44 | Since: client
 */
export declare function setBackfaceculling(toggle: boolean): void;
/**
 * Registers a specified .gfx file as GFx font library.
 * The .gfx file has to be registered with the streamer already.
 *
 * Hash: 0x1B3A363 | Since: client
 */
export declare function registerFontFile(fileName: string): void;
/**
 * Adds a cooldown between instances of moving and then aiming.
 * Can be optionally used to hinder 'speedboosting'
 * To turn off, set value to 0
 *
 * Hash: 0xA42A3DBF | Since: client
 */
export declare function setAimCooldown(value: number): void;
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
export declare function registerRawKeymap(keymapName: string, onKeyDown: Function, onKeyUp: Function, rawKeyIndex: number, canBeDisabled: boolean): void;
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Removes a handler for changes to a state bag.
 *
 * Hash: 0xD36BE661 | Since: shared
 */
export declare function removeStateBagChangeHandler(cookie: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCD03CDA9 | Since: client
 */
export declare function registerNuiCallbackType(callbackType: string): void;
/**
 * This native sets the small image asset for the discord rich presence implementation.
 *
 * Hash: 0xF61D04C4 | Since: client
 */
export declare function setDiscordRichPresenceAssetSmall(assetName: string): void;
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
export declare function registerCommand(commandName: string, handler: Function, restricted: boolean): void;
/**
 * Resets values from the zoom level data by index to defaults from mapzoomdata.meta.
 *
 * Hash: 0x11A5B7ED | Since: client
 */
export declare function resetMapZoomDataLevel(index: number): void;
/**
 * Restores an overridden ped model personality type to the default value.
 *
 * Hash: 0x79A12861 | Since: client
 */
export declare function resetPedModelPersonality(modelHash: number | string): void;
/**
 * Resets the water to the games default water.xml.
 *
 * Hash: 0x1DA4791 | Since: client
 */
export declare function resetWater(): void;
/**
 * Sets a floating-point parameter for a submix effect.
 *
 * Hash: 0x9A209B3C | Since: client
 */
export declare function setAudioSubmixEffectParamFloat(submixId: number, effectSlot: number, paramIndex: number, paramValue: number): void;
/**
 * Sets whether or not ownership checks should be performed while trying to stow a carriable on a hunting wagon.
 *
 * Hash: 0x85A10FFD | Since: client
 */
export declare function setIgnoreVehicleOwnershipForStowing(ignore: boolean): void;
/**
 * This native sets the app id for the discord rich presence implementation.
 *
 * Hash: 0x6A02254D | Since: client
 */
export declare function setDiscordAppId(appId: string): void;
/**
 * Injects a 'mouse wheel' event for a DUI object.
 *
 * Hash: 0x2D62133A | Since: client
 */
export declare function sendDuiMouseWheel(duiObject: number, deltaY: number, deltaX: number): void;
/**
 * Sets a clickable button to be displayed in a player's Discord rich presence.
 *
 * Hash: 0xCBBC3FAC | Since: client
 */
export declare function setDiscordRichPresenceAction(index: number, label: string, url: string): void;
/**
 * Sets some in-game parameters which is used for checks is ped needs to fly through windscreen after a crash.
 *
 * Hash: 0x4D3118ED | Since: client
 */
export declare function setFlyThroughWindscreenParams(vehMinSpeed: number, unkMinSpeed: number, unkModifier: number, minDamage: number): boolean;
/**
 * Allows Weapon-Flashlight beams to stay visible while moving. Normally it only stays on while aiming.
 *
 * Hash: 0x7635B349 | Since: client
 */
export declare function setFlashLightKeepOnWhileMoving(state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x36DF8612 | Since: client
 */
export declare function removeTimecycleModifier(modifierName: string): void;
/**
 * No comment provided
 *
 * Hash: 0x87F43553 | Since: client
 */
export declare function setInteriorPortalCornerPosition(interiorId: number, portalIndex: number, cornerIndex: number, pos: Vector3): void;
/**
 * Sets fuel consumption rate multiplier for all vehicles operated by a player. This is a way to slow down or speed up fuel consumption for all vehicles at a time. If 0 - it practically means that fuel will not be consumed. By default is set to 1.
 *
 * When the multiplier is set to 1 a default 65 litre gas tank car with average fuel consumption can stay idle for ~16.67 hours or run with max RPM for ~2.5 hours.
 *
 * To customize fuel consumption per vehicle / vehicle class use [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolConsumptionRate`. By default it is set to 0.5 for all vehicles.
 *
 * Hash: 0x845F3E5C | Since: client
 */
export declare function setFuelConsumptionRateMultiplier(multiplier: number): void;
/**
 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
 * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 *
 * Hash: 0x1722C938 | Since: client
 */
export declare function setManualShutdownLoadingScreenNui(manualShutdown: boolean): void;
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
export declare function setDefaultVehicleNumberPlateTextPattern(plateIndex: number, pattern: string): void;
/**
 * This native sets the hover text of the small image asset for the discord rich presence implementation.
 *
 * Hash: 0x35E62B6A | Since: client
 */
export declare function setDiscordRichPresenceAssetSmallText(text: string): void;
/**
 * This native sets the image asset for the discord rich presence implementation.
 *
 * Hash: 0x53DFD530 | Since: client
 */
export declare function setDiscordRichPresenceAsset(assetName: string): void;
/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0xFE8064E3 | Since: client
 */
export declare function setHandlingField(vehicle: string, class_: string, fieldName: string, value: any): void;
/**
 * No comment provided
 *
 * Hash: 0xC5945BD9 | Since: client
 */
export declare function setCalmingQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x88B2355E | Since: client
 */
export declare function setInteriorPortalFlag(interiorId: number, portalIndex: number, flag: number): void;
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
export declare function setAudioSubmixEffectRadioFx(submixId: number, effectSlot: number): void;
/**
 * Sends a message to the specific DUI root page. This is similar to SEND_NUI_MESSAGE.
 *
 * Hash: 0xCD380DA9 | Since: client
 */
export declare function sendDuiMessage(duiObject: number, jsonString: string): void;
/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0x90DD01C | Since: client
 */
export declare function setHandlingFloat(vehicle: string, class_: string, fieldName: string, value: number): void;
/**
 * This native sets the hover text of the image asset for the discord rich presence implementation.
 *
 * Hash: 0xB029D2FA | Since: client
 */
export declare function setDiscordRichPresenceAssetText(text: string): void;
/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 *
 * Hash: 0x8BBE6CC0 | Since: client
 */
export declare function sendLoadingScreenMessage(jsonString: string): boolean;
/**
 * Navigates the specified DUI browser to a different URL.
 *
 * Hash: 0xF761D9F3 | Since: client
 */
export declare function setDuiUrl(duiObject: number, url: string): void;
/**
 * Sets values to the zoom level data by index.
 *
 * Hash: 0x447C718E | Since: client
 */
export declare function setMapZoomDataLevel(index: number, zoomScale: number, zoomSpeed: number, scrollSpeed: number, tilesX: number, tilesY: number): void;
/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 *
 * Hash: 0xEED219F2 | Since: client
 */
export declare function setHudComponentAlign(id: number, horizontalAlign: number, verticalAlign: number): void;
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
export declare function setInteriorProbeLength(probeLength: number): void;
/**
 * Allows StaticEmitter's without a linked entity to make use of environment features like occlusion and reverb even if they are located higher than 20.0 units above any static collision inside interiors.
 *
 * This native allows you to extend the probe range up to 150.0 units.
 *
 * Hash: 0x8AA1F3C2 | Since: client
 */
export declare function setEmitterProbeLength(probeLength: number): void;
/**
 * No comment provided
 *
 * Hash: 0x67977501 | Since: client
 */
export declare function setCalmingQuadDampening(calmingQuad: number, dampening: number): boolean;
/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 *
 * Hash: 0x8AB3F46C | Since: client
 */
export declare function setHandlingInt(vehicle: string, class_: string, fieldName: string, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8A7A8DAC | Since: client
 */
export declare function setCursorLocation(x: number, y: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7644A9FA | Since: client
 */
export declare function setHudComponentSize(id: number, x: number, y: number): void;
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
export declare function setMinimapType(type: number): void;
/**
 * Sets the type for the minimap blip clipping object to be either rectangular or rounded.
 *
 * Hash: 0xB8B4490C | Since: client
 */
export declare function setMinimapClipType(type: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5518D60B | Since: client
 */
export declare function setInteriorRoomFlag(interiorId: number, roomIndex: number, flag: number): void;
/**
 * Overrides how many real ms are equal to one game minute.
 * A setter for [`GetMillisecondsPerGameMinute`](#\_0x2F8B4D1C595B11DB).
 *
 * Hash: 0x36CA2554 | Since: client
 */
export declare function setMillisecondsPerGameMinute(value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8349CD76 | Since: client
 */
export declare function setInteriorPortalEntityFlag(interiorId: number, portalIndex: number, entityIndex: number, flag: number): void;
/**
 * Toggles the visibility of resource names in the FiveM key mapping page.
 *
 * Hash: 0xCB0241B5 | Since: client
 */
export declare function setKeyMappingHideResources(hide: boolean): void;
/**
 * Replaces the pixel data in a runtime texture with the image data from a file in the current resource, or a data URL.
 *
 * If the bitmap is a different size compared to the existing texture, it will be resampled.
 *
 * This command may end up executed asynchronously, and only update the texture data at a later time.
 *
 * Hash: 0x28FC4ECB | Since: client
 */
export declare function setRuntimeTextureImage(tex: number, fileName: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x58982680 | Since: client
 */
export declare function setInteriorPortalRoomTo(interiorId: number, portalIndex: number, roomTo: number): void;
/**
 * An alternative to [SET_PED_PROP_INDEX](#\_0x93376B65A266EB5F) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Hash: 0x75240BCB | Since: client
 */
export declare function setPedCollectionPropIndex(ped: number | Ped, anchorPoint: number, collection: string, propIndex: number, textureId: number, attach: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x4FDCF51E | Since: client
 */
export declare function setInteriorRoomExtents(interiorId: number, roomIndex: number, bbMinX: number, bbMinY: number, bbMinZ: number, bbMaxX: number, bbMaxY: number, bbMaxZ: number): void;
/**
 * Set's the ropes length change rate, which is the speed that rope should wind if started.
 *
 * Hash: 0x69B680A7 | Since: client
 */
export declare function setRopeLengthChangeRate(rope: number, lengthChangeRate: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1C47F6AC | Since: client
 */
export declare function setGlobalPassengerMassMultiplier(massMul: number): void;
/**
 * Overrides the minimap component data (from `common:/data/ui/frontend.xml`) for a specified component.
 *
 * Hash: 0x3E882B23 | Since: client
 */
export declare function setMinimapComponentPosition(name: string, alignX: string, alignY: string, posX: number, posY: number, sizeX: number, sizeY: number): void;
/**
 * Sets the display info for a minimap overlay.
 *
 * Hash: 0x6A48B3CA | Since: client
 */
export declare function setMinimapOverlayDisplay(miniMap: number, x: number, y: number, xScale: number, yScale: number, alpha: number): void;
/**
 * No comment provided
 *
 * Hash: 0x31C9A848 | Since: client
 */
export declare function setInteriorRoomTimecycle(interiorId: number, roomIndex: number, timecycleHash: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA9EC16C7 | Since: client
 */
export declare function setPlayerStamina(playerId: number | string | Player, stamina: number): boolean;
/**
 * Toggles whether the usage of [ADD_ROPE](#\_0xE832D760399EB220) should create an underlying CNetworkRopeWorldStateData. By default this is set to false.
 *
 * Hash: 0xE62FC73 | Since: client
 */
export declare function setRopesCreateNetworkWorldState(shouldCreate: boolean): void;
/**
 * Overrides a ped model personality type.
 *
 * Hash: 0x46F6B38B | Since: client
 */
export declare function setPedModelPersonality(modelHash: number | string, personalityHash: number | string): void;
/**
 * Sets whether all tags should group (normal game behavior) or should remain independent and above each ped's respective head when in a vehicle.
 *
 * Hash: 0x7A27BC93 | Since: client
 */
export declare function setMpGamerTagsUseVehicleBehavior(enabled: boolean): void;
/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 *
 * Hash: 0x7F9D543 | Since: client
 */
export declare function setHandlingVector(vehicle: string, class_: string, fieldName: string, value: Vector3): void;
/**
 * An alternative to [SET_PED_COMPONENT_VARIATION](#\_0x262B14F48D29DE80) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x88711BBA | Since: client
 */
export declare function setPedCollectionComponentVariation(ped: number | Ped, componentId: number, collection: string, drawableId: number, textureId: number, paletteId: number): void;
/**
 * <strong>This native is deprecated and does nothing!</strong>
 *
 * Hash: 0x7F6B8D75 | Since: client
 */
export declare function setModelHeadlightConfiguration(modelHash: number | string, ratePerSecond: number, headlightRotation: number, invertRotation: boolean): void;
/**
 * An alternative to [SET_PED_PRELOAD_VARIATION_DATA](#\_0x39D55A620FCB6A3A) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x3EC75558 | Since: client
 */
export declare function setPedCollectionPreloadVariationData(ped: number | Ped, componentId: number, collection: string, drawableId: number, textureId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x298FC783 | Since: client
 */
export declare function setInteriorPortalRoomFrom(interiorId: number, portalIndex: number, roomFrom: number): void;
/**
 * Sets the maximum distance at which all tags will be visible and which beyond will not be displayed. Distance is measured from the camera position.
 *
 * Hash: 0xD61676B3 | Since: client
 */
export declare function setMpGamerTagsVisibleDistance(distance: number): void;
/**
 * Turns on and off fuel consumption in all vehicles operated by a player. NPC operated vehicles will not consume fuel to avoid traffic disruptions.
 *
 * The default Gta5 behaviour is fuel consumption turned off.
 *
 * Hash: 0x81DAD03E | Since: client
 */
export declare function setFuelConsumptionState(state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x35594F67 | Since: client
 */
export declare function setPlayerMaxStamina(playerId: number | string | Player, maxStamina: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3FF5E5F8 | Since: client
 */
export declare function setNuiFocusKeepInput(keepInput: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xA7DD3209 | Since: client
 */
export declare function setSnakeoilForEntry(name: string, path: string, data: string): void;
/**
 * No comment provided
 *
 * Hash: 0x5B98AE30 | Since: client
 */
export declare function setNuiFocus(hasFocus: boolean, hasCursor: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x55188D2D | Since: client
 */
export declare function setNetworkWalkMode(enabled: boolean): void;
/**
 * Toggles the track being active. If disabled mission trains will not be able to spawn on this track and will look for the next closest track to spawn
 *
 * Hash: 0x4B41E84C | Since: client
 */
export declare function setTrackEnabled(track: number, enabled: boolean): void;
/**
 * Set the z-index of the NUI resource.
 *
 * Hash: 0x3734AAFF | Since: client
 */
export declare function setNuiZindex(zIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8923DD42 | Since: client
 */
export declare function setVehicleCurrentGear(vehicle: number | Vehicle, gear: number): void;
/**
 * No comment provided
 *
 * Hash: 0x68CDFA60 | Since: client
 */
export declare function setTextJustification(justifyType: number): void;
/**
 * Sets the player's rich presence detail state for social platform providers to a specified string.
 *
 * Hash: 0x7BDCBD45 | Since: client
 */
export declare function setRichPresence(presenceState: string): void;
/**
 * Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.
 *
 * Hash: 0xAB65ACEE | Since: client
 */
export declare function setRuntimeTexturePixel(tex: number, x: number, y: number, r: number, g: number, b: number, a: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC108EE6F | Since: client
 */
export declare function setVehicleAlarmTimeLeft(vehicle: number | Vehicle, time: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3963D527 | Since: client
 */
export declare function setRuntimeTextureArgbData(tex: number, buffer: string, length: number): boolean;
/**
 * This completely disables pedestrian vehicles from reacting to sirens. They will not try to do any maneuver to evade.
 *
 * Hash: 0xB90BBC6E | Since: client
 */
export declare function setReactionToVehicleWithSirenDisabled(state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x97B2F9F8 | Since: client
 */
export declare function setTextChatEnabled(enabled: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6E0A422B | Since: client
 */
export declare function setTimecycleModifierVar(modifierName: string, varName: string, value1: number, value2: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1A963E58 | Since: client
 */
export declare function setVehicleGravityAmount(vehicle: number | Vehicle, gravity: number): void;
/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 *
 * Hash: 0xC37F4CF9 | Since: client
 */
export declare function setVehicleHandlingInt(vehicle: number | Vehicle, class_: string, fieldName: string, value: number): void;
/**
 * Sets the text font for the current text drawing command.
 *
 * Hash: 0xADA9255D | Since: client
 */
export declare function setTextFontForCurrentCommand(fontId: number): void;
/**
 * Override the limits on the number and types of melee combatants. The game is limited to at most ten combatants among the three types: primary, secondary, and observers.
 *
 * This native infers the number of observers based on the primary and secondary counts.
 *
 * Hash: 0x8E51EC29 | Since: client
 */
export declare function setPedMeleeCombatLimits(primaryCount: number, secondaryCount: number, populationPedCount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3A4566F4 | Since: client
 */
export declare function setVehicleNextGear(vehicle: number | Vehicle, nextGear: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6F60AB54 | Since: client
 */
export declare function setTextWrap(start: number, end: number): void;
/**
 * the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.
 * This function doesn't need to be called every frame, it works like a switcher.
 *
 * Hash: 0xFC02CAF6 | Since: client
 */
export declare function setPlayerTalkingOverride(player: number | string | Player, state: boolean): void;
/**
 * Sets the state of a track junction.
 *
 * Hash: 0x537B449D | Since: client
 */
export declare function setTrackJunctionActive(junctionIndex: number, state: boolean): boolean;
/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 *
 * Hash: 0x12497890 | Since: client
 */
export declare function setVehicleHandlingVector(vehicle: number | Vehicle, class_: string, fieldName: string, value: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x61CB74A0 | Since: client
 */
export declare function setTrainState(train: number | Vehicle, state: number): void;
/**
 * Internal function for setting a state bag value.
 *
 * Hash: 0x8D50E33A | Since: shared
 */
export declare function setStateBagValue(bagName: string, keyName: string, valueData: string, valueLength: number, replicated: boolean): void;
/**
 * An alternative to [SET_PED_PRELOAD_PROP_DATA](#\_0x2B16A3BFF1FBCE49) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Hash: 0x14B5BBE0 | Since: client
 */
export declare function setPedCollectionPreloadPropData(ped: number | Ped, anchorPoint: number, collection: string, propIndex: number, textureId: number): void;
/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0x488C86D2 | Since: client
 */
export declare function setVehicleHandlingFloat(vehicle: number | Vehicle, class_: string, fieldName: string, value: number): void;
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
export declare function setVehicleWheelieState(vehicle: number | Vehicle, state: number): void;
/**
 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 *
 * Hash: 0x5F3A3574 | Since: client
 */
export declare function setVehicleAutoRepairDisabled(vehicle: number | Vehicle, value: boolean): void;
/**
 * Enables or disables whether train doors should be forced open whilst a player is inside the train. This is enabled by default in multiplayer.
 *
 * Hash: 0xD4D1BA63 | Since: client
 */
export declare function setTrainsForceDoorsOpen(forceOpen: boolean): void;
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
export declare function setPedTurningThresholds(min: number, max: number): void;
/**
 * Sets the max speed for the train tracks. Used by ambient trains and for station calculations
 *
 * Hash: 0x37BFC732 | Since: client
 */
export declare function setTrackMaxSpeed(track: number, newSpeed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x90D1CAD1 | Since: client
 */
export declare function setVehicleOilLevel(vehicle: number | Vehicle, level: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2F70ACED | Since: client
 */
export declare function setVehicleClutch(vehicle: number | Vehicle, clutch: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFFCCC2EA | Since: client
 */
export declare function setVehicleSteeringAngle(vehicle: number | Vehicle, angle: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6485615E | Since: client
 */
export declare function setVehicleTurboPressure(vehicle: number | Vehicle, pressure: number): void;
/**
 * Sets the ratio that a door is open for on a train.
 *
 * Hash: 0x2468DBE8 | Since: client
 */
export declare function setTrainDoorOpenRatio(train: number | Vehicle, doorIndex: number, ratio: number): void;
/**
 * Not sure what this changes, probably determines physical rim size in case the tire is blown.
 *
 * Hash: 0xF380E184 | Since: client
 */
export declare function setVehicleWheelRimColliderSize(vehicle: number | Vehicle, wheelIndex: number, value: number): void;
/**
 * Sets the maximum distance in which [\_SET_VEHICLE_NITRO_ENABLED](#\_0xC8E9B6B71B8E660D) PTFX are rendered. Distance is measured from the camera position.
 *
 * Hash: 0xA40CB822 | Since: client
 */
export declare function setVehicleNitroPtfxRange(range: number): void;
/**
 * Set the vehicle's pitch bias. Only works on planes.
 *
 * Hash: 0x2A6CC9F2 | Since: client
 */
export declare function setVehiclePitchBias(vehicle: number | Vehicle, value: number): void;
/**
 * Toggles a train's ability to stop at stations
 *
 * Hash: 0xECB8B577 | Since: client
 */
export declare function setTrainStopAtStations(train: number | Vehicle, state: boolean): void;
/**
 * Set the vehicle's roll bias. Only works on planes.
 *
 * Hash: 0x264B45DE | Since: client
 */
export declare function setVehicleRollBias(vehicle: number | Vehicle, value: number): void;
/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0x2BA40795 | Since: client
 */
export declare function setVehicleHandlingField(vehicle: number | Vehicle, class_: string, fieldName: string, value: any): void;
/**
 * No comment provided
 *
 * Hash: 0xEB46596F | Since: client
 */
export declare function setVehicleSteeringScale(vehicle: number | Vehicle, scale: number): void;
/**
 * Sets the rotation speed of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x35ED100D | Since: client
 */
export declare function setVehicleWheelRotationSpeed(vehicle: number | Vehicle, wheelIndex: number, speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x20B1B3E6 | Since: client
 */
export declare function setVehicleHighGear(vehicle: number | Vehicle, gear: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBA970511 | Since: client
 */
export declare function setVehicleFuelLevel(vehicle: number | Vehicle, level: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2A01A8FC | Since: client
 */
export declare function setVehicleCurrentRpm(vehicle: number | Vehicle, rpm: number): void;
/**
 * Sets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x85C85A3A | Since: client
 */
export declare function setVehicleWheelTractionVectorLength(vehicle: number | Vehicle, wheelIndex: number, length: number): void;
/**
 * Sets custom vehicle xenon lights color, allowing to use RGB palette. The game will ignore lights color set by [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07) when custom color is active. This native is not synced between players. Requires xenon lights mod to be set on vehicle.
 *
 * Hash: 0x1683E7F0 | Since: client
 */
export declare function setVehicleXenonLightsCustomColor(vehicle: number | Vehicle, red: number, green: number, blue: number): void;
/**
 * Sets the height of the vehicle's suspension.
 * This changes the same value set by Suspension in the mod shop.
 * Negatives values raise the car. Positive values lower the car.
 *
 * This is change is visual only. The collision of the vehicle will not move.
 *
 * Hash: 0xB3439A01 | Since: client
 */
export declare function setVehicleSuspensionHeight(vehicle: number | Vehicle, newHeight: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA387D917 | Since: client
 */
export declare function setWaterQuadIsInvisible(waterQuad: number, isInvisible: boolean): boolean;
/**
 * Sets whether the wheel is powered.
 * On all wheel drive cars this works to change which wheels receive power, but if a car's fDriveBiasFront doesn't send power to that wheel, it won't get power anyway. This can be fixed by changing the fDriveBiasFront with SET_VEHICLE_HANDLING_FLOAT.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in SET_VEHICLE_WHEEL_FLAGS.
 *
 * Hash: 0xBD5291A0 | Since: client
 */
export declare function setVehicleWheelIsPowered(vehicle: number | Vehicle, wheelIndex: number, powered: boolean): void;
/**
 * Sets the vehicles gear ratio on choosen gear, reverse gear needs to be a negative float and forward moving gear needs to be a positive float. Refer to the examples if confused.
 *
 * Hash: 0x496EF2F2 | Since: client
 */
export declare function setVehicleGearRatio(vehicle: number | Vehicle, gear: number, ratio: number): void;
/**
 * This native is a setter for [`GET_VEHICLE_HAS_FLAG`](#\_0xD85C9F57).
 *
 * Hash: 0x63AE1A34 | Since: client
 */
export declare function setVehicleFlag(vehicle: number | Vehicle, flagIndex: number, value: boolean): boolean;
/**
 * Sets the braking distance of the track. Used by trains to determine the point to slow down when entering a station.
 *
 * Hash: 0x77EB78D0 | Since: client
 */
export declare function setTrackBrakingDistance(track: number, brakingDistance: number): void;
/**
 * Sets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xD2B9E90D | Since: client
 */
export declare function setVehicleWheelFlags(vehicle: number | Vehicle, wheelIndex: number, flags: number): void;
/**
 * This native allows you to update the bounds of a specified water quad index.
 *
 * Hash: 0x80AD144C | Since: client
 */
export declare function setWaterQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean;
/**
 * Disables autoswapping to another weapon when the current weapon runs out of ammo.
 *
 * Hash: 0x2A7B50E | Since: client
 */
export declare function setWeaponsNoAutoswap(state: boolean): void;
/**
 * Use along with SetVehicleWheelWidth to resize the wheels (this native sets the collider width affecting physics while SetVehicleWheelWidth will change visual width).
 *
 * Hash: 0x47BD0270 | Since: client
 */
export declare function setVehicleWheelTireColliderWidth(vehicle: number | Vehicle, wheelIndex: number, value: number): void;
/**
 * Sets vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set size for non-default wheels).
 *
 * Hash: 0x53AB5C35 | Since: client
 */
export declare function setVehicleWheelSize(vehicle: number | Vehicle, size: number): boolean;
/**
 * Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).
 *
 * Hash: 0xB962D05C | Since: client
 */
export declare function setVehicleWheelTireColliderSize(vehicle: number | Vehicle, wheelIndex: number, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6C93C4A9 | Since: client
 */
export declare function setVehicleEngineTemperature(vehicle: number | Vehicle, temperature: number): void;
/**
 * Sets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f
 *
 * Hash: 0xE80F4E31 | Since: client
 */
export declare function setVehicleWheelBrakePressure(vehicle: number | Vehicle, wheelIndex: number, pressure: number): void;
/**
 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 *
 * Hash: 0xB9234AFB | Since: client
 */
export declare function shutdownLoadingScreenNui(): void;
/**
 * No comment provided
 *
 * Hash: 0xB22ECEFD | Since: client
 */
export declare function setVehicleWheelHealth(vehicle: number | Vehicle, wheelIndex: number, health: number): void;
/**
 * directionX/Y should be constrained between -1.0 and 1.0
 * A positive value will create the wave starting at min and rolling towards max
 * A negative value will create the wave starting at max and rolling towards min
 * Applying both values allows you to make diagonal waves
 *
 * Hash: 0xFC9341A3 | Since: client
 */
export declare function setWaveQuadDirection(waveQuad: number, directionX: number, directionY: number): boolean;
/**
 * This native allows you to update the bounds of a specified water quad index.
 *
 * Hash: 0x1FCC1FAF | Since: client
 */
export declare function setWaveQuadBounds(waveQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean;
/**
 * Overrides a floating point value from `visualsettings.dat` temporarily.
 *
 * Hash: 0xD1D31681 | Since: client
 */
export declare function setVisualSettingFloat(name: string, value: number): void;
/**
 * Sets vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set width for non-default wheels).
 *
 * Hash: 0x64C3F1C0 | Since: client
 */
export declare function setVehicleWheelWidth(vehicle: number | Vehicle, width: number): boolean;
/**
 * Sets whether or not the weather should be owned by the network subsystem.
 *
 * To be able to use [\_SET_WEATHER_TYPE_TRANSITION](#\_0x578C752848ECFA0C), this has to be set to false.
 *
 * Hash: 0x2703D582 | Since: client
 */
export declare function setWeatherOwnedByNetwork(network: boolean): void;
/**
 * Sets world clip boundaries for water quads file (water.xml, water_heistisland.xml)
 * Used internally by LOAD_GLOBAL_WATER_FILE
 *
 * Hash: 0x9FCD2EE6 | Since: client
 */
export declare function setWaterAreaClipRect(minX: number, minY: number, maxX: number, maxY: number): void;
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
export declare function setWaterQuadType(waterQuad: number, type: number): boolean;
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
export declare function setVehicleWheelXOffset(vehicle: number | Vehicle, wheelIndex: number, offset: number): void;
/**
 * No comment provided
 *
 * Hash: 0x80CC4C9E | Since: client
 */
export declare function setVehicleXmasSnowFactor(gripFactor: number): void;
/**
 * Modifies the radius scale used in the simulation of wet cloth physics.
 * This affects how cloth behaves when wet, changing how it sticks or reacts to movement.
 *
 * Hash: 0xF1BD2CEF | Since: client
 */
export declare function setWetClothPinRadiusScale(scale: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF49797EB | Since: client
 */
export declare function setWaterQuadAlpha(waterQuad: number, a0: number, a1: number, a2: number, a3: number): boolean;
/**
 * A setter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x9864312F | Since: client
 */
export declare function setWeaponRecoilShakeAmplitude(weaponHash: number | string, amplitude: number): void;
/**
 * A setter for the accuracy spread of a weapon.
 *
 * Hash: 0x598DD6AE | Since: client
 */
export declare function setWeaponAccuracySpread(weaponHash: number | string, spread: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE4174B7B | Since: client
 */
export declare function setWaveQuadAmplitude(waveQuad: number, amplitude: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC6C2171F | Since: client
 */
export declare function setVehicleWheelYRotation(vehicle: number | Vehicle, wheelIndex: number, value: number): void;
/**
 * Will unregister and cleanup a registered NUI callback handler.
 *
 * Use along side the REGISTER_RAW_NUI_CALLBACK native.
 *
 * Hash: 0x7FB46432 | Since: client
 */
export declare function unregisterRawNuiCallback(callbackType: string): void;
/**
 * No comment provided
 *
 * Hash: 0xC3FF42FF | Since: client
 */
export declare function setWaterQuadNoStencil(waterQuad: number, noStencil: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6292F7A8 | Since: client
 */
export declare function setWaterQuadLevel(waterQuad: number, level: number): boolean;
/**
 * This function undoes changes made by [`SET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE`](#\_0x68DFF2DD), restoring the original outline rendering behavior. The default render technique group is `unlit`.
 *
 * Hash: 0x8EB6EC38 | Since: client
 */
export declare function resetEntityDrawOutlineRenderTechnique(): void;
/**
 * Sets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xC6146043 | Since: client
 */
export declare function setVehicleWheelPower(vehicle: number | Vehicle, wheelIndex: number, power: number): void;
/**
 * Disables the game's built-in auto-reloading.
 *
 * Hash: 0x311150E5 | Since: client
 */
export declare function setWeaponsNoAutoreload(state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x12A330 | Since: shared
 */
export declare function stateBagHasKey(bagName: string, key: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD1FDCFC1 | Since: client
 */
export declare function setWaterQuadHasLimitedDepth(waterQuad: number, hasLimitedDepth: boolean): boolean;
/**
 * Returns whether or not the currently executing event was canceled.
 *
 * Hash: 0x58382A19 | Since: shared
 */
export declare function wasEventCanceled(): boolean;
/**
 * The backing function for TriggerServerEvent.
 *
 * Hash: 0x7FDD1128 | Since: client
 */
export declare function triggerServerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void;
/**
 * Disables weapons aim blocking due to environment for local player.
 * For non-player peds [SET_PED_ENABLE_WEAPON_BLOCKING](#\_0x97A790315D3831FD) can be used.
 *
 * Hash: 0xDFD8F6DE | Since: client
 */
export declare function setWeaponsNoAimBlocking(state: boolean): void;
/**
 * Leaves cursor mode. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xADECF19E | Since: client
 */
export declare function leaveCursorMode(): void;
/**
 * Enables the editor runtime mode, changing game behavior to track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xC383871D | Since: client
 */
export declare function enableEditorRuntime(): void;
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
export declare function getMapdataEntityMatrix(mapDataHash: number, entityInternalIdx: number, matrixPtr: number): boolean;
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
export declare function setEntityDrawOutlineRenderTechnique(techniqueGroup: string): void;
/**
 * Returns the transient entity index for a specified mapdata/entity pair.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xEE43540D | Since: client
 */
export declare function getEntityIndexFromMapdata(mapdata: number, entity: number): number;
/**
 * No comment provided
 *
 * Hash: 0xD264D4E1 | Since: client
 */
export declare function setWeatherCycleEntry(index: number, typeName: string, timeMult: number): boolean;
/**
 * Retrieves the map data entity handle.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x30AA6911 | Since: client
 */
export declare function getMapdataEntityHandle(mapDataHash: number, entityInternalIdx: number, entityHandle: number): boolean;
/**
 * Sets an entity's matrix. Arguments are in the same order as with GET_ENTITY_MATRIX.
 *
 * Hash: 0xFB0639B | Since: client
 */
export declare function setEntityMatrix(entity: number | Entity, forwardX: number, forwardY: number, forwardZ: number, rightX: number, rightY: number, rightZ: number, upX: number, upY: number, upZ: number, atX: number, atY: number, atZ: number): void;
/**
 * Draws an outline around a given entity. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x76180407 | Since: client
 */
export declare function setEntityDrawOutline(entity: number | Entity, enabled: boolean): void;
/**
 * Resets mapdata entity transform matrix to its original state.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x8143FA4F | Since: client
 */
export declare function resetMapdataEntityMatrix(mapDataHash: number, entityInternalIdx: number): boolean;
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
export declare function setEntityDrawOutlineShader(shader: number): void;
/**
 * The backing function for TriggerEvent.
 *
 * Hash: 0x91310870 | Since: shared
 */
export declare function triggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void;
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
export declare function drawGizmo(matrixPtr: number, id: string): boolean;
/**
 * Gets the selected entity at the specified mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xAFE8D405 | Since: client
 */
export declare function selectEntityAtPos(fracX: number, fracY: number, hitFlags: number, precise: boolean): number;
/**
 * Retrieves the map data and entity handles from a specific entity.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xF6B815C5 | Since: client
 */
export declare function getEntityMapdataOwner(entity: number | Entity, mapdataHandle: number, entityHandle: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB3210203 | Since: shared
 */
export declare function endFindKvp(handle: number): void;
/**
 * The backing function for TriggerLatentServerEvent.
 *
 * Hash: 0x128737EA | Since: client
 */
export declare function triggerLatentServerEventInternal(eventName: string, eventPayload: string, payloadLength: number, bps: number): void;
/**
 * Returns the transient map data index for a specified hash.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xD29D8EDD | Since: client
 */
export declare function getMapdataFromHashKey(mapdataHandle: number | string): number;
/**
 * Gets the selected entity at the current mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x3DD8130F | Since: client
 */
export declare function selectEntityAtCursor(hitFlags: number, precise: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0xBD7BEBC5 | Since: shared
 */
export declare function findKvp(handle: number): string;
/**
 * Disables the editor runtime mode, changing game behavior to not track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xB1622B17 | Since: client
 */
export declare function disableEditorRuntime(): void;
/**
 * A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).
 *
 * Hash: 0x9ADD2938 | Since: shared
 */
export declare function setResourceKvpFloat(key: string, value: number): void;
/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
 *
 * Hash: 0x35BDCEEA | Since: shared
 */
export declare function getResourceKvpFloat(key: string): number;
/**
 * Enters cursor mode, suppressing mouse movement to the game and displaying a mouse cursor instead. This function supports
 * SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x780DA86 | Since: client
 */
export declare function enterCursorMode(): void;
/**
 * Equivalent of [START_FIND_KVP](#\_0xDD379006), but for another resource than the current one.
 *
 * Hash: 0x8F2EECC3 | Since: client
 */
export declare function startFindExternalKvp(resourceName: string, prefix: string): number;
/**
 * No comment provided
 *
 * Hash: 0x7389B5DF | Since: shared
 */
export declare function deleteResourceKvp(key: string): void;
/**
 * Nonsynchronous [DELETE_RESOURCE_KVP](#\_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x4152C90 | Since: shared
 */
export declare function deleteResourceKvpNoSync(key: string): void;
/**
 * Transiently updates the entity with the specified mapdata index and entity index.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xFC52CB91 | Since: client
 */
export declare function updateMapdataEntity(mapdata: number, entity: number, entityDef: number | Object): void;
/**
 * Sets color for entity outline. `255, 0, 255, 255` by default.
 *
 * Hash: 0xB41A56C2 | Since: client
 */
export declare function setEntityDrawOutlineColor(red: number, green: number, blue: number, alpha: number): void;
/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
 *
 * Hash: 0x557B586A | Since: shared
 */
export declare function getResourceKvpInt(key: string): number;
/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938), but for a specified resource.
 *
 * Hash: 0x3CC98B25 | Since: client
 */
export declare function getExternalKvpFloat(resource: string, key: string): number;
/**
 * Nonsynchronous [SET_RESOURCE_KVP](#\_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0xCF9A2FF | Since: shared
 */
export declare function setResourceKvpNoSync(key: string, value: string): void;
/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
 *
 * Hash: 0x5240DA5A | Since: shared
 */
export declare function getResourceKvpString(key: string): string;
/**
 * Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x3517BFBE | Since: shared
 */
export declare function setResourceKvpFloatNoSync(key: string, value: number): void;
/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8), but for a specified resource.
 *
 * Hash: 0x12B8D689 | Since: client
 */
export declare function getExternalKvpInt(resource: string, key: string): number;
/**
 * No comment provided
 *
 * Hash: 0xDD379006 | Since: shared
 */
export declare function startFindKvp(prefix: string): number;
/**
 * A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).
 *
 * Hash: 0x21C7A35B | Since: shared
 */
export declare function setResourceKvp(key: string, value: string): void;
/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B), but for a specified resource.
 *
 * Hash: 0x9080363A | Since: client
 */
export declare function getExternalKvpString(resource: string, key: string): string;
/**
 * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
 *
 * Hash: 0x6A2B1E8 | Since: shared
 */
export declare function setResourceKvpInt(key: string, value: number): void;
/**
 * Nonsynchronous [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x26AEB707 | Since: shared
 */
export declare function setResourceKvpIntNoSync(key: string, value: number): void;
