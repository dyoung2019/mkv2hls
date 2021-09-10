export default function formatRegion(value: string) {
  return !!value ? `.${value}` : ''
}