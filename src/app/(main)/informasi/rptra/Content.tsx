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
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <ListNumberAccordion
          key={item.numberLabel}
          numberLabel={item.numberLabel}
          label={item.label}
        >
          <div className="grid grid-cols-1 gap-0 p-0 lg:grid-cols-3 lg:gap-8 lg:p-8">
            {item.items.map((row, index) => (
              <div
                key={index}
                className="rounded-none border p-4 lg:rounded-xl lg:p-8"
              >
                <div className="w-fit rounded bg-blue-100 p-3">
                  <Icon name="ParkMultiColored" className="h-10 w-10" />
                </div>
                <div className="mt-4 grid gap-2">
                  <h4 className="text-lg font-bold">{row.name}</h4>
                  <p className="text-gray-500">{row.address}</p>
                  <Link
                    href={row.link}
                    className="inline-flex w-fit gap-2 rounded-lg border border-pink-500 px-2 py-[6px] text-[10px] text-pink-500"
                  >
                    <Icon
                      name="GoogleMapColored"
                      className="h-[10px] w-[10px]"
                    />
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
