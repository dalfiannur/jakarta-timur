"use client";
import { Icon } from "@/app/icons";
import { useEffect, useRef } from "react";
import * as echarts from "echarts";

import data from "../_data/population-growth-chart.json";

export const PopulationGrowthChartSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const chart = echarts.init(ref.current);

      const xData = data.data.map((d) => d.label);
      const yData = data.data.map((d) => d.value);

      chart.setOption({
        xAxis: {
          type: "category",
          data: xData,
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            type: "bar",
            data: yData,
            itemStyle: { color: "#1DA1F2", borderRadius: [16, 16, 0, 0] },
          },
        ],
        tooltip: {
          triger: "none",
        },
        grid: {
          show: true,
          left: 40,
          right: 20,
          top: 20,
          bottom: 20,
        },
      });

      return () => {
        chart.dispose();
      };
    }
  }, [ref]);

  return (
    <div className="border-none lg:border rounded-xl px-4 lg:px-10 pb-10 pt-2 lg:pt-4">
      <h5 className="text-base lg:text-xl font-bold font-plus-jakarta-sans">
        Laju Pertumbuhan Penduduk per Tahun (%), 2010-2020
      </h5>
      <div ref={ref} className="mt-6 aspect-[4/2] lg:aspect-auto h-auto lg:h-96" />
      <div className="mt-6 flex gap-4 items-center">
        <div className="text-blue-500">
          <Icon name="Info" size={16} />
        </div>
        <div className="text-blue-500 text-sm font-semibold font-plus-jakarta-sans">
          Sumber: BPS, Sensus Penduduk (SP) 2010 dan Sensus Penduduk (SP) 2020
          September
        </div>
      </div>
    </div>
  );
};
