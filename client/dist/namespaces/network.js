import { IEntity } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x2CAFD5E9
 */
export function getWalkMode() {
    return GetNetworkWalkMode();
}
/**
 * No comment provided
 *
 * Hash: 0x55188D2D
 */
export function setWalkMode(enabled) {
    SetNetworkWalkMode(enabled);
}
/**
 * No comment provided
 *
 * Hash: 0x1E2E3177
 */
export function doesEntityExistWithNetworkId(netId) {
    return NetworkDoesEntityExistWithNetworkId(netId);
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
