import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * nullsub, doesn't do anything
 * 
 * Old name: _STOP_RECORDING_THIS_FRAME
 * 
 * Hash: 0xA8C44C13419634F2 | Since: 1207 | API-Set: unknown
 */
export function replayPreventThisFrame(): void {
    ReplayPreventRecordingThisFrame();
}

