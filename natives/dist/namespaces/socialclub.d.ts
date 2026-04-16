/**
 * No comment provided
 *
 * Hash: 0x89D9BDE7334B110F | Since: 1207
 */
export declare function scCommunityEventGetDisplayName(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x11EA52CAD1B55910 | Since: 1207
 */
export declare function scCommunityEventGetDisplayNameById(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x85EA0BEC7B1F7622 | Since: 1207
 */
export declare function scCommunityEventGetDisplayNameForType(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xD635DF6BAA5A6017 | Since: 1207
 */
export declare function scCommunityEventGetEventId(): number;
/**
 * No comment provided
 *
 * Hash: 0x03C03ABBABBEF752 | Since: 1207
 */
export declare function scCommunityEventGetEventIdForType(): number;
/**
 * No comment provided
 *
 * Hash: 0x060BBAD634C2B44B | Since: 1207
 */
export declare function scCommunityEventGetExtraDataFloat(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x91C9E2A0F9DD6DD4 | Since: 1207
 */
export declare function scCommunityEventGetExtraDataFloatById(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x1BDB56DB258F052D | Since: 1207
 */
export declare function scCommunityEventGetExtraDataFloatForType(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xB4411D4D6B81438E | Since: 1207
 */
export declare function scCommunityEventGetExtraDataInt(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x7C981DE05A7403A0 | Since: 1207
 */
export declare function scCommunityEventGetExtraDataIntById(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x3519CC3525319A96 | Since: 1207
 */
export declare function scCommunityEventGetExtraDataIntForType(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x9F6DCD0C939C71E9 | Since: 1207
 */
export declare function scCommunityEventGetExtraDataString(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x049D2196D9D11184 | Since: 1207
 */
export declare function scCommunityEventGetExtraDataStringById(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xC8FC3B2432E8229D | Since: 1207
 */
export declare function scCommunityEventGetExtraDataStringForType(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xCBF743C984695CF3 | Since: 1207
 */
export declare function scCommunityEventIsActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x62B384FEFDE06817 | Since: 1207
 */
export declare function scCommunityEventIsActiveById(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x09937EB0CEBC2F9F | Since: 1207
 */
export declare function scCommunityEventIsActiveForType(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x74CF39E030A382C4 | Since: 1207
 */
export declare function scInboxGetMessageIsReadAtIndex(msgIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFF92537C4DDC1241 | Since: 1207
 */
export declare function scInboxGetMessageTypeAtIndex(msgIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x8EF0F633280C0663 | Since: 1207
 */
export declare function scInboxGetTotalNumMessages(): number;
/**
 * No comment provided
 *
 * Hash: 0x95BB39C4DA99F348 | Since: 1207
 */
export declare function scInboxMessageGetDataInt(): [boolean, string, number];
/**
 * No comment provided
 *
 * Hash: 0x66F77FD58506FF6B | Since: 1207
 */
export declare function scInboxMessageGetDataString(): [boolean, string, string];
/**
 * No comment provided
 *
 * Hash: 0x176D077685CD83E4 | Since: 1207
 */
export declare function scInboxMessageGetRawTypeAtIndex(): string;
/**
 * No comment provided
 *
 * Hash: 0x63CAC501FFF66DC4 | Since: 1207
 */
export declare function scInboxSetMessageAsReadAtIndex(msgIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA31DAFCDC33775E9 | Since: 1207
 */
export declare function scPresenceAttrSetFloat(attrHash: number | string, value: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x00000000467F4CAA | Since: 1207
 */
export declare function scPresenceAttrSetFloatEx(value: number): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x0000000085488C49 | Since: 1207
 */
export declare function scPresenceAttrSetIntEx(value: number): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x00000000EB2D93B3 | Since: 1207
 */
export declare function scPresenceAttrSetStringEx(attrName: string, value: string): boolean;
/**
 * Starts a task to check an entered string for profanity on the ROS/Social Club services.
 *
 * Hash: 0x9C74AC9D87B3FFF4 | Since: 1207
 */
export declare function scProfanityCheckString(): [boolean, string, number];
/**
 * No comment provided
 *
 * Hash: 0x3A10BCD0C8AA0B82 | Since: 1207
 */
export declare function scProfanityGetCheckIsPending(token: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x08C8052AF40C4247 | Since: 1207
 */
export declare function scProfanityGetCheckIsValid(token: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF302973BB8BE70E6 | Since: 1207
 */
export declare function scProfanityGetStringPassed(token: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0CF3BFB99EBBE5B1 | Since: 1207
 */
export declare function scProfanityGetStringStatus(token: number): number;
