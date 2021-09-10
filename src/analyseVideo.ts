
import extractVideoInfo from './extractVideoInfo.js';
import extractAllSubtitles from './extractAllSubtitles/index.js';
import extractAudioTracks from './extractAudioTracks/index.js';
import extractRenditions from './extractRenditions/index.js';
import type { FFProbeOutput } from './FFProbeOutput.js';
import type { ConversionTask } from './ConversionTask.js';

export default function analyseVideo(
  outputs: FFProbeOutput[]
): ConversionTask {

  // all mkv 
  const info = extractVideoInfo(outputs)

  return {
    info,
    subtitles: extractAllSubtitles(outputs),
    audioTracks: extractAudioTracks(outputs),
    renditions: extractRenditions(info),
  }
}
