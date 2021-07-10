export default function getOverwriteFiles(value: boolean) {
  return value ? ['-y'] : []
}