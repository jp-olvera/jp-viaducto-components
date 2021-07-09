import React, { useContext } from 'react';

import { ConfigContext } from '../../providers';
import { StyledBadge } from './StyledBadge';

/** Badge component */
interface BadgeInterface {
  /** Content for the badge */
  content: any;
  /** Background image */
  src?: string;
  /** Text color */
  color?: string;
  /** Background color */
  clipPath?: string;
  /** Font family */
  fontSize?: string;
  /** Font size */
  size?: any;
  /** Badge size */
  family?: string;
  /** Badge shape */
  background?: string;
  /** Content align */
  align?: string;
}

/**
 * Badge component
 * @param {any} content Content for the badge
 * @param {String} src Background image
 * @param {String} color Text color
 * @param {String} background Background color
 * @param {String} family Font family
 * @param {String} fontSize Font size
 * @param {String} size Badge size
 * @param {String} clipPath Badge shape
 * @param {String} align Content align
 */

const Badge = ({
  content,
  src,
  color,
  clipPath,
  fontSize,
  size,
  family,
  align,
  background,
  ...rest
}: BadgeInterface & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);
  return (
    <StyledBadge
      configuration={configuration}
      src={src || null}
      color={color}
      clipPath={clipPath}
      fontSize={fontSize}
      size={size}
      family={family}
      align={align}
      background={background}
      {...rest}
    >
      {content}
    </StyledBadge>
  );
};

export default Badge;
