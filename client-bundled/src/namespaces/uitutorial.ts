import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x2CC24A2A7A1489C4 | Since: 1207 | API-Set: unknown
 */
export function getIsThreatIndicatorCapableRadarShown(): boolean {
    return UitutorialGetIsThreatIndicatorCapableRadarShown();
}

/**
 * No comment provided
 * 
 * Hash: 0xFC2E0A5E9ED4E1B4 | Since: 1207 | API-Set: unknown
 */
export function getIsThreatIndicatorOn(): boolean {
    return UitutorialGetIsThreatIndicatorOn();
}

/**
 * enum eRpgIcons
 * {
 * ICON_STAMINA,
 * ICON_STAMINA_CORE,
 * ICON_DEADEYE,
 * ICON_DEADEYE_CORE,
 * ICON_HEALTH,
 * ICON_HEALTH_CORE,
 * ICON_HORSE_HEALTH,
 * ICON_HORSE_HEALTH_CORE,
 * ICON_HORSE_STAMINA,
 * ICON_HORSE_STAMINA_CORE,
 * ICON_HORSE_COURAGE,
 * ICON_HORSE_COURAGE_CORE
 * };
 * 
 * enum eRpgIconVisibility
 * {
 * ICON_VISIBILITY_WAIT_TO_HIDE,
 * ICON_VISIBILITY_ALWAYS_SHOW,
 * ICON_VISIBILITY_ALWAYS_HIDE,
 * ICON_VISIBILITY_ALWAYS_BLINK
 * };
 * 
 * Hash: 0xC116E6DF68DCE667 | Since: 1207 | API-Set: unknown
 */
export function setRpgIconVisibility(rpgIcon: number, visibility: number): void {
    UitutorialSetRpgIconVisibility(rpgIcon, visibility);
}

