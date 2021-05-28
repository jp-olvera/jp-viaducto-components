/* istanbul ignore file */

import React, { useContext, useMemo } from 'react';

import Table from './ReactTable';
import { ConfigContext } from '../../providers';
import { StyledTable } from './StyledTable';

interface TableInterface {
  align?: string;
  background?: string;
  border?: string;
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
  buttonVariantColor?: any;
  selectSize?: any;
  selectHeight?: any;
  selectBorder?: any;
  selectFontFamily?: any;
  selectBackground?: any;
  selectColor?: any;
  selectRadius?: any;
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
  withGlobalFilter = true,
  zebra = true,
  zebraHover = true,
  zebraColor = '#F6F8FA',
  zebraHoverColor = '#D1D5DA',
  fontSize = 'md',
  family,
  buttonVariantColor,
  selectSize,
  selectHeight,
  selectBorder,
  selectFontFamily,
  selectBackground,
  selectColor,
  selectRadius,
  ...rest
}: TableInterface) => {
  const { configuration } = useContext(ConfigContext);

  const newColumns = useMemo(() => columns, []);
  const newData = useMemo(() => data, []);

  const renderRowSubComponent = React.useCallback(
    ({ row }) => <p>{row.values.firstName}</p>,
    [],
  );

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
      <Table
        columns={newColumns}
        data={newData}
        padding={headerPadding}
        renderRowSubComponent={renderRowSubComponent}
        withGlobalFilter={withGlobalFilter}
        zebra={zebra}
        buttonVariantColor={buttonVariantColor}
        selectSize={selectSize}
        selectHeight={selectHeight}
        selectBorder={selectBorder}
        selectFontSize={fontSize}
        selectFontFamily={selectFontFamily}
        selectBackground={selectBackground}
        selectColor={selectColor}
        selectRadius={selectRadius}
      />
    </StyledTable>
  );
};

export default Wrapper;
