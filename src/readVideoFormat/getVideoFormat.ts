import type { FFProbeOutput } from "../FFProbeOutput.js"
import isFormatOutput from "./isFormatOutput.js"

export default function getVideoFormat(outputs: FFProbeOutput[]): FormatStream {
  const [_, properties] = outputs.filter(isFormatOutput)[0]
  return properties
}