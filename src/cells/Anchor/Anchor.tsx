import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import { StyledAnchor } from './StyledAnchor';

/** Anchor component with icon (or not). */
export interface Anchor extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Title or content of the component */
  label: string;
  /** The path of the page to visit */
  href?: string;
  /** Target to open link */
  target?: string;
  /** The color of the anchor */
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  /** The anchor size */
  family?: string | null;
  /** The anchor font-family */
  color?: string;
  /** The Icon component */
  icon?: any;
  /** Indicates if the icon will be leading */
  lead?: boolean;
  /** Spacing between icon and label */
  spacing?:
    | null
    | 'none'
    | 'nano'
    | 'micro'
    | 'tiny'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'xxxl';
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
 * @param {String} spacing Spacing between icon and label
 */
const Anchor = ({
  label,
  spacing = 'none',
  href,
  size,
  family,
  color,
  icon,
  target,
  lead,
  ...rest
}: Anchor) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledAnchor
      href={href}
      color={color}
      size={size}
      family={family}
      configuration={configuration}
      target={target}
      spacing={spacing}
      {...rest}
    >
      <span className='ballena-anchor-icon' style={{ order: lead ? 1 : 3 }}>
        {icon}
      </span>
      <span className='ballena-anchor-label' style={{ order: lead ? 3 : 1 }}>
        {label}
      </span>
    </StyledAnchor>
  );
};

export default Anchor;
