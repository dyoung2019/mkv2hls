import getTaskPreamble from "../getTaskPreamble/index.js";
import type { ConversionConfiguration } from "../ConversionConfiguration";
import type { ResolveURIFn } from "../ResolveURI";
import type { SubtitleTrack } from "../SubtitleTrack";
import getSubtitleMapping from "./getSubtitleMapping.js";
import getTinyVideoBitRate from "./getTinyVideoBitRate.js";
import getTinyVideoFrame from "./getTinyVideoFrame.js";
import getTinyVideoMaxBufferSize from "./getTinyVideoMaxBufferSize.js";
import getTinyVideoMaxRate from "./getTinyVideoMaxRate.js";

export default function prepareSubtitleExtractionTask(
  config: ConversionConfiguration,
  tempVideoFilePath: string,
  track: SubtitleTrack,
  resolvePath: ResolveURIFn
) {

    return [
      ...getTaskPreamble(tempVideoFilePath, config),
      getTinyVideoFrame(),
      getTinyVideoBitRate(),
      getTinyVideoMaxRate(),
      getTinyVideoMaxBufferSize(),
      getSubtitleMapping(),
      [resolvePath(track.subtitlePlaylistURI)]
    ]

}