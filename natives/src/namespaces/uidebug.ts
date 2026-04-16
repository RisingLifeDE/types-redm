import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * Note: you must use VAR_STRING
 * 
 * Hash: 0x16794E044C9EFB58 | Since: 1355
 */
export function bgDisplayText(x: number, y: number): string {
    return BgDisplayText(x, y);
}

/**
 * https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/colours
 * 
 * Hash: 0x16FA5CE47F184F1E | Since: 1355
 */
export function bgSetTextColor(red: number, green: number, blue: number, alpha: number): void {
    BgSetTextColor(red, green, blue, alpha);
}

/**
 * No comment provided
 * 
 * Hash: 0xA1253A3C870B6843 | Since: 1355
 */
export function bgSetTextScale(scaleX: number, scaleY: number): void {
    BgSetTextScale(scaleX, scaleY);
}

