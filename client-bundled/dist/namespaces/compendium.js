import { IPed } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x4E4ACAE1C671A9DA | Since: 1311 | API-Set: unknown
 */
export function animalGetSampleInventoryItem(compendiumEntry) {
    return CompendiumAnimalGetSampleInventoryItem(compendiumEntry);
}
/**
 * No comment provided
 *
 * Hash: 0x6FC24625E4FCAC27 | Since: 1311 | API-Set: unknown
 */
export function animalHasSample(compendiumEntry) {
    return CompendiumAnimalHasSample(compendiumEntry);
}
/**
 * No comment provided
 *
 * Hash: 0xBCF569FC32FFF456 | Since: 1311 | API-Set: unknown
 */
export function animalHasStamp(compendiumEntry) {
    return CompendiumAnimalHasStamp(compendiumEntry);
}
/**
 * No comment provided
 *
 * Hash: 0x725D52F26A5E9E10 | Since: 1207 | API-Set: unknown
 */
export function animalObservedByStatName(animalType, disableCompendiumToast) {
    if (typeof animalType === 'string')
        animalType = GetHashKey(animalType);
    CompendiumAnimalObservedByStatName(animalType, disableCompendiumToast);
}
/**
 * No comment provided
 *
 * Hash: 0x67F35C7C9F2BDCFE | Since: 1311 | API-Set: unknown
 */
export function animalSetDiscovered(compendiumEntry) {
    CompendiumAnimalSetDiscovered(compendiumEntry);
}
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E00 | Since: 1207 | API-Set: unknown
 */
export function fishCaught(ped, category) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof category === 'string')
        category = GetHashKey(category);
    CompendiumFishCaught(_ped, category);
}
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E81 | Since: 1207 | API-Set: unknown
 */
export function fishGetLureSuitabilityByStatItem(animalType, baitType) {
    if (typeof animalType === 'string')
        animalType = GetHashKey(animalType);
    if (typeof baitType === 'string')
        baitType = GetHashKey(baitType);
    return CompendiumFishGetLureSuitabilityByStatItem(animalType, baitType);
}
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E04 | Since: 1207 | API-Set: unknown
 */
export function gangAmbushSurvived() {
    CompendiumGangAmbushSurvived(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E06 | Since: 1207 | API-Set: unknown
 */
export function gangBountyCaptured() {
    CompendiumGangBountyCaptured(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E03 | Since: 1207 | API-Set: unknown
 */
export function gangCampFound() {
    CompendiumGangCampFound(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E05 | Since: 1207 | API-Set: unknown
 */
export function gangEncountered() {
    CompendiumGangEncountered(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E08 | Since: 1207 | API-Set: unknown
 */
export function gangHideoutFound() {
    CompendiumGangHideoutFound(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E07 | Since: 1207 | API-Set: unknown
 */
export function gangMemberKilled() {
    CompendiumGangMemberKilled(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5CEB63B2E3D9895F | Since: 1311 | API-Set: unknown
 */
export function getEntryByIndexInSubcategory(category, subcategory, count) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    if (typeof subcategory === 'string')
        subcategory = GetHashKey(subcategory);
    return CompendiumGetEntryByIndexInSubcategory(category, subcategory, count);
}
/**
 * No comment provided
 *
 * Hash: 0x1CFA0219D8E1CF25 | Since: 1311 | API-Set: unknown
 */
export function getEntryByPedIndex(category, ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof category === 'string')
        category = GetHashKey(category);
    return CompendiumGetEntryByPedIndex(category, _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x66EC938394D76C85 | Since: 1355 | API-Set: unknown
 */
export function getEntryByStatItem(category, animalType) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    if (typeof animalType === 'string')
        animalType = GetHashKey(animalType);
    return CompendiumGetEntryByStatItem(category, animalType);
}
/**
 * No comment provided
 *
 * Hash: 0x729D54121A5E9E20 | Since: 1207 | API-Set: unknown
 */
export function getMapDiscoverableFromStatItem(animalStatItem, pos) {
    if (typeof animalStatItem === 'string')
        animalStatItem = GetHashKey(animalStatItem);
    return CompendiumGetMapDiscoverableFromStatItem(animalStatItem, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0xF58A0C0E086E8E36 | Since: 1311 | API-Set: unknown
 */
export function getNumEntriesInSubcategory(category, subcategory) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    if (typeof subcategory === 'string')
        subcategory = GetHashKey(subcategory);
    return CompendiumGetNumEntriesInSubcategory(category, subcategory);
}
/**
 * No comment provided
 *
 * Hash: 0x6C5E5D48E48B4C65 | Since: 1207 | API-Set: unknown
 */
export function getShortDescriptionFromPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return CompendiumGetShortDescriptionFromPed(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9F678782720349E4 | Since: 1311 | API-Set: unknown
 */
export function getStudyAwardId(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return CompendiumGetStudyAwardId(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x9B657550DF55EC96 | Since: 1311 | API-Set: unknown
 */
export function getSubcategoryPedIsIn(category, ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof category === 'string')
        category = GetHashKey(category);
    return CompendiumGetSubcategoryPedIsIn(category, _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x59D4D68CDB82427C | Since: 1311 | API-Set: unknown
 */
export function getSubcategorySampleToastDescComplete(category, subcategory) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    if (typeof subcategory === 'string')
        subcategory = GetHashKey(subcategory);
    return CompendiumGetSubcategorySampleToastDescComplete(category, subcategory);
}
/**
 * No comment provided
 *
 * Hash: 0x82BFB5B367957699 | Since: 1311 | API-Set: unknown
 */
export function getSubcategorySampleToastDescProgress(category, subcategory) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    if (typeof subcategory === 'string')
        subcategory = GetHashKey(subcategory);
    return CompendiumGetSubcategorySampleToastDescProgress(category, subcategory);
}
/**
 * No comment provided
 *
 * Hash: 0x5E50C67EB60951E6 | Since: 1311 | API-Set: unknown
 */
export function getSubcategorySampleToastTitle(category, subcategory) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    if (typeof subcategory === 'string')
        subcategory = GetHashKey(subcategory);
    return CompendiumGetSubcategorySampleToastTitle(category, subcategory);
}
/**
 * No comment provided
 *
 * Hash: 0x2BF30D9D4D680112 | Since: 1311 | API-Set: unknown
 */
export function getSubcategoryToastAppId(category, subcategory) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    if (typeof subcategory === 'string')
        subcategory = GetHashKey(subcategory);
    return CompendiumGetSubcategoryToastAppId(category, subcategory);
}
/**
 * herbType: https://alloc8or.re/rdr3/doc/enums/eHerbType.txt
 * Vector3: Player Location
 *
 * Hash: 0x725D52F21A5E9E09 | Since: 1207 | API-Set: unknown
 */
export function herbPicked(herbType, pos) {
    if (typeof herbType === 'string')
        herbType = GetHashKey(herbType);
    CompendiumHerbPicked(herbType, pos.x, pos.y, pos.z);
}
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E50 | Since: 1207 | API-Set: unknown
 */
export function horseBonding(ped, bondingLevel) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    CompendiumHorseBonding(_ped, bondingLevel);
}
/**
 * Only gets called if bSetObserved is true and animalType is matching
 *
 * Hash: 0x725D58F2125E5E50 | Since: 1207 | API-Set: unknown
 */
export function horseObserved(ped, disableCompendiumToast) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    CompendiumHorseObserved(_ped, disableCompendiumToast);
}
/**
 * NET_PLAYER_HORSE_PROCESS_EVENT_HORSE_BREAKING
 *
 * Hash: 0x725852D21A2E9E50 | Since: 1207 | API-Set: unknown
 */
export function horseWildBroken(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    CompendiumHorseWildBroken(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x23B5E9C5160BC04F | Since: 1311 | API-Set: unknown
 */
export function wasAnimalObserved(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return CompendiumWasAnimalObserved(_ped);
}
/**
 * Only used in R* SP Scripts, category = GANGS
 * _COMPENDIUM_GET_*
 *
 * Hash: 0x725D52F21A5E9E22 | Since: 1207 | API-Set: unknown
 */
export function _0x725D52F21A5E9E22(category) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    return Citizen.invokeNative('0x725D52F21A5E9E22', category);
}
/**
 * Only used in R* SP Scripts, category = GANGS
 * _COMPENDIUM_GET_NUM_OF_ENTRIES_IN_*
 *
 * Hash: 0x729D52461AEA9E22 | Since: 1207 | API-Set: unknown
 */
export function _0x729D52461AEA9E22(category) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    return Citizen.invokeNative('0x729D52461AEA9E22', category);
}
/**
 * No comment provided
 *
 * Hash: 0x729D52F61A5A9E22 | Since: 1207 | API-Set: unknown
 */
export function getNumOfEntriesInCategory(category) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    return CompendiumGetNumOfEntriesInCategory(category);
}
/**
 * No comment provided
 *
 * Hash: 0xCD278B6BFBDBDC22 | Since: 1355 | API-Set: unknown
 */
export function getSubcategoryHashFromAnimalType(category, animalType) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    if (typeof animalType === 'string')
        animalType = GetHashKey(animalType);
    return CompendiumGetSubcategoryHashFromAnimalType(category, animalType);
}
