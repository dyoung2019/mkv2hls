import type { RenditionTask } from "../RenditionTask.js";

export default function getVideoAspectRatioFrame(task: RenditionTask) {
  return [
    '-vf',
   `scale=w=${task.containerWidth}:h=${task.containerHeight}:force_original_aspect_ratio=decrease`
  ]
}