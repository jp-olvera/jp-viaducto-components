import { createContext } from 'react';

export interface BreadcrumValuesProps {
  separatorSpacing: string;
  fontSize: string;
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
