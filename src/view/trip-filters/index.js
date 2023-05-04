import { createElement } from '../../render';
import { getTripFiltersTemplate } from './template';

export class TripFilters {
  constructor() {
    this.element = null;
  }

  getTemplate() {
    return getTripFiltersTemplate();
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
