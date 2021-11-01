import React, { useState, useEffect, useContext, useRef } from 'react';
import { createPortal } from 'react-dom';
import StyledDrawer from './StyledDrawer';
import { ConfigContext } from '../../providers';
import { Overlay } from '../../cells/Overlay';

interface DrawerInterface {
  /** Indicates if the drawer should be open or not */
  active?: boolean;
  /** Content to put inside the drawer */
  children: any;
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
  /** Function to close the popover when clicking outside */
  onClose: () => void;
  /** Overlay color preferaby an rgba */
  overlayColor?: string;
  /** From what edge of the screen should appear */
  placement?: 'right' | 'top' | 'left' | 'bottom';
  /** Size of the drawer, 'sm', 'md', 'lg', defaults to 'sm' */
  size?: 'sm' | 'md' | 'lg' | 'full';
  /** Transition function to apply when opening and closing */
  transition?: string;
  /** z-index value for the overlay, it defaults to 9999 */
  zIndex?: number;
}

/** Drawer component */
const Drawer = ({
  active = false,
  children,
  elevation = 1,
  elevationDirection = 'radial',
  onClose,
  overlayColor = 'rgba(0,0,0,0.3)',
  placement = 'right',
  size = 'sm',
  transition = 'linear',
  zIndex = 9999,
  ...rest
}: DrawerInterface & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);
  const ref = useRef<HTMLElement>();
  const [isClosing, setisClosing] = useState(false);
  const [keepActive, setKeepActive] = useState(false);
  let timer;
  let timer2;
  useEffect(() => {
    if (active && ref.current) {
      ref.current.focus();
      setisClosing(false);
      setKeepActive(true);
    } else if (!active && keepActive) {
      setisClosing(true);
      setKeepActive(true);
      timer = setTimeout(() => {
        setisClosing(false);
        setKeepActive(false);
      }, 230);
    }
  }, [active, ref]);

  useEffect(
    () => () => {
      if (timer) {
        clearTimeout(timer);
      }
      if (timer2) {
        clearTimeout(timer2);
      }
    },
    []
  );
  const handleClose = (ev) => {
    /* istanbul ignore else */
    if (ev.type === 'click' || ev.key === 'Escape') {
      /* istanbul ignore else */
      if (active) {
        setisClosing(true);
        timer2 = setTimeout(() => {
          onClose();
        }, 230);
      }
    }
  };
  return (active || keepActive) && document
    ? createPortal(
        <Overlay
          data-testid='overlay'
          onClick={handleClose}
          onKeyUp={handleClose}
          role='presentation'
          tabIndex={0}
          style={{
            backgroundColor: overlayColor,
            inset: 0,
            position: 'fixed',
            zIndex,
          }}
        >
          <StyledDrawer
            configuration={configuration}
            data-testid='drawer'
            elevation={elevation}
            elevationDirection={elevationDirection}
            isClosing={isClosing}
            tabIndex={0}
            transition={transition}
            ref={ref}
            size={size}
            placement={placement}
            {...rest}
            onClick={(ev: any) => {
              // Yep! this is needed
              ev.stopPropagation();
            }}
            onKeyUp={(ev: any) => {
              // Yep! this is needed
              ev.stopPropagation();
            }}
          >
            {children}
          </StyledDrawer>
        </Overlay>,
        document.body
      )
    : null;
};

export default Drawer;
