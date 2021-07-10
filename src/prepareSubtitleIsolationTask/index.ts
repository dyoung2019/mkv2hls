import getTaskPreamble from "../getTaskPreamble/index.js";
import type { ConversionConfiguration } from "../ConversionConfiguration";
import type { SubtitleTrack } from "../SubtitleTrack";

export default function prepareSubtitleIsolationTask(
  config: ConversionConfiguration,
  tempVideoFilePath: string,
  track: SubtitleTrack) {

    return [
      ...getTaskPreamble(config.sourceFile, config),
      ['-c', 'copy'],
      ['-disposition:s:0'], // remove default sub
      ['-default'], // remove default
      ['-map', '0:v'], // map all video
      // ['-map',  `0:a:0`], // map default audio
      ['-map', `0:s:${track.subtitleIndex}`], // map subtitle
      [tempVideoFilePath]
      // getTinyVideoFrame(),
      // getTinyVideoBitRate(),
      // getTinyVideoMaxRate(),
      // getTinyVideoMaxBufferSize(),
      // getSubPlaylistPath(tempFilePath),
      // getSubtitleMapping(track)
    ]

}