/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../test-utils';
import { ConfigProvider, ConfigContext } from '..';

describe('<ConfigProvider/>', () => {
  test('should create snapshot of ConfigContext', () => {
    const updateConfig = jest.fn();
    const { container } = render(
      <ConfigContext.Provider value={{ updateConfig }}>
        <div>AAAAA</div>
      </ConfigContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
  test('should create snapshot ConfigProvider', () => {
    const setState = jest
      .fn()
      .mockImplementation(() => ({ spacing: { hola: '1rem' } }));
    const useStateMock = jest.spyOn(React, 'useState');
    useStateMock.mockImplementation((init) => [
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
});
