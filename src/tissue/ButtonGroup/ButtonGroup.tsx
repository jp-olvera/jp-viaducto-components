import { Button, ConfigContext } from '../../';
import React, { useContext, useEffect } from 'react';
import { StyledButtonGroup } from './StyledButtonGroup';

/** ButtonGroup is a wrapper to give style to Button components */
export interface ButtonGroup extends React.HTMLAttributes<HTMLDivElement> {
  /** Extends the ShapeColor prop to all buttons */
  shapeColor?: null | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'tab';
  /** Buttons as a children components */
  children: React.ReactNode[];
  /** Colors to use on the buttons instead ShapeColor values*/
  colors?: { default: string; hover: string; click: string; text: string; shadow?: string };
}
const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroup>(
  ({ shapeColor = 'primary', children, colors, ...rest }: ButtonGroup, ref) => {
    if (!children) {
      throw Error('You must provide two or more button components as children of ButtonGroup');
    }
    const { configuration } = useContext(ConfigContext);
    const nodes = React.Children.toArray(children).filter((child) => React.isValidElement(child));
    if (nodes.length <= 1) {
      throw Error('You must provide two or more button components as children of ButtonGroup');
    }
    const className = rest.className || '';
    return (
      <StyledButtonGroup
        configuration={configuration}
        shapeColor={shapeColor}
        {...rest}
        ref={ref}
        className={`fui-redlines ${className}`}
      >
        {React.Children.map<React.ReactNode, React.ReactNode>(
          children,
          (child: React.ReactNode) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                shapeColor,
                colors,
              });
            } else
              throw Error(
                'You must provide two or more button components as children of ButtonGroup'
              );
          }
        )}
      </StyledButtonGroup>
    );
  }
);

export default ButtonGroup;
