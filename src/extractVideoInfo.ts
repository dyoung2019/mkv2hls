import type { FFProbeOutput } from './FFProbeOutput.js';
import getDefaultVideo from './getDefaultVideo/index.js';
import readVideoFormat from './readVideoFormat/index.js';
import type { VideoInfo } from './VideoInfo.js';

export default function extractVideoInfo(
  outputs: FFProbeOutput[]
  ): VideoInfo {
  const { index, width, height } = getDefaultVideo(outputs);
  const { duration } = readVideoFormat(outputs);

  return {
    index,
    width,
    height,
    duration
  }
}