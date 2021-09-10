export interface SubtitleTrack {
  subtitleIndex: number;
  isDefault: boolean;
  isForced: boolean;
  isAutoSelect: boolean;
  language: string|null;
  subtitleFolder: string;
  subtitlePlaylistURI: string;
}