export default function getTaskVideoIndex(index: number) {
  return ['-map', `${index}:v`]
}