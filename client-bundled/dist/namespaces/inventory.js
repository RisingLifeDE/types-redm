import { IPed, IPlayer } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x644CCB76A76CFBD6 | Since: 1207 | API-Set: unknown
 */
export function copyMpInventoryToMissionInventory(bCopySatchelItems, bCopyEmotes, bCopyHorse) {
    InventoryCopyMpInventoryToMissionInventory(false, false, bCopySatchelItems, bCopyEmotes, bCopyHorse, false);
}
/**
 * No comment provided
 *
 * Hash: 0xE1F389F03DC83673 | Since: 1311 | API-Set: unknown
 */
export function disableMissionInventoryPickups() {
    InventoryDisableMissionInventoryPickups();
}
/**
 * No comment provided
 *
 * Hash: 0x033EE4B89F3AC545 | Since: 1207 | API-Set: unknown
 */
export function getChildrenInSlotCount(inventoryId, slotId) {
    if (typeof slotId === 'string')
        slotId = GetHashKey(slotId);
    return InventoryGetChildrenInSlotCount(inventoryId, slotId);
}
/**
 * No comment provided
 *
 * Hash: 0x886DFD3E185C8A89 | Since: 1207 | API-Set: unknown
 */
export function getGuidFromItemid(inventoryId, p2, slotId) {
    if (typeof p2 === 'string')
        p2 = GetHashKey(p2);
    if (typeof slotId === 'string')
        slotId = GetHashKey(slotId);
    return InventoryGetGuidFromItemid(inventoryId, p2, slotId);
}
/**
 * No comment provided
 *
 * Hash: 0x9700E8EFC4AB9089 | Since: 1207 | API-Set: unknown
 */
export function getInventoryItem(inventoryId) {
    return InventoryGetInventoryItem(inventoryId, false);
}
/**
 * Params: p0 is only 0 or 1
 * Only used in R* SP Scripts
 *
 * Hash: 0x0349404A22736740 | Since: 1207 | API-Set: unknown
 */
export function _0x0349404A22736740(inventoryId) {
    return Citizen.invokeNative('0x0349404A22736740', false, inventoryId);
}
/**
 * Returns databindingEntryId to be used with 0x951847CEF3D829FF (p0)
 *
 * Hash: 0x46DB71883EE9D5AF | Since: 1207 | API-Set: unknown
 */
export function _0x46DB71883EE9D5AF(data, stats, ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x46DB71883EE9D5AF', data, stats, _ped);
}
/**
 * Only used in R* SP Scripts
 *
 * Hash: 0x6862E4D93F64CF01 | Since: 1207 | API-Set: unknown
 */
export function _0x6862E4D93F64CF01(inventoryId, p2) {
    if (typeof p2 === 'string')
        p2 = GetHashKey(p2);
    return Citizen.invokeNative('0x6862E4D93F64CF01', inventoryId, p2);
}
/**
 * Only used in R* SP Scripts
 *
 * Hash: 0x6968CE7AC32F6788 | Since: 1207 | API-Set: unknown
 */
export function _0x6968CE7AC32F6788(inventoryId) {
    Citizen.invokeNative('0x6968CE7AC32F6788', inventoryId);
}
/**
 * p0: value returned by 0x46DB71883EE9D5AF
 *
 * Hash: 0x951847CEF3D829FF | Since: 1207 | API-Set: unknown
 */
export function _0x951847CEF3D829FF(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x951847CEF3D829FF', undefined, _ped);
}
/**
 * Used in function SET_SHOP_BEING_ROBBED and many other shop related scripts and functions.
 * INVENTORY_A*
 *
 * Hash: 0x9B4E793B1CB6550A | Since: 1207 | API-Set: unknown
 */
export function _0x9B4E793B1CB6550A() {
    Citizen.invokeNative('0x9B4E793B1CB6550A');
}
/**
 * No comment provided
 *
 * Hash: 0x9E58207B194488AC | Since: 1207 | API-Set: unknown
 */
export function _0x9E58207B194488AC(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x9E58207B194488AC', _ped, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xB1DD74A1F5536622 | Since: 1311 | API-Set: unknown
 */
export function _0xB1DD74A1F5536622(inventoryId) {
    return Citizen.invokeNative('0xB1DD74A1F5536622', inventoryId);
}
/**
 * Params: p3 returns an int between 0 and 20 (?)
 * Only used in R* SP Scripts
 *
 * Hash: 0xD08685BA892DBFAB | Since: 1207 | API-Set: unknown
 */
export function _0xD08685BA892DBFAB(inventoryId) {
    return Citizen.invokeNative('0xD08685BA892DBFAB', inventoryId);
}
/**
 * Only used in R* SP Scripts
 *
 * Hash: 0xE1F45A67A9F0DCBC | Since: 1207 | API-Set: unknown
 */
export function _0xE1F45A67A9F0DCBC(inventoryId) {
    Citizen.invokeNative('0xE1F45A67A9F0DCBC', inventoryId);
}
/**
 * p1: WARDROBE, KIT_CAMP, CHARACTER, KIT_MOONSHINER_PROPERTY
 * Returns slot hash
 *
 * Hash: 0x6452B1D357D81742 | Since: 1207 | API-Set: unknown
 */
export function getDefaultItemSlotInfo(item, p1) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    return GetDefaultItemSlotInfo(item, p1);
}
/**
 * No comment provided
 *
 * Hash: 0xADDD1E7C0ECF7D95 | Since: 1207 | API-Set: unknown
 */
export function getItemRoleMaxLevelCount(inventoryId, eRoleMaxLevel) {
    if (typeof eRoleMaxLevel === 'string')
        eRoleMaxLevel = GetHashKey(eRoleMaxLevel);
    return GetItemRoleMaxLevelCount(inventoryId, eRoleMaxLevel);
}
/**
 * No comment provided
 *
 * Hash: 0xE80E50BEE276A54A | Since: 1207 | API-Set: unknown
 */
export function getItemSlotMaxCount(provision, slotId) {
    if (typeof provision === 'string')
        provision = GetHashKey(provision);
    if (typeof slotId === 'string')
        slotId = GetHashKey(slotId);
    return GetItemSlotMaxCount(provision, slotId);
}
/**
 * Adds an effects entry to the CatalogItemInspection container, return int to be used with _0x75CFAC49301E134F
 *
 * Hash: 0x9D21B185ABC2DBC4 | Since: 1207 | API-Set: unknown
 */
export function addCatalogItemInspectionEffectsEntry(entryId, name, unk1, unk2) {
    return Citizen.invokeNative('0x9D21B185ABC2DBC4', entryId, name, unk1, unk2);
}
/**
 * Returns stats entry id of CatalogItemInspection container
 *
 * Hash: 0x9D21B185ABC2DBC5 | Since: 1207 | API-Set: unknown
 */
export function addCatalogItemInspectionStatsEntry(entryId, name, unk1, playerid) {
    const _playerid = playerid instanceof IPlayer ? playerid.playerId() : playerid;
    return Citizen.invokeNative('0x9D21B185ABC2DBC5', entryId, name, unk1, _playerid);
}
/**
 * inventoryItemSlotHash: https://pastebin.com/P6fyr3vr
 *
 * Hash: 0xCB5D11F9508A928D | Since: 1207 | API-Set: unknown
 */
export function addItemWithGuid(inventoryId, item, inventoryItemSlot, addReason) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    if (typeof inventoryItemSlot === 'string')
        inventoryItemSlot = GetHashKey(inventoryItemSlot);
    if (typeof addReason === 'string')
        addReason = GetHashKey(addReason);
    return InventoryAddItemWithGuid(inventoryId, item, inventoryItemSlot, 0, addReason);
}
/**
 * entry id from _INVENTORY_ADD_CATALOG_ITEM_INSPECTION_EFFECTS_ENTRY
 *
 * Hash: 0x75CFAC49301E134F | Since: 1207 | API-Set: unknown
 */
export function applyItemEffectToStatsEntry(databindingEntryId) {
    if (typeof databindingEntryId === 'string')
        databindingEntryId = GetHashKey(databindingEntryId);
    Citizen.invokeNative('0x75CFAC49301E134F', databindingEntryId, false, false);
}
/**
 * Apply the weapon stats to the CatalogItemInspection stats entry id. get entryId with _INVENTORY_ADD_CATALOG_ITEM_INSPECTION_STATS_ENTRY
 *
 * Hash: 0x75CFAC49301E134E | Since: 1207 | API-Set: unknown
 */
export function applyWeaponStatsToEntry(entryId, weapon, ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof weapon === 'string')
        weapon = GetHashKey(weapon);
    Citizen.invokeNative('0x75CFAC49301E134E', entryId, weapon, _ped);
}
/**
 * inventoryId: see _INVENTORY_GET_PED_INVENTORY_ID
 *
 * Hash: 0x0FBBFFC891A97C81 | Since: 1207 | API-Set: unknown
 */
export function areLocalChangesAllowed(inventoryId) {
    return InventoryAreLocalChangesAllowed(inventoryId);
}
/**
 * No comment provided
 *
 * Hash: 0x4C543D5DFCD2DAFD | Since: 1207 | API-Set: unknown
 */
export function compareGuids() {
    return InventoryCompareGuids();
}
/**
 * No comment provided
 *
 * Hash: 0xC04F47D488EF9EBA | Since: 1207 | API-Set: unknown
 */
export function copyItemToInventory(inventoryId, inventoryIdCloned) {
    return InventoryCopyItemToInventory(inventoryId, inventoryIdCloned, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3112ADB9D5F3426B | Since: 1207 | API-Set: unknown
 */
export function copyItemToMissionInventory() {
    return InventoryCopyItemToMissionInventory(false);
}
/**
 * filterName (collections): "ALL", "ALL SATCHEL", "ALL HORSES", "ALL COACHES", "ALL MOUNTS", "ALL CLOTHING", "ALL WEAPONS", "ALL SATCHEL EXCLUDING CLOTHING", "ALL EXCLUDING CLOTHING"
 * slotId: -1591664384
 * p3: outCollectionSize (?)
 * Returns collectionId
 *
 * Hash: 0x80D78BDC9D88EF07 | Since: 1207 | API-Set: unknown
 */
export function createItemCollection(inventoryId, filterName, slotId) {
    if (typeof slotId === 'string')
        slotId = GetHashKey(slotId);
    return InventoryCreateItemCollection(inventoryId, filterName, slotId);
}
/**
 * Returns collectionId
 *
 * Hash: 0x97A3646645727F42 | Since: 1232 | API-Set: unknown
 */
export function createItemCollection2() {
    return InventoryCreateItemCollection2();
}
/**
 * No comment provided
 *
 * Hash: 0x640F890C3E5A3FFD | Since: 1207 | API-Set: unknown
 */
export function createItemCollectionWithFilter(inventoryId) {
    return InventoryCreateItemCollectionWithFilter(inventoryId);
}
/**
 * p1: 32
 * Returns collectionId
 *
 * Hash: 0xBB7F968675B34B0C | Since: 1311 | API-Set: unknown
 */
export function createSortedCollection(inventoryId) {
    return InventoryCreateSortedCollection(inventoryId, 0);
}
/**
 * Example: (1, WEAPON_REVOLVER_CATTLEMAN, 0) - disables cattleman revolver on weapon wheel
 *
 * Hash: 0x766315A564594401 | Since: 1207 | API-Set: unknown
 */
export function disableItem(inventoryId, item, gtxReason) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    if (typeof gtxReason === 'string')
        gtxReason = GetHashKey(gtxReason);
    InventoryDisableItem(inventoryId, item, gtxReason);
}
/**
 * Params: p1 = 0
 *
 * Hash: 0xE3A46370F70F3607 | Since: 1207 | API-Set: unknown
 */
export function disableWeapons(inventoryId) {
    InventoryDisableWeapons(inventoryId, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x88B58B83A43A8CAB | Since: 1207 | API-Set: unknown
 */
export function doesItemOwnEquipment(inventoryId, item) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    return InventoryDoesItemOwnEquipment(inventoryId, item);
}
/**
 * No comment provided
 *
 * Hash: 0x6A564540FAC12211 | Since: 1207 | API-Set: unknown
 */
export function enableItem(inventoryId, item) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    InventoryEnableItem(inventoryId, item);
}
/**
 * No comment provided
 *
 * Hash: 0xD5D72F1624F3BA7C | Since: 1207 | API-Set: unknown
 */
export function enableWeapons(inventoryId) {
    InventoryEnableWeapons(inventoryId);
}
/**
 * No comment provided
 *
 * Hash: 0x734311E2852760D0 | Since: 1207 | API-Set: unknown
 */
export function equipItemWithGuid(inventoryId, bEquipped) {
    return InventoryEquipItemWithGuid(inventoryId, bEquipped);
}
/**
 * No comment provided
 *
 * Hash: 0x780C5B9AE2819807 | Since: 1207 | API-Set: unknown
 */
export function fitsSlotId(item, slotId) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    if (typeof slotId === 'string')
        slotId = GetHashKey(slotId);
    return InventoryFitsSlotId(item, slotId);
}
/**
 * No comment provided
 *
 * Hash: 0xE843D21A8E2498AA | Since: 1207 | API-Set: unknown
 */
export function getChildrenCount(inventoryId) {
    return InventoryGetChildrenCount(inventoryId);
}
/**
 * No comment provided
 *
 * Hash: 0x025A1B1FB03FBF61 | Since: 1207 | API-Set: unknown
 */
export function getFullInventoryItemData(inventoryId) {
    return InventoryGetFullInventoryItemData(inventoryId, 0, 0);
}
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
export function getInventoryIdFromPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return InventoryGetInventoryIdFromPed(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0xCD9A485F2B383B44 | Since: 1207 | API-Set: unknown
 */
export function getInventoryItemChild(inventoryId, childIndex) {
    return InventoryGetInventoryItemChild(inventoryId, childIndex);
}
/**
 * p1 (out) and p2 (in) are both script arrays?
 * item: can be a component item, see SHOP_CATALOG_BUILD_LIST_OF_WEAPON_COMPONENTS
 *
 * Hash: 0x9AC53CB6907B4428 | Since: 1207 | API-Set: unknown
 */
export function getInventoryItemCompatibleSlots(item, maxResults) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    return Citizen.invokeNative('0x9AC53CB6907B4428', item, maxResults);
}
/**
 * No comment provided
 *
 * Hash: 0xC97E0D2302382211 | Since: 1207 | API-Set: unknown
 */
export function getInventoryItemCountWithGuid(inventoryId) {
    return InventoryGetInventoryItemCountWithGuid(inventoryId, false);
}
/**
 * No comment provided
 *
 * Hash: 0xE787F05DFC977BDE | Since: 1207 | API-Set: unknown
 */
export function getInventoryItemCountWithItemid(inventoryId, eInventoryItem) {
    if (typeof eInventoryItem === 'string')
        eInventoryItem = GetHashKey(eInventoryItem);
    return InventoryGetInventoryItemCountWithItemid(inventoryId, eInventoryItem, false);
}
/**
 * No comment provided
 *
 * Hash: 0xA4550FE9C512E3DD | Since: 1207 | API-Set: unknown
 */
export function getInventoryItemDescriptionHash(item) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    return InventoryGetInventoryItemDescriptionHash(item);
}
/**
 * No comment provided
 *
 * Hash: 0xBE012571B25F5ACA | Since: 1207 | API-Set: unknown
 */
export function getInventoryItemEquippedInSlot(inventoryId, slotId) {
    if (typeof slotId === 'string')
        slotId = GetHashKey(slotId);
    return InventoryGetInventoryItemEquippedInSlot(inventoryId, slotId, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x22E590F108289A9D | Since: 1207 | API-Set: unknown
 */
export function getInventoryItemEquippedInSlotByRef(inventoryId, slotId) {
    if (typeof slotId === 'string')
        slotId = GetHashKey(slotId);
    return InventoryGetInventoryItemEquippedInSlotByRef(inventoryId, slotId);
}
/**
 * No comment provided
 *
 * Hash: 0xB991FE166FAF84FD | Since: 1207 | API-Set: unknown
 */
export function getInventoryItemFitSlot(p0) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    return InventoryGetInventoryItemFitSlot(p0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xF9933164965533B7 | Since: 1207 | API-Set: unknown
 */
export function getInventoryItemHidden(inventoryId) {
    return InventoryGetInventoryItemHidden(inventoryId);
}
/**
 * No comment provided
 *
 * Hash: 0x0C093C1787F18519 | Since: 1207 | API-Set: unknown
 */
export function getInventoryItemInspectionInfo(item) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    return InventoryGetInventoryItemInspectionInfo(item);
}
/**
 * No comment provided
 *
 * Hash: 0x70E3A884ED000A01 | Since: 1311 | API-Set: unknown
 */
export function getInventoryItemInUse(inventoryId) {
    return InventoryGetInventoryItemInUse(inventoryId);
}
/**
 * No comment provided
 *
 * Hash: 0x4AEF1FB5B9011D75 | Since: 1207 | API-Set: unknown
 */
export function getInventoryItemIsAnimalPelt(item) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    return InventoryGetInventoryItemIsAnimalPelt(item);
}
/**
 * Returns the last creation date of an inventory item
 *
 * Hash: 0x112BCA290D2EB53C | Since: 1207 | API-Set: unknown
 */
export function getInventoryItemLastCreation(inventoryId, item) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    return Citizen.invokeNative('0x112BCA290D2EB53C', inventoryId, item);
}
/**
 * soundType: see 0x2BAE4880DCDD560B
 * Returns item Hash to be used with _IS_SCRIPTED_AUDIO_CUSTOM and _PLAY_SOUND_FROM_ITEM (p0)
 *
 * Hash: 0x2E1CDC1FF3B8473E | Since: 1207 | API-Set: unknown
 */
export function getInventoryItemSound(item, soundType) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    return InventoryGetInventoryItemSound(item, soundType);
}
/**
 * Returns CopyID
 *
 * Hash: 0xAB5F12746A099A0E | Since: 1207 | API-Set: unknown
 */
export function getInventoryItemWeaponCopyId(inventoryId) {
    return InventoryGetInventoryItemWeaponCopyId(inventoryId);
}
/**
 * soundType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CItemInfoSoundsInterface__sSoundsInfo__eSoundType
 *
 * Hash: 0x2BAE4880DCDD560B | Since: 1207 | API-Set: unknown
 */
export function getIsInventoryItemSoundValid(item, soundType) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    return InventoryGetIsInventoryItemSoundValid(item, soundType);
}
/**
 * No comment provided
 *
 * Hash: 0x4A606C17276E1BCC | Since: 1232 | API-Set: unknown
 */
export function getItemExpiryTime() {
    return InventoryGetItemExpiryTime();
}
/**
 * collectionId is < outCollectionSize
 *
 * Hash: 0x82FA24C3D3FCD9B7 | Since: 1207 | API-Set: unknown
 */
export function getItemFromCollectionIndex(collectionId, itemIndex) {
    return InventoryGetItemFromCollectionIndex(collectionId, itemIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xB881CA836CC4B6D4 | Since: 1207 | API-Set: unknown
 */
export function isGuidValid() {
    return InventoryIsGuidValid();
}
/**
 * Alternative Name: _INVENTORY_IS_ITEM_DISABLED
 *
 * Hash: 0x3D10D7179D7034AF | Since: 1207 | API-Set: unknown
 */
export function isInventoryItemEquipped(inventoryId, item) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    return InventoryIsInventoryItemEquipped(inventoryId, item, false);
}
/**
 * flag: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ItemDatabaseItemFlags
 * 2097152 (is item read?), 8388608 (is item sent/received/mailable?), 16777216 (is item consumable?)
 *
 * Hash: 0x245D07651B1D183B | Since: 1207 | API-Set: unknown
 */
export function isInventoryItemFlagEnabled(item, flag) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    return InventoryIsInventoryItemFlagEnabled(item, flag);
}
/**
 * No comment provided
 *
 * Hash: 0x0137C77A2EC64536 | Since: 1232 | API-Set: unknown
 */
export function isItemExpired() {
    return InventoryIsItemExpired();
}
/**
 * No comment provided
 *
 * Hash: 0xFC7563F482781A3D | Since: 1207 | API-Set: unknown
 */
export function isPlayerInventoryMirroringTransactions() {
    return InventoryIsPlayerInventoryMirroringTransactions();
}
/**
 * old name _INVENTORY_USE_SP_BACKUP
 *
 * Hash: 0x7C7E4AB748EA3B07 | Since: 1207 | API-Set: unknown
 */
export function isUsingBackupInventory() {
    return InventoryUseSpBackup();
}
/**
 * guid1: old parent GUID
 * guid2: new parent GUID
 * guid3: new item GUID (out param)
 *
 * Hash: 0xDCCAA7C3BFD88862 | Since: 1207 | API-Set: unknown
 */
export function moveInventoryItem(inventoryId, slotId, quantity) {
    if (typeof slotId === 'string')
        slotId = GetHashKey(slotId);
    return InventoryMoveInventoryItem(inventoryId, slotId, quantity);
}
/**
 * Max num of collections is 5, so release your unused ones.
 *
 * Hash: 0x42A2F33A1942E865 | Since: 1207 | API-Set: unknown
 */
export function releaseItemCollection(collectionId) {
    return InventoryReleaseItemCollection(collectionId);
}
/**
 * removeReason: REMOVE_REASON_DEFAULT (eRemoveItemReason)
 * `Example: INVENTORY::_0x5D6182F3BCE1333B(1, joaat("REMOVE_REASON_DEFAULT")); -> clears weapon wheel`
 * Only used in R* SP Scripts
 *
 * Hash: 0x5D6182F3BCE1333B | Since: 1207 | API-Set: unknown
 */
export function removeInventoryItems(inventoryId, removeReason) {
    if (typeof removeReason === 'string')
        removeReason = GetHashKey(removeReason);
    return Citizen.invokeNative('0x5D6182F3BCE1333B', inventoryId, removeReason);
}
/**
 * No comment provided
 *
 * Hash: 0x3E4E811480B3AE79 | Since: 1207 | API-Set: unknown
 */
export function removeInventoryItemWithGuid(inventoryId, quantity, removeReason) {
    if (typeof removeReason === 'string')
        removeReason = GetHashKey(removeReason);
    return InventoryRemoveInventoryItemWithGuid(inventoryId, quantity, removeReason);
}
/**
 * No comment provided
 *
 * Hash: 0xB4158C8C9A3B5DCE | Since: 1207 | API-Set: unknown
 */
export function removeInventoryItemWithItemid(inventoryId, item, quantity, removeReason) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    if (typeof removeReason === 'string')
        removeReason = GetHashKey(removeReason);
    return InventoryRemoveInventoryItemWithItemid(inventoryId, item, quantity, removeReason);
}
/**
 * Used with CClothingItem
 *
 * Hash: 0x9A113C660AEA3832 | Since: 1207 | API-Set: unknown
 */
export function setInventoryItemHidden(inventoryId, hidden) {
    return InventorySetInventoryItemHidden(inventoryId, hidden);
}
/**
 * Used with CSatchelItem, R* Script usage: fisihing_core
 *
 * Hash: 0xD740F11FBC8AEF43 | Since: 1207 | API-Set: unknown
 */
export function setInventoryItemHidden2(inventoryId, hidden) {
    return InventorySetInventoryItemHidden2(inventoryId, hidden);
}
/**
 * No comment provided
 *
 * Hash: 0x227522FD59DDB7E8 | Since: 1207 | API-Set: unknown
 */
export function setInventoryItemInspectionEnabled(inventoryId, enabled) {
    return InventorySetInventoryItemInspectionEnabled(inventoryId, enabled);
}
/**
 * Only works on CClothingItem
 *
 * Hash: 0x65A5F70F4A292EBE | Since: 1207 | API-Set: unknown
 */
export function setInventoryItemInUse(inventoryId, inUse) {
    return InventorySetInventoryItemInUse(inventoryId, inUse);
}
/**
 * OWE_INVALID = -1,
 * OWE_GOOD_IN_HOT
 * OWE_GOOD_IN_NONE
 * OWE_GOOD_IN_COLD
 * OWE_GOOD_IN_ALL
 *
 * Hash: 0x6D2F987736A42D4C | Since: 1207 | API-Set: unknown
 */
export function setInventoryItemWeatherEffectiveness(inventoryId, weatherEffectiveness) {
    return InventorySetInventoryItemWeatherEffectiveness(inventoryId, weatherEffectiveness);
}
/**
 * No comment provided
 *
 * Hash: 0xF2753D691BCDA314 | Since: 1207 | API-Set: unknown
 */
export function swapInventoryItem(inventoryId) {
    return InventorySwapInventoryItem(inventoryId);
}
/**
 * Getter: _INVENTORY_GET_FULL_INVENTORY_ITEM_DATA
 *
 * Hash: 0xD80A8854DB5CFBA5 | Since: 1207 | API-Set: unknown
 */
export function updateInventoryItem(inventoryId) {
    return InventoryUpdateInventoryItem(inventoryId, 0);
}
/**
 * Only used in R* SP Scripts
 *
 * Hash: 0xE36D4A38D28D9CFB | Since: 1207 | API-Set: unknown
 */
export function useBackupInventory() {
    Citizen.invokeNative('0xE36D4A38D28D9CFB', false);
}
/**
 * No comment provided
 *
 * Hash: 0xA6AA9F56BC6CFF58 | Since: 1207 | API-Set: unknown
 */
export function useMissionInventory(enable, mirrorTransactions) {
    InventoryUseMissionInventory(enable, mirrorTransactions);
}
/**
 * eInventoryItem: CLOTHING_FANCY_SUIT, CLOTHING_GUNSLINGER_OUTFIT, etc.
 * Only used in R* SP Scripts
 *
 * Hash: 0x46743BBFEDBC859E | Since: 1207 | API-Set: unknown
 */
export function useSatchelItem(inventoryId, eInventoryItem) {
    if (typeof eInventoryItem === 'string')
        eInventoryItem = GetHashKey(eInventoryItem);
    Citizen.invokeNative('0x46743BBFEDBC859E', inventoryId, eInventoryItem, false);
}
/**
 * No comment provided
 *
 * Hash: 0xF666EF30F4F0AC4E | Since: 1207 | API-Set: unknown
 */
export function setCarriableCarryActionPromptOverride() {
    return SetCarriableCarryActionPromptOverride();
}
/**
 * No comment provided
 *
 * Hash: 0xFD41D1D4350F6413 | Since: 1207 | API-Set: unknown
 */
export function setItemPromptInfoRequest() {
    return SetItemPromptInfoRequest();
}
/**
 * This native has no functionality.
 *
 * Hash: 0x597F571DDEE3FFAC | Since: 1207 | API-Set: unknown
 */
export function setUseMission(toggle) {
    SetUseMissionInventory(toggle);
}
