export interface AudioTrack {
  audioIndex: number;
  title: string|null;
  isForced: boolean;
  isDefault: boolean;
  audioRate?: number;
  audioCodec?: string;
  audioBitRate?: number;
  languageCode: string|null;
  audioFolderName: string;
  audioPlaylistURI: string;
}