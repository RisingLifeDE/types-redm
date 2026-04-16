import { Vector3 } from '@risinglife/redm-shared';
import * as audio from './namespaces/audio';
import * as entity from './namespaces/entity';
import * as graphics from './namespaces/graphics';
import * as hud from './namespaces/hud';
import * as misc from './namespaces/misc';
import * as ped from './namespaces/ped';
import * as physics from './namespaces/physics';
import * as player from './namespaces/player';
import * as streaming from './namespaces/streaming';
import * as track from './namespaces/track';
import * as vehicle from './namespaces/vehicle';
import * as water from './namespaces/water';
import * as weapon from './namespaces/weapon';
import * as network from './namespaces/network';
import * as shapetest from './namespaces/shapetest';
import * as camera from './namespaces/camera';
import * as discord from './namespaces/discord';
import * as dui from './namespaces/dui';
import * as mumble from './namespaces/mumble';
import * as nui from './namespaces/nui';
import * as object from './namespaces/object';
import * as pad from './namespaces/pad';
import * as resource from './namespaces/resource';
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
     * Registers a listener for the server emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function onServer(key: string, callback: (...args: any[]) => void): void;
    /**
     * Registers a onetime listener for the server emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function onceServer(key: string, callback: (...args: any[]) => void): void;
    /**
     * Removes a listener for the server emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    function offServer(key: string, callback: (...args: any[]) => void): void;
    /**
     * Sends data local, which can be listened by any resource
     * @param key The event key
     * @param args All parameters
     */
    function emit(key: string, ...args: any[]): void;
    /**
     * Sends data to the server, which can be listened by any resource
     * @param key The event key
     * @param args All parameters
     */
    function emitServer(key: string, ...args: any[]): void;
    /**
     * Will be triggered when the current resource nui sends a message
     */
    function onNui(name: string, callback: (data: any, cb: (key: any) => void) => void): void;
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
     * Will be triggered when a game event is fired.
     * You can find a list of all game events here: https://docs.fivem.net/docs/game-references/game-events/
     */
    function onGameEvent(callback: (name: string, ...args: any[]) => void): void;
    /**
     * Will be triggered when a population ped is being creating.
     * You can use {@link misc.cancelEvent()} to cancel this event.
     */
    function onPopulationPedCreating(callback: (position: Vector3, model: number, setters: {
        setModel: (model: string) => void;
        setPosition: (x: number, y: number, z: number) => void;
    }) => void): void;
    /**
     * Will be triggered when an Entity got damage
     */
    function onEntityDamaged(callback: (victim: number, culprit: number, weapon: number, baseDamage: number) => void): void;
    /**
     * Will be triggered when mumble is connected
     */
    function onMumbleConnected(callback: (address: string, reconnecting: boolean) => void): void;
    /**
     * Will be triggered when mumble is disconnected
     */
    function onMumbleDisconnected(callback: (address: string) => void): void;
}
export { audio, entity, graphics, hud, misc, ped, physics, player, streaming, track, vehicle, water, weapon, network, shapetest, camera, discord, dui, mumble, nui, object, pad, resource, profiler };
export * from '@risinglife/redm-shared';
