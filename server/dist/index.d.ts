import { Vector3, Entity, Ped, Player, Vehicle, Object, Blip } from '@risinglife/redm-shared';
export declare namespace events {
    function removeAllListeners(key?: string): void;
    /**
     * Registers a listener for a local emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function on(key: string, callback: (...args: any[]) => void): void;
    /**
     * Registers a onetime listener for a local emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function once(key: string, callback: (...args: any[]) => void): void;
    /**
     * Removes a listener for a local emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    function off(key: string, callback: (...args: any[]) => void): void;
    /**
     * Registers a listener for a client emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function onClient(key: string, callback: (...args: any[]) => void): void;
    /**
     * Registers a onetime listener for a client emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function onceClient(key: string, callback: (...args: any[]) => void): void;
    /**
     * Removes a listener for a client emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    function offClient(key: string, callback: (...args: any[]) => void): void;
    /**
     * Sends data local, which can be listened by any resource
     * @param key The event key
     * @param args All parameters
     */
    function emit(key: string, ...args: any[]): void;
    /**
     * Sends data to a client, which can be listened by any resource
     * @param key The event key
     * @param target The target client
     * @param args All parameters
     */
    function emitClient(key: string, target: number | string, ...args: any[]): void;
}
export declare namespace entity {
    /**
     * No comment provided
     *
     * Hash: 0x91B38FB6
     */
    function getRemoteSyncedScenesAllowed(entity: number | Entity): boolean;
    /**
     * Enables or disables the owner check for the specified entity in network-synchronized scenes. When set to `false`, the entity cannot participate in synced scenes initiated by clients that do not own the entity.
     *
     * By default, this is `false` for all entities, meaning only the entity's owner can include it in networked synchronized scenes.
     *
     * Hash: 0xD3FC9D88
     */
    function setRemoteSyncedScenesAllowed(entity: number | Entity, allow: boolean): void;
    /**
     * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
     *
     * Hash: 0xEDBE6ADD
     */
    function isPositionFrozen(entity: number | Entity): boolean;
    /**
     * ```cpp
     * enum eApplyForceTypes {
     * APPLY_TYPE_FORCE = 0,
     * APPLY_TYPE_IMPULSE = 1,
     * APPLY_TYPE_EXTERNAL_FORCE = 2,
     * APPLY_TYPE_EXTERNAL_IMPULSE = 3,
     * APPLY_TYPE_TORQUE = 4,
     * APPLY_TYPE_ANGULAR_IMPULSE = 5
     * }
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [APPLY_FORCE_TO_ENTITY](?\_0xC5F68BE9613E2D18).</strong>
     *
     * Hash: 0xC1C0855A
     */
    function applyForceTo(entity: number | Entity, forceType: number, pos: Vector3, offX: number, offY: number, offZ: number, nComponent: number, bLocalForce: boolean, bLocalOffset: boolean, bScaleByMass: boolean, bPlayAudio: boolean, bScaleByTimeWarp: boolean): void;
    /**
     * Deletes the specified entity.
     *
     * **NOTE**: For trains this will only work if called on the train engine, it will not work on its carriages.
     *
     * Hash: 0xFAA3D236
     */
    function deleteEntity(entity: number | Entity): void;
    /**
     * No comment provided
     *
     * Hash: 0x3AC90869
     */
    function doesExist(entity: number | Object): boolean;
    /**
     * Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using [`SET_ENTITY_COORDS`](#\_0x06843DA7060A026B).
     *
     * <strong>This is the server-side RPC native equivalent of the client native [FREEZE_ENTITY_POSITION](?\_0x428CA6DBD1094446).</strong>
     *
     * Hash: 0x65C16D57
     */
    function freezePosition(entity: number | Entity, toggle: boolean): void;
    /**
     * Gets the entity that this entity is attached to.
     *
     * Hash: 0xFE1589F9
     */
    function getAttachedTo(entity: number | Entity): number;
    /**
     * No comment provided
     *
     * Hash: 0xE8C0C629
     */
    function getCollisionDisabled(entity: number | Entity): boolean;
    /**
     * Gets the current coordinates for a specified entity. This native is used server side when using OneSync.
     *
     * See [GET_ENTITY_COORDS](#\_0x3FEF770D40960D5A) for client side.
     *
     * Hash: 0x1647F1CB
     */
    function getCoords(entity: number | Entity): Vector3;
    /**
     * No comment provided
     *
     * Hash: 0x972CC383
     */
    function getHeading(entity: number | Entity): number;
    /**
     * Only works for vehicle and peds
     *
     * Hash: 0x8E3222B7
     */
    function getHealth(entity: number | Entity): number;
    /**
     * Currently it only works with peds.
     *
     * Hash: 0xC7AE6AA1
     */
    function getMaxHealth(entity: number | Entity): number;
    /**
     * No comment provided
     *
     * Hash: 0xDAFCB3EC
     */
    function getModel(entity: number | Entity): number;
    /**
     * No comment provided
     *
     * Hash: 0xD16EA02F
     */
    function getOrphanMode(entity: number | Entity): number;
    /**
     * This native gets an entity's population type.
     *
     * Hash: 0xFC30DDFF
     */
    function getPopulationType(entity: number | Entity): number;
    /**
     * No comment provided
     *
     * Hash: 0x8FF45B04
     */
    function getRotation(entity: number | Entity): Vector3;
    /**
     * No comment provided
     *
     * Hash: 0x9BF8A73F
     */
    function getRotationVelocity(entity: number | Entity): Vector3;
    /**
     * Gets the routing bucket for the specified entity.
     *
     * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
     *
     * Hash: 0xED4B0486
     */
    function getRoutingBucket(entity: number | Entity): number;
    /**
     * No comment provided
     *
     * Hash: 0xB7F70784
     */
    function getScript(entity: number | Entity): string;
    /**
     * Gets the current speed of the entity in meters per second.
     *
     * ```
     * To convert to MPH: speed * 2.236936
     * To convert to KPH: speed * 3.6
     * ```
     *
     * Hash: 0x9E1E4798
     */
    function getSpeed(entity: number | Entity): number;
    /**
     * Gets the entity type (as an integer), which can be one of the following defined down below:
     *
     * <strong>The following entities will return type `1`:</strong>
     *
     * *   Ped
     * *   Player
     * *   Animal (Red Dead Redemption 2)
     * *   Horse (Red Dead Redemption 2)
     *
     * <strong>The following entities will return type `2`:</strong>
     *
     * *   Automobile
     * *   Bike
     * *   Boat
     * *   Heli
     * *   Plane
     * *   Submarine
     * *   Trailer
     * *   Train
     * *   DraftVeh (Red Dead Redemption 2)
     *
     * <strong>The following entities will return type `3`:</strong>
     *
     * *   Object
     * *   Door
     * *   Pickup
     *
     * Otherwise, a value of `0` will be returned.
     *
     * Hash: 0xB1BD08D
     */
    function getType(entity: number | Entity): number;
    /**
     * No comment provided
     *
     * Hash: 0xC14C9B6B
     */
    function getVelocity(entity: number | Entity): Vector3;
    /**
     * Gets the specific entity type (as an integer), which can be one of the following defined down below:
     *
     * #### FiveM:
     *
     * ```cpp
     * enum eNetObjEntityType
     * {
     * Automobile = 0,
     * Bike = 1,
     * Boat = 2,
     * Door = 3,
     * Heli = 4,
     * Object = 5,
     * Ped = 6,
     * Pickup = 7,
     * PickupPlacement = 8,
     * Plane = 9,
     * Submarine = 10,
     * Player = 11,
     * Trailer = 12,
     * Train = 13
     * };
     * ```
     *
     * #### RedM:
     *
     * ```cpp
     * enum eNetObjEntityType
     * {
     * Animal = 0,
     * Automobile = 1,
     * Bike = 2,
     * Boat = 3,
     * Door = 4,
     * Heli = 5,
     * Object = 6,
     * Ped = 7,
     * Pickup = 8,
     * PickupPlacement = 9,
     * Plane = 10,
     * Submarine = 11,
     * Player = 12,
     * Trailer = 13,
     * Train = 14,
     * DraftVeh = 15,
     * StatsTracker = 16,
     * PropSet = 17,
     * AnimScene = 18,
     * GroupScenario = 19,
     * Herd = 20,
     * Horse = 21,
     * WorldState = 22,
     * WorldProjectile = 23,
     * Incident = 24,
     * Guardzone = 25,
     * PedGroup = 26,
     * CombatDirector = 27,
     * PedSharedTargeting = 28,
     * Persistent = 29
     * };
     * ```
     *
     * Hash: 0x23B2A641
     */
    function getNetTypeFrom(entity: number | Entity): number;
    /**
     * No comment provided
     *
     * Hash: 0x9C9A3BE0
     */
    function hasBeenMarkedAsNoLongerNeeded(vehicle: number | Vehicle): boolean;
    /**
     * This native checks if the given entity is visible.
     *
     * Hash: 0x120B4ED5
     */
    function isVisible(entity: number | Entity): boolean;
    /**
     * Sets the coordinates (world position) for a specified entity, offset by the radius of the entity on the Z axis.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_COORDS](?\_0x06843DA7060A026B).</strong>
     *
     * Hash: 0xDF70B41B
     */
    function setCoords(entity: number | Entity, pos: Vector3, alive: boolean, deadFlag: boolean, ragdollFlag: boolean, clearArea: boolean): void;
    /**
     * It overrides the default distance culling radius of an entity. Set to `0.0` to reset.
     * If you want to interact with an entity outside of your players' scopes set the radius to a huge number.
     *
     * **WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
     *
     * Hash: 0xD3A183A3
     */
    function setDistanceCullingRadius(entity: number | Entity, radius: number): void;
    /**
     * Set the heading of an entity in degrees also known as "Yaw".
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_HEADING](?\_0x8E2530AA8ADA980E).</strong>
     *
     * Hash: 0xE0FF064D
     */
    function setHeading(entity: number | Entity, heading: number): void;
    /**
     * It allows to flag an entity to ignore the request control filter policy.
     *
     * Hash: 0x9F7F8D36
     */
    function setIgnoreRequestControlFilter(entity: number | Entity, ignore: boolean): void;
    /**
     * ```cpp
     * enum EntityOrphanMode {
     * // Default, this will delete the entity when it isn't relevant to any players
     * // NOTE: this *doesn't* mean when they're no longer in scope
     * DeleteWhenNotRelevant = 0,
     * // The entity will be deleted whenever its original owner disconnects
     * // NOTE: if this is set when the entities original owner has already left it will be
     * // marked for deletion (similar to just calling DELETE_ENTITY)
     * DeleteOnOwnerDisconnect = 1,
     * // The entity will never be deleted by the server when it does relevancy checks
     * // you should only use this on entities that need to be relatively persistent
     * KeepEntity = 2
     * }
     * ```
     *
     * Sets what the server will do when the entity no longer has its original owner. By default the server will cleanup entities that it considers "no longer relevant".
     *
     * When used on trains, this native will recursively call onto all attached carriages.
     *
     * **NOTE**: When used with `KeepEntity` (2) this native only guarantees that the ***server*** will not delete the entity, client requests to delete the entity will still work perfectly fine.
     *
     * Hash: 0x489E9162
     */
    function setOrphanMode(entity: number | Entity, orphanMode: number): void;
    /**
     * Sets the rotation of a specified entity in the game world.
     *
     * ```
     * NativeDB Introduced: v323
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_ROTATION](?\_0x8524A8B0171D5E07).</strong>
     *
     * Hash: 0xA345EFE
     */
    function setRotation(entity: number | Entity, pitch: number, roll: number, yaw: number, rotationOrder: number, bDeadCheck: boolean): void;
    /**
     * Sets the routing bucket for the specified entity.
     *
     * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
     *
     * Hash: 0x635E5289
     */
    function setRoutingBucket(entity: number | Entity, bucket: number): void;
    /**
     * ```
     * Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_VELOCITY](?\_0x1C99BB7B6E96D16F).</strong>
     *
     * Hash: 0xFF5A1988
     */
    function setVelocity(entity: number | Entity, pos: Vector3): void;
    /**
     * Internal function for ensuring an entity has a state bag.
     *
     * Hash: 0x3BB78F05
     */
    function ensureStateBag(entity: number | Entity): void;
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
     * Hash: 0xDFFBA12F
     */
    function getEntitiesInRadius(pos: Vector3, radius: number, entityType: number, sortByDistance: boolean, models: number | Object): number;
    /**
     * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](#\_0x5BA35AAF).
     *
     * Hash: 0x4BDF1867
     */
    function getFromStateBagName(bagName: string): number;
}
export declare namespace hud {
    /**
     * Creates a blip for the specified coordinates. You can use `SET_BLIP_` natives to change the blip.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_COORD](?\_0x5A039BB0BCA604B6).</strong>
     *
     * Hash: 0xC6F43D0E
     */
    function addBlipForCoord(pos: Vector3): number;
    /**
     * Create a blip that by default is red (enemy), you can use [SET_BLIP_AS_FRIENDLY](#\_0xC6F43D0E) to make it blue (friend).\
     * Can be used for objects, vehicles and peds.
     * Example of enemy:
     * ![enemy](https://i.imgur.com/fl78svv.png)
     * Example of friend:
     * ![friend](https://i.imgur.com/Q16ho5d.png)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_ENTITY](?\_0x5CDE92C702A8FCE7).</strong>
     *
     * Hash: 0x30822554
     */
    function addBlipForEntity(entity: number | Entity): number;
    /**
     * Create a blip with a radius for the specified coordinates (it doesnt create the blip sprite, so you need to use [AddBlipCoords](#\_0xC6F43D0E))
     * Example image:
     * ![example](https://i.imgur.com/9hQl3DB.png)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_RADIUS](?\_0x46818D79B1F7499A).</strong>
     *
     * Hash: 0x4626756C
     */
    function addBlipForRadius(pos: Vector3, radius: number): number;
    /**
     * Removes the blip from your map.
     * **Note:** This function only works on the script that created the blip, if you wish to remove blips created by other scripts, see [`SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT`](#\_0x86A652570E5F25DD).
     *
     * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_BLIP](?\_0x86A652570E5F25DD).</strong>
     *
     * Hash: 0xD8C3C1CD
     */
    function removeBlip(blip: number | Blip): void;
    /**
     * Sets the displayed sprite for a specific blip.
     * There's a [list of sprites](https://docs.fivem.net/game-references/blips/) on the FiveM documentation site.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_BLIP_SPRITE](?\_0xDF735600A4696DAF).</strong>
     *
     * Hash: 0x8DBBB0B9
     */
    function setBlipSprite(blip: number | Blip, spriteId: number): void;
    /**
     * Adds a rectangular blip for the specified coordinates/area.
     * It is recommended to use [SET_BLIP_ROTATION](#\_0xF87683CDF73C3F6E) and [SET_BLIP_COLOUR](#\_0x03D7FB09E75D6B7E) to make the blip not rotate along with the camera.
     * By default, the blip will show as a *regular* blip with the specified color/sprite if it is outside of the minimap view.
     * Example image:
     * ![minimap](https://i.imgur.com/qLbXWcQ.png)
     * ![big map](https://i.imgur.com/0j7O7Rh.png)
     * (Native name is *likely* to actually be ADD_BLIP_FOR_AREA, but due to the usual reasons this can't be confirmed)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [\_ADD_BLIP_FOR_AREA](?\_0xCE5D0E5E315DB238).</strong>
     *
     * Hash: 0x6228F159
     */
    function addBlipForArea(pos: Vector3, width: number, height: number): number;
}
export declare namespace misc {
    /**
     * No comment provided
     *
     * Hash: 0xF97B1C93
     */
    function enableEnhancedHostSupport(enabled: boolean): void;
    /**
     * No comment provided
     *
     * Hash: 0x13B6855D
     */
    function flagServerAsPrivate(private_: boolean): void;
    /**
     * Returns the current console output buffer.
     *
     * Hash: 0xE57429FA
     */
    function getConsoleBuffer(): string;
    /**
     * Gets the current game timer in milliseconds.
     *
     * Hash: 0xA4EA0691
     */
    function getGameTimer(): number;
    /**
     * This native converts the passed string to a hash.
     *
     * Hash: 0x98EFF6F1
     */
    function getHashKey(model: string): number;
    /**
     * No comment provided
     *
     * Hash: 0xF01E2AAB
     */
    function getHeliMainRotorHealth(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x5F70F5A3
     */
    function getHostId(): string;
    /**
     * No comment provided
     *
     * Hash: 0x23473EA4
     */
    function getPasswordHash(password: string): string;
    /**
     * No comment provided
     *
     * Hash: 0x76876154
     */
    function isFlashLightOn(ped: number | Ped): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x8E8CC653
     */
    function performHttpRequestInternal(requestData: string, requestDataLength: number): number;
    /**
     * No comment provided
     *
     * Hash: 0x6B171E87
     */
    function performHttpRequestInternalEx(requestData: number | Object): number;
    /**
     * Prints 'structured trace' data to the server `file descriptor 3` channel. This is not generally useful outside of
     * server monitoring utilities.
     *
     * Hash: 0x90892DED
     */
    function printStructuredTrace(jsonString: string): void;
    /**
     * Registers a listener for console output messages.
     *
     * Hash: 0x281B5448
     */
    function registerConsoleListener(listener: Function): void;
    /**
     * No comment provided
     *
     * Hash: 0x341B16D2
     */
    function setConvar(varName: string, value: string): void;
    /**
     * Used to replicate a server variable onto clients.
     *
     * Hash: 0xF292858C
     */
    function setConvarReplicated(varName: string, value: string): void;
    /**
     * No comment provided
     *
     * Hash: 0x9338D547
     */
    function setConvarServerInfo(varName: string, value: string): void;
    /**
     * No comment provided
     *
     * Hash: 0xF90B7469
     */
    function setGameType(gametypeName: string): void;
    /**
     * Sets the handler for HTTP requests made to the executing resource.
     *
     * Example request URL: `http://localhost:30120/http-test/ping` - this request will be sent to the `http-test` resource with the `/ping` path.
     *
     * The handler function assumes the following signature:
     *
     * ```ts
     * function HttpHandler(
     * request: {
     * address: string;
     * headers: Record<string, string>;
     * method: string;
     * path: string;
     * setDataHandler(handler: (data: string) => void): void;
     * setDataHandler(handler: (data: ArrayBuffer) => void, binary: 'binary'): void;
     * setCancelHandler(handler: () => void): void;
     * },
     * response: {
     * writeHead(code: number, headers?: Record<string, string | string[]>): void;
     * write(data: string): void;
     * send(data?: string): void;
     * }
     * ): void;
     * ```
     *
     * *   **request**: The request object.
     * *   **address**: The IP address of the request sender.
     * *   **path**: The path to where the request was sent.
     * *   **headers**: The headers sent with the request.
     * *   **method**: The request method.
     * *   **setDataHandler**: Sets the handler for when a data body is passed with the request. Additionally you can pass the `'binary'` argument to receive a `BufferArray` in JavaScript or `System.Byte[]` in C# (has no effect in Lua).
     * *   **setCancelHandler**: Sets the handler for when the request is cancelled.
     * *   **response**: An object to control the response.
     * *   **writeHead**: Sets the status code & headers of the response. Can be only called once and won't work if called after running other response functions.
     * *   **write**: Writes to the response body without sending it. Can be called multiple times.
     * *   **send**: Writes to the response body and then sends it along with the status code & headers, finishing the request.
     *
     * Hash: 0xF5C6330C
     */
    function setHttpHandler(handler: Function): void;
    /**
     * No comment provided
     *
     * Hash: 0xB7BA82DC
     */
    function setMapName(mapName: string): void;
    /**
     * Sets the entity lockdown mode for a specific routing bucket.
     *
     * Lockdown modes are:
     *
     * | Mode       | Meaning                                                    |
     * | ---------- | ---------------------------------------------------------- |
     * | `strict`   | No entities can be created by clients at all.              |
     * | `relaxed`  | Only script-owned entities created by clients are blocked. |
     * | `inactive` | Clients can create any entity they want.                   |
     *
     * Hash: 0xA0F2201F
     */
    function setRoutingBucketEntityLockdownMode(bucketId: number, mode: string): void;
    /**
     * Sets whether or not the specified routing bucket has automatically-created population enabled.
     *
     * Hash: 0xCE51AC2C
     */
    function setRoutingBucketPopulationEnabled(bucketId: number, mode: boolean): void;
    /**
     * The backing function for TriggerClientEvent.
     *
     * Hash: 0x2F7A49E6
     */
    function triggerClientEventInternal(eventName: string, eventTarget: string, eventPayload: string, payloadLength: number): void;
    /**
     * The backing function for TriggerLatentClientEvent.
     *
     * Hash: 0x70B35890
     */
    function triggerLatentClientEventInternal(eventName: string, eventTarget: string, eventPayload: string, payloadLength: number, bps: number): void;
    /**
     * No comment provided
     *
     * Hash: 0x2E310ACD
     */
    function verifyPasswordHash(password: string, hash: string): boolean;
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
    function addConvarChangeListener(conVarFilter: string, handler: Function): number;
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
    function addStateBagChangeHandler(keyFilter: string, bagFilter: string, handler: Function): number;
    /**
     * Cancels the currently executing event.
     *
     * Hash: 0xFA29D35D
     */
    function cancelEvent(): void;
    /**
     * No comment provided
     *
     * Hash: 0x1E86F206
     */
    function deleteFunctionReference(referenceIdentity: string): void;
    /**
     * No comment provided
     *
     * Hash: 0xF4E2079D
     */
    function duplicateFunctionReference(referenceIdentity: string): string;
    /**
     * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
     *
     * Hash: 0x561C060B
     */
    function executeCommand(commandString: string): void;
    /**
     * An internal function for converting a stack trace object to a string.
     *
     * Hash: 0xD70C3BCA
     */
    function formatStackTrace(traceData: number | Object): string;
    /**
     * Can be used to get a console variable of type `char*`, for example a string.
     *
     * Hash: 0x6CCD2564
     */
    function getConvar(varName: string, default_: string): string;
    /**
     * Can be used to get a console variable casted back to `bool`.
     *
     * Hash: 0x7E8EBFE5
     */
    function getConvarBool(varName: string, defaultValue: boolean): boolean;
    /**
     * This will have floating point inaccuracy.
     *
     * Hash: 0x9E666D
     */
    function getConvarFloat(varName: string, defaultValue: number): number;
    /**
     * Can be used to get a console variable casted back to `int` (an integer value).
     *
     * Hash: 0x935C0AB2
     */
    function getConvarInt(varName: string, default_: number): number;
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
    function getGameBuildNumber(): number;
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
    function getGameName(): string;
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
    function getGamePool(poolName: string): number;
    /**
     * No comment provided
     *
     * Hash: 0x9F1C4383
     */
    function getInstanceId(): number;
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
    function getRegisteredCommands(): number;
    /**
     * No comment provided
     *
     * Hash: 0x78D864C7
     */
    function getStateBagKeys(bagName: string): number;
    /**
     * Returns the value of a state bag key.
     *
     * Hash: 0x637F4C75
     */
    function getStateBagValue(bagName: string, key: string): number;
    /**
     * No comment provided
     *
     * Hash: 0x7EBB9929
     */
    function isAceAllowed(_object: string): boolean;
    /**
     * Gets whether or not this is the CitizenFX server.
     *
     * Hash: 0xCF24C52E
     */
    function isDuplicityVersion(): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x37CF52CE
     */
    function isPrincipalAceAllowed(principal: string, _object: string): boolean;
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
    function registerCommand(commandName: string, handler: Function, restricted: boolean): void;
    /**
     * No comment provided
     *
     * Hash: 0xEAC49841
     */
    function removeConvarChangeListener(cookie: number): void;
    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Removes a handler for changes to a state bag.
     *
     * Hash: 0xD36BE661
     */
    function removeStateBagChangeHandler(cookie: number): void;
    /**
     * Internal function for setting a state bag value.
     *
     * Hash: 0x8D50E33A
     */
    function setStateBagValue(bagName: string, keyName: string, valueData: string, valueLength: number, replicated: boolean): void;
    /**
     * No comment provided
     *
     * Hash: 0x12A330
     */
    function stateBagHasKey(bagName: string, key: string): boolean;
    /**
     * The backing function for TriggerEvent.
     *
     * Hash: 0x91310870
     */
    function triggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void;
    /**
     * Returns whether or not the currently executing event was canceled.
     *
     * Hash: 0x58382A19
     */
    function wasEventCanceled(): boolean;
}
export declare namespace ped {
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
    function addDecorationFromHashes(ped: number | Ped, collection: number | string, overlay: number | string): void;
    /**
     * CLEAR_PED_PROP
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_PROP](?\_0x0943E5B8E078E76E).</strong>
     *
     * Hash: 0x2D23D743
     */
    function clearProp(ped: number | Ped, propId: number): void;
    /**
     * CLEAR_PED_SECONDARY_TASK
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_SECONDARY_TASK](?\_0x176CECF6F920D707).</strong>
     *
     * Hash: 0xA635F451
     */
    function clearSecondaryTask(ped: number | Ped): void;
    /**
     * Creates a ped (biped character, pedestrian, actor) with the specified model at the specified position and heading.
     * This ped will initially be owned by the creating script as a mission entity, and the model should be loaded already
     * (e.g. using REQUEST_MODEL).
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CREATE_PED](?\_0xD49F9B0955C367DE).</strong>
     *
     * Hash: 0x389EF71
     */
    function create(pedType: number, modelHash: number | string, pos: Vector3, heading: number, isNetwork: boolean, bScriptHostPed: boolean): number;
    /**
     * CREATE_PED_INSIDE_VEHICLE
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CREATE_PED_INSIDE_VEHICLE](?\_0x7DD959874C1FD534).</strong>
     *
     * Hash: 0x3000F092
     */
    function createInsideVehicle(vehicle: number | Vehicle, pedType: number, modelHash: number | string, seat: number, isNetwork: boolean, bScriptHostPed: boolean): number;
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
    function getAlls(): number;
    /**
     * Returns the hash of weapon the Ped is currently using.
     *
     * Hash: 0xB0237302
     */
    function getCurrentWeapon(ped: number | Ped): number;
    /**
     * No comment provided
     *
     * Hash: 0xF7C6792D
     */
    function getLastInVehicleSeat(vehicle: number | Vehicle, seatIndex: number): number;
    /**
     * No comment provided
     *
     * Hash: 0x2CE311A7
     */
    function getArmour(ped: number | Ped): number;
    /**
     * No comment provided
     *
     * Hash: 0x63458C27
     */
    function getCauseOfDeath(ped: number | Ped): number;
    /**
     * No comment provided
     *
     * Hash: 0xC182F76E
     */
    function getDesiredHeading(ped: number | Ped): number;
    /**
     * No comment provided
     *
     * Hash: 0x388FDE9A
     */
    function getInVehicleSeat(vehicle: number | Vehicle, seatIndex: number): number;
    /**
     * No comment provided
     *
     * Hash: 0xA45B6C8D
     */
    function getMaxHealth(ped: number | Ped): number;
    /**
     * Gets the current relationship group hash of a ped.
     *
     * Hash: 0x354F283C
     */
    function getRelationshipGroupHash(ped: number | Ped): number;
    /**
     * Gets the script task command currently assigned to the ped.
     *
     * Hash: 0x84FE084
     */
    function getScriptTaskCommand(ped: number | Ped): number;
    /**
     * Gets the stage of the peds scripted task.
     *
     * Hash: 0x44B0E5E2
     */
    function getScriptTaskStage(ped: number | Ped): number;
    /**
     * Get the last entity that damaged the ped. This native is used server side when using OneSync.
     *
     * Hash: 0x535DB43F
     */
    function getSourceOfDamage(ped: number | Ped): number;
    /**
     * Get the entity that killed the ped. This native is used server side when using OneSync.
     *
     * Hash: 0x84ADF9EB
     */
    function getSourceOfDeath(ped: number | Ped): number;
    /**
     * Gets the type of a ped's specific task given an index of the CPedTaskSpecificDataNode nodes.
     * A ped will typically have a task at index 0, if a ped has multiple tasks at once they will be in the order 0, 1, 2, etc.
     *
     * Hash: 0x7F4563D3
     */
    function getSpecificTaskType(ped: number | Ped, index: number): number;
    /**
     * No comment provided
     *
     * Hash: 0x40321B83
     */
    function getStealthMovement(ped: number | Ped): boolean;
    /**
     * An alias of [GET_CURRENT_PED_WEAPON](#\_0xB0237302).
     *
     * Note, the client-side [GET_SELECTED_PED_WEAPON](#\_0x0A6DB4965674D243) native returns the weapon selected via the HUD (weapon wheel). This data is not available to FXServer.
     *
     * Hash: 0xD240123E
     */
    function getSelectedWeapon(ped: number | Ped): number;
    /**
     * No comment provided
     *
     * Hash: 0x25865633
     */
    function isHandcuffed(ped: number | Ped): boolean;
    /**
     * No comment provided
     *
     * Hash: 0xC833BBE1
     */
    function isRagdoll(ped: number | Ped): boolean;
    /**
     * No comment provided
     *
     * Hash: 0xEFEED13C
     */
    function isStrafing(ped: number | Ped): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x5AE7EDA2
     */
    function isUsingActionMode(ped: number | Ped): boolean;
    /**
     * SET_CURRENT_PED_WEAPON
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_CURRENT_PED_WEAPON](?\_0xADF692B254977C0C).</strong>
     *
     * Hash: 0xB8278882
     */
    function setCurrentWeapon(ped: number | Ped, weaponHash: number | string, bForceInHand: boolean): void;
    /**
     * ```
     * NativeDB Added Parameter 4: BOOL p3
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_AMMO](?\_0x14E56BC5B5DB6A19).</strong>
     *
     * Hash: 0xBF90DF1A
     */
    function setAmmo(ped: number | Ped, weaponHash: number | string, ammo: number): void;
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
    function setArmour(ped: number | Ped, amount: number): void;
    /**
     * SET_PED_CAN_RAGDOLL
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_CAN_RAGDOLL](?\_0xB128377056A54E2A).</strong>
     *
     * Hash: 0xCF1384C4
     */
    function setCanRagdoll(ped: number | Ped, toggle: boolean): void;
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
    function setComponentVariation(ped: number | Ped, componentId: number, drawableId: number, textureId: number, paletteId: number): void;
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
    function setConfigFlag(ped: number | Ped, flagId: number, value: boolean): void;
    /**
     * ```
     * Sets Ped Default Clothes
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_DEFAULT_COMPONENT_VARIATION](?\_0x45EEE61580806D63).</strong>
     *
     * Hash: 0xC866A984
     */
    function setDefaultComponentVariation(ped: number | Ped): void;
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
    function setHairTint(ped: number | Ped, colorID: number, highlightColorID: number): void;
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
    function setHeadBlendData(ped: number | Ped, shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean): void;
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
    function setHeadOverlay(ped: number | Ped, overlayID: number, index: number, opacity: number): void;
    /**
     * SET_PED_INTO_VEHICLE
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_INTO_VEHICLE](?\_0xF75B0D629E1C063D).</strong>
     *
     * Hash: 0x7500C79
     */
    function setIntoVehicle(ped: number | Ped, vehicle: number | Vehicle, seatIndex: number): void;
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
    function setPropIndex(ped: number | Ped, componentId: number, drawableId: number, textureId: number, attach: boolean): void;
    /**
     * ```
     * p1 is always 0 in R* scripts; and a quick disassembly seems to indicate that p1 is unused.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RANDOM_COMPONENT_VARIATION](?\_0xC8A9481A01E63C28).</strong>
     *
     * Hash: 0x4111BA46
     */
    function setRandomComponentVariation(ped: number | Ped): void;
    /**
     * SET_PED_RANDOM_PROPS
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RANDOM_PROPS](?\_0xC44AA05345C992C6).</strong>
     *
     * Hash: 0xE3318E0E
     */
    function setRandomProps(ped: number | Ped): void;
    /**
     * `PED::SET_PED_RESET_FLAG(PLAYER::PLAYER_PED_ID(), 240, 1);`
     * Known values:
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RESET_FLAG](?\_0xC1E8A365BF3B29F2).</strong>
     *
     * Hash: 0xCFF6FF66
     */
    function setResetFlag(ped: number | Ped, flagId: number, doReset: boolean): void;
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
    function setToRagdoll(ped: number | Ped, minTime: number, maxTime: number, ragdollType: number, bAbortIfInjured: boolean, bAbortIfDead: boolean, bForceScriptControl: boolean): void;
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
    function setToRagdollWithFall(ped: number | Ped, minTime: number, maxTime: number, nFallType: number, dirX: number, dirY: number, dirZ: number, fGroundHeight: number, grab1X: number, grab1Y: number, grab1Z: number, grab2X: number, grab2Y: number, grab2Z: number): void;
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
    function setEyeColor(ped: number | Ped, index: number): void;
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
    function setFaceFeature(ped: number | Ped, index: number, scale: number): void;
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
    function setHeadOverlayColor(ped: number | Ped, overlayID: number, colorType: number, colorID: number, secondColorID: number): void;
}
export declare namespace player {
    /**
     * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
     *
     * Hash: 0x8689A825
     */
    function getMeleeWeaponDamageModifier(playerId: number | string | Player): number;
    /**
     * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
     *
     * Hash: 0x2A3D7CDA
     */
    function getWeaponDamageModifier(playerId: number | string | Player): number;
    /**
     * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
     *
     * Hash: 0xF1543251
     */
    function getWeaponDefenseModifier(playerId: number | string | Player): number;
    /**
     * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
     *
     * Hash: 0x986B65FF
     */
    function getWeaponDefenseModifier2(playerId: number | string | Player): number;
    /**
     * Returns whether or not the specified player has enough information to start a commerce session for.
     *
     * Hash: 0x429461C3
     */
    function canStartCommerceSession(playerSrc: string): boolean;
    /**
     * ```
     * `This executes at the same as speed as PLAYER::SET_PLAYER_WANTED_LEVEL(player, 0, false);`
     * `PLAYER::GET_PLAYER_WANTED_LEVEL(player); executes in less than half the time. Which means that it's worth first checking if the wanted level needs to be cleared before clearing. However, this is mostly about good code practice and can important in other situations. The difference in time in this example is negligible.`
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PLAYER_WANTED_LEVEL](?\_0xB302540597885499).</strong>
     *
     * Hash: 0x54EA5BCC
     */
    function clearWantedLevel(player: number | string | Player): void;
    /**
     * Returns whether or not the player exists
     *
     * Hash: 0x12038599
     */
    function doesExist(playerSrc: string): boolean;
    /**
     * Requests whether or not the player owns the specified SKU.
     *
     * Hash: 0x167ABA27
     */
    function doesOwnSku(playerSrc: string, skuId: number): boolean;
    /**
     * Requests whether or not the player owns the specified package.
     *
     * Hash: 0xDEF0480B
     */
    function doesOwnSkuExt(playerSrc: string, skuId: number): boolean;
    /**
     * No comment provided
     *
     * Hash: 0xBA0613E1
     */
    function drop(playerSrc: string, reason: string): void;
    /**
     * No comment provided
     *
     * Hash: 0x62FC38D0
     */
    function getAirDragMultiplierForsVehicle(playerSrc: string): number;
    /**
     * No comment provided
     *
     * Hash: 0xFF7F66AB
     */
    function getNumIdentifiers(playerSrc: string): number;
    /**
     * No comment provided
     *
     * Hash: 0x63D13184
     */
    function getNumIndices(): number;
    /**
     * No comment provided
     *
     * Hash: 0x619E4A3D
     */
    function getNumTokens(playerSrc: string): number;
    /**
     * Gets the current camera rotation for a specified player. This native is used server side when using OneSync.
     *
     * Hash: 0x433C765D
     */
    function getCameraRotation(playerSrc: string): Vector3;
    /**
     * No comment provided
     *
     * Hash: 0xFEE404F9
     */
    function getEndpoint(playerSrc: string): string;
    /**
     * Gets the current fake wanted level for a specified player. This native is used server side when using OneSync.
     *
     * Hash: 0x98D244
     */
    function getFakeWantedLevel(playerSrc: string): number;
    /**
     * Gets the focus position (i.e. the position of the active camera in the game world) of a player.
     *
     * Hash: 0x586F80FF
     */
    function getFocusPos(playerSrc: string): Vector3;
    /**
     * No comment provided
     *
     * Hash: 0xC8A9CE08
     */
    function getFromIndex(index: number): string;
    /**
     * No comment provided
     *
     * Hash: 0xE52D9680
     */
    function getGuid(playerSrc: string): string;
    /**
     * To get the number of identifiers, use [GET_NUM_PLAYER_IDENTIFIERS](#\_0xFF7F66AB)
     *
     * To get a specific type of identifier, use [GET_PLAYER_IDENTIFIER_BY_TYPE](#\_0xA61C8FC6)
     *
     * Hash: 0x7302DBCF
     */
    function getIdentifier(playerSrc: string, identiferIndex: number): string;
    /**
     * Get an identifier from a player by the type of the identifier.
     * Known [Identifiers](https://docs.fivem.net/docs/scripting-reference/runtimes/lua/functions/GetPlayerIdentifiers/#identifier-types)
     *
     * Hash: 0xA61C8FC6
     */
    function getIdentifierByType(playerSrc: string, identifierType: string): string;
    /**
     * No comment provided
     *
     * Hash: 0x680C90EE
     */
    function getInvincible(playerSrc: string): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x427E8E6A
     */
    function getLastMsg(playerSrc: string): number;
    /**
     * No comment provided
     *
     * Hash: 0x2A50657
     */
    function getMaxArmour(playerSrc: string): number;
    /**
     * No comment provided
     *
     * Hash: 0x8154E470
     */
    function getMaxHealth(playerSrc: string): number;
    /**
     * No comment provided
     *
     * Hash: 0x406B4B20
     */
    function getName(playerSrc: string): string;
    /**
     * Used to get the player's Ped Entity ID when a valid `playerSrc` is passed.
     *
     * Hash: 0x6E31E993
     */
    function getPed(playerSrc: string): number;
    /**
     * ```cpp
     * const int ENET_PACKET_LOSS_SCALE = 65536;
     *
     * enum PeerStatistics
     * {
     * // PacketLoss will only update once every 10 seconds, use PacketLossEpoch if you want the time
     * // since the last time the packet loss was updated.
     *
     * // the amount of packet loss the player has, needs to be scaled with PACKET_LOSS_SCALE
     * PacketLoss = 0,
     * // The variance in the packet loss
     * PacketLossVariance = 1,
     * // The time since the last packet update in ms, relative to the peers connection time
     * PacketLossEpoch = 2,
     * // The mean amount of time it takes for a packet to get to the client (ping)
     * RoundTripTime = 3,
     * // The variance in the round trip time
     * RoundTripTimeVariance = 4,
     * // Despite their name, these are only updated once every 5 seconds, you can get the last time this was updated with PacketThrottleEpoch
     * // The last recorded round trip time of a packet
     * LastRoundTripTime = 5,
     * // The last round trip time variance
     * LastRoundTripTimeVariance = 6,
     * // The time since the last packet throttle update, relative to the peers connection time
     * PacketThrottleEpoch = 7,
     * };
     * ```
     *
     * These statistics only update once every 10 seconds.
     *
     * Hash: 0x9A928294
     */
    function getPeerStatistics(playerSrc: string, peerStatistic: number): number;
    /**
     * See [GET_PLAYER_PEER_STATISTICS](#\_0x9A928294) if you want more detailed information, like packet loss, and packet/rtt variance
     *
     * Hash: 0xFF1290D4
     */
    function getPing(playerSrc: string): number;
    /**
     * Gets the routing bucket for the specified player.
     *
     * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
     *
     * Hash: 0x52441C34
     */
    function getRoutingBucket(playerSrc: string): number;
    /**
     * No comment provided
     *
     * Hash: 0x9873E404
     */
    function getTeam(playerSrc: string): number;
    /**
     * ```
     * Gets the amount of time player has spent evading the cops.
     * Counter starts and increments only when cops are chasing the player.
     * If the player is evading, the timer will pause.
     * ```
     *
     * Hash: 0x7ADE63E1
     */
    function getTimeInPursuit(playerSrc: string, lastPursuit: boolean): number;
    /**
     * Gets the current time online for a specified player.
     *
     * Hash: 0x67D2E605
     */
    function getTimeOnline(playerSrc: string): number;
    /**
     * Gets a player's token. Tokens can be used to enhance banning logic, however are specific to a server.
     *
     * Hash: 0x54C06897
     */
    function getToken(playerSrc: string, index: number): string;
    /**
     * Gets the current known coordinates for the specified player from cops perspective. This native is used server side when using OneSync.
     *
     * Hash: 0x821F2D2C
     */
    function getWantedCentrePosition(playerSrc: string): Vector3;
    /**
     * ```
     * Returns given players wanted level server-side.
     * ```
     *
     * Hash: 0xBDCDD163
     */
    function getWantedLevel(playerSrc: string): number;
    /**
     * This native checks if the given ped is a player.
     *
     * Hash: 0x404794CA
     */
    function isPedA(ped: number | Ped): boolean;
    /**
     * No comment provided
     *
     * Hash: 0xDEDAE23D
     */
    function isAceAllowed(playerSrc: string, _object: string): boolean;
    /**
     * Requests whether or not the commerce data for the specified player has loaded.
     *
     * Hash: 0xBEFE93F4
     */
    function isCommerceInfoLoaded(playerSrc: string): boolean;
    /**
     * Requests whether or not the commerce data for the specified player has loaded from Tebex.
     *
     * Hash: 0x1D14F4FE
     */
    function isCommerceInfoLoadedExt(playerSrc: string): boolean;
    /**
     * ```
     * This will return true if the player is evading wanted level, meaning that the wanted level stars are blink.
     * Otherwise will return false.
     *
     * If the player is not wanted, it simply returns false.
     * ```
     *
     * Hash: 0x89A3881A
     */
    function isEvadingWantedLevel(playerSrc: string): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x1F14F2AC
     */
    function isInFreeCamMode(playerSrc: string): boolean;
    /**
     * No comment provided
     *
     * Hash: 0xC7D2C20C
     */
    function isUsingSuperJump(playerSrc: string): boolean;
    /**
     * Requests the commerce data for the specified player, including the owned SKUs. Use `IS_PLAYER_COMMERCE_INFO_LOADED` to check if it has loaded.
     *
     * Hash: 0xA8F63EAB
     */
    function loadCommerceData(playerSrc: string): void;
    /**
     * Requests the commerce data from Tebex for the specified player, including the owned SKUs.
     *
     * Use [`IS_PLAYER_COMMERCE_INFO_LOADED_EXT`](#\_0x1D14F4FE) to check if it has loaded.
     *
     * This will not automatically update whenever a client purchases a package, if you want to fetch new purchases you will need to call this native again.
     *
     * This native will temporarily cache the players commerce data for 10 seconds, a call to this native after 10 seconds will re-fetch the players commerce data.
     *
     * Hash: 0x7995539E
     */
    function loadCommerceDataExt(playerSrc: string): void;
    /**
     * Requests the specified player to buy the passed SKU. This'll pop up a prompt on the client, which upon acceptance
     * will open the browser prompting further purchase details.
     *
     * Hash: 0x96F93CCE
     */
    function requestCommerceSession(playerSrc: string, skuId: number): void;
    /**
     * ```
     * Flags:
     * SPC_AMBIENT_SCRIPT = (1 << 1),
     * SPC_CLEAR_TASKS = (1 << 2),
     * SPC_REMOVE_FIRES = (1 << 3),
     * SPC_REMOVE_EXPLOSIONS = (1 << 4),
     * SPC_REMOVE_PROJECTILES = (1 << 5),
     * SPC_DEACTIVATE_GADGETS = (1 << 6),
     * SPC_REENABLE_CONTROL_ON_DEATH = (1 << 7),
     * SPC_LEAVE_CAMERA_CONTROL_ON = (1 << 8),
     * SPC_ALLOW_PLAYER_DAMAGE = (1 << 9),
     * SPC_DONT_STOP_OTHER_CARS_AROUND_PLAYER = (1 << 10),
     * SPC_PREVENT_EVERYBODY_BACKOFF = (1 << 11),
     * SPC_ALLOW_PAD_SHAKE = (1 << 12)
     * See: https://alloc8or.re/gta5/doc/enums/eSetPlayerControlFlag.txt
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_CONTROL](?\_0x8D32347D6D4C40A2).</strong>
     *
     * Hash: 0xD17AFCD8
     */
    function setControl(player: number | string | Player, bHasControl: boolean, flags: number): void;
    /**
     * Sets the culling radius for the specified player.
     * Set to `0.0` to reset.
     *
     * **WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
     *
     * Hash: 0x8A2FBAD4
     */
    function setCullingRadius(playerSrc: string, radius: number): void;
    /**
     * Make the player impervious to all forms of damage.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_INVINCIBLE](?\_0x239528EACDC3E7DE).</strong>
     *
     * Hash: 0xDFB9A2A2
     */
    function setInvincible(player: number | string | Player, bInvincible: boolean): void;
    /**
     * Set the model for a specific Player. Note that this will destroy the current Ped for the Player and create a new one, any reference to the old ped will be invalid after calling this.
     * As per usual, make sure to request the model first and wait until it has loaded.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_MODEL](?\_0x00A1CADD00108836).</strong>
     *
     * Hash: 0x774A4C54
     */
    function setModel(player: number | string | Player, model: number | string): void;
    /**
     * Sets the routing bucket for the specified player.
     *
     * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
     *
     * Hash: 0x6504EB38
     */
    function setRoutingBucket(playerSrc: string, bucket: number): void;
    /**
     * SET_PLAYER_WANTED_LEVEL
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_WANTED_LEVEL](?\_0x39FF19C64EF7DA5B).</strong>
     *
     * Hash: 0xB7A0914B
     */
    function setWantedLevel(player: number | string | Player, wantedLevel: number, delayedResponse: boolean): void;
    /**
     * No comment provided
     *
     * Hash: 0x1E35DBBA
     */
    function tempBan(playerSrc: string, reason: string): void;
    /**
     * On the server this will return the players source, on the client it will return the player handle.
     *
     * Hash: 0xA56135E0
     */
    function getFromStateBagName(bagName: string): number;
}
export declare namespace vehicle {
    /**
     * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
     *
     * Hash: 0xA886495D
     */
    function getHeliBodyHealth(heli: number | Vehicle): number;
    /**
     * This is a getter for [SET_DISABLE_HELI_EXPLODE_FROM_BODY_DAMAGE](#\_0xEDBC8405B3895CC9)
     *
     * Hash: 0x82AFC0A3
     */
    function getHeliDisableExplodeFromBodyDamage(heli: number | Vehicle): boolean;
    /**
     * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
     *
     * Hash: 0xA0FA0354
     */
    function getHeliEngineHealth(heli: number | Vehicle): number;
    /**
     * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
     *
     * Hash: 0xD4EC7858
     */
    function getHeliGasTankHealth(heli: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0xC37D668
     */
    function getHeliMainRotorDamageScale(heli: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x1944AC95
     */
    function getHeliPitchControl(heli: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0xC40161E2
     */
    function getHeliRearRotorDamageScale(heli: number | Vehicle): number;
    /**
     * This native is a getter for [SET_HELI_TAIL_ROTOR_HEALTH](#\_0xFE205F38AAA58E5B)
     *
     * Hash: 0x33EE6E2B
     */
    function getHeliRearRotorHealth(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x12948DE9
     */
    function getHeliRollControl(heli: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x22239130
     */
    function getHeliTailRotorDamageScale(heli: number | Vehicle): number;
    /**
     * **Note**: This native is deprecated, please use [`GET_HELI_REAR_ROTOR_HEALTH`](#\_0x33EE6E2B) instead.
     *
     * Hash: 0xA41BC13D
     */
    function getHeliTailRotorHealth(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x8E86238D
     */
    function getHeliThrottleControl(heli: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x8FDC0768
     */
    function getHeliYawControl(heli: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x3EFE38D1
     */
    function getIsHeliEngineRunning(heli: number | Vehicle): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x1C939E87
     */
    function getThrusterSideRcsThrottle(jetpack: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x94E24C96
     */
    function getThrusterThrottle(jetpack: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x456E34A
     */
    function getTrainBackwardCarriage(train: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x24DC88D9
     */
    function getTrainForwardCarriage(train: number | Vehicle): number;
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
    function getHornType(vehicle: number | Vehicle): number;
    /**
     * This is a getter for [SET_HELI_TAIL_EXPLODE_THROW_DASHBOARD](#\_0x3EC8BF18AA453FE9)
     *
     * Hash: 0x23E46BD7
     */
    function isHeliTailBoomBreakable(heli: number | Vehicle): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x2C59F987
     */
    function isHeliTailBoomBroken(heli: number | Vehicle): boolean;
    /**
     * No comment provided
     *
     * Hash: 0xFA9336E5
     */
    function isTrainCaboose(train: number | Vehicle): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x77CC80DC
     */
    function doesTrainStopAtStations(train: number | Vehicle): boolean;
    /**
     * Gets the trains desired speed.
     *
     * Hash: 0xA4921EF5
     */
    function getTrainCruiseSpeed(train: number | Vehicle): number;
    /**
     * Gets the direction the train is facing
     *
     * Hash: 0x8DAF79B6
     */
    function getTrainDirection(train: number | Vehicle): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x81B50033
     */
    function getTrainState(train: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x9AA339D
     */
    function getTrainTrackIndex(train: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x483B013C
     */
    function getHandbrake(vehicle: number | Vehicle): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x1382FCEA
     */
    function getSteeringAngle(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0xBB340D04
     */
    function isEngineStarting(vehicle: number | Vehicle): boolean;
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
    function create(modelHash: number | string, pos: Vector3, heading: number, isNetwork: boolean, netMissionEntity: boolean): number;
    /**
     * Equivalent to CREATE_VEHICLE, but it uses 'server setter' logic (like the former CREATE_AUTOMOBILE) as a workaround for
     * reliability concerns regarding entity creation RPC.
     *
     * Unlike CREATE_AUTOMOBILE, this supports other vehicle types as well.
     *
     * Hash: 0x6AE51D4B
     */
    function createServerSetter(modelHash: number | string, _type: string, pos: Vector3, heading: number): number;
    /**
     * Deletes the specified `entity` and any carriage its attached to, or that is attached to it.
     *
     * Hash: 0x523BA3DA
     */
    function deleteTrain(entity: number | Entity): void;
    /**
     * No comment provided
     *
     * Hash: 0x43F15989
     */
    function doesBoatSinkWhenWrecked(vehicle: number | Vehicle): boolean;
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
    function getAlls(): number;
    /**
     * No comment provided
     *
     * Hash: 0x7DC6D022
     */
    function getIsEngineRunning(vehicle: number | Vehicle): boolean;
    /**
     * No comment provided
     *
     * Hash: 0xD7EC8760
     */
    function getIsPrimaryColourCustom(vehicle: number | Vehicle): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x288AD228
     */
    function getIsSecondaryColourCustom(vehicle: number | Vehicle): boolean;
    /**
     * See the client-side [GET_LANDING_GEAR_STATE](#\_0x9B0F3DCA3DB0F4CD) native for a description of landing gear states.
     *
     * Hash: 0xA6F02670
     */
    function getLandingGearState(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x95070FA
     */
    function getTrainCarriageEngine(train: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x4B8285CF
     */
    function getTrainCarriageIndex(train: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x2B2FCC28
     */
    function getBodyHealth(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x40D82D88
     */
    function getColours(vehicle: number | Vehicle): [number, number];
    /**
     * No comment provided
     *
     * Hash: 0x1C2B9FEF
     */
    function getCustomPrimaryColour(vehicle: number | Vehicle): [number, number, number];
    /**
     * No comment provided
     *
     * Hash: 0x3FF247A2
     */
    function getCustomSecondaryColour(vehicle: number | Vehicle): [number, number, number];
    /**
     * No comment provided
     *
     * Hash: 0xA0DBD08D
     */
    function getDashboardColour(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0xFD15C065
     */
    function getDirtLevel(vehicle: number | Vehicle): number;
    /**
     * Currently it only works when set to "all players".
     *
     * Hash: 0x1DC50247
     */
    function getDoorsLockedForPlayer(vehicle: number | Vehicle): number;
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
    function getDoorLockStatus(vehicle: number | Vehicle): number;
    /**
     * Returns the open position of the specified door on the target vehicle.
     *
     * Hash: 0x6E35C49C
     */
    function getDoorStatus(vehicle: number | Vehicle, doorIndex: number): number;
    /**
     * No comment provided
     *
     * Hash: 0x8880038A
     */
    function getEngineHealth(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x80E4659B
     */
    function getExtraColours(vehicle: number | Vehicle): [number, number];
    /**
     * Gets the flight nozzel position for the specified vehicle. See the client-side [\_GET_VEHICLE_FLIGHT_NOZZLE_POSITION](#\_0xDA62027C8BDB326E) native for usage examples.
     *
     * Hash: 0xAD40AD55
     */
    function getFlightNozzlePosition(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0xD7147656
     */
    function getHeadlightsColour(vehicle: number | Vehicle): number;
    /**
     * Gets the lock on state for the specified vehicle. See the client-side [GET_VEHICLE_HOMING_LOCKON_STATE](#\_0xE6B0E8CFC3633BF0) native for a description of lock on states.
     *
     * Hash: 0xFBDE9FD8
     */
    function getHomingLockonState(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0xCCFF3B6E
     */
    function getInteriorColour(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x7C278621
     */
    function getLightsState(vehicle: number | Vehicle): [boolean, boolean, boolean];
    /**
     * No comment provided
     *
     * Hash: 0xEC82A51D
     */
    function getLivery(vehicle: number | Vehicle): number;
    /**
     * Gets the vehicle that is locked on to for the specified vehicle.
     *
     * Hash: 0x4A557117
     */
    function getLockOnTarget(vehicle: number | Vehicle): number;
    /**
     * Getter to check the neon colour of a vehicle. This native is the server side getter of [GET_VEHICLE_NEON_LIGHTS_COLOUR](#\_0x7619EEE8C886757F).
     *
     * Hash: 0xD9319DCB
     */
    function getNeonColour(vehicle: number | Vehicle): [number, number, number];
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
    function getNeonEnabled(vehicle: number | Vehicle, neonIndex: number): boolean;
    /**
     * No comment provided
     *
     * Hash: 0xE8522D58
     */
    function getNumberPlateText(vehicle: number | Vehicle): string;
    /**
     * No comment provided
     *
     * Hash: 0x499747B6
     */
    function getNumberPlateTextIndex(vehicle: number | Vehicle): number;
    /**
     * Gets the vehicle the specified Ped is/was in depending on bool value. This native is used server side when using OneSync.
     *
     * Hash: 0xAFE92319
     */
    function getPedIsIn(ped: number | Ped, lastVehicle: boolean): number;
    /**
     * No comment provided
     *
     * Hash: 0xE41595CE
     */
    function getPetrolTankHealth(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x57037960
     */
    function getRadioStationIndex(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x872CF42
     */
    function getRoofLivery(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x9963D5F9
     */
    function getTotalRepairs(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x75280015
     */
    function getTyreSmokeColor(vehicle: number | Vehicle): [number, number, number];
    /**
     * No comment provided
     *
     * Hash: 0xDA58D7AE
     */
    function getWheelType(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0x13D53892
     */
    function getWindowTint(vehicle: number | Vehicle): number;
    /**
     * No comment provided
     *
     * Hash: 0xB8AF3137
     */
    function hasBeenDamagedByBullets(vehicle: number | Vehicle): boolean;
    /**
     * No comment provided
     *
     * Hash: 0xE4E83A5B
     */
    function hasBeenOwnedByPlayer(vehicle: number | Vehicle): boolean;
    /**
     * No comment provided
     *
     * Hash: 0xD5C39EE6
     */
    function isBoatAnchoredAndFrozen(vehicle: number | Vehicle): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x9049DB44
     */
    function isBoatWrecked(vehicle: number | Vehicle): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x42098B5
     */
    function isExtraTurnedOn(vehicle: number | Vehicle, extraId: number): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x25EB5873
     */
    function isSirenOn(vehicle: number | Vehicle): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x48C80210
     */
    function isTyreBurst(vehicle: number | Vehicle, wheelID: number, completely: boolean): boolean;
    /**
     * See the client-side [IS_VEHICLE_WINDOW_INTACT](#\_0x46E571A0E20D01F1) for a window indexes list.
     *
     * Hash: 0xAC4EF23D
     */
    function isWindowIntact(vehicle: number | Vehicle, windowIndex: number): boolean;
    /**
     * SET_VEHICLE_ALARM
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_ALARM](?\_0xCDE5E70C1DDB954C).</strong>
     *
     * Hash: 0x24877D84
     */
    function setAlarm(vehicle: number | Vehicle, state: boolean): void;
    /**
     * ```
     * p2 often set to 1000.0 in the decompiled scripts.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_BODY_HEALTH](?\_0xB77D05AC8C78AADB).</strong>
     *
     * Hash: 0x920C2517
     */
    function setBodyHealth(vehicle: number | Vehicle, value: number): void;
    /**
     * colorPrimary & colorSecondary are the paint indexes for the vehicle.
     * For a list of valid paint indexes, view: pastebin.com/pwHci0xK
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_COLOURS](?\_0x4F1D4BE3A7F24601).</strong>
     *
     * Hash: 0x57F24253
     */
    function setColours(vehicle: number | Vehicle, colorPrimary: number, colorSecondary: number): void;
    /**
     * Sets the selected vehicle's colors to their default value (specific variant specified using the colorCombination parameter).
     * Range of possible values for colorCombination is currently unknown, I couldn't find where these values are stored either (Disquse's guess was vehicles.meta but I haven't seen it in there.)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_COLOUR_COMBINATION](?\_0x33E8CD3322E2FE31).</strong>
     *
     * Hash: 0xA557AEAD
     */
    function setColourCombination(vehicle: number | Vehicle, colorCombination: number): void;
    /**
     * ```
     * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_CUSTOM_PRIMARY_COLOUR](?\_0x7141766F91D15BEA).</strong>
     *
     * Hash: 0x8DF9F9BC
     */
    function setCustomPrimaryColour(vehicle: number | Vehicle, r: number, g: number, b: number): void;
    /**
     * ```
     * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_CUSTOM_SECONDARY_COLOUR](?\_0x36CED73BFED89754).</strong>
     *
     * Hash: 0x9D77259E
     */
    function setCustomSecondaryColour(vehicle: number | Vehicle, r: number, g: number, b: number): void;
    /**
     * Sets the dirt level of the passed vehicle.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DIRT_LEVEL](?\_0x79D3B596FE44EE8B).</strong>
     *
     * Hash: 0x2B39128B
     */
    function setDirtLevel(vehicle: number | Vehicle, dirtLevel: number): void;
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
    function setDoorsLocked(vehicle: number | Vehicle, doorLockStatus: number): void;
    /**
     * See eDoorId declared in [`SET_VEHICLE_DOOR_SHUT`](#\_0x93D9BD300D7789E5)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DOOR_BROKEN](?\_0xD4D4F6A4AB575A33).</strong>
     *
     * Hash: 0x8147FEA7
     */
    function setDoorBroken(vehicle: number | Vehicle, doorIndex: number, deleteDoor: boolean): void;
    /**
     * SET_VEHICLE_NUMBER_PLATE_TEXT
     *
     * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_NUMBER_PLATE_TEXT](?\_0x95A88F0B409CDA47).</strong>
     *
     * Hash: 0x400F9556
     */
    function setNumberPlateText(vehicle: number | Vehicle, plateText: string): void;
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
    function getType(vehicle: number | Vehicle): string;
}
export declare namespace weapon {
    /**
     * GIVE_WEAPON_COMPONENT_TO_PED
     *
     * <strong>This is the server-side RPC native equivalent of the client native [GIVE_WEAPON_COMPONENT_TO_PED](?\_0xD966D51AA5B28BB9).</strong>
     *
     * Hash: 0x3E1E286D
     */
    function giveComponentToPed(ped: number | Ped, weaponHash: number | string, componentHash: number | string): void;
    /**
     * GIVE_WEAPON_TO_PED
     *
     * <strong>This is the server-side RPC native equivalent of the client native [GIVE_WEAPON_TO_PED](?\_0xBF0FD6E56C964FCB).</strong>
     *
     * Hash: 0xC4D88A85
     */
    function giveToPed(ped: number | Ped, weaponHash: number | string, ammoCount: number, isHidden: boolean, bForceInHand: boolean): void;
    /**
     * Parameter `p1` does not seem to be used or referenced in game binaries.\
     * **Note:** When called for networked entities, a `CRemoveAllWeaponsEvent` will be created per request.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_ALL_PED_WEAPONS](?\_0xF25DF915FA38C5F3).</strong>
     *
     * Hash: 0xA44CE817
     */
    function removeAllPeds(ped: number | Ped): void;
    /**
     * REMOVE_WEAPON_COMPONENT_FROM_PED
     *
     * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_WEAPON_COMPONENT_FROM_PED](?\_0x1E8BE90C74FB4C09).</strong>
     *
     * Hash: 0x412AA00D
     */
    function removeComponentFromPed(ped: number | Ped, weaponHash: number | string, componentHash: number | string): void;
    /**
     * ```
     * This native removes a specified weapon from your selected ped.
     * Weapon Hashes: pastebin.com/0wwDZgkF
     * Example:
     * C#:
     * Function.Call(Hash.REMOVE_WEAPON_FROM_PED, Game.Player.Character, 0x99B507EA);
     * C++:
     * `WEAPON::REMOVE_WEAPON_FROM_PED(PLAYER::PLAYER_PED_ID(), 0x99B507EA);`
     * The code above removes the knife from the player.
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_WEAPON_FROM_PED](?\_0x4899CB088EDF59B8).</strong>
     *
     * Hash: 0x9C37F220
     */
    function removeFromPed(ped: number | Ped, weaponHash: number | string): void;
}
export declare namespace network {
    /**
     * No comment provided
     *
     * Hash: 0x5B912C3F
     */
    function getEntityFromNetworkId(netId: number): number;
    /**
     * Returns the first owner ID of the specified entity.
     *
     * Hash: 0x1E546224
     */
    function getFirstEntityOwner(entity: number | Entity): number;
    /**
     * No comment provided
     *
     * Hash: 0x9E35DAB6
     */
    function getNetworkIdFromEntity(entity: number | Entity): number;
    /**
     * No comment provided
     *
     * Hash: 0xFFEEF513
     */
    function getVoiceProximityOverrideForPlayer(playerSrc: string): Vector3;
    /**
     * Returns the owner ID of the specified entity.
     *
     * Hash: 0x526FEE31
     */
    function getEntityOwner(entity: number | Entity): number;
}
export declare namespace kvp {
    /**
     * No comment provided
     *
     * Hash: 0xB3210203
     */
    function endFind(handle: number): void;
    /**
     * No comment provided
     *
     * Hash: 0xBD7BEBC5
     */
    function find(handle: number): string;
    /**
     * No comment provided
     *
     * Hash: 0xDD379006
     */
    function startFind(prefix: string): number;
}
export declare namespace mumble {
    /**
     * Create a permanent voice channel.
     *
     * Hash: 0x262663C5
     */
    function createChannel(id: number): void;
    /**
     * Checks if the player is currently muted
     *
     * Hash: 0x1D5D50C2
     */
    function isPlayerMuted(playerSrc: number): boolean;
    /**
     * Mutes or unmutes the specified player
     *
     * Hash: 0xCC6C2EB1
     */
    function setPlayerMuted(playerSrc: number, toggle: boolean): void;
}
export declare namespace object {
    /**
     * Creates an object (prop) with the specified model at the specified position, offset on the Z axis by the radius of the object's model.
     * This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CREATE_OBJECT](?\_0x509D5878EB39E842).</strong>
     *
     * Hash: 0x2F7AA05C
     */
    function create(modelHash: number | string, pos: Vector3, isNetwork: boolean, netMissionEntity: boolean, doorFlag: boolean): number;
    /**
     * Creates an object (prop) with the specified model centered at the specified position.
     * This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CREATE_OBJECT_NO_OFFSET](?\_0x9A294B2138ABB884).</strong>
     *
     * Hash: 0x58040420
     */
    function createNoOffset(modelHash: number | string, pos: Vector3, isNetwork: boolean, netMissionEntity: boolean, doorFlag: boolean): number;
    /**
     * Returns all object handles known to the server.
     * The data returned adheres to the following layout:
     *
     * ```
     * [127, 42, 13, 37]
     * ```
     *
     * Hash: 0x6886C3FE
     */
    function getAlls(): number;
}
export declare namespace resource {
    /**
     * Nonsynchronous operations will not wait for a disk/filesystem flush before returning from a write or delete call. They will be much faster than their synchronous counterparts (e.g., bulk operations), however, a system crash may lose the data to some recent operations.
     *
     * This native ensures all `_NO_SYNC` operations are synchronized with the disk/filesystem.
     *
     * Hash: 0xE27C97A0
     */
    function flushKvp(): void;
    /**
     * Returns the physical on-disk path of the specified resource.
     *
     * Hash: 0x61DCF017
     */
    function getPath(resourceName: string): string;
    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Registers a cached resource asset with the resource system, similar to the automatic scanning of the `stream/` folder.
     *
     * Hash: 0x9862B266
     */
    function registerAsset(resourceName: string, fileName: string): string;
    /**
     * Registers a build task factory for resources.
     * The function should return an object (msgpack map) with the following fields:
     *
     * ```
     * {
     * // returns whether the specific resource should be built
     * shouldBuild = func(resourceName: string): bool,
     *
     * // asynchronously start building the specific resource.
     * // call cb when completed
     * build = func(resourceName: string, cb: func(success: bool, status: string): void): void
     * }
     * ```
     *
     * Hash: 0x285B43CA
     */
    function registerBuildTaskFactory(factoryId: string, factoryFn: Function): void;
    /**
     * Writes the specified data to a file in the specified resource.
     * Using a length of `-1` will automatically detect the length assuming the data is a C string.
     *
     * Hash: 0xA09E7E7B
     */
    function saveFile(resourceName: string, fileName: string, data: string, dataLength: number): boolean;
    /**
     * Scans the resources in the specified resource root. This function is only available in the 'monitor mode' process and is
     * not available for user resources.
     *
     * Hash: 0x636F097F
     */
    function scanRoot(rootPath: string, callback: Function): void;
    /**
     * Schedules the specified resource to run a tick as soon as possible, bypassing the server's fixed tick rate.
     *
     * Hash: 0xB88A73AD
     */
    function scheduleTick(resourceName: string): void;
    /**
     * No comment provided
     *
     * Hash: 0x29B440DC
     */
    function start(resourceName: string): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x21783161
     */
    function stop(resourceName: string): boolean;
    /**
     * No comment provided
     *
     * Hash: 0x7389B5DF
     */
    function deleteKvp(key: string): void;
    /**
     * Nonsynchronous [DELETE_RESOURCE_KVP](#\_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0x4152C90
     */
    function deleteKvpNoSync(key: string): void;
    /**
     * Returns the name of the currently executing resource.
     *
     * Hash: 0xE5E9EBBB
     */
    function getCurrentName(): string;
    /**
     * No comment provided
     *
     * Hash: 0x4D52FE5B
     */
    function getInvoking(): string;
    /**
     * No comment provided
     *
     * Hash: 0x863F27B
     */
    function getNums(): number;
    /**
     * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
     * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
     *
     * Hash: 0x776E864
     */
    function getNumMetadata(resourceName: string, metadataKey: string): number;
    /**
     * No comment provided
     *
     * Hash: 0x387246B7
     */
    function getByFindIndex(findIndex: number): string;
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
     * Hash: 0x97628584
     */
    function getCommands(resource: string): number;
    /**
     * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
     *
     * Hash: 0x35BDCEEA
     */
    function getKvpFloat(key: string): number;
    /**
     * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
     *
     * Hash: 0x557B586A
     */
    function getKvpInt(key: string): number;
    /**
     * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
     *
     * Hash: 0x5240DA5A
     */
    function getKvpString(key: string): string;
    /**
     * Gets the metadata value at a specified key/index from a resource's manifest.
     * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
     *
     * Hash: 0x964BAB1D
     */
    function getMetadata(resourceName: string, metadataKey: string, index: number): string;
    /**
     * Returns the current state of the specified resource.
     *
     * Hash: 0x4039B485
     */
    function getState(resourceName: string): string;
    /**
     * Reads the contents of a text file in a specified resource.
     * If executed on the client, this file has to be included in `files` in the resource manifest.
     * Example: `local data = LoadResourceFile("devtools", "data.json")`
     *
     * Hash: 0x76A9EE1F
     */
    function loadFile(resourceName: string, fileName: string): string;
    /**
     * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
     *
     * Hash: 0xD233A168
     */
    function registerAsEventHandler(eventName: string): void;
    /**
     * A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).
     *
     * Hash: 0x21C7A35B
     */
    function setKvp(key: string, value: string): void;
    /**
     * A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).
     *
     * Hash: 0x9ADD2938
     */
    function setKvpFloat(key: string, value: number): void;
    /**
     * Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0x3517BFBE
     */
    function setKvpFloatNoSync(key: string, value: number): void;
    /**
     * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
     *
     * Hash: 0x6A2B1E8
     */
    function setKvpInt(key: string, value: number): void;
    /**
     * Nonsynchronous [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0x26AEB707
     */
    function setKvpIntNoSync(key: string, value: number): void;
    /**
     * Nonsynchronous [SET_RESOURCE_KVP](#\_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0xCF9A2FF
     */
    function setKvpNoSync(key: string, value: string): void;
}
export declare namespace task {
    /**
     * Clear a ped's tasks. Stop animations and other tasks created by scripts.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_TASKS](?\_0xE1EF3C1216AFF2CD).</strong>
     *
     * Hash: 0xDE3316AB
     */
    function clearPeds(ped: number | Ped): void;
    /**
     * Immediately stops the pedestrian from whatever it's doing. The difference between this and [CLEAR_PED_TASKS](#\_0xE1EF3C1216AFF2CD) is that this one teleports the ped but does not change the position of the ped.
     *
     * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_TASKS_IMMEDIATELY](?\_0xAAA34F8A7CB32098).</strong>
     *
     * Hash: 0xBC045625
     */
    function clearPedsImmediately(ped: number | Ped): void;
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
    function combatPed(ped: number | Ped, targetPed: number | Ped): void;
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
    function driveBy(driverPed: number | Ped, targetPed: number | Ped, targetVehicle: number | Vehicle, targetX: number, targetY: number, targetZ: number, distanceToShoot: number, pedAccuracy: number, firingPattern: number | string): void;
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
    function enterVehicle(ped: number | Ped, vehicle: number | Vehicle, timeout: number, seatIndex: number, speed: number, flag: number): void;
    /**
     * TASK_EVERYONE_LEAVE_VEHICLE
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_EVERYONE_LEAVE_VEHICLE](?\_0x7F93691AB4B92272).</strong>
     *
     * Hash: 0xC1971F30
     */
    function everyoneLeaveVehicle(vehicle: number | Vehicle): void;
    /**
     * TASK_GO_STRAIGHT_TO_COORD
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_GO_STRAIGHT_TO_COORD](?\_0xD76B57B44F1E6F8B).</strong>
     *
     * Hash: 0x80A9E7A7
     */
    function goStraightToCoord(ped: number | Ped, pos: Vector3, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void;
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
    function goToCoordAnyMeans(ped: number | Ped, pos: Vector3, fMoveBlendRatio: number, vehicle: number | Vehicle, bUseLongRangeVehiclePathing: boolean, drivingFlags: number, fMaxRangeToShootTargets: number): void;
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
    function goToEntity(entity: number | Entity, target: number | Entity, duration: number, distance: number, speed: number): void;
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
    function handsUp(ped: number | Ped, duration: number, facingPed: number | Ped): void;
    /**
     * Flags are the same flags used in [`TASK_LEAVE_VEHICLE`](#\_0xD3DBCE61A490BE02)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_LEAVE_ANY_VEHICLE](?\_0x504D54DF3F6F2247).</strong>
     *
     * Hash: 0xDBDD79FA
     */
    function leaveAnyVehicle(ped: number | Ped, flags: number): void;
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
    function leaveVehicle(ped: number | Ped, vehicle: number | Vehicle, flags: number): void;
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
    function playAnim(ped: number | Ped, animDictionary: string, animationName: string, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: number, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void;
    /**
     * Similar in functionality to [`TASK_PLAY_ANIM`](#\_0xEA47FE3719165B94), except the position and rotation parameters let you specify the initial position and rotation of the task. The ped is teleported to the position specified.
     * [Animations list](https://alexguirre.github.io/animations-list/)
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_PLAY_ANIM_ADVANCED](?\_0x83CDB10EA29B370B).</strong>
     *
     * Hash: 0x3DDEB0E6
     */
    function playAnimAdvanced(ped: number | Ped, animDictionary: string, animationName: string, pos: Vector3, rot: Vector3, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: any, animTime: number): void;
    /**
     * TASK_REACT_AND_FLEE_PED
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_REACT_AND_FLEE_PED](?\_0x72C896464915D1B1).</strong>
     *
     * Hash: 0x8A632BD8
     */
    function reactAndFleePed(ped: number | Ped, fleeTarget: number | Ped): void;
    /**
     * ```
     * Firing Pattern Hash Information: https://pastebin.com/Px036isB
     * ```
     *
     * <strong>This is the server-side RPC native equivalent of the client native [TASK_SHOOT_AT_COORD](?\_0x46A6CC01E0826106).</strong>
     *
     * Hash: 0x601C22E3
     */
    function shootAtCoord(ped: number | Ped, pos: Vector3, duration: number, firingPattern: number | string): void;
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
    function shootAtEntity(entity: number | Entity, target: number | Entity, duration: number, firingPattern: number | string): void;
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
    function warpPedIntoVehicle(ped: number | Ped, vehicle: number | Vehicle, seatIndex: number): void;
}
export declare namespace profiler {
    /**
     * Scope entry for profiler.
     *
     * Hash: 0xC795A4A9
     */
    function enterScope(scopeName: string): void;
    /**
     * Scope exit for profiler.
     *
     * Hash: 0xB39CA35C
     */
    function exitScope(): void;
    /**
     * Returns true if the profiler is active.
     *
     * Hash: 0xF8B7D7BB
     */
    function isRecording(): boolean;
}
/**
 * No comment provided
 *
 * Hash: 0x91B38FB6
 * @deprecated Use entity.getRemoteSyncedScenesAllowed(entity1) instead
 */
export declare function getEntityRemoteSyncedScenesAllowed(entity1: number | Entity): boolean;
/**
 * Enables or disables the owner check for the specified entity in network-synchronized scenes. When set to `false`, the entity cannot participate in synced scenes initiated by clients that do not own the entity.
 *
 * By default, this is `false` for all entities, meaning only the entity's owner can include it in networked synchronized scenes.
 *
 * Hash: 0xD3FC9D88
 * @deprecated Use entity.setRemoteSyncedScenesAllowed(entity1, allow) instead
 */
export declare function setEntityRemoteSyncedScenesAllowed(entity1: number | Entity, allow: boolean): void;
/**
 * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
 *
 * Hash: 0xEDBE6ADD
 * @deprecated Use entity.isPositionFrozen(entity1) instead
 */
export declare function isEntityPositionFrozen(entity1: number | Entity): boolean;
/**
 * ```cpp
 * enum eApplyForceTypes {
 * APPLY_TYPE_FORCE = 0,
 * APPLY_TYPE_IMPULSE = 1,
 * APPLY_TYPE_EXTERNAL_FORCE = 2,
 * APPLY_TYPE_EXTERNAL_IMPULSE = 3,
 * APPLY_TYPE_TORQUE = 4,
 * APPLY_TYPE_ANGULAR_IMPULSE = 5
 * }
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [APPLY_FORCE_TO_ENTITY](?\_0xC5F68BE9613E2D18).</strong>
 *
 * Hash: 0xC1C0855A
 * @deprecated Use entity.applyForceTo(entity1, forceType, pos, offX, offY, offZ, nComponent, bLocalForce, bLocalOffset, bScaleByMass, bPlayAudio, bScaleByTimeWarp) instead
 */
export declare function applyForceToEntity(entity1: number | Entity, forceType: number, pos: Vector3, offX: number, offY: number, offZ: number, nComponent: number, bLocalForce: boolean, bLocalOffset: boolean, bScaleByMass: boolean, bPlayAudio: boolean, bScaleByTimeWarp: boolean): void;
/**
 * Deletes the specified entity.
 *
 * **NOTE**: For trains this will only work if called on the train engine, it will not work on its carriages.
 *
 * Hash: 0xFAA3D236
 * @deprecated Use entity.deleteEntity(entity1) instead
 */
export declare function deleteEntity(entity1: number | Entity): void;
/**
 * No comment provided
 *
 * Hash: 0x3AC90869
 * @deprecated Use entity.doesExist(entity1) instead
 */
export declare function doesEntityExist(entity1: number | Object): boolean;
/**
 * Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using [`SET_ENTITY_COORDS`](#\_0x06843DA7060A026B).
 *
 * <strong>This is the server-side RPC native equivalent of the client native [FREEZE_ENTITY_POSITION](?\_0x428CA6DBD1094446).</strong>
 *
 * Hash: 0x65C16D57
 * @deprecated Use entity.freezePosition(entity1, toggle) instead
 */
export declare function freezeEntityPosition(entity1: number | Entity, toggle: boolean): void;
/**
 * Gets the entity that this entity is attached to.
 *
 * Hash: 0xFE1589F9
 * @deprecated Use entity.getAttachedTo(entity1) instead
 */
export declare function getEntityAttachedTo(entity1: number | Entity): number;
/**
 * No comment provided
 *
 * Hash: 0xE8C0C629
 * @deprecated Use entity.getCollisionDisabled(entity1) instead
 */
export declare function getEntityCollisionDisabled(entity1: number | Entity): boolean;
/**
 * Gets the current coordinates for a specified entity. This native is used server side when using OneSync.
 *
 * See [GET_ENTITY_COORDS](#\_0x3FEF770D40960D5A) for client side.
 *
 * Hash: 0x1647F1CB
 * @deprecated Use entity.getCoords(entity1) instead
 */
export declare function getEntityCoords(entity1: number | Entity): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x972CC383
 * @deprecated Use entity.getHeading(entity1) instead
 */
export declare function getEntityHeading(entity1: number | Entity): number;
/**
 * Only works for vehicle and peds
 *
 * Hash: 0x8E3222B7
 * @deprecated Use entity.getHealth(entity1) instead
 */
export declare function getEntityHealth(entity1: number | Entity): number;
/**
 * Currently it only works with peds.
 *
 * Hash: 0xC7AE6AA1
 * @deprecated Use entity.getMaxHealth(entity1) instead
 */
export declare function getEntityMaxHealth(entity1: number | Entity): number;
/**
 * No comment provided
 *
 * Hash: 0xDAFCB3EC
 * @deprecated Use entity.getModel(entity1) instead
 */
export declare function getEntityModel(entity1: number | Entity): number;
/**
 * No comment provided
 *
 * Hash: 0xD16EA02F
 * @deprecated Use entity.getOrphanMode(entity1) instead
 */
export declare function getEntityOrphanMode(entity1: number | Entity): number;
/**
 * This native gets an entity's population type.
 *
 * Hash: 0xFC30DDFF
 * @deprecated Use entity.getPopulationType(entity1) instead
 */
export declare function getEntityPopulationType(entity1: number | Entity): number;
/**
 * No comment provided
 *
 * Hash: 0x8FF45B04
 * @deprecated Use entity.getRotation(entity1) instead
 */
export declare function getEntityRotation(entity1: number | Entity): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x9BF8A73F
 * @deprecated Use entity.getRotationVelocity(entity1) instead
 */
export declare function getEntityRotationVelocity(entity1: number | Entity): Vector3;
/**
 * Gets the routing bucket for the specified entity.
 *
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 *
 * Hash: 0xED4B0486
 * @deprecated Use entity.getRoutingBucket(entity1) instead
 */
export declare function getEntityRoutingBucket(entity1: number | Entity): number;
/**
 * No comment provided
 *
 * Hash: 0xB7F70784
 * @deprecated Use entity.getScript(entity1) instead
 */
export declare function getEntityScript(entity1: number | Entity): string;
/**
 * Gets the current speed of the entity in meters per second.
 *
 * ```
 * To convert to MPH: speed * 2.236936
 * To convert to KPH: speed * 3.6
 * ```
 *
 * Hash: 0x9E1E4798
 * @deprecated Use entity.getSpeed(entity1) instead
 */
export declare function getEntitySpeed(entity1: number | Entity): number;
/**
 * Gets the entity type (as an integer), which can be one of the following defined down below:
 *
 * <strong>The following entities will return type `1`:</strong>
 *
 * *   Ped
 * *   Player
 * *   Animal (Red Dead Redemption 2)
 * *   Horse (Red Dead Redemption 2)
 *
 * <strong>The following entities will return type `2`:</strong>
 *
 * *   Automobile
 * *   Bike
 * *   Boat
 * *   Heli
 * *   Plane
 * *   Submarine
 * *   Trailer
 * *   Train
 * *   DraftVeh (Red Dead Redemption 2)
 *
 * <strong>The following entities will return type `3`:</strong>
 *
 * *   Object
 * *   Door
 * *   Pickup
 *
 * Otherwise, a value of `0` will be returned.
 *
 * Hash: 0xB1BD08D
 * @deprecated Use entity.getType(entity1) instead
 */
export declare function getEntityType(entity1: number | Entity): number;
/**
 * No comment provided
 *
 * Hash: 0xC14C9B6B
 * @deprecated Use entity.getVelocity(entity1) instead
 */
export declare function getEntityVelocity(entity1: number | Entity): Vector3;
/**
 * Gets the specific entity type (as an integer), which can be one of the following defined down below:
 *
 * #### FiveM:
 *
 * ```cpp
 * enum eNetObjEntityType
 * {
 * Automobile = 0,
 * Bike = 1,
 * Boat = 2,
 * Door = 3,
 * Heli = 4,
 * Object = 5,
 * Ped = 6,
 * Pickup = 7,
 * PickupPlacement = 8,
 * Plane = 9,
 * Submarine = 10,
 * Player = 11,
 * Trailer = 12,
 * Train = 13
 * };
 * ```
 *
 * #### RedM:
 *
 * ```cpp
 * enum eNetObjEntityType
 * {
 * Animal = 0,
 * Automobile = 1,
 * Bike = 2,
 * Boat = 3,
 * Door = 4,
 * Heli = 5,
 * Object = 6,
 * Ped = 7,
 * Pickup = 8,
 * PickupPlacement = 9,
 * Plane = 10,
 * Submarine = 11,
 * Player = 12,
 * Trailer = 13,
 * Train = 14,
 * DraftVeh = 15,
 * StatsTracker = 16,
 * PropSet = 17,
 * AnimScene = 18,
 * GroupScenario = 19,
 * Herd = 20,
 * Horse = 21,
 * WorldState = 22,
 * WorldProjectile = 23,
 * Incident = 24,
 * Guardzone = 25,
 * PedGroup = 26,
 * CombatDirector = 27,
 * PedSharedTargeting = 28,
 * Persistent = 29
 * };
 * ```
 *
 * Hash: 0x23B2A641
 * @deprecated Use entity.getNetTypeFrom(entity1) instead
 */
export declare function getNetTypeFromEntity(entity1: number | Entity): number;
/**
 * No comment provided
 *
 * Hash: 0x9C9A3BE0
 * @deprecated Use entity.hasBeenMarkedAsNoLongerNeeded(vehicle) instead
 */
export declare function hasEntityBeenMarkedAsNoLongerNeeded(vehicle: number | Vehicle): boolean;
/**
 * This native checks if the given entity is visible.
 *
 * Hash: 0x120B4ED5
 * @deprecated Use entity.isVisible(entity1) instead
 */
export declare function isEntityVisible(entity1: number | Entity): boolean;
/**
 * Sets the coordinates (world position) for a specified entity, offset by the radius of the entity on the Z axis.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_COORDS](?\_0x06843DA7060A026B).</strong>
 *
 * Hash: 0xDF70B41B
 * @deprecated Use entity.setCoords(entity1, pos, alive, deadFlag, ragdollFlag, clearArea) instead
 */
export declare function setEntityCoords(entity1: number | Entity, pos: Vector3, alive: boolean, deadFlag: boolean, ragdollFlag: boolean, clearArea: boolean): void;
/**
 * It overrides the default distance culling radius of an entity. Set to `0.0` to reset.
 * If you want to interact with an entity outside of your players' scopes set the radius to a huge number.
 *
 * **WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
 *
 * Hash: 0xD3A183A3
 * @deprecated Use entity.setDistanceCullingRadius(entity1, radius) instead
 */
export declare function setEntityDistanceCullingRadius(entity1: number | Entity, radius: number): void;
/**
 * Set the heading of an entity in degrees also known as "Yaw".
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_HEADING](?\_0x8E2530AA8ADA980E).</strong>
 *
 * Hash: 0xE0FF064D
 * @deprecated Use entity.setHeading(entity1, heading) instead
 */
export declare function setEntityHeading(entity1: number | Entity, heading: number): void;
/**
 * It allows to flag an entity to ignore the request control filter policy.
 *
 * Hash: 0x9F7F8D36
 * @deprecated Use entity.setIgnoreRequestControlFilter(entity1, ignore) instead
 */
export declare function setEntityIgnoreRequestControlFilter(entity1: number | Entity, ignore: boolean): void;
/**
 * ```cpp
 * enum EntityOrphanMode {
 * // Default, this will delete the entity when it isn't relevant to any players
 * // NOTE: this *doesn't* mean when they're no longer in scope
 * DeleteWhenNotRelevant = 0,
 * // The entity will be deleted whenever its original owner disconnects
 * // NOTE: if this is set when the entities original owner has already left it will be
 * // marked for deletion (similar to just calling DELETE_ENTITY)
 * DeleteOnOwnerDisconnect = 1,
 * // The entity will never be deleted by the server when it does relevancy checks
 * // you should only use this on entities that need to be relatively persistent
 * KeepEntity = 2
 * }
 * ```
 *
 * Sets what the server will do when the entity no longer has its original owner. By default the server will cleanup entities that it considers "no longer relevant".
 *
 * When used on trains, this native will recursively call onto all attached carriages.
 *
 * **NOTE**: When used with `KeepEntity` (2) this native only guarantees that the ***server*** will not delete the entity, client requests to delete the entity will still work perfectly fine.
 *
 * Hash: 0x489E9162
 * @deprecated Use entity.setOrphanMode(entity1, orphanMode) instead
 */
export declare function setEntityOrphanMode(entity1: number | Entity, orphanMode: number): void;
/**
 * Sets the rotation of a specified entity in the game world.
 *
 * ```
 * NativeDB Introduced: v323
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_ROTATION](?\_0x8524A8B0171D5E07).</strong>
 *
 * Hash: 0xA345EFE
 * @deprecated Use entity.setRotation(entity1, pitch, roll, yaw, rotationOrder, bDeadCheck) instead
 */
export declare function setEntityRotation(entity1: number | Entity, pitch: number, roll: number, yaw: number, rotationOrder: number, bDeadCheck: boolean): void;
/**
 * Sets the routing bucket for the specified entity.
 *
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 *
 * Hash: 0x635E5289
 * @deprecated Use entity.setRoutingBucket(entity1, bucket) instead
 */
export declare function setEntityRoutingBucket(entity1: number | Entity, bucket: number): void;
/**
 * ```
 * Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_ENTITY_VELOCITY](?\_0x1C99BB7B6E96D16F).</strong>
 *
 * Hash: 0xFF5A1988
 * @deprecated Use entity.setVelocity(entity1, pos) instead
 */
export declare function setEntityVelocity(entity1: number | Entity, pos: Vector3): void;
/**
 * Internal function for ensuring an entity has a state bag.
 *
 * Hash: 0x3BB78F05
 * @deprecated Use entity.ensureStateBag(entity1) instead
 */
export declare function ensureEntityStateBag(entity1: number | Entity): void;
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
 * Hash: 0xDFFBA12F
 * @deprecated Use entity.getEntitiesInRadius(pos, radius, entityType, sortByDistance, models) instead
 */
export declare function getEntitiesInRadius(pos: Vector3, radius: number, entityType: number, sortByDistance: boolean, models: number | Object): number;
/**
 * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](#\_0x5BA35AAF).
 *
 * Hash: 0x4BDF1867
 * @deprecated Use entity.getFromStateBagName(bagName) instead
 */
export declare function getEntityFromStateBagName(bagName: string): number;
/**
 * Creates a blip for the specified coordinates. You can use `SET_BLIP_` natives to change the blip.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_COORD](?\_0x5A039BB0BCA604B6).</strong>
 *
 * Hash: 0xC6F43D0E
 * @deprecated Use hud.addBlipForCoord(pos) instead
 */
export declare function addBlipForCoord(pos: Vector3): number;
/**
 * Create a blip that by default is red (enemy), you can use [SET_BLIP_AS_FRIENDLY](#\_0xC6F43D0E) to make it blue (friend).\
 * Can be used for objects, vehicles and peds.
 * Example of enemy:
 * ![enemy](https://i.imgur.com/fl78svv.png)
 * Example of friend:
 * ![friend](https://i.imgur.com/Q16ho5d.png)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_ENTITY](?\_0x5CDE92C702A8FCE7).</strong>
 *
 * Hash: 0x30822554
 * @deprecated Use hud.addBlipForEntity(entity) instead
 */
export declare function addBlipForEntity(entity: number | Entity): number;
/**
 * Create a blip with a radius for the specified coordinates (it doesnt create the blip sprite, so you need to use [AddBlipCoords](#\_0xC6F43D0E))
 * Example image:
 * ![example](https://i.imgur.com/9hQl3DB.png)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_RADIUS](?\_0x46818D79B1F7499A).</strong>
 *
 * Hash: 0x4626756C
 * @deprecated Use hud.addBlipForRadius(pos, radius) instead
 */
export declare function addBlipForRadius(pos: Vector3, radius: number): number;
/**
 * Removes the blip from your map.
 * **Note:** This function only works on the script that created the blip, if you wish to remove blips created by other scripts, see [`SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT`](#\_0x86A652570E5F25DD).
 *
 * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_BLIP](?\_0x86A652570E5F25DD).</strong>
 *
 * Hash: 0xD8C3C1CD
 * @deprecated Use hud.removeBlip(blip) instead
 */
export declare function removeBlip(blip: number | Blip): void;
/**
 * Sets the displayed sprite for a specific blip.
 * There's a [list of sprites](https://docs.fivem.net/game-references/blips/) on the FiveM documentation site.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_BLIP_SPRITE](?\_0xDF735600A4696DAF).</strong>
 *
 * Hash: 0x8DBBB0B9
 * @deprecated Use hud.setBlipSprite(blip, spriteId) instead
 */
export declare function setBlipSprite(blip: number | Blip, spriteId: number): void;
/**
 * Adds a rectangular blip for the specified coordinates/area.
 * It is recommended to use [SET_BLIP_ROTATION](#\_0xF87683CDF73C3F6E) and [SET_BLIP_COLOUR](#\_0x03D7FB09E75D6B7E) to make the blip not rotate along with the camera.
 * By default, the blip will show as a *regular* blip with the specified color/sprite if it is outside of the minimap view.
 * Example image:
 * ![minimap](https://i.imgur.com/qLbXWcQ.png)
 * ![big map](https://i.imgur.com/0j7O7Rh.png)
 * (Native name is *likely* to actually be ADD_BLIP_FOR_AREA, but due to the usual reasons this can't be confirmed)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [\_ADD_BLIP_FOR_AREA](?\_0xCE5D0E5E315DB238).</strong>
 *
 * Hash: 0x6228F159
 * @deprecated Use hud.addBlipForArea(pos, width, height) instead
 */
export declare function addBlipForArea(pos: Vector3, width: number, height: number): number;
/**
 * No comment provided
 *
 * Hash: 0xF97B1C93
 * @deprecated Use misc.enableEnhancedHostSupport(enabled) instead
 */
export declare function enableEnhancedHostSupport(enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x13B6855D
 * @deprecated Use misc.flagServerAsPrivate(private_) instead
 */
export declare function flagServerAsPrivate(private_: boolean): void;
/**
 * Returns the current console output buffer.
 *
 * Hash: 0xE57429FA
 * @deprecated Use misc.getConsoleBuffer() instead
 */
export declare function getConsoleBuffer(): string;
/**
 * Gets the current game timer in milliseconds.
 *
 * Hash: 0xA4EA0691
 * @deprecated Use misc.getGameTimer() instead
 */
export declare function getGameTimer(): number;
/**
 * This native converts the passed string to a hash.
 *
 * Hash: 0x98EFF6F1
 * @deprecated Use misc.getHashKey(model) instead
 */
export declare function getHashKey(model: string): number;
/**
 * No comment provided
 *
 * Hash: 0xF01E2AAB
 * @deprecated Use misc.getHeliMainRotorHealth(vehicle) instead
 */
export declare function getHeliMainRotorHealth(vehicle: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x5F70F5A3
 * @deprecated Use misc.getHostId() instead
 */
export declare function getHostId(): string;
/**
 * No comment provided
 *
 * Hash: 0x23473EA4
 * @deprecated Use misc.getPasswordHash(password) instead
 */
export declare function getPasswordHash(password: string): string;
/**
 * No comment provided
 *
 * Hash: 0x76876154
 * @deprecated Use misc.isFlashLightOn(ped) instead
 */
export declare function isFlashLightOn(ped: number | Ped): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8E8CC653
 * @deprecated Use misc.performHttpRequestInternal(requestData, requestDataLength) instead
 */
export declare function performHttpRequestInternal(requestData: string, requestDataLength: number): number;
/**
 * No comment provided
 *
 * Hash: 0x6B171E87
 * @deprecated Use misc.performHttpRequestInternalEx(requestData) instead
 */
export declare function performHttpRequestInternalEx(requestData: number | Object): number;
/**
 * Prints 'structured trace' data to the server `file descriptor 3` channel. This is not generally useful outside of
 * server monitoring utilities.
 *
 * Hash: 0x90892DED
 * @deprecated Use misc.printStructuredTrace(jsonString) instead
 */
export declare function printStructuredTrace(jsonString: string): void;
/**
 * Registers a listener for console output messages.
 *
 * Hash: 0x281B5448
 * @deprecated Use misc.registerConsoleListener(listener) instead
 */
export declare function registerConsoleListener(listener: Function): void;
/**
 * No comment provided
 *
 * Hash: 0x341B16D2
 * @deprecated Use misc.setConvar(varName, value) instead
 */
export declare function setConvar(varName: string, value: string): void;
/**
 * Used to replicate a server variable onto clients.
 *
 * Hash: 0xF292858C
 * @deprecated Use misc.setConvarReplicated(varName, value) instead
 */
export declare function setConvarReplicated(varName: string, value: string): void;
/**
 * No comment provided
 *
 * Hash: 0x9338D547
 * @deprecated Use misc.setConvarServerInfo(varName, value) instead
 */
export declare function setConvarServerInfo(varName: string, value: string): void;
/**
 * No comment provided
 *
 * Hash: 0xF90B7469
 * @deprecated Use misc.setGameType(gametypeName) instead
 */
export declare function setGameType(gametypeName: string): void;
/**
 * Sets the handler for HTTP requests made to the executing resource.
 *
 * Example request URL: `http://localhost:30120/http-test/ping` - this request will be sent to the `http-test` resource with the `/ping` path.
 *
 * The handler function assumes the following signature:
 *
 * ```ts
 * function HttpHandler(
 * request: {
 * address: string;
 * headers: Record<string, string>;
 * method: string;
 * path: string;
 * setDataHandler(handler: (data: string) => void): void;
 * setDataHandler(handler: (data: ArrayBuffer) => void, binary: 'binary'): void;
 * setCancelHandler(handler: () => void): void;
 * },
 * response: {
 * writeHead(code: number, headers?: Record<string, string | string[]>): void;
 * write(data: string): void;
 * send(data?: string): void;
 * }
 * ): void;
 * ```
 *
 * *   **request**: The request object.
 * *   **address**: The IP address of the request sender.
 * *   **path**: The path to where the request was sent.
 * *   **headers**: The headers sent with the request.
 * *   **method**: The request method.
 * *   **setDataHandler**: Sets the handler for when a data body is passed with the request. Additionally you can pass the `'binary'` argument to receive a `BufferArray` in JavaScript or `System.Byte[]` in C# (has no effect in Lua).
 * *   **setCancelHandler**: Sets the handler for when the request is cancelled.
 * *   **response**: An object to control the response.
 * *   **writeHead**: Sets the status code & headers of the response. Can be only called once and won't work if called after running other response functions.
 * *   **write**: Writes to the response body without sending it. Can be called multiple times.
 * *   **send**: Writes to the response body and then sends it along with the status code & headers, finishing the request.
 *
 * Hash: 0xF5C6330C
 * @deprecated Use misc.setHttpHandler(handler) instead
 */
export declare function setHttpHandler(handler: Function): void;
/**
 * No comment provided
 *
 * Hash: 0xB7BA82DC
 * @deprecated Use misc.setMapName(mapName) instead
 */
export declare function setMapName(mapName: string): void;
/**
 * Sets the entity lockdown mode for a specific routing bucket.
 *
 * Lockdown modes are:
 *
 * | Mode       | Meaning                                                    |
 * | ---------- | ---------------------------------------------------------- |
 * | `strict`   | No entities can be created by clients at all.              |
 * | `relaxed`  | Only script-owned entities created by clients are blocked. |
 * | `inactive` | Clients can create any entity they want.                   |
 *
 * Hash: 0xA0F2201F
 * @deprecated Use misc.setRoutingBucketEntityLockdownMode(bucketId, mode) instead
 */
export declare function setRoutingBucketEntityLockdownMode(bucketId: number, mode: string): void;
/**
 * Sets whether or not the specified routing bucket has automatically-created population enabled.
 *
 * Hash: 0xCE51AC2C
 * @deprecated Use misc.setRoutingBucketPopulationEnabled(bucketId, mode) instead
 */
export declare function setRoutingBucketPopulationEnabled(bucketId: number, mode: boolean): void;
/**
 * The backing function for TriggerClientEvent.
 *
 * Hash: 0x2F7A49E6
 * @deprecated Use misc.triggerClientEventInternal(eventName, eventTarget, eventPayload, payloadLength) instead
 */
export declare function triggerClientEventInternal(eventName: string, eventTarget: string, eventPayload: string, payloadLength: number): void;
/**
 * The backing function for TriggerLatentClientEvent.
 *
 * Hash: 0x70B35890
 * @deprecated Use misc.triggerLatentClientEventInternal(eventName, eventTarget, eventPayload, payloadLength, bps) instead
 */
export declare function triggerLatentClientEventInternal(eventName: string, eventTarget: string, eventPayload: string, payloadLength: number, bps: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2E310ACD
 * @deprecated Use misc.verifyPasswordHash(password, hash) instead
 */
export declare function verifyPasswordHash(password: string, hash: string): boolean;
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
 * @deprecated Use misc.addConvarChangeListener(conVarFilter, handler) instead
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
 * Hash: 0x5BA35AAF
 * @deprecated Use misc.addStateBagChangeHandler(keyFilter, bagFilter, handler) instead
 */
export declare function addStateBagChangeHandler(keyFilter: string, bagFilter: string, handler: Function): number;
/**
 * Cancels the currently executing event.
 *
 * Hash: 0xFA29D35D
 * @deprecated Use misc.cancelEvent() instead
 */
export declare function cancelEvent(): void;
/**
 * No comment provided
 *
 * Hash: 0x1E86F206
 * @deprecated Use misc.deleteFunctionReference(referenceIdentity) instead
 */
export declare function deleteFunctionReference(referenceIdentity: string): void;
/**
 * No comment provided
 *
 * Hash: 0xF4E2079D
 * @deprecated Use misc.duplicateFunctionReference(referenceIdentity) instead
 */
export declare function duplicateFunctionReference(referenceIdentity: string): string;
/**
 * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
 *
 * Hash: 0x561C060B
 * @deprecated Use misc.executeCommand(commandString) instead
 */
export declare function executeCommand(commandString: string): void;
/**
 * An internal function for converting a stack trace object to a string.
 *
 * Hash: 0xD70C3BCA
 * @deprecated Use misc.formatStackTrace(traceData) instead
 */
export declare function formatStackTrace(traceData: number | Object): string;
/**
 * Can be used to get a console variable of type `char*`, for example a string.
 *
 * Hash: 0x6CCD2564
 * @deprecated Use misc.getConvar(varName, default_) instead
 */
export declare function getConvar(varName: string, default_: string): string;
/**
 * Can be used to get a console variable casted back to `bool`.
 *
 * Hash: 0x7E8EBFE5
 * @deprecated Use misc.getConvarBool(varName, defaultValue) instead
 */
export declare function getConvarBool(varName: string, defaultValue: boolean): boolean;
/**
 * This will have floating point inaccuracy.
 *
 * Hash: 0x9E666D
 * @deprecated Use misc.getConvarFloat(varName, defaultValue) instead
 */
export declare function getConvarFloat(varName: string, defaultValue: number): number;
/**
 * Can be used to get a console variable casted back to `int` (an integer value).
 *
 * Hash: 0x935C0AB2
 * @deprecated Use misc.getConvarInt(varName, default_) instead
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
 * Hash: 0x804B9F7B
 * @deprecated Use misc.getGameBuildNumber() instead
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
 * Hash: 0xE8EAA18B
 * @deprecated Use misc.getGameName() instead
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
 * Hash: 0x2B9D4F50
 * @deprecated Use misc.getGamePool(poolName) instead
 */
export declare function getGamePool(poolName: string): number;
/**
 * No comment provided
 *
 * Hash: 0x9F1C4383
 * @deprecated Use misc.getInstanceId() instead
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
 * Hash: 0xD4BEF069
 * @deprecated Use misc.getRegisteredCommands() instead
 */
export declare function getRegisteredCommands(): number;
/**
 * No comment provided
 *
 * Hash: 0x78D864C7
 * @deprecated Use misc.getStateBagKeys(bagName) instead
 */
export declare function getStateBagKeys(bagName: string): number;
/**
 * Returns the value of a state bag key.
 *
 * Hash: 0x637F4C75
 * @deprecated Use misc.getStateBagValue(bagName, key) instead
 */
export declare function getStateBagValue(bagName: string, key: string): number;
/**
 * No comment provided
 *
 * Hash: 0x7EBB9929
 * @deprecated Use misc.isAceAllowed(_object) instead
 */
export declare function isAceAllowed(_object: string): boolean;
/**
 * Gets whether or not this is the CitizenFX server.
 *
 * Hash: 0xCF24C52E
 * @deprecated Use misc.isDuplicityVersion() instead
 */
export declare function isDuplicityVersion(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x37CF52CE
 * @deprecated Use misc.isPrincipalAceAllowed(principal, _object) instead
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
 * Hash: 0x5FA79B0F
 * @deprecated Use misc.registerCommand(commandName, handler, restricted) instead
 */
export declare function registerCommand(commandName: string, handler: Function, restricted: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xEAC49841
 * @deprecated Use misc.removeConvarChangeListener(cookie) instead
 */
export declare function removeConvarChangeListener(cookie: number): void;
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Removes a handler for changes to a state bag.
 *
 * Hash: 0xD36BE661
 * @deprecated Use misc.removeStateBagChangeHandler(cookie) instead
 */
export declare function removeStateBagChangeHandler(cookie: number): void;
/**
 * Internal function for setting a state bag value.
 *
 * Hash: 0x8D50E33A
 * @deprecated Use misc.setStateBagValue(bagName, keyName, valueData, valueLength, replicated) instead
 */
export declare function setStateBagValue(bagName: string, keyName: string, valueData: string, valueLength: number, replicated: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x12A330
 * @deprecated Use misc.stateBagHasKey(bagName, key) instead
 */
export declare function stateBagHasKey(bagName: string, key: string): boolean;
/**
 * The backing function for TriggerEvent.
 *
 * Hash: 0x91310870
 * @deprecated Use misc.triggerEventInternal(eventName, eventPayload, payloadLength) instead
 */
export declare function triggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void;
/**
 * Returns whether or not the currently executing event was canceled.
 *
 * Hash: 0x58382A19
 * @deprecated Use misc.wasEventCanceled() instead
 */
export declare function wasEventCanceled(): boolean;
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
 * @deprecated Use ped.addDecorationFromHashes(ped1, collection, overlay) instead
 */
export declare function addPedDecorationFromHashes(ped1: number | Ped, collection: number | string, overlay: number | string): void;
/**
 * CLEAR_PED_PROP
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_PROP](?\_0x0943E5B8E078E76E).</strong>
 *
 * Hash: 0x2D23D743
 * @deprecated Use ped.clearProp(ped1, propId) instead
 */
export declare function clearPedProp(ped1: number | Ped, propId: number): void;
/**
 * CLEAR_PED_SECONDARY_TASK
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_SECONDARY_TASK](?\_0x176CECF6F920D707).</strong>
 *
 * Hash: 0xA635F451
 * @deprecated Use ped.clearSecondaryTask(ped1) instead
 */
export declare function clearPedSecondaryTask(ped1: number | Ped): void;
/**
 * Creates a ped (biped character, pedestrian, actor) with the specified model at the specified position and heading.
 * This ped will initially be owned by the creating script as a mission entity, and the model should be loaded already
 * (e.g. using REQUEST_MODEL).
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CREATE_PED](?\_0xD49F9B0955C367DE).</strong>
 *
 * Hash: 0x389EF71
 * @deprecated Use ped.create(pedType, modelHash, pos, heading, isNetwork, bScriptHostPed) instead
 */
export declare function createPed(pedType: number, modelHash: number | string, pos: Vector3, heading: number, isNetwork: boolean, bScriptHostPed: boolean): number;
/**
 * CREATE_PED_INSIDE_VEHICLE
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CREATE_PED_INSIDE_VEHICLE](?\_0x7DD959874C1FD534).</strong>
 *
 * Hash: 0x3000F092
 * @deprecated Use ped.createInsideVehicle(vehicle, pedType, modelHash, seat, isNetwork, bScriptHostPed) instead
 */
export declare function createPedInsideVehicle(vehicle: number | Vehicle, pedType: number, modelHash: number | string, seat: number, isNetwork: boolean, bScriptHostPed: boolean): number;
/**
 * Returns all peds handles known to the server.
 * The data returned adheres to the following layout:
 *
 * ```
 * [127, 42, 13, 37]
 * ```
 *
 * Hash: 0xB8584FEF
 * @deprecated Use ped.getAlls() instead
 */
export declare function getAllPeds(): number;
/**
 * Returns the hash of weapon the Ped is currently using.
 *
 * Hash: 0xB0237302
 * @deprecated Use ped.getCurrentWeapon(ped1) instead
 */
export declare function getCurrentPedWeapon(ped1: number | Ped): number;
/**
 * No comment provided
 *
 * Hash: 0xF7C6792D
 * @deprecated Use ped.getLastInVehicleSeat(vehicle, seatIndex) instead
 */
export declare function getLastPedInVehicleSeat(vehicle: number | Vehicle, seatIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x2CE311A7
 * @deprecated Use ped.getArmour(ped1) instead
 */
export declare function getPedArmour(ped1: number | Ped): number;
/**
 * No comment provided
 *
 * Hash: 0x63458C27
 * @deprecated Use ped.getCauseOfDeath(ped1) instead
 */
export declare function getPedCauseOfDeath(ped1: number | Ped): number;
/**
 * No comment provided
 *
 * Hash: 0xC182F76E
 * @deprecated Use ped.getDesiredHeading(ped1) instead
 */
export declare function getPedDesiredHeading(ped1: number | Ped): number;
/**
 * No comment provided
 *
 * Hash: 0x388FDE9A
 * @deprecated Use ped.getInVehicleSeat(vehicle, seatIndex) instead
 */
export declare function getPedInVehicleSeat(vehicle: number | Vehicle, seatIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xA45B6C8D
 * @deprecated Use ped.getMaxHealth(ped1) instead
 */
export declare function getPedMaxHealth(ped1: number | Ped): number;
/**
 * Gets the current relationship group hash of a ped.
 *
 * Hash: 0x354F283C
 * @deprecated Use ped.getRelationshipGroupHash(ped1) instead
 */
export declare function getPedRelationshipGroupHash(ped1: number | Ped): number;
/**
 * Gets the script task command currently assigned to the ped.
 *
 * Hash: 0x84FE084
 * @deprecated Use ped.getScriptTaskCommand(ped1) instead
 */
export declare function getPedScriptTaskCommand(ped1: number | Ped): number;
/**
 * Gets the stage of the peds scripted task.
 *
 * Hash: 0x44B0E5E2
 * @deprecated Use ped.getScriptTaskStage(ped1) instead
 */
export declare function getPedScriptTaskStage(ped1: number | Ped): number;
/**
 * Get the last entity that damaged the ped. This native is used server side when using OneSync.
 *
 * Hash: 0x535DB43F
 * @deprecated Use ped.getSourceOfDamage(ped1) instead
 */
export declare function getPedSourceOfDamage(ped1: number | Ped): number;
/**
 * Get the entity that killed the ped. This native is used server side when using OneSync.
 *
 * Hash: 0x84ADF9EB
 * @deprecated Use ped.getSourceOfDeath(ped1) instead
 */
export declare function getPedSourceOfDeath(ped1: number | Ped): number;
/**
 * Gets the type of a ped's specific task given an index of the CPedTaskSpecificDataNode nodes.
 * A ped will typically have a task at index 0, if a ped has multiple tasks at once they will be in the order 0, 1, 2, etc.
 *
 * Hash: 0x7F4563D3
 * @deprecated Use ped.getSpecificTaskType(ped1, index) instead
 */
export declare function getPedSpecificTaskType(ped1: number | Ped, index: number): number;
/**
 * No comment provided
 *
 * Hash: 0x40321B83
 * @deprecated Use ped.getStealthMovement(ped1) instead
 */
export declare function getPedStealthMovement(ped1: number | Ped): boolean;
/**
 * An alias of [GET_CURRENT_PED_WEAPON](#\_0xB0237302).
 *
 * Note, the client-side [GET_SELECTED_PED_WEAPON](#\_0x0A6DB4965674D243) native returns the weapon selected via the HUD (weapon wheel). This data is not available to FXServer.
 *
 * Hash: 0xD240123E
 * @deprecated Use ped.getSelectedWeapon(ped1) instead
 */
export declare function getSelectedPedWeapon(ped1: number | Ped): number;
/**
 * No comment provided
 *
 * Hash: 0x25865633
 * @deprecated Use ped.isHandcuffed(ped1) instead
 */
export declare function isPedHandcuffed(ped1: number | Ped): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC833BBE1
 * @deprecated Use ped.isRagdoll(ped1) instead
 */
export declare function isPedRagdoll(ped1: number | Ped): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEFEED13C
 * @deprecated Use ped.isStrafing(ped1) instead
 */
export declare function isPedStrafing(ped1: number | Ped): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5AE7EDA2
 * @deprecated Use ped.isUsingActionMode(ped1) instead
 */
export declare function isPedUsingActionMode(ped1: number | Ped): boolean;
/**
 * SET_CURRENT_PED_WEAPON
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_CURRENT_PED_WEAPON](?\_0xADF692B254977C0C).</strong>
 *
 * Hash: 0xB8278882
 * @deprecated Use ped.setCurrentWeapon(ped1, weaponHash, bForceInHand) instead
 */
export declare function setCurrentPedWeapon(ped1: number | Ped, weaponHash: number | string, bForceInHand: boolean): void;
/**
 * ```
 * NativeDB Added Parameter 4: BOOL p3
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_AMMO](?\_0x14E56BC5B5DB6A19).</strong>
 *
 * Hash: 0xBF90DF1A
 * @deprecated Use ped.setAmmo(ped1, weaponHash, ammo) instead
 */
export declare function setPedAmmo(ped1: number | Ped, weaponHash: number | string, ammo: number): void;
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
 * @deprecated Use ped.setArmour(ped1, amount) instead
 */
export declare function setPedArmour(ped1: number | Ped, amount: number): void;
/**
 * SET_PED_CAN_RAGDOLL
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_CAN_RAGDOLL](?\_0xB128377056A54E2A).</strong>
 *
 * Hash: 0xCF1384C4
 * @deprecated Use ped.setCanRagdoll(ped1, toggle) instead
 */
export declare function setPedCanRagdoll(ped1: number | Ped, toggle: boolean): void;
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
 * @deprecated Use ped.setComponentVariation(ped1, componentId, drawableId, textureId, paletteId) instead
 */
export declare function setPedComponentVariation(ped1: number | Ped, componentId: number, drawableId: number, textureId: number, paletteId: number): void;
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
 * @deprecated Use ped.setConfigFlag(ped1, flagId, value) instead
 */
export declare function setPedConfigFlag(ped1: number | Ped, flagId: number, value: boolean): void;
/**
 * ```
 * Sets Ped Default Clothes
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_DEFAULT_COMPONENT_VARIATION](?\_0x45EEE61580806D63).</strong>
 *
 * Hash: 0xC866A984
 * @deprecated Use ped.setDefaultComponentVariation(ped1) instead
 */
export declare function setPedDefaultComponentVariation(ped1: number | Ped): void;
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
 * @deprecated Use ped.setHairTint(ped1, colorID, highlightColorID) instead
 */
export declare function setPedHairTint(ped1: number | Ped, colorID: number, highlightColorID: number): void;
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
 * @deprecated Use ped.setHeadBlendData(ped1, shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent) instead
 */
export declare function setPedHeadBlendData(ped1: number | Ped, shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean): void;
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
 * @deprecated Use ped.setHeadOverlay(ped1, overlayID, index, opacity) instead
 */
export declare function setPedHeadOverlay(ped1: number | Ped, overlayID: number, index: number, opacity: number): void;
/**
 * SET_PED_INTO_VEHICLE
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_INTO_VEHICLE](?\_0xF75B0D629E1C063D).</strong>
 *
 * Hash: 0x7500C79
 * @deprecated Use ped.setIntoVehicle(ped1, vehicle, seatIndex) instead
 */
export declare function setPedIntoVehicle(ped1: number | Ped, vehicle: number | Vehicle, seatIndex: number): void;
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
 * @deprecated Use ped.setPropIndex(ped1, componentId, drawableId, textureId, attach) instead
 */
export declare function setPedPropIndex(ped1: number | Ped, componentId: number, drawableId: number, textureId: number, attach: boolean): void;
/**
 * ```
 * p1 is always 0 in R* scripts; and a quick disassembly seems to indicate that p1 is unused.
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RANDOM_COMPONENT_VARIATION](?\_0xC8A9481A01E63C28).</strong>
 *
 * Hash: 0x4111BA46
 * @deprecated Use ped.setRandomComponentVariation(ped1) instead
 */
export declare function setPedRandomComponentVariation(ped1: number | Ped): void;
/**
 * SET_PED_RANDOM_PROPS
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RANDOM_PROPS](?\_0xC44AA05345C992C6).</strong>
 *
 * Hash: 0xE3318E0E
 * @deprecated Use ped.setRandomProps(ped1) instead
 */
export declare function setPedRandomProps(ped1: number | Ped): void;
/**
 * `PED::SET_PED_RESET_FLAG(PLAYER::PLAYER_PED_ID(), 240, 1);`
 * Known values:
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PED_RESET_FLAG](?\_0xC1E8A365BF3B29F2).</strong>
 *
 * Hash: 0xCFF6FF66
 * @deprecated Use ped.setResetFlag(ped1, flagId, doReset) instead
 */
export declare function setPedResetFlag(ped1: number | Ped, flagId: number, doReset: boolean): void;
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
 * @deprecated Use ped.setToRagdoll(ped1, minTime, maxTime, ragdollType, bAbortIfInjured, bAbortIfDead, bForceScriptControl) instead
 */
export declare function setPedToRagdoll(ped1: number | Ped, minTime: number, maxTime: number, ragdollType: number, bAbortIfInjured: boolean, bAbortIfDead: boolean, bForceScriptControl: boolean): void;
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
 * @deprecated Use ped.setToRagdollWithFall(ped1, minTime, maxTime, nFallType, dirX, dirY, dirZ, fGroundHeight, grab1X, grab1Y, grab1Z, grab2X, grab2Y, grab2Z) instead
 */
export declare function setPedToRagdollWithFall(ped1: number | Ped, minTime: number, maxTime: number, nFallType: number, dirX: number, dirY: number, dirZ: number, fGroundHeight: number, grab1X: number, grab1Y: number, grab1Z: number, grab2X: number, grab2Y: number, grab2Z: number): void;
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
 * @deprecated Use ped.setEyeColor(ped1, index) instead
 */
export declare function setPedEyeColor(ped1: number | Ped, index: number): void;
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
 * @deprecated Use ped.setFaceFeature(ped1, index, scale) instead
 */
export declare function setPedFaceFeature(ped1: number | Ped, index: number, scale: number): void;
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
 * @deprecated Use ped.setHeadOverlayColor(ped1, overlayID, colorType, colorID, secondColorID) instead
 */
export declare function setPedHeadOverlayColor(ped1: number | Ped, overlayID: number, colorType: number, colorID: number, secondColorID: number): void;
/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
 *
 * Hash: 0x8689A825
 * @deprecated Use player.getMeleeWeaponDamageModifier(playerId) instead
 */
export declare function getPlayerMeleeWeaponDamageModifier(playerId: number | string | Player): number;
/**
 * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
 *
 * Hash: 0x2A3D7CDA
 * @deprecated Use player.getWeaponDamageModifier(playerId) instead
 */
export declare function getPlayerWeaponDamageModifier(playerId: number | string | Player): number;
/**
 * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
 *
 * Hash: 0xF1543251
 * @deprecated Use player.getWeaponDefenseModifier(playerId) instead
 */
export declare function getPlayerWeaponDefenseModifier(playerId: number | string | Player): number;
/**
 * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
 *
 * Hash: 0x986B65FF
 * @deprecated Use player.getWeaponDefenseModifier2(playerId) instead
 */
export declare function getPlayerWeaponDefenseModifier2(playerId: number | string | Player): number;
/**
 * Returns whether or not the specified player has enough information to start a commerce session for.
 *
 * Hash: 0x429461C3
 * @deprecated Use player.canStartCommerceSession(playerSrc) instead
 */
export declare function canPlayerStartCommerceSession(playerSrc: string): boolean;
/**
 * ```
 * `This executes at the same as speed as PLAYER::SET_PLAYER_WANTED_LEVEL(player, 0, false);`
 * `PLAYER::GET_PLAYER_WANTED_LEVEL(player); executes in less than half the time. Which means that it's worth first checking if the wanted level needs to be cleared before clearing. However, this is mostly about good code practice and can important in other situations. The difference in time in this example is negligible.`
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PLAYER_WANTED_LEVEL](?\_0xB302540597885499).</strong>
 *
 * Hash: 0x54EA5BCC
 * @deprecated Use player.clearWantedLevel(player1) instead
 */
export declare function clearPlayerWantedLevel(player1: number | string | Player): void;
/**
 * Returns whether or not the player exists
 *
 * Hash: 0x12038599
 * @deprecated Use player.doesExist(playerSrc) instead
 */
export declare function doesPlayerExist(playerSrc: string): boolean;
/**
 * Requests whether or not the player owns the specified SKU.
 *
 * Hash: 0x167ABA27
 * @deprecated Use player.doesOwnSku(playerSrc, skuId) instead
 */
export declare function doesPlayerOwnSku(playerSrc: string, skuId: number): boolean;
/**
 * Requests whether or not the player owns the specified package.
 *
 * Hash: 0xDEF0480B
 * @deprecated Use player.doesOwnSkuExt(playerSrc, skuId) instead
 */
export declare function doesPlayerOwnSkuExt(playerSrc: string, skuId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBA0613E1
 * @deprecated Use player.drop(playerSrc, reason) instead
 */
export declare function dropPlayer(playerSrc: string, reason: string): void;
/**
 * No comment provided
 *
 * Hash: 0x62FC38D0
 * @deprecated Use player.getAirDragMultiplierForsVehicle(playerSrc) instead
 */
export declare function getAirDragMultiplierForPlayersVehicle(playerSrc: string): number;
/**
 * No comment provided
 *
 * Hash: 0xFF7F66AB
 * @deprecated Use player.getNumIdentifiers(playerSrc) instead
 */
export declare function getNumPlayerIdentifiers(playerSrc: string): number;
/**
 * No comment provided
 *
 * Hash: 0x63D13184
 * @deprecated Use player.getNumIndices() instead
 */
export declare function getNumPlayerIndices(): number;
/**
 * No comment provided
 *
 * Hash: 0x619E4A3D
 * @deprecated Use player.getNumTokens(playerSrc) instead
 */
export declare function getNumPlayerTokens(playerSrc: string): number;
/**
 * Gets the current camera rotation for a specified player. This native is used server side when using OneSync.
 *
 * Hash: 0x433C765D
 * @deprecated Use player.getCameraRotation(playerSrc) instead
 */
export declare function getPlayerCameraRotation(playerSrc: string): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xFEE404F9
 * @deprecated Use player.getEndpoint(playerSrc) instead
 */
export declare function getPlayerEndpoint(playerSrc: string): string;
/**
 * Gets the current fake wanted level for a specified player. This native is used server side when using OneSync.
 *
 * Hash: 0x98D244
 * @deprecated Use player.getFakeWantedLevel(playerSrc) instead
 */
export declare function getPlayerFakeWantedLevel(playerSrc: string): number;
/**
 * Gets the focus position (i.e. the position of the active camera in the game world) of a player.
 *
 * Hash: 0x586F80FF
 * @deprecated Use player.getFocusPos(playerSrc) instead
 */
export declare function getPlayerFocusPos(playerSrc: string): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xC8A9CE08
 * @deprecated Use player.getFromIndex(index) instead
 */
export declare function getPlayerFromIndex(index: number): string;
/**
 * No comment provided
 *
 * Hash: 0xE52D9680
 * @deprecated Use player.getGuid(playerSrc) instead
 */
export declare function getPlayerGuid(playerSrc: string): string;
/**
 * To get the number of identifiers, use [GET_NUM_PLAYER_IDENTIFIERS](#\_0xFF7F66AB)
 *
 * To get a specific type of identifier, use [GET_PLAYER_IDENTIFIER_BY_TYPE](#\_0xA61C8FC6)
 *
 * Hash: 0x7302DBCF
 * @deprecated Use player.getIdentifier(playerSrc, identiferIndex) instead
 */
export declare function getPlayerIdentifier(playerSrc: string, identiferIndex: number): string;
/**
 * Get an identifier from a player by the type of the identifier.
 * Known [Identifiers](https://docs.fivem.net/docs/scripting-reference/runtimes/lua/functions/GetPlayerIdentifiers/#identifier-types)
 *
 * Hash: 0xA61C8FC6
 * @deprecated Use player.getIdentifierByType(playerSrc, identifierType) instead
 */
export declare function getPlayerIdentifierByType(playerSrc: string, identifierType: string): string;
/**
 * No comment provided
 *
 * Hash: 0x680C90EE
 * @deprecated Use player.getInvincible(playerSrc) instead
 */
export declare function getPlayerInvincible(playerSrc: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x427E8E6A
 * @deprecated Use player.getLastMsg(playerSrc) instead
 */
export declare function getPlayerLastMsg(playerSrc: string): number;
/**
 * No comment provided
 *
 * Hash: 0x2A50657
 * @deprecated Use player.getMaxArmour(playerSrc) instead
 */
export declare function getPlayerMaxArmour(playerSrc: string): number;
/**
 * No comment provided
 *
 * Hash: 0x8154E470
 * @deprecated Use player.getMaxHealth(playerSrc) instead
 */
export declare function getPlayerMaxHealth(playerSrc: string): number;
/**
 * No comment provided
 *
 * Hash: 0x406B4B20
 * @deprecated Use player.getName(playerSrc) instead
 */
export declare function getPlayerName(playerSrc: string): string;
/**
 * Used to get the player's Ped Entity ID when a valid `playerSrc` is passed.
 *
 * Hash: 0x6E31E993
 * @deprecated Use player.getPed(playerSrc) instead
 */
export declare function getPlayerPed(playerSrc: string): number;
/**
 * ```cpp
 * const int ENET_PACKET_LOSS_SCALE = 65536;
 *
 * enum PeerStatistics
 * {
 * // PacketLoss will only update once every 10 seconds, use PacketLossEpoch if you want the time
 * // since the last time the packet loss was updated.
 *
 * // the amount of packet loss the player has, needs to be scaled with PACKET_LOSS_SCALE
 * PacketLoss = 0,
 * // The variance in the packet loss
 * PacketLossVariance = 1,
 * // The time since the last packet update in ms, relative to the peers connection time
 * PacketLossEpoch = 2,
 * // The mean amount of time it takes for a packet to get to the client (ping)
 * RoundTripTime = 3,
 * // The variance in the round trip time
 * RoundTripTimeVariance = 4,
 * // Despite their name, these are only updated once every 5 seconds, you can get the last time this was updated with PacketThrottleEpoch
 * // The last recorded round trip time of a packet
 * LastRoundTripTime = 5,
 * // The last round trip time variance
 * LastRoundTripTimeVariance = 6,
 * // The time since the last packet throttle update, relative to the peers connection time
 * PacketThrottleEpoch = 7,
 * };
 * ```
 *
 * These statistics only update once every 10 seconds.
 *
 * Hash: 0x9A928294
 * @deprecated Use player.getPeerStatistics(playerSrc, peerStatistic) instead
 */
export declare function getPlayerPeerStatistics(playerSrc: string, peerStatistic: number): number;
/**
 * See [GET_PLAYER_PEER_STATISTICS](#\_0x9A928294) if you want more detailed information, like packet loss, and packet/rtt variance
 *
 * Hash: 0xFF1290D4
 * @deprecated Use player.getPing(playerSrc) instead
 */
export declare function getPlayerPing(playerSrc: string): number;
/**
 * Gets the routing bucket for the specified player.
 *
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 *
 * Hash: 0x52441C34
 * @deprecated Use player.getRoutingBucket(playerSrc) instead
 */
export declare function getPlayerRoutingBucket(playerSrc: string): number;
/**
 * No comment provided
 *
 * Hash: 0x9873E404
 * @deprecated Use player.getTeam(playerSrc) instead
 */
export declare function getPlayerTeam(playerSrc: string): number;
/**
 * ```
 * Gets the amount of time player has spent evading the cops.
 * Counter starts and increments only when cops are chasing the player.
 * If the player is evading, the timer will pause.
 * ```
 *
 * Hash: 0x7ADE63E1
 * @deprecated Use player.getTimeInPursuit(playerSrc, lastPursuit) instead
 */
export declare function getPlayerTimeInPursuit(playerSrc: string, lastPursuit: boolean): number;
/**
 * Gets the current time online for a specified player.
 *
 * Hash: 0x67D2E605
 * @deprecated Use player.getTimeOnline(playerSrc) instead
 */
export declare function getPlayerTimeOnline(playerSrc: string): number;
/**
 * Gets a player's token. Tokens can be used to enhance banning logic, however are specific to a server.
 *
 * Hash: 0x54C06897
 * @deprecated Use player.getToken(playerSrc, index) instead
 */
export declare function getPlayerToken(playerSrc: string, index: number): string;
/**
 * Gets the current known coordinates for the specified player from cops perspective. This native is used server side when using OneSync.
 *
 * Hash: 0x821F2D2C
 * @deprecated Use player.getWantedCentrePosition(playerSrc) instead
 */
export declare function getPlayerWantedCentrePosition(playerSrc: string): Vector3;
/**
 * ```
 * Returns given players wanted level server-side.
 * ```
 *
 * Hash: 0xBDCDD163
 * @deprecated Use player.getWantedLevel(playerSrc) instead
 */
export declare function getPlayerWantedLevel(playerSrc: string): number;
/**
 * This native checks if the given ped is a player.
 *
 * Hash: 0x404794CA
 * @deprecated Use player.isPedA(ped) instead
 */
export declare function isPedAPlayer(ped: number | Ped): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDEDAE23D
 * @deprecated Use player.isAceAllowed(playerSrc, _object) instead
 */
export declare function isPlayerAceAllowed(playerSrc: string, _object: string): boolean;
/**
 * Requests whether or not the commerce data for the specified player has loaded.
 *
 * Hash: 0xBEFE93F4
 * @deprecated Use player.isCommerceInfoLoaded(playerSrc) instead
 */
export declare function isPlayerCommerceInfoLoaded(playerSrc: string): boolean;
/**
 * Requests whether or not the commerce data for the specified player has loaded from Tebex.
 *
 * Hash: 0x1D14F4FE
 * @deprecated Use player.isCommerceInfoLoadedExt(playerSrc) instead
 */
export declare function isPlayerCommerceInfoLoadedExt(playerSrc: string): boolean;
/**
 * ```
 * This will return true if the player is evading wanted level, meaning that the wanted level stars are blink.
 * Otherwise will return false.
 *
 * If the player is not wanted, it simply returns false.
 * ```
 *
 * Hash: 0x89A3881A
 * @deprecated Use player.isEvadingWantedLevel(playerSrc) instead
 */
export declare function isPlayerEvadingWantedLevel(playerSrc: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1F14F2AC
 * @deprecated Use player.isInFreeCamMode(playerSrc) instead
 */
export declare function isPlayerInFreeCamMode(playerSrc: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC7D2C20C
 * @deprecated Use player.isUsingSuperJump(playerSrc) instead
 */
export declare function isPlayerUsingSuperJump(playerSrc: string): boolean;
/**
 * Requests the commerce data for the specified player, including the owned SKUs. Use `IS_PLAYER_COMMERCE_INFO_LOADED` to check if it has loaded.
 *
 * Hash: 0xA8F63EAB
 * @deprecated Use player.loadCommerceData(playerSrc) instead
 */
export declare function loadPlayerCommerceData(playerSrc: string): void;
/**
 * Requests the commerce data from Tebex for the specified player, including the owned SKUs.
 *
 * Use [`IS_PLAYER_COMMERCE_INFO_LOADED_EXT`](#\_0x1D14F4FE) to check if it has loaded.
 *
 * This will not automatically update whenever a client purchases a package, if you want to fetch new purchases you will need to call this native again.
 *
 * This native will temporarily cache the players commerce data for 10 seconds, a call to this native after 10 seconds will re-fetch the players commerce data.
 *
 * Hash: 0x7995539E
 * @deprecated Use player.loadCommerceDataExt(playerSrc) instead
 */
export declare function loadPlayerCommerceDataExt(playerSrc: string): void;
/**
 * Requests the specified player to buy the passed SKU. This'll pop up a prompt on the client, which upon acceptance
 * will open the browser prompting further purchase details.
 *
 * Hash: 0x96F93CCE
 * @deprecated Use player.requestCommerceSession(playerSrc, skuId) instead
 */
export declare function requestPlayerCommerceSession(playerSrc: string, skuId: number): void;
/**
 * ```
 * Flags:
 * SPC_AMBIENT_SCRIPT = (1 << 1),
 * SPC_CLEAR_TASKS = (1 << 2),
 * SPC_REMOVE_FIRES = (1 << 3),
 * SPC_REMOVE_EXPLOSIONS = (1 << 4),
 * SPC_REMOVE_PROJECTILES = (1 << 5),
 * SPC_DEACTIVATE_GADGETS = (1 << 6),
 * SPC_REENABLE_CONTROL_ON_DEATH = (1 << 7),
 * SPC_LEAVE_CAMERA_CONTROL_ON = (1 << 8),
 * SPC_ALLOW_PLAYER_DAMAGE = (1 << 9),
 * SPC_DONT_STOP_OTHER_CARS_AROUND_PLAYER = (1 << 10),
 * SPC_PREVENT_EVERYBODY_BACKOFF = (1 << 11),
 * SPC_ALLOW_PAD_SHAKE = (1 << 12)
 * See: https://alloc8or.re/gta5/doc/enums/eSetPlayerControlFlag.txt
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_CONTROL](?\_0x8D32347D6D4C40A2).</strong>
 *
 * Hash: 0xD17AFCD8
 * @deprecated Use player.setControl(player1, bHasControl, flags) instead
 */
export declare function setPlayerControl(player1: number | string | Player, bHasControl: boolean, flags: number): void;
/**
 * Sets the culling radius for the specified player.
 * Set to `0.0` to reset.
 *
 * **WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
 *
 * Hash: 0x8A2FBAD4
 * @deprecated Use player.setCullingRadius(playerSrc, radius) instead
 */
export declare function setPlayerCullingRadius(playerSrc: string, radius: number): void;
/**
 * Make the player impervious to all forms of damage.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_INVINCIBLE](?\_0x239528EACDC3E7DE).</strong>
 *
 * Hash: 0xDFB9A2A2
 * @deprecated Use player.setInvincible(player1, bInvincible) instead
 */
export declare function setPlayerInvincible(player1: number | string | Player, bInvincible: boolean): void;
/**
 * Set the model for a specific Player. Note that this will destroy the current Ped for the Player and create a new one, any reference to the old ped will be invalid after calling this.
 * As per usual, make sure to request the model first and wait until it has loaded.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_MODEL](?\_0x00A1CADD00108836).</strong>
 *
 * Hash: 0x774A4C54
 * @deprecated Use player.setModel(player1, model) instead
 */
export declare function setPlayerModel(player1: number | string | Player, model: number | string): void;
/**
 * Sets the routing bucket for the specified player.
 *
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 *
 * Hash: 0x6504EB38
 * @deprecated Use player.setRoutingBucket(playerSrc, bucket) instead
 */
export declare function setPlayerRoutingBucket(playerSrc: string, bucket: number): void;
/**
 * SET_PLAYER_WANTED_LEVEL
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_PLAYER_WANTED_LEVEL](?\_0x39FF19C64EF7DA5B).</strong>
 *
 * Hash: 0xB7A0914B
 * @deprecated Use player.setWantedLevel(player1, wantedLevel, delayedResponse) instead
 */
export declare function setPlayerWantedLevel(player1: number | string | Player, wantedLevel: number, delayedResponse: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1E35DBBA
 * @deprecated Use player.tempBan(playerSrc, reason) instead
 */
export declare function tempBanPlayer(playerSrc: string, reason: string): void;
/**
 * On the server this will return the players source, on the client it will return the player handle.
 *
 * Hash: 0xA56135E0
 * @deprecated Use player.getFromStateBagName(bagName) instead
 */
export declare function getPlayerFromStateBagName(bagName: string): number;
/**
 * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
 *
 * Hash: 0xA886495D
 * @deprecated Use vehicle.getHeliBodyHealth(heli) instead
 */
export declare function getHeliBodyHealth(heli: number | Vehicle): number;
/**
 * This is a getter for [SET_DISABLE_HELI_EXPLODE_FROM_BODY_DAMAGE](#\_0xEDBC8405B3895CC9)
 *
 * Hash: 0x82AFC0A3
 * @deprecated Use vehicle.getHeliDisableExplodeFromBodyDamage(heli) instead
 */
export declare function getHeliDisableExplodeFromBodyDamage(heli: number | Vehicle): boolean;
/**
 * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
 *
 * Hash: 0xA0FA0354
 * @deprecated Use vehicle.getHeliEngineHealth(heli) instead
 */
export declare function getHeliEngineHealth(heli: number | Vehicle): number;
/**
 * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
 *
 * Hash: 0xD4EC7858
 * @deprecated Use vehicle.getHeliGasTankHealth(heli) instead
 */
export declare function getHeliGasTankHealth(heli: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xC37D668
 * @deprecated Use vehicle.getHeliMainRotorDamageScale(heli) instead
 */
export declare function getHeliMainRotorDamageScale(heli: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x1944AC95
 * @deprecated Use vehicle.getHeliPitchControl(heli) instead
 */
export declare function getHeliPitchControl(heli: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xC40161E2
 * @deprecated Use vehicle.getHeliRearRotorDamageScale(heli) instead
 */
export declare function getHeliRearRotorDamageScale(heli: number | Vehicle): number;
/**
 * This native is a getter for [SET_HELI_TAIL_ROTOR_HEALTH](#\_0xFE205F38AAA58E5B)
 *
 * Hash: 0x33EE6E2B
 * @deprecated Use vehicle.getHeliRearRotorHealth(vehicle1) instead
 */
export declare function getHeliRearRotorHealth(vehicle1: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x12948DE9
 * @deprecated Use vehicle.getHeliRollControl(heli) instead
 */
export declare function getHeliRollControl(heli: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x22239130
 * @deprecated Use vehicle.getHeliTailRotorDamageScale(heli) instead
 */
export declare function getHeliTailRotorDamageScale(heli: number | Vehicle): number;
/**
 * **Note**: This native is deprecated, please use [`GET_HELI_REAR_ROTOR_HEALTH`](#\_0x33EE6E2B) instead.
 *
 * Hash: 0xA41BC13D
 * @deprecated Use vehicle.getHeliTailRotorHealth(vehicle1) instead
 */
export declare function getHeliTailRotorHealth(vehicle1: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x8E86238D
 * @deprecated Use vehicle.getHeliThrottleControl(heli) instead
 */
export declare function getHeliThrottleControl(heli: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x8FDC0768
 * @deprecated Use vehicle.getHeliYawControl(heli) instead
 */
export declare function getHeliYawControl(heli: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x3EFE38D1
 * @deprecated Use vehicle.getIsHeliEngineRunning(heli) instead
 */
export declare function getIsHeliEngineRunning(heli: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1C939E87
 * @deprecated Use vehicle.getThrusterSideRcsThrottle(jetpack) instead
 */
export declare function getThrusterSideRcsThrottle(jetpack: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x94E24C96
 * @deprecated Use vehicle.getThrusterThrottle(jetpack) instead
 */
export declare function getThrusterThrottle(jetpack: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x456E34A
 * @deprecated Use vehicle.getTrainBackwardCarriage(train) instead
 */
export declare function getTrainBackwardCarriage(train: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x24DC88D9
 * @deprecated Use vehicle.getTrainForwardCarriage(train) instead
 */
export declare function getTrainForwardCarriage(train: number | Vehicle): number;
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
 * @deprecated Use vehicle.getHornType(vehicle1) instead
 */
export declare function getVehicleHornType(vehicle1: number | Vehicle): number;
/**
 * This is a getter for [SET_HELI_TAIL_EXPLODE_THROW_DASHBOARD](#\_0x3EC8BF18AA453FE9)
 *
 * Hash: 0x23E46BD7
 * @deprecated Use vehicle.isHeliTailBoomBreakable(heli) instead
 */
export declare function isHeliTailBoomBreakable(heli: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2C59F987
 * @deprecated Use vehicle.isHeliTailBoomBroken(heli) instead
 */
export declare function isHeliTailBoomBroken(heli: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFA9336E5
 * @deprecated Use vehicle.isTrainCaboose(train) instead
 */
export declare function isTrainCaboose(train: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x77CC80DC
 * @deprecated Use vehicle.doesTrainStopAtStations(train) instead
 */
export declare function doesTrainStopAtStations(train: number | Vehicle): boolean;
/**
 * Gets the trains desired speed.
 *
 * Hash: 0xA4921EF5
 * @deprecated Use vehicle.getTrainCruiseSpeed(train) instead
 */
export declare function getTrainCruiseSpeed(train: number | Vehicle): number;
/**
 * Gets the direction the train is facing
 *
 * Hash: 0x8DAF79B6
 * @deprecated Use vehicle.getTrainDirection(train) instead
 */
export declare function getTrainDirection(train: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x81B50033
 * @deprecated Use vehicle.getTrainState(train) instead
 */
export declare function getTrainState(train: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x9AA339D
 * @deprecated Use vehicle.getTrainTrackIndex(train) instead
 */
export declare function getTrainTrackIndex(train: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x483B013C
 * @deprecated Use vehicle.getHandbrake(vehicle1) instead
 */
export declare function getVehicleHandbrake(vehicle1: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1382FCEA
 * @deprecated Use vehicle.getSteeringAngle(vehicle1) instead
 */
export declare function getVehicleSteeringAngle(vehicle1: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xBB340D04
 * @deprecated Use vehicle.isEngineStarting(vehicle1) instead
 */
export declare function isVehicleEngineStarting(vehicle1: number | Vehicle): boolean;
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
 * @deprecated Use vehicle.create(modelHash, pos, heading, isNetwork, netMissionEntity) instead
 */
export declare function createVehicle(modelHash: number | string, pos: Vector3, heading: number, isNetwork: boolean, netMissionEntity: boolean): number;
/**
 * Equivalent to CREATE_VEHICLE, but it uses 'server setter' logic (like the former CREATE_AUTOMOBILE) as a workaround for
 * reliability concerns regarding entity creation RPC.
 *
 * Unlike CREATE_AUTOMOBILE, this supports other vehicle types as well.
 *
 * Hash: 0x6AE51D4B
 * @deprecated Use vehicle.createServerSetter(modelHash, _type, pos, heading) instead
 */
export declare function createVehicleServerSetter(modelHash: number | string, _type: string, pos: Vector3, heading: number): number;
/**
 * Deletes the specified `entity` and any carriage its attached to, or that is attached to it.
 *
 * Hash: 0x523BA3DA
 * @deprecated Use vehicle.deleteTrain(entity) instead
 */
export declare function deleteTrain(entity: number | Entity): void;
/**
 * No comment provided
 *
 * Hash: 0x43F15989
 * @deprecated Use vehicle.doesBoatSinkWhenWrecked(vehicle1) instead
 */
export declare function doesBoatSinkWhenWrecked(vehicle1: number | Vehicle): boolean;
/**
 * Returns all vehicle handles known to the server.
 * The data returned adheres to the following layout:
 *
 * ```
 * [127, 42, 13, 37]
 * ```
 *
 * Hash: 0x332169F5
 * @deprecated Use vehicle.getAlls() instead
 */
export declare function getAllVehicles(): number;
/**
 * No comment provided
 *
 * Hash: 0x7DC6D022
 * @deprecated Use vehicle.getIsEngineRunning(vehicle1) instead
 */
export declare function getIsVehicleEngineRunning(vehicle1: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD7EC8760
 * @deprecated Use vehicle.getIsPrimaryColourCustom(vehicle1) instead
 */
export declare function getIsVehiclePrimaryColourCustom(vehicle1: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x288AD228
 * @deprecated Use vehicle.getIsSecondaryColourCustom(vehicle1) instead
 */
export declare function getIsVehicleSecondaryColourCustom(vehicle1: number | Vehicle): boolean;
/**
 * See the client-side [GET_LANDING_GEAR_STATE](#\_0x9B0F3DCA3DB0F4CD) native for a description of landing gear states.
 *
 * Hash: 0xA6F02670
 * @deprecated Use vehicle.getLandingGearState(vehicle1) instead
 */
export declare function getLandingGearState(vehicle1: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x95070FA
 * @deprecated Use vehicle.getTrainCarriageEngine(train) instead
 */
export declare function getTrainCarriageEngine(train: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x4B8285CF
 * @deprecated Use vehicle.getTrainCarriageIndex(train) instead
 */
export declare function getTrainCarriageIndex(train: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x2B2FCC28
 * @deprecated Use vehicle.getBodyHealth(vehicle1) instead
 */
export declare function getVehicleBodyHealth(vehicle1: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x40D82D88
 * @deprecated Use vehicle.getColours(vehicle1) instead
 */
export declare function getVehicleColours(vehicle1: number | Vehicle): [number, number];
/**
 * No comment provided
 *
 * Hash: 0x1C2B9FEF
 * @deprecated Use vehicle.getCustomPrimaryColour(vehicle1) instead
 */
export declare function getVehicleCustomPrimaryColour(vehicle1: number | Vehicle): [number, number, number];
/**
 * No comment provided
 *
 * Hash: 0x3FF247A2
 * @deprecated Use vehicle.getCustomSecondaryColour(vehicle1) instead
 */
export declare function getVehicleCustomSecondaryColour(vehicle1: number | Vehicle): [number, number, number];
/**
 * No comment provided
 *
 * Hash: 0xA0DBD08D
 * @deprecated Use vehicle.getDashboardColour(vehicle1) instead
 */
export declare function getVehicleDashboardColour(vehicle1: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xFD15C065
 * @deprecated Use vehicle.getDirtLevel(vehicle1) instead
 */
export declare function getVehicleDirtLevel(vehicle1: number | Vehicle): number;
/**
 * Currently it only works when set to "all players".
 *
 * Hash: 0x1DC50247
 * @deprecated Use vehicle.getDoorsLockedForPlayer(vehicle1) instead
 */
export declare function getVehicleDoorsLockedForPlayer(vehicle1: number | Vehicle): number;
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
 * @deprecated Use vehicle.getDoorLockStatus(vehicle1) instead
 */
export declare function getVehicleDoorLockStatus(vehicle1: number | Vehicle): number;
/**
 * Returns the open position of the specified door on the target vehicle.
 *
 * Hash: 0x6E35C49C
 * @deprecated Use vehicle.getDoorStatus(vehicle1, doorIndex) instead
 */
export declare function getVehicleDoorStatus(vehicle1: number | Vehicle, doorIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x8880038A
 * @deprecated Use vehicle.getEngineHealth(vehicle1) instead
 */
export declare function getVehicleEngineHealth(vehicle1: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x80E4659B
 * @deprecated Use vehicle.getExtraColours(vehicle1) instead
 */
export declare function getVehicleExtraColours(vehicle1: number | Vehicle): [number, number];
/**
 * Gets the flight nozzel position for the specified vehicle. See the client-side [\_GET_VEHICLE_FLIGHT_NOZZLE_POSITION](#\_0xDA62027C8BDB326E) native for usage examples.
 *
 * Hash: 0xAD40AD55
 * @deprecated Use vehicle.getFlightNozzlePosition(vehicle1) instead
 */
export declare function getVehicleFlightNozzlePosition(vehicle1: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xD7147656
 * @deprecated Use vehicle.getHeadlightsColour(vehicle1) instead
 */
export declare function getVehicleHeadlightsColour(vehicle1: number | Vehicle): number;
/**
 * Gets the lock on state for the specified vehicle. See the client-side [GET_VEHICLE_HOMING_LOCKON_STATE](#\_0xE6B0E8CFC3633BF0) native for a description of lock on states.
 *
 * Hash: 0xFBDE9FD8
 * @deprecated Use vehicle.getHomingLockonState(vehicle1) instead
 */
export declare function getVehicleHomingLockonState(vehicle1: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xCCFF3B6E
 * @deprecated Use vehicle.getInteriorColour(vehicle1) instead
 */
export declare function getVehicleInteriorColour(vehicle1: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x7C278621
 * @deprecated Use vehicle.getLightsState(vehicle1) instead
 */
export declare function getVehicleLightsState(vehicle1: number | Vehicle): [boolean, boolean, boolean];
/**
 * No comment provided
 *
 * Hash: 0xEC82A51D
 * @deprecated Use vehicle.getLivery(vehicle1) instead
 */
export declare function getVehicleLivery(vehicle1: number | Vehicle): number;
/**
 * Gets the vehicle that is locked on to for the specified vehicle.
 *
 * Hash: 0x4A557117
 * @deprecated Use vehicle.getLockOnTarget(vehicle1) instead
 */
export declare function getVehicleLockOnTarget(vehicle1: number | Vehicle): number;
/**
 * Getter to check the neon colour of a vehicle. This native is the server side getter of [GET_VEHICLE_NEON_LIGHTS_COLOUR](#\_0x7619EEE8C886757F).
 *
 * Hash: 0xD9319DCB
 * @deprecated Use vehicle.getNeonColour(vehicle1) instead
 */
export declare function getVehicleNeonColour(vehicle1: number | Vehicle): [number, number, number];
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
 * @deprecated Use vehicle.getNeonEnabled(vehicle1, neonIndex) instead
 */
export declare function getVehicleNeonEnabled(vehicle1: number | Vehicle, neonIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE8522D58
 * @deprecated Use vehicle.getNumberPlateText(vehicle1) instead
 */
export declare function getVehicleNumberPlateText(vehicle1: number | Vehicle): string;
/**
 * No comment provided
 *
 * Hash: 0x499747B6
 * @deprecated Use vehicle.getNumberPlateTextIndex(vehicle1) instead
 */
export declare function getVehicleNumberPlateTextIndex(vehicle1: number | Vehicle): number;
/**
 * Gets the vehicle the specified Ped is/was in depending on bool value. This native is used server side when using OneSync.
 *
 * Hash: 0xAFE92319
 * @deprecated Use vehicle.getPedIsIn(ped, lastVehicle) instead
 */
export declare function getVehiclePedIsIn(ped: number | Ped, lastVehicle: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0xE41595CE
 * @deprecated Use vehicle.getPetrolTankHealth(vehicle1) instead
 */
export declare function getVehiclePetrolTankHealth(vehicle1: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x57037960
 * @deprecated Use vehicle.getRadioStationIndex(vehicle1) instead
 */
export declare function getVehicleRadioStationIndex(vehicle1: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x872CF42
 * @deprecated Use vehicle.getRoofLivery(vehicle1) instead
 */
export declare function getVehicleRoofLivery(vehicle1: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x9963D5F9
 * @deprecated Use vehicle.getTotalRepairs(vehicle1) instead
 */
export declare function getVehicleTotalRepairs(vehicle1: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x75280015
 * @deprecated Use vehicle.getTyreSmokeColor(vehicle1) instead
 */
export declare function getVehicleTyreSmokeColor(vehicle1: number | Vehicle): [number, number, number];
/**
 * No comment provided
 *
 * Hash: 0xDA58D7AE
 * @deprecated Use vehicle.getWheelType(vehicle1) instead
 */
export declare function getVehicleWheelType(vehicle1: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x13D53892
 * @deprecated Use vehicle.getWindowTint(vehicle1) instead
 */
export declare function getVehicleWindowTint(vehicle1: number | Vehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xB8AF3137
 * @deprecated Use vehicle.hasBeenDamagedByBullets(vehicle1) instead
 */
export declare function hasVehicleBeenDamagedByBullets(vehicle1: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE4E83A5B
 * @deprecated Use vehicle.hasBeenOwnedByPlayer(vehicle1) instead
 */
export declare function hasVehicleBeenOwnedByPlayer(vehicle1: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD5C39EE6
 * @deprecated Use vehicle.isBoatAnchoredAndFrozen(vehicle1) instead
 */
export declare function isBoatAnchoredAndFrozen(vehicle1: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9049DB44
 * @deprecated Use vehicle.isBoatWrecked(vehicle1) instead
 */
export declare function isBoatWrecked(vehicle1: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x42098B5
 * @deprecated Use vehicle.isExtraTurnedOn(vehicle1, extraId) instead
 */
export declare function isVehicleExtraTurnedOn(vehicle1: number | Vehicle, extraId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x25EB5873
 * @deprecated Use vehicle.isSirenOn(vehicle1) instead
 */
export declare function isVehicleSirenOn(vehicle1: number | Vehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x48C80210
 * @deprecated Use vehicle.isTyreBurst(vehicle1, wheelID, completely) instead
 */
export declare function isVehicleTyreBurst(vehicle1: number | Vehicle, wheelID: number, completely: boolean): boolean;
/**
 * See the client-side [IS_VEHICLE_WINDOW_INTACT](#\_0x46E571A0E20D01F1) for a window indexes list.
 *
 * Hash: 0xAC4EF23D
 * @deprecated Use vehicle.isWindowIntact(vehicle1, windowIndex) instead
 */
export declare function isVehicleWindowIntact(vehicle1: number | Vehicle, windowIndex: number): boolean;
/**
 * SET_VEHICLE_ALARM
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_ALARM](?\_0xCDE5E70C1DDB954C).</strong>
 *
 * Hash: 0x24877D84
 * @deprecated Use vehicle.setAlarm(vehicle1, state) instead
 */
export declare function setVehicleAlarm(vehicle1: number | Vehicle, state: boolean): void;
/**
 * ```
 * p2 often set to 1000.0 in the decompiled scripts.
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_BODY_HEALTH](?\_0xB77D05AC8C78AADB).</strong>
 *
 * Hash: 0x920C2517
 * @deprecated Use vehicle.setBodyHealth(vehicle1, value) instead
 */
export declare function setVehicleBodyHealth(vehicle1: number | Vehicle, value: number): void;
/**
 * colorPrimary & colorSecondary are the paint indexes for the vehicle.
 * For a list of valid paint indexes, view: pastebin.com/pwHci0xK
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_COLOURS](?\_0x4F1D4BE3A7F24601).</strong>
 *
 * Hash: 0x57F24253
 * @deprecated Use vehicle.setColours(vehicle1, colorPrimary, colorSecondary) instead
 */
export declare function setVehicleColours(vehicle1: number | Vehicle, colorPrimary: number, colorSecondary: number): void;
/**
 * Sets the selected vehicle's colors to their default value (specific variant specified using the colorCombination parameter).
 * Range of possible values for colorCombination is currently unknown, I couldn't find where these values are stored either (Disquse's guess was vehicles.meta but I haven't seen it in there.)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_COLOUR_COMBINATION](?\_0x33E8CD3322E2FE31).</strong>
 *
 * Hash: 0xA557AEAD
 * @deprecated Use vehicle.setColourCombination(vehicle1, colorCombination) instead
 */
export declare function setVehicleColourCombination(vehicle1: number | Vehicle, colorCombination: number): void;
/**
 * ```
 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_CUSTOM_PRIMARY_COLOUR](?\_0x7141766F91D15BEA).</strong>
 *
 * Hash: 0x8DF9F9BC
 * @deprecated Use vehicle.setCustomPrimaryColour(vehicle1, r, g, b) instead
 */
export declare function setVehicleCustomPrimaryColour(vehicle1: number | Vehicle, r: number, g: number, b: number): void;
/**
 * ```
 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_CUSTOM_SECONDARY_COLOUR](?\_0x36CED73BFED89754).</strong>
 *
 * Hash: 0x9D77259E
 * @deprecated Use vehicle.setCustomSecondaryColour(vehicle1, r, g, b) instead
 */
export declare function setVehicleCustomSecondaryColour(vehicle1: number | Vehicle, r: number, g: number, b: number): void;
/**
 * Sets the dirt level of the passed vehicle.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DIRT_LEVEL](?\_0x79D3B596FE44EE8B).</strong>
 *
 * Hash: 0x2B39128B
 * @deprecated Use vehicle.setDirtLevel(vehicle1, dirtLevel) instead
 */
export declare function setVehicleDirtLevel(vehicle1: number | Vehicle, dirtLevel: number): void;
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
 * @deprecated Use vehicle.setDoorsLocked(vehicle1, doorLockStatus) instead
 */
export declare function setVehicleDoorsLocked(vehicle1: number | Vehicle, doorLockStatus: number): void;
/**
 * See eDoorId declared in [`SET_VEHICLE_DOOR_SHUT`](#\_0x93D9BD300D7789E5)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DOOR_BROKEN](?\_0xD4D4F6A4AB575A33).</strong>
 *
 * Hash: 0x8147FEA7
 * @deprecated Use vehicle.setDoorBroken(vehicle1, doorIndex, deleteDoor) instead
 */
export declare function setVehicleDoorBroken(vehicle1: number | Vehicle, doorIndex: number, deleteDoor: boolean): void;
/**
 * SET_VEHICLE_NUMBER_PLATE_TEXT
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_VEHICLE_NUMBER_PLATE_TEXT](?\_0x95A88F0B409CDA47).</strong>
 *
 * Hash: 0x400F9556
 * @deprecated Use vehicle.setNumberPlateText(vehicle1, plateText) instead
 */
export declare function setVehicleNumberPlateText(vehicle1: number | Vehicle, plateText: string): void;
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
 * @deprecated Use vehicle.getType(vehicle1) instead
 */
export declare function getVehicleType(vehicle1: number | Vehicle): string;
/**
 * GIVE_WEAPON_COMPONENT_TO_PED
 *
 * <strong>This is the server-side RPC native equivalent of the client native [GIVE_WEAPON_COMPONENT_TO_PED](?\_0xD966D51AA5B28BB9).</strong>
 *
 * Hash: 0x3E1E286D
 * @deprecated Use weapon.giveComponentToPed(ped, weaponHash, componentHash) instead
 */
export declare function giveWeaponComponentToPed(ped: number | Ped, weaponHash: number | string, componentHash: number | string): void;
/**
 * GIVE_WEAPON_TO_PED
 *
 * <strong>This is the server-side RPC native equivalent of the client native [GIVE_WEAPON_TO_PED](?\_0xBF0FD6E56C964FCB).</strong>
 *
 * Hash: 0xC4D88A85
 * @deprecated Use weapon.giveToPed(ped, weaponHash, ammoCount, isHidden, bForceInHand) instead
 */
export declare function giveWeaponToPed(ped: number | Ped, weaponHash: number | string, ammoCount: number, isHidden: boolean, bForceInHand: boolean): void;
/**
 * Parameter `p1` does not seem to be used or referenced in game binaries.\
 * **Note:** When called for networked entities, a `CRemoveAllWeaponsEvent` will be created per request.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_ALL_PED_WEAPONS](?\_0xF25DF915FA38C5F3).</strong>
 *
 * Hash: 0xA44CE817
 * @deprecated Use weapon.removeAllPeds(ped) instead
 */
export declare function removeAllPedWeapons(ped: number | Ped): void;
/**
 * REMOVE_WEAPON_COMPONENT_FROM_PED
 *
 * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_WEAPON_COMPONENT_FROM_PED](?\_0x1E8BE90C74FB4C09).</strong>
 *
 * Hash: 0x412AA00D
 * @deprecated Use weapon.removeComponentFromPed(ped, weaponHash, componentHash) instead
 */
export declare function removeWeaponComponentFromPed(ped: number | Ped, weaponHash: number | string, componentHash: number | string): void;
/**
 * ```
 * This native removes a specified weapon from your selected ped.
 * Weapon Hashes: pastebin.com/0wwDZgkF
 * Example:
 * C#:
 * Function.Call(Hash.REMOVE_WEAPON_FROM_PED, Game.Player.Character, 0x99B507EA);
 * C++:
 * `WEAPON::REMOVE_WEAPON_FROM_PED(PLAYER::PLAYER_PED_ID(), 0x99B507EA);`
 * The code above removes the knife from the player.
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_WEAPON_FROM_PED](?\_0x4899CB088EDF59B8).</strong>
 *
 * Hash: 0x9C37F220
 * @deprecated Use weapon.removeFromPed(ped, weaponHash) instead
 */
export declare function removeWeaponFromPed(ped: number | Ped, weaponHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x5B912C3F
 * @deprecated Use network.getEntityFromNetworkId(netId) instead
 */
export declare function networkGetEntityFromNetworkId(netId: number): number;
/**
 * Returns the first owner ID of the specified entity.
 *
 * Hash: 0x1E546224
 * @deprecated Use network.getFirstEntityOwner(entity) instead
 */
export declare function networkGetFirstEntityOwner(entity: number | Entity): number;
/**
 * No comment provided
 *
 * Hash: 0x9E35DAB6
 * @deprecated Use network.getNetworkIdFromEntity(entity) instead
 */
export declare function networkGetNetworkIdFromEntity(entity: number | Entity): number;
/**
 * No comment provided
 *
 * Hash: 0xFFEEF513
 * @deprecated Use network.getVoiceProximityOverrideForPlayer(playerSrc) instead
 */
export declare function networkGetVoiceProximityOverrideForPlayer(playerSrc: string): Vector3;
/**
 * Returns the owner ID of the specified entity.
 *
 * Hash: 0x526FEE31
 * @deprecated Use network.getEntityOwner(entity) instead
 */
export declare function networkGetEntityOwner(entity: number | Entity): number;
/**
 * No comment provided
 *
 * Hash: 0xB3210203
 * @deprecated Use kvp.endFind(handle) instead
 */
export declare function endFindKvp(handle: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBD7BEBC5
 * @deprecated Use kvp.find(handle) instead
 */
export declare function findKvp(handle: number): string;
/**
 * No comment provided
 *
 * Hash: 0xDD379006
 * @deprecated Use kvp.startFind(prefix) instead
 */
export declare function startFindKvp(prefix: string): number;
/**
 * Create a permanent voice channel.
 *
 * Hash: 0x262663C5
 * @deprecated Use mumble.createChannel(id) instead
 */
export declare function mumbleCreateChannel(id: number): void;
/**
 * Checks if the player is currently muted
 *
 * Hash: 0x1D5D50C2
 * @deprecated Use mumble.isPlayerMuted(playerSrc) instead
 */
export declare function mumbleIsPlayerMuted(playerSrc: number): boolean;
/**
 * Mutes or unmutes the specified player
 *
 * Hash: 0xCC6C2EB1
 * @deprecated Use mumble.setPlayerMuted(playerSrc, toggle) instead
 */
export declare function mumbleSetPlayerMuted(playerSrc: number, toggle: boolean): void;
/**
 * Creates an object (prop) with the specified model at the specified position, offset on the Z axis by the radius of the object's model.
 * This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CREATE_OBJECT](?\_0x509D5878EB39E842).</strong>
 *
 * Hash: 0x2F7AA05C
 * @deprecated Use object.create(modelHash, pos, isNetwork, netMissionEntity, doorFlag) instead
 */
export declare function createObject(modelHash: number | string, pos: Vector3, isNetwork: boolean, netMissionEntity: boolean, doorFlag: boolean): number;
/**
 * Creates an object (prop) with the specified model centered at the specified position.
 * This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CREATE_OBJECT_NO_OFFSET](?\_0x9A294B2138ABB884).</strong>
 *
 * Hash: 0x58040420
 * @deprecated Use object.createNoOffset(modelHash, pos, isNetwork, netMissionEntity, doorFlag) instead
 */
export declare function createObjectNoOffset(modelHash: number | string, pos: Vector3, isNetwork: boolean, netMissionEntity: boolean, doorFlag: boolean): number;
/**
 * Returns all object handles known to the server.
 * The data returned adheres to the following layout:
 *
 * ```
 * [127, 42, 13, 37]
 * ```
 *
 * Hash: 0x6886C3FE
 * @deprecated Use object.getAlls() instead
 */
export declare function getAllObjects(): number;
/**
 * Nonsynchronous operations will not wait for a disk/filesystem flush before returning from a write or delete call. They will be much faster than their synchronous counterparts (e.g., bulk operations), however, a system crash may lose the data to some recent operations.
 *
 * This native ensures all `_NO_SYNC` operations are synchronized with the disk/filesystem.
 *
 * Hash: 0xE27C97A0
 * @deprecated Use resource.flushKvp() instead
 */
export declare function flushResourceKvp(): void;
/**
 * Returns the physical on-disk path of the specified resource.
 *
 * Hash: 0x61DCF017
 * @deprecated Use resource.getPath(resourceName) instead
 */
export declare function getResourcePath(resourceName: string): string;
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a cached resource asset with the resource system, similar to the automatic scanning of the `stream/` folder.
 *
 * Hash: 0x9862B266
 * @deprecated Use resource.registerAsset(resourceName, fileName) instead
 */
export declare function registerResourceAsset(resourceName: string, fileName: string): string;
/**
 * Registers a build task factory for resources.
 * The function should return an object (msgpack map) with the following fields:
 *
 * ```
 * {
 * // returns whether the specific resource should be built
 * shouldBuild = func(resourceName: string): bool,
 *
 * // asynchronously start building the specific resource.
 * // call cb when completed
 * build = func(resourceName: string, cb: func(success: bool, status: string): void): void
 * }
 * ```
 *
 * Hash: 0x285B43CA
 * @deprecated Use resource.registerBuildTaskFactory(factoryId, factoryFn) instead
 */
export declare function registerResourceBuildTaskFactory(factoryId: string, factoryFn: Function): void;
/**
 * Writes the specified data to a file in the specified resource.
 * Using a length of `-1` will automatically detect the length assuming the data is a C string.
 *
 * Hash: 0xA09E7E7B
 * @deprecated Use resource.saveFile(resourceName, fileName, data, dataLength) instead
 */
export declare function saveResourceFile(resourceName: string, fileName: string, data: string, dataLength: number): boolean;
/**
 * Scans the resources in the specified resource root. This function is only available in the 'monitor mode' process and is
 * not available for user resources.
 *
 * Hash: 0x636F097F
 * @deprecated Use resource.scanRoot(rootPath, callback) instead
 */
export declare function scanResourceRoot(rootPath: string, callback: Function): void;
/**
 * Schedules the specified resource to run a tick as soon as possible, bypassing the server's fixed tick rate.
 *
 * Hash: 0xB88A73AD
 * @deprecated Use resource.scheduleTick(resourceName) instead
 */
export declare function scheduleResourceTick(resourceName: string): void;
/**
 * No comment provided
 *
 * Hash: 0x29B440DC
 * @deprecated Use resource.start(resourceName) instead
 */
export declare function startResource(resourceName: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x21783161
 * @deprecated Use resource.stop(resourceName) instead
 */
export declare function stopResource(resourceName: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7389B5DF
 * @deprecated Use resource.deleteKvp(key) instead
 */
export declare function deleteResourceKvp(key: string): void;
/**
 * Nonsynchronous [DELETE_RESOURCE_KVP](#\_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x4152C90
 * @deprecated Use resource.deleteKvpNoSync(key) instead
 */
export declare function deleteResourceKvpNoSync(key: string): void;
/**
 * Returns the name of the currently executing resource.
 *
 * Hash: 0xE5E9EBBB
 * @deprecated Use resource.getCurrentName() instead
 */
export declare function getCurrentResourceName(): string;
/**
 * No comment provided
 *
 * Hash: 0x4D52FE5B
 * @deprecated Use resource.getInvoking() instead
 */
export declare function getInvokingResource(): string;
/**
 * No comment provided
 *
 * Hash: 0x863F27B
 * @deprecated Use resource.getNums() instead
 */
export declare function getNumResources(): number;
/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 *
 * Hash: 0x776E864
 * @deprecated Use resource.getNumMetadata(resourceName, metadataKey) instead
 */
export declare function getNumResourceMetadata(resourceName: string, metadataKey: string): number;
/**
 * No comment provided
 *
 * Hash: 0x387246B7
 * @deprecated Use resource.getByFindIndex(findIndex) instead
 */
export declare function getResourceByFindIndex(findIndex: number): string;
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
 * Hash: 0x97628584
 * @deprecated Use resource.getCommands(resource1) instead
 */
export declare function getResourceCommands(resource1: string): number;
/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
 *
 * Hash: 0x35BDCEEA
 * @deprecated Use resource.getKvpFloat(key) instead
 */
export declare function getResourceKvpFloat(key: string): number;
/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
 *
 * Hash: 0x557B586A
 * @deprecated Use resource.getKvpInt(key) instead
 */
export declare function getResourceKvpInt(key: string): number;
/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
 *
 * Hash: 0x5240DA5A
 * @deprecated Use resource.getKvpString(key) instead
 */
export declare function getResourceKvpString(key: string): string;
/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 *
 * Hash: 0x964BAB1D
 * @deprecated Use resource.getMetadata(resourceName, metadataKey, index) instead
 */
export declare function getResourceMetadata(resourceName: string, metadataKey: string, index: number): string;
/**
 * Returns the current state of the specified resource.
 *
 * Hash: 0x4039B485
 * @deprecated Use resource.getState(resourceName) instead
 */
export declare function getResourceState(resourceName: string): string;
/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 *
 * Hash: 0x76A9EE1F
 * @deprecated Use resource.loadFile(resourceName, fileName) instead
 */
export declare function loadResourceFile(resourceName: string, fileName: string): string;
/**
 * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
 *
 * Hash: 0xD233A168
 * @deprecated Use resource.registerAsEventHandler(eventName) instead
 */
export declare function registerResourceAsEventHandler(eventName: string): void;
/**
 * A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).
 *
 * Hash: 0x21C7A35B
 * @deprecated Use resource.setKvp(key, value) instead
 */
export declare function setResourceKvp(key: string, value: string): void;
/**
 * A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).
 *
 * Hash: 0x9ADD2938
 * @deprecated Use resource.setKvpFloat(key, value) instead
 */
export declare function setResourceKvpFloat(key: string, value: number): void;
/**
 * Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x3517BFBE
 * @deprecated Use resource.setKvpFloatNoSync(key, value) instead
 */
export declare function setResourceKvpFloatNoSync(key: string, value: number): void;
/**
 * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
 *
 * Hash: 0x6A2B1E8
 * @deprecated Use resource.setKvpInt(key, value) instead
 */
export declare function setResourceKvpInt(key: string, value: number): void;
/**
 * Nonsynchronous [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x26AEB707
 * @deprecated Use resource.setKvpIntNoSync(key, value) instead
 */
export declare function setResourceKvpIntNoSync(key: string, value: number): void;
/**
 * Nonsynchronous [SET_RESOURCE_KVP](#\_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0xCF9A2FF
 * @deprecated Use resource.setKvpNoSync(key, value) instead
 */
export declare function setResourceKvpNoSync(key: string, value: string): void;
/**
 * Clear a ped's tasks. Stop animations and other tasks created by scripts.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_TASKS](?\_0xE1EF3C1216AFF2CD).</strong>
 *
 * Hash: 0xDE3316AB
 * @deprecated Use task.clearPeds(ped) instead
 */
export declare function clearPedTasks(ped: number | Ped): void;
/**
 * Immediately stops the pedestrian from whatever it's doing. The difference between this and [CLEAR_PED_TASKS](#\_0xE1EF3C1216AFF2CD) is that this one teleports the ped but does not change the position of the ped.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CLEAR_PED_TASKS_IMMEDIATELY](?\_0xAAA34F8A7CB32098).</strong>
 *
 * Hash: 0xBC045625
 * @deprecated Use task.clearPedsImmediately(ped) instead
 */
export declare function clearPedTasksImmediately(ped: number | Ped): void;
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
 * @deprecated Use task.combatPed(ped, targetPed) instead
 */
export declare function taskCombatPed(ped: number | Ped, targetPed: number | Ped): void;
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
 * @deprecated Use task.driveBy(driverPed, targetPed, targetVehicle, targetX, targetY, targetZ, distanceToShoot, pedAccuracy, firingPattern) instead
 */
export declare function taskDriveBy(driverPed: number | Ped, targetPed: number | Ped, targetVehicle: number | Vehicle, targetX: number, targetY: number, targetZ: number, distanceToShoot: number, pedAccuracy: number, firingPattern: number | string): void;
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
 * @deprecated Use task.enterVehicle(ped, vehicle, timeout, seatIndex, speed, flag) instead
 */
export declare function taskEnterVehicle(ped: number | Ped, vehicle: number | Vehicle, timeout: number, seatIndex: number, speed: number, flag: number): void;
/**
 * TASK_EVERYONE_LEAVE_VEHICLE
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_EVERYONE_LEAVE_VEHICLE](?\_0x7F93691AB4B92272).</strong>
 *
 * Hash: 0xC1971F30
 * @deprecated Use task.everyoneLeaveVehicle(vehicle) instead
 */
export declare function taskEveryoneLeaveVehicle(vehicle: number | Vehicle): void;
/**
 * TASK_GO_STRAIGHT_TO_COORD
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_GO_STRAIGHT_TO_COORD](?\_0xD76B57B44F1E6F8B).</strong>
 *
 * Hash: 0x80A9E7A7
 * @deprecated Use task.goStraightToCoord(ped, pos, speed, timeout, targetHeading, distanceToSlide) instead
 */
export declare function taskGoStraightToCoord(ped: number | Ped, pos: Vector3, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void;
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
 * @deprecated Use task.goToCoordAnyMeans(ped, pos, fMoveBlendRatio, vehicle, bUseLongRangeVehiclePathing, drivingFlags, fMaxRangeToShootTargets) instead
 */
export declare function taskGoToCoordAnyMeans(ped: number | Ped, pos: Vector3, fMoveBlendRatio: number, vehicle: number | Vehicle, bUseLongRangeVehiclePathing: boolean, drivingFlags: number, fMaxRangeToShootTargets: number): void;
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
 * @deprecated Use task.goToEntity(entity, target, duration, distance, speed) instead
 */
export declare function taskGoToEntity(entity: number | Entity, target: number | Entity, duration: number, distance: number, speed: number): void;
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
 * @deprecated Use task.handsUp(ped, duration, facingPed) instead
 */
export declare function taskHandsUp(ped: number | Ped, duration: number, facingPed: number | Ped): void;
/**
 * Flags are the same flags used in [`TASK_LEAVE_VEHICLE`](#\_0xD3DBCE61A490BE02)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_LEAVE_ANY_VEHICLE](?\_0x504D54DF3F6F2247).</strong>
 *
 * Hash: 0xDBDD79FA
 * @deprecated Use task.leaveAnyVehicle(ped, flags) instead
 */
export declare function taskLeaveAnyVehicle(ped: number | Ped, flags: number): void;
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
 * @deprecated Use task.leaveVehicle(ped, vehicle, flags) instead
 */
export declare function taskLeaveVehicle(ped: number | Ped, vehicle: number | Vehicle, flags: number): void;
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
 * @deprecated Use task.playAnim(ped, animDictionary, animationName, blendInSpeed, blendOutSpeed, duration, flag, playbackRate, lockX, lockY, lockZ) instead
 */
export declare function taskPlayAnim(ped: number | Ped, animDictionary: string, animationName: string, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: number, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void;
/**
 * Similar in functionality to [`TASK_PLAY_ANIM`](#\_0xEA47FE3719165B94), except the position and rotation parameters let you specify the initial position and rotation of the task. The ped is teleported to the position specified.
 * [Animations list](https://alexguirre.github.io/animations-list/)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_PLAY_ANIM_ADVANCED](?\_0x83CDB10EA29B370B).</strong>
 *
 * Hash: 0x3DDEB0E6
 * @deprecated Use task.playAnimAdvanced(ped, animDictionary, animationName, pos, rot, blendInSpeed, blendOutSpeed, duration, flag, animTime) instead
 */
export declare function taskPlayAnimAdvanced(ped: number | Ped, animDictionary: string, animationName: string, pos: Vector3, rot: Vector3, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: any, animTime: number): void;
/**
 * TASK_REACT_AND_FLEE_PED
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_REACT_AND_FLEE_PED](?\_0x72C896464915D1B1).</strong>
 *
 * Hash: 0x8A632BD8
 * @deprecated Use task.reactAndFleePed(ped, fleeTarget) instead
 */
export declare function taskReactAndFleePed(ped: number | Ped, fleeTarget: number | Ped): void;
/**
 * ```
 * Firing Pattern Hash Information: https://pastebin.com/Px036isB
 * ```
 *
 * <strong>This is the server-side RPC native equivalent of the client native [TASK_SHOOT_AT_COORD](?\_0x46A6CC01E0826106).</strong>
 *
 * Hash: 0x601C22E3
 * @deprecated Use task.shootAtCoord(ped, pos, duration, firingPattern) instead
 */
export declare function taskShootAtCoord(ped: number | Ped, pos: Vector3, duration: number, firingPattern: number | string): void;
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
 * @deprecated Use task.shootAtEntity(entity, target, duration, firingPattern) instead
 */
export declare function taskShootAtEntity(entity: number | Entity, target: number | Entity, duration: number, firingPattern: number | string): void;
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
 * @deprecated Use task.warpPedIntoVehicle(ped, vehicle, seatIndex) instead
 */
export declare function taskWarpPedIntoVehicle(ped: number | Ped, vehicle: number | Vehicle, seatIndex: number): void;
/**
 * Scope entry for profiler.
 *
 * Hash: 0xC795A4A9
 * @deprecated Use profiler.enterScope(scopeName) instead
 */
export declare function profilerEnterScope(scopeName: string): void;
/**
 * Scope exit for profiler.
 *
 * Hash: 0xB39CA35C
 * @deprecated Use profiler.exitScope() instead
 */
export declare function profilerExitScope(): void;
/**
 * Returns true if the profiler is active.
 *
 * Hash: 0xF8B7D7BB
 * @deprecated Use profiler.isRecording() instead
 */
export declare function profilerIsRecording(): boolean;
export * from "@risinglife/redm-shared";
