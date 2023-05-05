import { createElement } from '../../render';
import { getTotalTripCostTemplate } from './template';

export class TotalTripCost {
  constructor() {
    this.element = null;
  }

  getTemplate() {
    return getTotalTripCostTemplate();
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
