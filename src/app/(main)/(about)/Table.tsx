import { Icon } from "@/app/icons";
import { ReactNode, useMemo } from "react";
import _ from "lodash";
import { formattedNumber } from "@/utils/format-number";

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
  children?: Column[];
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
  px,
}: {
  title: string;
  columns: Column[];
  footers: Footer<T>[];
  data: T[];
  sourceInfo?: string;
  noteSection?: ReactNode;
  px?: number;
}) => {
  const headerColumns = useMemo(
    () => [columns, columns.map((d) => d.children ?? []).flat()],
    [columns],
  );
  const dataColumns: Column[] = useMemo(
    () =>
      columns.map(({ children, ...rest }) => children ?? [{ ...rest }]).flat(2),
    [columns],
  );

  return (
    <div className="border rounded-xl p-10 flex flex-col gap-8">
      <h5 className="text-center text-xl font-bold">{title}</h5>
      <table className="rounded-t-2xl overflow-hidden">
        <thead>
          {headerColumns.map((cols, index) => (
            <tr key={index} className="bg-[#E9F6FE]">
              {cols.map(({ header, ...cell }, i) => (
                <Th {...cell} px={px} key={i}>
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
                  px={px}
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

          <tr className="text-sm text-center font-medium text-white">
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
                style={{
                  maxWidth: item.maxWidth,
                  // paddingLeft: px ?? 16,
                  // paddingRight: px ?? 16,
                  // paddingTop: 16,
                  // paddingBottom: 16,
                }}
                data-align={item.textAlign}
                data-nowrap={item.nowrap}
                className="bg-[#1DA1F2] data-[rounded=l]:rounded-l-2xl data-[nowrap=true]:whitespace-nowrap data-[rounded=r]:rounded-r-2xl data-[align=left]:text-left data-[align=center]:text-center data-[align=right]:text-right data-[align=justify]:text-justify"
              >
                {item.render(data)}
              </th>
            ))}
          </tr>
        </tbody>
      </table>
      {noteSection}
      {sourceInfo && (
        <div className="mt-6 flex gap-4 items-center text-blue-500 text-sm">
          <Icon name="Info" size={16} />
          {sourceInfo}
        </div>
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
  px = 24,
}: {
  children: ReactNode;
  colSpan?: number;
  rowSpan?: number;
  compact?: boolean;
  nowrap?: boolean;
  maxWidth?: number;
  px?: number;
}) => (
  <th
    colSpan={colSpan}
    rowSpan={rowSpan}
    data-compact={compact}
    data-nowrap={nowrap}
    style={{ maxWidth, paddingLeft: px, paddingRight: px }}
    className="py-4 data-[compact=true]:py-2 text-center text-sm dont-semibold text-[#23272E] data-[nowrap=true]:whitespace-nowrap"
  >
    {children}
  </th>
);

const Td = ({
  children,
  striped,
  textAlign = "center",
  maxWidth,
  px = 24,
}: {
  children: ReactNode;
  striped?: boolean;
  textAlign?: TextAlign;
  maxWidth?: number;
  px?: number;
}) => (
  <td
    data-striped={striped ? true : false}
    data-align={textAlign}
    style={{ maxWidth, paddingLeft: px, paddingRight: px }}
    className="whitespace-nowrap text-sm font-medium text-[#666666] py-6 data-[striped=true]:bg-[#F6F6F6] data-[align=left]:text-left data-[align=center]:text-center data-[align=right]:text-right data-[align=justify]:text-justify"
  >
    {children}
  </td>
);

export const footerCounter = <T,>(
  items: T[],
  callback: (item: T) => number | string,
  type: "sum" | "avg" = "sum",
) => {
  let value: number;
  if (type === "sum") {
    value = items
      .map(callback)
      .filter((d) => typeof d === "number")
      .reduce((a, b) => a + b, 0);
  } else {
    value = _.mean(items.map(callback).filter((d) => typeof d === "number"));
  }

  return formattedNumber(value, type === "sum" ? 0 : 2);
};