import generateURI from "../generateURI/index.js";
import type { AudioTrack } from "../AudioTrack";
import type { ResolveURIFn } from "../ResolveURI.js";
import formatAudioLanguage from "./formatAudioLanguage.js";
import formatAudioTitle from "./formatAudioTitle.js";

export default function constructAudioLine(resolveURI: ResolveURIFn, params: AudioTrack): string {
  const uri = generateURI(resolveURI, params.audioPlaylistURI);

  return `#EXT-X-MEDIA:TYPE=AUDIO,` +
    `GROUP-ID="audio"` +
    formatAudioLanguage(params.languageCode) +
    formatAudioTitle(params.title) +
    `,AUTOSELECT=${params.isForced ? 'YES' : 'NO'}` +
    `,DEFAULT=${params.isDefault ? 'YES' : 'NO'}` +
    `,URI="${uri}"`
}
