const writeLinesToFile = require('../src/writeLinesToFile')

const lines = [
  'a',
  'b',
  'c',
  'HELLo',
  'e'
]

writeLinesToFile('output.txt', lines)