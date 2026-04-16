import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x808712E428F697B8 | Since: 1232
 */
export function chalAchievementGetProgressInt(p0: number | string, p1: number | string): number {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    return ChalAchievementGetProgressInt(p0, p1);
}

/**
 * No comment provided
 * 
 * Hash: 0x77B97A827739D434 | Since: 1232
 */
export function chalAchievementIsComplete(p0: number | string, p1: number | string): boolean {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    return ChalAchievementIsComplete(p0, p1);
}

/**
 * No comment provided
 * 
 * Hash: 0x86922D8C02FB7703 | Since: 1207
 */
export function chalAddGoalProgressFloat(chalHash: number | string, goalHash: number | string, value: number): void {
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    if (typeof goalHash === 'string') goalHash = GetHashKey(goalHash)
    ChalAddGoalProgressFloat(chalHash, goalHash, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x86922D8C02FB7705 | Since: 1232
 */
export function chalAddGoalProgressFloatByScoreId(p0: number | string, value: number): void {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    ChalAddGoalProgressFloatByScoreId(p0, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xDDBD560745B1EE9A | Since: 1207
 */
export function chalAddGoalProgressInt(chalHash: number | string, goalHash: number | string, value: number): void {
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    if (typeof goalHash === 'string') goalHash = GetHashKey(goalHash)
    ChalAddGoalProgressInt(chalHash, goalHash, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xDDBD560745B1EE9C | Since: 1207
 */
export function chalAddGoalProgressIntByScoreId(p0: number | string, value: number): void {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    ChalAddGoalProgressIntByScoreId(p0, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x58CB53DB63F84DEA | Since: 1207
 */
export function chalGetMaxRanks(chalHash: number | string): number {
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    return ChalGetMaxRanks(chalHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x58CB53DB63F84DE9 | Since: 1207
 */
export function chalGetNumRanksCompleted(chalHash: number | string): number {
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    return ChalGetNumRanksCompleted(chalHash);
}

/**
 * https://github.com/femga/rdr3_discoveries/blob/master/AI/EVENTS/challenge_goals.lua
 * 
 * Hash: 0x04DAC3929796EB87 | Since: 1207
 */
export function chalIsGoalActive(chalHash: number | string, goalHash: number | string): boolean {
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    if (typeof goalHash === 'string') goalHash = GetHashKey(goalHash)
    return ChalIsGoalActive(chalHash, goalHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x97E18E7C098626DE | Since: 1207
 */
export function chalMissionAddGoalProgressInt(missionHash: number | string, goalHash: number | string, value: number): void {
    if (typeof missionHash === 'string') missionHash = GetHashKey(missionHash)
    if (typeof goalHash === 'string') goalHash = GetHashKey(goalHash)
    ChalMissionAddGoalProgressInt(missionHash, goalHash, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x0B0576DD3A75E58D | Since: 1207
 */
export function chalMissionGetNumGoals(missionHash: number | string): number {
    if (typeof missionHash === 'string') missionHash = GetHashKey(missionHash)
    return ChalMissionGetNumGoals(missionHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xA785A52B59B7E7B2 | Since: 1207
 */
export function chalMissionGetNumGoalsComplete(missionHash: number | string): number {
    if (typeof missionHash === 'string') missionHash = GetHashKey(missionHash)
    return ChalMissionGetNumGoalsComplete(missionHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xC0BB774787BBF301 | Since: 1207
 */
export function chalMissionIsGoalComplete(missionHash: number | string, goalHash: number | string): boolean {
    if (typeof missionHash === 'string') missionHash = GetHashKey(missionHash)
    if (typeof goalHash === 'string') goalHash = GetHashKey(goalHash)
    return ChalMissionIsGoalComplete(missionHash, goalHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x4ABF7E4DB6279E8F | Since: 1207
 */
export function chalNetStartChal(chalHash: number | string): void {
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    ChalNetStartChal(chalHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xC3FCB47344DCB638 | Since: 1207
 */
export function chalNetStartGoal(chalHash: number | string, goalHash: number | string): void {
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    if (typeof goalHash === 'string') goalHash = GetHashKey(goalHash)
    ChalNetStartGoal(chalHash, goalHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x43B0163154A50C86 | Since: 1207
 */
export function chalNetStopChal(chalHash: number | string): void {
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    ChalNetStopChal(chalHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x00CE6A93324A590B | Since: 1207
 */
export function chalNetStopGoal(chalHash: number | string, goalHash: number | string): void {
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    if (typeof goalHash === 'string') goalHash = GetHashKey(goalHash)
    ChalNetStopGoal(chalHash, goalHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xF63DF9EE16393343 | Since: 1436
 */
export function chalSetGoalDisabled(chalHash: number | string, goalHash: number | string, disabled: boolean): void {
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    if (typeof goalHash === 'string') goalHash = GetHashKey(goalHash)
    ChalSetGoalDisabled(chalHash, goalHash, disabled);
}

/**
 * No comment provided
 * 
 * Hash: 0xDDBD560745B1EE9B | Since: 1207
 */
export function chalSetGoalProgressInt(chalHash: number | string, goalHash: number | string, value: number): void {
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    if (typeof goalHash === 'string') goalHash = GetHashKey(goalHash)
    ChalSetGoalProgressInt(chalHash, goalHash, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xB2A38826E5886E83 | Since: 1207
 */
export function trackerDeedStarted(p0: number | string): void {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    StatstrackerDeedStarted(p0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x01F4D242765C6B24 | Since: 1207
 */
export function trackerIsInitialized(p0: number | string): boolean {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    return StatstrackerIsInitialized(p0);
}

/**
 * No comment provided
 * 
 * Hash: 0x6B1044FDC2B09101 | Since: 1207
 */
export function statAddBountyTarget(unlockHash: number | string, ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof unlockHash === 'string') unlockHash = GetHashKey(unlockHash)
    StatAddBountyTarget(unlockHash, _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x262EF7CF49CF1EB9 | Since: 1207
 */
export function statBountyCaptured(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    StatBountyCaptured(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xB22F05732F72F70C | Since: 1207
 */
export function statBountyEscaped(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    StatBountyEscaped(_ped);
}

/**
 * statId: see STAT_ID_IS_VALID
 * 
 * Hash: 0x11B5E6D2AE73F48F | Since: 1207
 */
export function statIdGetBool(): [boolean, any, boolean] {
    return StatIdGetBool();
}

/**
 * statId: see STAT_ID_IS_VALID
 * 
 * Hash: 0x8B0FACEFC36C824C | Since: 1207
 */
export function statIdGetDate(): [boolean, any, any] {
    return StatIdGetDate();
}

/**
 * statId: see STAT_ID_IS_VALID
 * 
 * Hash: 0xD7AE6C9C9C6AC54D | Since: 1207
 */
export function statIdGetFloat(): [boolean, any, number] {
    return StatIdGetFloat();
}

/**
 * statId: see STAT_ID_IS_VALID
 * 
 * Hash: 0x767FBC2AC802EF3E | Since: 1207
 */
export function statIdGetInt(): [boolean, any, number] {
    return StatIdGetInt();
}

/**
 * struct StatId
 * {
 * alignas(8) Hash BaseId;
 * alignas(8) Hash PermutationId;
 * }
 * 
 * Hash: 0xC48FE1971C9743FF | Since: 1207
 */
export function statIdIsValid(): [boolean, any] {
    return StatIdIsValid();
}

/**
 * statId: see STAT_ID_IS_VALID
 * 
 * Hash: 0x3B5107353267D7A1 | Since: 1207
 */
export function statIdSetBool(value: boolean): [boolean, any] {
    return StatIdSetBool(value, false);
}

/**
 * statId: see STAT_ID_IS_VALID
 * 
 * Hash: 0x1FAE9B2FAA2DFE06 | Since: 1207
 */
export function statIdSetDate(): [boolean, any, any] {
    return StatIdSetDate(false);
}

/**
 * statId: see STAT_ID_IS_VALID
 * 
 * Hash: 0x481BDF6A10C5EF68 | Since: 1207
 */
export function statIdSetFloat(value: number): [boolean, any] {
    return StatIdSetFloat(value, false);
}

/**
 * statId: see STAT_ID_IS_VALID
 * 
 * Hash: 0x05060A54834F2382 | Since: 1207
 */
export function statIdSetGxtLabel(label: string): [boolean, any] {
    return StatIdSetGxtLabel(label, false);
}

/**
 * statId: see STAT_ID_IS_VALID
 * 
 * Hash: 0xA4DDF5DF95E65EEE | Since: 1207
 */
export function statIdSetInt(value: number): [boolean, any] {
    return StatIdSetInt(value, false);
}

/**
 * statId: see STAT_ID_IS_VALID
 * 
 * Hash: 0x34B22DE38477EDB4 | Since: 1207
 */
export function statIdSetToPosseId(): any {
    return StatIdSetToPosseId();
}

/**
 * No comment provided
 * 
 * Hash: 0x4D31051A4CA83787 | Since: 1311
 */
export function statPhotographTaken(itemset: any): void {
    StatPhotographTaken(itemset);
}

/**
 * No comment provided
 * 
 * Hash: 0xCD0D69C65BB0E8B9 | Since: 1311
 */
export function statRegisterLegendaryAnimalDeed(deedHash: number | string): void {
    if (typeof deedHash === 'string') deedHash = GetHashKey(deedHash)
    StatRegisterLegendaryAnimalDeed(deedHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xBA61BA6205A3F5A8 | Since: 1207
 */
export function weeklyCollectibleGetItemInSet(chalHash: number | string, setIndex: number, itemIndex: number): [boolean, number, number] {
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    return WeeklyCollectibleGetItemInSet(chalHash, setIndex, itemIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x610783F646894D25 | Since: 1207
 */
export function weeklyCollectibleGetItemSetBuyAward(chalHash: number | string, index: number): number {
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    return WeeklyCollectibleGetItemSetBuyAward(chalHash, index);
}

/**
 * No comment provided
 * 
 * Hash: 0xBFFA88522FF0F730 | Since: 1207
 */
export function weeklyCollectibleGetItemSetLabel(chalHash: number | string, index: number): number {
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    return WeeklyCollectibleGetItemSetLabel(chalHash, index);
}

/**
 * No comment provided
 * 
 * Hash: 0x7D675C9DDDB365BE | Since: 1207
 */
export function weeklyCollectibleGetNumItemsInSet(chalHash: number | string, index: number): number {
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    return WeeklyCollectibleGetNumItemsInSet(chalHash, index);
}

/**
 * No comment provided
 * 
 * Hash: 0x8F5317729F791D10 | Since: 1207
 */
export function weeklyCollectibleGetNumSets(chalHash: number | string): number {
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    return WeeklyCollectibleGetNumSets(chalHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x025E98E317652CDD | Since: 1207
 */
export function _0x025E98E317652CDD(): void {
    Citizen.invokeNative('0x025E98E317652CDD', 0);
}

/**
 * statId: see STAT_ID_IS_VALID
 * 
 * Hash: 0x0FEE2561120F3333 | Since: 1207
 */
export function _0x0FEE2561120F3333(): any {
    return Citizen.invokeNative('0x0FEE2561120F3333');
}

/**
 * No comment provided
 * 
 * Hash: 0x218F7710A139D012 | Since: 1207
 */
export function _0x218F7710A139D012(): void {
    Citizen.invokeNative('0x218F7710A139D012');
}

/**
 * statId: see STAT_ID_IS_VALID
 * 
 * Hash: 0x302E71C1D9EE75B9 | Since: 1207
 */
export function _0x302E71C1D9EE75B9(p1: number | string): [boolean, any, number] {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    return Citizen.invokeNative('0x302E71C1D9EE75B9', p1);
}

/**
 * No comment provided
 * 
 * Hash: 0x378D3B1B11D9385B | Since: 1207
 */
export function _0x378D3B1B11D9385B(): void {
    Citizen.invokeNative('0x378D3B1B11D9385B', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x3AEABAE3F3C7600C | Since: 1207
 */
export function _0x3AEABAE3F3C7600C(): boolean {
    return Citizen.invokeNative('0x3AEABAE3F3C7600C');
}

/**
 * No comment provided
 * 
 * Hash: 0x3EB2791A1FBC8A42 | Since: 1207
 */
export function _0x3EB2791A1FBC8A42(statItem: number | string): void {
    if (typeof statItem === 'string') statItem = GetHashKey(statItem)
    Citizen.invokeNative('0x3EB2791A1FBC8A42', statItem, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x3F6FD87D2030ADC6 | Since: 1207
 */
export function _0x3F6FD87D2030ADC6(): string {
    return Citizen.invokeNative('0x3F6FD87D2030ADC6');
}

/**
 * Only used in R* SP Scripts
 * 
 * Hash: 0x4DAC398297981B87 | Since: 1207
 */
export function _0x4DAC398297981B87(): boolean {
    return Citizen.invokeNative('0x4DAC398297981B87', 0);
}

/**
 * Only used in R* Script net_char_creator
 * 
 * Hash: 0x4E463A3CDEFFFE96 | Since: 1207
 */
export function _0x4E463A3CDEFFFE96(): void {
    Citizen.invokeNative('0x4E463A3CDEFFFE96');
}

/**
 * Only used in R* Script net_char_creator
 * 
 * Hash: 0x4F2D5FA23DB992DE | Since: 1207
 */
export function _0x4F2D5FA23DB992DE(): void {
    Citizen.invokeNative('0x4F2D5FA23DB992DE');
}

/**
 * No comment provided
 * 
 * Hash: 0x4FCBCC0584CD08E9 | Since: 1207
 */
export function _0x4FCBCC0584CD08E9(p0: number | string): void {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    Citizen.invokeNative('0x4FCBCC0584CD08E9', p0);
}

/**
 * No comment provided
 * 
 * Hash: 0x6123E2832C34243D | Since: 1207
 */
export function _0x6123E2832C34243D(): void {
    Citizen.invokeNative('0x6123E2832C34243D', undefined, undefined, undefined, undefined, undefined);
}

/**
 * Only used in R* SP Scripts
 * 
 * Hash: 0x8312F09C56149A8A | Since: 1207
 */
export function _0x8312F09C56149A8A(animalType: number | string): void {
    if (typeof animalType === 'string') animalType = GetHashKey(animalType)
    Citizen.invokeNative('0x8312F09C56149A8A', animalType);
}

/**
 * No comment provided
 * 
 * Hash: 0x8BA3D7B1E83EF803 | Since: 1207
 */
export function _0x8BA3D7B1E83EF803(p0: number | string): number {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    return Citizen.invokeNative('0x8BA3D7B1E83EF803', p0);
}

/**
 * No comment provided
 * 
 * Hash: 0x8C889E4CBB4B2356 | Since: 1207
 */
export function _0x8C889E4CBB4B2356(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x8C889E4CBB4B2356', undefined, _ped);
}

/**
 * statId: see STAT_ID_IS_VALID
 * 
 * Hash: 0x91A4F58E01ED5E4C | Since: 1207
 */
export function _0x91A4F58E01ED5E4C(value: number): any {
    return Citizen.invokeNative('0x91A4F58E01ED5E4C', value);
}

/**
 * No comment provided
 * 
 * Hash: 0x99230691875FC218 | Since: 1207
 */
export function _0x99230691875FC218(p1: number | string, pos: Vector3): void {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    Citizen.invokeNative('0x99230691875FC218', undefined, p1, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x9D0F5D2E1951CD84 | Since: 1207
 */
export function _0x9D0F5D2E1951CD84(): number {
    return Citizen.invokeNative('0x9D0F5D2E1951CD84');
}

/**
 * No comment provided
 * 
 * Hash: 0xA2E2BEA4E83F6270 | Since: 1207
 */
export function _0xA2E2BEA4E83F6270(p0: number | string): any {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    return Citizen.invokeNative('0xA2E2BEA4E83F6270', p0);
}

/**
 * Only used in R* SP Scripts
 * 
 * Hash: 0xA59590050F80FF2E | Since: 1207
 */
export function _0xA59590050F80FF2E(): void {
    Citizen.invokeNative('0xA59590050F80FF2E', undefined, false, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xA596890CF55B5095 | Since: 1436
 */
export function _0xA596890CF55B5095(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xA596890CF55B5095', _ped, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xB112B9262EC29C20 | Since: 1207
 */
export function _0xB112B9262EC29C20(p0: number | string): string {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    return Citizen.invokeNative('0xB112B9262EC29C20', p0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xB5E2EDA2135E0FA1 | Since: 1207
 */
export function _0xB5E2EDA2135E0FA1(p0: number | string): [boolean, number] {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    return Citizen.invokeNative('0xB5E2EDA2135E0FA1', p0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xBE66B26B6529E943 | Since: 1311
 */
export function _0xBE66B26B6529E943(unlockHash: number | string, ped: number | IPed, animalType: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof unlockHash === 'string') unlockHash = GetHashKey(unlockHash)
    if (typeof animalType === 'string') animalType = GetHashKey(animalType)
    Citizen.invokeNative('0xBE66B26B6529E943', unlockHash, _ped, animalType);
}

/**
 * No comment provided
 * 
 * Hash: 0xCA1F0B5103936891 | Since: 1207
 */
export function _0xCA1F0B5103936891(p0: number | string): boolean {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    return Citizen.invokeNative('0xCA1F0B5103936891', p0);
}

/**
 * No comment provided
 * 
 * Hash: 0xCA41E86545413B5B | Since: 1207
 */
export function _0xCA41E86545413B5B(): void {
    Citizen.invokeNative('0xCA41E86545413B5B', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD64DBC8B0424135F | Since: 1207
 */
export function _0xD64DBC8B0424135F(ped: number | IPed, animalType: number | string): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    if (typeof animalType === 'string') animalType = GetHashKey(animalType)
    Citizen.invokeNative('0xD64DBC8B0424135F', _ped, animalType);
}

/**
 * No comment provided
 * 
 * Hash: 0xDA26263C07CCE9C2 | Since: 1207
 */
export function _0xDA26263C07CCE9C2(): void {
    Citizen.invokeNative('0xDA26263C07CCE9C2', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xDDBD560745B1EE98 | Since: 1207
 */
export function _0xDDBD560745B1EE98(chalHash: number | string, goalHash: number | string, player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof chalHash === 'string') chalHash = GetHashKey(chalHash)
    if (typeof goalHash === 'string') goalHash = GetHashKey(goalHash)
    return Citizen.invokeNative('0xDDBD560745B1EE98', chalHash, goalHash, _player);
}

/**
 * No comment provided
 * 
 * Hash: 0xDF95DF488A645CE7 | Since: 1207
 */
export function _0xDF95DF488A645CE7(): void {
    Citizen.invokeNative('0xDF95DF488A645CE7');
}

/**
 * statId: see STAT_ID_IS_VALID
 * Only used in R* SP Scripts
 * _STAT_ID_SET_*
 * 
 * Hash: 0xE141F6B40B1E3683 | Since: 1207
 */
export function _0xE141F6B40B1E3683(value: number): any {
    return Citizen.invokeNative('0xE141F6B40B1E3683', value);
}

/**
 * No comment provided
 * 
 * Hash: 0xE5A680A5D8B1F687 | Since: 1207
 */
export function _0xE5A680A5D8B1F687(): void {
    Citizen.invokeNative('0xE5A680A5D8B1F687', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xF21A5D66874FCEDD | Since: 1207
 */
export function _0xF21A5D66874FCEDD(p1: number | string, p2: number | string): void {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    if (typeof p2 === 'string') p2 = GetHashKey(p2)
    Citizen.invokeNative('0xF21A5D66874FCEDD', undefined, p1, p2);
}

/**
 * No comment provided
 * 
 * Hash: 0xF2B5ABDE09958689 | Since: 1311
 */
export function _0xF2B5ABDE09958689(unlockHash: number | string, ped1: number | IPed, ped2: number | IPed): void {
    const _ped1 = ped1 instanceof IPed ? ped1.handle() : ped1;
    const _ped2 = ped2 instanceof IPed ? ped2.handle() : ped2;
    if (typeof unlockHash === 'string') unlockHash = GetHashKey(unlockHash)
    Citizen.invokeNative('0xF2B5ABDE09958689', unlockHash, _ped1, _ped2);
}

/**
 * No comment provided
 * 
 * Hash: 0xF8181B5EF156862C | Since: 1207
 */
export function _0xF8181B5EF156862C(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0xF8181B5EF156862C', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xD5910ECF81A2278C | Since: 1207
 */
export function trackerDeedStatus(deedType: number, deedHash: number | string, missionStatus: number): any {
    if (typeof deedHash === 'string') deedHash = GetHashKey(deedHash)
    return StatstrackerDeedStatus(deedType, deedHash, missionStatus);
}

/**
 * Related to animal tagging
 * 
 * Hash: 0x90E9A5DADBABC918 | Since: 1355
 */
export function statAddAnimalSampleTarget(animalType: number | string): void {
    if (typeof animalType === 'string') animalType = GetHashKey(animalType)
    StatAddAnimalSampleTarget(animalType);
}

/**
 * Calculation: (value / 1000) / 60 % 60
 * 
 * Hash: 0x1E7384AB5D4F4581 | Since: 1207
 */
export function statCalculateCooldown(value: number): number {
    return StatCalculateCooldown(value);
}

/**
 * No comment provided
 * 
 * Hash: 0x831BF01C56149A8A | Since: 1207
 */
export function statCarriedSatchelItemFromPed(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    StatCarriedSatchelItemFromPed(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x7C2ABF6E556B21FC | Since: 1207
 */
export function statDonateIncrementItem(item: number, slot: number): void {
    StatDonateIncrementItem(item, slot, undefined, undefined);
}

/**
 * statId: see STAT_ID_IS_VALID
 * 
 * Hash: 0xBD861AE8A5181ED7 | Since: 1207
 */
export function statIdDecrementInt(value: number): any {
    return StatIdDecrementInt(value);
}

/**
 * statId: see STAT_ID_IS_VALID
 * 
 * Hash: 0x4A47E38EA3D60939 | Since: 1207
 */
export function statIdIncrementFloat(value: number): any {
    return StatIdIncrementFloat(value);
}

/**
 * Increments an integer stat by the supplied amount. `statId` is not a raw stat hash; it is a stat-id buffer/struct in the same format used by STAT_ID_IS_VALID. In common usage this is an 8-byte buffer with the stat hash written as int32 at offset 0 and 0 written as int32 at offset 4. Use this for counter-style stats, for example incrementing FISH_ESCAPED by 1. The first argument is not a plain integer stat hash; it is a stat-id buffer.
 * 
 * Hash: 0x6A0184E904CDF25E | Since: 1207
 */
export function statIdIncrementInt(amount: number): any {
    return StatIdIncrementInt(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xDA26263C87CCE9C1 | Since: 1207
 */
export function statItemFishCaught(fish: number | IPed, weight: number, category: number | string, subcategory: number | string): void {
    const _fish = fish instanceof IPed ? fish.handle() : fish;
    if (typeof category === 'string') category = GetHashKey(category)
    if (typeof subcategory === 'string') subcategory = GetHashKey(subcategory)
    StatItemFishCaught(_fish, weight, category, subcategory);
}

/**
 * statId: see STAT_ID_IS_VALID
 * 
 * Hash: 0x5420D398A42917FC | Since: 1311
 */
export function statPheromoneCooldownLegendaryAnimal(entity: number | IEntity): [boolean, any] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StatPheromoneCooldownLegendaryAnimal(_entity);
}

