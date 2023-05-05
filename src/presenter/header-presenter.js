import { render, RenderPosition } from '../render';
import { TotalTripCost, TripFilters, TripInfo } from '../view';

export class HeaderPresenter {
  constructor() {
    this.tripMainElement = document.querySelector('.trip-main');
    this.tripFiltersControlsElement = document.querySelector('.trip-controls__filters');
    this.tripFiltersComponent = new TripFilters();
    this.tripInfoComponent = new TripInfo();
    this.totalTripCost = new TotalTripCost();
  }

  init() {
    render(this.tripInfoComponent, this.tripMainElement, RenderPosition.AFTERBEGIN);
    render(this.totalTripCost, this.tripInfoComponent.getElement());
    render(this.tripFiltersComponent, this.tripFiltersControlsElement);
  }
}
