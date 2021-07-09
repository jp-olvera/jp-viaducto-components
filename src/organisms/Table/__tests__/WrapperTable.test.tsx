/* eslint-env jest */

import React from 'react';

import { render } from '../../../test-utils';
import { WrapperTable } from '..';

describe('<WrapperTable/>', () => {
  const TestTable = () => (
    <table>
      <tbody>
        <tr>
          <th scope='col'>Montasdasdasdasdh</th>
          <th scope='col'>Savings</th>
          <th scope='col'>Savings</th>
          <th scope='col'>Savings</th>
          <th scope='col'>Savings</th>
        </tr>
        <tr>
          <td>Hola</td>
          <td>Header</td>
          <td>Cell</td>
          <td>MyCell</td>
          <td>OtherCell</td>
        </tr>
        <tr>
          <td>Hola</td>
          <td>Cell1,2</td>
          <td>Cell1,3</td>
          <td>Cell 1,4</td>
          <td>Cell 1,5</td>
        </tr>
        <tr>
          <td>Hola</td>
          <td>Cell 2,2</td>
          <td>Cell 2,3</td>
          <td>Cell 2,4</td>
          <td>Cell 2,5</td>
        </tr>
      </tbody>
    </table>
  );
  test('should render properly', () => {
    const { container } = render(
      <WrapperTable>
        <TestTable />
      </WrapperTable>,
    );
    expect(container).toBeVisible();
  });
  test('should render with not default props', () => {
    const { container } = render(
      <WrapperTable
        zebraHover={false}
        verticalSpacing=''
        horizontalSpacing=''
        colorSelected='red'
        family='Arial'
        zebraColor='blue'
        align='center'
        border='none'
      >
        <TestTable />
      </WrapperTable>,
    );
    expect(container).toBeVisible();
  });
  test('should render with horizontal border', () => {
    const { container } = render(
      <WrapperTable
        colorSelected=''
        family='Arial'
        zebraColor='blue'
        align=''
        border='horizontal'
        zebraHover={false}
        verticalSpacing=''
        horizontalSpacing=''
      >
        <TestTable />
      </WrapperTable>,
    );
    expect(container).toBeVisible();
  });
  test('should render with vertical border', () => {
    const { container } = render(
      <WrapperTable
        colorSelected=''
        family='Arial'
        zebraColor='blue'
        align=''
        border='vertical'
        zebra={false}
        zebraHover={false}
        verticalSpacing=''
        horizontalSpacing=''
      >
        <TestTable />
      </WrapperTable>,
    );
    expect(container).toBeVisible();
  });
});
