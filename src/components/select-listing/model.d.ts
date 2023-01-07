import { IHeadphones } from "../../redux/slice/headphonesSlice/model";

export interface ISelectedListing {
  listing: IHeadphones[];
  selected: string;
  handleOptionChange: (changeEvent: any) => void;
}
