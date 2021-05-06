import React, { useContext, useState, useEffect, useRef } from 'react';
import { ConfigContext } from '../../providers/ConfigProvider';
import { StyledNotification } from './StyledNotification';
import { Close } from 'react-ikonate';
import { Paragraph } from '../../cells/Paragraph';
import { TypeIcon } from '../../cells/TypeIcon';
import { BareButton } from '../../cells/BareButton';

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

  let color = configuration.text.success;
  let k = type.toLowerCase();

  const typeColors = ['success', 'warning', 'danger', 'info'];
  if (typeColors.includes(type.toLowerCase())) {
    color = configuration.text[k];
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
        <TypeIcon
          type={type.toLowerCase()}
          stroke="white"
          border={2}
          width="18px"
          height="18px"
        />
      </span>
      <Paragraph size="sm" color="white">
        {text}
      </Paragraph>
      <div style={{ marginLeft: 'auto' }}>
        <BareButton
          onClick={() => {
            setIsActive(false);
          }}
          data-testid="close-button"
        >
          <Close stroke="white" border={2} width="18px" height="18px" />
        </BareButton>
      </div>
    </StyledNotification>
  );
};

export default Notification;
