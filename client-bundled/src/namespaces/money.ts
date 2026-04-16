import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x07AD9E43FD478527 | Since: 1207 | API-Set: unknown
 */
export function _0x07AD9E43FD478527(): boolean {
    return Citizen.invokeNative('0x07AD9E43FD478527', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA46FD001D1BE896C | Since: 1207 | API-Set: unknown
 */
export function _0xA46FD001D1BE896C(): string {
    return Citizen.invokeNative('0xA46FD001D1BE896C');
}

/**
 * No comment provided
 * 
 * Hash: 0x466BC8769CF26A7A | Since: 1207 | API-Set: unknown
 */
export function decrementCashBalance(amount: number): boolean {
    return MoneyDecrementCashBalance(amount);
}

/**
 * No comment provided
 * 
 * Hash: 0x0C02DABFA3B98176 | Since: 1207 | API-Set: unknown
 */
export function getCashBalance(): number {
    return MoneyGetCashBalance();
}

/**
 * No comment provided
 * 
 * Hash: 0xBC3422DC91667621 | Since: 1207 | API-Set: unknown
 */
export function incrementCashBalance(amount: number, addReason: number | string): boolean {
    if (typeof addReason === 'string') addReason = GetHashKey(addReason)
    return MoneyIncrementCashBalance(amount, addReason);
}

/**
 * No comment provided
 * 
 * Hash: 0x8A67120DBC299525 | Since: 1207 | API-Set: unknown
 */
export function networkGetCashBalance(): number {
    return NetworkGetCashBalance();
}

/**
 * No comment provided
 * 
 * Hash: 0x282D36FF103D78DF | Since: 1207 | API-Set: unknown
 */
export function networkGetStringCashBalance(): string {
    return NetworkGetStringCashBalance();
}

/**
 * No comment provided
 * 
 * Hash: 0xAEC5F0119867E457 | Since: 1207 | API-Set: unknown
 */
export function networkIsBalanceNotLessThan(cashBalance: number, goldBarBalance: number): boolean {
    return NetworkIsMoneyBalanceNotLessThan(cashBalance, goldBarBalance);
}

