import type { VideoInfo } from "../VideoInfo.js";
import filterRenditions from "./filterRenditions.js";
import prepareRendition from "./prepareRendition.js";

export default function extractRenditions(info: VideoInfo) {  
  return filterRenditions(info)
    .map(prepareRendition);
}