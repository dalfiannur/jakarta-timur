import { SectionTitle } from "./SectionTitle";
import { MapArea } from "@/app/components/MapArea";

const StatisticItem = ({ title, value }: { title: string; value: number }) => {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xl">{title}</div>
    </div>
  );
};

export const MapSection = () => {
  return (
    <div>
      <SectionTitle>Visi Misi &amp; Kegiatan Strategis</SectionTitle>
      <div className="mt-16 flex items-center justify-center gap-24">
        <MapArea />
        <div className="w-52 rounded-xl border p-4 grid gap-16 h-fit">
          <StatisticItem title="Kecamatan" value={10} />
          <StatisticItem title="Kelurahan" value={65} />
          <StatisticItem title="Rukun Warga" value={711} />
          <StatisticItem title="Rukun Tetangga" value={7921} />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-8">
        <div className="border rounded-xl p-8">
          <h5 className="font-semibold text-2xl">
            Letak Kota Jakarta Timur/Location of Jakarta Timur Municipality
          </h5>
          <div className="mt-4 text-2xl text-gray-600">
            <p>6&deg;10&acute;37&quot; Lintang Selatan/South Latitude</p>
            <p className="mt-4">
              106&deg;49&acute;35&quot; Bujur Timur/West Latitude
            </p>
          </div>
        </div>

        <div className="border rounded-xl p-8">
          <h5 className="font-semibold text-2xl">
            Ketinggian di Atas Permukaan Laut
          </h5>
          <div className="mt-4 text-2xl text-gray-600">
            <p>16Meter</p>
          </div>
        </div>

        <div className="border rounded-xl p-8">
          <h5 className="font-semibold text-2xl">
            Sebelah Selatan/Southern Boundaries
          </h5>
          <div className="mt-4 text-2xl text-gray-600">
            <p>Kabupaten Bogor (Provinsi Jawa Barat)</p>
          </div>
        </div>

        <div className="border rounded-xl p-8">
          <h5 className="font-semibold text-2xl">
            Sebelah Timur/Eastern Boundaries
          </h5>
          <div className="mt-4 text-2xl text-gray-600">
            <p>Kota Bekasi (Jawa Barat)</p>
          </div>
        </div>

        <div className="border rounded-xl p-8">
          <h5 className="font-semibold text-2xl">
            Sebelah Barat/Western Boundaries
          </h5>
          <div className="mt-4 text-2xl text-gray-600">
            <p>Kota Jakarta Selatan</p>
          </div>
        </div>

        <div className="border rounded-xl p-8">
          <h5 className="font-semibold text-2xl">
            Sebelah Utara/Northern Boundaries
          </h5>
          <div className="mt-4 text-2xl text-gray-600">
            <p>Kecamatan Panjaringan, Kota Jakarta Utara</p>
          </div>
        </div>
      </div>
    </div>
  );
};
