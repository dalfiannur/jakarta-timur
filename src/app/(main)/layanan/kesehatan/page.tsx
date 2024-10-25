import { PageTitle } from "@/app/components/PageTitle";
import { getHospitals } from "./actions";
import { Icon } from "@/app/icons";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const hospitals = await getHospitals();

  return (
    <div>
      <PageTitle
        title="Layanan Kesehatan"
        subtitle="Informasi Institusi Layanan Kesehatan di Jakarta Timur"
        image="/img/kantor-walikota-jaktim.png"
        topSpacer
      />
      <div className="py-12 container mx-auto">
        <div className="grid grid-cols-2 gap-6">
          {hospitals.map((item, index) => (
            <div key={index} className="border rounded-xl p-6 flex gap-10">
              <div className="p-1">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={118}
                  height={70}
                />
              </div>
              <div>
                <div className="flex-1 flex gap-6 border-b pb-6">
                  <div className="grid gap-[2px]">
                    <h3 className="font-bold text-2xl">{item.name}</h3>
                    <p className="text-xl text-gray-600">{item.address}</p>
                  </div>
                  <p className="text-xs whitespace-nowrap bg-green-100 text-green-700 h-fit w-fit p-2 rounded-full flex gap-2">
                    <Icon name="Phone" size={16} />
                    {item.phone}
                  </p>
                </div>
                <div className="mt-6">
                  <div className="text-gray-500">Fasilitas</div>
                  <ul className="mt-2 grid grid-cols-2 gap-2">
                    {item.facilities.map((facility, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="text-pink-500">
                          <Icon name="CheckOne" size={16} />
                        </div>
                        <span className="text-lg">{facility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={item.link}
                  className="mt-6 border border-pink-500 rounded-xl text-pink-500 p-4 text-semibold inline-block w-full text-center"
                >
                  Akses Website Resmi
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
