import { render } from '../render';
import SortView from '../view/sort-view/index';

export default class TripEventsPresenter {
  constructor() {
    this.tripEventsElement = document.querySelector('.trip-events');
    this.sortComponent = new SortView();
  }

  init() {
    render(this.sortComponent, this.tripEventsElement);
  }
}
