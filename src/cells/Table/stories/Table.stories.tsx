import React from 'react';
import { SBConfigI } from '../../../sb';
import { WrapperTable } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'FronteraUI/Layout/WrapperTable',
  component: WrapperTable,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    background: {
      control: 'color',
    },
    headerColor: {
      control: 'color',
    },
    headerBackgroundColor: {
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
    hoverColor: {
      control: 'color',
    },
    borderColor: {
      control: 'color',
    },
    verticalSpacing: {
      options: ['none', 'nano', 'micro', 'tiny', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: {
        type: 'select',
      },
    },
    horizontalSpacing: {
      options: ['none', 'nano', 'micro', 'tiny', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
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

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <p style={{ fontFamily: 'Arial' }}>
      This component work as a wrapper for any table, we just provide the styles
    </p>
    <p style={{ fontFamily: 'Arial' }}>
      <b>You need to create/add/instance your own table</b>
    </p>
    <WrapperTable {...args}>
      <table>
        <thead>
          <tr>
            <th scope='col'>Montasdasdasdasdh</th>
            <th scope='col'>Savings</th>
            <th scope='col'>Savings</th>
            <th scope='col'>Savings</th>
            <th scope='col'>Savings</th>
          </tr>
        </thead>
        <tbody>
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
        <tfoot>
          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>
        </tfoot>
      </table>
    </WrapperTable>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  align: 'left',
  background: '#fff',
  border: 'all',
  borderColor: '#eaecef',
  colorSelected: '#FFF1A5',
  horizontalSpacing: 'sm',
  verticalSpacing: 'sm',
  hover: true,
  zebraColor: '#F6F8FA',
  hoverColor: '#D1D5DA',
  zebra: true,
  fontSize: 'md',
  family: 'Arial',
};
