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
  },
};
const Template = (args) => {
  return (
    <ConfigProvider>
      <h1>El contenido detrás del modal se vería de esta manera</h1>
      <Modal {...args}>
        <div style={{ height: '100px' }}>
          Aquí van los children. Si no proporcionas las funciones onReject y
          onAccept, no se mostrará la sección de controles
        </div>
      </Modal>
    </ConfigProvider>
  );
};

const AnotherComponent = ({ label }) => <h1>{label}</h1>;

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
};

export const WithHeadComponent = Template.bind({});

WithHeadComponent.args = {
  title: 'Aquí va el título de tu modal',
  active: true,
  onReject: () => {
    alerrt('Reject');
  },
  onAccept: () => {
    alerrt('Acept');
  },
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
  onAccept: () => {
    alert('Hello!');
  },
  allowClickOutside: false,
  acceptDisabled: false,
  rejectDisabled: false,
};