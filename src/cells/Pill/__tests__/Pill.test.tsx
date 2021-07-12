/* eslint-env jest */

import React from 'react';

import '@testing-library/react';
import { render, screen } from '../../../test-utils';
import { Pill } from '..';

describe('<Pill/>', () => {
  test('should render properly', () => {
    render(
      <Pill
        label='Pill'
        iconLead=''
        icon=''
        borderColor='red'
        circleBorder={false}
      />,
    );
    expect(screen.queryByText('Pill')).toBeVisible();
  });
  test('should render properly with default props', () => {
    render(<Pill label='Pill' />);
    expect(screen.queryByText('Pill')).toBeVisible();
  });
  test('should render Pill with icon', () => {
    render(
      <Pill
        label='Accept'
        icon='Cion'
        iconLead={null}
        handleAction={null}
        family={null}
      />,
    );
    expect(screen.queryByText('Accept')).toBeVisible();
  });
  test('should render Pill with icon lead', () => {
    render(
      <Pill label='Accept' iconLead='=>' icon='lol' handleAction={() => {}} />,
    );
    expect(screen.queryByText('=>')).toBeVisible();
  });
  test('should render Pill without label with icon lead', () => {
    render(<Pill iconLead='Icon' icon={null} family='Roboto' />);
    expect(screen.queryByText('Icon')).toBeVisible();
  });
  test('should render Pill with several props', () => {
    const { container } = render(
      <Pill
        icon='iconBig'
        background='#000'
        color='red'
        size='sm'
        verticalAlign='middle'
        iconLead='😊'
      />,
    );
    expect(container).toBeVisible();
  });
});
