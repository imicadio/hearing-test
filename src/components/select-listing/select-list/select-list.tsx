import React, { FC } from "react";
import { ISelectList } from "./model";

const SelectList: FC<ISelectList> = ({
  id,
  name,
  selected,
  handleOptionChange,
}) => {
  const isChecked = id === selected;

  return (
    <div>
      <input
        id={id}
        type="radio"
        value={id}
        checked={isChecked}
        onChange={handleOptionChange}        
      />
      <label htmlFor={id} className="ml-3">
        {name}
      </label>
    </div>
  );
};

export default SelectList;
