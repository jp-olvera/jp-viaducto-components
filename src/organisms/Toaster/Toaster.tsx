import React, { useContext, useRef } from 'react';

import { ConfigContext } from '../../providers';
import { Paragraph } from '../../cells/Paragraph';
import { BareButton } from '../../cells/BareButton';
import StyledToaster from './StyledToaster';

/**
 * A toast component, you can change ts position via top and right properties
 * @param {string} text Text to be shown
 * @param {any} icon Icon Helper
 * @param {string} title The title in the top
 * @param {boolean} active Boolean that indicates if the toaster should be shown
 * @param {boolean} top Boolean that indicates if the toaster should be in top, default is true
 * @param {boolean} right Boolean that indicates if the toaster should be in right, default is true
 * @param {number} elevation Elevation indicator for shadows data
 * @param {string} elevationDirection Light indicator for shadows data
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
}: any) => {
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
          <BareButton data-testid='close-button' onClick={onDismiss} close />
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
