import React from 'react';
import { Button, Paragraph, Title, Spacer } from '..';

export interface State extends React.HTMLAttributes<HTMLDivElement> {
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
  shapeColor?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'tab';
  /** Size to apply to the spacer between title and description */
  spacerSize?:
    | 'none'
    | 'nano'
    | 'micro'
    | 'tiny'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'xxxl';
  /** title for the empty state */
  title: string;
  /** Level for title */
  titleLevel?: '1' | '2' | '3' | '4' | '5' | '6' | 'D1' | 'D2' | 'D3' | 'D4';
}

/**
 * A component to represent states like empty state, success state or error state
 */
const State = ({
  children,
  direction = 'row',
  title,
  titleLevel = '2',
  description,
  shapeColor = 'primary',
  buttonLabel,
  spacerSize = 'md',
  clickHandler,
  ...rest
}: State) => {
  const className = rest.className || '';
  return (
    <div
      {...rest}
      style={{ ...rest.style, display: 'flex', flexDirection: direction }}
      className={`fui-redlines ${className}`}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
      <Spacer direction={direction === 'row' ? 'horizontal' : 'vertical'} size='lg' />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: direction === 'row' ? 'flex-start' : 'center',
          justifyContent: 'center',
        }}
      >
        <Spacer size='md' />
        <Title level={titleLevel}>{title}</Title>
        <Spacer size={spacerSize} />

        <Paragraph size='lg'>{description}</Paragraph>
        <Spacer size={spacerSize} />

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
