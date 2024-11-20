"use client";
import { PageTitle } from "@/app/components/PageTitle";
import { Carousel } from "../Carousel";
import { CarouselItem } from "./CarouselItem";

export default function Page() {
  return (
    <div>
      <PageTitle
        title="INFORMASI PARIWISATA"
        subtitle="Informasi destinasi wisata unik dan memikat yang tersebar di wilayah Jakarta Timur"
        image="/img/kantor-walikota-jaktim.png"
      />
      <div className="py-10">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-bold">
              Jelajahi Destinasi Seru di Jakarta Timur
            </h3>
            <div className="mt-2 text-2xl font-semibold text-gray-800">
              <p>
                Dari taman hingga situs bersejarah, Jakarta Timur menyimpan
                banyak destinasi yang wajib dikunjungi.
              </p>
              <p>
                Mari jelajahi keindahan kota dengan panduan terbaik dari
                pemerintah
              </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-center gap-4 text-xl font-semibold">
              <button className="border-b-2 border-pink-500 text-pink-500">
                Museum
              </button>
              <button>Sanggar Seni</button>
              <button>Destinasi Budaya</button>
              <button>Cagar Budaya</button>
            </div>

            <div className="mt-6">
              <Carousel
                items={[
                  {
                    title: "Taman Mini Indonesia Indah",
                    image: "/img/taman-mini-indonesia-indah.png",
                    address:
                      "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                    routes: [
                      {
                        type: "Bis",
                        label: "4F, JAK20, K06, K40, M28.",
                      },
                      {
                        type: "KRL",
                        label: "Tujuan Stasiun Pasar Minggu.",
                      },
                      {
                        type: "Angkot",
                        label: "KWK S 15 A, KWK T 10, KWK T 04.",
                      },
                    ],
                  },
                  {
                    title: "Monumen Pancasila Sakti",
                    image: "/img/monumen-pancasila-sakti.png",
                    address:
                      "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                    routes: [
                      {
                        type: "Bis",
                        label: "4F, JAK20, K06, K40, M28.",
                      },
                    ],
                  },
                  {
                    title: "Cibugary",
                    image: "/img/cibugary.png",
                    address:
                      "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                    routes: [
                      {
                        type: "Bis",
                        label: "4F, JAK20, K06, K40, M28.",
                      },
                    ],
                  },
                  {
                    title: "Velodrome",
                    image: "/img/velodrome.png",
                    address:
                      "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                    routes: [
                      {
                        type: "Bis",
                        label: "4F, JAK20, K06, K40, M28.",
                      },
                    ],
                  },
                  {
                    title: "Taman Benyamin Sueb",
                    image: "/img/taman-benyamin-sueb.png",
                    address:
                      "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                    routes: [
                      {
                        type: "Bis",
                        label: "4F, JAK20, K06, K40, M28.",
                      },
                    ],
                  },
                  {
                    title: "Gems Center Rawabening",
                    image: "/img/gems-center-rawabening.png",
                    address:
                      "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                    routes: [
                      {
                        type: "Bis",
                        label: "4F, JAK20, K06, K40, M28.",
                      },
                    ],
                  },
                  {
                    title: "Makam Pangeran Jayakarta",
                    image: "/img/makam-pangeran-jayakarta.png",
                    address:
                      "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                    routes: [
                      {
                        type: "Bis",
                        label: "4F, JAK20, K06, K40, M28.",
                      },
                    ],
                  },
                  {
                    title: "Equestrian Pulomas",
                    image: "/img/equestrian-pulomas.png",
                    address:
                      "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                    routes: [
                      {
                        type: "Bis",
                        label: "4F, JAK20, K06, K40, M28.",
                      },
                    ],
                  },
                  {
                    title: "Taman Wisata Lebah Madu Pramuka",
                    image: "/img/taman-wisata-lebah-madu-pramuka.png",
                    address:
                      "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                    routes: [
                      {
                        type: "Bis",
                        label: "4F, JAK20, K06, K40, M28.",
                      },
                    ],
                  },
                  {
                    title: "Agrowisata Cilangkap",
                    image: "/img/agrowisata-cilangkap.png",
                    address:
                      "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
                    routes: [
                      {
                        type: "Bis",
                        label: "4F, JAK20, K06, K40, M28.",
                      },
                    ],
                  },
                ]}
                renderItem={(item) => <CarouselItem {...item} />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
