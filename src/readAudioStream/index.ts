import getIsForcedAudio from "./getIsForcedAudio.js";
import getIsDefaultAudio from './getIsDefaultAudio.js';
import getAudioTitle from "./getAudioTitle.js";
import getAudioLangaugeCode from "./getAudioLanguageCode.js";
import generateAudioFolderName from "./generateAudioFolderName.js";
import type { AudioTrack } from "../AudioTrack.js";
import generateAudioPlaylistURI from "./generateAudioPlaylistURI.js";

export default function readAudioStream(
  output: AudioStream,
  audioIndex: number
  ): AudioTrack {
  const isForced = getIsForcedAudio(output);
  const isDefault = getIsDefaultAudio(output);
  const title = getAudioTitle(output);
  
  const languageCode = getAudioLangaugeCode(output);
  const audioFolderName = generateAudioFolderName(languageCode, audioIndex);
  const audioPlaylistURI = generateAudioPlaylistURI(audioFolderName);

  return {
    audioIndex,
    title,
    isForced,
    isDefault,
    languageCode,
    audioFolderName,
    audioPlaylistURI,
    // raw: {...output}
  }
}