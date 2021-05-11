import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../../test-utils';
import { Modal } from '..';

describe('<Modal></Modal>', () => {
  test('should not be visible', () => {
    render(<Modal></Modal>);
    expect(screen.getByTestId('overlay')).not.toBeVisible();
    expect(screen.getByTestId('modal')).not.toBeVisible();
  });
  test('should be visible', () => {
    render(<Modal active={true}></Modal>);
    expect(screen.getByTestId('overlay')).toBeVisible();
    expect(screen.getByTestId('modal')).toBeVisible();
  });
  test('controls should be visible', () => {
    const onReject = jest.fn();
    render(<Modal active={true} onReject={onReject}></Modal>);
    expect(screen.getByTestId('controls')).toBeVisible();
  });
  test('click close button should close the modal', () => {
    render(<Modal active={true}></Modal>);
    fireEvent.click(screen.getByTestId('close-button'));
    expect(screen.getByTestId('overlay')).not.toBeVisible();
    expect(screen.getByTestId('modal')).not.toBeVisible();
  });
  test('click on the overlay should close the modal', () => {
    render(<Modal active={true}></Modal>);
    fireEvent.click(screen.getByTestId('overlay'));
    expect(screen.getByTestId('overlay')).not.toBeVisible();
    expect(screen.getByTestId('modal')).not.toBeVisible();
  });
});
