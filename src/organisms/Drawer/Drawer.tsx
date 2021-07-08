import React, {
  useState, useEffect, useContext, useRef,
} from 'react';
import { createPortal } from 'react-dom';
import StyledDrawer from './StyledDrawer';
import { ConfigContext } from '../../providers';
import { Overlay } from '../../cells/Overlay';
/**
 * Drawer component
 * @param {boolean} active Attribute to show/hide drawer
 * @param {any} children Children component inside the drawer
 * @param {number} elevation Elevation indicator for shadows data
 * @param {string} elevationDirection Light indicator for shadows data
 * @param {string} transition Overrides transition timing function
 * @param {void} onClose Triggers an action closing the drawer
 * @param {string} overlayColor Set the color of the overlay
 * @param {string} overlayOpacity Set the opacity for the overlay
 * @param {string} minWidth Set a minWidth for the drawer
 */
interface DrawerInterface {
  active?: boolean;
  children: any;
  elevation?: number;
  elevationDirection?: string;
  onClose: () => void;
  overlayColor?: string;
  overlayOpacity?: string;
  size?: string;
  transition?: string;
}

const Drawer = ({
  active = false,
  children,
  elevation = 1,
  elevationDirection = '',
  onClose,
  overlayColor = 'rgba(0,0,0,0.3)',
  size = 'sm',
  transition = 'ease',
  ...rest
}: DrawerInterface) => {
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
          onClick={(ev) => {
            // Yep! this is needed
            ev.stopPropagation();
          }}
          isClosing={isClosing}
        >
          {children}
        </StyledDrawer>
      </Overlay>,
      document.body,
    )
    : null;
};

export default Drawer;
