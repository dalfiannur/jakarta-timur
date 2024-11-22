import { Icon } from "@/app/icons";
import { SectionTitle } from "../SectionTitle";
import { getData } from "./actions";

export default async function Page() {
  const { data } = await getData();

  return (
    <div className="flex-1">
      <SectionTitle>Bagian Kota</SectionTitle>
      <div className="mt-8 grid grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#F4F9FC] rounded py-4 px-6 flex flex-col gap-4"
          >
            <h5 className="text-xl font-semibold">{item.pejabat}</h5>
            <div className="flex items-center gap-4">
              <Icon name="UserRoundedBoldDuotone" className="w-6 h-6" />
              <h6 className="text-gray-500">{item.nama}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
