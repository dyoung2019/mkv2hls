import type { FFProbeOutput } from "../FFProbeOutput.js";
import isAudioTrack from "./isAudioTrack.js";
import parseAudioTrack from "./parseAudioTrack.js";

export default function extractAudioTracks(
  outputs: FFProbeOutput[]
  ) {
  const tracks = outputs.filter(isAudioTrack);
  return tracks.map(parseAudioTrack);
}