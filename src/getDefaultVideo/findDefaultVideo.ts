export default function findDefaultVideo(streams: VideoStream[]) {
  const isDefaultVideo = (stream: VideoStream) => {
    return stream['disposition:default'] === '1'
  }
  return streams.filter(isDefaultVideo)[0]
}
