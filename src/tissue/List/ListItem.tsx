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
}: {
  /** ListItem content */
  children: React.ReactNode;
  /** Render behavior */
  as?: string;
} & (React.HTMLAttributes<HTMLDivElement> | React.HTMLAttributes<HTMLLIElement>)) => {
  const { configuration } = useContext(ConfigContext);
  return as === 'li' ? (
    <StyledListItem config={configuration}>{children}</StyledListItem>
  ) : (
    <StyledListItemDiv>{children}</StyledListItemDiv>
  );
};

export default ListItem;
