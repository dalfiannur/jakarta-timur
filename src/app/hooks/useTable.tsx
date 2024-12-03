import { ReactNode, useMemo } from "react";
import _ from "lodash";
import { tv } from "tailwind-variants";

const TableStyle = tv({
  slots: {
    table: "w-full",
    headerRow: "bg-orange-500/10 font-inter text-sm font-medium text-gray-700",
    headerCell: "px-2 py-4",
    row: "border-b",
    cell: "p-2 text-xs text-gray-500",
  },
});

type Column<T> = {
  keyIndex: string | number | symbol;
  header: () => ReactNode;
  cell?: (row: T) => ReactNode;
  classNames?: {
    cell?: string;
  };
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
  const x = TableStyle();

  const table = useMemo(
    () => (
      <table className={x.table()}>
        <thead>
          <tr className={x.headerRow({ className: classNames?.header?.row })}>
            {columns.map((column, index) => (
              <th
                key={index}
                className={x.headerCell({
                  className: classNames?.header?.cell,
                })}
              >
                {column.header()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={x.row({ className: classNames?.body?.row })}
            >
              {columns.map((column, cIndex) => (
                <td
                  key={cIndex}
                  className={x.cell({ classNames: column.classNames?.cell })}
                >
                  {column.cell ? column.cell(row) : _.get(row, column.keyIndex)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    ),
    [columns, data, classNames, x],
  );

  return {
    table,
  };
};
