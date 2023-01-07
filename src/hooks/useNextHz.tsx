import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectedAllHz } from "../redux/slice/soundSlice/soundSlice";
import { getKeys, nextElementInArray } from "../shared/methods";

export const useNextHz = (): number | string | null => {
  const [searchParams] = useSearchParams();
  const currentHz = searchParams.get("hz");
  const selectAllHz = useSelector(selectedAllHz);
  const allHz = getKeys(selectAllHz);

  // if we have calibrated tone
  if (!currentHz) return 250; 

  const currentIndex = allHz.indexOf(Number(currentHz));
  const nextHz = nextElementInArray(currentIndex, allHz);
  
  console.log(nextHz)

  return nextHz;
};
