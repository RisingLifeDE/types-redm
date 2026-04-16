/**
 * No comment provided
 *
 * Hash: 0x89D9BDE7334B110F | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventGetDisplayName() {
    return ScCommunityEventGetDisplayName();
}
/**
 * No comment provided
 *
 * Hash: 0x11EA52CAD1B55910 | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventGetDisplayNameById() {
    return ScCommunityEventGetDisplayNameById(0);
}
/**
 * No comment provided
 *
 * Hash: 0x85EA0BEC7B1F7622 | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventGetDisplayNameForType() {
    return ScCommunityEventGetDisplayNameForType(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xD635DF6BAA5A6017 | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventGetEventId() {
    return ScCommunityEventGetEventId();
}
/**
 * No comment provided
 *
 * Hash: 0x03C03ABBABBEF752 | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventGetEventIdForType() {
    return ScCommunityEventGetEventIdForType(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x060BBAD634C2B44B | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataFloat() {
    return ScCommunityEventGetExtraDataFloat(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x91C9E2A0F9DD6DD4 | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataFloatById() {
    return ScCommunityEventGetExtraDataFloatById(0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1BDB56DB258F052D | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataFloatForType() {
    return ScCommunityEventGetExtraDataFloatForType(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xB4411D4D6B81438E | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataInt() {
    return ScCommunityEventGetExtraDataInt(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7C981DE05A7403A0 | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataIntById() {
    return ScCommunityEventGetExtraDataIntById(0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x3519CC3525319A96 | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataIntForType() {
    return ScCommunityEventGetExtraDataIntForType(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9F6DCD0C939C71E9 | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataString() {
    return ScCommunityEventGetExtraDataString(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x049D2196D9D11184 | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataStringById() {
    return ScCommunityEventGetExtraDataStringById(0, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xC8FC3B2432E8229D | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventGetExtraDataStringForType() {
    return ScCommunityEventGetExtraDataStringForType(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCBF743C984695CF3 | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventIsActive() {
    return ScCommunityEventIsActive();
}
/**
 * No comment provided
 *
 * Hash: 0x62B384FEFDE06817 | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventIsActiveById() {
    return ScCommunityEventIsActiveById(0);
}
/**
 * No comment provided
 *
 * Hash: 0x09937EB0CEBC2F9F | Since: 1207 | API-Set: unknown
 */
export function scCommunityEventIsActiveForType() {
    return ScCommunityEventIsActiveForType(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x74CF39E030A382C4 | Since: 1207 | API-Set: unknown
 */
export function scInboxGetMessageIsReadAtIndex(msgIndex) {
    return ScInboxGetMessageIsReadAtIndex(msgIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xFF92537C4DDC1241 | Since: 1207 | API-Set: unknown
 */
export function scInboxGetMessageTypeAtIndex(msgIndex) {
    return ScInboxGetMessageTypeAtIndex(msgIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x8EF0F633280C0663 | Since: 1207 | API-Set: unknown
 */
export function scInboxGetTotalNumMessages() {
    return ScInboxGetTotalNumMessages();
}
/**
 * No comment provided
 *
 * Hash: 0x95BB39C4DA99F348 | Since: 1207 | API-Set: unknown
 */
export function scInboxMessageGetDataInt() {
    return ScInboxMessageGetDataInt(0);
}
/**
 * No comment provided
 *
 * Hash: 0x66F77FD58506FF6B | Since: 1207 | API-Set: unknown
 */
export function scInboxMessageGetDataString() {
    return ScInboxMessageGetDataString(0);
}
/**
 * No comment provided
 *
 * Hash: 0x176D077685CD83E4 | Since: 1207 | API-Set: unknown
 */
export function scInboxMessageGetRawTypeAtIndex() {
    return ScInboxMessageGetRawTypeAtIndex(0);
}
/**
 * No comment provided
 *
 * Hash: 0x63CAC501FFF66DC4 | Since: 1207 | API-Set: unknown
 */
export function scInboxSetMessageAsReadAtIndex(msgIndex) {
    return ScInboxSetMessageAsReadAtIndex(msgIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xA31DAFCDC33775E9 | Since: 1207 | API-Set: unknown
 */
export function scPresenceAttrSetFloat(attrHash, value) {
    if (typeof attrHash === 'string')
        attrHash = GetHashKey(attrHash);
    return ScPresenceAttrSetFloat(attrHash, value);
}
/**
 * No comment provided
 *
 * Hash: 0x00000000467F4CAA | Since: 1207 | API-Set: unknown
 */
export function scPresenceAttrSetFloatEx(value) {
    return ScPresenceAttrSetFloatEx(value, false);
}
/**
 * No comment provided
 *
 * Hash: 0x0000000085488C49 | Since: 1207 | API-Set: unknown
 */
export function scPresenceAttrSetIntEx(value) {
    return ScPresenceAttrSetIntEx(value, false);
}
/**
 * No comment provided
 *
 * Hash: 0x00000000EB2D93B3 | Since: 1207 | API-Set: unknown
 */
export function scPresenceAttrSetStringEx(attrName, value) {
    return ScPresenceAttrSetStringEx(attrName, value, false);
}
/**
 * Starts a task to check an entered string for profanity on the ROS/Social Club services.
 *
 * Hash: 0x9C74AC9D87B3FFF4 | Since: 1207 | API-Set: unknown
 */
export function scProfanityCheckString() {
    return ScProfanityCheckString();
}
/**
 * No comment provided
 *
 * Hash: 0x3A10BCD0C8AA0B82 | Since: 1207 | API-Set: unknown
 */
export function scProfanityGetCheckIsPending(token) {
    return ScProfanityGetCheckIsPending(token);
}
/**
 * No comment provided
 *
 * Hash: 0x08C8052AF40C4247 | Since: 1207 | API-Set: unknown
 */
export function scProfanityGetCheckIsValid(token) {
    return ScProfanityGetCheckIsValid(token);
}
/**
 * No comment provided
 *
 * Hash: 0xF302973BB8BE70E6 | Since: 1207 | API-Set: unknown
 */
export function scProfanityGetStringPassed(token) {
    return ScProfanityGetStringPassed(token);
}
/**
 * No comment provided
 *
 * Hash: 0x0CF3BFB99EBBE5B1 | Since: 1207 | API-Set: unknown
 */
export function scProfanityGetStringStatus(token) {
    return ScProfanityGetStringStatus(token);
}
