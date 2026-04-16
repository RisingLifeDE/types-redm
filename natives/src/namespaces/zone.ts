import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * Returns name hash, see common:/data/levels/rdr3/mapzones.meta
 * 
 * type (-1 matches any type):
 * class CMapZone
 * {
 * public:
 * enum class Type
 * {
 * STATE,
 * TOWN,
 * LAKE,
 * RIVER,
 * OIL_SPILL,
 * SWAMP,
 * OCEAN,
 * CREEK,
 * POND,
 * GLACIER,
 * DISTRICT,
 * TEXT_PRINTED,
 * TEXT_WRITTEN
 * };
 * };
 * 
 * https://github.com/femga/rdr3_discoveries/tree/master/zones & https://alloc8or.re/rdr3/doc/enums/CMapZone__Type.txt
 * 
 * Hash: 0x43AD8FC02B429D33 | Since: 1207
 */
export function getMapAtCoords(pos: Vector3, _type: number): number {
    return GetMapZoneAtCoords(pos.x, pos.y, pos.z, _type);
}

/**
 * Returns the zone's name hash if its type matches one of the following:
 * - LAKE
 * - RIVER
 * - OIL_SPILL
 * - SWAMP
 * - OCEAN
 * - CREEK
 * - POND
 * - GLACIER
 * 
 * Hash: 0x5BA7A68A346A5A91 | Since: 1207
 */
export function getWaterMapAtCoords(pos: Vector3): number {
    return GetWaterMapZoneAtCoords(pos.x, pos.y, pos.z);
}

