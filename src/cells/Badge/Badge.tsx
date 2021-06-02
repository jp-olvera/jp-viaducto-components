import React, { useContext } from 'react';

import { ConfigContext } from '../../providers';
import { StyledBadge } from './StyledBadge';

const Badge = ({
  content,
  src,
  color,
  clipPath,
  fontSize,
  size,
  ...rest
}: any) => {
  const { configuration } = useContext(ConfigContext);
  return (
    <StyledBadge
      configuration={configuration}
      src={src}
      color={color}
      clipPath={clipPath}
      fontSize={fontSize}
      size={size}
      {...rest}
    >
      <span>
        <p>{content}</p>
      </span>
    </StyledBadge>
  );
};

export default Badge;
