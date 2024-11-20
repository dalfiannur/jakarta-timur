"use server";

export const getData = async () => {
  const res = await fetch(
    "https://timur.jakarta.go.id/API_Timur/api/kelurahan?limit=9"
  ).then((res) => res.json());

  return {
    data: res.data.data as { jabatan: string; nama: string }[],
    total: res.data.total as number,
  };
};
