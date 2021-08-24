import React, { useContext, useEffect, useState } from 'react';
import { dateCompare } from '../../utils/getDateDifference';
import { ConfigContext } from '../../providers';
import { Container, Paragraph } from '..';
import {
  dateToString,
  DAYS,
  fillDays,
  getAllDaysInMonth,
  getStarterDay,
  MONTHS,
} from './dateFunctions';
import ChevronDatePicker from './ChevronDatePicker';
import { Day, HR } from './StyledDatePicker';
import { DPI } from './DatePicker';

const Calendar = ({
  date = new Date(),
  shapeColor = 'danger',
  range = true,
  onDateSelected,
}: DPI) => {
  const [firstDate, setFirstDate] = useState<Date | null>();
  const [secondDate, setSecondDate] = useState<Date | null>();
  const [isSelecting, setIsSelecting] = useState(false);
  const { configuration } = useContext(ConfigContext);
  const { dark } = configuration.colors.text;
  const [today, setToday] = useState<Date>(new Date(date));
  const now = new Date();
  const [allDays] = useState(
    getAllDaysInMonth(today.getMonth(), today.getFullYear()),
  );
  const [selected, setSelected] = useState(-1);

  const lang = 'en';
  const months = MONTHS[lang];
  const days = DAYS[lang];
  const firstDay = getStarterDay(today.getFullYear(), today.getMonth());

  const handleChange = (
    p: {
      year?: boolean;
      month?: boolean;
    },
    daySelected?: number,
  ) => {
    setToday(
      (before: Date) => new Date(
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
        daySelected || before.getDate(),
      ),
    );
    if (!range) {
      setSelected(-1);
    }
  };

  const compareSelectedDates = (data: number) => {
    if (firstDate) {
      return (
        new Date(
          firstDate.getFullYear(),
          firstDate.getMonth(),
          firstDate.getDate(),
        ) === new Date(firstDate.getFullYear(), firstDate.getMonth(), data)
      );
    }
    if (secondDate) {
      return (
        new Date(
          secondDate.getFullYear(),
          secondDate.getMonth(),
          secondDate.getDate(),
        ) === new Date(secondDate.getFullYear(), secondDate.getMonth(), data)
      );
    }
    return false;
  };

  useEffect(() => {
    setToday(today);
  }, [today]);

  return (
    <div className='calendar'>
      <Container expandHorizontal vertical='xs'>
        <div className='date-picker-head'>
          <button
            type='button'
            className='date-chevron'
            disabled={!!(range && firstDate && dateCompare(firstDate, today))}
            onClick={() => {
              handleChange({ year: false });
            }}
          >
            <ChevronDatePicker color={dark} type='dl' />
          </button>
          <button
            type='button'
            className='date-chevron'
            disabled={!!(range && firstDate && dateCompare(firstDate, today))}
            onClick={() => {
              handleChange({ month: false });
            }}
          >
            <ChevronDatePicker color={dark} type='l' />
          </button>
          <Paragraph weight='500' align='center' size='sm'>
            {months[today.getMonth()]} - {today.getFullYear()}
          </Paragraph>
          <button
            type='button'
            className='date-chevron'
            onClick={() => {
              handleChange({ month: true });
            }}
          >
            <ChevronDatePicker color={dark} type='r' />
          </button>
          <button
            type='button'
            className='date-chevron'
            onClick={() => {
              handleChange({ year: true });
            }}
          >
            <ChevronDatePicker color={dark} type='dr' />
          </button>
        </div>
      </Container>
      <HR />
      <Container
        vertical='xs'
        horizontal='xs'
        expandHorizontal
        className='date-calendar'
      >
        {days.map((d: string) => (
          <div className='date-days-letter' key={d}>
            <Paragraph size='xs' align='center'>
              {d}
            </Paragraph>
          </div>
        ))}
      </Container>
      <Container
        vertical='xs'
        horizontal='xs'
        expandHorizontal
        className='date-calendar'
      >
        {fillDays(firstDay).map((data: number) => (
          <Day
            isSelecting={false}
            shapeColor={shapeColor}
            config={configuration}
            zero
            key={data}
            range={range}
          >
            {data + 1}
          </Day>
        ))}
        {fillDays(allDays).map((data: number) => (
          <Day
            isSelecting={isSelecting}
            range={range}
            shapeColor={shapeColor}
            config={configuration}
            zero={false}
            key={data}
            disabled={
              !!(
                range
                && firstDate
                && dateCompare(
                  firstDate,
                  new Date(today.getFullYear(), today.getMonth(), data),
                )
              )
            }
            onClick={() => {
              setToday((before: Date) => {
                if (range) {
                  setIsSelecting(true);
                  if (!firstDate) {
                    setSelected(data);
                    setFirstDate(
                      new Date(
                        before.getFullYear(),
                        before.getMonth(),
                        data + 1,
                      ),
                    );
                  }
                  if (!secondDate && firstDate) {
                    setSelected(data);
                    const f = firstDate;
                    const b = before;
                    setSecondDate(() => {
                      onDateSelected({
                        date: [
                          new Date(f.getFullYear(), f.getMonth(), f.getDate()),
                          new Date(b.getFullYear(), b.getMonth(), data + 1),
                        ],
                        dateString: [
                          dateToString(
                            new Date(f.getFullYear(), f.getMonth(), f.getDate()),
                          ),
                          dateToString(
                            new Date(b.getFullYear(), b.getMonth(), data + 1),
                          ),
                        ],
                      });

                      return new Date(b.getFullYear(), b.getMonth(), data + 1);
                    });
                  }
                  if (secondDate && firstDate) {
                    setIsSelecting(false);
                    setSelected(-1);
                    setFirstDate(null);
                    setSecondDate(null);
                  }
                } else {
                  setSelected(data);
                  onDateSelected({
                    date: new Date(
                      before.getFullYear(),
                      before.getMonth(),
                      data + 1,
                    ),
                    dateString: dateToString(
                      new Date(
                        before.getFullYear(),
                        before.getMonth(),
                        data + 1,
                      ),
                    ),
                  });
                }
                return new Date(
                  before.getFullYear(),
                  before.getMonth(),
                  data + 1,
                );
              });
            }}
            className={`${
              selected + 1 === data + 1
              || compareSelectedDates(data)
              || compareSelectedDates(data)
                ? 'date-selected'
                : ''
            } ${
              now.getDate() === data + 1
              && now.getFullYear() === today.getFullYear()
              && now.getMonth() === today.getMonth()
              && selected + 1 !== today.getDate()
              && selected === -1
                ? 'date-today'
                : ''
            }`}
          >
            <Paragraph align='center' size='sm' color='inherit'>
              {data + 1}
            </Paragraph>
          </Day>
        ))}
      </Container>
    </div>
  );
};

export default Calendar;
