/* eslint-env jest */

import React from 'react';
import { render } from '../../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import { Dropdown } from '..';
import { refs } from '../DropdownRef';

const options = [<p>1</p>, <p>2</p>, <p>3</p>];

describe('<Dropdown/>', () => {
  test('should render an focusable activator to toggle the dropdown', () => {
    const dropdown = render(<Dropdown options={options} family={null} />);
    expect(dropdown.getByTestId('dropdown-activator')).toBeInTheDocument();
    const activator = dropdown.getByTestId('dropdown-activator');
    activator.focus();
    expect(activator).toHaveFocus();
  });
  test('should display popup', () => {
    const dropdown = render(<Dropdown options={options} family='Roboto' />);
    const activator = dropdown.getByTestId('dropdown-activator');
    activator.click();
    expect(dropdown.getByTestId('dropdown-itemList')).toBeVisible();
  });
  test('should render with default props and borders', () => {
    const borders = {
      top: '1px solid black',
      bottom: '1px solid black',
      left: '1px solid black',
      right: '1px solid black',
    };
    const { container } = render(<Dropdown border={borders} />);
    expect(container).toMatchSnapshot();
  });
  test('should render with default props and border left none', () => {
    const bordersNoLeft = {
      top: '1px solid black',
      bottom: '1px solid black',
      right: '1px solid black',
    };
    const { container } = render(
      <Dropdown border={bordersNoLeft} onClick={null} />,
    );
    expect(container).toMatchSnapshot();
  });
  describe('ref functions', () => {
    test('should not be null in clickHandler', () => {
      jest.spyOn(refs, 'clickHandler').getMockImplementation(() => null);
      expect(
        refs.clickHandler(
          () => {},
          true,
          {
            current: {
              getBoundingClientRect: () => ({ bottom: 500 }),
              style: { bottom: '' },
            },
          },
          { current: { clientHeight: '1rem' } },
        ),
      ).not.toBeNull();
    });
    test('should not be null in clickOutsideHandler', () => {
      jest.spyOn(refs, 'clickOutsideHandler').getMockImplementation(() => null);
      expect(refs.clickOutsideHandler).not.toBeNull();
    });
  });
});
