import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import { StyledListItem, StyledListItemDiv } from './StyledList';

/**
 * ListItem component
 * @param {React.ReactNode} children ListItem content
 * @param {string} as Render behavior
 */

const ListItem = ({
  children,
  as = 'li',
  ...rest
}: {
  /** ListItem content */
  children: React.ReactNode;
  /** Render behavior */
  as?: string;
} & React.HTMLAttributes<HTMLOrSVGElement>) => {
  const { configuration } = useContext(ConfigContext);
  return as === 'li' ? (
    <StyledListItem config={configuration} {...rest}>
      {children}
    </StyledListItem>
  ) : (
    <StyledListItemDiv {...rest}>{children}</StyledListItemDiv>
  );
};

export default ListItem;
