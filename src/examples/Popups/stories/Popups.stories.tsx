import React, { useRef, useState } from 'react';
import { ConfigProvider } from '../../../providers';
import { Popover, Button } from '../../../cells';
import { Modal, Drawer } from '../../../organisms';

const config: any = {
  title: 'Examples/Popups',
};

export default config;

const Template = (args: any) => {
  const ref = useRef(null);
  const [popoverActive, setPopoverActive] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  return (
    <ConfigProvider>
      <Button
        label='Abrir drawer'
        shapeColor='success'
        onClick={() => {
          setDrawerIsOpen(true);
        }}
      />
      <Button
        label='Abrir modal'
        variant='outline'
        shapeColor='success'
        onClick={() => {
          setModalActive(!modalActive);
        }}
      />
      <Drawer
        active={drawerIsOpen}
        onClose={() => {
          setDrawerIsOpen(!drawerIsOpen);
        }}
        overlayColor='green'
      >
        <Button
          label='X'
          shapeColor='info'
          onClick={() => {
            setDrawerIsOpen((d) => !d);
          }}
          variant='outline'
        />
        <button type='button'>Do nothing</button>
        <Button
          ref={ref}
          type='button'
          onClick={() => {
            setPopoverActive(!popoverActive);
          }}
          label='Popover'
          shapeColor='success'
          style={{
            position: 'fixed',
            right: '2px',
            top: '1px',
          }}
        />
        <Popover
          active={popoverActive}
          content={(
            <div style={{ width: '300px', height: '200px' }}>
              <button
                type='button'
                onClick={() => {
                  setPopoverActive(!popoverActive);
                }}
              >
                X
              </button>
              <button type='button'>do nothing</button>
            </div>
          )}
          target={ref}
          handleClose={() => {
            setPopoverActive(!popoverActive);
          }}
          position='bottom'
          elevation={1}
          elevationDirection='bottom'
        />
      </Drawer>

      <Modal
        active={modalActive}
        handleActive={() => {
          setModalActive(!modalActive);
        }}
        allowClickOutside
        overlayColor='red'
      >
        <Button
          label='X'
          variant='outline'
          shapeColor='info'
          onClick={() => {
            setModalActive(false);
          }}
        />
        <div />
      </Modal>
    </ConfigProvider>
  );
};

export const Form = Template.bind({});

Form.args = {};
