"use client";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

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

  return (
    <table className="rounded-t-2xl overflow-hidden">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="bg-[#E9F6FE]">
            {headerGroup.headers.map((header) => (
              <td
                key={header.id}
                className="px-3 py-2 text-center text-sm font-plus-jakarta-sans font-medium text-[#23272E]"
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </td>
            ))}
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
                className="px-2 py-4 text-center font-inter text-[#666666] data-[stripped=true]:bg-[#F6F6F6]"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot className="bg-[#1DA1F2] text-white text-center font-roboto text-sm font-medium">
        {table.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header, index) => (
              <th
                key={header.id}
                data-rl={index === 0}
                data-rr={index === footerGroup.headers.length - 1}
                className="data-[rl=true]:rounded-l-xl data-[rr=true]:rounded-r-xl p-4"
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext(),
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};
