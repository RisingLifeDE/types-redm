import { IEntity, IBlip } from '@risinglife/redm-shared';
/**
 * Creates a blip for the specified coordinates. You can use `SET_BLIP_` natives to change the blip.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_COORD](?\_0x5A039BB0BCA604B6).</strong>
 *
 * Hash: 0xC6F43D0E
 */
export function addBlipForCoord(pos) {
    return AddBlipForCoord(pos.x, pos.y, pos.z);
}
/**
 * Create a blip that by default is red (enemy), you can use [SET_BLIP_AS_FRIENDLY](#\_0xC6F43D0E) to make it blue (friend).\
 * Can be used for objects, vehicles and peds.
 * Example of enemy:
 * ![enemy](https://i.imgur.com/fl78svv.png)
 * Example of friend:
 * ![friend](https://i.imgur.com/Q16ho5d.png)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_ENTITY](?\_0x5CDE92C702A8FCE7).</strong>
 *
 * Hash: 0x30822554
 */
export function addBlipForEntity(entity) {
    const _entity = entity instanceof IEntity ? entity.handle() : entity;
    return AddBlipForEntity(_entity);
}
/**
 * Create a blip with a radius for the specified coordinates (it doesnt create the blip sprite, so you need to use [AddBlipCoords](#\_0xC6F43D0E))
 * Example image:
 * ![example](https://i.imgur.com/9hQl3DB.png)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_RADIUS](?\_0x46818D79B1F7499A).</strong>
 *
 * Hash: 0x4626756C
 */
export function addBlipForRadius(pos, radius) {
    return AddBlipForRadius(pos.x, pos.y, pos.z, radius);
}
/**
 * Removes the blip from your map.
 * **Note:** This function only works on the script that created the blip, if you wish to remove blips created by other scripts, see [`SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT`](#\_0x86A652570E5F25DD).
 *
 * <strong>This is the server-side RPC native equivalent of the client native [REMOVE_BLIP](?\_0x86A652570E5F25DD).</strong>
 *
 * Hash: 0xD8C3C1CD
 */
export function removeBlip(blip) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    RemoveBlip(_blip);
}
/**
 * Sets the displayed sprite for a specific blip.
 * There's a [list of sprites](https://docs.fivem.net/game-references/blips/) on the FiveM documentation site.
 *
 * <strong>This is the server-side RPC native equivalent of the client native [SET_BLIP_SPRITE](?\_0xDF735600A4696DAF).</strong>
 *
 * Hash: 0x8DBBB0B9
 */
export function setBlipSprite(blip, spriteId) {
    const _blip = blip instanceof IBlip ? blip.handle() : blip;
    SetBlipSprite(_blip, spriteId);
}
/**
 * Adds a rectangular blip for the specified coordinates/area.
 * It is recommended to use [SET_BLIP_ROTATION](#\_0xF87683CDF73C3F6E) and [SET_BLIP_COLOUR](#\_0x03D7FB09E75D6B7E) to make the blip not rotate along with the camera.
 * By default, the blip will show as a *regular* blip with the specified color/sprite if it is outside of the minimap view.
 * Example image:
 * ![minimap](https://i.imgur.com/qLbXWcQ.png)
 * ![big map](https://i.imgur.com/0j7O7Rh.png)
 * (Native name is *likely* to actually be ADD_BLIP_FOR_AREA, but due to the usual reasons this can't be confirmed)
 *
 * <strong>This is the server-side RPC native equivalent of the client native [\_ADD_BLIP_FOR_AREA](?\_0xCE5D0E5E315DB238).</strong>
 *
 * Hash: 0x6228F159
 */
export function addBlipForArea(pos, width, height) {
    return AddBlipForArea(pos.x, pos.y, pos.z, width, height);
}
