import React, { FC } from "react";
import Button from "../../common/button/button";
import { ROUTER } from "../../shared/router";
import {
  SpeakerWaveIcon,
  SignalSlashIcon,
  BookmarkSlashIcon,
} from "@heroicons/react/24/solid";
import image from "../../assets/steps.jpg";

const Instruction: FC<{}> = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5 place-items-center w-full">
      <img src={image} alt="instructions hearing test" className="hidden md:block" />
      <div className="md:py-4 flex flex-col gap-5">
        <h1 className="font-bold text-sky-500 text-center">Instructions</h1>
        <h2 className="text-2xl -mt-3 text-center font-bold">Before start</h2>
        <p className="flex gap-5">
          <SpeakerWaveIcon className="w-5 h-5" />
          Set your device volume to 100%
        </p>
        <p className="flex gap-5">
          <SignalSlashIcon className="w-5 h-5" />
          Turn off noise-cancelling in your headphones
        </p>
        <p className="flex gap-5">
          <BookmarkSlashIcon className="w-5 h-5" />
          Make sure you're in a quiet environment{" "}
        </p>
        <Button
          link={ROUTER.HEADPHONES}
          customClass="w-full text-center sm:w-fit"
        >
          Next step
        </Button>
      </div>
    </div>
  );
};

export default Instruction;
