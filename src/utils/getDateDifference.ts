const MS_PER_MINUTE = 1000 * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;

export const convertToUTC = (b: Date | number) =>
  typeof b === 'object'
    ? Date.UTC(b.getFullYear(), b.getMonth(), b.getDate(), b.getHours(), b.getMinutes())
    : b;

export const dateCompare = (a: Date, b: Date) => new Date(a) > new Date(b);

export const getDayDifference = (a: Date, b: Date | number) => {
  const utc1: number = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2: number =
    typeof b === 'object' ? Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()) : b;

  return Math.floor((utc2 - utc1) / MS_PER_DAY);
};
const getDifferece = (a: Date, b: Date | number) => {
  const utc1: number = Date.UTC(
    a.getFullYear(),
    a.getMonth(),
    a.getDate(),
    a.getHours(),
    a.getMinutes()
  );
  const utc2 = convertToUTC(b);
  return { utc1, utc2 };
};
export const getHoursDifference = (a: Date, b: Date | number) => {
  // const utc1: number = Date.UTC(
  //   a.getFullYear(),
  //   a.getMonth(),
  //   a.getDate(),
  //   a.getHours(),
  //   a.getMinutes(),
  // );
  // const utc2 = convertToUTC(b);
  const { utc1, utc2 } = getDifferece(a, b);
  return Math.floor((utc2 - utc1) / MS_PER_HOUR);
};

export const getMinutesDifference = (a: Date, b: Date | number) => {
  // const utc1: number = Date.UTC(
  //   a.getFullYear(),
  //   a.getMonth(),
  //   a.getDate(),
  //   a.getHours(),
  //   a.getMinutes(),
  // );
  // const utc2 = convertToUTC(b);
  const { utc1, utc2 } = getDifferece(a, b);
  return Math.floor((utc2 - utc1) / MS_PER_MINUTE);
};

export const getMessageDifference = (today: Date, dayToCompare: Date | number) => {
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

export const MONTHS = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
};

export const DAYS = {
  en: ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'],
  es: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
};

export const getAllDaysInMonth = (month: number, year: number): number =>
  32 - new Date(year, month, 32).getDate();

export const getStarterDay = (year: number, month: number): number =>
  new Date(year, month, 1).getDay();

export const fillDays = (data: number) => {
  const arr: number[] = [];
  for (let i = 0; i < data; i++) {
    arr.push(i);
  }
  return arr;
};

export const dateToString = (date: Date | number): string => {
  const getDate = new Date(date);
  return `${getDate.getFullYear()}-${getDate.getMonth() + 1}-${getDate.getDate()}`;
};

export const compareSelectedDates = (dateToCompare: Date, s: number, data: number) => {
  if (dateToCompare && s) {
    const bool = s === data && data === dateToCompare.getDate() - 1;

    return (
      Date.UTC(
        dateToCompare.getFullYear(),
        dateToCompare.getMonth(),
        dateToCompare.getDate() - 1
      ) === Date.UTC(dateToCompare.getFullYear(), dateToCompare.getMonth(), s) && bool
    );
  }
  return false;
};
