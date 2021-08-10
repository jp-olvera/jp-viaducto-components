/* eslint-env jest */

import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { Textarea } from '..';

describe('<TextArea /> component', () => {
  test('should render properly', () => {
    const { container } = render(<Textarea />);
    expect(container.querySelector('textarea')).not.toBeNull();
  });
  test('should render properly with props', () => {
    const { container } = render(
      <Textarea family={undefined} resizable radius='md' borderColor='red' />,
    );
    expect(container.querySelector('textarea')).not.toBeNull();
  });
  test('should render disabled textarea', () => {
    const { container } = render(<Textarea disabled />);
    expect(container.querySelector('textarea')).toMatchSnapshot();
  });
  test('should write in the textarea', () => {
    const { container } = render(
      <Textarea family={undefined} resizable radius='lg' />,
    );
    const textarea = container.querySelector('textarea');
    fireEvent.change(textarea || window, {
      target: { value: 'Im the new text' },
    });
    expect(textarea?.value).not.toBeNull();
  });
});
