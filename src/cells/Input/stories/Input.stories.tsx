import { ArrowArcRight, Eye, EyeClosed } from 'phosphor-react';
import React, { useState } from 'react';
import { Input } from '..';
import { ConfigProvider } from '../../../providers';
import { BareButton } from '../../../cells';

const config: any = {
  title: 'Ballena/Controls/Input',
  component: Input,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    isValid: {
      control: 'select',
      options: [true, false, null],
    },
    backgroundColor: {
      control: 'color',
    },
    color: {
      control: 'color',
    },
  },
};

export default config;

const Template = ({ ...args }: any) => {
  const [show, setShow] = useState(false);
  return (
    <ConfigProvider>
      <div style={{ marginTop: 15, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <Input {...args} preffix={<ArrowArcRight />} />
        <Input {...args} preffix={<ArrowArcRight />} label='With darkDecoration' darkDecoration />
        <Input {...args} label='Black & gray' borderColor='black' backgroundColor='lightGray' />
        <Input
          {...args}
          label='Transparent & gray'
          borderColor='transparent'
          backgroundColor='lightGray'
        />
        <Input {...args} label='Black & transparent' borderColor='black' />
        <Input
          {...args}
          placeholder='Type your secret password'
          type={show ? 'text' : 'password'}
          suffix={
            <button
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? <Eye /> : <EyeClosed />}
            </button>
          }
        />
      </div>
    </ConfigProvider>
  );
};

export const Text = Template.bind({});

Text.args = {
  border: 'default',
  borderColor: '#d9d9d9',
  family: '',
  inputSize: 'default',
  isValid: null,
  id: '1',
  label: 'Default',
  darkDecoration: false,
};
