import React, { useState, useEffect, useContext } from 'react';
import StyledDrawer from './StyledDrawer';
import { BareButton } from '../../cells';
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
}

const Drawer = ({
  active = false,
  children,
  elevation = 1,
  elevationDirection = '',
  ...rest
}: DrawerInterface) => {
  const [isActive, setIsActive] = useState(active);
  const { configuration } = useContext(ConfigContext);
  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const handleActive = () => {
    setIsActive(false);
  };
  return (
    <StyledDrawer
      active={isActive}
      configuration={configuration}
      elevation={elevation}
      elevationDirection={elevationDirection}
      {...rest}
    >
      <div className='close'>
        <BareButton onClick={handleActive}>X</BareButton>
      </div>
      <div className='drawer-content'>{children}</div>
    </StyledDrawer>
  );
};

export default Drawer;
