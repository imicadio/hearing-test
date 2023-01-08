import { IHeadphones } from "../../redux/slice/headphonesSlice/model";

export interface ISelectedListing {
  listing: Record<boolean | string, string>[];
  selected: string;
  handleOptionChange: (changeEvent: any) => void;
  customClass?: string;
}
