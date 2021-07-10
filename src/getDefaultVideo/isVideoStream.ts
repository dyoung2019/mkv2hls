import type { FFProbeOutput } from "../FFProbeOutput";

export default function isVideoStream(output: FFProbeOutput) {
  const [type, data] = output
  return type === 'stream' && data['codec_type'] === 'video'
}