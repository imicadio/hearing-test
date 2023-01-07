import React, { FC } from "react";
import { ISelectList } from "./model";

const SelectList: FC<ISelectList> = ({ id, name, selected, handleOptionChange }) => {
  
  return (
    <label>
      <input
        type="radio"
        value={id}
        checked={id === selected}
        onChange={handleOptionChange}
      />
      {name}
    </label>
  );
};

export default SelectList;
