import { Vector3, IEntity } from '@risinglife/redm-shared';
/**
 * Loads a minimap overlay from a GFx file in the current resource.
 *
 * If you need to control the depth of overlay use [`ADD_MINIMAP_OVERLAY_WITH_DEPTH`](#\_0xED0935B5).
 *
 * Hash: 0x4AFD2499
 */
export declare function addMinimapOverlay(name: string): number;
/**
 * Loads a minimap overlay from a GFx file in the current resource.
 *
 * Hash: 0xED0935B5
 */
export declare function addMinimapOverlayWithDepth(name: string, depth: number): number;
/**
 * Experimental natives, please do not use in a live environment.
 *
 * Hash: 0xA66F8F75
 */
export declare function addReplaceTexture(origTxd: string, origTxn: string, newTxd: string, newTxn: string): void;
/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 *
 * Hash: 0x4C89C0ED
 */
export declare function callMinimapScaleformFunction(miniMap: number, fnName: string): boolean;
/**
 * Commits the backing pixels to the specified runtime texture.
 *
 * Hash: 0x19D81F4E
 */
export declare function commitRuntimeTexture(tex: number): void;
/**
 * Creates a blank runtime texture.
 *
 * Hash: 0xFEC3766D
 */
export declare function createRuntimeTexture(txd: number, txn: string, width: number, height: number): number;
/**
 * Creates a runtime texture from a DUI handle.
 *
 * Hash: 0xB135472B
 */
export declare function createRuntimeTextureFromDuiHandle(txd: number, txn: string, duiHandle: string): number;
/**
 * Creates a runtime texture from the specified file in the current resource or a base64 data URL.
 *
 * Hash: 0x786D8BC3
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
 * Hash: 0x1F3AC778
 */
export declare function createRuntimeTxd(name: string): number;
/**
 * Allows drawing advanced light effects, known as coronas, which support flares, volumetric lighting, and customizable glow properties.
 *
 * Hash: 0xFF44780E
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
 * Hash: 0xEB2EDCA2
 */
export declare function drawGizmo(matrixPtr: number, id: string): boolean;
/**
 * Draw a glow sphere this frame. Up to 256 per single frame.
 *
 * Hash: 0xBD25EC89
 */
export declare function drawGlowSphere(pos: Vector3, radius: number, colorR: number, colorG: number, colorB: number, intensity: number, invert: boolean, marker: boolean): void;
/**
 * Like DRAW_RECT, but it's a line.
 *
 * Hash: 0xB856A90
 */
export declare function drawLine2d(x1: number, y1: number, x2: number, y2: number, width: number, r: number, g: number, b: number, a: number): void;
/**
 * DRAW_RECT, but with a rotation. Seems to be broken.
 *
 * Hash: 0xEC37C168
 */
export declare function drawRectRotated(x: number, y: number, width: number, height: number, rotation: number, r: number, g: number, b: number, a: number): void;
/**
 * Forces the game snow pass to render.
 *
 * Hash: 0xE6E16170
 */
export declare function forceSnowPass(enabled: boolean): void;
/**
 * Returns the world position the pointer is hovering on the pause map.
 *
 * Hash: 0xE5AF7A82
 */
export declare function getPauseMapPointerWorldPosition(): Vector3;
/**
 * Gets the height of the specified runtime texture.
 *
 * Hash: 0x3574AACE
 */
export declare function getRuntimeTextureHeight(tex: number): number;
/**
 * Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.
 *
 * Hash: 0xCA0A085F
 */
export declare function getRuntimeTexturePitch(tex: number): number;
/**
 * Gets the width of the specified runtime texture.
 *
 * Hash: 0xC9F55558
 */
export declare function getRuntimeTextureWidth(tex: number): number;
/**
 * Returns whether or not the specific minimap overlay has loaded.
 *
 * Hash: 0xF7535F32
 */
export declare function hasMinimapOverlayLoaded(id: number): boolean;
/**
 * Experimental natives, please do not use in a live environment.
 *
 * Hash: 0xA896B20A
 */
export declare function removeReplaceTexture(origTxd: string, origTxn: string): void;
/**
 * This function undoes changes made by [`SET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE`](#\_0x68DFF2DD), restoring the original outline rendering behavior. The default render technique group is `unlit`.
 *
 * Hash: 0x8EB6EC38
 */
export declare function resetEntityDrawOutlineRenderTechnique(): void;
/**
 * Draws an outline around a given entity. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x76180407
 */
export declare function setEntityDrawOutline(entity: number | IEntity, enabled: boolean): void;
/**
 * Sets color for entity outline. `255, 0, 255, 255` by default.
 *
 * Hash: 0xB41A56C2
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
 * Hash: 0x68DFF2DD
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
 * Hash: 0x5261A01A
 */
export declare function setEntityDrawOutlineShader(shader: number): void;
/**
 * This completely disables rendering of fog volumes (vfxfogvolumeinfo.ymt).
 *
 * Hash: 0xFBC64DA3
 */
export declare function setFogVolumeRenderDisabled(state: boolean): void;
/**
 * Sets the type for the minimap blip clipping object to be either rectangular or rounded.
 *
 * Hash: 0xB8B4490C
 */
export declare function setMinimapClipType(_type: number): void;
/**
 * Overrides the minimap component data (from `common:/data/ui/frontend.xml`) for a specified component.
 *
 * Hash: 0x3E882B23
 */
export declare function setMinimapComponentPosition(name: string, alignX: string, alignY: string, posX: number, posY: number, sizeX: number, sizeY: number): void;
/**
 * Sets the display info for a minimap overlay.
 *
 * Hash: 0x6A48B3CA
 */
export declare function setMinimapOverlayDisplay(miniMap: number, x: number, y: number, xScale: number, yScale: number, alpha: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3963D527
 */
export declare function setRuntimeTextureArgbData(tex: number, buffer: string, length: number): boolean;
/**
 * Replaces the pixel data in a runtime texture with the image data from a file in the current resource, or a data URL.
 *
 * If the bitmap is a different size compared to the existing texture, it will be resampled.
 *
 * This command may end up executed asynchronously, and only update the texture data at a later time.
 *
 * Hash: 0x28FC4ECB
 */
export declare function setRuntimeTextureImage(tex: number, fileName: string): boolean;
/**
 * Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.
 *
 * Hash: 0xAB65ACEE
 */
export declare function setRuntimeTexturePixel(tex: number, x: number, y: number, r: number, g: number, b: number, a: number): void;
/**
 * Modifies the radius scale used in the simulation of wet cloth physics.
 * This affects how cloth behaves when wet, changing how it sticks or reacts to movement.
 *
 * Hash: 0xF1BD2CEF
 */
export declare function setWetClothPinRadiusScale(scale: number): void;
/**
 * Resets the screen's draw-origin which was changed by the function [`SET_DRAW_ORIGIN`](#\_0xE10198D5) back to `x=0, y=0`. See [`SET_DRAW_ORIGIN`](#\_0xE10198D5) for further information.
 *
 * Hash: 0xDD76B263
 */
export declare function clearDrawOrigin(): void;
/**
 * In compare to `0x31DC8D3F216D8509` return true if texture its created when `0x31DC8D3F216D8509` return true if you put there any id in valid range
 *
 * Hash: 0x8B25BC20
 */
export declare function doesTextureExist(textureId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCD4D9DD5
 */
export declare function drawBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB3426BCC
 */
export declare function drawLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;
/**
 * No comment provided
 *
 * Hash: 0xABD19253
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
 * Hash: 0x2CA8F641
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
 * Hash: 0x337F0116
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
 * Hash: 0x1582C7F2
 */
export declare function removeTexture(textureId: number): void;
/**
 * Sets the on-screen drawing origin for draw-functions in world coordinates.
 *
 * The effect can be reset by calling [`CLEAR_DRAW_ORIGIN`](#\_0xDD76B263) and is limited to 32 different origins each frame.
 *
 * Hash: 0xE10198D5
 */
export declare function setDrawOrigin(pos: Vector3, is2d: boolean): void;
/**
 * Sets the text font for the current text drawing command.
 *
 * Hash: 0xADA9255D
 */
export declare function setTextFontForCurrentCommand(fontId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x68CDFA60
 */
export declare function setTextJustification(justifyType: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6F60AB54
 */
export declare function setTextWrap(start: number, end: number): void;
/**
 * A getter for [SET_VISUAL_SETTING_FLOAT](#\_0xD1D31681).
 *
 * Hash: 0x15346B4D
 */
export declare function getVisualSettingFloat(name: string): number;
/**
 * Overrides a floating point value from `visualsettings.dat` temporarily.
 *
 * Hash: 0xD1D31681
 */
export declare function setVisualSettingFloat(name: string, value: number): void;
