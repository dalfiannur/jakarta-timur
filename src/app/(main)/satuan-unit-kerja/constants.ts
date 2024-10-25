export const SIDEBAR_ITEMS: {
  [key: string]: string;
} = {
  "struktur-organisasi": "Struktur Organisasi",
  walikota: "Walikota",
  "sekretariat-kota": "Sekretariat Kota",
  "bagian-kota": "Bagian Kota",
  ukpd: "Unit Kerja Perangkat Daerah",
  kecamatan: "Kecamatan",
  kelurahan: "Kelurahan",
};

export const sidebarItems = Object.entries(SIDEBAR_ITEMS).map(
  ([key, label]) => ({ key, label })
);
