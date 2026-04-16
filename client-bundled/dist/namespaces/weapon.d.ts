import { Vector3, IEntity, IPed, IVehicle, IObject } from '@risinglife/redm-shared';
/**
 * A getter for the accuracy spread of a weapon.
 *
 * Hash: 0x5343721 | Since: unknown | API-Set: client
 */
export declare function getAccuracySpread(weaponHash: number | string): number;
/**
 * A getter for [SET_WEAPON_ANIMATION_OVERRIDE](#\_0x1055AC3A667F09D9).
 *
 * Hash: 0x63ED2E7 | Since: unknown | API-Set: client
 */
export declare function getAnimationOverride(ped: number | IPed): number;
/**
 * A getter for `CWeaponAccuracyModifier` in a weapon component.
 *
 * Hash: 0xC693E278 | Since: unknown | API-Set: client
 */
export declare function getComponentAccuracyModifier(componentHash: number | string): number;
/**
 * A getter for `CameraHash` in a weapon scope component.
 *
 * Hash: 0xACB7E68F | Since: unknown | API-Set: client
 */
export declare function getComponentCameraHash(componentHash: number | string): number;
/**
 * A getter for `ClipSize` in a weapon component.
 *
 * Hash: 0xE14CF665 | Since: unknown | API-Set: client
 */
export declare function getComponentClipSize(componentHash: number | string): number;
/**
 * A getter for `CWeaponDamageModifier` in a weapon component.
 *
 * Hash: 0x4A0E3855 | Since: unknown | API-Set: client
 */
export declare function getComponentDamageModifier(componentHash: number | string): number;
/**
 * A getter for `CWeaponFallOffModifier` damage modifier value in a weapon component.
 *
 * Hash: 0xE134FB8D | Since: unknown | API-Set: client
 */
export declare function getComponentRangeDamageModifier(componentHash: number | string): number;
/**
 * A getter for `CWeaponFallOffModifier` range modifier value in a weapon component.
 *
 * Hash: 0x2FD0BC1B | Since: unknown | API-Set: client
 */
export declare function getComponentRangeModifier(componentHash: number | string): number;
/**
 * A getter for `ReticuleHash` in a weapon scope component.
 *
 * Hash: 0xF9AB9297 | Since: unknown | API-Set: client
 */
export declare function getComponentReticuleHash(componentHash: number | string): number;
/**
 * A getter for [\_SET_WEAPON_DAMAGE_MODIFIER](#\_0x4757F00BC6323CFE).
 *
 * Hash: 0xD979143 | Since: unknown | API-Set: client
 */
export declare function getDamageModifier(weaponHash: number | string): number;
/**
 * A getter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x5E1AF5F | Since: unknown | API-Set: client
 */
export declare function getRecoilShakeAmplitude(weaponHash: number | string): number;
/**
 * Disables weapons aim blocking due to environment for local player.
 * For non-player peds [SET_PED_ENABLE_WEAPON_BLOCKING](#\_0x97A790315D3831FD) can be used.
 *
 * Hash: 0xDFD8F6DE | Since: unknown | API-Set: client
 */
export declare function setsNoAimBlocking(state: boolean): void;
/**
 * Disables the game's built-in auto-reloading.
 *
 * Hash: 0x311150E5 | Since: unknown | API-Set: client
 */
export declare function setsNoAutoreload(state: boolean): void;
/**
 * Disables autoswapping to another weapon when the current weapon runs out of ammo.
 *
 * Hash: 0x2A7B50E | Since: unknown | API-Set: client
 */
export declare function setsNoAutoswap(state: boolean): void;
/**
 * A setter for the accuracy spread of a weapon.
 *
 * Hash: 0x598DD6AE | Since: unknown | API-Set: client
 */
export declare function setAccuracySpread(weaponHash: number | string, spread: number): void;
/**
 * A setter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x9864312F | Since: unknown | API-Set: client
 */
export declare function setRecoilShakeAmplitude(weaponHash: number | string, amplitude: number): void;
/**
 * No comment provided
 *
 * Hash: 0x918990BD9CE08582 | Since: 1207 | API-Set: unknown
 */
export declare function getAllowDualWield(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2E1202248937775C | Since: 1207 | API-Set: unknown
 */
export declare function getAmmoInClip(ped: number | IPed, weaponHash: number | string): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x015A522136D7F951 | Since: 1207 | API-Set: unknown
 */
export declare function getAmmoInPed(ped: number | IPed, weaponHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xF52BD94B47CCF736 | Since: 1207 | API-Set: unknown
 */
export declare function getBestPedShortarmGuid(ped: number | IPed): any;
/**
 * No comment provided
 *
 * Hash: 0x8483E98E8B888AE2 | Since: 1207 | API-Set: unknown
 */
export declare function getBestPed(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x1017582BCD3832DC | Since: 1207 | API-Set: unknown
 */
export declare function getCurrentPedVehicle(ped: number | IPed): [boolean, number];
/**
 * attachPoint: see SET_CURRENT_PED_WEAPON
 *
 * Hash: 0x3A87E44BB9A01D54 | Since: 1207 | API-Set: unknown
 */
export declare function getCurrentPed(ped: number | IPed, attachPoint: number): [boolean, number];
/**
 * Returns weaponObject, attachPoint: see SET_CURRENT_PED_WEAPON
 *
 * Hash: 0x3B390A939AF0B5FC | Since: 1207 | API-Set: unknown
 */
export declare function getCurrentPedEntityIndex(ped: number | IPed, attachPoint: number): number;
/**
 * No comment provided
 *
 * Hash: 0xDC16122C7A20C933 | Since: 1207 | API-Set: unknown
 */
export declare function getMaxAmmo(ped: number | IPed, weaponHash: number | string): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xA38DCFFCEA8962FA | Since: 1207 | API-Set: unknown
 */
export declare function getMaxAmmoInClip(ped: number | IPed, weaponHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x39D22031557946C1 | Since: 1207 | API-Set: unknown
 */
export declare function getPedAmmoByType(ped: number | IPed, ammoType: number | string): number;
/**
 * Returns the current ammo type of the specified ped's specified weapon.
 *
 * Hash: 0x7FEAD38B326B9F74 | Since: 1207 | API-Set: unknown
 */
export declare function getPedAmmoTypeFrom(ped: number | IPed, weaponHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xC71FE230A513C30F | Since: 1207 | API-Set: unknown
 */
export declare function getPedBackup(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x6C4D0409BA1A2BC2 | Since: 1207 | API-Set: unknown
 */
export declare function getPedLastImpactCoord(ped: number | IPed): [boolean, Vector3];
/**
 * No comment provided
 *
 * Hash: 0x6929E22158E52265 | Since: 1207 | API-Set: unknown
 */
export declare function getPedGuidAtAttachPoint(ped: number | IPed, attachPoint: number): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xEDCA14CA5199FF25 | Since: 1207 | API-Set: unknown
 */
export declare function gettypeGroup(weaponHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xD3750CCC00635FC2 | Since: 1207 | API-Set: unknown
 */
export declare function getClipSize(weaponHash: number | string): number;
/**
 * 0.0: good condition, 1.0: poor condition
 *
 * Hash: 0x0D78E1097F89E637 | Since: 1207 | API-Set: unknown
 */
export declare function getDegradation(weaponObject: number | IObject): number;
/**
 * Related to rust of weapons
 *
 * Hash: 0xD56E5F336C675EFA | Since: 1207 | API-Set: unknown
 */
export declare function getPermanentDegradation(weaponObject: number | IObject): number;
/**
 * addReason: see _ADD_AMMO_TO_PED
 *
 * Hash: 0xB282DC6EBD803C75 | Since: 1207 | API-Set: unknown
 */
export declare function giveDelayedToPed(ped: number | IPed, weaponHash: number | string, ammoCount: number, addReason: number | string): void;
/**
 * Gives the ped the weapon.
 * List: https://github.com/femga/rdr3_discoveries/blob/master/weapons/weapons.lua
 *
 * Params: p7 is 0.5f, and p8 is 1.0f. p11 and p12 are both 0 in R* Scripts
 * attachPoint: see SET_CURRENT_PED_WEAPON
 * addReason: see _ADD_AMMO_TO_PED
 * permanentDegradation: default 0.5, any higher than 0 it will automatically make the weapon worn, you can also adjust the value to change the weapons maximum cleanliness
 *
 * Hash: 0x5E3BDDBCB83F3D84 | Since: 1207 | API-Set: unknown
 */
export declare function giveToPed(ped: number | IPed, weaponHash: number | string, ammoCount: number, bForceInHand: boolean, bForceInHolster: boolean, attachPoint: number, bAllowMultipleCopies: boolean, addReason: number | string, bIgnoreUnlocks: boolean, permanentDegradation: number): number;
/**
 * No comment provided
 *
 * Hash: 0xBE7E42B07FD317AC | Since: 1207 | API-Set: unknown
 */
export declare function giveToPedWithOptions(ped: number | IPed): [boolean, any, any];
/**
 * onlyCheckPlayerInventory: If true, it will only check the players current inventory. If false, it also checks your horse inventory
 *
 * Hash: 0x8DECB02F88F428BC | Since: 1207 | API-Set: unknown
 */
export declare function hasPedGot(ped: number | IPed, weaponHash: number | string, onlyCheckPlayerInventory: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x76A18844E743BF91 | Since: 1207 | API-Set: unknown
 */
export declare function hasGotWeaponComponent(weapon: number | IObject, addonHash: number | string): boolean;
/**
 * Hides the ped's weapon during a cutscene.
 *
 * Hash: 0x6F6981D2253C208F | Since: 1207 | API-Set: unknown
 */
export declare function hidePedForScriptedCutscene(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xCB690F680A3EA971 | Since: 1207 | API-Set: unknown
 */
export declare function isPedArmed(ped: number | IPed, flags: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF29A186ED428B552 | Since: 1207 | API-Set: unknown
 */
export declare function isPedCarrying(ped: number | IPed, weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB80CA294F2F26749 | Since: 1207 | API-Set: unknown
 */
export declare function isPedReadyToShoot(ped: number | IPed): boolean;
/**
 * `Returns true if CWeaponInfoFlags::Flags::Gun is set.`
 *
 * Hash: 0x705BE297EEBDB95D | Since: 1207 | API-Set: unknown
 */
export declare function isAGun(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC4DEC3CA8C365A5D | Since: 1207 | API-Set: unknown
 */
export declare function isBow(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x959383DCD42040DA | Since: 1207 | API-Set: unknown
 */
export declare function isMeleeWeapon(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDDC64F5E31EEDAB6 | Since: 1207 | API-Set: unknown
 */
export declare function isPistol(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDDB2578E95EF7138 | Since: 1207 | API-Set: unknown
 */
export declare function isRepeater(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC212F1D05A8232BB | Since: 1207 | API-Set: unknown
 */
export declare function isRevolver(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0A82317B7EBFC420 | Since: 1207 | API-Set: unknown
 */
export declare function isRifle(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC75386174ECE95D5 | Since: 1207 | API-Set: unknown
 */
export declare function isShotgun(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x937C71165CF334B3 | Since: 1207 | API-Set: unknown
 */
export declare function isValid(weaponHash: number | string): boolean;
/**
 * Old name: _DROP_CURRENT_PED_WEAPON
 *
 * Hash: 0xCEF4C65DE502D367 | Since: 1207 | API-Set: unknown
 */
export declare function makePedDrop(ped: number | IPed, attachPoint: number): number;
/**
 * No comment provided
 *
 * Hash: 0xF25DF915FA38C5F3 | Since: 1207 | API-Set: unknown
 */
export declare function removeAllPeds(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xF7D82B0D66777611 | Since: 1207 | API-Set: unknown
 */
export declare function removeComponentFromWeaponObject(weaponObject: number | IObject, component: number | string): void;
/**
 * removeReason:
 * enum eRemoveItemReason : Hash
 * {
 * REMOVE_REASON_CLIENT_PURGED = 0x4A4E94DC,
 * REMOVE_REASON_COALESCE = 0x2ABE393E,
 * REMOVE_REASON_DEBUG = 0xA07362E6,
 * REMOVE_REASON_DEFAULT = 0xF77DE93D,
 * REMOVE_REASON_DELETE_CHARACTER = 0x20AFBDE9,
 * REMOVE_REASON_DROPPED = 0xEC7FB5D5,
 * REMOVE_REASON_DUPLICATE = 0x19047132,
 * REMOVE_REASON_GIFTED_INCORRECTLY = 0x9C4E3829,
 * REMOVE_REASON_GIVEN = 0xAD5377D4,
 * REMOVE_REASON_INSUFFICIENT_INVENTORY = 0x518D1AAE,
 * REMOVE_REASON_ITEM_DOES_NOT_EXIST = 0xEAD5D889,
 * REMOVE_REASON_LOADOUT = 0x1B94E3BA,
 * REMOVE_REASON_SET_AMOUNT = 0x19D5CFA5,
 * REMOVE_REASON_SOLD = 0x76C4B482,
 * REMOVE_REASON_USED = 0x2188E0A3,
 * REMOVE_REASON_USE_FAILED = 0x671F9EAD
 * };
 *
 * Hash: 0x4899CB088EDF59B8 | Since: 1207 | API-Set: unknown
 */
export declare function removeFromPed(ped: number | IPed, weaponHash: number | string, removeReason: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x78030C7867D8B9B6 | Since: 1207 | API-Set: unknown
 */
export declare function setAllowAnyDrop(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xDCD2A934D65CB497 | Since: 1207 | API-Set: unknown
 */
export declare function setAmmoInClip(ped: number | IPed, weaponHash: number | string, ammo: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x75C55983C2C39DAA | Since: 1207 | API-Set: unknown
 */
export declare function setCurrentPedVehicle(ped: number | IPed, weaponHash: number | string): boolean;
/**
 * attachPoint:
 * enum eWeaponAttachPoint
 * {
 * WEAPON_ATTACH_POINT_INVALID = -1,
 * WEAPON_ATTACH_POINT_HAND_PRIMARY = 0,
 * WEAPON_ATTACH_POINT_HAND_SECONDARY = 1,
 * WEAPON_ATTACH_POINT_PISTOL_R = 2,
 * MAX_HAND_WEAPON_ATTACH_POINTS = 2,
 * WEAPON_ATTACH_POINT_PISTOL_L = 3,
 * WEAPON_ATTACH_POINT_KNIFE = 4,
 * WEAPON_ATTACH_POINT_LASSO = 5,
 * WEAPON_ATTACH_POINT_THROWER = 6,
 * WEAPON_ATTACH_POINT_BOW = 7,
 * WEAPON_ATTACH_POINT_BOW_ALTERNATE = 8,
 * WEAPON_ATTACH_POINT_RIFLE = 9,
 * WEAPON_ATTACH_POINT_RIFLE_ALTERNATE = 10,
 * WEAPON_ATTACH_POINT_LANTERN = 11,
 * WEAPON_ATTACH_POINT_TEMP_LANTERN = 12,
 * WEAPON_ATTACH_POINT_MELEE = 13,
 * MAX_SYNCED_WEAPON_ATTACH_POINTS = 13,
 * WEAPON_ATTACH_POINT_HIP = 14,
 * WEAPON_ATTACH_POINT_BOOT = 15,
 * WEAPON_ATTACH_POINT_BACK = 16,
 * WEAPON_ATTACH_POINT_FRONT = 17,
 * WEAPON_ATTACH_POINT_SHOULDERSLING = 18,
 * WEAPON_ATTACH_POINT_LEFTBREAST = 19,
 * WEAPON_ATTACH_POINT_RIGHTBREAST = 20,
 * WEAPON_ATTACH_POINT_LEFTARMPIT = 21,
 * WEAPON_ATTACH_POINT_RIGHTARMPIT = 22,
 * WEAPON_ATTACH_POINT_LEFTARMPIT_RIFLE = 23,
 * WEAPON_ATTACH_POINT_SATCHEL = 24,
 * WEAPON_ATTACH_POINT_LEFTARMPIT_BOW = 25,
 * WEAPON_ATTACH_POINT_RIGHT_HAND_EXTRA = 26,
 * WEAPON_ATTACH_POINT_LEFT_HAND_EXTRA = 27,
 * WEAPON_ATTACH_POINT_RIGHT_HAND_AUX = 28,
 * MAX_WEAPON_ATTACH_POINTS = 29
 * };
 *
 * Hash: 0xADF692B254977C0C | Since: 1207 | API-Set: unknown
 */
export declare function setCurrentPed(ped: number | IPed, weaponHash: number | string, equipNow: boolean, attachPoint: number): void;
/**
 * Equips a weapon from a weaponItem, similar to GIVE_WEAPON_TO_PED
 *
 * Hash: 0x12FB95FE3D579238 | Since: 1207 | API-Set: unknown
 */
export declare function setCurrentPedByGuid(ped: number | IPed): any;
/**
 * No comment provided
 *
 * Hash: 0x739B9C6D0E7F7F93 | Since: 1207 | API-Set: unknown
 */
export declare function setInstantlyEquipPickups(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x14E56BC5B5DB6A19 | Since: 1207 | API-Set: unknown
 */
export declare function setPedAmmo(ped: number | IPed, weaponHash: number | string, ammo: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5FD1E1F011E76D7E | Since: 1207 | API-Set: unknown
 */
export declare function setPedAmmoByType(ped: number | IPed, ammoType: number | string, ammo: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA4EFEF9440A5B0EF | Since: 1207 | API-Set: unknown
 */
export declare function setPedAmmoToDrop(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x0725A4CCFDED9A70 | Since: 1207 | API-Set: unknown
 */
export declare function setPedCurrentVisible(ped: number | IPed, visible: boolean, deselectWeapon: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x208A1888007FC0E6 | Since: 1207 | API-Set: unknown
 */
export declare function setPedDropsInventory(ped: number | IPed, weaponHash: number | string, xOffset: number, yOffset: number, zOffset: number, ammoCount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x476AE72C1D19D1A8 | Since: 1207 | API-Set: unknown
 */
export declare function setPedDropssWhenDead(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x3EDCB0505123623B | Since: 1207 | API-Set: unknown
 */
export declare function setPedInfiniteAmmo(ped: number | IPed, toggle: boolean, weaponHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xEC1F85DA51D3D6C4 | Since: 1232 | API-Set: unknown
 */
export declare function setPlayerPedQuickSwapByGuid(ped: number | IPed): [any, any];
/**
 * No comment provided
 *
 * Hash: 0x194D877FC5597B7D | Since: 1207 | API-Set: unknown
 */
export declare function setVehicleHeading(vehicle: number | IVehicle, seatIndex: number, heading: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2C83212A7AA51D3D | Since: 1207 | API-Set: unknown
 */
export declare function shouldBeDiscardedWhenSwapped(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x000FA7A4A8443AF7 | Since: 1207 | API-Set: unknown
 */
export declare function _0x000FA7A4A8443AF7(): void;
/**
 * No comment provided
 *
 * Hash: 0x16D9841A85FA627E | Since: 1207 | API-Set: unknown
 */
export declare function _0x16D9841A85FA627E(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x183CE355115B6E75 | Since: 1207 | API-Set: unknown
 */
export declare function _0x183CE355115B6E75(): void;
/**
 * No comment provided
 *
 * Hash: 0x431240A58484D5D0 | Since: 1207 | API-Set: unknown
 */
export declare function _0x431240A58484D5D0(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x457B16951AD77C1B | Since: 1436 | API-Set: unknown
 */
export declare function _0x457B16951AD77C1B(): void;
/**
 * No comment provided
 *
 * Hash: 0x45E57FDD531C9477 | Since: 1207 | API-Set: unknown
 */
export declare function _0x45E57FDD531C9477(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x4823F13A21F51964 | Since: 1207 | API-Set: unknown
 */
export declare function _0x4823F13A21F51964(): any;
/**
 * No comment provided
 *
 * Hash: 0x486C96A0DCD2BC92 | Since: 1232 | API-Set: unknown
 */
export declare function _0x486C96A0DCD2BC92(): any;
/**
 * Only used in R* Script fme_escaped_convicts, p0 = 0
 *
 * Hash: 0x63B83A526329AFBC | Since: 1207 | API-Set: unknown
 */
export declare function _0x63B83A526329AFBC(): void;
/**
 * No comment provided
 *
 * Hash: 0x641351E9AD103890 | Since: 1207 | API-Set: unknown
 */
export declare function _0x641351E9AD103890(): void;
/**
 * No comment provided
 *
 * Hash: 0x74C2365FDD1BB48F | Since: 1207 | API-Set: unknown
 */
export declare function _0x74C2365FDD1BB48F(): void;
/**
 * Only used in R* SP Script guama3
 *
 * Hash: 0x9409C62504A8F9E9 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9409C62504A8F9E9(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x9CCA3131E6B53C68 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9CCA3131E6B53C68(): any;
/**
 * No comment provided
 *
 * Hash: 0xA2091482ED42EF85 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA2091482ED42EF85(): any;
/**
 * No comment provided
 *
 * Hash: 0xA3716A77DCF17424 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA3716A77DCF17424(): void;
/**
 * No comment provided
 *
 * Hash: 0xA769D753922B031B | Since: 1207 | API-Set: unknown
 */
export declare function _0xA769D753922B031B(): void;
/**
 * No comment provided
 *
 * Hash: 0xB0FB9B196A3D13F0 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB0FB9B196A3D13F0(): void;
/**
 * No comment provided
 *
 * Hash: 0xC5899C4CD2E2495D | Since: 1207 | API-Set: unknown
 */
export declare function _0xC5899C4CD2E2495D(): void;
/**
 * No comment provided
 *
 * Hash: 0xD53846B9C931C181 | Since: 1207 | API-Set: unknown
 */
export declare function _0xD53846B9C931C181(): void;
/**
 * No comment provided
 *
 * Hash: 0xE9B3FEC825668291 | Since: 1207 | API-Set: unknown
 */
export declare function _0xE9B3FEC825668291(): void;
/**
 * No comment provided
 *
 * Hash: 0xECBB26529A737EF6 | Since: 1207 | API-Set: unknown
 */
export declare function _0xECBB26529A737EF6(): void;
/**
 * No comment provided
 *
 * Hash: 0xF08D8FEB455F2C8C | Since: 1207 | API-Set: unknown
 */
export declare function _0xF08D8FEB455F2C8C(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xF252A85B8F3F8C58 | Since: 1207 | API-Set: unknown
 */
export declare function _0xF252A85B8F3F8C58(weaponCollection: number | string, dualwieldVariant: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF2F585411E748B9C | Since: 1207 | API-Set: unknown
 */
export declare function _0xF2F585411E748B9C(): any;
/**
 * Returns weaponHash
 *
 * Hash: 0xF8204EF17410BF43 | Since: 1207 | API-Set: unknown
 */
export declare function _0xF8204EF17410BF43(weaponGroupHash: number | string): number;
/**
 * addReason:
 * enum eAddItemReason : Hash
 * {
 * ADD_REASON_AWARDS = 0xB784AD1E,
 * ADD_REASON_CREATE_CHARACTER = 0xE2C4FF71,
 * ADD_REASON_DEBUG = 0x5C05C64D,
 * ADD_REASON_DEFAULT = 0x2CD419DC,
 * ADD_REASON_GET_INVENTORY = 0xD8188685,
 * ADD_REASON_INCENTIVE = 0x8ADC2E95,
 * ADD_REASON_LOADOUT = 0xCA3454E6,
 * ADD_REASON_LOAD_SAVEGAME = 0x56212906,
 * ADD_REASON_LOOTED = 0xCA806A55,
 * ADD_REASON_MELEE = 0x7B9BDCE7,
 * ADD_REASON_MP_MISSION = 0xEC0E0194,
 * ADD_REASON_NOTIFICATION = 0xC56292D2,
 * ADD_REASON_PICKUP = 0x1A770E22,
 * ADD_REASON_PURCHASED = 0x4A6726C9,
 * ADD_REASON_SET_AMOUNT = 0x4504731E,
 * ADD_REASON_SYNCING = 0x8D4B4FF4,
 * ADD_REASON_USE_FAILED = 0xD385B670
 * };
 *
 * Hash: 0xB190BCA3F4042F95 | Since: 1207 | API-Set: unknown
 */
export declare function addAmmoToPed(ped: number | IPed, weaponHash: number | string, amount: number, addReason: number | string): void;
/**
 * addReason: see _ADD_AMMO_TO_PED
 *
 * Hash: 0x106A811C6D3035F3 | Since: 1207 | API-Set: unknown
 */
export declare function addAmmoToPedByType(ped: number | IPed, ammoType: number | string, amount: number, addReason: number | string): void;
/**
 * Puts the gun visibly in your horse's holster without having to be close to the horse. Use 0xE9BD19F8121ADE3E before using this native
 * Notes:
 * - Must call _SEND_WEAPON_TO_INVENTORY (0xE9BD19F8121ADE3E) beforehand to move the weapon into the horse inventory. That native makes it accessible from the weapon wheel but not visible; this native makes it visible on the horse.
 * - Works at a distance; proximity to the horse is not required.
 *
 * Hash: 0x14FF0C2545527F9B | Since: 1207 | API-Set: unknown
 */
export declare function attachToHorseHolster(horse: number | IPed, weaponHash: number | string, horseOwner: number | IPed): void;
/**
 * Returns true if the given ped is in a valid state to stow or retrieve weapons from their *owned* mount.
 * This typically means the ped is either on their horse or close enough to it for saddle weapon interactions.
 * Notes:
 * - The ped does **not** need to currently hold a weapon. This check simply determines if saddle stowing/retrieval actions are allowed.
 * - Commonly used to enable weapon wheel or stow prompts near the player’s own horse.
 * - Will return false if the ped is near a non-owned horse or too far from their own.
 *
 * Hash: 0x23BF601A42F329A0 | Since: 1207 | API-Set: unknown
 */
export declare function canPedAccessMounts(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x087D8F4BC65F68E4 | Since: 1207 | API-Set: unknown
 */
export declare function clearPedLastDamage(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x9888652B8BA77F73 | Since: 1207 | API-Set: unknown
 */
export declare function createObject(weaponHash: number | string, ammoCount: number, pos: Vector3, showWorldModel: boolean, scale: number): number;
/**
 * Deletes the weapon object on the specified mount where its holstered.
 * Deletes all visible weapon PROP objects attached to the mount's holsters.
 * This ONLY removes objects; the weapons remain in inventory and are still accessible.
 *
 * Hash: 0xD4C6E24D955FF061 | Since: 1311 | API-Set: unknown
 */
export declare function deleteObjectFromMount(horse: number | IPed): void;
/**
 * Disables all special ammo types for the specified weapon on the given ped, forcing the weapon to use only its basic/regular ammunition.
 * - After calling this native, the weapon on that ped becomes restricted to regular ammo only.
 * - Works as a higher-level override compared to _DISABLE_AMMO_TYPE_FOR_PED and _DISABLE_AMMO_TYPE_FOR_PED_WEAPON, which target individual ammo types.
 * - Useful when ensuring a weapon cannot use any special ammo variants such as high velocity, express, explosive, or split point.
 *
 * Hash: 0xD63B4BA3A02A99E0 | Since: 1207 | API-Set: unknown
 */
export declare function disableAllSpecialAmmoForPed(ped: number | IPed, weaponHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xAA5A52204E077883 | Since: 1207 | API-Set: unknown
 */
export declare function disableAmmoTypeForPed(ped: number | IPed, ammoHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xF0D728EEA3C99775 | Since: 1207 | API-Set: unknown
 */
export declare function disableAmmoTypeForPedWeapon(ped: number | IPed, weaponHash: number | string, ammoHash: number | string): void;
/**
 * Returns whether the ped has a pistol p1: 0 or 1
 *
 * Hash: 0xBFCA7AFABF9D7967 | Since: 1207 | API-Set: unknown
 */
export declare function doesPedHavePistol(ped: number | IPed): boolean;
/**
 * Returns whether the ped has a repeater p1: 0 or 1
 *
 * Hash: 0x495A04CAEC263AF8 | Since: 1207 | API-Set: unknown
 */
export declare function doesPedHaveRepeater(ped: number | IPed): boolean;
/**
 * Returns whether the ped has a revolver p1: 0 or 1
 *
 * Hash: 0x5B235F24472F2C3B | Since: 1207 | API-Set: unknown
 */
export declare function doesPedHaveRevolver(ped: number | IPed): boolean;
/**
 * Returns whether the ped has a rifle p1: 0 or 1
 *
 * Hash: 0x95CA12E2C68043E5 | Since: 1207 | API-Set: unknown
 */
export declare function doesPedHaveRifle(ped: number | IPed): boolean;
/**
 * Returns whether the ped has a shotgun p1: 0 or 1
 *
 * Hash: 0xABC18A28BAD4B46F | Since: 1207 | API-Set: unknown
 */
export declare function doesPedHaveShotgun(ped: number | IPed): boolean;
/**
 * Returns whether the ped has a sniper p1: 0 or 1
 *
 * Hash: 0x80BB243789008A82 | Since: 1207 | API-Set: unknown
 */
export declare function doesPedHaveSniper(ped: number | IPed): boolean;
/**
 * Enables all special ammo types for the specified weapon on the given ped.
 * This is the inverse of _DISABLE_ALL_SPECIAL_AMMO_FOR_PED, restoring the ped’s ability to use any special ammo variants available for that weapon.
 * Restores full access to special ammo categories such as express, high velocity, split point, explosive, etc.
 *
 * Hash: 0x404514D231DB27A0 | Since: 1207 | API-Set: unknown
 */
export declare function enableAllSpecialAmmoForPed(ped: number | IPed, weaponHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x3B7B7908B7ADFB4B | Since: 1207 | API-Set: unknown
 */
export declare function enableAmmoTypeForPed(ped: number | IPed, weaponHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x23FB9FACA28779C1 | Since: 1207 | API-Set: unknown
 */
export declare function enableAmmoTypeForPedWeapon(ped: number | IPed, weaponHash: number | string, ammoHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xC395355843BE134B | Since: 1207 | API-Set: unknown
 */
export declare function enableRestore(ped: number | IPed): boolean;
/**
 * Forces the detonation or effect of a throwable ammo type owned or placed by the specified ped.
 * Commonly used for remotely exploding dynamite that belong to the ped.
 * ammoHashes:
 * - joaat("AMMO_DYNAMITE")
 * - joaat("AMMO_MOLOTOV")
 * - joaat("AMMO_POISONBOTTLE")
 *
 * Hash: 0x44C8F4908F1B2622 | Since: 1207 | API-Set: unknown
 */
export declare function explodePedAmmoType(ped: number | IPed, ammoHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x678F00858980F516 | Since: 1207 | API-Set: unknown
 */
export declare function getAmmoInClipByInventoryUid(ped: number | IPed): [boolean, number, any];
/**
 * No comment provided
 *
 * Hash: 0xEC97101A8F311282 | Since: 1207 | API-Set: unknown
 */
export declare function getAmmoRecommendedTypeFor(weaponHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x5C2EA6C44F515F34 | Since: 1207 | API-Set: unknown
 */
export declare function getAmmoTypeFor(weaponHash: number | string): number;
/**
 * If near your horse when called, weapons stored on your horse will be considered
 * Returns weaponHash
 *
 * Hash: 0x9F67929D98E7C6E8 | Since: 1207 | API-Set: unknown
 */
export declare function getBestPedInGroup(ped: number | IPed, weaponGroup: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x7B98500614C8E8B8 | Since: 1232 | API-Set: unknown
 */
export declare function getBestPedInInventory(ped: number | IPed): [any, any];
/**
 * No comment provided
 *
 * Hash: 0x6554ECCE226F2A2A | Since: 1207 | API-Set: unknown
 */
export declare function getCanTwirl(weaponHash: number | string): boolean;
/**
 * _GET_BEST_* - _GET_CLOSEST_*
 *
 * Hash: 0xCD356B42C57BFE01 | Since: 1355 | API-Set: unknown
 */
export declare function getCorrectKitEmoteTwirlGun(ped: number | IPed): [boolean, any];
/**
 * Returns ammoHash
 *
 * Hash: 0xAF9D167A5656D6A6 | Since: 1207 | API-Set: unknown
 */
export declare function getCurrentAmmoTypeFromGuid(ped: number | IPed): [number, any];
/**
 * Returns ammoHash from weaponObject (Returned by 0x6CA484C9A7377E4F)
 *
 * Hash: 0x7E7B19A4355FEE13 | Since: 1207 | API-Set: unknown
 */
export declare function getCurrentPedAmmoType(ped: number | IPed, weaponObject: number | IObject): number;
/**
 * Returns weaponCollection Hash
 * Example: RE_POLICECHASE_MALES_01: Carbine Repeater + Knife, LO_AGRO_PED
 *
 * Hash: 0xD42514C182121C23 | Since: 1207 | API-Set: unknown
 */
export declare function getDefaultPedCollection(pedModel: number | string): number;
/**
 * Returns the ped's default unarmed weapon hash as defined in CPedModelInfo (DefaultUnarmedWeapon).
 * Falls back to WEAPON_UNARMED if the ped doesn't have a valid model info pointer, or 0 if the ped doesn't exist.
 *
 * Hash: 0x08FF1099ED2E6E21 | Since: 1207 | API-Set: unknown
 */
export declare function getDefaultUnarmedHash(ped: number | IPed): number;
/**
 * Returns the attachpoint for a weapon hash. (returns -1 for melee as they can't be attached)
 *
 * Hash: 0x65DC4AC5B96614CB | Since: 1311 | API-Set: unknown
 */
export declare function getDefaultAttachPoint(weaponHash: number | string): number;
/**
 * Returns the first ignited (lit/fused) explosive projectile entity found within the specified Volume.
 * `Similar to WEAPON::_GET_FIRST_PROJECTILE_IN_VOLUME (0x74C8000FDD1BB222), but only returns projectiles that are currently ignited (e.g., a lit dynamite about to explode).`
 *
 * Hash: 0x74C8000FDD1BB111 | Since: 1207 | API-Set: unknown
 */
export declare function getIgnitedProjectileInVolume(volume: number): [any, any];
/**
 * Returns the effective lock-on or targeting range for the ped’s current weapon.
 * This value reflects the weapon’s maximum aim assist or targeting distance, used for systems like auto-aim and lock-on overrides.
 *
 * Hash: 0x3799EFCC3C8CD5E1 | Since: 1207 | API-Set: unknown
 */
export declare function getLockonRangeCurrent(ped: number | IPed): number;
/**
 * Returns the current state of longarm storage on dismount for the specified ped.
 *
 * Hash: 0x5A695BD328586B44 | Since: 1207 | API-Set: unknown
 */
export declare function getLongarmStoreOnDismountState(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x79B1A6E780266DB0 | Since: 1207 | API-Set: unknown
 */
export declare function getMaxLockonDistanceOfCurrentPed(ped: number | IPed): number;
/**
 * returns the amount of peds that were restrained with the weapon thrown bolas
 *
 * Hash: 0x46D42883E873C1D7 | Since: 1232 | API-Set: unknown
 */
export declare function getNumPedsRestrainedFromBolas(ped: number | IPed): number;
/**
 * Returns true if the ped can switch of weapon.
 *
 * Hash: 0xBC9444F2FF94A9C0 | Since: 1355 | API-Set: unknown
 */
export declare function getPedCanSwitch(ped: number | IPed): boolean;
/**
 * Returns eCurrentHeldWeapon
 * _GET_R* - _GET_T*
 *
 * Hash: 0x8425C5F057012DAB | Since: 1207 | API-Set: unknown
 */
export declare function getPedCurrentHeld(ped: number | IPed): number;
/**
 * Returns emote Hash
 *
 * Hash: 0x2C4FEC3D0EFA9FC0 | Since: 1355 | API-Set: unknown
 */
export declare function getPedGunSpinningEquippedKitEmoteTwirl(ped: number | IPed): number;
/**
 * Returns iSpinHash / iVariationSpin
 *
 * Hash: 0xF3B1620B920D1708 | Since: 1355 | API-Set: unknown
 */
export declare function getPedGunSpinningHashFromEmoteVariation(ped: number | IPed, weaponEmoteVariation: number): number;
/**
 * No comment provided
 *
 * Hash: 0x90EB1CB189923587 | Since: 1207 | API-Set: unknown
 */
export declare function getPedHogtie(ped: number | IPed): number;
/**
 * slotHash is usually just the weaponHash name, but WEAPON_* is replaced with SLOT_*
 *
 * Hash: 0xDBC4B552B2AE9A83 | Since: 1207 | API-Set: unknown
 */
export declare function getPedInSlot(ped: number | IPed, slotHash: number | string): number;
/**
 * _GET_M* - _GET_PED_A*
 *
 * Hash: 0x6CA484C9A7377E4F | Since: 1207 | API-Set: unknown
 */
export declare function getPedObject(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xDA37A053C1522F5D | Since: 1207 | API-Set: unknown
 */
export declare function getPedWorst(ped: number | IPed): number;
/**
 * Outputs cached guids
 *
 * Hash: 0xB7E52A058B07C7E2 | Since: 1232 | API-Set: unknown
 */
export declare function getPlayerPedQuickSwapByGuid(ped: number | IPed): [any, any];
/**
 * No comment provided
 *
 * Hash: 0x74C8000FDD1BB222 | Since: 1207 | API-Set: unknown
 */
export declare function getProjectileInVolume(volume: number): [any, any];
/**
 * Gets the model hash from the weapon hash.
 *
 * Hash: 0xF70825EB340E7D15 | Since: 1207 | API-Set: unknown
 */
export declare function gettypeModel(weaponHash: number | string): number;
/**
 * Returns hash where WEAPON_ is replaced with SLOT_
 *
 * Hash: 0x46F032B8DDF46CDE | Since: 1207 | API-Set: unknown
 */
export declare function gettypeSlot(weaponHash: number | string): number;
/**
 * Returns WeaponAttachPoint
 *
 * Hash: 0xCAD4FE9398820D24 | Since: 1207 | API-Set: unknown
 */
export declare function getAttachPoint(ped: number | IPed, attachPoint: number): number;
/**
 * No comment provided
 *
 * Hash: 0x59DE03442B6C9598 | Since: 1207 | API-Set: unknown
 */
export declare function getComponentTypeModel(componentHash: number | string): number;
/**
 * Related to weapon visual damage, not actual damage.
 *
 * Hash: 0x904103D5D2333977 | Since: 1207 | API-Set: unknown
 */
export declare function getDamage(weaponObject: number | IObject): number;
/**
 * No comment provided
 *
 * Hash: 0x810E8AE9AFEA7E54 | Since: 1207 | API-Set: unknown
 */
export declare function getDirt(weaponObject: number | IObject): number;
/**
 * Returns weaponEmoteVariation
 *
 * WEAPON_EMOTE_VARIATION_INVALID = -2,
 * WEAPON_EMOTE_VARIATION_BASE,
 * WEAPON_EMOTE_VARIATION_A,
 * WEAPON_EMOTE_VARIATION_B,
 * WEAPON_EMOTE_VARIATION_C,
 * WEAPON_EMOTE_VARIATION_D,
 * WEAPON_EMOTE_VARIATION_PREVIEW,
 * WEAPON_EMOTE_NUM_VARIATIONS
 *
 * Hash: 0x86147D05FA831D3A | Since: 1355 | API-Set: unknown
 */
export declare function getEmoteVariation(ped: number | IPed, variation: number): number;
/**
 * this native gets the weapon hash from the default ped weapon collection (see GetDefaultPedWeaponCollection for more info) will randomly return one of it's weapons
 *
 * Hash: 0x9EEFD670F10656D7 | Since: 1207 | API-Set: unknown
 */
export declare function getFromDefaultPedWeaponCollection(weaponCollection: number | string, weaponGroup: number | string): number;
/**
 * Returns the weapon hash stored in the first holster slot of the specified mount.
 * returns 0 if no weapon or invalid
 *
 * Hash: 0xAFFD0CCF31F469B8 | Since: 1207 | API-Set: unknown
 */
export declare function getFromMount(mount: number | IPed): number;
/**
 * Returns iSpinHash
 *
 * Hash: 0xF4601C1203B1A78D | Since: 1207 | API-Set: unknown
 */
export declare function getGunSpinningWeaponEmoteTrickTypeHash(emote: number | string, weaponEmoteTrickType: number): number;
/**
 * Returns whether the weapon has multiple ammo types or not.
 *
 * Hash: 0x58425FCA3D3A2D15 | Since: 1207 | API-Set: unknown
 */
export declare function getHasMultipleAmmoTypes(weaponHash: number | string): boolean;
/**
 * gets the last weapon given to ped , if you give a weapon_lasso to ped and then give another it returns the weapon_lasso other wise 0,p0 usually is 1 is unknown, it does not work for all weapons.
 *
 * Hash: 0x9F0E1892C7F228A8 | Since: 1207 | API-Set: unknown
 */
export declare function getLastGiven(): any;
/**
 * Returns "WNS_INVALID" if the weapon is invalid/doesn't exist.
 *
 * Hash: 0x89CF5FF3D363311E | Since: 1207 | API-Set: unknown
 */
export declare function getName(weaponHash: number | string): string;
/**
 * No comment provided
 *
 * Hash: 0x6D3AC61694A791C5 | Since: 1207 | API-Set: unknown
 */
export declare function getName2(weaponHash: number | string): string;
/**
 * No comment provided
 *
 * Hash: 0x7A56D66C78D8EF8E | Since: 1207 | API-Set: unknown
 */
export declare function getNameWithPermanentDegradation(weaponHash: number | string, permanentDegradationLevel: number): string;
/**
 * Detaches the weapon from the ped and actually removes the ped's weapon
 *
 * Hash: 0xC6A6789BB405D11C | Since: 1207 | API-Set: unknown
 */
export declare function getObjectFromPed(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x22084CA699219624 | Since: 1207 | API-Set: unknown
 */
export declare function getScale(weaponObject: number | IObject): number;
/**
 * No comment provided
 *
 * Hash: 0x4BF66F8878F67663 | Since: 1207 | API-Set: unknown
 */
export declare function getSoot(weaponObject: number | IObject): number;
/**
 * No comment provided
 *
 * Hash: 0x8EC44AE8DECFF841 | Since: 1207 | API-Set: unknown
 */
export declare function getStatId(weaponHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x7AA043F6C41D151E | Since: 1207 | API-Set: unknown
 */
export declare function getTypeFromAmmoType(ammoType: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x865F36299079FB75 | Since: 1207 | API-Set: unknown
 */
export declare function getUnlock(weaponHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x899A04AFCC725D04 | Since: 1207 | API-Set: unknown
 */
export declare function giveCollectionToPed(ped: number | IPed, weaponCollection: number | string): void;
/**
 * entity can be a ped or weapon object.
 *
 * Hash: 0x74C9090FDD1BB48E | Since: 1207 | API-Set: unknown
 */
export declare function giveComponentToEntity(entity: number | IEntity, componentHash: number | string, weaponHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x1A47699E8D533E8F | Since: 1207 | API-Set: unknown
 */
export declare function giveComponentToWeaponObject(ped: number | IPed, componentHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xDCF06D0CDFF68424 | Since: 1207 | API-Set: unknown
 */
export declare function hasEntityBeenDamagedBy(entity: number | IEntity, weaponName: number | string, weaponType: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9E2D5D6BC97A5F1E | Since: 1207 | API-Set: unknown
 */
export declare function hasEntityBeenDamagedByRecently(entity: number | IEntity, weaponHash: number | string, ms: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBBC67A6F965C688A | Since: 1207 | API-Set: unknown
 */
export declare function hasPedGotComponent(ped: number | IPed, componentHash: number | string, weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFF07CF465F48B830 | Since: 1207 | API-Set: unknown
 */
export declare function hasAssetLoaded(weaponHash: number | string): boolean;
/**
 * Unequip current weapon and set current weapon to WEAPON_UNARMED.
 * p0 usually 2 in R* scripts. Doesn't seem to have any effect if changed....
 * immediately: if true it will instantly switch to unarmed
 *
 * Hash: 0xFCCC886EDE3C63EC | Since: 1207 | API-Set: unknown
 */
export declare function hidePeds(ped: number | IPed, immediately: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x94A3C1B804D291EC | Since: 1207 | API-Set: unknown
 */
export declare function holsterPeds(ped: number | IPed, immediately: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xD2866CBA797E872E | Since: 1232 | API-Set: unknown
 */
export declare function isAmmoSilent(ammoHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7EFACC589B98C488 | Since: 1207 | API-Set: unknown
 */
export declare function isAmmoSilent2(ammoHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC570B881754DF609 | Since: 1207 | API-Set: unknown
 */
export declare function isAmmoTypeValidFor(weaponHash: number | string, ammoHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1F7977C9101F807F | Since: 1207 | API-Set: unknown
 */
export declare function isAmmoValid(ammoHash: number | string): boolean;
/**
 * Returns true if the ped has a sniper-type weapon equipped or stored in the specified attach point (slot).
 *
 * Hash: 0xD2209866B0CB72EA | Since: 1207 | API-Set: unknown
 */
export declare function isPedCarryingSniperAtAttachPoint(ped: number | IPed, attachPoint: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBDD9C235D8D1052E | Since: 1207 | API-Set: unknown
 */
export declare function isPedCurrentHolstered(ped: number | IPed): boolean;
/**
 * Returns whether the specified ped is holding a weapon with the given hash.
 * only these weapons below return true
 * WEAPON_BOW, WEAPON_KIT_METAL_DETECTOR, WEAPON_MELEE_CLEAVER, WEAPON_MELEE_DAVY_LANTERN, WEAPON_MELEE_HATCHET, WEAPON_MELEE_HATCHET_HUNTER, WEAPON_MELEE_KNIFE_JAWBONE, WEAPON_MELEE_LANTERN WEAPON_MELEE_TORCH, WEAPON_MOONSHINEJUG_MP, WEAPON_RIFLE_BOLTACTION, WEAPON_SHOTGUN_PUMP, WEAPON_THROWN_BOLAS, WEAPON_THROWN_MOLOTOV
 *
 * Hash: 0x07E1C35F0078C3F9 | Since: 1207 | API-Set: unknown
 */
export declare function isPedHolding(ped: number | IPed, weapon: number | string): boolean;
/**
 * Checks whether the given ped is currently taking damage from poisonous gas/fog volumes (e.g., toxic moonshine cloud, scripted poison fog).
 *
 * Hash: 0x0DE0944ECCB3DF5D | Since: 1232 | API-Set: unknown
 */
export declare function isPedTakingPoisonGasDamage(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8D50F43298AB9545 | Since: 1232 | API-Set: unknown
 */
export declare function isTargetPedConstrainedByPedUsingBolas(ped: number | IPed, targetPed: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC853230E76A152DF | Since: 1207 | API-Set: unknown
 */
export declare function isBinoculars(weaponHash: number | string): boolean;
/**
 * _IS_WEAPON_CLOSE_RANGE?
 * returns true when it's lassos , melee, thrown weapons (matchetes and unarmed return false)
 * all guns ,bows and animal weapons return false
 *
 * Hash: 0xEA522F991E120D45 | Since: 1207 | API-Set: unknown
 */
export declare function isCloseRange(weaponHash: number | string): boolean;
/**
 * Returns true if the ped is currently holstering or unholstering a weapon
 *
 * Hash: 0x2387D6E9C6B478AA | Since: 1207 | API-Set: unknown
 */
export declare function isHolsterStateChanging(ped: number | IPed): boolean;
/**
 * Returns true when the weapon passed is either a lasso, the camera or the binoculars
 * _IS_WEAPON_M* - _IS_WEAPON_P*
 *
 * Hash: 0x6ABAD7B0A854F8FB | Since: 1207 | API-Set: unknown
 */
export declare function isKit(weaponHash: number | string): boolean;
/**
 * Returns true when the weapon passed is either the fishingrod, a lasso, the camera or the binoculars
 * _IS_WEAPON_M* - _IS_WEAPON_P*
 *
 * Hash: 0x49E40483948AF062 | Since: 1207 | API-Set: unknown
 */
export declare function isKit2(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x792E3EF76C911959 | Since: 1207 | API-Set: unknown
 */
export declare function isKnife(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x79407D33328286C6 | Since: 1207 | API-Set: unknown
 */
export declare function isLantern(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6E4E1A82081EABED | Since: 1207 | API-Set: unknown
 */
export declare function isLasso(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD955FEE4B87AFA07 | Since: 1207 | API-Set: unknown
 */
export declare function isOneHanded(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5809DBCA0A37C82B | Since: 1207 | API-Set: unknown
 */
export declare function isSilent(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6AD66548840472E5 | Since: 1207 | API-Set: unknown
 */
export declare function isSniper(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x30E7C16B12DA8211 | Since: 1207 | API-Set: unknown
 */
export declare function isThrowable(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x506F1DE1BFC75304 | Since: 1207 | API-Set: unknown
 */
export declare function isTorch(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0556E9D2ECF39D01 | Since: 1207 | API-Set: unknown
 */
export declare function isTwoHanded(weaponHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDA5D3F2C6DD5B5D4 | Since: 1207 | API-Set: unknown
 */
export declare function listenProjectileHitEvents(listen: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x79E1E511FF7EFB13 | Since: 1207 | API-Set: unknown
 */
export declare function makePedReload(ped: number | IPed): any;
/**
 * No comment provided
 *
 * Hash: 0xDF4A3404D022ADDE | Since: 1207 | API-Set: unknown
 */
export declare function refillAmmoInClip(ped: number | IPed): [any, any];
/**
 * No comment provided
 *
 * Hash: 0x0A2AB7B7ABC055F4 | Since: 1207 | API-Set: unknown
 */
export declare function refillAmmoInCurrentPed(ped: number | IPed): any;
/**
 * Marks a created weapon object (e.g., a dynamite weapon object) as ignitable so it can be lit and detonate.
 * Use this after CreateWeaponObject for thrown explosives to enable fuse/ignition behavior.
 * weaponObject: Weapon object entity created via CreateWeaponObject (e.g., WEAPON_THROWN_DYNAMITE)
 *
 * Hash: 0x74C90AAACC1DD48F | Since: 1207 | API-Set: unknown
 */
export declare function registerObjectForIgnition(weaponObject: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x1B83C0DEEBCBB214 | Since: 1207 | API-Set: unknown
 */
export declare function removeAllPedAmmo(ped: number | IPed): void;
/**
 * removeReason must be REMOVE_REASON_USED, REMOVE_REASON_GIVEN, REMOVE_REASON_DROPPED or REMOVE_REASON_DEBUG, unless amount is -1
 *
 * removeReason: see REMOVE_WEAPON_FROM_PED
 *
 * Hash: 0xF4823C813CB8277D | Since: 1207 | API-Set: unknown
 */
export declare function removeAmmoFromPed(ped: number | IPed, weaponHash: number | string, amount: number, removeReason: number | string): void;
/**
 * removeReason must be REMOVE_REASON_USED, REMOVE_REASON_GIVEN, REMOVE_REASON_DROPPED or REMOVE_REASON_DEBUG, unless amount is -1
 *
 * removeReason: see REMOVE_WEAPON_FROM_PED
 *
 * Hash: 0xB6CFEC32E3742779 | Since: 1207 | API-Set: unknown
 */
export declare function removeAmmoFromPedByType(ped: number | IPed, ammoHash: number | string, amount: number, removeReason: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xC3896D03E2852236 | Since: 1207 | API-Set: unknown
 */
export declare function removeAsset(weaponHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x19F70C4D80494FF8 | Since: 1207 | API-Set: unknown
 */
export declare function removeComponentFromPed(ped: number | IPed, componentHash: number | string, weaponHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x51C3B71591811485 | Since: 1311 | API-Set: unknown
 */
export declare function removeFromPedByGuid(ped: number | IPed, removeReason: number | string): any;
/**
 * No comment provided
 *
 * Hash: 0x72D4CB5DB927009C | Since: 1207 | API-Set: unknown
 */
export declare function requestAsset(weaponHash: number | string): void;
/**
 * Appears to just send specified weapon to your horse holster without having to be close
 * However, the weapon is not visible on the horse holster, but you can reach the weapon on the weapon wheel
 *
 * Hash: 0xE9BD19F8121ADE3E | Since: 1207 | API-Set: unknown
 */
export declare function sendToInventory(ped: number | IPed, weaponHash: number | string): void;
/**
 * emote hashes: KIT_EMOTE_TWIRL_GUN, KIT_EMOTE_TWIRL_GUN_LEFT_HOLSTER, KIT_EMOTE_TWIRL_GUN_DUAL, 0 (to unequip)
 *
 * Hash: 0xCBCFFF805F1B4596 | Since: 1311 | API-Set: unknown
 */
export declare function setActiveGunSpinningEquipKitEmoteTwirl(ped: number | IPed, emote: number | string): void;
/**
 * spinHash can be -1, 0 to disable
 *
 * Hash: 0x01F661BB9C71B465 | Since: 1207 | API-Set: unknown
 */
export declare function setActiveGunSpinningKitEmoteTwirl(ped: number | IPed, weaponEmoteTrickType: number, spin: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x83B8D50EB9446BBA | Since: 1207 | API-Set: unknown
 */
export declare function setAllowDualWield(ped: number | IPed, allow: boolean): void;
/**
 * turretHash: WEAPON_TURRET_MAXIUM, WEAPON_TURRET_GATLING, WEAPON_TURRET_CANNON, WEAPON_TURRET_REVOLVING_CANNON
 *
 * Hash: 0xBDDA0C290C228159 | Since: 1207 | API-Set: unknown
 */
export declare function setAmmoInTurret(vehicle: number | IVehicle, turretHash: number | string, ammo: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCC9C4393523833E2 | Since: 1207 | API-Set: unknown
 */
export declare function setAmmoTypeForPed(ped: number | IPed, weaponHash: number | string, ammoHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xEBE46B501BC3FBCF | Since: 1207 | API-Set: unknown
 */
export declare function setAmmoTypeForPedInventory(ped: number | IPed, ammoHash: number | string): any;
/**
 * Sets the visual trail FX for arrows fired from a Bow by the given ped
 *
 * Hash: 0x2EBF70E1D8C06683 | Since: 1207 | API-Set: unknown
 */
export declare function setArrowTrailFx(ped: number | IPed, trailHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xBE711B14A159E84F | Since: 1207 | API-Set: unknown
 */
export declare function setForceAutoEquip(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x5230D3F6EE56CFE6 | Since: 1207 | API-Set: unknown
 */
export declare function setForceCurrentIntoCockedState(ped: number | IPed, attachPoint: number): void;
/**
 * _STOP_* - _TEST_*
 *
 * Hash: 0x408CF580C5E96D49 | Since: 1355 | API-Set: unknown
 */
export declare function setGunSpinningInventorySlotIdActivate(ped: number | IPed, emoteType: number): void;
/**
 * Stores longarms to your horse on dismount
 * Params: p2 = 0
 * SET_[I - M]*
 *
 * Hash: 0xB832F1A686B9B810 | Since: 1207 | API-Set: unknown
 */
export declare function setInstantlyStoreLongarmsOnDismount(ped: number | IPed, storeLongarms: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x4F806A6CFED89468 | Since: 1207 | API-Set: unknown
 */
export declare function setPedAllsVisibility(ped: number | IPed, visible: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xFBAA1E06B6BCA741 | Since: 1207 | API-Set: unknown
 */
export declare function setPedInfiniteAmmoClip(ped: number | IPed, toggle: boolean): void;
/**
 * attachPoint: see SET_CURRENT_PED_WEAPON
 *
 * Hash: 0x67E21ACC5C0C970C | Since: 1207 | API-Set: unknown
 */
export declare function setPedAttachPointVisibility(ped: number | IPed, attachPoint: number, visible: boolean): void;
/**
 * Holster the holded shoulder weapon. Precisions: 0 means with anim while 1 means direct holster
 *
 * Hash: 0x4820A6939D7CEF28 | Since: 1207 | API-Set: unknown
 */
export declare function setPedOnBack(ped: number | IPed, disableAnim: boolean): void;
/**
 * Sets the explosion or impact effect radius of a projectile entity (e.g., thrown dynamite or similar explosives).
 * Notes:
 * - Must be called before the projectile explodes; changing the radius afterward has no effect.
 * `- Commonly used after retrieving the projectile entity with MISC::GET_PROJECTILE_OF_PROJECTILE_TYPE_WITHIN_DISTANCE.`
 * - This does not trigger an explosion; it only defines how large the explosion’s area of effect will be.
 * `- Compared to MISC::ADD_EXPLOSION, which spawns a new explosion at a location, this modifies an existing projectile’s explosion properties.`
 *
 * Hash: 0x74C9080FDD1BB48F | Since: 1207 | API-Set: unknown
 */
export declare function setProjectileEffectRadius(projectile: number | IEntity, radius: number): void;
/**
 * Sets the remaining fuse time (in seconds) for an ignited explosive projectile entity, such as a thrown dynamite.
 * Must be called on an already ignited projectile; calling before ignition has no effect.
 *
 * Hash: 0x74C9080FDD1BB48E | Since: 1207 | API-Set: unknown
 */
export declare function setProjectileFuseTime(projectile: number | IEntity, fuseTime: number): void;
/**
 * No comment provided
 *
 * Hash: 0x56CB3B4305A4F7CE | Since: 1207 | API-Set: unknown
 */
export declare function setVehicleHeadingLimits(vehicle: number | IVehicle, minHeading: number, maxHeading: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBF5987E1CDE63501 | Since: 1207 | API-Set: unknown
 */
export declare function setVehicleHeadingLimits2(vehicle: number | IVehicle, minHeading: number, maxHeading: number): any;
/**
 * Enables/disables reload behavior for vehicle-mounted **cannons**.
 * When noReload is true, the cannon fires without requiring a reload; when false, it must reload after shots.
 * Supported vehicles only:**breach_cannon** and **hotchkiss_cannon**
 *
 * Hash: 0x8A779706DA5CA3DD | Since: 1207 | API-Set: unknown
 */
export declare function setVehicleReloadMode(vehicle: number | IVehicle, noReload: boolean): void;
/**
 * Related to weapon visual damage, not actual damage.
 *
 * Hash: 0xE22060121602493B | Since: 1207 | API-Set: unknown
 */
export declare function setDamage(weaponObject: number | IObject, level: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA7A57E89E965D839 | Since: 1207 | API-Set: unknown
 */
export declare function setDegradation(weaponObject: number | IObject, level: number): void;
/**
 * No comment provided
 *
 * Hash: 0x812CE61DEBCAB948 | Since: 1207 | API-Set: unknown
 */
export declare function setDirt(weaponObject: number | IObject, level: number): void;
/**
 * every other level will have the max value of (brokeLevel - threshold)
 *
 * Hash: 0xD4071EFC83794B2F | Since: 1207 | API-Set: unknown
 */
export declare function setLevelThreshold(weaponObject: number | IObject, threshold: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC3544AD0522E69B4 | Since: 1207 | API-Set: unknown
 */
export declare function setScale(weaponObject: number | IObject, scale: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA9EF4AD10BDDDB57 | Since: 1207 | API-Set: unknown
 */
export declare function setSoot(weaponObject: number | IObject, level: number): void;
