export interface SubtitleTrack {
  subtitleIndex: number;
  language: string|null;
  name: string;
  isDefault: boolean;
  isForced: boolean;
  isAutoSelect: boolean;
  subtitleFolder: string;
  subtitlePlaylistURI: string;
}