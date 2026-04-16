import { IEntity } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x2CAFD5E9
 */
export declare function getWalkMode(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x55188D2D
 */
export declare function setWalkMode(enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1E2E3177
 */
export declare function doesEntityExistWithNetworkId(netId: number): boolean;
/**
 * Returns the owner ID of the specified entity.
 *
 * Hash: 0x526FEE31
 */
export declare function getEntityOwner(entity: number | IEntity): number;
