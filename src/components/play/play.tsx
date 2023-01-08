import React, { FC } from "react";
import { PlayCircleIcon, PauseCircleIcon } from "@heroicons/react/24/solid";
import { IPlay } from "./model";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";
import Button from "../../common/button/button";

const Play: FC<IPlay> = ({ play, changePlay, currentHz }) => {
  const pauseBtn = currentHz ? (
    <>
      <Button isSound customClass="px-2 py-2">
        <MinusCircleIcon className="w-20 h-20" />
      </Button>
      <Button isSound customClass="px-2 py-2" onClick={changePlay}>
        <PauseCircleIcon
          className="h-32 w-32 cursor-pointer"
          aria-hidden="true"
        />
      </Button>
      <Button isSound customClass="px-2 py-2">
        <PlusCircleIcon className="w-20 h-20" />
      </Button>
    </>
  ) : (
    <Button isSound customClass="px-2 py-2 col-start-2" onClick={changePlay}>
      <PauseCircleIcon
        className="h-32 w-32 cursor-pointer"
        aria-hidden="true"
      />
    </Button>
  );

  const renderPlayBtn = play ? (
    <>{pauseBtn}</>
  ) : (
    <Button
      isSound
      customClass="px-2 py-2 cursor-pointer col-start-2"
      onClick={changePlay}
    >
      <PlayCircleIcon
        className="h-32 w-32"
        aria-hidden="true"
        onClick={changePlay}
      />
    </Button>
  );

  return <>{renderPlayBtn}</>;
};

export default Play;
