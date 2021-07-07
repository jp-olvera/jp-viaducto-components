import React, { useContext } from 'react';

import { ConfigContext } from '../../providers';
import { StyledTable } from './StyledTable';

/**
 * WrapperTable is a helper component to style the tables
 * @param {string} align
 * @param {string} background
 * @param {string} border
 * @param {string} borderColor
 * @param {string} colorSelected
 * @param {string} headerColor
 * @param {number} headerElevation
 * @param {boolean} headerFixed
 * @param {string} headerPadding
 * @param {string} horizontalSpacing
 * @param {string} minHeight
 * @param {string} textHeaderColor
 * @param {string} verticalSpacing
 * @param {boolean} zebraHover
 * @param {string} zebraColor
 * @param {string} zebra
 * @param {string} zebraHoverColor
 * @param {string} fontSize
 * @param {string} family
 * @param {any} children
 */
interface TableInterface {
  align?: string;
  background?: string;
  border?: string;
  borderColor?: string;
  colorSelected?: string;
  headerColor?: string;
  headerElevation?: number;
  headerFixed?: boolean;
  headerPadding?: string;
  horizontalSpacing?: string;
  minHeight?: string;
  textHeaderColor?: string;
  verticalSpacing?: string;
  zebraHover?: boolean;
  zebraColor?: string;
  zebra?: boolean;
  zebraHoverColor?: string;
  fontSize?: string;
  family?: string;
  children: any;
}

const Wrapper = ({
  align = 'left',
  background = '#fff',
  border = 'all',
  borderColor = '#eaecef',
  colorSelected = '#FFF1A5',
  headerColor = '#fff',
  headerElevation = 0,
  headerFixed = false,
  headerPadding,
  horizontalSpacing = 'sm',
  minHeight = '4.8rem',
  textHeaderColor = '#5A5A5A',
  verticalSpacing = 'sm',
  zebraHover = true,
  zebraColor = '#F6F8FA',
  zebraHoverColor = '#D1D5DA',
  zebra = true,
  fontSize = 'md',
  family,
  children,
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
      headerColor={headerColor}
      headerElevation={headerElevation}
      headerFixed={headerFixed}
      horizontalSpacing={horizontalSpacing}
      minHeight={minHeight}
      textHeaderColor={textHeaderColor}
      zebraHover={zebraHover}
      zebraColor={zebraColor}
      zebraHoverColor={zebraHoverColor}
      verticalSpacing={verticalSpacing}
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
