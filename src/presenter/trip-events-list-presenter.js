import { render } from '../render';
import { EditEvent, Event, TripEventsList } from '../view';

export class TripEventsListPresenter {
  constructor({ destinationsModel, offersModel, pointsModel }) {
    this.tripEventsElement = document.querySelector('.trip-events');
    this.tripEventsListComponent = new TripEventsList();
    this.editEventComponent = new EditEvent();
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
    this.pointsModel = pointsModel;
  }

  init() {
    render(this.tripEventsListComponent, this.tripEventsElement);
    render(this.editEventComponent, this.tripEventsListComponent.getElement());

    const events = this.pointsModel.get();

    events.forEach((event) => {
      const destination = this.destinationsModel.getById(event.destination);
      const offers = this.offersModel.getOffersByType(event.type);

      const eventComponent = new Event({
        point: event,
        destination,
        offers,
      });
      render(eventComponent, this.tripEventsListComponent.getElement());
    });
  }
}
