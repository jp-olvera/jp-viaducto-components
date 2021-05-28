/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { Drawer } from '..';

describe('<Drawer/>', () => {
  test('should be visible', () => {
    render(
      <Drawer active>
        <h1>Title</h1>
      </Drawer>,
    );
    expect(screen.getByText('Title')).toBeVisible();
  });
  test('should no be visible', () => {
    render(
      <Drawer>
        <h1>Title</h1>
      </Drawer>,
    );
    expect(screen.queryByText('Title')).toMatchSnapshot();
  });
  test('should click the button', () => {
    render(
      <Drawer>
        <h1>Title</h1>
      </Drawer>,
    );
    const button = screen.queryByRole('button');
    fireEvent.click(button);
    expect(button).toMatchInlineSnapshot(`
      <button
        class="BareButton__StyledButton-sc-7bpup3-0 fpYbxH"
        type="button"
      >
        X
      </button>
    `);
  });
});
