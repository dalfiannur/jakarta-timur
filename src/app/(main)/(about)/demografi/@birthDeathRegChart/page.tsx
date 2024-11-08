import { Icon } from "@/app/icons";
import { Statistic } from "./Statistic";
import data from "./data.json";
import { formattedNumber } from "@/utils/format-number";

export default function Page() {
  const birthData = data.data.map((d) => d.birth);
  const deathData = data.data.map((d) => d.death);

  return (
    <div className="border rounded-xl p-8">
      <h5 className="font-bold text-lg py-4 font-plus-jakarta-sans">
        Registrasi Kelahiran dan Kematian Menurut Bulan di Kota Jakarta Timur,
        2020
      </h5>
      <div className="my-4 grid grid-cols-3 gap-4">
        {data.counters.map((item, index) => (
          <div key={index} className="border rounded-xl py-4 px-5">
            <h6 className="text-sm text-[#868E96]">{item.title}</h6>
            <p className="mt-1 text-[#1D252D] font-semibold">
              {formattedNumber(item.value)}
            </p>
          </div>
        ))}
      </div>
      <Statistic birthData={birthData} deathData={deathData} />
      <div className="mt-4 flex gap-4 items-center text-blue-500 bg-blue-100 px-4 py-2 rounded-lg text-sm font-plus-jakarta-sans">
        <Icon name="Info" size={16} />
        Sumber/Source: Dinas Kependudukan dan Catatan Sipil Provinsi DKI
        Jakarta/Civil Registration Service of DKI Jakarta Province
      </div>
    </div>
  );
}
