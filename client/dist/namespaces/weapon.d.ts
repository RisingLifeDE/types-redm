import { IPed } from '@risinglife/redm-shared';
/**
 * A getter for the accuracy spread of a weapon.
 *
 * Hash: 0x5343721
 */
export declare function getAccuracySpread(weaponHash: number | string): number;
/**
 * A getter for [SET_WEAPON_ANIMATION_OVERRIDE](#\_0x1055AC3A667F09D9).
 *
 * Hash: 0x63ED2E7
 */
export declare function getAnimationOverride(ped: number | IPed): number;
/**
 * A getter for `CWeaponAccuracyModifier` in a weapon component.
 *
 * Hash: 0xC693E278
 */
export declare function getComponentAccuracyModifier(componentHash: number | string): number;
/**
 * A getter for `CameraHash` in a weapon scope component.
 *
 * Hash: 0xACB7E68F
 */
export declare function getComponentCameraHash(componentHash: number | string): number;
/**
 * A getter for `ClipSize` in a weapon component.
 *
 * Hash: 0xE14CF665
 */
export declare function getComponentClipSize(componentHash: number | string): number;
/**
 * A getter for `CWeaponDamageModifier` in a weapon component.
 *
 * Hash: 0x4A0E3855
 */
export declare function getComponentDamageModifier(componentHash: number | string): number;
/**
 * A getter for `CWeaponFallOffModifier` damage modifier value in a weapon component.
 *
 * Hash: 0xE134FB8D
 */
export declare function getComponentRangeDamageModifier(componentHash: number | string): number;
/**
 * A getter for `CWeaponFallOffModifier` range modifier value in a weapon component.
 *
 * Hash: 0x2FD0BC1B
 */
export declare function getComponentRangeModifier(componentHash: number | string): number;
/**
 * A getter for `ReticuleHash` in a weapon scope component.
 *
 * Hash: 0xF9AB9297
 */
export declare function getComponentReticuleHash(componentHash: number | string): number;
/**
 * A getter for [\_SET_WEAPON_DAMAGE_MODIFIER](#\_0x4757F00BC6323CFE).
 *
 * Hash: 0xD979143
 */
export declare function getDamageModifier(weaponHash: number | string): number;
/**
 * A getter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x5E1AF5F
 */
export declare function getRecoilShakeAmplitude(weaponHash: number | string): number;
/**
 * Disables weapons aim blocking due to environment for local player.
 * For non-player peds [SET_PED_ENABLE_WEAPON_BLOCKING](#\_0x97A790315D3831FD) can be used.
 *
 * Hash: 0xDFD8F6DE
 */
export declare function setsNoAimBlocking(state: boolean): void;
/**
 * Disables the game's built-in auto-reloading.
 *
 * Hash: 0x311150E5
 */
export declare function setsNoAutoreload(state: boolean): void;
/**
 * Disables autoswapping to another weapon when the current weapon runs out of ammo.
 *
 * Hash: 0x2A7B50E
 */
export declare function setsNoAutoswap(state: boolean): void;
/**
 * A setter for the accuracy spread of a weapon.
 *
 * Hash: 0x598DD6AE
 */
export declare function setAccuracySpread(weaponHash: number | string, spread: number): void;
/**
 * A setter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x9864312F
 */
export declare function setRecoilShakeAmplitude(weaponHash: number | string, amplitude: number): void;
