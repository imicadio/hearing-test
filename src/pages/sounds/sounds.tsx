import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../common/button/button";
import Play from "../../components/play/play";
import { useNextHz } from "../../hooks/useNextHz";
import {
  selectedActiveDb,
  selectedActiveHz,
  SET_ACTIVE_HZ,
} from "../../redux/slice/soundSlice/soundSlice";
import { ROUTER } from "../../shared/router";
import SoundText from "./sound-text/sound-text";

const Sounds: FC<{}> = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const nextHz = useNextHz();
  const navigate = useNavigate();
  const activeHz = useSelector(selectedActiveHz);
  const activeDb = useSelector(selectedActiveDb);
  const currentHz = searchParams.get("hz");

  console.log("current Hz: ", currentHz);

  const [play, setPlay] = useState<boolean>(false);

  // methods
  const changePlay = () => setPlay(!play);

  const nextPage = () => {
    dispatch(SET_ACTIVE_HZ(nextHz));
    nextHz
      ? navigate({
          pathname: ROUTER.CALIBRATED + "/" + nextHz,
          search: `?hz=${nextHz}`,
        })
      : navigate({ pathname: ROUTER.QUESTION });
  };

  // useEffect(() => {}, [activeHz]);

  const renderBtn = currentHz ? (
    <Button
      disable={!play}
      onClick={nextPage}
      customClass="col-start-1 col-end-4 md:col-start-2 md:col-end-3 w-full"
      isSound
    >
      Next
    </Button>
  ) : null;

  return (
    <div className="grid grid-cols-3 gap-5 place-items-center w-full p-5">
      <Play play={play} currentHz={currentHz} changePlay={changePlay} />
      <SoundText currentHz={currentHz} play={play} />
      {renderBtn}
    </div>
  );
};

export default Sounds;
