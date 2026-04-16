import { ICamera } from '@risinglife/redm-shared';
/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 *
 * Hash: 0x8F57A89D
 */
export function getCamMatrix(camera, rightVector, forwardVector, upVector, position) {
    const _camera = camera instanceof ICamera ? camera.handle() : camera;
    GetCamMatrix(_camera, rightVector, forwardVector, upVector, position);
}
