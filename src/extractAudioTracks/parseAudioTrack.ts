import type { FFProbeOutput } from "../FFProbeOutput.js";
import readAudioStream from "../readAudioStream/index.js";

export default function parseAudioTrack(output: FFProbeOutput, index: number) {
  const [_, props] = output;
  return readAudioStream(props, index);
}
