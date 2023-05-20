import { getRandomInteger, generateRandomUniqueNumbers } from '../utils';
import { POINTS_TYPES, PointTypesOptions } from './constants';

export function getRandomOfferItems () {
  const result = [];
  const pointsTypes = Object.values(POINTS_TYPES);

  for(let i = 0; i < pointsTypes.length; i++) {
    const pointType = pointsTypes[i];
    const option = PointTypesOptions[pointType];

    const offers = [];
    const offersCount = getRandomInteger(1, option.OFFER_COMMENTS.length);

    const offerCommentsIndexes = generateRandomUniqueNumbers(offersCount, 0, option.OFFER_COMMENTS.length - 1);

    offerCommentsIndexes.forEach((offerCommentIndex) => {
      const offerComment = option.OFFER_COMMENTS[offerCommentIndex];
      const offerPrice = getRandomInteger(option.OFFER_PRICE_MIN, option.OFFER_PRICE_MAX);

      const offer = {
        id: crypto.randomUUID(),
        title: offerComment,
        price: offerPrice,
      };

      offers.push(offer);
    });

    const item = {
      type: pointType,
      offers,
    };

    result.push(item);
  }

  return result;
}
