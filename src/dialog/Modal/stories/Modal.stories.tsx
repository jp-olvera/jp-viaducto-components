import React, { useState } from 'react';
import { SBConfigI } from '../../../sb';
import { Modal } from '..';
import { Button } from '../../../cells';

import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Ballena/Dialog/Modal',
  component: Modal,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
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
    handleActive: {
      description: 'function to call to close the modal',
      table: {
        type: { summary: 'Function' },
        defaultValue: { summary: () => {} },
      },
    },
    active: {
      description: 'Specifies if the modal is gonna be visible at first',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    allowClickOutside: {
      description: 'Specifies if the modal could be closed when clicking outside',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    radius: {
      description: 'Radius size',
      type: {
        summary: 'string',
        required: false,
      },
      table: {
        defaultValue: { summary: 'none' },
      },
      options: ['none', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
  },
};

export default config;

const Template = (args: typeof Default) => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <ConfigProvider>
      <div style={{ height: '980px' }}>
        <p>Contenido detrás del modal.</p>
        <p>
          Es neceseraio controlar el estado del modal de manera externa, por lo que es necesario
          proporcionar una variable que represente su estado activo e inactivo y una función que
          pueda modificar este estado.
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
        <div>
          Aquí van los children. Si no proporcionas las funciones onReject y onAccept, no se
          mostrará la sección de controles
        </div>
        <Button label='Close' variant='outline' shapeColor='success' onClick={handleActive} />
      </Modal>
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  allowClickOutside: true,
};

export const DisableClickOutside = Template.bind({});

DisableClickOutside.args = {
  allowClickOutside: false,
};
