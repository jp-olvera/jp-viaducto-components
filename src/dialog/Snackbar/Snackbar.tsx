import React, { useContext, useState, useEffect, useRef } from 'react';
import { ConfigContext } from '../../providers/ConfigProvider';
import { StyledSnackbar } from './StyledSnackbar';
import { Paragraph } from '../../cells/Paragraph';
import { BareButton } from '../../cells/BareButton';

/** Snackbar component with close button */
export interface Snackbar extends React.HTMLAttributes<HTMLDivElement> {
  /** Text label for the Snackbar */
  text: string;
  /** Icon Helper */
  icon?: any;
  /** Attribute for shown/hide component */
  active: boolean;
  /** Set to true for stick at top or false to stick in bottom */
  top?: boolean;
  /** Elevation indicator for shadows data */
  elevation?: 0 | 1 | 2 | 3;
  /** Light indicator for shadows data */
  elevationDirection?:
    | 'radial'
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'topRight'
    | 'topLeft'
    | 'bottomRight'
    | 'bottomLeft';
  /** Overrides transitionTimingFunction */
  transition?: string;
}

/**
 * Snackbar component with close button
 * @param {string} text Text label for the Snackbar
 * @param {any} icon Icon Helper
 * @param {boolean} active Attribute for shown/hide component
 * @param {boolean} top Set to true for stick at top or false to stick in bottom
 * @param {number} elevation Elevation indicator for shadows data
 * @param {string} elevationDirection Light indicator for shadows data
 * @param {string} transition Overrides transitionTimingFunction
 */

const Snackbar = ({
  text,
  icon = null,
  active,
  top = true,
  elevation = 1,
  elevationDirection = 'radial',
  ...rest
}: Snackbar) => {
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
        ref.current.style.setProperty('transform', top ? 'translateY(-100%)' : 'translateY(100%)');
      }
    }
  }, [isActive]);

  const color = configuration.colors.text.success;

  return (
    <StyledSnackbar
      isActive={isActive}
      backgroundColor={color}
      configuration={configuration}
      data-testid='Snackbar'
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
    </StyledSnackbar>
  );
};

export default Snackbar;
