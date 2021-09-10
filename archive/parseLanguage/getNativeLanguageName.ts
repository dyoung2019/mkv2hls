import * as _isoNativeNames from './iso639_2_natives.json';

type IsoNativesNameEntry = {
  [key: string]: string;
}

export default function getNativeLanguageName(code: string, prefix: string) {
  const isoNativeNames: IsoNativesNameEntry = _isoNativeNames;

  const isoValue = isoNativeNames[code] || isoNativeNames[prefix];
  return !!isoValue ? isoValue : null;
}