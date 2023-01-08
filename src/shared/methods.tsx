export const getKeys = (array: { [key: number | string]: number | null }[]) => {
  const numericalKeys: Array<number> = [];

  for (const obj of array) {
    for (const key in obj) {
      const isNumber = parseInt(key);
      if (typeof isNumber === "number") {
        numericalKeys.push(isNumber);
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

export const getValueFromArray = (
  array: { [key: string | number]: any }[],
  key: string | number | null
): any => {
  if (!key) return;

  for (const obj of array) {
    if (key in obj) {
      return obj[key];
    }
  }
  return undefined;
};
