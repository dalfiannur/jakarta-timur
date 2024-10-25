"use client";

import { ListNumberAccordion } from "@/app/components/ListNumberAccordion";
import { Icon } from "@/app/icons";
import Link from "next/link";

const items = [
  {
    label: "Kecamatan Matraman",
    numberLabel: 1,
    items: [
      {
        name: "Utakase Berseri",
        address: "Jl. Galur Sari II Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Puspa Hati",
        address: "Jl. Pandan RW 009 Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Utakara Beriman",
        address: "Jl. Balai Rakyat RT.014/06, Belakang SMPN 7",
        link: "#",
      },
    ],
  },
  {
    label: "Kecamatan Pulo Gadung",
    numberLabel: 2,
    items: [
      {
        name: "Utakase Berseri",
        address: "Jl. Galur Sari II Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Puspa Hati",
        address: "Jl. Pandan RW 009 Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Utakara Beriman",
        address: "Jl. Balai Rakyat RT.014/06, Belakang SMPN 7",
        link: "#",
      },
    ],
  },
  {
    label: "Kecamatan Jatinegara",
    numberLabel: 3,
    items: [
      {
        name: "Utakase Berseri",
        address: "Jl. Galur Sari II Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Puspa Hati",
        address: "Jl. Pandan RW 009 Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Utakara Beriman",
        address: "Jl. Balai Rakyat RT.014/06, Belakang SMPN 7",
        link: "#",
      },
    ],
  },
  {
    label: "Kecamatan Kramat Jati",
    numberLabel: 4,
    items: [
      {
        name: "Utakase Berseri",
        address: "Jl. Galur Sari II Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Puspa Hati",
        address: "Jl. Pandan RW 009 Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Utakara Beriman",
        address: "Jl. Balai Rakyat RT.014/06, Belakang SMPN 7",
        link: "#",
      },
    ],
  },
  {
    label: "Kecamatan Pasar Rebo",
    numberLabel: 5,
    items: [
      {
        name: "Utakase Berseri",
        address: "Jl. Galur Sari II Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Puspa Hati",
        address: "Jl. Pandan RW 009 Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Utakara Beriman",
        address: "Jl. Balai Rakyat RT.014/06, Belakang SMPN 7",
        link: "#",
      },
    ],
  },
  {
    label: "Kecamatan Cakung",
    numberLabel: 6,
    items: [
      {
        name: "Utakase Berseri",
        address: "Jl. Galur Sari II Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Puspa Hati",
        address: "Jl. Pandan RW 009 Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Utakara Beriman",
        address: "Jl. Balai Rakyat RT.014/06, Belakang SMPN 7",
        link: "#",
      },
    ],
  },
  {
    label: "Kecamatan Duren Sawit",
    numberLabel: 7,
    items: [
      {
        name: "Utakase Berseri",
        address: "Jl. Galur Sari II Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Puspa Hati",
        address: "Jl. Pandan RW 009 Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Utakara Beriman",
        address: "Jl. Balai Rakyat RT.014/06, Belakang SMPN 7",
        link: "#",
      },
    ],
  },
  {
    label: "Kecamatan Makasar",
    numberLabel: 8,
    items: [
      {
        name: "Utakase Berseri",
        address: "Jl. Galur Sari II Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Puspa Hati",
        address: "Jl. Pandan RW 009 Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Utakara Beriman",
        address: "Jl. Balai Rakyat RT.014/06, Belakang SMPN 7",
        link: "#",
      },
    ],
  },
  {
    label: "Kecamatan Ciracas",
    numberLabel: 9,
    items: [
      {
        name: "Utakase Berseri",
        address: "Jl. Galur Sari II Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Puspa Hati",
        address: "Jl. Pandan RW 009 Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Utakara Beriman",
        address: "Jl. Balai Rakyat RT.014/06, Belakang SMPN 7",
        link: "#",
      },
    ],
  },
  {
    label: "Kecamatan Cipayung",
    numberLabel: 10,
    items: [
      {
        name: "Utakase Berseri",
        address: "Jl. Galur Sari II Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Puspa Hati",
        address: "Jl. Pandan RW 009 Kelurahan Utan Kayu Selatan",
        link: "#",
      },
      {
        name: "Utakara Beriman",
        address: "Jl. Balai Rakyat RT.014/06, Belakang SMPN 7",
        link: "#",
      },
    ],
  },
];

export const Content = () => {
  return (
    <div>
      {items.map((item) => (
        <ListNumberAccordion
          key={item.numberLabel}
          numberLabel={item.numberLabel}
          label={item.label}
        >
          <div className="grid grid-cols-3 gap-8 p-8">
            {item.items.map((row, index) => (
              <div key={index} className="border rounded-xl p-8">
                <div className="bg-blue-100 w-fit rounded p-3">
                  <Icon name="ParkMultiColored" size={40} />
                </div>
                <div className="mt-4 grid gap-2">
                  <h4 className="text-lg font-bold">{row.name}</h4>
                  <p className="text-gray-500">{row.address}</p>
                  <Link
                    href={row.link}
                    className="border border-pink-500 text-pink-500 text-[10px] rounded-lg w-fit py-[6px] px-2 inline-flex gap-2"
                  >
                    <Icon name="GoogleMapColored" size={10} />
                    Lihat di Google Maps
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ListNumberAccordion>
      ))}
    </div>
  );
};
