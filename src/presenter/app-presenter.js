import { TripEventsPresenter } from './trip-events-presenter';
import { HeaderPresenter } from './header-presenter';
import MockService from '../service/mock-service';
import { DestinationsModel, OffersModel, PointsModel } from '../model';

export class AppPresenter {
  constructor() {
    this.service = new MockService();
    this.destinationsModel = new DestinationsModel(this.service);
    this.offersModel = new OffersModel(this.service);
    this.pointsModel = new PointsModel(this.service);
    this.headerPresenter = new HeaderPresenter();
    this.tripEventsPresenter = new TripEventsPresenter({
      destinationsModel: this.destinationsModel,
      offersModel: this.offersModel,
      pointsModel: this.pointsModel,
    });
  }

  init() {
    this.headerPresenter.init();
    this.tripEventsPresenter.init();
  }
}
