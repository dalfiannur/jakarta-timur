"use client";
import { PageTitle } from "@/app/components/PageTitle";
import { Carousel } from "../Carousel";
import { CarouselItem } from "./CarouselItem";

export default function Page() {
  return (
    <div>
      <PageTitle
        title="INFORMASI KEBUDAYAAN"
        subtitle="Informasi kebudayaan unik dan memikat yang tersebar di wilayah Jakarta Timur"
        image="/img/kantor-walikota-jaktim.png"
      />
      <div className="py-10">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-bold">
              Menelusuri Tradisi dan Budaya Khas di Jakarta Timur
            </h3>
            <div className="mt-2 text-2xl font-semibold text-gray-800">
              <p>
                Mengenal Lebih Dekat Tradisi dan Warisan Budaya yang Membentuk
                Jakarta Timur
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Carousel
              items={[
                {
                  title: "Warawis",
                  image: "/img/marawis.png",
                  description:
                    "Nama Gambang Kromong diambil dari nama alat musik yaitu gambang dan kromong. Ia juga merupakan paduan yang serasi antara unsur pribumi dan Cina. Unsur Cina tampak pada instrumen seperti tehyan, kongahyan, dan sukong, sementara unsur pribumi berupa kehadiran instrumen seperti gendang, kempul, gong, gong enam, kecrek, dan ningnong.",
                },
                {
                  title: "Gambang Kromong",
                  image: "/img/gambang-kromong.png",
                  description:
                    "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                },
                {
                  title: "Rebana Hadroh",
                  image: "/img/rebana-hadroh.png",
                  description:
                    "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                },
                {
                  title: "Velodrome",
                  image: "/img/velodrome.png",
                  description:
                    "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                },
                {
                  title: "Taman Benyamin Sueb",
                  image: "/img/taman-benyamin-sueb.png",
                  description:
                    "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                },
                {
                  title: "Gems Center Rawabening",
                  image: "/img/gems-center-rawabening.png",
                  description:
                    "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                },
                {
                  title: "Makam Pangeran Jayakarta",
                  image: "/img/makam-pangeran-jayakarta.png",
                  description:
                    "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                },
                {
                  title: "Equestrian Pulomas",
                  image: "/img/equestrian-pulomas.png",
                  description:
                    "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                },
                {
                  title: "Taman Wisata Lebah Madu Pramuka",
                  image: "/img/taman-wisata-lebah-madu-pramuka.png",
                  description:
                    "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                },
                {
                  title: "Agrowisata Cilangkap",
                  image: "/img/agrowisata-cilangkap.png",
                  description:
                    "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                },
              ]}
              renderItem={(item) => <CarouselItem {...item} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
