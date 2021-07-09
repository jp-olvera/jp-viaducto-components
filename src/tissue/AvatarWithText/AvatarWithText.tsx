import React from 'react';
import styled from 'styled-components';
import { AvatarProps } from '../../cells/Avatar/Avatar';
import { Avatar, Spacer } from '../../cells';

const StyledAvatarWithText = styled.div < any > `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(p) => `${p.reverse ? 'row-reverse' : 'row'}`};
`;
/** AvatarWithText component */
interface ATI {
  /** Child element */
  children: any;
  /** Avatar component props */
  avatar: AvatarProps;
  /** Horizontal between avatar and children */
  spacing?: string;
  /** Set the Avatar as last child */
  reverse?: boolean;
}

/**
 * AvatarWithText component
 * @param {any} children Child element
 * @param {AvatarProps} avatar Avatar component props
 * @param {string} spacing Horizontal between avatar and children
 * @param {boolean} reverse Set the Avatar as last child
 */

const AvatarWithText = ({
  children,
  avatar,
  spacing = 'sm',
  reverse = false,
  ...rest
}: ATI & React.HTMLAttributes<HTMLDivElement>) => (
  <StyledAvatarWithText reverse={reverse} {...rest}>
    <Avatar {...avatar} />
    <Spacer direction='horizontal' size={spacing} />
    {children}
  </StyledAvatarWithText>
);

export default AvatarWithText;
