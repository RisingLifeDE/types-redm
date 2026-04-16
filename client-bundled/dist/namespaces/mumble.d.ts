import { IPlayer } from '@risinglife/redm-shared';
/**
 * Starts listening to the specified channel, when available.
 *
 * Hash: 0xC79F44BF | Since: unknown | API-Set: client
 */
export declare function addVoiceChannelListen(channel: number): void;
/**
 * Adds the specified channel to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x4D386C9E | Since: unknown | API-Set: client
 */
export declare function addVoiceTargetChannel(targetId: number, channel: number): void;
/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x32C5355A | Since: unknown | API-Set: client
 */
export declare function addVoiceTargetPlayer(targetId: number, player: number | string | IPlayer): void;
/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x25F2B65F | Since: unknown | API-Set: client
 */
export declare function addVoiceTargetPlayerByServerId(targetId: number, serverId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBF847807 | Since: unknown | API-Set: client
 */
export declare function clearVoiceChannel(): void;
/**
 * Clears the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x8555DCBA | Since: unknown | API-Set: client
 */
export declare function clearVoiceTarget(targetId: number): void;
/**
 * Clears channels from the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x5EA72E76 | Since: unknown | API-Set: client
 */
export declare function clearVoiceTargetChannels(targetId: number): void;
/**
 * Clears players from the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x912E21DA | Since: unknown | API-Set: client
 */
export declare function clearVoiceTargetPlayers(targetId: number): void;
/**
 * Check whether specified channel exists on the Mumble server.
 *
 * Hash: 0xCC8CA25 | Since: unknown | API-Set: client
 */
export declare function doesChannelExist(channel: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x84E02A32 | Since: unknown | API-Set: client
 */
export declare function getTalkerProximity(): number;
/**
 * Returns the mumble voice channel from a player's server id.
 *
 * Hash: 0x221C09F1 | Since: unknown | API-Set: client
 */
export declare function getVoiceChannelFromServerId(serverId: number): number;
/**
 * No comment provided
 *
 * Hash: 0xE820BC10 | Since: unknown | API-Set: client
 */
export declare function isActive(): boolean;
/**
 * This native will return true if the user succesfully connected to the voice server.
 * If the user disabled the voice-chat setting it will return false.
 *
 * Hash: 0xB816370A | Since: unknown | API-Set: client
 */
export declare function isConnected(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x33EEF97F | Since: unknown | API-Set: client
 */
export declare function isPlayerTalking(player: number | string | IPlayer): boolean;
/**
 * Stops listening to the specified channel.
 *
 * Hash: 0x231523B7 | Since: unknown | API-Set: client
 */
export declare function removeVoiceChannelListen(channel: number): void;
/**
 * Removes the specified voice channel from the user's voice targets.
 *
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_CHANNEL](#\_0x4D386C9E)
 *
 * Hash: 0x268DB867 | Since: unknown | API-Set: client
 */
export declare function removeVoiceTargetChannel(targetId: number, channel: number): void;
/**
 * Removes the specified player from the user's voice targets.
 *
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER](#\_0x32C5355A)
 *
 * Hash: 0x88CD646F | Since: unknown | API-Set: client
 */
export declare function removeVoiceTargetPlayer(targetId: number, player: number | string | IPlayer): void;
/**
 * Removes the specified player from the user's voice targets.
 *
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID](#\_0x25F2B65F)
 *
 * Hash: 0x930BD34B | Since: unknown | API-Set: client
 */
export declare function removeVoiceTargetPlayerByServerId(targetId: number, serverId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD932A3F3 | Since: unknown | API-Set: client
 */
export declare function setActive(state: boolean): void;
/**
 * Sets the current input distance. The player will be able to talk to other players within this distance.
 *
 * Hash: 0x1B1052E2 | Since: unknown | API-Set: client
 */
export declare function setAudioInputDistance(distance: number): void;
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
 * Hash: 0x6383526B | Since: unknown | API-Set: client
 */
export declare function setAudioInputIntent(intentHash: number | string): void;
/**
 * Sets the current output distance. The player will be able to hear other players talking within this distance.
 *
 * Hash: 0x74C597D9 | Since: unknown | API-Set: client
 */
export declare function setAudioOutputDistance(distance: number): void;
/**
 * Changes the Mumble server address to connect to, and reconnects to the new address.
 *
 * Setting the address to an empty string and the port to -1 will reset to the built in FXServer Mumble Implementation.
 *
 * Hash: 0xE6EB2CD8 | Since: unknown | API-Set: client
 */
export declare function setServerAddress(address: string, port: number): void;
/**
 * Sets the audio submix ID for a specified player using Mumble 'Native Audio' functionality.
 *
 * Hash: 0xFE3A3054 | Since: unknown | API-Set: client
 */
export declare function setSubmixForServerId(serverId: number, submixId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x74E927B0 | Since: unknown | API-Set: client
 */
export declare function setTalkerProximity(value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8737EEE8 | Since: unknown | API-Set: client
 */
export declare function setVoiceChannel(channel: number): void;
/**
 * Sets the current Mumble voice target ID to broadcast voice to.
 *
 * Hash: 0x960A4A95 | Since: unknown | API-Set: client
 */
export declare function setVoiceTarget(targetId: number): void;
/**
 * Overrides the output volume for a particular player on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 *
 * Set to -1.0 to reset the Volume override.
 *
 * Hash: 0x61C309E3 | Since: unknown | API-Set: client
 */
export declare function setVolumeOverride(player: number | string | IPlayer, volume: number): void;
/**
 * Overrides the output volume for a particular player with the specified server id and player name on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 *
 * Hash: 0xCE8E25B4 | Since: unknown | API-Set: client
 */
export declare function setVolumeOverrideByServerId(serverId: number, volume: number): void;
