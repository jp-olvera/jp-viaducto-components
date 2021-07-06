import React from 'react';
import { SBConfigI } from 'sb';
import { Search } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Andamio/Organisms/Search',
  component: Search,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    family: {
      description: 'Font family to use',
      table: {
        defaultValue: { summary: 'Roboto' },
        type: { summary: 'string' },
      },
      options: ['Manrope', 'Roboto', 'DM Sans'],
      control: { type: 'select' },
    },
    elevation: {
      description: 'The elevation level it should take, one of 1/2/3',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      options: [1, 2, 3],
      control: {
        type: 'select',
      },
    },
    elevationDirection: {
      description: "The elevation direction, if '' direction goes everywhere",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
      options: [
        '',
        'top',
        'right',
        'bottom',
        'left',
        'topRight',
        'topLeft',
        'bottomRight',
        'bottomLeft',
      ],
      control: {
        type: 'select',
      },
    },
    placeholder: {
      description: 'Placeholder',
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Introduce el término de búsqueda' },
      },
    },
    buttonLabel: {
      description: 'Button label',
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Search' },
      },
    },
    id: {
      description: 'Input id',
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'search' },
      },
    },
    handleSearch: {
      description: 'Function to be call',
      type: { name: 'function' },
      table: {
        type: { summary: 'function' },
      },
    },
    options: {
      description: 'String array',
      type: { name: 'string[]' },
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: [] },
      },
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Search {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Introduce el término de búsqueda',
  buttonLabel: 'Search',
  id: 'search',
  handleSearch: () => {},
  options: ['Razón Social', 'RFC', 'Nombre Comercial'],
  elevation: 1,
  elevationDirection: 'top',
};
