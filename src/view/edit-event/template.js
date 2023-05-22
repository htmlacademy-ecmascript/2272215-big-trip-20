import { dayjs } from '../../utils';

export function getEventsEditTemplate({ point, destinations, pointOffers }) {
  const destination = destinations.find((dest) => dest.id === point.destination);
  const destinationName = destination?.name ?? '';
  const destinationDescription = destination?.description ?? '';
  const pointTypeUrl = `img/icons/${point.type}.png`;
  const eventStartTime = dayjs(point.dateFrom).format('YY/MM/DD HH:mm');
  const eventEndTime = dayjs(point.dateTo).format('YY/MM/DD HH:mm');
  const eventBasePrice = point.basePrice;

  const destinationDescriptionTemplate = destinationDescription ? `
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${destinationDescription}</p>` : '';

  // Picture template generation
  let picturesTemplates = '';
  if(destination?.pictures.length) {
    picturesTemplates = `
      <div class="event__photos-container">
        <div class="event__photos-tape">
    `;
    const template = destination.pictures.map((pic) => {
      const {src, description} = pic;
      return `
        <img class="event__photo" src="${src}" alt="${description}"></img>
      `;
    });
    picturesTemplates += template.join('');
    picturesTemplates += '</div></div>';
  }

  // Offers template generation
  let offersTemplate = '';
  if(pointOffers.length) {
    offersTemplate = `
      <section class ="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
    `;
    const template = pointOffers.map((offer) => {
      const { price, title } = offer;
      const offerName = `event-offer-${point.type}-${title.toLowerCase().split(' ').join('-')}`;
      const offerAdded = point.offers.find((offerId) => offerId === offer.id);
      const offerChecked = offerAdded ? 'checked' : '';

      return `
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="${offerName}" type="checkbox" name="${offerName}" ${offerChecked}>
          <label class="event__offer-label" for="${offerName}">
            <span class="event__offer-title">${title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${price}</span>
          </label>
        </div>
      `;
    });
    offersTemplate += template.join('');
    offersTemplate += '</div></section>';
  }

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="${pointTypeUrl}" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>

              <div class="event__type-item">
                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
                <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
              </div>
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${point.type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destinationName}" list="destination-list-1">
          <datalist id="destination-list-1">
            <option value="Amsterdam"></option>
            <option value="Geneva"></option>
            <option value="Chamonix"></option>
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${eventStartTime}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${eventEndTime}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${eventBasePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Cancel</button>
      </header>
      <section class="event__details">
        ${offersTemplate}
        <section class="event__section  event__section--destination">
          ${destinationDescriptionTemplate}
          ${picturesTemplates}
        </section>
      </section>
    </form>
  </li>
  `;
}
