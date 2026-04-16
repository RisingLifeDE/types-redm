import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x59F6F5C1D129F106 | Since: 1207 | API-Set: unknown
 */
export function createAggregate(): number {
    return CreateVolumeAggregate();
}

/**
 * No comment provided
 * 
 * Hash: 0xDF85637F22706891 | Since: 1207 | API-Set: unknown
 */
export function createBox(pos: Vector3, rot: Vector3, scale: Vector3): number {
    return CreateVolumeBox(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x0522D4774B82E3E6 | Since: 1207 | API-Set: unknown
 */
export function createCylinder(pos: Vector3, rot: Vector3, scale: Vector3): number {
    return CreateVolumeCylinder(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xB3FB80A32BAE3065 | Since: 1207 | API-Set: unknown
 */
export function createSphere(pos: Vector3, rot: Vector3, scale: Vector3): number {
    return CreateVolumeSphere(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x43F867EF5C463A53 | Since: 1207 | API-Set: unknown
 */
export function deleteVolume(volume: number): void {
    DeleteVolume(volume);
}

/**
 * No comment provided
 * 
 * Hash: 0x397769175A7DBB30 | Since: 1207 | API-Set: unknown
 */
export function doesCollideWithAnyVolumeLock(pos: Vector3, radius: number): boolean {
    return DoesVolumeCollideWithAnyVolumeLock(pos.x, pos.y, pos.z, radius, false, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x92A78D0BEDB332A3 | Since: 1207 | API-Set: unknown
 */
export function doesExist(volume: number): boolean {
    return DoesVolumeExist(volume);
}

/**
 * No comment provided
 * 
 * Hash: 0xF70F00013A62F866 | Since: 1207 | API-Set: unknown
 */
export function getCoords(volume: number): Vector3 {
    return new Vector3(GetVolumeCoords(volume));
}

/**
 * enum eVolumeLockRequestStatus
 * {
 * VOLUME_LOCK_REQUEST_STATUS_INVALID,
 * VOLUME_LOCK_REQUEST_STATUS_READY,
 * VOLUME_LOCK_REQUEST_STATUS_IN_PROGRESS,
 * VOLUME_LOCK_REQUEST_STATUS_SUCCEEDED,
 * VOLUME_LOCK_REQUEST_STATUS_FAILED
 * };
 * 
 * Hash: 0xB33A604345F58202 | Since: 1207 | API-Set: unknown
 */
export function getLockRequestStatus(volLockRequestId: number): number {
    return GetVolumeLockRequestStatus(volLockRequestId);
}

/**
 * No comment provided
 * 
 * Hash: 0x18675BC914891122 | Since: 1207 | API-Set: unknown
 */
export function getRotation(volume: number): Vector3 {
    return new Vector3(GetVolumeRotation(volume));
}

/**
 * No comment provided
 * 
 * Hash: 0x3E2A25B2416DD67E | Since: 1207 | API-Set: unknown
 */
export function getScale(volume: number): Vector3 {
    return new Vector3(GetVolumeScale(volume));
}

/**
 * Old name: _IS_POSITION_INSIDE_VOLUME
 * 
 * Hash: 0xF256A75210C5C0EB | Since: 1207 | API-Set: unknown
 */
export function isPointIn(volume: number, pos: Vector3): boolean {
    return IsPointInVolume(volume, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xA4A4359320345B34 | Since: 1207 | API-Set: unknown
 */
export function isLockRequestValid(volLockRequestId: number): boolean {
    return IsVolumeLockRequestValid(volLockRequestId);
}

/**
 * No comment provided
 * 
 * Hash: 0xF14BCEF290F869E1 | Since: 1207 | API-Set: unknown
 */
export function requestLock(pos: Vector3, radius: number): number {
    return RequestVolumeLock(pos.x, pos.y, pos.z, radius, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x183C0B6CFEFFCAE4 | Since: 1207 | API-Set: unknown
 */
export function requestLockWithArgs(): [number, any] {
    return RequestVolumeLockWithArgs();
}

/**
 * No comment provided
 * 
 * Hash: 0x541B8576615C33DE | Since: 1207 | API-Set: unknown
 */
export function setCoords(volume: number, pos: Vector3): boolean {
    return SetVolumeCoords(volume, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xE2BE6FFA4A13CBB0 | Since: 1207 | API-Set: unknown
 */
export function setOwnerPersistentCharacter(volume: number, persChar: any): void {
    SetVolumeOwnerPersistentCharacter(volume, persChar, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xA07CF1B21B56F041 | Since: 1207 | API-Set: unknown
 */
export function setRotation(volume: number, rot: Vector3): boolean {
    return SetVolumeRotation(volume, rot.x, rot.y, rot.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xA46E98BDC407E23D | Since: 1207 | API-Set: unknown
 */
export function setScale(volume: number, scale: Vector3): boolean {
    return SetVolumeScale(volume, scale.x, scale.y, scale.z);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x128FC3A893BF853A | Since: 1207 | API-Set: unknown
 */
export function _0x128FC3A893BF853A(): void {
    Citizen.invokeNative('0x128FC3A893BF853A', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x351D71B8B72B858B | Since: 1207 | API-Set: unknown
 */
export function _0x351D71B8B72B858B(): any {
    return Citizen.invokeNative('0x351D71B8B72B858B', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3EFABB21E14A6BD1 | Since: 1207 | API-Set: unknown
 */
export function _0x3EFABB21E14A6BD1(): void {
    Citizen.invokeNative('0x3EFABB21E14A6BD1', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x40F769D31A00D5A0 | Since: 1207 | API-Set: unknown
 */
export function _0x40F769D31A00D5A0(): any {
    return Citizen.invokeNative('0x40F769D31A00D5A0', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4A8FEFC43FD8AC9B | Since: 1207 | API-Set: unknown
 */
export function _0x4A8FEFC43FD8AC9B(): void {
    Citizen.invokeNative('0x4A8FEFC43FD8AC9B', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x51E52C9687FCDEEC | Since: 1207 | API-Set: unknown
 */
export function _0x51E52C9687FCDEEC(): any {
    return Citizen.invokeNative('0x51E52C9687FCDEEC', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x52572B331E693AED | Since: 1207 | API-Set: unknown
 */
export function _0x52572B331E693AED(): void {
    Citizen.invokeNative('0x52572B331E693AED', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x53D05D60E5F5B40C | Since: 1207 | API-Set: unknown
 */
export function _0x53D05D60E5F5B40C(): void {
    Citizen.invokeNative('0x53D05D60E5F5B40C', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x695DAC2DB928F308 | Since: 1207 | API-Set: unknown
 */
export function _0x695DAC2DB928F308(): void {
    Citizen.invokeNative('0x695DAC2DB928F308', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6D5F9E69BA1BE783 | Since: 1207 | API-Set: unknown
 */
export function _0x6D5F9E69BA1BE783(): void {
    Citizen.invokeNative('0x6D5F9E69BA1BE783', undefined);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0x748C5F51A18CB8F0 | Since: 1207 | API-Set: unknown
 */
export function _0x748C5F51A18CB8F0(): void {
    Citizen.invokeNative('0x748C5F51A18CB8F0', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x7FD78DFD0C5D7B9B | Since: 1207 | API-Set: unknown
 */
export function _0x7FD78DFD0C5D7B9B(): any {
    return Citizen.invokeNative('0x7FD78DFD0C5D7B9B', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x870E9981ED27C815 | Since: 1207 | API-Set: unknown
 */
export function _0x870E9981ED27C815(): any {
    return Citizen.invokeNative('0x870E9981ED27C815', undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x998202B206872672 | Since: 1207 | API-Set: unknown
 */
export function _0x998202B206872672(): void {
    Citizen.invokeNative('0x998202B206872672', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xAA9EE2AAFC717623 | Since: 1207 | API-Set: unknown
 */
export function _0xAA9EE2AAFC717623(): any {
    return Citizen.invokeNative('0xAA9EE2AAFC717623', undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xAC355980681A7F89 | Since: 1207 | API-Set: unknown
 */
export function _0xAC355980681A7F89(): void {
    Citizen.invokeNative('0xAC355980681A7F89', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB440F4E35393FC39 | Since: 1207 | API-Set: unknown
 */
export function _0xB440F4E35393FC39(volume: number): void {
    Citizen.invokeNative('0xB440F4E35393FC39', volume, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB469CFD9E065EB99 | Since: 1207 | API-Set: unknown
 */
export function _0xB469CFD9E065EB99(): void {
    Citizen.invokeNative('0xB469CFD9E065EB99', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC4019CF9AE8E931A | Since: 1207 | API-Set: unknown
 */
export function _0xC4019CF9AE8E931A(volLockRequestId: number): Vector3 {
    return new Vector3(Citizen.invokeNative('0xC4019CF9AE8E931A', volLockRequestId));
}

/**
 * No comment provided
 * 
 * Hash: 0xC61E2FD926DBB406 | Since: 1311 | API-Set: unknown
 */
export function _0xC61E2FD926DBB406(): void {
    Citizen.invokeNative('0xC61E2FD926DBB406');
}

/**
 * No comment provided
 * 
 * Hash: 0xCA5C90D40665D5CE | Since: 1207 | API-Set: unknown
 */
export function _0xCA5C90D40665D5CE(): any {
    return Citizen.invokeNative('0xCA5C90D40665D5CE', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD460135C98940274 | Since: 1207 | API-Set: unknown
 */
export function _0xD460135C98940274(volume: number): void {
    Citizen.invokeNative('0xD460135C98940274', volume, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD4FA73FE628FEC63 | Since: 1207 | API-Set: unknown
 */
export function _0xD4FA73FE628FEC63(): void {
    Citizen.invokeNative('0xD4FA73FE628FEC63', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD52DF30355EA7C8E | Since: 1207 | API-Set: unknown
 */
export function _0xD52DF30355EA7C8E(): void {
    Citizen.invokeNative('0xD52DF30355EA7C8E', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD882C5B3991575B7 | Since: 1207 | API-Set: unknown
 */
export function _0xD882C5B3991575B7(): Vector3 {
    return new Vector3(Citizen.invokeNative('0xD882C5B3991575B7', undefined, undefined, undefined, undefined, undefined));
}

/**
 * No comment provided
 * 
 * Hash: 0xEBA87B9273835CF3 | Since: 1207 | API-Set: unknown
 */
export function _0xEBA87B9273835CF3(): void {
    Citizen.invokeNative('0xEBA87B9273835CF3', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEE1D6FF54CAF7714 | Since: 1207 | API-Set: unknown
 */
export function _0xEE1D6FF54CAF7714(): any {
    return Citizen.invokeNative('0xEE1D6FF54CAF7714', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF3A2FBA5985C8CD5 | Since: 1207 | API-Set: unknown
 */
export function _0xF3A2FBA5985C8CD5(): void {
    Citizen.invokeNative('0xF3A2FBA5985C8CD5', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF6CE6F9C3897804E | Since: 1207 | API-Set: unknown
 */
export function _0xF6CE6F9C3897804E(): any {
    return Citizen.invokeNative('0xF6CE6F9C3897804E', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF6F5447D418DAA82 | Since: 1207 | API-Set: unknown
 */
export function _0xF6F5447D418DAA82(): any {
    return Citizen.invokeNative('0xF6F5447D418DAA82', undefined);
}

/**
 * nullsub, doesn't do anything
 * 
 * Hash: 0xFA15C9A320E707B0 | Since: 1207 | API-Set: unknown
 */
export function _0xFA15C9A320E707B0(): void {
    Citizen.invokeNative('0xFA15C9A320E707B0');
}

/**
 * _ADD_R* - _ADD_V(OLUME?)*
 * 
 * Hash: 0x6E0D3C3F828DA773 | Since: 1207 | API-Set: unknown
 */
export function addBoundsToAggregate(volume: number, aggregate: number): void {
    AddBoundsToAggregateVolume(volume, aggregate);
}

/**
 * No comment provided
 * 
 * Hash: 0x39816F6F94F385AD | Since: 1207 | API-Set: unknown
 */
export function addBoxToVolumeAggregate(aggregate: number): void {
    AddBoxVolumeToVolumeAggregate(aggregate, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xBCE668AAF83608BE | Since: 1207 | API-Set: unknown
 */
export function addCylinderToVolumeAggregate(aggregate: number): void {
    AddCylinderVolumeToVolumeAggregate(aggregate, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x58D3803FA639A3BB | Since: 1311 | API-Set: unknown
 */
export function addEntryLock(): [boolean, any] {
    return AddEntryVolumeLock();
}

/**
 * No comment provided
 * 
 * Hash: 0x5B7D7BF36D2DE18B | Since: 1207 | API-Set: unknown
 */
export function addSphereToVolumeAggregate(aggregate: number): void {
    AddSphereVolumeToVolumeAggregate(aggregate, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x12FCAA23F2320422 | Since: 1207 | API-Set: unknown
 */
export function addToVolumeAggregate(aggregate: number, typeHash: number | string, pos: Vector3, rot: Vector3, scale: Vector3): void {
    if (typeof typeHash === 'string') typeHash = GetHashKey(typeHash)
    AddVolumeToVolumeAggregate(aggregate, typeHash, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x0EB78C2B156635B1 | Since: 1207 | API-Set: unknown
 */
export function createAntiGrief(volumeType: number | string, pos: Vector3, rot: Vector3, scale: Vector3): number {
    if (typeof volumeType === 'string') volumeType = GetHashKey(volumeType)
    return CreateAntiGriefVolume(volumeType, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xBBE768E3AE76E07C | Since: 1207 | API-Set: unknown
 */
export function createSpeed(): number {
    return CreateSpeedVolume(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5D580DE6398BB162 | Since: 1207 | API-Set: unknown
 */
export function createAggregateWithCustomName(): [number, string] {
    return CreateVolumeAggregateWithCustomName();
}

/**
 * No comment provided
 * 
 * Hash: 0xF68485C7495D848E | Since: 1207 | API-Set: unknown
 */
export function createBoxWithCustomName(pos: Vector3, rot: Vector3, scale: Vector3): [number, string] {
    return CreateVolumeBoxWithCustomName(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x502022FA1AF9DC86 | Since: 1207 | API-Set: unknown
 */
export function createByHash(volumeType: number | string, pos: Vector3, rot: Vector3, scale: Vector3): number {
    if (typeof volumeType === 'string') volumeType = GetHashKey(volumeType)
    return CreateVolumeByHash(volumeType, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x1F85E4AC774A201E | Since: 1207 | API-Set: unknown
 */
export function createByHashWithCustomName(volumeType: number | string, pos: Vector3, rot: Vector3, scale: Vector3): [number, string] {
    if (typeof volumeType === 'string') volumeType = GetHashKey(volumeType)
    return CreateVolumeByHashWithCustomName(volumeType, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xDF1E350EDDF06E59 | Since: 1207 | API-Set: unknown
 */
export function createCylinderWithCustomName(pos: Vector3, rot: Vector3, scale: Vector3): [number, string] {
    return CreateVolumeCylinderWithCustomName(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z);
}

/**
 * Params: p5 is always 0
 * 
 * Hash: 0x00BBF7CEAE8C666A | Since: 1207 | API-Set: unknown
 */
export function createLock(pos: Vector3, radius: number, flag: number): number {
    return CreateVolumeLock(pos.x, pos.y, pos.z, radius, flag, undefined);
}

/**
 * Params: p3 is always 0
 * 
 * Hash: 0xF383E96C4904DF0C | Since: 1207 | API-Set: unknown
 */
export function createLockAttachedToEntity(entity: number | IEntity, radius: number, flag: number): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return CreateVolumeLockAttachedToEntity(_entity, radius, flag, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x10157BC3247FF3BA | Since: 1207 | API-Set: unknown
 */
export function createSphereWithCustomName(pos: Vector3, rot: Vector3, scale: Vector3): [number, string] {
    return CreateVolumeSphereWithCustomName(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xFD0E389CD44434B6 | Since: 1207 | API-Set: unknown
 */
export function createWalkAndTalk(): number {
    return CreateWalkAndTalkVolume(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x77A6E4AD0C496F81 | Since: 1207 | API-Set: unknown
 */
export function findLockRequestIdWithArgs(): [number, any] {
    return FindVolumeLockRequestIdWithArgs();
}

/**
 * Indexes items (including entyties and peds) in a set volume
 * Counts up as its the return value of how many items it writes to given itemSet
 * 
 * Hash: 0x2B32B11520626229 | Since: 1207 | API-Set: unknown
 */
export function getAmountOfIndexedItems(pos: Vector3, radius: number, itemSet: any): number {
    return Citizen.invokeNative('0x2B32B11520626229', pos.x, pos.y, pos.z, radius, itemSet);
}

/**
 * No comment provided
 * 
 * Hash: 0x5737199AF2DC609F | Since: 1207 | API-Set: unknown
 */
export function getBounds(volume: number): [Vector3, Vector3] {
    return GetVolumeBounds(volume);
}

/**
 * Returns relationshipGroup Hash
 * 
 * Hash: 0x666C2F53ABEFC952 | Since: 1207 | API-Set: unknown
 */
export function getRelationship(volume: number): number {
    return GetVolumeRelationship(volume);
}

/**
 * No comment provided
 * 
 * Hash: 0xFEFF01B5725BCD22 | Since: 1207 | API-Set: unknown
 */
export function isAggregate(volume: number): boolean {
    return IsAggregateVolume(volume);
}

/**
 * No comment provided
 * 
 * Hash: 0x769BB7626B8CDB06 | Since: 1207 | API-Set: unknown
 */
export function isPointNearLockCenter(pos: Vector3, radius: number, flags: number): boolean {
    return IsPointNearVolumeLockCenter(pos.x, pos.y, pos.z, radius, 0, 0, flags);
}

/**
 * No comment provided
 * 
 * Hash: 0xF6A8A652A6B186CD | Since: 1207 | API-Set: unknown
 */
export function isLockRequestValid2(volLockRequestId: number): boolean {
    return IsVolumeLockRequestValid2(volLockRequestId);
}

/**
 * No comment provided
 * 
 * Hash: 0xEC43C2FFB70E3F30 | Since: 1207 | API-Set: unknown
 */
export function modifyLockLocation(volLock: number, pos: Vector3): void {
    ModifyVolumeLockLocation(volLock, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0xFDFECC6EE4491E11 | Since: 1207 | API-Set: unknown
 */
export function releaseLock(volLockRequestId: number): void {
    ReleaseLockVolume(volLockRequestId);
}

/**
 * _REMOVE_E* - _REMOVE_R*
 * 
 * Hash: 0xF92FA8890DECECF6 | Since: 1207 | API-Set: unknown
 */
export function removeBoundsFromAggregate(volume: number, aggregate: number): void {
    RemoveBoundsFromAggregateVolume(volume, aggregate);
}

/**
 * No comment provided
 * 
 * Hash: 0xBE551C2CC421185D | Since: 1207 | API-Set: unknown
 */
export function setAntiGriefBlocksHorse(volume: number, toggle: boolean): void {
    SetAntiGriefVolumeBlocksHorse(volume, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x5B23DFF8E0948BB2 | Since: 1207 | API-Set: unknown
 */
export function setAntiGriefBlocksPlayer(volume: number, toggle: boolean): void {
    SetAntiGriefVolumeBlocksPlayer(volume, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xFD010A2154B40676 | Since: 1207 | API-Set: unknown
 */
export function setRelationship(volume: number, relationshipGroup: number | string): void {
    if (typeof relationshipGroup === 'string') relationshipGroup = GetHashKey(relationshipGroup)
    SetVolumeRelationship(volume, relationshipGroup);
}

