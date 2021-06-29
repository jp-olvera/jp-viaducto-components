import React, { useState, Children } from 'react';
import { StyledBreadcrums } from './StyledBreadcrum';
import BreadcrumContext, { BreadcrumValuesProps } from './BreadcrumContext';
import Breadcrum from './Breadcrum';

interface BreadcrumsProps {
  fontSize: string;
  family: string;
  separatorSpacing: string;
  children: React.ReactNode[];
}
const Breadcrums = ({
  fontSize,
  family,
  separatorSpacing = 'sm',
  children,
}: BreadcrumsProps) => {
  const [showAll, setShowAll] = useState(false);

  const [breadcrumConfig] = useState<BreadcrumValuesProps>({
    separatorSpacing,
    fontSize,
    family,
  });

  // If you wanna know a little more about Children.toArray and this code
  // https://dev.to/boywithsilverwings/counting-react-children-kde
  return (
    <nav aria-label='breadcrum'>
      <StyledBreadcrums>
        <BreadcrumContext.Provider value={{ breadcrumConfig }}>
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
              {
                Children.toArray(children)[
                  Children.toArray(children).length - 3
                ]
              }
              {
                Children.toArray(children)[
                  Children.toArray(children).length - 2
                ]
              }
              {
                Children.toArray(children)[
                  Children.toArray(children).length - 1
                ]
              }
            </>
          )}
        </BreadcrumContext.Provider>
      </StyledBreadcrums>
    </nav>
  );
};

export default Breadcrums;
