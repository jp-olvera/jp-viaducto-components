import React, { useState, Children, useEffect } from 'react';
import { StyledBreadcrums } from './StyledBreadcrum';
import BreadcrumContext, { BreadcrumValuesProps } from './BreadcrumContext';
import Breadcrum from './Breadcrum';

/** Breadcrums component, parent of Breadcrum component */
export interface BreadcrumsProps extends React.OlHTMLAttributes<HTMLOListElement> {
  /** React Elements, use Breadcrum for wrap the children */
  children: React.ReactNode|React.ReactNode[];
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
  /** Set the separator for the item */
  separator?: JSX.Element;
  /** How many items to show */
  itemsToShow?: number;
}

/**
 * Breadcrums component, parent of Breadcrum component
 * @param {React.ReactNode[]} children React Elements, use Breadcrum for wrap the children
 * @param {string} fontSize Set the font size
 * @param {string} family Set font family
 * @param {string} separatorSpacing Horizontal spacing for the item and the separator
 * @param {JSX.Element} separator Set the separator for the item
 * @param {number} itemsToShow  How many items to show 
 */

const Breadcrums = ({
  fontSize = 'md',
  family = 'inherit',
  separatorSpacing = 'sm',
  itemsToShow = 4,
  children,
  separator,
  ...rest
}: BreadcrumsProps) => {
  const [showAll, setShowAll] = useState(false);

  const [breadcrumConfig] = useState<BreadcrumValuesProps>({
    separatorSpacing,
    fontSize,
    family,
    separator,
  });

  const [indexesToUse, setIndexesToUse] = useState<number[]>([]);
  useEffect(() => {
    const l: number[] = [];
    if (itemsToShow >= 2) {
      for (let i = 0; i < itemsToShow - 2; i++) {
        const at = 1 + i;
        l.push(at);
      }
      setIndexesToUse(l);
    }
  }, [itemsToShow]);

  // If you wanna know a little more about Children.toArray and this code
  // https://dev.to/boywithsilverwings/counting-react-children-kde
  return (
    <StyledBreadcrums aria-label='breadcrum' {...rest}>
      <BreadcrumContext.Provider value={breadcrumConfig}>
        {showAll || Children.toArray(children).length <= itemsToShow ? (
          children
        ) : (
          <>
            {Children.toArray(children)[0]}
            {Children.toArray(children).filter((child, index) => {
              if (indexesToUse.includes(index)) {
                return child;
              }
              return null
            }).map(child => (child))}
            <Breadcrum onClick={() => {
               setShowAll(true);
               }}>
                 ...
             </Breadcrum>
            {Children.toArray(children)[Children.toArray(children).length - 1]}
          </>

          // <>

          //
          //   <Breadcrum onClick={() => {
          //     setShowAll(true);
          //     }}>
          //       ...
          //   </Breadcrum>
          //
          // </>
        )}
      </BreadcrumContext.Provider>
    </StyledBreadcrums>
  );
};

export default Breadcrums;
