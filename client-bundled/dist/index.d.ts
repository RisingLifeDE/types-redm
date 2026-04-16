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
import * as aicoverpoint from './namespaces/aicoverpoint';
import * as aitransport from './namespaces/aitransport';
import * as animscene from './namespaces/animscene';
import * as attribute from './namespaces/attribute';
import * as bounty from './namespaces/bounty';
import * as brain from './namespaces/brain';
import * as builtin from './namespaces/builtin';
import * as clock from './namespaces/clock';
import * as collection from './namespaces/collection';
import * as companion from './namespaces/companion';
import * as compapp from './namespaces/compapp';
import * as compendium from './namespaces/compendium';
import * as crashlog from './namespaces/crashlog';
import * as crew from './namespaces/crew';
import * as databinding from './namespaces/databinding';
import * as datafile from './namespaces/datafile';
import * as debug from './namespaces/debug';
import * as decorator from './namespaces/decorator';
import * as dlc from './namespaces/dlc';
import * as event from './namespaces/event';
import * as fire from './namespaces/fire';
import * as flock from './namespaces/flock';
import * as gang from './namespaces/gang';
import * as google_analytics from './namespaces/google_analytics';
import * as ik from './namespaces/ik';
import * as interaction from './namespaces/interaction';
import * as interior from './namespaces/interior';
import * as inventory from './namespaces/inventory';
import * as itemdatabase from './namespaces/itemdatabase';
import * as itemset from './namespaces/itemset';
import * as law from './namespaces/law';
import * as localization from './namespaces/localization';
import * as map from './namespaces/map';
import * as minigame from './namespaces/minigame';
import * as missiondata from './namespaces/missiondata';
import * as money from './namespaces/money';
import * as netshopping from './namespaces/netshopping';
import * as pathfind from './namespaces/pathfind';
import * as perschar from './namespaces/perschar';
import * as persistence from './namespaces/persistence';
import * as population from './namespaces/population';
import * as posse from './namespaces/posse';
import * as propset from './namespaces/propset';
import * as queue from './namespaces/queue';
import * as recording from './namespaces/recording';
import * as replay from './namespaces/replay';
import * as save from './namespaces/save';
import * as scripts from './namespaces/scripts';
import * as socialclub from './namespaces/socialclub';
import * as socialclubfeed from './namespaces/socialclubfeed';
import * as spactionproxy from './namespaces/spactionproxy';
import * as stats from './namespaces/stats';
import * as task from './namespaces/task';
import * as telemetry from './namespaces/telemetry';
import * as txd from './namespaces/txd';
import * as uiapps from './namespaces/uiapps';
import * as uidebug from './namespaces/uidebug';
import * as uievents from './namespaces/uievents';
import * as uifeed from './namespaces/uifeed';
import * as uilog from './namespaces/uilog';
import * as uipinning from './namespaces/uipinning';
import * as uistatemachine from './namespaces/uistatemachine';
import * as uistickyfeed from './namespaces/uistickyfeed';
import * as uitutorial from './namespaces/uitutorial';
import * as unlock from './namespaces/unlock';
import * as voice from './namespaces/voice';
import * as volume from './namespaces/volume';
import * as zone from './namespaces/zone';
import * as _namespace4 from './namespaces/_namespace4';
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
export { audio, entity, graphics, hud, misc, ped, physics, player, streaming, track, vehicle, water, weapon, network, shapetest, camera, discord, dui, mumble, nui, object, pad, resource, profiler, aicoverpoint, aitransport, animscene, attribute, bounty, brain, builtin, clock, collection, companion, compapp, compendium, crashlog, crew, databinding, datafile, debug, decorator, dlc, event, fire, flock, gang, google_analytics, ik, interaction, interior, inventory, itemdatabase, itemset, law, localization, map, minigame, missiondata, money, netshopping, pathfind, perschar, persistence, population, posse, propset, queue, recording, replay, save, scripts, socialclub, socialclubfeed, spactionproxy, stats, task, telemetry, txd, uiapps, uidebug, uievents, uifeed, uilog, uipinning, uistatemachine, uistickyfeed, uitutorial, unlock, voice, volume, zone, _namespace4 };
export * from '@risinglife/redm-shared';
