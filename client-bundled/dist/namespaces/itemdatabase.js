/**
 * No comment provided
 *
 * Hash: 0x2A610BEE7D341CC4 | Since: 1207 | API-Set: unknown
 */
export function filloutItemByName(key) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseFilloutItemByName(key);
}
/**
 * No comment provided
 *
 * Hash: 0xCF2D360D27FD1ABF | Since: 1207 | API-Set: unknown
 */
export function filloutItemEffectIdInfo(key) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseFilloutItemEffectIdInfo(key);
}
/**
 * outputs struct ItemInfo { Hash category; Hash itemType; Hash unk2; Hash model; Hash award; }
 *
 * Hash: 0xFE90ABBCBFDC13B2 | Since: 1207 | API-Set: unknown
 */
export function filloutItemInfo(key) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseFilloutItemInfo(key);
}
/**
 * No comment provided
 *
 * Hash: 0x4CE753203FA42214 | Since: 1207 | API-Set: unknown
 */
export function isBuyableAwardValid(award) {
    if (typeof award === 'string')
        award = GetHashKey(award);
    return ItemdatabaseIsBuyableAwardValid(award);
}
/**
 * No comment provided
 *
 * Hash: 0x17721003A66C72BF | Since: 1207 | API-Set: unknown
 */
export function _0x17721003A66C72BF(shopType, key) {
    if (typeof shopType === 'string')
        shopType = GetHashKey(shopType);
    if (typeof key === 'string')
        key = GetHashKey(key);
    return Citizen.invokeNative('0x17721003A66C72BF', shopType, key);
}
/**
 * No comment provided
 *
 * Hash: 0x388088BFF3681189 | Since: 1232 | API-Set: unknown
 */
export function _0x388088BFF3681189(bundle, costtype) {
    if (typeof bundle === 'string')
        bundle = GetHashKey(bundle);
    if (typeof costtype === 'string')
        costtype = GetHashKey(costtype);
    return Citizen.invokeNative('0x388088BFF3681189', bundle, costtype);
}
/**
 * No comment provided
 *
 * Hash: 0x3A0B667ABFF87F6E | Since: 1207 | API-Set: unknown
 */
export function _0x3A0B667ABFF87F6E() {
    return Citizen.invokeNative('0x3A0B667ABFF87F6E', undefined, undefined, undefined);
}
/**
 * _ITEMDATABASE_GET_(A)* - _ITEMDATABASE_GET_(B)*
 *
 * Hash: 0x48229CE0C7938237 | Since: 1207 | API-Set: unknown
 */
export function _0x48229CE0C7938237(award) {
    if (typeof award === 'string')
        award = GetHashKey(award);
    return Citizen.invokeNative('0x48229CE0C7938237', award);
}
/**
 * No comment provided
 *
 * Hash: 0x537A0555F62CA01A | Since: 1436 | API-Set: unknown
 */
export function _0x537A0555F62CA01A(key) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return Citizen.invokeNative('0x537A0555F62CA01A', key, 0);
}
/**
 * Returns Item Count
 *
 * Hash: 0x799FCD53358ED5FA | Since: 1355 | API-Set: unknown
 */
export function _0x799FCD53358ED5FA(bundle) {
    return Citizen.invokeNative('0x799FCD53358ED5FA', bundle, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7A35A72A692BE9DB | Since: 1207 | API-Set: unknown
 */
export function _0x7A35A72A692BE9DB() {
    return Citizen.invokeNative('0x7A35A72A692BE9DB', undefined);
}
/**
 * _ITEMDATABASE_FILLOUT_(A)* - _ITEMDATABASE_FILLOUT_(B)*
 *
 * Hash: 0x8D029948CA29409B | Since: 1207 | API-Set: unknown
 */
export function _0x8D029948CA29409B(award, index) {
    if (typeof award === 'string')
        award = GetHashKey(award);
    return Citizen.invokeNative('0x8D029948CA29409B', award, index);
}
/**
 * Returns Pathset Hash
 *
 * Hash: 0xAA29A5F13B2C20B2 | Since: 1232 | API-Set: unknown
 */
export function _0xAA29A5F13B2C20B2(p1) {
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    return Citizen.invokeNative('0xAA29A5F13B2C20B2', undefined, p1);
}
/**
 * No comment provided
 *
 * Hash: 0xC4146375D8A0B374 | Since: 1355 | API-Set: unknown
 */
export function _0xC4146375D8A0B374(bundle, index) {
    return Citizen.invokeNative('0xC4146375D8A0B374', bundle, undefined, index, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x856FF92C57742AE5 | Since: 1207 | API-Set: unknown
 */
export function canEquipItemOnCategory(key, category, slotId) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    if (typeof category === 'string')
        category = GetHashKey(category);
    if (typeof slotId === 'string')
        slotId = GetHashKey(slotId);
    return ItemdatabaseCanEquipItemOnCategory(key, category, slotId);
}
/**
 * Returns collectionId to be used with 0x8750F69A720C2E41 (p0) and 0xCBB7B6EDFA933ADE (p0)
 *
 * Hash: 0x71EFA7999AE79408 | Since: 1207 | API-Set: unknown
 */
export function createItemCollection(comparisonType) {
    return ItemdatabaseCreateItemCollection(comparisonType);
}
/**
 * Params: tag = TAG_ITEM_PROPERTY (tagType(?))
 *
 * Hash: 0x99C6EA66DFE73757 | Since: 1207 | API-Set: unknown
 */
export function doesBundleHaveTag(bundle, tag, tagType) {
    if (typeof bundle === 'string')
        bundle = GetHashKey(bundle);
    if (typeof tag === 'string')
        tag = GetHashKey(tag);
    if (typeof tagType === 'string')
        tagType = GetHashKey(tagType);
    return ItemdatabaseDoesBundleHaveTag(bundle, tag, tagType);
}
/**
 * No comment provided
 *
 * Hash: 0xFF5FB5605AD56856 | Since: 1207 | API-Set: unknown
 */
export function doesItemHaveTag(item, tag, tagType) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    if (typeof tag === 'string')
        tag = GetHashKey(tag);
    if (typeof tagType === 'string')
        tagType = GetHashKey(tagType);
    return ItemdatabaseDoesItemHaveTag(item, tag, tagType);
}
/**
 * No comment provided
 *
 * Hash: 0x74F7928816E4E181 | Since: 1207 | API-Set: unknown
 */
export function filloutAcquireCost(key, costtype) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    if (typeof costtype === 'string')
        costtype = GetHashKey(costtype);
    return ItemdatabaseFilloutAcquireCost(key, costtype);
}
/**
 * No comment provided
 *
 * Hash: 0xF27F01BBF5ACD3F3 | Since: 1232 | API-Set: unknown
 */
export function filloutAwardAcquireCost(award, costtype, index) {
    if (typeof award === 'string')
        award = GetHashKey(award);
    if (typeof costtype === 'string')
        costtype = GetHashKey(costtype);
    return Citizen.invokeNative('0xF27F01BBF5ACD3F3', award, costtype, index);
}
/**
 * No comment provided
 *
 * Hash: 0x121D2005DD64496B | Since: 1207 | API-Set: unknown
 */
export function filloutAwardItemInfo(award, index) {
    if (typeof award === 'string')
        award = GetHashKey(award);
    return ItemdatabaseFilloutAwardItemInfo(award, index);
}
/**
 * No comment provided
 *
 * Hash: 0xB542632693D53408 | Since: 1232 | API-Set: unknown
 */
export function filloutBundle(bundle, costtype, index) {
    if (typeof bundle === 'string')
        bundle = GetHashKey(bundle);
    if (typeof costtype === 'string')
        costtype = GetHashKey(costtype);
    return ItemdatabaseFilloutBundle(bundle, costtype, index);
}
/**
 * No comment provided
 *
 * Hash: 0x74C3B1093728D263 | Since: 1207 | API-Set: unknown
 */
export function filloutBundleUiData(bundle) {
    if (typeof bundle === 'string')
        bundle = GetHashKey(bundle);
    return Citizen.invokeNative('0x74C3B1093728D263', bundle);
}
/**
 * No comment provided
 *
 * Hash: 0xB52E20F6767A09A2 | Since: 1207 | API-Set: unknown
 */
export function filloutBuyAwardAcquireCosts(award) {
    if (typeof award === 'string')
        award = GetHashKey(award);
    return ItemdatabaseFilloutBuyAwardAcquireCosts(award, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xF8D09EF8CE61D7BF | Since: 1207 | API-Set: unknown
 */
export function filloutBuyAwardUiData(award) {
    if (typeof award === 'string')
        award = GetHashKey(award);
    return Citizen.invokeNative('0xF8D09EF8CE61D7BF', award);
}
/**
 * No comment provided
 *
 * Hash: 0xAD73B614DF26CF8A | Since: 1232 | API-Set: unknown
 */
export function filloutItem(key, costtype, index) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    if (typeof costtype === 'string')
        costtype = GetHashKey(costtype);
    return ItemdatabaseFilloutItem(key, costtype, index);
}
/**
 * No comment provided
 *
 * Hash: 0x9379BE60DC55BBE6 | Since: 1207 | API-Set: unknown
 */
export function filloutItemEffectIds(key) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseFilloutItemEffectIds(key);
}
/**
 * No comment provided
 *
 * Hash: 0x60614A0AB580A2B5 | Since: 1207 | API-Set: unknown
 */
export function filloutModifier(key, index) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseFilloutModifier(key, index);
}
/**
 * No comment provided
 *
 * Hash: 0x40C5D95818823C94 | Since: 1207 | API-Set: unknown
 */
export function filloutPriceModifierByKey(key) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseFilloutPriceModifierByKey(key);
}
/**
 * No comment provided
 *
 * Hash: 0x4776EFD78F75C23F | Since: 1207 | API-Set: unknown
 */
export function filloutSatchelData(key) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseFilloutSatchelData(key);
}
/**
 * Params: sellType = SELL_SHOP_DEFAULT
 *
 * Hash: 0x7A62A2EEDE1C3766 | Since: 1207 | API-Set: unknown
 */
export function filloutSellPrice(key, sellType) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    if (typeof sellType === 'string')
        sellType = GetHashKey(sellType);
    return ItemdatabaseFilloutSellPrice(key, sellType);
}
/**
 * No comment provided
 *
 * Hash: 0x5A11D6EEA17165B0 | Since: 1207 | API-Set: unknown
 */
export function filloutTagData(key) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseFilloutTagData(key, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xB86F7CC2DC67AC60 | Since: 1207 | API-Set: unknown
 */
export function filloutUiData(key) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseFilloutUiData(key);
}
/**
 * No comment provided
 *
 * Hash: 0x6772A83C67A25775 | Since: 1207 | API-Set: unknown
 */
export function getAcquireCost(key, index) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseGetAcquireCost(key, index);
}
/**
 * Returns the number of <Item>s <acquirecosts> has from the key in catalog_sp.ymt
 *
 * Hash: 0x01FDDAD392D04144 | Since: 1207 | API-Set: unknown
 */
export function getAcquireCostsCount(key) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseGetAcquireCostsCount(key);
}
/**
 * No comment provided
 *
 * Hash: 0xDEE7B3C76ED664BE | Since: 1232 | API-Set: unknown
 */
export function getAcquireCostsCountFromCostType(key, costtype) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    if (typeof costtype === 'string')
        costtype = GetHashKey(costtype);
    return Citizen.invokeNative('0xDEE7B3C76ED664BE', key, costtype);
}
/**
 * No comment provided
 *
 * Hash: 0x1FC25AEB5F76B38D | Since: 1311 | API-Set: unknown
 */
export function getAwardAcquireCost(award, index) {
    if (typeof award === 'string')
        award = GetHashKey(award);
    return Citizen.invokeNative('0x1FC25AEB5F76B38D', award, index);
}
/**
 * No comment provided
 *
 * Hash: 0x12DF9C58201DD19A | Since: 1311 | API-Set: unknown
 */
export function getAwardAcquireCostCount(key) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseGetAwardAcquireCostType(key);
}
/**
 * No comment provided
 *
 * Hash: 0xF540239F9937033B | Since: 1232 | API-Set: unknown
 */
export function getAwardAcquireCostCountFromCostType(award, costtype) {
    if (typeof award === 'string')
        award = GetHashKey(award);
    if (typeof costtype === 'string')
        costtype = GetHashKey(costtype);
    return Citizen.invokeNative('0xF540239F9937033B', award, costtype);
}
/**
 * No comment provided
 *
 * Hash: 0xE81D0378A384E755 | Since: 1232 | API-Set: unknown
 */
export function getAwardCostModifiers(award) {
    if (typeof award === 'string')
        award = GetHashKey(award);
    return ItemdatabaseGetAwardCostModifiers(award);
}
/**
 * No comment provided
 *
 * Hash: 0xD076DB9B96FAADF1 | Since: 1311 | API-Set: unknown
 */
export function getAwardInfo(award) {
    if (typeof award === 'string')
        award = GetHashKey(award);
    return Citizen.invokeNative('0xD076DB9B96FAADF1', award);
}
/**
 * Returns iAwardItemCount
 *
 * Hash: 0x3FAA928A79591761 | Since: 1207 | API-Set: unknown
 */
export function getAwardItemCount(award) {
    if (typeof award === 'string')
        award = GetHashKey(award);
    return ItemdatabaseGetAwardItemCount(award);
}
/**
 * No comment provided
 *
 * Hash: 0xA97EE5E4589FCF5A | Since: 1207 | API-Set: unknown
 */
export function getBundleAcquireCostModifiers(bundle) {
    if (typeof bundle === 'string')
        bundle = GetHashKey(bundle);
    return Citizen.invokeNative('0xA97EE5E4589FCF5A', bundle);
}
/**
 * No comment provided
 *
 * Hash: 0x891A45960B6B768A | Since: 1207 | API-Set: unknown
 */
export function getBundleId(bundle) {
    if (typeof bundle === 'string')
        bundle = GetHashKey(bundle);
    return ItemdatabaseGetBundleId(bundle);
}
/**
 * No comment provided
 *
 * Hash: 0x3332695B01015DF9 | Since: 1207 | API-Set: unknown
 */
export function getBundleItemCount(bundleId) {
    return ItemdatabaseGetBundleItemCount(bundleId);
}
/**
 * No comment provided
 *
 * Hash: 0x5D48A77E4B668B57 | Since: 1207 | API-Set: unknown
 */
export function getBundleItemInfo(bundleId, index) {
    return ItemdatabaseGetBundleItemInfo(bundleId, index);
}
/**
 * Returns (collection?) size/index (?)
 * _ITEMDATABASE_GET_(A)* - _ITEMDATABASE_GET_(B)*
 *
 * Hash: 0xD389A2549C4EFB30 | Since: 1207 | API-Set: unknown
 */
export function getCollectionSize(collectionId) {
    return ItemdatabaseGetCollectionSize(collectionId);
}
/**
 * Params: p2 can be a component item hash
 *
 * Hash: 0x8750F69A720C2E41 | Since: 1207 | API-Set: unknown
 */
export function getComponentItem(collectionId, index) {
    return ItemdatabaseGetComponentItem(collectionId, index);
}
/**
 * No comment provided
 *
 * Hash: 0x2970D1D6BFCF9B46 | Since: 1207 | API-Set: unknown
 */
export function getFitsSlotCount(category) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    return ItemdatabaseGetFitsSlotCount(category);
}
/**
 * No comment provided
 *
 * Hash: 0x77210C146CED5261 | Since: 1207 | API-Set: unknown
 */
export function getFitsSlotInfo(category, index) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    return ItemdatabaseGetFitsSlotInfo(category, index);
}
/**
 * No comment provided
 *
 * Hash: 0x44915068579D7710 | Since: 1207 | API-Set: unknown
 */
export function getHasSlotCount(category) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    return ItemdatabaseGetHasSlotCount(category);
}
/**
 * No comment provided
 *
 * Hash: 0x8A9BD0DB7E8376CF | Since: 1207 | API-Set: unknown
 */
export function getHasSlotInfo(category, index) {
    if (typeof category === 'string')
        category = GetHashKey(category);
    return ItemdatabaseGetHasSlotInfo(category, index);
}
/**
 * No comment provided
 *
 * Hash: 0xF4452CE83118C738 | Since: 1207 | API-Set: unknown
 */
export function getItemPathset(key, defaultPathset) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    if (typeof defaultPathset === 'string')
        defaultPathset = GetHashKey(defaultPathset);
    return ItemdatabaseGetItemPathset(key, defaultPathset);
}
/**
 * No comment provided
 *
 * Hash: 0x4EB37AAB79AB0C48 | Since: 1207 | API-Set: unknown
 */
export function getItemPriceModifiers(key) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseGetItemPriceModifiers(key);
}
/**
 * Returns the ci tags of the selected item tag
 * key: Hash — Wanted key (e.g WEAPON_RIFLE_VARMINT).tag: Hash — The item tag (e.g TAG_ITEM_PROPERTY).data: Any* - CI tag list starting at the offset "1", the offset 0 is to define the max number of tags you want to collect (uselly 5 in R* scripts, surelly the limit)
 *
 * Hash: 0x8870895BA5ED9385 | Since: 1232 | API-Set: unknown
 */
export function getItemTagTags(key, tagType) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    if (typeof tagType === 'string')
        tagType = GetHashKey(tagType);
    return Citizen.invokeNative('0x8870895BA5ED9385', key, tagType);
}
/**
 * No comment provided
 *
 * Hash: 0x6111B8F9413F413A | Since: 1207 | API-Set: unknown
 */
export function getItemTagType(item, tag) {
    if (typeof item === 'string')
        item = GetHashKey(item);
    if (typeof tag === 'string')
        tag = GetHashKey(tag);
    return ItemdatabaseGetItemTagType(item, tag);
}
/**
 * Returns an alternative cost hash to COST_SHOP_DEFAULT
 *
 * Hash: 0xCB92EC9C004732B4 | Since: 1207 | API-Set: unknown
 */
export function getModifiedPrice(key, index) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseGetModifiedPrice(key, index);
}
/**
 * No comment provided
 *
 * Hash: 0x5AAAF40E9B224F5E | Since: 1207 | API-Set: unknown
 */
export function getNumberOfModifiedPrices(key) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseGetNumberOfModifiedPrices(key);
}
/**
 * No comment provided
 *
 * Hash: 0x1289D8315235856D | Since: 1207 | API-Set: unknown
 */
export function getNumberOfModifiers(key) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseGetNumberOfModifiers(key);
}
/**
 * _ITEMDATABASE_GET_* - _ITEMDATABASE_IS_*
 *
 * Hash: 0xEF254F1A4C08B7E6 | Since: 1207 | API-Set: unknown
 */
export function getPriorityAccessAward(award) {
    if (typeof award === 'string')
        award = GetHashKey(award);
    return ItemdatabaseGetPriorityAccessAward(award);
}
/**
 * No comment provided
 *
 * Hash: 0xC568B1A0F17C7025 | Since: 1207 | API-Set: unknown
 */
export function getShopInventoriesItemsCount(shopType) {
    if (typeof shopType === 'string')
        shopType = GetHashKey(shopType);
    return ItemdatabaseGetShopInventoriesItemsCount(shopType);
}
/**
 * No comment provided
 *
 * Hash: 0x4A79B41B4EB91F4E | Since: 1207 | API-Set: unknown
 */
export function getShopInventoriesItemInfo(shopType, index) {
    if (typeof shopType === 'string')
        shopType = GetHashKey(shopType);
    return ItemdatabaseGetShopInventoriesItemInfo(shopType, index);
}
/**
 * Same Native Function as 0x17721003A66C72BF
 *
 * Hash: 0xCFB06801F5099B25 | Since: 1207 | API-Set: unknown
 */
export function getShopInventoriesItemInfoByKey(shopType, key) {
    if (typeof shopType === 'string')
        shopType = GetHashKey(shopType);
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseGetShopInventoriesItemInfoByKey(shopType, key);
}
/**
 * No comment provided
 *
 * Hash: 0x76C752D788A76813 | Since: 1207 | API-Set: unknown
 */
export function getShopInventoriesRequirementGroupInfo(shopType, key, index) {
    if (typeof shopType === 'string')
        shopType = GetHashKey(shopType);
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseGetShopInventoriesRequirementGroupInfo(shopType, key, index);
}
/**
 * No comment provided
 *
 * Hash: 0xE0EA5C031AE5539F | Since: 1207 | API-Set: unknown
 */
export function getShopInventoriesRequirementInfo(shopType, key, groupIndex, index) {
    if (typeof shopType === 'string')
        shopType = GetHashKey(shopType);
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseGetShopInventoriesRequirementInfo(shopType, key, groupIndex, index);
}
/**
 * No comment provided
 *
 * Hash: 0x66A6D76B6BB999B4 | Since: 1207 | API-Set: unknown
 */
export function getShopLayoutInfo(layout) {
    if (typeof layout === 'string')
        layout = GetHashKey(layout);
    return ItemdatabaseGetShopLayoutInfo(layout);
}
/**
 * No comment provided
 *
 * Hash: 0xD66114469978B55B | Since: 1207 | API-Set: unknown
 */
export function getShopLayoutMenuInfoById(layout, menu) {
    if (typeof layout === 'string')
        layout = GetHashKey(layout);
    if (typeof menu === 'string')
        menu = GetHashKey(menu);
    return ItemdatabaseGetShopLayoutMenuInfoById(layout, menu);
}
/**
 * No comment provided
 *
 * Hash: 0xF04247092F193B75 | Since: 1207 | API-Set: unknown
 */
export function getShopLayoutMenuInfoByIndex(layout, menu, index) {
    if (typeof layout === 'string')
        layout = GetHashKey(layout);
    if (typeof menu === 'string')
        menu = GetHashKey(menu);
    return ItemdatabaseGetShopLayoutMenuInfoByIndex(layout, menu, index);
}
/**
 * No comment provided
 *
 * Hash: 0x9A60570657A7B635 | Since: 1207 | API-Set: unknown
 */
export function getShopLayoutMenuPageKey(layout, menu, index) {
    if (typeof layout === 'string')
        layout = GetHashKey(layout);
    if (typeof menu === 'string')
        menu = GetHashKey(menu);
    return ItemdatabaseGetShopLayoutMenuPageKey(layout, menu, index);
}
/**
 * Returns the layout page info at the selected index
 *
 * Hash: 0xDBEADA0DF5F9AB9F | Since: 1355 | API-Set: unknown
 */
export function getShopLayoutPageInfoByIndex(layout, index) {
    if (typeof layout === 'string')
        layout = GetHashKey(layout);
    return Citizen.invokeNative('0xDBEADA0DF5F9AB9F', layout, index);
}
/**
 * No comment provided
 *
 * Hash: 0xB347C100DF0C9B7F | Since: 1207 | API-Set: unknown
 */
export function getShopLayoutPageInfoByKey(layout, pageKey) {
    if (typeof layout === 'string')
        layout = GetHashKey(layout);
    if (typeof pageKey === 'string')
        pageKey = GetHashKey(pageKey);
    return ItemdatabaseGetShopLayoutPageInfoByKey(layout, pageKey);
}
/**
 * No comment provided
 *
 * Hash: 0xF32BEF578B3DBAE8 | Since: 1207 | API-Set: unknown
 */
export function getShopLayoutPageItemKey(layout, pageKey, index) {
    if (typeof layout === 'string')
        layout = GetHashKey(layout);
    if (typeof pageKey === 'string')
        pageKey = GetHashKey(pageKey);
    return ItemdatabaseGetShopLayoutPageItemKey(layout, pageKey, index);
}
/**
 * No comment provided
 *
 * Hash: 0x86FCB565CCA0CFA7 | Since: 1207 | API-Set: unknown
 */
export function getShopLayoutRootMenuInfo(layout, index) {
    if (typeof layout === 'string')
        layout = GetHashKey(layout);
    return ItemdatabaseGetShopLayoutRootMenuInfo(layout, index);
}
/**
 * Params: mode is 0
 *
 * Hash: 0x4308812A6E9CA62E | Since: 1207 | API-Set: unknown
 */
export function isBundleValid(bundle, mode) {
    if (typeof bundle === 'string')
        bundle = GetHashKey(bundle);
    return ItemdatabaseIsBundleValid(bundle, mode);
}
/**
 * No comment provided
 *
 * Hash: 0x337F88E3A063995E | Since: 1207 | API-Set: unknown
 */
export function isIntrinsicItem(key) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseIsIntrinsicItem(key);
}
/**
 * Params: mode is 0
 *
 * Hash: 0x6D5D51B188333FD1 | Since: 1207 | API-Set: unknown
 */
export function isKeyValid(key, mode) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseIsKeyValid(key, mode);
}
/**
 * No comment provided
 *
 * Hash: 0x337F88E3A063995F | Since: 1207 | API-Set: unknown
 */
export function isOverpoweredItem(key) {
    if (typeof key === 'string')
        key = GetHashKey(key);
    return ItemdatabaseIsOverpoweredItem(key);
}
/**
 * No comment provided
 *
 * Hash: 0x00B9507D8E1D8716 | Since: 1207 | API-Set: unknown
 */
export function isShopKeyValid(shopType) {
    if (typeof shopType === 'string')
        shopType = GetHashKey(shopType);
    return ItemdatabaseIsShopKeyValid(shopType);
}
/**
 * No comment provided
 *
 * Hash: 0x3AFE5182C45A84F6 | Since: 1207 | API-Set: unknown
 */
export function isShopLayoutKeyValid(layout) {
    if (typeof layout === 'string')
        layout = GetHashKey(layout);
    return ItemdatabaseIsShopLayoutKeyValid(layout);
}
/**
 * Returns docData.iNumTotalLabelTypes
 *
 * Hash: 0xCEC6A41E8910486A | Since: 1207 | API-Set: unknown
 */
export function localizationGetNumLabelTypes() {
    return ItemdatabaseLocalizationGetNumLabelTypes(undefined);
}
/**
 * Returns iNumValuesForType
 *
 * Hash: 0x49885D82A13EEAEA | Since: 1207 | API-Set: unknown
 */
export function localizationGetNumValues() {
    return ItemdatabaseLocalizationGetNumValues(undefined, undefined);
}
/**
 * Returns LabelType
 *
 * Hash: 0xCABF5D41D0073D4A | Since: 1207 | API-Set: unknown
 */
export function localizationGetType() {
    return ItemdatabaseLocalizationGetType(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9AE5610FDCED6EA7 | Since: 1207 | API-Set: unknown
 */
export function localizationGetValue(label) {
    if (typeof label === 'string')
        label = GetHashKey(label);
    return ItemdatabaseLocalizationGetValue(undefined, label, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCBB7B6EDFA933ADE | Since: 1207 | API-Set: unknown
 */
export function releaseItemCollection(collectionId) {
    return ItemdatabaseReleaseItemCollection(collectionId);
}
