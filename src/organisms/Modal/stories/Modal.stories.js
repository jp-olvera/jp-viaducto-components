import React from 'react';
import { Modal } from '..';

import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Organisms/Modal',
  component: Modal,
  argTypes: {
    breakpoint: {
      options: ['320px', '576px', '768px', '992px', '1440px'],
      control: {
        type: 'select',
      },
    },
    overlayColor: {
      control: 'color',
    },
    backgroundColor: {
      control: 'color',
    },
    elevation: {
      options: [1, 2, 3],
      control: {
        type: 'select',
      },
    },
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
  },
};
const Template = (args) => (
  <ConfigProvider>
    <h1>El contenido detrás del modal se vería de esta manera</h1>
    <Modal {...args}>
      <div style={{ height: '800px', background: '#CECECE' }}>
        Aquí van los children. Si no proporcionas las funciones onReject y
        onAccept, no se mostrará la sección de controles
      </div>
    </Modal>
  </ConfigProvider>
);

const AnotherComponent = ({ label }) => (
  <div style={{ background: '#CECECE' }}>
    <div style={{ background: '#CECECE' }}>{label}</div>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Aquí va el título de tu modal',
  onReject: () => { },
  onAccept: () => { },
  active: true,
  acceptDisabled: false,
  rejectDisabled: false,
  allowClickOutside: true,
};
export const NoControls = Template.bind({});

NoControls.args = {
  title: 'Aquí va el título de tu modal',
  active: true,
  onReject: null,
  onAccept: null,
  acceptDisabled: false,
  rejectDisabled: false,
  allowClickOutside: true,
  overlayColor: 'rgba(206,206,206, 0.5)',
};

export const WithHeadComponent = Template.bind({});

WithHeadComponent.args = {
  title: 'Aquí va el título de tu modal',
  active: true,
  onReject: () => { },
  onAccept: () => { },
  headComponent: AnotherComponent({ label: 'This could be anything' }).props
    .children,
  acceptDisabled: false,
  rejectDisabled: false,
  allowClickOutside: true,
};
export const DisableClickOutside = Template.bind({});

DisableClickOutside.args = {
  title: 'Aquí va el título de tu modal',
  active: true,
  onReject: null,
  onAccept: () => { },
  allowClickOutside: false,
  acceptDisabled: false,
  rejectDisabled: false,
};
