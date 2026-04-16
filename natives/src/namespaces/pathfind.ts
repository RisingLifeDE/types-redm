import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0xFCD5C8E06E502F5A | Since: 1207
 */
export function addNavmeshBlockingObject(): any {
    return AddNavmeshBlockingObject(0, 0, 0, 0, 0, 0, 0, false, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x387EAD7EE42F6685 | Since: 1207
 */
export function addNavmeshRequiredRegion(x: number, y: number, radius: number): void {
    AddNavmeshRequiredRegion(x, y, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0xF7B79A50B905A30D | Since: 1207
 */
export function areNodesLoadedForArea(x1: number, y1: number, x2: number, y2: number): boolean {
    return AreNodesLoadedForArea(x1, y1, x2, y2);
}

/**
 * No comment provided
 * 
 * Hash: 0x0EAEB0DB4B132399 | Since: 1207
 */
export function doesNavmeshBlockingObjectExist(): boolean {
    return DoesNavmeshBlockingObjectExist(undefined);
}

/**
 * Returns CGameWorldHeightMap's minimum Z value at specified point (grid node).
 * 
 * Hash: 0x336511A34F2E5185 | Since: 1207
 */
export function getApproxFloorForPoint(x: number, y: number): number {
    return GetApproxFloorForPoint(x, y);
}

/**
 * No comment provided
 * 
 * Hash: 0x132F52BBA570FE92 | Since: 1207
 */
export function getClosestRoad(pos: Vector3): [any, Vector3, Vector3, any, any, number] {
    return GetClosestRoad(pos.x, pos.y, pos.z, 0, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x240A18690AE96513 | Since: 1207
 */
export function getClosestVehicleNode(pos: Vector3, nodeType: number): [boolean, Vector3] {
    return GetClosestVehicleNode(pos.x, pos.y, pos.z, nodeType, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x23CFFD4CCB243354 | Since: 1207
 */
export function getClosestVehicleNodeWithHeading(pos: Vector3, nodeType: number): [boolean, Vector3, number] {
    return GetClosestVehicleNodeWithHeading(pos.x, pos.y, pos.z, nodeType, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x869DAACBBE9FA006 | Since: 1207
 */
export function getGpsBlipRouteFound(): boolean {
    return GetGpsBlipRouteFound();
}

/**
 * No comment provided
 * 
 * Hash: 0xBBB45C3CF5C8AA85 | Since: 1207
 */
export function getGpsBlipRouteLength(): number {
    return GetGpsBlipRouteLength();
}

/**
 * No comment provided
 * 
 * Hash: 0x5A6D8DF6FBC5D0C4 | Since: 1207
 */
export function getNthClosestVehicleNode(pos: Vector3, nthClosest: number, unknown1: number, unknown2: number, unknown3: any): [boolean, Vector3] {
    return GetNthClosestVehicleNode(pos.x, pos.y, pos.z, nthClosest, unknown1, unknown2, unknown3);
}

/**
 * No comment provided
 * 
 * Hash: 0x2FAC235A6062F14A | Since: 1207
 */
export function getNthClosestVehicleNodeFavourDirection(pos: Vector3, desiredX: number, desiredY: number, desiredZ: number, nthClosest: number, nodetype: number): [boolean, Vector3, number] {
    return GetNthClosestVehicleNodeFavourDirection(pos.x, pos.y, pos.z, desiredX, desiredY, desiredZ, nthClosest, nodetype, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x116443008E5CEFC3 | Since: 1207
 */
export function getNthClosestVehicleNodeId(pos: Vector3, nth: number, nodetype: number): number {
    return GetNthClosestVehicleNodeId(pos.x, pos.y, pos.z, nth, nodetype, 0, 0);
}

/**
 * Returns the nth closest vehicle node with a heading to a coord
 * 
 * Hash: 0x4114EAA8A7F7766D | Since: 1207
 */
export function getNthClosestVehicleNodeIdWithHeading(pos: Vector3, nthClosest: number, nodeFlags: number, zMeasureMult: number, zTolerance: number): [number, number, number] {
    return GetNthClosestVehicleNodeIdWithHeading(pos.x, pos.y, pos.z, nthClosest, nodeFlags, zMeasureMult, zTolerance);
}

/**
 * No comment provided
 * 
 * Hash: 0x591B40D4390DB54A | Since: 1207
 */
export function getNthClosestVehicleNodeWithHeading(pos: Vector3, nthClosest: number, unknown2: number, unknown3: number, unknown4: number): [boolean, Vector3, number, any] {
    return GetNthClosestVehicleNodeWithHeading(pos.x, pos.y, pos.z, nthClosest, unknown2, unknown3, unknown4);
}

/**
 * No comment provided
 * 
 * Hash: 0x01708E8DD3FF8C65 | Since: 1207
 */
export function getNumNavmeshesExistingInArea(): number {
    return GetNumNavmeshesExistingInArea(0, 0, 0, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x93E0DB8440B73A7D | Since: 1207
 */
export function getRandomVehicleNode(pos: Vector3, radius: number, minLanes: number, avoidDeadEnds: boolean, avoidHighways: boolean): [boolean, Vector3, number] {
    return GetRandomVehicleNode(pos.x, pos.y, pos.z, radius, minLanes, avoidDeadEnds, avoidHighways);
}

/**
 * No comment provided
 * 
 * Hash: 0xB61C8E878A4199CA | Since: 1207
 */
export function getSafeCoordForPed(pos: Vector3, onGround: boolean, flags: number): [boolean, Vector3] {
    return GetSafeCoordForPed(pos.x, pos.y, pos.z, onGround, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0x28533DBDDF7C2C97 | Since: 1207
 */
export function getVehicleNodeIsSwitchedOff(nodeID: number): boolean {
    return GetVehicleNodeIsSwitchedOff(nodeID);
}

/**
 * No comment provided
 * 
 * Hash: 0x8E8D72FF24DEE1FB | Since: 1207
 */
export function getVehicleNodePosition(nodeId: number): Vector3 {
    return GetVehicleNodePosition(nodeId);
}

/**
 * Returns whether navmesh for the region is loaded.
 * 
 * Hash: 0xF813C7E63F9062A5 | Since: 1207
 */
export function isNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean {
    return IsNavmeshLoadedInArea(x1, y1, z1, x2, y2, z2);
}

/**
 * Gets a value indicating whether the specified position is on a road.
 * 
 * Hash: 0x125BF4ABFC536B09 | Since: 1207
 */
export function isPointOnRoad(pos: Vector3, vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsPointOnRoad(pos.x, pos.y, pos.z, _vehicle);
}

/**
 * Returns true if the id is non zero.
 * 
 * Hash: 0x5829A02AF4F0B3CB | Since: 1207
 */
export function isVehicleNodeIdValid(vehicleNodeId: number): boolean {
    return IsVehicleNodeIdValid(vehicleNodeId);
}

/**
 * Starts a nav mesh query for a path between coordinates with a given ped and returns a handle to be validated by _NAVMESH_REQUESTED_QUERY_STATUS and then _NAVMESH_REQUESTED_PATH_WAYPOINTS_FOUND
 * 
 * Only bit flag values used in scripts are 0, 23, and 29. 23 is used with dogs and horses. 29 with legendary animals.
 * 
 * Hash: 0x348F211CA2404039 | Since: 1207
 */
export function navmeshRequestPath(ped: number | IPed, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, bitFlag: number): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return NavmeshRequestPath(_ped, x1, y1, z1, x2, y2, z2, bitFlag);
}

/**
 * No comment provided
 * 
 * Hash: 0x46399A7895957C0E | Since: 1207
 */
export function removeNavmeshBlockingObject(): void {
    RemoveNavmeshBlockingObject(undefined);
}

/**
 * Old name: REQUEST_PATHS_PREFER_ACCURATE_BOUNDINGSTRUCT
 * 
 * Hash: 0x07FB139B592FA687 | Since: 1207
 */
export function requestPathNodesInAreaThisFrame(x1: number, y1: number, x2: number, y2: number): boolean {
    return RequestPathNodesInAreaThisFrame(x1, y1, x2, y2);
}

/**
 * No comment provided
 * 
 * Hash: 0xD17672447692478E | Since: 1207
 */
export function resetRoadsInVolume(volume: number): void {
    ResetRoadsInVolume(volume, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x0B919E1FB47CC4E0 | Since: 1207
 */
export function setAmbientPedRangeMultiplierThisFrame(multiplier: number): void {
    SetAmbientPedRangeMultiplierThisFrame(multiplier);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x72751156E7678833 | Since: 1207
 */
export function setIgnoreNoGpsFlag(toggle: boolean): void {
    SetIgnoreNoGpsFlag(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE04B48F2CC926253 | Since: 1207
 */
export function setPedPathsBackToOriginal(): void {
    SetPedPathsBackToOriginal(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x34F060F4BF92E018 | Since: 1207
 */
export function setPedPathsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, _unknown: boolean): void {
    SetPedPathsInArea(x1, y1, z1, x2, y2, z2, _unknown, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1EE7063B80FFC77C | Since: 1207
 */
export function setRoadsBackToOriginal(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): void {
    SetRoadsBackToOriginal(xMin, yMin, zMin, xMax, yMax, zMax, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0027501B9F3B407E | Since: 1207
 */
export function setRoadsBackToOriginalInAngledArea(): void {
    SetRoadsBackToOriginalInAngledArea(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1A5AA1208AF5DB59 | Since: 1207
 */
export function setRoadsInAngledArea(): void {
    SetRoadsInAngledArea(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF1A602B5BA52FEE | Since: 1207
 */
export function setRoadsInArea(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): void {
    SetRoadsInArea(xMin, yMin, zMin, xMax, yMax, zMax, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC1799FAFD2FDF52B | Since: 1207
 */
export function setRoadsInVolume(volume: number): void {
    SetRoadsInVolume(volume, false, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x2DD5F78D73B24172 | Since: 1207
 */
export function simulatedRouteGetEta(): number {
    return SimulatedRouteGetEta(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x240915043CB799D7 | Since: 1207
 */
export function simulatedRouteIsLoaded(): boolean {
    return SimulatedRouteIsLoaded(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA1A3DE1C215C7394 | Since: 1207
 */
export function simulatedRouteTravelToPoint(): void {
    SimulatedRouteTravelToPoint(undefined, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x264E9A5CD78C338F | Since: 1207
 */
export function _0x264E9A5CD78C338F(): void {
    Citizen.invokeNative('0x264E9A5CD78C338F', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x34C9AF25649172D0 | Since: 1207
 */
export function _0x34C9AF25649172D0(): void {
    Citizen.invokeNative('0x34C9AF25649172D0', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4358BCF14C91761C | Since: 1207
 */
export function _0x4358BCF14C91761C(): void {
    Citizen.invokeNative('0x4358BCF14C91761C', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4BDEBEA5702B97A9 | Since: 1207
 */
export function _0x4BDEBEA5702B97A9(): void {
    Citizen.invokeNative('0x4BDEBEA5702B97A9', undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x54F4D7B6670FBB5A | Since: 1207
 */
export function _0x54F4D7B6670FBB5A(): any {
    return Citizen.invokeNative('0x54F4D7B6670FBB5A', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A3B54ADDF5472A3 | Since: 1207
 */
export function _0x5A3B54ADDF5472A3(): number {
    return Citizen.invokeNative('0x5A3B54ADDF5472A3', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A4E1A41E3A02AD0 | Since: 1207
 */
export function _0x5A4E1A41E3A02AD0(): void {
    Citizen.invokeNative('0x5A4E1A41E3A02AD0', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x665B21666351CB37 | Since: 1207
 */
export function _0x665B21666351CB37(): any {
    return Citizen.invokeNative('0x665B21666351CB37', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6C3F12ECEB6D2E2A | Since: 1207
 */
export function _0x6C3F12ECEB6D2E2A(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): void {
    Citizen.invokeNative('0x6C3F12ECEB6D2E2A', xMin, yMin, zMin, xMax, yMax, zMax, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6DAD6630AE4A74CB | Since: 1207
 */
export function _0x6DAD6630AE4A74CB(): void {
    Citizen.invokeNative('0x6DAD6630AE4A74CB', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x869A7015BD4606E9 | Since: 1207
 */
export function _0x869A7015BD4606E9(): void {
    Citizen.invokeNative('0x869A7015BD4606E9', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA33914B00CA55756 | Since: 1207
 */
export function _0xA33914B00CA55756(): any {
    return Citizen.invokeNative('0xA33914B00CA55756', undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xAFE2AE66F6251C66 | Since: 1207
 */
export function _0xAFE2AE66F6251C66(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): void {
    Citizen.invokeNative('0xAFE2AE66F6251C66', xMin, yMin, zMin, xMax, yMax, zMax, 0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB03944057FD735BA | Since: 1207
 */
export function _0xB03944057FD735BA(): void {
    Citizen.invokeNative('0xB03944057FD735BA', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCA27A86CAA4E98ED | Since: 1207
 */
export function _0xCA27A86CAA4E98ED(): any {
    return Citizen.invokeNative('0xCA27A86CAA4E98ED', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCF213A5FC3ABFC08 | Since: 1207
 */
export function _0xCF213A5FC3ABFC08(): void {
    Citizen.invokeNative('0xCF213A5FC3ABFC08', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE5EF9DE716FF737E | Since: 1207
 */
export function _0xE5EF9DE716FF737E(): void {
    Citizen.invokeNative('0xE5EF9DE716FF737E', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEFC535C9FAF563B3 | Since: 1207
 */
export function _0xEFC535C9FAF563B3(): any {
    return Citizen.invokeNative('0xEFC535C9FAF563B3', undefined);
}

/**
 * GPS disabled zone: p1 = 0
 * Clearing GPS disabled zone: p1 = 1
 * 
 * Hash: 0xF2A2177AC848B3A8 | Since: 1207
 */
export function _0xF2A2177AC848B3A8(volume: number): void {
    Citizen.invokeNative('0xF2A2177AC848B3A8', volume, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x19C7567D2F2287D6 | Since: 1207
 */
export function addNavmeshBlockingVolume(volume: number, flags: number): boolean {
    return AddNavmeshBlockingVolume(volume, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0xDE0EA444735C1368 | Since: 1207
 */
export function doesNavmeshBlockingVolumeExist(volume: number): boolean {
    return DoesNavmeshBlockingVolumeExist(volume);
}

/**
 * No comment provided
 * 
 * Hash: 0xA3791B915B8B84C6 | Since: 1207
 */
export function getSpawnDataForRoadNode(nodeId: number, pos: Vector3): [Vector3, number] {
    return GetSpawnDataForRoadNode(nodeId, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x7C334FF4D9215912 | Since: 1207
 */
export function navmeshActivateSwap(name: string): boolean {
    return NavmeshActivateSwap(name);
}

/**
 * No comment provided
 * 
 * Hash: 0x44026E3DB3CED602 | Since: 1207
 */
export function navmeshAssignNavmeshToVehicle(vehicle: number | IVehicle, navMeshName: string): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return NavmeshAssignNavmeshToVehicle(_vehicle, navMeshName);
}

/**
 * Called in scripts after finished with requested pathes. Immediately resets all values connected to the path handle except query status, which changes from 1 to 2 before eventually becoming fully invalidated to 0.
 * 
 * Hash: 0x661BB1E1FF77742D | Since: 1207
 */
export function navmeshClearRequestedPath(path: number): boolean {
    return NavmeshClearRequestedPath(path);
}

/**
 * No comment provided
 * 
 * Hash: 0x527B97C203BB8606 | Since: 1207
 */
export function navmeshDeactivateSwap(): [boolean, string] {
    return NavmeshDeactivateSwap();
}

/**
 * No comment provided
 * 
 * Hash: 0x495CFAB2924237C7 | Since: 1207
 */
export function navmeshDoesSwapExist(): [boolean, string] {
    return NavmeshDoesSwapExist();
}

/**
 * No comment provided
 * 
 * Hash: 0x5AC0944C156E5F44 | Since: 1207
 */
export function navmeshIsSwapActive(): [boolean, string] {
    return NavmeshIsSwapActive();
}

/**
 * Returns the number of waypoints for a requested path (NAVMESH_REQUEST_PATH) if the query is completed (_NAVMESH_REQUESTED_QUERY_STATUS). For use with _NAVMESH_REQUESTED_PATH_WAYPOINT_BY_INDEX
 * 
 * Hash: 0xD470725E0703D22F | Since: 1207
 */
export function navmeshRequestedPathNumWaypoints(path: number): number {
    return NavmeshRequestedPathNumWaypoints(path);
}

/**
 * Returns true if a path of waypoints was found. Waypoints can be retrieved with _NAVMESH_REQUESTED_PATH_NUM_WAYPOINTS and _NAVMESH_REQUESTED_PATH_WAYPOINT_BY_INDEX
 * 
 * Hash: 0x8800776E410EB669 | Since: 1207
 */
export function navmeshRequestedPathWaypointsFound(path: number): boolean {
    return NavmeshRequestedPathWaypointsFound(path);
}

/**
 * Returns a bit flag for seemingly terrain within the waypoints in the path. Checked against bit value 2 to match water in the path, seems to always contain at least 1 though regardless of location/ped.
 * 
 * Hash: 0xF61CFEDEAB627BFA | Since: 1207
 */
export function navmeshRequestedPathWaypointsTerrain(path: number): number {
    return NavmeshRequestedPathWaypointsTerrain(path);
}

/**
 * Returns a vector3 waypoint at the specified index for a path. Use _NAVMESH_REQUESTED_PATH_NUM_WAYPOINTS to get available indexes.
 * 
 * Hash: 0x430F8319AE56C8A9 | Since: 1207
 */
export function navmeshRequestedPathWaypointByIndex(path: number, waypointIndex: number): Vector3 {
    return new Vector3(NavmeshRequestedPathWaypointByIndex(path, waypointIndex));
}

/**
 * Returns eNavMeshQueryStatus
 * enum eNavMeshQueryStatus
 * {
 * QS_NOT_FOUND,
 * QS_COMPLETE,
 * QS_PENDING
 * };
 * 
 * It appears that the pending state of 2 is at least also used when cleaning up a request (_NAVMESH_CLEAR_REQUESTED_PATH) or if a request never completes. Eventually queries are invalidated and return 0.
 * 
 * Old name: _NAVMESH_QUERY_STATUS
 * 
 * Hash: 0x3A0F82F6EE2291C8 | Since: 1207
 */
export function navmeshRequestedQueryStatus(path: number): number {
    return NavmeshRequestedQueryStatus(path);
}

/**
 * No comment provided
 * 
 * Hash: 0x2C87C3E1C7B96EE2 | Since: 1207
 */
export function removeNavmeshBlockingVolume(volume: number): void {
    RemoveNavmeshBlockingVolume(volume);
}

/**
 * No comment provided
 * 
 * Hash: 0xFD5BB35AAB83FD48 | Since: 1207
 */
export function simulatedRouteCreate(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): any {
    return SimulatedRouteCreate(x1, y1, z1, x2, y2, z2, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x4907D0E4FB26EE65 | Since: 1207
 */
export function simulatedRouteDelete(): void {
    SimulatedRouteDelete(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x65A8196B8D7F5E0B | Since: 1207
 */
export function simulatedRouteExists(): boolean {
    return SimulatedRouteExists(undefined);
}

