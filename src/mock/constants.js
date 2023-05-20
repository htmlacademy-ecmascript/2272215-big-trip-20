export const POINT_COUNT = 5;
export const PICTURE_COUNT = 4;
export const PICTIRE_INDEX_MIN = 1;
export const PICTIRE_INDEX_MAX = 20;
export const PICTIRE_BASE_URL = 'https://20.objects.pages.academy/static/destinations/';

export const POINTS_TYPES = {
  TAXI: 'taxi',
  BUS: 'bus',
  TRAIN: 'train',
  FLIGHT: 'flight',
  CHECKIN: 'check-in',
  SIGHTSEEIN: 'sightseeing',
  SHIP: 'ship',
  DRIVE: 'drive',
  RESTAURANT: 'restaurant'
};

export const DESTINATION_DESCRIPTIONS = [
  'full of of cozy canteens where you can try the best coffee in the Middle East',
  'middle-eastern paradise',
  'with an embankment of a mighty river as a centre of attraction',
  'a true asian pearl',
  'is a beautiful city',
  'with crowded streets',
  'famous for its crowded street markets with the best street food',
  'a perfect place to stay with a family',
  'for those who value comfort and coziness',
  'with a beautiful old town',
];

export const DESTINATION_DESCRIPTIONS_COUNT = DESTINATION_DESCRIPTIONS.length;

export const PointTypesOptions = {
  [POINTS_TYPES.TAXI]: {
    PRICE_MIN: 900,
    PRICE_MAX: 3000,
    DATE_DIFF_MIN: 2,
    DATE_DIFF_MAX: 12,
    DATE_DIFF_UNIT: 'hour',
    OFFER_PRICE_MIN: 15,
    OFFER_PRICE_MAX: 150,
    OFFER_COMMENTS: [
      'Upgrade to a business class',
      'Choose the radio station',
      'Choose temperature',
      'Drive quickly, I\'m in a hurry',
      'Drive slowly'
    ],
  },
  [POINTS_TYPES.BUS]: {
    PRICE_MIN: 60,
    PRICE_MAX: 2000,
    DATE_DIFF_MIN: 1,
    DATE_DIFF_MAX: 8,
    DATE_DIFF_UNIT: 'hour',
    OFFER_PRICE_MIN: 10,
    OFFER_PRICE_MAX: 99,
    OFFER_COMMENTS: [
      'Infotainment system',
      'Order meal',
      'Choose seats',
    ],
  },
  [POINTS_TYPES.TRAIN]: {
    PRICE_MIN: 500,
    PRICE_MAX: 2000,
    DATE_DIFF_MIN: 2,
    DATE_DIFF_MAX: 16,
    DATE_DIFF_UNIT: 'hour',
    OFFER_PRICE_MIN: 50,
    OFFER_PRICE_MAX: 120,
    OFFER_COMMENTS: [
      'Book a taxi at the arrival point',
      'Order a breakfast',
      'Wake up at a certain time',
    ],
  },
  [POINTS_TYPES.FLIGHT]: {
    PRICE_MIN: 2000,
    PRICE_MAX: 6000,
    DATE_DIFF_MIN: 2,
    DATE_DIFF_MAX: 10,
    DATE_DIFF_UNIT: 'hour',
    OFFER_PRICE_MIN: 90,
    OFFER_PRICE_MAX: 300,
    OFFER_COMMENTS: [
      'Choose meal',
      'Choose seats',
      'Upgrade to comfort class',
      'Upgrade to business class',
      'Add luggage',
      'Business lounge',
    ],
  },
  [POINTS_TYPES.CHECKIN]: {
    PRICE_MIN: 30,
    PRICE_MAX: 200,
    DATE_DIFF_MIN: 1,
    DATE_DIFF_MAX: 6,
    DATE_DIFF_UNIT: 'hour',
    OFFER_PRICE_MIN: 10,
    OFFER_PRICE_MAX: 120,
    OFFER_COMMENTS: [
      'Choose the time of check-in',
      'Choose the time of check-out',
      'Add breakfast',
      'Laundry',
      'Order a meal from the restaurant',
    ],
  },
  [POINTS_TYPES.SIGHTSEEIN]: {
    PRICE_MIN: 20,
    PRICE_MAX: 100,
    DATE_DIFF_MIN: 1,
    DATE_DIFF_MAX: 3,
    DATE_DIFF_UNIT: 'hour',
    OFFER_PRICE_MIN: 90,
    OFFER_PRICE_MAX: 150,
    OFFER_COMMENTS: [
      'Add breakfast',
      'Choose seats',
    ],
  },
  [POINTS_TYPES.SHIP]: {
    PRICE_MIN: 1200,
    PRICE_MAX: 4000,
    DATE_DIFF_MIN: 2,
    DATE_DIFF_MAX: 12,
    DATE_DIFF_UNIT: 'hour',
    OFFER_PRICE_MIN: 100,
    OFFER_PRICE_MAX: 200,
    OFFER_COMMENTS: [
      'Choose meal',
      'Choose seats',
      'Upgrade to comfort class',
      'Upgrade to business class',
      'Add luggage',
      'Business lounge',
    ],
  },
  [POINTS_TYPES.DRIVE]: {
    PRICE_MIN: 1100,
    PRICE_MAX: 5000,
    DATE_DIFF_MIN: 1,
    DATE_DIFF_MAX: 12,
    DATE_DIFF_UNIT: 'hour',
    OFFER_PRICE_MIN: 60,
    OFFER_PRICE_MAX: 90,
    OFFER_COMMENTS: [
      'With automatic transmission',
      'With air conditioning',
    ],
  },
  [POINTS_TYPES.RESTAURANT]: {
    PRICE_MIN: 40,
    PRICE_MAX: 1000,
    DATE_DIFF_MIN: 1,
    DATE_DIFF_MAX: 3,
    DATE_DIFF_UNIT: 'hour',
    OFFER_PRICE_MIN: 50,
    OFFER_PRICE_MAX: 150,
    OFFER_COMMENTS: [
      'Choose live music',
      'Choose VIP area',
    ],
  },
};
