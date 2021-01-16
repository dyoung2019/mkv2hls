# mkv2hls - MKV Video to HLS conversion

Batch operation to convert .mkv file to HLS video format (based on [Peer 5](https://docs.peer5.com/guides/production-ready-hls-vod/) guide)

````
Usage: mkv2hls -i <video_file> [args]

Commands:
  mkv2hls -i  converts file1.mkv into hls video parts

Options:
  -i, --input    .mkv file for conversion                             [required]
  -o, --output   output folder for conversion
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]
````

## Installation

### Requirements 
  - ffmpeg
      - ffmpeg-cli
  - yargs
  - mkvtoolnix

### Pre-install

1. Install [ffmpeg](https://ffmpeg.org/) with aac audio support (e.g. [homebrew-ffmpeg](https://github.com/homebrew-ffmpeg/homebrew-ffmpeg) via [homebrew](https://formulae.brew.sh/) )

    ````sh
    brew install ffmpeg
    brew tap homebrew-ffmpeg/ffmpeg
    brew install homebrew-ffmpeg/ffmpeg/ffmpeg --with-fdk-aac
    ````

1. Install [MkvtoolNix](https://mkvtoolnix.download/) for mkvmerge CLI application
    ````sh
    brew install mkvtoolnix
    ````

### Post-install
1. Downloads test5.mkv from [Matroska test files](https://github.com/Matroska-Org/matroska-test-files/) from [github](https://github.com/Matroska-Org/matroska-test-files/blob/master/test_files/test5.mkv)


## Processes
1. Analyzes mkv container file for tracks and subtitles 
1. Converts video file to HLS via ffmpeg into:
    - m3u8 playlist
    - video parts split in chunks for each rendition
    - split audio tracks in chunks
    - subtitle parts split in chunks
1. Write master playlist 
    1. file tag
    1. for each all audio tracks
    1. for each subtitle track
    1. for each rendition 

## Links

https://www.loc.gov/standards/iso639-2/ascii_8bits.html

These files may be used to download the list of language codes with their language names, for example into a database. To read the files, please note that one line of text contains one entry. An alpha-3 (bibliographic) code, an alpha-3 (terminologic) code (when given), an alpha-2 code (when given), an English name, and a French name of a language are all separated by pipe (|) characters. If one of these elements is not applicable to the entry, the field is left empty, i.e., a pipe (|) character immediately follows the preceding entry. The Line terminator is the LF character. 

- Reading ISO 639-2 language codes
  - https://github.com/ISO639/2

- Reading BCP 47 language codes
  - https://github.com/mattcg/language-subtag-registry

- Creating a Production Ready Multi Bitrate HLS VOD stream
  - https://docs.peer5.com/guides/production-ready-hls-vod/

- misc/create-vod-hls.sh bash script
  - https://gist.github.com/mrbar42/ae111731906f958b396f30906004b3fa

- Subtitles, Captions, WebVTT, HLS, and those magic flags 
  - https://mux.com/blog/subtitles-captions-webvtt-hls-and-those-magic-flags/

I-Frame (for scrubbing)
 - https://www.wowza.com/docs/how-to-create-i-frame-only-playlists-for-apple-hls-streams

- MKVToolNix – Matroska tools for Linux/Unix and Windows 
  - https://mkvtoolnix.download/

- Apple Streaming Examples
  - https://developer.apple.com/streaming/examples/

- HLS authoring rules for Apple Devices
  - https://developer.apple.com/documentation/http_live_streaming/hls_authoring_specification_for_apple_devices