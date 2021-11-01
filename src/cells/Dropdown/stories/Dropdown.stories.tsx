import React from 'react';
import { Dropdown } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Ballena/Navigation/Dropdown',
  component: Dropdown,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    family: {
      description: 'Set the font family',
      type: { summary: 'String', required: false },
      control: 'text',
    },
    hoverColor: {
      description: 'Set a color when an content data have hover prop',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: '#ffd6ce' },
      },
      control: 'color',
    },
    size: {
      description: 'Set size (height) of the component',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      control: 'select',
      options: ['default', 'small', 'large'],
    },
    border: {
      description: 'Set the border(s) of the component',
      type: { summary: 'Object(top, bottom, left, right)', required: false },
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    defaultText: {
      description: 'Set the defalut text (acting like placeholder)',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    content: {
      description: 'Set the content when the dropdown is open',
      type: { summary: 'JSX Element[]', required: true },
      table: {
        defaultValue: { summary: null },
      },
    },
    height: {
      description: 'Overrides the height of the component',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    onClick: {
      description: 'Triggers an action when the option is selected',
      type: { summary: 'Function', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <div style={{ position: 'absolute', right: 0, top: 0 }}>
      <Dropdown {...args} />
    </div>
    <div
      style={{
        height: '2000px',
        width: '100%',
      }}
    >
      <div style={{ width: '500px', overflowX: 'auto', marginTop: '500px' }}>
        <div style={{ width: '2000px' }}>
          <div style={{ marginLeft: '30%', display: 'inline' }}>
            <Dropdown {...args} />
          </div>
        </div>
      </div>
    </div>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  border: {
    top: '1px solid black',
    right: '1px solid black',
    bottom: '1px solid black',
    left: '1px solid black',
  },
  defaultText: 'Click me',
  hoverColor: '#ffd6ce',
  height: null,
  content: [
    <p>Any element could be here</p>,
    <img
      src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
      alt='img'
      width='118'
    />,
    <button type='button'>Log out</button>,
  ],
  onClick: () => {
    // eslint-disable-next-line no-alert
    alert('item selected');
  },
};
