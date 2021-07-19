import React, { useContext } from 'react';

import { ConfigContext } from '../../providers';
import { StyledCollapsibleCard, StyledCollapse } from './StyledCardCollapsible';

/** Card Collapsible component */
interface CardCollapsibleInterface {
  /** Set the collapse prop to hide content */
  collapse?: boolean;
  /** Set the elevation prop */
  elevation?: number;
  /** Set the elevation direction shadow */
  elevationDirection?: string;
  /** Set the main content for the card */
  mainContent: any;
  /** Set the collapsible content for the card */
  collapseContent?: any;
  /** Set border radius */
  radius?: string;
  /** Overrides the transitionTimingFunction */
  transition?: string;
  /** Set font family */
  family?: string;
}

/**
 * Card Collapsible component
 * @param {boolean} collapse Set the collapse prop to hide content
 * @param {number} elevation Set the elevation prop
 * @param {string} elevationDirection Set the elevation direction shadow
 * @param {JSX Element} mainContent Set the main content for the card
 * @param {JSX Element} collapseContent Set the collapsible content for the card
 * @param {string} radius Set border radius
 * @param {string} transition Overrides the transitionTimingFunction
 * @param {string} family Set font family
 */

const CardCollapsible = ({
  collapse = false,
  elevation = 1,
  elevationDirection = 'top',
  mainContent,
  collapseContent,
  radius,
  transition,
  family,
  ...rest
}: CardCollapsibleInterface & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledCollapsibleCard
      configuration={configuration}
      elevation={elevation}
      elevationDirection={elevationDirection}
      radius={radius}
      family={family}
      {...rest}
    >
      <div className='header-component'>{mainContent}</div>
      <StyledCollapse
        collapse={collapse}
        transition={transition}
        configuration={configuration}
        {...rest}
      >
        {collapseContent && <div className='collapse'>{collapseContent}</div>}
      </StyledCollapse>
    </StyledCollapsibleCard>
  );
};

export default CardCollapsible;
