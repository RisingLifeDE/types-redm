import { Vector3 } from '@risinglife/redm-shared';
/**
 * Returns all track junctions on the client
 * The data returned adheres to the following structure:
 *
 * ```
 * [1, 2, 4, 6, 69, 420]
 * ```
 *
 * Hash: 0x81A08523
 */
export declare function getAllJunctions(): number;
/**
 * Get all track nodes and their track ids within the radius of the specified coordinates.
 *
 * Hash: 0x59FC24A7
 */
export declare function getClosestNodes(position: Vector3, radius: number): number;
/**
 * No comment provided
 *
 * Hash: 0xBF482A5E
 */
export declare function getBrakingDistance(track: number): number;
/**
 * No comment provided
 *
 * Hash: 0x34EE2BF3
 */
export declare function getMaxSpeed(track: number): number;
/**
 * Gets the coordinates of a specific track node.
 *
 * Hash: 0x1628548E
 */
export declare function getNodeCoords(trackIndex: number, trackNode: number): [boolean, Vector3];
/**
 * Gets the specified tracks node count.
 *
 * Hash: 0x896A0C11
 */
export declare function getNodeCount(trackIndex: number): number;
/**
 * Getter for [SET_TRACK_ENABLED](#\_0x4B41E84C)
 *
 * Hash: 0x31E695CB
 */
export declare function isEnabled(track: number): boolean;
/**
 * Getter for [SWITCH_TRAIN_TRACK](#\_0xFD813BB7DB977F20). Determines if ambient trains are able to spawn on this track.
 *
 * Hash: 0xE0C53765
 */
export declare function isSwitchedOff(track: number): boolean;
/**
 * Registers a track junction that when enabled will cause a train on the defined trackIndex, node and direction to change its current track index and begin traveling on the new node
 *
 * Hash: 0x35F743B5
 */
export declare function registerJunction(trackIndex: number, trackNode: number, newIndex: number, newNode: number, direction: boolean): number;
/**
 * Removes the specified track junction.
 *
 * Hash: 0x4F3D2B2A
 */
export declare function removeJunction(junctionIndex: number): boolean;
/**
 * Sets the braking distance of the track. Used by trains to determine the point to slow down when entering a station.
 *
 * Hash: 0x77EB78D0
 */
export declare function setBrakingDistance(track: number, brakingDistance: number): void;
/**
 * Toggles the track being active. If disabled mission trains will not be able to spawn on this track and will look for the next closest track to spawn
 *
 * Hash: 0x4B41E84C
 */
export declare function setEnabled(track: number, enabled: boolean): void;
/**
 * Sets the state of a track junction.
 *
 * Hash: 0x537B449D
 */
export declare function setJunctionActive(junctionIndex: number, state: boolean): boolean;
/**
 * Sets the max speed for the train tracks. Used by ambient trains and for station calculations
 *
 * Hash: 0x37BFC732
 */
export declare function setMaxSpeed(track: number, newSpeed: number): void;
