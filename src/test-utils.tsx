import React, { FC } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ConfigProvider } from './providers';

// interface ProviderInterface {
//   children: any;
// }

const AllTheProviders = ({ children }) => {
  return <ConfigProvider>{children}</ConfigProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });
// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
