"use client";
import { useEffect, useMemo, useRef } from "react";
import * as Plot from "@observablehq/plot";
import { Icon } from "@/app/icons";
import { formattedNumber } from "@/utils/format-number";

export type XChartGenderData = {
  counters: { label: string; value: number }[];
  items: { id: number; label: string; values: { [key: string]: number } }[];
};

export const XBarGenderChart = ({
  title,
  data,
  height,
  marginLeft,
  legend,
  sourceInfo,
}: {
  title: string;
  data: XChartGenderData;
  height?: number;
  marginLeft?: number;
  legend?: boolean;
  sourceInfo?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const rows = useMemo(() => {
    const male = data.items.map((item) => ({
      type: "Laki-Laki",
      label: item.label,
      value: item.values.male,
    }));

    const female = data.items.map((item) => ({
      type: "Perempuan",
      label: item.label,
      value: item.values.female,
    }));

    return [...male, ...female];
  }, [data]);

  useEffect(() => {
    const plot = Plot.plot({
      grid: true,
      marginLeft,
      height,
      marks: [
        Plot.axisFy({
          label: null,
          lineWidth: 12,
          anchor: "left",
          fill: "#666666",
          fontSize: 14,
          fontWeight: 500,
        }),
        Plot.barX(rows, {
          fy: "label",
          y: "type",
          x: "value",
          fill: "type",
          rx2y2: 10,
          rx2y1: 10,
          insetBottom: 2,
          insetTop: 2,
        }),
        Plot.tip(
          rows,
          Plot.pointer({
            fy: "label",
            y: "type",
            x: "value",
            title: (d) =>
              `Usia: ${d.label}\nJenis Kelamin: ${d.type === "male" ? "Laki-Laki" : "Perempuan"}\nTotal: ${d.value}`,
          }),
        ),
      ],
      color: {
        domain: ["Laki-Laki", "Perempuan"],
        range: ["#1DA1F2", "#EB30A2"],
        legend,
      },
      y: {
        label: null,
        axis: null,
      },
      x: {
        label: null,
        grid: true,
        axis: null,
      },
      fy: {
        label: null,
        grid: true,
        padding: 0.2,
        domain: [...new Set(rows.map((d) => d.label))].sort(
          (a, b) => parseInt(a) - parseInt(b),
        ),
      },
    });

    ref.current?.append(plot);
    return () => plot.remove();
  }, [ref, data, height, rows, marginLeft, legend]);

  return (
    <div className="border rounded-xl p-10 flex flex-col gap-6">
      <h5 className="font-bold text-xl">{title}</h5>
      <div className="grid grid-cols-3 gap-4">
        {data.counters.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl flex flex-col justiify-between gap-2"
          >
            <h6 className="text-sm text-gray-600">{item.label}</h6>
            <p className="font-semibold text-[#1D252D]">
              {formattedNumber(item.value)}
            </p>
          </div>
        ))}
      </div>
      <div ref={ref} />
      {sourceInfo && (
        <p className="flex gap-4 items-center text-blue-500 text-sm">
          <Icon name="Info" size={16} />
          {sourceInfo}
        </p>
      )}
    </div>
  );
};
