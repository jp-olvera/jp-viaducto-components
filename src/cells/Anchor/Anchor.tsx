import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';

import { StyledAnchor } from './StyledAnchor';

interface AnchorInterface {
  label?: string;
  href?: string;
  size?: string;
  family?: string;
  color?: string;
  icon?: any;
  lead?: boolean;
  transition?: string;
}

/**
 * Anchor component with icon (or no). This component uses 'Link' component
 * from Gatsby for pre-loa the page
 * @param {String} label Title or content of the component
 * @param {String} href The path of the page to visit
 * @param {string} color The color of the anchor
 * @param {String} size The anchor size
 * @param {String} family The anchor font-family
 * @param {any} icon The Icon component
 * @param {Boolean} lead Indicates if the icon will be leading
 * @param {String} transition Indicates the transitionTimingFunction
 */
const Anchor = ({
  label,
  href,
  size = 'md',
  family = 'Manrope',
  color = 'dark',
  icon = null,
  lead = false,
  ...rest
}: AnchorInterface) => {
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
