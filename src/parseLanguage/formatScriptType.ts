export default function formatScriptType(value: string) {
  return !!value ? '[' + value + '.]' : ''
}