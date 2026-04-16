/**
 * Allows StaticEmitter's without a linked entity to make use of environment features like occlusion and reverb even if they are located higher than 20.0 units above any static collision inside interiors.
 *
 * This native allows you to extend the probe range up to 150.0 units.
 *
 * Hash: 0x8AA1F3C2
 */
export function setEmitterProbeLength(probeLength) {
    SetEmitterProbeLength(probeLength);
}
/**
 * Adds an output for the specified audio submix.
 *
 * Hash: 0xAC6E290D
 */
export function addSubmixOutput(submixId, outputSubmixId) {
    AddAudioSubmixOutput(submixId, outputSubmixId);
}
/**
 * Creates an audio submix with the specified name, or gets the existing audio submix by that name.
 *
 * Hash: 0x658D2BC8
 */
export function createSubmix(name) {
    return CreateAudioSubmix(name);
}
/**
 * Sets a floating-point parameter for a submix effect.
 *
 * Hash: 0x9A209B3C
 */
export function setSubmixEffectParamFloat(submixId, effectSlot, paramIndex, paramValue) {
    SetAudioSubmixEffectParamFloat(submixId, effectSlot, paramIndex, paramValue);
}
/**
 * Sets an integer parameter for a submix effect.
 *
 * Hash: 0x77FAE2B8
 */
export function setSubmixEffectParamInt(submixId, effectSlot, paramIndex, paramValue) {
    SetAudioSubmixEffectParamInt(submixId, effectSlot, paramIndex, paramValue);
}
/**
 * Assigns a RadioFX effect to a submix effect slot.
 *
 * The parameter values for this effect are as follows (backticks are used to represent hashes):
 *
 * | Index | Type | Description |
 * |-|-|-|
 * | \`enabled\` | int | Enables or disables RadioFX on this DSP. |
 * | \`default\` | int | Sets default parameters for the RadioFX DSP and enables it. |
 * | \`freq_low\` | float |  |
 * | \`freq_hi\` | float |  |
 * | \`fudge\` | float |  |
 * | \`rm_mod_freq\` | float |  |
 * | \`rm_mix\` | float |  |
 * | \`o_freq_lo\` | float |  |
 * | \`o_freq_hi\` | float |  |
 *
 * Hash: 0xAAA94D53
 */
export function setSubmixEffectRadioFx(submixId, effectSlot) {
    SetAudioSubmixEffectRadioFx(submixId, effectSlot);
}
/**
 * Sets the volumes for the sound channels in a submix effect.
 * Values can be between 0.0 and 1.0.
 * Channel 5 and channel 6 are not used in voice chat but are believed to be center and LFE channels.
 * Output slot starts at 0 for the first ADD_AUDIO_SUBMIX_OUTPUT call then incremented by 1 on each subsequent call.
 *
 * Hash: 0x825DC0D1
 */
export function setSubmixOutputVolumes(submixId, outputSlot, frontLeftVolume, frontRightVolume, rearLeftVolume, rearRightVolume, channel5Volume, channel6Volume) {
    SetAudioSubmixOutputVolumes(submixId, outputSlot, frontLeftVolume, frontRightVolume, rearLeftVolume, rearRightVolume, channel5Volume, channel6Volume);
}
