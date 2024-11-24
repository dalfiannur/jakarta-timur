import Slider from "react-slick";
import { CarouselItem } from "../../_components/CarouselItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LIST_ITEMS = [
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
];

export const ImageSlider = () => {
  return (
    <div className="slick-container">
      <Slider
        slidesToShow={1}
        centerMode
        variableWidth
        arrows={false}
        adaptiveHeight
      >
        {LIST_ITEMS.map((item, index) => (
          <CarouselItem
            key={index}
            data={item}
            buttonLabel="Lihat Detail"
            detailRender={(row) => row.description}
          />
        ))}
      </Slider>
    </div>
  );
};
