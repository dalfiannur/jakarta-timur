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
      <div className="container mx-auto">
        <div className="flex justify-between py-8">
          <div>
            <Image src="/img/logo.png" alt="Logo" width={175} height={62} />
            <div className="text-sm text-gray-600 font-semibold mt-4 grid gap-1">
              <p>Kantor Walikota Jakarta Timur</p>
              <p>Jalan Dr. Sumarno Pulogebang Cakung</p>
              <p>Jakarta Timur</p>
            </div>
            <a href="#" className="text-pink-500 flex gap-2 items-center mt-4">
              <Icon name="MapHomeWork" size={16} />
              <p>Denah Kantor Walikota JT</p>
            </a>
          </div>
          <div>
            <h5 className="text-center font-semibold text-gray-500">
              Partner Wilayah
            </h5>
            <div className="mt-10 flex justify-center gap-14">
              {partners.map((item) => (
                <a
                  key={item.text}
                  href="#"
                  className="flex flex-col gap-4 text-gray-500"
                >
                  <Image
                    src={item.image}
                    alt={item.text}
                    width={80}
                    height={80}
                  />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800">Hubungi Kami</h5>
            <div className="mt-1 flex items-center gap-2 text-gray-500">
              <Icon name="Mail" size={16} />
              <p className="text-sm font-semibold">
                suratwalikotajkt@jakarta.go.id
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              <a href="#">
                <Icon name="FacebookColored" size={32} />
              </a>
              <a href="#">
                <Icon name="XColored" size={32} />
              </a>
              <a href="#">
                <Icon name="YoutubeColored" size={32} />
              </a>
              <a href="#">
                <Icon name="LinkedInColored" size={32} />
              </a>
              <a href="#">
                <Icon name="InstagramColored" size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pink-200/60 text-center py-4 text-pink-600 font-semibold">
        Copyrights © 2024 Suku Dinas Komunikasi, Informatika dan Statistik Kota
        Administrasi Jakarta Timur
      </div>
    </div>
  );
};
