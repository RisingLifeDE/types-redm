import { Vector3, Vector2, IEntity, IPed, IPlayer, IVehicle, IObject } from '@risinglife/redm-shared';
/**
 * Loads a minimap overlay from a GFx file in the current resource.
 *
 * If you need to control the depth of overlay use [`ADD_MINIMAP_OVERLAY_WITH_DEPTH`](#\_0xED0935B5).
 *
 * Hash: 0x4AFD2499 | Since: unknown | API-Set: client
 */
export declare function addMinimapOverlay(name: string): number;
/**
 * Loads a minimap overlay from a GFx file in the current resource.
 *
 * Hash: 0xED0935B5 | Since: unknown | API-Set: client
 */
export declare function addMinimapOverlayWithDepth(name: string, depth: number): number;
/**
 * Experimental natives, please do not use in a live environment.
 *
 * Hash: 0xA66F8F75 | Since: unknown | API-Set: client
 */
export declare function addReplaceTexture(origTxd: string, origTxn: string, newTxd: string, newTxn: string): void;
/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 *
 * Hash: 0x4C89C0ED | Since: unknown | API-Set: client
 */
export declare function callMinimapScaleformFunction(miniMap: number, fnName: string): boolean;
/**
 * Commits the backing pixels to the specified runtime texture.
 *
 * Hash: 0x19D81F4E | Since: unknown | API-Set: client
 */
export declare function commitRuntimeTexture(tex: number): void;
/**
 * Creates a blank runtime texture.
 *
 * Hash: 0xFEC3766D | Since: unknown | API-Set: client
 */
export declare function createRuntimeTexture(txd: number, txn: string, width: number, height: number): number;
/**
 * Creates a runtime texture from a DUI handle.
 *
 * Hash: 0xB135472B | Since: unknown | API-Set: client
 */
export declare function createRuntimeTextureFromDuiHandle(txd: number, txn: string, duiHandle: string): number;
/**
 * Creates a runtime texture from the specified file in the current resource or a base64 data URL.
 *
 * Hash: 0x786D8BC3 | Since: unknown | API-Set: client
 */
export declare function createRuntimeTextureFromImage(txd: number, txn: string, fileName: string): number;
/**
 * Creates a runtime texture dictionary with the specified name.
 * Example:
 *
 * ```lua
 * local txd = CreateRuntimeTxd('meow')
 * ```
 *
 * Hash: 0x1F3AC778 | Since: unknown | API-Set: client
 */
export declare function createRuntimeTxd(name: string): number;
/**
 * Allows drawing advanced light effects, known as coronas, which support flares, volumetric lighting, and customizable glow properties.
 *
 * Hash: 0xFF44780E | Since: unknown | API-Set: client
 */
export declare function drawCorona(pos: Vector3, size: number, red: number, green: number, blue: number, alpha: number, intensity: number, zBias: number, dirX: number, dirY: number, dirZ: number, viewThreshold: number, innerAngle: number, outerAngle: number, flags: number): void;
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
 * Hash: 0xEB2EDCA2 | Since: unknown | API-Set: client
 */
export declare function drawGizmo(matrixPtr: number, id: string): boolean;
/**
 * Draw a glow sphere this frame. Up to 256 per single frame.
 *
 * Hash: 0xBD25EC89 | Since: unknown | API-Set: client
 */
export declare function drawGlowSphere(pos: Vector3, radius: number, colorR: number, colorG: number, colorB: number, intensity: number, invert: boolean, marker: boolean): void;
/**
 * Like DRAW_RECT, but it's a line.
 *
 * Hash: 0xB856A90 | Since: unknown | API-Set: client
 */
export declare function drawLine2d(x1: number, y1: number, x2: number, y2: number, width: number, r: number, g: number, b: number, a: number): void;
/**
 * DRAW_RECT, but with a rotation. Seems to be broken.
 *
 * Hash: 0xEC37C168 | Since: unknown | API-Set: client
 */
export declare function drawRectRotated(x: number, y: number, width: number, height: number, rotation: number, r: number, g: number, b: number, a: number): void;
/**
 * Forces the game snow pass to render.
 *
 * Hash: 0xE6E16170 | Since: unknown | API-Set: client
 */
export declare function forceSnowPass(enabled: boolean): void;
/**
 * Returns the world position the pointer is hovering on the pause map.
 *
 * Hash: 0xE5AF7A82 | Since: unknown | API-Set: client
 */
export declare function getPauseMapPointerWorldPosition(): Vector3;
/**
 * Gets the height of the specified runtime texture.
 *
 * Hash: 0x3574AACE | Since: unknown | API-Set: client
 */
export declare function getRuntimeTextureHeight(tex: number): number;
/**
 * Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.
 *
 * Hash: 0xCA0A085F | Since: unknown | API-Set: client
 */
export declare function getRuntimeTexturePitch(tex: number): number;
/**
 * Gets the width of the specified runtime texture.
 *
 * Hash: 0xC9F55558 | Since: unknown | API-Set: client
 */
export declare function getRuntimeTextureWidth(tex: number): number;
/**
 * Returns whether or not the specific minimap overlay has loaded.
 *
 * Hash: 0xF7535F32 | Since: unknown | API-Set: client
 */
export declare function hasMinimapOverlayLoaded(id: number): boolean;
/**
 * Experimental natives, please do not use in a live environment.
 *
 * Hash: 0xA896B20A | Since: unknown | API-Set: client
 */
export declare function removeReplaceTexture(origTxd: string, origTxn: string): void;
/**
 * This function undoes changes made by [`SET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE`](#\_0x68DFF2DD), restoring the original outline rendering behavior. The default render technique group is `unlit`.
 *
 * Hash: 0x8EB6EC38 | Since: unknown | API-Set: client
 */
export declare function resetEntityDrawOutlineRenderTechnique(): void;
/**
 * Draws an outline around a given entity. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x76180407 | Since: unknown | API-Set: client
 */
export declare function setEntityDrawOutline(entity: number | IEntity, enabled: boolean): void;
/**
 * Sets color for entity outline. `255, 0, 255, 255` by default.
 *
 * Hash: 0xB41A56C2 | Since: unknown | API-Set: client
 */
export declare function setEntityDrawOutlineColor(red: number, green: number, blue: number, alpha: number): void;
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
 * Hash: 0x68DFF2DD | Since: unknown | API-Set: client
 */
export declare function setEntityDrawOutlineRenderTechnique(techniqueGroup: string): void;
/**
 * Sets variant of shader that will be used to draw entity outline.
 *
 * Variants are:
 *
 * *   **0**: Default value, gauss shader.
 * *   **1**: 2px wide solid color outline.
 * *   **2**: Fullscreen solid color except for entity.
 *
 * Hash: 0x5261A01A | Since: unknown | API-Set: client
 */
export declare function setEntityDrawOutlineShader(shader: number): void;
/**
 * This completely disables rendering of fog volumes (vfxfogvolumeinfo.ymt).
 *
 * Hash: 0xFBC64DA3 | Since: unknown | API-Set: client
 */
export declare function setFogVolumeRenderDisabled(state: boolean): void;
/**
 * Sets the type for the minimap blip clipping object to be either rectangular or rounded.
 *
 * Hash: 0xB8B4490C | Since: unknown | API-Set: client
 */
export declare function setMinimapClipType(_type: number): void;
/**
 * Overrides the minimap component data (from `common:/data/ui/frontend.xml`) for a specified component.
 *
 * Hash: 0x3E882B23 | Since: unknown | API-Set: client
 */
export declare function setMinimapComponentPosition(name: string, alignX: string, alignY: string, posX: number, posY: number, sizeX: number, sizeY: number): void;
/**
 * Sets the display info for a minimap overlay.
 *
 * Hash: 0x6A48B3CA | Since: unknown | API-Set: client
 */
export declare function setMinimapOverlayDisplay(miniMap: number, x: number, y: number, xScale: number, yScale: number, alpha: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3963D527 | Since: unknown | API-Set: client
 */
export declare function setRuntimeTextureArgbData(tex: number, buffer: string, length: number): boolean;
/**
 * Replaces the pixel data in a runtime texture with the image data from a file in the current resource, or a data URL.
 *
 * If the bitmap is a different size compared to the existing texture, it will be resampled.
 *
 * This command may end up executed asynchronously, and only update the texture data at a later time.
 *
 * Hash: 0x28FC4ECB | Since: unknown | API-Set: client
 */
export declare function setRuntimeTextureImage(tex: number, fileName: string): boolean;
/**
 * Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.
 *
 * Hash: 0xAB65ACEE | Since: unknown | API-Set: client
 */
export declare function setRuntimeTexturePixel(tex: number, x: number, y: number, r: number, g: number, b: number, a: number): void;
/**
 * Modifies the radius scale used in the simulation of wet cloth physics.
 * This affects how cloth behaves when wet, changing how it sticks or reacts to movement.
 *
 * Hash: 0xF1BD2CEF | Since: unknown | API-Set: client
 */
export declare function setWetClothPinRadiusScale(scale: number): void;
/**
 * Resets the screen's draw-origin which was changed by the function [`SET_DRAW_ORIGIN`](#\_0xE10198D5) back to `x=0, y=0`. See [`SET_DRAW_ORIGIN`](#\_0xE10198D5) for further information.
 *
 * Hash: 0xDD76B263 | Since: unknown | API-Set: client
 */
export declare function clearDrawOrigin(): void;
/**
 * In compare to `0x31DC8D3F216D8509` return true if texture its created when `0x31DC8D3F216D8509` return true if you put there any id in valid range
 *
 * Hash: 0x8B25BC20 | Since: unknown | API-Set: client
 */
export declare function doesTextureExist(textureId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCD4D9DD5 | Since: unknown | API-Set: client
 */
export declare function drawBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB3426BCC | Since: unknown | API-Set: client
 */
export declare function drawLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;
/**
 * No comment provided
 *
 * Hash: 0xABD19253 | Since: unknown | API-Set: client
 */
export declare function drawPoly(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, red: number, green: number, blue: number, alpha: number): void;
/**
 * Gets the current aspect ratio
 *
 * ```lua
 * local ratio = GetAspectRatio()
 * print(string.format("%.2f", ratio))
 * ```
 *
 * Hash: 0x2CA8F641 | Since: unknown | API-Set: client
 */
export declare function getAspectRatio(): number;
/**
 * Gets the current screen resolution.
 *
 * ```lua
 * local  width, height = GetCurrentScreenResolution()
 * print(string.format("Current screen resolution: %dx%d", width, height))
 *
 * ```
 *
 * Hash: 0x337F0116 | Since: unknown | API-Set: client
 */
export declare function getCurrentScreenResolution(): [number, number];
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
 * Hash: 0x1582C7F2 | Since: unknown | API-Set: client
 */
export declare function removeTexture(textureId: number): void;
/**
 * Sets the on-screen drawing origin for draw-functions in world coordinates.
 *
 * The effect can be reset by calling [`CLEAR_DRAW_ORIGIN`](#\_0xDD76B263) and is limited to 32 different origins each frame.
 *
 * Hash: 0xE10198D5 | Since: unknown | API-Set: client
 */
export declare function setDrawOrigin(pos: Vector3, is2d: boolean): void;
/**
 * Sets the text font for the current text drawing command.
 *
 * Hash: 0xADA9255D | Since: unknown | API-Set: client
 */
export declare function setTextFontForCurrentCommand(fontId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x68CDFA60 | Since: unknown | API-Set: client
 */
export declare function setTextJustification(justifyType: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6F60AB54 | Since: unknown | API-Set: client
 */
export declare function setTextWrap(start: number, end: number): void;
/**
 * A getter for [SET_VISUAL_SETTING_FLOAT](#\_0xD1D31681).
 *
 * Hash: 0x15346B4D | Since: unknown | API-Set: client
 */
export declare function getVisualSettingFloat(name: string): number;
/**
 * Overrides a floating point value from `visualsettings.dat` temporarily.
 *
 * Hash: 0xD1D31681 | Since: unknown | API-Set: client
 */
export declare function setVisualSettingFloat(name: string, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x57CB267624EF85C0 | Since: 1207 | API-Set: unknown
 */
export declare function addDecal(): number;
/**
 * No comment provided
 *
 * Hash: 0x73354FB6D03D2E8A | Since: 1207 | API-Set: unknown
 */
export declare function addPetrolTrailDecalInfo(pos: Vector3): void;
/**
 * Returns veg modifier handle
 *
 * Hash: 0xFA50F79257745E74 | Since: 1207 | API-Set: unknown
 */
export declare function addVegModifierSphere(pos: Vector3, radius: number, modType: number, flags: number): number;
/**
 * No comment provided
 *
 * Hash: 0x7C348310A6E2FB91 | Since: 1207 | API-Set: unknown
 */
export declare function allowPickupLightSync(pickupObject: number | IObject, allow: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x9AB192A9EF980EED | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxHasEventTriggeredByStackhash(effectNameHash: number | string, eventType: number, peekOnly: boolean): [boolean, boolean];
/**
 * No comment provided
 *
 * Hash: 0x59EA80079B86D8C7 | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxIsPreloadingByStackhash(effectNameHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4A123E85D7C4CA0B | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxIsRunning(effectName: string): boolean;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/graphics/animpostfx
 *
 * Hash: 0x4102732DF6B4005F | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxPlay(effectName: string): void;
/**
 * No comment provided
 *
 * Hash: 0xB4FD7446BAB2F394 | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxStop(effectName: string): void;
/**
 * No comment provided
 *
 * Hash: 0x66560A0D4C64FD21 | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxStopAll(): void;
/**
 * No comment provided
 *
 * Hash: 0x40866A418EB8EFDE | Since: 1207 | API-Set: unknown
 */
export declare function attachTvAudioToEntity(entity: number | IEntity): void;
/**
 * Called together with FREE_MEMORY_FOR_LOW_QUALITY_PHOTO
 *
 * Hash: 0x494A9874F17A7D50 | Since: 1207 | API-Set: unknown
 */
export declare function beginCreateLowQualityCopyOfPhoto(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA15BFFC0A01B34E1 | Since: 1207 | API-Set: unknown
 */
export declare function beginTakeHighQualityPhoto(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0552AA3FFC5B87AA | Since: 1207 | API-Set: unknown
 */
export declare function blockPickupPlacementLight(pickup: any, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xF7C29D7C12C36F03 | Since: 1207 | API-Set: unknown
 */
export declare function cascadeShadowsClearShadowSampleType(): void;
/**
 * When this is set to ON, shadows only draw as you get nearer.
 *
 * When OFF, they draw from a further distance.
 *
 * Hash: 0x8FBFD2AEB196B369 | Since: 1207 | API-Set: unknown
 */
export declare function cascadeShadowsEnableEntityTracker(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xD9EDB2E4512D563E | Since: 1207 | API-Set: unknown
 */
export declare function cascadeShadowsSetCascadeBounds(): void;
/**
 * Possible values:
 * "CSM_ST_POINT"
 * "CSM_ST_LINEAR"
 * "CSM_ST_BOX3x3"
 * "CSM_ST_BOX4x4"
 * "CSM_ST_DITHER2_LINEAR"
 * "CSM_ST_CUBIC"
 * "CSM_ST_POISSON16"
 * "CSM_ST_SOFT8"
 * "CSM_ST_SOFT16"
 * "CSM_ST_SOFT32"
 * "CSM_ST_DITHER16_RPDB"
 * "CSM_ST_POISSON16_RPDB_GNORM"
 * "CSM_ST_HIGHRES_BOX4x4"
 * "CSM_ST_ESM"
 *
 * Hash: 0xCE4774E0F9AD48D1 | Since: 1207 | API-Set: unknown
 */
export declare function cascadeShadowsSetShadowSampleType(_type: string): void;
/**
 * No comment provided
 *
 * Hash: 0x0E3F4AF2D63491FB | Since: 1207 | API-Set: unknown
 */
export declare function clearTimecycleModifier(): void;
/**
 * No comment provided
 *
 * Hash: 0x175668836B44CBB0 | Since: 1207 | API-Set: unknown
 */
export declare function createCheckpointWithNamehash(typeHash: number | string, posX1: number, posY1: number, posZ1: number, posX2: number, posY2: number, posZ2: number, radius: number, red: number, green: number, blue: number, alpha: number, reserved: number): number;
/**
 * Creates a tracked point, useful for checking the visibility of a 3D point on screen.
 *
 * Hash: 0xFB405CB357C69CB9 | Since: 1207 | API-Set: unknown
 */
export declare function createTrackedPoint(): number;
/**
 * No comment provided
 *
 * Hash: 0x0DED5B0C8EBAAE12 | Since: 1207 | API-Set: unknown
 */
export declare function deleteCheckpoint(checkpoint: number): void;
/**
 * No comment provided
 *
 * Hash: 0x37A59922109F8F1C | Since: 1207 | API-Set: unknown
 */
export declare function destroyTrackedPoint(point: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5C9978A2A3DC3D0D | Since: 1207 | API-Set: unknown
 */
export declare function disableEntitymask(): void;
/**
 * No comment provided
 *
 * Hash: 0x98A7CD5EA379A854 | Since: 1207 | API-Set: unknown
 */
export declare function disableHdtexThisFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0x9DD5AFF561E88F2A | Since: 1207 | API-Set: unknown
 */
export declare function doesParticleFxLoopedExist(ptfxHandle: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD2D9E04C0DF927F4 | Since: 1207 | API-Set: unknown
 */
export declare function drawLightWithRange(pos: Vector3, colorR: number, colorG: number, colorB: number, range: number, intensity: number): void;
/**
 * nullsub, doesn't do anything (GTA5 leftover, there is no phone in RDR3)
 *
 * Hash: 0xF1142E5D64B47802 | Since: 1207 | API-Set: unknown
 */
export declare function drawLowQualityPhotoToPhone(photoRotation: number): void;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/graphics/markers/marker_types.lua
 * Old name: _DRAW_MARKER
 *
 * Hash: 0x2A32FAA57B937173 | Since: 1207 | API-Set: unknown
 */
export declare function drawMarker(_type: number | string, pos: Vector3, dirX: number, dirY: number, dirZ: number, rot: Vector3, scale: Vector3, red: number, green: number, blue: number, alpha: number, bobUpAndDown: boolean, faceCamera: boolean, rotate: boolean, textureDict: string, textureName: string, drawOnEnts: boolean): void;
/**
 * Draws a rectangle on the screen.
 *
 * -x: The relative X point of the center of the rectangle. (0.0-1.0, 0.0 is the left edge of the screen, 1.0 is the right edge of the screen)
 *
 * -y: The relative Y point of the center of the rectangle. (0.0-1.0, 0.0 is the top edge of the screen, 1.0 is the bottom edge of the screen)
 *
 * -width: The relative width of the rectangle. (0.0-1.0, 1.0 means the whole screen width)
 *
 * -height: The relative height of the rectangle. (0.0-1.0, 1.0 means the whole screen height)
 *
 * -R: Red part of the color. (0-255)
 *
 * -G: Green part of the color. (0-255)
 *
 * -B: Blue part of the color. (0-255)
 *
 * -A: Alpha part of the color. (0-255, 0 means totally transparent, 255 means totally opaque)
 *
 * Hash: 0x405224591DF02025 | Since: 1207 | API-Set: unknown
 */
export declare function drawRect(x: number, y: number, width: number, height: number, red: number, green: number, blue: number, alpha: number): void;
/**
 * Draws a 2D sprite on the screen.
 *
 * Parameters:
 * textureDict - Name of texture dictionary to load texture from
 *
 * textureName - Name of texture to load from texture dictionary
 *
 * screenX/Y - Screen offset (0.5 = center)
 * scaleX/Y - Texture scaling. Negative values can be used to flip the texture on that axis. (0.5 = half)
 *
 * heading - Texture rotation in degrees (default = 0.0) positive is clockwise, measured in degrees
 *
 * red,green,blue - Sprite color (default = 255/255/255)
 *
 * alpha - opacity level
 *
 * https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/textures
 *
 * Hash: 0xC9884ECADE94CB34 | Since: 1207 | API-Set: unknown
 */
export declare function drawSprite(textureDict: string, textureName: string, screenSize: Vector2, width: number, height: number, heading: number, red: number, green: number, blue: number, alpha: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC0A145540254A840 | Since: 1207 | API-Set: unknown
 */
export declare function drawTvChannel(xPos: number, yPos: number, xScale: number, yScale: number, rotation: number, red: number, green: number, blue: number, alpha: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFAAD23DE7A54FC14 | Since: 1207 | API-Set: unknown
 */
export declare function enableEntitymask(): void;
/**
 * Old name: _ENABLE_EXTRA_TIMECYCLE_MODIFIER_STRENGTH
 *
 * Hash: 0x6FE93BCC7BF12B63 | Since: 1207 | API-Set: unknown
 */
export declare function enableMoonCycleOverride(strength: number): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x6FC9B065229C0787 | Since: 1207 | API-Set: unknown
 */
export declare function enableMovieSubtitles(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x0E126AAE933F3B56 | Since: 1207 | API-Set: unknown
 */
export declare function endPetrolTrailDecals(): void;
/**
 * No comment provided
 *
 * Hash: 0xD45547D8396F002A | Since: 1207 | API-Set: unknown
 */
export declare function freeMemoryForHighQualityPhoto(): void;
/**
 * No comment provided
 *
 * Hash: 0x614682E715ADBAAC | Since: 1207 | API-Set: unknown
 */
export declare function freeMemoryForLowQualityPhoto(): void;
/**
 * No comment provided
 *
 * Hash: 0x7DFF8F94937D2659 | Since: 1207 | API-Set: unknown
 */
export declare function freeMemoryForMissionCreatorPhoto(): void;
/**
 * No comment provided
 *
 * Hash: 0xCB50D7AFCC8B0EC6 | Since: 1207 | API-Set: unknown
 */
export declare function getScreenCoordFromWorldCoord(worldPos: Vector3): [boolean, number, number];
/**
 * Hardcoded to always set x to 1280 and y to 720.
 *
 * Hash: 0x66773C92835D0909 | Since: 1207 | API-Set: unknown
 */
export declare function getScreenResolution(): [number, number];
/**
 * Old name: _GET_STATUS_OF_DRAW_LOW_QUALITY_PHOTO
 *
 * Hash: 0x13430D3D5A45F14B | Since: 1207 | API-Set: unknown
 */
export declare function getStatusOfCreateLowQualityCopyOfPhoto(): number;
/**
 * `contentId: returned by NETWORK::_UGC_QUERY_GET_CREATOR_PHOTO(uVar0, 0, sParam3)`
 *
 * Hash: 0xC71B50AE58D07369 | Since: 1207 | API-Set: unknown
 */
export declare function getStatusOfLoadMissionCreatorPhoto(contentId: string): number;
/**
 * 0 = succeeded
 * 1 = getting status
 * 2 = failed
 *
 * Hash: 0xD6663EC374092383 | Since: 1207 | API-Set: unknown
 */
export declare function getStatusOfSaveHighQualityPhoto(): number;
/**
 * 0 = succeeded
 * 1 = getting status
 * 2 = failed
 *
 * Hash: 0xB28894CD7408BD0C | Since: 1207 | API-Set: unknown
 */
export declare function getStatusOfSortedListOperation(): number;
/**
 * No comment provided
 *
 * Hash: 0x4A3DA74C3CCB1725 | Since: 1207 | API-Set: unknown
 */
export declare function getStatusOfTakeHighQualityPhoto(): number;
/**
 * No comment provided
 *
 * Hash: 0xA705394293E2B3D3 | Since: 1207 | API-Set: unknown
 */
export declare function getTimecycleModifierIndex(): number;
/**
 * No comment provided
 *
 * Hash: 0x2DA67BA3C8A6755D | Since: 1207 | API-Set: unknown
 */
export declare function getTimecycleTransitionModifierIndex(): number;
/**
 * No comment provided
 *
 * Hash: 0x86ED21BDB2791CE8 | Since: 1207 | API-Set: unknown
 */
export declare function getTogglePausedRenderphasesStatus(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF90FBFD68F3C59AE | Since: 1207 | API-Set: unknown
 */
export declare function getTvChannel(): number;
/**
 * No comment provided
 *
 * Hash: 0x3E4B4E5CF5D3EEB5 | Since: 1207 | API-Set: unknown
 */
export declare function isDecalAlive(decal: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x86076AE35CBBE55F | Since: 1355 | API-Set: unknown
 */
export declare function isPhotoFrame(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCBB056BA159FB48D | Since: 1207 | API-Set: unknown
 */
export declare function isTrackedPointVisible(point: number): boolean;
/**
 * Old name: _IS_TV_PLAYLIST_ITEM_PLAYING
 *
 * Hash: 0x4D562223E0EB65F3 | Since: 1207 | API-Set: unknown
 */
export declare function isTvshowCurrentlyPlaying(videoCliphash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x84F0BA7462FF8D58 | Since: 1207 | API-Set: unknown
 */
export declare function loadMissionCreatorPhoto(): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0xAF6E67D073D2DCE2 | Since: 1207 | API-Set: unknown
 */
export declare function pedshotIsAvailable(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA42EDF1E88734A7E | Since: 1207 | API-Set: unknown
 */
export declare function queueOperationToCreateSortedListOfPhotos(): any;
/**
 * No comment provided
 *
 * Hash: 0x49A720552EB0BB88 | Since: 1207 | API-Set: unknown
 */
export declare function removeDecal(decal: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFB8972BAE0013140 | Since: 1207 | API-Set: unknown
 */
export declare function removeDecalsFromObject(obj: number | IObject): void;
/**
 * Removes all decals in range from a position, it includes the bullet holes, blood pools, petrol...
 *
 * Hash: 0x86DE59FA02902B40 | Since: 1207 | API-Set: unknown
 */
export declare function removeDecalsInRange(pos: Vector3, range: number): void;
/**
 * No comment provided
 *
 * Hash: 0xAE7BF7CA9E4BA48D | Since: 1207 | API-Set: unknown
 */
export declare function removeGrassCullSphere(handle: number): void;
/**
 * No comment provided
 *
 * Hash: 0x459598F579C98929 | Since: 1207 | API-Set: unknown
 */
export declare function removeParticleFx(ptfxHandle: number): void;
/**
 * No comment provided
 *
 * Hash: 0x92884B4A49D81325 | Since: 1207 | API-Set: unknown
 */
export declare function removeParticleFxFromEntity(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x87B5905ECA623B68 | Since: 1207 | API-Set: unknown
 */
export declare function removeParticleFxInRange(pos: Vector3, radius: number): void;
/**
 * only works by invoking and passing as pointer value Citizen.InvokeNative(0x9CF1836C03FB67A2, Citizen.PointerValueIntInitialized(vegModifierId),1) p1 is 1 or 0
 *
 * Hash: 0x9CF1836C03FB67A2 | Since: 1207 | API-Set: unknown
 */
export declare function removeVegModifierSphere(vegModifierHandle: number): void;
/**
 * Sets an unknown value related to timecycles.
 *
 * Hash: 0x297B72E2AF094742 | Since: 1207 | API-Set: unknown
 */
export declare function resetAdaptation(unk: number): void;
/**
 * Resets the effect of SET_PARTICLE_FX_OVERRIDE
 *
 * Hash: 0x274B3DABF7E72DEF | Since: 1207 | API-Set: unknown
 */
export declare function resetParticleFxOverride(name: string): void;
/**
 * No comment provided
 *
 * Hash: 0xCCD9AAD85E1B559E | Since: 1207 | API-Set: unknown
 */
export declare function resetPausedRenderphases(): void;
/**
 * No comment provided
 *
 * Hash: 0x57639FD876B68A91 | Since: 1207 | API-Set: unknown
 */
export declare function saveHighQualityPhoto(unused: number): boolean;
/**
 * Does not affect weapons, particles, fire/explosions, flashlights or the sun.
 * When set to true, all emissive textures (including ped components that have light effects), street lights, building lights, vehicle lights, etc will all be turned off.
 *
 * state: True turns off all artificial light sources in the map: buildings, street lights, car lights, etc. False turns them back on.
 *
 * Hash: 0xB2797619A7C7747B | Since: 1207 | API-Set: unknown
 */
export declare function setArtificialLightsState(state: boolean): void;
/**
 * Sets the checkpoint color.
 *
 * Hash: 0xCAAFC225E33B1D15 | Since: 1207 | API-Set: unknown
 */
export declare function setCheckpointRgba(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;
/**
 * Sets the checkpoint icon color.
 *
 * Hash: 0x99AFF17222D4DEB4 | Since: 1207 | API-Set: unknown
 */
export declare function setCheckpointRgba2(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;
/**
 * No comment provided
 *
 * Hash: 0x53ED07BF368EDA59 | Since: 1232 | API-Set: unknown
 */
export declare function setDisablePetrolDecalsIgnitingThisFrame(): void;
/**
 * Returns handle to be used with REMOVE_GRASS_CULL_SPHERE
 *
 * Hash: 0x27219300C36A8D40 | Since: 1207 | API-Set: unknown
 */
export declare function setGrassCullSphere(pos: Vector3): number;
/**
 * Old name: _SET_HIDOF_ENV_BLUR_PARAMS
 *
 * Hash: 0xCC23AA1A7CBFE840 | Since: 1207 | API-Set: unknown
 */
export declare function setHidofOverride(): void;
/**
 * Related to Campfires.
 * p1: AMB_BONFIRE_MP, AMB_CAMPFIRE_LRG_MP
 *
 * Hash: 0x3C61B52B00848C26 | Since: 1207 | API-Set: unknown
 */
export declare function setParticleFxAmbientColour(entity: number | IEntity, r: number, g: number, b: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8DCCC98DC0DBF9E4 | Since: 1207 | API-Set: unknown
 */
export declare function setParticleFxBulletImpactLodrangeScale(): void;
/**
 * No comment provided
 *
 * Hash: 0xA53C8D7D0F8C74D0 | Since: 1207 | API-Set: unknown
 */
export declare function setParticleFxBulletImpactScale(scale: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2A1625858887D4E6 | Since: 1207 | API-Set: unknown
 */
export declare function setParticleFxFootLodrangeScale(): void;
/**
 * No comment provided
 *
 * Hash: 0x88786E76234F7054 | Since: 1207 | API-Set: unknown
 */
export declare function setParticleFxLoopedAlpha(ptfxHandle: number, alpha: number): void;
/**
 * No comment provided
 *
 * Hash: 0x239879FC61C610CC | Since: 1207 | API-Set: unknown
 */
export declare function setParticleFxLoopedColour(ptfxHandle: number, r: number, g: number, b: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3674F389B0FACD80 | Since: 1207 | API-Set: unknown
 */
export declare function setParticleFxLoopedEvolution(ptfxHandle: number, propertyName: string, amount: number, noNetwork: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x9B04D471DA0AD7AA | Since: 1207 | API-Set: unknown
 */
export declare function setParticleFxLoopedFarClipDist(ptfxHandle: number, range: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD3A4A95FC94FE83B | Since: 1207 | API-Set: unknown
 */
export declare function setParticleFxLoopedOffsets(ptfxHandle: number, pos: Vector3, rot: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x1A9E1C0D98D093B7 | Since: 1207 | API-Set: unknown
 */
export declare function setParticleFxLoopedScale(ptfxHandle: number, scale: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE8A35938A7026CEA | Since: 1311 | API-Set: unknown
 */
export declare function setParticleFxNonLoopedAlpha(alpha: number): void;
/**
 * No comment provided
 *
 * Hash: 0x60B85BED6577A35B | Since: 1207 | API-Set: unknown
 */
export declare function setParticleFxNonLoopedColour(r: number, g: number, b: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBE711A169E9C7E95 | Since: 1207 | API-Set: unknown
 */
export declare function setParticleFxOverride(oldAsset: string, newAsset: string): void;
/**
 * https://imgur.com/a/I2swSDJ
 *
 * Old name: _SET_PICKUP_OBJECT_GLOW_ENABLED
 *
 * Hash: 0x7DFB49BCDB73089A | Since: 1207 | API-Set: unknown
 */
export declare function setPickupLight(_object: number | IObject, toggle: boolean): void;
/**
 * Sets a flag defining whether or not script draw commands should continue being drawn behind the pause menu. This is usually used for draw commands that are used with a world render target.
 *
 * Hash: 0x906B86E6D7896B9E | Since: 1207 | API-Set: unknown
 */
export declare function setScriptGfxDrawBehindPausemenu(toggle: boolean): void;
/**
 * Sets the draw order for script draw commands.
 *
 * Hash: 0xCFCC78391C8B3814 | Since: 1207 | API-Set: unknown
 */
export declare function setScriptGfxDrawOrder(drawOrder: number): void;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/graphics/timecycles
 *
 * Hash: 0xFA08722A5EA82DA7 | Since: 1207 | API-Set: unknown
 */
export declare function setTimecycleModifier(modifierName: string): void;
/**
 * No comment provided
 *
 * Hash: 0xFDB74C9CC54C3F37 | Since: 1207 | API-Set: unknown
 */
export declare function setTimecycleModifierStrength(strength: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF6FDA3D4404D4F2C | Since: 1207 | API-Set: unknown
 */
export declare function setTrackedPointInfo(point: number, pos: Vector3, radius: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBB6C707F20D955D4 | Since: 1207 | API-Set: unknown
 */
export declare function setTransitionOutOfTimecycleModifier(strength: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFF927A09F481D80C | Since: 1207 | API-Set: unknown
 */
export declare function setTransitionTimecycleModifier(modifierName: string, transitionBlend: number): void;
/**
 * Probably changes tvs from being a 3d audio to being "global" audio
 *
 * Hash: 0x64437C98FCC5F291 | Since: 1207 | API-Set: unknown
 */
export declare function setTvAudioFrontend(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x593FAF7FC9401A56 | Since: 1207 | API-Set: unknown
 */
export declare function setTvChannel(channel: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDEC6B25F5DC8925B | Since: 1207 | API-Set: unknown
 */
export declare function setTvChannelPlaylist(tvChannel: number, playlistName: string, restart: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x73A97068787D7231 | Since: 1207 | API-Set: unknown
 */
export declare function setTvVolume(volume: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8F90AB32E1944BDE | Since: 1207 | API-Set: unknown
 */
export declare function startNetworkedParticleFxLoopedOnEntity(effectName: string, entity: number | IEntity, xOffset: number, yOffset: number, zOffset: number, rot: Vector3, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0x9C56621462FFE7A6 | Since: 1207 | API-Set: unknown
 */
export declare function startNetworkedParticleFxLoopedOnEntityBone(effectName: string, entity: number | IEntity, xOffset: number, yOffset: number, zOffset: number, rot: Vector3, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0xFB97618457994A62 | Since: 1207 | API-Set: unknown
 */
export declare function startNetworkedParticleFxNonLoopedAtCoord(effectName: string, pos: Vector3, rot: Vector3, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE6CFE43937061143 | Since: 1207 | API-Set: unknown
 */
export declare function startNetworkedParticleFxNonLoopedOnEntity(effectName: string, entity: number | IEntity, offsetX: number, offsetY: number, offsetZ: number, rot: Vector3, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/graphics/ptfx/ptfx_assets_looped.lua
 *
 * Hash: 0xBA32867E86125D3A | Since: 1207 | API-Set: unknown
 */
export declare function startParticleFxLoopedAtCoord(effectName: string, pos: Vector3, rot: Vector3, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0xBD41E1440CE39800 | Since: 1207 | API-Set: unknown
 */
export declare function startParticleFxLoopedOnEntity(effectName: string, entity: number | IEntity, xOffset: number, yOffset: number, zOffset: number, rot: Vector3, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0xD3BA6EC7F2FBD5E9 | Since: 1207 | API-Set: unknown
 */
export declare function startParticleFxLoopedOnEntityBone(effectName: string, entity: number | IEntity, xOffset: number, yOffset: number, zOffset: number, rot: Vector3, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0xE689C1B1432BB8AF | Since: 1207 | API-Set: unknown
 */
export declare function startParticleFxLoopedOnPedBone(effectName: string, ped: number | IPed, xOffset: number, yOffset: number, zOffset: number, rot: Vector3, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/graphics/ptfx/ptfx_assets_non_looped.lua
 *
 * Hash: 0x2E80BF72EF7C87AC | Since: 1207 | API-Set: unknown
 */
export declare function startParticleFxNonLoopedAtCoord(effectName: string, pos: Vector3, rot: Vector3, scale: number, xAxis: number, yAxis: boolean, zAxis: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFF4C64C513388C12 | Since: 1207 | API-Set: unknown
 */
export declare function startParticleFxNonLoopedOnEntity(effectName: string, entity: number | IEntity, offsetX: number, offsetY: number, offsetZ: number, rot: Vector3, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3FAA72BD940C3AC0 | Since: 1207 | API-Set: unknown
 */
export declare function startParticleFxNonLoopedOnPedBone(effectName: string, ped: number | IPed, offsetX: number, offsetY: number, offsetZ: number, rot: Vector3, boneIndex: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x46F246D6504F0031 | Since: 1207 | API-Set: unknown
 */
export declare function startPetrolTrailDecals(): void;
/**
 * No comment provided
 *
 * Hash: 0x22970F3A088B133B | Since: 1207 | API-Set: unknown
 */
export declare function stopParticleFxLooped(ptfxHandle: number): void;
/**
 * No comment provided
 *
 * Hash: 0xEF9E1C45732F55FA | Since: 1207 | API-Set: unknown
 */
export declare function togglePausedRenderphases(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xBDBACB52A03CC760 | Since: 1207 | API-Set: unknown
 */
export declare function updateLightsOnEntity(entity: number | IEntity): void;
/**
 * fxName: see data_0/data/effects/ptfx/fxlists/
 *
 * Hash: 0xA10DB07FC234DD12 | Since: 1207 | API-Set: unknown
 */
export declare function useParticleFxAsset(fxName: string): void;
/**
 * No comment provided
 *
 * Hash: 0x085C5B61A0114F32 | Since: 1207 | API-Set: unknown
 */
export declare function _0x085C5B61A0114F32(): void;
/**
 * Gets set to 1 when GET_STATUS_OF_TAKE_HIGH_QUALITY_PHOTO = PHOTO_OPERATION_SUCCEEDED
 *
 * Hash: 0x0D5B19C34068FEE7 | Since: 1311 | API-Set: unknown
 */
export declare function _0x0D5B19C34068FEE7(): void;
/**
 * _RESET_*
 *
 * Hash: 0x1460B644397453EB | Since: 1207 | API-Set: unknown
 */
export declare function _0x1460B644397453EB(): void;
/**
 * No comment provided
 *
 * Hash: 0x171C18E994C1A395 | Since: 1207 | API-Set: unknown
 */
export declare function _0x171C18E994C1A395(): void;
/**
 * Used in shop scripts for CATALOG_BOOK
 * false = Normal -> [CATALOG_BOOK_SHUTDOWN]
 * true = Trees flickering? -> [CATALOG_BOOK_OPEN]
 *
 * Hash: 0x1A9F09AB458D49C6 | Since: 1207 | API-Set: unknown
 */
export declare function _0x1A9F09AB458D49C6(): void;
/**
 * No comment provided
 *
 * Hash: 0x1C6306E5BC25C29C | Since: 1207 | API-Set: unknown
 */
export declare function _0x1C6306E5BC25C29C(): void;
/**
 * No comment provided
 *
 * Hash: 0x1FF8731BE1DFC0C0 | Since: 1207 | API-Set: unknown
 */
export declare function _0x1FF8731BE1DFC0C0(): void;
/**
 * Params: component - used in odriscolls1 and sean1 R* SP Script: COMPONENT_BINOCULARS_SCOPE01
 * Triggers the binocular scaleform
 *
 * Hash: 0x21F00E08CBB5F37B | Since: 1207 | API-Set: unknown
 */
export declare function _0x21F00E08CBB5F37B(component: string): void;
/**
 * effectName2, p2 and p3 are unused
 *
 * ANIMPOSTFX_*
 *
 * Hash: 0x26DD2FB0A88CC412 | Since: 1207 | API-Set: unknown
 */
export declare function _0x26DD2FB0A88CC412(effectName: string, effectName2: string): void;
/**
 * No comment provided
 *
 * Hash: 0x285438C26C732F9D | Since: 1207 | API-Set: unknown
 */
export declare function _0x285438C26C732F9D(): any;
/**
 * No comment provided
 *
 * Hash: 0x32DE2BFFDA43E62A | Since: 1207 | API-Set: unknown
 */
export declare function _0x32DE2BFFDA43E62A(): void;
/**
 * ANIMPOSTFX_*
 *
 * Hash: 0x38D9D50F2085E9B3 | Since: 1207 | API-Set: unknown
 */
export declare function _0x38D9D50F2085E9B3(effectNameHash: number | string): void;
/**
 * ANIMPOSTFX_*
 *
 * Hash: 0x3DA7A10583A4BEC0 | Since: 1207 | API-Set: unknown
 */
export declare function _0x3DA7A10583A4BEC0(): boolean;
/**
 * Only used in R* SP Script spd_agnesdown1
 *
 * Hash: 0x402E1A61D2587FCD | Since: 1207 | API-Set: unknown
 */
export declare function _0x402E1A61D2587FCD(pos: Vector3, heading: number): boolean;
/**
 * _DISABLE_*
 *
 * Hash: 0x4046493D2EEACA0E | Since: 1207 | API-Set: unknown
 */
export declare function _0x4046493D2EEACA0E(): void;
/**
 * Used in CREATE_BEZIER_BLOOD_TRAIL_OF_TYPE
 *
 * Hash: 0x41F88A85A579A61D | Since: 1207 | API-Set: unknown
 */
export declare function _0x41F88A85A579A61D(): void;
/**
 * No comment provided
 *
 * Hash: 0x453D16D41FC51D3E | Since: 1207 | API-Set: unknown
 */
export declare function _0x453D16D41FC51D3E(): void;
/**
 * No comment provided
 *
 * Hash: 0x48FE0DB54045B975 | Since: 1311 | API-Set: unknown
 */
export declare function _0x48FE0DB54045B975(): void;
/**
 * Used in CREATE_BEZIER_BLOOD_TRAIL_OF_TYPE
 *
 * Hash: 0x4BD66B4E3427689B | Since: 1207 | API-Set: unknown
 */
export declare function _0x4BD66B4E3427689B(): void;
/**
 * p1: AMB_ANN_COAL_CHUTE_DIVE, AMB_ANN_COAL_CHUTE
 * p2: EMIT
 * p3: either 0.0f or 1.0f
 *
 * Hash: 0x4FB67D172C4476F3 | Since: 1207 | API-Set: unknown
 */
export declare function _0x4FB67D172C4476F3(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x503941F65DBA24EC | Since: 1207 | API-Set: unknown
 */
export declare function _0x503941F65DBA24EC(): void;
/**
 * No comment provided
 *
 * Hash: 0x519928DF02EB5101 | Since: 1355 | API-Set: unknown
 */
export declare function _0x519928DF02EB5101(): void;
/**
 * Closes the the binocular scaleform
 *
 * Hash: 0x5AC6E0FA028369DE | Since: 1207 | API-Set: unknown
 */
export declare function _0x5AC6E0FA028369DE(): void;
/**
 * No comment provided
 *
 * Hash: 0x5C674EB487891F6B | Since: 1207 | API-Set: unknown
 */
export declare function _0x5C674EB487891F6B(): any;
/**
 * Only used in R* SP Script spd_agnesdown1
 *
 * Hash: 0x5C9C3A466B3296A8 | Since: 1207 | API-Set: unknown
 */
export declare function _0x5C9C3A466B3296A8(): any;
/**
 * No comment provided
 *
 * Hash: 0x67B0778C62E74423 | Since: 1207 | API-Set: unknown
 */
export declare function _0x67B0778C62E74423(): void;
/**
 * No comment provided
 *
 * Hash: 0x6C03118E9E5C1A14 | Since: 1207 | API-Set: unknown
 */
export declare function _0x6C03118E9E5C1A14(): void;
/**
 * ANIMPOSTFX_*
 *
 * Hash: 0x71845905BCCDE781 | Since: 1207 | API-Set: unknown
 */
export declare function _0x71845905BCCDE781(effectNameHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x735762E8D7573E42 | Since: 1207 | API-Set: unknown
 */
export declare function _0x735762E8D7573E42(): void;
/**
 * Used in CREATE_BEZIER_BLOOD_TRAIL_OF_TYPE
 * _ENABLE_*
 *
 * Hash: 0x812C1563185C6FB2 | Since: 1207 | API-Set: unknown
 */
export declare function _0x812C1563185C6FB2(): void;
/**
 * No comment provided
 *
 * Hash: 0x815653A42C5ABE76 | Since: 1207 | API-Set: unknown
 */
export declare function _0x815653A42C5ABE76(): void;
/**
 * No comment provided
 *
 * Hash: 0x8996FA6AD9FE4E90 | Since: 1207 | API-Set: unknown
 */
export declare function _0x8996FA6AD9FE4E90(): void;
/**
 * No comment provided
 *
 * Hash: 0x910E260AEAD855DE | Since: 1207 | API-Set: unknown
 */
export declare function _0x910E260AEAD855DE(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x94B261F1F35293E1 | Since: 1207 | API-Set: unknown
 */
export declare function _0x94B261F1F35293E1(): void;
/**
 * No comment provided
 *
 * Hash: 0x981C7D863980FA51 | Since: 1207 | API-Set: unknown
 */
export declare function _0x981C7D863980FA51(): void;
/**
 * No comment provided
 *
 * Hash: 0x9D1B0B5066205692 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9D1B0B5066205692(): void;
/**
 * No comment provided
 *
 * Hash: 0x9F158A49B0D84C3C | Since: 1207 | API-Set: unknown
 */
export declare function _0x9F158A49B0D84C3C(): void;
/**
 * No comment provided
 *
 * Hash: 0x9F6D859C80708B26 | Since: 1311 | API-Set: unknown
 */
export declare function _0x9F6D859C80708B26(): void;
/**
 * No comment provided
 *
 * Hash: 0xA04EF43030593ABC | Since: 1207 | API-Set: unknown
 */
export declare function _0xA04EF43030593ABC(): void;
/**
 * No comment provided
 *
 * Hash: 0xA0F4D12D6042F6D5 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA0F4D12D6042F6D5(): void;
/**
 * No comment provided
 *
 * Hash: 0xA15CCAB8AD038291 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA15CCAB8AD038291(): any;
/**
 * No comment provided
 *
 * Hash: 0xA1A86055792FB249 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA1A86055792FB249(personaPhotoLocalCacheType: number): void;
/**
 * ANIMPOSTFX_*
 *
 * Hash: 0xA201A3D0AC087C37 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA201A3D0AC087C37(effectName: string): void;
/**
 * No comment provided
 *
 * Hash: 0xA21AF60C9F99CCC5 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA21AF60C9F99CCC5(): void;
/**
 * _SET_D* or _SET_E*
 *
 * Hash: 0xB032C085D9A03907 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB032C085D9A03907(): void;
/**
 * ANIMPOSTFX_*
 *
 * Hash: 0xB958D97A0DFAA0C2 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB958D97A0DFAA0C2(effectName: string): boolean;
/**
 * Used in NET_CAMP_SPIRIT_ANIMAL_CLEAR_ANIMAL_VISIBILITY
 *
 * Hash: 0xC06F2F45A73EABCD | Since: 1311 | API-Set: unknown
 */
export declare function _0xC06F2F45A73EABCD(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xC28F62AC9774FC1B | Since: 1207 | API-Set: unknown
 */
export declare function _0xC28F62AC9774FC1B(): any;
/**
 * Doesn't actually return anything.
 *
 * ANIMPOSTFX_*
 *
 * Hash: 0xC37792A3F9C90771 | Since: 1207 | API-Set: unknown
 */
export declare function _0xC37792A3F9C90771(): any;
/**
 * No comment provided
 *
 * Hash: 0xC489FE31AC726512 | Since: 1207 | API-Set: unknown
 */
export declare function _0xC489FE31AC726512(): void;
/**
 * ANIMPOSTFX_*
 *
 * Hash: 0xC76FC4C2FC5F4405 | Since: 1207 | API-Set: unknown
 */
export declare function _0xC76FC4C2FC5F4405(effectNameHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xCC3B787E73E64160 | Since: 1207 | API-Set: unknown
 */
export declare function _0xCC3B787E73E64160(): void;
/**
 * Only used in R* Script nb_stalking_hunter
 *
 * Hash: 0xD1472AFF30C103D6 | Since: 1311 | API-Set: unknown
 */
export declare function _0xD1472AFF30C103D6(): void;
/**
 * No comment provided
 *
 * Hash: 0xD543487A1F12828F | Since: 1207 | API-Set: unknown
 */
export declare function _0xD543487A1F12828F(): void;
/**
 * No comment provided
 *
 * Hash: 0xD9BC98B55BCFAA9B | Since: 1207 | API-Set: unknown
 */
export declare function _0xD9BC98B55BCFAA9B(): void;
/**
 * No comment provided
 *
 * Hash: 0xE63D68F455CA0B47 | Since: 1207 | API-Set: unknown
 */
export declare function _0xE63D68F455CA0B47(): any;
/**
 * ANIMPOSTFX_*
 *
 * Hash: 0xE75CDDEBF618C8FF | Since: 1207 | API-Set: unknown
 */
export declare function _0xE75CDDEBF618C8FF(effectNameHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEB48CE48EEC41FD4 | Since: 1207 | API-Set: unknown
 */
export declare function _0xEB48CE48EEC41FD4(): void;
/**
 * No comment provided
 *
 * Hash: 0xEC3D8C228FE553D7 | Since: 1207 | API-Set: unknown
 */
export declare function _0xEC3D8C228FE553D7(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEC3F7F24EEEB3BA3 | Since: 1207 | API-Set: unknown
 */
export declare function _0xEC3F7F24EEEB3BA3(): void;
/**
 * No comment provided
 *
 * Hash: 0xF2F543D48F319A3A | Since: 1207 | API-Set: unknown
 */
export declare function _0xF2F543D48F319A3A(): void;
/**
 * No comment provided
 *
 * Hash: 0xF5793BB386E1FF9C | Since: 1207 | API-Set: unknown
 */
export declare function _0xF5793BB386E1FF9C(): void;
/**
 * _DISABLE_*
 *
 * Hash: 0xFB680A9B33D0EDBE | Since: 1207 | API-Set: unknown
 */
export declare function _0xFB680A9B33D0EDBE(): void;
/**
 * ANIMPOSTFX_*
 *
 * Hash: 0xFBF161FCFEC8589E | Since: 1207 | API-Set: unknown
 */
export declare function _0xFBF161FCFEC8589E(effectName: string): [boolean, boolean];
/**
 * No comment provided
 *
 * Hash: 0xFC9B53C072F418E0 | Since: 1207 | API-Set: unknown
 */
export declare function _0xFC9B53C072F418E0(): any;
/**
 * R* Script spd_agnesdow1: p0 = SPD_AGNES_DOWD_01
 *
 * Hash: 0xFD05B1DDE83749FA | Since: 1207 | API-Set: unknown
 */
export declare function _0xFD05B1DDE83749FA(): boolean;
/**
 * Returns whether the 'killFX' setting is enabled.
 *
 * ANIMPOSTFX_*
 *
 * Hash: 0xFF584F097C17FA8F | Since: 1207 | API-Set: unknown
 */
export declare function _0xFF584F097C17FA8F(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFF8018C778349234 | Since: 1207 | API-Set: unknown
 */
export declare function _0xFF8018C778349234(): void;
/**
 * https://i.imgur.com/ULQU9US.jpg
 * More rounded and small puddle
 *
 * Hash: 0xFA2ECC78A6014D4F | Since: 1207 | API-Set: unknown
 */
export declare function addBloodPool(pos: Vector3, unused: boolean): void;
/**
 * Creates blood pools for the given ped in some interval for a few seconds.
 *
 * Hash: 0xDFCE8CE9F3EBE93F | Since: 1207 | API-Set: unknown
 */
export declare function addBloodPoolsForPed(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xC349EE1E6EFA494B | Since: 1207 | API-Set: unknown
 */
export declare function addBloodPoolsForPedWithParams(ped: number | IPed, size: number): void;
/**
 * https://i.imgur.com/rPITUCV.jpg
 * More customizable and more like quadrants
 *
 * Hash: 0xF708298675ABDC6A | Since: 1207 | API-Set: unknown
 */
export declare function addBloodPool2(pos: Vector3, size: number, permanent: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xDD9DC1AB63D513CE | Since: 1207 | API-Set: unknown
 */
export declare function addBloodTrailPoint(pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xF5E45CB1CF965D2D | Since: 1207 | API-Set: unknown
 */
export declare function addBloodTrailSplat(pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xC6F81FCD15350323 | Since: 1207 | API-Set: unknown
 */
export declare function addEntityToEntityMask(entity: number | IEntity, mask: number): void;
/**
 * No comment provided
 *
 * Hash: 0x958DEBD9353C0935 | Since: 1207 | API-Set: unknown
 */
export declare function addEntityToEntityMaskWithIntensity(entity: number | IEntity, mask: number, intensity: number): void;
/**
 * Adds Vegetation Blocking Zone, Added Snow Flattening veg mod Zone
 * Returns veg modifier handle
 *
 * Hash: 0xBD3324281E8B9933 | Since: 1207 | API-Set: unknown
 */
export declare function addVegModifierZone(volume: number, flags: number): number;
/**
 * No comment provided
 *
 * Hash: 0xC5CB91D65852ED7E | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxClearEffect(effectName: string): void;
/**
 * Known effects: MP_Trans_SceneToPhoto
 * MP_Trans_WinLose
 * SpectateFilter
 * MP_CharacterCreatorPhoto
 * MP_Trans_PhotoToScene
 * InterrogationHit
 *
 * Hash: 0x842CCC9491FFCD9B | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxGetStackhash(effectName: string): number;
/**
 * No comment provided
 *
 * Hash: 0xBF2DD155B2ADCD0A | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxHasLoaded(effectName: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEEF83A759AE06A27 | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxIsStackhashPlaying(effectNameHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2D4F9C852CE8A253 | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxIsTagPlaying(effectName: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9B8D5D4CB8AF58B3 | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxPlayTag(effectNameHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x3A9A281FF71249E9 | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxPlayTimed(effectName: string, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5199405EABFBD7F0 | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxPreloadPostfx(effectName: string): void;
/**
 * No comment provided
 *
 * Hash: 0xF3E039322BFBD4D8 | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxPreloadPostfxByStackhash(effectNameHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x63011D0C7C6519E0 | Since: 1311 | API-Set: unknown
 */
export declare function animpostfxSetPostfxColor(effectName: string, red: number, green: number, blue: number, alpha: number): void;
/**
 * Health Core Effect Filter Potency: p1 = 1
 * Stamina Core Effect Filter Potency: p1 = 2
 * Multiple Core Effect Filter Potency: p1 = 3
 *
 * Hash: 0xF972F0AB16DC5260 | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxSetPotency(effectName: string, potency: number): void;
/**
 * must be called after ANIMPOSTFX_PLAY, strength 0.0f - 1.0f
 *
 * Hash: 0xCAB4DD2D5B2B7246 | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxSetStrength(effectName: string, strength: number): void;
/**
 * No comment provided
 *
 * Hash: 0x37D7BDBA89F13959 | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxSetToUnload(effectName: string): void;
/**
 * No comment provided
 *
 * Hash: 0xEDA5CBECF56E1386 | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxStopStackhashPostfx(effectNameHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xAD74C22A541AB987 | Since: 1207 | API-Set: unknown
 */
export declare function animpostfxStopTag(effectName: string): void;
/**
 * No comment provided
 *
 * Hash: 0x50C14328119E1DD1 | Since: 1207 | API-Set: unknown
 */
export declare function blockPickupObjectLight(pickupObject: number | IObject, toggle: boolean): void;
/**
 * p1: 0.3f in R* Scripts
 *
 * Hash: 0xB9C92616929CC25D | Since: 1207 | API-Set: unknown
 */
export declare function bloodTrailForWaypoint(waypointRecording: string): void;
/**
 * No comment provided
 *
 * Hash: 0x62B9F9A1272AED80 | Since: 1207 | API-Set: unknown
 */
export declare function changePhotoModeContrast(value: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC8D0611D9A0CF5D3 | Since: 1207 | API-Set: unknown
 */
export declare function changePhotoModeExposure(value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3D084D5568FB4028 | Since: 1207 | API-Set: unknown
 */
export declare function createSwatchTextureDict(slots: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDAD7FB8402651654 | Since: 1207 | API-Set: unknown
 */
export declare function destroySwatchTextureDict(): void;
/**
 * Only used in guama1 R* Script
 * Disables lod/distant lights when BOOL is set to true
 *
 * Hash: 0xCD284E2F6AC27EE9 | Since: 1207 | API-Set: unknown
 */
export declare function disableFarArtificialLights(disable: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xDD0BC0EDCB2162F6 | Since: 1207 | API-Set: unknown
 */
export declare function disableStaticVegModifier(p0: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x4C11CCACB7C02B6E | Since: 1207 | API-Set: unknown
 */
export declare function doesCheckpointHaveFx(checkpoint: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDFEA23EC90113657 | Since: 1207 | API-Set: unknown
 */
export declare function enableStaticVegModifier(p0: number | string): void;
/**
 * Example:
 * local hash = GetHashKey("CLOTHING_ITEM_M_EYES_001_TINT_001")
 * _GENERATE_SWATCH_TEXTURE(0, hash, 0, true)
 * metapedType: see 0xEC9A1261BF0CE510
 *
 * Hash: 0x160921255327C591 | Since: 1207 | API-Set: unknown
 */
export declare function generateSwatchTexture(slotId: number, componentHash: number | string, metapedType: number): void;
/**
 * Example: https://pastebin.com/tTgpER9A
 *
 * Hash: 0x646ED1A1D28487DF | Since: 1207 | API-Set: unknown
 */
export declare function generateSwatchTextureDirectly(slot: number): void;
/**
 * No comment provided
 *
 * Hash: 0x78C56B8A7B1D000C | Since: 1207 | API-Set: unknown
 */
export declare function getCurrentNumberOfLocalPhotos(): number;
/**
 * No comment provided
 *
 * Hash: 0xE8A8378BF651079C | Since: 1207 | API-Set: unknown
 */
export declare function getEntityMaskLayers(entity: number | IEntity): [boolean, number, number, number, number];
/**
 * Always returns 200.
 *
 * Hash: 0x8E587FCD30E05592 | Since: 1207 | API-Set: unknown
 */
export declare function getMaxNumberOfLocalPhotos(): number;
/**
 * _GET_C* - _GET_E*
 *
 * Hash: 0x25CA89B2A39DCC69 | Since: 1207 | API-Set: unknown
 */
export declare function getModifiedVisibilityDistance(): number;
/**
 * No comment provided
 *
 * Hash: 0x98F4154989B81EC6 | Since: 1207 | API-Set: unknown
 */
export declare function getPhotoModeContrast(): number;
/**
 * No comment provided
 *
 * Hash: 0x06C0D8BB6B04A709 | Since: 1207 | API-Set: unknown
 */
export declare function getPhotoModeExposure(): number;
/**
 * Returns proxyInteriorIndex
 *
 * Hash: 0x5D1C5D8E62E8EE1C | Since: 1207 | API-Set: unknown
 */
export declare function getProxyInteriorIndex(interiorId: number): number;
/**
 * No comment provided
 *
 * Hash: 0x113857D66A9CABE6 | Since: 1207 | API-Set: unknown
 */
export declare function isProxyInteriorIndexArtificialLightsEnabled(proxyInteriorIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDE9BAD3292AA6D5E | Since: 1207 | API-Set: unknown
 */
export declare function isStaticVegModifierEnabled(p0: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA2A51869BDED733B | Since: 1207 | API-Set: unknown
 */
export declare function isTextureInDict(txdHash: number | string, dict: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF2FDDCC8C6BAE1B3 | Since: 1207 | API-Set: unknown
 */
export declare function isTrackedPointValid(point: number): boolean;
/**
 * Returns iNumPixels, iPixelsVisible
 *
 * Hash: 0xDFE332A5DA6FE7C9 | Since: 1207 | API-Set: unknown
 */
export declare function numPixelsVisibleAtTrackedPoint(iTrackedPoint: number): number;
/**
 * No comment provided
 *
 * Hash: 0xC2B8164C3BE871A4 | Since: 1207 | API-Set: unknown
 */
export declare function pedshotFinishCleanupData(): void;
/**
 * No comment provided
 *
 * Hash: 0xD9C24F53631F2372 | Since: 1207 | API-Set: unknown
 */
export declare function pedshotGeneratePersonaPhoto(texture: string, ped: number | IPed, playerSlot: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x55285F885F662169 | Since: 1207 | API-Set: unknown
 */
export declare function pedshotInitCleanupData(): void;
/**
 * No comment provided
 *
 * Hash: 0x3E2FDDBE435A8787 | Since: 1207 | API-Set: unknown
 */
export declare function pedshotPreviousPersonaPhotoDataCleanup(): void;
/**
 * No comment provided
 *
 * Hash: 0x196D3ACBEBA4A44B | Since: 1207 | API-Set: unknown
 */
export declare function pedshotSetPersonaPhotoType(personaPhotoLocalCacheType: number): void;
/**
 * No comment provided
 *
 * Hash: 0x56A786E87FF53478 | Since: 1207 | API-Set: unknown
 */
export declare function removeEntityFromEntityMask(entity: number | IEntity): void;
/**
 * Used for script function RPG_GLOBAL_STATS__PRIVATE__DEACTIVATE_STAT_FLAG - Inspiration Aura unequip
 *
 * Hash: 0xAF4D239B8903FCBE | Since: 1207 | API-Set: unknown
 */
export declare function resetEntityAura(): void;
/**
 * No comment provided
 *
 * Hash: 0xC332C91388F5580B | Since: 1207 | API-Set: unknown
 */
export declare function setCloudHeight(height: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB8C984C0D47F4F07 | Since: 1207 | API-Set: unknown
 */
export declare function setCloudLayer(x: number, y: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFE7966DF01452F32 | Since: 1207 | API-Set: unknown
 */
export declare function setCloudNoise(pos: Vector3): void;
/**
 * Only used in finale2, smuggler2, winter4
 * _SET_CLOUD_A* - _SET_CLOUD_H*
 *
 * Hash: 0x10C1767B93257480 | Since: 1207 | API-Set: unknown
 */
export declare function setCloudPosition(pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x9937FACBBF267244 | Since: 1207 | API-Set: unknown
 */
export declare function setDistrictPhotoTakenStat(): void;
/**
 * Used for script function RPG_GLOBAL_STATS__PRIVATE__ACTIVATE_STAT_FLAG - Quite and Inspiration Aura equip
 * Params: 0f, 2f, 2f
 *
 * Hash: 0x249CD6B7285536F2 | Since: 1207 | API-Set: unknown
 */
export declare function setEntityAura(): void;
/**
 * No comment provided
 *
 * Hash: 0xE92012611461A42A | Since: 1207 | API-Set: unknown
 */
export declare function setEntityMaskLayers(entity: number | IEntity): [number, number, number, number];
/**
 * Only used in guama1 R* SP Script while spawning the ship
 * _SET_ENTITY_QUATERNION_* - SET_ENTITY_RENDER_*
 *
 * Hash: 0xC38B4952B728397A | Since: 1207 | API-Set: unknown
 */
export declare function setEntityRenderGuarmaShip(vehicle: number | IVehicle, toggle: boolean): void;
/**
 * https://gfycat.com/meagerfaireyra
 *
 * Hash: 0x6EC2A67962296F49 | Since: 1207 | API-Set: unknown
 */
export declare function setLightsColorForEntity(entity: number | IEntity, red: number, green: number, blue: number): void;
/**
 * No comment provided
 *
 * Hash: 0x07C0F87AAC57F2E4 | Since: 1207 | API-Set: unknown
 */
export declare function setLightsIntensityForEntity(entity: number | IEntity, intensity: number): void;
/**
 * type must be less than or equal to 20
 *
 * Hash: 0xAB72C67163DC4DB4 | Since: 1207 | API-Set: unknown
 */
export declare function setLightsTypeForEntity(entity: number | IEntity, _type: number): void;
/**
 * _SET_PARTICLE_FX_LOOPED_FA* - _SET_PARTICLE_FX_LOOPED_OF*
 *
 * Hash: 0x9DDC222D85D5AF2A | Since: 1207 | API-Set: unknown
 */
export declare function setParticleFxLoopedUpdateDistantSmoke(ptfxHandle: number, scalar: number): void;
/**
 * No comment provided
 *
 * Hash: 0x56C392C2BD78B024 | Since: 1311 | API-Set: unknown
 */
export declare function setParticleFxNonLoopedEmitterScale(): void;
/**
 * Enables/disables a kind of 'shiny' effect on metals.
 *
 * Hash: 0x72E30372E7CC4415 | Since: 1207 | API-Set: unknown
 */
export declare function setPearlescentFxEnabled(_object: number | IObject, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xFA91736933AB3D93 | Since: 1207 | API-Set: unknown
 */
export declare function setPhotoInPhotomodeStat(): void;
/**
 * No comment provided
 *
 * Hash: 0x5CD6A2CCE5087161 | Since: 1311 | API-Set: unknown
 */
export declare function setPhotoModeExposureLocked(lock: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8B3296278328B5EB | Since: 1207 | API-Set: unknown
 */
export declare function setPhotoOverlayEffectStat(): void;
/**
 * No comment provided
 *
 * Hash: 0x2705D18C11B61046 | Since: 1207 | API-Set: unknown
 */
export declare function setPhotoSelfStat(): void;
/**
 * No comment provided
 *
 * Hash: 0x8E6AFF353C09652E | Since: 1207 | API-Set: unknown
 */
export declare function setPhotoStudioStat(): void;
/**
 * No comment provided
 *
 * Hash: 0x75D568607909333E | Since: 1232 | API-Set: unknown
 */
export declare function setPlayerAppearInPhoto(player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0x564837D4A9EDE296 | Since: 1207 | API-Set: unknown
 */
export declare function setPosseIdForPhoto(posseId: any): void;
/**
 * state: false disables artificial interior light sources for specific proxyInteriorIndex
 *
 * Hash: 0xBFCB17895BB99E4E | Since: 1207 | API-Set: unknown
 */
export declare function setProxyInteriorIndexArtificialLightsState(proxyInteriorIndex: number, state: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xD1031B83AC093BC7 | Since: 1207 | API-Set: unknown
 */
export declare function setRegionPhotoTakenStat(): void;
/**
 * No comment provided
 *
 * Hash: 0x6E8EB45A4F4460EB | Since: 1207 | API-Set: unknown
 */
export declare function setSniperGlintsEnabled(enabled: boolean): void;
/**
 * enum class eSnowCoverageType
 * {
 * Primary,
 * Secondary,
 * Xmas,
 * XmasSecondary // since b1232
 * };
 *
 * Hash: 0xF02A9C330BBFC5C7 | Since: 1207 | API-Set: unknown
 */
export declare function setSnowCoverageType(_type: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8952E857696B8A79 | Since: 1207 | API-Set: unknown
 */
export declare function setStatePhotoTakenStat(): void;
/**
 * No comment provided
 *
 * Hash: 0xC695870B8A149B96 | Since: 1207 | API-Set: unknown
 */
export declare function startParticleFxNonLoopedOnPedBone2(effectName: string, ped: number | IPed, offsetX: number, offsetY: number, offsetZ: number, rot: Vector3, boneIndex: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;
/**
 * Resets the exposure to the value when exposure lock was enabled
 *
 * Hash: 0x9229ED770975BD9E | Since: 1311 | API-Set: unknown
 */
export declare function updatePhotoModeExposure(): void;
