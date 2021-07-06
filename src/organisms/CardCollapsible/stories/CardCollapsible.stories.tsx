import React from 'react';
import { SBConfigI } from 'sb';
import { CardCollapsible } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Andamio/Organisms/CardCollapsible',
  component: CardCollapsible,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    elevation: {
      description: 'The elevation level it should take, one of 1/2/3',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      options: [1, 2, 3],
      control: {
        type: 'select',
      },
    },
    elevationDirection: {
      description: "The elevation direction, if '' direction goes everywhere",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
      options: [
        '',
        'top',
        'right',
        'bottom',
        'left',
        'topRight',
        'topLeft',
        'bottomRight',
        'bottomLeft',
      ],
      control: {
        type: 'select',
      },
    },
    collapse: {
      description: 'Attribute for collapse card',
      type: { name: 'boolean', required: true },
      table: {
        type: { summary: 'boolean' },
      },
    },
    mainContent: {
      description: 'Main content component',
      type: { summary: 'JSX Element', required: true },
      table: {
        defaultValue: { summary: null },
      },
    },
    collapseContent: {
      description: 'Collapse content component',
      type: { summary: 'JSX Element', required: false },
      table: {
        defaultValue: { summary: null },
      },
    },
    breakpoint: {
      description:
        'Use breakpoint to set the minimum width 100%, resize to verify',
      type: { name: 'string' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'md' } },
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    family: {
      description: 'Set font family',
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'inherit' },
      },
    },
    transition: {
      description: 'Linear transition to use',
      type: { name: 'string' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'ease' } },
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <p style={{ fontFamily: 'Arial' }}>
      this card collapsible is divided by two sections: main content and
      collapse content.
    </p>
    <p style={{ fontFamily: 'Arial' }}>
      when the prop <code>collapse</code> is <code>true</code> the collapse
      content will be collapsed (it is pretty clear) and only the header
      component will be visible
    </p>
    <br />
    <CardCollapsible {...args} />
  </ConfigProvider>
);

const FakeContent = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    <p style={{ textAlign: 'center' }}>
      This is a <b>collpase content</b> and could be anything
    </p>
    <button type='button'>Button 1</button>
    <br />
  </div>
);
const MainFakeContent = () => (
  <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <p style={{ textAlign: 'center' }}>
        This is a <b>main content</b> and could be anything
      </p>
      <p style={{ textAlign: 'center' }}>Any component is permitted</p>
      <p style={{ textAlign: 'center' }}>
        Put your imagination here, like this <code>{'<hr/>'}</code> bellow
      </p>
    </div>
    <hr />
  </>
);

export const Default = Template.bind({});

Default.args = {
  collapse: false,
  mainContent: MainFakeContent(),
  collapseContent: FakeContent(),
  elevation: 1,
  elevationDirection: 'top',
  transition: 'ease',
  breakpoint: 'md',
  family: 'Roboto',
};
