import type { FFProbeOutput } from "../FFProbeOutput.js";
import isSubtitleStream from "./isSubtitleStream.js";
import parseSubtitleTrack from "./parseSubtitleTrack.js";

export default function extractAllSubtitles(
  outputs: FFProbeOutput[]
  ) {
  const subs = outputs.filter(isSubtitleStream);
  return subs.map(parseSubtitleTrack);
}

