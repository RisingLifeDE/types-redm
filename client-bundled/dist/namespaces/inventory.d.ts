import { IPed, IPlayer } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x644CCB76A76CFBD6 | Since: 1207 | API-Set: unknown
 */
export declare function copyMpInventoryToMissionInventory(bCopySatchelItems: boolean, bCopyEmotes: boolean, bCopyHorse: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xE1F389F03DC83673 | Since: 1311 | API-Set: unknown
 */
export declare function disableMissionInventoryPickups(): void;
/**
 * No comment provided
 *
 * Hash: 0x033EE4B89F3AC545 | Since: 1207 | API-Set: unknown
 */
export declare function getChildrenInSlotCount(inventoryId: number, slotId: number | string): [number, any];
/**
 * No comment provided
 *
 * Hash: 0x886DFD3E185C8A89 | Since: 1207 | API-Set: unknown
 */
export declare function getGuidFromItemid(inventoryId: number, p2: number | string, slotId: number | string): [boolean, any, any];
/**
 * No comment provided
 *
 * Hash: 0x9700E8EFC4AB9089 | Since: 1207 | API-Set: unknown
 */
export declare function getInventoryItem(inventoryId: number): [boolean, any, any];
/**
 * Params: p0 is only 0 or 1
 * Only used in R* SP Scripts
 *
 * Hash: 0x0349404A22736740 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0349404A22736740(inventoryId: number): any;
/**
 * Returns databindingEntryId to be used with 0x951847CEF3D829FF (p0)
 *
 * Hash: 0x46DB71883EE9D5AF | Since: 1207 | API-Set: unknown
 */
export declare function _0x46DB71883EE9D5AF(data: any, stats: string, ped: number | IPed): [number, any];
/**
 * Only used in R* SP Scripts
 *
 * Hash: 0x6862E4D93F64CF01 | Since: 1207 | API-Set: unknown
 */
export declare function _0x6862E4D93F64CF01(inventoryId: number, p2: number | string): [boolean, any, any];
/**
 * Only used in R* SP Scripts
 *
 * Hash: 0x6968CE7AC32F6788 | Since: 1207 | API-Set: unknown
 */
export declare function _0x6968CE7AC32F6788(inventoryId: number): void;
/**
 * p0: value returned by 0x46DB71883EE9D5AF
 *
 * Hash: 0x951847CEF3D829FF | Since: 1207 | API-Set: unknown
 */
export declare function _0x951847CEF3D829FF(ped: number | IPed): any;
/**
 * Used in function SET_SHOP_BEING_ROBBED and many other shop related scripts and functions.
 * INVENTORY_A*
 *
 * Hash: 0x9B4E793B1CB6550A | Since: 1207 | API-Set: unknown
 */
export declare function _0x9B4E793B1CB6550A(): void;
/**
 * No comment provided
 *
 * Hash: 0x9E58207B194488AC | Since: 1207 | API-Set: unknown
 */
export declare function _0x9E58207B194488AC(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xB1DD74A1F5536622 | Since: 1311 | API-Set: unknown
 */
export declare function _0xB1DD74A1F5536622(inventoryId: number): [boolean, any];
/**
 * Params: p3 returns an int between 0 and 20 (?)
 * Only used in R* SP Scripts
 *
 * Hash: 0xD08685BA892DBFAB | Since: 1207 | API-Set: unknown
 */
export declare function _0xD08685BA892DBFAB(inventoryId: number): [boolean, any, number, number];
/**
 * Only used in R* SP Scripts
 *
 * Hash: 0xE1F45A67A9F0DCBC | Since: 1207 | API-Set: unknown
 */
export declare function _0xE1F45A67A9F0DCBC(inventoryId: number): void;
/**
 * p1: WARDROBE, KIT_CAMP, CHARACTER, KIT_MOONSHINER_PROPERTY
 * Returns slot hash
 *
 * Hash: 0x6452B1D357D81742 | Since: 1207 | API-Set: unknown
 */
export declare function getDefaultItemSlotInfo(item: number | string, p1: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xADDD1E7C0ECF7D95 | Since: 1207 | API-Set: unknown
 */
export declare function getItemRoleMaxLevelCount(inventoryId: number, eRoleMaxLevel: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xE80E50BEE276A54A | Since: 1207 | API-Set: unknown
 */
export declare function getItemSlotMaxCount(provision: number | string, slotId: number | string): number;
/**
 * Adds an effects entry to the CatalogItemInspection container, return int to be used with _0x75CFAC49301E134F
 *
 * Hash: 0x9D21B185ABC2DBC4 | Since: 1207 | API-Set: unknown
 */
export declare function addCatalogItemInspectionEffectsEntry(entryId: number, name: string, unk1: boolean, unk2: boolean): number;
/**
 * Returns stats entry id of CatalogItemInspection container
 *
 * Hash: 0x9D21B185ABC2DBC5 | Since: 1207 | API-Set: unknown
 */
export declare function addCatalogItemInspectionStatsEntry(entryId: number, name: string, unk1: number, playerid: number | string | IPlayer): number;
/**
 * inventoryItemSlotHash: https://pastebin.com/P6fyr3vr
 *
 * Hash: 0xCB5D11F9508A928D | Since: 1207 | API-Set: unknown
 */
export declare function addItemWithGuid(inventoryId: number, item: number | string, inventoryItemSlot: number | string, addReason: number | string): [boolean, any, any];
/**
 * entry id from _INVENTORY_ADD_CATALOG_ITEM_INSPECTION_EFFECTS_ENTRY
 *
 * Hash: 0x75CFAC49301E134F | Since: 1207 | API-Set: unknown
 */
export declare function applyItemEffectToStatsEntry(databindingEntryId: number | string): void;
/**
 * Apply the weapon stats to the CatalogItemInspection stats entry id. get entryId with _INVENTORY_ADD_CATALOG_ITEM_INSPECTION_STATS_ENTRY
 *
 * Hash: 0x75CFAC49301E134E | Since: 1207 | API-Set: unknown
 */
export declare function applyWeaponStatsToEntry(entryId: number, weapon: number | string, ped: number | IPed): void;
/**
 * inventoryId: see _INVENTORY_GET_PED_INVENTORY_ID
 *
 * Hash: 0x0FBBFFC891A97C81 | Since: 1207 | API-Set: unknown
 */
export declare function areLocalChangesAllowed(inventoryId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4C543D5DFCD2DAFD | Since: 1207 | API-Set: unknown
 */
export declare function compareGuids(): [boolean, any, any];
/**
 * No comment provided
 *
 * Hash: 0xC04F47D488EF9EBA | Since: 1207 | API-Set: unknown
 */
export declare function copyItemToInventory(inventoryId: number, inventoryIdCloned: number): any;
/**
 * No comment provided
 *
 * Hash: 0x3112ADB9D5F3426B | Since: 1207 | API-Set: unknown
 */
export declare function copyItemToMissionInventory(): any;
/**
 * filterName (collections): "ALL", "ALL SATCHEL", "ALL HORSES", "ALL COACHES", "ALL MOUNTS", "ALL CLOTHING", "ALL WEAPONS", "ALL SATCHEL EXCLUDING CLOTHING", "ALL EXCLUDING CLOTHING"
 * slotId: -1591664384
 * p3: outCollectionSize (?)
 * Returns collectionId
 *
 * Hash: 0x80D78BDC9D88EF07 | Since: 1207 | API-Set: unknown
 */
export declare function createItemCollection(inventoryId: number, filterName: string, slotId: number | string): [number, number];
/**
 * Returns collectionId
 *
 * Hash: 0x97A3646645727F42 | Since: 1232 | API-Set: unknown
 */
export declare function createItemCollection2(): [number, number];
/**
 * No comment provided
 *
 * Hash: 0x640F890C3E5A3FFD | Since: 1207 | API-Set: unknown
 */
export declare function createItemCollectionWithFilter(inventoryId: number): [number, any, number];
/**
 * p1: 32
 * Returns collectionId
 *
 * Hash: 0xBB7F968675B34B0C | Since: 1311 | API-Set: unknown
 */
export declare function createSortedCollection(inventoryId: number): [number, number];
/**
 * Example: (1, WEAPON_REVOLVER_CATTLEMAN, 0) - disables cattleman revolver on weapon wheel
 *
 * Hash: 0x766315A564594401 | Since: 1207 | API-Set: unknown
 */
export declare function disableItem(inventoryId: number, item: number | string, gtxReason: number | string): void;
/**
 * Params: p1 = 0
 *
 * Hash: 0xE3A46370F70F3607 | Since: 1207 | API-Set: unknown
 */
export declare function disableWeapons(inventoryId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x88B58B83A43A8CAB | Since: 1207 | API-Set: unknown
 */
export declare function doesItemOwnEquipment(inventoryId: number, item: number | string): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0x6A564540FAC12211 | Since: 1207 | API-Set: unknown
 */
export declare function enableItem(inventoryId: number, item: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xD5D72F1624F3BA7C | Since: 1207 | API-Set: unknown
 */
export declare function enableWeapons(inventoryId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x734311E2852760D0 | Since: 1207 | API-Set: unknown
 */
export declare function equipItemWithGuid(inventoryId: number, bEquipped: boolean): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0x780C5B9AE2819807 | Since: 1207 | API-Set: unknown
 */
export declare function fitsSlotId(item: number | string, slotId: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE843D21A8E2498AA | Since: 1207 | API-Set: unknown
 */
export declare function getChildrenCount(inventoryId: number): [number, any];
/**
 * No comment provided
 *
 * Hash: 0x025A1B1FB03FBF61 | Since: 1207 | API-Set: unknown
 */
export declare function getFullInventoryItemData(inventoryId: number): [boolean, any, any];
/**
 * Returns a unique inventory ID for this ped.
 * For the local player ped, it is an eInventories value.
 * For other peds, it is the inventory address casted to unsigned int.
 *
 * enum eInventories
 * {
 * INVENTORY_INVALID,
 * INVENTORY_SP_PLAYER,
 * INVENTORY_MP_PLAYER,
 * INVENTORY_MP_MISSION,
 * INVENTORY_SECOND_SCREEN,
 * INVENTORY_SP_BACKUP,
 * INVENTORY_SP_SNAPSHOT,
 * INVENTORY_0xDE2AE452,
 * INVENTORY_0x399D9B3A,
 * INVENTORY_0x4BD43FA7,
 * INVENTORY_0x9529D251,
 * INVENTORY_0xA75776AC,
 * INVENTORY_MAX_ID = 11,
 * INVENTORY_IDS_COUNT
 * };
 *
 * Hash: 0x13D234A2A3F66E63 | Since: 1207 | API-Set: unknown
 */
export declare function getInventoryIdFromPed(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xCD9A485F2B383B44 | Since: 1207 | API-Set: unknown
 */
export declare function getInventoryItemChild(inventoryId: number, childIndex: any): [boolean, any, any];
/**
 * p1 (out) and p2 (in) are both script arrays?
 * item: can be a component item, see SHOP_CATALOG_BUILD_LIST_OF_WEAPON_COMPONENTS
 *
 * Hash: 0x9AC53CB6907B4428 | Since: 1207 | API-Set: unknown
 */
export declare function getInventoryItemCompatibleSlots(item: number | string, maxResults: number): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xC97E0D2302382211 | Since: 1207 | API-Set: unknown
 */
export declare function getInventoryItemCountWithGuid(inventoryId: number): [number, any];
/**
 * No comment provided
 *
 * Hash: 0xE787F05DFC977BDE | Since: 1207 | API-Set: unknown
 */
export declare function getInventoryItemCountWithItemid(inventoryId: number, eInventoryItem: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xA4550FE9C512E3DD | Since: 1207 | API-Set: unknown
 */
export declare function getInventoryItemDescriptionHash(item: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xBE012571B25F5ACA | Since: 1207 | API-Set: unknown
 */
export declare function getInventoryItemEquippedInSlot(inventoryId: number, slotId: number | string): [number, any, any];
/**
 * No comment provided
 *
 * Hash: 0x22E590F108289A9D | Since: 1207 | API-Set: unknown
 */
export declare function getInventoryItemEquippedInSlotByRef(inventoryId: number, slotId: number | string): [boolean, any, any];
/**
 * No comment provided
 *
 * Hash: 0xB991FE166FAF84FD | Since: 1207 | API-Set: unknown
 */
export declare function getInventoryItemFitSlot(p0: number | string): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xF9933164965533B7 | Since: 1207 | API-Set: unknown
 */
export declare function getInventoryItemHidden(inventoryId: number): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0x0C093C1787F18519 | Since: 1207 | API-Set: unknown
 */
export declare function getInventoryItemInspectionInfo(item: number | string): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0x70E3A884ED000A01 | Since: 1311 | API-Set: unknown
 */
export declare function getInventoryItemInUse(inventoryId: number): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0x4AEF1FB5B9011D75 | Since: 1207 | API-Set: unknown
 */
export declare function getInventoryItemIsAnimalPelt(item: number | string): boolean;
/**
 * Returns the last creation date of an inventory item
 *
 * Hash: 0x112BCA290D2EB53C | Since: 1207 | API-Set: unknown
 */
export declare function getInventoryItemLastCreation(inventoryId: number, item: number | string): [boolean, number, number, number, number, number, number];
/**
 * soundType: see 0x2BAE4880DCDD560B
 * Returns item Hash to be used with _IS_SCRIPTED_AUDIO_CUSTOM and _PLAY_SOUND_FROM_ITEM (p0)
 *
 * Hash: 0x2E1CDC1FF3B8473E | Since: 1207 | API-Set: unknown
 */
export declare function getInventoryItemSound(item: number | string, soundType: number): number;
/**
 * Returns CopyID
 *
 * Hash: 0xAB5F12746A099A0E | Since: 1207 | API-Set: unknown
 */
export declare function getInventoryItemWeaponCopyId(inventoryId: number): [number, any];
/**
 * soundType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CItemInfoSoundsInterface__sSoundsInfo__eSoundType
 *
 * Hash: 0x2BAE4880DCDD560B | Since: 1207 | API-Set: unknown
 */
export declare function getIsInventoryItemSoundValid(item: number | string, soundType: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4A606C17276E1BCC | Since: 1232 | API-Set: unknown
 */
export declare function getItemExpiryTime(): [number, any];
/**
 * collectionId is < outCollectionSize
 *
 * Hash: 0x82FA24C3D3FCD9B7 | Since: 1207 | API-Set: unknown
 */
export declare function getItemFromCollectionIndex(collectionId: number, itemIndex: number): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xB881CA836CC4B6D4 | Since: 1207 | API-Set: unknown
 */
export declare function isGuidValid(): [boolean, any];
/**
 * Alternative Name: _INVENTORY_IS_ITEM_DISABLED
 *
 * Hash: 0x3D10D7179D7034AF | Since: 1207 | API-Set: unknown
 */
export declare function isInventoryItemEquipped(inventoryId: number, item: number | string): boolean;
/**
 * flag: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ItemDatabaseItemFlags
 * 2097152 (is item read?), 8388608 (is item sent/received/mailable?), 16777216 (is item consumable?)
 *
 * Hash: 0x245D07651B1D183B | Since: 1207 | API-Set: unknown
 */
export declare function isInventoryItemFlagEnabled(item: number | string, flag: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0137C77A2EC64536 | Since: 1232 | API-Set: unknown
 */
export declare function isItemExpired(): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xFC7563F482781A3D | Since: 1207 | API-Set: unknown
 */
export declare function isPlayerInventoryMirroringTransactions(): boolean;
/**
 * old name _INVENTORY_USE_SP_BACKUP
 *
 * Hash: 0x7C7E4AB748EA3B07 | Since: 1207 | API-Set: unknown
 */
export declare function isUsingBackupInventory(): boolean;
/**
 * guid1: old parent GUID
 * guid2: new parent GUID
 * guid3: new item GUID (out param)
 *
 * Hash: 0xDCCAA7C3BFD88862 | Since: 1207 | API-Set: unknown
 */
export declare function moveInventoryItem(inventoryId: number, slotId: number | string, quantity: number): [boolean, any, any, any];
/**
 * Max num of collections is 5, so release your unused ones.
 *
 * Hash: 0x42A2F33A1942E865 | Since: 1207 | API-Set: unknown
 */
export declare function releaseItemCollection(collectionId: number): boolean;
/**
 * removeReason: REMOVE_REASON_DEFAULT (eRemoveItemReason)
 * `Example: INVENTORY::_0x5D6182F3BCE1333B(1, joaat("REMOVE_REASON_DEFAULT")); -> clears weapon wheel`
 * Only used in R* SP Scripts
 *
 * Hash: 0x5D6182F3BCE1333B | Since: 1207 | API-Set: unknown
 */
export declare function removeInventoryItems(inventoryId: number, removeReason: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3E4E811480B3AE79 | Since: 1207 | API-Set: unknown
 */
export declare function removeInventoryItemWithGuid(inventoryId: number, quantity: number, removeReason: number | string): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xB4158C8C9A3B5DCE | Since: 1207 | API-Set: unknown
 */
export declare function removeInventoryItemWithItemid(inventoryId: number, item: number | string, quantity: number, removeReason: number | string): boolean;
/**
 * Used with CClothingItem
 *
 * Hash: 0x9A113C660AEA3832 | Since: 1207 | API-Set: unknown
 */
export declare function setInventoryItemHidden(inventoryId: number, hidden: boolean): any;
/**
 * Used with CSatchelItem, R* Script usage: fisihing_core
 *
 * Hash: 0xD740F11FBC8AEF43 | Since: 1207 | API-Set: unknown
 */
export declare function setInventoryItemHidden2(inventoryId: number, hidden: boolean): any;
/**
 * No comment provided
 *
 * Hash: 0x227522FD59DDB7E8 | Since: 1207 | API-Set: unknown
 */
export declare function setInventoryItemInspectionEnabled(inventoryId: number, enabled: boolean): [boolean, any];
/**
 * Only works on CClothingItem
 *
 * Hash: 0x65A5F70F4A292EBE | Since: 1207 | API-Set: unknown
 */
export declare function setInventoryItemInUse(inventoryId: number, inUse: boolean): any;
/**
 * OWE_INVALID = -1,
 * OWE_GOOD_IN_HOT
 * OWE_GOOD_IN_NONE
 * OWE_GOOD_IN_COLD
 * OWE_GOOD_IN_ALL
 *
 * Hash: 0x6D2F987736A42D4C | Since: 1207 | API-Set: unknown
 */
export declare function setInventoryItemWeatherEffectiveness(inventoryId: number, weatherEffectiveness: number): any;
/**
 * No comment provided
 *
 * Hash: 0xF2753D691BCDA314 | Since: 1207 | API-Set: unknown
 */
export declare function swapInventoryItem(inventoryId: number): [boolean, any, any];
/**
 * Getter: _INVENTORY_GET_FULL_INVENTORY_ITEM_DATA
 *
 * Hash: 0xD80A8854DB5CFBA5 | Since: 1207 | API-Set: unknown
 */
export declare function updateInventoryItem(inventoryId: number): [boolean, any, any];
/**
 * Only used in R* SP Scripts
 *
 * Hash: 0xE36D4A38D28D9CFB | Since: 1207 | API-Set: unknown
 */
export declare function useBackupInventory(): void;
/**
 * No comment provided
 *
 * Hash: 0xA6AA9F56BC6CFF58 | Since: 1207 | API-Set: unknown
 */
export declare function useMissionInventory(enable: boolean, mirrorTransactions: boolean): void;
/**
 * eInventoryItem: CLOTHING_FANCY_SUIT, CLOTHING_GUNSLINGER_OUTFIT, etc.
 * Only used in R* SP Scripts
 *
 * Hash: 0x46743BBFEDBC859E | Since: 1207 | API-Set: unknown
 */
export declare function useSatchelItem(inventoryId: number, eInventoryItem: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xF666EF30F4F0AC4E | Since: 1207 | API-Set: unknown
 */
export declare function setCarriableCarryActionPromptOverride(): any;
/**
 * No comment provided
 *
 * Hash: 0xFD41D1D4350F6413 | Since: 1207 | API-Set: unknown
 */
export declare function setItemPromptInfoRequest(): any;
/**
 * This native has no functionality.
 *
 * Hash: 0x597F571DDEE3FFAC | Since: 1207 | API-Set: unknown
 */
export declare function setUseMission(toggle: boolean): void;
