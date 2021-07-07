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

interface RowProps {
  children?: React.ReactNode;
  style?: any;
}
const Row = ({ children = null, style = {}, ...rest }: RowProps) => {
  const { gap } = useContext(GridContext);

  return (
    <Div style={style} gap={gap} {...rest}>
      {children}
    </Div>
  );
};

export default Row;
