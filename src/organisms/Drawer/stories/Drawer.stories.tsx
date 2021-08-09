import React, { useState } from 'react';
import { SBConfigI } from '../../../sb';
import { Drawer } from '..';
import { ConfigProvider } from '../../../providers';
import { Button } from '../../../cells';

const config: SBConfigI = {
  title: 'Andamio/Organisms/Drawer',
  component: Drawer,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    elevation: {
      description: 'The elevation level it should take, one of 1/2/3',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      options: [0, 1, 2, 3],
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
        'radial',
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
    transition: {
      description: 'Linear transition to use',
      type: { name: 'string' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'ease' } },
    },
    overlayColor: {
      description: 'The color for the overlay',
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'rgba(0,0,0,0.3)' },
      },
      control: {
        type: 'text',
      },
    },
    size: {
      description: 'The size of the drawer',
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    placement: {
      description: 'From what edge of the screen should appear',
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'right' },
      },
      options: ['right', 'top', 'left', 'bottom'],
      control: {
        type: 'select',
      },
    },
  },
};

export default config;

const Template = ({
  elevation,
  elevationDirection,
  transition,
  overlayColor,
  size,
  zIndex,
  placement,
}: typeof Default) => {
  const [open, setOpen] = useState(false);
  return (
    <ConfigProvider>
      <Button
        label='Mostrar'
        shapeColor='success'
        onClick={() => {
          setOpen(true);
        }}
      />
      <Drawer
        active={open}
        onClose={() => {
          setOpen(false);
        }}
        elevation={elevation}
        elevationDirection={elevationDirection}
        transition={transition}
        overlayColor={overlayColor}
        size={size}
        zIndex={zIndex}
        placement={placement}
      >
        <button type='button'>hola</button>
        {/* <div style={{ height: '80px' }} tabIndex={0}>
          <h3 style={{ margin: 0 }}>Hola</h3>
        </div>
        <div style={{ height: '80px' }} tabIndex={0}>
          <h3 style={{ margin: 0 }}>Aquí</h3>
        </div>
        <div style={{ height: '80px' }} tabIndex={0}>
          <h3 style={{ margin: 0 }}>Puedes</h3>
        </div>
        <div style={{ height: '80px' }} tabIndex={0}>
          <h3 style={{ margin: 0 }}>Poner</h3>
        </div>
        <div style={{ height: '80px' }} tabIndex={0}>
          <h3 style={{ margin: 0 }}>Lo</h3>
        </div>
        <div style={{ height: '80px' }} tabIndex={0}>
          <h3 style={{ margin: 0 }}>Que</h3>
        </div>
        <div style={{ height: '80px' }} tabIndex={0}>
          <h3 style={{ margin: 0 }}>Desees</h3>
        </div>
        <hr /> */}
      </Drawer>
    </ConfigProvider>
  );
};

const Template2 = (args: typeof Large) => {
  const [open, setOpen] = useState(false);
  return (
    <ConfigProvider>
      <Button
        label='Mostrar'
        shapeColor='success'
        onClick={() => {
          setOpen(!open);
        }}
      />
      <Drawer
        active={open}
        onClose={() => {
          setOpen(!open);
        }}
        {...args}
      >
        <div
          style={{ width: '850px', height: '450px', backgroundColor: 'gray' }}
        >
          <h1 style={{ color: 'white' }}>This is 850px width</h1>
        </div>
      </Drawer>
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  elevation: 1,
  elevationDirection: 'left',
  transition: 'ease',
  overlayColor: 'rgba(0,0,0,0.3)',
  size: 'sm',
  zIndex: 1,
  placement: 'right',
};

export const Medium = Template.bind({});

Medium.args = {
  elevation: 1,
  elevationDirection: 'left',
  transition: 'ease',
  overlayColor: 'rgba(0,0,0,0.3)',
  size: 'md',
  zIndex: 1,
  placement: 'right',
};
export const Large = Template2.bind({});

Large.args = {
  elevation: 1,
  elevationDirection: 'left',
  transition: 'ease',
  overlayColor: 'rgba(0,0,0,0.3)',
  size: 'lg',
  zIndex: 1,
  placement: 'right',
};
