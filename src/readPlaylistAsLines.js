const fs = require('fs')
const readline = require('readline')

const { once } = require('events');
const { createReadStream } = require('fs');
const { createInterface } = require('readline');

// from https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line
async function processLineByLine(filePath) {
  const entries = []

  const rl = createInterface({
    input: createReadStream(filePath),
    crlfDelay: Infinity
  });

  rl.on('line', (line) => {
    // Process the line.
    entries.push(line)
  });

  await once(rl, 'close');

  return entries
}

async function readPlaylistAsLines(filePath) {
  return await processLineByLine(filePath)
}

module.exports = readPlaylistAsLines


