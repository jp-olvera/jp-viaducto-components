import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import GridContext from './GridProvider';

interface DivProps {
  size: number;
  gap: number;
}
const Div = styled.div < DivProps > `
  ${(p) => getStyle(p.size, p.gap)};
`;

const getStyle = (size: number, gap: number) => {
  if (size > 0 && size <= 12) {
    const width = (size * 100) / 12;
    return css`
      flex-grow: 0;
      flex-shrink: 0;
      /* width: calc(${width}% - ${gap}px); */
      flex-basis: calc(${width}% - ${gap}px);
      margin: 0 ${gap / 2}px;
    `;
  }
  return css`
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0%;
    margin: 0 ${gap / 2}px;
  `;
};

interface ColumnProps {
  children?: React.ReactNode;
  size?: number;
  style?: any;
}

const Column = ({
  children = null,
  size = 0,
  style = {},
  ...rest
}: ColumnProps) => {
  const { gap } = useContext(GridContext);

  return (
    <Div size={size} style={style} gap={gap} {...rest}>
      {children}
    </Div>
  );
};

export default Column;
