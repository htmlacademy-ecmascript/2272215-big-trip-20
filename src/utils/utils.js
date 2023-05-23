export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/**
 * Функция генерирует {count} случайных уникальных чисел в диапазоне от {minValue}..{maxValue}
 * @param {Number} count
 * @param {Number} minValue
 * @param {Number} maxValue
 * @param {Array} Массив случайных уникальных чисел
*/
export const generateRandomUniqueNumbers = (count = 5, minValue = 1, maxValue = 5) => {
  const results = [];

  while(results.length < count) {
    const random = getRandomInteger(minValue, maxValue);
    const foundIndex = results.findIndex((current) => current === random);

    if(foundIndex === -1) {
      results.push(random);
    }
  }

  return results;
};
