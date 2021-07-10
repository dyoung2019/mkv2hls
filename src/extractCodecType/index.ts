interface AVStream {
  codec_name: string; // 'aac',
  profile?: string; // 'LC',
  // codec_long_name: string;// 'AAC (Advanced Audio Coding)',
  // // codec_type: 'audio',
  // codec_time_base: string; // '1/48000',
  // codec_tag_string: string; // '[0][0][0][0]',
  // codec_tag: string; // '0x0000',
}

export default function extractCodecType(stream: AVStream) {
  const codecName = stream.codec_name;
  const codecProfile = stream.profile || '';

  switch(codecName) {
    case 'h264':
      if (codecProfile === 'Baseline') {
        return 'avc1.42001f';
      } else if (codecProfile === 'Main') {
        return 'avc1.4d0028';
      } else if (codecProfile === 'High') {
        return 'avc1.640029';
      } else {
        throw new Error('h264 profile not found');
      }
    case 'hevc':
      if (codecProfile === 'Main') {
        return 'hvc1.1.4.L126.B0'; // hvc1.1.4.L126.B0 HEVC Main Profile, Main Tier, Level 4.2 video
      } else if (codecProfile === 'Main 10') {
        return 'hvc1.2.4.L123.B0'; // hvc1.2.4.L123.B0 HEVC Main-10 Profile, Main Tier, Level 4.1 video
      } else if (codecProfile === 'Main 10') {
        return 'hvc1.2.4.L150.B0'; /// HEVC Main-10 Profile, Main Tier, Level 5.0 video
      } else {
        throw new Error('h264 profile not found');
      }

    case 'alac':
    case 'ac-3':
    case 'wvtt':
    case 'ec-3':
    case 'fLaC':
      return codecName;
    default:
      throw new Error('av-stream codec not found');
  }
}