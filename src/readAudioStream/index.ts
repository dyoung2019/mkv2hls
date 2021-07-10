import getIsForcedAudio from "./getIsForcedAudio.js";
import getIsDefaultAudio from './getIsDefaultAudio.js';
import getAudioTitle from "./getAudioTitle.js";
import getAudioLangaugeCode from "./getAudioLanguageCode.js";
import parseLanguage from "../parseLanguage/index.js";
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
  const languageDescription =  
      !!languageCode 
      ? parseLanguage(languageCode).name
      : null;
  const audioFolderName = generateAudioFolderName(languageCode, audioIndex);
  const audioPlaylistURI = generateAudioPlaylistURI(audioFolderName);

  return {
    audioIndex,
    title,
    isForced,
    isDefault,
    languageCode,
    languageDescription,
    audioFolderName,
    audioPlaylistURI
  }
}