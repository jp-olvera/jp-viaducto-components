/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { Modal } from '..';

describe('<Modal></Modal>', () => {
  test('should not be visible', () => {
    render(
      <Modal
        headComponent='AAA'
        onAccept={null}
        maxWidth={null}
        onReject={null}
        breakpoint={null}
        allowClickOutside={false}
      />,
    );
    expect(screen.queryByTestId('overlay')).toBe(null);
    expect(screen.queryByTestId('modal')).toBe(null);
  });
  test('should be visible', () => {
    render(<Modal active />);
    expect(screen.getByTestId('overlay')).toBeVisible();
    expect(screen.getByTestId('modal')).toBeVisible();
  });
  test('controls should be visible', () => {
    const onReject = jest.fn();
    render(<Modal active onReject={onReject} />);
    expect(screen.getByTestId('controls')).toBeVisible();
  });
  test('click close button should call handleActive function', () => {
    const handleActive = jest.fn();
    render(<Modal active handleActive={handleActive} />);
    fireEvent.click(screen.getByTestId('close-button'));
    expect(handleActive).toBeCalled();
  });
  test('click on the overlay should call handleActive function', () => {
    const handleActive = jest.fn();
    render(<Modal active handleActive={handleActive} />);
    fireEvent.mouseUp(screen.getByTestId('overlay'));
    expect(handleActive).toBeCalled();
  });
  test('should call onAccept function', () => {
    const onAccept = jest.fn();
    render(<Modal active onAccept={onAccept} />);
    fireEvent.click(screen.getByTestId('accept'));
    expect(onAccept).toBeCalled();
  });
  test('should call onReject function', () => {
    const onReject = jest.fn();
    render(<Modal active onReject={onReject} />);
    fireEvent.click(screen.getByTestId('reject'));
    expect(onReject).toBeCalled();
  });
  test('should click outside of the modal component', () => {
    const onReject = jest.fn();
    const { container } = render(
      <div id='a'>
        <Modal active={false} onReject={onReject} allowClickOutside />
      </div>,
    );
    fireEvent.click(container.querySelector('#a'));
    expect(container).toMatchSnapshot();
  });
});
