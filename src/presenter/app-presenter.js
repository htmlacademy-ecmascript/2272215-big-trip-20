import { TripEventsPresenter } from './trip-events-presenter';
import { HeaderPresenter } from './header-presenter';

export class AppPresenter {
  constructor() {
    this.tripEventsPresenter = new TripEventsPresenter();
    this.headerPresenter = new HeaderPresenter();
  }

  init() {
    this.tripEventsPresenter.init();
    this.headerPresenter.init();
  }
}
