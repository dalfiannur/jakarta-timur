"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import _ from "lodash";

export const StackBarChart = <T,>({
  data,
  xKey,
  yKey,
  valueKey,
  colors,
}: {
  data: T[];
  xKey: keyof T;
  yKey: keyof T;
  valueKey: keyof T;
  colors?: string[];
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const chart = echarts.init(ref.current);
      const xData = _.uniq(_.map(data, (d) => d[xKey]));
      const yData = _.groupBy(data, yKey);
      const series = _.map(yData, (d, key) => ({
        type: "bar",
        stack: "Total",
        name: key,
        data: _.map(d, (row) => ({
          name: row[yKey],
          value: row[valueKey],
        })),
      }));

      chart.setOption({
        color: colors,
        tooltip: {},
        legend: {
          left: "left",
        },
        grid: {
          bottom: 20,
          left: 60,
          right: 20,
          top: 50,
        },
        yAxis: [
          {
            type: "value",
          },
        ],
        xAxis: [
          {
            type: "category",
            data: xData,
          },
        ],
        roundCap: true,
        series,
      });
    }
  }, [ref, data, xKey, yKey, valueKey, colors]);

  return <div ref={ref} className="h-[220px]" />;
};
