import React, { FC } from "react";
import { clickToPlayText, adjustToneText, doYouHearSound } from "../../../shared/text";
import { ISoundText } from "./model";

const SoundText: FC<ISoundText> = ({ currentHz, play }) => {
  const renderTextHz = currentHz ? (
    <h2 className="col-start-1 col-end-4 text-2xl font-bold">{currentHz} Hz</h2>
  ) : null;

  const renderTextVolume: string | null = currentHz
    ? play
      ? adjustToneText
      : clickToPlayText
    : play
    ? doYouHearSound
    : clickToPlayText;

  return (
    <>
      {renderTextHz}
      <p className="col-start-1 col-end-4 text-center">{renderTextVolume}</p>
    </>
  );
};

export default SoundText;
