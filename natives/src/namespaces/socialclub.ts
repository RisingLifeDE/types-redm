import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x89D9BDE7334B110F | Since: 1207
 */
export function scCommunityEventGetDisplayName(): [boolean, string] {
    return ScCommunityEventGetDisplayName();
}

/**
 * No comment provided
 * 
 * Hash: 0x11EA52CAD1B55910 | Since: 1207
 */
export function scCommunityEventGetDisplayNameById(): [boolean, string] {
    return ScCommunityEventGetDisplayNameById(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x85EA0BEC7B1F7622 | Since: 1207
 */
export function scCommunityEventGetDisplayNameForType(): [boolean, string] {
    return ScCommunityEventGetDisplayNameForType(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD635DF6BAA5A6017 | Since: 1207
 */
export function scCommunityEventGetEventId(): number {
    return ScCommunityEventGetEventId();
}

/**
 * No comment provided
 * 
 * Hash: 0x03C03ABBABBEF752 | Since: 1207
 */
export function scCommunityEventGetEventIdForType(): number {
    return ScCommunityEventGetEventIdForType(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x060BBAD634C2B44B | Since: 1207
 */
export function scCommunityEventGetExtraDataFloat(): [boolean, number] {
    return ScCommunityEventGetExtraDataFloat(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x91C9E2A0F9DD6DD4 | Since: 1207
 */
export function scCommunityEventGetExtraDataFloatById(): [boolean, number] {
    return ScCommunityEventGetExtraDataFloatById(0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1BDB56DB258F052D | Since: 1207
 */
export function scCommunityEventGetExtraDataFloatForType(): [boolean, number] {
    return ScCommunityEventGetExtraDataFloatForType(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xB4411D4D6B81438E | Since: 1207
 */
export function scCommunityEventGetExtraDataInt(): [boolean, number] {
    return ScCommunityEventGetExtraDataInt(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x7C981DE05A7403A0 | Since: 1207
 */
export function scCommunityEventGetExtraDataIntById(): [boolean, number] {
    return ScCommunityEventGetExtraDataIntById(0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x3519CC3525319A96 | Since: 1207
 */
export function scCommunityEventGetExtraDataIntForType(): [boolean, number] {
    return ScCommunityEventGetExtraDataIntForType(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x9F6DCD0C939C71E9 | Since: 1207
 */
export function scCommunityEventGetExtraDataString(): [boolean, string] {
    return ScCommunityEventGetExtraDataString(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x049D2196D9D11184 | Since: 1207
 */
export function scCommunityEventGetExtraDataStringById(): [boolean, string] {
    return ScCommunityEventGetExtraDataStringById(0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC8FC3B2432E8229D | Since: 1207
 */
export function scCommunityEventGetExtraDataStringForType(): [boolean, string] {
    return ScCommunityEventGetExtraDataStringForType(undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCBF743C984695CF3 | Since: 1207
 */
export function scCommunityEventIsActive(): boolean {
    return ScCommunityEventIsActive();
}

/**
 * No comment provided
 * 
 * Hash: 0x62B384FEFDE06817 | Since: 1207
 */
export function scCommunityEventIsActiveById(): boolean {
    return ScCommunityEventIsActiveById(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x09937EB0CEBC2F9F | Since: 1207
 */
export function scCommunityEventIsActiveForType(): boolean {
    return ScCommunityEventIsActiveForType(undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x74CF39E030A382C4 | Since: 1207
 */
export function scInboxGetMessageIsReadAtIndex(msgIndex: number): boolean {
    return ScInboxGetMessageIsReadAtIndex(msgIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xFF92537C4DDC1241 | Since: 1207
 */
export function scInboxGetMessageTypeAtIndex(msgIndex: number): number {
    return ScInboxGetMessageTypeAtIndex(msgIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0x8EF0F633280C0663 | Since: 1207
 */
export function scInboxGetTotalNumMessages(): number {
    return ScInboxGetTotalNumMessages();
}

/**
 * No comment provided
 * 
 * Hash: 0x95BB39C4DA99F348 | Since: 1207
 */
export function scInboxMessageGetDataInt(): [boolean, string, number] {
    return ScInboxMessageGetDataInt(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x66F77FD58506FF6B | Since: 1207
 */
export function scInboxMessageGetDataString(): [boolean, string, string] {
    return ScInboxMessageGetDataString(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x176D077685CD83E4 | Since: 1207
 */
export function scInboxMessageGetRawTypeAtIndex(): string {
    return ScInboxMessageGetRawTypeAtIndex(0);
}

/**
 * No comment provided
 * 
 * Hash: 0x63CAC501FFF66DC4 | Since: 1207
 */
export function scInboxSetMessageAsReadAtIndex(msgIndex: number): boolean {
    return ScInboxSetMessageAsReadAtIndex(msgIndex);
}

/**
 * No comment provided
 * 
 * Hash: 0xA31DAFCDC33775E9 | Since: 1207
 */
export function scPresenceAttrSetFloat(attrHash: number | string, value: number): boolean {
    if (typeof attrHash === 'string') attrHash = GetHashKey(attrHash)
    return ScPresenceAttrSetFloat(attrHash, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x00000000467F4CAA | Since: 1207
 */
export function scPresenceAttrSetFloatEx(value: number): [boolean, string] {
    return ScPresenceAttrSetFloatEx(value, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x0000000085488C49 | Since: 1207
 */
export function scPresenceAttrSetIntEx(value: number): [boolean, string] {
    return ScPresenceAttrSetIntEx(value, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x00000000EB2D93B3 | Since: 1207
 */
export function scPresenceAttrSetStringEx(attrName: string, value: string): boolean {
    return ScPresenceAttrSetStringEx(attrName, value, false);
}

/**
 * Starts a task to check an entered string for profanity on the ROS/Social Club services.
 * 
 * Hash: 0x9C74AC9D87B3FFF4 | Since: 1207
 */
export function scProfanityCheckString(): [boolean, string, number] {
    return ScProfanityCheckString();
}

/**
 * No comment provided
 * 
 * Hash: 0x3A10BCD0C8AA0B82 | Since: 1207
 */
export function scProfanityGetCheckIsPending(token: number): boolean {
    return ScProfanityGetCheckIsPending(token);
}

/**
 * No comment provided
 * 
 * Hash: 0x08C8052AF40C4247 | Since: 1207
 */
export function scProfanityGetCheckIsValid(token: number): boolean {
    return ScProfanityGetCheckIsValid(token);
}

/**
 * No comment provided
 * 
 * Hash: 0xF302973BB8BE70E6 | Since: 1207
 */
export function scProfanityGetStringPassed(token: number): boolean {
    return ScProfanityGetStringPassed(token);
}

/**
 * No comment provided
 * 
 * Hash: 0x0CF3BFB99EBBE5B1 | Since: 1207
 */
export function scProfanityGetStringStatus(token: number): number {
    return ScProfanityGetStringStatus(token);
}

