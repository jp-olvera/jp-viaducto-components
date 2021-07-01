import React from 'react';

import StyledAvatar from './StyledAvatar';
import { SIZE } from './constants';

interface AvatarProps {
  src: string;
  alt: string;
  size?: string;
  height?: string;
  width?: string;
  clipPath?: string | null;
}

/**
 * Avatar component is a img HTML tag with a circular shape
 * @param {String} src The path of the image
 * @param {size} size The size of the image (large or default)
 * @param {string} alt alt attribute
 */
const Avatar = ({
  src,
  alt,
  size = SIZE.default,
  height,
  width,
  clipPath = null,
  ...rest
}: AvatarProps) => {
  let nWidth = '50px';
  let nHeight = '50px';
  switch (size) {
    case SIZE.large:
      nHeight = '142px';
      nWidth = '142px';
      break;
    case SIZE.small:
      nHeight = '32px';
      nWidth = '32px';
      break;
    default:
      break;
  }
  if (height !== undefined) {
    nHeight = height;
  }
  if (width !== undefined) {
    nWidth = width;
  }
  return (
    <StyledAvatar
      data-testid='avatar'
      src={src}
      alt={alt || src}
      height={nHeight}
      width={nWidth}
      clipPath={clipPath}
      {...rest}
    />
  );
};

export default Avatar;
