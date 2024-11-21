import { SectionTitle } from "../_components/SectionTitle";
import { CardItem } from "./CardItem";
import { MapArea } from "./MapArea";
import { StatisticItem } from "./StatisticItem";

export default function Page() {
  return (
    <div>
      <SectionTitle>Visi Misi &amp; Kegiatan Strategis</SectionTitle>
      <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 px-4">
        <MapArea />
        <div className="w-full lg:w-52 rounded-xl border p-4 flex flex-row lg:flex-col justify-between gap-4 lg:gap-16 h-fit">
          <StatisticItem title="Kecamatan" value={10} />
          <StatisticItem title="Kelurahan" value={65} />
          <StatisticItem title="Rukun Warga" value={711} />
          <StatisticItem title="Rukun Tetangga" value={7921} />
        </div>
      </div>

      <div className="mt-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 font-plus-jakarta-sans">
        <CardItem title="Letak Kota Jakarta Timur/Location of Jakarta Timur Municipality">
          <p>6&deg;10&acute;37&quot; Lintang Selatan/South Latitude</p>
          <p className="mt-4">
            106&deg;49&acute;35&quot; Bujur Timur/West Latitude
          </p>
        </CardItem>

        <CardItem title="Ketinggian di Atas Permukaan Laut">
          <p>16Meter</p>
        </CardItem>

        <CardItem title="Sebelah Selatan/Southern Boundaries">
          <p>Kabupaten Bogor (Provinsi Jawa Barat)</p>
        </CardItem>

        <CardItem title="Sebelah Timur/Eastern Boundaries">
          <p>Kota Bekasi (Jawa Barat)</p>
        </CardItem>

        <CardItem title="Sebelah Barat/Western Boundaries">
          <p>Kota Jakarta Selatan</p>
        </CardItem>

        <CardItem title="Sebelah Utara/Northern Boundaries">
          <p>Kecamatan Panjaringan, Kota Jakarta Utara</p>
        </CardItem>
      </div>
    </div>
  );
}
