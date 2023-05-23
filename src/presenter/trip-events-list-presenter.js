import { render } from '../render';
import { EditEvent, Event, TripEventsList } from '../view';

export class TripEventsListPresenter {
  constructor({ destinationsModel, offersModel, pointsModel }) {
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
    this.pointsModel = pointsModel;

    this.events = pointsModel.get();
    this.tripEventsElement = document.querySelector('.trip-events');
    this.tripEventsListComponent = new TripEventsList();

    const firstPoint = this.events[0];
    const pointOffers = firstPoint ? this.offersModel.getOffersByType(firstPoint.type) : [];

    this.editEventComponent = new EditEvent({
      point:  firstPoint ?? null,
      destinations: this.destinationsModel.get(),
      pointOffers,
    });

  }

  init() {
    render(this.tripEventsListComponent, this.tripEventsElement);
    render(this.editEventComponent, this.tripEventsListComponent.getElement());

    this.events.forEach((event) => {
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
