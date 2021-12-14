import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { Keyboard } from '..';

describe('Keyboard', () => {
  test('onDown', () => {
    const onDown = jest.fn();
    const { container } = render(
      <div>
        <Keyboard onDown={onDown}>
          <span>content</span>
        </Keyboard>
      </div>
    );

    const element = screen.getByText('content');

    fireEvent.keyDown(element, { keyCode: 40 });
    fireEvent.keyDown(element, { which: 40 });
    fireEvent.keyDown(element, { which: 0 });

    expect(onDown).toHaveBeenCalled();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('onKeyDown', () => {
    const onDown = jest.fn();
    const onKeyDown = jest.fn();
    const { container } = render(
      <div>
        <Keyboard onDown={onDown} onKeyDown={onKeyDown}>
          <span>content</span>
        </Keyboard>
      </div>
    );

    const element = screen.getByText('content');

    fireEvent.keyDown(element, { keyCode: 40 });

    expect(onDown).toBeCalled();
    expect(onKeyDown).toBeCalled();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('change onKeyDown', () => {
    const firstOnKeyDown = jest.fn();
    const secondOnKeyDown = jest.fn();

    const { container, getByText, rerender } = render(
      <Keyboard target='document' onKeyDown={firstOnKeyDown}>
        <span>content</span>
      </Keyboard>
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent(
      getByText('content'),
      new KeyboardEvent('keydown', { bubbles: true, cancelable: true })
    );
    expect(firstOnKeyDown).toBeCalled();

    rerender(
      <Keyboard target='document' onKeyDown={secondOnKeyDown}>
        <span>content</span>
      </Keyboard>
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent(
      getByText('content'),
      new KeyboardEvent('keydown', { bubbles: true, cancelable: true })
    );
    expect(secondOnKeyDown).toBeCalled();
  });
});
