import React, { useContext, useEffect, useState } from 'react';
import { ConfigContext } from '../../providers';
import { StyledDatePicker } from './StyledDatePicker';
import Calendar from './Calendar';

/** onDateSelectedProps for DatePicker component */
export interface onDateSelectedProps {
  /* Date selected (string for range=false and string[] for true) */
  date: Date | Date[];
  /* Date as string selected (string for range=false and string[] for true) */
  dateString: string | string[];
}

/** DatePicker Component */
export interface DatePicker extends React.HTMLAttributes<HTMLDivElement> {
  /** Set a multi select date on True or just one date on False */
  range: boolean;
  /** Set the inital date in calendar (defaults to new Date()) */
  date?: Date | number;
  /** Set the shapeColor of the details */
  shapeColor?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'tab';
  /** onDateSelected (data: {date Date |Date[], dateString: string|string[]}) => void */
  onDateSelected: (data: onDateSelectedProps) => void | undefined;
}

/**
 * DatePicker Component
 * @param {boolean} range Set a multi select date on True or just one date on False
 * @param {Date|number} date Set the inital date in calendar (defaults to new Date())
 * @param {string} shapeColor Set the shapeColor of the details
 * @returns onDateSelected (data: {date Date |Date[], dateString: string|string[]}) => void
 */
const DatePicker = ({
  date,
  onDateSelected,
  shapeColor = 'danger',
  range,
  ...rest
}: DatePicker) => {
  const { configuration } = useContext(ConfigContext);
  const [d, setD] = useState<Date | number>(date || new Date());
  useEffect(() => {
    setD(typeof date === 'number' ? new Date(date) : new Date());
  }, [date]);
  return (
    <StyledDatePicker config={configuration} range={range} {...rest}>
      <Calendar date={d} onDateSelected={onDateSelected} shapeColor={shapeColor} range={range} />
    </StyledDatePicker>
  );
};

export default DatePicker;
