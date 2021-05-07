import React, { useState, useEffect, useContext } from 'react';
import StyledDrawer from './StyledDrawer';
import { BareButton } from '../../cells';
import { ConfigContext } from '../../providers';

const Drawer = ({
  active = false,
  children,
  elevation = 1,
  elevationDirection = '',
}) => {
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
    >
      <div className="close">
        <BareButton onClick={handleActive}>X</BareButton>
      </div>
      <div className="drawer-content">{children}</div>
    </StyledDrawer>
  );
};

export default Drawer;
