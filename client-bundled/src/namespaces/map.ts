import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * No comment provided
 * 
 * Hash: 0x64C59DD6834FA942 | Since: 1207 | API-Set: unknown
 */
export function addPointToGpsMultiRoute(pos: Vector3): void {
    AddPointToGpsMultiRoute(pos.x, pos.y, pos.z, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x6E6E64788C07D2E0 | Since: 1207 | API-Set: unknown
 */
export function allowSonarBlips(toggle: boolean): void {
    AllowSonarBlips(toggle);
}

/**
 * https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/textures/blips
 * https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/textures/blips_mp
 * 
 * Hash: 0x554D9D53F696D002 | Since: 1207 | API-Set: unknown
 */
export function blipAddForCoords(blipHash: number | string, pos: Vector3): number {
    if (typeof blipHash === 'string') blipHash = GetHashKey(blipHash)
    return BlipAddForCoords(blipHash, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x23F74C2FDA6E7C61 | Since: 1207 | API-Set: unknown
 */
export function blipAddForEntity(blipHash: number | string, entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof blipHash === 'string') blipHash = GetHashKey(blipHash)
    return BlipAddForEntity(blipHash, _entity);
}

/**
 * No comment provided
 * 
 * Hash: 0xA486008892065FB9 | Since: 1207 | API-Set: unknown
 */
export function blipAddForPickupPlacement(blipHash: number | string, pickup: any): number {
    if (typeof blipHash === 'string') blipHash = GetHashKey(blipHash)
    return BlipAddForPickupPlacement(blipHash, pickup);
}

/**
 * No comment provided
 * 
 * Hash: 0x45F13B7E0A15C880 | Since: 1207 | API-Set: unknown
 */
export function blipAddForRadius(blipHash: number | string, pos: Vector3, radius: number): number {
    if (typeof blipHash === 'string') blipHash = GetHashKey(blipHash)
    return BlipAddForRadius(blipHash, pos.x, pos.y, pos.z, radius);
}

/**
 * https://alloc8or.re/rdr3/doc/enums/eBlipModifier.txt
 * https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/blip_modifiers
 * 
 * Old name: _BLIP_SET_MODIFIER
 * 
 * Hash: 0x662D364ABF16DE2F | Since: 1207 | API-Set: unknown
 */
export function blipAddModifier(blip: number | IBlip, modifierHash: number | string): boolean {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    if (typeof modifierHash === 'string') modifierHash = GetHashKey(modifierHash)
    return BlipAddModifier(_blip, modifierHash);
}

/**
 * If modifierHash is 0, ALL modifiers will be removed.
 * 
 * Hash: 0xB059D7BD3D78C16F | Since: 1207 | API-Set: unknown
 */
export function blipRemoveModifier(blip: number | IBlip, modifierHash: number | string): boolean {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    if (typeof modifierHash === 'string') modifierHash = GetHashKey(modifierHash)
    return BlipRemoveModifier(_blip, modifierHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x1EAA5674B4D181C5 | Since: 1207 | API-Set: unknown
 */
export function clearGpsCustomRoute(): void {
    ClearGpsCustomRoute();
}

/**
 * Clears the GPS flags.
 * 
 * Hash: 0x4D3771237C79FF41 | Since: 1207 | API-Set: unknown
 */
export function clearGpsFlags(): void {
    ClearGpsFlags();
}

/**
 * Does the same as SET_GPS_MULTI_ROUTE_RENDER(false);
 * 
 * Hash: 0x9E0AB9AAEE87CE28 | Since: 1207 | API-Set: unknown
 */
export function clearGpsMultiRoute(): void {
    ClearGpsMultiRoute();
}

/**
 * No comment provided
 * 
 * Hash: 0x08FDC6F796E350D1 | Since: 1207 | API-Set: unknown
 */
export function clearGpsPlayerWaypoint(): void {
    ClearGpsPlayerWaypoint();
}

/**
 * If Minimap / Radar should be displayed.
 * 
 * Hash: 0x1B3DA717B9AFF828 | Since: 1207 | API-Set: unknown
 */
export function displayRadar(toggle: boolean): void {
    DisplayRadar(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xCD82FA174080B3B1 | Since: 1207 | API-Set: unknown
 */
export function doesBlipExist(blip: number | IBlip): boolean {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return DoesBlipExist(_blip);
}

/**
 * Doesn't actually return anything.
 * 
 * Hash: 0xEE1C7BA69BB74B08 | Since: 1207 | API-Set: unknown
 */
export function forceSonarBlipsThisFrame(): any {
    return ForceSonarBlipsThisFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0x201C319797BDA603 | Since: 1207 | API-Set: unknown
 */
export function getBlipCoords(blip: number | IBlip): Vector3 {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return new Vector3(GetBlipCoords(_blip));
}

/**
 * Returns the Blip handle of given Entity.
 * 
 * Hash: 0x6D2C41A8BD6D6FD0 | Since: 1207 | API-Set: unknown
 */
export function getBlipFromEntity(entity: number | IEntity): number {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return GetBlipFromEntity(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x5CD2889B2B381D45 | Since: 1207 | API-Set: unknown
 */
export function getMainPlayerBlipId(): number {
    return GetMainPlayerBlipId();
}

/**
 * No comment provided
 * 
 * Hash: 0x46534526B9CD2D17 | Since: 1207 | API-Set: unknown
 */
export function isBlipOnMini(blip: number | IBlip): boolean {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return IsBlipOnMinimap(_blip);
}

/**
 * No comment provided
 * 
 * Hash: 0x202B1BBFC6AB5EE4 | Since: 1207 | API-Set: unknown
 */
export function isWaypointActive(): boolean {
    return IsWaypointActive();
}

/**
 * Locks the minimap to the specified angle in integer degrees.
 * 
 * angle: The angle in whole degrees. If less than 0 or greater than 360, unlocks the angle.
 * 
 * Hash: 0x0BFD145EF819FB3A | Since: 1207 | API-Set: unknown
 */
export function lockMiniAngle(angle: number): void {
    LockMinimapAngle(angle);
}

/**
 * No comment provided
 * 
 * Hash: 0xF2C3C9DA47AAA54A | Since: 1207 | API-Set: unknown
 */
export function removeBlip(): number {
    return RemoveBlip();
}

/**
 * No comment provided
 * 
 * Hash: 0xEB3CB3386C775D72 | Since: 1207 | API-Set: unknown
 */
export function resetMiniFow(hash: number | string): void {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    ResetMinimapFow(hash);
}

/**
 * No comment provided
 * 
 * Hash: 0x4FF674F5E23D49CE | Since: 1207 | API-Set: unknown
 */
export function setBlipCoords(blip: number | IBlip, pos: Vector3): void {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipCoords(_blip, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x0DF2B55F717DDB10 | Since: 1207 | API-Set: unknown
 */
export function setBlipFlashes(blip: number | IBlip): [boolean, number, number] {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return SetBlipFlashes(_blip);
}

/**
 * No comment provided
 * 
 * Hash: 0x02FF4CF43B7209D1 | Since: 1207 | API-Set: unknown
 */
export function setBlipFlashTimer(blip: number | IBlip, blipType: number, blipHash: number | string): void {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    if (typeof blipHash === 'string') blipHash = GetHashKey(blipHash)
    SetBlipFlashTimer(_blip, blipType, blipHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x0A062D6D7C0B2C2C | Since: 1207 | API-Set: unknown
 */
export function setBlipNameFromTextFile(blip: number | IBlip): string {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return SetBlipNameFromTextFile(_blip);
}

/**
 * No comment provided
 * 
 * Hash: 0x093DD5A31BC2B459 | Since: 1207 | API-Set: unknown
 */
export function setBlipNameToPlayerName(blip: number | IBlip, player: number | string | IPlayer): void {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    const _player = player instanceof IPlayer ? player.playerId() : player;
    SetBlipNameToPlayerName(_blip, _player);
}

/**
 * No comment provided
 * 
 * Hash: 0x6049966A94FBE706 | Since: 1207 | API-Set: unknown
 */
export function setBlipRotation(blip: number | IBlip, rotation: number): void {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipRotation(_blip, rotation);
}

/**
 * only works for BLIP_ADD_FOR_RADIUS AND BLIP_ADD_FOR_AREA, this native works as a radius not really a scale
 * 
 * Hash: 0xD38744167B2FA257 | Since: 1207 | API-Set: unknown
 */
export function setBlipScale(blip: number | IBlip, scale: number): void {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipScale(_blip, scale);
}

/**
 * No comment provided
 * 
 * Hash: 0x74F74D3207ED525C | Since: 1207 | API-Set: unknown
 */
export function setBlipSprite(blip: number | IBlip, hash: number | string): void {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    if (typeof hash === 'string') hash = GetHashKey(hash)
    SetBlipSprite(_blip, hash, false);
}

/**
 * No comment provided
 * 
 * Hash: 0xF6CEF599FC470B33 | Since: 1207 | API-Set: unknown
 */
export function setGpsCustomRouteRender(): void {
    SetGpsCustomRouteRender(false, 0, 0);
}

/**
 * https://alloc8or.re/rdr3/doc/enums/rage__eGpsFlags.txt
 * 
 * Hash: 0x5DE61C90DDECFA2D | Since: 1207 | API-Set: unknown
 */
export function setGpsFlags(): void {
    SetGpsFlags(0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x4426D65E029A4DC0 | Since: 1207 | API-Set: unknown
 */
export function setGpsMultiRouteRender(toggle: boolean): void {
    SetGpsMultiRouteRender(toggle);
}

/**
 * Up to eight coordinates may be revealed per frame
 * 
 * Hash: 0x73348402566ECB6E | Since: 1207 | API-Set: unknown
 */
export function setMiniFowRevealCoordinate(pos: Vector3, p3: number | string): void {
    if (typeof p3 === 'string') p3 = GetHashKey(p3)
    SetMinimapFowRevealCoordinate(pos.x, pos.y, pos.z, p3);
}

/**
 * No comment provided
 * 
 * Hash: 0x63CBBD6CA6F321F9 | Since: 1207 | API-Set: unknown
 */
export function setMiniFowRevealVolume(volume: number, p1: number | string): void {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    SetMinimapFowRevealVolume(volume, p1);
}

/**
 * Reveals the entire minimap (FOW = Fog of War)
 * 
 * Hash: 0x4B8F743A4A6D2FF8 | Since: 1207 | API-Set: unknown
 */
export function setMiniHideFow(toggle: boolean): void {
    SetMinimapHideFow(toggle);
}

/**
 * No comment provided
 * 
 * Hash: 0xA8EBBAE986FB5457 | Since: 1207 | API-Set: unknown
 */
export function setRadarAsExteriorThisFrame(): void {
    SetRadarAsExteriorThisFrame();
}

/**
 * No comment provided
 * 
 * Hash: 0xCAF6489DA2C8DD9E | Since: 1207 | API-Set: unknown
 */
export function setRadarZoom(zoomLevel: number): void {
    SetRadarZoom(zoomLevel);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA8C41E8020D3439 | Since: 1207 | API-Set: unknown
 */
export function setWaypointOff(): void {
    SetWaypointOff();
}

/**
 * No comment provided
 * 
 * Hash: 0x3D3D15AF7BCAAF83 | Since: 1207 | API-Set: unknown
 */
export function startGpsMultiRoute(colorNameHash: number | string, onFoot: boolean, inVehicle: boolean): void {
    if (typeof colorNameHash === 'string') colorNameHash = GetHashKey(colorNameHash)
    StartGpsMultiRoute(colorNameHash, onFoot, inVehicle);
}

/**
 * No comment provided
 * 
 * Hash: 0x72DD432F3CDFC0EE | Since: 1207 | API-Set: unknown
 */
export function triggerSonarBlip(typeHash: number | string, pos: Vector3): void {
    if (typeof typeHash === 'string') typeHash = GetHashKey(typeHash)
    TriggerSonarBlip(typeHash, pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x5373DE8E179BC2A0 | Since: 1207 | API-Set: unknown
 */
export function unlockMiniAngle(): void {
    UnlockMinimapAngle();
}

/**
 * No comment provided
 * 
 * Hash: 0xD3F58E9316B7FC2A | Since: 1207 | API-Set: unknown
 */
export function _0xD3F58E9316B7FC2A(): void {
    Citizen.invokeNative('0xD3F58E9316B7FC2A', undefined);
}

/**
 * It's unclear what exactly this does, but I assume it marks the blip as "no longer needed"
 * 
 * Hash: 0xDEEDE7C41742E011 | Since: 1207 | API-Set: unknown
 */
export function abandonBlip(blip: number | IBlip): void {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    AbandonBlip(_blip);
}

/**
 * list of minimap props: https://github.com/femga/rdr3_discoveries/tree/master/graphics/minimap/minimapObjects
 * variations parameter are the interior locations you see on the map like these bellow
 * variation 0 https://i.imgur.com/jkLhn3Z.png
 * variation 2  https://i.imgur.com/eKV0Tcm.png
 * variation 4 https://i.imgur.com/rjwOgEH.png
 * there are more and you can find them in the decompiles
 * 
 * Hash: 0x1392105DA88BBFFB | Since: 1207 | API-Set: unknown
 */
export function addPropToMini(minimapProp: number | string, x: number, y: number, rotation: number, variation: number): void {
    if (typeof minimapProp === 'string') minimapProp = GetHashKey(minimapProp)
    AddPropToMinimap(minimapProp, x, y, rotation, variation);
}

/**
 * No comment provided
 * 
 * Hash: 0xEC174ADBCB611ECC | Since: 1207 | API-Set: unknown
 */
export function blipAddForArea(blipHash: number | string, pos: Vector3, scale: Vector3): number {
    if (typeof blipHash === 'string') blipHash = GetHashKey(blipHash)
    return BlipAddForArea(blipHash, pos.x, pos.y, pos.z, scale.x, scale.y, scale.z, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x3E593DF9C2962EC6 | Since: 1207 | API-Set: unknown
 */
export function blipAddForStyle(styleHash: number | string): number {
    if (typeof styleHash === 'string') styleHash = GetHashKey(styleHash)
    return BlipAddForStyle(styleHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xA6EF0C54A3443E70 | Since: 1207 | API-Set: unknown
 */
export function blipAddForVolume(blipHash: number | string, volume: number): number {
    if (typeof blipHash === 'string') blipHash = GetHashKey(blipHash)
    return BlipAddForVolume(blipHash, volume);
}

/**
 * No comment provided
 * 
 * Hash: 0xBD62D98799A3DAF0 | Since: 1207 | API-Set: unknown
 */
export function blipAddStyle(blip: number | IBlip, styleHash: number | string): boolean {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    if (typeof styleHash === 'string') styleHash = GetHashKey(styleHash)
    return BlipAddStyle(_blip, styleHash);
}

/**
 * Not official native name
 * Removes the blip from an entity and makes it static on the map, try it on GetMainPlayerBlipId() for a demonstration
 * 
 * Hash: 0x250C75EB1728CC0D | Since: 1207 | API-Set: unknown
 */
export function blipDetachFromEntity(blip: number | IBlip): void {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    Citizen.invokeNative('0x250C75EB1728CC0D', _blip);
}

/**
 * https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/blip_styles
 * Removes any existing modifiers and sets the style.
 * 
 * Hash: 0xEDD964B7984AC291 | Since: 1207 | API-Set: unknown
 */
export function blipSetStyle(blip: number | IBlip, styleHash: number | string): boolean {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    if (typeof styleHash === 'string') styleHash = GetHashKey(styleHash)
    return BlipSetStyle(_blip, styleHash);
}

/**
 * Clear blip data. It must be used before RemoveBlip I'm pretty sure that blips are handled internally with databinding. This function should then allow you to clear blip container and therefore free up memory?.
 * 
 * Hash: 0x01B928CA2E198B01 | Since: 1207 | API-Set: unknown
 */
export function clearBlip(blip: number | IBlip): any {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return Citizen.invokeNative('0x01B928CA2E198B01', _blip);
}

/**
 * will remove the blip icon from the entity lockon prompt,p1 = GET_BLIP_FROM_ENTITY
 * 
 * Hash: 0x44813684F72B563C | Since: 1207 | API-Set: unknown
 */
export function clearBlipIconFromLockonEntityPrompt(entity: number | IEntity, blip: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x44813684F72B563C', _entity, blip);
}

/**
 * Clears the previously set coordinates for the pause map view, removing any specified focal point and radius that were set using `SetPausemapCoordsWithRadius - 0xE0884C184728C75B`
 * 
 * Hash: 0x7C9F4CDF402CA82A | Since: 1311 | API-Set: unknown
 */
export function clearPauseCoords(): void {
    Citizen.invokeNative('0x7C9F4CDF402CA82A');
}

/**
 * No comment provided
 * 
 * Hash: 0x9FA00E2FC134A9D0 | Since: 1207 | API-Set: unknown
 */
export function doesEntityHaveBlip(entity: number | IEntity): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return DoesEntityHaveBlip(_entity);
}

/**
 * No comment provided
 * 
 * Hash: 0x3FDA2B79AEEE351C | Since: 1207 | API-Set: unknown
 */
export function findClosestGpsPosition(pos: Vector3): [boolean, Vector3] {
    return FindClosestGpsPosition(pos.x, pos.y, pos.z);
}

/**
 * No comment provided
 * 
 * Hash: 0x29B30D07C3F7873B | Since: 1207 | API-Set: unknown
 */
export function getWaypointCoords(): Vector3 {
    return new Vector3(GetWaypointCoords());
}

/**
 * Unlike `GET_WAYPOINT_COORDS - 0x29B30D07C3F7873B`, which returns a single value, this native returns the x and y coordinates of the waypoint separately as floats from pointer. To retrieve each coordinate, `Citizen.PointerValueFloat()` must be used with this function.
 * 
 * Hash: 0xF08E42BFA46BDFF8 | Since: 1207 | API-Set: unknown
 */
export function getWaypointPosition(): [any, number, number] {
    return Citizen.invokeNative('0xF08E42BFA46BDFF8');
}

/**
 * No comment provided
 * 
 * Hash: 0xA1B4052C2A3DCC1E | Since: 1207 | API-Set: unknown
 */
export function hideActivePointsOfInterest(): void {
    HideActivePointsOfInterest();
}

/**
 * No comment provided
 * 
 * Hash: 0xE9F676788F8D5E1E | Since: 1207 | API-Set: unknown
 */
export function isBlipAttachedToAnyEntity(blip: number | IBlip): boolean {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return IsBlipAttachedToAnyEntity(_blip);
}

/**
 * checks if the entity lockon prompt contains an icon
 * 
 * Hash: 0x3CB8859F04763C78 | Since: 1207 | API-Set: unknown
 */
export function isBlipIconOnLockonEntityPrompt(entity: number | IEntity, blip: number): boolean {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return Citizen.invokeNative('0x3CB8859F04763C78', _entity, blip);
}

/**
 * Checks if the GPS route to the waypoint is navigable along a road. If a route exists but there is no valid road path, this function returns false.
 * 
 * Hash: 0xF47A1EB2A538A3A3 | Since: 1207 | API-Set: unknown
 */
export function isGpsRouteOnRoad(): boolean {
    return Citizen.invokeNative('0xF47A1EB2A538A3A3');
}

/**
 * No comment provided
 * 
 * Hash: 0x6786D7AFAC3162B3 | Since: 1207 | API-Set: unknown
 */
export function disableRegionBlip(regionHash: number | string): void {
    if (typeof regionHash === 'string') regionHash = GetHashKey(regionHash)
    MapDisableRegionBlip(regionHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xDA98246C7A3C2189 | Since: 1207 | API-Set: unknown
 */
export function discoverySetEnabled(discoveryHash: number | string): void {
    if (typeof discoveryHash === 'string') discoveryHash = GetHashKey(discoveryHash)
    MapDiscoverySetEnabled(discoveryHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xD8C7162AB2E2AF45 | Since: 1207 | API-Set: unknown
 */
export function discoverRegion(discoveryHash: number | string): void {
    if (typeof discoveryHash === 'string') discoveryHash = GetHashKey(discoveryHash)
    MapDiscoverRegion(discoveryHash);
}

/**
 * regionHash: https://github.com/femga/rdr3_discoveries/tree/master/graphics/minimap/wanted_regions
 * 
 * Hash: 0x563FCB6620523917 | Since: 1207 | API-Set: unknown
 */
export function enableRegionBlip(regionHash: number | string, styleHash: number | string): void {
    if (typeof regionHash === 'string') regionHash = GetHashKey(regionHash)
    if (typeof styleHash === 'string') styleHash = GetHashKey(styleHash)
    MapEnableRegionBlip(regionHash, styleHash);
}

/**
 * No comment provided
 * 
 * Hash: 0x3F81EA4275D39D6F | Since: 1207 | API-Set: unknown
 */
export function isDiscoveryActive(discoveryHash: number | string): boolean {
    if (typeof discoveryHash === 'string') discoveryHash = GetHashKey(discoveryHash)
    return MapIsDiscoveryActive(discoveryHash);
}

/**
 * No comment provided
 * 
 * Hash: 0xE38450DBCBC70E3D | Since: 1207 | API-Set: unknown
 */
export function isRegionHighlightedWithStyle(regionHash: number | string, styleHash: number | string): boolean {
    if (typeof regionHash === 'string') regionHash = GetHashKey(regionHash)
    if (typeof styleHash === 'string') styleHash = GetHashKey(styleHash)
    return MapIsRegionHighlightedWithStyle(regionHash, styleHash);
}

/**
 * 
 * in the decompiles this doesnt seem to ever be executed the param needed needs to be above 0 but its always passed as 0
 * removes the icon from lockon prompt
 * 
 * Hash: 0xBB68D4D3CA3DE402 | Since: 1207 | API-Set: unknown
 */
export function removeBlipIconFromEntityLockonPrompt(entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0xBB68D4D3CA3DE402', _entity, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xE057FEA9A22EB3EE | Since: 1207 | API-Set: unknown
 */
export function removePropFromMini(minimapProp: number | string): void {
    if (typeof minimapProp === 'string') minimapProp = GetHashKey(minimapProp)
    RemovePropFromMinimap(minimapProp);
}

/**
 * No comment provided
 * 
 * Hash: 0xF8096DF9B87246E3 | Since: 1207 | API-Set: unknown
 */
export function revealMiniFow(hash: number | string): void {
    if (typeof hash === 'string') hash = GetHashKey(hash)
    RevealMinimapFow(hash);
}

/**
 * It adds blip a icon to active prompts like from scenarios or pickups without the need to use lockon
 * 
 * Hash: 0x1726963E6049DB53 | Since: 1207 | API-Set: unknown
 */
export function setBlipIconOnEntityActivePrompt(entity: number | IEntity, blipIcon: number | string): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof blipIcon === 'string') blipIcon = GetHashKey(blipIcon)
    Citizen.invokeNative('0x1726963E6049DB53', _entity, blipIcon);
}

/**
 * will add a blip icon to the entity lockon prompt that you specify
 * 
 * Hash: 0x7563CBCA99253D1A | Since: 1207 | API-Set: unknown
 */
export function setBlipIconToLockonEntityPrompt(entity: number | IEntity, blipIcon: number | string): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof blipIcon === 'string') blipIcon = GetHashKey(blipIcon)
    Citizen.invokeNative('0x7563CBCA99253D1A', _entity, blipIcon);
}

/**
 * No comment provided
 * 
 * Hash: 0x9CB1A1623062F402 | Since: 1207 | API-Set: unknown
 */
export function setBlipName(blip: number | IBlip): string {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    return SetBlipName(_blip);
}

/**
 * adds the entity blip icon to the entity lockon prompt if wrong param will remove the icon if had any
 * 
 * Hash: 0x97F6F158CC5B5CA2 | Since: 1207 | API-Set: unknown
 */
export function setEntityBlipIconToLockonEntityPrompt(entity: number | IEntity, blipId: number): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    Citizen.invokeNative('0x97F6F158CC5B5CA2', _entity, blipId);
}

/**
 * Used for GUARMA MODE; Enabled: toggle = false, 0; Disabled: toggle = true, 0
 * Hash p1 seems to be unused, always 0
 * 
 * Hash: 0x63E7279D04160477 | Since: 1207 | API-Set: unknown
 */
export function setFowUpdatePlayerOverride(toggle: boolean, p1: number | string): void {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    SetFowUpdatePlayerOverride(toggle, p1);
}

/**
 * No comment provided
 * 
 * Hash: 0xE5A7F70B7C0F3271 | Since: 1207 | API-Set: unknown
 */
export function setMiniFowOverrideRevealScale(scale: number, p1: number | string): void {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    SetMinimapFowOverrideRevealScale(scale, p1);
}

/**
 * No comment provided
 * 
 * Hash: 0x632AA10BF7EA53D3 | Since: 1207 | API-Set: unknown
 */
export function setMiniFowShouldUpdate(toggle: boolean, p1: number | string): void {
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    SetMinimapFowShouldUpdate(toggle, p1);
}

/**
 * hash can be the hash of "guarma" or "world".
 * 
 * Hash: 0xA657EC9DBC6CC900 | Since: 1207 | API-Set: unknown
 */
export function setMiniZone(zone: number | string): void {
    if (typeof zone === 'string') zone = GetHashKey(zone)
    SetMinimapZone(zone);
}

/**
 * No comment provided
 * 
 * Hash: 0xE0884C184728C75B | Since: 1207 | API-Set: unknown
 */
export function setPauseCoordsWithRadius(pos: Vector3, radius: number): void {
    SetPausemapCoordsWithRadius(pos.x, pos.y, pos.z, radius);
}

/**
 * https://github.com/femga/rdr3_discoveries/blob/master/graphics/minimap/radar/radar_configs.lua
 * configHash: -1943724816, 347777538, -117986897, -789269373, -547506804, -1986542417, 2080113112
 * p1: usually 898171178 or 0 in R* scripts (doesn't seems to have any effect)
 * 
 * Hash: 0x9C113883487FD53C | Since: 1207 | API-Set: unknown
 */
export function setRadarConfigType(configHash: number | string, p1: number | string): void {
    if (typeof configHash === 'string') configHash = GetHashKey(configHash)
    if (typeof p1 === 'string') p1 = GetHashKey(p1)
    SetRadarConfigType(configHash, p1);
}

/**
 * No comment provided
 * 
 * Hash: 0x3FBB838AEA30C1D8 | Since: 1207 | API-Set: unknown
 */
export function showActivePointsOfInterest(): void {
    ShowActivePointsOfInterest();
}

/**
 * No comment provided
 * 
 * Hash: 0x6B44F13D888F770D | Since: 1207 | API-Set: unknown
 */
export function startGpsCustomRouteFromWaypointRecordingRoute(point: number, numPoints: number, colorNameHash: number | string): string {
    if (typeof colorNameHash === 'string') colorNameHash = GetHashKey(colorNameHash)
    return StartGpsCustomRouteFromWaypointRecordingRoute(point, numPoints, colorNameHash, false, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x0C7A2289A5C4D7C9 | Since: 1207 | API-Set: unknown
 */
export function triggerSonarBlipOnEntity(typeHash: number | string, entity: number | IEntity): void {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    if (typeof typeHash === 'string') typeHash = GetHashKey(typeHash)
    TriggerSonarBlipOnEntity(typeHash, _entity);
}

