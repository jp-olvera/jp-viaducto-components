import React, {
  useMemo, useEffect, forwardRef, useRef, useState,
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
  useFilters,
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
import { Input, Button } from '../../cells';

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
    useFilters,
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
                  <div>
                    {column.canFilter ? column.render('Filter') : null}
                  </div>
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

export default Table;
