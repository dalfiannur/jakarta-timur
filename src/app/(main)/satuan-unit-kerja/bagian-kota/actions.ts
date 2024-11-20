"use server";

export const getData = async () => {
  const res = await fetch(
    "https://timur.jakarta.go.id/API_Timur/api/bagiankota"
  ).then((res) => res.json());

  return {
    data: res.data.data as { pejabat: string; nama: string }[],
  };
};
