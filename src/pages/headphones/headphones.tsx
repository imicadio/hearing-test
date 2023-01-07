import React, { FC } from "react";
import image from "../../assets/headphone.jpg";
import { ROUTER } from "../../shared/router";

const Headphones: FC<{}> = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5 place-items-center w-full">
      <img src={image} alt="instructions hearing test" className="hidden md:block" />
      <div className="md:py-4 flex flex-col gap-5">
        <h1 className="font-bold text-sky-500 text-left">Select your headphones</h1>
        <p className="-mt-3 text-left ">Select your headphone or earphone style and put them on.</p>        
        
      </div>
    </div>
  );
};

export default Headphones;
