import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import { StyledDatePicker } from './StyledDatePicker';
import Calendar from './Calendar';

/** DatePicker Component */
export interface DPI {
  /** Set a multi select date on True or just one date on False */
  range: boolean;
  /** Set the inital date in calendar (defaults to new Date()) */
  date?: Date | number;
  /** Set the shapeColor of the details */
  shapeColor?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'tab';
  /** onDateSelected (data: {date Date |Date[], dateString: string|string[]}) => void */
  onDateSelected: (data: {
    date: Date | Date[];
    dateString: string | string[];
  }) => void | undefined;
}

/**
 * DatePicker Component
 * @param {boolean} range Set a multi select date on True or just one date on False
 * @param {Date|number} date Set the inital date in calendar (defaults to new Date())
 * @param {string} shapeColor Set the shapeColor of the details
 * @returns onDateSelected (data: {date Date |Date[], dateString: string|string[]}) => void
 */
const DatePicker = ({
  date = new Date(),
  onDateSelected,
  shapeColor = 'danger',
  range,
  ...rest
}: DPI & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledDatePicker config={configuration} range={range} {...rest}>
      <Calendar
        date={date}
        onDateSelected={onDateSelected}
        shapeColor={shapeColor}
        range={range}
      />
    </StyledDatePicker>
  );
};

export default DatePicker;
