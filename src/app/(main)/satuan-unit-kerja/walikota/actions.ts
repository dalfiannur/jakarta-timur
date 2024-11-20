"use server";

type DataItem = { jabatan: string, img_url: string, biodata: string, nama: string}

export const getData = async () => {
  const res = await fetch(
    "https://timur.jakarta.go.id/API_Timur/api/walikota",
  ).then((res) => res.json());

  const data = res.data as DataItem[]
  const waliKota = data.find((d) => d.jabatan === "Walikota") ?? null;
  const wakilWaliKota = data.find((d) => d.jabatan === "Wakil Walikota") ?? null;

  return [waliKota, wakilWaliKota].filter(Boolean) as DataItem[];
};
