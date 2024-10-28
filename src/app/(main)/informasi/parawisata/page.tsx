import { PageTitle } from "@/app/components/PageTitle";
import { Carousel } from "./Carousel";

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
                  },
                  {
                    title: "Monumen Pancasila Sakti",
                    image: "/img/monumen-pancasila-sakti.png",
                  },
                  {
                    title: "Cibugary",
                    image: "/img/cibugary.png",
                  },
                  {
                    title: "Velodrome",
                    image: "/img/velodrome.png",
                  },
                  {
                    title: "Taman Benyamin Sueb",
                    image: "/img/taman-benyamin-sueb.png",
                  },
                  {
                    title: "Gems Center Rawabening",
                    image: "/img/gems-center-rawabening.png",
                  },
                  {
                    title: "Makam Pangeran Jayakarta",
                    image: "/img/makam-pangeran-jayakarta.png",
                  },
                  {
                    title: "Equestrian Pulomas",
                    image: "/img/equestrian-pulomas.png",
                  },
                  {
                    title: "Taman Wisata Lebah Madu Pramuka",
                    image: "/img/taman-wisata-lebah-madu-pramuka.png",
                  },
                  {
                    title: "Agrowisata Cilangkap",
                    image: "/img/agrowisata-cilangkap.png",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
