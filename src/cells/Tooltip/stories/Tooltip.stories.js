import React from 'react';
import { ConfigProvider } from '../../../providers';
import { Tooltip } from '..';
import { Input } from '../../Input';

export default {
  title: 'Andamio/Cells/Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      description:
        'Set the position of the tooltip, top, left, right or bottom',
      table: {
        defaultValue: { summary: 'top' },
        type: { summary: 'string' },
      },
      control: 'select',
      options: ['top', 'right', 'left', 'bottom'],
    },
    color: {
      description: 'Color of the background',
      table: {
        defaultValue: { summary: '#C4C4C4' },
        type: { summary: 'string' },
      },
      control: 'color',
    },
    textColor: {
      description: 'Text color',
      table: {
        defaultValue: { summary: '#C4C4C4' },
        type: { summary: 'string' },
      },
      control: 'color',
    },
    family: {
      description: 'Font family',
      table: {
        defaultValue: { summary: 'Roboto' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    label: {
      description: 'Text in the tooltip',
      table: {
        defaultValue: { summary: 'Tooltip' },
        type: { summary: 'string' },
      },
    },
    active: {
      description: 'Show/hide the tooltip',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
    transition: {
      description: 'Linear transition to use',
      type: { name: 'string' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'ease' } },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50vh',
        width: '50%',
      }}
    >
      <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
        <Tooltip {...args}>
          <Input label='Input' id='example1' size='lg' />
        </Tooltip>
      </div>
      <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
        <Tooltip {...args}>
          <Input label='Input' id='example2' />
        </Tooltip>
      </div>
    </div>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  label:
    'Choose the type of configurationAdvanced configuration: finetune usages of data and bandwithSmart configuration: Define a budget for unlimited data and calculated bandwith',
  active: true,
  position: 'right',
  transition: 'ease',
};
