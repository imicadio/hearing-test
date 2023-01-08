export type SoundSlice = {
  allHz: Record<number | string, number | null>[];
  allDb: nnumber[];

  activeHz: string;
  activeDb: string;
};
