import { IPed, IVehicle, IObject } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0xF97B1C93
 */
export function enableEnhancedHostSupport(enabled) {
    EnableEnhancedHostSupport(enabled);
}
/**
 * No comment provided
 *
 * Hash: 0x13B6855D
 */
export function flagServerAsPrivate(private_) {
    FlagServerAsPrivate(private_);
}
/**
 * Returns the current console output buffer.
 *
 * Hash: 0xE57429FA
 */
export function getConsoleBuffer() {
    return GetConsoleBuffer();
}
/**
 * Gets the current game timer in milliseconds.
 *
 * Hash: 0xA4EA0691
 */
export function getGameTimer() {
    return GetGameTimer();
}
/**
 * This native converts the passed string to a hash.
 *
 * Hash: 0x98EFF6F1
 */
export function getHashKey(model) {
    return GetHashKey(model);
}
/**
 * No comment provided
 *
 * Hash: 0xF01E2AAB
 */
export function getHeliMainRotorHealth(vehicle) {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetHeliMainRotorHealth(_vehicle);
}
/**
 * No comment provided
 *
 * Hash: 0x5F70F5A3
 */
export function getHostId() {
    return GetHostId();
}
/**
 * No comment provided
 *
 * Hash: 0x23473EA4
 */
export function getPasswordHash(password) {
    return GetPasswordHash(password);
}
/**
 * No comment provided
 *
 * Hash: 0x76876154
 */
export function isFlashLightOn(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsFlashLightOn(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x8E8CC653
 */
export function performHttpRequestInternal(requestData, requestDataLength) {
    return PerformHttpRequestInternal(requestData, requestDataLength);
}
/**
 * No comment provided
 *
 * Hash: 0x6B171E87
 */
export function performHttpRequestInternalEx(requestData) {
    const _requestData = requestData instanceof IObject ? requestData.handle() : requestData;
    return PerformHttpRequestInternalEx(_requestData);
}
/**
 * Prints 'structured trace' data to the server `file descriptor 3` channel. This is not generally useful outside of
 * server monitoring utilities.
 *
 * Hash: 0x90892DED
 */
export function printStructuredTrace(jsonString) {
    PrintStructuredTrace(jsonString);
}
/**
 * Registers a listener for console output messages.
 *
 * Hash: 0x281B5448
 */
export function registerConsoleListener(listener) {
    RegisterConsoleListener(listener);
}
/**
 * No comment provided
 *
 * Hash: 0x341B16D2
 */
export function setConvar(varName, value) {
    SetConvar(varName, value);
}
/**
 * Used to replicate a server variable onto clients.
 *
 * Hash: 0xF292858C
 */
export function setConvarReplicated(varName, value) {
    SetConvarReplicated(varName, value);
}
/**
 * No comment provided
 *
 * Hash: 0x9338D547
 */
export function setConvarServerInfo(varName, value) {
    SetConvarServerInfo(varName, value);
}
/**
 * No comment provided
 *
 * Hash: 0xF90B7469
 */
export function setGameType(gametypeName) {
    SetGameType(gametypeName);
}
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
export function setHttpHandler(handler) {
    SetHttpHandler(handler);
}
/**
 * No comment provided
 *
 * Hash: 0xB7BA82DC
 */
export function setMapName(mapName) {
    SetMapName(mapName);
}
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
export function setRoutingBucketEntityLockdownMode(bucketId, mode) {
    SetRoutingBucketEntityLockdownMode(bucketId, mode);
}
/**
 * Sets whether or not the specified routing bucket has automatically-created population enabled.
 *
 * Hash: 0xCE51AC2C
 */
export function setRoutingBucketPopulationEnabled(bucketId, mode) {
    SetRoutingBucketPopulationEnabled(bucketId, mode);
}
/**
 * The backing function for TriggerClientEvent.
 *
 * Hash: 0x2F7A49E6
 */
export function triggerClientEventInternal(eventName, eventTarget, eventPayload, payloadLength) {
    TriggerClientEventInternal(eventName, eventTarget, eventPayload, payloadLength);
}
/**
 * The backing function for TriggerLatentClientEvent.
 *
 * Hash: 0x70B35890
 */
export function triggerLatentClientEventInternal(eventName, eventTarget, eventPayload, payloadLength, bps) {
    TriggerLatentClientEventInternal(eventName, eventTarget, eventPayload, payloadLength, bps);
}
/**
 * No comment provided
 *
 * Hash: 0x2E310ACD
 */
export function verifyPasswordHash(password, hash) {
    return VerifyPasswordHash(password, hash);
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
export function addConvarChangeListener(conVarFilter, handler) {
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
export function addStateBagChangeHandler(keyFilter, bagFilter, handler) {
    return AddStateBagChangeHandler(keyFilter, bagFilter, handler);
}
/**
 * Cancels the currently executing event.
 *
 * Hash: 0xFA29D35D
 */
export function cancelEvent() {
    CancelEvent();
}
/**
 * No comment provided
 *
 * Hash: 0x1E86F206
 */
export function deleteFunctionReference(referenceIdentity) {
    DeleteFunctionReference(referenceIdentity);
}
/**
 * No comment provided
 *
 * Hash: 0xF4E2079D
 */
export function duplicateFunctionReference(referenceIdentity) {
    return DuplicateFunctionReference(referenceIdentity);
}
/**
 * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
 *
 * Hash: 0x561C060B
 */
export function executeCommand(commandString) {
    ExecuteCommand(commandString);
}
/**
 * An internal function for converting a stack trace object to a string.
 *
 * Hash: 0xD70C3BCA
 */
export function formatStackTrace(traceData) {
    const _traceData = traceData instanceof IObject ? traceData.handle() : traceData;
    return FormatStackTrace(_traceData);
}
/**
 * Can be used to get a console variable of type `char*`, for example a string.
 *
 * Hash: 0x6CCD2564
 */
export function getConvar(varName, default_) {
    return GetConvar(varName, default_);
}
/**
 * Can be used to get a console variable casted back to `bool`.
 *
 * Hash: 0x7E8EBFE5
 */
export function getConvarBool(varName, defaultValue) {
    return GetConvarBool(varName, defaultValue);
}
/**
 * This will have floating point inaccuracy.
 *
 * Hash: 0x9E666D
 */
export function getConvarFloat(varName, defaultValue) {
    return GetConvarFloat(varName, defaultValue);
}
/**
 * Can be used to get a console variable casted back to `int` (an integer value).
 *
 * Hash: 0x935C0AB2
 */
export function getConvarInt(varName, default_) {
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
export function getGameBuildNumber() {
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
 * Hash: 0x2B9D4F50
 */
export function getGamePool(poolName) {
    return GetGamePool(poolName);
}
/**
 * No comment provided
 *
 * Hash: 0x9F1C4383
 */
export function getInstanceId() {
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
export function getRegisteredCommands() {
    return GetRegisteredCommands();
}
/**
 * No comment provided
 *
 * Hash: 0x78D864C7
 */
export function getStateBagKeys(bagName) {
    return GetStateBagKeys(bagName);
}
/**
 * Returns the value of a state bag key.
 *
 * Hash: 0x637F4C75
 */
export function getStateBagValue(bagName, key) {
    return GetStateBagValue(bagName, key);
}
/**
 * No comment provided
 *
 * Hash: 0x7EBB9929
 */
export function isAceAllowed(_object) {
    return IsAceAllowed(_object);
}
/**
 * Gets whether or not this is the CitizenFX server.
 *
 * Hash: 0xCF24C52E
 */
export function isDuplicityVersion() {
    return IsDuplicityVersion();
}
/**
 * No comment provided
 *
 * Hash: 0x37CF52CE
 */
export function isPrincipalAceAllowed(principal, _object) {
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
export function registerCommand(commandName, handler, restricted) {
    RegisterCommand(commandName, handler, restricted);
}
/**
 * No comment provided
 *
 * Hash: 0xEAC49841
 */
export function removeConvarChangeListener(cookie) {
    RemoveConvarChangeListener(cookie);
}
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Removes a handler for changes to a state bag.
 *
 * Hash: 0xD36BE661
 */
export function removeStateBagChangeHandler(cookie) {
    RemoveStateBagChangeHandler(cookie);
}
/**
 * Internal function for setting a state bag value.
 *
 * Hash: 0x8D50E33A
 */
export function setStateBagValue(bagName, keyName, valueData, valueLength, replicated) {
    SetStateBagValue(bagName, keyName, valueData, valueLength, replicated);
}
/**
 * No comment provided
 *
 * Hash: 0x12A330
 */
export function stateBagHasKey(bagName, key) {
    return StateBagHasKey(bagName, key);
}
/**
 * The backing function for TriggerEvent.
 *
 * Hash: 0x91310870
 */
export function triggerEventInternal(eventName, eventPayload, payloadLength) {
    TriggerEventInternal(eventName, eventPayload, payloadLength);
}
/**
 * Returns whether or not the currently executing event was canceled.
 *
 * Hash: 0x58382A19
 */
export function wasEventCanceled() {
    return WasEventCanceled();
}
