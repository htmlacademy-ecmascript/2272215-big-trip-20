import { render } from '../render';
import { EditEvent, Event, TripEventsList } from '../view';

const EVENT_COUNT = 3;

export class TripEventsListPresenter {
  constructor() {
    this.tripEventsElement = document.querySelector('.trip-events');
    this.tripEventsListComponent = new TripEventsList();
    this.editEventComponent = new EditEvent();
  }

  init() {
    render(this.tripEventsListComponent, this.tripEventsElement);
    render(this.editEventComponent, this.tripEventsListComponent.getElement());

    for(let i = 0; i < EVENT_COUNT; i++) {
      const eventComponent = new Event();
      render(eventComponent, this.tripEventsListComponent.getElement());
    }
  }
}
