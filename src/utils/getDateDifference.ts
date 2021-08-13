const MS_PER_MINUTE = 1000 * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;

const convertToUTC = (b: Date | number) => (typeof b === 'object'
  ? Date.UTC(
    b.getFullYear(),
    b.getMonth(),
    b.getDate(),
    b.getHours(),
    b.getMinutes(),
  )
  : b);

export const getDayDifference = (a: Date, b: Date | number) => {
  const utc1: number = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2: number = typeof b === 'object'
    ? Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())
    : b;

  return Math.floor((utc2 - utc1) / MS_PER_DAY);
};

export const getHoursDifference = (a: Date, b: Date | number) => {
  const utc1: number = Date.UTC(
    a.getFullYear(),
    a.getMonth(),
    a.getDate(),
    a.getHours(),
    a.getMinutes(),
  );
  const utc2 = convertToUTC(b);

  return Math.floor((utc2 - utc1) / MS_PER_HOUR);
};

export const getMinutesDifference = (a: Date, b: Date | number) => {
  const utc1: number = Date.UTC(
    a.getFullYear(),
    a.getMonth(),
    a.getDate(),
    a.getHours(),
    a.getMinutes(),
  );
  const utc2 = convertToUTC(b);
  return Math.floor((utc2 - utc1) / MS_PER_MINUTE);
};

export const getMessageDifference = (
  today: Date,
  dayToCompare: Date | number,
) => {
  const days = Math.abs(getDayDifference(today, dayToCompare));
  const hours = Math.abs(getHoursDifference(today, dayToCompare));
  const minutes = Math.abs(getMinutesDifference(today, dayToCompare));

  if (days > 0) {
    if (days === 1) {
      return 'Yesterday';
    }
    if (days <= 10) {
      return `${days} days ago`;
    }
    const date = typeof dayToCompare === 'number' ? new Date(dayToCompare) : dayToCompare;
    return `${date.getMonth() + 1 < 10 ? '0' : ''}${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
  }
  if (minutes > 60) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  }
  if (minutes > 0 && minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  }
  return 'Now';
};
