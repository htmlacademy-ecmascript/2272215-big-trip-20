import { createElement } from '../../render';
import { createSortTemplate } from './template';

export default class SortView {
  constructor() {
    this.element = null;
  }

  getTemplate() {
    return createSortTemplate();
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
