import React from 'react';
import { render, axe, fireEvent } from '../../../test-utils';
import { TimePicker } from '..';

describe('<TimePicker/>', () => {
  const mock = jest.fn();
  test('should render properly', async () => {
    const { container } = render(<TimePicker onTimeSelected={mock} />);
    expect(container).not.toBeNull();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should render 12h component', () => {
    const { container } = render(
      <TimePicker onTimeSelected={mock} timeFormat='12h' />,
    );
    expect(container.querySelector('.t-meridian')).toBeInTheDocument();
  });
  test('should change hour in 12hr format', () => {
    const result = {
      fullTime: '10:15:03 pm',
      hour: '10',
      minutes: '15',
      seconds: '03',
      format: '12h',
      meridian: 'pm',
    };
    const mockFn = jest.fn(() => result);

    const { getByTestId } = render(
      <TimePicker onTimeSelected={mockFn} timeFormat='12h' />,
    );
    const h = getByTestId('10-h');
    const m = getByTestId('15-m');
    const s = getByTestId('03-s');
    const meridian = getByTestId('meridian-pm');
    fireEvent.click(h);
    fireEvent.click(m);
    fireEvent.click(s);
    fireEvent.click(meridian);
    expect(mockFn()).toEqual(result);
    fireEvent.click(getByTestId('02-h'));
    fireEvent.click(getByTestId('11-h'));
  });
  test('should change to 11 hour in 12hr format', () => {
    const result = {
      fullTime: '11:15:03 pm',
      hour: '11',
      minutes: '15',
      seconds: '03',
      format: '12h',
      meridian: 'pm',
    };
    const mockFn = jest.fn(() => result);

    const { getByTestId } = render(
      <TimePicker onTimeSelected={mockFn} timeFormat='12h' />,
    );
    const h = getByTestId('11-h');
    const m = getByTestId('15-m');
    const s = getByTestId('03-s');
    const meridian = getByTestId('meridian-pm');
    fireEvent.click(h);
    fireEvent.click(m);
    fireEvent.click(s);
    fireEvent.click(meridian);
    expect(mockFn()).toEqual(result);
  });
  test('should change hour in 24h format', () => {
    const result = {
      fullTime: '08:05:13',
      hour: '08',
      minutes: '05',
      seconds: '13',
      format: '24h',
      meridian: 'am',
    };
    const mockFn = jest.fn(() => result);

    const { getByTestId } = render(
      <TimePicker onTimeSelected={mockFn} timeFormat='24h' />,
    );
    const h = getByTestId('08-h');
    const m = getByTestId('05-m');
    const s = getByTestId('13-s');
    fireEvent.click(h);
    fireEvent.click(m);
    fireEvent.click(s);
    expect(mockFn()).toEqual(result);
  });
});
