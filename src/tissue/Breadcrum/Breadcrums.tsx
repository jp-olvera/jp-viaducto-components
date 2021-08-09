import React, { useState, Children } from 'react';
import { StyledBreadcrums } from './StyledBreadcrum';
import BreadcrumContext, { BreadcrumValuesProps } from './BreadcrumContext';
import Breadcrum from './Breadcrum';

/** Breadcrums component, parent of Breadcrum component */
interface BreadcrumsProps {
  /** React Elements, use Breadcrum for wrap the children */
  children: React.ReactNode[];
  /** Set the font size */
  fontSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  /** Set font family */
  family?: string;
  /** Horizontal spacing for the item and the separator */
  separatorSpacing?:
    | 'none'
    | 'nano'
    | 'micro'
    | 'tiny'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'xxxl';
}

/**
 * Breadcrums component, parent of Breadcrum component
 * @param {React.ReactNode[]} children React Elements, use Breadcrum for wrap the children
 * @param {string} fontSize Set the font size
 * @param {string} family Set font family
 * @param {string} separatorSpacing Horizontal spacing for the item and the separator
 */

const Breadcrums = ({
  fontSize = 'md',
  family = 'inherit',
  separatorSpacing = 'sm',
  children,
  ...rest
}: BreadcrumsProps & React.OlHTMLAttributes<HTMLOListElement>) => {
  const [showAll, setShowAll] = useState(false);

  const [breadcrumConfig] = useState<BreadcrumValuesProps>({
    separatorSpacing,
    fontSize,
    family,
  });

  // If you wanna know a little more about Children.toArray and this code
  // https://dev.to/boywithsilverwings/counting-react-children-kde
  return (
    <StyledBreadcrums aria-label='breadcrum'>
      <BreadcrumContext.Provider value={{ breadcrumConfig }} {...rest}>
        {showAll || Children.toArray(children).length <= 4 ? (
          children
        ) : (
          <>
            {Children.toArray(children)[0]}
            <Breadcrum
              label='...'
              onClick={() => {
                setShowAll(true);
              }}
            />
            {Children.toArray(children)[Children.toArray(children).length - 3]}
            {Children.toArray(children)[Children.toArray(children).length - 2]}
            {Children.toArray(children)[Children.toArray(children).length - 1]}
          </>
        )}
      </BreadcrumContext.Provider>
    </StyledBreadcrums>
  );
};

export default Breadcrums;
