import { Vector3, IEntity, IPed, IVehicle, IObject } from '@risinglife/redm-shared';
/**
 * No comment provided
 *
 * Hash: 0x45C597097DD7CB81 | Since: 1207
 */
export declare function addCoverBlockingArea(playerX: number, playerY: number, playerZ: number, radiusX: number, radiusY: number, radiusZ: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD5C12A75C7B9497F | Since: 1207
 */
export declare function addCoverPoint(): number;
/**
 * Params: p2 is always -1.f in R* Scripts
 *
 * Hash: 0x3923EC958249657D | Since: 1207
 */
export declare function addFleeTargetPed(ped: number | IPed, targetPed: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x23083260DEC3A551 | Since: 1207
 */
export declare function addPatrolRouteLink(node1: number, node2: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8EDF950167586B7C | Since: 1207
 */
export declare function addPatrolRouteNode(nodeId: number, pos: Vector3, lookPosX: number, lookPosY: number, lookPosZ: number, duration: number): string;
/**
 * Returns true when requested asset is loaded
 *
 * Hash: 0x5E5D96BE25E9DF68 | Since: 1207
 */
export declare function areCompositeLootableEntityDefAssetsLoaded(asset: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x60F9A4393A21F741 | Since: 1207
 */
export declare function assistedMovementIsRouteLoaded(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x3548536485DD792B | Since: 1207
 */
export declare function assistedMovementRemoveRoute(): string;
/**
 * No comment provided
 *
 * Hash: 0xD5002D78B7162E1B | Since: 1207
 */
export declare function assistedMovementSetRouteProperties(props: number): string;
/**
 * No comment provided
 *
 * Hash: 0x2D19BC4DF626CBE7 | Since: 1207
 */
export declare function canStartItemInteraction(ped: number | IPed, itemHash: number | string, interactionAnimHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC35B5CDB2824CF69 | Since: 1207
 */
export declare function clearDrivebyUnderneathDrivingTask(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x176CECF6F920D707 | Since: 1207
 */
export declare function clearPedSecondary(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xE1EF3C1216AFF2CD | Since: 1207
 */
export declare function clearPeds(ped: number | IPed): void;
/**
 * Immediately stops the pedestrian from whatever it's doing. They stop fighting, animations, etc. they forget what they were doing.
 *
 * resetCrouch TRUE = ped will stand up if crouching, FALSE = ped will remain crouching if crouched
 *
 * Hash: 0xAAA34F8A7CB32098 | Since: 1207
 */
export declare function clearPedsImmediately(ped: number | IPed, resetCrouch: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x3841422E9C488D8C | Since: 1207
 */
export declare function clearSequence(): number;
/**
 * No comment provided
 *
 * Hash: 0xB043ECA801B8CBC1 | Since: 1207
 */
export declare function closePatrolRoute(): void;
/**
 * No comment provided
 *
 * Hash: 0x39E72BC99E6360CB | Since: 1207
 */
export declare function closeSequence(taskSequenceId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xAF8A443CCC8018DC | Since: 1207
 */
export declare function createPatrolRoute(): void;
/**
 * Returns scenario
 *
 * Hash: 0x94B745CE41DB58A1 | Since: 1207
 */
export declare function createScenarioPointHash(scenarioHash: number | string, pos: Vector3, heading: number): number;
/**
 * Returns scenario
 *
 * Hash: 0x794AB1379A74064D | Since: 1207
 */
export declare function createScenarioPointHashAttachedToEntity(entity: number | IEntity, scenarioHash: number | string, pos: Vector3, heading: number): number;
/**
 * No comment provided
 *
 * Hash: 0x7767DD9D65E91319 | Since: 1207
 */
export declare function deletePatrolRoute(): string;
/**
 * No comment provided
 *
 * Hash: 0x5A59271FFADD33C1 | Since: 1207
 */
export declare function doesScenarioExistInArea(pos: Vector3, radius: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF9034C136C9E00D3 | Since: 1207
 */
export declare function doesScenarioGroupExist(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x6EEAD6AF637DA752 | Since: 1207
 */
export declare function doesScenarioOfTypeExistInAreaHash(pos: Vector3, typeHash: number | string, radius: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x841475AC96E794D1 | Since: 1207
 */
export declare function doesScenarioPointExist(scenario: number): boolean;
/**
 * Checks if there is a cover point at position
 *
 * Hash: 0xA98B8E3C088E5A31 | Since: 1207
 */
export declare function doesScriptedCoverPointExistAtCoords(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEED08A3A98B847E2 | Since: 1207
 */
export declare function endDuel(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xF533D68FF970D190 | Since: 1207
 */
export declare function findScenarioOfTypeHash(pos: Vector3, scenarioType: number | string, distance: number): number;
/**
 * No comment provided
 *
 * Hash: 0x444C910A5058E568 | Since: 1207
 */
export declare function forceScenarioGroupPriority(): void;
/**
 * No comment provided
 *
 * Hash: 0x534AEBA6E5ED4CAB | Since: 1207
 */
export declare function getActiveVehicleMissionType(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x0CCFE72B43C9CF96 | Since: 1207
 */
export declare function getIsCarriableEntity(entity: number | IEntity): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8785E6E40C7A8819 | Since: 1207
 */
export declare function getIsPedAimingInTheAir(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB0760331C7AA4155 | Since: 1207
 */
export declare function getIsActive(ped: number | IPed, taskIndex: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCB4E8BE8A0063C5D | Since: 1207
 */
export declare function getIsWaypointRecordingLoaded(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x804425C4BBD00883 | Since: 1207
 */
export declare function getItemInteractionItemId(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xBC864A70AD55E0C1 | Since: 1207
 */
export declare function getItemInteractionPromptProgress(ped: number | IPed, inputContext: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x6AA3DCA2C6F5EB6D | Since: 1207
 */
export declare function getItemInteractionState(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x8517D4A6CA8513ED | Since: 1207
 */
export declare function getPedDesiredMoveBlendRatio(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xE6A877C64CAF1BC5 | Since: 1207
 */
export declare function getPedWaypointDistance(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xD39A2F3E7FCAFF08 | Since: 1207
 */
export declare function getPedWaypointOverrideSpeed(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x2720AAA75001E094 | Since: 1207
 */
export declare function getPedWaypointProgress(ped: number | IPed): number;
/**
 * Old name: _GET_SCENARIO_POINT_ENTITY
 *
 * Hash: 0x295514F198EFD0CA | Since: 1207
 */
export declare function getPropForScenarioPoint(scenarioPoint: number): [number, string];
/**
 * No comment provided
 *
 * Hash: 0xD04241BBF6D03A5E | Since: 1207
 */
export declare function getRansackScenarioPointPedIsUsing(ped: number | IPed): any;
/**
 * Note: scenariosInRadius is an array, and its size and values should be aligned to 8 bytes.
 *
 * Hash: 0x345EC3B7EBDE1CB5 | Since: 1207
 */
export declare function getScenarioPointsInArea(pos: Vector3, radius: number, scenariosInRadius: any, size: number): number;
/**
 * No comment provided
 *
 * Hash: 0x594A1028FC2A3E85 | Since: 1207
 */
export declare function getScriptedCoverPointCoords(coverpoint: number): Vector3;
/**
 * Gets the status of a script-assigned task, and returns an int between 0-8
 * taskHash: https://alloc8or.re/rdr3/doc/enums/eScriptTaskHash.txt
 *
 * WAITING_TO_START_TASK = 0,
 * PERFORMING_TASK
 * DORMANT_TASK
 * VACANT_STAGE
 * GROUP_TASK_STAGE
 * ATTRACTOR_SCRIPT_TASK_STAGE
 * SECONDARY_TASK_STAGE
 * TASK_NOT_FOUND
 * FINISHED_TASK
 *
 * Hash: 0x77F1BEB8863288D5 | Since: 1207
 */
export declare function getScriptStatus(ped: number | IPed, taskHash: number | string): number;
/**
 * returned values:
 * 0 to 7 = task that's currently in progress, 0 meaning the first one.
 * -1 no task sequence in progress.
 *
 * Hash: 0x00A9010CFE1E3533 | Since: 1207
 */
export declare function getSequenceProgress(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xB4F47213DF45A64C | Since: 1207
 */
export declare function getMoveNetworkEvent(ped: number | IPed): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x717E4D1F2048376D | Since: 1207
 */
export declare function getMoveNetworkState(ped: number | IPed): string;
/**
 * No comment provided
 *
 * Hash: 0x3DC971EB22F73447 | Since: 1207
 */
export declare function getVehicleWaypointPlaybackOverrideSpeed(): any;
/**
 * No comment provided
 *
 * Hash: 0x9824CFF8FC66E159 | Since: 1207
 */
export declare function getVehicleWaypointProgress(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0x416B62AC8B9E5BBD | Since: 1207
 */
export declare function getVehicleWaypointTargetPoint(vehicle: number | IVehicle): number;
/**
 * No comment provided
 *
 * Hash: 0xA5B769058763E497 | Since: 1207
 */
export declare function getWaypointDistanceAlongRoute(): [number, string];
/**
 * No comment provided
 *
 * Hash: 0x8785E6E40C7A8818 | Since: 1207
 */
export declare function isDrivebyUnderneathDrivingTask(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCF9B71C0AF824036 | Since: 1355
 */
export declare function isEmoteRunning(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA320EF046186FA3B | Since: 1207
 */
export declare function isMountedWeaponUnderneathDrivingTask(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD4D8636C0199A939 | Since: 1207
 */
export declare function isMoveBlendRatioRunning(moveBlendRatio: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x24A2AD74FA9814E2 | Since: 1207
 */
export declare function isMoveBlendRatioSprinting(moveBlendRatio: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x349CE7B56DAFD95C | Since: 1207
 */
export declare function isMoveBlendRatioStill(moveBlendRatio: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF133BBBE91E1691F | Since: 1207
 */
export declare function isMoveBlendRatioWalking(moveBlendRatio: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAA135F9482C82CC3 | Since: 1207
 */
export declare function isPedActiveInScenario(ped: number | IPed, scenario: number): boolean;
/**
 * This function is hard-coded to always return false.
 *
 * Hash: 0x90A09F3A45FED688 | Since: 1207
 */
export declare function isPedBeingArrested(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x74E559B3BC910685 | Since: 1207
 */
export declare function isPedCuffed(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0C3CB2E600C8977D | Since: 1207
 */
export declare function isPedExitingScenario(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2A74E1D5F2F00EEC | Since: 1207
 */
export declare function isPedGettingUp(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF330A5C062B29BED | Since: 1207
 */
export declare function isPedInHitReact(ped: number | IPed): boolean;
/**
 * This native checks if a ped is on the ground, in pain from a (gunshot) wound.
 *
 * Hash: 0xDEB6D52126E7D640 | Since: 1207
 */
export declare function isPedInWrithe(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC5286FFC176F28A2 | Since: 1207
 */
export declare function isPedRunning(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x038B1F1674F0E242 | Since: 1207
 */
export declare function isPedRunningInspection(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEC7E480FF8BD0BED | Since: 1207
 */
export declare function isPedRunningItemInteraction(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x916B8E075ABC8B4E | Since: 1207
 */
export declare function isPedScenarioReactLooking(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x57E457CD2C0FC168 | Since: 1207
 */
export declare function isPedSprinting(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAC29253EEF8F0180 | Since: 1207
 */
export declare function isPedStill(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDE4C184B2B9B071A | Since: 1207
 */
export declare function isPedWalking(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x367A09DED4E05B99 | Since: 1207
 */
export declare function isScenarioGroupEnabled(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x788756D73AC2E07C | Since: 1207
 */
export declare function isScenarioOccupied(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3A815DB3EA088722 | Since: 1207
 */
export declare function isScenarioTypeEnabled(): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x921CE12C489C4C41 | Since: 1207
 */
export declare function isMoveNetworkActive(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x30ED88D5E0C56A37 | Since: 1207
 */
export declare function isMoveNetworkReadyForTransition(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x559A6F8C5133B4EE | Since: 1207
 */
export declare function isTeamCarriableEntity(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE03B3F2D3DC59B64 | Since: 1207
 */
export declare function isWaypointPlaybackGoingOnForPed(ped: number | IPed): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xF5134943EA29868C | Since: 1207
 */
export declare function isWaypointPlaybackGoingOnForVehicle(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x67BFCED22909834D | Since: 1207
 */
export declare function makeObjectNotCarriable(_object: number | IObject): void;
/**
 * Note: patrolRoute must be prefixed with 'miss_' for it to be valid
 *
 * Hash: 0xA36BFB5EE89F3D82 | Since: 1207
 */
export declare function openPatrolRoute(): string;
/**
 * No comment provided
 *
 * Hash: 0xE8854A4326B9E12B | Since: 1207
 */
export declare function openSequence(): number;
/**
 * No comment provided
 *
 * Hash: 0x295E3CCEC879CCD7 | Since: 1207
 */
export declare function pedHasUseScenario(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x748040460F8DF5DC | Since: 1207
 */
export declare function playAnimOnRunningScenario(ped: number | IPed): [string, string];
/**
 * No comment provided
 *
 * Hash: 0x77A1EEC547E7FCF1 | Since: 1207
 */
export declare function playEntityScriptedAnim(entity: number | IEntity, args: any): void;
/**
 * lookIntensity: see SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT
 *
 * exitAnimation: LOOK_RETURN_GENERIC = 1,
 * LOOK_RETURN_DISMISSIVE = 2,
 * LOOK_RETURN_RELIEVED = 3
 *
 * Hash: 0xE7FA07624574B79A | Since: 1207
 */
export declare function reactLookAt(ped: number | IPed, targetPed: number | IPed, lookIntensity: number, exitAnimation: number, duration: number, targetPed2: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x541E5B41DCA45828 | Since: 1207
 */
export declare function reactLookAtEnd(ped: number | IPed, exitAnimation: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDB6708C0B46F56D8 | Since: 1207
 */
export declare function removeAllCoverBlockingAreas(): void;
/**
 * No comment provided
 *
 * Hash: 0xAE287C923D891715 | Since: 1207
 */
export declare function removeCoverPoint(coverpoint: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFF1B8B4AA1C25DC8 | Since: 1207
 */
export declare function removeWaypointRecording(): string;
/**
 * No comment provided
 *
 * Hash: 0xD01015C7316AE176 | Since: 1207
 */
export declare function requestMoveNetworkStateTransition(ped: number | IPed): string;
/**
 * No comment provided
 *
 * Hash: 0x9EEFB62EB27B5792 | Since: 1207
 */
export declare function requestWaypointRecording(): string;
/**
 * No comment provided
 *
 * Hash: 0xDD902D0349AFAD3A | Since: 1207
 */
export declare function resetScenarioGroupsEnabled(): void;
/**
 * No comment provided
 *
 * Hash: 0x0D40EE2A7F2B2D6D | Since: 1207
 */
export declare function resetScenarioTypesEnabled(): void;
/**
 * No comment provided
 *
 * Hash: 0x87B66D77D545DB66 | Since: 1207
 */
export declare function setAnimFilter(entity: number | IEntity, priority: number, secondary: boolean): string;
/**
 * No comment provided
 *
 * Hash: 0x032D49C5E359C847 | Since: 1207
 */
export declare function setAnimRate(): void;
/**
 * No comment provided
 *
 * Hash: 0xE5B302114D8162EE | Since: 1207
 */
export declare function setDrivebyTarget(shootingPed: number | IPed, targetPed: number | IPed, targetVehicle: number | IVehicle, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x5C9B84BD7D31D908 | Since: 1207
 */
export declare function setDriveCruiseSpeed(driver: number | IPed, cruiseSpeed: number): void;
/**
 * Not implemented.
 *
 * Hash: 0x404A5AA9B9F0B746 | Since: 1207
 */
export declare function setDriveMaxCruiseSpeed(ped: number | IPed, maxCruiseSpeed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x295F03DC97BEEBC1 | Since: 1207
 */
export declare function setEnableSpeedRestrainForWaypointRecordingLeader(): void;
/**
 * clipset: CLIPSET@MECH_HOGTIE@HUMAN@BREAKOUT_MG@GROUND, CLIPSET@MECH_HOGTIE@HUMAN@BREAKOUT_MG@SHOULDER, CLIPSET@MECH_HOGTIE@HUMAN@BREAKOUT_MG@MOUNT
 * clipset can also be 0
 *
 * Hash: 0x1BF9D36A5EAFFBAE | Since: 1207
 */
export declare function setEnhancedBreakFree(ped: number | IPed): [boolean, string];
/**
 * Makes the ped ragdoll like when falling from a great height
 *
 * Hash: 0x8C825BDC7741D37C | Since: 1207
 */
export declare function setHighFall(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x1E982AC8716912C5 | Since: 1207
 */
export declare function setPedDesiredMoveBlendRatio(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x4455517B28441E60 | Since: 1207
 */
export declare function setPedPathAvoidFire(ped: number | IPed, avoidFire: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xE361C5C71C431A4F | Since: 1207
 */
export declare function setPedPathCanDropFromHeight(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8E06A6FE76C9EFF4 | Since: 1207
 */
export declare function setPedPathCanUseClimbovers(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x77A5B103C87F476E | Since: 1207
 */
export declare function setPedPathCanUseLadders(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x88E32DB8C1A4AA4B | Since: 1207
 */
export declare function setPedPathClimbCostModifier(ped: number | IPed, modifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE8C296B75EACC357 | Since: 1207
 */
export declare function setPedPathDeepSnowCostModifier(ped: number | IPed, modifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3AD8EFF9703BE657 | Since: 1207
 */
export declare function setPedPathFoliageCostModifier(ped: number | IPed, modifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF35425A4204367EC | Since: 1207
 */
export declare function setPedPathMayEnterWater(ped: number | IPed, mayEnterWater: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x38FE1EC73743793C | Since: 1207
 */
export declare function setPedPathPreferToAvoidWater(ped: number | IPed, avoidWater: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xED98E10B0AFCE4B4 | Since: 1207
 */
export declare function setPedWaypointRouteOffset(ped: number | IPed): any;
/**
 * No comment provided
 *
 * Hash: 0x02C8E5B49848664E | Since: 1207
 */
export declare function setScenarioGroupEnabled(toggle: boolean): string;
/**
 * No comment provided
 *
 * Hash: 0xEB47EC4E34FB7EE1 | Since: 1207
 */
export declare function setScenarioTypeEnabled(toggle: boolean): string;
/**
 * repeatMode: 0 = REPEAT_NOT; 1 = REPEAT_FOREVER
 *
 * Hash: 0x58C70CF3A41E4AE7 | Since: 1207
 */
export declare function setSequenceToRepeat(taskSequenceId: number, repeatMode: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB0A6CFD2C69C1088 | Since: 1207
 */
export declare function setMoveNetworkSignalBool(ped: number | IPed, value: boolean): string;
/**
 * No comment provided
 *
 * Hash: 0xD5BB4025AE449A4E | Since: 1207
 */
export declare function setMoveNetworkSignalFloat(ped: number | IPed, value: number): string;
/**
 * No comment provided
 *
 * Hash: 0x545BF19F86E80F11 | Since: 1207
 */
export declare function setTeamCarriableEntity(): void;
/**
 * No comment provided
 *
 * Hash: 0xB5C51DD544F14F58 | Since: 1207
 */
export declare function setUpSpeedRestrainInformationForPlayerFollower(): void;
/**
 * Params: p3 = 0, 1; p5 = 0.0f, -1.0f
 * https://github.com/femga/rdr3_discoveries/tree/master/tasks/TASK_ITEM_INTERACTION
 *
 * Hash: 0xAE72E7DF013AAA61 | Since: 1207
 */
export declare function startItemInteraction(ped: number | IPed, itemHash: number | string, interactionAnimHash: number | string, flag: number): void;
/**
 * No comment provided
 *
 * Hash: 0xEE08C992D238C5D1 | Since: 1207
 */
export declare function stopAnimPlayback(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x97FF36A1D40EA00A | Since: 1207
 */
export declare function stopAnim(ped: number | IPed): [string, string];
/**
 * Makes the specified ped achieve the specified heading.
 *
 * pedHandle: The handle of the ped to assign the task to.
 * heading: The desired heading.
 * timeout: The time, in milliseconds, to allow the task to complete. If the task times out, it is canceled, and the ped will stay at the heading it managed to reach in the time.
 *
 * Hash: 0x93B93A37987F1F3D | Since: 1207
 */
export declare function achieveHeading(ped: number | IPed, heading: number, timeout: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4AF1D73861212F52 | Since: 1207
 */
export declare function aimAtCoord(ped: number | IPed, pos: Vector3, time: number): void;
/**
 * No comment provided
 *
 * Hash: 0xCF7569BD0FB480A0 | Since: 1207
 */
export declare function aimAtEntity(ped: number | IPed, targetEntity: number | IEntity, time: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6671F3EEC681BDA1 | Since: 1207
 */
export declare function aimGunAtCoord(ped: number | IPed, pos: Vector3, time: number): void;
/**
 * duration: the amount of time in milliseconds to do the task.  -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped
 *
 * Hash: 0x9B53BB6E8943AF53 | Since: 1207
 */
export declare function aimGunAtEntity(ped: number | IPed, targetEntity: number | IEntity, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4B39D8F9D0FE7749 | Since: 1207
 */
export declare function ambientAnimalHunt(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x37C13863ABA1B4A3 | Since: 1207
 */
export declare function ambientAnimalStalk(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x979D93372FC8C565 | Since: 1207
 */
export declare function animalAlerted(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xA899B61C66F09134 | Since: 1207
 */
export declare function animalFlee(ped: number | IPed, targetPed: number | IPed): void;
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/tasks/TASK_ANIMAL_INTERACTION
 *
 * Hash: 0xCD181A959CFDD7F4 | Since: 1207
 */
export declare function animalInteraction(ped: number | IPed, targetPed: number | IPed, interactionType: number | string, interactionModel: number | string, skipIdleAnimationClip: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x21FDF9A25CFE1CE5 | Since: 1207
 */
export declare function animalUnalerted(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x8C038A39C4A4B6D6 | Since: 1207
 */
export declare function animalWrithe(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xF3B9A78A178572B1 | Since: 1207
 */
export declare function arrestPed(ped: number | IPed, target: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x83BFC1F836B2F3F2 | Since: 1207
 */
export declare function bark(ped: number | IPed, barkAtTarget: number | IPed, mood: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x15C86013127CE63F | Since: 1207
 */
export declare function boatMission(pedDriver: number | IPed, boat: number | IVehicle, pos: Vector3, maxSpeed: number, drivingStyle: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBB28D1BC9EA8A6A5 | Since: 1207
 */
export declare function breakVehicleDoorLock(ped: number | IPed, vehicle: number | IVehicle): void;
/**
 * carriableSlot:
 * 7 > Back of a horse
 * 6 > Right side of a horse
 * 5 > Left side of a horse
 * flags:
 * 512: enables the prompt being the name of the item when using a generic item
 *
 * Hash: 0xF0B4F759F35CC7F5 | Since: 1207
 */
export declare function carriable(entity: number | IEntity, carryConfig: number | string, carrier: number | IPed, carriableSlot: number, flags: number): void;
/**
 * No comment provided
 *
 * Hash: 0x95A6C46A31D1917D | Since: 1207
 */
export declare function clearDefensiveArea(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x0F804F1DB19B9689 | Since: 1207
 */
export declare function clearLookAt(ped: number | IPed): void;
/**
 * Climbs or vaults the nearest thing.
 *
 * Hash: 0x89D9FCC2435112F1 | Since: 1207
 */
export declare function climb(ped: number | IPed, unused: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xB6C987F9285A3814 | Since: 1207
 */
export declare function climbLadder(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xEE3AA414CF99F368 | Since: 1207
 */
export declare function combatAnimalChargePed(ped: number | IPed, targetPed: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xF960F3D57B660E96 | Since: 1207
 */
export declare function combatAnimalWarn(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x8182B561A29BD597 | Since: 1207
 */
export declare function combatHatedTargets(ped: number | IPed, radius: number): void;
/**
 * Despite its name, it only attacks ONE hated target. The one closest hated target.
 *
 * Hash: 0x7BF835BB9E2698C8 | Since: 1207
 */
export declare function combatHatedTargetsAroundPed(ped: number | IPed, radius: number, flags: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2BBA30B854534A0C | Since: 1207
 */
export declare function combatHatedTargetsAroundPedTimed(ped: number | IPed, radius: number, time: number, flags: number): void;
/**
 * Despite its name, it only attacks ONE hated target. The one closest to the specified position.
 *
 * Hash: 0x4CF5F55DAC3280A0 | Since: 1207
 */
export declare function combatHatedTargetsInArea(ped: number | IPed, pos: Vector3, radius: number, flags: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB5BC69D9C4060BC3 | Since: 1207
 */
export declare function combatHatedTargetsNoLosTest(ped: number | IPed, radius: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF166E48407BAC484 | Since: 1207
 */
export declare function combatPed(ped: number | IPed, targetPed: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x944F30DCB7096BDE | Since: 1207
 */
export declare function combatPedTimed(ped: number | IPed, targetPed: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xE017CF6E2527FE4F | Since: 1207
 */
export declare function companionAmbient(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x3A2A2071DF5CC569 | Since: 1207
 */
export declare function confront(ped: number | IPed, targetPed: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3EB1FE9E8E908E15 | Since: 1207
 */
export declare function cower(ped: number | IPed, duration: number, pedToCowerFrom: number | IPed): string;
/**
 * flags: See TASK_ENTER_VEHICLE
 *
 * Hash: 0x0A11F3BDEC03ED5F | Since: 1207
 */
export declare function disembarkNearestTrainCarriage(ped: number | IPed, flags: number): void;
/**
 * Dismounts the ped from the animal it's mounted on. taskFlag affects what side the rider gets off. p2-p5 are almost always 0.
 * flags: See TASK_ENTER_VEHICLE
 *
 * Hash: 0x48E92D3DDE23C23A | Since: 1207
 */
export declare function dismountAnimal(rider: number | IPed, taskFlag: number, targetPed: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x2F8AF0E82773A171 | Since: 1207
 */
export declare function driveBy(driverPed: number | IPed, targetPed: number | IPed, targetVehicle: number | IVehicle, targetX: number, targetY: number, targetZ: number, distanceToShoot: number, pedAccuracy: number, firingPattern: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xA14B5FBF986BAC23 | Since: 1207
 */
export declare function duck(ped: number | IPed, time: number): void;
/**
 * Params: p4 either 0.2f, 0.25f, 0.31f, 0.4f
 *
 * Hash: 0x5D5B0D5BC3626E5A | Since: 1207
 */
export declare function duel(ped: number | IPed, entity: number | IEntity, vPosOpponentX: number, vPosOpponentY: number, vPosOpponentZ: number, fOpponentHead: number): void;
/**
 * No comment provided
 *
 * Hash: 0x17CA98707B15926A | Since: 1207
 */
export declare function dumpCarriableFromParent(ped: number | IPed, ped2: number | IPed, entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xBD7949BD07299672 | Since: 1207
 */
export declare function eat(ped: number | IPed): void;
/**
 * flags:
 * MOVE_WHILST_WAITING_FOR_PATH = (1 << 0),
 * DO_NOT_STAND_STILL_AT_END_OF_PATH = (1 << 1),
 * SKIP_NAVIGATION = (1 << 2),
 * TEASF_AUTO_START_ANIM_SCENE = (1 << 3),
 * FORCE_STAND_STILL_AT_END_OF_PATH = (1 << 6),
 * ENTER_ANIM_SCENE_DONT_FOLLOW_NAVMESH = (1 << 7)
 *
 * Hash: 0xC2329B0206426644 | Since: 1207
 */
export declare function enterAnimScene(ped: number | IPed, animScene: any, enterSpeed: number, bAutoStart: boolean, flag: number): [string, string];
/**
 * flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eEnterExitVehicleFlags
 *
 * Hash: 0xC20E50AA46D09CA8 | Since: 1207
 */
export declare function enterVehicle(ped: number | IPed, vehicle: number | IVehicle, timeout: number, seat: number, speed: number, flag: number): void;
/**
 * `Params: p2 is returned by BUILTIN::SHIFT_LEFT`
 *
 * Hash: 0x5F22926E1BCE9B08 | Since: 1207
 */
export declare function evasiveAnim(ped1: number | IPed, ped2: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x6F1C49F275BD25B3 | Since: 1207
 */
export declare function everyoneLeaveVehicleInOrder(vehicle: number | IVehicle): void;
/**
 * Adds a new point to the current point route. Call TASK_FLUSH_ROUTE before the first call to this. Call TASK_FOLLOW_POINT_ROUTE to make the Ped go the route.
 *
 * A maximum of 8 points can be added.
 *
 * Hash: 0x1E7889778264843A | Since: 1207
 */
export declare function extendRoute(pos: Vector3): void;
/**
 * Params: p5 = some flag?, p6 = -1.0f, p8 = 0 in R* Scripts
 * fleeStyle: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eFleeStyle
 *
 * Hash: 0x58428248BF4B64E4 | Since: 1207
 */
export declare function fleeCoord(ped: number | IPed, pos: Vector3, fleeStyle: number, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x390E0B697D25EAF5 | Since: 1207
 */
export declare function fleeCoordVia(): void;
/**
 * Params: p4 = -1.0f, p5 = -1, p6 = 0 in R* Scripts
 * fleeStyle: see TASK_FLEE_COORD
 *
 * Hash: 0xFD45175A6DFD7CE9 | Since: 1207
 */
export declare function fleePed(ped: number | IPed, fleeFromTarget: number | IPed, fleeStyle: number, flag: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5802E0F910E4CF1D | Since: 1207
 */
export declare function fleePedVia(): void;
/**
 * Clears the current point route. Call this before TASK_EXTEND_ROUTE and TASK_FOLLOW_POINT_ROUTE.
 *
 * Hash: 0x841142A1376E9006 | Since: 1207
 */
export declare function flushRoute(): void;
/**
 * No comment provided
 *
 * Hash: 0x72997893BFB8ECCC | Since: 1207
 */
export declare function flyingCircle(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xE86A537B5A3C297C | Since: 1207
 */
export declare function flyAway(ped: number | IPed, fleeFromTarget: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xD6CFC2D59DA72042 | Since: 1207
 */
export declare function flyToCoord(ped: number | IPed, travelMbr: number, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x489FFCCCE7392B55 | Since: 1207
 */
export declare function followAndConverseWithPed(ped: number | IPed, targetPed: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x4D2B787BAE9AB760 | Since: 1207
 */
export declare function followEntityAlongWaypointRecordingAtOffset(ped0: number | IPed, ped1: number | IPed): string;
/**
 * No comment provided
 *
 * Hash: 0x2D532EAA142CF83F | Since: 1207
 */
export declare function followEntityWhileAimingAtEntity(ped: number | IPed): void;
/**
 * If no timeout, set timeout to -1.
 *
 * Hash: 0x15D3A79D4E44B913 | Since: 1207
 */
export declare function followNavMeshToCoord(ped: number | IPed, pos: Vector3, speedMultiplier: number, timeout: number, stoppingRange: number, flags: number, heading: number): void;
/**
 * No comment provided
 *
 * Hash: 0x17F58B88D085DBAC | Since: 1207
 */
export declare function followNavMeshToCoordAdvanced(ped: number | IPed, pos: Vector3, speedMultiplier: number, timeout: number, stoppingRange: number, flags: number, entity: number | IEntity, unk: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1B1475414E70DD8E | Since: 1207
 */
export declare function followPavementToCoord(ped: number | IPed, args: any): void;
/**
 * No comment provided
 *
 * Hash: 0x0E14C5550DC3CD1D | Since: 1207
 */
export declare function followPointRoute(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x2E3676282C18A692 | Since: 1207
 */
export declare function followToOffsetOfCoord(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x304AE42E357B8C7E | Since: 1207
 */
export declare function followToOffsetOfEntity(ped: number | IPed, entity: number | IEntity, offsetX: number, offsetY: number, offsetZ: number, movementSpeed: number, timeout: number, stoppingRange: number, persistFollowing: boolean, walkOnly: boolean): void;
/**
 * Orders ped to follow a waypoint recording with control over start/end node indices, optional patrol (back-and-forth) behavior,aiming stance, and total traversal duration
 * NOTES:The recording must be requested and loaded using `REQUEST_WAYPOINT_RECORDING`.
 * The indices (startIndex, endIndex) restrict which part of the route is used.
 * patrol controls whether the ped returns to the start after reaching the end.
 * aimWeapon only affects stance — no firing occurs.
 * duration determines total task time before snapping to the end node
 * https://www.youtube.com/watch?v=RIsXDJSmeGU
 *
 * Hash: 0x0759591819534F7B | Since: 1207
 */
export declare function followWaypointRecording(ped: number | IPed, startIndex: number, flag: number, endIndex: number, patrol: boolean, aimWeapon: boolean, duration: number): string;
/**
 * No comment provided
 *
 * Hash: 0x0CFC13EBC19BCA52 | Since: 1207
 */
export declare function followWaypointRecordingAdvanced(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xBE9B0520BD7C445B | Since: 1207
 */
export declare function followWaypointRecordingAtOffset(ped: number | IPed): string;
/**
 * Force a ped that is already attacking to aim directly at the specified world coordinates
 *
 * Hash: 0x41323F4E0C4AE94B | Since: 1207
 */
export declare function forceAimAtCoord(ped: number | IPed, pos: Vector3): void;
/**
 * motionStateHash: see FORCE_PED_MOTION_STATE
 *
 * Hash: 0x4F056E1AFFEF17AB | Since: 1207
 */
export declare function forceMotionState(ped: number | IPed, motionStateHash: number | string): void;
/**
 * ped = Ped you want to perform this task.
 * target = the Entity they should aim at.
 * distanceToStopAt = distance from the target, where the ped should stop to aim.
 * StartAimingDist = distance where the ped should start to aim.
 *
 * Hash: 0xA9DA48FAB8A76C12 | Since: 1207
 */
export declare function gotoEntityAiming(ped: number | IPed, target: number | IEntity, distanceToStopAt: number, StartAimingDist: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE39B4FF4FDEBDE27 | Since: 1207
 */
export declare function gotoEntityOffset(ped: number | IPed, entity: number | IEntity, pos: Vector3, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x338E7EF52B6095A9 | Since: 1207
 */
export declare function gotoEntityOffsetXy(ped: number | IPed, entity: number | IEntity, duration: number, targetRadius: number, xOffset: number, yOffset: number, moveBlendRatio: number, offsetFlags: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFA6DA9D151769392 | Since: 1311
 */
export declare function gotoEntityOffsetXyz(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x41B0832CA96B5351 | Since: 1207
 */
export declare function gotoEntityOffsetXyzAiming(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x901BD69984400F62 | Since: 1207
 */
export declare function gotoEntityOffsetXyAiming(ped: number | IPed): void;
/**
 * Tells the ped to go to a coord, without using the navemesh. if timeBeforeTeleport is -1 the ped will never warp, p8 is always 0 or 1 still unknown
 *
 * Hash: 0xD76B57B44F1E6F8B | Since: 1207
 */
export declare function goStraightToCoord(ped: number | IPed, pos: Vector3, moveBlendSpeedY: number, timeBeforeTeleport: number, finalHeading: number, targetRadius: number): void;
/**
 * Tells the ped to go to an offset coord from an entity, without using the navmesh. if timeBeforeTeleport is -1 the ped will never warp, p7 is 1 or 0 still unknown param
 *
 * Hash: 0x61E360B7E040D12E | Since: 1207
 */
export declare function goStraightToCoordRelativeToEntity(ped: number | IPed, entity: number | IEntity, xOffset: number, Yoffset: number, zOffset: number, moveBlendRatio: number, timeBeforeTeleport: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA55547801EB331FC | Since: 1207
 */
export declare function goToCoordAndAimAtHatedEntitiesNearCoord(ped: number | IPed, goToLocationX: number, goToLocationY: number, goToLocationZ: number, focusLocationX: number, focusLocationY: number, focusLocationZ: number, speed: number, shootAtEnemies: boolean, distanceToStopAt: number, noRoadsDistance: number, unkTrue: boolean, unkFlag: number, aimingFlag: number, firingPattern: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x87BD711FC31EA273 | Since: 1207
 */
export declare function goToCoordAndAimAtHatedEntitiesNearCoordUsingCombatStyle(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x5BC448CB78FA3E88 | Since: 1207
 */
export declare function goToCoordAnyMeans(ped: number | IPed, pos: Vector3, speed: number, entity: number | IEntity, walkingStyle: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1DD45F9ECFDB1BC9 | Since: 1207
 */
export declare function goToCoordAnyMeansExtraParams(ped: number | IPed, pos: Vector3, speed: number, walkingStyle: number): void;
/**
 * This native allows to control the cruise speed of where you want the ped to go
 * 3rd param might be the entity ped is in? like boat or wagon, 12th param might be the cruiseSpeed of the entity ped is in?
 * EXAMPLE: TaskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(PlayerPedId(), vector3(x, y, z), 3.0, entity, 1, 0, -1082130432, 0, 101004800, 520, 3.0, 1082130432, 0)
 *
 * Hash: 0xB8ECD61F531A7B02 | Since: 1207
 */
export declare function goToCoordAnyMeansExtraParamsWithCruiseSpeed(ped: number | IPed, cruiseSpeed: number, entity: number | IEntity, cruiseSpeed_2: number): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x11315AB3385B8AC0 | Since: 1207
 */
export declare function goToCoordWhileAimingAtCoord(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x639C0425A0B4E77E | Since: 1207
 */
export declare function goToCoordWhileAimingAtCoordUsingCombatStyle(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xB2A16444EAD9AE47 | Since: 1207
 */
export declare function goToCoordWhileAimingAtEntity(ped1: number | IPed, pos: Vector3, ped2: number | IPed, firingPattern: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x78426D0982D083C9 | Since: 1207
 */
export declare function goToCoordWhileAimingAtEntityUsingCombatStyle(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x6A071245EB0D1882 | Since: 1207
 */
export declare function goToEntity(ped: number | IPed, target: number | IEntity, duration: number, distance: number, speed: number): void;
/**
 * shootatEntity:
 * If true, peds will shoot at Entity till it is dead.
 * If false, peds will just walk till they reach the entity and will cease shooting.
 *
 * Hash: 0x97465886D35210E9 | Since: 1207
 */
export declare function goToEntityWhileAimingAtEntity(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xCEF0117C233026AD | Since: 1207
 */
export declare function goToEntityWhileAimingAtEntityUsingCombatStyle(ped: number | IPed): void;
/**
 * enum eWhistleType
 * {
 * WHISTLE_MAIN,
 * WHISTLE_SECONDARY,
 * WHISTLE_DOUBLE,
 * WHISTLE_URGENT,
 * WHISTLE_LONG
 * };
 *
 * Hash: 0xBAD6545608CECA6E | Since: 1207
 */
export declare function goToWhistle(ped: number | IPed, p1: number | IPed, whistleType: number): void;
/**
 * grappleStyle: AR_GRAPPLE_MOUNT_STANDING_FROM_FRONT, AR_GRAPPLE_MOUNT_STANDING_FROM_RIGHT, AR_GRAPPLE_MOUNT_STANDING_FROM_BACK, AR_GRAPPLE_MOUNT_STANDING_FROM_LEFT, AR_GRAPPLE_MOUNT_FROM_FRONT, AR_WOLF_EXECUTION_ENTER_FROM_BACK, AR_GRAPPLE_DRAG_FRONT_ON_ASS, AR_GRAPPLE_FRONT_FROM_LEFT_FAR, AR_BEAR_CHALLENGE_FRONT, AR_GRAPPLE_FRONT_FROM_FRONT, AR_GRAPPLE_MOUNT_FACEUP_FROM_FRONT
 *
 * Hash: 0x779A2FFACEFAEA7B | Since: 1207
 */
export declare function grapple(ped: number | IPed, targetPed: number | IPed, grappleStyle: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB9FB242EACCAF30F | Since: 1207
 */
export declare function guard(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xD2A207EEBDF9889B | Since: 1207
 */
export declare function guardAssignedDefensiveArea(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x4A58A47A72E3FCB4 | Since: 1207
 */
export declare function guardCurrentPosition(ped: number | IPed): void;
/**
 * flags: 0 = HANDS_UP_NOTHING; 1 = HANDS_UP_STRAIGHT_TO_LOOP
 *
 * Hash: 0xF2EAB31979A7F910 | Since: 1207
 */
export declare function handsUp(ped: number | IPed, duration: number, facingPed: number | IPed, timeToFacePed: number, flags: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9030AD4B6207BFE8 | Since: 1207
 */
export declare function hitchAnimal(ped: number | IPed, scenarioPoint: number, flag: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6AFD8FE0D723328F | Since: 1207
 */
export declare function hogtieable(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x27829AFD3E03AC1A | Since: 1207
 */
export declare function hogtieTargetPed(ped: number | IPed, targetPed: number | IPed): void;
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/tasks/TASK_HORSE_ACTION
 * Params: p2, p3 are set to 0 in R* Scripts
 *
 * Hash: 0xA09CFD29100F06C3 | Since: 1207
 */
export declare function horseAction(ped: number | IPed, action: number, targetPed: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x5C8514540D27FBFB | Since: 1207
 */
export declare function investigate(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x0AE4086104E067B1 | Since: 1207
 */
export declare function jump(ped: number | IPed, unused: boolean): void;
/**
 * Puts the ped into a knocked out state for a specified duration. If 'permanently' is set to true, the ped will remain knocked out until mainually reset. Duration in seconds.
 *
 * Hash: 0xF90427F00A495A28 | Since: 1207
 */
export declare function knockedOut(ped: number | IPed, permanently: boolean): void;
/**
 * koTimeOffset (seconds): offset applied to the knockout timer—positive delays recovery (longer KO), negative brings recovery sooner, 0.0 initializes with no extension (immediate baseline).
 * flags (bitmask): 1 = default variant (forwarded to the KO task ctor; R* commonly uses 1), 2 = sets an unk internal synced toggle for this task, 4 = sets another unk internal synced toggle.
 *
 * Hash: 0x42AC6401ABB8C7E5 | Since: 1207
 */
export declare function knockedOutAndHogtied(ped: number | IPed, koTimeOffset: number, flags: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC716EB2BD16370A3 | Since: 1207
 */
export declare function lassoPed(ped: number | IPed, targetPed: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xAA19711D33C6708C | Since: 1207
 */
export declare function leadAndConverse(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x9A7A4A54596FE09D | Since: 1207
 */
export declare function leadHorse(ped: number | IPed, horse: number | IPed): void;
/**
 * flags: See TASK_ENTER_VEHICLE
 *
 * Hash: 0x504D54DF3F6F2247 | Since: 1207
 */
export declare function leaveAnyVehicle(ped: number | IPed, taskFlag: number): void;
/**
 * flags: See TASK_ENTER_VEHICLE
 *
 * Hash: 0xD3DBCE61A490BE02 | Since: 1207
 */
export declare function leaveVehicle(ped: number | IPed, vehicle: number | IVehicle, flags: number, unkPed: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x6FA46612594F7973 | Since: 1207
 */
export declare function lookAtCoord(ped: number | IPed, pos: Vector3, duration: number, flags: number): void;
/**
 * param3: duration in ms, use -1 to look forever
 * param4: using 2048 is fine
 * param5: using 3 is fine
 *
 * Hash: 0x69F4BE8C8CC4796C | Since: 1207
 */
export declare function lookAtEntity(ped: number | IPed, lookAtTarget: number | IEntity, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x48FAE038401A2888 | Since: 1207
 */
export declare function lootEntity(ped: number | IPed, entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xCF1501CBC4059412 | Since: 1207
 */
export declare function lootNearestEntity(ped: number | IPed, pos: Vector3): void;
/**
 * Params: p2: AR_TAKEDOWN_FRONT, AR_EXECUTION_FRONT, 0 in R* Scripts
 *
 * Hash: 0x482C99D0B38D1B0A | Since: 1207
 */
export declare function melee(ped: number | IPed, targetPed: number | IPed, p2: number | string): boolean;
/**
 * timer: in ms, if it reaches 0 it will auto warp the ped on the horse
 * mountStyle: See TASK_ENTER_VEHICLE
 * Flags will still apply to mountStyle
 *
 * Hash: 0x92DB0739813C5186 | Since: 1207
 */
export declare function mountAnimal(ped: number | IPed, mount: number | IPed, timer: number, seatIndex: number, pedSpeed: number, mountStyle: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4AA5AA97C65E4A2F | Since: 1207
 */
export declare function moveBeInFormation(ped: number | IPed): void;
/**
 * Params: moveBlendRatio commonly 1.25f, p5 is always 0 in R* Scripts
 *
 * Hash: 0x79482C12482A860D | Since: 1207
 */
export declare function moveFollowRoadUsingNavmesh(ped: number | IPed, moveBlendRatio: number, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x8AA1593AEC087A29 | Since: 1207
 */
export declare function moveInTraffic(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x13DED0BC45600FE1 | Since: 1207
 */
export declare function moveInTrafficAwayFromEntity(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xDCA3A13F7A45338B | Since: 1207
 */
export declare function moveInTrafficToDestination(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x7B6A04F98BBAFB2C | Since: 1207
 */
export declare function moveNetworkAdvancedByNameWithInitParams(ped: number | IPed, taskData: any, pos: Vector3, rot: Vector3, flag: number): string;
/**
 * No comment provided
 *
 * Hash: 0xF92171093BCABED4 | Since: 1207
 */
export declare function moveNetworkAdvancedByNameWithInitParamsAttached(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x2D537BA194896636 | Since: 1207
 */
export declare function moveNetworkByName(ped: number | IPed, multiplier: number, flags: number): [string, string];
/**
 * No comment provided
 *
 * Hash: 0x139805C2A67C4795 | Since: 1207
 */
export declare function moveNetworkByNameWithInitParams(ped: number | IPed, flags: number): [string, any, string];
/**
 * No comment provided
 *
 * Hash: 0xBDA5DF49D080FE4E | Since: 1207
 */
export declare function patrol(ped: number | IPed): string;
/**
 * This tasks the ped to do nothing for the specified amount of milliseconds.
 * This is useful if you want to add a delay between tasks when using a sequence task.
 *
 * Hash: 0xE73A266DB0CA9042 | Since: 1207
 */
export declare function pause(ped: number | IPed, ms: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD04FE6765D990A06 | Since: 1207
 */
export declare function pedSlideToCoord(ped: number | IPed, pos: Vector3, heading: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5ABA3986D90D8A3B | Since: 1207
 */
export declare function performSequence(ped: number | IPed, taskSequenceId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x89221B16730234F0 | Since: 1207
 */
export declare function performSequenceFromProgress(ped: number | IPed): void;
/**
 * Old name: _TASK_PERFORM_SEQUENCE_2
 *
 * Hash: 0x4FC0AF869D6E309D | Since: 1207
 */
export declare function performSequenceLocally(): void;
/**
 * No comment provided
 *
 * Hash: 0x4391700CBD89C3D8 | Since: 1207
 */
export declare function persistentCharacter(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x502EC17B1BED4BFA | Since: 1207
 */
export declare function pickupCarriableEntity(ped: number | IPed, entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x55B0ECFD98596624 | Since: 1207
 */
export declare function pickUpWeapon(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xC7F0B43DCDC57E3D | Since: 1207
 */
export declare function placeCarriedEntityAtCoord(ped: number | IPed, entity: number | IEntity, pos: Vector3, flags: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6D3D87C57B3D52C7 | Since: 1207
 */
export declare function placeCarriedEntityOnMount(ped: number | IPed, entity: number | IEntity, mount: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x965FEC691D55E9BF | Since: 1207
 */
export declare function plantBomb(ped: number | IPed, pos: Vector3, heading: number): void;
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/animations
 *
 * flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eScriptedAnimFlags
 *
 * ikFlags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eIkControlFlags
 *
 * animFilters: https://pastebin.com/1sGhKVvS
 *
 * Hash: 0xEA47FE3719165B94 | Since: 1207
 */
export declare function playAnim(ped: number | IPed, speed: number, speedMultiplier: number, duration: number, flags: number, playbackRate: number, ikFlags: number): [string, string, string];
/**
 * flags: see TASK_PLAY_ANIM
 * ikFlags: see TASK_PLAY_ANIM
 *
 * Hash: 0x83CDB10EA29B370B | Since: 1207
 */
export declare function playAnimAdvanced(ped: number | IPed, pos: Vector3, rot: Vector3, speed: number, speedMultiplier: number, duration: number, flags: number): [string, string];
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/animations/kit_emotes_list.lua
 * emote: https://alloc8or.re/rdr3/doc/enums/eEmote.txt
 *
 * enum eEmoteType
 * {
 * EMOTE_TYPE_INVALID = -1,
 * EMOTE_TYPE_REACT,
 * EMOTE_TYPE_ACTION,
 * EMOTE_TYPE_TAUNT,
 * EMOTE_TYPE_GREET,
 * EMOTE_TYPE_TWIRL_GUN,
 * EMOTE_TYPE_DANCE_FLOOR
 * };
 *
 * enum eEmotePlaybackMode
 * {
 * EMOTE_PM_INVALID = -1,
 * EMOTE_PM_UPPERBODY,
 * EMOTE_PM_UPPERBODY_LOOP,
 * EMOTE_PM_FULLBODY,
 * };
 *
 * Hash: 0xB31A277C1AC7B7FF | Since: 1207
 */
export declare function playEmoteWithHash(ped: number | IPed, emoteType: number, playbackMode: number, emote: number | string, isSecondaryTask: boolean, canBreakOut: boolean, disableEarlyOutAnimTag: boolean, ignoreInvalidMainTask: boolean, destroyProps: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xAD67214236AB1CFE | Since: 1207
 */
export declare function playUpperAnimFacingEntity(ped: number | IPed, entity: number | IEntity): [string, string, string];
/**
 * No comment provided
 *
 * Hash: 0x87BE56724650408E | Since: 1207
 */
export declare function police(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4172393E6BE1FECE | Since: 1207
 */
export declare function putPedDirectlyIntoCover(ped: number | IPed, pos: Vector3, timeout: number, coverpoint: number): void;
/**
 * grappleStyle: AR_GRAPPLE_STRUGGLE, AR_ALLIGATOR_LEG_GRAB_CHALLENGE_FAIL, AR_GRAPPLE_BACK_FROM_BACK, AR_GRAPPLE_BACK_DEFEND, AR_GRAPPLE_FRONT_FROM_FRONT
 *
 * Hash: 0xA05F3F20889D7A5B | Since: 1207
 */
export declare function putPedDirectlyIntoGrapple(ped: number | IPed, grappleTarget: number | IPed, grappleStyle: number | string): void;
/**
 * meleeStyles: AR_GRAPPLE_BACK_FROM_BACK, AR_GRAPPLE_MOUNT_FACEDOWN_FROM_FRONT, AR_ALLIGATOR_LEAPKILL, AR_ALLIGATOR_WAIST_AUTOKILL_FRONT
 *
 * Hash: 0x1C6CD14A876FFE39 | Since: 1207
 */
export declare function putPedDirectlyIntoMelee(ped: number | IPed, meleeTarget: number | IPed, meleeStyle: number | string, animBlendRatio: number): void;
/**
 * Makes a ped react to an entity.
 * Params: reactingTo Entity can be 0, p8 is always 4
 *
 * Hash: 0xC4C32C31920E1B70 | Since: 1207
 */
export declare function react(ped: number | IPed, reactingTo: number | IEntity, pos: Vector3): string;
/**
 * No comment provided
 *
 * Hash: 0x62D2916F56B9CD2D | Since: 1207
 */
export declare function reloadWeapon(ped: number | IPed, unused: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x356088527D9EBAAD | Since: 1207
 */
export declare function reviveTarget(ped: number | IPed, reviver: number | IPed, tool: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x37FB1C870E2EC2C6 | Since: 1207
 */
export declare function rideTrain(ped: number | IPed, train: number | IVehicle, scenarioPoint: number, scenarioHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x7BB967F85D8CCBDB | Since: 1207
 */
export declare function robPed(ped: number | IPed, target: any, flag: number): void;
/**
 * No comment provided
 *
 * Hash: 0x126EF75F1E17ABE5 | Since: 1207
 */
export declare function scriptedAnimation(ped: number | IPed): any;
/**
 * No comment provided
 *
 * Hash: 0x8D7F2A63688C20A4 | Since: 1207
 */
export declare function seekClearLosToEntity(ped: number | IPed, entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x84D32B3BEC531324 | Since: 1207
 */
export declare function seekCoverFromPed(ped: number | IPed, fromPed: number | IPed, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x75AC2B60386D89F2 | Since: 1207
 */
export declare function seekCoverFromPos(ped: number | IPed, pos: Vector3, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x39246A6958EF072C | Since: 1207
 */
export declare function seekCoverToCoords(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xD43D95C7A869447F | Since: 1207
 */
export declare function seekCoverToCoverPoint(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x90D2156198831D69 | Since: 1207
 */
export declare function setBlockingOfNonTemporaryEvents(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x17293C633C8AC019 | Since: 1207
 */
export declare function setCrouchMovement(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x933C06518B52A9A4 | Since: 1207
 */
export declare function setSphereDefensiveArea(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x4C3FA937B44A90FA | Since: 1207
 */
export declare function setStealthMovement(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x452419CBD838065B | Since: 1207
 */
export declare function shockingEventReact(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x46A6CC01E0826106 | Since: 1207
 */
export declare function shootAtCoord(ped: number | IPed, pos: Vector3, duration: number, firingPattern: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x08DA95E8298AE772 | Since: 1207
 */
export declare function shootAtEntity(entity: number | IEntity, targetEntity: number | IEntity, duration: number, firingPattern: number | string, affectCockedState: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x08AA95E8298AE772 | Since: 1207
 */
export declare function shootWithWeapon(ped: number | IPed): any;
/**
 * Makes the specified ped shuffle to the next vehicle seat.
 * The ped MUST be in a vehicle and the vehicle parameter MUST be the ped's current vehicle.
 *
 * Hash: 0x7AA80209BDA643EB | Since: 1207
 */
export declare function shuffleToNextVehicleSeat(ped: number | IPed, vehicle: number | IVehicle): void;
/**
 * Makes the specified ped flee the specified distance from the specified position.
 * fleeType: see TASK_FLEE_COORD
 *
 * Hash: 0x94587F17E9C365D5 | Since: 1207
 */
export declare function smartFleeCoord(ped: number | IPed, pos: Vector3, distance: number, time: number, fleeType: number, fleeSpeed: number): void;
/**
 * Makes a ped run away from another ped (fleeFromTarget)
 *
 * fleeDistance = ped will flee this distance
 * fleeTime = ped will flee for this amount of time, set to "-1" to flee forever
 * fleeType = see TASK_FLEE_COORD, can be 0, R* Scripts: fm_mission/race_controller: 66048; fme_escaped_convicts: 2260992, 2523136, 2359296; la_alligator/fox: 2097152; net_fetch: 17301536; net_stable_mount: 540928
 * fleeSpeed = mostly 3f, rarely 1f in R* Scripts
 *
 * Hash: 0x22B0D0E37CCB840D | Since: 1207
 */
export declare function smartFleePed(ped: number | IPed, fleeFromTarget: number | IPed, fleeDistance: number, fleeTime: number, fleeType: number, fleeSpeed: number, targetPed: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xAE032F8BBA959E90 | Since: 1207
 */
export declare function standGuard(ped: number | IPed, pos: Vector3, heading: number): string;
/**
 * Makes the specified ped stand still for (time) milliseconds.
 *
 * Hash: 0x919BE13EED931959 | Since: 1207
 */
export declare function standStill(ped: number | IPed, time: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4D1F61FC34AF3CD1 | Since: 1207
 */
export declare function startScenarioAtPosition(ped: number | IPed, scenarioHash: number | string, pos: Vector3, heading: number, duration: number, sittingScenario: boolean, teleport: boolean): string;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/animations/scenarios
 * Params: duration in milliseconds
 *
 * conditionalHash (optionally):
 * 0 = play random conditional anim.
 * Every conditional anim has requirements to play it.
 * If requirements are not met, ped plays random allowed conditional anim or can be stuck.
 * For example, this scenario type has possible conditional anim WORLD_HUMAN_LEAN_BACK_WALL_SMOKING_MALE_D, but it can not be played by player, because condition is set to NOT be CAIConditionIsPlayer (check file amb_rest.meta and amb_rest_CA.meta with OPENIV to clarify requirements).
 *
 * Hash: 0x524B54361229154F | Since: 1207
 */
export declare function startScenarioInPlaceHash(ped: number | IPed, scenarioHash: number | string, duration: number, playEnterAnim: boolean, conditionalHash: number | string, heading: number, idleForever: boolean): void;
/**
 * Makes the ped run to take cover
 *
 * Hash: 0xE5DA8615A6180789 | Since: 1207
 */
export declare function stayInCover(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xED27560703F37258 | Since: 1207
 */
export declare function stopLeadingHorse(ped: number | IPed): void;
/**
 * Baits: see 0x9B0C7FA063E67629
 *
 * Hash: 0x2C28AC30A72722DA | Since: 1207
 */
export declare function swapFishingBait(ped: number | IPed, withoutBuoy: boolean): string;
/**
 * No comment provided
 *
 * Hash: 0xA21C51255B205245 | Since: 1207
 */
export declare function swapWeapon(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x7285951DBF6B5A51 | Since: 1207
 */
export declare function throwProjectile(ped: number | IPed): void;
/**
 * duration in milliseconds
 *
 * Hash: 0x1DDA930A0AC38571 | Since: 1207
 */
export declare function turnPedToFaceCoord(ped: number | IPed, pos: Vector3, duration: number): void;
/**
 * duration: the amount of time in milliseconds to do the task. -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped
 *
 * Hash: 0x5AD23D40115353AC | Since: 1207
 */
export declare function turnPedToFaceEntity(ped: number | IPed, targetEntity: number | IEntity, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x84179419DBDD36F2 | Since: 1207
 */
export declare function turnToFaceClosestPed(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x9FDA1B3D7E7028B3 | Since: 1207
 */
export declare function useNearestScenarioChainToCoord(ped: number | IPed, pos: Vector3, distance: number): void;
/**
 * No comment provided
 *
 * Hash: 0x97A28E63F0BA5631 | Since: 1207
 */
export declare function useNearestScenarioChainToCoordWarp(ped: number | IPed, pos: Vector3, distance: number): void;
/**
 * No comment provided
 *
 * Hash: 0x58E2E0F23F6B76C3 | Since: 1207
 */
export declare function useNearestScenarioToCoordWarp(ped: number | IPed, pos: Vector3, distance: number, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3774B03456DD6106 | Since: 1207
 */
export declare function useNearestTrainScenarioToCoordWarp(ped: number | IPed, pos: Vector3, distance: number): void;
/**
 * No comment provided
 *
 * Hash: 0x14747F4A5971DE4E | Since: 1207
 */
export declare function useRandomScenarioInGroup(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xCCDAE6324B6A821C | Since: 1207
 */
export declare function useScenarioPoint(ped: number | IPed, scenario: number, conditionalAnim: string, p6: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x447C1E9EF844BC0F | Since: 1207
 */
export declare function vehicleAimAtCoord(ped: number | IPed, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xE41885592B08B097 | Since: 1207
 */
export declare function vehicleAimAtPed(ped: number | IPed, target: number | IPed): void;
/**
 * Old name: _TASK_VEHICLE_DRIVE_TO_POINT
 * flag: 524419 and 0 in shop_horse_shop R* Script
 *
 * Hash: 0x089FF2FB965F0A29 | Since: 1207
 */
export declare function vehicleDriveStraightToPoint(driver: number | IPed, vehicle: number | IVehicle, pos: Vector3, flag: number): void;
/**
 * stopRange: how close vehicle will get to destination before stopping, default 4.0
 * straightLineDist: distance at which AI switches to heading for target directly instead of following nodes, default -1
 *
 * Hash: 0xE2A2AA2F659D77A7 | Since: 1207
 */
export declare function vehicleDriveToCoord(ped: number | IPed, vehicle: number | IVehicle, pos: Vector3, speed: number, style: any, vehicleModel: number | string, drivingMode: number, stopRange: number, straightLineDist: number): void;
/**
 * flags: 67108864, 2097152, 524564, 524675 (eDrivingFlags)
 * p7 = 6 or 3
 * p8 = x coordinate
 * p9 - 8.f
 * p10 = false
 *
 * Hash: 0x7F241A0D14354583 | Since: 1207
 */
export declare function vehicleDriveToDestination(driver: number | IPed, vehicle: number | IVehicle, pos: Vector3, speed: number, drivingFlags: number, stoppingRange1: number, stoppingRange2: number): void;
/**
 * No comment provided
 *
 * Hash: 0x480142959D337D00 | Since: 1207
 */
export declare function vehicleDriveWander(ped: number | IPed, vehicle: number | IVehicle, speed: number, drivingStyle: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0FA6E4B75F302400 | Since: 1207
 */
export declare function vehicleEscort(ped: number | IPed, vehicle: number | IVehicle, targetVehicle: number | IVehicle, mode: number, speed: number, drivingStyle: number, minDistance: number, noRoadsDistance: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3123FAA6DB1CF7ED | Since: 1207
 */
export declare function vehicleFollowWaypointRecording(ped: number | IPed, vehicle: number | IVehicle, drivingMode: number, eWaypoint: number, flag: number, stoppingDist: number): string;
/**
 * No comment provided
 *
 * Hash: 0x195AEEB13CEFE2EE | Since: 1207
 */
export declare function vehicleGotoNavmesh(ped: number | IPed, vehicle: number | IVehicle, pos: Vector3, speed: number, behaviorFlag: number, stoppingRange: number): void;
/**
 * No comment provided
 *
 * Hash: 0x659427E0EF36BCDE | Since: 1207
 */
export declare function vehicleMission(driver: number | IPed, vehicle: number | IVehicle, vehicleTarget: number | IVehicle, missionType: number, DriveAgainstTraffic: boolean): void;
/**
 * See TASK_VEHICLE_MISSION
 *
 * Hash: 0x9454528DF15D657A | Since: 1207
 */
export declare function vehicleMissionPedTarget(ped: number | IPed, vehicle: number | IVehicle, pedTarget: number | IPed, mode: number, maxSpeed: number, drivingStyle: number, minDistance: number, DriveAgainstTraffic: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x5190796ED39C9B6D | Since: 1207
 */
export declare function vehicleShootAtCoord(ped: number | IPed, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x10AB107B887214D8 | Since: 1207
 */
export declare function vehicleShootAtPed(ped: number | IPed, target: number | IPed): void;
/**
 * Documentation from GTA V, might be the same in RDR:
 *
 * '1 - brake
 * '3 - brake + reverse
 * '4 - turn left 90 + braking
 * '5 - turn right 90 + braking
 * '6 - brake strong (handbrake?) until time ends
 * '7 - turn left + accelerate
 * '7 - turn right + accelerate
 * '9 - weak acceleration
 * '10 - turn left + restore wheel pos to center in the end
 * '11 - turn right + restore wheel pos to center in the end
 * '13 - turn left + go reverse
 * '14 - turn left + go reverse
 * '16 - crash the game after like 2 seconds :)
 * '17 - keep actual state, game crashed after few tries
 * '18 - game crash
 * '19 - strong brake + turn left/right
 * '20 - weak brake + turn left then turn right
 * '21 - weak brake + turn right then turn left
 * '22 - brake + reverse
 * '23 - accelerate fast
 * '24 - brake
 * '25 - brake turning left then when almost stopping it turns left more
 * '26 - brake turning right then when almost stopping it turns right more
 * '27 - brake until car stop or until time ends
 * '28 - brake + strong reverse acceleration
 * '30 - performs a burnout (brake until stop + brake and accelerate)
 * '31 - accelerate + handbrake
 * '32 - accelerate very strong
 *
 * Seems to be this:
 * Works on NPCs, but overrides their current task. If inside a task sequence (and not being the last task), "time" will work, otherwise the task will be performed forever until tasked with something else
 *
 * Hash: 0xC429DCEEB339E129 | Since: 1207
 */
export declare function vehicleTempAction(driver: number | IPed, vehicle: number | IVehicle, action: number, time: number): void;
/**
 * No comment provided
 *
 * Hash: 0x04ACFAC71E6858F9 | Since: 1207
 */
export declare function walkAway(ped: number | IPed, entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x8AC76D1408731732 | Since: 1207
 */
export declare function wanderAndConverseWithPed(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xE054346CA3A0F315 | Since: 1207
 */
export declare function wanderInArea(ped: number | IPed, pos: Vector3, radius: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9FDA168777B28424 | Since: 1207
 */
export declare function wanderInVolume(ped: number | IPed, volume: number): void;
/**
 * Makes ped walk around the area the params p1 p2 seems to not affect anything but p2 is either 0 or 1 and p1 is mostly 1.0 or ped heading
 *
 * Hash: 0xBB9CE077274F6A1B | Since: 1207
 */
export declare function wanderStandard(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x527EA3DB8BC7F03B | Since: 1207
 */
export declare function wanderSwim(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x9A7D091411C5F684 | Since: 1207
 */
export declare function warpPedIntoVehicle(ped: number | IPed, vehicle: number | IVehicle, seat: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7157B82D60E4BC46 | Since: 1207
 */
export declare function weapon(ped: number | IPed): void;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/AI/EVENTS/aud_ped_whistle_types.lua
 * p2: UNSPECIFIED
 *
 * Hash: 0xD6401A1B2F63BED6 | Since: 1207
 */
export declare function whistleAnim(ped: number | IPed, audPedWhistleType: number | string, p2: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x67406F2C8F87FC4F | Since: 1207
 */
export declare function uncuffPed(ped: number | IPed): void;
/**
 * getupSetHash: see nm_blend_out_sets.meta
 *
 * Hash: 0x79559BAD83CCD038 | Since: 1207
 */
export declare function unhogtiePed(ped: number | IPed, flags: number, getupSetHash: number | string): [string, string];
/**
 * No comment provided
 *
 * Hash: 0xA98FCAFD7893C834 | Since: 1207
 */
export declare function updateHandsUpDuration(ped: number | IPed, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5A353B8E6B1095B5 | Since: 1207
 */
export declare function useWaypointRecordingAsAssistedMovementRoute(): string;
/**
 * No comment provided
 *
 * Hash: 0x4D6D30AB18B0B089 | Since: 1207
 */
export declare function vehicleWaypointPlaybackGetIsPaused(): any;
/**
 * No comment provided
 *
 * Hash: 0x121F0593E0A431D7 | Since: 1207
 */
export declare function vehicleWaypointPlaybackOverrideSpeed(vehicle: number | IVehicle, speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8A4E6AC373666BC5 | Since: 1207
 */
export declare function vehicleWaypointPlaybackPause(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xDC04FCAA7839D492 | Since: 1207
 */
export declare function vehicleWaypointPlaybackResume(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0x5CEB25A7D2848963 | Since: 1207
 */
export declare function vehicleWaypointPlaybackUseDefaultSpeed(vehicle: number | IVehicle): void;
/**
 * No comment provided
 *
 * Hash: 0xD73A5D1F0325C71C | Since: 1207
 */
export declare function waypointPlaybackGetIsAiming(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x701375A7D43F01CB | Since: 1207
 */
export declare function waypointPlaybackGetIsPaused(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA5B94DF8AF058F46 | Since: 1207
 */
export declare function waypointPlaybackGetIsShooting(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7D7D2B47FA788E85 | Since: 1207
 */
export declare function waypointPlaybackOverrideSpeed(ped: number | IPed, speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0F342546AA06FED5 | Since: 1207
 */
export declare function waypointPlaybackPause(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x244F70C84C547D2D | Since: 1207
 */
export declare function waypointPlaybackResume(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x8968400D900ED8B3 | Since: 1207
 */
export declare function waypointPlaybackStartAimingAtCoord(): void;
/**
 * No comment provided
 *
 * Hash: 0x4F158205E0C74385 | Since: 1207
 */
export declare function waypointPlaybackStartAimingAtEntity(): void;
/**
 * No comment provided
 *
 * Hash: 0x20E330937C399D29 | Since: 1207
 */
export declare function waypointPlaybackStartAimingAtPed(): void;
/**
 * No comment provided
 *
 * Hash: 0x057A25CFCC9DB671 | Since: 1207
 */
export declare function waypointPlaybackStartShootingAtCoord(): void;
/**
 * No comment provided
 *
 * Hash: 0x4AF458F71C1196D2 | Since: 1207
 */
export declare function waypointPlaybackStartShootingAtEntity(): void;
/**
 * No comment provided
 *
 * Hash: 0xE70BA7B90F8390DC | Since: 1207
 */
export declare function waypointPlaybackStartShootingAtPed(): void;
/**
 * No comment provided
 *
 * Hash: 0x47EFA040EBB8E2EA | Since: 1207
 */
export declare function waypointPlaybackStopAimingOrShooting(): void;
/**
 * No comment provided
 *
 * Hash: 0x6599D834B12D0800 | Since: 1207
 */
export declare function waypointPlaybackUseDefaultSpeed(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xB629A298081F876F | Since: 1207
 */
export declare function waypointRecordingGetClosestWaypoint(pos: Vector3, point: number): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x2FB897405C90B361 | Since: 1207
 */
export declare function waypointRecordingGetCoord(point: number): [boolean, string, Vector3];
/**
 * No comment provided
 *
 * Hash: 0x5343532C01A07234 | Since: 1207
 */
export declare function waypointRecordingGetNumPoints(points: number): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x005622AEBC33ACA9 | Since: 1207
 */
export declare function waypointRecordingGetSpeedAtPoint(point: number): [number, string];
/**
 * No comment provided
 *
 * Hash: 0x0000A8ACDC2E1B6A | Since: 1207
 */
export declare function _0x0000A8ACDC2E1B6A(): void;
/**
 * No comment provided
 *
 * Hash: 0x00FFE0F85253C572 | Since: 1207
 */
export declare function _0x00FFE0F85253C572(): any;
/**
 * No comment provided
 *
 * Hash: 0x0365000D8BF86531 | Since: 1207
 */
export declare function _0x0365000D8BF86531(): any;
/**
 * No comment provided
 *
 * Hash: 0x098036CAB8373D36 | Since: 1207
 */
export declare function _0x098036CAB8373D36(): void;
/**
 * No comment provided
 *
 * Hash: 0x098CAA6DBE7D8D82 | Since: 1207
 */
export declare function _0x098CAA6DBE7D8D82(): void;
/**
 * No comment provided
 *
 * Hash: 0x0A98A362C5A19A43 | Since: 1207
 */
export declare function _0x0A98A362C5A19A43(): any;
/**
 * No comment provided
 *
 * Hash: 0x0D322AEF8878B8FE | Since: 1207
 */
export declare function _0x0D322AEF8878B8FE(): void;
/**
 * No comment provided
 *
 * Hash: 0x0E184495B27BB57D | Since: 1207
 */
export declare function _0x0E184495B27BB57D(): void;
/**
 * No comment provided
 *
 * Hash: 0x0F4F6C4CE471259D | Since: 1207
 */
export declare function _0x0F4F6C4CE471259D(): void;
/**
 * No comment provided
 *
 * Hash: 0x10ADFDF07B7DFFBA | Since: 1207
 */
export declare function _0x10ADFDF07B7DFFBA(): any;
/**
 * No comment provided
 *
 * Hash: 0x10C44F633E2D6D9E | Since: 1207
 */
export declare function _0x10C44F633E2D6D9E(): void;
/**
 * No comment provided
 *
 * Hash: 0x11C7CE1AE38911B5 | Since: 1207
 */
export declare function _0x11C7CE1AE38911B5(): any;
/**
 * No comment provided
 *
 * Hash: 0x152664AA3188B193 | Since: 1207
 */
export declare function _0x152664AA3188B193(): any;
/**
 * No comment provided
 *
 * Hash: 0x1632EB9386CDBE64 | Since: 1207
 */
export declare function _0x1632EB9386CDBE64(): void;
/**
 * No comment provided
 *
 * Hash: 0x19BC99C678FBA139 | Since: 1207
 */
export declare function _0x19BC99C678FBA139(): void;
/**
 * No comment provided
 *
 * Hash: 0x1A7D63CB1B0BB223 | Since: 1207
 */
export declare function _0x1A7D63CB1B0BB223(): void;
/**
 * No comment provided
 *
 * Hash: 0x1AC5A8AB50CFAA33 | Since: 1207
 */
export declare function _0x1AC5A8AB50CFAA33(): any;
/**
 * No comment provided
 *
 * Hash: 0x1F298C7BD30D1240 | Since: 1207
 */
export declare function _0x1F298C7BD30D1240(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x1F7A9A9C38C13A56 | Since: 1207
 */
export declare function _0x1F7A9A9C38C13A56(): any;
/**
 * No comment provided
 *
 * Hash: 0x2064B33F6E6B92D4 | Since: 1207
 */
export declare function _0x2064B33F6E6B92D4(): void;
/**
 * No comment provided
 *
 * Hash: 0x22CD2C33ED4467A1 | Since: 1207
 */
export declare function _0x22CD2C33ED4467A1(): any;
/**
 * No comment provided
 *
 * Hash: 0x22CDBF317C40A122 | Since: 1207
 */
export declare function _0x22CDBF317C40A122(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x23767D80C7EED7C6 | Since: 1311
 */
export declare function _0x23767D80C7EED7C6(): void;
/**
 * No comment provided
 *
 * Hash: 0x28EF780BDEA8A639 | Since: 1207
 */
export declare function _0x28EF780BDEA8A639(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x2948235DB2058E99 | Since: 1207
 */
export declare function _0x2948235DB2058E99(): void;
/**
 * No comment provided
 *
 * Hash: 0x2A10538D0A005E81 | Since: 1207
 */
export declare function _0x2A10538D0A005E81(): void;
/**
 * No comment provided
 *
 * Hash: 0x2B8AF29A78024BD3 | Since: 1207
 */
export declare function _0x2B8AF29A78024BD3(): void;
/**
 * _GET_ANIM_SCENE_FROM_PED_*
 *
 * Hash: 0x2C497BDEF897C6DF | Since: 1207
 */
export declare function _0x2C497BDEF897C6DF(): any;
/**
 * No comment provided
 *
 * Hash: 0x2D657B10F211C572 | Since: 1207
 */
export declare function _0x2D657B10F211C572(ped: number | IPed): any;
/**
 * No comment provided
 *
 * Hash: 0x2E1D6D87346BB7D2 | Since: 1207
 */
export declare function _0x2E1D6D87346BB7D2(): void;
/**
 * No comment provided
 *
 * Hash: 0x2EB977293923C723 | Since: 1207
 */
export declare function _0x2EB977293923C723(): void;
/**
 * No comment provided
 *
 * Hash: 0x30146C25686B7836 | Since: 1207
 */
export declare function _0x30146C25686B7836(): any;
/**
 * No comment provided
 *
 * Hash: 0x30B391915538EBE2 | Since: 1207
 */
export declare function _0x30B391915538EBE2(): void;
/**
 * No comment provided
 *
 * Hash: 0x31BB338F64D5C861 | Since: 1207
 */
export declare function _0x31BB338F64D5C861(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x358A1A751B335A11 | Since: 1207
 */
export declare function _0x358A1A751B335A11(): void;
/**
 * No comment provided
 *
 * Hash: 0x370F57C47F68EBCA | Since: 1207
 */
export declare function _0x370F57C47F68EBCA(): any;
/**
 * No comment provided
 *
 * Hash: 0x3BBEECC5B8F35318 | Since: 1207
 */
export declare function _0x3BBEECC5B8F35318(): void;
/**
 * Used for HORSE_REVIVE
 *
 * Hash: 0x3F8387DB1B9F31B7 | Since: 1207
 */
export declare function _0x3F8387DB1B9F31B7(): [boolean, any];
/**
 * No comment provided
 *
 * Hash: 0x3FEB770D8ED9047A | Since: 1207
 */
export declare function _0x3FEB770D8ED9047A(): any;
/**
 * _SET_PED_*
 *
 * Hash: 0x41D1331AFAD5A091 | Since: 1207
 */
export declare function _0x41D1331AFAD5A091(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x450080DDEDB91258 | Since: 1207
 */
export declare function _0x450080DDEDB91258(): void;
/**
 * No comment provided
 *
 * Hash: 0x4A7D73989F52EB37 | Since: 1207
 */
export declare function _0x4A7D73989F52EB37(): void;
/**
 * No comment provided
 *
 * Hash: 0x4E806A395D43A458 | Since: 1207
 */
export declare function _0x4E806A395D43A458(): void;
/**
 * No comment provided
 *
 * Hash: 0x4F57397388E1DFF8 | Since: 1207
 */
export declare function _0x4F57397388E1DFF8(): void;
/**
 * Only used in R* SP Scripts
 * Params: p4 = 1.0f - 30.0f
 *
 * Hash: 0x508F5053E3F6F0C4 | Since: 1207
 */
export declare function _0x508F5053E3F6F0C4(ped: number | IPed, pos: Vector3): boolean;
/**
 * No comment provided
 *
 * Hash: 0x50AA09A0DA64E73C | Since: 1207
 */
export declare function _0x50AA09A0DA64E73C(): void;
/**
 * No comment provided
 *
 * Hash: 0x5217B7B6DB78E1F3 | Since: 1207
 */
export declare function _0x5217B7B6DB78E1F3(): void;
/**
 * No comment provided
 *
 * Hash: 0x59AE5CA4FFB4E378 | Since: 1207
 */
export declare function _0x59AE5CA4FFB4E378(): any;
/**
 * No comment provided
 *
 * Hash: 0x59AEA4DC640814B9 | Since: 1207
 */
export declare function _0x59AEA4DC640814B9(): void;
/**
 * No comment provided
 *
 * Hash: 0x5B68D0007D9C92EB | Since: 1207
 */
export declare function _0x5B68D0007D9C92EB(): void;
/**
 * No comment provided
 *
 * Hash: 0x5D9B0BAAF04CF65B | Since: 1207
 */
export declare function _0x5D9B0BAAF04CF65B(): void;
/**
 * No comment provided
 *
 * Hash: 0x5EA655F01D93667A | Since: 1207
 */
export declare function _0x5EA655F01D93667A(): any;
/**
 * No comment provided
 *
 * Hash: 0x615DC4A82E90BB48 | Since: 1207
 */
export declare function _0x615DC4A82E90BB48(): void;
/**
 * No comment provided
 *
 * Hash: 0x643FD1556F621772 | Since: 1207
 */
export declare function _0x643FD1556F621772(): any;
/**
 * No comment provided
 *
 * Hash: 0x651F0530083C0E5A | Since: 1207
 */
export declare function _0x651F0530083C0E5A(): void;
/**
 * No comment provided
 *
 * Hash: 0x65D281985F2BDFC2 | Since: 1207
 */
export declare function _0x65D281985F2BDFC2(): void;
/**
 * No comment provided
 *
 * Hash: 0x673A8779D229BA5A | Since: 1207
 */
export declare function _0x673A8779D229BA5A(): void;
/**
 * Only used in R* SP Script beat_washed_ashore
 * `Returns Object prop for TASK::_TASK_ITEM_INTERACTION_2`
 *
 * Hash: 0x678D3226CF70B9C8 | Since: 1207
 */
export declare function _0x678D3226CF70B9C8(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x6C269F673C47031E | Since: 1207
 */
export declare function _0x6C269F673C47031E(): any;
/**
 * No comment provided
 *
 * Hash: 0x6DAC799857EF3F11 | Since: 1311
 */
export declare function _0x6DAC799857EF3F11(): any;
/**
 * No comment provided
 *
 * Hash: 0x722D6A49200174FE | Since: 1207
 */
export declare function _0x722D6A49200174FE(): void;
/**
 * No comment provided
 *
 * Hash: 0x748D5E0D2A1A4C61 | Since: 1207
 */
export declare function _0x748D5E0D2A1A4C61(): void;
/**
 * No comment provided
 *
 * Hash: 0x74F0209674864CBD | Since: 1207
 */
export declare function _0x74F0209674864CBD(): any;
/**
 * No comment provided
 *
 * Hash: 0x764DB5A48390FBAD | Since: 1207
 */
export declare function _0x764DB5A48390FBAD(): void;
/**
 * No comment provided
 *
 * Hash: 0x76610D12A838EBDE | Since: 1311
 */
export declare function _0x76610D12A838EBDE(): any;
/**
 * No comment provided
 *
 * Hash: 0x7FB78B2199C10E92 | Since: 1207
 */
export declare function _0x7FB78B2199C10E92(): void;
/**
 * No comment provided
 *
 * Hash: 0x801BD27403F3CBA0 | Since: 1207
 */
export declare function _0x801BD27403F3CBA0(): void;
/**
 * No comment provided
 *
 * Hash: 0x827A58CED9D4D5B4 | Since: 1207
 */
export declare function _0x827A58CED9D4D5B4(): void;
/**
 * No comment provided
 *
 * Hash: 0x82ED59F095056550 | Since: 1207
 */
export declare function _0x82ED59F095056550(): void;
/**
 * No comment provided
 *
 * Hash: 0x865732725536EE39 | Since: 1207
 */
export declare function _0x865732725536EE39(): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x8798CF6815B8FE0F | Since: 1207
 */
export declare function _0x8798CF6815B8FE0F(): void;
/**
 * No comment provided
 *
 * Hash: 0x885D19AC2B6FBFF4 | Since: 1207
 */
export declare function _0x885D19AC2B6FBFF4(): void;
/**
 * No comment provided
 *
 * Hash: 0x88FD60D846D9CD63 | Since: 1207
 */
export declare function _0x88FD60D846D9CD63(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x8E1DDE26D270CC5E | Since: 1207
 */
export declare function _0x8E1DDE26D270CC5E(): void;
/**
 * No comment provided
 *
 * Hash: 0x8F8C84363810691A | Since: 1207
 */
export declare function _0x8F8C84363810691A(): void;
/**
 * No comment provided
 *
 * Hash: 0x9050DF2C53801208 | Since: 1207
 */
export declare function _0x9050DF2C53801208(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x908BB14BCE85C80E | Since: 1207
 */
export declare function _0x908BB14BCE85C80E(): any;
/**
 * No comment provided
 *
 * Hash: 0x91CB5E431F579BA1 | Since: 1207
 */
export declare function _0x91CB5E431F579BA1(): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x920684BE432875B1 | Since: 1311
 */
export declare function _0x920684BE432875B1(): any;
/**
 * No comment provided
 *
 * Hash: 0x954451EA2D2120FB | Since: 1207
 */
export declare function _0x954451EA2D2120FB(): void;
/**
 * No comment provided
 *
 * Hash: 0x9585FF23C4B8EDE0 | Since: 1207
 */
export declare function _0x9585FF23C4B8EDE0(): void;
/**
 * No comment provided
 *
 * Hash: 0x9667CCE29BFA0780 | Since: 1207
 */
export declare function _0x9667CCE29BFA0780(): void;
/**
 * No comment provided
 *
 * Hash: 0x974DA3408DEC4E79 | Since: 1207
 */
export declare function _0x974DA3408DEC4E79(): any;
/**
 * No comment provided
 *
 * Hash: 0x9B6A58FDB0024F12 | Since: 1207
 */
export declare function _0x9B6A58FDB0024F12(): void;
/**
 * No comment provided
 *
 * Hash: 0x9C8F42A5D1859DC1 | Since: 1207
 */
export declare function _0x9C8F42A5D1859DC1(): void;
/**
 * No comment provided
 *
 * Hash: 0xA052608A12559BBB | Since: 1207
 */
export declare function _0xA052608A12559BBB(): void;
/**
 * No comment provided
 *
 * Hash: 0xA263ADBBC8056214 | Since: 1207
 */
export declare function _0xA263ADBBC8056214(): void;
/**
 * No comment provided
 *
 * Hash: 0xA42DC7919159CCCF | Since: 1207
 */
export declare function _0xA42DC7919159CCCF(): void;
/**
 * No comment provided
 *
 * Hash: 0xA6A76D666A281F2D | Since: 1207
 */
export declare function _0xA6A76D666A281F2D(item: number | string): void;
/**
 * _SET_SCENARIO_*
 *
 * Hash: 0xA7479FB665361EDB | Since: 1207
 */
export declare function _0xA7479FB665361EDB(): void;
/**
 * No comment provided
 *
 * Hash: 0xA9E7672F8C6C6F74 | Since: 1207
 */
export declare function _0xA9E7672F8C6C6F74(): any;
/**
 * _SET_SCENARIO_POINT_*
 *
 * Hash: 0xADC45010BC17AF0E | Since: 1207
 */
export declare function _0xADC45010BC17AF0E(): void;
/**
 * No comment provided
 *
 * Hash: 0xB2D15D3551FE4FAE | Since: 1311
 */
export declare function _0xB2D15D3551FE4FAE(): void;
/**
 * No comment provided
 *
 * Hash: 0xB2F47A1AFDFCC595 | Since: 1207
 */
export declare function _0xB2F47A1AFDFCC595(): void;
/**
 * No comment provided
 *
 * Hash: 0xB79817DB31FF72B9 | Since: 1207
 */
export declare function _0xB79817DB31FF72B9(): void;
/**
 * No comment provided
 *
 * Hash: 0xB8E3486D107F4194 | Since: 1207
 */
export declare function _0xB8E3486D107F4194(): void;
/**
 * No comment provided
 *
 * Hash: 0xBC3F847AE2C3DC65 | Since: 1207
 */
export declare function _0xBC3F847AE2C3DC65(): void;
/**
 * No comment provided
 *
 * Hash: 0xBD70108D01875299 | Since: 1207
 */
export declare function _0xBD70108D01875299(): any;
/**
 * No comment provided
 *
 * Hash: 0xBEDBE39B5FD98FD6 | Since: 1207
 */
export declare function _0xBEDBE39B5FD98FD6(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBEEFBB608D2AA68A | Since: 1207
 */
export declare function _0xBEEFBB608D2AA68A(): void;
/**
 * No comment provided
 *
 * Hash: 0xCE4E669400E5F8AA | Since: 1207
 */
export declare function _0xCE4E669400E5F8AA(): void;
/**
 * No comment provided
 *
 * Hash: 0xD0ABC4EA3B5E21A0 | Since: 1311
 */
export declare function _0xD0ABC4EA3B5E21A0(): any;
/**
 * No comment provided
 *
 * Hash: 0xD999E379265A4501 | Since: 1207
 */
export declare function _0xD999E379265A4501(): void;
/**
 * No comment provided
 *
 * Hash: 0xDE0C8B145EA466FF | Since: 1207
 */
export declare function _0xDE0C8B145EA466FF(): void;
/**
 * No comment provided
 *
 * Hash: 0xDF56A2B50C04DEA4 | Since: 1207
 */
export declare function _0xDF56A2B50C04DEA4(): any;
/**
 * No comment provided
 *
 * Hash: 0xDF94844D474F31E5 | Since: 1207
 */
export declare function _0xDF94844D474F31E5(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xE01C8DC8EDD28D31 | Since: 1207
 */
export declare function _0xE01C8DC8EDD28D31(): void;
/**
 * No comment provided
 *
 * Hash: 0xE05A5D39BE6E93AF | Since: 1207
 */
export declare function _0xE05A5D39BE6E93AF(): void;
/**
 * No comment provided
 *
 * Hash: 0xE116F6F2DA2D777E | Since: 1207
 */
export declare function _0xE116F6F2DA2D777E(): Vector3;
/**
 * No comment provided
 *
 * Hash: 0xE1C105E6BBA48270 | Since: 1207
 */
export declare function _0xE1C105E6BBA48270(): any;
/**
 * No comment provided
 *
 * Hash: 0xE55478C5EDF70AC2 | Since: 1207
 */
export declare function _0xE55478C5EDF70AC2(): any;
/**
 * No comment provided
 *
 * Hash: 0xE5831AA1E2FD147C | Since: 1207
 */
export declare function _0xE5831AA1E2FD147C(): void;
/**
 * No comment provided
 *
 * Hash: 0xE69FDA40AAC3EFC0 | Since: 1207
 */
export declare function _0xE69FDA40AAC3EFC0(): void;
/**
 * No comment provided
 *
 * Hash: 0xE6A151364C600B24 | Since: 1207
 */
export declare function _0xE6A151364C600B24(): any;
/**
 * No comment provided
 *
 * Hash: 0xE9225354FB7437A7 | Since: 1207
 */
export declare function _0xE9225354FB7437A7(): void;
/**
 * No comment provided
 *
 * Hash: 0xE9A6400D1A0E7A55 | Since: 1207
 */
export declare function _0xE9A6400D1A0E7A55(): any;
/**
 * No comment provided
 *
 * Hash: 0xEAF87DA2BE78A15B | Since: 1207
 */
export declare function _0xEAF87DA2BE78A15B(): void;
/**
 * in the decompiles seems to always be paired with _CLEAR_VEHICLE_TASKS
 *
 * Hash: 0xEBA2081E0A5F4D17 | Since: 1207
 */
export declare function _0xEBA2081E0A5F4D17(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xEC516FE805D2CB2D | Since: 1207
 */
export declare function _0xEC516FE805D2CB2D(): void;
/**
 * No comment provided
 *
 * Hash: 0xEFD875C2791EBEFD | Since: 1207
 */
export declare function _0xEFD875C2791EBEFD(): any;
/**
 * No comment provided
 *
 * Hash: 0xF718931A82EEB898 | Since: 1207
 */
export declare function _0xF718931A82EEB898(): void;
/**
 * No comment provided
 *
 * Hash: 0xF948F4356F010F11 | Since: 1207
 */
export declare function _0xF948F4356F010F11(): void;
/**
 * No comment provided
 *
 * Hash: 0xF97F462779B31786 | Since: 1207
 */
export declare function _0xF97F462779B31786(): any;
/**
 * No comment provided
 *
 * Hash: 0xFA30E2254461ADEB | Since: 1207
 */
export declare function _0xFA30E2254461ADEB(): void;
/**
 * No comment provided
 *
 * Hash: 0xFDECCA06E8B81346 | Since: 1207
 */
export declare function _0xFDECCA06E8B81346(ped: number | IPed): any;
/**
 * No comment provided
 *
 * Hash: 0xFE5D28B9B7837CC1 | Since: 1207
 */
export declare function _0xFE5D28B9B7837CC1(): any;
/**
 * No comment provided
 *
 * Hash: 0xFF8AFCA532B500D4 | Since: 1207
 */
export declare function _0xFF8AFCA532B500D4(): void;
/**
 * Returns the entity coverpoint with offset.
 *
 * Hash: 0x59872EA4CBD11C56 | Since: 1207
 */
export declare function addCoverpointForEntity(entity: number | IEntity, xOffset: number, yOffset: number, zOffset: number, heading: number): number;
/**
 * No comment provided
 *
 * Hash: 0xEB2ED1DC3AEC0654 | Since: 1207
 */
export declare function addCoverBlockingVolume(volume: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE8F1A5B4CED3725A | Since: 1207
 */
export declare function addFleeTargetCoords(ped: number | IPed, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x8360C47380B6F351 | Since: 1207
 */
export declare function associatePropWithScenario(scenario: number, entity: number | IEntity): [boolean, string];
/**
 * Returns the signed distance along the waypoint recording from its start (first node) to the point on the recording that corresponds to coords
 * need `REQUEST_WAYPOINT_RECORDING`
 *
 * Hash: 0x3ACC128510142B9D | Since: 1207
 */
export declare function calculateWaypointDistanceFromStart(pos: Vector3): [number, string];
/**
 * Cancels the hogtie state of a ped, releasing them from ropes or restraints.If the ped is currently hogtied on the ground, carried on a shoulder,lassoed, or tied to a horse, this native will clear the hogtie state andreturn the ped to free/normal behavior.
 *
 * Hash: 0xE2CF104ADD49D4BF | Since: 1207
 */
export declare function cancelPedHogtie(ped: number | IPed): void;
/**
 * Clears all active tasks assigned to the specified vehicle This cancels ongoing behaviors such as TASK_VEHICLE_DRIVE_TO_DESTINATION_2, or even tasks triggered by horses pulling the vehicle when they start moving due to gunfire etc. in the decompiles seems to always be paired with `0xEBA2081E0A5F4D17`
 *
 * Hash: 0x141BC64C8D7C5529 | Since: 1207
 */
export declare function clearVehicles(vehicle: number | IVehicle): void;
/**
 * groundSetting: 0: spawn on ground, 2 (1?): do not spawn on ground
 * p7: -1 in R* Scripts
 * Returns compositeId
 *
 * Hash: 0x5B4BBE80AD5972DC | Since: 1207
 */
export declare function createHerbComposites(asset: number | string, pos: Vector3, heading: number, groundSetting: number): number;
/**
 * No comment provided
 *
 * Hash: 0x5C885E0978B6AD60 | Since: 1207
 */
export declare function createWaypointPath(nodes: number): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x7981037A96E7D174 | Since: 1207
 */
export declare function cuffPed(ped: number | IPed): void;
/**
 * Params: p1 is always false except in script nb_egg_protector
 *
 * Hash: 0x5758B1EE0C3FD4AC | Since: 1207
 */
export declare function deletePatchObjectsFromHerbComposites(compositeId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x81948DFE4F5A0283 | Since: 1207
 */
export declare function deleteScenarioPoint(scenario: number): void;
/**
 * No comment provided
 *
 * Hash: 0x36D188AECB26094B | Since: 1207
 */
export declare function detachCarriablePed(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x6EF4E31B4D5D2DA0 | Since: 1207
 */
export declare function disassociatePropFromScenario(scenario: number): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x76E98B52369A289C | Since: 1207
 */
export declare function doesScenarioGroupExistHash(scenarioGroup: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEA31F199A73801D3 | Since: 1207
 */
export declare function doesScenarioPointHaveProps(scenario: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1ECF56C040FD839C | Since: 1207
 */
export declare function emitPedCarriableStruggleDirection(ped: number | IPed, direction: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBD1C3C0F271C39D3 | Since: 1207
 */
export declare function emitPedCarriableStruggleIntensity(ped: number | IPed, intensity: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6AFD84AEAA3EA538 | Since: 1207
 */
export declare function evaluatePedCarriableStruggleAvailable(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE47DD64B9F02677D | Since: 1207
 */
export declare function findModelForItem(item: number | string): number;
/**
 * Finds the nearest ped around the specified originPed, with optional filters for life state and predator/fish behavior
 * (all false) returns the nearest ped regardless of alive/dead state
 *
 * Hash: 0x244430C13BA5258E | Since: 1207
 */
export declare function findNearestPedAroundAnimal(animalPed: number | IPed, aliveOnly: boolean, deadOnly: boolean, preferDeadPredators: boolean): number;
/**
 * Finds all scenario points of a given type that lie inside a Volume and writes them into an Itemset Typically used with `CREATE_ITEMSET` Iterate results with `GET_ITEMSET_SIZE` and `GET_INDEXED_SCENARIO_POINT_INDEX_IN_ITEMSET`
 *
 * Hash: 0xB8E213D02F37947D | Since: 1207
 */
export declare function findScenarioAllPointsInVolumeOfType(volume: number, itemset: any, scenarioType: number | string): number;
/**
 * Returns a scenario point handle of the given scenario type that is associated with / found near the specified object. Useful for attached scenarios (e.g., ransackable lockboxes on a prop)
 *
 * Hash: 0xD508FA229F1C4900 | Since: 1207
 */
export declare function findScenarioAtObjectOfType(_object: number | IObject, pos: Vector3, scenarioType: number | string, radius: number): number;
/**
 * Attempts to finish/advance a ped’s ongoing scenario transition (between scenario clips/anims). Returns true if the ped is in a scenario transition and the given value pushes it forward, otherwise returns false
 *
 * Hash: 0x90703A8F75EE4ABD | Since: 1207
 */
export declare function finishScenarioTransition(ped: number | IPed, phaseOrDelta: number): boolean;
/**
 * Forces the specified animal/ped to have (or not have) its sampled state flag set.Acts as the setter counterpart to:_HAS_PED_ANIMAL_SAMPLED
 *
 * Hash: 0xF3C3503276F4A034 | Since: 1436
 */
export declare function forceAnimalSampled(animal: number | IPed, toggle: boolean): void;
/**
 * Returns the seat index currently set as the driving seat for the specified vehicle vehicle: The vehicle to query. Returns: Seat index (default = -1 for driver seat, custom index if changed with SET_DRIVING_SEAT)
 *
 * Hash: 0xE62754D09354F6CF | Since: 1207
 */
export declare function getDrivingSeat(vehicle: number | IVehicle): any;
/**
 * Flowers, Stalks or whatever the composite has
 *
 * Hash: 0x96C6ED22FB742C3E | Since: 1207
 */
export declare function getHerbCompositeNumEntities(compositeId: number): [number, any];
/**
 * No comment provided
 *
 * Hash: 0x4687E69D258BBE41 | Since: 1207
 */
export declare function getHogtieEscapeTimer(ped: number | IPed): number;
/**
 * returns an int in decompiles usually 0 or 1
 *
 * Hash: 0x5952DFA38FA529FE | Since: 1232
 */
export declare function getHoldToReelSettingEnabled(): number;
/**
 * Returns the horse entity currently in a revivable state and within the revive prompt range (if any)
 *
 * Hash: 0x351F74ED6177EBE7 | Since: 1207
 */
export declare function getHorseInRevivalState(): number;
/**
 * item hashes: PRIMARYITEM, P_MUGCOFFEE01X_PH_R_HAND, P_BOTTLEBEER01X_PH_R_HAND
 * http://prntscr.com/1qtp3bz
 * https://github.com/femga/rdr3_discoveries/tree/master/tasks/TASK_ITEM_INTERACTION
 *
 * Hash: 0x05A0100EA714DB68 | Since: 1207
 */
export declare function getItemInteractionEntityFromPed(ped: number | IPed, item: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xED1F514AF4732258 | Since: 1207
 */
export declare function getLedHorseFromPed(ped: number | IPed): number;
/**
 * Fills an output array with scenario points linked (chained) to a given parent scenario point. Returns the number of linked points found. Writes up to maxPoints and zeroes remaining entries. Useful for flows like chained put-down scenarios.
 *
 * Hash: 0xE7BBC4E56B989449 | Since: 1207
 */
export declare function getLinkedScenarioPoints(scenarioPoint: any, outPoints: any, maxPoints: any): any;
/**
 * Returns the current progress of the (Break Free) prompt when the specified ped is hogtied or knocked out.  The value increases as the player spams the prompt key until it reaches 1.0, at which point the ped breaks free.
 *
 * Hash: 0x03D741CB4052E26C | Since: 1232
 */
export declare function getPedBreakFreeProgress(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x1948BBE561A2375A | Since: 1207
 */
export declare function getPedIsIgnoringDeadBodies(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5BA659955369B0E2 | Since: 1207
 */
export declare function getPedUsingScenarioPoint(scenario: number): number;
/**
 * returns the total number of compartments (drawers, lids, etc.) the specified scenario container entity has for example, a chest has 1 compartment, while a cabinet with 3 drawers returns 3.
 *
 * Hash: 0x640A602946A8C972 | Since: 1207
 */
export declare function getScenarioContainerNumCompartments(entity: number | IEntity): number;
/**
 * Returns the number of currently open compartments for the specified scenario container entity if the container has closeable compartments (like drawers), this will return how many of them are currently open  if the container is not closeable (like a chest or safe that cannot be closed again), it will return 0
 *
 * Hash: 0x849791EBBDBA0362 | Since: 1207
 */
export declare function getScenarioContainerNumOpenCompartments(entity: number | IEntity): number;
/**
 * Returns m_eContainerState
 *
 * Hash: 0xB219612B5568E9EC | Since: 1207
 */
export declare function getScenarioContainerOpeningState(entity: number | IEntity): boolean;
/**
 * Returns the total number of lootable items currently inside the specified scenario container entity.This value decreases as items are looted. Before opening, it may return 0 because contents are not always loaded until the container is opened
 *
 * Hash: 0x01AF8A3729231A43 | Since: 1207
 */
export declare function getScenarioContainerRemainingLootCount(entity: number | IEntity): number;
/**
 * Params: p1 is always true in R* Scripts
 *
 * Hash: 0xA8452DD321607029 | Since: 1207
 */
export declare function getScenarioPointCoords(scenario: number): Vector3;
/**
 * Note: The current name for this native is the old name of 0x295514F198EFD0CA
 * Old name for this native: _GET_ENTITY_SCENARIO_POINT_IS_ATTACHED_TO
 *
 * Hash: 0x7467165EE97D3C68 | Since: 1207
 */
export declare function getScenarioPointEntity(scenario: number): number;
/**
 * Params: p1 is always true in R* Scripts
 *
 * Hash: 0xB93EA7184BAA85C3 | Since: 1207
 */
export declare function getScenarioPointHeading(scenario: number): number;
/**
 * No comment provided
 *
 * Hash: 0xDF7993356F52359A | Since: 1207
 */
export declare function getScenarioPointPedIsUsing(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x6718F40313A2B5A6 | Since: 1207
 */
export declare function getScenarioPointRadius(scenario: number): number;
/**
 * No comment provided
 *
 * Hash: 0xA92450B5AE687AAF | Since: 1207
 */
export declare function getScenarioPointType(scenario: number): number;
/**
 * No comment provided
 *
 * Hash: 0x2D0571BB55879DA2 | Since: 1207
 */
export declare function getScenarioPointTypePedIsUsing(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xA710DC5D25F8B942 | Since: 1207
 */
export declare function getScriptActionTime(ped: number | IPed, task: number | string): number;
/**
 * Fishing Research: https://pastebin.com/NmK5ZLVs
 * Only used in R* Scripts fishing_core and av_fishing_river
 *
 * Hash: 0xF3735ACD11ACD500 | Since: 1207
 */
export declare function getFishing(ped: number | IPed): [boolean, any];
/**
 * Returns hash of the underlying move network def, see move_networks.xml
 * https://alloc8or.re/rdr3/doc/misc/move_networks.txt
 *
 * Hash: 0xCACC2F9D994504B7 | Since: 1207
 */
export declare function getMoveNetworkId(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x844CEEE428EA35B0 | Since: 1207
 */
export declare function getMoveNetworkPhaseFloat(ped: number | IPed): [number, string];
/**
 * Returns 0.0-1.0 progress for the current mount-leap task, or -1.0f if no leap is active.
 *
 * Hash: 0x6BA606AB3A83BC4D | Since: 1207
 */
export declare function getPedMountLeapProgress(ped: number | IPed): number;
/**
 * Returns a coarse state for the mount-leap task (jumping from your mount onto another mount/wagon/train).
 * -1 = no task; 0 = in-air/ongoing; 1 = boarded/mounted; 2 = boarded rear train trailer
 * Use with _GET_TASK_PED_MOUNT_LEAP_PROGRESS for timing
 *
 * Hash: 0x9420FB11B8D77948 | Since: 1207
 */
export declare function getPedMountLeapState(ped: number | IPed): number;
/**
 * Returns the maximum (target) whistle/call distance associated with the next horse bonding level.
 * Used together with the current level's minimum to derive an effective whistle range based on the horse's bonding progress toward the next rank
 *
 * Hash: 0x78D8C1D4EB80C588 | Since: 1207
 */
export declare function getWhistleRangeMaxForBondingLevel(bondingLevel: number): number;
/**
 * Returns the minimum (baseline) whistle/call distance for the given horse bonding level.
 * This value represents the lower bound used when computing whether a horse is considered near or far relative to the player, and is interpolated against the next level's max.
 *
 * Hash: 0xEB67D4E056C85A81 | Since: 1207
 */
export declare function getWhistleRangeMinForBondingLevel(bondingLevel: number): number;
/**
 * list of carriable configs  https://gist.github.com/outsider31000/6272561fb992ccff80efbd130e0e9b9f
 *
 * Hash: 0xB8F52A3F84A7CC59 | Since: 1207
 */
export declare function hasCarriableConfigHashLoaded(carriableConfig: number | string): boolean;
/**
 * Returns true if the specified ped (animal) has been flagged as sampled. This is presumed to read a boolean flag set by:`_FORCE_ANIMAL_SAMPLED`
 *
 * Hash: 0x7CB99FADDE73CD1B | Since: 1311
 */
export declare function hasPedAnimalBeenSampled(animal: number | IPed): boolean;
/**
 * Returns true if the given entity currently has an active directed task that is, a task with a specific external objective (coordinate, entity, vehicle, or combat target)
 * Known to return true for:
 * TaskGoToCoordAnyMeans(ped, ...)
 * TaskGoToEntity(ped, target, ...)
 * TaskCombatPed(ped, targetPed, ...)
 * TaskWarpPedIntoVehicle(ped, vehicle)
 *
 * Hash: 0x9FF5F9B24E870748 | Since: 1207
 */
export declare function hasPedDirectedActive(entity: number | IEntity): boolean;
/**
 * old name _IS_HAT_BEING_PICKED_UP_2
 * Returns whether a carriable hat equip request is currently active Usually becomes true right after `_REQUEST_CARRIABLE_HAT_EQUIP_TO_PED` is called
 *
 * Hash: 0x4ECCC2815CA79AE2 | Since: 1207
 */
export declare function isCarriableHatPickupRequestActive(_object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6C50B9DCCCA70023 | Since: 1207
 */
export declare function isEntityRevivable(ped: number | IPed): boolean;
/**
 * new name _IS_CARRIABLE_HAT_PICKUP_AVAILABLE, Checks if a carriable hat object on the ground can currently be picked up
 *
 * Hash: 0x11CD066F54DA0133 | Since: 1207
 */
export declare function isHatBeingPickedUp(hatObject: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA9CC7856D52DBD25 | Since: 1207
 */
export declare function isPedArrestingAnyPed(ped: number | IPed): boolean;
/**
 * returns true if the specified mount (horse) is currently being led by the player, otherwise false.
 *
 * Hash: 0xAC5045AB7F1A34FD | Since: 1207
 */
export declare function isPedBeingLed(mount: number | IEntity): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC8B29D18022EA2B7 | Since: 1207
 */
export declare function isPedDuelling(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEFC4303DDC6E60D3 | Since: 1207
 */
export declare function isPedLeadingHorse(ped: number | IPed): boolean;
/**
 * Returns true while the ped has cast the fishing line and is waiting for a fish to bite Once the ped hooks a fish and enters the struggle/reeled-in phase, this returns false.
 *
 * Hash: 0xB520DBDA7FCF573F | Since: 1207
 */
export declare function isPedWaitingOnFishToBite(ped: number | IPed): boolean;
/**
 * Returns true if a revivable horse prompt is currently visibled (i.e., visible and interactable) near the player.This indicates that there is a downed horse nearby which can be revived
 *
 * Hash: 0x756C7B4C43DF0422 | Since: 1207
 */
export declare function isReviveHorsePromptVisible(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDCC374913DE6AAA6 | Since: 1207
 */
export declare function isScenarioGroupEnabledHash(scenarioGroup: number | string): boolean;
/**
 * Checks whether a specified scenario is currently being used (actively played) by any entity (player or ped). Returns true if the scenario is already occupied, otherwise false.
 *
 * Hash: 0x1ACBC313966C21F3 | Since: 1436
 */
export declare function isScenarioInUse(scenarioHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0CC36D4156006509 | Since: 1207
 */
export declare function isScenarioPointActive(scenario: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8569C38D2FB80650 | Since: 1207
 */
export declare function isScenarioPointFlagSet(scenario: number, flag: number): boolean;
/**
 * https://gist.github.com/outsider31000/6272561fb992ccff80efbd130e0e9b9f carriable config list
 *
 * Hash: 0xFF745B0346E19E2C | Since: 1207
 */
export declare function loadCarriableConfigHash(hash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x78B4567E18B54480 | Since: 1207
 */
export declare function makeObjectCarriable(_object: number | IObject): void;
/**
 * Sets the AI travel speed for a mount (horse). Affects how fast the horse's AI will move when being controlled by AI logic (not player input), e.g. during escorts, flee, wander, or scripted tasks
 * https://youtu.be/aupII2O9vT8
 *
 * Hash: 0xBAAB791AA72C2821 | Since: 1207
 */
export declare function pedApplyFollowRoadSpeedOverride(ped: number | IPed, speed: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1A52076D26E09004 | Since: 1207
 */
export declare function pedFishingrodHookEntity(ped: number | IPed, entity: number | IEntity): void;
/**
 * Used with 'P_BODYPARTARMFLOAT02X' model in fishing_core.c
 *
 * Hash: 0xCE71C2F9BAA3F975 | Since: 1207
 */
export declare function pedFishingrodHookObject(ped: number | IPed, _object: number | IObject): void;
/**
 * No comment provided
 *
 * Hash: 0x02EBBB3989B7E695 | Since: 1207
 */
export declare function pedIsInScenarioBase(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6AFDA2264925BD11 | Since: 1207
 */
export declare function removeCarriableConfig(carriableConfig: number | string): void;
/**
 * Removes the TaskCarriable association for the given entity. If a ped is currently carrying this entity, it will be **dropped** immediately. If it is not being carried, the carriable link/state created via TaskCarriable(...) is cleared
 *
 * Hash: 0x9EBD34958AB6F824 | Since: 1207
 */
export declare function removeCarriable(entity: number | IEntity): void;
/**
 * Requests that the given carriable hat be assigned for equip by the ped. After success, `_IS_CARRIABLE_HAT_PICKUP_REQUEST_ACTIVE` will return true
 *
 * Hash: 0x9ADDBB9242179D56 | Since: 1207
 */
export declare function requestCarriableHatEquipToPed(_object: number | IObject, ped: number | IPed): void;
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/objects/composites
 *
 * Hash: 0x73F0D0327BFA0812 | Since: 1207
 */
export declare function requestHerbCompositeAsset(asset: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2E20878FD208A68E | Since: 1207
 */
export declare function resetScenarioForEntity(scenario: number, entity: number | IEntity): void;
/**
 * Resets/clears all scenario entities within the given spherical area
 *
 * Hash: 0x4161648394262FDF | Since: 1207
 */
export declare function resetScenarioPointsInArea(pos: Vector3, radius: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5A40040BB5AE3EA2 | Since: 1207
 */
export declare function resetScenarioScript(scenario: number): void;
/**
 * Set a ped's boat-local offset and/or facing (degrees). Boats only. Flags: 0=apply both; 1=heading only (lock offset); 2=offset only (lock heading); 3=apply neither.
 *
 * Hash: 0x517D01BF27B682D1 | Since: 1207
 */
export declare function setAboardPedBoatPose(ped: number | IPed, boat: number | IEntity, offsetX: number, offsetY: number, offsetZ: number, heading: number, flags: number): void;
/**
 * Enables or disables the interaction prompt for a given carriable config (e.g. DEAD_CARRIABLE_HUMAN).
 *
 * Hash: 0x816A3ACD265E2297 | Since: 1207
 */
export declare function setCarriableConfigPromptEnabled(carriableConfig: number | string, toggle: boolean): void;
/**
 * Enables or disables the contextual Pick Up prompt for a carriable entity
 * object — A carriable entity (animal carcass, pelt bundle, sack/crate flagged as carriable, etc.)
 *
 * Hash: 0xA21AA2F0C2180125 | Since: 1207
 */
export declare function setCarriablePickupPromptEnabled(_object: number | IObject, enabled: boolean): void;
/**
 * Sets which seat index acts as the driver seat for driving tasks
 *
 * Hash: 0x4BA972D0E5AD8122 | Since: 1207
 */
export declare function setDrivingSeat(vehicle: number | IVehicle, seatIndex: number): void;
/**
 * Baits: p_fishHook02x, p_baitBread01x, p_baitCorn01x, p_baitCheese01x, p_baitWorm01x, p_baitCricket01x, p_crawdad01x, p_finisheDragonfly01x, p_finisdFishlure01x, p_finishdCrawd01x, p_finisheDragonflyLegendary01x, p_finisdFishlureLegendary01x, p_finishdCrawdLegendary01x, p_lgoc_spinner_v4
 *
 * Hash: 0x9B0C7FA063E67629 | Since: 1207
 */
export declare function setFishingBait(ped: number | IPed, withoutBuoy: boolean, instantly: boolean): string;
/**
 * Sets the time it takes for a hogtied ped to escape
 * -1.0f for ped to never escape
 *
 * Hash: 0xAB591AE6B48B913E | Since: 1207
 */
export declare function setHogtieEscapeTimer(ped: number | IPed, time: number): void;
/**
 * Configures how an intimidated/hogtied ped faces the player If useLimits is false (0), the ped always fully faces the player.If useLimits is true (1), the ped’s facing is restricted within the given angle range [minAngle, maxAngle]
 *
 * Hash: 0x0FE797DD9F70DFA6 | Since: 1207
 */
export declare function setIntimidatedFacingAngle(ped: number | IPed, useLimits: boolean, minAngle: number, maxAngle: number): void;
/**
 * All Interaction states
 * https://github.com/femga/rdr3_discoveries/tree/master/tasks/TASK_ITEM_INTERACTION#-4-item_interaction_state_name--item_interaction_propid--1
 *
 * Hash: 0xB35370D5353995CB | Since: 1207
 */
export declare function setItemInteractionState(ped: number | IPed, itemInteractionState: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x34C0010188D7C54A | Since: 1207
 */
export declare function setPedClearAimingInTheAir(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x013A7BA5015C1372 | Since: 1207
 */
export declare function setPedIgnoreDeadBodies(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x7C015D8BCEC72CF4 | Since: 1207
 */
export declare function setPedPathAvoidTraffic(ped: number | IPed, avoidTraffic: boolean): void;
/**
 * _SET_PED_PATH_P*
 *
 * Hash: 0x70F7A1EAB1AE3AA8 | Since: 1232
 */
export declare function setPedPathLadderCostModifier(ped: number | IPed, modifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9DE63896B176EA94 | Since: 1207
 */
export declare function setPedPathMayEnterDeepWater(ped: number | IPed, mayEnterDeepWater: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x06ECF3925BC2ABAE | Since: 1311
 */
export declare function setPedPathMayUseSlidingSurfaces(ped: number | IPed, useSlidingSurfaces: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x42CFD8FD8CC8DC69 | Since: 1207
 */
export declare function setPedPathNeverUseInteriors(ped: number | IPed, neverUseInteriors: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x216343750545A486 | Since: 1207
 */
export declare function setPedPathPreferHorseWalkable(ped: number | IPed, preferHorseWalkable: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC6170856E54557B2 | Since: 1207
 */
export declare function setPedPathPreferStayInWater(ped: number | IPed, preferStayInWater: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x12990818C1D35886 | Since: 1207
 */
export declare function setPedPathPreferToAvoidFoliage(ped: number | IPed, preferAvoidFoliage: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x8BB283A7888AD1AD | Since: 1207
 */
export declare function setPedPathPreferToAvoidMud(ped: number | IPed, preferAvoidMud: boolean): void;
/**
 * Opens/closes containers: ChestDugUp
 *
 * Hash: 0x188F8071F244B9B8 | Since: 1207
 */
export declare function setScenarioContainerOpeningState(entity: number | IEntity, open: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x9925EDDB6EAB88CD | Since: 1207
 */
export declare function setScenarioGroupEnabledHash(scenarioGroup: number | string, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xEEE4829304F93EEE | Since: 1207
 */
export declare function setScenarioPointActive(scenario: number, active: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x2056AB38DF06825C | Since: 1207
 */
export declare function setScenarioPointCoords(scenario: number, pos: Vector3): void;
/**
 * flag: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CScenarioPointFlags__Flags
 *
 * Hash: 0x5AF19B6CC2115D34 | Since: 1207
 */
export declare function setScenarioPointFlag(scenario: number, flag: number, value: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xD3A0DA8F91612C6E | Since: 1207
 */
export declare function setScenarioPointHeading(scenario: number, heading: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC47D9080A9A8856A | Since: 1207
 */
export declare function setScenarioPointRadius(scenario: number, radius: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD00E50E673802D71 | Since: 1207
 */
export declare function setScenarioTypeEnabledHash(scenarioType: number | string, toggle: boolean): void;
/**
 * Only used in R* Scripts fishing_core and av_fishing_river
 *
 * Hash: 0xF3735ACD11ACD501 | Since: 1207
 */
export declare function setFishing(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x099D4A855D53B03B | Since: 1207
 */
export declare function setMoveNetworkSignalFloat2(ped: number | IPed, value: number): string;
/**
 * No comment provided
 *
 * Hash: 0x4662BFE01938D98D | Since: 1207
 */
export declare function setMoveNetworkSignalVector(ped: number | IPed, pos: Vector3): string;
/**
 * Swaps the horse drawn wagon/coach reings control between the ped and their adjacent front-seat partner
 *
 * Hash: 0xFC7F71CF49F70B6B | Since: 1207
 */
export declare function swapReinsForPed(ped: number | IPed): void;
/**
 * Transfers the driving reins/control of a vehicle (e.g., wagon/coach) to another occupant when there is more than one ped inside. If instant is true, the handover happens instantly
 *
 * Hash: 0xE01F55B2896F6B37 | Since: 1207
 */
export declare function swapReinsForVehicle(vehicle: number | IVehicle, instant: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x30A768C30D385EC5 | Since: 1207
 */
export declare function animalBleedOut(ped: number | IPed, killer: number | IPed, flee: boolean, weaponHash: number | string, boneId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE53D17AD837CBF7C | Since: 1207
 */
export declare function boardVehicle(ped: number | IPed, vehicle: number | IVehicle, speed: number, boardingFlags: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE41A09C8DDFF7AA4 | Since: 1207
 */
export declare function boardVehicle2(ped: number | IPed, speed: number, boardingFlags: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDF1D85BCAF60D537 | Since: 1207
 */
export declare function climb2(ped: number | IPed, heading: number): void;
/**
 * Coords: volume coords used in R* Script smuggler2
 * p4/p5 = 0 in R* Scripts previous name TASK_COMBAT_PED_3
 *
 * Hash: 0xC624414FA748B9BA | Since: 1207
 */
export declare function combatPedAtCoords(ped: number | IPed, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x81D16C4FF3A77ADF | Since: 1207
 */
export declare function cutFreeHogtiedTargetPed(ped: number | IPed, targetPed: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x525421A507216084 | Since: 1207
 */
export declare function cutFreeHogtiedTargetPed2(ped: number | IPed, targetPed: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xA7C6854BB5A4192A | Since: 1207
 */
export declare function disembarkVehicle(vehicle: number | IVehicle): void;
/**
 * Triggers the 'action / flourish' sub-clip of the ped's currently playing emote.
 *
 * Hash: 0x6A1AF481407BF6E9 | Since: 1207
 */
export declare function emoteAction(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBDFEEB7600BCD938 | Since: 1207
 */
export declare function emoteOutro(ped: number | IPed): void;
/**
 * Immediately applies the given hat to the ped’s head without any animation Directly equips the hat, skipping the pickup anim flow
 *
 * Hash: 0xAA0AF6025160243A | Since: 1207
 */
export declare function equipHat(_object: number | IObject, ped: number | IPed): void;
/**
 * fleeType: see TASK_FLEE_COORD
 *
 * Hash: 0x6879FF208ED87F2A | Since: 1207
 */
export declare function fleeFromCoord(): void;
/**
 * fleeType: see TASK_FLEE_COORD
 *
 * Hash: 0x7B74D8EEDE9B5727 | Since: 1207
 */
export declare function fleeFromPed(ped: number | IPed, fleeFromTarget: number | IPed, pos: Vector3, distance: number, targetPed: number | IPed): void;
/**
 * Forces a ped to attack a target with throwable or projectile weapons (like bows, throwing knives, tomahawks, dynamite) for a specified duration while aiming
 * With a bow: the ped keeps firing arrows continuously until durationMs expires (as long as the aiming condition is maintained).With other throwables: throws are generally single-use (one per animation cycle).Excluded weapons: lasso and bolas
 *
 * Hash: 0x2416EC2F31F75266 | Since: 1207
 */
export declare function forceThrowableAtEntityWhileAiming(ped: number | IPed, targetEntity: number | IEntity, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1FC9B33976BACD6C | Since: 1207
 */
export declare function guardAssignedDefensiveArea2(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x648B75D44930D6BD | Since: 1207
 */
export declare function intimidated(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x933ACC1A1771A288 | Since: 1207
 */
export declare function intimidated2(victim: number | IPed, attacker: number | IPed, everyFrame: boolean, flag: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x72F52AA2D2B172CC | Since: 1207
 */
export declare function itemInteraction2(ped: number | IPed, propNameGxt: number | string, prop: number | IObject, propId: number | string, itemInteractionState: number | string): void;
/**
 * Params: p3, p4, p5, p6: 0, 0, 0, -1.0f in R* Scripts
 *
 * Hash: 0xD61D5E1AD9876DEB | Since: 1207
 */
export declare function itemInteraction3(ped: number | IPed, item: number | string): any;
/**
 * No comment provided
 *
 * Hash: 0x91083103137D7254 | Since: 1207
 */
export declare function jump2(ped: number | IPed, pos: Vector3, entity: number | IEntity): void;
/**
 * Sets the knockout timer for a ped that is currently knocked out (See Task_Knocked_Out or Task_Knocked_Out_And_Hogtied). p1 is the duration in seconds.
 *
 * Hash: 0xFFB520A3E16F7B7B | Since: 1207
 */
export declare function knockedOutSetDuration(ped: number | IPed): void;
/**
 * Sets an unknown float tuning setting for a ped that is currently in the knocked-out state.
 *
 * Hash: 0x8B1FDF63C3193EDA | Since: 1207
 */
export declare function knockedOutSetTuning(ped: number | IPed, tuning: number): void;
/**
 * No comment provided
 *
 * Hash: 0x964B06C88E4C86DB | Since: 1207
 */
export declare function patrol2(): void;
/**
 * Similar to 0xB31A277C1AC7B7FF but checks if the ped's inventory contains the specified emote kit.
 *
 * Hash: 0x884E3436CC1F41DD | Since: 1207
 */
export declare function playEmote(ped: number | IPed, emoteType: number, playbackMode: number, emote: number | string, isSecondaryTask: boolean, canBreakOut: boolean, disableEarlyOutAnimTag: boolean, ignoreInvalidMainTask: boolean, destroyProps: boolean): void;
/**
 * Orders the ped to point at the given entity (finger/upper-body point), similar to task point entity
 *
 * Hash: 0xF40A109B4B79A848 | Since: 1207
 */
export declare function pointAtEntity(ped: number | IPed, targetEntity: number | IEntity, durationMs: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDF8A5855B9F9A97B | Since: 1207
 */
export declare function putPedDirectlyIntoCoverFromCoords(ped: number | IPed, pos: Vector3, fromX: number, fromY: number, fromZ: number, timeout: number): void;
/**
 * Takes scenario point handle instead of hash
 *
 * Hash: 0xA917E39F2CEFD215 | Since: 1207
 */
export declare function startScenarioInPlace2(ped: number | IPed, scenarioPoint: number, idleForever: boolean): string;
/**
 * No comment provided
 *
 * Hash: 0x7282356DFF6B5A51 | Since: 1207
 */
export declare function throwProjectile2(): void;
/**
 * No comment provided
 *
 * Hash: 0x322BFDEA666E2B0E | Since: 1207
 */
export declare function useNearestScenarioToCoord(ped: number | IPed, pos: Vector3, distance: number, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0F6641449DD86FBE | Since: 1207
 */
export declare function useScenarioPoint2(ped: number | IPed, ped2: number | IPed, p5: number | string): string;
/**
 * Adds a waypoint to an AI vehicle's active drive-to-destination task; only the last 3 points are kept (ignored if no such task).
 *
 * Hash: 0x1D125814EBC517EB | Since: 1207
 */
export declare function vehicleAddNextDestination(vehicle: number | IVehicle, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xF0108F01FB105DA2 | Since: 1207
 */
export declare function vehicleDriveToCoord2(ped: number | IPed): void;
/**
 * Tasks vehicle towards owner
 *
 * Hash: 0x391073B9D3CCE2BA | Since: 1207
 */
export declare function vehicleDriveToDestination2(vehicle: number | IVehicle, pos: Vector3, speed: number): void;
/**
 * Params: p4 = 3.f or 8.f, p5 = 0.25f, p6 = 0 in R* Scripts
 *
 * Hash: 0x6524A8981E8BE7C9 | Since: 1207
 */
export declare function vehicleDriveToPoint2(vehicle: number | IVehicle, pos: Vector3): void;
/**
 * Vehicle Auto Drive (?)
 * p1/p2/p3: usually 1f, 1f, 0f or 0f, 0f, 0f
 * Speed: usually 8f
 * Types: 1148979456 (task with flee), 1148979587 (dismissing the vehicle)
 *
 * Hash: 0x55CD5FDDD4335C1E | Since: 1207
 */
export declare function vehicleFleeOnCleanup(vehicle: number | IVehicle, speed: number, _type: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x041D17A9E221AE30 | Since: 1207
 */
export declare function vehicleFollowWaypointRecording2(): void;
/**
 * Returns true if the vehicle’s has a destination set previously set with `_TASK_VEHICLE_DRIVE_TO_DESTINATION_2` clear using `_CLEAR_VEHICLE_TASKS`
 *
 * Hash: 0x583AE9AF9CEE0958 | Since: 1207
 */
export declare function vehicleHasDestination(vehicle: number | IVehicle, pos: Vector3): boolean;
/**
 * Smoothly transitions an active scenario actor (ped) into a specific conditional / clipset defined in the scenario's conditional-anim graph, breaking or restarting the scenario.
 * Returns `true` if the transition was successfully triggered, or `false` if it failed
 *
 * Hash: 0x79197F7D2BB5E73A | Since: 1207
 */
export declare function transitionScenarioToConditionalAnim(ped: number | IPed, scenarioPoint: number, flags: number): [boolean, string, string, string];
/**
 * In-place update for a running follow-to-offset/go-to task: sets new target coords + local offset, with speed and arrival tolerance (foot or mount; no effect if no compatible task)
 *
 * Hash: 0x3FFCD7BBA074CC80 | Since: 1207
 */
export declare function updateGoToCoordWithOffset(ped: number | IPed, targetX: number, targetY: number, targetZ: number, offsetX: number, offsetY: number, offsetZ: number, speed: number, tolerance: number): void;
/**
 * Updates the target coordinate of an ongoing SCRIPT_TASK_VEHICLE_SHOOT_AT_COORD for the given ped This lets you retarget the shooting point in real time without restarting the task
 * Has effect only while the ped’s task status for `SCRIPT_TASK_VEHICLE_SHOOT_AT_COORD` is `TASK_STATUS_ONGOING` (commonly 1) If the task hasn’t started yet (status 0 or not running), use `TASK_VEHICLE_SHOOT_AT_COORD` first; after it becomes active, call this to update the aim point Compared to `TASK_VEHICLE_SHOOT_AT_COORD`: the latter starts (or re-queues) the task with an initial target; this native *only* updates the active task’s target coordinate.
 *
 * Hash: 0xAF2EF28CE3084505 | Since: 1207
 */
export declare function updateVehicleShootAtCoord(ped: number | IPed, pos: Vector3): void;
