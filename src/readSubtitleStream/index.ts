import type { SubtitleTrack } from "../SubtitleTrack.js";
import generateSubtitleFolderName from "./generateSubtitleFolderName.js";
import getIsDefaulSubtitle from "./getIsDefaultSubtitle.js";
import getIsForcedSubtitle from "./getIsForcedSubtitle.js";
import getLanguage from "./getLanguage.js";
import getIsAutoSelect from './getIsAutoSelect.js'
import generateSubtitlePlaylistURI from "./generateSubtitlePlaylistURI.js";

export default function readSubtitleStream(
  output: SubtitleStream,
  subtitleIndex: number
) : SubtitleTrack {
  const language = getLanguage(output);
  const isForced = getIsForcedSubtitle(output)
  // const name = generateSubtitleName(language, isForced) 
  const isDefault = getIsDefaulSubtitle(output);
  const isAutoSelect = getIsAutoSelect(output);

  const subtitleFolder = generateSubtitleFolderName(language, subtitleIndex);
  const subtitlePlaylistURI = generateSubtitlePlaylistURI(subtitleFolder);

  return {
    language,
    isDefault,
    isAutoSelect,
    isForced,
    // language,
    // uri,
    subtitleIndex,
    subtitleFolder,
    subtitlePlaylistURI,
    // raw: { ...output }
  }
}