import type { FFProbeOutput } from "../FFProbeOutput.js";
import getVideoDuration from "./getVideoDuration.js";
import getVideoFormat from "./getVideoFormat.js";
import validateVideoFormat from "./validateVideoFormat.js";

export default function readVideoFormat(outputs: FFProbeOutput[]) {
  const format = getVideoFormat(outputs)
  validateVideoFormat(format)
  return {
    duration: getVideoDuration(format)
  }
}