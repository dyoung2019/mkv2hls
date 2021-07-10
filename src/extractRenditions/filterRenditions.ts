import type { VideoInfo } from "../VideoInfo.js";
import conversionRequired from "./conversionRequired.js";
import { renditions } from "./renditions.js";

export default function filterRenditions(info: VideoInfo) {
  let doConversion = false;
  const length = renditions.length
  
  let i = 0;
  let isLoopIncomplete = false;
  const validations = []
  do {
    isLoopIncomplete = i < length

    if (isLoopIncomplete) {
      const rendition = renditions[i];

      doConversion = conversionRequired(info, rendition);
      validations.push(rendition);
    }
    i += 1
  } while (isLoopIncomplete && doConversion)
  return validations;
}