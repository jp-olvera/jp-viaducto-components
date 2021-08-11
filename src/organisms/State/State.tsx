import React from 'react';
import {
  Button, Paragraph, Title, Spacer,
} from '../../cells';

interface StateProps {
  /** shapeColor to apply in teh button */
  buttonLabel: string;
  /** children */
  children?: React.ReactNode;
  /** action to call when clicking the button */
  clickHandler: (param?: any) => void;
  /** text to show as the description */
  description: string;
  /** Flex direction to show the content */
  direction?: 'row' | 'column';
  /** shapeColor to apply in the button */
  shapeColor?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'tab';
  /** title for the empty state */
  title: string;
}

/**
 * A component to represent states like empty state, success state or error state
 */
const State = ({
  children,
  direction = 'row',
  title,
  description,
  shapeColor = 'primary',
  buttonLabel,
  clickHandler,
}: StateProps) => {
  let actualDirection = direction;
  if (direction !== 'row' && direction !== 'column') {
    actualDirection = 'row';
  }
  return (
    <div style={{ display: 'flex', flexDirection: actualDirection }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
      <Spacer
        direction={actualDirection === 'row' ? 'horizontal' : 'vertical'}
        size='lg'
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: actualDirection === 'row' ? 'flex-start' : 'center',
          justifyContent: 'center',
        }}
      >
        <Spacer size='md' />
        <Title level='2'>{title}</Title>
        <Spacer size='md' />

        <Paragraph size='lg'>{description}</Paragraph>
        <Spacer size='md' />

        <Button
          label={buttonLabel}
          shapeColor={shapeColor}
          onClick={() => {
            clickHandler();
          }}
        />
        <Spacer size='md' />
      </div>
    </div>
  );
};

export default State;
