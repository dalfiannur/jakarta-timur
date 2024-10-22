import { PageTitle } from "@/app/components/PageTitle";
import { CardItem } from "./CardItem";
import { Icon } from "@/app/icons";

export default function Page() {
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
            <Icon name="Info" size={16} />
          </i>
          <a href="" className="text-blue-500 font-bold text-sm">
            Sumber: https://jaktimkota.bps.go.id/
          </a>
        </div>
        <div className="mt-6 grid grid-cols-5 gap-x-4 gap-y-12">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </div>
  );
}
