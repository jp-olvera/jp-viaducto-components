import React from 'react';

import StyledPill from './StyledPill';

const Pill = ({
  label = null,
  iconLead = null,
  icon = null,
  background = '#C4C4C4',
  color = '#000',
  size = 'md',
  family = 'Manrope'
}) => {
  return (
    <StyledPill
      hasIcon={icon !== null || icon !== ""}
      hasIconLead={iconLead !== null || iconLead !== ""}
      onlyText={(icon === null && iconLead === null) || (icon === "" && iconLead === "")}
      background={background}
      color={color}
      size={size}
      family={family}
    >
      {iconLead !== null && <span className="span-icon-lead">{iconLead}</span>}
      <span >{label}</span>
      {icon !== null && <span className="span-icon">{icon}</span>}
    </StyledPill>
  );
};

export default Pill;