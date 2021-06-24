/* eslint-env jest */

import React, { useState, useRef } from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { render, fireEvent } from '../../../test-utils';
import { Popover } from '..';

const clickOutside = jest.fn();
const Template = ({ args }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const ref = useRef(null);
  return (
    <div>
      <button type='button'>outside</button>
      <button ref={ref} type='button' onClick={handleClick}>
        show
      </button>
      <Popover
        active={active}
        content={
          <span style={{ width: '300px', height: '300px' }}>content</span>
        }
        target={ref}
        handleClose={clickOutside}
        {...args}
      />
    </div>
  );
};
describe('<Popover/>', () => {
  test('should not render', () => {
    const { queryByText } = render(
      <Popover
        active
        content={
          <span style={{ width: '300px', height: '300px' }}>content</span>
        }
      />,
    );
    expect(queryByText('content')).toEqual(null);
  });
  test('should render properly', () => {
    const { container } = render(<Template />);
    expect(container).toMatchSnapshot();
  });
  test('should render elevation', () => {
    const { container } = render(
      <Template elevation={1} elevationDirection='bottom' />,
    );
    expect(container).toMatchSnapshot();
  });
  test('should render top', () => {
    const { container } = render(<Template position='top' />);
    expect(container).toMatchSnapshot();
  });
  test('should render bottom', () => {
    const { container } = render(<Template position='bottom' />);
    expect(container).toMatchSnapshot();
  });
  test('should render right', () => {
    const { container } = render(<Template position='right' />);
    expect(container).toMatchSnapshot();
  });
  test('should render left', () => {
    const { container } = render(<Template position='left' />);
    expect(container).toMatchSnapshot();
  });

  test('popover content should not be visible', () => {
    const { queryByText } = render(<Template />);
    expect(queryByText('content')).toEqual(null);
  });
  test('popover content should be visible', () => {
    const { getByText } = render(<Template />);
    fireEvent.click(getByText('show'));
    expect(getByText('content')).toBeInTheDocument();
  });

  test('popover should call onClose when mouseup outside', () => {
    const { getByText } = render(<Template position='right' />);
    fireEvent.click(getByText('show'));
    expect(getByText('content')).toBeInTheDocument();
    fireEvent.mouseUp(getByText('outside'));
    expect(clickOutside).toBeCalledTimes(1);
  });
  test('popover content is wider than window width', () => {
    const { getByText } = render(<Template />);
    fireEvent.click(getByText('show'));
    window.innerWidth = 299;
    window.innerHeight = 800;
    fireEvent(window, new Event('resize'));
    expect(getByText('content')).toBeVisible();
  });
  test('popover visible psition top but no space', () => {
    const { getByText } = render(<Template position='top' />);
    fireEvent.click(getByText('show'));
    window.innerWidth = 500;
    window.innerHeight = 800;
    fireEvent(window, new Event('resize'));
    expect(getByText('content')).toBeVisible();
  });
  test('content visible position right but no space', () => {
    const { getByText } = render(<Template position='right' />);
    fireEvent.click(getByText('show'));
    expect(getByText('content')).toBeVisible();
    window.innerWidth = 300;
    window.innerHeight = 800;
    fireEvent(window, new Event('resize'));
    expect(getByText('content')).toBeInTheDocument();
  });
  test('content visible position left but no space', () => {
    const { getByText } = render(<Template position='left' />);
    fireEvent.click(getByText('show'));
    expect(getByText('content')).toBeVisible();
    window.innerWidth = 300;
    window.innerHeight = 800;
    fireEvent(window, new Event('resize'));
    expect(getByText('content')).toBeInTheDocument();
  });
});
