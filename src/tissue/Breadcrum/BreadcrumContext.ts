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
  family: string;
}

export interface BreadcrumContextProps {
  breadcrumConfig: BreadcrumValuesProps;
}

const BreadcrumContext = createContext<BreadcrumContextProps>({
  breadcrumConfig: {
    separatorSpacing: 'sm',
    fontSize: 'md',
    family: 'inherit',
  },
});

export default BreadcrumContext;
