import React from "react";

export interface IVolumeButton {
  icon?: React.ReactNode;
  onClick?: () => void;
  customClass?: string;
}
