import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x2CAFD5E9 | Since: unknown | API-Set: client
 */
export function getWalkMode(): boolean {
    return GetNetworkWalkMode();
}

/**
 * No comment provided
 * 
 * Hash: 0x55188D2D | Since: unknown | API-Set: client
 */
export function setWalkMode(enabled: boolean): void {
    SetNetworkWalkMode(enabled);
}

/**
 * No comment provided
 * 
 * Hash: 0x1E2E3177 | Since: unknown | API-Set: client
 */
export function doesEntityExistWithNetworkId(netId: number): boolean {
    return NetworkDoesEntityExistWithNetworkId(netId);
}

/**
 * Returns the owner ID of the specified entity.
 * 
 * Hash: 0x526FEE31 | Since: unknown | API-Set: shared
 */
export function getEntityOwner(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkGetEntityOwner(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xD45B1FFCCD52FF19 | Since: 1207 | API-Set: unknown
 */
export function activateDamageTrackerOnId(netID: number, toggle: boolean): void {
    ActivateDamageTrackerOnNetworkId(netID, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x69778E7564BADE6D | Since: 1207 | API-Set: unknown
 */
export function canRegisterMissionEntities(ped_amt: number, vehicle_amt: number, object_amt: number, pickup_amt: number): boolean {
    return CanRegisterMissionEntities(ped_amt, vehicle_amt, object_amt, pickup_amt);
}

/**
 * No comment provided
 * 
 * Hash: 0x800DD4721A8B008B | Since: 1207 | API-Set: unknown
 */
export function canRegisterMissionObjects(amount: number): boolean {
    return CanRegisterMissionObjects(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xBCBF4FEF9FA5D781 | Since: 1207 | API-Set: unknown
 */
export function canRegisterMissionPeds(amount: number): boolean {
    return CanRegisterMissionPeds(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xF0460C7BF80011EA | Since: 1207 | API-Set: unknown
 */
export function canRegisterMissionPickups(amount: number): boolean {
    return CanRegisterMissionPickups(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x7277F1F2E085EE74 | Since: 1207 | API-Set: unknown
 */
export function canRegisterMissionVehicles(amount: number): boolean {
    return CanRegisterMissionVehicles(amount);
}

/**
 * Old name: _CLEAR_LAUNCH_PARAMS
 * 
 * Hash: 0x966DD84FB6A46017 | Since: 1207 | API-Set: unknown
 */
export function clearServiceEventArguments(): void {
    ClearServiceEventArguments();
}

/**
 * No comment provided
 * 
 * Hash: 0x3A3D5568AF297CD5 | Since: 1207 | API-Set: unknown
 */
export function cloudDidRequestSucceed(id: number): boolean {
    return CloudDidRequestSucceed(id);
}

/**
 * No comment provided
 * 
 * Hash: 0x4C61B39930D045DA | Since: 1207 | API-Set: unknown
 */
export function cloudHasRequestCompleted(id: number): boolean {
    return CloudHasRequestCompleted(id);
}

/**
 * Takes the specified time and writes it to the structure specified in the second argument.
 * 
 * struct date_time
 * {
 * int year;
 * int PADDING1;
 * int month;
 * int PADDING2;
 * int day;
 * int PADDING3;
 * int hour;
 * int PADDING4;
 * int minute;
 * int PADDING5;
 * int second;
 * int PADDING6;
 * };
 * 
 * Hash: 0xAC97AF97FA68E5D5 | Since: 1207 | API-Set: unknown
 */
export function convertPosixTime(posixTime: number): any {
    return ConvertPosixTime(posixTime);
}

/**
 * No comment provided
 * 
 * Hash: 0x9A73240B49945C76 | Since: 1207 | API-Set: unknown
 */
export function getCloudTimeAsInt(): number {
    return GetCloudTimeAsInt();
}

/**
 * No comment provided
 * 
 * Hash: 0x65E65CA6A0FE59D4 | Since: 1207 | API-Set: unknown
 */
export function getLaunchParamValue(paramName: string): string {
    return GetLaunchParamValue(paramName);
}

/**
 * Always returns 60
 * 
 * Hash: 0xC7BE335216B5EC7C | Since: 1207 | API-Set: unknown
 */
export function getMaxNumObjects(): number {
    return GetMaxNumNetworkObjects();
}

/**
 * Always returns 110
 * 
 * Hash: 0x0C1F7D49C39D2289 | Since: 1207 | API-Set: unknown
 */
export function getMaxNumPeds(): number {
    return GetMaxNumNetworkPeds();
}

/**
 * Always returns 80
 * 
 * Hash: 0xA72835064DD63E4C | Since: 1207 | API-Set: unknown
 */
export function getMaxNumPickups(): number {
    return GetMaxNumNetworkPickups();
}

/**
 * Always returns 40
 * 
 * Hash: 0x0AFCE529F69B21FF | Since: 1207 | API-Set: unknown
 */
export function getMaxNumVehicles(): number {
    return GetMaxNumNetworkVehicles();
}

/**
 * No comment provided
 * 
 * Hash: 0x7A5487FE9FAA6B48 | Since: 1207 | API-Set: unknown
 */
export function getTime(): number {
    return GetNetworkTime();
}

/**
 * No comment provided
 * 
 * Hash: 0x89023FBBF9200E9F | Since: 1207 | API-Set: unknown
 */
export function getTimeAccurate(): number {
    return GetNetworkTimeAccurate();
}

/**
 * No comment provided
 * 
 * Hash: 0x12B6281B6C6706C0 | Since: 1207 | API-Set: unknown
 */
export function getNumCreatedMissionObjects(): number {
    return GetNumCreatedMissionObjects(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xCB215C4B56A7FAE7 | Since: 1207 | API-Set: unknown
 */
export function getNumCreatedMissionPeds(): number {
    return GetNumCreatedMissionPeds(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x0CD9AB83489430EA | Since: 1207 | API-Set: unknown
 */
export function getNumCreatedMissionVehicles(): number {
    return GetNumCreatedMissionVehicles(false);
}

/**
 * p0 appears to be for MP
 * 
 * Hash: 0xAA81B5F10BC43AC2 | Since: 1207 | API-Set: unknown
 */
export function getNumReservedMissionObjects(): number {
    return GetNumReservedMissionObjects(false);
}

/**
 * p0 appears to be for MP
 * 
 * Hash: 0x1F13D5AE5CB17E17 | Since: 1207 | API-Set: unknown
 */
export function getNumReservedMissionPeds(): number {
    return GetNumReservedMissionPeds(false);
}

/**
 * p0 appears to be for MP
 * 
 * Hash: 0xCF3A965906452031 | Since: 1207 | API-Set: unknown
 */
export function getNumReservedMissionVehicles(): number {
    return GetNumReservedMissionVehicles(false);
}

/**
 * Used in Script Function NET_ACE_CLIENT_VERIFY_ENTITY_RESERVATIONS
 * Coords: Slot world position
 * 
 * Old name: _GET_RESERVATIONS_FOR_SLOT_WORLD_POSITION
 * 
 * Hash: 0x5E71E72A94985214 | Since: 1207 | API-Set: unknown
 */
export function getReservedMissionEntitiesInArea(pos: Vector3): [number, number, number, number] {
    return GetReservedMissionEntitiesInArea(pos.x, pos.y, pos.z, false);
}

/**
 * 0 = succeeded
 * 1 = pending
 * 2 = failed
 * 
 * Hash: 0x8BD6C6DEA20E82C6 | Since: 1207 | API-Set: unknown
 */
export function getStatusOfTextureDownload(textureDownloadId: number): number {
    return GetStatusOfTextureDownload(textureDownloadId);
}

/**
 * Subtracts the second argument from the first.
 * 
 * Hash: 0xA2C6FC031D46FFF0 | Since: 1207 | API-Set: unknown
 */
export function getTimeDifference(timeA: number, timeB: number): number {
    return GetTimeDifference(timeA, timeB);
}

/**
 * Adds the first argument to the second.
 * 
 * Hash: 0x017008CCDAD48503 | Since: 1207 | API-Set: unknown
 */
export function getTimeOffset(timeA: number, timeB: number): number {
    return GetTimeOffset(timeA, timeB);
}

/**
 * No comment provided
 * 
 * Hash: 0x07F723401B9D921C | Since: 1207 | API-Set: unknown
 */
export function getUniqueIntForPlayer(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetUniqueIntForPlayer(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x46718ACEEDEAFC84 | Since: 1207 | API-Set: unknown
 */
export function hasTimeStarted(): boolean {
    return HasNetworkTimeStarted();
}

/**
 * No comment provided
 * 
 * Hash: 0x6E192E33AD436366 | Since: 1207 | API-Set: unknown
 */
export function isDamageTrackerActiveOnId(netID: number): boolean {
    return IsDamageTrackerActiveOnNetworkId(netID);
}

/**
 * Old name: _IS_ENTITY_GHOSTED_TO_LOCAL_PLAYER
 * 
 * Hash: 0x21D04D7BC538C146 | Since: 1207 | API-Set: unknown
 */
export function isEntityAGhost(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return IsEntityAGhost(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xA1607996431332DF | Since: 1207 | API-Set: unknown
 */
export function isIdOwnedByParticipant(netId: number): boolean {
    return IsNetworkIdOwnedByParticipant(netId);
}

/**
 * Note: this native was added in build 1311.16
 * 
 * Hash: 0x8FE9EB11EC9CC23A | Since: 1311 | API-Set: unknown
 */
export function isObjectReassignmentInProgress(): boolean {
    return IsObjectReassignmentInProgress();
}

/**
 * No comment provided
 * 
 * Hash: 0xD82CF8E64C8729D8 | Since: 1207 | API-Set: unknown
 */
export function isSphereVisibleToAnotherMachine(): boolean {
    return IsSphereVisibleToAnotherMachine(undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDC3A310219E5DA62 | Since: 1207 | API-Set: unknown
 */
export function isSphereVisibleToPlayer(): boolean {
    return IsSphereVisibleToPlayer(undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * Subtracts the second argument from the first, then returns whether the result is negative.
 * 
 * Hash: 0xCB2CF5148012C8D0 | Since: 1207 | API-Set: unknown
 */
export function isTimeLessThan(timeA: number, timeB: number): boolean {
    return IsTimeLessThan(timeA, timeB);
}

/**
 * Subtracts the first argument from the second, then returns whether the result is negative.
 * 
 * Hash: 0xDE350F8651E4346C | Since: 1207 | API-Set: unknown
 */
export function isTimeMoreThan(timeA: number, timeB: number): boolean {
    return IsTimeMoreThan(timeA, timeB);
}

/**
 * No comment provided
 * 
 * Hash: 0xE1BC73D6815BA361 | Since: 1207 | API-Set: unknown
 */
export function keepIdInFastInstance(netId: number): void {
    KeepNetworkIdInFastInstance(netId, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xB2CEA5105AAC8DDE | Since: 1207 | API-Set: unknown
 */
export function acceptRsInvite(): boolean {
    return NetworkAcceptRsInvite(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xAA6A47A573ABB75A | Since: 1207 | API-Set: unknown
 */
export function accessTunableBool(tunableContext: number | string, tunableName: number | string): boolean {
    if (typeof tunableContext === 'string') tunableContext = GetHashKey(tunableContext)
    if (typeof tunableName === 'string') tunableName = GetHashKey(tunableName)
    return NetworkAccessTunableBool(tunableContext, tunableName);
}

/**
 * No comment provided
 * 
 * Hash: 0x8BE1146DFD5D4468 | Since: 1207 | API-Set: unknown
 */
export function accessTunableInt(tunableContext: number | string, tunableName: number | string): [boolean, number] {
    if (typeof tunableContext === 'string') tunableContext = GetHashKey(tunableContext)
    if (typeof tunableName === 'string') tunableName = GetHashKey(tunableName)
    return NetworkAccessTunableInt(tunableContext, tunableName);
}

/**
 * No comment provided
 * 
 * Hash: 0x3B82ACC3F4B6240C | Since: 1207 | API-Set: unknown
 */
export function actionPlatformInvite(): boolean {
    return NetworkActionPlatformInvite();
}

/**
 * No comment provided
 * 
 * Hash: 0x3FE141FDB990E3D1 | Since: 1207 | API-Set: unknown
 */
export function activityResetToIdle(): void {
    NetworkActivityResetToIdle();
}

/**
 * No comment provided
 * 
 * Hash: 0x9ADAC065D9F6706F | Since: 1207 | API-Set: unknown
 */
export function activitySetCurrent(netPlaylistActivity: number): void {
    NetworkActivitySetCurrent(netPlaylistActivity);
}

/**
 * No comment provided
 * 
 * Hash: 0x8E02D73914064223 | Since: 1207 | API-Set: unknown
 */
export function addFriend(message: string): [boolean, any] {
    return NetworkAddFriend(message);
}

/**
 * No comment provided
 * 
 * Hash: 0x4B05B97BA46F419D | Since: 1207 | API-Set: unknown
 */
export function allowAllEntityFadingForInstances(toggle: boolean): void {
    NetworkAllowAllEntityFadingForInstances(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF3354D6CA46F419D | Since: 1207 | API-Set: unknown
 */
export function allowEntityFadingForInstances(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkAllowEntityFadingForInstances(_entity, toggle);
}

/**
 * Old name: _NETWORK_ALLOW_LOCAL_ENTITY_ATTACHMENT
 * 
 * Hash: 0x267C78C60E806B9A | Since: 1207 | API-Set: unknown
 */
export function allowRemoteAttachmentModification(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkAllowRemoteAttachmentModification(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x57DBA049E110F217 | Since: 1207 | API-Set: unknown
 */
export function areHandlesTheSame(): [boolean, any, any] {
    return NetworkAreHandlesTheSame();
}

/**
 * Old name: _NETWORK_IS_PLAYER_EQUAL_TO_INDEX
 * 
 * Hash: 0x9DE986FC9A87C474 | Since: 1207 | API-Set: unknown
 */
export function arePlayersInSameTutorialSession(player: number | string | IPlayer, index: number): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkArePlayersInSameTutorialSession(_player, index);
}

/**
 * No comment provided
 * 
 * Hash: 0xE404BFF0ABA23CDC | Since: 1207 | API-Set: unknown
 */
export function autoSessionCanSplitSession(): [boolean, number] {
    return NetworkAutoSessionCanSplitSession();
}

/**
 * No comment provided
 * 
 * Hash: 0xBB51299166B844F3 | Since: 1207 | API-Set: unknown
 */
export function autoSessionFinishInstance(): void {
    NetworkAutoSessionFinishInstance();
}

/**
 * No comment provided
 * 
 * Hash: 0xAADED99A6B268A27 | Since: 1207 | API-Set: unknown
 */
export function autoSessionIsAllowedToMerge(): boolean {
    return NetworkAutoSessionIsAllowedToMerge();
}

/**
 * No comment provided
 * 
 * Hash: 0x0E2C3AEE6CE603B7 | Since: 1207 | API-Set: unknown
 */
export function autoSessionIsObjectCreationPaused(): boolean {
    return NetworkAutoSessionIsObjectCreationPaused();
}

/**
 * No comment provided
 * 
 * Hash: 0xC223D299C670413D | Since: 1207 | API-Set: unknown
 */
export function autoSessionSplitSession(playersToTake: number, maxInstancePlayers: number, sessionFlags: number, bucketId: number): boolean {
    return NetworkAutoSessionSplitSession(playersToTake, maxInstancePlayers, sessionFlags, bucketId);
}

/**
 * No comment provided
 * 
 * Hash: 0xFBE782B3165AC8EC | Since: 1207 | API-Set: unknown
 */
export function awardHasReachedMaxclaim(): boolean {
    return NetworkAwardHasReachedMaxclaim(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xAF50DA1A3F8B1BA4 | Since: 1207 | API-Set: unknown
 */
export function canAccessMultiplayer(): [boolean, number] {
    return NetworkCanAccessMultiplayer();
}

/**
 * No comment provided
 * 
 * Hash: 0x1AF5E28E64A76A9F | Since: 1207 | API-Set: unknown
 */
export function canRefreshFriendPage(): boolean {
    return NetworkCanRefreshFriendPage();
}

/**
 * No comment provided
 * 
 * Hash: 0x4EEBC3694E49C572 | Since: 1207 | API-Set: unknown
 */
export function canSessionEnd(): boolean {
    return NetworkCanSessionEnd();
}

/**
 * No comment provided
 * 
 * Hash: 0x246545C37C27A717 | Since: 1207 | API-Set: unknown
 */
export function canViewGamerUserContent(): [boolean, any] {
    return NetworkCanViewGamerUserContent();
}

/**
 * No comment provided
 * 
 * Hash: 0x2A8112A974DE1EF6 | Since: 1207 | API-Set: unknown
 */
export function checkAccessAndAlertIfFail(): boolean {
    return NetworkCheckAccessAndAlertIfFail();
}

/**
 * No comment provided
 * 
 * Hash: 0x83F28CE49FBBFFBA | Since: 1207 | API-Set: unknown
 */
export function checkCommunicationPrivileges(): boolean {
    return NetworkCheckCommunicationPrivileges(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x595F028698072DD9 | Since: 1207 | API-Set: unknown
 */
export function checkUserContentPrivileges(): boolean {
    return NetworkCheckUserContentPrivileges(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD972DF67326F966E | Since: 1207 | API-Set: unknown
 */
export function clearClockTimeOverride(): void {
    NetworkClearClockTimeOverride();
}

/**
 * No comment provided
 * 
 * Hash: 0x6D14CCEE1B40381A | Since: 1207 | API-Set: unknown
 */
export function clearFoundGamers(): void {
    NetworkClearFoundGamers();
}

/**
 * No comment provided
 * 
 * Hash: 0x86E0660E4F5C956D | Since: 1207 | API-Set: unknown
 */
export function clearGetGamerStatus(): void {
    NetworkClearGetGamerStatus();
}

/**
 * No comment provided
 * 
 * Hash: 0xA4484173759749B1 | Since: 1207 | API-Set: unknown
 */
export function clearPlatformInvite(): void {
    NetworkClearPlatformInvite();
}

/**
 * No comment provided
 * 
 * Hash: 0xBBDF066252829606 | Since: 1207 | API-Set: unknown
 */
export function concealPlayer(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    NetworkConcealPlayer(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF9B83B77929D8863 | Since: 1207 | API-Set: unknown
 */
export function didFindGamersSucceed(): boolean {
    return NetworkDidFindGamersSucceed();
}

/**
 * No comment provided
 * 
 * Hash: 0x5AE17C6B0134B7F1 | Since: 1207 | API-Set: unknown
 */
export function didGetGamerStatusSucceed(): boolean {
    return NetworkDidGetGamerStatusSucceed();
}

/**
 * No comment provided
 * 
 * Hash: 0xC505036A35AFD01B | Since: 1207 | API-Set: unknown
 */
export function disableLeaveRemotePedBehind(toggle: boolean): void {
    NetworkDisableLeaveRemotePedBehind(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x407091CF6037118E | Since: 1207 | API-Set: unknown
 */
export function disableProximityMigration(netID: number): void {
    NetworkDisableProximityMigration(netID);
}

/**
 * No comment provided
 * 
 * Hash: 0x236905C700FDB54D | Since: 1207 | API-Set: unknown
 */
export function disableRealtimeMultiplayer(): void {
    NetworkDisableRealtimeMultiplayer();
}

/**
 * Hardcoded to return -1.
 * 
 * Hash: 0xD66C9E72B3CC4982 | Since: 1207 | API-Set: unknown
 */
export function displaynamesFromHandlesStart(): [number, any] {
    return NetworkDisplaynamesFromHandlesStart(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x38CE16C96BD11344 | Since: 1207 | API-Set: unknown
 */
export function doesNetworkIdExist(netID: number): boolean {
    return NetworkDoesNetworkIdExist(netID);
}

/**
 * No comment provided
 * 
 * Hash: 0x85E5F8B9B898B20A | Since: 1207 | API-Set: unknown
 */
export function doesTunableExist(tunableContext: number | string, tunableName: number | string): boolean {
    if (typeof tunableContext === 'string') tunableContext = GetHashKey(tunableContext)
    if (typeof tunableName === 'string') tunableName = GetHashKey(tunableName)
    return NetworkDoesTunableExist(tunableContext, tunableName);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xAEDF1BC1C133D6E3 | Since: 1207 | API-Set: unknown
 */
export function dumpNetIfConfig(): void {
    NetworkDumpNetIfConfig();
}

/**
 * No comment provided
 * 
 * Hash: 0xD0AFAFF5A51D72F7 | Since: 1207 | API-Set: unknown
 */
export function endTutorialSession(): void {
    NetworkEndTutorialSession();
}

/**
 * No comment provided
 * 
 * Hash: 0x4CACA84440FA26F6 | Since: 1207 | API-Set: unknown
 */
export function getAssistedDamageOfEntity(player: number | string | IPlayer, entity: number | IEntity): [boolean, number] {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkGetAssistedDamageOfEntity(_player, _entity);
}

/**
 * Old name: _NETWORK_GET_AVERAGE_LATENCY_FOR_PLAYER
 * 
 * Hash: 0xD414BE129BB81B32 | Since: 1207 | API-Set: unknown
 */
export function getAverageLatency(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetAverageLatency(_player);
}

/**
 * Old name: _NETWORK_GET_AVERAGE_PACKET_LOSS_FOR_PLAYER
 * 
 * Hash: 0x350C23949E43686C | Since: 1207 | API-Set: unknown
 */
export function getAveragePacketLoss(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetAveragePacketLoss(_player);
}

/**
 * Same as NETWORK_GET_AVERAGE_LATENCY (0xD414BE129BB81B32)
 * 
 * Old name: _NETWORK_GET_AVERAGE_LATENCY_FOR_PLAYER_2
 * 
 * Hash: 0x0E3A041ED6AC2B45 | Since: 1207 | API-Set: unknown
 */
export function getAveragePing(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetAveragePing(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x7A1ADEEF01740A24 | Since: 1207 | API-Set: unknown
 */
export function getDestroyerOfNetworkId(netId: number): [number, number] {
    return NetworkGetDestroyerOfNetworkId(netId);
}

/**
 * Hardcoded to return zero.
 * 
 * Hash: 0x58CC181719256197 | Since: 1207 | API-Set: unknown
 */
export function getDisplaynamesFromHandles(): number {
    return NetworkGetDisplaynamesFromHandles(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCE4E5D9B0A4FF560 | Since: 1207 | API-Set: unknown
 */
export function getEntityFromNetworkId(netId: number): number {
    return NetworkGetEntityFromNetworkId(netId);
}

/**
 * No comment provided
 * 
 * Hash: 0xC7827959479DCC78 | Since: 1207 | API-Set: unknown
 */
export function getEntityIsNetworked(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkGetEntityIsNetworked(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x42B2DAA6B596F5F8 | Since: 1207 | API-Set: unknown
 */
export function getEntityKillerOfPlayer(player: number | string | IPlayer): [number, number] {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetEntityKillerOfPlayer(_player);
}

/**
 * Always returns a null string.
 * 
 * Hash: 0x426141162EBE5CDB | Since: 1207 | API-Set: unknown
 */
export function getGamertagFromHandle(): [string, any] {
    return NetworkGetGamertagFromHandle();
}

/**
 * No comment provided
 * 
 * Hash: 0x225640E09EFFDC3F | Since: 1207 | API-Set: unknown
 */
export function getGameMode(): number {
    return NetworkGetGameMode();
}

/**
 * No comment provided
 * 
 * Hash: 0x11A7ADCD629E170F | Since: 1207 | API-Set: unknown
 */
export function getGlobalClock(): [boolean, number, number, number] {
    return NetworkGetGlobalClock();
}

/**
 * No comment provided
 * 
 * Hash: 0x6D03BFBD643B2A02 | Since: 1207 | API-Set: unknown
 */
export function getGlobalMultiplayerClock(): [number, number, number] {
    return NetworkGetGlobalMultiplayerClock();
}

/**
 * Old name: _NETWORK_GET_OLDEST_RESEND_COUNT_FOR_PLAYER
 * 
 * Hash: 0x52C1EADAF7B10302 | Since: 1207 | API-Set: unknown
 */
export function getHighestReliableResendCount(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetHighestReliableResendCount(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x1D6A14F1F9A736FC | Since: 1436 | API-Set: unknown
 */
export function getHostOfScript(scriptName: string): number | string {
    return NetworkGetHostOfScript(scriptName, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xC7B4D79B01FA7A5C | Since: 1232 | API-Set: unknown
 */
export function getHostOfThisScript(): number | string {
    return NetworkGetHostOfThisScript();
}

/**
 * No comment provided
 * 
 * Hash: 0xB4A25351D79B444C | Since: 1207 | API-Set: unknown
 */
export function getHostOfThread(threadId: number): number | string {
    return NetworkGetHostOfThread(threadId);
}

/**
 * No comment provided
 * 
 * Hash: 0x638A3A81733086DB | Since: 1207 | API-Set: unknown
 */
export function getInstanceIdOfThisScript(): number {
    return NetworkGetInstanceIdOfThisScript();
}

/**
 * No comment provided
 * 
 * Hash: 0xE86051786B66CD8E | Since: 1207 | API-Set: unknown
 */
export function getLocalHandle(): any {
    return NetworkGetLocalHandle();
}

/**
 * Seems to always return 0, but it's used in quite a few loops.
 * 
 * `for (num3 = 0; num3 < NETWORK::0xCCD8C02D(); num3++)`
 * {
 * `if (NETWORK::NETWORK_IS_PARTICIPANT_ACTIVE(PLAYER::0x98F3B274(num3)) != 0)`
 * {
 * `var num5 = NETWORK::NETWORK_GET_PLAYER_INDEX(PLAYER::0x98F3B274(num3));`
 * 
 * Hash: 0xA6C90FBC38E395EE | Since: 1207 | API-Set: unknown
 */
export function getMaxNumParticipants(): number {
    return NetworkGetMaxNumParticipants();
}

/**
 * No comment provided
 * 
 * Hash: 0xA11700682F3AD45C | Since: 1207 | API-Set: unknown
 */
export function getNetworkIdFromEntity(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkGetNetworkIdFromEntity(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x42871327315EDAE8 | Since: 1207 | API-Set: unknown
 */
export function getNetworkIdFromRopeId(ropeId: number): number {
    return NetworkGetNetworkIdFromRopeId(ropeId);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x6FD992C4A1C1B986 | Since: 1207 | API-Set: unknown
 */
export function getNetStatisticsInfo(): void {
    NetworkGetNetStatisticsInfo();
}

/**
 * Hardcoded to return zero.
 * 
 * ==== PS4 specific info ====
 * 
 * Returns some sort of unavailable reason:
 * -1 = REASON_INVALID
 * 0 = REASON_OTHER
 * 1 = REASON_SYSTEM_UPDATE
 * 2 = REASON_GAME_UPDATE
 * 3 = REASON_SIGNED_OUT
 * 4 = REASON_AGE
 * 5 = REASON_CONNECTION
 * 
 * =================================
 * 
 * Hash: 0x74FB3E29E6D10FA9 | Since: 1207 | API-Set: unknown
 */
export function getNpUnavailableReason(): number {
    return NetworkGetNpUnavailableReason();
}

/**
 * Returns the amount of players connected in the current session. Only works when connected to a session/server.
 * 
 * Hash: 0xA4A79DD2D9600654 | Since: 1207 | API-Set: unknown
 */
export function getNumConnectedPlayers(): number {
    return NetworkGetNumConnectedPlayers();
}

/**
 * No comment provided
 * 
 * Hash: 0x18D0456E86604654 | Since: 1207 | API-Set: unknown
 */
export function getNumParticipants(): number {
    return NetworkGetNumParticipants();
}

/**
 * No comment provided
 * 
 * Hash: 0x3658E8CD94FC121A | Since: 1207 | API-Set: unknown
 */
export function getNumScriptParticipants(scriptName: string, instanceId: number, position: number | string): number {
    if (typeof position === 'string') position = GetHashKey(position)
    return NetworkGetNumScriptParticipants(scriptName, instanceId, position);
}

/**
 * Old name: _NETWORK_GET_NUM_UNACKED_FOR_PLAYER
 * 
 * Hash: 0xFF8FCF9FFC458A1C | Since: 1207 | API-Set: unknown
 */
export function getNumUnackedReliables(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetNumUnackedReliables(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x1B84DF6AF2A46938 | Since: 1207 | API-Set: unknown
 */
export function getParticipantIndex(index: number): number {
    return NetworkGetParticipantIndex(index);
}

/**
 * No comment provided
 * 
 * Hash: 0xCE5F689CF5A0A49D | Since: 1207 | API-Set: unknown
 */
export function getPlayerFromGamerHandle(): [number | string, any] {
    return NetworkGetPlayerFromGamerHandle();
}

/**
 * No comment provided
 * 
 * Hash: 0x24FB80D107371267 | Since: 1207 | API-Set: unknown
 */
export function getPlayerIndex(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetPlayerIndex(_player);
}

/**
 * Returns the Player associated to a given Ped when in an online session.
 * 
 * Hash: 0x6C0E2E0125610278 | Since: 1207 | API-Set: unknown
 */
export function getPlayerIndexFromPed(ped: number | IPed): number | string {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return NetworkGetPlayerIndexFromPed(_ped);
}

/**
 * Hardcoded to return zero.
 * 
 * Hash: 0x2FB53C631A49BE92 | Since: 1207 | API-Set: unknown
 */
export function getPromotionDlgSeenCount(): number {
    return NetworkGetPromotionDlgSeenCount();
}

/**
 * No comment provided
 * 
 * Hash: 0xE30CF56F1EFA5F43 | Since: 1207 | API-Set: unknown
 */
export function getRandomIntRanged(rangeStart: number, rangeEnd: number): number {
    return NetworkGetRandomIntRanged(rangeStart, rangeEnd);
}

/**
 * No comment provided
 * 
 * Hash: 0xFEFCC345CE357453 | Since: 1207 | API-Set: unknown
 */
export function getRecentGamerNames(dataSize: number): [boolean, any] {
    return NetworkGetRecentGamerNames(0, 0, dataSize);
}

/**
 * No comment provided
 * 
 * Hash: 0xEB1A4DD8352EC828 | Since: 1207 | API-Set: unknown
 */
export function getRopeIdFromNetworkId(netId: number): number {
    return NetworkGetRopeIdFromNetworkId(netId);
}

/**
 * No comment provided
 * 
 * Hash: 0x57D158647A6BFABF | Since: 1207 | API-Set: unknown
 */
export function getScriptStatus(): number {
    return NetworkGetScriptStatus();
}

/**
 * No comment provided
 * 
 * Hash: 0x2910669969E9535E | Since: 1207 | API-Set: unknown
 */
export function getThisScriptIsNetworkScript(): boolean {
    return NetworkGetThisScriptIsNetworkScript();
}

/**
 * No comment provided
 * 
 * Hash: 0x5ED0356A0CE3A34F | Since: 1207 | API-Set: unknown
 */
export function getTimeoutTime(): number {
    return NetworkGetTimeoutTime();
}

/**
 * No comment provided
 * 
 * Hash: 0xDB7ABDD203FA3704 | Since: 1207 | API-Set: unknown
 */
export function getTotalNumFriends(): number {
    return NetworkGetTotalNumFriends();
}

/**
 * No comment provided
 * 
 * Hash: 0xCF61D4B4702EE9EB | Since: 1207 | API-Set: unknown
 */
export function getTotalNumPlayers(): number {
    return NetworkGetTotalNumPlayers();
}

/**
 * No comment provided
 * 
 * Hash: 0x10BD227A753B0D84 | Since: 1436 | API-Set: unknown
 */
export function getTunableCloudCrc(): number {
    return NetworkGetTunableCloudCrc();
}

/**
 * Old name: _NETWORK_GET_UNRELIABLE_RESEND_COUNT_FOR_PLAYER
 * 
 * Hash: 0x3765C3A3E8192E10 | Since: 1207 | API-Set: unknown
 */
export function getUnreliableResendCount(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetUnreliableResendCount(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xD45CB817D7E177D2 | Since: 1207 | API-Set: unknown
 */
export function handleFromFriend(friendIndex: number): any {
    return NetworkHandleFromFriend(friendIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x388EB2B86C73B6B3 | Since: 1207 | API-Set: unknown
 */
export function handleFromPlayer(player: number | string | IPlayer): any {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkHandleFromPlayer(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xBC1D768F2F5D6C05 | Since: 1207 | API-Set: unknown
 */
export function hashFromPlayerHandle(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkHashFromPlayerHandle(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x01BF60A500E28887 | Since: 1207 | API-Set: unknown
 */
export function hasControlOfEntity(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkHasControlOfEntity(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x4D36070FE0215186 | Since: 1207 | API-Set: unknown
 */
export function hasControlOfNetworkId(netId: number): boolean {
    return NetworkHasControlOfNetworkId(netId);
}

/**
 * No comment provided
 * 
 * Hash: 0x5BC9495F0B3B6FA6 | Since: 1207 | API-Set: unknown
 */
export function hasControlOfPickup(pickup: any): boolean {
    return NetworkHasControlOfPickup(pickup);
}

/**
 * No comment provided
 * 
 * Hash: 0x51EABCF2786515AB | Since: 1311 | API-Set: unknown
 */
export function hasControlOfPickupPlacement(): boolean {
    return NetworkHasControlOfPickupPlacement(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB07D3185E11657A5 | Since: 1207 | API-Set: unknown
 */
export function hasEntityBeenRegisteredWithThisThread(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkHasEntityBeenRegisteredWithThisThread(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xD0498AD30E16B6BD | Since: 1207 | API-Set: unknown
 */
export function hasPendingInviteFailure(): boolean {
    return NetworkHasPendingInviteFailure();
}

/**
 * No comment provided
 * 
 * Hash: 0x5D10B3795F3FC886 | Since: 1207 | API-Set: unknown
 */
export function hasReceivedHostBroadcastData(): boolean {
    return NetworkHasReceivedHostBroadcastData();
}

/**
 * No comment provided
 * 
 * Hash: 0xA699957E60D80214 | Since: 1207 | API-Set: unknown
 */
export function hasRosPrivilege(index: number): boolean {
    return NetworkHasRosPrivilege(index);
}

/**
 * No comment provided
 * 
 * Hash: 0x67A5589628E0CFF6 | Since: 1207 | API-Set: unknown
 */
export function hasSocialClubAccount(): boolean {
    return NetworkHasSocialClubAccount();
}

/**
 * Returns whether the signed-in user has valid Rockstar Online Services (ROS) credentials.
 * 
 * Hash: 0x85443FF4C328F53B | Since: 1207 | API-Set: unknown
 */
export function hasValidRosCredentials(): boolean {
    return NetworkHasValidRosCredentials();
}

/**
 * No comment provided
 * 
 * Hash: 0x25CB5A9F37BFD063 | Since: 1207 | API-Set: unknown
 */
export function haveOnlinePrivileges(): boolean {
    return NetworkHaveOnlinePrivileges();
}

/**
 * No comment provided
 * 
 * Hash: 0x8020A73847E0CA7D | Since: 1207 | API-Set: unknown
 */
export function haveRosBannedPriv(): boolean {
    return NetworkHaveRosBannedPriv();
}

/**
 * No comment provided
 * 
 * Hash: 0x8E7CE19219669AEB | Since: 1207 | API-Set: unknown
 */
export function isAimCamActive(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsAimCamActive(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xD7C95D322FF57522 | Since: 1207 | API-Set: unknown
 */
export function isClockTimeOverridden(): boolean {
    return NetworkIsClockTimeOverridden();
}

/**
 * No comment provided
 * 
 * Hash: 0x9A4CF4F48AD77302 | Since: 1207 | API-Set: unknown
 */
export function isCloudAvailable(): boolean {
    return NetworkIsCloudAvailable();
}

/**
 * Old name: _NETWORK_IS_CONNECTION_ENDPOINT_RELAY_SERVER
 * 
 * Hash: 0x16D3D49902F697BB | Since: 1207 | API-Set: unknown
 */
export function isConnectedViaRelay(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsConnectedViaRelay(_player);
}

/**
 * Hardcoded to return false.
 * 
 * Hash: 0x78A9535AF83715C6 | Since: 1207 | API-Set: unknown
 */
export function isCustomUpsellEnabled(): boolean {
    return NetworkIsCustomUpsellEnabled();
}

/**
 * No comment provided
 * 
 * Hash: 0x9C725D149622BFDE | Since: 1207 | API-Set: unknown
 */
export function isFeatureSupported(featureId: number): boolean {
    return NetworkIsFeatureSupported(featureId);
}

/**
 * No comment provided
 * 
 * Hash: 0xDDDF64C91BFCF0AA | Since: 1207 | API-Set: unknown
 */
export function isFindingGamers(): boolean {
    return NetworkIsFindingGamers();
}

/**
 * No comment provided
 * 
 * Hash: 0x1A24A179F9B31654 | Since: 1207 | API-Set: unknown
 */
export function isFriend(): [boolean, any] {
    return NetworkIsFriend();
}

/**
 * No comment provided
 * 
 * Hash: 0x0F10B05DDF8D16E9 | Since: 1207 | API-Set: unknown
 */
export function isGamerInMySession(): [boolean, any] {
    return NetworkIsGamerInMySession();
}

/**
 * No comment provided
 * 
 * Hash: 0x10FAB35428CCC9D7 | Since: 1207 | API-Set: unknown
 */
export function isGameInProgress(): boolean {
    return NetworkIsGameInProgress();
}

/**
 * No comment provided
 * 
 * Hash: 0x6F79B93B0A8E4133 | Since: 1207 | API-Set: unknown
 */
export function isHandleValid(): [boolean, any] {
    return NetworkIsHandleValid();
}

/**
 * If you are host, returns true else returns false.
 * 
 * Hash: 0x8DB296B814EDDA07 | Since: 1207 | API-Set: unknown
 */
export function isHost(): boolean {
    return NetworkIsHost();
}

/**
 * No comment provided
 * 
 * Hash: 0x83CD99A1E6061AB5 | Since: 1207 | API-Set: unknown
 */
export function isHostOfThisScript(): boolean {
    return NetworkIsHostOfThisScript();
}

/**
 * No comment provided
 * 
 * Hash: 0x6CC27C9FA2040220 | Since: 1207 | API-Set: unknown
 */
export function isInMpCutscene(): boolean {
    return NetworkIsInMpCutscene();
}

/**
 * Hardcoded to return false.
 * 
 * Hash: 0x2FC5650B0271CB57 | Since: 1207 | API-Set: unknown
 */
export function isInPlatformParty(): boolean {
    return NetworkIsInPlatformParty();
}

/**
 * Hardcoded to return false.
 * 
 * Hash: 0xFD8B834A8BA05048 | Since: 1207 | API-Set: unknown
 */
export function isInPlatformPartyChat(): boolean {
    return NetworkIsInPlatformPartyChat();
}

/**
 * No comment provided
 * 
 * Hash: 0xCA97246103B63917 | Since: 1207 | API-Set: unknown
 */
export function isInSession(): boolean {
    return NetworkIsInSession();
}

/**
 * No comment provided
 * 
 * Hash: 0x048746E388762E11 | Since: 1207 | API-Set: unknown
 */
export function isInSpectatorMode(): boolean {
    return NetworkIsInSpectatorMode();
}

/**
 * No comment provided
 * 
 * Hash: 0xADA24309FE08DACF | Since: 1207 | API-Set: unknown
 */
export function isInTutorialSession(): boolean {
    return NetworkIsInTutorialSession();
}

/**
 * No comment provided
 * 
 * Hash: 0x6FF8FF40B6357D45 | Since: 1207 | API-Set: unknown
 */
export function isParticipantActive(): boolean {
    return NetworkIsParticipantActive(0);
}

/**
 * Hardcoded to return false.
 * 
 * Hash: 0x0BE73DA6984A6E33 | Since: 1207 | API-Set: unknown
 */
export function isPendingFriend(): [boolean, any] {
    return NetworkIsPendingFriend();
}

/**
 * No comment provided
 * 
 * Hash: 0xFC4165C9165C166F | Since: 1207 | API-Set: unknown
 */
export function isPlatformInvitePending(): boolean {
    return NetworkIsPlatformInvitePending();
}

/**
 * No comment provided
 * 
 * Hash: 0xB8DFD30D6973E135 | Since: 1207 | API-Set: unknown
 */
export function isPlayerActive(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerActive(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x3CA58F6CB7CBD784 | Since: 1207 | API-Set: unknown
 */
export function isPlayerAParticipant(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerAParticipant(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x1AD5B71586B94820 | Since: 1207 | API-Set: unknown
 */
export function isPlayerAParticipantOnScript(p0: number | string | IPlayer): [boolean, any] {
    const _p0 = p0 instanceof IPlayer ? p0.playerId() : p0;
    return NetworkIsPlayerAParticipantOnScript(_p0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x919B3C98ED8292F9 | Since: 1207 | API-Set: unknown
 */
export function isPlayerConcealed(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerConcealed(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x93DC1BE4E1ABE9D1 | Since: 1207 | API-Set: unknown
 */
export function isPlayerConnected(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerConnected(_player);
}

/**
 * Returns true if the passed value is less than 32.
 * 
 * Hash: 0x255A5EF65EDA9167 | Since: 1207 | API-Set: unknown
 */
export function isPlayerIndexValid(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerIndexValid(_player);
}

/**
 * Note: scripts seem to indicate that this was renamed to NETWORK_IS_PLAYER_IN_MP_FAST_INSTANCE
 * 
 * Hash: 0x63F9EE203C3619F2 | Since: 1207 | API-Set: unknown
 */
export function isPlayerInMpCutscene(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerInMpCutscene(_player);
}

/**
 * Hardcoded to return false.
 * 
 * Hash: 0x8FF6059DA26E688A | Since: 1207 | API-Set: unknown
 */
export function isPromotionEnabled(): boolean {
    return NetworkIsPromotionEnabled();
}

/**
 * No comment provided
 * 
 * Hash: 0x1BB50CD340A996E6 | Since: 1207 | API-Set: unknown
 */
export function isResettingPopulation(): boolean {
    return NetworkIsResettingPopulation();
}

/**
 * No comment provided
 * 
 * Hash: 0x9D40DF90FAD26098 | Since: 1207 | API-Set: unknown
 */
export function isScriptActive(scriptName: string): boolean {
    return NetworkIsScriptActive(scriptName, 0, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x1B89BC43B6E69107 | Since: 1207 | API-Set: unknown
 */
export function isScriptActiveByHash(scriptHash: number | string): boolean {
    if (typeof scriptHash === 'string') scriptHash = GetHashKey(scriptHash)
    return NetworkIsScriptActiveByHash(scriptHash, 0, false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD83C2B94E7508980 | Since: 1207 | API-Set: unknown
 */
export function isSessionActive(): boolean {
    return NetworkIsSessionActive();
}

/**
 * No comment provided
 * 
 * Hash: 0x9DE624D2FC4B603F | Since: 1207 | API-Set: unknown
 */
export function isSessionStarted(): boolean {
    return NetworkIsSessionStarted();
}

/**
 * No comment provided
 * 
 * Hash: 0x1077788E268557C2 | Since: 1207 | API-Set: unknown
 */
export function isSignedOnline(): boolean {
    return NetworkIsSignedOnline();
}

/**
 * No comment provided
 * 
 * Hash: 0x0467C11ED88B7D28 | Since: 1207 | API-Set: unknown
 */
export function isTunableCloudRequestPending(): boolean {
    return NetworkIsTunableCloudRequestPending();
}

/**
 * No comment provided
 * 
 * Hash: 0x35F0B98A8387274D | Since: 1207 | API-Set: unknown
 */
export function isTutorialSessionChangePending(): boolean {
    return NetworkIsTutorialSessionChangePending();
}

/**
 * No comment provided
 * 
 * Hash: 0x2302C0264EA58D31 | Since: 1207 | API-Set: unknown
 */
export function preventScriptHostMigration(): void {
    NetworkPreventScriptHostMigration();
}

/**
 * No comment provided
 * 
 * Hash: 0x1F51F367B710A832 | Since: 1207 | API-Set: unknown
 */
export function refreshCurrentFriendPage(): boolean {
    return NetworkRefreshCurrentFriendPage();
}

/**
 * No comment provided
 * 
 * Hash: 0x06FAACD625D80CAA | Since: 1207 | API-Set: unknown
 */
export function registerEntityAsNetworked(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkRegisterEntityAsNetworked(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x3E9B2F01C50DF595 | Since: 1207 | API-Set: unknown
 */
export function registerHostBroadcastVariables(): void {
    NetworkRegisterHostBroadcastVariables(undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3364AA97340CA215 | Since: 1207 | API-Set: unknown
 */
export function registerPlayerBroadcastVariables(): void {
    NetworkRegisterPlayerBroadcastVariables(undefined, undefined, undefined);
}

/**
 * Note: this native was added in build 1311.23, but was only used after build 1436.25
 * 
 * Hash: 0x42FB3B532D526E6C | Since: 1311 | API-Set: unknown
 */
export function requestCloudTunables(): void {
    NetworkRequestCloudTunables();
}

/**
 * No comment provided
 * 
 * Hash: 0xB69317BF5E782347 | Since: 1207 | API-Set: unknown
 */
export function requestControlOfEntity(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkRequestControlOfEntity(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xA670B3662FAFFBD0 | Since: 1207 | API-Set: unknown
 */
export function requestControlOfNetworkId(netId: number): boolean {
    return NetworkRequestControlOfNetworkId(netId);
}

/**
 * No comment provided
 * 
 * Hash: 0x56ED2C48558DAB78 | Since: 1311 | API-Set: unknown
 */
export function requestControlOfPickupPlacement(): boolean {
    return NetworkRequestControlOfPickupPlacement(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE483BB6BE686F632 | Since: 1207 | API-Set: unknown
 */
export function requestJoin(): number {
    return NetworkRequestJoin(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6D206D383BB5F6B1 | Since: 1207 | API-Set: unknown
 */
export function requestRecentGamerNames(playerCount: number): boolean {
    return NetworkRequestRecentGamerNames(0, playerCount);
}

/**
 * flags:
 * enum eSessionRequestOptionFlags
 * {
 * SESSION_REQUEST_OPTION_FLAG_INCLUDE_GANG_MEMBERS = (1 << 1),
 * SESSION_REQUEST_OPTION_FLAG_LEADER_KEEPS_GANG = (1 << 7),
 * };
 * 
 * seamlessType:
 * enum eSeamlessType
 * {
 * SEAMLESS_TYPE_NORMAL,
 * SEAMLESS_TYPE_PVE,
 * SEAMLESS_TYPE_DEV,
 * SEAMLESS_TYPE_NO_SEAMLESS
 * };
 * 
 * Hash: 0x04019AE4956D4393 | Since: 1207 | API-Set: unknown
 */
export function requestSessionSeamless(flags: number, seamlessType: number): [boolean, any] {
    return NetworkRequestSessionSeamless(flags, seamlessType);
}

/**
 * No comment provided
 * 
 * Hash: 0x101F538C25ABB39A | Since: 1207 | API-Set: unknown
 */
export function resetPopulation(): boolean {
    return NetworkResetPopulation(false, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xEA23C49EAA83ACFB | Since: 1207 | API-Set: unknown
 */
export function resurrectLocalPlayer(pos: Vector3, heading: number): void {
    NetworkResurrectLocalPlayer(pos.x, pos.y, pos.z, heading, 0, false, undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xF1B84178F8674195 | Since: 1207 | API-Set: unknown
 */
export function seedRandomNumberGenerator(seed: number): void {
    NetworkSeedRandomNumberGenerator(seed);
}

/**
 * No comment provided
 * 
 * Hash: 0x51F33DBC1A41CBFD | Since: 1207 | API-Set: unknown
 */
export function sessionGetSessionFlags(): number {
    return NetworkSessionGetSessionFlags();
}

/**
 * No comment provided
 * 
 * Hash: 0xF0C0C94B404206FA | Since: 1207 | API-Set: unknown
 */
export function sessionGetSessionType(): number {
    return NetworkSessionGetSessionType();
}

/**
 * No comment provided
 * 
 * Hash: 0xBAFFDE5F953720D9 | Since: 1207 | API-Set: unknown
 */
export function sessionIsAnyRequestInProgress(): boolean {
    return NetworkSessionIsAnyRequestInProgress();
}

/**
 * Checks for session flag 'SF_PRIVATE'
 * 
 * Hash: 0xCEF70AA5B3F89BA1 | Since: 1207 | API-Set: unknown
 */
export function sessionIsPrivate(): boolean {
    return NetworkSessionIsPrivate();
}

/**
 * No comment provided
 * 
 * Hash: 0x8FB7C254CFCBF78E | Since: 1207 | API-Set: unknown
 */
export function sessionIsRequestInProgress(): [boolean, any] {
    return NetworkSessionIsRequestInProgress();
}

/**
 * No comment provided
 * 
 * Hash: 0xCCF878D50F8AB10D | Since: 1207 | API-Set: unknown
 */
export function sessionIsRequestPendingTransition(): [boolean, any] {
    return NetworkSessionIsRequestPendingTransition();
}

/**
 * No comment provided
 * 
 * Hash: 0x2F54B146D3EDCE4D | Since: 1207 | API-Set: unknown
 */
export function sessionIsSessionRequestIdValid(): [boolean, any] {
    return NetworkSessionIsSessionRequestIdValid();
}

/**
 * No comment provided
 * 
 * Hash: 0xF2CBC969C4F090C7 | Since: 1207 | API-Set: unknown
 */
export function sessionIsTransitioning(): boolean {
    return NetworkSessionIsTransitioning();
}

/**
 * No comment provided
 * 
 * Hash: 0x17C21B7319A05047 | Since: 1207 | API-Set: unknown
 */
export function sessionLeaveSession(): boolean {
    return NetworkSessionLeaveSession();
}

/**
 * No comment provided
 * 
 * Hash: 0xECE6A0C1B59CD8BE | Since: 1207 | API-Set: unknown
 */
export function sessionLeftQueueOrRequestedSession(): [boolean, any] {
    return NetworkSessionLeftQueueOrRequestedSession();
}

/**
 * See _NETWORK_SESSION_ADD_SESSION_FLAGS
 * 
 * Hash: 0x78335E12DB0BF961 | Since: 1207 | API-Set: unknown
 */
export function sessionRemoveSessionFlags(flags: number): boolean {
    return NetworkSessionRemoveSessionFlags(flags);
}

/**
 * matchType:
 * enum eMatchType
 * {
 * MATCHTYPE_DEPRECATED,
 * MATCHTYPE_UGCPLAYLIST,
 * MATCHTYPE_UGCMISSION,
 * MATCHTYPE_MINIGAME,
 * MATCHTYPE_SEAMLESS,
 * MATCHTYPE_PRIVATE_DO_NOT_USE
 * };
 * 
 * Hash: 0x309BBEBEA8A3986C | Since: 1207 | API-Set: unknown
 */
export function sessionRequestSessionCompetitive(flags: number, matchType: number, userHash: number): [boolean, any] {
    return NetworkSessionRequestSessionCompetitive(flags, matchType, userHash, 0);
}

/**
 * Session flag 'SF_PRIVATE' is set internally
 * p1 represents max amount of players in private session
 * 
 * Hash: 0x39A8EF7AF29A192C | Since: 1207 | API-Set: unknown
 */
export function sessionRequestSessionPrivate(flags: number, numPlayers: number, userHash: number): [boolean, any] {
    return NetworkSessionRequestSessionPrivate(flags, numPlayers, userHash);
}

/**
 * Equivalent to NETWORK_REQUEST_SESSION_SEAMLESS if userHash == 0.
 * Otherwise it is equivalent to NETWORK_SESSION_REQUEST_SESSION_COMPETITIVE(flags, MATCHTYPE_SEAMLESS, userHash, 0, sessionRequestId);
 * 
 * p1 is unused
 * 
 * Hash: 0x2989E131FDE37E97 | Since: 1207 | API-Set: unknown
 */
export function sessionRequestSessionSeamless(flags: number, seamlessType: number, userHash: number): [boolean, any] {
    return NetworkSessionRequestSessionSeamless(flags, seamlessType, userHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x2C5BD9A43987AA27 | Since: 1207 | API-Set: unknown
 */
export function setCompletedMpIntroFlowOnCurrentSlot(completed: boolean): boolean {
    return NetworkSetCompletedMpIntroFlowOnCurrentSlot(completed);
}

/**
 * if set to true other network players can't see it
 * if set to false other network player can see it
 * =========================================
 * ^^ I attempted this by grabbing an object with GET_ENTITY_PLAYER_IS_FREE_AIMING_AT and setting this naive no matter the toggle he could still see it.
 * 
 * pc or last gen?
 * 
 * ^^ last-gen
 * 
 * Old name: _NETWORK_SET_ENTITY_INVISIBLE_TO_NETWORK
 * 
 * Hash: 0xF1CA12B18AEF5298 | Since: 1207 | API-Set: unknown
 */
export function setEntityOnlyExistsForParticipants(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkSetEntityOnlyExistsForParticipants(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xD785864798258032 | Since: 1207 | API-Set: unknown
 */
export function setEntityRemainsWhenUnnetworked(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkSetEntityRemainsWhenUnnetworked(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF808475FA571D823 | Since: 1207 | API-Set: unknown
 */
export function setFriendlyFireOption(toggle: boolean): void {
    NetworkSetFriendlyFireOption(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9CA5DE655269FEC4 | Since: 1207 | API-Set: unknown
 */
export function setInMpCutscene(): void {
    NetworkSetInMpCutscene(false, false, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x423DE3854BB50894 | Since: 1207 | API-Set: unknown
 */
export function setInSpectatorMode(toggle: boolean, playerPed: number | IPed): void {
    const _playerPed = playerPed instanceof IPed ? playerPed.handle() : playerPed;
    NetworkSetInSpectatorMode(toggle, _playerPed);
}

/**
 * No comment provided
 * 
 * Hash: 0x2D95C7E2D7E07307 | Since: 1207 | API-Set: unknown
 */
export function setLocalPlayerInvincibleTime(time: number): void {
    NetworkSetLocalPlayerInvincibleTime(time);
}

/**
 * No comment provided
 * 
 * Hash: 0x007FF852DCF49DA4 | Since: 1207 | API-Set: unknown
 */
export function setLocalPlayerPendingFastInstanceId(instanceId: number): void {
    NetworkSetLocalPlayerPendingFastInstanceId(instanceId);
}

/**
 * No comment provided
 * 
 * Hash: 0x524FF0AEFF9C3973 | Since: 1207 | API-Set: unknown
 */
export function setLocalPlayerSyncLookAt(toggle: boolean): void {
    NetworkSetLocalPlayerSyncLookAt(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x3B3D11CD9FFCDFC9 | Since: 1207 | API-Set: unknown
 */
export function setMissionFinished(): void {
    NetworkSetMissionFinished();
}

/**
 * No comment provided
 * 
 * Hash: 0x86FD10251A7118A4 | Since: 1207 | API-Set: unknown
 */
export function setMpMissionFlagOnCurrentSlot(enabled: boolean, flagIndex: number): boolean {
    return NetworkSetMpMissionFlagOnCurrentSlot(enabled, flagIndex);
}

/**
 * Old name: _NETWORK_SET_PASSIVE_MODE_OPTION
 * 
 * Hash: 0x9C25E8EC4C535FBD | Since: 1207 | API-Set: unknown
 */
export function setPlayerIsPassive(toggle: boolean): void {
    NetworkSetPlayerIsPassive(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x29FE035D35B8589C | Since: 1207 | API-Set: unknown
 */
export function setRecentGamersEnabled(toggle: boolean): void {
    NetworkSetRecentGamersEnabled(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1DCCACDCFC569362 | Since: 1207 | API-Set: unknown
 */
export function setRichPresence(): any {
    return NetworkSetRichPresence(0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x7AC752103856FB20 | Since: 1207 | API-Set: unknown
 */
export function setScriptReadyForEvents(toggle: boolean): void {
    NetworkSetScriptReadyForEvents(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x1CA59E306ECB80A5 | Since: 1207 | API-Set: unknown
 */
export function setThisScriptIsNetworkScript(maxNumMissionParticipants: number, instanceId: number): void {
    NetworkSetThisScriptIsNetworkScript(maxNumMissionParticipants, false, instanceId);
}

/**
 * Hardcoded to return false.
 * 
 * Hash: 0xDA4B1A479C414FB2 | Since: 1207 | API-Set: unknown
 */
export function shouldShowPromotionDlg(): boolean {
    return NetworkShouldShowPromotionDlg();
}

/**
 * No comment provided
 * 
 * Hash: 0x83FE8D7229593017 | Since: 1207 | API-Set: unknown
 */
export function showAccountUpgradeUi(): void {
    NetworkShowAccountUpgradeUi();
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x6BFF5F84102DF80A | Since: 1207 | API-Set: unknown
 */
export function showChatRestrictionMsc(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    NetworkShowChatRestrictionMsc(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0x859ED1CEA343FCA8 | Since: 1207 | API-Set: unknown
 */
export function showProfileUi(): any {
    return NetworkShowProfileUi();
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x5C497525F803486B | Since: 1207 | API-Set: unknown
 */
export function showPsnUgcRestriction(): void {
    NetworkShowPsnUgcRestriction();
}

/**
 * No comment provided
 * 
 * Hash: 0xF94A0D5B254375DF | Since: 1207 | API-Set: unknown
 */
export function spawnConfigSetFlags(flags: number): void {
    NetworkSpawnConfigSetFlags(flags);
}

/**
 * No comment provided
 * 
 * Hash: 0x59577799F6AE2F34 | Since: 1207 | API-Set: unknown
 */
export function spawnConfigSetGroundToRootOffset(offset: number): void {
    NetworkSpawnConfigSetGroundToRootOffset(offset);
}

/**
 * No comment provided
 * 
 * Hash: 0x0608326F7B98C08D | Since: 1207 | API-Set: unknown
 */
export function spawnConfigSetTuningFloat(p0: number | string): void {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    NetworkSpawnConfigSetTuningFloat(p0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x17E0198B3882C2CB | Since: 1207 | API-Set: unknown
 */
export function startSoloTutorialSession(): void {
    NetworkStartSoloTutorialSession();
}

/**
 * Always returns -1. Seems to be XB1 specific.
 * 
 * Hash: 0xDEB2B99A1AF1A2A6 | Since: 1207 | API-Set: unknown
 */
export function startUserContentPermissionsCheck(): [number, any] {
    return NetworkStartUserContentPermissionsCheck();
}

/**
 * Old name: _NETWORK_SET_VEHICLE_WHEELS_DESTRUCTIBLE
 * 
 * Hash: 0x0C8BC052AE87D744 | Since: 1207 | API-Set: unknown
 */
export function triggerDamageEventForZeroDamage(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    NetworkTriggerDamageEventForZeroDamage(_entity, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xB2AD5D29A99D4B26 | Since: 1207 | API-Set: unknown
 */
export function tryAccessTunableBoolHash(tunableContext: number | string, tunableName: number | string, defaultValue: boolean): boolean {
    if (typeof tunableContext === 'string') tunableContext = GetHashKey(tunableContext)
    if (typeof tunableName === 'string') tunableName = GetHashKey(tunableName)
    return NetworkTryAccessTunableBoolHash(tunableContext, tunableName, defaultValue);
}

/**
 * No comment provided
 * 
 * Hash: 0xA18393089C05E49C | Since: 1207 | API-Set: unknown
 */
export function tryAccessTunableFloatHash(tunableContext: number | string, tunableName: number | string, defaultValue: number): number {
    if (typeof tunableContext === 'string') tunableContext = GetHashKey(tunableContext)
    if (typeof tunableName === 'string') tunableName = GetHashKey(tunableName)
    return NetworkTryAccessTunableFloatHash(tunableContext, tunableName, defaultValue);
}

/**
 * No comment provided
 * 
 * Hash: 0xA25E006B36719774 | Since: 1207 | API-Set: unknown
 */
export function tryAccessTunableIntHash(tunableContext: number | string, tunableName: number | string, defaultValue: number): number {
    if (typeof tunableContext === 'string') tunableContext = GetHashKey(tunableContext)
    if (typeof tunableName === 'string') tunableName = GetHashKey(tunableName)
    return NetworkTryAccessTunableIntHash(tunableContext, tunableName, defaultValue);
}

/**
 * No comment provided
 * 
 * Hash: 0xE31A04513237DC89 | Since: 1207 | API-Set: unknown
 */
export function unregisterNetworkedEntity(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xE31A04513237DC89', _entity);
}

/**
 * gets the entity id of a network id
 * 
 * Hash: 0xBFFEAB45A9A9094A | Since: 1207 | API-Set: unknown
 */
export function netToEnt(netHandle: number): number {
    return NetToEnt(netHandle);
}

/**
 * gets the object id of a network id
 * 
 * Hash: 0xD8515F5FEA14CB3F | Since: 1207 | API-Set: unknown
 */
export function netToObj(netHandle: number): number {
    return NetToObj(netHandle);
}

/**
 * gets the ped id of a network id
 * 
 * Hash: 0xBDCD95FC216A8B3E | Since: 1207 | API-Set: unknown
 */
export function netToPed(netHandle: number): number {
    return NetToPed(netHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0x367B936610BA360C | Since: 1207 | API-Set: unknown
 */
export function netToVeh(netHandle: number): number {
    return NetToVeh(netHandle);
}

/**
 * Returns the network ID of the given object.
 * 
 * Hash: 0x99BFDC94A603E541 | Since: 1207 | API-Set: unknown
 */
export function objToNet(_object: number | IObject): number {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return ObjToNet(__object);
}

/**
 * Return the local Participant ID
 * 
 * Hash: 0x90986E8876CE0A83 | Since: 1207 | API-Set: unknown
 */
export function participantId(): number | string {
    return ParticipantId();
}

/**
 * Return the local Participant ID.
 * 
 * This native is exactly the same as 'PARTICIPANT_ID' native.
 * 
 * Hash: 0x57A3BDDAD8E5AA0A | Since: 1207 | API-Set: unknown
 */
export function participantIdToInt(): number {
    return ParticipantIdToInt();
}

/**
 * Returns the network ID of the given ped.
 * 
 * Hash: 0x0EDEC3C276198689 | Since: 1207 | API-Set: unknown
 */
export function pedToNet(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return PedToNet(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x89D803CD48622150 | Since: 1207 | API-Set: unknown
 */
export function preventMigrationOfEntitiesInFastInstanceForLocalPlayer(toggle: boolean): void {
    PreventMigrationOfEntitiesInFastInstanceForLocalPlayer(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x7182EDDA1EE7DB5A | Since: 1207 | API-Set: unknown
 */
export function preventIdMigration(netId: number): void {
    PreventNetworkIdMigration(netId);
}

/**
 * No comment provided
 * 
 * Hash: 0xE7DDA8BD3BCF751C | Since: 1207 | API-Set: unknown
 */
export function reserveClientMissionObjects(amount: number): void {
    ReserveNetworkClientMissionObjects(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x807E119F80231732 | Since: 1207 | API-Set: unknown
 */
export function reserveClientMissionPeds(amount: number): void {
    ReserveNetworkClientMissionPeds(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x4E5C93BD0C32FBF8 | Since: 1207 | API-Set: unknown
 */
export function reserveMissionObjects(amount: number): void {
    ReserveNetworkMissionObjects(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xB60FEBA45333D36F | Since: 1207 | API-Set: unknown
 */
export function reserveMissionPeds(amount: number): void {
    ReserveNetworkMissionPeds(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x4D40E7D749BC6E6D | Since: 1207 | API-Set: unknown
 */
export function reserveMissionPickups(amount: number): void {
    ReserveNetworkMissionPickups(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x76B02E21ED27A469 | Since: 1207 | API-Set: unknown
 */
export function reserveMissionVehicles(amount: number): void {
    ReserveNetworkMissionVehicles(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0xE0031D3C8F36AB82 | Since: 1207 | API-Set: unknown
 */
export function setEntityVisibleInCutscene(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityVisibleInCutscene(_entity, false, false, 0);
}

/**
 * Old name: _SET_LOCAL_PLAYER_AS_GHOST
 * 
 * Hash: 0x5FFE9B4144F9712F | Since: 1207 | API-Set: unknown
 */
export function setLocalPlayerAsGhost(toggle: boolean): void {
    SetLocalPlayerAsGhost(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE5F773C1A1D9D168 | Since: 1207 | API-Set: unknown
 */
export function setLocalPlayerInvisibleLocally(): void {
    SetLocalPlayerInvisibleLocally(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1065D68947E7B6E | Since: 1207 | API-Set: unknown
 */
export function setLocalPlayerVisibleInCutscene(local: boolean, remote: boolean, instanceId: number): void {
    SetLocalPlayerVisibleInCutscene(local, remote, instanceId);
}

/**
 * No comment provided
 * 
 * Hash: 0xA8A024587329F36A | Since: 1207 | API-Set: unknown
 */
export function setIdAlwaysExistsForPlayer(netId: number, player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetNetworkIdAlwaysExistsForPlayer(netId, _player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE05E81A888FA63C8 | Since: 1207 | API-Set: unknown
 */
export function setIdExistsOnAllMachines(netId: number, toggle: boolean): void {
    SetNetworkIdExistsOnAllMachines(netId, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x9ED3108D6847760A | Since: 1207 | API-Set: unknown
 */
export function setIdStopCloning(networkId: number, bStopCloning: boolean): void {
    SetNetworkIdStopCloning(networkId, bStopCloning);
}

/**
 * No comment provided
 * 
 * Hash: 0xA6928482543022B4 | Since: 1207 | API-Set: unknown
 */
export function setIdVisibleInCutscene(): void {
    SetNetworkIdVisibleInCutscene(undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x12B37D54667DB0B8 | Since: 1207 | API-Set: unknown
 */
export function setPlayerInvisibleLocally(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerInvisibleLocally(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFAA10F1FAFB11AF2 | Since: 1207 | API-Set: unknown
 */
export function setPlayerVisibleLocally(player: number | string | IPlayer, toggle: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerVisibleLocally(_player, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x3448505B6E35262D | Since: 1207 | API-Set: unknown
 */
export function textureDownloadGetName(textureDownloadId: number): string {
    return TextureDownloadGetName(textureDownloadId);
}

/**
 * No comment provided
 * 
 * Hash: 0x487EB90B98E9FB19 | Since: 1207 | API-Set: unknown
 */
export function textureDownloadRelease(textureDownloadId: number): void {
    TextureDownloadRelease(textureDownloadId);
}

/**
 * Returns textureDownloadId
 * 
 * Hash: 0x16160DA74A8E74A2 | Since: 1207 | API-Set: unknown
 */
export function textureDownloadRequest(filePath: string, name: string): [number, any] {
    return TextureDownloadRequest(filePath, name, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xE931354FEA710038 | Since: 1207 | API-Set: unknown
 */
export function ugcClearQueryResults(ugcRequestId: number): void {
    UgcClearQueryResults(ugcRequestId);
}

/**
 * No comment provided
 * 
 * Hash: 0x162C23CA83ED0A62 | Since: 1207 | API-Set: unknown
 */
export function ugcDidDescriptionRequestSucceed(description: number | string): boolean {
    if (typeof description === 'string') description = GetHashKey(description)
    return UgcDidDescriptionRequestSucceed(description);
}

/**
 * No comment provided
 * 
 * Hash: 0x0B6009A90B8495F1 | Since: 1207 | API-Set: unknown
 */
export function ugcDidRequestSucceed(ugcRequestId: number): boolean {
    return UgcDidRequestSucceed(ugcRequestId);
}

/**
 * No comment provided
 * 
 * Hash: 0x40F7E66472DF3E5C | Since: 1207 | API-Set: unknown
 */
export function ugcGetCachedDescription(description: number | string, length: number): string {
    if (typeof description === 'string') description = GetHashKey(description)
    return UgcGetCachedDescription(description, length);
}

/**
 * No comment provided
 * 
 * Hash: 0xEBFA8D50ADDC54C4 | Since: 1207 | API-Set: unknown
 */
export function ugcHasDescriptionRequestFinished(description: number | string): boolean {
    if (typeof description === 'string') description = GetHashKey(description)
    return UgcHasDescriptionRequestFinished(description);
}

/**
 * No comment provided
 * 
 * Hash: 0xA9EB4D606076615D | Since: 1207 | API-Set: unknown
 */
export function ugcHasRequestFinished(ugcRequestId: number): boolean {
    return UgcHasRequestFinished(ugcRequestId);
}

/**
 * No comment provided
 * 
 * Hash: 0x2D5DC831176D0114 | Since: 1207 | API-Set: unknown
 */
export function ugcIsDescriptionRequestInProgress(description: number | string): boolean {
    if (typeof description === 'string') description = GetHashKey(description)
    return UgcIsDescriptionRequestInProgress(description);
}

/**
 * No comment provided
 * 
 * Hash: 0xF53E48461B71EECB | Since: 1207 | API-Set: unknown
 */
export function ugcIsLanguageSupported(languageId: number): boolean {
    return UgcIsLanguageSupported(languageId);
}

/**
 * No comment provided
 * 
 * Hash: 0xF4AC4FA844FD559A | Since: 1207 | API-Set: unknown
 */
export function ugcIsRequestPending(ugcRequestId: number): boolean {
    return UgcIsRequestPending(ugcRequestId);
}

/**
 * No comment provided
 * 
 * Hash: 0xF794765390A6DCA5 | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetContentHasPlayerRecord(index: number): boolean {
    return UgcQueryGetContentHasPlayerRecord(undefined, index);
}

/**
 * No comment provided
 * 
 * Hash: 0x76160E0396142765 | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetContentNum(ugcRequestId: number): number {
    return UgcQueryGetContentNum(ugcRequestId);
}

/**
 * No comment provided
 * 
 * Hash: 0xF8F0705E77A0E705 | Since: 1207 | API-Set: unknown
 */
export function ugcQueryWasForceCancelled(ugcRequestId: number): boolean {
    return UgcQueryWasForceCancelled(ugcRequestId);
}

/**
 * No comment provided
 * 
 * Hash: 0x68103E2247887242 | Since: 1207 | API-Set: unknown
 */
export function ugcReleaseAllCachedDescriptions(): void {
    UgcReleaseAllCachedDescriptions();
}

/**
 * No comment provided
 * 
 * Hash: 0x5A34CD9C3C5BEC44 | Since: 1207 | API-Set: unknown
 */
export function ugcReleaseCachedDescription(description: number | string): boolean {
    if (typeof description === 'string') description = GetHashKey(description)
    return UgcReleaseCachedDescription(description);
}

/**
 * No comment provided
 * 
 * Hash: 0x5E0165278F6339EE | Since: 1207 | API-Set: unknown
 */
export function ugcRequestCachedDescription(description: number | string): number {
    if (typeof description === 'string') description = GetHashKey(description)
    return UgcRequestCachedDescription(description);
}

/**
 * No comment provided
 * 
 * Hash: 0x7FD2990AF016795E | Since: 1207 | API-Set: unknown
 */
export function ugcRequestContentDataFromParams(contentTypeName: string, contentId: string, fileId: number, fileVersion: number, languageId: number): number {
    return UgcRequestContentDataFromParams(contentTypeName, contentId, fileId, fileVersion, languageId);
}

/**
 * No comment provided
 * 
 * Hash: 0xF98DDE0A8ED09323 | Since: 1207 | API-Set: unknown
 */
export function ugcSetQueryDataFromOffline(): void {
    UgcSetQueryDataFromOffline(false);
}

/**
 * No comment provided
 * 
 * Hash: 0x308F96458B7087CC | Since: 1207 | API-Set: unknown
 */
export function ugcTextureDownloadRequest(): [number, any, any] {
    return UgcTextureDownloadRequest(undefined, undefined, undefined, false);
}

/**
 * Returns the network ID of the given vehicle.
 * 
 * Hash: 0xB4C94523F023419C | Since: 1207 | API-Set: unknown
 */
export function vehToNet(vehicle: number | IVehicle): number {
    const _vehicle = vehicle instanceof IVehicle ? vehicle.handle() : vehicle;
    return VehToNet(_vehicle);
}

/**
 * Note: this native was added in build 1311.16
 * 
 * GET_NUM_*
 * 
 * Hash: 0x02B3CDD652B3CDD6 | Since: 1311 | API-Set: unknown
 */
export function _0x02B3CDD652B3CDD6(): number {
    return Citizen.invokeNative('0x02B3CDD652B3CDD6');
}

/**
 * Only used in SP R* Script dominoes_sp: p1 = 0
 * 
 * Hash: 0x02C4C6C2900D84DF | Since: 1207 | API-Set: unknown
 */
export function _0x02C4C6C2900D84DF(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x02C4C6C2900D84DF', _player, undefined);
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x039AD6B57D5179FF | Since: 1311 | API-Set: unknown
 */
export function _0x039AD6B57D5179FF(): number {
    return Citizen.invokeNative('0x039AD6B57D5179FF');
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x039B692B3318FAB6 | Since: 1311 | API-Set: unknown
 */
export function _0x039B692B3318FAB6(): number {
    return Citizen.invokeNative('0x039B692B3318FAB6', false);
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x062842D61D0D53FD | Since: 1311 | API-Set: unknown
 */
export function _0x062842D61D0D53FD(): boolean {
    return Citizen.invokeNative('0x062842D61D0D53FD');
}

/**
 * No comment provided
 * 
 * Hash: 0x0B6B4507AC5EA8B8 | Since: 1207 | API-Set: unknown
 */
export function _0x0B6B4507AC5EA8B8(): boolean {
    return Citizen.invokeNative('0x0B6B4507AC5EA8B8');
}

/**
 * No comment provided
 * 
 * Hash: 0x0BF90CBB6B72977B | Since: 1207 | API-Set: unknown
 */
export function _0x0BF90CBB6B72977B(): void {
    Citizen.invokeNative('0x0BF90CBB6B72977B');
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x0CC28C08613BA9E5 | Since: 1207 | API-Set: unknown
 */
export function _0x0CC28C08613BA9E5(): void {
    Citizen.invokeNative('0x0CC28C08613BA9E5', 0);
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x0D183D8490EE4366 | Since: 1311 | API-Set: unknown
 */
export function _0x0D183D8490EE4366(): void {
    Citizen.invokeNative('0x0D183D8490EE4366', 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x0E54D4DA6018FF8E | Since: 1207 | API-Set: unknown
 */
export function _0x0E54D4DA6018FF8E(): boolean {
    return Citizen.invokeNative('0x0E54D4DA6018FF8E');
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x106CBDD5077DEDE1 | Since: 1311 | API-Set: unknown
 */
export function _0x106CBDD5077DEDE1(): number {
    return Citizen.invokeNative('0x106CBDD5077DEDE1', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x13F592FC3BF0EA84 | Since: 1207 | API-Set: unknown
 */
export function _0x13F592FC3BF0EA84(volume: number, originalWeight: number): void {
    Citizen.invokeNative('0x13F592FC3BF0EA84', volume, false, originalWeight, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1413B6BF27AB7A95 | Since: 1207 | API-Set: unknown
 */
export function _0x1413B6BF27AB7A95(): number {
    return Citizen.invokeNative('0x1413B6BF27AB7A95');
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x160F0CE6D76A39C9 | Since: 1207 | API-Set: unknown
 */
export function _0x160F0CE6D76A39C9(): any {
    return Citizen.invokeNative('0x160F0CE6D76A39C9');
}

/**
 * No comment provided
 * 
 * Hash: 0x16EFB123C4451032 | Since: 1207 | API-Set: unknown
 */
export function _0x16EFB123C4451032(): [boolean, any] {
    return Citizen.invokeNative('0x16EFB123C4451032', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x18B94666CF610AEB | Since: 1207 | API-Set: unknown
 */
export function _0x18B94666CF610AEB(): boolean {
    return Citizen.invokeNative('0x18B94666CF610AEB');
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x19447FCAE97704DC | Since: 1311 | API-Set: unknown
 */
export function _0x19447FCAE97704DC(ctx: number | string, ec: number, ex: boolean, ro: boolean): void {
    if (typeof ctx === 'string') ctx = GetHashKey(ctx)
    Citizen.invokeNative('0x19447FCAE97704DC', ctx, ec, ex, ro);
}

/**
 * No comment provided
 * 
 * Hash: 0x19B52C20B5C4757C | Since: 1207 | API-Set: unknown
 */
export function _0x19B52C20B5C4757C(): void {
    Citizen.invokeNative('0x19B52C20B5C4757C');
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x1E4E097D71D449FB | Since: 1311 | API-Set: unknown
 */
export function _0x1E4E097D71D449FB(): number {
    return Citizen.invokeNative('0x1E4E097D71D449FB', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x232E1EB23CDB313C | Since: 1207 | API-Set: unknown
 */
export function _0x232E1EB23CDB313C(): boolean {
    return Citizen.invokeNative('0x232E1EB23CDB313C');
}

/**
 * _NETWORK_GET_A* - _NETWORK_GET_D*
 * 
 * Hash: 0x236321F1178A5446 | Since: 1207 | API-Set: unknown
 */
export function _0x236321F1178A5446(player: number | string | IPlayer, ped: number | IPed): [boolean, any] {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x236321F1178A5446', _player, _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x2686BD9566B65EDA | Since: 1207 | API-Set: unknown
 */
export function _0x2686BD9566B65EDA(pos: Vector3): void {
    Citizen.invokeNative('0x2686BD9566B65EDA', pos.x, pos.y, pos.z);
}

/**
 * _GET_LAUNCH_PARAM_(RESPOT?)*
 * Name is probably invalid since this native only reads data from parsed entity.
 * 
 * Hash: 0x26A867C0B7A456D1 | Since: 1232 | API-Set: unknown
 */
export function _0x26A867C0B7A456D1(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x26A867C0B7A456D1', _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x271F95E55C663B8B | Since: 1207 | API-Set: unknown
 */
export function _0x271F95E55C663B8B(): any {
    return Citizen.invokeNative('0x271F95E55C663B8B', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x273E04A3A7AD1F2D | Since: 1207 | API-Set: unknown
 */
export function _0x273E04A3A7AD1F2D(): boolean {
    return Citizen.invokeNative('0x273E04A3A7AD1F2D');
}

/**
 * No comment provided
 * 
 * Hash: 0x27B1AE4D8C652F08 | Since: 1207 | API-Set: unknown
 */
export function _0x27B1AE4D8C652F08(): number {
    return Citizen.invokeNative('0x27B1AE4D8C652F08', 0);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x2C4E98DDA475364F | Since: 1207 | API-Set: unknown
 */
export function _0x2C4E98DDA475364F(): void {
    Citizen.invokeNative('0x2C4E98DDA475364F', undefined);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x2CD41AC000E6F611 | Since: 1207 | API-Set: unknown
 */
export function _0x2CD41AC000E6F611(): void {
    Citizen.invokeNative('0x2CD41AC000E6F611');
}

/**
 * No comment provided
 * 
 * Hash: 0x3034C77C79A58880 | Since: 1207 | API-Set: unknown
 */
export function _0x3034C77C79A58880(): void {
    Citizen.invokeNative('0x3034C77C79A58880', false);
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x316FD416C432C761 | Since: 1311 | API-Set: unknown
 */
export function _0x316FD416C432C761(): boolean {
    return Citizen.invokeNative('0x316FD416C432C761');
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x335AF56613CA0F49 | Since: 1311 | API-Set: unknown
 */
export function _0x335AF56613CA0F49(): void {
    Citizen.invokeNative('0x335AF56613CA0F49', 0);
}

/**
 * _NETWORK_A* - _NETWORK_C*
 * 
 * Hash: 0x34BC1E79546BA543 | Since: 1232 | API-Set: unknown
 */
export function _0x34BC1E79546BA543(): void {
    Citizen.invokeNative('0x34BC1E79546BA543', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x3AA0CDC63696166D | Since: 1207 | API-Set: unknown
 */
export function _0x3AA0CDC63696166D(): boolean {
    return Citizen.invokeNative('0x3AA0CDC63696166D', 0);
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x3CBD6565D9C3B133 | Since: 1311 | API-Set: unknown
 */
export function _0x3CBD6565D9C3B133(): void {
    Citizen.invokeNative('0x3CBD6565D9C3B133', 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x3E4A16BC669E71B3 | Since: 1207 | API-Set: unknown
 */
export function _0x3E4A16BC669E71B3(): boolean {
    return Citizen.invokeNative('0x3E4A16BC669E71B3');
}

/**
 * No comment provided
 * 
 * Hash: 0x3E74A687A73979C6 | Since: 1207 | API-Set: unknown
 */
export function _0x3E74A687A73979C6(): void {
    Citizen.invokeNative('0x3E74A687A73979C6', false);
}

/**
 * Stadia only; always returns -1 on other platforms. p0 may be a BOOL.
 * 
 * Hash: 0x3E8CCE6769DB5F34 | Since: 1207 | API-Set: unknown
 */
export function _0x3E8CCE6769DB5F34(): number {
    return Citizen.invokeNative('0x3E8CCE6769DB5F34', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x3F0ABAE38A0515AD | Since: 1207 | API-Set: unknown
 */
export function _0x3F0ABAE38A0515AD(): void {
    Citizen.invokeNative('0x3F0ABAE38A0515AD', 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x3F2EE18A3E294801 | Since: 1207 | API-Set: unknown
 */
export function _0x3F2EE18A3E294801(): number {
    return Citizen.invokeNative('0x3F2EE18A3E294801', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x405DDEFB1F531B18 | Since: 1207 | API-Set: unknown
 */
export function _0x405DDEFB1F531B18(volume: number): void {
    Citizen.invokeNative('0x405DDEFB1F531B18', volume, false, undefined, undefined);
}

/**
 * Note: this native was added in build 1355.30
 * 
 * Hash: 0x40FEDB13870042F1 | Since: 1355 | API-Set: unknown
 */
export function _0x40FEDB13870042F1(): void {
    Citizen.invokeNative('0x40FEDB13870042F1');
}

/**
 * No comment provided
 * 
 * Hash: 0x41452E8A3B9C0C4B | Since: 1207 | API-Set: unknown
 */
export function _0x41452E8A3B9C0C4B(): number {
    return Citizen.invokeNative('0x41452E8A3B9C0C4B');
}

/**
 * Note: this native was added in build 1355.30
 * 
 * Hash: 0x422F9D6D6C7BC290 | Since: 1355 | API-Set: unknown
 */
export function _0x422F9D6D6C7BC290(): void {
    Citizen.invokeNative('0x422F9D6D6C7BC290', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x43CF999205084B4B | Since: 1207 | API-Set: unknown
 */
export function _0x43CF999205084B4B(): void {
    Citizen.invokeNative('0x43CF999205084B4B');
}

/**
 * Returns the entity associated with the given network ID.
 * 
 * Hash: 0x4538EE7C321590BC | Since: 1207 | API-Set: unknown
 */
export function _0x4538EE7C321590BC(networkId: number): number {
    return Citizen.invokeNative('0x4538EE7C321590BC', networkId);
}

/**
 * No comment provided
 * 
 * Hash: 0x455156F47DC6B78C | Since: 1207 | API-Set: unknown
 */
export function _0x455156F47DC6B78C(): void {
    Citizen.invokeNative('0x455156F47DC6B78C', false);
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x4835413EA6F9C9CD | Since: 1311 | API-Set: unknown
 */
export function _0x4835413EA6F9C9CD(): number {
    return Citizen.invokeNative('0x4835413EA6F9C9CD', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x49CF17A564918E8D | Since: 1207 | API-Set: unknown
 */
export function _0x49CF17A564918E8D(): void {
    Citizen.invokeNative('0x49CF17A564918E8D');
}

/**
 * Hardcoded to return zero.
 * 
 * Hash: 0x5133CF81924F1129 | Since: 1207 | API-Set: unknown
 */
export function _0x5133CF81924F1129(): number {
    return Citizen.invokeNative('0x5133CF81924F1129');
}

/**
 * No comment provided
 * 
 * Hash: 0x51951DE06C0D1C40 | Since: 1207 | API-Set: unknown
 */
export function _0x51951DE06C0D1C40(player: number | string | IPlayer, _type: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x51951DE06C0D1C40', _player, _type);
}

/**
 * No comment provided
 * 
 * Hash: 0x564552C6AF1EEAB1 | Since: 1207 | API-Set: unknown
 */
export function _0x564552C6AF1EEAB1(): void {
    Citizen.invokeNative('0x564552C6AF1EEAB1');
}

/**
 * No comment provided
 * 
 * Hash: 0x5759160AC17C13CE | Since: 1207 | API-Set: unknown
 */
export function _0x5759160AC17C13CE(message: string): any {
    return Citizen.invokeNative('0x5759160AC17C13CE', message);
}

/**
 * No comment provided
 * 
 * Hash: 0x5A91BCEF74944E93 | Since: 1207 | API-Set: unknown
 */
export function _0x5A91BCEF74944E93(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x5A91BCEF74944E93', _player, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x5B9C6AC118FD4774 | Since: 1207 | API-Set: unknown
 */
export function _0x5B9C6AC118FD4774(): void {
    Citizen.invokeNative('0x5B9C6AC118FD4774');
}

/**
 * No comment provided
 * 
 * Hash: 0x5CB8B0C846D0F30B | Since: 1207 | API-Set: unknown
 */
export function _0x5CB8B0C846D0F30B(): void {
    Citizen.invokeNative('0x5CB8B0C846D0F30B', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5CD3AAD8FF9ED121 | Since: 1207 | API-Set: unknown
 */
export function _0x5CD3AAD8FF9ED121(): void {
    Citizen.invokeNative('0x5CD3AAD8FF9ED121', undefined);
}

/**
 * _NETWORK_SPAWN_CONFIG_*
 * 
 * Hash: 0x5D3C528B7A7DF836 | Since: 1207 | API-Set: unknown
 */
export function _0x5D3C528B7A7DF836(nsctf: number | string): void {
    if (typeof nsctf === 'string') nsctf = GetHashKey(nsctf)
    Citizen.invokeNative('0x5D3C528B7A7DF836', nsctf);
}

/**
 * No comment provided
 * 
 * Hash: 0x5ED39DA62BEB1330 | Since: 1207 | API-Set: unknown
 */
export function _0x5ED39DA62BEB1330(): any {
    return Citizen.invokeNative('0x5ED39DA62BEB1330', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x5F0E99071582DECA | Since: 1207 | API-Set: unknown
 */
export function _0x5F0E99071582DECA(index: number): any {
    return Citizen.invokeNative('0x5F0E99071582DECA', undefined, index, 0);
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x5F328FC909F0E0FF | Since: 1311 | API-Set: unknown
 */
export function _0x5F328FC909F0E0FF(): boolean {
    return Citizen.invokeNative('0x5F328FC909F0E0FF', 0, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x603469298A4308AF | Since: 1207 | API-Set: unknown
 */
export function _0x603469298A4308AF(): void {
    Citizen.invokeNative('0x603469298A4308AF', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x61BFBAA795E712AD | Since: 1207 | API-Set: unknown
 */
export function _0x61BFBAA795E712AD(): void {
    Citizen.invokeNative('0x61BFBAA795E712AD');
}

/**
 * No comment provided
 * 
 * Hash: 0x64A36BA85CE01A81 | Since: 1207 | API-Set: unknown
 */
export function _0x64A36BA85CE01A81(): any {
    return Citizen.invokeNative('0x64A36BA85CE01A81', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x67CCDF74C4DF7169 | Since: 1207 | API-Set: unknown
 */
export function _0x67CCDF74C4DF7169(): boolean {
    return Citizen.invokeNative('0x67CCDF74C4DF7169');
}

/**
 * No comment provided
 * 
 * Hash: 0x691E4DE5309EAEFC | Since: 1207 | API-Set: unknown
 */
export function _0x691E4DE5309EAEFC(): any {
    return Citizen.invokeNative('0x691E4DE5309EAEFC', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6C27442A225A241A | Since: 1207 | API-Set: unknown
 */
export function _0x6C27442A225A241A(): number {
    return Citizen.invokeNative('0x6C27442A225A241A', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x6C7E04E9DE451789 | Since: 1207 | API-Set: unknown
 */
export function _0x6C7E04E9DE451789(): void {
    Citizen.invokeNative('0x6C7E04E9DE451789');
}

/**
 * _NETWORK_SPAWN_CONFIG_*
 * 
 * Hash: 0x6CEE2E30021DAEC6 | Since: 1207 | API-Set: unknown
 */
export function _0x6CEE2E30021DAEC6(): void {
    Citizen.invokeNative('0x6CEE2E30021DAEC6');
}

/**
 * _NETWORK_GET_A* - _NETWORK_GET_D*
 * 
 * Hash: 0x6CF82A7F65A5AD5F | Since: 1207 | API-Set: unknown
 */
export function _0x6CF82A7F65A5AD5F(ped: number | IPed): [number | string, any] {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x6CF82A7F65A5AD5F', _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x704F92B3AF20D857 | Since: 1207 | API-Set: unknown
 */
export function _0x704F92B3AF20D857(setting: boolean): void {
    Citizen.invokeNative('0x704F92B3AF20D857', setting);
}

/**
 * Only used in R* Script fm_race_controller
 * 
 * Hash: 0x71FA2D1880C48032 | Since: 1207 | API-Set: unknown
 */
export function _0x71FA2D1880C48032(): void {
    Citizen.invokeNative('0x71FA2D1880C48032', false);
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x744BFBB0CA908161 | Since: 1311 | API-Set: unknown
 */
export function _0x744BFBB0CA908161(): number {
    return Citizen.invokeNative('0x744BFBB0CA908161', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x75FC34A2BA345BD1 | Since: 1207 | API-Set: unknown
 */
export function _0x75FC34A2BA345BD1(entity: number | IEntity, player: number | string | IPlayer): [boolean, any] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return Citizen.invokeNative('0x75FC34A2BA345BD1', _entity, _player);
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x7673C0D2C5CDAC55 | Since: 1311 | API-Set: unknown
 */
export function _0x7673C0D2C5CDAC55(): void {
    Citizen.invokeNative('0x7673C0D2C5CDAC55');
}

/**
 * No comment provided
 * 
 * Hash: 0x77B299E8799B1332 | Since: 1207 | API-Set: unknown
 */
export function _0x77B299E8799B1332(): any {
    return Citizen.invokeNative('0x77B299E8799B1332', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x780A13F780A13F1B | Since: 1311 | API-Set: unknown
 */
export function _0x780A13F780A13F1B(toggle: boolean): void {
    Citizen.invokeNative('0x780A13F780A13F1B', toggle);
}

/**
 * Note: this native was added in build 1436.31
 * 
 * Hash: 0x78271BC02AE9AF83 | Since: 1436 | API-Set: unknown
 */
export function _0x78271BC02AE9AF83(): number {
    return Citizen.invokeNative('0x78271BC02AE9AF83', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x7A8E8DF782B47EB0 | Since: 1207 | API-Set: unknown
 */
export function _0x7A8E8DF782B47EB0(): any {
    return Citizen.invokeNative('0x7A8E8DF782B47EB0', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7B3FF2D193628126 | Since: 1207 | API-Set: unknown
 */
export function _0x7B3FF2D193628126(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0x7B3FF2D193628126', _player);
}

/**
 * No comment provided
 * 
 * Hash: 0x7BCA0A3972708436 | Since: 1207 | API-Set: unknown
 */
export function _0x7BCA0A3972708436(): [number, any] {
    return Citizen.invokeNative('0x7BCA0A3972708436', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x7E300B5B86AB1D1A | Since: 1207 | API-Set: unknown
 */
export function _0x7E300B5B86AB1D1A(): any {
    return Citizen.invokeNative('0x7E300B5B86AB1D1A', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x814729078AED6D30 | Since: 1207 | API-Set: unknown
 */
export function _0x814729078AED6D30(): void {
    Citizen.invokeNative('0x814729078AED6D30');
}

/**
 * No comment provided
 * 
 * Hash: 0x862C5040F4888741 | Since: 1207 | API-Set: unknown
 */
export function _0x862C5040F4888741(player1: number | string | IPlayer, player2: number | string | IPlayer): boolean {
    const _player1 = player1 instanceof IPlayer ? player1.playerId() : player1;
    const _player2 = player2 instanceof IPlayer ? player2.playerId() : player2;
    return Citizen.invokeNative('0x862C5040F4888741', _player1, _player2);
}

/**
 * Params: p5 = 50.f, p6 = 0 in R* Script net_fetch (NET_FETCH_CLIENT_UPDATE_PED_ROLE_CLUE_IDLE)
 * 
 * Hash: 0x880A7202301E282B | Since: 1311 | API-Set: unknown
 */
export function _0x880A7202301E282B(pos: Vector3): [boolean, any, any] {
    return Citizen.invokeNative('0x880A7202301E282B', pos.x, pos.y, pos.z, 0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x894B5ECAB45D2342 | Since: 1207 | API-Set: unknown
 */
export function _0x894B5ECAB45D2342(netHandle: number): void {
    Citizen.invokeNative('0x894B5ECAB45D2342', netHandle, undefined);
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x917AD74BDCF8B6E9 | Since: 1311 | API-Set: unknown
 */
export function _0x917AD74BDCF8B6E9(): number {
    return Citizen.invokeNative('0x917AD74BDCF8B6E9', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x923346025512DFB7 | Since: 1207 | API-Set: unknown
 */
export function _0x923346025512DFB7(): any {
    return Citizen.invokeNative('0x923346025512DFB7', undefined);
}

/**
 * Related to container entity (RANSACK_ATTACHED_LOCKBOX / RANSACK_ATTACHED_CHEST)
 * 
 * Hash: 0x950ACD8F05B7B9DF | Since: 1355 | API-Set: unknown
 */
export function _0x950ACD8F05B7B9DF(): any {
    return Citizen.invokeNative('0x950ACD8F05B7B9DF', undefined);
}

/**
 * Must be called from a background script, otherwise it will do nothing.
 * 
 * Hash: 0x979765465A6F25FC | Since: 1207 | API-Set: unknown
 */
export function _0x979765465A6F25FC(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x979765465A6F25FC', _entity, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x97BCE4C4B3191228 | Since: 1207 | API-Set: unknown
 */
export function _0x97BCE4C4B3191228(): void {
    Citizen.invokeNative('0x97BCE4C4B3191228');
}

/**
 * No comment provided
 * 
 * Hash: 0x981146E5C9CE9250 | Since: 1207 | API-Set: unknown
 */
export function _0x981146E5C9CE9250(inviteIndex: number): boolean {
    return Citizen.invokeNative('0x981146E5C9CE9250', inviteIndex);
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x982D7AD755B8F62C | Since: 1311 | API-Set: unknown
 */
export function _0x982D7AD755B8F62C(): number {
    return Citizen.invokeNative('0x982D7AD755B8F62C', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x9B39B0555CC692B5 | Since: 1207 | API-Set: unknown
 */
export function _0x9B39B0555CC692B5(): void {
    Citizen.invokeNative('0x9B39B0555CC692B5');
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x9E5A47744C0F0376 | Since: 1311 | API-Set: unknown
 */
export function _0x9E5A47744C0F0376(): boolean {
    return Citizen.invokeNative('0x9E5A47744C0F0376', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xA2837A5E21FB5A58 | Since: 1207 | API-Set: unknown
 */
export function _0xA2837A5E21FB5A58(): boolean {
    return Citizen.invokeNative('0xA2837A5E21FB5A58', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA47D48D06AA5A188 | Since: 1207 | API-Set: unknown
 */
export function _0xA47D48D06AA5A188(): boolean {
    return Citizen.invokeNative('0xA47D48D06AA5A188');
}

/**
 * No comment provided
 * 
 * Hash: 0xA63E4F050F20021F | Since: 1207 | API-Set: unknown
 */
export function _0xA63E4F050F20021F(): void {
    Citizen.invokeNative('0xA63E4F050F20021F');
}

/**
 * No comment provided
 * 
 * Hash: 0xA6F1BAABFF6AD7B9 | Since: 1207 | API-Set: unknown
 */
export function _0xA6F1BAABFF6AD7B9(): any {
    return Citizen.invokeNative('0xA6F1BAABFF6AD7B9');
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0xA7670F7991099680 | Since: 1311 | API-Set: unknown
 */
export function _0xA7670F7991099680(): void {
    Citizen.invokeNative('0xA7670F7991099680', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xA94ECE191D90637A | Since: 1207 | API-Set: unknown
 */
export function _0xA94ECE191D90637A(): number {
    return Citizen.invokeNative('0xA94ECE191D90637A');
}

/**
 * No comment provided
 * 
 * Hash: 0xA95470DA137587F5 | Since: 1207 | API-Set: unknown
 */
export function _0xA95470DA137587F5(): void {
    Citizen.invokeNative('0xA95470DA137587F5', false);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xACC44768AF229042 | Since: 1207 | API-Set: unknown
 */
export function _0xACC44768AF229042(): void {
    Citizen.invokeNative('0xACC44768AF229042');
}

/**
 * No comment provided
 * 
 * Hash: 0xAFA14F98327791CE | Since: 1207 | API-Set: unknown
 */
export function _0xAFA14F98327791CE(): [boolean, any] {
    return Citizen.invokeNative('0xAFA14F98327791CE');
}

/**
 * No comment provided
 * 
 * Hash: 0xB131E686BD97B3F8 | Since: 1207 | API-Set: unknown
 */
export function _0xB131E686BD97B3F8(): void {
    Citizen.invokeNative('0xB131E686BD97B3F8');
}

/**
 * No comment provided
 * 
 * Hash: 0xB389289F031F059A | Since: 1207 | API-Set: unknown
 */
export function _0xB389289F031F059A(): number {
    return Citizen.invokeNative('0xB389289F031F059A');
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0xBAF7E2979442B29F | Since: 1311 | API-Set: unknown
 */
export function _0xBAF7E2979442B29F(): number {
    return Citizen.invokeNative('0xBAF7E2979442B29F', false);
}

/**
 * No comment provided
 * 
 * Hash: 0xBB1EC8C2EEF33BAA | Since: 1207 | API-Set: unknown
 */
export function _0xBB1EC8C2EEF33BAA(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xBB1EC8C2EEF33BAA', _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xBB697756309D77EE | Since: 1207 | API-Set: unknown
 */
export function _0xBB697756309D77EE(): any {
    return Citizen.invokeNative('0xBB697756309D77EE', false);
}

/**
 * Only used in fm_race_controller R* Script (PROCESS_LOCAL_PLAYER_INIT)
 * 
 * Hash: 0xBC7D36946D19E60E | Since: 1207 | API-Set: unknown
 */
export function _0xBC7D36946D19E60E(): void {
    Citizen.invokeNative('0xBC7D36946D19E60E', false);
}

/**
 * No comment provided
 * 
 * Hash: 0xBF8276E51761F9DA | Since: 1207 | API-Set: unknown
 */
export function _0xBF8276E51761F9DA(): number {
    return Citizen.invokeNative('0xBF8276E51761F9DA');
}

/**
 * No comment provided
 * 
 * Hash: 0xC028B3F52C707C49 | Since: 1207 | API-Set: unknown
 */
export function _0xC028B3F52C707C49(): boolean {
    return Citizen.invokeNative('0xC028B3F52C707C49', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC0CFFDA87C2C163D | Since: 1207 | API-Set: unknown
 */
export function _0xC0CFFDA87C2C163D(): any {
    return Citizen.invokeNative('0xC0CFFDA87C2C163D', 0, undefined, 0);
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0xC1968045EEB563B7 | Since: 1311 | API-Set: unknown
 */
export function _0xC1968045EEB563B7(): void {
    Citizen.invokeNative('0xC1968045EEB563B7', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xC8B6D18E22484643 | Since: 1207 | API-Set: unknown
 */
export function _0xC8B6D18E22484643(): void {
    Citizen.invokeNative('0xC8B6D18E22484643');
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xC964FCD3D1720697 | Since: 1207 | API-Set: unknown
 */
export function _0xC964FCD3D1720697(): any {
    return Citizen.invokeNative('0xC964FCD3D1720697');
}

/**
 * No comment provided
 * 
 * Hash: 0xCA58D4FD20D70F24 | Since: 1207 | API-Set: unknown
 */
export function _0xCA58D4FD20D70F24(): number {
    return Citizen.invokeNative('0xCA58D4FD20D70F24', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCC4E72C339461ED1 | Since: 1207 | API-Set: unknown
 */
export function _0xCC4E72C339461ED1(): any {
    return Citizen.invokeNative('0xCC4E72C339461ED1');
}

/**
 * No comment provided
 * 
 * Hash: 0xCD53E6CBF609C012 | Since: 1207 | API-Set: unknown
 */
export function _0xCD53E6CBF609C012(ugcRequestId: number): boolean {
    return Citizen.invokeNative('0xCD53E6CBF609C012', ugcRequestId);
}

/**
 * No comment provided
 * 
 * Hash: 0xCF23AB5BD47B384D | Since: 1207 | API-Set: unknown
 */
export function _0xCF23AB5BD47B384D(): void {
    Citizen.invokeNative('0xCF23AB5BD47B384D', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1FFB246F4E088AC | Since: 1207 | API-Set: unknown
 */
export function _0xD1FFB246F4E088AC(): boolean {
    return Citizen.invokeNative('0xD1FFB246F4E088AC', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD39A72AE5EBD57E5 | Since: 1207 | API-Set: unknown
 */
export function _0xD39A72AE5EBD57E5(): void {
    Citizen.invokeNative('0xD39A72AE5EBD57E5');
}

/**
 * No comment provided
 * 
 * Hash: 0xD3A3C8B9F3BDEF81 | Since: 1207 | API-Set: unknown
 */
export function _0xD3A3C8B9F3BDEF81(): any {
    return Citizen.invokeNative('0xD3A3C8B9F3BDEF81');
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0xD3B6EBC6C3D77D44 | Since: 1311 | API-Set: unknown
 */
export function _0xD3B6EBC6C3D77D44(): void {
    Citizen.invokeNative('0xD3B6EBC6C3D77D44', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD4022C7286B0DFA2 | Since: 1207 | API-Set: unknown
 */
export function _0xD4022C7286B0DFA2(): any {
    return Citizen.invokeNative('0xD4022C7286B0DFA2', undefined, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD42C543F73233041 | Since: 1232 | API-Set: unknown
 */
export function _0xD42C543F73233041(): void {
    Citizen.invokeNative('0xD42C543F73233041', false);
}

/**
 * No comment provided
 * 
 * Hash: 0xD637D327080CD86E | Since: 1207 | API-Set: unknown
 */
export function _0xD637D327080CD86E(): void {
    Citizen.invokeNative('0xD637D327080CD86E', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD78A26024BB13E08 | Since: 1207 | API-Set: unknown
 */
export function _0xD78A26024BB13E08(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    Citizen.invokeNative('0xD78A26024BB13E08', _player);
}

/**
 * No comment provided
 * 
 * Hash: 0xD7BAD4062074B9C1 | Since: 1207 | API-Set: unknown
 */
export function _0xD7BAD4062074B9C1(): boolean {
    return Citizen.invokeNative('0xD7BAD4062074B9C1', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD7D0DF27CB1765B5 | Since: 1355 | API-Set: unknown
 */
export function _0xD7D0DF27CB1765B5(): boolean {
    return Citizen.invokeNative('0xD7D0DF27CB1765B5', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xDA1BFED8582F61F0 | Since: 1207 | API-Set: unknown
 */
export function _0xDA1BFED8582F61F0(): boolean {
    return Citizen.invokeNative('0xDA1BFED8582F61F0');
}

/**
 * Note: this native was added in build 1491.50
 * 
 * Hash: 0xDBDF80673BBA3D65 | Since: 1491 | API-Set: unknown
 */
export function _0xDBDF80673BBA3D65(): boolean {
    return Citizen.invokeNative('0xDBDF80673BBA3D65', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xDC6AD5C046F33AB4 | Since: 1207 | API-Set: unknown
 */
export function _0xDC6AD5C046F33AB4(): void {
    Citizen.invokeNative('0xDC6AD5C046F33AB4', false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xDCA4A74135E1DEA5 | Since: 1207 | API-Set: unknown
 */
export function _0xDCA4A74135E1DEA5(): boolean {
    return Citizen.invokeNative('0xDCA4A74135E1DEA5', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE10F2D7715ABABEC | Since: 1207 | API-Set: unknown
 */
export function _0xE10F2D7715ABABEC(): any {
    return Citizen.invokeNative('0xE10F2D7715ABABEC', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE39600E50D608693 | Since: 1207 | API-Set: unknown
 */
export function _0xE39600E50D608693(): boolean {
    return Citizen.invokeNative('0xE39600E50D608693', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE3AB5EEFCB6671A2 | Since: 1207 | API-Set: unknown
 */
export function _0xE3AB5EEFCB6671A2(setting: number): void {
    Citizen.invokeNative('0xE3AB5EEFCB6671A2', setting);
}

/**
 * No comment provided
 * 
 * Hash: 0xE5634491A58C2703 | Since: 1207 | API-Set: unknown
 */
export function _0xE5634491A58C2703(): void {
    Citizen.invokeNative('0xE5634491A58C2703', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xE59F4924BD3A718D | Since: 1207 | API-Set: unknown
 */
export function _0xE59F4924BD3A718D(): string {
    return Citizen.invokeNative('0xE59F4924BD3A718D', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xE5FF65CFF5160752 | Since: 1207 | API-Set: unknown
 */
export function _0xE5FF65CFF5160752(): void {
    Citizen.invokeNative('0xE5FF65CFF5160752');
}

/**
 * No comment provided
 * 
 * Hash: 0xE79BA3BC265895DA | Since: 1207 | API-Set: unknown
 */
export function _0xE79BA3BC265895DA(): string {
    return Citizen.invokeNative('0xE79BA3BC265895DA', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xE8E633215471BB5D | Since: 1207 | API-Set: unknown
 */
export function _0xE8E633215471BB5D(): number {
    return Citizen.invokeNative('0xE8E633215471BB5D', undefined);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xEC089F84A9C16C62 | Since: 1207 | API-Set: unknown
 */
export function _0xEC089F84A9C16C62(): any {
    return Citizen.invokeNative('0xEC089F84A9C16C62');
}

/**
 * No comment provided
 * 
 * Hash: 0xF23A6D6C11D8EC15 | Since: 1207 | API-Set: unknown
 */
export function _0xF23A6D6C11D8EC15(): [boolean, any] {
    return Citizen.invokeNative('0xF23A6D6C11D8EC15');
}

/**
 * Same Native Handler as VEH_TO_NET, PED_TO_NET, OBJ_TO_NET and NETWORK_GET_NETWORK_ID_FROM_ENTITY
 * 
 * Hash: 0xF260AF6F43953316 | Since: 1207 | API-Set: unknown
 */
export function _0xF260AF6F43953316(handle: number): number {
    return Citizen.invokeNative('0xF260AF6F43953316', handle);
}

/**
 * Returns the entity's network ID.
 * 
 * Hash: 0xF302AB9D978352EE | Since: 1207 | API-Set: unknown
 */
export function _0xF302AB9D978352EE(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0xF302AB9D978352EE', _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xF342F6BD0A8287D5 | Since: 1207 | API-Set: unknown
 */
export function _0xF342F6BD0A8287D5(): void {
    Citizen.invokeNative('0xF342F6BD0A8287D5', undefined);
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0xF8DC69DC1AD19072 | Since: 1311 | API-Set: unknown
 */
export function _0xF8DC69DC1AD19072(): number {
    return Citizen.invokeNative('0xF8DC69DC1AD19072', false);
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0xFB3205788F8AFA3F | Since: 1311 | API-Set: unknown
 */
export function _0xFB3205788F8AFA3F(): number {
    return Citizen.invokeNative('0xFB3205788F8AFA3F');
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xFC6FCF4C03F1BBF6 | Since: 1207 | API-Set: unknown
 */
export function _0xFC6FCF4C03F1BBF6(): void {
    Citizen.invokeNative('0xFC6FCF4C03F1BBF6');
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0xFD8112109A96877C | Since: 1311 | API-Set: unknown
 */
export function _0xFD8112109A96877C(): void {
    Citizen.invokeNative('0xFD8112109A96877C');
}

/**
 * No comment provided
 * 
 * Hash: 0xFE53B1F8D43F19BF | Since: 1207 | API-Set: unknown
 */
export function _0xFE53B1F8D43F19BF(player1: number | string | IPlayer, player2: number | string | IPlayer): number {
    const _player1 = player1 instanceof IPlayer ? player1.playerId() : player1;
    const _player2 = player2 instanceof IPlayer ? player2.playerId() : player2;
    return Citizen.invokeNative('0xFE53B1F8D43F19BF', _player1, _player2);
}

/**
 * No comment provided
 * 
 * Hash: 0xFF36F36B07E69059 | Since: 1207 | API-Set: unknown
 */
export function _0xFF36F36B07E69059(): void {
    Citizen.invokeNative('0xFF36F36B07E69059', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE0D73CDDEA79DDCD | Since: 1207 | API-Set: unknown
 */
export function animSceneToNet(animScene: any): number {
    return AnimSceneToNet(animScene);
}

/**
 * No comment provided
 * 
 * Hash: 0x782C94DB6469634D | Since: 1207 | API-Set: unknown
 */
export function clearLaunchParam(paramName: string): void {
    ClearLaunchParam(paramName);
}

/**
 * No comment provided
 * 
 * Hash: 0xDBC754CB6CCB9378 | Since: 1232 | API-Set: unknown
 */
export function commerceStoreIsEnabled(): boolean {
    return CommerceStoreIsEnabled();
}

/**
 * No comment provided
 * 
 * Hash: 0xCE5E79D9E303628E | Since: 1355 | API-Set: unknown
 */
export function commerceStoreIsOpen(): boolean {
    return CommerceStoreIsOpen();
}

/**
 * No comment provided
 * 
 * Hash: 0x02E97CE283648CD9 | Since: 1207 | API-Set: unknown
 */
export function getLaunchParamExists(paramName: string): boolean {
    return GetLaunchParamExists(paramName);
}

/**
 * No comment provided
 * 
 * Hash: 0xC59AB6A04333C502 | Since: 1207 | API-Set: unknown
 */
export function getLaunchParamString(): string {
    return GetLaunchParamString();
}

/**
 * No comment provided
 * 
 * Hash: 0xD2BA051B94CA9BCC | Since: 1207 | API-Set: unknown
 */
export function getNumCreatedMissionPickups(): number {
    return GetNumCreatedMissionPickups(false);
}

/**
 * Note: this native was added in build 1311.16
 * 
 * Hash: 0x4FE932E84FE932E8 | Since: 1311 | API-Set: unknown
 */
export function getNumPeerNegotiationResponses(): number {
    return GetNumPeerNegotiationResponses();
}

/**
 * No comment provided
 * 
 * Hash: 0x62BE3ECC79FBD004 | Since: 1207 | API-Set: unknown
 */
export function getNumReservedMissionPickups(): number {
    return GetNumReservedMissionPickups(false);
}

/**
 * No comment provided
 * 
 * Hash: 0xDCC4B7F7112E8AB7 | Since: 1207 | API-Set: unknown
 */
export function getPlayerWaypointIsActive(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return GetPlayerWaypointIsActive(_player);
}

/**
 * Only used in R* Script net_stable_manager
 * 
 * Hash: 0x99AAC89C510DEB0D | Since: 1491 | API-Set: unknown
 */
export function getReservedMissionEntitiesForThread(threadId: number): [number, number, number, number, number, number] {
    return GetReservedMissionEntitiesForThread(threadId);
}

/**
 * No comment provided
 * 
 * Hash: 0xD0541EF28E9C4783 | Since: 1207 | API-Set: unknown
 */
export function getSocialMatchmakingAllowed(): boolean {
    return GetSocialMatchmakingAllowed();
}

/**
 * No comment provided
 * 
 * Hash: 0x6E2FD8CF7EB10E53 | Since: 1207 | API-Set: unknown
 */
export function localPlayerPedshotTextureDownloadRequest(playerSlot: number, personaPhotoLocalCacheType: number): number {
    return LocalPlayerPedshotTextureDownloadRequest(playerSlot, personaPhotoLocalCacheType);
}

/**
 * Returns textureDownloadId
 * 
 * Hash: 0x9B5DB6CEAFAA10BB | Since: 1207 | API-Set: unknown
 */
export function mugshotTextureDownloadRequest(name: string): [number, any] {
    return MugshotTextureDownloadRequest(0, name, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x157D8F3DE12B307F | Since: 1207 | API-Set: unknown
 */
export function addPlayerToRecentGamersList(player: number | string | IPlayer): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    NetworkAddPlayerToRecentGamersList(_player, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x1BAA028F52EED310 | Since: 1311 | API-Set: unknown
 */
export function alert(ctx: number | string, lh: number | string, ec: number, h: number): void {
    if (typeof ctx === 'string') ctx = GetHashKey(ctx)
    if (typeof lh === 'string') lh = GetHashKey(lh)
    NetworkAlert(ctx, lh, ec, h);
}

/**
 * Returns value of fwuiCachedSetting "general.onlineNotificationsInStoryMode"
 * 
 * Hash: 0xF5C5929E07512F80 | Since: 1207 | API-Set: unknown
 */
export function areOnlineNotificationsShownInStoryMode(): boolean {
    return NetworkAreOnlineNotificationsShownInStoryMode();
}

/**
 * No comment provided
 * 
 * Hash: 0x11820D1AE80DEA39 | Since: 1207 | API-Set: unknown
 */
export function arePlayersInSamePlatformParty(): [boolean, any, any] {
    return NetworkArePlayersInSamePlatformParty();
}

/**
 * No comment provided
 * 
 * Hash: 0xE258570E0C116A66 | Since: 1207 | API-Set: unknown
 */
export function autoSessionIsAutoWarpDisabled(): boolean {
    return NetworkAutoSessionIsAutoWarpDisabled();
}

/**
 * No comment provided
 * 
 * Hash: 0x277865A734918AE6 | Since: 1207 | API-Set: unknown
 */
export function autoSessionIsInstancedSession(): boolean {
    return NetworkAutoSessionIsInstancedSession();
}

/**
 * No comment provided
 * 
 * Hash: 0xA021095C983F20D8 | Since: 1207 | API-Set: unknown
 */
export function autoSessionIsProcessingSessionSplit(): boolean {
    return NetworkAutoSessionIsProcessingSessionSplit();
}

/**
 * No comment provided
 * 
 * Hash: 0x63246A24F5747510 | Since: 1207 | API-Set: unknown
 */
export function autoSessionSetAllowedToMerge(toggle: boolean): any {
    return NetworkAutoSessionSetAllowedToMerge(toggle, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x0A428058079EE65C | Since: 1207 | API-Set: unknown
 */
export function autoSessionSetAllowedToSplit(toggle: boolean): void {
    NetworkAutoSessionSetAllowedToSplit(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x4440FEE3EFE78F54 | Since: 1207 | API-Set: unknown
 */
export function autoSessionSetAutoWarpEnabled(toggle: boolean): void {
    NetworkAutoSessionSetAutoWarpEnabled(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x6D87BA8EF15226CD | Since: 1207 | API-Set: unknown
 */
export function autoSessionSplitSessionSuccessful(): boolean {
    return NetworkAutoSessionSplitSessionSuccessful();
}

/**
 * On PC this returns true if gamerHandle is a valid handle.
 * 
 * Hash: 0x99ABE9BF9DADA162 | Since: 1207 | API-Set: unknown
 */
export function canAddFriend(): [boolean, any] {
    return NetworkCanAddFriend();
}

/**
 * No comment provided
 * 
 * Hash: 0xF23D6475640D29EB | Since: 1207 | API-Set: unknown
 */
export function canReceiveInviteFromHandle(): [boolean, any] {
    return NetworkCanReceiveInviteFromHandle();
}

/**
 * No comment provided
 * 
 * Hash: 0x65F040D91001ED4B | Since: 1207 | API-Set: unknown
 */
export function clearClockOverrideOvertime(milliseconds: number): void {
    NetworkClearClockOverrideOvertime(milliseconds);
}

/**
 * No comment provided
 * 
 * Hash: 0x669E223E64B1903C | Since: 1207 | API-Set: unknown
 */
export function clockTimeOverride(hour: number, minute: number, second: number, transitionTime: number, pauseClock: boolean): void {
    NetworkClockTimeOverride(hour, minute, second, transitionTime, pauseClock);
}

/**
 * No comment provided
 * 
 * Hash: 0xE28C13ECC36FF14E | Since: 1207 | API-Set: unknown
 */
export function clockTimeOverride2(hour: number, minute: number, second: number, transitionTime: number, pauseClock: boolean, clockwise: boolean): void {
    NetworkClockTimeOverride2(hour, minute, second, transitionTime, pauseClock, clockwise);
}

/**
 * Must be called from a background script, otherwise it will do nothing.
 * 
 * Hash: 0xFA38B52F91B59075 | Since: 1207 | API-Set: unknown
 */
export function debugRequestEntityPosition(): any {
    return NetworkDebugRequestEntityPosition();
}

/**
 * No comment provided
 * 
 * Hash: 0x12AEB56B489415C5 | Since: 1207 | API-Set: unknown
 */
export function didRecentGamerNamesRequestSucceed(): boolean {
    return NetworkDidRecentGamerNamesRequestSucceed();
}

/**
 * No comment provided
 * 
 * Hash: 0xA3EEC0A5AFF3FC5B | Since: 1207 | API-Set: unknown
 */
export function getCurrentFriendPageData(): [boolean, any] {
    return NetworkGetCurrentFriendPageData();
}

/**
 * Example:
 * 
 * char displayName[64];
 * if (_NETWORK_GET_DISPLAY_NAME_FROM_HANDLE(handle, displayName))
 * {
 * // use displayName
 * }
 * 
 * Hash: 0x7FEE4F07C54B6B3C | Since: 1207 | API-Set: unknown
 */
export function getDisplayNameFromHandle(): [boolean, any, string] {
    return NetworkGetDisplayNameFromHandle();
}

/**
 * No comment provided
 * 
 * Hash: 0x5659D87BE674AB17 | Since: 1207 | API-Set: unknown
 */
export function getGamertagFromFriend(): [string, any] {
    return NetworkGetGamertagFromFriend();
}

/**
 * No comment provided
 * 
 * Hash: 0xFBDFE1C1356E12E8 | Since: 1207 | API-Set: unknown
 */
export function getGamerSessionFromHandle(count: number): [boolean, any] {
    return NetworkGetGamerSessionFromHandle(count);
}

/**
 * No comment provided
 * 
 * Hash: 0xDDAEB478E58F8DEA | Since: 1207 | API-Set: unknown
 */
export function getGamerStatus(): [number, any] {
    return NetworkGetGamerStatus(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xDD7806FD0543BC3D | Since: 1207 | API-Set: unknown
 */
export function getGlobalEntityFlags(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return NetworkGetGlobalEntityFlags(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xFB9ECED5B68F3B78 | Since: 1207 | API-Set: unknown
 */
export function getInstanceIdOfThread(threadId: number): number {
    return NetworkGetInstanceIdOfThread(threadId);
}

/**
 * No comment provided
 * 
 * Hash: 0x37A834AEC6A4F74A | Since: 1207 | API-Set: unknown
 */
export function getNumRecentGamers(): number {
    return NetworkGetNumRecentGamers();
}

/**
 * No comment provided
 * 
 * Hash: 0x9BCF28FB5D65A9BE | Since: 1207 | API-Set: unknown
 */
export function getPlatformInviteId(): number {
    return NetworkGetPlatformInviteId();
}

/**
 * No comment provided
 * 
 * Hash: 0xD9267375834C5EAB | Since: 1207 | API-Set: unknown
 */
export function getPlayerFastInstanceId(player: number | string | IPlayer): number {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkGetPlayerFastInstanceId(_player);
}

/**
 * No comment provided
 * 
 * Hash: 0xA6C0787443C9583E | Since: 1207 | API-Set: unknown
 */
export function getPlayerOwnerOfNetworkId(netId: number): number | string {
    return NetworkGetPlayerOwnerOfNetworkId(netId);
}

/**
 * No comment provided
 * 
 * Hash: 0x32C90CDFAF40514C | Since: 1207 | API-Set: unknown
 */
export function getRank(): number {
    return NetworkGetRank();
}

/**
 * Returns CGameConfig->ConfigOnlineServices->RosTitleName (see gameconfig.xml)
 * 
 * Hash: 0xAC6153A0722F524C | Since: 1207 | API-Set: unknown
 */
export function getRosTitleName(): string {
    return NetworkGetRosTitleName();
}

/**
 * No comment provided
 * 
 * Hash: 0x8DC9AA3B508B1A85 | Since: 1207 | API-Set: unknown
 */
export function getSessionHost(): number | string {
    return NetworkGetSessionHost();
}

/**
 * No comment provided
 * 
 * Hash: 0xBA24095EA96DFE17 | Since: 1207 | API-Set: unknown
 */
export function getSizeOfHostBroadcastDataStorage(): [number, number] {
    return NetworkGetSizeOfHostBroadcastDataStorage();
}

/**
 * No comment provided
 * 
 * Hash: 0x690806BC83BC8CA2 | Since: 1207 | API-Set: unknown
 */
export function getSizeOfPlayerBroadcastDataStorage(): [number, number] {
    return NetworkGetSizeOfPlayerBroadcastDataStorage();
}

/**
 * No comment provided
 * 
 * Hash: 0xDB438CC9BC6F4022 | Since: 1207 | API-Set: unknown
 */
export function getXp(): number {
    return NetworkGetXp();
}

/**
 * No comment provided
 * 
 * Hash: 0xDD73C9838CE7181D | Since: 1207 | API-Set: unknown
 */
export function hasCompletedMpIntroFlowOnCurrentSlot(): boolean {
    return NetworkHasCompletedMpIntroFlowOnCurrentSlot();
}

/**
 * No comment provided
 * 
 * Hash: 0x26A5C12FACFF8724 | Since: 1207 | API-Set: unknown
 */
export function hasControlOfAnimScene(animScene: any): boolean {
    return NetworkHasControlOfAnimScene(animScene);
}

/**
 * No comment provided
 * 
 * Hash: 0x25189F9908E9CD65 | Since: 1207 | API-Set: unknown
 */
export function hasCurrentGetGamerStatusStarted(): boolean {
    return NetworkHasCurrentGetGamerStatusStarted();
}

/**
 * No comment provided
 * 
 * Hash: 0x665161D250850A9F | Since: 1207 | API-Set: unknown
 */
export function isFriendHandleInSameTitle(): [boolean, any] {
    return NetworkIsFriendHandleInSameTitle();
}

/**
 * No comment provided
 * 
 * Hash: 0xE348D1404BD80146 | Since: 1207 | API-Set: unknown
 */
export function isFriendHandleOnline(): [boolean, any] {
    return NetworkIsFriendHandleOnline();
}

/**
 * Hardcoded to return false.
 * 
 * Hash: 0xC5196C42DE19F646 | Since: 1207 | API-Set: unknown
 */
export function isInSessionLobby(): boolean {
    return NetworkIsInSessionLobby();
}

/**
 * No comment provided
 * 
 * Hash: 0x5B709519997ECF0F | Since: 1207 | API-Set: unknown
 */
export function isPlayerInSpectatorMode(player: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    return NetworkIsPlayerInSpectatorMode(_player);
}

/**
 * _NETWORK_IS_T* - _NETWORK_RE*
 * 
 * Hash: 0xA21E3BAD0A42D199 | Since: 1207 | API-Set: unknown
 */
export function isPreviousUploadPending(): boolean {
    return NetworkIsPreviousUploadPending();
}

/**
 * No comment provided
 * 
 * Hash: 0x4664D213A0CCAF40 | Since: 1207 | API-Set: unknown
 */
export function isRecentGamerNamesRequestInProgress(): boolean {
    return NetworkIsRecentGamerNamesRequestInProgress();
}

/**
 * No comment provided
 * 
 * Hash: 0x31DAD2CD6D49546E | Since: 1207 | API-Set: unknown
 */
export function isThreadActive(threadId: number): boolean {
    return NetworkIsThreadActive(threadId);
}

/**
 * No comment provided
 * 
 * Hash: 0xE525878A35B9EEBD | Since: 1207 | API-Set: unknown
 */
export function isTrackedPlayerVisible(player: number | string | IPlayer, trackedPlayer: number | string | IPlayer): boolean {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    const _trackedPlayer = trackedPlayer instanceof IPlayer ? trackedPlayer.playerId() : trackedPlayer;
    return NetworkIsTrackedPlayerVisible(_player, _trackedPlayer);
}

/**
 * Returns false if pedshot push failed
 * 
 * Hash: 0x2A48D9567940598F | Since: 1207 | API-Set: unknown
 */
export function personaPhotoWriteLocal(texture: string, playerSlot: number, personaPhotoLocalCacheType: number): boolean {
    return NetworkPersonaPhotoWriteLocal(texture, playerSlot, 0, personaPhotoLocalCacheType);
}

/**
 * Returns false if pedshot push failed
 * 
 * Hash: 0xB72999D3120599DF | Since: 1207 | API-Set: unknown
 */
export function personaPhotoWriteScProfile(texture: string, personaPhotoType: number, formatIndex: number): boolean {
    return NetworkPersonaPhotoWriteScProfile(texture, personaPhotoType, formatIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x55F618F68AB854D3 | Since: 1207 | API-Set: unknown
 */
export function removeFriend(): [boolean, any] {
    return NetworkRemoveFriend();
}

/**
 * No comment provided
 * 
 * Hash: 0xAAA92B631B13F614 | Since: 1207 | API-Set: unknown
 */
export function requestControlOfAnimScene(animScene: any): boolean {
    return NetworkRequestControlOfAnimScene(animScene);
}

/**
 * No comment provided
 * 
 * Hash: 0x4154B7D8C75E5DCF | Since: 1207 | API-Set: unknown
 */
export function resurrectLocalPlayer2(): any {
    return NetworkResurrectLocalPlayer2();
}

/**
 * No comment provided
 * 
 * Hash: 0xE47001B7CB8B98AE | Since: 1207 | API-Set: unknown
 */
export function sendSessionInvite(contentId: string, dataSize: number, flags: number): [boolean, any, any] {
    return NetworkSendSessionInvite(contentId, dataSize, 0, flags);
}

/**
 * enum eSessionFlags
 * {
 * SESSION_FLAG_NONE = 0,
 * SF_INSTANCE = (1 << 0),
 * SF_MATCH = (1 << 1),
 * SF_PRIVATE = (1 << 2),
 * SF_BLOCK_INVITES = (1 << 3),
 * SF_BLOCK_JOIN_VIA_PRESENCE = (1 << 4),
 * SF_BLOCK_NON_HOST_INVITES = (1 << 5),
 * SF_BLOCK_IN_PROGRESS_MATCHMAKING_BACKFILL = (1 << 6),
 * SF_BLOCK_IN_GAMEPLAY_MATCHMAKING_BACKFILL = (1 << 7),
 * SF_BLOCK_INVITES_TEMPORARY = (1 << 8),
 * SF_IN_GAMEPLAY = (1 << 9),
 * SF_COMPETITIVE = (1 << 10),
 * SF_MATCHMAKING_BACKFILL_IS_BLOCKED = (1 << 11)
 * };
 * 
 * Hash: 0xE546BDA1B3E288EE | Since: 1207 | API-Set: unknown
 */
export function sessionAddSessionFlags(flags: number): boolean {
    return NetworkSessionAddSessionFlags(flags);
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0x4DEC5000F7B508F0 | Since: 1311 | API-Set: unknown
 */
export function sessionAreSessionIdsEqual(): [boolean, any, any] {
    return NetworkSessionAreSessionIdsEqual();
}

/**
 * No comment provided
 * 
 * Hash: 0xE72E5C1289BD1F40 | Since: 1207 | API-Set: unknown
 */
export function sessionCancelRequest(): [boolean, any] {
    return NetworkSessionCancelRequest();
}

/**
 * Note: this native was added in build 1311.23
 * 
 * Hash: 0xE9B356C330C0A806 | Since: 1311 | API-Set: unknown
 */
export function sessionGetSessionId(): any {
    return NetworkSessionGetSessionId();
}

/**
 * Returns result of session request:
 * 0 - NOT_FOUND
 * 1 - IN_PROGRESS
 * 2 - TIMEOUT
 * 3 - PLAYER_OFFLINE
 * 4 - GANG_MEMBERS_CHANGED
 * 5 - PLAYER_CANCELLED
 * 6 - PLAYER_SET_TOO_LARGE
 * 7 - MATCH_ACCEPTED
 * 8 - OTHER
 * 
 * Hash: 0x0DD051B1BF4B8BD6 | Since: 1207 | API-Set: unknown
 */
export function sessionGetSessionRequestResult(): [number, any, number] {
    return NetworkSessionGetSessionRequestResult();
}

/**
 * No comment provided
 * 
 * Hash: 0x0F44A5C78D114922 | Since: 1207 | API-Set: unknown
 */
export function sessionIsNsrrSuccess(): [boolean, any] {
    return NetworkSessionIsNsrrSuccess();
}

/**
 * No comment provided
 * 
 * Hash: 0x9E762A595CF88E4A | Since: 1207 | API-Set: unknown
 */
export function sessionIsRequestInProgressByQueueGroup(queueGroup: number): boolean {
    return NetworkSessionIsRequestInProgressByQueueGroup(queueGroup);
}

/**
 * Only used in R* Script net_rolling_playlist
 * 
 * Hash: 0x8F9DB6CD03B42B58 | Since: 1436 | API-Set: unknown
 */
export function sessionPlaylistGetUpcomingContent(): void {
    NetworkSessionPlaylistGetUpcomingContent();
}

/**
 * Only used in R* Script net_rolling_playlist
 * 
 * Hash: 0xBDE605F925B07127 | Since: 1436 | API-Set: unknown
 */
export function sessionPlaylistGoToNextContent(): void {
    NetworkSessionPlaylistGoToNextContent();
}

/**
 * No comment provided
 * 
 * Hash: 0x3215BBE34D3418C5 | Since: 1207 | API-Set: unknown
 */
export function sessionRemovePlayerFlags(flags: number): boolean {
    return NetworkSessionRemovePlayerFlags(flags);
}

/**
 * No comment provided
 * 
 * Hash: 0x4F4672457FF597D1 | Since: 1436 | API-Set: unknown
 */
export function sessionRequestSessionNominated(flags: number, userHash: number): [boolean, any] {
    return NetworkSessionRequestSessionNominated(flags, userHash, 0);
}

/**
 * category:
 * enum eOnCallType
 * {
 * NETWORK_SESSION_REQUEST_ON_CALL_TYPE_STORY = 2,
 * NETWORK_SESSION_REQUEST_ON_CALL_TYPE_MATCH = 3
 * };
 * 
 * Hash: 0x23D9C1F2E4098EDC | Since: 1207 | API-Set: unknown
 */
export function sessionRequestSessionOnCall(flags: number, category: number, userHash: number): [boolean, any, any] {
    return NetworkSessionRequestSessionOnCall(flags, category, userHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x0AE241A4A9ADEEEC | Since: 1207 | API-Set: unknown
 */
export function sessionSetPlayerFlags(flags: number): boolean {
    return NetworkSessionSetPlayerFlags(flags);
}

/**
 * Only used in R* Script startup_clip Seems to just kill the network connection, sets the players coords to 0, 0, 0 when doing GetEntityCoords
 * 
 * Hash: 0xFD4272A137703449 | Since: 1207 | API-Set: unknown
 */
export function sessionShutdown(): void {
    Citizen.invokeNative('0xFD4272A137703449');
}

/**
 * No comment provided
 * 
 * Hash: 0xF20B18A330E6DB5C | Since: 1207 | API-Set: unknown
 */
export function sessionTransitionToSession(): [boolean, any] {
    return NetworkSessionTransitionToSession();
}

/**
 * No comment provided
 * 
 * Hash: 0xFBF1ECFB39A77B5F | Since: 1207 | API-Set: unknown
 */
export function setInStaticSpectatorMode(toggle: boolean, pos: Vector3): void {
    NetworkSetInStaticSpectatorMode(toggle, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xEEB7818B1D307212 | Since: 1207 | API-Set: unknown
 */
export function spawnConfigAddExclusionVolume(volume: number): void {
    NetworkSpawnConfigAddExclusionVolume(volume);
}

/**
 * No comment provided
 * 
 * Hash: 0xEB6027FD1B4600D5 | Since: 1207 | API-Set: unknown
 */
export function spawnConfigAddPropertyPreference(configProperty: number, include: boolean, weight: number): void {
    NetworkSpawnConfigAddPropertyPreference(configProperty, include, weight);
}

/**
 * No comment provided
 * 
 * Hash: 0x44D59EC597BBF348 | Since: 1207 | API-Set: unknown
 */
export function spawnConfigAddPropertyScripted(configProperty: number, include: boolean): void {
    NetworkSpawnConfigAddPropertyScripted(configProperty, include);
}

/**
 * No comment provided
 * 
 * Hash: 0xFD1AC0B3858F224C | Since: 1207 | API-Set: unknown
 */
export function spawnConfigAddSpawnPoint(pos: Vector3, heading: number): void {
    NetworkSpawnConfigAddSpawnPoint(pos.x, pos.y, pos.z, heading);
}

/**
 * No comment provided
 * 
 * Hash: 0xA35E7BF20FA269E0 | Since: 1207 | API-Set: unknown
 */
export function spawnConfigRemoveExclusionVolume(volume: number): void {
    NetworkSpawnConfigRemoveExclusionVolume(volume);
}

/**
 * No comment provided
 * 
 * Hash: 0x89EC2FC89ECB1005 | Since: 1207 | API-Set: unknown
 */
export function spawnConfigSearchInProgress(): boolean {
    return NetworkSpawnConfigSearchInProgress();
}

/**
 * No comment provided
 * 
 * Hash: 0x765E60A1DCB8B1CE | Since: 1207 | API-Set: unknown
 */
export function spawnConfigSetCancelSearch(): void {
    NetworkSpawnConfigSetCancelSearch();
}

/**
 * No comment provided
 * 
 * Hash: 0xBDCC671B911040F9 | Since: 1207 | API-Set: unknown
 */
export function spawnConfigSetLevelWaterDepth(waterDepthLevel: number): void {
    NetworkSpawnConfigSetLevelWaterDepth(waterDepthLevel);
}

/**
 * No comment provided
 * 
 * Hash: 0xD7F6781A0ABAF6FB | Since: 1207 | API-Set: unknown
 */
export function netToAnimScene(netId: number): any {
    return NetToAnimScene(netId);
}

/**
 * No comment provided
 * 
 * Hash: 0xD08066E00D26C448 | Since: 1207 | API-Set: unknown
 */
export function netToPropset(netId: number): any {
    return NetToPropset(netId);
}

/**
 * No comment provided
 * 
 * Hash: 0xCBAC13F065C47596 | Since: 1207 | API-Set: unknown
 */
export function pedmugshotGetStatus(): number {
    return PedmugshotGetStatus();
}

/**
 * No comment provided
 * 
 * Hash: 0xFBC30B70B3CDB87E | Since: 1207 | API-Set: unknown
 */
export function pedmugshotRequestSend(): any {
    return PedmugshotRequestSend();
}

/**
 * No comment provided
 * 
 * Hash: 0xCD954F330693F5F2 | Since: 1207 | API-Set: unknown
 */
export function pedmugshotTake(): boolean {
    return PedmugshotTake();
}

/**
 * No comment provided
 * 
 * Hash: 0x74F99EF7EF503398 | Since: 1207 | API-Set: unknown
 */
export function propsetToNet(propSet: any): number {
    return PropsetToNet(propSet);
}

/**
 * No comment provided
 * 
 * Hash: 0xA197C35F73AC0F12 | Since: 1207 | API-Set: unknown
 */
export function reportPlayer(player: number | string | IPlayer, reportType: number, description: string, horseName: string): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    ReportPlayer(_player, reportType, description, horseName);
}

/**
 * Only used in R* SP Scripts
 * 
 * Hash: 0x356F9FB0698C1FEB | Since: 1207 | API-Set: unknown
 */
export function requestPedshotTextureLocalBackupDownload(player: number, personaPhotoLocalCacheType: number): string {
    return RequestPedshotTextureLocalBackupDownload(player, personaPhotoLocalCacheType);
}

/**
 * Only used in R* SP Script map_app_event_handler
 * 
 * Hash: 0xCAF4CA2F87779F8F | Since: 1207 | API-Set: unknown
 */
export function requestPedshotTextureLocalDownload(): [string, any] {
    return RequestPedshotTextureLocalDownload(0);
}

/**
 * No comment provided
 * 
 * Hash: 0xB5C4B18B12A2AF23 | Since: 1207 | API-Set: unknown
 */
export function requestPedshotTextureMultiplayerDownload(): [string, any] {
    return RequestPedshotTextureMultiplayerDownload(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x51D99497ABF3F451 | Since: 1207 | API-Set: unknown
 */
export function setDoored(doorHash: number | string): void {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    SetDoorNetworked(doorHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xC1E1A3D5ED7617B8 | Since: 1207 | API-Set: unknown
 */
export function setDoorUned(toggle: boolean): void {
    SetDoorUnnetworked(undefined, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xEE5AE9956743BA20 | Since: 1207 | API-Set: unknown
 */
export function setEntityGhostedToLocalPlayer(entity: number | IEntity, toggle: boolean): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityGhostedToLocalPlayer(_entity, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xDFFC15AA63D04AAB | Since: 1207 | API-Set: unknown
 */
export function setLaunchParamString(params: string): void {
    SetLaunchParamString(params);
}

/**
 * No comment provided
 * 
 * Hash: 0x668AF6E4933AC13F | Since: 1207 | API-Set: unknown
 */
export function setLaunchParamValue(paramName: string, value: string): void {
    SetLaunchParamValue(paramName, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xD041A32992A55F84 | Since: 1207 | API-Set: unknown
 */
export function setLocalPlayerDamageMultiplierForPlayer(player: number | string | IPlayer, damageMultiplier: number): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetLocalPlayerDamageMultiplierForPlayer(_player, damageMultiplier);
}

/**
 * No comment provided
 * 
 * Hash: 0x442B4347B6EC36E8 | Since: 1207 | API-Set: unknown
 */
export function setRespotTimer(entity: number | IEntity, timer: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetNetworkRespotTimer(_entity, timer, false);
}

/**
 * _SET_PLAYER_V* - _SET_S*
 * 
 * Hash: 0xDCA6ABDB9288FBE4 | Since: 1207 | API-Set: unknown
 */
export function setPlayerVisibilityToLocalPlayerDisabled(player: number | string | IPlayer, disabled: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetPlayerVisibilityToLocalPlayerDisabled(_player, disabled);
}

/**
 * No comment provided
 * 
 * Hash: 0x777D0571A466B520 | Since: 1207 | API-Set: unknown
 */
export function setSocialMatchmakingAllowed(toggle: boolean): void {
    SetSocialMatchmakingAllowed(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x7A17B7981560FFA5 | Since: 1207 | API-Set: unknown
 */
export function textureDownloadReleaseByName(name: string): void {
    TextureDownloadReleaseByName(name);
}

/**
 * No comment provided
 * 
 * Hash: 0xE2C3CEC3C0903A00 | Since: 1207 | API-Set: unknown
 */
export function textureDownloadTextureNameIsValid(name: string): boolean {
    return TextureDownloadTextureNameIsValid(name);
}

/**
 * Checks if the user has ROS privilege 14.
 * 
 * Hash: 0x6506BFA755FB209C | Since: 1207 | API-Set: unknown
 */
export function ugcHasPrivilege(): boolean {
    return UgcHasPrivilege();
}

/**
 * No comment provided
 * 
 * Hash: 0xE42D1042F09865FE | Since: 1355 | API-Set: unknown
 */
export function ugcIsBookMarked(contentId: string): boolean {
    return UgcIsBookMarked(contentId);
}

/**
 * Returns ugcRequestId
 * 
 * Hash: 0x8C109958C9BB559D | Since: 1207 | API-Set: unknown
 */
export function ugcQueryByCategory(categoryType: number, maxGet: number, contentTypeName: string): number {
    return UgcQueryByCategory(categoryType, 0, maxGet, contentTypeName, 0, false);
}

/**
 * Returns ugcRequestId
 * 
 * Hash: 0x69D22E183580113F | Since: 1207 | API-Set: unknown
 */
export function ugcQueryByContentId(contentId: string, latestVersion: boolean, contentTypeName: string): number {
    return UgcQueryByContentId(contentId, latestVersion, contentTypeName);
}

/**
 * Returns ugcRequestId
 * 
 * Hash: 0xF40EF49B3099E98E | Since: 1207 | API-Set: unknown
 */
export function ugcQueryByContentType(maxGet: number, contentTypeName: string): number {
    return UgcQueryByContentType(0, maxGet, contentTypeName, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x98539FC453AEA639 | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetBookMarked(index: number): boolean {
    return UgcQueryGetBookMarked(undefined, index);
}

/**
 * No comment provided
 * 
 * Hash: 0xADB56322EEDFBDC9 | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetCreatorHandle(index: number): [any, any] {
    return UgcQueryGetCreatorHandle(undefined, index);
}

/**
 * Returns string for GET_STATUS_OF_LOAD_MISSION_CREATOR_PHOTO
 * 
 * Hash: 0x409FE0CA6A4D1D49 | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetCreatorPhoto(): string {
    return UgcQueryGetCreatorPhoto(undefined, 0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE0CB4AB15CB32710 | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetDate(index: number): any {
    return UgcQueryGetDate(undefined, index);
}

/**
 * No comment provided
 * 
 * Hash: 0x97764E8AC6487A9A | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetLanguage(index: number): number {
    return UgcQueryGetLanguage(undefined, index);
}

/**
 * No comment provided
 * 
 * Hash: 0xA6BF569956C60A60 | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetMissionDescHash(index: number): number {
    return UgcQueryGetMissionDescHash(undefined, index);
}

/**
 * No comment provided
 * 
 * Hash: 0x2D053EA815702DD1 | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetName(index: number): string {
    return UgcQueryGetName(undefined, index);
}

/**
 * No comment provided
 * 
 * Hash: 0xF9F0B3028431967B | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetOwnerId(index: number): string {
    return UgcQueryGetOwnerId(undefined, index);
}

/**
 * No comment provided
 * 
 * Hash: 0xCAF50048C8D0FBA0 | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetPlaylistName(index: number): string {
    return UgcQueryGetPlaylistName(undefined, index);
}

/**
 * No comment provided
 * 
 * Hash: 0x104080CA9E519B00 | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetPosixPublishedDate(): number {
    return UgcQueryGetPosixPublishedDate(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x21A99A72B00D8002 | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetPosixUpdatedDate(): number {
    return UgcQueryGetPosixUpdatedDate(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9993F1E11944A3DD | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetPublished(): boolean {
    return UgcQueryGetPublished(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x24CD8FAEA1368379 | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetRating(index: number): number {
    return UgcQueryGetRating(undefined, index, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x566CEB0542EF5ECF | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetRootContentId(index: number): string {
    return UgcQueryGetRootContentId(undefined, index);
}

/**
 * No comment provided
 * 
 * Hash: 0x63E9DCBC8B0931ED | Since: 1207 | API-Set: unknown
 */
export function ugcQueryGetVersion(index: number): number {
    return UgcQueryGetVersion(undefined, index, 0);
}

