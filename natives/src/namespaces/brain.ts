import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x3F44EA613A5B2676 | Since: 1207
 */
export function disableScriptSet(brainSet: number): void {
    DisableScriptBrainSet(brainSet);
}

/**
 * No comment provided
 * 
 * Hash: 0x1CF6E5C6750EADBD | Since: 1207
 */
export function enableScriptSet(brainSet: number): void {
    EnableScriptBrainSet(brainSet);
}

/**
 * Called before starting a new thread_monitor script thread in startup_mp/startup_tlg
 * Alternative name _REGISTER_SCRIPT_BRAIN
 * 
 * Old name: _PREPARE_SCRIPT_BRAIN
 * 
 * Hash: 0xA32B0B05EFF75730 | Since: 1207
 */
export function reactivateAllObjectsThatAreWaitingTillOutOfRange(): void {
    ReactivateAllObjectBrainsThatAreWaitingTillOutOfRange();
}

/**
 * No comment provided
 * 
 * Hash: 0x74C333E34DF74E8A | Since: 1207
 */
export function reactivateNamedObjectsWaitingTillOutOfRange(): string {
    return ReactivateNamedObjectBrainsWaitingTillOutOfRange();
}

/**
 * Registers a script for any object with a specific model hash.
 * 
 * Hash: 0x16AF9B4EEAC3B305 | Since: 1207
 */
export function registerObjectScript(modelHash: number | string, activationRange: number): string {
    if (typeof modelHash === 'string') modelHash = GetHashKey(modelHash)
    return RegisterObjectScriptBrain(modelHash, 0, activationRange, 0, 0);
}

/**
 * Called with flag 0 before 0xA6AC35DB4A7957A8 in net_entity_brain
 * _SET_SCRIPT_BRAIN*
 * 
 * Hash: 0x4AA5EA1EDFB25786 | Since: 1207
 */
export function _0x4AA5EA1EDFB25786(flag: number): void {
    Citizen.invokeNative('0x4AA5EA1EDFB25786', flag);
}

/**
 * Common flags: 250, 99999
 * _SET_SCRIPT_BRAIN*
 * 
 * Hash: 0xA6AC35DB4A7957A8 | Since: 1207
 */
export function _0xA6AC35DB4A7957A8(flag: number): void {
    Citizen.invokeNative('0xA6AC35DB4A7957A8', flag);
}

/**
 * No comment provided
 * 
 * Hash: 0x6818D1A194E29983 | Since: 1207
 */
export function getScriptEntity(): number {
    return GetScriptBrainEntity();
}

/**
 * No comment provided
 * 
 * Hash: 0x38F1E09224EECA09 | Since: 1311
 */
export function removeScriptEntity(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    RemoveScriptBrainEntity(_entity);
}

/**
 * Returns threadId
 * 
 * Hash: 0x4E4507CC5E4DB869 | Since: 1207
 */
export function startPreloadedScript(entity: number | IEntity, scriptStackSize: number): [number, string] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartPreloadedScriptBrain(_entity, scriptStackSize, false);
}

/**
 * Returns threadId
 * 
 * Hash: 0x6F62FAE266DCFC81 | Since: 1207
 */
export function startScript(entity: number | IEntity): [number, string, any] {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return StartScriptBrain(_entity, 0, 0, false);
}

