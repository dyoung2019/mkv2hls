import type { FFProbeOutput } from "../FFProbeOutput.js";
import findDefaultVideo from "./findDefaultVideo.js";
import getAllVideoStreams from "./getAllVideoStreams.js";
import getVideoHeight from "./getVideoHeight.js";
import getVideoIndex from "./getVideoIndex.js";
import getVideoWidth from "./getVideoWidth.js";

export default function getDefaultVideo(outputs: FFProbeOutput[]) {
  const videos = getAllVideoStreams(outputs);
  const defaultVideo = findDefaultVideo(videos)

  if (!!defaultVideo) {
    return {
      index: getVideoIndex(defaultVideo),
      width: getVideoWidth(defaultVideo),
      height: getVideoHeight(defaultVideo)
    };
  } else {
    throw new Error('no default video found');
  }
}