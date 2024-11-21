import { Icon } from "@/app/icons";
import { LineChart } from "../_components/LineChart";
import { formattedNumber } from "@/utils/format-number";
import data from "../_data/birth-death-reg-chart.json";

export const BirthDeathRegChartSection = () => {
  const birthData = data.data.map((d) => d.birth);
  const deathData = data.data.map((d) => d.death);

  return (
    <div className="border-none lg:border rounded-xl p-4 lg:p-8">
      <h5 className="font-bold text-base lg:text-lg py-2 lg:py-4 font-plus-jakarta-sans">
        Registrasi Kelahiran dan Kematian Menurut Bulan di Kota Jakarta Timur,
        2020
      </h5>
      <div className="my-2 lg:my-4 grid grid-cols-3 gap-2 lg:gap-4">
        {data.counters.map((item, index) => (
          <div key={index} className="border rounded-xl py-2 lg:py-4 px-2 lg:px-5">
            <h6 className="text-xs lg:text-sm text-[#868E96]">{item.title}</h6>
            <p className="mt-1 text-sm lg:text-base text-[#1D252D] font-semibold">
              {formattedNumber(item.value)}
            </p>
          </div>
        ))}
      </div>
      <LineChart birthData={birthData} deathData={deathData} />
      <div className="mt-4 flex gap-4 items-center text-blue-500 bg-blue-100 px-4 py-2 rounded-lg text-xs lg:text-sm font-plus-jakarta-sans">
        <Icon name="Info" size={16} />
        Sumber/Source: Dinas Kependudukan dan Catatan Sipil Provinsi DKI
        Jakarta/Civil Registration Service of DKI Jakarta Province
      </div>
    </div>
  );
};
