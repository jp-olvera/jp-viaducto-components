import React, { useContext } from 'react';
import { Container, Paragraph } from '..';
import { ConfigContext } from '../../providers';
import ChevronDatePicker from './ChevronDatePicker';
import { handleChange } from './datePickerFunctions';
import { HR } from './StyledDatePicker';

const DatePickerHeader = ({
  range,
  firstDate,
  isSelecting,
  today,
  setSelected,
  setToday,
  months,
}: {
  range: boolean;
  firstDate: Date | undefined | null;
  isSelecting: boolean;
  today: Date;
  setSelected: Function;
  setToday: Function;
  months: string[];
}) => {
  const { configuration } = useContext(ConfigContext);
  const { dark } = configuration.colors.text;

  return (
    <>
      <Container expandHorizontal vertical='xs'>
        <div className='date-picker-head'>
          <button
            type='button'
            className='date-chevron'
            disabled={
              !!(
                range
                && firstDate
                && isSelecting
                && new Date(firstDate) >= new Date(today)
              )
            }
            onClick={() => {
              handleChange({ year: false }, setSelected, range, setToday);
            }}
          >
            <ChevronDatePicker color={dark} type='dl' />
          </button>
          <button
            type='button'
            className='date-chevron'
            disabled={
              !!(
                range
                && firstDate
                && isSelecting
                && new Date(firstDate) >= new Date(today)
              )
            }
            onClick={() => {
              handleChange({ month: false }, setSelected, range, setToday);
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
              handleChange({ month: true }, setSelected, range, setToday);
            }}
          >
            <ChevronDatePicker color={dark} type='r' />
          </button>
          <button
            type='button'
            className='date-chevron'
            onClick={() => {
              handleChange({ year: true }, setSelected, range, setToday);
            }}
          >
            <ChevronDatePicker color={dark} type='dr' />
          </button>
        </div>
      </Container>
      <HR />
    </>
  );
};

export default DatePickerHeader;
