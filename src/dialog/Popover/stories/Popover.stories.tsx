import React, { useRef, useState } from 'react';
import { ConfigProvider } from '../../../providers';
import { Popover } from '..';
import { Button } from '../../../';

export default {
  title: 'Ballena/Dialog/Popover',
  component: Popover,
};

const Pop = ({ position, elevation, elevationDirection, radius, zIndex }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const ref = useRef(null);
  return (
    <>
      <Button
        ref={ref}
        type='button'
        onClick={handleClick}
        label='Click to see the magic'
        shapeColor='success'
      />
      <Popover
        active={active}
        content={
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#cecece',
              maxWidth: '95vw',
              overflow: 'auto',
              border: '1px solid blue',
            }}
          >
            <div style={{ width: '750px', height: '200px', background: '#cece' }}>
              <button type='button'>hola</button>
            </div>
          </div>
        }
        target={ref}
        handleActive={handleClick}
        position={position}
        elevation={elevation}
        elevationDirection={elevationDirection}
        radius={radius}
        zIndex={zIndex}
      />
    </>
  );
};

const Template = ({ position, elevation, elevationDirection, radius, zIndex }) => {
  return (
    <ConfigProvider>
      <div
        style={{
          width: '100%',
          height: '1000px',
        }}
      >
        <div
          style={{
            display: 'flex',
          }}
        >
          <Pop
            position={position}
            elevation={elevation}
            elevationDirection={elevationDirection}
            radius={radius}
            zIndex={zIndex}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Pop
            position={position}
            elevation={elevation}
            elevationDirection={elevationDirection}
            radius={radius}
            zIndex={zIndex}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Pop
            position={position}
            elevation={elevation}
            elevationDirection={elevationDirection}
            radius={radius}
            zIndex={zIndex}
          />
        </div>
      </div>
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  position: 'bottom',
  radius: 'sm',
  elevation: 1,
  elevationDirection: 'bottom',
  zIndex: 1,
};
