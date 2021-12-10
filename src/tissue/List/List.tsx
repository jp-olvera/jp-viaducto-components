import React, { ReactNode, useContext } from 'react';
import { Spacer } from '../..';
import { ConfigContext } from '../../providers';
import { FlexList, StyledList, StyledListDiv } from './StyledList';

/** List component */
export interface List extends React.HTMLAttributes<HTMLOrSVGElement> {
  /** ListItem component */
  children: ReactNode | ReactNode[];
  /** List style type for market list item (could be CSS default list, ReactNode<any component> or just a simple string)  */
  listStyle?: string | React.ReactNode;
  /** Color for marker (list-style), only affects to no-custom listStyle */
  markerColor?: string;
  /** Horizontal spacing between listStyle and ListItem (only affects in custom listStyle) */
  horizontalSpacing?:
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
  /**Vertical spacing between each ListItem */
  verticalSpacing?:
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
}

/**
 * List component
 * @param {React.ReactNode} children ListItem component
 * @param {string|React.ReactNode} listStyle List style type for market list item (could be CSS default list, ReactNode<any component> or just a simple string)
 * @param {string} markerColor Color for marker (list-style), only affects to no-custom listStyle
 * @param {string} horizontalSpacing Horizontal spacing between listStyle and ListItem (only affects in custom listStyle)
 * @param {string} verticalSpacing Vertical spacing between each ListItem
 */

const List = ({
  children,
  listStyle = 'disc',
  horizontalSpacing = 'xs',
  verticalSpacing = 'xs',
  markerColor = 'dark',
  ...rest
}: List) => {
  const { configuration } = useContext(ConfigContext);

  const listTypes = [
    'disc',
    'circle',
    'square',
    'decimal',
    'decimal-leading-zero',
    'lower-roman',
    'upper-roman',
    'lower-greek',
    'lower-latin',
    'upper-latin',
    'armenian',
    'georgian',
    'lower-alpha',
    'upper-alpha',
  ];
  const nodes = React.Children.toArray(children).filter((child) => React.isValidElement(child));
  const type = typeof listStyle === 'string' && listTypes.includes(listStyle) ? listStyle : 'none';
  const isDiv = type === 'none';
  return isDiv ? (
    <StyledListDiv
      listStyle={type}
      verticalSpacing={verticalSpacing}
      config={configuration}
      markerColor={markerColor}
      {...rest}
    >
      {nodes.map((child: any, index: number) => {
        return (
          <FlexList key={index}>
            {type === 'none' && listStyle}
            <Spacer size={horizontalSpacing} direction='horizontal' />
            {React.cloneElement(child, {
              as: 'div',
            })}
          </FlexList>
        );
      })}
    </StyledListDiv>
  ) : (
    <StyledList
      listStyle={type}
      verticalSpacing={verticalSpacing}
      config={configuration}
      role='list'
      markerColor={markerColor}
      {...rest}
    >
      {nodes.map((child: any) => {
        return React.cloneElement(child);
      })}
    </StyledList>
  );
};

export default List;
