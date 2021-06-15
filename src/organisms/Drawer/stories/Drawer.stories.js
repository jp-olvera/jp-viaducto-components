import React, { useState } from 'react';
import { Drawer } from '..';
import { ConfigProvider } from '../../../providers';
import { Button } from '../../../cells';

export default {
  title: 'Andamio/Organisms/Drawer',
  component: Drawer,
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

const Template = (args) => {
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
        <div style={{ height: '80px', background: 'green' }}>
          <h3 style={{ margin: 0 }}>Hola</h3>
        </div>
        <div style={{ height: '80px', background: 'yellow' }}>
          <h3 style={{ margin: 0 }}>Aquí</h3>
        </div>
        <div style={{ height: '80px', background: 'red' }}>
          <h3 style={{ margin: 0 }}>Puedes</h3>
        </div>
        <div style={{ height: '80px', background: 'red' }}>
          <h3 style={{ margin: 0 }}>Poner</h3>
        </div>
        <div style={{ height: '80px', background: 'yellow' }}>
          <h3 style={{ margin: 0 }}>Lo</h3>
        </div>
        <div style={{ height: '80px', background: 'green' }}>
          <h3 style={{ margin: 0 }}>Que</h3>
        </div>
        <div style={{ height: '80px', background: 'yellow' }}>
          <h3 style={{ margin: 0 }}>Desees</h3>
        </div>
        <div style={{ height: '80px', background: 'red' }}>
          <h3 style={{ margin: 0 }}>Como</h3>
        </div>
        <div style={{ height: '80px', background: 'blue' }}>
          <h3 style={{ margin: 0 }}>Componente</h3>
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
};
