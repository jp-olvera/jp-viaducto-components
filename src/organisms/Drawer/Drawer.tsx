import React, {
  useState, useEffect, useContext, useRef,
} from 'react';
import { createPortal } from 'react-dom';
import StyledDrawer from './StyledDrawer';
import { ConfigContext } from '../../providers';
import { Overlay } from '../../cells/Overlay';

interface DrawerInterface {
  /** Indicates if the drawer should be open or not */
  active?: boolean;
  /** Content to put inside the drawer */
  children: any;
  /** Elevation level */
  elevation?: number;
  /** Elevation direction */
  elevationDirection?: string;
  /** Function to close the popover when clicking outside */
  onClose: () => void;
  /** Overlay color preferaby an rgba */
  overlayColor?: string;
  /** Size of the drawer, 'sm', 'md', 'lg', defaults to 'sm' */
  size?: string;
  /** Transition function to apply when opening and closing */
  transition?: string;
}

/** Drawer component */
const Drawer = ({
  active = false,
  children,
  elevation = 1,
  elevationDirection = '',
  onClose,
  overlayColor = 'rgba(0,0,0,0.3)',
  size = 'sm',
  transition,
  ...rest
}: DrawerInterface & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);
  const [isClosing, setisClosing] = useState(false);
  const ref = useRef<HTMLElement>();
  useEffect(() => {
    setisClosing(false);
    if (active && ref.current) {
      ref.current.focus();
    }
  }, [active]);

  const handleClose = (ev) => {
    if (
      ev.type === 'click'
      || ev.type === 'Enter'
      || ev.keyCode === 13
      || ev.keyCode === 32
    ) {
      /* istanbul ignore else */
      if (active) {
        setisClosing(true);
        setTimeout(() => {
          onClose();
        }, 230);
      }
    }
  };
  let width = '22.25rem';
  if (size === 'lg') {
    width = '33.375rem';
  }

  return active
    ? createPortal(
      <Overlay
        onClick={handleClose}
        onKeyDown={handleClose}
        data-testid='overlay'
        role='dialog'
        style={{
          backgroundColor: overlayColor,
          left: 0,
          height: '100vh',
          position: 'fixed',
          top: 0,
          width: '100vw',
          zIndex: 1,
        }}
      >
        <StyledDrawer
          configuration={configuration}
          data-testid='drawer'
          elevation={elevation}
          transition={transition}
          elevationDirection={elevationDirection}
          width={width}
          tabIndex={0}
          ref={ref}
          {...rest}
          onClick={(ev: any) => {
            // Yep! this is needed
            ev.stopPropagation();
          }}
          isClosing={isClosing}
          size={size}
        >
          {children}
        </StyledDrawer>
      </Overlay>,
      document.body,
    )
    : null;
};

export default Drawer;
