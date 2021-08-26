/* eslint-env jest */

import React from 'react';
import { render, axe, fireEvent } from '../../../test-utils';
import { DatePicker } from '..';
import ChevronDatePicker from '../ChevronDatePicker';

describe('<DatePicker/>', () => {
  test('should render properly', async () => {
    const { container } = render(
      <DatePicker range={false} onDateSelected={() => {}} />,
    );
    expect(container).toBeVisible();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should navigate to the next month and lose the selected day', () => {
    const dateInJuly = new Date(2021, 6, 19);
    const { container, getByText } = render(
      <DatePicker range={false} onDateSelected={() => {}} date={dateInJuly} />,
    );
    expect(getByText('Jul - 2021')).toBeVisible();
    fireEvent.click(getByText('10'));
    expect(getByText('10').parentNode).toHaveClass('date-selected');
    const nextMonthChevron = container.querySelector('.r');
    fireEvent.click(nextMonthChevron);
    expect(getByText('Aug - 2021')).toBeVisible();
    expect(getByText('10').parentNode).not.toHaveClass('date-selected');
  });
  test('should navigate to the next month', () => {
    const dateInJuly = new Date(2021, 6, 19);
    const { container, getByText } = render(
      <DatePicker range={false} onDateSelected={() => {}} date={dateInJuly} />,
    );
    expect(getByText('Jul - 2021')).toBeVisible();
    const nextMonthChevron = container.querySelector('.r');
    fireEvent.click(nextMonthChevron);
    expect(getByText('Aug - 2021')).toBeVisible();
  });
  test('should navigate to the next year', () => {
    const dateInMay = new Date(2021, 4, 19);
    const { container, getByText } = render(
      <DatePicker range={false} onDateSelected={() => {}} date={dateInMay} />,
    );
    expect(getByText('May - 2021')).toBeVisible();
    const nextYearChevron = container.querySelector('.dr');
    fireEvent.click(nextYearChevron);
    expect(getByText('May - 2022')).toBeVisible();
  });
  test('should navigate to the last month', () => {
    const dateInJuly = new Date(2021, 6, 19);
    const { container, getByText } = render(
      <DatePicker range={false} onDateSelected={() => {}} date={dateInJuly} />,
    );
    expect(getByText('Jul - 2021')).toBeVisible();
    const lastMonthChevron = container.querySelector('.l');
    fireEvent.click(lastMonthChevron);
    expect(getByText('Jun - 2021')).toBeVisible();
  });
  test('should navigate to the last year', () => {
    const dateInMay = new Date(2021, 4, 19);
    const { container, getByText } = render(
      <DatePicker range={false} onDateSelected={() => {}} date={dateInMay} />,
    );
    expect(getByText('May - 2021')).toBeVisible();
    const lastYearChevron = container.querySelector('.dl');
    fireEvent.click(lastYearChevron);
    expect(getByText('May - 2020')).toBeVisible();
  });
  test('should select a date', () => {
    const mock = jest.fn();
    const { getByText } = render(
      <DatePicker range={false} onDateSelected={mock} />,
    );
    fireEvent.click(getByText('20'));
    expect(mock).toHaveBeenCalled();
  });
  test('should select multi dates', () => {
    const result = {
      date: [new Date(1998, 6, 19), new Date(1998, 6, 24)],
      dateString: ['1998-7-20', '1998-7-25'],
    };
    const mock = jest.fn(() => result);
    const { getByText } = render(
      <DatePicker
        range
        onDateSelected={mock}
        date={new Date(1998, 6, 19)}
        shapeColor='success'
      />,
    );
    fireEvent.click(getByText('20'));
    fireEvent.click(getByText('25'));
    expect(mock).toHaveBeenCalled();
    expect(mock()).toEqual(result);
    // Restart component by clicking another day
    fireEvent.click(getByText('26'));
  });
});

describe('<ChevronDatePicker', () => {
  test('should render with red stroke color', () => {
    const { container } = render(<ChevronDatePicker type='l' color='red' />);
    expect(container).not.toBeNull();
  });
  test('should render with default stroke color', () => {
    const { container } = render(<ChevronDatePicker type='l' />);
    expect(container).not.toBeNull();
  });
});
