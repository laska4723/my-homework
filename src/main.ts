import dayjs from 'dayjs';

type Callback = () => void;

const checkDateContext = (isoDateStr: string, cbPast: Callback, cbFuture: Callback): string => {
  const inputDate = dayjs(isoDateStr);
  const today = dayjs().startOf('day');

  if (inputDate.isBefore(today, 'day')) {
    cbPast();
    return 'past';
  } else if (inputDate.isAfter(today, 'day')) {
    cbFuture();
    return 'future';
  }

  return 'present';
};

const result = checkDateContext('2025-07-06T10:00:00Z', () => {}, () => {});

console.log('Результат:', result);