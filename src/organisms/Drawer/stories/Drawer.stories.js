import React from 'react';
import { Drawer } from '..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Organisms/Drawer',
  component: Drawer,
  argTypes: {
    elevationDirection: {
      options: [
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
    elevation: {
      options: [1, 2, 3],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
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
  active: true,
  elevation: 1,
  elevationDirection: 'left',
};
