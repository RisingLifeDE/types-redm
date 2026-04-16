import { Vector3, IPed, IPlayer, IObject } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0xE2B3B852B537C398 | Since: 1207
 */
export declare function allowDamageEventsForNonNetworkeds(enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8DC39368BDD57755 | Since: 1207
 */
export declare function attachPortablePickupToPed(pickupObject: number | IObject, ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xB8F5062070BB6DBD | Since: 1207
 */
export declare function blockPickupFromPlayerCollection(): void;
/**
 * No comment provided
 *
 * Hash: 0x8462BE2341A55B6F | Since: 1207
 */
export declare function breakAllFragmentBones(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0xE7E4C198B0185900 | Since: 1207
 */
export declare function breakFragmentChild(_object: number | IObject): void;
/**
 * Old name: _GET_PICKUP_HASH
 *
 * Hash: 0x5EAAD83F8CFB4575 | Since: 1207
 */
export declare function convertOldPickupTypeToNew(pickupHash: number | string): number;
/**
 * flags: see CREATE_PICKUP
 *
 * Hash: 0x673966A0C0FD7171 | Since: 1207
 */
export declare function createAmbientPickup(pickupHash: number | string, pos: Vector3, flags: number, amount: number, modelHash: number | string, createAsScriptObject: boolean, scriptHostObject: boolean, customAmmoType: number): number;
/**
 * No comment provided
 *
 * Hash: 0x509D5878EB39E842 | Since: 1207
 */
export declare function create(modelHash: number | string, pos: Vector3, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0x9A294B2138ABB884 | Since: 1207
 */
export declare function createNoOffset(modelHash: number | string, pos: Vector3, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0xB6CBD40F8EA69E8A | Since: 1207
 */
export declare function createSkeleton(_object: number | IObject): boolean;
/**
 * https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/Placement%20Flags
 * https://github.com/femga/rdr3_discoveries/blob/master/objects/pickup_list.lua
 *
 * Hash: 0xFBA08C503DD5FA58 | Since: 1207
 */
export declare function createPickup(pickupHash: number | string, pos: Vector3, flags: number, modelHash: number | string): any;
/**
 * flags: see CREATE_PICKUP
 *
 * Hash: 0x891804727E0A98B7 | Since: 1207
 */
export declare function createPickupRotate(pickupHash: number | string, pos: Vector3, rot: Vector3, flags: number, modelHash: number | string): any;
/**
 * No comment provided
 *
 * Hash: 0x2EAF1FDB2FB55698 | Since: 1207
 */
export declare function createPortablePickup(pickupHash: number | string, pos: Vector3, placeOnGround: boolean, modelHash: number | string): number;
/**
 * Deletes the specified object, then sets the handle pointed to by the pointer to NULL.
 *
 * Hash: 0x931914268722C263 | Since: 1207
 */
export declare function deleteObject(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0xCF463D1E9A0AECB1 | Since: 1207
 */
export declare function detachPortablePickupFromPed(pickupObject: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0xBFA48E2FF417213F | Since: 1207
 */
export declare function doesOfTypeExistAtCoords(pos: Vector3, radius: number, hash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAFC1CA75AD4074D1 | Since: 1207
 */
export declare function doesPickupExist(pickup: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD9EFB6DBF7DAAEA3 | Since: 1207
 */
export declare function doesPickupObjectExist(pickupObject: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF9C36251F6E48E33 | Since: 1207
 */
export declare function doesPickupOfTypeExistInArea(pickupHash: number | string, pos: Vector3, radius: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x52AF537A0C5B8AAD | Since: 1207
 */
export declare function doesRayfireMapExist(_object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0x160AA1B32F6139B8 | Since: 1207
 */
export declare function doorSystemGetDoorState(doorHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x65499865FCA6E5EC | Since: 1207
 */
export declare function doorSystemGetOpenRatio(doorHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x9BA001CB45CBF627 | Since: 1207
 */
export declare function doorSystemSetAutomaticDistance(doorHash: number | string, distance: number): void;
/**
 * No comment provided
 *
 * Hash: 0x03C27E13B42A0E82 | Since: 1207
 */
export declare function doorSystemSetAutomaticRate(doorHash: number | string, rate: number): void;
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
export declare function doorSystemSetDoorState(doorHash: number | string, state: number): void;
/**
 * Sets the ajar angle of a door.
 * Ranges from -1.0 to 1.0, and 0.0 is closed / default.
 *
 * Hash: 0xB6E6FBA95C7324AC | Since: 1207
 */
export declare function doorSystemSetOpenRatio(doorHash: number | string, ajar: number, forceUpdate: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xF9C1681347C8BD15 | Since: 1207
 */
export declare function fixFragment(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0x758A5C1B3B1E1990 | Since: 1207
 */
export declare function forcePickupRegenerate(): void;
/**
 * Returns the closest object of a specified type within a given radius from a specified position
 *
 * Hash: 0xE143FA2249364369 | Since: 1207
 */
export declare function getClosestOfType(pos: Vector3, radius: number, modelHash: number | string, missionScriptObject: boolean, scriptHostObject: boolean, networkObject: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0xB6FBFD079B8D0596 | Since: 1207
 */
export declare function getFragmentDamageHealth(): number;
/**
 * Old name: _GET_OBJECT_OFFSET_FROM_COORDS
 *
 * Hash: 0x163E252DE035A133 | Since: 1207
 */
export declare function getOffsetFromCoordAndHeadingInWorldCoords(pos: Vector3, heading: number, xOffset: number, yOffset: number, zOffset: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x225B8B35C88029B3 | Since: 1207
 */
export declare function getPickupCoords(pickup: any): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x5099BC55630B25AE | Since: 1207
 */
export declare function getPickup(pickup: any): number;
/**
 * No comment provided
 *
 * Hash: 0xB48FCED898292E52 | Since: 1207
 */
export declare function getRayfireMap(pos: Vector3, radius: number, name: string): number;
/**
 * No comment provided
 *
 * Hash: 0x260EE4FDBDF4DB01 | Since: 1207
 */
export declare function getRayfireMapAnimPhase(_object: number | IObject): number;
/**
 * No comment provided
 *
 * Hash: 0x6E16BC2503FF1FF0 | Since: 1207
 */
export declare function getSafePickupCoords(): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x899BA936634A322E | Since: 1207
 */
export declare function getStateOfRayfireMap(_object: number | IObject): number;
/**
 * No comment provided
 *
 * Hash: 0x08F96CA6C551AD51 | Since: 1207
 */
export declare function getWeaponTypeFromPickupType(pickupHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x761B0E69AC4D007E | Since: 1207
 */
export declare function hasClosestOfTypeBeenBroken(modelHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8ABFB70C49CC43E2 | Since: 1207
 */
export declare function hasBeenBroken(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x80EC48E6679313F9 | Since: 1207
 */
export declare function hasPickupBeenCollected(pickup: any): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC531EE8A1145A149 | Since: 1207
 */
export declare function isDoorClosed(doorHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC153C43EA202C8C1 | Since: 1207
 */
export declare function isDoorRegisteredWithSystem(doorHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0378C08504160D0D | Since: 1207
 */
export declare function isAPortablePickup(_object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8B32ACE6326A7546 | Since: 1207
 */
export declare function isVisible(_object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2A70BAE8883E4C81 | Since: 1207
 */
export declare function isPointInAngledArea(): boolean;
/**
 * Old name: _MARK_OBJECT_FOR_DELETION
 *
 * Hash: 0xADBE4809F19F927A | Since: 1207
 */
export declare function onlyCleanUpWhenOutOfRange(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0x58A850EAEE20FAA3 | Since: 1207
 */
export declare function placeOnGroundProperly(_object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0x92AEFB5F6E294023 | Since: 1207
 */
export declare function preventCollectionOfPortablePickup(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0x27F9D613092159CF | Since: 1207
 */
export declare function removeAllPickupsOfType(pickupHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x464D8E1427156FE4 | Since: 1207
 */
export declare function removeDoorFromSystem(doorHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x3288D8ACAECD2AB2 | Since: 1207
 */
export declare function removePickup(pickup: any): void;
/**
 * No comment provided
 *
 * Hash: 0x406137F8EF90EAF5 | Since: 1207
 */
export declare function setActivatePhysicsAsSoonAsItIsUnfrozen(_object: number | IObject, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xE124889AE0521FCF | Since: 1207
 */
export declare function setCustomTexturesOn(_object: number | IObject, txdHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xF538081986E49E9D | Since: 1207
 */
export declare function setForceThisFrame(pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x78857FC65CADB909 | Since: 1207
 */
export declare function setLocalPlayerCanCollectPortablePickups(toggle: boolean): void;
/**
 * Maximum amount of pickup models that can be disallowed is 10.
 *
 * Old name: _SET_LOCAL_PLAYER_CAN_USE_PICKUPS_WITH_THIS_MODEL
 *
 * Hash: 0x88EAEC617CD26926 | Since: 1207
 */
export declare function setLocalPlayerPermittedToCollectPickupsWithModel(modelHash: number | string, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x0BF3B3BD47D79C08 | Since: 1207
 */
export declare function setMaxNumPortablePickupsCarriedByPlayer(modelHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x4D89D607CB3DD1D2 | Since: 1207
 */
export declare function setAllowLowLodBuoyancy(_object: number | IObject, toggle: boolean): void;
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
export declare function setPhysicsParams(_object: number | IObject, weight: number, gravity: number, buoyancy: number): void;
/**
 * No comment provided
 *
 * Hash: 0xEB6F1A9B5510A5D2 | Since: 1207
 */
export declare function setTakesDamageFromCollidingWithBuildings(_object: number | IObject, enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8A7391690F5AFD81 | Since: 1207
 */
export declare function setTargettable(_object: number | IObject, targettable: boolean): void;
/**
 * Alt name: _SET_OBJECT_TINT
 *
 * Old name: _SET_OBJECT_TEXTURE_VARIATION
 *
 * Hash: 0x971DA0055324D033 | Since: 1207
 */
export declare function setTintIndex(_object: number | IObject, textureVariation: number): void;
/**
 * No comment provided
 *
 * Hash: 0x634C19521485AB25 | Since: 1207
 */
export declare function setPickupDoNotAutoPlaceOnGround(pickupObject: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0x318516E02DE3ECE2 | Since: 1207
 */
export declare function setPickupGenerationRangeMultiplier(multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x81218CE01B672219 | Since: 1207
 */
export declare function setPickupHiddenWhenUncollectable(): void;
/**
 * No comment provided
 *
 * Hash: 0x92E87F60F21A0C3A | Since: 1207
 */
export declare function setPickupNotLootable(): void;
/**
 * No comment provided
 *
 * Hash: 0x1607C7D9B3021DF5 | Since: 1207
 */
export declare function setPickupParticleFxHighlight(): void;
/**
 * No comment provided
 *
 * Hash: 0xEB9740A38FD6D634 | Since: 1207
 */
export declare function setPickupParticleFxSpawn(): void;
/**
 * No comment provided
 *
 * Hash: 0x78015C9B4B3ECC9D | Since: 1207
 */
export declare function setPickupRegenerationTime(pickup: any, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4A8CB328CD6F1C9B | Since: 1207
 */
export declare function setPickupUncollectable(): void;
/**
 * No comment provided
 *
 * Hash: 0x5C29F698D404C5E1 | Since: 1207
 */
export declare function setStateOfRayfireMap(_object: number | IObject, state: number): void;
/**
 * No comment provided
 *
 * Hash: 0x53E0DF1A2A3CF0CA | Since: 1207
 */
export declare function setTeamPickup(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0x2FDFF4107B8C1147 | Since: 1207
 */
export declare function slide(_object: number | IObject, toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF92099527DB8E2A7 | Since: 1207
 */
export declare function suppressPickupRewardType(rewardType: number, suppress: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xB252BC036B525623 | Since: 1207
 */
export declare function trackVisibility(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0x08C5825A2932EA7B | Since: 1207
 */
export declare function _0x08C5825A2932EA7B(): any;
/**
 * Params: p1 = 23 in R* Scripts
 *
 * Hash: 0x0943113E02322164 | Since: 1207
 */
export declare function _0x0943113E02322164(_object: number | IObject): any;
/**
 * something to do with doors lockdown when navmesh is swapping?UPDATE_WORLD_STATE  seems to be for unlocking something
 *
 * Hash: 0x0C0A373D181BF900 | Since: 1207
 */
export declare function _0x0C0A373D181BF900(doorHash: number | string): void;
/**
 * _SET_A(MBIENT_PICKUP_?)*
 *
 * Hash: 0x1F5E07E14A86FAFC | Since: 1207
 */
export declare function _0x1F5E07E14A86FAFC(): void;
/**
 * No comment provided
 *
 * Hash: 0x22031584496CFB70 | Since: 1207
 */
export declare function _0x22031584496CFB70(): void;
/**
 * No comment provided
 *
 * Hash: 0x235C863DA77BD88D | Since: 1207
 */
export declare function _0x235C863DA77BD88D(): any;
/**
 * No comment provided
 *
 * Hash: 0x250EBB11E81A10BE | Since: 1207
 */
export declare function _0x250EBB11E81A10BE(): any;
/**
 * No comment provided
 *
 * Hash: 0x2BF1953C0C21AC88 | Since: 1207
 */
export declare function _0x2BF1953C0C21AC88(): any;
/**
 * No comment provided
 *
 * Hash: 0x3A77DAE8B4FD7586 | Since: 1207
 */
export declare function _0x3A77DAE8B4FD7586(): void;
/**
 * No comment provided
 *
 * Hash: 0x3DF1A0A58498E209 | Since: 1436
 */
export declare function _0x3DF1A0A58498E209(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0x3E2616E7EA539480 | Since: 1207
 */
export declare function _0x3E2616E7EA539480(): any;
/**
 * No comment provided
 *
 * Hash: 0x46CBCF0E98A4E156 | Since: 1207
 */
export declare function _0x46CBCF0E98A4E156(): void;
/**
 * No comment provided
 *
 * Hash: 0x491439AEF410A2FC | Since: 1207
 */
export declare function _0x491439AEF410A2FC(): void;
/**
 * No comment provided
 *
 * Hash: 0x4AE07EBA3462C5D5 | Since: 1207
 */
export declare function _0x4AE07EBA3462C5D5(): void;
/**
 * No comment provided
 *
 * Hash: 0x4D8611DFE1126478 | Since: 1207
 */
export declare function _0x4D8611DFE1126478(): any;
/**
 * No comment provided
 *
 * Hash: 0x5230BF34EB0EC645 | Since: 1207
 */
export declare function _0x5230BF34EB0EC645(): void;
/**
 * No comment provided
 *
 * Hash: 0x57C242543B7B8FB9 | Since: 1207
 */
export declare function _0x57C242543B7B8FB9(): void;
/**
 * No comment provided
 *
 * Hash: 0x58DE624FA7FB0E7F | Since: 1207
 */
export declare function _0x58DE624FA7FB0E7F(): any;
/**
 * No comment provided
 *
 * Hash: 0x614D0B4533F842D3 | Since: 1207
 */
export declare function _0x614D0B4533F842D3(): any;
/**
 * No comment provided
 *
 * Hash: 0x6579860A5558524A | Since: 1207
 */
export declare function _0x6579860A5558524A(): void;
/**
 * No comment provided
 *
 * Hash: 0x6E2AA80BB0C03728 | Since: 1207
 */
export declare function _0x6E2AA80BB0C03728(): any;
/**
 * No comment provided
 *
 * Hash: 0x7D4411D6736CD295 | Since: 1207
 */
export declare function _0x7D4411D6736CD295(): any;
/**
 * something to do with doors lockdown when navmesh is swapping? UPDATE_WORLD_STATE, seems to be for locking something
 *
 * Hash: 0x7F458B543006C8FE | Since: 1207
 */
export declare function _0x7F458B543006C8FE(doorHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x7FCD49388BC9B775 | Since: 1207
 */
export declare function _0x7FCD49388BC9B775(): void;
/**
 * No comment provided
 *
 * Hash: 0x9A74A9CADFA8A598 | Since: 1207
 */
export declare function _0x9A74A9CADFA8A598(): void;
/**
 * No comment provided
 *
 * Hash: 0x9F52AD67D1A91BAD | Since: 1207
 */
export declare function _0x9F52AD67D1A91BAD(): any;
/**
 * No comment provided
 *
 * Hash: 0xA93F925F1942E434 | Since: 1207
 */
export declare function _0xA93F925F1942E434(): void;
/**
 * No comment provided
 *
 * Hash: 0xAAACF33CBF9B990A | Since: 1207
 */
export declare function _0xAAACF33CBF9B990A(): void;
/**
 * No comment provided
 *
 * Hash: 0xACD4F9831DFAD7F5 | Since: 1207
 */
export declare function _0xACD4F9831DFAD7F5(): any;
/**
 * No comment provided
 *
 * Hash: 0xB3B1546D23DF8DE1 | Since: 1207
 */
export declare function _0xB3B1546D23DF8DE1(): void;
/**
 * No comment provided
 *
 * Hash: 0xC07B91B996C1DE89 | Since: 1207
 */
export declare function _0xC07B91B996C1DE89(): void;
/**
 * No comment provided
 *
 * Hash: 0xCBFBD38F2E0A263B | Since: 1207
 */
export declare function _0xCBFBD38F2E0A263B(): void;
/**
 * No comment provided
 *
 * Hash: 0xCEAB54F4632C6EF6 | Since: 1207
 */
export declare function _0xCEAB54F4632C6EF6(): void;
/**
 * No comment provided
 *
 * Hash: 0xD91E55B6C005EB09 | Since: 1207
 */
export declare function _0xD91E55B6C005EB09(): any;
/**
 * No comment provided
 *
 * Hash: 0xDE116ECFFDD4B997 | Since: 1207
 */
export declare function _0xDE116ECFFDD4B997(): void;
/**
 * No comment provided
 *
 * Hash: 0xDFA1237F5228263F | Since: 1207
 */
export declare function _0xDFA1237F5228263F(): void;
/**
 * No comment provided
 *
 * Hash: 0xE157A8A336C7F04A | Since: 1207
 */
export declare function _0xE157A8A336C7F04A(): void;
/**
 * No comment provided
 *
 * Hash: 0xEBA314768FB35D58 | Since: 1207
 */
export declare function _0xEBA314768FB35D58(): any;
/**
 * No comment provided
 *
 * Hash: 0xF65EDE5D02A7A760 | Since: 1207
 */
export declare function _0xF65EDE5D02A7A760(): void;
/**
 * No comment provided
 *
 * Hash: 0xF6E88489B4E6EBE5 | Since: 1207
 */
export declare function _0xF6E88489B4E6EBE5(): void;
/**
 * No comment provided
 *
 * Hash: 0xFA99E8E575F2FEF8 | Since: 1436
 */
export declare function _0xFA99E8E575F2FEF8(): any;
/**
 * Registers a door, hashes: https://github.com/femga/rdr3_discoveries/tree/master/doorHashes
 *
 * Hash: 0xD99229FE93B46286 | Since: 1207
 */
export declare function addDoorToSystemNew(doorHash: number | string, threadId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE4EFB315BCD2A838 | Since: 1207
 */
export declare function damageBoneOnProp(_object: number | IObject, bone: number): void;
/**
 * No comment provided
 *
 * Hash: 0x985767F5FA45BC44 | Since: 1207
 */
export declare function doorSystemChangeScriptOwner(doorHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x276AAF0F1C7F2494 | Since: 1207
 */
export declare function doorSystemForceShut(doorHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x8433E1954BE323FC | Since: 1207
 */
export declare function doorSystemGetAutomaticRate(doorHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x1F1FABFE9B2A1254 | Since: 1207
 */
export declare function doorSystemSetAbleToChangeOpenRatioWhileLocked(doorHash: number | string): void;
/**
 * _ALLOW_* - _ATTACH_*
 *
 * Hash: 0x1BC47A9DEDC8DF5D | Since: 1207
 */
export declare function doorSystemSetAutomaticState(doorHash: number | string, disable: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x44B09A23D728045A | Since: 1207
 */
export declare function getAmmoTypeFromPickupType(pickupHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xFA3B61EC249B4674 | Since: 1207
 */
export declare function getLightIntensityFrom(_object: number | IObject): number;
/**
 * Returns float value to be used with _SET_LIGHT_INTENSITY_FOR_OBJECT
 *
 * Hash: 0x3397CD4E0353DFBA | Since: 1207
 */
export declare function getLightIntensity(_object: number | IObject): number;
/**
 * No comment provided
 *
 * Hash: 0x2777150CC7D9365E | Since: 1207
 */
export declare function hidePickup(pickupObject: number | IObject, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xB5DED7B65C604FDF | Since: 1207
 */
export declare function isDoorRegisteredWithNetwork(doorHash: number | string): boolean;
/**
 * Returns true if door is alredy registered with owner
 *
 * Hash: 0x4F89DAD4156BA145 | Since: 1207
 */
export declare function isDoorRegisteredWithOwner(doorHash: number | string): boolean;
/**
 * returns true if the model hash is a portable pickup its used before creating a portable pick up for example
 *
 * Hash: 0x20135AF9C10D2A3D | Since: 1207
 */
export declare function isModelAPortablePickup(modelHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x007BD043587F7C82 | Since: 1207
 */
export declare function isPickupTypeValid(pickupHash: number | string): boolean;
/**
 * _PRE* or _Q* or _RE*
 *
 * Hash: 0x1461DF6DB886BE3F | Since: 1207
 */
export declare function makeItemCarriable(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0xF40AB58D83C35027 | Since: 1207
 */
export declare function resetVelocity(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0xAC9AE68F0A463752 | Since: 1207
 */
export declare function setAmbientPickupLifetime(lifetime: number): void;
/**
 * Sets object as auto-jumpable by horse.
 *
 * Hash: 0x98D2D9C053A1F449 | Since: 1207
 */
export declare function setAutoJumpableByHorse(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0xF49574E2332A8F06 | Since: 1207
 */
export declare function setLightIntensityFor(_object: number | IObject, lightIntensity: number): void;
/**
 * No comment provided
 *
 * Hash: 0x04D1D4E411CE52D0 | Since: 1207
 */
export declare function setLightScatteringDisabledFor(_object: number | IObject, disable: boolean): void;
/**
 * Params: value = 0.0 - 586.67 (?)
 *
 * Hash: 0x63E39F09310F481F | Since: 1207
 */
export declare function setLightTranslucencyFor(_object: number | IObject, value: number): void;
/**
 * Params: p2 controls whether to make pickups usable/collectable or not in networked games
 *
 * Hash: 0x94F3D956BFAEAE18 | Since: 1207
 */
export declare function setNetworkPickupUsableForPlayer(player: number | string | IPlayer, pickupHash: number | string, isUsable: boolean): void;
/**
 * Sets object as not jumpable by horse.
 *
 * Hash: 0xE1C708BA4885796B | Since: 1207
 */
export declare function setNotJumpableByHorse(_object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0xFFB99FFD17F65889 | Since: 1207
 */
export declare function setBreakScale(_object: number | IObject, scale: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC8E21C1677DC5E6F | Since: 1207
 */
export declare function setBurnIntensity(_object: number | IObject, intensity: number): void;
/**
 * Seems to mostly have effect on wood-made objects https://imgur.com/a/32oQvOn
 *
 * Hash: 0x2797C633DCDBBAC5 | Since: 1207
 */
export declare function setBurnLevel(_object: number | IObject, burnLevel: number, affectAsh: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x7D7285EFEAB5AF15 | Since: 1207
 */
export declare function setBurnOpacity(_object: number | IObject, opacity: number): void;
/**
 * p2 is usually the same as speed parameter
 *
 * Hash: 0x646564A3B7DF68F8 | Since: 1207
 */
export declare function setBurnSpeed(_object: number | IObject, speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCAAF2BCCFEF37F77 | Since: 1207
 */
export declare function setInteractionPreset(_object: number | IObject, presetFlags: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB7017DA4D498269F | Since: 1207
 */
export declare function setKickable(_object: number | IObject, kickable: boolean): void;
/**
 * Not official native name
 *
 * Hash: 0xAEE6C800E124CFE1 | Since: 1207
 */
export declare function setPromptName(_object: number | IObject, name: string): void;
/**
 * Not official native name
 *
 * Hash: 0xD503D6F0986D58BC | Since: 1207
 */
export declare function setPromptNameFromGxtEntry(_object: number | IObject, gxtEntryHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x581EDBE56E8D62C9 | Since: 1207
 */
export declare function setTargettable2(_object: number | IObject, targettable: boolean): void;
/**
 * focus on objects like focus on peds, p1 is to enable/disable p2 is to enable/disable focus when you have a weapon out
 *
 * Hash: 0xA22712E8471AA08E | Since: 1207
 */
export declare function setTargettableFocus(_object: number | IObject, toggle: boolean, weaponLock: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x00EE08603EADEE92 | Since: 1207
 */
export declare function setPickupCollectableOnMount(_object: number | IObject): void;
