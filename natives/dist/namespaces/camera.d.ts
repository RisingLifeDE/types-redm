import { Vector3, IEntity, IPed, IVehicle, ICamera } from '@risinglife/redm-shared';
/**
 * p7 (length) determines the length of the spline, affects camera path and duration of transition between previous node and this one
 *
 * p8 big values ~100 will slow down the camera movement before reaching this node
 *
 * p9 != 0 seems to override the rotation/pitch (bool?)
 *
 * Hash: 0xF1F57F9D230F9CD1 | Since: 1207
 */
export declare function addCamSplineNode(camera: number | ICamera, pos: Vector3, rot: Vector3, length: number): void;
/**
 * No comment provided
 *
 * Hash: 0x42ED56B02E05D109 | Since: 1207
 */
export declare function allowMotionBlurDecay(cam: number | ICamera): void;
/**
 * Last param determines if its relative to the Entity
 *
 * Hash: 0xFDC0DF7F6FB0A592 | Since: 1207
 */
export declare function attachCamToEntity(cam: number | ICamera, entity: number | IEntity, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean): void;
/**
 * boneIndex: https://github.com/femga/rdr3_discoveries/tree/master/boneNames
 *
 * Hash: 0xDFC1E4A44C0324CA | Since: 1207
 */
export declare function attachCamToPedBone(cam: number | ICamera, ped: number | IPed, boneIndex: number, pos: Vector3, heading: boolean): void;
/**
 * Only used in R* Script fm_mission_controller
 *
 * Hash: 0x0B0F914459731F60 | Since: 1311
 */
export declare function cinematicLocationOverrideTargetEntityThisUpdate(name: string, entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x6D4D25C2137FF511 | Since: 1207
 */
export declare function cinematicLocationStopScriptedShotEvent(): void;
/**
 * No comment provided
 *
 * Hash: 0x02389579A53C3276 | Since: 1207
 */
export declare function cinematicLocationTriggerScriptedShotEvent(dictionary: string, shotName: string, cameraName: string): void;
/**
 * No comment provided
 *
 * Hash: 0xE72CDBA7F0A02DD6 | Since: 1207
 */
export declare function createCam(camName: string): number;
/**
 * No comment provided
 *
 * Hash: 0x57CDF879EA466C46 | Since: 1207
 */
export declare function create(camHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x98B99B9F27E2D60B | Since: 1207
 */
export declare function createWithParams(camHash: number | string, pos: Vector3, rot: Vector3, fov: number): number;
/**
 * No comment provided
 *
 * Hash: 0x40C23491CE83708E | Since: 1207
 */
export declare function createCamWithParams(camName: string, pos: Vector3, rot: Vector3, fov: number): number;
/**
 * BOOL param indicates whether the cam should be destroyed if it belongs to the calling script.
 *
 * Hash: 0x163600D6E136C9F8 | Since: 1207
 */
export declare function destroyAllCams(): void;
/**
 * BOOL param indicates whether the cam should be destroyed if it belongs to the calling script.
 *
 * Hash: 0x4E67E0B6D7FD5145 | Since: 1207
 */
export declare function destroyCam(cam: number | ICamera): void;
/**
 * No comment provided
 *
 * Hash: 0x05B41DDBEB559556 | Since: 1207
 */
export declare function detachCam(cam: number | ICamera): void;
/**
 * No comment provided
 *
 * Hash: 0x7E3F546ACFE6C8D9 | Since: 1207
 */
export declare function disableCamCollisionForObject(entity: number | IEntity): void;
/**
 * Old name: _DISABLE_VEHICLE_FIRST_PERSON_CAM_THIS_FRAME
 *
 * Hash: 0xA5929C2E57AC90D1 | Since: 1207
 */
export declare function disableCinematicBonnetThisUpdate(): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x77D65669A05D1A1A | Since: 1207
 */
export declare function disableFirstPersonFlashEffectThisUpdate(): void;
/**
 * Old name: _DISABLE_FIRST_PERSON_CAM_THIS_FRAME
 *
 * Hash: 0x9C473089A934C930 | Since: 1207
 */
export declare function disableOnFootFirstPersonViewThisUpdate(): void;
/**
 * Returns whether or not the passed camera handle exists.
 *
 * Hash: 0x153AD457764FD704 | Since: 1207
 */
export declare function doesCamExist(cam: number | ICamera): boolean;
/**
 * Fades the screen in.
 *
 * duration: The time the fade should take, in milliseconds.
 *
 * Hash: 0x6A053CF596F67DF7 | Since: 1207
 */
export declare function doScreenFadeIn(duration: number): void;
/**
 * Fades the screen out.
 *
 * duration: The time the fade should take, in milliseconds.
 *
 * Hash: 0x40C719A5E410B9E4 | Since: 1207
 */
export declare function doScreenFadeOut(duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x702B75DC9D3EDE56 | Since: 1207
 */
export declare function forceCinematicRenderingThisUpdate(): void;
/**
 * No comment provided
 *
 * Hash: 0x6B12F11C2A9F0344 | Since: 1207
 */
export declare function getCamCoord(cam: number | ICamera): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x8101D32A0A6B0F60 | Since: 1207
 */
export declare function getCamFov(cam: number | ICamera): number;
/**
 * rotationOrder: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eEulerRotationOrder
 *
 * Hash: 0x9BF96B57254E7889 | Since: 1207
 */
export declare function getCamRot(cam: number | ICamera, rotationOrder: number): Vector3;
/**
 * Can use this with SET_CAM_SPLINE_PHASE to set the float it this native returns.
 *
 * (returns 1.0f when no nodes has been added, reached end of non existing spline)
 *
 * Hash: 0x095EDCD24D90033A | Since: 1207
 */
export declare function getCamSplinePhase(cam: number | ICamera): number;
/**
 * No comment provided
 *
 * Hash: 0x5352E025EC2B416F | Since: 1207
 */
export declare function getFinalRenderedCamCoord(): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x04AF77971E508F6A | Since: 1207
 */
export declare function getFinalRenderedCamFov(): number;
/**
 * No comment provided
 *
 * Hash: 0x602685BD85DD26CA | Since: 1207
 */
export declare function getFinalRenderedCamRot(rotationOrder: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xB4132CA1B0EE1365 | Since: 1207
 */
export declare function getFirstPersonAimCamZoomFactor(): number;
/**
 * No comment provided
 *
 * Hash: 0x595320200B98596E | Since: 1207
 */
export declare function getGameplayCamCoord(): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xF6A96E5ACEEC6E50 | Since: 1207
 */
export declare function getGameplayCamFov(): number;
/**
 * No comment provided
 *
 * Hash: 0xC4ABF536048998AA | Since: 1207
 */
export declare function getGameplayCamRelativeHeading(): number;
/**
 * No comment provided
 *
 * Hash: 0x99AADEBBA803F827 | Since: 1207
 */
export declare function getGameplayCamRelativePitch(): number;
/**
 * No comment provided
 *
 * Hash: 0x0252D2B5582957A6 | Since: 1207
 */
export declare function getGameplayCamRot(rotationOrder: number): Vector3;
/**
 * More info: see HAS_LETTER_BOX
 *
 * Hash: 0xA2B1C7EF759A63CE | Since: 1207
 */
export declare function getLetterBoxRatio(): number;
/**
 * No comment provided
 *
 * Hash: 0x03A8931ECC8015D6 | Since: 1207
 */
export declare function getRenderingCam(): number;
/**
 * More info: https://en.wikipedia.org/wiki/Letterboxing_(filming)
 *
 * Hash: 0x81DCFD13CF39920E | Since: 1207
 */
export declare function hasLetterBox(): boolean;
/**
 * Old name: _INVALIDATE_VEHICLE_IDLE_CAM
 *
 * Hash: 0x634F4A0562CF19B8 | Since: 1207
 */
export declare function invalidateCinematicVehicleIdleMode(): void;
/**
 * No comment provided
 *
 * Hash: 0x698F456FB909E077 | Since: 1232
 */
export declare function isAimCamActive(): boolean;
/**
 * Returns whether or not the passed camera handle is active.
 *
 * Hash: 0x63EFCC7E1810B8E6 | Since: 1207
 */
export declare function isCamActive(cam: number | ICamera): boolean;
/**
 * No comment provided
 *
 * Hash: 0x578F8F1CAA17BD2B | Since: 1207
 */
export declare function isCamInterpolating(cam: number | ICamera): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4415F8A6C536D39F | Since: 1207
 */
export declare function isCamRendering(cam: number | ICamera): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2EEB402BD7320159 | Since: 1207
 */
export declare function isCamShaking(cam: number | ICamera): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBF7C780731AADBF8 | Since: 1207
 */
export declare function isCinematicCamRendering(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x139EFB0A71DD9011 | Since: 1207
 */
export declare function isDeathFailRunning(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF63134C54B6EC212 | Since: 1207
 */
export declare function isFirstPersonAimCamActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA24C1D341C6E0D53 | Since: 1207
 */
export declare function isFirstPersonActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA40C2F51FB589E9A | Since: 1207
 */
export declare function isFollowVehicleCamActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8FE0D24FFD04D5A2 | Since: 1207
 */
export declare function isGameplayCamLookingBehind(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8660EA714834E412 | Since: 1207
 */
export declare function isGameplayCamRendering(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEA4C5F4AA0A4DBEF | Since: 1207
 */
export declare function isGameplayCamShaking(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2E04AB5FEE042D4A | Since: 1207
 */
export declare function isGameplayHintActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x251241CAEC707106 | Since: 1207
 */
export declare function isInterpolatingFromScriptCams(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x43AB9D5A7D415478 | Since: 1207
 */
export declare function isInterpolatingToScriptCams(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x37F9A426FBCF4AF2 | Since: 1207
 */
export declare function isScreenFadedIn(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF5472C80DF2FF847 | Since: 1207
 */
export declare function isScreenFadedOut(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0CECCC63FFA2EF24 | Since: 1207
 */
export declare function isScreenFadingIn(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x02F39BEFE7B88D00 | Since: 1207
 */
export declare function isScreenFadingOut(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2E941B5FFA2989C6 | Since: 1207
 */
export declare function isSphereVisible(pos: Vector3, radius: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA263DDF694D563F6 | Since: 1207
 */
export declare function playCamAnim(cam: number | ICamera, animName: string, animDictionary: string, pos: Vector3, rot: Vector3, animFlags: number, rotOrder: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x948B39341C3A40C2 | Since: 1207
 */
export declare function pointCamAtCoord(cam: number | ICamera, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xFC2867E6074D3A61 | Since: 1207
 */
export declare function pointCamAtEntity(cam: number | ICamera, entity: number | IEntity): void;
/**
 * ease - smooth transition between the camera's positions
 * easeTime - Time in milliseconds for the transition to happen
 *
 * If you have created a script (rendering) camera, and want to go back to the
 * character (gameplay) camera, call this native with render set to FALSE.
 * Setting ease to TRUE will smooth the transition.
 *
 * Hash: 0x33281167E4942E4F | Since: 1207
 */
export declare function renderScriptCams(render: boolean, ease: boolean, easeTime: number, renderingFlags: number): void;
/**
 * Set camera as active/inactive.
 *
 * Hash: 0x87295BCA613800C8 | Since: 1207
 */
export declare function setCamActive(cam: number | ICamera, active: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8B15AE2987C1AC8F | Since: 1207
 */
export declare function setCamActiveWithInterp(camTo: number | ICamera, camFrom: number | ICamera, duration: number, easeLocation: number, easeRotation: number): void;
/**
 * Allows you to aim and shoot at the direction the camera is facing.
 *
 * Hash: 0x3CB9E8BDE5E76F33 | Since: 1207
 */
export declare function setCamAffectsAiming(cam: number | ICamera, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1B8F3CE5A6001298 | Since: 1207
 */
export declare function setCamControlsMiniMapHeading(cam: number | ICamera): void;
/**
 * Sets the position of the cam.
 *
 * Hash: 0xF9EE7D419EE49DE6 | Since: 1207
 */
export declare function setCamCoord(cam: number | ICamera, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x5E32817BF6302111 | Since: 1207
 */
export declare function setCamFarClip(cam: number | ICamera, farClip: number): void;
/**
 * Sets the field of view of the cam.
 *
 * Min: 1.0f
 * Max: 130.0f
 *
 * Hash: 0x27666E5988D9D429 | Since: 1207
 */
export declare function setCamFov(cam: number | ICamera, fieldOfView: number): void;
/**
 * No comment provided
 *
 * Hash: 0x45FD891364181F9E | Since: 1207
 */
export declare function setCamMotionBlurStrength(cam: number | ICamera, strength: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA924028272A61364 | Since: 1207
 */
export declare function setCamNearClip(cam: number | ICamera, nearClip: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA47BBFFFB83D4D0A | Since: 1207
 */
export declare function setCamParams(cam: number | ICamera, pos: Vector3, rot: Vector3, fieldOfView: number, graphType1: number, graphType2: number, rotationOrder: number): void;
/**
 * Sets the rotation of the cam.
 *
 * Hash: 0x63DFA6810AD78719 | Since: 1207
 */
export declare function setCamRot(cam: number | ICamera, rot: Vector3, rotationOrder: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFF6311652CA91015 | Since: 1207
 */
export declare function setCamSplineDuration(cam: number | ICamera, timeDuration: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF1898A68E7C15636 | Since: 1207
 */
export declare function setCamSplinePhase(cam: number | ICamera): void;
/**
 * No comment provided
 *
 * Hash: 0x84B3645618E726B0 | Since: 1207
 */
export declare function setCamSplineSmoothingStyle(cam: number | ICamera, smoothingStyle: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB90411F480457A6C | Since: 1207
 */
export declare function setCinematicButtonActive(): void;
/**
 * No comment provided
 *
 * Hash: 0xCE7A90B160F75046 | Since: 1207
 */
export declare function setCinematicModeActive(): void;
/**
 * No comment provided
 *
 * Hash: 0x05BD5E4088B30A66 | Since: 1207
 */
export declare function setFirstPersonAimCamRelativeHeadingLimitsThisUpdate(): void;
/**
 * Old name: _SET_FIRST_PERSON_CAM_PITCH_RANGE
 *
 * Hash: 0x715B7F5E8BED32A2 | Since: 1207
 */
export declare function setFirstPersonAimCamRelativePitchLimitsThisUpdate(): void;
/**
 * Forces gameplay cam to specified ped as if you were the ped or spectating it
 *
 * Hash: 0x82E41D6ADE924FCA | Since: 1207
 */
export declare function setGameplayCamFollowPedThisUpdate(ped: number | IPed): void;
/**
 * Old name: _DISABLE_CAM_COLLISION_FOR_ENTITY
 *
 * Hash: 0xD904F75DBD7AB865 | Since: 1207
 */
export declare function setGameplayCamIgnoreEntityCollisionThisUpdate(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x8459B3E64257B21D | Since: 1207
 */
export declare function setGameplayCamMaxMotionBlurStrengthThisUpdate(): void;
/**
 * Sets the camera position relative to heading in float from -360 to +360.
 *
 * Heading is always 0 in aiming camera.
 *
 * Hash: 0x5D1EB123EAC5D071 | Since: 1207
 */
export declare function setGameplayCamRelativeHeading(heading: number): void;
/**
 * Sets the camera pitch.
 *
 * Parameters:
 * x = pitches the camera on the x axis.
 * Value2 = always seems to be hex 0x3F800000 (1.000000 float).
 *
 * Hash: 0xFB760AF4F537B8BF | Since: 1207
 */
export declare function setGameplayCamRelativePitch(x: number, Value2: number): void;
/**
 * Sets the amplitude for the gameplay (i.e. 3rd or 1st) camera to shake.
 *
 * Hash: 0x570E35F5C4A44838 | Since: 1207
 */
export declare function setGameplayCamShakeAmplitude(amplitude: number): void;
/**
 * Hash used in finale1.ysc: 1726668277
 *
 * Hash: 0xFA33B8C69A4A6A0F | Since: 1207
 */
export declare function setGameplayCoordHint(pos: Vector3, duration: number, blendOutDuration: number, blendInDuration: number, p6: number | string): void;
/**
 * p6 & p7 - possibly length or time
 *
 * Hash: 0xD1F7F32640ADFD12 | Since: 1207
 */
export declare function setGameplayEntityHint(entity: number | IEntity, xOffset: number, yOffset: number, zOffset: number): void;
/**
 * No comment provided
 *
 * Hash: 0x421192A2DA48FD01 | Since: 1207
 */
export declare function setGameplayHintBaseOrbitPitchOffset(): void;
/**
 * Old name: _SET_GAMEPLAY_HINT_ANIM_OFFSETX
 *
 * Hash: 0xF86B6F93727C59C9 | Since: 1207
 */
export declare function setGameplayHintRelativeSideOffset(): void;
/**
 * Old name: _SET_GAMEPLAY_HINT_ANIM_OFFSETY
 *
 * Hash: 0x29E74F819150CC32 | Since: 1207
 */
export declare function setGameplayHintRelativeVerticalOffset(): void;
/**
 * No comment provided
 *
 * Hash: 0xDDDC54181868F81F | Since: 1207
 */
export declare function setGameplayHintFollowDistanceScalar(): void;
/**
 * No comment provided
 *
 * Hash: 0x661E58BC6F00A49A | Since: 1207
 */
export declare function setGameplayHintFov(FOV: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC40551D65F2BF297 | Since: 1207
 */
export declare function setGameplayObjectHint(): void;
/**
 * No comment provided
 *
 * Hash: 0x90FB951648851733 | Since: 1207
 */
export declare function setGameplayPedHint(p0: number | IPed, x1: number, y1: number, z1: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE2B2BB7DAC280515 | Since: 1207
 */
export declare function setGameplayVehicleHint(): void;
/**
 * Forces gameplay cam to specified vehicle as if you were in it
 *
 * Hash: 0xFA1D5E8D1C3CCD67 | Since: 1207
 */
export declare function setInVehicleCamStateThisUpdate(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x1DD95A8D6B24A0C9 | Since: 1207
 */
export declare function setScriptedIsFirstPersonThisFrame(): void;
/**
 * Old name: _ANIMATE_GAMEPLAY_CAM_ZOOM
 *
 * Hash: 0x2126C740A4AC370B | Since: 1207
 */
export declare function setThirdPersonCamOrbitDistanceLimitsThisUpdate(distance: number): void;
/**
 * minimum: Degrees between -180f and 180f.
 * maximum: Degrees between -180f and 180f.
 *
 * Clamps the gameplay camera's current yaw.
 *
 * Eg. _CLAMP_GAMEPLAY_CAM_YAW(0.0f, 0.0f) will set the horizontal angle directly behind the player.
 *
 * Old name: _CLAMP_GAMEPLAY_CAM_YAW
 *
 * Hash: 0x14F3947318CA8AD2 | Since: 1207
 */
export declare function setThirdPersonCamRelativeHeadingLimitsThisUpdate(minimum: number, maximum: number): void;
/**
 * minimum: Degrees between -90f and 90f.
 * maximum: Degrees between -90f and 90f.
 *
 * Clamps the gameplay camera's current pitch.
 *
 * Eg. _CLAMP_GAMEPLAY_CAM_PITCH(0.0f, 0.0f) will set the vertical angle directly behind the player.
 *
 * Old name: _CLAMP_GAMEPLAY_CAM_PITCH
 *
 * Hash: 0x326C7AA308F3DF6A | Since: 1207
 */
export declare function setThirdPersonCamRelativePitchLimitsThisUpdate(minimum: number, maximum: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD7F4D54CF80AFA34 | Since: 1207
 */
export declare function setWidescreenBorders(): void;
/**
 * No comment provided
 *
 * Hash: 0xF9A7BCF5D050D4E7 | Since: 1207
 */
export declare function shakeCam(cam: number | ICamera, _type: string, amplitude: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD9B31B4650520529 | Since: 1207
 */
export declare function shakeGameplayCam(shakeName: string, intensity: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCA1B30A3357C71F1 | Since: 1207
 */
export declare function stopCamPointing(cam: number | ICamera): void;
/**
 * No comment provided
 *
 * Hash: 0xB78CC4B4706614B0 | Since: 1207
 */
export declare function stopCamShaking(cam: number | ICamera): void;
/**
 * No comment provided
 *
 * Hash: 0x93759A83D0D844E7 | Since: 1207
 */
export declare function stopCodeGameplayHint(): void;
/**
 * No comment provided
 *
 * Hash: 0xE0DE43D290FB65F9 | Since: 1207
 */
export declare function stopGameplayCamShaking(): void;
/**
 * No comment provided
 *
 * Hash: 0x1BCEC33D54CFCA8A | Since: 1207
 */
export declare function stopGameplayHint(): void;
/**
 * This native makes the gameplay camera zoom into first person/third person with a special effect.
 * blendBackSmoothingType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eBlendBackSmoothing
 *
 * Hash: 0x8C7C7FF7CF0E5153 | Since: 1207
 */
export declare function stopRenderingScriptCamsUsingCatchUp(render: boolean, distance: number, blendBackSmoothingType: number): void;
/**
 * shakeNames in script_rel: CORRECTOR_SHAKE, MINIGAME_BOUNTY_SHAKE, POV_DRUNK_SHAKE, DRUNK_SHAKE, MINIGAME_TRAIN_SHAKE
 * _IS_GAMEPLAY_*
 *
 * Hash: 0x0060B31968E60E41 | Since: 1207
 */
export declare function _0x0060B31968E60E41(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x04084490CC302CFB | Since: 1207
 */
export declare function _0x04084490CC302CFB(): void;
/**
 * No comment provided
 *
 * Hash: 0x06557F6D96C86881 | Since: 1207
 */
export declare function _0x06557F6D96C86881(): void;
/**
 * No comment provided
 *
 * Hash: 0x0961B089947BA6D0 | Since: 1207
 */
export declare function _0x0961B089947BA6D0(): void;
/**
 * NPLOI_UPDATE__GUN_SPINNING_PREVIEW - Adjusting Camera / Ped Reset Flags This Frame
 * _DISABLE_*
 *
 * Hash: 0x0F1FFEF5D54AE832 | Since: 1207
 */
export declare function _0x0F1FFEF5D54AE832(): void;
/**
 * No comment provided
 *
 * Hash: 0x0FF7125F07DEB84F | Since: 1207
 */
export declare function _0x0FF7125F07DEB84F(): void;
/**
 * Used for DUELING_LOCK_CAMERA_CONTROLS_THIS_FRAME: Disabling look/aim controls
 * _IS_SC(REEN_)* (?)
 *
 * Hash: 0x1204EB53A5FBC63D | Since: 1207
 */
export declare function _0x1204EB53A5FBC63D(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x14C4A49E36C29E49 | Since: 1207
 */
export declare function _0x14C4A49E36C29E49(): any;
/**
 * No comment provided
 *
 * Hash: 0x16E9ABDD34DDD931 | Since: 1207
 */
export declare function _0x16E9ABDD34DDD931(): void;
/**
 * No comment provided
 *
 * Hash: 0x1811A02277A9E49D | Since: 1207
 */
export declare function _0x1811A02277A9E49D(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x18C3DFAC458783BB | Since: 1207
 */
export declare function _0x18C3DFAC458783BB(): void;
/**
 * No comment provided
 *
 * Hash: 0x190F7DA1AC09A8EF | Since: 1207
 */
export declare function _0x190F7DA1AC09A8EF(): any;
/**
 * No comment provided
 *
 * Hash: 0x1D931B7CC0EE3956 | Since: 1436
 */
export declare function _0x1D931B7CC0EE3956(): [boolean, string, string, string];
/**
 * No comment provided
 *
 * Hash: 0x1D9F72DD4FD9A9D7 | Since: 1207
 */
export declare function _0x1D9F72DD4FD9A9D7(): void;
/**
 * No comment provided
 *
 * Hash: 0x1F6EBD94680252CE | Since: 1207
 */
export declare function _0x1F6EBD94680252CE(): void;
/**
 * No comment provided
 *
 * Hash: 0x1FC6C727D30FFDDE | Since: 1207
 */
export declare function _0x1FC6C727D30FFDDE(): void;
/**
 * No comment provided
 *
 * Hash: 0x29E6655DF3590B0D | Since: 1207
 */
export declare function _0x29E6655DF3590B0D(): void;
/**
 * No comment provided
 *
 * Hash: 0x2AB7C81B3F70570C | Since: 1207
 */
export declare function _0x2AB7C81B3F70570C(): any;
/**
 * No comment provided
 *
 * Hash: 0x2DD3149DC34A3F4C | Since: 1207
 */
export declare function _0x2DD3149DC34A3F4C(): void;
/**
 * No comment provided
 *
 * Hash: 0x39073DA4EDDBC91D | Since: 1207
 */
export declare function _0x39073DA4EDDBC91D(): void;
/**
 * No comment provided
 *
 * Hash: 0x3B8E3AD9677CE12B | Since: 1207
 */
export declare function _0x3B8E3AD9677CE12B(): void;
/**
 * No comment provided
 *
 * Hash: 0x3C486E334520579D | Since: 1207
 */
export declare function _0x3C486E334520579D(): void;
/**
 * No comment provided
 *
 * Hash: 0x3C8F74E8FE751614 | Since: 1207
 */
export declare function _0x3C8F74E8FE751614(): void;
/**
 * No comment provided
 *
 * Hash: 0x4138EE36BC3DC0A7 | Since: 1207
 */
export declare function _0x4138EE36BC3DC0A7(): any;
/**
 * No comment provided
 *
 * Hash: 0x41E452A3C580D1A7 | Since: 1207
 */
export declare function _0x41E452A3C580D1A7(): void;
/**
 * No comment provided
 *
 * Hash: 0x450769C833D58844 | Since: 1207
 */
export declare function _0x450769C833D58844(): any;
/**
 * No comment provided
 *
 * Hash: 0x465F04F68AD38197 | Since: 1207
 */
export declare function _0x465F04F68AD38197(duration: number): [any, string, string];
/**
 * No comment provided
 *
 * Hash: 0x4D2F46D1B28D90FB | Since: 1207
 */
export declare function _0x4D2F46D1B28D90FB(): void;
/**
 * No comment provided
 *
 * Hash: 0x5060FA977CEA4455 | Since: 1207
 */
export declare function _0x5060FA977CEA4455(): any;
/**
 * No comment provided
 *
 * Hash: 0x5B637D6F3B67716A | Since: 1207
 */
export declare function _0x5B637D6F3B67716A(): void;
/**
 * No comment provided
 *
 * Hash: 0x6072B7420A83A03F | Since: 1207
 */
export declare function _0x6072B7420A83A03F(): any;
/**
 * Zooms in the gameplay camera to the next zoom level?
 * USE_* - WAS_*
 *
 * Hash: 0x632BE8D84846FA56 | Since: 1207
 */
export declare function _0x632BE8D84846FA56(): void;
/**
 * Maintains the death camera after respawn
 *
 * Hash: 0x63E5841A9264D016 | Since: 1207
 */
export declare function _0x63E5841A9264D016(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x641092322A8852AB | Since: 1207
 */
export declare function _0x641092322A8852AB(): void;
/**
 * No comment provided
 *
 * Hash: 0x6519238858AF5479 | Since: 1207
 */
export declare function _0x6519238858AF5479(): void;
/**
 * No comment provided
 *
 * Hash: 0x6CAB0BA160B168D2 | Since: 1207
 */
export declare function _0x6CAB0BA160B168D2(): void;
/**
 * No comment provided
 *
 * Hash: 0x6DFD37E586D4F44F | Since: 1207
 */
export declare function _0x6DFD37E586D4F44F(): any;
/**
 * No comment provided
 *
 * Hash: 0x70A6658D476C6187 | Since: 1207
 */
export declare function _0x70A6658D476C6187(): void;
/**
 * Zooms in the third person camera closer to ground level.
 * Must be called every frame to interpolate.
 * Pass false to reset.
 *
 * Hash: 0x71D71E08A7ED5BD7 | Since: 1207
 */
export declare function _0x71D71E08A7ED5BD7(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x728491FB3DFFEF99 | Since: 1207
 */
export declare function _0x728491FB3DFFEF99(): void;
/**
 * No comment provided
 *
 * Hash: 0x73FF6BE63DC18819 | Since: 1207
 */
export declare function _0x73FF6BE63DC18819(): any;
/**
 * No comment provided
 *
 * Hash: 0x796085220ADCC847 | Since: 1207
 */
export declare function _0x796085220ADCC847(): any;
/**
 * No comment provided
 *
 * Hash: 0x7CE9DC58E3E4755F | Since: 1207
 */
export declare function _0x7CE9DC58E3E4755F(): any;
/**
 * No comment provided
 *
 * Hash: 0x7E40A01B11398FCB | Since: 1207
 */
export declare function _0x7E40A01B11398FCB(): void;
/**
 * No comment provided
 *
 * Hash: 0x80D7A3E39B120BC4 | Since: 1207
 */
export declare function _0x80D7A3E39B120BC4(): any;
/**
 * No comment provided
 *
 * Hash: 0x8505E05FC8822843 | Since: 1207
 */
export declare function _0x8505E05FC8822843(): void;
/**
 * UPDATE_PLAYER_PLAYING_STATE - Releasing Lasso Hint Cam
 * Return type char in ida
 * _SET_GAMEPLAY_HINT_*
 *
 * Hash: 0x88544C0E3291DCAE | Since: 1207
 */
export declare function _0x88544C0E3291DCAE(): void;
/**
 * No comment provided
 *
 * Hash: 0x8B1A5FE7E41E52B2 | Since: 1311
 */
export declare function _0x8B1A5FE7E41E52B2(): any;
/**
 * No comment provided
 *
 * Hash: 0x8E036B41C37D0E5F | Since: 1207
 */
export declare function _0x8E036B41C37D0E5F(): void;
/**
 * _IS_SCRIPTED_S*
 *
 * Hash: 0x975F6EBB62632FE3 | Since: 1207
 */
export declare function _0x975F6EBB62632FE3(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9AC65A36D3C0C189 | Since: 1207
 */
export declare function _0x9AC65A36D3C0C189(): void;
/**
 * No comment provided
 *
 * Hash: 0xA54D643D0773EB65 | Since: 1207
 */
export declare function _0xA54D643D0773EB65(duration: number): [string, string];
/**
 * NPLOI_UPDATE__GUN_SPINNING_PREVIEW - Adjusting Camera / Ped Reset Flags This Frame
 * _DISABLE_*
 *
 * Hash: 0xA8BA2E0204D8486F | Since: 1355
 */
export declare function _0xA8BA2E0204D8486F(): void;
/**
 * No comment provided
 *
 * Hash: 0xAC77757C05DE9E5A | Since: 1207
 */
export declare function _0xAC77757C05DE9E5A(cameraDictionary: string): void;
/**
 * No comment provided
 *
 * Hash: 0xB6A80E1E3A5444F1 | Since: 1311
 */
export declare function _0xB6A80E1E3A5444F1(): any;
/**
 * No comment provided
 *
 * Hash: 0xB85C13E0BF1F2A1C | Since: 1207
 */
export declare function _0xB85C13E0BF1F2A1C(): void;
/**
 * No comment provided
 *
 * Hash: 0xC205B3C54C6A4E37 | Since: 1207
 */
export declare function _0xC205B3C54C6A4E37(): void;
/**
 * No comment provided
 *
 * Hash: 0xC252C0CC969AF79A | Since: 1207
 */
export declare function _0xC252C0CC969AF79A(): void;
/**
 * No comment provided
 *
 * Hash: 0xC285FD21294A1C49 | Since: 1207
 */
export declare function _0xC285FD21294A1C49(cameraDictionary: string): boolean;
/**
 * Camera will be or is running
 *
 * Hash: 0xC3742F1FDF0A6824 | Since: 1355
 */
export declare function _0xC3742F1FDF0A6824(): void;
/**
 * No comment provided
 *
 * Hash: 0xC3AEBB276825A359 | Since: 1436
 */
export declare function _0xC3AEBB276825A359(dictionary: string, shotName: string, duration: number): boolean;
/**
 * shakeName: REINFORCED_LASSO_STRUGGLE_SHAKE
 * _RES*
 *
 * Hash: 0xC3E9E5D4F413B773 | Since: 1207
 */
export declare function _0xC3E9E5D4F413B773(shakeName: string, intensity: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCF69EA05CD9C33C9 | Since: 1207
 */
export declare function _0xCF69EA05CD9C33C9(): void;
/**
 * No comment provided
 *
 * Hash: 0xDB382FE20C2DA222 | Since: 1207
 */
export declare function _0xDB382FE20C2DA222(): void;
/**
 * No comment provided
 *
 * Hash: 0xDC62CD70658E7A02 | Since: 1207
 */
export declare function _0xDC62CD70658E7A02(): any;
/**
 * No comment provided
 *
 * Hash: 0xDF7F5BE9150E47E4 | Since: 1207
 */
export declare function _0xDF7F5BE9150E47E4(): void;
/**
 * No comment provided
 *
 * Hash: 0xE28F73212A813E82 | Since: 1207
 */
export declare function _0xE28F73212A813E82(): void;
/**
 * No comment provided
 *
 * Hash: 0xE2BB2D6A9FE2ECDE | Since: 1207
 */
export declare function _0xE2BB2D6A9FE2ECDE(): void;
/**
 * No comment provided
 *
 * Hash: 0xE6F364DE6C2FDEFE | Since: 1207
 */
export declare function _0xE6F364DE6C2FDEFE(): void;
/**
 * No comment provided
 *
 * Hash: 0xEA113BF9B0C0C5D7 | Since: 1207
 */
export declare function _0xEA113BF9B0C0C5D7(dictionary: string, shotName: string, duration: number): any;
/**
 * No comment provided
 *
 * Hash: 0xEF9A3132A0AA6B19 | Since: 1207
 */
export declare function _0xEF9A3132A0AA6B19(): any;
/**
 * No comment provided
 *
 * Hash: 0xF1A6FEEDF3776EF9 | Since: 1207
 */
export declare function _0xF1A6FEEDF3776EF9(): void;
/**
 * No comment provided
 *
 * Hash: 0xF48664E9C83825E3 | Since: 1207
 */
export declare function _0xF48664E9C83825E3(): void;
/**
 * No comment provided
 *
 * Hash: 0xF824530B612FE0CE | Since: 1207
 */
export declare function _0xF824530B612FE0CE(): any;
/**
 * No comment provided
 *
 * Hash: 0xFC3F638BE2B6BB02 | Since: 1207
 */
export declare function _0xFC3F638BE2B6BB02(): void;
/**
 * No comment provided
 *
 * Hash: 0xFEB8646818294C75 | Since: 1207
 */
export declare function _0xFEB8646818294C75(): void;
/**
 * _SET_GAMEPLAY_P* - _SET_GAMEPLAY_V*
 *
 * Hash: 0xFEFDDC6E8FDF8A75 | Since: 1207
 */
export declare function _0xFEFDDC6E8FDF8A75(shakeName: string, intensity: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB8B207C34285E978 | Since: 1207
 */
export declare function camCreate(cameraDictionary: string): void;
/**
 * No comment provided
 *
 * Hash: 0x7B0279170961A73F | Since: 1207
 */
export declare function camCreate2(cameraDictionary: string): void;
/**
 * No comment provided
 *
 * Hash: 0x0A5A4F1979ABB40E | Since: 1207
 */
export declare function camDestroy(cameraDictionary: string): void;
/**
 * No comment provided
 *
 * Hash: 0x0E94C95EC3185FA9 | Since: 1207
 */
export declare function cinematicLocationSetLocationAndRotation(name: string, pos: Vector3, rot: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xBC016635D6A73B31 | Since: 1207
 */
export declare function cinematicLocationTriggerScriptedShotEvent2(dictionary: string, shotName: string, duration: number): void;
/**
 * Creates Kill Cam for specified Ped Handle
 *
 * Hash: 0x2F994CC29CAA9D22 | Since: 1207
 */
export declare function createKillCam(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x8910C24B7E0046EC | Since: 1207
 */
export declare function disableCinematicModeThisFrame(): void;
/**
 * Does the same as 0x9C473089A934C930 (DISABLE_ON_FOOT_FIRST_PERSON_VIEW_THIS_UPDATE)
 *
 * Hash: 0x05AB44D906738426 | Since: 1207
 */
export declare function disableOnFootFirstPersonViewThisUpdate2(): void;
/**
 * Used for DUELING_MANAGE_DEATH_CAMERA - Initializing death camera
 * Params: targetPed = death cam focuses on it
 *
 * Hash: 0xE3639DB78B3B5400 | Since: 1207
 */
export declare function forceCinematicDeathCamOnPed(targetPed: number | IPed): void;
/**
 * Returns true if first person camera is active in saloon1.ysc
 *
 * Hash: 0x90DA5BA5C2635416 | Since: 1207
 */
export declare function forceFirstPersonCamThisFrame(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC64ABC0676AF262B | Since: 1207
 */
export declare function forceLetterBoxThisUpdate(): void;
/**
 * Forces camera position to furthest 3rd person
 *
 * Hash: 0x1CFB749AD4317BDE | Since: 1207
 */
export declare function forceThirdPersonCamFarThisFrame(): void;
/**
 * Forces camera position to second furthest 3rd person
 *
 * Hash: 0x8370D34BD2E60B73 | Since: 1207
 */
export declare function forceThirdPersonCamThisFrame(): void;
/**
 * Forces camera position to closest 3rd person
 *
 * Hash: 0x718C6ECF5E8CBDD4 | Since: 1207
 */
export declare function forceThirdPersonCloseThisFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0x027CAB2C3AF27010 | Since: 1207
 */
export declare function freezeGameplayCamThisFrame(): void;
/**
 * No comment provided
 *
 * Hash: 0x4653A741D17F2CD0 | Since: 1207
 */
export declare function getPhotoModeDof(): number;
/**
 * No comment provided
 *
 * Hash: 0x2533BAFFBE737E54 | Since: 1207
 */
export declare function getPhotoModeFocalLength(): number;
/**
 * No comment provided
 *
 * Hash: 0x18FC740FFDCD7454 | Since: 1207
 */
export declare function getPhotoModeFocusDistance(): number;
/**
 * Only used in R* Script camera_photomode
 *
 * Hash: 0x20389408F0E93B9A | Since: 1207
 */
export declare function isAnimSceneCamActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x927B810E43E99932 | Since: 1207
 */
export declare function isAvailable(cameraDictionary: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDD0B7C5AE58F721D | Since: 1207
 */
export declare function isCamDataDictLoaded(cameraDictionary: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA14D5FE82BCB1D9E | Since: 1207
 */
export declare function isCamPhotofxRunning(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAA235E2F2C09E952 | Since: 1207
 */
export declare function isCinematicCamLocationLoaded(sLocationDictName: string): boolean;
/**
 * Checks data related to Cinematic Cam Locations, if the check fails, the location is being loaded using 0x1B3C2D961F5FC0E1.
 *
 * Hash: 0x595550376B7EA230 | Since: 1207
 */
export declare function isCinematicCamLocationLoaded2(locationDictName: string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x74F1D22EFA71FAB8 | Since: 1207
 */
export declare function isInCinematicMode(): boolean;
/**
 * Returns true if player is in first person
 *
 * Hash: 0xD1BA66940E94C547 | Since: 1207
 */
export declare function isInFullFirstPersonMode(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6A4D224FC7643941 | Since: 1207
 */
export declare function loadDataDict(cameraDictionary: string): void;
/**
 * No comment provided
 *
 * Hash: 0x1B3C2D961F5FC0E1 | Since: 1207
 */
export declare function loadCinematicCamLocation(locationDictName: string): void;
/**
 * No comment provided
 *
 * Hash: 0x9F97E85EC142255E | Since: 1207
 */
export declare function pauseFocus(cam: number | ICamera, pause: boolean): void;
/**
 * Used to enable headshot kill replay when you headshot set ped.
 * Params: p1 seems to be 0 or 1 in R* Scripts
 *
 * Hash: 0x986F7A51EE3E1F92 | Since: 1207
 */
export declare function reactivatePedHeadshotExecuteSlowcam(ped: number | IPed): void;
/**
 * Creates Cinematic Black Bars (at top and bottom)
 *
 * Hash: 0x69D65E89FFD72313 | Since: 1207
 */
export declare function requestLetterBoxNow(state: boolean, transitionTime: number): void;
/**
 * Creates Cinematic Black Bars (at top and bottom) (this frame)
 *
 * Hash: 0xE296208C273BD7F0 | Since: 1207
 */
export declare function requestLetterBoxOvertime(startTransitionTime: number, endTransitionTime: number): void;
/**
 * Set cam DOF and focal settings
 *
 * Hash: 0xE4B7945EF4F1BFB2 | Since: 1207
 */
export declare function setCamDofParams(cam: number | ICamera): any;
/**
 * No comment provided
 *
 * Hash: 0x11F32BB61B756732 | Since: 1207
 */
export declare function setCamFocusDistance(cam: number | ICamera, distance: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6C1053C433A573CF | Since: 1207
 */
export declare function setGameplayCamInitialHeading(camInitialHeading: number): void;
/**
 * No comment provided
 *
 * Hash: 0x449995EA846D3FC2 | Since: 1207
 */
export declare function setGameplayCamInitialPitch(camInitialPitch: number): void;
/**
 * Used in Script Function SHOP_CAMERA_SUPPORT_START_NEW_ORBIT
 *
 * Hash: 0xBCDA0BA8762FACB9 | Since: 1207
 */
export declare function setGameplayCamInitialZoom(camInitialZoom: number): void;
/**
 * Not official name
 * This native allows to move the gameplay cam with the given speed, enableSlide will allow to move the cam to the slideOffset, enableZoom will allow to move the cam to the zoomOffset.
 *
 * EXAMPLE:
 * Citizen.InvokeNative(0x066167c63111d8cf,1.0, true, -1.0, true, 2.0)
 *
 * Hash: 0x066167C63111D8CF | Since: 1207
 */
export declare function setGameplayCamParamsThisUpdate(camSpeed: number, enableSlide: boolean, slideOffset: number, enableZoom: boolean, zoomOffset: number): void;
/**
 * Used for DUELING_MANAGE_DEATH_CAMERA - Initializing death camera
 * _SET_P* - _SET_S*
 *
 * Hash: 0x6E969927CF632608 | Since: 1207
 */
export declare function setStartCinematicDeathCam(): void;
/**
 * [SHOP_CAMERA_SUPPORT_START_NEW_ORBIT]
 * p0: struct<32> \/\*256\*\/
 *
 * Hash: 0x65B205BF30C13DDB | Since: 1207
 */
export declare function startOrbit(): any;
/**
 * script_rel: DRUNK_SHAKE, REINFORCED_LASSO_STRUGGLE_SHAKE, CORRECTOR_SHAKE, MINIGAME_BOUNTY_SHAKE, HAND_SHAKE, MINIGAME_TRAIN_SHAKE
 * script_mp_rel: DRUNK_SHAKE, REINFORCED_LASSO_STRUGGLE_SHAKE
 * _STOP_GAMEPLAY_CAM* - _STOP_I*
 *
 * Hash: 0x4285804FD65D8066 | Since: 1207
 */
export declare function stopGameplayCamShakingWithName(shakeName: string): void;
/**
 * No comment provided
 *
 * Hash: 0x9A92C06ACBAF9731 | Since: 1207
 */
export declare function triggerMissionFailedCam(): void;
/**
 * No comment provided
 *
 * Hash: 0x798BE43C9393632B | Since: 1207
 */
export declare function unloadDataDict(cameraDictionary: string): void;
/**
 * No comment provided
 *
 * Hash: 0x2412216FCC7B4E3E | Since: 1207
 */
export declare function unloadCinematicLocation(dictionaryName: string): void;
