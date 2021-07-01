import React, {
  useState, useEffect, useContext, useRef,
} from 'react';
import { createPortal } from 'react-dom';
import StyledDrawer from './StyledDrawer';
import { ConfigContext } from '../../providers';

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
  active: boolean;
  children: any;
  elevation?: number;
  elevationDirection?: string;
  transition?: string;
  onClose: () => void;
  overlayColor?: string;
  overlayOpacity?: string;
  minWidth?: string;
}

const Drawer = ({
  active = false,
  children,
  elevation = 1,
  elevationDirection = '',
  onClose,
  overlayColor = 'rgba(0,0,0,0.3)',
  minWidth = '22.25rem',
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
      if (active) {
        setisClosing(true);
        setTimeout(() => {
          onClose();
        }, 230);
      }
    }
  };

  if (!active) return null;

  return createPortal(
    <div
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
        active={active}
        configuration={configuration}
        data-testid='drawer'
        elevation={elevation}
        elevationDirection={elevationDirection}
        minWidth={minWidth}
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
    </div>,
    document.body,
  );
};

export default Drawer;
