import { useEffect, useMemo, useRef } from "react";
import * as echarts from "echarts";
import _ from "lodash";

type StackBarChartOptions<T> = {
  data: T[];
  xKey: keyof T;
  yKey: keyof T;
  stackKey: keyof T;
  color?: string[];
  legendPosition?: "top-left";
};

export const useStackBarChart = <
  T extends { [key: string]: string | number | object },
>({
  data,
  color,
  xKey,
  yKey,
  stackKey,
  legendPosition,
}: StackBarChartOptions<T>) => {
  const ref = useRef<HTMLDivElement>(null);

  const legend = legendPosition ? legendPosition.split("-") : undefined;

  const xAxisData = useMemo(
    () => [...new Set(data.map((item) => item[xKey]))],
    [data, xKey],
  );
  const seriesGroup = useMemo(
    () => _.groupBy(data, stackKey),
    [data, stackKey],
  );
  const series = useMemo(
    () =>
      _.map(seriesGroup, (item, key) => ({
        name: key,
        type: "bar",
        stack: yKey,
        data: item.map((i) => i[yKey]),
        itemStyle: {
          borderRadius:
            _.keys(seriesGroup).indexOf(key) ===
            Object.keys(seriesGroup).length - 1
              ? [10, 10, 0, 0]
              : [0, 0, 0, 0],
        },
      })),
    [yKey, seriesGroup],
  );

  useEffect(() => {
    if (ref.current) {
      const chart = echarts.init(ref.current);
      chart.setOption({
        color,
        xAxis: [
          {
            type: "category",
            data: xAxisData,

            axisLabel: {
              textStyle: {
                fontSize: 10,
              },
            },
          },
        ],
        yAxis: {
          type: "value",
          position: "right",
        },
        grid: {
          left: 30,
          right: 30,
          bottom: 30,
          top: 60,
        },
        tooltip: {},
        legend: {
          top: legend?.[0],
          left: legend?.[1],
        },
        series,
      });
      return () => chart.dispose();
    }
  }, [data, xAxisData, yKey, color, legend, series]);

  return { ref };
};
