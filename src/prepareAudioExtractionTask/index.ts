import getTaskPreamble from "../getTaskPreamble/index.js";
import type { AudioTrack } from "../AudioTrack"
import type { ConversionConfiguration } from "../ConversionConfiguration.js"
import getAudioBitRate from "./getAudioBitRate.js"
import getAudioCodec from "./getAudioCodec.js"
import getAudioMapping from "./getAudioMapping.js"
import getAudioRate from "./getAudioRate.js"

export default function prepareAudioExtractionTask(
  config: ConversionConfiguration,
  track: AudioTrack
) {
  const flags = {
    noVideo: '-vn',
    noSubs: '-sn',
    mapStream: '-map',
    codec: '-a:c',
    audioRate: '-ar',
    audioBitRate: '-b:a',
  }

  return [
    ...getTaskPreamble(config.sourceFile, config),
    [flags.audioBitRate, getAudioBitRate(track.audioBitRate)],
    [flags.noVideo],
    [flags.noSubs],
    [flags.codec, getAudioCodec(track.audioCodec)],
    [flags.audioRate, getAudioRate(track.audioRate)],
    [flags.mapStream, getAudioMapping(track.audioIndex)],
    [track.audioPlaylistURI]
  ]

  // return [
  //   getTaskPreamble(config.sourceFile, config)
  //   [flags.audioBitRate, getAudioBitRate(track.audioBitRate)],
  //   [flags.noVideo],
  //   [flags.noSubs],
  //   [flags.codec, getAudioCodec(track.audioCodec)],
  //   [flags.audioRate, getAudioRate(track.audioRate)],
  //   [flags.mapStream, getAudioMapping(track.audioIndex)],
  //   [track.audioPlaylistURI]
  // ]
}