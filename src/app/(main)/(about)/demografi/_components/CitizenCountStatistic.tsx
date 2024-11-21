"use client";
import { useCallback, useEffect, useRef } from "react";
import * as echarts from "echarts";
import { formattedNumber } from "@/utils/format-number";
import { Icon } from "@/app/icons";
import _ from "lodash";

export const CitizenCountStatistic = ({
  title,
  sourceInfo,
  total,
  height,
  options,
  wrapLabel,
}: {
  title: string;
  sourceInfo?: string;
  total: { label: string; value: number }[];
  height?: number;
  options: echarts.EChartsOption;
  wrapLabel?: {
    x?: number;
    y?: number;
  };
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const formatter = useCallback((value: string, maxLineLength = 25) => {
    const words = value.split(" "); // Split the label by spaces
    let wrappedText = "";
    let line = "";

    words.forEach((word) => {
      if ((line + word).length > maxLineLength) {
        wrappedText += line.trim() + "\n"; // Add line break
        line = word + " "; // Start new line with the word
      } else {
        line += word + " ";
      }
    });

    wrappedText += line.trim(); // Add any remaining text
    return wrappedText;
  }, []);

  useEffect(() => {
    if (ref.current) {
      const chart = echarts.init(ref.current, null, { height });
      const _options = { ...options };
      if (wrapLabel?.x) {
        _.set(_options, "xAxis.axisLabel.formatter", (v: string) =>
          formatter(v, wrapLabel.x)
        );
      }

      if (wrapLabel?.y) {
        _.set(_options, "yAxis.axisLabel.formatter", (v: string) =>
          formatter(v, wrapLabel.y)
        );
      }

      chart.setOption(_options);

      chart.resize();
      return () => {
        chart.dispose();
      };
    }
  }, [ref, height, options, formatter, wrapLabel]);

  return (
    <div className="border-none lg:border rounded-xl p-4 lg:p-10 flex flex-col gap-6">
      <h5 className="font-bold text-base lg:text-xl font-plus-jakarta-sans">
        {title}
      </h5>
      <div className="grid grid-cols-3 gap-2 lg:gap-4">
        {total.map((item, index) => (
          <div
            key={index}
            className="p-2 lg:p-4 border rounded-xl font-plus-jakarta-sans"
          >
            <h6 className="text-xs lg:text-sm text-gray-600">{item.label}</h6>
            <p className="text-sm lg:text-base mt-2 font-semibold text-[#1D252D]">
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
