import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import { StyledDatePicker } from './StyledDatePicker';
import Calendar from './Calendar';

export interface DPI {
  range?: boolean;
  date?: Date | number;
  shapeColor?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'tab';
  onDateSelected: (data: {
    date: Date | Date[];
    dateString: string | string[];
  }) => void | undefined;
}

const DatePicker = ({
  date = new Date(),
  onDateSelected,
  shapeColor = 'danger',
  range = true,
}: DPI) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledDatePicker config={configuration} range={range}>
      <Calendar
        date={date}
        onDateSelected={onDateSelected}
        shapeColor={shapeColor}
      />
    </StyledDatePicker>
  );
};

export default DatePicker;
