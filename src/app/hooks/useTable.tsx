import { ReactNode, useMemo } from "react";
import _ from "lodash";

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
    body?: {
      row?: string;
    };
  };
}) => {
  const table = useMemo(
    () => (
      <table className="w-full">
        <thead>
          <tr className="bg-orange-500/10 font-inter text-sm font-medium text-gray-700">
            {columns.map((column, index) => (
              <th key={index} className="px-2 py-4">
                {column.header()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={`border-b ${classNames?.body?.row}`}>
              {columns.map((column, cIndex) => (
                <td
                  key={cIndex}
                  className={`p-2 text-xs text-gray-500 ${column.classNames?.cell}`}
                >
                  {column.cell ? column.cell(row) : _.get(row, column.keyIndex)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    ),
    [columns, data],
  );

  return {
    table,
  };
};
