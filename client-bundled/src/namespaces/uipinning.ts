import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x3138582E0A13BFAB | Since: 1207 | API-Set: unknown
 */
export function getTooltipText(hash: number | string): string {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return UipinningGetTooltipText(hash);
}

