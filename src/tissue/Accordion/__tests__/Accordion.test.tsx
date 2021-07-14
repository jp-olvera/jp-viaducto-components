/* eslint-env jest */

import React from 'react';

import { render, fireEvent } from '../../../test-utils';
import { Accordion, AccordionItem } from '..';

describe('<Accordion />', () => {
  test('should render the content of the first child', () => {
    const { getByText } = render(
      <Accordion>
        <AccordionItem
          title='Open1'
          icon='❤'
          paddingY={undefined}
          paddingX={undefined}
          expanded
        >
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
      <Accordion expandMultiple>
        <AccordionItem
          title='Open1'
          id='1'
          expanded
          paddingX='sm'
          paddingY='xs'
          transition='linear'
        >
          <p>Text1</p>
        </AccordionItem>
        <AccordionItem
          title='Open2'
          id='3'
          expanded
          paddingX='xs'
          paddingY='xl'
          transition='ease-in'
        >
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
        <AccordionItem
          title='Open1'
          id='1'
          expanded
          paddingX='none'
          paddingY='none'
          transition='ease-in-out'
        >
          <p>Text1</p>
        </AccordionItem>
        <AccordionItem
          title='Open2'
          id='2'
          expanded
          paddingX='tiny'
          paddingY='none'
          transition='linear'
        >
          <p>Text2</p>
        </AccordionItem>
      </Accordion>,
    );
    fireEvent.click(getByText('Open1'));
    fireEvent.click(getByText('Open2'));
    expect(getByText('Text1')).toBeVisible();
    expect(getByText('Text2')).toBeVisible();
    fireEvent.click(getByText('Open1'));
  });
  test('should return AccordionItem with default title', () => {
    const { container, queryByText } = render(
      <Accordion expandMultiple transition={null}>
        <AccordionItem
          expanded
          transition='ease-in'
          id='0'
          paddingX='tiny'
          paddingY='none'
          title='AAAAAA'
        >
          <p>Text1</p>
        </AccordionItem>
        <AccordionItem
          title={undefined}
          id='2'
          expanded
          paddingX='tiny'
          paddingY='none'
          transition={null}
        >
          <p>Text2</p>
        </AccordionItem>
      </Accordion>,
    );
    fireEvent.click(queryByText('AAAAAA'));
    expect(container).toBeInTheDocument();
  });
});
