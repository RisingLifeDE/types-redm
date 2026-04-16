/**
 * 0 = american (en-US)
 * 1 = french (fr-FR)
 * 2 = german (de-DE)
 * 3 = italian (it-IT)
 * 4 = spanish (es-ES)
 * 5 = brazilian (pt-BR)
 * 6 = polish (pl-PL)
 * 7 = russian (ru-RU)
 * 8 = korean (ko-KR)
 * 9 = chinesetrad (zh-TW)
 * 10 = japanese (ja-JP)
 * 11 = mexican (es-MX)
 * 12 = chinesesimp (zh-CN)
 *
 * Hash: 0xDB917DA5C6835FCC | Since: 1207 | API-Set: unknown
 */
export function getCurrentLanguage() {
    return GetCurrentLanguage();
}
/**
 * 0 = DATE_FORMAT_DMY
 * 1 = DATE_FORMAT_MDY
 * 2 = DATE_FORMAT_YMD
 *
 * Old name: _LOCALIZATION_GET_SYSTEM_DATE_FORMAT
 *
 * Hash: 0x76E30B799EBEEA0F | Since: 1207 | API-Set: unknown
 */
export function getSystemDateType() {
    return LocalizationGetSystemDateType();
}
/**
 * Same return values as GET_CURRENT_LANGUAGE
 *
 * Hash: 0x3C1A05F86AE6ACB5 | Since: 1207 | API-Set: unknown
 */
export function getSystemLanguage() {
    return LocalizationGetSystemLanguage();
}
/**
 * Returns true if the current language is american, french, german, italian, spanish, brazilian or mexican.
 * _DOES_*
 *
 * Hash: 0x45D50415E4D885FF | Since: 1207 | API-Set: unknown
 */
export function doesCurrentLanguageSupportCondensedStyle() {
    return DoesCurrentLanguageSupportCondensedStyle();
}
