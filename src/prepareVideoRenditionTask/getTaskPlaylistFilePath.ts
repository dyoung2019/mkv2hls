import type {RenditionTask} from '../RenditionTask';

export default function getTaskPlaylistFilePath(folderPath: string, task: RenditionTask) {
  return [`${folderPath}/${task.prefix}.m3u8`]
}
