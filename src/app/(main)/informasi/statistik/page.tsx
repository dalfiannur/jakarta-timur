import { PageTitle } from "@/app/components/PageTitle";
import { CardItem } from "./CardItem";
import { Icon } from "@/app/icons";
import { Pagination } from "@/app/components/Pagination";
import { faker } from "@faker-js/faker";

const getData = async () => {
  "use server";
  const items = Array.from(new Array(15).keys()).map((_, i) => ({
    id: i + 1,
    title: "Kota Jakarta Timur Dalam Angka 2024",
    image: faker.image.urlPicsumPhotos(),
  }));

  return {
    items: items.slice(0, 10),
    pages: Math.ceil(items.length / 10),
  };
};

export default async function Page() {
  const data = await getData();
  return (
    <div>
      <PageTitle
        title="INFORMASI STATISTIK"
        image="/img/kantor-walikota-jaktim.png"
        subtitle="Ketahui inovasi yang telah dilakukan pemerintah Jakarta Timur"
        rounded={false}
        topSpacer
      />
      <div className="container mx-auto py-10">
        <div className="grid gap-2">
          <h1 className="text-4xl font-bold">
            Statistik Kota dan Kecamatan Jakarta Timur
          </h1>
          <p className="text-xl text-gray-600 tracking-wide">
            Dapatkan informasi terperinci mengenai berbagai data penting yang
            dirangkum oleh Badan Pusat Statistik untuk Jakarta Timur dan
            kecamatan di wilayahnya
          </p>
        </div>
        <div className="flex items-center gap-2 p-4">
          <i className="text-blue-500">
            <Icon name="Info" className="w-4 h-4" />
          </i>
          <a href="" className="text-blue-500 font-bold text-sm">
            Sumber: https://jaktimkota.bps.go.id/
          </a>
        </div>
        <div className="mt-6">
          <div className="grid grid-cols-5 gap-x-4 gap-y-12">
            {data.items.map((item, index) => (
              <CardItem key={index} {...item} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Pagination total={data.pages} color="blue" />
          </div>
        </div>
      </div>
    </div>
  );
}
