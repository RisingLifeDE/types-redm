import { Vector3, IPed, IVehicle } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0xFCD5C8E06E502F5A | Since: 1207
 */
export declare function addNavmeshBlockingObject(): any;
/**
 * No comment provided
 *
 * Hash: 0x387EAD7EE42F6685 | Since: 1207
 */
export declare function addNavmeshRequiredRegion(x: number, y: number, radius: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF7B79A50B905A30D | Since: 1207
 */
export declare function areNodesLoadedForArea(x1: number, y1: number, x2: number, y2: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0EAEB0DB4B132399 | Since: 1207
 */
export declare function doesNavmeshBlockingObjectExist(): boolean;
/**
 * Returns CGameWorldHeightMap's minimum Z value at specified point (grid node).
 *
 * Hash: 0x336511A34F2E5185 | Since: 1207
 */
export declare function getApproxFloorForPoint(x: number, y: number): number;
/**
 * No comment provided
 *
 * Hash: 0x132F52BBA570FE92 | Since: 1207
 */
export declare function getClosestRoad(pos: Vector3): [any, Vector3, Vector3, any, any, number];
/**
 * No comment provided
 *
 * Hash: 0x240A18690AE96513 | Since: 1207
 */
export declare function getClosestVehicleNode(pos: Vector3, nodeType: number): [boolean, Vector3];
/**
 * No comment provided
 *
 * Hash: 0x23CFFD4CCB243354 | Since: 1207
 */
export declare function getClosestVehicleNodeWithHeading(pos: Vector3, nodeType: number): [boolean, Vector3, number];
/**
 * No comment provided
 *
 * Hash: 0x869DAACBBE9FA006 | Since: 1207
 */
export declare function getGpsBlipRouteFound(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBBB45C3CF5C8AA85 | Since: 1207
 */
export declare function getGpsBlipRouteLength(): number;
/**
 * No comment provided
 *
 * Hash: 0x5A6D8DF6FBC5D0C4 | Since: 1207
 */
export declare function getNthClosestVehicleNode(pos: Vector3, nthClosest: number, unknown1: number, unknown2: number, unknown3: any): [boolean, Vector3];
/**
 * No comment provided
 *
 * Hash: 0x2FAC235A6062F14A | Since: 1207
 */
export declare function getNthClosestVehicleNodeFavourDirection(pos: Vector3, desiredX: number, desiredY: number, desiredZ: number, nthClosest: number, nodetype: number): [boolean, Vector3, number];
/**
 * No comment provided
 *
 * Hash: 0x116443008E5CEFC3 | Since: 1207
 */
export declare function getNthClosestVehicleNodeId(pos: Vector3, nth: number, nodetype: number): number;
/**
 * Returns the nth closest vehicle node with a heading to a coord
 *
 * Hash: 0x4114EAA8A7F7766D | Since: 1207
 */
export declare function getNthClosestVehicleNodeIdWithHeading(pos: Vector3, nthClosest: number, nodeFlags: number, zMeasureMult: number, zTolerance: number): [number, number, number];
/**
 * No comment provided
 *
 * Hash: 0x591B40D4390DB54A | Since: 1207
 */
export declare function getNthClosestVehicleNodeWithHeading(pos: Vector3, nthClosest: number, unknown2: number, unknown3: number, unknown4: number): [boolean, Vector3, number, any];
/**
 * No comment provided
 *
 * Hash: 0x01708E8DD3FF8C65 | Since: 1207
 */
export declare function getNumNavmeshesExistingInArea(): number;
/**
 * No comment provided
 *
 * Hash: 0x93E0DB8440B73A7D | Since: 1207
 */
export declare function getRandomVehicleNode(pos: Vector3, radius: number, minLanes: number, avoidDeadEnds: boolean, avoidHighways: boolean): [boolean, Vector3, number];
/**
 * No comment provided
 *
 * Hash: 0xB61C8E878A4199CA | Since: 1207
 */
export declare function getSafeCoordForPed(pos: Vector3, onGround: boolean, flags: number): [boolean, Vector3];
/**
 * No comment provided
 *
 * Hash: 0x28533DBDDF7C2C97 | Since: 1207
 */
export declare function getVehicleNodeIsSwitchedOff(nodeID: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8E8D72FF24DEE1FB | Since: 1207
 */
export declare function getVehicleNodePosition(nodeId: number): Vector3;
/**
 * Returns whether navmesh for the region is loaded.
 *
 * Hash: 0xF813C7E63F9062A5 | Since: 1207
 */
export declare function isNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
/**
 * Gets a value indicating whether the specified position is on a road.
 *
 * Hash: 0x125BF4ABFC536B09 | Since: 1207
 */
export declare function isPointOnRoad(pos: Vector3, vehicle: number | IVehicle): boolean;
/**
 * Returns true if the id is non zero.
 *
 * Hash: 0x5829A02AF4F0B3CB | Since: 1207
 */
export declare function isVehicleNodeIdValid(vehicleNodeId: number): boolean;
/**
 * Starts a nav mesh query for a path between coordinates with a given ped and returns a handle to be validated by _NAVMESH_REQUESTED_QUERY_STATUS and then _NAVMESH_REQUESTED_PATH_WAYPOINTS_FOUND
 *
 * Only bit flag values used in scripts are 0, 23, and 29. 23 is used with dogs and horses. 29 with legendary animals.
 *
 * Hash: 0x348F211CA2404039 | Since: 1207
 */
export declare function navmeshRequestPath(ped: number | IPed, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, bitFlag: number): number;
/**
 * No comment provided
 *
 * Hash: 0x46399A7895957C0E | Since: 1207
 */
export declare function removeNavmeshBlockingObject(): void;
/**
 * Old name: REQUEST_PATHS_PREFER_ACCURATE_BOUNDINGSTRUCT
 *
 * Hash: 0x07FB139B592FA687 | Since: 1207
 */
export declare function requestPathNodesInAreaThisFrame(x1: number, y1: number, x2: number, y2: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD17672447692478E | Since: 1207
 */
export declare function resetRoadsInVolume(volume: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0B919E1FB47CC4E0 | Since: 1207
 */
export declare function setAmbientPedRangeMultiplierThisFrame(multiplier: number): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x72751156E7678833 | Since: 1207
 */
export declare function setIgnoreNoGpsFlag(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xE04B48F2CC926253 | Since: 1207
 */
export declare function setPedPathsBackToOriginal(): void;
/**
 * No comment provided
 *
 * Hash: 0x34F060F4BF92E018 | Since: 1207
 */
export declare function setPedPathsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, _unknown: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1EE7063B80FFC77C | Since: 1207
 */
export declare function setRoadsBackToOriginal(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0027501B9F3B407E | Since: 1207
 */
export declare function setRoadsBackToOriginalInAngledArea(): void;
/**
 * No comment provided
 *
 * Hash: 0x1A5AA1208AF5DB59 | Since: 1207
 */
export declare function setRoadsInAngledArea(): void;
/**
 * No comment provided
 *
 * Hash: 0xBF1A602B5BA52FEE | Since: 1207
 */
export declare function setRoadsInArea(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC1799FAFD2FDF52B | Since: 1207
 */
export declare function setRoadsInVolume(volume: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2DD5F78D73B24172 | Since: 1207
 */
export declare function simulatedRouteGetEta(): number;
/**
 * No comment provided
 *
 * Hash: 0x240915043CB799D7 | Since: 1207
 */
export declare function simulatedRouteIsLoaded(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA1A3DE1C215C7394 | Since: 1207
 */
export declare function simulatedRouteTravelToPoint(): void;
/**
 * No comment provided
 *
 * Hash: 0x264E9A5CD78C338F | Since: 1207
 */
export declare function _0x264E9A5CD78C338F(): void;
/**
 * No comment provided
 *
 * Hash: 0x34C9AF25649172D0 | Since: 1207
 */
export declare function _0x34C9AF25649172D0(): void;
/**
 * No comment provided
 *
 * Hash: 0x4358BCF14C91761C | Since: 1207
 */
export declare function _0x4358BCF14C91761C(): void;
/**
 * No comment provided
 *
 * Hash: 0x4BDEBEA5702B97A9 | Since: 1207
 */
export declare function _0x4BDEBEA5702B97A9(): void;
/**
 * No comment provided
 *
 * Hash: 0x54F4D7B6670FBB5A | Since: 1207
 */
export declare function _0x54F4D7B6670FBB5A(): any;
/**
 * No comment provided
 *
 * Hash: 0x5A3B54ADDF5472A3 | Since: 1207
 */
export declare function _0x5A3B54ADDF5472A3(): number;
/**
 * No comment provided
 *
 * Hash: 0x5A4E1A41E3A02AD0 | Since: 1207
 */
export declare function _0x5A4E1A41E3A02AD0(): void;
/**
 * No comment provided
 *
 * Hash: 0x665B21666351CB37 | Since: 1207
 */
export declare function _0x665B21666351CB37(): any;
/**
 * No comment provided
 *
 * Hash: 0x6C3F12ECEB6D2E2A | Since: 1207
 */
export declare function _0x6C3F12ECEB6D2E2A(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6DAD6630AE4A74CB | Since: 1207
 */
export declare function _0x6DAD6630AE4A74CB(): void;
/**
 * No comment provided
 *
 * Hash: 0x869A7015BD4606E9 | Since: 1207
 */
export declare function _0x869A7015BD4606E9(): void;
/**
 * No comment provided
 *
 * Hash: 0xA33914B00CA55756 | Since: 1207
 */
export declare function _0xA33914B00CA55756(): any;
/**
 * No comment provided
 *
 * Hash: 0xAFE2AE66F6251C66 | Since: 1207
 */
export declare function _0xAFE2AE66F6251C66(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB03944057FD735BA | Since: 1207
 */
export declare function _0xB03944057FD735BA(): void;
/**
 * No comment provided
 *
 * Hash: 0xCA27A86CAA4E98ED | Since: 1207
 */
export declare function _0xCA27A86CAA4E98ED(): any;
/**
 * No comment provided
 *
 * Hash: 0xCF213A5FC3ABFC08 | Since: 1207
 */
export declare function _0xCF213A5FC3ABFC08(): void;
/**
 * No comment provided
 *
 * Hash: 0xE5EF9DE716FF737E | Since: 1207
 */
export declare function _0xE5EF9DE716FF737E(): void;
/**
 * No comment provided
 *
 * Hash: 0xEFC535C9FAF563B3 | Since: 1207
 */
export declare function _0xEFC535C9FAF563B3(): any;
/**
 * GPS disabled zone: p1 = 0
 * Clearing GPS disabled zone: p1 = 1
 *
 * Hash: 0xF2A2177AC848B3A8 | Since: 1207
 */
export declare function _0xF2A2177AC848B3A8(volume: number): void;
/**
 * No comment provided
 *
 * Hash: 0x19C7567D2F2287D6 | Since: 1207
 */
export declare function addNavmeshBlockingVolume(volume: number, flags: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDE0EA444735C1368 | Since: 1207
 */
export declare function doesNavmeshBlockingVolumeExist(volume: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA3791B915B8B84C6 | Since: 1207
 */
export declare function getSpawnDataForRoadNode(nodeId: number, pos: Vector3): [Vector3, number];
/**
 * No comment provided
 *
 * Hash: 0x7C334FF4D9215912 | Since: 1207
 */
export declare function navmeshActivateSwap(name: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x44026E3DB3CED602 | Since: 1207
 */
export declare function navmeshAssignNavmeshToVehicle(vehicle: number | IVehicle, navMeshName: string): boolean;
/**
 * Called in scripts after finished with requested pathes. Immediately resets all values connected to the path handle except query status, which changes from 1 to 2 before eventually becoming fully invalidated to 0.
 *
 * Hash: 0x661BB1E1FF77742D | Since: 1207
 */
export declare function navmeshClearRequestedPath(path: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x527B97C203BB8606 | Since: 1207
 */
export declare function navmeshDeactivateSwap(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x495CFAB2924237C7 | Since: 1207
 */
export declare function navmeshDoesSwapExist(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x5AC0944C156E5F44 | Since: 1207
 */
export declare function navmeshIsSwapActive(): [boolean, string];
/**
 * Returns the number of waypoints for a requested path (NAVMESH_REQUEST_PATH) if the query is completed (_NAVMESH_REQUESTED_QUERY_STATUS). For use with _NAVMESH_REQUESTED_PATH_WAYPOINT_BY_INDEX
 *
 * Hash: 0xD470725E0703D22F | Since: 1207
 */
export declare function navmeshRequestedPathNumWaypoints(path: number): number;
/**
 * Returns true if a path of waypoints was found. Waypoints can be retrieved with _NAVMESH_REQUESTED_PATH_NUM_WAYPOINTS and _NAVMESH_REQUESTED_PATH_WAYPOINT_BY_INDEX
 *
 * Hash: 0x8800776E410EB669 | Since: 1207
 */
export declare function navmeshRequestedPathWaypointsFound(path: number): boolean;
/**
 * Returns a bit flag for seemingly terrain within the waypoints in the path. Checked against bit value 2 to match water in the path, seems to always contain at least 1 though regardless of location/ped.
 *
 * Hash: 0xF61CFEDEAB627BFA | Since: 1207
 */
export declare function navmeshRequestedPathWaypointsTerrain(path: number): number;
/**
 * Returns a vector3 waypoint at the specified index for a path. Use _NAVMESH_REQUESTED_PATH_NUM_WAYPOINTS to get available indexes.
 *
 * Hash: 0x430F8319AE56C8A9 | Since: 1207
 */
export declare function navmeshRequestedPathWaypointByIndex(path: number, waypointIndex: number): Vector3;
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
export declare function navmeshRequestedQueryStatus(path: number): number;
/**
 * No comment provided
 *
 * Hash: 0x2C87C3E1C7B96EE2 | Since: 1207
 */
export declare function removeNavmeshBlockingVolume(volume: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFD5BB35AAB83FD48 | Since: 1207
 */
export declare function simulatedRouteCreate(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): any;
/**
 * No comment provided
 *
 * Hash: 0x4907D0E4FB26EE65 | Since: 1207
 */
export declare function simulatedRouteDelete(): void;
/**
 * No comment provided
 *
 * Hash: 0x65A8196B8D7F5E0B | Since: 1207
 */
export declare function simulatedRouteExists(): boolean;
