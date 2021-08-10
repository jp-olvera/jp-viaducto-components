import React from 'react';
import { render, fireEvent, axe } from '../../../test-utils';
import { Notification } from '..';
import { AvatarProps } from '../../../cells/Avatar/Avatar';

describe('<Notification/>', () => {
  const avatar: AvatarProps = {
    alt: 'notification-user',
    src: 'https://i.pravatar.cc/100',
  };

  test('should render properly', async () => {
    const { container } = render(
      <Notification
        avatar={avatar}
        title='Test notification'
        time={new Date('10/10/2011')}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
    expect(container).not.toBeNull();
  });
  test('should render with today value time', async () => {
    const { container, queryByText } = render(
      <Notification avatar={avatar} title='Test notification Today value' />,
    );
    expect(await axe(container)).toHaveNoViolations();
    expect(queryByText('Now')).toBeInTheDocument();
  });
  test('should call function onclick', async () => {
    const mockFn = jest.fn();
    const { container } = render(
      <Notification avatar={avatar} title='Testing onclick' onClick={mockFn} />,
    );
    expect(await axe(container)).toHaveNoViolations();
    fireEvent.click(container.querySelector('img'));
    expect(mockFn).toHaveBeenCalled();
  });
});
