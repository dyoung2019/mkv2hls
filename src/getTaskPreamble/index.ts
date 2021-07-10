import type { ConversionConfiguration } from "../ConversionConfiguration";
import getInputFile from "./getInputFile.js";
import getMinFrameInterval from "./getMinFrameInterval.js";
import getOverwriteFiles from "./getOverwriteFiles.js";
import getPlaylistType from "./getPlaylistType.js";
import getSegmentLength from "./getSegmentLength.js";

export default function getTaskPreamble(
  inputPath: string,
  config: ConversionConfiguration
) {
  return [
    ['-hide_banner'],
    getOverwriteFiles(config.overwriteFiles),
    getInputFile(inputPath),
    getPlaylistType(config.isVodPlaylist),
    getSegmentLength(config.segmentLength),
    getMinFrameInterval(config.minFrameInterval)
  ]
}