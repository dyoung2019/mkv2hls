import type { ResolveURIFn } from "../ResolveURI";
import type { SubtitleTrack } from "../SubtitleTrack";
import constructSubtitleLine from "./constructSubtitleLine.js";
import prependLinebreak from "./prependLinebreak.js";

export default function buildSubtitleLines(resolveURI: ResolveURIFn, subtitles: SubtitleTrack[]): string[] {
  const lines = subtitles.map((sub) => constructSubtitleLine(resolveURI, sub));
  return prependLinebreak(subtitles.length, lines);
}