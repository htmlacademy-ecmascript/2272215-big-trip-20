import { DestinationsMock, getRandomOfferItems, getRandomPoints } from '../mock';

export default class MockService {
  constructor() {
    this.destinations = this.generateDestinations();
    this.offers = this.generateOffers();
    this.points = this.generatePoint(this.destinations, this.offers);
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }

  getPoints() {
    return this.points;
  }

  generateDestinations() {
    return [...DestinationsMock];
  }

  generateOffers() {
    return [...getRandomOfferItems()];
  }

  generatePoint(destinations, offers) {
    return [...getRandomPoints(destinations, offers)];
  }
}
