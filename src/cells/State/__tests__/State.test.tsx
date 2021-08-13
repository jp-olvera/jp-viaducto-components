/* eslint-env jest */

import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { State } from '..';

describe('State', () => {
  test('should title be in the Document', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <State
        title='Error'
        description='Algo falló'
        clickHandler={handleClick}
        buttonLabel='Back'
      />,
    );
    expect(getByText('Error')).toBeInTheDocument();
    expect(getByText('Algo falló')).toBeInTheDocument();
  });
  test('should call handleClick', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <State
        title='Error'
        description='Algo falló'
        clickHandler={handleClick}
        buttonLabel='Back'
        direction='column'
      />,
    );
    fireEvent.click(getByText('Back'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
