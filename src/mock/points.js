import { dayjs, getRandomInteger, generateRandomUniqueNumbers, formatToServerDateString } from '../utils';
import { POINT_COUNT, POINTS_TYPES } from './constants';
import { getBasePrice, getDateTo } from './utils';

export function getRandomPoints(destinations, offersItems) {
  const points = [];
  const pointTypes = Object.values(POINTS_TYPES);
  const randomDayOffset = getRandomInteger(0, 5);
  let randomDay = dayjs().add(randomDayOffset, 'day');

  for(let i = 0; i < POINT_COUNT; i++) {
    const randomIndex = getRandomInteger(0, pointTypes.length - 1);
    const randomPointType = pointTypes[randomIndex];
    const isFavorite = Boolean(getRandomInteger(0, 1));
    const basePrice = getBasePrice(randomPointType);

    // Dates generation
    const dateFrom = formatToServerDateString(randomDay);
    randomDay = getDateTo(randomPointType, randomDay);
    const dateTo = formatToServerDateString(randomDay);

    // Destination generation
    const randomDestinationIndex = getRandomInteger(0, destinations.length - 1);
    const destination = destinations[randomDestinationIndex];

    // Offers generation
    let pointOffers = [];
    let offersIds = [];
    const pointOffersItem = offersItems.find((item) => item.type === randomPointType);
    if(pointOffersItem) {
      pointOffers = pointOffersItem.offers;
    }
    const randomOffersCount = getRandomInteger(0, pointOffers.length);

    if(randomOffersCount) {
      const randomOffersIndexes = generateRandomUniqueNumbers(randomOffersCount, 0, pointOffers.length - 1);
      offersIds = randomOffersIndexes
        .map((inx) => pointOffers[inx])
        .map((offer) => offer.id);
    }

    const point = {
      id: crypto.randomUUID(),
      type: randomPointType,
      isFavorite,
      basePrice,
      dateFrom,
      dateTo,
      offers: offersIds,
      destination: destination.id,
    };

    points.push(point);
  }

  return points;
}
