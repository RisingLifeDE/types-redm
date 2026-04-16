import { IObject } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x322B1192
 */
export function getInteriorEntitiesExtents(interiorId) {
    return GetInteriorEntitiesExtents(interiorId);
}
/**
 * No comment provided
 *
 * Hash: 0xF772BB2C
 */
export function getInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex) {
    return GetInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xD05BB8B1
 */
export function getInteriorPortalCount(interiorId) {
    return GetInteriorPortalCount(interiorId);
}
/**
 * No comment provided
 *
 * Hash: 0x9A0E1700
 */
export function getInteriorPortalEntityArchetype(interiorId, portalIndex, entityIndex) {
    return GetInteriorPortalEntityArchetype(interiorId, portalIndex, entityIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xC68021B
 */
export function getInteriorPortalEntityCount(interiorId, portalIndex) {
    return GetInteriorPortalEntityCount(interiorId, portalIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x9DA2E811
 */
export function getInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex) {
    return GetInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x9B7AB83C
 */
export function getInteriorPortalEntityPosition(interiorId, portalIndex, entityIndex) {
    return GetInteriorPortalEntityPosition(interiorId, portalIndex, entityIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x9F9CEB63
 */
export function getInteriorPortalEntityRotation(interiorId, portalIndex, entityIndex) {
    return GetInteriorPortalEntityRotation(interiorId, portalIndex, entityIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xC74DA47C
 */
export function getInteriorPortalFlag(interiorId, portalIndex) {
    return GetInteriorPortalFlag(interiorId, portalIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xAA9C141D
 */
export function getInteriorPortalRoomFrom(interiorId, portalIndex) {
    return GetInteriorPortalRoomFrom(interiorId, portalIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x3F47F0E8
 */
export function getInteriorPortalRoomTo(interiorId, portalIndex) {
    return GetInteriorPortalRoomTo(interiorId, portalIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x77A435B0
 */
export function getInteriorPosition(interiorId) {
    return GetInteriorPosition(interiorId);
}
/**
 * No comment provided
 *
 * Hash: 0xA2737C2C
 */
export function getInteriorRoomCount(interiorId) {
    return GetInteriorRoomCount(interiorId);
}
/**
 * No comment provided
 *
 * Hash: 0xF9E795DD
 */
export function getInteriorRoomExtents(interiorId, roomIndex) {
    return GetInteriorRoomExtents(interiorId, roomIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x6B7AF743
 */
export function getInteriorRoomFlag(interiorId, roomIndex) {
    return GetInteriorRoomFlag(interiorId, roomIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xE0EE05F8
 */
export function getInteriorRoomIndexByHash(interiorId, roomHash) {
    return GetInteriorRoomIndexByHash(interiorId, roomHash);
}
/**
 * No comment provided
 *
 * Hash: 0x11755DF2
 */
export function getInteriorRoomName(interiorId, roomIndex) {
    return GetInteriorRoomName(interiorId, roomIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x82BA3F88
 */
export function getInteriorRoomTimecycle(interiorId, roomIndex) {
    return GetInteriorRoomTimecycle(interiorId, roomIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x5A039998
 */
export function getInteriorRotation(interiorId) {
    return GetInteriorRotation(interiorId);
}
/**
 * No comment provided
 *
 * Hash: 0x87F43553
 */
export function setInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex, pos) {
    SetInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x8349CD76
 */
export function setInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex, flag) {
    SetInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex, flag);
}
/**
 * No comment provided
 *
 * Hash: 0x88B2355E
 */
export function setInteriorPortalFlag(interiorId, portalIndex, flag) {
    SetInteriorPortalFlag(interiorId, portalIndex, flag);
}
/**
 * No comment provided
 *
 * Hash: 0x298FC783
 */
export function setInteriorPortalRoomFrom(interiorId, portalIndex, roomFrom) {
    SetInteriorPortalRoomFrom(interiorId, portalIndex, roomFrom);
}
/**
 * No comment provided
 *
 * Hash: 0x58982680
 */
export function setInteriorPortalRoomTo(interiorId, portalIndex, roomTo) {
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
export function setInteriorProbeLength(probeLength) {
    SetInteriorProbeLength(probeLength);
}
/**
 * No comment provided
 *
 * Hash: 0x4FDCF51E
 */
export function setInteriorRoomExtents(interiorId, roomIndex, bbMinX, bbMinY, bbMinZ, bbMaxX, bbMaxY, bbMaxZ) {
    SetInteriorRoomExtents(interiorId, roomIndex, bbMinX, bbMinY, bbMinZ, bbMaxX, bbMaxY, bbMaxZ);
}
/**
 * No comment provided
 *
 * Hash: 0x5518D60B
 */
export function setInteriorRoomFlag(interiorId, roomIndex, flag) {
    SetInteriorRoomFlag(interiorId, roomIndex, flag);
}
/**
 * No comment provided
 *
 * Hash: 0x31C9A848
 */
export function setInteriorRoomTimecycle(interiorId, roomIndex, timecycleHash) {
    SetInteriorRoomTimecycle(interiorId, roomIndex, timecycleHash);
}
/**
 * Transiently updates the entity with the specified mapdata index and entity index.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xFC52CB91
 */
export function updateMapdataEntity(mapdata, entity, entityDef) {
    const _entityDef = entityDef instanceof IObject ? entityDef.handle() : entityDef;
    UpdateMapdataEntity(mapdata, entity, _entityDef);
}
/**
 * No comment provided
 *
 * Hash: 0x32CA01C3
 */
export function addTextEntry(entryKey, entryText) {
    AddTextEntry(entryKey, entryText);
}
/**
 * No comment provided
 *
 * Hash: 0x289DA860
 */
export function addTextEntryByHash(entryKey, entryText) {
    if (typeof entryKey === 'string')
        entryKey = GetHashKey(entryKey);
    AddTextEntryByHash(entryKey, entryText);
}
