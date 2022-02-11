import React, { useContext } from 'react';
import { AvatarWithText } from '../../tissue';
import { Container, Paragraph } from '../../cells';
import { ConfigContext } from '../../providers';
import { StyledNotification } from './StyledNotification';
import { Avatar } from '../../cells/Avatar/Avatar';
import { getMessageDifference } from '../../utils/getDateDifference';

/** Notification component */
export interface Notification extends React.HTMLAttributes<HTMLDivElement> {
  /** Notification's title */
  title: string;
  /** Avatar cell props */
  avatar: Avatar;
  /** Notification date (MM/DD/YYYY HH:MM) always return absolute value, the Date object needs to be minor/equal as today's date. By default, the Time value is Today */
  time?: Date | number;
  /** Some component to add under the notification title, could be a text, JSX component or null */
  description?: any;
  /** Spacing between Avatar and text */
  spacing?: 'none' | 'nano' | 'micro' | 'tiny' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
}

/**
 * Notification component
 * @param {string} title Notification's title
 * @param {Avatar} avatar Avatar cell props
 * @param {Date|number} time Notification date (MM/DD/YYYY HH:MM) always return absolute value, the Date object needs to be minor/equal as today's date. By default, the Time value is Today
 * @param {any} description Some component to add under the notification title, could be a text, JSX component or null
 * @param {string} spacing  Spacing between Avatar and text
 */

const Notification = ({
  title,
  avatar,
  time = new Date(),
  description,
  spacing,
  onClick,
  ...rest
}: Notification) => {
  const { configuration } = useContext(ConfigContext);
  const today = new Date();

  const difference: string = getMessageDifference(today, time);

  const className = rest.className || '';
  return (
    <StyledNotification
      {...rest}
      configuration={configuration}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        /* istanbul ignore else */
        if (onClick) {
          onClick(e);
        }
      }}
      className={`fui-redlines ${className}`}
    >
      <Container vertical='xs' horizontal='xs' expandHorizontal className='notification-hours'>
        <AvatarWithText avatar={avatar} spacing={spacing || 'xs'}>
          <div className='notification-props'>
            <Paragraph lineHeight='100%'>{title}</Paragraph>
            {description}
          </div>
        </AvatarWithText>
        <Paragraph size='xs' color='gray'>
          {difference}
        </Paragraph>
      </Container>
    </StyledNotification>
  );
};

export default Notification;
