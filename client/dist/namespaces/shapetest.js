/**
 * Returns the result of a shape test, also returning the material of any touched surface.
 *
 * When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.
 *
 * Unless the return value is 2, the other return values are undefined.
 *
 * Hash: 0x4301E10C
 */
export function getResultIncludingMaterial(shapeTestHandle) {
    return GetShapeTestResultIncludingMaterial(shapeTestHandle);
}
