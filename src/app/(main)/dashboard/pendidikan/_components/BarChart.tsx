"use client";
import { useEffect, useRef } from "react";
import * as echarts from "echarts";

export const BarChart = ({
  data,
}: {
  data: {
    name: string;
    itemStyle?: { color?: string };
    data: { name: string; value: number }[];
  }[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const chart = echarts.init(ref.current);

      chart.setOption({
        xAxis: [
          {
            type: "category",
            data: data[0]?.data.map((d) => d.name),
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        grid: {
          left: 60,
          bottom: 20,
          right: 20,
        },
        series: data.map((d) => ({
          type: "bar",
          name: d.name,
          data: d.data,
          itemStyle: {
            color: d.itemStyle?.color,
            borderRadius: [10, 10, 0, 0],
          },
        })),
        tooltip: {
          trigger: "axis",
        },
        legend: {
          top: "top",
          left: "left",
        },
      });

      return () => chart.dispose();
    }
  }, [ref, data]);

  return <div ref={ref} className="h-[280px]" />;
};
