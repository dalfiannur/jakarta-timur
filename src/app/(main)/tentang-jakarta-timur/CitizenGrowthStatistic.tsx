import { Icon } from "@/app/icons";
import * as Plot from "@observablehq/plot";
import { useEffect, useRef } from "react";

export const CitizenGrowthStatistic = ({
  data,
}: {
  data: { label: string; value: number }[];
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const yPlot = Plot.barY(data, {
      x: "label",
      y: "value",
      dx: 2,
      dy: 2,
      rx1y1: 15,
      rx2y1: 15,
      fill: "#1DA1F2",
    });

    const tip = Plot.tip(
      data,
      Plot.pointerX({
        x: {
          label: "Kecamatan",
          value: "label",
        },
        y: {
          label: "Pertumbuhan",
          value: `value`,
        },
        format: {
          y: (y) => `${y}%`,
        },
      }),
    );

    const plot = Plot.plot({
      grid: true,
      width: ref.current?.clientWidth,
      y: {
        label: null,
      },
      x: {
        label: null,
      },
      marks: [yPlot, tip],
    });
    ref.current?.append(plot);
    return () => plot.remove();
  }, [ref, data]);

  return (
    <div className="border rounded-xl px-10 pb-10 pt-4">
      <h5 className="text-xl font-bold">
        Laju Pertumbuhan Penduduk per Tahun (%), 2010-2020
      </h5>
      <div ref={ref} className="mt-6" />
      <div className="mt-6 flex gap-4 items-center">
        <div className="text-blue-500">
          <Icon name="Info" size={16} />
        </div>
        <div className="text-blue-500 text-sm font-semibold">
          Sumber: BPS, Sensus Penduduk (SP) 2010 dan Sensus Penduduk (SP) 2020
          September
        </div>
      </div>
    </div>
  );
};
