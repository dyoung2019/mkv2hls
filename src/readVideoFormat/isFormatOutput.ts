import type { FFProbeOutput } from "../FFProbeOutput"

export default function isFormatOutput(output: FFProbeOutput) {
  const [type] = output;
  return type === 'format';
}