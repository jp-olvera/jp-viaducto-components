/* eslint-env jest */

import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { Pagination } from '..';
import { Button } from '../../..';
const CustomRender = (
  current: number,
  type: any,
  element: any,
  extra: { disabled: boolean; isActive: boolean }
) => {
  return element === '...' ? (
    <span style={{ padding: '0 5px', marginRight: 8 }}>{element}</span>
  ) : (
    <Button
      label={element}
      size='small'
      variant={extra?.isActive ? 'solid' : 'outline'}
      disabled={extra?.disabled}
      style={{ marginRight: 8 }}
    />
  );
};
describe('<Pagination/> component', () => {
  test('should render properly', () => {
    const { getByText } = render(<Pagination totalPages={10} siblings={0} iconRight='ICON' />);
    expect(getByText('1')).toBeInTheDocument();
  });
  test('should render pagination with custom item renderer', () => {
    const pageChange = jest.fn();
    const { container, getByText } = render(
      <Pagination
        totalPages={5}
        siblings={0}
        iconLeft='AAAA'
        itemRender={CustomRender}
        onPageChange={pageChange}
      />
    );
    fireEvent.click(getByText('2'));
    expect(container).toBeInTheDocument();
  });
  test('should render pagination with custom item renderer with 10 pages', () => {
    const pageChange = jest.fn();
    const { container, getByText } = render(
      <Pagination
        totalPages={10}
        siblings={1}
        itemRender={CustomRender}
        onPageChange={pageChange}
      />
    );
    fireEvent.click(getByText('>'));
    expect(container).toBeInTheDocument();
  });
  test('should render pagination with 0 pages', () => {
    const pageChange = jest.fn();
    const { container } = render(
      <Pagination totalPages={0} siblings={1} itemRender={CustomRender} onPageChange={pageChange} />
    );
    expect(container).toBeInTheDocument();
  });
  // test('should not render pagination', () => {
  //   const { container } = render(<Pagination totalPages={0} siblings={0} />);
  //   expect(container).not.toHaveTextContent('1');
  // });
  // test('should change page from 1 to 10', () => {
  //   const { getByTestId, getByText } = render(
  //     <Pagination
  //       totalPages={10}
  //       siblings={1}
  //       nextLabel
  //       iconRight={null}
  //       previousLabel
  //       iconLeft={null}
  //     />
  //   );
  //   const next = getByTestId('r-icon');
  //   fireEvent.click(next);
  //   expect(getByText('2')).toBeInTheDocument();
  //   fireEvent.click(next);
  //   expect(getByText('3')).toBeInTheDocument();
  //   fireEvent.click(next);
  //   fireEvent.click(next);
  //   fireEvent.click(next);
  //   fireEvent.click(next);
  //   fireEvent.click(next);
  //   fireEvent.click(next);
  //   fireEvent.click(next);
  //   expect(getByText('10')).toBeInTheDocument();
  // });
  // test('should change page with no siblings', () => {
  //   const { getByTestId, getByText } = render(<Pagination totalPages={5} siblings={0} />);
  //   const next = getByTestId('r-icon');
  //   fireEvent.click(next);
  //   expect(getByText('2')).toBeInTheDocument();
  //   fireEvent.click(next);
  //   expect(getByText('3')).toBeInTheDocument();
  //   fireEvent.click(next);
  //   fireEvent.click(next);
  //   expect(getByText('5')).toBeInTheDocument();
  // });
  // test('should return to page 1 from page 2', () => {
  //   const { getByTestId, getByText } = render(<Pagination totalPages={15} siblings={0} />);
  //   const next = getByTestId('r-icon');
  //   const last = getByTestId('l-icon');
  //   fireEvent.click(next);
  //   expect(getByText('2')).toBeInTheDocument();
  //   fireEvent.click(last);
  //   expect(getByText('1')).toBeInTheDocument();
  //   fireEvent.click(next);
  //   fireEvent.click(next);
  //   fireEvent.click(next);
  //   fireEvent.click(next);
  //   fireEvent.click(next);
  //   expect(getByText('15')).toBeInTheDocument();
  // });
  // test('should call onPageChange function', () => {
  //   const mockFn = jest.fn();
  //   const { getByTestId, getByText } = render(
  //     <Pagination totalPages={15} siblings={0} onPageChange={mockFn} />
  //   );
  //   const next = getByTestId('r-icon');
  //   fireEvent.click(next);
  //   fireEvent.click(next);
  //   fireEvent.click(next);
  //   expect(getByText('4')).toBeInTheDocument();
  //   expect(mockFn).toHaveBeenCalled();
  // });
  // test('should click first and last page item', () => {
  //   const { getByText } = render(<Pagination totalPages={25} siblings={1} position='start' />);
  //   fireEvent.click(getByText('1'));
  //   fireEvent.click(getByText('25'));
  //   expect(getByText('1')).toBeInTheDocument();
  //   expect(getByText('25')).toBeInTheDocument();
  // });
  // test('should click a page item', () => {
  //   const { getByTestId, getByText } = render(
  //     <Pagination totalPages={13} siblings={1} position='end' />
  //   );
  //   const next = getByTestId('r-icon');
  //   fireEvent.click(next);
  //   fireEvent.click(getByText('2'));
  //   fireEvent.click(next);
  //   fireEvent.click(next);
  //   expect(getByText('1')).toBeInTheDocument();
  // });
});
