import generateURI from "../generateURI/index.js";
import type { ResolveURIFn } from "../ResolveURI.js";
import type { SubtitleTrack } from "../SubtitleTrack"
import getYesOrNo from "./getYesOrNo.js";

export default function constructSubtitleLine(resolveURI: ResolveURIFn, entry: SubtitleTrack): string {
  const {
    name,
    isDefault,
    isAutoSelect,
    isForced,
    language,
    subtitlePlaylistURI
  } = entry

  const uri = generateURI(resolveURI, subtitlePlaylistURI);
  const GROUP_ID = "subs"

  const characteristics = (!isForced)
    ? ',CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound"'
    : ''

  return `#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="${GROUP_ID}"` +
        `,NAME="${name}"` +
        `,DEFAULT=${getYesOrNo(isDefault)}` +
        `,AUTOSELECT=${getYesOrNo(isAutoSelect)}` +
        `,FORCED=${getYesOrNo(isForced)}` +
        `,LANGUAGE="${language}"` +
        characteristics +
        `,URI="${uri}"`
}
