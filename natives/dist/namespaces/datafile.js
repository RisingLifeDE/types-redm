import { Vector3 } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0xAB1231D2DE52F2D3 | Since: 1207
 */
export function dataarrayGetBool(arrayIndex) {
    return DataarrayGetBool(arrayIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x6A885BF69239E539 | Since: 1207
 */
export function dataarrayGetCount() {
    return DataarrayGetCount();
}
/**
 * No comment provided
 *
 * Hash: 0xA010655985853485 | Since: 1207
 */
export function dataarrayGetDict(arrayIndex) {
    return DataarrayGetDict(arrayIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xA9D003CF419CB81E | Since: 1207
 */
export function dataarrayGetFloat(arrayIndex) {
    return DataarrayGetFloat(arrayIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x96DEA500B6EBBE53 | Since: 1207
 */
export function dataarrayGetInt(arrayIndex) {
    return DataarrayGetInt(arrayIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xB6790A8FF80F889F | Since: 1207
 */
export function dataarrayGetString(arrayIndex) {
    return DataarrayGetString(arrayIndex);
}
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
export function dataarrayGetType(arrayIndex) {
    return DataarrayGetType(arrayIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x850DA2750DA14E9A | Since: 1207
 */
export function dataarrayGetVector(arrayIndex) {
    return new Vector3(DataarrayGetVector(arrayIndex));
}
/**
 * No comment provided
 *
 * Hash: 0x1B5447CF18544B18 | Since: 1207
 */
export function datadictGetArray(key) {
    return DatadictGetArray(key);
}
/**
 * No comment provided
 *
 * Hash: 0x175E915A486EE548 | Since: 1207
 */
export function datadictGetBool(key) {
    return DatadictGetBool(key);
}
/**
 * No comment provided
 *
 * Hash: 0x4D7A30130F46AC9C | Since: 1207
 */
export function datadictGetDict(key) {
    return DatadictGetDict(key);
}
/**
 * No comment provided
 *
 * Hash: 0x814643ECA258ADF5 | Since: 1207
 */
export function datadictGetFloat(key) {
    return DatadictGetFloat(key);
}
/**
 * No comment provided
 *
 * Hash: 0x9D896A3B87D96E2B | Since: 1207
 */
export function datadictGetInt(key) {
    return DatadictGetInt(key);
}
/**
 * No comment provided
 *
 * Hash: 0xE37B38C0B4E95DFA | Since: 1207
 */
export function datadictGetString(key) {
    return DatadictGetString(key);
}
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
export function datadictGetType(key) {
    return DatadictGetType(key);
}
/**
 * No comment provided
 *
 * Hash: 0xE459C941431E0FFA | Since: 1207
 */
export function datadictGetVector(key) {
    return new Vector3(DatadictGetVector(key));
}
/**
 * No comment provided
 *
 * Hash: 0xB04B69CF277D15C0 | Since: 1207
 */
export function datadictIsArrayValid() {
    return DatadictIsArrayValid();
}
/**
 * No comment provided
 *
 * Hash: 0x4607D57C5F7D332A | Since: 1207
 */
export function datadictIsDictValid() {
    return DatadictIsDictValid();
}
/**
 * No comment provided
 *
 * Hash: 0x26FDF5E99AA2F3E9 | Since: 1207
 */
export function datadictSetInt(key, value) {
    return DatadictSetInt(key, value);
}
/**
 * No comment provided
 *
 * Hash: 0x56B7291FB953DD51 | Since: 1207
 */
export function create(index) {
    DatafileCreate(index);
}
/**
 * No comment provided
 *
 * Hash: 0x9FB90EEDEA9F2D5C | Since: 1207
 */
export function datafileDelete(index) {
    DatafileDelete(index);
}
/**
 * No comment provided
 *
 * Hash: 0x604B8ED1A482F9DF | Since: 1207
 */
export function deleteRequestedFile() {
    return DatafileDeleteRequestedFile(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBBD8CF823CAE557C | Since: 1207
 */
export function getFileDict(index) {
    return DatafileGetFileDict(index);
}
/**
 * No comment provided
 *
 * Hash: 0x17279C820464CEE0 | Since: 1207
 */
export function hasLoadedFileData() {
    return DatafileHasLoadedFileData(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE60100389E50EADE | Since: 1207
 */
export function hasValidFileData() {
    return DatafileHasValidFileData(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x46102A0989AD80B5 | Since: 1207
 */
export function selectActiveFile() {
    return DatafileSelectActiveFile(undefined, undefined);
}
/**
 * Reloops value returned by UGC_QUERY_GET_CONTENT_NUM
 *
 * Hash: 0x790EC421078F5C4E | Since: 1207
 */
export function ugcSelectData(ugcRequestId, index) {
    return DatafileUgcSelectData(ugcRequestId, index, undefined);
}
/**
 * Adds the given request ID to the watch list.
 *
 * Hash: 0xA5834834CA8FD7FC | Since: 1207
 */
export function watchRequestId(id) {
    DatafileWatchRequestId(id);
}
/**
 * No comment provided
 *
 * Hash: 0x603AC35FD4602C76 | Since: 1207
 */
export function parseddataIsFileLoaded(fileHandle) {
    return ParseddataIsFileLoaded(fileHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x7907969497EA92F5 | Since: 1207
 */
export function parseddataIsFileValid(fileHandle) {
    return ParseddataIsFileValid(fileHandle);
}
/**
 * Old name: _DATAFILE_GET_HASH
 *
 * Hash: 0xFBFF3FF2F5E80C0B | Since: 1207
 */
export function parseddataRqFilloutHash() {
    return ParseddataRqFilloutHash();
}
/**
 * Old name: _DATAFILE_GET_DATA_NODE_INDEX
 *
 * Hash: 0x83C3ED532B6E5D07 | Since: 1207
 */
export function parseddataRqFilloutNode() {
    return ParseddataRqFilloutNode();
}
/**
 * No comment provided
 *
 * Hash: 0x951327435DC5164B | Since: 1232
 */
export function parseddataRqFilloutString127() {
    return ParseddataRqFilloutString127();
}
/**
 * No comment provided
 *
 * Hash: 0xE79C70E77E0973C7 | Since: 1207
 */
export function ugc2SetPlayerData() {
    return Ugc2SetPlayerData(undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x1C65CC931C0F946F | Since: 1207
 */
export function _0x1C65CC931C0F946F() {
    Citizen.invokeNative('0x1C65CC931C0F946F', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x277251C161B4C3F4 | Since: 1207
 */
export function _0x277251C161B4C3F4() {
    Citizen.invokeNative('0x277251C161B4C3F4', undefined, undefined, undefined);
}
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x3168BA5D6DECE323 | Since: 1207
 */
export function _0x3168BA5D6DECE323() {
    Citizen.invokeNative('0x3168BA5D6DECE323');
}
/**
 * No comment provided
 *
 * Hash: 0x4F9E3ED7617123AC | Since: 1207
 */
export function _0x4F9E3ED7617123AC() {
    return Citizen.invokeNative('0x4F9E3ED7617123AC', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x7681B677400C7071 | Since: 1207
 */
export function _0x7681B677400C7071() {
    Citizen.invokeNative('0x7681B677400C7071', undefined, undefined, undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x9F130129EBC31B34 | Since: 1207
 */
export function _0x9F130129EBC31B34() {
    Citizen.invokeNative('0x9F130129EBC31B34', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xBC0DF006A4952C68 | Since: 1207
 */
export function _0xBC0DF006A4952C68() {
    Citizen.invokeNative('0xBC0DF006A4952C68', undefined, undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xCA56DD6AB7A39F64 | Since: 1207
 */
export function _0xCA56DD6AB7A39F64() {
    return Citizen.invokeNative('0xCA56DD6AB7A39F64', undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xE13634BB6BAF0734 | Since: 1207
 */
export function _0xE13634BB6BAF0734() {
    return Citizen.invokeNative('0xE13634BB6BAF0734', 0, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xA63CD20F19B961AB | Since: 1207
 */
export function parseddataGetBool(p2) {
    if (typeof p2 === 'string')
        p2 = GetHashKey(p2);
    return ParseddataGetBool(p2);
}
/**
 * Returns false when there are no entries.
 *
 * Hash: 0xED4413CEE1BF142C | Since: 1207
 */
export function parseddataGetEntries() {
    return ParseddataGetEntries();
}
/**
 * Opens file.
 *
 * Hash: 0x91DED5DD64BB2691 | Since: 1207
 */
export function parseddataGetFile() {
    return ParseddataGetFile();
}
/**
 * No comment provided
 *
 * Hash: 0xB2B42607F7867576 | Since: 1207
 */
export function parseddataGetFloat(p2) {
    if (typeof p2 === 'string')
        p2 = GetHashKey(p2);
    return ParseddataGetFloat(p2);
}
/**
 * No comment provided
 *
 * Hash: 0x52FC26D2D2FC2987 | Since: 1207
 */
export function parseddataGetInt(p2) {
    if (typeof p2 === 'string')
        p2 = GetHashKey(p2);
    return ParseddataGetInt(p2);
}
/**
 * No comment provided
 *
 * Hash: 0x6BEB168D5195E7AB | Since: 1207
 */
export function parseddataGetNumChildren() {
    return ParseddataGetNumChildren(undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x44B3A36933AC009C | Since: 1207
 */
export function parseddataGetSection(section) {
    if (typeof section === 'string')
        section = GetHashKey(section);
    return ParseddataGetSection(section);
}
/**
 * LOAD_PARSEDDATA_FILE_FAILSAFE_HASH
 * Returns parseddata script fileHandle
 *
 * Hash: 0xD97D8D905F1562F2 | Since: 1207
 */
export function parseddataLoadFileHash(p0) {
    if (typeof p0 === 'string')
        p0 = GetHashKey(p0);
    return ParseddataLoadFileHash(p0);
}
/**
 * No comment provided
 *
 * Hash: 0xAE156A747C39A741 | Since: 1207
 */
export function parseddataRegisterQuery() {
    return ParseddataRegisterQuery(undefined, undefined, undefined);
}
/**
 * Old name: _DATAFILE_GET_BOOL
 *
 * Hash: 0x0D9138F3F8261DF7 | Since: 1207
 */
export function parseddataRqFilloutBool() {
    return ParseddataRqFilloutBool();
}
/**
 * Old name: _DATAFILE_GET_FLOAT
 *
 * Hash: 0x7F034FC3E891B57A | Since: 1207
 */
export function parseddataRqFilloutFloat() {
    return ParseddataRqFilloutFloat();
}
/**
 * Old name: _DATAFILE_GET_INT
 *
 * Hash: 0xEF44ACC657352A35 | Since: 1207
 */
export function parseddataRqFilloutInt() {
    return ParseddataRqFilloutInt();
}
/**
 * Old name: _DATAFILE_GET_STRING
 *
 * Hash: 0x08EAF8E9F2EB7B2E | Since: 1207
 */
export function parseddataRqFilloutString63() {
    return ParseddataRqFilloutString63();
}
/**
 * Old name: _DATAFILE_GET_VECTOR
 *
 * Hash: 0x06FBF89B12DA279C | Since: 1207
 */
export function parseddataRqFilloutVector() {
    return ParseddataRqFilloutVector();
}
/**
 * No comment provided
 *
 * Hash: 0xDF01B1F7A886B42D | Since: 1207
 */
export function parseddataRqGetNumNodes() {
    return ParseddataRqGetNumNodes(undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x129567F0C05F81B9 | Since: 1207
 */
export function parseddataUnloadFile(fileHandle) {
    ParseddataUnloadFile(fileHandle);
}
