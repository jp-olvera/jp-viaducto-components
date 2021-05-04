import React, { useContext, useState, useEffect, useRef } from 'react';
import { ConfigContext } from '../../providers/ConfigProvider';
import { StyledNotification } from './StyledNotification';
import { Checkbox, Close } from 'react-ikonate';
import { Paragraph } from '../Paragraph';

const Notification = ({
  text,
  type = 'success',
  active = false,
  top = true,
}) => {
  const { configuration } = useContext(ConfigContext);
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  useEffect(() => {
    if (ref && ref.current) {
      if (isActive) {
        ref.current.style.setProperty('transform', 'translateX(0)');
      } else {
        ref.current.style.setProperty(
          'transform',
          top ? 'translateY(-100%)' : 'translateY(100%)'
        );
      }
    }
  }, [isActive]);

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
      data-testid="notification"
      ref={ref}
      top={top}
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
          data-testid="close-button"
        >
          <Close stroke="white" border={2} width="18px" height="18px" />
        </button>
      </div>
    </StyledNotification>
  );
};

export default Notification;
