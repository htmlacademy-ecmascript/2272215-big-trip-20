import { render } from '../render';
import { SortView } from '../view/sort-view';
import { TripEventsListPresenter } from './trip-events-list-presenter';
export class TripEventsPresenter {
  constructor({ destinationsModel, offersModel, pointsModel }) {
    this.tripEventsElement = document.querySelector('.trip-events');
    this.sortComponent = new SortView();
    this.tripEventsListPresenter = new TripEventsListPresenter({
      destinationsModel, offersModel, pointsModel
    });
  }

  init() {
    render(this.sortComponent, this.tripEventsElement);

    this.tripEventsListPresenter.init();
  }
}
