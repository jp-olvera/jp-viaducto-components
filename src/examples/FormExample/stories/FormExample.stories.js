import React from 'react';
import FormExample from '../FormExample';
import { ConfigProvider } from '../../../providers/';
import {
  Button,
  Checkbox,
  Dropdown,
  Input,
  Paragraph,
  Switch,
  Title,
} from '../../../cells';
export default {
  title: 'Andamio/Examples/Form',
  component: FormExample,
  argTypes: {
    verticalAlign: {
      options: ['baseline', 'top', 'bottom', 'middle'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => {
  return (
    <ConfigProvider>
      <FormExample />
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

const Template2 = (args) => {
  return (
    <ConfigProvider>
      <div style={{ display: 'inline-block', padding: '1rem' }}>
        <Paragraph {...args} style={{ display: 'inline' }}>
          Hola
        </Paragraph>
      </div>
      <div style={{ display: 'inline-block' }}>
        <Title {...args} style={{ display: 'inline' }}>
          Hola
        </Title>
      </div>
    </ConfigProvider>
  );
};

export const VerticalAlign = Template2.bind({});

VerticalAlign.args = {
  verticalAlign: 'baseline',
};
