import type { AudioTrack } from "../AudioTrack";
import type { ResolveURIFn } from "../ResolveURI";
import constructAudioLine from "./constructAudioLine.js";
import prependLinebreak from './prependLinebreak.js';

export default function buildAudioEntries(resolveURI: ResolveURIFn, tracks: AudioTrack[]): string[] {
  const audioDescriptions = tracks.map((track) => constructAudioLine(resolveURI, track));
  return prependLinebreak(tracks.length, audioDescriptions);
}