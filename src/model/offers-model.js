export default class OffersModel {
  constructor(service) {
    this.service = service;
    this.offers = this.service.getOffers();
  }

  get() {
    return this.offers;
  }

  getOffersByType(type) {
    const offerItem = this.offers.find((offer) => offer.type === type);
    return offerItem ? offerItem.offers : [];
  }
}
