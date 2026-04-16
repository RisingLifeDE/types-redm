import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x3180E991D4B8F248 | Since: 1207
 */
export function analyticsPlaytimeFreemodeEnd(): void {
    AnalyticsPlaytimeFreemodeEnd();
}

/**
 * No comment provided
 * 
 * Hash: 0xE9F24081D84931B8 | Since: 1207
 */
export function analyticsPlaytimeFreemodeStart(): void {
    AnalyticsPlaytimeFreemodeStart();
}

/**
 * No comment provided
 * 
 * Hash: 0xDF516E598D966D06 | Since: 1207
 */
export function campDonate(transactionId: any, slotId: number | string, p6: number | string): void {
    if (typeof slotId === 'string') slotId = GetHashKey(slotId)
    if (typeof p6 === 'string') p6 = GetHashKey(p6)
    TelemetryCampDonate(transactionId, undefined, undefined, undefined, undefined, slotId, p6, undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xFF9052BC7A3B7D33 | Since: 1207
 */
export function personalVehicleMount(): void {
    TelemetryPersonalVehicleMount(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x076C5843371EB889 | Since: 1311
 */
export function playerMenuPin(): void {
    TelemetryPlayerMenuPin(undefined, undefined, undefined, undefined);
}

/**
 * Note: this native was added in build 1491.50
 * 
 * Hash: 0x6F5BC5C4EAB42B15 | Since: 1491
 */
export function _0x6F5BC5C4EAB42B15(linkID: number, _type: number, contentId: string): void {
    Citizen.invokeNative('0x6F5BC5C4EAB42B15', linkID, _type, contentId);
}

/**
 * No comment provided
 * 
 * Hash: 0xEC0BD8736DCAF841 | Since: 1207
 */
export function _0xEC0BD8736DCAF841(toggle: boolean): void {
    Citizen.invokeNative('0xEC0BD8736DCAF841', toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x32D5898C4898CD95 | Since: 1207
 */
export function clearShopUi(): void {
    ClearTelemetryShopUi();
}

/**
 * No comment provided
 * 
 * Hash: 0x3145044F3990D321 | Since: 1207
 */
export function ambientVignette(): void {
    TelemetryAmbientVignette(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7581972ADF5D699A | Since: 1207
 */
export function animalSkinned(_type: number | string): any {
    if (typeof _type === 'string') _type = GetHashKey(_type)
    return TelemetryAnimalSkinned(_type);
}

/**
 * No comment provided
 * 
 * Hash: 0x52FA31DB8F3AD25D | Since: 1207
 */
export function bountyTarget(): any {
    return TelemetryBountyTarget();
}

/**
 * No comment provided
 * 
 * Hash: 0x565EAA726B2CE3B7 | Since: 1207
 */
export function campCreated(): void {
    TelemetryCampCreated(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x217F47761376E16E | Since: 1207
 */
export function campSupplies(): void {
    TelemetryCampSupplies(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7207AD471BC9278C | Since: 1355
 */
export function charCreator(): void {
    TelemetryCharCreator(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD6CB05DDAEE43AFD | Since: 1207
 */
export function collect(transactionId: any): void {
    TelemetryCollect(transactionId, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x621D719C4836292B | Since: 1232
 */
export function coupon(): void {
    TelemetryCoupon(undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x78C2E029DB205A3A | Since: 1207
 */
export function craftItem(quantity: any): void {
    TelemetryCraftItem(undefined, undefined, undefined, quantity);
}

/**
 * Works in MP only.
 * 
 * Hash: 0xE692D336F8A2A97F | Since: 1207
 */
export function createUuid(): [boolean, any] {
    return TelemetryCreateUuid();
}

/**
 * No comment provided
 * 
 * Hash: 0x40914CCF2A1AB531 | Since: 1207
 */
export function custom(): any {
    return TelemetryCustom();
}

/**
 * No comment provided
 * 
 * Hash: 0xE57529D23541D2DD | Since: 1207
 */
export function defensive(): void {
    TelemetryDefensive(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF5EAD898EF387E73 | Since: 1207
 */
export function discoverable(): void {
    TelemetryDiscoverable(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2C24AF8EEEEF8A55 | Since: 1207
 */
export function emoteAddCategoryToSave(emote: number | string): void {
    if (typeof emote === 'string') emote = GetHashKey(emote)
    TelemetryEmoteAddCategoryToSave(undefined, undefined, emote);
}

/**
 * No comment provided
 * 
 * Hash: 0x7CEF4AC79F7E7FAD | Since: 1207
 */
export function fastTravel(): void {
    TelemetryFastTravel(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x16B23D4F7A1F50D9 | Since: 1207
 */
export function favorEmote(): void {
    TelemetryFavorEmote(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x51EC204A6E5B5A1A | Since: 1207
 */
export function gameProgress(): void {
    TelemetryGameProgress(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE6DC9B21AC7A8729 | Since: 1207
 */
export function gangShares(): void {
    TelemetryGangShares(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x536B6025E94AC48F | Since: 1207
 */
export function goldStore(): void {
    TelemetryGoldStore(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x415FE28ED44BFF14 | Since: 1207
 */
export function gunLocker(): void {
    TelemetryGunLocker();
}

/**
 * No comment provided
 * 
 * Hash: 0x317D9C9560529CC2 | Since: 1207
 */
export function gunLockerWeaponRemoved(p0: number | string): void {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    TelemetryGunLockerWeaponRemoved(p0);
}

/**
 * No comment provided
 * 
 * Hash: 0xC3ADF4880784FA9C | Since: 1207
 */
export function gunLockerWeaponStored(p0: number | string): void {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    TelemetryGunLockerWeaponStored(p0);
}

/**
 * No comment provided
 * 
 * Hash: 0xAE693EC3A178F6C2 | Since: 1207
 */
export function herbPicked(herbType: number | string): void {
    if (typeof herbType === 'string') herbType = GetHashKey(herbType)
    TelemetryHerbPicked(herbType);
}

/**
 * No comment provided
 * 
 * Hash: 0xE6B763C7F4902201 | Since: 1207
 */
export function honor(): void {
    TelemetryHonor(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x25CC50EC1A6F3A96 | Since: 1232
 */
export function hubNavigation(): void {
    TelemetryHubNavigation(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x37AA282163B0D2C4 | Since: 1232
 */
export function hubOffers(couponItem: any): void {
    TelemetryHubOffers(couponItem, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1B554723799245F4 | Since: 1355
 */
export function introSkip(): void {
    TelemetryIntroSkip(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xECD67E9FA677CCCF | Since: 1207
 */
export function lobbyProgression(): void {
    TelemetryLobbyProgression(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCF63EF77B0DF0397 | Since: 1207
 */
export function loot(): void {
    TelemetryLoot(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x330029E121380CEB | Since: 1355
 */
export function matchNomination(): any {
    return TelemetryMatchNomination();
}

/**
 * No comment provided
 * 
 * Hash: 0xA2058154357726BB | Since: 1207
 */
export function matchOver(): void {
    TelemetryMatchOver(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4C08D2B6D8BE17E4 | Since: 1311
 */
export function matchQueue(): void {
    TelemetryMatchQueue(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF620F47B4F4A78C4 | Since: 1207
 */
export function matchStarted(): [any, any] {
    return TelemetryMatchStarted();
}

/**
 * No comment provided
 * 
 * Hash: 0xEF3C68F56BAD7B69 | Since: 1207
 */
export function matchVote(): [any, any] {
    return TelemetryMatchVote();
}

/**
 * No comment provided
 * 
 * Hash: 0x3255D4D2082C6339 | Since: 1207
 */
export function menuNavigation(): void {
    TelemetryMenuNavigation(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8EC7890D446BD9C1 | Since: 1207
 */
export function missionCheckpoint(): void {
    TelemetryMissionCheckpoint(undefined, undefined, undefined);
}

/**
 * _TELEMETRY_C* - _TELEMETRY_G*
 * 
 * Hash: 0x6571E4327390EC0B | Since: 1207
 */
export function missionFailedToLaunch(pos: Vector3, reason: number): void {
    TelemetryMissionFailedToLaunch(undefined, undefined, pos.x, pos.y, pos.z, reason);
}

/**
 * No comment provided
 * 
 * Hash: 0xEA323F5E1A4DA2F1 | Since: 1207
 */
export function missionIloOption(): void {
    TelemetryMissionIloOption(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD894437E12C17AEC | Since: 1207
 */
export function missionOver(): void {
    TelemetryMissionOver(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x15B0CC1B36F1DE29 | Since: 1207
 */
export function missionStarted(): void {
    TelemetryMissionStarted(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB5013EFBB5516867 | Since: 1232
 */
export function moonshineBrew(): void {
    TelemetryMoonshineBrew(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA72773C3134F9A57 | Since: 1207
 */
export function netCamp(): void {
    TelemetryNetCamp(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE26970A7AE0F28E9 | Since: 1207
 */
export function notoriety(): void {
    TelemetryNotoriety(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF37A2149BC9A8A27 | Since: 1207
 */
export function parleyFeud(): void {
    TelemetryParleyFeud(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE67AF24C5A3B6058 | Since: 1207
 */
export function personalVehicleWagon(): void {
    TelemetryPersonalVehicleWagon(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xED22BE4C5A399E63 | Since: 1207
 */
export function photo(): void {
    TelemetryPhoto(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x0777D65EE8A17517 | Since: 1311
 */
export function photoCam(): void {
    TelemetryPhotoCam(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5DA4718DF897EB25 | Since: 1207
 */
export function playerSpawned(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TelemetryPlayerSpawned(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x8127C5AA05C5A210 | Since: 1207
 */
export function pokerOver(): void {
    TelemetryPokerOver(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB204BF9F30298D77 | Since: 1207
 */
export function prison(transactionId: any, bountyAmount: any, ped: number | IPed, completionType: any, jailTimeServed: any, jailTimeLeft: any, posseRole: any): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TelemetryPrison(transactionId, bountyAmount, _ped, completionType, jailTimeServed, jailTimeLeft, posseRole);
}

/**
 * No comment provided
 * 
 * Hash: 0xCD6F8A0335D821F9 | Since: 1207
 */
export function region(regionHash: number | string): void {
    if (typeof regionHash === 'string') regionHash = GetHashKey(regionHash)
    TelemetryRegion(regionHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xAB43D1C80B5E9500 | Since: 1207
 */
export function roleBounty(): void {
    TelemetryRoleBounty(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4AC38DFD286DAD14 | Since: 1207
 */
export function roleCollector(transactionId: any, collectible: any, category: any): void {
    TelemetryRoleCollector(transactionId, collectible, category, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x99D40C5D74BC88E9 | Since: 1232
 */
export function roleMoonshiner(transactionId: any): void {
    TelemetryRoleMoonshiner(undefined, transactionId);
}

/**
 * No comment provided
 * 
 * Hash: 0x6FB9EA308F302922 | Since: 1311
 */
export function roleNaturalist(transactionId: any): void {
    TelemetryRoleNaturalist(transactionId, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x32C2939564D74BFF | Since: 1207
 */
export function roleTokenTransaction(): void {
    TelemetryRoleTokenTransaction(undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x476038B5A0734C10 | Since: 1207
 */
export function roleTrader(transactionId: any): void {
    TelemetryRoleTrader(undefined, transactionId);
}

/**
 * Creation of the metric is related to attribute filling, i. e. at camp fires, when the ped is resting.
 * _TELEMETRY_C* - _TELEMETRY_P*
 * 
 * Hash: 0x7E002A36AEFCFB55 | Since: 1207
 */
export function rpgGlobalCalculateAttributeCoreDelta(): void {
    TelemetryRpgGlobalCalculateAttributeCoreDelta();
}

/**
 * No comment provided
 * 
 * Hash: 0x61559675D23D8BD1 | Since: 1311
 */
export function sample(transactionId: any, animal: any, bSampled: any, bTranq: boolean): void {
    TelemetrySample(transactionId, animal, undefined, bSampled, bTranq);
}

/**
 * No comment provided
 * 
 * Hash: 0x9BEE018A63FFFAD9 | Since: 1207
 */
export function setIsFlow(toggle: boolean): void {
    TelemetrySetIsFlow(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xCA9E42F437625A85 | Since: 1232
 */
export function setShopForTransaction(transactionId: number, p1: number | string, p2: number | string): void {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    if (typeof p2 === 'string') p2 = GetHashKey(p2)
    TelemetrySetShopForTransaction(transactionId, p1, p2);
}

/**
 * No comment provided
 * 
 * Hash: 0xB0B19B56697836F5 | Since: 1311
 */
export function shopCutscene(): void {
    TelemetryShopCutscene(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x775B2ED944E44973 | Since: 1207
 */
export function shopEntry(shopType: any, shopRegion: any, region: any): void {
    TelemetryShopEntry(shopType, shopRegion, region, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF78E669FDC202E73 | Since: 1207
 */
export function shopExit(): void {
    TelemetryShopExit(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2A374E6F0075EE81 | Since: 1207
 */
export function shopPurchase(): void {
    TelemetryShopPurchase(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9BD8A9D0A774A6F8 | Since: 1207
 */
export function shopSell(centSalePrice: number): void {
    TelemetryShopSell(undefined, undefined, undefined, undefined, centSalePrice);
}

/**
 * No comment provided
 * 
 * Hash: 0xF9F14080D80937BD | Since: 1207
 */
export function sleep(): void {
    TelemetrySleep(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF0D54E0651DD7E07 | Since: 1207
 */
export function startGunLockerInteraction(): void {
    TelemetryStartGunLockerInteraction();
}

/**
 * Returns false when transaction request is failing
 * 
 * Hash: 0x80A02D9F948A8BCA | Since: 1207
 */
export function triggerTransactionRequest(): [boolean, any, any] {
    return TelemetryTriggerTransactionRequest();
}

/**
 * No comment provided
 * 
 * Hash: 0xF184B3ECE36219CF | Since: 1207
 */
export function tryGetIdFromTransactionId(): [boolean, any, any] {
    return TryGetTelemetryIdFromTransactionId();
}

