import { Vector3, IObject } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x322B1192
 */
export declare function getInteriorEntitiesExtents(interiorId: number): [number, number, number, number, number, number];
/**
 * No comment provided
 *
 * Hash: 0xF772BB2C
 */
export declare function getInteriorPortalCornerPosition(interiorId: number, portalIndex: number, cornerIndex: number): [number, number, number];
/**
 * No comment provided
 *
 * Hash: 0xD05BB8B1
 */
export declare function getInteriorPortalCount(interiorId: number): number;
/**
 * No comment provided
 *
 * Hash: 0x9A0E1700
 */
export declare function getInteriorPortalEntityArchetype(interiorId: number, portalIndex: number, entityIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xC68021B
 */
export declare function getInteriorPortalEntityCount(interiorId: number, portalIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x9DA2E811
 */
export declare function getInteriorPortalEntityFlag(interiorId: number, portalIndex: number, entityIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x9B7AB83C
 */
export declare function getInteriorPortalEntityPosition(interiorId: number, portalIndex: number, entityIndex: number): [number, number, number];
/**
 * No comment provided
 *
 * Hash: 0x9F9CEB63
 */
export declare function getInteriorPortalEntityRotation(interiorId: number, portalIndex: number, entityIndex: number): [number, number, number, number];
/**
 * No comment provided
 *
 * Hash: 0xC74DA47C
 */
export declare function getInteriorPortalFlag(interiorId: number, portalIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xAA9C141D
 */
export declare function getInteriorPortalRoomFrom(interiorId: number, portalIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x3F47F0E8
 */
export declare function getInteriorPortalRoomTo(interiorId: number, portalIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x77A435B0
 */
export declare function getInteriorPosition(interiorId: number): [number, number, number];
/**
 * No comment provided
 *
 * Hash: 0xA2737C2C
 */
export declare function getInteriorRoomCount(interiorId: number): number;
/**
 * No comment provided
 *
 * Hash: 0xF9E795DD
 */
export declare function getInteriorRoomExtents(interiorId: number, roomIndex: number): [number, number, number, number, number, number];
/**
 * No comment provided
 *
 * Hash: 0x6B7AF743
 */
export declare function getInteriorRoomFlag(interiorId: number, roomIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xE0EE05F8
 */
export declare function getInteriorRoomIndexByHash(interiorId: number, roomHash: number): number;
/**
 * No comment provided
 *
 * Hash: 0x11755DF2
 */
export declare function getInteriorRoomName(interiorId: number, roomIndex: number): string;
/**
 * No comment provided
 *
 * Hash: 0x82BA3F88
 */
export declare function getInteriorRoomTimecycle(interiorId: number, roomIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x5A039998
 */
export declare function getInteriorRotation(interiorId: number): [number, number, number, number];
/**
 * No comment provided
 *
 * Hash: 0x87F43553
 */
export declare function setInteriorPortalCornerPosition(interiorId: number, portalIndex: number, cornerIndex: number, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x8349CD76
 */
export declare function setInteriorPortalEntityFlag(interiorId: number, portalIndex: number, entityIndex: number, flag: number): void;
/**
 * No comment provided
 *
 * Hash: 0x88B2355E
 */
export declare function setInteriorPortalFlag(interiorId: number, portalIndex: number, flag: number): void;
/**
 * No comment provided
 *
 * Hash: 0x298FC783
 */
export declare function setInteriorPortalRoomFrom(interiorId: number, portalIndex: number, roomFrom: number): void;
/**
 * No comment provided
 *
 * Hash: 0x58982680
 */
export declare function setInteriorPortalRoomTo(interiorId: number, portalIndex: number, roomTo: number): void;
/**
 * Overwrite the games default CPortalTracker interior detection range.
 * This fixes potentially unwanted behaviour in the base game and allows you to build custom interiors with larger ceiling heights without running into graphical glitches.
 *
 * By default CPortalTracker will probe 4 units downward trying to reach collisions that are part of the interior the entity is in.
 * If no collision can be found 16 units are used in some circumstances.
 *
 * There are 30+ hard coded special cases, only some of them exposed via script (for example `ENABLE_STADIUM_PROBES_THIS_FRAME`).
 *
 * This native allows you to extend the probe range up to 150 units which is the same value the game uses for the `xs_arena_interior`
 *
 * Hash: 0x423F7E39
 */
export declare function setInteriorProbeLength(probeLength: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4FDCF51E
 */
export declare function setInteriorRoomExtents(interiorId: number, roomIndex: number, bbMinX: number, bbMinY: number, bbMinZ: number, bbMaxX: number, bbMaxY: number, bbMaxZ: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5518D60B
 */
export declare function setInteriorRoomFlag(interiorId: number, roomIndex: number, flag: number): void;
/**
 * No comment provided
 *
 * Hash: 0x31C9A848
 */
export declare function setInteriorRoomTimecycle(interiorId: number, roomIndex: number, timecycleHash: number): void;
/**
 * Transiently updates the entity with the specified mapdata index and entity index.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xFC52CB91
 */
export declare function updateMapdataEntity(mapdata: number, entity: number, entityDef: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0x32CA01C3
 */
export declare function addTextEntry(entryKey: string, entryText: string): void;
/**
 * No comment provided
 *
 * Hash: 0x289DA860
 */
export declare function addTextEntryByHash(entryKey: number | string, entryText: string): void;
