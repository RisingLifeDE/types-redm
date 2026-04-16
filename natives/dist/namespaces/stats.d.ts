import { Vector3, IEntity, IPed, IPlayer } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x808712E428F697B8 | Since: 1232
 */
export declare function chalAchievementGetProgressInt(p0: number | string, p1: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x77B97A827739D434 | Since: 1232
 */
export declare function chalAchievementIsComplete(p0: number | string, p1: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x86922D8C02FB7703 | Since: 1207
 */
export declare function chalAddGoalProgressFloat(chalHash: number | string, goalHash: number | string, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x86922D8C02FB7705 | Since: 1232
 */
export declare function chalAddGoalProgressFloatByScoreId(p0: number | string, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDDBD560745B1EE9A | Since: 1207
 */
export declare function chalAddGoalProgressInt(chalHash: number | string, goalHash: number | string, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDDBD560745B1EE9C | Since: 1207
 */
export declare function chalAddGoalProgressIntByScoreId(p0: number | string, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x58CB53DB63F84DEA | Since: 1207
 */
export declare function chalGetMaxRanks(chalHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x58CB53DB63F84DE9 | Since: 1207
 */
export declare function chalGetNumRanksCompleted(chalHash: number | string): number;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/AI/EVENTS/challenge_goals.lua
 *
 * Hash: 0x04DAC3929796EB87 | Since: 1207
 */
export declare function chalIsGoalActive(chalHash: number | string, goalHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x97E18E7C098626DE | Since: 1207
 */
export declare function chalMissionAddGoalProgressInt(missionHash: number | string, goalHash: number | string, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0B0576DD3A75E58D | Since: 1207
 */
export declare function chalMissionGetNumGoals(missionHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xA785A52B59B7E7B2 | Since: 1207
 */
export declare function chalMissionGetNumGoalsComplete(missionHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xC0BB774787BBF301 | Since: 1207
 */
export declare function chalMissionIsGoalComplete(missionHash: number | string, goalHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4ABF7E4DB6279E8F | Since: 1207
 */
export declare function chalNetStartChal(chalHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xC3FCB47344DCB638 | Since: 1207
 */
export declare function chalNetStartGoal(chalHash: number | string, goalHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x43B0163154A50C86 | Since: 1207
 */
export declare function chalNetStopChal(chalHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x00CE6A93324A590B | Since: 1207
 */
export declare function chalNetStopGoal(chalHash: number | string, goalHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xF63DF9EE16393343 | Since: 1436
 */
export declare function chalSetGoalDisabled(chalHash: number | string, goalHash: number | string, disabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xDDBD560745B1EE9B | Since: 1207
 */
export declare function chalSetGoalProgressInt(chalHash: number | string, goalHash: number | string, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB2A38826E5886E83 | Since: 1207
 */
export declare function trackerDeedStarted(p0: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x01F4D242765C6B24 | Since: 1207
 */
export declare function trackerIsInitialized(p0: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6B1044FDC2B09101 | Since: 1207
 */
export declare function statAddBountyTarget(unlockHash: number | string, ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x262EF7CF49CF1EB9 | Since: 1207
 */
export declare function statBountyCaptured(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xB22F05732F72F70C | Since: 1207
 */
export declare function statBountyEscaped(ped: number | IPed): void;
/**
 * statId: see STAT_ID_IS_VALID
 *
 * Hash: 0x11B5E6D2AE73F48F | Since: 1207
 */
export declare function statIdGetBool(): [boolean, any, boolean];
/**
 * statId: see STAT_ID_IS_VALID
 *
 * Hash: 0x8B0FACEFC36C824C | Since: 1207
 */
export declare function statIdGetDate(): [boolean, any, any];
/**
 * statId: see STAT_ID_IS_VALID
 *
 * Hash: 0xD7AE6C9C9C6AC54D | Since: 1207
 */
export declare function statIdGetFloat(): [boolean, any, number];
/**
 * statId: see STAT_ID_IS_VALID
 *
 * Hash: 0x767FBC2AC802EF3E | Since: 1207
 */
export declare function statIdGetInt(): [boolean, any, number];
/**
 * struct StatId
 * {
 * alignas(8) Hash BaseId;
 * alignas(8) Hash PermutationId;
 * }
 *
 * Hash: 0xC48FE1971C9743FF | Since: 1207
 */
export declare function statIdIsValid(): [boolean, any];
/**
 * statId: see STAT_ID_IS_VALID
 *
 * Hash: 0x3B5107353267D7A1 | Since: 1207
 */
export declare function statIdSetBool(value: boolean): [boolean, any];
/**
 * statId: see STAT_ID_IS_VALID
 *
 * Hash: 0x1FAE9B2FAA2DFE06 | Since: 1207
 */
export declare function statIdSetDate(): [boolean, any, any];
/**
 * statId: see STAT_ID_IS_VALID
 *
 * Hash: 0x481BDF6A10C5EF68 | Since: 1207
 */
export declare function statIdSetFloat(value: number): [boolean, any];
/**
 * statId: see STAT_ID_IS_VALID
 *
 * Hash: 0x05060A54834F2382 | Since: 1207
 */
export declare function statIdSetGxtLabel(label: string): [boolean, any];
/**
 * statId: see STAT_ID_IS_VALID
 *
 * Hash: 0xA4DDF5DF95E65EEE | Since: 1207
 */
export declare function statIdSetInt(value: number): [boolean, any];
/**
 * statId: see STAT_ID_IS_VALID
 *
 * Hash: 0x34B22DE38477EDB4 | Since: 1207
 */
export declare function statIdSetToPosseId(): any;
/**
 * No comment provided
 *
 * Hash: 0x4D31051A4CA83787 | Since: 1311
 */
export declare function statPhotographTaken(itemset: any): void;
/**
 * No comment provided
 *
 * Hash: 0xCD0D69C65BB0E8B9 | Since: 1311
 */
export declare function statRegisterLegendaryAnimalDeed(deedHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xBA61BA6205A3F5A8 | Since: 1207
 */
export declare function weeklyCollectibleGetItemInSet(chalHash: number | string, setIndex: number, itemIndex: number): [boolean, number, number];
/**
 * No comment provided
 *
 * Hash: 0x610783F646894D25 | Since: 1207
 */
export declare function weeklyCollectibleGetItemSetBuyAward(chalHash: number | string, index: number): number;
/**
 * No comment provided
 *
 * Hash: 0xBFFA88522FF0F730 | Since: 1207
 */
export declare function weeklyCollectibleGetItemSetLabel(chalHash: number | string, index: number): number;
/**
 * No comment provided
 *
 * Hash: 0x7D675C9DDDB365BE | Since: 1207
 */
export declare function weeklyCollectibleGetNumItemsInSet(chalHash: number | string, index: number): number;
/**
 * No comment provided
 *
 * Hash: 0x8F5317729F791D10 | Since: 1207
 */
export declare function weeklyCollectibleGetNumSets(chalHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x025E98E317652CDD | Since: 1207
 */
export declare function _0x025E98E317652CDD(): void;
/**
 * statId: see STAT_ID_IS_VALID
 *
 * Hash: 0x0FEE2561120F3333 | Since: 1207
 */
export declare function _0x0FEE2561120F3333(): any;
/**
 * No comment provided
 *
 * Hash: 0x218F7710A139D012 | Since: 1207
 */
export declare function _0x218F7710A139D012(): void;
/**
 * statId: see STAT_ID_IS_VALID
 *
 * Hash: 0x302E71C1D9EE75B9 | Since: 1207
 */
export declare function _0x302E71C1D9EE75B9(p1: number | string): [boolean, any, number];
/**
 * No comment provided
 *
 * Hash: 0x378D3B1B11D9385B | Since: 1207
 */
export declare function _0x378D3B1B11D9385B(): void;
/**
 * No comment provided
 *
 * Hash: 0x3AEABAE3F3C7600C | Since: 1207
 */
export declare function _0x3AEABAE3F3C7600C(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3EB2791A1FBC8A42 | Since: 1207
 */
export declare function _0x3EB2791A1FBC8A42(statItem: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x3F6FD87D2030ADC6 | Since: 1207
 */
export declare function _0x3F6FD87D2030ADC6(): string;
/**
 * Only used in R* SP Scripts
 *
 * Hash: 0x4DAC398297981B87 | Since: 1207
 */
export declare function _0x4DAC398297981B87(): boolean;
/**
 * Only used in R* Script net_char_creator
 *
 * Hash: 0x4E463A3CDEFFFE96 | Since: 1207
 */
export declare function _0x4E463A3CDEFFFE96(): void;
/**
 * Only used in R* Script net_char_creator
 *
 * Hash: 0x4F2D5FA23DB992DE | Since: 1207
 */
export declare function _0x4F2D5FA23DB992DE(): void;
/**
 * No comment provided
 *
 * Hash: 0x4FCBCC0584CD08E9 | Since: 1207
 */
export declare function _0x4FCBCC0584CD08E9(p0: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x6123E2832C34243D | Since: 1207
 */
export declare function _0x6123E2832C34243D(): void;
/**
 * Only used in R* SP Scripts
 *
 * Hash: 0x8312F09C56149A8A | Since: 1207
 */
export declare function _0x8312F09C56149A8A(animalType: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x8BA3D7B1E83EF803 | Since: 1207
 */
export declare function _0x8BA3D7B1E83EF803(p0: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x8C889E4CBB4B2356 | Since: 1207
 */
export declare function _0x8C889E4CBB4B2356(ped: number | IPed): void;
/**
 * statId: see STAT_ID_IS_VALID
 *
 * Hash: 0x91A4F58E01ED5E4C | Since: 1207
 */
export declare function _0x91A4F58E01ED5E4C(value: number): any;
/**
 * No comment provided
 *
 * Hash: 0x99230691875FC218 | Since: 1207
 */
export declare function _0x99230691875FC218(p1: number | string, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x9D0F5D2E1951CD84 | Since: 1207
 */
export declare function _0x9D0F5D2E1951CD84(): number;
/**
 * No comment provided
 *
 * Hash: 0xA2E2BEA4E83F6270 | Since: 1207
 */
export declare function _0xA2E2BEA4E83F6270(p0: number | string): any;
/**
 * Only used in R* SP Scripts
 *
 * Hash: 0xA59590050F80FF2E | Since: 1207
 */
export declare function _0xA59590050F80FF2E(): void;
/**
 * No comment provided
 *
 * Hash: 0xA596890CF55B5095 | Since: 1436
 */
export declare function _0xA596890CF55B5095(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xB112B9262EC29C20 | Since: 1207
 */
export declare function _0xB112B9262EC29C20(p0: number | string): string;
/**
 * No comment provided
 *
 * Hash: 0xB5E2EDA2135E0FA1 | Since: 1207
 */
export declare function _0xB5E2EDA2135E0FA1(p0: number | string): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xBE66B26B6529E943 | Since: 1311
 */
export declare function _0xBE66B26B6529E943(unlockHash: number | string, ped: number | IPed, animalType: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xCA1F0B5103936891 | Since: 1207
 */
export declare function _0xCA1F0B5103936891(p0: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCA41E86545413B5B | Since: 1207
 */
export declare function _0xCA41E86545413B5B(): void;
/**
 * No comment provided
 *
 * Hash: 0xD64DBC8B0424135F | Since: 1207
 */
export declare function _0xD64DBC8B0424135F(ped: number | IPed, animalType: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xDA26263C07CCE9C2 | Since: 1207
 */
export declare function _0xDA26263C07CCE9C2(): void;
/**
 * No comment provided
 *
 * Hash: 0xDDBD560745B1EE98 | Since: 1207
 */
export declare function _0xDDBD560745B1EE98(chalHash: number | string, goalHash: number | string, player: number | string | IPlayer): number;
/**
 * No comment provided
 *
 * Hash: 0xDF95DF488A645CE7 | Since: 1207
 */
export declare function _0xDF95DF488A645CE7(): void;
/**
 * statId: see STAT_ID_IS_VALID
 * Only used in R* SP Scripts
 * _STAT_ID_SET_*
 *
 * Hash: 0xE141F6B40B1E3683 | Since: 1207
 */
export declare function _0xE141F6B40B1E3683(value: number): any;
/**
 * No comment provided
 *
 * Hash: 0xE5A680A5D8B1F687 | Since: 1207
 */
export declare function _0xE5A680A5D8B1F687(): void;
/**
 * No comment provided
 *
 * Hash: 0xF21A5D66874FCEDD | Since: 1207
 */
export declare function _0xF21A5D66874FCEDD(p1: number | string, p2: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xF2B5ABDE09958689 | Since: 1311
 */
export declare function _0xF2B5ABDE09958689(unlockHash: number | string, ped1: number | IPed, ped2: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xF8181B5EF156862C | Since: 1207
 */
export declare function _0xF8181B5EF156862C(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xD5910ECF81A2278C | Since: 1207
 */
export declare function trackerDeedStatus(deedType: number, deedHash: number | string, missionStatus: number): any;
/**
 * Related to animal tagging
 *
 * Hash: 0x90E9A5DADBABC918 | Since: 1355
 */
export declare function statAddAnimalSampleTarget(animalType: number | string): void;
/**
 * Calculation: (value / 1000) / 60 % 60
 *
 * Hash: 0x1E7384AB5D4F4581 | Since: 1207
 */
export declare function statCalculateCooldown(value: number): number;
/**
 * No comment provided
 *
 * Hash: 0x831BF01C56149A8A | Since: 1207
 */
export declare function statCarriedSatchelItemFromPed(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x7C2ABF6E556B21FC | Since: 1207
 */
export declare function statDonateIncrementItem(item: number, slot: number): void;
/**
 * statId: see STAT_ID_IS_VALID
 *
 * Hash: 0xBD861AE8A5181ED7 | Since: 1207
 */
export declare function statIdDecrementInt(value: number): any;
/**
 * statId: see STAT_ID_IS_VALID
 *
 * Hash: 0x4A47E38EA3D60939 | Since: 1207
 */
export declare function statIdIncrementFloat(value: number): any;
/**
 * Increments an integer stat by the supplied amount. `statId` is not a raw stat hash; it is a stat-id buffer/struct in the same format used by STAT_ID_IS_VALID. In common usage this is an 8-byte buffer with the stat hash written as int32 at offset 0 and 0 written as int32 at offset 4. Use this for counter-style stats, for example incrementing FISH_ESCAPED by 1. The first argument is not a plain integer stat hash; it is a stat-id buffer.
 *
 * Hash: 0x6A0184E904CDF25E | Since: 1207
 */
export declare function statIdIncrementInt(amount: number): any;
/**
 * No comment provided
 *
 * Hash: 0xDA26263C87CCE9C1 | Since: 1207
 */
export declare function statItemFishCaught(fish: number | IPed, weight: number, category: number | string, subcategory: number | string): void;
/**
 * statId: see STAT_ID_IS_VALID
 *
 * Hash: 0x5420D398A42917FC | Since: 1311
 */
export declare function statPheromoneCooldownLegendaryAnimal(entity: number | IEntity): [boolean, any];
