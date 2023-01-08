import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../common/button/button";
import Play from "../../components/play/play";
import SelectListing from "../../components/select-listing/select-listing";
import { useNextHz } from "../../hooks/useNextHz";
import {
  selectedActiveDb,
  selectedActiveHz,
  selectedAllHz,
  selectedCalibratedSoundAnswer,
  SET_ACTIVE_HZ,
  SET_HZ,
} from "../../redux/slice/soundSlice/soundSlice";
import { getValueFromArray } from "../../shared/methods";
import { ROUTER } from "../../shared/router";
import SoundText from "./sound-text/sound-text";

const Sounds: FC<{}> = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const nextHz = useNextHz();
  const navigate = useNavigate();
  const activeHz = useSelector(selectedActiveHz);
  const activeDb = useSelector(selectedActiveDb);
  const selectAllHz = useSelector(selectedAllHz);
  const calibratedSoundAnswer = useSelector(selectedCalibratedSoundAnswer);
  const currentHz: string | number | null = searchParams.get("hz")
    ? searchParams.get("hz")
    : "calibrated";

  const isCalibrated: boolean = searchParams.get("hz")
    ? false
    : true;
  const isSelected = getValueFromArray(selectAllHz, currentHz);
  const [play, setPlay] = useState<boolean>(false);
  const [audio, setAudio] = useState<any>();

  console.log("current Hz: ", currentHz);

  // methods
  const changePlay = () => {
    if (audio) {
      console.log(audio);
      audio.play(); 
    }
    setPlay(!play);
  };

  const nextPage = () => {
    dispatch(SET_ACTIVE_HZ(nextHz));
    nextHz
      ? navigate({
          pathname: ROUTER.CALIBRATED + "/" + nextHz,
          search: `?hz=${nextHz}`,
        })
      : navigate({ pathname: ROUTER.QUESTION });
  };

  const handleOptionChange = (changeEvent: any) => {
    console.log("test");
    const setKey = changeEvent.target.value;
    dispatch(SET_HZ({ key: currentHz, value: setKey }));
    setTimeout(
      () =>
        navigate({
          pathname: ROUTER.CALIBRATED + "/" + nextHz,
          search: `?hz=${nextHz}`,
        }),
      100
    );
  };

  useEffect(() => {
    setAudio(new Audio(require('../../assets/audio/audio/250Hz/250_80.ogg')));
  }, []);

  const renderBtn = !isCalibrated ? (
    <Button
      disable={!play}
      onClick={nextPage}
      customClass="col-start-1 col-end-4 md:col-start-2 md:col-end-3 w-full"
      isSound
    >
      Next
    </Button>
  ) : (
    <SelectListing
      listing={calibratedSoundAnswer}
      selected={isSelected}
      handleOptionChange={handleOptionChange}
      customClass={play ? "visible col-start-2" : "invisible"}
    />
  );

  return (
    <div className="grid grid-cols-3 gap-5 place-items-center w-full p-5">
      <Play play={play} currentHz={!isCalibrated} changePlay={changePlay} />
      <SoundText isCalibrated={!isCalibrated} currentHz={currentHz} play={play} />
      {renderBtn}
    </div>
  );
};

export default Sounds;
