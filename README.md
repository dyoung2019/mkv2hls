# mkv2hls - MKV Video to HLS conversion

Batch operation to convert .mkv file to HLS video format

Based on [peer 5](https://docs.peer5.com/guides/production-ready-hls-vod/) mkv to hls format video guide 

## CLI application

````
node mkv2hls.js [filename]
````
### Processes
1. Analyzes mkv container file for tracks and subtitles 
1. Converts video file to HLS via ffmpeg into:
    - m3u8 playlist
    - video parts split in chunks 
    - subtitle parts split in chunks

### Playback
1. Host js video player using video.js

## Installation

### Pre-install

1. Install [ffmpeg](https://ffmpeg.org/) with aac audio support (e.g. [homebrew-ffmpeg](https://github.com/homebrew-ffmpeg/homebrew-ffmpeg) via [homebrew](https://formulae.brew.sh/) )

    ````sh
    brew install ffmpeg
    brew tap homebrew-ffmpeg/ffmpeg
    brew install homebrew-ffmpeg/ffmpeg/ffmpeg --with-fdk-aac
    ````

1. Install [MkvtoolNix](https://mkvtoolnix.download/) for mkvmerge CLI application
    ````
    brew install mkvtoolnix
    ````

### Post-install
1. Downloads test5.mkv from [Matroska test files](https://github.com/Matroska-Org/matroska-test-files/) from [github](https://github.com/Matroska-Org/matroska-test-files/blob/master/test_files/test5.mkv)


## Links

- Creating a Production Ready Multi Bitrate HLS VOD stream
  - https://docs.peer5.com/guides/production-ready-hls-vod/

- misc/create-vod-hls.sh bash script
  - https://gist.github.com/mrbar42/ae111731906f958b396f30906004b3fa

- Subtitles, Captions, WebVTT, HLS, and those magic flags 
  - https://mux.com/blog/subtitles-captions-webvtt-hls-and-those-magic-flags/


- MKVToolNix – Matroska tools for Linux/Unix and Windows 
  - https://mkvtoolnix.download/

