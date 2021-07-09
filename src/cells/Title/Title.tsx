import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';

import StyledTitle from './StyledTitle';

interface TitleInterface {
  children: any;
  align?: string;
  color?: string;
  family?: string | null;
  fontStyle?: string;
  level?: string;
  lineHeight?: string;
  margin?: string;
  spacing?: string;
  verticalAlign?: string;
  weight?: string;
}

/**
 * Title component overrides HTML heading tag (h1)
 * This components uses level arguent to decide the sie o the title
 * you can use values from 1 to 6 for cases like h1, h2, h3 ...
 * or u can use alues from D1 - D4
 * @param {String} children value for children
 * @param {String} align value for align
 * @param {String} color value for color
 * @param {String} family value for font-family
 * @param {String} fontStyle value for font-style property
 * @param {String} level value for title size, values between 1 - 6 or D1 - D4
 * @param {String} lineHeight value for line-height property
 * @param {String} margin value for margin
 * @param {Number} spacing value for leter-spacing, it'l be used with rem units
 * @param {String} verticalAlign value for vertical-align property
 * @param {String} weight value for weight
 */

const Title = ({
  family = null,
  children,
  level = '1',
  color = 'dark',
  ...props
}: TitleInterface & React.HTMLAttributes<HTMLHeadingElement>) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledTitle
      color={color}
      level={level}
      family={family}
      configuration={configuration}
      {...props}
    >
      {children}
    </StyledTitle>
  );
};

export default Title;
