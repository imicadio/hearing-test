import React, { FC } from "react";
import { PlayCircleIcon, PauseCircleIcon } from "@heroicons/react/24/solid";
import { IPlay } from "./model";
import VolumeButton from "../volume-button/volume-button";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";

const Play: FC<IPlay> = ({ play, changePlay }) => {
  const renderPlayBtn = play ? (
    <>
      <VolumeButton icon={<MinusCircleIcon className="w-20 h-20" />} />
      <PauseCircleIcon
        className="h-32 w-32 cursor-pointer"
        aria-hidden="true"
        onClick={changePlay}
      />
      <VolumeButton icon={<PlusCircleIcon className="w-20 h-20" />} />
    </>
  ) : (
    <PlayCircleIcon
      className="h-32 w-32 cursor-pointer col-start-2"
      aria-hidden="true"
      onClick={changePlay}
    />
  );

  return <>{renderPlayBtn}</>;
};

export default Play;
