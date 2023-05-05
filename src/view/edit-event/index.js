import { createElement } from '../../render';
import { getEventsEditTemplate } from './template';

export class EditEvent {
  constructor() {
    this.element = null;
  }

  getTemplate() {
    return getEventsEditTemplate();
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
