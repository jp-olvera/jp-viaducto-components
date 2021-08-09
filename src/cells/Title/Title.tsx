import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';

import StyledTitle from './StyledTitle';

interface TitleInterface {
  /** value for children */
  children: any;
  /** value for align */
  align?: 'left' | 'right' | 'center';
  /** value for color */
  color?: string;
  /** value for font-family */
  family?: string | null;
  /** value for font-style property */
  fontStyle?: 'normal' | 'italic';
  /** value for title size, values between 1 - 6 or D1 - D4 */
  level?: 'D1' | 'D2' | 'D3' | 'D4' | '1' | '2' | '3' | '4' | '5' | '6';
  /** value for line-height property */
  lineHeight?: 'xs' | 'sm' | 'md' | 'lg' | string;
  /** value for margin */
  margin?: string;
  /** value for leter-spacing, it'l be used with rem units */
  spacing?: string;
  /** value for weight */
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

/** Title component overrides HTML heading tag (h1)
 * This components uses level arguent to decide the sie o the title
 * you can use values from 1 to 6 for cases like h1, h2, h3 ...
 * or u can use alues from D1 - D4 */

const Title = ({
  family = null,
  children,
  level = '1',
  color = 'dark',
  ...props
}: TitleInterface & React.HTMLAttributes<HTMLHeadingElement>) => {
  const { configuration } = useContext(ConfigContext);
  const actAs = (): string => {
    let response: string = level;
    switch (level) {
      case 'D1':
      case 'D2':
      case 'D3':
      case 'D4':
      case '1':
        response = '1';
        break;
      default:
        break;
    }
    return response;
  };
  const element: any = `h${actAs()}`;

  return (
    <StyledTitle
      color={color}
      level={level}
      family={family}
      configuration={configuration}
      {...props}
      as={element}
    >
      {children}
    </StyledTitle>
  );
};

export default Title;
