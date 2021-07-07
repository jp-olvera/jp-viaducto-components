/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { Modal } from '..';

describe('<Modal></Modal>', () => {
  test('should not be visible', () => {
    render(<Modal allowClickOutside={false} />);
    expect(screen.queryByTestId('overlay')).toBe(null);
    expect(screen.queryByTestId('modal')).toBe(null);
  });
  test('should be visible', () => {
    render(<Modal active />);
    expect(screen.getByTestId('overlay')).toBeVisible();
    expect(screen.getByTestId('modal')).toBeVisible();
  });
  test('click on the overlay should call handleActive function', () => {
    const handleActive = jest.fn();
    render(<Modal active handleActive={handleActive} />);
    fireEvent.mouseUp(screen.getByTestId('overlay'));
    expect(handleActive).toBeCalled();
  });
  test('should click outside of the modal component', () => {
    const { container } = render(
      <div id='a'>
        <Modal active={false} allowClickOutside />
      </div>,
    );
    fireEvent.click(container.querySelector('#a') || window);
    expect(container).toMatchSnapshot();
  });
});
