import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ConfigProvider } from './providers';

const AllTheProviders = ({ children }: any) => (
  <ConfigProvider>{children}</ConfigProvider>
);

jest.mock('./cells/Input/amex.svg', () => null);
jest.mock('./cells/Input/mastercard.svg', () => null);
jest.mock('./cells/Input/visa.svg', () => null);
jest.mock('./cells/Dropdown/sorting.svg', () => null);
jest.mock('./cells/BareButton/close.svg', () => null);

const customRender = (ui, options?) => render(ui, { wrapper: AllTheProviders, ...options });
// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
