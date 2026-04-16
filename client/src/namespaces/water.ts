import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

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

