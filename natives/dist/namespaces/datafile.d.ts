import { Vector3 } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0xAB1231D2DE52F2D3 | Since: 1207
 */
export declare function dataarrayGetBool(arrayIndex: number): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0x6A885BF69239E539 | Since: 1207
 */
export declare function dataarrayGetCount(): [number, any];
/**
 * No comment provided
 *
 * Hash: 0xA010655985853485 | Since: 1207
 */
export declare function dataarrayGetDict(arrayIndex: number): [any, any];
/**
 * No comment provided
 *
 * Hash: 0xA9D003CF419CB81E | Since: 1207
 */
export declare function dataarrayGetFloat(arrayIndex: number): [number, any];
/**
 * No comment provided
 *
 * Hash: 0x96DEA500B6EBBE53 | Since: 1207
 */
export declare function dataarrayGetInt(arrayIndex: number): [number, any];
/**
 * No comment provided
 *
 * Hash: 0xB6790A8FF80F889F | Since: 1207
 */
export declare function dataarrayGetString(arrayIndex: number): [string, any];
/**
 * Types:
 * 1 = Boolean
 * 2 = Integer
 * 3 = Float
 * 4 = String
 * 5 = Vector3
 * 6 = Object
 * 7 = Array
 *
 * Hash: 0x151DAFE6B3B9888F | Since: 1207
 */
export declare function dataarrayGetType(arrayIndex: number): [number, any];
/**
 * No comment provided
 *
 * Hash: 0x850DA2750DA14E9A | Since: 1207
 */
export declare function dataarrayGetVector(arrayIndex: number): [Vector3, any];
/**
 * No comment provided
 *
 * Hash: 0x1B5447CF18544B18 | Since: 1207
 */
export declare function datadictGetArray(key: string): [any, any];
/**
 * No comment provided
 *
 * Hash: 0x175E915A486EE548 | Since: 1207
 */
export declare function datadictGetBool(key: string): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0x4D7A30130F46AC9C | Since: 1207
 */
export declare function datadictGetDict(key: string): [any, any];
/**
 * No comment provided
 *
 * Hash: 0x814643ECA258ADF5 | Since: 1207
 */
export declare function datadictGetFloat(key: string): [number, any];
/**
 * No comment provided
 *
 * Hash: 0x9D896A3B87D96E2B | Since: 1207
 */
export declare function datadictGetInt(key: string): [number, any];
/**
 * No comment provided
 *
 * Hash: 0xE37B38C0B4E95DFA | Since: 1207
 */
export declare function datadictGetString(key: string): [string, any];
/**
 * Types:
 * 1 = Boolean
 * 2 = Integer
 * 3 = Float
 * 4 = String
 * 5 = Vector3
 * 6 = Object
 * 7 = Array
 *
 * Hash: 0x92E11E3CA4C7CDF0 | Since: 1207
 */
export declare function datadictGetType(key: string): [number, any];
/**
 * No comment provided
 *
 * Hash: 0xE459C941431E0FFA | Since: 1207
 */
export declare function datadictGetVector(key: string): [Vector3, any];
/**
 * No comment provided
 *
 * Hash: 0xB04B69CF277D15C0 | Since: 1207
 */
export declare function datadictIsArrayValid(): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0x4607D57C5F7D332A | Since: 1207
 */
export declare function datadictIsDictValid(): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0x26FDF5E99AA2F3E9 | Since: 1207
 */
export declare function datadictSetInt(key: string, value: number): any;
/**
 * No comment provided
 *
 * Hash: 0x56B7291FB953DD51 | Since: 1207
 */
export declare function create(index: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9FB90EEDEA9F2D5C | Since: 1207
 */
export declare function datafileDelete(index: number): void;
/**
 * No comment provided
 *
 * Hash: 0x604B8ED1A482F9DF | Since: 1207
 */
export declare function deleteRequestedFile(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBBD8CF823CAE557C | Since: 1207
 */
export declare function getFileDict(index: number): any;
/**
 * No comment provided
 *
 * Hash: 0x17279C820464CEE0 | Since: 1207
 */
export declare function hasLoadedFileData(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE60100389E50EADE | Since: 1207
 */
export declare function hasValidFileData(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x46102A0989AD80B5 | Since: 1207
 */
export declare function selectActiveFile(): boolean;
/**
 * Reloops value returned by UGC_QUERY_GET_CONTENT_NUM
 *
 * Hash: 0x790EC421078F5C4E | Since: 1207
 */
export declare function ugcSelectData(ugcRequestId: any, index: number): any;
/**
 * Adds the given request ID to the watch list.
 *
 * Hash: 0xA5834834CA8FD7FC | Since: 1207
 */
export declare function watchRequestId(id: number): void;
/**
 * No comment provided
 *
 * Hash: 0x603AC35FD4602C76 | Since: 1207
 */
export declare function parseddataIsFileLoaded(fileHandle: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7907969497EA92F5 | Since: 1207
 */
export declare function parseddataIsFileValid(fileHandle: number): boolean;
/**
 * Old name: _DATAFILE_GET_HASH
 *
 * Hash: 0xFBFF3FF2F5E80C0B | Since: 1207
 */
export declare function parseddataRqFilloutHash(): [boolean, number, any];
/**
 * Old name: _DATAFILE_GET_DATA_NODE_INDEX
 *
 * Hash: 0x83C3ED532B6E5D07 | Since: 1207
 */
export declare function parseddataRqFilloutNode(): [boolean, number, any];
/**
 * No comment provided
 *
 * Hash: 0x951327435DC5164B | Since: 1232
 */
export declare function parseddataRqFilloutString127(): [boolean, string, any];
/**
 * No comment provided
 *
 * Hash: 0xE79C70E77E0973C7 | Since: 1207
 */
export declare function ugc2SetPlayerData(): any;
/**
 * No comment provided
 *
 * Hash: 0x1C65CC931C0F946F | Since: 1207
 */
export declare function _0x1C65CC931C0F946F(): void;
/**
 * No comment provided
 *
 * Hash: 0x277251C161B4C3F4 | Since: 1207
 */
export declare function _0x277251C161B4C3F4(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x3168BA5D6DECE323 | Since: 1207
 */
export declare function _0x3168BA5D6DECE323(): void;
/**
 * No comment provided
 *
 * Hash: 0x4F9E3ED7617123AC | Since: 1207
 */
export declare function _0x4F9E3ED7617123AC(): any;
/**
 * No comment provided
 *
 * Hash: 0x7681B677400C7071 | Since: 1207
 */
export declare function _0x7681B677400C7071(): void;
/**
 * No comment provided
 *
 * Hash: 0x9F130129EBC31B34 | Since: 1207
 */
export declare function _0x9F130129EBC31B34(): void;
/**
 * No comment provided
 *
 * Hash: 0xBC0DF006A4952C68 | Since: 1207
 */
export declare function _0xBC0DF006A4952C68(): void;
/**
 * No comment provided
 *
 * Hash: 0xCA56DD6AB7A39F64 | Since: 1207
 */
export declare function _0xCA56DD6AB7A39F64(): any;
/**
 * No comment provided
 *
 * Hash: 0xE13634BB6BAF0734 | Since: 1207
 */
export declare function _0xE13634BB6BAF0734(): number;
/**
 * No comment provided
 *
 * Hash: 0xA63CD20F19B961AB | Since: 1207
 */
export declare function parseddataGetBool(p2: number | string): [boolean, boolean, any];
/**
 * Returns false when there are no entries.
 *
 * Hash: 0xED4413CEE1BF142C | Since: 1207
 */
export declare function parseddataGetEntries(): [boolean, any];
/**
 * Opens file.
 *
 * Hash: 0x91DED5DD64BB2691 | Since: 1207
 */
export declare function parseddataGetFile(): any;
/**
 * No comment provided
 *
 * Hash: 0xB2B42607F7867576 | Since: 1207
 */
export declare function parseddataGetFloat(p2: number | string): [boolean, any, any];
/**
 * No comment provided
 *
 * Hash: 0x52FC26D2D2FC2987 | Since: 1207
 */
export declare function parseddataGetInt(p2: number | string): [boolean, any, any];
/**
 * No comment provided
 *
 * Hash: 0x6BEB168D5195E7AB | Since: 1207
 */
export declare function parseddataGetNumChildren(): any;
/**
 * No comment provided
 *
 * Hash: 0x44B3A36933AC009C | Since: 1207
 */
export declare function parseddataGetSection(section: number | string): [boolean, any, any];
/**
 * LOAD_PARSEDDATA_FILE_FAILSAFE_HASH
 * Returns parseddata script fileHandle
 *
 * Hash: 0xD97D8D905F1562F2 | Since: 1207
 */
export declare function parseddataLoadFileHash(p0: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xAE156A747C39A741 | Since: 1207
 */
export declare function parseddataRegisterQuery(): any;
/**
 * Old name: _DATAFILE_GET_BOOL
 *
 * Hash: 0x0D9138F3F8261DF7 | Since: 1207
 */
export declare function parseddataRqFilloutBool(): [boolean, boolean, any];
/**
 * Old name: _DATAFILE_GET_FLOAT
 *
 * Hash: 0x7F034FC3E891B57A | Since: 1207
 */
export declare function parseddataRqFilloutFloat(): [boolean, number, any];
/**
 * Old name: _DATAFILE_GET_INT
 *
 * Hash: 0xEF44ACC657352A35 | Since: 1207
 */
export declare function parseddataRqFilloutInt(): [boolean, number, any];
/**
 * Old name: _DATAFILE_GET_STRING
 *
 * Hash: 0x08EAF8E9F2EB7B2E | Since: 1207
 */
export declare function parseddataRqFilloutString63(): [boolean, string, any];
/**
 * Old name: _DATAFILE_GET_VECTOR
 *
 * Hash: 0x06FBF89B12DA279C | Since: 1207
 */
export declare function parseddataRqFilloutVector(): [boolean, Vector3, any];
/**
 * No comment provided
 *
 * Hash: 0xDF01B1F7A886B42D | Since: 1207
 */
export declare function parseddataRqGetNumNodes(): any;
/**
 * No comment provided
 *
 * Hash: 0x129567F0C05F81B9 | Since: 1207
 */
export declare function parseddataUnloadFile(fileHandle: number): void;
