/**
 * Changes the mouse cursor's sprite.
 *
 * spriteId's: https://github.com/femga/rdr3_discoveries/tree/master/graphics/HUD/cursor_sprites#readme
 *
 * Old name: _SET_MOUSE_CURSOR_SPRITE
 *
 * Hash: 0x7F5858AAB5A58CCE | Since: 1207 | API-Set: unknown
 */
export declare function setMouseCursorStyle(spriteId: number): void;
/**
 * Shows the cursor on screen for one frame.
 *
 * Old name: _SET_MOUSE_CURSOR_ACTIVE_THIS_FRAME
 *
 * Hash: 0xF12E4CCAF249DC10 | Since: 1207 | API-Set: unknown
 */
export declare function setMouseCursorThisFrame(): void;
/**
 * Returns true if player is moving mouse while cursor is active
 * _PI* - _PO*
 *
 * Hash: 0x2B8B605F2A9E64BF | Since: 1311 | API-Set: unknown
 */
export declare function pointerIsBeingMoved(): boolean;
/**
 * Returns true if player is holding LMB while cursor is active
 * _PI* - _PO*
 *
 * Hash: 0x61CAE9D1FD055E44 | Since: 1207 | API-Set: unknown
 */
export declare function pointerIsLeftButtonHeld(): boolean;
/**
 * Returns true if player releases LMB if cursor is active
 * _PI* - _PO*
 *
 * Hash: 0xF7F51A57349739F2 | Since: 1207 | API-Set: unknown
 */
export declare function pointerIsLeftButtonJustReleased(): boolean;
/**
 * Allows camera to be moved if middle mouse button is held while in first person
 * Must be called every frame
 * _SET*
 *
 * Hash: 0x0546B117BB17548B | Since: 1232 | API-Set: unknown
 */
export declare function setAllowFirstPersonMouseCameraMovement(): void;
