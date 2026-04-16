import {Vector3,Vector2,IEntity,IPed,IPlayer,IVehicle,IObject,IBlip,ICamera} from '@risinglife/redm-shared'

/**
 * index: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eAnimalTuningBools
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/ANIMAL_TUNING_BOOL_PARAMS
 * 
 * Hash: 0x1C1993824A396603 | Since: 1207
 */
export function getAnimalTuningBoolParam(animal: number | IPed, index: number): boolean {
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    return GetAnimalTuningBoolParam(_animal, index);
}

/**
 * index: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eAnimalTuningFloats
 * https://github.com/femga/rdr3_discoveries/tree/master/AI/ANIMAL_TUNING_FLOAT_PARAMS
 * 
 * Hash: 0x4BC3ECFDA0297E27 | Since: 1207
 */
export function getAnimalTuningFloatParam(animal: number | IPed, index: number): number {
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    return GetAnimalTuningFloatParam(_animal, index);
}

/**
 * No comment provided
 * 
 * Hash: 0xE108489621422F91 | Since: 1207
 */
export function getSpeciesTuningFloatParam(p0: number | string): number {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    return GetSpeciesTuningFloatParam(p0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x96AA1304D30E6BC3 | Since: 1355
 */
export function resetAnimalTuningBoolParam(animal: number | IPed, index: number): void {
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    ResetAnimalTuningBoolParam(_animal, index);
}

/**
 * No comment provided
 * 
 * Hash: 0xE776A195488FC520 | Since: 1355
 */
export function resetAnimalTuningFloatParam(animal: number | IPed, index: number): void {
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    ResetAnimalTuningFloatParam(_animal, index);
}

/**
 * No comment provided
 * 
 * Hash: 0x9FF1E042FA597187 | Since: 1207
 */
export function setAnimalTuningBoolParam(animal: number | IPed, index: number, value: boolean): void {
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    SetAnimalTuningBoolParam(_animal, index, value);
}

/**
 * No comment provided
 * 
 * Hash: 0xCBDA22C87977244F | Since: 1207
 */
export function setAnimalTuningFloatParam(animal: number | IPed, index: number, value: number): void {
    const _animal = animal instanceof IPed ? animal.handle() : animal;
    SetAnimalTuningFloatParam(_animal, index, value);
}

/**
 * No comment provided
 * 
 * Hash: 0x6D1D94C2459B42EE | Since: 1207
 */
export function setSpeciesTuningBoolParam(p0: number | string): void {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    SetSpeciesTuningBoolParam(p0, 0, 0, false);
}

/**
 * No comment provided
 * 
 * Hash: 0x963240B6C252BA49 | Since: 1207
 */
export function setSpeciesTuningFloatParam(p0: number | string): void {
    if (typeof p0 === 'string') p0 = GetHashKey(p0)
    SetSpeciesTuningFloatParam(p0, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0x0816C31480764AB0 | Since: 1207
 */
export function _0x0816C31480764AB0(): void {
    Citizen.invokeNative('0x0816C31480764AB0', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x09EE00B8F858E0BE | Since: 1207
 */
export function _0x09EE00B8F858E0BE(): any {
    return Citizen.invokeNative('0x09EE00B8F858E0BE', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1520626FFAFFFA8F | Since: 1207
 */
export function _0x1520626FFAFFFA8F(): void {
    Citizen.invokeNative('0x1520626FFAFFFA8F', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x17E3E5C46ECCD308 | Since: 1207
 */
export function _0x17E3E5C46ECCD308(): void {
    Citizen.invokeNative('0x17E3E5C46ECCD308', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x19870C40C7EE15BE | Since: 1207
 */
export function _0x19870C40C7EE15BE(): any {
    return Citizen.invokeNative('0x19870C40C7EE15BE', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x1DA6CB02071055D5 | Since: 1207
 */
export function _0x1DA6CB02071055D5(): Vector3 {
    return new Vector3(Citizen.invokeNative('0x1DA6CB02071055D5', undefined));
}

/**
 * No comment provided
 * 
 * Hash: 0x2DF3D457D86F8E57 | Since: 1207
 */
export function _0x2DF3D457D86F8E57(): void {
    Citizen.invokeNative('0x2DF3D457D86F8E57', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x34B9C4D86DF2C2F3 | Since: 1207
 */
export function _0x34B9C4D86DF2C2F3(): any {
    return Citizen.invokeNative('0x34B9C4D86DF2C2F3', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x36486AF7DA93A464 | Since: 1207
 */
export function _0x36486AF7DA93A464(): any {
    return Citizen.invokeNative('0x36486AF7DA93A464', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x53187E563F938E76 | Since: 1207
 */
export function _0x53187E563F938E76(): any {
    return Citizen.invokeNative('0x53187E563F938E76', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x6C57BEA886A20C6B | Since: 1207
 */
export function _0x6C57BEA886A20C6B(): void {
    Citizen.invokeNative('0x6C57BEA886A20C6B', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x706B434FEFAD6A24 | Since: 1207
 */
export function _0x706B434FEFAD6A24(): void {
    Citizen.invokeNative('0x706B434FEFAD6A24', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x8049B17BEC937662 | Since: 1207
 */
export function _0x8049B17BEC937662(): any {
    return Citizen.invokeNative('0x8049B17BEC937662', undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xA881F5C77A560906 | Since: 1207
 */
export function _0xA881F5C77A560906(): void {
    Citizen.invokeNative('0xA881F5C77A560906', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC3D581A34BC0A1F0 | Since: 1207
 */
export function _0xC3D581A34BC0A1F0(): void {
    Citizen.invokeNative('0xC3D581A34BC0A1F0', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC72CE37081DAE625 | Since: 1207
 */
export function _0xC72CE37081DAE625(): void {
    Citizen.invokeNative('0xC72CE37081DAE625', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xC95611869E14F8AF | Since: 1207
 */
export function _0xC95611869E14F8AF(): void {
    Citizen.invokeNative('0xC95611869E14F8AF', undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xCC6B5AAFC87BFC7B | Since: 1207
 */
export function _0xCC6B5AAFC87BFC7B(): void {
    Citizen.invokeNative('0xCC6B5AAFC87BFC7B', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xD95F04A4E73BE85E | Since: 1207
 */
export function _0xD95F04A4E73BE85E(): any {
    return Citizen.invokeNative('0xD95F04A4E73BE85E', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE36D2CB540597EF7 | Since: 1207
 */
export function _0xE36D2CB540597EF7(): void {
    Citizen.invokeNative('0xE36D2CB540597EF7', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xE93415B3307208E5 | Since: 1207
 */
export function _0xE93415B3307208E5(): any {
    return Citizen.invokeNative('0xE93415B3307208E5', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}

/**
 * species: SPECIES_BIRD_CROW
 * 
 * Hash: 0xF2CCA7B68CFAB2B9 | Since: 1207
 */
export function _0xF2CCA7B68CFAB2B9(species: number | string, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number): void {
    if (typeof species === 'string') species = GetHashKey(species)
    Citizen.invokeNative('0xF2CCA7B68CFAB2B9', species, x1, y1, z1, x2, y2, z2, x3, y3, z3, 0, 0, 0, 0);
}

/**
 * No comment provided
 * 
 * Hash: 0xFA821997794F48E7 | Since: 1207
 */
export function _0xFA821997794F48E7(): void {
    Citizen.invokeNative('0xFA821997794F48E7', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFB16F08F47B83B4C | Since: 1207
 */
export function _0xFB16F08F47B83B4C(): void {
    Citizen.invokeNative('0xFB16F08F47B83B4C', undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFDB008B3BCF5992F | Since: 1207
 */
export function _0xFDB008B3BCF5992F(): void {
    Citizen.invokeNative('0xFDB008B3BCF5992F', undefined, undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0xFF1E339CE40EAAAF | Since: 1207
 */
export function _0xFF1E339CE40EAAAF(): void {
    Citizen.invokeNative('0xFF1E339CE40EAAAF', undefined, undefined);
}

/**
 * No comment provided
 * 
 * Hash: 0x933E5D31A7D13069 | Since: 1207
 */
export function addPedTo(ped: number | IPed): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    AddPedToFlock(undefined, _ped);
}

/**
 * Clear the herd.
 * 
 * Hash: 0x67A43EA3F6FE0076 | Since: 1207
 */
export function clearHerd(herdHandle: number | IEntity): void {
    const _herdHandle = herdHandle instanceof IEntity ? herdHandle.handle() : herdHandle;
    Citizen.invokeNative('0x67A43EA3F6FE0076', _herdHandle);
}

/**
 * No comment provided
 * 
 * Hash: 0xCB4EF7EDAE2E16F1 | Since: 1207
 */
export function createHerd(): number {
    return CreateHerd();
}

/**
 * Delete and invalidate the herd.
 * 
 * Hash: 0xE0961AED72642B80 | Since: 1207
 */
export function deleteHerd(herd: number | IEntity): void {
    const _herd = herd instanceof IEntity ? herd.handle() : herd;
    Citizen.invokeNative('0xE0961AED72642B80', _herd);
}

/**
 * Ped (horse) will run away from players and mounting will trigger them to buck until disabled.
 * Used for: REL_DOMESTICATED_ANIMAL
 * 
 * Hash: 0x3B005FF0538ED2A9 | Since: 1207
 */
export function getAnimalIsWild(ped: number | IPed): boolean {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetAnimalIsWild(_ped);
}

/**
 * enum eAnimalRarityLevel
 * {
 * ARL_COMMON,
 * ARL_RARE,
 * ARL_LEGENDARY,
 * ARL_NUMRARITYLEVELS
 * };
 * 
 * Hash: 0xF8B48A361DC388AE | Since: 1207
 */
export function getAnimalRarity(ped: number | IPed): number {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return GetAnimalRarity(_ped);
}

/**
 * No comment provided
 * 
 * Hash: 0x8D913E493BAFE0A3 | Since: 1207
 */
export function isHerdValid(herdHandle: number): boolean {
    return IsHerdValid(herdHandle);
}

/**
 * Return whether the ped is in the herd.
 * 
 * Hash: 0x9E13ACC38BA8F9C3 | Since: 1207
 */
export function isPedInHerd(herd: number | IEntity, ped: number | IPed): boolean {
    const _herd = herd instanceof IEntity ? herd.handle() : herd;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    return Citizen.invokeNative('0x9E13ACC38BA8F9C3', _herd, _ped);
}

/**
 * Remove the ped from a herd.
 * 
 * Hash: 0x408D1149C5E39C1E | Since: 1207
 */
export function removeHerdPed(herd: number | IEntity, ped: number | IPed): void {
    const _herd = herd instanceof IEntity ? herd.handle() : herd;
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    Citizen.invokeNative('0x408D1149C5E39C1E', _herd, _ped);
}

/**
 * No comment provided
 * 
 * Hash: 0xAEB97D84CDF3C00B | Since: 1207
 */
export function setAnimalIsWild(ped: number | IPed, toggle: boolean): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetAnimalIsWild(_ped, toggle);
}

/**
 * rarityLevel: see _GET_ANIMAL_RARITY
 * 
 * Hash: 0x8B6F0F59B1B99801 | Since: 1207
 */
export function setAnimalRarity(ped: number | IPed, rarityLevel: number): void {
    const _ped = ped instanceof IPed ? ped.handle() : ped;
    SetAnimalRarity(_ped, rarityLevel);
}

