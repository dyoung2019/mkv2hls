interface SubtitleStream {
  codec_type: string;
  'tag:language'?: string;
  'disposition:forced'?: string;
  'disposition:default'?: string;
  'disposition:visual_impaired'?: string;
}