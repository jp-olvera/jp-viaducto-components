import { createContext } from 'react';

export interface BreadcrumValuesProps {
  separatorSpacing:
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
  fontSize: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  family?: string;
  /** Set the separator for the item */
  separator?: any;
}

const BreadcrumContext = createContext<BreadcrumValuesProps>({
  separatorSpacing: 'sm',
  fontSize: 'md',
  family: 'inherit',
  separator: undefined,
});

export default BreadcrumContext;
