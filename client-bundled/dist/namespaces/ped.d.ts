import { Vector3, IEntity, IPed, IPlayer, IVehicle, IObject } from '@risinglife/redm-shared';
/**
 * An analogue of [GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS](#\_0x27561561732A7842) that returns number of drawable variations inside a single collection instead of the total number across all collections.
 *
 * Hash: 0x310D0271 | Since: unknown | API-Set: client
 */
export declare function getNumberOfCollectionDrawableVariations(ped: number | IPed, componentId: number, collection: string): number;
/**
 * An analogue of [GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS](#\_0x5FAF9754E789FB47) that returns number of prop variations inside a single collection instead of the total number across all collections.
 *
 * Hash: 0x3B6A13E1 | Since: unknown | API-Set: client
 */
export declare function getNumberOfCollectionPropDrawableVariations(ped: number | IPed, anchorPoint: number, collection: string): number;
/**
 * An alternative to [GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS](#\_0xA6E7F1CEB523E171) that uses local collection indexing instead of the global one.
 *
 * Hash: 0x75CAF9CC | Since: unknown | API-Set: client
 */
export declare function getNumberOfCollectionPropTextureVariations(ped: number | IPed, anchorPoint: number, collection: string, propIndex: number): number;
/**
 * An alternative to [GET_NUMBER_OF_PED_TEXTURE_VARIATIONS](#\_0x8F7156A3142A6BAD) that uses local collection indexing instead of the global one.
 *
 * Hash: 0xD2C15D7 | Since: unknown | API-Set: client
 */
export declare function getNumberOfCollectionTextureVariations(ped: number | IPed, componentId: number, collection: string, drawableId: number): number;
/**
 * Returns number of variation collections available for the given Ped.
 *
 * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
 *
 * `GET_PED_COLLECTIONS_COUNT` can be used together with [GET_PED_COLLECTION_NAME](#\_0xFED5D83A) to list all collections attached to Ped.
 *
 * Hash: 0x45946359 | Since: unknown | API-Set: client
 */
export declare function getCollectionsCount(ped: number | IPed): number;
/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B)) for the given global drawable ID. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 *
 * Hash: 0x94EB1FE4 | Since: unknown | API-Set: client
 */
export declare function getCollectionLocalIndexFromDrawable(ped: number | IPed, componentId: number, drawableId: number): number;
/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17)) for the given global prop index. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 *
 * Hash: 0xFBDB885F | Since: unknown | API-Set: client
 */
export declare function getCollectionLocalIndexFromProp(ped: number | IPed, anchorPoint: number, propIndex: number): number;
/**
 * Returns name of collection under given index for the given Ped.
 *
 * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
 *
 * `GET_PED_COLLECTION_NAME` can be used together with [GET_PED_COLLECTIONS_COUNT](#\_0x45946359) to list all collections attached to Ped.
 *
 * Hash: 0xFED5D83A | Since: unknown | API-Set: client
 */
export declare function getCollectionName(ped: number | IPed, index: number): string;
/**
 * Gets collection name for the given global drawable ID. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) is used to get collection and local index (inside the given collection) of the drawable. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 *
 * Hash: 0xD6BBA48B | Since: unknown | API-Set: client
 */
export declare function getCollectionNameFromDrawable(ped: number | IPed, componentId: number, drawableId: number): string;
/**
 * Gets collection name for the given global prop index. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) is used to get collection and local index (inside the given collection) of the prop. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 *
 * Hash: 0x8ED0C17 | Since: unknown | API-Set: client
 */
export declare function getCollectionNameFromProp(ped: number | IPed, anchorPoint: number, propIndex: number): string;
/**
 * Returns a list of decorations applied to a ped.
 *
 * The data returned adheres to the following layout:
 *
 * ```
 * [ [ collectionHash1, overlayHash1 ], ..., [c ollectionHashN, overlayHashN ] ]
 * ```
 *
 * This command will return undefined data if invoked on a remote player ped.
 *
 * Hash: 0x7CCE1163 | Since: unknown | API-Set: client
 */
export declare function getDecorations(ped: number | IPed): number;
/**
 * A getter for [SET_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x95E3D6257B166CF2).
 *
 * Hash: 0xF5A904F9 | Since: unknown | API-Set: client
 */
export declare function getDensityMultiplier(): number;
/**
 * Returns global drawable index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Drawables are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
 *
 * If all drawables from all collections are placed into one continuous array - the global index will correspond to the index of drawable in such array. Local index is index of drawable in this array relative to the start of the given collection.
 *
 * Hash: 0x280F1FC3 | Since: unknown | API-Set: client
 */
export declare function getDrawableGlobalIndexFromCollection(ped: number | IPed, componentId: number, collection: string, drawableId: number): number;
/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection local drawable index (inside [GET_PED_DRAWABLE_VARIATION_COLLECTION_NAME](#\_0xBCE0AB63) collection) instead of the global drawable index.
 *
 * Hash: 0x9970386F | Since: unknown | API-Set: client
 */
export declare function getDrawableVariationCollectionLocalIndex(ped: number | IPed, componentId: number): number;
/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection name instead of the global drawable index.
 *
 * Should be used together with [GET_PED_DRAWABLE_VARIATION_COLLECTION_LOCAL_INDEX](#\_0x9970386F).
 *
 * Hash: 0xBCE0AB63 | Since: unknown | API-Set: client
 */
export declare function getDrawableVariationCollectionName(ped: number | IPed, componentId: number): string;
/**
 * A getter for [\_SET_PED_EYE_COLOR](#\_0x50B56988B170AFDF). Returns -1 if fails to get.
 *
 * Hash: 0xA47B860F | Since: unknown | API-Set: client
 */
export declare function getEyeColor(ped: number | IPed): number;
/**
 * A getter for [\_SET_PED_FACE_FEATURE](#\_0x71A5C1DBA060049E). Returns 0.0 if fails to get.
 *
 * Hash: 0xBA352ADD | Since: unknown | API-Set: client
 */
export declare function getFaceFeature(ped: number | IPed, index: number): number;
/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 *
 * Hash: 0xA3EA2893 | Since: unknown | API-Set: client
 */
export declare function getHairColor(ped: number | IPed): number;
/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 *
 * Hash: 0x4B087305 | Since: unknown | API-Set: client
 */
export declare function getHairHighlightColor(ped: number | IPed): number;
/**
 * A getter for [SET_PED_HEAD_OVERLAY](#\_0x48F44967FA05CC1E) and [\_SET_PED_HEAD_OVERLAY_COLOR](#\_0x497BF74A7B9CB952) natives.
 *
 * Hash: 0xC46EE605 | Since: unknown | API-Set: client
 */
export declare function getHeadOverlayData(ped: number | IPed, index: number): [boolean, number, number, number, number, number];
/**
 * Gets a ped model's health config.
 *
 * Hash: 0xF71542F7 | Since: unknown | API-Set: client
 */
export declare function getModelHealthConfig(modelHash: number | string): number;
/**
 * Gets a ped model's personality type.
 *
 * Hash: 0xFE08CAD6 | Since: unknown | API-Set: client
 */
export declare function getModelPersonality(modelHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x69E81E3D | Since: unknown | API-Set: client
 */
export declare function getMovementClipset(ped: number | IPed): number;
/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection local prop index (inside [GET_PED_PROP_COLLECTION_NAME](#\_0x6B5653E4) collection) instead of the global prop index.
 *
 * Hash: 0xCD420AD1 | Since: unknown | API-Set: client
 */
export declare function getPropCollectionLocalIndex(ped: number | IPed, anchorPoint: number): number;
/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection name instead of the global drawable index.
 *
 * Should be used together with [GET_PED_PROP_COLLECTION_LOCAL_INDEX](#\_0xCD420AD1).
 *
 * Hash: 0x6B5653E4 | Since: unknown | API-Set: client
 */
export declare function getPropCollectionName(ped: number | IPed, anchorPoint: number): string;
/**
 * Returns global prop index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Props are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
 *
 * If all props from all collections are placed into one continuous array - the global index will correspond to the index of the prop in such array. Local index is index of the prop in this array relative to the start of the given collection.
 *
 * Hash: 0x2CB45CDC | Since: unknown | API-Set: client
 */
export declare function getPropGlobalIndexFromCollection(ped: number | IPed, anchorPoint: number, collection: string, propIndex: number): number;
/**
 * A getter for [SET_PED_SWEAT](#\_0x27B0405F59637D1F).
 *
 * Hash: 0x44B91E94 | Since: unknown | API-Set: client
 */
export declare function getSweat(ped: number | IPed): number;
/**
 * An alternative to [IS_PED_COMPONENT_VARIATION_GEN9\_EXCLUSIVE](#\_0xC767B581) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x33B2AFA2 | Since: unknown | API-Set: client
 */
export declare function isCollectionComponentVariationGen9Exclusive(ped: number | IPed, componentId: number, collection: string, drawableId: number): boolean;
/**
 * An alternative to [IS_PED_COMPONENT_VARIATION_VALID](#\_0xE825F6B6CEA7671D) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0xCA63A52A | Since: unknown | API-Set: client
 */
export declare function isCollectionComponentVariationValid(ped: number | IPed, componentId: number, collection: string, drawableId: number, textureId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC767B581 | Since: unknown | API-Set: client
 */
export declare function isComponentVariationGen9Exclusive(ped: number | IPed, componentId: number, drawableId: number): boolean;
/**
 * Sets whether peds can stand on top of *all* vehicles without falling off.
 *
 * Note this flag is not replicated automatically, you will have to manually do so.
 *
 * Hash: 0x90A9E0B2 | Since: unknown | API-Set: client
 */
export declare function overridesCanStandOnTopFlag(flag: boolean): void;
/**
 * Allows the bypassing of default game behavior that prevents the use of [SET_PED_DRIVE_BY_CLIPSET_OVERRIDE](#\_0xED34AB6C5CB36520) in certain scenarios to avoid clipping issues (e.g., when there is more than one Ped in a vehicle).
 *
 * Note: This flag and the overridden clipset are not replicated values and require synchronization through user scripts. Additionally, current game behavior also restricts applying this clipset locally when in first-person mode and will require a temporary workaround.
 *
 * Hash: 0xB14F8EAD | Since: unknown | API-Set: client
 */
export declare function overridesUseDefaultDriveByClipset(flag: boolean): void;
/**
 * Restores an overridden ped model personality type to the default value.
 *
 * Hash: 0x79A12861 | Since: unknown | API-Set: client
 */
export declare function resetModelPersonality(modelHash: number | string): void;
/**
 * An alternative to [SET_PED_COMPONENT_VARIATION](#\_0x262B14F48D29DE80) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x88711BBA | Since: unknown | API-Set: client
 */
export declare function setCollectionComponentVariation(ped: number | IPed, componentId: number, collection: string, drawableId: number, textureId: number, paletteId: number): void;
/**
 * An alternative to [SET_PED_PRELOAD_PROP_DATA](#\_0x2B16A3BFF1FBCE49) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Hash: 0x14B5BBE0 | Since: unknown | API-Set: client
 */
export declare function setCollectionPreloadPropData(ped: number | IPed, anchorPoint: number, collection: string, propIndex: number, textureId: number): void;
/**
 * An alternative to [SET_PED_PRELOAD_VARIATION_DATA](#\_0x39D55A620FCB6A3A) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x3EC75558 | Since: unknown | API-Set: client
 */
export declare function setCollectionPreloadVariationData(ped: number | IPed, componentId: number, collection: string, drawableId: number, textureId: number): void;
/**
 * An alternative to [SET_PED_PROP_INDEX](#\_0x93376B65A266EB5F) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Hash: 0x75240BCB | Since: unknown | API-Set: client
 */
export declare function setCollectionPropIndex(ped: number | IPed, anchorPoint: number, collection: string, propIndex: number, textureId: number, attach: boolean): void;
/**
 * Override the limits on the number and types of melee combatants. The game is limited to at most ten combatants among the three types: primary, secondary, and observers.
 *
 * This native infers the number of observers based on the primary and secondary counts.
 *
 * Hash: 0x8E51EC29 | Since: unknown | API-Set: client
 */
export declare function setMeleeCombatLimits(primaryCount: number, secondaryCount: number, populationPedCount: number): void;
/**
 * Sets a ped model's health config.
 * Takes effect only after setting player model with `SET_PLAYER_MODEL`.
 *
 * Hash: 0xAF12A05D | Since: unknown | API-Set: client
 */
export declare function setModelHealthConfig(modelHash: number | string, configName: string): void;
/**
 * Overrides a ped model personality type.
 *
 * Hash: 0x46F6B38B | Since: unknown | API-Set: client
 */
export declare function setModelPersonality(modelHash: number | string, personalityHash: number | string): void;
/**
 * Purpose: The game's default values for these make shooting while traveling Left quite a bit slower than shooting while traveling right (This could be a game-balance thing?)
 *
 * Default Min: -45 Degrees
 * Default Max: 135 Degrees
 *
 * ```
 * \ ,- ~ ||~ - ,
 * , ' \    x   x    ' ,
 * ```
 *
 * ,      \    x    x   x  ,
 * ,         \  x     x      ,
 * ,            \     x    x  ,
 * ,              \      x    ,
 * ,                \   x     ,
 * ,                 \   x x ,
 * ,                  \  x ,
 * ,                 , '
 * ' - , \_ \_ \_ ,  '  \\
 *
 * If the transition angle is within the shaded portion (x), there will be no transition(Quicker)
 * The angle corresponds to where you are looking(North on the circle) vs. the heading of your Ped.
 * Note: For some reason,
 *
 * You can set these values to whatever you'd like with this native, but keep in mind that the transitional spin is only clockwise for some reason.
 *
 * I'd personally recommend something like -135/135
 *
 * Hash: 0xB300F03 | Since: unknown | API-Set: client
 */
export declare function setTurningThresholds(min: number, max: number): void;
/**
 * Returns the bone matrix of the specified bone id. usefull for entity attachment
 *
 * Hash: 0x9C5E7C9C | Since: unknown | API-Set: client
 */
export declare function getBoneMatrix(ped: number | IPed, boneId: number): [Vector3, Vector3, Vector3, Vector3];
/**
 * Same as SET_PED_ARMOUR, but ADDS 'amount' to the armor the Ped already has.
 *
 * Hash: 0x5BA652A0CD14DF2F | Since: 1207 | API-Set: unknown
 */
export declare function addArmourTo(ped: number | IPed, amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4E23CD07BD161E06 | Since: 1207 | API-Set: unknown
 */
export declare function addCustomFormationLocation(groupId: number, pos: Vector3, position: number): void;
/**
 * No comment provided
 *
 * Hash: 0xB05945C1E9E60D91 | Since: 1207 | API-Set: unknown
 */
export declare function addFormationLocation(groupId: number): boolean;
/**
 * The hash of the created relationship group is output in the second parameter.
 *
 * Hash: 0xF372BC22FCB88606 | Since: 1207 | API-Set: unknown
 */
export declare function addRelationshipGroup(groupHash: number | string): [boolean, string];
/**
 * blockingFlags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eScenarioBlockingFlags
 *
 * Hash: 0x1B5C85C612E5256E | Since: 1207 | API-Set: unknown
 */
export declare function addScenarioBlockingArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, blockingFlags: number): number;
/**
 * damages a ped with the given amount
 *
 * Hash: 0x697157CED63F18D4 | Since: 1207 | API-Set: unknown
 */
export declare function applyDamageTo(ped: number | IPed, damageAmount: number, damageArmour: boolean, boneId: number, pedKiller: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xEF0D582CBF2D9B0F | Since: 1207 | API-Set: unknown
 */
export declare function applyBloodSpecific(ped: number | IPed): any;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/peds_customization/ped_decals.lua
 *
 * Hash: 0x46DF918788CB093F | Since: 1207 | API-Set: unknown
 */
export declare function applyDamagePack(ped: number | IPed, damage: number, mult: number): string;
/**
 * No comment provided
 *
 * Hash: 0x51AC07A44D4F5B8A | Since: 1207 | API-Set: unknown
 */
export declare function canKnockOffVehicle(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2D64376CF437363E | Since: 1207 | API-Set: unknown
 */
export declare function canBeMounted(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEAD42DE3610D0721 | Since: 1207 | API-Set: unknown
 */
export declare function canInCombatSeeTarget(ped: number | IPed, target: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x128F79EDCECE4FD5 | Since: 1207 | API-Set: unknown
 */
export declare function canRagdoll(ped: number | IPed): boolean;
/**
 * Returns:
 * 0 - CTR_CANNOT_TARGET
 * 1 - CTR_CAN_TARGET
 * 2 - CTR_NOT_SURE_YET
 *
 * Hash: 0x7F9B9791D4CB71F6 | Since: 1207 | API-Set: unknown
 */
export declare function canSeeEntity(ped: number | IPed, targetEntity: number | IEntity, doFoliageCheck: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0x9D9473CB82D83A30 | Since: 1207 | API-Set: unknown
 */
export declare function canSeePedCached(ped: number | IPed, targetPed: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x726256CC1EEB182F | Since: 1207 | API-Set: unknown
 */
export declare function clearFacialIdleAnimOverride(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x8FE22675A5A45817 | Since: 1207 | API-Set: unknown
 */
export declare function clearBloodDamage(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x56E3B78C5408D9F4 | Since: 1207 | API-Set: unknown
 */
export declare function clearBloodDamageByZone(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x523C79AEEFCC4A2A | Since: 1207 | API-Set: unknown
 */
export declare function clearDamageDecalByZone(ped: number | IPed): string;
/**
 * No comment provided
 *
 * Hash: 0x0E5173C163976E38 | Since: 1207 | API-Set: unknown
 */
export declare function clearDecorations(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x6585D955A68452A5 | Since: 1207 | API-Set: unknown
 */
export declare function clearEnvDirt(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x8EF6B7AC68E2F01B | Since: 1207 | API-Set: unknown
 */
export declare function clearLastDamageBone(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x2E05208086BA0651 | Since: 1207 | API-Set: unknown
 */
export declare function clearNonCreationArea(): void;
/**
 * It clears the wetness of the selected Ped/Player. Clothes have to be wet to notice the difference.
 *
 * Hash: 0x9C720776DAA43E7E | Since: 1207 | API-Set: unknown
 */
export declare function clearWetness(ped: number | IPed): void;
/**
 * flags: see SET_RAGDOLL_BLOCKING_FLAGS
 *
 * Hash: 0xD86D101FCFD00A4B | Since: 1207 | API-Set: unknown
 */
export declare function clearRagdollBlockingFlags(ped: number | IPed, flags: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5E29243FB56FC6D4 | Since: 1207 | API-Set: unknown
 */
export declare function clearRelationshipBetweenGroups(relationship: number, group1: number | string, group2: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xEF29A16337FACADB | Since: 1207 | API-Set: unknown
 */
export declare function clone(ped: number | IPed, isNetwork: boolean, bScriptHostPed: boolean, copyHeadBlendFlag: boolean): number;
/**
 * Copies ped's components and props to targetPed.
 * Can be used to clear anything from a ped by cloning it, including bullet holes.
 *
 * Hash: 0xE952D6431689AD9A | Since: 1207 | API-Set: unknown
 */
export declare function cloneToTarget(ped: number | IPed, targetPed: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x9E7738B291706746 | Since: 1207 | API-Set: unknown
 */
export declare function computeSatchelItemForDamage(pedAttached: number | IPed, damageCleanliness: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5407B7288D0478B7 | Since: 1207 | API-Set: unknown
 */
export declare function countsInCombatWithTarget(ped: number | IPed, flag: number): number;
/**
 * No comment provided
 *
 * Hash: 0x336B3D200AB007CB | Since: 1207 | API-Set: unknown
 */
export declare function countsInCombatWithTargetWithinRadius(ped: number | IPed, pos: Vector3, radius: number, flag: number): number;
/**
 * Creates a new ped group.
 * Groups can contain up to 8 peds.
 *
 * The parameter is unused.
 *
 * Returns a handle to the created group, or 0 if a group couldn't be created.
 *
 * Hash: 0x90370EBE0FEE1A3D | Since: 1207 | API-Set: unknown
 */
export declare function createGroup(taskAllocator: number): number;
/**
 * No comment provided
 *
 * Hash: 0xD49F9B0955C367DE | Since: 1207 | API-Set: unknown
 */
export declare function create(modelHash: number | string, pos: Vector3, heading: number, isNetwork: boolean, bScriptHostPed: boolean): number;
/**
 * seatIndex:
 * enum eVehicleSeat
 * {
 * VS_ANY_PASSENGER = -2,
 * VS_DRIVER,
 * VS_FRONT_RIGHT,
 * VS_BACK_LEFT,
 * VS_BACK_RIGHT,
 * VS_EXTRA_LEFT_1,
 * VS_EXTRA_RIGHT_1,
 * VS_EXTRA_LEFT_2,
 * VS_EXTRA_RIGHT_2,
 * VS_EXTRA_LEFT_3,
 * VS_EXTRA_RIGHT_3,
 * VS_NUM_SEATS
 * };
 *
 * Hash: 0x7DD959874C1FD534 | Since: 1207 | API-Set: unknown
 */
export declare function createInsideVehicle(vehicle: number | IVehicle, modelHash: number | string, seatIndex: number): number;
/**
 * No comment provided
 *
 * Hash: 0xF89AA2BD01FC06B7 | Since: 1207 | API-Set: unknown
 */
export declare function createOnMount(mount: number | IPed, modelHash: number | string, index: number): number;
/**
 * Deletes the specified ped, then sets the handle pointed to by the pointer to NULL.
 *
 * Hash: 0xCC0EF140F99365C5 | Since: 1207 | API-Set: unknown
 */
export declare function deletePed(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xED00D72F81CF7278 | Since: 1207 | API-Set: unknown
 */
export declare function detachCarriableEntity(entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x733C87D4CE22BEA2 | Since: 1207 | API-Set: unknown
 */
export declare function disableInjuredOnGroundBehaviour(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x7C6B0C22F9F40BBE | Since: 1207 | API-Set: unknown
 */
export declare function doesGroupExist(groupId: number): boolean;
/**
 * Forces the ped to fall back and kills it.
 *
 * It doesn't really explode the ped's head but it kills the ped
 *
 * Hash: 0x2D05CED3A38D0F3A | Since: 1207 | API-Set: unknown
 */
export declare function explodeHead(ped: number | IPed, weaponHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x7043D0681285BA2D | Since: 1207 | API-Set: unknown
 */
export declare function fadeAndDestroy(): number;
/**
 * No comment provided
 *
 * Hash: 0xB5ACE8B23A438EC0 | Since: 1207 | API-Set: unknown
 */
export declare function findAllAttachedCarriableEntities(ped: number | IPed, itemset: any): void;
/**
 * Old name: _FREEZE_PED_CAMERA_ROTATION
 *
 * Hash: 0xFF287323B0E2C69A | Since: 1207 | API-Set: unknown
 */
export declare function forceAllHeadingValuesToAlign(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x2208438012482A1A | Since: 1207 | API-Set: unknown
 */
export declare function forceAiAndAnimationUpdate(ped: number | IPed): void;
/**
 * motionStateHash: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CPedMotionStates__eMotionState
 *
 * Hash: 0xF28965D04F570DCA | Since: 1207 | API-Set: unknown
 */
export declare function forceMotionState(ped: number | IPed, motionStateHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBE22B26DD764C040 | Since: 1207 | API-Set: unknown
 */
export declare function getAnimInitialOffsetPosition(pos: Vector3, rot: Vector3): [Vector3, string, string];
/**
 * No comment provided
 *
 * Hash: 0x4B805E6046EE9E47 | Since: 1207 | API-Set: unknown
 */
export declare function getAnimInitialOffsetRotation(pos: Vector3, rot: Vector3): [Vector3, string, string];
/**
 * Outputs carriable infos for selected ped carriable slot.
 *
 * Parameters:
 * - outData: Any* — A structure of 4 explained below
 * - ped: Ped to check
 * - carriableSlot: int See TASK_CARRIABLE for available slots
 * - p3: int always 0 in R* scripts
 *
 * Hash: 0x608BC6A6AACD5036 | Since: 1207 | API-Set: unknown
 */
export declare function getCarriedAttachedInfoForSlot(ped: number | IPed, carriableSlot: number): [boolean, any];
/**
 * Gets the closest ped in a radius.
 *
 * Hash: 0xC33AB876A77F8164 | Since: 1207 | API-Set: unknown
 */
export declare function getClosest(pos: Vector3, radius: number, pedType: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0x52DFF8A10508090A | Since: 1207 | API-Set: unknown
 */
export declare function getCombatFloat(ped: number | IPed, combatType: number): number;
/**
 * No comment provided
 *
 * Hash: 0xCD66FEA29400A0B5 | Since: 1207 | API-Set: unknown
 */
export declare function getCurrentTargetFor(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xCD5003B097200F36 | Since: 1207 | API-Set: unknown
 */
export declare function getDeadPickupCoords(ped: number | IPed): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x8DE69FE35CA09A45 | Since: 1207 | API-Set: unknown
 */
export declare function getGroupSize(groupId: number): [boolean, number];
/**
 * No comment provided
 *
 * Hash: 0xA454D234E45BB6E5 | Since: 1207 | API-Set: unknown
 */
export declare function getIsRespondingToNegativeInteraction(ped: number | IPed, player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9337183FDA2E9035 | Since: 1207 | API-Set: unknown
 */
export declare function getIsRespondingToPositiveInteraction(ped: number | IPed, player: number | string | IPlayer): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5486A79D9FBD342D | Since: 1207 | API-Set: unknown
 */
export declare function getJackTarget(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x14169FA823679E41 | Since: 1207 | API-Set: unknown
 */
export declare function getLootingPickupTargetEntity(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x18A3E9EE1297FD39 | Since: 1207 | API-Set: unknown
 */
export declare function getMeleeTargetFor(ped: number | IPed): number;
/**
 * This is a way to get what drawables a ped has equipped
 * Example: you are able to tell if the ped has the drawable PLAYER_ZERO_HAT_017 attached
 * Note: this works with non shop components, direct .ydd files.
 *
 * Hash: 0xA9C28516A6DC9D56 | Since: 1207 | API-Set: unknown
 */
export declare function getMetaAssetGuids(ped: number | IPed, index: number): [boolean, number, number, number, number];
/**
 * No comment provided
 *
 * Hash: 0xE7998FEC53A33BBE | Since: 1207 | API-Set: unknown
 */
export declare function getMetaAssetTint(ped: number | IPed, index: number): [boolean, number, number, number, number];
/**
 * No comment provided
 *
 * Hash: 0xE7E11B8DCBED1058 | Since: 1207 | API-Set: unknown
 */
export declare function getMount(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x10C70A515BC03707 | Since: 1207 | API-Set: unknown
 */
export declare function getNumMetaOutfits(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x9B128DC36C1E04CF | Since: 1207 | API-Set: unknown
 */
export declare function getsJacker(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x37F4AD56ECBC0CD6 | Since: 1207 | API-Set: unknown
 */
export declare function getAccuracy(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x5CCE68DBD5FE93EC | Since: 1207 | API-Set: unknown
 */
export declare function getAsGroupLeader(groupID: number): number;
/**
 * No comment provided
 *
 * Hash: 0x51455483CF23ED97 | Since: 1207 | API-Set: unknown
 */
export declare function getAsGroupMember(groupID: number, memberNumber: number): number;
/**
 * No comment provided
 *
 * Hash: 0x4912DFE492DB98CD | Since: 1207 | API-Set: unknown
 */
export declare function getBlackboardScriptBool(ped: number | IPed): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xA29FD00D45311EB7 | Since: 1207 | API-Set: unknown
 */
export declare function getBlackboardScriptFloat(ped: number | IPed): [number, string];
/**
 * No comment provided
 *
 * Hash: 0xB71B91B398F8F067 | Since: 1207 | API-Set: unknown
 */
export declare function getBlackboardScriptInt(ped: number | IPed): [number, string];
/**
 * Gets the position of the specified bone of the specified ped.
 *
 * ped: The ped to get the position of a bone from.
 * boneId: The ID of the bone to get the position from. This is NOT the index.
 * offsetX: The X-component of the offset to add to the position relative to the bone's rotation.
 * offsetY: The Y-component of the offset to add to the position relative to the bone's rotation.
 * offsetZ: The Z-component of the offset to add to the position relative to the bone's rotation.
 *
 * Hash: 0x17C07FC640E86B4E | Since: 1207 | API-Set: unknown
 */
export declare function getBoneCoords(ped: number | IPed, boneId: number, offsetX: number, offsetY: number, offsetZ: number): Vector3;
/**
 * no bone = -1
 *
 * Hash: 0x3F428D08BE5AAE31 | Since: 1207 | API-Set: unknown
 */
export declare function getBoneIndex(ped: number | IPed, boneId: number): number;
/**
 * Returns the hash of the weapon/model/object that killed the ped.
 *
 * Hash: 0x16FFE42AB2D2DC59 | Since: 1207 | API-Set: unknown
 */
export declare function getCauseOfDeath(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xDEA92412FCAEB3F5 | Since: 1207 | API-Set: unknown
 */
export declare function getCombatMovement(ped: number | IPed): number;
/**
 * flagId: see SET_PED_CONFIG_FLAG
 *
 * Hash: 0x7EE53118C892B513 | Since: 1207 | API-Set: unknown
 */
export declare function getConfigFlag(ped: number | IPed, flagId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD5FE956C70FF370B | Since: 1207 | API-Set: unknown
 */
export declare function getCrouchMovement(ped: number | IPed): boolean;
/**
 * Old name: _GET_PED_CURRENT_MOVEMENT_SPEED
 *
 * Hash: 0xF60165E1D2C5370B | Since: 1207 | API-Set: unknown
 */
export declare function getCurrentMoveBlendRatio(ped: number | IPed): [boolean, number, number];
/**
 * No comment provided
 *
 * Hash: 0x3C06B8786DD94CD1 | Since: 1207 | API-Set: unknown
 */
export declare function getDefensiveAreaPosition(ped: number | IPed): Vector3;
/**
 * No comment provided
 *
 * Hash: 0x2311F15D971AA680 | Since: 1207 | API-Set: unknown
 */
export declare function getGrappleState(ped: number | IPed): number;
/**
 * Returns the groupId of which the specified ped is a member of.
 *
 * Hash: 0xF162E133B4E7A675 | Since: 1207 | API-Set: unknown
 */
export declare function getGroupIndex(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x3BDFCF25B58B0415 | Since: 1207 | API-Set: unknown
 */
export declare function getIsBeingGrappled(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC48A9EB0D499B3E5 | Since: 1207 | API-Set: unknown
 */
export declare function getIsDoingCombatRoll(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0E99E3BF11BB6367 | Since: 1207 | API-Set: unknown
 */
export declare function getIsGrappling(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD75960F6BD9EA49C | Since: 1207 | API-Set: unknown
 */
export declare function getLastDamageBone(ped: number | IPed): [boolean, number];
/**
 * enum ePedLootStatus
 * {
 * PLS_NONE,
 * PLS_PRE_LOOT,
 * PLS_SAMPLING,
 * PLS_SKINNING
 * };
 *
 * Hash: 0xC737697C41628340 | Since: 1311 | API-Set: unknown
 */
export declare function getLootStatusMp(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x4700A416E8324EF3 | Since: 1207 | API-Set: unknown
 */
export declare function getMaxHealth(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x3F69145BBA87BAE7 | Since: 1207 | API-Set: unknown
 */
export declare function getMoney(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x243E1B4607040057 | Since: 1207 | API-Set: unknown
 */
export declare function getMotionFocusEntity(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x23F8F5FC7E8C4A6B | Since: 1207 | API-Set: unknown
 */
export declare function getNearbyPeds(ped: number | IPed, ignoredPedType: number): [number, any];
/**
 * No comment provided
 *
 * Hash: 0xCFF869CBFA210D82 | Since: 1207 | API-Set: unknown
 */
export declare function getNearbyVehicles(ped: number | IPed): [number, any];
/**
 * No comment provided
 *
 * Hash: 0x42FDD0F017B1E38E | Since: 1207 | API-Set: unknown
 */
export declare function getRelationshipGroupDefaultHash(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x7DBDD04862D95F04 | Since: 1207 | API-Set: unknown
 */
export declare function getRelationshipGroupHash(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xAF9E59B1B1FBF2A0 | Since: 1207 | API-Set: unknown
 */
export declare function getResetFlag(ped: number | IPed, flagId: number): boolean;
/**
 * Returns the entity that killed the ped
 *
 * It is best to check if the Ped is dead before asking for its killer.
 *
 * Hash: 0x93C8B64DEB84728C | Since: 1207 | API-Set: unknown
 */
export declare function getSourceOfDeath(ped: number | IPed): number;
/**
 * Returns whether the entity is in stealth mode
 *
 * Hash: 0x7C2AC9CA66575FBF | Since: 1207 | API-Set: unknown
 */
export declare function getStealthMovement(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1E98817B311AE98A | Since: 1207 | API-Set: unknown
 */
export declare function getTimeOfDeath(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x936E7CAD0AE2EE14 | Since: 1207 | API-Set: unknown
 */
export declare function getToPlayerWeaponDamageModifier(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xFF059E1E4C01E63C | Since: 1207 | API-Set: unknown
 */
export declare function getType(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x6A3975DEA89F9A17 | Since: 1207 | API-Set: unknown
 */
export declare function getPlayerIsFollowing(ped: number | IPed): number | string;
/**
 * No comment provided
 *
 * Hash: 0x9E6B70061662AE5C | Since: 1207 | API-Set: unknown
 */
export declare function getRelationshipBetweenGroups(group1: number | string, group2: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xEBA5AD3A0EAF7121 | Since: 1207 | API-Set: unknown
 */
export declare function getRelationshipBetweens(ped1: number | IPed, ped2: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x6F4C85ACD641BCD2 | Since: 1207 | API-Set: unknown
 */
export declare function getSeatIsTryingToEnter(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x4E76CB57222A00E5 | Since: 1207 | API-Set: unknown
 */
export declare function getSeatIsUsing(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x511F1A683387C7E2 | Since: 1207 | API-Set: unknown
 */
export declare function getTrackedPixelcount(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xF92691AED837A5FC | Since: 1207 | API-Set: unknown
 */
export declare function getVehicleIsEntering(ped: number | IPed): number;
/**
 * Gets the vehicle the specified Ped is in.
 *
 * If the Ped is not in a vehicle and includeLastVehicle is true, the vehicle they were last in is returned.
 *
 * Hash: 0x9A9112A0FE9A4713 | Since: 1207 | API-Set: unknown
 */
export declare function getVehicleIsIn(ped: number | IPed, lastVehicle: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0x6094AD011A2EA87D | Since: 1207 | API-Set: unknown
 */
export declare function getVehicleIsUsing(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x2B02DB082258625F | Since: 1207 | API-Set: unknown
 */
export declare function giveHashScenarioProp(ped: number | IPed, _object: number | IObject, scenarioType: number | string, p4: number | string): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0x854BC9B1A1CCD034 | Since: 1207 | API-Set: unknown
 */
export declare function hasMotionTypeAssetLoaded(nameHash: number | string, ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7DD7FB3480D8083E | Since: 1207 | API-Set: unknown
 */
export declare function initDefaultHealth(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x4759CC730F947C81 | Since: 1207 | API-Set: unknown
 */
export declare function instantlyFillPopulation(): void;
/**
 * No comment provided
 *
 * Hash: 0xD543D3A8FDE4F185 | Since: 1207 | API-Set: unknown
 */
export declare function isAnimalInteractionPossible(ped: number | IPed, animal: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x68772DB2B2526F9F | Since: 1311 | API-Set: unknown
 */
export declare function isAnyHostileNearPoint(ped: number | IPed, pos: Vector3, radius: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x083961498679DC9F | Since: 1207 | API-Set: unknown
 */
export declare function isAnyNearPoint(pos: Vector3, radius: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA0D3D71EA1086C55 | Since: 1207 | API-Set: unknown
 */
export declare function isAnyShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC8D523BF5BBD3808 | Since: 1207 | API-Set: unknown
 */
export declare function isEventInQueue(ped: number | IPed, eventType: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x909AD9E9A92A10DF | Since: 1207 | API-Set: unknown
 */
export declare function isGroupLocallyControlled(groupId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0EE3F0D7FECCC54F | Since: 1207 | API-Set: unknown
 */
export declare function isInstantlyFillPopulationFinished(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFB1E7998B8595825 | Since: 1207 | API-Set: unknown
 */
export declare function isLocationSpawnSafe(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3998B1276A3300E5 | Since: 1207 | API-Set: unknown
 */
export declare function isAimingFromCover(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x12534C348C6CB68B | Since: 1207 | API-Set: unknown
 */
export declare function isAPlayer(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEF3A8772F085B4AA | Since: 1207 | API-Set: unknown
 */
export declare function isBeingDragged(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD453BB601D4A606E | Since: 1207 | API-Set: unknown
 */
export declare function isBeingHogtied(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9A497FE2DF198913 | Since: 1207 | API-Set: unknown
 */
export declare function isBeingJacked(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x863B23EFDE9C5DF2 | Since: 1207 | API-Set: unknown
 */
export declare function isBeingStealthKilled(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4FBACCE3B4138EE8 | Since: 1207 | API-Set: unknown
 */
export declare function isBeingStunned(ped: number | IPed, weaponType: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA911EE21EDF69DAF | Since: 1207 | API-Set: unknown
 */
export declare function isCarryingSomething(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x53E8CB4F48BFE623 | Since: 1207 | API-Set: unknown
 */
export declare function isClimbing(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3317DEDB88C95038 | Since: 1207 | API-Set: unknown
 */
export declare function isDeadOrDying(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBA63D9FE45412247 | Since: 1207 | API-Set: unknown
 */
export declare function isDefensiveAreaActive(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5527B8246FEF9B11 | Since: 1207 | API-Set: unknown
 */
export declare function isDiving(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1D46B417F926D34D | Since: 1207 | API-Set: unknown
 */
export declare function isEnteringAnyTransport(ped: number | IPed): boolean;
/**
 * Presumably returns the Entity that the Ped is currently diving out of the way of.
 *
 * Hash: 0x414641C26E105898 | Since: 1207 | API-Set: unknown
 */
export declare function isEvasiveDiving(ped: number | IPed): [boolean, number];
/**
 * angle is ped's view cone
 *
 * Hash: 0xD71649DB0A545AA3 | Since: 1207 | API-Set: unknown
 */
export declare function isFacingPed(ped: number | IPed, otherPed: number | IPed, angle: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFB92A102F1C4DFA3 | Since: 1207 | API-Set: unknown
 */
export declare function isFalling(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3E592D0486DEC0F6 | Since: 1207 | API-Set: unknown
 */
export declare function isFallingOver(ped: number | IPed): boolean;
/**
 * Gets a value indicating whether this ped's health is below its fatally injured threshold. The default threshold is 100.
 * If the handle is invalid, the function returns true.
 *
 * Hash: 0xD839450756ED5A80 | Since: 1207 | API-Set: unknown
 */
export declare function isFatallyInjured(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBBCCE00B381F8482 | Since: 1207 | API-Set: unknown
 */
export declare function isFleeing(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x95CBC65780DE7EB1 | Since: 1207 | API-Set: unknown
 */
export declare function isFullyOnMount(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBB062B2B5722478E | Since: 1207 | API-Set: unknown
 */
export declare function isGettingIntoAVehicle(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9F65DBC537E59AD5 | Since: 1207 | API-Set: unknown
 */
export declare function isGoingIntoCover(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x878B68960C1C2A35 | Since: 1207 | API-Set: unknown
 */
export declare function isGroupLeader(ped: number | IPed, groupId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9BB01E3834671191 | Since: 1207 | API-Set: unknown
 */
export declare function isGroupMember(ped: number | IPed, groupId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1C86D8AEF8254B78 | Since: 1207 | API-Set: unknown
 */
export declare function isHangingOnToVehicle(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFCF37A457CB96DC0 | Since: 1207 | API-Set: unknown
 */
export declare function isHeadingTowardsPosition(ped: number | IPed, pos: Vector3): boolean;
/**
 * No comment provided
 *
 * Hash: 0x813A0A7C9D2E831F | Since: 1207 | API-Set: unknown
 */
export declare function isHeadtrackingEntity(ped: number | IPed, entity: number | IEntity): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5CD3CB88A7F8850D | Since: 1207 | API-Set: unknown
 */
export declare function isHeadtrackingPed(ped1: number | IPed, ped2: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x3AA24CCC0D451379 | Since: 1207 | API-Set: unknown
 */
export declare function isHogtied(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x42429C674B61238B | Since: 1207 | API-Set: unknown
 */
export declare function isHogtying(ped: number | IPed): boolean;
/**
 * Returns true/false if the ped is/isn't humanoid.
 *
 * Hash: 0xB980061DA992779D | Since: 1207 | API-Set: unknown
 */
export declare function isHuman(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB655DB7582AEC805 | Since: 1207 | API-Set: unknown
 */
export declare function isIncapacitated(ped: number | IPed): boolean;
/**
 * Gets a value indicating whether this ped's health is below its injured threshold.
 *
 * The default threshold is 100.
 *
 * Hash: 0x84A2DD9AC37C35C1 | Since: 1207 | API-Set: unknown
 */
export declare function isInjured(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2E0E1C2B4F6CB339 | Since: 1207 | API-Set: unknown
 */
export declare function isInAnyBoat(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x298B91AE825E5705 | Since: 1207 | API-Set: unknown
 */
export declare function isInAnyHeli(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5FFF4CFC74D8FB80 | Since: 1207 | API-Set: unknown
 */
export declare function isInAnyPlane(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6E575D6A898AB852 | Since: 1207 | API-Set: unknown
 */
export declare function isInAnyTaxi(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6F972C1AB75A1ED0 | Since: 1207 | API-Set: unknown
 */
export declare function isInAnyTrain(ped: number | IPed): boolean;
/**
 * Gets a value indicating whether the specified ped is in any vehicle.
 *
 * Hash: 0x997ABD671D25CA0B | Since: 1207 | API-Set: unknown
 */
export declare function isInAnyVehicle(ped: number | IPed, atGetIn: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4859F1FC66A6278E | Since: 1207 | API-Set: unknown
 */
export declare function isInCombat(ped: number | IPed, target: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x60DFD0691A170B88 | Since: 1207 | API-Set: unknown
 */
export declare function isInCover(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x845333B3150583AB | Since: 1207 | API-Set: unknown
 */
export declare function isInCoverFacingLeft(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9134873537FA419C | Since: 1207 | API-Set: unknown
 */
export declare function isInFlyingVehicle(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5891CAC5D4ACFF74 | Since: 1207 | API-Set: unknown
 */
export declare function isInGroup(ped: number | IPed): boolean;
/**
 * Notes: The function only returns true while the ped is:
 * A.) Swinging a random melee attack (including pistol-whipping)
 *
 * B.) Reacting to being hit by a melee attack (including pistol-whipping)
 *
 * C.) Is locked-on to an enemy (arms up, strafing/skipping in the default fighting-stance, ready to dodge+counter).
 *
 * You don't have to be holding the melee-targeting button to be in this stance; you stay in it by default for a few seconds after swinging at someone. If you do a sprinting punch, it returns true for the duration of the punch animation and then returns false again, even if you've punched and made-angry many peds
 *
 * Hash: 0x4E209B2C1EAD5159 | Since: 1207 | API-Set: unknown
 */
export declare function isInMeleeCombat(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x796D90EFB19AA332 | Since: 1207 | API-Set: unknown
 */
export declare function isInModel(ped: number | IPed, modelHash: number | string): boolean;
/**
 * Gets a value indicating whether the specified ped is in the specified vehicle.
 *
 * Hash: 0xA3EE4A07279BB9DB | Since: 1207 | API-Set: unknown
 */
export declare function isInVehicle(ped: number | IPed, vehicle: number | IVehicle, atGetIn: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4AE4FF911DFB61DA | Since: 1207 | API-Set: unknown
 */
export declare function isJacking(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCEDABC5900A0BF97 | Since: 1207 | API-Set: unknown
 */
export declare function isJumping(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9682F850056C9ADE | Since: 1207 | API-Set: unknown
 */
export declare function isLassoed(ped: number | IPed): boolean;
/**
 * Returns true/false if the ped is/isn't male.
 *
 * Hash: 0x6D9F5FAA7488BA46 | Since: 1207 | API-Set: unknown
 */
export declare function isMale(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC9D55B1A358A5BF7 | Since: 1207 | API-Set: unknown
 */
export declare function isModel(ped: number | IPed, modelHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x01FEE67DB37F59B2 | Since: 1207 | API-Set: unknown
 */
export declare function isOnFoot(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x460BC76A0E10655E | Since: 1207 | API-Set: unknown
 */
export declare function isOnMount(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEC5F66E459AF3BB2 | Since: 1207 | API-Set: unknown
 */
export declare function isOnSpecificVehicle(ped: number | IPed, vehicle: number | IVehicle): boolean;
/**
 * Gets a value indicating whether the specified ped is on top of any vehicle.
 *
 * Return 1 when ped is on vehicle.
 * Return 0 when ped is not on a vehicle.
 *
 * Hash: 0x67722AEB798E5FAB | Since: 1207 | API-Set: unknown
 */
export declare function isOnVehicle(ped: number | IPed): boolean;
/**
 * Returns true if the ped is currently opening a door (CTaskOpenDoor).
 *
 * Old name: _IS_PED_OPENING_A_DOOR
 *
 * Hash: 0x26AF0E8E30BD2A2C | Since: 1207 | API-Set: unknown
 */
export declare function isOpeningDoor(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xDCCA191DF9980FD7 | Since: 1207 | API-Set: unknown
 */
export declare function isPerformingMeleeAction(ped: number | IPed, p2: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC70B5FAE151982D8 | Since: 1207 | API-Set: unknown
 */
export declare function isPlantingBomb(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD6A86331A537A7B9 | Since: 1207 | API-Set: unknown
 */
export declare function isProne(ped: number | IPed): boolean;
/**
 * If the ped handle passed through the parenthesis is in a ragdoll state this will return true.
 *
 * Hash: 0x47E4E977581C5B55 | Since: 1207 | API-Set: unknown
 */
export declare function isRagdoll(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA0BC8FAED8CFEB3C | Since: 1207 | API-Set: unknown
 */
export declare function isReadyToRender(ped: number | IPed): boolean;
/**
 * Returns whether the specified ped is reloading.
 *
 * Hash: 0x24B100C68C645951 | Since: 1207 | API-Set: unknown
 */
export declare function isReloading(ped: number | IPed): boolean;
/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 *
 * Hash: 0x625B774D75C87068 | Since: 1207 | API-Set: unknown
 */
export declare function isRespondingToEvent(ped: number | IPed, eventType: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x77525BBF433F2CD6 | Since: 1207 | API-Set: unknown
 */
export declare function isRespondingToThreat(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2AFE52F782F25775 | Since: 1207 | API-Set: unknown
 */
export declare function isRunningMobilePhoneTask(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE3B6097CC25AA69E | Since: 1207 | API-Set: unknown
 */
export declare function isRunningRagdollTask(ped: number | IPed): boolean;
/**
 * Returns whether the specified ped is shooting.
 *
 * Hash: 0x34616828CD07F1A1 | Since: 1207 | API-Set: unknown
 */
export declare function isShooting(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x84D0BF2B21862059 | Since: 1207 | API-Set: unknown
 */
export declare function isSitting(ped: number | IPed): boolean;
/**
 * Detect if ped is in any vehicle
 * [True/False]
 *
 * Hash: 0x826AA586EDB9FEF8 | Since: 1207 | API-Set: unknown
 */
export declare function isSittingInAnyVehicle(ped: number | IPed): boolean;
/**
 * Detect if ped is sitting in the specified vehicle
 * [True/False]
 *
 * Hash: 0xA808AA1D79230FC2 | Since: 1207 | API-Set: unknown
 */
export declare function isSittingInVehicle(ped: number | IPed, vehicle: number | IVehicle): boolean;
/**
 * No comment provided
 *
 * Hash: 0x530944F6F4B8A214 | Since: 1207 | API-Set: unknown
 */
export declare function isStopped(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9DE327631295B4C2 | Since: 1207 | API-Set: unknown
 */
export declare function isSwimming(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC024869A53992F34 | Since: 1207 | API-Set: unknown
 */
export declare function isSwimmingUnderWater(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x00E73468D085F745 | Since: 1207 | API-Set: unknown
 */
export declare function isUsingActionMode(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x57AB4A3080F85143 | Since: 1207 | API-Set: unknown
 */
export declare function isUsingAnyScenario(ped: number | IPed): boolean;
/**
 * Equivalent to IS_PED_USING_SCENARIO from V but takes a hash instead of a string.
 *
 * Hash: 0x34D6AC1157C8226C | Since: 1207 | API-Set: unknown
 */
export declare function isUsingScenarioHash(ped: number | IPed, scenarioHash: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9C54041BB66BCF9E | Since: 1207 | API-Set: unknown
 */
export declare function isUsingThisScenario(ped: number | IPed, scenario: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x117C70D1F5730B5E | Since: 1207 | API-Set: unknown
 */
export declare function isVaulting(ped: number | IPed): boolean;
/**
 * Returns true if ped is in perception (focused and looking at target ped)
 * Most float params are -1.f in R* Scripts
 *
 * Hash: 0x06087579E7AA85A9 | Since: 1207 | API-Set: unknown
 */
export declare function isTargetInPerceptionArea(ped: number | IPed, targetPed: number | IPed, customDistance: number): boolean;
/**
 * Returns whether or not a ped is visible within your FOV, not this check auto's to false after a certain distance.
 * Target needs to be tracked first, won't work otherwise.
 *
 * Hash: 0x91C8E617F64188AC | Since: 1207 | API-Set: unknown
 */
export declare function isTrackedVisible(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6FD7816A36615F48 | Since: 1207 | API-Set: unknown
 */
export declare function knockOffProp(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x45BBCBA77C29A841 | Since: 1207 | API-Set: unknown
 */
export declare function knockOffVehicle(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xF6E1E9F47A7686F8 | Since: 1207 | API-Set: unknown
 */
export declare function cowerInPlace(ped: number | IPed, ped2: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x1E4C940233FC0C6F | Since: 1207 | API-Set: unknown
 */
export declare function cowerMoveToPoint(ped: number | IPed, ped2: number | IPed): void;
/**
 * Based on TASK_COMBAT_HATED_TARGETS_AROUND_PED, the parameters are likely similar (PedHandle, and area to attack in).
 *
 * Hash: 0x9222F300BF8354FE | Since: 1207 | API-Set: unknown
 */
export declare function registerHatedTargetsAround(ped: number | IPed, radius: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2F25D9AEFA34FBA2 | Since: 1207 | API-Set: unknown
 */
export declare function registerTarget(ped: number | IPed, targetPed: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x3088634CF8C819CF | Since: 1207 | API-Set: unknown
 */
export declare function releaseVisibilityTracking(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x8EB2F69076AF7053 | Since: 1207 | API-Set: unknown
 */
export declare function removeGroup(groupId: number): void;
/**
 * Ped will no longer get angry when you stay near him.
 *
 * Hash: 0x74D4E028107450A9 | Since: 1207 | API-Set: unknown
 */
export declare function removeDefensiveArea(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xED74007FFB146BC2 | Since: 1207 | API-Set: unknown
 */
export declare function removeFromGroup(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xB6BA2444AB393DA2 | Since: 1207 | API-Set: unknown
 */
export declare function removeRelationshipGroup(groupHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x31D16B74C6E29D66 | Since: 1207 | API-Set: unknown
 */
export declare function removeScenarioBlockingArea(): void;
/**
 * No comment provided
 *
 * Hash: 0xD37401D78A929A49 | Since: 1207 | API-Set: unknown
 */
export declare function removeScenarioBlockingAreas(): void;
/**
 * Params: p2, p3 usually 0 in R* Scripts
 *
 * Hash: 0xDF631E4BCE1B1FC4 | Since: 1207 | API-Set: unknown
 */
export declare function removeShopItemFromByCategory(ped: number | IPed, componentCategory: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xD710A5007C2AC539 | Since: 1207 | API-Set: unknown
 */
export declare function removeTagFromMeta(ped: number | IPed, component: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x75BA1CB3B7D40CAF | Since: 1207 | API-Set: unknown
 */
export declare function requestUseSmallBboxVisibilityTracking(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x2BC338A7B21F4608 | Since: 1207 | API-Set: unknown
 */
export declare function requestVehicleVisibilityTracking(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x7D7A2E43E74E2EB8 | Since: 1207 | API-Set: unknown
 */
export declare function requestVisibilityTracking(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xEA16670E7BA4743C | Since: 1207 | API-Set: unknown
 */
export declare function resetAiWeaponDamageModifier(): void;
/**
 * No comment provided
 *
 * Hash: 0x63DAB4CCB3273205 | Since: 1207 | API-Set: unknown
 */
export declare function resetGroupFormationDefaultSpacing(groupId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2A5AFD2B8381A6E1 | Since: 1207 | API-Set: unknown
 */
export declare function resetHorseAvoidanceLevelToDefault(horse: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x22EF8FF8778030EB | Since: 1207 | API-Set: unknown
 */
export declare function resetInVehicleContext(ped: number | IPed): void;
/**
 * Resets the value for the last vehicle driven by the Ped.
 *
 * Hash: 0xBB8DE8CF6A8DD8BB | Since: 1207 | API-Set: unknown
 */
export declare function resetLastVehicle(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x9FA4664CF62E47E8 | Since: 1207 | API-Set: unknown
 */
export declare function resetRagdollTimer(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x97B0DB5B4AA74E77 | Since: 1207 | API-Set: unknown
 */
export declare function resetWeaponMovementClipset(ped: number | IPed): void;
/**
 * This function will simply bring the dead ped back to life.
 *
 * Before calling this function, you may want to declare the position, where your Resurrected ped to be spawn at because theres a chance the ped will fall through the map
 *
 * Also, disabling any assigned task immediately helped in the number of scenarios, where If you want peds to perform certain decided tasks.
 *
 * Hash: 0x71BC8E838B9C6035 | Since: 1207 | API-Set: unknown
 */
export declare function resurrect(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x8D8ACD8388CD99CE | Since: 1207 | API-Set: unknown
 */
export declare function reviveInjured(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x66460DEDDD417254 | Since: 1207 | API-Set: unknown
 */
export declare function setAiMeleeWeaponDamageModifier(modifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1B1E2A40A65B8521 | Since: 1207 | API-Set: unknown
 */
export declare function setAiWeaponDamageModifier(value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9F8AA94D6D97DBF4 | Since: 1207 | API-Set: unknown
 */
export declare function setBlockingOfNonTemporaryEvents(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x9911F4A24485F653 | Since: 1207 | API-Set: unknown
 */
export declare function setBlockingOfNonTemporaryEventsForAmbientsThisFrame(): void;
/**
 * combatType can be between 0-14. See GET_COMBAT_FLOAT below for a list of possible parameters.
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/COMBAT_FLOATS
 * https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eCombatAttributeFloats
 *
 * Hash: 0xFF41B4B141ED981C | Since: 1207 | API-Set: unknown
 */
export declare function setCombatFloat(ped: number | IPed, combatType: number, newValue: number): void;
/**
 * No comment provided
 *
 * Hash: 0x102E68B2024D536D | Since: 1207 | API-Set: unknown
 */
export declare function setCreateRandomCops(toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC52E0F855C58FC2E | Since: 1207 | API-Set: unknown
 */
export declare function setEnableBoundAnkles(ped: number | IPed, toggle: boolean): void;
/**
 * Ped can not pull out a weapon when true
 *
 * Hash: 0xDF1AF8B5D56542FA | Since: 1207 | API-Set: unknown
 */
export declare function setEnableHandcuffs(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xFFC24B988B938B38 | Since: 1207 | API-Set: unknown
 */
export declare function setFacialIdleAnimOverride(ped: number | IPed): [string, string];
/**
 * No comment provided
 *
 * Hash: 0x7CC7D3B7AF7FB71F | Since: 1207 | API-Set: unknown
 */
export declare function setFormationPositionsTargetRadius(groupId: number, radius: number): boolean;
/**
 * eFormationType
 *
 * 0: Default
 * 1: Circle Around Leader
 * 2: Alternative Circle Around Leader
 * 3: Line, with Leader at center
 *
 * Hash: 0xCE2F5FC3AF7E8C1E | Since: 1207 | API-Set: unknown
 */
export declare function setGroupFormation(groupId: number, formationType: number): void;
/**
 * No comment provided
 *
 * Hash: 0x1D9D45004C28C916 | Since: 1207 | API-Set: unknown
 */
export declare function setGroupFormationSpacing(groupId: number): void;
/**
 * Sets the range at which members will automatically leave the group.
 *
 * Hash: 0x4102C7858CFEE4E4 | Since: 1207 | API-Set: unknown
 */
export declare function setGroupSeparationRange(groupId: number, separationRange: number): void;
/**
 * -1 - HORSE_ASSIST__NO_CHANGE
 * 0 - HORSE_ASSIST__MANUAL
 * 1 - HORSE_ASSIST__SEMIASSIST
 * 2 - HORSE_ASSIST__FULLASSIST
 *
 * Hash: 0xDDCF6FEA5D7ACC17 | Since: 1207 | API-Set: unknown
 */
export declare function setHorseAvoidanceLevel(horse: number | IPed, avoidanceLevel: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC32779C16FCEECD9 | Since: 1207 | API-Set: unknown
 */
export declare function setIkTarget(ped: number | IPed, ikIndex: number, entityLookAt: number | IEntity, boneLookAt: number, offsetX: number, offsetY: number, offsetZ: number, blendInDuration: number, blendOutDuration: number): void;
/**
 * https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CLootingFlags__Flags
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/LOOTING_FLAGS
 *
 * lootFlag:
 * enum eLootFlag
 * {
 * LOOT_FLAG_IS_CRITICAL_LOOT_TARGET = 7,
 * LOOT_FLAG_IGNORE_WATER_CHECKS = 8,
 * LOOT_FLAG_ANIMAL_FLAGGED_FOR_TAGGING = 23,
 * };
 *
 * Hash: 0x6569F31A01B4C097 | Since: 1207 | API-Set: unknown
 */
export declare function setLootingFlag(ped: number | IPed, lootFlag: number, enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x925A160133003AC6 | Since: 1207 | API-Set: unknown
 */
export declare function setPauseWritheBleedout(ped: number | IPed, toggle: boolean): void;
/**
 * accuracy = 0-100, 100 being perfectly accurate
 *
 * Hash: 0x7AEFB85C1D49DEB6 | Since: 1207 | API-Set: unknown
 */
export declare function setAccuracy(ped: number | IPed, accuracy: number): void;
/**
 * Turns the desired ped into a cop. If you use this on the player ped, you will become almost invisible to cops dispatched for you. You will also report your own crimes, get a generic cop voice, get a cop-vision-cone on the radar, and you will be unable to shoot at other cops. Toggling ped as "false" has no effect; you must change p0's ped model to disable the effect.
 * toggle = bSetRelGroup
 *
 * Hash: 0xBB03C38DD3FB7FFD | Since: 1207 | API-Set: unknown
 */
export declare function setAsCop(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x2A7819605465FBCE | Since: 1207 | API-Set: unknown
 */
export declare function setAsGroupLeader(ped: number | IPed, groupId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9F3480FE65DB31B5 | Since: 1207 | API-Set: unknown
 */
export declare function setAsGroupMember(ped: number | IPed, groupId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6C3B4D6D13B4C841 | Since: 1207 | API-Set: unknown
 */
export declare function setCanArmIk(ped: number | IPed, toggle: boolean): void;
/**
 * When set on a player ped, its just like when you die in RDO
 *
 * Hash: 0x5240864E847C691C | Since: 1207 | API-Set: unknown
 */
export declare function setCanBeIncapacitated(ped: number | IPed, toggle: boolean): void;
/**
 * state:
 * enum eKnockOffVehicle
 * {
 * KNOCKOFFVEHICLE_DEFAULT,
 * KNOCKOFFVEHICLE_NEVER,
 * KNOCKOFFVEHICLE_EASY,
 * KNOCKOFFVEHICLE_HARD
 * };
 *
 * Hash: 0x7A6535691B477C48 | Since: 1207 | API-Set: unknown
 */
export declare function setCanBeKnockedOffVehicle(ped: number | IPed, state: number): void;
/**
 * No comment provided
 *
 * Hash: 0x63F58F7C80513AAD | Since: 1207 | API-Set: unknown
 */
export declare function setCanBeTargetted(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x66B57B72E0836A76 | Since: 1207 | API-Set: unknown
 */
export declare function setCanBeTargettedByPlayer(ped: number | IPed, player: number | string | IPlayer, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xBF1CA77833E58F2C | Since: 1207 | API-Set: unknown
 */
export declare function setCanBeTargettedByTeam(ped: number | IPed, team: number, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xEE9DF765990E8D1D | Since: 1207 | API-Set: unknown
 */
export declare function setCanBodyRecoilIk(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC11C18092C5530DC | Since: 1207 | API-Set: unknown
 */
export declare function setCanHeadIk(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x73518ECE2485412B | Since: 1207 | API-Set: unknown
 */
export declare function setCanLegIk(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x6373D1349925A70E | Since: 1207 | API-Set: unknown
 */
export declare function setCanPlayAmbientAnims(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x0EB0585D15254740 | Since: 1207 | API-Set: unknown
 */
export declare function setCanPlayAmbientBaseAnims(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xBAF20C5432058024 | Since: 1207 | API-Set: unknown
 */
export declare function setCanPlayGestureAnims(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xB128377056A54E2A | Since: 1207 | API-Set: unknown
 */
export declare function setCanRagdoll(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xDF993EE5E90ABA25 | Since: 1207 | API-Set: unknown
 */
export declare function setCanRagdollFromPlayerImpact(ped: number | IPed, toggle: boolean): void;
/**
 * This only will teleport the ped to the group leader if the group leader teleports (sets coords).
 *
 * Only works in singleplayer
 *
 * Hash: 0x2E2F4240B3F24647 | Since: 1207 | API-Set: unknown
 */
export declare function setCanTeleportToGroupLeader(pedHandle: number | IPed, groupId: number, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xF2B7106D37947CE0 | Since: 1207 | API-Set: unknown
 */
export declare function setCanTorsoIk(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xF5846EDB26A98A24 | Since: 1207 | API-Set: unknown
 */
export declare function setCanTorsoReactIk(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x6647C5F6F5792496 | Since: 1207 | API-Set: unknown
 */
export declare function setCanTorsoVehicleIk(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xEC4686EC06434678 | Since: 1207 | API-Set: unknown
 */
export declare function setCanUseAutoConversationLookat(ped: number | IPed, toggle: boolean): void;
/**
 * Overrides the ped's collision capsule radius for the current tick.
 * Must be called every tick to be effective.
 *
 * Setting this to 0.001 will allow warping through some objects.
 *
 * Hash: 0x364DF566EC833DE2 | Since: 1207 | API-Set: unknown
 */
export declare function setCapsule(ped: number | IPed, value: number): void;
/**
 * Old name: SET_PED_CLOTH_PACKAGE_INDEX
 *
 * Hash: 0x78C4E9961DB3EB5B | Since: 1207 | API-Set: unknown
 */
export declare function setClothPinFrames(ped: number | IPed): void;
/**
 * abilityLevel:
 * enum eCombatAbilityLevel
 * {
 * CAL_POOR,
 * CAL_AVERAGE,
 * CAL_PROFESSIONAL
 * };
 *
 * Hash: 0xC7622C0D36B2FDA8 | Since: 1207 | API-Set: unknown
 */
export declare function setCombatAbility(ped: number | IPed, abilityLevel: number): void;
/**
 * attributeIndex: https://alloc8or.re/rdr3/doc/enums/eCombatAttribute.txt
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/COMBAT_ATTRIBUTES
 *
 * Hash: 0x9F7794730795E019 | Since: 1207 | API-Set: unknown
 */
export declare function setCombatAttributes(ped: number | IPed, attributeIndex: number, enabled: boolean): void;
/**
 * 0 - Stationary (Will just stand in place)
 * 1 - Defensive (Will try to find cover and very likely to blind fire)
 * 2 - Offensive (Will attempt to charge at enemy but take cover as well)
 * 3 - Suicidal Offensive (Will try to flank enemy in a suicidal attack)
 *
 * Hash: 0x4D9CA1009AFBD057 | Since: 1207 | API-Set: unknown
 */
export declare function setCombatMovement(ped: number | IPed, combatMovement: number): void;
/**
 * range:
 * enum eCombatRange
 * {
 * CR_NEAR,
 * CR_MEDIUM,
 * CR_FAR,
 * CR_VERY_FAR
 * };
 *
 * Hash: 0x3C606747B23E497B | Since: 1207 | API-Set: unknown
 */
export declare function setCombatRange(ped: number | IPed, range: number): void;
/**
 * flagId: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePedScriptConfigFlags
 * https://alloc8or.re/rdr3/doc/enums/ePedScriptConfigFlags.txt
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/CPED_CONFIG_FLAGS
 *
 * Hash: 0x1913FE4CBF41C463 | Since: 1207 | API-Set: unknown
 */
export declare function setConfigFlag(ped: number | IPed, flagId: number, value: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x413C6C763A4AFFAD | Since: 1207 | API-Set: unknown
 */
export declare function setDefensiveAreaDirection(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xFC3DB99C8144CD81 | Since: 1207 | API-Set: unknown
 */
export declare function setDefensiveAreaVolume(ped: number | IPed, volume: number): void;
/**
 * No comment provided
 *
 * Hash: 0xAA5A7ECE2AA8FE70 | Since: 1207 | API-Set: unknown
 */
export declare function setDesiredHeading(ped: number | IPed, heading: number): void;
/**
 * Used in various R* MP & SP Scripts
 *
 * Hash: 0x9AC577F5A12AD8A9 | Since: 1207 | API-Set: unknown
 */
export declare function setFiringPattern(ped: number | IPed, patternHash: number | string): void;
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/FLEE_ATTRIBUTES
 *
 * attributeFlags:
 * enum eFleeAttribute
 * {
 * FA_FORCE_EXIT_VEHICLE = (1 << 16),
 * FA_DISABLE_MOUNT_USAGE = (1 << 20),
 * FA_DISABLE_ENTER_VEHICLES = (1 << 22),
 * };
 *
 * Hash: 0x70A2D1137C8ED7C9 | Since: 1207 | API-Set: unknown
 */
export declare function setFleeAttributes(ped: number | IPed, attributeFlags: number, enable: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xDDF803377F94AAA8 | Since: 1207 | API-Set: unknown
 */
export declare function setGestureGroup(ped: number | IPed): string;
/**
 * No comment provided
 *
 * Hash: 0x9FF447B6B6AD960A | Since: 1207 | API-Set: unknown
 */
export declare function setGravity(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x0BDDB8D9EC6BCF3C | Since: 1207 | API-Set: unknown
 */
export declare function setGroupMemberPassengerIndex(ped: number | IPed, index: number): void;
/**
 * No comment provided
 *
 * Hash: 0x33A8F7F7D5F7F33C | Since: 1207 | API-Set: unknown
 */
export declare function setHearingRange(ped: number | IPed, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x52D59AB61DDC05DD | Since: 1207 | API-Set: unknown
 */
export declare function setHighlyPerceptive(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xF107E836A70DCE05 | Since: 1207 | API-Set: unknown
 */
export declare function setIdRange(ped: number | IPed, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0xEC4B4B3B9908052A | Since: 1311 | API-Set: unknown
 */
export declare function setInjuredOnGroundBehaviour(ped: number | IPed, unk: number): void;
/**
 * Ped: The ped to warp.
 * vehicle: The vehicle to warp the ped into.
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 *
 * Hash: 0xF75B0D629E1C063D | Since: 1207 | API-Set: unknown
 */
export declare function setIntoVehicle(ped: number | IPed, vehicle: number | IVehicle, seatIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x971D38760FBC02EF | Since: 1207 | API-Set: unknown
 */
export declare function setKeepTask(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xAE6004120C18DF97 | Since: 1207 | API-Set: unknown
 */
export declare function setLassoHogtieFlag(ped: number | IPed, flagId: number, value: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC396F5B86FF9FEBD | Since: 1207 | API-Set: unknown
 */
export declare function setLegIkMode(ped: number | IPed, mode: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDC2C5C242AAC342B | Since: 1207 | API-Set: unknown
 */
export declare function setLodMultiplier(ped: number | IPed, multiplier: number): void;
/**
 * Sets the maximum health of a ped.
 *
 * Hash: 0xF5F6378C4F3419D3 | Since: 1207 | API-Set: unknown
 */
export declare function setMaxHealth(ped: number | IPed, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x433083750C5E064A | Since: 1207 | API-Set: unknown
 */
export declare function setMaxMoveBlendRatio(ped: number | IPed, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x43C851690662113D | Since: 1207 | API-Set: unknown
 */
export declare function setMaxTimeInWater(ped: number | IPed, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6BA428C528D9E522 | Since: 1207 | API-Set: unknown
 */
export declare function setMaxTimeUnderwater(ped: number | IPed, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x01A898D26E2333DD | Since: 1207 | API-Set: unknown
 */
export declare function setMinMoveBlendRatio(ped: number | IPed, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0xE163A4BCE4DE6F11 | Since: 1207 | API-Set: unknown
 */
export declare function setModelIsSuppressed(model: number | string, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xA9C8960E8684C1B5 | Since: 1207 | API-Set: unknown
 */
export declare function setMoney(ped: number | IPed, amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9E8C908F41584ECD | Since: 1207 | API-Set: unknown
 */
export declare function setMoveAnimsBlendOut(ped: number | IPed): void;
/**
 * Min: 0.0f
 * Max: 1.15f
 *
 * Hash: 0x085BF80FA50A39D1 | Since: 1207 | API-Set: unknown
 */
export declare function setMoveRateOverride(ped: number | IPed, value: number): void;
/**
 * nullsub, doesn't do anything
 *
 * Hash: 0x98EFA132A4117BE1 | Since: 1207 | API-Set: unknown
 */
export declare function setNameDebug(ped: number | IPed): string;
/**
 * The distance between these points, is the diagonal of a box (remember it's 3D).
 *
 * Hash: 0xEE01041D559983EA | Since: 1207 | API-Set: unknown
 */
export declare function setNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
/**
 * No comment provided
 *
 * Hash: 0x028F76B6E78246EB | Since: 1207 | API-Set: unknown
 */
export declare function setOntoMount(ped: number | IPed, mount: number | IPed, seatIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x931B241409216C1F | Since: 1207 | API-Set: unknown
 */
export declare function setOwnsAnimal(ped: number | IPed, animal: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xFE07FF6495D52E2A | Since: 1207 | API-Set: unknown
 */
export declare function setPanicExitScenario(ped: number | IPed, pos: Vector3): boolean;
/**
 * No comment provided
 *
 * Hash: 0x01F6594B923B9251 | Since: 1207 | API-Set: unknown
 */
export declare function setRagdollForceFall(ped: number | IPed): void;
/**
 * Causes Ped to ragdoll on collision with any object (e.g Running into trashcan). If applied to player you will sometimes trip on the sidewalk.
 *
 * Hash: 0xF0A4F1BBF4FA7497 | Since: 1207 | API-Set: unknown
 */
export declare function setRagdollOnCollision(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xC8A9481A01E63C28 | Since: 1207 | API-Set: unknown
 */
export declare function setRandomComponentVariation(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xADB3F206518799E8 | Since: 1207 | API-Set: unknown
 */
export declare function setRelationshipGroupDefaultHash(ped: number | IPed, hash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xC80A74AC829DDD92 | Since: 1207 | API-Set: unknown
 */
export declare function setRelationshipGroupHash(ped: number | IPed, relationshipGroup: number | string): void;
/**
 * Needs to be called every frame
 *
 * flagid:https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePedScriptResetFlags
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/CPED_RESET_FLAGS
 *
 * Hash: 0xC1E8A365BF3B29F2 | Since: 1207 | API-Set: unknown
 */
export declare function setResetFlag(ped: number | IPed, flagId: number, doReset: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xF29CF591C4BF6CEE | Since: 1207 | API-Set: unknown
 */
export declare function setSeeingRange(ped: number | IPed, value: number): void;
/**
 * Params: shootRate = 0 - 1000
 *
 * Hash: 0x614DA022990752DC | Since: 1207 | API-Set: unknown
 */
export declare function setShootRate(ped: number | IPed, shootRate: number): void;
/**
 * lookIntensity: see SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT
 *
 * Hash: 0x802092B07E3B1EEA | Since: 1207 | API-Set: unknown
 */
export declare function setShouldPlayCombatScenarioExit(ped: number | IPed, pos: Vector3, lookIntensity: number): boolean;
/**
 * Old name: _SET_PED_SHOULD_PLAY_DIRECTED_SCENARIO_EXIT
 *
 * Hash: 0xEC6935EBE0847B90 | Since: 1207 | API-Set: unknown
 */
export declare function setShouldPlayDirectedNormalScenarioExit(ped: number | IPed, pos: Vector3): boolean;
/**
 * lookIntensity: see SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT
 *
 * Hash: 0x62FDAD5E01D2DD47 | Since: 1207 | API-Set: unknown
 */
export declare function setShouldPlayEmotionalScenarioExit(ped: number | IPed, pos: Vector3, lookIntensity: number): boolean;
/**
 * lookIntensity:
 * 0 - REACT_LOOK_NONE
 * 1 - REACT_LOOK_LOW
 * 2 - REACT_LOOK_MEDIUM
 * 3 - REACT_LOOK_HIGH
 *
 * Hash: 0xEEED8FAFEC331A70 | Since: 1207 | API-Set: unknown
 */
export declare function setShouldPlayFleeScenarioExit(ped: number | IPed, pos: Vector3, lookIntensity: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF1C03A5352243A30 | Since: 1207 | API-Set: unknown
 */
export declare function setShouldPlayImmediateScenarioExit(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xA3A9299C4F2ADB98 | Since: 1207 | API-Set: unknown
 */
export declare function setShouldPlayNormalScenarioExit(ped: number | IPed): void;
/**
 * lookIntensity: see SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT
 *
 * Hash: 0x463803429297117C | Since: 1207 | API-Set: unknown
 */
export declare function setShouldPlayQuickScenarioExit(ped: number | IPed, pos: Vector3, lookIntensity: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9D3151A373974804 | Since: 1207 | API-Set: unknown
 */
export declare function setSphereDefensiveArea(ped: number | IPed, pos: Vector3, radius: number): void;
/**
 * Not implemented.
 *
 * Hash: 0x88CBB5CEB96B7BD2 | Since: 1207 | API-Set: unknown
 */
export declare function setStealthMovement(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x27B0405F59637D1F | Since: 1207 | API-Set: unknown
 */
export declare function setSweat(ped: number | IPed, sweat: number): void;
/**
 * TLR_ExitTask = 0,
 * TLR_NeverLoseTarget,
 * TLR_SearchForTarget
 *
 * Hash: 0x0703B9079823DA4A | Since: 1207 | API-Set: unknown
 */
export declare function setTargetLossResponse(ped: number | IPed, responseType: number): void;
/**
 * No comment provided
 *
 * Hash: 0x112942C6E708F70B | Since: 1207 | API-Set: unknown
 */
export declare function setToInformRespectedFriends(ped: number | IPed, radius: number, maxFriends: number): void;
/**
 * Old name: _SET_PED_DAMAGE_MODIFIER
 *
 * Hash: 0xD77AE48611B7B10A | Since: 1207 | API-Set: unknown
 */
export declare function setToPlayerWeaponDamageModifier(ped: number | IPed, damageModifier: number): void;
/**
 * nmTaskMessageParameterName: See physicstasks.ymt. Search for DraggedByCart or 0xD00820D7 (Used in R* SP Script marston8)
 *
 * Hash: 0xAE99FB955581844A | Since: 1207 | API-Set: unknown
 */
export declare function setToRagdoll(ped: number | IPed, timeMin: number, timeMax: number, ragdollType: number, abortIfInjured: boolean, abortIfDead: boolean): [boolean, string];
/**
 * No comment provided
 *
 * Hash: 0xD76632D99E4966C8 | Since: 1207 | API-Set: unknown
 */
export declare function setToRagdollWithFall(ped: number | IPed, timeMin: number, timeMax: number, ragdollType: number, falldirX: number, falldirY: number, falldirZ: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD75ACCF5E0FB5367 | Since: 1207 | API-Set: unknown
 */
export declare function setUsingActionMode(ped: number | IPed, bActionModeEnabled: boolean): string;
/**
 * No comment provided
 *
 * Hash: 0x3B6405E8AB34A907 | Since: 1207 | API-Set: unknown
 */
export declare function setVisualFieldCenterAngle(ped: number | IPed, angle: number): void;
/**
 * No comment provided
 *
 * Hash: 0x70793BDCA1E854D4 | Since: 1207 | API-Set: unknown
 */
export declare function setVisualFieldMaxAngle(ped: number | IPed, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2DB492222FB21E26 | Since: 1207 | API-Set: unknown
 */
export declare function setVisualFieldMinAngle(ped: number | IPed, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9C74B0BC831B753A | Since: 1207 | API-Set: unknown
 */
export declare function setVisualFieldPeripheralRange(ped: number | IPed, range: number): void;
/**
 * `combined with PED::SET_PED_WETNESS_HEIGHT(), this native makes the ped drenched in water up to the height specified in the other function`
 *
 * Hash: 0xB5485E4907B53019 | Since: 1207 | API-Set: unknown
 */
export declare function setWetnessEnabledThisFrame(ped: number | IPed): void;
/**
 * It adds the wetness level to the player clothing/outfit. As if player just got out from water surface.
 *
 * Hash: 0x44CB6447D2571AA0 | Since: 1207 | API-Set: unknown
 */
export declare function setWetnessHeight(ped: number | IPed, height: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD8C3BE3EE94CAF2D | Since: 1207 | API-Set: unknown
 */
export declare function setPopControlSphereThisFrame(): void;
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/RAGDOLL_BLOCKING_FLAGS
 *
 * flags:
 * enum eRagdollBlockingFlags
 * {
 * RBF_BULLET_IMPACT = (1 << 0),
 * RBF_VEHICLE_IMPACT = (1 << 1),
 * RBF_FIRE = (1 << 2),
 * RBF_ELECTROCUTION = (1 << 3),
 * RBF_PLAYER_IMPACT = (1 << 4),
 * RBF_EXPLOSION = (1 << 5),
 * RBF_IMPACT_OBJECT = (1 << 6),
 * RBF_MELEE = (1 << 7),
 * RBF_RUBBER_BULLET = (1 << 8),
 * RBF_FALLING = (1 << 9),
 * RBF_WATER_JET = (1 << 10),
 * RBF_DROWNING = (1 << 11),
 * RBF_0x9F52E2C4 = (1 << 12),
 * RBF_PLAYER_BUMP = (1 << 13),
 * RBF_PLAYER_RAGDOLL_BUMP = (1 << 14),
 * RBF_PED_RAGDOLL_BUMP = (1 << 15),
 * RBF_VEHICLE_GRAB = (1 << 16),
 * RBF_SMOKE_GRENADE = (1 << 17),
 * RBF_HORSE_BUMP = (1 << 18),
 * RBF_ACTIVATE_ON_COLLISION = (1 << 19)
 * };
 *
 * Hash: 0x26695EC767728D84 | Since: 1207 | API-Set: unknown
 */
export declare function setRagdollBlockingFlags(ped: number | IPed, flags: number): void;
/**
 * enum eRelationType
 * {
 * ACQUAINTANCE_TYPE_PED_NONE = 0,
 * ACQUAINTANCE_TYPE_PED_RESPECT = 1,
 * ACQUAINTANCE_TYPE_PED_LIKE = 2,
 * ACQUAINTANCE_TYPE_PED_IGNORE = 3,
 * ACQUAINTANCE_TYPE_PED_DISLIKE = 4,
 * ACQUAINTANCE_TYPE_PED_WANTED = 5,
 * ACQUAINTANCE_TYPE_PED_HATE = 6,
 * ACQUAINTANCE_TYPE_PED_DEAD = 7,
 * ACQUAINTANCE_TYPE_PED_DISGUISE = 8,
 * ACQUAINTANCE_TYPE_PED_THIEF = 9,
 * };
 *
 * https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eRelationType
 *
 * Hash: 0xBF25EB89375A37AD | Since: 1207 | API-Set: unknown
 */
export declare function setRelationshipBetweenGroups(relationship: number, group1: number | string, group2: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x7A556143A1C03898 | Since: 1207 | API-Set: unknown
 */
export declare function setScenarioDensityMultiplierThisFrame(multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0xFEE4A5459472A9F8 | Since: 1207 | API-Set: unknown
 */
export declare function spawnpointsCancelSearch(): void;
/**
 * No comment provided
 *
 * Hash: 0xA635C11B8C44AFC2 | Since: 1207 | API-Set: unknown
 */
export declare function spawnpointsGetNumSearchResults(): number;
/**
 * No comment provided
 *
 * Hash: 0x280C7E3AC7F56E90 | Since: 1207 | API-Set: unknown
 */
export declare function spawnpointsGetSearchResult(randomInt: number): [number, any, number];
/**
 * No comment provided
 *
 * Hash: 0xB782F8238512BAD5 | Since: 1207 | API-Set: unknown
 */
export declare function spawnpointsGetSearchResultFlags(): any;
/**
 * No comment provided
 *
 * Hash: 0x3C67506996001F5E | Since: 1207 | API-Set: unknown
 */
export declare function spawnpointsIsSearchActive(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xA586FBEB32A53DBB | Since: 1207 | API-Set: unknown
 */
export declare function spawnpointsIsSearchComplete(): boolean;
/**
 * No comment provided
 *
 * Hash: 0xF445DE8DA80A1792 | Since: 1207 | API-Set: unknown
 */
export declare function spawnpointsIsSearchFailed(): boolean;
/**
 * Params: p4 = 35.f, duration = 5000 in R* Scripts
 *
 * Hash: 0x2DF9038C90AD5264 | Since: 1207 | API-Set: unknown
 */
export declare function spawnpointsStartSearch(pos: Vector3, width: number, spawnpointsFlag: number, duration: number): void;
/**
 * Searching area between coords 1 and 2
 *
 * Hash: 0xB2AFF10216DEFA2F | Since: 1207 | API-Set: unknown
 */
export declare function spawnpointsStartSearchInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, spawnpointsFlag: number, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF9ACF4A08098EA25 | Since: 1207 | API-Set: unknown
 */
export declare function specialFunctionDoNotUse(ped: number | IPed): void;
/**
 * Returns time since the specified ped last shot, in seconds. (fPlayerJustShotTime)
 *
 * Hash: 0x285D36C5C72B0569 | Since: 1207 | API-Set: unknown
 */
export declare function timeSinceLastShot(ped: number | IPed): number;
/**
 * If toggle is true, when the ped is using a scenario he will stop it and become scared
 * If toggle is false, the ped will not be scared anymore and continue his scenario
 *
 * Old name: _SET_PED_SCARED_WHEN_USING_SCENARIO
 *
 * Hash: 0x9A77DFD295E29B09 | Since: 1207 | API-Set: unknown
 */
export declare function toggleScenarioCowerInPlace(ped: number | IPed, toggle: boolean): void;
/**
 * Despite this function's name, it simply returns whether the specified handle is a Ped.
 *
 * Hash: 0x11B499C1E0FF8559 | Since: 1207 | API-Set: unknown
 */
export declare function wasSkeletonUpdated(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x00B380FF2DF6AB7A | Since: 1207 | API-Set: unknown
 */
export declare function _0x00B380FF2DF6AB7A(): void;
/**
 * No comment provided
 *
 * Hash: 0x024EC9B649111915 | Since: 1207 | API-Set: unknown
 */
export declare function _0x024EC9B649111915(ped: number | IPed): void;
/**
 * _SET_PLAYER_SN* - _SET_PLAYER_STAMINA*
 *
 * Hash: 0x02E741E19E39628C | Since: 1207 | API-Set: unknown
 */
export declare function _0x02E741E19E39628C(ped: number | IPed): void;
/**
 * _DOES_GROUP_* - _DOES_N*
 *
 * Hash: 0x0455546F23FF08E4 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0455546F23FF08E4(groupId: number): boolean;
/**
 * _GET_PED_D*
 *
 * Hash: 0x06A10B4D7F50B0C3 | Since: 1207 | API-Set: unknown
 */
export declare function _0x06A10B4D7F50B0C3(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x070A3841406C43D5 | Since: 1207 | API-Set: unknown
 */
export declare function _0x070A3841406C43D5(): void;
/**
 * No comment provided
 *
 * Hash: 0x07EA5B053FA60AC7 | Since: 1207 | API-Set: unknown
 */
export declare function _0x07EA5B053FA60AC7(groupId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x09171A6F8FDE5DC1 | Since: 1207 | API-Set: unknown
 */
export declare function _0x09171A6F8FDE5DC1(): void;
/**
 * No comment provided
 *
 * Hash: 0x095C2277FED731DB | Since: 1207 | API-Set: unknown
 */
export declare function _0x095C2277FED731DB(): any;
/**
 * No comment provided
 *
 * Hash: 0x09D7AFD3716DA8E1 | Since: 1207 | API-Set: unknown
 */
export declare function _0x09D7AFD3716DA8E1(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0A4618FFD517E24D | Since: 1207 | API-Set: unknown
 */
export declare function _0x0A4618FFD517E24D(): void;
/**
 * No comment provided
 *
 * Hash: 0x0ADA3EC589E1736E | Since: 1207 | API-Set: unknown
 */
export declare function _0x0ADA3EC589E1736E(): void;
/**
 * No comment provided
 *
 * Hash: 0x0B787A37EEDD226F | Since: 1311 | API-Set: unknown
 */
export declare function _0x0B787A37EEDD226F(): void;
/**
 * _IS_PED_M*
 *
 * Hash: 0x0D3B1568917EBDA0 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0D3B1568917EBDA0(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0D497AA69059FE40 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0D497AA69059FE40(): void;
/**
 * _IS_PED_L* - _IS_PED_M*
 *
 * Hash: 0x0EEF7A81C17679DB | Since: 1207 | API-Set: unknown
 */
export declare function _0x0EEF7A81C17679DB(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0F967019CC853BCC | Since: 1207 | API-Set: unknown
 */
export declare function _0x0F967019CC853BCC(): void;
/**
 * No comment provided
 *
 * Hash: 0x0FB1BA7FF73B41E1 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0FB1BA7FF73B41E1(): void;
/**
 * No comment provided
 *
 * Hash: 0x0FFDF937E5C11382 | Since: 1207 | API-Set: unknown
 */
export declare function _0x0FFDF937E5C11382(): void;
/**
 * No comment provided
 *
 * Hash: 0x101B45C5F56D970F | Since: 1207 | API-Set: unknown
 */
export declare function _0x101B45C5F56D970F(ped: number | IPed, damageCleanliness: number): [boolean, any];
/**
 * NB_CUSTOM_CLIENT_ON_CREATE_COMPLETE - set legendary to not avoid prey
 *
 * Hash: 0x10F96086123B939F | Since: 1207 | API-Set: unknown
 */
export declare function _0x10F96086123B939F(legendaryPed: number | IPed, preyPed: number | IPed): void;
/**
 * _CAN_PED_SEE* - _CAN_PED_USE_(SCENARIO_HASH?)*
 *
 * Hash: 0x1148F706CF4EBDDA | Since: 1207 | API-Set: unknown
 */
export declare function _0x1148F706CF4EBDDA(ped: number | IPed, p1: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1298B3D8E4C2409F | Since: 1207 | API-Set: unknown
 */
export declare function _0x1298B3D8E4C2409F(): void;
/**
 * _GET_IS_PED_(BLEEDING_OUT?)*
 *
 * Hash: 0x12EB4E31F092C9B3 | Since: 1207 | API-Set: unknown
 */
export declare function _0x12EB4E31F092C9B3(ped: number | IPed): boolean;
/**
 * _SET_A* - _SET_B*
 *
 * Hash: 0x12F2D161BF4031FC | Since: 1207 | API-Set: unknown
 */
export declare function _0x12F2D161BF4031FC(ped: number | IPed): void;
/**
 * _GET_PED_M*
 *
 * Hash: 0x134775B093AD5C38 | Since: 1207 | API-Set: unknown
 */
export declare function _0x134775B093AD5C38(ped: number | IPed): number;
/**
 * _SET_SCENARIO_PED_* - _SET_SPAWNER_*
 *
 * Hash: 0x154B7E841AC7412F | Since: 1207 | API-Set: unknown
 */
export declare function _0x154B7E841AC7412F(groupId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x15F4732C357B1D6D | Since: 1207 | API-Set: unknown
 */
export declare function _0x15F4732C357B1D6D(): void;
/**
 * No comment provided
 *
 * Hash: 0x16802C32B2FCA06B | Since: 1207 | API-Set: unknown
 */
export declare function _0x16802C32B2FCA06B(): void;
/**
 * _PED_COWER_M*
 *
 * Hash: 0x16F798A05BB9E3B5 | Since: 1207 | API-Set: unknown
 */
export declare function _0x16F798A05BB9E3B5(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x1D23D3F70606D788 | Since: 1207 | API-Set: unknown
 */
export declare function _0x1D23D3F70606D788(): void;
/**
 * _SET_PED_CA* - _SET_PED_CO*
 *
 * Hash: 0x1D4636C90BBEFACB | Since: 1207 | API-Set: unknown
 */
export declare function _0x1D4636C90BBEFACB(ped: number | IPed): void;
/**
 * Only used in SP R* Scripts
 * Params: p2 = same as p2 of 0x3C529A827998F9B3
 * _SET_PED_TA* - _SET_PED_TO_*
 *
 * Hash: 0x1F44B7E283C09EDE | Since: 1207 | API-Set: unknown
 */
export declare function _0x1F44B7E283C09EDE(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x2371C39D4F91C288 | Since: 1207 | API-Set: unknown
 */
export declare function _0x2371C39D4F91C288(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x23BDE06596A22CEC | Since: 1207 | API-Set: unknown
 */
export declare function _0x23BDE06596A22CEC(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x242EDF85D4E87B65 | Since: 1207 | API-Set: unknown
 */
export declare function _0x242EDF85D4E87B65(): any;
/**
 * _IS_PED_FL* - _IS_PED_FU*
 *
 * Hash: 0x256EDD55C6BE1482 | Since: 1207 | API-Set: unknown
 */
export declare function _0x256EDD55C6BE1482(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x273915CE30780986 | Since: 1207 | API-Set: unknown
 */
export declare function _0x273915CE30780986(): any;
/**
 * No comment provided
 *
 * Hash: 0x27E8A84C12B0B7D1 | Since: 1207 | API-Set: unknown
 */
export declare function _0x27E8A84C12B0B7D1(): any;
/**
 * No comment provided
 *
 * Hash: 0x28508173C6A7CC18 | Since: 1311 | API-Set: unknown
 */
export declare function _0x28508173C6A7CC18(): void;
/**
 * _IS_PED_L* - _IS_PED_M*
 *
 * Hash: 0x290B2E6CCDE532E1 | Since: 1207 | API-Set: unknown
 */
export declare function _0x290B2E6CCDE532E1(ped: number | IPed): boolean;
/**
 * _SET_PED_K* or _SET_PED_L*
 *
 * Hash: 0x29924EB8EE9DB926 | Since: 1207 | API-Set: unknown
 */
export declare function _0x29924EB8EE9DB926(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x29F3539189D3E277 | Since: 1207 | API-Set: unknown
 */
export declare function _0x29F3539189D3E277(): void;
/**
 * Used in Script Function CHECK_IS_PLAYER_SEEN
 * _GET_PED_*
 *
 * Hash: 0x2BA9D7BF629F920C | Since: 1207 | API-Set: unknown
 */
export declare function _0x2BA9D7BF629F920C(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x2D976DBDC731DF80 | Since: 1207 | API-Set: unknown
 */
export declare function _0x2D976DBDC731DF80(ped: number | IPed): void;
/**
 * _IS_PED_D*
 *
 * Hash: 0x2DC0E8DCBD3546E9 | Since: 1207 | API-Set: unknown
 */
export declare function _0x2DC0E8DCBD3546E9(ped: number | IPed): boolean;
/**
 * _IS_PED_M* - _IS_PED_O*
 *
 * Hash: 0x2DD4E0E26DFAD97D | Since: 1207 | API-Set: unknown
 */
export declare function _0x2DD4E0E26DFAD97D(ped1: number | IPed, ped2: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x2E5B5D1F1453E08E | Since: 1207 | API-Set: unknown
 */
export declare function _0x2E5B5D1F1453E08E(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x2FA568BFA725F8D6 | Since: 1207 | API-Set: unknown
 */
export declare function _0x2FA568BFA725F8D6(): void;
/**
 * _GET_SHOP_ITEM_NUM_*? returns a number of ? p1 seems to be always joaat("base")
 *
 * Hash: 0x31B2E7F2E3C58B89 | Since: 1207 | API-Set: unknown
 */
export declare function _0x31B2E7F2E3C58B89(componentHash: number | string, p1: number | string, metapedType: number, isMP: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0x32417CB860A3BDC4 | Since: 1207 | API-Set: unknown
 */
export declare function _0x32417CB860A3BDC4(): any;
/**
 * Only used in R* SP Script short_update
 * _GET_TARGET_* - _GET_TRACKED*
 *
 * Hash: 0x326F7951EF0D7F75 | Since: 1207 | API-Set: unknown
 */
export declare function _0x326F7951EF0D7F75(ped: number | IPed, eventType: number | string): any;
/**
 * _SET_PED_P* - _SET_PED_R*
 *
 * Hash: 0x329772C47DBB2FBC | Since: 1207 | API-Set: unknown
 */
export declare function _0x329772C47DBB2FBC(ped: number | IPed): void;
/**
 * _STOP_(?)*
 *
 * Hash: 0x32CCAD8A981B53D3 | Since: 1207 | API-Set: unknown
 */
export declare function _0x32CCAD8A981B53D3(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x32CEDA9A0AB4CEF7 | Since: 1207 | API-Set: unknown
 */
export declare function _0x32CEDA9A0AB4CEF7(ped: number | IPed, p1: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x34B5CEAC180A5D6E | Since: 1207 | API-Set: unknown
 */
export declare function _0x34B5CEAC180A5D6E(ped: number | IPed, p1: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x34C11114887150FD | Since: 1207 | API-Set: unknown
 */
export declare function _0x34C11114887150FD(): void;
/**
 * No comment provided
 *
 * Hash: 0x34EDDD59364AD74A | Since: 1207 | API-Set: unknown
 */
export declare function _0x34EDDD59364AD74A(ped: number | IPed): any;
/**
 * No comment provided
 *
 * Hash: 0x354CA4DDDEEC397A | Since: 1207 | API-Set: unknown
 */
export declare function _0x354CA4DDDEEC397A(ped: number | IPed): number;
/**
 * _RESET_PED_*
 *
 * Hash: 0x370A973252741AC4 | Since: 1207 | API-Set: unknown
 */
export declare function _0x370A973252741AC4(ped: number | IPed): void;
/**
 * _SET_PED_MO*
 *
 * Hash: 0x3A5697B80FED5EBE | Since: 1207 | API-Set: unknown
 */
export declare function _0x3A5697B80FED5EBE(ped: number | IPed): void;
/**
 * Used in R* Script net_fetch (NET_FETCH_UPDATE_RECIPIENT_PROP_ILO_IN_COMBAT) and various SP Scripts
 * Params: p1 = 4/5/6, p5 = 40.f/100.f, coords = Player ped
 * Perhaps returns some distance (Clearing that the local player is able to use ILO while in combat because they are near the recipient but also near hated peds)
 * _GET_NUM_M* - _GET_PEDS_J*
 *
 * Hash: 0x3ACCE14DFA6BA8C2 | Since: 1207 | API-Set: unknown
 */
export declare function _0x3ACCE14DFA6BA8C2(ped: number | IPed, pos: Vector3, itemset: any): number;
/**
 * _IS_PED_R*
 *
 * Hash: 0x3AEC4A410ECAF30D | Since: 1207 | API-Set: unknown
 */
export declare function _0x3AEC4A410ECAF30D(ped: number | IPed): boolean;
/**
 * _SET_PED_TA* - _SET_PED_TO_*
 *
 * Hash: 0x3C529A827998F9B3 | Since: 1207 | API-Set: unknown
 */
export declare function _0x3C529A827998F9B3(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x3EFED081B4834BA1 | Since: 1232 | API-Set: unknown
 */
export declare function _0x3EFED081B4834BA1(): void;
/**
 * Used for script function PROCESS_PLAYER_HAT_EVENT
 * Returns requestId to be used with 0x13E7320C762F0477
 *
 * Hash: 0x3FCBB5FCFD968698 | Since: 1207 | API-Set: unknown
 */
export declare function _0x3FCBB5FCFD968698(drawable: number | string, albedo: number | string, normal: number | string, material: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x3FDBB99EFD8CE4AF | Since: 1207 | API-Set: unknown
 */
export declare function _0x3FDBB99EFD8CE4AF(): void;
/**
 * Changes health bar around heart core icon
 * INITIALISE_NEW_ROLE - Applying Super Jump buffs: p1 = 10, p2 = 0.0f
 * INITIALISE_NEW_ROLE - Clearing up Super Jump buffs: p1 = 10, p2 = 1.0f
 * _SET_D*
 *
 * Hash: 0x3FDCC1F8C17E303E | Since: 1207 | API-Set: unknown
 */
export declare function _0x3FDCC1F8C17E303E(ped: number | IPed): void;
/**
 * _SET_PED_A*
 *
 * Hash: 0x405180B14DA5A935 | Since: 1207 | API-Set: unknown
 */
export declare function _0x405180B14DA5A935(ped: number | IPed): void;
/**
 * _SET_SCENARIO_PED_* - _SET_SPAWNER_*
 *
 * Hash: 0x40C3524D4ED83554 | Since: 1207 | API-Set: unknown
 */
export declare function _0x40C3524D4ED83554(groupId: number): void;
/**
 * _IS_PED_RE*
 *
 * Hash: 0x40C9155AF8BC13F3 | Since: 1207 | API-Set: unknown
 */
export declare function _0x40C9155AF8BC13F3(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x413697EC260AABBF | Since: 1207 | API-Set: unknown
 */
export declare function _0x413697EC260AABBF(): void;
/**
 * _SET_PED_IN*
 *
 * Hash: 0x41C23A8E6B344867 | Since: 1207 | API-Set: unknown
 */
export declare function _0x41C23A8E6B344867(ped: number | IPed): void;
/**
 * _SET_PED_IN*
 *
 * Hash: 0x45FEA6D5539BD474 | Since: 1207 | API-Set: unknown
 */
export declare function _0x45FEA6D5539BD474(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x49DADFC4CD808B0A | Since: 1207 | API-Set: unknown
 */
export declare function _0x49DADFC4CD808B0A(): void;
/**
 * No comment provided
 *
 * Hash: 0x4B19F171450E0D4F | Since: 1207 | API-Set: unknown
 */
export declare function _0x4B19F171450E0D4F(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x4E68C7EF706DF35D | Since: 1207 | API-Set: unknown
 */
export declare function _0x4E68C7EF706DF35D(ped: number | IPed, pos: Vector3, relationshipGroup: number | string): void;
/**
 * _SET_PED_A*
 *
 * Hash: 0x4EC4EA2F72B36358 | Since: 1207 | API-Set: unknown
 */
export declare function _0x4EC4EA2F72B36358(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x4F27603E44A8E4C0 | Since: 1207 | API-Set: unknown
 */
export declare function _0x4F27603E44A8E4C0(ped: number | IPed): void;
/**
 * Only used in R* Script shop_harriet
 * _SET_PED_F*
 *
 * Hash: 0x4F63433CE3C08230 | Since: 1311 | API-Set: unknown
 */
export declare function _0x4F63433CE3C08230(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x5203038FF8BAE577 | Since: 1207 | API-Set: unknown
 */
export declare function _0x5203038FF8BAE577(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x52250B92EA70BE3D | Since: 1207 | API-Set: unknown
 */
export declare function _0x52250B92EA70BE3D(): any;
/**
 * No comment provided
 *
 * Hash: 0x52A24D8A1DA89658 | Since: 1207 | API-Set: unknown
 */
export declare function _0x52A24D8A1DA89658(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x53BA7D96B9A421D9 | Since: 1207 | API-Set: unknown
 */
export declare function _0x53BA7D96B9A421D9(): void;
/**
 * No comment provided
 *
 * Hash: 0x54D3CD482742C482 | Since: 1355 | API-Set: unknown
 */
export declare function _0x54D3CD482742C482(animal: number | IPed): void;
/**
 * _HAS_PED_*
 *
 * Hash: 0x550CB89DD7F4FA3D | Since: 1207 | API-Set: unknown
 */
export declare function _0x550CB89DD7F4FA3D(ped1: number | IPed, ped2: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x55546004A244302A | Since: 1207 | API-Set: unknown
 */
export declare function _0x55546004A244302A(): void;
/**
 * No comment provided
 *
 * Hash: 0x56076667E7C2DCD6 | Since: 1311 | API-Set: unknown
 */
export declare function _0x56076667E7C2DCD6(): void;
/**
 * No comment provided
 *
 * Hash: 0x56E4BAD93D33453C | Since: 1207 | API-Set: unknown
 */
export declare function _0x56E4BAD93D33453C(): any;
/**
 * _IS_PED_C* - _IS_PED_D*
 *
 * Hash: 0x577C60BA06D0EA64 | Since: 1207 | API-Set: unknown
 */
export declare function _0x577C60BA06D0EA64(ped: number | IPed): boolean;
/**
 * _SET_PED_M*
 *
 * Hash: 0x57F35552E771BE9D | Since: 1207 | API-Set: unknown
 */
export declare function _0x57F35552E771BE9D(ped: number | IPed): void;
/**
 * _C*
 *
 * Hash: 0x5A1A929C8B729B4A | Since: 1207 | API-Set: unknown
 */
export declare function _0x5A1A929C8B729B4A(ped: number | IPed): void;
/**
 * _SET_C*
 *
 * Hash: 0x5AF24CA9C974E51A | Since: 1207 | API-Set: unknown
 */
export declare function _0x5AF24CA9C974E51A(ped1: number | IPed, ped2: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x5B73975B4F12F7F3 | Since: 1207 | API-Set: unknown
 */
export declare function _0x5B73975B4F12F7F3(): void;
/**
 * No comment provided
 *
 * Hash: 0x5BB04BC74A474B47 | Since: 1207 | API-Set: unknown
 */
export declare function _0x5BB04BC74A474B47(): void;
/**
 * _IS_PED_B* - _IS_PED_C*
 *
 * Hash: 0x5BF0B9D9A8E227A0 | Since: 1207 | API-Set: unknown
 */
export declare function _0x5BF0B9D9A8E227A0(ped: number | IPed): boolean;
/**
 * _IS_PED_IN*
 *
 * Hash: 0x5C6C7C70CA302801 | Since: 1207 | API-Set: unknown
 */
export declare function _0x5C6C7C70CA302801(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5C90E20C25E6D83C | Since: 1207 | API-Set: unknown
 */
export declare function _0x5C90E20C25E6D83C(): void;
/**
 * Used in Script Function MP_MAIN_OFFLINE__INITIALIZE_FLOW & PROCESS_GENERIC_PLAYER_INITIALIZATION
 *
 * Hash: 0x5CA20FBE49891BBD | Since: 1207 | API-Set: unknown
 */
export declare function _0x5CA20FBE49891BBD(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x5CB2EBB467BE3ED6 | Since: 1355 | API-Set: unknown
 */
export declare function _0x5CB2EBB467BE3ED6(animal: number | IPed): void;
/**
 * Related to ped hat
 * _SET_PED_LA* - _SET_PED_LE*
 *
 * Hash: 0x5D4CD22A8C82A81A | Since: 1207 | API-Set: unknown
 */
export declare function _0x5D4CD22A8C82A81A(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x5DA36CCCB63C0895 | Since: 1207 | API-Set: unknown
 */
export declare function _0x5DA36CCCB63C0895(): any;
/**
 * Only used in R* SP Scripts
 * _GET_PED_IN*
 *
 * Hash: 0x5E9FAF6C513347B4 | Since: 1207 | API-Set: unknown
 */
export declare function _0x5E9FAF6C513347B4(ped: number | IPed, eventType: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x5EFA8A3D8A60D662 | Since: 1207 | API-Set: unknown
 */
export declare function _0x5EFA8A3D8A60D662(): any;
/**
 * No comment provided
 *
 * Hash: 0x5FCF25D584065BFD | Since: 1207 | API-Set: unknown
 */
export declare function _0x5FCF25D584065BFD(): void;
/**
 * Not implemented.
 *
 * Hash: 0x600BBDD29820370C | Since: 1207 | API-Set: unknown
 */
export declare function _0x600BBDD29820370C(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x604E1010E3162E86 | Since: 1207 | API-Set: unknown
 */
export declare function _0x604E1010E3162E86(): void;
/**
 * Not implemented.
 *
 * Hash: 0x606D529DADA3C940 | Since: 1207 | API-Set: unknown
 */
export declare function _0x606D529DADA3C940(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x633F83B301C87994 | Since: 1207 | API-Set: unknown
 */
export declare function _0x633F83B301C87994(): void;
/**
 * _SET_PED_M*
 *
 * Hash: 0x642720D8D69328B6 | Since: 1207 | API-Set: unknown
 */
export declare function _0x642720D8D69328B6(ped: number | IPed, p1: number | string): void;
/**
 * _IS_N* - _IS_P*
 *
 * Hash: 0x6507AC3BD7C99009 | Since: 1207 | API-Set: unknown
 */
export declare function _0x6507AC3BD7C99009(pos: Vector3): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6734F0A6A52C371C | Since: 1207 | API-Set: unknown
 */
export declare function _0x6734F0A6A52C371C(player: number | string | IPlayer, horseSlot: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6A190B94C2541A99 | Since: 1207 | API-Set: unknown
 */
export declare function _0x6A190B94C2541A99(): void;
/**
 * No comment provided
 *
 * Hash: 0x6A489892E813951A | Since: 1207 | API-Set: unknown
 */
export declare function _0x6A489892E813951A(): void;
/**
 * Only used in SP R* Script train_robbery3: p1 = CLIPSET@VEH_TRAIN@HANDCART@BASE_PANIC & CLIPSET@VEH_TRAIN@HANDCART@BASE_PANIC_JOHN
 *
 * Hash: 0x6E8B87139854022D | Since: 1207 | API-Set: unknown
 */
export declare function _0x6E8B87139854022D(ped: number | IPed): string;
/**
 * No comment provided
 *
 * Hash: 0x6F46F8ACB44C4FC1 | Since: 1207 | API-Set: unknown
 */
export declare function _0x6F46F8ACB44C4FC1(): any;
/**
 * _HAS_*
 *
 * Hash: 0x7020839C7302D8AC | Since: 1207 | API-Set: unknown
 */
export declare function _0x7020839C7302D8AC(ped: number | IPed): boolean;
/**
 * _CLEAR*
 *
 * Hash: 0x704C908E9C405136 | Since: 1207 | API-Set: unknown
 */
export declare function _0x704C908E9C405136(ped: number | IPed): void;
/**
 * _SET_PED_MO*
 *
 * Hash: 0x712B2C2B2471B493 | Since: 1207 | API-Set: unknown
 */
export declare function _0x712B2C2B2471B493(ped: number | IPed, p1: number | string): void;
/**
 * _SET_PED_F*
 *
 * Hash: 0x735662994E60A710 | Since: 1207 | API-Set: unknown
 */
export declare function _0x735662994E60A710(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x7406C71F4AC2FFCC | Since: 1207 | API-Set: unknown
 */
export declare function _0x7406C71F4AC2FFCC(): void;
/**
 * No comment provided
 *
 * Hash: 0x758F081DB204DDDE | Since: 1207 | API-Set: unknown
 */
export declare function _0x758F081DB204DDDE(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x75A082563B4452E5 | Since: 1207 | API-Set: unknown
 */
export declare function _0x75A082563B4452E5(): void;
/**
 * No comment provided
 *
 * Hash: 0x75D3333409CD33CE | Since: 1207 | API-Set: unknown
 */
export declare function _0x75D3333409CD33CE(): void;
/**
 * Used in Script Function NB_EVENT_OVERRIDE__HANDLE__EVENT_DAMAGE_ENTITY
 *
 * Hash: 0x763FA8A9D76EE3A7 | Since: 1311 | API-Set: unknown
 */
export declare function _0x763FA8A9D76EE3A7(ped: number | IPed): number;
/**
 * _IS_I* - _IS_L*
 *
 * Hash: 0x77243ED4F7CAAA55 | Since: 1207 | API-Set: unknown
 */
export declare function _0x77243ED4F7CAAA55(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7ABBD9E449E0DB00 | Since: 1207 | API-Set: unknown
 */
export declare function _0x7ABBD9E449E0DB00(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x7B5C293238EE4F20 | Since: 1207 | API-Set: unknown
 */
export declare function _0x7B5C293238EE4F20(): any;
/**
 * No comment provided
 *
 * Hash: 0x7BB810E8B343AC7B | Since: 1207 | API-Set: unknown
 */
export declare function _0x7BB810E8B343AC7B(): any;
/**
 * Only used in SP
 * _SET_REMOVE_PED*
 *
 * Hash: 0x7C08E7CB8D951B70 | Since: 1207 | API-Set: unknown
 */
export declare function _0x7C08E7CB8D951B70(ped: number | IPed): void;
/**
 * _CLEAR_PED_M*
 *
 * Hash: 0x7C10221CE718AA72 | Since: 1207 | API-Set: unknown
 */
export declare function _0x7C10221CE718AA72(ped: number | IPed): void;
/**
 * _SET_FORMATION_P*
 *
 * Hash: 0x7E5185B979706210 | Since: 1207 | API-Set: unknown
 */
export declare function _0x7E5185B979706210(groupId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7E8F9949B7AABBF0 | Since: 1207 | API-Set: unknown
 */
export declare function _0x7E8F9949B7AABBF0(): void;
/**
 * Only used in R* Script net_moonshine_property
 * _A* - _B*
 *
 * Hash: 0x7EDB3C766B0D073F | Since: 1232 | API-Set: unknown
 */
export declare function _0x7EDB3C766B0D073F(ped: number | IPed): void;
/**
 * _IS_PED_H* - _IS_PED_I*
 *
 * Hash: 0x7EE3A8660F38797E | Since: 1207 | API-Set: unknown
 */
export declare function _0x7EE3A8660F38797E(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7F090958AE95B61B | Since: 1207 | API-Set: unknown
 */
export declare function _0x7F090958AE95B61B(ped: number | IPed): boolean;
/**
 * _ATTACH_*
 *
 * Hash: 0x8101BA1C0B462412 | Since: 1207 | API-Set: unknown
 */
export declare function _0x8101BA1C0B462412(ped: number | IPed, ropeId: number): void;
/**
 * _SET_PED_COMBAT_R - _SET_PED_C*
 *
 * Hash: 0x815C0074A1BC0D93 | Since: 1207 | API-Set: unknown
 */
export declare function _0x815C0074A1BC0D93(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x82CB0F3F0C7785E5 | Since: 1207 | API-Set: unknown
 */
export declare function _0x82CB0F3F0C7785E5(): any;
/**
 * No comment provided
 *
 * Hash: 0x851966E1E35AF491 | Since: 1207 | API-Set: unknown
 */
export declare function _0x851966E1E35AF491(): void;
/**
 * Used in Script Function SKCS_PLAYER_ROBBING
 * _SET_PED_A*
 *
 * Hash: 0x85F500F4E24CA43E | Since: 1207 | API-Set: unknown
 */
export declare function _0x85F500F4E24CA43E(ped: number | IPed): void;
/**
 * _SET_PED_*
 *
 * Hash: 0x86F0B6730C32AC14 | Since: 1207 | API-Set: unknown
 */
export declare function _0x86F0B6730C32AC14(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x86FAFC18E3D4380C | Since: 1207 | API-Set: unknown
 */
export declare function _0x86FAFC18E3D4380C(groupId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x878E8104FA27CDAE | Since: 1207 | API-Set: unknown
 */
export declare function _0x878E8104FA27CDAE(vehicle: number | IVehicle, p1: number | string): void;
/**
 * _CLEAR_PED_E* - _CLEAR_PED_L*
 *
 * Hash: 0x87C2724A56F66020 | Since: 1207 | API-Set: unknown
 */
export declare function _0x87C2724A56F66020(ped: number | IPed): void;
/**
 * Only used in R* Script train_robbery4
 * _SET_PED_D*
 *
 * Hash: 0x8822F124788B8D0A | Since: 1207 | API-Set: unknown
 */
export declare function _0x8822F124788B8D0A(ped: number | IPed): void;
/**
 * If returned true, SET_ENABLE_BOUND_ANKLES is called in R* Script guama2
 * _GET_D* - _GET_E*
 *
 * Hash: 0x8822F139408B8D0A | Since: 1207 | API-Set: unknown
 */
export declare function _0x8822F139408B8D0A(ped: number | IPed): boolean;
/**
 * Used in R* Script generic_weight_control_item
 * _CLEAR_PED_E* - CLEAR_PED_(G?)L*
 *
 * Hash: 0x88A95BB640FC186F | Since: 1207 | API-Set: unknown
 */
export declare function _0x88A95BB640FC186F(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x88B2026A3B0BE33D | Since: 1207 | API-Set: unknown
 */
export declare function _0x88B2026A3B0BE33D(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x897934E868EDDD6C | Since: 1207 | API-Set: unknown
 */
export declare function _0x897934E868EDDD6C(ped: number | IPed): void;
/**
 * _GET_PED_B* - _GET_PED_C*
 *
 * Hash: 0x89816B58C3466262 | Since: 1207 | API-Set: unknown
 */
export declare function _0x89816B58C3466262(ped: number | IPed): any;
/**
 * _SET_PED_O*
 *
 * Hash: 0x899DFA0009AC93DE | Since: 1207 | API-Set: unknown
 */
export declare function _0x899DFA0009AC93DE(ped: number | IPed): void;
/**
 * _SET_C*
 *
 * Hash: 0x89E59DBD15E21177 | Since: 1207 | API-Set: unknown
 */
export declare function _0x89E59DBD15E21177(groupId: number): void;
/**
 * _SET_PED_IN*
 *
 * Hash: 0x8AF46E5159A5B620 | Since: 1207 | API-Set: unknown
 */
export declare function _0x8AF46E5159A5B620(ped: number | IPed, speechParams: number | string): void;
/**
 * `Returns offset (0 < 32) to be used with MISC::SET_BIT`
 * _GET_PED_CR*
 *
 * Hash: 0x8AF8E647D6B2A649 | Since: 1207 | API-Set: unknown
 */
export declare function _0x8AF8E647D6B2A649(groupId: number, ped: number | IPed): number;
/**
 * _SET_FORMATION_*
 *
 * Hash: 0x8AFCCC0F18D70018 | Since: 1207 | API-Set: unknown
 */
export declare function _0x8AFCCC0F18D70018(groupId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x8BA0C65AC15A7D33 | Since: 1207 | API-Set: unknown
 */
export declare function _0x8BA0C65AC15A7D33(): void;
/**
 * Used in Script Function NET_CAMP_DOG_CLIENT_HANDLE_ANIMAL_INTERACTION
 *
 * Hash: 0x8BE24D74D74C6E9B | Since: 1207 | API-Set: unknown
 */
export declare function _0x8BE24D74D74C6E9B(ped: number | IPed): number;
/**
 * _SET_PED_T* - SET_PED_U*
 *
 * Hash: 0x8CB2553C559102C1 | Since: 1207 | API-Set: unknown
 */
export declare function _0x8CB2553C559102C1(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x8D9DB115FBA8E23D | Since: 1207 | API-Set: unknown
 */
export declare function _0x8D9DB115FBA8E23D(): void;
/**
 * Used in Script Function AGGRO_SHOULD_PED_HEAR_DEATH
 * _GET_PED_*
 *
 * Hash: 0x900CA00CE703E1E2 | Since: 1207 | API-Set: unknown
 */
export declare function _0x900CA00CE703E1E2(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x9078FB0557364099 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9078FB0557364099(): void;
/**
 * _IS_PED_S* - _IS_PED_U*
 *
 * Hash: 0x913D04A5176F84C9 | Since: 1207 | API-Set: unknown
 */
export declare function _0x913D04A5176F84C9(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9184788BFF1EDAD7 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9184788BFF1EDAD7(): void;
/**
 * No comment provided
 *
 * Hash: 0x91BAB9E064F036CD | Since: 1207 | API-Set: unknown
 */
export declare function _0x91BAB9E064F036CD(): void;
/**
 * No comment provided
 *
 * Hash: 0x92A1B55A59720395 | Since: 1207 | API-Set: unknown
 */
export declare function _0x92A1B55A59720395(): void;
/**
 * _GET_IS_PED_*
 *
 * Hash: 0x94132D7C8D3575C4 | Since: 1207 | API-Set: unknown
 */
export declare function _0x94132D7C8D3575C4(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9629FAF6460D35CB | Since: 1207 | API-Set: unknown
 */
export declare function _0x9629FAF6460D35CB(group: number | string): void;
/**
 * Only used in R* Script mob4 combined with SET_ANIMAL_TUNING_BOOL_PARAM
 * _SET_PED_S* - _SET_PED_TARGET_*
 *
 * Hash: 0x96595B36D6A2279B | Since: 1207 | API-Set: unknown
 */
export declare function _0x96595B36D6A2279B(animal: number | IPed, toggle: boolean): void;
/**
 * _SET_FORMATION_P*
 *
 * Hash: 0x966DE09688A1DE39 | Since: 1207 | API-Set: unknown
 */
export declare function _0x966DE09688A1DE39(groupId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x96C7B659854DE629 | Since: 1207 | API-Set: unknown
 */
export declare function _0x96C7B659854DE629(): void;
/**
 * _SET_PED_D*
 *
 * Hash: 0x97A38B65EBDA3D50 | Since: 1207 | API-Set: unknown
 */
export declare function _0x97A38B65EBDA3D50(ped: number | IPed): void;
/**
 * _CLEAR*
 *
 * Hash: 0x97B06669AC569003 | Since: 1207 | API-Set: unknown
 */
export declare function _0x97B06669AC569003(ped1: number | IPed, ped2: number | IPed): void;
/**
 * _SET_SCENARIO_PED_* - _SET_SPAWNER_*
 *
 * Hash: 0x97C475212B327666 | Since: 1207 | API-Set: unknown
 */
export declare function _0x97C475212B327666(groupId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9851DE7AEC10B4E1 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9851DE7AEC10B4E1(pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0x992187D975635DF5 | Since: 1311 | API-Set: unknown
 */
export declare function _0x992187D975635DF5(): void;
/**
 * _CAN_PED_*
 *
 * Hash: 0x99DF2639DA76C1DC | Since: 1232 | API-Set: unknown
 */
export declare function _0x99DF2639DA76C1DC(ped1: number | IPed, ped2: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x9A4AC116CC1EEE14 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9A4AC116CC1EEE14(): void;
/**
 * _SET_PED_M*
 *
 * Hash: 0x9AB33CB5834885B3 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9AB33CB5834885B3(ped: number | IPed): void;
/**
 * Only used in SP R* Script winter1: p1 = Winter1Mount
 *
 * Hash: 0x9B65444C07B782BF | Since: 1207 | API-Set: unknown
 */
export declare function _0x9B65444C07B782BF(ped: number | IPed): void;
/**
 * Used in Script Function SKCS_PLAYER_ROBBING
 * _SET_PED_SHOULD_PLAY_* - _SET_PED_SW*
 *
 * Hash: 0x9B9B9FA0EA283E3D | Since: 1207 | API-Set: unknown
 */
export declare function _0x9B9B9FA0EA283E3D(ped: number | IPed): void;
/**
 * _SET_PLAYER_CAN_B* - _SET_PLAYER_CAN_U*
 *
 * Hash: 0x9BBEAF8B0C007F1E | Since: 1207 | API-Set: unknown
 */
export declare function _0x9BBEAF8B0C007F1E(ped: number | IPed): void;
/**
 * _RESET_PED_*
 *
 * Hash: 0x9D8DFE2DE9CB4DFC | Since: 1207 | API-Set: unknown
 */
export declare function _0x9D8DFE2DE9CB4DFC(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x9E66708B2B41F14A | Since: 1207 | API-Set: unknown
 */
export declare function _0x9E66708B2B41F14A(): void;
/**
 * No comment provided
 *
 * Hash: 0x9F0F28B42C4EE80A | Since: 1355 | API-Set: unknown
 */
export declare function _0x9F0F28B42C4EE80A(animal: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x9F933E0985E12C51 | Since: 1207 | API-Set: unknown
 */
export declare function _0x9F933E0985E12C51(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xA064BBABB064446F | Since: 1207 | API-Set: unknown
 */
export declare function _0xA064BBABB064446F(): void;
/**
 * No comment provided
 *
 * Hash: 0xA180FBD502A03125 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA180FBD502A03125(): any;
/**
 * No comment provided
 *
 * Hash: 0xA1FBAC56D38563E2 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA1FBAC56D38563E2(volume: number): boolean;
/**
 * _SET_PED_*
 *
 * Hash: 0xA2116C1E4ED85C24 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA2116C1E4ED85C24(ped: number | IPed, inverted: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xA218D2BBCAA7388C | Since: 1207 | API-Set: unknown
 */
export declare function _0xA218D2BBCAA7388C(): any;
/**
 * No comment provided
 *
 * Hash: 0xA274F51EF7E34B95 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA274F51EF7E34B95(): any;
/**
 * No comment provided
 *
 * Hash: 0xA2B8E47442C76CEC | Since: 1207 | API-Set: unknown
 */
export declare function _0xA2B8E47442C76CEC(): void;
/**
 * No comment provided
 *
 * Hash: 0xA2F8B3B5FEDFC100 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA2F8B3B5FEDFC100(): void;
/**
 * No comment provided
 *
 * Hash: 0xA31D350D66FA1855 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA31D350D66FA1855(): any;
/**
 * No comment provided
 *
 * Hash: 0xA405BF9F01960C16 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA405BF9F01960C16(): void;
/**
 * No comment provided
 *
 * Hash: 0xA4AC05B1A364EBC5 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA4AC05B1A364EBC5(): any;
/**
 * No comment provided
 *
 * Hash: 0xA4B6432E3880F2F9 | Since: 1311 | API-Set: unknown
 */
export declare function _0xA4B6432E3880F2F9(ped: number | IPed): boolean;
/**
 * _DELETE_*
 *
 * Hash: 0xA6D6F03095C88F59 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA6D6F03095C88F59(ped: number | IPed): void;
/**
 * Washing player's face/hands now
 * _CLEAR_PED_E* - _CLEAR_PED_L*
 *
 * Hash: 0xA7A806677F8DE138 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA7A806677F8DE138(ped: number | IPed): void;
/**
 * _CLEAR_PED_B* - _CLEAR_PED_C*
 *
 * Hash: 0xA7DC9266ED6A4E51 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA7DC9266ED6A4E51(ped: number | IPed): void;
/**
 * _SET_ENABLE_B* - _SET_ENABLE_H*
 *
 * Hash: 0xA8A95CECB1906EA2 | Since: 1207 | API-Set: unknown
 */
export declare function _0xA8A95CECB1906EA2(groupId: number): void;
/**
 * Only used in R* Script mob4 and rcm_mason4
 * _SET_PED_DEFENSIVE_* - _SET_PED_DESIRED_*
 *
 * Hash: 0xA90684ED185CCB4B | Since: 1207 | API-Set: unknown
 */
export declare function _0xA90684ED185CCB4B(animal: number | IPed): void;
/**
 * _SET_PED_P* - _SET_PED_R*
 *
 * Hash: 0xA967D6A8ED2D713B | Since: 1207 | API-Set: unknown
 */
export declare function _0xA967D6A8ED2D713B(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xAA6C49AE90A32299 | Since: 1207 | API-Set: unknown
 */
export declare function _0xAA6C49AE90A32299(ped: number | IPed, p1: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xAAC0EE3B4999ABB5 | Since: 1207 | API-Set: unknown
 */
export declare function _0xAAC0EE3B4999ABB5(ped: number | IPed, targetPed: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xAD3330E3C3E98007 | Since: 1207 | API-Set: unknown
 */
export declare function _0xAD3330E3C3E98007(): void;
/**
 * No comment provided
 *
 * Hash: 0xAE6B68A83ABBE7C0 | Since: 1207 | API-Set: unknown
 */
export declare function _0xAE6B68A83ABBE7C0(): void;
/**
 * _CLEAR_PED_D*
 *
 * Hash: 0xAF041C10756C30FB | Since: 1207 | API-Set: unknown
 */
export declare function _0xAF041C10756C30FB(ped: number | IPed): void;
/**
 * Used to set up bad guy groups in nb_kidnapped R* Script (MP_RE_KIDNAPPED): p1 = 4.f
 * _SET_FORMATION_*
 *
 * Hash: 0xB05CC690CDE8A4A9 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB05CC690CDE8A4A9(groupId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB06F5F1DEF417216 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB06F5F1DEF417216(): void;
/**
 * Used in Script Function SATCHEL_COUNT_BREAKDOWN_COMPONENTS
 *
 * Hash: 0xB29C553BA582D09E | Since: 1207 | API-Set: unknown
 */
export declare function _0xB29C553BA582D09E(model: number | string, damageCleanliness: number): [any, any];
/**
 * _RESET_PED_C*
 *
 * Hash: 0xB4B7C92FCE7347B7 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB4B7C92FCE7347B7(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xB65927F861E7AE39 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB65927F861E7AE39(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB8E2D655E1D5BD39 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB8E2D655E1D5BD39(): any;
/**
 * _IS_PED_J* - _IS_PED_L*
 *
 * Hash: 0xB91AB3BE7F655D49 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB91AB3BE7F655D49(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB9BDFAE609DFB7C5 | Since: 1207 | API-Set: unknown
 */
export declare function _0xB9BDFAE609DFB7C5(): void;
/**
 * No comment provided
 *
 * Hash: 0xBB3E5370EBB6BE28 | Since: 1207 | API-Set: unknown
 */
export declare function _0xBB3E5370EBB6BE28(): any;
/**
 * No comment provided
 *
 * Hash: 0xBC1DC48270468444 | Since: 1207 | API-Set: unknown
 */
export declare function _0xBC1DC48270468444(): void;
/**
 * _IS_PED_M* - _IS_PED_O*
 *
 * Hash: 0xBD0E4F52F6D95242 | Since: 1207 | API-Set: unknown
 */
export declare function _0xBD0E4F52F6D95242(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xBF567DF2BEF211A6 | Since: 1207 | API-Set: unknown
 */
export declare function _0xBF567DF2BEF211A6(): void;
/**
 * Only used in R* Script tg_p (CLIENT__AMBIENT_POPULATION - Player starts the populate in region)
 *
 * Hash: 0xBFA6B7731C3BAF02 | Since: 1207 | API-Set: unknown
 */
export declare function _0xBFA6B7731C3BAF02(): void;
/**
 * _SET_PED_P* - _SET_PED_R*
 *
 * Hash: 0xC17A94CC8FC3C61A | Since: 1207 | API-Set: unknown
 */
export declare function _0xC17A94CC8FC3C61A(entity: number | IEntity, boneId: number): void;
/**
 * _FORCE_PED_*
 *
 * Hash: 0xC2722B252C79E641 | Since: 1232 | API-Set: unknown
 */
export declare function _0xC2722B252C79E641(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xC2EF407645BEECDC | Since: 1207 | API-Set: unknown
 */
export declare function _0xC2EF407645BEECDC(): any;
/**
 * _SET_PED_M*
 *
 * Hash: 0xC48AF420371C7407 | Since: 1207 | API-Set: unknown
 */
export declare function _0xC48AF420371C7407(ped: number | IPed, grapple: number | string): any;
/**
 * _SET_H* - _SET_I*
 *
 * Hash: 0xC5B78E41DCF8227C | Since: 1207 | API-Set: unknown
 */
export declare function _0xC5B78E41DCF8227C(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xC6136B40FFFB778B | Since: 1207 | API-Set: unknown
 */
export declare function _0xC6136B40FFFB778B(): void;
/**
 * No comment provided
 *
 * Hash: 0xC6981AFF6D2A71C2 | Since: 1207 | API-Set: unknown
 */
export declare function _0xC6981AFF6D2A71C2(): void;
/**
 * No comment provided
 *
 * Hash: 0xC6C4E15CF7D52FEA | Since: 1207 | API-Set: unknown
 */
export declare function _0xC6C4E15CF7D52FEA(): void;
/**
 * No comment provided
 *
 * Hash: 0xC9151483CC06A414 | Since: 1207 | API-Set: unknown
 */
export declare function _0xC9151483CC06A414(ped: number | IPed): void;
/**
 * Not implemented.
 *
 * Hash: 0xC991EF46FE323867 | Since: 1207 | API-Set: unknown
 */
export declare function _0xC991EF46FE323867(ped: number | IPed): void;
/**
 * _SET_PLAYER_N* - _SET_PLAYER_S*
 *
 * Hash: 0xC99F104BDF8C7F5A | Since: 1207 | API-Set: unknown
 */
export declare function _0xC99F104BDF8C7F5A(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xCA95C156C14B2054 | Since: 1207 | API-Set: unknown
 */
export declare function _0xCA95C156C14B2054(): void;
/**
 * No comment provided
 *
 * Hash: 0xCAC43D060099EA72 | Since: 1207 | API-Set: unknown
 */
export declare function _0xCAC43D060099EA72(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xCB1A3864C524F784 | Since: 1207 | API-Set: unknown
 */
export declare function _0xCB1A3864C524F784(): void;
/**
 * No comment provided
 *
 * Hash: 0xCB86D3E3E3708901 | Since: 1207 | API-Set: unknown
 */
export declare function _0xCB86D3E3E3708901(): any;
/**
 * Only used in R* SP Scripts
 * _GET_PLAYER_W* - _GET_RANDOM_*
 *
 * Hash: 0xCB8F4C9343EBE240 | Since: 1207 | API-Set: unknown
 */
export declare function _0xCB8F4C9343EBE240(ped: number | IPed, eventType: number | string): [boolean, Vector3];
/**
 * No comment provided
 *
 * Hash: 0xCBDE59C48F2B06F5 | Since: 1207 | API-Set: unknown
 */
export declare function _0xCBDE59C48F2B06F5(): void;
/**
 * _SET_PED_R* - _SET_PED_S*
 *
 * Hash: 0xCD9E5F94A2F38683 | Since: 1207 | API-Set: unknown
 */
export declare function _0xCD9E5F94A2F38683(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xCDFB8C04D4C95D9B | Since: 1207 | API-Set: unknown
 */
export declare function _0xCDFB8C04D4C95D9B(): void;
/**
 * _SET_PED_COMBAT_*
 *
 * Hash: 0xCF0B19806473D324 | Since: 1207 | API-Set: unknown
 */
export declare function _0xCF0B19806473D324(ped: number | IPed, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xD049920CD29F6CC8 | Since: 1207 | API-Set: unknown
 */
export declare function _0xD049920CD29F6CC8(): void;
/**
 * No comment provided
 *
 * Hash: 0xD049FDAF089FDDB0 | Since: 1207 | API-Set: unknown
 */
export declare function _0xD049FDAF089FDDB0(ped: number | IPed, p1: number | string): void;
/**
 * Params: p1 either a 1 or 0, so perhaps BOOL
 * _SET_PED_A*
 *
 * Hash: 0xD103F6DBB5442BE8 | Since: 1207 | API-Set: unknown
 */
export declare function _0xD103F6DBB5442BE8(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xD2F0FE8805D91647 | Since: 1207 | API-Set: unknown
 */
export declare function _0xD2F0FE8805D91647(): void;
/**
 * No comment provided
 *
 * Hash: 0xD355E2F1BB41087E | Since: 1207 | API-Set: unknown
 */
export declare function _0xD355E2F1BB41087E(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD4D403EA031F351C | Since: 1207 | API-Set: unknown
 */
export declare function _0xD4D403EA031F351C(ped: number | IPed): boolean;
/**
 * Used in Script Function LA_CHECK_ALERTED
 * _GET_IS_PED_*
 *
 * Hash: 0xD55DB4466D00A258 | Since: 1207 | API-Set: unknown
 */
export declare function _0xD55DB4466D00A258(legendaryAnimal: number | IPed): boolean;
/**
 * _SET_FORMATION_*
 *
 * Hash: 0xD5BD1B5318A81994 | Since: 1207 | API-Set: unknown
 */
export declare function _0xD5BD1B5318A81994(groupId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xD61FCF9FCFD515B7 | Since: 1207 | API-Set: unknown
 */
export declare function _0xD61FCF9FCFD515B7(): void;
/**
 * No comment provided
 *
 * Hash: 0xD7D2F45C56A4F4DF | Since: 1207 | API-Set: unknown
 */
export declare function _0xD7D2F45C56A4F4DF(): void;
/**
 * METAPED_PLAYER_COMPONENTS_SET_META_TYPE_TO_BE_BYPASSED: Setting visibility
 * p1 is mostly 10
 * _CLEAR_PED_N* - _CLEAR_PED_W*
 *
 * Hash: 0xD8544F6260F5F01E | Since: 1232 | API-Set: unknown
 */
export declare function _0xD8544F6260F5F01E(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xD8CEEED54C672B5D | Since: 1207 | API-Set: unknown
 */
export declare function _0xD8CEEED54C672B5D(): void;
/**
 * No comment provided
 *
 * Hash: 0xD97BC27AC039F681 | Since: 1311 | API-Set: unknown
 */
export declare function _0xD97BC27AC039F681(): any;
/**
 * No comment provided
 *
 * Hash: 0xDD9540E7B1C9714F | Since: 1207 | API-Set: unknown
 */
export declare function _0xDD9540E7B1C9714F(ped: number | IPed, p1: number | string, r: number, g: number, b: number): void;
/**
 * _SET_FORMATION_P*
 *
 * Hash: 0xDDFAD4DEAA7FA362 | Since: 1207 | API-Set: unknown
 */
export declare function _0xDDFAD4DEAA7FA362(groupId: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDEDBED3020DA49DC | Since: 1207 | API-Set: unknown
 */
export declare function _0xDEDBED3020DA49DC(): void;
/**
 * No comment provided
 *
 * Hash: 0xDEE8D30AA5C2E28D | Since: 1207 | API-Set: unknown
 */
export declare function _0xDEE8D30AA5C2E28D(ped: number | IPed, p1: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xE0FE107AB174D64A | Since: 1207 | API-Set: unknown
 */
export declare function _0xE0FE107AB174D64A(): void;
/**
 * _SET_FORMATION_P*
 *
 * Hash: 0xE1103300F3456DE7 | Since: 1207 | API-Set: unknown
 */
export declare function _0xE1103300F3456DE7(groupId: number): void;
/**
 * _C*
 *
 * Hash: 0xE1AADD0055D76603 | Since: 1207 | API-Set: unknown
 */
export declare function _0xE1AADD0055D76603(ped: number | IPed, entity: number | IEntity, boneIndex1: number, boneIndex2: number, pos: Vector3): void;
/**
 * No comment provided
 *
 * Hash: 0xE1B3BE07D3AADDED | Since: 1207 | API-Set: unknown
 */
export declare function _0xE1B3BE07D3AADDED(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xE20027B414BFE6C7 | Since: 1207 | API-Set: unknown
 */
export declare function _0xE20027B414BFE6C7(): void;
/**
 * _SET_PED_R* -_SET_PED_S*
 *
 * Hash: 0xE29D8CD66553DBAA | Since: 1207 | API-Set: unknown
 */
export declare function _0xE29D8CD66553DBAA(horse: number | IPed): void;
/**
 * _SET_PED_IN*
 *
 * Hash: 0xE37ACEE15AC50C7E | Since: 1207 | API-Set: unknown
 */
export declare function _0xE37ACEE15AC50C7E(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xE4C95E0AE31C6512 | Since: 1207 | API-Set: unknown
 */
export declare function _0xE4C95E0AE31C6512(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xE4EF4382E22C780C | Since: 1207 | API-Set: unknown
 */
export declare function _0xE4EF4382E22C780C(): void;
/**
 * _SET_D*
 *
 * Hash: 0xE50C9816B3F22D8B | Since: 1311 | API-Set: unknown
 */
export declare function _0xE50C9816B3F22D8B(ped: number | IPed, p1: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xE6CB36F43A95D75F | Since: 1207 | API-Set: unknown
 */
export declare function _0xE6CB36F43A95D75F(): void;
/**
 * No comment provided
 *
 * Hash: 0xE735A7DA22E88359 | Since: 1207 | API-Set: unknown
 */
export declare function _0xE735A7DA22E88359(): void;
/**
 * Only used in R* Script nb_animal_attack: p2 = 120000
 * _SET_PED_SH* - _SET_PED_SP*
 *
 * Hash: 0xE737D5F14304A2EC | Since: 1207 | API-Set: unknown
 */
export declare function _0xE737D5F14304A2EC(ped: number | IPed, player: number | string | IPlayer): void;
/**
 * No comment provided
 *
 * Hash: 0xE8ABE3B73FC7FE17 | Since: 1207 | API-Set: unknown
 */
export declare function _0xE8ABE3B73FC7FE17(): void;
/**
 * No comment provided
 *
 * Hash: 0xE9E06EA514A69061 | Since: 1207 | API-Set: unknown
 */
export declare function _0xE9E06EA514A69061(): void;
/**
 * No comment provided
 *
 * Hash: 0xEA8763E505AFD49A | Since: 1207 | API-Set: unknown
 */
export declare function _0xEA8763E505AFD49A(): void;
/**
 * Washing player's face/hands now
 * _FA* - _FI*
 *
 * Hash: 0xEB8886E1065654CD | Since: 1207 | API-Set: unknown
 */
export declare function _0xEB8886E1065654CD(ped: number | IPed): void;
/**
 * If returned true: PROCESS_RESIZING_TRACKING_BOUNDS_VOLUME - Scaling UP the bounds due to tracking
 * If returned false: PROCESS_RESIZING_TRACKING_BOUNDS_VOLUME - Scaling DOWN the bounds due to tracking
 * _IS_PED_T* - _IS_PED_U*
 *
 * Hash: 0xEBAAC9A750E7563B | Since: 1207 | API-Set: unknown
 */
export declare function _0xEBAAC9A750E7563B(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEBD49472BCCF7642 | Since: 1207 | API-Set: unknown
 */
export declare function _0xEBD49472BCCF7642(): void;
/**
 * _SET_C*
 *
 * Hash: 0xEC60D1D225BC50AA | Since: 1207 | API-Set: unknown
 */
export declare function _0xEC60D1D225BC50AA(ped: number | IPed): void;
/**
 * Only used in R* Script nb_stalking_hunter
 *
 * Hash: 0xED1C764997A86D5A | Since: 1207 | API-Set: unknown
 */
export declare function _0xED1C764997A86D5A(ped1: number | IPed, ped2: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xEEDC9B29314B2733 | Since: 1207 | API-Set: unknown
 */
export declare function _0xEEDC9B29314B2733(): void;
/**
 * _ADD_*
 *
 * Hash: 0xEF371232BC6053E1 | Since: 1207 | API-Set: unknown
 */
export declare function _0xEF371232BC6053E1(ped: number | IPed): void;
/**
 * Used in Script Function MOONSHINE_BAND_CLIENT_PATRON_UPDATE
 *
 * Hash: 0xF47D54B986F0A346 | Since: 1232 | API-Set: unknown
 */
export declare function _0xF47D54B986F0A346(ped: number | IPed, danceIntensity: number): void;
/**
 * Only used in SP Scripts
 * Returns count / index
 * _C*
 *
 * Hash: 0xF4860514AD354226 | Since: 1207 | API-Set: unknown
 */
export declare function _0xF4860514AD354226(shockingEvent: number, pos: Vector3): [number, number];
/**
 * No comment provided
 *
 * Hash: 0xF634E2892220EF34 | Since: 1207 | API-Set: unknown
 */
export declare function _0xF634E2892220EF34(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xF6A8C4B4A11AE89C | Since: 1207 | API-Set: unknown
 */
export declare function _0xF6A8C4B4A11AE89C(): any;
/**
 * No comment provided
 *
 * Hash: 0xF7327ACC7A89AEF1 | Since: 1207 | API-Set: unknown
 */
export declare function _0xF7327ACC7A89AEF1(): any;
/**
 * No comment provided
 *
 * Hash: 0xF917F92BF22ECBAB | Since: 1207 | API-Set: unknown
 */
export declare function _0xF917F92BF22ECBAB(): void;
/**
 * No comment provided
 *
 * Hash: 0xF9331B3A314EB49D | Since: 1207 | API-Set: unknown
 */
export declare function _0xF9331B3A314EB49D(ped: number | IPed): boolean;
/**
 * Used in Script Function PLAYER_HEAD_TRACKING_MAINTAIN
 *
 * Hash: 0xF9CBD46433E36713 | Since: 1207 | API-Set: unknown
 */
export declare function _0xF9CBD46433E36713(ped: number | IPed, targetEntity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xFA0D206B489A6846 | Since: 1207 | API-Set: unknown
 */
export declare function _0xFA0D206B489A6846(): void;
/**
 * No comment provided
 *
 * Hash: 0xFA742B82D093D848 | Since: 1207 | API-Set: unknown
 */
export declare function _0xFA742B82D093D848(): void;
/**
 * _HAS_PED_*
 *
 * Hash: 0xFA8C10DCE0706D43 | Since: 1207 | API-Set: unknown
 */
export declare function _0xFA8C10DCE0706D43(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xFC23348F0F4E245F | Since: 1207 | API-Set: unknown
 */
export declare function _0xFC23348F0F4E245F(): void;
/**
 * _DISABLE_A* - _DISABLE_C*
 *
 * Hash: 0xFD3C31A2E45671E7 | Since: 1207 | API-Set: unknown
 */
export declare function _0xFD3C31A2E45671E7(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xFD8E853F0BC2E942 | Since: 1207 | API-Set: unknown
 */
export declare function _0xFD8E853F0BC2E942(): void;
/**
 * METAPED_PLAYER_COMPONENTS_SET_META_TYPE_TO_BE_BYPASSED: Setting visibility
 * _SET_M* - _SET_P*
 *
 * Hash: 0xFEA6126C34DF2532 | Since: 1207 | API-Set: unknown
 */
export declare function _0xFEA6126C34DF2532(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xFFA1594703ED27CA | Since: 1207 | API-Set: unknown
 */
export declare function _0xFFA1594703ED27CA(ped: number | IPed): void;
/**
 * _GET_PED_COMBAT_M* - _GET_PED_C*
 *
 * Hash: 0xFFDE295662405B25 | Since: 1207 | API-Set: unknown
 */
export declare function _0xFFDE295662405B25(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xE9B168527B337BF0 | Since: 1207 | API-Set: unknown
 */
export declare function addStayOutVolume(ped: number | IPed, volume: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xE37287EE358939C3 | Since: 1311 | API-Set: unknown
 */
export declare function addSubscribeToLegendaryBlips(ped: number | IPed): boolean;
/**
 * flag: see ADD_SCENARIO_BLOCKING_AREA
 *
 * Hash: 0x4C39C95AE5DB1329 | Since: 1207 | API-Set: unknown
 */
export declare function addScenarioBlockingVolume(volume: number, flag: number): any;
/**
 * Forces transition now, called together with 0xD65FDC686A031C83
 *
 * Hash: 0x6D07B371E9439019 | Since: 1207 | API-Set: unknown
 */
export declare function addScenarioTransition(ped: number | IPed): void;
/**
 * Creates ped overlay in texture override data and returns it's index.
 * This index are used for further overlay editing.
 *
 * albedoHash: a hash of overlay's albedo texture
 * colorType: a color type(from 0 to 2). 0 is used for overlays with RGB colors usually.
 *
 * Hash: 0x86BB5FF45F193A02 | Since: 1207 | API-Set: unknown
 */
export declare function addTextureLayer(textureId: number, albedoHash: number | string, normalHash: number | string, materialHash: number | string, blendType: number, texAlpha: number, sheetGridIndex: number): number;
/**
 * Apply cold intensity to ped from 0.0 to 1.0
 *
 * Hash: 0x1F8215D0E446F593 | Since: 1207 | API-Set: unknown
 */
export declare function applyColdTo(ped: number | IPed, intensity: number): void;
/**
 * seems to only work with PD_Vomit ?
 *
 * Hash: 0x58D32261AE0F0843 | Since: 1207 | API-Set: unknown
 */
export declare function applyDamagePackToBone(ped: number | IPed, boneId: number, xOffset: number, yOffset: number, zOffset: number, rot: Vector3, damagePack: string): void;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/clothes/metaped_outfits.lua
 *
 * Hash: 0x74F512E29CB717E2 | Since: 1207 | API-Set: unknown
 */
export declare function applyMetaPedOutfit(requestId: number, ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD3A7B003ED343FD9 | Since: 1207 | API-Set: unknown
 */
export declare function applyShopItemTo(ped: number | IPed, componentHash: number | string, immediately: boolean, isMp: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x0B46E25761519058 | Since: 1207 | API-Set: unknown
 */
export declare function applyTextureOn(ped: number | IPed, componentHash: number | string, textureId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x5E420FF293EE5472 | Since: 1207 | API-Set: unknown
 */
export declare function areAllAmbientReservationsReady(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7C00CFC48A782DC0 | Since: 1207 | API-Set: unknown
 */
export declare function attachVolumeToEntity(volume: number, entity: number | IEntity, offsetX: number, offsetY: number, offsetZ: number, rot: Vector3): void;
/**
 * Returns true if `listener` can hear `source`.
 * If `includeNoiseBoost` is true, the source's noise radius is applied (easier to hear).
 * It treats the source as louder—its current noise expands the effective hearing range (by subtracting noiseRadius² from dist²), while false uses the baseline distance-only check (stealth).
 *
 * Hash: 0x0EA9EACBA3B01601 | Since: 1207 | API-Set: unknown
 */
export declare function canHearTargetPed(source: number | IPed, listener: number | IPed, includeNoiseBoost: boolean): number;
/**
 * p2 is always 0, p3 is always 0, p4 is always 1
 *
 * Hash: 0xAB643407D0B26F07 | Since: 1207 | API-Set: unknown
 */
export declare function canUseScenarioPoint(ped: number | IPed, scenario: number): boolean;
/**
 * Alters entity's stamina by 'amount'. Can be negative (to drain stamina). float amount: -1000.0 - 1000.0
 *
 * Hash: 0xC3D4B754C0E86B9E | Since: 1207 | API-Set: unknown
 */
export declare function changeStamina(ped: number | IPed, amount: number): boolean;
/**
 * Used in Script Functions PLAYER_HORSE_RELEASE_HORSE_TO_AMBIENT_WORLD (p1 = true), HORSE_SETUP_PLAYER_HORSE_ATTRIBUTES (p1 = false)
 * Set to false for player horse in scripts and seems it's only true when releasing/changing a player horse? Cannot determine what effect it has, but it doesn't seem to affect _GET_HORSE_TAMING_STATE
 *
 * Hash: 0xBCC76708E5677E1D | Since: 1207 | API-Set: unknown
 */
export declare function clearActiveAnimalOwner(horse: number | IPed, clear: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x949B2F9ED2917F5D | Since: 1207 | API-Set: unknown
 */
export declare function clearActionDisableFlag(ped: number | IPed, actionDisableFlag: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7F5D88333EE8A86F | Since: 1207 | API-Set: unknown
 */
export declare function clearBloodDamageFacial(ped: number | IPed): void;
/**
 * Params: p1 = 1 in R* Scripts
 *
 * Hash: 0x78815FC52832B690 | Since: 1207 | API-Set: unknown
 */
export declare function clearCombatStyle(ped: number | IPed): void;
/**
 * _CLEAR_PED_COMBAT_*
 *
 * Hash: 0x1FA132CBCD7CB239 | Since: 1207 | API-Set: unknown
 */
export declare function clearCombatStyleMod(ped: number | IPed, combatStyleModHash: number | string): void;
/**
 * Clears locomotion archetype
 *
 * Hash: 0x4FD80C3DD84B817B | Since: 1207 | API-Set: unknown
 */
export declare function clearDesiredLocoForModel(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x58F7DB5BD8FA2288 | Since: 1207 | API-Set: unknown
 */
export declare function clearDesiredLocoMotionType(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xEAE3B5B019C8D23F | Since: 1207 | API-Set: unknown
 */
export declare function clearGrappleFlag(ped: number | IPed, flag: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBBF6D1D07C02D00A | Since: 1207 | API-Set: unknown
 */
export declare function clearTargetActionDisableFlag(ped: number | IPed, actionDisableFlag: number): void;
/**
 * Removes every texture layer
 * Old Name: _RESET_PED_TEXTURE_2
 *
 * Hash: 0xB63B9178D0F58D82 | Since: 1207 | API-Set: unknown
 */
export declare function clearTexture(textureId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x627F7F3A0C4C51FF | Since: 1207 | API-Set: unknown
 */
export declare function clearPeltFromHorse(horse: number | IPed, peltId: number): void;
/**
 * Returns vehicle (desired) speed
 * _COMPUTE_(VEHICLE_SPEED_USING_BLEND_RATIO?)*
 *
 * Hash: 0x46BF2A810679D6E6 | Since: 1207 | API-Set: unknown
 */
export declare function computeMoveBlendRatioForMaxSpeed(ped: number | IPed, maxMoveBlendRatio: number): number;
/**
 * Related to dead animals items/loots
 * Notice: skinningQuality is partially calculated using pedQuality
 *
 * Hash: 0x6B89FAA36FC909A3 | Since: 1207 | API-Set: unknown
 */
export declare function computeSatchelItemForCarcass(ped: number | IPed, damageCleanliness: number, skinningQuality: number): [number, any];
/**
 * Returns vehicle speed
 *
 * Hash: 0xCA95924C893A0C91 | Since: 1207 | API-Set: unknown
 */
export declare function computeSpeedForMoveBlendRatio(ped: number | IPed, speed: number): number;
/**
 * Creates a handle to an instance of "CScriptResource_GravityWell", this system forces local ped to target specified position when moving, however player still can interrupt this.
 * Can be useful to "point" player at some specific position.
 * Only works while on-foot.
 *
 * _CREATE_[P-Z]
 *
 * Hash: 0x4F5EBE70081E5A20 | Since: 1207 | API-Set: unknown
 */
export declare function createGravityWell(pos: Vector3, heading: number, radius: number, stopAtDestination: boolean): number;
/**
 * Only used in SP scripts, for example odriscolls1: BOOLS: true, true, true, false, false
 *
 * Hash: 0x0BCD4091C8EABA42 | Since: 1207 | API-Set: unknown
 */
export declare function createMeta(requestId: number, pos: Vector3, heading: number): number;
/**
 * Creates prop from metaped asset bundle
 * https://github.com/femga/rdr3_discoveries/blob/master/objects/metaped_asset_bundles_list.lua
 * Creates a pickup-able metaped component. asset doesn't seems to be related to component hashes. Hash example : 0xD20354AB (https ://i.imgur.com/dzHkcDb.png)
 *
 * Hash: 0x9641A9A20310F6B8 | Since: 1207 | API-Set: unknown
 */
export declare function createMetaAsset(asset: number | string, pos: Vector3, rot: Vector3): number;
/**
 * Creates metaped from ped outfit requestId. See _REQUEST_METAPED_OUTFIT
 *
 * Hash: 0xEAF682A14F8E5F53 | Since: 1207 | API-Set: unknown
 */
export declare function createMetaOutfitPed(requestId: number, pos: Vector3, heading: number): number;
/**
 * No comment provided
 *
 * Hash: 0x19C975B81BE53C28 | Since: 1207 | API-Set: unknown
 */
export declare function detachVolumeFromEntity(volume: number, entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0xE1965A380342BE1F | Since: 1355 | API-Set: unknown
 */
export declare function disableAllLookAtRequests(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x80038740C96AD17F | Since: 1207 | API-Set: unknown
 */
export declare function disableAmbientLookAtRequests(): void;
/**
 * No comment provided
 *
 * Hash: 0xC0E880B7A441164D | Since: 1207 | API-Set: unknown
 */
export declare function doesMetaOutfitExistForPedModel(outfit: number | string, model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x4FF3C2B4E6A196C1 | Since: 1207 | API-Set: unknown
 */
export declare function doesMetaSuboutfitExistForPedModel(outfit: number | string, suboutfit: number | string, model: number | string): boolean;
/**
 * Note: you have to update your ped's variation after calling (using 0xCC8CA3E88256E58F)
 *
 * Body Types:
 * MPCREATOR_NEUTRAL
 * MPCREATOR_SKINNY
 * MPCREATOR_SKINNY_MUSCULAR
 * MPCREATOR_HEAVY
 * MPCREATOR_HEAVY_MUSCULAR
 *
 * eBodyWeightOutfit (pedattributes.ymt):
 * -2045421226 (smallest)
 * -1745814259
 * -325933489
 * -1065791927
 * -844699484
 * -1273449080
 * 927185840
 * 149872391
 * 399015098
 * -644349862
 * 1745919061 (default)
 * 1004225511
 * 1278600348
 * 502499352
 * -2093198664
 * -1837436619
 * 1736416063
 * 2040610690
 * -1173634986
 * -867801909
 * 1960266524 (biggest)
 *
 * https://github.com/femga/rdr3_discoveries/blob/master/peds_customization/ped_outfits.lua
 *
 * Alt name: _EQUIP_META_PED_OUTFIT_COMPONENT
 *
 * Hash: 0x1902C4CFCC5BE57C | Since: 1207 | API-Set: unknown
 */
export declare function equipMetaOutfit(ped: number | IPed, hash: number | string): void;
/**
 * Changes Multiplayer ped face and body type components, they can be stacked
 * Params: p3 = 1
 * Body shape for mp_male from 124 - 128, 110 - 115 for mp_female
 * Face shape for mp_male from 110 - 123, 96 - 109 for mp_female
 * Cloth type for mp_male from 0 - 109, 0 - 95 for mp_female
 *
 * Hash: 0xA5BAE410B03E7371 | Since: 1207 | API-Set: unknown
 */
export declare function equipMetaOutfitExtra(ped: number | IPed, component: number): void;
/**
 * Sets the outfit preset for the ped. The presetId is an index which determines its preset outfit. p2 is always false in the scripts.
 * If p2 is true as player, then certain components like facial hair and hair will not be removed.
 * Old name: _SET_PED_OUTFIT_PRESET
 *
 * Hash: 0x77FF8D35EEC6BBC4 | Since: 1207 | API-Set: unknown
 */
export declare function equipMetaOutfitPreset(ped: number | IPed, presetId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x66FF395445A88A6E | Since: 1207 | API-Set: unknown
 */
export declare function equipMetaSuboutfit(ped: number | IPed, suboutfit: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x8B3CB08158E98481 | Since: 1207 | API-Set: unknown
 */
export declare function fakeSetLocoInjured(ped: number | IPed, enabled: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x1CE875505D45338A | Since: 1207 | API-Set: unknown
 */
export declare function forceDeath(ped: number | IPed, pedKiller: number | IPed, weapon: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xDC9273D95976BA22 | Since: 1207 | API-Set: unknown
 */
export declare function getAccuracyAgainstLocalPlayerModifier(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xF103823FFE72BB49 | Since: 1207 | API-Set: unknown
 */
export declare function getActiveAnimalOwner(animal: number | IPed): number;
/**
 * Returns kneeling, sitting, squating, and sleeping scenario hashes
 *
 * Hash: 0x569F1E1237508DEB | Since: 1207 | API-Set: unknown
 */
export declare function getActiveDynamicScenario(ped: number | IPed): number;
/**
 * Returns kneeling, sitting, squating, and sleeping scenario hashes
 *
 * Hash: 0xC22AA08A8ADB87D4 | Since: 1207 | API-Set: unknown
 */
export declare function getActiveDynamicScenario2(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x268B3AEBF032A88D | Since: 1207 | API-Set: unknown
 */
export declare function getBlockingOfNonTemporaryEvents(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6F43C351A5D51E2F | Since: 1207 | API-Set: unknown
 */
export declare function getCarriedPeltSkins(mount: number | IPed): [number, any];
/**
 * No comment provided
 *
 * Hash: 0x79443D56C8DF45EE | Since: 1207 | API-Set: unknown
 */
export declare function getCarrierAsHuman(entity: number | IEntity): number;
/**
 * No comment provided
 *
 * Hash: 0xA033D7E4BBF9844D | Since: 1207 | API-Set: unknown
 */
export declare function getCarrierAsMount(entity: number | IEntity): number;
/**
 * No comment provided
 *
 * Hash: 0x09B83E68DE004CD4 | Since: 1207 | API-Set: unknown
 */
export declare function getCarrierAs(entity: number | IEntity): number;
/**
 * No comment provided
 *
 * Hash: 0x9B90842304C938A7 | Since: 1207 | API-Set: unknown
 */
export declare function getCategoryOfComponentAtIndex(ped: number | IPed, componentIndex: number): number;
/**
 * Gets MetaPedExpression at index specified
 *
 * For index, see: _SET_CHAR_EXPRESSION
 *
 * Old name: _GET_PED_FACE_FEATURE
 *
 * Hash: 0xFD1BA1EEF7985BB8 | Since: 1207 | API-Set: unknown
 */
export declare function getCharExpression(ped: number | IPed, index: number): number;
/**
 * No comment provided
 *
 * Hash: 0x3CC4A718C258BDD0 | Since: 1207 | API-Set: unknown
 */
export declare function getDefaultRelationshipGroupHash(modelHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xD806CD2A4F2C2996 | Since: 1207 | API-Set: unknown
 */
export declare function getFirstEntityIsCarrying(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x13A1B061007C906B | Since: 1207 | API-Set: unknown
 */
export declare function getGroupFormation(groupId: number): number;
/**
 * No comment provided
 *
 * Hash: 0x95B8E397B8F4360F | Since: 1207 | API-Set: unknown
 */
export declare function getHealthRechargeMultiplier(ped: number | IPed): number;
/**
 * Returns an int based on enum eTamingState
 *
 * enum eTamingState
 * {
 * ATS_INVALID = 0,
 * ATS_INACTIVE,
 * ATS_TARGET_DETECTED,
 * ATS_CALLED_OUT,
 * ATS_MOUNTABLE,
 * ATS_BEING_PATTED,
 * ATS_BREAKING_ACTIVE,
 * ATS_SPOOKED,
 * ATS_RETREATING,
 * ATS_FLEEING
 * };
 *
 * Hash: 0x454AD4DA6C41B5BD | Since: 1207 | API-Set: unknown
 */
export declare function getHorseTamingState(horse: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x88D9D76D78065487 | Since: 1207 | API-Set: unknown
 */
export declare function getIncapacitationTimeRemaining(ped: number | IPed): number;
/**
 * If p2 is false, then this native will return true until the interaction is complete. If true, the native will return true until player pockets robbery item.
 * _GET_IS_PED_[M-R]*
 *
 * Hash: 0xE33F98BD76490ABC | Since: 1207 | API-Set: unknown
 */
export declare function getIsBeingRobbed(ped: number | IPed, player: number | string | IPlayer, trueUntilPlayerPocketsItem: boolean): boolean;
/**
 * No comment provided
 *
 * Hash: 0x68821369A2CEADD5 | Since: 1207 | API-Set: unknown
 */
export declare function getIsCommandHashPresent(ped: number | IPed, commandHash: number | string): boolean;
/**
 * Returns true if ped is in a dispute another ped (pedInDisputeWith can also be 0)
 *
 * Hash: 0x331550B212014B92 | Since: 1207 | API-Set: unknown
 */
export declare function getIsInDisputeWithPed(ped: number | IPed, pedInDisputeWith: number | IPed): boolean;
/**
 * motivationState: see _SET_PED_MOTIVATION
 *
 * Hash: 0x33FA048675821DA7 | Since: 1207 | API-Set: unknown
 */
export declare function getIsMotivationStateEnabled(ped: number | IPed, motivationState: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x0C31C51168E80365 | Since: 1207 | API-Set: unknown
 */
export declare function getLassoedLassoer(ped: number | IPed): number;
/**
 * _IS_PED_S* - _IS_PED_U*
 *
 * Hash: 0x833F0053340EF413 | Since: 1207 | API-Set: unknown
 */
export declare function getLassoerOf(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xB65A4DAB460A19BD | Since: 1207 | API-Set: unknown
 */
export declare function getLassoTarget(ped: number | IPed): number;
/**
 * Returns last horse the ped was leading
 *
 * Hash: 0x693126B5D0457D0D | Since: 1232 | API-Set: unknown
 */
export declare function getLastLedMount(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x4C8B59171957BCF7 | Since: 1207 | API-Set: unknown
 */
export declare function getLastMount(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x5064DB5083C29921 | Since: 1207 | API-Set: unknown
 */
export declare function getLastVehicleDraftHorseWasAttachedTo(horse: number | IPed): number;
/**
 * lootFlag: see SET_LOOTING_FLAG
 *
 * Hash: 0xE4C11F104620DDCE | Since: 1207 | API-Set: unknown
 */
export declare function getLootingFlag(ped: number | IPed, lootFlag: number): boolean;
/**
 * Returns p1 value for 0x8E84119A23C16623,  get index outfit using GET_NUM_META_PED_OUTFITS
 *
 * Hash: 0x62FDF4E678E40CC6 | Since: 1207 | API-Set: unknown
 */
export declare function getMetaOutfitByIndex(entity: number | IEntity, index: number): number;
/**
 * No comment provided
 *
 * Hash: 0xB292203008EBBAAC | Since: 1207 | API-Set: unknown
 */
export declare function getMetaRace(ped: number | IPed): number;
/**
 * enum eMetaPedType
 * {
 * MPT_MALE,
 * MPT_FEMALE,
 * MPT_TEEN,
 * MPT_ANIMAL,
 * MPT_NONE
 * };
 *
 * Hash: 0xEC9A1261BF0CE510 | Since: 1207 | API-Set: unknown
 */
export declare function getMetaType(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x90403E8107B60E81 | Since: 1207 | API-Set: unknown
 */
export declare function getNumComponentsIn(ped: number | IPed): number;
/**
 * Works similar to 0x90403E8107B60E81 (_GET_NUM_COMPONENTS_IN_PED) but is used to get category hashes instead
 *
 * Hash: 0xA622E66EEE92A08D | Since: 1207 | API-Set: unknown
 */
export declare function getNumComponentCategoriesIn(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x313778EDCA9158E2 | Since: 1207 | API-Set: unknown
 */
export declare function getNumFreeSlotsInPool(): number;
/**
 * No comment provided
 *
 * Hash: 0x62DE46F061CAA468 | Since: 1207 | API-Set: unknown
 */
export declare function getNumReservedAmbientsDesired(): number;
/**
 * No comment provided
 *
 * Hash: 0x5C16855277819BBF | Since: 1207 | API-Set: unknown
 */
export declare function getNumReservedAmbientsReady(): number;
/**
 * No comment provided
 *
 * Hash: 0x16F2C8C084AB2092 | Since: 1207 | API-Set: unknown
 */
export declare function getNumReservedHealth(ped: number | IPed): any;
/**
 * returns the number of reserved stamina similar to _GET_NUM_RESERVED_HEALTH
 *
 * Hash: 0xFC3B580C4380B5B7 | Since: 1207 | API-Set: unknown
 */
export declare function getNumReservedStamina(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x7BE607DAFF382FD2 | Since: 1207 | API-Set: unknown
 */
export declare function getsInCombatWithTarget(ped: number | IPed, itemset: any, flag: number): number;
/**
 * AI_ATTITUDE_NEUTRAL = 0,
 * AI_ATTITUDE_FRIENDLY,
 * AI_ATTITUDE_WARY,
 * AI_ATTITUDE_COMBATIVE,
 * AI_ATTITUDE_NEVER_MET
 *
 * Hash: 0x7CC2186C32D3540A | Since: 1207 | API-Set: unknown
 */
export declare function getAttitude(ped: number | IPed, player: number | string | IPlayer): number;
/**
 * Can be used to get a peds foliage active status: variableName = FoliageActive
 *
 * Hash: 0x498F2E77982D6945 | Since: 1207 | API-Set: unknown
 */
export declare function getBlackboardBool(ped: number | IPed, variableName: string): boolean;
/**
 * Can be used to get a peds foliage raw height: variableName = FoliageHeight
 *
 * Hash: 0x56E58D4D118FB45E | Since: 1207 | API-Set: unknown
 */
export declare function getBlackboardFloat(ped: number | IPed, variableName: string): number;
/**
 * No comment provided
 *
 * Hash: 0xBF5E791BBBF90A3C | Since: 1207 | API-Set: unknown
 */
export declare function getBlackboardHash(ped: number | IPed, variableName: string): number;
/**
 * No comment provided
 *
 * Hash: 0xEC6B59BE445FEC51 | Since: 1207 | API-Set: unknown
 */
export declare function getBrawlingStyle(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x7A4E00364B5D727B | Since: 1207 | API-Set: unknown
 */
export declare function getCanBeIncapacitatedThisFrame(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xCC2B20596E29E4E3 | Since: 1207 | API-Set: unknown
 */
export declare function getCombatAttribute(ped: number | IPed, attributeIndex: number): boolean;
/**
 * Returns category hash that each ped component has. Hash examples: MASKS, HATS, HEADS, HORSE_MANES
 *
 * Hash: 0xCCB97B51893C662F | Since: 1207 | API-Set: unknown
 */
export declare function getComponentCategoryByIndex(ped: number | IPed, index: number): number;
/**
 * Returns true if _GET_PED_DAMAGE_CLEANLINESS was ever lower than 2
 *
 * Hash: 0x6CFC373008A1EDAF | Since: 1207 | API-Set: unknown
 */
export declare function getDamaged(ped: number | IPed): boolean;
/**
 * enum ePedDamageCleanliness
 * {
 * PED_DAMAGE_CLEANLINESS_POOR,
 * PED_DAMAGE_CLEANLINESS_GOOD,
 * PED_DAMAGE_CLEANLINESS_PERFECT
 * };
 *
 * Hash: 0x88EFFED5FE8B0B4A | Since: 1207 | API-Set: unknown
 */
export declare function getDamageCleanliness(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xEF2E6F870783369B | Since: 1207 | API-Set: unknown
 */
export declare function getDefensiveVolume(ped: number | IPed): number;
/**
 * Return the dirt level of the ped (0.0 - 1.0). p1 is always set to 1.
 * The second parameter is treated as a boolean selector (0 or 1). Internally it indexes a 2-slot graphics/appearance bank (base + 0xB8 * index + 0xE4); Rockstar scripts pass 1.
 *
 * Hash: 0x0105FEE8F9091255 | Since: 1207 | API-Set: unknown
 */
export declare function getDirtLevel(ped: number | IPed, useCompositeLayer: boolean): number;
/**
 * Returns ped drunk level
 * _H* or _I*
 *
 * Hash: 0x6FB76442469ABD68 | Since: 1207 | API-Set: unknown
 */
export declare function getDrunkness(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xD0B7AEB56229D317 | Since: 1207 | API-Set: unknown
 */
export declare function getGrappler(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xF3C873ED0C595109 | Since: 1207 | API-Set: unknown
 */
export declare function getGrappleFlag(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x753B15AD0FD6F3E3 | Since: 1207 | API-Set: unknown
 */
export declare function getGrappleStyle(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xC3995D396F1D97B6 | Since: 1207 | API-Set: unknown
 */
export declare function getHasSimplePlayerMemoryChanged(ped: number | IPed, memoryType: number, ms: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1D491CCF7211FB74 | Since: 1207 | API-Set: unknown
 */
export declare function getHeight(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x31167ED4324B758D | Since: 1207 | API-Set: unknown
 */
export declare function getIdRange(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x89BFDF6D53145545 | Since: 1207 | API-Set: unknown
 */
export declare function getIncapacitationHealth(ped: number | IPed): number;
/**
 * Used for AUDIO / ANIMSCENE (REFERENCE_REGIONAL_CHARACTER)
 * Params: p1 = 0
 * _GET_PED_IN*
 *
 * Hash: 0xE76687023D8C8505 | Since: 1207 | API-Set: unknown
 */
export declare function getIndexFromPerscharHash(perscharModel: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xD7AD3C7EBAF88C92 | Since: 1207 | API-Set: unknown
 */
export declare function getInteractionPersonality(ped: number | IPed): number;
/**
 * https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/Lasso%20Hogtie%20Flags
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/LASSO_HOGTIE_FLAG
 *
 * Hash: 0x2C76FA0E01681F8D | Since: 1207 | API-Set: unknown
 */
export declare function getLassoHogtieFlag(ped: number | IPed, flagId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x1F714E7A9DADFC42 | Since: 1207 | API-Set: unknown
 */
export declare function getLastDroppedHat(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x1B710E6F4AB69341 | Since: 1355 | API-Set: unknown
 */
export declare function getLodMultiplier(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xCB42AFE2B613EE55 | Since: 1207 | API-Set: unknown
 */
export declare function getMaxStamina(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x6127F25ED21C533C | Since: 1207 | API-Set: unknown
 */
export declare function getMeleeActionPhase(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x30569F348D126A5A | Since: 1207 | API-Set: unknown
 */
export declare function getMetaOutfitHash(ped: number | IPed): number;
/**
 * PS_SMALL = 0,
 * PS_MEDIUM,
 * PS_MEDIUM_LARGE,
 * PS_LARGE,
 * PS_EXTRA_LARGE
 *
 * Hash: 0xA65AA1ACE81E5A77 | Since: 1311 | API-Set: unknown
 */
export declare function getModelSizeFromHash(modelHash: number | string): number;
/**
 * If targetPed is set to 0 the ped motivationState affects everyone
 *
 * Hash: 0x42688E94E96FD9B4 | Since: 1207 | API-Set: unknown
 */
export declare function getMotivation(ped: number | IPed, motivationState: number, targetPed: number | IPed): number;
/**
 * Returns Ped Quality to be used to calculate Skinning Quality
 *
 * enum ePedQuality
 * {
 * PQ_INVALID = -1,
 * PQ_LOW,
 * PQ_MEDIUM,
 * PQ_HIGH,
 * PQ_MAX
 * };
 *
 * Hash: 0x7BCC6087D130312A | Since: 1207 | API-Set: unknown
 */
export declare function getQuality(ped: number | IPed): number;
/**
 * Returns boneIndex
 *
 * Hash: 0xC5303F460A40D21D | Since: 1207 | API-Set: unknown
 */
export declare function getRagdollBoneIndex(ped: number | IPed, boneId: number): number;
/**
 * Gets a registered/attached prop entity for a particular ped. Second parameter will detach the prop entity from the ped if true. Props primarily appear to come from scenarios, such as a broom or hay bale.
 *
 * Known props: https://pastebin.com/ap2NEJqB
 *
 * Hash: 0x4D0D2E3D8BC000EB | Since: 1207 | API-Set: unknown
 */
export declare function getRegisterProp(ped: number | IPed, propName: string, detachProp: boolean): number;
/**
 * normalized / non normalized
 * 0.0        / 1000.0         STARTED IN WRITHE STAGE
 * 1.0        / 0.0            END OF WRITHE, DEAD
 * -1.0                        DEAD
 *
 * Returns some value from AI task 562 (unknown).
 *
 * Hash: 0xEBE89623EB861271 | Since: 1207 | API-Set: unknown
 */
export declare function getRemainingRevivalTime(ped: number | IPed, normalized: boolean): number;
/**
 * Returns wether `0x1E017404784AA6A3` was applied on the ped.
 * some hashs MAR2_RIDE1, MAR2_RIDE1, RBCH1_RIDE1, SAD5_RIDE1
 *
 * Hash: 0x7C8AA850617651D9 | Since: 1207 | API-Set: unknown
 */
export declare function getSpeechRelationship(ped: number | IPed, p1: number | string): any;
/**
 * No comment provided
 *
 * Hash: 0x775A1CA7893AA8B5 | Since: 1207 | API-Set: unknown
 */
export declare function getStamina(ped: number | IPed): number;
/**
 * Returns stamina normalizedValue / normalizedUnlockedMax
 *
 * Hash: 0x22F2A386D43048A9 | Since: 1207 | API-Set: unknown
 */
export declare function getStaminaNormalized(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x65C75FDCCAC86464 | Since: 1355 | API-Set: unknown
 */
export declare function getTranquilizer(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x3D9F958834AB9C30 | Since: 1207 | API-Set: unknown
 */
export declare function getWhoHogitiedThisPed(ped: number | IPed): number;
/**
 * Returns peltId
 *
 * Hash: 0x0CEEB6F4780B1F2F | Since: 1207 | API-Set: unknown
 */
export declare function getPeltFromHorse(horse: number | IPed, index: number): number;
/**
 * Returns animal skin quality modifier
 *
 * Hash: 0xEE2D5C819A65BF26 | Since: 1311 | API-Set: unknown
 */
export declare function getPlayerCurrentAnimalDamageModifier(player: number | string | IPlayer): number;
/**
 * Returns dismounted timestamp
 *
 * Hash: 0xE8D1CCB9375C101B | Since: 1207 | API-Set: unknown
 */
export declare function getPlayerDismountTimestamp(mount: number | IPed, player: number | string | IPlayer): number;
/**
 * Returns how deep the water is below the ped (if in water)
 * -1.0f = Not in water
 * 10.0f = Max water depth
 *
 * Hash: 0x2942457417A5FD24 | Since: 1207 | API-Set: unknown
 */
export declare function getPlayerWaterDepth(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xB676EFDA03DADA52 | Since: 1207 | API-Set: unknown
 */
export declare function getRiderOfMount(mount: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x63342C50EC115CE8 | Since: 1207 | API-Set: unknown
 */
export declare function getShopItemBaseLayers(shopItem: number | string, ped: number | IPed, metapedType: number): [boolean, number, number, number, number, number, number, number, number];
/**
 * Returns the current shop item component at index and it's wearable state
 *
 * Hash: 0x77BA37622E22023B | Since: 1207 | API-Set: unknown
 */
export declare function getShopItemComponentAtIndex(ped: number | IPed, index: number): [number, any, number];
/**
 * No comment provided
 *
 * Hash: 0x5FF9A878C3D115B8 | Since: 1207 | API-Set: unknown
 */
export declare function getShopItemComponentCategory(componentHash: number | string, metapedType: number, isMP: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0x7E02E4218D916B94 | Since: 1207 | API-Set: unknown
 */
export declare function getShopItemHatComponent(ped: number | IPed, metapedType: number): any;
/**
 * Returns the number of wearable states available for a shop item / component. p2 seems to be true in scripts.
 *
 * For use with 0x6243635AF2F1B826 (_GET_SHOP_ITEM_AVAILABLE_WEARABLE_STATE_BY_INDEX)
 *
 * Hash: 0xFFCC2DB2D9953401 | Since: 1207 | API-Set: unknown
 */
export declare function getShopItemNumWearableStates(componentHash: number | string, isMpFemale: boolean): number;
/**
 * Gets an available wearable state by index for a shop item / component - it does not retreive what the current state is. p3 seems to be true in scripts.
 *
 * Use 0xFFCC2DB2D9953401 (_GET_SHOP_ITEM_NUM_WEARABLE_STATES) to get the number of available wearable states
 *
 * Hash: 0x6243635AF2F1B826 | Since: 1207 | API-Set: unknown
 */
export declare function getShopItemWearableStateByIndex(componentHash: number | string, wearableStateIndex: number, isMpFemale: boolean): number;
/**
 * No comment provided
 *
 * Hash: 0x825F6DD559A0895B | Since: 1207 | API-Set: unknown
 */
export declare function getStaminaDepletionMultiplier(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xE7687EB2F634ABF0 | Since: 1207 | API-Set: unknown
 */
export declare function getStaminaRechargeMultiplier(ped: number | IPed): number;
/**
 * _GET_WA*
 *
 * Hash: 0x92C8EACA29F6BED6 | Since: 1207 | API-Set: unknown
 */
export declare function getTotalDamageFromAi(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0x849BD6C6314793D0 | Since: 1207 | API-Set: unknown
 */
export declare function getTransportIsSeatedOn(ped: number | IPed): number;
/**
 * No comment provided
 *
 * Hash: 0xE4770DA1B8FF4FD1 | Since: 1207 | API-Set: unknown
 */
export declare function getVehicleDraftHorseIsAttachedTo(horse: number | IPed): number;
/**
 * Ped Command Hash are special commands, that can be activated to change conditional anim variations or trigger transitions between conditional anims.
 * https://github.com/femga/rdr3_discoveries/blob/master/animations/scenarios
 *
 * Hash: 0xD65FDC686A031C83 | Since: 1207 | API-Set: unknown
 */
export declare function giveHashCommand(ped: number | IPed, commandHash: number | string, activationDuration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3BBDD6143FF16F98 | Since: 1207 | API-Set: unknown
 */
export declare function giveScenarioProp(ped: number | IPed, _object: number | IObject, conditionalAnim: string): boolean;
/**
 * Only used in SP R* Script rcm_jack2
 *
 * Hash: 0xA0774E388CE4A679 | Since: 1207 | API-Set: unknown
 */
export declare function giveScenarioPropDynamic(ped: number | IPed, _object: number | IObject): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB0B2C6D170B0E8E5 | Since: 1207 | API-Set: unknown
 */
export declare function hasMetaAssetLoaded(requestId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x610438375E5D1801 | Since: 1207 | API-Set: unknown
 */
export declare function hasMetaOutfitLoaded(requestId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC0940AC858C1E126 | Since: 1207 | API-Set: unknown
 */
export declare function hasMetaRequestLoaded(requestId: number): boolean;
/**
 * this native checks if player has shot a specific ped for the duration passed p2 is in milliseconds
 *
 * Hash: 0x9C81338B2E62CE0A | Since: 1207 | API-Set: unknown
 */
export declare function hasBeenShotByPlayerRecently(player: number | string | IPlayer, ped: number | IPed, duration: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x29FCE825613FEFCA | Since: 1207 | API-Set: unknown
 */
export declare function hasBeenShovedRecently(ped: number | IPed, ms: number): boolean;
/**
 * See _REQUEST_PED_EMOTIONAL_PRESET
 *
 * Hash: 0xDE3904B22695D9F9 | Since: 1207 | API-Set: unknown
 */
export declare function hasEmotionalPresetLoaded(ped: number | IPed, name: string): boolean;
/**
 * Returns whether a ped has interacted with a player recently.
 * flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/0x947E43F544B6AB34
 *
 * Hash: 0x947E43F544B6AB34 | Since: 1207 | API-Set: unknown
 */
export declare function hasInteractedWithPlayerRecently(ped: number | IPed, player: number | string | IPlayer, flag: number, ms: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB7DBB2986B87E230 | Since: 1207 | API-Set: unknown
 */
export declare function hasShotRecently(ped: number | IPed, seconds: number): boolean;
/**
 * limb: 3 = Left Hand, 4 = Left Arm, 6 = Right Hand, 7 = Right Arm, 9 = Left Foot, 10 = Left Leg, 12 = Right Foot, 13 = Right Leg, 37 = Head
 *
 * Hash: 0xBA208A8D6399A3AC | Since: 1207 | API-Set: unknown
 */
export declare function hasTakenGoreDamage(ped: number | IPed, limb: number): boolean;
/**
 * _H* - _I*
 *
 * Hash: 0xBAE08F00021BFFB2 | Since: 1207 | API-Set: unknown
 */
export declare function horseAgitate(mount: number | IPed, kickOffRider: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xF6262491C7704A63 | Since: 1207 | API-Set: unknown
 */
export declare function incapacitatedRevive(ped: number | IPed, ped2: number | IPed): void;
/**
 * Returns true only if it's a player ped and an animal as well.
 * _IS_ANY_* - _IS_CONTROL_*
 *
 * Hash: 0x0E2F43516F998269 | Since: 1311 | API-Set: unknown
 */
export declare function isAnimalControlledByAPlayer(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x7FC84E85D98F063D | Since: 1207 | API-Set: unknown
 */
export declare function isAnimalInteractionRunning(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x88A5564B19C15391 | Since: 1207 | API-Set: unknown
 */
export declare function isAnimalSkinned(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x93FFD92F05EC32FD | Since: 1207 | API-Set: unknown
 */
export declare function isMetaAssetValid(requestId: number): boolean;
/**
 * Returns true if given ped is a fish.
 * _IS_ME* - _IS_MO*
 *
 * Hash: 0x118D476A6F1A13F1 | Since: 1207 | API-Set: unknown
 */
export declare function isMetaFish(ped: number | IPed): boolean;
/**
 * Used in script function HORSE_IS_META_PED_OUTFIT_SADDLE_EQUIPPED
 *
 * Hash: 0x98082246107A6ACF | Since: 1207 | API-Set: unknown
 */
export declare function isMetaOutfitEquipped(ped: number | IPed, outfit: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB25E57FC8E37114D | Since: 1207 | API-Set: unknown
 */
export declare function isMetaOutfitRequestValid(requestId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x43E4DA469541A9C9 | Since: 1207 | API-Set: unknown
 */
export declare function isMetaRequestValid(requestId: number): boolean;
/**
 * checks if a ped is using a component category
 * see component category hashes here https://raw.githubusercontent.com/femga/rdr3_discoveries/refs/heads/master/clothes/cloth_hash_names.lua
 * Old name: _IS_META_PED_USING_COMPONENT
 *
 * Hash: 0xFB4891BD7578CDC1 | Since: 1207 | API-Set: unknown
 */
export declare function isMetaUsingComponentCategory(ped: number | IPed, componentCategory: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAAB0FE202E9FC9F0 | Since: 1207 | API-Set: unknown
 */
export declare function isMountSeatFree(mount: number | IPed, seat: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB346C85D49CC998E | Since: 1207 | API-Set: unknown
 */
export declare function isActionDisableFlagEnabled(ped: number | IPed, actionDisableFlag: number): boolean;
/**
 * detects if ped is afloat in water like swimming or in a boat (driving or standing on it)
 *
 * Hash: 0xDC88D06719070C39 | Since: 1207 | API-Set: unknown
 */
export declare function isAfloat(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x137772000DAF42C5 | Since: 1207 | API-Set: unknown
 */
export declare function isChild(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x59643424B68D52B5 | Since: 1207 | API-Set: unknown
 */
export declare function isClimbingLadder(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xB086C8C0F5701D14 | Since: 1207 | API-Set: unknown
 */
export declare function isCowering(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC488B8C0E52560D8 | Since: 1207 | API-Set: unknown
 */
export declare function isDoingScenarioTransition(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x226CF9B159E38F42 | Since: 1207 | API-Set: unknown
 */
export declare function isDragging(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x50F124E6EF188B22 | Since: 1207 | API-Set: unknown
 */
export declare function isDrunk(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x57779B55B83E2BEA | Since: 1207 | API-Set: unknown
 */
export declare function isIntimidated(ped: number | IPed): boolean;
/**
 * _IS_PED_IN*
 *
 * Hash: 0x7583A9D35248B83F | Since: 1207 | API-Set: unknown
 */
export declare function isInvestigating(ped: number | IPed): boolean;
/**
 * If returned true: There are enemy peds near friendly turn in ped. Going to aggro.
 * If returned false: Moving back to idle as there aren't any remaining enemy peds near ped
 * _IS_PED_IN_*
 *
 * Hash: 0x078076AB50FB117F | Since: 1207 | API-Set: unknown
 */
export declare function isInPoint(ped: number | IPed, pos: Vector3, radius: number): boolean;
/**
 * _IS_PED_L* - _IS_PED_M*
 *
 * Hash: 0x917760CFE7A0E0F1 | Since: 1207 | API-Set: unknown
 */
export declare function isLeadingAnyGroup(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xAA9F048DCF69B6DC | Since: 1207 | API-Set: unknown
 */
export declare function isModelSuppressed(model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x8D9BFCE3352DE47F | Since: 1207 | API-Set: unknown
 */
export declare function isQueuedForDeletion(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0xD6740E14E4CEFC0B | Since: 1207 | API-Set: unknown
 */
export declare function isSliding(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x02AA2096FE00F3E1 | Since: 1207 | API-Set: unknown
 */
export declare function isTargetActionDisableFlagEnabled(ped: number | IPed, actionDisableFlag: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xEBB208D6AE712C03 | Since: 1207 | API-Set: unknown
 */
export declare function isUsingActionMode2(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x5102307CE88798EB | Since: 1207 | API-Set: unknown
 */
export declare function isVisibilityTracked(ped: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x91A5F9CBEBB9D936 | Since: 1207 | API-Set: unknown
 */
export declare function isScenarioBlockingAreaValid(): boolean;
/**
 * No comment provided
 *
 * Hash: 0x6E5CBCB3941D7D08 | Since: 1207 | API-Set: unknown
 */
export declare function isTarget(ped: number | IPed, targetPed: number | IPed): boolean;
/**
 * No comment provided
 *
 * Hash: 0x31DC8D3F216D8509 | Since: 1207 | API-Set: unknown
 */
export declare function isTextureValid(textureId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x772A1969F649E902 | Since: 1207 | API-Set: unknown
 */
export declare function isThisModelAHorse(model: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x164CECC59E70DF86 | Since: 1207 | API-Set: unknown
 */
export declare function isTrackedVisibilityPercentageNotLessThan(ped: number | IPed, percent: number): boolean;
/**
 * _IS_TRACKED_* - IS_V*
 *
 * Hash: 0xAF61B3CD8C3B82C3 | Since: 1207 | API-Set: unknown
 */
export declare function isUsingSlipstream(ped: number | IPed): boolean;
/**
 * something to do with speech lines?
 * some hashs MAR2_RIDE1, MAR2_RIDE1, RBCH1_RIDE1, SAD5_RIDE1
 *
 * Hash: 0x1E017404784AA6A3 | Since: 1207 | API-Set: unknown
 */
export declare function applySpeechRelationship(ped: number | IPed, p1: number | string): boolean;
/**
 * No comment provided
 *
 * Hash: 0x935CF6E42BAF7F4D | Since: 1207 | API-Set: unknown
 */
export declare function clearLocoMotion(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xBD6B242B8BD5543A | Since: 1207 | API-Set: unknown
 */
export declare function duelingDidPlayerHeadshotOpponent(ped: number | IPed): boolean;
/**
 * target: 0 affects everyone
 * duration: -1 indefinite
 * flag: always 4 in R* Scripts
 *
 * Hash: 0xAAB050DA48B57978 | Since: 1207 | API-Set: unknown
 */
export declare function emotionalPresetLocoMotion(ped: number | IPed, presetName: string, targetPed: number | IPed, duration: number, flag: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2B4CE170DE09F346 | Since: 1207 | API-Set: unknown
 */
export declare function removeSpeechRelationship(ped: number | IPed, p1: number | string): void;
/**
 * memoryType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/_PED_SET_SIMPLE_PLAYER_MEMORY
 *
 * Hash: 0xC494C76A34266E82 | Since: 1207 | API-Set: unknown
 */
export declare function setSimplePlayerMemory(ped: number | IPed, memoryType: number): void;
/**
 * No comment provided
 *
 * Hash: 0x06FA94C835787C64 | Since: 1207 | API-Set: unknown
 */
export declare function wasKilledByHeadshot(ped: number | IPed): boolean;
/**
 * Plays a conditional locomotion animation with an attached prop item,commonly used for LOCO attachment interactions (e.g., attaching/carrying a crate) ex conditionalAnimName: LOCO_ATTACH_CRATE_TNT
 *
 * Hash: 0xCE7A6C1D5CDE1F9D | Since: 1207 | API-Set: unknown
 */
export declare function playConditionalAnimWithPropitem(ped: number | IPed, _object: number | IObject): [string, string];
/**
 * Retruns the carried ped
 *
 * Hash: 0x6B67320E0D57856A | Since: 1207 | API-Set: unknown
 */
export declare function refreshCarriedForPed(ped: number | IPed): any;
/**
 * Returns loot state
 * enum eLootState
 * {
 * LAP_NONE,
 * LAP_RESUMING,
 * LAP_GETTING_ON_FOOT,
 * LAP_DISTANT_NAV,
 * LAP_CHOOSING_ACTION,
 * LAP_APPROACHING,
 * LAP_ENTERING,
 * LAP_LOOTING,
 * LAP_EXITING
 * };
 *
 * _POSSE_* - _REGISTER_HATED*
 *
 * Hash: 0x5463C962BC7777C3 | Since: 1207 | API-Set: unknown
 */
export declare function refreshLootStateFor(ped: number | IPed): [number, number];
/**
 * p1 is always 1
 *
 * Hash: 0x59BD177A1A48600A | Since: 1207 | API-Set: unknown
 */
export declare function refreshMetaShopItems(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xD8736EFDA38EDC5C | Since: 1207 | API-Set: unknown
 */
export declare function registerHatedTargetsInArea(ped: number | IPed, pos: Vector3, radius: number): void;
/**
 * No comment provided
 *
 * Hash: 0x13E7320C762F0477 | Since: 1207 | API-Set: unknown
 */
export declare function releaseMetaAssetRequest(requestId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4592B8B9B0EF5F48 | Since: 1207 | API-Set: unknown
 */
export declare function releaseMetaOutfitRequest(requestId: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3972F78A78B5D9DF | Since: 1207 | API-Set: unknown
 */
export declare function releaseMetaRequest(requestId: number): void;
/**
 * Removes a texture created by 0xC5E7204F322E49EB.
 *
 * Hash: 0x6BEFAA907B076859 | Since: 1207 | API-Set: unknown
 */
export declare function releaseTexture(textureId: number): void;
/**
 * Removes gravity well by handle returned from 0x4F5EBE70081E5A20
 *
 * Hash: 0x87247BC60B60BED8 | Since: 1207 | API-Set: unknown
 */
export declare function removeGravityWell(handle: number): void;
/**
 * No comment provided
 *
 * Hash: 0xDE7B2B4144906CDF | Since: 1207 | API-Set: unknown
 */
export declare function removeMotionTypeAsset(nameHash: number | string, ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xA6F67BEC53379A32 | Since: 1207 | API-Set: unknown
 */
export declare function removeBlackboardBool(ped: number | IPed, variableName: string): void;
/**
 * No comment provided
 *
 * Hash: 0x411189E51B8020BA | Since: 1207 | API-Set: unknown
 */
export declare function removeBlackboardFloat(ped: number | IPed, variableName: string): void;
/**
 * No comment provided
 *
 * Hash: 0x0E17378642156790 | Since: 1207 | API-Set: unknown
 */
export declare function removeBlackboardHash(ped: number | IPed, variableName: string): void;
/**
 * No comment provided
 *
 * Hash: 0x81B75428A7813E67 | Since: 1207 | API-Set: unknown
 */
export declare function removeBlackboardInt(ped: number | IPed, variableName: string): void;
/**
 * See _REQUEST_PED_EMOTIONAL_PRESET
 *
 * Hash: 0xFC3BAB1801A8255A | Since: 1207 | API-Set: unknown
 */
export declare function removeEmotionalPreset(ped: number | IPed, name: string): void;
/**
 * No comment provided
 *
 * Hash: 0x5337B721C51883A9 | Since: 1207 | API-Set: unknown
 */
export declare function removeFromMount(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x96C349DE04C49011 | Since: 1207 | API-Set: unknown
 */
export declare function removeOverlay(textureId: number, overlayId: number): void;
/**
 * Stops and clears a running conditional locomotion animation previously started by _PLAY_CONDITIONAL_ANIM_WITH_PROPITEM ex: P_CS_CRATETNT01X_PH_R_HAND
 * This does not remove the physical prop entity itself, but rather ends the active locomotion/conditional animation associated with it.
 *
 * Hash: 0x3A50753042B6891B | Since: 1207 | API-Set: unknown
 */
export declare function removePropitemConditonalAnim(ped: number | IPed): string;
/**
 * No comment provided
 *
 * Hash: 0x0CAB404CD2DB41F5 | Since: 1207 | API-Set: unknown
 */
export declare function removeStayOutVolume(ped: number | IPed, volume: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0x011A42FD923D41CA | Since: 1311 | API-Set: unknown
 */
export declare function removeSubscribeToLegendaryBlips(ped: number | IPed): boolean;
/**
 * Directly removes a shop item component from a ped
 * Params: p2 and p3 are always 0
 *
 * Hash: 0x0D7FFA1B2F69ED82 | Since: 1355 | API-Set: unknown
 */
export declare function removeShopItemFrom(ped: number | IPed, componentHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x4707E9C23D8CA3FE | Since: 1207 | API-Set: unknown
 */
export declare function removeTarget(ped: number | IPed, targetPed: number | IPed): void;
/**
 * Returns requestId
 * Params: p1 = 1 in R* Scripts (Used in SP only)
 *
 * Hash: 0xF97C34C33487D569 | Since: 1207 | API-Set: unknown
 */
export declare function requestMeta(model: number | string): number;
/**
 * Returns requestId
 * Params: p1 = 1 in R* Scripts
 *
 * Hash: 0x91FE941F9FCFB702 | Since: 1207 | API-Set: unknown
 */
export declare function requestMetaAssetBundle(asset: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xF6D9E1F3560CBF8E | Since: 1207 | API-Set: unknown
 */
export declare function requestMetaComponent(metaPedType: number): any;
/**
 * https://github.com/femga/rdr3_discoveries/blob/master/clothes/metaped_outfits.lua
 * Returns requestId, to be used with 0x74F512E29CB717E2
 *
 * Hash: 0x13154A76CE0CF9AB | Since: 1207 | API-Set: unknown
 */
export declare function requestMetaOutfit(model: number | string, outfit: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xF7EA250B9A919E03 | Since: 1207 | API-Set: unknown
 */
export declare function requestMotionTypeAsset(nameHash: number | string, ped: number | IPed): void;
/**
 * Return the status of the wanted carrying action of a ped. unk3 is usually 4.You can also get the entity being carried and the entity it was taken from with a buffer.
 *
 * Status:
 * `INVALID = 0,
 * STARTING = 1,
 * PROGRESSING = 2,
 * FINISHING = 3`
 * CARRYING TYPES:
 * `UNK_0 = -1,
 * UNK_1 = 0,
 * UNK_2 = 1,
 * UNK_3 = 2,
 * UNK_4 = 3,
 * CARRYING_FROM_GROUND = 4,
 * CARRYING_FROM_MOUNT = 5,
 * PUTTING_DOWN_GROUND = 6,
 * PUTTING_DOWN_MOUNT = 7,
 * UNK_9 = 8,
 * UNK_10 = 9,
 * UNK_11 = 10`
 * Filters:
 * `ENTITY_ONLY = 0,
 * NOTHING = 1,
 * ENTITY_AND_TAKEN_FROM_ENTITY = 2`
 *
 * Hash: 0x4642182A298187D0 | Since: 1207 | API-Set: unknown
 */
export declare function requestCarryingState(ped: number | IPed, carryingType: number, outEntsCount: number, filterFlags: number): [number, number];
/**
 * For more information, see common:/data/emotional_presets.meta
 *
 * Hash: 0x5C3C55EAAD19915F | Since: 1207 | API-Set: unknown
 */
export declare function requestEmotionalPreset(ped: number | IPed, name: string): void;
/**
 * mood: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/fwFacialAnimRequest__Mood
 * Params: p2 = 6 in R* Scripts
 *
 * Hash: 0x8B3B71C80A29A4BB | Since: 1207 | API-Set: unknown
 */
export declare function requestFacialMoodThisFrame(ped: number | IPed, mood: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xBDED916A9F9B0604 | Since: 1207 | API-Set: unknown
 */
export declare function requestForScenarioType(ped: number | IPed, _object: number | IObject, scenarioType: number | string): any;
/**
 * Known get up animation types: REAR, FRONT
 *
 * Hash: 0xEAA8242C8479C27D | Since: 1207 | API-Set: unknown
 */
export declare function requestGetupAnimation(ped: number | IPed, getUpType: string): void;
/**
 * No comment provided
 *
 * Hash: 0xBEC65C6049B3219D | Since: 1207 | API-Set: unknown
 */
export declare function requestPropScenario(ped: number | IPed, _object: number | IObject): [any, string, string, string];
/**
 * Creates a texture override data for ped and returns it's index.
 * So you can replace any texture of any ped's component.
 * Also, you can add overlays on it, such as aging, lipstick and more.
 * Textures can be reused by multiple peds at once.
 * You can keep only 32 textures at once(including other peds).
 *
 * https://github.com/femga/rdr3_discoveries/blob/master/clothes/change_overlays_script.lua
 * materialHash: https://github.com/femga/rdr3_discoveries/blob/master/clothes/cloth_drawable_albedo_normal_material_TEMPORARY.lua
 *
 * Hash: 0xC5E7204F322E49EB | Since: 1207 | API-Set: unknown
 */
export declare function requestTexture(albedoHash: number | string, normalHash: number | string, materialHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0xED9582B3DA8F02B4 | Since: 1207 | API-Set: unknown
 */
export declare function reserveAmbients(numPeds: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF008E0BA1FE1D644 | Since: 1207 | API-Set: unknown
 */
export declare function reserveAmbientsTotal(numPeds: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0BFA1BD465CDFEFD | Since: 1207 | API-Set: unknown
 */
export declare function resetComponents(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x4B9668DB91DC39B8 | Since: 1207 | API-Set: unknown
 */
export declare function resetIncapacitationBleedOutDuration(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x801917E7D7BCE418 | Since: 1207 | API-Set: unknown
 */
export declare function resetLadderMovementSpeedModifier(ped: number | IPed): void;
/**
 * Seems to set the peds stamina to 30%
 *
 * Hash: 0x36513AFFC703C60D | Since: 1207 | API-Set: unknown
 */
export declare function resetStamina(ped: number | IPed): void;
/**
 * Removes every texture layer but the base layer
 * Clearing texture's data: setting params to default values, but keep overlays.
 *
 * Hash: 0x8472A1789478F82F | Since: 1207 | API-Set: unknown
 */
export declare function resetTexture(textureId: number): void;
/**
 * 0.0 <= stamina <= 100.0
 *
 * Hash: 0x675680D089BFA21F | Since: 1207 | API-Set: unknown
 */
export declare function restoreStamina(ped: number | IPed, stamina: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC2266AA617668AD3 | Since: 1207 | API-Set: unknown
 */
export declare function setAccuracyAgainstLocalPlayerModifier(ped: number | IPed, modifier: number): void;
/**
 * Related to _0x704C908E9C405136 for component loading
 * Can be used to fix missing outfit changes, always paired with _UPDATE_PED_VARIATION
 * _S*
 * Doesn't actually return anything.
 *
 * Hash: 0xAAB86462966168CE | Since: 1207 | API-Set: unknown
 */
export declare function setActiveMetaComponentsUpdated(ped: number | IPed, isMP: boolean): any;
/**
 * No comment provided
 *
 * Hash: 0xC0258742B034DFAF | Since: 1207 | API-Set: unknown
 */
export declare function setAmbientAnimalDensityMultiplierThisFrame(multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0xBA0980B5C0A11924 | Since: 1207 | API-Set: unknown
 */
export declare function setAmbientHumanDensityMultiplierThisFrame(multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0xAB0D553FE20A6E25 | Since: 1207 | API-Set: unknown
 */
export declare function setAmbientDensityMultiplierThisFrame(multiplier: number): void;
/**
 * Sets MetaPedExpression at index specified. Morphs components, such as changing body size or facial features.
 *
 * Note: You have to update the ped's variation (using 0xCC8CA3E88256E58F) after calling this native
 *
 * index = MetaPedExpression IDs
 * List of face features: https://pastebin.com/9jb88FXW
 * Full list of MetaPedExpressions: https://pastebin.com/Ld76cAn7
 * value: -1.0 to 1.0 (values beyond this likely won't sync to other clients)
 *
 * This native also allows you to change a horse's gender.
 *
 * Old name: _SET_PED_FACE_FEATURE
 *
 * Hash: 0x5653AB26C82938CF | Since: 1207 | API-Set: unknown
 */
export declare function setCharExpression(ped: number | IPed, index: number, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x069EDDF1FD4DEB0A | Since: 1207 | API-Set: unknown
 */
export declare function setCurrentDefenseAgainstPlayersModifier(horse: number | IPed, modifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x9B6808EC46BE849B | Since: 1207 | API-Set: unknown
 */
export declare function setDefenseModifierFor(ped: number | IPed, modifier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x478F6B9920446CE2 | Since: 1207 | API-Set: unknown
 */
export declare function setFormationAutoAssignPosition(groupId: number, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xDE1B1907A83A1550 | Since: 1207 | API-Set: unknown
 */
export declare function setHealthRechargeMultiplier(ped: number | IPed, multiplier: number): void;
/**
 * Sets some flag on a horse
 *
 * Hash: 0xB8AB265426CFE6DD | Since: 1207 | API-Set: unknown
 */
export declare function setHorseScriptedFlag(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xFECA2081F61ED2CD | Since: 1207 | API-Set: unknown
 */
export declare function setInteractionLockonFlag(ped: number | IPed, player: number | string | IPlayer, flag: number, enable: boolean): void;
/**
 * Use to apply metaped player components
 * Replaces asset, alternatively you can remove assets using REMOVE_TAG_FROM_META_PED
 *
 * Hash: 0xBC6DF00D7A4A6819 | Since: 1207 | API-Set: unknown
 */
export declare function setMetaTag(ped: number | IPed, drawable: number | string, albedo: number | string, normal: number | string, material: number | string, palette: number | string, tint0: number, tint1: number, tint2: number): void;
/**
 * Sets ped eye redness, weariness: 0.f to 1.f
 *
 * Hash: 0x314C5465195F3B30 | Since: 1207 | API-Set: unknown
 */
export declare function setMetaWeariness(ped: number | IPed, weariness: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7883AA809DF43D98 | Since: 1355 | API-Set: unknown
 */
export declare function setMinHealthThreshold(ped: number | IPed, healthAmount: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA69899995997A63B | Since: 1207 | API-Set: unknown
 */
export declare function setMountBondingLevel(ped: number | IPed, bondingLevel: number): void;
/**
 * Note: this native was added in build 1232.40
 *
 * Hash: 0x11E6B9629C46D6EC | Since: 1232 | API-Set: unknown
 */
export declare function setMountSecurityEnabled(ped: number | IPed, toggle: boolean): void;
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/COMBAT_ACTION_DISABLE_FLAGS
 *
 * Hash: 0xB8DE69D9473B7593 | Since: 1207 | API-Set: unknown
 */
export declare function setActionDisableFlag(ped: number | IPed, actionDisableFlag: number): void;
/**
 * bloodFountainPressure: visible effect from 0.0 till 20.0
 * yaw: visible effect from -3.0 till 3.0
 * bloodFountainDirection: 1.0 left side, -1.0 right side
 * bloodFountainPulse: from 0.1 (low) till 1.0 (fast)
 * make blood fountain from your stomach: _SET_PED_ACTIVATE_WOUND_EFFECT(ped, unk, 2, 14411, 0.0, 0.1, 0.0, 0.0, 3.0, -1.0, 1.0)
 *
 * Hash: 0xFFD54D9FE71B966A | Since: 1207 | API-Set: unknown
 */
export declare function setActivateWoundEffect(ped: number | IPed, boneId: number, moveWoundLeftRight: number, bloodFountainPressure: number, yaw: number, bloodFountainDirection: number, bloodFountainPulse: number): void;
/**
 * Params: hash - ARTHUR or JOHN
 * _SET_PED_(A-D)*
 *
 * Hash: 0xB285AD0EC870B2DF | Since: 1207 | API-Set: unknown
 */
export declare function setActivePlayerType(ped: number | IPed, playerType: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x43CA928E892CFDB8 | Since: 1311 | API-Set: unknown
 */
export declare function setAnimalDetectionModifier(ped: number | IPed, modifier: number): void;
/**
 * NET_FETCH_CLIENT_UPDATE_PED_FIGHT_PROFICIENCY: Changing parry multiplier for ped
 *
 * Hash: 0x6DBF2D78709AD70B | Since: 1207 | API-Set: unknown
 */
export declare function setBeatMultiplier(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xCB9401F918CB0F75 | Since: 1207 | API-Set: unknown
 */
export declare function setBlackboardBool(ped: number | IPed, value: boolean, removeTimer: number): string;
/**
 * No comment provided
 *
 * Hash: 0x437C08DB4FEBE2BD | Since: 1207 | API-Set: unknown
 */
export declare function setBlackboardFloat(ped: number | IPed, value: number, removeTimer: number): string;
/**
 * p1:
 * BodyPartChained
 * OverloadMostInjuredBodyPart
 *
 * p2:
 * LeftLeg
 * Legs
 * RightArm
 *
 * Hash: 0xA762C9D6CF165E0D | Since: 1207 | API-Set: unknown
 */
export declare function setBlackboardHash(ped: number | IPed, removeTimer: number): [string, string];
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/BLACKBOARDS
 * Blackboard natives allow you to apply and check certain data to/for peds.
 * Blackboard bools, floats and strings are subdivided into 6 sections: "all", "animation", "any", "code", "global" and "script"
 * Most changes are only visible for "script" blackboards, some "script" blackboards change ped motions
 * "removeTimer" is self-removal timer, can be "-1" so your data will not be removed by the game (forever); 100 = 1 second
 *
 * Hash: 0x5F53010C4C3F6BAF | Since: 1207 | API-Set: unknown
 */
export declare function setBlackboardInt(ped: number | IPed, value: number, removeTimer: number): string;
/**
 * Bleedout profiles:
 * Animal_FastBleedout
 * Animal_Generic
 * Human_FastBleedout
 * Human_Generic
 * Human_Mission
 *
 * For more information, see common/data/ai/peddamageinfo.meta
 *
 * Hash: 0x66C047719B0E80E1 | Since: 1207 | API-Set: unknown
 */
export declare function setBleedoutProfile(ped: number | IPed, bleedoutProfile: number | string): void;
/**
 * brawlingStyle:
 * enum eBrawlingStyle : Hash
 * {
 * BS_AI = 0x802C604D,
 * BS_AI_BARBRAWL = 0x4FF5F0C7,
 * BS_AI_DEFENSIVE = 0xD888F2FD,
 * BS_AI_MOONSHINE_BARBRAWL = 0xA01B433A,
 * BS_ALLIGATOR = 0x7A5548ED,
 * BS_ALLIGATOR_LARGE = 0x368EC7CB,
 * BS_ALLY = 0x69C76C14,
 * BS_ANIMAL = 0xD777C754,
 * BS_BADGER = 0x7E7C3F53,
 * BS_BEAR = 0x0BC66E35,
 * BS_BEAVER = 0x4E313783,
 * BS_BOAR = 0x176A5831,
 * BS_BOUNTY_HUNTER = 0x3900654C,
 * BS_BRUISER = 0x4514DB61,
 * BS_BULL = 0x4E50C5D2,
 * BS_COUGAR = 0x9DAA7CCB,
 * BS_COW = 0xB0E91295,
 * BS_COYOTE = 0xA448EB69,
 * BS_DEER = 0xA781E6B3,
 * BS_DOG = 0x5A4155C4,
 * BS_ELK = 0x408697F0,
 * BS_FEMALE = 0x6A3BB2C2,
 * BS_FEMALE_STRONG = 0x4DAFDD84,
 * BS_GANGUP = 0xD0CECFF2,
 * BS_GOAT = 0x078E649F,
 * BS_HORSE = 0xF6B775F3,
 * BS_MICAH_FINALE = 0x1F0BB27A,
 * BS_MOOSE = 0x968917AB,
 * BS_MUSKRAT = 0x1EDC33AC,
 * BS_NO_MELEE = 0x25B5F931,
 * BS_PIG = 0x22EAD110,
 * BS_PLAYER = 0x78BAEF07,
 * BS_PLAYER_FINALE = 0xF9E77D2D,
 * BS_PLAYER_MOONSHINER = 0x687BF19F,
 * BS_PLAYER_WINTER1 = 0x3C6A802F,
 * BS_QUICK = 0xC4CABB1B,
 * BS_RACCOON = 0x505F8917,
 * BS_SHEEP = 0x6827CCCF,
 * BS_SNAKE = 0x82BEBC4B,
 * BS_TIMID = 0x431AEF77,
 * BS_WOLF = 0xA8F023D4
 * };
 *
 * Hash: 0x8BA83CC4288CD56D | Since: 1207 | API-Set: unknown
 */
export declare function setBrawlingStyle(ped: number | IPed, brawlingStyle: number | string): void;
/**
 * SET_PED_CAN_*
 *
 * Hash: 0xFD6943B6DF77E449 | Since: 1207 | API-Set: unknown
 */
export declare function setCanBeLassoed(ped: number | IPed, toggle: boolean): void;
/**
 * Hashes: GUARD, COMBAT_ANIMAL, LAW, LAW_SHERIFF
 * _SET_PED_COMBAT_A* - _SET_PED_COMBAT_M*
 *
 * Hash: 0xBD75500141E4725C | Since: 1207 | API-Set: unknown
 */
export declare function setCombatAttributeHash(ped: number | IPed, p1: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x9238A3D970BBB0A9 | Since: 1207 | API-Set: unknown
 */
export declare function setCombatBehaviour(ped: number | IPed, behaviour: number | string): void;
/**
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/COMBAT_STYLES
 * Params: p2 is usually 1, sometimes 0 or 2
 * duration in seconds, -1.0 = forever
 *
 * Hash: 0x8ACC0506743A8A5C | Since: 1207 | API-Set: unknown
 */
export declare function setCombatStyle(ped: number | IPed, combatStyleHash: number | string, duration: number): void;
/**
 * duration in seconds, -1.0 = forever
 *
 * Hash: 0x8B1E8E35A6E814EA | Since: 1207 | API-Set: unknown
 */
export declare function setCombatStyleMod(ped: number | IPed, combatStyleModHash: number | string, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7DE9692C6F64CFE8 | Since: 1207 | API-Set: unknown
 */
export declare function setCrouchMovement(ped: number | IPed, state: boolean, immediately: boolean): void;
/**
 * The higher the multiplier the less the engine renders culls (https://docs.unity3d.com/Manual/OcclusionCulling.html)
 *
 * Hash: 0x8AC1D721B2097B6E | Since: 1207 | API-Set: unknown
 */
export declare function setCullRange(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xDACE03C65C6666DB | Since: 1207 | API-Set: unknown
 */
export declare function setDamaged(ped: number | IPed, damaged: boolean): void;
/**
 * damageCleanliness: see _GET_PED_DAMAGE_CLEANLINESS
 *
 * Hash: 0x7528720101A807A5 | Since: 1207 | API-Set: unknown
 */
export declare function setDamageCleanliness(ped: number | IPed, damageCleanliness: number): void;
/**
 * _SET_PED_(A?)*
 *
 * Hash: 0xEB2BFE5D009F0331 | Since: 1232 | API-Set: unknown
 */
export declare function setDefensiveAreaToAngledArea(ped: number | IPed, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, entity: number | IEntity): void;
/**
 * No comment provided
 *
 * Hash: 0x1854217C640B39EC | Since: 1207 | API-Set: unknown
 */
export declare function setDefensiveSphereAttachedToEntity(ped: number | IPed, entity: number | IEntity, pos: Vector3, radius: number): void;
/**
 * Seems to set the ped's loco type.
 * Values used in the scripts:
 * algie
 * angry_female
 * arthur_healthy
 * cowboy
 * cowboy_f
 * default
 * default_female
 * free_slave_01
 * free_slave_02
 * gold_panner
 * guard_lantern
 * injured_general
 * john_marston
 * lilly_millet
 * lone_prisoner
 * lost_man
 * mp_ova_hunter
 * mp_ova_hunter_female
 * murfree
 * old_female
 * primate
 * rally
 * waiter
 * war_veteran
 *
 * Hash: 0x923583741DC87BCE | Since: 1207 | API-Set: unknown
 */
export declare function setDesiredLocoForModel(ped: number | IPed, locomotionArchetype: string): void;
/**
 * Sets peds motion type
 *
 * Hash: 0x89F5E7ADECCCB49C | Since: 1207 | API-Set: unknown
 */
export declare function setDesiredLocoMotionType(ped: number | IPed): string;
/**
 * No comment provided
 *
 * Hash: 0xBAD2A311667A50D7 | Since: 1207 | API-Set: unknown
 */
export declare function setDesiresGroup(ped: number | IPed, toggle: boolean): void;
/**
 * Params: ped, 0f, -1, true, true in R* MP Scripts
 * _SET_PED_DE* - _SET_PED_F*
 *
 * Hash: 0xE3144B932DFDFF65 | Since: 1207 | API-Set: unknown
 */
export declare function setDirtCleaned(ped: number | IPed): void;
/**
 * Disables being able to kick move ped.
 *
 * Hash: 0xADD31A5C7A5FAA73 | Since: 1207 | API-Set: unknown
 */
export declare function setDisableKickMove(ped: number | IPed, disable: boolean): void;
/**
 * SOBER = 0.0f, SLIGHTLY_DRUNK = 0.25f, MODERATELY_DRUNK = 0.5f, VERY_DRUNK = 1.0f
 *
 * Hash: 0x406CCF555B04FAD3 | Since: 1207 | API-Set: unknown
 */
export declare function setDrunkness(ped: number | IPed, enabled: boolean, drunknessLevel: number): void;
/**
 * Used in R* MP Script fm_mission_controller and various R* SP Scripts for ambush*
 *
 * Hash: 0x20E54854DEF6A54A | Since: 1207 | API-Set: unknown
 */
export declare function setFiringPattern2(ped: number | IPed, patternHash: number | string): void;
/**
 * Only used in R* MP Script fm_mission_controller
 *
 * Hash: 0x244E8C282188E40F | Since: 1207 | API-Set: unknown
 */
export declare function setFiringPattern3(ped: number | IPed, patternHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x0E9E95FDEDCC9D35 | Since: 1207 | API-Set: unknown
 */
export declare function setFormationPosition(ped: number | IPed, position: number, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x3AE3552E7C207CC5 | Since: 1207 | API-Set: unknown
 */
export declare function setGetupAnimation(ped: number | IPed): string;
/**
 * No comment provided
 *
 * Hash: 0x8301D87B1B89E219 | Since: 1207 | API-Set: unknown
 */
export declare function setGrappleAction(ped: number | IPed, grappleAction: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x56E9C26CD29D1ED6 | Since: 1207 | API-Set: unknown
 */
export declare function setGrappleAnimation(ped: number | IPed, grappleAnim: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x99A6E246C315BF60 | Since: 1207 | API-Set: unknown
 */
export declare function setGrappleEffectMultiplier(ped: number | IPed, multiplier: number): any;
/**
 * No comment provided
 *
 * Hash: 0x789DABD18E9024DB | Since: 1207 | API-Set: unknown
 */
export declare function setGrappleFlag(ped: number | IPed, flag: number, enable: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x604190F0CF0DF158 | Since: 1207 | API-Set: unknown
 */
export declare function setGrappleSequence(ped: number | IPed): string;
/**
 * Hashes: GS_DRAGGING, GS_FACE_TO_BACK, GS_FACE_TO_FACE, GS_FACE_TO_FACE_WALL, GS_MOUNTED
 *
 * Hash: 0x630E7B01F091A197 | Since: 1207 | API-Set: unknown
 */
export declare function setGrappleStyle(ped: number | IPed, style: number | string): any;
/**
 * No comment provided
 *
 * Hash: 0x2BA918C823B8BA56 | Since: 1207 | API-Set: unknown
 */
export declare function setHeadshotDamageMultiplier(ped: number | IPed, multiplier: number): void;
/**
 * configHash: see pedhealth.meta
 *
 * Hash: 0xF6B82FCE03B43A37 | Since: 1207 | API-Set: unknown
 */
export declare function setHealthConfig(ped: number | IPed, configHash: number | string): void;
/**
 * Only used in R* Script beat_sharp_shooter
 * Blocks ped from swimming underwater
 *
 * Hash: 0x7FB0088E8769CDDB | Since: 1207 | API-Set: unknown
 */
export declare function setImmersionFlag(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xD67B6F3BCF81BA47 | Since: 1207 | API-Set: unknown
 */
export declare function setIncapacitationFlags(ped: number | IPed, flags: number): void;
/**
 * No comment provided
 *
 * Hash: 0x39ED303390DDEAC7 | Since: 1207 | API-Set: unknown
 */
export declare function setIncapacitationModifiers(ped: number | IPed, canBeIncapacitated: boolean, threshold: number, bleedoutTime: number): void;
/**
 * No comment provided
 *
 * Hash: 0x2890418B39BC8FFF | Since: 1207 | API-Set: unknown
 */
export declare function setIncapacitationTotalBleedOutDuration(ped: number | IPed, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA3C53CDE922BC78B | Since: 1207 | API-Set: unknown
 */
export declare function setInteractionNegativeResponse(ped: number | IPed): string;
/**
 * personality (script_mp_rel): NONE, AGGRESSIVE, TIMID (non-aggressive), CRIPPS, SCRIPTEDINTIMIDATION, MAGGIE, MARCEL, SCRIPTEDSALOON
 * personality (script_rel): AVOID, SCRIPTEDOUTLAW, TIMIDGUARDDOG, SCRIPTEDTIMIDROB, AGGRESSIVECAMPER, LAZYDOG, KIERANTIEDUP, SCRIPTEDGALA
 *
 * Hash: 0x24C82EF607105FAA | Since: 1207 | API-Set: unknown
 */
export declare function setInteractionPersonality(ped: number | IPed, personality: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x20C5459379D75C1C | Since: 1207 | API-Set: unknown
 */
export declare function setInteractionPositiveResponse(ped: number | IPed): string;
/**
 * No comment provided
 *
 * Hash: 0x5BCF0B79D4F5DBA3 | Since: 1207 | API-Set: unknown
 */
export declare function setKnockedByOneHit(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x05CE6AF4DF071D23 | Since: 1207 | API-Set: unknown
 */
export declare function setLadderMovementSpeedModifier(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x13A210949FCBD92B | Since: 1207 | API-Set: unknown
 */
export declare function setLights(ped: number | IPed, toggle: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x6DB875AFC584FA32 | Since: 1207 | API-Set: unknown
 */
export declare function setMeleeForcedDuration(ped: number | IPed, durationMs: number): any;
/**
 * enum eMotivationState
 * {
 * TOILET_STATE,
 * FEAR_STATE,
 * ANGRY_STATE,
 * AGITATION_STATE,
 * HUNGRY_STATE,
 * TIRED_STATE,
 * SAD_STATE,
 * BRAVE_STATE,
 * OFFER_ITEM_STATE,
 * SUSPICION,
 * DRUNK_STATE
 * };
 *
 * If targetPed is set to 0 the ped motivationState affects everyone
 *
 * Hash: 0x06D26A96CA1BCA75 | Since: 1207 | API-Set: unknown
 */
export declare function setMotivation(ped: number | IPed, motivationState: number, threshold: number, targetPed: number | IPed): void;
/**
 * The higher the modifier, the slower the motivationState value will decrease
 *
 * Hash: 0xA1EB5D029E0191D3 | Since: 1207 | API-Set: unknown
 */
export declare function setMotivationModifier(ped: number | IPed, motivationState: number, modifier: number): void;
/**
 * motivationState: see _SET_PED_MOTIVATION
 *
 * Hash: 0x2EB75FB86C41F026 | Since: 1207 | API-Set: unknown
 */
export declare function setMotivationStateOverride(ped: number | IPed, motivationState: number, enabled: boolean): void;
/**
 * Hashes: STANDARD_PED_AGRO_GUARD, BOUNTY_HUNTER, PLAYER_HORSE, LAW_POLICE, GUARD_DOG, ATTACK_DOG
 * Personalities can also be found in common:/data/ai/interactionpersonalities
 *
 * Hash: 0xB8B6430EAD2D2437 | Since: 1207 | API-Set: unknown
 */
export declare function setPersonality(ped: number | IPed, personality: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x4A48B6E03BABB4AC | Since: 1207 | API-Set: unknown
 */
export declare function setPromptName(ped: number | IPed): string;
/**
 * No comment provided
 *
 * Hash: 0x19B14E04B009E28B | Since: 1207 | API-Set: unknown
 */
export declare function setPromptName2(ped: number | IPed): string;
/**
 * No comment provided
 *
 * Hash: 0xFCA8FB9E15FA80D3 | Since: 1207 | API-Set: unknown
 */
export declare function setPromptNameFromGxtEntry(ped: number | IPed, gxtEntryHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xC2745D9261664901 | Since: 1207 | API-Set: unknown
 */
export declare function setPromptNameFromGxtEntry2(ped: number | IPed, gxtEntryHash: number | string): void;
/**
 * quality: see _GET_PED_QUALITY
 *
 * Hash: 0xCE6B874286D640BB | Since: 1207 | API-Set: unknown
 */
export declare function setQuality(ped: number | IPed, quality: number): void;
/**
 * No comment provided
 *
 * Hash: 0x25ACFC650B65C538 | Since: 1207 | API-Set: unknown
 */
export declare function setScale(ped: number | IPed, scale: number): void;
/**
 * 0.0 - 1.0
 * Modifies the "scent line" on the ped's body when using Eagle Eye.
 *
 * Hash: 0x01B21B81865E2A1F | Since: 1207 | API-Set: unknown
 */
export declare function setScent(ped: number | IPed, scent: number): void;
/**
 * No comment provided
 *
 * Hash: 0xC163DAC52AC975D3 | Since: 1207 | API-Set: unknown
 */
export declare function setTargetActionDisableFlag(ped: number | IPed, actionDisableFlag: number): void;
/**
 * No comment provided
 *
 * Hash: 0x36E4B61DC56DE77C | Since: 1207 | API-Set: unknown
 */
export declare function setToBeRemoved(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0x221F4D9912B7FE86 | Since: 1207 | API-Set: unknown
 */
export declare function setToDisableRagdoll(ped: number | IPed, toggle: boolean): void;
/**
 * duration in seconds
 *
 * Hash: 0xA5950E16B8F31052 | Since: 1207 | API-Set: unknown
 */
export declare function setTrailEffect(ped: number | IPed, duration: number): void;
/**
 * Doesn't actually return anything.
 *
 * Hash: 0xEB72453B6F5B45B0 | Since: 1232 | API-Set: unknown
 */
export declare function setUseHorseMapCollision(ped: number | IPed, toggle: boolean): any;
/**
 * _SET_PED_S* - _SET_PED_T*
 *
 * Hash: 0xD05AD61F242C626B | Since: 1207 | API-Set: unknown
 */
export declare function setVoiceVolume(ped: number | IPed, volume: number): void;
/**
 * only works when you use SET_PED_WETNESS_HEIGHT first , if you do 0.0 (it resets) you need to apply again with SET_PED_WETNESS_HEIGHT to see the wetness effects again
 *
 * Hash: 0xF9CFF5BB70E8A2CB | Since: 1207 | API-Set: unknown
 */
export declare function setWetnessAmount(ped: number | IPed, amount: number): void;
/**
 * No comment provided
 *
 * Hash: 0x4DB9D03AC4E1FA84 | Since: 1207 | API-Set: unknown
 */
export declare function setWrithingDuration(ped: number | IPed, writhingDuration1: number, writhingDuration2: number): void;
/**
 * No comment provided
 *
 * Hash: 0xA73F50E8796150D5 | Since: 1207 | API-Set: unknown
 */
export declare function setPeltForHorse(horse: number | IPed, peltId: number): void;
/**
 * Set the pelt of the animal to the back of the horse
 * EXAMPLE:
 * local mount = GetMountOwnedByPlayer(PlayerId())
 * Citizen.InvokeNative(0xC412AA1C73111FE0,mount,GetHashKey('PROVISION_DEER_HIDE_POOR'),GetHashKey('a_c_deer_01_uppr_000_c0_001_ab'),0,0)
 *
 * Hash: 0xC412AA1C73111FE0 | Since: 1207 | API-Set: unknown
 */
export declare function setPeltForHorseByInventoryItem(horse: number | IPed, inventoryItem: number | string, albedoHash: number | string, normalHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x5708EDD71B50C008 | Since: 1207 | API-Set: unknown
 */
export declare function setPlayerAntagonizeDisabledFor(ped: number | IPed, player: number | string | IPlayer, duration: number): void;
/**
 * Animal Skin Quality Modifier
 * Params: p2 = 2, p3 = 3 in R* Scripts
 *
 * Hash: 0x9EFF3C91DF38304F | Since: 1311 | API-Set: unknown
 */
export declare function setPlayerCurrentAnimalDamageModifier(player: number | string | IPlayer, modifier: number): any;
/**
 * dismountTimer gets called with the data from `_GET_PLAYER_DISMOUNT_TIMESTAMP`
 *
 * Hash: 0xA691C10054275290 | Since: 1207 | API-Set: unknown
 */
export declare function setPlayerDismountTimestamp(mount: number | IPed, player: number | string | IPlayer, dismountedTimestamp: number): void;
/**
 * No comment provided
 *
 * Hash: 0x19173C3F15367B54 | Since: 1207 | API-Set: unknown
 */
export declare function setPlayerGreetDisabledFor(ped: number | IPed, player: number | string | IPlayer, duration: number): void;
/**
 * No comment provided
 *
 * Hash: 0x283978A15512B2FE | Since: 1207 | API-Set: unknown
 */
export declare function setRandomOutfitVariation(ped: number | IPed): void;
/**
 * Used in Script Function MP_MAIN_OFFLINE__INITIALIZE_GAME
 * _SET_RELATIONSHIP_*
 *
 * Hash: 0xDC91F22F09BC6C2F | Since: 1207 | API-Set: unknown
 */
export declare function setRelationshipGroupScriptRegistered(group: number | string, unregister: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0x39A2FC5AF55A52B1 | Since: 1207 | API-Set: unknown
 */
export declare function setRemoveNetworked(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xDB48E99F8E064E56 | Since: 1207 | API-Set: unknown
 */
export declare function setScenarioAnimalDensityMultiplierThisFrame(multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x28CB6391ACEDD9DB | Since: 1207 | API-Set: unknown
 */
export declare function setScenarioHumanDensityMultiplierThisFrame(multiplier: number): void;
/**
 * Sets the scenario ped density to the given config.
 *
 * Valid configs:
 * - BLACKWATER
 * - DEFAULT
 * - NEWBORDEAUX
 * - RHODES
 * - STRAWBERRY
 * - TUMBLEWEED
 * - VALENTINE
 * - VANHORN
 *
 * See common/data/ai/densityscoringconfigs.meta for more information.
 *
 * Hash: 0x95423627A9CA598E | Since: 1207 | API-Set: unknown
 */
export declare function setScenarioDensityThisFrame(configHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0xA77FA7BE9312F8C0 | Since: 1207 | API-Set: unknown
 */
export declare function setScenarioRangeMultiplierThisFrame(multiplier: number): void;
/**
 * Only used in SP R* Script loanshark_hunter
 *
 * Hash: 0x9E3842E5DAD69F80 | Since: 1207 | API-Set: unknown
 */
export declare function setScenarioVolumeReference(volume: number): void;
/**
 * _SET_ST* - _SET_SW* Sets a ped config flag for the specified ped
 *
 * Hash: 0x028E7B3BBA0BD2FC | Since: 1207 | API-Set: unknown
 */
export declare function setStagedFlag(ped: number | IPed): void;
/**
 * No comment provided
 *
 * Hash: 0xEF5A3D2285D8924B | Since: 1207 | API-Set: unknown
 */
export declare function setStaminaDepletionMultiplier(ped: number | IPed, multiplier: number): void;
/**
 * No comment provided
 *
 * Hash: 0x345C9F993A8AB4A4 | Since: 1207 | API-Set: unknown
 */
export declare function setStaminaRechargeMultiplier(ped: number | IPed, multiplier: number): void;
/**
 * Size will be permanent
 *
 * Hash: 0x7FF72DE061DF55E2 | Since: 1207 | API-Set: unknown
 */
export declare function setTankAttributeSize(ped: number | IPed, attributeIndex: number, size: number): void;
/**
 * No comment provided
 *
 * Hash: 0x6C76BC24F8BB709A | Since: 1207 | API-Set: unknown
 */
export declare function setTextureLayerAlpha(textureId: number, layerId: number, texAlpha: number): void;
/**
 * No comment provided
 *
 * Hash: 0xF2EA041F1146D75B | Since: 1207 | API-Set: unknown
 */
export declare function setTextureLayerMod(textureId: number, layerId: number, modTextureHash: number | string, modAlpha: number, modChannel: number): void;
/**
 * paletteHash: https://raw.githubusercontent.com/femga/rdr3_discoveries/master/clothes/cloth_color_palletes.lua
 *
 * Hash: 0x1ED8588524AC9BE1 | Since: 1207 | API-Set: unknown
 */
export declare function setTextureLayerPallete(textureId: number, layerId: number, paletteHash: number | string): void;
/**
 * No comment provided
 *
 * Hash: 0x057C4F092E2298BE | Since: 1207 | API-Set: unknown
 */
export declare function setTextureLayerRoughness(textureId: number, layerId: number, texRough: number): void;
/**
 * No comment provided
 *
 * Hash: 0x3329AAE2882FC8E4 | Since: 1207 | API-Set: unknown
 */
export declare function setTextureLayerSheetGridIndex(textureId: number, layerId: number, sheetGridIndex: number): void;
/**
 * No comment provided
 *
 * Hash: 0x253A63B5BADBC398 | Since: 1207 | API-Set: unknown
 */
export declare function setTextureLayerTextureMap(textureId: number, layerId: number, albedoHash: number | string, normalHash: number | string, materialHash: number | string): void;
/**
 * Seem color is not RGB or HSV
 *
 * Hash: 0x2DF59FFE6FFD6044 | Since: 1207 | API-Set: unknown
 */
export declare function setTextureLayerTint(textureId: number, layerId: number, tint0: number, tint1: number, tint2: number): void;
/**
 * Used in script function METAPED_CLOTHING__XML__APPLY_OUTFIT_TINTS_TO_PED
 *
 * Hash: 0x4EFC1F8FF1AD94DE | Since: 1207 | API-Set: unknown
 */
export declare function setTextureOutfitTints(ped: number | IPed, componentCategory: number | string, palette: number | string, tint0: number, tint1: number, tint2: number): void;
/**
 * _SET_W(EAPON?)*
 *
 * Hash: 0x932786CE3C76477C | Since: 1207 | API-Set: unknown
 */
export declare function setTotalDamageFalloffBonus(ped: number | IPed, bonus: number): void;
/**
 * _SET_W(EAPON?)*
 *
 * Hash: 0x73B6F907B913C860 | Since: 1207 | API-Set: unknown
 */
export declare function setTotalDamageFromAi(ped: number | IPed, totalDamage: number): void;
/**
 * Triggers a gunshot
 * Params: p5 = -1 in R* Scripts
 *
 * Hash: 0x4C57F27D1554E6B0 | Since: 1207 | API-Set: unknown
 */
export declare function shootTriggerAtCoords(ped: number | IPed, pos: Vector3): any;
/**
 * No comment provided
 *
 * Hash: 0x83ED1FC9DF3411F5 | Since: 1311 | API-Set: unknown
 */
export declare function spawnpointsStartSearchWithVolume(volume: number, spawnpointsFlag: number, duration: number): void;
/**
 * _TOGGLE_S* - _UPDATE_*
 *
 * Hash: 0x09E378C52B1433B5 | Since: 1207 | API-Set: unknown
 */
export declare function togglePlayerFlinch(ped: number | IPed, pos: Vector3, scale: number): void;
/**
 * No comment provided
 *
 * Hash: 0x7D4E70A67A651C71 | Since: 1207 | API-Set: unknown
 */
export declare function unreserveAmbients(numPeds: number): void;
/**
 * No comment provided
 *
 * Hash: 0x0F9E754EBE8FDBFA | Since: 1311 | API-Set: unknown
 */
export declare function updateAnimalDamageModifier(player: number | string | IPlayer): void;
/**
 * Should be called at least once for any new texture override.
 * Otherwise component textures will be just black.
 * Also needs to be called for updating any ped overlays to apply the changes.
 *
 * Hash: 0x92DAABA2C1C10B0E | Since: 1207 | API-Set: unknown
 */
export declare function updateTexture(textureId: number): void;
/**
 * Update variation on ped, needed after first creation, or when component or texture/overlay is changed
 *
 * Hash: 0xCC8CA3E88256E58F | Since: 1207 | API-Set: unknown
 */
export declare function updateVariation(ped: number | IPed): void;
/**
 * Params: 0.0f to remove wound effects
 *
 * Hash: 0x66B1CB778D911F49 | Since: 1207 | API-Set: unknown
 */
export declare function updateWoundEffect(ped: number | IPed, value: number): void;
/**
 * No comment provided
 *
 * Hash: 0x66B957AAC2EAAEAB | Since: 1207 | API-Set: unknown
 */
export declare function updateShopItemWearableState(ped: number | IPed, componentHash: number | string, wearableState: number | string, isMp: boolean): void;
/**
 * No comment provided
 *
 * Hash: 0xE0B61ED8BB37712F | Since: 1207 | API-Set: unknown
 */
export declare function warpOutOfVehicle(ped: number | IPed): void;
