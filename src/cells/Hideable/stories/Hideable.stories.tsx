import React from 'react';
import { SBConfigI } from '../../../sb';
import { Hideable } from '..';
import { ConfigProvider } from '../../../providers';
import { Paragraph } from '../../';
const config: SBConfigI = {
  title: 'FronteraUI/Layout/Hideable',
  component: Hideable,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    visibleOn: {
      description: 'Breakpoint from which it is gonna be visible',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
      options: [null, 'xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select',
      },
    },
    after: {
      description: 'Indicates if visible after the breakpoint selected',
      type: { summary: 'Boolean', required: false },
      table: {
        defaultValue: { summary: true },
      },
    },
    children: {
      description:
        'The Element to be wrapped, this element will be invisible when the screen hits the breakpoint',
      type: { summary: 'JSX Element', required: true },
      table: {
        defaultValue: { summary: null },
      },
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Paragraph>
      Resize your window to see the content inside the box at certain breakpoint. Use the controls
      to customized the behavior
    </Paragraph>
    <div
      style={{
        border: '1px solid #cecece',
        padding: '1rem',
      }}
    >
      <Hideable {...args}>
        <div
          style={{
            border: '1px dashed black',
          }}
        >
          <Paragraph>🥵😈 (resize your window)</Paragraph>
        </div>
      </Hideable>
    </div>
    <Paragraph>
      The Hideable component uses two arguments:
      <br />
      &nbsp;&nbsp;<strong>visibleOn:</strong> indicates the reference breakpoint
      <br />
      &nbsp;&nbsp;<strong>after:</strong> indicates if the content is gonna be visible after that
      breakpoint
      <br />
      <br />
      To understand the hideable's behavior consider the next examples:
      <br />
      The component sets <strong>visibleOn</strong> to <strong>md</strong> and{' '}
      <strong>after</strong> to <strong>false</strong>. The content is gonna be visible before the
      window reaches for the <strong>md</strong> breakpoint
    </Paragraph>
    <pre>
      {`
        <Hideable visibleOn='md' after={false} >
          <p>🥵😈 content</p>
        </Hideable>
      `}
    </pre>
    <Paragraph>
      Now <strong>after</strong> is set to <strong>true</strong> (the default value). So the content
      is gonna be visible after the window reaches for the <strong>md</strong> breakpoint
    </Paragraph>
    <pre>
      {`
          <Hideable visibleOn='md' after >
            <p>🥵😈 content</p>
          </Hideable>
          `}
    </pre>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  visibleOn: 'xs',
  after: false,
};
