import { Vector3 } from '@risinglife/redm-shared';
/**
 * Creates a volume where water effects do not apply.
 * Useful for preventing water collisions from flooding areas underneath them.
 * This has no effect on waterquads, only water created from drawables and collisions.
 * Don't create volumes when your local ped is swimming (e.g. use IS_PED_SWIMMING in your scripts before you call this)
 *
 * Hash: 0xEB1C6DD
 */
export declare function createDryVolume(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): number;
/**
 * No comment provided
 *
 * Hash: 0x14088095
 */
export declare function getQuadAlpha(waterQuad: number): [boolean, number, number, number, number];
/**
 * This native returns the index of a water quad if the given point is inside its bounds.
 *
 * *If you also want to check for water level, check out [`GetWaterQuadAtCoords_3d`](#\_0xF8E03DB8)*
 *
 * Hash: 0x17321452
 */
export declare function getQuadAtCoords(x: number, y: number): number;
/**
 * This alternative implementation of [`GetWaterQuadAtCoords`](#\_0x17321452) also checks the height of the water level.
 *
 * Hash: 0xF8E03DB8
 */
export declare function getQuadAtCoords3d(pos: Vector3): number;
/**
 * No comment provided
 *
 * Hash: 0x42E9A06A
 */
export declare function getQuadBounds(waterQuad: number): [boolean, number, number, number, number];
/**
 * No comment provided
 *
 * Hash: 0xB1884159
 */
export declare function getQuadCount(): number;
/**
 * No comment provided
 *
 * Hash: 0x22EA3BD8
 */
export declare function getQuadHasLimitedDepth(waterQuad: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x1DEDBD77
 */
export declare function getQuadIsInvisible(waterQuad: number): [boolean, number];
/**
 * *level is defined as "z" in water.xml*
 *
 * Hash: 0x6523816B
 */
export declare function getQuadLevel(waterQuad: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x6F4ACBA
 */
export declare function getQuadNoStencil(waterQuad: number): [boolean, number];
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
export declare function getQuadType(waterQuad: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x865139A3
 */
export declare function getWaveQuadAmplitude(waveQuad: number): [boolean, number];
/**
 * This native returns the index of a wave quad if the given point is inside its bounds.
 *
 * Hash: 0x3F5A61A7
 */
export declare function getWaveQuadAtCoords(x: number, y: number): number;
/**
 * No comment provided
 *
 * Hash: 0xF86136DB
 */
export declare function getWaveQuadBounds(waveQuad: number): [boolean, number, number, number, number];
/**
 * No comment provided
 *
 * Hash: 0x9250C76
 */
export declare function getWaveQuadCount(): number;
/**
 * No comment provided
 *
 * Hash: 0xCCE49A1C
 */
export declare function getWaveQuadDirection(waveQuad: number): [boolean, number, number];
/**
 * Define the xml in a resources fxmanifest, under the file(s) section.
 *
 * Hash: 0xF5102568
 */
export declare function loadFromPath(resourceName: string, fileName: string): boolean;
/**
 * Removes a dry volume from the game session.
 * See CREATE_DRY_VOLUME for more info
 *
 * Hash: 0x7BCAA6E7
 */
export declare function removeDryVolume(handle: number): void;
/**
 * Resets the water to the games default water.xml.
 *
 * Hash: 0x1DA4791
 */
export declare function reset(): void;
/**
 * Sets world clip boundaries for water quads file (water.xml, water_heistisland.xml)
 * Used internally by LOAD_GLOBAL_WATER_FILE
 *
 * Hash: 0x9FCD2EE6
 */
export declare function setAreaClipRect(minX: number, minY: number, maxX: number, maxY: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF49797EB
 */
export declare function setQuadAlpha(waterQuad: number, a0: number, a1: number, a2: number, a3: number): boolean;
/**
 * This native allows you to update the bounds of a specified water quad index.
 *
 * Hash: 0x80AD144C
 */
export declare function setQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD1FDCFC1
 */
export declare function setQuadHasLimitedDepth(waterQuad: number, hasLimitedDepth: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA387D917
 */
export declare function setQuadIsInvisible(waterQuad: number, isInvisible: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6292F7A8
 */
export declare function setQuadLevel(waterQuad: number, level: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC3FF42FF
 */
export declare function setQuadNoStencil(waterQuad: number, noStencil: boolean): boolean;
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
export declare function setQuadType(waterQuad: number, _type: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE4174B7B
 */
export declare function setWaveQuadAmplitude(waveQuad: number, amplitude: number): boolean;
/**
 * This native allows you to update the bounds of a specified water quad index.
 *
 * Hash: 0x1FCC1FAF
 */
export declare function setWaveQuadBounds(waveQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean;
/**
 * directionX/Y should be constrained between -1.0 and 1.0
 * A positive value will create the wave starting at min and rolling towards max
 * A negative value will create the wave starting at max and rolling towards min
 * Applying both values allows you to make diagonal waves
 *
 * Hash: 0xFC9341A3
 */
export declare function setWaveQuadDirection(waveQuad: number, directionX: number, directionY: number): boolean;
