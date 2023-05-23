import { createElement } from '../../render';
import { getEventsEditTemplate } from './template';

export class EditEvent {
  constructor({ point, destinations, pointOffers }) {
    this.element = null;
    this.point = point;
    this.destinations = destinations;
    this.pointOffers = pointOffers;
  }

  getTemplate() {
    return getEventsEditTemplate({
      point: this.point,
      destinations: this.destinations,
      pointOffers: this.pointOffers,
    });
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
