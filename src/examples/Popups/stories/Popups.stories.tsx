import React, { useRef, useState } from 'react';
import { ConfigProvider } from '../../../providers';
import {
  Button,
  Container,
  DatePicker,
  onDateSelectedProps,
  onTimeSelectedProps,
  Spacer,
  TimePicker,
  Title,
} from '../../../cells';
import { Popover, Modal, Drawer } from '../../../dialog';
import { Horse } from 'phosphor-react';

const config: any = {
  title: 'Examples/Popups',
};

export default config;

const Template = () => {
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

Form.parameters = {
  controls: { hideNoControlsWarning: true },
  options: {
    showPanel: false,
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
};

const DateTimePicker = () => {
  const ref24 = useRef(null);
  const ref12 = useRef(null);
  const refD = useRef(null);
  const refDR = useRef(null);
  const [popoverActive24, setPopoverActive24] = useState(false);
  const [popoverActive12, setPopoverActive12] = useState(false);
  const [popoverActiveD, setPopoverActiveD] = useState(false);
  const [popoverActiveDR, setPopoverActiveDR] = useState(false);
  const [data24, setData24] = useState<onTimeSelectedProps>({});
  const [data12, setData12] = useState<onTimeSelectedProps>({});
  const [dataD, setDataD] = useState<onDateSelectedProps>({
    date: new Date(),
    dateString: '',
  });
  const [dataDR, setDataDR] = useState<onDateSelectedProps>({
    date: [],
    dateString: [],
  });
  return (
    <>
      <Container expandHorizontal>
        <Title level='3'>Time picker example</Title>
      </Container>
      <Spacer size='md' />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          gap: '3rem',
        }}
      >
        <div>
          <Container>
            <label htmlFor='24h' style={{ fontFamily: 'Arial' }}>
              Time Picker 24h{' '}
              <input
                ref={ref24}
                id='24h'
                type='text'
                readOnly
                defaultValue={data24.fullTime || ''}
                onFocus={() => setPopoverActive24(true)}
                placeholder='click me'
              />
            </label>
          </Container>
          <Popover
            active={popoverActive24}
            content={(
              <div style={{ width: 200, height: 200 }}>
                <TimePicker onTimeSelected={(e) => setData24(e)} />
              </div>
            )}
            target={ref24}
            handleClose={() => {
              setPopoverActive24(!popoverActive24);
            }}
          />
        </div>
        <div>
          <Container>
            <label htmlFor='12h' style={{ fontFamily: 'Arial' }}>
              Time Picker 12h{' '}
              <input
                ref={ref12}
                id='12h'
                type='text'
                readOnly
                defaultValue={data12.fullTime || ''}
                onFocus={() => setPopoverActive12(true)}
                placeholder='click me'
              />
            </label>
          </Container>
          <Popover
            active={popoverActive12}
            content={(
              <div style={{ width: 200, height: 200 }}>
                <TimePicker
                  onTimeSelected={(e) => setData12(e)}
                  timeFormat='12h'
                />
              </div>
            )}
            target={ref12}
            handleClose={() => {
              setPopoverActive12(!popoverActive12);
            }}
          />
        </div>
      </div>
      <Spacer size='xxl' />
      <Container expandHorizontal>
        <Title level='3'>Date picker example</Title>
      </Container>
      <Spacer size='md' />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          gap: '3rem',
        }}
      >
        <div>
          <Container>
            <label htmlFor='D' style={{ fontFamily: 'Arial' }}>
              Date Picker no range (only one date){' '}
              <input
                ref={refD}
                id='D'
                type='text'
                readOnly
                defaultValue={dataD.dateString || ''}
                onFocus={() => setPopoverActiveD(true)}
                placeholder='click me'
              />
            </label>
          </Container>
          <Popover
            active={popoverActiveD}
            content={(
              <div style={{ height: 200 }}>
                <DatePicker range={false} onDateSelected={(e) => setDataD(e)} />
              </div>
            )}
            target={refD}
            handleClose={() => {
              setPopoverActiveD(!popoverActiveD);
            }}
          />
        </div>
        <div>
          <Container>
            <label htmlFor='DR' style={{ fontFamily: 'Arial' }}>
              Date Picker Range (two dates){' '}
              <input
                ref={refDR}
                id='DR'
                type='text'
                readOnly
                defaultValue={
                  Array.isArray(dataDR.dateString)
                    ? dataDR.dateString.join(' ➜ ')
                    : ''
                }
                onFocus={() => setPopoverActiveDR(true)}
                placeholder='click me'
              />
            </label>
          </Container>
          <Popover
            active={popoverActiveDR}
            content={(
              <div style={{ height: 200 }}>
                <DatePicker range onDateSelected={(e) => setDataDR(e)} />
              </div>
            )}
            target={refDR}
            handleClose={() => {
              setPopoverActiveDR(!popoverActiveDR);
            }}
          />
        </div>
      </div>
    </>
  );
};

export const DateTimePickerExample = DateTimePicker.bind({});
DateTimePickerExample.parameters = {
  controls: { hideNoControlsWarning: true },
  options: {
    showPanel: false,
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
};
