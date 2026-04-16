/**
 * No comment provided
 *
 * Hash: 0x4EF23E04A0C8FF51 | Since: 1207
 */
export function getBountyOnPlayer() {
    return BountyGetBountyOnPlayer();
}
/**
 * No comment provided
 *
 * Hash: 0x8FAF4D262FABA99C | Since: 1207
 */
export function getCooldownCollection() {
    return BountyGetCooldownCollection();
}
/**
 * No comment provided
 *
 * Hash: 0x85E4D7B225A30ED1 | Since: 1207
 */
export function getLegendaryTarget() {
    return BountyGetLegendaryTarget(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB395A44A0C7CA615 | Since: 1207
 */
export function getWantedPosterSlot(p0, p1) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    return BountyGetWantedPosterSlot(p0, p1);
}
/**
 * No comment provided
 *
 * Hash: 0xFC81D7C7A151CFAA | Since: 1207
 */
export function requestBeginLegendaryMission() {
    return BountyRequestBeginLegendaryMission(0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0x48E4E23F1739E197 | Since: 1311
 */
export function requestBeginLegendaryMissionForPosse() {
    return BountyRequestBeginLegendaryMissionForPosse(0, 0);
}
/**
 * _BOUNTY_IS_* or _BOUNTY_REQUEST_*
 *
 * Hash: 0x27D3A0E1FE090A43 | Since: 1207
 */
export function _0x27D3A0E1FE090A43() {
    return Citizen.invokeNative('0x27D3A0E1FE090A43');
}
/**
 * No comment provided
 *
 * Hash: 0x81847C2134039BDC | Since: 1207
 */
export function _0x81847C2134039BDC() {
    return Citizen.invokeNative('0x81847C2134039BDC');
}
/**
 * _BOUNTY_C* or _BOUNTY_GET_*
 *
 * Hash: 0x86EC5F83867C4B70 | Since: 1436
 */
export function _0x86EC5F83867C4B70() {
    return Citizen.invokeNative('0x86EC5F83867C4B70');
}
/**
 * _BOUNTY_GET_*
 *
 * Hash: 0xD6A67E2FF373D0E3 | Since: 1355
 */
export function _0xD6A67E2FF373D0E3() {
    return Citizen.invokeNative('0xD6A67E2FF373D0E3', 0);
}
/**
 * _BOUNTY_GET_*
 *
 * Hash: 0xF8BCC5ECA33AC9C1 | Since: 1207
 */
export function _0xF8BCC5ECA33AC9C1() {
    return Citizen.invokeNative('0xF8BCC5ECA33AC9C1');
}
/**
 * No comment provided
 *
 * Hash: 0x2BA1BCC99826CDA2 | Since: 1207
 */
export function cancelLegendaryMission() {
    BountyCancelLegendaryMission();
}
/**
 * No comment provided
 *
 * Hash: 0x6A9DF0FCD0C87FF9 | Since: 1207
 */
export function cancelWantedPoster() {
    BountyCancelWantedPoster();
}
/**
 * No comment provided
 *
 * Hash: 0xA59D1997ECD99F0A | Since: 1207
 */
export function clearBeingBountyHunter() {
    BountyClearBeingBountyHunter();
}
/**
 * No comment provided
 *
 * Hash: 0x932DB3C05A7465D1 | Since: 1207
 */
export function clearBeingTarget() {
    BountyClearBeingTarget();
}
/**
 * No comment provided
 *
 * Hash: 0x03B61CD51097DE60 | Since: 1207
 */
export function isRequestPending() {
    return BountyIsRequestPending();
}
/**
 * No comment provided
 *
 * Hash: 0xB096547D61868254 | Since: 1207
 */
export function requestBecomeTargetOfCharacterBountyHunt() {
    return BountyRequestBecomeTargetOfCharacterBountyHunt();
}
/**
 * No comment provided
 *
 * Hash: 0xFFA13742E43507E3 | Since: 1207
 */
export function requestBeginWantedPoster() {
    return BountyRequestBeginWantedPoster(0);
}
/**
 * No comment provided
 *
 * Hash: 0x28717806D3BDD0D0 | Since: 1207
 */
export function requestBribeJailGuard() {
    return BountyRequestBribeJailGuard(0);
}
/**
 * No comment provided
 *
 * Hash: 0xA9C3B0F746375162 | Since: 1207
 */
export function requestClaimCharacterBounty() {
    return BountyRequestClaimCharacterBounty(0);
}
/**
 * No comment provided
 *
 * Hash: 0xA7309AC0DCF6D950 | Since: 1207
 */
export function requestCompleteLegendaryMission() {
    return BountyRequestCompleteLegendaryMission();
}
/**
 * No comment provided
 *
 * Hash: 0xFBD137BF0EC50FC9 | Since: 1207
 */
export function requestCompleteSplitWantedPoster() {
    return BountyRequestCompleteSplitWantedPoster();
}
/**
 * No comment provided
 *
 * Hash: 0x727AB6F008BB9F29 | Since: 1207
 */
export function requestCompleteWantedPoster() {
    return BountyRequestCompleteWantedPoster();
}
/**
 * No comment provided
 *
 * Hash: 0x12E981D53B07BF48 | Since: 1207
 */
export function requestEscapedCharacterBountyHunt() {
    return BountyRequestEscapedCharacterBountyHunt();
}
/**
 * No comment provided
 *
 * Hash: 0x537CE992BD2D7BCB | Since: 1207
 */
export function requestPayOffBounty() {
    return BountyRequestPayOffBounty();
}
/**
 * No comment provided
 *
 * Hash: 0x587BCEC31D64F382 | Since: 1232
 */
export function requestPayOffBountyEx(p1, costType) {
    if (typeof p1 === 'string')
        p1 = GetHashKey(p1);
    if (typeof costType === 'string')
        costType = GetHashKey(costType);
    return BountyRequestPayOffBountyEx(p1, costType);
}
/**
 * No comment provided
 *
 * Hash: 0x5B53CA0E2AC3FF45 | Since: 1207
 */
export function requestPosseLeaderClaimCharacterBounty() {
    return BountyRequestPosseLeaderClaimCharacterBounty(0);
}
/**
 * No comment provided
 *
 * Hash: 0x2D874BA20E8E1F20 | Since: 1207
 */
export function requestPosseLeaderEscapedCharacterBountyHunt() {
    return BountyRequestPosseLeaderEscapedCharacterBountyHunt();
}
/**
 * No comment provided
 *
 * Hash: 0x22D3A61CE053270C | Since: 1207
 */
export function requestPosseMemberClaimCharacterBountyShare() {
    return BountyRequestPosseMemberClaimCharacterBountyShare();
}
/**
 * No comment provided
 *
 * Hash: 0x8521C2E235558278 | Since: 1207
 */
export function requestPosseMemberEscapedCharacterBountyHunt() {
    return BountyRequestPosseMemberEscapedCharacterBountyHunt();
}
/**
 * crimeType: see _REPORT_CRIME
 *
 * Hash: 0x188B748861B5BA17 | Since: 1207
 */
export function requestSelfReportCrime(crimeType) {
    if (typeof crimeType === 'string')
        crimeType = GetHashKey(crimeType);
    return BountyRequestSelfReportCrime(crimeType, false);
}
/**
 * No comment provided
 *
 * Hash: 0xB462D69D406A2602 | Since: 1207
 */
export function requestSelfReportKilledByBountyHunter() {
    return BountyRequestSelfReportKilledByBountyHunter();
}
/**
 * No comment provided
 *
 * Hash: 0x3F73AED12A5EF0FF | Since: 1207
 */
export function requestServedFullJailSentence() {
    return BountyRequestServedFullJailSentence();
}
