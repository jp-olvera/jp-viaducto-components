import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';

import { StyledAnchor } from './StyledAnchor';

/**
 * Anchor component with icon (or no). This component uses 'Link' component
 * from Gatsby for pre-loa the page
 * @param {String} label Title or content of the component
 * @param {String} href The path of the page to visit
 * @param {String} size The anchor size
 * @param {String} size The anchor font-family
 * @param {Icon} icon The Icon component
 * @param {Boolean} lead Indicates if the icon will be leading
 */
const Anchor = ({
  label,
  href,
  size,
  family,
  color = null,
  icon = null,
  lead = false,
  ...rest
}) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledAnchor
      href={href}
      color={color}
      size={size}
      family={family}
      configuration={configuration}
      {...rest}
    >
      {icon !== null && lead && icon}
      {label}
      {icon !== null && !lead && icon}
    </StyledAnchor>
  );
};

export default Anchor;
