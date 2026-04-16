/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938), but for a specified resource.
 *
 * Hash: 0x3CC98B25 | Since: unknown | API-Set: client
 */
export function getExternalKvpFloat(resource, key) {
    return GetExternalKvpFloat(resource, key);
}
/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8), but for a specified resource.
 *
 * Hash: 0x12B8D689 | Since: unknown | API-Set: client
 */
export function getExternalKvpInt(resource, key) {
    return GetExternalKvpInt(resource, key);
}
/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B), but for a specified resource.
 *
 * Hash: 0x9080363A | Since: unknown | API-Set: client
 */
export function getExternalKvpString(resource, key) {
    return GetExternalKvpString(resource, key);
}
/**
 * Equivalent of [START_FIND_KVP](#\_0xDD379006), but for another resource than the current one.
 *
 * Hash: 0x8F2EECC3 | Since: unknown | API-Set: client
 */
export function startFindExternalKvp(resourceName, prefix) {
    return StartFindExternalKvp(resourceName, prefix);
}
/**
 * No comment provided
 *
 * Hash: 0x7389B5DF | Since: unknown | API-Set: shared
 */
export function deleteKvp(key) {
    DeleteResourceKvp(key);
}
/**
 * Nonsynchronous [DELETE_RESOURCE_KVP](#\_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x4152C90 | Since: unknown | API-Set: shared
 */
export function deleteKvpNoSync(key) {
    DeleteResourceKvpNoSync(key);
}
/**
 * No comment provided
 *
 * Hash: 0xB3210203 | Since: unknown | API-Set: shared
 */
export function endFindKvp(handle) {
    EndFindKvp(handle);
}
/**
 * No comment provided
 *
 * Hash: 0xBD7BEBC5 | Since: unknown | API-Set: shared
 */
export function findKvp(handle) {
    return FindKvp(handle);
}
/**
 * Returns the name of the currently executing resource.
 *
 * Hash: 0xE5E9EBBB | Since: unknown | API-Set: shared
 */
export function getCurrentName() {
    return GetCurrentResourceName();
}
/**
 * No comment provided
 *
 * Hash: 0x4D52FE5B | Since: unknown | API-Set: shared
 */
export function getInvoking() {
    return GetInvokingResource();
}
/**
 * No comment provided
 *
 * Hash: 0x863F27B | Since: unknown | API-Set: shared
 */
export function getNums() {
    return GetNumResources();
}
/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 *
 * Hash: 0x776E864 | Since: unknown | API-Set: shared
 */
export function getNumMetadata(resourceName, metadataKey) {
    return GetNumResourceMetadata(resourceName, metadataKey);
}
/**
 * No comment provided
 *
 * Hash: 0x387246B7 | Since: unknown | API-Set: shared
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
 * Hash: 0x97628584 | Since: unknown | API-Set: shared
 */
export function getCommands(resource) {
    return GetResourceCommands(resource);
}
/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
 *
 * Hash: 0x35BDCEEA | Since: unknown | API-Set: shared
 */
export function getKvpFloat(key) {
    return GetResourceKvpFloat(key);
}
/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
 *
 * Hash: 0x557B586A | Since: unknown | API-Set: shared
 */
export function getKvpInt(key) {
    return GetResourceKvpInt(key);
}
/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
 *
 * Hash: 0x5240DA5A | Since: unknown | API-Set: shared
 */
export function getKvpString(key) {
    return GetResourceKvpString(key);
}
/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 *
 * Hash: 0x964BAB1D | Since: unknown | API-Set: shared
 */
export function getMetadata(resourceName, metadataKey, index) {
    return GetResourceMetadata(resourceName, metadataKey, index);
}
/**
 * Returns the current state of the specified resource.
 *
 * Hash: 0x4039B485 | Since: unknown | API-Set: shared
 */
export function getState(resourceName) {
    return GetResourceState(resourceName);
}
/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 *
 * Hash: 0x76A9EE1F | Since: unknown | API-Set: shared
 */
export function loadFile(resourceName, fileName) {
    return LoadResourceFile(resourceName, fileName);
}
/**
 * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
 *
 * Hash: 0xD233A168 | Since: unknown | API-Set: shared
 */
export function registerAsEventHandler(eventName) {
    RegisterResourceAsEventHandler(eventName);
}
/**
 * A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).
 *
 * Hash: 0x21C7A35B | Since: unknown | API-Set: shared
 */
export function setKvp(key, value) {
    SetResourceKvp(key, value);
}
/**
 * A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).
 *
 * Hash: 0x9ADD2938 | Since: unknown | API-Set: shared
 */
export function setKvpFloat(key, value) {
    SetResourceKvpFloat(key, value);
}
/**
 * Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x3517BFBE | Since: unknown | API-Set: shared
 */
export function setKvpFloatNoSync(key, value) {
    SetResourceKvpFloatNoSync(key, value);
}
/**
 * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
 *
 * Hash: 0x6A2B1E8 | Since: unknown | API-Set: shared
 */
export function setKvpInt(key, value) {
    SetResourceKvpInt(key, value);
}
/**
 * Nonsynchronous [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x26AEB707 | Since: unknown | API-Set: shared
 */
export function setKvpIntNoSync(key, value) {
    SetResourceKvpIntNoSync(key, value);
}
/**
 * Nonsynchronous [SET_RESOURCE_KVP](#\_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0xCF9A2FF | Since: unknown | API-Set: shared
 */
export function setKvpNoSync(key, value) {
    SetResourceKvpNoSync(key, value);
}
/**
 * No comment provided
 *
 * Hash: 0xDD379006 | Since: unknown | API-Set: shared
 */
export function startFindKvp(prefix) {
    return StartFindKvp(prefix);
}
