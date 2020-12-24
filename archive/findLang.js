// https://github.com/citation-style-language/locales/blob/master/locales.json
// const findLang = require('./src/findLanguageViaCode')

const languages = require('./src/bcp47-languages.json')
const regions = require('../src/bcp47-regions.json')
const iso639 = require('../src/iso639_2_natives.json')
const scriptTypes = require('../src/bcp47-script_types.json')
const overrides = require('../src/overrides.json')

// bcp47 
const languageCode = 'fre-CA'

const dashIndex = languageCode.lastIndexOf('-')

const tokens = languageCode.split('-')
const noOfTokens = tokens.length

const languageKey = tokens[0]
let regionCode = ''
let scriptCode = ''

if (noOfTokens === 2) {
  // [1] country code
  regionCode = tokens[1]
} else if (noOfTokens === 3) {
  // [1] script code then [2] country code
  scriptCode = tokens[1]
  regionCode = tokens[2]
}

// language code 
languageValue = languages[languageKey] || iso639[languageKey]

// region value
let regionValue = null
if (regionCode !== '') {
  regionValue = regions[regionCode]
}

let scriptValue = null
if (scriptCode !== '') {
  scriptValue = scriptTypes[scriptCode]
}

const isoValue = iso639[languageCode] || iso639[languageKey]

console.log('languageKey', languageKey)
console.log('languageValue', languageValue)
const altDescription = overrides[languageCode]
const isoDescription = !!isoValue ?  isoValue : null

console.log('altDescription', altDescription)
console.log('isoDescription', isoDescription)
console.log('regionCode', regionCode)
console.log('regionValue', regionValue)

const scriptTypeDescription = !!scriptValue ? '[' + scriptValue + ']' : ''
const regionDescription = !!regionCode ? `.${regionCode}` : ''
const languageDescription = isoDescription || languageValue

// 1. use alternative description if found
const fullDescription = altDescription // ignore script
  || !!scriptValue && `${languageValue} ${scriptTypeDescription} ${regionDescription}` // plain text
  || !!regionValue && `${languageDescription} ${regionDescription}` // code 
  || languageDescription // found on iso 649

console.log(fullDescription)
// console.log(altValue)
// console.log(regions)
// console.log(languages)