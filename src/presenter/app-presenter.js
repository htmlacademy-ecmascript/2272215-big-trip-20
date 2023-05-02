import TripEventsPresenter from './trip-events-presenter';

export default class AppPresenter {
  constructor() {
    this.tripEventsPresenter = new TripEventsPresenter();
  }

  init() {
    this.tripEventsPresenter.init();
  }
}
