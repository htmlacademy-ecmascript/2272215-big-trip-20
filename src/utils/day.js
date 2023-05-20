import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export function formatToServerDateString (day) {
  return day.format('YYYY-MM-DDTHH:MM:ss.SSSZ');
}

export { dayjs };
