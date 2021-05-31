/* istanbul ignore file */

import React, {
  useMemo, useEffect, forwardRef, useRef, useState,
} from 'react';
import {
  useTable,
  useRowSelect,
  useSortBy,
  // useGlobalFilter,
  // useAsyncDebounce,
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
  Settings,
} from 'react-ikonate';
import {
  Input, Button, Select, Paragraph,
} from '../../cells';
import { Modal } from '../../organisms';

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

// const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
//   const [definitionValue, setValue] = useState(globalFilter);
//   const onChangeVal = useAsyncDebounce((e) => {
//     setGlobalFilter(e || undefined);
//   }, 200);

//   return (
//     <Input
//       label='Search'
//       icon='search'
//       value={definitionValue || ''}
//       onChange={(e: any) => {
//         setValue(e.target.value);
//         onChangeVal(e.target.value);
//       }}
//     />
//   );
// };

const Table = ({
  columns: userColumns,
  data,
  padding,
  renderRowSubComponent,
  zebra,
  // withGlobalFilter,
  buttonVariantColor,
  selectSize,
  selectHeight,
  selectBorder,
  selectFontSize,
  selectFontFamily,
  selectBackground,
  selectColor,
  selectRadius,
}: any) => {
  const defaultColumn = useMemo(
    () => ({
      minWidth: 160,
      width: 179,
      maxWidth: 400,
    }),
    [],
  );
  const [activeModal, setActiveModal] = useState(false);
  const showModal = () => {
    setActiveModal(!activeModal);
  };
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
    // setGlobalFilter,
    setColumnOrder,
    visibleColumns,
    allColumns,
    getToggleHideAllColumnsProps,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns: userColumns,
      data,
      defaultColumn,
    },
    useFilters,
    // useGlobalFilter,
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
    } else if (e.target.classList.contains('sortable-dropzone')) {
      e.target.classList.add('drag-sort-enter');
    }
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.classList.contains('dropzone')) {
      e.target.parentNode.classList.remove('dragColor');
      e.target.parentNode.classList.add('dragNocolor');
    } else if (e.target.classList.contains('sortable-dropzone')) {
      e.target.classList.remove('drag-sort-enter');
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    const { classList } = e.target;
    if (
      classList.contains('dropzone')
      || classList.contains('sortable-dropzone')
    ) {
      if (classList.contains('dropzone')) {
        e.target.parentNode.classList.remove('dragColor');
        e.target.parentNode.classList.add('dragNocolor');
      } else {
        e.target.classList.remove('drag-sort-enter');
      }
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
  };
  const handleDragStart = (e, id) => {
    e.stopPropagation();
    const { classList } = e.target;
    if (classList.contains('dropzone')) {
      e.target.parentNode.classList.add('dragStart');
      e.target.parentNode.classList.remove('dragEnd');
    } else if (classList.contains('sortable-dropzone')) {
      e.target.classList.add('drag-sort-active');
    }
    setDraggedId(id);
  };
  const handleDragEnd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { classList } = e.target;
    if (classList.contains('dropzone')) {
      e.target.parentNode.classList.remove('dragStart');
      e.target.parentNode.classList.add('dragEnd');
    } else {
      e.target.classList.remove('drag-sort-active');
    }
  };
  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        {/* {withGlobalFilter ? (
          <GlobalFilter
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        ) : null} */}
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
                >
                  {row.cells.map((cell: any) => (
                    <td
                      {...cell.getCellProps()}
                      onClick={
                        cell.column.id === 'selection'
                          ? () => null
                          : () => (row.original.expandible
                            ? row.toggleRowExpanded()
                            : null)
                      }
                      onKeyUp={() => {}}
                      className={`${
                        typeof cell.value === 'number' ? 'size' : ''
                      } ${
                        cell.column.id !== 'selection'
                          ? row.original.expandible
                            ? 'pointer'
                            : ''
                          : ''
                      }`}
                    >
                      {typeof cell.value === 'string'
                      || typeof cell.value === 'number' ? (
                        <span className='td-data'>
                          <Paragraph weight='bold'>
                            {cell.column.prefix}
                          </Paragraph>
                          <Paragraph>{cell.render('Cell')}</Paragraph>
                          <Paragraph weight='bold'>
                            {cell.column.sufix}
                          </Paragraph>
                        </span>
                        ) : (
                          cell.render('Cell')
                        )}
                    </td>
                  ))}
                </tr>
                {row.isExpanded ? (
                  <tr className='expandible'>
                    <td>{renderRowSubComponent({ row })}</td>
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
                  variant={buttonVariantColor}
                  leftSpacing='md'
                  iconSpacing='none'
                  rightSpacing='md'
                  icon={<ChevronsLeft />}
                  onClick={() => gotoPage(0)}
                  type='button'
                  disabled={!canPreviousPage}
                />
                <Button
                  variant={buttonVariantColor}
                  leftSpacing='md'
                  iconSpacing='none'
                  rightSpacing='md'
                  icon={<ChevronLeft />}
                  type='button'
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                />
                <Button
                  variant={buttonVariantColor}
                  leftSpacing='md'
                  iconSpacing='none'
                  rightSpacing='md'
                  type='button'
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  icon={<ChevronRight />}
                />
                <Button
                  variant={buttonVariantColor}
                  leftSpacing='md'
                  iconSpacing='none'
                  rightSpacing='md'
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
                    label='Go to page:'
                    onChange={(e) => {
                      const newPage = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(newPage);
                    }}
                    max={pageOptions.length}
                    min={pageIndex + 1}
                    style={{ width: '300px' }}
                  />
                </span>
                <Select
                  border={selectBorder}
                  size={selectSize}
                  height={selectHeight}
                  fontSize={selectFontSize}
                  fontFamily={selectFontFamily}
                  background={selectBackground}
                  color={selectColor}
                  radius={selectRadius}
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
                </Select>
                <Button
                  onClick={() => {
                    setTimeout(() => {
                      setActiveModal(true);
                    }, 0);
                  }}
                  type='button'
                  variant={buttonVariantColor}
                  icon={<Settings />}
                  iconSpacing='none'
                  leftSpacing='sm'
                  rightSpacing='sm'
                />
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
      <Modal
        title='Customize your table'
        active={activeModal}
        handleActive={showModal}
        maxHeight='500px'
        maxWidth='500px'
      >
        <div>
          <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} /> Toggle
          All
        </div>
        <ul className='draggable-list'>
          {allColumns.map((column) => (
            <li
              key={column.id}
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
              className={column.id !== 'selection' ? 'sortable-dropzone' : ''}
            >
              <label htmlFor={column.id}>
                <input
                  id={column.id}
                  type='checkbox'
                  {...column.getToggleHiddenProps()}
                />{' '}
                {column.id === 'selection' ? 'Selection' : column.Header}
              </label>
              {column.canFilter ? column.render('Filter') : null}
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
};

export default Table;
