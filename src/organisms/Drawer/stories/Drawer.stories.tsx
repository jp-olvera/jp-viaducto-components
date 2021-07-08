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
    active: {
      description: 'Toaster status tha indicates if it should be shown',
      type: { name: 'boolean', required: true },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
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
    minWidth: {
      description:
        'The min-width the drawer is suppose to take, if the space available is less than min-width the drawer is gonna use the 100%',
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '22.25rem' },
      },
      control: {
        type: 'text',
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
  },
};

export default config;

const Template = (args: typeof Default) => {
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
        <div style={{ height: '80px', background: 'green' }} tabIndex={0}>
          <h3 style={{ margin: 0 }}>Hola</h3>
        </div>
        <div style={{ height: '80px', background: 'yellow' }} tabIndex={0}>
          <h3 style={{ margin: 0 }}>Aquí</h3>
        </div>
        <div style={{ height: '80px', background: 'red' }} tabIndex={0}>
          <h3 style={{ margin: 0 }}>Puedes</h3>
        </div>
        <div style={{ height: '80px', background: 'red' }} tabIndex={0}>
          <h3 style={{ margin: 0 }}>Poner</h3>
        </div>
        <div style={{ height: '80px', background: 'yellow' }} tabIndex={0}>
          <h3 style={{ margin: 0 }}>Lo</h3>
        </div>
        <div style={{ height: '80px', background: 'green' }} tabIndex={0}>
          <h3 style={{ margin: 0 }}>Que</h3>
        </div>
        <div style={{ height: '80px', background: 'yellow' }} tabIndex={0}>
          <h3 style={{ margin: 0 }}>Desees</h3>
        </div>
      </Drawer>
    </ConfigProvider>
  );
};

const Template2 = (args: typeof Expandible) => {
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
          style={{ width: '450px', height: '450px', backgroundColor: 'gray' }}
        >
          <h1 style={{ color: 'white' }}>This is 450px width</h1>
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
  minWidth: '22.25rem',
};
export const Expandible = Template2.bind({});

Expandible.args = {
  elevation: 1,
  elevationDirection: 'left',
  transition: 'ease',
  overlayColor: 'rgba(0,0,0,0.3)',
  minWidth: '22.25rem',
};
