import { IHeadphones } from "../../../redux/slice/headphonesSlice/model";

export interface ISelectList {
  id: string;
  name: string;
  selected: string;
  handleOptionChange: (changeEvent: any) => void;
}
