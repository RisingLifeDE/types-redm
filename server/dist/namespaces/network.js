import { Vector3, IEntity } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x5B912C3F
 */
export function getEntityFromNetworkId(netId) {
    return NetworkGetEntityFromNetworkId(netId);
}
/**
 * Returns the first owner ID of the specified entity.
 *
 * Hash: 0x1E546224
 */
export function getFirstEntityOwner(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkGetFirstEntityOwner(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0x9E35DAB6
 */
export function getNetworkIdFromEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkGetNetworkIdFromEntity(_entity);
}
/**
 * No comment provided
 *
 * Hash: 0xFFEEF513
 */
export function getVoiceProximityOverrideForPlayer(playerSrc) {
    return new Vector3(NetworkGetVoiceProximityOverrideForPlayer(playerSrc));
}
/**
 * Returns the owner ID of the specified entity.
 *
 * Hash: 0x526FEE31
 */
export function getEntityOwner(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkGetEntityOwner(_entity);
}
