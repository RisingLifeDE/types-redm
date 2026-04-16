import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x322B1192
 */
export function getInteriorEntitiesExtents(interiorId: number): [number, number, number, number, number, number] {
    return GetInteriorEntitiesExtents(interiorId);
}

/**
 * No comment provided
 * 
 * Hash: 0xF772BB2C
 */
export function getInteriorPortalCornerPosition(interiorId: number, portalIndex: number, cornerIndex: number): [number, number, number] {
    return GetInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xD05BB8B1
 */
export function getInteriorPortalCount(interiorId: number): number {
    return GetInteriorPortalCount(interiorId);
}

/**
 * No comment provided
 * 
 * Hash: 0x9A0E1700
 */
export function getInteriorPortalEntityArchetype(interiorId: number, portalIndex: number, entityIndex: number): number {
    return GetInteriorPortalEntityArchetype(interiorId, portalIndex, entityIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xC68021B
 */
export function getInteriorPortalEntityCount(interiorId: number, portalIndex: number): number {
    return GetInteriorPortalEntityCount(interiorId, portalIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x9DA2E811
 */
export function getInteriorPortalEntityFlag(interiorId: number, portalIndex: number, entityIndex: number): number {
    return GetInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x9B7AB83C
 */
export function getInteriorPortalEntityPosition(interiorId: number, portalIndex: number, entityIndex: number): [number, number, number] {
    return GetInteriorPortalEntityPosition(interiorId, portalIndex, entityIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x9F9CEB63
 */
export function getInteriorPortalEntityRotation(interiorId: number, portalIndex: number, entityIndex: number): [number, number, number, number] {
    return GetInteriorPortalEntityRotation(interiorId, portalIndex, entityIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xC74DA47C
 */
export function getInteriorPortalFlag(interiorId: number, portalIndex: number): number {
    return GetInteriorPortalFlag(interiorId, portalIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xAA9C141D
 */
export function getInteriorPortalRoomFrom(interiorId: number, portalIndex: number): number {
    return GetInteriorPortalRoomFrom(interiorId, portalIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x3F47F0E8
 */
export function getInteriorPortalRoomTo(interiorId: number, portalIndex: number): number {
    return GetInteriorPortalRoomTo(interiorId, portalIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x77A435B0
 */
export function getInteriorPosition(interiorId: number): [number, number, number] {
    return GetInteriorPosition(interiorId);
}

/**
 * No comment provided
 * 
 * Hash: 0xA2737C2C
 */
export function getInteriorRoomCount(interiorId: number): number {
    return GetInteriorRoomCount(interiorId);
}

/**
 * No comment provided
 * 
 * Hash: 0xF9E795DD
 */
export function getInteriorRoomExtents(interiorId: number, roomIndex: number): [number, number, number, number, number, number] {
    return GetInteriorRoomExtents(interiorId, roomIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x6B7AF743
 */
export function getInteriorRoomFlag(interiorId: number, roomIndex: number): number {
    return GetInteriorRoomFlag(interiorId, roomIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xE0EE05F8
 */
export function getInteriorRoomIndexByHash(interiorId: number, roomHash: number): number {
    return GetInteriorRoomIndexByHash(interiorId, roomHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x11755DF2
 */
export function getInteriorRoomName(interiorId: number, roomIndex: number): string {
    return GetInteriorRoomName(interiorId, roomIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x82BA3F88
 */
export function getInteriorRoomTimecycle(interiorId: number, roomIndex: number): number {
    return GetInteriorRoomTimecycle(interiorId, roomIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A039998
 */
export function getInteriorRotation(interiorId: number): [number, number, number, number] {
    return GetInteriorRotation(interiorId);
}

/**
 * No comment provided
 * 
 * Hash: 0x87F43553
 */
export function setInteriorPortalCornerPosition(interiorId: number, portalIndex: number, cornerIndex: number, pos: Vector3): void {
    SetInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x8349CD76
 */
export function setInteriorPortalEntityFlag(interiorId: number, portalIndex: number, entityIndex: number, flag: number): void {
    SetInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex, flag);
}

/**
 * No comment provided
 * 
 * Hash: 0x88B2355E
 */
export function setInteriorPortalFlag(interiorId: number, portalIndex: number, flag: number): void {
    SetInteriorPortalFlag(interiorId, portalIndex, flag);
}

/**
 * No comment provided
 * 
 * Hash: 0x298FC783
 */
export function setInteriorPortalRoomFrom(interiorId: number, portalIndex: number, roomFrom: number): void {
    SetInteriorPortalRoomFrom(interiorId, portalIndex, roomFrom);
}

/**
 * No comment provided
 * 
 * Hash: 0x58982680
 */
export function setInteriorPortalRoomTo(interiorId: number, portalIndex: number, roomTo: number): void {
    SetInteriorPortalRoomTo(interiorId, portalIndex, roomTo);
}

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
export function setInteriorProbeLength(probeLength: number): void {
    SetInteriorProbeLength(probeLength);
}

/**
 * No comment provided
 * 
 * Hash: 0x4FDCF51E
 */
export function setInteriorRoomExtents(interiorId: number, roomIndex: number, bbMinX: number, bbMinY: number, bbMinZ: number, bbMaxX: number, bbMaxY: number, bbMaxZ: number): void {
    SetInteriorRoomExtents(interiorId, roomIndex, bbMinX, bbMinY, bbMinZ, bbMaxX, bbMaxY, bbMaxZ);
}

/**
 * No comment provided
 * 
 * Hash: 0x5518D60B
 */
export function setInteriorRoomFlag(interiorId: number, roomIndex: number, flag: number): void {
    SetInteriorRoomFlag(interiorId, roomIndex, flag);
}

/**
 * No comment provided
 * 
 * Hash: 0x31C9A848
 */
export function setInteriorRoomTimecycle(interiorId: number, roomIndex: number, timecycleHash: number): void {
    SetInteriorRoomTimecycle(interiorId, roomIndex, timecycleHash);
}

/**
 * Transiently updates the entity with the specified mapdata index and entity index.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * Hash: 0xFC52CB91
 */
export function updateMapdataEntity(mapdata: number, entity: number, entityDef: number | IObject): void {
    const _entityDef = entityDef instanceof IObject ? entityDef.handle() : entityDef;
    UpdateMapdataEntity(mapdata, entity, _entityDef);
}

/**
 * No comment provided
 * 
 * Hash: 0x32CA01C3
 */
export function addTextEntry(entryKey: string, entryText: string): void {
    AddTextEntry(entryKey, entryText);
}

/**
 * No comment provided
 * 
 * Hash: 0x289DA860
 */
export function addTextEntryByHash(entryKey: number | string, entryText: string): void {
    if (typeof entryKey === 'string') entryKey = GetHashKey(entryKey)
    AddTextEntryByHash(entryKey, entryText);
}

