import React, { useState } from 'react';

// import ConfigProvider from '../../providers/ConfigProvider';
import { Button } from '../../cells';
import { useToasts } from '../../organisms';

const ButtonStates = () => {
  const [loading] = useState(false);
  const [valid] = useState<any>();
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
          onClick={() => addToast('Toaster', {
            appearance: 'info',
            autoDismiss: false,
          })}
        />
      </div>
      <input type='date' />
      <input type='datetime-local' />
    </>
  );
};

export default ButtonStates;
