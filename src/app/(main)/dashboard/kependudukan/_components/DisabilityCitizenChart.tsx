"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const xLabels = [
  "Mental/Jiwa",
  "Fisik",
  "Rungu/Wicara",
  "Netra/Buta",
  "Fisik dan Mental",
];

const colors = ["#FF8361", "#4F46C7", "#FFC053", "#FFB944", "#FFE5BA"];

export const DisabilityCitizenChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      chart.setOption({
        color: colors,
        legend: {
          show: true,
          orientation: "horizontal",
          top: "top",
          left: "center",
          data: xLabels,
        },
        xAxis: {
          show: false,
          type: "category",
          data: xLabels,
        },
        yAxis: {
          type: "value",
        },
        grid: {
          top: 20,
          bottom: 20,
          left: 60,
          right: 20,
        },
        series: [
          {
            type: "bar",
            colorBy: "data",
            data: [
              {
                name: "Mental/Jiwa",
                value: 10000,
              },
              {
                name: "Fisik",
                value: 6000,
              },
              {
                name: "Rungu/Wicara",
                value: 8000,
              },
              {
                name: "Netra/Buta",
                value: 6000,
              },
              {
                name: "Fisik dan Mental",
                value: 2000,
              },
            ],
            itemStyle: {
              borderRadius: [20, 20, 0, 0],
            },
          },
        ],
        tooltip: {},
      });
    }
  }, [chartRef]);

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-x-8">
        {xLabels.map((label, index) => (
          <button key={label} className="flex items-center gap-2">
            <div
              data-color={index}
              className="w-8 h-3 text-xs font-roboto rounded-full data-[color=0]:bg-[#FF8361] data-[color=1]:bg-[#4F46C7] data-[color=2]:bg-[#FFC053] data-[color=3]:bg-[#FFB944] data-[color=4]:bg-[#FFE5BA]"
            />
            {label}
          </button>
        ))}
      </div>
      <div ref={chartRef} className="mt-6 h-[180px]" />
      <div className="text-center font-semibold font-plus-jakarta-sans">
        Jumlah: 23.444 Jiwa
      </div>
    </div>
  );
};
