export const getKeys = (array: { [key: number]: string }[]) => {
  return array.map((element) => {
    return Number(Object.keys(element)[0]);
  });
};

export const nextElementInArray = (
  currentIndex: number,
  array: Array<number>
): number | null => {
  if (currentIndex !== -1 && currentIndex < array.length - 1) {
    return array[currentIndex + 1];
  } else {
    return null;
  }
};
