import Image from "next/image";

const items = [
  {
    image: "/img/jakgo.png",
  },
  {
    image: "/img/smart-city.png",
  },
  {
    image: "/img/satu-data.png",
  },
  {
    image: "/img/kominfotik.png",
  },
  {
    image: "/img/ppid.png",
  },
  {
    image: "/img/berita-jakarta.png",
  },
  {
    image: "/img/jakarta-satu.jpg",
  },
  {
    image: "/img/jdih.jpg",
  },
  {
    image: "/img/bps.png",
  },
  {
    image: "/img/dewan-pers.png",
  },
];

export const SponsorSection = () => {
  return (
    <div className="container mx-auto border-t py-8">
      <div className="grid grid-cols-5 gap-12">
        {items.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <a href="#">
              <Image src={item.image} alt="#" height={120} width={100} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
