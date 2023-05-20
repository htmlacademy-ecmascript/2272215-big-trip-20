import { TripEventsPresenter } from './trip-events-presenter';
import { HeaderPresenter } from './header-presenter';
import MockService from '../service/mock-service';
import { DestinationsModel, OffersModel, PointsModel } from '../model';

export class AppPresenter {
  constructor() {
    this.tripEventsPresenter = new TripEventsPresenter();
    this.headerPresenter = new HeaderPresenter();
    this.service = new MockService();
    this.destinationsModel = new DestinationsModel(this.service);
    this.offersModel = new OffersModel(this.service);
    this.pointsModel = new PointsModel(this.service);
  }

  init() {
    this.tripEventsPresenter.init();
    this.headerPresenter.init();
  }
}
