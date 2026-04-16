/**
 * Nonsynchronous operations will not wait for a disk/filesystem flush before returning from a write or delete call. They will be much faster than their synchronous counterparts (e.g., bulk operations), however, a system crash may lose the data to some recent operations.
 *
 * This native ensures all `_NO_SYNC` operations are synchronized with the disk/filesystem.
 *
 * Hash: 0xE27C97A0
 */
export function flushKvp() {
    FlushResourceKvp();
}
/**
 * Returns the physical on-disk path of the specified resource.
 *
 * Hash: 0x61DCF017
 */
export function getPath(resourceName) {
    return GetResourcePath(resourceName);
}
/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a cached resource asset with the resource system, similar to the automatic scanning of the `stream/` folder.
 *
 * Hash: 0x9862B266
 */
export function registerAsset(resourceName, fileName) {
    return RegisterResourceAsset(resourceName, fileName);
}
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
export function registerBuildTaskFactory(factoryId, factoryFn) {
    RegisterResourceBuildTaskFactory(factoryId, factoryFn);
}
/**
 * Writes the specified data to a file in the specified resource.
 * Using a length of `-1` will automatically detect the length assuming the data is a C string.
 *
 * Hash: 0xA09E7E7B
 */
export function saveFile(resourceName, fileName, data, dataLength) {
    return SaveResourceFile(resourceName, fileName, data, dataLength);
}
/**
 * Scans the resources in the specified resource root. This function is only available in the 'monitor mode' process and is
 * not available for user resources.
 *
 * Hash: 0x636F097F
 */
export function scanRoot(rootPath, callback) {
    ScanResourceRoot(rootPath, callback);
}
/**
 * Schedules the specified resource to run a tick as soon as possible, bypassing the server's fixed tick rate.
 *
 * Hash: 0xB88A73AD
 */
export function scheduleTick(resourceName) {
    ScheduleResourceTick(resourceName);
}
/**
 * No comment provided
 *
 * Hash: 0x29B440DC
 */
export function start(resourceName) {
    return StartResource(resourceName);
}
/**
 * No comment provided
 *
 * Hash: 0x21783161
 */
export function stop(resourceName) {
    return StopResource(resourceName);
}
/**
 * No comment provided
 *
 * Hash: 0x7389B5DF
 */
export function deleteKvp(key) {
    DeleteResourceKvp(key);
}
/**
 * Nonsynchronous [DELETE_RESOURCE_KVP](#\_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x4152C90
 */
export function deleteKvpNoSync(key) {
    DeleteResourceKvpNoSync(key);
}
/**
 * No comment provided
 *
 * Hash: 0xB3210203
 */
export function endFindKvp(handle) {
    EndFindKvp(handle);
}
/**
 * No comment provided
 *
 * Hash: 0xBD7BEBC5
 */
export function findKvp(handle) {
    return FindKvp(handle);
}
/**
 * Returns the name of the currently executing resource.
 *
 * Hash: 0xE5E9EBBB
 */
export function getCurrentName() {
    return GetCurrentResourceName();
}
/**
 * No comment provided
 *
 * Hash: 0x4D52FE5B
 */
export function getInvoking() {
    return GetInvokingResource();
}
/**
 * No comment provided
 *
 * Hash: 0x863F27B
 */
export function getNums() {
    return GetNumResources();
}
/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 *
 * Hash: 0x776E864
 */
export function getNumMetadata(resourceName, metadataKey) {
    return GetNumResourceMetadata(resourceName, metadataKey);
}
/**
 * No comment provided
 *
 * Hash: 0x387246B7
 */
export function getByFindIndex(findIndex) {
    return GetResourceByFindIndex(findIndex);
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
 * Hash: 0x97628584
 */
export function getCommands(resource) {
    return GetResourceCommands(resource);
}
/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
 *
 * Hash: 0x35BDCEEA
 */
export function getKvpFloat(key) {
    return GetResourceKvpFloat(key);
}
/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
 *
 * Hash: 0x557B586A
 */
export function getKvpInt(key) {
    return GetResourceKvpInt(key);
}
/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
 *
 * Hash: 0x5240DA5A
 */
export function getKvpString(key) {
    return GetResourceKvpString(key);
}
/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 *
 * Hash: 0x964BAB1D
 */
export function getMetadata(resourceName, metadataKey, index) {
    return GetResourceMetadata(resourceName, metadataKey, index);
}
/**
 * Returns the current state of the specified resource.
 *
 * Hash: 0x4039B485
 */
export function getState(resourceName) {
    return GetResourceState(resourceName);
}
/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 *
 * Hash: 0x76A9EE1F
 */
export function loadFile(resourceName, fileName) {
    return LoadResourceFile(resourceName, fileName);
}
/**
 * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
 *
 * Hash: 0xD233A168
 */
export function registerAsEventHandler(eventName) {
    RegisterResourceAsEventHandler(eventName);
}
/**
 * A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).
 *
 * Hash: 0x21C7A35B
 */
export function setKvp(key, value) {
    SetResourceKvp(key, value);
}
/**
 * A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).
 *
 * Hash: 0x9ADD2938
 */
export function setKvpFloat(key, value) {
    SetResourceKvpFloat(key, value);
}
/**
 * Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x3517BFBE
 */
export function setKvpFloatNoSync(key, value) {
    SetResourceKvpFloatNoSync(key, value);
}
/**
 * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
 *
 * Hash: 0x6A2B1E8
 */
export function setKvpInt(key, value) {
    SetResourceKvpInt(key, value);
}
/**
 * Nonsynchronous [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x26AEB707
 */
export function setKvpIntNoSync(key, value) {
    SetResourceKvpIntNoSync(key, value);
}
/**
 * Nonsynchronous [SET_RESOURCE_KVP](#\_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0xCF9A2FF
 */
export function setKvpNoSync(key, value) {
    SetResourceKvpNoSync(key, value);
}
/**
 * No comment provided
 *
 * Hash: 0xDD379006
 */
export function startFindKvp(prefix) {
    return StartFindKvp(prefix);
}
