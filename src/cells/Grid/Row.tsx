import React, { useContext } from 'react';
import styled from 'styled-components';
import GridContext from './GridProvider';

interface DivProps {
  gap: number;
}
const Div = styled.div < DivProps > `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

/** Row component */
interface RowProps {
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
const Row = ({
  children = null,
  style = {},
  ...rest
}: RowProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { gap } = useContext(GridContext);

  return (
    <Div style={style} gap={gap} {...rest}>
      {children}
    </Div>
  );
};

export default Row;
