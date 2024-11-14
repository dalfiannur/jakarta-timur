import { Avatar } from "@/app/components/Avatar";
import { SectionTitle } from "../SectionTitle";
import { getData } from "./actions";

export default async function Page() {
  const { data } = await getData();

  return (
    <div className="flex-1">
      <SectionTitle>Sekretariat Kota</SectionTitle>
      <div className="mt-12 grid grid-cols-4 gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center h-full bg-blue-50 rounded-xl px-6 py-4"
          >
            <div className="grid gap-4">
              <Avatar src="/img/walikota.jpeg" size={50} alt={item.pejabat} />
              <div className="grid gap-1">
                <p className="font-semibold text-lg">{item.nama}</p>
                <p className="font-medium text-lg text-gray-600">
                  {item.pejabat}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
