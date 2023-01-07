export enum BUTTON_TYPE {
  "submit",
  "button",
}

export interface IButton {
  type?: "button" | "submit";
  onClick?: () => void;
  isBack?: boolean;
  link?: string;
  customClass?: string;
  children?: React.ReactNode;
  isSound?: boolean;
  disable?: boolean;
}
