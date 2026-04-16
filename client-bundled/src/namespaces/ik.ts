import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x0B9F7A01EC50448D | Since: 1207 | API-Set: unknown
 */
export function _0x0B9F7A01EC50448D(ped: number | IPed): any {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x0B9F7A01EC50448D', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x6098139150DCC745 | Since: 1207 | API-Set: unknown
 */
export function _0x6098139150DCC745(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x6098139150DCC745', _ped, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x873C792E07A32C8B | Since: 1207 | API-Set: unknown
 */
export function _0x873C792E07A32C8B(ped1: number | IPed, ped2: number | IPed): void {
    const _ped1 = ped1 instanceof IPed ? ped1.handle() : ped1;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    Citizen.invokeNative('0x873C792E07A32C8B', _ped1, _ped2);
}

/**
 * No comment provided
 * 
 * Hash: 0x66F9EB44342BB4C5 | Since: 1207 | API-Set: unknown
 */
export function inverseKinematicsRequestLookAt(ped: number | IPed): any {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return InverseKinematicsRequestLookAt(_ped);
}

/**
 * Seems to disable IK on ped
 * 
 * Hash: 0x0EABF182FBB63D72 | Since: 1207 | API-Set: unknown
 */
export function inverseKinematicsSetDisabledForPed(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    InverseKinematicsSetDisabledForPed(_ped, 0, false);
}

