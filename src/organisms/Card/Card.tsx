import React, { useContext } from 'react';

import { ConfigContext } from '../../providers';
import { StyledNormalCard } from './StyledCard';

/** Card component */
interface CardInterface {
  /** Source of the image of top image */
  src?: any;
  /** Body component */
  children?: any;
  /** Elevation indicator for shadows data */
  elevation?: number;
  /** Light indicator for shadows data */
  elevationDirection?: string;
  /** Overrides transitionTimingFunction */
  transition?: string;
  /** Set font family */
  family?: string;
  /** Set the breakpoint size for responsive design */
  breakpoint?: string;
}

/**
 * Card component
 * @param {any} src Source of the image of top image
 * @param {any} children Body component
 * @param {number} elevation Elevation indicator for shadows data
 * @param {string} elevationDirection Light indicator for shadows data
 * @param {string} transition Overrides transitionTimingFunction
 * @param {string} family Set font family
 * @param {string} breakpoint Set the breakpoint size for responsive design
 */

const Card = ({
  src = null,
  children = null,
  elevation = 1,
  elevationDirection = '',
  family,
  breakpoint = 'md',
  ...rest
}: CardInterface & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);
  const hasOnlyImage: boolean = children === null;

  return (
    <StyledNormalCard
      configuration={configuration}
      onlyImage={hasOnlyImage}
      noImage={src === null}
      elevation={elevation}
      elevationDirection={elevationDirection}
      family={family}
      breakpoint={breakpoint}
      {...rest}
    >
      {src !== null && <img className='img' src={src} alt={src} />}

      {children !== null && !hasOnlyImage && (
        <div className='children'>{children}</div>
      )}
    </StyledNormalCard>
  );
};

export default Card;
