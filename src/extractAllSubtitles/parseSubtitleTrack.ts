import type { FFProbeOutput } from "../FFProbeOutput.js";
import readSubtitleStream from "../readSubtitleStream/index.js";

export default function parseSubtitleTrack(output: FFProbeOutput, index: number) {
  const [_, props] = output;
  return readSubtitleStream(props, index);
}