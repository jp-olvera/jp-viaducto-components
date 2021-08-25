import React, { useContext, useEffect, useState } from 'react';
import {
  dateCompare,
  DAYS,
  fillDays,
  getAllDaysInMonth,
  getStarterDay,
  MONTHS,
} from '../../utils/getDateDifference';
import { ConfigContext } from '../../providers';
import { Container, Paragraph } from '..';
import { Day } from './StyledDatePicker';
import { DPI } from './DatePicker';
import { isToday, onClickDay, setClassName } from './datePickerFunctions';
import WeekDays from './WeekDays';
import DatePickerHeader from './DatePickerHeader';

// TODO: Set backColor of the days between firstDate and secondDate

const Calendar = ({
  date = new Date(),
  shapeColor = 'danger',
  range,
  onDateSelected,
}: DPI) => {
  const [firstDate, setFirstDate] = useState<Date | null>();
  const [secondDate, setSecondDate] = useState<Date | null>();
  const [isSelecting, setIsSelecting] = useState(false);
  const { configuration } = useContext(ConfigContext);
  const [today, setToday] = useState<Date>(new Date(date));
  const now = new Date();
  const [allDays] = useState(
    getAllDaysInMonth(today.getMonth(), today.getFullYear()),
  );
  const [selected, setSelected] = useState<{
    prevSelected?: number;
    prevSelectedDate?: Date;
    selected: number;
    selectedDate?: Date;
  }>({
    prevSelected: -1,
    selected: -1,
  });

  const lang = 'en';
  const months = MONTHS[lang];
  const days = DAYS[lang];
  const firstDay = getStarterDay(today.getFullYear(), today.getMonth());

  useEffect(() => {
    setToday(today);
  }, [today]);

  return (
    <div className='calendar'>
      <DatePickerHeader
        range={range}
        firstDate={firstDate}
        isSelecting={isSelecting}
        today={today}
        setSelected={setSelected}
        setToday={setToday}
        months={months}
      />
      <Container
        vertical='xs'
        horizontal='xs'
        expandHorizontal
        className='date-calendar'
      >
        <WeekDays days={days} />
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
            onClick={() => onClickDay(
              setToday,
              range,
              setIsSelecting,
              firstDate,
              setSelected,
              data,
              setFirstDate,
              setSecondDate,
              secondDate,
              onDateSelected,
            )}
            className={`${
              setClassName(
                today,
                firstDate,
                selected.prevSelectedDate,
                data + 1,
                true,
              )
              || (setClassName(
                today,
                secondDate,
                selected.selectedDate,
                data + 1,
                true,
              )
                && range === true)
              || ((selected.selectedDate?.getDate() || -50) + 1 === data + 1
                && range === false)
                ? 'date-selected'
                : ''
            } ${isToday(now, today, data, selected) ? 'date-today' : ''}`}
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
