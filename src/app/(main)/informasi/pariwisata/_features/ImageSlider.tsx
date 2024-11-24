"use client";
import Slider from "react-slick";
import { CarouselItem } from "../_components/CarouselItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LIST_ITEMS = [
  {
    title: "Taman Mini Indonesia Indah",
    image: "/img/taman-mini-indonesia-indah.png",
    address:
      "Jl. Raya Pd. Gede, Lubang Buaya, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
    routes: [
      {
        type: "Bis",
        label: "4F, JAK20, K06, K40, M28.",
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
        label: "4F, JAK20, K06, K40, M28.",
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
        label: "4F, JAK20, K06, K40, M28.",
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
        label: "4F, JAK20, K06, K40, M28.",
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
        label: "4F, JAK20, K06, K40, M28.",
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
        label: "4F, JAK20, K06, K40, M28.",
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
        label: "4F, JAK20, K06, K40, M28.",
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
        label: "4F, JAK20, K06, K40, M28.",
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
        label: "4F, JAK20, K06, K40, M28.",
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
        label: "4F, JAK20, K06, K40, M28.",
      },
    ],
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
          <CarouselItem key={index} {...item} />
        ))}
      </Slider>
    </div>
  );
};
