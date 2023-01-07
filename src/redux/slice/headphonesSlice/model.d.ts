export type IHeadphones = Record<string, string>;

export type HeadphonesSlice = {
  allHeadphones: IHeadphones[];
  selected: string;
};
