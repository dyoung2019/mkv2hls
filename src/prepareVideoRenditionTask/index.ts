import type { ConversionConfiguration } from "../ConversionConfiguration";
import getTaskPreamble from "../getTaskPreamble/index.js";
import type { RenditionTask } from "../RenditionTask";
import getVideoAspectRatioFrame from "./getVideoAspectRatioFrame.js";
import getTaskVideoBitRate from './getTaskVideoBitRate.js';
import getTaskVideoIndex from "./getTaskVideoIndex.js";
import getTaskVideoCodec from "./getTaskVideoCodec.js";
import getTaskVideoProfile from './getTaskVideoProfile.js'
import getTaskConstantQualityMode from "./getTaskConstantQualityMode.js";
import getGroupOfPictureSize from "./getGroupOfPictureSize.js";
import getSceneChangeThreshold from "./getSceneChangeThreshold.js";
import getTaskMaxRate from "./getTaskMaxRate.js";
import getTaskBufSize from "./getTaskBufSize.js";
import getTaskSegmentNameConvention from "./getTaskSegmentNameConvention.js";
import getTaskPlaylistFilePath from "./getTaskPlaylistFilePath.js";

export default function prepareVideoRenditionTask(
  config: ConversionConfiguration,
  tempVideoFilePath: string,
  index: number,
  task: RenditionTask) {

    return [
      ...getTaskPreamble(config.sourceFile, config),
      getVideoAspectRatioFrame(task),
      getTaskVideoCodec(),
      getTaskVideoProfile(),
      getTaskConstantQualityMode(),
      getGroupOfPictureSize(),
      getSceneChangeThreshold(),
      getTaskVideoBitRate(task),
      getTaskMaxRate(task),
      getTaskBufSize(task),
      getTaskSegmentNameConvention(tempVideoFilePath, task, config),
      getTaskVideoIndex(index),
      getTaskPlaylistFilePath(tempVideoFilePath, task)
    ]

}
