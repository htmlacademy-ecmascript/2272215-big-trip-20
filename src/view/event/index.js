import { createElement } from '../../render';
import { getEventTemplate } from './template';

export class Event {
  constructor() {
    this.element = null;
  }

  getTempalte () {
    return getEventTemplate();
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
