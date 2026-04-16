import { Vector3, IPed } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x4E4ACAE1C671A9DA | Since: 1311 | API-Set: unknown
 */
export declare function animalGetSampleInventoryItem(compendiumEntry: number): any;
/**
 * No comment provided
 *
 * Hash: 0x6FC24625E4FCAC27 | Since: 1311 | API-Set: unknown
 */
export declare function animalHasSample(compendiumEntry: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBCF569FC32FFF456 | Since: 1311 | API-Set: unknown
 */
export declare function animalHasStamp(compendiumEntry: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x725D52F26A5E9E10 | Since: 1207 | API-Set: unknown
 */
export declare function animalObservedByStatName(animalType: number | string, disableCompendiumToast: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x67F35C7C9F2BDCFE | Since: 1311 | API-Set: unknown
 */
export declare function animalSetDiscovered(compendiumEntry: number): void;
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E00 | Since: 1207 | API-Set: unknown
 */
export declare function fishCaught(ped: number | IPed, category: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E81 | Since: 1207 | API-Set: unknown
 */
export declare function fishGetLureSuitabilityByStatItem(animalType: number | string, baitType: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E04 | Since: 1207 | API-Set: unknown
 */
export declare function gangAmbushSurvived(): void;
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E06 | Since: 1207 | API-Set: unknown
 */
export declare function gangBountyCaptured(): void;
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E03 | Since: 1207 | API-Set: unknown
 */
export declare function gangCampFound(): void;
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E05 | Since: 1207 | API-Set: unknown
 */
export declare function gangEncountered(): void;
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E08 | Since: 1207 | API-Set: unknown
 */
export declare function gangHideoutFound(): void;
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E07 | Since: 1207 | API-Set: unknown
 */
export declare function gangMemberKilled(): void;
/**
 * No comment provided
 *
 * Hash: 0x5CEB63B2E3D9895F | Since: 1311 | API-Set: unknown
 */
export declare function getEntryByIndexInSubcategory(category: number | string, subcategory: number | string, count: number): number;
/**
 * No comment provided
 *
 * Hash: 0x1CFA0219D8E1CF25 | Since: 1311 | API-Set: unknown
 */
export declare function getEntryByPedIndex(category: number | string, ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x66EC938394D76C85 | Since: 1355 | API-Set: unknown
 */
export declare function getEntryByStatItem(category: number | string, animalType: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x729D54121A5E9E20 | Since: 1207 | API-Set: unknown
 */
export declare function getMapDiscoverableFromStatItem(animalStatItem: number | string, pos: Vector3): number;
/**
 * No comment provided
 *
 * Hash: 0xF58A0C0E086E8E36 | Since: 1311 | API-Set: unknown
 */
export declare function getNumEntriesInSubcategory(category: number | string, subcategory: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x6C5E5D48E48B4C65 | Since: 1207 | API-Set: unknown
 */
export declare function getShortDescriptionFromPed(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x9F678782720349E4 | Since: 1311 | API-Set: unknown
 */
export declare function getStudyAwardId(ped: number | IPed): any;
/**
 * No comment provided
 *
 * Hash: 0x9B657550DF55EC96 | Since: 1311 | API-Set: unknown
 */
export declare function getSubcategoryPedIsIn(category: number | string, ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x59D4D68CDB82427C | Since: 1311 | API-Set: unknown
 */
export declare function getSubcategorySampleToastDescComplete(category: number | string, subcategory: number | string): string;
/**
 * No comment provided
 *
 * Hash: 0x82BFB5B367957699 | Since: 1311 | API-Set: unknown
 */
export declare function getSubcategorySampleToastDescProgress(category: number | string, subcategory: number | string): string;
/**
 * No comment provided
 *
 * Hash: 0x5E50C67EB60951E6 | Since: 1311 | API-Set: unknown
 */
export declare function getSubcategorySampleToastTitle(category: number | string, subcategory: number | string): string;
/**
 * No comment provided
 *
 * Hash: 0x2BF30D9D4D680112 | Since: 1311 | API-Set: unknown
 */
export declare function getSubcategoryToastAppId(category: number | string, subcategory: number | string): any;
/**
 * herbType: https://alloc8or.re/rdr3/doc/enums/eHerbType.txt
 * Vector3: Player Location
 *
 * Hash: 0x725D52F21A5E9E09 | Since: 1207 | API-Set: unknown
 */
export declare function herbPicked(herbType: number | string, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x725D52F21A5E9E50 | Since: 1207 | API-Set: unknown
 */
export declare function horseBonding(ped: number | IPed, bondingLevel: number): void;
/**
 * Only gets called if bSetObserved is true and animalType is matching
 *
 * Hash: 0x725D58F2125E5E50 | Since: 1207 | API-Set: unknown
 */
export declare function horseObserved(ped: number | IPed, disableCompendiumToast: boolean): void;
/**
 * NET_PLAYER_HORSE_PROCESS_EVENT_HORSE_BREAKING
 *
 * Hash: 0x725852D21A2E9E50 | Since: 1207 | API-Set: unknown
 */
export declare function horseWildBroken(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x23B5E9C5160BC04F | Since: 1311 | API-Set: unknown
 */
export declare function wasAnimalObserved(ped: number | IPed): boolean;
/**
 * Only used in R* SP Scripts, category = GANGS
 * _COMPENDIUM_GET_*
 *
 * Hash: 0x725D52F21A5E9E22 | Since: 1207 | API-Set: unknown
 */
export declare function _0x725D52F21A5E9E22(category: number | string): number;
/**
 * Only used in R* SP Scripts, category = GANGS
 * _COMPENDIUM_GET_NUM_OF_ENTRIES_IN_*
 *
 * Hash: 0x729D52461AEA9E22 | Since: 1207 | API-Set: unknown
 */
export declare function _0x729D52461AEA9E22(category: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x729D52F61A5A9E22 | Since: 1207 | API-Set: unknown
 */
export declare function getNumOfEntriesInCategory(category: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xCD278B6BFBDBDC22 | Since: 1355 | API-Set: unknown
 */
export declare function getSubcategoryHashFromAnimalType(category: number | string, animalType: number | string): number;
