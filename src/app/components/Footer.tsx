import Image from "next/image";
import { Icon } from "../icons";

const partners = [
  {
    image: "/img/dki.png",
    text: "DKI Jakarta",
  },
  {
    image: "/img/jakpus.png",
    text: "Jakarta Pusat",
  },
  {
    image: "/img/jaksel.png",
    text: "Jakarta Selatan",
  },
  {
    image: "/img/jakbar.png",
    text: "Jakarta Barat",
  },
  {
    image: "/img/jakut.png",
    text: "Jakarta Utara",
  },
  {
    image: "/img/pulau-seribu.png",
    text: "Pulau Seribu",
  },
];

export const Footer = () => {
  return (
    <div className="bg-white border-t">
      <div className="lg:container lg:mx-auto">
        <div className="flex flex-col gap-8 lg:flex-row items-center justify-between py-8">
          <div className="flex flex-col items-center">
            <Image src="/img/logo.png" alt="Logo" width={175} height={62} />
            <div className="text-center lg:text-left text-sm text-gray-600 font-semibold mt-4 grid gap-1">
              <p>Kantor Walikota Jakarta Timur</p>
              <p>Jalan Dr. Sumarno Pulogebang Cakung</p>
              <p>Jakarta Timur</p>
            </div>
            <a href="#" className="text-pink-500 flex gap-2 items-center mt-4">
              <Icon name="MapHomeWork" className="w-4 h-4" />
              <p>Denah Kantor Walikota JT</p>
            </a>
          </div>

          <div>
            <h5 className="text-left lg:text-center font-semibold text-gray-500">
              Partner Wilayah
            </h5>
            <div className="mt-5 lg:mt-10 grid grid-cols-3 lg:flex justify-center items-center flex-wrap gap-6 lg:gap-14">
              {partners.map((item) => (
                <a
                  key={item.text}
                  href="#"
                  className="inline-flex flex-col items-center gap-4 text-gray-500 text-center"
                >
                  <div className="w-16 lg:w-20 h-16 lg:h-20 relative">
                    <Image
                      src={item.image}
                      alt={item.text}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-fit px-4 lg:px-0">
            <h5 className="font-semibold text-gray-600">Hubungi Kami</h5>
            <div className="mt-1 flex items-center gap-2 text-gray-500">
              <Icon name="Mail" className="w-4 h-4" />
              <p className="text-sm font-normal lg:font-semibold">
                suratwalikotajkt@jakarta.go.id
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              <a href="#">
                <Icon name="FacebookColored" className="w-8 h-8" />
              </a>
              <a href="#">
                <Icon name="XColored" className="w-8 h-8" />
              </a>
              <a href="#">
                <Icon name="YoutubeColored" className="w-8 h-8" />
              </a>
              <a href="#">
                <Icon name="LinkedInColored" className="w-8 h-8" />
              </a>
              <a href="#">
                <Icon name="InstagramColored" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-pink-200/60 text-center py-4 text-pink-600 font-semibold text-xs lg:text-base px-4">
        Copyrights © 2024 Suku Dinas Komunikasi, Informatika dan Statistik Kota
        Administrasi Jakarta Timur
      </div>
    </div>
  );
};
