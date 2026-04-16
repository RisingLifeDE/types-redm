import { Vector3, IEntity } from '@risinglife/redm-shared';
/**
 * Loads a minimap overlay from a GFx file in the current resource.
 *
 * If you need to control the depth of overlay use [`ADD_MINIMAP_OVERLAY_WITH_DEPTH`](#\_0xED0935B5).
 *
 * Hash: 0x4AFD2499
 */
export function addMinimapOverlay(name) {
    return AddMinimapOverlay(name);
}
/**
 * Loads a minimap overlay from a GFx file in the current resource.
 *
 * Hash: 0xED0935B5
 */
export function addMinimapOverlayWithDepth(name, depth) {
    return AddMinimapOverlayWithDepth(name, depth);
}
/**
 * Experimental natives, please do not use in a live environment.
 *
 * Hash: 0xA66F8F75
 */
export function addReplaceTexture(origTxd, origTxn, newTxd, newTxn) {
    AddReplaceTexture(origTxd, origTxn, newTxd, newTxn);
}
/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 *
 * Hash: 0x4C89C0ED
 */
export function callMinimapScaleformFunction(miniMap, fnName) {
    return CallMinimapScaleformFunction(miniMap, fnName);
}
/**
 * Commits the backing pixels to the specified runtime texture.
 *
 * Hash: 0x19D81F4E
 */
export function commitRuntimeTexture(tex) {
    CommitRuntimeTexture(tex);
}
/**
 * Creates a blank runtime texture.
 *
 * Hash: 0xFEC3766D
 */
export function createRuntimeTexture(txd, txn, width, height) {
    return CreateRuntimeTexture(txd, txn, width, height);
}
/**
 * Creates a runtime texture from a DUI handle.
 *
 * Hash: 0xB135472B
 */
export function createRuntimeTextureFromDuiHandle(txd, txn, duiHandle) {
    return CreateRuntimeTextureFromDuiHandle(txd, txn, duiHandle);
}
/**
 * Creates a runtime texture from the specified file in the current resource or a base64 data URL.
 *
 * Hash: 0x786D8BC3
 */
export function createRuntimeTextureFromImage(txd, txn, fileName) {
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
export function createRuntimeTxd(name) {
    return CreateRuntimeTxd(name);
}
/**
 * Allows drawing advanced light effects, known as coronas, which support flares, volumetric lighting, and customizable glow properties.
 *
 * Hash: 0xFF44780E
 */
export function drawCorona(pos, size, red, green, blue, alpha, intensity, zBias, dirX, dirY, dirZ, viewThreshold, innerAngle, outerAngle, flags) {
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
export function drawGizmo(matrixPtr, id) {
    return DrawGizmo(matrixPtr, id);
}
/**
 * Draw a glow sphere this frame. Up to 256 per single frame.
 *
 * Hash: 0xBD25EC89
 */
export function drawGlowSphere(pos, radius, colorR, colorG, colorB, intensity, invert, marker) {
    DrawGlowSphere(pos.x, pos.y, pos.z, radius, colorR, colorG, colorB, intensity, invert, marker);
}
/**
 * Like DRAW_RECT, but it's a line.
 *
 * Hash: 0xB856A90
 */
export function drawLine2d(x1, y1, x2, y2, width, r, g, b, a) {
    DrawLine2d(x1, y1, x2, y2, width, r, g, b, a);
}
/**
 * DRAW_RECT, but with a rotation. Seems to be broken.
 *
 * Hash: 0xEC37C168
 */
export function drawRectRotated(x, y, width, height, rotation, r, g, b, a) {
    DrawRectRotated(x, y, width, height, rotation, r, g, b, a);
}
/**
 * Forces the game snow pass to render.
 *
 * Hash: 0xE6E16170
 */
export function forceSnowPass(enabled) {
    ForceSnowPass(enabled);
}
/**
 * Returns the world position the pointer is hovering on the pause map.
 *
 * Hash: 0xE5AF7A82
 */
export function getPauseMapPointerWorldPosition() {
    return new Vector3(GetPauseMapPointerWorldPosition());
}
/**
 * Gets the height of the specified runtime texture.
 *
 * Hash: 0x3574AACE
 */
export function getRuntimeTextureHeight(tex) {
    return GetRuntimeTextureHeight(tex);
}
/**
 * Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.
 *
 * Hash: 0xCA0A085F
 */
export function getRuntimeTexturePitch(tex) {
    return GetRuntimeTexturePitch(tex);
}
/**
 * Gets the width of the specified runtime texture.
 *
 * Hash: 0xC9F55558
 */
export function getRuntimeTextureWidth(tex) {
    return GetRuntimeTextureWidth(tex);
}
/**
 * Returns whether or not the specific minimap overlay has loaded.
 *
 * Hash: 0xF7535F32
 */
export function hasMinimapOverlayLoaded(id) {
    return HasMinimapOverlayLoaded(id);
}
/**
 * Experimental natives, please do not use in a live environment.
 *
 * Hash: 0xA896B20A
 */
export function removeReplaceTexture(origTxd, origTxn) {
    RemoveReplaceTexture(origTxd, origTxn);
}
/**
 * This function undoes changes made by [`SET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE`](#\_0x68DFF2DD), restoring the original outline rendering behavior. The default render technique group is `unlit`.
 *
 * Hash: 0x8EB6EC38
 */
export function resetEntityDrawOutlineRenderTechnique() {
    ResetEntityDrawOutlineRenderTechnique();
}
/**
 * Draws an outline around a given entity. This function supports SDK infrastructure and is not intended to be used directly from your code.
 *
 * Hash: 0x76180407
 */
export function setEntityDrawOutline(entity, enabled) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    SetEntityDrawOutline(_entity, enabled);
}
/**
 * Sets color for entity outline. `255, 0, 255, 255` by default.
 *
 * Hash: 0xB41A56C2
 */
export function setEntityDrawOutlineColor(red, green, blue, alpha) {
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
export function setEntityDrawOutlineRenderTechnique(techniqueGroup) {
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
export function setEntityDrawOutlineShader(shader) {
    SetEntityDrawOutlineShader(shader);
}
/**
 * This completely disables rendering of fog volumes (vfxfogvolumeinfo.ymt).
 *
 * Hash: 0xFBC64DA3
 */
export function setFogVolumeRenderDisabled(state) {
    SetFogVolumeRenderDisabled(state);
}
/**
 * Sets the type for the minimap blip clipping object to be either rectangular or rounded.
 *
 * Hash: 0xB8B4490C
 */
export function setMinimapClipType(_type) {
    SetMinimapClipType(_type);
}
/**
 * Overrides the minimap component data (from `common:/data/ui/frontend.xml`) for a specified component.
 *
 * Hash: 0x3E882B23
 */
export function setMinimapComponentPosition(name, alignX, alignY, posX, posY, sizeX, sizeY) {
    SetMinimapComponentPosition(name, alignX, alignY, posX, posY, sizeX, sizeY);
}
/**
 * Sets the display info for a minimap overlay.
 *
 * Hash: 0x6A48B3CA
 */
export function setMinimapOverlayDisplay(miniMap, x, y, xScale, yScale, alpha) {
    SetMinimapOverlayDisplay(miniMap, x, y, xScale, yScale, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0x3963D527
 */
export function setRuntimeTextureArgbData(tex, buffer, length) {
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
export function setRuntimeTextureImage(tex, fileName) {
    return SetRuntimeTextureImage(tex, fileName);
}
/**
 * Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.
 *
 * Hash: 0xAB65ACEE
 */
export function setRuntimeTexturePixel(tex, x, y, r, g, b, a) {
    SetRuntimeTexturePixel(tex, x, y, r, g, b, a);
}
/**
 * Modifies the radius scale used in the simulation of wet cloth physics.
 * This affects how cloth behaves when wet, changing how it sticks or reacts to movement.
 *
 * Hash: 0xF1BD2CEF
 */
export function setWetClothPinRadiusScale(scale) {
    SetWetClothPinRadiusScale(scale);
}
/**
 * Resets the screen's draw-origin which was changed by the function [`SET_DRAW_ORIGIN`](#\_0xE10198D5) back to `x=0, y=0`. See [`SET_DRAW_ORIGIN`](#\_0xE10198D5) for further information.
 *
 * Hash: 0xDD76B263
 */
export function clearDrawOrigin() {
    ClearDrawOrigin();
}
/**
 * In compare to `0x31DC8D3F216D8509` return true if texture its created when `0x31DC8D3F216D8509` return true if you put there any id in valid range
 *
 * Hash: 0x8B25BC20
 */
export function doesTextureExist(textureId) {
    return DoesTextureExist(textureId);
}
/**
 * No comment provided
 *
 * Hash: 0xCD4D9DD5
 */
export function drawBox(x1, y1, z1, x2, y2, z2, red, green, blue, alpha) {
    DrawBox(x1, y1, z1, x2, y2, z2, red, green, blue, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0xB3426BCC
 */
export function drawLine(x1, y1, z1, x2, y2, z2, red, green, blue, alpha) {
    DrawLine(x1, y1, z1, x2, y2, z2, red, green, blue, alpha);
}
/**
 * No comment provided
 *
 * Hash: 0xABD19253
 */
export function drawPoly(x1, y1, z1, x2, y2, z2, x3, y3, z3, red, green, blue, alpha) {
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
export function getAspectRatio() {
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
export function getCurrentScreenResolution() {
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
export function removeTexture(textureId) {
    RemoveTexture(textureId);
}
/**
 * Sets the on-screen drawing origin for draw-functions in world coordinates.
 *
 * The effect can be reset by calling [`CLEAR_DRAW_ORIGIN`](#\_0xDD76B263) and is limited to 32 different origins each frame.
 *
 * Hash: 0xE10198D5
 */
export function setDrawOrigin(pos, is2d) {
    SetDrawOrigin(pos.x, pos.y, pos.z, is2d);
}
/**
 * Sets the text font for the current text drawing command.
 *
 * Hash: 0xADA9255D
 */
export function setTextFontForCurrentCommand(fontId) {
    SetTextFontForCurrentCommand(fontId);
}
/**
 * No comment provided
 *
 * Hash: 0x68CDFA60
 */
export function setTextJustification(justifyType) {
    SetTextJustification(justifyType);
}
/**
 * No comment provided
 *
 * Hash: 0x6F60AB54
 */
export function setTextWrap(start, end) {
    SetTextWrap(start, end);
}
/**
 * A getter for [SET_VISUAL_SETTING_FLOAT](#\_0xD1D31681).
 *
 * Hash: 0x15346B4D
 */
export function getVisualSettingFloat(name) {
    return GetVisualSettingFloat(name);
}
/**
 * Overrides a floating point value from `visualsettings.dat` temporarily.
 *
 * Hash: 0xD1D31681
 */
export function setVisualSettingFloat(name, value) {
    SetVisualSettingFloat(name, value);
}
