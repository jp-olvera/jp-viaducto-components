import React from 'react';
import StyledTitle from './StyledTitle';

/**
 * Title component overrides HTML heading tag (h1)
 * This components uses level arguent to decide the sie o the title
 * you can use values from 1 to 6 for cases like h1, h2, h3 ...
 * or u can use alues from D1 - D4
 * @param {String} family value for font-family
 * @param {String} weight value for weight
 * @param {String} margin value for margin
 * @param {String} children value for children
 * @param {String} level value for title size, values between 1 - 6 or D1 - D4
 * @param {String} align value for align
 * @param {Number} spacing value for leter-spacing, it'l be used with rem units
 * @param {String} lineHeight value for line-height
 * @param {String} color value for color
 * @param {String} children Content of the title
 * @param {Object} props HTML attributes for HTML Heading tag
 */
const Title = ({
  children,
  ...props
}) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};

export default Title;
