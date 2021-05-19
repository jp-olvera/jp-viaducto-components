import React, {
  useContext,
  useMemo,
  useEffect,
  forwardRef,
  useRef,
  useState,
} from 'react';
import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  useAsyncDebounce,
  usePagination,
  useColumnOrder,
  useBlockLayout,
  useResizeColumns,
  useExpanded,
} from 'react-table';
import {
  Apps,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'react-ikonate';

import { Button, Input, Avatar } from '../../cells';
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
const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, ...rest }: any, ref: any) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate;
      }
    }, [resolvedRef, indeterminate]);

    return <input type='checkbox' ref={resolvedRef} {...rest} />;
  },
);

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [definitionValue, setValue] = useState(globalFilter);
  const onChangeVal = useAsyncDebounce((e) => {
    setGlobalFilter(e);
  }, 0);

  return (
    <Input
      label='Search'
      icon='search'
      value={definitionValue || ''}
      onChange={(e: any) => {
        setValue(e.target.value);
        onChangeVal(e.target.value);
      }}
    />
  );
};

const Table = ({
  columns: userColumns,
  data,
  padding,
  renderRowSubComponent,
  zebra,
}: any) => {
  const defaultColumn = useMemo(
    () => ({
      minWidth: 160,
      width: 179,
      maxWidth: 400,
    }),
    [],
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    setColumnOrder,
    visibleColumns,
    allColumns,
    getToggleHideAllColumnsProps,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns: userColumns,
      data,
      defaultColumn,
    },
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
    useColumnOrder,
    useBlockLayout,
    useResizeColumns,
    useRowSelect,
    (hooks: any) => {
      hooks.visibleColumns.push((oldColumns: any) => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div style={{ userSelect: 'none' }}>
              Select all
              <span>
                <IndeterminateCheckbox
                  {...getToggleAllRowsSelectedProps()}
                  size='sm'
                />
              </span>
            </div>
          ),
          Cell: ({ row }) => (
            <div style={{ width: '100%', height: '100%', display: 'block' }}>
              <IndeterminateCheckbox
                {...row.getToggleRowSelectedProps()}
                size='sm'
              />
            </div>
          ),
        },
        ...oldColumns,
      ]);
    },
  );
  const [draggedId, setDraggedId] = useState<null | string>(null);
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.classList.contains('dropzone')) {
      e.target.parentNode.classList.add('dragColor');
      e.target.parentNode.classList.remove('dragNocolor');
    }
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.classList.contains('dropzone')) {
      e.target.parentNode.classList.remove('dragColor');
      e.target.parentNode.classList.add('dragNocolor');
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.classList.contains('dropzone')) {
      e.target.parentNode.classList.remove('dragColor');
      e.target.parentNode.classList.add('dragNocolor');
      if (draggedId && id) {
        let id1, id2;
        for (let i = 0; i < visibleColumns.length; i++) {
          if (visibleColumns[i].id === draggedId) {
            id1 = i;
          } else if (visibleColumns[i].id === id) {
            id2 = i;
          }
        }
        const newOrder = visibleColumns.map((d) => d.id);
        newOrder[id2] = draggedId;
        newOrder[id1] = id;
        setColumnOrder(newOrder);
      }
    }
    // console.log('Lo soltaste en:', id);
    // console.log(e.target);
  };
  const handleDragStart = (e, id) => {
    e.stopPropagation();
    // console.log('Estás moviendo:', id);
    e.target.parentNode.classList.add('dragStart');
    e.target.parentNode.classList.remove('dragEnd');
    setDraggedId(id);
  };
  const handleDragEnd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.parentNode.classList.remove('dragStart');
    e.target.parentNode.classList.add('dragEnd');
  };

  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <div>
          <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} /> Toggle
          All
        </div>
        {allColumns.map((column) => (
          <div key={column.id}>
            <label htmlFor={column.id}>
              <input
                id={column.id}
                type='checkbox'
                {...column.getToggleHiddenProps()}
              />{' '}
              {column.id === 'selection' ? 'Selection' : column.Header}
            </label>
          </div>
        ))}
        <br />
        <GlobalFilter
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <br />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(
            (headerGroup: any) => headerGroup.headers[0].Header !== '' && (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '100%',
                      padding: `${padding || '.9rem'}`,
                    }}
                    draggable={column.id !== 'selection'}
                    onDragStart={(ev) => {
                      handleDragStart(ev, column.id);
                    }}
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={(ev) => {
                      handleDrop(ev, column.id);
                    }}
                    onDragEnd={handleDragEnd}
                    className={column.id !== 'selection' ? 'dropzone' : ''}
                  >
                    <Apps />
                    <span style={{ marginRight: 'auto' }}>
                      {column.render('Header')}
                    </span>

                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowDown />
                      ) : (
                        <ArrowUp />
                      )
                    ) : (
                      '  '
                    )}
                  </div>
                  <div
                    {...column.getResizerProps()}
                    className={`resizer ${
                      column.isResizing ? 'isResizing' : ''
                    }`}
                  />
                </th>
              ))}
            </tr>
            ),
          )}
        </thead>
        <tbody {...getTableBodyProps()} className={zebra ? 'zebra' : ''}>
          {page.map((row: any, index: number) => {
            prepareRow(row);
            const props = row.getRowProps();
            return (
              <React.Fragment key={`Row${index}`}>
                <tr
                  {...props}
                  className={`${row.isSelected ? 'selected' : ''}`}
                  {...row.getToggleRowExpandedProps()}
                >
                  {row.cells.map((cell: any) => (
                    <td
                      {...cell.getCellProps()}
                      className={typeof cell.value === 'number' ? 'size' : ''}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={10}>
              <div className='pagination'>
                <Button
                  variant='info'
                  icon={<ChevronsLeft />}
                  onClick={() => gotoPage(0)}
                  type='button'
                  disabled={!canPreviousPage}
                />
                <Button
                  variant='info'
                  icon={<ChevronLeft />}
                  type='button'
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                />
                <Button
                  variant='info'
                  type='button'
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  icon={<ChevronRight />}
                />
                <Button
                  variant='info'
                  icon={<ChevronsRight />}
                  type='button'
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                />
                <span className='page'>
                  Page{' '}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{' '}
                </span>
                <span>
                  <Input
                    type='number'
                    defaultValue={pageIndex + 1}
                    label='Go to page:'
                    onChange={(e) => {
                      const newPage = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(newPage);
                    }}
                    style={{ width: '300px' }}
                  />
                </span>
                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                >
                  {[10, 20, 30, 40, 50].map((newPageSize) => (
                    <option key={newPageSize} value={newPageSize}>
                      Show {newPageSize}
                    </option>
                  ))}
                </select>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

const Wrapper = ({
  background,
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

  const columns = useMemo(
    () => [
      {
        Header: 'First name',
        accessor: 'firstName',
      },
      {
        Header: 'Last name',
        accessor: 'lastName',
      },
      {
        Header: 'Salary',
        accessor: 'salary',
      },
      {
        Header: 'Percent',
        accessor: 'percent',
      },
    ],
    [],
  );
  const data = useMemo(
    () => [
      {
        salary: 1881.2,
        percent: 51,
        firstName: 'Juan',
        lastName: 'Olvera',
        id: 'OAUTH|FEWFEW',
      },
      {
        salary: 802.2,
        percent: 52,
        firstName: 'Jorge',
        lastName: 'Rojas',
        id: 'OAUTH|sdfdgtr',
      },
      {
        salary: 803.2,
        percent: 53,
        firstName: 'Lalo',
        lastName: 'Mora',
        id: 'OAUTH|661615',
      },
      {
        salary: 43.2,
        percent: 54,
        firstName: 'José',
        lastName: 'José',
        id: 'OAUTH|661615',
      },
      {
        salary: 84.2,
        percent: 55,
        firstName: 'Ana',
        lastName: 'Bárbara',
        id: 'OAUTH|66161sdf',
      },
      {
        salary: 80.2,
        percent: 56,
        firstName: 'Leo',
        lastName: 'Dan',
        id: 'OAUTH|661615sd',
      },
      {
        salary: 834.2,
        percent: 85,
        firstName: 'Leo',
        lastName: 'Arcos',
        id: 'OAUTH|661sdfs615',
      },
      {
        salary: 30.2,
        percent: 100,
        firstName: <Avatar src='https://i.pravatar.cc/50' />,
        lastName: 'Fernández',
        id: 'OAUTH|6616aa15',
      },
      {
        salary: 60.2,
        percent: 1,
        firstName: 'Chalino',
        lastName: 'Sánchez',
        id: 'OAUTH|a125615',
      },
      {
        salary: 870.2,
        percent: 0,
        firstName: 'Jennifer',
        lastName: 'Rivera',
        id: 'OAUTH|s1s25615',
      },
      {
        salary: 888.2,
        percent: 50,
        firstName: 'Lola',
        lastName: 'Beltrán',
        id: 'OAUTH|c125615',
      },
      {
        salary: 67.2,
        percent: 5,
        firstName: 'Benito',
        lastName: 'Juárez',
        id: 'OAUTH|v125615',
      },
      {
        salary: 88.2,
        percent: 550,
        firstName: 'Ricardo',
        lastName: 'Anaya',
        id: 'OAUTH|b125615',
      },
      {
        salary: 996.2,
        percent: 3,
        firstName: 'Mariana',
        lastName: 'Rodríguez',
        id: 'OAUTH|n125615',
      },
      {
        salary: 80.2,
        percent: 50,
        firstName: 'Bronco',
        lastName: 'El gigante de América',
        id: 'OAUTH|h125615',
      },
    ],
    [],
  );
  const renderRowSubComponent = React.useCallback(
    ({ row }) => <p>{row.values.firstName}</p>,
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
        columns={columns}
        data={data}
        zebra={zebra}
        renderRowSubComponent={renderRowSubComponent}
        padding={headerPadding}
      />
    </StyledTable>
  );
};

export default Wrapper;
