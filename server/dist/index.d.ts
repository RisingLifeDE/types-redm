import * as entity from './namespaces/entity';
import * as hud from './namespaces/hud';
import * as misc from './namespaces/misc';
import * as ped from './namespaces/ped';
import * as player from './namespaces/player';
import * as vehicle from './namespaces/vehicle';
import * as weapon from './namespaces/weapon';
import * as network from './namespaces/network';
import * as mumble from './namespaces/mumble';
import * as object from './namespaces/object';
import * as resource from './namespaces/resource';
import * as task from './namespaces/task';
import * as profiler from './namespaces/profiler';
export declare function invokeNative<T = void>(hash: string, ...args: any[]): T;
export declare function startProfiling(name?: string): void;
export declare function stopProfiling(name?: string): {};
export declare namespace events {
    function removeAllListeners(key?: string): void;
    /**
     * Enable or disable the error event logging.
     * Default state: true
     *
     * @param value Is the new state
     */
    function setLogEventErrors(value: boolean): void;
    /**
     * Enable or disable the event logging.
     * This could be helpful when you have to debug some errors.
     *
     * Default state: false
     *
     * @param value Is the new state
     */
    function setLogEvents(value: boolean): void;
    /**
     * Registers a listener for a local emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function on(key: string, callback: (...args: any[]) => void): void;
    /**
     * Registers a onetime listener for a local emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function once(key: string, callback: (...args: any[]) => void): void;
    /**
     * Removes a listener for a local emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    function off(key: string, callback: (...args: any[]) => void): void;
    /**
     * Registers a listener for a client emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function onClient(key: string, callback: (...args: any[]) => void): void;
    /**
     * Registers a onetime listener for a client emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function onceClient(key: string, callback: (...args: any[]) => void): void;
    /**
     * Removes a listener for a client emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    function offClient(key: string, callback: (...args: any[]) => void): void;
    /**
     * Sends data local, which can be listened by any resource
     * @param key The event key
     * @param args All parameters
     */
    function emit(key: string, ...args: any[]): void;
    /**
     * Sends data to a client, which can be listened by any resource
     * @param key The event key
     * @param target The target client
     * @param args All parameters
     */
    function emitClient(key: string, target: number | string, ...args: any[]): void;
    /**
     * Will be triggered when the resource list was refreshed
     */
    function onResourceListRefresh(callback: () => void): void;
    /**
     * Will be triggered when a resource is started
     */
    function onResourceStart(callback: (name: string) => void): void;
    /**
     * Will be triggered when a resource is being starting
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    function onResourceStarting(callback: (name: string) => void): void;
    /**
     * Will be triggered when a resource is being stopped
     */
    function onResourceStop(callback: (name: string) => void): void;
    /**
     * Will be triggered when an entity is being created.
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    function onEntityCreating(callback: (handle: number) => void): void;
    /**
     * Will be triggered when an entity has been created.
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    function onEntityCreated(callback: (handle: number) => void): void;
    /**
     * Will be triggered when an entity is removed on the server.
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    function onEntityRemoved(callback: (handle: number) => void): void;
    /**
     * Will be triggered when a player connects
     */
    function onPlayerConnecting(callback: (playerName: string, setKickReason: (reason: string) => void, deferrals: {
        defer: any;
        done: any;
        handover: any;
        presentCard: any;
        update: any;
    }, source: string) => void): void;
    /**
     * Will be triggered when a player joins
     */
    function onPlayerJoining(callback: (source: string, oldID: string) => void): void;
    /**
     * Will be triggered when a player enters a scope
     */
    function onPlayerEnteredScope(callback: (data: {
        for: string;
        player: string;
    }) => void): void;
    /**
     * Will be triggered when a player left a scope
     */
    function onPlayerLeftScope(callback: (data: {
        for: string;
        player: string;
    }) => void): void;
    /**
     * Will be triggered when a particle fx (ptFx) is created.
     */
    function onPtFxEvent(callback: (sender: number, data: {
        assetHash: number;
        axisBitset: number;
        effectHash: number;
        entityNetId: number;
        f100: number;
        f105: number;
        f106: number;
        f107: number;
        f109: boolean;
        f110: boolean;
        f111: boolean;
        f92: number;
        isOnEntity: boolean;
        offsetX: number;
        offsetY: number;
        offsetZ: number;
        posX: number;
        posY: number;
        posZ: number;
        rotX: number;
        rotY: number;
        rotZ: number;
        scale: number;
    }) => void): void;
    /**
     * Will be triggered when a player removes all weapons from a ped owned by another player.
     */
    function onRemoveAllWeaponsEvent(callback: (sender: number, data: {
        pedId: number;
    }) => void): void;
    /**
     * Will be triggered when a projectile is created.
     */
    function onStartProjectileEvent(callback: (sender: number, data: {
        commandFireSingleBullet: boolean;
        effectGroup: number;
        firePositionX: number;
        firePositionY: number;
        firePositionZ: number;
        initialPositionX: number;
        initialPositionY: number;
        initialPositionZ: number;
        ownerId: number;
        projectileHash: number;
        targetEntity: number;
        throwTaskSequence: number;
        unk10: number;
        unk11: number;
        unk12: number;
        unk13: number;
        unk14: number;
        unk15: number;
        unk16: number;
        unk3: number;
        unk4: number;
        unk5: number;
        unk6: number;
        unk7: number;
        unk9: number;
        unkX8: number;
        unkY8: number;
        unkZ8: number;
        weaponHash: number;
    }) => void): void;
    /**
     * Will be triggered when a client wants to apply damage to a remotely-owned entity.
     * You can use {@link misc.cancelEvent()} to cancel the start
     */
    function onWeaponDamageEvent(callback: (sender: number, data: {
        actionResultId: number;
        actionResultName: number;
        damageFlags: number;
        damageTime: number;
        damageType: number;
        f104: number;
        f112: boolean;
        f112_1: number;
        f120: number;
        f133: boolean;
        hasActionResult: boolean;
        hasImpactDir: boolean;
        hasVehicleData: boolean;
        hitComponent: number;
        hitEntityWeapon: boolean;
        hitGlobalId: number;
        hitGlobalIds: number[];
        hitWeaponAmmoAttachment: boolean;
        impactDirX: number;
        impactDirY: number;
        impactDirZ: number;
        isNetTargetPos: boolean;
        localPosX: number;
        localPosY: number;
        localPosZ: number;
        overrideDefaultDamage: boolean;
        parentGlobalId: number;
        silenced: boolean;
        suspensionIndex: number;
        tyreIndex: number;
        weaponDamage: number;
        weaponType: number;
        willKill: boolean;
    }) => void): void;
}
export { entity, hud, misc, ped, player, vehicle, weapon, network, mumble, object, resource, task, profiler };
export * from '@risinglife/redm-shared';
