import { Icon } from "@/app/icons";
import { ReactNode } from "react";
import _ from "lodash";

type TextAlign = "center" | "left" | "right" | "justify";

export type Column = {
  key: string | null;
  header: string;
  colSpan?: number;
  rowSpan?: number;
  compact?: boolean;
  nowrap?: boolean;
  render?: (value: string | number) => ReactNode;
  textAlign?: TextAlign;
  maxWidth?: number;
};

export type Footer<T> = {
  render: (item: T[]) => ReactNode;
  maxWidth?: number;
  textAlign?: TextAlign;
  nowrap?: boolean;
};

export const Table = <T,>({
  title,
  columns,
  footers,
  data = [],
  sourceInfo,
  noteSection,
}: {
  title: string;
  columns: Column[][];
  footers: Footer<T>[];
  data: T[];
  sourceInfo?: string;
  noteSection?: ReactNode;
}) => {
  const dataColumns: Column[] = columns.flat().filter((d) => d.key !== null);

  return (
    <div className="border rounded-xl p-10">
      <h5 className="text-center text-xl font-bold">{title}</h5>
      <table className="mt-8 rounded-t-2xl overflow-hidden w-full">
        <thead>
          {columns.map((cols, index) => (
            <tr key={index} className="bg-[#E9F6FE]">
              {cols.map(({ header, ...cell }, i) => (
                <Th {...cell} key={i}>
                  {header}
                </Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {dataColumns.map((col, i) => (
                <Td
                  key={i}
                  striped={index % 2 !== 0}
                  textAlign={col.textAlign}
                  maxWidth={col.maxWidth}
                >
                  {col.render
                    ? col.render(_.get(item, col.key!))
                    : _.get(item, col.key!)}
                </Td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="mt-2 text-sm text-center font-medium text-white">
            {footers.map((item, index) => (
              <th
                key={index}
                data-rounded={
                  index === 0
                    ? "l"
                    : index === footers.length - 1
                      ? "r"
                      : undefined
                }
                style={{ maxWidth: item.maxWidth }}
                data-align={item.textAlign}
                data-nowrap={item.nowrap}
                className="bg-[#1DA1F2] p-4 data-[rounded=l]:rounded-l-2xl data-[nowrap=true]:whitespace-nowrap data-[rounded=r]:rounded-r-2xl data-[align=left]:text-left data-[align=center]:text-center data-[align=right]:text-right data-[align=justify]:text-justify"
              >
                {item.render(data)}
              </th>
            ))}
          </tr>
        </tfoot>
      </table>
      {noteSection}
      {sourceInfo && (
        <p className="mt-6 flex gap-4 items-center text-blue-500 text-sm">
          <Icon name="Info" size={16} />
          {sourceInfo}
        </p>
      )}
    </div>
  );
};

const Th = ({
  children,
  colSpan,
  rowSpan,
  compact,
  nowrap,
  maxWidth,
}: {
  children: ReactNode;
  colSpan?: number;
  rowSpan?: number;
  compact?: boolean;
  nowrap?: boolean;
  maxWidth?: number;
}) => (
  <th
    colSpan={colSpan}
    rowSpan={rowSpan}
    data-compact={compact}
    data-nowrap={nowrap}
    style={{ maxWidth }}
    className="py-4 data-[compact=true]:py-2 px-6 text-center text-sm dont-semibold text-[#23272E] data-[nowrap=true]:whitespace-nowrap"
  >
    {children}
  </th>
);

const Td = ({
  children,
  striped,
  textAlign = "center",
  maxWidth,
}: {
  children: ReactNode;
  striped?: boolean;
  textAlign?: TextAlign;
  maxWidth?: number;
}) => (
  <td
    data-striped={striped ? true : false}
    data-align={textAlign}
    style={{ maxWidth }}
    className="px-6 whitespace-nowrap text-sm font-medium text-[#666666] py-6 data-[striped=true]:bg-[#F6F6F6] data-[align=left]:text-left data-[align=center]:text-center data-[align=right]:text-right data-[align=justify]:text-justify"
  >
    {children}
  </td>
);
