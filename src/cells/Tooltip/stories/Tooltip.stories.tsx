import React from 'react';
import { SBConfigI } from '../../../sb';
import { ConfigProvider } from '../../../providers';
import { Tooltip } from '..';
import { Button } from '../../Button';

const config: SBConfigI = {
  title: 'Ballena/Cells/Info/Tooltip',
  component: Tooltip,
  parameters: { controls: { sort: 'requiredFirst' } },
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
    backgroundColor: {
      description: 'Color of the background',
      table: {
        defaultValue: { summary: null },
        type: { summary: 'string' },
      },
      control: 'color',
    },
    color: {
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
  },
};

export default config;

const Template = ({active, ...rest}: any) => (
  <ConfigProvider>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        gap: '10px',
      }}
    >
      <Tooltip {...rest}>
        <Button shapeColor='success' label='Start play' />
      </Tooltip>
      <Tooltip label='prompt text' position='left'>
        <Button shapeColor='info' variant='outline' label='left' />
      </Tooltip>
      <Tooltip label='prompt text' position='right'>
        <Button shapeColor='info' variant='outline' label='right' />
      </Tooltip>
      <Tooltip label='prompt text' position='top'>
        <Button shapeColor='info' variant='outline' label='top' />
      </Tooltip>
      <Tooltip label='prompt text' position='bottom'>
        <Button shapeColor='info' variant='outline' label='bottom' />
      </Tooltip>
      <Tooltip label='prompt text' position='right' backgroundColor='magenta'>
        <Button shapeColor='info' variant='outline' label='magenta' />
      </Tooltip>
      <Tooltip label='prompt text' position='right' backgroundColor='cyan'>
        <Button shapeColor='info' variant='outline' label='cyan' />
      </Tooltip>
      <Tooltip label='prompt text' position='right' backgroundColor='orange'>
        <Button shapeColor='info' variant='outline' label='orange' />
      </Tooltip>
      <Tooltip label='prompt text' position='right' backgroundColor='purple'>
        <Button shapeColor='info' variant='outline' label='purple' />
      </Tooltip>
      <Tooltip label='prompt text' position='right' backgroundColor='lime'>
        <Button shapeColor='info' variant='outline' label='lime' />
      </Tooltip>
    </div>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  label:
    'Prompt text',
  position: 'right',
  backgroundColor: 'black',
  color: 'white',
};
