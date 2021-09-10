/* eslint-disable no-console */
import React from 'react';
import { SBConfigI } from '../../../sb';
import { ButtonDatalist } from '..';

import { ConfigProvider } from '../../../providers';
import { Paragraph, Title } from '../../../cells';
import { AvatarWithText } from '../../../tissue';

const config: SBConfigI = {
  title: 'Ballena/App/ButtonDatalist',
  component: ButtonDatalist,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    options: {
      description: 'Set the options for the datalist',
      table: {
        type: { summary: '{ accessor: string; data: any }[]', required: true },
      },
      control: null,
    },
    buttonLabel: {
      description: ' Set the button label',
      table: {
        type: { summary: 'string', required: false },
        defaultValue: 'Save',
      },
      control: 'text',
    },
    titleComponent: {
      description: 'Set the title fot the component',
      table: {
        type: { summary: 'string', required: false },
        defaultValue: 'Title',
      },
      control: 'text',
    },
    family: {
      description: ' Set font family',
      table: {
        type: { summary: 'string', required: false },
      },
    },
    onClick: {
      description: 'Triggers and action',
      table: {
        type: { summary: 'Function', required: false },
        defaultValue: null,
      },
    },
    selectedOptionsList: {
      description: 'Use in case of pre-selected options',
      table: {
        type: { summary: '{ accessor: string; data: any }[]', required: false },
        defaultValue: null,
      },
      control: null,
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <ButtonDatalist {...args} />
    <br />
    <br />
    <Paragraph family='Arial'>
      <code>data</code> key in <code>option</code> argument could be:
    </Paragraph>
    <pre>
      <code style={{ color: '#0050B3' }}>
        {`
            const A = () => (
              <Paragraph weight='600'>
                This option has Safari accessor
              </Paragraph>
            );
          `}
      </code>
    </pre>
    <Paragraph family='Arial'>
      And the <code>option</code> argument will look like this:
    </Paragraph>
    <pre>
      <code style={{ color: '#0050B3' }}>
        {`
            options:[
              { accessor: 'Safari', data: A()}, // this is the component
            ],
          `}
      </code>
    </pre>
  </ConfigProvider>
);

export const Default = Template.bind({});
const A = () => (
  <Paragraph weight='600'>
    This option (<code>Paragraph weight=&#39;600&#39;</code>) has <code>Safari</code> accessor
  </Paragraph>
);
Default.args = {
  options: [
    { accessor: 'Safari', data: A() },
    {
      accessor: 'Chrome',
      data: (
        <Title level='2'>
          This is the Title component level 2 rendered for <code>Chrome</code>
        </Title>
      ),
    },
    {
      accessor: 'Edge',
      data: (
        <AvatarWithText
          avatar={{
            src: 'https://picsum.photos/1000',
            alt: 'example',
            width: '50',
            height: '50',
          }}
        >
          <Paragraph>
            Could be an avatar for <code>Explorer</code>
          </Paragraph>
        </AvatarWithText>
      ),
    },
    {
      accessor: 'Opera',
      data: (
        <Paragraph>
          <code>Paragraph</code> component for <code>Opera</code> accessor
        </Paragraph>
      ),
    },
  ],
  buttonLabel: 'Ahoy!',
  titleComponent: 'ButtonDatalist component title',
  family: 'Arial',
  onClick: () => {},
  selectedOptionsList: [
    { accessor: 'Safari', data: A() },
    {
      accessor: 'Chrome',
      data: (
        <Title level='D2'>
          This is the Title component level 2 rendered for <code>Chrome</code>
        </Title>
      ),
    },
  ],
};
