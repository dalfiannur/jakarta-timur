"use client";
import { formattedNumber } from "@/utils/format-number";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { Counter } from "./Counter";

type DataItem = {
  name: string;
  value: number;
  itemStyle?: {
    color?: string;
  };
};

type RadioCounterChartCardProps = {
  title: string;
  total: number;
  data: DataItem[];
};

export const RatioCounterChartCard = ({
  title,
  total,
  data,
}: RadioCounterChartCardProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      chart.setOption({
        width: 120,
        height: 120,
        series: [
          {
            type: "pie",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            radius: ["55%", "75%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data,
          },
        ],
        graphic: {
          elements: [
            {
              type: "text",
              left: "center",
              top: 45,
              style: {
                text: "Jumlah",
                textAlign: "center",
                fill: "#71717A",
                fontSize: 10,
                fontWeight: "medium",
              },
            },
            {
              type: "text",
              left: "center",
              top: 60,
              style: {
                text: formattedNumber(total),
                textAlign: "center",
                fill: "#71717A",
                fontSize: 12,
                fontWeight: "bold",
              },
            },
          ],
        },
      });
    }
  }, [chartRef, total, data]);

  return (
    <div className="p-6">
      <h6 className="text-xs text-neutral-500 font-plus-jakarta-sans font-medium w-full">
        {title}
      </h6>
      <div className="flex items-center justify-center">
        <div ref={chartRef} className="w-[120px] aspect-square" />
      </div>
      <div className="flex justify-center gap-10">
        {data.map((item, index) => (
          <Counter
            key={index}
            title={item.name}
            color={item.itemStyle?.color}
            value={12345}
          />
        ))}
      </div>
    </div>
  );
};
