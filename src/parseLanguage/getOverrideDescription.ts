import * as _overrides from './overrides.json';

type OverridesDictionary = {
  [key: string]: string;
}

export default function getOverrideDescription(languageCode: string) {
  const overrides: OverridesDictionary = _overrides;
  return overrides[languageCode];
}