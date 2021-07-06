/* eslint-env jest */

import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { Textarea } from '..';
import '@testing-library/jest-dom/extend-expect';

describe('<TextArea /> component', () => {
  test('should render properly', () => {
    const { container } = render(<Textarea radius={undefined} />);
    expect(container.querySelector('textarea')).not.toBeNull();
  });
  test('should render properly with props', () => {
    const { container } = render(
      <Textarea family={undefined} resizable radius={2} borderColor='red' />,
    );
    expect(container.querySelector('textarea')).not.toBeNull();
  });
  test('should write in the textarea', () => {
    const { container } = render(
      <Textarea family={undefined} resizable radius='3rem' />,
    );
    const textarea = container.querySelector('textarea');
    fireEvent.change(textarea || window, {
      target: { value: 'Im the new text' },
    });
    expect(textarea?.value).not.toBeNull();
  });
});
