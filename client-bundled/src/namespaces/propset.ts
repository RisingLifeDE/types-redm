import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x9609DBDDE18FAD8C | Since: 1207 | API-Set: unknown
 */
export function createInstanceAttachedToEntity(hash: number | string, pos: Vector3, entity: number | IEntity): any {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return CreatePropSetInstanceAttachedToEntity(hash, pos.x, pos.y, pos.z, _entity, 0, false, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x7DDDCF815E650FF5 | Since: 1207 | API-Set: unknown
 */
export function doesExist(propSet: any): boolean {
    return DoesPropSetExist(propSet);
}

/**
 * No comment provided
 * 
 * Hash: 0xF42DB680A8B2A4D9 | Since: 1207 | API-Set: unknown
 */
export function isFullyLoaded(propSet: any): boolean {
    return IsPropSetFullyLoaded(propSet);
}

/**
 * No comment provided
 * 
 * Hash: 0x58E0B01D45CA7357 | Since: 1207 | API-Set: unknown
 */
export function _0x58E0B01D45CA7357(): void {
    Citizen.invokeNative('0x58E0B01D45CA7357', undefined);
}

/**
 * https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_propsets.lua
 * 
 * Hash: 0x75F90E4051CC084C | Since: 1207 | API-Set: unknown
 */
export function addAdditionalForVehicle(vehicle: number | IVehicle, propset: number | string): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    if (typeof propset === 'string') propset = GetHashKey(propset)
    AddAdditionalPropSetForVehicle(_vehicle, propset);
}

/**
 * To remove propsets either parse a zero as hash or call 0xE31C0CB1C3186D40
 * 0xA6A9712955F53D9C returns lightPropset Hashes
 * https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_lantern_propsets.lua
 * 
 * Hash: 0xC0F0417A90402742 | Since: 1207 | API-Set: unknown
 */
export function addLightToVehicle(vehicle: number | IVehicle, lightPropset: number | string): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    if (typeof lightPropset === 'string') lightPropset = GetHashKey(lightPropset)
    AddLightPropSetToVehicle(_vehicle, lightPropset);
}

/**
 * List of vehicle propsets (wagons & trains): https://pastebin.com/1CsnvGLu / https://pastebin.com/v7TtqTgE
 * 
 * Hash: 0xD80FAF919A2E56EA | Since: 1207 | API-Set: unknown
 */
export function addForVehicle(vehicle: number | IVehicle, propset: number | string): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    if (typeof propset === 'string') propset = GetHashKey(propset)
    AddPropSetForVehicle(_vehicle, propset);
}

/**
 * propsetType: https://github.com/femga/rdr3_discoveries/blob/master/objects/propsets_list.lua
 * placementType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/PlacementType
 * 
 * Hash: 0xE65C5CBA95F0E510 | Since: 1207 | API-Set: unknown
 */
export function create(propsetType: number | string, pos: Vector3, placementType: number, heading: number, zProbe: number, useVegMod: boolean): any {
    if (typeof propsetType === 'string') propsetType = GetHashKey(propsetType)
    return CreatePropSet(propsetType, pos.x, pos.y, pos.z, placementType, heading, zProbe, false, useVegMod);
}

/**
 * Same as _CREATE_PROP_SET
 * 
 * Hash: 0x899C97A1CCE7D483 | Since: 1207 | API-Set: unknown
 */
export function create2(propsetType: number | string, pos: Vector3, placementType: number, heading: number, zProbe: number, useVegMod: boolean): any {
    if (typeof propsetType === 'string') propsetType = GetHashKey(propsetType)
    return CreatePropSet2(propsetType, pos.x, pos.y, pos.z, placementType, heading, zProbe, false, useVegMod);
}

/**
 * Same as CREATE_PROP_SET_INSTANCE_ATTACHED_TO_ENTITY
 * 
 * Hash: 0xACA7FB30269096D4 | Since: 1207 | API-Set: unknown
 */
export function createInstanceAttachedToEntity2(hash: number | string, pos: Vector3, entity: number | IEntity): any {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return CreatePropSetInstanceAttachedToEntity2(hash, pos.x, pos.y, pos.z, _entity, 0, false, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x58AC173A55D9D7B4 | Since: 1207 | API-Set: unknown
 */
export function deletePropSet(propSet: any): void {
    DeletePropSet(propSet, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x72068021F498E6E3 | Since: 1207 | API-Set: unknown
 */
export function doesOfTypeExistNearCoords(propsetHash: number | string, pos: Vector3): boolean {
    if (typeof propsetHash === 'string') propsetHash = GetHashKey(propsetHash)
    return DoesPropSetOfTypeExistNearCoords(propsetHash, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xC9B4B3A36F81FD75 | Since: 1207 | API-Set: unknown
 */
export function doesVehicleHaveAnyLight(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return DoesVehicleHaveAnyLightPropSet(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x53784CEA0159439B | Since: 1207 | API-Set: unknown
 */
export function doesVehicleHaveAny(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return DoesVehicleHaveAnyPropSet(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x738271B660FE0695 | Since: 1207 | API-Set: unknown
 */
export function getEntitiesFrom(propSet: any, itemSet: any, model: number | string): number {
    if (typeof model === 'string') model = GetHashKey(model)
    return GetEntitiesFromPropSet(propSet, itemSet, model, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xC061E50F8D299F95 | Since: 1207 | API-Set: unknown
 */
export function getAtCoords(propsetHash: number | string, pos: Vector3): any {
    if (typeof propsetHash === 'string') propsetHash = GetHashKey(propsetHash)
    return GetPropSetAtCoords(propsetHash, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xA6A9712955F53D9C | Since: 1207 | API-Set: unknown
 */
export function getModel(propSet: any): number {
    return GetPropSetModel(propSet);
}

/**
 * Example before/after deleting a train carriage's propset: https://imgur.com/a/qRNrIrK
 * 
 * Hash: 0xCFC0BD09BB1B73FF | Since: 1207 | API-Set: unknown
 */
export function getTrainCarriage(trainCarriage: number | IEntity): any {
    const _trainCarriage = trainCarriage instanceof IEntity ? trainCarriage.handle() : trainCarriage;
    return GetTrainCarriagePropSet(_trainCarriage);
}

/**
 * Returns PropSet handle to be used with _GET_PROP_SET_MODEL
 * 
 * Hash: 0xA079300AF757FB1A | Since: 1207 | API-Set: unknown
 */
export function getVehicleLight(vehicle: number | IVehicle): any {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehicleLightPropSet(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xCE2ACD6F602803E5 | Since: 1207 | API-Set: unknown
 */
export function getVehicle(vehicle: number | IVehicle): any {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehiclePropSet(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x36F69E7A22655653 | Since: 1207 | API-Set: unknown
 */
export function getVehicleHash(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return GetVehiclePropSetHash(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x48A88FC684C55FDC | Since: 1207 | API-Set: unknown
 */
export function hasLoaded(hash: number | string): boolean {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return HasPropSetLoaded(hash);
}

/**
 * Same as _HAS_PROP_SET_LOADED
 * 
 * Hash: 0xD090ABEF4D6A7D96 | Since: 1207 | API-Set: unknown
 */
export function hasLoaded2(hash: number | string): boolean {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return HasPropSetLoaded2(hash);
}

/**
 * No comment provided
 * 
 * Hash: 0x8F3333F0A6900B3C | Since: 1207 | API-Set: unknown
 */
export function hasVehicleTrailerLoaded(vehicle: number | IVehicle, wagonIndex: number): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return HasVehicleTrailerPropSetLoaded(_vehicle, wagonIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x0CE8AAFE9E433A23 | Since: 1207 | API-Set: unknown
 */
export function isVisible(propSet: any): boolean {
    return IsPropSetVisible(propSet);
}

/**
 * No comment provided
 * 
 * Hash: 0x0790473EEE1977D3 | Since: 1207 | API-Set: unknown
 */
export function isVehicleLightLoaded(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehicleLightPropSetLoaded(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x155B2FBE72D7D1D0 | Since: 1207 | API-Set: unknown
 */
export function isVehicleLoaded(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehiclePropSetLoaded(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x7264F9CA87A9830B | Since: 1207 | API-Set: unknown
 */
export function isVehicleLoadedAdditional(vehicle: number | IVehicle): boolean {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return IsVehiclePropSetLoadedAdditional(_vehicle);
}

/**
 * Relocates an existing prop set to specified coordinates and adjusts its heading (rotation) without affecting the prop set's internal layout or structure. The `propSet` parameter identifies the prop set to move. The parameters (`coordsX`, `coordsY`, `coordsZ`) set the new central position of the prop set, while `heading` specifies its rotation around the Z-axis (in degrees). When `onGroundProperly` is true, the prop set automatically aligns accurately with the terrain
 * 
 * Hash: 0xC4B67EF3FD65622D | Since: 1207 | API-Set: unknown
 */
export function moveCoordsAndHeading(propset: number, pos: Vector3, onGroundProperly: boolean, heading: number): void {
    Citizen.invokeNative('0xC4B67EF3FD65622D', propset, pos.x, pos.y, pos.z, onGroundProperly, heading);
}

/**
 * No comment provided
 * 
 * Hash: 0xB1964A83B345B4AB | Since: 1207 | API-Set: unknown
 */
export function release(hash: number | string): boolean {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return ReleasePropSet(hash);
}

/**
 * No comment provided
 * 
 * Hash: 0xE31C0CB1C3186D40 | Since: 1207 | API-Set: unknown
 */
export function removeVehicleLights(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    RemoveVehicleLightPropSets(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x3BCF32FF37EA9F1D | Since: 1207 | API-Set: unknown
 */
export function removeVehicles(vehicle: number | IVehicle): void {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    RemoveVehiclePropSets(_vehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF3DE57A46D5585E9 | Since: 1207 | API-Set: unknown
 */
export function request(hash: number | string): boolean {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return RequestPropSet(hash);
}

/**
 * Same as _REQUEST_PROP_SET
 * 
 * Hash: 0xE72F591958F3ACAB | Since: 1207 | API-Set: unknown
 */
export function request2(hash: number | string): boolean {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return RequestPropSet2(hash);
}

/**
 * No comment provided
 * 
 * Hash: 0x909E3C7FAE539FB1 | Since: 1207 | API-Set: unknown
 */
export function setAsNoLongerNeeded(propSet: any): void {
    SetPropSetAsNoLongerNeeded(propSet);
}

/**
 * No comment provided
 * 
 * Hash: 0xC1AB7EEFD3E6EE49 | Since: 1207 | API-Set: unknown
 */
export function setFlag(propSet: any, flag: number): void {
    SetPropSetFlag(propSet, flag);
}

/**
 * No comment provided
 * 
 * Hash: 0x9D096A5BD02F953E | Since: 1207 | API-Set: unknown
 */
export function setVisible(propSet: any, toggle: boolean): void {
    SetPropSetVisible(propSet, toggle);
}

