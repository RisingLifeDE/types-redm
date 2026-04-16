import { IPlayer } from '@risinglife/redm-shared';
/**
 * Starts listening to the specified channel, when available.
 *
 * Hash: 0xC79F44BF
 */
export function addVoiceChannelListen(channel) {
    MumbleAddVoiceChannelListen(channel);
}
/**
 * Adds the specified channel to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x4D386C9E
 */
export function addVoiceTargetChannel(targetId, channel) {
    MumbleAddVoiceTargetChannel(targetId, channel);
}
/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x32C5355A
 */
export function addVoiceTargetPlayer(targetId, player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    MumbleAddVoiceTargetPlayer(targetId, _player);
}
/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x25F2B65F
 */
export function addVoiceTargetPlayerByServerId(targetId, serverId) {
    MumbleAddVoiceTargetPlayerByServerId(targetId, serverId);
}
/**
 * No comment provided
 *
 * Hash: 0xBF847807
 */
export function clearVoiceChannel() {
    MumbleClearVoiceChannel();
}
/**
 * Clears the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x8555DCBA
 */
export function clearVoiceTarget(targetId) {
    MumbleClearVoiceTarget(targetId);
}
/**
 * Clears channels from the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x5EA72E76
 */
export function clearVoiceTargetChannels(targetId) {
    MumbleClearVoiceTargetChannels(targetId);
}
/**
 * Clears players from the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x912E21DA
 */
export function clearVoiceTargetPlayers(targetId) {
    MumbleClearVoiceTargetPlayers(targetId);
}
/**
 * Check whether specified channel exists on the Mumble server.
 *
 * Hash: 0xCC8CA25
 */
export function doesChannelExist(channel) {
    return MumbleDoesChannelExist(channel);
}
/**
 * No comment provided
 *
 * Hash: 0x84E02A32
 */
export function getTalkerProximity() {
    return MumbleGetTalkerProximity();
}
/**
 * Returns the mumble voice channel from a player's server id.
 *
 * Hash: 0x221C09F1
 */
export function getVoiceChannelFromServerId(serverId) {
    return MumbleGetVoiceChannelFromServerId(serverId);
}
/**
 * No comment provided
 *
 * Hash: 0xE820BC10
 */
export function isActive() {
    return MumbleIsActive();
}
/**
 * This native will return true if the user succesfully connected to the voice server.
 * If the user disabled the voice-chat setting it will return false.
 *
 * Hash: 0xB816370A
 */
export function isConnected() {
    return MumbleIsConnected();
}
/**
 * No comment provided
 *
 * Hash: 0x33EEF97F
 */
export function isPlayerTalking(player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return MumbleIsPlayerTalking(_player);
}
/**
 * Stops listening to the specified channel.
 *
 * Hash: 0x231523B7
 */
export function removeVoiceChannelListen(channel) {
    MumbleRemoveVoiceChannelListen(channel);
}
/**
 * Removes the specified voice channel from the user's voice targets.
 *
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_CHANNEL](#\_0x4D386C9E)
 *
 * Hash: 0x268DB867
 */
export function removeVoiceTargetChannel(targetId, channel) {
    MumbleRemoveVoiceTargetChannel(targetId, channel);
}
/**
 * Removes the specified player from the user's voice targets.
 *
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER](#\_0x32C5355A)
 *
 * Hash: 0x88CD646F
 */
export function removeVoiceTargetPlayer(targetId, player) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    MumbleRemoveVoiceTargetPlayer(targetId, _player);
}
/**
 * Removes the specified player from the user's voice targets.
 *
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID](#\_0x25F2B65F)
 *
 * Hash: 0x930BD34B
 */
export function removeVoiceTargetPlayerByServerId(targetId, serverId) {
    MumbleRemoveVoiceTargetPlayerByServerId(targetId, serverId);
}
/**
 * No comment provided
 *
 * Hash: 0xD932A3F3
 */
export function setActive(state) {
    MumbleSetActive(state);
}
/**
 * Sets the current input distance. The player will be able to talk to other players within this distance.
 *
 * Hash: 0x1B1052E2
 */
export function setAudioInputDistance(distance) {
    MumbleSetAudioInputDistance(distance);
}
/**
 * Use this native to disable noise suppression and high pass filters.
 *
 * The possible intents for this are as follows (backticks are used to represent hashes):
 *
 * | Index | Description |
 * |-|-|
 * | \`speech\` | Default intent |
 * | \`music\` | Disable noise suppression and high pass filter |
 *
 * Hash: 0x6383526B
 */
export function setAudioInputIntent(intentHash) {
    if (typeof intentHash === 'string')
        intentHash = GetHashKey(intentHash);
    MumbleSetAudioInputIntent(intentHash);
}
/**
 * Sets the current output distance. The player will be able to hear other players talking within this distance.
 *
 * Hash: 0x74C597D9
 */
export function setAudioOutputDistance(distance) {
    MumbleSetAudioOutputDistance(distance);
}
/**
 * Changes the Mumble server address to connect to, and reconnects to the new address.
 *
 * Setting the address to an empty string and the port to -1 will reset to the built in FXServer Mumble Implementation.
 *
 * Hash: 0xE6EB2CD8
 */
export function setServerAddress(address, port) {
    MumbleSetServerAddress(address, port);
}
/**
 * Sets the audio submix ID for a specified player using Mumble 'Native Audio' functionality.
 *
 * Hash: 0xFE3A3054
 */
export function setSubmixForServerId(serverId, submixId) {
    MumbleSetSubmixForServerId(serverId, submixId);
}
/**
 * No comment provided
 *
 * Hash: 0x74E927B0
 */
export function setTalkerProximity(value) {
    MumbleSetTalkerProximity(value);
}
/**
 * No comment provided
 *
 * Hash: 0x8737EEE8
 */
export function setVoiceChannel(channel) {
    MumbleSetVoiceChannel(channel);
}
/**
 * Sets the current Mumble voice target ID to broadcast voice to.
 *
 * Hash: 0x960A4A95
 */
export function setVoiceTarget(targetId) {
    MumbleSetVoiceTarget(targetId);
}
/**
 * Overrides the output volume for a particular player on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 *
 * Set to -1.0 to reset the Volume override.
 *
 * Hash: 0x61C309E3
 */
export function setVolumeOverride(player, volume) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    MumbleSetVolumeOverride(_player, volume);
}
/**
 * Overrides the output volume for a particular player with the specified server id and player name on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 *
 * Hash: 0xCE8E25B4
 */
export function setVolumeOverrideByServerId(serverId, volume) {
    MumbleSetVolumeOverrideByServerId(serverId, volume);
}
