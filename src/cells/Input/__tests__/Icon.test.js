/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../../test-utils';
import { Icon } from '..';

describe('<Icon/>', () => {
  test('should be visible with Upload icon', () => {
    render(<Icon icon='upload' />);
    expect(screen.getByTitle('Upload')).toBeInTheDocument();
  });
  test('should be visible with card Icon', () => {
    render(<Icon icon='card' />);
    expect(screen.getByTitle('Credit Card')).toBeInTheDocument();
  });
  test('should be visible with color Icon', () => {
    render(<Icon icon='color' />);
    expect(screen.getByTitle('Drop')).toBeInTheDocument();
  });
  test('should be visible with date Icon', () => {
    render(<Icon icon='date' />);
    expect(screen.getByTitle('Calendar')).toBeInTheDocument();
  });
  test('should be visible with search Icon', () => {
    render(<Icon icon='search' />);
    expect(screen.getByTitle('Search')).toBeInTheDocument();
  });
  test('should be visible with data Icon', () => {
    render(<Icon icon='data' />);
    expect(screen.getByTitle('Cut')).toBeInTheDocument();
  });
  test('should be visible with loading Icon', () => {
    render(<Icon icon='loading' />);
    expect(screen).not.toBeNull();
  });
  test('should be visible with data Icon', () => {
    render(<Icon icon='verified' />);
    expect(screen).not.toBeNull();
  });
  test('should be visible with data Icon', () => {
    render(<Icon icon='cancel' />);
    expect(screen).not.toBeNull();
  });
  test('should be visible with phone icon', () => {
    render(<Icon icon='phone' />);
    expect(screen.queryByText('phone')).not.toBeInTheDocument();
  });
  test('should be visible with mail icon', () => {
    render(<Icon icon='mail' />);
    expect(screen.queryByText('mail')).not.toBeInTheDocument();
  });
  test('should be visible with time icon', () => {
    render(<Icon icon='time' />);
    expect(screen.queryByText('time')).not.toBeInTheDocument();
  });
  test('should be visible with grid icon', () => {
    render(<Icon icon='grid' />);
    expect(screen.queryByText('grid')).not.toBeInTheDocument();
  });
  test('should be visible with warning icon', () => {
    render(<Icon icon='warning' />);
    expect(screen.queryByText('warning')).not.toBeInTheDocument();
  });
  test('should be visible with ok icon', () => {
    render(<Icon icon='ok' />);
    expect(screen.queryByText('ok')).not.toBeInTheDocument();
  });
  test('should be visible with required icon', () => {
    render(<Icon icon='required' />);
    expect(screen.queryByText('error')).not.toBeInTheDocument();
  });
  test('should not render Icon', () => {
    render(<Icon />);
    expect(screen.queryByText('time')).not.toBeInTheDocument();
  });
  describe('render cards svgs', () => {
    test('should render visa svg', () => {
      const { container } = render(<Icon icon='visa' />);
      expect(container).not.toBeNull();
    });
    test('should render mastercard svg', () => {
      const { container } = render(<Icon icon='mastercard' />);
      expect(container).not.toBeNull();
    });
    test('should render american-express svg', () => {
      const { container } = render(<Icon icon='american-express' />);
      expect(container).not.toBeNull();
    });
  });
});
