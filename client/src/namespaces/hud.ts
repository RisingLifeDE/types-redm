import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

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

