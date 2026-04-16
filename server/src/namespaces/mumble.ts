import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * Create a permanent voice channel.
 * 
 * Hash: 0x262663C5
 */
export function createChannel(id: number): void {
    MumbleCreateChannel(id);
}

/**
 * Checks if the player is currently muted
 * 
 * Hash: 0x1D5D50C2
 */
export function isPlayerMuted(playerSrc: number): boolean {
    return MumbleIsPlayerMuted(playerSrc);
}

/**
 * Mutes or unmutes the specified player
 * 
 * Hash: 0xCC6C2EB1
 */
export function setPlayerMuted(playerSrc: number, toggle: boolean): void {
    MumbleSetPlayerMuted(playerSrc, toggle);
}

