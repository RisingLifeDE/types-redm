import { Vector3, IPed } from '@risinglife/redm-shared';
/**
 * An analogue of [GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS](#\_0x27561561732A7842) that returns number of drawable variations inside a single collection instead of the total number across all collections.
 *
 * Hash: 0x310D0271
 */
export declare function getNumberOfCollectionDrawableVariations(ped: number | IPed, componentId: number, collection: string): number;
/**
 * An analogue of [GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS](#\_0x5FAF9754E789FB47) that returns number of prop variations inside a single collection instead of the total number across all collections.
 *
 * Hash: 0x3B6A13E1
 */
export declare function getNumberOfCollectionPropDrawableVariations(ped: number | IPed, anchorPoint: number, collection: string): number;
/**
 * An alternative to [GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS](#\_0xA6E7F1CEB523E171) that uses local collection indexing instead of the global one.
 *
 * Hash: 0x75CAF9CC
 */
export declare function getNumberOfCollectionPropTextureVariations(ped: number | IPed, anchorPoint: number, collection: string, propIndex: number): number;
/**
 * An alternative to [GET_NUMBER_OF_PED_TEXTURE_VARIATIONS](#\_0x8F7156A3142A6BAD) that uses local collection indexing instead of the global one.
 *
 * Hash: 0xD2C15D7
 */
export declare function getNumberOfCollectionTextureVariations(ped: number | IPed, componentId: number, collection: string, drawableId: number): number;
/**
 * Returns number of variation collections available for the given Ped.
 *
 * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
 *
 * `GET_PED_COLLECTIONS_COUNT` can be used together with [GET_PED_COLLECTION_NAME](#\_0xFED5D83A) to list all collections attached to Ped.
 *
 * Hash: 0x45946359
 */
export declare function getCollectionsCount(ped: number | IPed): number;
/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B)) for the given global drawable ID. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 *
 * Hash: 0x94EB1FE4
 */
export declare function getCollectionLocalIndexFromDrawable(ped: number | IPed, componentId: number, drawableId: number): number;
/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17)) for the given global prop index. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 *
 * Hash: 0xFBDB885F
 */
export declare function getCollectionLocalIndexFromProp(ped: number | IPed, anchorPoint: number, propIndex: number): number;
/**
 * Returns name of collection under given index for the given Ped.
 *
 * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
 *
 * `GET_PED_COLLECTION_NAME` can be used together with [GET_PED_COLLECTIONS_COUNT](#\_0x45946359) to list all collections attached to Ped.
 *
 * Hash: 0xFED5D83A
 */
export declare function getCollectionName(ped: number | IPed, index: number): string;
/**
 * Gets collection name for the given global drawable ID. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) is used to get collection and local index (inside the given collection) of the drawable. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 *
 * Hash: 0xD6BBA48B
 */
export declare function getCollectionNameFromDrawable(ped: number | IPed, componentId: number, drawableId: number): string;
/**
 * Gets collection name for the given global prop index. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) is used to get collection and local index (inside the given collection) of the prop. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 *
 * Hash: 0x8ED0C17
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
 * Hash: 0x7CCE1163
 */
export declare function getDecorations(ped: number | IPed): number;
/**
 * A getter for [SET_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x95E3D6257B166CF2).
 *
 * Hash: 0xF5A904F9
 */
export declare function getDensityMultiplier(): number;
/**
 * Returns global drawable index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Drawables are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
 *
 * If all drawables from all collections are placed into one continuous array - the global index will correspond to the index of drawable in such array. Local index is index of drawable in this array relative to the start of the given collection.
 *
 * Hash: 0x280F1FC3
 */
export declare function getDrawableGlobalIndexFromCollection(ped: number | IPed, componentId: number, collection: string, drawableId: number): number;
/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection local drawable index (inside [GET_PED_DRAWABLE_VARIATION_COLLECTION_NAME](#\_0xBCE0AB63) collection) instead of the global drawable index.
 *
 * Hash: 0x9970386F
 */
export declare function getDrawableVariationCollectionLocalIndex(ped: number | IPed, componentId: number): number;
/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection name instead of the global drawable index.
 *
 * Should be used together with [GET_PED_DRAWABLE_VARIATION_COLLECTION_LOCAL_INDEX](#\_0x9970386F).
 *
 * Hash: 0xBCE0AB63
 */
export declare function getDrawableVariationCollectionName(ped: number | IPed, componentId: number): string;
/**
 * A getter for [\_SET_PED_EYE_COLOR](#\_0x50B56988B170AFDF). Returns -1 if fails to get.
 *
 * Hash: 0xA47B860F
 */
export declare function getEyeColor(ped: number | IPed): number;
/**
 * A getter for [\_SET_PED_FACE_FEATURE](#\_0x71A5C1DBA060049E). Returns 0.0 if fails to get.
 *
 * Hash: 0xBA352ADD
 */
export declare function getFaceFeature(ped: number | IPed, index: number): number;
/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 *
 * Hash: 0xA3EA2893
 */
export declare function getHairColor(ped: number | IPed): number;
/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 *
 * Hash: 0x4B087305
 */
export declare function getHairHighlightColor(ped: number | IPed): number;
/**
 * A getter for [SET_PED_HEAD_OVERLAY](#\_0x48F44967FA05CC1E) and [\_SET_PED_HEAD_OVERLAY_COLOR](#\_0x497BF74A7B9CB952) natives.
 *
 * Hash: 0xC46EE605
 */
export declare function getHeadOverlayData(ped: number | IPed, index: number): [boolean, number, number, number, number, number];
/**
 * Gets a ped model's health config.
 *
 * Hash: 0xF71542F7
 */
export declare function getModelHealthConfig(modelHash: number | string): number;
/**
 * Gets a ped model's personality type.
 *
 * Hash: 0xFE08CAD6
 */
export declare function getModelPersonality(modelHash: number | string): number;
/**
 * No comment provided
 *
 * Hash: 0x69E81E3D
 */
export declare function getMovementClipset(ped: number | IPed): number;
/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection local prop index (inside [GET_PED_PROP_COLLECTION_NAME](#\_0x6B5653E4) collection) instead of the global prop index.
 *
 * Hash: 0xCD420AD1
 */
export declare function getPropCollectionLocalIndex(ped: number | IPed, anchorPoint: number): number;
/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection name instead of the global drawable index.
 *
 * Should be used together with [GET_PED_PROP_COLLECTION_LOCAL_INDEX](#\_0xCD420AD1).
 *
 * Hash: 0x6B5653E4
 */
export declare function getPropCollectionName(ped: number | IPed, anchorPoint: number): string;
/**
 * Returns global prop index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Props are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
 *
 * If all props from all collections are placed into one continuous array - the global index will correspond to the index of the prop in such array. Local index is index of the prop in this array relative to the start of the given collection.
 *
 * Hash: 0x2CB45CDC
 */
export declare function getPropGlobalIndexFromCollection(ped: number | IPed, anchorPoint: number, collection: string, propIndex: number): number;
/**
 * A getter for [SET_PED_SWEAT](#\_0x27B0405F59637D1F).
 *
 * Hash: 0x44B91E94
 */
export declare function getSweat(ped: number | IPed): number;
/**
 * An alternative to [IS_PED_COMPONENT_VARIATION_GEN9\_EXCLUSIVE](#\_0xC767B581) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x33B2AFA2
 */
export declare function isCollectionComponentVariationGen9Exclusive(ped: number | IPed, componentId: number, collection: string, drawableId: number): boolean;
/**
 * An alternative to [IS_PED_COMPONENT_VARIATION_VALID](#\_0xE825F6B6CEA7671D) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0xCA63A52A
 */
export declare function isCollectionComponentVariationValid(ped: number | IPed, componentId: number, collection: string, drawableId: number, textureId: number): boolean;
/**
 * No comment provided
 *
 * Hash: 0xC767B581
 */
export declare function isComponentVariationGen9Exclusive(ped: number | IPed, componentId: number, drawableId: number): boolean;
/**
 * Sets whether peds can stand on top of *all* vehicles without falling off.
 *
 * Note this flag is not replicated automatically, you will have to manually do so.
 *
 * Hash: 0x90A9E0B2
 */
export declare function overridesCanStandOnTopFlag(flag: boolean): void;
/**
 * Allows the bypassing of default game behavior that prevents the use of [SET_PED_DRIVE_BY_CLIPSET_OVERRIDE](#\_0xED34AB6C5CB36520) in certain scenarios to avoid clipping issues (e.g., when there is more than one Ped in a vehicle).
 *
 * Note: This flag and the overridden clipset are not replicated values and require synchronization through user scripts. Additionally, current game behavior also restricts applying this clipset locally when in first-person mode and will require a temporary workaround.
 *
 * Hash: 0xB14F8EAD
 */
export declare function overridesUseDefaultDriveByClipset(flag: boolean): void;
/**
 * Restores an overridden ped model personality type to the default value.
 *
 * Hash: 0x79A12861
 */
export declare function resetModelPersonality(modelHash: number | string): void;
/**
 * An alternative to [SET_PED_COMPONENT_VARIATION](#\_0x262B14F48D29DE80) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x88711BBA
 */
export declare function setCollectionComponentVariation(ped: number | IPed, componentId: number, collection: string, drawableId: number, textureId: number, paletteId: number): void;
/**
 * An alternative to [SET_PED_PRELOAD_PROP_DATA](#\_0x2B16A3BFF1FBCE49) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Hash: 0x14B5BBE0
 */
export declare function setCollectionPreloadPropData(ped: number | IPed, anchorPoint: number, collection: string, propIndex: number, textureId: number): void;
/**
 * An alternative to [SET_PED_PRELOAD_VARIATION_DATA](#\_0x39D55A620FCB6A3A) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x3EC75558
 */
export declare function setCollectionPreloadVariationData(ped: number | IPed, componentId: number, collection: string, drawableId: number, textureId: number): void;
/**
 * An alternative to [SET_PED_PROP_INDEX](#\_0x93376B65A266EB5F) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Hash: 0x75240BCB
 */
export declare function setCollectionPropIndex(ped: number | IPed, anchorPoint: number, collection: string, propIndex: number, textureId: number, attach: boolean): void;
/**
 * Override the limits on the number and types of melee combatants. The game is limited to at most ten combatants among the three types: primary, secondary, and observers.
 *
 * This native infers the number of observers based on the primary and secondary counts.
 *
 * Hash: 0x8E51EC29
 */
export declare function setMeleeCombatLimits(primaryCount: number, secondaryCount: number, populationPedCount: number): void;
/**
 * Sets a ped model's health config.
 * Takes effect only after setting player model with `SET_PLAYER_MODEL`.
 *
 * Hash: 0xAF12A05D
 */
export declare function setModelHealthConfig(modelHash: number | string, configName: string): void;
/**
 * Overrides a ped model personality type.
 *
 * Hash: 0x46F6B38B
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
 * Hash: 0xB300F03
 */
export declare function setTurningThresholds(min: number, max: number): void;
/**
 * Returns the bone matrix of the specified bone id. usefull for entity attachment
 *
 * Hash: 0x9C5E7C9C
 */
export declare function getBoneMatrix(ped: number | IPed, boneId: number): [Vector3, Vector3, Vector3, Vector3];
