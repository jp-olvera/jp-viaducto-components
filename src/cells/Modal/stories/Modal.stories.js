import React from 'react';
import { Modal } from '..';

import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Cells/Modal',
  component: Modal,
};

const Template = (args) => {
  return (
    <ConfigProvider>
      <Modal {...args}>
        <div style={{ height: '800px' }}>
          Aquí van los children. Si no proporcionas las funciones onReject y
          onAccept, no se mostrará la sección de controles
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: 'Aquí va el título de tu modal',
  onReject: () => {
    alert('Cancelar');
  },
  onAccept: () => {
    alert('Listo');
  },
  active: true,
};
export const NoControls = Template.bind({});

NoControls.args = {
  title: 'Aquí va el título de tu modal',
  active: true,
  onReject: null,
  onAccept: null,
  active: true,
};
