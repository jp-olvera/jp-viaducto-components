import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';

import { StyledAnchor } from './StyledAnchor';

/** Anchor component with icon (or not). */
interface AnchorInterface {
  /** Title or content of the component */
  label: string;
  /** The path of the page to visit */
  href?: string;
  /** Target to open link */
  target?: string;
  /** The color of the anchor */
  size?: string;
  /** The anchor size */
  family?: string | null;
  /** The anchor font-family */
  color?: string;
  /** The Icon component */
  icon?: any;
  /** Indicates if the icon will be leading */
  lead?: boolean;
}

/**
 * Anchor component with icon (or not).
 * @param {String} label Title or content of the component
 * @param {String} href The path of the page to visit
 * @param {String} target Target to open link
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
  size,
  family,
  color,
  icon,
  target,
  lead,
  ...rest
}: AnchorInterface & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledAnchor
      href={href}
      color={color}
      size={size}
      family={family}
      configuration={configuration}
      target={target}
      {...rest}
    >
      {icon !== null && lead && icon}
      {label}
      {icon !== null && !lead && icon}
    </StyledAnchor>
  );
};

export default Anchor;
