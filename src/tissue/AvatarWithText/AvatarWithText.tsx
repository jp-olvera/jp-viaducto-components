import React from 'react';
import styled from 'styled-components';
import { AvatarProps } from '../../cells/Avatar/Avatar';
import { Avatar, Spacer } from '../../cells';

interface ATI {
  children: any;
  avatar: AvatarProps;
  spacing?: string;
  reverse?: boolean;
}

const StyledAvatarWithText = styled.div < any > `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(p) => `${p.reverse ? 'row-reverse' : 'row'}`};
`;

const AvatarWithText = ({
  children,
  avatar,
  spacing = 'sm',
  reverse = false,
}: ATI) => (
  <StyledAvatarWithText reverse={reverse}>
    <Avatar {...avatar} />
    <Spacer direction='horizontal' size={spacing} />
    {children}
  </StyledAvatarWithText>
);

export default AvatarWithText;
