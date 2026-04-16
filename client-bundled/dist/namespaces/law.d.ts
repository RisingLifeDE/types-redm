import { Vector3, IEntity, IPed, IPlayer } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x0E3BDEED21BEB945 | Since: 1207 | API-Set: unknown
 */
export declare function addBounty(player: number | string | IPlayer, itemValueAmount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x69E181772886F48B | Since: 1207 | API-Set: unknown
 */
export declare function areWitnessesActive(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC76F252371150D9A | Since: 1207 | API-Set: unknown
 */
export declare function clearBounty(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0xBCC6DC59E32A2BDC | Since: 1207 | API-Set: unknown
 */
export declare function clearPlayerPastCrimes(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x062B4A4A3396351D | Since: 1207 | API-Set: unknown
 */
export declare function clearWantedScore(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x54310AAB97B92816 | Since: 1207 | API-Set: unknown
 */
export declare function getBounty(player: number | string | IPlayer): number;
/**
 * Returns the player registed crime data at the index
 *
 * Hash: 0x532C5FDDB986EE5C | Since: 1207 | API-Set: unknown
 */
export declare function getPlayerRegisteredCrime(player: number | string | IPlayer, index: number): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xDD5FD601481F648B | Since: 1207 | API-Set: unknown
 */
export declare function getWantedScore(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0xAD401C63158ACBAA | Since: 1207 | API-Set: unknown
 */
export declare function isIncidentActive(player: number | string | IPlayer): boolean;
/**
 * Returns amount of suppressed crimes to be used later in the function MPINTRO_CRIME_MONITOR_MAINTAIN
 *
 * Hash: 0xC08E804C91F47C80 | Since: 1207 | API-Set: unknown
 */
export declare function numCrimesSuppressed(player: number | string | IPlayer, crimeType: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x2728C77FBC4B9796 | Since: 1207 | API-Set: unknown
 */
export declare function resetWantedForNewIncident(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x093A9D1F72DF0D19 | Since: 1207 | API-Set: unknown
 */
export declare function setBounty(player: number | string | IPlayer, amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDE5FAA741A781F73 | Since: 1207 | API-Set: unknown
 */
export declare function setDisableDisturbanceCrimes(player: number | string | IPlayer): void;
/**
 * Default range is 1.0f
 *
 * Hash: 0xFEC85339AACA2A35 | Since: 1207 | API-Set: unknown
 */
export declare function setSenseRangeModifier(player: number | string | IPlayer, range: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE0FA74AA3CCE650B | Since: 1207 | API-Set: unknown
 */
export declare function setPlayerArrestedInRegion(player: number | string | IPlayer, lawRegionHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x73BAD7B2F2DB50DE | Since: 1207 | API-Set: unknown
 */
export declare function setPlayerTurnedInBountyInRegion(player: number | string | IPlayer, lawRegionHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x362086B911657B1A | Since: 1207 | API-Set: unknown
 */
export declare function setPostponeDisturbanceCrimesDuringCombat(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0xA80FF73F772ACF6A | Since: 1207 | API-Set: unknown
 */
export declare function setWantedScore(player: number | string | IPlayer, intensity: number): void;
/**
 * crimeType: see _REPORT_CRIME
 *
 * Hash: 0x785177E4D57D7389 | Since: 1207 | API-Set: unknown
 */
export declare function suppressCrimeThisFrame(player: number | string | IPlayer, crimeType: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x00DB0BC05E3FAA4E | Since: 1207 | API-Set: unknown
 */
export declare function _0x00DB0BC05E3FAA4E(ped: number | IPed, bitset: number): void;
/**
 * No comment provided
 *
 * Hash: 0x018F30D762E62DF8 | Since: 1207 | API-Set: unknown
 */
export declare function _0x018F30D762E62DF8(ped: number | IPed): [any, any];
/**
 * Used in SP only, called together with 0x55F37F5F3F2475E1 & CLEAR_WANTED_SCORE
 * _REPORT_*
 *
 * Hash: 0x07E8B8B20570271C | Since: 1207 | API-Set: unknown
 */
export declare function _0x07E8B8B20570271C(player: number | string | IPlayer): void;
/**
 * Only used in net_fetch R* Script
 *
 * Hash: 0x0BDFEBCF40A5F7E3 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0BDFEBCF40A5F7E3(crimeType: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x0C392DB374655176 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0C392DB374655176(pos: Vector3, itemSet: any): void;
/**
 * Only used in sisikapenitentiary R* Script: name = SISIKA
 * _IS_G* or _IS_H*
 *
 * Hash: 0x0DBACA9C38C9A686 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0DBACA9C38C9A686(name: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0EAF918F751F27BA | Since: 1207 | API-Set: unknown
 */
export declare function _0x0EAF918F751F27BA(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0F230DE0DDBE3649 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0F230DE0DDBE3649(player: number | string | IPlayer): boolean;
/**
 * Params: p0 either 0, 1 or -1 in R* Scripts
 * Set to 0 called together with _SUPPRESS_CRIME
 *
 * Hash: 0x15ABD5004CAD2D99 | Since: 1207 | API-Set: unknown
 */
export declare function _0x15ABD5004CAD2D99(): void;
/**
 * Only used in resapwn_dump_body R* Script
 *
 * Hash: 0x2001687F9562FD9D | Since: 1207 | API-Set: unknown
 */
export declare function _0x2001687F9562FD9D(): void;
/**
 * No comment provided
 *
 * Hash: 0x21213B833EF4DAE7 | Since: 1207 | API-Set: unknown
 */
export declare function _0x21213B833EF4DAE7(player: number | string | IPlayer, ped: number | IPed): Vector3;
/**
 * Used in SP only
 * _REPORT_*
 *
 * Hash: 0x22741652985C84D0 | Since: 1207 | API-Set: unknown
 */
export declare function _0x22741652985C84D0(player: number | string | IPlayer, lawRegionHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x26934083D3F2579C | Since: 1207 | API-Set: unknown
 */
export declare function _0x26934083D3F2579C(player: number | string | IPlayer): boolean;
/**
 * Only used in R* Script fm_mission_controller
 * _CLEAR_WANTED_*
 *
 * Hash: 0x292AD61A33A7A485 | Since: 1207 | API-Set: unknown
 */
export declare function _0x292AD61A33A7A485(): void;
/**
 * No comment provided
 *
 * Hash: 0x29CD4896ECB66C12 | Since: 1207 | API-Set: unknown
 */
export declare function _0x29CD4896ECB66C12(): void;
/**
 * Only used in R* SP Script av_amb_camp_robbery
 *
 * Hash: 0x318F0F9A4426CFA2 | Since: 1207 | API-Set: unknown
 */
export declare function _0x318F0F9A4426CFA2(ped: number | IPed): [any, any];
/**
 * No comment provided
 *
 * Hash: 0x331D349E0380B097 | Since: 1207 | API-Set: unknown
 */
export declare function _0x331D349E0380B097(): void;
/**
 * No comment provided
 *
 * Hash: 0x3738B784DDD35CC6 | Since: 1207 | API-Set: unknown
 */
export declare function _0x3738B784DDD35CC6(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3852237A3D9DF145 | Since: 1207 | API-Set: unknown
 */
export declare function _0x3852237A3D9DF145(): void;
/**
 * _CLEAR*
 *
 * Hash: 0x390710D2DAFA6BFF | Since: 1207 | API-Set: unknown
 */
export declare function _0x390710D2DAFA6BFF(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x3D2674828A4E6B3C | Since: 1207 | API-Set: unknown
 */
export declare function _0x3D2674828A4E6B3C(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x40851BCC33ACD9AB | Since: 1207 | API-Set: unknown
 */
export declare function _0x40851BCC33ACD9AB(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x522F74636DF10201 | Since: 1207 | API-Set: unknown
 */
export declare function _0x522F74636DF10201(player: number | string | IPlayer, itemSet: any): void;
/**
 * Only used in R* SP Scripts
 *
 * Hash: 0x5E6F375CA101C108 | Since: 1207 | API-Set: unknown
 */
export declare function _0x5E6F375CA101C108(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x61B98367D93F012F | Since: 1207 | API-Set: unknown
 */
export declare function _0x61B98367D93F012F(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x6ABC50979655BEE7 | Since: 1207 | API-Set: unknown
 */
export declare function _0x6ABC50979655BEE7(player: number | string | IPlayer): number;
/**
 * Only used in shoprobberies
 *
 * Hash: 0x7351DA734F989F4E | Since: 1207 | API-Set: unknown
 */
export declare function _0x7351DA734F989F4E(entity: number | IEntity): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7803436E68C32B26 | Since: 1207 | API-Set: unknown
 */
export declare function _0x7803436E68C32B26(): void;
/**
 * _SET_DISPATCH_*
 *
 * Hash: 0x7EF2A2FE38D74456 | Since: 1207 | API-Set: unknown
 */
export declare function _0x7EF2A2FE38D74456(flag: number): void;
/**
 * Only used in R* Script long_update
 * Returns a value thats being subtracted from GET_GAME_TIMER
 *
 * Hash: 0x7FC667F6DDFBCDCC | Since: 1207 | API-Set: unknown
 */
export declare function _0x7FC667F6DDFBCDCC(player: number | string | IPlayer): number;
/**
 * Only used in rcm_gunslinger1_1 R* Script: p0 = 0
 *
 * Hash: 0x82F11E1296996574 | Since: 1207 | API-Set: unknown
 */
export declare function _0x82F11E1296996574(): void;
/**
 * No comment provided
 *
 * Hash: 0x856CE8FDE2416602 | Since: 1207 | API-Set: unknown
 */
export declare function _0x856CE8FDE2416602(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x89E005B1662F6E48 | Since: 1207 | API-Set: unknown
 */
export declare function _0x89E005B1662F6E48(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0x95878B13E272EF1F | Since: 1207 | API-Set: unknown
 */
export declare function _0x95878B13E272EF1F(entity: number | IEntity, ped: number | IPed, pos: Vector3, crimeType: number | string): any;
/**
 * Only used in loanshark_miner1 R* Script: name = ANNESBURG_MINES
 *
 * Hash: 0x9772395CC73E8D1F | Since: 1207 | API-Set: unknown
 */
export declare function _0x9772395CC73E8D1F(ped: number | IPed, name: string): void;
/**
 * No comment provided
 *
 * Hash: 0x987BE590FB9D41E5 | Since: 1207 | API-Set: unknown
 */
export declare function _0x987BE590FB9D41E5(): void;
/**
 * No comment provided
 *
 * Hash: 0x9945A3E2528A02E8 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9945A3E2528A02E8(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9B4C564BFA7CFF37 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9B4C564BFA7CFF37(): void;
/**
 * No comment provided
 *
 * Hash: 0x9C5BD8C562565CE6 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9C5BD8C562565CE6(): number;
/**
 * Only used in act_bankrobbery01 R* Script
 *
 * Hash: 0x9C8A2BF37E966464 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9C8A2BF37E966464(player: number | string | IPlayer, itemSet: any): void;
/**
 * No comment provided
 *
 * Hash: 0x9D5C9A5A3321B128 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9D5C9A5A3321B128(player: number | string | IPlayer): boolean;
/**
 * Only used in shoprobberies R* Scripts
 *
 * Hash: 0x9EF07CFBB19A9733 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9EF07CFBB19A9733(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB527099D1E1EED49 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB527099D1E1EED49(player: number | string | IPlayer): [boolean, number];
/**
 * Called together with REPORT_POLICE_SPOTTED_PLAYER
 *
 * Hash: 0xBD944A3D36E992DE | Since: 1207 | API-Set: unknown
 */
export declare function _0xBD944A3D36E992DE(): void;
/**
 * Only used in rcm_serial_killer1 R* Script
 *
 * Hash: 0xC0DF161950FB101E | Since: 1207 | API-Set: unknown
 */
export declare function _0xC0DF161950FB101E(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC310239ACCCF5579 | Since: 1207 | API-Set: unknown
 */
export declare function _0xC310239ACCCF5579(): void;
/**
 * No comment provided
 *
 * Hash: 0xC5EB2755FA25F1E9 | Since: 1207 | API-Set: unknown
 */
export declare function _0xC5EB2755FA25F1E9(): void;
/**
 * No comment provided
 *
 * Hash: 0xC687A23E166DCF68 | Since: 1207 | API-Set: unknown
 */
export declare function _0xC687A23E166DCF68(): [any, any];
/**
 * _GET_DISPATCH_*
 *
 * Hash: 0xC7DC5A0A7DF608CB | Since: 1207 | API-Set: unknown
 */
export declare function _0xC7DC5A0A7DF608CB(flag: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCBFB4951F2E3934C | Since: 1207 | API-Set: unknown
 */
export declare function _0xCBFB4951F2E3934C(player: number | string | IPlayer): any;
/**
 * No comment provided
 *
 * Hash: 0xD6C0A8C7C0B2F82C | Since: 1207 | API-Set: unknown
 */
export declare function _0xD6C0A8C7C0B2F82C(player: number | string | IPlayer): void;
/**
 * Only used in R* SP Scripts
 * Params: p2 either 1 or 2
 *
 * Hash: 0xD7494DED50C6EF52 | Since: 1207 | API-Set: unknown
 */
export declare function _0xD7494DED50C6EF52(player: number | string | IPlayer, crimeType: number | string): void;
/**
 * Only used in R* SP Scripts
 * Params: p1 = true, p2 = false
 *
 * Hash: 0xDA1A9ADC4E3D4B16 | Since: 1207 | API-Set: unknown
 */
export declare function _0xDA1A9ADC4E3D4B16(itemSet: any): void;
/**
 * crimeType: see _REPORT_CRIME
 *
 * Hash: 0xDAEFDFDB2AEECE37 | Since: 1207 | API-Set: unknown
 */
export declare function _0xDAEFDFDB2AEECE37(crimeType: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xDCF12B89624AAC96 | Since: 1207 | API-Set: unknown
 */
export declare function _0xDCF12B89624AAC96(): void;
/**
 * No comment provided
 *
 * Hash: 0xDEA083C16BB91345 | Since: 1207 | API-Set: unknown
 */
export declare function _0xDEA083C16BB91345(): void;
/**
 * No comment provided
 *
 * Hash: 0xE083BEDA81709891 | Since: 1207 | API-Set: unknown
 */
export declare function _0xE083BEDA81709891(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0xE4D6E45F491A66CB | Since: 1207 | API-Set: unknown
 */
export declare function _0xE4D6E45F491A66CB(player: number | string | IPlayer): any;
/**
 * Seems to disable lawmen guarding behaviors (like during a region lockdown). Must be called every frame.
 * Only used in R* SP Scripts, mostly used in train_fast_travel_core
 *
 * Hash: 0xE94B5E938619712E | Since: 1207 | API-Set: unknown
 */
export declare function _0xE94B5E938619712E(): void;
/**
 * Only used in R* SP Scripts
 * Params: p1 = 0
 *
 * Hash: 0xE9AC8466ABE484BB | Since: 1207 | API-Set: unknown
 */
export declare function _0xE9AC8466ABE484BB(): void;
/**
 * Returns p1 value for 0xE4D6E45F491A66CB
 *
 * Hash: 0xE9EB79CBF9C0F58A | Since: 1207 | API-Set: unknown
 */
export declare function _0xE9EB79CBF9C0F58A(player: number | string | IPlayer): number;
/**
 * _SET_C* - _SET_D*
 *
 * Hash: 0xEDFC6C1FD1C964F5 | Since: 1207 | API-Set: unknown
 */
export declare function _0xEDFC6C1FD1C964F5(player: number | string | IPlayer, crimeType: number | string, bounty: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF46108C50A22B029 | Since: 1207 | API-Set: unknown
 */
export declare function _0xF46108C50A22B029(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF611DE44AEB36A1D | Since: 1207 | API-Set: unknown
 */
export declare function _0xF611DE44AEB36A1D(crimeType: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xFFEBE5AA96BC2E4E | Since: 1207 | API-Set: unknown
 */
export declare function _0xFFEBE5AA96BC2E4E(ped: number | IPed, crimeType: number | string): any;
/**
 * No comment provided
 *
 * Hash: 0x10827B5A0AAC56A7 | Since: 1207 | API-Set: unknown
 */
export declare function addWitnessResponse(player: number | string | IPlayer, crimeType: number | string, pedGroup: number | IPed): void;
/**
 * Only used in rcm_homerob00 R* Script
 *
 * Hash: 0xECE3C34B270428D5 | Since: 1207 | API-Set: unknown
 */
export declare function areAnyPedsInvestigating(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF0FBFB9AB15F7734 | Since: 1207 | API-Set: unknown
 */
export declare function areInvestigatorsActive(player: number | string | IPlayer, areInvestigatorsActive: boolean): boolean;
/**
 * Only used in trainrobbery_ambient R* Script
 *
 * Hash: 0xA22C46F16359471C | Since: 1207 | API-Set: unknown
 */
export declare function arePedsEnabledForTrain(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0BB6DE7D23C60626 | Since: 1207 | API-Set: unknown
 */
export declare function areWitnessesPending(player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8F9DE75680275C9F | Since: 1207 | API-Set: unknown
 */
export declare function createGuardZone(name: string): void;
/**
 * Returns true when investigation creation was successful
 *
 * Hash: 0x0D4B77E862475ED3 | Since: 1311 | API-Set: unknown
 */
export declare function createGuardZoneForEntity(guardZoneName: string, entity: number | IEntity, pos: Vector3): boolean;
/**
 * dispatchResponseHash: see common/data/dispatchresponses/..
 *
 * Hash: 0x75CBF20BA47E4F89 | Since: 1207 | API-Set: unknown
 */
export declare function createDispatchResponseForCoords(pos: Vector3, dispatchResponseHash: number | string): any;
/**
 * No comment provided
 *
 * Hash: 0x26D558692B25DD95 | Since: 1207 | API-Set: unknown
 */
export declare function disableGuardZone(name: string): void;
/**
 * No comment provided
 *
 * Hash: 0xC805EB785824F712 | Since: 1207 | API-Set: unknown
 */
export declare function enableDispatch(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x710448D44A64C213 | Since: 1207 | API-Set: unknown
 */
export declare function enableDispatch2(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x956510F8C36B5C64 | Since: 1207 | API-Set: unknown
 */
export declare function forceOnLocalPlayerImmediately(): void;
/**
 * p0 is always BOUNTYHUNTERSGLOBALCOOLDOWN in R* scripts
 *
 * Hash: 0x76CF93D4B416B288 | Since: 1207 | API-Set: unknown
 */
export declare function getBountyHunterGlobalCooldown(p0: number | string): number;
/**
 * Returns bounty (increment) value
 *
 * Hash: 0x35E5E21F9159849C | Since: 1207 | API-Set: unknown
 */
export declare function getCrimeBountyAmountByType(crimeType: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x148E7AC8141C9E64 | Since: 1207 | API-Set: unknown
 */
export declare function getCrimeDispatchTypeForPlayer(player: number | string | IPlayer): number;
/**
 * See _REPORT_CRIME
 *
 * Hash: 0x259CE340A8738814 | Since: 1207 | API-Set: unknown
 */
export declare function getHudPlayerCrimeType(player: number | string | IPlayer): number;
/**
 * Returns the amount of time (probably in game minutes) since last seen by the law / left the wanted radius
 *
 * Hash: 0x717DA2281DF90855 | Since: 1207 | API-Set: unknown
 */
export declare function getTimeSinceLastSeenBy(player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0xD743C4293F47AFAD | Since: 1207 | API-Set: unknown
 */
export declare function isGuardPedInvestigating(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF0B67BAD53C35BD9 | Since: 1207 | API-Set: unknown
 */
export declare function witnessResponseTask(pedGroup1: number | IPed, ped: number | IPed, pedGroup2: number | IPed, pos: Vector3, crimeType: number | string): boolean;
/**
 * p0 is always BOUNTYHUNTERSGLOBALCOOLDOWN in R* scripts
 *
 * Hash: 0xC61EDEBF16CD9668 | Since: 1207 | API-Set: unknown
 */
export declare function pauseBountyHunterCooldown(p0: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x67EBDD958835956C | Since: 1207 | API-Set: unknown
 */
export declare function removeGuardZone(name: string): void;
/**
 * crimeType:
 * enum eCrimeType : Hash
 * {
 * CRIME_ACCOMPLICE = 0xAF074F6D,
 * CRIME_ARSON = 0x68134DC7,
 * CRIME_ASSAULT = 0x0BADC882,
 * CRIME_ASSAULT_ANIMAL = 0x18DA55EE,
 * CRIME_ASSAULT_CORPSE = 0x4E5F23F2,
 * CRIME_ASSAULT_HORSE = 0xC4736181,
 * CRIME_ASSAULT_LAW = 0xD7466D7C,
 * CRIME_ASSAULT_LIVESTOCK = 0xCCE1CCBD,
 * CRIME_BANK_ROBBERY = 0x6A1ADE3D,
 * CRIME_BURGLARY = 0xA54C77E0,
 * CRIME_CHEATING = 0xA2FF1145,
 * CRIME_DISTURBANCE = 0x5011F613,
 * CRIME_EXPLOSION = 0x3EBA7A37,
 * CRIME_EXPLOSION_POISON = 0x91D0A0E1,
 * CRIME_GRAVE_ROBBERY = 0x971EA5AF,
 * CRIME_HASSLE = 0x58488776,
 * CRIME_HIT_AND_RUN = 0xFF0A3CC4,
 * CRIME_HIT_AND_RUN_LAW = 0x064814AF,
 * CRIME_INTIMIDATION = 0x8319FBAB,
 * CRIME_JACK_HORSE = 0x82F7E4A2,
 * CRIME_JACK_VEHICLE = 0x6B981F4C,
 * CRIME_JAIL_BREAK = 0x12C1D589,
 * CRIME_KIDNAPPING = 0x98F908DB,
 * CRIME_KIDNAPPING_LAW = 0xFD72A7EA,
 * CRIME_LASSO_ASSAULT = 0x56EE5D5A,
 * CRIME_LAW_IS_THREATENED = 0x1CB91DF0,
 * CRIME_LOITERING = 0x6629D2F4,
 * CRIME_LOOTING = 0x55AD2BEB,
 * CRIME_MURDER = 0xE28ECE7E,
 * CRIME_MURDER_ANIMAL = 0x48F59A66,
 * CRIME_MURDER_HORSE = 0xC7261D79,
 * CRIME_MURDER_LAW = 0x7797FCE7,
 * CRIME_MURDER_LIVESTOCK = 0x9569C546,
 * CRIME_MURDER_PLAYER = 0xF5ABD6C9,
 * CRIME_MURDER_PLAYER_HORSE = 0xD55C6A79,
 * CRIME_PROPERTY_DESTRUCTION = 0x533B003D,
 * CRIME_RESIST_ARREST = 0xDF577BA5,
 * CRIME_ROBBERY = 0xA3BEDE4C,
 * CRIME_SELF_DEFENCE = 0xBD6A0AA3,
 * CRIME_STAGECOACH_ROBBERY = 0xFC738E61,
 * CRIME_STOLEN_GOODS = 0x9A949C79,
 * CRIME_THEFT = 0x72ADE410,
 * CRIME_THEFT_HORSE = 0xBE3A5838,
 * CRIME_THEFT_LIVESTOCK = 0x85BA08FD,
 * CRIME_THEFT_VEHICLE = 0x43A9ECA1,
 * CRIME_THREATEN = 0x941C985A,
 * CRIME_THREATEN_LAW = 0x7F908566,
 * CRIME_TRAIN_ROBBERY = 0x647D2A5A,
 * CRIME_TRAMPLE = 0x45DB39D8,
 * CRIME_TRAMPLE_LAW = 0xF00F266B,
 * CRIME_TRAMPLE_PLAYER = 0x75970C15,
 * CRIME_TRESPASSING = 0xAEDE8E35,
 * CRIME_UNARMED_ASSAULT = 0x5098CC5A,
 * CRIME_VANDALISM = 0x80FDC759,
 * CRIME_VANDALISM_VEHICLE = 0xF9E7ECE4,
 * CRIME_VEHICLE_DESTRUCTION = 0x54A85DDC,
 * CRIME_WANTED_LEVEL_UP_DEBUG_HIGH = 0x99C52FF5,
 * CRIME_WANTED_LEVEL_UP_DEBUG_LOW = 0xD891890F
 * };
 *
 * Hash: 0xF60386770878A98F | Since: 1207 | API-Set: unknown
 */
export declare function reportCrime(player: number | string | IPlayer, crimeType: number | string, bounty: number, entity: number | IEntity, isKnownSuspect: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x9C4352134B2835FB | Since: 1207 | API-Set: unknown
 */
export declare function reportPlayerDispatchResponseOverride(player: number | string | IPlayer, dispatchResponseHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x4B52BF96E225D230 | Since: 1207 | API-Set: unknown
 */
export declare function setAllowDisabledResponses(toggle: boolean): void;
/**
 * p0 is always BOUNTYHUNTERSGLOBALCOOLDOWN in R* scripts
 *
 * Hash: 0xF19706B1F8FFA88F | Since: 1207 | API-Set: unknown
 */
export declare function setBountyHunterGlobalCooldown(p0: number | string): void;
/**
 * Force clears local player's wanted level
 *
 * Hash: 0x55F37F5F3F2475E1 | Since: 1207 | API-Set: unknown
 */
export declare function setBountyHunterPursuitCleared(): void;
/**
 * No comment provided
 *
 * Hash: 0xDDCE8E960D1DE240 | Since: 1207 | API-Set: unknown
 */
export declare function setCantLoseThisResponse(enable: boolean): void;
/**
 * Note: This native is only used in multiplayer scripts
 * dispatchResponseHash: see update1/common/data/dispatchresponses/..
 *
 * Hash: 0x009CF9A29972C298 | Since: 1207 | API-Set: unknown
 */
export declare function setCustomDispatchResponse(dispatchResponseHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x002BABE0B7D53136 | Since: 1207 | API-Set: unknown
 */
export declare function setDispatchMultiplierOverride(multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7E7BF59F89FC6C6D | Since: 1207 | API-Set: unknown
 */
export declare function setGuardZonePosition(name: string, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x2F9005E2EA4E5EE4 | Since: 1207 | API-Set: unknown
 */
export declare function setGuardZonePosition2(name: string, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xA8A74AA79FB67159 | Since: 1207 | API-Set: unknown
 */
export declare function setGuardZoneVolumeRegistrationEnd(name: string, volume: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8C598A930F471938 | Since: 1207 | API-Set: unknown
 */
export declare function setGuardZoneVolumeRegistrationStart(name: string, volume: number): void;
/**
 * No comment provided
 *
 * Hash: 0x35815F372D43E1E5 | Since: 1207 | API-Set: unknown
 */
export declare function setGuardZoneVolumeRestricted(name: string, volume: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA1B0E6301E2E02A6 | Since: 1207 | API-Set: unknown
 */
export declare function setGuardZoneVolumeThreat(volume: number): string;
/**
 * No comment provided
 *
 * Hash: 0xAD3E07C37A7C1ADC | Since: 1207 | API-Set: unknown
 */
export declare function setGuardZoneVolumeWarning(volume: number): string;
/**
 * No comment provided
 *
 * Hash: 0x8DE82BC774F3B862 | Since: 1207 | API-Set: unknown
 */
export declare function setDisabled(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x9BBDCB8DF789EBC1 | Since: 1207 | API-Set: unknown
 */
export declare function setRbsVolume(player: number | string | IPlayer, p1: number | string): void;
/**
 * enum eLawRegion : Hash
 * {
 * LAW_DISPATCH_REGION_NONE = 0,
 * LAW_REGION_AGUASDULCES = 0x2F573EBE,
 * LAW_REGION_ANNESBURG = 0x68CAFD50,
 * LAW_REGION_ARMADILLO = 0xF0B90756,
 * LAW_REGION_BAYOU_NWA = 0x80966B1C,
 * LAW_REGION_BEECHERS_HOPE = 0xE2544977,
 * LAW_REGION_BIG_VALLEY = 0x3DF1559A,
 * LAW_REGION_BLACKWATER = 0x60D4886D,
 * LAW_REGION_BLACKWATER_MAINGAME = 0x66553576,
 * LAW_REGION_BLUEGILL_MARSH = 0x1D6AED8E,
 * LAW_REGION_BRAITHWAITE_MANOR = 0x3D71E7FF,
 * LAW_REGION_BUTCHER_CREEK = 0x2B3E1822,
 * LAW_REGION_CALIGA_HALL = 0xF3FE5080,
 * LAW_REGION_CORNWALL = 0xCC4672FA,
 * LAW_REGION_CUMBERLAND_FOREST = 0x81A78306,
 * LAW_REGION_EMERALD_RANCH = 0x5C069DF3,
 * LAW_REGION_FORT_WALLACE = 0x0AF25192,
 * LAW_REGION_GREAT_PLAINS = 0xB20573FA,
 * LAW_REGION_GREAT_PLAINS_MAINGAME = 0x9862FF7C,
 * LAW_REGION_GRIZZLIES = 0xBB936031,
 * LAW_REGION_GUAMA = 0x200DFF42,
 * LAW_REGION_HEARTLANDS = 0xAD14DA65,
 * LAW_REGION_LAGRAS = 0xC64808D3,
 * LAW_REGION_MACFARLANES_RANCH = 0x396A7D5F,
 * LAW_REGION_MANICATO = 0x039DB6BF,
 * LAW_REGION_MANZANITA_POST = 0x895E580E,
 * LAW_REGION_MANZANITA_POST_MAINGAME = 0x9BDD6A38,
 * LAW_REGION_OCCUPIED_CARAVAN_CAMP = 0x7EBABB01,
 * LAW_REGION_OLD_MAP_WILDERNESS = 0xCBB45950,
 * LAW_REGION_OLD_MAP_WILDERNESS_MAINGAME = 0x9F839BE7,
 * LAW_REGION_OUTLAW3 = 0x97A02FC1,
 * LAW_REGION_PRONGHORN_RANCH = 0x398E4BFC,
 * LAW_REGION_RHODES = 0x89222928,
 * LAW_REGION_RHODES_LOCKDOWN = 0xB1181671,
 * LAW_REGION_RIDGEWOOD_FARM = 0x635C3028,
 * LAW_REGION_ROANOKE_RIDGE = 0x46386A9A,
 * LAW_REGION_SAINT_DENIS = 0x5CF7C268,
 * LAW_REGION_SAINT_DENIS_RURAL = 0x4FD5331A,
 * LAW_REGION_SCARLETT_MEADOWS = 0x5FDD9717,
 * LAW_REGION_SISIKA = 0x2B6BBA52,
 * LAW_REGION_STRAWBERRY = 0xDD932620,
 * LAW_REGION_TALL_TREES = 0xD939B758,
 * LAW_REGION_TALL_TREES_MAINGAME = 0x084B17DF,
 * LAW_REGION_THIEVES_LANDING = 0x3D0C2EB6,
 * LAW_REGION_THIEVES_LANDING_MAINGAME = 0x61C450F3,
 * LAW_REGION_TUMBLEWEED = 0x0EFAF8DC,
 * LAW_REGION_VALENTINE = 0xA7A3F0C3,
 * LAW_REGION_VALENTINE_LOCKDOWN = 0x123582FE,
 * LAW_REGION_VAN_HORN = 0x619B528E,
 * LAW_REGION_WAPITI = 0x7A976E02
 * };
 *
 * Hash: 0x4752F68EB7F2D280 | Since: 1207 | API-Set: unknown
 */
export declare function setRegion(player: number | string | IPlayer, lawRegionHash: number | string, stateHash: number | string): void;
/**
 * behaviour: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CLawBehavior__Flags
 *
 * Hash: 0x819ADD5EF1742F47 | Since: 1207 | API-Set: unknown
 */
export declare function setPedBehaviour(ped: number | IPed, behaviour: number): void;
