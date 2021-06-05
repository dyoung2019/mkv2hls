const Yargs = require('yargs/yargs')

function prepareArguments(arguments) {
  return Yargs(arguments)
    .usage('Usage: $0 -i <video_file> [args]')
    .command('-i', 'converts file1.mkv into hls video parts')
    .example('mkv2hls -i file1.mkv', 'converts file1.mkv into hls video parts')
    .alias('v', 'version')
    .alias('i', 'input')
    .nargs('i', 1)
    .describe('i', '.mkv file for conversion')
    .demandOption(['i'])
    .alias('o', 'output')
    .describe('o', 'output folder for conversion')
    .nargs('o', 1)
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2020')
    .argv;
}

module.exports = prepareArguments

