// https://github.com/citation-style-language/locales/blob/master/locales.json
// const findLang = require('./src/findLanguageViaCode')

const languages = require('./bcp47-languages.json')
const regions = require('./bcp47-regions.json')
const isoNativeNames = require('./iso639_2_natives.json')
const isoIntNames = require('./iso639_2_ints.json')
// const scriptTypes = require('./bcp47-script_types.json')
const overrides = require('./overrides.json')

function findLanguage(languageCode) {
  const extractLanguageKey = tokens => {
      // always first token
    return tokens[0]
  }

  const getInternationLanguageName = key => {
    return languages[key] || isoIntNames[key]
  }

  const extractRegionCode = tokens => {
    const noOfTokens = tokens.length
    
    switch(noOfTokens) {
      case 2:
        return tokens[1]
      case 3:
        return tokens[2]
      default:
        return ''
    }
  }

  const extractRegionValue = key => {
    return (key !== '') ? regions[key] : null
  }

  const extractScriptTypeCode = tokens => {
    const noOfTokens = tokens.length

    switch(noOfTokens) {
      case 3:
        return tokens[1]
      default:
        return ''
    }
  }

  // const extractScriptTypeValue = key => {
  //   return (key !== '') ? scriptTypes[key] : null
  // }

  const getNativeLanguageName = (code, prefix) => {
    const isoValue = isoNativeNames[code] || isoNativeNames[prefix]
    return !!isoValue ? isoValue : null
  }

  const formatScriptType = (value) => {
    return !!value ? '[' + value + '.]' : ''
  }

  const formatRegion = (value) => {
    return !!value ? `.${value}` : ''
  }

  const formatLanguageDescription = (native, international) => {
    // prefer language name in native language
    return native || international
  }

  const parts = languageCode.split('-')

  const languageKey = extractLanguageKey(parts)
  const internationalLanguageName = getInternationLanguageName(languageKey)

  // region value
  const regionKey = extractRegionCode(parts)
  const regionValue = extractRegionValue(regionKey)

  const scriptTypeKey = extractScriptTypeCode(parts)
  // const scriptTypeValue = extractScriptTypeValue(scriptTypeKey)

  const nativeLanguageName = getNativeLanguageName(languageCode, languageKey)

  const overrideDescription = overrides[languageCode]

  const scriptTypeFormatted = formatScriptType(scriptTypeKey)
  const regionFormatted = formatRegion(regionKey)
  const languageFormatted = formatLanguageDescription(nativeLanguageName, internationalLanguageName)

// 1. use alternative description if found
  const fullDescription = 
    overrideDescription // ignore script
    || !!scriptTypeKey && `${internationalLanguageName} ${scriptTypeFormatted} ${regionFormatted}` // plain text
    || !!regionValue && `${languageFormatted} ${regionFormatted}` // code 
    || languageFormatted // found on iso 649


  // console.log(altValue)
  // console.log(regions)
  // console.log(languages)

  // console.log('languageKey', languageKey)
  // console.log('languageValue', languageValue)

  // console.log(fullDescription)
  // console.log('altDescription', altDescription)
  // console.log('isoDescription', isoDescription)
  // console.log('regionCode', regionCode)
  // console.log('regionValue', regionValue)

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

module.exports = findLanguage