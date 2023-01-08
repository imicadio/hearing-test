import React, { FC } from "react";
import classNames from "classnames";
import { IHeadphones } from "../../redux/slice/headphonesSlice/model";
import { ISelectedListing } from "./model";
import SelectList from "./select-list/select-list";

const SelectListing: FC<ISelectedListing> = ({
  listing,
  selected,
  handleOptionChange,
  customClass,
}) => {
  const returnClass = classNames(customClass, "flex flex-col gap-2 text-lg");

  const renderListing = listing.map((element: IHeadphones) => {
    const [key] = Object.keys(element);
    const name = element[key];
    return (
      <SelectList
        key={key}
        id={key}
        name={name}
        selected={selected}
        handleOptionChange={handleOptionChange}
      />
    );
  });

  return <form className={returnClass}>{renderListing}</form>;
};

export default SelectListing;
