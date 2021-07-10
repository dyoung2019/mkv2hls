import type { FFProbeOutput } from "../FFProbeOutput.js";
import isVideoStream from "./isVideoStream.js";

export default function getAllVideoStreams(outputs: FFProbeOutput[]) {
  return outputs.filter(isVideoStream)
    .map(([_, properties]) => properties)
}