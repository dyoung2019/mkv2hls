import type { ConversionConfiguration } from "../ConversionConfiguration";
import type { RenditionTask } from "../RenditionTask";

export default function getTaskSegmentNameConvention(
  folderPath:string, 
  task: RenditionTask,
  config: ConversionConfiguration) {
  return ['-hls_segment_filename', 
    `${folderPath}/${task.prefix}_${config.segmentNumberFormat}.ts`
  ];
}