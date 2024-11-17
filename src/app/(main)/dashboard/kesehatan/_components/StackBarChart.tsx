"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import _ from "lodash";

const proList = ["Dokter", "Perawat", "Bidan", "Farmasi", "Ahli Gizi"];
const areaList = ["Cipayung", "Ciracas", "Makasar", "Duren Sawit", "Cakung"];

const data = areaList
  .map((area) =>
    proList.map((profession) => ({
      area,
      profession,
      value: 1,
    })),
  )
  .flat()
  .map((row, id) => ({
    ...row,
    id,
  }));

const xKey = "area";
const yKey = "profession";

export const StackBarChart = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const chart = echarts.init(ref.current);
      const xData = _.uniq(_.map(data, (d) => d[xKey]));
      const yData = _.groupBy(data, yKey);
      const series = _.map(yData, (d, key) => ({
        type: "bar",
        stack: "Total",
        name: key,
        data: _.map(d, (row) => ({
          name: row.profession,
          value: row.value,
        })),
      }));

      chart.setOption({
        tooltip: {},
        legend: {
          left: "left",
        },
        grid: {
          bottom: 20,
          left: 60,
          right: 20,
          top: 50,
        },
        yAxis: [
          {
            type: "value",
          },
        ],
        xAxis: [
          {
            type: "category",
            data: xData,
          },
        ],
        roundCap: true,
        series,
      });
    }
  }, [ref]);
  return <div ref={ref} className="h-[220px]" />;
};
