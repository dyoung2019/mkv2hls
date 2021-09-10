import type { RenditionTask } from '../RenditionTask'

export default function getTaskMaxRate(task: RenditionTask) {
  return ['-maxrate', task.maxRate]
}