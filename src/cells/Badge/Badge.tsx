import React, { useContext } from 'react';

import { ConfigContext } from '../../providers';
import { StyledBadge } from './StyledBadge';

/**
 * Badge component
 * @param {String} background Background color
 * @param {String} color Text color
 * @param {String} family Font family
 * @param {JSX Element} content Content for the badge
 * @param {String} fontSize Font size
 * @param {String} size Badge size
 * @param {String} clipPath Badge shape
 * @param {String} src Background image
 * @param {String} align Content align
 */
interface BadgeInterface {
  content: any;
  src?: string;
  color?: string;
  clipPath?: string;
  fontSize?: string;
  size?: any;
  family?: string;
  background?: string;
  align?: string;
  rest?: any;
}

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
}: BadgeInterface) => {
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
