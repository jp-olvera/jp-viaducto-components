import React from 'react';
import { ConfigProvider } from '../../../providers';
import { Tooltip } from '..';
import { Input } from '../../Input';

export default {
  title: 'Andamio/Cells/Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'right', 'left', 'bottom'],
    },
    color: { control: 'color' },
    textColor: { control: 'color' },
    family: {
      options: ['Inherit', 'Manrope', 'Roboto', 'DM Sans'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => {
  return (
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
            <Input label="Input" id="example1" size="lg" />
          </Tooltip>
        </div>
        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          <Tooltip {...args}>
            <Input label="Input" id="example2" />
          </Tooltip>
        </div>
      </div>
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  label:
    'Pero nunca ese grito de guerra. Entre hermanos repita el cañón. Solo cante, ya libre, la Tierra. Su himno santo de paz y de unión.',
  active: true,
  position: 'bottom',
};
