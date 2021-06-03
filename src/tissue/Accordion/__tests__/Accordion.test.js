/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '../../../test-utils';
import { Accordion, AccordionItem } from '..';
import { updateAfterTransition } from '../AccordionItem';

describe('<Accordion />', () => {
  test('should render the content of the first child', () => {
    const { getByText } = render(
      <Accordion defaultIndex={0} paddingY='}' paddingX='noThisValue'>
        <AccordionItem title='Open1'>
          <p>Text1</p>
        </AccordionItem>
        <AccordionItem title='Open2'>
          <p>Text2</p>
        </AccordionItem>
      </Accordion>,
    );

    expect(getByText('Text1')).toBeVisible();
  });
  test('should render the content of the second child when clicking its title', () => {
    const { getByText } = render(
      <Accordion defaultIndex={0} expandMultiple>
        <AccordionItem title='Open1'>
          <p>Text1</p>
        </AccordionItem>
        <AccordionItem title='Open2'>
          <p>Text2</p>
        </AccordionItem>
      </Accordion>,
    );
    fireEvent.click(getByText('Open2'));
    expect(getByText('Text2')).toBeVisible();
  });
  test('should render both contents when using expandMultiple', () => {
    const { getByText } = render(
      <Accordion expandMultiple>
        <AccordionItem title='Open1'>
          <p>Text1</p>
        </AccordionItem>
        <AccordionItem title='Open2'>
          <p>Text2</p>
        </AccordionItem>
      </Accordion>,
    );
    fireEvent.click(getByText('Open1'));
    fireEvent.click(getByText('Open2'));
    expect(getByText('Text1')).toBeVisible();
    expect(getByText('Text2')).toBeVisible();
  });
  test('should return AccordionItem with default title', () => {
    const { container, queryByText } = render(
      <Accordion expandMultiple>
        <AccordionItem expanded>
          <p>Text1</p>
        </AccordionItem>
        <AccordionItem title={0}>
          <p>Text2</p>
        </AccordionItem>
      </Accordion>,
    );
    fireEvent.click(queryByText('0'));
    expect(container).toBeInTheDocument();
  });
  test('should execute function', () => {
    jest.mock('../AccordionItem');
    expect(updateAfterTransition(true, () => {})).not.toBeDefined();
  });
});
