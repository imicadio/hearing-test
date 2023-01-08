export const getKeys = (array: { [key: number | string]: number | null }[]) => {
  const numericalKeys: Array<number> = [];

  for (const obj of array) {
    for (const key in obj) {
      if (typeof key === "number" && typeof obj[key] === "number") {
        numericalKeys.push(key);
      }
    }
  }

  return numericalKeys;
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
