import React, { useState, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import StyledDrawer from './StyledDrawer';
import { ConfigContext } from '../../providers';

/**
 * Drawer component
 * @param {boolean} active Attribute to show/hide drawer
 * @param {any} children Children component inside the drawer
 * @param {number} elevation Elevation indicator for shadows data
 * @param {string} elevationDirection Light indicator for shadows data
 */
interface DrawerInterface {
  active: boolean;
  children: any;
  elevation: number;
  elevationDirection: string;
  transition?: string;
  onClose: () => void;
  overlayColor: string;
  overlayOpacity: string;
}

const Drawer = ({
  active = false,
  children,
  elevation = 1,
  elevationDirection = '',
  onClose,
  overlayColor = 'rgba(0,0,0,0.3)',
  ...rest
}: DrawerInterface) => {
  const { configuration } = useContext(ConfigContext);
  const [isClosing, setisClosing] = useState(false);

  useEffect(() => {
    setisClosing(false);
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
        data-testid='drawer'
        tabIndex={0}
        active={active}
        configuration={configuration}
        elevation={elevation}
        elevationDirection={elevationDirection}
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
