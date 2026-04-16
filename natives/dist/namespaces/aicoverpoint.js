import { IPed } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x4972A022AE6DAFA1 | Since: 1207
 */
export function taskEnterCover(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskEnterCover(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x2BC4A6D92D140112 | Since: 1207
 */
export function taskExitCover(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    TaskExitCover(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x3C7A9C2C953128FE | Since: 1207
 */
export function _0x3C7A9C2C953128FE(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x3C7A9C2C953128FE', _ped);
}
/**
 * No comment provided
 *
 * Hash: 0x53E4D0C079CA6855 | Since: 1207
 */
export function _0x53E4D0C079CA6855(handle) {
    return Citizen.invokeNative('0x53E4D0C079CA6855', handle);
}
/**
 * No comment provided
 *
 * Hash: 0xEBA51A294C73292E | Since: 1207
 */
export function _0xEBA51A294C73292E() {
    return Citizen.invokeNative('0xEBA51A294C73292E');
}
/**
 * activates a cover layer, these seem to be for specifc scenes in SP for example where a table is flipped using "grand_korr_poker_table_flipped" see more in levels\rdr3\coverlayers.rpf
 *
 * Hash: 0x64340DC208D671D5 | Since: 1207
 */
export function activateCoverLayer() {
    return Citizen.invokeNative('0x64340DC208D671D5');
}
/**
 * args: f_0 = Volume Handle
 * f_1 = integer (?) (only the number 1 is ever used here, or is not used at all)
 * f_2 = integer (-1 to 32 in R* Scripts)
 *
 * Hash: 0x733077295AB51304 | Since: 1207
 */
export function addCoverBlockingArea() {
    return Citizen.invokeNative('0x733077295AB51304');
}
/**
 * No comment provided
 *
 * Hash: 0x975BD6351648935F | Since: 1207
 */
export function addScriptedCoverPoint() {
    return AddScriptedCoverPoint();
}
/**
 * No comment provided
 *
 * Hash: 0x8CBE916CFC64AD5C | Since: 1207
 */
export function areLoadCoverAnimsLoaded(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return AreLoadCoverAnimsLoaded(_ped);
}
/**
 * deactivates a cover layer activated with 0x64340DC208D671D5 coverLayer: see levels_0/levels/rdr3/coverlayers
 *
 * Hash: 0x7A1FDCF35EAA140F | Since: 1207
 */
export function deactivateCoverLayer() {
    return Citizen.invokeNative('0x7A1FDCF35EAA140F');
}
/**
 * No comment provided
 *
 * Hash: 0xC276FE69DDA22BAD | Since: 1207
 */
export function doesCoverPointExist(handle) {
    return DoesCoverPointExist(handle);
}
/**
 * 1 = In cover while crouched
 * 2 = In cover while standing
 * 3 = Not in cover
 *
 * Hash: 0x5F5B1B7E8E8F94C6 | Since: 1207
 */
export function getCoverPointStateFromPed(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetCoverPointStateFromPed(_ped);
}
/**
 * returns the active transition state of a cover point for about 2 seconds unless its peeking
 * 1 - transition from pointing a gun to not pointing a gun
 * 2 - transition to pointing a gun
 * 3 - broke the window
 * 4 - when opening a door while in cover (a prompt will show and once pressed state is changed to 4)
 * 5 - cover transition like from one corner of a house to the other corner
 * 6 - changing cover to cover like crossing from one side of the door to the other
 * 7 - when the ped is facing foward with the camera, might be to detect when going from left to right
 * 8 - when the ped is peeking through a door window etc (this will return 8 while is in peek)
 * 9 - when a ped is aiming in crouch and enters cover (it doesnt always trigger)
 * 10 - enters cover
 * 12 - leaves cover
 * 16 - changed to crouch or to standing up position
 *
 * Hash: 0x957D7E750216D74B | Since: 1207
 */
export function getPedCoverPointTransitionState(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x957D7E750216D74B', _ped);
}
/**
 * returns the ped that is using this cover point created by ADD_COVER_POINT and adding the ped using tasks like `TASK_PUT_PED_DIRECTLY_(*`
 *
 * Hash: 0x140B3CB1D424A945 | Since: 1207
 */
export function getPedFromCoverPoint(coverpoint) {
    return Citizen.invokeNative('0x140B3CB1D424A945', coverpoint);
}
/**
 * Makes ped flinch (if in cover) like they have been shot at
 *
 * Hash: 0x2A31D13C5F021D0D | Since: 1207
 */
export function requestFlinchCoverAnim(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    RequestFlinchCoverAnim(_ped);
}
/**
 * Stops running cover anims and releases them
 * _STOP_RENDERING_* - _STOP_SCRIPTED*
 *
 * Hash: 0x1A7A802B2301EDC0 | Since: 1207
 */
export function stopRunningCoverAnims(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    StopRunningCoverAnims(_ped);
}
/**
 * No comment provided
 *
 * Hash: 0x89783FDDF079C88D | Since: 1207
 */
export function taskAiSeekCoverToCoverPoint() {
    return TaskAiSeekCoverToCoverPoint();
}
