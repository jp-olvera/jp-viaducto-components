import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { render, screen } from '../../../test-utils';
import { Pill } from '..';

describe('<Pill/>', () => {
  test('should render properly', () => {
    render(<Pill label="Pill" />);
    expect(screen.queryByText('Pill')).toBeVisible();
  });
  test('should render Pill with icon', () => {
    render(<Pill label="Accept" icon="<" />);
    expect(screen.queryByText('<')).toBeVisible();
  });
  test('should render Pill with icon lead', () => {
    render(<Pill label="Accept" iconLead="=>" />);
    expect(screen.queryByText('=>')).toBeVisible();
  });
});
