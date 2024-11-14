"use server";

export const getData = async () => {
  const res = await fetch(
    "https://timur.jakarta.go.id/API_Timur/api/walikota",
  ).then((res) => res.json());

  const waliKota = res.data.find((d) => d.jabatan === "Walikota");
  const wakilWaliKota = res.data.find((d) => d.jabatan === "Wakil Walikota");

  return [waliKota, wakilWaliKota];
};
