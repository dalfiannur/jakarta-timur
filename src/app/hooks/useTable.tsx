import { ReactNode, useCallback, useMemo } from "react";
import _ from "lodash";
import { tv } from "tailwind-variants";

const TableStyle = tv({
  slots: {
    table: "w-full",
    headerRow: "bg-orange-500/10 font-inter text-sm font-medium text-[#23272E]",
    headerCell: "p-2",
    footerRow: "bg-orange-500 text-white font-inter text-sm font-medium",
    footerCell: "p-2",
    row: "border-b",
    cell: "px-2 py-4 text-xs text-gray-500",
  },
  variants: {
    nested: {
      true: {
        headerCell: "py-1",
      },
      false: {
        headerCell: "py-4",
      },
    },
  },
});

type Column<T> = {
  keyIndex?: string | number | symbol;
  header: () => ReactNode;
  cell?: (row: T) => ReactNode;
  footer?: () => ReactNode;
  columns?: Column<T>[];
  classNames?: {
    cell?: string;
  };
};

type NestedColumn<T> = Column<T> & {
  parentIndex: number;
};

export const useTable = <T,>({
  columns,
  data,
  classNames,
}: {
  columns: Column<T>[];
  data: T[];
  classNames?: {
    header?: {
      row?: string;
      cell?: string;
    };
    body?: {
      row?: string;
    };
  };
}) => {
  const hasFooter = columns.filter((d) => !!d.footer).length > 0;
  const headerGroups = useMemo(() => {
    const groups: NestedColumn<T>[][] = [];
    columns.forEach((column, index) => {
      groups[0] = [...(groups[0] ?? []), { ...column, parentIndex: 0 }];
      if (column.columns) {
        groups[1] = [
          ...(groups[1] ?? []),
          ...column.columns.map((col) => ({ ...col, parentIndex: index })),
        ];
      }
    });
    return groups;
  }, [columns]);

  const x = TableStyle({ nested: headerGroups.length > 1 });

  const flattenColumns = useMemo(() => {
    let groups: Column<T>[] = [];
    columns.forEach((column) => {
      if (column.columns) {
        groups = [...groups, ...column.columns];
      } else {
        groups = [...groups, column];
      }
    });
    return groups.flat();
  }, [columns]);

  const findChildren = useCallback(
    (groupIndex: number, columnIndex: number) => {
      return headerGroups[groupIndex + 1]?.filter(
        (d) => d.parentIndex === columnIndex,
      );
    },
    [headerGroups],
  );

  const renderHeaderCell = useCallback(
    (cols: NestedColumn<T>[], groupIndex: number) =>
      cols.map((column, columnIndex) => (
        <th
          key={columnIndex}
          rowSpan={
            findChildren(groupIndex, columnIndex)?.length === 0
              ? headerGroups.length
              : undefined
          }
          colSpan={findChildren(groupIndex, columnIndex)?.length ?? undefined}
          className={x.headerCell({
            className: classNames?.header?.cell,
          })}
        >
          {column.header()}
        </th>
      )),
    [classNames, x, headerGroups, findChildren],
  );

  const renderCell = useCallback(
    (row: T) =>
      flattenColumns.map((column, cIndex) => (
        <td
          key={cIndex}
          className={x.cell({ className: column.classNames?.cell })}
        >
          {column.cell
            ? column.cell(row)
            : column.keyIndex
              ? _.get(row, column.keyIndex)
              : null}
        </td>
      )),
    [flattenColumns, x],
  );

  const renderRow = useCallback(
    (items: T[]) =>
      items.map((row, index) => (
        <tr key={index} className={x.row({ className: classNames?.body?.row })}>
          {renderCell(row)}
        </tr>
      )),
    [classNames, x, renderCell],
  );

  const table = useMemo(
    () => (
      <table className={x.table()}>
        <thead>
          {headerGroups.map((cols, groupIndex) => (
            <tr
              key={groupIndex}
              className={x.headerRow({ className: classNames?.header?.row })}
            >
              {renderHeaderCell(cols, groupIndex)}
            </tr>
          ))}
        </thead>
        <tbody>{renderRow(data)}</tbody>
        {hasFooter && (
          <tfoot>
            <tr className={x.footerRow()}>
              {flattenColumns.map((column, index) => (
                <th key={index} className={x.footerCell()}>
                  {column.footer ? column.footer() : ""}
                </th>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
    ),
    [
      flattenColumns,
      data,
      x,
      hasFooter,
      renderHeaderCell,
      renderRow,
      headerGroups,
      classNames,
    ],
  );

  return {
    table,
  };
};
