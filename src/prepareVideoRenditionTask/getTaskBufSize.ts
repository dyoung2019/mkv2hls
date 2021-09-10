import type { RenditionTask } from '../RenditionTask';

export default function getTaskBufSize(task: RenditionTask) {
  return ['-bufsize', task.bufSize];
}