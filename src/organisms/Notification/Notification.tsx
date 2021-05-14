import React, {
  useContext, useState, useEffect, useRef,
} from 'react';
import { Close } from 'react-ikonate';
import { ConfigContext } from '../../providers/ConfigProvider';
import { StyledNotification } from './StyledNotification';
import { Paragraph } from '../../cells/Paragraph';
import { TypeIcon } from '../../cells/TypeIcon';
import { BareButton } from '../../cells/BareButton';

/**
 * Notification component with close button
 * @param {string} text Text label for the notification
 * @param {string} type Notification type (danger, success, warning)
 * @param {boolean} active Attribute for shown/hide component
 * @param {boolean} top Set to true for stick at top or false to stick in bottom
 * @param {number} elevation Elevation indicator for shadows data
 * @param {string} elevationDirection Light indicator for shadows data
 */
interface NotificationInterface {
  text: string;
  type: string;
  active: boolean;
  top: boolean;
  elevation: number;
  elevationDirection: string;
  transition?: string;
}

const Notification = ({
  text,
  type = 'success',
  active = false,
  top = true,
  elevation = 1,
  elevationDirection = '',
  ...rest
}: NotificationInterface) => {
  const { configuration } = useContext(ConfigContext);
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLElement>(null);

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
          top ? 'translateY(-100%)' : 'translateY(100%)',
        );
      }
    }
  }, [isActive]);

  let color = configuration.text.success;
  const k = type.toLowerCase();

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
      elevation={elevation}
      elevationDirection={elevationDirection}
      {...rest}
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
          <Close stroke="white" strokeWidth={2} width="18px" height="18px" />
        </BareButton>
      </div>
    </StyledNotification>
  );
};

export default Notification;
