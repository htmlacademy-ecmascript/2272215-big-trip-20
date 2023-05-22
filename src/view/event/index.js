import { createElement } from '../../render';
import { getEventTemplate } from './template';

export class Event {
  constructor({ point, destination, offers }) {
    this.element = null;
    this.point = point;
    this.destination = destination;
    this.offers = offers;
  }

  getTempalte () {
    return getEventTemplate({
      point: this.point,
      destination: this.destination,
      offers: this.offers,
    });
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTempalte());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
