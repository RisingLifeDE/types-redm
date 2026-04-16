import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x2CAFD5E9
 */
export function getWalkMode(): boolean {
    return GetNetworkWalkMode();
}

/**
 * No comment provided
 * 
 * Hash: 0x55188D2D
 */
export function setWalkMode(enabled: boolean): void {
    SetNetworkWalkMode(enabled);
}

/**
 * No comment provided
 * 
 * Hash: 0x1E2E3177
 */
export function doesEntityExistWithNetworkId(netId: number): boolean {
    return NetworkDoesEntityExistWithNetworkId(netId);
}

/**
 * Returns the owner ID of the specified entity.
 * 
 * Hash: 0x526FEE31
 */
export function getEntityOwner(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkGetEntityOwner(_entity);
}

