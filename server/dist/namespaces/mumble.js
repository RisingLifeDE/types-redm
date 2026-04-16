/**
 * Create a permanent voice channel.
 *
 * Hash: 0x262663C5
 */
export function createChannel(id) {
    MumbleCreateChannel(id);
}
/**
 * Checks if the player is currently muted
 *
 * Hash: 0x1D5D50C2
 */
export function isPlayerMuted(playerSrc) {
    return MumbleIsPlayerMuted(playerSrc);
}
/**
 * Mutes or unmutes the specified player
 *
 * Hash: 0xCC6C2EB1
 */
export function setPlayerMuted(playerSrc, toggle) {
    MumbleSetPlayerMuted(playerSrc, toggle);
}
