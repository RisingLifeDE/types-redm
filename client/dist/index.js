import { Vector3, IEntity, IPed, IPlayer, IVehicle, IObject, ICamera } from '@risinglife/redm-shared';
export var events;
(function (events_1) {
    class EventEmitter {
        listeners = new Map();
        on(eventName, callback) {
            if (!this.listeners.has(eventName)) {
                this.listeners.set(eventName, []);
            }
            this.listeners.get(eventName).push(callback);
        }
        once(eventName, callback) {
            const onceWrapper = (...args) => {
                this.off(eventName, onceWrapper);
                callback(...args);
            };
            this.on(eventName, onceWrapper);
        }
        emit(eventName, ...args) {
            const callbacks = this.listeners.get(eventName);
            if (callbacks) {
                callbacks.forEach((callback) => {
                    try {
                        callback(...args);
                    }
                    catch (error) {
                        EventLogger.logError(eventName, error);
                    }
                });
            }
        }
        off(eventName, callback) {
            const callbacks = this.listeners.get(eventName);
            if (callbacks) {
                const index = callbacks.indexOf(callback);
                if (index !== -1) {
                    callbacks.splice(index, 1);
                }
            }
        }
        removeAllListeners(eventName) {
            if (eventName) {
                this.listeners.delete(eventName);
            }
            else {
                this.listeners.clear();
            }
        }
    }
    class EventParsingUtils {
        static parseArgument(arg) {
            if (typeof arg === 'string') {
                try {
                    return JSON.parse(arg);
                }
                catch {
                    return arg;
                }
            }
            if (Array.isArray(arg)) {
                return arg.map((item) => this.parseArgument(item));
            }
            if (arg && typeof arg === 'object') {
                const result = {};
                for (const [key, value] of Object.entries(arg)) {
                    result[key] = this.parseArgument(value);
                }
                return result;
            }
            return arg;
        }
        static parseAllArguments(args) {
            return args.map((arg) => this.parseArgument(arg));
        }
        static assignFields(target, source) {
            if (typeof target === 'object' && target !== null && typeof source === 'object' && source !== null) {
                return Object.assign(target, source);
            }
            return source;
        }
    }
    class EventRegistry {
        static networkEvents = new Set();
        static localEvents = new Set();
        static networkEmitter = new EventEmitter();
        static localEmitter = new EventEmitter();
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
        static logErrors = true;
        static logEvents = false;
        static logEvent(type, eventName, ...args) {
            if (this.logEvents)
                console.log(`[${type}] ${eventName}`, ...args);
        }
        static logError(eventName, error) {
            if (this.logErrors)
                console.error(`Error in event handler for "${eventName}":`, error);
        }
    }
    class NetworkEventUtils {
        static api = {
            // @ts-ignore
            onNet: (eventName, handler) => onNet(eventName, handler),
            // @ts-ignore
            emitNet: (eventName, ...args) => emitNet(eventName, ...args),
            // @ts-ignore
            on: (eventName, handler) => addEventListener(eventName, handler),
            // @ts-ignore
            emit: (eventName, ...args) => TriggerEvent(eventName, ...args),
        };
        static getNetworkEventName(eventName) {
            return eventName.startsWith('net::') ? eventName : `net::${eventName}`;
        }
        static setupListener(eventName) {
            const { events, emitter } = EventRegistry.getNetworkRegistry();
            const networkEventName = this.getNetworkEventName(eventName);
            if (!events.has(eventName)) {
                events.add(eventName);
                const handler = (...args) => {
                    const parsedArgs = EventParsingUtils.parseAllArguments(args);
                    emitter.emit(eventName, ...parsedArgs);
                    EventLogger.logEvent('NETWORK', eventName, ...args);
                };
                this.api.onNet(networkEventName, handler);
            }
        }
        static registerEvent(eventName, callback) {
            this.setupListener(eventName);
            const { emitter } = EventRegistry.getNetworkRegistry();
            emitter.on(eventName, callback);
        }
        static registerEventOnce(eventName, callback) {
            this.setupListener(eventName);
            const { emitter } = EventRegistry.getNetworkRegistry();
            emitter.once(eventName, callback);
        }
        static removeListener(eventName, callback) {
            const { emitter } = EventRegistry.getNetworkRegistry();
            emitter.off(eventName, callback);
        }
        static removeAllListeners(eventName) {
            const { emitter } = EventRegistry.getNetworkRegistry();
            emitter.removeAllListeners(eventName);
        }
        static send(eventName, ...args) {
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
        static api = {
            // @ts-ignore
            onNet: (eventName, handler) => onNet(eventName, handler),
            // @ts-ignore
            emitNet: (eventName, ...args) => emitNet(eventName, ...args),
            // @ts-ignore
            on: (eventName, handler) => addEventListener(eventName, handler),
            // @ts-ignore
            emit: (eventName, ...args) => TriggerEvent(eventName, ...args),
        };
        static setupListener(eventName) {
            const { events, emitter } = EventRegistry.getLocalRegistry();
            if (!events.has(eventName)) {
                events.add(eventName);
                const handler = (...args) => {
                    const parsedArgs = EventParsingUtils.parseAllArguments(args);
                    emitter.emit(eventName, ...parsedArgs);
                    EventLogger.logEvent('LOCAL', eventName, ...args);
                };
                this.api.on(eventName, handler);
            }
        }
        static registerEvent(eventName, callback) {
            this.setupListener(eventName);
            const { emitter } = EventRegistry.getLocalRegistry();
            emitter.on(eventName, callback);
        }
        static registerEventOnce(eventName, callback) {
            this.setupListener(eventName);
            const { emitter } = EventRegistry.getLocalRegistry();
            emitter.once(eventName, callback);
        }
        static removeListener(eventName, callback) {
            const { emitter } = EventRegistry.getLocalRegistry();
            emitter.off(eventName, callback);
        }
        static removeAllListeners(eventName) {
            const { emitter } = EventRegistry.getLocalRegistry();
            emitter.removeAllListeners(eventName);
        }
        static send(eventName, ...args) {
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
    function removeAllListeners(key) {
        LocalEventUtils.removeAllListeners(key);
        NetworkEventUtils.removeAllListeners(key);
    }
    events_1.removeAllListeners = removeAllListeners;
    /**
     * Registers a listener for a local emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function on(key, callback) {
        LocalEventUtils.registerEvent(key, callback);
    }
    events_1.on = on;
    /**
     * Registers a onetime listener for a local emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function once(key, callback) {
        LocalEventUtils.registerEventOnce(key, callback);
    }
    events_1.once = once;
    /**
     * Removes a listener for a local emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    function off(key, callback) {
        LocalEventUtils.removeListener(key, callback);
    }
    events_1.off = off;
    /**
     * Registers a listener for the server emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function onServer(key, callback) {
        NetworkEventUtils.registerEvent(key, callback);
    }
    events_1.onServer = onServer;
    /**
     * Registers a onetime listener for the server emitted event
     * @param key The event key which should be listened on
     * @param callback The callback which should be executed
     */
    function onceServer(key, callback) {
        NetworkEventUtils.registerEventOnce(key, callback);
    }
    events_1.onceServer = onceServer;
    /**
     * Removes a listener for the server emitted event
     * @param key The event key which should be removed
     * @param callback Must be the callback
     */
    function offServer(key, callback) {
        NetworkEventUtils.removeListener(key, callback);
    }
    events_1.offServer = offServer;
    /**
     * Sends data local, which can be listened by any resource
     * @param key The event key
     * @param args All parameters
     */
    function emit(key, ...args) {
        LocalEventUtils.send(key, ...args);
    }
    events_1.emit = emit;
    /**
     * Sends data to the server, which can be listened by any resource
     * @param key The event key
     * @param args All parameters
     */
    function emitServer(key, ...args) {
        NetworkEventUtils.send(key, ...args);
    }
    events_1.emitServer = emitServer;
})(events || (events = {}));
// All below is auto-generated code
export var audio;
(function (audio) {
    /**
     * Allows StaticEmitter's without a linked entity to make use of environment features like occlusion and reverb even if they are located higher than 20.0 units above any static collision inside interiors.
     *
     * This native allows you to extend the probe range up to 150.0 units.
     *
     * Hash: 0x8AA1F3C2
     */
    function setEmitterProbeLength(probeLength) {
        SetEmitterProbeLength(probeLength);
    }
    audio.setEmitterProbeLength = setEmitterProbeLength;
    /**
     * Adds an output for the specified audio submix.
     *
     * Hash: 0xAC6E290D
     */
    function addSubmixOutput(submixId, outputSubmixId) {
        AddAudioSubmixOutput(submixId, outputSubmixId);
    }
    audio.addSubmixOutput = addSubmixOutput;
    /**
     * Creates an audio submix with the specified name, or gets the existing audio submix by that name.
     *
     * Hash: 0x658D2BC8
     */
    function createSubmix(name) {
        return CreateAudioSubmix(name);
    }
    audio.createSubmix = createSubmix;
    /**
     * Sets a floating-point parameter for a submix effect.
     *
     * Hash: 0x9A209B3C
     */
    function setSubmixEffectParamFloat(submixId, effectSlot, paramIndex, paramValue) {
        SetAudioSubmixEffectParamFloat(submixId, effectSlot, paramIndex, paramValue);
    }
    audio.setSubmixEffectParamFloat = setSubmixEffectParamFloat;
    /**
     * Sets an integer parameter for a submix effect.
     *
     * Hash: 0x77FAE2B8
     */
    function setSubmixEffectParamInt(submixId, effectSlot, paramIndex, paramValue) {
        SetAudioSubmixEffectParamInt(submixId, effectSlot, paramIndex, paramValue);
    }
    audio.setSubmixEffectParamInt = setSubmixEffectParamInt;
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
    function setSubmixEffectRadioFx(submixId, effectSlot) {
        SetAudioSubmixEffectRadioFx(submixId, effectSlot);
    }
    audio.setSubmixEffectRadioFx = setSubmixEffectRadioFx;
    /**
     * Sets the volumes for the sound channels in a submix effect.
     * Values can be between 0.0 and 1.0.
     * Channel 5 and channel 6 are not used in voice chat but are believed to be center and LFE channels.
     * Output slot starts at 0 for the first ADD_AUDIO_SUBMIX_OUTPUT call then incremented by 1 on each subsequent call.
     *
     * Hash: 0x825DC0D1
     */
    function setSubmixOutputVolumes(submixId, outputSlot, frontLeftVolume, frontRightVolume, rearLeftVolume, rearRightVolume, channel5Volume, channel6Volume) {
        SetAudioSubmixOutputVolumes(submixId, outputSlot, frontLeftVolume, frontRightVolume, rearLeftVolume, rearRightVolume, channel5Volume, channel6Volume);
    }
    audio.setSubmixOutputVolumes = setSubmixOutputVolumes;
})(audio || (audio = {}));
export var entity;
(function (entity_1) {
    /**
     * Returns entity's archetype name, if available.
     *
     * Hash: 0x47B870F5
     */
    function getArchetypeName(entity) {
        const _entity = entity instanceof IEntity ? entity.handle() : entity;
        return GetEntityArchetypeName(_entity);
    }
    entity_1.getArchetypeName = getArchetypeName;
    /**
     * Returns the transient entity index for a specified mapdata/entity pair.
     * This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0xEE43540D
     */
    function getIndexFromMapdata(mapdata, entity) {
        return GetEntityIndexFromMapdata(mapdata, entity);
    }
    entity_1.getIndexFromMapdata = getIndexFromMapdata;
    /**
     * Retrieves the map data and entity handles from a specific entity.
     * This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0xF6B815C5
     */
    function getMapdataOwner(entity) {
        const _entity = entity instanceof IEntity ? entity.handle() : entity;
        return GetEntityMapdataOwner(_entity);
    }
    entity_1.getMapdataOwner = getMapdataOwner;
    /**
     * Resets mapdata entity transform matrix to its original state.
     * This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0x8143FA4F
     */
    function resetMapdataMatrix(mapDataHash, entityInternalIdx) {
        return ResetMapdataEntityMatrix(mapDataHash, entityInternalIdx);
    }
    entity_1.resetMapdataMatrix = resetMapdataMatrix;
    /**
     * Gets the selected entity at the current mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0x3DD8130F
     */
    function selectAtCursor(hitFlags, precise) {
        return SelectEntityAtCursor(hitFlags, precise);
    }
    entity_1.selectAtCursor = selectAtCursor;
    /**
     * Gets the selected entity at the specified mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0xAFE8D405
     */
    function selectAtPos(fracX, fracY, hitFlags, precise) {
        return SelectEntityAtPos(fracX, fracY, hitFlags, precise);
    }
    entity_1.selectAtPos = selectAtPos;
    /**
     * Sets an entity's matrix. Arguments are in the same order as with GET_ENTITY_MATRIX.
     *
     * Hash: 0xFB0639B
     */
    function setMatrix(entity, forwardX, forwardY, forwardZ, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ) {
        const _entity = entity instanceof IEntity ? entity.handle() : entity;
        SetEntityMatrix(_entity, forwardX, forwardY, forwardZ, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ);
    }
    entity_1.setMatrix = setMatrix;
    /**
     * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
     *
     * Hash: 0xEDBE6ADD
     */
    function isPositionFrozen(entity) {
        const _entity = entity instanceof IEntity ? entity.handle() : entity;
        return IsEntityPositionFrozen(_entity);
    }
    entity_1.isPositionFrozen = isPositionFrozen;
    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Returns the memory address of an entity.
     *
     * This native is intended for singleplayer debugging, and may not be available during multiplayer.
     *
     * Hash: 0x9A3144BC
     */
    function getAddress(entity) {
        const _entity = entity instanceof IEntity ? entity.handle() : entity;
        return GetEntityAddress(_entity);
    }
    entity_1.getAddress = getAddress;
    /**
     * Internal function for ensuring an entity has a state bag.
     *
     * Hash: 0x3BB78F05
     */
    function ensureStateBag(entity) {
        const _entity = entity instanceof IEntity ? entity.handle() : entity;
        EnsureEntityStateBag(_entity);
    }
    entity_1.ensureStateBag = ensureStateBag;
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
    function getEntitiesInRadius(pos, radius, entityType, sortByDistance, models) {
        const _models = models instanceof IObject ? models.handle() : models;
        return GetEntitiesInRadius(pos.x, pos.y, pos.z, radius, entityType, sortByDistance, _models);
    }
    entity_1.getEntitiesInRadius = getEntitiesInRadius;
    /**
     * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](#\_0x5BA35AAF).
     *
     * Hash: 0x4BDF1867
     */
    function getFromStateBagName(bagName) {
        return GetEntityFromStateBagName(bagName);
    }
    entity_1.getFromStateBagName = getFromStateBagName;
})(entity || (entity = {}));
export var graphics;
(function (graphics) {
    /**
     * Loads a minimap overlay from a GFx file in the current resource.
     *
     * If you need to control the depth of overlay use [`ADD_MINIMAP_OVERLAY_WITH_DEPTH`](#\_0xED0935B5).
     *
     * Hash: 0x4AFD2499
     */
    function addMinimapOverlay(name) {
        return AddMinimapOverlay(name);
    }
    graphics.addMinimapOverlay = addMinimapOverlay;
    /**
     * Loads a minimap overlay from a GFx file in the current resource.
     *
     * Hash: 0xED0935B5
     */
    function addMinimapOverlayWithDepth(name, depth) {
        return AddMinimapOverlayWithDepth(name, depth);
    }
    graphics.addMinimapOverlayWithDepth = addMinimapOverlayWithDepth;
    /**
     * Experimental natives, please do not use in a live environment.
     *
     * Hash: 0xA66F8F75
     */
    function addReplaceTexture(origTxd, origTxn, newTxd, newTxn) {
        AddReplaceTexture(origTxd, origTxn, newTxd, newTxn);
    }
    graphics.addReplaceTexture = addReplaceTexture;
    /**
     * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
     *
     * Hash: 0x4C89C0ED
     */
    function callMinimapScaleformFunction(miniMap, fnName) {
        return CallMinimapScaleformFunction(miniMap, fnName);
    }
    graphics.callMinimapScaleformFunction = callMinimapScaleformFunction;
    /**
     * Commits the backing pixels to the specified runtime texture.
     *
     * Hash: 0x19D81F4E
     */
    function commitRuntimeTexture(tex) {
        CommitRuntimeTexture(tex);
    }
    graphics.commitRuntimeTexture = commitRuntimeTexture;
    /**
     * Creates a blank runtime texture.
     *
     * Hash: 0xFEC3766D
     */
    function createRuntimeTexture(txd, txn, width, height) {
        return CreateRuntimeTexture(txd, txn, width, height);
    }
    graphics.createRuntimeTexture = createRuntimeTexture;
    /**
     * Creates a runtime texture from a DUI handle.
     *
     * Hash: 0xB135472B
     */
    function createRuntimeTextureFromDuiHandle(txd, txn, duiHandle) {
        return CreateRuntimeTextureFromDuiHandle(txd, txn, duiHandle);
    }
    graphics.createRuntimeTextureFromDuiHandle = createRuntimeTextureFromDuiHandle;
    /**
     * Creates a runtime texture from the specified file in the current resource or a base64 data URL.
     *
     * Hash: 0x786D8BC3
     */
    function createRuntimeTextureFromImage(txd, txn, fileName) {
        return CreateRuntimeTextureFromImage(txd, txn, fileName);
    }
    graphics.createRuntimeTextureFromImage = createRuntimeTextureFromImage;
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
    function createRuntimeTxd(name) {
        return CreateRuntimeTxd(name);
    }
    graphics.createRuntimeTxd = createRuntimeTxd;
    /**
     * Allows drawing advanced light effects, known as coronas, which support flares, volumetric lighting, and customizable glow properties.
     *
     * Hash: 0xFF44780E
     */
    function drawCorona(pos, size, red, green, blue, alpha, intensity, zBias, dirX, dirY, dirZ, viewThreshold, innerAngle, outerAngle, flags) {
        DrawCorona(pos.x, pos.y, pos.z, size, red, green, blue, alpha, intensity, zBias, dirX, dirY, dirZ, viewThreshold, innerAngle, outerAngle, flags);
    }
    graphics.drawCorona = drawCorona;
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
    function drawGizmo(matrixPtr, id) {
        return DrawGizmo(matrixPtr, id);
    }
    graphics.drawGizmo = drawGizmo;
    /**
     * Draw a glow sphere this frame. Up to 256 per single frame.
     *
     * Hash: 0xBD25EC89
     */
    function drawGlowSphere(pos, radius, colorR, colorG, colorB, intensity, invert, marker) {
        DrawGlowSphere(pos.x, pos.y, pos.z, radius, colorR, colorG, colorB, intensity, invert, marker);
    }
    graphics.drawGlowSphere = drawGlowSphere;
    /**
     * Like DRAW_RECT, but it's a line.
     *
     * Hash: 0xB856A90
     */
    function drawLine2d(x1, y1, x2, y2, width, r, g, b, a) {
        DrawLine2d(x1, y1, x2, y2, width, r, g, b, a);
    }
    graphics.drawLine2d = drawLine2d;
    /**
     * DRAW_RECT, but with a rotation. Seems to be broken.
     *
     * Hash: 0xEC37C168
     */
    function drawRectRotated(x, y, width, height, rotation, r, g, b, a) {
        DrawRectRotated(x, y, width, height, rotation, r, g, b, a);
    }
    graphics.drawRectRotated = drawRectRotated;
    /**
     * Forces the game snow pass to render.
     *
     * Hash: 0xE6E16170
     */
    function forceSnowPass(enabled) {
        ForceSnowPass(enabled);
    }
    graphics.forceSnowPass = forceSnowPass;
    /**
     * Returns the world position the pointer is hovering on the pause map.
     *
     * Hash: 0xE5AF7A82
     */
    function getPauseMapPointerWorldPosition() {
        return new Vector3(GetPauseMapPointerWorldPosition());
    }
    graphics.getPauseMapPointerWorldPosition = getPauseMapPointerWorldPosition;
    /**
     * Gets the height of the specified runtime texture.
     *
     * Hash: 0x3574AACE
     */
    function getRuntimeTextureHeight(tex) {
        return GetRuntimeTextureHeight(tex);
    }
    graphics.getRuntimeTextureHeight = getRuntimeTextureHeight;
    /**
     * Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.
     *
     * Hash: 0xCA0A085F
     */
    function getRuntimeTexturePitch(tex) {
        return GetRuntimeTexturePitch(tex);
    }
    graphics.getRuntimeTexturePitch = getRuntimeTexturePitch;
    /**
     * Gets the width of the specified runtime texture.
     *
     * Hash: 0xC9F55558
     */
    function getRuntimeTextureWidth(tex) {
        return GetRuntimeTextureWidth(tex);
    }
    graphics.getRuntimeTextureWidth = getRuntimeTextureWidth;
    /**
     * Returns whether or not the specific minimap overlay has loaded.
     *
     * Hash: 0xF7535F32
     */
    function hasMinimapOverlayLoaded(id) {
        return HasMinimapOverlayLoaded(id);
    }
    graphics.hasMinimapOverlayLoaded = hasMinimapOverlayLoaded;
    /**
     * Experimental natives, please do not use in a live environment.
     *
     * Hash: 0xA896B20A
     */
    function removeReplaceTexture(origTxd, origTxn) {
        RemoveReplaceTexture(origTxd, origTxn);
    }
    graphics.removeReplaceTexture = removeReplaceTexture;
    /**
     * This function undoes changes made by [`SET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE`](#\_0x68DFF2DD), restoring the original outline rendering behavior. The default render technique group is `unlit`.
     *
     * Hash: 0x8EB6EC38
     */
    function resetEntityDrawOutlineRenderTechnique() {
        ResetEntityDrawOutlineRenderTechnique();
    }
    graphics.resetEntityDrawOutlineRenderTechnique = resetEntityDrawOutlineRenderTechnique;
    /**
     * Draws an outline around a given entity. This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0x76180407
     */
    function setEntityDrawOutline(entity, enabled) {
        const _entity = entity instanceof IEntity ? entity.handle() : entity;
        SetEntityDrawOutline(_entity, enabled);
    }
    graphics.setEntityDrawOutline = setEntityDrawOutline;
    /**
     * Sets color for entity outline. `255, 0, 255, 255` by default.
     *
     * Hash: 0xB41A56C2
     */
    function setEntityDrawOutlineColor(red, green, blue, alpha) {
        SetEntityDrawOutlineColor(red, green, blue, alpha);
    }
    graphics.setEntityDrawOutlineColor = setEntityDrawOutlineColor;
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
    function setEntityDrawOutlineRenderTechnique(techniqueGroup) {
        SetEntityDrawOutlineRenderTechnique(techniqueGroup);
    }
    graphics.setEntityDrawOutlineRenderTechnique = setEntityDrawOutlineRenderTechnique;
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
    function setEntityDrawOutlineShader(shader) {
        SetEntityDrawOutlineShader(shader);
    }
    graphics.setEntityDrawOutlineShader = setEntityDrawOutlineShader;
    /**
     * This completely disables rendering of fog volumes (vfxfogvolumeinfo.ymt).
     *
     * Hash: 0xFBC64DA3
     */
    function setFogVolumeRenderDisabled(state) {
        SetFogVolumeRenderDisabled(state);
    }
    graphics.setFogVolumeRenderDisabled = setFogVolumeRenderDisabled;
    /**
     * Sets the type for the minimap blip clipping object to be either rectangular or rounded.
     *
     * Hash: 0xB8B4490C
     */
    function setMinimapClipType(_type) {
        SetMinimapClipType(_type);
    }
    graphics.setMinimapClipType = setMinimapClipType;
    /**
     * Overrides the minimap component data (from `common:/data/ui/frontend.xml`) for a specified component.
     *
     * Hash: 0x3E882B23
     */
    function setMinimapComponentPosition(name, alignX, alignY, posX, posY, sizeX, sizeY) {
        SetMinimapComponentPosition(name, alignX, alignY, posX, posY, sizeX, sizeY);
    }
    graphics.setMinimapComponentPosition = setMinimapComponentPosition;
    /**
     * Sets the display info for a minimap overlay.
     *
     * Hash: 0x6A48B3CA
     */
    function setMinimapOverlayDisplay(miniMap, x, y, xScale, yScale, alpha) {
        SetMinimapOverlayDisplay(miniMap, x, y, xScale, yScale, alpha);
    }
    graphics.setMinimapOverlayDisplay = setMinimapOverlayDisplay;
    /**
     * No comment provided
     *
     * Hash: 0x3963D527
     */
    function setRuntimeTextureArgbData(tex, buffer, length) {
        return SetRuntimeTextureArgbData(tex, buffer, length);
    }
    graphics.setRuntimeTextureArgbData = setRuntimeTextureArgbData;
    /**
     * Replaces the pixel data in a runtime texture with the image data from a file in the current resource, or a data URL.
     *
     * If the bitmap is a different size compared to the existing texture, it will be resampled.
     *
     * This command may end up executed asynchronously, and only update the texture data at a later time.
     *
     * Hash: 0x28FC4ECB
     */
    function setRuntimeTextureImage(tex, fileName) {
        return SetRuntimeTextureImage(tex, fileName);
    }
    graphics.setRuntimeTextureImage = setRuntimeTextureImage;
    /**
     * Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.
     *
     * Hash: 0xAB65ACEE
     */
    function setRuntimeTexturePixel(tex, x, y, r, g, b, a) {
        SetRuntimeTexturePixel(tex, x, y, r, g, b, a);
    }
    graphics.setRuntimeTexturePixel = setRuntimeTexturePixel;
    /**
     * Modifies the radius scale used in the simulation of wet cloth physics.
     * This affects how cloth behaves when wet, changing how it sticks or reacts to movement.
     *
     * Hash: 0xF1BD2CEF
     */
    function setWetClothPinRadiusScale(scale) {
        SetWetClothPinRadiusScale(scale);
    }
    graphics.setWetClothPinRadiusScale = setWetClothPinRadiusScale;
    /**
     * Resets the screen's draw-origin which was changed by the function [`SET_DRAW_ORIGIN`](#\_0xE10198D5) back to `x=0, y=0`. See [`SET_DRAW_ORIGIN`](#\_0xE10198D5) for further information.
     *
     * Hash: 0xDD76B263
     */
    function clearDrawOrigin() {
        ClearDrawOrigin();
    }
    graphics.clearDrawOrigin = clearDrawOrigin;
    /**
     * In compare to `0x31DC8D3F216D8509` return true if texture its created when `0x31DC8D3F216D8509` return true if you put there any id in valid range
     *
     * Hash: 0x8B25BC20
     */
    function doesTextureExist(textureId) {
        return DoesTextureExist(textureId);
    }
    graphics.doesTextureExist = doesTextureExist;
    /**
     * No comment provided
     *
     * Hash: 0xCD4D9DD5
     */
    function drawBox(x1, y1, z1, x2, y2, z2, red, green, blue, alpha) {
        DrawBox(x1, y1, z1, x2, y2, z2, red, green, blue, alpha);
    }
    graphics.drawBox = drawBox;
    /**
     * No comment provided
     *
     * Hash: 0xB3426BCC
     */
    function drawLine(x1, y1, z1, x2, y2, z2, red, green, blue, alpha) {
        DrawLine(x1, y1, z1, x2, y2, z2, red, green, blue, alpha);
    }
    graphics.drawLine = drawLine;
    /**
     * No comment provided
     *
     * Hash: 0xABD19253
     */
    function drawPoly(x1, y1, z1, x2, y2, z2, x3, y3, z3, red, green, blue, alpha) {
        DrawPoly(x1, y1, z1, x2, y2, z2, x3, y3, z3, red, green, blue, alpha);
    }
    graphics.drawPoly = drawPoly;
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
    function getAspectRatio() {
        return GetAspectRatio();
    }
    graphics.getAspectRatio = getAspectRatio;
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
    function getCurrentScreenResolution() {
        return GetCurrentScreenResolution();
    }
    graphics.getCurrentScreenResolution = getCurrentScreenResolution;
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
    function removeTexture(textureId) {
        RemoveTexture(textureId);
    }
    graphics.removeTexture = removeTexture;
    /**
     * Sets the on-screen drawing origin for draw-functions in world coordinates.
     *
     * The effect can be reset by calling [`CLEAR_DRAW_ORIGIN`](#\_0xDD76B263) and is limited to 32 different origins each frame.
     *
     * Hash: 0xE10198D5
     */
    function setDrawOrigin(pos, is2d) {
        SetDrawOrigin(pos.x, pos.y, pos.z, is2d);
    }
    graphics.setDrawOrigin = setDrawOrigin;
    /**
     * Sets the text font for the current text drawing command.
     *
     * Hash: 0xADA9255D
     */
    function setTextFontForCurrentCommand(fontId) {
        SetTextFontForCurrentCommand(fontId);
    }
    graphics.setTextFontForCurrentCommand = setTextFontForCurrentCommand;
    /**
     * No comment provided
     *
     * Hash: 0x68CDFA60
     */
    function setTextJustification(justifyType) {
        SetTextJustification(justifyType);
    }
    graphics.setTextJustification = setTextJustification;
    /**
     * No comment provided
     *
     * Hash: 0x6F60AB54
     */
    function setTextWrap(start, end) {
        SetTextWrap(start, end);
    }
    graphics.setTextWrap = setTextWrap;
    /**
     * A getter for [SET_VISUAL_SETTING_FLOAT](#\_0xD1D31681).
     *
     * Hash: 0x15346B4D
     */
    function getVisualSettingFloat(name) {
        return GetVisualSettingFloat(name);
    }
    graphics.getVisualSettingFloat = getVisualSettingFloat;
    /**
     * Overrides a floating point value from `visualsettings.dat` temporarily.
     *
     * Hash: 0xD1D31681
     */
    function setVisualSettingFloat(name, value) {
        SetVisualSettingFloat(name, value);
    }
    graphics.setVisualSettingFloat = setVisualSettingFloat;
})(graphics || (graphics = {}));
export var hud;
(function (hud) {
    /**
     * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
     *
     * Hash: 0xCD949E20
     */
    function getComponentAlign(id) {
        return GetHudComponentAlign(id);
    }
    hud.getComponentAlign = getComponentAlign;
    /**
     * No comment provided
     *
     * Hash: 0xA91866BC
     */
    function getComponentName(id) {
        return GetHudComponentName(id);
    }
    hud.getComponentName = getComponentName;
    /**
     * No comment provided
     *
     * Hash: 0x12217D33
     */
    function getComponentSize(id) {
        return new Vector3(GetHudComponentSize(id));
    }
    hud.getComponentSize = getComponentSize;
    /**
     * Returns the zoom level data by index from mapzoomdata.meta file.
     *
     * Hash: 0x1363A998
     */
    function getMapZoomDataLevel(index) {
        return GetMapZoomDataLevel(index);
    }
    hud.getMapZoomDataLevel = getMapZoomDataLevel;
    /**
     * Returns true if the minimap is currently expanded. False if it's the normal minimap state.
     * Use [`IsBigmapFull`](#\_0x66EE14B2) to check if the full map is currently revealed on the minimap.
     *
     * Hash: 0xFFF65C63
     */
    function isBigmapActive() {
        return IsBigmapActive();
    }
    hud.isBigmapActive = isBigmapActive;
    /**
     * No comment provided
     *
     * Hash: 0x66EE14B2
     */
    function isBigmapFull() {
        return IsBigmapFull();
    }
    hud.isBigmapFull = isBigmapFull;
    /**
     * Resets values from the zoom level data by index to defaults from mapzoomdata.meta.
     *
     * Hash: 0x11A5B7ED
     */
    function resetMapZoomDataLevel(index) {
        ResetMapZoomDataLevel(index);
    }
    hud.resetMapZoomDataLevel = resetMapZoomDataLevel;
    /**
     * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
     *
     * Hash: 0xEED219F2
     */
    function setComponentAlign(id, horizontalAlign, verticalAlign) {
        SetHudComponentAlign(id, horizontalAlign, verticalAlign);
    }
    hud.setComponentAlign = setComponentAlign;
    /**
     * No comment provided
     *
     * Hash: 0x7644A9FA
     */
    function setComponentSize(id, x, y) {
        SetHudComponentSize(id, x, y);
    }
    hud.setComponentSize = setComponentSize;
    /**
     * Sets values to the zoom level data by index.
     *
     * Hash: 0x447C718E
     */
    function setMapZoomDataLevel(index, zoomScale, zoomSpeed, scrollSpeed, tilesX, tilesY) {
        SetMapZoomDataLevel(index, zoomScale, zoomSpeed, scrollSpeed, tilesX, tilesY);
    }
    hud.setMapZoomDataLevel = setMapZoomDataLevel;
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
    function getMinimapType() {
        return GetMinimapType();
    }
    hud.getMinimapType = getMinimapType;
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
    function setMinimapType(_type) {
        SetMinimapType(_type);
    }
    hud.setMinimapType = setMinimapType;
})(hud || (hud = {}));
export var misc;
(function (misc) {
    /**
     * Adds the given model name hash to the list of valid models for the player ped's parachute.
     *
     * Hash: 0x8AC7AE9
     */
    function addAuthorizedParachuteModel(modelNameHash) {
        AddAuthorizedParachuteModel(modelNameHash);
    }
    misc.addAuthorizedParachuteModel = addAuthorizedParachuteModel;
    /**
     * Adds the given model name hash to the list of valid models for the player ped's parachute pack.
     *
     * Hash: 0x2E86DEA5
     */
    function addAuthorizedParachutePackModel(modelNameHash) {
        AddAuthorizedParachutePackModel(modelNameHash);
    }
    misc.addAuthorizedParachutePackModel = addAuthorizedParachutePackModel;
    /**
     * Adds new health config.
     *
     * Hash: 0x9CBFD5C1
     */
    function addHealthConfig(configName, defaultHealth, defaultArmor, defaultEndurance, fatiguedHealthThreshold, injuredHealthThreshold, dyingHealthThreshold, hurtHealthThreshold, dogTakedownThreshold, writheFromBulletThreshold, meleeCardinalFatalAttack, invincible) {
        AddHealthConfig(configName, defaultHealth, defaultArmor, defaultEndurance, fatiguedHealthThreshold, injuredHealthThreshold, dyingHealthThreshold, hurtHealthThreshold, dogTakedownThreshold, writheFromBulletThreshold, meleeCardinalFatalAttack, invincible);
    }
    misc.addHealthConfig = addHealthConfig;
    /**
     * Disables the editor runtime mode, changing game behavior to not track entity metadata.
     * This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0xB1622B17
     */
    function disableEditorRuntime() {
        DisableEditorRuntime();
    }
    misc.disableEditorRuntime = disableEditorRuntime;
    /**
     * Disables the game's afk camera that starts panning around after 30 seconds of inactivity.
     *
     * Hash: 0x3D5AB7F0
     */
    function disableIdleCamera(state) {
        DisableIdleCamera(state);
    }
    misc.disableIdleCamera = disableIdleCamera;
    /**
     * Enables the editor runtime mode, changing game behavior to track entity metadata.
     * This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0xC383871D
     */
    function enableEditorRuntime() {
        EnableEditorRuntime();
    }
    misc.enableEditorRuntime = enableEditorRuntime;
    /**
     * Enters cursor mode, suppressing mouse movement to the game and displaying a mouse cursor instead. This function supports
     * SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0x780DA86
     */
    function enterCursorMode() {
        EnterCursorMode();
    }
    misc.enterCursorMode = enterCursorMode;
    /**
     * A getter for [SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME](#\_0x0B919E1FB47CC4E0).
     *
     * Hash: 0xB550232D
     */
    function getAmbientPedRangeMultiplier() {
        return GetAmbientPedRangeMultiplier();
    }
    misc.getAmbientPedRangeMultiplier = getAmbientPedRangeMultiplier;
    /**
     * This native returns the index of a calming quad if the given point is inside its bounds.
     *
     * Hash: 0x870E8B40
     */
    function getCalmingQuadAtCoords(x, y) {
        return GetCalmingQuadAtCoords(x, y);
    }
    misc.getCalmingQuadAtCoords = getCalmingQuadAtCoords;
    /**
     * No comment provided
     *
     * Hash: 0xFF60E63
     */
    function getCalmingQuadBounds(waterQuad) {
        return GetCalmingQuadBounds(waterQuad);
    }
    misc.getCalmingQuadBounds = getCalmingQuadBounds;
    /**
     * No comment provided
     *
     * Hash: 0xCEBFC42
     */
    function getCalmingQuadCount() {
        return GetCalmingQuadCount();
    }
    misc.getCalmingQuadCount = getCalmingQuadCount;
    /**
     * No comment provided
     *
     * Hash: 0xB0E3A058
     */
    function getCalmingQuadDampening(waterQuad) {
        return GetCalmingQuadDampening(waterQuad);
    }
    misc.getCalmingQuadDampening = getCalmingQuadDampening;
    /**
     * No comment provided
     *
     * Hash: 0x5550BF9F
     */
    function getFuelConsumptionRateMultiplier() {
        return GetFuelConsumptionRateMultiplier();
    }
    misc.getFuelConsumptionRateMultiplier = getFuelConsumptionRateMultiplier;
    /**
     * No comment provided
     *
     * Hash: 0xC66CD90C
     */
    function getFuelConsumptionState() {
        return GetFuelConsumptionState();
    }
    misc.getFuelConsumptionState = getFuelConsumptionState;
    /**
     * A getter for [SET_GLOBAL_PASSENGER_MASS_MULTIPLIER](#\_0x3422291C).
     *
     * Hash: 0x78951816
     */
    function getGlobalPassengerMassMultiplier() {
        return GetGlobalPassengerMassMultiplier();
    }
    misc.getGlobalPassengerMassMultiplier = getGlobalPassengerMassMultiplier;
    /**
     * Retrieves the map data entity handle.
     * This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0x30AA6911
     */
    function getMapdataEntityHandle(mapDataHash, entityInternalIdx) {
        return GetMapdataEntityHandle(mapDataHash, entityInternalIdx);
    }
    misc.getMapdataEntityHandle = getMapdataEntityHandle;
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
    function getMapdataEntityMatrix(mapDataHash, entityInternalIdx, matrixPtr) {
        return GetMapdataEntityMatrix(mapDataHash, entityInternalIdx, matrixPtr);
    }
    misc.getMapdataEntityMatrix = getMapdataEntityMatrix;
    /**
     * Returns the transient map data index for a specified hash.
     * This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0xD29D8EDD
     */
    function getMapdataFromHashKey(mapdataHandle) {
        if (typeof mapdataHandle === 'string')
            mapdataHandle = game.getHashKey(mapdataHandle);
        return GetMapdataFromHashKey(mapdataHandle);
    }
    misc.getMapdataFromHashKey = getMapdataFromHashKey;
    /**
     * A getter for [SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xEAE6DCC7EEE3DB1D).
     *
     * Hash: 0xFF72DF84
     */
    function getParkedVehicleDensityMultiplier() {
        return GetParkedVehicleDensityMultiplier();
    }
    misc.getParkedVehicleDensityMultiplier = getParkedVehicleDensityMultiplier;
    /**
     * A getter for [SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xB3B3359379FE77D3).
     * Same as vehicle density multiplier.
     *
     * Hash: 0x7B0D00C5
     */
    function getRandomVehicleDensityMultiplier() {
        return GetRandomVehicleDensityMultiplier();
    }
    misc.getRandomVehicleDensityMultiplier = getRandomVehicleDensityMultiplier;
    /**
     * A getter for [SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x7A556143A1C03898).
     *
     * Hash: 0x77C598B2
     */
    function getScenarioPedDensityMultiplier() {
        return GetScenarioPedDensityMultiplier();
    }
    misc.getScenarioPedDensityMultiplier = getScenarioPedDensityMultiplier;
    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Returns whether an asynchronous streaming file registration completed.
     *
     * Hash: 0xA194934D
     */
    function isStreamingFileReady(registerAs) {
        return IsStreamingFileReady(registerAs);
    }
    misc.isStreamingFileReady = isStreamingFileReady;
    /**
     * Leaves cursor mode. This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0xADECF19E
     */
    function leaveCursorMode() {
        LeaveCursorMode();
    }
    misc.leaveCursorMode = leaveCursorMode;
    /**
     * Toggles a check that prevents attaching (networked) entities to remotely owned peds. This is disabled by default.
     *
     * Hash: 0x30CE39D8
     */
    function onesyncEnableRemoteAttachmentSanitization(enable) {
        OnesyncEnableRemoteAttachmentSanitization(enable);
    }
    misc.onesyncEnableRemoteAttachmentSanitization = onesyncEnableRemoteAttachmentSanitization;
    /**
     * Replaces the `popgroups` (CPopGroupList) meta file with the file in the specified path.
     *
     * Hash: 0xD3BC438F
     */
    function overridePopGroups(path) {
        OverridePopGroups(path);
    }
    misc.overridePopGroups = overridePopGroups;
    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Registers a set of archetypes with the game engine. These should match `CBaseArchetypeDef` class information from the game.
     *
     * Hash: 0x3C2F9037
     */
    function registerArchetypes(factory) {
        RegisterArchetypes(factory);
    }
    misc.registerArchetypes = registerArchetypes;
    /**
     * Registers a specified .gfx file as GFx font library.
     * The .gfx file has to be registered with the streamer already.
     *
     * Hash: 0x1B3A363
     */
    function registerFontFile(fileName) {
        RegisterFontFile(fileName);
    }
    misc.registerFontFile = registerFontFile;
    /**
     * Registers a specified font name for use with text draw commands.
     *
     * Hash: 0xACF6D8EE
     */
    function registerFontId(fontName) {
        return RegisterFontId(fontName);
    }
    misc.registerFontId = registerFontId;
    /**
     * Registers a key mapping for the current resource.
     *
     * See the related [cookbook post](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/) for more information.
     *
     * Below you can find some examples on how to create these keybindings as well as the alternate keybinding syntax, which is preceded by `~!` to indicate that it's an alternate key.
     *
     * Hash: 0xD7664FD1
     */
    function registerKeyMapping(commandString, description, defaultMapper, defaultParameter) {
        RegisterKeyMapping(commandString, description, defaultMapper, defaultParameter);
    }
    misc.registerKeyMapping = registerKeyMapping;
    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Registers a dynamic streaming asset from the server with the GTA streaming module system.
     *
     * Hash: 0xCEAD2D4B
     */
    function registerStreamingFileFromCache(resourceName, fileName, cacheString) {
        RegisterStreamingFileFromCache(resourceName, fileName, cacheString);
    }
    misc.registerStreamingFileFromCache = registerStreamingFileFromCache;
    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Registers a KVP value as an asset with the GTA streaming module system. This function currently won't work.
     *
     * Hash: 0x1493DCC1
     */
    function registerStreamingFileFromKvs(kvsKey) {
        RegisterStreamingFileFromKvs(kvsKey);
    }
    misc.registerStreamingFileFromKvs = registerStreamingFileFromKvs;
    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Registers a file from an URL as a streaming asset in the GTA streaming subsystem. This will asynchronously register the asset, and caching is done based on the URL itself - cache headers are ignored.
     *
     * Use `IS_STREAMING_FILE_READY` to check if the asset has been registered successfully.
     *
     * Hash: 0xF44BFB95
     */
    function registerStreamingFileFromUrl(registerAs, url) {
        RegisterStreamingFileFromUrl(registerAs, url);
    }
    misc.registerStreamingFileFromUrl = registerStreamingFileFromUrl;
    /**
     * Removes health config.
     *
     * Hash: 0xE0ED5FB
     */
    function removeHealthConfig(configName) {
        RemoveHealthConfig(configName);
    }
    misc.removeHealthConfig = removeHealthConfig;
    /**
     * Adds a cooldown between instances of moving and then aiming.
     * Can be optionally used to hinder 'speedboosting'
     * To turn off, set value to 0
     *
     * Hash: 0xA42A3DBF
     */
    function setAimCooldown(value) {
        SetAimCooldown(value);
    }
    misc.setAimCooldown = setAimCooldown;
    /**
     * No comment provided
     *
     * Hash: 0xC5945BD9
     */
    function setCalmingQuadBounds(waterQuad, minX, minY, maxX, maxY) {
        return SetCalmingQuadBounds(waterQuad, minX, minY, maxX, maxY);
    }
    misc.setCalmingQuadBounds = setCalmingQuadBounds;
    /**
     * No comment provided
     *
     * Hash: 0x67977501
     */
    function setCalmingQuadDampening(calmingQuad, dampening) {
        return SetCalmingQuadDampening(calmingQuad, dampening);
    }
    misc.setCalmingQuadDampening = setCalmingQuadDampening;
    /**
     * Allows Weapon-Flashlight beams to stay visible while moving. Normally it only stays on while aiming.
     *
     * Hash: 0x7635B349
     */
    function setFlashLightKeepOnWhileMoving(state) {
        SetFlashLightKeepOnWhileMoving(state);
    }
    misc.setFlashLightKeepOnWhileMoving = setFlashLightKeepOnWhileMoving;
    /**
     * Sets fuel consumption rate multiplier for all vehicles operated by a player. This is a way to slow down or speed up fuel consumption for all vehicles at a time. If 0 - it practically means that fuel will not be consumed. By default is set to 1.
     *
     * When the multiplier is set to 1 a default 65 litre gas tank car with average fuel consumption can stay idle for ~16.67 hours or run with max RPM for ~2.5 hours.
     *
     * To customize fuel consumption per vehicle / vehicle class use [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolConsumptionRate`. By default it is set to 0.5 for all vehicles.
     *
     * Hash: 0x845F3E5C
     */
    function setFuelConsumptionRateMultiplier(multiplier) {
        SetFuelConsumptionRateMultiplier(multiplier);
    }
    misc.setFuelConsumptionRateMultiplier = setFuelConsumptionRateMultiplier;
    /**
     * Turns on and off fuel consumption in all vehicles operated by a player. NPC operated vehicles will not consume fuel to avoid traffic disruptions.
     *
     * The default Gta5 behaviour is fuel consumption turned off.
     *
     * Hash: 0x81DAD03E
     */
    function setFuelConsumptionState(state) {
        SetFuelConsumptionState(state);
    }
    misc.setFuelConsumptionState = setFuelConsumptionState;
    /**
     * No comment provided
     *
     * Hash: 0x1C47F6AC
     */
    function setGlobalPassengerMassMultiplier(massMul) {
        SetGlobalPassengerMassMultiplier(massMul);
    }
    misc.setGlobalPassengerMassMultiplier = setGlobalPassengerMassMultiplier;
    /**
     * Sets default armor value for specific health config.
     *
     * Hash: 0x20A1E6A2
     */
    function setHealthConfigDefaultArmor(configName, newValue) {
        SetHealthConfigDefaultArmor(configName, newValue);
    }
    misc.setHealthConfigDefaultArmor = setHealthConfigDefaultArmor;
    /**
     * Sets default endurance value for specific health config.
     *
     * Hash: 0x60F20B81
     */
    function setHealthConfigDefaultEndurance(configName, newValue) {
        SetHealthConfigDefaultEndurance(configName, newValue);
    }
    misc.setHealthConfigDefaultEndurance = setHealthConfigDefaultEndurance;
    /**
     * Sets default health value for specific health config.
     *
     * Hash: 0xC705C778
     */
    function setHealthConfigDefaultHealth(configName, newValue) {
        SetHealthConfigDefaultHealth(configName, newValue);
    }
    misc.setHealthConfigDefaultHealth = setHealthConfigDefaultHealth;
    /**
     * Sets default dog takedown threshold value for specific health config.
     *
     * Hash: 0x9A995E96
     */
    function setHealthConfigDogTakedownThreshold(configName, newValue) {
        SetHealthConfigDogTakedownThreshold(configName, newValue);
    }
    misc.setHealthConfigDogTakedownThreshold = setHealthConfigDogTakedownThreshold;
    /**
     * Sets default dying health threshold value for specific health config.
     *
     * Hash: 0x9B00FD77
     */
    function setHealthConfigDyingThreshold(configName, newValue) {
        SetHealthConfigDyingThreshold(configName, newValue);
    }
    misc.setHealthConfigDyingThreshold = setHealthConfigDyingThreshold;
    /**
     * Sets default fatigued health threshold value for specific health config.
     *
     * Hash: 0xC58953FD
     */
    function setHealthConfigFatiguedThreshold(configName, newValue) {
        SetHealthConfigFatiguedThreshold(configName, newValue);
    }
    misc.setHealthConfigFatiguedThreshold = setHealthConfigFatiguedThreshold;
    /**
     * Sets default hurt health threshold value for specific health config.
     *
     * Hash: 0x98DF1A83
     */
    function setHealthConfigHurtThreshold(configName, newValue) {
        SetHealthConfigHurtThreshold(configName, newValue);
    }
    misc.setHealthConfigHurtThreshold = setHealthConfigHurtThreshold;
    /**
     * Sets default injured health threshold value for specific health config.
     *
     * Hash: 0xF9D9B647
     */
    function setHealthConfigInjuredThreshold(configName, newValue) {
        SetHealthConfigInjuredThreshold(configName, newValue);
    }
    misc.setHealthConfigInjuredThreshold = setHealthConfigInjuredThreshold;
    /**
     * Sets default invincible value for specific health config.
     *
     * Hash: 0x4A9EEDE6
     */
    function setHealthConfigInvincible(configName, newValue) {
        SetHealthConfigInvincible(configName, newValue);
    }
    misc.setHealthConfigInvincible = setHealthConfigInvincible;
    /**
     * Sets default melee cardinal fatal attack value for specific health config.
     *
     * Hash: 0xDD443E53
     */
    function setHealthConfigMeleeFatalAttack(configName, newValue) {
        SetHealthConfigMeleeFatalAttack(configName, newValue);
    }
    misc.setHealthConfigMeleeFatalAttack = setHealthConfigMeleeFatalAttack;
    /**
     * Sets default writhe from bullet threshold value for specific health config.
     *
     * Hash: 0xE97633CB
     */
    function setHealthConfigWritheFromBulletThreshold(configName, newValue) {
        SetHealthConfigWritheFromBulletThreshold(configName, newValue);
    }
    misc.setHealthConfigWritheFromBulletThreshold = setHealthConfigWritheFromBulletThreshold;
    /**
     * Overrides how many real ms are equal to one game minute.
     * A setter for [`GetMillisecondsPerGameMinute`](#\_0x2F8B4D1C595B11DB).
     *
     * Hash: 0x36CA2554
     */
    function setMillisecondsPerGameMinute(value) {
        SetMillisecondsPerGameMinute(value);
    }
    misc.setMillisecondsPerGameMinute = setMillisecondsPerGameMinute;
    /**
     * <strong>This native is deprecated and does nothing!</strong>
     *
     * Hash: 0x7F6B8D75
     */
    function setModelHeadlightConfiguration(modelHash, ratePerSecond, headlightRotation, invertRotation) {
        if (typeof modelHash === 'string')
            modelHash = game.getHashKey(modelHash);
        SetModelHeadlightConfiguration(modelHash, ratePerSecond, headlightRotation, invertRotation);
    }
    misc.setModelHeadlightConfiguration = setModelHeadlightConfiguration;
    /**
     * Sets whether all tags should group (normal game behavior) or should remain independent and above each ped's respective head when in a vehicle.
     *
     * Hash: 0x7A27BC93
     */
    function setMpGamerTagsUseVehicleBehavior(enabled) {
        SetMpGamerTagsUseVehicleBehavior(enabled);
    }
    misc.setMpGamerTagsUseVehicleBehavior = setMpGamerTagsUseVehicleBehavior;
    /**
     * Sets the maximum distance at which all tags will be visible and which beyond will not be displayed. Distance is measured from the camera position.
     *
     * Hash: 0xD61676B3
     */
    function setMpGamerTagsVisibleDistance(distance) {
        SetMpGamerTagsVisibleDistance(distance);
    }
    misc.setMpGamerTagsVisibleDistance = setMpGamerTagsVisibleDistance;
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
    function registerRawKeymap(keymapName, onKeyDown, onKeyUp, rawKeyIndex, canBeDisabled) {
        RegisterRawKeymap(keymapName, onKeyDown, onKeyUp, rawKeyIndex, canBeDisabled);
    }
    misc.registerRawKeymap = registerRawKeymap;
    /**
     * Remaps the keymap bound to `keymapName` to `newRawKeyIndex`
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0x6E38C1B9
     */
    function remapRawKeymap(keymapName, newRawKeyIndex) {
        RemapRawKeymap(keymapName, newRawKeyIndex);
    }
    misc.remapRawKeymap = remapRawKeymap;
    /**
     * No comment provided
     *
     * Hash: 0xC44C2F44
     */
    function setBackfaceculling(toggle) {
        SetBackfaceculling(toggle);
    }
    misc.setBackfaceculling = setBackfaceculling;
    /**
     * No comment provided
     *
     * Hash: 0x8A7A8DAC
     */
    function setCursorLocation(x, y) {
        return SetCursorLocation(x, y);
    }
    misc.setCursorLocation = setCursorLocation;
    /**
     * Sets whether or not ownership checks should be performed while trying to stow a carriable on a hunting wagon.
     *
     * Hash: 0x85A10FFD
     */
    function setIgnoreVehicleOwnershipForStowing(ignore) {
        SetIgnoreVehicleOwnershipForStowing(ignore);
    }
    misc.setIgnoreVehicleOwnershipForStowing = setIgnoreVehicleOwnershipForStowing;
    /**
     * Activates built-in timecycle editing tool.
     *
     * Hash: 0xEEB9B76A
     */
    function activateTimecycleEditor() {
        ActivateTimecycleEditor();
    }
    misc.activateTimecycleEditor = activateTimecycleEditor;
    /**
     * No comment provided
     *
     * Hash: 0x3422291C
     */
    function applyWeatherCycles(numEntries, msPerCycle) {
        return ApplyWeatherCycles(numEntries, msPerCycle);
    }
    misc.applyWeatherCycles = applyWeatherCycles;
    /**
     * No comment provided
     *
     * Hash: 0x54D636B3
     */
    function cloneTimecycleModifier(sourceModifierName, clonedModifierName) {
        return CloneTimecycleModifier(sourceModifierName, clonedModifierName);
    }
    misc.cloneTimecycleModifier = cloneTimecycleModifier;
    /**
     * Create a clean timecycle modifier. See [`SET_TIMECYCLE_MODIFIER_VAR`](#\_0x6E0A422B) to add variables.
     *
     * Hash: 0x70FA2AFA
     */
    function createTimecycleModifier(modifierName) {
        return CreateTimecycleModifier(modifierName);
    }
    misc.createTimecycleModifier = createTimecycleModifier;
    /**
     * Disables the game's world horizon lods rendering (see `farlods.#dd`).
     * Using the island hopper natives might also affect this state.
     *
     * Hash: 0xA9C92CDC
     */
    function disableWorldhorizonRendering(state) {
        DisableWorldhorizonRendering(state);
    }
    misc.disableWorldhorizonRendering = disableWorldhorizonRendering;
    /**
     * No comment provided
     *
     * Hash: 0xC53BB6D3
     */
    function doesTimecycleModifierHasVar(modifierName, varName) {
        return DoesTimecycleModifierHasVar(modifierName, varName);
    }
    misc.doesTimecycleModifierHasVar = doesTimecycleModifierHasVar;
    /**
     * No comment provided
     *
     * Hash: 0xDEDA4E50
     */
    function endFindObject(findHandle) {
        EndFindObject(findHandle);
    }
    misc.endFindObject = endFindObject;
    /**
     * No comment provided
     *
     * Hash: 0x9615C2AD
     */
    function endFindPed(findHandle) {
        EndFindPed(findHandle);
    }
    misc.endFindPed = endFindPed;
    /**
     * No comment provided
     *
     * Hash: 0x3C407D53
     */
    function endFindPickup(findHandle) {
        EndFindPickup(findHandle);
    }
    misc.endFindPickup = endFindPickup;
    /**
     * No comment provided
     *
     * Hash: 0x9227415A
     */
    function endFindVehicle(findHandle) {
        EndFindVehicle(findHandle);
    }
    misc.endFindVehicle = endFindVehicle;
    /**
     * This native is not implemented.
     *
     * Hash: 0xD2CB95A3
     */
    function experimentalLoadCloneCreate(data, objectId, tree) {
        return ExperimentalLoadCloneCreate(data, objectId, tree);
    }
    misc.experimentalLoadCloneCreate = experimentalLoadCloneCreate;
    /**
     * This native is not implemented.
     *
     * Hash: 0x6BC189AC
     */
    function experimentalLoadCloneSync(entity, data) {
        const _entity = entity instanceof IEntity ? entity.handle() : entity;
        ExperimentalLoadCloneSync(_entity, data);
    }
    misc.experimentalLoadCloneSync = experimentalLoadCloneSync;
    /**
     * This native is not implemented.
     *
     * Hash: 0x9D65CAD2
     */
    function experimentalSaveCloneCreate(entity) {
        const _entity = entity instanceof IEntity ? entity.handle() : entity;
        return ExperimentalSaveCloneCreate(_entity);
    }
    misc.experimentalSaveCloneCreate = experimentalSaveCloneCreate;
    /**
     * This native is not implemented.
     *
     * Hash: 0x38D19210
     */
    function experimentalSaveCloneSync(entity) {
        const _entity = entity instanceof IEntity ? entity.handle() : entity;
        return ExperimentalSaveCloneSync(_entity);
    }
    misc.experimentalSaveCloneSync = experimentalSaveCloneSync;
    /**
     * No comment provided
     *
     * Hash: 0xFAA6CB5D
     */
    function findFirstObject() {
        return FindFirstObject();
    }
    misc.findFirstObject = findFirstObject;
    /**
     * No comment provided
     *
     * Hash: 0xFB012961
     */
    function findFirstPed() {
        return FindFirstPed();
    }
    misc.findFirstPed = findFirstPed;
    /**
     * No comment provided
     *
     * Hash: 0x3FF9D340
     */
    function findFirstPickup() {
        return FindFirstPickup();
    }
    misc.findFirstPickup = findFirstPickup;
    /**
     * No comment provided
     *
     * Hash: 0x15E55694
     */
    function findFirstVehicle() {
        return FindFirstVehicle();
    }
    misc.findFirstVehicle = findFirstVehicle;
    /**
     * No comment provided
     *
     * Hash: 0x4E129DBF
     */
    function findNextObject(findHandle) {
        return FindNextObject(findHandle);
    }
    misc.findNextObject = findNextObject;
    /**
     * No comment provided
     *
     * Hash: 0xAB09B548
     */
    function findNextPed(findHandle) {
        return FindNextPed(findHandle);
    }
    misc.findNextPed = findNextPed;
    /**
     * No comment provided
     *
     * Hash: 0x4107EF0F
     */
    function findNextPickup(findHandle) {
        return FindNextPickup(findHandle);
    }
    misc.findNextPickup = findNextPickup;
    /**
     * No comment provided
     *
     * Hash: 0x8839120D
     */
    function findNextVehicle(findHandle) {
        return FindNextVehicle(findHandle);
    }
    misc.findNextVehicle = findNextVehicle;
    /**
     * This native returns the currently used game's name.
     *
     * Hash: 0xACA18ECD
     */
    function getCurrentGameName() {
        return GetCurrentGameName();
    }
    misc.getCurrentGameName = getCurrentGameName;
    /**
     * Returns the peer address of the remote game server that the user is currently connected to.
     *
     * Hash: 0xEA11BFBA
     */
    function getCurrentServerEndpoint() {
        return GetCurrentServerEndpoint();
    }
    misc.getCurrentServerEndpoint = getCurrentServerEndpoint;
    /**
     * No comment provided
     *
     * Hash: 0xFE2A1D4D
     */
    function getTimecycleModifierCount() {
        return GetTimecycleModifierCount();
    }
    misc.getTimecycleModifierCount = getTimecycleModifierCount;
    /**
     * No comment provided
     *
     * Hash: 0x5F4CD0E2
     */
    function getTimecycleModifierIndexByName(modifierName) {
        return GetTimecycleModifierIndexByName(modifierName);
    }
    misc.getTimecycleModifierIndexByName = getTimecycleModifierIndexByName;
    /**
     * No comment provided
     *
     * Hash: 0x28CB8608
     */
    function getTimecycleModifierNameByIndex(modifierIndex) {
        return GetTimecycleModifierNameByIndex(modifierIndex);
    }
    misc.getTimecycleModifierNameByIndex = getTimecycleModifierNameByIndex;
    /**
     * A getter for [SET_TIMECYCLE_MODIFIER_STRENGTH](#\_0x82E7FFCD5B2326B3).
     *
     * Hash: 0xBE54124A
     */
    function getTimecycleModifierStrength() {
        return GetTimecycleModifierStrength();
    }
    misc.getTimecycleModifierStrength = getTimecycleModifierStrength;
    /**
     * No comment provided
     *
     * Hash: 0xA7109E12
     */
    function getTimecycleModifierVar(modifierName, varName) {
        return GetTimecycleModifierVar(modifierName, varName);
    }
    misc.getTimecycleModifierVar = getTimecycleModifierVar;
    /**
     * No comment provided
     *
     * Hash: 0x60FB60FE
     */
    function getTimecycleModifierVarCount(modifierName) {
        return GetTimecycleModifierVarCount(modifierName);
    }
    misc.getTimecycleModifierVarCount = getTimecycleModifierVarCount;
    /**
     * No comment provided
     *
     * Hash: 0xE874AB1D
     */
    function getTimecycleModifierVarNameByIndex(modifierName, modifierVarIndex) {
        return GetTimecycleModifierVarNameByIndex(modifierName, modifierVarIndex);
    }
    misc.getTimecycleModifierVarNameByIndex = getTimecycleModifierVarNameByIndex;
    /**
     * Returns the amount of variables available to be applied on timecycle modifiers.
     *
     * Hash: 0x838B34D8
     */
    function getTimecycleVarCount() {
        return GetTimecycleVarCount();
    }
    misc.getTimecycleVarCount = getTimecycleVarCount;
    /**
     * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
     *
     * Hash: 0x3B90238
     */
    function getTimecycleVarDefaultValueByIndex(varIndex) {
        return GetTimecycleVarDefaultValueByIndex(varIndex);
    }
    misc.getTimecycleVarDefaultValueByIndex = getTimecycleVarDefaultValueByIndex;
    /**
     * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
     *
     * Hash: 0xC6C55AAF
     */
    function getTimecycleVarNameByIndex(varIndex) {
        return GetTimecycleVarNameByIndex(varIndex);
    }
    misc.getTimecycleVarNameByIndex = getTimecycleVarNameByIndex;
    /**
     * Converts a screen coordinate into its relative world coordinate.
     *
     * Hash: 0xC81D0659
     */
    function getWorldCoordFromScreenCoord(screenSize) {
        return GetWorldCoordFromScreenCoord(screenSize.x, screenSize.y);
    }
    misc.getWorldCoordFromScreenCoord = getWorldCoordFromScreenCoord;
    /**
     * No comment provided
     *
     * Hash: 0x36DF8612
     */
    function removeTimecycleModifier(modifierName) {
        RemoveTimecycleModifier(modifierName);
    }
    misc.removeTimecycleModifier = removeTimecycleModifier;
    /**
     * No comment provided
     *
     * Hash: 0x5A5E0D05
     */
    function removeTimecycleModifierVar(modifierName, varName) {
        RemoveTimecycleModifierVar(modifierName, varName);
    }
    misc.removeTimecycleModifierVar = removeTimecycleModifierVar;
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
    function requestResourceFileSet(setName) {
        return RequestResourceFileSet(setName);
    }
    misc.requestResourceFileSet = requestResourceFileSet;
    /**
     * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
     *
     * Hash: 0x8BBE6CC0
     */
    function sendLoadingScreenMessage(jsonString) {
        return SendLoadingScreenMessage(jsonString);
    }
    misc.sendLoadingScreenMessage = sendLoadingScreenMessage;
    /**
     * Toggles the visibility of resource names in the FiveM key mapping page.
     *
     * Hash: 0xCB0241B5
     */
    function setKeyMappingHideResources(hide) {
        SetKeyMappingHideResources(hide);
    }
    misc.setKeyMappingHideResources = setKeyMappingHideResources;
    /**
     * No comment provided
     *
     * Hash: 0xA7DD3209
     */
    function setSnakeoilForEntry(name, path, data) {
        SetSnakeoilForEntry(name, path, data);
    }
    misc.setSnakeoilForEntry = setSnakeoilForEntry;
    /**
     * No comment provided
     *
     * Hash: 0x97B2F9F8
     */
    function setTextChatEnabled(enabled) {
        return SetTextChatEnabled(enabled);
    }
    misc.setTextChatEnabled = setTextChatEnabled;
    /**
     * No comment provided
     *
     * Hash: 0x6E0A422B
     */
    function setTimecycleModifierVar(modifierName, varName, value1, value2) {
        SetTimecycleModifierVar(modifierName, varName, value1, value2);
    }
    misc.setTimecycleModifierVar = setTimecycleModifierVar;
    /**
     * No comment provided
     *
     * Hash: 0xD264D4E1
     */
    function setWeatherCycleEntry(index, typeName, timeMult) {
        return SetWeatherCycleEntry(index, typeName, timeMult);
    }
    misc.setWeatherCycleEntry = setWeatherCycleEntry;
    /**
     * Sets whether or not the weather should be owned by the network subsystem.
     *
     * To be able to use [\_SET_WEATHER_TYPE_TRANSITION](#\_0x578C752848ECFA0C), this has to be set to false.
     *
     * Hash: 0x2703D582
     */
    function setWeatherOwnedByNetwork(network) {
        SetWeatherOwnedByNetwork(network);
    }
    misc.setWeatherOwnedByNetwork = setWeatherOwnedByNetwork;
    /**
     * The backing function for TriggerLatentServerEvent.
     *
     * Hash: 0x128737EA
     */
    function triggerLatentServerEventInternal(eventName, eventPayload, payloadLength, bps) {
        TriggerLatentServerEventInternal(eventName, eventPayload, payloadLength, bps);
    }
    misc.triggerLatentServerEventInternal = triggerLatentServerEventInternal;
    /**
     * The backing function for TriggerServerEvent.
     *
     * Hash: 0x7FDD1128
     */
    function triggerServerEventInternal(eventName, eventPayload, payloadLength) {
        TriggerServerEventInternal(eventName, eventPayload, payloadLength);
    }
    misc.triggerServerEventInternal = triggerServerEventInternal;
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
    function addConvarChangeListener(conVarFilter, handler) {
        return AddConvarChangeListener(conVarFilter, handler);
    }
    misc.addConvarChangeListener = addConvarChangeListener;
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
    function addStateBagChangeHandler(keyFilter, bagFilter, handler) {
        return AddStateBagChangeHandler(keyFilter, bagFilter, handler);
    }
    misc.addStateBagChangeHandler = addStateBagChangeHandler;
    /**
     * Cancels the currently executing event.
     *
     * Hash: 0xFA29D35D
     */
    function cancelEvent() {
        CancelEvent();
    }
    misc.cancelEvent = cancelEvent;
    /**
     * No comment provided
     *
     * Hash: 0x1E86F206
     */
    function deleteFunctionReference(referenceIdentity) {
        DeleteFunctionReference(referenceIdentity);
    }
    misc.deleteFunctionReference = deleteFunctionReference;
    /**
     * No comment provided
     *
     * Hash: 0xF4E2079D
     */
    function duplicateFunctionReference(referenceIdentity) {
        return DuplicateFunctionReference(referenceIdentity);
    }
    misc.duplicateFunctionReference = duplicateFunctionReference;
    /**
     * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
     *
     * Hash: 0x561C060B
     */
    function executeCommand(commandString) {
        ExecuteCommand(commandString);
    }
    misc.executeCommand = executeCommand;
    /**
     * An internal function for converting a stack trace object to a string.
     *
     * Hash: 0xD70C3BCA
     */
    function formatStackTrace(traceData) {
        const _traceData = traceData instanceof IObject ? traceData.handle() : traceData;
        return FormatStackTrace(_traceData);
    }
    misc.formatStackTrace = formatStackTrace;
    /**
     * Can be used to get a console variable of type `char*`, for example a string.
     *
     * Hash: 0x6CCD2564
     */
    function getConvar(varName, default_) {
        return GetConvar(varName, default_);
    }
    misc.getConvar = getConvar;
    /**
     * Can be used to get a console variable casted back to `bool`.
     *
     * Hash: 0x7E8EBFE5
     */
    function getConvarBool(varName, defaultValue) {
        return GetConvarBool(varName, defaultValue);
    }
    misc.getConvarBool = getConvarBool;
    /**
     * This will have floating point inaccuracy.
     *
     * Hash: 0x9E666D
     */
    function getConvarFloat(varName, defaultValue) {
        return GetConvarFloat(varName, defaultValue);
    }
    misc.getConvarFloat = getConvarFloat;
    /**
     * Can be used to get a console variable casted back to `int` (an integer value).
     *
     * Hash: 0x935C0AB2
     */
    function getConvarInt(varName, default_) {
        return GetConvarInt(varName, default_);
    }
    misc.getConvarInt = getConvarInt;
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
    function getGameBuildNumber() {
        return GetGameBuildNumber();
    }
    misc.getGameBuildNumber = getGameBuildNumber;
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
    function getGameName() {
        return GetGameName();
    }
    misc.getGameName = getGameName;
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
    function getGamePool(poolName) {
        return GetGamePool(poolName);
    }
    misc.getGamePool = getGamePool;
    /**
     * No comment provided
     *
     * Hash: 0x9F1C4383
     */
    function getInstanceId() {
        return GetInstanceId();
    }
    misc.getInstanceId = getInstanceId;
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
    function getRegisteredCommands() {
        return GetRegisteredCommands();
    }
    misc.getRegisteredCommands = getRegisteredCommands;
    /**
     * No comment provided
     *
     * Hash: 0x78D864C7
     */
    function getStateBagKeys(bagName) {
        return GetStateBagKeys(bagName);
    }
    misc.getStateBagKeys = getStateBagKeys;
    /**
     * Returns the value of a state bag key.
     *
     * Hash: 0x637F4C75
     */
    function getStateBagValue(bagName, key) {
        return GetStateBagValue(bagName, key);
    }
    misc.getStateBagValue = getStateBagValue;
    /**
     * No comment provided
     *
     * Hash: 0x7EBB9929
     */
    function isAceAllowed(_object) {
        return IsAceAllowed(_object);
    }
    misc.isAceAllowed = isAceAllowed;
    /**
     * Gets whether or not this is the CitizenFX server.
     *
     * Hash: 0xCF24C52E
     */
    function isDuplicityVersion() {
        return IsDuplicityVersion();
    }
    misc.isDuplicityVersion = isDuplicityVersion;
    /**
     * No comment provided
     *
     * Hash: 0x37CF52CE
     */
    function isPrincipalAceAllowed(principal, _object) {
        return IsPrincipalAceAllowed(principal, _object);
    }
    misc.isPrincipalAceAllowed = isPrincipalAceAllowed;
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
    function registerCommand(commandName, handler, restricted) {
        RegisterCommand(commandName, handler, restricted);
    }
    misc.registerCommand = registerCommand;
    /**
     * No comment provided
     *
     * Hash: 0xEAC49841
     */
    function removeConvarChangeListener(cookie) {
        RemoveConvarChangeListener(cookie);
    }
    misc.removeConvarChangeListener = removeConvarChangeListener;
    /**
     * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
     *
     * Removes a handler for changes to a state bag.
     *
     * Hash: 0xD36BE661
     */
    function removeStateBagChangeHandler(cookie) {
        RemoveStateBagChangeHandler(cookie);
    }
    misc.removeStateBagChangeHandler = removeStateBagChangeHandler;
    /**
     * Internal function for setting a state bag value.
     *
     * Hash: 0x8D50E33A
     */
    function setStateBagValue(bagName, keyName, valueData, valueLength, replicated) {
        SetStateBagValue(bagName, keyName, valueData, valueLength, replicated);
    }
    misc.setStateBagValue = setStateBagValue;
    /**
     * No comment provided
     *
     * Hash: 0x12A330
     */
    function stateBagHasKey(bagName, key) {
        return StateBagHasKey(bagName, key);
    }
    misc.stateBagHasKey = stateBagHasKey;
    /**
     * The backing function for TriggerEvent.
     *
     * Hash: 0x91310870
     */
    function triggerEventInternal(eventName, eventPayload, payloadLength) {
        TriggerEventInternal(eventName, eventPayload, payloadLength);
    }
    misc.triggerEventInternal = triggerEventInternal;
    /**
     * Returns whether or not the currently executing event was canceled.
     *
     * Hash: 0x58382A19
     */
    function wasEventCanceled() {
        return WasEventCanceled();
    }
    misc.wasEventCanceled = wasEventCanceled;
})(misc || (misc = {}));
export var ped;
(function (ped_1) {
    /**
     * An analogue of [GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS](#\_0x27561561732A7842) that returns number of drawable variations inside a single collection instead of the total number across all collections.
     *
     * Hash: 0x310D0271
     */
    function getNumberOfCollectionDrawableVariations(ped, componentId, collection) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetNumberOfPedCollectionDrawableVariations(_ped, componentId, collection);
    }
    ped_1.getNumberOfCollectionDrawableVariations = getNumberOfCollectionDrawableVariations;
    /**
     * An analogue of [GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS](#\_0x5FAF9754E789FB47) that returns number of prop variations inside a single collection instead of the total number across all collections.
     *
     * Hash: 0x3B6A13E1
     */
    function getNumberOfCollectionPropDrawableVariations(ped, anchorPoint, collection) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetNumberOfPedCollectionPropDrawableVariations(_ped, anchorPoint, collection);
    }
    ped_1.getNumberOfCollectionPropDrawableVariations = getNumberOfCollectionPropDrawableVariations;
    /**
     * An alternative to [GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS](#\_0xA6E7F1CEB523E171) that uses local collection indexing instead of the global one.
     *
     * Hash: 0x75CAF9CC
     */
    function getNumberOfCollectionPropTextureVariations(ped, anchorPoint, collection, propIndex) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetNumberOfPedCollectionPropTextureVariations(_ped, anchorPoint, collection, propIndex);
    }
    ped_1.getNumberOfCollectionPropTextureVariations = getNumberOfCollectionPropTextureVariations;
    /**
     * An alternative to [GET_NUMBER_OF_PED_TEXTURE_VARIATIONS](#\_0x8F7156A3142A6BAD) that uses local collection indexing instead of the global one.
     *
     * Hash: 0xD2C15D7
     */
    function getNumberOfCollectionTextureVariations(ped, componentId, collection, drawableId) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetNumberOfPedCollectionTextureVariations(_ped, componentId, collection, drawableId);
    }
    ped_1.getNumberOfCollectionTextureVariations = getNumberOfCollectionTextureVariations;
    /**
     * Returns number of variation collections available for the given Ped.
     *
     * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
     *
     * `GET_PED_COLLECTIONS_COUNT` can be used together with [GET_PED_COLLECTION_NAME](#\_0xFED5D83A) to list all collections attached to Ped.
     *
     * Hash: 0x45946359
     */
    function getCollectionsCount(ped) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedCollectionsCount(_ped);
    }
    ped_1.getCollectionsCount = getCollectionsCount;
    /**
     * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B)) for the given global drawable ID. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
     *
     * Hash: 0x94EB1FE4
     */
    function getCollectionLocalIndexFromDrawable(ped, componentId, drawableId) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedCollectionLocalIndexFromDrawable(_ped, componentId, drawableId);
    }
    ped_1.getCollectionLocalIndexFromDrawable = getCollectionLocalIndexFromDrawable;
    /**
     * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17)) for the given global prop index. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
     *
     * Hash: 0xFBDB885F
     */
    function getCollectionLocalIndexFromProp(ped, anchorPoint, propIndex) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedCollectionLocalIndexFromProp(_ped, anchorPoint, propIndex);
    }
    ped_1.getCollectionLocalIndexFromProp = getCollectionLocalIndexFromProp;
    /**
     * Returns name of collection under given index for the given Ped.
     *
     * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
     *
     * `GET_PED_COLLECTION_NAME` can be used together with [GET_PED_COLLECTIONS_COUNT](#\_0x45946359) to list all collections attached to Ped.
     *
     * Hash: 0xFED5D83A
     */
    function getCollectionName(ped, index) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedCollectionName(_ped, index);
    }
    ped_1.getCollectionName = getCollectionName;
    /**
     * Gets collection name for the given global drawable ID. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) is used to get collection and local index (inside the given collection) of the drawable. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
     *
     * Hash: 0xD6BBA48B
     */
    function getCollectionNameFromDrawable(ped, componentId, drawableId) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedCollectionNameFromDrawable(_ped, componentId, drawableId);
    }
    ped_1.getCollectionNameFromDrawable = getCollectionNameFromDrawable;
    /**
     * Gets collection name for the given global prop index. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) is used to get collection and local index (inside the given collection) of the prop. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
     *
     * Hash: 0x8ED0C17
     */
    function getCollectionNameFromProp(ped, anchorPoint, propIndex) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedCollectionNameFromProp(_ped, anchorPoint, propIndex);
    }
    ped_1.getCollectionNameFromProp = getCollectionNameFromProp;
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
    function getDecorations(ped) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedDecorations(_ped);
    }
    ped_1.getDecorations = getDecorations;
    /**
     * A getter for [SET_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x95E3D6257B166CF2).
     *
     * Hash: 0xF5A904F9
     */
    function getDensityMultiplier() {
        return GetPedDensityMultiplier();
    }
    ped_1.getDensityMultiplier = getDensityMultiplier;
    /**
     * Returns global drawable index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
     *
     * Drawables are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
     *
     * If all drawables from all collections are placed into one continuous array - the global index will correspond to the index of drawable in such array. Local index is index of drawable in this array relative to the start of the given collection.
     *
     * Hash: 0x280F1FC3
     */
    function getDrawableGlobalIndexFromCollection(ped, componentId, collection, drawableId) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedDrawableGlobalIndexFromCollection(_ped, componentId, collection, drawableId);
    }
    ped_1.getDrawableGlobalIndexFromCollection = getDrawableGlobalIndexFromCollection;
    /**
     * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection local drawable index (inside [GET_PED_DRAWABLE_VARIATION_COLLECTION_NAME](#\_0xBCE0AB63) collection) instead of the global drawable index.
     *
     * Hash: 0x9970386F
     */
    function getDrawableVariationCollectionLocalIndex(ped, componentId) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedDrawableVariationCollectionLocalIndex(_ped, componentId);
    }
    ped_1.getDrawableVariationCollectionLocalIndex = getDrawableVariationCollectionLocalIndex;
    /**
     * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection name instead of the global drawable index.
     *
     * Should be used together with [GET_PED_DRAWABLE_VARIATION_COLLECTION_LOCAL_INDEX](#\_0x9970386F).
     *
     * Hash: 0xBCE0AB63
     */
    function getDrawableVariationCollectionName(ped, componentId) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedDrawableVariationCollectionName(_ped, componentId);
    }
    ped_1.getDrawableVariationCollectionName = getDrawableVariationCollectionName;
    /**
     * A getter for [\_SET_PED_EYE_COLOR](#\_0x50B56988B170AFDF). Returns -1 if fails to get.
     *
     * Hash: 0xA47B860F
     */
    function getEyeColor(ped) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedEyeColor(_ped);
    }
    ped_1.getEyeColor = getEyeColor;
    /**
     * A getter for [\_SET_PED_FACE_FEATURE](#\_0x71A5C1DBA060049E). Returns 0.0 if fails to get.
     *
     * Hash: 0xBA352ADD
     */
    function getFaceFeature(ped, index) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedFaceFeature(_ped, index);
    }
    ped_1.getFaceFeature = getFaceFeature;
    /**
     * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
     *
     * Hash: 0xA3EA2893
     */
    function getHairColor(ped) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedHairColor(_ped);
    }
    ped_1.getHairColor = getHairColor;
    /**
     * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
     *
     * Hash: 0x4B087305
     */
    function getHairHighlightColor(ped) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedHairHighlightColor(_ped);
    }
    ped_1.getHairHighlightColor = getHairHighlightColor;
    /**
     * A getter for [SET_PED_HEAD_OVERLAY](#\_0x48F44967FA05CC1E) and [\_SET_PED_HEAD_OVERLAY_COLOR](#\_0x497BF74A7B9CB952) natives.
     *
     * Hash: 0xC46EE605
     */
    function getHeadOverlayData(ped, index) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedHeadOverlayData(_ped, index);
    }
    ped_1.getHeadOverlayData = getHeadOverlayData;
    /**
     * Gets a ped model's health config.
     *
     * Hash: 0xF71542F7
     */
    function getModelHealthConfig(modelHash) {
        if (typeof modelHash === 'string')
            modelHash = game.getHashKey(modelHash);
        return GetPedModelHealthConfig(modelHash);
    }
    ped_1.getModelHealthConfig = getModelHealthConfig;
    /**
     * Gets a ped model's personality type.
     *
     * Hash: 0xFE08CAD6
     */
    function getModelPersonality(modelHash) {
        if (typeof modelHash === 'string')
            modelHash = game.getHashKey(modelHash);
        return GetPedModelPersonality(modelHash);
    }
    ped_1.getModelPersonality = getModelPersonality;
    /**
     * No comment provided
     *
     * Hash: 0x69E81E3D
     */
    function getMovementClipset(ped) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedMovementClipset(_ped);
    }
    ped_1.getMovementClipset = getMovementClipset;
    /**
     * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection local prop index (inside [GET_PED_PROP_COLLECTION_NAME](#\_0x6B5653E4) collection) instead of the global prop index.
     *
     * Hash: 0xCD420AD1
     */
    function getPropCollectionLocalIndex(ped, anchorPoint) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedPropCollectionLocalIndex(_ped, anchorPoint);
    }
    ped_1.getPropCollectionLocalIndex = getPropCollectionLocalIndex;
    /**
     * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection name instead of the global drawable index.
     *
     * Should be used together with [GET_PED_PROP_COLLECTION_LOCAL_INDEX](#\_0xCD420AD1).
     *
     * Hash: 0x6B5653E4
     */
    function getPropCollectionName(ped, anchorPoint) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedPropCollectionName(_ped, anchorPoint);
    }
    ped_1.getPropCollectionName = getPropCollectionName;
    /**
     * Returns global prop index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
     *
     * Props are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
     *
     * If all props from all collections are placed into one continuous array - the global index will correspond to the index of the prop in such array. Local index is index of the prop in this array relative to the start of the given collection.
     *
     * Hash: 0x2CB45CDC
     */
    function getPropGlobalIndexFromCollection(ped, anchorPoint, collection, propIndex) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedPropGlobalIndexFromCollection(_ped, anchorPoint, collection, propIndex);
    }
    ped_1.getPropGlobalIndexFromCollection = getPropGlobalIndexFromCollection;
    /**
     * A getter for [SET_PED_SWEAT](#\_0x27B0405F59637D1F).
     *
     * Hash: 0x44B91E94
     */
    function getSweat(ped) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedSweat(_ped);
    }
    ped_1.getSweat = getSweat;
    /**
     * An alternative to [IS_PED_COMPONENT_VARIATION_GEN9\_EXCLUSIVE](#\_0xC767B581) that uses local collection indexing instead of the global one.
     *
     * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
     *
     * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
     *
     * Hash: 0x33B2AFA2
     */
    function isCollectionComponentVariationGen9Exclusive(ped, componentId, collection, drawableId) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return IsPedCollectionComponentVariationGen9Exclusive(_ped, componentId, collection, drawableId);
    }
    ped_1.isCollectionComponentVariationGen9Exclusive = isCollectionComponentVariationGen9Exclusive;
    /**
     * An alternative to [IS_PED_COMPONENT_VARIATION_VALID](#\_0xE825F6B6CEA7671D) that uses local collection indexing instead of the global one.
     *
     * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
     *
     * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
     *
     * Hash: 0xCA63A52A
     */
    function isCollectionComponentVariationValid(ped, componentId, collection, drawableId, textureId) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return IsPedCollectionComponentVariationValid(_ped, componentId, collection, drawableId, textureId);
    }
    ped_1.isCollectionComponentVariationValid = isCollectionComponentVariationValid;
    /**
     * No comment provided
     *
     * Hash: 0xC767B581
     */
    function isComponentVariationGen9Exclusive(ped, componentId, drawableId) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return IsPedComponentVariationGen9Exclusive(_ped, componentId, drawableId);
    }
    ped_1.isComponentVariationGen9Exclusive = isComponentVariationGen9Exclusive;
    /**
     * Sets whether peds can stand on top of *all* vehicles without falling off.
     *
     * Note this flag is not replicated automatically, you will have to manually do so.
     *
     * Hash: 0x90A9E0B2
     */
    function overridesCanStandOnTopFlag(flag) {
        OverridePedsCanStandOnTopFlag(flag);
    }
    ped_1.overridesCanStandOnTopFlag = overridesCanStandOnTopFlag;
    /**
     * Allows the bypassing of default game behavior that prevents the use of [SET_PED_DRIVE_BY_CLIPSET_OVERRIDE](#\_0xED34AB6C5CB36520) in certain scenarios to avoid clipping issues (e.g., when there is more than one Ped in a vehicle).
     *
     * Note: This flag and the overridden clipset are not replicated values and require synchronization through user scripts. Additionally, current game behavior also restricts applying this clipset locally when in first-person mode and will require a temporary workaround.
     *
     * Hash: 0xB14F8EAD
     */
    function overridesUseDefaultDriveByClipset(flag) {
        OverridePedsUseDefaultDriveByClipset(flag);
    }
    ped_1.overridesUseDefaultDriveByClipset = overridesUseDefaultDriveByClipset;
    /**
     * Restores an overridden ped model personality type to the default value.
     *
     * Hash: 0x79A12861
     */
    function resetModelPersonality(modelHash) {
        if (typeof modelHash === 'string')
            modelHash = game.getHashKey(modelHash);
        ResetPedModelPersonality(modelHash);
    }
    ped_1.resetModelPersonality = resetModelPersonality;
    /**
     * An alternative to [SET_PED_COMPONENT_VARIATION](#\_0x262B14F48D29DE80) that uses local collection indexing instead of the global one.
     *
     * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
     *
     * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
     *
     * Hash: 0x88711BBA
     */
    function setCollectionComponentVariation(ped, componentId, collection, drawableId, textureId, paletteId) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        SetPedCollectionComponentVariation(_ped, componentId, collection, drawableId, textureId, paletteId);
    }
    ped_1.setCollectionComponentVariation = setCollectionComponentVariation;
    /**
     * An alternative to [SET_PED_PRELOAD_PROP_DATA](#\_0x2B16A3BFF1FBCE49) that uses local collection indexing instead of the global one.
     *
     * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
     *
     * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
     *
     * Hash: 0x14B5BBE0
     */
    function setCollectionPreloadPropData(ped, anchorPoint, collection, propIndex, textureId) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        SetPedCollectionPreloadPropData(_ped, anchorPoint, collection, propIndex, textureId);
    }
    ped_1.setCollectionPreloadPropData = setCollectionPreloadPropData;
    /**
     * An alternative to [SET_PED_PRELOAD_VARIATION_DATA](#\_0x39D55A620FCB6A3A) that uses local collection indexing instead of the global one.
     *
     * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
     *
     * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
     *
     * Hash: 0x3EC75558
     */
    function setCollectionPreloadVariationData(ped, componentId, collection, drawableId, textureId) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        SetPedCollectionPreloadVariationData(_ped, componentId, collection, drawableId, textureId);
    }
    ped_1.setCollectionPreloadVariationData = setCollectionPreloadVariationData;
    /**
     * An alternative to [SET_PED_PROP_INDEX](#\_0x93376B65A266EB5F) that uses local collection indexing instead of the global one.
     *
     * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
     *
     * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
     *
     * Hash: 0x75240BCB
     */
    function setCollectionPropIndex(ped, anchorPoint, collection, propIndex, textureId, attach) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        SetPedCollectionPropIndex(_ped, anchorPoint, collection, propIndex, textureId, attach);
    }
    ped_1.setCollectionPropIndex = setCollectionPropIndex;
    /**
     * Override the limits on the number and types of melee combatants. The game is limited to at most ten combatants among the three types: primary, secondary, and observers.
     *
     * This native infers the number of observers based on the primary and secondary counts.
     *
     * Hash: 0x8E51EC29
     */
    function setMeleeCombatLimits(primaryCount, secondaryCount, populationPedCount) {
        SetPedMeleeCombatLimits(primaryCount, secondaryCount, populationPedCount);
    }
    ped_1.setMeleeCombatLimits = setMeleeCombatLimits;
    /**
     * Sets a ped model's health config.
     * Takes effect only after setting player model with `SET_PLAYER_MODEL`.
     *
     * Hash: 0xAF12A05D
     */
    function setModelHealthConfig(modelHash, configName) {
        if (typeof modelHash === 'string')
            modelHash = game.getHashKey(modelHash);
        SetPedModelHealthConfig(modelHash, configName);
    }
    ped_1.setModelHealthConfig = setModelHealthConfig;
    /**
     * Overrides a ped model personality type.
     *
     * Hash: 0x46F6B38B
     */
    function setModelPersonality(modelHash, personalityHash) {
        if (typeof modelHash === 'string')
            modelHash = game.getHashKey(modelHash);
        if (typeof personalityHash === 'string')
            personalityHash = game.getHashKey(personalityHash);
        SetPedModelPersonality(modelHash, personalityHash);
    }
    ped_1.setModelPersonality = setModelPersonality;
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
    function setTurningThresholds(min, max) {
        SetPedTurningThresholds(min, max);
    }
    ped_1.setTurningThresholds = setTurningThresholds;
    /**
     * Returns the bone matrix of the specified bone id. usefull for entity attachment
     *
     * Hash: 0x9C5E7C9C
     */
    function getBoneMatrix(ped, boneId) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetPedBoneMatrix(_ped, boneId);
    }
    ped_1.getBoneMatrix = getBoneMatrix;
})(ped || (ped = {}));
export var physics;
(function (physics) {
    /**
     * Returns all rope handles. The data returned adheres to the following layout:
     *
     * ```
     * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
     * ```
     *
     * Hash: 0x760A2D67
     */
    function getAllRopes() {
        return GetAllRopes();
    }
    physics.getAllRopes = getAllRopes;
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
    function getRopeFlags(rope) {
        return GetRopeFlags(rope);
    }
    physics.getRopeFlags = getRopeFlags;
    /**
     * No comment provided
     *
     * Hash: 0x66D70EA3
     */
    function getRopeLengthChangeRate(rope) {
        return GetRopeLengthChangeRate(rope);
    }
    physics.getRopeLengthChangeRate = getRopeLengthChangeRate;
    /**
     * No comment provided
     *
     * Hash: 0xF341E6CA
     */
    function getRopeTimeMultiplier(rope) {
        return GetRopeTimeMultiplier(rope);
    }
    physics.getRopeTimeMultiplier = getRopeTimeMultiplier;
    /**
     * No comment provided
     *
     * Hash: 0x2AB2E0F6
     */
    function getRopeUpdateOrder(rope) {
        return GetRopeUpdateOrder(rope);
    }
    physics.getRopeUpdateOrder = getRopeUpdateOrder;
    /**
     * Registers a custom rope data with the game. For guidance on what these values should be use common:/data/ropedata.xml as a reference.
     * Returns a rope type which can be passed into [ADD_ROPE](#\_0xE832D760399EB220) to use a custom rope design.
     * Once a rope data is registered it can be used indefinitely and you should take caution not too register too many as to exceed the games limit.
     *
     * Hash: 0xF213AE8D
     */
    function registerRopeData(numSections, radius, diffuseTextureName, normalMapName, distanceMappingScale, uvScaleX, uvScaleY, specularFresnel, specularFalloff, specularIntensity, bumpiness, color) {
        return RegisterRopeData(numSections, radius, diffuseTextureName, normalMapName, distanceMappingScale, uvScaleX, uvScaleY, specularFresnel, specularFalloff, specularIntensity, bumpiness, color);
    }
    physics.registerRopeData = registerRopeData;
    /**
     * Resets parameters which is used by the game for checking is ped needs to fly through windscreen after a crash to default values.
     *
     * Hash: 0x6D712937
     */
    function resetFlyThroughWindscreenParams() {
        ResetFlyThroughWindscreenParams();
    }
    physics.resetFlyThroughWindscreenParams = resetFlyThroughWindscreenParams;
    /**
     * Sets some in-game parameters which is used for checks is ped needs to fly through windscreen after a crash.
     *
     * Hash: 0x4D3118ED
     */
    function setFlyThroughWindscreenParams(vehMinSpeed, unkMinSpeed, unkModifier, minDamage) {
        return SetFlyThroughWindscreenParams(vehMinSpeed, unkMinSpeed, unkModifier, minDamage);
    }
    physics.setFlyThroughWindscreenParams = setFlyThroughWindscreenParams;
    /**
     * Toggles whether the usage of [ADD_ROPE](#\_0xE832D760399EB220) should create an underlying CNetworkRopeWorldStateData. By default this is set to false.
     *
     * Hash: 0xE62FC73
     */
    function setRopesCreateNetworkWorldState(shouldCreate) {
        SetRopesCreateNetworkWorldState(shouldCreate);
    }
    physics.setRopesCreateNetworkWorldState = setRopesCreateNetworkWorldState;
    /**
     * Set's the ropes length change rate, which is the speed that rope should wind if started.
     *
     * Hash: 0x69B680A7
     */
    function setRopeLengthChangeRate(rope, lengthChangeRate) {
        SetRopeLengthChangeRate(rope, lengthChangeRate);
    }
    physics.setRopeLengthChangeRate = setRopeLengthChangeRate;
})(physics || (physics = {}));
export var player;
(function (player_1) {
    /**
     * Unlike [GET_PLAYER_INVINCIBLE](#\_0xB721981B2B939E07) this native gets both [SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED](#\_0x6BC97F4F4BB3C04B) and [SET_PLAYER_INVINCIBLE](#\_0x239528EACDC3E7DE) invincibility state.
     *
     * Hash: 0xF2E3912B
     */
    function getInvincible2(player) {
        const _player = player instanceof IPlayer ? player.localId() : player;
        return GetPlayerInvincible2(_player);
    }
    player_1.getInvincible2 = getInvincible2;
    /**
     * No comment provided
     *
     * Hash: 0xD014AB79
     */
    function getMaxStamina(playerId) {
        const _playerId = playerId instanceof IPlayer ? playerId.localId() : playerId;
        return GetPlayerMaxStamina(_playerId);
    }
    player_1.getMaxStamina = getMaxStamina;
    /**
     * A getter for [SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER](#\_0xAE540335B4ABC4E2).
     *
     * Hash: 0x27E94EF8
     */
    function getMeleeWeaponDefenseModifier(playerId) {
        const _playerId = playerId instanceof IPlayer ? playerId.localId() : playerId;
        return GetPlayerMeleeWeaponDefenseModifier(_playerId);
    }
    player_1.getMeleeWeaponDefenseModifier = getMeleeWeaponDefenseModifier;
    /**
     * No comment provided
     *
     * Hash: 0xE415EC5C
     */
    function getStamina(playerId) {
        const _playerId = playerId instanceof IPlayer ? playerId.localId() : playerId;
        return GetPlayerStamina(_playerId);
    }
    player_1.getStamina = getStamina;
    /**
     * A getter for [SET_PLAYER_VEHICLE_DAMAGE_MODIFIER](#\_0xA50E117CDDF82F0C).
     *
     * Hash: 0x78F27B1F
     */
    function getVehicleDamageModifier(playerId) {
        const _playerId = playerId instanceof IPlayer ? playerId.localId() : playerId;
        return GetPlayerVehicleDamageModifier(_playerId);
    }
    player_1.getVehicleDamageModifier = getVehicleDamageModifier;
    /**
     * A getter for [SET_PLAYER_VEHICLE_DEFENSE_MODIFIER](#\_0x4C60E6EFDAFF2462).
     *
     * Hash: 0x8326E7CD
     */
    function getVehicleDefenseModifier(playerId) {
        const _playerId = playerId instanceof IPlayer ? playerId.localId() : playerId;
        return GetPlayerVehicleDefenseModifier(_playerId);
    }
    player_1.getVehicleDefenseModifier = getVehicleDefenseModifier;
    /**
     * No comment provided
     *
     * Hash: 0x35594F67
     */
    function setMaxStamina(playerId, maxStamina) {
        const _playerId = playerId instanceof IPlayer ? playerId.localId() : playerId;
        return SetPlayerMaxStamina(_playerId, maxStamina);
    }
    player_1.setMaxStamina = setMaxStamina;
    /**
     * No comment provided
     *
     * Hash: 0xA9EC16C7
     */
    function setStamina(playerId, stamina) {
        const _playerId = playerId instanceof IPlayer ? playerId.localId() : playerId;
        return SetPlayerStamina(_playerId, stamina);
    }
    player_1.setStamina = setStamina;
    /**
     * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
     *
     * Hash: 0x8689A825
     */
    function getMeleeWeaponDamageModifier(playerId) {
        const _playerId = playerId instanceof IPlayer ? playerId.localId() : playerId;
        return GetPlayerMeleeWeaponDamageModifier(_playerId);
    }
    player_1.getMeleeWeaponDamageModifier = getMeleeWeaponDamageModifier;
    /**
     * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
     *
     * Hash: 0x2A3D7CDA
     */
    function getWeaponDamageModifier(playerId) {
        const _playerId = playerId instanceof IPlayer ? playerId.localId() : playerId;
        return GetPlayerWeaponDamageModifier(_playerId);
    }
    player_1.getWeaponDamageModifier = getWeaponDamageModifier;
    /**
     * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
     *
     * Hash: 0xF1543251
     */
    function getWeaponDefenseModifier(playerId) {
        const _playerId = playerId instanceof IPlayer ? playerId.localId() : playerId;
        return GetPlayerWeaponDefenseModifier(_playerId);
    }
    player_1.getWeaponDefenseModifier = getWeaponDefenseModifier;
    /**
     * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
     *
     * Hash: 0x986B65FF
     */
    function getWeaponDefenseModifier2(playerId) {
        const _playerId = playerId instanceof IPlayer ? playerId.localId() : playerId;
        return GetPlayerWeaponDefenseModifier2(_playerId);
    }
    player_1.getWeaponDefenseModifier2 = getWeaponDefenseModifier2;
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
    function getActives() {
        return GetActivePlayers();
    }
    player_1.getActives = getActives;
    /**
     * Gets a local client's Player ID from its server ID counterpart, assuming the passed `serverId` exists on the client.
     *
     * If no matching client is found, or an invalid value is passed over as the `serverId` native's parameter, the native result will be `-1`.
     *
     * It's worth noting that this native method can only retrieve information about clients that are culled to the connected client.
     *
     * Hash: 0x344EA166
     */
    function getFromServerId(serverId) {
        return GetPlayerFromServerId(serverId);
    }
    player_1.getFromServerId = getFromServerId;
    /**
     * No comment provided
     *
     * Hash: 0x4D97BCC7
     */
    function getServerId(player) {
        const _player = player instanceof IPlayer ? player.localId() : player;
        return GetPlayerServerId(_player);
    }
    player_1.getServerId = getServerId;
    /**
     * the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.
     * This function doesn't need to be called every frame, it works like a switcher.
     *
     * Hash: 0xFC02CAF6
     */
    function setTalkingOverride(player, state) {
        const _player = player instanceof IPlayer ? player.localId() : player;
        SetPlayerTalkingOverride(_player, state);
    }
    player_1.setTalkingOverride = setTalkingOverride;
    /**
     * On the server this will return the players source, on the client it will return the player handle.
     *
     * Hash: 0xA56135E0
     */
    function getFromStateBagName(bagName) {
        return GetPlayerFromStateBagName(bagName);
    }
    player_1.getFromStateBagName = getFromStateBagName;
})(player || (player = {}));
export var streaming;
(function (streaming) {
    /**
     * No comment provided
     *
     * Hash: 0x322B1192
     */
    function getInteriorEntitiesExtents(interiorId) {
        return GetInteriorEntitiesExtents(interiorId);
    }
    streaming.getInteriorEntitiesExtents = getInteriorEntitiesExtents;
    /**
     * No comment provided
     *
     * Hash: 0xF772BB2C
     */
    function getInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex) {
        return GetInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex);
    }
    streaming.getInteriorPortalCornerPosition = getInteriorPortalCornerPosition;
    /**
     * No comment provided
     *
     * Hash: 0xD05BB8B1
     */
    function getInteriorPortalCount(interiorId) {
        return GetInteriorPortalCount(interiorId);
    }
    streaming.getInteriorPortalCount = getInteriorPortalCount;
    /**
     * No comment provided
     *
     * Hash: 0x9A0E1700
     */
    function getInteriorPortalEntityArchetype(interiorId, portalIndex, entityIndex) {
        return GetInteriorPortalEntityArchetype(interiorId, portalIndex, entityIndex);
    }
    streaming.getInteriorPortalEntityArchetype = getInteriorPortalEntityArchetype;
    /**
     * No comment provided
     *
     * Hash: 0xC68021B
     */
    function getInteriorPortalEntityCount(interiorId, portalIndex) {
        return GetInteriorPortalEntityCount(interiorId, portalIndex);
    }
    streaming.getInteriorPortalEntityCount = getInteriorPortalEntityCount;
    /**
     * No comment provided
     *
     * Hash: 0x9DA2E811
     */
    function getInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex) {
        return GetInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex);
    }
    streaming.getInteriorPortalEntityFlag = getInteriorPortalEntityFlag;
    /**
     * No comment provided
     *
     * Hash: 0x9B7AB83C
     */
    function getInteriorPortalEntityPosition(interiorId, portalIndex, entityIndex) {
        return GetInteriorPortalEntityPosition(interiorId, portalIndex, entityIndex);
    }
    streaming.getInteriorPortalEntityPosition = getInteriorPortalEntityPosition;
    /**
     * No comment provided
     *
     * Hash: 0x9F9CEB63
     */
    function getInteriorPortalEntityRotation(interiorId, portalIndex, entityIndex) {
        return GetInteriorPortalEntityRotation(interiorId, portalIndex, entityIndex);
    }
    streaming.getInteriorPortalEntityRotation = getInteriorPortalEntityRotation;
    /**
     * No comment provided
     *
     * Hash: 0xC74DA47C
     */
    function getInteriorPortalFlag(interiorId, portalIndex) {
        return GetInteriorPortalFlag(interiorId, portalIndex);
    }
    streaming.getInteriorPortalFlag = getInteriorPortalFlag;
    /**
     * No comment provided
     *
     * Hash: 0xAA9C141D
     */
    function getInteriorPortalRoomFrom(interiorId, portalIndex) {
        return GetInteriorPortalRoomFrom(interiorId, portalIndex);
    }
    streaming.getInteriorPortalRoomFrom = getInteriorPortalRoomFrom;
    /**
     * No comment provided
     *
     * Hash: 0x3F47F0E8
     */
    function getInteriorPortalRoomTo(interiorId, portalIndex) {
        return GetInteriorPortalRoomTo(interiorId, portalIndex);
    }
    streaming.getInteriorPortalRoomTo = getInteriorPortalRoomTo;
    /**
     * No comment provided
     *
     * Hash: 0x77A435B0
     */
    function getInteriorPosition(interiorId) {
        return GetInteriorPosition(interiorId);
    }
    streaming.getInteriorPosition = getInteriorPosition;
    /**
     * No comment provided
     *
     * Hash: 0xA2737C2C
     */
    function getInteriorRoomCount(interiorId) {
        return GetInteriorRoomCount(interiorId);
    }
    streaming.getInteriorRoomCount = getInteriorRoomCount;
    /**
     * No comment provided
     *
     * Hash: 0xF9E795DD
     */
    function getInteriorRoomExtents(interiorId, roomIndex) {
        return GetInteriorRoomExtents(interiorId, roomIndex);
    }
    streaming.getInteriorRoomExtents = getInteriorRoomExtents;
    /**
     * No comment provided
     *
     * Hash: 0x6B7AF743
     */
    function getInteriorRoomFlag(interiorId, roomIndex) {
        return GetInteriorRoomFlag(interiorId, roomIndex);
    }
    streaming.getInteriorRoomFlag = getInteriorRoomFlag;
    /**
     * No comment provided
     *
     * Hash: 0xE0EE05F8
     */
    function getInteriorRoomIndexByHash(interiorId, roomHash) {
        return GetInteriorRoomIndexByHash(interiorId, roomHash);
    }
    streaming.getInteriorRoomIndexByHash = getInteriorRoomIndexByHash;
    /**
     * No comment provided
     *
     * Hash: 0x11755DF2
     */
    function getInteriorRoomName(interiorId, roomIndex) {
        return GetInteriorRoomName(interiorId, roomIndex);
    }
    streaming.getInteriorRoomName = getInteriorRoomName;
    /**
     * No comment provided
     *
     * Hash: 0x82BA3F88
     */
    function getInteriorRoomTimecycle(interiorId, roomIndex) {
        return GetInteriorRoomTimecycle(interiorId, roomIndex);
    }
    streaming.getInteriorRoomTimecycle = getInteriorRoomTimecycle;
    /**
     * No comment provided
     *
     * Hash: 0x5A039998
     */
    function getInteriorRotation(interiorId) {
        return GetInteriorRotation(interiorId);
    }
    streaming.getInteriorRotation = getInteriorRotation;
    /**
     * No comment provided
     *
     * Hash: 0x87F43553
     */
    function setInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex, pos) {
        SetInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex, pos.x, pos.y, pos.z);
    }
    streaming.setInteriorPortalCornerPosition = setInteriorPortalCornerPosition;
    /**
     * No comment provided
     *
     * Hash: 0x8349CD76
     */
    function setInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex, flag) {
        SetInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex, flag);
    }
    streaming.setInteriorPortalEntityFlag = setInteriorPortalEntityFlag;
    /**
     * No comment provided
     *
     * Hash: 0x88B2355E
     */
    function setInteriorPortalFlag(interiorId, portalIndex, flag) {
        SetInteriorPortalFlag(interiorId, portalIndex, flag);
    }
    streaming.setInteriorPortalFlag = setInteriorPortalFlag;
    /**
     * No comment provided
     *
     * Hash: 0x298FC783
     */
    function setInteriorPortalRoomFrom(interiorId, portalIndex, roomFrom) {
        SetInteriorPortalRoomFrom(interiorId, portalIndex, roomFrom);
    }
    streaming.setInteriorPortalRoomFrom = setInteriorPortalRoomFrom;
    /**
     * No comment provided
     *
     * Hash: 0x58982680
     */
    function setInteriorPortalRoomTo(interiorId, portalIndex, roomTo) {
        SetInteriorPortalRoomTo(interiorId, portalIndex, roomTo);
    }
    streaming.setInteriorPortalRoomTo = setInteriorPortalRoomTo;
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
    function setInteriorProbeLength(probeLength) {
        SetInteriorProbeLength(probeLength);
    }
    streaming.setInteriorProbeLength = setInteriorProbeLength;
    /**
     * No comment provided
     *
     * Hash: 0x4FDCF51E
     */
    function setInteriorRoomExtents(interiorId, roomIndex, bbMinX, bbMinY, bbMinZ, bbMaxX, bbMaxY, bbMaxZ) {
        SetInteriorRoomExtents(interiorId, roomIndex, bbMinX, bbMinY, bbMinZ, bbMaxX, bbMaxY, bbMaxZ);
    }
    streaming.setInteriorRoomExtents = setInteriorRoomExtents;
    /**
     * No comment provided
     *
     * Hash: 0x5518D60B
     */
    function setInteriorRoomFlag(interiorId, roomIndex, flag) {
        SetInteriorRoomFlag(interiorId, roomIndex, flag);
    }
    streaming.setInteriorRoomFlag = setInteriorRoomFlag;
    /**
     * No comment provided
     *
     * Hash: 0x31C9A848
     */
    function setInteriorRoomTimecycle(interiorId, roomIndex, timecycleHash) {
        SetInteriorRoomTimecycle(interiorId, roomIndex, timecycleHash);
    }
    streaming.setInteriorRoomTimecycle = setInteriorRoomTimecycle;
    /**
     * Transiently updates the entity with the specified mapdata index and entity index.
     * This function supports SDK infrastructure and is not intended to be used directly from your code.
     *
     * Hash: 0xFC52CB91
     */
    function updateMapdataEntity(mapdata, entity, entityDef) {
        const _entityDef = entityDef instanceof IObject ? entityDef.handle() : entityDef;
        UpdateMapdataEntity(mapdata, entity, _entityDef);
    }
    streaming.updateMapdataEntity = updateMapdataEntity;
    /**
     * No comment provided
     *
     * Hash: 0x32CA01C3
     */
    function addTextEntry(entryKey, entryText) {
        AddTextEntry(entryKey, entryText);
    }
    streaming.addTextEntry = addTextEntry;
    /**
     * No comment provided
     *
     * Hash: 0x289DA860
     */
    function addTextEntryByHash(entryKey, entryText) {
        if (typeof entryKey === 'string')
            entryKey = game.getHashKey(entryKey);
        AddTextEntryByHash(entryKey, entryText);
    }
    streaming.addTextEntryByHash = addTextEntryByHash;
})(streaming || (streaming = {}));
export var track;
(function (track_1) {
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
    function getAllJunctions() {
        return GetAllTrackJunctions();
    }
    track_1.getAllJunctions = getAllJunctions;
    /**
     * Get all track nodes and their track ids within the radius of the specified coordinates.
     *
     * Hash: 0x59FC24A7
     */
    function getClosestNodes(position, radius) {
        return GetClosestTrackNodes(position, radius);
    }
    track_1.getClosestNodes = getClosestNodes;
    /**
     * No comment provided
     *
     * Hash: 0xBF482A5E
     */
    function getBrakingDistance(track) {
        return GetTrackBrakingDistance(track);
    }
    track_1.getBrakingDistance = getBrakingDistance;
    /**
     * No comment provided
     *
     * Hash: 0x34EE2BF3
     */
    function getMaxSpeed(track) {
        return GetTrackMaxSpeed(track);
    }
    track_1.getMaxSpeed = getMaxSpeed;
    /**
     * Gets the coordinates of a specific track node.
     *
     * Hash: 0x1628548E
     */
    function getNodeCoords(trackIndex, trackNode) {
        return GetTrackNodeCoords(trackIndex, trackNode);
    }
    track_1.getNodeCoords = getNodeCoords;
    /**
     * Gets the specified tracks node count.
     *
     * Hash: 0x896A0C11
     */
    function getNodeCount(trackIndex) {
        return GetTrackNodeCount(trackIndex);
    }
    track_1.getNodeCount = getNodeCount;
    /**
     * Getter for [SET_TRACK_ENABLED](#\_0x4B41E84C)
     *
     * Hash: 0x31E695CB
     */
    function isEnabled(track) {
        return IsTrackEnabled(track);
    }
    track_1.isEnabled = isEnabled;
    /**
     * Getter for [SWITCH_TRAIN_TRACK](#\_0xFD813BB7DB977F20). Determines if ambient trains are able to spawn on this track.
     *
     * Hash: 0xE0C53765
     */
    function isSwitchedOff(track) {
        return IsTrackSwitchedOff(track);
    }
    track_1.isSwitchedOff = isSwitchedOff;
    /**
     * Registers a track junction that when enabled will cause a train on the defined trackIndex, node and direction to change its current track index and begin traveling on the new node
     *
     * Hash: 0x35F743B5
     */
    function registerJunction(trackIndex, trackNode, newIndex, newNode, direction) {
        return RegisterTrackJunction(trackIndex, trackNode, newIndex, newNode, direction);
    }
    track_1.registerJunction = registerJunction;
    /**
     * Removes the specified track junction.
     *
     * Hash: 0x4F3D2B2A
     */
    function removeJunction(junctionIndex) {
        return RemoveTrackJunction(junctionIndex);
    }
    track_1.removeJunction = removeJunction;
    /**
     * Sets the braking distance of the track. Used by trains to determine the point to slow down when entering a station.
     *
     * Hash: 0x77EB78D0
     */
    function setBrakingDistance(track, brakingDistance) {
        SetTrackBrakingDistance(track, brakingDistance);
    }
    track_1.setBrakingDistance = setBrakingDistance;
    /**
     * Toggles the track being active. If disabled mission trains will not be able to spawn on this track and will look for the next closest track to spawn
     *
     * Hash: 0x4B41E84C
     */
    function setEnabled(track, enabled) {
        SetTrackEnabled(track, enabled);
    }
    track_1.setEnabled = setEnabled;
    /**
     * Sets the state of a track junction.
     *
     * Hash: 0x537B449D
     */
    function setJunctionActive(junctionIndex, state) {
        return SetTrackJunctionActive(junctionIndex, state);
    }
    track_1.setJunctionActive = setJunctionActive;
    /**
     * Sets the max speed for the train tracks. Used by ambient trains and for station calculations
     *
     * Hash: 0x37BFC732
     */
    function setMaxSpeed(track, newSpeed) {
        SetTrackMaxSpeed(track, newSpeed);
    }
    track_1.setMaxSpeed = setMaxSpeed;
})(track || (track = {}));
export var vehicle;
(function (vehicle_1) {
    /**
     * Break off vehicle wheel by index. The `leaveDebrisTrail` flag requires `putOnFire` to be true.
     *
     * Hash: 0xA274CADB
     */
    function breakOffWheel(vehicle, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag, putOnFire) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        BreakOffVehicleWheel(_vehicle, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag, putOnFire);
    }
    vehicle_1.breakOffWheel = breakOffWheel;
    /**
     * Removes vehicle xenon lights custom RGB color.
     *
     * Hash: 0x2867ED8C
     */
    function clearXenonLightsCustomColor(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        ClearVehicleXenonLightsCustomColor(_vehicle);
    }
    vehicle_1.clearXenonLightsCustomColor = clearXenonLightsCustomColor;
    /**
     * Disables the game's afk camera that starts panning around after 30 seconds of inactivity(While riding in a car as a passenger)
     *
     * Hash: 0x5C140555
     */
    function disablePassengerIdleCamera(state) {
        DisableVehiclePassengerIdleCamera(state);
    }
    vehicle_1.disablePassengerIdleCamera = disablePassengerIdleCamera;
    /**
     * Checks whether the vehicle consumes fuel. The check is done based on petrol tank volume and vehicle type. Bicycles and vehicles with petrol tank volume equal to zero (only bicycles by default) do not use fuel. All other vehicles do.
     *
     * You can customize petrol tank volume using [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolTankVolume`.
     *
     * Hash: 0xEF30A696
     */
    function doesUseFuel(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return DoesVehicleUseFuel(_vehicle);
    }
    vehicle_1.doesUseFuel = doesUseFuel;
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
    function getAllModels() {
        return GetAllVehicleModels();
    }
    vehicle_1.getAllModels = getAllModels;
    /**
     * A getter for [SET_AMBIENT_VEHICLE_RANGE_MULTIPLIER_THIS_FRAME](#\_0x90B6DA738A9A25DA).
     *
     * Hash: 0x667EC929
     */
    function getAmbientRangeMultiplier() {
        return GetAmbientVehicleRangeMultiplier();
    }
    vehicle_1.getAmbientRangeMultiplier = getAmbientRangeMultiplier;
    /**
     * No comment provided
     *
     * Hash: 0xE015E854
     */
    function getTrainCurrentTrackNode(train) {
        const _train = train instanceof IVehicle ? train.localId() : train;
        return GetTrainCurrentTrackNode(_train);
    }
    vehicle_1.getTrainCurrentTrackNode = getTrainCurrentTrackNode;
    /**
     * Gets the door count for the specified train.
     *
     * Hash: 0x99974721
     */
    function getTrainDoorCount(train) {
        const _train = train instanceof IVehicle ? train.localId() : train;
        return GetTrainDoorCount(_train);
    }
    vehicle_1.getTrainDoorCount = getTrainDoorCount;
    /**
     * Gets the ratio that a door is open for on a train.
     *
     * Hash: 0x40B16551
     */
    function getTrainDoorOpenRatio(train, doorIndex) {
        const _train = train instanceof IVehicle ? train.localId() : train;
        return GetTrainDoorOpenRatio(_train, doorIndex);
    }
    vehicle_1.getTrainDoorOpenRatio = getTrainDoorOpenRatio;
    /**
     * Gets the speed the train is currently going.
     *
     * Hash: 0x428668B7
     */
    function getTrainSpeed(train) {
        const _train = train instanceof IVehicle ? train.localId() : train;
        return GetTrainSpeed(_train);
    }
    vehicle_1.getTrainSpeed = getTrainSpeed;
    /**
     * No comment provided
     *
     * Hash: 0xC62AAC98
     */
    function getAlarmTimeLeft(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleAlarmTimeLeft(_vehicle);
    }
    vehicle_1.getAlarmTimeLeft = getAlarmTimeLeft;
    /**
     * A getter for [SET_VEHICLE_CHEAT_POWER_INCREASE](#\_0xB59E4BD37AE292DB).
     *
     * Hash: 0xC3C93F28
     */
    function getCheatPowerIncrease(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleCheatPowerIncrease(_vehicle);
    }
    vehicle_1.getCheatPowerIncrease = getCheatPowerIncrease;
    /**
     * No comment provided
     *
     * Hash: 0x1DAD4583
     */
    function getClutch(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleClutch(_vehicle);
    }
    vehicle_1.getClutch = getClutch;
    /**
     * No comment provided
     *
     * Hash: 0xB4F4E566
     */
    function getCurrentGear(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleCurrentGear(_vehicle);
    }
    vehicle_1.getCurrentGear = getCurrentGear;
    /**
     * No comment provided
     *
     * Hash: 0xE7B12B54
     */
    function getCurrentRpm(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleCurrentRpm(_vehicle);
    }
    vehicle_1.getCurrentRpm = getCurrentRpm;
    /**
     * No comment provided
     *
     * Hash: 0xDFFABA2A
     */
    function getDashboardBoost() {
        return GetVehicleDashboardBoost();
    }
    vehicle_1.getDashboardBoost = getDashboardBoost;
    /**
     * Retrieves the current gear displayed on the dashboard of the vehicle the player is in, returned as a float. This value represents the gear shown in the instrument cluster, such as "R" (0.0) or positive values (e.g., 1.0, 2.0, etc.) for drive gears.
     *
     * Hash: 0x435C86F4
     */
    function getDashboardCurrentGear() {
        return GetVehicleDashboardCurrentGear();
    }
    vehicle_1.getDashboardCurrentGear = getDashboardCurrentGear;
    /**
     * No comment provided
     *
     * Hash: 0x19B0B2CE
     */
    function getDashboardFuel() {
        return GetVehicleDashboardFuel();
    }
    vehicle_1.getDashboardFuel = getDashboardFuel;
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
    function getDashboardLights() {
        return GetVehicleDashboardLights();
    }
    vehicle_1.getDashboardLights = getDashboardLights;
    /**
     * No comment provided
     *
     * Hash: 0x3856D767
     */
    function getDashboardOilPressure() {
        return GetVehicleDashboardOilPressure();
    }
    vehicle_1.getDashboardOilPressure = getDashboardOilPressure;
    /**
     * No comment provided
     *
     * Hash: 0x1F5996AA
     */
    function getDashboardOilTemp() {
        return GetVehicleDashboardOilTemp();
    }
    vehicle_1.getDashboardOilTemp = getDashboardOilTemp;
    /**
     * No comment provided
     *
     * Hash: 0xF9716A11
     */
    function getDashboardRpm() {
        return GetVehicleDashboardRpm();
    }
    vehicle_1.getDashboardRpm = getDashboardRpm;
    /**
     * No comment provided
     *
     * Hash: 0x9AAD420E
     */
    function getDashboardSpeed(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleDashboardSpeed(_vehicle);
    }
    vehicle_1.getDashboardSpeed = getDashboardSpeed;
    /**
     * No comment provided
     *
     * Hash: 0x6B6ADAFA
     */
    function getDashboardTemp() {
        return GetVehicleDashboardTemp();
    }
    vehicle_1.getDashboardTemp = getDashboardTemp;
    /**
     * No comment provided
     *
     * Hash: 0xFABE67A9
     */
    function getDashboardVacuum() {
        return GetVehicleDashboardVacuum();
    }
    vehicle_1.getDashboardVacuum = getDashboardVacuum;
    /**
     * A getter for [SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x245A6883D966D537).
     *
     * Hash: 0xEF7C6538
     */
    function getDensityMultiplier() {
        return GetVehicleDensityMultiplier();
    }
    vehicle_1.getDensityMultiplier = getDensityMultiplier;
    /**
     * Gets a vehicle's multiplier used with a wheel's GET_VEHICLE_WHEEL_STEERING_ANGLE to determine the angle the wheel is rendered.
     *
     * Hash: 0x21C1DA8E
     */
    function getDrawnWheelAngleMult(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleDrawnWheelAngleMult(_vehicle);
    }
    vehicle_1.getDrawnWheelAngleMult = getDrawnWheelAngleMult;
    /**
     * No comment provided
     *
     * Hash: 0xF4F495CB
     */
    function getEngineTemperature(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleEngineTemperature(_vehicle);
    }
    vehicle_1.getEngineTemperature = getEngineTemperature;
    /**
     * No comment provided
     *
     * Hash: 0x5F739BB8
     */
    function getFuelLevel(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleFuelLevel(_vehicle);
    }
    vehicle_1.getFuelLevel = getFuelLevel;
    /**
     * Gets vehicles gear ratio on choosen gear.
     *
     * Hash: 0x82E794B7
     */
    function getGearRatio(vehicle, gear) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleGearRatio(_vehicle, gear);
    }
    vehicle_1.getGearRatio = getGearRatio;
    /**
     * No comment provided
     *
     * Hash: 0xB48A1292
     */
    function getGravityAmount(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleGravityAmount(_vehicle);
    }
    vehicle_1.getGravityAmount = getGravityAmount;
    /**
     * Returns the effective handling data of a vehicle as a floating-point value.
     * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
     *
     * Hash: 0x642FC12F
     */
    function getHandlingFloat(vehicle, class_, fieldName) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleHandlingFloat(_vehicle, class_, fieldName);
    }
    vehicle_1.getHandlingFloat = getHandlingFloat;
    /**
     * Returns the effective handling data of a vehicle as an integer value.
     * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
     *
     * Hash: 0x27396C75
     */
    function getHandlingInt(vehicle, class_, fieldName) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleHandlingInt(_vehicle, class_, fieldName);
    }
    vehicle_1.getHandlingInt = getHandlingInt;
    /**
     * Returns the effective handling data of a vehicle as a vector value.
     * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
     *
     * Hash: 0xFB341304
     */
    function getHandlingVector(vehicle, class_, fieldName) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return new Vector3(GetVehicleHandlingVector(_vehicle, class_, fieldName));
    }
    vehicle_1.getHandlingVector = getHandlingVector;
    /**
     * No comment provided
     *
     * Hash: 0xF1D1D689
     */
    function getHighGear(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleHighGear(_vehicle);
    }
    vehicle_1.getHighGear = getHighGear;
    /**
     * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
     *
     * Hash: 0x83070354
     */
    function getIndicatorLights(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleIndicatorLights(_vehicle);
    }
    vehicle_1.getIndicatorLights = getIndicatorLights;
    /**
     * No comment provided
     *
     * Hash: 0x7E6E219C
     */
    function getLightMultiplier(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleLightMultiplier(_vehicle);
    }
    vehicle_1.getLightMultiplier = getLightMultiplier;
    /**
     * No comment provided
     *
     * Hash: 0xDDB298AE
     */
    function getNextGear(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleNextGear(_vehicle);
    }
    vehicle_1.getNextGear = getNextGear;
    /**
     * No comment provided
     *
     * Hash: 0xEDF4B0FC
     */
    function getNumberOfWheels(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleNumberOfWheels(_vehicle);
    }
    vehicle_1.getNumberOfWheels = getNumberOfWheels;
    /**
     * No comment provided
     *
     * Hash: 0xFC7F8EF4
     */
    function getOilLevel(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleOilLevel(_vehicle);
    }
    vehicle_1.getOilLevel = getOilLevel;
    /**
     * No comment provided
     *
     * Hash: 0x954465DE
     */
    function getSteeringScale(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleSteeringScale(_vehicle);
    }
    vehicle_1.getSteeringScale = getSteeringScale;
    /**
     * No comment provided
     *
     * Hash: 0xD1D07351
     */
    function getThrottleOffset(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleThrottleOffset(_vehicle);
    }
    vehicle_1.getThrottleOffset = getThrottleOffset;
    /**
     * A getter for [MODIFY_VEHICLE_TOP_SPEED](#\_0x93A3996368C94158). Returns -1.0 if a modifier is not set.
     *
     * Hash: 0x998B7FEE
     */
    function getTopSpeedModifier(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleTopSpeedModifier(_vehicle);
    }
    vehicle_1.getTopSpeedModifier = getTopSpeedModifier;
    /**
     * No comment provided
     *
     * Hash: 0xE02B51D7
     */
    function getTurboPressure(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleTurboPressure(_vehicle);
    }
    vehicle_1.getTurboPressure = getTurboPressure;
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
    function getWheelieState(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelieState(_vehicle);
    }
    vehicle_1.getWheelieState = getWheelieState;
    /**
     * Gets brake pressure of a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     * Normal values around 1.0f when braking.
     *
     * Hash: 0x70FE2EFF
     */
    function getWheelBrakePressure(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelBrakePressure(_vehicle, wheelIndex);
    }
    vehicle_1.getWheelBrakePressure = getWheelBrakePressure;
    /**
     * Gets the flags of a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0xC70FA0C7
     */
    function getWheelFlags(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelFlags(_vehicle, wheelIndex);
    }
    vehicle_1.getWheelFlags = getWheelFlags;
    /**
     * No comment provided
     *
     * Hash: 0x54A677F5
     */
    function getWheelHealth(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelHealth(_vehicle, wheelIndex);
    }
    vehicle_1.getWheelHealth = getWheelHealth;
    /**
     * Gets whether the wheel is powered.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     * This is a shortcut to a flag in GET_VEHICLE_WHEEL_FLAGS.
     *
     * Hash: 0x3CCF1B49
     */
    function getWheelIsPowered(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelIsPowered(_vehicle, wheelIndex);
    }
    vehicle_1.getWheelIsPowered = getWheelIsPowered;
    /**
     * Gets power being sent to a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0xD203287
     */
    function getWheelPower(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelPower(_vehicle, wheelIndex);
    }
    vehicle_1.getWheelPower = getWheelPower;
    /**
     * No comment provided
     *
     * Hash: 0xCEE21AB2
     */
    function getWheelRimColliderSize(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelRimColliderSize(_vehicle, wheelIndex);
    }
    vehicle_1.getWheelRimColliderSize = getWheelRimColliderSize;
    /**
     * Gets the rotation speed of a wheel.
     * This is used internally to calcuate GET_VEHICLE_WHEEL_SPEED.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0xEA1859E5
     */
    function getWheelRotationSpeed(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelRotationSpeed(_vehicle, wheelIndex);
    }
    vehicle_1.getWheelRotationSpeed = getWheelRotationSpeed;
    /**
     * Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
     * Only works on non-default wheels (returns 0 in case of default wheels).
     *
     * Hash: 0x4046B66
     */
    function getWheelSize(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelSize(_vehicle);
    }
    vehicle_1.getWheelSize = getWheelSize;
    /**
     * Gets speed of a wheel at the tyre.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0x149C9DA0
     */
    function getWheelSpeed(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelSpeed(_vehicle, wheelIndex);
    }
    vehicle_1.getWheelSpeed = getWheelSpeed;
    /**
     * Gets steering angle of a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0xA0867448
     */
    function getWheelSteeringAngle(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelSteeringAngle(_vehicle, wheelIndex);
    }
    vehicle_1.getWheelSteeringAngle = getWheelSteeringAngle;
    /**
     * No comment provided
     *
     * Hash: 0xA7F04022
     */
    function getWheelSurfaceMaterial(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelSurfaceMaterial(_vehicle, wheelIndex);
    }
    vehicle_1.getWheelSurfaceMaterial = getWheelSurfaceMaterial;
    /**
     * Gets the current suspension compression of a wheel.
     * Returns a positive value. 0 means the suspension is fully extended, the wheel is off the ground.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0x2B48175B
     */
    function getWheelSuspensionCompression(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelSuspensionCompression(_vehicle, wheelIndex);
    }
    vehicle_1.getWheelSuspensionCompression = getWheelSuspensionCompression;
    /**
     * No comment provided
     *
     * Hash: 0xE0BA9FE6
     */
    function getWheelTireColliderSize(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelTireColliderSize(_vehicle, wheelIndex);
    }
    vehicle_1.getWheelTireColliderSize = getWheelTireColliderSize;
    /**
     * No comment provided
     *
     * Hash: 0xEF65929C
     */
    function getWheelTireColliderWidth(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelTireColliderWidth(_vehicle, wheelIndex);
    }
    vehicle_1.getWheelTireColliderWidth = getWheelTireColliderWidth;
    /**
     * Gets the traction vector length of a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0x3BCFEE14
     */
    function getWheelTractionVectorLength(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelTractionVectorLength(_vehicle, wheelIndex);
    }
    vehicle_1.getWheelTractionVectorLength = getWheelTractionVectorLength;
    /**
     * Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
     * Only works on non-default wheels (returns 0 in case of default wheels).
     *
     * Hash: 0x9C7B59F9
     */
    function getWheelWidth(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelWidth(_vehicle);
    }
    vehicle_1.getWheelWidth = getWheelWidth;
    /**
     * Returns the offset of the specified wheel relative to the wheel's axle center.
     *
     * Hash: 0xCC90CBCA
     */
    function getWheelXOffset(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelXOffset(_vehicle, wheelIndex);
    }
    vehicle_1.getWheelXOffset = getWheelXOffset;
    /**
     * No comment provided
     *
     * Hash: 0x2EA4AFFE
     */
    function getWheelYRotation(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleWheelYRotation(_vehicle, wheelIndex);
    }
    vehicle_1.getWheelYRotation = getWheelYRotation;
    /**
     * Returns vehicle xenon lights custom RGB color values. Do note this native doesn't return non-RGB colors that was set with [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07).
     *
     * Hash: 0xC715F730
     */
    function getXenonLightsCustomColor(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleXenonLightsCustomColor(_vehicle);
    }
    vehicle_1.getXenonLightsCustomColor = getXenonLightsCustomColor;
    /**
     * A getter for [SET_VEHICLE_XMAS_SNOW_FACTOR](#\_0x80CC4C9E).
     *
     * Hash: 0x16605B30
     */
    function getXmasSnowFactor() {
        return GetVehicleXmasSnowFactor();
    }
    vehicle_1.getXmasSnowFactor = getXmasSnowFactor;
    /**
     * No comment provided
     *
     * Hash: 0xDC921211
     */
    function isAlarmSet(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return IsVehicleAlarmSet(_vehicle);
    }
    vehicle_1.isAlarmSet = isAlarmSet;
    /**
     * No comment provided
     *
     * Hash: 0xA411F72C
     */
    function isInteriorLightOn(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return IsVehicleInteriorLightOn(_vehicle);
    }
    vehicle_1.isInteriorLightOn = isInteriorLightOn;
    /**
     * No comment provided
     *
     * Hash: 0xF9933BF4
     */
    function isNeedsToBeHotwired(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return IsVehicleNeedsToBeHotwired(_vehicle);
    }
    vehicle_1.isNeedsToBeHotwired = isNeedsToBeHotwired;
    /**
     * No comment provided
     *
     * Hash: 0xF849ED67
     */
    function isPreviouslyOwnedByPlayer(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return IsVehiclePreviouslyOwnedByPlayer(_vehicle);
    }
    vehicle_1.isPreviouslyOwnedByPlayer = isPreviouslyOwnedByPlayer;
    /**
     * No comment provided
     *
     * Hash: 0xA7DAF7C
     */
    function isWanted(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return IsVehicleWanted(_vehicle);
    }
    vehicle_1.isWanted = isWanted;
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
    function overrideReactionToSiren(state, reaction) {
        OverrideReactionToVehicleSiren(state, reaction);
    }
    vehicle_1.overrideReactionToSiren = overrideReactionToSiren;
    /**
     * Overrides whether or not peds can stand on top of the specified vehicle.
     *
     * Note this flag is not replicated automatically, you will have to manually do so.
     *
     * Hash: 0x7FA03E76
     */
    function overridePedsCanStandOnTopFlag(vehicle, can) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        OverrideVehiclePedsCanStandOnTopFlag(_vehicle, can);
    }
    vehicle_1.overridePedsCanStandOnTopFlag = overridePedsCanStandOnTopFlag;
    /**
     * Resets whether or not peds can stand on top of the specified vehicle.
     *
     * Note this flag is not replicated automatically, you will have to manually do so.
     *
     * Hash: 0xDF62CFE2
     */
    function resetPedsCanStandOnTopFlag(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        ResetVehiclePedsCanStandOnTopFlag(_vehicle);
    }
    vehicle_1.resetPedsCanStandOnTopFlag = resetPedsCanStandOnTopFlag;
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
    function setDefaultNumberPlateTextPattern(plateIndex, pattern) {
        SetDefaultVehicleNumberPlateTextPattern(plateIndex, pattern);
    }
    vehicle_1.setDefaultNumberPlateTextPattern = setDefaultNumberPlateTextPattern;
    /**
     * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
     * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
     *
     * Hash: 0xFE8064E3
     */
    function setHandlingField(vehicle, class_, fieldName, value) {
        SetHandlingField(vehicle, class_, fieldName, value);
    }
    vehicle_1.setHandlingField = setHandlingField;
    /**
     * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
     * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
     *
     * Hash: 0x90DD01C
     */
    function setHandlingFloat(vehicle, class_, fieldName, value) {
        SetHandlingFloat(vehicle, class_, fieldName, value);
    }
    vehicle_1.setHandlingFloat = setHandlingFloat;
    /**
     * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
     *
     * Hash: 0x8AB3F46C
     */
    function setHandlingInt(vehicle, class_, fieldName, value) {
        SetHandlingInt(vehicle, class_, fieldName, value);
    }
    vehicle_1.setHandlingInt = setHandlingInt;
    /**
     * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
     * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
     *
     * Hash: 0x7F9D543
     */
    function setHandlingVector(vehicle, class_, fieldName, value) {
        SetHandlingVector(vehicle, class_, fieldName, value);
    }
    vehicle_1.setHandlingVector = setHandlingVector;
    /**
     * This completely disables pedestrian vehicles from reacting to sirens. They will not try to do any maneuver to evade.
     *
     * Hash: 0xB90BBC6E
     */
    function setReactionToWithSirenDisabled(state) {
        SetReactionToVehicleWithSirenDisabled(state);
    }
    vehicle_1.setReactionToWithSirenDisabled = setReactionToWithSirenDisabled;
    /**
     * Enables or disables whether train doors should be forced open whilst a player is inside the train. This is enabled by default in multiplayer.
     *
     * Hash: 0xD4D1BA63
     */
    function setTrainsForceDoorsOpen(forceOpen) {
        SetTrainsForceDoorsOpen(forceOpen);
    }
    vehicle_1.setTrainsForceDoorsOpen = setTrainsForceDoorsOpen;
    /**
     * Sets the ratio that a door is open for on a train.
     *
     * Hash: 0x2468DBE8
     */
    function setTrainDoorOpenRatio(train, doorIndex, ratio) {
        const _train = train instanceof IVehicle ? train.localId() : train;
        SetTrainDoorOpenRatio(_train, doorIndex, ratio);
    }
    vehicle_1.setTrainDoorOpenRatio = setTrainDoorOpenRatio;
    /**
     * No comment provided
     *
     * Hash: 0x61CB74A0
     */
    function setTrainState(train, state) {
        const _train = train instanceof IVehicle ? train.localId() : train;
        SetTrainState(_train, state);
    }
    vehicle_1.setTrainState = setTrainState;
    /**
     * Toggles a train's ability to stop at stations
     *
     * Hash: 0xECB8B577
     */
    function setTrainStopAtStations(train, state) {
        const _train = train instanceof IVehicle ? train.localId() : train;
        SetTrainStopAtStations(_train, state);
    }
    vehicle_1.setTrainStopAtStations = setTrainStopAtStations;
    /**
     * No comment provided
     *
     * Hash: 0xC108EE6F
     */
    function setAlarmTimeLeft(vehicle, time) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleAlarmTimeLeft(_vehicle, time);
    }
    vehicle_1.setAlarmTimeLeft = setAlarmTimeLeft;
    /**
     * Disables the vehicle from being repaired when a vehicle extra is enabled.
     *
     * Hash: 0x5F3A3574
     */
    function setAutoRepairDisabled(vehicle, value) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleAutoRepairDisabled(_vehicle, value);
    }
    vehicle_1.setAutoRepairDisabled = setAutoRepairDisabled;
    /**
     * No comment provided
     *
     * Hash: 0x2F70ACED
     */
    function setClutch(vehicle, clutch) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleClutch(_vehicle, clutch);
    }
    vehicle_1.setClutch = setClutch;
    /**
     * No comment provided
     *
     * Hash: 0x2A01A8FC
     */
    function setCurrentRpm(vehicle, rpm) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleCurrentRpm(_vehicle, rpm);
    }
    vehicle_1.setCurrentRpm = setCurrentRpm;
    /**
     * No comment provided
     *
     * Hash: 0x6C93C4A9
     */
    function setEngineTemperature(vehicle, temperature) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleEngineTemperature(_vehicle, temperature);
    }
    vehicle_1.setEngineTemperature = setEngineTemperature;
    /**
     * No comment provided
     *
     * Hash: 0xBA970511
     */
    function setFuelLevel(vehicle, level) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleFuelLevel(_vehicle, level);
    }
    vehicle_1.setFuelLevel = setFuelLevel;
    /**
     * Sets the vehicles gear ratio on choosen gear, reverse gear needs to be a negative float and forward moving gear needs to be a positive float. Refer to the examples if confused.
     *
     * Hash: 0x496EF2F2
     */
    function setGearRatio(vehicle, gear, ratio) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleGearRatio(_vehicle, gear, ratio);
    }
    vehicle_1.setGearRatio = setGearRatio;
    /**
     * No comment provided
     *
     * Hash: 0x1A963E58
     */
    function setGravityAmount(vehicle, gravity) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleGravityAmount(_vehicle, gravity);
    }
    vehicle_1.setGravityAmount = setGravityAmount;
    /**
     * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
     * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
     *
     * Hash: 0x2BA40795
     */
    function setVehicleHandlingField(vehicle, class_, fieldName, value) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleHandlingField(_vehicle, class_, fieldName, value);
    }
    vehicle_1.setVehicleHandlingField = setVehicleHandlingField;
    /**
     * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
     * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
     *
     * Hash: 0x488C86D2
     */
    function setVehicleHandlingFloat(vehicle, class_, fieldName, value) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleHandlingFloat(_vehicle, class_, fieldName, value);
    }
    vehicle_1.setVehicleHandlingFloat = setVehicleHandlingFloat;
    /**
     * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
     *
     * Hash: 0xC37F4CF9
     */
    function setVehicleHandlingInt(vehicle, class_, fieldName, value) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleHandlingInt(_vehicle, class_, fieldName, value);
    }
    vehicle_1.setVehicleHandlingInt = setVehicleHandlingInt;
    /**
     * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
     *
     * Hash: 0x12497890
     */
    function setVehicleHandlingVector(vehicle, class_, fieldName, value) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleHandlingVector(_vehicle, class_, fieldName, value);
    }
    vehicle_1.setVehicleHandlingVector = setVehicleHandlingVector;
    /**
     * No comment provided
     *
     * Hash: 0x20B1B3E6
     */
    function setHighGear(vehicle, gear) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleHighGear(_vehicle, gear);
    }
    vehicle_1.setHighGear = setHighGear;
    /**
     * Sets the maximum distance in which [\_SET_VEHICLE_NITRO_ENABLED](#\_0xC8E9B6B71B8E660D) PTFX are rendered. Distance is measured from the camera position.
     *
     * Hash: 0xA40CB822
     */
    function setNitroPtfxRange(range) {
        SetVehicleNitroPtfxRange(range);
    }
    vehicle_1.setNitroPtfxRange = setNitroPtfxRange;
    /**
     * No comment provided
     *
     * Hash: 0x90D1CAD1
     */
    function setOilLevel(vehicle, level) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleOilLevel(_vehicle, level);
    }
    vehicle_1.setOilLevel = setOilLevel;
    /**
     * Set the vehicle's pitch bias. Only works on planes.
     *
     * Hash: 0x2A6CC9F2
     */
    function setPitchBias(vehicle, value) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehiclePitchBias(_vehicle, value);
    }
    vehicle_1.setPitchBias = setPitchBias;
    /**
     * Set the vehicle's roll bias. Only works on planes.
     *
     * Hash: 0x264B45DE
     */
    function setRollBias(vehicle, value) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleRollBias(_vehicle, value);
    }
    vehicle_1.setRollBias = setRollBias;
    /**
     * No comment provided
     *
     * Hash: 0xFFCCC2EA
     */
    function setSteeringAngle(vehicle, angle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleSteeringAngle(_vehicle, angle);
    }
    vehicle_1.setSteeringAngle = setSteeringAngle;
    /**
     * No comment provided
     *
     * Hash: 0xEB46596F
     */
    function setSteeringScale(vehicle, scale) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleSteeringScale(_vehicle, scale);
    }
    vehicle_1.setSteeringScale = setSteeringScale;
    /**
     * Sets the height of the vehicle's suspension.
     * This changes the same value set by Suspension in the mod shop.
     * Negatives values raise the car. Positive values lower the car.
     *
     * This is change is visual only. The collision of the vehicle will not move.
     *
     * Hash: 0xB3439A01
     */
    function setSuspensionHeight(vehicle, newHeight) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleSuspensionHeight(_vehicle, newHeight);
    }
    vehicle_1.setSuspensionHeight = setSuspensionHeight;
    /**
     * No comment provided
     *
     * Hash: 0x6485615E
     */
    function setTurboPressure(vehicle, pressure) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleTurboPressure(_vehicle, pressure);
    }
    vehicle_1.setTurboPressure = setTurboPressure;
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
    function setWheelieState(vehicle, state) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelieState(_vehicle, state);
    }
    vehicle_1.setWheelieState = setWheelieState;
    /**
     * Sets brake pressure of a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     * Normal values around 1.0f
     *
     * Hash: 0xE80F4E31
     */
    function setWheelBrakePressure(vehicle, wheelIndex, pressure) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelBrakePressure(_vehicle, wheelIndex, pressure);
    }
    vehicle_1.setWheelBrakePressure = setWheelBrakePressure;
    /**
     * Sets the flags of a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0xD2B9E90D
     */
    function setWheelFlags(vehicle, wheelIndex, flags) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelFlags(_vehicle, wheelIndex, flags);
    }
    vehicle_1.setWheelFlags = setWheelFlags;
    /**
     * No comment provided
     *
     * Hash: 0xB22ECEFD
     */
    function setWheelHealth(vehicle, wheelIndex, health) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelHealth(_vehicle, wheelIndex, health);
    }
    vehicle_1.setWheelHealth = setWheelHealth;
    /**
     * Sets whether the wheel is powered.
     * On all wheel drive cars this works to change which wheels receive power, but if a car's fDriveBiasFront doesn't send power to that wheel, it won't get power anyway. This can be fixed by changing the fDriveBiasFront with SET_VEHICLE_HANDLING_FLOAT.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     * This is a shortcut to a flag in SET_VEHICLE_WHEEL_FLAGS.
     *
     * Hash: 0xBD5291A0
     */
    function setWheelIsPowered(vehicle, wheelIndex, powered) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelIsPowered(_vehicle, wheelIndex, powered);
    }
    vehicle_1.setWheelIsPowered = setWheelIsPowered;
    /**
     * Sets power being sent to a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0xC6146043
     */
    function setWheelPower(vehicle, wheelIndex, power) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelPower(_vehicle, wheelIndex, power);
    }
    vehicle_1.setWheelPower = setWheelPower;
    /**
     * Not sure what this changes, probably determines physical rim size in case the tire is blown.
     *
     * Hash: 0xF380E184
     */
    function setWheelRimColliderSize(vehicle, wheelIndex, value) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelRimColliderSize(_vehicle, wheelIndex, value);
    }
    vehicle_1.setWheelRimColliderSize = setWheelRimColliderSize;
    /**
     * Sets the rotation speed of a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0x35ED100D
     */
    function setWheelRotationSpeed(vehicle, wheelIndex, speed) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelRotationSpeed(_vehicle, wheelIndex, speed);
    }
    vehicle_1.setWheelRotationSpeed = setWheelRotationSpeed;
    /**
     * Sets vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
     * Only works on non-default wheels.
     * Returns whether change was successful (can be false if trying to set size for non-default wheels).
     *
     * Hash: 0x53AB5C35
     */
    function setWheelSize(vehicle, size) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return SetVehicleWheelSize(_vehicle, size);
    }
    vehicle_1.setWheelSize = setWheelSize;
    /**
     * Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).
     *
     * Hash: 0xB962D05C
     */
    function setWheelTireColliderSize(vehicle, wheelIndex, value) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelTireColliderSize(_vehicle, wheelIndex, value);
    }
    vehicle_1.setWheelTireColliderSize = setWheelTireColliderSize;
    /**
     * Use along with SetVehicleWheelWidth to resize the wheels (this native sets the collider width affecting physics while SetVehicleWheelWidth will change visual width).
     *
     * Hash: 0x47BD0270
     */
    function setWheelTireColliderWidth(vehicle, wheelIndex, value) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelTireColliderWidth(_vehicle, wheelIndex, value);
    }
    vehicle_1.setWheelTireColliderWidth = setWheelTireColliderWidth;
    /**
     * Sets the traction vector length of a wheel.
     * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
     *
     * Hash: 0x85C85A3A
     */
    function setWheelTractionVectorLength(vehicle, wheelIndex, length) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelTractionVectorLength(_vehicle, wheelIndex, length);
    }
    vehicle_1.setWheelTractionVectorLength = setWheelTractionVectorLength;
    /**
     * Sets vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
     * Only works on non-default wheels.
     * Returns whether change was successful (can be false if trying to set width for non-default wheels).
     *
     * Hash: 0x64C3F1C0
     */
    function setWheelWidth(vehicle, width) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return SetVehicleWheelWidth(_vehicle, width);
    }
    vehicle_1.setWheelWidth = setWheelWidth;
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
    function setWheelXOffset(vehicle, wheelIndex, offset) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelXOffset(_vehicle, wheelIndex, offset);
    }
    vehicle_1.setWheelXOffset = setWheelXOffset;
    /**
     * No comment provided
     *
     * Hash: 0xC6C2171F
     */
    function setWheelYRotation(vehicle, wheelIndex, value) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleWheelYRotation(_vehicle, wheelIndex, value);
    }
    vehicle_1.setWheelYRotation = setWheelYRotation;
    /**
     * Sets custom vehicle xenon lights color, allowing to use RGB palette. The game will ignore lights color set by [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07) when custom color is active. This native is not synced between players. Requires xenon lights mod to be set on vehicle.
     *
     * Hash: 0x1683E7F0
     */
    function setXenonLightsCustomColor(vehicle, red, green, blue) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleXenonLightsCustomColor(_vehicle, red, green, blue);
    }
    vehicle_1.setXenonLightsCustomColor = setXenonLightsCustomColor;
    /**
     * No comment provided
     *
     * Hash: 0x80CC4C9E
     */
    function setXmasSnowFactor(gripFactor) {
        SetVehicleXmasSnowFactor(gripFactor);
    }
    vehicle_1.setXmasSnowFactor = setXmasSnowFactor;
    /**
     * No comment provided
     *
     * Hash: 0x77CC80DC
     */
    function doesTrainStopAtStations(train) {
        const _train = train instanceof IVehicle ? train.localId() : train;
        return DoesTrainStopAtStations(_train);
    }
    vehicle_1.doesTrainStopAtStations = doesTrainStopAtStations;
    /**
     * Gets the trains desired speed.
     *
     * Hash: 0xA4921EF5
     */
    function getTrainCruiseSpeed(train) {
        const _train = train instanceof IVehicle ? train.localId() : train;
        return GetTrainCruiseSpeed(_train);
    }
    vehicle_1.getTrainCruiseSpeed = getTrainCruiseSpeed;
    /**
     * Gets the direction the train is facing
     *
     * Hash: 0x8DAF79B6
     */
    function getTrainDirection(train) {
        const _train = train instanceof IVehicle ? train.localId() : train;
        return GetTrainDirection(_train);
    }
    vehicle_1.getTrainDirection = getTrainDirection;
    /**
     * No comment provided
     *
     * Hash: 0x81B50033
     */
    function getTrainState(train) {
        const _train = train instanceof IVehicle ? train.localId() : train;
        return GetTrainState(_train);
    }
    vehicle_1.getTrainState = getTrainState;
    /**
     * No comment provided
     *
     * Hash: 0x9AA339D
     */
    function getTrainTrackIndex(train) {
        const _train = train instanceof IVehicle ? train.localId() : train;
        return GetTrainTrackIndex(_train);
    }
    vehicle_1.getTrainTrackIndex = getTrainTrackIndex;
    /**
     * No comment provided
     *
     * Hash: 0x483B013C
     */
    function getHandbrake(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleHandbrake(_vehicle);
    }
    vehicle_1.getHandbrake = getHandbrake;
    /**
     * No comment provided
     *
     * Hash: 0x1382FCEA
     */
    function getSteeringAngle(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleSteeringAngle(_vehicle);
    }
    vehicle_1.getSteeringAngle = getSteeringAngle;
    /**
     * No comment provided
     *
     * Hash: 0xBB340D04
     */
    function isEngineStarting(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return IsVehicleEngineStarting(_vehicle);
    }
    vehicle_1.isEngineStarting = isEngineStarting;
    /**
     * **Note**: Flags are not the same based on your `gamebuild`. Please see [here](https://docs.fivem.net/docs/game-references/vehicle-references/vehicle-flags) to see a complete list of all vehicle flags.
     *
     * Get vehicle.meta flag by index. Useful examples include `FLAG_LAW_ENFORCEMENT` (31), `FLAG_RICH_CAR` (36), `FLAG_IS_ELECTRIC` (43), `FLAG_IS_OFFROAD_VEHICLE` (48).
     *
     * Hash: 0xD85C9F57
     */
    function getHasFlag(vehicle, flagIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleHasFlag(_vehicle, flagIndex);
    }
    vehicle_1.getHasFlag = getHasFlag;
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
    function getTypeRaw(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleTypeRaw(_vehicle);
    }
    vehicle_1.getTypeRaw = getTypeRaw;
    /**
     * Getter for [BREAK_OFF_VEHICLE_WHEEL](?\_0xA274CADB).
     *
     * Hash: 0xCF1BC668
     */
    function isWheelBrokenOff(vehicle, wheelIndex) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return IsVehicleWheelBrokenOff(_vehicle, wheelIndex);
    }
    vehicle_1.isWheelBrokenOff = isWheelBrokenOff;
    /**
     * No comment provided
     *
     * Hash: 0x8923DD42
     */
    function setCurrentGear(vehicle, gear) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleCurrentGear(_vehicle, gear);
    }
    vehicle_1.setCurrentGear = setCurrentGear;
    /**
     * This native is a setter for [`GET_VEHICLE_HAS_FLAG`](#\_0xD85C9F57).
     *
     * Hash: 0x63AE1A34
     */
    function setFlag(vehicle, flagIndex, value) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return SetVehicleFlag(_vehicle, flagIndex, value);
    }
    vehicle_1.setFlag = setFlag;
    /**
     * No comment provided
     *
     * Hash: 0x3A4566F4
     */
    function setNextGear(vehicle, nextGear) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        SetVehicleNextGear(_vehicle, nextGear);
    }
    vehicle_1.setNextGear = setNextGear;
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
    function getType(vehicle) {
        const _vehicle = vehicle instanceof IVehicle ? vehicle.localId() : vehicle;
        return GetVehicleType(_vehicle);
    }
    vehicle_1.getType = getType;
})(vehicle || (vehicle = {}));
export var water;
(function (water) {
    /**
     * Creates a volume where water effects do not apply.
     * Useful for preventing water collisions from flooding areas underneath them.
     * This has no effect on waterquads, only water created from drawables and collisions.
     * Don't create volumes when your local ped is swimming (e.g. use IS_PED_SWIMMING in your scripts before you call this)
     *
     * Hash: 0xEB1C6DD
     */
    function createDryVolume(xMin, yMin, zMin, xMax, yMax, zMax) {
        return CreateDryVolume(xMin, yMin, zMin, xMax, yMax, zMax);
    }
    water.createDryVolume = createDryVolume;
    /**
     * No comment provided
     *
     * Hash: 0x14088095
     */
    function getQuadAlpha(waterQuad) {
        return GetWaterQuadAlpha(waterQuad);
    }
    water.getQuadAlpha = getQuadAlpha;
    /**
     * This native returns the index of a water quad if the given point is inside its bounds.
     *
     * *If you also want to check for water level, check out [`GetWaterQuadAtCoords_3d`](#\_0xF8E03DB8)*
     *
     * Hash: 0x17321452
     */
    function getQuadAtCoords(x, y) {
        return GetWaterQuadAtCoords(x, y);
    }
    water.getQuadAtCoords = getQuadAtCoords;
    /**
     * This alternative implementation of [`GetWaterQuadAtCoords`](#\_0x17321452) also checks the height of the water level.
     *
     * Hash: 0xF8E03DB8
     */
    function getQuadAtCoords3d(pos) {
        return GetWaterQuadAtCoords3d(pos.x, pos.y, pos.z);
    }
    water.getQuadAtCoords3d = getQuadAtCoords3d;
    /**
     * No comment provided
     *
     * Hash: 0x42E9A06A
     */
    function getQuadBounds(waterQuad) {
        return GetWaterQuadBounds(waterQuad);
    }
    water.getQuadBounds = getQuadBounds;
    /**
     * No comment provided
     *
     * Hash: 0xB1884159
     */
    function getQuadCount() {
        return GetWaterQuadCount();
    }
    water.getQuadCount = getQuadCount;
    /**
     * No comment provided
     *
     * Hash: 0x22EA3BD8
     */
    function getQuadHasLimitedDepth(waterQuad) {
        return GetWaterQuadHasLimitedDepth(waterQuad);
    }
    water.getQuadHasLimitedDepth = getQuadHasLimitedDepth;
    /**
     * No comment provided
     *
     * Hash: 0x1DEDBD77
     */
    function getQuadIsInvisible(waterQuad) {
        return GetWaterQuadIsInvisible(waterQuad);
    }
    water.getQuadIsInvisible = getQuadIsInvisible;
    /**
     * *level is defined as "z" in water.xml*
     *
     * Hash: 0x6523816B
     */
    function getQuadLevel(waterQuad) {
        return GetWaterQuadLevel(waterQuad);
    }
    water.getQuadLevel = getQuadLevel;
    /**
     * No comment provided
     *
     * Hash: 0x6F4ACBA
     */
    function getQuadNoStencil(waterQuad) {
        return GetWaterQuadNoStencil(waterQuad);
    }
    water.getQuadNoStencil = getQuadNoStencil;
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
    function getQuadType(waterQuad) {
        return GetWaterQuadType(waterQuad);
    }
    water.getQuadType = getQuadType;
    /**
     * No comment provided
     *
     * Hash: 0x865139A3
     */
    function getWaveQuadAmplitude(waveQuad) {
        return GetWaveQuadAmplitude(waveQuad);
    }
    water.getWaveQuadAmplitude = getWaveQuadAmplitude;
    /**
     * This native returns the index of a wave quad if the given point is inside its bounds.
     *
     * Hash: 0x3F5A61A7
     */
    function getWaveQuadAtCoords(x, y) {
        return GetWaveQuadAtCoords(x, y);
    }
    water.getWaveQuadAtCoords = getWaveQuadAtCoords;
    /**
     * No comment provided
     *
     * Hash: 0xF86136DB
     */
    function getWaveQuadBounds(waveQuad) {
        return GetWaveQuadBounds(waveQuad);
    }
    water.getWaveQuadBounds = getWaveQuadBounds;
    /**
     * No comment provided
     *
     * Hash: 0x9250C76
     */
    function getWaveQuadCount() {
        return GetWaveQuadCount();
    }
    water.getWaveQuadCount = getWaveQuadCount;
    /**
     * No comment provided
     *
     * Hash: 0xCCE49A1C
     */
    function getWaveQuadDirection(waveQuad) {
        return GetWaveQuadDirection(waveQuad);
    }
    water.getWaveQuadDirection = getWaveQuadDirection;
    /**
     * Define the xml in a resources fxmanifest, under the file(s) section.
     *
     * Hash: 0xF5102568
     */
    function loadFromPath(resourceName, fileName) {
        return LoadWaterFromPath(resourceName, fileName);
    }
    water.loadFromPath = loadFromPath;
    /**
     * Removes a dry volume from the game session.
     * See CREATE_DRY_VOLUME for more info
     *
     * Hash: 0x7BCAA6E7
     */
    function removeDryVolume(handle) {
        RemoveDryVolume(handle);
    }
    water.removeDryVolume = removeDryVolume;
    /**
     * Resets the water to the games default water.xml.
     *
     * Hash: 0x1DA4791
     */
    function reset() {
        ResetWater();
    }
    water.reset = reset;
    /**
     * Sets world clip boundaries for water quads file (water.xml, water_heistisland.xml)
     * Used internally by LOAD_GLOBAL_WATER_FILE
     *
     * Hash: 0x9FCD2EE6
     */
    function setAreaClipRect(minX, minY, maxX, maxY) {
        SetWaterAreaClipRect(minX, minY, maxX, maxY);
    }
    water.setAreaClipRect = setAreaClipRect;
    /**
     * No comment provided
     *
     * Hash: 0xF49797EB
     */
    function setQuadAlpha(waterQuad, a0, a1, a2, a3) {
        return SetWaterQuadAlpha(waterQuad, a0, a1, a2, a3);
    }
    water.setQuadAlpha = setQuadAlpha;
    /**
     * This native allows you to update the bounds of a specified water quad index.
     *
     * Hash: 0x80AD144C
     */
    function setQuadBounds(waterQuad, minX, minY, maxX, maxY) {
        return SetWaterQuadBounds(waterQuad, minX, minY, maxX, maxY);
    }
    water.setQuadBounds = setQuadBounds;
    /**
     * No comment provided
     *
     * Hash: 0xD1FDCFC1
     */
    function setQuadHasLimitedDepth(waterQuad, hasLimitedDepth) {
        return SetWaterQuadHasLimitedDepth(waterQuad, hasLimitedDepth);
    }
    water.setQuadHasLimitedDepth = setQuadHasLimitedDepth;
    /**
     * No comment provided
     *
     * Hash: 0xA387D917
     */
    function setQuadIsInvisible(waterQuad, isInvisible) {
        return SetWaterQuadIsInvisible(waterQuad, isInvisible);
    }
    water.setQuadIsInvisible = setQuadIsInvisible;
    /**
     * No comment provided
     *
     * Hash: 0x6292F7A8
     */
    function setQuadLevel(waterQuad, level) {
        return SetWaterQuadLevel(waterQuad, level);
    }
    water.setQuadLevel = setQuadLevel;
    /**
     * No comment provided
     *
     * Hash: 0xC3FF42FF
     */
    function setQuadNoStencil(waterQuad, noStencil) {
        return SetWaterQuadNoStencil(waterQuad, noStencil);
    }
    water.setQuadNoStencil = setQuadNoStencil;
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
    function setQuadType(waterQuad, _type) {
        return SetWaterQuadType(waterQuad, _type);
    }
    water.setQuadType = setQuadType;
    /**
     * No comment provided
     *
     * Hash: 0xE4174B7B
     */
    function setWaveQuadAmplitude(waveQuad, amplitude) {
        return SetWaveQuadAmplitude(waveQuad, amplitude);
    }
    water.setWaveQuadAmplitude = setWaveQuadAmplitude;
    /**
     * This native allows you to update the bounds of a specified water quad index.
     *
     * Hash: 0x1FCC1FAF
     */
    function setWaveQuadBounds(waveQuad, minX, minY, maxX, maxY) {
        return SetWaveQuadBounds(waveQuad, minX, minY, maxX, maxY);
    }
    water.setWaveQuadBounds = setWaveQuadBounds;
    /**
     * directionX/Y should be constrained between -1.0 and 1.0
     * A positive value will create the wave starting at min and rolling towards max
     * A negative value will create the wave starting at max and rolling towards min
     * Applying both values allows you to make diagonal waves
     *
     * Hash: 0xFC9341A3
     */
    function setWaveQuadDirection(waveQuad, directionX, directionY) {
        return SetWaveQuadDirection(waveQuad, directionX, directionY);
    }
    water.setWaveQuadDirection = setWaveQuadDirection;
})(water || (water = {}));
export var weapon;
(function (weapon) {
    /**
     * A getter for the accuracy spread of a weapon.
     *
     * Hash: 0x5343721
     */
    function getAccuracySpread(weaponHash) {
        if (typeof weaponHash === 'string')
            weaponHash = game.getHashKey(weaponHash);
        return GetWeaponAccuracySpread(weaponHash);
    }
    weapon.getAccuracySpread = getAccuracySpread;
    /**
     * A getter for [SET_WEAPON_ANIMATION_OVERRIDE](#\_0x1055AC3A667F09D9).
     *
     * Hash: 0x63ED2E7
     */
    function getAnimationOverride(ped) {
        const _ped = ped instanceof IPed ? ped.handle() : ped;
        return GetWeaponAnimationOverride(_ped);
    }
    weapon.getAnimationOverride = getAnimationOverride;
    /**
     * A getter for `CWeaponAccuracyModifier` in a weapon component.
     *
     * Hash: 0xC693E278
     */
    function getComponentAccuracyModifier(componentHash) {
        if (typeof componentHash === 'string')
            componentHash = game.getHashKey(componentHash);
        return GetWeaponComponentAccuracyModifier(componentHash);
    }
    weapon.getComponentAccuracyModifier = getComponentAccuracyModifier;
    /**
     * A getter for `CameraHash` in a weapon scope component.
     *
     * Hash: 0xACB7E68F
     */
    function getComponentCameraHash(componentHash) {
        if (typeof componentHash === 'string')
            componentHash = game.getHashKey(componentHash);
        return GetWeaponComponentCameraHash(componentHash);
    }
    weapon.getComponentCameraHash = getComponentCameraHash;
    /**
     * A getter for `ClipSize` in a weapon component.
     *
     * Hash: 0xE14CF665
     */
    function getComponentClipSize(componentHash) {
        if (typeof componentHash === 'string')
            componentHash = game.getHashKey(componentHash);
        return GetWeaponComponentClipSize(componentHash);
    }
    weapon.getComponentClipSize = getComponentClipSize;
    /**
     * A getter for `CWeaponDamageModifier` in a weapon component.
     *
     * Hash: 0x4A0E3855
     */
    function getComponentDamageModifier(componentHash) {
        if (typeof componentHash === 'string')
            componentHash = game.getHashKey(componentHash);
        return GetWeaponComponentDamageModifier(componentHash);
    }
    weapon.getComponentDamageModifier = getComponentDamageModifier;
    /**
     * A getter for `CWeaponFallOffModifier` damage modifier value in a weapon component.
     *
     * Hash: 0xE134FB8D
     */
    function getComponentRangeDamageModifier(componentHash) {
        if (typeof componentHash === 'string')
            componentHash = game.getHashKey(componentHash);
        return GetWeaponComponentRangeDamageModifier(componentHash);
    }
    weapon.getComponentRangeDamageModifier = getComponentRangeDamageModifier;
    /**
     * A getter for `CWeaponFallOffModifier` range modifier value in a weapon component.
     *
     * Hash: 0x2FD0BC1B
     */
    function getComponentRangeModifier(componentHash) {
        if (typeof componentHash === 'string')
            componentHash = game.getHashKey(componentHash);
        return GetWeaponComponentRangeModifier(componentHash);
    }
    weapon.getComponentRangeModifier = getComponentRangeModifier;
    /**
     * A getter for `ReticuleHash` in a weapon scope component.
     *
     * Hash: 0xF9AB9297
     */
    function getComponentReticuleHash(componentHash) {
        if (typeof componentHash === 'string')
            componentHash = game.getHashKey(componentHash);
        return GetWeaponComponentReticuleHash(componentHash);
    }
    weapon.getComponentReticuleHash = getComponentReticuleHash;
    /**
     * A getter for [\_SET_WEAPON_DAMAGE_MODIFIER](#\_0x4757F00BC6323CFE).
     *
     * Hash: 0xD979143
     */
    function getDamageModifier(weaponHash) {
        if (typeof weaponHash === 'string')
            weaponHash = game.getHashKey(weaponHash);
        return GetWeaponDamageModifier(weaponHash);
    }
    weapon.getDamageModifier = getDamageModifier;
    /**
     * A getter for the recoil shake amplitude of a weapon.
     *
     * Hash: 0x5E1AF5F
     */
    function getRecoilShakeAmplitude(weaponHash) {
        if (typeof weaponHash === 'string')
            weaponHash = game.getHashKey(weaponHash);
        return GetWeaponRecoilShakeAmplitude(weaponHash);
    }
    weapon.getRecoilShakeAmplitude = getRecoilShakeAmplitude;
    /**
     * Disables weapons aim blocking due to environment for local player.
     * For non-player peds [SET_PED_ENABLE_WEAPON_BLOCKING](#\_0x97A790315D3831FD) can be used.
     *
     * Hash: 0xDFD8F6DE
     */
    function setsNoAimBlocking(state) {
        SetWeaponsNoAimBlocking(state);
    }
    weapon.setsNoAimBlocking = setsNoAimBlocking;
    /**
     * Disables the game's built-in auto-reloading.
     *
     * Hash: 0x311150E5
     */
    function setsNoAutoreload(state) {
        SetWeaponsNoAutoreload(state);
    }
    weapon.setsNoAutoreload = setsNoAutoreload;
    /**
     * Disables autoswapping to another weapon when the current weapon runs out of ammo.
     *
     * Hash: 0x2A7B50E
     */
    function setsNoAutoswap(state) {
        SetWeaponsNoAutoswap(state);
    }
    weapon.setsNoAutoswap = setsNoAutoswap;
    /**
     * A setter for the accuracy spread of a weapon.
     *
     * Hash: 0x598DD6AE
     */
    function setAccuracySpread(weaponHash, spread) {
        if (typeof weaponHash === 'string')
            weaponHash = game.getHashKey(weaponHash);
        SetWeaponAccuracySpread(weaponHash, spread);
    }
    weapon.setAccuracySpread = setAccuracySpread;
    /**
     * A setter for the recoil shake amplitude of a weapon.
     *
     * Hash: 0x9864312F
     */
    function setRecoilShakeAmplitude(weaponHash, amplitude) {
        if (typeof weaponHash === 'string')
            weaponHash = game.getHashKey(weaponHash);
        SetWeaponRecoilShakeAmplitude(weaponHash, amplitude);
    }
    weapon.setRecoilShakeAmplitude = setRecoilShakeAmplitude;
})(weapon || (weapon = {}));
export var network;
(function (network) {
    /**
     * No comment provided
     *
     * Hash: 0x2CAFD5E9
     */
    function getWalkMode() {
        return GetNetworkWalkMode();
    }
    network.getWalkMode = getWalkMode;
    /**
     * No comment provided
     *
     * Hash: 0x55188D2D
     */
    function setWalkMode(enabled) {
        SetNetworkWalkMode(enabled);
    }
    network.setWalkMode = setWalkMode;
    /**
     * No comment provided
     *
     * Hash: 0x1E2E3177
     */
    function doesEntityExistWithNetworkId(netId) {
        return NetworkDoesEntityExistWithNetworkId(netId);
    }
    network.doesEntityExistWithNetworkId = doesEntityExistWithNetworkId;
    /**
     * Returns the owner ID of the specified entity.
     *
     * Hash: 0x526FEE31
     */
    function getEntityOwner(entity) {
        const _entity = entity instanceof IEntity ? entity.handle() : entity;
        return NetworkGetEntityOwner(_entity);
    }
    network.getEntityOwner = getEntityOwner;
})(network || (network = {}));
export var shapetest;
(function (shapetest) {
    /**
     * Returns the result of a shape test, also returning the material of any touched surface.
     *
     * When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.
     *
     * Unless the return value is 2, the other return values are undefined.
     *
     * Hash: 0x4301E10C
     */
    function getResultIncludingMaterial(shapeTestHandle) {
        return GetShapeTestResultIncludingMaterial(shapeTestHandle);
    }
    shapetest.getResultIncludingMaterial = getResultIncludingMaterial;
})(shapetest || (shapetest = {}));
export var camera;
(function (camera_1) {
    /**
     * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
     *
     * Hash: 0x8F57A89D
     */
    function getCamMatrix(camera, rightVector, forwardVector, upVector, position) {
        const _camera = camera instanceof ICamera ? camera.handle() : camera;
        GetCamMatrix(_camera, rightVector, forwardVector, upVector, position);
    }
    camera_1.getCamMatrix = getCamMatrix;
})(camera || (camera = {}));
export var discord;
(function (discord) {
    /**
     * This native sets the app id for the discord rich presence implementation.
     *
     * Hash: 0x6A02254D
     */
    function setAppId(appId) {
        SetDiscordAppId(appId);
    }
    discord.setAppId = setAppId;
    /**
     * Sets a clickable button to be displayed in a player's Discord rich presence.
     *
     * Hash: 0xCBBC3FAC
     */
    function setRichPresenceAction(index, label, url) {
        SetDiscordRichPresenceAction(index, label, url);
    }
    discord.setRichPresenceAction = setRichPresenceAction;
    /**
     * This native sets the image asset for the discord rich presence implementation.
     *
     * Hash: 0x53DFD530
     */
    function setRichPresenceAsset(assetName) {
        SetDiscordRichPresenceAsset(assetName);
    }
    discord.setRichPresenceAsset = setRichPresenceAsset;
    /**
     * This native sets the small image asset for the discord rich presence implementation.
     *
     * Hash: 0xF61D04C4
     */
    function setRichPresenceAssetSmall(assetName) {
        SetDiscordRichPresenceAssetSmall(assetName);
    }
    discord.setRichPresenceAssetSmall = setRichPresenceAssetSmall;
    /**
     * This native sets the hover text of the small image asset for the discord rich presence implementation.
     *
     * Hash: 0x35E62B6A
     */
    function setRichPresenceAssetSmallText(text) {
        SetDiscordRichPresenceAssetSmallText(text);
    }
    discord.setRichPresenceAssetSmallText = setRichPresenceAssetSmallText;
    /**
     * This native sets the hover text of the image asset for the discord rich presence implementation.
     *
     * Hash: 0xB029D2FA
     */
    function setRichPresenceAssetText(text) {
        SetDiscordRichPresenceAssetText(text);
    }
    discord.setRichPresenceAssetText = setRichPresenceAssetText;
})(discord || (discord = {}));
export var dui;
(function (dui) {
    /**
     * Creates a DUI browser. This can be used to draw on a runtime texture using CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
     *
     * Hash: 0x23EAF899
     */
    function create(url, width, height) {
        return CreateDui(url, width, height);
    }
    dui.create = create;
    /**
     * Destroys a DUI browser.
     *
     * Hash: 0xA085CB10
     */
    function destroy(duiObject) {
        DestroyDui(duiObject);
    }
    dui.destroy = destroy;
    /**
     * Returns the NUI window handle for a specified DUI browser object.
     *
     * Hash: 0x1655D41D
     */
    function getHandle(duiObject) {
        return GetDuiHandle(duiObject);
    }
    dui.getHandle = getHandle;
    /**
     * Returns whether or not a browser is created for a specified DUI browser object.
     *
     * Hash: 0x7AAC3B4C
     */
    function isAvailable(duiObject) {
        return IsDuiAvailable(duiObject);
    }
    dui.isAvailable = isAvailable;
    /**
     * Sends a message to the specific DUI root page. This is similar to SEND_NUI_MESSAGE.
     *
     * Hash: 0xCD380DA9
     */
    function sendMessage(duiObject, jsonString) {
        SendDuiMessage(duiObject, jsonString);
    }
    dui.sendMessage = sendMessage;
    /**
     * Injects a 'mouse down' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
     *
     * Hash: 0x5D01F191
     */
    function sendMouseDown(duiObject, button) {
        SendDuiMouseDown(duiObject, button);
    }
    dui.sendMouseDown = sendMouseDown;
    /**
     * Injects a 'mouse move' event for a DUI object. Coordinates are in browser space.
     *
     * Hash: 0xD9D7A0AA
     */
    function sendMouseMove(duiObject, x, y) {
        SendDuiMouseMove(duiObject, x, y);
    }
    dui.sendMouseMove = sendMouseMove;
    /**
     * Injects a 'mouse up' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
     *
     * Hash: 0x1D735B93
     */
    function sendMouseUp(duiObject, button) {
        SendDuiMouseUp(duiObject, button);
    }
    dui.sendMouseUp = sendMouseUp;
    /**
     * Injects a 'mouse wheel' event for a DUI object.
     *
     * Hash: 0x2D62133A
     */
    function sendMouseWheel(duiObject, deltaY, deltaX) {
        SendDuiMouseWheel(duiObject, deltaY, deltaX);
    }
    dui.sendMouseWheel = sendMouseWheel;
    /**
     * Navigates the specified DUI browser to a different URL.
     *
     * Hash: 0xF761D9F3
     */
    function setUrl(duiObject, url) {
        SetDuiUrl(duiObject, url);
    }
    dui.setUrl = setUrl;
})(dui || (dui = {}));
export var kvp;
(function (kvp) {
    /**
     * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938), but for a specified resource.
     *
     * Hash: 0x3CC98B25
     */
    function getExternalFloat(resource, key) {
        return GetExternalKvpFloat(resource, key);
    }
    kvp.getExternalFloat = getExternalFloat;
    /**
     * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8), but for a specified resource.
     *
     * Hash: 0x12B8D689
     */
    function getExternalInt(resource, key) {
        return GetExternalKvpInt(resource, key);
    }
    kvp.getExternalInt = getExternalInt;
    /**
     * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B), but for a specified resource.
     *
     * Hash: 0x9080363A
     */
    function getExternalString(resource, key) {
        return GetExternalKvpString(resource, key);
    }
    kvp.getExternalString = getExternalString;
    /**
     * Equivalent of [START_FIND_KVP](#\_0xDD379006), but for another resource than the current one.
     *
     * Hash: 0x8F2EECC3
     */
    function startFindExternal(resourceName, prefix) {
        return StartFindExternalKvp(resourceName, prefix);
    }
    kvp.startFindExternal = startFindExternal;
    /**
     * No comment provided
     *
     * Hash: 0xB3210203
     */
    function endFind(handle) {
        EndFindKvp(handle);
    }
    kvp.endFind = endFind;
    /**
     * No comment provided
     *
     * Hash: 0xBD7BEBC5
     */
    function find(handle) {
        return FindKvp(handle);
    }
    kvp.find = find;
    /**
     * No comment provided
     *
     * Hash: 0xDD379006
     */
    function startFind(prefix) {
        return StartFindKvp(prefix);
    }
    kvp.startFind = startFind;
})(kvp || (kvp = {}));
export var mumble;
(function (mumble) {
    /**
     * Starts listening to the specified channel, when available.
     *
     * Hash: 0xC79F44BF
     */
    function addVoiceChannelListen(channel) {
        MumbleAddVoiceChannelListen(channel);
    }
    mumble.addVoiceChannelListen = addVoiceChannelListen;
    /**
     * Adds the specified channel to the target list for the specified Mumble voice target ID.
     *
     * Hash: 0x4D386C9E
     */
    function addVoiceTargetChannel(targetId, channel) {
        MumbleAddVoiceTargetChannel(targetId, channel);
    }
    mumble.addVoiceTargetChannel = addVoiceTargetChannel;
    /**
     * Adds the specified player to the target list for the specified Mumble voice target ID.
     *
     * Hash: 0x32C5355A
     */
    function addVoiceTargetPlayer(targetId, player) {
        const _player = player instanceof IPlayer ? player.localId() : player;
        MumbleAddVoiceTargetPlayer(targetId, _player);
    }
    mumble.addVoiceTargetPlayer = addVoiceTargetPlayer;
    /**
     * Adds the specified player to the target list for the specified Mumble voice target ID.
     *
     * Hash: 0x25F2B65F
     */
    function addVoiceTargetPlayerByServerId(targetId, serverId) {
        MumbleAddVoiceTargetPlayerByServerId(targetId, serverId);
    }
    mumble.addVoiceTargetPlayerByServerId = addVoiceTargetPlayerByServerId;
    /**
     * No comment provided
     *
     * Hash: 0xBF847807
     */
    function clearVoiceChannel() {
        MumbleClearVoiceChannel();
    }
    mumble.clearVoiceChannel = clearVoiceChannel;
    /**
     * Clears the target list for the specified Mumble voice target ID.
     *
     * Hash: 0x8555DCBA
     */
    function clearVoiceTarget(targetId) {
        MumbleClearVoiceTarget(targetId);
    }
    mumble.clearVoiceTarget = clearVoiceTarget;
    /**
     * Clears channels from the target list for the specified Mumble voice target ID.
     *
     * Hash: 0x5EA72E76
     */
    function clearVoiceTargetChannels(targetId) {
        MumbleClearVoiceTargetChannels(targetId);
    }
    mumble.clearVoiceTargetChannels = clearVoiceTargetChannels;
    /**
     * Clears players from the target list for the specified Mumble voice target ID.
     *
     * Hash: 0x912E21DA
     */
    function clearVoiceTargetPlayers(targetId) {
        MumbleClearVoiceTargetPlayers(targetId);
    }
    mumble.clearVoiceTargetPlayers = clearVoiceTargetPlayers;
    /**
     * Check whether specified channel exists on the Mumble server.
     *
     * Hash: 0xCC8CA25
     */
    function doesChannelExist(channel) {
        return MumbleDoesChannelExist(channel);
    }
    mumble.doesChannelExist = doesChannelExist;
    /**
     * No comment provided
     *
     * Hash: 0x84E02A32
     */
    function getTalkerProximity() {
        return MumbleGetTalkerProximity();
    }
    mumble.getTalkerProximity = getTalkerProximity;
    /**
     * Returns the mumble voice channel from a player's server id.
     *
     * Hash: 0x221C09F1
     */
    function getVoiceChannelFromServerId(serverId) {
        return MumbleGetVoiceChannelFromServerId(serverId);
    }
    mumble.getVoiceChannelFromServerId = getVoiceChannelFromServerId;
    /**
     * No comment provided
     *
     * Hash: 0xE820BC10
     */
    function isActive() {
        return MumbleIsActive();
    }
    mumble.isActive = isActive;
    /**
     * This native will return true if the user succesfully connected to the voice server.
     * If the user disabled the voice-chat setting it will return false.
     *
     * Hash: 0xB816370A
     */
    function isConnected() {
        return MumbleIsConnected();
    }
    mumble.isConnected = isConnected;
    /**
     * No comment provided
     *
     * Hash: 0x33EEF97F
     */
    function isPlayerTalking(player) {
        const _player = player instanceof IPlayer ? player.localId() : player;
        return MumbleIsPlayerTalking(_player);
    }
    mumble.isPlayerTalking = isPlayerTalking;
    /**
     * Stops listening to the specified channel.
     *
     * Hash: 0x231523B7
     */
    function removeVoiceChannelListen(channel) {
        MumbleRemoveVoiceChannelListen(channel);
    }
    mumble.removeVoiceChannelListen = removeVoiceChannelListen;
    /**
     * Removes the specified voice channel from the user's voice targets.
     *
     * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_CHANNEL](#\_0x4D386C9E)
     *
     * Hash: 0x268DB867
     */
    function removeVoiceTargetChannel(targetId, channel) {
        MumbleRemoveVoiceTargetChannel(targetId, channel);
    }
    mumble.removeVoiceTargetChannel = removeVoiceTargetChannel;
    /**
     * Removes the specified player from the user's voice targets.
     *
     * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER](#\_0x32C5355A)
     *
     * Hash: 0x88CD646F
     */
    function removeVoiceTargetPlayer(targetId, player) {
        const _player = player instanceof IPlayer ? player.localId() : player;
        MumbleRemoveVoiceTargetPlayer(targetId, _player);
    }
    mumble.removeVoiceTargetPlayer = removeVoiceTargetPlayer;
    /**
     * Removes the specified player from the user's voice targets.
     *
     * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID](#\_0x25F2B65F)
     *
     * Hash: 0x930BD34B
     */
    function removeVoiceTargetPlayerByServerId(targetId, serverId) {
        MumbleRemoveVoiceTargetPlayerByServerId(targetId, serverId);
    }
    mumble.removeVoiceTargetPlayerByServerId = removeVoiceTargetPlayerByServerId;
    /**
     * No comment provided
     *
     * Hash: 0xD932A3F3
     */
    function setActive(state) {
        MumbleSetActive(state);
    }
    mumble.setActive = setActive;
    /**
     * Sets the current input distance. The player will be able to talk to other players within this distance.
     *
     * Hash: 0x1B1052E2
     */
    function setAudioInputDistance(distance) {
        MumbleSetAudioInputDistance(distance);
    }
    mumble.setAudioInputDistance = setAudioInputDistance;
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
    function setAudioInputIntent(intentHash) {
        if (typeof intentHash === 'string')
            intentHash = game.getHashKey(intentHash);
        MumbleSetAudioInputIntent(intentHash);
    }
    mumble.setAudioInputIntent = setAudioInputIntent;
    /**
     * Sets the current output distance. The player will be able to hear other players talking within this distance.
     *
     * Hash: 0x74C597D9
     */
    function setAudioOutputDistance(distance) {
        MumbleSetAudioOutputDistance(distance);
    }
    mumble.setAudioOutputDistance = setAudioOutputDistance;
    /**
     * Changes the Mumble server address to connect to, and reconnects to the new address.
     *
     * Setting the address to an empty string and the port to -1 will reset to the built in FXServer Mumble Implementation.
     *
     * Hash: 0xE6EB2CD8
     */
    function setServerAddress(address, port) {
        MumbleSetServerAddress(address, port);
    }
    mumble.setServerAddress = setServerAddress;
    /**
     * Sets the audio submix ID for a specified player using Mumble 'Native Audio' functionality.
     *
     * Hash: 0xFE3A3054
     */
    function setSubmixForServerId(serverId, submixId) {
        MumbleSetSubmixForServerId(serverId, submixId);
    }
    mumble.setSubmixForServerId = setSubmixForServerId;
    /**
     * No comment provided
     *
     * Hash: 0x74E927B0
     */
    function setTalkerProximity(value) {
        MumbleSetTalkerProximity(value);
    }
    mumble.setTalkerProximity = setTalkerProximity;
    /**
     * No comment provided
     *
     * Hash: 0x8737EEE8
     */
    function setVoiceChannel(channel) {
        MumbleSetVoiceChannel(channel);
    }
    mumble.setVoiceChannel = setVoiceChannel;
    /**
     * Sets the current Mumble voice target ID to broadcast voice to.
     *
     * Hash: 0x960A4A95
     */
    function setVoiceTarget(targetId) {
        MumbleSetVoiceTarget(targetId);
    }
    mumble.setVoiceTarget = setVoiceTarget;
    /**
     * Overrides the output volume for a particular player on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
     *
     * Set to -1.0 to reset the Volume override.
     *
     * Hash: 0x61C309E3
     */
    function setVolumeOverride(player, volume) {
        const _player = player instanceof IPlayer ? player.localId() : player;
        MumbleSetVolumeOverride(_player, volume);
    }
    mumble.setVolumeOverride = setVolumeOverride;
    /**
     * Overrides the output volume for a particular player with the specified server id and player name on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
     *
     * Hash: 0xCE8E25B4
     */
    function setVolumeOverrideByServerId(serverId, volume) {
        MumbleSetVolumeOverrideByServerId(serverId, volume);
    }
    mumble.setVolumeOverrideByServerId = setVolumeOverrideByServerId;
})(mumble || (mumble = {}));
export var nui;
(function (nui) {
    /**
     * No comment provided
     *
     * Hash: 0xBDBA226F
     */
    function getCursorPosition() {
        return GetNuiCursorPosition();
    }
    nui.getCursorPosition = getCursorPosition;
    /**
     * Returns the current NUI focus state previously set with `SET_NUI_FOCUS`.
     *
     * Hash: 0x98545E6D
     */
    function isFocused() {
        return IsNuiFocused();
    }
    nui.isFocused = isFocused;
    /**
     * Checks if keyboard input is enabled during NUI focus using `SET_NUI_FOCUS_KEEP_INPUT`.
     *
     * Hash: 0x39C9DC92
     */
    function isFocusKeepingInput() {
        return IsNuiFocusKeepingInput();
    }
    nui.isFocusKeepingInput = isFocusKeepingInput;
    /**
     * No comment provided
     *
     * Hash: 0xC59B980C
     */
    function registerCallback(callbackType, callback) {
        RegisterNuiCallback(callbackType, callback);
    }
    nui.registerCallback = registerCallback;
    /**
     * No comment provided
     *
     * Hash: 0xCD03CDA9
     */
    function registerCallbackType(callbackType) {
        RegisterNuiCallbackType(callbackType);
    }
    nui.registerCallbackType = registerCallbackType;
    /**
     * No comment provided
     *
     * Hash: 0xA8AE9C2F
     */
    function registerRawCallback(callbackType, callback) {
        RegisterRawNuiCallback(callbackType, callback);
    }
    nui.registerRawCallback = registerRawCallback;
    /**
     * No comment provided
     *
     * Hash: 0x78608ACB
     */
    function sendMessage(jsonString) {
        return SendNuiMessage(jsonString);
    }
    nui.sendMessage = sendMessage;
    /**
     * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
     * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
     *
     * Hash: 0x1722C938
     */
    function setManualShutdownLoadingScreen(manualShutdown) {
        SetManualShutdownLoadingScreenNui(manualShutdown);
    }
    nui.setManualShutdownLoadingScreen = setManualShutdownLoadingScreen;
    /**
     * No comment provided
     *
     * Hash: 0x5B98AE30
     */
    function setFocus(hasFocus, hasCursor) {
        SetNuiFocus(hasFocus, hasCursor);
    }
    nui.setFocus = setFocus;
    /**
     * No comment provided
     *
     * Hash: 0x3FF5E5F8
     */
    function setFocusKeepInput(keepInput) {
        SetNuiFocusKeepInput(keepInput);
    }
    nui.setFocusKeepInput = setFocusKeepInput;
    /**
     * Set the z-index of the NUI resource.
     *
     * Hash: 0x3734AAFF
     */
    function setZindex(zIndex) {
        SetNuiZindex(zIndex);
    }
    nui.setZindex = setZindex;
    /**
     * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
     *
     * Hash: 0xB9234AFB
     */
    function shutdownLoadingScreen() {
        ShutdownLoadingScreenNui();
    }
    nui.shutdownLoadingScreen = shutdownLoadingScreen;
    /**
     * Will unregister and cleanup a registered NUI callback handler.
     *
     * Use along side the REGISTER_RAW_NUI_CALLBACK native.
     *
     * Hash: 0x7FB46432
     */
    function unregisterRawCallback(callbackType) {
        UnregisterRawNuiCallback(callbackType);
    }
    nui.unregisterRawCallback = unregisterRawCallback;
})(nui || (nui = {}));
export var object;
(function (object) {
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
    function doorSystemGetActive() {
        return DoorSystemGetActive();
    }
    object.doorSystemGetActive = doorSystemGetActive;
    /**
     * No comment provided
     *
     * Hash: 0x237613B3
     */
    function doorSystemGetSize() {
        return DoorSystemGetSize();
    }
    object.doorSystemGetSize = doorSystemGetSize;
})(object || (object = {}));
export var pad;
(function (pad) {
    /**
     * Disables the specified `rawKeyIndex`, making it not trigger the regular `IS_RAW_KEY_*` natives.
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0x8BCF0014
     */
    function disableRawKeyThisFrame(rawKeyIndex) {
        return DisableRawKeyThisFrame(rawKeyIndex);
    }
    pad.disableRawKeyThisFrame = disableRawKeyThisFrame;
    /**
     * Gets if the specified `rawKeyIndex` is pressed down, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0x36366EC3
     */
    function isDisabledRawKeyDown(rawKeyIndex) {
        return IsDisabledRawKeyDown(rawKeyIndex);
    }
    pad.isDisabledRawKeyDown = isDisabledRawKeyDown;
    /**
     * Gets if the specified `rawKeyIndex` is pressed, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0x1F7CBBAA
     */
    function isDisabledRawKeyPressed(rawKeyIndex) {
        return IsDisabledRawKeyPressed(rawKeyIndex);
    }
    pad.isDisabledRawKeyPressed = isDisabledRawKeyPressed;
    /**
     * Gets if the specified `rawKeyIndex` was released, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0x72B66C09
     */
    function isDisabledRawKeyReleased(rawKeyIndex) {
        return IsDisabledRawKeyReleased(rawKeyIndex);
    }
    pad.isDisabledRawKeyReleased = isDisabledRawKeyReleased;
    /**
     * Gets if the specified `rawKeyIndex` is up, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0x2C033875
     */
    function isDisabledRawKeyUp(rawKeyIndex) {
        return IsDisabledRawKeyUp(rawKeyIndex);
    }
    pad.isDisabledRawKeyUp = isDisabledRawKeyUp;
    /**
     * Gets if the specified `rawKeyIndex` is pressed down on the keyboard.
     *
     * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0xD95A7387
     */
    function isRawKeyDown(rawKeyIndex) {
        return IsRawKeyDown(rawKeyIndex);
    }
    pad.isRawKeyDown = isRawKeyDown;
    /**
     * Gets if the specified `rawKeyIndex` is pressed on the keyboard.
     *
     * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0x69F7C29E
     */
    function isRawKeyPressed(rawKeyIndex) {
        return IsRawKeyPressed(rawKeyIndex);
    }
    pad.isRawKeyPressed = isRawKeyPressed;
    /**
     * Gets if the specified `rawKeyIndex` was just released on the keyboard.
     *
     * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0xEAA50861
     */
    function isRawKeyReleased(rawKeyIndex) {
        return IsRawKeyReleased(rawKeyIndex);
    }
    pad.isRawKeyReleased = isRawKeyReleased;
    /**
     * Gets if the specified `rawKeyIndex` is up  on the keyboard.
     *
     * This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)
     *
     * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
     *
     * Hash: 0x36F4E505
     */
    function isRawKeyUp(rawKeyIndex) {
        return IsRawKeyUp(rawKeyIndex);
    }
    pad.isRawKeyUp = isRawKeyUp;
})(pad || (pad = {}));
export var social;
(function (social) {
    /**
     * Sets the player's rich presence detail state for social platform providers to a specified string.
     *
     * Hash: 0x7BDCBD45
     */
    function setRichPresence(presenceState) {
        SetRichPresence(presenceState);
    }
    social.setRichPresence = setRichPresence;
})(social || (social = {}));
export var resource;
(function (resource_1) {
    /**
     * No comment provided
     *
     * Hash: 0x7389B5DF
     */
    function deleteKvp(key) {
        DeleteResourceKvp(key);
    }
    resource_1.deleteKvp = deleteKvp;
    /**
     * Nonsynchronous [DELETE_RESOURCE_KVP](#\_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0x4152C90
     */
    function deleteKvpNoSync(key) {
        DeleteResourceKvpNoSync(key);
    }
    resource_1.deleteKvpNoSync = deleteKvpNoSync;
    /**
     * Returns the name of the currently executing resource.
     *
     * Hash: 0xE5E9EBBB
     */
    function getCurrentName() {
        return GetCurrentResourceName();
    }
    resource_1.getCurrentName = getCurrentName;
    /**
     * No comment provided
     *
     * Hash: 0x4D52FE5B
     */
    function getInvoking() {
        return GetInvokingResource();
    }
    resource_1.getInvoking = getInvoking;
    /**
     * No comment provided
     *
     * Hash: 0x863F27B
     */
    function getNums() {
        return GetNumResources();
    }
    resource_1.getNums = getNums;
    /**
     * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
     * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
     *
     * Hash: 0x776E864
     */
    function getNumMetadata(resourceName, metadataKey) {
        return GetNumResourceMetadata(resourceName, metadataKey);
    }
    resource_1.getNumMetadata = getNumMetadata;
    /**
     * No comment provided
     *
     * Hash: 0x387246B7
     */
    function getByFindIndex(findIndex) {
        return GetResourceByFindIndex(findIndex);
    }
    resource_1.getByFindIndex = getByFindIndex;
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
    function getCommands(resource) {
        return GetResourceCommands(resource);
    }
    resource_1.getCommands = getCommands;
    /**
     * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
     *
     * Hash: 0x35BDCEEA
     */
    function getKvpFloat(key) {
        return GetResourceKvpFloat(key);
    }
    resource_1.getKvpFloat = getKvpFloat;
    /**
     * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
     *
     * Hash: 0x557B586A
     */
    function getKvpInt(key) {
        return GetResourceKvpInt(key);
    }
    resource_1.getKvpInt = getKvpInt;
    /**
     * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
     *
     * Hash: 0x5240DA5A
     */
    function getKvpString(key) {
        return GetResourceKvpString(key);
    }
    resource_1.getKvpString = getKvpString;
    /**
     * Gets the metadata value at a specified key/index from a resource's manifest.
     * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
     *
     * Hash: 0x964BAB1D
     */
    function getMetadata(resourceName, metadataKey, index) {
        return GetResourceMetadata(resourceName, metadataKey, index);
    }
    resource_1.getMetadata = getMetadata;
    /**
     * Returns the current state of the specified resource.
     *
     * Hash: 0x4039B485
     */
    function getState(resourceName) {
        return GetResourceState(resourceName);
    }
    resource_1.getState = getState;
    /**
     * Reads the contents of a text file in a specified resource.
     * If executed on the client, this file has to be included in `files` in the resource manifest.
     * Example: `local data = LoadResourceFile("devtools", "data.json")`
     *
     * Hash: 0x76A9EE1F
     */
    function loadFile(resourceName, fileName) {
        return LoadResourceFile(resourceName, fileName);
    }
    resource_1.loadFile = loadFile;
    /**
     * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
     *
     * Hash: 0xD233A168
     */
    function registerAsEventHandler(eventName) {
        RegisterResourceAsEventHandler(eventName);
    }
    resource_1.registerAsEventHandler = registerAsEventHandler;
    /**
     * A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).
     *
     * Hash: 0x21C7A35B
     */
    function setKvp(key, value) {
        SetResourceKvp(key, value);
    }
    resource_1.setKvp = setKvp;
    /**
     * A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).
     *
     * Hash: 0x9ADD2938
     */
    function setKvpFloat(key, value) {
        SetResourceKvpFloat(key, value);
    }
    resource_1.setKvpFloat = setKvpFloat;
    /**
     * Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0x3517BFBE
     */
    function setKvpFloatNoSync(key, value) {
        SetResourceKvpFloatNoSync(key, value);
    }
    resource_1.setKvpFloatNoSync = setKvpFloatNoSync;
    /**
     * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
     *
     * Hash: 0x6A2B1E8
     */
    function setKvpInt(key, value) {
        SetResourceKvpInt(key, value);
    }
    resource_1.setKvpInt = setKvpInt;
    /**
     * Nonsynchronous [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0x26AEB707
     */
    function setKvpIntNoSync(key, value) {
        SetResourceKvpIntNoSync(key, value);
    }
    resource_1.setKvpIntNoSync = setKvpIntNoSync;
    /**
     * Nonsynchronous [SET_RESOURCE_KVP](#\_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
     *
     * Hash: 0xCF9A2FF
     */
    function setKvpNoSync(key, value) {
        SetResourceKvpNoSync(key, value);
    }
    resource_1.setKvpNoSync = setKvpNoSync;
})(resource || (resource = {}));
export var profiler;
(function (profiler) {
    /**
     * Scope entry for profiler.
     *
     * Hash: 0xC795A4A9
     */
    function enterScope(scopeName) {
        ProfilerEnterScope(scopeName);
    }
    profiler.enterScope = enterScope;
    /**
     * Scope exit for profiler.
     *
     * Hash: 0xB39CA35C
     */
    function exitScope() {
        ProfilerExitScope();
    }
    profiler.exitScope = exitScope;
    /**
     * Returns true if the profiler is active.
     *
     * Hash: 0xF8B7D7BB
     */
    function isRecording() {
        return ProfilerIsRecording();
    }
    profiler.isRecording = isRecording;
})(profiler || (profiler = {}));
// Deprecated root-level access - use namespaced functions instead
/**
 * Allows StaticEmitter's without a linked entity to make use of environment features like occlusion and reverb even if they are located higher than 20.0 units above any static collision inside interiors.
 *
 * This native allows you to extend the probe range up to 150.0 units.
 *
 * Hash: 0x8AA1F3C2
 * @deprecated Use audio.setEmitterProbeLength(probeLength) instead
 */
export function setEmitterProbeLength(probeLength) {
    return audio.setEmitterProbeLength(probeLength);
}
/**
 * Adds an output for the specified audio submix.
 *
 * Hash: 0xAC6E290D
 * @deprecated Use audio.addSubmixOutput(submixId, outputSubmixId) instead
 */
export function addAudioSubmixOutput(submixId, outputSubmixId) {
    return audio.addSubmixOutput(submixId, outputSubmixId);
}
/**
 * Creates an audio submix with the specified name, or gets the existing audio submix by that name.
 *
 * Hash: 0x658D2BC8
 * @deprecated Use audio.createSubmix(name) instead
 */
export function createAudioSubmix(name) {
    return audio.createSubmix(name);
}
/**
 * Sets a floating-point parameter for a submix effect.
 *
 * Hash: 0x9A209B3C
 * @deprecated Use audio.setSubmixEffectParamFloat(submixId, effectSlot, paramIndex, paramValue) instead
 */
export function setAudioSubmixEffectParamFloat(submixId, effectSlot, paramIndex, paramValue) {
    return audio.setSubmixEffectParamFloat(submixId, effectSlot, paramIndex, paramValue);
}
/**
 * Sets an integer parameter for a submix effect.
 *
 * Hash: 0x77FAE2B8
 * @deprecated Use audio.setSubmixEffectParamInt(submixId, effectSlot, paramIndex, paramValue) instead
 */
export function setAudioSubmixEffectParamInt(submixId, effectSlot, paramIndex, paramValue) {
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
export function setAudioSubmixEffectRadioFx(submixId, effectSlot) {
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
export function setAudioSubmixOutputVolumes(submixId, outputSlot, frontLeftVolume, frontRightVolume, rearLeftVolume, rearRightVolume, channel5Volume, channel6Volume) {
    return audio.setSubmixOutputVolumes(submixId, outputSlot, frontLeftVolume, frontRightVolume, rearLeftVolume, rearRightVolume, channel5Volume, channel6Volume);
}
/**
 * Returns entity's archetype name, if available.
 *
 * Hash: 0x47B870F5
 * @deprecated Use entity.getArchetypeName(entity1) instead
 */
export function getEntityArchetypeName(entity1) {
    return entity.getArchetypeName(entity1);
}
/**
 * Returns the transient entity index for a specified mapdata/entity pair.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xEE43540D
 * @deprecated Use entity.getIndexFromMapdata(mapdata, entity1) instead
 */
export function getEntityIndexFromMapdata(mapdata, entity1) {
    return entity.getIndexFromMapdata(mapdata, entity1);
}
/**
 * Retrieves the map data and entity handles from a specific entity.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xF6B815C5
 * @deprecated Use entity.getMapdataOwner(entity1) instead
 */
export function getEntityMapdataOwner(entity1) {
    return entity.getMapdataOwner(entity1);
}
/**
 * Resets mapdata entity transform matrix to its original state.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x8143FA4F
 * @deprecated Use entity.resetMapdataMatrix(mapDataHash, entityInternalIdx) instead
 */
export function resetMapdataEntityMatrix(mapDataHash, entityInternalIdx) {
    return entity.resetMapdataMatrix(mapDataHash, entityInternalIdx);
}
/**
 * Gets the selected entity at the current mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x3DD8130F
 * @deprecated Use entity.selectAtCursor(hitFlags, precise) instead
 */
export function selectEntityAtCursor(hitFlags, precise) {
    return entity.selectAtCursor(hitFlags, precise);
}
/**
 * Gets the selected entity at the specified mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xAFE8D405
 * @deprecated Use entity.selectAtPos(fracX, fracY, hitFlags, precise) instead
 */
export function selectEntityAtPos(fracX, fracY, hitFlags, precise) {
    return entity.selectAtPos(fracX, fracY, hitFlags, precise);
}
/**
 * Sets an entity's matrix. Arguments are in the same order as with GET_ENTITY_MATRIX.
 *
 * Hash: 0xFB0639B
 * @deprecated Use entity.setMatrix(entity1, forwardX, forwardY, forwardZ, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ) instead
 */
export function setEntityMatrix(entity1, forwardX, forwardY, forwardZ, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ) {
    return entity.setMatrix(entity1, forwardX, forwardY, forwardZ, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ);
}
/**
 * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
 *
 * Hash: 0xEDBE6ADD
 * @deprecated Use entity.isPositionFrozen(entity1) instead
 */
export function isEntityPositionFrozen(entity1) {
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
export function getEntityAddress(entity1) {
    return entity.getAddress(entity1);
}
/**
 * Internal function for ensuring an entity has a state bag.
 *
 * Hash: 0x3BB78F05
 * @deprecated Use entity.ensureStateBag(entity1) instead
 */
export function ensureEntityStateBag(entity1) {
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
export function getEntitiesInRadius(pos, radius, entityType, sortByDistance, models) {
    return entity.getEntitiesInRadius(pos, radius, entityType, sortByDistance, models);
}
/**
 * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](#\_0x5BA35AAF).
 *
 * Hash: 0x4BDF1867
 * @deprecated Use entity.getFromStateBagName(bagName) instead
 */
export function getEntityFromStateBagName(bagName) {
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
export function addMinimapOverlay(name) {
    return graphics.addMinimapOverlay(name);
}
/**
 * Loads a minimap overlay from a GFx file in the current resource.
 *
 * Hash: 0xED0935B5
 * @deprecated Use graphics.addMinimapOverlayWithDepth(name, depth) instead
 */
export function addMinimapOverlayWithDepth(name, depth) {
    return graphics.addMinimapOverlayWithDepth(name, depth);
}
/**
 * Experimental natives, please do not use in a live environment.
 *
 * Hash: 0xA66F8F75
 * @deprecated Use graphics.addReplaceTexture(origTxd, origTxn, newTxd, newTxn) instead
 */
export function addReplaceTexture(origTxd, origTxn, newTxd, newTxn) {
    return graphics.addReplaceTexture(origTxd, origTxn, newTxd, newTxn);
}
/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 *
 * Hash: 0x4C89C0ED
 * @deprecated Use graphics.callMinimapScaleformFunction(miniMap, fnName) instead
 */
export function callMinimapScaleformFunction(miniMap, fnName) {
    return graphics.callMinimapScaleformFunction(miniMap, fnName);
}
/**
 * Commits the backing pixels to the specified runtime texture.
 *
 * Hash: 0x19D81F4E
 * @deprecated Use graphics.commitRuntimeTexture(tex) instead
 */
export function commitRuntimeTexture(tex) {
    return graphics.commitRuntimeTexture(tex);
}
/**
 * Creates a blank runtime texture.
 *
 * Hash: 0xFEC3766D
 * @deprecated Use graphics.createRuntimeTexture(txd, txn, width, height) instead
 */
export function createRuntimeTexture(txd, txn, width, height) {
    return graphics.createRuntimeTexture(txd, txn, width, height);
}
/**
 * Creates a runtime texture from a DUI handle.
 *
 * Hash: 0xB135472B
 * @deprecated Use graphics.createRuntimeTextureFromDuiHandle(txd, txn, duiHandle) instead
 */
export function createRuntimeTextureFromDuiHandle(txd, txn, duiHandle) {
    return graphics.createRuntimeTextureFromDuiHandle(txd, txn, duiHandle);
}
/**
 * Creates a runtime texture from the specified file in the current resource or a base64 data URL.
 *
 * Hash: 0x786D8BC3
 * @deprecated Use graphics.createRuntimeTextureFromImage(txd, txn, fileName) instead
 */
export function createRuntimeTextureFromImage(txd, txn, fileName) {
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
export function createRuntimeTxd(name) {
    return graphics.createRuntimeTxd(name);
}
/**
 * Allows drawing advanced light effects, known as coronas, which support flares, volumetric lighting, and customizable glow properties.
 *
 * Hash: 0xFF44780E
 * @deprecated Use graphics.drawCorona(pos, size, red, green, blue, alpha, intensity, zBias, dirX, dirY, dirZ, viewThreshold, innerAngle, outerAngle, flags) instead
 */
export function drawCorona(pos, size, red, green, blue, alpha, intensity, zBias, dirX, dirY, dirZ, viewThreshold, innerAngle, outerAngle, flags) {
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
export function drawGizmo(matrixPtr, id) {
    return graphics.drawGizmo(matrixPtr, id);
}
/**
 * Draw a glow sphere this frame. Up to 256 per single frame.
 *
 * Hash: 0xBD25EC89
 * @deprecated Use graphics.drawGlowSphere(pos, radius, colorR, colorG, colorB, intensity, invert, marker) instead
 */
export function drawGlowSphere(pos, radius, colorR, colorG, colorB, intensity, invert, marker) {
    return graphics.drawGlowSphere(pos, radius, colorR, colorG, colorB, intensity, invert, marker);
}
/**
 * Like DRAW_RECT, but it's a line.
 *
 * Hash: 0xB856A90
 * @deprecated Use graphics.drawLine2d(x1, y1, x2, y2, width, r, g, b, a) instead
 */
export function drawLine2d(x1, y1, x2, y2, width, r, g, b, a) {
    return graphics.drawLine2d(x1, y1, x2, y2, width, r, g, b, a);
}
/**
 * DRAW_RECT, but with a rotation. Seems to be broken.
 *
 * Hash: 0xEC37C168
 * @deprecated Use graphics.drawRectRotated(x, y, width, height, rotation, r, g, b, a) instead
 */
export function drawRectRotated(x, y, width, height, rotation, r, g, b, a) {
    return graphics.drawRectRotated(x, y, width, height, rotation, r, g, b, a);
}
/**
 * Forces the game snow pass to render.
 *
 * Hash: 0xE6E16170
 * @deprecated Use graphics.forceSnowPass(enabled) instead
 */
export function forceSnowPass(enabled) {
    return graphics.forceSnowPass(enabled);
}
/**
 * Returns the world position the pointer is hovering on the pause map.
 *
 * Hash: 0xE5AF7A82
 * @deprecated Use graphics.getPauseMapPointerWorldPosition() instead
 */
export function getPauseMapPointerWorldPosition() {
    return graphics.getPauseMapPointerWorldPosition();
}
/**
 * Gets the height of the specified runtime texture.
 *
 * Hash: 0x3574AACE
 * @deprecated Use graphics.getRuntimeTextureHeight(tex) instead
 */
export function getRuntimeTextureHeight(tex) {
    return graphics.getRuntimeTextureHeight(tex);
}
/**
 * Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.
 *
 * Hash: 0xCA0A085F
 * @deprecated Use graphics.getRuntimeTexturePitch(tex) instead
 */
export function getRuntimeTexturePitch(tex) {
    return graphics.getRuntimeTexturePitch(tex);
}
/**
 * Gets the width of the specified runtime texture.
 *
 * Hash: 0xC9F55558
 * @deprecated Use graphics.getRuntimeTextureWidth(tex) instead
 */
export function getRuntimeTextureWidth(tex) {
    return graphics.getRuntimeTextureWidth(tex);
}
/**
 * Returns whether or not the specific minimap overlay has loaded.
 *
 * Hash: 0xF7535F32
 * @deprecated Use graphics.hasMinimapOverlayLoaded(id) instead
 */
export function hasMinimapOverlayLoaded(id) {
    return graphics.hasMinimapOverlayLoaded(id);
}
/**
 * Experimental natives, please do not use in a live environment.
 *
 * Hash: 0xA896B20A
 * @deprecated Use graphics.removeReplaceTexture(origTxd, origTxn) instead
 */
export function removeReplaceTexture(origTxd, origTxn) {
    return graphics.removeReplaceTexture(origTxd, origTxn);
}
/**
 * This function undoes changes made by [`SET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE`](#\_0x68DFF2DD), restoring the original outline rendering behavior. The default render technique group is `unlit`.
 *
 * Hash: 0x8EB6EC38
 * @deprecated Use graphics.resetEntityDrawOutlineRenderTechnique() instead
 */
export function resetEntityDrawOutlineRenderTechnique() {
    return graphics.resetEntityDrawOutlineRenderTechnique();
}
/**
 * Draws an outline around a given entity. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x76180407
 * @deprecated Use graphics.setEntityDrawOutline(entity, enabled) instead
 */
export function setEntityDrawOutline(entity, enabled) {
    return graphics.setEntityDrawOutline(entity, enabled);
}
/**
 * Sets color for entity outline. `255, 0, 255, 255` by default.
 *
 * Hash: 0xB41A56C2
 * @deprecated Use graphics.setEntityDrawOutlineColor(red, green, blue, alpha) instead
 */
export function setEntityDrawOutlineColor(red, green, blue, alpha) {
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
export function setEntityDrawOutlineRenderTechnique(techniqueGroup) {
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
export function setEntityDrawOutlineShader(shader) {
    return graphics.setEntityDrawOutlineShader(shader);
}
/**
 * This completely disables rendering of fog volumes (vfxfogvolumeinfo.ymt).
 *
 * Hash: 0xFBC64DA3
 * @deprecated Use graphics.setFogVolumeRenderDisabled(state) instead
 */
export function setFogVolumeRenderDisabled(state) {
    return graphics.setFogVolumeRenderDisabled(state);
}
/**
 * Sets the type for the minimap blip clipping object to be either rectangular or rounded.
 *
 * Hash: 0xB8B4490C
 * @deprecated Use graphics.setMinimapClipType(_type) instead
 */
export function setMinimapClipType(_type) {
    return graphics.setMinimapClipType(_type);
}
/**
 * Overrides the minimap component data (from `common:/data/ui/frontend.xml`) for a specified component.
 *
 * Hash: 0x3E882B23
 * @deprecated Use graphics.setMinimapComponentPosition(name, alignX, alignY, posX, posY, sizeX, sizeY) instead
 */
export function setMinimapComponentPosition(name, alignX, alignY, posX, posY, sizeX, sizeY) {
    return graphics.setMinimapComponentPosition(name, alignX, alignY, posX, posY, sizeX, sizeY);
}
/**
 * Sets the display info for a minimap overlay.
 *
 * Hash: 0x6A48B3CA
 * @deprecated Use graphics.setMinimapOverlayDisplay(miniMap, x, y, xScale, yScale, alpha) instead
 */
export function setMinimapOverlayDisplay(miniMap, x, y, xScale, yScale, alpha) {
    return graphics.setMinimapOverlayDisplay(miniMap, x, y, xScale, yScale, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0x3963D527
 * @deprecated Use graphics.setRuntimeTextureArgbData(tex, buffer, length) instead
 */
export function setRuntimeTextureArgbData(tex, buffer, length) {
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
export function setRuntimeTextureImage(tex, fileName) {
    return graphics.setRuntimeTextureImage(tex, fileName);
}
/**
 * Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.
 *
 * Hash: 0xAB65ACEE
 * @deprecated Use graphics.setRuntimeTexturePixel(tex, x, y, r, g, b, a) instead
 */
export function setRuntimeTexturePixel(tex, x, y, r, g, b, a) {
    return graphics.setRuntimeTexturePixel(tex, x, y, r, g, b, a);
}
/**
 * Modifies the radius scale used in the simulation of wet cloth physics.
 * This affects how cloth behaves when wet, changing how it sticks or reacts to movement.
 *
 * Hash: 0xF1BD2CEF
 * @deprecated Use graphics.setWetClothPinRadiusScale(scale) instead
 */
export function setWetClothPinRadiusScale(scale) {
    return graphics.setWetClothPinRadiusScale(scale);
}
/**
 * Resets the screen's draw-origin which was changed by the function [`SET_DRAW_ORIGIN`](#\_0xE10198D5) back to `x=0, y=0`. See [`SET_DRAW_ORIGIN`](#\_0xE10198D5) for further information.
 *
 * Hash: 0xDD76B263
 * @deprecated Use graphics.clearDrawOrigin() instead
 */
export function clearDrawOrigin() {
    return graphics.clearDrawOrigin();
}
/**
 * In compare to `0x31DC8D3F216D8509` return true if texture its created when `0x31DC8D3F216D8509` return true if you put there any id in valid range
 *
 * Hash: 0x8B25BC20
 * @deprecated Use graphics.doesTextureExist(textureId) instead
 */
export function doesTextureExist(textureId) {
    return graphics.doesTextureExist(textureId);
}
/**
 * No comment provided
 *
 * Hash: 0xCD4D9DD5
 * @deprecated Use graphics.drawBox(x1, y1, z1, x2, y2, z2, red, green, blue, alpha) instead
 */
export function drawBox(x1, y1, z1, x2, y2, z2, red, green, blue, alpha) {
    return graphics.drawBox(x1, y1, z1, x2, y2, z2, red, green, blue, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0xB3426BCC
 * @deprecated Use graphics.drawLine(x1, y1, z1, x2, y2, z2, red, green, blue, alpha) instead
 */
export function drawLine(x1, y1, z1, x2, y2, z2, red, green, blue, alpha) {
    return graphics.drawLine(x1, y1, z1, x2, y2, z2, red, green, blue, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0xABD19253
 * @deprecated Use graphics.drawPoly(x1, y1, z1, x2, y2, z2, x3, y3, z3, red, green, blue, alpha) instead
 */
export function drawPoly(x1, y1, z1, x2, y2, z2, x3, y3, z3, red, green, blue, alpha) {
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
export function getAspectRatio() {
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
export function getCurrentScreenResolution() {
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
export function removeTexture(textureId) {
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
export function setDrawOrigin(pos, is2d) {
    return graphics.setDrawOrigin(pos, is2d);
}
/**
 * Sets the text font for the current text drawing command.
 *
 * Hash: 0xADA9255D
 * @deprecated Use graphics.setTextFontForCurrentCommand(fontId) instead
 */
export function setTextFontForCurrentCommand(fontId) {
    return graphics.setTextFontForCurrentCommand(fontId);
}
/**
 * No comment provided
 *
 * Hash: 0x68CDFA60
 * @deprecated Use graphics.setTextJustification(justifyType) instead
 */
export function setTextJustification(justifyType) {
    return graphics.setTextJustification(justifyType);
}
/**
 * No comment provided
 *
 * Hash: 0x6F60AB54
 * @deprecated Use graphics.setTextWrap(start, end) instead
 */
export function setTextWrap(start, end) {
    return graphics.setTextWrap(start, end);
}
/**
 * A getter for [SET_VISUAL_SETTING_FLOAT](#\_0xD1D31681).
 *
 * Hash: 0x15346B4D
 * @deprecated Use graphics.getVisualSettingFloat(name) instead
 */
export function getVisualSettingFloat(name) {
    return graphics.getVisualSettingFloat(name);
}
/**
 * Overrides a floating point value from `visualsettings.dat` temporarily.
 *
 * Hash: 0xD1D31681
 * @deprecated Use graphics.setVisualSettingFloat(name, value) instead
 */
export function setVisualSettingFloat(name, value) {
    return graphics.setVisualSettingFloat(name, value);
}
/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 *
 * Hash: 0xCD949E20
 * @deprecated Use hud.getComponentAlign(id) instead
 */
export function getHudComponentAlign(id) {
    return hud.getComponentAlign(id);
}
/**
 * No comment provided
 *
 * Hash: 0xA91866BC
 * @deprecated Use hud.getComponentName(id) instead
 */
export function getHudComponentName(id) {
    return hud.getComponentName(id);
}
/**
 * No comment provided
 *
 * Hash: 0x12217D33
 * @deprecated Use hud.getComponentSize(id) instead
 */
export function getHudComponentSize(id) {
    return hud.getComponentSize(id);
}
/**
 * Returns the zoom level data by index from mapzoomdata.meta file.
 *
 * Hash: 0x1363A998
 * @deprecated Use hud.getMapZoomDataLevel(index) instead
 */
export function getMapZoomDataLevel(index) {
    return hud.getMapZoomDataLevel(index);
}
/**
 * Returns true if the minimap is currently expanded. False if it's the normal minimap state.
 * Use [`IsBigmapFull`](#\_0x66EE14B2) to check if the full map is currently revealed on the minimap.
 *
 * Hash: 0xFFF65C63
 * @deprecated Use hud.isBigmapActive() instead
 */
export function isBigmapActive() {
    return hud.isBigmapActive();
}
/**
 * No comment provided
 *
 * Hash: 0x66EE14B2
 * @deprecated Use hud.isBigmapFull() instead
 */
export function isBigmapFull() {
    return hud.isBigmapFull();
}
/**
 * Resets values from the zoom level data by index to defaults from mapzoomdata.meta.
 *
 * Hash: 0x11A5B7ED
 * @deprecated Use hud.resetMapZoomDataLevel(index) instead
 */
export function resetMapZoomDataLevel(index) {
    return hud.resetMapZoomDataLevel(index);
}
/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 *
 * Hash: 0xEED219F2
 * @deprecated Use hud.setComponentAlign(id, horizontalAlign, verticalAlign) instead
 */
export function setHudComponentAlign(id, horizontalAlign, verticalAlign) {
    return hud.setComponentAlign(id, horizontalAlign, verticalAlign);
}
/**
 * No comment provided
 *
 * Hash: 0x7644A9FA
 * @deprecated Use hud.setComponentSize(id, x, y) instead
 */
export function setHudComponentSize(id, x, y) {
    return hud.setComponentSize(id, x, y);
}
/**
 * Sets values to the zoom level data by index.
 *
 * Hash: 0x447C718E
 * @deprecated Use hud.setMapZoomDataLevel(index, zoomScale, zoomSpeed, scrollSpeed, tilesX, tilesY) instead
 */
export function setMapZoomDataLevel(index, zoomScale, zoomSpeed, scrollSpeed, tilesX, tilesY) {
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
export function getMinimapType() {
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
export function setMinimapType(_type) {
    return hud.setMinimapType(_type);
}
/**
 * Adds the given model name hash to the list of valid models for the player ped's parachute.
 *
 * Hash: 0x8AC7AE9
 * @deprecated Use misc.addAuthorizedParachuteModel(modelNameHash) instead
 */
export function addAuthorizedParachuteModel(modelNameHash) {
    return misc.addAuthorizedParachuteModel(modelNameHash);
}
/**
 * Adds the given model name hash to the list of valid models for the player ped's parachute pack.
 *
 * Hash: 0x2E86DEA5
 * @deprecated Use misc.addAuthorizedParachutePackModel(modelNameHash) instead
 */
export function addAuthorizedParachutePackModel(modelNameHash) {
    return misc.addAuthorizedParachutePackModel(modelNameHash);
}
/**
 * Adds new health config.
 *
 * Hash: 0x9CBFD5C1
 * @deprecated Use misc.addHealthConfig(configName, defaultHealth, defaultArmor, defaultEndurance, fatiguedHealthThreshold, injuredHealthThreshold, dyingHealthThreshold, hurtHealthThreshold, dogTakedownThreshold, writheFromBulletThreshold, meleeCardinalFatalAttack, invincible) instead
 */
export function addHealthConfig(configName, defaultHealth, defaultArmor, defaultEndurance, fatiguedHealthThreshold, injuredHealthThreshold, dyingHealthThreshold, hurtHealthThreshold, dogTakedownThreshold, writheFromBulletThreshold, meleeCardinalFatalAttack, invincible) {
    return misc.addHealthConfig(configName, defaultHealth, defaultArmor, defaultEndurance, fatiguedHealthThreshold, injuredHealthThreshold, dyingHealthThreshold, hurtHealthThreshold, dogTakedownThreshold, writheFromBulletThreshold, meleeCardinalFatalAttack, invincible);
}
/**
 * Disables the editor runtime mode, changing game behavior to not track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xB1622B17
 * @deprecated Use misc.disableEditorRuntime() instead
 */
export function disableEditorRuntime() {
    return misc.disableEditorRuntime();
}
/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity.
 *
 * Hash: 0x3D5AB7F0
 * @deprecated Use misc.disableIdleCamera(state) instead
 */
export function disableIdleCamera(state) {
    return misc.disableIdleCamera(state);
}
/**
 * Enables the editor runtime mode, changing game behavior to track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xC383871D
 * @deprecated Use misc.enableEditorRuntime() instead
 */
export function enableEditorRuntime() {
    return misc.enableEditorRuntime();
}
/**
 * Enters cursor mode, suppressing mouse movement to the game and displaying a mouse cursor instead. This function supports
 * SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x780DA86
 * @deprecated Use misc.enterCursorMode() instead
 */
export function enterCursorMode() {
    return misc.enterCursorMode();
}
/**
 * A getter for [SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME](#\_0x0B919E1FB47CC4E0).
 *
 * Hash: 0xB550232D
 * @deprecated Use misc.getAmbientPedRangeMultiplier() instead
 */
export function getAmbientPedRangeMultiplier() {
    return misc.getAmbientPedRangeMultiplier();
}
/**
 * This native returns the index of a calming quad if the given point is inside its bounds.
 *
 * Hash: 0x870E8B40
 * @deprecated Use misc.getCalmingQuadAtCoords(x, y) instead
 */
export function getCalmingQuadAtCoords(x, y) {
    return misc.getCalmingQuadAtCoords(x, y);
}
/**
 * No comment provided
 *
 * Hash: 0xFF60E63
 * @deprecated Use misc.getCalmingQuadBounds(waterQuad) instead
 */
export function getCalmingQuadBounds(waterQuad) {
    return misc.getCalmingQuadBounds(waterQuad);
}
/**
 * No comment provided
 *
 * Hash: 0xCEBFC42
 * @deprecated Use misc.getCalmingQuadCount() instead
 */
export function getCalmingQuadCount() {
    return misc.getCalmingQuadCount();
}
/**
 * No comment provided
 *
 * Hash: 0xB0E3A058
 * @deprecated Use misc.getCalmingQuadDampening(waterQuad) instead
 */
export function getCalmingQuadDampening(waterQuad) {
    return misc.getCalmingQuadDampening(waterQuad);
}
/**
 * No comment provided
 *
 * Hash: 0x5550BF9F
 * @deprecated Use misc.getFuelConsumptionRateMultiplier() instead
 */
export function getFuelConsumptionRateMultiplier() {
    return misc.getFuelConsumptionRateMultiplier();
}
/**
 * No comment provided
 *
 * Hash: 0xC66CD90C
 * @deprecated Use misc.getFuelConsumptionState() instead
 */
export function getFuelConsumptionState() {
    return misc.getFuelConsumptionState();
}
/**
 * A getter for [SET_GLOBAL_PASSENGER_MASS_MULTIPLIER](#\_0x3422291C).
 *
 * Hash: 0x78951816
 * @deprecated Use misc.getGlobalPassengerMassMultiplier() instead
 */
export function getGlobalPassengerMassMultiplier() {
    return misc.getGlobalPassengerMassMultiplier();
}
/**
 * Retrieves the map data entity handle.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x30AA6911
 * @deprecated Use misc.getMapdataEntityHandle(mapDataHash, entityInternalIdx) instead
 */
export function getMapdataEntityHandle(mapDataHash, entityInternalIdx) {
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
export function getMapdataEntityMatrix(mapDataHash, entityInternalIdx, matrixPtr) {
    return misc.getMapdataEntityMatrix(mapDataHash, entityInternalIdx, matrixPtr);
}
/**
 * Returns the transient map data index for a specified hash.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xD29D8EDD
 * @deprecated Use misc.getMapdataFromHashKey(mapdataHandle) instead
 */
export function getMapdataFromHashKey(mapdataHandle) {
    return misc.getMapdataFromHashKey(mapdataHandle);
}
/**
 * A getter for [SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xEAE6DCC7EEE3DB1D).
 *
 * Hash: 0xFF72DF84
 * @deprecated Use misc.getParkedVehicleDensityMultiplier() instead
 */
export function getParkedVehicleDensityMultiplier() {
    return misc.getParkedVehicleDensityMultiplier();
}
/**
 * A getter for [SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xB3B3359379FE77D3).
 * Same as vehicle density multiplier.
 *
 * Hash: 0x7B0D00C5
 * @deprecated Use misc.getRandomVehicleDensityMultiplier() instead
 */
export function getRandomVehicleDensityMultiplier() {
    return misc.getRandomVehicleDensityMultiplier();
}
/**
 * A getter for [SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x7A556143A1C03898).
 *
 * Hash: 0x77C598B2
 * @deprecated Use misc.getScenarioPedDensityMultiplier() instead
 */
export function getScenarioPedDensityMultiplier() {
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
export function isStreamingFileReady(registerAs) {
    return misc.isStreamingFileReady(registerAs);
}
/**
 * Leaves cursor mode. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xADECF19E
 * @deprecated Use misc.leaveCursorMode() instead
 */
export function leaveCursorMode() {
    return misc.leaveCursorMode();
}
/**
 * Toggles a check that prevents attaching (networked) entities to remotely owned peds. This is disabled by default.
 *
 * Hash: 0x30CE39D8
 * @deprecated Use misc.onesyncEnableRemoteAttachmentSanitization(enable) instead
 */
export function onesyncEnableRemoteAttachmentSanitization(enable) {
    return misc.onesyncEnableRemoteAttachmentSanitization(enable);
}
/**
 * Replaces the `popgroups` (CPopGroupList) meta file with the file in the specified path.
 *
 * Hash: 0xD3BC438F
 * @deprecated Use misc.overridePopGroups(path) instead
 */
export function overridePopGroups(path) {
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
export function registerArchetypes(factory) {
    return misc.registerArchetypes(factory);
}
/**
 * Registers a specified .gfx file as GFx font library.
 * The .gfx file has to be registered with the streamer already.
 *
 * Hash: 0x1B3A363
 * @deprecated Use misc.registerFontFile(fileName) instead
 */
export function registerFontFile(fileName) {
    return misc.registerFontFile(fileName);
}
/**
 * Registers a specified font name for use with text draw commands.
 *
 * Hash: 0xACF6D8EE
 * @deprecated Use misc.registerFontId(fontName) instead
 */
export function registerFontId(fontName) {
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
export function registerKeyMapping(commandString, description, defaultMapper, defaultParameter) {
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
export function registerStreamingFileFromCache(resourceName, fileName, cacheString) {
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
export function registerStreamingFileFromKvs(kvsKey) {
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
export function registerStreamingFileFromUrl(registerAs, url) {
    return misc.registerStreamingFileFromUrl(registerAs, url);
}
/**
 * Removes health config.
 *
 * Hash: 0xE0ED5FB
 * @deprecated Use misc.removeHealthConfig(configName) instead
 */
export function removeHealthConfig(configName) {
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
export function setAimCooldown(value) {
    return misc.setAimCooldown(value);
}
/**
 * No comment provided
 *
 * Hash: 0xC5945BD9
 * @deprecated Use misc.setCalmingQuadBounds(waterQuad, minX, minY, maxX, maxY) instead
 */
export function setCalmingQuadBounds(waterQuad, minX, minY, maxX, maxY) {
    return misc.setCalmingQuadBounds(waterQuad, minX, minY, maxX, maxY);
}
/**
 * No comment provided
 *
 * Hash: 0x67977501
 * @deprecated Use misc.setCalmingQuadDampening(calmingQuad, dampening) instead
 */
export function setCalmingQuadDampening(calmingQuad, dampening) {
    return misc.setCalmingQuadDampening(calmingQuad, dampening);
}
/**
 * Allows Weapon-Flashlight beams to stay visible while moving. Normally it only stays on while aiming.
 *
 * Hash: 0x7635B349
 * @deprecated Use misc.setFlashLightKeepOnWhileMoving(state) instead
 */
export function setFlashLightKeepOnWhileMoving(state) {
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
export function setFuelConsumptionRateMultiplier(multiplier) {
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
export function setFuelConsumptionState(state) {
    return misc.setFuelConsumptionState(state);
}
/**
 * No comment provided
 *
 * Hash: 0x1C47F6AC
 * @deprecated Use misc.setGlobalPassengerMassMultiplier(massMul) instead
 */
export function setGlobalPassengerMassMultiplier(massMul) {
    return misc.setGlobalPassengerMassMultiplier(massMul);
}
/**
 * Sets default armor value for specific health config.
 *
 * Hash: 0x20A1E6A2
 * @deprecated Use misc.setHealthConfigDefaultArmor(configName, newValue) instead
 */
export function setHealthConfigDefaultArmor(configName, newValue) {
    return misc.setHealthConfigDefaultArmor(configName, newValue);
}
/**
 * Sets default endurance value for specific health config.
 *
 * Hash: 0x60F20B81
 * @deprecated Use misc.setHealthConfigDefaultEndurance(configName, newValue) instead
 */
export function setHealthConfigDefaultEndurance(configName, newValue) {
    return misc.setHealthConfigDefaultEndurance(configName, newValue);
}
/**
 * Sets default health value for specific health config.
 *
 * Hash: 0xC705C778
 * @deprecated Use misc.setHealthConfigDefaultHealth(configName, newValue) instead
 */
export function setHealthConfigDefaultHealth(configName, newValue) {
    return misc.setHealthConfigDefaultHealth(configName, newValue);
}
/**
 * Sets default dog takedown threshold value for specific health config.
 *
 * Hash: 0x9A995E96
 * @deprecated Use misc.setHealthConfigDogTakedownThreshold(configName, newValue) instead
 */
export function setHealthConfigDogTakedownThreshold(configName, newValue) {
    return misc.setHealthConfigDogTakedownThreshold(configName, newValue);
}
/**
 * Sets default dying health threshold value for specific health config.
 *
 * Hash: 0x9B00FD77
 * @deprecated Use misc.setHealthConfigDyingThreshold(configName, newValue) instead
 */
export function setHealthConfigDyingThreshold(configName, newValue) {
    return misc.setHealthConfigDyingThreshold(configName, newValue);
}
/**
 * Sets default fatigued health threshold value for specific health config.
 *
 * Hash: 0xC58953FD
 * @deprecated Use misc.setHealthConfigFatiguedThreshold(configName, newValue) instead
 */
export function setHealthConfigFatiguedThreshold(configName, newValue) {
    return misc.setHealthConfigFatiguedThreshold(configName, newValue);
}
/**
 * Sets default hurt health threshold value for specific health config.
 *
 * Hash: 0x98DF1A83
 * @deprecated Use misc.setHealthConfigHurtThreshold(configName, newValue) instead
 */
export function setHealthConfigHurtThreshold(configName, newValue) {
    return misc.setHealthConfigHurtThreshold(configName, newValue);
}
/**
 * Sets default injured health threshold value for specific health config.
 *
 * Hash: 0xF9D9B647
 * @deprecated Use misc.setHealthConfigInjuredThreshold(configName, newValue) instead
 */
export function setHealthConfigInjuredThreshold(configName, newValue) {
    return misc.setHealthConfigInjuredThreshold(configName, newValue);
}
/**
 * Sets default invincible value for specific health config.
 *
 * Hash: 0x4A9EEDE6
 * @deprecated Use misc.setHealthConfigInvincible(configName, newValue) instead
 */
export function setHealthConfigInvincible(configName, newValue) {
    return misc.setHealthConfigInvincible(configName, newValue);
}
/**
 * Sets default melee cardinal fatal attack value for specific health config.
 *
 * Hash: 0xDD443E53
 * @deprecated Use misc.setHealthConfigMeleeFatalAttack(configName, newValue) instead
 */
export function setHealthConfigMeleeFatalAttack(configName, newValue) {
    return misc.setHealthConfigMeleeFatalAttack(configName, newValue);
}
/**
 * Sets default writhe from bullet threshold value for specific health config.
 *
 * Hash: 0xE97633CB
 * @deprecated Use misc.setHealthConfigWritheFromBulletThreshold(configName, newValue) instead
 */
export function setHealthConfigWritheFromBulletThreshold(configName, newValue) {
    return misc.setHealthConfigWritheFromBulletThreshold(configName, newValue);
}
/**
 * Overrides how many real ms are equal to one game minute.
 * A setter for [`GetMillisecondsPerGameMinute`](#\_0x2F8B4D1C595B11DB).
 *
 * Hash: 0x36CA2554
 * @deprecated Use misc.setMillisecondsPerGameMinute(value) instead
 */
export function setMillisecondsPerGameMinute(value) {
    return misc.setMillisecondsPerGameMinute(value);
}
/**
 * <strong>This native is deprecated and does nothing!</strong>
 *
 * Hash: 0x7F6B8D75
 * @deprecated Use misc.setModelHeadlightConfiguration(modelHash, ratePerSecond, headlightRotation, invertRotation) instead
 */
export function setModelHeadlightConfiguration(modelHash, ratePerSecond, headlightRotation, invertRotation) {
    return misc.setModelHeadlightConfiguration(modelHash, ratePerSecond, headlightRotation, invertRotation);
}
/**
 * Sets whether all tags should group (normal game behavior) or should remain independent and above each ped's respective head when in a vehicle.
 *
 * Hash: 0x7A27BC93
 * @deprecated Use misc.setMpGamerTagsUseVehicleBehavior(enabled) instead
 */
export function setMpGamerTagsUseVehicleBehavior(enabled) {
    return misc.setMpGamerTagsUseVehicleBehavior(enabled);
}
/**
 * Sets the maximum distance at which all tags will be visible and which beyond will not be displayed. Distance is measured from the camera position.
 *
 * Hash: 0xD61676B3
 * @deprecated Use misc.setMpGamerTagsVisibleDistance(distance) instead
 */
export function setMpGamerTagsVisibleDistance(distance) {
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
export function registerRawKeymap(keymapName, onKeyDown, onKeyUp, rawKeyIndex, canBeDisabled) {
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
export function remapRawKeymap(keymapName, newRawKeyIndex) {
    return misc.remapRawKeymap(keymapName, newRawKeyIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xC44C2F44
 * @deprecated Use misc.setBackfaceculling(toggle) instead
 */
export function setBackfaceculling(toggle) {
    return misc.setBackfaceculling(toggle);
}
/**
 * No comment provided
 *
 * Hash: 0x8A7A8DAC
 * @deprecated Use misc.setCursorLocation(x, y) instead
 */
export function setCursorLocation(x, y) {
    return misc.setCursorLocation(x, y);
}
/**
 * Sets whether or not ownership checks should be performed while trying to stow a carriable on a hunting wagon.
 *
 * Hash: 0x85A10FFD
 * @deprecated Use misc.setIgnoreVehicleOwnershipForStowing(ignore) instead
 */
export function setIgnoreVehicleOwnershipForStowing(ignore) {
    return misc.setIgnoreVehicleOwnershipForStowing(ignore);
}
/**
 * Activates built-in timecycle editing tool.
 *
 * Hash: 0xEEB9B76A
 * @deprecated Use misc.activateTimecycleEditor() instead
 */
export function activateTimecycleEditor() {
    return misc.activateTimecycleEditor();
}
/**
 * No comment provided
 *
 * Hash: 0x3422291C
 * @deprecated Use misc.applyWeatherCycles(numEntries, msPerCycle) instead
 */
export function applyWeatherCycles(numEntries, msPerCycle) {
    return misc.applyWeatherCycles(numEntries, msPerCycle);
}
/**
 * No comment provided
 *
 * Hash: 0x54D636B3
 * @deprecated Use misc.cloneTimecycleModifier(sourceModifierName, clonedModifierName) instead
 */
export function cloneTimecycleModifier(sourceModifierName, clonedModifierName) {
    return misc.cloneTimecycleModifier(sourceModifierName, clonedModifierName);
}
/**
 * Create a clean timecycle modifier. See [`SET_TIMECYCLE_MODIFIER_VAR`](#\_0x6E0A422B) to add variables.
 *
 * Hash: 0x70FA2AFA
 * @deprecated Use misc.createTimecycleModifier(modifierName) instead
 */
export function createTimecycleModifier(modifierName) {
    return misc.createTimecycleModifier(modifierName);
}
/**
 * Disables the game's world horizon lods rendering (see `farlods.#dd`).
 * Using the island hopper natives might also affect this state.
 *
 * Hash: 0xA9C92CDC
 * @deprecated Use misc.disableWorldhorizonRendering(state) instead
 */
export function disableWorldhorizonRendering(state) {
    return misc.disableWorldhorizonRendering(state);
}
/**
 * No comment provided
 *
 * Hash: 0xC53BB6D3
 * @deprecated Use misc.doesTimecycleModifierHasVar(modifierName, varName) instead
 */
export function doesTimecycleModifierHasVar(modifierName, varName) {
    return misc.doesTimecycleModifierHasVar(modifierName, varName);
}
/**
 * No comment provided
 *
 * Hash: 0xDEDA4E50
 * @deprecated Use misc.endFindObject(findHandle) instead
 */
export function endFindObject(findHandle) {
    return misc.endFindObject(findHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x9615C2AD
 * @deprecated Use misc.endFindPed(findHandle) instead
 */
export function endFindPed(findHandle) {
    return misc.endFindPed(findHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x3C407D53
 * @deprecated Use misc.endFindPickup(findHandle) instead
 */
export function endFindPickup(findHandle) {
    return misc.endFindPickup(findHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x9227415A
 * @deprecated Use misc.endFindVehicle(findHandle) instead
 */
export function endFindVehicle(findHandle) {
    return misc.endFindVehicle(findHandle);
}
/**
 * This native is not implemented.
 *
 * Hash: 0xD2CB95A3
 * @deprecated Use misc.experimentalLoadCloneCreate(data, objectId, tree) instead
 */
export function experimentalLoadCloneCreate(data, objectId, tree) {
    return misc.experimentalLoadCloneCreate(data, objectId, tree);
}
/**
 * This native is not implemented.
 *
 * Hash: 0x6BC189AC
 * @deprecated Use misc.experimentalLoadCloneSync(entity, data) instead
 */
export function experimentalLoadCloneSync(entity, data) {
    return misc.experimentalLoadCloneSync(entity, data);
}
/**
 * This native is not implemented.
 *
 * Hash: 0x9D65CAD2
 * @deprecated Use misc.experimentalSaveCloneCreate(entity) instead
 */
export function experimentalSaveCloneCreate(entity) {
    return misc.experimentalSaveCloneCreate(entity);
}
/**
 * This native is not implemented.
 *
 * Hash: 0x38D19210
 * @deprecated Use misc.experimentalSaveCloneSync(entity) instead
 */
export function experimentalSaveCloneSync(entity) {
    return misc.experimentalSaveCloneSync(entity);
}
/**
 * No comment provided
 *
 * Hash: 0xFAA6CB5D
 * @deprecated Use misc.findFirstObject() instead
 */
export function findFirstObject() {
    return misc.findFirstObject();
}
/**
 * No comment provided
 *
 * Hash: 0xFB012961
 * @deprecated Use misc.findFirstPed() instead
 */
export function findFirstPed() {
    return misc.findFirstPed();
}
/**
 * No comment provided
 *
 * Hash: 0x3FF9D340
 * @deprecated Use misc.findFirstPickup() instead
 */
export function findFirstPickup() {
    return misc.findFirstPickup();
}
/**
 * No comment provided
 *
 * Hash: 0x15E55694
 * @deprecated Use misc.findFirstVehicle() instead
 */
export function findFirstVehicle() {
    return misc.findFirstVehicle();
}
/**
 * No comment provided
 *
 * Hash: 0x4E129DBF
 * @deprecated Use misc.findNextObject(findHandle) instead
 */
export function findNextObject(findHandle) {
    return misc.findNextObject(findHandle);
}
/**
 * No comment provided
 *
 * Hash: 0xAB09B548
 * @deprecated Use misc.findNextPed(findHandle) instead
 */
export function findNextPed(findHandle) {
    return misc.findNextPed(findHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x4107EF0F
 * @deprecated Use misc.findNextPickup(findHandle) instead
 */
export function findNextPickup(findHandle) {
    return misc.findNextPickup(findHandle);
}
/**
 * No comment provided
 *
 * Hash: 0x8839120D
 * @deprecated Use misc.findNextVehicle(findHandle) instead
 */
export function findNextVehicle(findHandle) {
    return misc.findNextVehicle(findHandle);
}
/**
 * This native returns the currently used game's name.
 *
 * Hash: 0xACA18ECD
 * @deprecated Use misc.getCurrentGameName() instead
 */
export function getCurrentGameName() {
    return misc.getCurrentGameName();
}
/**
 * Returns the peer address of the remote game server that the user is currently connected to.
 *
 * Hash: 0xEA11BFBA
 * @deprecated Use misc.getCurrentServerEndpoint() instead
 */
export function getCurrentServerEndpoint() {
    return misc.getCurrentServerEndpoint();
}
/**
 * No comment provided
 *
 * Hash: 0xFE2A1D4D
 * @deprecated Use misc.getTimecycleModifierCount() instead
 */
export function getTimecycleModifierCount() {
    return misc.getTimecycleModifierCount();
}
/**
 * No comment provided
 *
 * Hash: 0x5F4CD0E2
 * @deprecated Use misc.getTimecycleModifierIndexByName(modifierName) instead
 */
export function getTimecycleModifierIndexByName(modifierName) {
    return misc.getTimecycleModifierIndexByName(modifierName);
}
/**
 * No comment provided
 *
 * Hash: 0x28CB8608
 * @deprecated Use misc.getTimecycleModifierNameByIndex(modifierIndex) instead
 */
export function getTimecycleModifierNameByIndex(modifierIndex) {
    return misc.getTimecycleModifierNameByIndex(modifierIndex);
}
/**
 * A getter for [SET_TIMECYCLE_MODIFIER_STRENGTH](#\_0x82E7FFCD5B2326B3).
 *
 * Hash: 0xBE54124A
 * @deprecated Use misc.getTimecycleModifierStrength() instead
 */
export function getTimecycleModifierStrength() {
    return misc.getTimecycleModifierStrength();
}
/**
 * No comment provided
 *
 * Hash: 0xA7109E12
 * @deprecated Use misc.getTimecycleModifierVar(modifierName, varName) instead
 */
export function getTimecycleModifierVar(modifierName, varName) {
    return misc.getTimecycleModifierVar(modifierName, varName);
}
/**
 * No comment provided
 *
 * Hash: 0x60FB60FE
 * @deprecated Use misc.getTimecycleModifierVarCount(modifierName) instead
 */
export function getTimecycleModifierVarCount(modifierName) {
    return misc.getTimecycleModifierVarCount(modifierName);
}
/**
 * No comment provided
 *
 * Hash: 0xE874AB1D
 * @deprecated Use misc.getTimecycleModifierVarNameByIndex(modifierName, modifierVarIndex) instead
 */
export function getTimecycleModifierVarNameByIndex(modifierName, modifierVarIndex) {
    return misc.getTimecycleModifierVarNameByIndex(modifierName, modifierVarIndex);
}
/**
 * Returns the amount of variables available to be applied on timecycle modifiers.
 *
 * Hash: 0x838B34D8
 * @deprecated Use misc.getTimecycleVarCount() instead
 */
export function getTimecycleVarCount() {
    return misc.getTimecycleVarCount();
}
/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 *
 * Hash: 0x3B90238
 * @deprecated Use misc.getTimecycleVarDefaultValueByIndex(varIndex) instead
 */
export function getTimecycleVarDefaultValueByIndex(varIndex) {
    return misc.getTimecycleVarDefaultValueByIndex(varIndex);
}
/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 *
 * Hash: 0xC6C55AAF
 * @deprecated Use misc.getTimecycleVarNameByIndex(varIndex) instead
 */
export function getTimecycleVarNameByIndex(varIndex) {
    return misc.getTimecycleVarNameByIndex(varIndex);
}
/**
 * Converts a screen coordinate into its relative world coordinate.
 *
 * Hash: 0xC81D0659
 * @deprecated Use misc.getWorldCoordFromScreenCoord(screenSize) instead
 */
export function getWorldCoordFromScreenCoord(screenSize) {
    return misc.getWorldCoordFromScreenCoord(screenSize);
}
/**
 * No comment provided
 *
 * Hash: 0x36DF8612
 * @deprecated Use misc.removeTimecycleModifier(modifierName) instead
 */
export function removeTimecycleModifier(modifierName) {
    return misc.removeTimecycleModifier(modifierName);
}
/**
 * No comment provided
 *
 * Hash: 0x5A5E0D05
 * @deprecated Use misc.removeTimecycleModifierVar(modifierName, varName) instead
 */
export function removeTimecycleModifierVar(modifierName, varName) {
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
export function requestResourceFileSet(setName) {
    return misc.requestResourceFileSet(setName);
}
/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 *
 * Hash: 0x8BBE6CC0
 * @deprecated Use misc.sendLoadingScreenMessage(jsonString) instead
 */
export function sendLoadingScreenMessage(jsonString) {
    return misc.sendLoadingScreenMessage(jsonString);
}
/**
 * Toggles the visibility of resource names in the FiveM key mapping page.
 *
 * Hash: 0xCB0241B5
 * @deprecated Use misc.setKeyMappingHideResources(hide) instead
 */
export function setKeyMappingHideResources(hide) {
    return misc.setKeyMappingHideResources(hide);
}
/**
 * No comment provided
 *
 * Hash: 0xA7DD3209
 * @deprecated Use misc.setSnakeoilForEntry(name, path, data) instead
 */
export function setSnakeoilForEntry(name, path, data) {
    return misc.setSnakeoilForEntry(name, path, data);
}
/**
 * No comment provided
 *
 * Hash: 0x97B2F9F8
 * @deprecated Use misc.setTextChatEnabled(enabled) instead
 */
export function setTextChatEnabled(enabled) {
    return misc.setTextChatEnabled(enabled);
}
/**
 * No comment provided
 *
 * Hash: 0x6E0A422B
 * @deprecated Use misc.setTimecycleModifierVar(modifierName, varName, value1, value2) instead
 */
export function setTimecycleModifierVar(modifierName, varName, value1, value2) {
    return misc.setTimecycleModifierVar(modifierName, varName, value1, value2);
}
/**
 * No comment provided
 *
 * Hash: 0xD264D4E1
 * @deprecated Use misc.setWeatherCycleEntry(index, typeName, timeMult) instead
 */
export function setWeatherCycleEntry(index, typeName, timeMult) {
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
export function setWeatherOwnedByNetwork(network) {
    return misc.setWeatherOwnedByNetwork(network);
}
/**
 * The backing function for TriggerLatentServerEvent.
 *
 * Hash: 0x128737EA
 * @deprecated Use misc.triggerLatentServerEventInternal(eventName, eventPayload, payloadLength, bps) instead
 */
export function triggerLatentServerEventInternal(eventName, eventPayload, payloadLength, bps) {
    return misc.triggerLatentServerEventInternal(eventName, eventPayload, payloadLength, bps);
}
/**
 * The backing function for TriggerServerEvent.
 *
 * Hash: 0x7FDD1128
 * @deprecated Use misc.triggerServerEventInternal(eventName, eventPayload, payloadLength) instead
 */
export function triggerServerEventInternal(eventName, eventPayload, payloadLength) {
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
export function addConvarChangeListener(conVarFilter, handler) {
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
export function addStateBagChangeHandler(keyFilter, bagFilter, handler) {
    return misc.addStateBagChangeHandler(keyFilter, bagFilter, handler);
}
/**
 * Cancels the currently executing event.
 *
 * Hash: 0xFA29D35D
 * @deprecated Use misc.cancelEvent() instead
 */
export function cancelEvent() {
    return misc.cancelEvent();
}
/**
 * No comment provided
 *
 * Hash: 0x1E86F206
 * @deprecated Use misc.deleteFunctionReference(referenceIdentity) instead
 */
export function deleteFunctionReference(referenceIdentity) {
    return misc.deleteFunctionReference(referenceIdentity);
}
/**
 * No comment provided
 *
 * Hash: 0xF4E2079D
 * @deprecated Use misc.duplicateFunctionReference(referenceIdentity) instead
 */
export function duplicateFunctionReference(referenceIdentity) {
    return misc.duplicateFunctionReference(referenceIdentity);
}
/**
 * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
 *
 * Hash: 0x561C060B
 * @deprecated Use misc.executeCommand(commandString) instead
 */
export function executeCommand(commandString) {
    return misc.executeCommand(commandString);
}
/**
 * An internal function for converting a stack trace object to a string.
 *
 * Hash: 0xD70C3BCA
 * @deprecated Use misc.formatStackTrace(traceData) instead
 */
export function formatStackTrace(traceData) {
    return misc.formatStackTrace(traceData);
}
/**
 * Can be used to get a console variable of type `char*`, for example a string.
 *
 * Hash: 0x6CCD2564
 * @deprecated Use misc.getConvar(varName, default_) instead
 */
export function getConvar(varName, default_) {
    return misc.getConvar(varName, default_);
}
/**
 * Can be used to get a console variable casted back to `bool`.
 *
 * Hash: 0x7E8EBFE5
 * @deprecated Use misc.getConvarBool(varName, defaultValue) instead
 */
export function getConvarBool(varName, defaultValue) {
    return misc.getConvarBool(varName, defaultValue);
}
/**
 * This will have floating point inaccuracy.
 *
 * Hash: 0x9E666D
 * @deprecated Use misc.getConvarFloat(varName, defaultValue) instead
 */
export function getConvarFloat(varName, defaultValue) {
    return misc.getConvarFloat(varName, defaultValue);
}
/**
 * Can be used to get a console variable casted back to `int` (an integer value).
 *
 * Hash: 0x935C0AB2
 * @deprecated Use misc.getConvarInt(varName, default_) instead
 */
export function getConvarInt(varName, default_) {
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
export function getGameBuildNumber() {
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
export function getGameName() {
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
export function getGamePool(poolName) {
    return misc.getGamePool(poolName);
}
/**
 * No comment provided
 *
 * Hash: 0x9F1C4383
 * @deprecated Use misc.getInstanceId() instead
 */
export function getInstanceId() {
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
export function getRegisteredCommands() {
    return misc.getRegisteredCommands();
}
/**
 * No comment provided
 *
 * Hash: 0x78D864C7
 * @deprecated Use misc.getStateBagKeys(bagName) instead
 */
export function getStateBagKeys(bagName) {
    return misc.getStateBagKeys(bagName);
}
/**
 * Returns the value of a state bag key.
 *
 * Hash: 0x637F4C75
 * @deprecated Use misc.getStateBagValue(bagName, key) instead
 */
export function getStateBagValue(bagName, key) {
    return misc.getStateBagValue(bagName, key);
}
/**
 * No comment provided
 *
 * Hash: 0x7EBB9929
 * @deprecated Use misc.isAceAllowed(_object) instead
 */
export function isAceAllowed(_object) {
    return misc.isAceAllowed(_object);
}
/**
 * Gets whether or not this is the CitizenFX server.
 *
 * Hash: 0xCF24C52E
 * @deprecated Use misc.isDuplicityVersion() instead
 */
export function isDuplicityVersion() {
    return misc.isDuplicityVersion();
}
/**
 * No comment provided
 *
 * Hash: 0x37CF52CE
 * @deprecated Use misc.isPrincipalAceAllowed(principal, _object) instead
 */
export function isPrincipalAceAllowed(principal, _object) {
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
export function registerCommand(commandName, handler, restricted) {
    return misc.registerCommand(commandName, handler, restricted);
}
/**
 * No comment provided
 *
 * Hash: 0xEAC49841
 * @deprecated Use misc.removeConvarChangeListener(cookie) instead
 */
export function removeConvarChangeListener(cookie) {
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
export function removeStateBagChangeHandler(cookie) {
    return misc.removeStateBagChangeHandler(cookie);
}
/**
 * Internal function for setting a state bag value.
 *
 * Hash: 0x8D50E33A
 * @deprecated Use misc.setStateBagValue(bagName, keyName, valueData, valueLength, replicated) instead
 */
export function setStateBagValue(bagName, keyName, valueData, valueLength, replicated) {
    return misc.setStateBagValue(bagName, keyName, valueData, valueLength, replicated);
}
/**
 * No comment provided
 *
 * Hash: 0x12A330
 * @deprecated Use misc.stateBagHasKey(bagName, key) instead
 */
export function stateBagHasKey(bagName, key) {
    return misc.stateBagHasKey(bagName, key);
}
/**
 * The backing function for TriggerEvent.
 *
 * Hash: 0x91310870
 * @deprecated Use misc.triggerEventInternal(eventName, eventPayload, payloadLength) instead
 */
export function triggerEventInternal(eventName, eventPayload, payloadLength) {
    return misc.triggerEventInternal(eventName, eventPayload, payloadLength);
}
/**
 * Returns whether or not the currently executing event was canceled.
 *
 * Hash: 0x58382A19
 * @deprecated Use misc.wasEventCanceled() instead
 */
export function wasEventCanceled() {
    return misc.wasEventCanceled();
}
/**
 * An analogue of [GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS](#\_0x27561561732A7842) that returns number of drawable variations inside a single collection instead of the total number across all collections.
 *
 * Hash: 0x310D0271
 * @deprecated Use ped.getNumberOfCollectionDrawableVariations(ped1, componentId, collection) instead
 */
export function getNumberOfPedCollectionDrawableVariations(ped1, componentId, collection) {
    return ped.getNumberOfCollectionDrawableVariations(ped1, componentId, collection);
}
/**
 * An analogue of [GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS](#\_0x5FAF9754E789FB47) that returns number of prop variations inside a single collection instead of the total number across all collections.
 *
 * Hash: 0x3B6A13E1
 * @deprecated Use ped.getNumberOfCollectionPropDrawableVariations(ped1, anchorPoint, collection) instead
 */
export function getNumberOfPedCollectionPropDrawableVariations(ped1, anchorPoint, collection) {
    return ped.getNumberOfCollectionPropDrawableVariations(ped1, anchorPoint, collection);
}
/**
 * An alternative to [GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS](#\_0xA6E7F1CEB523E171) that uses local collection indexing instead of the global one.
 *
 * Hash: 0x75CAF9CC
 * @deprecated Use ped.getNumberOfCollectionPropTextureVariations(ped1, anchorPoint, collection, propIndex) instead
 */
export function getNumberOfPedCollectionPropTextureVariations(ped1, anchorPoint, collection, propIndex) {
    return ped.getNumberOfCollectionPropTextureVariations(ped1, anchorPoint, collection, propIndex);
}
/**
 * An alternative to [GET_NUMBER_OF_PED_TEXTURE_VARIATIONS](#\_0x8F7156A3142A6BAD) that uses local collection indexing instead of the global one.
 *
 * Hash: 0xD2C15D7
 * @deprecated Use ped.getNumberOfCollectionTextureVariations(ped1, componentId, collection, drawableId) instead
 */
export function getNumberOfPedCollectionTextureVariations(ped1, componentId, collection, drawableId) {
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
export function getPedCollectionsCount(ped1) {
    return ped.getCollectionsCount(ped1);
}
/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B)) for the given global drawable ID. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 *
 * Hash: 0x94EB1FE4
 * @deprecated Use ped.getCollectionLocalIndexFromDrawable(ped1, componentId, drawableId) instead
 */
export function getPedCollectionLocalIndexFromDrawable(ped1, componentId, drawableId) {
    return ped.getCollectionLocalIndexFromDrawable(ped1, componentId, drawableId);
}
/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17)) for the given global prop index. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 *
 * Hash: 0xFBDB885F
 * @deprecated Use ped.getCollectionLocalIndexFromProp(ped1, anchorPoint, propIndex) instead
 */
export function getPedCollectionLocalIndexFromProp(ped1, anchorPoint, propIndex) {
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
export function getPedCollectionName(ped1, index) {
    return ped.getCollectionName(ped1, index);
}
/**
 * Gets collection name for the given global drawable ID. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) is used to get collection and local index (inside the given collection) of the drawable. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 *
 * Hash: 0xD6BBA48B
 * @deprecated Use ped.getCollectionNameFromDrawable(ped1, componentId, drawableId) instead
 */
export function getPedCollectionNameFromDrawable(ped1, componentId, drawableId) {
    return ped.getCollectionNameFromDrawable(ped1, componentId, drawableId);
}
/**
 * Gets collection name for the given global prop index. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) is used to get collection and local index (inside the given collection) of the prop. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 *
 * Hash: 0x8ED0C17
 * @deprecated Use ped.getCollectionNameFromProp(ped1, anchorPoint, propIndex) instead
 */
export function getPedCollectionNameFromProp(ped1, anchorPoint, propIndex) {
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
export function getPedDecorations(ped1) {
    return ped.getDecorations(ped1);
}
/**
 * A getter for [SET_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x95E3D6257B166CF2).
 *
 * Hash: 0xF5A904F9
 * @deprecated Use ped.getDensityMultiplier() instead
 */
export function getPedDensityMultiplier() {
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
export function getPedDrawableGlobalIndexFromCollection(ped1, componentId, collection, drawableId) {
    return ped.getDrawableGlobalIndexFromCollection(ped1, componentId, collection, drawableId);
}
/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection local drawable index (inside [GET_PED_DRAWABLE_VARIATION_COLLECTION_NAME](#\_0xBCE0AB63) collection) instead of the global drawable index.
 *
 * Hash: 0x9970386F
 * @deprecated Use ped.getDrawableVariationCollectionLocalIndex(ped1, componentId) instead
 */
export function getPedDrawableVariationCollectionLocalIndex(ped1, componentId) {
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
export function getPedDrawableVariationCollectionName(ped1, componentId) {
    return ped.getDrawableVariationCollectionName(ped1, componentId);
}
/**
 * A getter for [\_SET_PED_EYE_COLOR](#\_0x50B56988B170AFDF). Returns -1 if fails to get.
 *
 * Hash: 0xA47B860F
 * @deprecated Use ped.getEyeColor(ped1) instead
 */
export function getPedEyeColor(ped1) {
    return ped.getEyeColor(ped1);
}
/**
 * A getter for [\_SET_PED_FACE_FEATURE](#\_0x71A5C1DBA060049E). Returns 0.0 if fails to get.
 *
 * Hash: 0xBA352ADD
 * @deprecated Use ped.getFaceFeature(ped1, index) instead
 */
export function getPedFaceFeature(ped1, index) {
    return ped.getFaceFeature(ped1, index);
}
/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 *
 * Hash: 0xA3EA2893
 * @deprecated Use ped.getHairColor(ped1) instead
 */
export function getPedHairColor(ped1) {
    return ped.getHairColor(ped1);
}
/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 *
 * Hash: 0x4B087305
 * @deprecated Use ped.getHairHighlightColor(ped1) instead
 */
export function getPedHairHighlightColor(ped1) {
    return ped.getHairHighlightColor(ped1);
}
/**
 * A getter for [SET_PED_HEAD_OVERLAY](#\_0x48F44967FA05CC1E) and [\_SET_PED_HEAD_OVERLAY_COLOR](#\_0x497BF74A7B9CB952) natives.
 *
 * Hash: 0xC46EE605
 * @deprecated Use ped.getHeadOverlayData(ped1, index) instead
 */
export function getPedHeadOverlayData(ped1, index) {
    return ped.getHeadOverlayData(ped1, index);
}
/**
 * Gets a ped model's health config.
 *
 * Hash: 0xF71542F7
 * @deprecated Use ped.getModelHealthConfig(modelHash) instead
 */
export function getPedModelHealthConfig(modelHash) {
    return ped.getModelHealthConfig(modelHash);
}
/**
 * Gets a ped model's personality type.
 *
 * Hash: 0xFE08CAD6
 * @deprecated Use ped.getModelPersonality(modelHash) instead
 */
export function getPedModelPersonality(modelHash) {
    return ped.getModelPersonality(modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x69E81E3D
 * @deprecated Use ped.getMovementClipset(ped1) instead
 */
export function getPedMovementClipset(ped1) {
    return ped.getMovementClipset(ped1);
}
/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection local prop index (inside [GET_PED_PROP_COLLECTION_NAME](#\_0x6B5653E4) collection) instead of the global prop index.
 *
 * Hash: 0xCD420AD1
 * @deprecated Use ped.getPropCollectionLocalIndex(ped1, anchorPoint) instead
 */
export function getPedPropCollectionLocalIndex(ped1, anchorPoint) {
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
export function getPedPropCollectionName(ped1, anchorPoint) {
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
export function getPedPropGlobalIndexFromCollection(ped1, anchorPoint, collection, propIndex) {
    return ped.getPropGlobalIndexFromCollection(ped1, anchorPoint, collection, propIndex);
}
/**
 * A getter for [SET_PED_SWEAT](#\_0x27B0405F59637D1F).
 *
 * Hash: 0x44B91E94
 * @deprecated Use ped.getSweat(ped1) instead
 */
export function getPedSweat(ped1) {
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
export function isPedCollectionComponentVariationGen9Exclusive(ped1, componentId, collection, drawableId) {
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
export function isPedCollectionComponentVariationValid(ped1, componentId, collection, drawableId, textureId) {
    return ped.isCollectionComponentVariationValid(ped1, componentId, collection, drawableId, textureId);
}
/**
 * No comment provided
 *
 * Hash: 0xC767B581
 * @deprecated Use ped.isComponentVariationGen9Exclusive(ped1, componentId, drawableId) instead
 */
export function isPedComponentVariationGen9Exclusive(ped1, componentId, drawableId) {
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
export function overridePedsCanStandOnTopFlag(flag) {
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
export function overridePedsUseDefaultDriveByClipset(flag) {
    return ped.overridesUseDefaultDriveByClipset(flag);
}
/**
 * Restores an overridden ped model personality type to the default value.
 *
 * Hash: 0x79A12861
 * @deprecated Use ped.resetModelPersonality(modelHash) instead
 */
export function resetPedModelPersonality(modelHash) {
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
export function setPedCollectionComponentVariation(ped1, componentId, collection, drawableId, textureId, paletteId) {
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
export function setPedCollectionPreloadPropData(ped1, anchorPoint, collection, propIndex, textureId) {
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
export function setPedCollectionPreloadVariationData(ped1, componentId, collection, drawableId, textureId) {
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
export function setPedCollectionPropIndex(ped1, anchorPoint, collection, propIndex, textureId, attach) {
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
export function setPedMeleeCombatLimits(primaryCount, secondaryCount, populationPedCount) {
    return ped.setMeleeCombatLimits(primaryCount, secondaryCount, populationPedCount);
}
/**
 * Sets a ped model's health config.
 * Takes effect only after setting player model with `SET_PLAYER_MODEL`.
 *
 * Hash: 0xAF12A05D
 * @deprecated Use ped.setModelHealthConfig(modelHash, configName) instead
 */
export function setPedModelHealthConfig(modelHash, configName) {
    return ped.setModelHealthConfig(modelHash, configName);
}
/**
 * Overrides a ped model personality type.
 *
 * Hash: 0x46F6B38B
 * @deprecated Use ped.setModelPersonality(modelHash, personalityHash) instead
 */
export function setPedModelPersonality(modelHash, personalityHash) {
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
export function setPedTurningThresholds(min, max) {
    return ped.setTurningThresholds(min, max);
}
/**
 * Returns the bone matrix of the specified bone id. usefull for entity attachment
 *
 * Hash: 0x9C5E7C9C
 * @deprecated Use ped.getBoneMatrix(ped1, boneId) instead
 */
export function getPedBoneMatrix(ped1, boneId) {
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
export function getAllRopes() {
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
export function getRopeFlags(rope) {
    return physics.getRopeFlags(rope);
}
/**
 * No comment provided
 *
 * Hash: 0x66D70EA3
 * @deprecated Use physics.getRopeLengthChangeRate(rope) instead
 */
export function getRopeLengthChangeRate(rope) {
    return physics.getRopeLengthChangeRate(rope);
}
/**
 * No comment provided
 *
 * Hash: 0xF341E6CA
 * @deprecated Use physics.getRopeTimeMultiplier(rope) instead
 */
export function getRopeTimeMultiplier(rope) {
    return physics.getRopeTimeMultiplier(rope);
}
/**
 * No comment provided
 *
 * Hash: 0x2AB2E0F6
 * @deprecated Use physics.getRopeUpdateOrder(rope) instead
 */
export function getRopeUpdateOrder(rope) {
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
export function registerRopeData(numSections, radius, diffuseTextureName, normalMapName, distanceMappingScale, uvScaleX, uvScaleY, specularFresnel, specularFalloff, specularIntensity, bumpiness, color) {
    return physics.registerRopeData(numSections, radius, diffuseTextureName, normalMapName, distanceMappingScale, uvScaleX, uvScaleY, specularFresnel, specularFalloff, specularIntensity, bumpiness, color);
}
/**
 * Resets parameters which is used by the game for checking is ped needs to fly through windscreen after a crash to default values.
 *
 * Hash: 0x6D712937
 * @deprecated Use physics.resetFlyThroughWindscreenParams() instead
 */
export function resetFlyThroughWindscreenParams() {
    return physics.resetFlyThroughWindscreenParams();
}
/**
 * Sets some in-game parameters which is used for checks is ped needs to fly through windscreen after a crash.
 *
 * Hash: 0x4D3118ED
 * @deprecated Use physics.setFlyThroughWindscreenParams(vehMinSpeed, unkMinSpeed, unkModifier, minDamage) instead
 */
export function setFlyThroughWindscreenParams(vehMinSpeed, unkMinSpeed, unkModifier, minDamage) {
    return physics.setFlyThroughWindscreenParams(vehMinSpeed, unkMinSpeed, unkModifier, minDamage);
}
/**
 * Toggles whether the usage of [ADD_ROPE](#\_0xE832D760399EB220) should create an underlying CNetworkRopeWorldStateData. By default this is set to false.
 *
 * Hash: 0xE62FC73
 * @deprecated Use physics.setRopesCreateNetworkWorldState(shouldCreate) instead
 */
export function setRopesCreateNetworkWorldState(shouldCreate) {
    return physics.setRopesCreateNetworkWorldState(shouldCreate);
}
/**
 * Set's the ropes length change rate, which is the speed that rope should wind if started.
 *
 * Hash: 0x69B680A7
 * @deprecated Use physics.setRopeLengthChangeRate(rope, lengthChangeRate) instead
 */
export function setRopeLengthChangeRate(rope, lengthChangeRate) {
    return physics.setRopeLengthChangeRate(rope, lengthChangeRate);
}
/**
 * Unlike [GET_PLAYER_INVINCIBLE](#\_0xB721981B2B939E07) this native gets both [SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED](#\_0x6BC97F4F4BB3C04B) and [SET_PLAYER_INVINCIBLE](#\_0x239528EACDC3E7DE) invincibility state.
 *
 * Hash: 0xF2E3912B
 * @deprecated Use player.getInvincible2(player1) instead
 */
export function getPlayerInvincible2(player1) {
    return player.getInvincible2(player1);
}
/**
 * No comment provided
 *
 * Hash: 0xD014AB79
 * @deprecated Use player.getMaxStamina(playerId) instead
 */
export function getPlayerMaxStamina(playerId) {
    return player.getMaxStamina(playerId);
}
/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER](#\_0xAE540335B4ABC4E2).
 *
 * Hash: 0x27E94EF8
 * @deprecated Use player.getMeleeWeaponDefenseModifier(playerId) instead
 */
export function getPlayerMeleeWeaponDefenseModifier(playerId) {
    return player.getMeleeWeaponDefenseModifier(playerId);
}
/**
 * No comment provided
 *
 * Hash: 0xE415EC5C
 * @deprecated Use player.getStamina(playerId) instead
 */
export function getPlayerStamina(playerId) {
    return player.getStamina(playerId);
}
/**
 * A getter for [SET_PLAYER_VEHICLE_DAMAGE_MODIFIER](#\_0xA50E117CDDF82F0C).
 *
 * Hash: 0x78F27B1F
 * @deprecated Use player.getVehicleDamageModifier(playerId) instead
 */
export function getPlayerVehicleDamageModifier(playerId) {
    return player.getVehicleDamageModifier(playerId);
}
/**
 * A getter for [SET_PLAYER_VEHICLE_DEFENSE_MODIFIER](#\_0x4C60E6EFDAFF2462).
 *
 * Hash: 0x8326E7CD
 * @deprecated Use player.getVehicleDefenseModifier(playerId) instead
 */
export function getPlayerVehicleDefenseModifier(playerId) {
    return player.getVehicleDefenseModifier(playerId);
}
/**
 * No comment provided
 *
 * Hash: 0x35594F67
 * @deprecated Use player.setMaxStamina(playerId, maxStamina) instead
 */
export function setPlayerMaxStamina(playerId, maxStamina) {
    return player.setMaxStamina(playerId, maxStamina);
}
/**
 * No comment provided
 *
 * Hash: 0xA9EC16C7
 * @deprecated Use player.setStamina(playerId, stamina) instead
 */
export function setPlayerStamina(playerId, stamina) {
    return player.setStamina(playerId, stamina);
}
/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
 *
 * Hash: 0x8689A825
 * @deprecated Use player.getMeleeWeaponDamageModifier(playerId) instead
 */
export function getPlayerMeleeWeaponDamageModifier(playerId) {
    return player.getMeleeWeaponDamageModifier(playerId);
}
/**
 * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
 *
 * Hash: 0x2A3D7CDA
 * @deprecated Use player.getWeaponDamageModifier(playerId) instead
 */
export function getPlayerWeaponDamageModifier(playerId) {
    return player.getWeaponDamageModifier(playerId);
}
/**
 * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
 *
 * Hash: 0xF1543251
 * @deprecated Use player.getWeaponDefenseModifier(playerId) instead
 */
export function getPlayerWeaponDefenseModifier(playerId) {
    return player.getWeaponDefenseModifier(playerId);
}
/**
 * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
 *
 * Hash: 0x986B65FF
 * @deprecated Use player.getWeaponDefenseModifier2(playerId) instead
 */
export function getPlayerWeaponDefenseModifier2(playerId) {
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
export function getActivePlayers() {
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
export function getPlayerFromServerId(serverId) {
    return player.getFromServerId(serverId);
}
/**
 * No comment provided
 *
 * Hash: 0x4D97BCC7
 * @deprecated Use player.getServerId(player1) instead
 */
export function getPlayerServerId(player1) {
    return player.getServerId(player1);
}
/**
 * the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.
 * This function doesn't need to be called every frame, it works like a switcher.
 *
 * Hash: 0xFC02CAF6
 * @deprecated Use player.setTalkingOverride(player1, state) instead
 */
export function setPlayerTalkingOverride(player1, state) {
    return player.setTalkingOverride(player1, state);
}
/**
 * On the server this will return the players source, on the client it will return the player handle.
 *
 * Hash: 0xA56135E0
 * @deprecated Use player.getFromStateBagName(bagName) instead
 */
export function getPlayerFromStateBagName(bagName) {
    return player.getFromStateBagName(bagName);
}
/**
 * No comment provided
 *
 * Hash: 0x322B1192
 * @deprecated Use streaming.getInteriorEntitiesExtents(interiorId) instead
 */
export function getInteriorEntitiesExtents(interiorId) {
    return streaming.getInteriorEntitiesExtents(interiorId);
}
/**
 * No comment provided
 *
 * Hash: 0xF772BB2C
 * @deprecated Use streaming.getInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex) instead
 */
export function getInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex) {
    return streaming.getInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xD05BB8B1
 * @deprecated Use streaming.getInteriorPortalCount(interiorId) instead
 */
export function getInteriorPortalCount(interiorId) {
    return streaming.getInteriorPortalCount(interiorId);
}
/**
 * No comment provided
 *
 * Hash: 0x9A0E1700
 * @deprecated Use streaming.getInteriorPortalEntityArchetype(interiorId, portalIndex, entityIndex) instead
 */
export function getInteriorPortalEntityArchetype(interiorId, portalIndex, entityIndex) {
    return streaming.getInteriorPortalEntityArchetype(interiorId, portalIndex, entityIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xC68021B
 * @deprecated Use streaming.getInteriorPortalEntityCount(interiorId, portalIndex) instead
 */
export function getInteriorPortalEntityCount(interiorId, portalIndex) {
    return streaming.getInteriorPortalEntityCount(interiorId, portalIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x9DA2E811
 * @deprecated Use streaming.getInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex) instead
 */
export function getInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex) {
    return streaming.getInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x9B7AB83C
 * @deprecated Use streaming.getInteriorPortalEntityPosition(interiorId, portalIndex, entityIndex) instead
 */
export function getInteriorPortalEntityPosition(interiorId, portalIndex, entityIndex) {
    return streaming.getInteriorPortalEntityPosition(interiorId, portalIndex, entityIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x9F9CEB63
 * @deprecated Use streaming.getInteriorPortalEntityRotation(interiorId, portalIndex, entityIndex) instead
 */
export function getInteriorPortalEntityRotation(interiorId, portalIndex, entityIndex) {
    return streaming.getInteriorPortalEntityRotation(interiorId, portalIndex, entityIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xC74DA47C
 * @deprecated Use streaming.getInteriorPortalFlag(interiorId, portalIndex) instead
 */
export function getInteriorPortalFlag(interiorId, portalIndex) {
    return streaming.getInteriorPortalFlag(interiorId, portalIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xAA9C141D
 * @deprecated Use streaming.getInteriorPortalRoomFrom(interiorId, portalIndex) instead
 */
export function getInteriorPortalRoomFrom(interiorId, portalIndex) {
    return streaming.getInteriorPortalRoomFrom(interiorId, portalIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x3F47F0E8
 * @deprecated Use streaming.getInteriorPortalRoomTo(interiorId, portalIndex) instead
 */
export function getInteriorPortalRoomTo(interiorId, portalIndex) {
    return streaming.getInteriorPortalRoomTo(interiorId, portalIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x77A435B0
 * @deprecated Use streaming.getInteriorPosition(interiorId) instead
 */
export function getInteriorPosition(interiorId) {
    return streaming.getInteriorPosition(interiorId);
}
/**
 * No comment provided
 *
 * Hash: 0xA2737C2C
 * @deprecated Use streaming.getInteriorRoomCount(interiorId) instead
 */
export function getInteriorRoomCount(interiorId) {
    return streaming.getInteriorRoomCount(interiorId);
}
/**
 * No comment provided
 *
 * Hash: 0xF9E795DD
 * @deprecated Use streaming.getInteriorRoomExtents(interiorId, roomIndex) instead
 */
export function getInteriorRoomExtents(interiorId, roomIndex) {
    return streaming.getInteriorRoomExtents(interiorId, roomIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x6B7AF743
 * @deprecated Use streaming.getInteriorRoomFlag(interiorId, roomIndex) instead
 */
export function getInteriorRoomFlag(interiorId, roomIndex) {
    return streaming.getInteriorRoomFlag(interiorId, roomIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xE0EE05F8
 * @deprecated Use streaming.getInteriorRoomIndexByHash(interiorId, roomHash) instead
 */
export function getInteriorRoomIndexByHash(interiorId, roomHash) {
    return streaming.getInteriorRoomIndexByHash(interiorId, roomHash);
}
/**
 * No comment provided
 *
 * Hash: 0x11755DF2
 * @deprecated Use streaming.getInteriorRoomName(interiorId, roomIndex) instead
 */
export function getInteriorRoomName(interiorId, roomIndex) {
    return streaming.getInteriorRoomName(interiorId, roomIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x82BA3F88
 * @deprecated Use streaming.getInteriorRoomTimecycle(interiorId, roomIndex) instead
 */
export function getInteriorRoomTimecycle(interiorId, roomIndex) {
    return streaming.getInteriorRoomTimecycle(interiorId, roomIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x5A039998
 * @deprecated Use streaming.getInteriorRotation(interiorId) instead
 */
export function getInteriorRotation(interiorId) {
    return streaming.getInteriorRotation(interiorId);
}
/**
 * No comment provided
 *
 * Hash: 0x87F43553
 * @deprecated Use streaming.setInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex, pos) instead
 */
export function setInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex, pos) {
    return streaming.setInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex, pos);
}
/**
 * No comment provided
 *
 * Hash: 0x8349CD76
 * @deprecated Use streaming.setInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex, flag) instead
 */
export function setInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex, flag) {
    return streaming.setInteriorPortalEntityFlag(interiorId, portalIndex, entityIndex, flag);
}
/**
 * No comment provided
 *
 * Hash: 0x88B2355E
 * @deprecated Use streaming.setInteriorPortalFlag(interiorId, portalIndex, flag) instead
 */
export function setInteriorPortalFlag(interiorId, portalIndex, flag) {
    return streaming.setInteriorPortalFlag(interiorId, portalIndex, flag);
}
/**
 * No comment provided
 *
 * Hash: 0x298FC783
 * @deprecated Use streaming.setInteriorPortalRoomFrom(interiorId, portalIndex, roomFrom) instead
 */
export function setInteriorPortalRoomFrom(interiorId, portalIndex, roomFrom) {
    return streaming.setInteriorPortalRoomFrom(interiorId, portalIndex, roomFrom);
}
/**
 * No comment provided
 *
 * Hash: 0x58982680
 * @deprecated Use streaming.setInteriorPortalRoomTo(interiorId, portalIndex, roomTo) instead
 */
export function setInteriorPortalRoomTo(interiorId, portalIndex, roomTo) {
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
export function setInteriorProbeLength(probeLength) {
    return streaming.setInteriorProbeLength(probeLength);
}
/**
 * No comment provided
 *
 * Hash: 0x4FDCF51E
 * @deprecated Use streaming.setInteriorRoomExtents(interiorId, roomIndex, bbMinX, bbMinY, bbMinZ, bbMaxX, bbMaxY, bbMaxZ) instead
 */
export function setInteriorRoomExtents(interiorId, roomIndex, bbMinX, bbMinY, bbMinZ, bbMaxX, bbMaxY, bbMaxZ) {
    return streaming.setInteriorRoomExtents(interiorId, roomIndex, bbMinX, bbMinY, bbMinZ, bbMaxX, bbMaxY, bbMaxZ);
}
/**
 * No comment provided
 *
 * Hash: 0x5518D60B
 * @deprecated Use streaming.setInteriorRoomFlag(interiorId, roomIndex, flag) instead
 */
export function setInteriorRoomFlag(interiorId, roomIndex, flag) {
    return streaming.setInteriorRoomFlag(interiorId, roomIndex, flag);
}
/**
 * No comment provided
 *
 * Hash: 0x31C9A848
 * @deprecated Use streaming.setInteriorRoomTimecycle(interiorId, roomIndex, timecycleHash) instead
 */
export function setInteriorRoomTimecycle(interiorId, roomIndex, timecycleHash) {
    return streaming.setInteriorRoomTimecycle(interiorId, roomIndex, timecycleHash);
}
/**
 * Transiently updates the entity with the specified mapdata index and entity index.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0xFC52CB91
 * @deprecated Use streaming.updateMapdataEntity(mapdata, entity, entityDef) instead
 */
export function updateMapdataEntity(mapdata, entity, entityDef) {
    return streaming.updateMapdataEntity(mapdata, entity, entityDef);
}
/**
 * No comment provided
 *
 * Hash: 0x32CA01C3
 * @deprecated Use streaming.addTextEntry(entryKey, entryText) instead
 */
export function addTextEntry(entryKey, entryText) {
    return streaming.addTextEntry(entryKey, entryText);
}
/**
 * No comment provided
 *
 * Hash: 0x289DA860
 * @deprecated Use streaming.addTextEntryByHash(entryKey, entryText) instead
 */
export function addTextEntryByHash(entryKey, entryText) {
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
export function getAllTrackJunctions() {
    return track.getAllJunctions();
}
/**
 * Get all track nodes and their track ids within the radius of the specified coordinates.
 *
 * Hash: 0x59FC24A7
 * @deprecated Use track.getClosestNodes(position, radius) instead
 */
export function getClosestTrackNodes(position, radius) {
    return track.getClosestNodes(position, radius);
}
/**
 * No comment provided
 *
 * Hash: 0xBF482A5E
 * @deprecated Use track.getBrakingDistance(track1) instead
 */
export function getTrackBrakingDistance(track1) {
    return track.getBrakingDistance(track1);
}
/**
 * No comment provided
 *
 * Hash: 0x34EE2BF3
 * @deprecated Use track.getMaxSpeed(track1) instead
 */
export function getTrackMaxSpeed(track1) {
    return track.getMaxSpeed(track1);
}
/**
 * Gets the coordinates of a specific track node.
 *
 * Hash: 0x1628548E
 * @deprecated Use track.getNodeCoords(trackIndex, trackNode) instead
 */
export function getTrackNodeCoords(trackIndex, trackNode) {
    return track.getNodeCoords(trackIndex, trackNode);
}
/**
 * Gets the specified tracks node count.
 *
 * Hash: 0x896A0C11
 * @deprecated Use track.getNodeCount(trackIndex) instead
 */
export function getTrackNodeCount(trackIndex) {
    return track.getNodeCount(trackIndex);
}
/**
 * Getter for [SET_TRACK_ENABLED](#\_0x4B41E84C)
 *
 * Hash: 0x31E695CB
 * @deprecated Use track.isEnabled(track1) instead
 */
export function isTrackEnabled(track1) {
    return track.isEnabled(track1);
}
/**
 * Getter for [SWITCH_TRAIN_TRACK](#\_0xFD813BB7DB977F20). Determines if ambient trains are able to spawn on this track.
 *
 * Hash: 0xE0C53765
 * @deprecated Use track.isSwitchedOff(track1) instead
 */
export function isTrackSwitchedOff(track1) {
    return track.isSwitchedOff(track1);
}
/**
 * Registers a track junction that when enabled will cause a train on the defined trackIndex, node and direction to change its current track index and begin traveling on the new node
 *
 * Hash: 0x35F743B5
 * @deprecated Use track.registerJunction(trackIndex, trackNode, newIndex, newNode, direction) instead
 */
export function registerTrackJunction(trackIndex, trackNode, newIndex, newNode, direction) {
    return track.registerJunction(trackIndex, trackNode, newIndex, newNode, direction);
}
/**
 * Removes the specified track junction.
 *
 * Hash: 0x4F3D2B2A
 * @deprecated Use track.removeJunction(junctionIndex) instead
 */
export function removeTrackJunction(junctionIndex) {
    return track.removeJunction(junctionIndex);
}
/**
 * Sets the braking distance of the track. Used by trains to determine the point to slow down when entering a station.
 *
 * Hash: 0x77EB78D0
 * @deprecated Use track.setBrakingDistance(track1, brakingDistance) instead
 */
export function setTrackBrakingDistance(track1, brakingDistance) {
    return track.setBrakingDistance(track1, brakingDistance);
}
/**
 * Toggles the track being active. If disabled mission trains will not be able to spawn on this track and will look for the next closest track to spawn
 *
 * Hash: 0x4B41E84C
 * @deprecated Use track.setEnabled(track1, enabled) instead
 */
export function setTrackEnabled(track1, enabled) {
    return track.setEnabled(track1, enabled);
}
/**
 * Sets the state of a track junction.
 *
 * Hash: 0x537B449D
 * @deprecated Use track.setJunctionActive(junctionIndex, state) instead
 */
export function setTrackJunctionActive(junctionIndex, state) {
    return track.setJunctionActive(junctionIndex, state);
}
/**
 * Sets the max speed for the train tracks. Used by ambient trains and for station calculations
 *
 * Hash: 0x37BFC732
 * @deprecated Use track.setMaxSpeed(track1, newSpeed) instead
 */
export function setTrackMaxSpeed(track1, newSpeed) {
    return track.setMaxSpeed(track1, newSpeed);
}
/**
 * Break off vehicle wheel by index. The `leaveDebrisTrail` flag requires `putOnFire` to be true.
 *
 * Hash: 0xA274CADB
 * @deprecated Use vehicle.breakOffWheel(vehicle1, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag, putOnFire) instead
 */
export function breakOffVehicleWheel(vehicle1, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag, putOnFire) {
    return vehicle.breakOffWheel(vehicle1, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag, putOnFire);
}
/**
 * Removes vehicle xenon lights custom RGB color.
 *
 * Hash: 0x2867ED8C
 * @deprecated Use vehicle.clearXenonLightsCustomColor(vehicle1) instead
 */
export function clearVehicleXenonLightsCustomColor(vehicle1) {
    return vehicle.clearXenonLightsCustomColor(vehicle1);
}
/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity(While riding in a car as a passenger)
 *
 * Hash: 0x5C140555
 * @deprecated Use vehicle.disablePassengerIdleCamera(state) instead
 */
export function disableVehiclePassengerIdleCamera(state) {
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
export function doesVehicleUseFuel(vehicle1) {
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
export function getAllVehicleModels() {
    return vehicle.getAllModels();
}
/**
 * A getter for [SET_AMBIENT_VEHICLE_RANGE_MULTIPLIER_THIS_FRAME](#\_0x90B6DA738A9A25DA).
 *
 * Hash: 0x667EC929
 * @deprecated Use vehicle.getAmbientRangeMultiplier() instead
 */
export function getAmbientVehicleRangeMultiplier() {
    return vehicle.getAmbientRangeMultiplier();
}
/**
 * No comment provided
 *
 * Hash: 0xE015E854
 * @deprecated Use vehicle.getTrainCurrentTrackNode(train) instead
 */
export function getTrainCurrentTrackNode(train) {
    return vehicle.getTrainCurrentTrackNode(train);
}
/**
 * Gets the door count for the specified train.
 *
 * Hash: 0x99974721
 * @deprecated Use vehicle.getTrainDoorCount(train) instead
 */
export function getTrainDoorCount(train) {
    return vehicle.getTrainDoorCount(train);
}
/**
 * Gets the ratio that a door is open for on a train.
 *
 * Hash: 0x40B16551
 * @deprecated Use vehicle.getTrainDoorOpenRatio(train, doorIndex) instead
 */
export function getTrainDoorOpenRatio(train, doorIndex) {
    return vehicle.getTrainDoorOpenRatio(train, doorIndex);
}
/**
 * Gets the speed the train is currently going.
 *
 * Hash: 0x428668B7
 * @deprecated Use vehicle.getTrainSpeed(train) instead
 */
export function getTrainSpeed(train) {
    return vehicle.getTrainSpeed(train);
}
/**
 * No comment provided
 *
 * Hash: 0xC62AAC98
 * @deprecated Use vehicle.getAlarmTimeLeft(vehicle1) instead
 */
export function getVehicleAlarmTimeLeft(vehicle1) {
    return vehicle.getAlarmTimeLeft(vehicle1);
}
/**
 * A getter for [SET_VEHICLE_CHEAT_POWER_INCREASE](#\_0xB59E4BD37AE292DB).
 *
 * Hash: 0xC3C93F28
 * @deprecated Use vehicle.getCheatPowerIncrease(vehicle1) instead
 */
export function getVehicleCheatPowerIncrease(vehicle1) {
    return vehicle.getCheatPowerIncrease(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0x1DAD4583
 * @deprecated Use vehicle.getClutch(vehicle1) instead
 */
export function getVehicleClutch(vehicle1) {
    return vehicle.getClutch(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0xB4F4E566
 * @deprecated Use vehicle.getCurrentGear(vehicle1) instead
 */
export function getVehicleCurrentGear(vehicle1) {
    return vehicle.getCurrentGear(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0xE7B12B54
 * @deprecated Use vehicle.getCurrentRpm(vehicle1) instead
 */
export function getVehicleCurrentRpm(vehicle1) {
    return vehicle.getCurrentRpm(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0xDFFABA2A
 * @deprecated Use vehicle.getDashboardBoost() instead
 */
export function getVehicleDashboardBoost() {
    return vehicle.getDashboardBoost();
}
/**
 * Retrieves the current gear displayed on the dashboard of the vehicle the player is in, returned as a float. This value represents the gear shown in the instrument cluster, such as "R" (0.0) or positive values (e.g., 1.0, 2.0, etc.) for drive gears.
 *
 * Hash: 0x435C86F4
 * @deprecated Use vehicle.getDashboardCurrentGear() instead
 */
export function getVehicleDashboardCurrentGear() {
    return vehicle.getDashboardCurrentGear();
}
/**
 * No comment provided
 *
 * Hash: 0x19B0B2CE
 * @deprecated Use vehicle.getDashboardFuel() instead
 */
export function getVehicleDashboardFuel() {
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
export function getVehicleDashboardLights() {
    return vehicle.getDashboardLights();
}
/**
 * No comment provided
 *
 * Hash: 0x3856D767
 * @deprecated Use vehicle.getDashboardOilPressure() instead
 */
export function getVehicleDashboardOilPressure() {
    return vehicle.getDashboardOilPressure();
}
/**
 * No comment provided
 *
 * Hash: 0x1F5996AA
 * @deprecated Use vehicle.getDashboardOilTemp() instead
 */
export function getVehicleDashboardOilTemp() {
    return vehicle.getDashboardOilTemp();
}
/**
 * No comment provided
 *
 * Hash: 0xF9716A11
 * @deprecated Use vehicle.getDashboardRpm() instead
 */
export function getVehicleDashboardRpm() {
    return vehicle.getDashboardRpm();
}
/**
 * No comment provided
 *
 * Hash: 0x9AAD420E
 * @deprecated Use vehicle.getDashboardSpeed(vehicle1) instead
 */
export function getVehicleDashboardSpeed(vehicle1) {
    return vehicle.getDashboardSpeed(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0x6B6ADAFA
 * @deprecated Use vehicle.getDashboardTemp() instead
 */
export function getVehicleDashboardTemp() {
    return vehicle.getDashboardTemp();
}
/**
 * No comment provided
 *
 * Hash: 0xFABE67A9
 * @deprecated Use vehicle.getDashboardVacuum() instead
 */
export function getVehicleDashboardVacuum() {
    return vehicle.getDashboardVacuum();
}
/**
 * A getter for [SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x245A6883D966D537).
 *
 * Hash: 0xEF7C6538
 * @deprecated Use vehicle.getDensityMultiplier() instead
 */
export function getVehicleDensityMultiplier() {
    return vehicle.getDensityMultiplier();
}
/**
 * Gets a vehicle's multiplier used with a wheel's GET_VEHICLE_WHEEL_STEERING_ANGLE to determine the angle the wheel is rendered.
 *
 * Hash: 0x21C1DA8E
 * @deprecated Use vehicle.getDrawnWheelAngleMult(vehicle1) instead
 */
export function getVehicleDrawnWheelAngleMult(vehicle1) {
    return vehicle.getDrawnWheelAngleMult(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0xF4F495CB
 * @deprecated Use vehicle.getEngineTemperature(vehicle1) instead
 */
export function getVehicleEngineTemperature(vehicle1) {
    return vehicle.getEngineTemperature(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0x5F739BB8
 * @deprecated Use vehicle.getFuelLevel(vehicle1) instead
 */
export function getVehicleFuelLevel(vehicle1) {
    return vehicle.getFuelLevel(vehicle1);
}
/**
 * Gets vehicles gear ratio on choosen gear.
 *
 * Hash: 0x82E794B7
 * @deprecated Use vehicle.getGearRatio(vehicle1, gear) instead
 */
export function getVehicleGearRatio(vehicle1, gear) {
    return vehicle.getGearRatio(vehicle1, gear);
}
/**
 * No comment provided
 *
 * Hash: 0xB48A1292
 * @deprecated Use vehicle.getGravityAmount(vehicle1) instead
 */
export function getVehicleGravityAmount(vehicle1) {
    return vehicle.getGravityAmount(vehicle1);
}
/**
 * Returns the effective handling data of a vehicle as a floating-point value.
 * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 *
 * Hash: 0x642FC12F
 * @deprecated Use vehicle.getHandlingFloat(vehicle1, class_, fieldName) instead
 */
export function getVehicleHandlingFloat(vehicle1, class_, fieldName) {
    return vehicle.getHandlingFloat(vehicle1, class_, fieldName);
}
/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 *
 * Hash: 0x27396C75
 * @deprecated Use vehicle.getHandlingInt(vehicle1, class_, fieldName) instead
 */
export function getVehicleHandlingInt(vehicle1, class_, fieldName) {
    return vehicle.getHandlingInt(vehicle1, class_, fieldName);
}
/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 *
 * Hash: 0xFB341304
 * @deprecated Use vehicle.getHandlingVector(vehicle1, class_, fieldName) instead
 */
export function getVehicleHandlingVector(vehicle1, class_, fieldName) {
    return vehicle.getHandlingVector(vehicle1, class_, fieldName);
}
/**
 * No comment provided
 *
 * Hash: 0xF1D1D689
 * @deprecated Use vehicle.getHighGear(vehicle1) instead
 */
export function getVehicleHighGear(vehicle1) {
    return vehicle.getHighGear(vehicle1);
}
/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 *
 * Hash: 0x83070354
 * @deprecated Use vehicle.getIndicatorLights(vehicle1) instead
 */
export function getVehicleIndicatorLights(vehicle1) {
    return vehicle.getIndicatorLights(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0x7E6E219C
 * @deprecated Use vehicle.getLightMultiplier(vehicle1) instead
 */
export function getVehicleLightMultiplier(vehicle1) {
    return vehicle.getLightMultiplier(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0xDDB298AE
 * @deprecated Use vehicle.getNextGear(vehicle1) instead
 */
export function getVehicleNextGear(vehicle1) {
    return vehicle.getNextGear(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0xEDF4B0FC
 * @deprecated Use vehicle.getNumberOfWheels(vehicle1) instead
 */
export function getVehicleNumberOfWheels(vehicle1) {
    return vehicle.getNumberOfWheels(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0xFC7F8EF4
 * @deprecated Use vehicle.getOilLevel(vehicle1) instead
 */
export function getVehicleOilLevel(vehicle1) {
    return vehicle.getOilLevel(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0x954465DE
 * @deprecated Use vehicle.getSteeringScale(vehicle1) instead
 */
export function getVehicleSteeringScale(vehicle1) {
    return vehicle.getSteeringScale(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0xD1D07351
 * @deprecated Use vehicle.getThrottleOffset(vehicle1) instead
 */
export function getVehicleThrottleOffset(vehicle1) {
    return vehicle.getThrottleOffset(vehicle1);
}
/**
 * A getter for [MODIFY_VEHICLE_TOP_SPEED](#\_0x93A3996368C94158). Returns -1.0 if a modifier is not set.
 *
 * Hash: 0x998B7FEE
 * @deprecated Use vehicle.getTopSpeedModifier(vehicle1) instead
 */
export function getVehicleTopSpeedModifier(vehicle1) {
    return vehicle.getTopSpeedModifier(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0xE02B51D7
 * @deprecated Use vehicle.getTurboPressure(vehicle1) instead
 */
export function getVehicleTurboPressure(vehicle1) {
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
export function getVehicleWheelieState(vehicle1) {
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
export function getVehicleWheelBrakePressure(vehicle1, wheelIndex) {
    return vehicle.getWheelBrakePressure(vehicle1, wheelIndex);
}
/**
 * Gets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xC70FA0C7
 * @deprecated Use vehicle.getWheelFlags(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelFlags(vehicle1, wheelIndex) {
    return vehicle.getWheelFlags(vehicle1, wheelIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x54A677F5
 * @deprecated Use vehicle.getWheelHealth(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelHealth(vehicle1, wheelIndex) {
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
export function getVehicleWheelIsPowered(vehicle1, wheelIndex) {
    return vehicle.getWheelIsPowered(vehicle1, wheelIndex);
}
/**
 * Gets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xD203287
 * @deprecated Use vehicle.getWheelPower(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelPower(vehicle1, wheelIndex) {
    return vehicle.getWheelPower(vehicle1, wheelIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xCEE21AB2
 * @deprecated Use vehicle.getWheelRimColliderSize(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelRimColliderSize(vehicle1, wheelIndex) {
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
export function getVehicleWheelRotationSpeed(vehicle1, wheelIndex) {
    return vehicle.getWheelRotationSpeed(vehicle1, wheelIndex);
}
/**
 * Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 *
 * Hash: 0x4046B66
 * @deprecated Use vehicle.getWheelSize(vehicle1) instead
 */
export function getVehicleWheelSize(vehicle1) {
    return vehicle.getWheelSize(vehicle1);
}
/**
 * Gets speed of a wheel at the tyre.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x149C9DA0
 * @deprecated Use vehicle.getWheelSpeed(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelSpeed(vehicle1, wheelIndex) {
    return vehicle.getWheelSpeed(vehicle1, wheelIndex);
}
/**
 * Gets steering angle of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xA0867448
 * @deprecated Use vehicle.getWheelSteeringAngle(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelSteeringAngle(vehicle1, wheelIndex) {
    return vehicle.getWheelSteeringAngle(vehicle1, wheelIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xA7F04022
 * @deprecated Use vehicle.getWheelSurfaceMaterial(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelSurfaceMaterial(vehicle1, wheelIndex) {
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
export function getVehicleWheelSuspensionCompression(vehicle1, wheelIndex) {
    return vehicle.getWheelSuspensionCompression(vehicle1, wheelIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xE0BA9FE6
 * @deprecated Use vehicle.getWheelTireColliderSize(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelTireColliderSize(vehicle1, wheelIndex) {
    return vehicle.getWheelTireColliderSize(vehicle1, wheelIndex);
}
/**
 * No comment provided
 *
 * Hash: 0xEF65929C
 * @deprecated Use vehicle.getWheelTireColliderWidth(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelTireColliderWidth(vehicle1, wheelIndex) {
    return vehicle.getWheelTireColliderWidth(vehicle1, wheelIndex);
}
/**
 * Gets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x3BCFEE14
 * @deprecated Use vehicle.getWheelTractionVectorLength(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelTractionVectorLength(vehicle1, wheelIndex) {
    return vehicle.getWheelTractionVectorLength(vehicle1, wheelIndex);
}
/**
 * Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 *
 * Hash: 0x9C7B59F9
 * @deprecated Use vehicle.getWheelWidth(vehicle1) instead
 */
export function getVehicleWheelWidth(vehicle1) {
    return vehicle.getWheelWidth(vehicle1);
}
/**
 * Returns the offset of the specified wheel relative to the wheel's axle center.
 *
 * Hash: 0xCC90CBCA
 * @deprecated Use vehicle.getWheelXOffset(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelXOffset(vehicle1, wheelIndex) {
    return vehicle.getWheelXOffset(vehicle1, wheelIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x2EA4AFFE
 * @deprecated Use vehicle.getWheelYRotation(vehicle1, wheelIndex) instead
 */
export function getVehicleWheelYRotation(vehicle1, wheelIndex) {
    return vehicle.getWheelYRotation(vehicle1, wheelIndex);
}
/**
 * Returns vehicle xenon lights custom RGB color values. Do note this native doesn't return non-RGB colors that was set with [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07).
 *
 * Hash: 0xC715F730
 * @deprecated Use vehicle.getXenonLightsCustomColor(vehicle1) instead
 */
export function getVehicleXenonLightsCustomColor(vehicle1) {
    return vehicle.getXenonLightsCustomColor(vehicle1);
}
/**
 * A getter for [SET_VEHICLE_XMAS_SNOW_FACTOR](#\_0x80CC4C9E).
 *
 * Hash: 0x16605B30
 * @deprecated Use vehicle.getXmasSnowFactor() instead
 */
export function getVehicleXmasSnowFactor() {
    return vehicle.getXmasSnowFactor();
}
/**
 * No comment provided
 *
 * Hash: 0xDC921211
 * @deprecated Use vehicle.isAlarmSet(vehicle1) instead
 */
export function isVehicleAlarmSet(vehicle1) {
    return vehicle.isAlarmSet(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0xA411F72C
 * @deprecated Use vehicle.isInteriorLightOn(vehicle1) instead
 */
export function isVehicleInteriorLightOn(vehicle1) {
    return vehicle.isInteriorLightOn(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0xF9933BF4
 * @deprecated Use vehicle.isNeedsToBeHotwired(vehicle1) instead
 */
export function isVehicleNeedsToBeHotwired(vehicle1) {
    return vehicle.isNeedsToBeHotwired(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0xF849ED67
 * @deprecated Use vehicle.isPreviouslyOwnedByPlayer(vehicle1) instead
 */
export function isVehiclePreviouslyOwnedByPlayer(vehicle1) {
    return vehicle.isPreviouslyOwnedByPlayer(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0xA7DAF7C
 * @deprecated Use vehicle.isWanted(vehicle1) instead
 */
export function isVehicleWanted(vehicle1) {
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
export function overrideReactionToVehicleSiren(state, reaction) {
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
export function overrideVehiclePedsCanStandOnTopFlag(vehicle1, can) {
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
export function resetVehiclePedsCanStandOnTopFlag(vehicle1) {
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
export function setDefaultVehicleNumberPlateTextPattern(plateIndex, pattern) {
    return vehicle.setDefaultNumberPlateTextPattern(plateIndex, pattern);
}
/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0xFE8064E3
 * @deprecated Use vehicle.setHandlingField(vehicle1, class_, fieldName, value) instead
 */
export function setHandlingField(vehicle1, class_, fieldName, value) {
    return vehicle.setHandlingField(vehicle1, class_, fieldName, value);
}
/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0x90DD01C
 * @deprecated Use vehicle.setHandlingFloat(vehicle1, class_, fieldName, value) instead
 */
export function setHandlingFloat(vehicle1, class_, fieldName, value) {
    return vehicle.setHandlingFloat(vehicle1, class_, fieldName, value);
}
/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 *
 * Hash: 0x8AB3F46C
 * @deprecated Use vehicle.setHandlingInt(vehicle1, class_, fieldName, value) instead
 */
export function setHandlingInt(vehicle1, class_, fieldName, value) {
    return vehicle.setHandlingInt(vehicle1, class_, fieldName, value);
}
/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 *
 * Hash: 0x7F9D543
 * @deprecated Use vehicle.setHandlingVector(vehicle1, class_, fieldName, value) instead
 */
export function setHandlingVector(vehicle1, class_, fieldName, value) {
    return vehicle.setHandlingVector(vehicle1, class_, fieldName, value);
}
/**
 * This completely disables pedestrian vehicles from reacting to sirens. They will not try to do any maneuver to evade.
 *
 * Hash: 0xB90BBC6E
 * @deprecated Use vehicle.setReactionToWithSirenDisabled(state) instead
 */
export function setReactionToVehicleWithSirenDisabled(state) {
    return vehicle.setReactionToWithSirenDisabled(state);
}
/**
 * Enables or disables whether train doors should be forced open whilst a player is inside the train. This is enabled by default in multiplayer.
 *
 * Hash: 0xD4D1BA63
 * @deprecated Use vehicle.setTrainsForceDoorsOpen(forceOpen) instead
 */
export function setTrainsForceDoorsOpen(forceOpen) {
    return vehicle.setTrainsForceDoorsOpen(forceOpen);
}
/**
 * Sets the ratio that a door is open for on a train.
 *
 * Hash: 0x2468DBE8
 * @deprecated Use vehicle.setTrainDoorOpenRatio(train, doorIndex, ratio) instead
 */
export function setTrainDoorOpenRatio(train, doorIndex, ratio) {
    return vehicle.setTrainDoorOpenRatio(train, doorIndex, ratio);
}
/**
 * No comment provided
 *
 * Hash: 0x61CB74A0
 * @deprecated Use vehicle.setTrainState(train, state) instead
 */
export function setTrainState(train, state) {
    return vehicle.setTrainState(train, state);
}
/**
 * Toggles a train's ability to stop at stations
 *
 * Hash: 0xECB8B577
 * @deprecated Use vehicle.setTrainStopAtStations(train, state) instead
 */
export function setTrainStopAtStations(train, state) {
    return vehicle.setTrainStopAtStations(train, state);
}
/**
 * No comment provided
 *
 * Hash: 0xC108EE6F
 * @deprecated Use vehicle.setAlarmTimeLeft(vehicle1, time) instead
 */
export function setVehicleAlarmTimeLeft(vehicle1, time) {
    return vehicle.setAlarmTimeLeft(vehicle1, time);
}
/**
 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 *
 * Hash: 0x5F3A3574
 * @deprecated Use vehicle.setAutoRepairDisabled(vehicle1, value) instead
 */
export function setVehicleAutoRepairDisabled(vehicle1, value) {
    return vehicle.setAutoRepairDisabled(vehicle1, value);
}
/**
 * No comment provided
 *
 * Hash: 0x2F70ACED
 * @deprecated Use vehicle.setClutch(vehicle1, clutch) instead
 */
export function setVehicleClutch(vehicle1, clutch) {
    return vehicle.setClutch(vehicle1, clutch);
}
/**
 * No comment provided
 *
 * Hash: 0x2A01A8FC
 * @deprecated Use vehicle.setCurrentRpm(vehicle1, rpm) instead
 */
export function setVehicleCurrentRpm(vehicle1, rpm) {
    return vehicle.setCurrentRpm(vehicle1, rpm);
}
/**
 * No comment provided
 *
 * Hash: 0x6C93C4A9
 * @deprecated Use vehicle.setEngineTemperature(vehicle1, temperature) instead
 */
export function setVehicleEngineTemperature(vehicle1, temperature) {
    return vehicle.setEngineTemperature(vehicle1, temperature);
}
/**
 * No comment provided
 *
 * Hash: 0xBA970511
 * @deprecated Use vehicle.setFuelLevel(vehicle1, level) instead
 */
export function setVehicleFuelLevel(vehicle1, level) {
    return vehicle.setFuelLevel(vehicle1, level);
}
/**
 * Sets the vehicles gear ratio on choosen gear, reverse gear needs to be a negative float and forward moving gear needs to be a positive float. Refer to the examples if confused.
 *
 * Hash: 0x496EF2F2
 * @deprecated Use vehicle.setGearRatio(vehicle1, gear, ratio) instead
 */
export function setVehicleGearRatio(vehicle1, gear, ratio) {
    return vehicle.setGearRatio(vehicle1, gear, ratio);
}
/**
 * No comment provided
 *
 * Hash: 0x1A963E58
 * @deprecated Use vehicle.setGravityAmount(vehicle1, gravity) instead
 */
export function setVehicleGravityAmount(vehicle1, gravity) {
    return vehicle.setGravityAmount(vehicle1, gravity);
}
/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0x2BA40795
 * @deprecated Use vehicle.setVehicleHandlingField(vehicle1, class_, fieldName, value) instead
 */
export function setVehicleHandlingField(vehicle1, class_, fieldName, value) {
    return vehicle.setVehicleHandlingField(vehicle1, class_, fieldName, value);
}
/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 *
 * Hash: 0x488C86D2
 * @deprecated Use vehicle.setVehicleHandlingFloat(vehicle1, class_, fieldName, value) instead
 */
export function setVehicleHandlingFloat(vehicle1, class_, fieldName, value) {
    return vehicle.setVehicleHandlingFloat(vehicle1, class_, fieldName, value);
}
/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 *
 * Hash: 0xC37F4CF9
 * @deprecated Use vehicle.setVehicleHandlingInt(vehicle1, class_, fieldName, value) instead
 */
export function setVehicleHandlingInt(vehicle1, class_, fieldName, value) {
    return vehicle.setVehicleHandlingInt(vehicle1, class_, fieldName, value);
}
/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 *
 * Hash: 0x12497890
 * @deprecated Use vehicle.setVehicleHandlingVector(vehicle1, class_, fieldName, value) instead
 */
export function setVehicleHandlingVector(vehicle1, class_, fieldName, value) {
    return vehicle.setVehicleHandlingVector(vehicle1, class_, fieldName, value);
}
/**
 * No comment provided
 *
 * Hash: 0x20B1B3E6
 * @deprecated Use vehicle.setHighGear(vehicle1, gear) instead
 */
export function setVehicleHighGear(vehicle1, gear) {
    return vehicle.setHighGear(vehicle1, gear);
}
/**
 * Sets the maximum distance in which [\_SET_VEHICLE_NITRO_ENABLED](#\_0xC8E9B6B71B8E660D) PTFX are rendered. Distance is measured from the camera position.
 *
 * Hash: 0xA40CB822
 * @deprecated Use vehicle.setNitroPtfxRange(range) instead
 */
export function setVehicleNitroPtfxRange(range) {
    return vehicle.setNitroPtfxRange(range);
}
/**
 * No comment provided
 *
 * Hash: 0x90D1CAD1
 * @deprecated Use vehicle.setOilLevel(vehicle1, level) instead
 */
export function setVehicleOilLevel(vehicle1, level) {
    return vehicle.setOilLevel(vehicle1, level);
}
/**
 * Set the vehicle's pitch bias. Only works on planes.
 *
 * Hash: 0x2A6CC9F2
 * @deprecated Use vehicle.setPitchBias(vehicle1, value) instead
 */
export function setVehiclePitchBias(vehicle1, value) {
    return vehicle.setPitchBias(vehicle1, value);
}
/**
 * Set the vehicle's roll bias. Only works on planes.
 *
 * Hash: 0x264B45DE
 * @deprecated Use vehicle.setRollBias(vehicle1, value) instead
 */
export function setVehicleRollBias(vehicle1, value) {
    return vehicle.setRollBias(vehicle1, value);
}
/**
 * No comment provided
 *
 * Hash: 0xFFCCC2EA
 * @deprecated Use vehicle.setSteeringAngle(vehicle1, angle) instead
 */
export function setVehicleSteeringAngle(vehicle1, angle) {
    return vehicle.setSteeringAngle(vehicle1, angle);
}
/**
 * No comment provided
 *
 * Hash: 0xEB46596F
 * @deprecated Use vehicle.setSteeringScale(vehicle1, scale) instead
 */
export function setVehicleSteeringScale(vehicle1, scale) {
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
export function setVehicleSuspensionHeight(vehicle1, newHeight) {
    return vehicle.setSuspensionHeight(vehicle1, newHeight);
}
/**
 * No comment provided
 *
 * Hash: 0x6485615E
 * @deprecated Use vehicle.setTurboPressure(vehicle1, pressure) instead
 */
export function setVehicleTurboPressure(vehicle1, pressure) {
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
export function setVehicleWheelieState(vehicle1, state) {
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
export function setVehicleWheelBrakePressure(vehicle1, wheelIndex, pressure) {
    return vehicle.setWheelBrakePressure(vehicle1, wheelIndex, pressure);
}
/**
 * Sets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xD2B9E90D
 * @deprecated Use vehicle.setWheelFlags(vehicle1, wheelIndex, flags) instead
 */
export function setVehicleWheelFlags(vehicle1, wheelIndex, flags) {
    return vehicle.setWheelFlags(vehicle1, wheelIndex, flags);
}
/**
 * No comment provided
 *
 * Hash: 0xB22ECEFD
 * @deprecated Use vehicle.setWheelHealth(vehicle1, wheelIndex, health) instead
 */
export function setVehicleWheelHealth(vehicle1, wheelIndex, health) {
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
export function setVehicleWheelIsPowered(vehicle1, wheelIndex, powered) {
    return vehicle.setWheelIsPowered(vehicle1, wheelIndex, powered);
}
/**
 * Sets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0xC6146043
 * @deprecated Use vehicle.setWheelPower(vehicle1, wheelIndex, power) instead
 */
export function setVehicleWheelPower(vehicle1, wheelIndex, power) {
    return vehicle.setWheelPower(vehicle1, wheelIndex, power);
}
/**
 * Not sure what this changes, probably determines physical rim size in case the tire is blown.
 *
 * Hash: 0xF380E184
 * @deprecated Use vehicle.setWheelRimColliderSize(vehicle1, wheelIndex, value) instead
 */
export function setVehicleWheelRimColliderSize(vehicle1, wheelIndex, value) {
    return vehicle.setWheelRimColliderSize(vehicle1, wheelIndex, value);
}
/**
 * Sets the rotation speed of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x35ED100D
 * @deprecated Use vehicle.setWheelRotationSpeed(vehicle1, wheelIndex, speed) instead
 */
export function setVehicleWheelRotationSpeed(vehicle1, wheelIndex, speed) {
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
export function setVehicleWheelSize(vehicle1, size) {
    return vehicle.setWheelSize(vehicle1, size);
}
/**
 * Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).
 *
 * Hash: 0xB962D05C
 * @deprecated Use vehicle.setWheelTireColliderSize(vehicle1, wheelIndex, value) instead
 */
export function setVehicleWheelTireColliderSize(vehicle1, wheelIndex, value) {
    return vehicle.setWheelTireColliderSize(vehicle1, wheelIndex, value);
}
/**
 * Use along with SetVehicleWheelWidth to resize the wheels (this native sets the collider width affecting physics while SetVehicleWheelWidth will change visual width).
 *
 * Hash: 0x47BD0270
 * @deprecated Use vehicle.setWheelTireColliderWidth(vehicle1, wheelIndex, value) instead
 */
export function setVehicleWheelTireColliderWidth(vehicle1, wheelIndex, value) {
    return vehicle.setWheelTireColliderWidth(vehicle1, wheelIndex, value);
}
/**
 * Sets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 *
 * Hash: 0x85C85A3A
 * @deprecated Use vehicle.setWheelTractionVectorLength(vehicle1, wheelIndex, length) instead
 */
export function setVehicleWheelTractionVectorLength(vehicle1, wheelIndex, length) {
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
export function setVehicleWheelWidth(vehicle1, width) {
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
export function setVehicleWheelXOffset(vehicle1, wheelIndex, offset) {
    return vehicle.setWheelXOffset(vehicle1, wheelIndex, offset);
}
/**
 * No comment provided
 *
 * Hash: 0xC6C2171F
 * @deprecated Use vehicle.setWheelYRotation(vehicle1, wheelIndex, value) instead
 */
export function setVehicleWheelYRotation(vehicle1, wheelIndex, value) {
    return vehicle.setWheelYRotation(vehicle1, wheelIndex, value);
}
/**
 * Sets custom vehicle xenon lights color, allowing to use RGB palette. The game will ignore lights color set by [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07) when custom color is active. This native is not synced between players. Requires xenon lights mod to be set on vehicle.
 *
 * Hash: 0x1683E7F0
 * @deprecated Use vehicle.setXenonLightsCustomColor(vehicle1, red, green, blue) instead
 */
export function setVehicleXenonLightsCustomColor(vehicle1, red, green, blue) {
    return vehicle.setXenonLightsCustomColor(vehicle1, red, green, blue);
}
/**
 * No comment provided
 *
 * Hash: 0x80CC4C9E
 * @deprecated Use vehicle.setXmasSnowFactor(gripFactor) instead
 */
export function setVehicleXmasSnowFactor(gripFactor) {
    return vehicle.setXmasSnowFactor(gripFactor);
}
/**
 * No comment provided
 *
 * Hash: 0x77CC80DC
 * @deprecated Use vehicle.doesTrainStopAtStations(train) instead
 */
export function doesTrainStopAtStations(train) {
    return vehicle.doesTrainStopAtStations(train);
}
/**
 * Gets the trains desired speed.
 *
 * Hash: 0xA4921EF5
 * @deprecated Use vehicle.getTrainCruiseSpeed(train) instead
 */
export function getTrainCruiseSpeed(train) {
    return vehicle.getTrainCruiseSpeed(train);
}
/**
 * Gets the direction the train is facing
 *
 * Hash: 0x8DAF79B6
 * @deprecated Use vehicle.getTrainDirection(train) instead
 */
export function getTrainDirection(train) {
    return vehicle.getTrainDirection(train);
}
/**
 * No comment provided
 *
 * Hash: 0x81B50033
 * @deprecated Use vehicle.getTrainState(train) instead
 */
export function getTrainState(train) {
    return vehicle.getTrainState(train);
}
/**
 * No comment provided
 *
 * Hash: 0x9AA339D
 * @deprecated Use vehicle.getTrainTrackIndex(train) instead
 */
export function getTrainTrackIndex(train) {
    return vehicle.getTrainTrackIndex(train);
}
/**
 * No comment provided
 *
 * Hash: 0x483B013C
 * @deprecated Use vehicle.getHandbrake(vehicle1) instead
 */
export function getVehicleHandbrake(vehicle1) {
    return vehicle.getHandbrake(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0x1382FCEA
 * @deprecated Use vehicle.getSteeringAngle(vehicle1) instead
 */
export function getVehicleSteeringAngle(vehicle1) {
    return vehicle.getSteeringAngle(vehicle1);
}
/**
 * No comment provided
 *
 * Hash: 0xBB340D04
 * @deprecated Use vehicle.isEngineStarting(vehicle1) instead
 */
export function isVehicleEngineStarting(vehicle1) {
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
export function getVehicleHasFlag(vehicle1, flagIndex) {
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
export function getVehicleTypeRaw(vehicle1) {
    return vehicle.getTypeRaw(vehicle1);
}
/**
 * Getter for [BREAK_OFF_VEHICLE_WHEEL](?\_0xA274CADB).
 *
 * Hash: 0xCF1BC668
 * @deprecated Use vehicle.isWheelBrokenOff(vehicle1, wheelIndex) instead
 */
export function isVehicleWheelBrokenOff(vehicle1, wheelIndex) {
    return vehicle.isWheelBrokenOff(vehicle1, wheelIndex);
}
/**
 * No comment provided
 *
 * Hash: 0x8923DD42
 * @deprecated Use vehicle.setCurrentGear(vehicle1, gear) instead
 */
export function setVehicleCurrentGear(vehicle1, gear) {
    return vehicle.setCurrentGear(vehicle1, gear);
}
/**
 * This native is a setter for [`GET_VEHICLE_HAS_FLAG`](#\_0xD85C9F57).
 *
 * Hash: 0x63AE1A34
 * @deprecated Use vehicle.setFlag(vehicle1, flagIndex, value) instead
 */
export function setVehicleFlag(vehicle1, flagIndex, value) {
    return vehicle.setFlag(vehicle1, flagIndex, value);
}
/**
 * No comment provided
 *
 * Hash: 0x3A4566F4
 * @deprecated Use vehicle.setNextGear(vehicle1, nextGear) instead
 */
export function setVehicleNextGear(vehicle1, nextGear) {
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
export function getVehicleType(vehicle1) {
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
export function createDryVolume(xMin, yMin, zMin, xMax, yMax, zMax) {
    return water.createDryVolume(xMin, yMin, zMin, xMax, yMax, zMax);
}
/**
 * No comment provided
 *
 * Hash: 0x14088095
 * @deprecated Use water.getQuadAlpha(waterQuad) instead
 */
export function getWaterQuadAlpha(waterQuad) {
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
export function getWaterQuadAtCoords(x, y) {
    return water.getQuadAtCoords(x, y);
}
/**
 * This alternative implementation of [`GetWaterQuadAtCoords`](#\_0x17321452) also checks the height of the water level.
 *
 * Hash: 0xF8E03DB8
 * @deprecated Use water.getQuadAtCoords3d(pos) instead
 */
export function getWaterQuadAtCoords3d(pos) {
    return water.getQuadAtCoords3d(pos);
}
/**
 * No comment provided
 *
 * Hash: 0x42E9A06A
 * @deprecated Use water.getQuadBounds(waterQuad) instead
 */
export function getWaterQuadBounds(waterQuad) {
    return water.getQuadBounds(waterQuad);
}
/**
 * No comment provided
 *
 * Hash: 0xB1884159
 * @deprecated Use water.getQuadCount() instead
 */
export function getWaterQuadCount() {
    return water.getQuadCount();
}
/**
 * No comment provided
 *
 * Hash: 0x22EA3BD8
 * @deprecated Use water.getQuadHasLimitedDepth(waterQuad) instead
 */
export function getWaterQuadHasLimitedDepth(waterQuad) {
    return water.getQuadHasLimitedDepth(waterQuad);
}
/**
 * No comment provided
 *
 * Hash: 0x1DEDBD77
 * @deprecated Use water.getQuadIsInvisible(waterQuad) instead
 */
export function getWaterQuadIsInvisible(waterQuad) {
    return water.getQuadIsInvisible(waterQuad);
}
/**
 * *level is defined as "z" in water.xml*
 *
 * Hash: 0x6523816B
 * @deprecated Use water.getQuadLevel(waterQuad) instead
 */
export function getWaterQuadLevel(waterQuad) {
    return water.getQuadLevel(waterQuad);
}
/**
 * No comment provided
 *
 * Hash: 0x6F4ACBA
 * @deprecated Use water.getQuadNoStencil(waterQuad) instead
 */
export function getWaterQuadNoStencil(waterQuad) {
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
export function getWaterQuadType(waterQuad) {
    return water.getQuadType(waterQuad);
}
/**
 * No comment provided
 *
 * Hash: 0x865139A3
 * @deprecated Use water.getWaveQuadAmplitude(waveQuad) instead
 */
export function getWaveQuadAmplitude(waveQuad) {
    return water.getWaveQuadAmplitude(waveQuad);
}
/**
 * This native returns the index of a wave quad if the given point is inside its bounds.
 *
 * Hash: 0x3F5A61A7
 * @deprecated Use water.getWaveQuadAtCoords(x, y) instead
 */
export function getWaveQuadAtCoords(x, y) {
    return water.getWaveQuadAtCoords(x, y);
}
/**
 * No comment provided
 *
 * Hash: 0xF86136DB
 * @deprecated Use water.getWaveQuadBounds(waveQuad) instead
 */
export function getWaveQuadBounds(waveQuad) {
    return water.getWaveQuadBounds(waveQuad);
}
/**
 * No comment provided
 *
 * Hash: 0x9250C76
 * @deprecated Use water.getWaveQuadCount() instead
 */
export function getWaveQuadCount() {
    return water.getWaveQuadCount();
}
/**
 * No comment provided
 *
 * Hash: 0xCCE49A1C
 * @deprecated Use water.getWaveQuadDirection(waveQuad) instead
 */
export function getWaveQuadDirection(waveQuad) {
    return water.getWaveQuadDirection(waveQuad);
}
/**
 * Define the xml in a resources fxmanifest, under the file(s) section.
 *
 * Hash: 0xF5102568
 * @deprecated Use water.loadFromPath(resourceName, fileName) instead
 */
export function loadWaterFromPath(resourceName, fileName) {
    return water.loadFromPath(resourceName, fileName);
}
/**
 * Removes a dry volume from the game session.
 * See CREATE_DRY_VOLUME for more info
 *
 * Hash: 0x7BCAA6E7
 * @deprecated Use water.removeDryVolume(handle) instead
 */
export function removeDryVolume(handle) {
    return water.removeDryVolume(handle);
}
/**
 * Resets the water to the games default water.xml.
 *
 * Hash: 0x1DA4791
 * @deprecated Use water.reset() instead
 */
export function resetWater() {
    return water.reset();
}
/**
 * Sets world clip boundaries for water quads file (water.xml, water_heistisland.xml)
 * Used internally by LOAD_GLOBAL_WATER_FILE
 *
 * Hash: 0x9FCD2EE6
 * @deprecated Use water.setAreaClipRect(minX, minY, maxX, maxY) instead
 */
export function setWaterAreaClipRect(minX, minY, maxX, maxY) {
    return water.setAreaClipRect(minX, minY, maxX, maxY);
}
/**
 * No comment provided
 *
 * Hash: 0xF49797EB
 * @deprecated Use water.setQuadAlpha(waterQuad, a0, a1, a2, a3) instead
 */
export function setWaterQuadAlpha(waterQuad, a0, a1, a2, a3) {
    return water.setQuadAlpha(waterQuad, a0, a1, a2, a3);
}
/**
 * This native allows you to update the bounds of a specified water quad index.
 *
 * Hash: 0x80AD144C
 * @deprecated Use water.setQuadBounds(waterQuad, minX, minY, maxX, maxY) instead
 */
export function setWaterQuadBounds(waterQuad, minX, minY, maxX, maxY) {
    return water.setQuadBounds(waterQuad, minX, minY, maxX, maxY);
}
/**
 * No comment provided
 *
 * Hash: 0xD1FDCFC1
 * @deprecated Use water.setQuadHasLimitedDepth(waterQuad, hasLimitedDepth) instead
 */
export function setWaterQuadHasLimitedDepth(waterQuad, hasLimitedDepth) {
    return water.setQuadHasLimitedDepth(waterQuad, hasLimitedDepth);
}
/**
 * No comment provided
 *
 * Hash: 0xA387D917
 * @deprecated Use water.setQuadIsInvisible(waterQuad, isInvisible) instead
 */
export function setWaterQuadIsInvisible(waterQuad, isInvisible) {
    return water.setQuadIsInvisible(waterQuad, isInvisible);
}
/**
 * No comment provided
 *
 * Hash: 0x6292F7A8
 * @deprecated Use water.setQuadLevel(waterQuad, level) instead
 */
export function setWaterQuadLevel(waterQuad, level) {
    return water.setQuadLevel(waterQuad, level);
}
/**
 * No comment provided
 *
 * Hash: 0xC3FF42FF
 * @deprecated Use water.setQuadNoStencil(waterQuad, noStencil) instead
 */
export function setWaterQuadNoStencil(waterQuad, noStencil) {
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
export function setWaterQuadType(waterQuad, _type) {
    return water.setQuadType(waterQuad, _type);
}
/**
 * No comment provided
 *
 * Hash: 0xE4174B7B
 * @deprecated Use water.setWaveQuadAmplitude(waveQuad, amplitude) instead
 */
export function setWaveQuadAmplitude(waveQuad, amplitude) {
    return water.setWaveQuadAmplitude(waveQuad, amplitude);
}
/**
 * This native allows you to update the bounds of a specified water quad index.
 *
 * Hash: 0x1FCC1FAF
 * @deprecated Use water.setWaveQuadBounds(waveQuad, minX, minY, maxX, maxY) instead
 */
export function setWaveQuadBounds(waveQuad, minX, minY, maxX, maxY) {
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
export function setWaveQuadDirection(waveQuad, directionX, directionY) {
    return water.setWaveQuadDirection(waveQuad, directionX, directionY);
}
/**
 * A getter for the accuracy spread of a weapon.
 *
 * Hash: 0x5343721
 * @deprecated Use weapon.getAccuracySpread(weaponHash) instead
 */
export function getWeaponAccuracySpread(weaponHash) {
    return weapon.getAccuracySpread(weaponHash);
}
/**
 * A getter for [SET_WEAPON_ANIMATION_OVERRIDE](#\_0x1055AC3A667F09D9).
 *
 * Hash: 0x63ED2E7
 * @deprecated Use weapon.getAnimationOverride(ped) instead
 */
export function getWeaponAnimationOverride(ped) {
    return weapon.getAnimationOverride(ped);
}
/**
 * A getter for `CWeaponAccuracyModifier` in a weapon component.
 *
 * Hash: 0xC693E278
 * @deprecated Use weapon.getComponentAccuracyModifier(componentHash) instead
 */
export function getWeaponComponentAccuracyModifier(componentHash) {
    return weapon.getComponentAccuracyModifier(componentHash);
}
/**
 * A getter for `CameraHash` in a weapon scope component.
 *
 * Hash: 0xACB7E68F
 * @deprecated Use weapon.getComponentCameraHash(componentHash) instead
 */
export function getWeaponComponentCameraHash(componentHash) {
    return weapon.getComponentCameraHash(componentHash);
}
/**
 * A getter for `ClipSize` in a weapon component.
 *
 * Hash: 0xE14CF665
 * @deprecated Use weapon.getComponentClipSize(componentHash) instead
 */
export function getWeaponComponentClipSize(componentHash) {
    return weapon.getComponentClipSize(componentHash);
}
/**
 * A getter for `CWeaponDamageModifier` in a weapon component.
 *
 * Hash: 0x4A0E3855
 * @deprecated Use weapon.getComponentDamageModifier(componentHash) instead
 */
export function getWeaponComponentDamageModifier(componentHash) {
    return weapon.getComponentDamageModifier(componentHash);
}
/**
 * A getter for `CWeaponFallOffModifier` damage modifier value in a weapon component.
 *
 * Hash: 0xE134FB8D
 * @deprecated Use weapon.getComponentRangeDamageModifier(componentHash) instead
 */
export function getWeaponComponentRangeDamageModifier(componentHash) {
    return weapon.getComponentRangeDamageModifier(componentHash);
}
/**
 * A getter for `CWeaponFallOffModifier` range modifier value in a weapon component.
 *
 * Hash: 0x2FD0BC1B
 * @deprecated Use weapon.getComponentRangeModifier(componentHash) instead
 */
export function getWeaponComponentRangeModifier(componentHash) {
    return weapon.getComponentRangeModifier(componentHash);
}
/**
 * A getter for `ReticuleHash` in a weapon scope component.
 *
 * Hash: 0xF9AB9297
 * @deprecated Use weapon.getComponentReticuleHash(componentHash) instead
 */
export function getWeaponComponentReticuleHash(componentHash) {
    return weapon.getComponentReticuleHash(componentHash);
}
/**
 * A getter for [\_SET_WEAPON_DAMAGE_MODIFIER](#\_0x4757F00BC6323CFE).
 *
 * Hash: 0xD979143
 * @deprecated Use weapon.getDamageModifier(weaponHash) instead
 */
export function getWeaponDamageModifier(weaponHash) {
    return weapon.getDamageModifier(weaponHash);
}
/**
 * A getter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x5E1AF5F
 * @deprecated Use weapon.getRecoilShakeAmplitude(weaponHash) instead
 */
export function getWeaponRecoilShakeAmplitude(weaponHash) {
    return weapon.getRecoilShakeAmplitude(weaponHash);
}
/**
 * Disables weapons aim blocking due to environment for local player.
 * For non-player peds [SET_PED_ENABLE_WEAPON_BLOCKING](#\_0x97A790315D3831FD) can be used.
 *
 * Hash: 0xDFD8F6DE
 * @deprecated Use weapon.setsNoAimBlocking(state) instead
 */
export function setWeaponsNoAimBlocking(state) {
    return weapon.setsNoAimBlocking(state);
}
/**
 * Disables the game's built-in auto-reloading.
 *
 * Hash: 0x311150E5
 * @deprecated Use weapon.setsNoAutoreload(state) instead
 */
export function setWeaponsNoAutoreload(state) {
    return weapon.setsNoAutoreload(state);
}
/**
 * Disables autoswapping to another weapon when the current weapon runs out of ammo.
 *
 * Hash: 0x2A7B50E
 * @deprecated Use weapon.setsNoAutoswap(state) instead
 */
export function setWeaponsNoAutoswap(state) {
    return weapon.setsNoAutoswap(state);
}
/**
 * A setter for the accuracy spread of a weapon.
 *
 * Hash: 0x598DD6AE
 * @deprecated Use weapon.setAccuracySpread(weaponHash, spread) instead
 */
export function setWeaponAccuracySpread(weaponHash, spread) {
    return weapon.setAccuracySpread(weaponHash, spread);
}
/**
 * A setter for the recoil shake amplitude of a weapon.
 *
 * Hash: 0x9864312F
 * @deprecated Use weapon.setRecoilShakeAmplitude(weaponHash, amplitude) instead
 */
export function setWeaponRecoilShakeAmplitude(weaponHash, amplitude) {
    return weapon.setRecoilShakeAmplitude(weaponHash, amplitude);
}
/**
 * No comment provided
 *
 * Hash: 0x2CAFD5E9
 * @deprecated Use network.getWalkMode() instead
 */
export function getNetworkWalkMode() {
    return network.getWalkMode();
}
/**
 * No comment provided
 *
 * Hash: 0x55188D2D
 * @deprecated Use network.setWalkMode(enabled) instead
 */
export function setNetworkWalkMode(enabled) {
    return network.setWalkMode(enabled);
}
/**
 * No comment provided
 *
 * Hash: 0x1E2E3177
 * @deprecated Use network.doesEntityExistWithNetworkId(netId) instead
 */
export function networkDoesEntityExistWithNetworkId(netId) {
    return network.doesEntityExistWithNetworkId(netId);
}
/**
 * Returns the owner ID of the specified entity.
 *
 * Hash: 0x526FEE31
 * @deprecated Use network.getEntityOwner(entity) instead
 */
export function networkGetEntityOwner(entity) {
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
export function getShapeTestResultIncludingMaterial(shapeTestHandle) {
    return shapetest.getResultIncludingMaterial(shapeTestHandle);
}
/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 *
 * Hash: 0x8F57A89D
 * @deprecated Use camera.getCamMatrix(camera1, rightVector, forwardVector, upVector, position) instead
 */
export function getCamMatrix(camera1, rightVector, forwardVector, upVector, position) {
    return camera.getCamMatrix(camera1, rightVector, forwardVector, upVector, position);
}
/**
 * This native sets the app id for the discord rich presence implementation.
 *
 * Hash: 0x6A02254D
 * @deprecated Use discord.setAppId(appId) instead
 */
export function setDiscordAppId(appId) {
    return discord.setAppId(appId);
}
/**
 * Sets a clickable button to be displayed in a player's Discord rich presence.
 *
 * Hash: 0xCBBC3FAC
 * @deprecated Use discord.setRichPresenceAction(index, label, url) instead
 */
export function setDiscordRichPresenceAction(index, label, url) {
    return discord.setRichPresenceAction(index, label, url);
}
/**
 * This native sets the image asset for the discord rich presence implementation.
 *
 * Hash: 0x53DFD530
 * @deprecated Use discord.setRichPresenceAsset(assetName) instead
 */
export function setDiscordRichPresenceAsset(assetName) {
    return discord.setRichPresenceAsset(assetName);
}
/**
 * This native sets the small image asset for the discord rich presence implementation.
 *
 * Hash: 0xF61D04C4
 * @deprecated Use discord.setRichPresenceAssetSmall(assetName) instead
 */
export function setDiscordRichPresenceAssetSmall(assetName) {
    return discord.setRichPresenceAssetSmall(assetName);
}
/**
 * This native sets the hover text of the small image asset for the discord rich presence implementation.
 *
 * Hash: 0x35E62B6A
 * @deprecated Use discord.setRichPresenceAssetSmallText(text) instead
 */
export function setDiscordRichPresenceAssetSmallText(text) {
    return discord.setRichPresenceAssetSmallText(text);
}
/**
 * This native sets the hover text of the image asset for the discord rich presence implementation.
 *
 * Hash: 0xB029D2FA
 * @deprecated Use discord.setRichPresenceAssetText(text) instead
 */
export function setDiscordRichPresenceAssetText(text) {
    return discord.setRichPresenceAssetText(text);
}
/**
 * Creates a DUI browser. This can be used to draw on a runtime texture using CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
 *
 * Hash: 0x23EAF899
 * @deprecated Use dui.create(url, width, height) instead
 */
export function createDui(url, width, height) {
    return dui.create(url, width, height);
}
/**
 * Destroys a DUI browser.
 *
 * Hash: 0xA085CB10
 * @deprecated Use dui.destroy(duiObject) instead
 */
export function destroyDui(duiObject) {
    return dui.destroy(duiObject);
}
/**
 * Returns the NUI window handle for a specified DUI browser object.
 *
 * Hash: 0x1655D41D
 * @deprecated Use dui.getHandle(duiObject) instead
 */
export function getDuiHandle(duiObject) {
    return dui.getHandle(duiObject);
}
/**
 * Returns whether or not a browser is created for a specified DUI browser object.
 *
 * Hash: 0x7AAC3B4C
 * @deprecated Use dui.isAvailable(duiObject) instead
 */
export function isDuiAvailable(duiObject) {
    return dui.isAvailable(duiObject);
}
/**
 * Sends a message to the specific DUI root page. This is similar to SEND_NUI_MESSAGE.
 *
 * Hash: 0xCD380DA9
 * @deprecated Use dui.sendMessage(duiObject, jsonString) instead
 */
export function sendDuiMessage(duiObject, jsonString) {
    return dui.sendMessage(duiObject, jsonString);
}
/**
 * Injects a 'mouse down' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 *
 * Hash: 0x5D01F191
 * @deprecated Use dui.sendMouseDown(duiObject, button) instead
 */
export function sendDuiMouseDown(duiObject, button) {
    return dui.sendMouseDown(duiObject, button);
}
/**
 * Injects a 'mouse move' event for a DUI object. Coordinates are in browser space.
 *
 * Hash: 0xD9D7A0AA
 * @deprecated Use dui.sendMouseMove(duiObject, x, y) instead
 */
export function sendDuiMouseMove(duiObject, x, y) {
    return dui.sendMouseMove(duiObject, x, y);
}
/**
 * Injects a 'mouse up' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 *
 * Hash: 0x1D735B93
 * @deprecated Use dui.sendMouseUp(duiObject, button) instead
 */
export function sendDuiMouseUp(duiObject, button) {
    return dui.sendMouseUp(duiObject, button);
}
/**
 * Injects a 'mouse wheel' event for a DUI object.
 *
 * Hash: 0x2D62133A
 * @deprecated Use dui.sendMouseWheel(duiObject, deltaY, deltaX) instead
 */
export function sendDuiMouseWheel(duiObject, deltaY, deltaX) {
    return dui.sendMouseWheel(duiObject, deltaY, deltaX);
}
/**
 * Navigates the specified DUI browser to a different URL.
 *
 * Hash: 0xF761D9F3
 * @deprecated Use dui.setUrl(duiObject, url) instead
 */
export function setDuiUrl(duiObject, url) {
    return dui.setUrl(duiObject, url);
}
/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938), but for a specified resource.
 *
 * Hash: 0x3CC98B25
 * @deprecated Use kvp.getExternalFloat(resource, key) instead
 */
export function getExternalKvpFloat(resource, key) {
    return kvp.getExternalFloat(resource, key);
}
/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8), but for a specified resource.
 *
 * Hash: 0x12B8D689
 * @deprecated Use kvp.getExternalInt(resource, key) instead
 */
export function getExternalKvpInt(resource, key) {
    return kvp.getExternalInt(resource, key);
}
/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B), but for a specified resource.
 *
 * Hash: 0x9080363A
 * @deprecated Use kvp.getExternalString(resource, key) instead
 */
export function getExternalKvpString(resource, key) {
    return kvp.getExternalString(resource, key);
}
/**
 * Equivalent of [START_FIND_KVP](#\_0xDD379006), but for another resource than the current one.
 *
 * Hash: 0x8F2EECC3
 * @deprecated Use kvp.startFindExternal(resourceName, prefix) instead
 */
export function startFindExternalKvp(resourceName, prefix) {
    return kvp.startFindExternal(resourceName, prefix);
}
/**
 * No comment provided
 *
 * Hash: 0xB3210203
 * @deprecated Use kvp.endFind(handle) instead
 */
export function endFindKvp(handle) {
    return kvp.endFind(handle);
}
/**
 * No comment provided
 *
 * Hash: 0xBD7BEBC5
 * @deprecated Use kvp.find(handle) instead
 */
export function findKvp(handle) {
    return kvp.find(handle);
}
/**
 * No comment provided
 *
 * Hash: 0xDD379006
 * @deprecated Use kvp.startFind(prefix) instead
 */
export function startFindKvp(prefix) {
    return kvp.startFind(prefix);
}
/**
 * Starts listening to the specified channel, when available.
 *
 * Hash: 0xC79F44BF
 * @deprecated Use mumble.addVoiceChannelListen(channel) instead
 */
export function mumbleAddVoiceChannelListen(channel) {
    return mumble.addVoiceChannelListen(channel);
}
/**
 * Adds the specified channel to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x4D386C9E
 * @deprecated Use mumble.addVoiceTargetChannel(targetId, channel) instead
 */
export function mumbleAddVoiceTargetChannel(targetId, channel) {
    return mumble.addVoiceTargetChannel(targetId, channel);
}
/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x32C5355A
 * @deprecated Use mumble.addVoiceTargetPlayer(targetId, player) instead
 */
export function mumbleAddVoiceTargetPlayer(targetId, player) {
    return mumble.addVoiceTargetPlayer(targetId, player);
}
/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x25F2B65F
 * @deprecated Use mumble.addVoiceTargetPlayerByServerId(targetId, serverId) instead
 */
export function mumbleAddVoiceTargetPlayerByServerId(targetId, serverId) {
    return mumble.addVoiceTargetPlayerByServerId(targetId, serverId);
}
/**
 * No comment provided
 *
 * Hash: 0xBF847807
 * @deprecated Use mumble.clearVoiceChannel() instead
 */
export function mumbleClearVoiceChannel() {
    return mumble.clearVoiceChannel();
}
/**
 * Clears the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x8555DCBA
 * @deprecated Use mumble.clearVoiceTarget(targetId) instead
 */
export function mumbleClearVoiceTarget(targetId) {
    return mumble.clearVoiceTarget(targetId);
}
/**
 * Clears channels from the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x5EA72E76
 * @deprecated Use mumble.clearVoiceTargetChannels(targetId) instead
 */
export function mumbleClearVoiceTargetChannels(targetId) {
    return mumble.clearVoiceTargetChannels(targetId);
}
/**
 * Clears players from the target list for the specified Mumble voice target ID.
 *
 * Hash: 0x912E21DA
 * @deprecated Use mumble.clearVoiceTargetPlayers(targetId) instead
 */
export function mumbleClearVoiceTargetPlayers(targetId) {
    return mumble.clearVoiceTargetPlayers(targetId);
}
/**
 * Check whether specified channel exists on the Mumble server.
 *
 * Hash: 0xCC8CA25
 * @deprecated Use mumble.doesChannelExist(channel) instead
 */
export function mumbleDoesChannelExist(channel) {
    return mumble.doesChannelExist(channel);
}
/**
 * No comment provided
 *
 * Hash: 0x84E02A32
 * @deprecated Use mumble.getTalkerProximity() instead
 */
export function mumbleGetTalkerProximity() {
    return mumble.getTalkerProximity();
}
/**
 * Returns the mumble voice channel from a player's server id.
 *
 * Hash: 0x221C09F1
 * @deprecated Use mumble.getVoiceChannelFromServerId(serverId) instead
 */
export function mumbleGetVoiceChannelFromServerId(serverId) {
    return mumble.getVoiceChannelFromServerId(serverId);
}
/**
 * No comment provided
 *
 * Hash: 0xE820BC10
 * @deprecated Use mumble.isActive() instead
 */
export function mumbleIsActive() {
    return mumble.isActive();
}
/**
 * This native will return true if the user succesfully connected to the voice server.
 * If the user disabled the voice-chat setting it will return false.
 *
 * Hash: 0xB816370A
 * @deprecated Use mumble.isConnected() instead
 */
export function mumbleIsConnected() {
    return mumble.isConnected();
}
/**
 * No comment provided
 *
 * Hash: 0x33EEF97F
 * @deprecated Use mumble.isPlayerTalking(player) instead
 */
export function mumbleIsPlayerTalking(player) {
    return mumble.isPlayerTalking(player);
}
/**
 * Stops listening to the specified channel.
 *
 * Hash: 0x231523B7
 * @deprecated Use mumble.removeVoiceChannelListen(channel) instead
 */
export function mumbleRemoveVoiceChannelListen(channel) {
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
export function mumbleRemoveVoiceTargetChannel(targetId, channel) {
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
export function mumbleRemoveVoiceTargetPlayer(targetId, player) {
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
export function mumbleRemoveVoiceTargetPlayerByServerId(targetId, serverId) {
    return mumble.removeVoiceTargetPlayerByServerId(targetId, serverId);
}
/**
 * No comment provided
 *
 * Hash: 0xD932A3F3
 * @deprecated Use mumble.setActive(state) instead
 */
export function mumbleSetActive(state) {
    return mumble.setActive(state);
}
/**
 * Sets the current input distance. The player will be able to talk to other players within this distance.
 *
 * Hash: 0x1B1052E2
 * @deprecated Use mumble.setAudioInputDistance(distance) instead
 */
export function mumbleSetAudioInputDistance(distance) {
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
export function mumbleSetAudioInputIntent(intentHash) {
    return mumble.setAudioInputIntent(intentHash);
}
/**
 * Sets the current output distance. The player will be able to hear other players talking within this distance.
 *
 * Hash: 0x74C597D9
 * @deprecated Use mumble.setAudioOutputDistance(distance) instead
 */
export function mumbleSetAudioOutputDistance(distance) {
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
export function mumbleSetServerAddress(address, port) {
    return mumble.setServerAddress(address, port);
}
/**
 * Sets the audio submix ID for a specified player using Mumble 'Native Audio' functionality.
 *
 * Hash: 0xFE3A3054
 * @deprecated Use mumble.setSubmixForServerId(serverId, submixId) instead
 */
export function mumbleSetSubmixForServerId(serverId, submixId) {
    return mumble.setSubmixForServerId(serverId, submixId);
}
/**
 * No comment provided
 *
 * Hash: 0x74E927B0
 * @deprecated Use mumble.setTalkerProximity(value) instead
 */
export function mumbleSetTalkerProximity(value) {
    return mumble.setTalkerProximity(value);
}
/**
 * No comment provided
 *
 * Hash: 0x8737EEE8
 * @deprecated Use mumble.setVoiceChannel(channel) instead
 */
export function mumbleSetVoiceChannel(channel) {
    return mumble.setVoiceChannel(channel);
}
/**
 * Sets the current Mumble voice target ID to broadcast voice to.
 *
 * Hash: 0x960A4A95
 * @deprecated Use mumble.setVoiceTarget(targetId) instead
 */
export function mumbleSetVoiceTarget(targetId) {
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
export function mumbleSetVolumeOverride(player, volume) {
    return mumble.setVolumeOverride(player, volume);
}
/**
 * Overrides the output volume for a particular player with the specified server id and player name on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 *
 * Hash: 0xCE8E25B4
 * @deprecated Use mumble.setVolumeOverrideByServerId(serverId, volume) instead
 */
export function mumbleSetVolumeOverrideByServerId(serverId, volume) {
    return mumble.setVolumeOverrideByServerId(serverId, volume);
}
/**
 * No comment provided
 *
 * Hash: 0xBDBA226F
 * @deprecated Use nui.getCursorPosition() instead
 */
export function getNuiCursorPosition() {
    return nui.getCursorPosition();
}
/**
 * Returns the current NUI focus state previously set with `SET_NUI_FOCUS`.
 *
 * Hash: 0x98545E6D
 * @deprecated Use nui.isFocused() instead
 */
export function isNuiFocused() {
    return nui.isFocused();
}
/**
 * Checks if keyboard input is enabled during NUI focus using `SET_NUI_FOCUS_KEEP_INPUT`.
 *
 * Hash: 0x39C9DC92
 * @deprecated Use nui.isFocusKeepingInput() instead
 */
export function isNuiFocusKeepingInput() {
    return nui.isFocusKeepingInput();
}
/**
 * No comment provided
 *
 * Hash: 0xC59B980C
 * @deprecated Use nui.registerCallback(callbackType, callback) instead
 */
export function registerNuiCallback(callbackType, callback) {
    return nui.registerCallback(callbackType, callback);
}
/**
 * No comment provided
 *
 * Hash: 0xCD03CDA9
 * @deprecated Use nui.registerCallbackType(callbackType) instead
 */
export function registerNuiCallbackType(callbackType) {
    return nui.registerCallbackType(callbackType);
}
/**
 * No comment provided
 *
 * Hash: 0xA8AE9C2F
 * @deprecated Use nui.registerRawCallback(callbackType, callback) instead
 */
export function registerRawNuiCallback(callbackType, callback) {
    return nui.registerRawCallback(callbackType, callback);
}
/**
 * No comment provided
 *
 * Hash: 0x78608ACB
 * @deprecated Use nui.sendMessage(jsonString) instead
 */
export function sendNuiMessage(jsonString) {
    return nui.sendMessage(jsonString);
}
/**
 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
 * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 *
 * Hash: 0x1722C938
 * @deprecated Use nui.setManualShutdownLoadingScreen(manualShutdown) instead
 */
export function setManualShutdownLoadingScreenNui(manualShutdown) {
    return nui.setManualShutdownLoadingScreen(manualShutdown);
}
/**
 * No comment provided
 *
 * Hash: 0x5B98AE30
 * @deprecated Use nui.setFocus(hasFocus, hasCursor) instead
 */
export function setNuiFocus(hasFocus, hasCursor) {
    return nui.setFocus(hasFocus, hasCursor);
}
/**
 * No comment provided
 *
 * Hash: 0x3FF5E5F8
 * @deprecated Use nui.setFocusKeepInput(keepInput) instead
 */
export function setNuiFocusKeepInput(keepInput) {
    return nui.setFocusKeepInput(keepInput);
}
/**
 * Set the z-index of the NUI resource.
 *
 * Hash: 0x3734AAFF
 * @deprecated Use nui.setZindex(zIndex) instead
 */
export function setNuiZindex(zIndex) {
    return nui.setZindex(zIndex);
}
/**
 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 *
 * Hash: 0xB9234AFB
 * @deprecated Use nui.shutdownLoadingScreen() instead
 */
export function shutdownLoadingScreenNui() {
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
export function unregisterRawNuiCallback(callbackType) {
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
export function doorSystemGetActive() {
    return object.doorSystemGetActive();
}
/**
 * No comment provided
 *
 * Hash: 0x237613B3
 * @deprecated Use object.doorSystemGetSize() instead
 */
export function doorSystemGetSize() {
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
export function disableRawKeyThisFrame(rawKeyIndex) {
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
export function isDisabledRawKeyDown(rawKeyIndex) {
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
export function isDisabledRawKeyPressed(rawKeyIndex) {
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
export function isDisabledRawKeyReleased(rawKeyIndex) {
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
export function isDisabledRawKeyUp(rawKeyIndex) {
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
export function isRawKeyDown(rawKeyIndex) {
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
export function isRawKeyPressed(rawKeyIndex) {
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
export function isRawKeyReleased(rawKeyIndex) {
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
export function isRawKeyUp(rawKeyIndex) {
    return pad.isRawKeyUp(rawKeyIndex);
}
/**
 * Sets the player's rich presence detail state for social platform providers to a specified string.
 *
 * Hash: 0x7BDCBD45
 * @deprecated Use social.setRichPresence(presenceState) instead
 */
export function setRichPresence(presenceState) {
    return social.setRichPresence(presenceState);
}
/**
 * No comment provided
 *
 * Hash: 0x7389B5DF
 * @deprecated Use resource.deleteKvp(key) instead
 */
export function deleteResourceKvp(key) {
    return resource.deleteKvp(key);
}
/**
 * Nonsynchronous [DELETE_RESOURCE_KVP](#\_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x4152C90
 * @deprecated Use resource.deleteKvpNoSync(key) instead
 */
export function deleteResourceKvpNoSync(key) {
    return resource.deleteKvpNoSync(key);
}
/**
 * Returns the name of the currently executing resource.
 *
 * Hash: 0xE5E9EBBB
 * @deprecated Use resource.getCurrentName() instead
 */
export function getCurrentResourceName() {
    return resource.getCurrentName();
}
/**
 * No comment provided
 *
 * Hash: 0x4D52FE5B
 * @deprecated Use resource.getInvoking() instead
 */
export function getInvokingResource() {
    return resource.getInvoking();
}
/**
 * No comment provided
 *
 * Hash: 0x863F27B
 * @deprecated Use resource.getNums() instead
 */
export function getNumResources() {
    return resource.getNums();
}
/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 *
 * Hash: 0x776E864
 * @deprecated Use resource.getNumMetadata(resourceName, metadataKey) instead
 */
export function getNumResourceMetadata(resourceName, metadataKey) {
    return resource.getNumMetadata(resourceName, metadataKey);
}
/**
 * No comment provided
 *
 * Hash: 0x387246B7
 * @deprecated Use resource.getByFindIndex(findIndex) instead
 */
export function getResourceByFindIndex(findIndex) {
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
export function getResourceCommands(resource1) {
    return resource.getCommands(resource1);
}
/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
 *
 * Hash: 0x35BDCEEA
 * @deprecated Use resource.getKvpFloat(key) instead
 */
export function getResourceKvpFloat(key) {
    return resource.getKvpFloat(key);
}
/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
 *
 * Hash: 0x557B586A
 * @deprecated Use resource.getKvpInt(key) instead
 */
export function getResourceKvpInt(key) {
    return resource.getKvpInt(key);
}
/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
 *
 * Hash: 0x5240DA5A
 * @deprecated Use resource.getKvpString(key) instead
 */
export function getResourceKvpString(key) {
    return resource.getKvpString(key);
}
/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 *
 * Hash: 0x964BAB1D
 * @deprecated Use resource.getMetadata(resourceName, metadataKey, index) instead
 */
export function getResourceMetadata(resourceName, metadataKey, index) {
    return resource.getMetadata(resourceName, metadataKey, index);
}
/**
 * Returns the current state of the specified resource.
 *
 * Hash: 0x4039B485
 * @deprecated Use resource.getState(resourceName) instead
 */
export function getResourceState(resourceName) {
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
export function loadResourceFile(resourceName, fileName) {
    return resource.loadFile(resourceName, fileName);
}
/**
 * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
 *
 * Hash: 0xD233A168
 * @deprecated Use resource.registerAsEventHandler(eventName) instead
 */
export function registerResourceAsEventHandler(eventName) {
    return resource.registerAsEventHandler(eventName);
}
/**
 * A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).
 *
 * Hash: 0x21C7A35B
 * @deprecated Use resource.setKvp(key, value) instead
 */
export function setResourceKvp(key, value) {
    return resource.setKvp(key, value);
}
/**
 * A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).
 *
 * Hash: 0x9ADD2938
 * @deprecated Use resource.setKvpFloat(key, value) instead
 */
export function setResourceKvpFloat(key, value) {
    return resource.setKvpFloat(key, value);
}
/**
 * Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x3517BFBE
 * @deprecated Use resource.setKvpFloatNoSync(key, value) instead
 */
export function setResourceKvpFloatNoSync(key, value) {
    return resource.setKvpFloatNoSync(key, value);
}
/**
 * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
 *
 * Hash: 0x6A2B1E8
 * @deprecated Use resource.setKvpInt(key, value) instead
 */
export function setResourceKvpInt(key, value) {
    return resource.setKvpInt(key, value);
}
/**
 * Nonsynchronous [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0x26AEB707
 * @deprecated Use resource.setKvpIntNoSync(key, value) instead
 */
export function setResourceKvpIntNoSync(key, value) {
    return resource.setKvpIntNoSync(key, value);
}
/**
 * Nonsynchronous [SET_RESOURCE_KVP](#\_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 *
 * Hash: 0xCF9A2FF
 * @deprecated Use resource.setKvpNoSync(key, value) instead
 */
export function setResourceKvpNoSync(key, value) {
    return resource.setKvpNoSync(key, value);
}
/**
 * Scope entry for profiler.
 *
 * Hash: 0xC795A4A9
 * @deprecated Use profiler.enterScope(scopeName) instead
 */
export function profilerEnterScope(scopeName) {
    return profiler.enterScope(scopeName);
}
/**
 * Scope exit for profiler.
 *
 * Hash: 0xB39CA35C
 * @deprecated Use profiler.exitScope() instead
 */
export function profilerExitScope() {
    return profiler.exitScope();
}
/**
 * Returns true if the profiler is active.
 *
 * Hash: 0xF8B7D7BB
 * @deprecated Use profiler.isRecording() instead
 */
export function profilerIsRecording() {
    return profiler.isRecording();
}
export * from "@risinglife/redm-shared";
