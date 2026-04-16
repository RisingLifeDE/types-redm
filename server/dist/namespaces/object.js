/**
 * Creates an object (prop) with the specified model at the specified position, offset on the Z axis by the radius of the object's model.
 * This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CREATE_OBJECT](?\_0x509D5878EB39E842).</strong>
 *
 * Hash: 0x2F7AA05C
 */
export function create(modelHash, pos, isNetwork, netMissionEntity, doorFlag) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreateObject(modelHash, pos.x, pos.y, pos.z, isNetwork, netMissionEntity, doorFlag);
}
/**
 * Creates an object (prop) with the specified model centered at the specified position.
 * This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
 *
 * <strong>This is the server-side RPC native equivalent of the client native [CREATE_OBJECT_NO_OFFSET](?\_0x9A294B2138ABB884).</strong>
 *
 * Hash: 0x58040420
 */
export function createNoOffset(modelHash, pos, isNetwork, netMissionEntity, doorFlag) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreateObjectNoOffset(modelHash, pos.x, pos.y, pos.z, isNetwork, netMissionEntity, doorFlag);
}
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
export function getAlls() {
    return GetAllObjects();
}
