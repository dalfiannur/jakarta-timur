"use client";

import { useEffect, useRef } from "react";
import * as echart from "echarts";

export const Statistic = ({
  birthData,
  deathData,
}: {
  birthData: number[];
  deathData: number[];
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const chart = echart.init(ref.current, null, {
        height: 315,
      });

      chart.setOption({
        xAxis: {
          type: "category",
          data: [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
          ],
          axisLabel: {
            fontSize: 10,
          },
        },
        yAxis: {},
        series: [
          {
            type: "line",
            name: "Kelahiran",
            data: birthData,
            itemStyle: {
              color: "#1DA1F2",
            },
          },
          {
            type: "line",
            name: "Kematian",
            data: deathData,
            itemStyle: {
              color: "#EB30A2",
            },
          },
        ],
        grid: {
          left: 40,
          right: 20,
          top: 20,
        },
        tooltip: {},
        legend: {
          bottom: "bottom",
          left: "center",
        },
      });
    }
  }, [ref, deathData, birthData]);

  return <div ref={ref} />;
};
