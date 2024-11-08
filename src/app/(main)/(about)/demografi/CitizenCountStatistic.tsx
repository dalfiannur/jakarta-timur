"use client";
import { useEffect, useRef } from "react";
import * as echart from "echarts";
import { formattedNumber } from "@/utils/format-number";
import { Icon } from "@/app/icons";

export const CitizenCountStatistic = ({
  title,
  sourceInfo,
  total,
  height,
  options,
}: {
  title: string;
  sourceInfo?: string;
  total: { label: string; value: number }[];
  height?: number;
  options: echart.EChartsOption;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const chart = echart.init(ref.current, null, { height });
      chart.setOption(options);
      chart.resize();
      return () => {
        chart.dispose();
      };
    }
  }, [ref, height, options]);

  return (
    <div className="border rounded-xl p-10 flex flex-col gap-6">
      <h5 className="font-bold text-xl font-plus-jakarta-sans">{title}</h5>
      <div className="grid grid-cols-3 gap-4">
        {total.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl font-plus-jakarta-sans"
          >
            <h6 className="text-sm text-gray-600">{item.label}</h6>
            <p className="mt-2 font-semibold text-[#1D252D]">
              {formattedNumber(item.value)}
            </p>
          </div>
        ))}
      </div>
      <div ref={ref} />
      {sourceInfo && (
        <div className="flex items-center gap-2 font-plus-jakarta-sans text-sm text-blue-500">
          <div>
            <Icon name="Info" size={16} />
          </div>
          {sourceInfo}
        </div>
      )}
    </div>
  );
};
