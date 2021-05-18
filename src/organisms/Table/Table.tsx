import React, {
  useContext,
  useMemo,
  useEffect,
  forwardRef,
  useRef,
  useState,
} from "react";
import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  useAsyncDebounce,
  usePagination,
  useColumnOrder,
} from "react-table";
import { Button, Input } from "../../cells";
import { ConfigContext } from "../../providers";
import { StyledTable } from "./StyledTable";

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
  tableElevation?: number;
  tableElevationDirection?: string;
  colorSelected?: string;
  borderColor?: string;
  headerElevation?: number;
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
      value={definitionValue || ""}
      onChange={(e: any) => {
        setValue(e.target.value);
        onChangeVal(e.target.value);
      }}
    />
  );
};
const Table = ({ columns, data, zebra }: any) => {
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
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useColumnOrder,
    useRowSelect,
    (hooks: any) => {
      hooks.visibleColumns.push((oldColumns: any) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div style={{ userSelect: "none" }}>
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
            <div style={{ width: "100%", height: "100%", display: "block" }}>
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
    if (e.target.classList.contains("dropzone")) {
      e.target.classList.add("dragColor");
      e.target.classList.remove("dragNocolor");
    }
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.classList.contains("dropzone")) {
      e.target.classList.remove("dragColor");
      e.target.classList.add("dragNocolor");
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.classList.contains("dropzone")) {
      e.target.classList.remove("dragColor");
      e.target.classList.add("dragNocolor");
      if (draggedId && id) {
        let id1, id2;
        for (let i = 0; i < visibleColumns.length; i++) {
          if (visibleColumns[i].id === draggedId) {
            id1 = i;
          } else if (visibleColumns[i].id === id) {
            id2 = i;
          }
        }
        let newOrder = visibleColumns.map(d => d.id);
        newOrder[id2] = draggedId;
        newOrder[id1] = id;
        setColumnOrder(newOrder);
      }
    }
    // console.log("Lo soltaste en:", id);
  };

  const handleDragStart = (e, id) => {
    e.stopPropagation();
    // console.log("Estás moviendo:", id);
    e.target.classList.add("dragStart");
    e.target.classList.remove("dragEnd");
    setDraggedId(id);
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("dragStart");
    e.target.classList.add("dragEnd");
  };

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          <tr>
            <th colSpan={10}>
              <GlobalFilter
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
          {headerGroups.map(
            (headerGroup: any) =>
              headerGroup.headers[0].Header !== "" && (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: any) => (
                    <th
                      draggable={column?.id === "selection" ? false : true}
                      onDrop={(ev) => {
                        handleDrop(ev, column.id);
                      }}
                      onDragOver={handleDragOver}
                      onDragEnter={handleDragEnter}
                      onDragStart={(ev) => {
                        handleDragStart(ev, column.id);
                      }}
                      onDragLeave={handleDragLeave}
                      onDragEnd={handleDragEnd}
                      className='dropzone'
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              ),
          )}
        </thead>
        <tbody {...getTableBodyProps()} className={zebra ? "zebra" : ""}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={`${row.isSelected ? "selected" : ""}`}
              >
                {row.cells.map((cell: any) => (
                  <td
                    {...cell.getCellProps()}
                    className={typeof cell.value === "number" ? "size" : ""}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={10}>
              <div className='pagination'>
                <Button
                  variant='info'
                  icon='<<'
                  onClick={() => gotoPage(0)}
                  type='button'
                  disabled={!canPreviousPage}
                />
                <Button
                  variant='info'
                  icon='<'
                  type='button'
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                />
                <Button
                  variant='info'
                  type='button'
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  icon='>'
                />
                <Button
                  variant='info'
                  icon='>>'
                  type='button'
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                />
                <span className='page'>
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{" "}
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
                    style={{ width: "300px" }}
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
  tableElevation = 1,
  tableElevationDirection,
  horizontalSpacing,
  colorSelected,
  borderColor,
  headerElevation = 1,
  ...rest
}: TableInterface) => {
  const { configuration } = useContext(ConfigContext);

  const columns = useMemo(
    () => [
      {
        Header: "First name",
        accessor: "firstName",
      },
      {
        Header: "Last name",
        accessor: "lastName",
      },
      {
        Header: "Salary",
        accessor: "salary",
      },
      {
        Header: "Percent",
        accessor: "percent",
      },
    ],
    [],
  );
  const data = useMemo(
    () => [
      {
        salary: 1881.2,
        percent: 51,
        firstName: "Juan",
        lastName: "Olvera",
        id: "OAUTH|FEWFEW",
      },
      {
        salary: 802.2,
        percent: 52,
        firstName: "Jorge",
        lastName: "Rojas",
        id: "OAUTH|sdfdgtr",
      },
      {
        salary: 803.2,
        percent: 53,
        firstName: "Lalo",
        lastName: "Mora",
        id: "OAUTH|661615",
      },
      {
        salary: 43.2,
        percent: 54,
        firstName: "José",
        lastName: "José",
        id: "OAUTH|661615",
      },
      {
        salary: 84.2,
        percent: 55,
        firstName: "Ana",
        lastName: "Bárbara",
        id: "OAUTH|66161sdf",
      },
      {
        salary: 80.2,
        percent: 56,
        firstName: "Leo",
        lastName: "Dan",
        id: "OAUTH|661615sd",
      },
      {
        salary: 834.2,
        percent: 85,
        firstName: "Leo",
        lastName: "Arcos",
        id: "OAUTH|661sdfs615",
      },
      {
        salary: 30.2,
        percent: 100,
        firstName: "Vicente",
        lastName: "Fernández",
        id: "OAUTH|6616aa15",
      },
      {
        salary: 60.2,
        percent: 1,
        firstName: "Chalino",
        lastName: "Sánchez",
        id: "OAUTH|a125615",
      },
      {
        salary: 870.2,
        percent: 0,
        firstName: "Jennifer",
        lastName: "Rivera",
        id: "OAUTH|s1s25615",
      },
      {
        salary: 888.2,
        percent: 50,
        firstName: "Lola",
        lastName: "Beltrán",
        id: "OAUTH|c125615",
      },
      {
        salary: 67.2,
        percent: 5,
        firstName: "Benito",
        lastName: "Juárez",
        id: "OAUTH|v125615",
      },
      {
        salary: 88.2,
        percent: 550,
        firstName: "Ricardo",
        lastName: "Anaya",
        id: "OAUTH|b125615",
      },
      {
        salary: 996.2,
        percent: 3,
        firstName: "Mariana",
        lastName: "Rodríguez",
        id: "OAUTH|n125615",
      },
      {
        salary: 80.2,
        percent: 50,
        firstName: "Bronco",
        lastName: "El gigante de América",
        id: "OAUTH|h125615",
      },
    ],
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
      tableElevation={tableElevation}
      tableElevationDirection={tableElevationDirection}
      headerElevation={headerElevation}
      colorSelected={colorSelected}
      borderColor={borderColor}
      {...rest}
    >
      <Table columns={columns} data={data} zebra={zebra} />
    </StyledTable>
  );
};
export default Wrapper;
