import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';

import StyledAvatar from './StyledAvatar';
import { SIZE } from './constants';

/**
 * Avatar component is a img HTML tag with a circular shape
 * @param {String} src The path of the image
 * @param {size} size The size of the image (large or default)
 * @param {Object} rest HTML attributes of a img tag
 */
const Avatar = ({ src, size = SIZE.default, ...rest }) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledAvatar
      src={src}
      alt={src}
      {...rest}
      size={size}
      configuration={configuration}
    />
  );
};

export default Avatar;
