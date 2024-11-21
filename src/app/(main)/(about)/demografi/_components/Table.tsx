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
  data = [],
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any[];

  data: TColumn[];
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
    <div className="overflow-x-scroll scrollbar-hidden">
      <table className="rounded-t-2xl overflow-hidden w-full">
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
                    className="px-2 lg:px-3 py-2 text-center text-xs lg:text-sm font-plus-jakarta-sans font-medium text-[#23272E]"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  data-stripped={index % 2 > 0}
                  className="px-1 lg:px-2 py-4 text-center text-xs lg:text-base font-inter text-[#666666] data-[stripped=true]:bg-[#F6F6F6]"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-[#1DA1F2] text-white text-center font-roboto text-sm font-medium">
          <tr>
            {footerColumns.map((column, index) => (
              <th
                key={column.id}
                data-rl={index === 0}
                data-rr={index === footerColumns.length - 1}
                className="data-[rl=true]:rounded-l-xl data-[rr=true]:rounded-r-xl p-4"
              >
                {/* @ts-expect-error invalid implementation */}
                {column.columnDef.footer({ table })}
              </th>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
