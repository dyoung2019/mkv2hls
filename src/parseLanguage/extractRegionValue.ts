import * as _regions from './bcp47-regions.json';

type RegionsEntry = {
  [key: string]: string;
}

export default function extractRegionValue(key: string) {
  const regions: RegionsEntry = _regions;

  return (key !== '') ? regions[key] : null
}
