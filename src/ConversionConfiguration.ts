export interface ConversionConfiguration {
  sourceFile: string;
  isVodPlaylist: boolean;
  segmentLength: number;
  minFrameInterval: number;
  overwriteFiles: boolean;
  segmentNumberFormat: string;
}