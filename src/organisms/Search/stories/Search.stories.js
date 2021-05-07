import React from 'react';
import { Search } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Organisms/Search',
  component: Search,
  argTypes: {
    family: {
      options: ['Manrope', 'Roboto', 'DM Sans'],
      control: { type: 'select' },
    },
    activeColor: {
      control: 'color',
    },
    elevation: {
      options: [1, 2, 3],
      control: {
        type: 'select',
      },
    },
    elevationDirection: {
      options: [
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
  },
};

const Template = (args) => {
  return (
    <ConfigProvider>
      <Search {...args} />
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Introduce el término de búsqueda',
  buttonLabel: 'Search',
  id: 'search',
  handleSearch: () => {
    alert('Search');
  },
  options: ['Razón Social', 'RFC', 'Nombre Comercial'],
  activeColor: '#ffd6ce',
  elevation: 1,
  elevationDirection: 'top',
};
