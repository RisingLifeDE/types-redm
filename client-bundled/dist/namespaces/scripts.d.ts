/**
 * No comment provided
 *
 * Hash: 0xAC8FAB22A914AE34 | Since: 1207 | API-Set: unknown
 */
export declare function awardsGetResultItem(awardHash: number | string, itemIndex: number): [boolean, any, any];
/**
 * No comment provided
 *
 * Hash: 0xBC2C927F5C264243 | Since: 1207 | API-Set: unknown
 */
export declare function bailToLandingPage(bailCode: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE98204D3C25AE14C | Since: 1207 | API-Set: unknown
 */
export declare function bailWithPassThroughParams(params: string): void;
/**
 * No comment provided
 *
 * Hash: 0x4AE1DFF337A86FDE | Since: 1207 | API-Set: unknown
 */
export declare function bgDoesLaunchParamExist(scriptIndex: number): boolean;
/**
 * Deletes the given context from the background scripts context map.
 *
 * Hash: 0x3ABF7BA1C3E2C8CF | Since: 1207 | API-Set: unknown
 */
export declare function bgEndContext(contextName: string): void;
/**
 * Hashed version of BG_END_CONTEXT
 *
 * Hash: 0x6D1431744182CDE8 | Since: 1207 | API-Set: unknown
 */
export declare function bgEndContextHash(contextHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x55C40B7592BAD213 | Since: 1207 | API-Set: unknown
 */
export declare function bgGetLaunchParamValue(scriptIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0x829CD22E043A2577 | Since: 1207 | API-Set: unknown
 */
export declare function bgGetScriptIdFromNameHash(p0: number | string): number;
/**
 * Returns true if GtaThread+0x77C is equal to 1.
 *
 * Old name: _BG_EXITED_BECAUSE_BACKGROUND_THREAD_STOPPED
 *
 * Hash: 0x2238EC3EC631AB1F | Since: 1207 | API-Set: unknown
 */
export declare function bgIsExitflagSet(): boolean;
/**
 * Sets bit 0 in GtaThread+0x784
 *
 * Hash: 0x4858148E3B8A75D0 | Since: 1207 | API-Set: unknown
 */
export declare function bgSetExitflagResponse(): void;
/**
 * Inserts the given context into the background scripts context map.
 *
 * Hash: 0x49BA5678BA040CA7 | Since: 1207 | API-Set: unknown
 */
export declare function bgStartContext(contextName: string): void;
/**
 * Hashed version of BG_START_CONTEXT
 *
 * Hash: 0x2EB67D564DCC09D5 | Since: 1207 | API-Set: unknown
 */
export declare function bgStartContextHash(contextHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x2F050A3FF8738245 | Since: 1207 | API-Set: unknown
 */
export declare function countParticipantBits(): [number, any];
/**
 * No comment provided
 *
 * Hash: 0x462C687BEA254BD9 | Since: 1207 | API-Set: unknown
 */
export declare function countPlayerBits(): [number, any];
/**
 * No comment provided
 *
 * Hash: 0x552B171E3F69E5AE | Since: 1207 | API-Set: unknown
 */
export declare function doesScriptExist(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xA34E89749F628284 | Since: 1207 | API-Set: unknown
 */
export declare function doesScriptWithNameHashExist(scriptHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFF975BC4435A0FA3 | Since: 1207 | API-Set: unknown
 */
export declare function doesThreadExist(threadId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFA3B530A5CC693D5 | Since: 1207 | API-Set: unknown
 */
export declare function getBlockOfPlayerBits(): [number, any];
/**
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_SCRIPT_ERRORS (CEventGroupScriptErrors)
 *
 * Returns event name hash: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 *
 * Hash: 0xA85E614430EFF816 | Since: 1207 | API-Set: unknown
 */
export declare function getEventAtIndex(eventGroup: number, eventIndex: number): number;
/**
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_SCRIPT_ERRORS (CEventGroupScriptErrors)
 *
 * Note: eventDataSize is NOT the size in bytes, it is the size determined by the SIZE_OF operator (RAGE Script operator, not C/C++ sizeof). That is, the size in bytes divided by 8 (script variables are always 8-byte aligned!).
 *
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/EVENTS
 *
 * Hash: 0x57EC5FA4D4D6AFCA | Since: 1207 | API-Set: unknown
 */
export declare function getEventData(eventGroup: number, eventIndex: number, eventDataSize: number): [boolean, any];
/**
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_SCRIPT_ERRORS (CEventGroupScriptErrors)
 *
 * Hash: 0xC9F59C0A710ECD34 | Since: 1207 | API-Set: unknown
 */
export declare function getEventExists(eventGroup: number, eventType: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBC2C927F5C264960 | Since: 1207 | API-Set: unknown
 */
export declare function getHashOfThisScriptName(): number;
/**
 * No comment provided
 *
 * Hash: 0x55525C346BEF6960 | Since: 1207 | API-Set: unknown
 */
export declare function getIdOfThisThread(): number;
/**
 * No comment provided
 *
 * Hash: 0x323DAF00687E0F28 | Since: 1207 | API-Set: unknown
 */
export declare function getNoLoadingScreen(): boolean;
/**
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_ERRORS (CEventGroupScriptErrors)
 *
 * Hash: 0x5CE8DE5909565748 | Since: 1207 | API-Set: unknown
 */
export declare function getNumberOfEvents(eventGroup: number): number;
/**
 * Gets the number of instances of the specified script is currently running.
 *
 * Actually returns numRefs - 1.
 * if (program)
 * `v3 = rage::scrProgram::GetNumRefs(program) - 1;`
 * return v3;
 *
 * Old name: _GET_NUMBER_OF_REFERENCES_OF_SCRIPT_WITH_NAME_HASH
 *
 * Hash: 0x8E34C953364A76DD | Since: 1207 | API-Set: unknown
 */
export declare function getNumberOfThreadsRunningTheScriptWithThisHash(scriptHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xD92FA81B64920E85 | Since: 1207 | API-Set: unknown
 */
export declare function getThreadExistenceDetails(threadId: number): [boolean, boolean];
/**
 * Returns if a script has been loaded into the game. Used to see if a script was loaded after requesting.
 *
 * Hash: 0xE97BD36574F8B0A6 | Since: 1207 | API-Set: unknown
 */
export declare function hasScriptLoaded(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xA5D8E0C2F3C7EEBC | Since: 1207 | API-Set: unknown
 */
export declare function hasScriptWithNameHashLoaded(scriptHash: number | string): boolean;
/**
 * Waiting for child scripts to terminate / waiting for collapse of child scripts
 *
 * Hash: 0x380FFA15B72408FB | Since: 1207 | API-Set: unknown
 */
export declare function haveAllChildTerminated(): boolean;
/**
 * Same as GET_IS_LOADING_SCREEN_ACTIVE
 *
 * Hash: 0xB54ADBE65D528FCB | Since: 1207 | API-Set: unknown
 */
export declare function isLoadingScreenVisible(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x46E9AE36D8FA6417 | Since: 1207 | API-Set: unknown
 */
export declare function isThreadActive(threadId: number, ignoreKilledState: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9E4EF615E307FBBE | Since: 1207 | API-Set: unknown
 */
export declare function isThreadExitRequested(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x46ED607DDD40D7FE | Since: 1207 | API-Set: unknown
 */
export declare function requestScript(): string;
/**
 * No comment provided
 *
 * Hash: 0xF6B9CE3F8D5B9B74 | Since: 1207 | API-Set: unknown
 */
export declare function requestScriptWithNameHash(scriptHash: number | string): void;
/**
 * If the function returns 0, the end of the iteration has been reached.
 *
 * Hash: 0x3CE3FB167E837D7C | Since: 1207 | API-Set: unknown
 */
export declare function scriptThreadIteratorGetNextThreadId(): number;
/**
 * Starts a new iteration of the current threads.
 * Call this first, then SCRIPT_THREAD_ITERATOR_GET_NEXT_THREAD_ID (0x30B4FA1C82DD4B9F)
 *
 * Hash: 0x39382EB8DCD8684D | Since: 1207 | API-Set: unknown
 */
export declare function scriptThreadIteratorReset(): void;
/**
 * No comment provided
 *
 * Hash: 0xC6DFB8C04C86D5A5 | Since: 1207 | API-Set: unknown
 */
export declare function setBlockOfPlayerBits(): any;
/**
 * No comment provided
 *
 * Hash: 0x4768D5252EAEB76F | Since: 1207 | API-Set: unknown
 */
export declare function setEventFlagForDeletion(eventGroup: number, eventIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5CB83156AA038F95 | Since: 1207 | API-Set: unknown
 */
export declare function setNoLoadingScreen(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x0086D3067E1CFD1C | Since: 1207 | API-Set: unknown
 */
export declare function setScriptAsNoLongerNeeded(scriptName: string): void;
/**
 * No comment provided
 *
 * Hash: 0x50723A1567C8361E | Since: 1207 | API-Set: unknown
 */
export declare function setScriptWithNameHashAsNoLongerNeeded(scriptHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xFC179D7E8886DADF | Since: 1207 | API-Set: unknown
 */
export declare function shutdownLoadingScreen(): void;
/**
 * No comment provided
 *
 * Hash: 0xE81651AD79516E48 | Since: 1207 | API-Set: unknown
 */
export declare function startNewScript(scriptName: string, stackSize: number): number;
/**
 * return : script thread id, 0 if failed
 * Pass pointer to struct of args in p1, size of struct goes into p2
 *
 * Hash: 0xB8BA7F44DF1575E1 | Since: 1207 | API-Set: unknown
 */
export declare function startNewScriptWithArgs(scriptName: string, argCount: number, stackSize: number): [number, any];
/**
 * No comment provided
 *
 * Hash: 0xEB1C67C3A5333A92 | Since: 1207 | API-Set: unknown
 */
export declare function startNewScriptWithNameHash(scriptHash: number | string, stackSize: number): number;
/**
 * No comment provided
 *
 * Hash: 0xC4BB298BD441BE78 | Since: 1207 | API-Set: unknown
 */
export declare function startNewScriptWithNameHashAndArgs(scriptHash: number | string, argCount: number, stackSize: number): [number, any];
/**
 * No comment provided
 *
 * Hash: 0x778D4733E0F2F265 | Since: 1207 | API-Set: unknown
 */
export declare function stopDisplayingMpTransitionLoadingScreens(): void;
/**
 * No comment provided
 *
 * Hash: 0x5E8B6D17FF91CD59 | Since: 1207 | API-Set: unknown
 */
export declare function terminateThisThread(): void;
/**
 * No comment provided
 *
 * Hash: 0x87ED52AE40EA1A52 | Since: 1207 | API-Set: unknown
 */
export declare function terminateThread(threadId: number): void;
/**
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_SCRIPT_ERRORS (CEventGroupScriptErrors)
 *
 * Note: eventDataSize is NOT the size in bytes, it is the size determined by the SIZE_OF operator (RAGE Script operator, not C/C++ sizeof). That is, the size in bytes divided by 8 (script variables are always 8-byte aligned!).
 *
 * playerBits (also known as playersToBroadcastTo) is a bitset that indicates which players this event should be sent to. In order to send the event to specific players only, use (1 << playerIndex). Set all bits if it should be broadcast to all players.
 *
 * Hash: 0x5AE99C571D5BBE5D | Since: 1207 | API-Set: unknown
 */
export declare function triggerScriptEvent(eventGroup: number, eventDataSize: number, scriptMetadataIndex: number): [any, number];
/**
 * No comment provided
 *
 * Hash: 0x0A79C81C418F5D38 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0A79C81C418F5D38(): any;
/**
 * Used in Script Function DISABLE_REGISTERED_WORLD_BRAINS
 *
 * Hash: 0x11B0A0B282FA9B10 | Since: 1207 | API-Set: unknown
 */
export declare function _0x11B0A0B282FA9B10(): void;
/**
 * No comment provided
 *
 * Hash: 0x1BDB5A07307F6929 | Since: 1207 | API-Set: unknown
 */
export declare function _0x1BDB5A07307F6929(): void;
/**
 * No comment provided
 *
 * Hash: 0x1C5EB3C27F7508CB | Since: 1207 | API-Set: unknown
 */
export declare function _0x1C5EB3C27F7508CB(): void;
/**
 * No comment provided
 *
 * Hash: 0x29FB4CE89472C3CB | Since: 1207 | API-Set: unknown
 */
export declare function _0x29FB4CE89472C3CB(): void;
/**
 * No comment provided
 *
 * Hash: 0x42A429CDFED6D99D | Since: 1207 | API-Set: unknown
 */
export declare function _0x42A429CDFED6D99D(): void;
/**
 * No comment provided
 *
 * Hash: 0x5827BE85A87B073D | Since: 1207 | API-Set: unknown
 */
export declare function _0x5827BE85A87B073D(): void;
/**
 * No comment provided
 *
 * Hash: 0x64F765D9A1F8F02C | Since: 1207 | API-Set: unknown
 */
export declare function _0x64F765D9A1F8F02C(): [any, any, any];
/**
 * No comment provided
 *
 * Hash: 0x6F700A4BF7C3331B | Since: 1207 | API-Set: unknown
 */
export declare function _0x6F700A4BF7C3331B(): void;
/**
 * No comment provided
 *
 * Hash: 0x76CBCD9EADC00955 | Since: 1207 | API-Set: unknown
 */
export declare function _0x76CBCD9EADC00955(): void;
/**
 * No comment provided
 *
 * Hash: 0xA88E1D7FA1E20080 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA88E1D7FA1E20080(): any;
/**
 * No comment provided
 *
 * Hash: 0xE4ABE20DCE7C7CFE | Since: 1207 | API-Set: unknown
 */
export declare function _0xE4ABE20DCE7C7CFE(): void;
/**
 * No comment provided
 *
 * Hash: 0xE7282390542F570D | Since: 1207 | API-Set: unknown
 */
export declare function _0xE7282390542F570D(): any;
/**
 * No comment provided
 *
 * Hash: 0xF9E951A1E5517C06 | Since: 1207 | API-Set: unknown
 */
export declare function _0xF9E951A1E5517C06(): void;
/**
 * No comment provided
 *
 * Hash: 0xFFDDF802279BE128 | Since: 1207 | API-Set: unknown
 */
export declare function _0xFFDDF802279BE128(): void;
/**
 * goalContext: see <availableContexts> in common/data/stats_and_challenges/goals_*.meta
 *
 * Hash: 0x7D654266025E921B | Since: 1207 | API-Set: unknown
 */
export declare function activateGoalContext(goalContext: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xB9467E41DAB1CF2C | Since: 1207 | API-Set: unknown
 */
export declare function awardsGetUnlockClaimData(awardHash: number | string, dataIndex: number): [boolean, any, any];
/**
 * No comment provided
 *
 * Hash: 0xBE7D814CFA181B56 | Since: 1207 | API-Set: unknown
 */
export declare function bgReloadAllBackground(): void;
/**
 * No comment provided
 *
 * Hash: 0xDE544B7EC0C187CC | Since: 1207 | API-Set: unknown
 */
export declare function clearAllPlayerBits(): any;
/**
 * No comment provided
 *
 * Hash: 0xD426E2E3288469D6 | Since: 1207 | API-Set: unknown
 */
export declare function clearPlayerBitAtIndex(bitIndex: number): any;
/**
 * goalContext: see _ACTIVATE_GOAL_CONTEXT
 *
 * Hash: 0x50B72A754EE64A71 | Since: 1207 | API-Set: unknown
 */
export declare function deactivateGoalContext(goalContext: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x1E5B70E53DB661E5 | Since: 1207 | API-Set: unknown
 */
export declare function displayLoadingScreens(p0: number | string, p1: number | string, p2: number | string, gamemodeName: string, title: string, subtitle: string): void;
/**
 * No comment provided
 *
 * Hash: 0x66EE5B93C308F734 | Since: 1207 | API-Set: unknown
 */
export declare function doesCompressedGlobalBlockBufferExist(index: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x42A7EB5C814C2DE0 | Since: 1207 | API-Set: unknown
 */
export declare function getGlobalBlockCanBeAccessed(index: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x724CB89D35B283D0 | Since: 1207 | API-Set: unknown
 */
export declare function getHashOfThread(threadId: number): number;
/**
 * enum eThreadExitReason
 * {
 * THREAD_EXIT_REASON_NONE,
 * THREAD_EXIT_REASON_BACKGROUND_THREAD_STOPPED,
 * THREAD_EXIT_REASON_SESSION_MERGE,
 * THREAD_EXIT_REASON_SCENARIO_OUT_OF_SCOPE,
 * THREAD_EXIT_REASON_REQUESTED_BY_SCRIPT
 * };
 *
 * Hash: 0x54AE4FDEEFEAB77E | Since: 1207 | API-Set: unknown
 */
export declare function getThreadExitReason(): number;
/**
 * No comment provided
 *
 * Hash: 0x179A6F0EE2E79026 | Since: 1207 | API-Set: unknown
 */
export declare function isAnyPlayerBitSet(): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x20B7F69B40C6B755 | Since: 1207 | API-Set: unknown
 */
export declare function isBackgroundScript(threadId: number): boolean;
/**
 * goalContext: see _ACTIVATE_GOAL_CONTEXT
 *
 * Hash: 0x7409669C5ED50144 | Since: 1207 | API-Set: unknown
 */
export declare function isGoalContextActive(goalContext: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x72B2E00C9BAC6789 | Since: 1207 | API-Set: unknown
 */
export declare function isPlayerBitSetAtIndex(bitIndex: number): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0x30BED53646C86D11 | Since: 1207 | API-Set: unknown
 */
export declare function isThreadExitRequestedForThreadWithThisId(threadId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF1E9045F5AA9E428 | Since: 1311 | API-Set: unknown
 */
export declare function lootGetLootClaimData(dataIndex: number): [boolean, any, any];
/**
 * No comment provided
 *
 * Hash: 0x4293B44A855F82CC | Since: 1207 | API-Set: unknown
 */
export declare function lootGetResultItem(itemIndex: number): [boolean, any, any];
/**
 * Returns "INVALID_NET_RPC_GUID" if netRpcGuid is invalid.
 *
 * Hash: 0xAC9FF854BD4BA9B5 | Since: 1311 | API-Set: unknown
 */
export declare function netRpcGuidToString(): [string, any];
/**
 * No comment provided
 *
 * Hash: 0x7DE4643157AD646C | Since: 1207 | API-Set: unknown
 */
export declare function requestThreadExit(threadId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7423F7835770F619 | Since: 1207 | API-Set: unknown
 */
export declare function requestThreadExitForAllThreadsWithThisName(nameHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xDC3914A99B4A5FDF | Since: 1207 | API-Set: unknown
 */
export declare function restoreGlobalBlock(index: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x11986B05885564D2 | Since: 1207 | API-Set: unknown
 */
export declare function setAllGlobalBlocksHaveBeenLoaded(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x20F4CB76689ACDBC | Since: 1207 | API-Set: unknown
 */
export declare function setAllPlayerBits(): any;
/**
 * No comment provided
 *
 * Hash: 0xE66F392BFCE734AF | Since: 1207 | API-Set: unknown
 */
export declare function setGlobalBlockCanBeAccessed(index: number, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x31010318BA9897AC | Since: 1207 | API-Set: unknown
 */
export declare function setPlayerBitAtIndex(bitIndex: number): any;
/**
 * No comment provided
 *
 * Hash: 0xB952A3AC41D58F2F | Since: 1207 | API-Set: unknown
 */
export declare function storeGlobalBlock(index: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8B61C950A148FFA2 | Since: 1207 | API-Set: unknown
 */
export declare function triggerScriptEvent2(eventDataSize: number, scriptMetadataIndex: number, threadId: number): any;
