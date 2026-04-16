import { Vector3, IPed, IPlayer, IObject } from '@risinglife/redm-shared';
/**
 * Returns a list of door system entries: a door system hash (see [ADD_DOOR_TO_SYSTEM](#\_0x6F8838D03D1DC226)) and its object handle.
 *
 * The data returned adheres to the following layout:
 *
 * ```
 * [{doorHash1, doorHandle1}, ..., {doorHashN, doorHandleN}]
 * ```
 *
 * Hash: 0xF65BBA4B | Since: unknown | API-Set: client
 */
export function doorSystemGetActive() {
    return DoorSystemGetActive();
}
/**
 * No comment provided
 *
 * Hash: 0x237613B3 | Since: unknown | API-Set: client
 */
export function doorSystemGetSize() {
    return DoorSystemGetSize();
}
/**
 * No comment provided
 *
 * Hash: 0xE2B3B852B537C398 | Since: 1207 | API-Set: unknown
 */
export function allowDamageEventsForNonNetworkeds(enabled) {
    AllowDamageEventsForNonNetworkedObjects(enabled);
}
/**
 * No comment provided
 *
 * Hash: 0x8DC39368BDD57755 | Since: 1207 | API-Set: unknown
 */
export function attachPortablePickupToPed(pickupObject, ped) {
    const _pickupObject = pickupObject instanceof IObject ? pickupObject.handle() : pickupObject;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    AttachPortablePickupToPed(_pickupObject, _ped);
}
/**
 * No comment provided
 *
 * Hash: 0xB8F5062070BB6DBD | Since: 1207 | API-Set: unknown
 */
export function blockPickupFromPlayerCollection() {
    BlockPickupFromPlayerCollection(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8462BE2341A55B6F | Since: 1207 | API-Set: unknown
 */
export function breakAllFragmentBones(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    BreakAllObjectFragmentBones(__object);
}
/**
 * No comment provided
 *
 * Hash: 0xE7E4C198B0185900 | Since: 1207 | API-Set: unknown
 */
export function breakFragmentChild(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    BreakObjectFragmentChild(__object, undefined, false);
}
/**
 * Old name: _GET_PICKUP_HASH
 *
 * Hash: 0x5EAAD83F8CFB4575 | Since: 1207 | API-Set: unknown
 */
export function convertOldPickupTypeToNew(pickupHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    return ConvertOldPickupTypeToNew(pickupHash);
}
/**
 * flags: see CREATE_PICKUP
 *
 * Hash: 0x673966A0C0FD7171 | Since: 1207 | API-Set: unknown
 */
export function createAmbientPickup(pickupHash, pos, flags, amount, modelHash, createAsScriptObject, scriptHostObject, customAmmoType) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreateAmbientPickup(pickupHash, pos.x, pos.y, pos.z, flags, amount, modelHash, createAsScriptObject, scriptHostObject, customAmmoType, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x509D5878EB39E842 | Since: 1207 | API-Set: unknown
 */
export function create(modelHash, pos, isNetwork, bScriptHostObj, dynamic) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreateObject(modelHash, pos.x, pos.y, pos.z, isNetwork, bScriptHostObj, dynamic, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x9A294B2138ABB884 | Since: 1207 | API-Set: unknown
 */
export function createNoOffset(modelHash, pos, isNetwork, bScriptHostObj, dynamic) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreateObjectNoOffset(modelHash, pos.x, pos.y, pos.z, isNetwork, bScriptHostObj, dynamic, false);
}
/**
 * No comment provided
 *
 * Hash: 0xB6CBD40F8EA69E8A | Since: 1207 | API-Set: unknown
 */
export function createSkeleton(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return CreateObjectSkeleton(__object);
}
/**
 * https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/Placement%20Flags
 * https://github.com/femga/rdr3_discoveries/blob/master/objects/pickup_list.lua
 *
 * Hash: 0xFBA08C503DD5FA58 | Since: 1207 | API-Set: unknown
 */
export function createPickup(pickupHash, pos, flags, modelHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreatePickup(pickupHash, pos.x, pos.y, pos.z, flags, 0, false, modelHash, 0, 0, undefined);
}
/**
 * flags: see CREATE_PICKUP
 *
 * Hash: 0x891804727E0A98B7 | Since: 1207 | API-Set: unknown
 */
export function createPickupRotate(pickupHash, pos, rot, flags, modelHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreatePickupRotate(pickupHash, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, flags, 0, 0, false, modelHash, 0, 0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2EAF1FDB2FB55698 | Since: 1207 | API-Set: unknown
 */
export function createPortablePickup(pickupHash, pos, placeOnGround, modelHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return CreatePortablePickup(pickupHash, pos.x, pos.y, pos.z, placeOnGround, modelHash);
}
/**
 * Deletes the specified object, then sets the handle pointed to by the pointer to NULL.
 *
 * Hash: 0x931914268722C263 | Since: 1207 | API-Set: unknown
 */
export function deleteObject(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    DeleteObject(__object);
}
/**
 * No comment provided
 *
 * Hash: 0xCF463D1E9A0AECB1 | Since: 1207 | API-Set: unknown
 */
export function detachPortablePickupFromPed(pickupObject) {
    const _pickupObject = pickupObject instanceof IObject ? pickupObject.handle() : pickupObject;
    DetachPortablePickupFromPed(_pickupObject);
}
/**
 * No comment provided
 *
 * Hash: 0xBFA48E2FF417213F | Since: 1207 | API-Set: unknown
 */
export function doesOfTypeExistAtCoords(pos, radius, hash) {
    if (typeof hash === 'string')
        hash = GetHashKey(hash);
    return DoesObjectOfTypeExistAtCoords(pos.x, pos.y, pos.z, radius, hash, false);
}
/**
 * No comment provided
 *
 * Hash: 0xAFC1CA75AD4074D1 | Since: 1207 | API-Set: unknown
 */
export function doesPickupExist(pickup) {
    return DoesPickupExist(pickup);
}
/**
 * No comment provided
 *
 * Hash: 0xD9EFB6DBF7DAAEA3 | Since: 1207 | API-Set: unknown
 */
export function doesPickupObjectExist(pickupObject) {
    const _pickupObject = pickupObject instanceof IObject ? pickupObject.handle() : pickupObject;
    return DoesPickupObjectExist(_pickupObject);
}
/**
 * No comment provided
 *
 * Hash: 0xF9C36251F6E48E33 | Since: 1207 | API-Set: unknown
 */
export function doesPickupOfTypeExistInArea(pickupHash, pos, radius) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    return DoesPickupOfTypeExistInArea(pickupHash, pos.x, pos.y, pos.z, radius);
}
/**
 * No comment provided
 *
 * Hash: 0x52AF537A0C5B8AAD | Since: 1207 | API-Set: unknown
 */
export function doesRayfireMapExist(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return DoesRayfireMapObjectExist(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x160AA1B32F6139B8 | Since: 1207 | API-Set: unknown
 */
export function doorSystemGetDoorState(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    return DoorSystemGetDoorState(doorHash);
}
/**
 * No comment provided
 *
 * Hash: 0x65499865FCA6E5EC | Since: 1207 | API-Set: unknown
 */
export function doorSystemGetOpenRatio(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    return DoorSystemGetOpenRatio(doorHash);
}
/**
 * No comment provided
 *
 * Hash: 0x9BA001CB45CBF627 | Since: 1207 | API-Set: unknown
 */
export function doorSystemSetAutomaticDistance(doorHash, distance) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    DoorSystemSetAutomaticDistance(doorHash, distance);
}
/**
 * No comment provided
 *
 * Hash: 0x03C27E13B42A0E82 | Since: 1207 | API-Set: unknown
 */
export function doorSystemSetAutomaticRate(doorHash, rate) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
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
 * Hash: 0x6BAB9442830C7F53 | Since: 1207 | API-Set: unknown
 */
export function doorSystemSetDoorState(doorHash, state) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    DoorSystemSetDoorState(doorHash, state);
}
/**
 * Sets the ajar angle of a door.
 * Ranges from -1.0 to 1.0, and 0.0 is closed / default.
 *
 * Hash: 0xB6E6FBA95C7324AC | Since: 1207 | API-Set: unknown
 */
export function doorSystemSetOpenRatio(doorHash, ajar, forceUpdate) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    DoorSystemSetOpenRatio(doorHash, ajar, forceUpdate);
}
/**
 * No comment provided
 *
 * Hash: 0xF9C1681347C8BD15 | Since: 1207 | API-Set: unknown
 */
export function fixFragment(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    FixObjectFragment(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x758A5C1B3B1E1990 | Since: 1207 | API-Set: unknown
 */
export function forcePickupRegenerate() {
    ForcePickupRegenerate(undefined);
}
/**
 * Returns the closest object of a specified type within a given radius from a specified position
 *
 * Hash: 0xE143FA2249364369 | Since: 1207 | API-Set: unknown
 */
export function getClosestOfType(pos, radius, modelHash, missionScriptObject, scriptHostObject, networkObject) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetClosestObjectOfType(pos.x, pos.y, pos.z, radius, modelHash, missionScriptObject, scriptHostObject, networkObject);
}
/**
 * No comment provided
 *
 * Hash: 0xB6FBFD079B8D0596 | Since: 1207 | API-Set: unknown
 */
export function getFragmentDamageHealth() {
    return GetObjectFragmentDamageHealth(undefined, false);
}
/**
 * Old name: _GET_OBJECT_OFFSET_FROM_COORDS
 *
 * Hash: 0x163E252DE035A133 | Since: 1207 | API-Set: unknown
 */
export function getOffsetFromCoordAndHeadingInWorldCoords(pos, heading, xOffset, yOffset, zOffset) {
    return new Vector3(GetOffsetFromCoordAndHeadingInWorldCoords(pos.x, pos.y, pos.z, heading, xOffset, yOffset, zOffset));
}
/**
 * No comment provided
 *
 * Hash: 0x225B8B35C88029B3 | Since: 1207 | API-Set: unknown
 */
export function getPickupCoords(pickup) {
    return new Vector3(GetPickupCoords(pickup));
}
/**
 * No comment provided
 *
 * Hash: 0x5099BC55630B25AE | Since: 1207 | API-Set: unknown
 */
export function getPickup(pickup) {
    return GetPickupObject(pickup);
}
/**
 * No comment provided
 *
 * Hash: 0xB48FCED898292E52 | Since: 1207 | API-Set: unknown
 */
export function getRayfireMap(pos, radius, name) {
    return GetRayfireMapObject(pos.x, pos.y, pos.z, radius, name);
}
/**
 * No comment provided
 *
 * Hash: 0x260EE4FDBDF4DB01 | Since: 1207 | API-Set: unknown
 */
export function getRayfireMapAnimPhase(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return GetRayfireMapObjectAnimPhase(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x6E16BC2503FF1FF0 | Since: 1207 | API-Set: unknown
 */
export function getSafePickupCoords() {
    return new Vector3(GetSafePickupCoords(undefined, undefined, undefined, undefined, undefined, undefined));
}
/**
 * No comment provided
 *
 * Hash: 0x899BA936634A322E | Since: 1207 | API-Set: unknown
 */
export function getStateOfRayfireMap(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return GetStateOfRayfireMapObject(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x08F96CA6C551AD51 | Since: 1207 | API-Set: unknown
 */
export function getWeaponTypeFromPickupType(pickupHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    return GetWeaponTypeFromPickupType(pickupHash);
}
/**
 * No comment provided
 *
 * Hash: 0x761B0E69AC4D007E | Since: 1207 | API-Set: unknown
 */
export function hasClosestOfTypeBeenBroken(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return HasClosestObjectOfTypeBeenBroken(0, 0, 0, 0, modelHash, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x8ABFB70C49CC43E2 | Since: 1207 | API-Set: unknown
 */
export function hasBeenBroken() {
    return HasObjectBeenBroken(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x80EC48E6679313F9 | Since: 1207 | API-Set: unknown
 */
export function hasPickupBeenCollected(pickup) {
    return HasPickupBeenCollected(pickup);
}
/**
 * No comment provided
 *
 * Hash: 0xC531EE8A1145A149 | Since: 1207 | API-Set: unknown
 */
export function isDoorClosed(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    return IsDoorClosed(doorHash);
}
/**
 * No comment provided
 *
 * Hash: 0xC153C43EA202C8C1 | Since: 1207 | API-Set: unknown
 */
export function isDoorRegisteredWithSystem(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    return IsDoorRegisteredWithSystem(doorHash);
}
/**
 * No comment provided
 *
 * Hash: 0x0378C08504160D0D | Since: 1207 | API-Set: unknown
 */
export function isAPortablePickup(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return IsObjectAPortablePickup(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x8B32ACE6326A7546 | Since: 1207 | API-Set: unknown
 */
export function isVisible(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return IsObjectVisible(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x2A70BAE8883E4C81 | Since: 1207 | API-Set: unknown
 */
export function isPointInAngledArea() {
    return IsPointInAngledArea(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, false);
}
/**
 * Old name: _MARK_OBJECT_FOR_DELETION
 *
 * Hash: 0xADBE4809F19F927A | Since: 1207 | API-Set: unknown
 */
export function onlyCleanUpWhenOutOfRange(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    OnlyCleanUpObjectWhenOutOfRange(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x58A850EAEE20FAA3 | Since: 1207 | API-Set: unknown
 */
export function placeOnGroundProperly(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return PlaceObjectOnGroundProperly(__object, false);
}
/**
 * No comment provided
 *
 * Hash: 0x92AEFB5F6E294023 | Since: 1207 | API-Set: unknown
 */
export function preventCollectionOfPortablePickup(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    PreventCollectionOfPortablePickup(__object, false, false);
}
/**
 * No comment provided
 *
 * Hash: 0x27F9D613092159CF | Since: 1207 | API-Set: unknown
 */
export function removeAllPickupsOfType(pickupHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    RemoveAllPickupsOfType(pickupHash);
}
/**
 * No comment provided
 *
 * Hash: 0x464D8E1427156FE4 | Since: 1207 | API-Set: unknown
 */
export function removeDoorFromSystem(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    RemoveDoorFromSystem(doorHash);
}
/**
 * No comment provided
 *
 * Hash: 0x3288D8ACAECD2AB2 | Since: 1207 | API-Set: unknown
 */
export function removePickup(pickup) {
    RemovePickup(pickup);
}
/**
 * No comment provided
 *
 * Hash: 0x406137F8EF90EAF5 | Since: 1207 | API-Set: unknown
 */
export function setActivatePhysicsAsSoonAsItIsUnfrozen(_object, toggle) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetActivateObjectPhysicsAsSoonAsItIsUnfrozen(__object, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xE124889AE0521FCF | Since: 1207 | API-Set: unknown
 */
export function setCustomTexturesOn(_object, txdHash) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    if (typeof txdHash === 'string')
        txdHash = GetHashKey(txdHash);
    SetCustomTexturesOnObject(__object, txdHash, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF538081986E49E9D | Since: 1207 | API-Set: unknown
 */
export function setForceThisFrame(pos) {
    SetForceObjectThisFrame(pos.x, pos.y, pos.z, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x78857FC65CADB909 | Since: 1207 | API-Set: unknown
 */
export function setLocalPlayerCanCollectPortablePickups(toggle) {
    SetLocalPlayerCanCollectPortablePickups(toggle);
}
/**
 * Maximum amount of pickup models that can be disallowed is 10.
 *
 * Old name: _SET_LOCAL_PLAYER_CAN_USE_PICKUPS_WITH_THIS_MODEL
 *
 * Hash: 0x88EAEC617CD26926 | Since: 1207 | API-Set: unknown
 */
export function setLocalPlayerPermittedToCollectPickupsWithModel(modelHash, toggle) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    SetLocalPlayerPermittedToCollectPickupsWithModel(modelHash, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x0BF3B3BD47D79C08 | Since: 1207 | API-Set: unknown
 */
export function setMaxNumPortablePickupsCarriedByPlayer(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    SetMaxNumPortablePickupsCarriedByPlayer(modelHash, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x4D89D607CB3DD1D2 | Since: 1207 | API-Set: unknown
 */
export function setAllowLowLodBuoyancy(_object, toggle) {
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
 * Hash: 0xF6DF6E90DE7DF90F | Since: 1207 | API-Set: unknown
 */
export function setPhysicsParams(_object, weight, gravity, buoyancy) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectPhysicsParams(__object, weight, 0, 0, 0, 0, gravity, 0, 0, 0, 0, buoyancy);
}
/**
 * No comment provided
 *
 * Hash: 0xEB6F1A9B5510A5D2 | Since: 1207 | API-Set: unknown
 */
export function setTakesDamageFromCollidingWithBuildings(_object, enabled) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectTakesDamageFromCollidingWithBuildings(__object, enabled);
}
/**
 * No comment provided
 *
 * Hash: 0x8A7391690F5AFD81 | Since: 1207 | API-Set: unknown
 */
export function setTargettable(_object, targettable) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectTargettable(__object, targettable);
}
/**
 * Alt name: _SET_OBJECT_TINT
 *
 * Old name: _SET_OBJECT_TEXTURE_VARIATION
 *
 * Hash: 0x971DA0055324D033 | Since: 1207 | API-Set: unknown
 */
export function setTintIndex(_object, textureVariation) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectTintIndex(__object, textureVariation);
}
/**
 * No comment provided
 *
 * Hash: 0x634C19521485AB25 | Since: 1207 | API-Set: unknown
 */
export function setPickupDoNotAutoPlaceOnGround(pickupObject) {
    const _pickupObject = pickupObject instanceof IObject ? pickupObject.handle() : pickupObject;
    SetPickupDoNotAutoPlaceOnGround(_pickupObject);
}
/**
 * No comment provided
 *
 * Hash: 0x318516E02DE3ECE2 | Since: 1207 | API-Set: unknown
 */
export function setPickupGenerationRangeMultiplier(multiplier) {
    SetPickupGenerationRangeMultiplier(multiplier);
}
/**
 * No comment provided
 *
 * Hash: 0x81218CE01B672219 | Since: 1207 | API-Set: unknown
 */
export function setPickupHiddenWhenUncollectable() {
    SetPickupHiddenWhenUncollectable(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x92E87F60F21A0C3A | Since: 1207 | API-Set: unknown
 */
export function setPickupNotLootable() {
    SetPickupNotLootable(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1607C7D9B3021DF5 | Since: 1207 | API-Set: unknown
 */
export function setPickupParticleFxHighlight() {
    SetPickupParticleFxHighlight(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEB9740A38FD6D634 | Since: 1207 | API-Set: unknown
 */
export function setPickupParticleFxSpawn() {
    SetPickupParticleFxSpawn(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x78015C9B4B3ECC9D | Since: 1207 | API-Set: unknown
 */
export function setPickupRegenerationTime(pickup, duration) {
    SetPickupRegenerationTime(pickup, duration);
}
/**
 * No comment provided
 *
 * Hash: 0x4A8CB328CD6F1C9B | Since: 1207 | API-Set: unknown
 */
export function setPickupUncollectable() {
    SetPickupUncollectable(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5C29F698D404C5E1 | Since: 1207 | API-Set: unknown
 */
export function setStateOfRayfireMap(_object, state) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetStateOfRayfireMapObject(__object, state);
}
/**
 * No comment provided
 *
 * Hash: 0x53E0DF1A2A3CF0CA | Since: 1207 | API-Set: unknown
 */
export function setTeamPickup(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetTeamPickupObject(__object, undefined, false);
}
/**
 * No comment provided
 *
 * Hash: 0x2FDFF4107B8C1147 | Since: 1207 | API-Set: unknown
 */
export function slide(_object, toX, toY, toZ, speedX, speedY, speedZ, collision) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return SlideObject(__object, toX, toY, toZ, speedX, speedY, speedZ, collision);
}
/**
 * No comment provided
 *
 * Hash: 0xF92099527DB8E2A7 | Since: 1207 | API-Set: unknown
 */
export function suppressPickupRewardType(rewardType, suppress) {
    SuppressPickupRewardType(rewardType, suppress);
}
/**
 * No comment provided
 *
 * Hash: 0xB252BC036B525623 | Since: 1207 | API-Set: unknown
 */
export function trackVisibility(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    TrackObjectVisibility(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x08C5825A2932EA7B | Since: 1207 | API-Set: unknown
 */
export function _0x08C5825A2932EA7B() {
    return Citizen.invokeNative('0x08C5825A2932EA7B', undefined);
}
/**
 * Params: p1 = 23 in R* Scripts
 *
 * Hash: 0x0943113E02322164 | Since: 1207 | API-Set: unknown
 */
export function _0x0943113E02322164(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return Citizen.invokeNative('0x0943113E02322164', __object, 0);
}
/**
 * something to do with doors lockdown when navmesh is swapping?UPDATE_WORLD_STATE  seems to be for unlocking something
 *
 * Hash: 0x0C0A373D181BF900 | Since: 1207 | API-Set: unknown
 */
export function _0x0C0A373D181BF900(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    Citizen.invokeNative('0x0C0A373D181BF900', doorHash);
}
/**
 * _SET_A(MBIENT_PICKUP_?)*
 *
 * Hash: 0x1F5E07E14A86FAFC | Since: 1207 | API-Set: unknown
 */
export function _0x1F5E07E14A86FAFC() {
    Citizen.invokeNative('0x1F5E07E14A86FAFC', false);
}
/**
 * No comment provided
 *
 * Hash: 0x22031584496CFB70 | Since: 1207 | API-Set: unknown
 */
export function _0x22031584496CFB70() {
    Citizen.invokeNative('0x22031584496CFB70', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x235C863DA77BD88D | Since: 1207 | API-Set: unknown
 */
export function _0x235C863DA77BD88D() {
    return Citizen.invokeNative('0x235C863DA77BD88D', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x250EBB11E81A10BE | Since: 1207 | API-Set: unknown
 */
export function _0x250EBB11E81A10BE() {
    return Citizen.invokeNative('0x250EBB11E81A10BE', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x2BF1953C0C21AC88 | Since: 1207 | API-Set: unknown
 */
export function _0x2BF1953C0C21AC88() {
    return Citizen.invokeNative('0x2BF1953C0C21AC88', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3A77DAE8B4FD7586 | Since: 1207 | API-Set: unknown
 */
export function _0x3A77DAE8B4FD7586() {
    Citizen.invokeNative('0x3A77DAE8B4FD7586', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3DF1A0A58498E209 | Since: 1436 | API-Set: unknown
 */
export function _0x3DF1A0A58498E209(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0x3DF1A0A58498E209', __object, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3E2616E7EA539480 | Since: 1207 | API-Set: unknown
 */
export function _0x3E2616E7EA539480() {
    return Citizen.invokeNative('0x3E2616E7EA539480', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x46CBCF0E98A4E156 | Since: 1207 | API-Set: unknown
 */
export function _0x46CBCF0E98A4E156() {
    Citizen.invokeNative('0x46CBCF0E98A4E156', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x491439AEF410A2FC | Since: 1207 | API-Set: unknown
 */
export function _0x491439AEF410A2FC() {
    Citizen.invokeNative('0x491439AEF410A2FC', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4AE07EBA3462C5D5 | Since: 1207 | API-Set: unknown
 */
export function _0x4AE07EBA3462C5D5() {
    Citizen.invokeNative('0x4AE07EBA3462C5D5', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x4D8611DFE1126478 | Since: 1207 | API-Set: unknown
 */
export function _0x4D8611DFE1126478() {
    return Citizen.invokeNative('0x4D8611DFE1126478', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x5230BF34EB0EC645 | Since: 1207 | API-Set: unknown
 */
export function _0x5230BF34EB0EC645() {
    Citizen.invokeNative('0x5230BF34EB0EC645', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x57C242543B7B8FB9 | Since: 1207 | API-Set: unknown
 */
export function _0x57C242543B7B8FB9() {
    Citizen.invokeNative('0x57C242543B7B8FB9', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x58DE624FA7FB0E7F | Since: 1207 | API-Set: unknown
 */
export function _0x58DE624FA7FB0E7F() {
    return Citizen.invokeNative('0x58DE624FA7FB0E7F', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x614D0B4533F842D3 | Since: 1207 | API-Set: unknown
 */
export function _0x614D0B4533F842D3() {
    return Citizen.invokeNative('0x614D0B4533F842D3', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6579860A5558524A | Since: 1207 | API-Set: unknown
 */
export function _0x6579860A5558524A() {
    Citizen.invokeNative('0x6579860A5558524A', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x6E2AA80BB0C03728 | Since: 1207 | API-Set: unknown
 */
export function _0x6E2AA80BB0C03728() {
    return Citizen.invokeNative('0x6E2AA80BB0C03728', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7D4411D6736CD295 | Since: 1207 | API-Set: unknown
 */
export function _0x7D4411D6736CD295() {
    return Citizen.invokeNative('0x7D4411D6736CD295', undefined, undefined);
}
/**
 * something to do with doors lockdown when navmesh is swapping? UPDATE_WORLD_STATE, seems to be for locking something
 *
 * Hash: 0x7F458B543006C8FE | Since: 1207 | API-Set: unknown
 */
export function _0x7F458B543006C8FE(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    Citizen.invokeNative('0x7F458B543006C8FE', doorHash, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x7FCD49388BC9B775 | Since: 1207 | API-Set: unknown
 */
export function _0x7FCD49388BC9B775() {
    Citizen.invokeNative('0x7FCD49388BC9B775', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9A74A9CADFA8A598 | Since: 1207 | API-Set: unknown
 */
export function _0x9A74A9CADFA8A598() {
    Citizen.invokeNative('0x9A74A9CADFA8A598', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9F52AD67D1A91BAD | Since: 1207 | API-Set: unknown
 */
export function _0x9F52AD67D1A91BAD() {
    return Citizen.invokeNative('0x9F52AD67D1A91BAD', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA93F925F1942E434 | Since: 1207 | API-Set: unknown
 */
export function _0xA93F925F1942E434() {
    Citizen.invokeNative('0xA93F925F1942E434', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xAAACF33CBF9B990A | Since: 1207 | API-Set: unknown
 */
export function _0xAAACF33CBF9B990A() {
    Citizen.invokeNative('0xAAACF33CBF9B990A', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xACD4F9831DFAD7F5 | Since: 1207 | API-Set: unknown
 */
export function _0xACD4F9831DFAD7F5() {
    return Citizen.invokeNative('0xACD4F9831DFAD7F5', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB3B1546D23DF8DE1 | Since: 1207 | API-Set: unknown
 */
export function _0xB3B1546D23DF8DE1() {
    Citizen.invokeNative('0xB3B1546D23DF8DE1', undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC07B91B996C1DE89 | Since: 1207 | API-Set: unknown
 */
export function _0xC07B91B996C1DE89() {
    Citizen.invokeNative('0xC07B91B996C1DE89', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCBFBD38F2E0A263B | Since: 1207 | API-Set: unknown
 */
export function _0xCBFBD38F2E0A263B() {
    Citizen.invokeNative('0xCBFBD38F2E0A263B', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCEAB54F4632C6EF6 | Since: 1207 | API-Set: unknown
 */
export function _0xCEAB54F4632C6EF6() {
    Citizen.invokeNative('0xCEAB54F4632C6EF6', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD91E55B6C005EB09 | Since: 1207 | API-Set: unknown
 */
export function _0xD91E55B6C005EB09() {
    return Citizen.invokeNative('0xD91E55B6C005EB09', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDE116ECFFDD4B997 | Since: 1207 | API-Set: unknown
 */
export function _0xDE116ECFFDD4B997() {
    Citizen.invokeNative('0xDE116ECFFDD4B997', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xDFA1237F5228263F | Since: 1207 | API-Set: unknown
 */
export function _0xDFA1237F5228263F() {
    Citizen.invokeNative('0xDFA1237F5228263F', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE157A8A336C7F04A | Since: 1207 | API-Set: unknown
 */
export function _0xE157A8A336C7F04A() {
    Citizen.invokeNative('0xE157A8A336C7F04A', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xEBA314768FB35D58 | Since: 1207 | API-Set: unknown
 */
export function _0xEBA314768FB35D58() {
    return Citizen.invokeNative('0xEBA314768FB35D58', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF65EDE5D02A7A760 | Since: 1207 | API-Set: unknown
 */
export function _0xF65EDE5D02A7A760() {
    Citizen.invokeNative('0xF65EDE5D02A7A760', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xF6E88489B4E6EBE5 | Since: 1207 | API-Set: unknown
 */
export function _0xF6E88489B4E6EBE5() {
    Citizen.invokeNative('0xF6E88489B4E6EBE5', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xFA99E8E575F2FEF8 | Since: 1436 | API-Set: unknown
 */
export function _0xFA99E8E575F2FEF8() {
    return Citizen.invokeNative('0xFA99E8E575F2FEF8', undefined);
}
/**
 * Registers a door, hashes: https://github.com/femga/rdr3_discoveries/tree/master/doorHashes
 *
 * Hash: 0xD99229FE93B46286 | Since: 1207 | API-Set: unknown
 */
export function addDoorToSystemNew(doorHash, threadId) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    AddDoorToSystemNew(doorHash, false, false, false, threadId, 0, false);
}
/**
 * No comment provided
 *
 * Hash: 0xE4EFB315BCD2A838 | Since: 1207 | API-Set: unknown
 */
export function damageBoneOnProp(_object, bone) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    DamageBoneOnProp(__object, bone);
}
/**
 * No comment provided
 *
 * Hash: 0x985767F5FA45BC44 | Since: 1207 | API-Set: unknown
 */
export function doorSystemChangeScriptOwner(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    DoorSystemChangeScriptOwner(doorHash);
}
/**
 * No comment provided
 *
 * Hash: 0x276AAF0F1C7F2494 | Since: 1207 | API-Set: unknown
 */
export function doorSystemForceShut(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    DoorSystemForceShut(doorHash, false);
}
/**
 * No comment provided
 *
 * Hash: 0x8433E1954BE323FC | Since: 1207 | API-Set: unknown
 */
export function doorSystemGetAutomaticRate(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    return DoorSystemGetAutomaticRate(doorHash);
}
/**
 * No comment provided
 *
 * Hash: 0x1F1FABFE9B2A1254 | Since: 1207 | API-Set: unknown
 */
export function doorSystemSetAbleToChangeOpenRatioWhileLocked(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    DoorSystemSetAbleToChangeOpenRatioWhileLocked(doorHash, false);
}
/**
 * _ALLOW_* - _ATTACH_*
 *
 * Hash: 0x1BC47A9DEDC8DF5D | Since: 1207 | API-Set: unknown
 */
export function doorSystemSetAutomaticState(doorHash, disable) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    DoorSystemSetAutomaticState(doorHash, disable);
}
/**
 * No comment provided
 *
 * Hash: 0x44B09A23D728045A | Since: 1207 | API-Set: unknown
 */
export function getAmmoTypeFromPickupType(pickupHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    return GetAmmoTypeFromPickupType(pickupHash);
}
/**
 * No comment provided
 *
 * Hash: 0xFA3B61EC249B4674 | Since: 1207 | API-Set: unknown
 */
export function getLightIntensityFrom(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return GetLightIntensityFromObject(__object);
}
/**
 * Returns float value to be used with _SET_LIGHT_INTENSITY_FOR_OBJECT
 *
 * Hash: 0x3397CD4E0353DFBA | Since: 1207 | API-Set: unknown
 */
export function getLightIntensity(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    return GetObjectLightIntensity(__object);
}
/**
 * No comment provided
 *
 * Hash: 0x2777150CC7D9365E | Since: 1207 | API-Set: unknown
 */
export function hidePickup(pickupObject, toggle) {
    const _pickupObject = pickupObject instanceof IObject ? pickupObject.handle() : pickupObject;
    HidePickupObject(_pickupObject, toggle);
}
/**
 * No comment provided
 *
 * Hash: 0xB5DED7B65C604FDF | Since: 1207 | API-Set: unknown
 */
export function isDoorRegisteredWithNetwork(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    return IsDoorRegisteredWithNetwork(doorHash);
}
/**
 * Returns true if door is alredy registered with owner
 *
 * Hash: 0x4F89DAD4156BA145 | Since: 1207 | API-Set: unknown
 */
export function isDoorRegisteredWithOwner(doorHash) {
    if (typeof doorHash === 'string')
        doorHash = GetHashKey(doorHash);
    return IsDoorRegisteredWithOwner(doorHash);
}
/**
 * returns true if the model hash is a portable pickup its used before creating a portable pick up for example
 *
 * Hash: 0x20135AF9C10D2A3D | Since: 1207 | API-Set: unknown
 */
export function isModelAPortablePickup(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return Citizen.invokeNative('0x20135AF9C10D2A3D', modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x007BD043587F7C82 | Since: 1207 | API-Set: unknown
 */
export function isPickupTypeValid(pickupHash) {
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    return IsPickupTypeValid(pickupHash);
}
/**
 * _PRE* or _Q* or _RE*
 *
 * Hash: 0x1461DF6DB886BE3F | Since: 1207 | API-Set: unknown
 */
export function makeItemCarriable(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    MakeItemCarriable(__object);
}
/**
 * No comment provided
 *
 * Hash: 0xF40AB58D83C35027 | Since: 1207 | API-Set: unknown
 */
export function resetVelocity(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    ResetObjectVelocity(__object);
}
/**
 * No comment provided
 *
 * Hash: 0xAC9AE68F0A463752 | Since: 1207 | API-Set: unknown
 */
export function setAmbientPickupLifetime(lifetime) {
    SetAmbientPickupLifetime(lifetime);
}
/**
 * Sets object as auto-jumpable by horse.
 *
 * Hash: 0x98D2D9C053A1F449 | Since: 1207 | API-Set: unknown
 */
export function setAutoJumpableByHorse(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetAutoJumpableByHorse(__object, false);
}
/**
 * No comment provided
 *
 * Hash: 0xF49574E2332A8F06 | Since: 1207 | API-Set: unknown
 */
export function setLightIntensityFor(_object, lightIntensity) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetLightIntensityForObject(__object, lightIntensity);
}
/**
 * No comment provided
 *
 * Hash: 0x04D1D4E411CE52D0 | Since: 1207 | API-Set: unknown
 */
export function setLightScatteringDisabledFor(_object, disable) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetLightScatteringDisabledForObject(__object, disable);
}
/**
 * Params: value = 0.0 - 586.67 (?)
 *
 * Hash: 0x63E39F09310F481F | Since: 1207 | API-Set: unknown
 */
export function setLightTranslucencyFor(_object, value) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetLightTranslucencyForObject(__object, value);
}
/**
 * Params: p2 controls whether to make pickups usable/collectable or not in networked games
 *
 * Hash: 0x94F3D956BFAEAE18 | Since: 1207 | API-Set: unknown
 */
export function setNetworkPickupUsableForPlayer(player, pickupHash, isUsable) {
    const _player = player instanceof IPlayer ? player.playerId() : player;
    if (typeof pickupHash === 'string')
        pickupHash = GetHashKey(pickupHash);
    SetNetworkPickupUsableForPlayer(_player, pickupHash, isUsable);
}
/**
 * Sets object as not jumpable by horse.
 *
 * Hash: 0xE1C708BA4885796B | Since: 1207 | API-Set: unknown
 */
export function setNotJumpableByHorse(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetNotJumpableByHorse(__object, false);
}
/**
 * No comment provided
 *
 * Hash: 0xFFB99FFD17F65889 | Since: 1207 | API-Set: unknown
 */
export function setBreakScale(_object, scale) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectBreakScale(__object, scale);
}
/**
 * No comment provided
 *
 * Hash: 0xC8E21C1677DC5E6F | Since: 1207 | API-Set: unknown
 */
export function setBurnIntensity(_object, intensity) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectBurnIntensity(__object, intensity);
}
/**
 * Seems to mostly have effect on wood-made objects https://imgur.com/a/32oQvOn
 *
 * Hash: 0x2797C633DCDBBAC5 | Since: 1207 | API-Set: unknown
 */
export function setBurnLevel(_object, burnLevel, affectAsh) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectBurnLevel(__object, burnLevel, affectAsh);
}
/**
 * No comment provided
 *
 * Hash: 0x7D7285EFEAB5AF15 | Since: 1207 | API-Set: unknown
 */
export function setBurnOpacity(_object, opacity) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectBurnOpacity(__object, opacity);
}
/**
 * p2 is usually the same as speed parameter
 *
 * Hash: 0x646564A3B7DF68F8 | Since: 1207 | API-Set: unknown
 */
export function setBurnSpeed(_object, speed) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectBurnSpeed(__object, speed, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xCAAF2BCCFEF37F77 | Since: 1207 | API-Set: unknown
 */
export function setInteractionPreset(_object, presetFlags) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0xCAAF2BCCFEF37F77', __object, presetFlags);
}
/**
 * No comment provided
 *
 * Hash: 0xB7017DA4D498269F | Since: 1207 | API-Set: unknown
 */
export function setKickable(_object, kickable) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectKickable(__object, kickable);
}
/**
 * Not official native name
 *
 * Hash: 0xAEE6C800E124CFE1 | Since: 1207 | API-Set: unknown
 */
export function setPromptName(_object, name) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    Citizen.invokeNative('0xAEE6C800E124CFE1', __object, name);
}
/**
 * Not official native name
 *
 * Hash: 0xD503D6F0986D58BC | Since: 1207 | API-Set: unknown
 */
export function setPromptNameFromGxtEntry(_object, gxtEntryHash) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    if (typeof gxtEntryHash === 'string')
        gxtEntryHash = GetHashKey(gxtEntryHash);
    Citizen.invokeNative('0xD503D6F0986D58BC', __object, gxtEntryHash);
}
/**
 * No comment provided
 *
 * Hash: 0x581EDBE56E8D62C9 | Since: 1207 | API-Set: unknown
 */
export function setTargettable2(_object, targettable) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectTargettable2(__object, targettable);
}
/**
 * focus on objects like focus on peds, p1 is to enable/disable p2 is to enable/disable focus when you have a weapon out
 *
 * Hash: 0xA22712E8471AA08E | Since: 1207 | API-Set: unknown
 */
export function setTargettableFocus(_object, toggle, weaponLock) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetObjectTargettableFocus(__object, toggle, weaponLock);
}
/**
 * No comment provided
 *
 * Hash: 0x00EE08603EADEE92 | Since: 1207 | API-Set: unknown
 */
export function setPickupCollectableOnMount(_object) {
    const __object = _object instanceof IObject ? _object.handle() : _object;
    SetPickupCollectableOnMount(__object);
}
