import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import image from "../../assets/headphone.jpg";
import SelectListing from "../../components/select-listing/select-listing";
import {
  selectedAllHeadphones,
  selectedHeadphones,
  SET_HEADPHONES,
} from "../../redux/slice/headphonesSlice/headphonesSlice";
import { IHeadphones } from "../../redux/slice/headphonesSlice/model";
import { ROUTER } from "../../shared/router";

const Headphones: FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allHeadphones: IHeadphones[] = useSelector(selectedAllHeadphones);
  const isSelected = useSelector(selectedHeadphones);

  const handleOptionChange = (changeEvent: any) => {
    const setKey = changeEvent.target.value;
    dispatch(SET_HEADPHONES(setKey));
    setTimeout(() => navigate(ROUTER.CALIBRATED), 100)
  };

  return (
    <div className="grid md:grid-cols-2 gap-5 place-items-center w-full">
      <img
        src={image}
        alt="instructions hearing test"
        className="hidden md:block"
      />
      <div className="md:py-4 flex flex-col gap-5">
        <h1 className="font-bold text-sky-500 text-left">
          Select your headphones
        </h1>
        <p className="-mt-3 text-left ">
          Select your headphone or earphone style and put them on.
        </p>
        <SelectListing
          listing={allHeadphones}
          selected={isSelected}
          handleOptionChange={handleOptionChange}
        />
      </div>
    </div>
  );
};

export default Headphones;
