import { Avatar } from "@/app/components/Avatar";
import { SectionTitle } from "./SectionTitle";

const items = [
  {
    image: "/img/walikota.jpeg",
    title: "Sekretaris Kota",
    name: "Kusmanto, S.Sos., M.Si.",
  },
  {
    image: "/img/walikota.jpeg",
    title: "Asisten Pemerintahan",
    name: "Eka Darmawan",
  },
  {
    image: "/img/walikota.jpeg",
    title: "Asisten Perekonomian dan Pembangunan",
    name: "Fauzi",
  },
  {
    image: "/img/walikota.jpeg",
    title: "Asisten Administrasi dan Kesejahteraan Rakyat",
    name: "Achmad Salahudin",
  },
];

export const SekretariatKotaSection = () => {
  return (
    <div>
      <SectionTitle>Sekretariat Kota</SectionTitle>
      <div className="mt-12 grid grid-cols-4 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center h-full bg-blue-50 rounded-xl px-6 py-4"
          >
            <div className="grid gap-4">
              <Avatar src={item.image} size={50} alt={item.name} />
              <div className="grid gap-1">
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="font-medium text-lg text-gray-600">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
