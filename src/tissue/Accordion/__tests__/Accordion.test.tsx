/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '../../../test-utils';
import { Accordion, AccordionItem } from '..';

describe('<Accordion />', () => {
  test('should render the content of the first child', () => {
    const { getByText } = render(
      <Accordion defaultIndex={0} paddingY='}' paddingX='noThisValue'>
        <AccordionItem
          title='Open1'
          id='1'
          expanded
          index={1}
          onClick={() => {}}
          paddingX='tiny'
          paddingY='none'
          transition='ease'
        >
          <p>Text1</p>
        </AccordionItem>
        <AccordionItem
          title='Open2'
          id='2'
          expanded
          index={2}
          onClick={() => {}}
          paddingX='lg'
          paddingY='md'
          transition=''
        >
          <p>Text2</p>
        </AccordionItem>
      </Accordion>,
    );
    expect(getByText('Text1')).toBeVisible();
  });
  test('should render the content of the second child when clicking its title', () => {
    const { getByText } = render(
      <Accordion defaultIndex={0} expandMultiple>
        <AccordionItem
          title='Open1'
          id='1'
          expanded
          index={1}
          onClick={() => {}}
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
          index={3}
          onClick={() => {}}
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
          onClick={jest.fn}
          id='1'
          expanded
          index={1}
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
          index={2}
          onClick={() => {}}
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
      <Accordion expandMultiple>
        <AccordionItem
          expanded
          transition='ease-in'
          id='0'
          index={0}
          onClick={() => {}}
          paddingX='tiny'
          paddingY='none'
          title='0'
        >
          <p>Text1</p>
        </AccordionItem>
        <AccordionItem
          title={undefined}
          id='2'
          expanded
          index={2}
          onClick={() => {}}
          paddingX='tiny'
          paddingY='none'
          transition='ease'
        >
          <p>Text2</p>
        </AccordionItem>
      </Accordion>,
    );
    fireEvent.click(queryByText('0'));
    expect(container).toBeInTheDocument();
  });
});
