import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../test-utils';
import { TypeIcon } from '..';

describe('<TypeIcon/>', () => {
  test('should return checkbox icon with success type', () => {
    const { getByTestId } = render(<TypeIcon type="success" />);
    expect(getByTestId('checkbox'));
  });
  test('should return FolderWarning icon with success type', () => {
    const { getByTestId } = render(<TypeIcon type="warning" />);
    expect(getByTestId('folderwarning'));
  });
  test('should return error icon with success type', () => {
    const { getByTestId } = render(<TypeIcon type="danger" />);
    expect(getByTestId('error'));
  });
  test('should return help icon with success type', () => {
    const { getByTestId } = render(<TypeIcon type="info" />);
    expect(getByTestId('help'));
  });
  test('should return help icon without type', () => {
    const { getByTestId } = render(<TypeIcon />);
    expect(getByTestId('help'));
  });
});
