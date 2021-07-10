import * as _languages from './bcp47-regions.json';
import * as _isoIntNames from './iso639_2_ints.json';

type LanguageEntry = {
  [key: string]: string;
}

type IsoIntNames = {
  [key: string]: string;
}

export default function getInternationalLanguageName(key: string) {
  const languages: LanguageEntry = _languages;
  const isoIntNames: IsoIntNames = _isoIntNames;

  return languages[key] || isoIntNames[key]
}