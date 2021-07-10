import type { FFProbeOutput } from "../FFProbeOutput";

export default function isAudioTrack(output: FFProbeOutput) {
  const [type, props] = output;
  return type === "stream" && props.codec_type === 'audio';
}