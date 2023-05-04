import { createElement } from '../../render';
import { getTripEventsListTemplate } from './template';

export class TripEventsList {
  constructor () {
    this.element = null;
  }

  getTemplate() {
    return getTripEventsListTemplate();
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
