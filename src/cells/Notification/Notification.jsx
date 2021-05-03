import React, { useContext, useState, useEffect } from 'react';
import { ConfigContext } from '../../providers/ConfigProvider';
import { StyledNotification } from './StyledNotification';
import { Checkbox, Close } from 'react-ikonate';
import { Paragraph } from '../Paragraph';

const Notification = ({ text, type = 'success', active = false }) => {
  const { configuration } = useContext(ConfigContext);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(active);
  }, [active]);

  let color = '#34AA44';
  switch (type) {
    case 'success':
      color = '#34AA44';
      break;
    case 'error':
      color = 'red';
      break;
    case 'warning':
      color = 'yellow';
      break;
    default:
      break;
  }
  return (
    <StyledNotification
      isActive={isActive}
      backgroundColor={color}
      configuration={configuration}
    >
      <span
        style={{
          marginRight: configuration.spacing.sm,
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Checkbox stroke="white" border={2} width="18px" height="18px" />
      </span>
      <Paragraph size="sm" color="white">
        {text}
      </Paragraph>
      <div style={{ marginLeft: 'auto' }}>
        <button
          className="notification-close"
          onClick={() => {
            setIsActive(false);
          }}
        >
          <Close stroke="white" border={2} width="18px" height="18px" />
        </button>
      </div>
    </StyledNotification>
  );
};

export default Notification;
