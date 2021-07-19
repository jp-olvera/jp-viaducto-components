import React, {
  useContext, useState, useEffect, useRef,
} from 'react';
import { ConfigContext } from '../../providers/ConfigProvider';
import { StyledNotification } from './StyledNotification';
import { Paragraph } from '../../cells/Paragraph';
import { BareButton } from '../../cells/BareButton';

/** Notification component with close button */
interface NotificationInterface {
  /** Text label for the notification */
  text: string;
  /** Icon Helper */
  icon?: any;
  /** Attribute for shown/hide component */
  active: boolean;
  /** Set to true for stick at top or false to stick in bottom */
  top?: boolean;
  /** Elevation indicator for shadows data */
  elevation?: number;
  /** Light indicator for shadows data */
  elevationDirection?: string;
  /** Overrides transitionTimingFunction */
  transition?: string;
}

/**
 * Notification component with close button
 * @param {string} text Text label for the notification
 * @param {any} icon Icon Helper
 * @param {boolean} active Attribute for shown/hide component
 * @param {boolean} top Set to true for stick at top or false to stick in bottom
 * @param {number} elevation Elevation indicator for shadows data
 * @param {string} elevationDirection Light indicator for shadows data
 * @param {string} transition Overrides transitionTimingFunction
 */

const Notification = ({
  text,
  icon = null,
  active,
  top = true,
  elevation = 1,
  elevationDirection = '',
  ...rest
}: NotificationInterface & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  useEffect(() => {
    /* istanbul ignore else */
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

  const color = configuration.colors.text.success;

  return (
    <StyledNotification
      isActive={isActive}
      backgroundColor={color}
      configuration={configuration}
      data-testid='notification'
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
        {icon && icon}
      </span>
      <Paragraph size='sm' color='white'>
        {text}
      </Paragraph>
      <div style={{ marginLeft: 'auto' }}>
        <BareButton
          onClick={() => {
            setIsActive(false);
          }}
          data-testid='close-button'
          close
        />
      </div>
    </StyledNotification>
  );
};

export default Notification;
