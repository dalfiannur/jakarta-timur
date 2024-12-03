import { useEffect, useMemo, useRef } from "react";
import * as echarts from "echarts";

type StackBarChartOptions<T> = {
  data: T[];
  valueKey: keyof T;
  labelKey: keyof T;
  color?: string[];
  legendPosition?: "top-left";
};

export const usePieChart = <
  T extends { [key: string]: string | number | object },
>({
  data,
  color,
  labelKey,
  valueKey,
  legendPosition,
}: StackBarChartOptions<T>) => {
  const ref = useRef<HTMLDivElement>(null);
  const legend = legendPosition ? legendPosition.split("-") : undefined;
  const series = useMemo(
    () => ({
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 12,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: data.map((i) => ({ name: i[labelKey], value: i[valueKey] })),
    }),
    [valueKey, labelKey, data],
  );

  useEffect(() => {
    if (ref.current) {
      const chart = echarts.init(ref.current);
      chart.setOption({
        color,
        tooltip: {},
        legend: {
          top: legend?.[0],
          left: legend?.[1],
        },
        series,
      });
      return () => chart.dispose();
    }
  }, [data, color, legend, series]);

  return { ref };
};
