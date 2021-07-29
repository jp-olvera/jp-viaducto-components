import React, { useRef, useState } from 'react';
import { ConfigProvider } from '../../../providers';
import { Popover, Button } from '../../../cells';
import { Modal, Drawer } from '../../../organisms';

const config: any = {
  title: 'Examples/Popups',
};

export default config;

const Template = (args: any) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const [modalActive, setModalActive] = useState(false);
  const handleActive = () => {
    setModalActive(!modalActive);
  };
  return (
    <ConfigProvider>
      <Button
        label='Abrir drawer'
        shapeColor='success'
        onClick={() => {
          setOpen(true);
        }}
      />
      <Button
        label='Abrir modal'
        variant='outline'
        shapeColor='success'
        onClick={handleActive}
      />
      <Drawer
        active={open}
        onClose={() => {
          setOpen(false);
        }}
        overlayColor='green'
      >
        <Button
          label='X'
          shapeColor='info'
          onClick={() => {
            setOpen((d) => !d);
          }}
          variant='outline'
        />
        hola
        <Button
          ref={ref}
          type='button'
          onClick={handleClick}
          label='Popover'
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
          position='bottom'
          elevation={1}
          elevationDirection='bottom'
        />
      </Drawer>

      <Modal
        active={modalActive}
        handleActive={handleActive}
        allowClickOutside
        overlayColor='red'
      >
        <Button
          label='X'
          variant='outline'
          shapeColor='info'
          onClick={handleActive}
        />
        <div>
          Aquí van los children. Si no proporcionas las funciones onReject y
          onAccept, no se mostrará la sección de controles
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export const Form = Template.bind({});

Form.args = {};
