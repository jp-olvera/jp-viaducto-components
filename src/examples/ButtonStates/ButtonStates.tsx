import React, { useState } from 'react';

// import ConfigProvider from '../../providers/ConfigProvider';
import { Button } from '../../cells';
import { Toaster, useToasts } from '../../organisms';

const ButtonStates = () => {
  const [toaster, setToaster] = useState(false);
  const [loading, setloading] = useState(false);
  const [valid, setvalid] = useState<any>();
  const { addToast } = useToasts();
  return (
    <>
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
          label='Try me'
          iconSpacing='none'
          shapeColor='info'
          isLoading={loading}
          isValid={valid}
          onClick={() => {
            setloading(true);
            setTimeout(() => {
              setToaster(true);
              setloading(false);
              setvalid(!valid);
              setTimeout(() => {
                setToaster(false);
                setvalid(null);
              }, 2500);
            }, 2000);
          }}
        />
        <Button
          label='Try me'
          iconSpacing='none'
          shapeColor='info'
          isLoading={loading}
          isValid={valid}
          onClick={() => addToast('khgggggggggggggggggggggggggggggggggggggggggggg', {
            appearance: 'info',
            autoDismiss: false,
          })}
        />
      </div>
      <Toaster
        active={toaster}
        text={valid ? 'Valid' : 'Invalid'}
        type={valid ? 'success' : 'danger'}
        title='toaster'
        top
        right
        elevation={1}
        elevationDirection='circular'
      />
    </>
  );
};

export default ButtonStates;
