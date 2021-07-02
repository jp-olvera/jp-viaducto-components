import React, { useState } from 'react';
import { Modal } from '..';
import { Button } from '../../../cells';

import { ConfigProvider } from '../../../providers';

export default {
  title: 'Andamio/Organisms/Modal',
  component: Modal,
  argTypes: {
    breakpoint: {
      description:
        'display breakpoint where the modal will stop being 100% width',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '320px' },
      },
      options: ['320px', '576px', '768px', '992px', '1440px'],
      control: {
        type: 'select',
      },
    },
    overlayColor: {
      description: 'Background color for the overlay',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'rgba(255,255,255,0.5)' },
      },
      control: 'color',
    },
    backgroundColor: {
      description: 'Background color for the modal content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'white' },
      },
      control: 'color',
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
    title: {
      description: 'Modal title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
      control: 'color',
    },
    handleActive: {
      description: 'function to call to close the modal',
      table: {
        type: { summary: 'Function' },
        defaultValue: { summary: () => {} },
      },
    },
    onReject: {
      description: 'reject function to call before the modal closes',
      table: {
        type: { summary: 'Function' },
        defaultValue: { summary: null },
      },
    },
    onAccept: {
      description: 'reject function to call before the modal closes',
      table: {
        type: { summary: 'Function' },
        defaultValue: { summary: null },
      },
    },
    active: {
      description: 'Specifies if the modal is gonna be visible at first',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    acceptDisabled: {
      description: 'Specifies if the accept button should be disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    rejectDisabled: {
      description: 'Specifies if the reject button should be disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    allowClickOutside: {
      description:
        'Specifies if the modal could be closed when clicking outside',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
  },
};
const Template = (args) => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <ConfigProvider>
      <div style={{ height: '980px' }}>
        <p>Contenido detrás del modal.</p>
        <p>
          Es neceseraio controlar el estado del modal de manera externa, por lo
          que es necesario proporcionar una variable que represente su estado
          activo e inactivo y una función que pueda modificar este estado.
        </p>
        <pre>
          <code>
            {`
            import { ConfigProvider, Modal } from '@jp-olvera/jp-viaducto-components';
            export const SomeComponent = () => {
              const [active, setActive] = useState(false);
              const handleActive = () => {
                setActive(!active);
              }
              return (
                <Modal active handleActive = {handleActive}>
                  {% Your modal content %}
                </Modal>
              )
            }
          `}
          </code>
        </pre>
        <Button
          label='Click to see the magic'
          variant='outline'
          shapeColor='success'
          onClick={handleActive}
        />
      </div>

      <Modal active={active} handleActive={handleActive} {...args}>
        <div style={{ height: '800px', background: '#CECECE' }}>
          Aquí van los children. Si no proporcionas las funciones onReject y
          onAccept, no se mostrará la sección de controles
        </div>
      </Modal>
    </ConfigProvider>
  );
};

const AnotherComponent = ({ label }) => (
  <div style={{ background: '#CECECE' }}>
    <div style={{ background: '#CECECE' }}>{label}</div>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Aquí va el título de tu modal',
  onReject: () => {},
  onAccept: () => {},
  acceptDisabled: false,
  rejectDisabled: false,
  allowClickOutside: true,
};
export const NoControls = Template.bind({});

NoControls.args = {
  title: 'Aquí va el título de tu modal',
  acceptDisabled: false,
  rejectDisabled: false,
  allowClickOutside: true,
  overlayColor: 'rgba(206,206,206, 0.5)',
};

export const WithHeadComponent = Template.bind({});

WithHeadComponent.args = {
  title: 'Aquí va el título de tu modal',
  headComponent: AnotherComponent({ label: 'This could be anything' }).props
    .children,
  acceptDisabled: false,
  rejectDisabled: false,
  allowClickOutside: true,
};
export const DisableClickOutside = Template.bind({});

DisableClickOutside.args = {
  title: 'Aquí va el título de tu modal',
  allowClickOutside: false,
  acceptDisabled: false,
  rejectDisabled: false,
};
