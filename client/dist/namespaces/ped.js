import { IPed } from '@risinglife/redm-shared';
/**
 * An analogue of [GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS](#\_0x27561561732A7842) that returns number of drawable variations inside a single collection instead of the total number across all collections.
 *
 * Hash: 0x310D0271
 */
export function getNumberOfCollectionDrawableVariations(ped, componentId, collection) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetNumberOfPedCollectionDrawableVariations(_ped, componentId, collection);
}
/**
 * An analogue of [GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS](#\_0x5FAF9754E789FB47) that returns number of prop variations inside a single collection instead of the total number across all collections.
 *
 * Hash: 0x3B6A13E1
 */
export function getNumberOfCollectionPropDrawableVariations(ped, anchorPoint, collection) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetNumberOfPedCollectionPropDrawableVariations(_ped, anchorPoint, collection);
}
/**
 * An alternative to [GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS](#\_0xA6E7F1CEB523E171) that uses local collection indexing instead of the global one.
 *
 * Hash: 0x75CAF9CC
 */
export function getNumberOfCollectionPropTextureVariations(ped, anchorPoint, collection, propIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetNumberOfPedCollectionPropTextureVariations(_ped, anchorPoint, collection, propIndex);
}
/**
 * An alternative to [GET_NUMBER_OF_PED_TEXTURE_VARIATIONS](#\_0x8F7156A3142A6BAD) that uses local collection indexing instead of the global one.
 *
 * Hash: 0xD2C15D7
 */
export function getNumberOfCollectionTextureVariations(ped, componentId, collection, drawableId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetNumberOfPedCollectionTextureVariations(_ped, componentId, collection, drawableId);
}
/**
 * Returns number of variation collections available for the given Ped.
 *
 * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
 *
 * `GET_PED_COLLECTIONS_COUNT` can be used together with [GET_PED_COLLECTION_NAME](#\_0xFED5D83A) to list all collections attached to Ped.
 *
 * Hash: 0x45946359
 */
export function getCollectionsCount(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedCollectionsCount(_ped);
}
/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B)) for the given global drawable ID. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 *
 * Hash: 0x94EB1FE4
 */
export function getCollectionLocalIndexFromDrawable(ped, componentId, drawableId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedCollectionLocalIndexFromDrawable(_ped, componentId, drawableId);
}
/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17)) for the given global prop index. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 *
 * Hash: 0xFBDB885F
 */
export function getCollectionLocalIndexFromProp(ped, anchorPoint, propIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedCollectionLocalIndexFromProp(_ped, anchorPoint, propIndex);
}
/**
 * Returns name of collection under given index for the given Ped.
 *
 * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
 *
 * `GET_PED_COLLECTION_NAME` can be used together with [GET_PED_COLLECTIONS_COUNT](#\_0x45946359) to list all collections attached to Ped.
 *
 * Hash: 0xFED5D83A
 */
export function getCollectionName(ped, index) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedCollectionName(_ped, index);
}
/**
 * Gets collection name for the given global drawable ID. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) is used to get collection and local index (inside the given collection) of the drawable. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 *
 * Hash: 0xD6BBA48B
 */
export function getCollectionNameFromDrawable(ped, componentId, drawableId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedCollectionNameFromDrawable(_ped, componentId, drawableId);
}
/**
 * Gets collection name for the given global prop index. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) is used to get collection and local index (inside the given collection) of the prop. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 *
 * Hash: 0x8ED0C17
 */
export function getCollectionNameFromProp(ped, anchorPoint, propIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedCollectionNameFromProp(_ped, anchorPoint, propIndex);
}
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
export function getDecorations(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedDecorations(_ped);
}
/**
 * A getter for [SET_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x95E3D6257B166CF2).
 *
 * Hash: 0xF5A904F9
 */
export function getDensityMultiplier() {
    return GetPedDensityMultiplier();
}
/**
 * Returns global drawable index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Drawables are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
 *
 * If all drawables from all collections are placed into one continuous array - the global index will correspond to the index of drawable in such array. Local index is index of drawable in this array relative to the start of the given collection.
 *
 * Hash: 0x280F1FC3
 */
export function getDrawableGlobalIndexFromCollection(ped, componentId, collection, drawableId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedDrawableGlobalIndexFromCollection(_ped, componentId, collection, drawableId);
}
/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection local drawable index (inside [GET_PED_DRAWABLE_VARIATION_COLLECTION_NAME](#\_0xBCE0AB63) collection) instead of the global drawable index.
 *
 * Hash: 0x9970386F
 */
export function getDrawableVariationCollectionLocalIndex(ped, componentId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedDrawableVariationCollectionLocalIndex(_ped, componentId);
}
/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection name instead of the global drawable index.
 *
 * Should be used together with [GET_PED_DRAWABLE_VARIATION_COLLECTION_LOCAL_INDEX](#\_0x9970386F).
 *
 * Hash: 0xBCE0AB63
 */
export function getDrawableVariationCollectionName(ped, componentId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedDrawableVariationCollectionName(_ped, componentId);
}
/**
 * A getter for [\_SET_PED_EYE_COLOR](#\_0x50B56988B170AFDF). Returns -1 if fails to get.
 *
 * Hash: 0xA47B860F
 */
export function getEyeColor(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedEyeColor(_ped);
}
/**
 * A getter for [\_SET_PED_FACE_FEATURE](#\_0x71A5C1DBA060049E). Returns 0.0 if fails to get.
 *
 * Hash: 0xBA352ADD
 */
export function getFaceFeature(ped, index) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedFaceFeature(_ped, index);
}
/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 *
 * Hash: 0xA3EA2893
 */
export function getHairColor(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedHairColor(_ped);
}
/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 *
 * Hash: 0x4B087305
 */
export function getHairHighlightColor(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedHairHighlightColor(_ped);
}
/**
 * A getter for [SET_PED_HEAD_OVERLAY](#\_0x48F44967FA05CC1E) and [\_SET_PED_HEAD_OVERLAY_COLOR](#\_0x497BF74A7B9CB952) natives.
 *
 * Hash: 0xC46EE605
 */
export function getHeadOverlayData(ped, index) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedHeadOverlayData(_ped, index);
}
/**
 * Gets a ped model's health config.
 *
 * Hash: 0xF71542F7
 */
export function getModelHealthConfig(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetPedModelHealthConfig(modelHash);
}
/**
 * Gets a ped model's personality type.
 *
 * Hash: 0xFE08CAD6
 */
export function getModelPersonality(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    return GetPedModelPersonality(modelHash);
}
/**
 * No comment provided
 *
 * Hash: 0x69E81E3D
 */
export function getMovementClipset(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedMovementClipset(_ped);
}
/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection local prop index (inside [GET_PED_PROP_COLLECTION_NAME](#\_0x6B5653E4) collection) instead of the global prop index.
 *
 * Hash: 0xCD420AD1
 */
export function getPropCollectionLocalIndex(ped, anchorPoint) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedPropCollectionLocalIndex(_ped, anchorPoint);
}
/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection name instead of the global drawable index.
 *
 * Should be used together with [GET_PED_PROP_COLLECTION_LOCAL_INDEX](#\_0xCD420AD1).
 *
 * Hash: 0x6B5653E4
 */
export function getPropCollectionName(ped, anchorPoint) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedPropCollectionName(_ped, anchorPoint);
}
/**
 * Returns global prop index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Props are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
 *
 * If all props from all collections are placed into one continuous array - the global index will correspond to the index of the prop in such array. Local index is index of the prop in this array relative to the start of the given collection.
 *
 * Hash: 0x2CB45CDC
 */
export function getPropGlobalIndexFromCollection(ped, anchorPoint, collection, propIndex) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedPropGlobalIndexFromCollection(_ped, anchorPoint, collection, propIndex);
}
/**
 * A getter for [SET_PED_SWEAT](#\_0x27B0405F59637D1F).
 *
 * Hash: 0x44B91E94
 */
export function getSweat(ped) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedSweat(_ped);
}
/**
 * An alternative to [IS_PED_COMPONENT_VARIATION_GEN9\_EXCLUSIVE](#\_0xC767B581) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x33B2AFA2
 */
export function isCollectionComponentVariationGen9Exclusive(ped, componentId, collection, drawableId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedCollectionComponentVariationGen9Exclusive(_ped, componentId, collection, drawableId);
}
/**
 * An alternative to [IS_PED_COMPONENT_VARIATION_VALID](#\_0xE825F6B6CEA7671D) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0xCA63A52A
 */
export function isCollectionComponentVariationValid(ped, componentId, collection, drawableId, textureId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedCollectionComponentVariationValid(_ped, componentId, collection, drawableId, textureId);
}
/**
 * No comment provided
 *
 * Hash: 0xC767B581
 */
export function isComponentVariationGen9Exclusive(ped, componentId, drawableId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return IsPedComponentVariationGen9Exclusive(_ped, componentId, drawableId);
}
/**
 * Sets whether peds can stand on top of *all* vehicles without falling off.
 *
 * Note this flag is not replicated automatically, you will have to manually do so.
 *
 * Hash: 0x90A9E0B2
 */
export function overridesCanStandOnTopFlag(flag) {
    OverridePedsCanStandOnTopFlag(flag);
}
/**
 * Allows the bypassing of default game behavior that prevents the use of [SET_PED_DRIVE_BY_CLIPSET_OVERRIDE](#\_0xED34AB6C5CB36520) in certain scenarios to avoid clipping issues (e.g., when there is more than one Ped in a vehicle).
 *
 * Note: This flag and the overridden clipset are not replicated values and require synchronization through user scripts. Additionally, current game behavior also restricts applying this clipset locally when in first-person mode and will require a temporary workaround.
 *
 * Hash: 0xB14F8EAD
 */
export function overridesUseDefaultDriveByClipset(flag) {
    OverridePedsUseDefaultDriveByClipset(flag);
}
/**
 * Restores an overridden ped model personality type to the default value.
 *
 * Hash: 0x79A12861
 */
export function resetModelPersonality(modelHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    ResetPedModelPersonality(modelHash);
}
/**
 * An alternative to [SET_PED_COMPONENT_VARIATION](#\_0x262B14F48D29DE80) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x88711BBA
 */
export function setCollectionComponentVariation(ped, componentId, collection, drawableId, textureId, paletteId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCollectionComponentVariation(_ped, componentId, collection, drawableId, textureId, paletteId);
}
/**
 * An alternative to [SET_PED_PRELOAD_PROP_DATA](#\_0x2B16A3BFF1FBCE49) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Hash: 0x14B5BBE0
 */
export function setCollectionPreloadPropData(ped, anchorPoint, collection, propIndex, textureId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCollectionPreloadPropData(_ped, anchorPoint, collection, propIndex, textureId);
}
/**
 * An alternative to [SET_PED_PRELOAD_VARIATION_DATA](#\_0x39D55A620FCB6A3A) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 *
 * Hash: 0x3EC75558
 */
export function setCollectionPreloadVariationData(ped, componentId, collection, drawableId, textureId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCollectionPreloadVariationData(_ped, componentId, collection, drawableId, textureId);
}
/**
 * An alternative to [SET_PED_PROP_INDEX](#\_0x93376B65A266EB5F) that uses local collection indexing instead of the global one.
 *
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 *
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 *
 * Hash: 0x75240BCB
 */
export function setCollectionPropIndex(ped, anchorPoint, collection, propIndex, textureId, attach) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetPedCollectionPropIndex(_ped, anchorPoint, collection, propIndex, textureId, attach);
}
/**
 * Override the limits on the number and types of melee combatants. The game is limited to at most ten combatants among the three types: primary, secondary, and observers.
 *
 * This native infers the number of observers based on the primary and secondary counts.
 *
 * Hash: 0x8E51EC29
 */
export function setMeleeCombatLimits(primaryCount, secondaryCount, populationPedCount) {
    SetPedMeleeCombatLimits(primaryCount, secondaryCount, populationPedCount);
}
/**
 * Sets a ped model's health config.
 * Takes effect only after setting player model with `SET_PLAYER_MODEL`.
 *
 * Hash: 0xAF12A05D
 */
export function setModelHealthConfig(modelHash, configName) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    SetPedModelHealthConfig(modelHash, configName);
}
/**
 * Overrides a ped model personality type.
 *
 * Hash: 0x46F6B38B
 */
export function setModelPersonality(modelHash, personalityHash) {
    if (typeof modelHash === 'string')
        modelHash = GetHashKey(modelHash);
    if (typeof personalityHash === 'string')
        personalityHash = GetHashKey(personalityHash);
    SetPedModelPersonality(modelHash, personalityHash);
}
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
export function setTurningThresholds(min, max) {
    SetPedTurningThresholds(min, max);
}
/**
 * Returns the bone matrix of the specified bone id. usefull for entity attachment
 *
 * Hash: 0x9C5E7C9C
 */
export function getBoneMatrix(ped, boneId) {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetPedBoneMatrix(_ped, boneId);
}
