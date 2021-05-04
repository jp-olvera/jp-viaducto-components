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
};
