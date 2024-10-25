interface Hospital {
  name: string;
  phone: string;
  address: string;
  logo: string;
  link: string;
  facilities: string[];
}

export const getHospitals = async (): Promise<Hospital[]> => {
  return [
    {
      name: "RSKD Duren Sawit",
      phone: "021-8401127",
      address:
        "Jl. Duren Sawit Baru No.2, RT.16/RW.6, Pd. Bambu, Kec. Duren Sawit",
      logo: "/img/rskd-duren-sawit.png",
      link: "#",
      facilities: [
        "Jantung Terpadu Level IV",
        "Stroke Terpadu Level III",
        "Trauma Center Level III",
        "Burn Center Level III",
        "Mata Level III",
        "Geriatri Terpadu Level I",
        "Dll",
      ],
    },
    {
      name: "RSUD Pasar Rebo",
      phone: "021-8401127",
      address: "Jl. TB Simatupang No.30, RT.9/RW.2, Gedong, Kec. Ps. Rebo",
      logo: "/img/rsud-pasar-rebo.png",
      link: "#",
      facilities: [
        "Jantung Terpadu Level II",
        "Stroke Terpadu Level II",
        "Trauma Center Level I",
        "Burn Center Level I",
        "Mata Level II",
        "Geriatri Terpadu Level II",
        "Dll",
      ],
    },
    {
      name: "RSUD Budhi Asih",
      phone: "021-8090282",
      address: "Jl. Dewi Sartika III/200 Cawang, Jakarta Timur 13630",
      logo: "/img/rsud-budhi-asih.png",
      link: "#",
      facilities: [
        "Jantung Terpadu Level II",
        "Stroke Terpadu Level II",
        "Trauma Center Level I",
        "Burn Center Level I",
        "Mata Level I",
        "Geriatri Terpadu Level II",
        "Dll",
      ],
    },
    {
      name: "RSU Adhyaksa",
      phone: "021-29462327",
      address: "Jl. Raya Mabes Hankam No.60, RT.7/RW.2, Ceger, Kec. Cipayung",
      logo: "/img/rsu-adhyaksa.png",
      link: "#",
      facilities: [
        "Jantung Terpadu Level II",
        "Stroke Terpadu Level II",
        "Trauma Center Level II",
        "Burn Center Level II",
        "Mata Level I",
        "Geriatri Terpadu Level II",
        "Dll",
      ],
    },
    {
      name: "RSUD Kramat Jati",
      phone: "(021) 87791352",
      address:
        "Jl. Raya Inpres No.48, RT.9/RW.9, Kp. Tengah, Kec. Kramat jati,",
      logo: "/img/rsud-kramat-jati.png",
      link: "#",
      facilities: [
        "Jantung Terpadu Level II",
        "Stroke Terpadu Level II",
        "Trauma Center Level I",
        "Burn Center Level I",
        "Mata Level II",
        "Geriatri Terpadu Level II",
        "Dll",
      ],
    },
    {
      name: "RSUD Matraman",
      phone: "021-8581957",
      address: "Jalan Kebon Kelapa No.29, RT.1/RW.10, Utan Kayu Sel",
      logo: "/img/rsud-matraman.png",
      link: "#",
      facilities: [
        "Jantung Terpadu Level IV",
        "Stroke Terpadu Level III",
        "Trauma Center Level III",
        "Burn Center Level III",
        "Mata Level III",
        "Geriatri Terpadu Level I",
        "Dll",
      ],
    },
    {
      name: "RSUD Ciracas",
      phone: "(021) 87711249",
      address: "Jl. Cibubur I No.RT.3, RT.13/RW.1, Cibubur, Kec. Ciracas",
      logo: "/img/rsud-ciracas.png",
      link: "#",
      facilities: [
        "Jantung Terpadu Level II",
        "Stroke Terpadu Level II",
        "Trauma Center Level I",
        "Burn Center Level I",
        "Mata Level II",
        "Geriatri Terpadu Level II",
        "Dll",
      ],
    },
    {
      name: "RSKD Cipayung",
      phone: "(021) 85506588",
      address: "Jl. Mini III, RT.4/RW.3, Bambu Apus, Kec. Cipayung",
      logo: "/img/rsud-cipayung.png",
      link: "#",
      facilities: [
        "Jantung Terpadu Level IV",
        "Stroke Terpadu Level III",
        "Trauma Center Level III",
        "Burn Center Level III",
        "Mata Level III",
        "Geriatri Terpadu Level I",
        "Dll",
      ],
    },
  ];
};
