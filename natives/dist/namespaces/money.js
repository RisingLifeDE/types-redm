/**
 * No comment provided
 *
 * Hash: 0x07AD9E43FD478527 | Since: 1207
 */
export function _0x07AD9E43FD478527() {
    return Citizen.invokeNative('0x07AD9E43FD478527', undefined, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0xA46FD001D1BE896C | Since: 1207
 */
export function _0xA46FD001D1BE896C() {
    return Citizen.invokeNative('0xA46FD001D1BE896C');
}
/**
 * No comment provided
 *
 * Hash: 0x466BC8769CF26A7A | Since: 1207
 */
export function decrementCashBalance(amount) {
    return MoneyDecrementCashBalance(amount);
}
/**
 * No comment provided
 *
 * Hash: 0x0C02DABFA3B98176 | Since: 1207
 */
export function getCashBalance() {
    return MoneyGetCashBalance();
}
/**
 * No comment provided
 *
 * Hash: 0xBC3422DC91667621 | Since: 1207
 */
export function incrementCashBalance(amount, addReason) {
    if (typeof addReason === 'string')
        addReason = GetHashKey(addReason);
    return MoneyIncrementCashBalance(amount, addReason);
}
/**
 * No comment provided
 *
 * Hash: 0x8A67120DBC299525 | Since: 1207
 */
export function networkGetCashBalance() {
    return NetworkGetCashBalance();
}
/**
 * No comment provided
 *
 * Hash: 0x282D36FF103D78DF | Since: 1207
 */
export function networkGetStringCashBalance() {
    return NetworkGetStringCashBalance();
}
/**
 * No comment provided
 *
 * Hash: 0xAEC5F0119867E457 | Since: 1207
 */
export function networkIsBalanceNotLessThan(cashBalance, goldBarBalance) {
    return NetworkIsMoneyBalanceNotLessThan(cashBalance, goldBarBalance);
}
