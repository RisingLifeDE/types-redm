import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0xC019112F8995DC1C | Since: 1207
 */
export function cashinventoryInitSessionStatus(): [boolean, number, number] {
    return CashinventoryInitSessionStatus();
}

/**
 * No comment provided
 * 
 * Hash: 0x6CE9FB6332B5E46E | Since: 1207
 */
export function cashinventoryIsConnectionFaulted(): boolean {
    return CashinventoryIsConnectionFaulted();
}

/**
 * No comment provided
 * 
 * Hash: 0x38640A8C2DEF011B | Since: 1311
 */
export function _0x38640A8C2DEF011B(): number {
    return Citizen.invokeNative('0x38640A8C2DEF011B', 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x3FA09DD57B93C0DE | Since: 1207
 */
export function _0x3FA09DD57B93C0DE(p0: number | string): boolean {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    return Citizen.invokeNative('0x3FA09DD57B93C0DE', p0, 0, 0, undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x92A32BA29622763F | Since: 1207
 */
export function _0x92A32BA29622763F(id: number, index: number): [boolean, any] {
    return Citizen.invokeNative('0x92A32BA29622763F', id, index);
}

/**
 * No comment provided
 * 
 * Hash: 0xA0B7094629724974 | Since: 1207
 */
export function _0xA0B7094629724974(p0: number | string): boolean {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    return Citizen.invokeNative('0xA0B7094629724974', p0, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA3B8D31C13CB4239 | Since: 1311
 */
export function _0xA3B8D31C13CB4239(p1: number | string): [boolean, any, any] {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    return Citizen.invokeNative('0xA3B8D31C13CB4239', 0, p1, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xB6F4557060EF0FB4 | Since: 1207
 */
export function _0xB6F4557060EF0FB4(): number {
    return Citizen.invokeNative('0xB6F4557060EF0FB4', 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xCE54C9ABE6FBC6DB | Since: 1207
 */
export function _0xCE54C9ABE6FBC6DB(p0: number | string): boolean {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    return Citizen.invokeNative('0xCE54C9ABE6FBC6DB', p0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1555FBC96C88444 | Since: 1207
 */
export function _0xD1555FBC96C88444(p0: number | string): boolean {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    return Citizen.invokeNative('0xD1555FBC96C88444', p0, 0, 0, undefined, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xD1CE92D1D9BE170A | Since: 1207
 */
export function cashinventoryInitSessionIsFaulted(): boolean {
    return CashinventoryInitSessionIsFaulted();
}

/**
 * No comment provided
 * 
 * Hash: 0xFCC24220FDDAC929 | Since: 1207
 */
export function cashinventoryIsSessionReady(): boolean {
    return CashinventoryIsSessionReady();
}

/**
 * No comment provided
 * 
 * Hash: 0x52BDE32F21BA3B6D | Since: 1207
 */
export function cashinventoryTransactionAddAward(id: number, hash: number | string): [boolean, any, any] {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    return CashinventoryTransactionAddAward(id, hash);
}

/**
 * No comment provided
 * 
 * Hash: 0x592BC00BF6629BE7 | Since: 1207
 */
export function cashinventoryTransactionCheckout(id: number): boolean {
    return CashinventoryTransactionCheckout(id);
}

/**
 * No comment provided
 * 
 * Hash: 0x26C008791D066F37 | Since: 1207
 */
export function cashinventoryTransactionCheckoutStatus(id: number): [boolean, number] {
    return CashinventoryTransactionCheckoutStatus(id);
}

/**
 * No comment provided
 * 
 * Hash: 0x59EF5D516E2D96B9 | Since: 1207
 */
export function cashinventoryTransactionDelete(id: number): boolean {
    return CashinventoryTransactionDelete(id);
}

/**
 * No comment provided
 * 
 * Hash: 0xFFEA09CCEC4AF32F | Since: 1207
 */
export function cashinventoryTransactionFireAndForgetItem(actionHash: number | string): [boolean, number, any] {
    if (typeof actionHash === 'string') actionHash = GetHashKey(actionHash)
    return CashinventoryTransactionFireAndForgetItem(actionHash, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xBD2D520C51CCFF52 | Since: 1207
 */
export function cashinventoryTransactionGetAction(id: number): number {
    return CashinventoryTransactionGetAction(id);
}

/**
 * No comment provided
 * 
 * Hash: 0x52A226ADF4A270D2 | Since: 1207
 */
export function cashinventoryTransactionGetBasketIsValid(id: number): boolean {
    return CashinventoryTransactionGetBasketIsValid(id);
}

/**
 * No comment provided
 * 
 * Hash: 0x7616B5F0895C2D99 | Since: 1207
 */
export function cashinventoryTransactionGetItemInfo(id: number, index: number): [boolean, any] {
    return CashinventoryTransactionGetItemInfo(id, index);
}

/**
 * No comment provided
 * 
 * Hash: 0xCF2D04D076847478 | Since: 1207
 */
export function cashinventoryTransactionGetNumOfItems(id: number): number {
    return CashinventoryTransactionGetNumOfItems(id);
}

/**
 * No comment provided
 * 
 * Hash: 0x98412398BBE73F61 | Since: 1207
 */
export function cashinventoryTransactionResponseGetItemInfo(id: number, index: number): [boolean, any] {
    return CashinventoryTransactionResponseGetItemInfo(id, index);
}

/**
 * No comment provided
 * 
 * Hash: 0xF039EC27F4490E96 | Since: 1207
 */
export function cashinventoryTransactionStart(_type: number | string, actionHash: number | string): [boolean, number] {
    if (typeof _type === 'string') _type = GetHashKey(_type)
    if (typeof actionHash === 'string') actionHash = GetHashKey(actionHash)
    return CashinventoryTransactionStart(_type, actionHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x6C9F12700BCE69F4 | Since: 1207
 */
export function cashinventoryTransactionValidateItem(p0: number | string): [number, any] {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    return CashinventoryTransactionValidateItem(p0);
}

