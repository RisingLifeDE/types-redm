import { IEntity } from '@risinglife/redm-shared';
/**
 * Returns whether or not the specified property is set for the entity.
 *
 * Hash: 0xD9D1CDBF3464DCDF | Since: 1207
 */
export function decorExistOn(entity, propertyName) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DecorExistOn(_entity, propertyName);
}
/**
 * No comment provided
 *
 * Hash: 0xDEF3F1B071ABB197 | Since: 1207
 */
export function decorGetBool(entity, propertyName) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DecorGetBool(_entity, propertyName);
}
/**
 * No comment provided
 *
 * Hash: 0xE5FF70CD842CA9D4 | Since: 1207
 */
export function decorGetFloat(entity, propertyName) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DecorGetFloat(_entity, propertyName);
}
/**
 * No comment provided
 *
 * Hash: 0x44DB62727762FD9B | Since: 1207
 */
export function decorGetInt(entity, propertyName) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DecorGetInt(_entity, propertyName);
}
/**
 * type: see DECOR_REGISTER
 *
 * Hash: 0x72355278C069F272 | Since: 1207
 */
export function decorIsRegisteredAsType(propertyName, _type) {
    return DecorIsRegisteredAsType(propertyName, _type);
}
/**
 * No comment provided
 *
 * Hash: 0x0B253D644E3C36B3 | Since: 1207
 */
export function decorRegister(propertyName, _type) {
    DecorRegister(propertyName, _type);
}
/**
 * No comment provided
 *
 * Hash: 0x2BA7F5877A088A1D | Since: 1207
 */
export function decorRemove(entity, propertyName) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DecorRemove(_entity, propertyName);
}
/**
 * No comment provided
 *
 * Hash: 0x88942780E0ADEA42 | Since: 1207
 */
export function decorRemoveAll(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DecorRemoveAll(_entity);
}
/**
 * This function sets metadata of type bool to specified entity.
 *
 *
 * Hash: 0xFE26E4609B1C3772 | Since: 1207
 */
export function decorSetBool(entity, propertyName, value) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DecorSetBool(_entity, propertyName, value);
}
/**
 * No comment provided
 *
 * Hash: 0x238F8B0C1C7FE834 | Since: 1207
 */
export function decorSetFloat(entity, propertyName, value) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DecorSetFloat(_entity, propertyName, value);
}
/**
 * Sets property to int.
 *
 * Hash: 0xE88F4D7F52A6090F | Since: 1207
 */
export function decorSetInt(entity, propertyName, value) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DecorSetInt(_entity, propertyName, value);
}
/**
 * No comment provided
 *
 * Hash: 0x0671C1A3FF7AFDFC | Since: 1207
 */
export function decorSetString(entity, propertyName, value) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DecorSetString(_entity, propertyName, value);
}
/**
 * No comment provided
 *
 * Hash: 0xB1682B2443F0540B | Since: 1207
 */
export function decorGetPlayerIndex(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DecorGetUint8(_entity);
}
/**
 * Old Name: _DECOR_REGISTER_2
 *
 * Hash: 0x4587374F88B7F6C2 | Since: 1207
 */
export function decorRegisterNetworked(_type, isNetworked) {
    return DecorRegister2(_type, isNetworked);
}
/**
 * Old name: _DECOR_SET_UINT8
 *
 * Hash: 0x4BDC83150D43772D | Since: 1207
 */
export function decorSetPlayerIndex(entity, value) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DecorSetUint8(_entity, value);
}
