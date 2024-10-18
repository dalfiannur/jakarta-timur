"use client";

import { ReactNode, useContext } from "react";
import { Context } from "./context";
import { AnimatePresence, motion } from "framer-motion";
import { NumberList } from "@/app/components/NumberList";
import { MapArea } from "@/app/components/MapArea";
import { Icon } from "@/app/icons";
import { PrestasiItem } from "./PrestasiItem";

export const Content = () => {
  const { selectedTab } = useContext(Context);

  return (
    <div className="flex-1">
      <AnimatePresence>
        {selectedTab === "visi-misi" && <VisiMisi />}
        {selectedTab === "peta" && <PetaWilayah />}
        {selectedTab === "demografi" && <Demografi />}
        {selectedTab === "prestasi" && <Prestasi />}
      </AnimatePresence>
    </div>
  );
};

const animations = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  exit: { y: -10, opacity: 0 },
};

const Title = ({ children }: { children?: ReactNode }) => (
  <h4 className="text-4xl font-bold">{children}</h4>
);

const VisiMisiCard = ({
  icon,
  children,
}: {
  icon: ReactNode;
  children?: ReactNode;
}) => {
  return (
    <div className="w-48 h-48 rounded-xl shadow-light flex flex-col gap-6 justify-center items-center p-2">
      <div className="w-14 h-14 rounded bg-gray-500">{icon}</div>
      <div className="text-center text-lg font-medium text-gray-800">
        {children}
      </div>
    </div>
  );
};

const VisiMisi = () => {
  return (
    <motion.div {...animations} className="border-l pl-6 flex-1">
      <Title>Visi Misi &amp; Kegiatan Strategis</Title>
      <div className="mt-8">
        <div className="flex gap-8 bg-blue-500 rounded-3xl text-white px-8 py-6">
          <div>
            <h4 className="text-3xl font-bold">Visi</h4>
            <p className="mt-8 font-semibold text-2xl">
              Terwujud Kota Administrasi Jakarta Timur yang berorientasi kepada
              pelayanan publik menuju kota berekonomi modern.
            </p>
          </div>
          <div className="bg-blue-600 aspect-video rounded-xl h-52"></div>
        </div>

        <div className="mt-8 flex gap-8">
          <div className="w-80">Gambar</div>
          <div className="flex-1">
            <h4 className="text-3xl font-bold text-pink-500 mb-8">Misi</h4>
            <NumberList
              data={[
                "Meningkatkan pengelolaan dan pelayanan informasi yang berkualitas, benar dan bertanggung jawab.",
                "Membangun dan mengembangkan sistem penyediaan dan layanan informasi.",
                "Meningkatkan dan mengembangkan kompetensi dan kualitas SDM dalam bidang pelayanan informasi.",
                "Mewujudkan keterbukaan informasi Sekretariat Kota Administrasi Jakarta Timur dengan proses yang cepat, tepat, mudah dan sederhana.",
              ]}
            />
          </div>
        </div>

        <div className="border-t my-10" />

        <div className="flex items-center gap-14 p-8">
          <div>
            <h4 className="font-bold text-3xl">Kegiatan Strategis</h4>
            <p className="mt-4 text-xl text-gray-600">
              Proyek Strategis yang Mempersiapkan Kota untuk Masa Depan yang
              Lebih Baik.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <VisiMisiCard icon={"Icon"}>
              Pengendalian dan Penanganan Banjir
            </VisiMisiCard>
            <div className="grid gap-5">
              <VisiMisiCard icon={"Icon"}>
                Pengendalian dan Penanganan Banjir
              </VisiMisiCard>
              <VisiMisiCard icon={"Icon"}>
                Pengendalian dan Penanganan Banjir
              </VisiMisiCard>
            </div>
            <VisiMisiCard icon={"Icon"}>
              Pengendalian dan Penanganan Banjir
            </VisiMisiCard>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StatisticItem = ({ title, value }: { title: string; value: number }) => {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xl">{title}</div>
    </div>
  );
};

const PetaWilayah = () => {
  return (
    <motion.div {...animations}>
      <Title>Visi Misi &amp; Kegiatan Strategis</Title>
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
    </motion.div>
  );
};

const Demografi = () => {
  return (
    <motion.div {...animations}>
      <h4>Demografi</h4>
    </motion.div>
  );
};


const Prestasi = () => {
  return (
    <motion.div {...animations}>
      <Title>Prestasi</Title>
      <div className="mt-8">
        <div className="border rounded-xl overflow-hidden flex pl-4 items-center focus-within:border-pink-400">
          <Icon name="Search" size={24} />
          <input
            className="py-4 px-6 flex-1 focus:outline-none"
            placeholder="Cari Nama Dokumen"
          />
        </div>
        <div className="mt-8">x</div>
        <div className="mt-8 grid grid-cols-3 gap-8">
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
          <PrestasiItem />
        </div>
      </div>
    </motion.div>
  );
};
