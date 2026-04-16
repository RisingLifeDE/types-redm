import { IPed } from '@risinglife/redm-shared';
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x75415EE0CB583760 | Since: 1207
 */
export function addPoints(ped, attributeIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    AddAttributePoints(_ped, attributeIndex, 0);
}
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0xF8DAC3D85636C241 | Since: 1207
 */
export function disableOverpower(ped, attributeIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    DisableAttributeOverpower(_ped, attributeIndex);
}
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Old name: _SET_ATTRIBUTE_OVERPOWER_VALUE
 *
 * Hash: 0xF6A7C08DF2E28B28 | Since: 1207
 */
export function enableOverpower(ped, attributeIndex, value, makeSound) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    EnableAttributeOverpower(_ped, attributeIndex, value, makeSound);
}
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x147149F2E909323C | Since: 1207
 */
export function getBaseRank(ped, attributeIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetAttributeBaseRank(_ped, attributeIndex);
}
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x0EFA71F4B4330E04 | Since: 1207
 */
export function getBonusRank(ped, coreIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetAttributeBonusRank(_ped, coreIndex);
}
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x219DA04BAA9CB065 | Since: 1207
 */
export function getPoints(ped, attributeIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetAttributePoints(_ped, attributeIndex);
}
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0xA4C8E23E29040DE0 | Since: 1207
 */
export function getRank(ped, attributeIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetAttributeRank(_ped, attributeIndex);
}
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x94A7F191DB49A44D | Since: 1207
 */
export function getDefaultPointsNeededForRank(modelHash, attributeIndex, rank) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetDefaultAttributePointsNeededForRank(modelHash, attributeIndex, rank);
}
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x958DD43D41F89A47 | Since: 1207
 */
export function getDefaultRank(ped, attributeIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetDefaultAttributeRank(_ped, attributeIndex);
}
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x7C059C55AD940CB4 | Since: 1207
 */
export function getDefaultMaxRank(modelHash, attributeIndex) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetDefaultMaxAttributeRank(modelHash, attributeIndex);
}
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x223BF310F854871C | Since: 1207
 */
export function getMaxPoints(ped, attributeIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetMaxAttributePoints(_ped, attributeIndex);
}
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x704674A0535A471D | Since: 1207
 */
export function getMaxRank(ped, attributeIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetMaxAttributeRank(_ped, attributeIndex);
}
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
 * Hash: 0x5DA12E025D47D4E5 | Since: 1207
 */
export function setBaseRank(ped, attributeIndex, newValue) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetAttributeBaseRank(_ped, attributeIndex, newValue);
}
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x920F9488BD115EFB | Since: 1207
 */
export function setBonusRank(ped, attributeIndex, newValue) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetAttributeBonusRank(_ped, attributeIndex, newValue);
}
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x09A59688C26D88DF | Since: 1207
 */
export function setPoints(ped, attributeIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetAttributePoints(_ped, attributeIndex, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xD962F8579D702DB5 | Since: 1207
 */
export function stopItemPreview() {
    StopItemPreview();
}
/**
 * coreIndex: see _SET_ATTRIBUTE_CORE_VALUE
 *
 * Previously incorrectly named ENABLE_ATTRIBUTE_OVERPOWER
 *
 * Hash: 0x4AF5A4C7B9157D14 | Since: 1207
 */
export function enableCoreOverpower(ped, coreIndex, value, makeSound) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    EnableAttributeCoreOverpower(_ped, coreIndex, value, makeSound);
}
/**
 * No comment provided
 *
 * Hash: 0xB429F58803D285B1 | Since: 1207
 */
export function getCoreOverpowerSecondsLeft(ped, coreIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetAttributeCoreOverpowerSecondsLeft(_ped, coreIndex);
}
/**
 * Gets the ped's core value on a scale of 0 to 100.
 * coreIndex: see _SET_ATTRIBUTE_CORE_VALUE
 *
 * Hash: 0x36731AC041289BB1 | Since: 1207
 */
export function getCoreValue(ped, coreIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetAttributeCoreValue(_ped, coreIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x4C9F782180712742 | Since: 1207
 */
export function getOverpowerSecondsLeft(ped, attributeIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetAttributeOverpowerSecondsLeft(_ped, attributeIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x200373A8DF081F22 | Since: 1207
 */
export function isCoreOverpowered(ped, coreIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsAttributeCoreOverpowered(_ped, coreIndex);
}
/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 *
 * Hash: 0x103C2F885ABEB00B | Since: 1207
 */
export function isOverpowered(ped, attributeIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsAttributeOverpowered(_ped, attributeIndex);
}
/**
 * coreIndex:
 * enum eAttributeCore
 * {
 * ATTRIBUTE_CORE_HEALTH,
 * ATTRIBUTE_CORE_STAMINA,
 * ATTRIBUTE_CORE_DEADEYE
 * };
 *
 * Hash: 0xC6258F41D86676E0 | Since: 1207
 */
export function setCoreValue(ped, coreIndex, value) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetAttributeCoreValue(_ped, coreIndex, value);
}
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
 * Hash: 0xA4D3A1C008F250DF | Since: 1207
 */
export function setStatusEffectCoreIcon(statusEffectType) {
    SetStatusEffectCoreIcon(statusEffectType);
}
/**
 * Starts core periodic icon.
 * statusEffectType: see 0xA4D3A1C008F250DF
 *
 * Hash: 0xFB6E111908502871 | Since: 1207
 */
export function setStatusEffectPeriodicIcon(statusEffectType) {
    SetStatusEffectPeriodicIcon(statusEffectType);
}
/**
 * Params: p1 is related to satchel_category
 *
 * Hash: 0x7E2C766ADB2C5F1A | Since: 1207
 */
export function startItemPreview() {
    StartItemPreview(undefined, 0);
}
/**
 * Stops periodic icon.
 * statusEffectType: see 0xA4D3A1C008F250DF
 *
 * Hash: 0x3FC4C027FD0936F4 | Since: 1207
 */
export function stopStatusEffectPeriodicIcon(statusEffectType) {
    StopStatusEffectPeriodicIcon(statusEffectType);
}
