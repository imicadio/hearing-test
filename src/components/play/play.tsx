import React, { FC } from "react";
import { PlayCircleIcon, PauseCircleIcon } from "@heroicons/react/24/solid";
import { IPlay } from "./model";

const Play: FC<IPlay> = ({ play, changePlay }) => {
  const renderPlayBtn = play ? (
    <PauseCircleIcon
      className="h-32 w-32 cursor-pointer"
      aria-hidden="true"
      onClick={changePlay}
    />
  ) : (
    <PlayCircleIcon
      className="h-32 w-32 cursor-pointer"
      aria-hidden="true"
      onClick={changePlay}
    />
  );

  return <div className="col-start-2">{renderPlayBtn}</div>;
};

export default Play;
