import React, { useState, useRef } from 'react';
import { SBConfigI } from '../../../sb';
import { Drawer } from '..';
import { ConfigProvider } from '../../../providers';
import { Button } from '../../../cells';
import { Modal, Popover } from '../../../dialog';

const config: SBConfigI = {
  title: 'FronteraUI/Dialog/Drawer',
  component: Drawer,
  parameters: { controls: { sort: 'requiredFirst' } },
};

export default config;
const Pop = () => {
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
        label='Open popup'
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
              maxWidth: '100vw',
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
      />
    </>
  );
};
const CustomModal = () => {
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
        label='Open modal'
        shapeColor='success'
      />
      <Modal active={active} handleActive={handleClick}>
        <div
          style={{
            width: '100%',
            height: '100%',
            background: '#cecece',
            maxWidth: '100vw',
            overflow: 'auto',
            border: '1px solid blue',
          }}
        >
          <button type='button'>no hago nada</button>
          <Pop />
          <input type='text' />
          <input type='text' />
          <input type='text' />
          <button>Hola</button>
        </div>
      </Modal>
    </>
  );
};
const Template = ({
  elevation,
  elevationDirection,
  transition,
  overlayColor,
  size,
  zIndex,
  placement,
}: typeof Default) => {
  const [open, setOpen] = useState(false);
  return (
    <ConfigProvider>
      <Button
        label='Open Drawer'
        shapeColor='success'
        onClick={() => {
          setOpen(true);
        }}
      />
      <Drawer
        active={open}
        handleActive={() => {
          setOpen(false);
        }}
        elevation={elevation}
        elevationDirection={elevationDirection}
        transition={transition}
        overlayColor={overlayColor}
        size={size}
        zIndex={zIndex}
        placement={placement}
      >
        <button type='button'>hola</button>
        <CustomModal />
      </Drawer>
    </ConfigProvider>
  );
};

const Template2 = (args: typeof Large) => {
  const [open, setOpen] = useState(false);
  return (
    <ConfigProvider>
      <Button
        label='Mostrar'
        shapeColor='success'
        onClick={() => {
          setOpen(!open);
        }}
      />
      <Drawer
        active={open}
        handleActive={() => {
          setOpen(!open);
        }}
        {...args}
      >
        <div style={{ width: '850px', height: '450px', backgroundColor: 'gray' }}>
          <h1 style={{ color: 'white' }}>This is 850px width</h1>
        </div>
      </Drawer>
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  elevation: 1,
  elevationDirection: 'left',
  transition: 'ease',
  overlayColor: 'rgba(0,0,0,0.3)',
  size: 'sm',
  zIndex: 1,
  placement: 'right',
};

export const Medium = Template.bind({});

Medium.args = {
  elevation: 1,
  elevationDirection: 'left',
  transition: 'ease',
  overlayColor: 'rgba(0,0,0,0.3)',
  size: 'md',
  zIndex: 1,
  placement: 'right',
};
export const Large = Template2.bind({});

Large.args = {
  elevation: 1,
  elevationDirection: 'left',
  transition: 'ease',
  overlayColor: 'rgba(0,0,0,0.3)',
  size: 'lg',
  zIndex: 1,
  placement: 'right',
};
