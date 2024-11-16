"use client";
import { formattedNumber } from "@/utils/format-number";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";

type RadioCounterChartCardProps = {
  title: string;
};

export const RatioCounterChartCard = ({
  title,
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
            data: [
              {
                value: 3314396,
                label: "Laki-Laki",
                itemStyle: {
                  color: "#4F46C7",
                },
              },
              {
                value: 2314396,
                label: "Perempuan",
                itemStyle: {
                  color: "#FF8361",
                },
              },
            ],
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
                text: formattedNumber(1067897),
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
  }, [chartRef]);

  return (
    <div className="p-6">
      <h6 className="text-xs text-neutral-500 font-plus-jakarta-sans font-medium w-full">
        {title}
      </h6>
      <div className="flex items-center justify-center">
        <div ref={chartRef} className="w-[120px] aspect-square" />
      </div>
      <div className="flex justify-center gap-10">
        <Counter title="Laki-Laki" color="blue" value={12345} />
        <Counter title="Perempuan" color="pink" value={12345} />
      </div>
    </div>
  );
};

const Counter = ({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: "blue" | "pink";
}) => {
  return (
    <div className="font-plus-jakarta-sans">
      <div
        data-color={color}
        className="data-[color=blue]:bg-blue-500 data-[color=pink]:bg-pink-500 h-1 w-4"
      />
      <div className="mt-[2px] text-xs font-medium">{title}</div>
      <div className="mt-1 text-sm font-bold">
        {formattedNumber(value)} <span className="font-[10px]">Jiwa</span>
      </div>
    </div>
  );
};
