import { Vector3, IEntity } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x5B912C3F
 */
export declare function getEntityFromNetworkId(netId: number): number;
/**
 * Returns the first owner ID of the specified entity.
 *
 * Hash: 0x1E546224
 */
export declare function getFirstEntityOwner(entity: number | IEntity): number;
/**
 * No comment provided
 *
 * Hash: 0x9E35DAB6
 */
export declare function getNetworkIdFromEntity(entity: number | IEntity): number;
/**
 * No comment provided
 *
 * Hash: 0xFFEEF513
 */
export declare function getVoiceProximityOverrideForPlayer(playerSrc: string): Vector3;
/**
 * Returns the owner ID of the specified entity.
 *
 * Hash: 0x526FEE31
 */
export declare function getEntityOwner(entity: number | IEntity): number;
