import React from 'react';
import { Drawer } from '../';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Organisms/Drawer',
  component: Drawer,
};

const Template = (args) => {
  return (
    <ConfigProvider>
      <Drawer {...args}>
        <div
          style={{ background: 'grey', height: '80px', background: 'green' }}
        >
          <h3 style={{ margin: 0 }}>Aquí puedes poner lo que sea</h3>
        </div>
        <div
          style={{ background: 'grey', height: '80px', background: 'yellow' }}
        >
          <h3 style={{ margin: 0 }}>Aquí puedes poner lo que sea</h3>
        </div>
        <div style={{ background: 'grey', height: '80px', background: 'red' }}>
          <h3 style={{ margin: 0 }}>Aquí puedes poner lo que sea</h3>
        </div>
        <div style={{ background: 'grey', height: '80px', background: 'red' }}>
          <h3 style={{ margin: 0 }}>Aquí puedes poner lo que sea</h3>
        </div>
        <div
          style={{ background: 'grey', height: '80px', background: 'yellow' }}
        >
          <h3 style={{ margin: 0 }}>Aquí puedes poner lo que sea</h3>
        </div>
        <div
          style={{ background: 'grey', height: '80px', background: 'green' }}
        >
          <h3 style={{ margin: 0 }}>Aquí puedes poner lo que sea</h3>
        </div>
        <div
          style={{ background: 'grey', height: '80px', background: 'yellow' }}
        >
          <h3 style={{ margin: 0 }}>Aquí puedes poner lo que sea</h3>
        </div>
        <div style={{ background: 'grey', height: '80px', background: 'red' }}>
          <h3 style={{ margin: 0 }}>Aquí puedes poner lo que sea</h3>
        </div>
        <div style={{ background: 'grey', height: '80px', background: 'blue' }}>
          <h3 style={{ margin: 0 }}>Aquí puedes poner lo que sea</h3>
        </div>
      </Drawer>
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  active: true,
};
