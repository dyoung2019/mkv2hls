export default function validateVideoFormat(result: FormatStream) {
  if (!result) {
    throw new Error('no default format found');
  }
}