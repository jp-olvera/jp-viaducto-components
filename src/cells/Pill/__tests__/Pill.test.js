/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { render, screen } from '../../../test-utils';
import { Pill } from '..';

describe('<Pill/>', () => {
  test('should render properly', () => {
    render(<Pill label='Pill' />);
    expect(screen.queryByText('Pill')).toBeVisible();
  });
  test('should render Pill with icon', () => {
    render(<Pill label='Accept' icon='' iconLead='' handleAction={null} family={null} />);
    expect(screen.queryByText('Accept')).toBeVisible();
  });
  test('should render Pill with icon lead', () => {
    render(<Pill label='Accept' iconLead='=>' icon='lol' handleAction={() => { }} />);
    expect(screen.queryByText('=>')).toBeVisible();
  });
  test('should render Pill without label with icon lead', () => {
    render(<Pill iconLead='Icon' family='Roboto' />);
    expect(screen.queryByText('Icon')).toBeVisible();
  });
  test('should render Pill with several props', () => {
    render(<Pill icon='iconBig' label={null} background='#000' color='red' size='sm' verticalAlign='middle' iconLead='😊' />);
    expect(screen.queryByText('iconBig')).toBeVisible();
  });
});
