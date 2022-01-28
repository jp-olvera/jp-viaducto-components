import { convertToUTC, dateToString } from '../../utils/getDateDifference';

export const handleChange = (
  p: {
    year?: boolean;
    month?: boolean;
  },
  setSelected: Function,
  range: boolean,
  setToday: Function
) => {
  /* istanbul ignore else */
  if (!range) {
    setSelected({ selected: -1 });
  }
  setToday(
    (before: Date) =>
      new Date(
        p.year === undefined || p.year === null
          ? before.getFullYear()
          : p.year
          ? before.getFullYear() + 1
          : before.getFullYear() - 1,
        p.month === undefined || p.month === null
          ? before.getMonth()
          : p.month
          ? before.getMonth() + 1
          : before.getMonth() - 1,
        before.getDate()
      )
  );
};

export const isToday = (now: Date, today: Date, data: number, selected: { selected: number }) =>
  now.getDate() === data + 1 &&
  now.getFullYear() === today.getFullYear() &&
  now.getMonth() === today.getMonth() &&
  selected.selected + 1 !== today.getDate() &&
  selected.selected === -1;

export const setClassName = (
  today: Date,
  date: Date | null | undefined,
  dateToCompare: Date | null | undefined,
  dayToCompare: number
) => {
  if (dateToCompare && date) {
    const compareToday =
      date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth();
    return (
      compareToday &&
      convertToUTC(date) >= convertToUTC(dateToCompare) &&
      date.getDate() === dayToCompare &&
      dateToCompare.getDate() === dayToCompare
    );
  }
  return false;
};

export const onClickDay = (
  setToday: Function,
  range: boolean,
  setIsSelecting: Function,
  firstDate: Date | null | undefined,
  setSelected: Function,
  data: number,
  setFirstDate: Function,
  setSecondDate: Function,
  secondDate: Date | null | undefined,
  onDateSelected: Function,
  setIsBetween: Function
): void => {
  setToday((before: Date) => {
    if (range) {
      setIsSelecting(true);
      if (!firstDate) {
        setSelected(() => ({
          prevSelected: data,
          selected: data,
          selectedDate: new Date(before.getFullYear(), before.getMonth(), data + 1),
          prevSelectedDate: new Date(before.getFullYear(), before.getMonth(), data + 1),
        }));
        setFirstDate(new Date(before.getFullYear(), before.getMonth(), data + 1));
      }
      if (!secondDate && firstDate) {
        setSelected((beforeS) => ({
          prevSelected: beforeS.prevSelected,
          prevSelectedDate: beforeS.prevSelectedDate,
          selectedDate: new Date(b.getFullYear(), b.getMonth(), data + 1),
          selected: data,
        }));
        const f = firstDate;
        const b = before;
        setSecondDate(() => {
          onDateSelected({
            date: [
              new Date(f.getFullYear(), f.getMonth(), f.getDate()),
              new Date(b.getFullYear(), b.getMonth(), data + 1),
            ],
            dateString: [
              dateToString(new Date(f.getFullYear(), f.getMonth(), f.getDate())),
              dateToString(new Date(b.getFullYear(), b.getMonth(), data + 1)),
            ],
          });
          setIsBetween(
            Date.UTC(f.getFullYear(), f.getMonth(), f.getDate()) <
              Date.UTC(b.getFullYear(), b.getMonth(), data + 1)
          );

          return new Date(b.getFullYear(), b.getMonth(), data + 1);
        });
      }
      if (secondDate && firstDate) {
        setIsSelecting(false);
        setSelected({ prevSelected: -1, selected: -1 });
        setFirstDate(null);
        setSecondDate(null);
      }
    } else {
      setSelected({
        selected: data,
        selectedDate: new Date(before.getFullYear(), before.getMonth(), data),
      });
      onDateSelected({
        date: new Date(before.getFullYear(), before.getMonth(), data + 1),
        dateString: dateToString(new Date(before.getFullYear(), before.getMonth(), data + 1)),
      });
    }
    return new Date(before.getFullYear(), before.getMonth(), data + 1);
  });
};

export const dateBetweenSelected = (
  isBetween: boolean,
  firstDate: Date | undefined | null,
  today: Date,
  data: number
) =>
  isBetween &&
  firstDate &&
  convertToUTC(firstDate) < convertToUTC(today) &&
  data + 1 >= firstDate?.getDate() &&
  data + 1 <= today.getDate() &&
  firstDate.getMonth() === today.getMonth() &&
  firstDate.getFullYear() === today.getFullYear();
