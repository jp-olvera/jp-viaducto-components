import React, { useContext } from 'react';

import { ConfigContext } from '../../providers';
import { StyledTable } from './StyledTable';

interface TableInterface {
  align?: string;
  background?: string;
  border: string;
  borderColor?: string;
  columns: [any];
  colorSelected?: string;
  data: [any];
  headerColor?: string;
  headerElevation?: number;
  headerFixed?: boolean;
  headerPadding?: string;
  horizontalSpacing: string;
  minHeight?: string;
  textHeaderColor?: string;
  verticalSpacing: string;
  withGlobalFilter: boolean;
  zebra?: boolean;
  zebraHover?: boolean;
  zebraColor?: string;
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
  columns,
  data,
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
      {...rest}
    >
      {children}
    </StyledTable>
  );
};

export default Wrapper;
