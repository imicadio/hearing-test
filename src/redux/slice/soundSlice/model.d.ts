export type SoundSlice = {
  allHz: Record<number | string, number | null>[];
  allDb: nnumber[];

  calibratedSoundAnswer: Record<boolean | string, string>[];

  activeHz: string;
  activeDb: string;
};
