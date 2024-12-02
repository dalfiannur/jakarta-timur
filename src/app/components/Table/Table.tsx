"use client";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type ColumnMeta = {
  rowSpan?: number;
};

export const Table = <TColumn,>({
  columns,
  footer = true,
  data = [],
  classNames,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any[];
  footer?: boolean;
  data: TColumn[];
  classNames?: {
    tbody?: {
      tr?: {
        base?: string;
      };
    };
  };
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const headerGroups = table.getHeaderGroups();
  const footerColumns = table
    .getAllColumns()
    .map((column) => (column.columns.length > 0 ? column.columns : column))
    .flat();

  return (
    <table className="w-full overflow-hidden rounded-t-2xl">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup.id} className="bg-[#E9F6FE]">
            {headerGroup.headers.map((header) => {
              const rowSpan = (header.column.columnDef.meta as ColumnMeta)
                ?.rowSpan;

              if (
                !header.isPlaceholder &&
                rowSpan !== undefined &&
                header.id === header.column.id
              ) {
                return null;
              }

              return (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  rowSpan={rowSpan}
                  className="px-3 py-2 text-center font-plus-jakarta-sans text-sm font-medium text-[#23272E]"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row, index) => (
          <tr key={row.id} className={classNames?.tbody?.tr?.base}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                data-stripped={index % 2 > 0}
                className="px-2 py-4 text-center font-inter text-[#666666] data-[stripped=true]:bg-[#F6F6F6]"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      {footer && (
        <tfoot className="bg-[#1DA1F2] text-center font-roboto text-sm font-medium text-white">
          <tr>
            {footerColumns.map((column, index) => (
              <th
                key={column.id}
                data-rl={index === 0}
                data-rr={index === footerColumns.length - 1}
                className="p-4 data-[rl=true]:rounded-l-xl data-[rr=true]:rounded-r-xl"
              >
                {/* @ts-expect-error invalid implementation */}
                {column.columnDef?.footer({ table })}
              </th>
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  );
};
