/**
 * Create a permanent voice channel.
 *
 * Hash: 0x262663C5
 */
export declare function createChannel(id: number): void;
/**
 * Checks if the player is currently muted
 *
 * Hash: 0x1D5D50C2
 */
export declare function isPlayerMuted(playerSrc: number): boolean;
/**
 * Mutes or unmutes the specified player
 *
 * Hash: 0xCC6C2EB1
 */
export declare function setPlayerMuted(playerSrc: number, toggle: boolean): void;
