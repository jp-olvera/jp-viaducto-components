import React from 'react';
import { WrapperTable } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Organisms/WrapperTable',
  component: WrapperTable,
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
    zebraHoverColor: {
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
  },
};

const Template = (args) => (
  <ConfigProvider>
    <p style={{ fontFamily: 'Arial' }}>
      This component work as a wrapper for any table, we just provide a style
      props
    </p>
    <p style={{ fontFamily: 'Arial' }}>
      <b>You need to create/add/instance your own table</b>
    </p>
    <WrapperTable {...args}>
      <table>
        <tbody>
          <tr>
            <th scope='col'>Montasdasdasdasdh</th>
            <th scope='col'>Savings</th>
            <th scope='col'>Savings</th>
            <th scope='col'>Savings</th>
            <th scope='col'>Savings</th>
          </tr>
          <tr>
            <td>Hola</td>
            <td>Header</td>
            <td>Cell</td>
            <td>MyCell</td>
            <td>OtherCell</td>
          </tr>
          <tr>
            <td>Hola</td>
            <td>Cell1,2</td>
            <td>Cell1,3</td>
            <td>Cell 1,4</td>
            <td>Cell 1,5</td>
          </tr>
          <tr>
            <td>Hola</td>
            <td>Cell 2,2</td>
            <td>Cell 2,3</td>
            <td>Cell 2,4</td>
            <td>Cell 2,5</td>
          </tr>
        </tbody>
      </table>
    </WrapperTable>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  borderColor: '#eaecef',
  border: 'all',
  colorSelected: '#ffd37c',
  headerColor: '#fff',
  horizontalSpacing: 'sm',
  align: 'left',
  textHeaderColor: '#5A5A5A',
  zebra: true,
  zebraHover: true,
  zebraColor: '#F6F8FA',
  zebraHoverColor: '#D1D5DA',
  verticalSpacing: 'sm',
  fontSize: 'md',
  family: 'Arial',
};
