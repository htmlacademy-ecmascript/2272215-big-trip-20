import { getRandomInteger, generateRandomUniqueNumbers, dayjs } from '../utils';
import {
  DESTINATION_DESCRIPTIONS,
  DESTINATION_DESCRIPTIONS_COUNT,
  PointTypesOptions,
  PICTURE_COUNT,
  PICTIRE_BASE_URL,
  PICTIRE_INDEX_MIN,
  PICTIRE_INDEX_MAX
} from './constants';

export function getBasePrice(pointType) {
  const option = PointTypesOptions[pointType];

  return getRandomInteger(option.PRICE_MIN, option.PRICE_MAX);
}

export function getDateTo(pointType, dateFrom) {
  const option = PointTypesOptions[pointType];
  const randomDiff = getRandomInteger(option.DATE_DIFF_MIN, option.DATE_DIFF_MAX);

  const dateTo = dateFrom.add(randomDiff, option.DATE_DIFF_UNIT);
  return dateTo;
}

export function getDestinationDescription(city) {
  const descriptionIndex = getRandomInteger(0, DESTINATION_DESCRIPTIONS_COUNT - 1);
  return `${city} ${DESTINATION_DESCRIPTIONS[descriptionIndex]}`;
}

export function getDestinationPictures (city) {
  const result = [];
  const randomPicturesCount = getRandomInteger(0, PICTURE_COUNT);

  if(randomPicturesCount) {
    const randomPicturesIndexes = generateRandomUniqueNumbers(randomPicturesCount, PICTIRE_INDEX_MIN, PICTIRE_INDEX_MAX);

    randomPicturesIndexes.forEach((picIndex) => {
      const picture = {
        src: `${PICTIRE_BASE_URL}${picIndex}.jpg`,
        description: getDestinationDescription(city),
      };

      result.push(picture);
    });
  }

  return result;
}
