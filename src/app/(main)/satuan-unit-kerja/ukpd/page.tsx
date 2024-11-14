import { Icon } from "@/app/icons";
import { SectionTitle } from "../SectionTitle";
import { getData } from "./actions";
import { Pagination } from "@/app/components/Pagination";

export default async function Page() {
  const { data, total } = await getData();
  const pages = Math.ceil(total / 9);

  return (
    <div className="flex-1">
      <SectionTitle>Unit Kerja Perangkat Daerah</SectionTitle>
      <p className="mt-6 font-semibold">Menampilkan 1-9 dari {total} Data</p>
      <div className="mt-6 grid grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#F4F9FC] rounded py-4 px-6 flex flex-col justify-between gap-4"
          >
            <h5 className="text-xl font-semibold">{item.jabatan}</h5>
            <div className="flex items-center gap-4">
              <Icon name="UserRoundedBoldDuotone" size={24} />
              <h6 className="text-gray-500">{item.nama}</h6>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 flex justify-center">
        <Pagination total={pages} color="blue" />
      </div>
    </div>
  );
}
