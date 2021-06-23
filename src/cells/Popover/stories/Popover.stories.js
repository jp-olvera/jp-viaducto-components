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
      type: { summary: 'boolean' },
      table: {
        defaultValue: { summary: null },
        type: { summary: 'string' },
      },
      control: {
        type: 'boolean',
      },
    },
    content: {
      description: 'Indicates if the popover is visible',
      type: { summary: 'React.ReactNode', required: true },
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
      type: { summary: 'React.RefObject<HTMLElement>', required: true },
      table: {
        type: { summary: 'React.RefObject<HTMLElement>' },
      },
    },
    handleClose: {
      description: 'A ref pointing to the activator',
      type: { summary: '() => void', required: true },
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
  },
};

const Template = ({ ...rest }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const ref = useRef(null);

  return (
    <ConfigProvider>
      <div
        style={{
          height: '1500px',
        }}
      >
        <div style={{ marginTop: '500px', marginLeft: '50%' }}>
          <Button
            ref={ref}
            type='button'
            onClick={handleClick}
            label='Click to see the magic'
            shapeColor='success'
          />
          <Popover
            active={active}
            content={(
              <div
                style={{ width: '600px', height: '400px', background: 'black' }}
              />
            )}
            target={ref}
            handleClose={handleClick}
            {...rest}
          />
        </div>
      </div>
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
