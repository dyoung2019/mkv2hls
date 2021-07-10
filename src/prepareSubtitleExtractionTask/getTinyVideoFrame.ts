export default function getTinyVideoFrame() {
  const CONTAINER_WIDTH = 32
  const CONTAINER_HEIGHT = 18
  
  return [
    '-vf',
    `scale=w=${CONTAINER_WIDTH}:h=${CONTAINER_HEIGHT}:force_original_aspect_ratio=decrease`,
  ]
} 