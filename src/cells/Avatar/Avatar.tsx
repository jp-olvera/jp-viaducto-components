import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';

import StyledAvatar from './StyledAvatar';
import { SIZE } from './constants';

interface AvatarInterface {
  src: string;
  size?: string;
  alt?: string;
}

/**
 * Avatar component is a img HTML tag with a circular shape
 * @param {String} src The path of the image
 * @param {size} size The size of the image (large or default)
 * @param {Object} rest HTML attributes of a img tag
 */
const Avatar = ({ src, size = SIZE.default, ...rest }: AvatarInterface) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledAvatar
      src={src}
      alt={src}
      size={size}
      configuration={configuration}
      {...rest}
    />
  );
};

export default Avatar;