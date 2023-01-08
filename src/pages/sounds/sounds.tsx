import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../common/button/button";
import Play from "../../components/play/play";
import SelectListing from "../../components/select-listing/select-listing";
import { useNextHz } from "../../hooks/useNextHz";
import {
  selectedAllHz,
  selectedAllDb,
  selectedCalibratedSoundAnswer,
  SET_HZ,
  selectedPageBackward,
} from "../../redux/slice/soundSlice/soundSlice";
import { getValueFromArray } from "../../shared/methods";
import { ROUTER } from "../../shared/router";
import SoundText from "./sound-text/sound-text";

const Sounds: FC<{}> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectAllHz = useSelector(selectedAllHz);
  const selectAllDb = useSelector(selectedAllDb);
  const selectPageBackward = useSelector(selectedPageBackward);
  const nextHz = useNextHz();
  const calibratedSoundAnswer = useSelector(selectedCalibratedSoundAnswer);
  const currentHz: string | number | null = searchParams.get("hz")
    ? searchParams.get("hz")
    : "calibrated";

  const isCalibrated: boolean = searchParams.get("hz") ? false : true;
  const isSelected = getValueFromArray(selectAllHz, currentHz);
  const [play, setPlay] = useState<boolean>(false);
  const [audio, setAudio] = useState<any>(null);
  const [indexDb, setIndexDb] = useState<number>(0);

  // console.log("current Hz: ", currentHz);

  // methods
  const changePlay = (): void => {
    if (audio) {
      play ? audioStop() : audioStart();
      setPlay(!play);
    }
  };

  const newPath = (dbIndex: number): string => {
    return require("../../assets/audio/audio/" +
      currentHz +
      "Hz/" +
      currentHz +
      "_" +
      selectAllDb[dbIndex] +
      ".ogg");
  };

  const nextPage = (): void => {
    audioStop();
    dispatch(SET_HZ({ key: currentHz, value: selectAllDb[indexDb] }));
    nextHz
      ? navigate({
          pathname: ROUTER.CALIBRATED + "/" + nextHz,
          search: `?hz=${nextHz}`,
        })
      : navigate({ pathname: ROUTER.QUESTION });
  };

  const turnUp = (): void => {
    if (selectAllDb.length - 1 > indexDb) {
      audioStop();
      setIndexDb(indexDb + 1);
      const path = newPath(indexDb + 1);
      setAudio(new Audio(path));
    } else {
    }
  };

  const turnDown = (): void => {
    if (0 < indexDb) {
      audioStop();
      setIndexDb(indexDb - 1);
      const path = newPath(indexDb - 1);
      setAudio(new Audio(path));
    } else {
    }
  };

  const handleOptionChange = (changeEvent: any): void => {
    audioStop();
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

  const audioStop = (): void => {
    if (audio) {
      audio.loop = false;
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const audioStart = (): void => {
    if (audio) {
      audio.play();
      audio.loop = true;
    }
  };

  useEffect(() => {
    if (play) {
      audioStart();
    }
  }, [audio]);

  useEffect(() => {
    // console.log(isCalibrated);
    const path: string = isCalibrated
      ? require("../../assets/audio/audio/calibrated.ogg")
      : newPath(indexDb);
    setAudio(new Audio(path));
  }, []);

  useEffect(() => {
    audioStop();
  }, [selectPageBackward]);

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
      <Play
        play={play}
        currentHz={!isCalibrated}
        changePlay={changePlay}
        turnUp={turnUp}
        turnDown={turnDown}
      />
      <SoundText
        isCalibrated={!isCalibrated}
        currentHz={currentHz}
        play={play}
      />
      {renderBtn}
    </div>
  );
};

export default Sounds;
