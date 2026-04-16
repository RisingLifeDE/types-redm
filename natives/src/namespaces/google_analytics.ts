import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x87BBCC4360A9BDE3 | Since: 1355
 */
export function googleAnalyticsEndEvent(): boolean {
    return GoogleAnalyticsEndEvent();
}

/**
 * No comment provided
 * 
 * Hash: 0xC6DE040378364798 | Since: 1207
 */
export function googleAnalyticsPopPage(pageName: string): void {
    GoogleAnalyticsPopPage(pageName);
}

/**
 * No comment provided
 * 
 * Hash: 0xD43A616AE3AC4EF6 | Since: 1207
 */
export function googleAnalyticsPushPage(pageName: string): void {
    GoogleAnalyticsPushPage(pageName);
}

/**
 * No comment provided
 * 
 * Hash: 0x1C54F031D7C0F7AC | Since: 1355
 */
export function googleAnalyticsStartEvent(eventCategory: string, eventAction: string, eventLabel: string, eventValue: number): boolean {
    return GoogleAnalyticsStartEvent(eventCategory, eventAction, eventLabel, eventValue);
}

