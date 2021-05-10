import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider } from './providers';

interface ProviderInterface {
  children: any;
}

const AllTheProviders = ({ children }: ProviderInterface) => {
  return <ConfigProvider>{children}</ConfigProvider>;
};

const customRender = (ui: React.ReactElement, options: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
