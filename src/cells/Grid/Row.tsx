import React, { useContext } from 'react';
import styled from 'styled-components';
import GridContext from './GridProvider';

interface DivProps {
  gap: number;
}
const Div = styled.div<DivProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

/** Row component */
export interface Row extends React.HTMLAttributes<HTMLDivElement> {
  /** Child element */
  children?: React.ReactNode;
  /** CSS style object */
  style?: React.CSSProperties;
}

/**
 * Row component
 * @param {React.ReactNode} children Child element
 * @param {React.CSSProperties} style CSS style object
 */
const Row = ({ children = null, style = {}, ...rest }: Row) => {
  const { gap } = useContext(GridContext);
  const className = rest.className || '';
  return (
    <Div {...rest} style={style} gap={gap} className={`fui-redlines ${className}`}>
      {children}
    </Div>
  );
};

export default Row;
