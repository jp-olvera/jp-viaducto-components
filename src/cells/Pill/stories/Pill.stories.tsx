import React from 'react';
import { SBConfigI } from '../../../sb';
import { Pill } from '..';
import { ConfigProvider } from '../../../providers';
import Icon from './iconLead.svg';

const config: SBConfigI = {
  title: 'Ballena/Cells/Info/Pill',
  component: Pill,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    radius: {
      description: 'Set border radius',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'none' },
      },
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    background: {
      description: 'Set background color for the pill',
      type: { summary: 'String', required: true },
      table: {
        defaultValue: { summary: '#C4C4C4' },
      },
      control: { type: 'color' },
    },
    circleBorder: {
      description: 'Set circular border',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: true },
      },
    },
    color: {
      description: 'Set font color ',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: '#000' },
      },
      control: { type: 'color' },
    },
    borderColor: {
      description: 'Set border color ',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
      control: { type: 'color' },
    },
    family: {
      description: 'Set the font family',
      type: { summary: 'String', required: false },
      control: 'text',
    },
    handleAction: {
      description:
        'Defines an action to take while close (X) button is pressed',
      type: { summary: 'Function', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    iconLead: {
      description: 'Set the icon defined before the label (if it is defined)',
      type: { summary: 'JSX Element/String', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    label: {
      description:
        'Set the the label inside the pill as the principal children component',
      type: { summary: 'String', required: true },
      table: {
        defaultValue: { summary: null },
      },
    },
    size: {
      description: 'Set the font size of the pill',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'md' },
      },
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        width: '500px',
      }}
    >
      <Pill {...args} />
      <Pill label='Just label' />
      <Pill label='Text in the pill' size='xxs' />
      <Pill label='Text in the pill' size='xs' />
      <Pill label='Text in the pill' size='sm' />
      <Pill label='Text in the pill' size='md' />
      <Pill label='Math' size='lg' />
      <Pill label='Text in the pill' borderColor='#8b8b8b' />
      <Pill
        label='Text in the pill'
        borderColor='#8b8b8b'
        background='#eef2ffeb'
      />
      <Pill
        label='Text in the pill'
        borderColor='#8b8b8b'
        background='#eef2ffeb'
        color='#8b8b8b'
      />
      <Pill radius='lg' label='Text in the pill' borderColor='#4c72ec' />
      <Pill
        radius='md'
        label='JSX'
        borderColor='#4c72ec'
        background='#4c71ec83'
      />
      <Pill radius='none' label='React' borderColor='#4c72ec' />
      <Pill
        radius='none'
        label='React'
        background='#f1f2f7'
        handleAction={() => {}}
      />
      <Pill
        radius='none'
        label='React'
        background='#f1f2f7'
        borderColor='#4c72ec'
        color='#4c72ec'
        handleAction={() => {}}
      />
      <Pill radius='sm' label='Text in the pill' borderColor='#4c72ec' />
      <Pill
        handleAction={() => {}}
        radius='lg'
        label='Tag'
        borderColor='#9f12bb'
        background='#f0b0ddcc'
      />
      <Pill
        handleAction={() => {}}
        radius='md'
        label='Heroku'
        borderColor='#9f12bb'
        background='#f0b0ddcc'
      />
      <Pill
        handleAction={() => {}}
        radius='none'
        label='Text in the pill'
        background='#9f12bb'
        color='white'
      />
      <Pill
        handleAction={() => {}}
        radius='sm'
        label='Text in the pill'
        borderColor='#9f12bb'
        color='#9f12bb'
        background='#f0b0ddcc'
      />
      <Pill
        handleAction={() => {}}
        radius='sm'
        label='Text in the pill'
        borderColor='#9f12bb'
        background='#f0b0ddcc'
      />
      <Pill
        handleAction={() => {}}
        label='Text in the pill'
        background='#C4C4C4'
        radius='none'
      />
      <Pill
        handleAction={() => {}}
        label='Text in the pill'
        background='#C4C4C4'
        radius='none'
        size='lg'
      />
      <Pill
        handleAction={() => {}}
        label='Text in the pill'
        background='#C4C4C4'
        radius='none'
        size='sm'
      />
      <Pill
        handleAction={() => {}}
        label='Text in the pill'
        background='#C4C4C4'
        radius='none'
        size='xs'
      />
    </div>
  </ConfigProvider>
);

const IconLead = () => <img src={Icon} alt='icon' height='16px' width='16px' />;

export const Default = Template.bind({});

Default.args = {
  label: 'Pill',
  background: '#C4C4C4',
  color: '#000',
  size: 'md',
  iconLead: <IconLead />,
  handleAction: () => {},
  circleBorder: true,
  radius: 'none',
};
