import { IEntity } from '@risinglife/redm-shared';
/**
 * Returns the result of a shape test: 0 if the handle is invalid, 1 if the shape test is still pending, or 2 if the shape test has completed, and the handle should be invalidated.
 *
 * When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.
 *
 * enum eShapeTestStatus
 * {
 * SHAPETEST_STATUS_NONEXISTENT,
 * SHAPETEST_STATUS_RESULTS_NOTREADY,
 * SHAPETEST_STATUS_RESULTS_READY
 * };
 *
 * Hash: 0xEDE8AC7C5108FB1D | Since: 1207
 */
export function getResult(shapeTestHandle) {
    return GetShapeTestResult(shapeTestHandle);
}
/**
 * Does the same as 0x7EE9F5D83DD4F90E, except blocking until the shape test completes.
 *
 * Hash: 0x377906D8A31E5586 | Since: 1207
 */
export function startExpensiveSynchronousLosProbe(x1, y1, z1, x2, y2, z2, flags, entityToIgnore) {
    const _entityToIgnore = entityToIgnore instanceof IEntity ? entityToIgnore.handle() : entityToIgnore;
    return StartExpensiveSynchronousShapeTestLosProbe(x1, y1, z1, x2, y2, z2, flags, _entityToIgnore, 0);
}
/**
 * No comment provided
 *
 * Hash: 0xFE466162C4401D18 | Since: 1207
 */
export function startBox(pos, dimensionsX, dimensionsY, dimensionsZ, rot, rotationOrder, flags, entityToIgnore, options) {
    const _entityToIgnore = entityToIgnore instanceof IEntity ? entityToIgnore.handle() : entityToIgnore;
    return StartShapeTestBox(pos.x, pos.y, pos.z, dimensionsX, dimensionsY, dimensionsZ, rot.x, rot.y, rot.z, rotationOrder, flags, _entityToIgnore, options);
}
/**
 * No comment provided
 *
 * Hash: 0x28579D1B8F8AAC80 | Since: 1207
 */
export function startCapsule(x1, y1, z1, x2, y2, z2, radius, flags, entityToIgnore) {
    const _entityToIgnore = entityToIgnore instanceof IEntity ? entityToIgnore.handle() : entityToIgnore;
    return StartShapeTestCapsule(x1, y1, z1, x2, y2, z2, radius, flags, _entityToIgnore, 0);
}
/**
 * Asynchronously starts a line-of-sight (raycast) world probe shape test.
 *
 * Use the handle with 0x3D87450E15D98694 or 0x65287525D951F6BE until it returns 0 or 2.
 *
 * p8 is a bit mask with bits 1, 2 and/or 4, relating to collider types; 4 should usually be used. flags used are mostly 83 and 3167
 *
 * Hash: 0x7EE9F5D83DD4F90E | Since: 1207
 */
export function startLosProbe(x1, y1, z1, x2, y2, z2, flags, entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartShapeTestLosProbe(x1, y1, z1, x2, y2, z2, flags, _entity, 0);
}
/**
 * Old name: _START_SHAPE_TEST_SURROUNDING_COORDS
 *
 * Hash: 0x9839013D8B6014F1 | Since: 1207
 */
export function startMouseCursorLosProbe(flag, entity, flag2) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartShapeTestMouseCursorLosProbe(flag, _entity, flag2);
}
/**
 * No comment provided
 *
 * Hash: 0xAA5B7C8309F73230 | Since: 1207
 */
export function startSweptSphere(x1, y1, z1, x2, y2, z2, radius, flags, entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartShapeTestSweptSphere(x1, y1, z1, x2, y2, z2, radius, flags, _entity, undefined);
}
/**
 * No comment provided
 *
 * Hash: 0x04AA59CA40571C2E | Since: 1207
 */
export function _0x04AA59CA40571C2E() {
    return Citizen.invokeNative('0x04AA59CA40571C2E', undefined, undefined);
}
