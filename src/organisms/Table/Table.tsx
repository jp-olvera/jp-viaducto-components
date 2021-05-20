import React, { useContext, useMemo } from 'react';

import { dummyColumns, dummyData } from './dummy_data';
import Table from './ReactTable';
import { ConfigContext } from '../../providers';
import { StyledTable } from './StyledTable';

interface TableInterface {
  background?: string;
  headerColor?: string;
  textHeaderColor?: string;
  headerFixed?: boolean;
  border?: string;
  zebra?: boolean;
  zebraHover?: boolean;
  zebraColor?: string;
  zebreHoverColor?: string;
  verticalSpacing: string;
  horizontalSpacing: string;
  align?: string;
  colorSelected?: string;
  borderColor?: string;
  headerElevation?: number;
  minHeight?: string;
  headerPadding?: string;
}

const Wrapper = ({
  background = '#fff',
  headerColor,
  textHeaderColor,
  headerFixed,
  border,
  zebra,
  zebraHover,
  zebraColor,
  zebreHoverColor,
  verticalSpacing,
  align,
  horizontalSpacing,
  colorSelected,
  headerElevation = 0,
  borderColor,
  minHeight = '4.8rem',
  headerPadding,
  ...rest
}: TableInterface) => {
  const { configuration } = useContext(ConfigContext);

  const newColumns = useMemo(() => dummyColumns, []);
  const newData = useMemo(() => dummyData, []);
  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <div style={{ width: '100%' }}>
        <p>{row.values.firstName}</p>
      </div>
    ),
    [],
  );
  return (
    <StyledTable
      configuration={configuration}
      background={background}
      headerColor={headerColor}
      textHeaderColor={textHeaderColor}
      headerFixed={headerFixed}
      border={border}
      zebraHover={zebraHover}
      zebraColor={zebraColor}
      zebreHoverColor={zebreHoverColor}
      verticalSpacing={verticalSpacing}
      horizontalSpacing={horizontalSpacing}
      align={align}
      headerElevation={headerElevation}
      colorSelected={colorSelected}
      borderColor={borderColor}
      minHeight={minHeight}
      {...rest}
    >
      <Table
        columns={newColumns}
        data={newData}
        zebra={zebra}
        renderRowSubComponent={renderRowSubComponent}
        padding={headerPadding}
      />
    </StyledTable>
  );
};

export default Wrapper;
