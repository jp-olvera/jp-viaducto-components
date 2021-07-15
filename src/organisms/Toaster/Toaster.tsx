import React, { useContext, useRef } from 'react';

import { ConfigContext } from '../../providers';
import { Paragraph } from '../../cells/Paragraph';
import { BareButton } from '../../cells/BareButton';
import StyledToaster from './StyledToaster';

/** A toast component, you can change ts position via top and right properties */
interface ToasterInterface {
  /** Icon Helper */
  icon?: any;
  /** The title in the top */
  title?: string;
  /** Elevation indicator for shadows data */
  elevation?: number;
  /** Light indicator for shadows data */
  elevationDirection?: string;
  /** Overrides transitionTimingFunction */
  transition?: string;
  /** Trigger a function when closes the toaster */
  onDismiss?: Function;
  /** Set the placement of the Toaster shown */
  placement?: string;
  /** Set the transition state */
  transitionState?: string;
  /** Set the child element */
  children?: any;
}

/**
 * A toast component, you can change ts position via top and right properties
 * @param {any} icon Icon Helper
 * @param {string} title The title in the top
 * @param {number} elevation Elevation indicator for shadows data
 * @param {string} elevationDirection Light indicator for shadows data
 * @param {string} transition Overrides transitionTimingFunction
 * @param {Function} onDismiss Trigger a function when closes the toaster
 * @param {string} placement Set the placement of the Toaster shown
 * @param {string} transitionState Set the transition state
 * @param {any} children Set the child element
 */

const Toaster = ({
  onDismiss,
  placement,
  transitionState,
  elevation = 1,
  elevationDirection = '',
  title = '',
  icon = null,
  transition = 'cubic-bezier(0.2, 0, 0, 1)',
  children,
  ...rest
}: ToasterInterface & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);
  const ref = useRef<HTMLElement>(null);
  const color = configuration.text.success;

  return (
    <StyledToaster
      elevation={elevation}
      elevationDirection={elevationDirection}
      ref={ref}
      backgoundColor={color}
      configuration={configuration}
      placement={placement}
      transitionState={transitionState}
      transition={transition}
      {...rest}
    >
      <div className='toaster-header'>
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
          {title}
        </Paragraph>
        <div style={{ marginLeft: 'auto' }}>
          <BareButton
            data-testid='close-button'
            onClick={(e) => {
              /* istanbul ignore else */
              if (onDismiss) onDismiss(e);
            }}
            close
          />
        </div>
      </div>
      <div className='toaster-message'>
        <Paragraph size='sm' weight='bold'>
          {children}
        </Paragraph>
      </div>
    </StyledToaster>
  );
};

export default Toaster;
