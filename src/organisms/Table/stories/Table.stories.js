import React from 'react';
import { Table } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Organisms/Table',
  component: Table,
  argTypes: {
    background: {
      control: 'color',
    },
    headerColor: {
      control: 'color',
    },
    textHeaderColor: {
      control: 'color',
    },
    tableElevationDirection: {
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
    tableElevation: {
      options: [1, 2, 3],
      control: {
        type: 'select',
      },
    },
    headerElevationDirection: {
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
    headerElevation: {
      options: [1, 2, 3],
      control: {
        type: 'select',
      },
    },
    border: {
      options: ['all', 'horizontal', 'vertical', 'none'],
      control: {
        type: 'select',
      },
    },
    align: {
      options: ['left', 'right', 'center'],
      control: {
        type: 'select',
      },
    },
    zebraColor: {
      control: 'color',
    },
    colorSelected: {
      control: 'color',
    },
    zebreHoverColor: {
      control: 'color',
    },
    borderColor: {
      control: 'color',
    },
    verticalSpacing: {
      options: [
        'none',
        'nano',
        'micro',
        'tiny',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
      ],
      control: {
        type: 'select',
      },
    },
    horizontalSpacing: {
      options: [
        'none',
        'nano',
        'micro',
        'tiny',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
      ],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Table {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  background: '#fff',
  headerColor: '#fff',
  colorSelected: '#ffd37c',
  textHeaderColor: '#000',
  borderColor: '#000',
  border: 'all',
  headerFixed: true,
  zebra: true,
  zebraHover: true,
  zebraColor: '#ccc',
  zebreHoverColor: '#885796',
  verticalSpacing: 'sm',
  horizontalSpacing: 'sm',
  align: 'left',
  tableElevation: 1,
  tableElevationDirection: 'bottom',
  headerElevation: 1,
};
