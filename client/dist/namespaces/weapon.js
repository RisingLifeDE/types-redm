import { IPed } from '@risinglife/redm-shared';
/**
 * A getter for the accuracy spread of a weapon.
 *
 * Hash: 0x5343721
 */
export function getAccuracySpread(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeaponAccuracySpread(weaponHash);
}
/**
 * A getter for [SET_WEAPON_ANIMATION_OVERRIDE](#\_0x1055AC3A667F09D9).
 *
 * Hash: 0x63ED2E7
 */
export function getAnimationOverride(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetWeaponAnimationOverride(_ped);
}
/**
 * A getter for `CWeaponAccuracyModifier` in a weapon component.
 *
 * Hash: 0xC693E278
 */
export function getComponentAccuracyModifier(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentAccuracyModifier(componentHash);
}
/**
 * A getter for `CameraHash` in a weapon scope component.
 *
 * Hash: 0xACB7E68F
 */
export function getComponentCameraHash(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentCameraHash(componentHash);
}
/**
 * A getter for `ClipSize` in a weapon component.
 *
 * Hash: 0xE14CF665
 */
export function getComponentClipSize(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentClipSize(componentHash);
}
/**
 * A getter for `CWeaponDamageModifier` in a weapon component.
 *
 * Hash: 0x4A0E3855
 */
export function getComponentDamageModifier(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentDamageModifier(componentHash);
}
/**
 * A getter for `CWeaponFallOffModifier` damage modifier value in a weapon component.
 *
 * Hash: 0xE134FB8D
 */
export function getComponentRangeDamageModifier(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentRangeDamageModifier(componentHash);
}
/**
 * A getter for `CWeaponFallOffModifier` range modifier value in a weapon component.
 *
 * Hash: 0x2FD0BC1B
 */
export function getComponentRangeModifier(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentRangeModifier(componentHash);
}
/**
 * A getter for `ReticuleHash` in a weapon scope component.
 *
 * Hash: 0xF9AB9297
 */
export function getComponentReticuleHash(componentHash) {
    if (typeof componentHash === 'string')
        componentHash = GetHashKey(componentHash);
    return GetWeaponComponentReticuleHash(componentHash);
}
/**
 * A getter for [\_SET_WEAPON_DAMAGE_MODIFIER](#\_0x4757F00BC6323CFE).
 *
 * Hash: 0xD979143
 */
export function getDamageModifier(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeaponDamageModifier(weaponHash);
}
/**
 * A getter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x5E1AF5F
 */
export function getRecoilShakeAmplitude(weaponHash) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    return GetWeaponRecoilShakeAmplitude(weaponHash);
}
/**
 * Disables weapons aim blocking due to environment for local player.
 * For non-player peds [SET_PED_ENABLE_WEAPON_BLOCKING](#\_0x97A790315D3831FD) can be used.
 *
 * Hash: 0xDFD8F6DE
 */
export function setsNoAimBlocking(state) {
    SetWeaponsNoAimBlocking(state);
}
/**
 * Disables the game's built-in auto-reloading.
 *
 * Hash: 0x311150E5
 */
export function setsNoAutoreload(state) {
    SetWeaponsNoAutoreload(state);
}
/**
 * Disables autoswapping to another weapon when the current weapon runs out of ammo.
 *
 * Hash: 0x2A7B50E
 */
export function setsNoAutoswap(state) {
    SetWeaponsNoAutoswap(state);
}
/**
 * A setter for the accuracy spread of a weapon.
 *
 * Hash: 0x598DD6AE
 */
export function setAccuracySpread(weaponHash, spread) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetWeaponAccuracySpread(weaponHash, spread);
}
/**
 * A setter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x9864312F
 */
export function setRecoilShakeAmplitude(weaponHash, amplitude) {
    if (typeof weaponHash === 'string')
        weaponHash = GetHashKey(weaponHash);
    SetWeaponRecoilShakeAmplitude(weaponHash, amplitude);
}
