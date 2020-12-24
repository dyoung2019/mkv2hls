const fs = require('fs')

const parseOverrides = () => {
  const dictionary = {}
  const locales = require('../misc/locales.json')
  // https://gist.github.com/liesislukas/6f3a0102b4d2ca7138f1c7c746247d9a
  const langNames = locales['language-names']
  for (let code in langNames) {

    const key = new String(code)
    const [native, int]  = langNames[code]

    dictionary[key] = native
  }
  return dictionary
}

const parseISO_639_2_Natives = () => {
  const dictionary = {}
  const iso = require('../misc/ISO_639-2.min.json')

  for (let code in iso ) {
    const pair = iso[code]
    
    const native = pair['native'][0]
    const int = pair['int'][0]

    const key = new String(code).toLowerCase()
    dictionary[key] = native
  }

  return dictionary
}

const parseISO_639_2_Ints = () => {
  const dictionary = {}
  const iso = require('../misc/ISO_639-2.min.json')

  for (let code in iso ) {
    const pair = iso[code]
    
    // const native = pair['native'][0]
    const int = pair['int'][0]

    const key = new String(code).toLowerCase()
    dictionary[key] = int
  }

  return dictionary
}

const parseWinLocales = () => {
  const locales = require('../misc/convertcsv.json')
  
  const aliases = {}
  for (let code in locales) {
    const value = locales[code]

    const key = value['LCID string']
    const language = value['Language code']

    if (!!key && !!language && key !== language) {
      const found = aliases[language]

      if (!found) {
        const list = [key]
        aliases[language] = list
      } else {
        aliases[language] = [...found, key]
      }
    }
  }
  return aliases
}

const writeJSONFile = (path, hash) => {
  fs.writeFileSync(path, JSON.stringify(hash))
}

const buildBCP47 = () => {


  const rows = require('../misc/bcp47-registry.json')

  const extractLanguages = records => {
    const dictionary = {}

    const langs = records.filter(row => row['Type'] === 'language')
    langs.forEach(lang => {
      const key = lang['Subtag']
      const value = lang['Description'][0]

      const found = dictionary[key]
      if (!found) {
        dictionary[key] = value
      } else {
        throw new Error(`DUP found ${key}, ${value}`)
      }
    })
    return dictionary
  }

  const extractRegions = records => {
    const regions = records.filter(row => row['Type'] === 'region')

    const dict = {}
    regions.forEach(region => {
      const key = region['Subtag']
      const value = region['Description'][0]

      const found = dict[key]
      if (!found) {
        dict[key] = value
      } else {
        throw new Error(`DUP found ${key}, ${value}`)
      }
    })

    return dict
  }  

  const extractScripts = records => {
    const regions = records.filter(row => row['Type'] === 'script')

    const dict = {}
    regions.forEach(region => {
      const key = region['Subtag']
      const value = region['Description'][0]

      const found = dict[key]
      if (!found) {
        dict[key] = value
      } else {
        throw new Error(`DUP found ${key}, ${value}`)
      }
    })

    return dict
  }

  writeJSONFile('./bcp47-languages.json', extractLanguages(rows))
  writeJSONFile('./bcp47-regions.json', extractRegions(rows))
  writeJSONFile('./bcp47-script_types.json', extractScripts(rows))
}

writeJSONFile('./overrides.json', parseOverrides())
writeJSONFile('./iso639_2_natives.json', parseISO_639_2_Natives())
writeJSONFile('./iso639_2_ints.json', parseISO_639_2_Ints())
buildBCP47()

// parseBCP47()

// console.log(parseWinLocales()) 
// console.log(bcp)
// console.log(dictionary['fr'])
// parseBCP47()
