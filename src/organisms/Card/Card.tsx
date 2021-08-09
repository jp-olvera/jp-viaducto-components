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
  elevation?: 0 | 1 | 2 | 3;
  /** Light indicator for shadows data */
  elevationDirection?:
    | 'radial'
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'topRight'
    | 'topLeft'
    | 'bottomRight'
    | 'bottomLeft';
  /** Overrides transitionTimingFunction */
  transition?: string;
  /** Set font family */
  family?: string;
  /** Set the border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Card component
 * @param {any} src Source of the image of top image
 * @param {any} children Body component
 * @param {number} elevation Elevation indicator for shadows data
 * @param {string} elevationDirection Light indicator for shadows data
 * @param {string} transition Overrides transitionTimingFunction
 * @param {string} family Set font family
 * @param {string} radius Set border radius
 */

const Card = ({
  src = null,
  children = null,
  elevation = 1,
  elevationDirection = 'radial',
  family,
  radius,
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
      radius={radius}
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
