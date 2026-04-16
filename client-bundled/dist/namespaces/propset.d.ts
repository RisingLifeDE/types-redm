import { Vector3, IEntity, IVehicle } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x9609DBDDE18FAD8C | Since: 1207 | API-Set: unknown
 */
export declare function createInstanceAttachedToEntity(hash: number | string, pos: Vector3, entity: number | IEntity): any;
/**
 * No comment provided
 *
 * Hash: 0x7DDDCF815E650FF5 | Since: 1207 | API-Set: unknown
 */
export declare function doesExist(propSet: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF42DB680A8B2A4D9 | Since: 1207 | API-Set: unknown
 */
export declare function isFullyLoaded(propSet: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x58E0B01D45CA7357 | Since: 1207 | API-Set: unknown
 */
export declare function _0x58E0B01D45CA7357(): void;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_propsets.lua
 *
 * Hash: 0x75F90E4051CC084C | Since: 1207 | API-Set: unknown
 */
export declare function addAdditionalForVehicle(vehicle: number | IVehicle, propset: number | string): void;
/**
 * To remove propsets either parse a zero as hash or call 0xE31C0CB1C3186D40
 * 0xA6A9712955F53D9C returns lightPropset Hashes
 * https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_lantern_propsets.lua
 *
 * Hash: 0xC0F0417A90402742 | Since: 1207 | API-Set: unknown
 */
export declare function addLightToVehicle(vehicle: number | IVehicle, lightPropset: number | string): void;
/**
 * List of vehicle propsets (wagons & trains): https://pastebin.com/1CsnvGLu / https://pastebin.com/v7TtqTgE
 *
 * Hash: 0xD80FAF919A2E56EA | Since: 1207 | API-Set: unknown
 */
export declare function addForVehicle(vehicle: number | IVehicle, propset: number | string): void;
/**
 * propsetType: https://github.com/femga/rdr3_discoveries/blob/master/objects/propsets_list.lua
 * placementType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/PlacementType
 *
 * Hash: 0xE65C5CBA95F0E510 | Since: 1207 | API-Set: unknown
 */
export declare function create(propsetType: number | string, pos: Vector3, placementType: number, heading: number, zProbe: number, useVegMod: boolean): any;
/**
 * Same as _CREATE_PROP_SET
 *
 * Hash: 0x899C97A1CCE7D483 | Since: 1207 | API-Set: unknown
 */
export declare function create2(propsetType: number | string, pos: Vector3, placementType: number, heading: number, zProbe: number, useVegMod: boolean): any;
/**
 * Same as CREATE_PROP_SET_INSTANCE_ATTACHED_TO_ENTITY
 *
 * Hash: 0xACA7FB30269096D4 | Since: 1207 | API-Set: unknown
 */
export declare function createInstanceAttachedToEntity2(hash: number | string, pos: Vector3, entity: number | IEntity): any;
/**
 * No comment provided
 *
 * Hash: 0x58AC173A55D9D7B4 | Since: 1207 | API-Set: unknown
 */
export declare function deletePropSet(propSet: any): void;
/**
 * No comment provided
 *
 * Hash: 0x72068021F498E6E3 | Since: 1207 | API-Set: unknown
 */
export declare function doesOfTypeExistNearCoords(propsetHash: number | string, pos: Vector3): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC9B4B3A36F81FD75 | Since: 1207 | API-Set: unknown
 */
export declare function doesVehicleHaveAnyLight(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x53784CEA0159439B | Since: 1207 | API-Set: unknown
 */
export declare function doesVehicleHaveAny(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x738271B660FE0695 | Since: 1207 | API-Set: unknown
 */
export declare function getEntitiesFrom(propSet: any, itemSet: any, model: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xC061E50F8D299F95 | Since: 1207 | API-Set: unknown
 */
export declare function getAtCoords(propsetHash: number | string, pos: Vector3): any;
/**
 * No comment provided
 *
 * Hash: 0xA6A9712955F53D9C | Since: 1207 | API-Set: unknown
 */
export declare function getModel(propSet: any): number;
/**
 * Example before/after deleting a train carriage's propset: https://imgur.com/a/qRNrIrK
 *
 * Hash: 0xCFC0BD09BB1B73FF | Since: 1207 | API-Set: unknown
 */
export declare function getTrainCarriage(trainCarriage: number | IEntity): any;
/**
 * Returns PropSet handle to be used with _GET_PROP_SET_MODEL
 *
 * Hash: 0xA079300AF757FB1A | Since: 1207 | API-Set: unknown
 */
export declare function getVehicleLight(vehicle: number | IVehicle): any;
/**
 * No comment provided
 *
 * Hash: 0xCE2ACD6F602803E5 | Since: 1207 | API-Set: unknown
 */
export declare function getVehicle(vehicle: number | IVehicle): any;
/**
 * No comment provided
 *
 * Hash: 0x36F69E7A22655653 | Since: 1207 | API-Set: unknown
 */
export declare function getVehicleHash(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x48A88FC684C55FDC | Since: 1207 | API-Set: unknown
 */
export declare function hasLoaded(hash: number | string): boolean;
/**
 * Same as _HAS_PROP_SET_LOADED
 *
 * Hash: 0xD090ABEF4D6A7D96 | Since: 1207 | API-Set: unknown
 */
export declare function hasLoaded2(hash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8F3333F0A6900B3C | Since: 1207 | API-Set: unknown
 */
export declare function hasVehicleTrailerLoaded(vehicle: number | IVehicle, wagonIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0CE8AAFE9E433A23 | Since: 1207 | API-Set: unknown
 */
export declare function isVisible(propSet: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0790473EEE1977D3 | Since: 1207 | API-Set: unknown
 */
export declare function isVehicleLightLoaded(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x155B2FBE72D7D1D0 | Since: 1207 | API-Set: unknown
 */
export declare function isVehicleLoaded(vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7264F9CA87A9830B | Since: 1207 | API-Set: unknown
 */
export declare function isVehicleLoadedAdditional(vehicle: number | IVehicle): boolean;
/**
 * Relocates an existing prop set to specified coordinates and adjusts its heading (rotation) without affecting the prop set's internal layout or structure. The `propSet` parameter identifies the prop set to move. The parameters (`coordsX`, `coordsY`, `coordsZ`) set the new central position of the prop set, while `heading` specifies its rotation around the Z-axis (in degrees). When `onGroundProperly` is true, the prop set automatically aligns accurately with the terrain
 *
 * Hash: 0xC4B67EF3FD65622D | Since: 1207 | API-Set: unknown
 */
export declare function moveCoordsAndHeading(propset: number, pos: Vector3, onGroundProperly: boolean, heading: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB1964A83B345B4AB | Since: 1207 | API-Set: unknown
 */
export declare function release(hash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE31C0CB1C3186D40 | Since: 1207 | API-Set: unknown
 */
export declare function removeVehicleLights(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x3BCF32FF37EA9F1D | Since: 1207 | API-Set: unknown
 */
export declare function removeVehicles(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xF3DE57A46D5585E9 | Since: 1207 | API-Set: unknown
 */
export declare function request(hash: number | string): boolean;
/**
 * Same as _REQUEST_PROP_SET
 *
 * Hash: 0xE72F591958F3ACAB | Since: 1207 | API-Set: unknown
 */
export declare function request2(hash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x909E3C7FAE539FB1 | Since: 1207 | API-Set: unknown
 */
export declare function setAsNoLongerNeeded(propSet: any): void;
/**
 * No comment provided
 *
 * Hash: 0xC1AB7EEFD3E6EE49 | Since: 1207 | API-Set: unknown
 */
export declare function setFlag(propSet: any, flag: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9D096A5BD02F953E | Since: 1207 | API-Set: unknown
 */
export declare function setVisible(propSet: any, toggle: boolean): void;
