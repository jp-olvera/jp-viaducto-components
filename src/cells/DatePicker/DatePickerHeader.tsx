import React, { useContext } from 'react';
import { Container, Paragraph } from '..';
import { ConfigContext } from '../../providers';
import ChevronDatePicker from './ChevronDatePicker';
import { handleChange } from './datePickerFunctions';
import { HR } from './StyledDatePicker';

export interface DatePickerHeader {
  range: boolean;
  firstDate: Date | undefined | null;
  isSelecting: boolean;
  today: Date;
  setSelected: Function;
  setToday: Function;
  months: string[];
}

const DatePickerHeader = ({
  range,
  firstDate,
  isSelecting,
  today,
  setSelected,
  setToday,
  months,
}: DatePickerHeader) => {
  const { configuration } = useContext(ConfigContext);
  const { dark } = configuration.colors.text;

  const date = React.useCallback(() => {
    return months[today.getMonth()] + '-' + today.getFullYear().toString();
  }, [today]);
  return (
    <>
      <Container expandHorizontal vertical='xs'>
        <div className='date-picker-head'>
          <button
            type='button'
            className='date-chevron'
            aria-label='Go to last year'
            disabled={
              !!(range && firstDate && isSelecting && new Date(firstDate) >= new Date(today))
            }
            onClick={() => {
              handleChange({ year: false }, setSelected, range, setToday);
            }}
          >
            <ChevronDatePicker color={dark} type='dl' className='dl' />
          </button>
          <button
            type='button'
            className='date-chevron'
            aria-label='Go to last month'
            disabled={
              !!(range && firstDate && isSelecting && new Date(firstDate) >= new Date(today))
            }
            onClick={() => {
              handleChange({ month: false }, setSelected, range, setToday);
            }}
          >
            <ChevronDatePicker color={dark} type='l' className='l' />
          </button>
          <Paragraph weight='500' align='center' size='sm'>
            {date()}
          </Paragraph>
          <button
            type='button'
            className='date-chevron'
            aria-label='Go to next month'
            onClick={() => {
              handleChange({ month: true }, setSelected, range, setToday);
            }}
          >
            <ChevronDatePicker color={dark} type='r' className='r' />
          </button>
          <button
            type='button'
            className='date-chevron'
            aria-label='Go to next year'
            onClick={() => {
              handleChange({ year: true }, setSelected, range, setToday);
            }}
          >
            <ChevronDatePicker color={dark} type='dr' className='dr' />
          </button>
        </div>
      </Container>
      <HR />
    </>
  );
};

export default DatePickerHeader;
