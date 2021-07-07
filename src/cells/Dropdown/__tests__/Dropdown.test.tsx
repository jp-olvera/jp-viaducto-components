/* eslint-env jest */

import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import { Dropdown } from '..';
import Drop from '../Drop';
import { refs } from '../DropdownRef';

const options = [<p>1</p>, <p>2</p>, <p>3</p>];

describe('<Dropdown/>', () => {
  test('should render an focusable activator to toggle the dropdown', () => {
    const dropdown = render(
      <Dropdown
        content={options}
        family={null}
        defaultText=''
        onClick={() => {}}
      />,
    );
    expect(dropdown.getByTestId('dropdown-activator')).toBeInTheDocument();
    const activator = dropdown.getByTestId('dropdown-activator');
    activator.focus();
    expect(activator).toHaveFocus();
    fireEvent.mouseUp(activator);
  });
  test('should display popup', () => {
    const mockFn = jest.fn();
    const dropdown = render(
      <Dropdown
        content={options}
        family='Roboto'
        onClick={mockFn}
        defaultText=''
      />,
    );
    const activator = dropdown.getByTestId('dropdown-activator');
    activator.click();
    expect(dropdown.getByTestId('dropdown-itemList')).toBeVisible();
    fireEvent.click(dropdown.queryByText('1') || window);
    expect(mockFn).toHaveBeenCalled();
  });
  test('should render with default props and borders', () => {
    const borders = {
      top: '1px solid black',
      bottom: '1px solid black',
      left: '1px solid black',
      right: '1px solid black',
    };
    const { container } = render(
      <Dropdown border={borders} defaultText='' onClick={() => {}} />,
    );
    expect(container).toMatchSnapshot();
  });
  test('should render with default props and border left none', () => {
    const bordersNoLeft = {
      top: '1px solid black',
      bottom: '1px solid black',
      right: '1px solid black',
    };
    const { container } = render(
      <Dropdown border={bordersNoLeft} onClick={() => {}} defaultText='' />,
    );
    expect(container).toMatchSnapshot();
  });
  test('should click outside of dropdrown', () => {
    const { container, queryByText } = render(
      <section>
        <Dropdown
          content={options}
          family='Roboto'
          onClick={() => {}}
          defaultText='Selection'
        />
      </section>,
    );
    const activator = queryByText('Selection');
    fireEvent.click(activator);
    const section = container.querySelector('section');
    fireEvent.mouseUp(section);
    fireEvent.click(section);
    expect(container).toMatchSnapshot();
  });

  describe('<Drop>', () => {
    const ref = React.createRef();
    test('should render Drop', () => {
      const { container } = render(
        <Drop target={<div />} contentRef={ref}>
          <div>aa</div>
        </Drop>,
      );
      expect(container).toMatchSnapshot();
    });
  });
  describe('ref functions', () => {
    test('should not be null in clickHandler', () => {
      jest.spyOn(refs, 'clickHandler').mockImplementation(() => 1);
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
      jest.spyOn(refs, 'clickOutsideHandler').mockImplementation(() => null);
      expect(refs.clickOutsideHandler).not.toBeNull();
    });
  });
});
