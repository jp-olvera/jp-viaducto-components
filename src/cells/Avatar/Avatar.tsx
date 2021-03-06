import React from 'react';

import StyledAvatar from './StyledAvatar';
import { SIZE } from './constants';
/** Avatar component is a img HTML tag with a circular shape */
export interface Avatar extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** The path of the image */
  src: string;
  /** HTML alt attribute */
  alt: string;
  /** The size of the image (large or default) */
  size?: 'large' | 'default' | 'small';
  /** Custom height */
  height?: string;
  /** Custom width */
  width?: string;
  /** Your own clip-path polygon */
  clipPath?: string | null;
  /** Set circular shape */
  circular?: boolean;
}

/**
 * Avatar component is a img HTML tag with a circular shape
 * @param {string} src The path of the image
 * @param {string} alt HTML alt attribute
 * @param {string} size The size of the image (large or default)
 * @param {string} height Custom height
 * @param {string} width Custom width
 * @param {string} clipPath Your own clip-path polygon
 * @param {boolean} circular Set circular shape
 */

const Avatar = ({
  src,
  alt,
  size = 'default',
  height,
  width,
  clipPath = null,
  circular = true,
  ...rest
}: Avatar) => {
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
      {...rest}
      circular={circular}
      data-testid='avatar'
      src={src}
      alt={alt}
      height={nHeight}
      width={nWidth}
      clipPath={clipPath}
    />
  );
};

export default Avatar;
