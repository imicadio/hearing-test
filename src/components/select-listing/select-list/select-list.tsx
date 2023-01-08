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
        onClick={handleOptionChange}
        onChange={() => {}}
        className="cursor-pointer"
      />
      <label htmlFor={id} className="ml-3 cursor-pointer">
        {name}
      </label>
    </div>
  );
};

export default SelectList;
