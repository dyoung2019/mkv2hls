import type { AudioTrack } from "./AudioTrack";
import type { RenditionTask } from "./RenditionTask";
import type { SubtitleTrack } from "./SubtitleTrack";
import type { VideoInfo } from "./VideoInfo";

export interface ConversionTask {
  info: VideoInfo;
  audioTracks: AudioTrack[];
  subtitles: SubtitleTrack[];
  renditions: RenditionTask[];
}