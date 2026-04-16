import { Vector3 } from '@risinglife/redm-shared';
/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 *
 * Hash: 0xCD949E20
 */
export declare function getComponentAlign(id: number): [number, number];
/**
 * No comment provided
 *
 * Hash: 0xA91866BC
 */
export declare function getComponentName(id: number): string;
/**
 * No comment provided
 *
 * Hash: 0x12217D33
 */
export declare function getComponentSize(id: number): Vector3;
/**
 * Returns the zoom level data by index from mapzoomdata.meta file.
 *
 * Hash: 0x1363A998
 */
export declare function getMapZoomDataLevel(index: number): [boolean, number, number, number, number, number];
/**
 * Returns true if the minimap is currently expanded. False if it's the normal minimap state.
 * Use [`IsBigmapFull`](#\_0x66EE14B2) to check if the full map is currently revealed on the minimap.
 *
 * Hash: 0xFFF65C63
 */
export declare function isBigmapActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x66EE14B2
 */
export declare function isBigmapFull(): boolean;
/**
 * Resets values from the zoom level data by index to defaults from mapzoomdata.meta.
 *
 * Hash: 0x11A5B7ED
 */
export declare function resetMapZoomDataLevel(index: number): void;
/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 *
 * Hash: 0xEED219F2
 */
export declare function setComponentAlign(id: number, horizontalAlign: number, verticalAlign: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7644A9FA
 */
export declare function setComponentSize(id: number, x: number, y: number): void;
/**
 * Sets values to the zoom level data by index.
 *
 * Hash: 0x447C718E
 */
export declare function setMapZoomDataLevel(index: number, zoomScale: number, zoomSpeed: number, scrollSpeed: number, tilesX: number, tilesY: number): void;
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
export declare function getMinimapType(): number;
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
export declare function setMinimapType(_type: number): void;
