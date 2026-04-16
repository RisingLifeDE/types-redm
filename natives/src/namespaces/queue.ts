import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x402B5D7D269FF796 | Since: 1207
 */
export function eventIsEmpty(hash: number | string): boolean {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return EventQueueIsEmpty(hash);
}

/**
 * No comment provided
 * 
 * Hash: 0xD87DF294B049211D | Since: 1207
 */
export function eventPop(hash: number | string): void {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    EventQueuePop(hash);
}

