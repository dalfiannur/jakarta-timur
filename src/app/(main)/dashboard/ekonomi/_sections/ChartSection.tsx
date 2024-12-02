"use client";
import { SelectCSR } from "@/app/components/SelectCSR";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";

export const ChartSection = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const c = echarts.init(chartRef.current);
      c.setOption({
        color: [
          "#FF8361",
          "#FFC053",
          "#4F46C7",
          "#347928",
          "#3361FF",
          "#FF6A23",
          "#FFE656",
        ],
        legend: {
          left: "left",
        },
        grid: {
          left: 20,
          right: 60,
          bottom: 30,
        },
        tooltip: {},
        xAxis: [
          {
            type: "category",
            data: ["Cipayung", "Ciracas", "Makasar", "Duren Sawit"],
          },
        ],
        yAxis: {
          position: "right",
        },
        series: [
          {
            type: "bar",
            name: "P1",
            data: [1, 2, 3, 4, 5],
            itemStyle: {
              borderRadius: [5, 5, 0, 0],
            },
          },
          {
            type: "bar",
            name: "P2",
            data: [2, 3, 4, 5, 6],
            itemStyle: {
              borderRadius: [5, 5, 0, 0],
            },
          },
          {
            type: "bar",
            name: "P3",
            data: [1, 2, 3, 4, 5],
            itemStyle: {
              borderRadius: [5, 5, 0, 0],
            },
          },
          {
            type: "bar",
            name: "P4",
            data: [2, 3, 4, 5, 6],
            itemStyle: {
              borderRadius: [5, 5, 0, 0],
            },
          },
          {
            type: "bar",
            name: "P5",
            data: [1, 2, 3, 4, 5],
            itemStyle: {
              borderRadius: [5, 5, 0, 0],
            },
          },
          {
            type: "bar",
            name: "P6",
            data: [2, 3, 4, 5, 6],
            itemStyle: {
              borderRadius: [5, 5, 0, 0],
            },
          },
        ],
      });
    }
  }, [chartRef.current]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h4 className="font-plus-jakarta-sans text-lg font-semibold">
          Jumlah Peserta Wirausaha Baru
        </h4>
        <SelectCSR
          data={[{ label: "2024", value: "2024" }]}
          defaultSelected={{ label: "2024", value: "2024" }}
          color="orange"
        />
      </div>
      <div ref={chartRef} className="mt-4 h-[400px]" />
    </div>
  );
};
