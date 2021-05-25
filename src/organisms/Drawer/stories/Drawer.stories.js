import React from 'react';
import { Drawer } from '..';
import { ConfigProvider } from '../../../providers';

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
  },
};

const Template = (args) => (
  <ConfigProvider>
    <h1 style={{ color: 'red ' }}>
      Utiliza el control de <b>active</b> para mostrar y ocultar el drawer
    </h1>
    <p>Resto del contenido</p>
    <Drawer {...args}>
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

export const Default = Template.bind({});

Default.args = {
  active: false,
  elevation: 1,
  elevationDirection: 'left',
  transition: 'ease',
};
