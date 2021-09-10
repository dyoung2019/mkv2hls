import type { RenditionTask } from '../RenditionTask.js'

export default function getTaskVideoBitRate(task: RenditionTask) {
  return ['-b:v', `${task.videoBitrate}`]
}