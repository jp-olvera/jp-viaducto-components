import React, { useContext } from 'react';

import { ConfigContext } from '../../providers';
import { StyledTable } from './StyledTable';

interface TableInterface {
  /** text-align */
  align?: string;
  /** background-color */
  background?: string;
  /** border style, all, vertical, horizontal, none */
  border?: string;
  /** border-color */
  borderColor?: string;
  /** children */
  children: any;
  /** background-color to apply when a tr has the ``.selected`` className */
  colorSelected?: string;
  /** Responsive font size to apply */
  fontSize?: string;
  /** font-family */
  family?: string;
  /**  horizontal padding to apply based on de spacing configuration */
  horizontalSpacing?: string;
  /** boolean to enable hover style */
  hover?: boolean;
  /** Color to apply on the when zebra is enabled */
  hoverColor?: string;
  /**  vertical padding to apply based on de spacing configuration */
  verticalSpacing?: string;
  /** boolean to enable the zebra style */
  zebra?: boolean;
  /** color to apply when zebra is enabled */
  zebraColor?: string;
}

/** WrapperTable is a helper component to style your tables */
const Wrapper = ({
  align = 'left',
  background = '#fff',
  border = 'all',
  borderColor = '#eaecef',
  colorSelected = '#FFF1A5',
  fontSize = 'md',
  family,
  horizontalSpacing = 'sm',
  hover = true,
  hoverColor = '#D1D5DA',
  children,
  verticalSpacing = 'sm',
  zebra = true,
  zebraColor = '#F6F8FA',
  ...rest
}: TableInterface) => {
  const { configuration } = useContext(ConfigContext);
  return (
    <StyledTable
      align={align}
      background={background}
      border={border}
      borderColor={borderColor}
      configuration={configuration}
      colorSelected={colorSelected}
      hover={hover}
      zebraColor={zebraColor}
      hoverColor={hoverColor}
      verticalSpacing={verticalSpacing}
      horizontalSpacing={horizontalSpacing}
      fontSize={fontSize}
      family={family}
      zebra={zebra}
      {...rest}
    >
      {children}
    </StyledTable>
  );
};

export default Wrapper;
