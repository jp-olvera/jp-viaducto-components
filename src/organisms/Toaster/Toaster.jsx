import React, { useContext, useState, useEffect, useRef } from 'react';
import { ConfigContext } from '../../providers';
import { Paragraph } from '../../cells/Paragraph';
import StyledToaster from './StyledToaster';
import { Close } from 'react-ikonate';
import { Checkbox } from 'react-ikonate';

/**
 * A toast component, you can change ts position via top and right properties
 * @param {string} text Text to be shown
 * @param {string} type One of success/error/warning
 * @param {string} title The title in the top
 * @param {boolean} active Boolean that indicates if the toaster should be shown
 * @param {boolean} top Boolean that indicates if the toaster should be in top, default is true
 * @param {boolean} right Boolean that indicates if the toaster should be in right, default is true
 */
const Toaster = ({
  text,
  type,
  title,
  active = false,
  top = true,
  right = true,
}) => {
  const { configuration } = useContext(ConfigContext);
  const [isActive, setIsActive] = useState(true);

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
          right ? 'translateX(100%)' : 'translateX(-100%)'
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
    <StyledToaster
      ref={ref}
      backgoundColor={color}
      configuration={configuration}
      isActive={isActive}
      top={top}
      right={right}
    >
      <div className="toaster-header">
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
          {title}
        </Paragraph>
        <div style={{ marginLeft: 'auto' }}>
          <button
            className="toaster-close"
            data-testid="close-button"
            onClick={() => {
              setIsActive(false);
            }}
          >
            <Close stroke="white" border={2} width="18px" height="18px" />
          </button>
        </div>
      </div>
      <div className="toaster-message">
        <Paragraph size="sm" weight="bold">
          {text}
        </Paragraph>
      </div>
    </StyledToaster>
  );
};

export default Toaster;
