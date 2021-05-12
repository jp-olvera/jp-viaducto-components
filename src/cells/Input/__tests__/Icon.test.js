import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../../test-utils';
import { Icon } from '..';

describe('<Icon/>', () => {
  test('should be visible with Upload icon', () => {
    render(<Icon icon="upload" />);
    expect(screen.getByTitle('Upload')).toBeInTheDocument();
  });
  test('should be visible with card Icon', () => {
    render(<Icon icon="card" />);
    expect(screen.getByTitle('Credit Card')).toBeInTheDocument();
  });
  test('should be visible with color Icon', () => {
    render(<Icon icon="color" />);
    expect(screen.getByTitle('Drop')).toBeInTheDocument();
  });
  test('should be visible with date Icon', () => {
    render(<Icon icon="date" />);
    expect(screen.getByTitle('Calendar')).toBeInTheDocument();
  });
  test('should be visible with search Icon', () => {
    render(<Icon icon="search" />);
    expect(screen.getByTitle('Search')).toBeInTheDocument();
  });
  test('should be visible with data Icon', () => {
    render(<Icon icon="data" />);
    expect(screen.getByTitle('Cut')).toBeInTheDocument();
  });
  test('should not render Icon', () => {
    render(<Icon />);
    expect(screen.queryByText('time')).not.toBeInTheDocument();
  });
});
