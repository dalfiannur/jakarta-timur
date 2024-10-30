import { useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";

export const CitizenCountStatistic = ({
  title,
  total,
  data,
  height,
}: {
  title: string;
  total: { label: string; value: number }[];
  data: { id: number; label: string; value: [number, number] }[];
  height?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const male = data.map((item) => ({
    type: "male",
    label: item.label,
    value: item.value[0],
    order: item.id,
  }));

  const female = data.map((item) => ({
    type: "female",
    label: item.label,
    value: item.value[1],
    order: item.id,
  }));

  const rows = [...male, ...female];

  useEffect(() => {
    const plot = Plot.plot({
      grid: true,
      marginLeft: 70,
      height,
      marks: [
        Plot.barX(rows, {
          fy: "label",
          y: "type",
          x: "value",
          fill: "type",
          rx2y2: 5,
          rx2y1: 5,
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
        domain: ["male", "female"],
        range: ["#1DA1F2", "#EB30A2"],
      },
      y: {
        label: null,
        axis: null,
      },
      x: {
        label: null,
        grid: true,
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
  }, [ref, data]);

  return (
    <div className="border rounded-xl p-10 flex flex-col gap-6">
      <h5 className="font-bold text-xl">{title}</h5>
      <div className="grid grid-cols-3 gap-4">
        {total.map((item, index) => (
          <div key={index} className="p-4 border rounded-xl">
            <h6 className="text-sm text-gray-600">{item.label}</h6>
            <p className="mt-2 font-semibold text-[#1D252D]">{item.value}</p>
          </div>
        ))}
      </div>
      <div ref={ref} className="h-[1000px]" />
    </div>
  );
};
