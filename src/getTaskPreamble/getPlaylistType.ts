export default function getPlaylistType(value: boolean) {
  return value 
    ? ['-hls_playlist_type', 'vod']
    : []
}