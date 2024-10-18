import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { animations } from "./animations";
import { NumberList } from "@/app/components/NumberList";
import { ReactNode } from "react";

export const VisiMisiSection = () => {
  return (
    <motion.div {...animations} className="border-l pl-6 flex-1">
      <SectionTitle>Visi Misi &amp; Kegiatan Strategis</SectionTitle>
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
