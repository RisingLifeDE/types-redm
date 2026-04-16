import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 * 
 * Hash: 0x8F57A89D
 */
export function getCamMatrix(camera: number | ICamera, rightVector: Vector3, forwardVector: Vector3, upVector: Vector3, position: Vector3): void {
    const _camera = camera instanceof ICamera ? camera.handle() : camera;
    GetCamMatrix(_camera, rightVector, forwardVector, upVector, position);
}

