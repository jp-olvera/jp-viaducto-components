import React, { useState } from 'react';

import ConfigProvider from '../../providers/ConfigProvider';
import { Button, Toaster } from '../..';

const ButtonStates = () => {
  const [toaster, setToaster] = useState(false);
  const [loading, setloading] = useState(false);
  const [valid, setvalid] = useState(false);
  return (
    <ConfigProvider>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          marginTop: '3rem',
        }}
      >
        <Button
          label='valid button'
          iconSpacing='none'
          variant='info'
          isLoading={loading}
          isValid={valid}
          onClick={() => {
            setloading(true);
            setTimeout(() => {
              setToaster(true);
              setloading(false);
              setvalid(false);
              setTimeout(() => {
                setToaster(false);
              }, 2500);
            }, 2000);
          }}
        />
        <Button
          label='invalid button'
          iconSpacing='none'
          variant='info'
          isLoading={loading}
          isInvalid={valid}
          onClick={() => {
            setloading(true);
            setTimeout(() => {
              setToaster(true);
              setloading(false);
              setvalid(true);
              setTimeout(() => {
                setToaster(false);
              }, 2500);
            }, 2000);
          }}
        />
      </div>
      <Toaster
        active={toaster}
        text={!valid ? 'Valid' : 'Invalid'}
        type={!valid ? 'success' : 'danger'}
        title='toaster'
        top
        right
        elevation={1}
        elevationDirection='circular'
      />
    </ConfigProvider>
  );
};

export default ButtonStates;
