export interface AudioTrack {
  audioIndex: number;
  title: string|null;
  isForced: boolean;
  isDefault: boolean;
  languageCode: string|null;
  languageDescription: string|null;
  audioFolderName: string;
  audioPlaylistURI: string;
  audioRate?: number;
  audioCodec?: string;
  audioBitRate?: number;
}