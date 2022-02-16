import { ArrowArcRight, Eye, EyeClosed } from 'phosphor-react';
import React, { useState } from 'react';
import { Input } from '..';
import { ConfigProvider } from '../../../providers';
import { BareButton, Paragraph, Textarea } from '../../../cells';

const config: any = {
  title: 'FronteraUI/Controls/Input',
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

  const handleBlur = () => {
    console.log('blur');
  };
  const handleFocus = () => {
    console.log('focus');
  };

  return (
    <ConfigProvider>
      <div
        style={{
          padding: 5,
          marginTop: 15,
          display: 'flex',
          flexDirection: 'column',
          gap: 36,
          backgroundColor: 'rgb(244, 247, 246)',
        }}
      >
        <Input
          {...args}
          preffix={<ArrowArcRight />}
          suffix={<ArrowArcRight />}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <label>
          <Paragraph size='sm' weight={'500'}>
            With darkDecoration
          </Paragraph>
          <Input {...args} preffix={<ArrowArcRight />} darkDecoration />
        </label>
        <label>
          <Paragraph size='sm'>Black & gray</Paragraph>
          <Input {...args} borderColor='black' backgroundColor='lightGray' />
        </label>
        <label>
          <Paragraph size='sm'>Transparent & gray</Paragraph>

          <Input {...args} borderColor='transparent' backgroundColor='lightGray' />
        </label>
        <label>
          <Paragraph size='sm'>Black & transparent</Paragraph>
          <Input {...args} borderColor='black' />
        </label>
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
        <Textarea />
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
