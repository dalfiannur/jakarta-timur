export const SIDEBAR_ITEMS: { [key: string]: string } = {
  "/visi-misi": "Visi Misi & Kegiatan Strategis",
  "/peta-batas-wilayah": "Peta dan Batas Wilayah",
  "/demografi": "Demografi",
  "/prestasi": "Prestasi",
};

export const sidebarItems = Object.entries(SIDEBAR_ITEMS).map(
  ([key, label]) => ({ key, label }),
);
