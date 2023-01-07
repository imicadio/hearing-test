import React, { FC } from "react";
import { IVolumeButton } from "./model";

const VolumeButton: FC<IVolumeButton> = ({ icon, onClick, customClass }) => {
  return (
    <button type="button" className={customClass} onClick={onClick}>
      {icon}
    </button>
  );
};

export default VolumeButton;
