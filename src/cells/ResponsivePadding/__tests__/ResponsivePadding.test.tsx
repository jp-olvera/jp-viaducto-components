/* eslint-env jest */

import React, { useContext, useEffect } from 'react';
import { render, axe } from '../../../test-utils';
import { ResponsivePadding } from '..';
import { ConfigContext, ConfigProvider } from '../../../providers';

describe('<ResponsivePadding/>', () => {
  test('should render properly', async () => {
    const { container } = render(
      <ResponsivePadding>
        <p>a</p>
      </ResponsivePadding>
    );
    expect(await axe(container)).toHaveNoViolations();
    expect(container).toBeVisible();
  });
  test('should render expanded container', async () => {
    const { container } = render(
      <ResponsivePadding vertical='sm'>
        <p>b</p>
      </ResponsivePadding>
    );
    expect(container).toBeInTheDocument();
  });
  test('should render with all props', async () => {
    const { container } = render(
      <ResponsivePadding horizontal='sm' vertical='sm' top='sm' bottom='sm' left='sm' right='sm'>
        <p>c</p>
      </ResponsivePadding>
    );
    expect(container).not.toBeNull();
  });
  test('should render with all single props', async () => {
    const Content = () => {
      const { configuration, updateConfig } = useContext(ConfigContext);
      useEffect(() => {
        const display = {
          ...configuration,
          display: {
            mobile: {
              xs: '2.986em',
              sm: '3.012em',
              md: '3',
              lg: '3.658px',
              xl: '4.165em',
              xxl: '5.06px',
            },
            desktop: {
              xs: '3.583px',
              sm: '5.16em',
              md: '66',
              lg: '8px',
              xl: '12.839',
              xxl: '15.407em',
            },
          },
        };
        updateConfig(display);
      }, []);
      return (
        <ConfigProvider>
          <ResponsivePadding top='lg' bottom='md' left='sm' right='xs'>
            <p>d</p>
          </ResponsivePadding>
        </ConfigProvider>
      );
    };
    const { container } = render(<Content />);
    expect(container).not.toBeNull();
  });
});
