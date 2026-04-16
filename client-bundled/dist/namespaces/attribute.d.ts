import { IPed } from '@risinglife/redm-shared';
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x75415EE0CB583760 | Since: 1207 | API-Set: unknown
 */
export declare function addPoints(ped: number | IPed, attributeIndex: number): void;
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0xF8DAC3D85636C241 | Since: 1207 | API-Set: unknown
 */
export declare function disableOverpower(ped: number | IPed, attributeIndex: number): void;
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Old name: _SET_ATTRIBUTE_OVERPOWER_VALUE
 *
 * Hash: 0xF6A7C08DF2E28B28 | Since: 1207 | API-Set: unknown
 */
export declare function enableOverpower(ped: number | IPed, attributeIndex: number, value: number, makeSound: boolean): void;
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x147149F2E909323C | Since: 1207 | API-Set: unknown
 */
export declare function getBaseRank(ped: number | IPed, attributeIndex: number): number;
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x0EFA71F4B4330E04 | Since: 1207 | API-Set: unknown
 */
export declare function getBonusRank(ped: number | IPed, coreIndex: number): number;
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x219DA04BAA9CB065 | Since: 1207 | API-Set: unknown
 */
export declare function getPoints(ped: number | IPed, attributeIndex: number): number;
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0xA4C8E23E29040DE0 | Since: 1207 | API-Set: unknown
 */
export declare function getRank(ped: number | IPed, attributeIndex: number): number;
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x94A7F191DB49A44D | Since: 1207 | API-Set: unknown
 */
export declare function getDefaultPointsNeededForRank(modelHash: number | string, attributeIndex: number, rank: number): number;
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x958DD43D41F89A47 | Since: 1207 | API-Set: unknown
 */
export declare function getDefaultRank(ped: number | IPed, attributeIndex: number): number;
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x7C059C55AD940CB4 | Since: 1207 | API-Set: unknown
 */
export declare function getDefaultMaxRank(modelHash: number | string, attributeIndex: number): number;
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x223BF310F854871C | Since: 1207 | API-Set: unknown
 */
export declare function getMaxPoints(ped: number | IPed, attributeIndex: number): number;
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x704674A0535A471D | Since: 1207 | API-Set: unknown
 */
export declare function getMaxRank(ped: number | IPed, attributeIndex: number): number;
/**
 * attributeIndex:
 * enum ePedAttribute
 * {
 * PA_HEALTH,
 * PA_STAMINA,
 * PA_SPECIALABILITY,
 * PA_COURAGE,
 * PA_AGILITY,
 * PA_SPEED,
 * PA_ACCELERATION,
 * PA_BONDING,
 * SA_HUNGER,
 * SA_FATIGUED,
 * SA_INEBRIATED,
 * SA_POISONED,
 * SA_BODYHEAT,
 * SA_BODYWEIGHT,
 * SA_OVERFED,
 * SA_SICKNESS,
 * SA_DIRTINESS,
 * SA_DIRTINESSHAT,
 * MTR_STRENGTH,
 * MTR_GRIT,
 * MTR_INSTINCT,
 * PA_UNRULINESS,
 * SA_DIRTINESSSKIN
 * };
 *
 * Hash: 0x5DA12E025D47D4E5 | Since: 1207 | API-Set: unknown
 */
export declare function setBaseRank(ped: number | IPed, attributeIndex: number, newValue: number): void;
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x920F9488BD115EFB | Since: 1207 | API-Set: unknown
 */
export declare function setBonusRank(ped: number | IPed, attributeIndex: number, newValue: number): void;
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x09A59688C26D88DF | Since: 1207 | API-Set: unknown
 */
export declare function setPoints(ped: number | IPed, attributeIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD962F8579D702DB5 | Since: 1207 | API-Set: unknown
 */
export declare function stopItemPreview(): void;
/**
 * coreIndex: see _SET_ATTRIBUTE_CORE_VALUE
 *
 * Previously incorrectly named ENABLE_ATTRIBUTE_OVERPOWER
 *
 * Hash: 0x4AF5A4C7B9157D14 | Since: 1207 | API-Set: unknown
 */
export declare function enableCoreOverpower(ped: number | IPed, coreIndex: number, value: number, makeSound: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xB429F58803D285B1 | Since: 1207 | API-Set: unknown
 */
export declare function getCoreOverpowerSecondsLeft(ped: number | IPed, coreIndex: number): number;
/**
 * Gets the ped's core value on a scale of 0 to 100.
 * coreIndex: see _SET_ATTRIBUTE_CORE_VALUE
 *
 * Hash: 0x36731AC041289BB1 | Since: 1207 | API-Set: unknown
 */
export declare function getCoreValue(ped: number | IPed, coreIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x4C9F782180712742 | Since: 1207 | API-Set: unknown
 */
export declare function getOverpowerSecondsLeft(ped: number | IPed, attributeIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x200373A8DF081F22 | Since: 1207 | API-Set: unknown
 */
export declare function isCoreOverpowered(ped: number | IPed, coreIndex: number): boolean;
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x103C2F885ABEB00B | Since: 1207 | API-Set: unknown
 */
export declare function isOverpowered(ped: number | IPed, attributeIndex: number): boolean;
/**
 * coreIndex:
 * enum eAttributeCore
 * {
 * ATTRIBUTE_CORE_HEALTH,
 * ATTRIBUTE_CORE_STAMINA,
 * ATTRIBUTE_CORE_DEADEYE
 * };
 *
 * Hash: 0xC6258F41D86676E0 | Since: 1207 | API-Set: unknown
 */
export declare function setCoreValue(ped: number | IPed, coreIndex: number, value: number): void;
/**
 * Displays status effects on core icons (includes warnings).
 *
 * enum eUiRpgStatusEffect
 * {
 * STATUS_NONE,
 * STATUS_COLD,
 * STATUS_HOT,
 * STATUS_OVERFED,
 * STATUS_DIRTY,
 * STATUS_SNAKE_VENOM,
 * STATUS_ARROW_WOUNDED,
 * STATUS_ARROW_DRAINED,
 * STATUS_ARROW_DISORIENTED,
 * STATUS_ARROW_TRACKED,
 * STATUS_ARROW_CONFUSION,
 * STATUS_UNDERWEIGHT,
 * STATUS_OVERWEIGHT,
 * STATUS_SICK_1,
 * STATUS_SICK_2,
 * STATUS_PREDATOR_INVULNERABLE
 * };
 *
 * Hash: 0xA4D3A1C008F250DF | Since: 1207 | API-Set: unknown
 */
export declare function setStatusEffectCoreIcon(statusEffectType: number): void;
/**
 * Starts core periodic icon.
 * statusEffectType: see 0xA4D3A1C008F250DF
 *
 * Hash: 0xFB6E111908502871 | Since: 1207 | API-Set: unknown
 */
export declare function setStatusEffectPeriodicIcon(statusEffectType: number): void;
/**
 * Params: p1 is related to satchel_category
 *
 * Hash: 0x7E2C766ADB2C5F1A | Since: 1207 | API-Set: unknown
 */
export declare function startItemPreview(): void;
/**
 * Stops periodic icon.
 * statusEffectType: see 0xA4D3A1C008F250DF
 *
 * Hash: 0x3FC4C027FD0936F4 | Since: 1207 | API-Set: unknown
 */
export declare function stopStatusEffectPeriodicIcon(statusEffectType: number): void;
