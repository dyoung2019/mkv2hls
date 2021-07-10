import type { VideoInfo } from "../VideoInfo";

export default function conversionRequired(
  info: VideoInfo,
  rendition: RenditionInfo) {
  return info.width > rendition.containerWidth
    || info.height > rendition.containerHeight
}
