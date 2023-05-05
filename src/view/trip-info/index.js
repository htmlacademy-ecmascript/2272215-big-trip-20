import { createElement } from '../../render';
import { getTripInfoTemplate } from './template';

export class TripInfo {
  constructor() {
    this.element = null;
  }

  getTemplate() {
    return getTripInfoTemplate();
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
