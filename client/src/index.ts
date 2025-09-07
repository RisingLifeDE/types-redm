import {Vector3,Vector2,Entity,Ped,Player,Vehicle,Object,Blip,Camera} from '@risinglife/redm-shared'

export namespace events {
    interface api {
        onNet: (eventName: string, handler: Function) => void;
        emitNet: (eventName: string, ...args: any[]) => void;
        on: (eventName: string, handler: Function) => void;
        emit: (eventName: string, ...args: any[]) => void;
    }
    class EventEmitter {
        private listeners: Map<string, Array<(...args: any[]) => void>> = new Map();

        on(eventName: string, callback: (...args: any[]) => void): void {
            if (!this.listeners.has(eventName)) {
                this.listeners.set(eventName, []);
            }
            this.listeners.get(eventName)!.push(callback);
        }

        once(eventName: string, callback: (...args: any[]) => void): void {
            const onceWrapper = (...args: any[]) => {
                this.off(eventName, onceWrapper);
                callback(...args);
            };
            this.on(eventName, onceWrapper);
        }

        emit(eventName: string, ...args: any[]): void {
            const callbacks = this.listeners.get(eventName);
            if (callbacks) {
                callbacks.forEach((callback) => {
                    try {
                        callback(...args);
                    } catch (error) {
                        EventLogger.logError(eventName, error);
                    }
                });
            }
        }

        off(eventName: string, callback: (...args: any[]) => void): void {
            const callbacks = this.listeners.get(eventName);
            if (callbacks) {
                const index = callbacks.indexOf(callback);
                if (index !== -1) {
                    callbacks.splice(index, 1);
                }
            }
        }

        removeAllListeners(eventName?: string): void {
            if (eventName) {
                this.listeners.delete(eventName);
            } else {
                this.listeners.clear();
            }
        }
    }
    class EventParsingUtils {
        static parseArgument(arg: any): any {
            if (typeof arg === 'string') {
                try {
                    return JSON.parse(arg);
                } catch {
                    return arg;
                }
            }

            if (Array.isArray(arg)) {
                return arg.map((item) => this.parseArgument(item));
            }

            if (arg && typeof arg === 'object') {
                const result: any = {};
                for (const [key, value] of Object.entries(arg)) {
                    result[key] = this.parseArgument(value);
                }
                return result;
            }

            return arg;
        }

        static parseAllArguments(args: any[]): any[] {
            return args.map((arg) => this.parseArgument(arg));
        }

        static assignFields(target: any, source: any): any {
            if (typeof target === 'object' && target !== null && typeof source === 'object' && source !== null) {
                return Object.assign(target, source);
            }
            return source;
        }
    }
    class EventRegistry {
        private static networkEvents = new Set<string>();
        private static localEvents = new Set<string>();
        private static networkEmitter = new EventEmitter();
        private static localEmitter = new EventEmitter();

        static getNetworkRegistry() {
            return {
                events: this.networkEvents,
                emitter: this.networkEmitter
            };
        }

        static getLocalRegistry() {
            return {
                events: this.localEvents,
                emitter: this.localEmitter
            };
        }
    }
    class EventLogger {

        static logErrors: boolean = true;
        static logEvents: boolean = false;

        static logEvent(type: 'NETWORK' | 'LOCAL', eventName: string, ...args: any[]): void {
            if (this.logEvents) console.log(`[${type}] ${eventName}`, ...args);
        }

        static logError(eventName: string, error: any): void {
            if (this.logErrors) console.error(`Error in event handler for "${eventName}":`, error);
        }
    }

    class NetworkEventUtils {
        private static api: api = {
            // @ts-ignore
            onNet: (eventName: string, handler: Function) => onNet(eventName, handler),
            // @ts-ignore
            emitNet: (eventName: string, ...args: any[]) => emitNet(eventName, ...args),
            // @ts-ignore
            on: (eventName: string, handler: Function) => addEventListener(eventName, handler),
            // @ts-ignore
            emit: (eventName: string, ...args: any[]) => TriggerEvent(eventName, ...args),
        };

        private static getNetworkEventName(eventName: string): string {
            return eventName.startsWith('net::') ? eventName : `net::${eventName}`;
        }

        private static setupListener(eventName: string): void {
            const {events, emitter} = EventRegistry.getNetworkRegistry();
            const networkEventName = this.getNetworkEventName(eventName);

            if (!events.has(eventName)) {
                events.add(eventName);

                const handler = (...args: any[]) => {
                    const parsedArgs = EventParsingUtils.parseAllArguments(args);
                    emitter.emit(eventName, ...parsedArgs);
                    EventLogger.logEvent('NETWORK', eventName, ...args);
                };

                this.api.onNet(networkEventName, handler);
            }
        }

        static registerEvent<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
            this.setupListener(eventName);
            const {emitter} = EventRegistry.getNetworkRegistry();
            emitter.on(eventName, callback);
        }

        static registerEventOnce<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
            this.setupListener(eventName);
            const {emitter} = EventRegistry.getNetworkRegistry();
            emitter.once(eventName, callback);
        }

        static removeListener<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
            const {emitter} = EventRegistry.getNetworkRegistry();
            emitter.off(eventName, callback);
        }

        static removeAllListeners(eventName?: string): void {
            const {emitter} = EventRegistry.getNetworkRegistry();
            emitter.removeAllListeners(eventName);
        }

        static send(eventName: string, ...args: any[]): void {
            const networkEventName = this.getNetworkEventName(eventName);
            const parsedArgs = args.map((arg) => {
                if (arg instanceof IEntity) {
                    return arg.remoteId();
                }
                return arg;
            });

            EventLogger.logEvent('NETWORK', eventName, ...parsedArgs);
            this.api.emitNet(networkEventName, ...parsedArgs);
        }
    }
    class LocalEventUtils {
        private static api: api = {
            // @ts-ignore
            onNet: (eventName: string, handler: Function) => onNet(eventName, handler),
            // @ts-ignore
            emitNet: (eventName: string, ...args: any[]) => emitNet(eventName, ...args),
            // @ts-ignore
            on: (eventName: string, handler: Function) => addEventListener(eventName, handler),
            // @ts-ignore
            emit: (eventName: string, ...args: any[]) => TriggerEvent(eventName, ...args),
        };

        private static setupListener(eventName: string): void {
            const {events, emitter} = EventRegistry.getLocalRegistry();

            if (!events.has(eventName)) {
                events.add(eventName);

                const handler = (...args: any[]) => {
                    const parsedArgs = EventParsingUtils.parseAllArguments(args);
                    emitter.emit(eventName, ...parsedArgs);
                    EventLogger.logEvent('LOCAL', eventName, ...args);
                };

                this.api.on(eventName, handler);
            }
        }

        static registerEvent<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
            this.setupListener(eventName);
            const {emitter} = EventRegistry.getLocalRegistry();
            emitter.on(eventName, callback);
        }

        static registerEventOnce<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
            this.setupListener(eventName);
            const {emitter} = EventRegistry.getLocalRegistry();
            emitter.once(eventName, callback);
        }

        static removeListener<T extends any[]>(eventName: string, callback: (...args: T) => void): void {
            const {emitter} = EventRegistry.getLocalRegistry();
            emitter.off(eventName, callback);
        }

        static removeAllListeners(eventName?: string): void {
            const {emitter} = EventRegistry.getLocalRegistry();
            emitter.removeAllListeners(eventName);
        }

        static send(eventName: string, ...args: any[]): void {
            const parsedArgs = args.map((arg) => {
                if (arg instanceof IEntity) {
                    return arg.remoteId();
                }
                return arg;
            });

            EventLogger.logEvent('LOCAL', eventName, ...parsedArgs);
            this.api.emit(eventName, ...parsedArgs);
        }
    }

    export function removeAllListeners(key?: string): void {
        LocalEventUtils.removeAllListeners(key)
        NetworkEventUtils.removeAllListeners(key)
    }

    /**
     * Registers a listener for a local emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    export function on(key: string, callback: (...args: any[]) => void): void {
        LocalEventUtils.registerEvent(key, callback);
    }
    /**
     * Registers a onetime listener for a local emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    export function once(key: string, callback: (...args: any[]) => void): void {
        LocalEventUtils.registerEventOnce(key, callback);
    }
    /**
     * Removes a listener for a local emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    export function off(key: string, callback: (...args: any[]) => void): void {
        LocalEventUtils.removeListener(key, callback);
    }

    /**
     * Registers a listener for the server emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    export function onServer(key: string, callback: (...args: any[]) => void): void {
        NetworkEventUtils.registerEvent(key, callback);
    }
    /**
     * Registers a onetime listener for the server emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    export function onceServer(key: string, callback: (...args: any[]) => void): void {
        NetworkEventUtils.registerEventOnce(key, callback);
    }
    /**
     * Removes a listener for the server emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    export function offServer(key: string, callback: (...args: any[]) => void): void {
        NetworkEventUtils.removeListener(key, callback);
    }

    /**
     * Sends data local, which can be listened by any resource
     * @param key The event key
     * @param args All parameters
     */
    export function emit(key: string, ...args: any[]): void {
        LocalEventUtils.send(key, ...args)
    }
    /**
     * Sends data to the server, which can be listened by any resource
     * @param key The event key
     * @param args All parameters
     */
    export function emitServer(key: string, ...args: any[]): void {
        NetworkEventUtils.send(key, ...args)
    }
}

// All below is auto-generated code

export namespace audio {
    /**
     * Allows StaticEmitter's without a linked entity to make use of environment features like occlusion and reverb even if they are located higher than 20.0 units above any static collision inside interiors.
     *
     * This native allows you to extend the probe range up to 150.0 units.
     *
     * Hash: 0x8AA1F3C2
     */
    export function setEmitterProbeLength(probeLength: number): void {
        SetEmitterProbeLength(probeLength);
    }

    /**
     * Adds an output for the specified audio submix.
     *
     * Hash: 0xAC6E290D
     */
    export function addSubmixOutput(submixId: number, outputSubmixId: number): void {
        AddAudioSubmixOutput(submixId, outputSubmixId);
    }

    /**
     * Creates an audio submix with the specified name, or gets the existing audio submix by that name.
     *
     * Hash: 0x658D2BC8
     */
    export function createSubmix(name: string): number {
        return CreateAudioSubmix(name);
    }

    /**
     * Sets a floating-point parameter for a submix effect.
     *
     * Hash: 0x9A209B3C
     */
    export function setSubmixEffectParamFloat(submixId: number, effectSlot: number, paramIndex: number, paramValue: number): void {
        SetAudioSubmixEffectParamFloat(submixId, effectSlot, paramIndex, paramValue);
    }

    /**
     * Sets an integer parameter for a submix effect.
     *
     * Hash: 0x77FAE2B8
     */
    export function setSubmixEffectParamInt(submixId: number, effectSlot: number, paramIndex: number, paramValue: number): void {
        SetAudioSubmixEffectParamInt(submixId, effectSlot, paramIndex, paramValue);
    }

    /**
     * Assigns a RadioFX effect to a submix effect slot.
     *
     * The parameter values for this effect are as follows (backticks are used to represent hashes):
     *
     * | Index | Type | Description |
     * |-|-|-|
     * | \`enabled\` | int | Enables or disables RadioFX on this DSP. |
     * | \`default\` | int | Sets default parameters for the RadioFX DSP and enables it. |
     * | \`freq_low\` | float |  |
     * | \`freq_hi\` | float |  |
     * | \`fudge\` | float |  |
     * | \`rm_mod_freq\` | float |  |
     * | \`rm_mix\` | float |  |
     * | \`o_freq_lo\` | float |  |
     * | \`o_freq_hi\` | float |  |
     *
     * Hash: 0xAAA94D53
     */
    export function setSubmixEffectRadioFx(submixId: number, effectSlot: number): void {
        SetAudioSubmixEffectRadioFx(submixId, effectSlot);
    }

    /**
     * Sets the volumes for the sound channels in a submix effect.
     * Values can be between 0.0 and 1.0.
     * Channel 5 and channel 6 are not used in voice chat but are believed to be center and LFE channels.
     * Output slot starts at 0 for the first ADD_AUDIO_SUBMIX_OUTPUT call then incremented by 1 on each subsequent call.
     *
     * Hash: 0x825DC0D1
     */
    export function setSubmixOutputVolumes(submixId: number, outputSlot: number, frontLeftVolume: number, frontRightVolume: number, rearLeftVolume: number, rearRightVolume: number, channel5Volume: number, channel6Volume: number): void {
        SetAudioSubmixOutputVolumes(submixId, outputSlot, frontLeftVolume, frontRightVolume, rearLeftVolume, rearRightVolume, channel5Volume, channel6Volume);
    }

}


export namespace entity {
    /**
     * Returns entity's archetype name, if available.
     *
     * Hash: 0x47B870F5
     */
    export function getArchetypeName(entity: number | Entity): string {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetEntityArchetypeName(_entity);
    }

    /**
     * Returns the transient entity index for a specified mapdata/entity pair.
     * This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0xEE43540D
     */
    export function getIndexFromMapdata(mapdata: number, entity: number): number {
        return GetEntityIndexFromMapdata(mapdata, entity);
    }

    /**
     * Retrieves the map data and entity handles from a specific entity.
     * This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0xF6B815C5
     */
    export function getMapdataOwner(entity: number | Entity): [boolean, number, number] {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetEntityMapdataOwner(_entity);
    }

    /**
     * Resets mapdata entity transform matrix to its original state.
     * This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0x8143FA4F
     */
    export function resetMapdataMatrix(mapDataHash: number, entityInternalIdx: number): boolean {
        return ResetMapdataEntityMatrix(mapDataHash, entityInternalIdx);
    }

    /**
     * Gets the selected entity at the current mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0x3DD8130F
     */
    export function selectAtCursor(hitFlags: number, precise: boolean): number {
        return SelectEntityAtCursor(hitFlags, precise);
    }

    /**
     * Gets the selected entity at the specified mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0xAFE8D405
     */
    export function selectAtPos(fracX: number, fracY: number, hitFlags: number, precise: boolean): number {
        return SelectEntityAtPos(fracX, fracY, hitFlags, precise);
    }

    /**
     * Sets an entity's matrix. Arguments are in the same order as with GET_ENTITY_MATRIX.
     *
     * Hash: 0xFB0639B
     */
    export function setMatrix(entity: number | Entity, forwardX: number, forwardY: number, forwardZ: number, rightX: number, rightY: number, rightZ: number, upX: number, upY: number, upZ: number, atX: number, atY: number, atZ: number): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        SetEntityMatrix(_entity, forwardX, forwardY, forwardZ, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ);
    }

    /**
     * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
     *
     * Hash: 0xEDBE6ADD
     */
    export function isPositionFrozen(entity: number | Entity): boolean {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return IsEntityPositionFrozen(_entity);
    }

    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Returns the memory address of an entity.
     *
     * This native is intended for singleplayer debugging, and may not be available during multiplayer.
     *
     * Hash: 0x9A3144BC
     */
    export function getAddress(entity: number | Entity): any {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return GetEntityAddress(_entity);
    }

    /**
     * Internal function for ensuring an entity has a state bag.
     *
     * Hash: 0x3BB78F05
     */
    export function ensureStateBag(entity: number | Entity): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        EnsureEntityStateBag(_entity);
    }

    /**
     * ### Supported types
     *
     * *   \[1] : Peds (including animals) and players.
     * *   \[2] : Vehicles.
     * *   \[3] : Objects (props), doors, and projectiles.
     *
     * ### Coordinates need to be send unpacked (x,y,z)
     *
     * ```lua
     *
     * -- Define the allowed model hashes
     * local allowedModelHashes = { GetHashKey("p_crate03x"), GetHashKey("p_crate22x") }
     *
     * -- Get the player's current coordinates
     * local playerCoords = GetEntityCoords(PlayerPedId())
     *
     * -- Retrieve all entities of type Object (type 3) within a radius of 10.0 units
     * -- that match the allowed model hashes
     * -- and sort output entities by distance
     * local entities = GetEntitiesInRadius(playerCoords.x, playerCoords.y, playerCoords.z, 10.0, 3, true, allowedModelHashes)
     *
     * -- Iterate through the list of entities and print their ids
     * for i = 1, #entities do
     * local entity = entities[i]
     * print(entity)
     * end
     *
     * ```
     *
     * Hash: 0xDFFBA12F
     */
    export function getEntitiesInRadius(pos: Vector3, radius: number, entityType: number, sortByDistance: boolean, models: number | Object): number {
        const _models = models instanceof Object ? models.handle() : models;
        return GetEntitiesInRadius(pos.x, pos.y, pos.z, radius, entityType, sortByDistance, _models);
    }

    /**
     * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](#\_0x5BA35AAF).
     *
     * Hash: 0x4BDF1867
     */
    export function getFromStateBagName(bagName: string): number {
        return GetEntityFromStateBagName(bagName);
    }

}


export namespace graphics {
    /**
     * Loads a minimap overlay from a GFx file in the current resource.
     *
     * If you need to control the depth of overlay use [`ADD_MINIMAP_OVERLAY_WITH_DEPTH`](#\_0xED0935B5).
     *
     * Hash: 0x4AFD2499
     */
    export function addMinimapOverlay(name: string): number {
        return AddMinimapOverlay(name);
    }

    /**
     * Loads a minimap overlay from a GFx file in the current resource.
     *
     * Hash: 0xED0935B5
     */
    export function addMinimapOverlayWithDepth(name: string, depth: number): number {
        return AddMinimapOverlayWithDepth(name, depth);
    }

    /**
     * Experimental natives, please do not use in a live environment.
     *
     * Hash: 0xA66F8F75
     */
    export function addReplaceTexture(origTxd: string, origTxn: string, newTxd: string, newTxn: string): void {
        AddReplaceTexture(origTxd, origTxn, newTxd, newTxn);
    }

    /**
     * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
     *
     * Hash: 0x4C89C0ED
     */
    export function callMinimapScaleformFunction(miniMap: number, fnName: string): boolean {
        return CallMinimapScaleformFunction(miniMap, fnName);
    }

    /**
     * Commits the backing pixels to the specified runtime texture.
     *
     * Hash: 0x19D81F4E
     */
    export function commitRuntimeTexture(tex: number): void {
        CommitRuntimeTexture(tex);
    }

    /**
     * Creates a blank runtime texture.
     *
     * Hash: 0xFEC3766D
     */
    export function createRuntimeTexture(txd: number, txn: string, width: number, height: number): number {
        return CreateRuntimeTexture(txd, txn, width, height);
    }

    /**
     * Creates a runtime texture from a DUI handle.
     *
     * Hash: 0xB135472B
     */
    export function createRuntimeTextureFromDuiHandle(txd: number, txn: string, duiHandle: string): number {
        return CreateRuntimeTextureFromDuiHandle(txd, txn, duiHandle);
    }

    /**
     * Creates a runtime texture from the specified file in the current resource or a base64 data URL.
     *
     * Hash: 0x786D8BC3
     */
    export function createRuntimeTextureFromImage(txd: number, txn: string, fileName: string): number {
        return CreateRuntimeTextureFromImage(txd, txn, fileName);
    }

    /**
     * Creates a runtime texture dictionary with the specified name.
     * Example:
     *
     * ```lua
     * local txd = CreateRuntimeTxd('meow')
     * ```
     *
     * Hash: 0x1F3AC778
     */
    export function createRuntimeTxd(name: string): number {
        return CreateRuntimeTxd(name);
    }

    /**
     * Allows drawing advanced light effects, known as coronas, which support flares, volumetric lighting, and customizable glow properties.
     *
     * Hash: 0xFF44780E
     */
    export function drawCorona(pos: Vector3, size: number, red: number, green: number, blue: number, alpha: number, intensity: number, zBias: number, dirX: number, dirY: number, dirZ: number, viewThreshold: number, innerAngle: number, outerAngle: number, flags: number): void {
        DrawCorona(pos.x, pos.y, pos.z, size, red, green, blue, alpha, intensity, zBias, dirX, dirY, dirZ, viewThreshold, innerAngle, outerAngle, flags);
    }

    /**
     * Draws a gizmo. This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * This should be used from JavaScript or another language supporting mutable buffers like ArrayBuffer.
     *
     * Matrix layout is as follows:
     *
     * *   Element \[0], \[1] and \[2] should represent the right vector.
     * *   Element \[4], \[5] and \[6] should represent the forward vector.
     * *   Element \[8], \[9] and \[10] should represent the up vector.
     * *   Element \[12], \[13] and \[14] should represent X, Y and Z translation coordinates.
     * *   All other elements should be \[0, 0, 0, 1].
     *
     * Hash: 0xEB2EDCA2
     */
    export function drawGizmo(matrixPtr: number, id: string): boolean {
        return DrawGizmo(matrixPtr, id);
    }

    /**
     * Draw a glow sphere this frame. Up to 256 per single frame.
     *
     * Hash: 0xBD25EC89
     */
    export function drawGlowSphere(pos: Vector3, radius: number, colorR: number, colorG: number, colorB: number, intensity: number, invert: boolean, marker: boolean): void {
        DrawGlowSphere(pos.x, pos.y, pos.z, radius, colorR, colorG, colorB, intensity, invert, marker);
    }

    /**
     * Like DRAW_RECT, but it's a line.
     *
     * Hash: 0xB856A90
     */
    export function drawLine2d(x1: number, y1: number, x2: number, y2: number, width: number, r: number, g: number, b: number, a: number): void {
        DrawLine2d(x1, y1, x2, y2, width, r, g, b, a);
    }

    /**
     * DRAW_RECT, but with a rotation. Seems to be broken.
     *
     * Hash: 0xEC37C168
     */
    export function drawRectRotated(x: number, y: number, width: number, height: number, rotation: number, r: number, g: number, b: number, a: number): void {
        DrawRectRotated(x, y, width, height, rotation, r, g, b, a);
    }

    /**
     * Forces the game snow pass to render.
     *
     * Hash: 0xE6E16170
     */
    export function forceSnowPass(enabled: boolean): void {
        ForceSnowPass(enabled);
    }

    /**
     * Returns the world position the pointer is hovering on the pause map.
     *
     * Hash: 0xE5AF7A82
     */
    export function getPauseMapPointerWorldPosition(): Vector3 {
        return new Vector3(GetPauseMapPointerWorldPosition());
    }

    /**
     * Gets the height of the specified runtime texture.
     *
     * Hash: 0x3574AACE
     */
    export function getRuntimeTextureHeight(tex: number): number {
        return GetRuntimeTextureHeight(tex);
    }

    /**
     * Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.
     *
     * Hash: 0xCA0A085F
     */
    export function getRuntimeTexturePitch(tex: number): number {
        return GetRuntimeTexturePitch(tex);
    }

    /**
     * Gets the width of the specified runtime texture.
     *
     * Hash: 0xC9F55558
     */
    export function getRuntimeTextureWidth(tex: number): number {
        return GetRuntimeTextureWidth(tex);
    }

    /**
     * Returns whether or not the specific minimap overlay has loaded.
     *
     * Hash: 0xF7535F32
     */
    export function hasMinimapOverlayLoaded(id: number): boolean {
        return HasMinimapOverlayLoaded(id);
    }

    /**
     * Experimental natives, please do not use in a live environment.
     *
     * Hash: 0xA896B20A
     */
    export function removeReplaceTexture(origTxd: string, origTxn: string): void {
        RemoveReplaceTexture(origTxd, origTxn);
    }

    /**
     * This function undoes changes made by [`SET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE`](#\_0x68DFF2DD), restoring the original outline rendering behavior. The default render technique group is `unlit`.
     *
     * Hash: 0x8EB6EC38
     */
    export function resetEntityDrawOutlineRenderTechnique(): void {
        ResetEntityDrawOutlineRenderTechnique();
    }

    /**
     * Draws an outline around a given entity. This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0x76180407
     */
    export function setEntityDrawOutline(entity: number | Entity, enabled: boolean): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        SetEntityDrawOutline(_entity, enabled);
    }

    /**
     * Sets color for entity outline. `255, 0, 255, 255` by default.
     *
     * Hash: 0xB41A56C2
     */
    export function setEntityDrawOutlineColor(red: number, green: number, blue: number, alpha: number): void {
        SetEntityDrawOutlineColor(red, green, blue, alpha);
    }

    /**
     * Sets the render technique for drawing an entity's outline. This function allows you to specify a technique group name to control how the entity's outline is rendered in the game.
     *
     * List of known technique group's:
     *
     * ```
     * alt0
     * alt1
     * alt2
     * alt3
     * alt4
     * alt5
     * alt6
     * alt7
     * alt8
     * blit
     * cube
     * default
     * geometry
     * imposter
     * imposterdeferred
     * lightweight0
     * lightweight0CutOut
     * lightweight0CutOutTint
     * lightweight0WaterRefractionAlpha
     * lightweight4
     * lightweight4CutOut
     * lightweight4CutOutTint
     * lightweight4WaterRefractionAlpha
     * lightweight8
     * lightweight8CutOut
     * lightweight8CutOutTint
     * lightweight8WaterRefractionAlpha
     * lightweightHighQuality0
     * lightweightHighQuality0CutOut
     * lightweightHighQuality0WaterRefractionAlpha
     * lightweightHighQuality4
     * lightweightHighQuality4CutOut
     * lightweightHighQuality4WaterRefractionAlpha
     * lightweightHighQuality8
     * lightweightHighQuality8CutOut
     * lightweightHighQuality8WaterRefractionAlpha
     * lightweightNoCapsule4
     * lightweightNoCapsule8
     * multilight
     * tessellate
     * ui
     * unlit
     * waterreflection
     * waterreflectionalphaclip
     * waterreflectionalphacliptint
     * wdcascade
     * ```
     *
     * Hash: 0x68DFF2DD
     */
    export function setEntityDrawOutlineRenderTechnique(techniqueGroup: string): void {
        SetEntityDrawOutlineRenderTechnique(techniqueGroup);
    }

    /**
     * Sets variant of shader that will be used to draw entity outline.
     *
     * Variants are:
     *
     * *   **0**: Default value, gauss shader.
     * *   **1**: 2px wide solid color outline.
     * *   **2**: Fullscreen solid color except for entity.
     *
     * Hash: 0x5261A01A
     */
    export function setEntityDrawOutlineShader(shader: number): void {
        SetEntityDrawOutlineShader(shader);
    }

    /**
     * This completely disables rendering of fog volumes (vfxfogvolumeinfo.ymt).
     *
     * Hash: 0xFBC64DA3
     */
    export function setFogVolumeRenderDisabled(state: boolean): void {
        SetFogVolumeRenderDisabled(state);
    }

    /**
     * Sets the type for the minimap blip clipping object to be either rectangular or rounded.
     *
     * Hash: 0xB8B4490C
     */
    export function setMinimapClipType(_type: number): void {
        SetMinimapClipType(_type);
    }

    /**
     * Overrides the minimap component data (from `common:/data/ui/frontend.xml`) for a specified component.
     *
     * Hash: 0x3E882B23
     */
    export function setMinimapComponentPosition(name: string, alignX: string, alignY: string, posX: number, posY: number, sizeX: number, sizeY: number): void {
        SetMinimapComponentPosition(name, alignX, alignY, posX, posY, sizeX, sizeY);
    }

    /**
     * Sets the display info for a minimap overlay.
     *
     * Hash: 0x6A48B3CA
     */
    export function setMinimapOverlayDisplay(miniMap: number, x: number, y: number, xScale: number, yScale: number, alpha: number): void {
        SetMinimapOverlayDisplay(miniMap, x, y, xScale, yScale, alpha);
    }

    /**
     * No comment provided
     *
     * Hash: 0x3963D527
     */
    export function setRuntimeTextureArgbData(tex: number, buffer: string, length: number): boolean {
        return SetRuntimeTextureArgbData(tex, buffer, length);
    }

    /**
     * Replaces the pixel data in a runtime texture with the image data from a file in the current resource, or a data URL.
     *
     * If the bitmap is a different size compared to the existing texture, it will be resampled.
     *
     * This command may end up executed asynchronously, and only update the texture data at a later time.
     *
     * Hash: 0x28FC4ECB
     */
    export function setRuntimeTextureImage(tex: number, fileName: string): boolean {
        return SetRuntimeTextureImage(tex, fileName);
    }

    /**
     * Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.
     *
     * Hash: 0xAB65ACEE
     */
    export function setRuntimeTexturePixel(tex: number, x: number, y: number, r: number, g: number, b: number, a: number): void {
        SetRuntimeTexturePixel(tex, x, y, r, g, b, a);
    }

    /**
     * Modifies the radius scale used in the simulation of wet cloth physics.
     * This affects how cloth behaves when wet, changing how it sticks or reacts to movement.
     *
     * Hash: 0xF1BD2CEF
     */
    export function setWetClothPinRadiusScale(scale: number): void {
        SetWetClothPinRadiusScale(scale);
    }

    /**
     * Resets the screen's draw-origin which was changed by the function [`SET_DRAW_ORIGIN`](#\_0xE10198D5) back to `x=0, y=0`. See [`SET_DRAW_ORIGIN`](#\_0xE10198D5) for further information.
     *
     * Hash: 0xDD76B263
     */
    export function clearDrawOrigin(): void {
        ClearDrawOrigin();
    }

    /**
     * In compare to `0x31DC8D3F216D8509` return true if texture its created when `0x31DC8D3F216D8509` return true if you put there any id in valid range
     *
     * Hash: 0x8B25BC20
     */
    export function doesTextureExist(textureId: number): boolean {
        return DoesTextureExist(textureId);
    }

    /**
     * No comment provided
     *
     * Hash: 0xCD4D9DD5
     */
    export function drawBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void {
        DrawBox(x1, y1, z1, x2, y2, z2, red, green, blue, alpha);
    }

    /**
     * No comment provided
     *
     * Hash: 0xB3426BCC
     */
    export function drawLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void {
        DrawLine(x1, y1, z1, x2, y2, z2, red, green, blue, alpha);
    }

    /**
     * No comment provided
     *
     * Hash: 0xABD19253
     */
    export function drawPoly(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, red: number, green: number, blue: number, alpha: number): void {
        DrawPoly(x1, y1, z1, x2, y2, z2, x3, y3, z3, red, green, blue, alpha);
    }

    /**
     * Gets the current aspect ratio
     *
     * ```lua
     * local ratio = GetAspectRatio()
     * print(string.format("%.2f", ratio))
     * ```
     *
     * Hash: 0x2CA8F641
     */
    export function getAspectRatio(): number {
        return GetAspectRatio();
    }

    /**
     * Gets the current screen resolution.
     *
     * ```lua
     * local  width, height = GetCurrentScreenResolution()
     * print(string.format("Current screen resolution: %dx%d", width, height))
     *
     * ```
     *
     * Hash: 0x337F0116
     */
    export function getCurrentScreenResolution(): [number, number] {
        return GetCurrentScreenResolution();
    }

    /**
     * Removes the specified texture and remove it from the ped.
     * Unlike `0x6BEFAA907B076859` which only marks the texture as "can be reused" (and keeps it until will be reused), this function deletes it right away. Can fix some sync issues. `DOES_TEXTURE_EXIST` can be use to wait until fully unloaded by game
     *
     * ```lua
     * RemoveTexture(textureId)
     * while DoesTextureExist(textureId) do
     * Wait(0)
     * end
     * ```
     *
     * Hash: 0x1582C7F2
     */
    export function removeTexture(textureId: number): void {
        RemoveTexture(textureId);
    }

    /**
     * Sets the on-screen drawing origin for draw-functions in world coordinates.
     *
     * The effect can be reset by calling [`CLEAR_DRAW_ORIGIN`](#\_0xDD76B263) and is limited to 32 different origins each frame.
     *
     * Hash: 0xE10198D5
     */
    export function setDrawOrigin(pos: Vector3, is2d: boolean): void {
        SetDrawOrigin(pos.x, pos.y, pos.z, is2d);
    }

    /**
     * Sets the text font for the current text drawing command.
     *
     * Hash: 0xADA9255D
     */
    export function setTextFontForCurrentCommand(fontId: number): void {
        SetTextFontForCurrentCommand(fontId);
    }

    /**
     * No comment provided
     *
     * Hash: 0x68CDFA60
     */
    export function setTextJustification(justifyType: number): void {
        SetTextJustification(justifyType);
    }

    /**
     * No comment provided
     *
     * Hash: 0x6F60AB54
     */
    export function setTextWrap(start: number, end: number): void {
        SetTextWrap(start, end);
    }

    /**
     * A getter for [SET_VISUAL_SETTING_FLOAT](#\_0xD1D31681).
     *
     * Hash: 0x15346B4D
     */
    export function getVisualSettingFloat(name: string): number {
        return GetVisualSettingFloat(name);
    }

    /**
     * Overrides a floating point value from `visualsettings.dat` temporarily.
     *
     * Hash: 0xD1D31681
     */
    export function setVisualSettingFloat(name: string, value: number): void {
        SetVisualSettingFloat(name, value);
    }

}


export namespace hud {
    /**
     * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
     *
     * Hash: 0xCD949E20
     */
    export function getComponentAlign(id: number): [number, number] {
        return GetHudComponentAlign(id);
    }

    /**
     * No comment provided
     *
     * Hash: 0xA91866BC
     */
    export function getComponentName(id: number): string {
        return GetHudComponentName(id);
    }

    /**
     * No comment provided
     *
     * Hash: 0x12217D33
     */
    export function getComponentSize(id: number): Vector3 {
        return new Vector3(GetHudComponentSize(id));
    }

    /**
     * Returns the zoom level data by index from mapzoomdata.meta file.
     *
     * Hash: 0x1363A998
     */
    export function getMapZoomDataLevel(index: number): [boolean, number, number, number, number, number] {
        return GetMapZoomDataLevel(index);
    }

    /**
     * Returns true if the minimap is currently expanded. False if it's the normal minimap state.
     * Use [`IsBigmapFull`](#\_0x66EE14B2) to check if the full map is currently revealed on the minimap.
     *
     * Hash: 0xFFF65C63
     */
    export function isBigmapActive(): boolean {
        return IsBigmapActive();
    }

    /**
     * No comment provided
     *
     * Hash: 0x66EE14B2
     */
    export function isBigmapFull(): boolean {
        return IsBigmapFull();
    }

    /**
     * Resets values from the zoom level data by index to defaults from mapzoomdata.meta.
     *
     * Hash: 0x11A5B7ED
     */
    export function resetMapZoomDataLevel(index: number): void {
        ResetMapZoomDataLevel(index);
    }

    /**
     * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
     *
     * Hash: 0xEED219F2
     */
    export function setComponentAlign(id: number, horizontalAlign: number, verticalAlign: number): void {
        SetHudComponentAlign(id, horizontalAlign, verticalAlign);
    }

    /**
     * No comment provided
     *
     * Hash: 0x7644A9FA
     */
    export function setComponentSize(id: number, x: number, y: number): void {
        SetHudComponentSize(id, x, y);
    }

    /**
     * Sets values to the zoom level data by index.
     *
     * Hash: 0x447C718E
     */
    export function setMapZoomDataLevel(index: number, zoomScale: number, zoomSpeed: number, scrollSpeed: number, tilesX: number, tilesY: number): void {
        SetMapZoomDataLevel(index, zoomScale, zoomSpeed, scrollSpeed, tilesX, tilesY);
    }

    /**
     * Get the minimap type:
     *
     * ```
     * 0 = Off,
     * 1 = Regular,
     * 2 = Expanded,
     * 3 = Simple,
     * ```
     *
     * Hash: 0xA6FF71C9
     */
    export function getMinimapType(): number {
        return GetMinimapType();
    }

    /**
     * Possible Types:
     *
     * ```
     * 0 = Off,
     * 1 = Regular,
     * 2 = Expanded,
     * 3 = Simple,
     * ```
     *
     * Hash: 0x5FB53015
     */
    export function setMinimapType(_type: number): void {
        SetMinimapType(_type);
    }

}


export namespace misc {
    /**
     * Adds the given model name hash to the list of valid models for the player ped's parachute.
     *
     * Hash: 0x8AC7AE9
     */
    export function addAuthorizedParachuteModel(modelNameHash: number): void {
        AddAuthorizedParachuteModel(modelNameHash);
    }

    /**
     * Adds the given model name hash to the list of valid models for the player ped's parachute pack.
     *
     * Hash: 0x2E86DEA5
     */
    export function addAuthorizedParachutePackModel(modelNameHash: number): void {
        AddAuthorizedParachutePackModel(modelNameHash);
    }

    /**
     * Adds new health config.
     *
     * Hash: 0x9CBFD5C1
     */
    export function addHealthConfig(configName: string, defaultHealth: number, defaultArmor: number, defaultEndurance: number, fatiguedHealthThreshold: number, injuredHealthThreshold: number, dyingHealthThreshold: number, hurtHealthThreshold: number, dogTakedownThreshold: number, writheFromBulletThreshold: number, meleeCardinalFatalAttack: boolean, invincible: boolean): void {
        AddHealthConfig(configName, defaultHealth, defaultArmor, defaultEndurance, fatiguedHealthThreshold, injuredHealthThreshold, dyingHealthThreshold, hurtHealthThreshold, dogTakedownThreshold, writheFromBulletThreshold, meleeCardinalFatalAttack, invincible);
    }

    /**
     * Disables the editor runtime mode, changing game behavior to not track entity metadata.
     * This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0xB1622B17
     */
    export function disableEditorRuntime(): void {
        DisableEditorRuntime();
    }

    /**
     * Disables the game's afk camera that starts panning around after 30 seconds of inactivity.
     *
     * Hash: 0x3D5AB7F0
     */
    export function disableIdleCamera(state: boolean): void {
        DisableIdleCamera(state);
    }

    /**
     * Enables the editor runtime mode, changing game behavior to track entity metadata.
     * This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0xC383871D
     */
    export function enableEditorRuntime(): void {
        EnableEditorRuntime();
    }

    /**
     * Enters cursor mode, suppressing mouse movement to the game and displaying a mouse cursor instead. This function supports
     * SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0x780DA86
     */
    export function enterCursorMode(): void {
        EnterCursorMode();
    }

    /**
     * A getter for [SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME](#\_0x0B919E1FB47CC4E0).
     *
     * Hash: 0xB550232D
     */
    export function getAmbientPedRangeMultiplier(): number {
        return GetAmbientPedRangeMultiplier();
    }

    /**
     * This native returns the index of a calming quad if the given point is inside its bounds.
     *
     * Hash: 0x870E8B40
     */
    export function getCalmingQuadAtCoords(x: number, y: number): number {
        return GetCalmingQuadAtCoords(x, y);
    }

    /**
     * No comment provided
     *
     * Hash: 0xFF60E63
     */
    export function getCalmingQuadBounds(waterQuad: number): [boolean, number, number, number, number] {
        return GetCalmingQuadBounds(waterQuad);
    }

    /**
     * No comment provided
     *
     * Hash: 0xCEBFC42
     */
    export function getCalmingQuadCount(): number {
        return GetCalmingQuadCount();
    }

    /**
     * No comment provided
     *
     * Hash: 0xB0E3A058
     */
    export function getCalmingQuadDampening(waterQuad: number): [boolean, number] {
        return GetCalmingQuadDampening(waterQuad);
    }

    /**
     * No comment provided
     *
     * Hash: 0x5550BF9F
     */
    export function getFuelConsumptionRateMultiplier(): number {
        return GetFuelConsumptionRateMultiplier();
    }

    /**
     * No comment provided
     *
     * Hash: 0xC66CD90C
     */
    export function getFuelConsumptionState(): boolean {
        return GetFuelConsumptionState();
    }

    /**
     * A getter for [SET_GLOBAL_PASSENGER_MASS_MULTIPLIER](#\_0x3422291C).
     *
     * Hash: 0x78951816
     */
    export function getGlobalPassengerMassMultiplier(): number {
        return GetGlobalPassengerMassMultiplier();
    }

    /**
     * Retrieves the map data entity handle.
     * This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0x30AA6911
     */
    export function getMapdataEntityHandle(mapDataHash: number, entityInternalIdx: number): [boolean, number] {
        return GetMapdataEntityHandle(mapDataHash, entityInternalIdx);
    }

    /**
     * Returns mapdata's entity matrix. This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * This should be used from JavaScript or another language supporting mutable buffers like ArrayBuffer.
     *
     * Matrix layout is as follows:
     *
     * *   Element \[0], \[1] and \[2] should represent the right vector.
     * *   Element \[4], \[5] and \[6] should represent the forward vector.
     * *   Element \[8], \[9] and \[10] should represent the up vector.
     * *   Element \[12], \[13] and \[14] should represent X, Y and Z translation coordinates.
     * *   All other elements should be \[0, 0, 0, 1].
     *
     * Hash: 0x2C3CDA93
     */
    export function getMapdataEntityMatrix(mapDataHash: number, entityInternalIdx: number, matrixPtr: number): boolean {
        return GetMapdataEntityMatrix(mapDataHash, entityInternalIdx, matrixPtr);
    }

    /**
     * Returns the transient map data index for a specified hash.
     * This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0xD29D8EDD
     */
    export function getMapdataFromHashKey(mapdataHandle: number | string): number {
        if (typeof mapdataHandle === 'string') mapdataHandle = game.getHashKey(mapdataHandle)
        return GetMapdataFromHashKey(mapdataHandle);
    }

    /**
     * A getter for [SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xEAE6DCC7EEE3DB1D).
     *
     * Hash: 0xFF72DF84
     */
    export function getParkedVehicleDensityMultiplier(): number {
        return GetParkedVehicleDensityMultiplier();
    }

    /**
     * A getter for [SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xB3B3359379FE77D3).
     * Same as vehicle density multiplier.
     *
     * Hash: 0x7B0D00C5
     */
    export function getRandomVehicleDensityMultiplier(): number {
        return GetRandomVehicleDensityMultiplier();
    }

    /**
     * A getter for [SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x7A556143A1C03898).
     *
     * Hash: 0x77C598B2
     */
    export function getScenarioPedDensityMultiplier(): number {
        return GetScenarioPedDensityMultiplier();
    }

    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Returns whether an asynchronous streaming file registration completed.
     *
     * Hash: 0xA194934D
     */
    export function isStreamingFileReady(registerAs: string): boolean {
        return IsStreamingFileReady(registerAs);
    }

    /**
     * Leaves cursor mode. This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0xADECF19E
     */
    export function leaveCursorMode(): void {
        LeaveCursorMode();
    }

    /**
     * Toggles a check that prevents attaching (networked) entities to remotely owned peds. This is disabled by default.
     *
     * Hash: 0x30CE39D8
     */
    export function onesyncEnableRemoteAttachmentSanitization(enable: boolean): void {
        OnesyncEnableRemoteAttachmentSanitization(enable);
    }

    /**
     * Replaces the `popgroups` (CPopGroupList) meta file with the file in the specified path.
     *
     * Hash: 0xD3BC438F
     */
    export function overridePopGroups(path: string): void {
        OverridePopGroups(path);
    }

    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Registers a set of archetypes with the game engine. These should match `CBaseArchetypeDef` class information from the game.
     *
     * Hash: 0x3C2F9037
     */
    export function registerArchetypes(factory: Function): void {
        RegisterArchetypes(factory);
    }

    /**
     * Registers a specified .gfx file as GFx font library.
     * The .gfx file has to be registered with the streamer already.
     *
     * Hash: 0x1B3A363
     */
    export function registerFontFile(fileName: string): void {
        RegisterFontFile(fileName);
    }

    /**
     * Registers a specified font name for use with text draw commands.
     *
     * Hash: 0xACF6D8EE
     */
    export function registerFontId(fontName: string): number {
        return RegisterFontId(fontName);
    }

    /**
     * Registers a key mapping for the current resource.
     *
     * See the related [cookbook post](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/) for more information.
     *
     * Below you can find some examples on how to create these keybindings as well as the alternate keybinding syntax, which is preceded by `~!` to indicate that it's an alternate key.
     *
     * Hash: 0xD7664FD1
     */
    export function registerKeyMapping(commandString: string, description: string, defaultMapper: string, defaultParameter: string): void {
        RegisterKeyMapping(commandString, description, defaultMapper, defaultParameter);
    }

    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Registers a dynamic streaming asset from the server with the GTA streaming module system.
     *
     * Hash: 0xCEAD2D4B
     */
    export function registerStreamingFileFromCache(resourceName: string, fileName: string, cacheString: string): void {
        RegisterStreamingFileFromCache(resourceName, fileName, cacheString);
    }

    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Registers a KVP value as an asset with the GTA streaming module system. This function currently won't work.
     *
     * Hash: 0x1493DCC1
     */
    export function registerStreamingFileFromKvs(kvsKey: string): void {
        RegisterStreamingFileFromKvs(kvsKey);
    }

    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Registers a file from an URL as a streaming asset in the GTA streaming subsystem. This will asynchronously register the asset, and caching is done based on the URL itself - cache headers are ignored.
     *
     * Use `IS_STREAMING_FILE_READY` to check if the asset has been registered successfully.
     *
     * Hash: 0xF44BFB95
     */
    export function registerStreamingFileFromUrl(registerAs: string, url: string): void {
        RegisterStreamingFileFromUrl(registerAs, url);
    }

    /**
     * Removes health config.
     *
     * Hash: 0xE0ED5FB
     */
    export function removeHealthConfig(configName: string): void {
        RemoveHealthConfig(configName);
    }

    /**
     * Adds a cooldown between instances of moving and then aiming.
     * Can be optionally used to hinder 'speedboosting'
     * To turn off, set value to 0
     *
     * Hash: 0xA42A3DBF
     */
    export function setAimCooldown(value: number): void {
        SetAimCooldown(value);
    }

    /**
     * No comment provided
     *
     * Hash: 0xC5945BD9
     */
    export function setCalmingQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean {
        return SetCalmingQuadBounds(waterQuad, minX, minY, maxX, maxY);
    }

    /**
     * No comment provided
     *
     * Hash: 0x67977501
     */
    export function setCalmingQuadDampening(calmingQuad: number, dampening: number): boolean {
        return SetCalmingQuadDampening(calmingQuad, dampening);
    }

    /**
     * Allows Weapon-Flashlight beams to stay visible while moving. Normally it only stays on while aiming.
     *
     * Hash: 0x7635B349
     */
    export function setFlashLightKeepOnWhileMoving(state: boolean): void {
        SetFlashLightKeepOnWhileMoving(state);
    }

    /**
     * Sets fuel consumption rate multiplier for all vehicles operated by a player. This is a way to slow down or speed up fuel consumption for all vehicles at a time. If 0 - it practically means that fuel will not be consumed. By default is set to 1.
     *
     * When the multiplier is set to 1 a default 65 litre gas tank car with average fuel consumption can stay idle for ~16.67 hours or run with max RPM for ~2.5 hours.
     *
     * To customize fuel consumption per vehicle / vehicle class use [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolConsumptionRate`. By default it is set to 0.5 for all vehicles.
     *
     * Hash: 0x845F3E5C
     */
    export function setFuelConsumptionRateMultiplier(multiplier: number): void {
        SetFuelConsumptionRateMultiplier(multiplier);
    }

    /**
     * Turns on and off fuel consumption in all vehicles operated by a player. NPC operated vehicles will not consume fuel to avoid traffic disruptions.
     *
     * The default Gta5 behaviour is fuel consumption turned off.
     *
     * Hash: 0x81DAD03E
     */
    export function setFuelConsumptionState(state: boolean): void {
        SetFuelConsumptionState(state);
    }

    /**
     * No comment provided
     *
     * Hash: 0x1C47F6AC
     */
    export function setGlobalPassengerMassMultiplier(massMul: number): void {
        SetGlobalPassengerMassMultiplier(massMul);
    }

    /**
     * Sets default armor value for specific health config.
     *
     * Hash: 0x20A1E6A2
     */
    export function setHealthConfigDefaultArmor(configName: string, newValue: number): void {
        SetHealthConfigDefaultArmor(configName, newValue);
    }

    /**
     * Sets default endurance value for specific health config.
     *
     * Hash: 0x60F20B81
     */
    export function setHealthConfigDefaultEndurance(configName: string, newValue: number): void {
        SetHealthConfigDefaultEndurance(configName, newValue);
    }

    /**
     * Sets default health value for specific health config.
     *
     * Hash: 0xC705C778
     */
    export function setHealthConfigDefaultHealth(configName: string, newValue: number): void {
        SetHealthConfigDefaultHealth(configName, newValue);
    }

    /**
     * Sets default dog takedown threshold value for specific health config.
     *
     * Hash: 0x9A995E96
     */
    export function setHealthConfigDogTakedownThreshold(configName: string, newValue: number): void {
        SetHealthConfigDogTakedownThreshold(configName, newValue);
    }

    /**
     * Sets default dying health threshold value for specific health config.
     *
     * Hash: 0x9B00FD77
     */
    export function setHealthConfigDyingThreshold(configName: string, newValue: number): void {
        SetHealthConfigDyingThreshold(configName, newValue);
    }

    /**
     * Sets default fatigued health threshold value for specific health config.
     *
     * Hash: 0xC58953FD
     */
    export function setHealthConfigFatiguedThreshold(configName: string, newValue: number): void {
        SetHealthConfigFatiguedThreshold(configName, newValue);
    }

    /**
     * Sets default hurt health threshold value for specific health config.
     *
     * Hash: 0x98DF1A83
     */
    export function setHealthConfigHurtThreshold(configName: string, newValue: number): void {
        SetHealthConfigHurtThreshold(configName, newValue);
    }

    /**
     * Sets default injured health threshold value for specific health config.
     *
     * Hash: 0xF9D9B647
     */
    export function setHealthConfigInjuredThreshold(configName: string, newValue: number): void {
        SetHealthConfigInjuredThreshold(configName, newValue);
    }

    /**
     * Sets default invincible value for specific health config.
     *
     * Hash: 0x4A9EEDE6
     */
    export function setHealthConfigInvincible(configName: string, newValue: boolean): void {
        SetHealthConfigInvincible(configName, newValue);
    }

    /**
     * Sets default melee cardinal fatal attack value for specific health config.
     *
     * Hash: 0xDD443E53
     */
    export function setHealthConfigMeleeFatalAttack(configName: string, newValue: boolean): void {
        SetHealthConfigMeleeFatalAttack(configName, newValue);
    }

    /**
     * Sets default writhe from bullet threshold value for specific health config.
     *
     * Hash: 0xE97633CB
     */
    export function setHealthConfigWritheFromBulletThreshold(configName: string, newValue: number): void {
        SetHealthConfigWritheFromBulletThreshold(configName, newValue);
    }

    /**
     * Overrides how many real ms are equal to one game minute.
     * A setter for [`GetMillisecondsPerGameMinute`](#\_0x2F8B4D1C595B11DB).
     *
     * Hash: 0x36CA2554
     */
    export function setMillisecondsPerGameMinute(value: number): void {
        SetMillisecondsPerGameMinute(value);
    }

    /**
     * <strong>This native is deprecated and does nothing!</strong>
     *
     * Hash: 0x7F6B8D75
     */
    export function setModelHeadlightConfiguration(modelHash: number | string, ratePerSecond: number, headlightRotation: number, invertRotation: boolean): void {
        if (typeof modelHash === 'string') modelHash = game.getHashKey(modelHash)
        SetModelHeadlightConfiguration(modelHash, ratePerSecond, headlightRotation, invertRotation);
    }

    /**
     * Sets whether all tags should group (normal game behavior) or should remain independent and above each ped's respective head when in a vehicle.
     *
     * Hash: 0x7A27BC93
     */
    export function setMpGamerTagsUseVehicleBehavior(enabled: boolean): void {
        SetMpGamerTagsUseVehicleBehavior(enabled);
    }

    /**
     * Sets the maximum distance at which all tags will be visible and which beyond will not be displayed. Distance is measured from the camera position.
     *
     * Hash: 0xD61676B3
     */
    export function setMpGamerTagsVisibleDistance(distance: number): void {
        SetMpGamerTagsVisibleDistance(distance);
    }

    /**
     * Registers a keymap that will be triggered whenever `rawKeyIndex` is pressed or released.
     *
     * `onKeyUp` and `onKeyDown` will not provide any arguments.
     *
     * ```ts
     * function onStateChange();
     * ```
     *
     * Hash: 0x49C1F6DC
     */
    export function registerRawKeymap(keymapName: string, onKeyDown: Function, onKeyUp: Function, rawKeyIndex: number, canBeDisabled: boolean): void {
        RegisterRawKeymap(keymapName, onKeyDown, onKeyUp, rawKeyIndex, canBeDisabled);
    }

    /**
     * Remaps the keymap bound to `keymapName` to `newRawKeyIndex`
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0x6E38C1B9
     */
    export function remapRawKeymap(keymapName: string, newRawKeyIndex: number): void {
        RemapRawKeymap(keymapName, newRawKeyIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0xC44C2F44
     */
    export function setBackfaceculling(toggle: boolean): void {
        SetBackfaceculling(toggle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x8A7A8DAC
     */
    export function setCursorLocation(x: number, y: number): boolean {
        return SetCursorLocation(x, y);
    }

    /**
     * Sets whether or not ownership checks should be performed while trying to stow a carriable on a hunting wagon.
     *
     * Hash: 0x85A10FFD
     */
    export function setIgnoreVehicleOwnershipForStowing(ignore: boolean): void {
        SetIgnoreVehicleOwnershipForStowing(ignore);
    }

    /**
     * Activates built-in timecycle editing tool.
     *
     * Hash: 0xEEB9B76A
     */
    export function activateTimecycleEditor(): void {
        ActivateTimecycleEditor();
    }

    /**
     * No comment provided
     *
     * Hash: 0x3422291C
     */
    export function applyWeatherCycles(numEntries: number, msPerCycle: number): boolean {
        return ApplyWeatherCycles(numEntries, msPerCycle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x54D636B3
     */
    export function cloneTimecycleModifier(sourceModifierName: string, clonedModifierName: string): number {
        return CloneTimecycleModifier(sourceModifierName, clonedModifierName);
    }

    /**
     * Create a clean timecycle modifier. See [`SET_TIMECYCLE_MODIFIER_VAR`](#\_0x6E0A422B) to add variables.
     *
     * Hash: 0x70FA2AFA
     */
    export function createTimecycleModifier(modifierName: string): number {
        return CreateTimecycleModifier(modifierName);
    }

    /**
     * Disables the game's world horizon lods rendering (see `farlods.#dd`).
     * Using the island hopper natives might also affect this state.
     *
     * Hash: 0xA9C92CDC
     */
    export function disableWorldhorizonRendering(state: boolean): void {
        DisableWorldhorizonRendering(state);
    }

    /**
     * No comment provided
     *
     * Hash: 0xC53BB6D3
     */
    export function doesTimecycleModifierHasVar(modifierName: string, varName: string): boolean {
        return DoesTimecycleModifierHasVar(modifierName, varName);
    }

    /**
     * No comment provided
     *
     * Hash: 0xDEDA4E50
     */
    export function endFindObject(findHandle: number): void {
        EndFindObject(findHandle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9615C2AD
     */
    export function endFindPed(findHandle: number): void {
        EndFindPed(findHandle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x3C407D53
     */
    export function endFindPickup(findHandle: number): void {
        EndFindPickup(findHandle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9227415A
     */
    export function endFindVehicle(findHandle: number): void {
        EndFindVehicle(findHandle);
    }

    /**
     * This native is not implemented.
     *
     * Hash: 0xD2CB95A3
     */
    export function experimentalLoadCloneCreate(data: string, objectId: number, tree: string): number {
        return ExperimentalLoadCloneCreate(data, objectId, tree);
    }

    /**
     * This native is not implemented.
     *
     * Hash: 0x6BC189AC
     */
    export function experimentalLoadCloneSync(entity: number | Entity, data: string): void {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        ExperimentalLoadCloneSync(_entity, data);
    }

    /**
     * This native is not implemented.
     *
     * Hash: 0x9D65CAD2
     */
    export function experimentalSaveCloneCreate(entity: number | Entity): string {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return ExperimentalSaveCloneCreate(_entity);
    }

    /**
     * This native is not implemented.
     *
     * Hash: 0x38D19210
     */
    export function experimentalSaveCloneSync(entity: number | Entity): string {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return ExperimentalSaveCloneSync(_entity);
    }

    /**
     * No comment provided
     *
     * Hash: 0xFAA6CB5D
     */
    export function findFirstObject(): [number, number] {
        return FindFirstObject();
    }

    /**
     * No comment provided
     *
     * Hash: 0xFB012961
     */
    export function findFirstPed(): [number, number] {
        return FindFirstPed();
    }

    /**
     * No comment provided
     *
     * Hash: 0x3FF9D340
     */
    export function findFirstPickup(): [number, number] {
        return FindFirstPickup();
    }

    /**
     * No comment provided
     *
     * Hash: 0x15E55694
     */
    export function findFirstVehicle(): [number, number] {
        return FindFirstVehicle();
    }

    /**
     * No comment provided
     *
     * Hash: 0x4E129DBF
     */
    export function findNextObject(findHandle: number): [boolean, number] {
        return FindNextObject(findHandle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xAB09B548
     */
    export function findNextPed(findHandle: number): [boolean, number] {
        return FindNextPed(findHandle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x4107EF0F
     */
    export function findNextPickup(findHandle: number): [boolean, number] {
        return FindNextPickup(findHandle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x8839120D
     */
    export function findNextVehicle(findHandle: number): [boolean, number] {
        return FindNextVehicle(findHandle);
    }

    /**
     * This native returns the currently used game's name.
     *
     * Hash: 0xACA18ECD
     */
    export function getCurrentGameName(): string {
        return GetCurrentGameName();
    }

    /**
     * Returns the peer address of the remote game server that the user is currently connected to.
     *
     * Hash: 0xEA11BFBA
     */
    export function getCurrentServerEndpoint(): string {
        return GetCurrentServerEndpoint();
    }

    /**
     * No comment provided
     *
     * Hash: 0xFE2A1D4D
     */
    export function getTimecycleModifierCount(): number {
        return GetTimecycleModifierCount();
    }

    /**
     * No comment provided
     *
     * Hash: 0x5F4CD0E2
     */
    export function getTimecycleModifierIndexByName(modifierName: string): number {
        return GetTimecycleModifierIndexByName(modifierName);
    }

    /**
     * No comment provided
     *
     * Hash: 0x28CB8608
     */
    export function getTimecycleModifierNameByIndex(modifierIndex: number): string {
        return GetTimecycleModifierNameByIndex(modifierIndex);
    }

    /**
     * A getter for [SET_TIMECYCLE_MODIFIER_STRENGTH](#\_0x82E7FFCD5B2326B3).
     *
     * Hash: 0xBE54124A
     */
    export function getTimecycleModifierStrength(): number {
        return GetTimecycleModifierStrength();
    }

    /**
     * No comment provided
     *
     * Hash: 0xA7109E12
     */
    export function getTimecycleModifierVar(modifierName: string, varName: string): [boolean, number, number] {
        return GetTimecycleModifierVar(modifierName, varName);
    }

    /**
     * No comment provided
     *
     * Hash: 0x60FB60FE
     */
    export function getTimecycleModifierVarCount(modifierName: string): number {
        return GetTimecycleModifierVarCount(modifierName);
    }

    /**
     * No comment provided
     *
     * Hash: 0xE874AB1D
     */
    export function getTimecycleModifierVarNameByIndex(modifierName: string, modifierVarIndex: number): string {
        return GetTimecycleModifierVarNameByIndex(modifierName, modifierVarIndex);
    }

    /**
     * Returns the amount of variables available to be applied on timecycle modifiers.
     *
     * Hash: 0x838B34D8
     */
    export function getTimecycleVarCount(): number {
        return GetTimecycleVarCount();
    }

    /**
     * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
     *
     * Hash: 0x3B90238
     */
    export function getTimecycleVarDefaultValueByIndex(varIndex: number): number {
        return GetTimecycleVarDefaultValueByIndex(varIndex);
    }

    /**
     * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
     *
     * Hash: 0xC6C55AAF
     */
    export function getTimecycleVarNameByIndex(varIndex: number): string {
        return GetTimecycleVarNameByIndex(varIndex);
    }

    /**
     * Converts a screen coordinate into its relative world coordinate.
     *
     * Hash: 0xC81D0659
     */
    export function getWorldCoordFromScreenCoord(screenSize: Vector2): [Vector3, Vector3] {
        return GetWorldCoordFromScreenCoord(screenSize.x, screenSize.y);
    }

    /**
     * No comment provided
     *
     * Hash: 0x36DF8612
     */
    export function removeTimecycleModifier(modifierName: string): void {
        RemoveTimecycleModifier(modifierName);
    }

    /**
     * No comment provided
     *
     * Hash: 0x5A5E0D05
     */
    export function removeTimecycleModifierVar(modifierName: string, varName: string): void {
        RemoveTimecycleModifierVar(modifierName, varName);
    }

    /**
     * Requests a resource file set with the specified name to be downloaded and mounted on top of the current resource.
     *
     * Resource file sets are specified in `fxmanifest.lua` with the following syntax:
     *
     * ```lua
     * file_set 'addon_ui' {
     * 'ui/addon/index.html',
     * 'ui/addon\/\**.js',
     * }
     * ```
     *
     * This command will trigger a script error if the request failed.
     *
     * Hash: 0xE7490533
     */
    export function requestResourceFileSet(setName: string): boolean {
        return RequestResourceFileSet(setName);
    }

    /**
     * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
     *
     * Hash: 0x8BBE6CC0
     */
    export function sendLoadingScreenMessage(jsonString: string): boolean {
        return SendLoadingScreenMessage(jsonString);
    }

    /**
     * Toggles the visibility of resource names in the FiveM key mapping page.
     *
     * Hash: 0xCB0241B5
     */
    export function setKeyMappingHideResources(hide: boolean): void {
        SetKeyMappingHideResources(hide);
    }

    /**
     * No comment provided
     *
     * Hash: 0xA7DD3209
     */
    export function setSnakeoilForEntry(name: string, path: string, data: string): void {
        SetSnakeoilForEntry(name, path, data);
    }

    /**
     * No comment provided
     *
     * Hash: 0x97B2F9F8
     */
    export function setTextChatEnabled(enabled: boolean): boolean {
        return SetTextChatEnabled(enabled);
    }

    /**
     * No comment provided
     *
     * Hash: 0x6E0A422B
     */
    export function setTimecycleModifierVar(modifierName: string, varName: string, value1: number, value2: number): void {
        SetTimecycleModifierVar(modifierName, varName, value1, value2);
    }

    /**
     * No comment provided
     *
     * Hash: 0xD264D4E1
     */
    export function setWeatherCycleEntry(index: number, typeName: string, timeMult: number): boolean {
        return SetWeatherCycleEntry(index, typeName, timeMult);
    }

    /**
     * Sets whether or not the weather should be owned by the network subsystem.
     *
     * To be able to use [\_SET_WEATHER_TYPE_TRANSITION](#\_0x578C752848ECFA0C), this has to be set to false.
     *
     * Hash: 0x2703D582
     */
    export function setWeatherOwnedByNetwork(network: boolean): void {
        SetWeatherOwnedByNetwork(network);
    }

    /**
     * The backing function for TriggerLatentServerEvent.
     *
     * Hash: 0x128737EA
     */
    export function triggerLatentServerEventInternal(eventName: string, eventPayload: string, payloadLength: number, bps: number): void {
        TriggerLatentServerEventInternal(eventName, eventPayload, payloadLength, bps);
    }

    /**
     * The backing function for TriggerServerEvent.
     *
     * Hash: 0x7FDD1128
     */
    export function triggerServerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void {
        TriggerServerEventInternal(eventName, eventPayload, payloadLength);
    }

    /**
     * Adds a listener for Console Variable changes.
     *
     * The function called expects to match the following signature:
     *
     * ```ts
     * function ConVarChangeListener(conVarName: string, reserved: any);
     * ```
     *
     * *   **conVarName**: The ConVar that changed.
     * *   **reserved**: Currently unused.
     *
     * Hash: 0xAB7F7241
     */
    export function addConvarChangeListener(conVarFilter: string, handler: Function): number {
        return AddConvarChangeListener(conVarFilter, handler);
    }

    /**
     * Adds a handler for changes to a state bag.
     *
     * The function called expects to match the following signature:
     *
     * ```ts
     * function StateBagChangeHandler(bagName: string, key: string, value: any, reserved: number, replicated: boolean);
     * ```
     *
     * *   **bagName**: The internal bag ID for the state bag which changed. This is usually `player:Source`, `entity:NetID`
     * or `localEntity:Handle`.
     * *   **key**: The changed key.
     * *   **value**: The new value stored at key. The old value is still stored in the state bag at the time this callback executes.
     * *   **reserved**: Currently unused.
     * *   **replicated**: Whether the set is meant to be replicated.
     *
     * At this time, the change handler can't opt to reject changes.
     *
     * If bagName refers to an entity, use [GET_ENTITY_FROM_STATE_BAG_NAME](#\_0x4BDF1867) to get the entity handle
     * If bagName refers to a player, use [GET_PLAYER_FROM_STATE_BAG_NAME](#\_0xA56135E0) to get the player handle
     *
     * Hash: 0x5BA35AAF
     */
    export function addStateBagChangeHandler(keyFilter: string, bagFilter: string, handler: Function): number {
        return AddStateBagChangeHandler(keyFilter, bagFilter, handler);
    }

    /**
     * Cancels the currently executing event.
     *
     * Hash: 0xFA29D35D
     */
    export function cancelEvent(): void {
        CancelEvent();
    }

    /**
     * No comment provided
     *
     * Hash: 0x1E86F206
     */
    export function deleteFunctionReference(referenceIdentity: string): void {
        DeleteFunctionReference(referenceIdentity);
    }

    /**
     * No comment provided
     *
     * Hash: 0xF4E2079D
     */
    export function duplicateFunctionReference(referenceIdentity: string): string {
        return DuplicateFunctionReference(referenceIdentity);
    }

    /**
     * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
     *
     * Hash: 0x561C060B
     */
    export function executeCommand(commandString: string): void {
        ExecuteCommand(commandString);
    }

    /**
     * An internal function for converting a stack trace object to a string.
     *
     * Hash: 0xD70C3BCA
     */
    export function formatStackTrace(traceData: number | Object): string {
        const _traceData = traceData instanceof Object ? traceData.handle() : traceData;
        return FormatStackTrace(_traceData);
    }

    /**
     * Can be used to get a console variable of type `char*`, for example a string.
     *
     * Hash: 0x6CCD2564
     */
    export function getConvar(varName: string, default_: string): string {
        return GetConvar(varName, default_);
    }

    /**
     * Can be used to get a console variable casted back to `bool`.
     *
     * Hash: 0x7E8EBFE5
     */
    export function getConvarBool(varName: string, defaultValue: boolean): boolean {
        return GetConvarBool(varName, defaultValue);
    }

    /**
     * This will have floating point inaccuracy.
     *
     * Hash: 0x9E666D
     */
    export function getConvarFloat(varName: string, defaultValue: number): number {
        return GetConvarFloat(varName, defaultValue);
    }

    /**
     * Can be used to get a console variable casted back to `int` (an integer value).
     *
     * Hash: 0x935C0AB2
     */
    export function getConvarInt(varName: string, default_: number): number {
        return GetConvarInt(varName, default_);
    }

    /**
     * Returns the internal build number of the current game being executed.
     *
     * Possible values:
     *
     * *   FiveM
     * *   1604
     * *   2060
     * *   2189
     * *   2372
     * *   2545
     * *   2612
     * *   2699
     * *   2802
     * *   2944
     * *   3095
     * *   3258
     * *   3323
     * *   3407
     * *   3570
     * *   RedM
     * *   1311
     * *   1355
     * *   1436
     * *   1491
     * *   LibertyM
     * *   43
     * *   FXServer
     * *   0
     *
     * Hash: 0x804B9F7B
     */
    export function getGameBuildNumber(): number {
        return GetGameBuildNumber();
    }

    /**
     * Returns the current game being executed.
     *
     * Possible values:
     *
     * | Return value | Meaning                        |
     * | ------------ | ------------------------------ |
     * | `fxserver`   | Server-side code ('Duplicity') |
     * | `fivem`      | FiveM for GTA V                |
     * | `libertym`   | LibertyM for GTA IV            |
     * | `redm`       | RedM for Red Dead Redemption 2 |
     *
     * Hash: 0xE8EAA18B
     */
    export function getGameName(): string {
        return GetGameName();
    }

    /**
     * Returns a list of entity handles (script GUID) for all entities in the specified pool - the data returned is an array as
     * follows:
     *
     * ```json
     * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
     * ```
     *
     * ### Supported pools
     *
     * *   `CPed`: Peds (including animals) and players.
     * *   `CObject`: Objects (props), doors, and projectiles.
     * *   `CNetObject`: Networked objects
     * *   `CVehicle`: Vehicles.
     * *   `CPickup`: Pickups.
     *
     * Hash: 0x2B9D4F50
     */
    export function getGamePool(poolName: string): number {
        return GetGamePool(poolName);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9F1C4383
     */
    export function getInstanceId(): number {
        return GetInstanceId();
    }

    /**
     * Returns all commands that are registered in the command system.
     * The data returned adheres to the following layout:
     *
     * ```
     * [
     * {
     * "name": "cmdlist",
     * "resource": "resource",
     * "arity" = -1,
     * },
     * {
     * "name": "command1"
     * "resource": "resource_2",
     * "arity" = -1,
     * }
     * ]
     * ```
     *
     * Hash: 0xD4BEF069
     */
    export function getRegisteredCommands(): number {
        return GetRegisteredCommands();
    }

    /**
     * No comment provided
     *
     * Hash: 0x78D864C7
     */
    export function getStateBagKeys(bagName: string): number {
        return GetStateBagKeys(bagName);
    }

    /**
     * Returns the value of a state bag key.
     *
     * Hash: 0x637F4C75
     */
    export function getStateBagValue(bagName: string, key: string): number {
        return GetStateBagValue(bagName, key);
    }

    /**
     * No comment provided
     *
     * Hash: 0x7EBB9929
     */
    export function isAceAllowed(_object: string): boolean {
        return IsAceAllowed(_object);
    }

    /**
     * Gets whether or not this is the CitizenFX server.
     *
     * Hash: 0xCF24C52E
     */
    export function isDuplicityVersion(): boolean {
        return IsDuplicityVersion();
    }

    /**
     * No comment provided
     *
     * Hash: 0x37CF52CE
     */
    export function isPrincipalAceAllowed(principal: string, _object: string): boolean {
        return IsPrincipalAceAllowed(principal, _object);
    }

    /**
     * Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). Or by entering them in the server console/through an RCON client (only works for server side registered commands). Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a `/`.
     *
     * Commands registered using this function can also be executed by resources, using the [`ExecuteCommand` native](#\_0x561C060B).
     *
     * The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).
     *
     * **Example result**:
     *
     * ![](https://i.imgur.com/TaCnG09.png)
     *
     * Hash: 0x5FA79B0F
     */
    export function registerCommand(commandName: string, handler: Function, restricted: boolean): void {
        RegisterCommand(commandName, handler, restricted);
    }

    /**
     * No comment provided
     *
     * Hash: 0xEAC49841
     */
    export function removeConvarChangeListener(cookie: number): void {
        RemoveConvarChangeListener(cookie);
    }

    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Removes a handler for changes to a state bag.
     *
     * Hash: 0xD36BE661
     */
    export function removeStateBagChangeHandler(cookie: number): void {
        RemoveStateBagChangeHandler(cookie);
    }

    /**
     * Internal function for setting a state bag value.
     *
     * Hash: 0x8D50E33A
     */
    export function setStateBagValue(bagName: string, keyName: string, valueData: string, valueLength: number, replicated: boolean): void {
        SetStateBagValue(bagName, keyName, valueData, valueLength, replicated);
    }

    /**
     * No comment provided
     *
     * Hash: 0x12A330
     */
    export function stateBagHasKey(bagName: string, key: string): boolean {
        return StateBagHasKey(bagName, key);
    }

    /**
     * The backing function for TriggerEvent.
     *
     * Hash: 0x91310870
     */
    export function triggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void {
        TriggerEventInternal(eventName, eventPayload, payloadLength);
    }

    /**
     * Returns whether or not the currently executing event was canceled.
     *
     * Hash: 0x58382A19
     */
    export function wasEventCanceled(): boolean {
        return WasEventCanceled();
    }

}


export namespace ped {
    /**
     * An analogue of [GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS](#\_0x27561561732A7842) that returns number of drawable variations inside a single collection instead of the total number across all collections.
     *
     * Hash: 0x310D0271
     */
    export function getNumberOfCollectionDrawableVariations(ped: number | Ped, componentId: number, collection: string): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetNumberOfPedCollectionDrawableVariations(_ped, componentId, collection);
    }

    /**
     * An analogue of [GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS](#\_0x5FAF9754E789FB47) that returns number of prop variations inside a single collection instead of the total number across all collections.
     *
     * Hash: 0x3B6A13E1
     */
    export function getNumberOfCollectionPropDrawableVariations(ped: number | Ped, anchorPoint: number, collection: string): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetNumberOfPedCollectionPropDrawableVariations(_ped, anchorPoint, collection);
    }

    /**
     * An alternative to [GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS](#\_0xA6E7F1CEB523E171) that uses local collection indexing instead of the global one.
     *
     * Hash: 0x75CAF9CC
     */
    export function getNumberOfCollectionPropTextureVariations(ped: number | Ped, anchorPoint: number, collection: string, propIndex: number): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetNumberOfPedCollectionPropTextureVariations(_ped, anchorPoint, collection, propIndex);
    }

    /**
     * An alternative to [GET_NUMBER_OF_PED_TEXTURE_VARIATIONS](#\_0x8F7156A3142A6BAD) that uses local collection indexing instead of the global one.
     *
     * Hash: 0xD2C15D7
     */
    export function getNumberOfCollectionTextureVariations(ped: number | Ped, componentId: number, collection: string, drawableId: number): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetNumberOfPedCollectionTextureVariations(_ped, componentId, collection, drawableId);
    }

    /**
     * Returns number of variation collections available for the given Ped.
     *
     * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
     *
     * `GET_PED_COLLECTIONS_COUNT` can be used together with [GET_PED_COLLECTION_NAME](#\_0xFED5D83A) to list all collections attached to Ped.
     *
     * Hash: 0x45946359
     */
    export function getCollectionsCount(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedCollectionsCount(_ped);
    }

    /**
     * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B)) for the given global drawable ID. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
     *
     * Hash: 0x94EB1FE4
     */
    export function getCollectionLocalIndexFromDrawable(ped: number | Ped, componentId: number, drawableId: number): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedCollectionLocalIndexFromDrawable(_ped, componentId, drawableId);
    }

    /**
     * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17)) for the given global prop index. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
     *
     * Hash: 0xFBDB885F
     */
    export function getCollectionLocalIndexFromProp(ped: number | Ped, anchorPoint: number, propIndex: number): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedCollectionLocalIndexFromProp(_ped, anchorPoint, propIndex);
    }

    /**
     * Returns name of collection under given index for the given Ped.
     *
     * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
     *
     * `GET_PED_COLLECTION_NAME` can be used together with [GET_PED_COLLECTIONS_COUNT](#\_0x45946359) to list all collections attached to Ped.
     *
     * Hash: 0xFED5D83A
     */
    export function getCollectionName(ped: number | Ped, index: number): string {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedCollectionName(_ped, index);
    }

    /**
     * Gets collection name for the given global drawable ID. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) is used to get collection and local index (inside the given collection) of the drawable. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
     *
     * Hash: 0xD6BBA48B
     */
    export function getCollectionNameFromDrawable(ped: number | Ped, componentId: number, drawableId: number): string {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedCollectionNameFromDrawable(_ped, componentId, drawableId);
    }

    /**
     * Gets collection name for the given global prop index. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) is used to get collection and local index (inside the given collection) of the prop. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
     *
     * Hash: 0x8ED0C17
     */
    export function getCollectionNameFromProp(ped: number | Ped, anchorPoint: number, propIndex: number): string {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedCollectionNameFromProp(_ped, anchorPoint, propIndex);
    }

    /**
     * Returns a list of decorations applied to a ped.
     *
     * The data returned adheres to the following layout:
     *
     * ```
     * [ [ collectionHash1, overlayHash1 ], ..., [c ollectionHashN, overlayHashN ] ]
     * ```
     *
     * This command will return undefined data if invoked on a remote player ped.
     *
     * Hash: 0x7CCE1163
     */
    export function getDecorations(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedDecorations(_ped);
    }

    /**
     * A getter for [SET_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x95E3D6257B166CF2).
     *
     * Hash: 0xF5A904F9
     */
    export function getDensityMultiplier(): number {
        return GetPedDensityMultiplier();
    }

    /**
     * Returns global drawable index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
     *
     * Drawables are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
     *
     * If all drawables from all collections are placed into one continuous array - the global index will correspond to the index of drawable in such array. Local index is index of drawable in this array relative to the start of the given collection.
     *
     * Hash: 0x280F1FC3
     */
    export function getDrawableGlobalIndexFromCollection(ped: number | Ped, componentId: number, collection: string, drawableId: number): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedDrawableGlobalIndexFromCollection(_ped, componentId, collection, drawableId);
    }

    /**
     * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection local drawable index (inside [GET_PED_DRAWABLE_VARIATION_COLLECTION_NAME](#\_0xBCE0AB63) collection) instead of the global drawable index.
     *
     * Hash: 0x9970386F
     */
    export function getDrawableVariationCollectionLocalIndex(ped: number | Ped, componentId: number): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedDrawableVariationCollectionLocalIndex(_ped, componentId);
    }

    /**
     * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection name instead of the global drawable index.
     *
     * Should be used together with [GET_PED_DRAWABLE_VARIATION_COLLECTION_LOCAL_INDEX](#\_0x9970386F).
     *
     * Hash: 0xBCE0AB63
     */
    export function getDrawableVariationCollectionName(ped: number | Ped, componentId: number): string {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedDrawableVariationCollectionName(_ped, componentId);
    }

    /**
     * A getter for [\_SET_PED_EYE_COLOR](#\_0x50B56988B170AFDF). Returns -1 if fails to get.
     *
     * Hash: 0xA47B860F
     */
    export function getEyeColor(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedEyeColor(_ped);
    }

    /**
     * A getter for [\_SET_PED_FACE_FEATURE](#\_0x71A5C1DBA060049E). Returns 0.0 if fails to get.
     *
     * Hash: 0xBA352ADD
     */
    export function getFaceFeature(ped: number | Ped, index: number): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedFaceFeature(_ped, index);
    }

    /**
     * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
     *
     * Hash: 0xA3EA2893
     */
    export function getHairColor(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedHairColor(_ped);
    }

    /**
     * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
     *
     * Hash: 0x4B087305
     */
    export function getHairHighlightColor(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedHairHighlightColor(_ped);
    }

    /**
     * A getter for [SET_PED_HEAD_OVERLAY](#\_0x48F44967FA05CC1E) and [\_SET_PED_HEAD_OVERLAY_COLOR](#\_0x497BF74A7B9CB952) natives.
     *
     * Hash: 0xC46EE605
     */
    export function getHeadOverlayData(ped: number | Ped, index: number): [boolean, number, number, number, number, number] {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedHeadOverlayData(_ped, index);
    }

    /**
     * Gets a ped model's health config.
     *
     * Hash: 0xF71542F7
     */
    export function getModelHealthConfig(modelHash: number | string): number {
        if (typeof modelHash === 'string') modelHash = game.getHashKey(modelHash)
        return GetPedModelHealthConfig(modelHash);
    }

    /**
     * Gets a ped model's personality type.
     *
     * Hash: 0xFE08CAD6
     */
    export function getModelPersonality(modelHash: number | string): number {
        if (typeof modelHash === 'string') modelHash = game.getHashKey(modelHash)
        return GetPedModelPersonality(modelHash);
    }

    /**
     * No comment provided
     *
     * Hash: 0x69E81E3D
     */
    export function getMovementClipset(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedMovementClipset(_ped);
    }

    /**
     * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection local prop index (inside [GET_PED_PROP_COLLECTION_NAME](#\_0x6B5653E4) collection) instead of the global prop index.
     *
     * Hash: 0xCD420AD1
     */
    export function getPropCollectionLocalIndex(ped: number | Ped, anchorPoint: number): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedPropCollectionLocalIndex(_ped, anchorPoint);
    }

    /**
     * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection name instead of the global drawable index.
     *
     * Should be used together with [GET_PED_PROP_COLLECTION_LOCAL_INDEX](#\_0xCD420AD1).
     *
     * Hash: 0x6B5653E4
     */
    export function getPropCollectionName(ped: number | Ped, anchorPoint: number): string {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedPropCollectionName(_ped, anchorPoint);
    }

    /**
     * Returns global prop index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
     *
     * Props are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
     *
     * If all props from all collections are placed into one continuous array - the global index will correspond to the index of the prop in such array. Local index is index of the prop in this array relative to the start of the given collection.
     *
     * Hash: 0x2CB45CDC
     */
    export function getPropGlobalIndexFromCollection(ped: number | Ped, anchorPoint: number, collection: string, propIndex: number): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedPropGlobalIndexFromCollection(_ped, anchorPoint, collection, propIndex);
    }

    /**
     * A getter for [SET_PED_SWEAT](#\_0x27B0405F59637D1F).
     *
     * Hash: 0x44B91E94
     */
    export function getSweat(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedSweat(_ped);
    }

    /**
     * An alternative to [IS_PED_COMPONENT_VARIATION_GEN9\_EXCLUSIVE](#\_0xC767B581) that uses local collection indexing instead of the global one.
     *
     * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
     *
     * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
     *
     * Hash: 0x33B2AFA2
     */
    export function isCollectionComponentVariationGen9Exclusive(ped: number | Ped, componentId: number, collection: string, drawableId: number): boolean {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return IsPedCollectionComponentVariationGen9Exclusive(_ped, componentId, collection, drawableId);
    }

    /**
     * An alternative to [IS_PED_COMPONENT_VARIATION_VALID](#\_0xE825F6B6CEA7671D) that uses local collection indexing instead of the global one.
     *
     * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
     *
     * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
     *
     * Hash: 0xCA63A52A
     */
    export function isCollectionComponentVariationValid(ped: number | Ped, componentId: number, collection: string, drawableId: number, textureId: number): boolean {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return IsPedCollectionComponentVariationValid(_ped, componentId, collection, drawableId, textureId);
    }

    /**
     * No comment provided
     *
     * Hash: 0xC767B581
     */
    export function isComponentVariationGen9Exclusive(ped: number | Ped, componentId: number, drawableId: number): boolean {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return IsPedComponentVariationGen9Exclusive(_ped, componentId, drawableId);
    }

    /**
     * Sets whether peds can stand on top of *all* vehicles without falling off.
     *
     * Note this flag is not replicated automatically, you will have to manually do so.
     *
     * Hash: 0x90A9E0B2
     */
    export function overridesCanStandOnTopFlag(flag: boolean): void {
        OverridePedsCanStandOnTopFlag(flag);
    }

    /**
     * Allows the bypassing of default game behavior that prevents the use of [SET_PED_DRIVE_BY_CLIPSET_OVERRIDE](#\_0xED34AB6C5CB36520) in certain scenarios to avoid clipping issues (e.g., when there is more than one Ped in a vehicle).
     *
     * Note: This flag and the overridden clipset are not replicated values and require synchronization through user scripts. Additionally, current game behavior also restricts applying this clipset locally when in first-person mode and will require a temporary workaround.
     *
     * Hash: 0xB14F8EAD
     */
    export function overridesUseDefaultDriveByClipset(flag: boolean): void {
        OverridePedsUseDefaultDriveByClipset(flag);
    }

    /**
     * Restores an overridden ped model personality type to the default value.
     *
     * Hash: 0x79A12861
     */
    export function resetModelPersonality(modelHash: number | string): void {
        if (typeof modelHash === 'string') modelHash = game.getHashKey(modelHash)
        ResetPedModelPersonality(modelHash);
    }

    /**
     * An alternative to [SET_PED_COMPONENT_VARIATION](#\_0x262B14F48D29DE80) that uses local collection indexing instead of the global one.
     *
     * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
     *
     * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
     *
     * Hash: 0x88711BBA
     */
    export function setCollectionComponentVariation(ped: number | Ped, componentId: number, collection: string, drawableId: number, textureId: number, paletteId: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedCollectionComponentVariation(_ped, componentId, collection, drawableId, textureId, paletteId);
    }

    /**
     * An alternative to [SET_PED_PRELOAD_PROP_DATA](#\_0x2B16A3BFF1FBCE49) that uses local collection indexing instead of the global one.
     *
     * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
     *
     * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
     *
     * Hash: 0x14B5BBE0
     */
    export function setCollectionPreloadPropData(ped: number | Ped, anchorPoint: number, collection: string, propIndex: number, textureId: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedCollectionPreloadPropData(_ped, anchorPoint, collection, propIndex, textureId);
    }

    /**
     * An alternative to [SET_PED_PRELOAD_VARIATION_DATA](#\_0x39D55A620FCB6A3A) that uses local collection indexing instead of the global one.
     *
     * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
     *
     * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
     *
     * Hash: 0x3EC75558
     */
    export function setCollectionPreloadVariationData(ped: number | Ped, componentId: number, collection: string, drawableId: number, textureId: number): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedCollectionPreloadVariationData(_ped, componentId, collection, drawableId, textureId);
    }

    /**
     * An alternative to [SET_PED_PROP_INDEX](#\_0x93376B65A266EB5F) that uses local collection indexing instead of the global one.
     *
     * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
     *
     * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
     *
     * Hash: 0x75240BCB
     */
    export function setCollectionPropIndex(ped: number | Ped, anchorPoint: number, collection: string, propIndex: number, textureId: number, attach: boolean): void {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        SetPedCollectionPropIndex(_ped, anchorPoint, collection, propIndex, textureId, attach);
    }

    /**
     * Override the limits on the number and types of melee combatants. The game is limited to at most ten combatants among the three types: primary, secondary, and observers.
     *
     * This native infers the number of observers based on the primary and secondary counts.
     *
     * Hash: 0x8E51EC29
     */
    export function setMeleeCombatLimits(primaryCount: number, secondaryCount: number, populationPedCount: number): void {
        SetPedMeleeCombatLimits(primaryCount, secondaryCount, populationPedCount);
    }

    /**
     * Sets a ped model's health config.
     * Takes effect only after setting player model with `SET_PLAYER_MODEL`.
     *
     * Hash: 0xAF12A05D
     */
    export function setModelHealthConfig(modelHash: number | string, configName: string): void {
        if (typeof modelHash === 'string') modelHash = game.getHashKey(modelHash)
        SetPedModelHealthConfig(modelHash, configName);
    }

    /**
     * Overrides a ped model personality type.
     *
     * Hash: 0x46F6B38B
     */
    export function setModelPersonality(modelHash: number | string, personalityHash: number | string): void {
        if (typeof modelHash === 'string') modelHash = game.getHashKey(modelHash)
        if (typeof personalityHash === 'string') personalityHash = game.getHashKey(personalityHash)
        SetPedModelPersonality(modelHash, personalityHash);
    }

    /**
     * Purpose: The game's default values for these make shooting while traveling Left quite a bit slower than shooting while traveling right (This could be a game-balance thing?)
     *
     * Default Min: -45 Degrees
     * Default Max: 135 Degrees
     *
     * ```
     * \ ,- ~ ||~ - ,
     * , ' \    x   x    ' ,
     * ```
     *
     * ,      \    x    x   x  ,
     * ,         \  x     x      ,
     * ,            \     x    x  ,
     * ,              \      x    ,
     * ,                \   x     ,
     * ,                 \   x x ,
     * ,                  \  x ,
     * ,                 , '
     * ' - , \_ \_ \_ ,  '  \\
     *
     * If the transition angle is within the shaded portion (x), there will be no transition(Quicker)
     * The angle corresponds to where you are looking(North on the circle) vs. the heading of your Ped.
     * Note: For some reason,
     *
     * You can set these values to whatever you'd like with this native, but keep in mind that the transitional spin is only clockwise for some reason.
     *
     * I'd personally recommend something like -135/135
     *
     * Hash: 0xB300F03
     */
    export function setTurningThresholds(min: number, max: number): void {
        SetPedTurningThresholds(min, max);
    }

    /**
     * Returns the bone matrix of the specified bone id. usefull for entity attachment
     *
     * Hash: 0x9C5E7C9C
     */
    export function getBoneMatrix(ped: number | Ped, boneId: number): [Vector3, Vector3, Vector3, Vector3] {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetPedBoneMatrix(_ped, boneId);
    }

}


export namespace physics {
    /**
     * Returns all rope handles. The data returned adheres to the following layout:
     *
     * ```
     * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
     * ```
     *
     * Hash: 0x760A2D67
     */
    export function getAllRopes(): number {
        return GetAllRopes();
    }

    /**
     * ```cpp
     * enum eRopeFlags
     * {
     * DrawShadowEnabled = 2,
     * Breakable = 4,
     * RopeUnwindingFront = 8,
     * RopeWinding = 32
     * }
     * ```
     *
     * Hash: 0xA80FFE99
     */
    export function getRopeFlags(rope: number): number {
        return GetRopeFlags(rope);
    }

    /**
     * No comment provided
     *
     * Hash: 0x66D70EA3
     */
    export function getRopeLengthChangeRate(rope: number): number {
        return GetRopeLengthChangeRate(rope);
    }

    /**
     * No comment provided
     *
     * Hash: 0xF341E6CA
     */
    export function getRopeTimeMultiplier(rope: number): number {
        return GetRopeTimeMultiplier(rope);
    }

    /**
     * No comment provided
     *
     * Hash: 0x2AB2E0F6
     */
    export function getRopeUpdateOrder(rope: number): number {
        return GetRopeUpdateOrder(rope);
    }

    /**
     * Registers a custom rope data with the game. For guidance on what these values should be use common:/data/ropedata.xml as a reference.
     * Returns a rope type which can be passed into [ADD_ROPE](#\_0xE832D760399EB220) to use a custom rope design.
     * Once a rope data is registered it can be used indefinitely and you should take caution not too register too many as to exceed the games limit.
     *
     * Hash: 0xF213AE8D
     */
    export function registerRopeData(numSections: number, radius: number, diffuseTextureName: string, normalMapName: string, distanceMappingScale: number, uvScaleX: number, uvScaleY: number, specularFresnel: number, specularFalloff: number, specularIntensity: number, bumpiness: number, color: number): number {
        return RegisterRopeData(numSections, radius, diffuseTextureName, normalMapName, distanceMappingScale, uvScaleX, uvScaleY, specularFresnel, specularFalloff, specularIntensity, bumpiness, color);
    }

    /**
     * Resets parameters which is used by the game for checking is ped needs to fly through windscreen after a crash to default values.
     *
     * Hash: 0x6D712937
     */
    export function resetFlyThroughWindscreenParams(): void {
        ResetFlyThroughWindscreenParams();
    }

    /**
     * Sets some in-game parameters which is used for checks is ped needs to fly through windscreen after a crash.
     *
     * Hash: 0x4D3118ED
     */
    export function setFlyThroughWindscreenParams(vehMinSpeed: number, unkMinSpeed: number, unkModifier: number, minDamage: number): boolean {
        return SetFlyThroughWindscreenParams(vehMinSpeed, unkMinSpeed, unkModifier, minDamage);
    }

    /**
     * Toggles whether the usage of [ADD_ROPE](#\_0xE832D760399EB220) should create an underlying CNetworkRopeWorldStateData. By default this is set to false.
     *
     * Hash: 0xE62FC73
     */
    export function setRopesCreateNetworkWorldState(shouldCreate: boolean): void {
        SetRopesCreateNetworkWorldState(shouldCreate);
    }

    /**
     * Set's the ropes length change rate, which is the speed that rope should wind if started.
     *
     * Hash: 0x69B680A7
     */
    export function setRopeLengthChangeRate(rope: number, lengthChangeRate: number): void {
        SetRopeLengthChangeRate(rope, lengthChangeRate);
    }

}


export namespace player {
    /**
     * Unlike [GET_PLAYER_INVINCIBLE](#\_0xB721981B2B939E07) this native gets both [SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED](#\_0x6BC97F4F4BB3C04B) and [SET_PLAYER_INVINCIBLE](#\_0x239528EACDC3E7DE) invincibility state.
     *
     * Hash: 0xF2E3912B
     */
    export function getInvincible2(player: number | string | Player): boolean {
        const _player = player instanceof Player ? player.localId() : player;
        return GetPlayerInvincible2(_player);
    }

    /**
     * No comment provided
     *
     * Hash: 0xD014AB79
     */
    export function getMaxStamina(playerId: number | string | Player): number {
        const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
        return GetPlayerMaxStamina(_playerId);
    }

    /**
     * A getter for [SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER](#\_0xAE540335B4ABC4E2).
     *
     * Hash: 0x27E94EF8
     */
    export function getMeleeWeaponDefenseModifier(playerId: number | string | Player): number {
        const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
        return GetPlayerMeleeWeaponDefenseModifier(_playerId);
    }

    /**
     * No comment provided
     *
     * Hash: 0xE415EC5C
     */
    export function getStamina(playerId: number | string | Player): number {
        const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
        return GetPlayerStamina(_playerId);
    }

    /**
     * A getter for [SET_PLAYER_VEHICLE_DAMAGE_MODIFIER](#\_0xA50E117CDDF82F0C).
     *
     * Hash: 0x78F27B1F
     */
    export function getVehicleDamageModifier(playerId: number | string | Player): number {
        const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
        return GetPlayerVehicleDamageModifier(_playerId);
    }

    /**
     * A getter for [SET_PLAYER_VEHICLE_DEFENSE_MODIFIER](#\_0x4C60E6EFDAFF2462).
     *
     * Hash: 0x8326E7CD
     */
    export function getVehicleDefenseModifier(playerId: number | string | Player): number {
        const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
        return GetPlayerVehicleDefenseModifier(_playerId);
    }

    /**
     * No comment provided
     *
     * Hash: 0x35594F67
     */
    export function setMaxStamina(playerId: number | string | Player, maxStamina: number): boolean {
        const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
        return SetPlayerMaxStamina(_playerId, maxStamina);
    }

    /**
     * No comment provided
     *
     * Hash: 0xA9EC16C7
     */
    export function setStamina(playerId: number | string | Player, stamina: number): boolean {
        const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
        return SetPlayerStamina(_playerId, stamina);
    }

    /**
     * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
     *
     * Hash: 0x8689A825
     */
    export function getMeleeWeaponDamageModifier(playerId: number | string | Player): number {
        const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
        return GetPlayerMeleeWeaponDamageModifier(_playerId);
    }

    /**
     * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
     *
     * Hash: 0x2A3D7CDA
     */
    export function getWeaponDamageModifier(playerId: number | string | Player): number {
        const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
        return GetPlayerWeaponDamageModifier(_playerId);
    }

    /**
     * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
     *
     * Hash: 0xF1543251
     */
    export function getWeaponDefenseModifier(playerId: number | string | Player): number {
        const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
        return GetPlayerWeaponDefenseModifier(_playerId);
    }

    /**
     * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
     *
     * Hash: 0x986B65FF
     */
    export function getWeaponDefenseModifier2(playerId: number | string | Player): number {
        const _playerId = playerId instanceof Player ? playerId.localId() : playerId;
        return GetPlayerWeaponDefenseModifier2(_playerId);
    }

    /**
     * Returns all player indices for 'active' physical players known to the client.
     * The data returned adheres to the following layout:
     *
     * ```
     * [127, 42, 13, 37]
     * ```
     *
     * Hash: 0xCF143FB9
     */
    export function getActives(): number {
        return GetActivePlayers();
    }

    /**
     * Gets a local client's Player ID from its server ID counterpart, assuming the passed `serverId` exists on the client.
     *
     * If no matching client is found, or an invalid value is passed over as the `serverId` native's parameter, the native result will be `-1`.
     *
     * It's worth noting that this native method can only retrieve information about clients that are culled to the connected client.
     *
     * Hash: 0x344EA166
     */
    export function getFromServerId(serverId: number): number | string {
        return GetPlayerFromServerId(serverId);
    }

    /**
     * No comment provided
     *
     * Hash: 0x4D97BCC7
     */
    export function getServerId(player: number | string | Player): number {
        const _player = player instanceof Player ? player.localId() : player;
        return GetPlayerServerId(_player);
    }

    /**
     * the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.
     * This function doesn't need to be called every frame, it works like a switcher.
     *
     * Hash: 0xFC02CAF6
     */
    export function setTalkingOverride(player: number | string | Player, state: boolean): void {
        const _player = player instanceof Player ? player.localId() : player;
        SetPlayerTalkingOverride(_player, state);
    }

    /**
     * On the server this will return the players source, on the client it will return the player handle.
     *
     * Hash: 0xA56135E0
     */
    export function getFromStateBagName(bagName: string): number {
        return GetPlayerFromStateBagName(bagName);
    }

}


export namespace streaming {
    /**
     * No comment provided
     *
     * Hash: 0x322B1192
     */
    export function getInteriorEntitiesExtents(interiorId: number): [number, number, number, number, number, number] {
        return GetInteriorEntitiesExtents(interiorId);
    }

    /**
     * No comment provided
     *
     * Hash: 0xF772BB2C
     */
    export function getInteriorPortalCornerPosition(interiorId: number, portalIndex: number, cornerIndex: number): [number, number, number] {
        return GetInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0xD05BB8B1
     */
    export function getInteriorPortalCount(interiorId: number): number {
        return GetInteriorPortalCount(interiorId);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9A0E1700
     */
    export function getInteriorPortalEntityArchetype(interiorId: number, portalIndex: number, entityIndex: number): number {
        return GetInteriorPortalEntityArchetype(interiorId, portalIndex, entityIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0xC68021B
     */
    export function getInteriorPortalEntityCount(interiorId: number, portalIndex: number): number {
        return GetInteriorPortalEntityCount(interiorId, portalIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9DA2E811
     */
    export function getInteriorPortalEntityFlag(interiorId: number, portalIndex: number, entityIndex: number): number {
        return GetInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9B7AB83C
     */
    export function getInteriorPortalEntityPosition(interiorId: number, portalIndex: number, entityIndex: number): [number, number, number] {
        return GetInteriorPortalEntityPosition(interiorId, portalIndex, entityIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9F9CEB63
     */
    export function getInteriorPortalEntityRotation(interiorId: number, portalIndex: number, entityIndex: number): [number, number, number, number] {
        return GetInteriorPortalEntityRotation(interiorId, portalIndex, entityIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0xC74DA47C
     */
    export function getInteriorPortalFlag(interiorId: number, portalIndex: number): number {
        return GetInteriorPortalFlag(interiorId, portalIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0xAA9C141D
     */
    export function getInteriorPortalRoomFrom(interiorId: number, portalIndex: number): number {
        return GetInteriorPortalRoomFrom(interiorId, portalIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0x3F47F0E8
     */
    export function getInteriorPortalRoomTo(interiorId: number, portalIndex: number): number {
        return GetInteriorPortalRoomTo(interiorId, portalIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0x77A435B0
     */
    export function getInteriorPosition(interiorId: number): [number, number, number] {
        return GetInteriorPosition(interiorId);
    }

    /**
     * No comment provided
     *
     * Hash: 0xA2737C2C
     */
    export function getInteriorRoomCount(interiorId: number): number {
        return GetInteriorRoomCount(interiorId);
    }

    /**
     * No comment provided
     *
     * Hash: 0xF9E795DD
     */
    export function getInteriorRoomExtents(interiorId: number, roomIndex: number): [number, number, number, number, number, number] {
        return GetInteriorRoomExtents(interiorId, roomIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0x6B7AF743
     */
    export function getInteriorRoomFlag(interiorId: number, roomIndex: number): number {
        return GetInteriorRoomFlag(interiorId, roomIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0xE0EE05F8
     */
    export function getInteriorRoomIndexByHash(interiorId: number, roomHash: number): number {
        return GetInteriorRoomIndexByHash(interiorId, roomHash);
    }

    /**
     * No comment provided
     *
     * Hash: 0x11755DF2
     */
    export function getInteriorRoomName(interiorId: number, roomIndex: number): string {
        return GetInteriorRoomName(interiorId, roomIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0x82BA3F88
     */
    export function getInteriorRoomTimecycle(interiorId: number, roomIndex: number): number {
        return GetInteriorRoomTimecycle(interiorId, roomIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0x5A039998
     */
    export function getInteriorRotation(interiorId: number): [number, number, number, number] {
        return GetInteriorRotation(interiorId);
    }

    /**
     * No comment provided
     *
     * Hash: 0x87F43553
     */
    export function setInteriorPortalCornerPosition(interiorId: number, portalIndex: number, cornerIndex: number, pos: Vector3): void {
        SetInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex, pos.x, pos.y, pos.z);
    }

    /**
     * No comment provided
     *
     * Hash: 0x8349CD76
     */
    export function setInteriorPortalEntityFlag(interiorId: number, portalIndex: number, entityIndex: number, flag: number): void {
        SetInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex, flag);
    }

    /**
     * No comment provided
     *
     * Hash: 0x88B2355E
     */
    export function setInteriorPortalFlag(interiorId: number, portalIndex: number, flag: number): void {
        SetInteriorPortalFlag(interiorId, portalIndex, flag);
    }

    /**
     * No comment provided
     *
     * Hash: 0x298FC783
     */
    export function setInteriorPortalRoomFrom(interiorId: number, portalIndex: number, roomFrom: number): void {
        SetInteriorPortalRoomFrom(interiorId, portalIndex, roomFrom);
    }

    /**
     * No comment provided
     *
     * Hash: 0x58982680
     */
    export function setInteriorPortalRoomTo(interiorId: number, portalIndex: number, roomTo: number): void {
        SetInteriorPortalRoomTo(interiorId, portalIndex, roomTo);
    }

    /**
     * Overwrite the games default CPortalTracker interior detection range.
     * This fixes potentially unwanted behaviour in the base game and allows you to build custom interiors with larger ceiling heights without running into graphical glitches.
     *
     * By default CPortalTracker will probe 4 units downward trying to reach collisions that are part of the interior the entity is in.
     * If no collision can be found 16 units are used in some circumstances.
     *
     * There are 30+ hard coded special cases, only some of them exposed via script (for example `ENABLE_STADIUM_PROBES_THIS_FRAME`).
     *
     * This native allows you to extend the probe range up to 150 units which is the same value the game uses for the `xs_arena_interior`
     *
     * Hash: 0x423F7E39
     */
    export function setInteriorProbeLength(probeLength: number): void {
        SetInteriorProbeLength(probeLength);
    }

    /**
     * No comment provided
     *
     * Hash: 0x4FDCF51E
     */
    export function setInteriorRoomExtents(interiorId: number, roomIndex: number, bbMinX: number, bbMinY: number, bbMinZ: number, bbMaxX: number, bbMaxY: number, bbMaxZ: number): void {
        SetInteriorRoomExtents(interiorId, roomIndex, bbMinX, bbMinY, bbMinZ, bbMaxX, bbMaxY, bbMaxZ);
    }

    /**
     * No comment provided
     *
     * Hash: 0x5518D60B
     */
    export function setInteriorRoomFlag(interiorId: number, roomIndex: number, flag: number): void {
        SetInteriorRoomFlag(interiorId, roomIndex, flag);
    }

    /**
     * No comment provided
     *
     * Hash: 0x31C9A848
     */
    export function setInteriorRoomTimecycle(interiorId: number, roomIndex: number, timecycleHash: number): void {
        SetInteriorRoomTimecycle(interiorId, roomIndex, timecycleHash);
    }

    /**
     * Transiently updates the entity with the specified mapdata index and entity index.
     * This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0xFC52CB91
     */
    export function updateMapdataEntity(mapdata: number, entity: number, entityDef: number | Object): void {
        const _entityDef = entityDef instanceof Object ? entityDef.handle() : entityDef;
        UpdateMapdataEntity(mapdata, entity, _entityDef);
    }

    /**
     * No comment provided
     *
     * Hash: 0x32CA01C3
     */
    export function addTextEntry(entryKey: string, entryText: string): void {
        AddTextEntry(entryKey, entryText);
    }

    /**
     * No comment provided
     *
     * Hash: 0x289DA860
     */
    export function addTextEntryByHash(entryKey: number | string, entryText: string): void {
        if (typeof entryKey === 'string') entryKey = game.getHashKey(entryKey)
        AddTextEntryByHash(entryKey, entryText);
    }

}


export namespace track {
    /**
     * Returns all track junctions on the client
     * The data returned adheres to the following structure:
     *
     * ```
     * [1, 2, 4, 6, 69, 420]
     * ```
     *
     * Hash: 0x81A08523
     */
    export function getAllJunctions(): number {
        return GetAllTrackJunctions();
    }

    /**
     * Get all track nodes and their track ids within the radius of the specified coordinates.
     *
     * Hash: 0x59FC24A7
     */
    export function getClosestNodes(position: Vector3, radius: number): number {
        return GetClosestTrackNodes(position, radius);
    }

    /**
     * No comment provided
     *
     * Hash: 0xBF482A5E
     */
    export function getBrakingDistance(track: number): number {
        return GetTrackBrakingDistance(track);
    }

    /**
     * No comment provided
     *
     * Hash: 0x34EE2BF3
     */
    export function getMaxSpeed(track: number): number {
        return GetTrackMaxSpeed(track);
    }

    /**
     * Gets the coordinates of a specific track node.
     *
     * Hash: 0x1628548E
     */
    export function getNodeCoords(trackIndex: number, trackNode: number): [boolean, Vector3] {
        return GetTrackNodeCoords(trackIndex, trackNode);
    }

    /**
     * Gets the specified tracks node count.
     *
     * Hash: 0x896A0C11
     */
    export function getNodeCount(trackIndex: number): number {
        return GetTrackNodeCount(trackIndex);
    }

    /**
     * Getter for [SET_TRACK_ENABLED](#\_0x4B41E84C)
     *
     * Hash: 0x31E695CB
     */
    export function isEnabled(track: number): boolean {
        return IsTrackEnabled(track);
    }

    /**
     * Getter for [SWITCH_TRAIN_TRACK](#\_0xFD813BB7DB977F20). Determines if ambient trains are able to spawn on this track.
     *
     * Hash: 0xE0C53765
     */
    export function isSwitchedOff(track: number): boolean {
        return IsTrackSwitchedOff(track);
    }

    /**
     * Registers a track junction that when enabled will cause a train on the defined trackIndex, node and direction to change its current track index and begin traveling on the new node
     *
     * Hash: 0x35F743B5
     */
    export function registerJunction(trackIndex: number, trackNode: number, newIndex: number, newNode: number, direction: boolean): number {
        return RegisterTrackJunction(trackIndex, trackNode, newIndex, newNode, direction);
    }

    /**
     * Removes the specified track junction.
     *
     * Hash: 0x4F3D2B2A
     */
    export function removeJunction(junctionIndex: number): boolean {
        return RemoveTrackJunction(junctionIndex);
    }

    /**
     * Sets the braking distance of the track. Used by trains to determine the point to slow down when entering a station.
     *
     * Hash: 0x77EB78D0
     */
    export function setBrakingDistance(track: number, brakingDistance: number): void {
        SetTrackBrakingDistance(track, brakingDistance);
    }

    /**
     * Toggles the track being active. If disabled mission trains will not be able to spawn on this track and will look for the next closest track to spawn
     *
     * Hash: 0x4B41E84C
     */
    export function setEnabled(track: number, enabled: boolean): void {
        SetTrackEnabled(track, enabled);
    }

    /**
     * Sets the state of a track junction.
     *
     * Hash: 0x537B449D
     */
    export function setJunctionActive(junctionIndex: number, state: boolean): boolean {
        return SetTrackJunctionActive(junctionIndex, state);
    }

    /**
     * Sets the max speed for the train tracks. Used by ambient trains and for station calculations
     *
     * Hash: 0x37BFC732
     */
    export function setMaxSpeed(track: number, newSpeed: number): void {
        SetTrackMaxSpeed(track, newSpeed);
    }

}


export namespace vehicle {
    /**
     * Break off vehicle wheel by index. The `leaveDebrisTrail` flag requires `putOnFire` to be true.
     *
     * Hash: 0xA274CADB
     */
    export function breakOffWheel(vehicle: number | Vehicle, wheelIndex: number, leaveDebrisTrail: boolean, deleteWheel: boolean, unknownFlag: boolean, putOnFire: boolean): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        BreakOffVehicleWheel(_vehicle, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag, putOnFire);
    }

    /**
     * Removes vehicle xenon lights custom RGB color.
     *
     * Hash: 0x2867ED8C
     */
    export function clearXenonLightsCustomColor(vehicle: number | Vehicle): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        ClearVehicleXenonLightsCustomColor(_vehicle);
    }

    /**
     * Disables the game's afk camera that starts panning around after 30 seconds of inactivity(While riding in a car as a passenger)
     *
     * Hash: 0x5C140555
     */
    export function disablePassengerIdleCamera(state: boolean): void {
        DisableVehiclePassengerIdleCamera(state);
    }

    /**
     * Checks whether the vehicle consumes fuel. The check is done based on petrol tank volume and vehicle type. Bicycles and vehicles with petrol tank volume equal to zero (only bicycles by default) do not use fuel. All other vehicles do.
     *
     * You can customize petrol tank volume using [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolTankVolume`.
     *
     * Hash: 0xEF30A696
     */
    export function doesUseFuel(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return DoesVehicleUseFuel(_vehicle);
    }

    /**
     * Returns all registered vehicle model names, including non-dlc vehicles and custom vehicles in no particular order.
     *
     * <strong>Example output</strong>
     *
     * ```
     * ["dubsta", "dubsta2", "dubsta3", "myverycoolcar", "sultan", "sultanrs", ...]
     * ```
     *
     * This native will not return vehicles that are unregistered (i.e from a resource being stopped) during runtime.
     *
     * Hash: 0xD7531645
     */
    export function getAllModels(): number {
        return GetAllVehicleModels();
    }

    /**
     * A getter for [SET_AMBIENT_VEHICLE_RANGE_MULTIPLIER_THIS_FRAME](#\_0x90B6DA738A9A25DA).
     *
     * Hash: 0x667EC929
     */
    export function getAmbientRangeMultiplier(): number {
        return GetAmbientVehicleRangeMultiplier();
    }

    /**
     * No comment provided
     *
     * Hash: 0xE015E854
     */
    export function getTrainCurrentTrackNode(train: number | Vehicle): number {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return GetTrainCurrentTrackNode(_train);
    }

    /**
     * Gets the door count for the specified train.
     *
     * Hash: 0x99974721
     */
    export function getTrainDoorCount(train: number | Vehicle): number {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return GetTrainDoorCount(_train);
    }

    /**
     * Gets the ratio that a door is open for on a train.
     *
     * Hash: 0x40B16551
     */
    export function getTrainDoorOpenRatio(train: number | Vehicle, doorIndex: number): number {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return GetTrainDoorOpenRatio(_train, doorIndex);
    }

    /**
     * Gets the speed the train is currently going.
     *
     * Hash: 0x428668B7
     */
    export function getTrainSpeed(train: number | Vehicle): number {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return GetTrainSpeed(_train);
    }

    /**
     * No comment provided
     *
     * Hash: 0xC62AAC98
     */
    export function getAlarmTimeLeft(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleAlarmTimeLeft(_vehicle);
    }

    /**
     * A getter for [SET_VEHICLE_CHEAT_POWER_INCREASE](#\_0xB59E4BD37AE292DB).
     *
     * Hash: 0xC3C93F28
     */
    export function getCheatPowerIncrease(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleCheatPowerIncrease(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x1DAD4583
     */
    export function getClutch(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleClutch(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xB4F4E566
     */
    export function getCurrentGear(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleCurrentGear(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xE7B12B54
     */
    export function getCurrentRpm(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleCurrentRpm(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xDFFABA2A
     */
    export function getDashboardBoost(): number {
        return GetVehicleDashboardBoost();
    }

    /**
     * Retrieves the current gear displayed on the dashboard of the vehicle the player is in, returned as a float. This value represents the gear shown in the instrument cluster, such as "R" (0.0) or positive values (e.g., 1.0, 2.0, etc.) for drive gears.
     *
     * Hash: 0x435C86F4
     */
    export function getDashboardCurrentGear(): number {
        return GetVehicleDashboardCurrentGear();
    }

    /**
     * No comment provided
     *
     * Hash: 0x19B0B2CE
     */
    export function getDashboardFuel(): number {
        return GetVehicleDashboardFuel();
    }

    /**
     * Gets the state of the player vehicle's dashboard lights as a bit set
     * indicator_left = 1
     * indicator_right = 2
     * handbrakeLight = 4
     * engineLight = 8
     * ABSLight = 16
     * gasLight = 32
     * oilLight = 64
     * headlights = 128
     * highBeam = 256
     * batteryLight = 512
     *
     * Hash: 0x500FFE9D
     */
    export function getDashboardLights(): number {
        return GetVehicleDashboardLights();
    }

    /**
     * No comment provided
     *
     * Hash: 0x3856D767
     */
    export function getDashboardOilPressure(): number {
        return GetVehicleDashboardOilPressure();
    }

    /**
     * No comment provided
     *
     * Hash: 0x1F5996AA
     */
    export function getDashboardOilTemp(): number {
        return GetVehicleDashboardOilTemp();
    }

    /**
     * No comment provided
     *
     * Hash: 0xF9716A11
     */
    export function getDashboardRpm(): number {
        return GetVehicleDashboardRpm();
    }

    /**
     * No comment provided
     *
     * Hash: 0x9AAD420E
     */
    export function getDashboardSpeed(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleDashboardSpeed(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x6B6ADAFA
     */
    export function getDashboardTemp(): number {
        return GetVehicleDashboardTemp();
    }

    /**
     * No comment provided
     *
     * Hash: 0xFABE67A9
     */
    export function getDashboardVacuum(): number {
        return GetVehicleDashboardVacuum();
    }

    /**
     * A getter for [SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x245A6883D966D537).
     *
     * Hash: 0xEF7C6538
     */
    export function getDensityMultiplier(): number {
        return GetVehicleDensityMultiplier();
    }

    /**
     * Gets a vehicle's multiplier used with a wheel's GET_VEHICLE_WHEEL_STEERING_ANGLE to determine the angle the wheel is rendered.
     *
     * Hash: 0x21C1DA8E
     */
    export function getDrawnWheelAngleMult(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleDrawnWheelAngleMult(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xF4F495CB
     */
    export function getEngineTemperature(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleEngineTemperature(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x5F739BB8
     */
    export function getFuelLevel(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleFuelLevel(_vehicle);
    }

    /**
     * Gets vehicles gear ratio on choosen gear.
     *
     * Hash: 0x82E794B7
     */
    export function getGearRatio(vehicle: number | Vehicle, gear: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleGearRatio(_vehicle, gear);
    }

    /**
     * No comment provided
     *
     * Hash: 0xB48A1292
     */
    export function getGravityAmount(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleGravityAmount(_vehicle);
    }

    /**
     * Returns the effective handling data of a vehicle as a floating-point value.
     * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
     *
     * Hash: 0x642FC12F
     */
    export function getHandlingFloat(vehicle: number | Vehicle, class_: string, fieldName: string): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleHandlingFloat(_vehicle, class_, fieldName);
    }

    /**
     * Returns the effective handling data of a vehicle as an integer value.
     * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
     *
     * Hash: 0x27396C75
     */
    export function getHandlingInt(vehicle: number | Vehicle, class_: string, fieldName: string): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleHandlingInt(_vehicle, class_, fieldName);
    }

    /**
     * Returns the effective handling data of a vehicle as a vector value.
     * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
     *
     * Hash: 0xFB341304
     */
    export function getHandlingVector(vehicle: number | Vehicle, class_: string, fieldName: string): Vector3 {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return new Vector3(GetVehicleHandlingVector(_vehicle, class_, fieldName));
    }

    /**
     * No comment provided
     *
     * Hash: 0xF1D1D689
     */
    export function getHighGear(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleHighGear(_vehicle);
    }

    /**
     * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
     *
     * Hash: 0x83070354
     */
    export function getIndicatorLights(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleIndicatorLights(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x7E6E219C
     */
    export function getLightMultiplier(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleLightMultiplier(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xDDB298AE
     */
    export function getNextGear(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleNextGear(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xEDF4B0FC
     */
    export function getNumberOfWheels(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleNumberOfWheels(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xFC7F8EF4
     */
    export function getOilLevel(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleOilLevel(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x954465DE
     */
    export function getSteeringScale(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleSteeringScale(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xD1D07351
     */
    export function getThrottleOffset(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleThrottleOffset(_vehicle);
    }

    /**
     * A getter for [MODIFY_VEHICLE_TOP_SPEED](#\_0x93A3996368C94158). Returns -1.0 if a modifier is not set.
     *
     * Hash: 0x998B7FEE
     */
    export function getTopSpeedModifier(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleTopSpeedModifier(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xE02B51D7
     */
    export function getTurboPressure(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleTurboPressure(_vehicle);
    }

    /**
     * List of known states:
     *
     * ```
     * 1: Not wheeling.
     * 65: Vehicle is ready to do wheelie (burnouting).
     * 129: Vehicle is doing wheelie.
     * ```
     *
     * Hash: 0x137260D1
     */
    export function getWheelieState(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelieState(_vehicle);
    }

    /**
     * Gets brake pressure of a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     * Normal values around 1.0f when braking.
     *
     * Hash: 0x70FE2EFF
     */
    export function getWheelBrakePressure(vehicle: number | Vehicle, wheelIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelBrakePressure(_vehicle, wheelIndex);
    }

    /**
     * Gets the flags of a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0xC70FA0C7
     */
    export function getWheelFlags(vehicle: number | Vehicle, wheelIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelFlags(_vehicle, wheelIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0x54A677F5
     */
    export function getWheelHealth(vehicle: number | Vehicle, wheelIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelHealth(_vehicle, wheelIndex);
    }

    /**
     * Gets whether the wheel is powered.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     * This is a shortcut to a flag in GET_VEHICLE_WHEEL_FLAGS.
     *
     * Hash: 0x3CCF1B49
     */
    export function getWheelIsPowered(vehicle: number | Vehicle, wheelIndex: number): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelIsPowered(_vehicle, wheelIndex);
    }

    /**
     * Gets power being sent to a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0xD203287
     */
    export function getWheelPower(vehicle: number | Vehicle, wheelIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelPower(_vehicle, wheelIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0xCEE21AB2
     */
    export function getWheelRimColliderSize(vehicle: number | Vehicle, wheelIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelRimColliderSize(_vehicle, wheelIndex);
    }

    /**
     * Gets the rotation speed of a wheel.
     * This is used internally to calcuate GET_VEHICLE_WHEEL_SPEED.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0xEA1859E5
     */
    export function getWheelRotationSpeed(vehicle: number | Vehicle, wheelIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelRotationSpeed(_vehicle, wheelIndex);
    }

    /**
     * Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
     * Only works on non-default wheels (returns 0 in case of default wheels).
     *
     * Hash: 0x4046B66
     */
    export function getWheelSize(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelSize(_vehicle);
    }

    /**
     * Gets speed of a wheel at the tyre.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0x149C9DA0
     */
    export function getWheelSpeed(vehicle: number | Vehicle, wheelIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelSpeed(_vehicle, wheelIndex);
    }

    /**
     * Gets steering angle of a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0xA0867448
     */
    export function getWheelSteeringAngle(vehicle: number | Vehicle, wheelIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelSteeringAngle(_vehicle, wheelIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0xA7F04022
     */
    export function getWheelSurfaceMaterial(vehicle: number | Vehicle, wheelIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelSurfaceMaterial(_vehicle, wheelIndex);
    }

    /**
     * Gets the current suspension compression of a wheel.
     * Returns a positive value. 0 means the suspension is fully extended, the wheel is off the ground.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0x2B48175B
     */
    export function getWheelSuspensionCompression(vehicle: number | Vehicle, wheelIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelSuspensionCompression(_vehicle, wheelIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0xE0BA9FE6
     */
    export function getWheelTireColliderSize(vehicle: number | Vehicle, wheelIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelTireColliderSize(_vehicle, wheelIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0xEF65929C
     */
    export function getWheelTireColliderWidth(vehicle: number | Vehicle, wheelIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelTireColliderWidth(_vehicle, wheelIndex);
    }

    /**
     * Gets the traction vector length of a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0x3BCFEE14
     */
    export function getWheelTractionVectorLength(vehicle: number | Vehicle, wheelIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelTractionVectorLength(_vehicle, wheelIndex);
    }

    /**
     * Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
     * Only works on non-default wheels (returns 0 in case of default wheels).
     *
     * Hash: 0x9C7B59F9
     */
    export function getWheelWidth(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelWidth(_vehicle);
    }

    /**
     * Returns the offset of the specified wheel relative to the wheel's axle center.
     *
     * Hash: 0xCC90CBCA
     */
    export function getWheelXOffset(vehicle: number | Vehicle, wheelIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelXOffset(_vehicle, wheelIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0x2EA4AFFE
     */
    export function getWheelYRotation(vehicle: number | Vehicle, wheelIndex: number): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelYRotation(_vehicle, wheelIndex);
    }

    /**
     * Returns vehicle xenon lights custom RGB color values. Do note this native doesn't return non-RGB colors that was set with [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07).
     *
     * Hash: 0xC715F730
     */
    export function getXenonLightsCustomColor(vehicle: number | Vehicle): [boolean, number, number, number] {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleXenonLightsCustomColor(_vehicle);
    }

    /**
     * A getter for [SET_VEHICLE_XMAS_SNOW_FACTOR](#\_0x80CC4C9E).
     *
     * Hash: 0x16605B30
     */
    export function getXmasSnowFactor(): number {
        return GetVehicleXmasSnowFactor();
    }

    /**
     * No comment provided
     *
     * Hash: 0xDC921211
     */
    export function isAlarmSet(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return IsVehicleAlarmSet(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xA411F72C
     */
    export function isInteriorLightOn(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return IsVehicleInteriorLightOn(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xF9933BF4
     */
    export function isNeedsToBeHotwired(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return IsVehicleNeedsToBeHotwired(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xF849ED67
     */
    export function isPreviouslyOwnedByPlayer(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return IsVehiclePreviouslyOwnedByPlayer(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xA7DAF7C
     */
    export function isWanted(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return IsVehicleWanted(_vehicle);
    }

    /**
     * Setting the state to true and a value between 0 and 2 will cause pedestrian vehicles to react accordingly to sirens.
     *
     * ```cpp
     * enum Reactions {
     * Left = 0,
     * Right = 1,
     * Stop = 2
     * }
     * ```
     *
     * Hash: 0x3F3EB3F7
     */
    export function overrideReactionToSiren(state: boolean, reaction: number): void {
        OverrideReactionToVehicleSiren(state, reaction);
    }

    /**
     * Overrides whether or not peds can stand on top of the specified vehicle.
     *
     * Note this flag is not replicated automatically, you will have to manually do so.
     *
     * Hash: 0x7FA03E76
     */
    export function overridePedsCanStandOnTopFlag(vehicle: number | Vehicle, can: boolean): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        OverrideVehiclePedsCanStandOnTopFlag(_vehicle, can);
    }

    /**
     * Resets whether or not peds can stand on top of the specified vehicle.
     *
     * Note this flag is not replicated automatically, you will have to manually do so.
     *
     * Hash: 0xDF62CFE2
     */
    export function resetPedsCanStandOnTopFlag(vehicle: number | Vehicle): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        ResetVehiclePedsCanStandOnTopFlag(_vehicle);
    }

    /**
     * Sets the default number plate text pattern for vehicles seen on the local client with the specified plate index as their *default* index (`plateProbabilities` from carvariations).
     *
     * For consistency, this should be used with the same value on all clients, since vehicles *without* custom text will use a seeded random number generator with this pattern to determine the default plate text.
     *
     * The default value is `11AAA111`, and using this or a NULL string will revert to the default game RNG.
     *
     * ### Pattern string format
     *
     * *   `1` will lead to a random number from 0-9.
     * *   `A` will lead to a random letter from A-Z.
     * *   `.` will lead to a random letter *or* number, with 50% probability of being either.
     * *   `^1` will lead to a literal `1` being emitted.
     * *   `^A` will lead to a literal `A` being emitted.
     * *   Any other character will lead to said character being emitted.
     * *   A string shorter than 8 characters will be padded on the right.
     *
     * Hash: 0x79780FD2
     */
    export function setDefaultNumberPlateTextPattern(plateIndex: number, pattern: string): void {
        SetDefaultVehicleNumberPlateTextPattern(plateIndex, pattern);
    }

    /**
     * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
     * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
     *
     * Hash: 0xFE8064E3
     */
    export function setHandlingField(vehicle: string, class_: string, fieldName: string, value: any): void {
        SetHandlingField(vehicle, class_, fieldName, value);
    }

    /**
     * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
     * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
     *
     * Hash: 0x90DD01C
     */
    export function setHandlingFloat(vehicle: string, class_: string, fieldName: string, value: number): void {
        SetHandlingFloat(vehicle, class_, fieldName, value);
    }

    /**
     * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
     *
     * Hash: 0x8AB3F46C
     */
    export function setHandlingInt(vehicle: string, class_: string, fieldName: string, value: number): void {
        SetHandlingInt(vehicle, class_, fieldName, value);
    }

    /**
     * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
     * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
     *
     * Hash: 0x7F9D543
     */
    export function setHandlingVector(vehicle: string, class_: string, fieldName: string, value: Vector3): void {
        SetHandlingVector(vehicle, class_, fieldName, value);
    }

    /**
     * This completely disables pedestrian vehicles from reacting to sirens. They will not try to do any maneuver to evade.
     *
     * Hash: 0xB90BBC6E
     */
    export function setReactionToWithSirenDisabled(state: boolean): void {
        SetReactionToVehicleWithSirenDisabled(state);
    }

    /**
     * Enables or disables whether train doors should be forced open whilst a player is inside the train. This is enabled by default in multiplayer.
     *
     * Hash: 0xD4D1BA63
     */
    export function setTrainsForceDoorsOpen(forceOpen: boolean): void {
        SetTrainsForceDoorsOpen(forceOpen);
    }

    /**
     * Sets the ratio that a door is open for on a train.
     *
     * Hash: 0x2468DBE8
     */
    export function setTrainDoorOpenRatio(train: number | Vehicle, doorIndex: number, ratio: number): void {
        const _train = train instanceof Vehicle ? train.localId() : train;
        SetTrainDoorOpenRatio(_train, doorIndex, ratio);
    }

    /**
     * No comment provided
     *
     * Hash: 0x61CB74A0
     */
    export function setTrainState(train: number | Vehicle, state: number): void {
        const _train = train instanceof Vehicle ? train.localId() : train;
        SetTrainState(_train, state);
    }

    /**
     * Toggles a train's ability to stop at stations
     *
     * Hash: 0xECB8B577
     */
    export function setTrainStopAtStations(train: number | Vehicle, state: boolean): void {
        const _train = train instanceof Vehicle ? train.localId() : train;
        SetTrainStopAtStations(_train, state);
    }

    /**
     * No comment provided
     *
     * Hash: 0xC108EE6F
     */
    export function setAlarmTimeLeft(vehicle: number | Vehicle, time: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleAlarmTimeLeft(_vehicle, time);
    }

    /**
     * Disables the vehicle from being repaired when a vehicle extra is enabled.
     *
     * Hash: 0x5F3A3574
     */
    export function setAutoRepairDisabled(vehicle: number | Vehicle, value: boolean): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleAutoRepairDisabled(_vehicle, value);
    }

    /**
     * No comment provided
     *
     * Hash: 0x2F70ACED
     */
    export function setClutch(vehicle: number | Vehicle, clutch: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleClutch(_vehicle, clutch);
    }

    /**
     * No comment provided
     *
     * Hash: 0x2A01A8FC
     */
    export function setCurrentRpm(vehicle: number | Vehicle, rpm: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleCurrentRpm(_vehicle, rpm);
    }

    /**
     * No comment provided
     *
     * Hash: 0x6C93C4A9
     */
    export function setEngineTemperature(vehicle: number | Vehicle, temperature: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleEngineTemperature(_vehicle, temperature);
    }

    /**
     * No comment provided
     *
     * Hash: 0xBA970511
     */
    export function setFuelLevel(vehicle: number | Vehicle, level: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleFuelLevel(_vehicle, level);
    }

    /**
     * Sets the vehicles gear ratio on choosen gear, reverse gear needs to be a negative float and forward moving gear needs to be a positive float. Refer to the examples if confused.
     *
     * Hash: 0x496EF2F2
     */
    export function setGearRatio(vehicle: number | Vehicle, gear: number, ratio: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleGearRatio(_vehicle, gear, ratio);
    }

    /**
     * No comment provided
     *
     * Hash: 0x1A963E58
     */
    export function setGravityAmount(vehicle: number | Vehicle, gravity: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleGravityAmount(_vehicle, gravity);
    }

    /**
     * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
     * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
     *
     * Hash: 0x2BA40795
     */
    export function setVehicleHandlingField(vehicle: number | Vehicle, class_: string, fieldName: string, value: any): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleHandlingField(_vehicle, class_, fieldName, value);
    }

    /**
     * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
     * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
     *
     * Hash: 0x488C86D2
     */
    export function setVehicleHandlingFloat(vehicle: number | Vehicle, class_: string, fieldName: string, value: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleHandlingFloat(_vehicle, class_, fieldName, value);
    }

    /**
     * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
     *
     * Hash: 0xC37F4CF9
     */
    export function setVehicleHandlingInt(vehicle: number | Vehicle, class_: string, fieldName: string, value: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleHandlingInt(_vehicle, class_, fieldName, value);
    }

    /**
     * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
     *
     * Hash: 0x12497890
     */
    export function setVehicleHandlingVector(vehicle: number | Vehicle, class_: string, fieldName: string, value: Vector3): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleHandlingVector(_vehicle, class_, fieldName, value);
    }

    /**
     * No comment provided
     *
     * Hash: 0x20B1B3E6
     */
    export function setHighGear(vehicle: number | Vehicle, gear: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleHighGear(_vehicle, gear);
    }

    /**
     * Sets the maximum distance in which [\_SET_VEHICLE_NITRO_ENABLED](#\_0xC8E9B6B71B8E660D) PTFX are rendered. Distance is measured from the camera position.
     *
     * Hash: 0xA40CB822
     */
    export function setNitroPtfxRange(range: number): void {
        SetVehicleNitroPtfxRange(range);
    }

    /**
     * No comment provided
     *
     * Hash: 0x90D1CAD1
     */
    export function setOilLevel(vehicle: number | Vehicle, level: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleOilLevel(_vehicle, level);
    }

    /**
     * Set the vehicle's pitch bias. Only works on planes.
     *
     * Hash: 0x2A6CC9F2
     */
    export function setPitchBias(vehicle: number | Vehicle, value: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehiclePitchBias(_vehicle, value);
    }

    /**
     * Set the vehicle's roll bias. Only works on planes.
     *
     * Hash: 0x264B45DE
     */
    export function setRollBias(vehicle: number | Vehicle, value: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleRollBias(_vehicle, value);
    }

    /**
     * No comment provided
     *
     * Hash: 0xFFCCC2EA
     */
    export function setSteeringAngle(vehicle: number | Vehicle, angle: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleSteeringAngle(_vehicle, angle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xEB46596F
     */
    export function setSteeringScale(vehicle: number | Vehicle, scale: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleSteeringScale(_vehicle, scale);
    }

    /**
     * Sets the height of the vehicle's suspension.
     * This changes the same value set by Suspension in the mod shop.
     * Negatives values raise the car. Positive values lower the car.
     *
     * This is change is visual only. The collision of the vehicle will not move.
     *
     * Hash: 0xB3439A01
     */
    export function setSuspensionHeight(vehicle: number | Vehicle, newHeight: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleSuspensionHeight(_vehicle, newHeight);
    }

    /**
     * No comment provided
     *
     * Hash: 0x6485615E
     */
    export function setTurboPressure(vehicle: number | Vehicle, pressure: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleTurboPressure(_vehicle, pressure);
    }

    /**
     * Example script: https://pastebin.com/J6XGbkCW
     *
     * List of known states:
     *
     * ```
     * 1: Not wheeling.
     * 65: Vehicle is ready to do wheelie (burnouting).
     * 129: Vehicle is doing wheelie.
     * ```
     *
     * Hash: 0xEAB8DB65
     */
    export function setWheelieState(vehicle: number | Vehicle, state: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelieState(_vehicle, state);
    }

    /**
     * Sets brake pressure of a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     * Normal values around 1.0f
     *
     * Hash: 0xE80F4E31
     */
    export function setWheelBrakePressure(vehicle: number | Vehicle, wheelIndex: number, pressure: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelBrakePressure(_vehicle, wheelIndex, pressure);
    }

    /**
     * Sets the flags of a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0xD2B9E90D
     */
    export function setWheelFlags(vehicle: number | Vehicle, wheelIndex: number, flags: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelFlags(_vehicle, wheelIndex, flags);
    }

    /**
     * No comment provided
     *
     * Hash: 0xB22ECEFD
     */
    export function setWheelHealth(vehicle: number | Vehicle, wheelIndex: number, health: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelHealth(_vehicle, wheelIndex, health);
    }

    /**
     * Sets whether the wheel is powered.
     * On all wheel drive cars this works to change which wheels receive power, but if a car's fDriveBiasFront doesn't send power to that wheel, it won't get power anyway. This can be fixed by changing the fDriveBiasFront with SET_VEHICLE_HANDLING_FLOAT.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     * This is a shortcut to a flag in SET_VEHICLE_WHEEL_FLAGS.
     *
     * Hash: 0xBD5291A0
     */
    export function setWheelIsPowered(vehicle: number | Vehicle, wheelIndex: number, powered: boolean): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelIsPowered(_vehicle, wheelIndex, powered);
    }

    /**
     * Sets power being sent to a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0xC6146043
     */
    export function setWheelPower(vehicle: number | Vehicle, wheelIndex: number, power: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelPower(_vehicle, wheelIndex, power);
    }

    /**
     * Not sure what this changes, probably determines physical rim size in case the tire is blown.
     *
     * Hash: 0xF380E184
     */
    export function setWheelRimColliderSize(vehicle: number | Vehicle, wheelIndex: number, value: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelRimColliderSize(_vehicle, wheelIndex, value);
    }

    /**
     * Sets the rotation speed of a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0x35ED100D
     */
    export function setWheelRotationSpeed(vehicle: number | Vehicle, wheelIndex: number, speed: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelRotationSpeed(_vehicle, wheelIndex, speed);
    }

    /**
     * Sets vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
     * Only works on non-default wheels.
     * Returns whether change was successful (can be false if trying to set size for non-default wheels).
     *
     * Hash: 0x53AB5C35
     */
    export function setWheelSize(vehicle: number | Vehicle, size: number): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return SetVehicleWheelSize(_vehicle, size);
    }

    /**
     * Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).
     *
     * Hash: 0xB962D05C
     */
    export function setWheelTireColliderSize(vehicle: number | Vehicle, wheelIndex: number, value: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelTireColliderSize(_vehicle, wheelIndex, value);
    }

    /**
     * Use along with SetVehicleWheelWidth to resize the wheels (this native sets the collider width affecting physics while SetVehicleWheelWidth will change visual width).
     *
     * Hash: 0x47BD0270
     */
    export function setWheelTireColliderWidth(vehicle: number | Vehicle, wheelIndex: number, value: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelTireColliderWidth(_vehicle, wheelIndex, value);
    }

    /**
     * Sets the traction vector length of a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0x85C85A3A
     */
    export function setWheelTractionVectorLength(vehicle: number | Vehicle, wheelIndex: number, length: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelTractionVectorLength(_vehicle, wheelIndex, length);
    }

    /**
     * Sets vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
     * Only works on non-default wheels.
     * Returns whether change was successful (can be false if trying to set width for non-default wheels).
     *
     * Hash: 0x64C3F1C0
     */
    export function setWheelWidth(vehicle: number | Vehicle, width: number): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return SetVehicleWheelWidth(_vehicle, width);
    }

    /**
     * Adjusts the offset of the specified wheel relative to the wheel's axle center.
     * Needs to be called every frame in order to function properly, as GTA will reset the offset otherwise.
     * This function can be especially useful to set the track width of a vehicle, for example:
     *
     * ```
     * function SetVehicleFrontTrackWidth(vehicle, width)
     * SetVehicleWheelXOffset(vehicle, 0, -width/2)
     * SetVehicleWheelXOffset(vehicle, 1, width/2)
     * end
     * ```
     *
     * Hash: 0xBD6357D
     */
    export function setWheelXOffset(vehicle: number | Vehicle, wheelIndex: number, offset: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelXOffset(_vehicle, wheelIndex, offset);
    }

    /**
     * No comment provided
     *
     * Hash: 0xC6C2171F
     */
    export function setWheelYRotation(vehicle: number | Vehicle, wheelIndex: number, value: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelYRotation(_vehicle, wheelIndex, value);
    }

    /**
     * Sets custom vehicle xenon lights color, allowing to use RGB palette. The game will ignore lights color set by [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07) when custom color is active. This native is not synced between players. Requires xenon lights mod to be set on vehicle.
     *
     * Hash: 0x1683E7F0
     */
    export function setXenonLightsCustomColor(vehicle: number | Vehicle, red: number, green: number, blue: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleXenonLightsCustomColor(_vehicle, red, green, blue);
    }

    /**
     * No comment provided
     *
     * Hash: 0x80CC4C9E
     */
    export function setXmasSnowFactor(gripFactor: number): void {
        SetVehicleXmasSnowFactor(gripFactor);
    }

    /**
     * No comment provided
     *
     * Hash: 0x77CC80DC
     */
    export function doesTrainStopAtStations(train: number | Vehicle): boolean {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return DoesTrainStopAtStations(_train);
    }

    /**
     * Gets the trains desired speed.
     *
     * Hash: 0xA4921EF5
     */
    export function getTrainCruiseSpeed(train: number | Vehicle): number {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return GetTrainCruiseSpeed(_train);
    }

    /**
     * Gets the direction the train is facing
     *
     * Hash: 0x8DAF79B6
     */
    export function getTrainDirection(train: number | Vehicle): boolean {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return GetTrainDirection(_train);
    }

    /**
     * No comment provided
     *
     * Hash: 0x81B50033
     */
    export function getTrainState(train: number | Vehicle): number {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return GetTrainState(_train);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9AA339D
     */
    export function getTrainTrackIndex(train: number | Vehicle): number {
        const _train = train instanceof Vehicle ? train.localId() : train;
        return GetTrainTrackIndex(_train);
    }

    /**
     * No comment provided
     *
     * Hash: 0x483B013C
     */
    export function getHandbrake(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleHandbrake(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0x1382FCEA
     */
    export function getSteeringAngle(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleSteeringAngle(_vehicle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xBB340D04
     */
    export function isEngineStarting(vehicle: number | Vehicle): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return IsVehicleEngineStarting(_vehicle);
    }

    /**
     * **Note**: Flags are not the same based on your `gamebuild`. Please see [here](https://docs.fivem.net/docs/game-references/vehicle-references/vehicle-flags) to see a complete list of all vehicle flags.
     *
     * Get vehicle.meta flag by index. Useful examples include `FLAG_LAW_ENFORCEMENT` (31), `FLAG_RICH_CAR` (36), `FLAG_IS_ELECTRIC` (43), `FLAG_IS_OFFROAD_VEHICLE` (48).
     *
     * Hash: 0xD85C9F57
     */
    export function getHasFlag(vehicle: number | Vehicle, flagIndex: number): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleHasFlag(_vehicle, flagIndex);
    }

    /**
     * Returns the model type of the vehicle as defined by:
     *
     * ```cpp
     * enum VehicleType
     * {
     * VEHICLE_TYPE_NONE = -1,
     * VEHICLE_TYPE_CAR = 0,
     * VEHICLE_TYPE_PLANE = 1,
     * VEHICLE_TYPE_TRAILER = 2,
     * VEHICLE_TYPE_QUADBIKE = 3,
     * VEHICLE_TYPE_DRAFT = 4,
     * VEHICLE_TYPE_SUBMARINECAR = 5,
     * VEHICLE_TYPE_AMPHIBIOUS_AUTOMOBILE = 6,
     * VEHICLE_TYPE_AMPHIBIOUS_QUADBIKE = 7,
     * VEHICLE_TYPE_HELI = 8,
     * VEHICLE_TYPE_BLIMP = 9,
     * VEHICLE_TYPE_AUTOGYRO = 10,
     * VEHICLE_TYPE_BIKE = 11,
     * VEHICLE_TYPE_BICYCLE = 12,
     * VEHICLE_TYPE_BOAT = 13,
     * VEHICLE_TYPE_TRAIN = 14,
     * VEHICLE_TYPE_SUBMARINE = 15,
     * };
     * ```
     *
     * Hash: 0xDE73BC10
     */
    export function getTypeRaw(vehicle: number | Vehicle): number {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleTypeRaw(_vehicle);
    }

    /**
     * Getter for [BREAK_OFF_VEHICLE_WHEEL](?\_0xA274CADB).
     *
     * Hash: 0xCF1BC668
     */
    export function isWheelBrokenOff(vehicle: number | Vehicle, wheelIndex: number): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return IsVehicleWheelBrokenOff(_vehicle, wheelIndex);
    }

    /**
     * No comment provided
     *
     * Hash: 0x8923DD42
     */
    export function setCurrentGear(vehicle: number | Vehicle, gear: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleCurrentGear(_vehicle, gear);
    }

    /**
     * This native is a setter for [`GET_VEHICLE_HAS_FLAG`](#\_0xD85C9F57).
     *
     * Hash: 0x63AE1A34
     */
    export function setFlag(vehicle: number | Vehicle, flagIndex: number, value: boolean): boolean {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return SetVehicleFlag(_vehicle, flagIndex, value);
    }

    /**
     * No comment provided
     *
     * Hash: 0x3A4566F4
     */
    export function setNextGear(vehicle: number | Vehicle, nextGear: number): void {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        SetVehicleNextGear(_vehicle, nextGear);
    }

    /**
     * Returns the type of the passed vehicle.
     *
     * For client scripts, reference the more detailed [GET_VEHICLE_TYPE_RAW](#\_0xDE73BC10) native.
     *
     * ### Vehicle types
     *
     * *   automobile
     * *   bike
     * *   boat
     * *   heli
     * *   plane
     * *   submarine
     * *   trailer
     * *   train
     *
     * Hash: 0xA273060E
     */
    export function getType(vehicle: number | Vehicle): string {
        const _vehicle = vehicle instanceof Vehicle ? vehicle.localId() : vehicle;
        return GetVehicleType(_vehicle);
    }

}


export namespace water {
    /**
     * Creates a volume where water effects do not apply.
     * Useful for preventing water collisions from flooding areas underneath them.
     * This has no effect on waterquads, only water created from drawables and collisions.
     * Don't create volumes when your local ped is swimming (e.g. use IS_PED_SWIMMING in your scripts before you call this)
     *
     * Hash: 0xEB1C6DD
     */
    export function createDryVolume(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): number {
        return CreateDryVolume(xMin, yMin, zMin, xMax, yMax, zMax);
    }

    /**
     * No comment provided
     *
     * Hash: 0x14088095
     */
    export function getQuadAlpha(waterQuad: number): [boolean, number, number, number, number] {
        return GetWaterQuadAlpha(waterQuad);
    }

    /**
     * This native returns the index of a water quad if the given point is inside its bounds.
     *
     * *If you also want to check for water level, check out [`GetWaterQuadAtCoords_3d`](#\_0xF8E03DB8)*
     *
     * Hash: 0x17321452
     */
    export function getQuadAtCoords(x: number, y: number): number {
        return GetWaterQuadAtCoords(x, y);
    }

    /**
     * This alternative implementation of [`GetWaterQuadAtCoords`](#\_0x17321452) also checks the height of the water level.
     *
     * Hash: 0xF8E03DB8
     */
    export function getQuadAtCoords3d(pos: Vector3): number {
        return GetWaterQuadAtCoords3d(pos.x, pos.y, pos.z);
    }

    /**
     * No comment provided
     *
     * Hash: 0x42E9A06A
     */
    export function getQuadBounds(waterQuad: number): [boolean, number, number, number, number] {
        return GetWaterQuadBounds(waterQuad);
    }

    /**
     * No comment provided
     *
     * Hash: 0xB1884159
     */
    export function getQuadCount(): number {
        return GetWaterQuadCount();
    }

    /**
     * No comment provided
     *
     * Hash: 0x22EA3BD8
     */
    export function getQuadHasLimitedDepth(waterQuad: number): [boolean, number] {
        return GetWaterQuadHasLimitedDepth(waterQuad);
    }

    /**
     * No comment provided
     *
     * Hash: 0x1DEDBD77
     */
    export function getQuadIsInvisible(waterQuad: number): [boolean, number] {
        return GetWaterQuadIsInvisible(waterQuad);
    }

    /**
     * *level is defined as "z" in water.xml*
     *
     * Hash: 0x6523816B
     */
    export function getQuadLevel(waterQuad: number): [boolean, number] {
        return GetWaterQuadLevel(waterQuad);
    }

    /**
     * No comment provided
     *
     * Hash: 0x6F4ACBA
     */
    export function getQuadNoStencil(waterQuad: number): [boolean, number] {
        return GetWaterQuadNoStencil(waterQuad);
    }

    /**
     * Valid type definitions:
     *
     * *   **0** Square
     * *   **1** Right triangle where the 90 degree angle is at maxX, minY
     * *   **2** Right triangle where the 90 degree angle is at minX, minY
     * *   **3** Right triangle where the 90 degree angle is at minX, maxY
     * *   **4** Right triangle where the 90 degree angle is at maxY, maxY
     *
     * Hash: 0xE2501B8B
     */
    export function getQuadType(waterQuad: number): [boolean, number] {
        return GetWaterQuadType(waterQuad);
    }

    /**
     * No comment provided
     *
     * Hash: 0x865139A3
     */
    export function getWaveQuadAmplitude(waveQuad: number): [boolean, number] {
        return GetWaveQuadAmplitude(waveQuad);
    }

    /**
     * This native returns the index of a wave quad if the given point is inside its bounds.
     *
     * Hash: 0x3F5A61A7
     */
    export function getWaveQuadAtCoords(x: number, y: number): number {
        return GetWaveQuadAtCoords(x, y);
    }

    /**
     * No comment provided
     *
     * Hash: 0xF86136DB
     */
    export function getWaveQuadBounds(waveQuad: number): [boolean, number, number, number, number] {
        return GetWaveQuadBounds(waveQuad);
    }

    /**
     * No comment provided
     *
     * Hash: 0x9250C76
     */
    export function getWaveQuadCount(): number {
        return GetWaveQuadCount();
    }

    /**
     * No comment provided
     *
     * Hash: 0xCCE49A1C
     */
    export function getWaveQuadDirection(waveQuad: number): [boolean, number, number] {
        return GetWaveQuadDirection(waveQuad);
    }

    /**
     * Define the xml in a resources fxmanifest, under the file(s) section.
     *
     * Hash: 0xF5102568
     */
    export function loadFromPath(resourceName: string, fileName: string): boolean {
        return LoadWaterFromPath(resourceName, fileName);
    }

    /**
     * Removes a dry volume from the game session.
     * See CREATE_DRY_VOLUME for more info
     *
     * Hash: 0x7BCAA6E7
     */
    export function removeDryVolume(handle: number): void {
        RemoveDryVolume(handle);
    }

    /**
     * Resets the water to the games default water.xml.
     *
     * Hash: 0x1DA4791
     */
    export function reset(): void {
        ResetWater();
    }

    /**
     * Sets world clip boundaries for water quads file (water.xml, water_heistisland.xml)
     * Used internally by LOAD_GLOBAL_WATER_FILE
     *
     * Hash: 0x9FCD2EE6
     */
    export function setAreaClipRect(minX: number, minY: number, maxX: number, maxY: number): void {
        SetWaterAreaClipRect(minX, minY, maxX, maxY);
    }

    /**
     * No comment provided
     *
     * Hash: 0xF49797EB
     */
    export function setQuadAlpha(waterQuad: number, a0: number, a1: number, a2: number, a3: number): boolean {
        return SetWaterQuadAlpha(waterQuad, a0, a1, a2, a3);
    }

    /**
     * This native allows you to update the bounds of a specified water quad index.
     *
     * Hash: 0x80AD144C
     */
    export function setQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean {
        return SetWaterQuadBounds(waterQuad, minX, minY, maxX, maxY);
    }

    /**
     * No comment provided
     *
     * Hash: 0xD1FDCFC1
     */
    export function setQuadHasLimitedDepth(waterQuad: number, hasLimitedDepth: boolean): boolean {
        return SetWaterQuadHasLimitedDepth(waterQuad, hasLimitedDepth);
    }

    /**
     * No comment provided
     *
     * Hash: 0xA387D917
     */
    export function setQuadIsInvisible(waterQuad: number, isInvisible: boolean): boolean {
        return SetWaterQuadIsInvisible(waterQuad, isInvisible);
    }

    /**
     * No comment provided
     *
     * Hash: 0x6292F7A8
     */
    export function setQuadLevel(waterQuad: number, level: number): boolean {
        return SetWaterQuadLevel(waterQuad, level);
    }

    /**
     * No comment provided
     *
     * Hash: 0xC3FF42FF
     */
    export function setQuadNoStencil(waterQuad: number, noStencil: boolean): boolean {
        return SetWaterQuadNoStencil(waterQuad, noStencil);
    }

    /**
     * This native allows you to update the water quad type.
     *
     * Valid type definitions:
     *
     * *   **0** Square
     * *   **1** Right triangle where the 90 degree angle is at maxX, minY
     * *   **2** Right triangle where the 90 degree angle is at minX, minY
     * *   **3** Right triangle where the 90 degree angle is at minX, maxY
     * *   **4** Right triangle where the 90 degree angle is at maxY, maxY
     *
     * Hash: 0x50131EB2
     */
    export function setQuadType(waterQuad: number, _type: number): boolean {
        return SetWaterQuadType(waterQuad, _type);
    }

    /**
     * No comment provided
     *
     * Hash: 0xE4174B7B
     */
    export function setWaveQuadAmplitude(waveQuad: number, amplitude: number): boolean {
        return SetWaveQuadAmplitude(waveQuad, amplitude);
    }

    /**
     * This native allows you to update the bounds of a specified water quad index.
     *
     * Hash: 0x1FCC1FAF
     */
    export function setWaveQuadBounds(waveQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean {
        return SetWaveQuadBounds(waveQuad, minX, minY, maxX, maxY);
    }

    /**
     * directionX/Y should be constrained between -1.0 and 1.0
     * A positive value will create the wave starting at min and rolling towards max
     * A negative value will create the wave starting at max and rolling towards min
     * Applying both values allows you to make diagonal waves
     *
     * Hash: 0xFC9341A3
     */
    export function setWaveQuadDirection(waveQuad: number, directionX: number, directionY: number): boolean {
        return SetWaveQuadDirection(waveQuad, directionX, directionY);
    }

}


export namespace weapon {
    /**
     * A getter for the accuracy spread of a weapon.
     *
     * Hash: 0x5343721
     */
    export function getAccuracySpread(weaponHash: number | string): number {
        if (typeof weaponHash === 'string') weaponHash = game.getHashKey(weaponHash)
        return GetWeaponAccuracySpread(weaponHash);
    }

    /**
     * A getter for [SET_WEAPON_ANIMATION_OVERRIDE](#\_0x1055AC3A667F09D9).
     *
     * Hash: 0x63ED2E7
     */
    export function getAnimationOverride(ped: number | Ped): number {
        const _ped = ped instanceof Ped ? ped.handle() : ped;
        return GetWeaponAnimationOverride(_ped);
    }

    /**
     * A getter for `CWeaponAccuracyModifier` in a weapon component.
     *
     * Hash: 0xC693E278
     */
    export function getComponentAccuracyModifier(componentHash: number | string): number {
        if (typeof componentHash === 'string') componentHash = game.getHashKey(componentHash)
        return GetWeaponComponentAccuracyModifier(componentHash);
    }

    /**
     * A getter for `CameraHash` in a weapon scope component.
     *
     * Hash: 0xACB7E68F
     */
    export function getComponentCameraHash(componentHash: number | string): number {
        if (typeof componentHash === 'string') componentHash = game.getHashKey(componentHash)
        return GetWeaponComponentCameraHash(componentHash);
    }

    /**
     * A getter for `ClipSize` in a weapon component.
     *
     * Hash: 0xE14CF665
     */
    export function getComponentClipSize(componentHash: number | string): number {
        if (typeof componentHash === 'string') componentHash = game.getHashKey(componentHash)
        return GetWeaponComponentClipSize(componentHash);
    }

    /**
     * A getter for `CWeaponDamageModifier` in a weapon component.
     *
     * Hash: 0x4A0E3855
     */
    export function getComponentDamageModifier(componentHash: number | string): number {
        if (typeof componentHash === 'string') componentHash = game.getHashKey(componentHash)
        return GetWeaponComponentDamageModifier(componentHash);
    }

    /**
     * A getter for `CWeaponFallOffModifier` damage modifier value in a weapon component.
     *
     * Hash: 0xE134FB8D
     */
    export function getComponentRangeDamageModifier(componentHash: number | string): number {
        if (typeof componentHash === 'string') componentHash = game.getHashKey(componentHash)
        return GetWeaponComponentRangeDamageModifier(componentHash);
    }

    /**
     * A getter for `CWeaponFallOffModifier` range modifier value in a weapon component.
     *
     * Hash: 0x2FD0BC1B
     */
    export function getComponentRangeModifier(componentHash: number | string): number {
        if (typeof componentHash === 'string') componentHash = game.getHashKey(componentHash)
        return GetWeaponComponentRangeModifier(componentHash);
    }

    /**
     * A getter for `ReticuleHash` in a weapon scope component.
     *
     * Hash: 0xF9AB9297
     */
    export function getComponentReticuleHash(componentHash: number | string): number {
        if (typeof componentHash === 'string') componentHash = game.getHashKey(componentHash)
        return GetWeaponComponentReticuleHash(componentHash);
    }

    /**
     * A getter for [\_SET_WEAPON_DAMAGE_MODIFIER](#\_0x4757F00BC6323CFE).
     *
     * Hash: 0xD979143
     */
    export function getDamageModifier(weaponHash: number | string): number {
        if (typeof weaponHash === 'string') weaponHash = game.getHashKey(weaponHash)
        return GetWeaponDamageModifier(weaponHash);
    }

    /**
     * A getter for the recoil shake amplitude of a weapon.
     *
     * Hash: 0x5E1AF5F
     */
    export function getRecoilShakeAmplitude(weaponHash: number | string): number {
        if (typeof weaponHash === 'string') weaponHash = game.getHashKey(weaponHash)
        return GetWeaponRecoilShakeAmplitude(weaponHash);
    }

    /**
     * Disables weapons aim blocking due to environment for local player.
     * For non-player peds [SET_PED_ENABLE_WEAPON_BLOCKING](#\_0x97A790315D3831FD) can be used.
     *
     * Hash: 0xDFD8F6DE
     */
    export function setsNoAimBlocking(state: boolean): void {
        SetWeaponsNoAimBlocking(state);
    }

    /**
     * Disables the game's built-in auto-reloading.
     *
     * Hash: 0x311150E5
     */
    export function setsNoAutoreload(state: boolean): void {
        SetWeaponsNoAutoreload(state);
    }

    /**
     * Disables autoswapping to another weapon when the current weapon runs out of ammo.
     *
     * Hash: 0x2A7B50E
     */
    export function setsNoAutoswap(state: boolean): void {
        SetWeaponsNoAutoswap(state);
    }

    /**
     * A setter for the accuracy spread of a weapon.
     *
     * Hash: 0x598DD6AE
     */
    export function setAccuracySpread(weaponHash: number | string, spread: number): void {
        if (typeof weaponHash === 'string') weaponHash = game.getHashKey(weaponHash)
        SetWeaponAccuracySpread(weaponHash, spread);
    }

    /**
     * A setter for the recoil shake amplitude of a weapon.
     *
     * Hash: 0x9864312F
     */
    export function setRecoilShakeAmplitude(weaponHash: number | string, amplitude: number): void {
        if (typeof weaponHash === 'string') weaponHash = game.getHashKey(weaponHash)
        SetWeaponRecoilShakeAmplitude(weaponHash, amplitude);
    }

}


export namespace network {
    /**
     * No comment provided
     *
     * Hash: 0x2CAFD5E9
     */
    export function getWalkMode(): boolean {
        return GetNetworkWalkMode();
    }

    /**
     * No comment provided
     *
     * Hash: 0x55188D2D
     */
    export function setWalkMode(enabled: boolean): void {
        SetNetworkWalkMode(enabled);
    }

    /**
     * No comment provided
     *
     * Hash: 0x1E2E3177
     */
    export function doesEntityExistWithNetworkId(netId: number): boolean {
        return NetworkDoesEntityExistWithNetworkId(netId);
    }

    /**
     * Returns the owner ID of the specified entity.
     *
     * Hash: 0x526FEE31
     */
    export function getEntityOwner(entity: number | Entity): number {
        const _entity = entity instanceof Entity ? entity.handle() : entity;
        return NetworkGetEntityOwner(_entity);
    }

}


export namespace shapetest {
    /**
     * Returns the result of a shape test, also returning the material of any touched surface.
     *
     * When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.
     *
     * Unless the return value is 2, the other return values are undefined.
     *
     * Hash: 0x4301E10C
     */
    export function getResultIncludingMaterial(shapeTestHandle: number): [number, boolean, Vector3, Vector3, number, number] {
        return GetShapeTestResultIncludingMaterial(shapeTestHandle);
    }

}


export namespace camera {
    /**
     * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
     *
     * Hash: 0x8F57A89D
     */
    export function getCamMatrix(camera: number | Camera, rightVector: Vector3, forwardVector: Vector3, upVector: Vector3, position: Vector3): void {
        const _camera = camera instanceof Camera ? camera.handle() : camera;
        GetCamMatrix(_camera, rightVector, forwardVector, upVector, position);
    }

}


export namespace discord {
    /**
     * This native sets the app id for the discord rich presence implementation.
     *
     * Hash: 0x6A02254D
     */
    export function setAppId(appId: string): void {
        SetDiscordAppId(appId);
    }

    /**
     * Sets a clickable button to be displayed in a player's Discord rich presence.
     *
     * Hash: 0xCBBC3FAC
     */
    export function setRichPresenceAction(index: number, label: string, url: string): void {
        SetDiscordRichPresenceAction(index, label, url);
    }

    /**
     * This native sets the image asset for the discord rich presence implementation.
     *
     * Hash: 0x53DFD530
     */
    export function setRichPresenceAsset(assetName: string): void {
        SetDiscordRichPresenceAsset(assetName);
    }

    /**
     * This native sets the small image asset for the discord rich presence implementation.
     *
     * Hash: 0xF61D04C4
     */
    export function setRichPresenceAssetSmall(assetName: string): void {
        SetDiscordRichPresenceAssetSmall(assetName);
    }

    /**
     * This native sets the hover text of the small image asset for the discord rich presence implementation.
     *
     * Hash: 0x35E62B6A
     */
    export function setRichPresenceAssetSmallText(text: string): void {
        SetDiscordRichPresenceAssetSmallText(text);
    }

    /**
     * This native sets the hover text of the image asset for the discord rich presence implementation.
     *
     * Hash: 0xB029D2FA
     */
    export function setRichPresenceAssetText(text: string): void {
        SetDiscordRichPresenceAssetText(text);
    }

}


export namespace dui {
    /**
     * Creates a DUI browser. This can be used to draw on a runtime texture using CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
     *
     * Hash: 0x23EAF899
     */
    export function create(url: string, width: number, height: number): number {
        return CreateDui(url, width, height);
    }

    /**
     * Destroys a DUI browser.
     *
     * Hash: 0xA085CB10
     */
    export function destroy(duiObject: number): void {
        DestroyDui(duiObject);
    }

    /**
     * Returns the NUI window handle for a specified DUI browser object.
     *
     * Hash: 0x1655D41D
     */
    export function getHandle(duiObject: number): string {
        return GetDuiHandle(duiObject);
    }

    /**
     * Returns whether or not a browser is created for a specified DUI browser object.
     *
     * Hash: 0x7AAC3B4C
     */
    export function isAvailable(duiObject: number): boolean {
        return IsDuiAvailable(duiObject);
    }

    /**
     * Sends a message to the specific DUI root page. This is similar to SEND_NUI_MESSAGE.
     *
     * Hash: 0xCD380DA9
     */
    export function sendMessage(duiObject: number, jsonString: string): void {
        SendDuiMessage(duiObject, jsonString);
    }

    /**
     * Injects a 'mouse down' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
     *
     * Hash: 0x5D01F191
     */
    export function sendMouseDown(duiObject: number, button: string): void {
        SendDuiMouseDown(duiObject, button);
    }

    /**
     * Injects a 'mouse move' event for a DUI object. Coordinates are in browser space.
     *
     * Hash: 0xD9D7A0AA
     */
    export function sendMouseMove(duiObject: number, x: number, y: number): void {
        SendDuiMouseMove(duiObject, x, y);
    }

    /**
     * Injects a 'mouse up' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
     *
     * Hash: 0x1D735B93
     */
    export function sendMouseUp(duiObject: number, button: string): void {
        SendDuiMouseUp(duiObject, button);
    }

    /**
     * Injects a 'mouse wheel' event for a DUI object.
     *
     * Hash: 0x2D62133A
     */
    export function sendMouseWheel(duiObject: number, deltaY: number, deltaX: number): void {
        SendDuiMouseWheel(duiObject, deltaY, deltaX);
    }

    /**
     * Navigates the specified DUI browser to a different URL.
     *
     * Hash: 0xF761D9F3
     */
    export function setUrl(duiObject: number, url: string): void {
        SetDuiUrl(duiObject, url);
    }

}


export namespace kvp {
    /**
     * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938), but for a specified resource.
     *
     * Hash: 0x3CC98B25
     */
    export function getExternalFloat(resource: string, key: string): number {
        return GetExternalKvpFloat(resource, key);
    }

    /**
     * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8), but for a specified resource.
     *
     * Hash: 0x12B8D689
     */
    export function getExternalInt(resource: string, key: string): number {
        return GetExternalKvpInt(resource, key);
    }

    /**
     * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B), but for a specified resource.
     *
     * Hash: 0x9080363A
     */
    export function getExternalString(resource: string, key: string): string {
        return GetExternalKvpString(resource, key);
    }

    /**
     * Equivalent of [START_FIND_KVP](#\_0xDD379006), but for another resource than the current one.
     *
     * Hash: 0x8F2EECC3
     */
    export function startFindExternal(resourceName: string, prefix: string): number {
        return StartFindExternalKvp(resourceName, prefix);
    }

    /**
     * No comment provided
     *
     * Hash: 0xB3210203
     */
    export function endFind(handle: number): void {
        EndFindKvp(handle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xBD7BEBC5
     */
    export function find(handle: number): string {
        return FindKvp(handle);
    }

    /**
     * No comment provided
     *
     * Hash: 0xDD379006
     */
    export function startFind(prefix: string): number {
        return StartFindKvp(prefix);
    }

}


export namespace mumble {
    /**
     * Starts listening to the specified channel, when available.
     *
     * Hash: 0xC79F44BF
     */
    export function addVoiceChannelListen(channel: number): void {
        MumbleAddVoiceChannelListen(channel);
    }

    /**
     * Adds the specified channel to the target list for the specified Mumble voice target ID.
     *
     * Hash: 0x4D386C9E
     */
    export function addVoiceTargetChannel(targetId: number, channel: number): void {
        MumbleAddVoiceTargetChannel(targetId, channel);
    }

    /**
     * Adds the specified player to the target list for the specified Mumble voice target ID.
     *
     * Hash: 0x32C5355A
     */
    export function addVoiceTargetPlayer(targetId: number, player: number | string | Player): void {
        const _player = player instanceof Player ? player.localId() : player;
        MumbleAddVoiceTargetPlayer(targetId, _player);
    }

    /**
     * Adds the specified player to the target list for the specified Mumble voice target ID.
     *
     * Hash: 0x25F2B65F
     */
    export function addVoiceTargetPlayerByServerId(targetId: number, serverId: number): void {
        MumbleAddVoiceTargetPlayerByServerId(targetId, serverId);
    }

    /**
     * No comment provided
     *
     * Hash: 0xBF847807
     */
    export function clearVoiceChannel(): void {
        MumbleClearVoiceChannel();
    }

    /**
     * Clears the target list for the specified Mumble voice target ID.
     *
     * Hash: 0x8555DCBA
     */
    export function clearVoiceTarget(targetId: number): void {
        MumbleClearVoiceTarget(targetId);
    }

    /**
     * Clears channels from the target list for the specified Mumble voice target ID.
     *
     * Hash: 0x5EA72E76
     */
    export function clearVoiceTargetChannels(targetId: number): void {
        MumbleClearVoiceTargetChannels(targetId);
    }

    /**
     * Clears players from the target list for the specified Mumble voice target ID.
     *
     * Hash: 0x912E21DA
     */
    export function clearVoiceTargetPlayers(targetId: number): void {
        MumbleClearVoiceTargetPlayers(targetId);
    }

    /**
     * Check whether specified channel exists on the Mumble server.
     *
     * Hash: 0xCC8CA25
     */
    export function doesChannelExist(channel: number): boolean {
        return MumbleDoesChannelExist(channel);
    }

    /**
     * No comment provided
     *
     * Hash: 0x84E02A32
     */
    export function getTalkerProximity(): number {
        return MumbleGetTalkerProximity();
    }

    /**
     * Returns the mumble voice channel from a player's server id.
     *
     * Hash: 0x221C09F1
     */
    export function getVoiceChannelFromServerId(serverId: number): number {
        return MumbleGetVoiceChannelFromServerId(serverId);
    }

    /**
     * No comment provided
     *
     * Hash: 0xE820BC10
     */
    export function isActive(): boolean {
        return MumbleIsActive();
    }

    /**
     * This native will return true if the user succesfully connected to the voice server.
     * If the user disabled the voice-chat setting it will return false.
     *
     * Hash: 0xB816370A
     */
    export function isConnected(): boolean {
        return MumbleIsConnected();
    }

    /**
     * No comment provided
     *
     * Hash: 0x33EEF97F
     */
    export function isPlayerTalking(player: number | string | Player): boolean {
        const _player = player instanceof Player ? player.localId() : player;
        return MumbleIsPlayerTalking(_player);
    }

    /**
     * Stops listening to the specified channel.
     *
     * Hash: 0x231523B7
     */
    export function removeVoiceChannelListen(channel: number): void {
        MumbleRemoveVoiceChannelListen(channel);
    }

    /**
     * Removes the specified voice channel from the user's voice targets.
     *
     * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_CHANNEL](#\_0x4D386C9E)
     *
     * Hash: 0x268DB867
     */
    export function removeVoiceTargetChannel(targetId: number, channel: number): void {
        MumbleRemoveVoiceTargetChannel(targetId, channel);
    }

    /**
     * Removes the specified player from the user's voice targets.
     *
     * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER](#\_0x32C5355A)
     *
     * Hash: 0x88CD646F
     */
    export function removeVoiceTargetPlayer(targetId: number, player: number | string | Player): void {
        const _player = player instanceof Player ? player.localId() : player;
        MumbleRemoveVoiceTargetPlayer(targetId, _player);
    }

    /**
     * Removes the specified player from the user's voice targets.
     *
     * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID](#\_0x25F2B65F)
     *
     * Hash: 0x930BD34B
     */
    export function removeVoiceTargetPlayerByServerId(targetId: number, serverId: number): void {
        MumbleRemoveVoiceTargetPlayerByServerId(targetId, serverId);
    }

    /**
     * No comment provided
     *
     * Hash: 0xD932A3F3
     */
    export function setActive(state: boolean): void {
        MumbleSetActive(state);
    }

    /**
     * Sets the current input distance. The player will be able to talk to other players within this distance.
     *
     * Hash: 0x1B1052E2
     */
    export function setAudioInputDistance(distance: number): void {
        MumbleSetAudioInputDistance(distance);
    }

    /**
     * Use this native to disable noise suppression and high pass filters.
     *
     * The possible intents for this are as follows (backticks are used to represent hashes):
     *
     * | Index | Description |
     * |-|-|
     * | \`speech\` | Default intent |
     * | \`music\` | Disable noise suppression and high pass filter |
     *
     * Hash: 0x6383526B
     */
    export function setAudioInputIntent(intentHash: number | string): void {
        if (typeof intentHash === 'string') intentHash = game.getHashKey(intentHash)
        MumbleSetAudioInputIntent(intentHash);
    }

    /**
     * Sets the current output distance. The player will be able to hear other players talking within this distance.
     *
     * Hash: 0x74C597D9
     */
    export function setAudioOutputDistance(distance: number): void {
        MumbleSetAudioOutputDistance(distance);
    }

    /**
     * Changes the Mumble server address to connect to, and reconnects to the new address.
     *
     * Setting the address to an empty string and the port to -1 will reset to the built in FXServer Mumble Implementation.
     *
     * Hash: 0xE6EB2CD8
     */
    export function setServerAddress(address: string, port: number): void {
        MumbleSetServerAddress(address, port);
    }

    /**
     * Sets the audio submix ID for a specified player using Mumble 'Native Audio' functionality.
     *
     * Hash: 0xFE3A3054
     */
    export function setSubmixForServerId(serverId: number, submixId: number): void {
        MumbleSetSubmixForServerId(serverId, submixId);
    }

    /**
     * No comment provided
     *
     * Hash: 0x74E927B0
     */
    export function setTalkerProximity(value: number): void {
        MumbleSetTalkerProximity(value);
    }

    /**
     * No comment provided
     *
     * Hash: 0x8737EEE8
     */
    export function setVoiceChannel(channel: number): void {
        MumbleSetVoiceChannel(channel);
    }

    /**
     * Sets the current Mumble voice target ID to broadcast voice to.
     *
     * Hash: 0x960A4A95
     */
    export function setVoiceTarget(targetId: number): void {
        MumbleSetVoiceTarget(targetId);
    }

    /**
     * Overrides the output volume for a particular player on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
     *
     * Set to -1.0 to reset the Volume override.
     *
     * Hash: 0x61C309E3
     */
    export function setVolumeOverride(player: number | string | Player, volume: number): void {
        const _player = player instanceof Player ? player.localId() : player;
        MumbleSetVolumeOverride(_player, volume);
    }

    /**
     * Overrides the output volume for a particular player with the specified server id and player name on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
     *
     * Hash: 0xCE8E25B4
     */
    export function setVolumeOverrideByServerId(serverId: number, volume: number): void {
        MumbleSetVolumeOverrideByServerId(serverId, volume);
    }

}


export namespace nui {
    /**
     * No comment provided
     *
     * Hash: 0xBDBA226F
     */
    export function getCursorPosition(): [number, number] {
        return GetNuiCursorPosition();
    }

    /**
     * Returns the current NUI focus state previously set with `SET_NUI_FOCUS`.
     *
     * Hash: 0x98545E6D
     */
    export function isFocused(): boolean {
        return IsNuiFocused();
    }

    /**
     * Checks if keyboard input is enabled during NUI focus using `SET_NUI_FOCUS_KEEP_INPUT`.
     *
     * Hash: 0x39C9DC92
     */
    export function isFocusKeepingInput(): boolean {
        return IsNuiFocusKeepingInput();
    }

    /**
     * No comment provided
     *
     * Hash: 0xC59B980C
     */
    export function registerCallback(callbackType: string, callback: Function): void {
        RegisterNuiCallback(callbackType, callback);
    }

    /**
     * No comment provided
     *
     * Hash: 0xCD03CDA9
     */
    export function registerCallbackType(callbackType: string): void {
        RegisterNuiCallbackType(callbackType);
    }

    /**
     * No comment provided
     *
     * Hash: 0xA8AE9C2F
     */
    export function registerRawCallback(callbackType: string, callback: Function): void {
        RegisterRawNuiCallback(callbackType, callback);
    }

    /**
     * No comment provided
     *
     * Hash: 0x78608ACB
     */
    export function sendMessage(jsonString: string): boolean {
        return SendNuiMessage(jsonString);
    }

    /**
     * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
     * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
     *
     * Hash: 0x1722C938
     */
    export function setManualShutdownLoadingScreen(manualShutdown: boolean): void {
        SetManualShutdownLoadingScreenNui(manualShutdown);
    }

    /**
     * No comment provided
     *
     * Hash: 0x5B98AE30
     */
    export function setFocus(hasFocus: boolean, hasCursor: boolean): void {
        SetNuiFocus(hasFocus, hasCursor);
    }

    /**
     * No comment provided
     *
     * Hash: 0x3FF5E5F8
     */
    export function setFocusKeepInput(keepInput: boolean): void {
        SetNuiFocusKeepInput(keepInput);
    }

    /**
     * Set the z-index of the NUI resource.
     *
     * Hash: 0x3734AAFF
     */
    export function setZindex(zIndex: number): void {
        SetNuiZindex(zIndex);
    }

    /**
     * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
     *
     * Hash: 0xB9234AFB
     */
    export function shutdownLoadingScreen(): void {
        ShutdownLoadingScreenNui();
    }

    /**
     * Will unregister and cleanup a registered NUI callback handler.
     *
     * Use along side the REGISTER_RAW_NUI_CALLBACK native.
     *
     * Hash: 0x7FB46432
     */
    export function unregisterRawCallback(callbackType: string): void {
        UnregisterRawNuiCallback(callbackType);
    }

}


export namespace object {
    /**
     * Returns a list of door system entries: a door system hash (see [ADD_DOOR_TO_SYSTEM](#\_0x6F8838D03D1DC226)) and its object handle.
     *
     * The data returned adheres to the following layout:
     *
     * ```
     * [{doorHash1, doorHandle1}, ..., {doorHashN, doorHandleN}]
     * ```
     *
     * Hash: 0xF65BBA4B
     */
    export function doorSystemGetActive(): number {
        return DoorSystemGetActive();
    }

    /**
     * No comment provided
     *
     * Hash: 0x237613B3
     */
    export function doorSystemGetSize(): number {
        return DoorSystemGetSize();
    }

}


export namespace pad {
    /**
     * Disables the specified `rawKeyIndex`, making it not trigger the regular `IS_RAW_KEY_*` natives.
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0x8BCF0014
     */
    export function disableRawKeyThisFrame(rawKeyIndex: number): boolean {
        return DisableRawKeyThisFrame(rawKeyIndex);
    }

    /**
     * Gets if the specified `rawKeyIndex` is pressed down, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0x36366EC3
     */
    export function isDisabledRawKeyDown(rawKeyIndex: number): boolean {
        return IsDisabledRawKeyDown(rawKeyIndex);
    }

    /**
     * Gets if the specified `rawKeyIndex` is pressed, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0x1F7CBBAA
     */
    export function isDisabledRawKeyPressed(rawKeyIndex: number): boolean {
        return IsDisabledRawKeyPressed(rawKeyIndex);
    }

    /**
     * Gets if the specified `rawKeyIndex` was released, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0x72B66C09
     */
    export function isDisabledRawKeyReleased(rawKeyIndex: number): boolean {
        return IsDisabledRawKeyReleased(rawKeyIndex);
    }

    /**
     * Gets if the specified `rawKeyIndex` is up, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0x2C033875
     */
    export function isDisabledRawKeyUp(rawKeyIndex: number): boolean {
        return IsDisabledRawKeyUp(rawKeyIndex);
    }

    /**
     * Gets if the specified `rawKeyIndex` is pressed down on the keyboard.
     *
     * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0xD95A7387
     */
    export function isRawKeyDown(rawKeyIndex: number): boolean {
        return IsRawKeyDown(rawKeyIndex);
    }

    /**
     * Gets if the specified `rawKeyIndex` is pressed on the keyboard.
     *
     * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0x69F7C29E
     */
    export function isRawKeyPressed(rawKeyIndex: number): boolean {
        return IsRawKeyPressed(rawKeyIndex);
    }

    /**
     * Gets if the specified `rawKeyIndex` was just released on the keyboard.
     *
     * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0xEAA50861
     */
    export function isRawKeyReleased(rawKeyIndex: number): boolean {
        return IsRawKeyReleased(rawKeyIndex);
    }

    /**
     * Gets if the specified `rawKeyIndex` is up  on the keyboard.
     *
     * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0x36F4E505
     */
    export function isRawKeyUp(rawKeyIndex: number): boolean {
        return IsRawKeyUp(rawKeyIndex);
    }

}


export namespace social {
    /**
     * Sets the player's rich presence detail state for social platform providers to a specified string.
     *
     * Hash: 0x7BDCBD45
     */
    export function setRichPresence(presenceState: string): void {
        SetRichPresence(presenceState);
    }

}


export namespace resource {
    /**
     * No comment provided
     *
     * Hash: 0x7389B5DF
     */
    export function deleteKvp(key: string): void {
        DeleteResourceKvp(key);
    }

    /**
     * Nonsynchronous [DELETE_RESOURCE_KVP](#\_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0x4152C90
     */
    export function deleteKvpNoSync(key: string): void {
        DeleteResourceKvpNoSync(key);
    }

    /**
     * Returns the name of the currently executing resource.
     *
     * Hash: 0xE5E9EBBB
     */
    export function getCurrentName(): string {
        return GetCurrentResourceName();
    }

    /**
     * No comment provided
     *
     * Hash: 0x4D52FE5B
     */
    export function getInvoking(): string {
        return GetInvokingResource();
    }

    /**
     * No comment provided
     *
     * Hash: 0x863F27B
     */
    export function getNums(): number {
        return GetNumResources();
    }

    /**
     * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
     * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
     *
     * Hash: 0x776E864
     */
    export function getNumMetadata(resourceName: string, metadataKey: string): number {
        return GetNumResourceMetadata(resourceName, metadataKey);
    }

    /**
     * No comment provided
     *
     * Hash: 0x387246B7
     */
    export function getByFindIndex(findIndex: number): string {
        return GetResourceByFindIndex(findIndex);
    }

    /**
     * Returns all commands registered by the specified resource.
     * The data returned adheres to the following layout:
     *
     * ```
     * [
     * {
     * "name": "cmdlist",
     * "resource": "example_resource",
     * "arity" = -1,
     * },
     * {
     * "name": "command1"
     * "resource": "example_resource2",
     * "arity" = -1,
     * }
     * ]
     * ```
     *
     * Hash: 0x97628584
     */
    export function getCommands(resource: string): number {
        return GetResourceCommands(resource);
    }

    /**
     * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
     *
     * Hash: 0x35BDCEEA
     */
    export function getKvpFloat(key: string): number {
        return GetResourceKvpFloat(key);
    }

    /**
     * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
     *
     * Hash: 0x557B586A
     */
    export function getKvpInt(key: string): number {
        return GetResourceKvpInt(key);
    }

    /**
     * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
     *
     * Hash: 0x5240DA5A
     */
    export function getKvpString(key: string): string {
        return GetResourceKvpString(key);
    }

    /**
     * Gets the metadata value at a specified key/index from a resource's manifest.
     * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
     *
     * Hash: 0x964BAB1D
     */
    export function getMetadata(resourceName: string, metadataKey: string, index: number): string {
        return GetResourceMetadata(resourceName, metadataKey, index);
    }

    /**
     * Returns the current state of the specified resource.
     *
     * Hash: 0x4039B485
     */
    export function getState(resourceName: string): string {
        return GetResourceState(resourceName);
    }

    /**
     * Reads the contents of a text file in a specified resource.
     * If executed on the client, this file has to be included in `files` in the resource manifest.
     * Example: `local data = LoadResourceFile("devtools", "data.json")`
     *
     * Hash: 0x76A9EE1F
     */
    export function loadFile(resourceName: string, fileName: string): string {
        return LoadResourceFile(resourceName, fileName);
    }

    /**
     * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
     *
     * Hash: 0xD233A168
     */
    export function registerAsEventHandler(eventName: string): void {
        RegisterResourceAsEventHandler(eventName);
    }

    /**
     * A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).
     *
     * Hash: 0x21C7A35B
     */
    export function setKvp(key: string, value: string): void {
        SetResourceKvp(key, value);
    }

    /**
     * A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).
     *
     * Hash: 0x9ADD2938
     */
    export function setKvpFloat(key: string, value: number): void {
        SetResourceKvpFloat(key, value);
    }

    /**
     * Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0x3517BFBE
     */
    export function setKvpFloatNoSync(key: string, value: number): void {
        SetResourceKvpFloatNoSync(key, value);
    }

    /**
     * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
     *
     * Hash: 0x6A2B1E8
     */
    export function setKvpInt(key: string, value: number): void {
        SetResourceKvpInt(key, value);
    }

    /**
     * Nonsynchronous [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0x26AEB707
     */
    export function setKvpIntNoSync(key: string, value: number): void {
        SetResourceKvpIntNoSync(key, value);
    }

    /**
     * Nonsynchronous [SET_RESOURCE_KVP](#\_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0xCF9A2FF
     */
    export function setKvpNoSync(key: string, value: string): void {
        SetResourceKvpNoSync(key, value);
    }

}


export namespace profiler {
    /**
     * Scope entry for profiler.
     *
     * Hash: 0xC795A4A9
     */
    export function enterScope(scopeName: string): void {
        ProfilerEnterScope(scopeName);
    }

    /**
     * Scope exit for profiler.
     *
     * Hash: 0xB39CA35C
     */
    export function exitScope(): void {
        ProfilerExitScope();
    }

    /**
     * Returns true if the profiler is active.
     *
     * Hash: 0xF8B7D7BB
     */
    export function isRecording(): boolean {
        return ProfilerIsRecording();
    }

}


// Deprecated root-level access - use namespaced functions instead
/**
 * Allows StaticEmitter's without a linked entity to make use of environment features like occlusion and reverb even if they are located higher than 20.0 units above any static collision inside interiors.
 *
 * This native allows you to extend the probe range up to 150.0 units.
 *
 * Hash: 0x8AA1F3C2
 * @deprecated Use audio.setEmitterProbeLength(probeLength) instead
 */
export function setEmitterProbeLength(probeLength: number): void {
    return audio.setEmitterProbeLength(probeLength);
}

/**
 * Adds an output for the specified audio submix.
 *
 * Hash: 0xAC6E290D
 * @deprecated Use audio.addSubmixOutput(submixId, outputSubmixId) instead
 */
export function addAudioSubmixOutput(submixId: number, outputSubmixId: number): void {
    return audio.addSubmixOutput(submixId, outputSubmixId);
}

/**
 * Creates an audio submix with the specified name, or gets the existing audio submix by that name.
 *
 * Hash: 0x658D2BC8
 * @deprecated Use audio.createSubmix(name) instead
 */
export function createAudioSubmix(name: string): number {
    return audio.createSubmix(name);
}

/**
 * Sets a floating-point parameter for a submix effect.
 *
 * Hash: 0x9A209B3C
 * @deprecated Use audio.setSubmixEffectParamFloat(submixId, effectSlot, paramIndex, paramValue) instead
 */
export function setAudioSubmixEffectParamFloat(submixId: number, effectSlot: number, paramIndex: number, paramValue: number): void {
    return audio.setSubmixEffectParamFloat(submixId, effectSlot, paramIndex, paramValue);
}

/**
 * Sets an integer parameter for a submix effect.
 *
 * Hash: 0x77FAE2B8
 * @deprecated Use audio.setSubmixEffectParamInt(submixId, effectSlot, paramIndex, paramValue) instead
 */
export function setAudioSubmixEffectParamInt(submixId: number, effectSlot: number, paramIndex: number, paramValue: number): void {
    return audio.setSubmixEffectParamInt(submixId, effectSlot, paramIndex, paramValue);
}

/**
 * Assigns a RadioFX effect to a submix effect slot.
 *
 * The parameter values for this effect are as follows (backticks are used to represent hashes):
 *
 * | Index | Type | Description |
 * |-|-|-|
 * | \`enabled\` | int | Enables or disables RadioFX on this DSP. |
 * | \`default\` | int | Sets default parameters for the RadioFX DSP and enables it. |
 * | \`freq_low\` | float |  |
 * | \`freq_hi\` | float |  |
 * | \`fudge\` | float |  |
 * | \`rm_mod_freq\` | float |  |
 * | \`rm_mix\` | float |  |
 * | \`o_freq_lo\` | float |  |
 * | \`o_freq_hi\` | float |  |
 *
 * Hash: 0xAAA94D53
 * @deprecated Use audio.setSubmixEffectRadioFx(submixId, effectSlot) instead
 */
export function setAudioSubmixEffectRadioFx(submixId: number, effectSlot: number): void {
    return audio.setSubmixEffectRadioFx(submixId, effectSlot);
}

/**
 * Sets the volumes for the sound channels in a submix effect.
 * Values can be between 0.0 and 1.0.
 * Channel 5 and channel 6 are not used in voice chat but are believed to be center and LFE channels.
 * Output slot starts at 0 for the first ADD_AUDIO_SUBMIX_OUTPUT call then incremented by 1 on each subsequent call.
 *
 * Hash: 0x825DC0D1
 * @deprecated Use audio.setSubmixOutputVolumes(submixId, outputSlot, frontLeftVolume, frontRightVolume, rearLeftVolume, rearRightVolume, channel5Volume, channel6Volume) instead
 */
export function setAudioSubmixOutputVolumes(submixId: number, outputSlot: number, frontLeftVolume: number, frontRightVolume: number, rearLeftVolume: number, rearRightVolume: number, channel5Volume: number, channel6Volume: number): void {
    return audio.setSubmixOutputVolumes(submixId, outputSlot, frontLeftVolume, frontRightVolume, rearLeftVolume, rearRightVolume, channel5Volume, channel6Volume);
}

/**
 * Returns entity's archetype name, if available.
 *
 * Hash: 0x47B870F5
 * @deprecated Use entity.getArchetypeName(entity1) instead
 */
export function getEntityArchetypeName(entity1: number | Entity): string {
    return entity.getArchetypeName(entity1);
}

/**
 * Returns the transient entity index for a specified mapdata/entity pair.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xEE43540D
 * @deprecated Use entity.getIndexFromMapdata(mapdata, entity1) instead
 */
export function getEntityIndexFromMapdata(mapdata: number, entity1: number): number {
    return entity.getIndexFromMapdata(mapdata, entity1);
}

/**
 * Retrieves the map data and entity handles from a specific entity.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xF6B815C5
 * @deprecated Use entity.getMapdataOwner(entity1) instead
 */
export function getEntityMapdataOwner(entity1: number | Entity): [boolean, number, number] {
    return entity.getMapdataOwner(entity1);
}

/**
 * Resets mapdata entity transform matrix to its original state.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x8143FA4F
 * @deprecated Use entity.resetMapdataMatrix(mapDataHash, entityInternalIdx) instead
 */
export function resetMapdataEntityMatrix(mapDataHash: number, entityInternalIdx: number): boolean {
    return entity.resetMapdataMatrix(mapDataHash, entityInternalIdx);
}

/**
 * Gets the selected entity at the current mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x3DD8130F
 * @deprecated Use entity.selectAtCursor(hitFlags, precise) instead
 */
export function selectEntityAtCursor(hitFlags: number, precise: boolean): number {
    return entity.selectAtCursor(hitFlags, precise);
}

/**
 * Gets the selected entity at the specified mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xAFE8D405
 * @deprecated Use entity.selectAtPos(fracX, fracY, hitFlags, precise) instead
 */
export function selectEntityAtPos(fracX: number, fracY: number, hitFlags: number, precise: boolean): number {
    return entity.selectAtPos(fracX, fracY, hitFlags, precise);
}

/**
 * Sets an entity's matrix. Arguments are in the same order as with GET_ENTITY_MATRIX.
 *
 * Hash: 0xFB0639B
 * @deprecated Use entity.setMatrix(entity1, forwardX, forwardY, forwardZ, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ) instead
 */
export function setEntityMatrix(entity1: number | Entity, forwardX: number, forwardY: number, forwardZ: number, rightX: number, rightY: number, rightZ: number, upX: number, upY: number, upZ: number, atX: number, atY: number, atZ: number): void {
    return entity.setMatrix(entity1, forwardX, forwardY, forwardZ, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ);
}

/**
 * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
 *
 * Hash: 0xEDBE6ADD
 * @deprecated Use entity.isPositionFrozen(entity1) instead
 */
export function isEntityPositionFrozen(entity1: number | Entity): boolean {
    return entity.isPositionFrozen(entity1);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Returns the memory address of an entity.
 *
 * This native is intended for singleplayer debugging, and may not be available during multiplayer.
 *
 * Hash: 0x9A3144BC
 * @deprecated Use entity.getAddress(entity1) instead
 */
export function getEntityAddress(entity1: number | Entity): any {
    return entity.getAddress(entity1);
}

/**
 * Internal function for ensuring an entity has a state bag.
 *
 * Hash: 0x3BB78F05
 * @deprecated Use entity.ensureStateBag(entity1) instead
 */
export function ensureEntityStateBag(entity1: number | Entity): void {
    return entity.ensureStateBag(entity1);
}

/**
 * ### Supported types
 *
 * *   \[1] : Peds (including animals) and players.
 * *   \[2] : Vehicles.
 * *   \[3] : Objects (props), doors, and projectiles.
 *
 * ### Coordinates need to be send unpacked (x,y,z)
 *
 * ```lua
 *
 * -- Define the allowed model hashes
 * local allowedModelHashes = { GetHashKey("p_crate03x"), GetHashKey("p_crate22x") }
 *
 * -- Get the player's current coordinates
 * local playerCoords = GetEntityCoords(PlayerPedId())
 *
 * -- Retrieve all entities of type Object (type 3) within a radius of 10.0 units
 * -- that match the allowed model hashes
 * -- and sort output entities by distance
 * local entities = GetEntitiesInRadius(playerCoords.x, playerCoords.y, playerCoords.z, 10.0, 3, true, allowedModelHashes)
 *
 * -- Iterate through the list of entities and print their ids
 * for i = 1, #entities do
 * local entity = entities[i]
 * print(entity)
 * end
 *
 * ```
 *
 * Hash: 0xDFFBA12F
 * @deprecated Use entity.getEntitiesInRadius(pos, radius, entityType, sortByDistance, models) instead
 */
export function getEntitiesInRadius(pos: Vector3, radius: number, entityType: number, sortByDistance: boolean, models: number | Object): number {
    return entity.getEntitiesInRadius(pos, radius, entityType, sortByDistance, models);
}

/**
 * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](#\_0x5BA35AAF).
 *
 * Hash: 0x4BDF1867
 * @deprecated Use entity.getFromStateBagName(bagName) instead
 */
export function getEntityFromStateBagName(bagName: string): number {
    return entity.getFromStateBagName(bagName);
}

/**
 * Loads a minimap overlay from a GFx file in the current resource.
 *
 * If you need to control the depth of overlay use [`ADD_MINIMAP_OVERLAY_WITH_DEPTH`](#\_0xED0935B5).
 *
 * Hash: 0x4AFD2499
 * @deprecated Use graphics.addMinimapOverlay(name) instead
 */
export function addMinimapOverlay(name: string): number {
    return graphics.addMinimapOverlay(name);
}

/**
 * Loads a minimap overlay from a GFx file in the current resource.
 *
 * Hash: 0xED0935B5
 * @deprecated Use graphics.addMinimapOverlayWithDepth(name, depth) instead
 */
export function addMinimapOverlayWithDepth(name: string, depth: number): number {
    return graphics.addMinimapOverlayWithDepth(name, depth);
}

/**
 * Experimental natives, please do not use in a live environment.
 *
 * Hash: 0xA66F8F75
 * @deprecated Use graphics.addReplaceTexture(origTxd, origTxn, newTxd, newTxn) instead
 */
export function addReplaceTexture(origTxd: string, origTxn: string, newTxd: string, newTxn: string): void {
    return graphics.addReplaceTexture(origTxd, origTxn, newTxd, newTxn);
}

/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 *
 * Hash: 0x4C89C0ED
 * @deprecated Use graphics.callMinimapScaleformFunction(miniMap, fnName) instead
 */
export function callMinimapScaleformFunction(miniMap: number, fnName: string): boolean {
    return graphics.callMinimapScaleformFunction(miniMap, fnName);
}

/**
 * Commits the backing pixels to the specified runtime texture.
 *
 * Hash: 0x19D81F4E
 * @deprecated Use graphics.commitRuntimeTexture(tex) instead
 */
export function commitRuntimeTexture(tex: number): void {
    return graphics.commitRuntimeTexture(tex);
}

/**
 * Creates a blank runtime texture.
 *
 * Hash: 0xFEC3766D
 * @deprecated Use graphics.createRuntimeTexture(txd, txn, width, height) instead
 */
export function createRuntimeTexture(txd: number, txn: string, width: number, height: number): number {
    return graphics.createRuntimeTexture(txd, txn, width, height);
}

/**
 * Creates a runtime texture from a DUI handle.
 *
 * Hash: 0xB135472B
 * @deprecated Use graphics.createRuntimeTextureFromDuiHandle(txd, txn, duiHandle) instead
 */
export function createRuntimeTextureFromDuiHandle(txd: number, txn: string, duiHandle: string): number {
    return graphics.createRuntimeTextureFromDuiHandle(txd, txn, duiHandle);
}

/**
 * Creates a runtime texture from the specified file in the current resource or a base64 data URL.
 *
 * Hash: 0x786D8BC3
 * @deprecated Use graphics.createRuntimeTextureFromImage(txd, txn, fileName) instead
 */
export function createRuntimeTextureFromImage(txd: number, txn: string, fileName: string): number {
    return graphics.createRuntimeTextureFromImage(txd, txn, fileName);
}

/**
 * Creates a runtime texture dictionary with the specified name.
 * Example:
 *
 * ```lua
 * local txd = CreateRuntimeTxd('meow')
 * ```
 *
 * Hash: 0x1F3AC778
 * @deprecated Use graphics.createRuntimeTxd(name) instead
 */
export function createRuntimeTxd(name: string): number {
    return graphics.createRuntimeTxd(name);
}

/**
 * Allows drawing advanced light effects, known as coronas, which support flares, volumetric lighting, and customizable glow properties.
 *
 * Hash: 0xFF44780E
 * @deprecated Use graphics.drawCorona(pos, size, red, green, blue, alpha, intensity, zBias, dirX, dirY, dirZ, viewThreshold, innerAngle, outerAngle, flags) instead
 */
export function drawCorona(pos: Vector3, size: number, red: number, green: number, blue: number, alpha: number, intensity: number, zBias: number, dirX: number, dirY: number, dirZ: number, viewThreshold: number, innerAngle: number, outerAngle: number, flags: number): void {
    return graphics.drawCorona(pos, size, red, green, blue, alpha, intensity, zBias, dirX, dirY, dirZ, viewThreshold, innerAngle, outerAngle, flags);
}

/**
 * Draws a gizmo. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * This should be used from JavaScript or another language supporting mutable buffers like ArrayBuffer.
 *
 * Matrix layout is as follows:
 *
 * *   Element \[0], \[1] and \[2] should represent the right vector.
 * *   Element \[4], \[5] and \[6] should represent the forward vector.
 * *   Element \[8], \[9] and \[10] should represent the up vector.
 * *   Element \[12], \[13] and \[14] should represent X, Y and Z translation coordinates.
 * *   All other elements should be \[0, 0, 0, 1].
 *
 * Hash: 0xEB2EDCA2
 * @deprecated Use graphics.drawGizmo(matrixPtr, id) instead
 */
export function drawGizmo(matrixPtr: number, id: string): boolean {
    return graphics.drawGizmo(matrixPtr, id);
}

/**
 * Draw a glow sphere this frame. Up to 256 per single frame.
 *
 * Hash: 0xBD25EC89
 * @deprecated Use graphics.drawGlowSphere(pos, radius, colorR, colorG, colorB, intensity, invert, marker) instead
 */
export function drawGlowSphere(pos: Vector3, radius: number, colorR: number, colorG: number, colorB: number, intensity: number, invert: boolean, marker: boolean): void {
    return graphics.drawGlowSphere(pos, radius, colorR, colorG, colorB, intensity, invert, marker);
}

/**
 * Like DRAW_RECT, but it's a line.
 *
 * Hash: 0xB856A90
 * @deprecated Use graphics.drawLine2d(x1, y1, x2, y2, width, r, g, b, a) instead
 */
export function drawLine2d(x1: number, y1: number, x2: number, y2: number, width: number, r: number, g: number, b: number, a: number): void {
    return graphics.drawLine2d(x1, y1, x2, y2, width, r, g, b, a);
}

/**
 * DRAW_RECT, but with a rotation. Seems to be broken.
 *
 * Hash: 0xEC37C168
 * @deprecated Use graphics.drawRectRotated(x, y, width, height, rotation, r, g, b, a) instead
 */
export function drawRectRotated(x: number, y: number, width: number, height: number, rotation: number, r: number, g: number, b: number, a: number): void {
    return graphics.drawRectRotated(x, y, width, height, rotation, r, g, b, a);
}

/**
 * Forces the game snow pass to render.
 *
 * Hash: 0xE6E16170
 * @deprecated Use graphics.forceSnowPass(enabled) instead
 */
export function forceSnowPass(enabled: boolean): void {
    return graphics.forceSnowPass(enabled);
}

/**
 * Returns the world position the pointer is hovering on the pause map.
 *
 * Hash: 0xE5AF7A82
 * @deprecated Use graphics.getPauseMapPointerWorldPosition() instead
 */
export function getPauseMapPointerWorldPosition(): Vector3 {
    return graphics.getPauseMapPointerWorldPosition();
}

/**
 * Gets the height of the specified runtime texture.
 *
 * Hash: 0x3574AACE
 * @deprecated Use graphics.getRuntimeTextureHeight(tex) instead
 */
export function getRuntimeTextureHeight(tex: number): number {
    return graphics.getRuntimeTextureHeight(tex);
}

/**
 * Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.
 *
 * Hash: 0xCA0A085F
 * @deprecated Use graphics.getRuntimeTexturePitch(tex) instead
 */
export function getRuntimeTexturePitch(tex: number): number {
    return graphics.getRuntimeTexturePitch(tex);
}

/**
 * Gets the width of the specified runtime texture.
 *
 * Hash: 0xC9F55558
 * @deprecated Use graphics.getRuntimeTextureWidth(tex) instead
 */
export function getRuntimeTextureWidth(tex: number): number {
    return graphics.getRuntimeTextureWidth(tex);
}

/**
 * Returns whether or not the specific minimap overlay has loaded.
 *
 * Hash: 0xF7535F32
 * @deprecated Use graphics.hasMinimapOverlayLoaded(id) instead
 */
export function hasMinimapOverlayLoaded(id: number): boolean {
    return graphics.hasMinimapOverlayLoaded(id);
}

/**
 * Experimental natives, please do not use in a live environment.
 *
 * Hash: 0xA896B20A
 * @deprecated Use graphics.removeReplaceTexture(origTxd, origTxn) instead
 */
export function removeReplaceTexture(origTxd: string, origTxn: string): void {
    return graphics.removeReplaceTexture(origTxd, origTxn);
}

/**
 * This function undoes changes made by [`SET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE`](#\_0x68DFF2DD), restoring the original outline rendering behavior. The default render technique group is `unlit`.
 *
 * Hash: 0x8EB6EC38
 * @deprecated Use graphics.resetEntityDrawOutlineRenderTechnique() instead
 */
export function resetEntityDrawOutlineRenderTechnique(): void {
    return graphics.resetEntityDrawOutlineRenderTechnique();
}

/**
 * Draws an outline around a given entity. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x76180407
 * @deprecated Use graphics.setEntityDrawOutline(entity, enabled) instead
 */
export function setEntityDrawOutline(entity: number | Entity, enabled: boolean): void {
    return graphics.setEntityDrawOutline(entity, enabled);
}

/**
 * Sets color for entity outline. `255, 0, 255, 255` by default.
 *
 * Hash: 0xB41A56C2
 * @deprecated Use graphics.setEntityDrawOutlineColor(red, green, blue, alpha) instead
 */
export function setEntityDrawOutlineColor(red: number, green: number, blue: number, alpha: number): void {
    return graphics.setEntityDrawOutlineColor(red, green, blue, alpha);
}

/**
 * Sets the render technique for drawing an entity's outline. This function allows you to specify a technique group name to control how the entity's outline is rendered in the game.
 *
 * List of known technique group's:
 *
 * ```
 * alt0
 * alt1
 * alt2
 * alt3
 * alt4
 * alt5
 * alt6
 * alt7
 * alt8
 * blit
 * cube
 * default
 * geometry
 * imposter
 * imposterdeferred
 * lightweight0
 * lightweight0CutOut
 * lightweight0CutOutTint
 * lightweight0WaterRefractionAlpha
 * lightweight4
 * lightweight4CutOut
 * lightweight4CutOutTint
 * lightweight4WaterRefractionAlpha
 * lightweight8
 * lightweight8CutOut
 * lightweight8CutOutTint
 * lightweight8WaterRefractionAlpha
 * lightweightHighQuality0
 * lightweightHighQuality0CutOut
 * lightweightHighQuality0WaterRefractionAlpha
 * lightweightHighQuality4
 * lightweightHighQuality4CutOut
 * lightweightHighQuality4WaterRefractionAlpha
 * lightweightHighQuality8
 * lightweightHighQuality8CutOut
 * lightweightHighQuality8WaterRefractionAlpha
 * lightweightNoCapsule4
 * lightweightNoCapsule8
 * multilight
 * tessellate
 * ui
 * unlit
 * waterreflection
 * waterreflectionalphaclip
 * waterreflectionalphacliptint
 * wdcascade
 * ```
 *
 * Hash: 0x68DFF2DD
 * @deprecated Use graphics.setEntityDrawOutlineRenderTechnique(techniqueGroup) instead
 */
export function setEntityDrawOutlineRenderTechnique(techniqueGroup: string): void {
    return graphics.setEntityDrawOutlineRenderTechnique(techniqueGroup);
}

/**
 * Sets variant of shader that will be used to draw entity outline.
 *
 * Variants are:
 *
 * *   **0**: Default value, gauss shader.
 * *   **1**: 2px wide solid color outline.
 * *   **2**: Fullscreen solid color except for entity.
 *
 * Hash: 0x5261A01A
 * @deprecated Use graphics.setEntityDrawOutlineShader(shader) instead
 */
export function setEntityDrawOutlineShader(shader: number): void {
    return graphics.setEntityDrawOutlineShader(shader);
}

/**
 * This completely disables rendering of fog volumes (vfxfogvolumeinfo.ymt).
 *
 * Hash: 0xFBC64DA3
 * @deprecated Use graphics.setFogVolumeRenderDisabled(state) instead
 */
export function setFogVolumeRenderDisabled(state: boolean): void {
    return graphics.setFogVolumeRenderDisabled(state);
}

/**
 * Sets the type for the minimap blip clipping object to be either rectangular or rounded.
 *
 * Hash: 0xB8B4490C
 * @deprecated Use graphics.setMinimapClipType(_type) instead
 */
export function setMinimapClipType(_type: number): void {
    return graphics.setMinimapClipType(_type);
}

/**
 * Overrides the minimap component data (from `common:/data/ui/frontend.xml`) for a specified component.
 *
 * Hash: 0x3E882B23
 * @deprecated Use graphics.setMinimapComponentPosition(name, alignX, alignY, posX, posY, sizeX, sizeY) instead
 */
export function setMinimapComponentPosition(name: string, alignX: string, alignY: string, posX: number, posY: number, sizeX: number, sizeY: number): void {
    return graphics.setMinimapComponentPosition(name, alignX, alignY, posX, posY, sizeX, sizeY);
}

/**
 * Sets the display info for a minimap overlay.
 *
 * Hash: 0x6A48B3CA
 * @deprecated Use graphics.setMinimapOverlayDisplay(miniMap, x, y, xScale, yScale, alpha) instead
 */
export function setMinimapOverlayDisplay(miniMap: number, x: number, y: number, xScale: number, yScale: number, alpha: number): void {
    return graphics.setMinimapOverlayDisplay(miniMap, x, y, xScale, yScale, alpha);
}

/**
 * No comment provided
 *
 * Hash: 0x3963D527
 * @deprecated Use graphics.setRuntimeTextureArgbData(tex, buffer, length) instead
 */
export function setRuntimeTextureArgbData(tex: number, buffer: string, length: number): boolean {
    return graphics.setRuntimeTextureArgbData(tex, buffer, length);
}

/**
 * Replaces the pixel data in a runtime texture with the image data from a file in the current resource, or a data URL.
 *
 * If the bitmap is a different size compared to the existing texture, it will be resampled.
 *
 * This command may end up executed asynchronously, and only update the texture data at a later time.
 *
 * Hash: 0x28FC4ECB
 * @deprecated Use graphics.setRuntimeTextureImage(tex, fileName) instead
 */
export function setRuntimeTextureImage(tex: number, fileName: string): boolean {
    return graphics.setRuntimeTextureImage(tex, fileName);
}

/**
 * Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.
 *
 * Hash: 0xAB65ACEE
 * @deprecated Use graphics.setRuntimeTexturePixel(tex, x, y, r, g, b, a) instead
 */
export function setRuntimeTexturePixel(tex: number, x: number, y: number, r: number, g: number, b: number, a: number): void {
    return graphics.setRuntimeTexturePixel(tex, x, y, r, g, b, a);
}

/**
 * Modifies the radius scale used in the simulation of wet cloth physics.
 * This affects how cloth behaves when wet, changing how it sticks or reacts to movement.
 *
 * Hash: 0xF1BD2CEF
 * @deprecated Use graphics.setWetClothPinRadiusScale(scale) instead
 */
export function setWetClothPinRadiusScale(scale: number): void {
    return graphics.setWetClothPinRadiusScale(scale);
}

/**
 * Resets the screen's draw-origin which was changed by the function [`SET_DRAW_ORIGIN`](#\_0xE10198D5) back to `x=0, y=0`. See [`SET_DRAW_ORIGIN`](#\_0xE10198D5) for further information.
 *
 * Hash: 0xDD76B263
 * @deprecated Use graphics.clearDrawOrigin() instead
 */
export function clearDrawOrigin(): void {
    return graphics.clearDrawOrigin();
}

/**
 * In compare to `0x31DC8D3F216D8509` return true if texture its created when `0x31DC8D3F216D8509` return true if you put there any id in valid range
 *
 * Hash: 0x8B25BC20
 * @deprecated Use graphics.doesTextureExist(textureId) instead
 */
export function doesTextureExist(textureId: number): boolean {
    return graphics.doesTextureExist(textureId);
}

/**
 * No comment provided
 *
 * Hash: 0xCD4D9DD5
 * @deprecated Use graphics.drawBox(x1, y1, z1, x2, y2, z2, red, green, blue, alpha) instead
 */
export function drawBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void {
    return graphics.drawBox(x1, y1, z1, x2, y2, z2, red, green, blue, alpha);
}

/**
 * No comment provided
 *
 * Hash: 0xB3426BCC
 * @deprecated Use graphics.drawLine(x1, y1, z1, x2, y2, z2, red, green, blue, alpha) instead
 */
export function drawLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void {
    return graphics.drawLine(x1, y1, z1, x2, y2, z2, red, green, blue, alpha);
}

/**
 * No comment provided
 *
 * Hash: 0xABD19253
 * @deprecated Use graphics.drawPoly(x1, y1, z1, x2, y2, z2, x3, y3, z3, red, green, blue, alpha) instead
 */
export function drawPoly(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, red: number, green: number, blue: number, alpha: number): void {
    return graphics.drawPoly(x1, y1, z1, x2, y2, z2, x3, y3, z3, red, green, blue, alpha);
}

/**
 * Gets the current aspect ratio
 *
 * ```lua
 * local ratio = GetAspectRatio()
 * print(string.format("%.2f", ratio))
 * ```
 *
 * Hash: 0x2CA8F641
 * @deprecated Use graphics.getAspectRatio() instead
 */
export function getAspectRatio(): number {
    return graphics.getAspectRatio();
}

/**
 * Gets the current screen resolution.
 *
 * ```lua
 * local  width, height = GetCurrentScreenResolution()
 * print(string.format("Current screen resolution: %dx%d", width, height))
 *
 * ```
 *
 * Hash: 0x337F0116
 * @deprecated Use graphics.getCurrentScreenResolution() instead
 */
export function getCurrentScreenResolution(): [number, number] {
    return graphics.getCurrentScreenResolution();
}

/**
 * Removes the specified texture and remove it from the ped.
 * Unlike `0x6BEFAA907B076859` which only marks the texture as "can be reused" (and keeps it until will be reused), this function deletes it right away. Can fix some sync issues. `DOES_TEXTURE_EXIST` can be use to wait until fully unloaded by game
 *
 * ```lua
 * RemoveTexture(textureId)
 * while DoesTextureExist(textureId) do
 * Wait(0)
 * end
 * ```
 *
 * Hash: 0x1582C7F2
 * @deprecated Use graphics.removeTexture(textureId) instead
 */
export function removeTexture(textureId: number): void {
    return graphics.removeTexture(textureId);
}

/**
 * Sets the on-screen drawing origin for draw-functions in world coordinates.
 *
 * The effect can be reset by calling [`CLEAR_DRAW_ORIGIN`](#\_0xDD76B263) and is limited to 32 different origins each frame.
 *
 * Hash: 0xE10198D5
 * @deprecated Use graphics.setDrawOrigin(pos, is2d) instead
 */
export function setDrawOrigin(pos: Vector3, is2d: boolean): void {
    return graphics.setDrawOrigin(pos, is2d);
}

/**
 * Sets the text font for the current text drawing command.
 *
 * Hash: 0xADA9255D
 * @deprecated Use graphics.setTextFontForCurrentCommand(fontId) instead
 */
export function setTextFontForCurrentCommand(fontId: number): void {
    return graphics.setTextFontForCurrentCommand(fontId);
}

/**
 * No comment provided
 *
 * Hash: 0x68CDFA60
 * @deprecated Use graphics.setTextJustification(justifyType) instead
 */
export function setTextJustification(justifyType: number): void {
    return graphics.setTextJustification(justifyType);
}

/**
 * No comment provided
 *
 * Hash: 0x6F60AB54
 * @deprecated Use graphics.setTextWrap(start, end) instead
 */
export function setTextWrap(start: number, end: number): void {
    return graphics.setTextWrap(start, end);
}

/**
 * A getter for [SET_VISUAL_SETTING_FLOAT](#\_0xD1D31681).
 *
 * Hash: 0x15346B4D
 * @deprecated Use graphics.getVisualSettingFloat(name) instead
 */
export function getVisualSettingFloat(name: string): number {
    return graphics.getVisualSettingFloat(name);
}

/**
 * Overrides a floating point value from `visualsettings.dat` temporarily.
 *
 * Hash: 0xD1D31681
 * @deprecated Use graphics.setVisualSettingFloat(name, value) instead
 */
export function setVisualSettingFloat(name: string, value: number): void {
    return graphics.setVisualSettingFloat(name, value);
}

/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 *
 * Hash: 0xCD949E20
 * @deprecated Use hud.getComponentAlign(id) instead
 */
export function getHudComponentAlign(id: number): [number, number] {
    return hud.getComponentAlign(id);
}

/**
 * No comment provided
 *
 * Hash: 0xA91866BC
 * @deprecated Use hud.getComponentName(id) instead
 */
export function getHudComponentName(id: number): string {
    return hud.getComponentName(id);
}

/**
 * No comment provided
 *
 * Hash: 0x12217D33
 * @deprecated Use hud.getComponentSize(id) instead
 */
export function getHudComponentSize(id: number): Vector3 {
    return hud.getComponentSize(id);
}

/**
 * Returns the zoom level data by index from mapzoomdata.meta file.
 *
 * Hash: 0x1363A998
 * @deprecated Use hud.getMapZoomDataLevel(index) instead
 */
export function getMapZoomDataLevel(index: number): [boolean, number, number, number, number, number] {
    return hud.getMapZoomDataLevel(index);
}

/**
 * Returns true if the minimap is currently expanded. False if it's the normal minimap state.
 * Use [`IsBigmapFull`](#\_0x66EE14B2) to check if the full map is currently revealed on the minimap.
 *
 * Hash: 0xFFF65C63
 * @deprecated Use hud.isBigmapActive() instead
 */
export function isBigmapActive(): boolean {
    return hud.isBigmapActive();
}

/**
 * No comment provided
 *
 * Hash: 0x66EE14B2
 * @deprecated Use hud.isBigmapFull() instead
 */
export function isBigmapFull(): boolean {
    return hud.isBigmapFull();
}

/**
 * Resets values from the zoom level data by index to defaults from mapzoomdata.meta.
 *
 * Hash: 0x11A5B7ED
 * @deprecated Use hud.resetMapZoomDataLevel(index) instead
 */
export function resetMapZoomDataLevel(index: number): void {
    return hud.resetMapZoomDataLevel(index);
}

/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 *
 * Hash: 0xEED219F2
 * @deprecated Use hud.setComponentAlign(id, horizontalAlign, verticalAlign) instead
 */
export function setHudComponentAlign(id: number, horizontalAlign: number, verticalAlign: number): void {
    return hud.setComponentAlign(id, horizontalAlign, verticalAlign);
}

/**
 * No comment provided
 *
 * Hash: 0x7644A9FA
 * @deprecated Use hud.setComponentSize(id, x, y) instead
 */
export function setHudComponentSize(id: number, x: number, y: number): void {
    return hud.setComponentSize(id, x, y);
}

/**
 * Sets values to the zoom level data by index.
 *
 * Hash: 0x447C718E
 * @deprecated Use hud.setMapZoomDataLevel(index, zoomScale, zoomSpeed, scrollSpeed, tilesX, tilesY) instead
 */
export function setMapZoomDataLevel(index: number, zoomScale: number, zoomSpeed: number, scrollSpeed: number, tilesX: number, tilesY: number): void {
    return hud.setMapZoomDataLevel(index, zoomScale, zoomSpeed, scrollSpeed, tilesX, tilesY);
}

/**
 * Get the minimap type:
 *
 * ```
 * 0 = Off,
 * 1 = Regular,
 * 2 = Expanded,
 * 3 = Simple,
 * ```
 *
 * Hash: 0xA6FF71C9
 * @deprecated Use hud.getMinimapType() instead
 */
export function getMinimapType(): number {
    return hud.getMinimapType();
}

/**
 * Possible Types:
 *
 * ```
 * 0 = Off,
 * 1 = Regular,
 * 2 = Expanded,
 * 3 = Simple,
 * ```
 *
 * Hash: 0x5FB53015
 * @deprecated Use hud.setMinimapType(_type) instead
 */
export function setMinimapType(_type: number): void {
    return hud.setMinimapType(_type);
}

/**
 * Adds the given model name hash to the list of valid models for the player ped's parachute.
 *
 * Hash: 0x8AC7AE9
 * @deprecated Use misc.addAuthorizedParachuteModel(modelNameHash) instead
 */
export function addAuthorizedParachuteModel(modelNameHash: number): void {
    return misc.addAuthorizedParachuteModel(modelNameHash);
}

/**
 * Adds the given model name hash to the list of valid models for the player ped's parachute pack.
 *
 * Hash: 0x2E86DEA5
 * @deprecated Use misc.addAuthorizedParachutePackModel(modelNameHash) instead
 */
export function addAuthorizedParachutePackModel(modelNameHash: number): void {
    return misc.addAuthorizedParachutePackModel(modelNameHash);
}

/**
 * Adds new health config.
 *
 * Hash: 0x9CBFD5C1
 * @deprecated Use misc.addHealthConfig(configName, defaultHealth, defaultArmor, defaultEndurance, fatiguedHealthThreshold, injuredHealthThreshold, dyingHealthThreshold, hurtHealthThreshold, dogTakedownThreshold, writheFromBulletThreshold, meleeCardinalFatalAttack, invincible) instead
 */
export function addHealthConfig(configName: string, defaultHealth: number, defaultArmor: number, defaultEndurance: number, fatiguedHealthThreshold: number, injuredHealthThreshold: number, dyingHealthThreshold: number, hurtHealthThreshold: number, dogTakedownThreshold: number, writheFromBulletThreshold: number, meleeCardinalFatalAttack: boolean, invincible: boolean): void {
    return misc.addHealthConfig(configName, defaultHealth, defaultArmor, defaultEndurance, fatiguedHealthThreshold, injuredHealthThreshold, dyingHealthThreshold, hurtHealthThreshold, dogTakedownThreshold, writheFromBulletThreshold, meleeCardinalFatalAttack, invincible);
}

/**
 * Disables the editor runtime mode, changing game behavior to not track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xB1622B17
 * @deprecated Use misc.disableEditorRuntime() instead
 */
export function disableEditorRuntime(): void {
    return misc.disableEditorRuntime();
}

/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity.
 *
 * Hash: 0x3D5AB7F0
 * @deprecated Use misc.disableIdleCamera(state) instead
 */
export function disableIdleCamera(state: boolean): void {
    return misc.disableIdleCamera(state);
}

/**
 * Enables the editor runtime mode, changing game behavior to track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xC383871D
 * @deprecated Use misc.enableEditorRuntime() instead
 */
export function enableEditorRuntime(): void {
    return misc.enableEditorRuntime();
}

/**
 * Enters cursor mode, suppressing mouse movement to the game and displaying a mouse cursor instead. This function supports
 * SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x780DA86
 * @deprecated Use misc.enterCursorMode() instead
 */
export function enterCursorMode(): void {
    return misc.enterCursorMode();
}

/**
 * A getter for [SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME](#\_0x0B919E1FB47CC4E0).
 *
 * Hash: 0xB550232D
 * @deprecated Use misc.getAmbientPedRangeMultiplier() instead
 */
export function getAmbientPedRangeMultiplier(): number {
    return misc.getAmbientPedRangeMultiplier();
}

/**
 * This native returns the index of a calming quad if the given point is inside its bounds.
 *
 * Hash: 0x870E8B40
 * @deprecated Use misc.getCalmingQuadAtCoords(x, y) instead
 */
export function getCalmingQuadAtCoords(x: number, y: number): number {
    return misc.getCalmingQuadAtCoords(x, y);
}

/**
 * No comment provided
 *
 * Hash: 0xFF60E63
 * @deprecated Use misc.getCalmingQuadBounds(waterQuad) instead
 */
export function getCalmingQuadBounds(waterQuad: number): [boolean, number, number, number, number] {
    return misc.getCalmingQuadBounds(waterQuad);
}

/**
 * No comment provided
 *
 * Hash: 0xCEBFC42
 * @deprecated Use misc.getCalmingQuadCount() instead
 */
export function getCalmingQuadCount(): number {
    return misc.getCalmingQuadCount();
}

/**
 * No comment provided
 *
 * Hash: 0xB0E3A058
 * @deprecated Use misc.getCalmingQuadDampening(waterQuad) instead
 */
export function getCalmingQuadDampening(waterQuad: number): [boolean, number] {
    return misc.getCalmingQuadDampening(waterQuad);
}

/**
 * No comment provided
 *
 * Hash: 0x5550BF9F
 * @deprecated Use misc.getFuelConsumptionRateMultiplier() instead
 */
export function getFuelConsumptionRateMultiplier(): number {
    return misc.getFuelConsumptionRateMultiplier();
}

/**
 * No comment provided
 *
 * Hash: 0xC66CD90C
 * @deprecated Use misc.getFuelConsumptionState() instead
 */
export function getFuelConsumptionState(): boolean {
    return misc.getFuelConsumptionState();
}

/**
 * A getter for [SET_GLOBAL_PASSENGER_MASS_MULTIPLIER](#\_0x3422291C).
 *
 * Hash: 0x78951816
 * @deprecated Use misc.getGlobalPassengerMassMultiplier() instead
 */
export function getGlobalPassengerMassMultiplier(): number {
    return misc.getGlobalPassengerMassMultiplier();
}

/**
 * Retrieves the map data entity handle.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x30AA6911
 * @deprecated Use misc.getMapdataEntityHandle(mapDataHash, entityInternalIdx) instead
 */
export function getMapdataEntityHandle(mapDataHash: number, entityInternalIdx: number): [boolean, number] {
    return misc.getMapdataEntityHandle(mapDataHash, entityInternalIdx);
}

/**
 * Returns mapdata's entity matrix. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * This should be used from JavaScript or another language supporting mutable buffers like ArrayBuffer.
 *
 * Matrix layout is as follows:
 *
 * *   Element \[0], \[1] and \[2] should represent the right vector.
 * *   Element \[4], \[5] and \[6] should represent the forward vector.
 * *   Element \[8], \[9] and \[10] should represent the up vector.
 * *   Element \[12], \[13] and \[14] should represent X, Y and Z translation coordinates.
 * *   All other elements should be \[0, 0, 0, 1].
 *
 * Hash: 0x2C3CDA93
 * @deprecated Use misc.getMapdataEntityMatrix(mapDataHash, entityInternalIdx, matrixPtr) instead
 */
export function getMapdataEntityMatrix(mapDataHash: number, entityInternalIdx: number, matrixPtr: number): boolean {
    return misc.getMapdataEntityMatrix(mapDataHash, entityInternalIdx, matrixPtr);
}

/**
 * Returns the transient map data index for a specified hash.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xD29D8EDD
 * @deprecated Use misc.getMapdataFromHashKey(mapdataHandle) instead
 */
export function getMapdataFromHashKey(mapdataHandle: number | string): number {
    return misc.getMapdataFromHashKey(mapdataHandle);
}

/**
 * A getter for [SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xEAE6DCC7EEE3DB1D).
 *
 * Hash: 0xFF72DF84
 * @deprecated Use misc.getParkedVehicleDensityMultiplier() instead
 */
export function getParkedVehicleDensityMultiplier(): number {
    return misc.getParkedVehicleDensityMultiplier();
}

/**
 * A getter for [SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xB3B3359379FE77D3).
 * Same as vehicle density multiplier.
 *
 * Hash: 0x7B0D00C5
 * @deprecated Use misc.getRandomVehicleDensityMultiplier() instead
 */
export function getRandomVehicleDensityMultiplier(): number {
    return misc.getRandomVehicleDensityMultiplier();
}

/**
 * A getter for [SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x7A556143A1C03898).
 *
 * Hash: 0x77C598B2
 * @deprecated Use misc.getScenarioPedDensityMultiplier() instead
 */
export function getScenarioPedDensityMultiplier(): number {
    return misc.getScenarioPedDensityMultiplier();
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Returns whether an asynchronous streaming file registration completed.
 *
 * Hash: 0xA194934D
 * @deprecated Use misc.isStreamingFileReady(registerAs) instead
 */
export function isStreamingFileReady(registerAs: string): boolean {
    return misc.isStreamingFileReady(registerAs);
}

/**
 * Leaves cursor mode. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xADECF19E
 * @deprecated Use misc.leaveCursorMode() instead
 */
export function leaveCursorMode(): void {
    return misc.leaveCursorMode();
}

/**
 * Toggles a check that prevents attaching (networked) entities to remotely owned peds. This is disabled by default.
 *
 * Hash: 0x30CE39D8
 * @deprecated Use misc.onesyncEnableRemoteAttachmentSanitization(enable) instead
 */
export function onesyncEnableRemoteAttachmentSanitization(enable: boolean): void {
    return misc.onesyncEnableRemoteAttachmentSanitization(enable);
}

/**
 * Replaces the `popgroups` (CPopGroupList) meta file with the file in the specified path.
 *
 * Hash: 0xD3BC438F
 * @deprecated Use misc.overridePopGroups(path) instead
 */
export function overridePopGroups(path: string): void {
    return misc.overridePopGroups(path);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a set of archetypes with the game engine. These should match `CBaseArchetypeDef` class information from the game.
 *
 * Hash: 0x3C2F9037
 * @deprecated Use misc.registerArchetypes(factory) instead
 */
export function registerArchetypes(factory: Function): void {
    return misc.registerArchetypes(factory);
}

/**
 * Registers a specified .gfx file as GFx font library.
 * The .gfx file has to be registered with the streamer already.
 *
 * Hash: 0x1B3A363
 * @deprecated Use misc.registerFontFile(fileName) instead
 */
export function registerFontFile(fileName: string): void {
    return misc.registerFontFile(fileName);
}

/**
 * Registers a specified font name for use with text draw commands.
 *
 * Hash: 0xACF6D8EE
 * @deprecated Use misc.registerFontId(fontName) instead
 */
export function registerFontId(fontName: string): number {
    return misc.registerFontId(fontName);
}

/**
 * Registers a key mapping for the current resource.
 *
 * See the related [cookbook post](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/) for more information.
 *
 * Below you can find some examples on how to create these keybindings as well as the alternate keybinding syntax, which is preceded by `~!` to indicate that it's an alternate key.
 *
 * Hash: 0xD7664FD1
 * @deprecated Use misc.registerKeyMapping(commandString, description, defaultMapper, defaultParameter) instead
 */
export function registerKeyMapping(commandString: string, description: string, defaultMapper: string, defaultParameter: string): void {
    return misc.registerKeyMapping(commandString, description, defaultMapper, defaultParameter);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a dynamic streaming asset from the server with the GTA streaming module system.
 *
 * Hash: 0xCEAD2D4B
 * @deprecated Use misc.registerStreamingFileFromCache(resourceName, fileName, cacheString) instead
 */
export function registerStreamingFileFromCache(resourceName: string, fileName: string, cacheString: string): void {
    return misc.registerStreamingFileFromCache(resourceName, fileName, cacheString);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a KVP value as an asset with the GTA streaming module system. This function currently won't work.
 *
 * Hash: 0x1493DCC1
 * @deprecated Use misc.registerStreamingFileFromKvs(kvsKey) instead
 */
export function registerStreamingFileFromKvs(kvsKey: string): void {
    return misc.registerStreamingFileFromKvs(kvsKey);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Registers a file from an URL as a streaming asset in the GTA streaming subsystem. This will asynchronously register the asset, and caching is done based on the URL itself - cache headers are ignored.
 *
 * Use `IS_STREAMING_FILE_READY` to check if the asset has been registered successfully.
 *
 * Hash: 0xF44BFB95
 * @deprecated Use misc.registerStreamingFileFromUrl(registerAs, url) instead
 */
export function registerStreamingFileFromUrl(registerAs: string, url: string): void {
    return misc.registerStreamingFileFromUrl(registerAs, url);
}

/**
 * Removes health config.
 *
 * Hash: 0xE0ED5FB
 * @deprecated Use misc.removeHealthConfig(configName) instead
 */
export function removeHealthConfig(configName: string): void {
    return misc.removeHealthConfig(configName);
}

/**
 * Adds a cooldown between instances of moving and then aiming.
 * Can be optionally used to hinder 'speedboosting'
 * To turn off, set value to 0
 *
 * Hash: 0xA42A3DBF
 * @deprecated Use misc.setAimCooldown(value) instead
 */
export function setAimCooldown(value: number): void {
    return misc.setAimCooldown(value);
}

/**
 * No comment provided
 *
 * Hash: 0xC5945BD9
 * @deprecated Use misc.setCalmingQuadBounds(waterQuad, minX, minY, maxX, maxY) instead
 */
export function setCalmingQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean {
    return misc.setCalmingQuadBounds(waterQuad, minX, minY, maxX, maxY);
}

/**
 * No comment provided
 *
 * Hash: 0x67977501
 * @deprecated Use misc.setCalmingQuadDampening(calmingQuad, dampening) instead
 */
export function setCalmingQuadDampening(calmingQuad: number, dampening: number): boolean {
    return misc.setCalmingQuadDampening(calmingQuad, dampening);
}

/**
 * Allows Weapon-Flashlight beams to stay visible while moving. Normally it only stays on while aiming.
 *
 * Hash: 0x7635B349
 * @deprecated Use misc.setFlashLightKeepOnWhileMoving(state) instead
 */
export function setFlashLightKeepOnWhileMoving(state: boolean): void {
    return misc.setFlashLightKeepOnWhileMoving(state);
}

/**
 * Sets fuel consumption rate multiplier for all vehicles operated by a player. This is a way to slow down or speed up fuel consumption for all vehicles at a time. If 0 - it practically means that fuel will not be consumed. By default is set to 1.
 *
 * When the multiplier is set to 1 a default 65 litre gas tank car with average fuel consumption can stay idle for ~16.67 hours or run with max RPM for ~2.5 hours.
 *
 * To customize fuel consumption per vehicle / vehicle class use [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolConsumptionRate`. By default it is set to 0.5 for all vehicles.
 *
 * Hash: 0x845F3E5C
 * @deprecated Use misc.setFuelConsumptionRateMultiplier(multiplier) instead
 */
export function setFuelConsumptionRateMultiplier(multiplier: number): void {
    return misc.setFuelConsumptionRateMultiplier(multiplier);
}

/**
 * Turns on and off fuel consumption in all vehicles operated by a player. NPC operated vehicles will not consume fuel to avoid traffic disruptions.
 *
 * The default Gta5 behaviour is fuel consumption turned off.
 *
 * Hash: 0x81DAD03E
 * @deprecated Use misc.setFuelConsumptionState(state) instead
 */
export function setFuelConsumptionState(state: boolean): void {
    return misc.setFuelConsumptionState(state);
}

/**
 * No comment provided
 *
 * Hash: 0x1C47F6AC
 * @deprecated Use misc.setGlobalPassengerMassMultiplier(massMul) instead
 */
export function setGlobalPassengerMassMultiplier(massMul: number): void {
    return misc.setGlobalPassengerMassMultiplier(massMul);
}

/**
 * Sets default armor value for specific health config.
 *
 * Hash: 0x20A1E6A2
 * @deprecated Use misc.setHealthConfigDefaultArmor(configName, newValue) instead
 */
export function setHealthConfigDefaultArmor(configName: string, newValue: number): void {
    return misc.setHealthConfigDefaultArmor(configName, newValue);
}

/**
 * Sets default endurance value for specific health config.
 *
 * Hash: 0x60F20B81
 * @deprecated Use misc.setHealthConfigDefaultEndurance(configName, newValue) instead
 */
export function setHealthConfigDefaultEndurance(configName: string, newValue: number): void {
    return misc.setHealthConfigDefaultEndurance(configName, newValue);
}

/**
 * Sets default health value for specific health config.
 *
 * Hash: 0xC705C778
 * @deprecated Use misc.setHealthConfigDefaultHealth(configName, newValue) instead
 */
export function setHealthConfigDefaultHealth(configName: string, newValue: number): void {
    return misc.setHealthConfigDefaultHealth(configName, newValue);
}

/**
 * Sets default dog takedown threshold value for specific health config.
 *
 * Hash: 0x9A995E96
 * @deprecated Use misc.setHealthConfigDogTakedownThreshold(configName, newValue) instead
 */
export function setHealthConfigDogTakedownThreshold(configName: string, newValue: number): void {
    return misc.setHealthConfigDogTakedownThreshold(configName, newValue);
}

/**
 * Sets default dying health threshold value for specific health config.
 *
 * Hash: 0x9B00FD77
 * @deprecated Use misc.setHealthConfigDyingThreshold(configName, newValue) instead
 */
export function setHealthConfigDyingThreshold(configName: string, newValue: number): void {
    return misc.setHealthConfigDyingThreshold(configName, newValue);
}

/**
 * Sets default fatigued health threshold value for specific health config.
 *
 * Hash: 0xC58953FD
 * @deprecated Use misc.setHealthConfigFatiguedThreshold(configName, newValue) instead
 */
export function setHealthConfigFatiguedThreshold(configName: string, newValue: number): void {
    return misc.setHealthConfigFatiguedThreshold(configName, newValue);
}

/**
 * Sets default hurt health threshold value for specific health config.
 *
 * Hash: 0x98DF1A83
 * @deprecated Use misc.setHealthConfigHurtThreshold(configName, newValue) instead
 */
export function setHealthConfigHurtThreshold(configName: string, newValue: number): void {
    return misc.setHealthConfigHurtThreshold(configName, newValue);
}

/**
 * Sets default injured health threshold value for specific health config.
 *
 * Hash: 0xF9D9B647
 * @deprecated Use misc.setHealthConfigInjuredThreshold(configName, newValue) instead
 */
export function setHealthConfigInjuredThreshold(configName: string, newValue: number): void {
    return misc.setHealthConfigInjuredThreshold(configName, newValue);
}

/**
 * Sets default invincible value for specific health config.
 *
 * Hash: 0x4A9EEDE6
 * @deprecated Use misc.setHealthConfigInvincible(configName, newValue) instead
 */
export function setHealthConfigInvincible(configName: string, newValue: boolean): void {
    return misc.setHealthConfigInvincible(configName, newValue);
}

/**
 * Sets default melee cardinal fatal attack value for specific health config.
 *
 * Hash: 0xDD443E53
 * @deprecated Use misc.setHealthConfigMeleeFatalAttack(configName, newValue) instead
 */
export function setHealthConfigMeleeFatalAttack(configName: string, newValue: boolean): void {
    return misc.setHealthConfigMeleeFatalAttack(configName, newValue);
}

/**
 * Sets default writhe from bullet threshold value for specific health config.
 *
 * Hash: 0xE97633CB
 * @deprecated Use misc.setHealthConfigWritheFromBulletThreshold(configName, newValue) instead
 */
export function setHealthConfigWritheFromBulletThreshold(configName: string, newValue: number): void {
    return misc.setHealthConfigWritheFromBulletThreshold(configName, newValue);
}

/**
 * Overrides how many real ms are equal to one game minute.
 * A setter for [`GetMillisecondsPerGameMinute`](#\_0x2F8B4D1C595B11DB).
 *
 * Hash: 0x36CA2554
 * @deprecated Use misc.setMillisecondsPerGameMinute(value) instead
 */
export function setMillisecondsPerGameMinute(value: number): void {
    return misc.setMillisecondsPerGameMinute(value);
}

/**
 * <strong>This native is deprecated and does nothing!</strong>
 *
 * Hash: 0x7F6B8D75
 * @deprecated Use misc.setModelHeadlightConfiguration(modelHash, ratePerSecond, headlightRotation, invertRotation) instead
 */
export function setModelHeadlightConfiguration(modelHash: number | string, ratePerSecond: number, headlightRotation: number, invertRotation: boolean): void {
    return misc.setModelHeadlightConfiguration(modelHash, ratePerSecond, headlightRotation, invertRotation);
}

/**
 * Sets whether all tags should group (normal game behavior) or should remain independent and above each ped's respective head when in a vehicle.
 *
 * Hash: 0x7A27BC93
 * @deprecated Use misc.setMpGamerTagsUseVehicleBehavior(enabled) instead
 */
export function setMpGamerTagsUseVehicleBehavior(enabled: boolean): void {
    return misc.setMpGamerTagsUseVehicleBehavior(enabled);
}

/**
 * Sets the maximum distance at which all tags will be visible and which beyond will not be displayed. Distance is measured from the camera position.
 *
 * Hash: 0xD61676B3
 * @deprecated Use misc.setMpGamerTagsVisibleDistance(distance) instead
 */
export function setMpGamerTagsVisibleDistance(distance: number): void {
    return misc.setMpGamerTagsVisibleDistance(distance);
}

/**
 * Registers a keymap that will be triggered whenever `rawKeyIndex` is pressed or released.
 *
 * `onKeyUp` and `onKeyDown` will not provide any arguments.
 *
 * ```ts
 * function onStateChange();
 * ```
 *
 * Hash: 0x49C1F6DC
 * @deprecated Use misc.registerRawKeymap(keymapName, onKeyDown, onKeyUp, rawKeyIndex, canBeDisabled) instead
 */
export function registerRawKeymap(keymapName: string, onKeyDown: Function, onKeyUp: Function, rawKeyIndex: number, canBeDisabled: boolean): void {
    return misc.registerRawKeymap(keymapName, onKeyDown, onKeyUp, rawKeyIndex, canBeDisabled);
}

/**
 * Remaps the keymap bound to `keymapName` to `newRawKeyIndex`
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x6E38C1B9
 * @deprecated Use misc.remapRawKeymap(keymapName, newRawKeyIndex) instead
 */
export function remapRawKeymap(keymapName: string, newRawKeyIndex: number): void {
    return misc.remapRawKeymap(keymapName, newRawKeyIndex);
}

/**
 * No comment provided
 *
 * Hash: 0xC44C2F44
 * @deprecated Use misc.setBackfaceculling(toggle) instead
 */
export function setBackfaceculling(toggle: boolean): void {
    return misc.setBackfaceculling(toggle);
}

/**
 * No comment provided
 *
 * Hash: 0x8A7A8DAC
 * @deprecated Use misc.setCursorLocation(x, y) instead
 */
export function setCursorLocation(x: number, y: number): boolean {
    return misc.setCursorLocation(x, y);
}

/**
 * Sets whether or not ownership checks should be performed while trying to stow a carriable on a hunting wagon.
 *
 * Hash: 0x85A10FFD
 * @deprecated Use misc.setIgnoreVehicleOwnershipForStowing(ignore) instead
 */
export function setIgnoreVehicleOwnershipForStowing(ignore: boolean): void {
    return misc.setIgnoreVehicleOwnershipForStowing(ignore);
}

/**
 * Activates built-in timecycle editing tool.
 *
 * Hash: 0xEEB9B76A
 * @deprecated Use misc.activateTimecycleEditor() instead
 */
export function activateTimecycleEditor(): void {
    return misc.activateTimecycleEditor();
}

/**
 * No comment provided
 *
 * Hash: 0x3422291C
 * @deprecated Use misc.applyWeatherCycles(numEntries, msPerCycle) instead
 */
export function applyWeatherCycles(numEntries: number, msPerCycle: number): boolean {
    return misc.applyWeatherCycles(numEntries, msPerCycle);
}

/**
 * No comment provided
 *
 * Hash: 0x54D636B3
 * @deprecated Use misc.cloneTimecycleModifier(sourceModifierName, clonedModifierName) instead
 */
export function cloneTimecycleModifier(sourceModifierName: string, clonedModifierName: string): number {
    return misc.cloneTimecycleModifier(sourceModifierName, clonedModifierName);
}

/**
 * Create a clean timecycle modifier. See [`SET_TIMECYCLE_MODIFIER_VAR`](#\_0x6E0A422B) to add variables.
 *
 * Hash: 0x70FA2AFA
 * @deprecated Use misc.createTimecycleModifier(modifierName) instead
 */
export function createTimecycleModifier(modifierName: string): number {
    return misc.createTimecycleModifier(modifierName);
}

/**
 * Disables the game's world horizon lods rendering (see `farlods.#dd`).
 * Using the island hopper natives might also affect this state.
 *
 * Hash: 0xA9C92CDC
 * @deprecated Use misc.disableWorldhorizonRendering(state) instead
 */
export function disableWorldhorizonRendering(state: boolean): void {
    return misc.disableWorldhorizonRendering(state);
}

/**
 * No comment provided
 *
 * Hash: 0xC53BB6D3
 * @deprecated Use misc.doesTimecycleModifierHasVar(modifierName, varName) instead
 */
export function doesTimecycleModifierHasVar(modifierName: string, varName: string): boolean {
    return misc.doesTimecycleModifierHasVar(modifierName, varName);
}

/**
 * No comment provided
 *
 * Hash: 0xDEDA4E50
 * @deprecated Use misc.endFindObject(findHandle) instead
 */
export function endFindObject(findHandle: number): void {
    return misc.endFindObject(findHandle);
}

/**
 * No comment provided
 *
 * Hash: 0x9615C2AD
 * @deprecated Use misc.endFindPed(findHandle) instead
 */
export function endFindPed(findHandle: number): void {
    return misc.endFindPed(findHandle);
}

/**
 * No comment provided
 *
 * Hash: 0x3C407D53
 * @deprecated Use misc.endFindPickup(findHandle) instead
 */
export function endFindPickup(findHandle: number): void {
    return misc.endFindPickup(findHandle);
}

/**
 * No comment provided
 *
 * Hash: 0x9227415A
 * @deprecated Use misc.endFindVehicle(findHandle) instead
 */
export function endFindVehicle(findHandle: number): void {
    return misc.endFindVehicle(findHandle);
}

/**
 * This native is not implemented.
 *
 * Hash: 0xD2CB95A3
 * @deprecated Use misc.experimentalLoadCloneCreate(data, objectId, tree) instead
 */
export function experimentalLoadCloneCreate(data: string, objectId: number, tree: string): number {
    return misc.experimentalLoadCloneCreate(data, objectId, tree);
}

/**
 * This native is not implemented.
 *
 * Hash: 0x6BC189AC
 * @deprecated Use misc.experimentalLoadCloneSync(entity, data) instead
 */
export function experimentalLoadCloneSync(entity: number | Entity, data: string): void {
    return misc.experimentalLoadCloneSync(entity, data);
}

/**
 * This native is not implemented.
 *
 * Hash: 0x9D65CAD2
 * @deprecated Use misc.experimentalSaveCloneCreate(entity) instead
 */
export function experimentalSaveCloneCreate(entity: number | Entity): string {
    return misc.experimentalSaveCloneCreate(entity);
}

/**
 * This native is not implemented.
 *
 * Hash: 0x38D19210
 * @deprecated Use misc.experimentalSaveCloneSync(entity) instead
 */
export function experimentalSaveCloneSync(entity: number | Entity): string {
    return misc.experimentalSaveCloneSync(entity);
}

/**
 * No comment provided
 *
 * Hash: 0xFAA6CB5D
 * @deprecated Use misc.findFirstObject() instead
 */
export function findFirstObject(): [number, number] {
    return misc.findFirstObject();
}

/**
 * No comment provided
 *
 * Hash: 0xFB012961
 * @deprecated Use misc.findFirstPed() instead
 */
export function findFirstPed(): [number, number] {
    return misc.findFirstPed();
}

/**
 * No comment provided
 *
 * Hash: 0x3FF9D340
 * @deprecated Use misc.findFirstPickup() instead
 */
export function findFirstPickup(): [number, number] {
    return misc.findFirstPickup();
}

/**
 * No comment provided
 *
 * Hash: 0x15E55694
 * @deprecated Use misc.findFirstVehicle() instead
 */
export function findFirstVehicle(): [number, number] {
    return misc.findFirstVehicle();
}

/**
 * No comment provided
 *
 * Hash: 0x4E129DBF
 * @deprecated Use misc.findNextObject(findHandle) instead
 */
export function findNextObject(findHandle: number): [boolean, number] {
    return misc.findNextObject(findHandle);
}

/**
 * No comment provided
 *
 * Hash: 0xAB09B548
 * @deprecated Use misc.findNextPed(findHandle) instead
 */
export function findNextPed(findHandle: number): [boolean, number] {
    return misc.findNextPed(findHandle);
}

/**
 * No comment provided
 *
 * Hash: 0x4107EF0F
 * @deprecated Use misc.findNextPickup(findHandle) instead
 */
export function findNextPickup(findHandle: number): [boolean, number] {
    return misc.findNextPickup(findHandle);
}

/**
 * No comment provided
 *
 * Hash: 0x8839120D
 * @deprecated Use misc.findNextVehicle(findHandle) instead
 */
export function findNextVehicle(findHandle: number): [boolean, number] {
    return misc.findNextVehicle(findHandle);
}

/**
 * This native returns the currently used game's name.
 *
 * Hash: 0xACA18ECD
 * @deprecated Use misc.getCurrentGameName() instead
 */
export function getCurrentGameName(): string {
    return misc.getCurrentGameName();
}

/**
 * Returns the peer address of the remote game server that the user is currently connected to.
 *
 * Hash: 0xEA11BFBA
 * @deprecated Use misc.getCurrentServerEndpoint() instead
 */
export function getCurrentServerEndpoint(): string {
    return misc.getCurrentServerEndpoint();
}

/**
 * No comment provided
 *
 * Hash: 0xFE2A1D4D
 * @deprecated Use misc.getTimecycleModifierCount() instead
 */
export function getTimecycleModifierCount(): number {
    return misc.getTimecycleModifierCount();
}

/**
 * No comment provided
 *
 * Hash: 0x5F4CD0E2
 * @deprecated Use misc.getTimecycleModifierIndexByName(modifierName) instead
 */
export function getTimecycleModifierIndexByName(modifierName: string): number {
    return misc.getTimecycleModifierIndexByName(modifierName);
}

/**
 * No comment provided
 *
 * Hash: 0x28CB8608
 * @deprecated Use misc.getTimecycleModifierNameByIndex(modifierIndex) instead
 */
export function getTimecycleModifierNameByIndex(modifierIndex: number): string {
    return misc.getTimecycleModifierNameByIndex(modifierIndex);
}

/**
 * A getter for [SET_TIMECYCLE_MODIFIER_STRENGTH](#\_0x82E7FFCD5B2326B3).
 *
 * Hash: 0xBE54124A
 * @deprecated Use misc.getTimecycleModifierStrength() instead
 */
export function getTimecycleModifierStrength(): number {
    return misc.getTimecycleModifierStrength();
}

/**
 * No comment provided
 *
 * Hash: 0xA7109E12
 * @deprecated Use misc.getTimecycleModifierVar(modifierName, varName) instead
 */
export function getTimecycleModifierVar(modifierName: string, varName: string): [boolean, number, number] {
    return misc.getTimecycleModifierVar(modifierName, varName);
}

/**
 * No comment provided
 *
 * Hash: 0x60FB60FE
 * @deprecated Use misc.getTimecycleModifierVarCount(modifierName) instead
 */
export function getTimecycleModifierVarCount(modifierName: string): number {
    return misc.getTimecycleModifierVarCount(modifierName);
}

/**
 * No comment provided
 *
 * Hash: 0xE874AB1D
 * @deprecated Use misc.getTimecycleModifierVarNameByIndex(modifierName, modifierVarIndex) instead
 */
export function getTimecycleModifierVarNameByIndex(modifierName: string, modifierVarIndex: number): string {
    return misc.getTimecycleModifierVarNameByIndex(modifierName, modifierVarIndex);
}

/**
 * Returns the amount of variables available to be applied on timecycle modifiers.
 *
 * Hash: 0x838B34D8
 * @deprecated Use misc.getTimecycleVarCount() instead
 */
export function getTimecycleVarCount(): number {
    return misc.getTimecycleVarCount();
}

/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 *
 * Hash: 0x3B90238
 * @deprecated Use misc.getTimecycleVarDefaultValueByIndex(varIndex) instead
 */
export function getTimecycleVarDefaultValueByIndex(varIndex: number): number {
    return misc.getTimecycleVarDefaultValueByIndex(varIndex);
}

/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 *
 * Hash: 0xC6C55AAF
 * @deprecated Use misc.getTimecycleVarNameByIndex(varIndex) instead
 */
export function getTimecycleVarNameByIndex(varIndex: number): string {
    return misc.getTimecycleVarNameByIndex(varIndex);
}

/**
 * Converts a screen coordinate into its relative world coordinate.
 *
 * Hash: 0xC81D0659
 * @deprecated Use misc.getWorldCoordFromScreenCoord(screenSize) instead
 */
export function getWorldCoordFromScreenCoord(screenSize: Vector2): [Vector3, Vector3] {
    return misc.getWorldCoordFromScreenCoord(screenSize);
}

/**
 * No comment provided
 *
 * Hash: 0x36DF8612
 * @deprecated Use misc.removeTimecycleModifier(modifierName) instead
 */
export function removeTimecycleModifier(modifierName: string): void {
    return misc.removeTimecycleModifier(modifierName);
}

/**
 * No comment provided
 *
 * Hash: 0x5A5E0D05
 * @deprecated Use misc.removeTimecycleModifierVar(modifierName, varName) instead
 */
export function removeTimecycleModifierVar(modifierName: string, varName: string): void {
    return misc.removeTimecycleModifierVar(modifierName, varName);
}

/**
 * Requests a resource file set with the specified name to be downloaded and mounted on top of the current resource.
 *
 * Resource file sets are specified in `fxmanifest.lua` with the following syntax:
 *
 * ```lua
 * file_set 'addon_ui' {
 * 'ui/addon/index.html',
 * 'ui/addon\/\**.js',
 * }
 * ```
 *
 * This command will trigger a script error if the request failed.
 *
 * Hash: 0xE7490533
 * @deprecated Use misc.requestResourceFileSet(setName) instead
 */
export function requestResourceFileSet(setName: string): boolean {
    return misc.requestResourceFileSet(setName);
}

/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 *
 * Hash: 0x8BBE6CC0
 * @deprecated Use misc.sendLoadingScreenMessage(jsonString) instead
 */
export function sendLoadingScreenMessage(jsonString: string): boolean {
    return misc.sendLoadingScreenMessage(jsonString);
}

/**
 * Toggles the visibility of resource names in the FiveM key mapping page.
 *
 * Hash: 0xCB0241B5
 * @deprecated Use misc.setKeyMappingHideResources(hide) instead
 */
export function setKeyMappingHideResources(hide: boolean): void {
    return misc.setKeyMappingHideResources(hide);
}

/**
 * No comment provided
 *
 * Hash: 0xA7DD3209
 * @deprecated Use misc.setSnakeoilForEntry(name, path, data) instead
 */
export function setSnakeoilForEntry(name: string, path: string, data: string): void {
    return misc.setSnakeoilForEntry(name, path, data);
}

/**
 * No comment provided
 *
 * Hash: 0x97B2F9F8
 * @deprecated Use misc.setTextChatEnabled(enabled) instead
 */
export function setTextChatEnabled(enabled: boolean): boolean {
    return misc.setTextChatEnabled(enabled);
}

/**
 * No comment provided
 *
 * Hash: 0x6E0A422B
 * @deprecated Use misc.setTimecycleModifierVar(modifierName, varName, value1, value2) instead
 */
export function setTimecycleModifierVar(modifierName: string, varName: string, value1: number, value2: number): void {
    return misc.setTimecycleModifierVar(modifierName, varName, value1, value2);
}

/**
 * No comment provided
 *
 * Hash: 0xD264D4E1
 * @deprecated Use misc.setWeatherCycleEntry(index, typeName, timeMult) instead
 */
export function setWeatherCycleEntry(index: number, typeName: string, timeMult: number): boolean {
    return misc.setWeatherCycleEntry(index, typeName, timeMult);
}

/**
 * Sets whether or not the weather should be owned by the network subsystem.
 *
 * To be able to use [\_SET_WEATHER_TYPE_TRANSITION](#\_0x578C752848ECFA0C), this has to be set to false.
 *
 * Hash: 0x2703D582
 * @deprecated Use misc.setWeatherOwnedByNetwork(network) instead
 */
export function setWeatherOwnedByNetwork(network: boolean): void {
    return misc.setWeatherOwnedByNetwork(network);
}

/**
 * The backing function for TriggerLatentServerEvent.
 *
 * Hash: 0x128737EA
 * @deprecated Use misc.triggerLatentServerEventInternal(eventName, eventPayload, payloadLength, bps) instead
 */
export function triggerLatentServerEventInternal(eventName: string, eventPayload: string, payloadLength: number, bps: number): void {
    return misc.triggerLatentServerEventInternal(eventName, eventPayload, payloadLength, bps);
}

/**
 * The backing function for TriggerServerEvent.
 *
 * Hash: 0x7FDD1128
 * @deprecated Use misc.triggerServerEventInternal(eventName, eventPayload, payloadLength) instead
 */
export function triggerServerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void {
    return misc.triggerServerEventInternal(eventName, eventPayload, payloadLength);
}

/**
 * Adds a listener for Console Variable changes.
 *
 * The function called expects to match the following signature:
 *
 * ```ts
 * function ConVarChangeListener(conVarName: string, reserved: any);
 * ```
 *
 * *   **conVarName**: The ConVar that changed.
 * *   **reserved**: Currently unused.
 *
 * Hash: 0xAB7F7241
 * @deprecated Use misc.addConvarChangeListener(conVarFilter, handler) instead
 */
export function addConvarChangeListener(conVarFilter: string, handler: Function): number {
    return misc.addConvarChangeListener(conVarFilter, handler);
}

/**
 * Adds a handler for changes to a state bag.
 *
 * The function called expects to match the following signature:
 *
 * ```ts
 * function StateBagChangeHandler(bagName: string, key: string, value: any, reserved: number, replicated: boolean);
 * ```
 *
 * *   **bagName**: The internal bag ID for the state bag which changed. This is usually `player:Source`, `entity:NetID`
 * or `localEntity:Handle`.
 * *   **key**: The changed key.
 * *   **value**: The new value stored at key. The old value is still stored in the state bag at the time this callback executes.
 * *   **reserved**: Currently unused.
 * *   **replicated**: Whether the set is meant to be replicated.
 *
 * At this time, the change handler can't opt to reject changes.
 *
 * If bagName refers to an entity, use [GET_ENTITY_FROM_STATE_BAG_NAME](#\_0x4BDF1867) to get the entity handle
 * If bagName refers to a player, use [GET_PLAYER_FROM_STATE_BAG_NAME](#\_0xA56135E0) to get the player handle
 *
 * Hash: 0x5BA35AAF
 * @deprecated Use misc.addStateBagChangeHandler(keyFilter, bagFilter, handler) instead
 */
export function addStateBagChangeHandler(keyFilter: string, bagFilter: string, handler: Function): number {
    return misc.addStateBagChangeHandler(keyFilter, bagFilter, handler);
}

/**
 * Cancels the currently executing event.
 *
 * Hash: 0xFA29D35D
 * @deprecated Use misc.cancelEvent() instead
 */
export function cancelEvent(): void {
    return misc.cancelEvent();
}

/**
 * No comment provided
 *
 * Hash: 0x1E86F206
 * @deprecated Use misc.deleteFunctionReference(referenceIdentity) instead
 */
export function deleteFunctionReference(referenceIdentity: string): void {
    return misc.deleteFunctionReference(referenceIdentity);
}

/**
 * No comment provided
 *
 * Hash: 0xF4E2079D
 * @deprecated Use misc.duplicateFunctionReference(referenceIdentity) instead
 */
export function duplicateFunctionReference(referenceIdentity: string): string {
    return misc.duplicateFunctionReference(referenceIdentity);
}

/**
 * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
 *
 * Hash: 0x561C060B
 * @deprecated Use misc.executeCommand(commandString) instead
 */
export function executeCommand(commandString: string): void {
    return misc.executeCommand(commandString);
}

/**
 * An internal function for converting a stack trace object to a string.
 *
 * Hash: 0xD70C3BCA
 * @deprecated Use misc.formatStackTrace(traceData) instead
 */
export function formatStackTrace(traceData: number | Object): string {
    return misc.formatStackTrace(traceData);
}

/**
 * Can be used to get a console variable of type `char*`, for example a string.
 *
 * Hash: 0x6CCD2564
 * @deprecated Use misc.getConvar(varName, default_) instead
 */
export function getConvar(varName: string, default_: string): string {
    return misc.getConvar(varName, default_);
}

/**
 * Can be used to get a console variable casted back to `bool`.
 *
 * Hash: 0x7E8EBFE5
 * @deprecated Use misc.getConvarBool(varName, defaultValue) instead
 */
export function getConvarBool(varName: string, defaultValue: boolean): boolean {
    return misc.getConvarBool(varName, defaultValue);
}

/**
 * This will have floating point inaccuracy.
 *
 * Hash: 0x9E666D
 * @deprecated Use misc.getConvarFloat(varName, defaultValue) instead
 */
export function getConvarFloat(varName: string, defaultValue: number): number {
    return misc.getConvarFloat(varName, defaultValue);
}

/**
 * Can be used to get a console variable casted back to `int` (an integer value).
 *
 * Hash: 0x935C0AB2
 * @deprecated Use misc.getConvarInt(varName, default_) instead
 */
export function getConvarInt(varName: string, default_: number): number {
    return misc.getConvarInt(varName, default_);
}

/**
 * Returns the internal build number of the current game being executed.
 *
 * Possible values:
 *
 * *   FiveM
 * *   1604
 * *   2060
 * *   2189
 * *   2372
 * *   2545
 * *   2612
 * *   2699
 * *   2802
 * *   2944
 * *   3095
 * *   3258
 * *   3323
 * *   3407
 * *   3570
 * *   RedM
 * *   1311
 * *   1355
 * *   1436
 * *   1491
 * *   LibertyM
 * *   43
 * *   FXServer
 * *   0
 *
 * Hash: 0x804B9F7B
 * @deprecated Use misc.getGameBuildNumber() instead
 */
export function getGameBuildNumber(): number {
    return misc.getGameBuildNumber();
}

/**
 * Returns the current game being executed.
 *
 * Possible values:
 *
 * | Return value | Meaning                        |
 * | ------------ | ------------------------------ |
 * | `fxserver`   | Server-side code ('Duplicity') |
 * | `fivem`      | FiveM for GTA V                |
 * | `libertym`   | LibertyM for GTA IV            |
 * | `redm`       | RedM for Red Dead Redemption 2 |
 *
 * Hash: 0xE8EAA18B
 * @deprecated Use misc.getGameName() instead
 */
export function getGameName(): string {
    return misc.getGameName();
}

/**
 * Returns a list of entity handles (script GUID) for all entities in the specified pool - the data returned is an array as
 * follows:
 *
 * ```json
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 *
 * ### Supported pools
 *
 * *   `CPed`: Peds (including animals) and players.
 * *   `CObject`: Objects (props), doors, and projectiles.
 * *   `CNetObject`: Networked objects
 * *   `CVehicle`: Vehicles.
 * *   `CPickup`: Pickups.
 *
 * Hash: 0x2B9D4F50
 * @deprecated Use misc.getGamePool(poolName) instead
 */
export function getGamePool(poolName: string): number {
    return misc.getGamePool(poolName);
}

/**
 * No comment provided
 *
 * Hash: 0x9F1C4383
 * @deprecated Use misc.getInstanceId() instead
 */
export function getInstanceId(): number {
    return misc.getInstanceId();
}

/**
 * Returns all commands that are registered in the command system.
 * The data returned adheres to the following layout:
 *
 * ```
 * [
 * {
 * "name": "cmdlist",
 * "resource": "resource",
 * "arity" = -1,
 * },
 * {
 * "name": "command1"
 * "resource": "resource_2",
 * "arity" = -1,
 * }
 * ]
 * ```
 *
 * Hash: 0xD4BEF069
 * @deprecated Use misc.getRegisteredCommands() instead
 */
export function getRegisteredCommands(): number {
    return misc.getRegisteredCommands();
}

/**
 * No comment provided
 *
 * Hash: 0x78D864C7
 * @deprecated Use misc.getStateBagKeys(bagName) instead
 */
export function getStateBagKeys(bagName: string): number {
    return misc.getStateBagKeys(bagName);
}

/**
 * Returns the value of a state bag key.
 *
 * Hash: 0x637F4C75
 * @deprecated Use misc.getStateBagValue(bagName, key) instead
 */
export function getStateBagValue(bagName: string, key: string): number {
    return misc.getStateBagValue(bagName, key);
}

/**
 * No comment provided
 *
 * Hash: 0x7EBB9929
 * @deprecated Use misc.isAceAllowed(_object) instead
 */
export function isAceAllowed(_object: string): boolean {
    return misc.isAceAllowed(_object);
}

/**
 * Gets whether or not this is the CitizenFX server.
 *
 * Hash: 0xCF24C52E
 * @deprecated Use misc.isDuplicityVersion() instead
 */
export function isDuplicityVersion(): boolean {
    return misc.isDuplicityVersion();
}

/**
 * No comment provided
 *
 * Hash: 0x37CF52CE
 * @deprecated Use misc.isPrincipalAceAllowed(principal, _object) instead
 */
export function isPrincipalAceAllowed(principal: string, _object: string): boolean {
    return misc.isPrincipalAceAllowed(principal, _object);
}

/**
 * Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). Or by entering them in the server console/through an RCON client (only works for server side registered commands). Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a `/`.
 *
 * Commands registered using this function can also be executed by resources, using the [`ExecuteCommand` native](#\_0x561C060B).
 *
 * The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).
 *
 * **Example result**:
 *
 * ![](https://i.imgur.com/TaCnG09.png)
 *
 * Hash: 0x5FA79B0F
 * @deprecated Use misc.registerCommand(commandName, handler, restricted) instead
 */
export function registerCommand(commandName: string, handler: Function, restricted: boolean): void {
    return misc.registerCommand(commandName, handler, restricted);
}

/**
 * No comment provided
 *
 * Hash: 0xEAC49841
 * @deprecated Use misc.removeConvarChangeListener(cookie) instead
 */
export function removeConvarChangeListener(cookie: number): void {
    return misc.removeConvarChangeListener(cookie);
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 *
 * Removes a handler for changes to a state bag.
 *
 * Hash: 0xD36BE661
 * @deprecated Use misc.removeStateBagChangeHandler(cookie) instead
 */
export function removeStateBagChangeHandler(cookie: number): void {
    return misc.removeStateBagChangeHandler(cookie);
}

/**
 * Internal function for setting a state bag value.
 *
 * Hash: 0x8D50E33A
 * @deprecated Use misc.setStateBagValue(bagName, keyName, valueData, valueLength, replicated) instead
 */
export function setStateBagValue(bagName: string, keyName: string, valueData: string, valueLength: number, replicated: boolean): void {
    return misc.setStateBagValue(bagName, keyName, valueData, valueLength, replicated);
}

/**
 * No comment provided
 *
 * Hash: 0x12A330
 * @deprecated Use misc.stateBagHasKey(bagName, key) instead
 */
export function stateBagHasKey(bagName: string, key: string): boolean {
    return misc.stateBagHasKey(bagName, key);
}

/**
 * The backing function for TriggerEvent.
 *
 * Hash: 0x91310870
 * @deprecated Use misc.triggerEventInternal(eventName, eventPayload, payloadLength) instead
 */
export function triggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void {
    return misc.triggerEventInternal(eventName, eventPayload, payloadLength);
}

/**
 * Returns whether or not the currently executing event was canceled.
 *
 * Hash: 0x58382A19
 * @deprecated Use misc.wasEventCanceled() instead
 */
export function wasEventCanceled(): boolean {
    return misc.wasEventCanceled();
}

/**
 * An analogue of [GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS](#\_0x27561561732A7842) that returns number of drawable variations inside a single collection instead of the total number across all collections.
 *
 * Hash: 0x310D0271
 * @deprecated Use ped.getNumberOfCollectionDrawableVariations(ped1, componentId, collection) instead
 */
export function getNumberOfPedCollectionDrawableVariations(ped1: number | Ped, componentId: number, collection: string): number {
    return ped.getNumberOfCollectionDrawableVariations(ped1, componentId, collection);
}

/**
 * An analogue of [GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS](#\_0x5FAF9754E789FB47) that returns number of prop variations inside a single collection instead of the total number across all collections.
 *
 * Hash: 0x3B6A13E1
 * @deprecated Use ped.getNumberOfCollectionPropDrawableVariations(ped1, anchorPoint, collection) instead
 */
export function getNumberOfPedCollectionPropDrawableVariations(ped1: number | Ped, anchorPoint: number, collection: string): number {
    return ped.getNumberOfCollectionPropDrawableVariations(ped1, anchorPoint, collection);
}

/**
 * An alternative to [GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS](#\_0xA6E7F1CEB523E171) that uses local collection indexing instead of the global one.
 *
 * Hash: 0x75CAF9CC
 * @deprecated Use ped.getNumberOfCollectionPropTextureVariations(ped1, anchorPoint, collection, propIndex) instead
 */
export function getNumberOfPedCollectionPropTextureVariations(ped1: number | Ped, anchorPoint: number, collection: string, propIndex: number): number {
    return ped.getNumberOfCollectionPropTextureVariations(ped1, anchorPoint, collection, propIndex);
}

/**
 * An alternative to [GET_NUMBER_OF_PED_TEXTURE_VARIATIONS](#\_0x8F7156A3142A6BAD) that uses local collection indexing instead of the global one.
 *
 * Hash: 0xD2C15D7
 * @deprecated Use ped.getNumberOfCollectionTextureVariations(ped1, componentId, collection, drawableId) instead
 */
export function getNumberOfPedCollectionTextureVariations(ped1: number | Ped, componentId: number, collection: string, drawableId: number): number {
    return ped.getNumberOfCollectionTextureVariations(ped1, componentId, collection, drawableId);
}

/**
 * Returns number of variation collections available for the given Ped.
 *
 * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
 *
 * `GET_PED_COLLECTIONS_COUNT` can be used together with [GET_PED_COLLECTION_NAME](#\_0xFED5D83A) to list all collections attached to Ped.
 *
 * Hash: 0x45946359
 * @deprecated Use ped.getCollectionsCount(ped1) instead
 */
export function getPedCollectionsCount(ped1: number | Ped): number {
    return ped.getCollectionsCount(ped1);
}

/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B)) for the given global drawable ID. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 *
 * Hash: 0x94EB1FE4
 * @deprecated Use ped.getCollectionLocalIndexFromDrawable(ped1, componentId, drawableId) instead
 */
export function getPedCollectionLocalIndexFromDrawable(ped1: number | Ped, componentId: number, drawableId: number): number {
    return ped.getCollectionLocalIndexFromDrawable(ped1, componentId, drawableId);
}

/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17)) for the given global prop index. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 *
 * Hash: 0xFBDB885F
 * @deprecated Use ped.getCollectionLocalIndexFromProp(ped1, anchorPoint, propIndex) instead
 */
export function getPedCollectionLocalIndexFromProp(ped1: number | Ped, anchorPoint: number, propIndex: number): number {
    return ped.getCollectionLocalIndexFromProp(ped1, anchorPoint, propIndex);
}

/**
 * Returns name of collection under given index for the given Ped.
 *
 * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
 *
 * `GET_PED_COLLECTION_NAME` can be used together with [GET_PED_COLLECTIONS_COUNT](#\_0x45946359) to list all collections attached to Ped.
 *
 * Hash: 0xFED5D83A
 * @deprecated Use ped.getCollectionName(ped1, index) instead
 */
export function getPedCollectionName(ped1: number | Ped, index: number): string {
    return ped.getCollectionName(ped1, index);
}

/**
 * Gets collection name for the given global drawable ID. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) is used to get collection and local index (inside the given collection) of the drawable. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 *
 * Hash: 0xD6BBA48B
 * @deprecated Use ped.getCollectionNameFromDrawable(ped1, componentId, drawableId) instead
 */
export function getPedCollectionNameFromDrawable(ped1: number | Ped, componentId: number, drawableId: number): string {
    return ped.getCollectionNameFromDrawable(ped1, componentId, drawableId);
}

/**
 * Gets collection name for the given global prop index. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) is used to get collection and local index (inside the given collection) of the prop. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 *
 * Hash: 0x8ED0C17
 * @deprecated Use ped.getCollectionNameFromProp(ped1, anchorPoint, propIndex) instead
 */
export function getPedCollectionNameFromProp(ped1: number | Ped, anchorPoint: number, propIndex: number): string {
    return ped.getCollectionNameFromProp(ped1, anchorPoint, propIndex);
}

/**
 * Returns a list of decorations applied to a ped.
 *
 * The data returned adheres to the following layout:
 *
 * ```
 * [ [ collectionHash1, overlayHash1 ], ..., [c ollectionHashN, overlayHashN ] ]
 * ```
 *
 * This command will return undefined data if invoked on a remote player ped.
 *
 * Hash: 0x7CCE1163
 * @deprecated Use ped.getDecorations(ped1) instead
 */
export function getPedDecorations(ped1: number | Ped): number {
    return ped.getDecorations(ped1);
}

/**
 * A getter for [SET_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x95E3D6257B166CF2).
 *
 * Hash: 0xF5A904F9
 * @deprecated Use ped.getDensityMultiplier() instead
 */
export function getPedDensityMultiplier(): number {
    return ped.getDensityMultiplier();
}

/**
 * Returns global drawable index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Drawables are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
 *
 * If all drawables from all collections are placed into one continuous array - the global index will correspond to the index of drawable in such array. Local index is index of drawable in this array relative to the start of the given collection.
 *
 * Hash: 0x280F1FC3
 * @deprecated Use ped.getDrawableGlobalIndexFromCollection(ped1, componentId, collection, drawableId) instead
 */
export function getPedDrawableGlobalIndexFromCollection(ped1: number | Ped, componentId: number, collection: string, drawableId: number): number {
    return ped.getDrawableGlobalIndexFromCollection(ped1, componentId, collection, drawableId);
}

/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection local drawable index (inside [GET_PED_DRAWABLE_VARIATION_COLLECTION_NAME](#\_0xBCE0AB63) collection) instead of the global drawable index.
 *
 * Hash: 0x9970386F
 * @deprecated Use ped.getDrawableVariationCollectionLocalIndex(ped1, componentId) instead
 */
export function getPedDrawableVariationCollectionLocalIndex(ped1: number | Ped, componentId: number): number {
    return ped.getDrawableVariationCollectionLocalIndex(ped1, componentId);
}

/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection name instead of the global drawable index.
 *
 * Should be used together with [GET_PED_DRAWABLE_VARIATION_COLLECTION_LOCAL_INDEX](#\_0x9970386F).
 *
 * Hash: 0xBCE0AB63
 * @deprecated Use ped.getDrawableVariationCollectionName(ped1, componentId) instead
 */
export function getPedDrawableVariationCollectionName(ped1: number | Ped, componentId: number): string {
    return ped.getDrawableVariationCollectionName(ped1, componentId);
}

/**
 * A getter for [\_SET_PED_EYE_COLOR](#\_0x50B56988B170AFDF). Returns -1 if fails to get.
 *
 * Hash: 0xA47B860F
 * @deprecated Use ped.getEyeColor(ped1) instead
 */
export function getPedEyeColor(ped1: number | Ped): number {
    return ped.getEyeColor(ped1);
}

/**
 * A getter for [\_SET_PED_FACE_FEATURE](#\_0x71A5C1DBA060049E). Returns 0.0 if fails to get.
 *
 * Hash: 0xBA352ADD
 * @deprecated Use ped.getFaceFeature(ped1, index) instead
 */
export function getPedFaceFeature(ped1: number | Ped, index: number): number {
    return ped.getFaceFeature(ped1, index);
}

/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 *
 * Hash: 0xA3EA2893
 * @deprecated Use ped.getHairColor(ped1) instead
 */
export function getPedHairColor(ped1: number | Ped): number {
    return ped.getHairColor(ped1);
}

/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 *
 * Hash: 0x4B087305
 * @deprecated Use ped.getHairHighlightColor(ped1) instead
 */
export function getPedHairHighlightColor(ped1: number | Ped): number {
    return ped.getHairHighlightColor(ped1);
}

/**
 * A getter for [SET_PED_HEAD_OVERLAY](#\_0x48F44967FA05CC1E) and [\_SET_PED_HEAD_OVERLAY_COLOR](#\_0x497BF74A7B9CB952) natives.
 *
 * Hash: 0xC46EE605
 * @deprecated Use ped.getHeadOverlayData(ped1, index) instead
 */
export function getPedHeadOverlayData(ped1: number | Ped, index: number): [boolean, number, number, number, number, number] {
    return ped.getHeadOverlayData(ped1, index);
}

/**
 * Gets a ped model's health config.
 *
 * Hash: 0xF71542F7
 * @deprecated Use ped.getModelHealthConfig(modelHash) instead
 */
export function getPedModelHealthConfig(modelHash: number | string): number {
    return ped.getModelHealthConfig(modelHash);
}

/**
 * Gets a ped model's personality type.
 *
 * Hash: 0xFE08CAD6
 * @deprecated Use ped.getModelPersonality(modelHash) instead
 */
export function getPedModelPersonality(modelHash: number | string): number {
    return ped.getModelPersonality(modelHash);
}

/**
 * No comment provided
 *
 * Hash: 0x69E81E3D
 * @deprecated Use ped.getMovementClipset(ped1) instead
 */
export function getPedMovementClipset(ped1: number | Ped): number {
    return ped.getMovementClipset(ped1);
}

/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection local prop index (inside [GET_PED_PROP_COLLECTION_NAME](#\_0x6B5653E4) collection) instead of the global prop index.
 *
 * Hash: 0xCD420AD1
 * @deprecated Use ped.getPropCollectionLocalIndex(ped1, anchorPoint) instead
 */
export function getPedPropCollectionLocalIndex(ped1: number | Ped, anchorPoint: number): number {
    return ped.getPropCollectionLocalIndex(ped1, anchorPoint);
}

/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection name instead of the global drawable index.
 *
 * Should be used together with [GET_PED_PROP_COLLECTION_LOCAL_INDEX](#\_0xCD420AD1).
 *
 * Hash: 0x6B5653E4
 * @deprecated Use ped.getPropCollectionName(ped1, anchorPoint) instead
 */
export function getPedPropCollectionName(ped1: number | Ped, anchorPoint: number): string {
    return ped.getPropCollectionName(ped1, anchorPoint);
}

/**
 * Returns global prop index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Props are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
 *
 * If all props from all collections are placed into one continuous array - the global index will correspond to the index of the prop in such array. Local index is index of the prop in this array relative to the start of the given collection.
 *
 * Hash: 0x2CB45CDC
 * @deprecated Use ped.getPropGlobalIndexFromCollection(ped1, anchorPoint, collection, propIndex) instead
 */
export function getPedPropGlobalIndexFromCollection(ped1: number | Ped, anchorPoint: number, collection: string, propIndex: number): number {
    return ped.getPropGlobalIndexFromCollection(ped1, anchorPoint, collection, propIndex);
}

/**
 * A getter for [SET_PED_SWEAT](#\_0x27B0405F59637D1F).
 *
 * Hash: 0x44B91E94
 * @deprecated Use ped.getSweat(ped1) instead
 */
export function getPedSweat(ped1: number | Ped): number {
    return ped.getSweat(ped1);
}

/**
 * An alternative to [IS_PED_COMPONENT_VARIATION_GEN9\_EXCLUSIVE](#\_0xC767B581) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x33B2AFA2
 * @deprecated Use ped.isCollectionComponentVariationGen9Exclusive(ped1, componentId, collection, drawableId) instead
 */
export function isPedCollectionComponentVariationGen9Exclusive(ped1: number | Ped, componentId: number, collection: string, drawableId: number): boolean {
    return ped.isCollectionComponentVariationGen9Exclusive(ped1, componentId, collection, drawableId);
}

/**
 * An alternative to [IS_PED_COMPONENT_VARIATION_VALID](#\_0xE825F6B6CEA7671D) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0xCA63A52A
 * @deprecated Use ped.isCollectionComponentVariationValid(ped1, componentId, collection, drawableId, textureId) instead
 */
export function isPedCollectionComponentVariationValid(ped1: number | Ped, componentId: number, collection: string, drawableId: number, textureId: number): boolean {
    return ped.isCollectionComponentVariationValid(ped1, componentId, collection, drawableId, textureId);
}

/**
 * No comment provided
 *
 * Hash: 0xC767B581
 * @deprecated Use ped.isComponentVariationGen9Exclusive(ped1, componentId, drawableId) instead
 */
export function isPedComponentVariationGen9Exclusive(ped1: number | Ped, componentId: number, drawableId: number): boolean {
    return ped.isComponentVariationGen9Exclusive(ped1, componentId, drawableId);
}

/**
 * Sets whether peds can stand on top of *all* vehicles without falling off.
 *
 * Note this flag is not replicated automatically, you will have to manually do so.
 *
 * Hash: 0x90A9E0B2
 * @deprecated Use ped.overridesCanStandOnTopFlag(flag) instead
 */
export function overridePedsCanStandOnTopFlag(flag: boolean): void {
    return ped.overridesCanStandOnTopFlag(flag);
}

/**
 * Allows the bypassing of default game behavior that prevents the use of [SET_PED_DRIVE_BY_CLIPSET_OVERRIDE](#\_0xED34AB6C5CB36520) in certain scenarios to avoid clipping issues (e.g., when there is more than one Ped in a vehicle).
 *
 * Note: This flag and the overridden clipset are not replicated values and require synchronization through user scripts. Additionally, current game behavior also restricts applying this clipset locally when in first-person mode and will require a temporary workaround.
 *
 * Hash: 0xB14F8EAD
 * @deprecated Use ped.overridesUseDefaultDriveByClipset(flag) instead
 */
export function overridePedsUseDefaultDriveByClipset(flag: boolean): void {
    return ped.overridesUseDefaultDriveByClipset(flag);
}

/**
 * Restores an overridden ped model personality type to the default value.
 *
 * Hash: 0x79A12861
 * @deprecated Use ped.resetModelPersonality(modelHash) instead
 */
export function resetPedModelPersonality(modelHash: number | string): void {
    return ped.resetModelPersonality(modelHash);
}

/**
 * An alternative to [SET_PED_COMPONENT_VARIATION](#\_0x262B14F48D29DE80) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x88711BBA
 * @deprecated Use ped.setCollectionComponentVariation(ped1, componentId, collection, drawableId, textureId, paletteId) instead
 */
export function setPedCollectionComponentVariation(ped1: number | Ped, componentId: number, collection: string, drawableId: number, textureId: number, paletteId: number): void {
    return ped.setCollectionComponentVariation(ped1, componentId, collection, drawableId, textureId, paletteId);
}

/**
 * An alternative to [SET_PED_PRELOAD_PROP_DATA](#\_0x2B16A3BFF1FBCE49) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Hash: 0x14B5BBE0
 * @deprecated Use ped.setCollectionPreloadPropData(ped1, anchorPoint, collection, propIndex, textureId) instead
 */
export function setPedCollectionPreloadPropData(ped1: number | Ped, anchorPoint: number, collection: string, propIndex: number, textureId: number): void {
    return ped.setCollectionPreloadPropData(ped1, anchorPoint, collection, propIndex, textureId);
}

/**
 * An alternative to [SET_PED_PRELOAD_VARIATION_DATA](#\_0x39D55A620FCB6A3A) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x3EC75558
 * @deprecated Use ped.setCollectionPreloadVariationData(ped1, componentId, collection, drawableId, textureId) instead
 */
export function setPedCollectionPreloadVariationData(ped1: number | Ped, componentId: number, collection: string, drawableId: number, textureId: number): void {
    return ped.setCollectionPreloadVariationData(ped1, componentId, collection, drawableId, textureId);
}

/**
 * An alternative to [SET_PED_PROP_INDEX](#\_0x93376B65A266EB5F) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Hash: 0x75240BCB
 * @deprecated Use ped.setCollectionPropIndex(ped1, anchorPoint, collection, propIndex, textureId, attach) instead
 */
export function setPedCollectionPropIndex(ped1: number | Ped, anchorPoint: number, collection: string, propIndex: number, textureId: number, attach: boolean): void {
    return ped.setCollectionPropIndex(ped1, anchorPoint, collection, propIndex, textureId, attach);
}

/**
 * Override the limits on the number and types of melee combatants. The game is limited to at most ten combatants among the three types: primary, secondary, and observers.
 *
 * This native infers the number of observers based on the primary and secondary counts.
 *
 * Hash: 0x8E51EC29
 * @deprecated Use ped.setMeleeCombatLimits(primaryCount, secondaryCount, populationPedCount) instead
 */
export function setPedMeleeCombatLimits(primaryCount: number, secondaryCount: number, populationPedCount: number): void {
    return ped.setMeleeCombatLimits(primaryCount, secondaryCount, populationPedCount);
}

/**
 * Sets a ped model's health config.
 * Takes effect only after setting player model with `SET_PLAYER_MODEL`.
 *
 * Hash: 0xAF12A05D
 * @deprecated Use ped.setModelHealthConfig(modelHash, configName) instead
 */
export function setPedModelHealthConfig(modelHash: number | string, configName: string): void {
    return ped.setModelHealthConfig(modelHash, configName);
}

/**
 * Overrides a ped model personality type.
 *
 * Hash: 0x46F6B38B
 * @deprecated Use ped.setModelPersonality(modelHash, personalityHash) instead
 */
export function setPedModelPersonality(modelHash: number | string, personalityHash: number | string): void {
    return ped.setModelPersonality(modelHash, personalityHash);
}

/**
 * Purpose: The game's default values for these make shooting while traveling Left quite a bit slower than shooting while traveling right (This could be a game-balance thing?)
 *
 * Default Min: -45 Degrees
 * Default Max: 135 Degrees
 *
 * ```
 * \ ,- ~ ||~ - ,
 * , ' \    x   x    ' ,
 * ```
 *
 * ,      \    x    x   x  ,
 * ,         \  x     x      ,
 * ,            \     x    x  ,
 * ,              \      x    ,
 * ,                \   x     ,
 * ,                 \   x x ,
 * ,                  \  x ,
 * ,                 , '
 * ' - , \_ \_ \_ ,  '  \\
 *
 * If the transition angle is within the shaded portion (x), there will be no transition(Quicker)
 * The angle corresponds to where you are looking(North on the circle) vs. the heading of your Ped.
 * Note: For some reason,
 *
 * You can set these values to whatever you'd like with this native, but keep in mind that the transitional spin is only clockwise for some reason.
 *
 * I'd personally recommend something like -135/135
 *
 * Hash: 0xB300F03
 * @deprecated Use ped.setTurningThresholds(min, max) instead
 */
export function setPedTurningThresholds(min: number, max: number): void {
    return ped.setTurningThresholds(min, max);
}

/**
 * Returns the bone matrix of the specified bone id. usefull for entity attachment
 *
 * Hash: 0x9C5E7C9C
 * @deprecated Use ped.getBoneMatrix(ped1, boneId) instead
 */
export function getPedBoneMatrix(ped1: number | Ped, boneId: number): [Vector3, Vector3, Vector3, Vector3] {
    return ped.getBoneMatrix(ped1, boneId);
}

/**
 * Returns all rope handles. The data returned adheres to the following layout:
 *
 * ```
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 *
 * Hash: 0x760A2D67
 * @deprecated Use physics.getAllRopes() instead
 */
export function getAllRopes(): number {
    return physics.getAllRopes();
}

/**
 * ```cpp
 * enum eRopeFlags
 * {
 * DrawShadowEnabled = 2,
 * Breakable = 4,
 * RopeUnwindingFront = 8,
 * RopeWinding = 32
 * }
 * ```
 *
 * Hash: 0xA80FFE99
 * @deprecated Use physics.getRopeFlags(rope) instead
 */
export function getRopeFlags(rope: number): number {
    return physics.getRopeFlags(rope);
}

/**
 * No comment provided
 *
 * Hash: 0x66D70EA3
 * @deprecated Use physics.getRopeLengthChangeRate(rope) instead
 */
export function getRopeLengthChangeRate(rope: number): number {
    return physics.getRopeLengthChangeRate(rope);
}

/**
 * No comment provided
 *
 * Hash: 0xF341E6CA
 * @deprecated Use physics.getRopeTimeMultiplier(rope) instead
 */
export function getRopeTimeMultiplier(rope: number): number {
    return physics.getRopeTimeMultiplier(rope);
}

/**
 * No comment provided
 *
 * Hash: 0x2AB2E0F6
 * @deprecated Use physics.getRopeUpdateOrder(rope) instead
 */
export function getRopeUpdateOrder(rope: number): number {
    return physics.getRopeUpdateOrder(rope);
}

/**
 * Registers a custom rope data with the game. For guidance on what these values should be use common:/data/ropedata.xml as a reference.
 * Returns a rope type which can be passed into [ADD_ROPE](#\_0xE832D760399EB220) to use a custom rope design.
 * Once a rope data is registered it can be used indefinitely and you should take caution not too register too many as to exceed the games limit.
 *
 * Hash: 0xF213AE8D
 * @deprecated Use physics.registerRopeData(numSections, radius, diffuseTextureName, normalMapName, distanceMappingScale, uvScaleX, uvScaleY, specularFresnel, specularFalloff, specularIntensity, bumpiness, color) instead
 */
export function registerRopeData(numSections: number, radius: number, diffuseTextureName: string, normalMapName: string, distanceMappingScale: number, uvScaleX: number, uvScaleY: number, specularFresnel: number, specularFalloff: number, specularIntensity: number, bumpiness: number, color: number): number {
    return physics.registerRopeData(numSections, radius, diffuseTextureName, normalMapName, distanceMappingScale, uvScaleX, uvScaleY, specularFresnel, specularFalloff, specularIntensity, bumpiness, color);
}

/**
 * Resets parameters which is used by the game for checking is ped needs to fly through windscreen after a crash to default values.
 *
 * Hash: 0x6D712937
 * @deprecated Use physics.resetFlyThroughWindscreenParams() instead
 */
export function resetFlyThroughWindscreenParams(): void {
    return physics.resetFlyThroughWindscreenParams();
}

/**
 * Sets some in-game parameters which is used for checks is ped needs to fly through windscreen after a crash.
 *
 * Hash: 0x4D3118ED
 * @deprecated Use physics.setFlyThroughWindscreenParams(vehMinSpeed, unkMinSpeed, unkModifier, minDamage) instead
 */
export function setFlyThroughWindscreenParams(vehMinSpeed: number, unkMinSpeed: number, unkModifier: number, minDamage: number): boolean {
    return physics.setFlyThroughWindscreenParams(vehMinSpeed, unkMinSpeed, unkModifier, minDamage);
}

/**
 * Toggles whether the usage of [ADD_ROPE](#\_0xE832D760399EB220) should create an underlying CNetworkRopeWorldStateData. By default this is set to false.
 *
 * Hash: 0xE62FC73
 * @deprecated Use physics.setRopesCreateNetworkWorldState(shouldCreate) instead
 */
export function setRopesCreateNetworkWorldState(shouldCreate: boolean): void {
    return physics.setRopesCreateNetworkWorldState(shouldCreate);
}

/**
 * Set's the ropes length change rate, which is the speed that rope should wind if started.
 *
 * Hash: 0x69B680A7
 * @deprecated Use physics.setRopeLengthChangeRate(rope, lengthChangeRate) instead
 */
export function setRopeLengthChangeRate(rope: number, lengthChangeRate: number): void {
    return physics.setRopeLengthChangeRate(rope, lengthChangeRate);
}

/**
 * Unlike [GET_PLAYER_INVINCIBLE](#\_0xB721981B2B939E07) this native gets both [SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED](#\_0x6BC97F4F4BB3C04B) and [SET_PLAYER_INVINCIBLE](#\_0x239528EACDC3E7DE) invincibility state.
 *
 * Hash: 0xF2E3912B
 * @deprecated Use player.getInvincible2(player1) instead
 */
export function getPlayerInvincible2(player1: number | string | Player): boolean {
    return player.getInvincible2(player1);
}

/**
 * No comment provided
 *
 * Hash: 0xD014AB79
 * @deprecated Use player.getMaxStamina(playerId) instead
 */
export function getPlayerMaxStamina(playerId: number | string | Player): number {
    return player.getMaxStamina(playerId);
}

/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER](#\_0xAE540335B4ABC4E2).
 *
 * Hash: 0x27E94EF8
 * @deprecated Use player.getMeleeWeaponDefenseModifier(playerId) instead
 */
export function getPlayerMeleeWeaponDefenseModifier(playerId: number | string | Player): number {
    return player.getMeleeWeaponDefenseModifier(playerId);
}

/**
 * No comment provided
 *
 * Hash: 0xE415EC5C
 * @deprecated Use player.getStamina(playerId) instead
 */
export function getPlayerStamina(playerId: number | string | Player): number {
    return player.getStamina(playerId);
}

/**
 * A getter for [SET_PLAYER_VEHICLE_DAMAGE_MODIFIER](#\_0xA50E117CDDF82F0C).
 *
 * Hash: 0x78F27B1F
 * @deprecated Use player.getVehicleDamageModifier(playerId) instead
 */
export function getPlayerVehicleDamageModifier(playerId: number | string | Player): number {
    return player.getVehicleDamageModifier(playerId);
}

/**
 * A getter for [SET_PLAYER_VEHICLE_DEFENSE_MODIFIER](#\_0x4C60E6EFDAFF2462).
 *
 * Hash: 0x8326E7CD
 * @deprecated Use player.getVehicleDefenseModifier(playerId) instead
 */
export function getPlayerVehicleDefenseModifier(playerId: number | string | Player): number {
    return player.getVehicleDefenseModifier(playerId);
}

/**
 * No comment provided
 *
 * Hash: 0x35594F67
 * @deprecated Use player.setMaxStamina(playerId, maxStamina) instead
 */
export function setPlayerMaxStamina(playerId: number | string | Player, maxStamina: number): boolean {
    return player.setMaxStamina(playerId, maxStamina);
}

/**
 * No comment provided
 *
 * Hash: 0xA9EC16C7
 * @deprecated Use player.setStamina(playerId, stamina) instead
 */
export function setPlayerStamina(playerId: number | string | Player, stamina: number): boolean {
    return player.setStamina(playerId, stamina);
}

/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
 *
 * Hash: 0x8689A825
 * @deprecated Use player.getMeleeWeaponDamageModifier(playerId) instead
 */
export function getPlayerMeleeWeaponDamageModifier(playerId: number | string | Player): number {
    return player.getMeleeWeaponDamageModifier(playerId);
}

/**
 * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
 *
 * Hash: 0x2A3D7CDA
 * @deprecated Use player.getWeaponDamageModifier(playerId) instead
 */
export function getPlayerWeaponDamageModifier(playerId: number | string | Player): number {
    return player.getWeaponDamageModifier(playerId);
}

/**
 * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
 *
 * Hash: 0xF1543251
 * @deprecated Use player.getWeaponDefenseModifier(playerId) instead
 */
export function getPlayerWeaponDefenseModifier(playerId: number | string | Player): number {
    return player.getWeaponDefenseModifier(playerId);
}

/**
 * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
 *
 * Hash: 0x986B65FF
 * @deprecated Use player.getWeaponDefenseModifier2(playerId) instead
 */
export function getPlayerWeaponDefenseModifier2(playerId: number | string | Player): number {
    return player.getWeaponDefenseModifier2(playerId);
}

/**
 * Returns all player indices for 'active' physical players known to the client.
 * The data returned adheres to the following layout:
 *
 * ```
 * [127, 42, 13, 37]
 * ```
 *
 * Hash: 0xCF143FB9
 * @deprecated Use player.getActives() instead
 */
export function getActivePlayers(): number {
    return player.getActives();
}

/**
 * Gets a local client's Player ID from its server ID counterpart, assuming the passed `serverId` exists on the client.
 *
 * If no matching client is found, or an invalid value is passed over as the `serverId` native's parameter, the native result will be `-1`.
 *
 * It's worth noting that this native method can only retrieve information about clients that are culled to the connected client.
 *
 * Hash: 0x344EA166
 * @deprecated Use player.getFromServerId(serverId) instead
 */
export function getPlayerFromServerId(serverId: number): number | string {
    return player.getFromServerId(serverId);
}

/**
 * No comment provided
 *
 * Hash: 0x4D97BCC7
 * @deprecated Use player.getServerId(player1) instead
 */
export function getPlayerServerId(player1: number | string | Player): number {
    return player.getServerId(player1);
}

/**
 * the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.
 * This function doesn't need to be called every frame, it works like a switcher.
 *
 * Hash: 0xFC02CAF6
 * @deprecated Use player.setTalkingOverride(player1, state) instead
 */
export function setPlayerTalkingOverride(player1: number | string | Player, state: boolean): void {
    return player.setTalkingOverride(player1, state);
}

/**
 * On the server this will return the players source, on the client it will return the player handle.
 *
 * Hash: 0xA56135E0
 * @deprecated Use player.getFromStateBagName(bagName) instead
 */
export function getPlayerFromStateBagName(bagName: string): number {
    return player.getFromStateBagName(bagName);
}

/**
 * No comment provided
 *
 * Hash: 0x322B1192
 * @deprecated Use streaming.getInteriorEntitiesExtents(interiorId) instead
 */
export function getInteriorEntitiesExtents(interiorId: number): [number, number, number, number, number, number] {
    return streaming.getInteriorEntitiesExtents(interiorId);
}

/**
 * No comment provided
 *
 * Hash: 0xF772BB2C
 * @deprecated Use streaming.getInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex) instead
 */
export function getInteriorPortalCornerPosition(interiorId: number, portalIndex: number, cornerIndex: number): [number, number, number] {
    return streaming.getInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex);
}

/**
 * No comment provided
 *
 * Hash: 0xD05BB8B1
 * @deprecated Use streaming.getInteriorPortalCount(interiorId) instead
 */
export function getInteriorPortalCount(interiorId: number): number {
    return streaming.getInteriorPortalCount(interiorId);
}

/**
 * No comment provided
 *
 * Hash: 0x9A0E1700
 * @deprecated Use streaming.getInteriorPortalEntityArchetype(interiorId, portalIndex, entityIndex) instead
 */
export function getInteriorPortalEntityArchetype(interiorId: number, portalIndex: number, entityIndex: number): number {
    return streaming.getInteriorPortalEntityArchetype(interiorId, portalIndex, entityIndex);
}

/**
 * No comment provided
 *
 * Hash: 0xC68021B
 * @deprecated Use streaming.getInteriorPortalEntityCount(interiorId, portalIndex) instead
 */
export function getInteriorPortalEntityCount(interiorId: number, portalIndex: number): number {
    return streaming.getInteriorPortalEntityCount(interiorId, portalIndex);
}

/**
 * No comment provided
 *
 * Hash: 0x9DA2E811
 * @deprecated Use streaming.getInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex) instead
 */
export function getInteriorPortalEntityFlag(interiorId: number, portalIndex: number, entityIndex: number): number {
    return streaming.getInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex);
}

/**
 * No comment provided
 *
 * Hash: 0x9B7AB83C
 * @deprecated Use streaming.getInteriorPortalEntityPosition(interiorId, portalIndex, entityIndex) instead
 */
export function getInteriorPortalEntityPosition(interiorId: number, portalIndex: number, entityIndex: number): [number, number, number] {
    return streaming.getInteriorPortalEntityPosition(interiorId, portalIndex, entityIndex);
}

/**
 * No comment provided
 *
 * Hash: 0x9F9CEB63
 * @deprecated Use streaming.getInteriorPortalEntityRotation(interiorId, portalIndex, entityIndex) instead
 */
export function getInteriorPortalEntityRotation(interiorId: number, portalIndex: number, entityIndex: number): [number, number, number, number] {
    return streaming.getInteriorPortalEntityRotation(interiorId, portalIndex, entityIndex);
}

/**
 * No comment provided
 *
 * Hash: 0xC74DA47C
 * @deprecated Use streaming.getInteriorPortalFlag(interiorId, portalIndex) instead
 */
export function getInteriorPortalFlag(interiorId: number, portalIndex: number): number {
    return streaming.getInteriorPortalFlag(interiorId, portalIndex);
}

/**
 * No comment provided
 *
 * Hash: 0xAA9C141D
 * @deprecated Use streaming.getInteriorPortalRoomFrom(interiorId, portalIndex) instead
 */
export function getInteriorPortalRoomFrom(interiorId: number, portalIndex: number): number {
    return streaming.getInteriorPortalRoomFrom(interiorId, portalIndex);
}

/**
 * No comment provided
 *
 * Hash: 0x3F47F0E8
 * @deprecated Use streaming.getInteriorPortalRoomTo(interiorId, portalIndex) instead
 */
export function getInteriorPortalRoomTo(interiorId: number, portalIndex: number): number {
    return streaming.getInteriorPortalRoomTo(interiorId, portalIndex);
}

/**
 * No comment provided
 *
 * Hash: 0x77A435B0
 * @deprecated Use streaming.getInteriorPosition(interiorId) instead
 */
export function getInteriorPosition(interiorId: number): [number, number, number] {
    return streaming.getInteriorPosition(interiorId);
}

/**
 * No comment provided
 *
 * Hash: 0xA2737C2C
 * @deprecated Use streaming.getInteriorRoomCount(interiorId) instead
 */
export function getInteriorRoomCount(interiorId: number): number {
    return streaming.getInteriorRoomCount(interiorId);
}

/**
 * No comment provided
 *
 * Hash: 0xF9E795DD
 * @deprecated Use streaming.getInteriorRoomExtents(interiorId, roomIndex) instead
 */
export function getInteriorRoomExtents(interiorId: number, roomIndex: number): [number, number, number, number, number, number] {
    return streaming.getInteriorRoomExtents(interiorId, roomIndex);
}

/**
 * No comment provided
 *
 * Hash: 0x6B7AF743
 * @deprecated Use streaming.getInteriorRoomFlag(interiorId, roomIndex) instead
 */
export function getInteriorRoomFlag(interiorId: number, roomIndex: number): number {
    return streaming.getInteriorRoomFlag(interiorId, roomIndex);
}

/**
 * No comment provided
 *
 * Hash: 0xE0EE05F8
 * @deprecated Use streaming.getInteriorRoomIndexByHash(interiorId, roomHash) instead
 */
export function getInteriorRoomIndexByHash(interiorId: number, roomHash: number): number {
    return streaming.getInteriorRoomIndexByHash(interiorId, roomHash);
}

/**
 * No comment provided
 *
 * Hash: 0x11755DF2
 * @deprecated Use streaming.getInteriorRoomName(interiorId, roomIndex) instead
 */
export function getInteriorRoomName(interiorId: number, roomIndex: number): string {
    return streaming.getInteriorRoomName(interiorId, roomIndex);
}

/**
 * No comment provided
 *
 * Hash: 0x82BA3F88
 * @deprecated Use streaming.getInteriorRoomTimecycle(interiorId, roomIndex) instead
 */
export function getInteriorRoomTimecycle(interiorId: number, roomIndex: number): number {
    return streaming.getInteriorRoomTimecycle(interiorId, roomIndex);
}

/**
 * No comment provided
 *
 * Hash: 0x5A039998
 * @deprecated Use streaming.getInteriorRotation(interiorId) instead
 */
export function getInteriorRotation(interiorId: number): [number, number, number, number] {
    return streaming.getInteriorRotation(interiorId);
}

/**
 * No comment provided
 *
 * Hash: 0x87F43553
 * @deprecated Use streaming.setInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex, pos) instead
 */
export function setInteriorPortalCornerPosition(interiorId: number, portalIndex: number, cornerIndex: number, pos: Vector3): void {
    return streaming.setInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex, pos);
}

/**
 * No comment provided
 *
 * Hash: 0x8349CD76
 * @deprecated Use streaming.setInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex, flag) instead
 */
export function setInteriorPortalEntityFlag(interiorId: number, portalIndex: number, entityIndex: number, flag: number): void {
    return streaming.setInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex, flag);
}

/**
 * No comment provided
 *
 * Hash: 0x88B2355E
 * @deprecated Use streaming.setInteriorPortalFlag(interiorId, portalIndex, flag) instead
 */
export function setInteriorPortalFlag(interiorId: number, portalIndex: number, flag: number): void {
    return streaming.setInteriorPortalFlag(interiorId, portalIndex, flag);
}

/**
 * No comment provided
 *
 * Hash: 0x298FC783
 * @deprecated Use streaming.setInteriorPortalRoomFrom(interiorId, portalIndex, roomFrom) instead
 */
export function setInteriorPortalRoomFrom(interiorId: number, portalIndex: number, roomFrom: number): void {
    return streaming.setInteriorPortalRoomFrom(interiorId, portalIndex, roomFrom);
}

/**
 * No comment provided
 *
 * Hash: 0x58982680
 * @deprecated Use streaming.setInteriorPortalRoomTo(interiorId, portalIndex, roomTo) instead
 */
export function setInteriorPortalRoomTo(interiorId: number, portalIndex: number, roomTo: number): void {
    return streaming.setInteriorPortalRoomTo(interiorId, portalIndex, roomTo);
}

/**
 * Overwrite the games default CPortalTracker interior detection range.
 * This fixes potentially unwanted behaviour in the base game and allows you to build custom interiors with larger ceiling heights without running into graphical glitches.
 *
 * By default CPortalTracker will probe 4 units downward trying to reach collisions that are part of the interior the entity is in.
 * If no collision can be found 16 units are used in some circumstances.
 *
 * There are 30+ hard coded special cases, only some of them exposed via script (for example `ENABLE_STADIUM_PROBES_THIS_FRAME`).
 *
 * This native allows you to extend the probe range up to 150 units which is the same value the game uses for the `xs_arena_interior`
 *
 * Hash: 0x423F7E39
 * @deprecated Use streaming.setInteriorProbeLength(probeLength) instead
 */
export function setInteriorProbeLength(probeLength: number): void {
    return streaming.setInteriorProbeLength(probeLength);
}

/**
 * No comment provided
 *
 * Hash: 0x4FDCF51E
 * @deprecated Use streaming.setInteriorRoomExtents(interiorId, roomIndex, bbMinX, bbMinY, bbMinZ, bbMaxX, bbMaxY, bbMaxZ) instead
 */
export function setInteriorRoomExtents(interiorId: number, roomIndex: number, bbMinX: number, bbMinY: number, bbMinZ: number, bbMaxX: number, bbMaxY: number, bbMaxZ: number): void {
    return streaming.setInteriorRoomExtents(interiorId, roomIndex, bbMinX, bbMinY, bbMinZ, bbMaxX, bbMaxY, bbMaxZ);
}

/**
 * No comment provided
 *
 * Hash: 0x5518D60B
 * @deprecated Use streaming.setInteriorRoomFlag(interiorId, roomIndex, flag) instead
 */
export function setInteriorRoomFlag(interiorId: number, roomIndex: number, flag: number): void {
    return streaming.setInteriorRoomFlag(interiorId, roomIndex, flag);
}

/**
 * No comment provided
 *
 * Hash: 0x31C9A848
 * @deprecated Use streaming.setInteriorRoomTimecycle(interiorId, roomIndex, timecycleHash) instead
 */
export function setInteriorRoomTimecycle(interiorId: number, roomIndex: number, timecycleHash: number): void {
    return streaming.setInteriorRoomTimecycle(interiorId, roomIndex, timecycleHash);
}

/**
 * Transiently updates the entity with the specified mapdata index and entity index.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xFC52CB91
 * @deprecated Use streaming.updateMapdataEntity(mapdata, entity, entityDef) instead
 */
export function updateMapdataEntity(mapdata: number, entity: number, entityDef: number | Object): void {
    return streaming.updateMapdataEntity(mapdata, entity, entityDef);
}

/**
 * No comment provided
 *
 * Hash: 0x32CA01C3
 * @deprecated Use streaming.addTextEntry(entryKey, entryText) instead
 */
export function addTextEntry(entryKey: string, entryText: string): void {
    return streaming.addTextEntry(entryKey, entryText);
}

/**
 * No comment provided
 *
 * Hash: 0x289DA860
 * @deprecated Use streaming.addTextEntryByHash(entryKey, entryText) instead
 */
export function addTextEntryByHash(entryKey: number | string, entryText: string): void {
    return streaming.addTextEntryByHash(entryKey, entryText);
}

/**
 * Returns all track junctions on the client
 * The data returned adheres to the following structure:
 *
 * ```
 * [1, 2, 4, 6, 69, 420]
 * ```
 *
 * Hash: 0x81A08523
 * @deprecated Use track.getAllJunctions() instead
 */
export function getAllTrackJunctions(): number {
    return track.getAllJunctions();
}

/**
 * Get all track nodes and their track ids within the radius of the specified coordinates.
 *
 * Hash: 0x59FC24A7
 * @deprecated Use track.getClosestNodes(position, radius) instead
 */
export function getClosestTrackNodes(position: Vector3, radius: number): number {
    return track.getClosestNodes(position, radius);
}

/**
 * No comment provided
 *
 * Hash: 0xBF482A5E
 * @deprecated Use track.getBrakingDistance(track1) instead
 */
export function getTrackBrakingDistance(track1: number): number {
    return track.getBrakingDistance(track1);
}

/**
 * No comment provided
 *
 * Hash: 0x34EE2BF3
 * @deprecated Use track.getMaxSpeed(track1) instead
 */
export function getTrackMaxSpeed(track1: number): number {
    return track.getMaxSpeed(track1);
}

/**
 * Gets the coordinates of a specific track node.
 *
 * Hash: 0x1628548E
 * @deprecated Use track.getNodeCoords(trackIndex, trackNode) instead
 */
export function getTrackNodeCoords(trackIndex: number, trackNode: number): [boolean, Vector3] {
    return track.getNodeCoords(trackIndex, trackNode);
}

/**
 * Gets the specified tracks node count.
 *
 * Hash: 0x896A0C11
 * @deprecated Use track.getNodeCount(trackIndex) instead
 */
export function getTrackNodeCount(trackIndex: number): number {
    return track.getNodeCount(trackIndex);
}

/**
 * Getter for [SET_TRACK_ENABLED](#\_0x4B41E84C)
 *
 * Hash: 0x31E695CB
 * @deprecated Use track.isEnabled(track1) instead
 */
export function isTrackEnabled(track1: number): boolean {
    return track.isEnabled(track1);
}

/**
 * Getter for [SWITCH_TRAIN_TRACK](#\_0xFD813BB7DB977F20). Determines if ambient trains are able to spawn on this track.
 *
 * Hash: 0xE0C53765
 * @deprecated Use track.isSwitchedOff(track1) instead
 */
export function isTrackSwitchedOff(track1: number): boolean {
    return track.isSwitchedOff(track1);
}

/**
 * Registers a track junction that when enabled will cause a train on the defined trackIndex, node and direction to change its current track index and begin traveling on the new node
 *
 * Hash: 0x35F743B5
 * @deprecated Use track.registerJunction(trackIndex, trackNode, newIndex, newNode, direction) instead
 */
export function registerTrackJunction(trackIndex: number, trackNode: number, newIndex: number, newNode: number, direction: boolean): number {
    return track.registerJunction(trackIndex, trackNode, newIndex, newNode, direction);
}

/**
 * Removes the specified track junction.
 *
 * Hash: 0x4F3D2B2A
 * @deprecated Use track.removeJunction(junctionIndex) instead
 */
export function removeTrackJunction(junctionIndex: number): boolean {
    return track.removeJunction(junctionIndex);
}

/**
 * Sets the braking distance of the track. Used by trains to determine the point to slow down when entering a station.
 *
 * Hash: 0x77EB78D0
 * @deprecated Use track.setBrakingDistance(track1, brakingDistance) instead
 */
export function setTrackBrakingDistance(track1: number, brakingDistance: number): void {
    return track.setBrakingDistance(track1, brakingDistance);
}

/**
 * Toggles the track being active. If disabled mission trains will not be able to spawn on this track and will look for the next closest track to spawn
 *
 * Hash: 0x4B41E84C
 * @deprecated Use track.setEnabled(track1, enabled) instead
 */
export function setTrackEnabled(track1: number, enabled: boolean): void {
    return track.setEnabled(track1, enabled);
}

/**
 * Sets the state of a track junction.
 *
 * Hash: 0x537B449D
 * @deprecated Use track.setJunctionActive(junctionIndex, state) instead
 */
export function setTrackJunctionActive(junctionIndex: number, state: boolean): boolean {
    return track.setJunctionActive(junctionIndex, state);
}

/**
 * Sets the max speed for the train tracks. Used by ambient trains and for station calculations
 *
 * Hash: 0x37BFC732
 * @deprecated Use track.setMaxSpeed(track1, newSpeed) instead
 */
export function setTrackMaxSpeed(track1: number, newSpeed: number): void {
    return track.setMaxSpeed(track1, newSpeed);
}

/**
 * Break off vehicle wheel by index. The `leaveDebrisTrail` flag requires `putOnFire` to be true.
 *
 * Hash: 0xA274CADB
 * @deprecated Use vehicle.breakOffWheel(vehicle1, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag, putOnFire) instead
 */
export function breakOffVehicleWheel(vehicle1: number | Vehicle, wheelIndex: number, leaveDebrisTrail: boolean, deleteWheel: boolean, unknownFlag: boolean, putOnFire: boolean): void {
    return vehicle.breakOffWheel(vehicle1, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag, putOnFire);
}

/**
 * Removes vehicle xenon lights custom RGB color.
 *
 * Hash: 0x2867ED8C
 * @deprecated Use vehicle.clearXenonLightsCustomColor(vehicle1) instead
 */
export function clearVehicleXenonLightsCustomColor(vehicle1: number | Vehicle): void {
    return vehicle.clearXenonLightsCustomColor(vehicle1);
}

/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity(While riding in a car as a passenger)
 *
 * Hash: 0x5C140555
 * @deprecated Use vehicle.disablePassengerIdleCamera(state) instead
 */
export function disableVehiclePassengerIdleCamera(state: boolean): void {
    return vehicle.disablePassengerIdleCamera(state);
}

/**
 * Checks whether the vehicle consumes fuel. The check is done based on petrol tank volume and vehicle type. Bicycles and vehicles with petrol tank volume equal to zero (only bicycles by default) do not use fuel. All other vehicles do.
 *
 * You can customize petrol tank volume using [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolTankVolume`.
 *
 * Hash: 0xEF30A696
 * @deprecated Use vehicle.doesUseFuel(vehicle1) instead
 */
export function doesVehicleUseFuel(vehicle1: number | Vehicle): boolean {
    return vehicle.doesUseFuel(vehicle1);
}

/**
 * Returns all registered vehicle model names, including non-dlc vehicles and custom vehicles in no particular order.
 *
 * <strong>Example output</strong>
 *
 * ```
 * ["dubsta", "dubsta2", "dubsta3", "myverycoolcar", "sultan", "sultanrs", ...]
 * ```
 *
 * This native will not return vehicles that are unregistered (i.e from a resource being stopped) during runtime.
 *
 * Hash: 0xD7531645
 * @deprecated Use vehicle.getAllModels() instead
 */
export function getAllVehicleModels(): number {
    return vehicle.getAllModels();
}

/**
 * A getter for [SET_AMBIENT_VEHICLE_RANGE_MULTIPLIER_THIS_FRAME](#\_0x90B6DA738A9A25DA).
 *
 * Hash: 0x667EC929
 * @deprecated Use vehicle.getAmbientRangeMultiplier() instead
 */
export function getAmbientVehicleRangeMultiplier(): number {
    return vehicle.getAmbientRangeMultiplier();
}

/**
 * No comment provided
 *
 * Hash: 0xE015E854
 * @deprecated Use vehicle.getTrainCurrentTrackNode(train) instead
 */
export function getTrainCurrentTrackNode(train: number | Vehicle): number {
    return vehicle.getTrainCurrentTrackNode(train);
}

/**
 * Gets the door count for the specified train.
 *
 * Hash: 0x99974721
 * @deprecated Use vehicle.getTrainDoorCount(train) instead
 */
export function getTrainDoorCount(train: number | Vehicle): number {
    return vehicle.getTrainDoorCount(train);
}

/**
 * Gets the ratio that a door is open for on a train.
 *
 * Hash: 0x40B16551
 * @deprecated Use vehicle.getTrainDoorOpenRatio(train, doorIndex) instead
 */
export function getTrainDoorOpenRatio(train: number | Vehicle, doorIndex: number): number {
    return vehicle.getTrainDoorOpenRatio(train, doorIndex);
}

/**
 * Gets the speed the train is currently going.
 *
 * Hash: 0x428668B7
 * @deprecated Use vehicle.getTrainSpeed(train) instead
 */
export function getTrainSpeed(train: number | Vehicle): number {
    return vehicle.getTrainSpeed(train);
}

/**
 * No comment provided
 *
 * Hash: 0xC62AAC98
 * @deprecated Use vehicle.getAlarmTimeLeft(vehicle1) instead
 */
export function getVehicleAlarmTimeLeft(vehicle1: number | Vehicle): number {
    return vehicle.getAlarmTimeLeft(vehicle1);
}

/**
 * A getter for [SET_VEHICLE_CHEAT_POWER_INCREASE](#\_0xB59E4BD37AE292DB).
 *
 * Hash: 0xC3C93F28
 * @deprecated Use vehicle.getCheatPowerIncrease(vehicle1) instead
 */
export function getVehicleCheatPowerIncrease(vehicle1: number | Vehicle): number {
    return vehicle.getCheatPowerIncrease(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x1DAD4583
 * @deprecated Use vehicle.getClutch(vehicle1) instead
 */
export function getVehicleClutch(vehicle1: number | Vehicle): number {
    return vehicle.getClutch(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xB4F4E566
 * @deprecated Use vehicle.getCurrentGear(vehicle1) instead
 */
export function getVehicleCurrentGear(vehicle1: number | Vehicle): number {
    return vehicle.getCurrentGear(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xE7B12B54
 * @deprecated Use vehicle.getCurrentRpm(vehicle1) instead
 */
export function getVehicleCurrentRpm(vehicle1: number | Vehicle): number {
    return vehicle.getCurrentRpm(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xDFFABA2A
 * @deprecated Use vehicle.getDashboardBoost() instead
 */
export function getVehicleDashboardBoost(): number {
    return vehicle.getDashboardBoost();
}

/**
 * Retrieves the current gear displayed on the dashboard of the vehicle the player is in, returned as a float. This value represents the gear shown in the instrument cluster, such as "R" (0.0) or positive values (e.g., 1.0, 2.0, etc.) for drive gears.
 *
 * Hash: 0x435C86F4
 * @deprecated Use vehicle.getDashboardCurrentGear() instead
 */
export function getVehicleDashboardCurrentGear(): number {
    return vehicle.getDashboardCurrentGear();
}

/**
 * No comment provided
 *
 * Hash: 0x19B0B2CE
 * @deprecated Use vehicle.getDashboardFuel() instead
 */
export function getVehicleDashboardFuel(): number {
    return vehicle.getDashboardFuel();
}

/**
 * Gets the state of the player vehicle's dashboard lights as a bit set
 * indicator_left = 1
 * indicator_right = 2
 * handbrakeLight = 4
 * engineLight = 8
 * ABSLight = 16
 * gasLight = 32
 * oilLight = 64
 * headlights = 128
 * highBeam = 256
 * batteryLight = 512
 *
 * Hash: 0x500FFE9D
 * @deprecated Use vehicle.getDashboardLights() instead
 */
export function getVehicleDashboardLights(): number {
    return vehicle.getDashboardLights();
}

/**
 * No comment provided
 *
 * Hash: 0x3856D767
 * @deprecated Use vehicle.getDashboardOilPressure() instead
 */
export function getVehicleDashboardOilPressure(): number {
    return vehicle.getDashboardOilPressure();
}

/**
 * No comment provided
 *
 * Hash: 0x1F5996AA
 * @deprecated Use vehicle.getDashboardOilTemp() instead
 */
export function getVehicleDashboardOilTemp(): number {
    return vehicle.getDashboardOilTemp();
}

/**
 * No comment provided
 *
 * Hash: 0xF9716A11
 * @deprecated Use vehicle.getDashboardRpm() instead
 */
export function getVehicleDashboardRpm(): number {
    return vehicle.getDashboardRpm();
}

/**
 * No comment provided
 *
 * Hash: 0x9AAD420E
 * @deprecated Use vehicle.getDashboardSpeed(vehicle1) instead
 */
export function getVehicleDashboardSpeed(vehicle1: number | Vehicle): number {
    return vehicle.getDashboardSpeed(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x6B6ADAFA
 * @deprecated Use vehicle.getDashboardTemp() instead
 */
export function getVehicleDashboardTemp(): number {
    return vehicle.getDashboardTemp();
}

/**
 * No comment provided
 *
 * Hash: 0xFABE67A9
 * @deprecated Use vehicle.getDashboardVacuum() instead
 */
export function getVehicleDashboardVacuum(): number {
    return vehicle.getDashboardVacuum();
}

/**
 * A getter for [SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x245A6883D966D537).
 *
 * Hash: 0xEF7C6538
 * @deprecated Use vehicle.getDensityMultiplier() instead
 */
export function getVehicleDensityMultiplier(): number {
    return vehicle.getDensityMultiplier();
}

/**
 * Gets a vehicle's multiplier used with a wheel's GET_VEHICLE_WHEEL_STEERING_ANGLE to determine the angle the wheel is rendered.
 *
 * Hash: 0x21C1DA8E
 * @deprecated Use vehicle.getDrawnWheelAngleMult(vehicle1) instead
 */
export function getVehicleDrawnWheelAngleMult(vehicle1: number | Vehicle): number {
    return vehicle.getDrawnWheelAngleMult(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xF4F495CB
 * @deprecated Use vehicle.getEngineTemperature(vehicle1) instead
 */
export function getVehicleEngineTemperature(vehicle1: number | Vehicle): number {
    return vehicle.getEngineTemperature(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x5F739BB8
 * @deprecated Use vehicle.getFuelLevel(vehicle1) instead
 */
export function getVehicleFuelLevel(vehicle1: number | Vehicle): number {
    return vehicle.getFuelLevel(vehicle1);
}

/**
 * Gets vehicles gear ratio on choosen gear.
 *
 * Hash: 0x82E794B7
 * @deprecated Use vehicle.getGearRatio(vehicle1, gear) instead
 */
export function getVehicleGearRatio(vehicle1: number | Vehicle, gear: number): number {
    return vehicle.getGearRatio(vehicle1, gear);
}

/**
 * No comment provided
 *
 * Hash: 0xB48A1292
 * @deprecated Use vehicle.getGravityAmount(vehicle1) instead
 */
export function getVehicleGravityAmount(vehicle1: number | Vehicle): number {
    return vehicle.getGravityAmount(vehicle1);
}

/**
 * Returns the effective handling data of a vehicle as a floating-point value.
 * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 *
 * Hash: 0x642FC12F
 * @deprecated Use vehicle.getHandlingFloat(vehicle1, class_, fieldName) instead
 */
export function getVehicleHandlingFloat(vehicle1: number | Vehicle, class_: string, fieldName: string): number {
    return vehicle.getHandlingFloat(vehicle1, class_, fieldName);
}

/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 *
 * Hash: 0x27396C75
 * @deprecated Use vehicle.getHandlingInt(vehicle1, class_, fieldName) instead
 */
export function getVehicleHandlingInt(vehicle1: number | Vehicle, class_: string, fieldName: string): number {
    return vehicle.getHandlingInt(vehicle1, class_, fieldName);
}

/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 *
 * Hash: 0xFB341304
 * @deprecated Use vehicle.getHandlingVector(vehicle1, class_, fieldName) instead
 */
export function getVehicleHandlingVector(vehicle1: number | Vehicle, class_: string, fieldName: string): Vector3 {
    return vehicle.getHandlingVector(vehicle1, class_, fieldName);
}

/**
 * No comment provided
 *
 * Hash: 0xF1D1D689
 * @deprecated Use vehicle.getHighGear(vehicle1) instead
 */
export function getVehicleHighGear(vehicle1: number | Vehicle): number {
    return vehicle.getHighGear(vehicle1);
}

/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 *
 * Hash: 0x83070354
 * @deprecated Use vehicle.getIndicatorLights(vehicle1) instead
 */
export function getVehicleIndicatorLights(vehicle1: number | Vehicle): number {
    return vehicle.getIndicatorLights(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x7E6E219C
 * @deprecated Use vehicle.getLightMultiplier(vehicle1) instead
 */
export function getVehicleLightMultiplier(vehicle1: number | Vehicle): number {
    return vehicle.getLightMultiplier(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xDDB298AE
 * @deprecated Use vehicle.getNextGear(vehicle1) instead
 */
export function getVehicleNextGear(vehicle1: number | Vehicle): number {
    return vehicle.getNextGear(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xEDF4B0FC
 * @deprecated Use vehicle.getNumberOfWheels(vehicle1) instead
 */
export function getVehicleNumberOfWheels(vehicle1: number | Vehicle): number {
    return vehicle.getNumberOfWheels(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xFC7F8EF4
 * @deprecated Use vehicle.getOilLevel(vehicle1) instead
 */
export function getVehicleOilLevel(vehicle1: number | Vehicle): number {
    return vehicle.getOilLevel(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x954465DE
 * @deprecated Use vehicle.getSteeringScale(vehicle1) instead
 */
export function getVehicleSteeringScale(vehicle1: number | Vehicle): number {
    return vehicle.getSteeringScale(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xD1D07351
 * @deprecated Use vehicle.getThrottleOffset(vehicle1) instead
 */
export function getVehicleThrottleOffset(vehicle1: number | Vehicle): number {
    return vehicle.getThrottleOffset(vehicle1);
}

/**
 * A getter for [MODIFY_VEHICLE_TOP_SPEED](#\_0x93A3996368C94158). Returns -1.0 if a modifier is not set.
 *
 * Hash: 0x998B7FEE
 * @deprecated Use vehicle.getTopSpeedModifier(vehicle1) instead
 */
export function getVehicleTopSpeedModifier(vehicle1: number | Vehicle): number {
    return vehicle.getTopSpeedModifier(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xE02B51D7
 * @deprecated Use vehicle.getTurboPressure(vehicle1) instead
 */
export function getVehicleTurboPressure(vehicle1: number | Vehicle): number {
    return vehicle.getTurboPressure(vehicle1);
}

/**
 * List of known states:
 *
 * ```
 * 1: Not wheeling.
 * 65: Vehicle is ready to do wheelie (burnouting).
 * 129: Vehicle is doing wheelie.
 * ```
 *
 * Hash: 0x137260D1
 * @deprecated Use vehicle.getWheelieState(vehicle1) instead
 */
export function getVehicleWheelieState(vehicle1: number | Vehicle): number {
    return vehicle.getWheelieState(vehicle1);
}

/**
 * Gets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f when braking.
 *
 * Hash: 0x70FE2EFF
 * @deprecated Use vehicle.getWheelBrakePressure(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelBrakePressure(vehicle1: number | Vehicle, wheelIndex: number): number {
    return vehicle.getWheelBrakePressure(vehicle1, wheelIndex);
}

/**
 * Gets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xC70FA0C7
 * @deprecated Use vehicle.getWheelFlags(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelFlags(vehicle1: number | Vehicle, wheelIndex: number): number {
    return vehicle.getWheelFlags(vehicle1, wheelIndex);
}

/**
 * No comment provided
 *
 * Hash: 0x54A677F5
 * @deprecated Use vehicle.getWheelHealth(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelHealth(vehicle1: number | Vehicle, wheelIndex: number): number {
    return vehicle.getWheelHealth(vehicle1, wheelIndex);
}

/**
 * Gets whether the wheel is powered.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in GET_VEHICLE_WHEEL_FLAGS.
 *
 * Hash: 0x3CCF1B49
 * @deprecated Use vehicle.getWheelIsPowered(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelIsPowered(vehicle1: number | Vehicle, wheelIndex: number): boolean {
    return vehicle.getWheelIsPowered(vehicle1, wheelIndex);
}

/**
 * Gets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xD203287
 * @deprecated Use vehicle.getWheelPower(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelPower(vehicle1: number | Vehicle, wheelIndex: number): number {
    return vehicle.getWheelPower(vehicle1, wheelIndex);
}

/**
 * No comment provided
 *
 * Hash: 0xCEE21AB2
 * @deprecated Use vehicle.getWheelRimColliderSize(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelRimColliderSize(vehicle1: number | Vehicle, wheelIndex: number): number {
    return vehicle.getWheelRimColliderSize(vehicle1, wheelIndex);
}

/**
 * Gets the rotation speed of a wheel.
 * This is used internally to calcuate GET_VEHICLE_WHEEL_SPEED.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xEA1859E5
 * @deprecated Use vehicle.getWheelRotationSpeed(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelRotationSpeed(vehicle1: number | Vehicle, wheelIndex: number): number {
    return vehicle.getWheelRotationSpeed(vehicle1, wheelIndex);
}

/**
 * Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 *
 * Hash: 0x4046B66
 * @deprecated Use vehicle.getWheelSize(vehicle1) instead
 */
export function getVehicleWheelSize(vehicle1: number | Vehicle): number {
    return vehicle.getWheelSize(vehicle1);
}

/**
 * Gets speed of a wheel at the tyre.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x149C9DA0
 * @deprecated Use vehicle.getWheelSpeed(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelSpeed(vehicle1: number | Vehicle, wheelIndex: number): number {
    return vehicle.getWheelSpeed(vehicle1, wheelIndex);
}

/**
 * Gets steering angle of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xA0867448
 * @deprecated Use vehicle.getWheelSteeringAngle(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelSteeringAngle(vehicle1: number | Vehicle, wheelIndex: number): number {
    return vehicle.getWheelSteeringAngle(vehicle1, wheelIndex);
}

/**
 * No comment provided
 *
 * Hash: 0xA7F04022
 * @deprecated Use vehicle.getWheelSurfaceMaterial(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelSurfaceMaterial(vehicle1: number | Vehicle, wheelIndex: number): number {
    return vehicle.getWheelSurfaceMaterial(vehicle1, wheelIndex);
}

/**
 * Gets the current suspension compression of a wheel.
 * Returns a positive value. 0 means the suspension is fully extended, the wheel is off the ground.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x2B48175B
 * @deprecated Use vehicle.getWheelSuspensionCompression(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelSuspensionCompression(vehicle1: number | Vehicle, wheelIndex: number): number {
    return vehicle.getWheelSuspensionCompression(vehicle1, wheelIndex);
}

/**
 * No comment provided
 *
 * Hash: 0xE0BA9FE6
 * @deprecated Use vehicle.getWheelTireColliderSize(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelTireColliderSize(vehicle1: number | Vehicle, wheelIndex: number): number {
    return vehicle.getWheelTireColliderSize(vehicle1, wheelIndex);
}

/**
 * No comment provided
 *
 * Hash: 0xEF65929C
 * @deprecated Use vehicle.getWheelTireColliderWidth(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelTireColliderWidth(vehicle1: number | Vehicle, wheelIndex: number): number {
    return vehicle.getWheelTireColliderWidth(vehicle1, wheelIndex);
}

/**
 * Gets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x3BCFEE14
 * @deprecated Use vehicle.getWheelTractionVectorLength(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelTractionVectorLength(vehicle1: number | Vehicle, wheelIndex: number): number {
    return vehicle.getWheelTractionVectorLength(vehicle1, wheelIndex);
}

/**
 * Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 *
 * Hash: 0x9C7B59F9
 * @deprecated Use vehicle.getWheelWidth(vehicle1) instead
 */
export function getVehicleWheelWidth(vehicle1: number | Vehicle): number {
    return vehicle.getWheelWidth(vehicle1);
}

/**
 * Returns the offset of the specified wheel relative to the wheel's axle center.
 *
 * Hash: 0xCC90CBCA
 * @deprecated Use vehicle.getWheelXOffset(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelXOffset(vehicle1: number | Vehicle, wheelIndex: number): number {
    return vehicle.getWheelXOffset(vehicle1, wheelIndex);
}

/**
 * No comment provided
 *
 * Hash: 0x2EA4AFFE
 * @deprecated Use vehicle.getWheelYRotation(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelYRotation(vehicle1: number | Vehicle, wheelIndex: number): number {
    return vehicle.getWheelYRotation(vehicle1, wheelIndex);
}

/**
 * Returns vehicle xenon lights custom RGB color values. Do note this native doesn't return non-RGB colors that was set with [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07).
 *
 * Hash: 0xC715F730
 * @deprecated Use vehicle.getXenonLightsCustomColor(vehicle1) instead
 */
export function getVehicleXenonLightsCustomColor(vehicle1: number | Vehicle): [boolean, number, number, number] {
    return vehicle.getXenonLightsCustomColor(vehicle1);
}

/**
 * A getter for [SET_VEHICLE_XMAS_SNOW_FACTOR](#\_0x80CC4C9E).
 *
 * Hash: 0x16605B30
 * @deprecated Use vehicle.getXmasSnowFactor() instead
 */
export function getVehicleXmasSnowFactor(): number {
    return vehicle.getXmasSnowFactor();
}

/**
 * No comment provided
 *
 * Hash: 0xDC921211
 * @deprecated Use vehicle.isAlarmSet(vehicle1) instead
 */
export function isVehicleAlarmSet(vehicle1: number | Vehicle): boolean {
    return vehicle.isAlarmSet(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xA411F72C
 * @deprecated Use vehicle.isInteriorLightOn(vehicle1) instead
 */
export function isVehicleInteriorLightOn(vehicle1: number | Vehicle): boolean {
    return vehicle.isInteriorLightOn(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xF9933BF4
 * @deprecated Use vehicle.isNeedsToBeHotwired(vehicle1) instead
 */
export function isVehicleNeedsToBeHotwired(vehicle1: number | Vehicle): boolean {
    return vehicle.isNeedsToBeHotwired(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xF849ED67
 * @deprecated Use vehicle.isPreviouslyOwnedByPlayer(vehicle1) instead
 */
export function isVehiclePreviouslyOwnedByPlayer(vehicle1: number | Vehicle): boolean {
    return vehicle.isPreviouslyOwnedByPlayer(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xA7DAF7C
 * @deprecated Use vehicle.isWanted(vehicle1) instead
 */
export function isVehicleWanted(vehicle1: number | Vehicle): boolean {
    return vehicle.isWanted(vehicle1);
}

/**
 * Setting the state to true and a value between 0 and 2 will cause pedestrian vehicles to react accordingly to sirens.
 *
 * ```cpp
 * enum Reactions {
 * Left = 0,
 * Right = 1,
 * Stop = 2
 * }
 * ```
 *
 * Hash: 0x3F3EB3F7
 * @deprecated Use vehicle.overrideReactionToSiren(state, reaction) instead
 */
export function overrideReactionToVehicleSiren(state: boolean, reaction: number): void {
    return vehicle.overrideReactionToSiren(state, reaction);
}

/**
 * Overrides whether or not peds can stand on top of the specified vehicle.
 *
 * Note this flag is not replicated automatically, you will have to manually do so.
 *
 * Hash: 0x7FA03E76
 * @deprecated Use vehicle.overridePedsCanStandOnTopFlag(vehicle1, can) instead
 */
export function overrideVehiclePedsCanStandOnTopFlag(vehicle1: number | Vehicle, can: boolean): void {
    return vehicle.overridePedsCanStandOnTopFlag(vehicle1, can);
}

/**
 * Resets whether or not peds can stand on top of the specified vehicle.
 *
 * Note this flag is not replicated automatically, you will have to manually do so.
 *
 * Hash: 0xDF62CFE2
 * @deprecated Use vehicle.resetPedsCanStandOnTopFlag(vehicle1) instead
 */
export function resetVehiclePedsCanStandOnTopFlag(vehicle1: number | Vehicle): void {
    return vehicle.resetPedsCanStandOnTopFlag(vehicle1);
}

/**
 * Sets the default number plate text pattern for vehicles seen on the local client with the specified plate index as their *default* index (`plateProbabilities` from carvariations).
 *
 * For consistency, this should be used with the same value on all clients, since vehicles *without* custom text will use a seeded random number generator with this pattern to determine the default plate text.
 *
 * The default value is `11AAA111`, and using this or a NULL string will revert to the default game RNG.
 *
 * ### Pattern string format
 *
 * *   `1` will lead to a random number from 0-9.
 * *   `A` will lead to a random letter from A-Z.
 * *   `.` will lead to a random letter *or* number, with 50% probability of being either.
 * *   `^1` will lead to a literal `1` being emitted.
 * *   `^A` will lead to a literal `A` being emitted.
 * *   Any other character will lead to said character being emitted.
 * *   A string shorter than 8 characters will be padded on the right.
 *
 * Hash: 0x79780FD2
 * @deprecated Use vehicle.setDefaultNumberPlateTextPattern(plateIndex, pattern) instead
 */
export function setDefaultVehicleNumberPlateTextPattern(plateIndex: number, pattern: string): void {
    return vehicle.setDefaultNumberPlateTextPattern(plateIndex, pattern);
}

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0xFE8064E3
 * @deprecated Use vehicle.setHandlingField(vehicle1, class_, fieldName, value) instead
 */
export function setHandlingField(vehicle1: string, class_: string, fieldName: string, value: any): void {
    return vehicle.setHandlingField(vehicle1, class_, fieldName, value);
}

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0x90DD01C
 * @deprecated Use vehicle.setHandlingFloat(vehicle1, class_, fieldName, value) instead
 */
export function setHandlingFloat(vehicle1: string, class_: string, fieldName: string, value: number): void {
    return vehicle.setHandlingFloat(vehicle1, class_, fieldName, value);
}

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 *
 * Hash: 0x8AB3F46C
 * @deprecated Use vehicle.setHandlingInt(vehicle1, class_, fieldName, value) instead
 */
export function setHandlingInt(vehicle1: string, class_: string, fieldName: string, value: number): void {
    return vehicle.setHandlingInt(vehicle1, class_, fieldName, value);
}

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 *
 * Hash: 0x7F9D543
 * @deprecated Use vehicle.setHandlingVector(vehicle1, class_, fieldName, value) instead
 */
export function setHandlingVector(vehicle1: string, class_: string, fieldName: string, value: Vector3): void {
    return vehicle.setHandlingVector(vehicle1, class_, fieldName, value);
}

/**
 * This completely disables pedestrian vehicles from reacting to sirens. They will not try to do any maneuver to evade.
 *
 * Hash: 0xB90BBC6E
 * @deprecated Use vehicle.setReactionToWithSirenDisabled(state) instead
 */
export function setReactionToVehicleWithSirenDisabled(state: boolean): void {
    return vehicle.setReactionToWithSirenDisabled(state);
}

/**
 * Enables or disables whether train doors should be forced open whilst a player is inside the train. This is enabled by default in multiplayer.
 *
 * Hash: 0xD4D1BA63
 * @deprecated Use vehicle.setTrainsForceDoorsOpen(forceOpen) instead
 */
export function setTrainsForceDoorsOpen(forceOpen: boolean): void {
    return vehicle.setTrainsForceDoorsOpen(forceOpen);
}

/**
 * Sets the ratio that a door is open for on a train.
 *
 * Hash: 0x2468DBE8
 * @deprecated Use vehicle.setTrainDoorOpenRatio(train, doorIndex, ratio) instead
 */
export function setTrainDoorOpenRatio(train: number | Vehicle, doorIndex: number, ratio: number): void {
    return vehicle.setTrainDoorOpenRatio(train, doorIndex, ratio);
}

/**
 * No comment provided
 *
 * Hash: 0x61CB74A0
 * @deprecated Use vehicle.setTrainState(train, state) instead
 */
export function setTrainState(train: number | Vehicle, state: number): void {
    return vehicle.setTrainState(train, state);
}

/**
 * Toggles a train's ability to stop at stations
 *
 * Hash: 0xECB8B577
 * @deprecated Use vehicle.setTrainStopAtStations(train, state) instead
 */
export function setTrainStopAtStations(train: number | Vehicle, state: boolean): void {
    return vehicle.setTrainStopAtStations(train, state);
}

/**
 * No comment provided
 *
 * Hash: 0xC108EE6F
 * @deprecated Use vehicle.setAlarmTimeLeft(vehicle1, time) instead
 */
export function setVehicleAlarmTimeLeft(vehicle1: number | Vehicle, time: number): void {
    return vehicle.setAlarmTimeLeft(vehicle1, time);
}

/**
 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 *
 * Hash: 0x5F3A3574
 * @deprecated Use vehicle.setAutoRepairDisabled(vehicle1, value) instead
 */
export function setVehicleAutoRepairDisabled(vehicle1: number | Vehicle, value: boolean): void {
    return vehicle.setAutoRepairDisabled(vehicle1, value);
}

/**
 * No comment provided
 *
 * Hash: 0x2F70ACED
 * @deprecated Use vehicle.setClutch(vehicle1, clutch) instead
 */
export function setVehicleClutch(vehicle1: number | Vehicle, clutch: number): void {
    return vehicle.setClutch(vehicle1, clutch);
}

/**
 * No comment provided
 *
 * Hash: 0x2A01A8FC
 * @deprecated Use vehicle.setCurrentRpm(vehicle1, rpm) instead
 */
export function setVehicleCurrentRpm(vehicle1: number | Vehicle, rpm: number): void {
    return vehicle.setCurrentRpm(vehicle1, rpm);
}

/**
 * No comment provided
 *
 * Hash: 0x6C93C4A9
 * @deprecated Use vehicle.setEngineTemperature(vehicle1, temperature) instead
 */
export function setVehicleEngineTemperature(vehicle1: number | Vehicle, temperature: number): void {
    return vehicle.setEngineTemperature(vehicle1, temperature);
}

/**
 * No comment provided
 *
 * Hash: 0xBA970511
 * @deprecated Use vehicle.setFuelLevel(vehicle1, level) instead
 */
export function setVehicleFuelLevel(vehicle1: number | Vehicle, level: number): void {
    return vehicle.setFuelLevel(vehicle1, level);
}

/**
 * Sets the vehicles gear ratio on choosen gear, reverse gear needs to be a negative float and forward moving gear needs to be a positive float. Refer to the examples if confused.
 *
 * Hash: 0x496EF2F2
 * @deprecated Use vehicle.setGearRatio(vehicle1, gear, ratio) instead
 */
export function setVehicleGearRatio(vehicle1: number | Vehicle, gear: number, ratio: number): void {
    return vehicle.setGearRatio(vehicle1, gear, ratio);
}

/**
 * No comment provided
 *
 * Hash: 0x1A963E58
 * @deprecated Use vehicle.setGravityAmount(vehicle1, gravity) instead
 */
export function setVehicleGravityAmount(vehicle1: number | Vehicle, gravity: number): void {
    return vehicle.setGravityAmount(vehicle1, gravity);
}

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0x2BA40795
 * @deprecated Use vehicle.setVehicleHandlingField(vehicle1, class_, fieldName, value) instead
 */
export function setVehicleHandlingField(vehicle1: number | Vehicle, class_: string, fieldName: string, value: any): void {
    return vehicle.setVehicleHandlingField(vehicle1, class_, fieldName, value);
}

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0x488C86D2
 * @deprecated Use vehicle.setVehicleHandlingFloat(vehicle1, class_, fieldName, value) instead
 */
export function setVehicleHandlingFloat(vehicle1: number | Vehicle, class_: string, fieldName: string, value: number): void {
    return vehicle.setVehicleHandlingFloat(vehicle1, class_, fieldName, value);
}

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 *
 * Hash: 0xC37F4CF9
 * @deprecated Use vehicle.setVehicleHandlingInt(vehicle1, class_, fieldName, value) instead
 */
export function setVehicleHandlingInt(vehicle1: number | Vehicle, class_: string, fieldName: string, value: number): void {
    return vehicle.setVehicleHandlingInt(vehicle1, class_, fieldName, value);
}

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 *
 * Hash: 0x12497890
 * @deprecated Use vehicle.setVehicleHandlingVector(vehicle1, class_, fieldName, value) instead
 */
export function setVehicleHandlingVector(vehicle1: number | Vehicle, class_: string, fieldName: string, value: Vector3): void {
    return vehicle.setVehicleHandlingVector(vehicle1, class_, fieldName, value);
}

/**
 * No comment provided
 *
 * Hash: 0x20B1B3E6
 * @deprecated Use vehicle.setHighGear(vehicle1, gear) instead
 */
export function setVehicleHighGear(vehicle1: number | Vehicle, gear: number): void {
    return vehicle.setHighGear(vehicle1, gear);
}

/**
 * Sets the maximum distance in which [\_SET_VEHICLE_NITRO_ENABLED](#\_0xC8E9B6B71B8E660D) PTFX are rendered. Distance is measured from the camera position.
 *
 * Hash: 0xA40CB822
 * @deprecated Use vehicle.setNitroPtfxRange(range) instead
 */
export function setVehicleNitroPtfxRange(range: number): void {
    return vehicle.setNitroPtfxRange(range);
}

/**
 * No comment provided
 *
 * Hash: 0x90D1CAD1
 * @deprecated Use vehicle.setOilLevel(vehicle1, level) instead
 */
export function setVehicleOilLevel(vehicle1: number | Vehicle, level: number): void {
    return vehicle.setOilLevel(vehicle1, level);
}

/**
 * Set the vehicle's pitch bias. Only works on planes.
 *
 * Hash: 0x2A6CC9F2
 * @deprecated Use vehicle.setPitchBias(vehicle1, value) instead
 */
export function setVehiclePitchBias(vehicle1: number | Vehicle, value: number): void {
    return vehicle.setPitchBias(vehicle1, value);
}

/**
 * Set the vehicle's roll bias. Only works on planes.
 *
 * Hash: 0x264B45DE
 * @deprecated Use vehicle.setRollBias(vehicle1, value) instead
 */
export function setVehicleRollBias(vehicle1: number | Vehicle, value: number): void {
    return vehicle.setRollBias(vehicle1, value);
}

/**
 * No comment provided
 *
 * Hash: 0xFFCCC2EA
 * @deprecated Use vehicle.setSteeringAngle(vehicle1, angle) instead
 */
export function setVehicleSteeringAngle(vehicle1: number | Vehicle, angle: number): void {
    return vehicle.setSteeringAngle(vehicle1, angle);
}

/**
 * No comment provided
 *
 * Hash: 0xEB46596F
 * @deprecated Use vehicle.setSteeringScale(vehicle1, scale) instead
 */
export function setVehicleSteeringScale(vehicle1: number | Vehicle, scale: number): void {
    return vehicle.setSteeringScale(vehicle1, scale);
}

/**
 * Sets the height of the vehicle's suspension.
 * This changes the same value set by Suspension in the mod shop.
 * Negatives values raise the car. Positive values lower the car.
 *
 * This is change is visual only. The collision of the vehicle will not move.
 *
 * Hash: 0xB3439A01
 * @deprecated Use vehicle.setSuspensionHeight(vehicle1, newHeight) instead
 */
export function setVehicleSuspensionHeight(vehicle1: number | Vehicle, newHeight: number): void {
    return vehicle.setSuspensionHeight(vehicle1, newHeight);
}

/**
 * No comment provided
 *
 * Hash: 0x6485615E
 * @deprecated Use vehicle.setTurboPressure(vehicle1, pressure) instead
 */
export function setVehicleTurboPressure(vehicle1: number | Vehicle, pressure: number): void {
    return vehicle.setTurboPressure(vehicle1, pressure);
}

/**
 * Example script: https://pastebin.com/J6XGbkCW
 *
 * List of known states:
 *
 * ```
 * 1: Not wheeling.
 * 65: Vehicle is ready to do wheelie (burnouting).
 * 129: Vehicle is doing wheelie.
 * ```
 *
 * Hash: 0xEAB8DB65
 * @deprecated Use vehicle.setWheelieState(vehicle1, state) instead
 */
export function setVehicleWheelieState(vehicle1: number | Vehicle, state: number): void {
    return vehicle.setWheelieState(vehicle1, state);
}

/**
 * Sets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f
 *
 * Hash: 0xE80F4E31
 * @deprecated Use vehicle.setWheelBrakePressure(vehicle1, wheelIndex, pressure) instead
 */
export function setVehicleWheelBrakePressure(vehicle1: number | Vehicle, wheelIndex: number, pressure: number): void {
    return vehicle.setWheelBrakePressure(vehicle1, wheelIndex, pressure);
}

/**
 * Sets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xD2B9E90D
 * @deprecated Use vehicle.setWheelFlags(vehicle1, wheelIndex, flags) instead
 */
export function setVehicleWheelFlags(vehicle1: number | Vehicle, wheelIndex: number, flags: number): void {
    return vehicle.setWheelFlags(vehicle1, wheelIndex, flags);
}

/**
 * No comment provided
 *
 * Hash: 0xB22ECEFD
 * @deprecated Use vehicle.setWheelHealth(vehicle1, wheelIndex, health) instead
 */
export function setVehicleWheelHealth(vehicle1: number | Vehicle, wheelIndex: number, health: number): void {
    return vehicle.setWheelHealth(vehicle1, wheelIndex, health);
}

/**
 * Sets whether the wheel is powered.
 * On all wheel drive cars this works to change which wheels receive power, but if a car's fDriveBiasFront doesn't send power to that wheel, it won't get power anyway. This can be fixed by changing the fDriveBiasFront with SET_VEHICLE_HANDLING_FLOAT.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in SET_VEHICLE_WHEEL_FLAGS.
 *
 * Hash: 0xBD5291A0
 * @deprecated Use vehicle.setWheelIsPowered(vehicle1, wheelIndex, powered) instead
 */
export function setVehicleWheelIsPowered(vehicle1: number | Vehicle, wheelIndex: number, powered: boolean): void {
    return vehicle.setWheelIsPowered(vehicle1, wheelIndex, powered);
}

/**
 * Sets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xC6146043
 * @deprecated Use vehicle.setWheelPower(vehicle1, wheelIndex, power) instead
 */
export function setVehicleWheelPower(vehicle1: number | Vehicle, wheelIndex: number, power: number): void {
    return vehicle.setWheelPower(vehicle1, wheelIndex, power);
}

/**
 * Not sure what this changes, probably determines physical rim size in case the tire is blown.
 *
 * Hash: 0xF380E184
 * @deprecated Use vehicle.setWheelRimColliderSize(vehicle1, wheelIndex, value) instead
 */
export function setVehicleWheelRimColliderSize(vehicle1: number | Vehicle, wheelIndex: number, value: number): void {
    return vehicle.setWheelRimColliderSize(vehicle1, wheelIndex, value);
}

/**
 * Sets the rotation speed of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x35ED100D
 * @deprecated Use vehicle.setWheelRotationSpeed(vehicle1, wheelIndex, speed) instead
 */
export function setVehicleWheelRotationSpeed(vehicle1: number | Vehicle, wheelIndex: number, speed: number): void {
    return vehicle.setWheelRotationSpeed(vehicle1, wheelIndex, speed);
}

/**
 * Sets vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set size for non-default wheels).
 *
 * Hash: 0x53AB5C35
 * @deprecated Use vehicle.setWheelSize(vehicle1, size) instead
 */
export function setVehicleWheelSize(vehicle1: number | Vehicle, size: number): boolean {
    return vehicle.setWheelSize(vehicle1, size);
}

/**
 * Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).
 *
 * Hash: 0xB962D05C
 * @deprecated Use vehicle.setWheelTireColliderSize(vehicle1, wheelIndex, value) instead
 */
export function setVehicleWheelTireColliderSize(vehicle1: number | Vehicle, wheelIndex: number, value: number): void {
    return vehicle.setWheelTireColliderSize(vehicle1, wheelIndex, value);
}

/**
 * Use along with SetVehicleWheelWidth to resize the wheels (this native sets the collider width affecting physics while SetVehicleWheelWidth will change visual width).
 *
 * Hash: 0x47BD0270
 * @deprecated Use vehicle.setWheelTireColliderWidth(vehicle1, wheelIndex, value) instead
 */
export function setVehicleWheelTireColliderWidth(vehicle1: number | Vehicle, wheelIndex: number, value: number): void {
    return vehicle.setWheelTireColliderWidth(vehicle1, wheelIndex, value);
}

/**
 * Sets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x85C85A3A
 * @deprecated Use vehicle.setWheelTractionVectorLength(vehicle1, wheelIndex, length) instead
 */
export function setVehicleWheelTractionVectorLength(vehicle1: number | Vehicle, wheelIndex: number, length: number): void {
    return vehicle.setWheelTractionVectorLength(vehicle1, wheelIndex, length);
}

/**
 * Sets vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set width for non-default wheels).
 *
 * Hash: 0x64C3F1C0
 * @deprecated Use vehicle.setWheelWidth(vehicle1, width) instead
 */
export function setVehicleWheelWidth(vehicle1: number | Vehicle, width: number): boolean {
    return vehicle.setWheelWidth(vehicle1, width);
}

/**
 * Adjusts the offset of the specified wheel relative to the wheel's axle center.
 * Needs to be called every frame in order to function properly, as GTA will reset the offset otherwise.
 * This function can be especially useful to set the track width of a vehicle, for example:
 *
 * ```
 * function SetVehicleFrontTrackWidth(vehicle, width)
 * SetVehicleWheelXOffset(vehicle, 0, -width/2)
 * SetVehicleWheelXOffset(vehicle, 1, width/2)
 * end
 * ```
 *
 * Hash: 0xBD6357D
 * @deprecated Use vehicle.setWheelXOffset(vehicle1, wheelIndex, offset) instead
 */
export function setVehicleWheelXOffset(vehicle1: number | Vehicle, wheelIndex: number, offset: number): void {
    return vehicle.setWheelXOffset(vehicle1, wheelIndex, offset);
}

/**
 * No comment provided
 *
 * Hash: 0xC6C2171F
 * @deprecated Use vehicle.setWheelYRotation(vehicle1, wheelIndex, value) instead
 */
export function setVehicleWheelYRotation(vehicle1: number | Vehicle, wheelIndex: number, value: number): void {
    return vehicle.setWheelYRotation(vehicle1, wheelIndex, value);
}

/**
 * Sets custom vehicle xenon lights color, allowing to use RGB palette. The game will ignore lights color set by [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07) when custom color is active. This native is not synced between players. Requires xenon lights mod to be set on vehicle.
 *
 * Hash: 0x1683E7F0
 * @deprecated Use vehicle.setXenonLightsCustomColor(vehicle1, red, green, blue) instead
 */
export function setVehicleXenonLightsCustomColor(vehicle1: number | Vehicle, red: number, green: number, blue: number): void {
    return vehicle.setXenonLightsCustomColor(vehicle1, red, green, blue);
}

/**
 * No comment provided
 *
 * Hash: 0x80CC4C9E
 * @deprecated Use vehicle.setXmasSnowFactor(gripFactor) instead
 */
export function setVehicleXmasSnowFactor(gripFactor: number): void {
    return vehicle.setXmasSnowFactor(gripFactor);
}

/**
 * No comment provided
 *
 * Hash: 0x77CC80DC
 * @deprecated Use vehicle.doesTrainStopAtStations(train) instead
 */
export function doesTrainStopAtStations(train: number | Vehicle): boolean {
    return vehicle.doesTrainStopAtStations(train);
}

/**
 * Gets the trains desired speed.
 *
 * Hash: 0xA4921EF5
 * @deprecated Use vehicle.getTrainCruiseSpeed(train) instead
 */
export function getTrainCruiseSpeed(train: number | Vehicle): number {
    return vehicle.getTrainCruiseSpeed(train);
}

/**
 * Gets the direction the train is facing
 *
 * Hash: 0x8DAF79B6
 * @deprecated Use vehicle.getTrainDirection(train) instead
 */
export function getTrainDirection(train: number | Vehicle): boolean {
    return vehicle.getTrainDirection(train);
}

/**
 * No comment provided
 *
 * Hash: 0x81B50033
 * @deprecated Use vehicle.getTrainState(train) instead
 */
export function getTrainState(train: number | Vehicle): number {
    return vehicle.getTrainState(train);
}

/**
 * No comment provided
 *
 * Hash: 0x9AA339D
 * @deprecated Use vehicle.getTrainTrackIndex(train) instead
 */
export function getTrainTrackIndex(train: number | Vehicle): number {
    return vehicle.getTrainTrackIndex(train);
}

/**
 * No comment provided
 *
 * Hash: 0x483B013C
 * @deprecated Use vehicle.getHandbrake(vehicle1) instead
 */
export function getVehicleHandbrake(vehicle1: number | Vehicle): boolean {
    return vehicle.getHandbrake(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0x1382FCEA
 * @deprecated Use vehicle.getSteeringAngle(vehicle1) instead
 */
export function getVehicleSteeringAngle(vehicle1: number | Vehicle): number {
    return vehicle.getSteeringAngle(vehicle1);
}

/**
 * No comment provided
 *
 * Hash: 0xBB340D04
 * @deprecated Use vehicle.isEngineStarting(vehicle1) instead
 */
export function isVehicleEngineStarting(vehicle1: number | Vehicle): boolean {
    return vehicle.isEngineStarting(vehicle1);
}

/**
 * **Note**: Flags are not the same based on your `gamebuild`. Please see [here](https://docs.fivem.net/docs/game-references/vehicle-references/vehicle-flags) to see a complete list of all vehicle flags.
 *
 * Get vehicle.meta flag by index. Useful examples include `FLAG_LAW_ENFORCEMENT` (31), `FLAG_RICH_CAR` (36), `FLAG_IS_ELECTRIC` (43), `FLAG_IS_OFFROAD_VEHICLE` (48).
 *
 * Hash: 0xD85C9F57
 * @deprecated Use vehicle.getHasFlag(vehicle1, flagIndex) instead
 */
export function getVehicleHasFlag(vehicle1: number | Vehicle, flagIndex: number): boolean {
    return vehicle.getHasFlag(vehicle1, flagIndex);
}

/**
 * Returns the model type of the vehicle as defined by:
 *
 * ```cpp
 * enum VehicleType
 * {
 * VEHICLE_TYPE_NONE = -1,
 * VEHICLE_TYPE_CAR = 0,
 * VEHICLE_TYPE_PLANE = 1,
 * VEHICLE_TYPE_TRAILER = 2,
 * VEHICLE_TYPE_QUADBIKE = 3,
 * VEHICLE_TYPE_DRAFT = 4,
 * VEHICLE_TYPE_SUBMARINECAR = 5,
 * VEHICLE_TYPE_AMPHIBIOUS_AUTOMOBILE = 6,
 * VEHICLE_TYPE_AMPHIBIOUS_QUADBIKE = 7,
 * VEHICLE_TYPE_HELI = 8,
 * VEHICLE_TYPE_BLIMP = 9,
 * VEHICLE_TYPE_AUTOGYRO = 10,
 * VEHICLE_TYPE_BIKE = 11,
 * VEHICLE_TYPE_BICYCLE = 12,
 * VEHICLE_TYPE_BOAT = 13,
 * VEHICLE_TYPE_TRAIN = 14,
 * VEHICLE_TYPE_SUBMARINE = 15,
 * };
 * ```
 *
 * Hash: 0xDE73BC10
 * @deprecated Use vehicle.getTypeRaw(vehicle1) instead
 */
export function getVehicleTypeRaw(vehicle1: number | Vehicle): number {
    return vehicle.getTypeRaw(vehicle1);
}

/**
 * Getter for [BREAK_OFF_VEHICLE_WHEEL](?\_0xA274CADB).
 *
 * Hash: 0xCF1BC668
 * @deprecated Use vehicle.isWheelBrokenOff(vehicle1, wheelIndex) instead
 */
export function isVehicleWheelBrokenOff(vehicle1: number | Vehicle, wheelIndex: number): boolean {
    return vehicle.isWheelBrokenOff(vehicle1, wheelIndex);
}

/**
 * No comment provided
 *
 * Hash: 0x8923DD42
 * @deprecated Use vehicle.setCurrentGear(vehicle1, gear) instead
 */
export function setVehicleCurrentGear(vehicle1: number | Vehicle, gear: number): void {
    return vehicle.setCurrentGear(vehicle1, gear);
}

/**
 * This native is a setter for [`GET_VEHICLE_HAS_FLAG`](#\_0xD85C9F57).
 *
 * Hash: 0x63AE1A34
 * @deprecated Use vehicle.setFlag(vehicle1, flagIndex, value) instead
 */
export function setVehicleFlag(vehicle1: number | Vehicle, flagIndex: number, value: boolean): boolean {
    return vehicle.setFlag(vehicle1, flagIndex, value);
}

/**
 * No comment provided
 *
 * Hash: 0x3A4566F4
 * @deprecated Use vehicle.setNextGear(vehicle1, nextGear) instead
 */
export function setVehicleNextGear(vehicle1: number | Vehicle, nextGear: number): void {
    return vehicle.setNextGear(vehicle1, nextGear);
}

/**
 * Returns the type of the passed vehicle.
 *
 * For client scripts, reference the more detailed [GET_VEHICLE_TYPE_RAW](#\_0xDE73BC10) native.
 *
 * ### Vehicle types
 *
 * *   automobile
 * *   bike
 * *   boat
 * *   heli
 * *   plane
 * *   submarine
 * *   trailer
 * *   train
 *
 * Hash: 0xA273060E
 * @deprecated Use vehicle.getType(vehicle1) instead
 */
export function getVehicleType(vehicle1: number | Vehicle): string {
    return vehicle.getType(vehicle1);
}

/**
 * Creates a volume where water effects do not apply.
 * Useful for preventing water collisions from flooding areas underneath them.
 * This has no effect on waterquads, only water created from drawables and collisions.
 * Don't create volumes when your local ped is swimming (e.g. use IS_PED_SWIMMING in your scripts before you call this)
 *
 * Hash: 0xEB1C6DD
 * @deprecated Use water.createDryVolume(xMin, yMin, zMin, xMax, yMax, zMax) instead
 */
export function createDryVolume(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): number {
    return water.createDryVolume(xMin, yMin, zMin, xMax, yMax, zMax);
}

/**
 * No comment provided
 *
 * Hash: 0x14088095
 * @deprecated Use water.getQuadAlpha(waterQuad) instead
 */
export function getWaterQuadAlpha(waterQuad: number): [boolean, number, number, number, number] {
    return water.getQuadAlpha(waterQuad);
}

/**
 * This native returns the index of a water quad if the given point is inside its bounds.
 *
 * *If you also want to check for water level, check out [`GetWaterQuadAtCoords_3d`](#\_0xF8E03DB8)*
 *
 * Hash: 0x17321452
 * @deprecated Use water.getQuadAtCoords(x, y) instead
 */
export function getWaterQuadAtCoords(x: number, y: number): number {
    return water.getQuadAtCoords(x, y);
}

/**
 * This alternative implementation of [`GetWaterQuadAtCoords`](#\_0x17321452) also checks the height of the water level.
 *
 * Hash: 0xF8E03DB8
 * @deprecated Use water.getQuadAtCoords3d(pos) instead
 */
export function getWaterQuadAtCoords3d(pos: Vector3): number {
    return water.getQuadAtCoords3d(pos);
}

/**
 * No comment provided
 *
 * Hash: 0x42E9A06A
 * @deprecated Use water.getQuadBounds(waterQuad) instead
 */
export function getWaterQuadBounds(waterQuad: number): [boolean, number, number, number, number] {
    return water.getQuadBounds(waterQuad);
}

/**
 * No comment provided
 *
 * Hash: 0xB1884159
 * @deprecated Use water.getQuadCount() instead
 */
export function getWaterQuadCount(): number {
    return water.getQuadCount();
}

/**
 * No comment provided
 *
 * Hash: 0x22EA3BD8
 * @deprecated Use water.getQuadHasLimitedDepth(waterQuad) instead
 */
export function getWaterQuadHasLimitedDepth(waterQuad: number): [boolean, number] {
    return water.getQuadHasLimitedDepth(waterQuad);
}

/**
 * No comment provided
 *
 * Hash: 0x1DEDBD77
 * @deprecated Use water.getQuadIsInvisible(waterQuad) instead
 */
export function getWaterQuadIsInvisible(waterQuad: number): [boolean, number] {
    return water.getQuadIsInvisible(waterQuad);
}

/**
 * *level is defined as "z" in water.xml*
 *
 * Hash: 0x6523816B
 * @deprecated Use water.getQuadLevel(waterQuad) instead
 */
export function getWaterQuadLevel(waterQuad: number): [boolean, number] {
    return water.getQuadLevel(waterQuad);
}

/**
 * No comment provided
 *
 * Hash: 0x6F4ACBA
 * @deprecated Use water.getQuadNoStencil(waterQuad) instead
 */
export function getWaterQuadNoStencil(waterQuad: number): [boolean, number] {
    return water.getQuadNoStencil(waterQuad);
}

/**
 * Valid type definitions:
 *
 * *   **0** Square
 * *   **1** Right triangle where the 90 degree angle is at maxX, minY
 * *   **2** Right triangle where the 90 degree angle is at minX, minY
 * *   **3** Right triangle where the 90 degree angle is at minX, maxY
 * *   **4** Right triangle where the 90 degree angle is at maxY, maxY
 *
 * Hash: 0xE2501B8B
 * @deprecated Use water.getQuadType(waterQuad) instead
 */
export function getWaterQuadType(waterQuad: number): [boolean, number] {
    return water.getQuadType(waterQuad);
}

/**
 * No comment provided
 *
 * Hash: 0x865139A3
 * @deprecated Use water.getWaveQuadAmplitude(waveQuad) instead
 */
export function getWaveQuadAmplitude(waveQuad: number): [boolean, number] {
    return water.getWaveQuadAmplitude(waveQuad);
}

/**
 * This native returns the index of a wave quad if the given point is inside its bounds.
 *
 * Hash: 0x3F5A61A7
 * @deprecated Use water.getWaveQuadAtCoords(x, y) instead
 */
export function getWaveQuadAtCoords(x: number, y: number): number {
    return water.getWaveQuadAtCoords(x, y);
}

/**
 * No comment provided
 *
 * Hash: 0xF86136DB
 * @deprecated Use water.getWaveQuadBounds(waveQuad) instead
 */
export function getWaveQuadBounds(waveQuad: number): [boolean, number, number, number, number] {
    return water.getWaveQuadBounds(waveQuad);
}

/**
 * No comment provided
 *
 * Hash: 0x9250C76
 * @deprecated Use water.getWaveQuadCount() instead
 */
export function getWaveQuadCount(): number {
    return water.getWaveQuadCount();
}

/**
 * No comment provided
 *
 * Hash: 0xCCE49A1C
 * @deprecated Use water.getWaveQuadDirection(waveQuad) instead
 */
export function getWaveQuadDirection(waveQuad: number): [boolean, number, number] {
    return water.getWaveQuadDirection(waveQuad);
}

/**
 * Define the xml in a resources fxmanifest, under the file(s) section.
 *
 * Hash: 0xF5102568
 * @deprecated Use water.loadFromPath(resourceName, fileName) instead
 */
export function loadWaterFromPath(resourceName: string, fileName: string): boolean {
    return water.loadFromPath(resourceName, fileName);
}

/**
 * Removes a dry volume from the game session.
 * See CREATE_DRY_VOLUME for more info
 *
 * Hash: 0x7BCAA6E7
 * @deprecated Use water.removeDryVolume(handle) instead
 */
export function removeDryVolume(handle: number): void {
    return water.removeDryVolume(handle);
}

/**
 * Resets the water to the games default water.xml.
 *
 * Hash: 0x1DA4791
 * @deprecated Use water.reset() instead
 */
export function resetWater(): void {
    return water.reset();
}

/**
 * Sets world clip boundaries for water quads file (water.xml, water_heistisland.xml)
 * Used internally by LOAD_GLOBAL_WATER_FILE
 *
 * Hash: 0x9FCD2EE6
 * @deprecated Use water.setAreaClipRect(minX, minY, maxX, maxY) instead
 */
export function setWaterAreaClipRect(minX: number, minY: number, maxX: number, maxY: number): void {
    return water.setAreaClipRect(minX, minY, maxX, maxY);
}

/**
 * No comment provided
 *
 * Hash: 0xF49797EB
 * @deprecated Use water.setQuadAlpha(waterQuad, a0, a1, a2, a3) instead
 */
export function setWaterQuadAlpha(waterQuad: number, a0: number, a1: number, a2: number, a3: number): boolean {
    return water.setQuadAlpha(waterQuad, a0, a1, a2, a3);
}

/**
 * This native allows you to update the bounds of a specified water quad index.
 *
 * Hash: 0x80AD144C
 * @deprecated Use water.setQuadBounds(waterQuad, minX, minY, maxX, maxY) instead
 */
export function setWaterQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean {
    return water.setQuadBounds(waterQuad, minX, minY, maxX, maxY);
}

/**
 * No comment provided
 *
 * Hash: 0xD1FDCFC1
 * @deprecated Use water.setQuadHasLimitedDepth(waterQuad, hasLimitedDepth) instead
 */
export function setWaterQuadHasLimitedDepth(waterQuad: number, hasLimitedDepth: boolean): boolean {
    return water.setQuadHasLimitedDepth(waterQuad, hasLimitedDepth);
}

/**
 * No comment provided
 *
 * Hash: 0xA387D917
 * @deprecated Use water.setQuadIsInvisible(waterQuad, isInvisible) instead
 */
export function setWaterQuadIsInvisible(waterQuad: number, isInvisible: boolean): boolean {
    return water.setQuadIsInvisible(waterQuad, isInvisible);
}

/**
 * No comment provided
 *
 * Hash: 0x6292F7A8
 * @deprecated Use water.setQuadLevel(waterQuad, level) instead
 */
export function setWaterQuadLevel(waterQuad: number, level: number): boolean {
    return water.setQuadLevel(waterQuad, level);
}

/**
 * No comment provided
 *
 * Hash: 0xC3FF42FF
 * @deprecated Use water.setQuadNoStencil(waterQuad, noStencil) instead
 */
export function setWaterQuadNoStencil(waterQuad: number, noStencil: boolean): boolean {
    return water.setQuadNoStencil(waterQuad, noStencil);
}

/**
 * This native allows you to update the water quad type.
 *
 * Valid type definitions:
 *
 * *   **0** Square
 * *   **1** Right triangle where the 90 degree angle is at maxX, minY
 * *   **2** Right triangle where the 90 degree angle is at minX, minY
 * *   **3** Right triangle where the 90 degree angle is at minX, maxY
 * *   **4** Right triangle where the 90 degree angle is at maxY, maxY
 *
 * Hash: 0x50131EB2
 * @deprecated Use water.setQuadType(waterQuad, _type) instead
 */
export function setWaterQuadType(waterQuad: number, _type: number): boolean {
    return water.setQuadType(waterQuad, _type);
}

/**
 * No comment provided
 *
 * Hash: 0xE4174B7B
 * @deprecated Use water.setWaveQuadAmplitude(waveQuad, amplitude) instead
 */
export function setWaveQuadAmplitude(waveQuad: number, amplitude: number): boolean {
    return water.setWaveQuadAmplitude(waveQuad, amplitude);
}

/**
 * This native allows you to update the bounds of a specified water quad index.
 *
 * Hash: 0x1FCC1FAF
 * @deprecated Use water.setWaveQuadBounds(waveQuad, minX, minY, maxX, maxY) instead
 */
export function setWaveQuadBounds(waveQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean {
    return water.setWaveQuadBounds(waveQuad, minX, minY, maxX, maxY);
}

/**
 * directionX/Y should be constrained between -1.0 and 1.0
 * A positive value will create the wave starting at min and rolling towards max
 * A negative value will create the wave starting at max and rolling towards min
 * Applying both values allows you to make diagonal waves
 *
 * Hash: 0xFC9341A3
 * @deprecated Use water.setWaveQuadDirection(waveQuad, directionX, directionY) instead
 */
export function setWaveQuadDirection(waveQuad: number, directionX: number, directionY: number): boolean {
    return water.setWaveQuadDirection(waveQuad, directionX, directionY);
}

/**
 * A getter for the accuracy spread of a weapon.
 *
 * Hash: 0x5343721
 * @deprecated Use weapon.getAccuracySpread(weaponHash) instead
 */
export function getWeaponAccuracySpread(weaponHash: number | string): number {
    return weapon.getAccuracySpread(weaponHash);
}

/**
 * A getter for [SET_WEAPON_ANIMATION_OVERRIDE](#\_0x1055AC3A667F09D9).
 *
 * Hash: 0x63ED2E7
 * @deprecated Use weapon.getAnimationOverride(ped) instead
 */
export function getWeaponAnimationOverride(ped: number | Ped): number {
    return weapon.getAnimationOverride(ped);
}

/**
 * A getter for `CWeaponAccuracyModifier` in a weapon component.
 *
 * Hash: 0xC693E278
 * @deprecated Use weapon.getComponentAccuracyModifier(componentHash) instead
 */
export function getWeaponComponentAccuracyModifier(componentHash: number | string): number {
    return weapon.getComponentAccuracyModifier(componentHash);
}

/**
 * A getter for `CameraHash` in a weapon scope component.
 *
 * Hash: 0xACB7E68F
 * @deprecated Use weapon.getComponentCameraHash(componentHash) instead
 */
export function getWeaponComponentCameraHash(componentHash: number | string): number {
    return weapon.getComponentCameraHash(componentHash);
}

/**
 * A getter for `ClipSize` in a weapon component.
 *
 * Hash: 0xE14CF665
 * @deprecated Use weapon.getComponentClipSize(componentHash) instead
 */
export function getWeaponComponentClipSize(componentHash: number | string): number {
    return weapon.getComponentClipSize(componentHash);
}

/**
 * A getter for `CWeaponDamageModifier` in a weapon component.
 *
 * Hash: 0x4A0E3855
 * @deprecated Use weapon.getComponentDamageModifier(componentHash) instead
 */
export function getWeaponComponentDamageModifier(componentHash: number | string): number {
    return weapon.getComponentDamageModifier(componentHash);
}

/**
 * A getter for `CWeaponFallOffModifier` damage modifier value in a weapon component.
 *
 * Hash: 0xE134FB8D
 * @deprecated Use weapon.getComponentRangeDamageModifier(componentHash) instead
 */
export function getWeaponComponentRangeDamageModifier(componentHash: number | string): number {
    return weapon.getComponentRangeDamageModifier(componentHash);
}

/**
 * A getter for `CWeaponFallOffModifier` range modifier value in a weapon component.
 *
 * Hash: 0x2FD0BC1B
 * @deprecated Use weapon.getComponentRangeModifier(componentHash) instead
 */
export function getWeaponComponentRangeModifier(componentHash: number | string): number {
    return weapon.getComponentRangeModifier(componentHash);
}

/**
 * A getter for `ReticuleHash` in a weapon scope component.
 *
 * Hash: 0xF9AB9297
 * @deprecated Use weapon.getComponentReticuleHash(componentHash) instead
 */
export function getWeaponComponentReticuleHash(componentHash: number | string): number {
    return weapon.getComponentReticuleHash(componentHash);
}

/**
 * A getter for [\_SET_WEAPON_DAMAGE_MODIFIER](#\_0x4757F00BC6323CFE).
 *
 * Hash: 0xD979143
 * @deprecated Use weapon.getDamageModifier(weaponHash) instead
 */
export function getWeaponDamageModifier(weaponHash: number | string): number {
    return weapon.getDamageModifier(weaponHash);
}

/**
 * A getter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x5E1AF5F
 * @deprecated Use weapon.getRecoilShakeAmplitude(weaponHash) instead
 */
export function getWeaponRecoilShakeAmplitude(weaponHash: number | string): number {
    return weapon.getRecoilShakeAmplitude(weaponHash);
}

/**
 * Disables weapons aim blocking due to environment for local player.
 * For non-player peds [SET_PED_ENABLE_WEAPON_BLOCKING](#\_0x97A790315D3831FD) can be used.
 *
 * Hash: 0xDFD8F6DE
 * @deprecated Use weapon.setsNoAimBlocking(state) instead
 */
export function setWeaponsNoAimBlocking(state: boolean): void {
    return weapon.setsNoAimBlocking(state);
}

/**
 * Disables the game's built-in auto-reloading.
 *
 * Hash: 0x311150E5
 * @deprecated Use weapon.setsNoAutoreload(state) instead
 */
export function setWeaponsNoAutoreload(state: boolean): void {
    return weapon.setsNoAutoreload(state);
}

/**
 * Disables autoswapping to another weapon when the current weapon runs out of ammo.
 *
 * Hash: 0x2A7B50E
 * @deprecated Use weapon.setsNoAutoswap(state) instead
 */
export function setWeaponsNoAutoswap(state: boolean): void {
    return weapon.setsNoAutoswap(state);
}

/**
 * A setter for the accuracy spread of a weapon.
 *
 * Hash: 0x598DD6AE
 * @deprecated Use weapon.setAccuracySpread(weaponHash, spread) instead
 */
export function setWeaponAccuracySpread(weaponHash: number | string, spread: number): void {
    return weapon.setAccuracySpread(weaponHash, spread);
}

/**
 * A setter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x9864312F
 * @deprecated Use weapon.setRecoilShakeAmplitude(weaponHash, amplitude) instead
 */
export function setWeaponRecoilShakeAmplitude(weaponHash: number | string, amplitude: number): void {
    return weapon.setRecoilShakeAmplitude(weaponHash, amplitude);
}

/**
 * No comment provided
 *
 * Hash: 0x2CAFD5E9
 * @deprecated Use network.getWalkMode() instead
 */
export function getNetworkWalkMode(): boolean {
    return network.getWalkMode();
}

/**
 * No comment provided
 *
 * Hash: 0x55188D2D
 * @deprecated Use network.setWalkMode(enabled) instead
 */
export function setNetworkWalkMode(enabled: boolean): void {
    return network.setWalkMode(enabled);
}

/**
 * No comment provided
 *
 * Hash: 0x1E2E3177
 * @deprecated Use network.doesEntityExistWithNetworkId(netId) instead
 */
export function networkDoesEntityExistWithNetworkId(netId: number): boolean {
    return network.doesEntityExistWithNetworkId(netId);
}

/**
 * Returns the owner ID of the specified entity.
 *
 * Hash: 0x526FEE31
 * @deprecated Use network.getEntityOwner(entity) instead
 */
export function networkGetEntityOwner(entity: number | Entity): number {
    return network.getEntityOwner(entity);
}

/**
 * Returns the result of a shape test, also returning the material of any touched surface.
 *
 * When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.
 *
 * Unless the return value is 2, the other return values are undefined.
 *
 * Hash: 0x4301E10C
 * @deprecated Use shapetest.getResultIncludingMaterial(shapeTestHandle) instead
 */
export function getShapeTestResultIncludingMaterial(shapeTestHandle: number): [number, boolean, Vector3, Vector3, number, number] {
    return shapetest.getResultIncludingMaterial(shapeTestHandle);
}

/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 *
 * Hash: 0x8F57A89D
 * @deprecated Use camera.getCamMatrix(camera1, rightVector, forwardVector, upVector, position) instead
 */
export function getCamMatrix(camera1: number | Camera, rightVector: Vector3, forwardVector: Vector3, upVector: Vector3, position: Vector3): void {
    return camera.getCamMatrix(camera1, rightVector, forwardVector, upVector, position);
}

/**
 * This native sets the app id for the discord rich presence implementation.
 *
 * Hash: 0x6A02254D
 * @deprecated Use discord.setAppId(appId) instead
 */
export function setDiscordAppId(appId: string): void {
    return discord.setAppId(appId);
}

/**
 * Sets a clickable button to be displayed in a player's Discord rich presence.
 *
 * Hash: 0xCBBC3FAC
 * @deprecated Use discord.setRichPresenceAction(index, label, url) instead
 */
export function setDiscordRichPresenceAction(index: number, label: string, url: string): void {
    return discord.setRichPresenceAction(index, label, url);
}

/**
 * This native sets the image asset for the discord rich presence implementation.
 *
 * Hash: 0x53DFD530
 * @deprecated Use discord.setRichPresenceAsset(assetName) instead
 */
export function setDiscordRichPresenceAsset(assetName: string): void {
    return discord.setRichPresenceAsset(assetName);
}

/**
 * This native sets the small image asset for the discord rich presence implementation.
 *
 * Hash: 0xF61D04C4
 * @deprecated Use discord.setRichPresenceAssetSmall(assetName) instead
 */
export function setDiscordRichPresenceAssetSmall(assetName: string): void {
    return discord.setRichPresenceAssetSmall(assetName);
}

/**
 * This native sets the hover text of the small image asset for the discord rich presence implementation.
 *
 * Hash: 0x35E62B6A
 * @deprecated Use discord.setRichPresenceAssetSmallText(text) instead
 */
export function setDiscordRichPresenceAssetSmallText(text: string): void {
    return discord.setRichPresenceAssetSmallText(text);
}

/**
 * This native sets the hover text of the image asset for the discord rich presence implementation.
 *
 * Hash: 0xB029D2FA
 * @deprecated Use discord.setRichPresenceAssetText(text) instead
 */
export function setDiscordRichPresenceAssetText(text: string): void {
    return discord.setRichPresenceAssetText(text);
}

/**
 * Creates a DUI browser. This can be used to draw on a runtime texture using CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
 *
 * Hash: 0x23EAF899
 * @deprecated Use dui.create(url, width, height) instead
 */
export function createDui(url: string, width: number, height: number): number {
    return dui.create(url, width, height);
}

/**
 * Destroys a DUI browser.
 *
 * Hash: 0xA085CB10
 * @deprecated Use dui.destroy(duiObject) instead
 */
export function destroyDui(duiObject: number): void {
    return dui.destroy(duiObject);
}

/**
 * Returns the NUI window handle for a specified DUI browser object.
 *
 * Hash: 0x1655D41D
 * @deprecated Use dui.getHandle(duiObject) instead
 */
export function getDuiHandle(duiObject: number): string {
    return dui.getHandle(duiObject);
}

/**
 * Returns whether or not a browser is created for a specified DUI browser object.
 *
 * Hash: 0x7AAC3B4C
 * @deprecated Use dui.isAvailable(duiObject) instead
 */
export function isDuiAvailable(duiObject: number): boolean {
    return dui.isAvailable(duiObject);
}

/**
 * Sends a message to the specific DUI root page. This is similar to SEND_NUI_MESSAGE.
 *
 * Hash: 0xCD380DA9
 * @deprecated Use dui.sendMessage(duiObject, jsonString) instead
 */
export function sendDuiMessage(duiObject: number, jsonString: string): void {
    return dui.sendMessage(duiObject, jsonString);
}

/**
 * Injects a 'mouse down' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 *
 * Hash: 0x5D01F191
 * @deprecated Use dui.sendMouseDown(duiObject, button) instead
 */
export function sendDuiMouseDown(duiObject: number, button: string): void {
    return dui.sendMouseDown(duiObject, button);
}

/**
 * Injects a 'mouse move' event for a DUI object. Coordinates are in browser space.
 *
 * Hash: 0xD9D7A0AA
 * @deprecated Use dui.sendMouseMove(duiObject, x, y) instead
 */
export function sendDuiMouseMove(duiObject: number, x: number, y: number): void {
    return dui.sendMouseMove(duiObject, x, y);
}

/**
 * Injects a 'mouse up' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 *
 * Hash: 0x1D735B93
 * @deprecated Use dui.sendMouseUp(duiObject, button) instead
 */
export function sendDuiMouseUp(duiObject: number, button: string): void {
    return dui.sendMouseUp(duiObject, button);
}

/**
 * Injects a 'mouse wheel' event for a DUI object.
 *
 * Hash: 0x2D62133A
 * @deprecated Use dui.sendMouseWheel(duiObject, deltaY, deltaX) instead
 */
export function sendDuiMouseWheel(duiObject: number, deltaY: number, deltaX: number): void {
    return dui.sendMouseWheel(duiObject, deltaY, deltaX);
}

/**
 * Navigates the specified DUI browser to a different URL.
 *
 * Hash: 0xF761D9F3
 * @deprecated Use dui.setUrl(duiObject, url) instead
 */
export function setDuiUrl(duiObject: number, url: string): void {
    return dui.setUrl(duiObject, url);
}

/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938), but for a specified resource.
 *
 * Hash: 0x3CC98B25
 * @deprecated Use kvp.getExternalFloat(resource, key) instead
 */
export function getExternalKvpFloat(resource: string, key: string): number {
    return kvp.getExternalFloat(resource, key);
}

/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8), but for a specified resource.
 *
 * Hash: 0x12B8D689
 * @deprecated Use kvp.getExternalInt(resource, key) instead
 */
export function getExternalKvpInt(resource: string, key: string): number {
    return kvp.getExternalInt(resource, key);
}

/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B), but for a specified resource.
 *
 * Hash: 0x9080363A
 * @deprecated Use kvp.getExternalString(resource, key) instead
 */
export function getExternalKvpString(resource: string, key: string): string {
    return kvp.getExternalString(resource, key);
}

/**
 * Equivalent of [START_FIND_KVP](#\_0xDD379006), but for another resource than the current one.
 *
 * Hash: 0x8F2EECC3
 * @deprecated Use kvp.startFindExternal(resourceName, prefix) instead
 */
export function startFindExternalKvp(resourceName: string, prefix: string): number {
    return kvp.startFindExternal(resourceName, prefix);
}

/**
 * No comment provided
 *
 * Hash: 0xB3210203
 * @deprecated Use kvp.endFind(handle) instead
 */
export function endFindKvp(handle: number): void {
    return kvp.endFind(handle);
}

/**
 * No comment provided
 *
 * Hash: 0xBD7BEBC5
 * @deprecated Use kvp.find(handle) instead
 */
export function findKvp(handle: number): string {
    return kvp.find(handle);
}

/**
 * No comment provided
 *
 * Hash: 0xDD379006
 * @deprecated Use kvp.startFind(prefix) instead
 */
export function startFindKvp(prefix: string): number {
    return kvp.startFind(prefix);
}

/**
 * Starts listening to the specified channel, when available.
 *
 * Hash: 0xC79F44BF
 * @deprecated Use mumble.addVoiceChannelListen(channel) instead
 */
export function mumbleAddVoiceChannelListen(channel: number): void {
    return mumble.addVoiceChannelListen(channel);
}

/**
 * Adds the specified channel to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x4D386C9E
 * @deprecated Use mumble.addVoiceTargetChannel(targetId, channel) instead
 */
export function mumbleAddVoiceTargetChannel(targetId: number, channel: number): void {
    return mumble.addVoiceTargetChannel(targetId, channel);
}

/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x32C5355A
 * @deprecated Use mumble.addVoiceTargetPlayer(targetId, player) instead
 */
export function mumbleAddVoiceTargetPlayer(targetId: number, player: number | string | Player): void {
    return mumble.addVoiceTargetPlayer(targetId, player);
}

/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x25F2B65F
 * @deprecated Use mumble.addVoiceTargetPlayerByServerId(targetId, serverId) instead
 */
export function mumbleAddVoiceTargetPlayerByServerId(targetId: number, serverId: number): void {
    return mumble.addVoiceTargetPlayerByServerId(targetId, serverId);
}

/**
 * No comment provided
 *
 * Hash: 0xBF847807
 * @deprecated Use mumble.clearVoiceChannel() instead
 */
export function mumbleClearVoiceChannel(): void {
    return mumble.clearVoiceChannel();
}

/**
 * Clears the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x8555DCBA
 * @deprecated Use mumble.clearVoiceTarget(targetId) instead
 */
export function mumbleClearVoiceTarget(targetId: number): void {
    return mumble.clearVoiceTarget(targetId);
}

/**
 * Clears channels from the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x5EA72E76
 * @deprecated Use mumble.clearVoiceTargetChannels(targetId) instead
 */
export function mumbleClearVoiceTargetChannels(targetId: number): void {
    return mumble.clearVoiceTargetChannels(targetId);
}

/**
 * Clears players from the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x912E21DA
 * @deprecated Use mumble.clearVoiceTargetPlayers(targetId) instead
 */
export function mumbleClearVoiceTargetPlayers(targetId: number): void {
    return mumble.clearVoiceTargetPlayers(targetId);
}

/**
 * Check whether specified channel exists on the Mumble server.
 *
 * Hash: 0xCC8CA25
 * @deprecated Use mumble.doesChannelExist(channel) instead
 */
export function mumbleDoesChannelExist(channel: number): boolean {
    return mumble.doesChannelExist(channel);
}

/**
 * No comment provided
 *
 * Hash: 0x84E02A32
 * @deprecated Use mumble.getTalkerProximity() instead
 */
export function mumbleGetTalkerProximity(): number {
    return mumble.getTalkerProximity();
}

/**
 * Returns the mumble voice channel from a player's server id.
 *
 * Hash: 0x221C09F1
 * @deprecated Use mumble.getVoiceChannelFromServerId(serverId) instead
 */
export function mumbleGetVoiceChannelFromServerId(serverId: number): number {
    return mumble.getVoiceChannelFromServerId(serverId);
}

/**
 * No comment provided
 *
 * Hash: 0xE820BC10
 * @deprecated Use mumble.isActive() instead
 */
export function mumbleIsActive(): boolean {
    return mumble.isActive();
}

/**
 * This native will return true if the user succesfully connected to the voice server.
 * If the user disabled the voice-chat setting it will return false.
 *
 * Hash: 0xB816370A
 * @deprecated Use mumble.isConnected() instead
 */
export function mumbleIsConnected(): boolean {
    return mumble.isConnected();
}

/**
 * No comment provided
 *
 * Hash: 0x33EEF97F
 * @deprecated Use mumble.isPlayerTalking(player) instead
 */
export function mumbleIsPlayerTalking(player: number | string | Player): boolean {
    return mumble.isPlayerTalking(player);
}

/**
 * Stops listening to the specified channel.
 *
 * Hash: 0x231523B7
 * @deprecated Use mumble.removeVoiceChannelListen(channel) instead
 */
export function mumbleRemoveVoiceChannelListen(channel: number): void {
    return mumble.removeVoiceChannelListen(channel);
}

/**
 * Removes the specified voice channel from the user's voice targets.
 *
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_CHANNEL](#\_0x4D386C9E)
 *
 * Hash: 0x268DB867
 * @deprecated Use mumble.removeVoiceTargetChannel(targetId, channel) instead
 */
export function mumbleRemoveVoiceTargetChannel(targetId: number, channel: number): void {
    return mumble.removeVoiceTargetChannel(targetId, channel);
}

/**
 * Removes the specified player from the user's voice targets.
 *
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER](#\_0x32C5355A)
 *
 * Hash: 0x88CD646F
 * @deprecated Use mumble.removeVoiceTargetPlayer(targetId, player) instead
 */
export function mumbleRemoveVoiceTargetPlayer(targetId: number, player: number | string | Player): void {
    return mumble.removeVoiceTargetPlayer(targetId, player);
}

/**
 * Removes the specified player from the user's voice targets.
 *
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID](#\_0x25F2B65F)
 *
 * Hash: 0x930BD34B
 * @deprecated Use mumble.removeVoiceTargetPlayerByServerId(targetId, serverId) instead
 */
export function mumbleRemoveVoiceTargetPlayerByServerId(targetId: number, serverId: number): void {
    return mumble.removeVoiceTargetPlayerByServerId(targetId, serverId);
}

/**
 * No comment provided
 *
 * Hash: 0xD932A3F3
 * @deprecated Use mumble.setActive(state) instead
 */
export function mumbleSetActive(state: boolean): void {
    return mumble.setActive(state);
}

/**
 * Sets the current input distance. The player will be able to talk to other players within this distance.
 *
 * Hash: 0x1B1052E2
 * @deprecated Use mumble.setAudioInputDistance(distance) instead
 */
export function mumbleSetAudioInputDistance(distance: number): void {
    return mumble.setAudioInputDistance(distance);
}

/**
 * Use this native to disable noise suppression and high pass filters.
 *
 * The possible intents for this are as follows (backticks are used to represent hashes):
 *
 * | Index | Description |
 * |-|-|
 * | \`speech\` | Default intent |
 * | \`music\` | Disable noise suppression and high pass filter |
 *
 * Hash: 0x6383526B
 * @deprecated Use mumble.setAudioInputIntent(intentHash) instead
 */
export function mumbleSetAudioInputIntent(intentHash: number | string): void {
    return mumble.setAudioInputIntent(intentHash);
}

/**
 * Sets the current output distance. The player will be able to hear other players talking within this distance.
 *
 * Hash: 0x74C597D9
 * @deprecated Use mumble.setAudioOutputDistance(distance) instead
 */
export function mumbleSetAudioOutputDistance(distance: number): void {
    return mumble.setAudioOutputDistance(distance);
}

/**
 * Changes the Mumble server address to connect to, and reconnects to the new address.
 *
 * Setting the address to an empty string and the port to -1 will reset to the built in FXServer Mumble Implementation.
 *
 * Hash: 0xE6EB2CD8
 * @deprecated Use mumble.setServerAddress(address, port) instead
 */
export function mumbleSetServerAddress(address: string, port: number): void {
    return mumble.setServerAddress(address, port);
}

/**
 * Sets the audio submix ID for a specified player using Mumble 'Native Audio' functionality.
 *
 * Hash: 0xFE3A3054
 * @deprecated Use mumble.setSubmixForServerId(serverId, submixId) instead
 */
export function mumbleSetSubmixForServerId(serverId: number, submixId: number): void {
    return mumble.setSubmixForServerId(serverId, submixId);
}

/**
 * No comment provided
 *
 * Hash: 0x74E927B0
 * @deprecated Use mumble.setTalkerProximity(value) instead
 */
export function mumbleSetTalkerProximity(value: number): void {
    return mumble.setTalkerProximity(value);
}

/**
 * No comment provided
 *
 * Hash: 0x8737EEE8
 * @deprecated Use mumble.setVoiceChannel(channel) instead
 */
export function mumbleSetVoiceChannel(channel: number): void {
    return mumble.setVoiceChannel(channel);
}

/**
 * Sets the current Mumble voice target ID to broadcast voice to.
 *
 * Hash: 0x960A4A95
 * @deprecated Use mumble.setVoiceTarget(targetId) instead
 */
export function mumbleSetVoiceTarget(targetId: number): void {
    return mumble.setVoiceTarget(targetId);
}

/**
 * Overrides the output volume for a particular player on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 *
 * Set to -1.0 to reset the Volume override.
 *
 * Hash: 0x61C309E3
 * @deprecated Use mumble.setVolumeOverride(player, volume) instead
 */
export function mumbleSetVolumeOverride(player: number | string | Player, volume: number): void {
    return mumble.setVolumeOverride(player, volume);
}

/**
 * Overrides the output volume for a particular player with the specified server id and player name on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 *
 * Hash: 0xCE8E25B4
 * @deprecated Use mumble.setVolumeOverrideByServerId(serverId, volume) instead
 */
export function mumbleSetVolumeOverrideByServerId(serverId: number, volume: number): void {
    return mumble.setVolumeOverrideByServerId(serverId, volume);
}

/**
 * No comment provided
 *
 * Hash: 0xBDBA226F
 * @deprecated Use nui.getCursorPosition() instead
 */
export function getNuiCursorPosition(): [number, number] {
    return nui.getCursorPosition();
}

/**
 * Returns the current NUI focus state previously set with `SET_NUI_FOCUS`.
 *
 * Hash: 0x98545E6D
 * @deprecated Use nui.isFocused() instead
 */
export function isNuiFocused(): boolean {
    return nui.isFocused();
}

/**
 * Checks if keyboard input is enabled during NUI focus using `SET_NUI_FOCUS_KEEP_INPUT`.
 *
 * Hash: 0x39C9DC92
 * @deprecated Use nui.isFocusKeepingInput() instead
 */
export function isNuiFocusKeepingInput(): boolean {
    return nui.isFocusKeepingInput();
}

/**
 * No comment provided
 *
 * Hash: 0xC59B980C
 * @deprecated Use nui.registerCallback(callbackType, callback) instead
 */
export function registerNuiCallback(callbackType: string, callback: Function): void {
    return nui.registerCallback(callbackType, callback);
}

/**
 * No comment provided
 *
 * Hash: 0xCD03CDA9
 * @deprecated Use nui.registerCallbackType(callbackType) instead
 */
export function registerNuiCallbackType(callbackType: string): void {
    return nui.registerCallbackType(callbackType);
}

/**
 * No comment provided
 *
 * Hash: 0xA8AE9C2F
 * @deprecated Use nui.registerRawCallback(callbackType, callback) instead
 */
export function registerRawNuiCallback(callbackType: string, callback: Function): void {
    return nui.registerRawCallback(callbackType, callback);
}

/**
 * No comment provided
 *
 * Hash: 0x78608ACB
 * @deprecated Use nui.sendMessage(jsonString) instead
 */
export function sendNuiMessage(jsonString: string): boolean {
    return nui.sendMessage(jsonString);
}

/**
 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
 * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 *
 * Hash: 0x1722C938
 * @deprecated Use nui.setManualShutdownLoadingScreen(manualShutdown) instead
 */
export function setManualShutdownLoadingScreenNui(manualShutdown: boolean): void {
    return nui.setManualShutdownLoadingScreen(manualShutdown);
}

/**
 * No comment provided
 *
 * Hash: 0x5B98AE30
 * @deprecated Use nui.setFocus(hasFocus, hasCursor) instead
 */
export function setNuiFocus(hasFocus: boolean, hasCursor: boolean): void {
    return nui.setFocus(hasFocus, hasCursor);
}

/**
 * No comment provided
 *
 * Hash: 0x3FF5E5F8
 * @deprecated Use nui.setFocusKeepInput(keepInput) instead
 */
export function setNuiFocusKeepInput(keepInput: boolean): void {
    return nui.setFocusKeepInput(keepInput);
}

/**
 * Set the z-index of the NUI resource.
 *
 * Hash: 0x3734AAFF
 * @deprecated Use nui.setZindex(zIndex) instead
 */
export function setNuiZindex(zIndex: number): void {
    return nui.setZindex(zIndex);
}

/**
 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 *
 * Hash: 0xB9234AFB
 * @deprecated Use nui.shutdownLoadingScreen() instead
 */
export function shutdownLoadingScreenNui(): void {
    return nui.shutdownLoadingScreen();
}

/**
 * Will unregister and cleanup a registered NUI callback handler.
 *
 * Use along side the REGISTER_RAW_NUI_CALLBACK native.
 *
 * Hash: 0x7FB46432
 * @deprecated Use nui.unregisterRawCallback(callbackType) instead
 */
export function unregisterRawNuiCallback(callbackType: string): void {
    return nui.unregisterRawCallback(callbackType);
}

/**
 * Returns a list of door system entries: a door system hash (see [ADD_DOOR_TO_SYSTEM](#\_0x6F8838D03D1DC226)) and its object handle.
 *
 * The data returned adheres to the following layout:
 *
 * ```
 * [{doorHash1, doorHandle1}, ..., {doorHashN, doorHandleN}]
 * ```
 *
 * Hash: 0xF65BBA4B
 * @deprecated Use object.doorSystemGetActive() instead
 */
export function doorSystemGetActive(): number {
    return object.doorSystemGetActive();
}

/**
 * No comment provided
 *
 * Hash: 0x237613B3
 * @deprecated Use object.doorSystemGetSize() instead
 */
export function doorSystemGetSize(): number {
    return object.doorSystemGetSize();
}

/**
 * Disables the specified `rawKeyIndex`, making it not trigger the regular `IS_RAW_KEY_*` natives.
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x8BCF0014
 * @deprecated Use pad.disableRawKeyThisFrame(rawKeyIndex) instead
 */
export function disableRawKeyThisFrame(rawKeyIndex: number): boolean {
    return pad.disableRawKeyThisFrame(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is pressed down, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x36366EC3
 * @deprecated Use pad.isDisabledRawKeyDown(rawKeyIndex) instead
 */
export function isDisabledRawKeyDown(rawKeyIndex: number): boolean {
    return pad.isDisabledRawKeyDown(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is pressed, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x1F7CBBAA
 * @deprecated Use pad.isDisabledRawKeyPressed(rawKeyIndex) instead
 */
export function isDisabledRawKeyPressed(rawKeyIndex: number): boolean {
    return pad.isDisabledRawKeyPressed(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` was released, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x72B66C09
 * @deprecated Use pad.isDisabledRawKeyReleased(rawKeyIndex) instead
 */
export function isDisabledRawKeyReleased(rawKeyIndex: number): boolean {
    return pad.isDisabledRawKeyReleased(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is up, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x2C033875
 * @deprecated Use pad.isDisabledRawKeyUp(rawKeyIndex) instead
 */
export function isDisabledRawKeyUp(rawKeyIndex: number): boolean {
    return pad.isDisabledRawKeyUp(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is pressed down on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0xD95A7387
 * @deprecated Use pad.isRawKeyDown(rawKeyIndex) instead
 */
export function isRawKeyDown(rawKeyIndex: number): boolean {
    return pad.isRawKeyDown(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is pressed on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x69F7C29E
 * @deprecated Use pad.isRawKeyPressed(rawKeyIndex) instead
 */
export function isRawKeyPressed(rawKeyIndex: number): boolean {
    return pad.isRawKeyPressed(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` was just released on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0xEAA50861
 * @deprecated Use pad.isRawKeyReleased(rawKeyIndex) instead
 */
export function isRawKeyReleased(rawKeyIndex: number): boolean {
    return pad.isRawKeyReleased(rawKeyIndex);
}

/**
 * Gets if the specified `rawKeyIndex` is up  on the keyboard.
 *
 * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
 *
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 *
 * Hash: 0x36F4E505
 * @deprecated Use pad.isRawKeyUp(rawKeyIndex) instead
 */
export function isRawKeyUp(rawKeyIndex: number): boolean {
    return pad.isRawKeyUp(rawKeyIndex);
}

/**
 * Sets the player's rich presence detail state for social platform providers to a specified string.
 *
 * Hash: 0x7BDCBD45
 * @deprecated Use social.setRichPresence(presenceState) instead
 */
export function setRichPresence(presenceState: string): void {
    return social.setRichPresence(presenceState);
}

/**
 * No comment provided
 *
 * Hash: 0x7389B5DF
 * @deprecated Use resource.deleteKvp(key) instead
 */
export function deleteResourceKvp(key: string): void {
    return resource.deleteKvp(key);
}

/**
 * Nonsynchronous [DELETE_RESOURCE_KVP](#\_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x4152C90
 * @deprecated Use resource.deleteKvpNoSync(key) instead
 */
export function deleteResourceKvpNoSync(key: string): void {
    return resource.deleteKvpNoSync(key);
}

/**
 * Returns the name of the currently executing resource.
 *
 * Hash: 0xE5E9EBBB
 * @deprecated Use resource.getCurrentName() instead
 */
export function getCurrentResourceName(): string {
    return resource.getCurrentName();
}

/**
 * No comment provided
 *
 * Hash: 0x4D52FE5B
 * @deprecated Use resource.getInvoking() instead
 */
export function getInvokingResource(): string {
    return resource.getInvoking();
}

/**
 * No comment provided
 *
 * Hash: 0x863F27B
 * @deprecated Use resource.getNums() instead
 */
export function getNumResources(): number {
    return resource.getNums();
}

/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 *
 * Hash: 0x776E864
 * @deprecated Use resource.getNumMetadata(resourceName, metadataKey) instead
 */
export function getNumResourceMetadata(resourceName: string, metadataKey: string): number {
    return resource.getNumMetadata(resourceName, metadataKey);
}

/**
 * No comment provided
 *
 * Hash: 0x387246B7
 * @deprecated Use resource.getByFindIndex(findIndex) instead
 */
export function getResourceByFindIndex(findIndex: number): string {
    return resource.getByFindIndex(findIndex);
}

/**
 * Returns all commands registered by the specified resource.
 * The data returned adheres to the following layout:
 *
 * ```
 * [
 * {
 * "name": "cmdlist",
 * "resource": "example_resource",
 * "arity" = -1,
 * },
 * {
 * "name": "command1"
 * "resource": "example_resource2",
 * "arity" = -1,
 * }
 * ]
 * ```
 *
 * Hash: 0x97628584
 * @deprecated Use resource.getCommands(resource1) instead
 */
export function getResourceCommands(resource1: string): number {
    return resource.getCommands(resource1);
}

/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
 *
 * Hash: 0x35BDCEEA
 * @deprecated Use resource.getKvpFloat(key) instead
 */
export function getResourceKvpFloat(key: string): number {
    return resource.getKvpFloat(key);
}

/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
 *
 * Hash: 0x557B586A
 * @deprecated Use resource.getKvpInt(key) instead
 */
export function getResourceKvpInt(key: string): number {
    return resource.getKvpInt(key);
}

/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
 *
 * Hash: 0x5240DA5A
 * @deprecated Use resource.getKvpString(key) instead
 */
export function getResourceKvpString(key: string): string {
    return resource.getKvpString(key);
}

/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 *
 * Hash: 0x964BAB1D
 * @deprecated Use resource.getMetadata(resourceName, metadataKey, index) instead
 */
export function getResourceMetadata(resourceName: string, metadataKey: string, index: number): string {
    return resource.getMetadata(resourceName, metadataKey, index);
}

/**
 * Returns the current state of the specified resource.
 *
 * Hash: 0x4039B485
 * @deprecated Use resource.getState(resourceName) instead
 */
export function getResourceState(resourceName: string): string {
    return resource.getState(resourceName);
}

/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 *
 * Hash: 0x76A9EE1F
 * @deprecated Use resource.loadFile(resourceName, fileName) instead
 */
export function loadResourceFile(resourceName: string, fileName: string): string {
    return resource.loadFile(resourceName, fileName);
}

/**
 * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
 *
 * Hash: 0xD233A168
 * @deprecated Use resource.registerAsEventHandler(eventName) instead
 */
export function registerResourceAsEventHandler(eventName: string): void {
    return resource.registerAsEventHandler(eventName);
}

/**
 * A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).
 *
 * Hash: 0x21C7A35B
 * @deprecated Use resource.setKvp(key, value) instead
 */
export function setResourceKvp(key: string, value: string): void {
    return resource.setKvp(key, value);
}

/**
 * A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).
 *
 * Hash: 0x9ADD2938
 * @deprecated Use resource.setKvpFloat(key, value) instead
 */
export function setResourceKvpFloat(key: string, value: number): void {
    return resource.setKvpFloat(key, value);
}

/**
 * Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x3517BFBE
 * @deprecated Use resource.setKvpFloatNoSync(key, value) instead
 */
export function setResourceKvpFloatNoSync(key: string, value: number): void {
    return resource.setKvpFloatNoSync(key, value);
}

/**
 * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
 *
 * Hash: 0x6A2B1E8
 * @deprecated Use resource.setKvpInt(key, value) instead
 */
export function setResourceKvpInt(key: string, value: number): void {
    return resource.setKvpInt(key, value);
}

/**
 * Nonsynchronous [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x26AEB707
 * @deprecated Use resource.setKvpIntNoSync(key, value) instead
 */
export function setResourceKvpIntNoSync(key: string, value: number): void {
    return resource.setKvpIntNoSync(key, value);
}

/**
 * Nonsynchronous [SET_RESOURCE_KVP](#\_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0xCF9A2FF
 * @deprecated Use resource.setKvpNoSync(key, value) instead
 */
export function setResourceKvpNoSync(key: string, value: string): void {
    return resource.setKvpNoSync(key, value);
}

/**
 * Scope entry for profiler.
 *
 * Hash: 0xC795A4A9
 * @deprecated Use profiler.enterScope(scopeName) instead
 */
export function profilerEnterScope(scopeName: string): void {
    return profiler.enterScope(scopeName);
}

/**
 * Scope exit for profiler.
 *
 * Hash: 0xB39CA35C
 * @deprecated Use profiler.exitScope() instead
 */
export function profilerExitScope(): void {
    return profiler.exitScope();
}

/**
 * Returns true if the profiler is active.
 *
 * Hash: 0xF8B7D7BB
 * @deprecated Use profiler.isRecording() instead
 */
export function profilerIsRecording(): boolean {
    return profiler.isRecording();
}


export * from "@risinglife/redm-shared";