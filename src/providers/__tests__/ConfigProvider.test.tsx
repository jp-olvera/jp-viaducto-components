/* eslint-env jest */

import React, { useContext, useEffect } from 'react';
import '@testing-library/jest-dom/extend-expect';
import styled from 'styled-components';
import config from '../../utils/config';
import { render } from '../../test-utils';
import { ConfigProvider, ConfigContext } from '..';

describe('<ConfigProvider/>', () => {
  test('should create snapshot of ConfigContext', () => {
    const updateConfig = jest.fn();
    const conf: any = {};
    const { container } = render(
      <ConfigContext.Provider value={{ configuration: conf, updateConfig }}>
        <div>AAAAA</div>
      </ConfigContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
  test('should create snapshot ConfigProvider', () => {
    const setState = jest
      .fn()
      .mockImplementation(() => ({ spacing: { hola: '1rem' } }));
    const useStateMock: any = jest.spyOn(React, 'useState');
    useStateMock.mockImplementation((init: any) => [
      {
        ...init,
        ...{ spacing: { hola: 1 }, toasterPlacement: 'centerFailed' },
      },
      setState,
    ]);
    const { container } = render(
      <ConfigProvider>
        <div>AAAAA</div>
      </ConfigProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  test('should change config', () => {
    const MyComponent = styled.div < any > `
      color: red;
    `;
    const A = () => {
      const { updateConfig } = useContext(ConfigContext);
      const myConfig = {
        ...config,
        breakpoints: {
          // for the media queries
          xs: '20rem', // '320px'
          sm: '36rem', // '576px'
          md: '48rem', // '768px'
          lg: '62rem', // '992px'
          xl: '90rem', // '1440px'
          // ... or any sizes
        },
      };
      useEffect(() => {
        updateConfig(myConfig);
      }, []);

      return (
        <ConfigProvider>
          <MyComponent configuration={myConfig}>Hola</MyComponent>
        </ConfigProvider>
      );
    };

    const { container } = render(<A />);
    expect(container).toMatchSnapshot();
  });
});
