/* eslint-disable no-alert */
import React from 'react';
import { SBConfigI } from '../../../sb';
import { ConfigProvider } from '../../../providers';
import { Notification } from '..';
import { Container, Paragraph } from '../../../cells';

const config: SBConfigI = {
  title: 'Ballena/Organs/Notification',
  component: Notification,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    title: {
      description: "Notification's title",
      type: { summary: 'string', required: true },
      table: {
        defaultValue: { summary: null },
      },
      control: 'text',
    },
    avatar: {
      description: 'Avatar cell props',
      type: { summary: 'Avatar Props', required: true },
      table: {
        defaultValue: { summary: null },
      },
    },
    time: {
      description:
        "Notification date (MM/DD/YYYY HH:MM) always return absolute value, the Date object needs to be minor/equal as today's date. By default, the Time value is Today",
      type: { summary: 'Date', required: false },
      table: {
        defaultValue: { summary: new Date() },
      },
      control: 'date',
    },
    description: {
      description:
        'Some component to add under the notification title, could be a text, JSX component or null',
      type: { summary: 'any', required: false },
      table: {
        defaultValue: { summary: null },
      },
      control: null,
    },
    spacing: {
      description: 'Spacing between Avatar and text',
      type: { summary: 'string', required: false },
      table: {
        defaultValue: { summary: 'xs' },
      },
      control: 'select',
    },
    onClick: {
      description: 'Triggers and action on click',
      type: { summary: 'Function', required: false },
      table: {
        defaultValue: { summary: null },
      },
      control: null,
    },
  },
};
const Notes = () => (
  <ul>
    <li>
      <Paragraph>
        If the <code style={{ color: '#0050B3' }}>Date</code> is greater than 10
        days, then, the value will display the exact day provided
      </Paragraph>
    </li>
    <li>
      <Paragraph>
        <code style={{ color: '#0050B3' }}>Date</code> object needs the
        following format{' '}
        <code style={{ color: '#0050B3' }}>(MM/DD/YYYY HH:MM)</code> (24hrs) and
        always return absolute value. he
        <code style={{ color: '#0050B3' }}>Date</code> object needs to be
        minor/equal as today&apos;s date. By default, the Time value is{' '}
        <code style={{ color: '#0050B3' }}>Today</code>
      </Paragraph>
    </li>
    <li>
      <Paragraph>
        If the <code style={{ color: '#0050B3' }}>Date</code> object has:{' '}
        <code style={{ color: '#0050B3' }}>days = 1 </code> result will be{' '}
        <code style={{ color: '#0050B3' }}>&apos;Yesteday&apos;</code>
      </Paragraph>
    </li>
    <li>
      <Paragraph>
        If the <code style={{ color: '#0050B3' }}>Date</code> object has:{' '}
        <code style={{ color: '#0050B3' }}>minutes {'<'} 0 </code> result will
        be <code style={{ color: '#0050B3' }}>&apos;Now&apos;</code>
      </Paragraph>
    </li>
    <li>
      <Paragraph>
        Any other match will receive{' '}
        <code style={{ color: '#0050B3' }}>&apos;days&apos;</code>,{' '}
        <code style={{ color: '#0050B3' }}>&apos;hours&apos;</code> or{' '}
        <code style={{ color: '#0050B3' }}>&apos;minute(s)&apos;</code>
      </Paragraph>
    </li>
  </ul>
);
export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Notes />
    <Container vertical='md'>
      <Notification
        {...args}
        description={(
          <Paragraph color='gray' size='sm'>
            Louis commented in your latest post.
          </Paragraph>
        )}
      />
    </Container>
    <Container vertical='md' horizontal='xxxl'>
      <Notification
        {...args}
        description={(
          <Paragraph color='gray' size='sm'>
            With padding
          </Paragraph>
        )}
      />
    </Container>
    <Container vertical='md' style={{ width: 350 }}>
      <Notification
        {...args}
        description={(
          <Paragraph color='gray' size='sm'>
            With defined width
          </Paragraph>
        )}
      />
    </Container>
    <Container vertical='md'>
      <Notification {...args} />
    </Container>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  title: 'New comment',
  avatar: {
    alt: 'notification-user',
    src: 'https://i.pravatar.cc/100',
  },
  spacing: 'xs',
  time: new Date('10/10/2011'),
  onClick: () => alert('Element clicked'),
};
