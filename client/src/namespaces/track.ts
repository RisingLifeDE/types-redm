import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

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
export function getAllJunctions(): number {
    return GetAllTrackJunctions();
}

/**
 * Get all track nodes and their track ids within the radius of the specified coordinates.
 * 
 * Hash: 0x59FC24A7
 */
export function getClosestNodes(position: Vector3, radius: number): number {
    return GetClosestTrackNodes(position, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF482A5E
 */
export function getBrakingDistance(track: number): number {
    return GetTrackBrakingDistance(track);
}

/**
 * No comment provided
 * 
 * Hash: 0x34EE2BF3
 */
export function getMaxSpeed(track: number): number {
    return GetTrackMaxSpeed(track);
}

/**
 * Gets the coordinates of a specific track node.
 * 
 * Hash: 0x1628548E
 */
export function getNodeCoords(trackIndex: number, trackNode: number): [boolean, Vector3] {
    return GetTrackNodeCoords(trackIndex, trackNode);
}

/**
 * Gets the specified tracks node count.
 * 
 * Hash: 0x896A0C11
 */
export function getNodeCount(trackIndex: number): number {
    return GetTrackNodeCount(trackIndex);
}

/**
 * Getter for [SET_TRACK_ENABLED](#\_0x4B41E84C)
 * 
 * Hash: 0x31E695CB
 */
export function isEnabled(track: number): boolean {
    return IsTrackEnabled(track);
}

/**
 * Getter for [SWITCH_TRAIN_TRACK](#\_0xFD813BB7DB977F20). Determines if ambient trains are able to spawn on this track.
 * 
 * Hash: 0xE0C53765
 */
export function isSwitchedOff(track: number): boolean {
    return IsTrackSwitchedOff(track);
}

/**
 * Registers a track junction that when enabled will cause a train on the defined trackIndex, node and direction to change its current track index and begin traveling on the new node
 * 
 * Hash: 0x35F743B5
 */
export function registerJunction(trackIndex: number, trackNode: number, newIndex: number, newNode: number, direction: boolean): number {
    return RegisterTrackJunction(trackIndex, trackNode, newIndex, newNode, direction);
}

/**
 * Removes the specified track junction.
 * 
 * Hash: 0x4F3D2B2A
 */
export function removeJunction(junctionIndex: number): boolean {
    return RemoveTrackJunction(junctionIndex);
}

/**
 * Sets the braking distance of the track. Used by trains to determine the point to slow down when entering a station.
 * 
 * Hash: 0x77EB78D0
 */
export function setBrakingDistance(track: number, brakingDistance: number): void {
    SetTrackBrakingDistance(track, brakingDistance);
}

/**
 * Toggles the track being active. If disabled mission trains will not be able to spawn on this track and will look for the next closest track to spawn
 * 
 * Hash: 0x4B41E84C
 */
export function setEnabled(track: number, enabled: boolean): void {
    SetTrackEnabled(track, enabled);
}

/**
 * Sets the state of a track junction.
 * 
 * Hash: 0x537B449D
 */
export function setJunctionActive(junctionIndex: number, state: boolean): boolean {
    return SetTrackJunctionActive(junctionIndex, state);
}

/**
 * Sets the max speed for the train tracks. Used by ambient trains and for station calculations
 * 
 * Hash: 0x37BFC732
 */
export function setMaxSpeed(track: number, newSpeed: number): void {
    SetTrackMaxSpeed(track, newSpeed);
}

