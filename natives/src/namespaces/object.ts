import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0xE2B3B852B537C398 | Since: 1207
 */
export function allowDamageEventsForNonNetworkeds(enabled: boolean): void {
    AllowDamageEventsForNonNetworkedObjects(enabled);
}

/**
 * No comment provided
 * 
 * Hash: 0x8DC39368BDD57755 | Since: 1207
 */
export function attachPortablePickupToPed(pickupObject: number | IObject, ped: number | IPed): void {
    const _pickupObject = pickupObject instanceof IObject ? pickupObject.handle() : pickupObject;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    AttachPortablePickupToPed(_pickupObject, _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xB8F5062070BB6DBD | Since: 1207
 */
export function blockPickupFromPlayerCollection(): void {
    BlockPickupFromPlayerCollection(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8462BE2341A55B6F | Since: 1207
 */
export function breakAllFragmentBones(_object: number | IObject): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    BreakAllObjectFragmentBones(__object);
}

/**
 * No comment provided
 * 
 * Hash: 0xE7E4C198B0185900 | Since: 1207
 */
export function breakFragmentChild(_object: number | IObject): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    BreakObjectFragmentChild(__object, undefined, false);
}

/**
 * Old name: _GET_PICKUP_HASH
 * 
 * Hash: 0x5EAAD83F8CFB4575 | Since: 1207
 */
export function convertOldPickupTypeToNew(pickupHash: number | string): number {
    if (typeof pickupHash === 'string') pickupHash = GetHashKey(pickupHash)
    return ConvertOldPickupTypeToNew(pickupHash);
}

/**
 * flags: see CREATE_PICKUP
 * 
 * Hash: 0x673966A0C0FD7171 | Since: 1207
 */
export function createAmbientPickup(pickupHash: number | string, pos: Vector3, flags: number, amount: number, modelHash: number | string, createAsScriptObject: boolean, scriptHostObject: boolean, customAmmoType: number): number {
    if (typeof pickupHash === 'string') pickupHash = GetHashKey(pickupHash)
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return CreateAmbientPickup(pickupHash, pos.x, pos.y, pos.z, flags, amount, modelHash, createAsScriptObject, scriptHostObject, customAmmoType, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x509D5878EB39E842 | Since: 1207
 */
export function create(modelHash: number | string, pos: Vector3, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): number {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return CreateObject(modelHash, pos.x, pos.y, pos.z, isNetwork, bScriptHostObj, dynamic, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x9A294B2138ABB884 | Since: 1207
 */
export function createNoOffset(modelHash: number | string, pos: Vector3, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): number {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return CreateObjectNoOffset(modelHash, pos.x, pos.y, pos.z, isNetwork, bScriptHostObj, dynamic, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xB6CBD40F8EA69E8A | Since: 1207
 */
export function createSkeleton(_object: number | IObject): boolean {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return CreateObjectSkeleton(__object);
}

/**
 * https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/Placement%20Flags
 * https://github.com/femga/rdr3_discoveries/blob/master/objects/pickup_list.lua
 * 
 * Hash: 0xFBA08C503DD5FA58 | Since: 1207
 */
export function createPickup(pickupHash: number | string, pos: Vector3, flags: number, modelHash: number | string): any {
    if (typeof pickupHash === 'string') pickupHash = GetHashKey(pickupHash)
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return CreatePickup(pickupHash, pos.x, pos.y, pos.z, flags, 0, false, modelHash, 0, 0, undefined);
}

/**
 * flags: see CREATE_PICKUP
 * 
 * Hash: 0x891804727E0A98B7 | Since: 1207
 */
export function createPickupRotate(pickupHash: number | string, pos: Vector3, rot: Vector3, flags: number, modelHash: number | string): any {
    if (typeof pickupHash === 'string') pickupHash = GetHashKey(pickupHash)
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return CreatePickupRotate(pickupHash, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, flags, 0, 0, false, modelHash, 0, 0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2EAF1FDB2FB55698 | Since: 1207
 */
export function createPortablePickup(pickupHash: number | string, pos: Vector3, placeOnGround: boolean, modelHash: number | string): number {
    if (typeof pickupHash === 'string') pickupHash = GetHashKey(pickupHash)
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return CreatePortablePickup(pickupHash, pos.x, pos.y, pos.z, placeOnGround, modelHash);
}

/**
 * Deletes the specified object, then sets the handle pointed to by the pointer to NULL.
 * 
 * Hash: 0x931914268722C263 | Since: 1207
 */
export function deleteObject(_object: number | IObject): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    DeleteObject(__object);
}

/**
 * No comment provided
 * 
 * Hash: 0xCF463D1E9A0AECB1 | Since: 1207
 */
export function detachPortablePickupFromPed(pickupObject: number | IObject): void {
    const _pickupObject = pickupObject instanceof IObject ? pickupObject.handle() : pickupObject;
    DetachPortablePickupFromPed(_pickupObject);
}

/**
 * No comment provided
 * 
 * Hash: 0xBFA48E2FF417213F | Since: 1207
 */
export function doesOfTypeExistAtCoords(pos: Vector3, radius: number, hash: number | string): boolean {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return DoesObjectOfTypeExistAtCoords(pos.x, pos.y, pos.z, radius, hash, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xAFC1CA75AD4074D1 | Since: 1207
 */
export function doesPickupExist(pickup: any): boolean {
    return DoesPickupExist(pickup);
}

/**
 * No comment provided
 * 
 * Hash: 0xD9EFB6DBF7DAAEA3 | Since: 1207
 */
export function doesPickupObjectExist(pickupObject: number | IObject): boolean {
    const _pickupObject = pickupObject instanceof IObject ? pickupObject.handle() : pickupObject;
    return DoesPickupObjectExist(_pickupObject);
}

/**
 * No comment provided
 * 
 * Hash: 0xF9C36251F6E48E33 | Since: 1207
 */
export function doesPickupOfTypeExistInArea(pickupHash: number | string, pos: Vector3, radius: number): boolean {
    if (typeof pickupHash === 'string') pickupHash = GetHashKey(pickupHash)
    return DoesPickupOfTypeExistInArea(pickupHash, pos.x, pos.y, pos.z, radius);
}

/**
 * No comment provided
 * 
 * Hash: 0x52AF537A0C5B8AAD | Since: 1207
 */
export function doesRayfireMapExist(_object: number | IObject): boolean {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return DoesRayfireMapObjectExist(__object);
}

/**
 * No comment provided
 * 
 * Hash: 0x160AA1B32F6139B8 | Since: 1207
 */
export function doorSystemGetDoorState(doorHash: number | string): number {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    return DoorSystemGetDoorState(doorHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x65499865FCA6E5EC | Since: 1207
 */
export function doorSystemGetOpenRatio(doorHash: number | string): number {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    return DoorSystemGetOpenRatio(doorHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x9BA001CB45CBF627 | Since: 1207
 */
export function doorSystemSetAutomaticDistance(doorHash: number | string, distance: number): void {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    DoorSystemSetAutomaticDistance(doorHash, distance);
}

/**
 * No comment provided
 * 
 * Hash: 0x03C27E13B42A0E82 | Since: 1207
 */
export function doorSystemSetAutomaticRate(doorHash: number | string, rate: number): void {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    DoorSystemSetAutomaticRate(doorHash, rate);
}

/**
 * Door lock states:
 * enum eDoorState
 * {
 * DOORSTATE_INVALID = -1,
 * DOORSTATE_UNLOCKED,
 * DOORSTATE_LOCKED_UNBREAKABLE,
 * DOORSTATE_LOCKED_BREAKABLE,
 * DOORSTATE_HOLD_OPEN_POSITIVE,
 * DOORSTATE_HOLD_OPEN_NEGATIVE
 * };
 * 
 * Hash: 0x6BAB9442830C7F53 | Since: 1207
 */
export function doorSystemSetDoorState(doorHash: number | string, state: number): void {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    DoorSystemSetDoorState(doorHash, state);
}

/**
 * Sets the ajar angle of a door.
 * Ranges from -1.0 to 1.0, and 0.0 is closed / default.
 * 
 * Hash: 0xB6E6FBA95C7324AC | Since: 1207
 */
export function doorSystemSetOpenRatio(doorHash: number | string, ajar: number, forceUpdate: boolean): void {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    DoorSystemSetOpenRatio(doorHash, ajar, forceUpdate);
}

/**
 * No comment provided
 * 
 * Hash: 0xF9C1681347C8BD15 | Since: 1207
 */
export function fixFragment(_object: number | IObject): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    FixObjectFragment(__object);
}

/**
 * No comment provided
 * 
 * Hash: 0x758A5C1B3B1E1990 | Since: 1207
 */
export function forcePickupRegenerate(): void {
    ForcePickupRegenerate(undefined);
}

/**
 * Returns the closest object of a specified type within a given radius from a specified position
 * 
 * Hash: 0xE143FA2249364369 | Since: 1207
 */
export function getClosestOfType(pos: Vector3, radius: number, modelHash: number | string, missionScriptObject: boolean, scriptHostObject: boolean, networkObject: boolean): number {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return GetClosestObjectOfType(pos.x, pos.y, pos.z, radius, modelHash, missionScriptObject, scriptHostObject, networkObject);
}

/**
 * No comment provided
 * 
 * Hash: 0xB6FBFD079B8D0596 | Since: 1207
 */
export function getFragmentDamageHealth(): number {
    return GetObjectFragmentDamageHealth(undefined, false);
}

/**
 * Old name: _GET_OBJECT_OFFSET_FROM_COORDS
 * 
 * Hash: 0x163E252DE035A133 | Since: 1207
 */
export function getOffsetFromCoordAndHeadingInWorldCoords(pos: Vector3, heading: number, xOffset: number, yOffset: number, zOffset: number): Vector3 {
    return new Vector3(GetOffsetFromCoordAndHeadingInWorldCoords(pos.x, pos.y, pos.z, heading, xOffset, yOffset, zOffset));
}

/**
 * No comment provided
 * 
 * Hash: 0x225B8B35C88029B3 | Since: 1207
 */
export function getPickupCoords(pickup: any): Vector3 {
    return new Vector3(GetPickupCoords(pickup));
}

/**
 * No comment provided
 * 
 * Hash: 0x5099BC55630B25AE | Since: 1207
 */
export function getPickup(pickup: any): number {
    return GetPickupObject(pickup);
}

/**
 * No comment provided
 * 
 * Hash: 0xB48FCED898292E52 | Since: 1207
 */
export function getRayfireMap(pos: Vector3, radius: number, name: string): number {
    return GetRayfireMapObject(pos.x, pos.y, pos.z, radius, name);
}

/**
 * No comment provided
 * 
 * Hash: 0x260EE4FDBDF4DB01 | Since: 1207
 */
export function getRayfireMapAnimPhase(_object: number | IObject): number {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return GetRayfireMapObjectAnimPhase(__object);
}

/**
 * No comment provided
 * 
 * Hash: 0x6E16BC2503FF1FF0 | Since: 1207
 */
export function getSafePickupCoords(): Vector3 {
    return new Vector3(GetSafePickupCoords(undefined, undefined, undefined, undefined, undefined, undefined));
}

/**
 * No comment provided
 * 
 * Hash: 0x899BA936634A322E | Since: 1207
 */
export function getStateOfRayfireMap(_object: number | IObject): number {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return GetStateOfRayfireMapObject(__object);
}

/**
 * No comment provided
 * 
 * Hash: 0x08F96CA6C551AD51 | Since: 1207
 */
export function getWeaponTypeFromPickupType(pickupHash: number | string): number {
    if (typeof pickupHash === 'string') pickupHash = GetHashKey(pickupHash)
    return GetWeaponTypeFromPickupType(pickupHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x761B0E69AC4D007E | Since: 1207
 */
export function hasClosestOfTypeBeenBroken(modelHash: number | string): boolean {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return HasClosestObjectOfTypeBeenBroken(0, 0, 0, 0, modelHash, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8ABFB70C49CC43E2 | Since: 1207
 */
export function hasBeenBroken(): boolean {
    return HasObjectBeenBroken(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x80EC48E6679313F9 | Since: 1207
 */
export function hasPickupBeenCollected(pickup: any): boolean {
    return HasPickupBeenCollected(pickup);
}

/**
 * No comment provided
 * 
 * Hash: 0xC531EE8A1145A149 | Since: 1207
 */
export function isDoorClosed(doorHash: number | string): boolean {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    return IsDoorClosed(doorHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xC153C43EA202C8C1 | Since: 1207
 */
export function isDoorRegisteredWithSystem(doorHash: number | string): boolean {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    return IsDoorRegisteredWithSystem(doorHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x0378C08504160D0D | Since: 1207
 */
export function isAPortablePickup(_object: number | IObject): boolean {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return IsObjectAPortablePickup(__object);
}

/**
 * No comment provided
 * 
 * Hash: 0x8B32ACE6326A7546 | Since: 1207
 */
export function isVisible(_object: number | IObject): boolean {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return IsObjectVisible(__object);
}

/**
 * No comment provided
 * 
 * Hash: 0x2A70BAE8883E4C81 | Since: 1207
 */
export function isPointInAngledArea(): boolean {
    return IsPointInAngledArea(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, false);
}

/**
 * Old name: _MARK_OBJECT_FOR_DELETION
 * 
 * Hash: 0xADBE4809F19F927A | Since: 1207
 */
export function onlyCleanUpWhenOutOfRange(_object: number | IObject): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    OnlyCleanUpObjectWhenOutOfRange(__object);
}

/**
 * No comment provided
 * 
 * Hash: 0x58A850EAEE20FAA3 | Since: 1207
 */
export function placeOnGroundProperly(_object: number | IObject): boolean {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return PlaceObjectOnGroundProperly(__object, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x92AEFB5F6E294023 | Since: 1207
 */
export function preventCollectionOfPortablePickup(_object: number | IObject): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    PreventCollectionOfPortablePickup(__object, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x27F9D613092159CF | Since: 1207
 */
export function removeAllPickupsOfType(pickupHash: number | string): void {
    if (typeof pickupHash === 'string') pickupHash = GetHashKey(pickupHash)
    RemoveAllPickupsOfType(pickupHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x464D8E1427156FE4 | Since: 1207
 */
export function removeDoorFromSystem(doorHash: number | string): void {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    RemoveDoorFromSystem(doorHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x3288D8ACAECD2AB2 | Since: 1207
 */
export function removePickup(pickup: any): void {
    RemovePickup(pickup);
}

/**
 * No comment provided
 * 
 * Hash: 0x406137F8EF90EAF5 | Since: 1207
 */
export function setActivatePhysicsAsSoonAsItIsUnfrozen(_object: number | IObject, toggle: boolean): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetActivateObjectPhysicsAsSoonAsItIsUnfrozen(__object, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xE124889AE0521FCF | Since: 1207
 */
export function setCustomTexturesOn(_object: number | IObject, txdHash: number | string): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    if (typeof txdHash === 'string') txdHash = GetHashKey(txdHash)
    SetCustomTexturesOnObject(__object, txdHash, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF538081986E49E9D | Since: 1207
 */
export function setForceThisFrame(pos: Vector3): void {
    SetForceObjectThisFrame(pos.x, pos.y, pos.z, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x78857FC65CADB909 | Since: 1207
 */
export function setLocalPlayerCanCollectPortablePickups(toggle: boolean): void {
    SetLocalPlayerCanCollectPortablePickups(toggle);
}

/**
 * Maximum amount of pickup models that can be disallowed is 10.
 * 
 * Old name: _SET_LOCAL_PLAYER_CAN_USE_PICKUPS_WITH_THIS_MODEL
 * 
 * Hash: 0x88EAEC617CD26926 | Since: 1207
 */
export function setLocalPlayerPermittedToCollectPickupsWithModel(modelHash: number | string, toggle: boolean): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    SetLocalPlayerPermittedToCollectPickupsWithModel(modelHash, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0x0BF3B3BD47D79C08 | Since: 1207
 */
export function setMaxNumPortablePickupsCarriedByPlayer(modelHash: number | string): void {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    SetMaxNumPortablePickupsCarriedByPlayer(modelHash, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x4D89D607CB3DD1D2 | Since: 1207
 */
export function setAllowLowLodBuoyancy(_object: number | IObject, toggle: boolean): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectAllowLowLodBuoyancy(__object, toggle);
}

/**
 * Adjust the physics parameters of a prop, or otherwise known as "object". This is useful for simulated gravity.
 * 
 * Other parameters seem to be unknown.
 * 
 * p2: seems to be weight and gravity related. Higher value makes the obj fall faster. Very sensitive?
 * p3: seems similar to p2
 * p4: makes obj fall slower the higher the value
 * p5: similar to p4
 * 
 * Hash: 0xF6DF6E90DE7DF90F | Since: 1207
 */
export function setPhysicsParams(_object: number | IObject, weight: number, gravity: number, buoyancy: number): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectPhysicsParams(__object, weight, 0, 0, 0, 0, gravity, 0, 0, 0, 0, buoyancy);
}

/**
 * No comment provided
 * 
 * Hash: 0xEB6F1A9B5510A5D2 | Since: 1207
 */
export function setTakesDamageFromCollidingWithBuildings(_object: number | IObject, enabled: boolean): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectTakesDamageFromCollidingWithBuildings(__object, enabled);
}

/**
 * No comment provided
 * 
 * Hash: 0x8A7391690F5AFD81 | Since: 1207
 */
export function setTargettable(_object: number | IObject, targettable: boolean): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectTargettable(__object, targettable);
}

/**
 * Alt name: _SET_OBJECT_TINT
 * 
 * Old name: _SET_OBJECT_TEXTURE_VARIATION
 * 
 * Hash: 0x971DA0055324D033 | Since: 1207
 */
export function setTintIndex(_object: number | IObject, textureVariation: number): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectTintIndex(__object, textureVariation);
}

/**
 * No comment provided
 * 
 * Hash: 0x634C19521485AB25 | Since: 1207
 */
export function setPickupDoNotAutoPlaceOnGround(pickupObject: number | IObject): void {
    const _pickupObject = pickupObject instanceof IObject ? pickupObject.handle() : pickupObject;
    SetPickupDoNotAutoPlaceOnGround(_pickupObject);
}

/**
 * No comment provided
 * 
 * Hash: 0x318516E02DE3ECE2 | Since: 1207
 */
export function setPickupGenerationRangeMultiplier(multiplier: number): void {
    SetPickupGenerationRangeMultiplier(multiplier);
}

/**
 * No comment provided
 * 
 * Hash: 0x81218CE01B672219 | Since: 1207
 */
export function setPickupHiddenWhenUncollectable(): void {
    SetPickupHiddenWhenUncollectable(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x92E87F60F21A0C3A | Since: 1207
 */
export function setPickupNotLootable(): void {
    SetPickupNotLootable(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1607C7D9B3021DF5 | Since: 1207
 */
export function setPickupParticleFxHighlight(): void {
    SetPickupParticleFxHighlight(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEB9740A38FD6D634 | Since: 1207
 */
export function setPickupParticleFxSpawn(): void {
    SetPickupParticleFxSpawn(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x78015C9B4B3ECC9D | Since: 1207
 */
export function setPickupRegenerationTime(pickup: any, duration: number): void {
    SetPickupRegenerationTime(pickup, duration);
}

/**
 * No comment provided
 * 
 * Hash: 0x4A8CB328CD6F1C9B | Since: 1207
 */
export function setPickupUncollectable(): void {
    SetPickupUncollectable(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5C29F698D404C5E1 | Since: 1207
 */
export function setStateOfRayfireMap(_object: number | IObject, state: number): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetStateOfRayfireMapObject(__object, state);
}

/**
 * No comment provided
 * 
 * Hash: 0x53E0DF1A2A3CF0CA | Since: 1207
 */
export function setTeamPickup(_object: number | IObject): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetTeamPickupObject(__object, undefined, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x2FDFF4107B8C1147 | Since: 1207
 */
export function slide(_object: number | IObject, toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: boolean): boolean {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return SlideObject(__object, toX, toY, toZ, speedX, speedY, speedZ, collision);
}

/**
 * No comment provided
 * 
 * Hash: 0xF92099527DB8E2A7 | Since: 1207
 */
export function suppressPickupRewardType(rewardType: number, suppress: boolean): void {
    SuppressPickupRewardType(rewardType, suppress);
}

/**
 * No comment provided
 * 
 * Hash: 0xB252BC036B525623 | Since: 1207
 */
export function trackVisibility(_object: number | IObject): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    TrackObjectVisibility(__object);
}

/**
 * No comment provided
 * 
 * Hash: 0x08C5825A2932EA7B | Since: 1207
 */
export function _0x08C5825A2932EA7B(): any {
    return Citizen.invokeNative('0x08C5825A2932EA7B', undefined);
}

/**
 * Params: p1 = 23 in R* Scripts
 * 
 * Hash: 0x0943113E02322164 | Since: 1207
 */
export function _0x0943113E02322164(_object: number | IObject): any {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return Citizen.invokeNative('0x0943113E02322164', __object, 0);
}

/**
 * something to do with doors lockdown when navmesh is swapping?UPDATE_WORLD_STATE  seems to be for unlocking something
 * 
 * Hash: 0x0C0A373D181BF900 | Since: 1207
 */
export function _0x0C0A373D181BF900(doorHash: number | string): void {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    Citizen.invokeNative('0x0C0A373D181BF900', doorHash);
}

/**
 * _SET_A(MBIENT_PICKUP_?)*
 * 
 * Hash: 0x1F5E07E14A86FAFC | Since: 1207
 */
export function _0x1F5E07E14A86FAFC(): void {
    Citizen.invokeNative('0x1F5E07E14A86FAFC', false);
}

/**
 * No comment provided
 * 
 * Hash: 0x22031584496CFB70 | Since: 1207
 */
export function _0x22031584496CFB70(): void {
    Citizen.invokeNative('0x22031584496CFB70', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x235C863DA77BD88D | Since: 1207
 */
export function _0x235C863DA77BD88D(): any {
    return Citizen.invokeNative('0x235C863DA77BD88D', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x250EBB11E81A10BE | Since: 1207
 */
export function _0x250EBB11E81A10BE(): any {
    return Citizen.invokeNative('0x250EBB11E81A10BE', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x2BF1953C0C21AC88 | Since: 1207
 */
export function _0x2BF1953C0C21AC88(): any {
    return Citizen.invokeNative('0x2BF1953C0C21AC88', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3A77DAE8B4FD7586 | Since: 1207
 */
export function _0x3A77DAE8B4FD7586(): void {
    Citizen.invokeNative('0x3A77DAE8B4FD7586', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3DF1A0A58498E209 | Since: 1436
 */
export function _0x3DF1A0A58498E209(_object: number | IObject): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0x3DF1A0A58498E209', __object, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3E2616E7EA539480 | Since: 1207
 */
export function _0x3E2616E7EA539480(): any {
    return Citizen.invokeNative('0x3E2616E7EA539480', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x46CBCF0E98A4E156 | Since: 1207
 */
export function _0x46CBCF0E98A4E156(): void {
    Citizen.invokeNative('0x46CBCF0E98A4E156', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x491439AEF410A2FC | Since: 1207
 */
export function _0x491439AEF410A2FC(): void {
    Citizen.invokeNative('0x491439AEF410A2FC', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4AE07EBA3462C5D5 | Since: 1207
 */
export function _0x4AE07EBA3462C5D5(): void {
    Citizen.invokeNative('0x4AE07EBA3462C5D5', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x4D8611DFE1126478 | Since: 1207
 */
export function _0x4D8611DFE1126478(): any {
    return Citizen.invokeNative('0x4D8611DFE1126478', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x5230BF34EB0EC645 | Since: 1207
 */
export function _0x5230BF34EB0EC645(): void {
    Citizen.invokeNative('0x5230BF34EB0EC645', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x57C242543B7B8FB9 | Since: 1207
 */
export function _0x57C242543B7B8FB9(): void {
    Citizen.invokeNative('0x57C242543B7B8FB9', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x58DE624FA7FB0E7F | Since: 1207
 */
export function _0x58DE624FA7FB0E7F(): any {
    return Citizen.invokeNative('0x58DE624FA7FB0E7F', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x614D0B4533F842D3 | Since: 1207
 */
export function _0x614D0B4533F842D3(): any {
    return Citizen.invokeNative('0x614D0B4533F842D3', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6579860A5558524A | Since: 1207
 */
export function _0x6579860A5558524A(): void {
    Citizen.invokeNative('0x6579860A5558524A', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6E2AA80BB0C03728 | Since: 1207
 */
export function _0x6E2AA80BB0C03728(): any {
    return Citizen.invokeNative('0x6E2AA80BB0C03728', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7D4411D6736CD295 | Since: 1207
 */
export function _0x7D4411D6736CD295(): any {
    return Citizen.invokeNative('0x7D4411D6736CD295', undefined, undefined);
}

/**
 * something to do with doors lockdown when navmesh is swapping? UPDATE_WORLD_STATE, seems to be for locking something
 * 
 * Hash: 0x7F458B543006C8FE | Since: 1207
 */
export function _0x7F458B543006C8FE(doorHash: number | string): void {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    Citizen.invokeNative('0x7F458B543006C8FE', doorHash, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x7FCD49388BC9B775 | Since: 1207
 */
export function _0x7FCD49388BC9B775(): void {
    Citizen.invokeNative('0x7FCD49388BC9B775', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9A74A9CADFA8A598 | Since: 1207
 */
export function _0x9A74A9CADFA8A598(): void {
    Citizen.invokeNative('0x9A74A9CADFA8A598', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9F52AD67D1A91BAD | Since: 1207
 */
export function _0x9F52AD67D1A91BAD(): any {
    return Citizen.invokeNative('0x9F52AD67D1A91BAD', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA93F925F1942E434 | Since: 1207
 */
export function _0xA93F925F1942E434(): void {
    Citizen.invokeNative('0xA93F925F1942E434', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xAAACF33CBF9B990A | Since: 1207
 */
export function _0xAAACF33CBF9B990A(): void {
    Citizen.invokeNative('0xAAACF33CBF9B990A', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xACD4F9831DFAD7F5 | Since: 1207
 */
export function _0xACD4F9831DFAD7F5(): any {
    return Citizen.invokeNative('0xACD4F9831DFAD7F5', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB3B1546D23DF8DE1 | Since: 1207
 */
export function _0xB3B1546D23DF8DE1(): void {
    Citizen.invokeNative('0xB3B1546D23DF8DE1', undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC07B91B996C1DE89 | Since: 1207
 */
export function _0xC07B91B996C1DE89(): void {
    Citizen.invokeNative('0xC07B91B996C1DE89', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCBFBD38F2E0A263B | Since: 1207
 */
export function _0xCBFBD38F2E0A263B(): void {
    Citizen.invokeNative('0xCBFBD38F2E0A263B', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCEAB54F4632C6EF6 | Since: 1207
 */
export function _0xCEAB54F4632C6EF6(): void {
    Citizen.invokeNative('0xCEAB54F4632C6EF6', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD91E55B6C005EB09 | Since: 1207
 */
export function _0xD91E55B6C005EB09(): any {
    return Citizen.invokeNative('0xD91E55B6C005EB09', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDE116ECFFDD4B997 | Since: 1207
 */
export function _0xDE116ECFFDD4B997(): void {
    Citizen.invokeNative('0xDE116ECFFDD4B997', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xDFA1237F5228263F | Since: 1207
 */
export function _0xDFA1237F5228263F(): void {
    Citizen.invokeNative('0xDFA1237F5228263F', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE157A8A336C7F04A | Since: 1207
 */
export function _0xE157A8A336C7F04A(): void {
    Citizen.invokeNative('0xE157A8A336C7F04A', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xEBA314768FB35D58 | Since: 1207
 */
export function _0xEBA314768FB35D58(): any {
    return Citizen.invokeNative('0xEBA314768FB35D58', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF65EDE5D02A7A760 | Since: 1207
 */
export function _0xF65EDE5D02A7A760(): void {
    Citizen.invokeNative('0xF65EDE5D02A7A760', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xF6E88489B4E6EBE5 | Since: 1207
 */
export function _0xF6E88489B4E6EBE5(): void {
    Citizen.invokeNative('0xF6E88489B4E6EBE5', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA99E8E575F2FEF8 | Since: 1436
 */
export function _0xFA99E8E575F2FEF8(): any {
    return Citizen.invokeNative('0xFA99E8E575F2FEF8', undefined);
}

/**
 * Registers a door, hashes: https://github.com/femga/rdr3_discoveries/tree/master/doorHashes
 * 
 * Hash: 0xD99229FE93B46286 | Since: 1207
 */
export function addDoorToSystemNew(doorHash: number | string, threadId: number): void {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    AddDoorToSystemNew(doorHash, false, false, false, threadId, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xE4EFB315BCD2A838 | Since: 1207
 */
export function damageBoneOnProp(_object: number | IObject, bone: number): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    DamageBoneOnProp(__object, bone);
}

/**
 * No comment provided
 * 
 * Hash: 0x985767F5FA45BC44 | Since: 1207
 */
export function doorSystemChangeScriptOwner(doorHash: number | string): void {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    DoorSystemChangeScriptOwner(doorHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x276AAF0F1C7F2494 | Since: 1207
 */
export function doorSystemForceShut(doorHash: number | string): void {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    DoorSystemForceShut(doorHash, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x8433E1954BE323FC | Since: 1207
 */
export function doorSystemGetAutomaticRate(doorHash: number | string): number {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    return DoorSystemGetAutomaticRate(doorHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x1F1FABFE9B2A1254 | Since: 1207
 */
export function doorSystemSetAbleToChangeOpenRatioWhileLocked(doorHash: number | string): void {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    DoorSystemSetAbleToChangeOpenRatioWhileLocked(doorHash, false);
}

/**
 * _ALLOW_* - _ATTACH_*
 * 
 * Hash: 0x1BC47A9DEDC8DF5D | Since: 1207
 */
export function doorSystemSetAutomaticState(doorHash: number | string, disable: boolean): void {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    DoorSystemSetAutomaticState(doorHash, disable);
}

/**
 * No comment provided
 * 
 * Hash: 0x44B09A23D728045A | Since: 1207
 */
export function getAmmoTypeFromPickupType(pickupHash: number | string): number {
    if (typeof pickupHash === 'string') pickupHash = GetHashKey(pickupHash)
    return GetAmmoTypeFromPickupType(pickupHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA3B61EC249B4674 | Since: 1207
 */
export function getLightIntensityFrom(_object: number | IObject): number {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return GetLightIntensityFromObject(__object);
}

/**
 * Returns float value to be used with _SET_LIGHT_INTENSITY_FOR_OBJECT
 * 
 * Hash: 0x3397CD4E0353DFBA | Since: 1207
 */
export function getLightIntensity(_object: number | IObject): number {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return GetObjectLightIntensity(__object);
}

/**
 * No comment provided
 * 
 * Hash: 0x2777150CC7D9365E | Since: 1207
 */
export function hidePickup(pickupObject: number | IObject, toggle: boolean): void {
    const _pickupObject = pickupObject instanceof IObject ? pickupObject.handle() : pickupObject;
    HidePickupObject(_pickupObject, toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xB5DED7B65C604FDF | Since: 1207
 */
export function isDoorRegisteredWithNetwork(doorHash: number | string): boolean {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    return IsDoorRegisteredWithNetwork(doorHash);
}

/**
 * Returns true if door is alredy registered with owner
 * 
 * Hash: 0x4F89DAD4156BA145 | Since: 1207
 */
export function isDoorRegisteredWithOwner(doorHash: number | string): boolean {
    if (typeof doorHash === 'string') doorHash = GetHashKey(doorHash)
    return IsDoorRegisteredWithOwner(doorHash);
}

/**
 * returns true if the model hash is a portable pickup its used before creating a portable pick up for example
 * 
 * Hash: 0x20135AF9C10D2A3D | Since: 1207
 */
export function isModelAPortablePickup(modelHash: number | string): boolean {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return Citizen.invokeNative('0x20135AF9C10D2A3D', modelHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x007BD043587F7C82 | Since: 1207
 */
export function isPickupTypeValid(pickupHash: number | string): boolean {
    if (typeof pickupHash === 'string') pickupHash = GetHashKey(pickupHash)
    return IsPickupTypeValid(pickupHash);
}

/**
 * _PRE* or _Q* or _RE*
 * 
 * Hash: 0x1461DF6DB886BE3F | Since: 1207
 */
export function makeItemCarriable(_object: number | IObject): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    MakeItemCarriable(__object);
}

/**
 * No comment provided
 * 
 * Hash: 0xF40AB58D83C35027 | Since: 1207
 */
export function resetVelocity(_object: number | IObject): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    ResetObjectVelocity(__object);
}

/**
 * No comment provided
 * 
 * Hash: 0xAC9AE68F0A463752 | Since: 1207
 */
export function setAmbientPickupLifetime(lifetime: number): void {
    SetAmbientPickupLifetime(lifetime);
}

/**
 * Sets object as auto-jumpable by horse.
 * 
 * Hash: 0x98D2D9C053A1F449 | Since: 1207
 */
export function setAutoJumpableByHorse(_object: number | IObject): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetAutoJumpableByHorse(__object, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xF49574E2332A8F06 | Since: 1207
 */
export function setLightIntensityFor(_object: number | IObject, lightIntensity: number): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetLightIntensityForObject(__object, lightIntensity);
}

/**
 * No comment provided
 * 
 * Hash: 0x04D1D4E411CE52D0 | Since: 1207
 */
export function setLightScatteringDisabledFor(_object: number | IObject, disable: boolean): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetLightScatteringDisabledForObject(__object, disable);
}

/**
 * Params: value = 0.0 - 586.67 (?)
 * 
 * Hash: 0x63E39F09310F481F | Since: 1207
 */
export function setLightTranslucencyFor(_object: number | IObject, value: number): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetLightTranslucencyForObject(__object, value);
}

/**
 * Params: p2 controls whether to make pickups usable/collectable or not in networked games
 * 
 * Hash: 0x94F3D956BFAEAE18 | Since: 1207
 */
export function setNetworkPickupUsableForPlayer(player: number | string | IPlayer, pickupHash: number | string, isUsable: boolean): void {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof pickupHash === 'string') pickupHash = GetHashKey(pickupHash)
    SetNetworkPickupUsableForPlayer(_player, pickupHash, isUsable);
}

/**
 * Sets object as not jumpable by horse.
 * 
 * Hash: 0xE1C708BA4885796B | Since: 1207
 */
export function setNotJumpableByHorse(_object: number | IObject): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetNotJumpableByHorse(__object, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xFFB99FFD17F65889 | Since: 1207
 */
export function setBreakScale(_object: number | IObject, scale: number): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectBreakScale(__object, scale);
}

/**
 * No comment provided
 * 
 * Hash: 0xC8E21C1677DC5E6F | Since: 1207
 */
export function setBurnIntensity(_object: number | IObject, intensity: number): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectBurnIntensity(__object, intensity);
}

/**
 * Seems to mostly have effect on wood-made objects https://imgur.com/a/32oQvOn
 * 
 * Hash: 0x2797C633DCDBBAC5 | Since: 1207
 */
export function setBurnLevel(_object: number | IObject, burnLevel: number, affectAsh: boolean): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectBurnLevel(__object, burnLevel, affectAsh);
}

/**
 * No comment provided
 * 
 * Hash: 0x7D7285EFEAB5AF15 | Since: 1207
 */
export function setBurnOpacity(_object: number | IObject, opacity: number): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectBurnOpacity(__object, opacity);
}

/**
 * p2 is usually the same as speed parameter
 * 
 * Hash: 0x646564A3B7DF68F8 | Since: 1207
 */
export function setBurnSpeed(_object: number | IObject, speed: number): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectBurnSpeed(__object, speed, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xCAAF2BCCFEF37F77 | Since: 1207
 */
export function setInteractionPreset(_object: number | IObject, presetFlags: number): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0xCAAF2BCCFEF37F77', __object, presetFlags);
}

/**
 * No comment provided
 * 
 * Hash: 0xB7017DA4D498269F | Since: 1207
 */
export function setKickable(_object: number | IObject, kickable: boolean): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectKickable(__object, kickable);
}

/**
 * Not official native name
 * 
 * Hash: 0xAEE6C800E124CFE1 | Since: 1207
 */
export function setPromptName(_object: number | IObject, name: string): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0xAEE6C800E124CFE1', __object, name);
}

/**
 * Not official native name
 * 
 * Hash: 0xD503D6F0986D58BC | Since: 1207
 */
export function setPromptNameFromGxtEntry(_object: number | IObject, gxtEntryHash: number | string): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    if (typeof gxtEntryHash === 'string') gxtEntryHash = GetHashKey(gxtEntryHash)
    Citizen.invokeNative('0xD503D6F0986D58BC', __object, gxtEntryHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x581EDBE56E8D62C9 | Since: 1207
 */
export function setTargettable2(_object: number | IObject, targettable: boolean): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectTargettable2(__object, targettable);
}

/**
 * focus on objects like focus on peds, p1 is to enable/disable p2 is to enable/disable focus when you have a weapon out
 * 
 * Hash: 0xA22712E8471AA08E | Since: 1207
 */
export function setTargettableFocus(_object: number | IObject, toggle: boolean, weaponLock: boolean): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectTargettableFocus(__object, toggle, weaponLock);
}

/**
 * No comment provided
 * 
 * Hash: 0x00EE08603EADEE92 | Since: 1207
 */
export function setPickupCollectableOnMount(_object: number | IObject): void {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetPickupCollectableOnMount(__object);
}

