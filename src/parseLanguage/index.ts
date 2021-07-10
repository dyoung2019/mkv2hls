import extractLanguageKey from "./extractLanguageKey.js";
import extractRegionCode from "./extractRegionCode.js";
import extractRegionValue from "./extractRegionValue.js";
import extractScriptTypeCode from "./extractScriptTypeCode.js";
import formatLanguageDescription from "./formatLanguageDescription.js";
import formatName from "./formatName.js";
import formatRegion from "./formatRegion.js";
import formatScriptType from "./formatScriptType.js";
import getInternationalLanguageName from "./getInternationalLanguageName.js";
import getNativeLanguageName from "./getNativeLanguageName.js";
import getOverrideDescription from "./getOverrideDescription.js";

export default function parseLanguage(code: string | null) {
  const languageCode = code || '';
  const parts = languageCode.split('-');

  const languageKey = extractLanguageKey(parts);
  const internationalLanguageName = getInternationalLanguageName(languageKey)

  // region value
  const regionKey = extractRegionCode(parts);
  const regionValue = extractRegionValue(regionKey);

  const nativeLanguageName = getNativeLanguageName(languageCode, languageKey);
  const overrideDescription = getOverrideDescription(languageCode);

  const scriptTypeKey = extractScriptTypeCode(parts);
  const scriptTypeFormatted = formatScriptType(scriptTypeKey);

  const regionFormatted = formatRegion(regionKey)
  const languageFormatted = formatLanguageDescription(nativeLanguageName, internationalLanguageName);

  const fullDescription = formatName(
    overrideDescription,
    scriptTypeKey,
    internationalLanguageName,
    scriptTypeFormatted,
    regionFormatted,
    regionValue, 
    languageFormatted);

  return {
    name: fullDescription,
    code: languageCode,
    overrideDescription,
    nativeLanguageName,
    internationalLanguageName,
    languageKey,
    languageFormatted,
    regionKey, 
    regionValue,
    regionFormatted,
    scriptTypeKey,
    // scriptTypeValue,
    scriptTypeFormatted
  }
}