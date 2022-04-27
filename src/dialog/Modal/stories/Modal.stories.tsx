import React, { useState } from 'react';
import { SBConfigI } from '../../../sb';
import { Modal } from '..';
import { Button, Container, Paragraph } from '../../../cells';

import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'FronteraUI/Dialog/Modal',
  component: Modal,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    overlayColor: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'rgba(255,255,255,0.5)' },
      },
      control: 'color',
    },
    backgroundColor: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'white' },
      },
      control: 'color',
    },
    elevation: {
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
      table: {
        type: { summary: 'Function' },
        defaultValue: { summary: () => {} },
      },
    },
    active: {
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    allowClickOutside: {
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    radius: {
      table: {
        defaultValue: { summary: 'none' },
      },
      options: ['none', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    size: {
      table: {
        defaultValue: { summary: 'md' },
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
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <button>Hola</button>
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

const SimpleModals = (args: typeof Default) => {
  const [active, setActive] = useState({
    sm: false,
    md: false,
    lg: false,
    full: false,
    custom: false,
  });
  const handleActive = (key: string, value: boolean) => {
    setActive((b) => ({ ...b, [key]: value }));
  };

  return (
    <ConfigProvider>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 16 }}>
        <Button
          label='SM'
          shapeColor='info'
          onClick={() => {
            handleActive('sm', true);
          }}
        />
        <Button
          label='MD'
          shapeColor='secondary'
          onClick={() => {
            handleActive('md', true);
          }}
        />
        <Button
          label='LG'
          shapeColor='danger'
          onClick={() => {
            handleActive('lg', true);
          }}
        />
        <Button
          label='Full'
          shapeColor='success'
          onClick={() => {
            handleActive('full', true);
          }}
        />
        <Button
          label='CUSTOM: 900px'
          shapeColor='warning'
          onClick={() => {
            handleActive('custom', true);
          }}
        />
      </div>
      <Modal
        active={active.full}
        size={'full'}
        handleActive={() => {
          handleActive('full', false);
        }}
      >
        <Container expandHorizontal expandVertical vertical='xxxl' horizontal='xxxl'>
          <Button
            label='Close'
            variant='outline'
            shapeColor='danger'
            onClick={() => {
              handleActive('full', false);
            }}
          />
        </Container>
      </Modal>
      <Modal
        active={active.sm}
        size='sm'
        handleActive={() => {
          handleActive('sm', false);
        }}
      >
        <Container expandHorizontal expandVertical vertical='xxxl' horizontal='xxxl'>
          <Button
            label='Close'
            variant='outline'
            shapeColor='danger'
            onClick={() => {
              handleActive('sm', false);
            }}
          />
        </Container>
      </Modal>
      <Modal
        active={active.md}
        size='md'
        handleActive={() => {
          handleActive('md', false);
        }}
      >
        <Container expandHorizontal expandVertical vertical='xxxl' horizontal='xxxl'>
          <Button
            label='Close'
            variant='outline'
            shapeColor='danger'
            onClick={() => {
              handleActive('md', false);
            }}
          />
        </Container>
      </Modal>
      <Modal
        active={active.lg}
        size='lg'
        handleActive={() => {
          handleActive('lg', false);
        }}
      >
        <Container expandHorizontal expandVertical vertical='xxxl' horizontal='xxxl'>
          <Button
            label='Close'
            variant='outline'
            shapeColor='danger'
            onClick={() => {
              handleActive('lg', false);
            }}
          />
        </Container>
      </Modal>
      <Modal
        active={active.custom}
        size='900px'
        handleActive={() => {
          handleActive('custom', false);
        }}
        backgroundColor='#355898'
        radius='none'
        elevation={0}
      >
        <Container expandHorizontal expandVertical vertical='xxxl' horizontal='xxxl'>
          <Paragraph color='white'>
            Size: 900px, no radius (none), no elevation(0), different background(#355898)
          </Paragraph>
          <Button
            label='Close'
            shapeColor='danger'
            onClick={() => {
              handleActive('custom', false);
            }}
          />
        </Container>
      </Modal>
    </ConfigProvider>
  );
};

export const StyledModals = SimpleModals.bind({});

StyledModals.args = {
  allowClickOutside: true,
};
