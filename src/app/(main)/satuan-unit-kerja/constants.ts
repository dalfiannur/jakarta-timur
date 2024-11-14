export const SIDEBAR_ITEMS: {
  [key: string]: string;
} = {
  "/satuan-unit-kerja/struktur-organisasi": "Struktur Organisasi",
  "/satuan-unit-kerja/walikota": "Walikota",
  "/satuan-unit-kerja/sekretariat-kota": "Sekretariat Kota",
  "/satuan-unit-kerja/bagian-kota": "Bagian Kota",
  "/satuan-unit-kerja/ukpd": "Unit Kerja Perangkat Daerah",
  "/satuan-unit-kerja/wilayah/kecamatan": "Kecamatan",
  "/satuan-unit-kerja/wilayah/kelurahan": "Kelurahan",
};

export const sidebarItems = Object.entries(SIDEBAR_ITEMS).map(
  ([key, label]) => ({ key, label: key === "ukpd" ? "UKPD" : label }),
);
