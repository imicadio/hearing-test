import React, { FC, useEffect, useState } from "react";
import Play from "../../components/play/play";
import { clickToPlayText, adjustToneText } from "../../shared/text";

const Sounds: FC<{}> = () => {
  const [play, setPlay] = useState<boolean>(false);

  // methods
  const changePlay = () => setPlay(!play);

  useEffect(() => {}, [])

  return (
    <div className="grid grid-cols-3 gap-5 place-items-center w-full">
      <Play play={play} changePlay={changePlay} />
      <p className="col-start-1 col-end-4">{clickToPlayText}</p>
    </div>
  );
};

export default Sounds;
