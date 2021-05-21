import React from 'react';
import { Table } from '..';
import { ConfigProvider } from '../../../providers';
import { dummyColumns, dummyData } from './StoryData';

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
      options: [0, 1, 2, 3],
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
    fontSize: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    buttonVariantColor: {
      options: ['primary', 'secondary', 'info', 'success', 'danger', 'warning'],
      control: 'select',
    },
    selectSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    selectBackground: {control: 'color'},
    selectColor: { control: 'color' },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Table {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  borderColor: '#eaecef',
  border: 'all',
  colorSelected: '#ffd37c',
  columns: dummyColumns,
  data: dummyData,
  headerColor: '#fff',
  headerFixed: true,
  horizontalSpacing: 'sm',
  align: 'left',
  headerElevation: 1,
  headerPadding: '.9rem',
  minHeight: '4.8rem',
  textHeaderColor: '#5A5A5A',
  zebra: true,
  zebraHover: true,
  zebraColor: '#F6F8FA',
  zebreHoverColor: '#D1D5DA',
  verticalSpacing: 'sm',
  fontSize: 'md',
  family: 'Roboto',
  buttonVariantColor: 'secondary',
  selectBorder: {
    top: '1px solid black',
    right: '1px solid black',
    bottom: '1px solid black',
    left: '1px solid black',
  },
  selectSize: 'md',
};
