import { Icon } from "@/app/icons";
import * as Plot from "@observablehq/plot";
import { useEffect, useRef } from "react";

const counters = [
  {
    title: "Total Keseluruhan Kelahiran",
    value: "41.684",
  },
  {
    title: "Total Keseluruhan Kematian",
    value: "21.677",
  },
  {
    title: "Total Keseluruhan",
    value: "63.361",
  },
];

const data = [
  {
    label: "Januari",
    value: [1000, 900],
  },
  {
    label: "Februari",
    value: [1010, 1000],
  },
  {
    label: "Maret",
    value: [1050, 1030],
  },
  {
    label: "April",
    value: [900, 1000],
  },
  {
    label: "Mei",
    value: [300, 500],
  },
  {
    label: "Juni",
    value: [900, 800],
  },
  {
    label: "Juli",
    value: [1500, 1000],
  },
  {
    label: "Agustus",
    value: [1000, 900],
  },
  {
    label: "September",
    value: [1020, 1000],
  },
  {
    label: "Oktober",
    value: [1000, 900],
  },
  {
    label: "November",
    value: [450, 600],
  },
  {
    label: "Desember",
    value: [600, 900],
  },
];

export const BirthRegistrationStatistic = () => {
  const statisticRef = useRef<HTMLDivElement>(null);

  const born = data.map((d) => ({
    ...d,
    value: d.value[0],
    type: "Kelahiran",
  }));
  const pass = data.map((d) => ({ ...d, value: d.value[1], type: "Kematian" }));

  useEffect(() => {
    const plot = Plot.plot({
      width: statisticRef.current?.clientWidth,
      height: 240,
      color: {
        legend: true,
        domain: ["Kelahiran", "Kematian"],
        range: ["#1DA1F2", "#EB30A2"],
      },
      marks: [
        Plot.lineY(born, {
          x: "label",
          y: "value",
          stroke: "type",
          tip: {
            anchor: "right",
          },
          title: (d) => `Angka ${d.type}\nBulan ${d.label}\nTotal ${d.value}`,
        }),
        Plot.lineY(pass, {
          x: "label",
          y: "value",
          stroke: "type",
          tip: {
            anchor: "left",
          },
          title: (d) => `Angka ${d.type}\nBulan ${d.label}\nTotal ${d.value}`,
        }),
      ],
      x: {
        label: null,
        domain: [
          "Januari",
          "Februari",
          "Maret",
          "April",
          "Mei",
          "Juni",
          "Juli",
          "Agustus",
          "September",
          "Oktober",
          "November",
          "Desember",
        ],
      },
      y: {
        label: null,
      },
    });

    statisticRef.current?.append(plot);
    return () => plot.remove();
  }, [born, pass, statisticRef]);

  return (
    <div className="border rounded-xl p-8">
      <h5 className="font-bold text-lg py-4">
        Registrasi Kelahiran dan Kematian Menurut Bulan di Kota Jakarta Timur,
        2020
      </h5>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {counters.map((item, index) => (
          <div key={index} className="border rounded-xl py-4 px-5">
            <h6 className="text-sm text-[#868E96]">{item.title}</h6>
            <p className="mt-1 text-[#1D252D] font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4" ref={statisticRef} />
      <p className="mt-4 flex gap-4 items-center text-blue-500 bg-blue-100 px-4 py-2 rounded-lg text-sm">
        <Icon name="Info" size={16} />
        Sumber/Source: Dinas Kependudukan dan Catatan Sipil Provinsi DKI
        Jakarta/Civil Registration Service of DKI Jakarta Province
      </p>
    </div>
  );
};
