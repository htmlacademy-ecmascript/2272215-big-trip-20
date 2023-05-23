import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';

dayjs.extend(durationPlugin);

export function formatToServerDateString (day) {
  return day.format('YYYY-MM-DDTHH:MM:ss.SSSZ');
}

export function formatToShortDateString(date) {
  return dayjs(date).format('MMM DD');
}

export function formatToDateString(date) {
  return dayjs(date).format('YYYY-MM-DD');
}

export function formatToDurationString(startDate, endDate) {
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  const diff = end.diff(start);
  const duration = dayjs.duration(diff);

  if (duration.days()) {
    return duration.format('DD[D] HH[H] mm[M]');
  }

  if (duration.hours()) {
    return duration.format('HH[H] mm[M]');
  }

  return duration.format('mm[M]');
}

export { dayjs };
