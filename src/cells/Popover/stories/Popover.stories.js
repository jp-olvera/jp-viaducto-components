import React, { useRef, useState } from 'react';
import { ConfigProvider } from '../../../providers';
import { Popover } from '..';
import { Button } from '../../../cells';

export default {
  title: 'Andamio/Cells/Popover',
  component: Popover,
  argTypes: {
    active: {
      description: 'Indicates if the popover is visible',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
    content: {
      description: 'The content that goes in the popover',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    position: {
      description: 'The popover position',
      type: { summary: 'string' },
      table: {
        defaultValue: { summary: 'bottom' },
        type: { summary: 'string' },
      },
      options: ['top', 'bottom', 'right', 'left'],
      control: {
        type: 'select',
      },
    },
    target: {
      description: 'A ref pointing to the activator',
      table: {
        type: { summary: 'React.RefObject<HTMLElement>' },
      },
    },
    handleClose: {
      description: 'A function to close the modal',
      table: {
        type: { summary: '() => void' },
      },
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
  },
};

const Template = ({ position, elevation, elevationDirection }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const ref = useRef(null);

  const [active2, setActive2] = useState(false);
  const handleClick2 = () => {
    setActive2(!active2);
  };
  const ref2 = useRef(null);

  return (
    <ConfigProvider>
      <div
        style={{
          height: '2000px',
          width: '100%',
        }}
      >
        <div
          style={{
            height: '250px',
            width: '100%',
          }}
        >
          <Button
            ref={ref}
            type='button'
            onClick={handleClick}
            label='Click to see the magic'
            shapeColor='success'
            style={{
              position: 'fixed',
              right: '2px',
              top: '1px',
            }}
          />
          <Popover
            active={active}
            content={(
              <div style={{ width: '300px', height: '200px' }}>
                <button type='button'>hola</button>
              </div>
            )}
            target={ref}
            handleClose={handleClick}
            position={position}
            elevation={elevation}
            elevationDirection={elevationDirection}
          />
        </div>
        <div style={{ width: '500px', overflowX: 'auto' }}>
          <div style={{ width: '2000px' }}>
            <div style={{ marginLeft: '30%', display: 'inline' }}>
              <Button
                ref={ref2}
                type='button'
                onClick={handleClick2}
                label='Click to see the magic'
                shapeColor='success'
              />
              <Popover
                active={active2}
                content={(
                  <div style={{ width: '300px', height: '200px' }}>
                    <button type='button'>hola</button>
                  </div>
                )}
                target={ref2}
                handleClose={handleClick2}
                position={position}
                elevation={elevation}
                elevationDirection={elevationDirection}
              />
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  position: 'right',
};
